# Anaplak Art & Glam Salon — Full Technical, Local & Content SEO Audit (2026)

**Business:** Anaplak Art & Glam Salon · Maduravoyal, Chennai, Tamil Nadu
**Site:** https://anaplakartandglamsalon.com/
**Audit date:** 23 Sep 2026
**Method source:** local codebase (`C:\Users\Albin\Desktop\Valorald\Client Projects\anaplak`), live rendered HTML, live `robots.txt`/`sitemap.xml`, and live SERP sampling (DuckDuckGo HTML, Bing) for Chennai salon/makeup queries.

## How to read this report
- **CONFIRMED** = observed in source code or rendered output (path + line cited).
- **VERIFY** = requires GSC/GA4/GBP/crawler/runtime evidence before being treated as an issue.
- **Live vs Repo:** The live site is currently serving an **older build than the working tree**. Where they differ, both are documented. `app/pricing/{layout,page}.tsx` was deleted in the working tree and replaced by `app/menu/…`; the deployed site still serves `/pricing` and stores the old address, old hours, old schema and a `<meta name="keywords">` blob. **Deploying the current working tree is a P0 action**; most of the worst findings disappear after a correct deploy.

---

## 1. Executive Summary

Anaplak is a technically solid Next.js (App Router) build: SSR + ISR, canonical tags on every page, a working `robots.txt`, a generated `sitemap.xml`, `next/image` everywhere, `next/font` self-hosted fonts, GTM, REST-free content, and one H1 per page. The foundation is better than most Chennai salon sites.

The gaps that block growth are concentrated in five areas:

1. **Deployment drift (P0).** The live site is an old build: it advertises `/pricing` (deleted in the repo), an out-of-date address (`No.4B/9, New No. 3, 2nd floor, First Main road, 4th block`), old phone-hours (`Mon–Sat 10–8, Sun 10–6`), a `<meta name="keywords">` blob, a **`HairSalon` schema with a self-serving `aggregateRating`**, and old `geo` coordinates — all of which the working tree no longer contains. Every technical audit finding first requires `next build && deploy` of HEAD.
2. **Local entity inconsistency (P1).** Two different `placeId` values exist (`data/businessInfo.ts` vs `.env`), a hardcoded phone on `/about`, and stale address strings that already live in GitHub history. NAP must be single-sourced and match Google Business Profile exactly.
3. **Customer evidence is not wired up (P1).** `components/testimonials.tsx` renders 5 static fallback reviews **labelled "Google Review"**; the live-Google /api/reviews path is never called. The "4.9 rating, 1000+ clients, 23 specialists, award-winning" claims appear repeatedly with no on-page or structured-data evidence. Competitors who rank (YLG, Veera) quote real metrics and show real portfolios.
4. **Money pages are under-structured (P1/P2).** 13 service pages carry rich copy, pricing, FAQs and testimonials — but **no `Service` schema, no `FAQPage` schema, no `BreadcrumbList` schema** on the detail pages, and no `aggregateRating`-on-GBP link. The `/services` hub duplicates the service catalogue in a hardcoded array that is already drifting from `data/serviceData.ts`.
5. **SERP reality (diagnosis).** Head "commercial" Chennai queries ("best bridal makeup artist in chennai", "best hair salon in chennai") are dominated by **marketplaces (WedMeGood, Justdial, WeddingBazaar, LBB) + listicle blogs + multi-branch salons with landing pages and huge GBP footprints** (YLG: 3 branches, 2800+ reviews). A single exact-match H1 or an exact-phrase title is *not* enough; exact-match landing pages from Veera and Anaplak itself *do not* outrank marketplaces. Path to competing: dense service depth (tier pricing, process, trial info), real client portfolios, GBP reviews and citations, and neighbourhood-adjacent content — not keyword repetition.

**Expected outcome discipline:** No ranking guarantee is made. Each action below is tied to a file, a measurable validation step, and an SEO hypothesis that should be re-checked in GSC after 45–90 days.

---

## 2. Repository Architecture Summary

