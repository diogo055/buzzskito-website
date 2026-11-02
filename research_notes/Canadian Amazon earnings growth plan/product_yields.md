# Product page yields: what a Canadian Amazon page earns, and what rank or scale would be worth

Bottom line (Oct 30, 2026). A product page earns about CA$2.41 a month at the mean and CA$0.83 at the median (Aug-Oct, Canada). A new one is worth about CA$30 a year at the mean and CA$8 at the median (estimate). A 3-position gain on a top-20 page is worth about CA$7 a month, more than a typical new page, but the demand is small: about 95,000 visible Canadian shopping searches in the best measured month. No scenario reaches CA$10,000 a month, even with every visible query at #1. CA$3,000 appears only at peak, only in near-impossible rank scenarios or on paper with 1,000 pages. A realistic 2027 peak for Amazon.ca is about CA$900-1,500 (inference). All rates below come from Aug-Oct 2026, and no product-page money was measured in June or July.

Notes on sources: scratch outputs are in the session scratchpad and the repo was not changed. GSC Oct figures run Oct 1-30 (last day partial). GA4 and Amazon Oct figures run Oct 1-29.

## Yield of a product page: views, Amazon clicks and estimated earnings per page

### Takeaway
Over Aug-Oct the 174 product pages earned about CA$420 a month in total, with a mean of CA$2.41 and a median of CA$0.83 per page. The top 10 pages take 36% and the top 50 take 83%. 26 pages had no Canadian Amazon click in 90 days, and 63 had none in the last 30.

### Cited Findings

**Calibration: one GA4 Canadian Amazon click has been worth CA$0.41 for three months running.** This uses GA4's outbound `click` event with an Amazon link domain, which exists from July. `affiliate_click` starts Sep 2 and agrees closely (Sep 1,403 vs 1,384, Oct 1,005 vs 962) — [a1 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a1_pages_out.txt)

| Month 2026 | Amazon clicks | GA4 all countries | GA4 Canada | Amazon / GA4 all | Amazon / GA4 Canada | Earned CA$ | $/Amazon click | $/GA4 Canadian click |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Jul (program started mid-month) | 1,040 | 734 | 643 | 1.42 | 1.62 | 141.36 | 0.136 | 0.220 |
| Aug | 2,954 | 1,930 | 1,614 | 1.53 | 1.83 | 666.84 | 0.226 | 0.413 |
| Sep | 3,209 | 1,607 | 1,384 | 2.00 | 2.32 | 574.86 | 0.179 | 0.415 |
| Oct 1-29 | 1,748 | 1,071 | 962 | 1.63 | 1.82 | 393.96 | 0.225 | 0.410 |

- Amazon's click count ran 1.42-2.0 times all-country GA4, which is wider than the 1.2-1.6 in the brief (September is the outlier) — [a1 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a1_pages_out.txt)
- Check: the model's per-page sums come to CA$543 a month (product 420 + remedy 110 + info 13) against Amazon's actual CA$545 average for Aug 1-Oct 29 — [a1 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a1_pages_out.txt)

**Distribution per page (estimated CA$ a month, flat rate per GA4 click).** 90 days is Aug 1-Oct 29, which is late season plus fall. 30 days is Sep 30-Oct 29, which is off-season — [a1 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a1_pages_out.txt)

| Type, window | Pages | Canadian views | Amazon clicks | Per 1,000 | Total $/mo | Mean | Median | p25 | p75 | p90 | Max | Zero-view pages | Zero-click pages | Top 10 share | Top 50 share |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Product, 90d | 174 | 12,230 | 3,047 | 249 | 420 | 2.41 | 0.83 | 0.14 | 2.93 | 6.33 | 23.68 | 4 | 26 | 36% | 83% |
| Product, 30d | 174 | 2,959 | 792 | 268 | 324 | 1.86 | 0.41 | 0.00 | 2.05 | 5.32 | 18.84 | 21 | 63 | 40% | 87% |
| Remedy, 90d | 64 | 5,509 | 797 | 145 | 110 | 1.71 | 0.34 | 0.00 | 1.14 | 3.73 | 32.77 | 0 | 19 | 80% | 100% |
| Remedy, 30d | 64 | 1,152 | 168 | 146 | 69 | 1.07 | 0.00 | 0.00 | 1.23 | 3.97 | 7.37 | 8 | 35 | 71% | 100% |
| Info, 90d | 97 | 4,943 | 96 | 19 | 13 | 0.14 | 0.00 | 0.00 | 0.14 | 0.47 | 2.62 | 10 | 72 | 77% | 100% |
| Info, 30d | 97 | 1,535 | 29 | 19 | 12 | 0.12 | 0.00 | 0.00 | 0.00 | 0.41 | 2.87 | 20 | 83 | 86% | 100% |

- A median product page gets 10.2 Canadian views a month over 90 days and 6.5 in the last 30. The means are 23.4 and 17.0 — [a1 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a1_pages_out.txt)
- Monthly product-page totals in Canada (views / Amazon clicks / per 1,000): Jul 3,525 / 465 / 132, Aug 4,818 / 1,181 / 245, Sep 4,577 / 1,102 / 241, Oct 1-29 2,835 / 764 / 269. July is not comparable, because links were only partly live and many pages were new — [scratch check of pages.json](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/pages.json)

**By topic, product pages only (flat rate; small topics are noisy)** — [a1 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a1_pages_out.txt)

| Topic | Pages | 90d views/mo | Clicks per 1,000 | 90d $/mo | Mean | Median | Zero-click 90d | 30d $ | 30d median | Zero-click 30d |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Bed bug | 38 | 596 | 334 | 82 | 2.16 | 0.62 | 4 | 78 | 0.61 | 9 |
| General | 26 | 555 | 261 | 60 | 2.30 | 0.89 | 2 | 34 | 0.41 | 11 |
| Mosquito | 34 | 787 | 172 | 56 | 1.65 | 0.28 | 11 | 25 | 0.00 | 18 |
| Wasp | 5 | 559 | 179 | 41 | 8.26 | 7.57 | 1 | 17 | 0.41 | 1 |
| Roach | 4 | 389 | 248 | 40 | 9.95 | 6.88 | 0 | 33 | 5.53 | 0 |
| Wildlife | 9 | 284 | 332 | 39 | 4.33 | 1.93 | 0 | 29 | 1.64 | 0 |
| Rodent | 11 | 392 | 218 | 35 | 3.22 | 2.48 | 1 | 45 | 2.87 | 1 |
| Dehumidifier | 10 | 118 | 397 | 19 | 1.93 | 1.31 | 2 | 23 | 0.61 | 4 |
| Flies | 2 | 80 | 365 | 12 | 6.06 | 6.06 | 0 | 16 | 7.78 | 0 |
| Steamer | 9 | 91 | 281 | 11 | 1.18 | 1.10 | 2 | 8 | 0.41 | 4 |
| Sprayer | 7 | 35 | 557 | 8 | 1.16 | 0.28 | 0 | 8 | 0.00 | 5 |
| Fogger | 8 | 48 | 352 | 7 | 0.88 | 0.76 | 0 | 5 | 0.41 | 3 |
| Ant | 2 | 52 | 192 | 4 | 2.07 | 2.07 | 0 | 2 | 1.23 | 0 |
| Tick | 8 | 82 | 81 | 3 | 0.34 | 0.14 | 3 | 0 | 0.00 | 7 |
| Air purifier | 1 | 8 | 625 | 2 | 2.07 | 2.07 | 0 | 2 | 1.64 | 0 |

**By page age (first git add, following renames).** This is confounded with topic: older pages are mostly mosquito and tick — [a5 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a5_pages2_out.txt)

| Built | Pages | 90d mean | 90d median | Views/mo | Zero 90d | 30d mean | 30d median | Zero 30d |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Apr-Jun 2026 | 16 | 1.56 | 0.41 | 28.6 | 31% | 0.95 | 0.00 | 56% |
| Jul 1-20 | 34 | 3.37 | 0.83 | 32.5 | 15% | 1.96 | 0.20 | 50% |
| Jul 21-31 | 88 | 2.67 | 1.10 | 23.9 | 5% | 2.09 | 0.82 | 24% |
| Aug 2026 | 34 | 1.32 | 0.14 | 11.8 | 32% | 1.71 | 0.41 | 41% |

