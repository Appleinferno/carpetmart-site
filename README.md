# Carpet Mart — Flooring Sales & Installation

Marketing website for Carpet Mart, a family-owned, full-service flooring store in Murphy, NC
(since 1973). Positioning: full service from first quote to final install, for homes within ~80
miles — not a discount/price-leader angle.
Built with **Astro 6 + React 19 + Tailwind CSS v4**, deployed to **Vercel**, with a
**Turso (libSQL)** database behind the quote-request form and a protected `/admin` dashboard.

## Quick start

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # production build
npm run preview    # preview the build
```

## Project structure

```
src/
├── components/        SEOHead, Header, Footer, Logo, MobileNav, ContactForm, FAQ, CtaBand…
│   └── admin/         AdminDashboard (React island)
├── content/blog/      Blog posts (Markdown) — add a .md file to publish
├── content.config.ts  Blog collection schema
├── layouts/           BaseLayout.astro
├── lib/
│   ├── site.ts        ← Business info (NAP), nav, flooring categories, service areas
│   ├── flooring-content.ts  Long-form copy for each flooring landing page
│   ├── service-areas.ts     Counties + towns (location hierarchy for local SEO)
│   ├── schema.ts      LocalBusiness / Breadcrumb / FAQ JSON-LD helpers
│   ├── db.ts          Turso/Drizzle client
│   └── db-schema.ts   quote_requests table
├── pages/
│   ├── index, about, contact, cabinets, meet-the-team, 404
│   ├── terms, cookie-policy, trademark   (legal — share LegalLayout.astro)
│   ├── flooring/      index + [slug] (carpet, vinyl-plank, hardwood, vinyl-flooring, laminate)
│   ├── areas-we-serve/  hub + [county] + [county]/[town]
│   ├── blog/          index + [...slug]
│   ├── admin/         login, index (dashboard), logout
│   ├── api/           contact.ts, admin/submissions.ts
│   └── robots.txt.ts
└── middleware.ts      Admin auth + security headers
```

## Environment variables

Copy `.env.example` to `.env` and fill in:

| Variable | Purpose |
| --- | --- |
| `TURSO_DATABASE_URL` | Turso database URL |
| `TURSO_AUTH_TOKEN` | Turso auth token |
| `ADMIN_SECRET` | Password for the `/admin` login |
| `RESEND_API_KEY` | *(optional)* Resend API key — enables an email per new lead. Blank = email off, form still saves to DB. |
| `LEAD_NOTIFY_TO` | *(optional)* Inbox that receives lead emails (defaults to `SITE.email`). |
| `LEAD_NOTIFY_FROM` | *(optional)* Verified Resend sender. `onboarding@resend.dev` works for testing. |

Set the same three in your Vercel project's Environment Variables.

## Database setup (Turso)

```bash
# Install the Turso CLI, then:
turso db create carpetmart
turso db show carpetmart --url            # -> TURSO_DATABASE_URL
turso db tokens create carpetmart         # -> TURSO_AUTH_TOKEN

# Create the quote_requests table:
npm run db:push
```

Until Turso is configured, the contact form returns a friendly "please call us" message
instead of erroring, and the admin dashboard shows a setup notice.

## Admin dashboard

- Visit `/admin`, log in with `ADMIN_SECRET`.
- View, sort and triage quote requests submitted through the site.
- `/admin` is blocked from search engines (robots.txt + noindex) and protected by middleware.

## Deployment (Vercel)

The Vercel adapter is already configured. Push to a Git repo connected to Vercel, or run
`npx vercel`. Static pages are prerendered; only the form API and admin run as functions.

## Before launch — checklist

- [x] Production domain set in `astro.config.mjs` and `src/lib/site.ts` (`carpetmartfloors.com`)
- [ ] Add real Turso + `ADMIN_SECRET` env vars in Vercel
- [ ] Replace sample testimonials in `src/lib/site.ts` with verified Google/Yelp reviews
- [ ] Confirm the exact storefront lat/long in `src/lib/site.ts` (`SITE.geo`)
- [ ] Point a real inbox at `info@carpetmartfloors.com` (or change the address)
- [ ] Verify the per-town local details in `src/lib/service-areas.ts` (lakes, parks, communities) are accurate before launch
- [ ] Submit `sitemap-index.xml` in Google Search Console
- [ ] (Optional) Add an email notification on new submissions

## URL convention — trailing slashes

The site uses `trailingSlash: 'always'` (set in `astro.config.mjs`). Every page lives at a
slashed URL (e.g. `/flooring/vinyl-plank/`). When adding links or code, keep it consistent:

- **Internal links** must end in `/` (e.g. `href="/cabinets/"`). Non-slash URLs still work —
  Vercel issues a 308 redirect to the slashed form — but linking straight to the slash avoids
  the extra hop.
- **Client-side `fetch()` to API routes must include the slash** — e.g. `fetch('/api/contact/')`.
  This is the one easy-to-miss spot; a POST to the non-slash path would redirect and can drop the body.
- Sitemap and canonical tags are slashed automatically.

## Notes

- **Images** live in `public/images/` (real store photos, AVIF). Swap or add freely.
- **Brand**: identity is "Carpet Mart" only (the old "Really Cheap Floors" tagline was removed). Value prop is full-service, quote-to-install, within 80 miles — avoid cheap/lowest-price language. Warm "stone" neutrals + a single clay/terracotta accent. Fonts: Outfit (display) + Geist (body).
- **Products**: 5 flooring types (Carpet, Vinyl Plank, Hardwood, Vinyl Flooring, Laminate) + Cabinets. **Vinyl Plank** (premium rigid plank, LVP) and **Vinyl Flooring** (seamless rolled vinyl — never call it "sheet vinyl" on the front end) are deliberately kept as distinct products; don't cross-link or describe them as variants of each other. Tile is intentionally not offered.
- The `drizzle-kit` dev dependency reports esbuild advisories; these are dev-only and don't affect the production build.
