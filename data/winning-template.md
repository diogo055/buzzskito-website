# BuzzSkito Winning-Page Template

Synthesized from six #1-ranking pages (all in `app/blog/*/page.tsx`):

| Page | Type | Rendered words | FAQ count | Amazon links | First-link depth |
|---|---|---|---|---|---|
| mosquito-dunks-canada-guide | Commercial buy-guide | 1,149 | 13 (schema-only) | 13 | ~2% (Quick Answer) |
| mosquito-bits-canada-vs-dunks | Commercial comparison | 1,495 | 13 (schema-only) | 13 | ~2% (Quick Answer) |
| best-fruit-fly-trap-canada | Commercial roundup | 4,435 | 11 (visible + schema) | 23 | ~2-3% (Quick Answer) |
| tick-vs-bed-bug | Informational ID/vs | 1,200 | 7 (schema-only) | 5 | ~35-38% content depth |
| bed-bugs-on-the-ttc-toronto | Informational deep-dive | 4,278 | 10 (visible + schema) | 13 | ~45% (AwardRow) |
| are-ticks-dangerous-ontario | Informational health | 2,421 | 10 (visible + schema) | ~3 | 57% word depth |

Two archetypes emerge: **COMMERCIAL** (dunks, bits, fruit-fly — shopping intent, monetize immediately) and **INFORMATIONAL** (tick-vs-bed-bug, TTC, ticks-dangerous — question/anxiety intent, trust first, monetize late). Everything below is tagged accordingly.

---

## 1. THE COMMON SKELETON

All six pages share this exact rendered order:

1. **Gradient hero band** (pure CSS, no image): visible breadcrumb nav (Home > Blog > page, mirroring BreadcrumbList schema) + single H1 + one-line dek + `FreshnessStamp` with a REAL `dateModified`.
2. **`AffiliateDisclosure`** — always rendered before the first affiliate anchor, no exceptions (L111 dunks, L107 bits, L104 fruit-fly, L102 TTC; on informational pages it moves down to sit directly above the first link instead, e.g. L229 ticks-dangerous, L146 tick-vs-bed-bug).
3. **`StickyBuyBar`** — present on all six, one product, carries its own travelling disclosure line.
4. **Quick Answer capsule as the FIRST content element** — the signature move, identical on all six:
   - Emerald box, uppercase "Quick Answer" eyebrow.
   - **Bolded first-sentence verdict** that answers the query outright ("Count the legs: ticks have 8...").
   - ~96-140 word paragraph. On commercial pages it contains an inline `AmazonLink`; on informational pages it contains a soft service plug ("from $99") instead.
   - **Exactly 6 fact bullets, every one carrying a number** (coverage sq ft, days, prices, case counts, PCP registration numbers).
   - Attribution line: "— BuzzSkito, GTA mosquito & tick control · 150+ five-star Google reviews" (product-guide pages use "BuzzSkito Pest Product Guides · independent Canadian research").
   - On commercial pages: a block `BuyLink` CTA at the bottom.
   - **`className="speakable"`** — mandatory; the speakable schema selector targets it.
5. **Structured modules before prose** (this is where the archetypes diverge — see below).
6. **`<article>` prose** opening with `AuthorByline`, containing one amber service-CTA aside mid-article (H3, links /mosquito-control or /tick-control + tel:).
7. **FAQ layer** (see depth rules below).
8. **Related Reading/Guides**: 4-9 links.
9. **Dark `CTASection`** footer pivoting to the service.

**Heading style:** exactly 1 H1; 6-14 H2s; H3s rare (0-4, used only for sub-species/sub-steps and the mid-article service aside). H1s are benefit- or answer-led and may differ from the meta title — meta title carries the exact keyword + numbers + year ("Tick vs Bed Bug: 8 Legs vs 6, ID Chart"; "Worst Areas for Ticks in Ontario + GTA Lyme Risk"), H1 can be longer/descriptive. This title/H1 split-intent capture appears on 4 of 6 pages.

**Module order by archetype:**

