import { getUncachableStripeClient } from './stripeClient';

async function createProducts() {
  try {
    const stripe = await getUncachableStripeClient();

    console.log('Checking for existing MS-001 product...');
    const existing = await stripe.products.search({
      query: "name:'MS-001 Pronounced Love' AND active:'true'"
    });

    if (existing.data.length > 0) {
      console.log('MS-001 Pronounced Love already exists:', existing.data[0].id);
      const prices = await stripe.prices.list({ product: existing.data[0].id, active: true });
      console.log('Price ID:', prices.data[0]?.id);
      return;
    }

    console.log('Creating MS-001 Pronounced Love...');
    const product = await stripe.products.create({
      name: 'MS-001 Pronounced Love',
      description: 'A publication by Muted Science. Delivered as a PDF to your email immediately after purchase.',
      metadata: {
        type: 'digital_book',
        format: 'pdf',
        issue: 'MS-001',
      },
    });
    console.log('Created product:', product.id);

    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: 1500,
      currency: 'usd',
    });
    console.log('Created price:', price.id, '($15.00)');

    console.log('Done. Run the API server to sync data to the database.');
  } catch (error: any) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

createProducts();
