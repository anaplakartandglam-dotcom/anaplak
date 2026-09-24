# Anaplak Art & Glam Salon — Codebase SEO Audit & Implementation Report

**Audit basis:** Source code of `https://anaplakartandglamsalon.com/` (Next.js App Router monorepo at repo root).
**Audit date:** 2026-09-11
**Framework used:** `Anaplak_Codebase_SEO_Audit_Prompt_and_Implementation_Report.docx`
**Rule applied:** Every code-level claim below points to an observed file/line. Nothing is invented. Items that need live tools (GSC, GA4, GBP, crawler, Lighthouse on the deployed origin) are explicitly marked **VERIFY**.

Severity scale: **P0** = blocks crawling/indexing or severe canonical/entity problem · **P1** = materially limits rankings/local visibility/conversions · **P2** = improvement · **P3** = polish · **VERIFY** = needs live evidence.

---

## 1. Executive Summary

Anaplak has a sound technical foundation: correct Next.js metadata exports per strategic section, a generated `sitemap.xml`, `robots.txt`, JSON-LD across pages, `next/image` optimization, WebP/AVIF formats, security headers, and sensible static service-page architecture. The site will not get blocked from indexing as-is.

However, **five confirmed problems need priority treatment**:

1. **P0 — Every blog post canonicalizes to `/blogs`.** `app/blogs/[slug]/page.tsx` returns metadata without an `alternates.canonical`, so posts inherit the canonical from `app/blogs/layout.tsx:66-68` (`/blogs`). 11 valid articles point their canonical at the listing page.
2. **P1 — NAP (name/address/phone) is not a single source of truth.** Three different address strings (`No.4B/9…`, `No 48/9…`, `2nd Floor, TNHB, : 3,…`), two geo-coordinate sets, two phone numbers, and two contradictory opening-hour sets are hard-coded across components and JSON-LD.
3. **P1 — Keyword-stuffed `meta keywords` arrays** (including literal spam strings like `"beauty parlour beauty parlour beauty parlour"` in `app/layout.tsx`) and emoji-laden titles/descriptions. Meta keywords are ignored by Google but this is a spam-signal smell and adds noise to every page; it must be cleaned, not relied on.
4. **P1 — Schema issues that can hurt local interpretation**: global `HairSalon` entity (inconsistent with the `BeautySalon` used in the services `ItemList`), a **self-serving `aggregateRating` (4.9 / 28)**, a **global static `BreadcrumbList`** injected into every page regardless of the current page, and a `WebSite` `SearchAction` pointing at `/services?q=` where no server-side search exists.
5. **P1 — No conversion tracking.** GTM (`GTM-5N7G5WN4`) loads, but `lib/gtm.ts` (`pushEvent`) is never called anywhere; the GA4 snippet is commented out in `app/layout.tsx`; phone, WhatsApp, booking, map and form clicks are not instrumented.

Lower-severity but material: ~2 MB source images still shipped for several hero/gallery files, raw `<img>` tags on `/about` and `/kalpana` bypassing `next/image`, a Google Maps JS API key hard-coded in rendered client HTML, a Sparker `SparkleCursor` canvas loop, and an AdSense loader on every page. `/kalpana` is indexable but missing from `sitemap.xml`. Contradictory, unverifiable business claims (23 vs 15 vs 12 team members; "20 barber awards"; "Best Salon in Maduravoyal 2026"); and a **P0‑level regression: blog posts capture no canonical**.

---

## 2. Repository Architecture Summary

| Item | Finding (verified) |
|---|---|
| Framework | Next.js `16.0.7` (`package.json`) — App Router |
| React | `19.2.0` |
| Language | TypeScript (build ignores TS errors: `next.config.mjs:3-5`) |
| Rendering | SSR/ISR (`export const revalidate = 60` on homepage `app/page.tsx:60`, `<api/reviews>` `revalidate=3600`); pages are server components; content heavy sections are client components |
| Styling | Tailwind CSS v4, `tailwindcss-animate`, Radix UI primitives |
| Fonts | `next/font/google` — DM_Sans, Reddit_Sans, Dancing_Script (`app/layout.tsx:15-29`) |
| Metadata owner | Route-level `metadata` / `generateMetadata`; root layout + section layouts |
| Sitemap | `app/sitemap.ts` (static + blog + service pages) |
| Robots | `app/robots.ts` |
| Analytics | `@next/third-parties` `GoogleTagManager` (`GTM-5N7G5WN4`); AdSense `ca-pub-7823087641` script in layout |
| Schema/JSON-LD | `components/structured-data.tsx` (global) + per-page scripts |
| Data source | `data/serviceData.ts`, `data/blogData.ts` (no CMS) |
| Booking | External `welns.io` `?bk_src=GMAPS110` CTAs + WhatsApp deep links |
| Reviews | `app/api/reviews/route.ts` (Google Places API, cached 1h) + fallback array in `components/testimonials.tsx` |
| Images | `next/image` with `remotePatterns` for `lh3.googleusercontent.com`, `maps.gstatic.com`, `maps.googleapis.com`; several raw `<img>` (about/kalpana) and CSS-background images |
| Deployment | Vercel (per `public/llms.txt`) |
| Tests/lint | `eslint .` only; **no test script, no tests dir** (see §18) |

