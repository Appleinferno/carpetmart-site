import { SITE } from './site';

export type LeadNotification = {
  name: string;
  email: string;
  phone: string | null;
  location: string | null;
  flooringType: string | null;
  message: string;
};

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/**
 * Emails a new-lead notification via Resend.
 * No-ops silently if RESEND_API_KEY isn't set, so the form works with or
 * without email configured. Throws on a real send failure (caller catches it
 * so a mail problem never blocks the lead from being saved).
 */
export async function sendLeadNotification(lead: LeadNotification): Promise<void> {
  const apiKey = import.meta.env.RESEND_API_KEY;
  if (!apiKey) return; // email not configured — skip

  const to = import.meta.env.LEAD_NOTIFY_TO || SITE.email;
  // FROM must be a Resend-verified domain in production. onboarding@resend.dev
  // works for testing (delivers only to the Resend account owner's address).
  const from = import.meta.env.LEAD_NOTIFY_FROM || 'Carpet Mart Leads <onboarding@resend.dev>';

  const when = new Date().toLocaleString('en-US', {
    timeZone: 'America/New_York',
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  const rows: [string, string][] = [
    ['Name', lead.name],
    ['Email', lead.email],
    ['Phone', lead.phone || '—'],
    ['Town', lead.location || '—'],
    ['Interested in', lead.flooringType || '—'],
    ['Received', when],
  ];

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;color:#1c1917">
      <h2 style="margin:0 0 4px">New quote request</h2>
      <p style="margin:0 0 16px;color:#78716c">From the Carpet Mart website</p>
      <table style="width:100%;border-collapse:collapse;font-size:15px">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:8px 12px;background:#f5f5f4;font-weight:bold;width:130px;border:1px solid #e7e5e4">${k}</td><td style="padding:8px 12px;border:1px solid #e7e5e4">${esc(v)}</td></tr>`
          )
          .join('')}
      </table>
      <p style="margin:18px 0 6px;font-weight:bold">Message</p>
      <p style="margin:0;padding:12px;background:#fafaf9;border:1px solid #e7e5e4;white-space:pre-wrap">${esc(lead.message)}</p>
      <p style="margin:18px 0 0;color:#78716c;font-size:13px">Reply to this email to respond directly to ${esc(lead.name)}.</p>
    </div>`;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: lead.email,
      subject: `New quote request — ${lead.name}${lead.flooringType ? ` (${lead.flooringType})` : ''}`,
      html,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    throw new Error(`Resend responded ${res.status}: ${detail}`);
  }
}
