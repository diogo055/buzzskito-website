# Search Console review, Oct 18, 2026 (input to the Oct 20 work list)

**Data.** Search Console API, property `sc-domain:buzzskito.ca`, web search. Complete (final) data
runs to **Thursday Oct 15**. Friday Oct 16 and Saturday Oct 17 are Google's fresh, incomplete data
(the API reports `firstIncompleteDate` = Oct 16; Oct 17 holds about 40% of a normal day), so they
are marked and only used for the newest pages and for before/after reads against a control taken
on the same days. All pulls are single-dimension (page per single day, date, query filtered to one
page), so the multi-dimension row loss does not apply. URL Inspection: 41 URLs, run Oct 18. Scripts
and raw pulls were kept in the session scratchpad, not the repo.
Calendar note: Oct 20, 2026 is a Tuesday (the "Monday" list).

## In brief

- **Site:** week Oct 9-15 vs Oct 2-8: clicks 1,595 vs 1,646 (-3%), impressions 210,918 vs 196,325
  (+7%), CTR 0.76% vs 0.84%, position 6.97 vs 6.53. Without the 86 guides: clicks -8%, impressions
  -3%. The guides now add ~6,000 impressions a day (17%) but ~20 clicks a day (7%).
- **86 guides:** 80 have impressions, 43 have clicks: 27,454 impressions, 122 clicks (0.44%), median
  page position 8.0, rising from 798 impressions (Oct 11) to 6,129 (Oct 15) a day. Cockroach and
  mice pages carry the cohort; look-alike and remedy/product pages earn the clicks; how-to and
  service-shaped pages barely register.
- **62 pages of Oct 16:** 4 have impressions (15 in all). 26 of the 30 inspected are "URL is unknown
  to Google", including the 3 hubs and all 7 tick pages sampled. Google last read the sitemap on
  Oct 13, before these pages existed.
- **29 upgraded articles:** no detectable change yet and no page clearly dropped (1.4-2.4 days of
  data, much of it before Google recrawled the pages).
- **Problem:** the "casino canonical" folding is recurring. The 4 known pages are fixed (indexed,
  own canonical, impressions back), but 3 pages crawled Oct 16-17 were folded into foreign URLs:
  `does-vinegar-kill-ants` and `how-long-do-ants-live` into `www.747ph.live/`, and the new
  `wolf-spiders` into a `marcustheatres.com` page.

---

## 1. Site trend

| Date | Day | Clicks | Impressions | CTR | Position | Data |
|---|---|---|---|---|---|---|
| 2026-09-27 | Sun | 307 | 29,919 | 1.03% | 6.6 | final |
| 2026-09-28 | Mon | 296 | 30,616 | 0.97% | 6.1 | final |
| 2026-09-29 | Tue | 264 | 27,783 | 0.95% | 6.4 | final |
| 2026-09-30 | Wed | 265 | 27,329 | 0.97% | 6.5 | final |
| 2026-10-01 | Thu | 204 | 27,169 | 0.75% | 6.6 | final |
| 2026-10-02 | Fri | 218 | 26,954 | 0.81% | 6.5 | final |
| 2026-10-03 | Sat | 258 | 27,959 | 0.92% | 6.6 | final |
| 2026-10-04 | Sun | 224 | 28,849 | 0.78% | 6.7 | final |
| 2026-10-05 | Mon | 256 | 28,737 | 0.89% | 6.4 | final |
| 2026-10-06 | Tue | 247 | 27,798 | 0.89% | 6.4 | final |
| 2026-10-07 | Wed | 231 | 29,035 | 0.80% | 6.6 | final |
| 2026-10-08 | Thu | 212 | 26,993 | 0.79% | 6.6 | final |
| 2026-10-09 | Fri | 193 | 25,145 | 0.77% | 6.8 | final |
| 2026-10-10 | Sat | 200 | 24,681 | 0.81% | 6.9 | final |
| 2026-10-11 | Sun | 203 | 26,259 | 0.77% | 7.0 | final |
| 2026-10-12 | Mon | 267 | 32,583 | 0.82% | 6.9 | final |
| 2026-10-13 | Tue | 252 | 33,810 | 0.75% | 7.0 | final |
| 2026-10-14 | Wed | 239 | 32,944 | 0.73% | 6.9 | final |
| 2026-10-15 | Thu | 241 | 35,496 | 0.68% | 7.2 | final |
| 2026-10-16 | Fri | 208 | 33,850 | 0.61% | 7.3 | incomplete |
| 2026-10-17 | Sat | 73 | 13,404 | 0.54% | 7.8 | incomplete |

| Window | Clicks | Impressions | CTR | Position |
|---|---|---|---|---|
| Sep 25 - Oct 1 | 1,857 | 197,782 | 0.94% | 6.46 |
| Oct 2-8 | 1,646 | 196,325 | 0.84% | 6.53 |
| **Oct 9-15** | **1,595** | **210,918** | **0.76%** | **6.97** |
| Oct 9-15 without the 86 guides | 1,513 | 191,155 | 0.79% | - |
| Fri-Sat Oct 16-17 (incomplete) | 281 | 47,254 | 0.59% | 7.44 |
| Fri-Sat Oct 9-10 (same weekdays) | 393 | 49,826 | 0.79% | 6.87 |

What it means:
- Clicks have fallen two weeks running (-11%, then -3%; -8% on the pages older than the guides).
  Impressions rose only because of the guides: everything else is flat at ~28-29K a day.
- The CTR and position slide is mostly mix. The guides convert at 0.44% from position ~8 and now make
  17% of impressions (Oct 15: 6,129 of 35,496) but 7% of clicks (17 of 241).
- The decline is broad, and there is no sign the guides cannibalise the older pages. Older year-round
  pages: impressions -6.5%, clicks -13.5% week on week; older seasonal pages (mosquito, tick, biting
  fly, wasp; split by URL, approximate): -0.5% and -4.9%. The 68 older pages about the guides' own
  pests (bed bugs, ants, mice, rats, cockroaches) fell LESS (impressions -2.1%, clicks -10%) than the
  149 other year-round pages (-9.5%, -16.4%), and the big ones mostly held or grew
  (`how-to-get-rid-of-cockroaches-canada` 489 -> 732 impressions, `bed-bug-bites` 422 -> 893;
  `carpenter-ants-canada` slipped 393 -> 355).
- Oct 16-17 look weak (0.59% CTR) but are incomplete. Re-read them after Oct 20.

## 2. The 86 North American guides (published Oct 7-11)

Window Oct 7-17 (Oct 16-17 incomplete). First impressions Oct 9; pages with impressions per day:
Oct 11: 36, Oct 12: 46, Oct 13: 59, Oct 14: 67, Oct 15: 74 (86% of the cohort by day 8).
Cohort per day, impressions / clicks / position: Oct 12 3,259 / 24 / 7.7; Oct 13 4,088 / 15 / 8.0;
Oct 14 5,351 / 24 / 7.7; Oct 15 6,129 / 17 / 8.4. Impressions grow 15-30% a day; clicks are flat.

- **80 of 86 have impressions, 43 have clicks.** 27,454 impressions, 122 clicks, CTR 0.44%.
  Impressions per page: median 137, 75th percentile 365, max 3,297. Median page position 8.0.
- **Own target keyword:** 60 of 86 pages show impressions for their exact `keyword`; median position
  on it 11.1 (top 3: 2 pages; 4-10: 24; beyond 10: 34). Most impressions come from long-tail variants.

**Top 10**