**Route inventory** (source file → purpose → indexable → canonical owner → main CTA)

| URL | Source | Rendering | Purpose | Indexable | Canonical | Main CTA |
|---|---|---|---|---|---|---|
| `/` | `app/page.tsx` | SSR/ISR | Home | Yes | root layout `/` | welns booking |
| `/services` | `app/services/page.tsx` | Client | Services hub | Yes | `services/layout.tsx` | welns booking |
| `/services/*` (13) | `app/services/*-chennai/page.tsx` | Client + shared template | Service pages | Yes | `buildServiceMetadata()` (`service-detail-page.tsx:39`) | welns booking / WA |
| `/pricing` | `app/pricing/page.tsx` | Client | Price list | Yes | `pricing/layout.tsx` | WA booking |
| `/about` | `app/about/page.tsx` | Client | About + FAQ | Yes | `about/layout.tsx` | contact |
| `/gallery` | `app/gallery/page.tsx` | Server | Portfolio | Yes | page metadata | n/a (footer) |
| `/contact` | `app/contact/page.tsx` | Client | NAP + map | Yes | `contact/layout.tsx` | tel/WA/maps |
| `/blogs` | `app/blogs/page.tsx` | Client | Blog hub | Yes | `blogs/layout.tsx` | — |
| `/blogs/[slug]` | `app/blogs/[slug]/page.tsx` | SSG | Articles | Yes | **BUG: inherits `/blogs`** | welns / WA |
| `/best-salon-in-chennai` | `app/best-salon-in-chennai/page.tsx` | Client | Generic ranking hub page | Yes | own layout | tel / WA form |
| `/kalpana` | `app/kalpana/page.tsx` | Client | Founder profile | Yes | own layout | WA (closed CTA) |
| `/api/reviews` | `app/api/reviews/route.ts` | Route handler | JSON API | No (robots) | — | — |
| 404 | `app/not-found.tsx` | Server | 404 | 404 status | — | home/contact |

---

## 3. Critical Confirmed Issues (P0)

