import Stripe from 'stripe';

async function fetchFromHelium(): Promise<{ publishableKey: string; secretKey: string }> {
  const isProduction = process.env.REPLIT_DEPLOYMENT === '1';
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY
    ? 'repl ' + process.env.REPL_IDENTITY
    : process.env.WEB_REPL_RENEWAL
      ? 'depl ' + process.env.WEB_REPL_RENEWAL
      : null;

  if (!hostname || !xReplitToken) {
    throw new Error('Helium proxy not available');
  }

  const targetEnvironment = isProduction ? 'production' : 'development';
  const url = new URL(`https://${hostname}/api/v2/connection`);
  url.searchParams.set('include_secrets', 'true');
  url.searchParams.set('connector_names', 'stripe');
  url.searchParams.set('environment', targetEnvironment);

  const response = await fetch(url.toString(), {
    headers: {
      'Accept': 'application/json',
      'X-Replit-Token': xReplitToken,
    },
    signal: AbortSignal.timeout(5_000),
  });

  if (!response.ok) {
    throw new Error(`Helium responded ${response.status}`);
  }

  const data = await response.json();
  const settings = data.items?.[0]?.settings;

  if (!settings?.publishable || !settings?.secret) {
    throw new Error('Helium returned no Stripe keys');
  }

  return { publishableKey: settings.publishable, secretKey: settings.secret };
}

async function getCredentials(): Promise<{ publishableKey: string; secretKey: string }> {
  // Try the Replit connectors proxy first (correct account in dev).
  // Fall back to env vars if helium is unavailable or flaky.
  try {
    return await fetchFromHelium();
  } catch {
    const secretKey = process.env.STRIPE_SECRET_KEY;
    const publishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
    if (secretKey && publishableKey) {
      return { secretKey, publishableKey };
    }
    throw new Error(
      'Stripe credentials not found. Set STRIPE_SECRET_KEY and STRIPE_PUBLISHABLE_KEY ' +
      'environment variables, or connect Stripe via the Integrations tab.'
    );
  }
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
