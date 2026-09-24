# Anaplak — SEO Implementation Backlog, Execution Plan & Acceptance (2026)

Companion to `docs/seo-audit-2026/ANAPLAK_SEO_AUDIT_REPORT_2026.md`. Every item is tied to a file and has a validation step. Severity: P0/P1/P2/P3.

## ✅ Applied in working tree (2026-09-23) — source-level, build-verified
| Backlog ID | Change | File | Verified |
|---|---|---|---|
| ID-02 | Testimonials now fetch `/api/reviews`; fallback reviews relabelled "Client review (sample)"; Google badge only when live data arrives | `components/testimonials.tsx` | `tsc` + build ✓ |
| ID-04 | Service money pages now emit `Service` (+`Offer` INR price), `FAQPage`, `BreadcrumbList` JSON-LD + visible breadcrumb | `components/service-detail-page.tsx` | build; JSON present in prerendered HTML ✓ |
| ID-05 | `/services` hub renders from `data/serviceData.ts` (single source; links via slug) | `app/services/page.tsx` (rewritten) | build ✓ |
| ID-10 | Homepage bridal-card image now points to the existing `.webp`; card alt set | `components/services-showcase.tsx` | build ✓ |
| ID-11 | Place ID single-sourced: reviews route falls back to `businessInfo.placeId` | `app/api/reviews/route.ts`; tell client to confirm the correct ID (VERIFY V1) | build ✓ |
| ID-12 | Hardcoded WhatsApp phone on `/about` now uses `businessInfo.phone.primaryDisplay` | `app/about/page.tsx` | build ✓ |
| ID-14 | Footer "Explore" adds Blogs + Kalpana links | `components/footer.tsx` | build ✓ |
| ID-19 | PWA manifest branded + icon paths fixed (was default "MyWebSite", broken absolute icons) | `public/favicon/site.webmanifest` | build ✓ |
| ID-01 (partial) | `/pricing` → `/menu` **permanent redirect added** (Next emits 308); deploy pipeline + smoke test still TODO | `next.config.mjs` | runtime: `/pricing`→308 `/menu`, `/menu` 200 ✓ |
| — | Full `npm run build` passes (41 static + dynamic routes); `npm run check:seo` passes; `tsc --noEmit` clean | — | ✓ |

**Still to do outside the code fix round:** deploy the working tree (ID-01 remainder), verify place ID against GBP (V1), verify GTM/GA4 forwarding (V2/V11), and the content/GBP/citation work in §§12–13 of the report.

