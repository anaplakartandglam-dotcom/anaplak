# Anaplak — SEO Tracker

> **ALWAYS FOLLOW THIS FILE.**
> This is the single source of truth for all SEO work on anaplakartandglamsalon.com.
> Read it before starting. Update it before finishing. If it conflicts with any other
> file in `/docs`, this file wins. Never delete history — append to the Change Log.

Last updated: 2026-10-30
Owner: Albin
Site: https://anaplakartandglamsalon.com
Stack: Next.js App Router, Vercel

---

## 0. Legend

**Status**

| Symbol | Meaning |
|---|---|
| ✅ | Done + deployed + verified |
| 🟡 | Done locally, NOT committed/deployed |
| 🔵 | In progress |
| ⬜ | Pending — not started |
| ⛔ | Blocked — see Blocked/Why |
| ➖ | Won't do |

**Estimated effort**

| Symbol | Meaning |
|---|---|
| S | ≤ 1 hour |
| M | 2–4 hours |
| L | 1–3 days |
| XL | 1 week+ |
| — | Not applicable |

**Owner**

| Value | Meaning |
|---|---|
| Albin | Code / technical / content implementation |
| Client | Requires salon-side action or assets |
| Both | Coordination required |

---

## 1. Current snapshot

| Bucket | Count |
|---|---|
| Done & deployed | 1 |
| Done locally, awaiting deploy | 25 |
| Pending | 25+ |
| Blocked | 4 |

**Top 3 next actions**
1. Deploy the local SEO fixes (T16) and validate the 10 redirects (T17).
2. Build the perming page (C02) — next-lowest competition target.
3. Convert `/services` + `/blogs` to server components (T12) and add blog→service links (T14).

---

## 2. Target services (the ranking goal)

Goal: top 5 on Google for each in Chennai. Honest status: long-tail only in the near term.

| ID | Service | Target keyword | URL | Page state | Competition |
|---|---|---|---|---|---|
| S1 | Bridal makeup | bridal makeup chennai | /services/bridal-makeup-chennai | Exists — upgrade needed | High |
| S2 | Saree draping | saree draping chennai | → /services/saree-draping-chennai | Missing | Medium |
| S3 | Curling / perming | hair perming chennai | → /services/hair-perming-chennai | Missing | Low–Med |
| S4 | Hair extension | hair extensions chennai | /services/hair-extension-chennai | Exists — upgrade needed | Medium |
| S5 | Glutathione facial | glutathione facial chennai | → /services/glutathione-facial-chennai | Missing | Medium |
| S6 | Hydra facial | hydra facial chennai | → /services/hydra-facial-chennai | Missing | High (clinics) |
| S7 | Keratin | keratin treatment chennai | → /services/keratin-treatment-chennai | Missing | Med–High |
| S8 | Hair botox | hair botox treatment chennai | → /services/hair-botox-treatment-chennai | Missing | Low–Med |
| S9 | Nail art | nail art chennai | /services/nail-art-extension-chennai | Exists — upgrade needed | Medium |

Priority order: S8 → S3 → S2 → S5 → S7 → S9 → S4 → S6 → S1.

---

## 3. Technical SEO

