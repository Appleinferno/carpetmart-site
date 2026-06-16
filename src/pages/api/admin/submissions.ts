import type { APIRoute } from 'astro';
import { desc } from 'drizzle-orm';
import { db, isDbConfigured } from '../../../lib/db';
import { quoteRequests } from '../../../lib/db-schema';

export const prerender = false;

export const GET: APIRoute = async ({ cookies }) => {
  const token = cookies.get('admin_token')?.value;
  const secret = import.meta.env.ADMIN_SECRET;
  if (!secret || token !== secret) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  if (!isDbConfigured) {
    return new Response(JSON.stringify({ error: 'Database not configured', rows: [] }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const rows = await db.select().from(quoteRequests).orderBy(desc(quoteRequests.createdAt));
    return new Response(JSON.stringify({ rows }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('[admin/submissions] error:', err);
    return new Response(JSON.stringify({ error: 'Failed to fetch submissions' }), { status: 500 });
  }
};
