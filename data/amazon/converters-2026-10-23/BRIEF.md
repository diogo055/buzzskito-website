# Amazon converter upgrades — Wave A brief (owner, Oct 23, 2026: "push the top pages up as much as you can ... triple these clicks")

## Why
These pages already convert: 113–583 Canadian Amazon clicks per 1,000 Canadian views (GA4, 90 days), against about 18
for information pages. They average Google positions 6–9, where fewer than 1 in 100 searchers click.

Goal: move each page into the top 3 for ITS OWN searches. Amazon earnings follow visitors, because about 99% of
earnings come from whatever else ends up in the cart within 24 hours of a click. The button and the product matter
little; the visit matters.

## Read first
- `data/god-build/RETROFIT_BRIEF.md`: the TSX parts.
- `data/amazon/reverse-engineering-2026-10-20.md`: readers click near the top, and page type decides click rate.
- Your pages' real Google searches: `C:\Users\buzzs\AppData\Local\Temp\claude\C--Users-buzzs-buzzskito-website\346ad20e-f0cd-4fd1-a3b4-396de78eb0ad\scratchpad\converters\queries.md`.

## For each page (`app/blog/<slug>/page.tsx`)

### 1. Beat the top 3
WebSearch the page's main search the way a Canadian would type it. WebFetch the top 3 organic results that are not
ours. Write what they do better and what they lack to `data/god-build/research/top3/<slug>.md`. Note any Google
shopping grid, Reddit or AI Overview that sits above them.

### 2. Upgrade the page

**First screen** (on a phone, before any long intro):
- answer the search plainly;
- name the pick and who it is for in one or two sentences;
- the existing TopBox and first Amazon element stay exactly as they are.

**Add what the top 3 lack**, usually:
- a sourced comparison table: type, how it works, best for, limits. Use manufacturer label or spec pages, and PMRA
  (Health Canada pest control product registration) for any pesticide.
- a "which one for your situation" decision section;
- real photos of the pest or the problem from `data/god-build/photos.json`, only where the page already uses the
  `<Photo>` pattern (PD, CC0, CC BY or CC BY-SA only);
- 2–4 new FAQs in the searchers' own words, taken from queries.md.

**Title, description and wording:**
- `META_TITLE` (or the title in `buildMetadata`) is 48 characters or fewer. It answers the main search and keeps
  "Canada" in the title where it is there now.
- Rewrite the description to answer the search.
- Keep Canadian spelling.

**Dates:** set `UPDATED` to 2026-10-23, the true change date. Do NOT run `scripts/retrofit-date.mjs`: other agents
are editing at the same time, and the orchestrator runs it for every page at the end.

### 3. Stay in your lane
Each page keeps its own main search from queries.md. Never retitle a page toward a sibling page's head term. Note in
the research file which sibling pages share searches.

## Non-negotiable rules (cost real money if broken)

- **Affiliate integrity.**
  - Before and after, count `<BuyLink`, `<AwardRow`, `<AwardCard`, `<StickyBuyBar`, `<AmazonLink`, `<TopPick`,
    `<TopBox`, `asin=`, `search=` against `git show HEAD:<file>`.
  - Diff every affiliate-bearing line byte for byte. Never move, retarget, remove or ADD an affiliate element. Do not
    change any `search=`, `asin=` or `tag`.
  - If a product looks wrong, leave it and say so in your final message.
- **Content rules.**
  - No Amazon prices, star ratings, review counts or product images.
  - No "we tested" or any testing claim: this company does not test products, so methods are label and registry
    research.
  - No "safe" or "non-toxic".
  - No "Health Canada approved/registered". Use what the PMRA label database actually shows, quoted carefully.
  - Regulatory and product claims come from a primary source you opened: PMRA, the manufacturer's label, Health
    Canada, EPA.
- **Calls to action.** Keep every existing CTA, top box, disclosure line and the sticky bar untouched.
- **Editing.**
  - Insert or replace lines only. Do not restructure the file.
  - Read PDFs with WebFetch only, never in a browser.
  - No git, no builds.
  - Touch only your four pages and their research notes.
- **Final message** under 90 words. Per page:
  - the new title;
  - what you added;
  - the affiliate token check result: identical, or which line changed and why;
  - any claim you are unsure about.
