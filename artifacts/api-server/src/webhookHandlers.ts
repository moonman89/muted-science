import crypto from 'crypto';
import type Stripe from 'stripe';
import { getStripeSync } from './stripeClient';
import { storage } from './storage';
import { sendPurchaseEmail } from './lib/email';
import { logger } from './lib/logger';

async function handleCheckoutSessionCompleted(session: Stripe.Checkout.Session): Promise<void> {
  const sessionId = session.id;

  // Idempotency guard — skip if we already processed this session
  const existing = await storage.getPurchaseBySessionId(sessionId);
  if (existing) {
    logger.info({ sessionId }, 'Purchase already recorded — skipping duplicate webhook');
    return;
  }

  const email = session.customer_details?.email ?? session.customer_email ?? null;
  if (!email) {
    logger.error({ sessionId }, 'checkout.session.completed has no customer email — cannot deliver ebook');
    return;
  }

  const name = session.customer_details?.name ?? null;
  const product = session.metadata?.product_name ?? 'MS-001 — Pronounced Love';

  const downloadToken = crypto.randomUUID();
  const tokenExpiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

  await storage.createPurchase({
    email,
    name,
    stripeSessionId: sessionId,
    paymentStatus: session.payment_status ?? 'paid',
    product,
    downloadToken,
    tokenExpiresAt,
    downloadCount: 0,
  });

  logger.info({ sessionId, email }, 'Purchase recorded');

  const domain = process.env.REPLIT_DOMAINS?.split(',')[0];
  const downloadUrl = `https://${domain}/api/download/${downloadToken}`;

  try {
    await sendPurchaseEmail({ toEmail: email, toName: name, downloadUrl, productName: product });
  } catch (err) {
    logger.error({ err, email, sessionId }, 'Failed to send purchase email — purchase saved, manual delivery needed');
  }
}

export class WebhookHandlers {
  static async processWebhook(payload: Buffer, signature: string): Promise<void> {
    if (!Buffer.isBuffer(payload)) {
      throw new Error(
        'STRIPE WEBHOOK ERROR: Payload must be a Buffer. ' +
        'Received type: ' + typeof payload + '. ' +
        'This usually means express.json() parsed the body before reaching this handler. ' +
        'FIX: Ensure webhook route is registered BEFORE app.use(express.json()).'
      );
    }

    // stripe-replit-sync verifies the signature internally
    const sync = await getStripeSync();
    await sync.processWebhook(payload, signature);

    // Parse the event after signature has been verified by stripe-replit-sync above
    let event: Stripe.Event;
    try {
      event = JSON.parse(payload.toString()) as Stripe.Event;
    } catch (err) {
      logger.error({ err }, 'Failed to parse Stripe webhook payload as JSON');
      return;
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;
      await handleCheckoutSessionCompleted(session).catch((err) => {
        logger.error({ err, sessionId: session.id }, 'Error in handleCheckoutSessionCompleted');
      });
    }
  }
}
