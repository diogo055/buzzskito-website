# Tier 1 title & meta changes — Phase 3

Applied 2026-09-08 on `feat/affiliate-content-sept26`. Three pages changed, four lines of code.
Every value below was measured from the **built HTML** in `.next/server/app/`, not from the source
constant, because `app/layout.tsx` appends ` | BuzzSkito` (12 chars) to every title.

## 1. `/blog/best-wasp-nest-spray-canada` — title + description

| | Old | New |
|---|---|---|
| title | `Best Wasp Nest Spray Canada 2026: Foam vs Jet` (57 rendered) | `Best Wasp Spray Canada 2026: Foam vs Jet` (**52 rendered**) |
| description | 247 chars | **150 chars** |

New description:
> 3 PMRA-registered wasp sprays compared for Canada: foam vs jet, dusk timing, roughly 2–5.7 m standoff, colony kill in 24–48 hours. Skip US 27-ft cans.

**The change is one deleted word: "Nest".** That word is what made the title lead with
"wasp nest spray" — 960 impressions returning 2 clicks, 0.21%. The required lead query
"best wasp spray" sits at 986 impressions and 1.52%, and "best wasp spray canada" converts at
5.26% from position 2.2. Topical coverage of "nest" is untouched: the H1, slug, breadcrumb,
AwardRow heading and body all still carry it. Only the title's emphasis moved.

**"Killer" was deliberately NOT added**, despite "best wasp killer" being the page's biggest click
earner (765 impressions, 24 clicks, 3.14%). `app/blog/best-wasp-killer-canada/page.tsx` exists and
its entire title is that query. Adding it here would put two of our own pages in direct title-level
competition for one term. That is the cannibalisation pattern already identified as the site's
largest structural problem; creating a fresh instance of it to chase 24 clicks is a bad trade.

**Precision fix applied before shipping:** two independent auditors flagged that "2–5.7 m standoff"
quoted *rated* reach as if it were usable standoff, when the page's own FAQ says to "plan on roughly
30 to 40 percent short". The word "roughly" was restored (the page's own hedge, line 298). Cost:
8 of 13 unused characters.

## 2. `/blog/thermacell-refills-recharge-canada` — description only

Title unchanged: `Thermacell Refills Canada: 4 Models, Cost/Hour` (58 rendered). It already leads
with the exact head query and is already within limits.

| | Old | New |
|---|---|---|
| description | 247 chars | **144 chars** |

New description:
> Thermacell refills in Canada: Canadian Tire, Home Depot, Amazon.ca. E-Series 40-hr cartridge $15–20 CAD (~$0.40/hr); Original 60-hr pack $25–$32.

**This one took two rounds.** The first draft opened "Refills are not interchangeable" — the page
says the opposite. Line 30 answers the FAQ "Are Thermacell refills interchangeable between models?"
with "Not across families. Rechargeable models (E55, E90, and the newer rechargeable line) all use
the same E-Series liquid cartridge and are interchangeable with each other." Dropping "across
families" inverted the meaning. A fact auditor caught it before it shipped.

**The redraft also corrected a targeting error I introduced.** I briefed the first drafter toward
compatibility intent based on the visible query sample. An auditor paged all 170 query rows and
measured the real distribution: retail intent ≈ 465 impressions (a Canadian Tire cluster of 434
alone, zero clicks, positions 6.8–8.0) against ≈ 4–20 for compatibility. My premise was wrong by
roughly 7–100×. The shipped description targets retail.

Both prices verified verbatim against the table rows at lines 129 and 130. "CAD" supported by the
column header at line 123 and line 147. Retailers supported at lines 22 and 227.

## 3. `/pest-control-cost-canada` — description only

| | Old | New |
|---|---|---|
| description | 156 chars (over the limit) | **152 chars** |

New description:
> How much does pest control cost in Canada? Averages $414-$617 a visit nationally, $200-$450 in the GTA. 2026 prices: ants, mice, wasps, bed bugs, ticks.

Opens with the page's largest query verbatim — "how much does pest control cost", 452 impressions
at position 5.2 returning 0.66%. The qualifier "Averages" was retained on an auditor's objection:
the live copy said "averages $414-$617" and the page's own Quick Answer frames the band as an
average, with individual jobs ranging ~$100 to $50,000. Stating the band bare would have read as a
range and softened a claim the page makes precisely.

**Title deliberately NOT changed — see the open decision below.**

## Open decision for Diogo: the cost page title

A spec auditor failed this title on the brief's own rule and the finding is solid:

> The live title leads with **"Pest Control Cost Canada"**. A GSC query filter for `contains
> "canada"` on this URL returns **no such row at all**. The nearest is "pest control canada" at
> 11 impressions and 0 clicks. The title leads with a phrase essentially nobody searches.

The compliant alternative, counted and verified: `How Much Does Pest Control Cost? $414-$617 CAD`
— 46 source chars, 58 rendered, leads with the 452-impression query verbatim.

**I did not apply it, for two reasons.**

1. **It could damage the service side.** This page ranks **2.1 for "pest control near me"** and
   **2.4 for "pest control"** — local, service-intent queries feeding the $1,222 side of the
   business. Retitling it as a pure cost guide may weaken that. One service customer is worth
   roughly 368 affiliate orders, so this is not a symmetric bet.
2. **Bundling destroys attribution.** Changing the title and description in the same push makes
   the result unreadable. The description change is a clean, low-risk CTR test on its own.

Recommendation: ship the description now, watch it to 2026-10-15, then decide the title separately.

## Verification run on every change

- Rendered `<title>` and `<meta name="description">` read from built HTML, entities decoded.
- Affiliate + CTA element counts before/after: wasp 30 → 30, thermacell 19 → 19, cost 0 → 0.
- Line counts unchanged in all three files. Diff is 4 lines, all inside title/description fields.
- `npx next build` clean.
- Every number in every description traced to a quoted line in its own page body.