### P0‑1 Blog posts canonicalize to the /blogs listing page
- **File:** `app/blogs/[slug]/page.tsx:18-54` (`generateMetadata`) and `app/blogs/layout.tsx:66-68`.
- **Problem:** `generateMetadata` returns `title/description/keywords/openGraph/twitter` but **no `alternates.canonical`**. In the App Router, unspecified metadata inherits from the parent segment — the canonical from `blogs/layout.tsx` (`https://anaplakartandglamsalon.com/blogs`) therefore applies to every article.
- **Why it matters:** Google treats each article as a duplicate of `/blogs`; article pages get minimal indexing equity, and `Article`/`FAQPage` rich results attach to the wrong URL.
- **Fix:** add canonical in `generateMetadata`:
```ts
alternates: { canonical: `https://anaplakartandglamsalon.com/blogs/${blog.id}` },
```
- **Validation:** build + curl a post page and assert `<link rel="canonical" href="…/blogs/<id>">`; GSC URL Inspection on one post.

### P0‑2 No automated SEO regression protection exists (risk of silently re-breaking SEO)
- **Finding:** `package.json` has no `test` script; repository has no `tests/`, `e2e/`, Playwright/Cypress config, no `next-sitemap`/lint rules for SEO.
- **Why it matters:** every future route/metadata/schema edit can re-introduce the class of bugs found here (canonical leaks, noindex, broken sitemap URLs) with no signal.
- **Fix/Validation:** see §18 — implement a repeatable check + optionally wire `next-sitemap` and a minimal Node/Playwright SEO smoke test. **P0 as a process risk; P2 as a code change.**

---

## 4. High-Priority Confirmed Issues (P1)

### NAP / Local entity inconsistency (the single biggest local-SEO code issue)

**Verified variants of the business data across the codebase:**

| Field | Value | Location |
|---|---|---|
| Address A | `No.4B/9, New No. 3, 2nd floor, First Main road, 4th block, MMDA Colony` | `components/footer.tsx:68-77,192-202`; `app/contact/page.tsx:178-182`; contact JSON-LD `app/contact/page.tsx:29-36`; `app/contact/layout.tsx:5` |
| Address B | `No 48/9, New No. 3, 2nd Floor, First Main Road, 4th Block, MMDA Colony` | `components/service-detail-page.tsx:280`; `app/best-salon-in-chennai/page.tsx:288` |
| Address C | `2nd Floor, TNHB, : 3, 2nd Main Rd, 4th Block, CDN Nagar, MMDA Colony` (incl. typo `, : 3`) | `components/google-map.tsx:46-48`; global schema `components/structured-data.tsx:15` |
| Geo set 1 | `13.0515, 80.1656` | `components/structured-data.tsx:21-25`; `app/contact/page.tsx:37-41` |
| Geo set 2 | `13.0649769, 80.1725592` (map embed) / `13.0647983, 80.1747069` | `components/service-detail-page.tsx:294`; `app/best-salon-in-chennai/page.tsx:332` |
| Phone | `+91 98400 88867` **and** `+91 98400 88861` | header/footer/contact/schema |
| Hours set A | Mon–Sun 10:00–21:00 | `structured-data.tsx:26-41`; `app/contact/page.tsx:203-208`; `google-map.tsx:74-77`; `about/page.tsx:440-473` |
| Hours set B | Mon–Sat 10:00–20:00, Sun 10:00–18:00 | `service-detail-page.tsx:285`; `best-salon-in-chennai/page.tsx:298-299` and FAQ `:40` |

- **Fix:** create `data/businessInfo.ts` as the single source of truth (name, address, phone(s) primary/secondary, hours, geo, `sameAs`, email, `placeId`, map URLs, booking URL). Consume it in `structured-data.tsx`, footer, header, contact page, google-map, service-detail-page, best-salon page, kalpana page, and `llms.txt` generation. **Verify the true address/hours with the physical premises and GBP before committing** (`app/contact` and the map embed already contradict each other inside the codebase — one of them is wrong in the real world).
- **Validation:** grep the repo for address tokens to confirm a single canonical string; audit NAP on GBP vs site.

### Keyword stuffing & spammy metadata
- **Files:** `app/layout.tsx:35-101` (56 meta keywords including `"beauty parlour beauty parlour beauty parlour"`, `"salon beauty salon"`, `"hair salon hair salon"`); `app/services/layout.tsx:6-48` (29); `app/pricing/layout.tsx:6-27`; `app/best-salon-in-chennai/layout.tsx:6-27`; `app/contact/layout.tsx:6-25`; `app/about/layout.tsx:9-28`; `app/blogs/layout.tsx:9-30`; per-blog `keywords` arrays 35–75 phrases each (`data/blogData.ts`).
- **Problem:** `meta keywords` is not used by Google for ranking; the "near duplicate" strings are exactly the kind of search-engine-first patterns the brief flags. Emojis in title/description (`app/layout.tsx:34`, `contact/layout.tsx:5,27,44`, `services/layout.tsx:51,68`) degrade SERP presentation.
- **Fix:** delete `keywords` arrays from all metadata exports (keep them only where a page uses them as visible content — e.g. blog `tags` chips); rewrite title/description without emoji; one distinct intent per title.
- **Validation:** every route renders a unique, clean title ≤ ~60 chars and description ≤ ~155 chars; no `meta name="keywords"` in rendered HTML.

### Structured data problems
- `components/structured-data.tsx`:
  - **`HairSalon`** (`:6`) while services page uses **`BeautySalon`** (`app/services/page.tsx:336`). Google's local guide uses `LocalBusiness`/`BeautySalon`; align on `BeautySalon`.
  - **Self-serving `aggregateRating` `{4.9, 28}`** (`:47-51`) — aggregate ratings for the business itself in your own markup are not eligible and violate Google's review guidelines; remove it (trade it for genuine on-page testimonial content + a working review destination).
  - **Global static `BreadcrumbList`** (`:139-174`) with Home/About/Services/Gallery/Contact is injected via the root layout into **every** page, so About, Gallery, Pricing, Kalpana, Blog and every service page advertises an identical breadcrumb trail that does not reflect the page. Replace with per-page `BreadcrumbList` matching visible breadcrumbs (blogs, contact, about, kalpana, pricing, services already emit their own — delete the global one).
  - **`WebSite.potentialAction` SearchAction** pointing at `https://…/services?q={query}` (`:124-137`) where `/services` has no server-side search. Either remove or point at `/blogs?q=`-backed… (also no such backend) → **remove** until a real search endpoint exists.
  - Address typo `TNHB, : 3` (`:15`).