---
## ✅ PAA (People Also Ask) — applied 2026-09-23, build-verified
- New `data/paaData.ts` — curated "People Also Ask" questions per service cluster (from the client's PAA docx), each with a genuine, price-consistent answer from the salon menu.
- Homepage: new `components/people-also-ask.tsx` (accessible `<details>` accordion + FAQPage schema) added between Features and BlogPreview in `app/page.tsx`.
- Service pages: `components/service-detail-page.tsx` now appends `PAA_BY_SERVICE[slug]` after each page's existing FAQs — so they render in the on-page FAQ accordion AND are included in the `FAQPage` JSON-LD (no duplicate work per file).
- Verified in build: home renders the FAQ section + FAQPage schema; bridal/nail pages include appended PAA in FAQ + schema. `tsc`, `check:seo`, `next build` all pass.

---

## 17. Exact Implementation Backlog

| ID | Sev | Page/route | File : line/component | Current behaviour | Problem | Why it matters | Exact change | Sample code / pseudo-patch | Dependencies | Validation | Expected outcome |
|---|---|---|---|---|---|---|---|---|---|---|---|
| ID-01 | P0 | whole site | build/deploy (no pipeline in repo) | Live site = older build (`/pricing`, old NAP, meta keywords, HairSalon+aggregateRating schema, AdSense preload) | Prod ≠ source of truth | Google/GBP see contradictions; schema + local mismatch | Create deploy pipeline + smoke test; deploy working tree; add `/pricing`→`/menu` 301 via `next.config.mjs` `redirects()` | `async redirects(){ return [{ source:'/pricing', destination:'/menu', permanent:true }] }` + Vercel `prebuilt` guard | CICD; verify env vars present in prod | curl each route; grep built HTML for "keywords", "adsbygoogle", "HairSalon"; GSC URL inspection | Consistency; stale markup gone |
| ID-02 | P0 | Home/service/blog (testimonials) | `components/testimonials.tsx:18–54,149–157` | Static fallback labelled "Google Review"; live API never called | Fake-implied social proof; no live data | Trust + policy risk | Wire to `fetch('/api/reviews')`; fallback only on error and labelled "Client review (sample)"; render badge only from API | `const res = await fetch('/api/reviews', { next:{ revalidate:3600 }})`; set `isFromGoogle` | `/api/reviews` + env (`GOOGLE_PLACES_API_KEY`, `GOOGLE_PLACE_ID`) on host | Verify API 200 on prod; badge shows real count | Real reviews shown |
| ID-03 | P0 | schema guard | `scripts/check-seo.mjs` | Checks only source files | Built output unscrutinised | Regressions slip through deploy | Add a `check:built` step scanning `_next/static/chunks/*.js` for `"HairSalon"`, `"aggregateRating"`, `adsbygoogle`, `name:"MyWebSite"` | `git grep -l "HairSalon" .next || true` in CI after build | CI | CI pass/fail | No banned markup ships |
| ID-04 | P1 | service pages | `components/service-detail-page.tsx` | No Service/FAQ/Breadcrumb JSON-LD | Missing rich markup on money pages | Lost rich results; weaker entity | Emit per-page `Service`+`Offer` (price=visible), `FAQPage`(data.faqs), `BreadcrumbList` | add `<Script type="application/ld+json">` building from props; include `@id:"https://…#organization"` | data refactor | Rich Results Test per page | Service+FAQ rich results where eligible |
| ID-05 | P1 | `/services` | `app/services/page.tsx:15–288` | Hardcoded duplicate catalogue | Drift vs `serviceData.ts` | Duplicate content + maintenance | Render from `servicePages`; keep `serviceSlugs` derived map | replace `services` array w/ `servicePages` mapped by category | — | Diff rendered titles vs data | Single source |
| ID-06 | P1 | blogs | `data/blogData.ts` + `app/blogs/[slug]/page.tsx:74–81, generateMetadata` | `dateModified = datePublished`; visible date only | No freshness signal | Ranking for evergreen queries | Add `updatedAt` field; use `generateMetadata.alternates` + schema `dateModified`; show "Updated <date>" chip | extend `Blog` type; `formatDate(blog.updatedAt ?? createdAt)` | data migration | grep no `dateModified===` duplicates | Freshness signals |
| ID-07 | P1 | blogs copy | `data/blogData.ts` mid-CTA blocks | up to 3 identical booking mid-CTAs per post | Internal anchor repetition | Dilutes relevance; poor UX | Keep one `blog-mid-cta`; others → inline `<a>` text | edit content strings | — | Preview | Cleaner articles |
| ID-08 | P1 | mobile service CTA | `components/service-detail-page.tsx:357–369` | Sticky CTA commented out | Lost conversion surface on mobile | Friction | Re-enable single sticky bar (Call + WhatsApp/Book) with `z-50` | restore block, use `TrackLink` | — | Real-device click test | Higher tap-through |
| ID-09 | P1 | bridal evidence | `app/services/bridal-makeup-chennai/page.tsx` + `/gallery` | No tier pricing, no portfolio link under CTA | Can't compete with Veera/RS | Bridal is flagship | Add package tier table (Classic 15k/HD 18k/Glossy 22k/Airbrush 30k) linking to `/menu`; add "See real brides → /gallery" CTA | copy + `Link` | menu data consistency | Render check | Deeper engagement |
| ID-10 | P1 | broken image | `components/services-showcase.tsx:43` | references missing root .jpg | homepage card image 404 | Visual + crawl noise | point to existing `…-beauty-portra.webp` or `/blogs/…jpg` | `image: "/elegant-bride-makeup-and-hairstyling-beauty-portra.webp"` | — | curl 200 | Image loads |
| ID-11 | P1 | NAP placeId | `data/businessInfo.ts:54` vs `.env` | two different place IDs | Embed/reviews may hit wrong place | Local consistency | Resolve correct ID once (V1); single-source it; derive env from same constant in a config | `export const placeId = '…'` then map embed + API use it | Google/GBP access | Verify embed pin = GBP pin | One entity |
| ID-12 | P1 | about NAP | `app/about/page.tsx:692` | hardcoded phone string | bypasses single source | NAP drift | use `businessInfo.phone.primaryHref`/`display` | replace literal | — | grep no phone literals | NAP single source |
| ID-13 | P2 | header preloads | `components/header.tsx:78,81,87` | micro-icons `priority` | unnecessary preload bytes | LCP/bandwidth | remove `priority` prop | delete `priority` | — | Lighthouse mobile LCP | faster LCP |
| ID-14 | P2 | footer links | `components/footer.tsx:153–169` | no Blogs/Kalpana links | discovery gap | crawl/cross-links | add `Blogs`, `Kalpana` entries | add `<li>` items | — | crawl sim | wider mesh |
| ID-15 | P2 | conversion event | `components/track-link.tsx`/GTM | generic `booking_click` | can't separate bridal trials | analytics clarity | add `booking_trial` kind on bridal/book CTA | extend `kind` union | GTM config | Tag Assistant | Analysis-ready |
| ID-16 | P2 | menu schema name | `app/menu/page.tsx:329–348` | schema name says "Pricing…" while URL /menu | inconsistency | structured clarity | align name/url to /menu | edit JSON | — | schema test | consistent |
| ID-17 | P2 | hero H1 wording | `components/hero-slider.tsx:89–94` | long H1 w/ city repeat | none critical; branding split vs live | keep–diff w/ live | keep; ensure deploy ships new H1 | n/a | deploy | URL inspection | aligned |
| ID-18 | P2 | service page breadcrumb | `components/service-detail-page.tsx:79–87` | breadcrumb commented out | no user breadcrumb on money pages | UX + schema support | uncomment + wrap `<nav aria-label>` + emit BreadcrumbList | use existing `nav` + JSON | — | render check | clearer nav |
| ID-19 | P3 | PWA manifest | `public/favicon/site.webmanifest` | default "MyWebSite" | un-branded identity | minor | set name/short_name/theme to brand | edit JSON | — | manifest parse | branded |

From audit §5/§6 further backlog: `ID-20 (P2) add `areasWeServe` to best-salon page + service pages with genuine neighbourhoods only; ID-21 (P3) trim blog `keywords` arrays; ID-22 (P3) remove stale unused public assets; ID-23 (P3) refer other English pages for Arabic/UTF: none; ID-24 (VERIFY) wire `/api/reviews` env on host; ID-25 (VERIFY) confirm GTM event forwarding in GA4.

## 18. 30 / 60 / 90-Day Execution Plan

**Days 0–30 (ship correctness — P0/P1)**
1. Commit working tree; set up pipeline + smoke checks (ID-01, ID-03). Deploy.
2. Fix testimonials wiring (ID-02); fix placeId (ID-11); fix NAP literals (ID-12).
3. Service page schema (ID-04); hub single-source (ID-05); breadcrumbs (ID-18); broken image (ID-10).
4. `/menu` redirect + footer links (ID-14).
5. Baseline Lighthouse/CrUX/GSC; capture field data (V4, V6).

**Days 31–60 (evidence & depth)**
6. Bridal tier pricing + gallery linking (ID-09); mobile sticky CTA (ID-08).
7. Review program launch (GBP §12 items 8–11); respond to all reviews; add GBP photos (50+).
8. Publish 2 cluster articles w/ first-hand value (e.g. balayage vs highlights; bridal trial guide) w/ updated dates (ID-06, ID-07).
9. Citations + Justdial/LBB/magicpin claim/optimise (V10).
10. GSC: monitor `/menu` traffic; fix any 404s/canonical issues.

**Days 61–90 (growth & measurement)**
11. LCP/CLS optimisations (ID-13 + hero sizes); benchmark before/after.
12. Conversion event refinement (ID-15) + GTM/GA4 confirm (V2/V11).
13. Local backlinks via 2–3 listicles/partners.
14. Review velocity sustain (weekly ask); monthly GBP posts.
15. Re-run audit checklists; compile GSC + GA4 + GBP dashboards; decide cluster #2.

## 19. Regression Test Plan
Extend `npm run check:seo` (and a new CI job against `.next`):
- missing/duplicate/high-length `title` and `description` on all routes (walk `app`, run against built HTML).
- multiple H1 per page (parity: exactly one visible H1 elsewhere on Home/About; blog/service one).
- missing canonical (all indexable routes).
- accidental `noindex` (only 404 should carry it).
- sitemap URLs all return 200 & unique (validate against `/menu` and service slugs).
- broken internal links (crawl `<a href>` against known routes → use `Link` checks + a simple scraper in CI).
- missing `alt` on meaningful images.
- NAP single-source grep (banned literals from `scripts/check-seo.mjs` extended: all ph/address literals).
- schema shape guard: every service page emits `Service` + `FAQPage`; blog emits `BlogPosting`, `dateModified ≥ datePublished`.
- banned markup in built chunks (ID-03).
- `/api/reviews` smoke (200 with env vars; 500 handled gracefully).

## 20. Final Acceptance Checklist
- [ ] `npm run check:seo` + new `check:built` pass in CI.
- [ ] Deployed site renders working-tree HEAD (no `/pricing`, no meta keywords, no AdSense preload, `BeautySalon` schema, current NAP, `geo 13.064977,80.172559`).
- [ ] All 36 sitemap URLs return 200; canonicals self-referential; 404 sends 404 + noindex.
- [ ] Testimonials show live (or clearly-labelled) reviews; no implied-fake "Google Review".
- [ ] GBP: verified placeId, correct category/attributes/NAP/hours/service list; ≥50 original photos; weekly posts started.
- [ ] Review responses ≥ past 30 days all answered.
- [ ] Service pages: Service+FAQ+Breadcrumb schema; price ladder links to `/menu`; gallery CTA present.
- [ ] Mobile service pages have sticky Call/WhatsApp/Book CTA.
- [ ] Lighthouse mobile: LCP < 2.5s, CLS < 0.1, INP < 200ms (before/after recorded).
- [ ] GA4 events: `phone_click`, `whatsapp_click`, `booking_click`, `booking_trial`, `map_click`, `booking_form_submit` verified in GA4 DebugView.
- [ ] GSC: sitemap submitted; coverage for `/menu` and service pages healthy; no "soft 404" spike; field data reviewed.
- [ ] Client sign-off on all metrics/claims (award, 4.9 rating, 1000+ clients) — evidence verified or copy softened.