**By price level (rough slug rule, not real prices).** High means the typical pick costs about CA$80 or more. High-price pages: n=76, 15.3 views/mo per page, 294 clicks per 1,000, flat-rate mean CA$1.85, median CA$0.76, 12% zero-click. Lower-price pages: n=98, 29.8 views/mo, 231 per 1,000, mean CA$2.84, median CA$0.83, 17% zero-click. With topic rates instead of the flat rate the means are nearly equal: CA$2.45 and CA$2.51 — [a5 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a5_pages2_out.txt)

**Topic money per click, Amazon's tag report, visible months only:** — [a5 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a5_pages2_out.txt)

| Tag | Months shown | $/Amazon click | $/GA4 Canadian click | Items behind it | Ordered $ per item |
|---|---|---:|---:|---:|---:|
| Dehumidifier | Aug | 0.701 | 0.998 | 6 (too few) | 290 |
| Wildlife | Aug, Sep | 0.432 | 0.688 | 41 | 76 |
| Steamer | Sep | 0.380 | 0.793 | 11 (too few) | 57 |
| Bed bug | Aug-Oct | 0.232 | 0.419 | 115 | 55 |
| Mosquito | Aug-Oct | 0.204 | 0.556 | 190 | 42 |
| Flies | Sep | 0.198 | 0.329 | 18 (few) | 29 |
| General | Aug-Oct | 0.142 | 0.271 | 84 | 33 |
| Rodent | Aug-Oct | 0.140 | 0.220 | 37 | 26 |
| Roach | Aug, Sep | 0.127 | 0.302 | 46 | 37 |
| Wasp | Aug-Oct | 0.122 | 0.190 | 91 | 24 |

Tags Amazon hides (tick, ant, fogger, sprayer, air purifier) carry a residual CA$0.554 per GA4 click, which is unreliable because that residual also contains other tags' hidden months. The rates were scaled by 0.986 to match Amazon's total — [a5 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a5_pages2_out.txt)

**Adjacent home products (dehumidifiers, sump pumps, patio heaters, steam mops, purifiers and similar).** 39 pages, 10.6 views/mo per page, 389 clicks per 1,000, mean CA$1.71, median CA$0.55, 13% zero-click, CA$67/mo in total over 90 days — [a5 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a5_pages2_out.txt)