- `app/services/page.tsx:325-343` — `ItemList` advertises only 4 of 13 services; expand or drop.
- `app/about/page.tsx:113-157` — `FAQPage` duplicates visible FAQ content (good), but `BeautySalon.mainEntity.award` (`:90`) claims **"Best Salon in Maduravoyal 2026"** and `numberOfEmployees: "23"` with no supporting evidence on the page; `found_claims` conflict with `kalpana` page (12 artists) and about stats (15 barbers). Keep only verifiable facts.
- **Validation:** run each page through Rich Results Test; inspect rendered JSON-LD; no `meta keywords`; only `BeautySalon`, no self-serving rating, correct per-page breadcrumbs.

### Missing/weak conversion tracking
- `app/layout.tsx:168-179` GA4 snippet is **commented out**; GTM loads (`:194`); `lib/gtm.ts` `pushEvent` is **never imported** by any component; no `dataLayer` push on `tel:`, `wa.me`, welns booking, map, or form submit handlers anywhere.
- **Fix:** add `pushEvent` calls on: phone click (header/footer/contact/service pages), WhatsApp click (all CTAs, `whatsapp_float.tsx`), booking click (every `welns.io` link), map/directions click, and the `best-salon` form submit (`app/best-salon-in-chennai/page.tsx:66-70`).
- **Validation:** GTM preview + GA4 debugger fires distinct events `phone_click`, `whatsapp_click`, `booking_click`, `map_click`, `booking_form_submit`; verify no double-tracking (GTM container may already tag GA4 — check container config: **VERIFY**).

---

## 5. VERIFY Checklist (needs live tools/accounts)

- [ ] GSC: index coverage, which canonical is reported for blog posts after P0-1 fix.
- [ ] GA4/GTM: container `GTM-5N7G5WN4` config; whether GA4 tag already exists (the commented snippet suggests it was migrated to GTM). Confirm no duplicate GA4.
- [ ] pageview/consent: `@next/third-parties` GTM injection vs the commented GA4 snippet.
- [ ] Google Business Profile: true name, address, hours, geo, phone, categories; reconcile with §4 NAP table. **VERIFY which hours are real.**
- [ ] Places API (`GOOGLE_PLACES_API_KEY`, `GOOGLE_PLACE_ID` in `.env.local`): whether `/api/reviews` returns live reviews in production (the fallback `FALLBACK_REVIEWS` in `testimonials.tsx` is what most visitors currently see).
- [ ] AdSense (`ca-pub-7823087641`): whether ads are actually shown; the loader runs on every page (`app/layout.tsx:199-204`) and adds ~130 KB+ JS — remove if unused.
- [ ] The `public/reviewContent.md` (1,343 lines) and `public`-adjacent `data/servicePageContent.md` (5,475 lines) files are not imported anywhere — orphan content; decide to wire in or delete.
- [ ] Live Lighthouse/CrUX on the deployed origin; real-device LCP on mobile.
- [ ] Live SERP research for the keyword map below (Phase 5 of the framework).
- [ ] Site search presence: `/services?q=` handler does not exist; confirm no linked search box requirement.

---

## 6. Route Inventory (URLs verified against `app/`)

See table in §2. Additional confirmed notes:
- `/kalpana` (indexable, own canonical) is **missing from `app/sitemap.ts`** static pages (added for `best-salon-in-chennai` at `:53-57` but not `/kalpana`) — **fix: add it**.
- `/best-salon-in-chennai` and `/` both `priority: 1.0` (`app/sitemap.ts:11,53-57`) — normalize priorities.
- Blog `lastModified` uses article `createdAt` (`app/sitemap.ts:60-68`) — acceptable; consider `dateModified`.
- No trailing-slash or duplicate-slug issues; `not-found.tsx` → real 404.
- No query-parameter/trailing-slash duplicate risk (Next defaults); no pagination beyond client-side infinite scroll on `/blogs` (no SEO pagination).

---

## 7. Metadata Audit (verified from exports)