| ID | Task | Status | Owner | Effort | Needs | Why pending | Evidence |
|---|---|---|---|---|---|---|---|
| T01 | Homepage title + description rewritten | 🟡 | Albin | S | Deploy | Not committed/released | app/page.tsx:11-12 |
| T02 | OG/Twitter tags synced to homepage meta | 🟡 | Albin | S | Deploy | Not committed/released | app/page.tsx:18-19, 31-32 |
| T03 | `alternateName` added to WebSite schema | 🟡 | Albin | S | Deploy | Not committed/released | components/structured-data.tsx:105 |
| T04 | Brand name normalised to "Anaplak Art & Glam" | 🟡 | Albin | S | Deploy | Not committed/released | data/businessInfo.ts:2 |
| T05 | 301 redirects for 10 stale service URLs | 🟡 | Albin | S | Deploy + GSC validate | Not committed/released | next.config.mjs:92 |
| T06 | `noindex` header on `/favicon/*` | 🟡 | Albin | S | Deploy + recrawl | Not committed/released | next.config.mjs:80 |
| T07 | Sitemap `lastModified` stabilised | 🟡 | Albin | S | Deploy | Live sitemap still shows `new Date()` | app/sitemap.ts:7 |
| T08 | `/services` + `/blogs` titles shortened | 🟡 | Albin | S | Deploy | Not committed/released | app/services/layout.tsx, app/blogs/layout.tsx |
| T09 | Audit title/description length on all pages | 🟡 | Albin | M | Deploy | Not committed/released | Fixed 40 over-length titles/descriptions; audit now reports 0 over limit |
| T10 | Fix `testimonials: []` hiding review section | 🟡 | Albin | S | Deploy | Not committed/released | Nullish check fixed (service-detail-page.tsx:70); fashion-editorial given 2 real reviews |
| T11 | `AggregateRating` schema from real Google reviews | ⛔ | Albin | M | Working Places API + verified totals | `/api/reviews` returns `REQUEST_DENIED`; no verified rating/count to use | components/structured-data.tsx |
| T12 | Convert `/services` + `/blogs` to server components | ⬜ | Albin | M | Refactor | Not started | "use client" in both page.tsx |
| T13 | Add `parent`/`isSubpage`/`updatedAt` + parent breadcrumbs | 🟡 | Albin | M | Deploy | Not committed/released | Added to ServicePageData; dynamic breadcrumbs + schema; subpages hidden from /services grid + footer |
| T14 | Blog posts link to service pages (not booking URL) | ⬜ | Albin | M | Content pass | Not started | data/blogData.ts |
| T15 | Performance / Core Web Vitals pass | ⬜ | Albin | L | Lighthouse baseline | Not started | header/footer/hero are client components |
| T16 | Deploy all local fixes | ⬜ | Albin | S | Deploy access | Not released | — |
| T17 | Verify redirects live (curl 301 check) | ⬜ | Albin | S | T16 | Depends on deploy | — |
| T18 | Resubmit sitemap in GSC | ⬜ | Both | S | T16 + GSC access | Depends on deploy | — |
| T19 | Request indexing for priority URLs | ⬜ | Both | S | T16 + GSC access | Depends on deploy | — |
| T20 | Organise + keyword-rename public images | 🟡 | Albin | M | Deploy | Not committed/released | 110 assets moved to `/images/{brand,hero,about,team,services,gallery,blog,ui}`; 111 refs verified; build + typecheck passed |
| T21 | Remove redundant images | 🟡 | Albin | S | Deploy | Not committed/released | Deleted 15 duplicates + `_archive/public/unused`; kept `raw-uploads/` and `backup-images/`; public 48 MB → 46 MB; build + typecheck + check:seo passed |
| T22 | Remove inaccurate gallery captions | 🟡 | Albin | S | Deploy | Not committed/released | Removed per-image titles/categories and bridal-only alt text; lightbox shows counter only; gallery metadata broadened to salon portfolio |
| T23 | Add AI summary bar to blog articles | 🟡 | Albin | M | Deploy | Not committed/released | ChatGPT, Perplexity, Claude, Google AI, Grok links with SVGs; prompt references each article URL |
| T24 | Add TL;DR section to all blogs | 🟡 | Albin | M | Deploy | Not committed/released | `tldr` added to all 19 posts; rendered after hero image |
| T25 | Add Google Preferred Source button | 🟡 | Albin | S | Deploy | Not committed/released | Official publisher.js + dark-theme button on every blog and in footer |
| T26 | Link related blog guides + hashtags on service pages | 🟡 | Albin | M | Deploy | Not committed/released | 11 service pages show 2–3 relevant blog cards; broad service keywords and specific keywords both rendered as hashtags |
| T27 | Add consultation CTA to every blog TL;DR | 🟡 | Albin | S | Deploy | Not committed/released | “Don't have time to read?” + Get a consultation button linked to booking; rendered on all 19 posts |
| T28 | Add blog pagination (9/page) and sort control | 🟡 | Albin | M | Deploy | Not committed/released | Newest/oldest/A–Z/Z–A sort; numbered pagination with counts; resets on filter/search; 9 cards per page |
| T29 | SEO-name the five bridal blog covers | 🟡 | Albin | S | Deploy | Not committed/released | User-supplied images renamed to `*-2026.webp` to bust the Next image cache; fixed missing “s” in the South Indian filename; all five are distinct real images |

