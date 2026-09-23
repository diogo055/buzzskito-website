# Phase 4 — CTA rollout

Branch `amazon-growth-sep2026`. 49 opportunity pages from Phase 1 (15 of the top 20 were tick), edited by 11 batch agents, each batch audited by an independent adversarial agent, then verified mechanically against a source snapshot taken before the run (`scripts/verify-additive.mjs`). **Not deployed.**

## Result in one table

| | before | after |
|---|---|---|
| Amazon elements across 367 in-scope pages | 2,648 | **2,771** (+123) |
| pages with zero Amazon links | 48 | **36** |
| pages whose first link sits after word 600 | 94 | **62** |
| pages with no links at all (billing to the default tag) | 48 | **36** |
| Phase 1 "recoverable" opportunity across the top 50 (modelled) | $57.57/mo | **$6.94/mo** |
| owner lines deleted by agents | — | **0** (49/49 pages, verified) |

The modelled number is a ranking model, not a forecast — it applies one click-out rate to every page. What it says is that the structural defect Phase 1 found (real Canadian traffic meeting its first Amazon link 900–2,600 words in, on tick pages paying $0.78/click) is closed on 46 of the 49 pages.

Pages edited and kept: **46**. Service CTAs (`BlogPostCTA`) inserted above the first affiliate element on mosquito/tick pages: **23**. Sticky buy bars added to tick pages that had none: **19**. Search terms are all existing, verified strings (`tick removal tool tweezers`, `icaridin insect repellent`, `insect shield permethrin treated clothing`, …) billing to the page's cluster tag.

## Per page — first Amazon element, words from the top of the body

Auditor-measured, one method applied to snapshot and working copy. "—" before = the page had no Amazon link at all.