| URL | Title (current) | H1 (visible) | Canonical | Issues |
|---|---|---|---|---|
| `/` | Best Hair, Skin & Bridal Salon in Chennai, Maduravoyal (layout.tsx:33) | `PREMIUM SALON BEAUTY EXPERTS` (hero-slider.tsx:84) | `/` | Emoji descriptors; H1 does not mirror title intent; keywords spam |
| `/services` | Hair, Beauty & Bridal Services… (services/layout.tsx:4) | `Our Services` (page-header) | `/services` | OG desc emojis; keywords spam |
| `/services/bridal-makeup-chennai` | Bridal Makeup in Chennai, Maduravoyal… (page.tsx:8) | heroTagline | own | — |
| `/services/* (13)` | unique per page (buildServiceMetadata) | unique heroTagline | own (service-detail-page.tsx:39) | default testimonials duplicated on pages without custom ones |
| `/pricing` | Salon Pricing & Beauty Packages… (pricing/layout.tsx:4) | `Pricing Guide` (page-header) | `/pricing` | keywords spam |
| `/about` | About Anaplak Art & Glam… (about/layout.tsx:4) | `About Us` (page-header) | `/about` | keywords spam; unverifiable stat claims |
| `/gallery` | Gallery \| Anaplak Art and Glam Salon… (page.tsx:7) | (from GalleryShowcase) | `/gallery` | OG lacks `url`; fine |
| `/contact` | Contact Anaplak Art & Glam… (contact/layout.tsx:4) | `Connect With Us` (page-header) | `/contact` | emojis + phone in title/desc; NAP variant A |
| `/blogs` | Beauty Tips, Hair Care & Bridal Makeup Blogs… (blogs/layout.tsx:4) | `Beauty Insights` | `/blogs` | keywords spam |
| `/blogs/[slug]` | `<title> \| Anaplak…` (generateMetadata) | blog.title (h1) | **BUG: `/blogs`** | P0-1 |
| `/best-salon-in-chennai` | Best Salon in Maduravoyal, Chennai… (layout.tsx:4) | Best Salon in Chennai | own | heavy "best" keyword repetition in copy; hours variant B |
| `/kalpana` | Kalpana \| Founder at Anaplak… (kalpana/layout.tsx:4) | Kalpana | own | raw `<img>`; stat 12 vs 23 |

Global patterns: every layout sets `robots index/follow` with `max-snippet:-1`, `max-image-preview:large`, `max-video-preview:-1` — intentional, keep. `formatDetection` disabled — keep. `verification.google` present — keep.

---

## 8. Technical SEO Audit (checked items)

| Area | Status | Location / Detail |
|---|---|---|
| Crawlability | OK | Server-rendered core content; sitemap + robots present |
| robots.txt | OK | `app/robots.ts`: disallows `/api/`, `/_next/`, `/admin/`, `/private/`, `/*.json$`; sitemap declared. (Non-existent dirs harmless.) |
| Sitemap | **Fix** | `app/sitemap.ts` missing `/kalpana`; check absence of `/?` variants; keep `lastModified` |
| Canonicals | **P0-1** for blog posts; OK for services/static pages | Service canonical set via `buildServiceMetadata` (`service-detail-page.tsx:39`) |
| Redirects | n/a (no permanent redirect config; none needed in that repo) | `next.config.mjs` has none |
| 404/soft-404 | OK | `not-found.tsx`; blog `notFound()` for unknown slug |
| Client-rendered content | Watch | `/services`, `/pricing`, `/about`, `/blogs`, service pages and homepage sections are `"use client"` — but text is statically in the bundle; crawlers see SSR HTML for the shell. **Careful:** hero and section content above the fold IS server-rendered because components render in the SSR HTML; not a blocker. |
| Internal links | Mostly OK | Header/footer/services/gallery/blog cards are crawlable `<Link>`/`<a>`. Blog posts link to booking (external) but not to the matching `/services/*` money page — **add contextual internal links** in article bodies/related block. |
| Duplicate content | **Fix** | blog canonical P0-1; default testimonials replicated across service pages (`service-detail-page.tsx:56-60`); heavy location-phrase repetition risk on `/best-salon-in-chennai` |
| Mobile | OK | Responsive Tailwind; `viewport` user-scalable true |
| HTTPS/security | OK | HSTS, nosniff, X-Frame-Options etc. via `next.config.mjs:40-73`; `Powered-By` off |
| `typescript.ignoreBuildErrors` | **Fix (P2)** | `next.config.mjs:3-5` — lets type errors ship silently |

---

## 9. Keyword → URL Map (from actual page targeting)

