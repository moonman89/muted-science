import { pgTable, serial, text, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

// Paid purchases — written only by the verified Stripe webhook
export const purchasesTable = pgTable("purchases", {
  id: serial("id").primaryKey(),
  email: text("email").notNull(),
  name: text("name"),
  stripeSessionId: text("stripe_session_id").notNull().unique(),
  paymentStatus: text("payment_status").notNull(),
  product: text("product").notNull(),
  purchaseDate: timestamp("purchase_date").notNull().defaultNow(),
  downloadToken: text("download_token").notNull().unique(),
  downloadCount: integer("download_count").notNull().default(0),
  tokenExpiresAt: timestamp("token_expires_at").notNull(),
});

export const insertPurchaseSchema = createInsertSchema(purchasesTable).omit({ id: true });
export type InsertPurchase = z.infer<typeof insertPurchaseSchema>;
export type Purchase = typeof purchasesTable.$inferSelect;

// Opt-in email signups from the website — separate from paid buyers
export const emailSignupsTable = pgTable("email_signups", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  consentedAt: timestamp("consented_at").notNull().defaultNow(),
  source: text("source").notNull().default("website"),
});

export const insertEmailSignupSchema = createInsertSchema(emailSignupsTable).omit({ id: true, consentedAt: true, source: true });
export type InsertEmailSignup = z.infer<typeof insertEmailSignupSchema>;
export type EmailSignup = typeof emailSignupsTable.$inferSelect;