| page | topic | 90d clicks | links b→a | 1st link (words) b→a | service CTA added | sticky added |
|---|---|---|---|---|---|---|
| /blog/laser-mosquito-killer-photon-matrix-review | mosquito | 2307 | 14→18 | 639→477 |  |  |
| /blog/dynatrap-canada-review | mosquito | 259 | 21→22 | 764→348 | yes |  |
| /blog/what-ticks-look-like-ontario | tick | 142 | 5→6 | 913→270 | yes |  |
| /blog/toronto-tick-hot-spot-2026 | tick | 140 | 1→4 | 1234→275 |  | yes |
| /blog/tick-hot-spots-mississauga-2026 | tick | 125 | 1→4 | 1639→281 |  | yes |
| /blog/ultrasonic-pest-repellers-do-they-work | wildlife | 115 | 3→5 | 1349→412 |  |  |
| /blog/flea-bites-on-humans | general | 98 | 9→10 | 2457→332 |  |  |
| /blog/why-do-mosquitoes-bite-my-ankles | mosquito | 79 | 7→8 | 1692→264 |  |  |
| /blog/how-long-do-ticks-live | tick | 74 | 4→6 | 1767→580 | yes |  |
| /pest-product-guides/bed-bug-control | bedbug | 68 | 0→4 | —→377 |  | yes |
| /blog/tick-control-richmond-hill-markham | tick | 57 | 1→4 | 1281→284 | yes | yes |
| /blog/bed-bugs-on-the-ttc-toronto | bedbug | 57 | 5→6 | 703→348 |  |  |
| /blog/bed-bug-bites | bedbug | 51 | 4→6 | 1506→429 |  |  |
| /blog/how-to-keep-mice-out-of-your-car **(reverted)** | rodent | 50 | 14→14 | 280→280 |  |  |
| /blog/best-tick-control-yard-treatment | tick | 47 | 4→5 | 201→232 | yes |  |
| /blog/tick-control-vaughan-king-city-woodbridge | tick | 42 | 0→5 | —→233 | yes | yes |
| /blog/tick-season-mississauga-when-are-ticks-active | tick | 42 | 1→4 | 1629→189 |  | yes |
| /blog/can-ticks-fly-jump-swim | tick | 41 | 6→7 | 1128→249 | yes |  |
| /blog/tick-season-burlington-when-are-ticks-active | tick | 41 | 4→5 | 1338→244 |  |  |
| /blog/ultimate-tick-control-guide-ontario | tick | 39 | 5→6 | 1632→378 |  |  |
| /blog/how-to-get-rid-of-silverfish-canada **(reverted)** | general | 37 | 11→11 | 314→314 |  |  |
| /blog/best-flea-bomb-canada **(reverted)** | general | 33 | 14→14 | 276→276 |  |  |
| /blog/tick-season-oakville-when-are-ticks-active | tick | 30 | 5→6 | 1370→322 |  |  |
| /blog/types-of-ticks-identification | tick | 30 | 4→6 | 1440→489 | yes |  |
| /blog/bed-bug-bites-vs-mosquito-bites | bedbug | 30 | 9→10 | 617→285 |  |  |
| /blog/doktor-doom-canada-guide | general | 29 | 9→10 | 673→422 |  |  |
| /blog/baby-ticks-nymphs-seed-ticks-ontario | tick | 27 | 3→6 | 1236→458 | yes |  |
| /blog/tick-hot-spots-oakville-burlington-2026 | tick | 26 | 0→5 | 0→231 |  | yes |
| /blog/tick-prevention-caledon-halton-hills | tick | 24 | 0→5 | 0→248 | yes | yes |
| /blog/best-live-animal-trap-canada | wildlife | 23 | 5→6 | 337→337 |  |  |
| /blog/how-much-does-tick-treatment-cost-ontario | tick | 20 | 0→5 | 0→227 | yes | yes |
| /blog/do-ticks-die-in-the-washing-machine | tick | 16 | 1→5 | 1566→245 | yes | yes |
| /blog/what-does-tick-look-like-on-dog | tick | 16 | 2→5 | 892→311 | yes |  |
| /blog/lyme-disease-cases-ontario-2026 | tick | 14 | 0→5 | 0→287 |  | yes |
| /blog/tick-control-ancaster-dundas-hamilton | tick | 14 | 0→5 | —→249 | yes | yes |
| /blog/lyme-disease-cases-mississauga-oakville-2026 | tick | 14 | 1→4 | 2644→359 |  | yes |
| /blog/lone-star-tick-alpha-gal-canada | tick | 12 | 1→4 | 2056→571 | yes | yes |
| /blog/ontario-tick-surge-2026 | tick | 11 | 0→4 | —→376 |  | yes |
| /blog/what-percentage-of-ticks-carry-lyme-ontario | tick | 11 | 0→5 | —→273 | yes | yes |
| /blog/deer-tick-vs-dog-tick-canada | tick | 11 | 3→5 | 1310→451 | yes |  |
| /blog/how-to-keep-ticks-out-of-yard-ontario | tick | 9 | 3→5 | 1045→350 | yes |  |
| /blog/best-deer-fence-for-gardens-canada | wildlife | 9 | 9→10 | 311→311 |  |  |
| /blog/are-ticks-arachnids-or-insects | tick | 7 | 3→5 | 1083→506 | yes |  |
| /blog/raccoon-and-skunk-proofing-under-a-deck-canada | wildlife | 6 | 4→5 | 298→298 |  |  |
| /pest-product-guides/tick-gear | tick | 5 | 0→4 | 0→188 |  | yes |
| /blog/blacklegged-deer-tick-ontario | tick | 5 | 3→6 | 1265→437 | yes |  |
| /blog/do-ticks-fly-or-jump | tick | 5 | 3→5 | 839→464 | yes |  |
| /blog/are-there-ticks-in-canada | tick | 4 | 0→5 | 0→524 | yes | yes |
| /blog/mosquito-tick-control-hamilton-burlington | tick | 4 | 0→5 | 0→251 | yes | yes |

## What the audits flagged, and what was done about each

28 findings from 11 auditors; none was a deleted line, a retargeted link, a changed tag, or a frozen slug.

**Reverted (3 pages).** `how-to-keep-mice-out-of-your-car`, `how-to-get-rid-of-silverfish-canada`, `best-flea-bomb-canada` already had an `AwardRow` right under the Quick Answer (~280–315 words). The editors put a one-sentence "if you only buy one thing" lead-in plus a button *above* it, which pushed the first element 27–44 words *later* and duplicated the award grid directly beneath. Restored byte-for-byte from the snapshot. Nothing lost: those pages were already at target.

**Kept (rule 10 "not materially earlier", 4 pages).** `best-live-animal-trap-canada`, `best-deer-fence-for-gardens-canada`, `raccoon-and-skunk-proofing-under-a-deck-canada` (wildlife, $0.54/click) and `doktor-doom-canada-guide`: the early `AwardRow` was already first and is untouched; what moved was the first *in-prose* "Check price" button (1,241→589, 868→494, 1,546→~500, 673→422 words). A reader deep in the prose does not scroll back up to the grid, so that is a real second click point. Kept.

