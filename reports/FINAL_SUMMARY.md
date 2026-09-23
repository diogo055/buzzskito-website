# Amazon.ca growth — final summary (branch `amazon-growth-sep2026`, 2026-09-22 → 23)

**Status: every phase executed; merged fast-forward to `main` and deployed to buzzskito.ca on 2026-09-23 at the owner's instruction (Vercel: success for 8803f2e; live pages verified).** PLAN.md is the resumable state; each phase has its own report in `reports/`.

## What the brief asked, what was measured, what shipped

| phase | brief | measured reality | shipped |
|---|---|---|---|
| 0 inventory | ~675 pages | **367** in-scope pages, 2,648 Amazon elements, 0 untagged, 0 disclosure gaps | `scripts/amazon-inventory.mjs`, `reports/amazon_links.csv` |
| 1 economics | rank pages by $ | tick = $0.78/click, 4–10× every other cluster; 15 of the top-20 opportunity pages were tick pages whose first link sat 900–2,600 words down | `scripts/page-economics.mjs`, `reports/page_economics.csv` |
| 2 link health | 40–150 ASINs | the site has **25** ASINs (98.6% of links are searches); 24 live, 1 dead — fixed | `reports/link_health.csv`, `phase2_fixes.md` (b88ff01) |
| 3 instrumentation | per-page CTR | tracker now sends `position_index` + `above_fold`; `scripts/ctr_report.mjs` joins GA4 to GSC | `reports/ctr_report.csv` (c3d3adb) |
| 4 CTA rollout | first CTA in first screen, top 50 | **46 pages** (33 tick): elements 2,648 → 2,771, zero-link pages 48 → 36, late-first-link 94 → 62, 23 service CTAs kept above the first affiliate element, 19 tick sticky bars; **0 owner lines deleted**, verified mechanically | `reports/phase4_changes.md` (c3d3adb) |
| 5 new pages | 40–60 drafts | GSC-sized demand finds **4** candidates; the best is worth $1–3/mo and collides with a frozen experiment page — **no drafts written** | `reports/new_pages_plan.csv`, `publish_calendar.md` |
| 5B existing pages | titles + near-miss | 12 titles + 14 descriptions on the 14 lowest-CTR pages (394,684 imp at 0.33%); direct-answer sections on 9 pages holding 114,187 near-miss impressions | `phase5b_titles.md` (3ab4bcf), `phase5b_near_miss.md` |
| 6 Photon Matrix | affiliate program? | **none exists** (site, Shopify store, search); the page got a Canada-available alternatives section instead + an outreach draft for the owner | `phase6_photon_matrix.md` |
| 6B outside Amazon | other programs | only Levanta Harris/Flowtron (after amazon.ca activation) and Home Hardware are worth a form; every other Canadian retailer pays 1/7–1/14 of Amazon per click | `revenue_outside_amazon.md` |
| 7 loop | monthly review | `scripts/monthly_review.mjs` + `scripts/pull-gsc-90d.py` + `data/amazon/` drop folder | this file |

Commits on the branch: 7d22b37 · d6a4c06 · b88ff01 · c3d3adb · 3ab4bcf · (near-miss + this summary).

## The honest number

The branch fixes a structural defect — money pages whose first Amazon link was buried — on every page where the data said it mattered. Modelled on the site's own measured funnel (46 pages · 987 Canadian clicks/month · CA-click-weighted EPC $0.286), moving their click-out up 5–15 points is worth **+$14 to +$42/month**; the title rewrites, if they lift CTR from 0.33% toward 0.6–1.0%, add roughly **+$8 to +$30/month**. Call the whole branch **+$30–80/month on a ~$570/month base**, visible in the Amazon report from November (Google needs 4–8 weeks to re-crawl and re-rank 60 changed pages).

That is not 10×, and it is worth being plain about why. Affiliate income here is *Canadian clicks × click-out × $ per click*, and every term was measured this session:
- **$ per click is capped by Amazon.ca's commission table** — ~$0.19 blended, $0.78 on tick. Placement is now done; the tick cluster is fully linked. There is no more EPC to find on Amazon.ca.
- **Click-out is bounded** — commercial pages already run ~41% real click-out, informational ~17%. Phase 4 moves the laggards toward the norm; nobody gets 80%.
- **Traffic is the only term with headroom, and it is the slow one.** ~8,600 GSC clicks/month, 70% Canadian, DR ~0.5. 10× income at these rates needs roughly 5× the Canadian traffic to money pages, which is a backlink and authority problem measured in quarters, not a page-edit problem.

