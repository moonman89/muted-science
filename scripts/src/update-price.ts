import { getUncachableStripeClient } from './stripeClient';

async function updatePrice() {
  const stripe = await getUncachableStripeClient();

  const products = await stripe.products.search({
    query: "name:'MS-001 Pronounced Love' AND active:'true'"
  });

  if (products.data.length === 0) {
    console.error('Product not found');
    process.exit(1);
  }

  const product = products.data[0];
  console.log('Found product:', product.id);

  const existingPrices = await stripe.prices.list({ product: product.id, active: true });
  console.log('Existing active prices:', existingPrices.data.map(p => `${p.id} ($${(p.unit_amount! / 100).toFixed(2)})`));

  const newPrice = await stripe.prices.create({
    product: product.id,
    unit_amount: 3800,
    currency: 'usd',
  });
  console.log('Created new price:', newPrice.id, '($38.00)');

  for (const price of existingPrices.data) {
    if (price.id !== newPrice.id) {
      await stripe.prices.update(price.id, { active: false });
      console.log('Deactivated old price:', price.id);
    }
  }

  console.log('Done. Price updated to $38.00.');
}

updatePrice();
