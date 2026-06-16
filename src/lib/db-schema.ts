import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

// Quote / contact requests submitted from the website.
export const quoteRequests = sqliteTable('quote_requests', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull(),
  phone: text('phone'),
  location: text('location'),
  flooringType: text('flooring_type'),
  message: text('message').notNull(),
  status: text('status').default('new').notNull(), // new | contacted | closed
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
});

export type QuoteRequest = typeof quoteRequests.$inferSelect;
