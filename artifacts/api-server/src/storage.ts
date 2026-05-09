import { Pool } from 'pg';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export const storage = {
  async listProductsWithPrices() {
    const result = await pool.query(`
      SELECT
        p.id AS product_id,
        p.name AS product_name,
        p.description AS product_description,
        p.metadata AS product_metadata,
        p.images AS product_images,
        pr.id AS price_id,
        pr.unit_amount,
        pr.currency,
        pr.active AS price_active
      FROM stripe.products p
      LEFT JOIN stripe.prices pr ON pr.product = p.id AND pr.active = true
      WHERE p.active = true
      ORDER BY p.created DESC
    `);
    return result.rows;
  },

  async getPrice(priceId: string) {
    const result = await pool.query(
      `SELECT id, unit_amount, currency, product, active FROM stripe.prices WHERE id = $1`,
      [priceId]
    );
    return result.rows[0] ?? null;
  },
};
