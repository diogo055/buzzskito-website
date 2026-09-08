# BuzzSkito — Affiliate Content & SEO Execution

Saved 2026-09-08. Branch: `feat/affiliate-content-sept26`.
This is the brief as issued by Diogo, stored verbatim for reference.

---

## GUARDRAILS

1. **Never modify the amazon.ca link base, tracking ID (`buzzskito200b-20`), or add any link localizer / OneLink / geo-redirect.** A previous Associates account was banned over a cross-locale setup. If a task seems to need this, stop and ask.
2. **Never touch local service pages** — GTA location pages, neighbourhood pages, quote/contact/pricing, homepage, anything with a quote form or LocalBusiness schema. Phase 0 defines the list.
3. **Branch only.** Logical commits, clean revert path confirmed before any content changes. Never push to main.
4. **No stock photography.** Where a page needs an image, flag it for Diogo.
5. **No bulk content generation.** Every new page clears the Phase 6 gate first. The site already has 275 zero-click pages.
6. **Stop and ask** on anything ambiguous. Diogo is not a developer — explain decisions in plain language.

---

## FINDINGS TO ACT ON

Pull the underlying data yourself from GSC. These are the conclusions:

**1. Query type beats title wording.** Controlling for position:

| Query type | CTR @ pos 4–7 | CTR @ pos 7–10 |
|---|---|---|
| Commercial intent | 2.58% | 1.13% |
| Other | 1.83% | 0.90% |
| Question format | 1.39% | 0.65% |

Question-format queries lose ~half their clicks to AI Overviews at identical rank. Rewriting their titles recovers nothing. Do not work on them.

**2. Big-box stocking predicts the SERP.** Products Canadian Tire / Home Depot Canada carry → they own page one, buzzskito sits at 8–10 with dead CTR (Thermacell 0.19%, Dynatrap 0.84%, Mosquito Dunks 1.22%). Products they don't carry → buzzskito ranks 2.5–5 with strong CTR (Advion cockroach gel 3.31%, permethrin pants 8.11%, flea bomb canada 4.21%). Advion is confirmed unstocked by Canadian Tire, Home Depot Canada, Costco and Rona.

**3. The funnel is already healthy.** 42% of affiliate-page visitors click to Amazon, 9.36% of those buy — top decile. CRO is not the bottleneck. Traffic composition is.

**4. Site's own CTR-by-position benchmark** — use these exact values to compute residuals:

| Pos | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|
| CTR | 5.69% | 5.40% | 5.30% | 2.74% | 2.08% | 1.45% | 1.09% | 0.83% | 0.35% |

---

## PHASE 0 — Protected pages

Output `/docs/audit/protected-pages.md` listing every URL that must not be modified. **Wait for Diogo's confirmation before proceeding.**

## PHASE 1 — Classify every page

Pull GSC directly via API (not through Ahrefs — its GSC integration returns incomplete data for this property). Last 180 days, page + query + clicks + impressions + position.

Build `/docs/audit/page-classification.csv`, one row per URL:

- `intent` — `commercial` if top queries contain a brand or best/buy/price/vs/review/where-to/canada/canadian tire/home depot/amazon; `question` if the top query opens with how/what/why/when/where/do/does/can/are/is; else `other`
- `expected_ctr` from the benchmark table, `ctr_residual` = actual − expected, `lost_clicks` = residual × impressions
- `has_affiliate_link`, `word_count`

## PHASE 2 — Tier and get approval

`/docs/audit/fix-tiers.md`:

- **Tier 1 — title/meta fix.** commercial + residual < −0.5pp + impressions > 3,000. Expect 10–25 pages, not hundreds. Known members: `/pest-control-cost-canada`, `/blog/how-long-does-mosquito-spray-last`.
- **Tier 2 — reviews retrofit.** has_affiliate_link + clicks > 100.
- **Tier 3 — internal link sources.** clicks > 200.
- **Tier 4 — AI Overview casualties.** question intent + large negative residual. **Log the total impressions parked here and take no action.**
- **Tier 5 — dead weight.** Zero clicks in 180 days. List with word count and last-modified. Recommend consolidate/redirect/noindex per page but **execute nothing.** Google applies site-wide review-quality assessment when a large share of a domain is review content — this site is at 37%, so thin pages drag the good ones down.

Report tier counts. Wait for approval.

## PHASE 3 — Tier 1 title & meta rewrites

Per page: lead the `<title>` with the exact highest-impression commercial query, front-loaded, under 60 chars, "Canada" included where the query carries it. Meta description states a concrete outcome — price range, timeframe, quantity — under 155 chars. Do not change H1, URL, body or links in this phase. Log old → new in `/docs/audit/tier1-changes.md`. One changeset so it reverts whole.

## PHASE 4 — Image audit and repair

You generated original diagrams and illustrations for many of these pages. Several are defective — skewed aspect ratios and text rendering on top of itself. Audit all of them.

1. Enumerate every generated image and inline SVG across the site (`/public`, component files, MDX/content files). Output the inventory with the page each appears on.
2. **View each image.** Do not assess from source alone — render or open it and look at it.
3. Flag these defects:
   - Text overlapping other text or graphic elements
   - Text overflowing its container or clipped at an edge
   - Stretched or skewed geometry — `width`/`height` attributes conflicting with `viewBox`, or CSS forcing a non-native aspect ratio
   - Labels too small to read at mobile width (~380px)
   - Illegible contrast, or colour that fails against the site background
   - Missing or generic `alt` text