| Query intent | Target URL (owner) | Page type | Priority | Action |
|---|---|---|---|---|
| bridal makeup chennai / artist / price | `/services/bridal-makeup-chennai` | money | High | keep; strengthen evidence/portfolio |
| engagement makeup chennai | `/services/engagement-makeup-chennai` | money | High | keep |
| keratin / smoothing / botox chennai | `/services/hair-treatment-chennai` | money | High | keep; price transparency good |
| hair coloring / balayage chennai | `/services/hair-coloring-chennai` | money | High | keep |
| hair salon chennai / maduravoyal | `/` + `/services` | hub | High | avoid repeating same phrase in every section |
| best salon in chennai / maduravoyal + nearby areas | `/best-salon-in-chennai` | hub | Medium | de-stuff "best" phrasing; keep area list as a single hub (do NOT build per-area doorway pages) |
| facial / anti-aging chennai | `/services/facial-treatments-chennai`, `/services/anti-aging-treatments-chennai` | money | Med | keep |
| nail art / extension chennai | `/services/nail-art-extension-chennai` | money | Med | keep |
| pregnancy/bridal checklist / keratin guide / monsoon hair care | blog cluster pages | informational | Med | each already has a page; add contextual links to money pages |
| price / cost queries | `/pricing` | price | High | keep; publish structured prices + schema |
| near-me / neighborhoods | `/best-salon-in-chennai` (single hub) | hub | Med | do not create per-neighborhood URLs |

**Rule enforced:** one owner URL per meaningful intent; no doorway/location-only pages (already respected).

---

## 10. SERP / Competitor Analysis

**Not performed against live SERPs in this session (would require web access to current results).** Required protocol per the brief: for each of the top 30–50 queries (Chennai + Maduravoyal), record organic result types, local-pack winners, recurring directories, page type that ranks, and why winners rank without the exact-match phrase. Until that is run, treat the §9 map as the *intended* targeting. **Marked VERIFY — do not quote ranking outcomes.**

**Pre-conditions from code that affect win-rate (observed):** competitors that win on local intent typically have (a) an accurate, consistent NAP and hours, (b) substantial reviews, (c) portfolio evidence. This codebase currently ships *contradictory* NAP/hours and *placeholder* testimonials on service pages — that is the structural gap to close first (see §12, §13).

---

## 11. "Why they rank without the keyword" (hypothesis framework)

Identified likelihood drivers to test against live SERPs (not claims):
- **Deep local directory footprint + review count** outweighs on-page keyword match (relevant for "best salon … near me").
- **First-hand photo/video evidence** drives engagement and CTR even when the exact phrase is absent from titles (this site renders its strongest evidence as CSS `background-image` in `services-showcase.tsx:130` — invisible to image search).
- **Entity consistency** (GBP, citations, `sameAs`) is negotiated across the web; contradictory NAP/hours in code undermines this regardless of on-page text.
- For exact-match-loser analysis: page text must be inspected against winners per query; mark result as needing live measurement.

---

## 12. Local SEO / GBP Plan (non-code)

1. **Reconcile NAP with the physical premise & GBP** (single source of truth; §4). Fix contradictory hours before any citation work.
2. GPB categories aligned to real services; delete nothing from the name; do **not** add city keywords to the business name.
3. Genuine review program (in-salon QR, post-service WhatsApp link to GBP review) — honest acquisitions; respond to every review.
4. Real photos: publish per-service originals (currently mostly stock/illustrative) and link gallery images to service pages.
5. Citations: normalize address/hours across directories; remove variants.
6. Reconcile employee/stat claims (12 vs 23 vs 15; "award" claims) across site + llms.txt.
7. Local/wedding partnerships and genuine local backlinks (Chennai wedding fairs, beauty media).
8. Map/directions consistency: embed uses `place_id` in one place, `q=` address in another, three coordinate pairs — unify on the GBP place.

---

## 13. Content / Topic Clusters

- Existing clusters by intent are good (bridal, hair treatments, hair colour, skin, nails). Keep one owner URL per cluster.
- **Scripted requirement:** every article must add first-hand salon value (before/after, pricing from actual menu, seasonal Chennai advice) — enforce in authoring, not just metadata.
- Blog ↔ money-page internal links are missing; add "Where to get this done at Anaplak → `/services/…`" paragraphs.
- Authorship: articles already show author (Kalpana) and link to `/kalpana`; add `dateModified` handling when content changes; consider a review-by field.

---

## 14. Performance / UX / CWV Plan (code-level)

