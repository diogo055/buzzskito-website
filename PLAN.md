# Amazon.ca Growth — amazon-growth-sep2026

Branch: `amazon-growth-sep2026` (from `main` @ 3834646). **Do not deploy or merge.**
Resume from this file alone. Each phase ends with a status line below.

## Corrections to the brief — read before any phase

The brief was written against stale or misread data. These override it wherever they conflict.

| Brief says | Measured | Consequence |
|---|---|---|
| ~675 blog posts | **367 in-scope pages** (358 blog + 4 product-guides + 5 learn) | scope is half the size |
| Allowed tags omit `tick`, `fogger`, `airpurifier` | **buzzskito-tick-20 renders 801×, fogger 345×, airpurifier 63× — all registered** in Associates | those three are VALID. Never retag them. Tick is the best cluster on the site. |
| "Other / untagged" = $0.78/click, find and fix untagged links | **"Other" = the four tags Amazon does not itemize (tick, ant, fogger, airpurifier); tick is ~85% of it by traffic** | there are no untagged links to find. The high EPC belongs to tick, which IS tagged. Phase 0 must report tick as tick, not as "unknown". |
| Phase 3: build outbound click tracking | **`components/AffiliateClickTracker.tsx` already fires `affiliate_click` with page_path, placement, cluster_tag, link_kind, activation.** GA4 custom dimensions for all four registered 2026-09-21. | Phase 3 = add `above_fold` + `position_index` to the EXISTING event and write `scripts/ctr_report.ts`. Do not add a second tracker. |
| Phase 5: draft 40–60 new pages, score by Ahrefs CA volume | **Measured: the 215-page July cohort earns $367/mo total, median $0.16/page, 40% earn $0. Ahrefs CA volume is fabricated for these terms** (grub control: Ahrefs 1,800/mo, GSC 8 impressions/quarter). | Phase 5 is capped at a **10-page pilot**, sized from GSC demand not Ahrefs, in the three money topics. Expand only if the pilot beats the cohort median by 5×. |
| EPC table ($606 / 3,234 clicks) | The brief's table is a newer window than my 30-day pull ($568 / 3,126). Use the brief's per-tag EPC as instructed — with "Other" read as tick. | |

## Hard rules (brief + measured)
- amazon.ca only; existing 16 tags only (the brief's 13 + tick, fogger, airpurifier); no prices/ratings/review counts; CTA copy "Check price on Amazon.ca" / "See [category] on Amazon.ca"; verbatim disclosure near the top of every page with a link (build guard enforces it).
- Protected: service, city, neighbourhood, pricing, quote, contact, homepage. In scope: `/blog/*`, `/pest-product-guides/*`, `/learn/*`.
- **48 slugs frozen until 2026-10-15** (`data/exp-slug-test.json`) — no edits to either arm.
- **Lead-CTA rule:** on mosquito/tick pages no affiliate element goes above the in-body quote CTA ($1,222 customer vs $0.12 click). **Geo rule:** ~80% of readers are outside the GTA; a quote CTA must never displace an Amazon link.
- **Additive only** when agents edit pages: `git diff` must show zero deleted lines. Verified mechanically, never by agent self-report.
- DIR2016-01 / PCPR s.21 compliance on every word written.

## Phases

| # | Phase | Inputs | Outputs | Done when |
|---|---|---|---|---|
| 0 | Link inventory | 367 in-scope page sources, `lib/amazon-clusters.ts` | `reports/amazon_links.csv`, `reports/phase0_summary.md` | every Amazon element has a row; tag counts reconcile with rendered build |
| 1 | Page economics | Phase 0 + GSC 90-day (all + Canada), EPC table | `reports/page_economics.csv`, `reports/phase1_summary.md` | top-50 earners and top-50 opportunity pages listed with $ |
| 2 | Link health | ASINs from dead tags + top-50 pages | `reports/link_health.csv` + fix commit | every checked ASIN has a status; breakages fixed or converted to search |
| 3 | Instrumentation | existing tracker | `above_fold`/`position_index` on the existing event; `scripts/ctr_report.ts` | report runs and outputs Amazon clicks ÷ GSC clicks per page |
| 4 | CTA rollout | Phase 1 opportunity list, existing components | `reports/phase4_changes.md` + commits | first CTA in first mobile screen on top-50; ≤5 CTAs **added** per page (pre-existing roundup counts are the owner's, never reduced); zero deletions; guards green |
| 5 | New-page pilot (10) | GSC demand, Ahrefs for SERP only | `reports/new_pages_plan.csv`, drafts `draft: true`, `reports/draft_qc.md`, `reports/publish_calendar.md` | 10 drafts pass the quality gate |
| 5B | Upgrade existing pages | GSC query-by-page | `reports/title_rewrites.csv`, near-miss fixes, hubs, AI-overview formatting | before/after logged for every title; hubs link both ways |
| 6 | Photon Matrix + mosquito | page source, web search | alternatives section; affiliate-program research (no signup) | section live in draft; terms reported |
| 6B | Non-Amazon revenue | web research, Levanta catalogue | `reports/revenue_outside_amazon.md` | each program has network, commission, cookie, approval, est. annual value, OA conflict check |
| 7 | Final | all reports | `reports/FINAL_SUMMARY.md`, `scripts/monthly_review.ts` | measurement plan + repeatable loop documented |

## Status
- 0: **done** — 2026-09-22, commit 7d22b37
- 1: **done** — 2026-09-22, commit d6a4c06
- 2: **done** — 2026-09-23, commit b88ff01 (25 ASINs checked, 1 dead → search link; reports/phase2_fixes.md)
- 3: **done** — 2026-09-23 (tracker: position_index + above_fold; scripts/ctr_report.mjs; GA4 dims registered 2026-09-21)
- 4: **done** — 2026-09-23 (46 pages kept, 3 reverted, 0 owner lines deleted; reports/phase4_changes.md)
- 5: **research done, no drafts** — 2026-09-23. GSC-sized demand: only 4 candidates clear 200 CA impressions/qtr; the best (cockroach gel bait canada, 3,563 imp) is worth ~$1–3/mo and collides with the FROZEN advion page; #2–4 are under $1/mo. Per ops rule 2, not built. Revisit after 2026-10-15 (reports/new_pages_plan.csv, reports/publish_calendar.md)
- 5B: **done** — 2026-09-23. Titles: commit 3ab4bcf (12 titles + 14 descriptions; 2 titles kept on purpose). Near-miss: 9 pages holding 114,187 near-miss impressions got a direct-answer section, all 9 audits clean, 0 owner lines deleted (reports/phase5b_near_miss.md). Dunks PMRA number corrected 18158 → 28888 (verified live).
- 6: **done** — 2026-09-23 (no Photon Matrix affiliate program exists; Alternatives section shipped in Phase 4 batch 0; reports/phase6_photon_matrix.md)
- 6B: **done** — 2026-09-23 (reports/revenue_outside_amazon.md: Levanta Harris/Flowtron + Home Hardware worth pursuing, retailers skip)
- 7: **done** — 2026-09-23 (reports/FINAL_SUMMARY.md; scripts/monthly_review.mjs + scripts/pull-gsc-90d.py + data/amazon/; branch NOT merged or deployed)
