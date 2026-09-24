# Anaplak Art & Glam Salon — SEO Implementation Report

**Date:** 2026-09-21
**Source audit:** `docs/ANAPLAK_SEO_AUDIT_REPORT.md` (audit date 2026-09-11)
**Scope:** All code-level fixes from the audit implemented in this session. Live-tool verifications (GSC, GA4, GBP, Lighthouse on origin) remain **VERIFY** items.

> Decisions confirmed with the client: working hours **Mon–Sun 10:00–21:00** · drop all team-number claims but **keep** the "Best Salon in Maduravoyal 2026" award · remove AdSense loader · **GTM-only** tracking (GA4 snippet stays off) · use real Google reviews for testimonials · geo coordinates **13.064977, 80.172559** · migrate `<img>` tags only (no bulk recompression).

---

## 1. Summary

| Area | Status |
|---|---|
| NAP / local entity single source of truth | **Fixed** — `data/businessInfo.ts` |
| P0-1 blog canonical bug | **Fixed** (verified in built HTML) |
| Meta keywords / emoji metadata | **Removed** across all pages |
| Structured data issues | **Fixed** — BeautySalon, no self-rating, no phantom search, per-page breadcrumbs |
| Conversion tracking | **Implemented** — `TrackLink` + dataLayer pushes |
| Placeholder testimonials | **Replaced** with real Google reviews |
| Sitemap | **Fixed** — `/kalpana` added, priorities normalized |
| Images / performance | **Migrated** raw `<img>` → `next/image`, hero quality 75, reduced-motion SparkleCursor |
| TypeScript strict build | **Enabled** (was `ignoreBuildErrors`) |
| Regression protection | **Added** — `npm run check:seo` |

**Validation performed:** `npm run build` (with strict TS) ✅ · `tsc --noEmit` ✅ · `npm run check:seo` ✅ · grep of built HTML confirms no `meta keywords`, no `adsbygoogle`, no `aggregateRating`, no `HairSalon`; blog canonical resolves to `/blogs/<id>`.

---

## 2. Changes vs Audit Items

### SEO-001 (P0-1) — Blog canonical
- `app/blogs/[slug]/page.tsx`: added `alternates.canonical` → `https://anaplakartandglamsalon.com/blogs/<id>`; removed `keywords: blog.keywords` from metadata.

### SEO-003 (P1) — NAP single source of truth
- **New `data/businessInfo.ts`**: name, URL, email, phones (primary `+91 98400 88867`, secondary `+91 98400 88861`), WhatsApp, full address (`2nd Floor, No. 4B/9 3, Vadavanniamman Nagar 1st St, CDN Nagar, 4th Block, MMDA Colony, Maduravoyal, Chennai 600095`), geo `13.064977,80.172559`, hours `Mon–Sun 10:00–21:00`, Place ID `ChIJ5R3P1HxIuJoRk3OviXZ9FVA`, maps URLs, booking URL, `sameAs`, socials. Helpers: `mapsEmbedSrc()`, `whatsappDeepLink()`.
- Rewired consumers — removed all hard-coded address/geo/hours variants:
  - `components/structured-data.tsx`, `components/footer.tsx`, `components/header.tsx`, `components/google-map.tsx`, `components/contact.tsx`, `components/service-detail-page.tsx`, `lib/blogSchema.ts`, `public/llms.txt`
  - `app/contact/page.tsx` (JSON-LD + display + map embed), `app/best-salon-in-chennai/page.tsx`, `app/about/page.tsx`
- Old fragments (`TNHB ,: 3`, `No 48/9`, `First Main road, 4th block, MMDA Colony`, etc.) — zero matches remain in source.

### SEO-004 (P1) — Keyword stuffing & emoji metadata
- Removed `keywords:` arrays from: root layout, services/pricing/contact/about/blogs/kalpana/best-salon layouts, gallery page, all 13 service pages, blog post metadata.
- Rewrote emoji/keyword-stuffed titles/descriptions (root layout, contact layout, services OG/Twitter, best-salon title, CTASection trust line).
- Blog `keywords` remain in `data/blogData.ts` (still used for Article schema + visible tags).

### SEO-005 (P1) — Structured data
- `components/structured-data.tsx`: `HairSalon` → **`BeautySalon`**; **removed** self-serving `aggregateRating`; **removed** global static `BreadcrumbList`; **removed** `WebSite` `SearchAction`; address/geo/hours now sourced from `businessInfo`.
- `app/services/page.tsx`: `ItemList` now includes **all 13 services** (from `serviceData`), each with canonical URL.
- `app/about/page.tsx`: removed `numberOfEmployees` from schema; **kept** `award: Best Salon in Maduravoyal 2026`; stat "15 Experienced Barbers" → "7 Days Open".
- `app/kalpana/page.tsx`: removed "team of 12 experts" from schema; stat "12 Team Artists" → "7 Days Open".
- `app/best-salon-in-chennai/page.tsx`: removed "team of 23" from FAQ/copy; hours FAQ now Mon–Sun 10–9.

### SEO-006 (P1) — Conversion tracking
- **New `components/track-link.tsx`** — client `TrackLink` wrapping `<a>` that pushes to `dataLayer` via `lib/gtm.ts` `pushEvent`.
- Events wired:
  - `phone_click` — header top-bar, footer, contact page, contact section, google-map, service-detail, best-salon.
  - `whatsapp_click` — WhatsApp float, footer, hero, CTAs, service pages, blog CTAs, about/kalpana social cards, pricing links, contact section.
  - `booking_click` — welns links in header, hero, services hub, services-showcase, WhyChooseUs, CTASection, service-detail (hero/quick-info/process/final), blog CTAs.
  - `map_click` — footer, contact page, contact section.
  - `booking_form_submit` — best-salon booking form (→ WhatsApp).