---

## 4. Content / new pages

| ID | Task | Status | Owner | Effort | Needs | Why pending | Notes |
|---|---|---|---|---|---|---|---|
| C01 | Build S8 hair botox page | 🟡 | Albin | L | Deploy | Not committed/released | `/services/hair-botox-treatment-chennai` built with 6 FAQs, 4 PAA questions, comparison table, aftercare, 2 real reviews; in sitemap; llms.txt updated |
| C02 | Build S3 perming page | ⬜ | Albin | L | T13 | Not started | Low competition |
| C03 | Build S2 saree draping page | ⬜ | Albin | L | T13 | Not started | — |
| C04 | Build S5 glutathione facial page | ⬜ | Albin | L | T13 | Not started | — |
| C05 | Build S7 keratin page | ⬜ | Albin | L | T13 | Not started | Blog already exists |
| C06 | Build S6 hydra facial page | ⬜ | Albin | L | T13 | Not started | Long-tail only |
| C07 | Upgrade S1 bridal page | ⬜ | Albin | L | Portfolio, style spokes | Not started | — |
| C08 | Upgrade S4 hair extension page | ⬜ | Albin | M | T10 | Not started | — |
| C09 | Upgrade S9 nail art page | ⬜ | Albin | M | Photos | Not started | — |
| C10 | Real before/after photos per service | ⛔ | Client | — | Phone shoot or budget | No budget; decided stock interim | Blocks full E-E-A-T |
| C11 | Named stylist E-E-A-T box + credentials | ⬜ | Both | S | Credentials from client | Not started | — |
| C12 | Blog cluster plan (1 post/cluster/month) | ⬜ | Albin | M | — | Not started | — |
| C13 | 40–60 word answer block on every service page | ⬜ | Albin | M | — | Not started | AI/snippet extraction |
| C14 | Visible "Last updated" on service pages | 🟡 | Albin | S | Deploy | Not committed/released | `updatedAt` rendered in service hero; currently set on hair botox |
| C15 | Publish 5 bridal makeup blog posts | 🟡 | Albin | L | Deploy | Not committed/released | Trial guide, HD vs airbrush, oily skin, dusky skin tones, South Indian bridal look; rewritten in human first-person voice; branded placeholder cover; built + in sitemap |
| C16 | Enforce content standards for all future writing | 🟡 | Albin | S | Deploy | Not committed/released | Rules added to `AGENTS.md` + this file; first-person founder voice, no AI tells, search-intent titles with hooks, broad + specific hashtags |
| C17 | Audit every price against the live menu | 🟡 | Albin | M | Deploy | Not committed/released | Fixed hair botox ₹7,000→₹8,000, keratin floor ₹3,000→₹3,500, hair-treatment cards, package prices and bridal FAQ; scan now reports 0 mismatches |
| C18 | AI-content audit of all blog posts | 🟡 | Albin | M | Deploy | Not committed/released | `npm run check:ai` scans content + descriptions + TL;DRs; all 19 posts score 100 |
| C19 | Humanizer pass on all 19 blogs | 🟡 | Albin | L | Deploy | Not committed/released | Full rewrite in first-person founder voice after loading humanizer-zh; removed filler intros, promo tails, forced lists and formulaic CTAs; thin posts expanded with factual sections; facts/prices/links preserved |

Page spec (must all be true or the page does not ship):
exact-match H1 · answer block · price table from /menu · who it's for/not for ·
real process + timings · aftercare · 8–10 FAQs + FAQPage schema · trust box ·
3–5 reviews · 1,200–2,000 words · links to parent hub + booking.

### Content Standards (apply to every blog, service page and sales page)

