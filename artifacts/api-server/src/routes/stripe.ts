import { Router, type IRouter } from 'express';
import { storage } from '../storage';
import { getUncachableStripeClient } from '../stripeClient';

const router: IRouter = Router();

router.get('/stripe/products', async (_req, res) => {
  try {
    const rows = await storage.listProductsWithPrices();
    const productsMap = new Map<string, any>();
    for (const row of rows) {
      if (!productsMap.has(row.product_id as string)) {
        productsMap.set(row.product_id as string, {
          id: row.product_id,
          name: row.product_name,
          description: row.product_description,
          metadata: row.product_metadata,
          images: row.product_images,
          prices: [],
        });
      }
      if (row.price_id) {
        productsMap.get(row.product_id as string).prices.push({
          id: row.price_id,
          unit_amount: row.unit_amount,
          currency: row.currency,
          active: row.price_active,
        });
      }
    }
    res.json({ data: Array.from(productsMap.values()) });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/stripe/checkout', async (req, res) => {
  try {
    const { priceId, email } = req.body as { priceId: string; email: string };

    if (!priceId || !email) {
      return res.status(400).json({ error: 'priceId and email are required' });
    }

    const stripe = await getUncachableStripeClient();
    const baseUrl = `https://${process.env.REPLIT_DOMAINS?.split(',')[0]}`;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      customer_email: email,
      line_items: [{ price: priceId, quantity: 1 }],
      mode: 'payment',
      success_url: `${baseUrl}/releases/ms-001-pronounced-love?purchased=true`,
      cancel_url: `${baseUrl}/checkout/ms-001?cancelled=true`,
      metadata: {
        send_pdf_email: 'true',
        buyer_email: email,
      },
    });

    res.json({ url: session.url });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