4. Fix in place. For SVGs: correct the viewBox, give text elements adequate spacing, wrap or shorten long labels, set `preserveAspectRatio` correctly, and make sure nothing relies on a font that may not load. For raster images: regenerate at the correct aspect ratio.
5. Re-view every fixed image to confirm it actually renders correctly. Do not mark an item done from code inspection alone.
6. Log every image in `/docs/audit/image-audit.md` as OK / FIXED / NEEDS-DIOGO, with the defect described in plain language. Anything you can't fix cleanly goes in the NEEDS-DIOGO list rather than being left broken.

## PHASE 5 — Internal linking (pages/session 1.19 → 1.9)

Scroll depth is 19.74%, so footer related-content modules are never seen.

1. `<RelatedProducts>` component rendering **inline at ~40% article depth**, not the footer. Three contextual links, at least one to a Tier 2 affiliate page.
2. Pest hub structure: `/pests/ants/`, `/pests/cockroaches/`, `/pests/wasps/`, `/pests/flies/`, `/pests/mosquitoes/`, `/pests/ticks/`. Hubs link down to their cluster; cluster pages link up and laterally to 2–3 siblings.
3. Route high-traffic informational pages into commercial pages:
   - `/blog/bugs-that-look-like-ticks` (138,677 impr) → permethrin and tick products
   - `/blog/black-flies-ontario-when-they-come-out` (89,653) → repellent and fly products
   - `/blog/horse-fly-and-deer-fly-bite-treatment` (36,201) → fly control products
4. Breadcrumb schema on all blog and pest pages.
5. Max 4 internal links per 1,000 words.

## PHASE 6 — Reviews-system retrofit (Tier 2)

1. **Add multiple seller links.** Google's reviews system wants purchasing options beyond one retailer. Plain non-affiliate links to Canadian Tire / Home Depot Canada / Walmart.ca where they actually stock the item, alongside the amazon.ca affiliate link. Also honestly serves the "where to buy" intent the site currently fails.
2. **Explicit pros and cons**, plus comparison against at least one named alternative.
3. **Verify PCP registration.** Confirm and display the Canadian PMRA/PCP number for every pesticide recommended. Many US pest products — including some Advion SKUs — are not registered for legal use in Canada. Flag anything you can't confirm; Diogo holds a spray licence and cannot point Canadians at unregistered pesticides.
4. Primary CTA above the fold, outcome-specific copy ("Check Advion gel price on Amazon.ca"), not "Buy now".
5. `Product` schema where appropriate. **No `Review` schema on pages without genuine first-hand review content.**

## PHASE 7 — New content

### Gate — every proposed page passes all four

1. **Commercial intent.** Target query contains a brand, or best/buy/price/vs/review/where-to. Reject anything phrased as a question.
2. **Not big-box stocked.** Check canadiantire.ca, homedepot.ca, walmart.ca. If any carry it, reject.
3. **On amazon.ca** with a confirmed ASIN.
4. **PCP registered**, number recorded.

Log rejects with reasons in `/docs/audit/rejected-keywords.md`.

### Build priority — by measured clicks per page

| Priority | Category | Pages now | Clicks/page | CTR | Target |
|---|---|---|---|---|---|
| 1 | Ants | 5 | — | — | 20 |
| 2 | Cockroach | 6 | 87 | 2.40% | 20 |
| 3 | Wasp/hornet | 12 | 130 | 2.21% | 25 |
| 4 | Flies | 18 | 122 | 1.06% | 25 |
| 5 | Lawn/grubs | 3 | — | — | 15 |
| — | Mosquito | 313 | 32 | 1.03% | **build nothing** |

Ants first: the site already ranks position 2.51 for "advion ant gel canada" with no dedicated page, Advion has no Canadian big-box competition, and carpenter ants are a major Ontario category. Lawn/grubs peaks spring and fall, filling the traffic trough. Mosquito is saturated — 313 pages at 32 clicks each and the site's worst CTR.

### Per page

One primary commercial query plus 2–4 validated secondaries. 1,200–2,000 words, no padding. Comparison table with a CTA per row on multi-product pages. Multiple seller links and PCP numbers per Phase 6. Internal links up to hub, laterally to 2 siblings, out to 1 commercial page. Any image you create must pass the Phase 4 quality checks before it ships.

**Produce the full keyword plan and page-by-page outlines for approval before writing anything.** Deliver in batches of 5.

---

## REPORTING

End of each phase, in chat, plain language: what changed as a numbered list, files touched, commit hash and exact revert command, anything skipped and why, anything you were unsure about.

Final: `/docs/audit/execution-report.md` and `/docs/audit/diogo-todo.md` with every approval and image item needed from Diogo.

**Do not pass a phase gate without explicit approval.**

### Success signals, 60–90 days

Tier 1 CTR moving toward the benchmark curve. Commercial-intent impression share rising. Pages/session moving 1.19 → 1.9 in Clarity. Ants and cockroach clusters clearing 50 clicks/page. The reviews system refreshes on a 2–8 month cycle, so Phase 6 results will lag — don't judge that work at 30 days.