**Confirmed contributors:**
- Hero images use `priority` + `fetchPriority=high` + `quality=90` + `sizes="100vw"` (`components/hero-slider.tsx:59-72`). Lower `quality` to 70–75 for LCP; keep one prioritized image, others lazy.
- Large origin sources still in `public/` (e.g. `nail_styling.jpg` ≈ 2.1 MB, `gal7.webp` ≈ 2 MB, `hair-treatment.jpg` ≈ 2 MB; see `ls -laS public`) — pre-compress at source (`scripts/optimize-images.sh` exists but incomplete; it only creates an empty `public/optimized/`).
- Raw `<img>` bypassing `next/image` on `/about` (`aboutus.webp`, `aboutus2.webp`, `faq_img-1.webp`) and `/kalpana` (`aboutus2.webp`) — no sizing/CLS handling, no AVIF/WebP transform, no lazy loading. Migrate to `OptimizedImage`.
- CSS `background-image` on `services-showcase.tsx:130` and `about/page.tsx:372` (`video_parralax.jpg`, `footer_bg.jpg`) — unoptimized, invisible to image search; move key visuals to `<Image>`.
- `SparkleCursor` runs a `requestAnimationFrame` loop on a full-viewport canvas (`components/SparkleCursor.tsx:102-131`) — animation cost on desktop; gate to reduced-motion.
- AdSense loader on every page (`app/layout.tsx:199-204`) — third-party JS; remove if unused, else move to ad slots only (`google-publisher-tag` per page).
- `Reddit_Sans` + `DM_Sans` + `Dancing_Script` via `next/font` with `display:swap` — fine; the redundant `preconnect` to `fonts.googleapis.com` (`layout.tsx:188-189`) can be removed (fonts are self-hosted by `next/font`).
- `bg-fixed` + `clip-path` polygon parallax in `about/page.tsx:370-374` — mobile jank; use `local`/smaller asset or disable on mobile.
- Account-hours/map iframes use `loading="lazy"` — good.
- **Benchmark:** Lighthouse/PageSpeed before/after on mobile for LCP, CLS, INP; record CrUX field data.

---

## 15. Analytics / Conversion Plan

- Implement event pushes (§4) with distinct event names; use `lib/gtm.ts`.
- Track: phone click, WhatsApp click (all WA links incl. `whatsapp_float.tsx`), booking click (all `welns.io` links), map/directions click, best-salon form submit, blog CTA clicks.
- Verify GA4 via GTM vs the commented-out snippet (no double collection) — **VERIFY** container config.
- State clearly what cannot be measured without GSC/GA4/GBP access (post-fix organic movement, conversions, click-throughs) — see §5.

---

## 16. Implementation Backlog (append to repo issues)

| ID | Pri | File/route | Problem | Exact fix | Validation | Owner |
|---|---|---|---|---|---|---|
| SEO-001 | P0 | `app/blogs/[slug]/page.tsx` | no canonical → posts canonical to /blogs | add `alternates.canonical` in `generateMetadata` | rendered HTML canonical; GSC URL Inspection | Developer |
| SEO-002 | P0 | CI/tests | no SEO regression checks | add smoke checks (§18) | CI runs fail on regressions | Dev+SEO |
| SEO-003 | P1 | `data/businessInfo.ts` (new) + all NAP consumers §4 | contradictory NAP/hours/geo | single source of truth; delete hard-coded variants | grep address tokens; NAP audit vs GBP | Dev |
| SEO-004 | P1 | `app/layout.tsx`, all `layout.tsx` | keyword-stuffed meta keywords + emoji titles/descriptions | remove `keywords` arrays; clean titles/descriptions | rendered `<head>` audit; uniqueness script | SEO+Dev |
| SEO-005 | P1 | `components/structured-data.tsx` | `HairSalon`, self-serving rating, global static breadcrumbs, fake SearchAction | switch to `BeautySalon`; drop `aggregateRating`; remove global breadcrumbs; remove SearchAction | Rich Results Test per page | Dev |
| SEO-006 | P1 | all CTA handlers | no conversion tracking | `pushEvent` on phone/WA/booking/map/form | GTM preview | Dev |
| SEO-007 | P1 | `app/best-salon-in-chennai`, kale pages | unverifiable claims (23/15/12 staff, barber awards) | align numbers to real team; remove unverifiable claims | content review | Content |
| SEO-008 | P1 | `components/service-detail-page.tsx:56-60` | placeholder testimonials on all pages | per-service real evidence or remove duplication | review qa | Content |
| SEO-009 | P2 | `app/sitemap.ts` | missing `/kalpana`, priorities | add `/kalpana`, normalize priority | crawler URL diff | Developer |
| SEO-010 | P2 | services showcase / about / kalpana images | raw `<img>`, CSS bg, heavy sources | migrate to `OptimizedImage`; compression | Lighthouse LCP diff | Developer |
| SEO-011 | P2 | `next.config.mjs:3-5` | TS errors ignored | enable strict build | build passes | Developer |
| SEO-012 | P2 | map embeds/keys | API key hard-coded + mixed embed schemes/coords | referer-restrict key; env var; unify embed on place_id | console security scan | Developer |
| SEO-013 | P2 | `public/llms.txt` + schema | duplicate/contradictory claims | derive from `businessInfo.ts` | NAP parity | Dev+Content |
| SEO-014 | P2 | blog body | no internal links to money pages | add contextual links to `/services/*` | crawl internal-link report | Content+Dev |

