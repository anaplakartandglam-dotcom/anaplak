# Agent Instructions — Anaplak

## SEO work (always follow)

Before starting any SEO, content, metadata, or ranking task, read `docs/seo/SEO-TRACKER.md` in full.

- Treat that file as the single source of truth over every other file in `docs/`.
- Update the tracker in the same session as the work (status, date, evidence).
- Never mark a task Done without verification (build, typecheck, live check, or GSC evidence).
- Respect the Decision Log, the Do-Not-Do list, and the page spec in the tracker.
- Never delete tracker rows; append to the Change Log.

## Content writing (blogs, service pages, sales copy)

Load and follow these skills before writing: `copywriting`, `content-strategy`, `seo-aeo-best-practices`, and `ai-seo`.

Non-negotiables:

- **Original only.** Never copy or lightly paraphrase a competitor. Never publish AI output as-is.
- **Human-written quality.** Specific details, varied sentence length, contractions, a clear point of view. Read it aloud before publishing.
- **Founder voice.** Blog posts are written in the founder's first person ("I", "my chair", "I've seen"). Do not write "I'm Kalpana" inside the body; the byline carries the name.
- **Titles = search intent + hook.** Start with the phrase people actually type into Google (for example "bridal makeup trial", "keratin vs smoothening", "saree draping"), then add a specific hook after a colon. Keep titles 50 to 65 characters. No clickbait the article cannot deliver.
- **No AI tells.** No "it's not X, it's Y", no negation lists, no trailing pile-ons, no "The result?" reveals, no stock openers ("In today's fast-paced world", "Whether you're X or Y"), and no em dashes in headlines or short copy.
- **Supportable claims only.** Never invent reviews, client stories, statistics, awards, certifications, or results.
- **Prices from the menu only.** Every price must match `app/menu/page.tsx`, the live salon menu. Never take prices from Google, competitors or any other website. Never guess. If a service has no menu price, leave the price out or ask.
- **Hashtags must be relevant.** Include both core service keywords (`#bridal`, `#bridal makeup`, `#hair care`, `#hair styling`, `#skincare`, `#facial`, `#makeup`) and specific topic keywords (`#South Indian bridal makeup`, `#jadai hairstyle`, `#saree draping`). Mix broad and specific tags. Never add unrelated or misleading tags.
- **No detector promises.** Never claim content will pass AI detectors. Write to this standard instead, then run the self-check.
- **Humanizer pass.** Remove filler openers, forced triads, promotional tails and formulaic rhythm. Keep facts, prices, links and the author's meaning. `npm run check:ai` must report 0 posts below 85.

Before publishing, run the AI-tell self-check (banned patterns, sentences over 20 words, read aloud) and the build/SEO commands below. `npm run check:ai` must report 0 posts below 85.

Reference: the Content Standards section in `docs/seo/SEO-TRACKER.md`.

## Commands

- Build: `npm run build`
- Typecheck: `npx tsc --noEmit`
- SEO check: `npm run check:seo`
- AI-content check: `npm run check:ai`
- Dev: `npm run dev`