1. **Load the skills first:** `copywriting`, `content-strategy`, `seo-aeo-best-practices`, `ai-seo`.
2. **Original only.** No copying or light paraphrasing of competitors. No AI output published as-is.
3. **Human-written.** Specific details, uneven sentence rhythm, contractions, a clear point of view. Read every draft aloud.
4. **Founder voice.** Blog posts use first person ("I", "my chair", "I've seen"). Never write "I'm Kalpana" inside the body; the byline carries the name.
5. **No AI tells.** No "it's not X, it's Y", negation lists, trailing pile-ons, "The result?" reveals, stock openers, or em dashes in headlines and short copy.
6. **Supportable claims only.** No invented reviews, client stories, statistics, awards or certifications.
7. **Relevant hashtags.** Include core service keywords (`#bridal`, `#bridal makeup`, `#hair care`, `#hair styling`, `#skincare`, `#facial`, `#makeup`) alongside specific topic keywords (`#South Indian bridal makeup`, `#jadai hairstyle`, `#saree draping`). Mix broad and specific tags; never add unrelated tags.
8. **No detector promises.** Never claim text will pass AI detectors. Write to this standard, run the self-check, then publish.
9. **Titles = search intent + hook.** Lead with the exact phrase people search, then add a specific hook after a colon. Keep 50 to 65 characters. No clickbait the article cannot deliver.
10. **Prices from the menu only.** Every price must match `app/menu/page.tsx`. Never take prices from Google, competitors or other websites, and never guess. If a service has no menu price, omit it or ask.

---

## 5. Local SEO (highest leverage, non-code)

| ID | Task | Status | Owner | Effort | Needs | Why pending |
|---|---|---|---|---|---|---|
| L01 | Confirm GBP ownership/access | ⬜ | Client | S | Client access | Not provided yet |
| L02 | GBP categories + all services with prices | ⬜ | Client | M | L01 | — |
| L03 | GBP photos — 10+/week | ⛔ | Client | — | Photos | No budget |
| L04 | Review engine — 15–20/month, reply to all | ⬜ | Both | M | Process | Not started |
| L05 | Free citations: Justdial, Sulekha, Bing Places, Apple Business Connect | ⬜ | Client | M | NAP | Not started |
| L06 | Free vendor profiles: WedMeGood, WeddingBazaar, ShaadiSaga | ⬜ | Client | M | Business docs | Not started |
| L07 | NAP consistency audit | ⬜ | Both | S | — | Not started |
| L08 | Weekly Google Posts | ⬜ | Client | S | L01 | — |

---

## 6. Authority / links

| ID | Task | Status | Owner | Effort | Needs | Why pending |
|---|---|---|---|---|---|---|
| A01 | Partner links (photographers, boutiques, venues) | ⬜ | Both | L | Outreach list | Not started |
| A02 | 1 short before/after reel per service (YouTube) | ⛔ | Client | — | Photos/video | No budget |
| A03 | Press / paid listings | ⛔ | Client | — | Budget | None available |
| A04 | Instagram reels per service | ⬜ | Client | M | Content | Not started |
| A05 | Stats/data page for citations | ⬜ | Albin | M | Research | Not started |

---

## 7. AI search (AEO)

| ID | Task | Status | Owner | Effort | Needs | Why pending |
|---|---|---|---|---|---|---|
| AI01 | `llms.txt` published | ✅ | Albin | — | — | Verified in public/llms.txt |
| AI02 | Add S2–S8 to llms.txt after pages ship | ⬜ | Albin | S | C01–C06 | Pages don't exist |
| AI03 | `/pricing.md` machine-readable price list | ⬜ | Albin | S | — | Not started |
| AI04 | Manual AI visibility baseline (ChatGPT/Perplexity/Gemini) | ⬜ | Both | S | — | Not started |

---

## 8. Measurement

| ID | Task | Status | Owner | Effort | Needs | Why pending |
|---|---|---|---|---|---|---|
| M01 | GSC baseline export | ⬜ | Both | S | GSC access | Not started |
| M02 | Rank tracker: 9 head + 30 long-tail | ⬜ | Albin | M | — | Not started |
| M03 | Monthly review-count delta | ⬜ | Client | S | L04 | — |
| M04 | CWV monitoring (GSC + Lighthouse) | ⬜ | Albin | S | T15 | — |
| M05 | Monthly indexation review | ⬜ | Both | S | — | — |

---

## 9. Indexation log (from GSC)