**A trap in the saved data.** `ca_clicks_90d` counts `affiliate_click`, which only starts Sep 2, over 90 days of views. All Canadian clicks for Aug 1-Oct 29 are 2,408 on that measure and 3,960 on the outbound `click` event. The ground-wasps page reads 63 per 1,000 in the Oct 23 converter list and 137 with the full count — [a10 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a10_extra_out.txt); [converters-top60.json](file:///C:/Users/buzzs/buzzskito-website/data/amazon/converters-2026-10-23/converters-top60.json)

### Inferences
- Money per product page is about the same whether the topic is cheap or expensive. Expensive topics earn more per click but get half the views. Basket size is therefore not an obvious reason to prefer high-price pages.
- The tag table suggests money per click rises with the topic's basket, across 10 tags. That is suggestive only, because several rows rest on under 20 items.
- The Oct 23 converter ranking under-read pages whose clicks came in August (wasp, mosquito), because it used about 58 days of clicks over 90 days of views.

### Gaps
- Amazon does not report earnings by page. Every per-page dollar here is a model: GA4 clicks times a rate.
- Real prices per page were not available, so the price split is a slug rule.
- Page count by season is limited: no product-page money exists for June or early July.

## July 2026 cohort re-measure, and a realistic yield for a page built tomorrow

### Takeaway
Re-measured with Amazon outbound clicks, July's product pages earn a mean of CA$2.10-3.56 and a median of CA$0.44-1.25 a month, better than the old CA$1.71 and CA$0.16 but still small. A page built tomorrow is worth about CA$1.70-1.90 a month in winter and CA$3.60-4.60 at peak at the mean, and about CA$0.44 and CA$0.83-1.25 at the median (estimates).

### Cited Findings

**July cohort by month.** Oct is scaled to 31 days. My git count finds 227 /blog pages from July against 215 in the September note: 122 product, 44 remedy, 46 info, 15 outside the Amazon list — [a5 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a5_pages2_out.txt)

| Group | n | Aug total / mean / median / zero | Sep total / mean / median / zero | Oct total / mean / median / zero |
|---|---:|---|---|---|
| All July | 227 | $535 / 2.36 / 0.41 / 44% | $466 / 2.05 / 0.42 / 47% | $324 / 1.43 / 0.00 / 50% |
| July product | 122 | $434 / 3.56 / 0.83 / 22% | $375 / 3.07 / 1.25 / 28% | $257 / 2.10 / 0.44 / 34% |
| July remedy | 44 | $94 / 2.14 / 0.41 / 48% | $83 / 1.90 / 0.42 / 45% | $60 / 1.37 / 0.44 / 48% |
| July info | 46 | $7 / 0.15 / 0.00 / 83% | $8 / 0.17 / 0.00 / 80% | $7 / 0.16 / 0.00 / 80% |

- The July product pages' top 10 take 46-50% of the group's money each month — [a5 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a5_pages2_out.txt)
- The September note reported CA$367 in total, a mean of CA$1.71 and a median of CA$0.16, using Google clicks by page times a cluster rate — [does-building-pages-pay.md](file:///C:/Users/buzzs/buzzskito-website/data/does-building-pages-pay.md). That pull shape drops most Canadian clicks — [reference_gsc_per_page_country_is_fiction.md](file:///C:/Users/buzzs/.claude/projects/C--Users-buzzs-buzzskito-website/memory/reference_gsc_per_page_country_is_fiction.md)

**Did any improve?** Of the 122 July product pages, 45 had more Amazon clicks in Oct than Aug, 14 the same and 63 fewer. Risers (Aug / Sep / Oct 1-29): best-rat-trap 9 / 32 / 34, best-fruit-fly-trap 17 / 25 / 36, best-flea-spray 7 / 18 / 20, best-raccoon-live-trap 3 / 9 / 14, best-bed-bug-trap 2 / 16 / 12. Fallers: best-screen-tent 78 / 9 / 0, mosquito-fogger 80 / 16 / 2, best-wasp-nest-spray 69 / 60 / 8 — [a5 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a5_pages2_out.txt)

- Season explains most of it. Oct/Aug clicks: July indoor pages 0.78 (n=79), July outdoor pages 0.31 (n=43), older outdoor pages 0.53 (n=15). No usable older indoor control exists (n=1) — [a5 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a5_pages2_out.txt)
- Ranks improved slightly. Among 121 July product pages with 50+ global impressions in Aug, the median position moved 0.5 better from Aug to Oct; 44 improved by 1+ and 19 fell by 1+. Median impressions were 0.8 times August's — [a5 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a5_pages2_out.txt)
- The August cohort (34 product pages, the re-measure the September note asked for, read two months in): Sep mean CA$1.88, median CA$0.00, 53% zero; Oct mean CA$1.82, median CA$0.44, 41% zero. The wildlife-proofing pages are small so far (Canadian views / Amazon clicks in 90 days): deck proofing 32 / 4, deer fence 25 / 4, roof vents 49 / 14, chimney cap 13 / 3 — [a5 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a5_pages2_out.txt); [a7 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a7_scenarios_out.txt)

**Evidence for a new page's yield (estimated CA$ a month)** — [a5 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a5_pages2_out.txt); [a7 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a7_scenarios_out.txt)

| Case | Season label | n | Mean | Median | Zero-click |
|---|---|---:|---:|---:|---:|
| Aug cohort, indoor topics, in Oct (2 months old) | Off-season | 23 | 1.90 | 0.44 | 39% |
| Jul cohort, indoor topics, in Oct (3 months old) | Off-season | 79 | 2.58 | 0.88 | 27% |
| Aug cohort, outdoor topics, in Oct | Off-season, falling | 11 | 1.63 | 0.44 | 45% |
| Jul cohort, outdoor topics, in Oct | Off-season, falling | 43 | 1.23 | 0.44 | 47% |
| Jul cohort in Aug (1 month old) | Late season | 122 | 3.56 | 0.83 | 22% |
| Jul cohort, outdoor topics, in Aug | Late season | 43 | 3.97 | 0.83 | 19% |
| Jul cohort, indoor topics, in Aug | Late season | 79 | 3.33 | 1.24 | 24% |
| May cohort in Aug (3 months old) | Late season | 6 (too few) | 5.78 | 3.10 | 0% |

Arithmetic for the July cohort in Aug: 32.5 views per page x 0.265 GA4 clicks per view x CA$0.413 = CA$3.56. In Oct: 17.4 views x 0.276 x CA$0.410 = CA$1.97 before the 31-day scaling — [a7 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a7_scenarios_out.txt)

### Inferences
- **Winter estimate for a page built tomorrow (Jan-Feb 2027, 2-3 months old):** mean about CA$1.70 for the cohort's topic mix, or CA$1.90-2.60 if the page is an indoor topic; median about CA$0.44-0.88. Outdoor topics probably earn close to nothing then. This assumes outdoor topics fall to about 10% of October, which is an assumption with no winter data behind it.
- **Peak estimate (Jul-Aug 2027, 8-9 months old):** mean CA$3.60-4.60 (the July cohort's August figure, then scaled by the estimated peak pool of 1.28), with the small May cohort's CA$5.78 as the optimistic case; median CA$0.83-1.25.
- **A year:** about CA$30 at the mean and CA$8 at the median (5 winter months, 4 shoulder months, 3 peak months). The mean is carried by the top tenth of pages, which cannot be picked in advance on this evidence.
- The operating rule's conclusion still holds, but its numbers should be restated: for product pages the median is CA$0.44-1.25, not CA$0.16.

### Gaps
- No cohort has been measured at an age of 8+ months at peak.
- No winter month exists in the data.
- The test of whether the next pages would earn less than July's was not done with a control. The July and August cohorts look similar in October (CA$2.10 and CA$1.82), but both were aimed at the better topics first.

## Click-through curve for Canadian shopping searches by position, and what each position is worth

### Takeaway
Across queries, Canadian shopping CTR runs about 4.85% at #3, 2.40% at #5, 1.01% at #8 and 0.39% at #12, but much of that gap is query type. Within the same query, moving from #8 to #3 only about doubles clicks (x2.11), and within the same page one position up gives about +12-14%.

### Cited Findings

**The curve, May-Oct 2026, no retailer-named queries (40,004 query-months).** "Within-query" compares the same query across months with the month effect removed, using 415 queries and 1,791 query-months — [a3 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a3_out.txt)

| Position | Query-months | Impressions | Clicks | CTR | 95% range | May-Aug | Sep-Oct | Generic noun | Best/top/Canada | Brand | Within-query vs #8 (range) |
|---|---:|---:|---:|---:|---|---:|---:|---:|---:|---:|---|
| 1.0-1.4 | 3,137 | 4,559 | 115 | 2.52% | 2.03-3.04 | 2.48% | 2.55% | 1.53% | 3.11% | 4.28% | 2.37 (0-3.93, unusable) |
| 2 | 1,206 | 6,198 | 475 | 7.66% | 5.18-9.06 | 8.64% | 5.40% | 2.22% | 6.96% | 10.42% | 3.03 (1.88-3.40) |
| 3 | 2,499 | 17,407 | 845 | 4.85% | 3.13-6.50 | 5.25% | 4.07% | 2.77% | 4.05% | 7.06% | 2.11 (1.50-2.55) |
| 4 | 1,868 | 17,226 | 606 | 3.52% | 2.92-4.08 | 3.74% | 3.31% | 2.49% | 3.66% | 4.59% | 1.99 (1.56-2.40) |
| 5 | 2,060 | 35,633 | 854 | 2.40% | 2.09-2.73 | 2.57% | 2.03% | 2.10% | 2.63% | 2.34% | 1.49 (1.29-1.78) |
| 6 | 2,416 | 46,571 | 1,101 | 2.36% | 1.93-2.75 | 2.67% | 1.72% | 1.61% | 2.39% | 2.83% | 1.43 (0.99-1.64) |
| 7 | 3,087 | 55,740 | 881 | 1.58% | 1.30-1.86 | 1.99% | 1.19% | 1.33% | 1.50% | 2.05% | 1.16 (1.01-1.31) |
| 8 | 3,337 | 65,900 | 664 | 1.01% | 0.81-1.22 | 1.21% | 0.68% | 0.83% | 0.90% | 1.36% | 1.00 |
| 9 | 3,602 | 49,850 | 436 | 0.87% | 0.78-1.01 | 1.15% | 0.61% | 0.70% | 1.20% | 1.10% | 0.81 (0.70-0.97) |
| 10 | 3,517 | 45,677 | 252 | 0.55% | 0.47-0.64 | 0.63% | 0.44% | 0.45% | 0.88% | 0.58% | 0.66 (0.52-0.86) |
| 11-12 | 6,697 | 56,740 | 219 | 0.39% | 0.32-0.46 | 0.45% | 0.32% | 0.34% | 0.59% | 0.47% | 0.76 (0.61-1.00) |
| 13-15 | 3,342 | 22,480 | 57 | 0.25% | 0.19-0.32 | 0.30% | 0.21% | 0.22% | 0.39% | 0.69% | 0.60 (0.34-0.95) |
| 16-20 | 1,580 | 8,633 | 14 | 0.16% | 0.08-0.25 | 0.18% | 0.15% | 0.15% | 0.34% | 0.00% | 0.44 (0.13-1.02) |
| 21+ | 1,656 | 5,777 | 13 | 0.23% | 0.12-0.34 | 0.30% | 0.16% | 0.25% | 0.00% | 0.43% | 0.29 (0-0.56) |

- **Position 1 is effectively unmeasured.** Its 4,559 impressions are spread over 3,137 query-months, and only one query-month has 100+ impressions: "chimney animal screen caps", 131 impressions, 0 clicks — [a3 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a3_out.txt)
- **Head queries (300+ impressions in the month):** #2 11.24% (only 2 query-months, both "mosquito bits canada"), #3 6.62% (7), #4 3.00% (5), #5 1.94% (18), #6 2.70% (19), #7 1.66% (27), #8 0.81% (27), #9 0.73% (23), #10 0.47% (17), 11-12 0.32% (25). There is no head query at #1 — [a3 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a3_out.txt)
- **The biggest top-position cases are Canadian-qualified or brand searches:** "mosquito bits canada" 9.62-11.21% at 2.3-2.7, "best mosquito repellent canada" 11.35% at 2.5, "delta dust canada" 6.43% at 3.5, "summit mosquito bits canada" 16.57% at 2.2. The generic "permethrin" earned 1.02% at 3.2 — [a3 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a3_out.txt)
- **Big queries only** (500+ total impressions, 106 queries), within-query vs #8: #2 x3.7, #3 x2.51, #4 x2.3, #5 x1.49, #6 x1.65, #7 x1.27, #9 x0.81, #10 x0.61, 11-12 x0.79 — [a3 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a3_out.txt)
- **Same query, month effect on CTR (Aug = 1):** May 1.22, Jun 1.64, Jul 1.30, Sep 0.93, Oct 0.83. This cannot separate season from a general decline in click-through — [a3 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a3_out.txt)
- **Same page, control for topic x month:** one position better goes with +13.9% Canadian views (95% +7.8% to +19.4%), +12.3% Amazon clicks (+4.3% to +21.4%) and +10.7% global impressions (+3.8% to +16.8%), across 301 page-month pairs on 168 pages, Aug-Oct — [a10 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a10_extra_out.txt)
- **Retailer-named queries:** 423 clicks on 56,553 impressions (0.75%), and about 0.2% at positions 9-10 — [a3 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a3_out.txt)

**What 1,000 Canadian shopping searches are worth at a position.** CTR x CA$0.159 per Google click to a product page. That value is the Aug-Oct mean (0.154, 0.157, 0.168), so these are late-season and off-season dollars — [a7 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a7_scenarios_out.txt)

| Position | All shopping | Best/top/Canada | Generic noun | Brand |
|---|---:|---:|---:|---:|
| #1 (tail queries only, not a real reading) | $4.02 | $4.96 | $2.44 | $6.82 |
| #2 | $12.22 | $11.09 | $3.54 | $16.61 |
| #3 | $7.74 | $6.46 | $4.42 | $11.26 |
| #5 | $3.82 | $4.20 | $3.34 | $3.73 |
| #8 | $1.61 | $1.43 | $1.33 | $2.17 |
| #12 | $0.62 | $0.94 | $0.54 | $0.74 |

**Rank gains in dollars, Aug-Oct average, within-query curve:** — [a10 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a10_extra_out.txt)

| Product pages | $/mo now | +1 position | +2 | +3 | Click-weighted position |
|---|---:|---:|---:|---:|---:|
| Top 10 | 151 | +22 | +55 | +93 | 7.0 |
| Top 20 | 235 | +36 | +87 | +139 | 7.1 |
| Top 50 | 347 | +56 | +129 | +211 | 7.4 |
| All 174 | 420 | +68 | +154 | +254 | 7.5 |

### Inferences
- Use three sizes for a rank gain: the within-page rate as the low case (about x1.45 for +3), the within-query curve as the middle (x1.68), and the cross-query curve as a high case that is known to be inflated (x2.36). Observed position changes are noisy, which biases the within-page rate downward, so the truth is probably between the first two.
- The cross-query curve overstates rank value by about 2x at #3 (x4.8 vs x2.11), because the queries where we already rank high are easier: brand names and searches that name Canada.
- Generic product nouns are worth far less even at the top: about 2-3% at #2-3. These are the largest pool, and the site rarely ranks that high on them.

### Gaps
- A true #1 CTR for any meaningful Canadian shopping query is not measured. Scenarios below treat it as an assumption.
- CTR by SERP feature (shopping grids, AI answers) was not measured.
- The dollars per click have no June or July reading.

## Real demand: Canadian shopping searches visible to us, by product family and month

### Takeaway
Visible Canadian shopping searches at position 10 or better peaked at 94,680 in August 2026 and total 346,101 for Apr-Oct, of which we took 1.80% as clicks. This is a floor: it could be roughly 210,000 searches for August with queries below #10 counted, and about double again if the hidden queries look alike, but even that pool is small against CA$10,000.

### Cited Findings

**How much the query pull misses.** Query dimension + Canada filter against the country total: May-Oct it shows 11,096 of 29,057 clicks (38%, so it misses 62%) and 1,009,425 of 2,056,950 impressions (49%). By month, clicks shown / impressions shown: Jun 47% / 49%, Jul 40% / 50%, Aug 38% / 50%, Sep 36% / 50%, Oct 32% / 48%. Hidden queries have higher CTR than visible ones (Aug 1.61% vs 0.95%, Oct 1.38% vs 0.72%) — [a2 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a2_queries_out.txt)

**Monthly demand at position 10 or better (10.5 cut-off on the monthly average), Canada, no retailer-named queries.** Money columns are visible clicks x the month's gross-up x dollars per Google click. "Top 3" gives the within-query and cross-query range — [a4 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a4_demand_out.txt); [a10 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a10_extra_out.txt)

| Family | Jun | Jul | Aug | Sep | Oct | Aug $ now → top 3 | Oct $ now → top 3 |
|---|---:|---:|---:|---:|---:|---|---|
| Personal repellent | 10,944 | 16,468 | 17,927 | 8,660 | 3,405 | 89 → 159-247 | 18 → 46-85 |
| Mosquito traps and zappers | 6,696 | 12,451 | 13,427 | 3,831 | 2,325 | 97 → 217-530 | 16 → 52-132 |
| Wasp, hornet and bee | 6 | 1,112 | 12,792 | 21,208 | 4,337 | 80 → 142-221 | 40 → 64-92 |
| Cockroach | 5 | 490 | 6,976 | 7,882 | 5,431 | 43 → 92-207 | 31 → 72-158 |
| Mosquito dunks, bits, BTI | 24,253 | 12,064 | 5,849 | 4,020 | 3,071 | 33 → 44-84 | 28 → 40-70 |
| Bed bug gear | 5 | 671 | 5,481 | 8,832 | 8,152 | 38 → 109-221 | 54 → 99-183 |
| Steamers, vacuums, purifiers | 0 | 110 | 5,445 | 945 | 1,257 | 4 → 10-21 | 6 → 17-39 |
| Fruit, drain and other flies | 41 | 487 | 4,712 | 7,927 | 5,225 | 16 → 37-73 | 19 → 44-80 |
| Foggers and sprayers | 162 | 6,991 | 4,131 | 2,401 | 1,386 | 26 → 51-78 | 5 → 22-45 |
| Wildlife deterrents and traps | 0 | 382 | 2,961 | 5,163 | 4,441 | 9 → 26-44 | 16 → 30-45 |
| Dehumidifiers and moisture | 0 | 394 | 2,652 | 3,378 | 2,995 | 10 → 42-80 | 14 → 54-114 |
| Screens, tents, nets, fans | 54 | 310 | 2,575 | 836 | 753 | 7 → 33-92 | 2 → 15-33 |
| Other shopping | 998 | 1,702 | 1,967 | 1,262 | 910 | 7 → 17-35 | 5 → 16-49 |
| Spider, silverfish, crawlers | 8 | 92 | 1,840 | 2,077 | 2,103 | 4 → 15-29 | 6 → 14-25 |
| Rat and mouse traps | 0 | 578 | 1,432 | 1,996 | 2,233 | 5 → 17-42 | 13 → 34-76 |
| Ant | 2 | 18 | 1,166 | 1,057 | 876 | 2 → 12-26 | 3 → 9-20 |
| Thermacell and area repellers | 219 | 1,119 | 932 | 326 | 283 | 4 → 8-19 | 0 → 0 |
| Flea | 1 | 5 | 708 | 2,809 | 2,012 | 4 → 9-16 | 7 → 12-17 |
| Rodent repellent and exclusion | 0 | 128 | 702 | 1,251 | 4,325 | 1 → 5-9 | 26 → 50-75 |
| Tick | 1,317 | 1,073 | 408 | 257 | 322 | 2 → 7-16 | 2 → 11-29 |
| Rodent poison and bait | 0 | 88 | 379 | 746 | 1,085 | 3 → 14-21 | 6 → 14-27 |
| Diatomaceous earth, general | 19 | 123 | 218 | 182 | 125 | 1 → 4-10 | 0 → 0 |
| **Total, position 10 or better** | **44,730** | **56,856** | **94,680** | **87,046** | **57,052** | | |
| Clicks on those | 1,324 | 1,237 | 1,608 | 1,256 | 689 | | |
| Share of clicks we take | 2.96% | 2.18% | 1.70% | 1.44% | 1.21% | | |
| Total at all positions | 47,421 | 68,086 | 125,429 | 114,575 | 76,720 | | |
| Clicks at all positions | 1,340 | 1,292 | 1,702 | 1,334 | 736 | | |
| Retailer-named impressions (extra) | 9,798 | 19,996 | 12,359 | 8,733 | 4,411 | | |

Apr is 174 and May 5,563 at position 10 or better. Apr-Oct totals 346,101 impressions and 6,238 clicks, a 1.80% share — [a7 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a7_scenarios_out.txt)

- **Where the pool sits (Aug):** positions 1-3 hold 6% of impressions, 4-5 hold 15%, 6-7 hold 19%, 8-10 hold 36%, 11-20 hold 23%, 21+ hold 2%. October looks similar: 5%, 11%, 22%, 36%, 24%, 2% — [a7 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a7_scenarios_out.txt)
- **Concentration (Aug):** 7,601 queries at position 10 or better, top 20 = 30%, top 100 = 52%, median 2 impressions per query — [a10 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a10_extra_out.txt)
- **Same-query panel (196 queries at position 10 or better in every month Jun-Oct), impressions relative to Aug:** Jun 1.77, Jul 1.58, Sep 0.81, Oct 0.40. By family, Jul vs Aug: personal repellent 1.37, mosquito traps 1.99, dunks and bits 1.93 (June 3.71). Family samples are small — [a4 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a4_demand_out.txt)
- **Aug-Oct panel by season group, impressions Aug / Sep / Oct:** outdoor 44,848 / 34,775 / 15,816; indoor 21,806 / 26,112 / 20,441 — [a4 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a4_demand_out.txt)

**Testing the assumption that impressions at position 10 or better are close to true searches. It only partly holds:**
- It looks reasonable at positions 5-10: within the same query, impressions are flat (0.79-1.0 of position 8's level, 1,055 queries). They fall below page one: 11-12 at 0.50, 13-15 at 0.25, 16-20 at 0.15, 21+ at 0.07 — [a3 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a3_out.txt)
- It fails for some head terms, where presence comes and goes at about the same average position. "wasp spray": Aug 35 impressions at 9.1, Sep 5,042 at 8.3, Oct 1,150 at 8.7. "best air purifiers for allergies": Jul 6 at 23, Aug 4,476 at 8, none shown in Sep or Oct — [a4 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a4_demand_out.txt); [a7 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a7_scenarios_out.txt)
- Among queries at position 10 or better in 2+ of Aug-Oct with 200+ impressions in the best month, the median best/worst month ratio is 2.03 for indoor families (n=30) and 7.92 for outdoor (n=55, partly season) — [a10 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a10_extra_out.txt)
- Summing each query's own best month gives 194,517 at position 10 or better and 232,672 at any position, about 2 times August's 94,680 — [a7 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a7_scenarios_out.txt)
- Estimated searches including queries below #10, using the factors above: Aug about 210,067 (94,680 + 115,387), Sep about 189,899, Oct about 132,948. The factors are rough — [a7 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a7_scenarios_out.txt)

**Share of visible impressions that is shopping (all positions):** Jun 44%, Jul 36%, Aug 47%, Sep 50%, Oct 41%. Share of visible clicks: 59%, 60%, 67%, 61%, 55% — [a4 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a4_demand_out.txt)

### Inferences
- Peak month estimate for 2027 at today's rank: about 121,600 visible searches (Aug x 1.28). It applies each family's July panel ratio to August. Wasp at 0.5 and indoor families at 1.0 are my assumptions, and the panels are small.
- The monthly pool is a floor, not the market. Total shopping searches visible to us at peak are probably 200,000-420,000 a month: all-position estimate at the low end, doubled at the high end if hidden queries share the visible shopping mix.
- One operating rule needs a caveat. "Ranking first produces few impressions, so demand is small" treats average position as if we appear on every search, but average position only counts the searches where we appeared. "wasp spray" shows that low impressions at a good average position can mean a low share of searches rather than low demand. Ahrefs-style head-term volumes remain unverified, but GSC cannot disprove them for terms we barely appear on.

### Gaps
- True Canadian demand for head terms we barely appear on is not measured. The Oct 26 Keyword Planner check was US-focused and gives ranges only — [keyword-planner-2026-10-26.md](file:///C:/Users/buzzs/buzzskito-website/data/god-build/research/keyword-planner-2026-10-26.md). A Canadian check of the top 50 shopping terms was not done.
- Demand for product types where we have no page cannot be seen in GSC.
- The shopping classifier is my own regex, checked by eye on the top queries. Some misses remain, for example "wasp nest removal spray".
- Product pages were mostly built in late July, so June and July demand for most families is not visible.

## Ceiling scenarios: monthly CAD at peak and in winter

### Takeaway
No scenario reaches CA$10,000 a month. CA$3,000 appears only at peak, and only if every visible query reaches the top 3 on the inflated curve, reaches #1, or on paper with 1,000 pages at a mean yield the demand data does not support; a realistic 2027 peak is about CA$900-1,500.

### Cited Findings

**The measured chain, product pages, Canada** — [a7 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a7_scenarios_out.txt)

| Step | Aug 2026 (late season) | Sep 2026 | Oct 2026 (off-season) |
|---|---:|---:|---:|
| Visible shopping impressions, all positions (position 10 or better) | 125,429 (94,680) | 114,575 (87,046) | 76,720 (57,052) |
| x CTR = visible shopping clicks | 1.36% = 1,702 | 1.16% = 1,334 | 0.96% = 736 |
| x gross-up (hidden and non-shopping queries) = Google clicks to product pages | 1.86 = 3,173 | 2.19 = 2,920 | 2.53 = 1,864 |
| x all views per Google click = GA4 product-page views | 1.52 = 4,818 | 1.57 = 4,577 | 1.52 = 2,835 |
| x GA4 Amazon clicks per view | 0.245 = 1,181 | 0.241 = 1,102 | 0.269 = 764 |
| x Amazon clicks per GA4 Canadian click = Amazon clicks (product share) | 1.83 = about 2,162 | 2.32 = about 2,557 | 1.82 = about 1,390 |
| x earnings per Amazon click = product-page dollars | $0.226 = $488 | $0.179 = $458 | $0.225 = $313 |
| + remedy pages + everything else = Amazon's total | 162 + 17 = $667 | 100 + 17 = $575 | 67 + 14 = $394 |
| Dollars per Google click to a product page | $0.154 | $0.157 | $0.168 |

Google clicks to product pages = Canadian clicks in the `country` total x product pages' share of GA4 organic landing sessions (47% Aug, 47% for 90 days, 44% for 30 days). Sep uses the 90-day share and Oct the 30-day share — [a7 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a7_scenarios_out.txt); [a4 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a4_demand_out.txt)

**Each scenario's arithmetic at the August 2026 level.** Multipliers come from running every visible query through the curve at its current position and at the target. "Within" is the same-query curve and "raw" is the cross-query curve. Each visible click converts at CA$0.2867 through the chain above (1.864 x 1.518 x 0.2451 x 1.830 x 0.2257). Queries below #10 also gain impressions as they rise, using the factors in the demand section. #1 CTR is not measured, so it is shown at the measured #2 rate, and at 1.5x and 2x that (assumptions). Top 3 and #1 are applied to remedy pages as well, which is generous — [a7 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a7_scenarios_out.txt)

| Scenario | Multiplier | Visible clicks | Google clicks to product pages | Product views | GA4 Amazon clicks | Amazon clicks | Product $ | + remedy + other | Total |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Today | 1.00 | 1,702 | 3,173 | 4,818 | 1,181 | 2,162 | 488 | 179 | 667 |
| +3 positions, within | 1.68 | 2,858 | 5,328 | 8,088 | 1,982 | 3,628 | 819 | 179 | 998 |
| +3 positions, raw | 2.36 | 4,011 | 7,477 | 11,351 | 2,782 | 5,091 | 1,150 | 179 | 1,329 |
| Top 3, within | 2.25 | 3,829 | 7,137 | 10,835 | 2,656 | 4,860 | 1,097 | 382 | 1,479 |
| Top 3, raw | 4.47 | 7,602 | 14,170 | 21,510 | 5,272 | 9,648 | 2,180 | 741 | 2,921 |
| #1 at #2's rate, within | 3.19 | 5,434 | 10,129 | 15,376 | 3,769 | 6,897 | 1,557 | 534 | 2,093 |
| #1 at #2's rate, raw | 5.35 | 9,108 | 16,977 | 25,771 | 6,316 | 11,559 | 2,611 | 884 | 3,497 |
| #1 at 2x #2's rate, raw | 10.69 | 18,186 | 33,899 | 51,459 | 12,612 | 23,080 | 5,214 | 1,749 | 6,965 |

**Monthly CAD by season.** Two rows are measured and the rest are estimates — [a7 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a7_scenarios_out.txt); [a10 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a10_extra_out.txt)

| Scenario | Aug 2026 level (late season, measured base) | Peak 2027 (estimate, pool x 1.28) | Oct 2026 pace (off-season, 31 days) | Winter 2027 (estimate, no data) |
|---|---:|---:|---:|---:|
| Today | 667 | 852 | 421 | 320 |
| Every product page +3, within-page (x1.45) | 887 | 1,134 | 570 | 435 |
| Every product page +3, within-query (x1.68) | 998 | 1,277 | 647 | 496 |
| Every product page +3, raw (x2.36) | 1,329 | 1,702 | 835 | 667 |
| Every visible shopping query top 3, within | 1,479 | 1,895 | 1,001 | 733 |
| Every visible shopping query top 3, raw | 2,921 | 3,746 | 1,961 | 1,451 |
| Every visible query #1 at #2's rate, within / raw | 2,093 / 3,497 | 2,683 / 4,485 | 1,417 / 2,283 | 1,039 / 1,766 |
| Every visible query #1 at 1.5x, within / raw | 3,126 / 5,228 | 4,009 / 6,709 | 2,112 / 3,414 | 1,550 / 2,643 |
| Every visible query #1 at 2x, within / raw | 4,158 / 6,965 | 5,335 / 8,939 | 2,807 / 4,546 | 2,060 / 3,520 |
| +200 product pages at median yield | 832 | 1,064 | 509 | 408 |
| +200 product pages at mean yield | 1,378 | 1,762 | 784-842 | 662 |
| +1,000 product pages at median yield | 1,493 | 1,912 | 859 | 760 |
| +1,000 product pages at mean yield (arithmetic only) | 4,223 | 5,402 | 2,236-2,524 | 2,030 |
| Every query below #10 reaches #7 (a cap on new pages for queries we already see) | 1,102 | about 1,410 | 849 | about 645 |

How the season bases were built:
- **Peak 2027:** August's product and remedy dollars x 1.28, others unchanged. If July's higher same-query CTR is seasonal (x1.30), today's peak would be about CA$1,100 rather than CA$852 — [a7 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a7_scenarios_out.txt); [a3 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a3_out.txt)
- **Winter:** October's pace, keeping indoor topics (73% of product and remedy Amazon clicks) and 10% of outdoor (assumed), with other earnings at 70% (assumed). The goal sheet has CA$380 for Jan-Feb — [a7 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a7_scenarios_out.txt); [goal-2027.md](file:///C:/Users/buzzs/buzzskito-website/data/god-build/goal-2027.md)
- **Page yields:** medians CA$0.83 in Aug, CA$1.06 at peak (x1.28), CA$0.44 in Oct and winter. Means CA$3.56, CA$4.55, CA$1.82-2.10, CA$1.71 — [a7 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a7_scenarios_out.txt)
- **Below-#10 cap:** +CA$435 (Aug), +CA$468 (Sep), +CA$428 (Oct). The largest queries there already have pages: "mosquito repellent", "bug zapper", "dynatrap", "rat traps", "bed bug spray", "fruit fly trap". The peak and winter figures are my scaling of these — [a7 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a7_scenarios_out.txt)

**Why 1,000 pages at the mean is arithmetic only.** At the August rate of 32.5 views per page, 1,000 pages need 32,516 Canadian views a month, against 4,818 for all 174 product pages in August (6.7x). That means about 21,400 Google clicks, about 11,500 visible shopping clicks, and at August's 1.36% about 840,000 more impressions, against 125,429 seen in August — [a7 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a7_scenarios_out.txt)

**What each target needs at measured rates** — [a7 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a7_scenarios_out.txt)

| Target a month | Google clicks to product pages | vs Aug 2026 | Canadian product views at 10.9¢ | Amazon clicks at $0.2065 | vs Aug | Ordered revenue at 4.9% | Items at $2.05 |
|---|---:|---:|---:|---:|---:|---:|---:|
| CA$3,000 | 18,814 | 6x | 27,523 | 14,528 | 5x | $61,224 | 1,463 |
| CA$10,000 | 62,713 | 20x | 91,743 | 48,426 | 16x | $204,082 | 4,878 |
| CA$100,000 | 627,131 | 198x | 917,431 | 484,262 | 164x | $2,040,816 | 48,780 |

### Inferences
- **CA$3,000:** reached only at peak, in these scenarios: every visible query top 3 on the raw curve (CA$3,746), #1 on raw or at 1.5x within (CA$4,009-4,485), or 1,000 pages at the mean on paper (CA$5,402). In winter only #1 at 1.5-2x on the raw curve gets close or past (CA$2,643-3,520). None of these is a plan. Only 5-6% of today's shopping impressions are in the top 3.
- **CA$10,000:** no scenario. The highest is CA$8,939 at peak, for #1 on every visible query at twice the measured #2 CTR on the inflated curve. CA$10,000 would need about 33,700 visible shopping clicks, or about 16% of August's estimated 210,000 searches. Today's share is 0.8%, the top-3 blend gives 1.8-3.6%, and only a few brand searches at #2 have reached 11-17%.
- **Past CA$10,000 on paper:** only by stacking #1 everywhere, 2x the #2 CTR, the raw curve and every query at its own best month at once (about CA$14,300 at peak, my arithmetic).
- **CA$100,000:** not reachable by any measure here. It needs 164 times August's Amazon clicks.
- **Answer to the owner's idea:** partly. More pages add money: 200 pages add about CA$210-910 a month at peak and CA$90-340 in winter, if yields hold. They do not reach CA$10,000.
- **Realistic 2027 peak, Amazon.ca only:** about CA$900-1,500 a month. That is today's CA$852 (or about CA$1,100 if the CTR effect is seasonal), +CA$80-260 for 1-2 positions on product pages, and a small addition from any new pages. The goal sheet's CA$1,425 for July 2027 sits near the top of that range, so it probably needs real rank gains.
- Rank and pages are both small against the target, so CA$10,000 from Canadian Amazon alone is not a measured path. Any larger target would have to come from elsewhere, which is outside this note.

### Gaps
- Winter is not measured, and holiday carts could raise money per click. That read comes after Jan 15, 2027 — [CLAUDE.md](file:///C:/Users/buzzs/buzzskito-website/CLAUDE.md)
- Peak 2027 rests on small same-query panels and on assumptions for wasp and indoor families.
- Higher CTR and impressions would not necessarily keep the same click-out rate. It was held constant.
- Not modelled: competing retailer pages, the effect of Amazon commission changes, Mediavine income on these pages, new non-pest verticals. Non-pest demand is unmeasured beyond the 39 adjacent pages above.
- Not done: a demand-capped estimate for pages on product types with no current page, since GSC cannot see that demand.

## Which pages make the most money per view, and which of those rank worst

### Takeaway
The best pages per view are dehumidifier, wildlife and sprayer pages at CA$0.26-0.45 per Canadian view (estimated). All of the top 25 have already been upgraded, their positions run from 5.6 to 11.2, and getting all 25 to #3 would add about CA$193 a month on a CA$221 base at the Aug-Oct average.

### Cited Findings

**Top 25, product and remedy pages with 30+ Canadian views in 90 days (118 pages qualify).** Money per 1,000 views = click rate shrunk toward the page type (k=25) x topic money per GA4 click. Position is the page dimension alone, all countries. The Canadian head query comes from query + page + Canada filter, so it is partial. Tier: top50 live Oct 24, t2 Oct 28, t3 Oct 28-29, t4 Oct 29, so these positions are almost all from before the upgrades — [a8 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a8_top25_out.txt)

| # | Page (/blog/) | $ per 1,000 views | Views/mo | Raw clicks per 1,000 | Topic | Position 90d | Position 30d | Biggest Canadian query (impressions, position) | Tier | Est. $/mo | + at #3 |
|---:|---|---:|---:|---:|---|---:|---:|---|---|---:|---:|
| 1 | best-dehumidifier-for-cold-garage-canada | 450 | 48.0 | 493 | Dehumidifier | 6.4 | 5.8 | garage dehumidifier (455, 10.1) | top50 | 23.3 | 11.1 |
| 2 | best-dehumidifier-for-mold-canada | 349 | 10.7 | 438 | Dehumidifier | 8.6 | 8.8 | best dehumidifier canada (977, 9.3) | top50 | 4.6 | 7.4 |
| 3 | best-raccoon-live-trap-canada | 342 | 13.0 | 667 | Wildlife | 8.5 | 8.4 | raccoon trap (543, 9.8) | top50 | 5.9 | 6.5 |
| 4 | best-battery-backpack-sprayer-canada | 324 | 10.3 | 871 | Sprayer | 9.3 | 9.5 | backpack sprayers (184, 13.7) | top50 | 4.9 | 7.9 |
| 5 | motion-activated-sprinkler-canada | 315 | 60.0 | 494 | Wildlife | 6.8 | 6.9 | motion activated sprinkler (1,817, 7.5) | top50 | 20.1 | 16.5 |
| 6 | best-large-capacity-dehumidifier-canada | 290 | 15.7 | 319 | Dehumidifier | 9.1 | 9.8 | best dehumidifier canada (966, 6.9) | t3 | 4.9 | 7.9 |
| 7 | best-dehumidifier-for-basement-canada | 266 | 20.3 | 279 | Dehumidifier | 11.2 | 11.9 | best dehumidifier for basement canada (834, 7.4) | t2 | 5.6 | 11.0 |
| 8 | best-steam-cleaner-for-pest-control-canada | 262 | 30.7 | 359 | Steamer | 7.8 | 7.9 | steam vacuum for bed bugs richmond hill (81, 19.1) | top50 | 8.6 | 9.5 |
| 9 | best-electric-fence-for-raccoons-canada | 262 | 23.0 | 435 | Wildlife | 7.1 | 6.5 | electric fence for raccoons (156, 9.2) | t4 | 6.8 | 5.6 |
| 10 | best-indoor-fly-mosquito-trap-canada | 258 | 17.3 | 577 | Mosquito | 8.1 | 11.4 | indoor fly traps (118, 30.9) | top50 | 5.5 | 6.1 |
| 11 | co2-mosquito-trap-canada | 229 | 24.0 | 514 | Mosquito (remedy) | 7.1 | 7.6 | co2 mosquito trap (277, 7.5) | t2 | 6.8 | 5.5 |
| 12 | best-bed-bug-detector-canada | 220 | 24.3 | 630 | Bed bug | 7.8 | 7.1 | bed bug detector (450, 6.2) | top50 | 6.3 | 7.0 |
| 13 | best-pump-pressure-sprayer-canada | 213 | 16.7 | 460 | Sprayer | 9.1 | 9.2 | pump sprayer canadian tire (695, 10.0) | top50 | 4.2 | 6.7 |
| 14 | mosquito-fogger-canada | 188 | 92.7 | 353 | Mosquito | 7.4 | 8.9 | mosquito fogger (1,233, 6.4) | top50 | 17.9 | 14.7 |
| 15 | raccoon-deterrent | 188 | 131.3 | 279 | Wildlife | 5.9 | 5.4 | raccoon repellent (1,676, 7.3) | top50 | 24.9 | 11.8 |
| 16 | best-raccoon-proof-roof-vent-covers-canada | 186 | 16.3 | 286 | Wildlife | 7.1 | 6.8 | animal proof roof vent covers (43, 9.6) | t2 | 3.2 | 2.6 |
| 17 | best-upholstery-steam-cleaner-canada | 185 | 11.7 | 229 | Steamer | 9.3 | 8.8 | upholstery steam cleaner (221, 9.8) | t2 | 2.1 | 3.3 |
| 18 | best-bed-bug-spray-for-travel-canada | 180 | 11.0 | 576 | Bed bug | 6.9 | 7.2 | bed bug spray for travel (45, 6.7) | top50 | 2.6 | 2.1 |
| 19 | best-thermal-fogger-canada | 178 | 12.3 | 378 | Fogger | 5.6 | 5.7 | thermal fogger (75, 7.5) | t3 | 2.6 | 1.2 |
| 20 | bed-bug-mattress-encasement-canada | 176 | 49.7 | 456 | Bed bug | 7.9 | 7.7 | bed bug mattress encasement (469, 8.8) | top50 | 9.4 | 10.4 |
| 21 | best-bed-bug-steamer-canada | 173 | 95.0 | 435 | Bed bug | 6.5 | 7.1 | steam cleaner for bed bugs (564, 6.9) | top50 | 17.1 | 8.1 |
| 22 | cimexa-bed-bug-review-canada | 167 | 31.3 | 447 | Bed bug | 6.4 | 6.2 | cimexa (874, 6.5) | top50 | 5.8 | 2.7 |
| 23 | best-hepa-vacuum-for-bed-bugs-and-fleas-canada | 164 | 18.7 | 464 | Bed bug | 5.6 | 5.9 | best vacuum for bed bugs (40, 4.1) | t4 | 3.6 | 1.7 |
| 24 | best-mosquito-repellent-device-canada | 159 | 42.3 | 299 | Mosquito | 8.7 | 12.4 | mosquito repellent machine (2,201, 8.7) | t3 | 6.9 | 11.1 |
| 25 | mosquito-repellent-guide-ontario-2026 | 156 | 112.0 | 295 | Mosquito (remedy) | 6.8 | 8.7 | best mosquito repellent (2,044, 5.4) | top50 | 18.1 | 14.8 |

- The 25 pages earn an estimated CA$221.5 a month on the Aug-Oct average. If all reached #3 on the within-query curve they would add CA$193.4 — [a8 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a8_top25_out.txt)
- **Worst-ranked of the 25, by 90-day page position:** best-dehumidifier-for-basement 11.2, best-battery-backpack-sprayer 9.3, best-upholstery-steam-cleaner 9.3, best-large-capacity-dehumidifier 9.1, best-pump-pressure-sprayer 9.1, best-mosquito-repellent-device 8.7, best-dehumidifier-for-mold 8.6, best-raccoon-live-trap 8.5, best-indoor-fly-mosquito-trap 8.1, bed-bug-mattress-encasement 7.9 — [a8 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a8_top25_out.txt)
- By type, money per 1,000 Canadian views on these qualifying pages is CA$102 for product and CA$53 for remedy. The brief's 10¢ and 6¢ per view hold — [a5 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a5_pages2_out.txt)
- Among the pages with the most absolute gain at #3 are the ones with real traffic: motion sprinkler (+16.5), repellent guide (+14.8), mosquito fogger (+14.7), raccoon deterrent (+11.8). Several are outdoor, so this gain arrives in summer — [a8 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a8_top25_out.txt)

### Inferences
- The ranking depends on topic rates that are thin. Dehumidifier rests on 6 items in one month and sprayer on an unreliable residual. At the flat CA$0.41 per click, dehumidifier-for-mold falls to about CA$146 per 1,000 views.
- High money per view on a very small page does not mean much money. Pages 2-4 and 18 earn under CA$6 a month, because they get 10-13 Canadian views a month. The value of a rank gain follows existing traffic as well as rate.
- No un-upgraded page remains in the top 25, so the next step on these pages is to read the upgrades, not to upgrade again.

### Gaps
- Per-page dollars are modelled, and many click rates rest on under 50 clicks.
- The top 25 was not re-ranked with a season split, so outdoor pages reflect a window that includes August.

## Early read on the 60 upgraded pages against similar pages not upgraded

### Takeaway
It is too early. Only 50 of the 60 have any days after the upgrade (six), the difference from similar pages is indistinguishable from none, and a no-change placebo period produced a bigger apparent gap than the real one.

### Cited Findings
- **What can be measured.** The top 50 went live late on Oct 23 Toronto time (Oct 24 UTC). The last 10 (tier 4) went live Oct 29, so they have about a day of data. Tiers 2 and 3 went live Oct 28-29 and serve as "not yet upgraded" controls until then — [git log and a6 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a6_upgrade_out.txt); [TIER4-LOG.md](file:///C:/Users/buzzs/buzzskito-website/data/amazon/converters-2026-10-23/TIER4-LOG.md)

**GA4 Canada, Oct 3-23 against Oct 24-29 (off-season, season falling)** — [a6 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a6_upgrade_out.txt)

| Group | Pages | Views/day before → after | Amazon clicks/day before → after | Per 1,000 before → after | Clicks in after window |
|---|---:|---|---|---|---:|
| Top 50, upgraded | 50 | 81.6 → 72.5 | 23.5 → 20.0 | 288 → 276 | 120 |
| Tiers 2-4, not yet upgraded | 69 | 29.3 → 29.0 | 7.0 → 6.0 | 240 → 207 | 36 |
| Never upgraded | 123 | 27.3 → 33.8 | 2.5 → 1.7 | 92 → 49 | 10 |

| Difference-in-differences, top 50 vs tiers 2-4 (95% by page bootstrap) | Real | Placebo Sep 12-Oct 2 vs Oct 3-8 | Placebo Sep 26-Oct 16 vs Oct 17-22 |
|---|---|---|---|
| Views | x0.90 (0.64-1.26) | x1.10 (0.84-1.45) | x0.89 (0.69-1.20) |
| Amazon clicks | x1.00 (0.53-1.95) | x1.09 (0.68-2.00) | x1.87 (1.06-3.72) |
| Clicks per view | x1.11 (0.62-2.01) | x0.99 (0.59-1.61) | x2.11 (1.25-3.92) |

- Against never-upgraded pages, clicks read x1.29 (0.60-3.12) and clicks per view x1.80 (0.73-4.88), with similar placebo swings — [a6 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a6_upgrade_out.txt)
- By season group, top 50 vs all others: indoor clicks x1.43 (0.77-2.61, n=34 vs 106), outdoor clicks x0.34 (0.10-1.36, n=16 vs 86) — [a6 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a6_upgrade_out.txt)
- **Search Console, all countries, page dimension alone.** Position Oct 17-23 → Oct 25-30: top 50 7.4 → 7.2, tiers 2-4 8.1 → 7.5, never upgraded 7.7 → 7.2. Median page move Oct 10-23 → Oct 25-30: top 50 -0.15, tiers 2-4 -0.31, never -0.36 — [a6 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a6_upgrade_out.txt)
- **Head query, Oct 3-23 → Oct 25-30.** Top 50 (44 pages with 3+ later impressions): median move 0.76 better, 19 improved by 1+, 9 fell by 1+, in the top 3: 1 → 1. Tiers 2-3 (36 pages): 0.29 better, 13 improved, 8 fell, top 3: 1 → 2 — [a6 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a6_upgrade_out.txt)
- **Older evidence, pages upgraded Oct 15-16, two weeks on (Oct 1-14 vs Oct 23-29, pages later re-upgraded removed).** 23 pages against 48 controls. Head query in the top 3: 2 → 2 vs control 4 → 7. Median head-query move 0.4 worse vs control 0.2 better. Clicks/day +19% vs +2%, impressions/day +5% vs +12% — [a9 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a9_oct15_read_out.txt)
- The Oct 29 photo read found that gain came from 9 titles that dropped "Canada" or "Ontario", mostly a recovery, and that photos alone did nothing for web clicks. Click-through did not improve — [photo-upgrade-read-2026-10-29.md](file:///C:/Users/buzzs/buzzskito-website/data/god-build/photo-upgrade-read-2026-10-29.md)
- The earlier sizing said a one-way test on 30 pairs reliably catches only about +40% at 3 weeks — [reverse-engineering-2026-10-20.md](file:///C:/Users/buzzs/buzzskito-website/data/amazon/reverse-engineering-2026-10-20.md)

### Inferences
- Nothing can be claimed for or against the top 50 upgrade yet. The placebo shows this design can produce a "significant" x1.87 with no change at all.
- Two weeks of the earlier upgrades showed no top-3 movement, so rank-gain scenarios stay unproven. The first honest reads are the planned Nov 6-20 windows.
- These pages also got the Oct 20 top box and Oct 25 box fixes, and winter is arriving, so any later read still needs the tier 2-3 pages and season groups as controls, with tiers 2-3 having their own upgrade from Oct 28.

### Gaps
- Six days after the upgrade, 120 Amazon clicks and falling season traffic are not enough.
- Tiers 2-4 stop being a clean control from Oct 28-29.
- Whether upgraded pages sell more (not only click more) cannot be read by page.

## Backlinks and authority: what is known, and did linked pages do better?

### Takeaway
The site has about 4 real linking sites and none points at a product page, so the effect of links on product-page rank cannot be measured here. On the few pages that have real links the signal is weak and rests on 5 pages or fewer.

### Cited Findings
- **Latest count (Ahrefs, Oct 21, 2026):** DR 1.9, 401 live backlinks, 367 live referring domains, 56 with a followed link. About 355 of the 367 are automated junk. Real links: 4 (The Epoch Times, CityNews, homeowner.ca, knowanimals.com) — [link-plan.md](file:///C:/Users/buzzs/buzzskito-website/data/god-build/link-plan.md)
- **Where those links point:** four tick posts (Epoch), the homepage (CityNews), /mosquito-control-pricing (homeowner.ca), /blog/bugs-that-look-like-ticks (knowanimals). None is a product page — [link-plan.md](file:///C:/Users/buzzs/buzzskito-website/data/god-build/link-plan.md); [a8 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a8_top25_out.txt)
- **History:** DR 0.2 and about 9 domains (Jun 19) — [project_linkable_asset_hubs.md](file:///C:/Users/buzzs/.claude/projects/C--Users-buzzs-buzzskito-website/memory/project_linkable_asset_hubs.md); DR 0.7 and 50-51 domains vs Mosquito Man DR 4.7 and 503 (Jul 13) — [project_10x_blitz_jul2026.md](file:///C:/Users/buzzs/.claude/projects/C--Users-buzzs-buzzskito-website/memory/project_10x_blitz_jul2026.md); DR 0.5, 86 backlinks, 83 domains (Jul 27) — [project_affiliate_ceiling_analysis.md](file:///C:/Users/buzzs/.claude/projects/C--Users-buzzs-buzzskito-website/memory/project_affiliate_ceiling_analysis.md)
- **A conflict on authority:** the owner's correction says Ahrefs DR 1.9 is wrong for this site, Semrush Authority Score is 22, and authority should not be presented as the ceiling — [project_growth_plan_oct2026.md](file:///C:/Users/buzzs/.claude/projects/C--Users-buzzs-buzzskito-website/memory/project_growth_plan_oct2026.md). The later link audit says the Semrush score is probably lifted by the same spam and real authority should be treated as close to zero — [link-plan.md](file:///C:/Users/buzzs/buzzskito-website/data/god-build/link-plan.md)
- **The Jun 19 data hubs** were built to earn links; none has an editorial link yet, and they rank at 6.5-8.5 — [link-plan.md](file:///C:/Users/buzzs/buzzskito-website/data/god-build/link-plan.md)
- **Expectation:** 16 (cautious) to 39 (realistic) new real linking sites by Apr 30, 2027 at 15 minutes a day, of which 4-12 are strong. The 150-250 in the 50K plan is not reachable at that pace — [link-plan.md](file:///C:/Users/buzzs/buzzskito-website/data/god-build/link-plan.md)
- **Comparables:** DR 23-51 with 640-1,600 followed domains, but their winning pages have 0-4 links each, and bettertermite's links came after its traffic — [path-to-50k.md](file:///C:/Users/buzzs/buzzskito-website/data/god-build/path-to-50k.md)
- **US shopping results (not Canada, older Ahrefs teardowns):** a manufacturer page with DR 36 and zero referring domains ranks #5-6 on bed bug spray, while the editorial buyer's guide at thespruce.com (DR 90) sits at #18 — [bed-bug-spray.md](file:///C:/Users/buzzs/buzzskito-website/data/serp-teardowns/bed-bug-spray.md). On bug zapper every editorial page sits at 11 or below, including Wirecutter (DR 94) at #11, and shopping inventory holds the top — [bug-zapper.md](file:///C:/Users/buzzs/buzzskito-website/data/serp-teardowns/bug-zapper.md)
- **Canadian retailer hold:** canadiantire.ca holds positions 1, 3 and 5 on "thermacell canadian tire" — [project_affiliate_ceiling_analysis.md](file:///C:/Users/buzzs/.claude/projects/C--Users-buzzs-buzzskito-website/memory/project_affiliate_ceiling_analysis.md)

**Event study, page dimension alone, all countries (very small samples)** — [a8 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a8_top25_out.txt)

| Group | n | Position Jun | Jul | Aug | Sep | Oct | Note |
|---|---:|---:|---:|---:|---:|---:|---|
| Epoch Times links (first seen Jun 11) | 4 | 8.6 | 8.1 | 8.0 | 6.1 | 6.6 | Impression-weighted |
| Other tick posts, no known link | 26 | 7.2 | 7.2 | 9.7 | 8.2 | 8.0 | Impression-weighted |

- Per-page, May → Jul: linked -0.4 (n=4) vs others -0.2 (n=26). Jun → Jul: -1.2 (n=3) vs -0.2 (n=25) — [a8 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a8_top25_out.txt)
- The four linked pages split: tick-season 10.4 → 5.2 (Jun to Sep), what-ticks-look-like 8.8 → 6.7, but ultimate-tick-control-guide went 8.1 → 11.0 by Oct — [a8 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a8_top25_out.txt)
- The knowanimals link (Aug 27): bugs-that-look-like-ticks moved 0.5 better Aug → Oct with impressions x0.47, against 1.2 better and x0.75 for 52 similar pages (n=1) — [a8 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a8_top25_out.txt)
- /mosquito-control-pricing with the homeowner.ca link (Apr 25) went from 5.5 in April to 17.6 in October — [a8 output](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/product_yields/a8_top25_out.txt)

### Inferences
- The link evidence does not support a conclusion. The tick group's improvement rests on two pages, other edits happened to these pages, and two single-page cases point the other way or show nothing.
- On shopping results the barrier appears to be format and intent as much as links: retailers and product pages hold the top, and editorial reviews sit lower. That makes the top-3 scenarios unrealistic for review pages even with more links. This is based on US teardowns, so it is only indicative for Canada.
- At 4-12 strong new links by April, links are unlikely to deliver a site-wide gain of several positions by the 2027 peak. They may help specific pages if aimed at them.

### Gaps
- No page-level backlink data exists for product pages, and Ahrefs is cancelled, so no fresh pull was made.
- A measured test of links on product pages (for example, earning links to a few money pages against matched controls) has not been run.
- Canadian shopping SERP composition by query was not measured here.