- GA4 snippet remains commented out (GTM-only). **VERIFY:** GTM container must have a GA4 tag.

### SEO-007 (P1) — Unverifiable claims
- Dropped all team-number claims (23/15/12) from pages, FAQ, and `llms.txt`. Award kept. 4.9/1000+ review narrative retained on-page only (not in schema).

### SEO-008 (P1) — Placeholder testimonials
- `defaultTestimonials` in `service-detail-page.tsx` replaced with **real Google reviews** (Satish Kumar, Santhosh Anto, Manesh D). Bridal page already used real reviews (Sam Sam, Anisha Kamal).

### SEO-009 (P2) — Sitemap
- `app/sitemap.ts`: added `/kalpana`; normalized priorities (best-salon 1.0 → 0.8, kalpana 0.6).

### SEO-010 (P2) — Images
- Raw `<img>` → `next/image`: `app/about/page.tsx` (4), `app/kalpana/page.tsx`, `components/team.tsx`, `components/pricing.tsx`, `components/circular-slider.tsx`.
- CSS `background-image` → `<Image>`: footer bg, about video parallax (also removed `bg-fixed` mobile jank), services-showcase card backgrounds.
- `hero-slider.tsx` quality 90 → 75.

### SEO-011 (P2) — Strict build
- Removed `typescript: { ignoreBuildErrors: true }` from `next.config.mjs`. `npm run build` + `tsc --noEmit` pass.

### SEO-012 (P2) — Map key
- Map embeds now use `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` (env) via `mapsEmbedSrc()`; `.env` updated, `.env.local.example` documented. **Action:** set the var in Vercel and restrict the key by referrer in Google Cloud Console.

### SEO-014 (P2) — Blog → money-page internal links
- `app/blogs/[slug]/page.tsx`: added "Get This Done at Anaplak" block linking each post's category to its `/services/*` owner page (Bridal→bridal-makeup, Hair Care→hair-treatment, Skincare→facial-treatments, Hair Color→hair-coloring, Hair Styling→hair-styling).

### SEO-002 (P0 process) — Regression check
- **New `scripts/check-seo.mjs`** + `npm run check:seo`: no `keywords:` in `app/`, blog canonical present, `/kalpana` in sitemap, no `aggregateRating`/`HairSalon`/`SearchAction` in global schema, no AdSense loader, no raw `<img>`, no obsolete address fragments.
- Result: **passed**.

### Other fixes
- Removed AdSense loader (`ca-pub-7823087641`) from `app/layout.tsx` (per decision).
- Removed redundant `fonts.googleapis.com` preconnects.
- `SparkleCursor` disabled under `prefers-reduced-motion`.
- `public/llms.txt` refreshed (address, coords, hours, team, schema types, schema review count notes).

---

## 3. Files changed

**New:** `data/businessInfo.ts`, `components/track-link.tsx`, `scripts/check-seo.mjs`

**Modified (21 source files + docs):**
- `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`(unchanged)
- `app/blogs/layout.tsx`, `app/blogs/[slug]/page.tsx`
- `app/about/page.tsx`, `app/about/layout.tsx`
- `app/services/page.tsx`, `app/services/layout.tsx`, 13× `app/services/*-chennai/page.tsx`
- `app/pricing/page.tsx`, `app/pricing/layout.tsx`
- `app/contact/page.tsx`, `app/contact/layout.tsx`
- `app/best-salon-in-chennai/page.tsx`, `app/best-salon-in-chennai/layout.tsx`
- `app/kalpana/page.tsx`, `app/kalpana/layout.tsx`
- `app/gallery/page.tsx`
- `components/structured-data.tsx`, `components/footer.tsx`, `components/header.tsx`, `components/google-map.tsx`, `components/contact.tsx`, `components/service-detail-page.tsx`, `components/whatsapp_float.tsx`, `components/hero-slider.tsx`, `components/services-showcase.tsx`, `components/why-choose-us.tsx`, `components/ui/CTASection.tsx`, `components/team.tsx`, `components/pricing.tsx`, `components/circular-slider.tsx`, `components/SparkleCursor.tsx`
- `data/serviceData.ts`, `lib/blogSchema.ts`, `next.config.mjs`, `package.json`, `.env`, `.env.local.example`, `public/llms.txt`

---

## 4. Remaining VERIFY (live tools/accounts — not code)

- [ ] **GBP** — reconcile business name/address/hours/geo/categories with `data/businessInfo.ts` (schema region now "Tamil Nadu").
- [ ] **GTM/GA4** — confirm container `GTM-5N7G5WN4` fires a GA4 tag; verify no duplicate collection; validate events `phone_click`, `whatsapp_click`, `booking_click`, `map_click`, `booking_form_submit`.
- [ ] **Vercel env** — add `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` and restrict key by referrer in Google Cloud Console.
- [ ] **GSC** — after deploy, confirm blog posts self-canonicalize and `/kalpana` is indexed.
- [ ] **Reviews** — confirm `/api/reviews` returns live Google reviews in production (`GOOGLE_PLACES_API_KEY` / `GOOGLE_PLACE_ID` in env).
- [ ] **Lighthouse/CrUX** on the deployed origin for LCP/CLS/INP.
- [ ] Bulk compression of heavy `public/` originals (deferred by decision).