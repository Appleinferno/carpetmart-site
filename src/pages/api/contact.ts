import type { APIRoute } from 'astro';
import { db, isDbConfigured } from '../../lib/db';
import { quoteRequests } from '../../lib/db-schema';

export const prerender = false;

const json = (data: object, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

export const POST: APIRoute = async ({ request }) => {
  try {
    const form = await request.formData();

    // Honeypot — bots fill hidden fields, humans don't.
    if (form.get('company')) {
      return json({ success: true }); // silently accept & drop
    }

    const name = (form.get('name') as string | null)?.trim() ?? '';
    const email = (form.get('email') as string | null)?.trim() ?? '';
    const phone = (form.get('phone') as string | null)?.trim() || null;
    const location = (form.get('location') as string | null)?.trim() || null;
    const flooringType = (form.get('flooringType') as string | null)?.trim() || null;
    const message = (form.get('message') as string | null)?.trim() ?? '';

    if (!name || !email || !message) {
      return json({ error: 'Please fill in your name, email and a short message.' }, 400);
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      return json({ error: 'That email address doesn\'t look right — please double-check it.' }, 400);
    }

    if (!isDbConfigured) {
      console.error('[contact] Turso not configured — submission not stored:', { name, email });
      return json(
        { error: 'Our form isn\'t connected yet. Please call us at (828) 837-7491.' },
        503
      );
    }

    await db.insert(quoteRequests).values({ name, email, phone, location, flooringType, message });

    return json({ success: true, message: 'Thanks! We\'ll be in touch soon.' });
  } catch (err) {
    console.error('[contact] error:', err);
    return json({ error: 'Something went wrong on our end. Please try again or call us.' }, 500);
  }
};