---

## 17. 30/60/90-Day Execution

- **Days 1–10:** baseline (GSC/GBP/GA4 exports, crawler, Lighthouse mobile) · confirm real NAP/hours with owner · issue register.
- **Days 11–25:** fix SEO-001…006 — canonical bug, metadata cleanup, businessInfo single source, schema corrections, conversion tracking. Deploy in small batches; run crawler after each.
- **Days 20–40:** replace placeholder testimonials with original evidence; expand per-service portfolio images; remove keyword-stuff phrasing from copy/FAQ.
- **Days 30–60:** GBP optimization + review program; citations cleanup; hours/NAP parity across the web.
- **Days 45–75:** blog↔money-page internal linking; topic cluster reinforcement; refine `/best-salon-in-chennai` copy.
- **Days 60–90:** performance iteration (images, sidebar removal of AdSense if unused, reduced-motion for SparkleCursor), second crawl, CTR improvements measured in GSC.

---

## 18. Regression Test Plan (implement — currently none)

Automated (run in CI / `npm run check:seo`):
1. Every route export has a `title` and `description`; length caps (60/155).
2. No duplicate titles across routes.
3. No `meta name="keywords"` in rendered HTML.
4. Exactly one `<h1>` per indexable route.
5. Every indexable route has a canonical resolving to itself (catches P0-1 class again).
6. No accidental `noindex` on public routes.
7. Sitemap contains every indexable static/post/service route and no 4xx URLs.
8. Schema smoke: JSON-LD parse + `@type` whitelist (BeautySalon, BreadcrumbList per page, Article, FAQPage legit, no self-serving AggregateRating).
9. No `tel:`/`wa.me`/booking CTA without an analytics event.
10. NAP parity test: all rendered addresses equal `businessInfo.ts` canonical string; hours equal canonical.
11. No raw `<img>` without optimization (lint rule).
12. No orphaned route slugs (kalpana present in sitemap).

---

## 19. Final Acceptance Checklist

- [ ] P0-1 fixed: every blog post self-canonical (GSC shows per-post canonicals).
- [ ] NAP/hours consistent in code and with GBP (verified with owner).
- [ ] No `meta keywords` anywhere; unique clean titles/descriptions.
- [ ] Schema: `BeautySalon` only; no self-serving ratings; per-page breadcrumbs correct; no phantom SearchAction.
- [ ] Conversion events live in GTM/GA4.
- [ ] `/kalpana` in sitemap; sitemap contains no dead URLs.
- [ ] Placeholder/default testimonials replaced with original evidence or removed.
- [ ] Important images optimized + accurate alt; no raw `<img>` left on key pages.
- [ ] Regression suite green in CI.
- [ ] Success measured via GSC/GBP/GA4 over ≥ a month, not one-off rank checks.

---

## 20. Sources Referenced Inside This Audit

- `package.json`, `next.config.mjs`
- `app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts`, `app/not-found.tsx`
- `app/{services,pricing,about,gallery,contact,blogs,best-salon-in-chennai,kalpana}/**`
- `components/{structured-data,service-detail-page,footer,header,hero-slider,google-map,whatsapp_float,optimized-image,SparkleCursor,services-showcase,blog/*}.tsx`
- `data/serviceData.ts`, `data/blogData.ts`, `lib/{blogSchema,blogHeadings,gtm}.ts`
- `app/api/reviews/route.ts`, `public/llms.txt`, `public/site.webmanifest`, `public/favicon/`, `scripts/optimize-images.sh`
- `public/` file sizes (`ls -laS`)

*All claims tagged CONFIRMED above are observed in these files. Claims requiring live data are tagged VERIFY.*