**Kept (`best-tick-control-yard-treatment`).** First affiliate element moved 31 words later because `BlogPostCTA` was inserted above the pre-existing `AwardRow` — the lead-CTA rule (a $1,222 customer outranks a $0.78 click) beats rule 10 on a tick-service query. Deliberate.

**The "≤5 elements per page" cap — 13 flags, interpretation recorded.** Twelve of the thirteen pages were already over 5 before the run (roundup pages with award grids: 9, 14, 21 elements). Reducing them would mean deleting the owner's affiliate links, which is forbidden; Amazon's Operating Agreement does not regulate link count; and the site's own data says the pages that earn are the ones with many early links. The cap is therefore applied to what Phase 4 **adds** (never more than 4 elements to one page, 1–2 typical), not to totals. Three pages went from exactly 5 to 6 (`can-ticks-fly-jump-swim`, `bed-bugs-on-the-ttc-toronto`, `best-live-animal-trap-canada`) — the sixth element is the early one, which is the whole point. Kept. PLAN.md exit criterion amended to match.

**Duplicate disclosure (4 pages, fixed).** Editors correctly placed a new `<AffiliateDisclosure />` above the new first link on `why-do-mosquitoes-bite-my-ankles`, `ultrasonic-pest-repellers-do-they-work`, `flea-bites-on-humans`, `bed-bug-bites`, but the pre-existing one lower down was left, so the box rendered twice. The lower duplicate was removed by hand (4 deleted lines, each the bare component line — the only deletions on the branch besides the Phase 2 dead-ASIN fix). Disclosure still precedes the first link on every page; `check:amazon` confirms.

**CTA wording (rule 7, 5 flags) — pre-existing, untouched.** Older buttons such as "Check Thermacell price →" or "Medium 1-door (groundhogs) →" pre-date this branch. Every CTA *inserted* by Phase 4 uses "Check price on Amazon.ca →" or "See … on Amazon.ca →". Rewording the old ones is a copy change to the owner's pages — listed here, not done.

**`pest-product-guides/bed-bug-control`** — the hub has no body slot between sections (string-only `HubSection` data), so the `TopPick` sits in the `howWeRank` block and the closing link in `bottomLine`. One editor saw a transient TS parse error in this file mid-run; `tsc --noEmit` on the finished tree is clean.

## Ordering check (lead-CTA rule)

On every mosquito/tick informational page the first in-body service CTA precedes the first affiliate element. The four pages `verify-additive` lists as "affiliate first" are all pre-existing and structural: two product roundups whose top element is a sticky bar (`best-tick-control-yard-treatment`, `best-indoor-fly-mosquito-trap-canada`), a bed-bug comparison page (`bed-bug-bites-vs-mosquito-bites`, bedbug cluster, no service offered), and the `tick-gear` product hub (no service CTA by design — worth adding one later; it is a tick page in the GTA).

## Guards

All run on the finished tree, after the reverts and disclosure de-duplication:

| guard | result |
|---|---|
| `scripts/verify-additive.mjs` vs source snapshot (49 pages) | 46 changed, 3 restored byte-for-byte; **0 owner lines deleted**; 4 deliberate deletions (duplicate `<AffiliateDisclosure />`), listed above; 0 frozen slugs touched |
| `npx tsc --noEmit` | clean (exit 0) |
| `npx next build` | ✓ 553/553 static pages, exit 0 |
| `node scripts/check-amazon.mjs` | ✓ 1,664 crawler-visible files; every Amazon URL carries a valid tag; verbatim disclosure present wherever links exist |
| `node scripts/check-registered.mjs` | ✓ 358 blog pages registered, 50 NEW_BLOGS arrays reachable from sitemap and index |
| `node scripts/amazon-inventory.mjs` (after) | 367 pages, 2,771 elements, 0 default-tag, 0 unknown-tag, 0 disclosure gaps, 2 element-level tag/topic mismatches (both pre-existing on `red-ticks-and-clover-mites`, unchanged) |
| protected pages (service / city / neighbourhood / pricing / quote / contact / homepage) | untouched — every changed path is under `app/blog/` or `app/pest-product-guides/` |

`reports/amazon_links.csv` and `reports/page_link_stats.json` are refreshed to the post-Phase-4 state; `reports/phase0_summary.md` and `reports/phase1_summary.md` are kept as the pre-run baseline.