| Aspect | Finding | Evidence |
|---|---|---|
| Framework | Next.js **16.0.7**, App Router, React 19.2, TypeScript 5, Turbopack (`next dev --webpack`) | `package.json:56–61`, `package.json:7` |
| Rendering | SSR default; Home uses ISR `revalidate = 60`; blog posts `generateStaticParams` (SSG); gallery static; services/static per-file; `/services`, `/menu`, `/blogs`, `/about`, `/contact`, `/kalpana`, `/best-salon-in-chennai` are `"use client"` (still SSR'd shells) | `app/page.tsx:91`, `app/blogs/[slug]/page.tsx:68`, `app/services/page.tsx:1` |
| Data layer | Static TS "CMS": `data/serviceData.ts` (13 services), `data/blogData.ts` (14 posts), `data/businessInfo.ts` (NAP) | |
| Metadata | Root `Metadata` in `app/layout.tsx`; per-route `Metadata` via **layouts** for client components; `buildServiceMetadata()` helper for service pages; `generateMetadata` for blog posts | |
| Schema/JSON-LD | `components/structured-data.tsx` (global 3 blocks), plus inline JSON-LD injected per page via `next/script` | |
| Sitemap/robots | `app/sitemap.ts`, `app/robots.ts` (Next MetadataRoute) | |
| Images | `next/image` with `remotePatterns` for Google-hosted images; reserved `qualities`, `deviceSizes`; SVG allowed as attachment | `next.config.mjs:3–26` |
| Fonts | `next/font/google` — DM Sans, Reddit Sans, Dancing Script (self-hosted, `display: swap`) | `app/layout.tsx:14–28` |
| Analytics | GTM `GTM-5N7G5WN4` via `@next/third-parties`; custom `dataLayer` events via `lib/gtm.ts` + `components/track-link.tsx` | `app/layout.tsx:78` |
| Reviews | `app/api/reviews/route.ts` (Google Places) exists but **no component calls it** | `components/testimonials.tsx` |
| Deployment | No deployment config in repo (no `vercel.json`, no Dockerfile); `DEPLOYMENT_GUIDE.md` in docs; deploy state stale (live ≠ working tree) | `git status` |
| SEO QA | `npm run check:seo` (`scripts/check-seo.mjs`) — passes today; limited coverage | |

### Route inventory (working tree = source of truth)

| URL pattern | Source file | Rendering | Page purpose | Indexable? | Metadata owner | Schema owner | Main CTA |
|---|---|---|---|---|---|---|---|
| `/` | `app/page.tsx` | SSR+ISR (r60) | Brand hub / services overview | Yes | Page + root layout | `StructuredData` (global) | Book Appointment / WhatsApp |
| `/services` | `app/services/page.tsx` | Client (SSR shell) | Service catalogue hub | Yes | `app/services/layout.tsx` | ItemList + BreadcrumbList (inline) | Book Your Appointment |
| `/services/<slug>` ×13 | e.g. `app/services/bridal-makeup-chennai/page.tsx` | Static | Service money page | Yes | `buildServiceMetadata()` | (none on page) + global | Book trial / Check Availability / WhatsApp |
| `/menu` | `app/menu/page.tsx` | Client | Full price list + packages | Yes | `app/menu/layout.tsx` | WebPage (inline) | Book Now / Choose Plan |
| `/about` | `app/about/page.tsx` | Client | Brand story + FAQ | Yes | `app/about/layout.tsx` | (none) | WhatsApp |
| `/gallery` | `app/gallery/page.tsx` | Server | Portfolio gallery | Yes | in-file Metadata | (none) | Contact / Services |
| `/blogs` | `app/blogs/page.tsx` | Client | Blog listing | Yes | `app/blogs/layout.tsx` | (none) | — |
| `/blogs/<slug>` ×14 | `app/blogs/[slug]/page.tsx` | SSG | Article | Yes | `generateMetadata` | Article + Breadcrumb + FAQPage | Book / WhatsApp |
| `/contact` | `app/contact/page.tsx` | Client | Contact + map | Yes | `app/contact/layout.tsx` | ContactPage w/ LocalBusiness (inline) | Call / WhatsApp / Map |
| `/kalpana` | `app/kalpana/page.tsx` | Client | Founder profile | Yes (sitemap pri 0.6) | `app/kalpana/layout.tsx` | ProfilePage (inline) | Book a Consultation |
| `/best-salon-in-chennai` | `app/best-salon-in-chennai/page.tsx` | Client | Head "best salon" page | Yes | `app/best-salon-in-chennai/layout.tsx` | WebPage (inline) | Call / Book on WhatsApp |
| `/api/reviews` | `app/api/reviews/route.ts` | Server route | Review JSON (unused) | No (robots blocks `/api/`) | — | — | — |
| 404 | `app/not-found.tsx` | Server | Not found | No (noindex) | in-file Metadata | — | Go Home / Contact |

**Live-site deviations** (deployed build): route `/pricing` serves the menu content; header nav "Pricing" → `/pricing`; footer shows old address; homepage `<title>` = "Best Hair, Skin & Bridal Salon in Chennai, Maduravoyal | Anaplak" with emoji-laden description + `<meta name="keywords">`.

---

## 3. Critical Confirmed Code Issues (P0)

### 3.1 Live site is an old build (deployment drift) — P0
**What:** Every live-vs-repo diff below is confirmed against rendered output vs working tree + `git log`.
- Live header nav: `Pricing` → `/pricing` (working tree `components/header.tsx:23` uses `/menu`).
- Live homepage `<head>`: `<meta name="keywords" content="hair salon,beauty salon,...">` (absent in `app/page.tsx`), title/og/twitter values differing from source, AdSense preload `<link rel="preload" href="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7823087641">` (source removed AdSense).
- Live JSON-LD: `@type:"HairSalon"` with `"aggregateRating":{"ratingValue":"4.9","reviewCount":"28"}`, stale address `"2nd Floor, TNHB, : 3, 2nd Main Rd, 4th Block, CDN Nagar, MMDA Colony"`, `geo 13.0515/80.1656`. Working tree `components/structured-data.tsx` emits `BeautySalon`, **no** aggregateRating, new address `Vadavanniamman Nagar 1st St`, `geo 13.064977/80.172559`.
- Live homepage footer/visit-us show old hours "Mon to Sat 10AM–8PM / Sun 10AM–6PM" and old address; repo `data/businessInfo.ts:46–52` = 10:00–21:00 daily.
- Live sitemap lists `/pricing` and `/best-salon-in-chennai` at `priority 1`; repo `app/sitemap.ts` lists `/menu` and `0.8`.
- `git status` shows `app/pricing/*` deleted and ~40 modified files uncommitted in working tree.
**Why it matters:** Google, GBP crawlers and real tablets/salons see contradicting NAP, hours, pricing route and brand content. Schema penalties + local mismatch.
**Fix:** `npm run build` from HEAD working tree, deploy, verify live `/menu`, new NAP, `BeautySalon` schema, removed meta keywords, removed AdSense preload. Add a deploy pipeline and a post-deploy smoke check (see backlog ID-01).

### 3.2 Testimonials present static reviews as live "Google Review" evidence — P0 (quality/trust + potential policy issue)
**Confirmed:** `components/testimonials.tsx:18–54` hardcodes `FALLBACK_REVIEWS` (Bala Murugan, Lokesh R, Ajay Thenneti, Anand V, Santhi Babu, each `role: "Google Review"`, rating 5). `useState(FALLBACK_REVIEWS)` (line 153); `loading`/`isFromGoogle`/`totalRating`/`totalReviews` are never set (lines 155–157, 216); **no `fetch('/api/reviews')` call exists in the file**. The "Google badge" (lines 216–247) is dead code.
**Why it matters:** The site implies these are current Google reviews while the render is static. Any mismatch with real GBP reviews erodes trust and risks being read as unverifiable social proof; Google's guidelines require review content to be genuine and verifiable.
**Fix:** Wire the component to `fetch('/api/reviews')` with `FALLBACK_REVIEWS` as a clearly-labelled offline fallback (`role: "Client review (sample)"`, no implied Google rating); or render real reviews only. Add `revalidate`/error handling (backlog ID-02).

### 3.3 Schema type conflict + stale/self-serving ratings in live markup — P0 (after deploy resolves, but guard it)
`scripts/check-seo.mjs` bans `HairSalon`, `aggregateRating`, `SearchAction` in `components/structured-data.tsx` — the working tree complies, the **live build does not**. No review/rating schema should be added until genuine, queryable review data exists. Add a regression test that runs against the *built* `_next` output, not only source (backlog ID-03).

### 3.4 Broken/unverifiable image references
- `components/services-showcase.tsx:43` → `"/elegant-bride-makeup-and-hairstyling-beauty-portra.jpg"` — file exists only as `public/blogs/elegant-bride-makeup-and-hairstyling-beauty-portra.jpg` and root `public/elegant-bride-makeup-and-hairstyling-beauty-portra.webp`. Root `.jpg` is **missing** ⇒ the homepage bridal-card background 404s. Fix: use `/elegant-bride-makeup-and-hairstyling-beauty-portra.webp` or the webp path (P1).
- `components/services-showcase.tsx:133` has `alt=""` on a meaningful card image (P2).
- `public/favicon/site.webmanifest` is the default template `"name": "MyWebSite", "short_name": "MySite"` — rebrand (P3).

---

## 4. High-Priority Confirmed Issues (P1)

| ID | Issue | Location | Detail |
|---|---|---|---|
| P1-1 | Place ID mismatch | `data/businessInfo.ts:54` = `ChIJ5R3P1HxIuJoRk3OviXZ9FVA`; `.env` `GOOGLE_PLACE_ID` = `ChIJ5R3P1HxhUjoRk3OviXZ9FVA` | Two different IDs. Embed uses the former, reviews API uses the latter. At least one is wrong. Resolve against your verified GBP `place_id`, then put it in one source (`businessInfo.ts`) and derive `.env`/API from it. **VERIFY the correct value** via the Place Details API before changing. |
| P1-2 | Hardcoded NAP | `app/about/page.tsx:692` prints `"+91 98400 88867"` directly instead of `businessInfo.phone`; contact/Instagram URLs hardcoded across components (e.g. `app/contact/page.tsx:255` `…/#`, `app/about/page.tsx`) | Centralise via `businessInfo` + `socials`; keep single source. |
| P1-3 | Service money pages ship no Service/FAQ/Breadcrumb structured data | `components/service-detail-page.tsx` renders FAQs (`<details>`) and a commented-out breadcrumb (lines 79–87); no JSON-LD except the global blocks | Add `Service` + `Offer` (with visible price), `FAQPage` (from the same `data.faqs`), and `BreadcrumbList` per detail page (backlog ID-04). |
| P1-4 | `/services` hub duplicates catalogue | `app/services/page.tsx:15–288` defines a second, hardcoded `services` array that already diverges from `data/serviceData.ts` (e.g. copy, deliverables) | Refactor hub to render from `servicePages` (single source) (backlog ID-05). |
| P1-5 | Unverifiable claims repeated site-wide | `components/why-choose-us.tsx` ("23 certified beauty specialists", "Award-winning salon", "since 2020"), `app/about/page.tsx` ("1000+ satisfied customers", "20 BARBER AWARDS", "100+ haircuts/month"), `components/ui/CTASection.tsx` ("1000+ transformations"), `data/businessInfo.ts:6` (`award: "Best Salon in Maduravoyal 2026"`), homepage "Rated 4.9/5 by 1000+" | Add evidence or soften: link a real award/verify, quote real GBP counts only; publish actual number of stylists. Competitors quote **verifyable** numbers and branch/review counts. |
| P1-6 | Live-experience images are stock, not portfolio | Blog/service imagery uses stock-like photos (`public/female-colorist-professional.jpg`, `public/hair-coloring-salon.jpg`, etc.) + only gallery uses real-work photos | Replace hero/service visuals with original salon work where possible; at minimum, keep meaningful descriptive `alt`. |
| P1-7 | No author/date freshness on service pages; blog author attr is minimal | Service pages: no publish/update date; blog `Article` schema sets `dateModified = datePublished` (same value) — no "last updated" signal. `app/blogs/[slug]/page.tsx` shows date only | Add `dateModified` metadata + visible "Reviewed/Updated" date; support `updatedAt` in `Blog` data model (backlog ID-06). |
| P1-8 | Very large `keywords` arrays still in blog data (not exposed to `<meta>` but bloat + content smell) | `data/blogData.ts` every post has 20–50 keyword strings; also `ServicePageData.keywords` in `data/serviceData.ts` | Keep for internal mapping only; never emit as meta; consider trimming to ~10/core intent (P3). |
| P1-9 | Blog content is keyword-dense with many in-article `blog-mid-cta` boxes repeating the same booking link | `data/blogData.ts` (e.g. `keratin-treatment-guide` contains 3 mid-CTA boxes) | Thin out mid-CTAs to one; add first-hand salon experience, before/after guidance, real tip details (backlog ID-07). |
| P1-10 | `revalidate = 60` on Home | `app/page.tsx:91` | Forces frequent regeneration for live tests/GBP freshness; keep but ensure ISR cache basic. OK for freshness; watch build cost. P3. |

---

## 5. VERIFY Checklist (needs GSC / GA4 / GBP / crawl / runtime evidence)

| # | Hypothesis / claim | What to check | Where |
|---|---|---|---|
| V1 | Which `placeId` is the correct GBP id | Place Details API call for both IDs; compare name/address/rating | `.env` vs `data/businessInfo.ts` |
| V2 | "4.9 / 1000+ clients" numbers | Real GBP rating + review count; update claims to match | Home, why-choose-us, best-salon page |
| V3 | `/api/reviews` ever returns OK | Hit `/api/reviews` on prod (needs env vars deployed); check frequent 500 | Vercel envs |
| V4 | Current indexation & coverage | GSC: `sitemap.xml`, page indexing count, "Excluded" reasons, Core Web Vitals field data | GSC |
| V5 | Whether old `/pricing` earned links/impressions before redirect | Compare GSC "Pages" for `/pricing`; needs 301 → `/menu` if live | GSC + `next.config` rewrites |
| V6 | Performance field data | PageSpeed/crux field data (LCP/INP/CLS) mobile before/after | GSC CrUX |
| V7 | Keyword overlap/cannibalisation between Home, `/about`, `/best-salon-in-chennai` | GSC queries by page for "best salon…chennai" | GSC |
| V8 | Googlebot renders hero H1 as in working tree (vs live) | VideoDev/URL Inspection POST | GSC |
| V9 | GBP category & Attributes current | GBP editorial panel: Primary category `Hair salon`? also `Beauty salon`, `Bridal shop`? Service list completeness | GBP |
| V10 | Existing citations (Justdial, LBB, magicpin, WeddingWire, etc.) | Search business name; audit NAP consistency | Manual |
| V11 | Do AdSense tags remain anywhere in the build (removed from source) | Inspect built chunks for `adsbygoogle` | Built output / live |
| V12 | Whether live `/menu` 404s today | curl https://anaplakartandglamsalon.com/menu | Live |

---

## 6. URL / Route Inventory
See Section 2 table. Total indexable routes (working tree): 1 (home) + 1 `/services` + 13 service pages + 1 `/menu` + 1 `/about` + 1 `/gallery` + 1 `/blogs` + 14 blog posts + 1 `/contact` + 1 `/kalpana` + 1 `/best-salon-in-chennai` = **36 URLs** in `sitemap.xml` (plus `/not-found` noindex).

---

## 7. Metadata Audit (working tree = target after deploy)

Rules applied: one intent per URL; descriptive titles; no keyword repetition; distinct descriptions; H1 matches visible purpose.

| URL | File | Current title | Recommended title | Current description | Recommended description (≤155) | H1 (visible) | Canonical | OG/Twitter | Schema | Priority |
|---|---|---|---|---|---|---|---|---|---|---|
| `/` | `app/page.tsx` | Best Hair, Skin & Bridal Salon in Chennai, Maduravoyal \| Anaplak Art & Glam | **Hair, Skin & Bridal Salon in Maduravoyal, Chennai \| Anaplak Art & Glam** (drop "Best" — leave to a page that can evidence it) | Premium hair, skin, nail and bridal salon… | Keep (already good). Optionally replace "Premium" claim with factual descriptor: "Everyday hair, skin, nail and bridal services in one salon…" | `Best bridal makeup, hair styling & personalized beauty services in Chennai, Maduravoyal` (working tree; live shows `PREMIUM SALON BEAUTY EXPERTS`) | yes | yes (empty alt logos) | global 3 blocks | P2 (differentiate from best-salon page) |
| `/services` | `services/layout.tsx` | Hair, Beauty & Bridal Services in Chennai, Maduravoyal \| Anaplak | **Hair, Makeup, Skin & Nail Services in Maduravoyal, Chennai \| Anaplak** | Discover professional hair coloring, balayage, keratin… | Keep; quantify: "14+ services from ₹130–₹30,000 under one roof in Maduravoyal, MMDA Colony." | "Our Services" | yes | yes | ItemList + Breadcrumb | P2 |
| `/services/bridal-makeup-chennai` | `bridal-makeup-chennai/page.tsx` | Bridal Makeup in Chennai, Maduravoyal \| Flawless Wedding Looks from ₹15,000 \| Anaplak Art & Glam | **Bridal Makeup in Chennai \| HD, Airbrush & Classic from ₹15,000 \| Anaplak, Maduravoyal** | Book professional bridal makeup in Chennai from ₹15,000… | Keep; add trial + outdoor note ("Trial ₹3,000; venue service available"). | `Bridal Makeup in Chennai, Maduravoyal, Look Stunning on Your Wedding Day` | yes | yes | none → add Service/FAQ/Breadcrumb | P1 |
| `/services/hair-treatment-chennai` | `hair-treatment-chennai/page.tsx` | Hair Texture Treatments \| Anaplak | **Keratin, Smoothing, Botox & NanoPlastia in Chennai \| Anaplak, Maduravoyal** | Professional keratin… from ₹3,000 | Keep; open with price ladder (₹3,500 partial / ₹7,000 full). | service tagline | yes | yes | none → add | P1 |
| `/services/hair-coloring-chennai` | `hair-coloring-chennai/page.tsx` | Hair Colouring in Chennai \| Anaplak | **Balayage, Highlights & Global Colour in Chennai \| Anaplak, Maduravoyal** | Professional hair colouring… | Keep; name techniques (balayage, foilyage, root touch-up ₹1,800). | service tagline | yes | yes | none → add | P1 |
| `/services/hair-extension-chennai` | `hair-extension-chennai/page.tsx` | Hair Extensions in Chennai \| Anaplak | **Tape, Nano & Clip-in Hair Extensions in Chennai \| Anaplak, Maduravoyal** | Get longer… | Keep; add maintenance price. | service tagline | yes | yes | none → add | P1 |
| `/services/hair-styling-chennai` | `hair-styling-chennai/page.tsx` | Hair Styling \| Anaplak | **Men's & Women's Haircuts, Blow-dry & Updos in Chennai \| Anaplak, Maduravoyal** | Professional hair styling… men and women | Keep; add stylist tiers (Premier ₹900 / Director ₹1,300). | service tagline | yes | yes | none → add | P1 |
| `/services/party-makeup-chennai` | `party-makeup-chennai/page.tsx` | Party Makeup \| Anaplak | **Party & Evening Makeup in Chennai from ₹10,000 \| Anaplak, Maduravoyal** | Book professional party makeup… | Keep; note in-salon session duration. | service tagline | yes | yes | none → add | P1 |
| `/services/engagement-makeup-chennai` | `engagement-makeup-chennai/page.tsx` | Engagement Makeup \| Anaplak | **Engagement & Pre-Wedding Makeup in Chennai \| Anaplak, Maduravoyal** | Book professional engagement makeup… | Keep; mention HD + hairstyling included. | service tagline | yes | yes | none → add | P1 |
| `/services/fashion-editorial-makeup-chennai` | `…/page.tsx` | Fashion & Editorial Makeup \| Anaplak | **Fashion, Editorial & Runway Makeup in Chennai \| Anaplak** | Professional fashion and editorial makeup… | Keep; list shoot-type examples. | service tagline | yes | yes | none → add | P2 |
| `/services/facial-treatments-chennai` | `…/page.tsx` | Facial Treatments \| Anaplak | **Facials & Skin Treatments in Chennai from ₹2,000 \| Anaplak, Maduravoyal** | Professional facial treatments… | Keep; name signatures (Casmara, Glutathione, Anaplak Gensly). | service tagline | yes | yes | none → add | P1 |
| `/services/anti-aging-treatments-chennai` | `…/page.tsx` | Anti-Aging Treatments \| Anaplak | **Anti-Aging Skin Treatments in Chennai \| Anaplak, Maduravoyal** | Advanced anti-aging treatments… | Keep; avoid "clinically-proven" (no medical backing) → "in-salon rejuvenation". | service tagline | yes | yes | none → add | P2 |
| `/services/manicure-pedicure-chennai` | `…/page.tsx` | Manicure & Pedicure \| Anaplak | **Manicure & Pedicure in Chennai from ₹800 \| Anaplak, Maduravoyal** | Professional manicure and pedicure… | Keep; add signature list. | service tagline | yes | yes | none → add | P2 |
| `/services/threading-waxing-chennai` | `…/page.tsx` | Threading & Waxing \| Anaplak | **Threading & Waxing in Chennai from ₹130 \| Anaplak, Maduravoyal** | Professional threading… | Keep; eyebrow ₹130 / full-body ₹4,500. | service tagline | yes | yes | none → add | P2 |
| `/services/nail-art-extension-chennai` | `…/page.tsx` | Nail Art & Extension \| Anaplak | **Nail Extensions & Nail Art in Chennai from ₹1,000 \| Anaplak, Maduravoyal** | Professional nail art… | Keep; price ladder gel/acrylic/polygel. | service tagline | yes | yes | none → add | P2 |
| `/menu` | `menu/layout.tsx` | Salon Menu & Prices in Chennai, Maduravoyal \| Anaplak Art & Glam | **Salon Price List & Packages \| Anaplak, Maduravoyal, Chennai** | View the full salon menu… | Keep, add "from ₹130". | "Salon Menu" | yes | yes | WebPage (name says "Pricing" — align to /menu) | P2 |
| `/about` | `about/layout.tsx` | Luxury Hair, Beauty & Bridal Salon in Chennai, Maduravoyal \| Anaplak | **About Anaplak — Salon & Bridal Studio in Maduravoyal, Chennai** | Learn about Anaplak… | Keep; add founder + founding year, real numbers. | About page heading | yes | yes | none → add AboutPage/Organization | P2 |
| `/gallery` | `gallery/page.tsx` | Bridal Makeup & Hair Styling Portfolio Gallery … \| Anaplak | **Anaplak Portfolio — Bridal Makeup, Hair & Nail Gallery** | Explore stunning bridal makeup… | Keep; add service filter hints. | gallery heading | yes | yes | none | P2 |
| `/blogs` | `blogs/layout.tsx` | Beauty Tips, Hair Care & Bridal Makeup Blogs in Chennai, Maduravoyal \| Anaplak | **Beauty, Hair & Skincare Guides from Anaplak Salon Chennai** | Discover expert beauty tips… | Trim: "Guides from the Anaplak team in Chennai, Maduravoyal." | "Beauty Insights" | yes | yes | none | P2 |
| `/blogs/<slug>` ×14 | `blogs/[slug]/page.tsx` | `<title> \| Anaplak Art & Glam` | keep unique per post | `<description>` | per post | = blog.title | yes | yes | Article+Breadcrumb+FAQ | P1 (consistent) |
| `/contact` | `contact/layout.tsx` | Book Your Salon Appointment in Chennai, Maduravoyal \| Anaplak | **Contact & Directions — Anaplak Salon, Maduravoyal, Chennai** | Visit Anaplak… MMDA Colony… parking | Keep; add tel:number in title? No—keep title clean. | "Connect With Us" | yes | yes | ContactPage | P2 |
| `/kalpana` | `kalpana/layout.tsx` | Kalpana - Beauty & Bridal Makeup Artist in Chennai, Maduravoyal \| Anaplak | **Kalpana — Founder & Senior Bridal Makeup Artist \| Anaplak, Chennai** | Meet Kalpana… | Keep; remove duplicate city+city phrasing. | "Kalpana" | yes | yes | ProfilePage (Person) | P2 |
| `/best-salon-in-chennai` | `best-salon-in-chennai/layout.tsx` | Best Salon in Chennai, Maduravoyal \| Anaplak Art & Glam | **Keep** — but ensure content evidences the claim (reviews, awards, metrics). | Anaplak Art and Glam is a top-rated salon… | Keep; add verifiable evidence. | "Best Salon in Chennai" | yes | partial OG | WebPage | P1 (cannibal risk w/ Home) |
| 404 | `not-found.tsx` | Page Not Found \| Anaplak Art & Glam | keep | — | — | 404 | noindex ✓ | — | — | ✓ |

Notes:
- **Do not** create separate pages per neighbourhood solely for "best salon Koyambedu", "best salon Anna Nagar" etc. — one `/best-salon-in-chennai` + service pages covering "serving Koyambedu/Mogappair/Anna Nagar" is enough. Keep `/best-salon-in-chennai` as the single place for locality wording.
- Title keyword repetition is already moderated; keep each title ≤ ~65 chars before brand, unique descriptors for services.
- No `meta keywords` should ever be emitted.

---

## 8. Technical SEO Audit

### Crawlability / Indexability
| Check | Result | Evidence / Action |
|---|---|---|
| SSR critical content | CONFIRMED good — hero, headers, links, prices are in initial HTML | live homepage `curl`; Next SSR |
| robots.txt | OK; blocks `/api/`, `/_next/`, `/admin/`, `/private/`, `/*.json$`. Sitemap declared. | `app/robots.ts` (live = repo) |
| XML sitemap | Generated; 36 URLs in working tree; **live sitemap stale** (uses `/pricing`, priorities differ) | `app/sitemap.ts`; fix by deploy. Consider splitting sitemap (static/blog/services) doesn't matter at ≤36 URLs. |
| Canonical | CONFIRMED self-canonicals on all indexable pages + `metadataBase` | `app/layout.tsx:31`, per-layout `alternates` |
| 404 behavior | CONFIRMED real 404 status + noindex page | `app/not-found.tsx:8`, live test `/nonexistent-page-test` → 404 |
| Soft-404 risk | Low; unknown slugs server 404 |  |
| Redirects | No legacy `/pricing` → `/menu` 301 present. **Live build still exposes `/pricing`.** After deploy add: `/pricing` → `/menu` if any old links exist (check GSC V5) | `next.config.mjs` `redirects()` |
| Query params | None used (no facets); `bk_src` booking only |  |
| Mobile rendering | Same template; responsive; mobile menu present; no separate mobile viewport issues | `app/layout.tsx:54` |
| hreflang | Not applicable (single `lang="en"`; Indian market) — skip |  |
| HTTPS/security | HSTS preload, CSP on images, nosniff headers; `Permissions-Policy` blocks geolocation (fine) | `next.config.mjs:36–89` |

### Core Web Vitals causes (mobile)
- **LCP:** hero image `SLIDE_01.webp` (`quality` 90, `sizes=100vw`) is preloaded with `fetchPriority=high` — good and correct (`components/hero-slider.tsx:62–75`). Extra `priority` preloads in header (logo 16 breakpoints + instagram/facebook/youtube 18px icons) add bytes before LCP (see §15).
- **CLS:** hero uses fixed `min-h-screen` + absolute images; logo containers give explicit heights. Moderate risk from dynamically injected content via RSC stream (placeholder `min-h-[…]` blocks mitigate). Watch: `<h2>` in About section ends mid-sentence in working tree ("…with" + blink) which is a content bug, not CLS.
- **JS/hydration:** Home + services/menu/kalpana etc are `"use client"` with heavy Marquee-like components; `framer-motion`, `react-masonry-css`, full-screen `SparkleCursor` canvas, `FontAwesome` — JS heavy for mobile. Optimise via code-splitting, `dynamic()` (already partly), and disabling SparkleCursor on touch by default.
- **Fonts:** self-hosted, `display: swap` — good. `preconnect` to fonts.googleapis.com is leftover (groups.googleapis.com/fonts.gstatic.com are NOT self-hosted paths actually — `next/font` downloads at build; remove the manual preconnect to Google Fonts at `app/layout.tsx` head? There is no manual preconnect in layout; the HTML head showed `<link rel="preconnect" href="https://fonts.googleapis.com">` + fonts.gstatic.com — that's generated by `@next/third-parties`? Those preconnects in live HTML might come from the older build using `@next/font/google` external. VERIFY after deploy.)
- **AdSense preload in live HEAD:** removing it (deploy working tree) removes one render-blocking preload. P1.

### Image optimization
- `next/image` used everywhere; remote patterns configured for Google-hosted photos. Good.
- Blog images are JPG (large); consider WebP conversion (post-upload pipeline or run `sharp` in CI).
- `public/` holds unused old assets (`gal_01–06`, `gallery1–6.JPG`, `circle_*`, `about_img_01/02`, `hair_coloring.png`, etc.) — reduce bundle evidence noise & repo size (P3).

### Third-party scripts
- GTM (fine). AdSense preload (live only) — remove. No cookie-consent banner — **VERIFY** legal/consent policy; not an SEO issue but conversion/compliance. P3.

### Duplicate content
- `/services` page duplicates service titles/benefits with the detail pages (same service names/descriptions rendered twice on the site). Refactor to single source (P1-4).
- `/pricing`(live) duplicates `/menu`(new). Resolve by redirect after deploy.
- No cross-page near-duplicate longform copy found in working tree.

### Security
- `.env` gitignored, not tracked ✓. Contains real Google API keys for Maps Embed (public, must be **referrer-restricted to the domain**) and Places API. **VERIFY** key restrictions; do not commit `.env`.

---

## 9. Keyword-to-URL Map (Chennai + Maduravoyal)

Columns: query-cluster → target URL → page type → priority → competitor head-on → action. Owners: only **one** URL per intent.

| Cluster | Example queries | Owner URL | Priority | Competitors ranking | Gap vs Anaplak | Action (each adds first-hand value) |
|---|---|---|---|---|---|---|
| Broad salon | hair salon maduravoyal, best salon in chennai, beauty parlour maduravoyal | `/best-salon-in-chennai` + `/` | H | YLG, Anlon, listicles (LBB/Cleo) | GBP footprint + branch pages; real reviews | Curate verifiable evidence; add service→page links; optimise GBP (see §12). |
| Hair salon / stylist | haircut salon chennai men/women, top hair stylist chennai | `/services/hair-styling-chennai` | H | Justdial, Stylecraze listicles, big chains | tiered pricing + portfolio | Expose stylist tiers, durations, original haircut photos; FAQ on maintenance. |
| Hair treatments | keratin chennai price, hair smoothening, nano plastia, botox treatment | `/services/hair-treatment-chennai` | H | YLG keratin page, chains | price ladder + before/after | Deepen treatment table w/ ₹ ladder, aftercare, live process photos; link `/menu`. |
| Hair colour | balayage chennai, global colour, highlights, root touch-up price | `/services/hair-coloring-chennai` | H | chains, specialist colorists | technique breadth + colour correction | Add technique breakdown, ammonia-free note, colour correction FAQ. |
| Bridal makeup | best bridal makeup artist chennai, bridal makeup price/trial | `/services/bridal-makeup-chennai` | H | WedMeGood, Veera, RS Bridal, WeddingWire | tier pricing + portfolio + reviews | Publish package tiers (₹15k/18k/22k/30k), trial details, original bride gallery, real reviews; internal link from gallery. |
| Engagement/party makeup | engagement makeup chennai, party makeup price | `/services/engagement-makeup-chennai`, `/services/party-makeup-chennai` | M | artist pages | pricing clarity | Combine with process/timeline; cross-link packages. |
| Facials/skin | facial treatment chennai, anti aging facial, detan | `/services/facial-treatments-chennai` | M | chains, Justdial | menu depth | List each facial w/ price from `/menu`; skin-type FAQ. |
| Nails | nail art chennai, gel extensions price, acrylic nails | `/services/nail-art-extension-chennai` | M | Justdial, nail studios | extensions menu | Price table (₹1,000–₹3,000); raw gallery. |
| Problem+service | frizzy hair treatment, hair fall treatment, dandruff | `/services/hair-treatment-chennai` + blog posts | M | dermatology/chain pages | problem-specific copy | Add sub-anchors on treatment page (frizz, dandruff, hair fall) + matching blog. |
| Price/cost | keratin cost chennai, bridal makeup price chennai, haircut price | `/menu` (+ facet anchors) | H | YLG price table, chains | pricing transparency | `/menu` already has full ladder — keep fresh; link from every service page (exists). |
| Comparison | keratin vs smoothening, airbrush vs HD | blog `keratin-vs-smoothening`, bridal service FAQ | M | YLG `<service>-vs-<brand>` pages | comparison pages | Expand one comparison blog + link; YLG proves these earn links/reviews. |
| Local/near-me | salon near me maduravoyal, … koyambedu | `/best-salon-in-chennai` (+ GBP posts) | H | GBP (local pack dominates) | GBP only | GBP posts/photos; service pages mention neighbourhoods; NO doorway pages. |
| Informational | bridal makeup trends 2026, monsoon hair care tips | `/blogs/*` | M | beauty media/listicles | content authority | Each post must add salon-first-hand insights (cases, pricing reality, product used). |

---

## 10. SERP / Competitor Analysis (sampled 2026-09)

### A. Organic ranking diagnosis
Sampled SERPs are instructive (source: DuckDuckGo HTML 2026-09; multi-branch salon + marketplace pattern):

**"best bridal makeup artist in chennai"** — the entire first page is marketplaces + individual artist sites + one big-brand salon landing:
1. WedMeGood vendor category
2. saybridalstudio.in blog ("10 Best-rated Bridal Makeup Artists in Chennai (2026 Refresh)")
3. RS Bridal (rsbridal.in home)
4. WeddingWire category
5. WeddingBazaar category
6. DayYours listicle
7. Justdial category
8. Veera Artistry (home)
9. Veera Artistry landing `/bridal-makeup-artist-chennai.html`
10. Toni&Guy India service landing

**"best hair salon in chennai"**:
1. cleomitra.com listicle
2. Stylecraze listicle
3. lbb.in listicle
4. magicpin listing
5. magicpin blog listicle
6. Justdial category
7. **Anlon Art Salon** landing `/services/best-hair-salon-in-chennai/`
8. **YLG** landing `/best-hair-salon-in-chennai/` (2026 dated, 3-min read)
9. Justdial hair stylist category
10. **YLG home**

Patterns repeat: **third-party listicles/directories + contest-aware salon landing pages + multi-branch GBP footprints**. B₹ `magicpin.in/blog/…` and `magicpin.in/india/Chennai/Chennai/Salon/` are both on page 1 for men's query — directories win where local supply is fragmented.

### B. Local Pack / GBP diagnosis
Local packs for "… near me" / "best salon maduravoyal" are dominated by GBP entities with **review count + recency + category fit + service keywords**. Diagnostics for Anaplak:
- Anaplak currently has **fewer reviews than competitors referenced in SERPs** (28 reviews on live schema vs YLG 2,800+). Volume + recency drives pack inclusion.
- Category & attributes: must list services (keratin, bridal makeup, nails, facials) in GBP service list — aligns with service pages.
- Original photos count (current GBP photos vs YLG/Veera portfolios) directly affects pack CTR.
- Q&A/posts recency.

**Competitor deconstruction (why they rank):**

| Competitor | Page that ranks | Signals observed |
|---|---|---|
| YLG `/best-hair-salon-in-chennai/` | exact-match H1 + dated 2026 + **price table in first fold** + branch links (Adyar/AN/Porur each own URL) + offers (Tuesday/Wednesday deals) + comparison page ecosystem + FAQ + WhatsApp w/ page-ref + author box | Service depth, entity (3 branches), GBP 2,800+ reviews 4.7–4.8, internal mesh. |
| Anlon `/services/best-hair-salon-in-chennai/` | branded landing under `/services/` with exact phrase | Brand authority + descriptive copy. |
| Veera `/bridal-makeup-artist-chennai.html` | exact-match H1; **tier pricing (₹12k/15k/20k)**, 14 "areas we serve", real bride photo gallery + separate gallery page, review box, per-city spread (Coimbatore/Madurai/Trichy pages — thin city variants but internally consistent, not doorway spam) | Portfolio proof + local depth + speed (plain HTML). |
| WedMeGood / Justdial / LBB / WeddingBazaar | category nodes | domain authority + review corpus + structured local data. |

### Why they rank (14 explained cases)
1. **Veera ranks above Anaplak's near-exact bridal page** — Veera: tier prices + real portfolio + areas-served + real reviews. Anaplak: price floor only, stock image hero, no review link, no gallery link near CTA. (H1 mismatch *not* the deciding factor.)
2. **YLG beats Anaplak "/best-salon-in-chennai" (which has exact H1 "Best Salon in Chennai")** — YLG evidences "best" via 2,800+ reviews/3 branches + prices; Anaplak asserts "best" with a static 5-review carousel and unverifiable "1000+ clients". Google rewards evidence, not the claim.
3. **WedMeGood & Justdial outrank any exact-match bridal page** — entity authority + thousands of vendor reviews; no single salon page can beat them on head bridal queries; target *informational/neighbour* queries instead.
4. **DayYours / CleoMitra / LBB listicles rank for "best salon"** — third-party editorial earns links; Anaplak should pursue being *listed* in them (PR/local outreach) — a cheap link + brand signal.
5. **Magicpin blog + category both rank** — directories carry local schema + volume; Anaplak should claim/optimise its listings (V10).
6. **Anlon ranks w/o massive review counts shown on page** — strong brand + dedicated landing; shows a dedicated, content-dense landing can outrank vague home pages.
7. **YLG comparison pages (vs Naturals, vs Lakmé)** — these earn links and coverage; a "Keratin vs Smoothening" + "HD vs Airbrush bridal makeup" set on Anaplak mirror this and map to real queries.
8. **Dated, fresh listicles win** — "2026 Refresh" articles. Anaplak's yearly-updatable blog slots (bridal trends 2026) are structurally similar but lack portfolio screenshots/actual price context vs these winners.
9. **Sheer review recency/volume** — pack positions correlate with recent review velocity; page 1 for local queries is largely GBP. Anaplak's reviews strategy is the single highest-leverage action (see §12).
10. **Price tables rank for cost queries** — YLG shows exact ₹ in first 100px; Anaplak pins prices to `/menu`. Recommendation: surface a compact price snippet on service pages (consistent w/ `/menu`).
11. **Veera's per-city thin pages** demonstrate controlled area targeting works when tied to real service reach — Anaplak can do the same *only as genuinely-served area mentions* on `/best-salon-in-chennai` and service pages (no new doorway URLs).
12. **A stock-photo hero (Anaplak bridal) vs real-bride galleries (Veera/WedMeGood)** — self-evidence drives engagement and reviews; gallery is buried on `/gallery` without linking from bridal CTA.
13. **WhatsApp/phone CTAs in first fold** — Veera and YLG both; Anaplak already does this well (hero CTA + `tel:`). Keep.
14. **Meta-keywords + old meta bloat on live site** — a junk-signal in <head> that the top pages don't have; deploy removes it.

### "10 exact-match loser" cases (explicit)
1. Anaplak `/best-salon-in-chennai` — exact "Best Salon in Chennai" H1 but loses to YLG/Anlon (evidence vs assertion) **CONFIRMED loser in sampled SERP**.
2. Anaplak `/services/bridal-makeup-chennai` — near-exact "bridal makeup in chennai" title; loses to Veera (tier prices + portfolio) and marketplaces.
3. Veera `/bridal-makeup-artist-chennai.html` — **exact-match page** still loses to WedMeGood/Justdial (authority/volume).
4. YLG `/best-hair-salon-in-chennai/` — exact match, ranks #8–10 behind listicles/directories → even the best local landing loses to editorial/directory head terms.
5. Anaplak title "Best Hair, Skin & Bridal Salon…" (home) — head term with no supporting page content; thinner than YLG home.
6. Anaplak blog "2026 Bridal Makeup Trends" — title matches latest-year trend intent; loses to saybridalstudio's "best artists 2026" listicle (third-party list format + links).
7. Anaplak blog "Keratin Treatment: The Complete Guide" — intentional keyword coverage, but YLG's *service-priced* keratin page answers cost intent better.
8. Anaplak `/menu` price ladder vs YLG price table shown in the ranked page — price intent users bounce because Anaplak's prices are on a second-level page without table marks in the SERP snippet (AppliesOn? None).
9. Anaplak `/kalpana` (authority/entity) vs Veera's founder page — Veera ties founder into every price/FAQ; Anaplak's person page is walled off (no author schema linking, no ranks).
10. Anaplak `meta description` (live, emoji-laden) appears nowhere on page 1 — shows exact-match meta alone never earned the position; the winners use factual, price/evidence-led snippets.

**Takeaway:** exact-match titles/H1 are table stakes, not differentiators. The differentiators are: (a) evidence (portfolio, real reviews, ₹ tables), (b) entity footprint (GBP, citations, multi-neighbourhood presence), (c) editorial/directory backlinks, (d) freshness.

---

## 11. Local SEO Plan (non-code)

**GBP (Google Business Profile)**
1. **Primary category** — `Hair salon` (if main) with secondary: `Beauty salon`, `Bridal shop`, `Makeup artist`, `Nail salon`, `Facial spa`. Use exactly what Google allows; no category stuffing of city words.
2. **Do NOT add "Maduravoyal"/"Chennai" to the BUSINESS NAME** unless it is the legally registered name. Business name: "Anaplak Art And Glam Salon" (match every platform + NAP).
3. **NAP match:** verify the correct `placeId` (V1); make address = `data/businessInfo.ts` one-line, exactly as GBP shows (street, locality Maduravoyal, Chennai, TN 600095, India); phone `+91 98400 88867` primary. Update the About/live footer.
4. **Hours:** set 10:00–21:00 daily in GBP to match repo, incl. holiday exceptions via GBP.
5. **Attributes:** free WiFi, wheelchair-accessible entrance (if true), "women-only"? (leave blank if mixed), parking. **Verify from real facility.**
6. **Service list in GBP:** keratin/smoothing/nanoEplastia/botox, bridal makeup, party makeup, balayage/highlights, facials (list each name), manicure/pedicure, nail extensions, threading/waxing, hair extensions, men's grooming. Mirror the `/menu` names exactly.
7. **Photos:** 50+ original salon photos (studio, reception, work results: bridal, colour, keratin, nails) each with GBP captions (descriptive, not keyword-stuffed). Refresh monthly. Q&A taps: "Keratin cost?", "bridal trial?" — answer within GBP Q&A.
8. **Posts:** weekly GBP posts (offers, transformations, seasonal) that link-free but build recency signals.

**Reviews (genuine only)**
9. Review program: after each service, ask happy clients (in person/WhatsApp follow-up the customer already consented to) for a Google review; provide the direct **review link** (find `https://search.google.com/local/writereview?placeid=<ID>`), never incentivise. No bots, no gift-for-review coercion.
10. Respond to **every** review (positive + negative) within 48h; thank by name; mention service done; keep it natural. Recap in a spreadsheet monthly (owner).
11. Fix the on-site claim mismatch: once real GBP counts exist, publish matching numbers on site (component for live rating badge wired to `/api/reviews` — fixes P1-6 testimonial issue).
12. **Do not** embed `aggregateRating` JSON-LD until it reflects GBP with `reviewCount` > threshold; prefer linking to GBP.

**Citations & coverage**
13. Claim/update NAP on: Justdial (Chennai/Salons), LBB, magicpin, WeddingWire, WeddingBazaar bridal, Indiamart, Sulekha, UrbanPro, Facebook, Instagram link-in-bio, YouTube description, Google Maps Q&A. Every citation: same name+address+phone format.
14. Wedding-adjacent partnerships: photographers, bridal boutiques, hall coordinators in Maduravoyal/Koyambedu/Anna Nagar — cross-share Instagram tags, 1–2 local blog quote placements.
15. Local backlinks: listicles (LBB/Cleo/Digital Mélange "best salon west Chennai"), community pages (ward news, realty/commercial guides for MMDA Colony/Maduravoyal), CNY business directories. Earn via authentic "what makes your salon different" pitches + photos/portfolio supply.
16. **Entity consistency:** `sameAs` (already set) + ensure YouTube/FB/IG handle names match; add `@id` identity (`#organization`) across schemas so the entity graph is one.

---

## 12. Content / Topic Clusters
Architecture: static TS data → extend schema so posts carry `updatedAt`, `relatedServiceSlug`, `authorBio`. Content model in `data/blogData.ts` supports scaling without duplication; each new post must include a first-hand salon fact (a real case, price point, product, or before/after) or it should not ship.

Proposed clusters (each requires salon-first-hand value; 1 article = 1 page, no synonym pages):
1. **Keratin & Smoothing physiology for Chennai humidity** — "keratin vs smoothening" (exists), botox vs nanoEplastia cost table, aftercare 72h protocol, Portland/NIL. 
2. **Bridal service journey** — trial session guide (what to bring, 8-week timeline), HD vs airbrush (as FAQ), bridal skincare 3-month plan (exists) linked from bridal CTA, "bridal makeup checklist" (exists).
3. **Monsoon/humidity hair care** — exists; extend into scalp/dandruff sub-theme.
4. **Hair colour** — balayage vs highlights (new), grey coverage/root touch-up (new), colour correction (new).
5. **Skin** — facial types (exists) + a "which facial for skin type" decision piece; detan.
6. **Nails** — extension maintenance, nail art trends (new).
7. **Men's grooming** — beard design, executive shave, men's keratin (new).

Each cluster page links to its owner money page (§9) with descriptive anchor, and to `/menu`.

---

## 13. Internal-Linking Plan
- **Service pages → `/menu`:** already exists ("Check the pricing page…", "Know Exact Pricing"). Keep; add 2–3 inline price-table anchors.
- **Service pages → gallery:** add "See real results → /gallery" CTA (bridal → gallery), and gallery → back to service pages (currently `/gallery` links only to `/contact`, `/services`).
- **Blog → money pages:** exists via `categoryServiceLinks` in `app/blogs/[slug]/page.tsx:20–26`; map ALL 5 categories incl. "Hair Styling". Good pattern; extend per article.
- **Home → services:** ServicesShowcase cards link to `/services/*` (exists). Keep; make the bridal card image path valid (P1-4 broken asset).
- **Best-salon page → service pages:** 6 category cards + topServices table already deep-link (good). Add links from each service "Areas served" strip to `/best-salon-in-chennai`? Prefer bidirectional, natural anchors.
- **Footer:** add `/menu` link (exists) + include `/blogs` (currently missing from footer Explore list — footer has Home/About/Gallery/Services/Contact only; add Blogs + Kalpana). P2.
- **Breadcrumb:** visible breadcrumbs exist on blog and page headers only; add breadcrumbs to service detail pages (+BreadcrumbList schema) (P2).

---

## 14. Performance / UX / Conversion Plan
Exact code changes (see backlog IDs-04, 08–12):

1. **LCP image** — hero fine. Reduce competing preloads: remove `priority` from associated small images in Header topbar (instagram/facebook/youtube 18px icons, `components/header.tsx:78,81,87`) — keep `priority` only on the logo or an LCP candidate. Expected LCP gain on mobile.
2. **Logo srcset explosion** — `logo_updated.webp` with `fill` + many sizes preloaded; set explicit `width/height` (matches aspect) or cap sizes to reduce preload bytes. (P2)
3. **JS:** — `SparkleCursor` only on `lg` screens (root layout wraps in `hidden lg:block`); consider also `prefers-reduced-motion` (already handled inside). Move `framer-motion` gallery to dynamic import. `react-masonry-css` for features — fine. (P3)
4. **Fonts:** after deploy confirm fonts self-hosted (no external preconnect); remove stale Google-Fonts preconnects if present in built HTML. (P2)
5. **CLS:** verify logo/footer fixed-height boxes; add `aspect-ratio` where images load late. Use Lighthouse to benchmark before/after (mobile): LCP<2.5s, CLS<0.1, INP<200ms.
6. **Sticky mobile CTA:** currently commented out in `service-detail-page.tsx:357–369`. Re-enable a *single* sticky bar (Call + WhatsApp/Book) on mobile service pages — high-intent conversion surface. (P1)
7. **Accessibility/form:** quick-book form (`best-salon-in-chennai/page.tsx:130–153`) has name+service; on submit opens WhatsApp (works, no API). Add `aria-required`, success feedback. (P2)
8. **Conversion tracking:** events exist (`booking_click`, `whatsapp_click`, `phone_click`, `map_click`, `booking_form_submit`) via `TrackLink`/`pushEvent`. Ensure GTM container actually forwards `dataLayer` events → GA4 (VERIFY in Tag Assistant). Add `book_trial` on bridal CTA distinct from generic booking (P2).

---

## 15. Analytics / Conversion Measurement
Confirmed in code:
- GTM injected in root layout (`app/layout.tsx:78`).
- `dataLayer` events: `phone_click` (header/footer/service), `whatsapp_click` (TrackLink), `booking_click` (TrackLink/header), `map_click` (footer/contact), `booking_form_submit` (best-salon form). (`lib/gtm.ts`, `components/track-link.tsx`.)
- Direct `tel:` links are wrapped in TrackLink (good); hero WhatsApp button (`hero-slider.tsx:156`) is a TrackLink (good); header social icons are plain `<a>` (not tracked — fine).
- `/api/reviews` exists but unused by UI (testimonial dead code) — plan to wire + capture "reviews viewed".

**Cannot validate without accounts:** GA4 event receipt/parameters, GTM→GA4 forwarding, GSC performance stats, GBP insights/review velocity, PageSpeed field data, search intent breakdown. List them explicitly for the client.

---

## 16. Implementation Backlog, 30/60/90, Regression Plan, Acceptance
See companion file: `docs/seo-audit-2026/ANAPLAK_SEO_IMPLEMENTATION_BACKLOG_2026.md` (backlog table ID-01…ID-19, 30/60/90-day plan, regression-test matrix, final acceptance checklist).

---

## Appendix A — Sources & method
- Local code: `app/`, `components/`, `data/`, `lib/`, `scripts/`, `next.config.mjs`, `package.json`, `.gitignore`, `.env.local.example` (working tree; `.env` read for var names only — secrets not reproduced).
- Live: fetched `https://anaplakartandglamsalon.com/`, `/robots.txt`, `/sitemap.xml`, `/pricing`, `/services/bridal-makeup-chennai`, `/kalpana`, `/nonexistent-page-test`, `/menu` (via /pricing equivalent), rendered-HTML full dump analysed for `<head>`, JSON-LD, footer, GTM.
- SERPs: DuckDuckGo HTML + Bing, sampled 2026-09 for 5 Chennai salon/makeup queries; competitor pages fetched: YLG `/best-hair-salon-in-chennai/`, Veera `/bridal-makeup-artist-chennai.html`.
- GitHub flows: `git status`, `git log`, `.gitignore` — `.env` untracked ✓.
- All recommendations are hypotheses tied to observed evidence; re-validate through GSC after ship.