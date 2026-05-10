import Stripe from 'stripe';

// Replit integration: conn_stripe_01KR5DX17Z0M0Z5GXXQ7XYR1TZ
async function getCredentials(): Promise<{ publishableKey: string; secretKey: string }> {
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY
    ? 'repl ' + process.env.REPL_IDENTITY
    : process.env.WEB_REPL_RENEWAL
    ? 'depl ' + process.env.WEB_REPL_RENEWAL
    : null;

  if (hostname && xReplitToken) {
    const connectionSettings = await fetch(
      'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=stripe',
      {
        headers: {
          Accept: 'application/json',
          'X-Replit-Token': xReplitToken,
        },
      }
    )
      .then(res => res.json())
      .then((data: any) => data.items?.[0]);

    if (connectionSettings?.settings?.secret_key && connectionSettings?.settings?.publishable_key) {
      return {
        secretKey: connectionSettings.settings.secret_key,
        publishableKey: connectionSettings.settings.publishable_key,
      };
    }
  }

  const secretKey = process.env.STRIPE_SECRET_KEY;
  const publishableKey = process.env.STRIPE_PUBLISHABLE_KEY;

  if (secretKey && publishableKey) {
    return { secretKey, publishableKey };
  }

  throw new Error(
    'Stripe credentials not found. Connect Stripe via the Replit integrations panel or set STRIPE_SECRET_KEY and STRIPE_PUBLISHABLE_KEY as secrets.'
  );
}

// WARNING: Never cache this client — tokens expire.
export async function getUncachableStripeClient(): Promise<Stripe> {
  const { secretKey } = await getCredentials();
  return new Stripe(secretKey, { apiVersion: '2026-04-22.dahlia' });
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