The one lever that changes the *rate* rather than the *volume* is a direct brand deal: Harris (bed bug) pays $16.81 per order through Levanta versus $3.32 on Amazon — 5× per order — but only for Harris products, only once Harris activates amazon.ca, and it does not stack with the Associates cart-wide 24-hour cookie that produces 99% of today's earnings. Worth the application; not a replacement for Amazon.

## What only the owner can do (in order of value)

1. **Merge and deploy the branch** — read `reports/phase4_changes.md` first; run the SEO parity gate before pushing (`reference_seo_parity_gate`); push to `diogo main`, confirm the Vercel deploy status, then spot-check three tick pages live.
2. **Levanta:** email Harris and Flowtron asking whether their Levanta program is active on amazon.ca. Do not switch any link until they say yes in writing — a Levanta link on a non-activated brand earns $0 from Canadians. (`revenue_outside_amazon.md`)
3. **Home Hardware via Rakuten:** log in and verify the 8% rate FlexOffers lists; if real, it is the only retailer program worth adding (~$110/yr on Thermacell/wasp pages).
4. **Photon Matrix outreach:** send the draft in `phase6_photon_matrix.md` from info@buzzskito.ca (five minutes; a $1,000 device on the site's largest page).
5. **GA4:** register `position_index` and `above_fold` as custom event dimensions (Admin → Custom definitions), the same way the four from 2026-09-21 were registered — otherwise the new tracker fields record but cannot be reported.
6. **Monthly loop:** download the Tracking ID CSV into `data/amazon/`, then `python scripts/pull-gsc-90d.py` and `node scripts/monthly_review.mjs` (`data/amazon/README.md`). First run: early November.
7. **Copy decisions the audits surfaced** (each contradicts a primary source; none changed): the Doktor Doom ASIN/label mismatch on best-spider-spray (`phase2_fixes.md`); the Mosquito Dunks label sites and shelf life; the Photon Matrix "August production" lines; the DynaTrap CO₂ claim (`phase5b_near_miss.md`). One correction *was* made: the dunks registration number 18158 → 28888, verified on the PMRA register.
8. **After 2026-10-15** (slug experiment reports): revisit the three blank wasp buttons, the Advion cluster (the one new-page candidate), and the two frozen near-miss pages.

## Guards on the final tree

| guard | result |
|---|---|
| `npx tsc --noEmit` | clean |
| `npx next build` | ✓ 553/553 static pages, exit 0 |
| `node scripts/check-amazon.mjs` | ✓ 1,664 crawler-visible files, every Amazon URL tagged, verbatim disclosure wherever links exist |
| `node scripts/check-registered.mjs` | ✓ 358 blog pages registered, 50 NEW_BLOGS arrays reachable |
| `node scripts/amazon-inventory.mjs` | 367 pages, 2,771 elements, 0 default-tag, 0 unknown-tag, 0 disclosure gaps (near-miss pass added no affiliate elements — by design) |
| `scripts/verify-additive.mjs` Phase 4 (49 pages) | 0 owner lines deleted; 4 duplicate disclosure lines removed by hand |
| `scripts/verify-additive.mjs` Phase 5B near-miss (9 pages) | 0 owner lines deleted except the 11 lines on the dunks page where the PMRA number was corrected 18158 → 28888 (number only) |
| protected pages | untouched — every changed path is under `app/blog/` or `app/pest-product-guides/` |
| frozen slugs (`data/exp-slug-test.json`, until 2026-10-15) | untouched |

## Corrections to the brief, recorded so the next session inherits them

- Scope is 367 pages, not 675; "Other" in the tracking-ID report is tick (Amazon does not itemise tick/ant/fogger/airpurifier); 25 ASINs, not 40–150.
- "≤5 CTAs per page" is applied to what a pass **adds**; roundup pages carry 9–22 elements by the owner's design and reducing them is forbidden.
- Ahrefs Canadian volume is fabricated for these terms; Phase 5 was sized from GSC and came back with 4 candidates worth $1–3/month. Building pages does not pay here (215-page cohort: median $0.16/page/month).
- Editing agents self-report wrong numbers every run (claimed byte-identical while adding 40 lines; claimed "moved earlier" when the AwardRow was already first). Every page edit on this branch was verified with `scripts/verify-additive.mjs` against a source snapshot, never by report.