| ID | URL / group | Status | Owner | Effort | Action | Why pending |
|---|---|---|---|---|---|---|
| I01 | 10 old `/services/*` URLs (404) | 🔵 | Albin | S | 301s added (T05) | Awaiting deploy |
| I02 | `/services` — discovered, not indexed | ⬜ | Both | S | Request indexing after deploy | Crawl budget/authority |
| I03 | `/services/fashion-editorial-makeup-chennai` — discovered | ⬜ | Both | S | Request indexing; add content | Thin/authority |
| I04 | `/blogs` — crawled, not indexed | ⬜ | Albin | M | Differentiate + internal links | Quality signal |
| I05 | `/services/hair-extension-chennai` — crawled | ⬜ | Albin | M | Fix T10 + upgrade C08 | Quality signal |
| I06 | 2 blog posts — crawled | ⬜ | Albin | M | Interlink + refresh | Quality signal |
| I07 | `/favicon/favicon.ico`, `/favicon/site.webmanifest` | 🔵 | Albin | S | noindex header (T06) | Awaiting deploy |

---

## 10. Decision log

| ID | Date | Decision | Reason |
|---|---|---|---|
| D01 | 2026-10-29 | "Botox" = hair botox, not injectable | Menu item is a hair treatment; avoids medical/regulatory risk |
| D02 | 2026-10-29 | Stock images interim until real photos exist | No budget; documented as a quality cap |
| D03 | 2026-10-29 | No paid SEO/ads budget | Client constraint |
| D04 | 2026-10-29 | Flat URLs `/services/{slug}-chennai` | Matches existing pattern; reuses data/sitemap/footer automatically |
| D05 | 2026-10-29 | No area pages until unique content per area exists | Avoid doorway pages |
| D06 | 2026-10-29 | Images organised under `/images/{brand,hero,about,team,services,gallery,blog,ui}` | Keyword-rich filenames; 1:1 placement preserved. Unused assets moved to `_archive/public` (outside deploy) |
| D07 | 2026-10-29 | Deleted redundant images; kept only `_archive/public/raw-uploads` + `backup-images` | Client requested cleanup; originals retained, duplicate stock removed |
| D08 | 2026-10-30 | `app/menu/page.tsx` is the only pricing source | Menu confirmed correct by client; no external, competitor or guessed prices |

---

## 11. Do not do

- Do not present stock images as client work or "our portfolio".
- Do not create near-duplicate area or service pages to chase keywords.
- Do not add `AggregateRating` from invented reviews — real Google reviews only.
- Do not mark a task ✅ without verification evidence.
- Do not target injectable botox / medical claims.
- Do not mass-generate AI content for the new pages.

---

## 12. Update protocol

1. Read this file before any SEO task.
2. Pick task IDs; change status to 🔵 when starting.
3. On completion, set ✅/🟡 and add the date + evidence (file:line, URL, GSC screenshot name, curl output).
4. Add a row to the Change Log for every status change.
5. If blocked, set ⛔ and write the exact unblock condition.
6. Never delete rows.

### Cadence
- Daily: deploy + verify.
- Weekly: GBP post, reviews, citations, one content task.
- Monthly: indexation review, rank check, CWV, AI visibility.

---

## 13. Related docs (reference only — this file wins)

- docs/ANAPLAK_SEO_AUDIT_REPORT.md
- docs/SEO_IMPLEMENTATION_SUMMARY.md
- docs/COMPREHENSIVE_1500_KEYWORDS.md
- docs/PAGE_METADATA_OPTIMIZATION.md
- docs/seo-audit-2026/ , docs/seo-implementation/

---

## 14. Change log