| Page | Format | Impressions | Clicks | Position |
|---|---|---|---|---|
| /blog/bugs-that-look-like-cockroaches | look-alikes | 3,297 | 24 | 7.2 |
| /blog/steel-wool-for-mice | remedy/product | 1,809 | 10 | 8.0 |
| /blog/what-do-baby-cockroaches-look-like | photo ID | 1,727 | 3 | 8.0 |
| /blog/vamoose-for-mice | remedy/product | 1,516 | 14 | 6.5 |
| /blog/can-mice-climb-walls | question | 1,391 | 3 | 7.6 |
| /blog/can-cockroaches-fly | question | 1,263 | 2 | 7.9 |
| /blog/alaska-mosquitoes | place | 1,175 | 4 | 7.4 |
| /blog/what-do-bed-bugs-look-like | photo ID | 1,097 | 4 | 9.9 |
| /blog/are-mice-nocturnal | question | 1,059 | 3 | 7.7 |
| /blog/mice-traps | remedy/product | 824 | 1 | 6.2 |

**Bottom.** Six have no impressions at all: `baby-mice`, `field-mice`, `natural-pest-control` (never
crawled: "Discovered - currently not indexed"), `does-vinegar-kill-ants`, `how-long-do-ants-live`
(folded into a casino URL, section 5.1) and `zombie-ants` (not inspected). Under 25 impressions:
`lawn-pest-control` 3, `commercial-pest-control` 5, `how-to-get-rid-of-mosquitoes` 6 (position 20.8;
recrawl requested Oct 16), `how-much-is-pest-control` 9 (folded until Oct 16), `/learn/bed-bugs` 12,
`how-to-get-rid-of-ants-in-the-house` 19, `where-do-cockroaches-come-from` 20 (folded until Oct 16),
`ticks-on-dogs` 23 (position 25.9), `how-to-keep-mosquitoes-away` 24 (14.1).

**By format** (13 pages that Google had not indexed normally are left out, so a suppressed page does
not drag its format down; "per page per day" is over Oct 13-15, the last three complete days; CTR over
the whole window):

| Format | Pages | Impr per page per day (median / mean) | CTR | Position | Clicks (all 86) |
|---|---|---|---|---|---|
| look-alikes (bugs that look like X) | 2 | 338 / 338 | 0.69% | 7.3 | 24 |
| place (state or region) | 2 | 122 / 122 | 0.32% | 7.8 | 4 |
| question (can / are / what / where / how long) | 9 | 89 / 118 | 0.24% | 7.9 | 13 |
| photo ID (what X look like, types, signs) | 4 | 82 / 129 | 0.37% | 9.0 | 11 |
| remedy/product (does X work, X for mice, traps) | 13 | 57 / 97 | 0.65% | 6.9 | 44 |
| bites (do X bite) | 4 | 57 / 60 | 0.35% | 9.4 | 4 |
| species / topic | 13 | 41 / 40 | 0.32% | 9.7 | 8 |
| how-to (get rid of X) | 9 | 29 / 31 | 0.47% | 7.0 | 6 |
| hubs and chart | 5 | 23 / 24 | 0.48% | 9.1 | 3 |
| X vs Y | 1 | 21 / 21 | 0.00% | 24.6 | 0 |
| curiosity (bullet, army, zombie ants...) | 3 | 12 / 40 | 0.28% | 7.3 | 4 |
| service-shaped (pest control, exterminator, removal) | 8 | 8 / 16 | 0.17% | 10.7 | 1 |

**By cluster** (all 86):

| Cluster | Pages | With impr | Impressions | Median per page | Clicks | CTR | Position |
|---|---|---|---|---|---|---|---|
| cockroaches | 8 | 8 | 6,886 | 222 | 30 | 0.44% | 7.6 |
| bed bugs | 10 | 10 | 2,995 | 211 | 13 | 0.43% | 8.4 |
| mice | 21 | 19 | 9,630 | 204 | 49 | 0.51% | 7.3 |
| ants | 22 | 19 | 4,324 | 128 | 20 | 0.46% | 8.8 |
| mosquitoes | 5 | 5 | 1,705 | 105 | 5 | 0.29% | 8.1 |
| ticks | 9 | 9 | 1,133 | 67 | 4 | 0.35% | 11.3 |
| garden | 5 | 5 | 427 | 55 | 0 | 0.00% | 8.0 |
| pest-control | 6 | 5 | 354 | 7 | 1 | 0.28% | 10.0 |

What is working and what is not (small numbers: format and cluster overlap, and the look-alike row
is essentially one page):
- **Working:** cockroach pages (9% of the pages, 25% of the impressions) and mice pages (35% of the
  impressions, 40% of the clicks). Look-alikes (`bugs-that-look-like-cockroaches` alone: 3,297
  impressions, 24 clicks; but `bugs-that-look-like-bed-bugs` has only 165). Remedy/product pages
  earn the most clicks (44 of 122) at the best CTR after look-alikes (0.65%).
- **Impressions without clicks:** questions (0.24% CTR, the lowest of the formats with real volume: Google answers
  them on the results page, as the July data on quick-fact pages showed) and photo-ID pages at
  position ~9-10 (0.37%).
- **Not working:** service-shaped pages (10 pages, 587 impressions, 1 click), how-to head terms
  (`how-to-get-rid-of-ants-in-the-house` 19 impressions, `how-to-keep-mosquitoes-away` 24),
  ticks (median 67, position 11.3; `ticks-in-michigan` 67 impressions at 14.1, 0 clicks) and garden
  (0 clicks). X vs Y: no verdict (2 pages, one of them folded until Oct 15).

Per-page table with each page's target-keyword position and top query: Appendix A.

## 3. The 62 pages released Oct 16

(37 tick pages, then the 25 photo-ID pages in batches of 12, 3, 8 and 2 the same day.)

- **Impressions so far (Oct 16-17, incomplete):** 4 pages, 15 impressions, 0 clicks:
  `bugs-that-look-like-fleas` 7 (position 5.3), `tiny-black-bugs` 5 (4.4), `how-to-get-rid-of-fleas`
  2 (5.5), `asian-lady-beetles` 1 (1.0). None of the 37 tick pages.
- **URL Inspection of 30** (all 3 hubs, 7 tick pages, the 20 photo-ID pages without impressions):

| Result | Count | Pages |
|---|---|---|
| URL is unknown to Google | 26 | all 3 hubs (`/learn/ticks-by-state`, `/learn/ticks-by-province`, `/learn/bug-bites`), all 7 tick pages, 16 photo-ID pages |
| Submitted and indexed, own canonical | 3 | `pantry-pests` (crawled Oct 17 09:08 UTC), `bugs-in-house-in-winter` (Oct 17 07:22), `house-centipedes` (Oct 18 01:49) |
| Duplicate without user-selected canonical | 1 | `wolf-spiders` (crawled Oct 17 04:57), Google canonical `https://www.marcustheatres.com/theatre-locations/point-cinema` |

- **How Google found the four it knows:** through links from other new pages (`pantry-pests` from
  `bugs-that-look-like-fleas`, `wolf-spiders` from `bugs-in-house-in-winter`), none through the sitemap.
- **Sitemap:** `sitemap.xml` was last downloaded **Oct 13 15:31:34 UTC**, two seconds after it was
  submitted (619 URLs, 0 errors, 0 warnings). Google has not re-read it since, so its copy holds none
  of the 62 pages.
- **Benchmark:** the 86 guides had impressions on 36 pages by day 3-4 and on 74 (86%) by day 8. The
  Oct 16 batch is behind that pace at day 2; its 7-day mark is Oct 23.

Details for all 41 inspected URLs: Appendix B.

## 4. The upgraded articles (photos and new titles, Oct 15-16)

The two sets in `app/sitemap.ts` hold **29** slugs (9 in `ARTICLES_PHOTOS_OCT15`, 20 in
`ARTICLES_PHOTOS_OCT16`), not 30.

