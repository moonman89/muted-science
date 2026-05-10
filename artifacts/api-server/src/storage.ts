import { Pool } from 'pg';
import { db } from '@workspace/db';
import { purchasesTable, emailSignupsTable, type InsertPurchase } from '@workspace/db/schema';
import { eq } from 'drizzle-orm';

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

  async createPurchase(data: InsertPurchase) {
    const [row] = await db.insert(purchasesTable).values(data).returning();
    return row;
  },

  async getPurchaseBySessionId(stripeSessionId: string) {
    const [row] = await db
      .select()
      .from(purchasesTable)
      .where(eq(purchasesTable.stripeSessionId, stripeSessionId))
      .limit(1);
    return row ?? null;
  },

  async getPurchaseByToken(token: string) {
    const [row] = await db
      .select()
      .from(purchasesTable)
      .where(eq(purchasesTable.downloadToken, token))
      .limit(1);
    return row ?? null;
  },

  async incrementDownloadCount(token: string) {
    const [row] = await db
      .select({ downloadCount: purchasesTable.downloadCount })
      .from(purchasesTable)
      .where(eq(purchasesTable.downloadToken, token))
      .limit(1);
    if (!row) return;
    await db
      .update(purchasesTable)
      .set({ downloadCount: row.downloadCount + 1 })
      .where(eq(purchasesTable.downloadToken, token));
  },

  async createEmailSignup(email: string) {
    const [row] = await db
      .insert(emailSignupsTable)
      .values({ email: email.toLowerCase().trim() })
      .onConflictDoNothing()
      .returning();
    return row ?? null;
  },
};
