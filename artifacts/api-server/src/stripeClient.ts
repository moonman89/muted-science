import Stripe from 'stripe';

async function getCredentials(): Promise<{ publishableKey: string; secretKey: string }> {
  const secretKey = process.env.STRIPE_SK || process.env.STRIPE_SECRET_KEY;
  const publishableKey = process.env.STRIPE_PK || process.env.STRIPE_PUBLISHABLE_KEY;

  if (secretKey && publishableKey) {
    return { secretKey, publishableKey };
  }

  throw new Error(
    'Stripe credentials not found. Set STRIPE_SECRET_KEY and STRIPE_PUBLISHABLE_KEY as secrets.'
  );
}

// WARNING: Never cache this client — tokens expire.
export async function getUncachableStripeClient(): Promise<Stripe> {
  const { secretKey } = await getCredentials();
  return new Stripe(secretKey, { apiVersion: '2025-08-27.basil' });
}

export async function getStripePublishableKey(): Promise<string> {
  const { publishableKey } = await getCredentials();
  return publishableKey;
}

// StripeSync singleton — OK to cache (uses secret key directly, not proxy token)
let stripeSync: any = null;

export async function getStripeSync() {
  if (!stripeSync) {
    const { StripeSync } = await import('stripe-replit-sync');
    const { secretKey } = await getCredentials();

    stripeSync = new StripeSync({
      poolConfig: {
        connectionString: process.env.DATABASE_URL!,
        max: 2,
      },
      stripeSecretKey: secretKey,
    });
  }
  return stripeSync;
}