**Read this as a smoke test.** The Oct 15 set has one complete day (Oct 15) plus the two incomplete
ones; the Oct 16 set has only the two incomplete days, and its changes went live during Oct 16 UTC.
Google shows a new title only after it recrawls a page, so much of the "after" window still measures
the old version. Before = the same weekdays in Oct 1-14; control = 189 untouched /blog/ articles with
150+ impressions in Oct 1-14, on the same days.

| Set | CTR before -> after | Clicks after vs expected (after the control's CTR change) | Impressions per day | Control impressions |
|---|---|---|---|---|
| Oct 15 (9 pages) | 0.88% -> 0.73% | 50 vs 55.1 (z -0.7) | 3,208 -> 2,276 (x0.71) | seasonal control x0.81 |
| Oct 16 (20 pages) | 0.64% -> 0.72% | 31 vs 27.5 (z +0.7) | 3,060 -> 2,164 (x0.71) | control x0.58 (same incomplete days) |

- **No page dropped clearly** (no page at z -2 or worse on clicks; no clear impression loss with an
  unchanged control).
- **Watch:** `bugs-that-look-like-ticks` CTR 1.32% -> 0.82% (12 clicks vs ~17.6 expected after the
  control, z about -1.3; head query "bugs that look like ticks" 2.4% -> 0 on 56 impressions);
  `tick-bite-vs-mosquito-bite` impressions x0.59 against the control with CTR unchanged (1.16% ->
  1.14%: demand, not the title); `how-to-get-rid-of-boxelder-bugs-canada` x0.53 (position improved
  8.7 -> 7.3); `baby-ticks-nymphs-seed-ticks-ontario` x0.46 (73 -> 20 a day);
  `what-kills-bed-bugs-instantly-canada` CTR 0.50% -> 0.16% (1 click vs 3.1).
- **Early positives (tiny counts):** `flea-bites-on-humans` 4 clicks vs 1.3 expected, impressions x1.49;
  `bed-bug-stains-poop-droppings-canada` 4 vs 1.4; `how-to-get-rid-of-cluster-flies-canada` 4 vs 1.4;
  `mouse-repellent-canada` impressions x2.69; `what-does-mouse-poop-look-like-canada` x1.65.
- The Oct 29-30 read stays the real test. Per-page table: Appendix C.

## 5. Problems

### 5.1 Pages folded into foreign URLs: recurring, not a one-off (the most important finding)

- **The four known pages are fixed.** `do-mothballs-keep-mice-away`, `how-much-is-pest-control`,
  `water-bugs-vs-cockroaches`, `where-do-cockroaches-come-from`: "Submitted and indexed", Google
  canonical = their own URL, recrawled Oct 16 03:28-03:47 UTC. Impressions per day went from 0
  (Oct 7-14) to 60/49, 5/4, 29/25 and 7/13 on Oct 16/17. The other three re-requested that day also
  came back: `honeypot-ants` 0 -> 21-28 a day, `types-of-mice` 0 -> 10-16, `how-to-get-rid-of-mosquitoes`
  0 -> 1-5.
- **Three more since.** `does-vinegar-kill-ants` (crawled Oct 16 11:28 UTC) and `how-long-do-ants-live`
  (Oct 16 12:07): "Duplicate without user-selected canonical", Google canonical `https://www.747ph.live/`.
  `wolf-spiders` (released Oct 16, crawled Oct 17 04:57): Google canonical
  `https://www.marcustheatres.com/theatre-locations/point-cinema`.
- **Google did not see our page.** For all three, Google reports no declared canonical and no
  structured data in the version it crawled, while correctly indexed pages show both (Breadcrumbs
  detected). The live pages, fetched Oct 18 with Googlebot's smartphone user agent and with a browser
  one, return 200, the self canonical, 14 JSON-LD blocks and the right title. So Google stored
  something other than the page we serve and matched it to unrelated pages on other sites.
- **Rate:** 3 of the 10 inspected pages crawled since Oct 16. At least 6 of the 86 guides have been
  folded at some point (4 fixed, 2 now), plus 3 more that had no impressions until re-requested.
- **Probably not a deploy artefact:** the last commit on main is from Oct 16 20:36 UTC, eight hours
  before the `wolf-spiders` crawl, and Vercel skew protection is on (asset URLs carry `?dpl=`).
- **One candidate to test (not proven):** the repo has no `app/error.tsx` or `app/global-error.tsx`.
  If hydration fails in Google's renderer (for example a JavaScript file that fails to load), Next.js
  replaces the page with its generic "Application error" screen, which is the same on every Next.js
  site; that would explain matches to random domains. The Search Console live test (URL Inspection >
  Test live URL > View tested page: screenshot, page resources, JavaScript console) on `wolf-spiders`
  would show what Google renders. The API cannot run live tests.

### 5.2 New pages are not being discovered

See section 3: sitemap last read Oct 13; 26 of 30 new pages unknown after two days, including the
three hubs (the two tick hubs are the pages meant to lead Google to the 35 tick state and province
pages).

### 5.3 Three guides never crawled

`baby-mice`, `field-mice`, `natural-pest-control`: "Discovered - currently not indexed", no crawl in
the 7-11 days since release (Google knows each from the sitemap and from one linking guide).

### 5.4 Pages losing in the last complete week (Oct 9-15 vs Oct 2-8)

Flagged = 300+ impressions in Oct 2-8 and impressions below half the site's ratio, or position worse
by 3+:

| Page | Impressions | Clicks | Position | Reading |
|---|---|---|---|---|
| /blog/best-mosquito-repellent-device-canada | 350 -> 142 | 0 -> 0 | 10.8 -> 11.1 | season |
| /blog/smells-mosquitoes-hate | 2,330 -> 1,047 | 7 -> 4 | 3.1 -> 3.3 | season (position held) |
| /blog/bed-bug-spray-canada | 484 -> 313 | 9 -> 13 | 6.0 -> 10.2 | the lost impressions are "bed bug spray canadian tire" (52 -> 18, 0 clicks both weeks): a retailer query; no money lost |

Largest absolute losses, all seasonal: `why-do-mosquito-bites-itch` 7,938 -> 5,840 impressions (clicks
30 -> 25); `how-many-times-can-a-mosquito-bite-you` clicks 101 -> 71 (position 4.9 -> 5.5); wasp pages
(`how-to-get-rid-of-ground-wasps-canada` clicks 27 -> 11, `wasp-dust-canada` 44 -> 24,
`best-wasp-nest-spray-canada` impressions 1,841 -> 1,134). One CTR drop at an unchanged position:
`can-mosquitoes-bite-through-clothes`, 3,398 -> 2,963 impressions but clicks 19 -> 5 at position 5.6
both weeks (16.6 expected, z -2.8); its Google title or snippet is worth one look.

### 5.5 Pages that left the results

- `cluster-flies-in-house-canada`: ~30 impressions a day until Oct 10, 1 on Oct 11, 0 since. Still
  indexed (last crawl Oct 4, own canonical). Its queries moved to `how-to-get-rid-of-cluster-flies-canada`,
  which went from 54-60 a day (Oct 8-10) to 74-137 a day (Oct 11-14): Google now treats the two as
  one topic.
- `when-to-worry-about-a-mosquito-bite`: 73 impressions in Oct 2-8, 0 since; "Crawled - currently not
  indexed" (last crawl Sep 29).
- `advion-cockroach-gel-bait-canada` and `raccoon-deterrent-canada` went to zero because they redirect
  to their renamed pages by design.

### 5.6 Retrofit pilot to re-check

`why-do-mosquito-bites-itch`: 2-4 clicks a day Oct 10-15 (0.39% CTR), then 0 clicks on 1,101 impressions
Oct 16-17 (about 4.3 expected; chance of 0 by luck ~1.4%) at an unchanged position (7.2-7.9). But the
retrofit went live about 19:12 UTC Oct 16 (midday of Google's Pacific-time day, so the zero started
before the change), its title did not change, and both days are incomplete. Re-check on Oct 21-22 with
final data before touching it.

### 5.7 Checked and fine

6 impressions in 23 days on `www.buzzskito.ca` (no duplicate host problem); URLs with `#...` are
Google's own jump links; sitemap 0 errors and 0 warnings.

## 6. Recommendations for the Oct 20 list

### Add

1. **Owner, about 5 minutes in Search Console:** resubmit `sitemap.xml` (and after every release), then
   "Request indexing" (about 10 a day allowed) for `/learn/ticks-by-state`, `/learn/ticks-by-province`,
   `/learn/bug-bites`, `/blog/wolf-spiders`, `/blog/does-vinegar-kill-ants`, `/blog/how-long-do-ants-live`,
   `/blog/baby-mice`, `/blog/field-mice`. Evidence: sitemap last read Oct 13; 26 of 30 new pages unknown
   to Google after two days, all hubs included; the 7 pages re-requested on Oct 16 went from 0 to 1-60
   impressions a day within a day.
2. **Before the first new-page release of the week: one live test on `wolf-spiders`** (screenshot,
   page resources, JavaScript console) to find what Google renders when it folds a page. Evidence: 3 of
   10 pages crawled since Oct 16 folded into casino or theatre URLs, with no canonical and no structured
   data seen. At that rate a 50-page week would lose 4-15 pages until each is re-requested by hand.
3. **A URL-inspection sweep of every release 3-5 days after it goes live** (up to 40 API calls a batch,
   the same script as this review), re-requesting any page that is unknown or folded, and recording
   the fold rate.
4. **Velocity gate:** keep the Oct 20 release at the planned 18 new pages. Move to 50-60 a week only if
   by Oct 23 at least 80% of the Oct 16 batch is indexed (the 86 guides managed 86% in 8 days) and the
   fold rate is below about 5%.

### Change

5. **Retrofit batch 1:** skip the 14 pages among retrofit-order #2-21 that were upgraded on Oct 15-16.
   The brief protects only their titles; a body retrofit now would mix two changes and spoil the
   Oct 29-30 read. 15 of those 20 are mosquito, tick or biting-fly topics whose scores come from 90-day
   peak-season demand (Trends puts ticks and mosquitoes at ~20% of peak in Nov-Dec). Start with the
   untouched year-round pages next in the order: `baby-bed-bugs-nymphs`, `carpenter-ants-canada`,
   `bed-bug-bites`, `what-do-baby-cockroaches-look-like`, `red-ants`, `tiny-ants`, `do-carpenter-ants-bite`,
   `do-ants-bite`, `signs-of-bed-bugs-checklist`, `bed-bugs-on-mattress`, `do-cockroaches-bite`. Only the
   first three are older articles with a stable baseline; the rest are guides from Oct 7-11 still
   ramping up (cohort impressions +15-30% a day), so a before/after read on them would credit the
   ramp to the retrofit: retrofit half of them and keep similar guides untouched as the comparison. Remove
   `cluster-flies-in-house-canada` (0 impressions since Oct 12; its sibling took the queries),
   `when-to-worry-about-a-mosquito-bite` (out of the index) and `baby-mice` (never crawled). The six
   Oct 16 pages in the order (`brown-recluse-bite`, `bugs-in-house-in-winter`, `cockroach-eggs`,
   `flea-eggs`, `house-spiders`, `pantry-pests`) can take the new blocks now at no risk (Google has seen
   at most one crawl of each), but count them as template catch-up, not as retrofits to measure.
6. **Winter batch order:** release the identification-led pages first (`kissing-bug-look-alikes`,
   `tiny-brown-bugs`, `black-spiders`, `beetles-in-house`, `animal-droppings`, `termite-damage`,
   `millipedes`, `moths-in-house`, `flies-in-house`, `houseplant-bugs`) and `how-to-get-rid-of-cockroaches`
   (cockroach is the strongest cluster: 9% of the guides, 25% of their impressions), then the two
   wildlife pages (`animals-in-attic`, `holes-in-yard`: new cluster, no data yet), and
   `how-to-get-rid-of-silverfish`, `-earwigs` and `-gnats` last. Evidence: among normally indexed guides,
   median impressions per page per day are look-alikes 338, questions 89, photo ID 82, remedy/product 57,
   bites 57, how-to 29.
7. **Hold the US twins of two pages under measurement and use the slots for droppings pages:**
   if `how-to-get-rid-of-drain-flies` and `how-to-get-rid-of-boxelder-bugs` are wired as regional pairs
   (hreflang, like the last three twins) with `how-to-get-rid-of-drain-flies-canada` and
   `how-to-get-rid-of-boxelder-bugs-canada`, both upgraded Oct 16, the pairing moves US impressions off
   the Canadian pages and contaminates the Oct 29-30 read (the boxelder page already reads x0.53); and
   how-to is the weakest content format (29 impressions per page per day). Release them after Oct 30. Swap in
   `cockroach-droppings` and `rat-droppings` (the comparables list), which GSC backs: mice pages carry
   40% of the guides' clicks (49 of 122) and cockroach pages the best per-page impressions. If
   `how-to-get-rid-of-cockroaches` is paired with the Canadian page, leave that Canadian page out of the
   Oct 29-30 read.

### Drop

8. **No more service-shaped US pages** (pest control, exterminator, removal): 10 guides, 587 impressions
   and 1 click in 11 days. Add them to the do-not-build list.
9. **Pure yes/no question pages, unless photos are the answer:** they collect impressions (median 89 a
   day) at the lowest CTR of the formats with real volume (0.24%).

### Keep

10. The Oct 29-30 read of the 29 upgrades: nothing to roll back (sets at z -0.7 and +0.7).
11. Re-check `why-do-mosquito-bites-itch` on Oct 21-22 (section 5.6) before any rollback.
12. The tick and mosquito series stays in January-February: ticks are the weakest cluster among the
    guides (median 67 impressions, position 11.3), and none of the 7 tick pages or 2 tick hubs sampled
    from the Oct 16 release is known to Google yet.
13. Low priority: look at the title Google shows for `can-mosquitoes-bite-through-clothes` (clicks
    19 -> 5 at an unchanged position; about 14 clicks a week at stake).

---

## Appendix A. The 86 guides, page by page (Oct 7-17; Oct 16-17 incomplete)

"Kw pos" = average position on the page's own target keyword (blank = Google shows no impressions for that exact query). Sorted by impressions.

| # | Page | Format | Cluster | Impr | Clicks | CTR | Pos | Impr Oct 13-15 | First impr | Kw pos | Top query (impr, pos) |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | /blog/bugs-that-look-like-cockroaches | look-alikes | cockroaches | 3,297 | 24 | 0.7% | 7.2 | 1892 | 10-11 | 7.8 | bugs that look like cockroaches (208, 7.8) |
| 2 | /blog/steel-wool-for-mice | remedy/product | mice | 1,809 | 10 | 0.6% | 8.0 | 988 | 10-11 | 6.9 | steel wool for mice (29, 6.9) |
| 3 | /blog/what-do-baby-cockroaches-look-like | photo ID | cockroaches | 1,727 | 3 | 0.2% | 8.0 | 1002 | 10-11 | 14.8 | baby cockroach (200, 8.6) |
| 4 | /blog/vamoose-for-mice | remedy/product | mice | 1,516 | 14 | 0.9% | 6.5 | 869 | 10-11 | 6.7 | vamoose pro (138, 6.2) |
| 5 | /blog/can-mice-climb-walls | question | mice | 1,391 | 3 | 0.2% | 7.6 | 846 | 10-11 | 11.0 | can mice climb walls (80, 11.0) |
| 6 | /blog/can-cockroaches-fly | question | cockroaches | 1,263 | 2 | 0.2% | 7.9 | 747 | 10-11 | 9.9 | can cockroaches fly (113, 9.9) |
| 7 | /blog/alaska-mosquitoes | place | mosquitoes | 1,175 | 4 | 0.3% | 7.4 | 683 | 10-11 | 10.8 | alaskan mosquito (255, 9.5) |
| 8 | /blog/what-do-bed-bugs-look-like | photo ID | bed-bugs | 1,097 | 4 | 0.4% | 9.9 | 427 | 10-14 | 13.4 | how big are bed bugs (194, 9.1) |
| 9 | /blog/are-mice-nocturnal | question | mice | 1,059 | 3 | 0.3% | 7.7 | 586 | 10-11 | 8.1 | are mice nocturnal (277, 8.1) |
| 10 | /blog/mice-traps | remedy/product | mice | 824 | 1 | 0.1% | 6.2 | 352 | 10-09 |  | what is the 5 day mouse rule? (3, 19.7) |
| 11 | /blog/what-smells-do-mice-hate | remedy/product | mice | 660 | 6 | 0.9% | 6.4 | 441 | 10-11 | 16.9 | what smells do mice hate (33, 16.9) |
| 12 | /blog/what-do-mice-eat | question | mice | 642 | 3 | 0.5% | 8.2 | 334 | 10-13 | 10.2 | what do mice eat (50, 10.2) |
| 13 | /blog/how-many-ants-are-in-the-world | curiosity | ants | 522 | 2 | 0.4% | 7.5 | 25 | 10-15 | 8.2 | how many ants are in the world (57, 8.2) |
| 14 | /blog/do-ants-bite | bites | ants | 502 | 1 | 0.2% | 9.2 | 307 | 10-13 | 8.2 | do ants bite or sting (13, 8.2) |
| 15 | /blog/how-to-get-rid-of-bed-bugs | how-to | bed-bugs | 430 | 2 | 0.5% | 6.5 | 329 | 10-13 | 9.8 | how to get rid of bed bugs (21, 9.8) |
| 16 | /blog/army-ants | curiosity | ants | 428 | 0 | 0.0% | 6.7 | 298 | 10-12 | 6.2 | army ants (56, 6.2) |
| 17 | /blog/are-mosquitoes-attracted-to-light | question | mosquitoes | 395 | 0 | 0.0% | 8.6 | 263 | 10-13 | 9.2 | are mosquitoes attracted to light (183, 9.2) |
| 18 | /learn/ant-killer-recipes | remedy/product | ants | 392 | 5 | 1.3% | 4.8 | 255 | 10-11 |  | ants recipe (3, 5.3) |
| 19 | /blog/does-alcohol-kill-bed-bugs | remedy/product | bed-bugs | 378 | 1 | 0.3% | 7.4 | 252 | 10-13 | 12.1 | does alcohol kill bed bugs (8, 12.1) |
| 20 | /blog/tiny-ants | species/topic | ants | 372 | 3 | 0.8% | 7.2 | 241 | 10-12 | 6.3 | how to identify ants in house (12, 6.1) |
| 21 | /blog/what-do-ants-eat | question | ants | 369 | 1 | 0.3% | 8.2 | 266 | 10-12 | 23.7 | what do ants eat (10, 23.7) |
| 22 | /blog/black-bed-bugs | species/topic | bed-bugs | 365 | 1 | 0.3% | 7.3 | 240 | 10-13 | 8.3 | are bed bugs black (48, 8.5) |
| 23 | /blog/seed-ticks | species/topic | ticks | 355 | 0 | 0.0% | 8.6 | 181 | 10-11 | 15.3 | what do baby ticks look like (29, 9.7) |
| 24 | /learn/pet-safe-pest-control | service-shaped | pest-control | 300 | 1 | 0.3% | 10.4 | 193 | 10-11 | 17.7 | mosquito bowl (4, 48.5) |
| 25 | /blog/mice-repellent | remedy/product | mice | 296 | 2 | 0.7% | 6.1 | 160 | 10-11 | 16.0 | does mouse repellent work (4, 9.0) |
| 26 | /blog/do-cockroaches-bite | bites | cockroaches | 290 | 1 | 0.3% | 9.5 | 145 | 10-14 | 22.1 | cockroach bites (9, 6.8) |
| 27 | /blog/red-ants | species/topic | ants | 286 | 0 | 0.0% | 11.9 | 150 | 10-11 | 10.4 | red ants (59, 10.4) |
| 28 | /learn/tick-identification-chart | hub/chart | ticks | 271 | 1 | 0.4% | 8.7 | 162 | 10-11 | 9.0 | tick identification chart (36, 9.0) |
| 29 | /blog/do-carpenter-ants-bite | bites | ants | 259 | 1 | 0.4% | 8.7 | 197 | 10-12 | 13.6 | carpenter ant bite (22, 9.3) |
| 30 | /blog/fall-mouse-proofing-checklist | how-to | mice | 258 | 2 | 0.8% | 5.2 | 136 | 10-11 |  | how to prevent rodents from entering homes during autumn (2, 1.0) |
| 31 | /blog/does-lysol-kill-bed-bugs | remedy/product | bed-bugs | 257 | 1 | 0.4% | 7.3 | 172 | 10-13 | 14.0 | can disinfectant spray kill bugs (8, 8.0) |
| 32 | /blog/flying-ants | species/topic | ants | 237 | 1 | 0.4% | 10.8 | 169 | 10-12 | 21.2 | flying ants (11, 21.2) |
| 33 | /blog/how-long-do-mice-live | question | mice | 221 | 1 | 0.5% | 7.8 | 84 | 10-14 | 11.2 | how long do mice live (15, 11.2) |
| 34 | /blog/mice-poison | remedy/product | mice | 204 | 0 | 0.0% | 7.2 | 150 | 10-13 | 9.4 | mice poison (5, 9.4) |
| 35 | /blog/sugar-ants | species/topic | ants | 204 | 1 | 0.5% | 10.3 | 131 | 10-11 | 15.8 | sugar ants (22, 15.8) |
| 36 | /blog/what-kills-ticks-on-dogs-instantly | remedy/product | ticks | 175 | 1 | 0.6% | 8.3 | 109 | 10-11 | 9.2 | what kills ticks on dogs instantly (105, 9.2) |
| 37 | /blog/bugs-that-look-like-bed-bugs | look-alikes | bed-bugs | 165 | 0 | 0.0% | 9.2 | 139 | 10-13 | 12.2 | bugs that look like bed bugs (8, 12.2) |
| 38 | /blog/how-to-get-rid-of-mice-humanely | how-to | mice | 159 | 2 | 1.3% | 10.5 | 91 | 10-11 | 9.9 | how to get rid of mice humanely (27, 9.9) |
| 39 | /blog/deer-mice | species/topic | mice | 158 | 1 | 0.6% | 5.9 | 123 | 10-13 | 1.2 | deer mice (57, 1.2) |
| 40 | /blog/bed-bugs-on-mattress | species/topic | bed-bugs | 156 | 1 | 0.6% | 11.6 | 97 | 10-13 | 18.3 | bedbugs on mattress (11, 13.7) |
| 41 | /learn/cockroaches | hub/chart | cockroaches | 155 | 0 | 0.0% | 6.8 | 87 | 10-11 | 5.8 | cockroach (54, 2.8) |
| 42 | /learn/whitefly-identification-control | how-to | garden | 148 | 0 | 0.0% | 6.4 | 97 | 10-11 | 30.5 | how to get rid of whiteflies (2, 30.5) |
| 43 | /learn/how-to-get-rid-of-fungus-gnats | how-to | garden | 141 | 0 | 0.0% | 5.5 | 87 | 10-11 |  | fungus gnats (3, 8.3) |
| 44 | /blog/bullet-ants | curiosity | ants | 133 | 1 | 0.8% | 8.5 | 35 | 10-14 | 7.0 | bullet ant (15, 1.6) |
| 45 | /blog/borax-for-ants | remedy/product | ants | 123 | 2 | 1.6% | 6.9 | 17 | 10-15 |  | indoxacarb vs borax (3, 6.7) |
| 46 | /blog/ghost-ants | species/topic | ants | 120 | 0 | 0.0% | 7.5 | 79 | 10-11 | 7.1 | ghost ants (21, 7.1) |
| 47 | /blog/do-mothballs-keep-mice-away | remedy/product | mice | 109 | 0 | 0.0% | 7.3 | 0 | 10-16 | 10.0 | do moth balls keep mice away (3, 10.0) |
| 48 | /blog/mice-exterminator | service-shaped | mice | 109 | 0 | 0.0% | 9.6 | 78 | 10-11 |  | mice exterminator cost (5, 16.4) |
| 49 | /blog/do-mosquitoes-bite-dogs | bites | mosquitoes | 105 | 1 | 1.0% | 11.9 | 75 | 10-11 | 44.6 | do mosquitoes bite dogs (7, 44.6) |
| 50 | /learn/mice | hub/chart | mice | 105 | 1 | 1.0% | 6.9 | 70 | 10-12 |  | chipptips mice (1, 1.0) |
| 51 | /blog/signs-of-bed-bugs-checklist | photo ID | bed-bugs | 91 | 3 | 3.3% | 5.3 | 63 | 10-11 |  | bed bug (1, 5.0) |
| 52 | /blog/black-ants | species/topic | ants | 90 | 0 | 0.0% | 15.6 | 45 | 10-14 | 15.5 | black ants in house (6, 21.2) |
| 53 | /blog/what-do-ticks-look-like | photo ID | ticks | 90 | 1 | 1.1% | 20.6 | 54 | 10-14 | 26.5 | what does a tick look like (7, 22.1) |
| 54 | /blog/flying-ants-vs-termites | X vs Y | ants | 89 | 0 | 0.0% | 24.6 | 63 | 10-13 | 24.1 | flying ants vs termites (8, 24.1) |
| 55 | /blog/german-cockroaches | species/topic | cockroaches | 77 | 0 | 0.0% | 6.5 | 49 | 10-14 | 5.5 | german cockroach (13, 9.0) |
| 56 | /learn/ants | hub/chart | ants | 77 | 1 | 1.3% | 18.2 | 36 | 10-11 |  | tiny red ants ontario (6, 85.5) |
| 57 | /blog/ticks-in-michigan | place | ticks | 67 | 0 | 0.0% | 14.1 | 52 | 10-12 | 51.5 | tick identification michigan (2, 17.0) |
| 58 | /blog/do-chickens-eat-ticks | question | ticks | 58 | 0 | 0.0% | 10.3 | 42 | 10-11 | 11.2 | do chickens eat ticks (12, 11.2) |
| 59 | /blog/water-bugs-vs-cockroaches | X vs Y | cockroaches | 57 | 0 | 0.0% | 10.3 | 3 | 10-15 |  | are giant water bugs related to cockroaches (1, 9.0) |
| 60 | /learn/aphid-control-guide | how-to | garden | 55 | 0 | 0.0% | 11.1 | 30 | 10-11 | 14.0 | get rid of aphids (2, 58.0) |
| 61 | /blog/honeypot-ants | curiosity | ants | 52 | 1 | 1.9% | 6.8 | 3 | 10-15 | 3.4 | honeypot ants (5, 3.4) |
| 62 | /blog/ticks-that-carry-lyme-disease | species/topic | ticks | 52 | 0 | 0.0% | 31.6 | 30 | 10-11 |  | deer ticks can be carriers of either lyme disease (5, 6.4) |
| 63 | /blog/how-to-get-rid-of-ants-in-the-kitchen | how-to | ants | 50 | 0 | 0.0% | 7.7 | 34 | 10-12 | 22.7 | how to get rid of ants in kitchen (3, 22.7) |
| 64 | /learn/natural-weed-control | service-shaped | garden | 45 | 0 | 0.0% | 8.4 | 23 | 10-11 | 16.5 | natural weed control canada (2, 12.5) |
| 65 | /blog/where-do-bed-bugs-hide | question | bed-bugs | 44 | 0 | 0.0% | 8.9 | 30 | 10-14 | 16.0 | where do bed bugs hide during the day (3, 16.3) |
| 66 | /blog/peppermint-oil-for-mice | remedy/product | mice | 42 | 0 | 0.0% | 7.1 | 1 | 10-15 | 1.0 | what does peppermint oil do to mice (3, 9.3) |
| 67 | /blog/what-kills-ticks | remedy/product | ticks | 42 | 1 | 2.4% | 7.8 | 26 | 10-11 |  | does gasoline kill ticks (1, 9.0) |
| 68 | /blog/mice-removal | service-shaped | mice | 41 | 0 | 0.0% | 13.2 | 28 | 10-11 |  | how to remove a mouse from your house (2, 47.5) |
| 69 | /learn/natural-garden-pest-control | service-shaped | garden | 38 | 0 | 0.0% | 18.2 | 19 | 10-11 |  | "university of minnesota" hubbard (5, 30.0) |
| 70 | /blog/diy-pest-control | service-shaped | pest-control | 37 | 0 | 0.0% | 8.7 | 31 | 10-12 |  | do it pest control (3, 32.0) |
| 71 | /blog/types-of-mice | photo ID | mice | 27 | 0 | 0.0% | 5.9 | 1 | 10-15 | 9.0 | do mice have white bellies (1, 1.0) |
| 72 | /blog/how-to-keep-mosquitoes-away | how-to | mosquitoes | 24 | 0 | 0.0% | 14.1 | 19 | 10-13 | 14.0 | mosquito repellent (3, 22.0) |
| 73 | /blog/ticks-on-dogs | species/topic | ticks | 23 | 0 | 0.0% | 25.9 | 16 | 10-11 | 71.0 | ticks on dogs (2, 71.0) |
| 74 | /blog/where-do-cockroaches-come-from | question | cockroaches | 20 | 0 | 0.0% | 7.0 | 0 | 10-16 | 9.5 | where do cockroaches come from (4, 9.5) |
| 75 | /blog/how-to-get-rid-of-ants-in-the-house | how-to | ants | 19 | 0 | 0.0% | 7.3 | 10 | 10-12 | 53.0 | does spraying around the perimeter of your home actually keep ants from getting inside? (3, 1.0) |
| 76 | /learn/bed-bugs | hub/chart | bed-bugs | 12 | 0 | 0.0% | 7.3 | 0 | 10-16 |  | bed bug identification (9, 7.2) |
| 77 | /blog/how-much-is-pest-control | service-shaped | pest-control | 9 | 0 | 0.0% | 4.8 | 0 | 10-16 |  | - |
| 78 | /blog/how-to-get-rid-of-mosquitoes | how-to | mosquitoes | 6 | 0 | 0.0% | 20.8 | 0 | 10-16 |  | get rid of mosquitoes (2, 48.5) |
| 79 | /blog/commercial-pest-control | service-shaped | pest-control | 5 | 0 | 0.0% | 1.0 | 0 | 10-16 |  | - |
| 80 | /blog/lawn-pest-control | service-shaped | pest-control | 3 | 0 | 0.0% | 21.0 | 3 | 10-15 |  | lawn insect control (1, 44.0) |
| 81 | /blog/baby-mice | species/topic | mice | 0 | 0 | 0.0% | - | 0 |  |  | - |
| 82 | /blog/does-vinegar-kill-ants | remedy/product | ants | 0 | 0 | 0.0% | - | 0 |  |  | - |
| 83 | /blog/field-mice | species/topic | mice | 0 | 0 | 0.0% | - | 0 |  |  | - |
| 84 | /blog/how-long-do-ants-live | question | ants | 0 | 0 | 0.0% | - | 0 |  |  | - |
| 85 | /blog/natural-pest-control | service-shaped | pest-control | 0 | 0 | 0.0% | - | 0 |  |  | - |
| 86 | /blog/zombie-ants | curiosity | ants | 0 | 0 | 0.0% | - | 0 |  |  | - |

## Appendix B. URL Inspection, Oct 18 (41 URLs)

| Page | Coverage | Last crawl (UTC) | Google canonical | Declared canonical seen | Rich results seen | Found via |
|---|---|---|---|---|---|---|
| /blog/do-mothballs-keep-mice-away | Submitted and indexed | 2026-10-16 03:28 | self | self | Breadcrumbs | sitemap; links: /blog/deer-mice, /learn/mice |
| /blog/how-much-is-pest-control | Submitted and indexed | 2026-10-16 03:47 | self | self | Breadcrumbs | sitemap; links: /blog/lawn-pest-control |
| /blog/water-bugs-vs-cockroaches | Submitted and indexed | 2026-10-16 03:46 | self | self | Breadcrumbs | sitemap; links: /blog/do-cockroaches-bite |
| /blog/where-do-cockroaches-come-from | Submitted and indexed | 2026-10-16 03:47 | self | self | Breadcrumbs | sitemap; links: /blog/bugs-that-look-like-cockroaches |
| /blog/baby-mice | Discovered - currently not indexed | - | - | none | - | sitemap; links: /blog/are-mice-nocturnal |
| /blog/field-mice | Discovered - currently not indexed | - | - | none | - | sitemap; links: /learn/mice |
| /blog/does-vinegar-kill-ants | Duplicate without user-selected canonical | 2026-10-16 11:28 | https://www.747ph.live/ | none | - | sitemap; links: /blog/borax-for-ants |
| /blog/how-long-do-ants-live | Duplicate without user-selected canonical | 2026-10-16 12:07 | https://www.747ph.live/ | none | - | sitemap; links: /blog/does-vinegar-kill-ants |
| /blog/natural-pest-control | Discovered - currently not indexed | - | - | none | - | sitemap; links: /blog/lawn-pest-control |
| /blog/cluster-flies-in-house-canada | Submitted and indexed | 2026-10-04 08:48 | self | self | Breadcrumbs | sitemap; links: /blog/how-to-get-rid-of-spiders-in-house-canada, /blog |
| /blog/when-to-worry-about-a-mosquito-bite | Crawled - currently not indexed | 2026-09-29 10:19 | self | self | - | sitemap; links: /blog, /sitemap.xml |
| /learn/ticks-by-state | URL is unknown to Google | - | - | none | - | - |
| /learn/ticks-by-province | URL is unknown to Google | - | - | none | - | - |
| /learn/bug-bites | URL is unknown to Google | - | - | none | - | - |
| /blog/ticks-in-texas | URL is unknown to Google | - | - | none | - | - |
| /blog/ticks-in-new-york | URL is unknown to Google | - | - | none | - | - |
| /blog/ticks-in-pennsylvania | URL is unknown to Google | - | - | none | - | - |
| /blog/ticks-in-ohio | URL is unknown to Google | - | - | none | - | - |
| /blog/ticks-in-georgia | URL is unknown to Google | - | - | none | - | - |
| /blog/ticks-in-quebec | URL is unknown to Google | - | - | none | - | - |
| /blog/ticks-in-british-columbia | URL is unknown to Google | - | - | none | - | - |
| /blog/venomous-spiders | URL is unknown to Google | - | - | none | - | - |
| /blog/brown-recluse-look-alikes | URL is unknown to Google | - | - | none | - | - |
| /blog/how-to-get-rid-of-carpet-beetles | URL is unknown to Google | - | - | none | - | - |
| /blog/pantry-pests | Submitted and indexed | 2026-10-17 09:08 | self | self | Breadcrumbs | links: /blog/bugs-that-look-like-fleas |
| /blog/flea-eggs | URL is unknown to Google | - | - | none | - | - |
| /blog/rat-vs-mouse | URL is unknown to Google | - | - | none | - | - |
| /blog/roof-rat-vs-norway-rat | URL is unknown to Google | - | - | none | - | - |
| /blog/bugs-in-house-in-winter | Submitted and indexed | 2026-10-17 07:22 | self | self | Breadcrumbs | links: /blog/bugs-that-look-like-fleas |
| /blog/what-do-fleas-look-like | URL is unknown to Google | - | - | none | - | - |
| /blog/house-centipedes | Submitted and indexed | 2026-10-18 01:49 | self | self | Breadcrumbs | links: /blog/how-to-get-rid-of-centipedes-canada, /blog/bugs-that-look-like-fleas |
| /blog/brown-recluse-bite | URL is unknown to Google | - | - | none | - | - |
| /blog/wolf-spiders | Duplicate without user-selected canonical | 2026-10-17 04:57 | https://www.marcustheatres.com/theatre-locations/point-cinema | none | - | links: /blog/bugs-in-house-in-winter |
| /blog/how-to-get-rid-of-stink-bugs | URL is unknown to Google | - | - | none | - | - |
| /blog/house-spiders | URL is unknown to Google | - | - | none | - | - |
| /blog/spiders-in-florida | URL is unknown to Google | - | - | none | - | - |
| /blog/spider-egg-sacs | URL is unknown to Google | - | - | none | - | - |
| /blog/palmetto-bugs | URL is unknown to Google | - | - | none | - | - |
| /blog/cockroach-eggs | URL is unknown to Google | - | - | none | - | - |
| /blog/spiders-in-california | URL is unknown to Google | - | - | none | - | - |
| /blog/spiders-in-texas | URL is unknown to Google | - | - | none | - | - |

## Appendix C. The 29 upgraded articles: before vs after

Before = the same weekdays in Oct 1-14 as the after days; after = Oct 15-17 (Oct 15 set) or Oct 16-17 (Oct 16 set), the last two days incomplete. "Rel. impr" = the page's after/before impressions ratio divided by the same ratio for 189 untouched /blog/ articles (>=150 impressions Oct 1-14). "Expected clicks" = after-impressions x the page's Oct 1-14 CTR (not yet adjusted for the control CTR change: x0.91 for seasonal topics, x1.00-1.19 for year-round). z = (clicks - expected) / sqrt(expected).

| Page | Set | Impr/day before | Impr/day after | Rel. impr | CTR before | CTR after | Clicks after | Expected | z | Pos before | Pos after | Head query: pos before/after, CTR before/after |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| /blog/mosquito-larvae-identification | Oct15 | 543 | 417 | 1.02 | 0.46% | 0.24% | 3 | 5.7 | -1.1 | 7.4 | 7.4 | 'mosquito larvae' 9.3/8.7, 0.1%/0.0% (315 impr) |
| /blog/red-ticks-and-clover-mites | Oct15 | 184 | 124 | 0.89 | 0.74% | 0.00% | 0 | 2.8 | -1.7 | 6.6 | 6.8 | 'red tick' 5.6/7.2, 0.0%/0.0% (80 impr) |
| /blog/tick-vs-bed-bug | Oct15 | 160 | 126 | 1.04 | 0.88% | 0.53% | 2 | 3.3 | -0.7 | 6.9 | 5.8 | 'tick vs bed bug' 13.3/16.0, 0.0%/0.0% (7 impr) |
| /blog/tick-bite-vs-mosquito-bite | Oct15 | 130 | 59 | 0.59 | 1.16% | 1.14% | 2 | 2.0 | -0.0 | 5.5 | 5.7 | 'tick bite vs mosquito bite' 6.7/7.6, 0.4%/0.0% (36 impr) |
| /blog/what-does-a-spider-bite-look-like | Oct15 | 772 | 458 | 0.78 | 0.59% | 0.80% | 11 | 8.1 | 1.0 | 6.4 | 6.4 | 'what does a spider bite look like' 7.8/6.7, 0.3%/0.0% (204 impr) |
| /blog/bugs-that-look-like-ticks | Oct15 | 546 | 487 | 1.18 | 1.32% | 0.82% | 12 | 19.3 | -1.7 | 6.6 | 6.7 | 'bugs that look like ticks' 7.4/7.8, 2.4%/0.0% (56 impr) |
| /blog/no-see-um-bites | Oct15 | 379 | 239 | 0.83 | 2.09% | 1.39% | 10 | 15.0 | -1.3 | 5.0 | 5.6 | 'no see um bites' 4.7/6.3, 1.3%/3.0% (33 impr) |
| /blog/chigger-bites | Oct15 | 157 | 100 | 0.84 | 1.97% | 2.00% | 6 | 5.9 | 0.0 | 6.0 | 5.8 | 'chiggers' 2.0/2.0, 3.7%/0.0% (14 impr) |
| /blog/how-long-do-ticks-live | Oct15 | 338 | 265 | 1.04 | 0.26% | 0.50% | 4 | 2.1 | 1.3 | 7.2 | 7.4 | 'how long can ticks live in a house' 7.7/6.8, 0.8%/0.0% (40 impr) |
| /blog/baby-ticks-nymphs-seed-ticks-ontario | Oct16 | 73 | 20 | 0.46 | 0.40% | 0.00% | 0 | 0.2 | -0.4 | 7.3 | 6.9 | 'baby tick' 7.5/8.0, 0.0%/0.0% (5 impr) |
| /blog/bed-bug-shells-casings-shed-skins-canada | Oct16 | 58 | 43 | 1.28 | 0.33% | 1.16% | 1 | 0.3 | 1.3 | 7.6 | 6.9 | 'bed bug shells' 7.8/6.0, 1.4%/0.0% (10 impr) |
| /blog/bed-bug-stains-poop-droppings-canada | Oct16 | 186 | 86 | 0.79 | 0.79% | 2.33% | 4 | 1.4 | 2.3 | 6.8 | 6.5 | 'bed bug poop' 9.0/9.3, 0.0%/0.0% (26 impr) |
| /blog/bugs-that-look-like-bed-bugs-canada | Oct16 | 78 | 44 | 0.96 | 1.35% | 1.15% | 1 | 1.2 | -0.2 | 7.1 | 6.5 | 'bugs that look like bed bugs' 7.9/6.8, 0.0%/3.8% (26 impr) |
| /blog/flea-bites-on-humans | Oct16 | 215 | 186 | 1.49 | 0.34% | 1.07% | 4 | 1.3 | 2.4 | 8.1 | 9.7 | 'what do flea bites look like' 6.6/9.3, 0.0%/4.5% (22 impr) |
| /blog/how-to-get-rid-of-boxelder-bugs-canada | Oct16 | 173 | 54 | 0.53 | 0.60% | 0.93% | 1 | 0.6 | 0.5 | 8.7 | 7.3 | 'how to get rid of boxelder bugs' 9.2/9.7, 0.0%/0.0% (6 impr) |
| /blog/how-to-get-rid-of-carpet-beetles-canada | Oct16 | 54 | 24 | 0.77 | 1.29% | 0.00% | 0 | 0.6 | -0.8 | 7.5 | 5.8 | 'carpet beetles canada' 7.7/8.0, 0.0%/0.0% (3 impr) |
| /blog/how-to-get-rid-of-centipedes-canada | Oct16 | 263 | 168 | 1.09 | 0.77% | 0.90% | 3 | 2.6 | 0.3 | 6.0 | 6.0 | 'how to get rid of house centipedes' 3.5/2.5, 3.3%/4.2% (24 impr) |
| /blog/how-to-get-rid-of-cluster-flies-canada | Oct16 | 70 | 46 | 1.11 | 1.52% | 4.40% | 4 | 1.4 | 2.2 | 7.2 | 5.9 | 'how to get rid of cluster flies' 7.9/8.9, 0.0%/0.0% (15 impr) |
| /blog/how-to-get-rid-of-cockroaches-canada | Oct16 | 76 | 42 | 0.94 | 0.86% | 2.41% | 2 | 0.7 | 1.5 | 8.1 | 7.0 | 'cockroach' 2.1/2.1, 0.0%/0.0% (8 impr) |
| /blog/how-to-get-rid-of-drain-flies-canada | Oct16 | 106 | 82 | 1.34 | 1.36% | 1.82% | 3 | 2.2 | 0.5 | 6.0 | 8.1 | 'drain flies' 4.3/10.5, 0.0%/1.6% (63 impr) |
| /blog/how-to-get-rid-of-fruit-flies | Oct16 | 47 | 26 | 0.97 | 1.17% | 0.00% | 0 | 0.6 | -0.8 | 8.8 | 7.9 | 'fruit fly drain killer canadian tire' 10.4/10.4, 0.0%/0.0% (10 impr) |
| /blog/how-to-keep-mice-out-of-your-car | Oct16 | 141 | 114 | 1.40 | 0.90% | 0.87% | 2 | 2.1 | -0.0 | 7.9 | 7.7 | 'how to keep mice out of cars' 9.1/8.9, 2.1%/0.0% (14 impr) |
| /blog/male-vs-female-mosquito | Oct16 | 707 | 518 | 1.26 | 0.21% | 0.10% | 1 | 2.1 | -0.8 | 6.6 | 6.6 | 'male mosquito' 8.3/8.8, 0.2%/0.0% (72 impr) |
| /blog/mosquito-bite-vs-spider-bite | Oct16 | 84 | 36 | 0.74 | 0.16% | 0.00% | 0 | 0.1 | -0.3 | 6.4 | 6.5 | 'spider bite vs mosquito bite' 6.0/7.1, 0.0%/0.0% (32 impr) |
| /blog/mouse-bait-station-canada | Oct16 | 86 | 48 | 0.96 | 0.71% | 0.00% | 0 | 0.7 | -0.8 | 5.1 | 4.1 | 'best mouse poison in canada' 9.4/5.4, 1.3%/0.0% (8 impr) |
| /blog/mouse-repellent-canada | Oct16 | 103 | 161 | 2.69 | 1.62% | 0.93% | 3 | 5.2 | -1.0 | 6.3 | 6.4 | 'best mouse repellent canada' 6.5/5.6, 0.0%/0.0% (37 impr) |
| /blog/types-of-ticks-identification | Oct16 | 58 | 22 | 0.65 | 1.13% | 0.00% | 0 | 0.5 | -0.7 | 8.4 | 8.4 | 'tick identification ontario' 5.3/4.4, 0.0%/0.0% (22 impr) |
| /blog/what-does-mouse-poop-look-like-canada | Oct16 | 132 | 127 | 1.65 | 0.09% | 0.39% | 1 | 0.2 | 1.6 | 8.4 | 7.2 | 'mouse poop' 9.8/8.3, 0.3%/0.0% (136 impr) |
| /blog/what-kills-bed-bugs-instantly-canada | Oct16 | 350 | 316 | 1.55 | 0.50% | 0.16% | 1 | 3.1 | -1.2 | 4.0 | 4.6 | 'bed bugs' 2.1/2.4, 0.6%/0.0% (300 impr) |