- **Commercial buy-guide/comparison (dunks, bits):** Quick Answer → 5-retailer CAD price table (Canadian Tire / Home Depot / Rona / Lowe's / garden centres, with "Updated [month year]" label) → amber "products only solve half the problem" service-bridge callout → `AwardRow` (3 cards + "Which one should you buy?" decision-router paragraph) → key-facts or 11-row comparison table → prose → Related Reading → CTASection.
- **Commercial roundup (fruit-fly):** Quick Answer → `SpecialistDisclosure` → `AwardRow` FIRST (4 intent-differentiated cards: Best Overall / Crossover / Plug-In / Budget) → type-comparison table (one BuyLink per row) → 12-row key-facts table → 9 prose H2s → visible FAQ accordion → Related Guides + hub box.
- **Informational (tick-vs-bed-bug, TTC, ticks-dangerous):** Quick Answer → the page's ONE big argument table immediately (11-row ID chart; 6-row ranked entry-route table; species H3s + sourced stat list) → prose mechanism sections → monetization only after the reader's question is answered → FAQ → Related.

**FAQ depth:** 7-13 questions, 60-140 words each, ~570-1,370 total FAQ words (up to 34% of page words on ticks-dangerous). Always a single `FAQS` const feeding `faqSchema()`. FAQ #1 restates the money keyword verbatim when the H1 doesn't (ticks-dangerous). Questions sweep every PAA variant: "near me", "in stores", "cost", "safe for pets", "banned in Canada". **Rendering divergence:** the three older pages are schema-only (FAQs never rendered visibly — flagged in the dissections as against Google's visible-content guideline and the one fragility in the pattern); the three pages built later render the same const as `<details>/<summary>` accordions. **New pages must use the visible-accordion + shared-const pattern** — zero drift, no policy exposure.

**Word count targets:** commercial buy-guide/comparison 1,100-1,500 rendered (+~1,100 FAQ words); commercial roundup 4,000+; informational 2,400-4,300. None of these win on length alone — the short pages win on answer architecture.

---

## 2. MONETIZATION PATTERN

**Infrastructure (identical on all six):**
- Every Amazon anchor goes through the fail-closed `AmazonLink` layer: server-rendered, `rel="nofollow sponsored noopener noreferrer"`, renders nothing/plain text when the tag is unset — never a dead CTA.
- **Search links only, no ASINs** (one legacy exception: B005UTKT0W on the dunks page). This is the Map-to-1000 decision: search links are immune to delisting.
- Tag via `tagForSlug(slug)` → `lib/amazon-clusters.ts` cluster rules → per-cluster tag (buzzskito-mosquito-20, buzzskito-tick-20, buzzskito-bedbug-20, buzzskito-flies-20). **Rule-order gotcha:** the bedbug regex runs before the tick rule, so tick-vs-bed-bug bills to bedbug — check which rule actually fires for a new slug.
- `AffiliateDisclosure` always renders above the first link; `StickyBuyBar` and `AwardRow` carry their own.

**Link density (rendered Amazon anchors per 1,000 rendered words):**
- Commercial: dunks 11.3, bits 8.7, fruit-fly 5.2. Component mix: StickyBuyBar (1) + Quick Answer (inline AmazonLink + block BuyLink = 2) + price-table BuyLinks (2-4) + AwardRow (2 per card = 6-8) + comparison-table mini BuyLinks (2). Total 13-23.
- Informational: tick-vs-bed-bug 4.2, TTC 3.0, ticks-dangerous 1.2. Component mix: StickyBuyBar (1) + a single `TopPick` card (2 anchors) + 1-4 contextual BuyLinks. Total 3-13.

**First-link depth is the archetype switch:**
- Commercial: first in-flow affiliate link is INSIDE the Quick Answer — ~2-3% of rendered content, effectively above the fold.
- Informational: first in-flow link at 35-57% depth, after all identification/health/mechanism content. On ticks-dangerous, 85% of body prose precedes it.

**What informational winners do differently:**
- **Anti-sell as the conversion strategy** (TTC): a whole H2 of "What Not to Buy", a gated 4th award card ("Most commuters should not buy this"), and honest cons in TopPick cards ("Does nothing to stop the next tick from the yard") that deliberately bridge into the service CTA. The candour earns the one product pitch that remains.
- **Dual-outcome monetization** (tick-vs-bed-bug): both answers to the ID question get monetized — tick → removal tool + $99 service; bed bug → the 6-page bed-bug review cluster.
- The affiliate product is contextually tied to a single moment of need (tick remover ↔ "after a bite" section), not scattered.

**Service funnel is interleaved on every page, never just appended:** amber bridge callout after the price table, mid-article H3 aside with phone number, 2-4 in-prose /mosquito-control or /tick-control links, city money-page links woven into the argument, closing CTASection. The honest-limiter framing ("dunks only solve half the problem", "BTI kills larvae, not the adults flying in") is the pivot — the same reader is worth $0.17 EPC as an affiliate click and $99+ as a lead.

---

## 3. SCHEMA + INTERNAL LINK PATTERN

**Exactly 4 JSON-LD blocks on every page, rendered at top of the component:**
1. **BlogPosting** — headline, real datePublished/dateModified, `inLanguage: "en-CA"`, author = Person `@id: "#alex"` ("Alex Francisco, Founder & Owner-Operator") with `worksFor` Organization, publisher Organization + ImageObject logo, mainEntityOfPage. The named-human entity is sitewide and non-negotiable.
2. **BreadcrumbList** — Home > Blog > page, mirrored by the visible breadcrumb nav.
3. **FAQPage** via `faqSchema(FAQS)` — from the same const that renders the visible accordions.
4. **WebPage + SpeakableSpecification** with `cssSelector: ['h1','h2','article p:first-of-type','.speakable']` — the Quick Answer capsule carries `.speakable` so the verdict block is the voice/AI extraction surface.

**Never present:** AggregateRating (self-serving policy — homepage and /reviews only, per the Jul 14 decision), Product/Review schema on award cards (award labels stay editorial), HowTo (even where step lists exist).

**Answer-consistency for extraction:** the definitive fact appears verbatim in up to 5 surfaces — meta title, meta description, bolded Quick Answer lead, table row 1, FAQ answer 1 (tick-vs-bed-bug's "8 legs vs 6"). Build this redundancy deliberately.

**Internal links OUT (13-22 instances, 9-18 unique targets per page):**
- Breadcrumbs (/, /blog).
- 2-4 links to the money service page (/mosquito-control or /tick-control) + cost page.
- **2-3 city money pages woven into the prose argument itself**, not a footer list — escarpment→/burlington-tick-spray, moraine→/caledon-tick-spray, ravines→/north-york-tick-spray on ticks-dangerous; Markham/Vaughan on bits. Geo-relevance earned, not bolted on.
- 6-10 sibling blog links, several contextual mid-prose (not only Related Reading).
- 1 hub link (/pest-product-guides or the cluster hub page).
- 1-2 external authority links where health claims are made (canada.ca, publichealthontario.ca, etick.ca — `rel="noopener"`, target=_blank).

**Internal links IN (the part builders forget):** the winners receive 4-30 inbound pages. The pattern: register in `lib/constants.ts` BLOG_POSTS, then add contextual in-prose links FROM cluster siblings with varied natural anchors (the TTC page's 4 inbound anchors are all different phrasings), FROM the cluster hub down to the page, and where possible FROM a statistics linkable-asset page with exact-match anchor (/ticks-in-ontario-statistics → ticks-dangerous). Designated-ranker pages get fed by the whole cluster; the page links back up to the pillar, closing the hub-and-spoke.

---

## 4. BUILDER CHECKLIST (embed verbatim in build prompts)

**Setup**
- [ ] Classify the page: COMMERCIAL (shopping/price/best/vs-product intent) or INFORMATIONAL (question/ID/anxiety intent). This sets monetization depth for everything below.
- [ ] Meta title: exact keyword + current year + a number or the literal answer + "Canada"/GTA where relevant. It MAY differ from the H1 — use the H1 for the adjacent question intent (split-intent capture).
- [ ] Meta description front-loads numbers (prices, counts, timings).
- [ ] Confirm which `lib/amazon-clusters.ts` rule fires for this slug (rule order matters — bedbug matches before tick) so earnings bill to the right cluster tag.

**Skeleton (in this order)**
- [ ] Gradient hero: breadcrumb nav + 1 H1 + one-line dek + `FreshnessStamp` with the real date. No hero image.
- [ ] `AffiliateDisclosure` before any affiliate anchor (top of page for commercial; directly above the first link for informational).
- [ ] `StickyBuyBar` with the single best-fit product as a search link.
- [ ] Quick Answer capsule as the first content element: emerald box, "Quick Answer" eyebrow, bolded verdict sentence, ~100-140 words, exactly 6 bullets each containing a number, attribution line with the 150+ reviews stamp, `className="speakable"`. Commercial: inline `AmazonLink` in the verdict + block `BuyLink`. Informational: soft "from $99" service mention instead.
- [ ] COMMERCIAL: 5-retailer CAD price table (Canadian Tire / Home Depot / Rona / Lowe's / garden centres) with real ranges and an "Updated [month year]" footnote, then an amber service-bridge callout, then `AwardRow` with 3-4 intent-differentiated cards (each: score, pros, cons — at least one honest con that hands off to the service) + "Which one should you buy?" decision-router paragraph, then a key-facts or 11-row comparison table.
- [ ] INFORMATIONAL: the page's ONE decisive table immediately after the Quick Answer (ID chart, ranked-risk table, or sourced stat list). No affiliate module before the reader's question is fully answered (~40-60% depth); use one `TopPick` card or one gated AwardRow, contextually tied to the moment of need.
- [ ] Product-review pages where BuzzSkito isn't the treating expert: add `SpecialistDisclosure`.
- [ ] `<article>` prose opens with `AuthorByline`; include one amber H3 service aside mid-article with a tel: link.
- [ ] FAQ: 7-13 Q&As, 60-140 words each, in a single `FAQS` const that feeds BOTH `faqSchema()` AND visible `<details>/<summary>` accordions (never schema-only). FAQ #1 restates the money keyword verbatim if the H1 doesn't contain it. Sweep PAA variants: near me / in stores / cost / safe for pets / legal in Canada.
- [ ] Related Reading: 4-9 sibling links + hub link box.
- [ ] Dark `CTASection` footer.

**Schema**
- [ ] Exactly 4 JSON-LD blocks: BlogPosting (Person `#alex`, en-CA, real dates), BreadcrumbList, FAQPage (from the shared FAQS const), WebPage+Speakable with cssSelector `['h1','h2','article p:first-of-type','.speakable']`.
- [ ] No AggregateRating, no Product/Review schema, no HowTo.
- [ ] Repeat the single definitive fact verbatim in meta title, meta description, Quick Answer lead, first table row, and FAQ #1.

**Canadian moat (at least 3 of these)**
- [ ] CAD prices by named retailer with a dated stamp.
- [ ] PMRA/Health Canada PCP registration numbers; note what's illegal in Canada vs the US.
- [ ] Amazon.ca stock caveats; Canadian seasonality (April-May stock-up, peak-season price rises).
- [ ] Ontario/GTA specifics: named municipalities, landlord obligations, local geography tied to city money pages.
- [ ] Sourced, dated stats with the source named inline (PHAC 2024: 5,809 cases — style).

**Links**
- [ ] OUT: 2-4 service-page links, 2-3 city money pages woven into the argument, 6-10 cluster siblings (several mid-prose), 1 hub, 1-2 .gov/.ca authority links for health claims.
- [ ] IN: register in `lib/constants.ts` BLOG_POSTS; add contextual in-prose links from 3+ cluster siblings with varied natural anchors; link from the cluster hub down; link this page back up to the pillar.
- [ ] All Amazon anchors through `AmazonLink`/`BuyLink`/`TopPick`/`AwardRow`/`StickyBuyBar` only — search links, no ASINs, fail-closed.

**Ship**
- [ ] Zero images (no `<img>`, no next/image); tables and coloured callouts carry the visual weight; wrap wide tables in `overflow-x-auto` with a `min-w`.
- [ ] Server components only, no client JS in content.
- [ ] `npx next build` passes before pushing; push website to the `diogo` remote.

---

## 5. WHAT NOT TO DO

- **No images.** All six #1 pages have zero `<img>`/next/image. The "chart" promised in a title is an HTML table. Tables are crawlable, snippet-eligible, and free at LCP; product photos are an Amazon-compliance risk.
- **No AggregateRating on blog pages, ever** (Jul 14 decision — homepage + /reviews only). No Product/Review schema on award cards; scores stay editorial.
- **No ASINs** (Map-to-1000 decision) — search links only. The one legacy ASIN is not a pattern to copy.
- **No new schema-only FAQs.** The three older winners get away with it; the dissections flag it as the template's one fragility. Always render the FAQS const visibly.
- **No fake freshness.** Real dateModified in FreshnessStamp and BlogPosting. Freshness comes from the dated price-table stamp and the year in the title, honestly maintained.
- **No invented statistics.** The TTC page ranks partly BECAUSE it refuses to publish a per-ride risk figure and says so in an amber box. Never quote a number without a named source and year.
- **No affiliate link before the disclosure**, and on informational pages, none before the question is answered — the ticks-dangerous page holds all monetization past 57% word depth and still ranks #1.
- **No burying the answer.** Never open with a wind-up intro; the verdict is the first bolded sentence on the page.
- **No intent-splitting into thin siblings.** "Bits vs Dunks" serves both queries on one URL; tick-vs-bed-bug junctions two clusters. One page, multiple intents, one authority target.
- **No pure product cheerleading.** Every winner states the product's real limitation (BTI kills larvae only; premium Katchy is wrong for fruit flies; most commuters shouldn't buy the sprayer) — the honesty is both the E-E-A-T signal and the service-funnel pivot. Never publish an award card without at least one genuine con.
- **No client-side JS, no scraped content, no US-generic filler** — the Canadian specifics are the moat US content farms structurally cannot copy.
- **No dollar discounts where a bonus spray works** (site-wide rule, applies to CTA copy): marginal visit cost is ~$8 — pay in sprays, not dollars.