| Date | Task | From → To | Note |
|---|---|---|---|
| 2026-10-29 | — | — | Tracker created |
| 2026-10-29 | T01–T08 | ⬜ → 🟡 | Implemented locally in earlier session; build + typecheck passed; not deployed |
| 2026-10-29 | T20 | ⬜ → 🟡 | 110 images moved/renamed into keyword folders; 111 references verified; build, typecheck, check:seo passed; not deployed |
| 2026-10-29 | T21 | ⬜ → 🟡 | 15 redundant images deleted; `_archive/public/unused` removed; raw-uploads + backup-images kept; build, typecheck, check:seo passed |
| 2026-10-29 | T09 | ⬜ → 🟡 | 40 over-length titles/descriptions corrected across service pages + layouts; audit returns 0 |
| 2026-10-29 | T10 | ⬜ → 🟡 | Empty-array fallback fixed; review section restored on hair-extension, hair-colouring, fashion-editorial |
| 2026-10-29 | T13 | ⬜ → 🟡 | parent/isSubpage/updatedAt added; parent-aware breadcrumbs + schema; subpages filtered from hub grid and footer |
| 2026-10-29 | C01 | ⬜ → 🟡 | Hair botox page added; build shows the new static route; llms.txt updated |
| 2026-10-29 | T11 | ⬜ → ⛔ | Blocked: live `/api/reviews` returns `REQUEST_DENIED`; cannot emit verified AggregateRating |
| 2026-10-29 | C15 | ⬜ → 🟡 | 5 bridal blog posts added, built and sitemapped; llms.txt updated |
| 2026-10-29 | C14 | ⬜ → 🟡 | `updatedAt` support added to service pages; set on hair botox |
| 2026-10-29 | T22 | ⬜ → 🟡 | Gallery image captions/categories removed; neutral alt text; metadata broadened |
| 2026-10-29 | C15 | update | 5 bridal blogs switched to branded 1200×630 placeholder cover; 5 unused covers removed |
| 2026-10-29 | T23–T25 | ⬜ → 🟡 | AI summary bar, TL;DR for all 19 posts, and Google Preferred Source button added; build verified |
| 2026-10-29 | T26 | ⬜ → 🟡 | Related Guides + hashtags added to 11 service pages; internal links to matching blog posts; build + check:seo passed |
| 2026-10-29 | T26 | update | Hashtags now use service/blog keywords; generic tags (bridal, hair care, hair styling, facial, skincare) filtered out |
| 2026-10-29 | C15 | update | Last 5 bridal blogs rewritten in first person; self-name mentions removed; build + check:seo passed |
| 2026-10-30 | C16 | ⬜ → 🟡 | Content standards added to `AGENTS.md` and tracker; skills, originality, human voice, AI-tell bans, hashtag rules |
| 2026-10-30 | C15 | update | 5 bridal blogs humanised: founder first person, AI tells removed, specific hashtags retained; build + check:seo passed |
| 2026-10-30 | T26/C16 | update | Hashtag rules corrected: broad keywords (#bridal, #hair care, #skincare) and specific keywords both included; generic blocklist removed |
| 2026-10-30 | C16 | update | Title rule added (search intent + hook, 50–65 chars); 7 blog titles rewritten; brand suffix removed from blog metadata |
| 2026-10-30 | C16 | update | Bridal service copy aligned: saree draping ₹2,000 add-on + pre-pleating FAQ; conflicting "included" wording removed |
| 2026-10-30 | C17 | ⬜ → 🟡 | Full price audit vs menu: hair botox, keratin floor, hair-treatment cards, packages and bridal FAQ corrected; 0 mismatches remain |
| 2026-10-30 | C18 | ⬜ → 🟡 | `check:ai` added; 19 blogs cleaned of banned phrases, stock openers and 157 em dashes; all score 100 |
| 2026-10-30 | C19 | ⬜ → 🟡 | Humanizer-zh skill loaded; all 19 blogs rewritten in first-person voice with filler, promo tails and formulaic structure removed; build + checks pass |
| 2026-10-30 | T27 | ⬜ → 🟡 | Consultation CTA added inside every blog TL;DR, linked to the booking page |
| 2026-10-30 | T28 | ⬜ → 🟡 | Blogs page paginated at 9 per page with numbered controls and newest/oldest/A–Z/Z–A sort |
| 2026-10-30 | T29 | ⬜ → 🟡 | Five bridal blog covers renamed to keyword filenames; placeholder removed |
| 2026-10-30 | T29 | fix | Three covers had not been overwritten and were showing old gallery photos; all five now use the same 1200×630 branded placeholder |
| 2026-10-30 | T29 | update | User replaced all five covers; renamed to `*-2026.webp` to bust the image cache, fixed the South Indian filename typo, cleared `.next/cache/images`, rebuilt |
| 2026-10-30 | C15 | update | Dates set in order: trial 26 Oct, HD vs airbrush 27, oily skin 28, dusky skin 29, South Indian 30 |
