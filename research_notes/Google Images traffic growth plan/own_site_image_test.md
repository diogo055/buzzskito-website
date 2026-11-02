# Own-site image test: do more images bring more Google Images traffic to buzzskito.ca?

**Verdict: partly.** Going from no images to 3 or more on a page with image demand clearly causes image traffic. Going past about 6-8 images on one page has not added clicks. Across the site, traffic has so far grown roughly in step with the number of distinct images, but the best topics went first, and clicks are concentrated in a few page types and a weekday desktop audience. The run rate is about 1,530 clicks per 30 days (not 60-65 x 30). 10,000 a month is a stretch. 50,000 and 100,000 are not supported by anything measured here.

**How to read the numbers.**
- Data pulled Oct 30, 2026: Search Console API (`sc-domain:buzzskito.ca`, `type` image or web, `dataState` all, one dimension per pull, sometimes with one filter; never page + country), a live crawl of all 789 sitemap pages, git history on `diogo/main`, and read-only aggregate GA4 by device and OS. Oct 29 is flagged by Search Console as the first incomplete day, and Oct 30 is partial and unused.
- The weekly totals the coordinator supplied match these pulls exactly ([a1][]).
- **"Content images"** = images in the page's main area, excluding logos, the service photos (`/spray-*`, `/van-*`, `/team`) and the shared printable infographics (`/guides/bz-guide-*`). Those shared files sit on up to 190 pages and are counted separately.
- **Main cross-section:** Oct 26-29 (all Monday-Thursday), images as of Oct 25, pages live by Oct 21 (n=712). Rates called "per day" are weekday rates unless marked. Weekends run lower (section 4).
- **Page types** were set by rule and then corrected by reading every slug: bites 24, bite questions 10, spiders 20, other ID 147, how-to 83, product 187, state/province 39, local info 32, other info 49, service/city 194, tools 4 (`lib.py`). "Image-intent types" = bites + spiders + other ID. "Web band" = web impressions on the same page in the same 4 days, the stand-in for how strongly Google shows the page.
- Models are Poisson mean models with robust standard errors, shown as ratios with 95% intervals. Links go to throwaway logs and scripts in the scratchpad.

## 1. Do pages with more images get more image impressions and clicks, with page type and web strength held roughly equal?

### Takeaway
The big divide is between 0-2 images and 3 or more: almost nothing against hundreds of impressions a day, in every page type that has both. Above that the gains are modest and uncertain: 6-10 images against 3-5 gives about x1.4-2.4 impressions and x1-3 clicks after controls, with wide intervals. 11 or more does not add clicks.

### Cited Findings
**All 712 pages live by Oct 21** ([a5][]):

| Images (as of Oct 25) | Pages | % showing | Median impr/page/day | Mean | Clicks/page/day | CTR |
|---|---|---|---|---|---|---|
| 0 | 523 | 7.5% | 0 | 0.5 | 0.00 | 0.09% |
| 1-2 | 47 | 49% | 0 | 12.9 | 0.01 | 0.04% |
| 3-5 | 37 | 95% | 99 | 205 | 0.20 | 0.10% |
| 6-10 | 89 | 96% | 117 | 314 | 0.45 | 0.14% |
| 11+ | 16 | 100% | 149 | 264 | 0.12 | 0.05% |

**By page type** (pages / median impressions per day / mean / clicks per page per day; [a5][]):

| Type | 0 images | 1-2 | 3-5 | 6-10 | 11+ |
|---|---|---|---|---|---|
| Bites | 3 / 0 / 0 / 0 | - | 5 / 216 / 182 / 0.30 | 7 / 689 / 1,170 / 1.57 | 2 / 227 / 227 / 0 |
| Spiders | - | - | - | 9 / 546 / 538 / 1.33 | - |
| Other ID | 30 / 0 / 6 / 0 | 3 / 0 / 0.1 / 0 | 12 / 108 / 283 / 0.21 | 34 / 260 / 337 / 0.38 | 12 / 149 / 256 / 0.08 |
| How-to | 60 / 0 / 0.9 / 0 | 8 / 0 / 31 / 0.03 | 9 / 165 / 227 / 0.19 | 4 / 55 / 75 / 0.19 | 2 / 353 / 353 / 0.50 |
| Product | 170 / 0 / 0.1 / 0 | 17 / 0 / 5.6 / 0 | - | - | - |
| Service/city | 192 / 0 / 0.01 / 0 | 1 page only | - | - | - |
| State/province | 2 / 0 / 0 / 0 | - | 6 / 32 / 29 / 0 | 31 / 35 / 54 / 0.06 | - |

Cells under about 10 pages are too small to rely on alone. Spiders have no variation in image count, so no within-type test is possible.

**Image-intent types by web band** (same format; [a5][]):

| Web impressions in the 4 days | 0 images | 3-5 | 6-10 | 11+ |
|---|---|---|---|---|
| 50-199 | 12 / 0 / 0.06 / 0 | 4 / 51 / 55 / 0 | 9 / 53 / 180 / 0.50 | 3 / 122 / 118 / 0 |
| 200-749 | 8 / 0 / 5 / 0 | 9 / 216 / 371 / 0.31 | 16 / 290 / 322 / 0.53 | 9 / 151 / 263 / 0.08 |
| 750+ | 2 / 0 / 0 / 0 | 4 / 166 / 187 / 0.31 | 24 / 511 / 732 / 0.96 | 2 / 399 / 399 / 0.12 |

- Clicks per page peak at 6-10 images in all three bands and fall at 11+ in all three. Impressions do not rise steadily within a band ([a5][]).
- How-to, product, info and local pages show the same gate. In the 750+ band: 0 images 0.9 impressions a day (15 pages), 1-2 images 38 (8), 3-5 images 186 (8). In the 200-749 band: 0.3 (55), 17 (11), 270 (6) ([a5][]).

**Models, against 3-5 images, controlling for type, topic, page age and log web impressions** ([a5][]):

| Sample | n | Impressions: 6-10 | Impressions: 11+ | Clicks: 6-10 | Clicks: 11+ |
|---|---|---|---|---|---|
| All pages live by Oct 21 | 712 | x1.79 [0.77-4.15] | x3.15 [1.47-6.79] | x3.02 [1.44-6.35] | x1.36 [0.48-3.86] |
| Image-intent types | 117 | x1.44 [0.48-4.34] | x2.60 [1.00-6.76] | x2.38 [1.03-5.50] | x0.71 [0.18-2.87] |
| Image-intent, top 3% of pages removed | 113 | x2.37 [1.48-3.81] | x3.12 [1.55-6.28] | x2.77 [1.22-6.27] | x0.72 [0.19-2.76] |
| New guides only, created Oct 16-21 (same template and age) | 48 | x1.78 [0.60-5.27] | x2.36 [0.74-7.54] | x1.31 [0.37-4.68] | x0.48 [0.10-2.29] |
| Image-intent, pages older than Oct 16 | 69 | x0.90 [0.22-3.66] | too few | x3.28 [0.62-17.4] | too few |

- In the all-pages model, 0 images is x0.01 [0.00-0.06] and 1-2 images x0.15 [0.07-0.35] of the 3-5 level for impressions; clicks x0.01 and x0.05 ([a5][]).
- **Selection control:** older pages only (n=337), adding pre-upgrade image impressions (Sep) and pre-upgrade web impressions (Oct 4-13). Against 1-2 images, 3-5 gives x4.45 [1.97-10.08] and 6-10 gives x4.81 [1.29-17.95] impressions, so once the pre-existing traffic is held equal, 6-10 is no better than 3-5 on these pages ([a5][]).
- A rank test inside type x web band x age strata gave rho +0.25 for impressions (p=0.009, 124 pages in 15 strata) and +0.06 for clicks (p=0.55). This used images as of Oct 21 ([a2][]).
- Web strength matters on its own: the coefficient on log web impressions is 0.33-0.37, so doubling web impressions goes with about +25-30% image impressions ([a5][]).

### Inferences
- Image count works first as a gate (does the page show at all) and only weakly as a dial after that.
- Page type and topic move results more than count. With the same 6-10 images, spider pages earn 1.33 clicks a day and state pages 0.06.
- The bias the brief warned about is real but does not erase the gate. It does shrink the 3-5 to 6-10 step. The controlled estimates are the ones to quote.

### Gaps
- Image count is not assigned at random. Pages with many images may simply cover broader topics, which is probably part of the x2-3 impressions at 11+.
- 11+ is only 16 pages and 8 clicks in the window.
- The Oct 28-29 additions (177 pages, 923 images) are too new to include.

## 2. Is there a point where extra images stop adding anything? What are clicks and impressions per image, by page type?

### Takeaway
Clicks per page peak at about 6-8 images and fall after that. Impressions rise less than in proportion and flatten at about the same point. Per image, spiders and bites earn 3-4 clicks a month, other ID about 0.8, how-to about 1, state pages 0.2, product pages zero so far.

### Cited Findings
**Image-intent pages by exact image count, Oct 26-29, per page per day** ([a5][]):

| Images | Pages | Median impr | Mean impr | Clicks | CTR |
|---|---|---|---|---|---|
| 4 | 6 | 108 | 142 | 0.12 | 0.09% |
| 5 | 10 | 128 | 320 | 0.32 | 0.10% |
| 6 | 9 | 550 | 991 | 1.28 | 0.13% |
| 7 | 11 | 285 | 355 | 0.80 | 0.22% |
| 8 | 13 | 286 | 453 | 0.69 | 0.15% |
| 9-10 | 17 | 262 | 340 | 0.40 | 0.12% |
| 11-12 | 7 | 241 | 230 | 0.04 | 0.02% |
| 13-15 | 7 | 137 | 273 | 0.11 | 0.04% |

- Slope on log images, image-intent pages: up to 6 images, 1.59 (se 0.84) for impressions and 4.59 (se 1.39) for clicks; above 6, 0.68 (se 0.67) for impressions and -1.56 (se 0.84) for clicks ([a5][]).
- Elasticity with 3+ images (n=81): impressions 0.89 [-0.22, 1.99], clicks 0.33 [-0.77, 1.43] ([a5][]).
- **Dose-response among 60 pages that gained photos Oct 14-23**, controlling for prior image traffic, web strength, type and recency. Gaining 1-2 images: 53 median impressions a day, 0.11 clicks a day (22 pages). Gaining 3-5: 198, 0.56 (29). Gaining 6-10: 601, 0.81 (9). Elasticity on images gained: impressions 1.59 [0.92, 2.26], clicks 2.36 [1.42, 3.30]. Limited to the 42 pages the git counter sees fully: 1.82 and 2.77. Nobody gained 11+ ([a9][]).
- Google's counting rule: "An impression is counted only once per host page URL" ([Search Console Help](https://support.google.com/webmasters/answer/7042828)).
- **Per image, by type** (Oct 26-29; impressions per image per weekday; clicks per image per month with the weekend factor 0.85; images as of Oct 25; [a7][]):

| Type | Pages with images | Impr/image/day | Clicks/image/month | Clicks/page/month | CTR |
|---|---|---|---|---|---|
| Spiders | 15 | 60 | 3.40 | 29.3 | 0.22% |
| Bites | 15 | 94 | 3.12 | 21.2 | 0.13% |
| Other info | 12 | 44 | 2.12 | 3.7 | 0.19% |
| Bite questions | 6 | 68 | 1.38 | 5.3 | 0.08% |
| How-to | 23 | 34 | 0.99 | 4.2 | 0.11% |
| Other ID | 81 | 36 | 0.82 | 6.8 | 0.09% |
| State/province | 37 | 8 | 0.19 | 1.2 | 0.09% |
| Product | 17 | 5 | 0 | 0 | 0% |

- **Site level, images against the following Monday-Thursday** ([a8][]). Counts below use committed page versions and miss look-alike card photos on hand-written pages.

| Images live by | Pages | Page-image pairs | Distinct images | Impr/day | Clicks/day | Impr per distinct image/day | Clicks per distinct image/month (weekday rate) |
|---|---|---|---|---|---|---|---|
| Sep 3 | 23 | 24 | 12 | 8,119 (Sep 14-17) | 5.0 | 677 | 12.5 |
| Oct 17 | 103 | 549 | 172 | 14,808 (Oct 19-22) | 24.0 | 86 | 4.2 |
| Oct 25 | 184 | 1,260 | 382 | 35,692 (Oct 26-29) | 60.0 | 93 | 4.7 |
| Oct 29 | 345 | 2,180 | 661 | not readable yet | | | |

- Reuse: of 661 distinct content images, 279 sit on one page, 198 on 2-3, 140 on 4-9, 44 on 10 or more. State pages average 6.3 images, of which 5.5 are on 10+ pages. Spider pages average 8.8 with none that widely used ([a6][]). A model splitting images by how widely they are reused found no penalty for reuse: coefficient 0.79 (se 0.22) on widely reused images and 0.14 (se 0.23) on barely reused ones ([a6][]).

### Inferences
- A sensible working limit is 6-8 images per page until a test says otherwise. Above that, extra images on the same page add little, and the counting rule gives a mechanical reason: several images from one page in one search count once, so an extra image adds impressions only if it catches a new search.
- Falling clicks at 11+ may be topic rather than count. Those pages are mostly droppings and broad "tiny bugs" pages with low click rates (section 6). So the honest claim is "no gain", not "harm".
- Breadth has worked better than depth so far. From Oct 17 to Oct 25, distinct images rose x2.2, impressions x2.4 and clicks x2.5. Removing the x1.41 lift seen on pages with no new images (section 3), the images themselves look more like x1.7 impressions for x2.2 images, an elasticity of about 0.7.
- September's very high per-image number is not a yardstick: 12 diagrams were carrying a block of machine-looking showings (section 4).

### Gaps
- No clean saturation test exists yet. Only 9 pages with 3+ images gained more on Oct 28-29 (135 unchanged candidates could act as controls, [a6][]). A randomized test is needed: take pages at 3-6 images, add photos to a random half up to 8-10, hold the other half, and read 10 days later.
- The reuse result is inconclusive. Widely reused photos are mostly tick and bed bug photos, topics with demand, so the coefficient may reflect topic. Whether Google shows only one landing page per identical image cannot be seen in Search Console, which reports pages and not image URLs.

## 3. Before and after: did pages that gained photos in October beat similar pages that gained none, allowing for the site-wide steps?

### Takeaway
Yes for pages starting from zero: they stay at zero until photos arrive, then reach about 270-330 impressions and 0.25 clicks per page per weekday within days, while not-yet-treated and never-treated pages stay flat. Site-wide events did not lift pages without images. For pages that already had a diagram, the photo effect is clear on Oct 16-22 but no longer separable from the site-wide lift by Oct 26-29.

### Cited Findings
**This extends** the [Oct 29 read](C:/Users/buzzs/buzzskito-website/data/god-build/photo-upgrade-read-2026-10-29.md), which compared Oct 4-13 with Oct 18-27 on 29 pages (16 to 135 image clicks) against a control with almost no images. That read did not use September, did not use later photo waves as controls, and ended before the plateau.

**When images arrived** (pages/images added, git-dated, [a10][]): Sep 2 24/24 (the first images ever, [commit 2936c942](https://github.com/diogo055/buzzskito-website/commit/2936c942)); Oct 14 9/42; Oct 15 37/233; Oct 16 48/250; Oct 20 32/263; Oct 21 7/74; Oct 22 4/38; Oct 23 50/254; Oct 25 6/38; Oct 28 143/696; Oct 29 35/224. These include guides released with their photos.

**Older pages by when they gained photos** (impressions per day, with clicks per day; [a3][]):

| Group | Pages | Sep 4-24 | Oct 9-15 | Oct 16-22 | Oct 23-25 | Oct 26-29 |
|---|---|---|---|---|---|---|
| A: gained Oct 14-16 | 30 | 5,432 / 2.90 | 2,470 / 1.86 | 8,067 / 10.71 | 8,450 | 16,182 / 18.00 |
| B: gained Oct 20-21 | 9 | 896 / 0.05 | 205 / 0.14 | 400 / 0.14 | 578 | 2,162 / 2.25 |
| C: gained Oct 23 | 10 | 217 / 0.14 | 146 / 0.57 | 172 / 0.29 | 241 | 1,401 / 2.00 |
| D: gained Oct 28-29 | 86 | 85 / 0 | 87 / 0 | 61 / 0 | 53 | 216 / 0 |
| Never any image | 180 | 9 / 0 | 6 / 0 | 4 / 0 | 4 | 6 / 0 |

**Zero-base event study:** no content image before the gain, same page types (bites, bite questions, other ID, how-to, other info). Impressions per page per day ([a8][]):

| Group | Pages | Oct 9-15 | Oct 16-22 | Oct 23-25 | Oct 26-29 | Clicks/page/day Oct 26-29 |
|---|---|---|---|---|---|---|
| Photos by Oct 17 | 13 | 0.0 | 70.6 | 127.2 | 273.6 | 0.23 |
| Photos Oct 22-25 | 12 | 0.1 | 0.1 | 81.5 | 327.6 | 0.29 |
| Photos Oct 28-29 (not yet) | 49 | 3.5 | 5.7 | 5.4 | 4.9 | 0.005 |
| Never | 85 | 0.2 | 0.2 | 0.2 | 0.2 | 0 |

- Limiting to pages with 100+ web impressions in Oct 22-29 changes nothing (13, 12, 47 and 44 pages; 273.6, 327.6, 5.1, 0.2) ([a8][]).
- Day by day, the Oct 22-25 group of 12 pages went 1, 72, 938, 1,925, 3,466, 3,865, 4,550, 3,845 impressions on Oct 22-29. It started before the image sitemap existed. The Oct 28-29 group stayed at 224-323 a day through Oct 27 with no Oct 26 step; those impressions come from shared infographics ([a8][]).
- Example: `/blog/what-do-baby-cockroaches-look-like` had no image impression from its Oct 7 release until 8 photos went on Oct 23 (first showing that same day), then 10,556 impressions and 8 clicks in the Oct 22-29 window ([a5][], [daily][]).

**Staggered test, pages that already had an image in September, using later-treated pages as the control.** Later-treated pages were picked by the same logic, which addresses the selection bias. Bootstrapped by page ([a3][]):

| Comparison | Treated | Control | Ratio [95%] | n |
|---|---|---|---|---|
| A vs not-yet-treated, Sep to Oct 16-22 | x1.32 | x0.77 | 1.72 [1.10, 2.98] | 16 vs 16 |
| A vs not-yet-treated, Oct 9-15 to Oct 16-22 | x2.90 | x1.01 | 2.89 [1.83, 4.72] | 16 vs 16 |
| A without chigger and flea, Sep to Oct 16-22 | x1.57 | x0.77 | 2.05 [0.88, 5.06] | 14 vs 16 |
| A vs D, Sep to Oct 26-29 | x2.42 | x2.54 | 0.95 [0.57, 1.99] | 16 vs 9 |
| A+B vs D, Oct 9-15 to Oct 26-29 | x5.72 | x2.49 | 2.30 [0.37, 4.60] | 25 vs 9 |

In absolute terms A went from 181 to 539 impressions per page per day and D from 1.0 to 2.5 ([a10][]).

**The site-wide events.**
- **Oct 11, `/_next/` unblocked** ([commit 5f4dcd61](https://github.com/diogo055/buzzskito-website/commit/5f4dcd61)): no visible change on not-yet-treated pages. The Oct 23 group ran at 125-157 a day from Oct 9 to Oct 18. Photos and diagrams are served from static paths that were never blocked ([a3][], [audit][]). The block held back only 18 shared files, and the 292 pages whose only images are those files earned 169 impressions and 0 clicks in 8 days ([a8][]).
- **Step 1 (Oct 18-23):** group A jumped 3-5 days after its photos (daily 2,501, 4,063, 5,418, 9,871 on Oct 16-19), while not-yet-treated groups stayed flat ([a3][]). Phones moved first (Oct 17-18, a weekend), desktop from Monday Oct 19 ([a3][]).
- **Step 2 (Oct 26): smaller than it looks.** Thursday-Friday Oct 22-23 averaged 20,360 impressions and Monday Oct 26 reached 34,133, so x1.68, not the x2.17 you get from Sunday Oct 25 ([a1][]). Using Wed-Fri Oct 21-23 against Mon-Thu Oct 26-29 at page level, the gain was 26,038 to 49,966 a day ([a7][]). Of that gain:
  - 37% came from pages created Oct 22 or later;
  - 21% came from pages that first gained photos on Oct 23;
  - pages whose image count did not change from Oct 21 to Oct 29 (139 pages) rose x1.41 (21,773 to 30,600; clicks 25.3 to 39.2; position 24.3 to 22.8; their web impressions x1.16). That is about 37% of the gain.
- Pages with no content image did not move: 372 older pages went from 3.7 to 7.5 impressions a day ([a7][]).
- First-showing speed had already improved before the sitemap: median days from photos to first showing were 4 for the Oct 16 wave, 2 for Oct 20 and 1 for Oct 21-23 ([a6][]).

### Inferences
- First photos on a page with image demand cause image traffic. This is the strongest finding here, because the timing is staggered, the controls were chosen by the same logic, and untreated pages stay flat through both steps.
- Step 1 was mostly the photos. Step 2 was mostly new pages and new photos arriving (about 58%), plus a real lift on existing images (about 37%).
- Site-wide changes seem to amplify images already in place and do nothing for pages without them.
- The Oct 4-13 baseline in the Oct 29 read was a dip (section 4). Against September, that read's Oct 18-27 result on the upgraded group (10,590 impressions and 13.5 clicks a day) shrinks from x3.8 to about x1.9 in impressions and from x8.4 to about x4.7 in clicks. By Oct 26-29 it stands at x3.0 and x6.2 against September.

### Gaps
- The lift on unchanged pages cannot be split between the image sitemap (Oct 24), the CC BY licence metadata ([commit 3c24f9ab](https://github.com/diogo055/buzzskito-website/commit/3c24f9ab), Oct 24), continued ramp-up of pages released Oct 16-21, and Halloween week. Oct 26-29 is the week of Halloween, and spider, rat and bat queries may be temporarily high.
- The image sitemap has no usable control: the 27 pages with images outside it mostly carry a single image and earn about 5 impressions a day ([a7][]).
- [Commit 69dd3df4](https://github.com/diogo055/buzzskito-website/commit/69dd3df4) added full image metadata on every photo at 5 pm ET on Oct 18, the day clicks first jumped. Clicks had already jumped that day (14, against 3 the day before), so it is an unlikely main cause, but with no control it cannot be excluded.
- Whether unblocking `/_next/` was a precondition for photo pages ranking at all cannot be tested, because no photo pages existed before Oct 11. It let Google render the pages with their CSS and JavaScript.
- The Oct 28-29 wave is not readable yet. It gives a clean test around Nov 9-13. Prediction to check: if image yield holds (elasticity 0.7-1.0 on x1.73 distinct images), Mon-Thu impressions reach about 52,000-62,000 and clicks about 90-105 a day. Readings well below that would mean saturation, a worse page mix (58 of those pages are product pages) or a seasonal fall.

## 4. Why did the click rate rise from about 0.05% to 0.16%? Fewer low-value showings, new pages, better positions, or something else?

### Takeaway
About a third of the rise came from a block of machine-looking desktop showings stopping on Oct 6-7, which cost no clicks. The rest arrived from Oct 18: better positions, more weekday desktop searchers (the pattern looks like US school computers), and short species-name queries that click far better. New pages are not the cause, because they click at the same rate as upgraded old pages. Phone click rate barely moved.

### Cited Findings
**Windows** ([a9][]):

| Window | Impr/day | Clicks/day | CTR [95%] | Position | What changed |
|---|---|---|---|---|---|
| Sep 4 - Oct 5 | 6,290 | 2.8 | 0.045% [0.036-0.055] | 41.6 | 12 distinct diagrams, plus the block |
| Oct 7 - Oct 17 | 3,180 | 2.6 | 0.083% [0.053-0.114] | 32.6 | Block gone, photos not showing yet |
| Oct 18 - Oct 25 | 14,316 | 22.8 | 0.159% [0.136-0.182] | 25.9 | Photos and new pages |
| Oct 26 - Oct 29 | 35,692 | 60.0 | 0.168% [0.147-0.189] | 22.6 | Plateau so far |

- Impressions fell by half on Oct 6-7 while clicks did not fall. The click rate then stayed at 0.16-0.17% from Oct 18 even as impressions rose x2.5 ([a9][], [a1][]).

**By device** ([a9][]):

| Window | Desktop impr/day, clicks/day, CTR, pos | Mobile impr/day, clicks/day, CTR, pos |
|---|---|---|
| Sep 4 - Oct 5 | 3,960, 1.3, 0.034%, 49.7 | 2,290, 1.5, 0.065%, 27.5 |
| Oct 7 - Oct 17 | 950, 1.1, 0.115%, 42.5 | 2,184, 1.5, 0.071%, 28.2 |
| Oct 18 - Oct 25 | 7,832, 14.4, 0.184%, 25.2 | 6,270, 8.1, 0.130%, 26.8 |
| Oct 26 - Oct 29 | 24,652, 50.2, 0.204%, 20.8 | 10,420, 9.2, 0.089%, 27.2 |

- Desktop took 84% of clicks on Oct 26-29 (201 of 240). In Sep 4-24 it took 38% (25 of 65) ([a9][]).
- Phones pooled: Sep 4-Oct 17 about 0.067%; Oct 18-29 about 0.111% (102 clicks), at an unchanged position of about 27 ([a9][]).

**The block that left** ([a4][]). Query rows that were at least 90% desktop, 4+ words, average position 25 or deeper, zero clicks:
- 2,054 query strings, 42,124 impressions: 30.5% of all September impressions and 44% of named-query impressions; mean 5.4 words, mean position 57.
- Examples: "bed bug bites line pattern skin", "bed bug fecal spots mattress seam", "bed bug bites clusters line skin", "bed bug shed skins mattress seam".
- It stopped abruptly: 1,956 impressions on Oct 5, 923 on Oct 6, 66 on Oct 7, about 35 a day after; 545 distinct strings a day fell to about 23. Other query rows held at about 1,300-2,500 a day.
- The same two days: Netherlands + Germany 458 to 24 a day, UK 563 to 200, desktop 4,251 to 940, phones 2,204 to 1,808 ([a3][]). Desktop's total fall of about 3,000 a day equals roughly 45% of September's impressions ([a9][]).
- Whole pages lived on it: `/blog/bed-bug-stains-poop-droppings-canada` took up to 6,400 impressions a week at position 55-59 with one click in five weeks, then 6 impressions in the week of Oct 9-15 ([a1][]).
- Excluding the block, September's named-query click rate was already 0.085% at position 30.6 ([a9][]).

**Query cohorts, September vs Oct 26-29, named queries** ([a1][]):
- Queries only in September: 5,333; 2,399 impressions a day; CTR 0.010%; position 51.
- Queries in both: 719; 2,144 to 3,436 impressions a day; CTR 0.089% to 0.167%; position 32 to 24.7.
- Queries only in October: 16,746; 13,450 impressions a day; CTR 0.229%; position 20.3.

**Position vs same-position effect** after removing the block. Named queries, 0.085% to 0.216%: position shift accounts for 12% of the rise if bins are weighted at their average rates and 43% if weighted at October rates. The rest is a higher click rate at the same position ([a9][]). By device, after removing the block, the rise splits about 42% more desktop share (25% to 65% of impressions), 48% higher desktop click rate (0.134% to 0.247%, with better positions), 9% phones ([a3][], [a4][]).

**New pages are not the cause.** Oct 23-29, pages created since September: 0.122%, position 24.4. Older pages that gained more images in October: 0.122%, position 21.5, up from 0.047%, position 40.8 in September ([a1][]).

**Who the new desktop searchers look like:**
- Desktop weekday impressions by hour peak at about 2,000 an hour from 6 to 11 am Pacific (9 am-2 pm Eastern), fall by half by 1 pm Pacific, and reach about 400 by 4 pm Pacific. 81% of weekday desktop impressions and 86% of weekday desktop clicks fall between 5 am and 2 pm Pacific (8 am-5 pm Eastern). Weekends run a flat 250 an hour ([a4][]).
- Phones instead peak at 5-7 pm Pacific and look the same on weekends ([a4][]).
- Weekend-to-weekday desktop ratio: 0.83 in Sep 4-Oct 5, 0.27 in Oct 20-29. Phones: 1.14 in Oct 20-29. Web search overall: 1.01 ([a4][]).
- GA4, Google organic sessions landing on the 40 pages with the most image clicks: Chrome OS went from 0.2 a day in September to 17.8 a day on Oct 26-29, and it was 0-2 on Oct 24-25. Windows 13.8 a day, Mac 11.8. Desktop sessions on those pages rose from 8 a day (Oct 9-15) to 43.5, roughly the 50 desktop image clicks a day Search Console reports, so these are real page loads and not phantom clicks ([a4][]).
- Chrome OS sessions on those pages (Oct 22-29) ran about 22 seconds each, 52% engaged; Windows Chrome about 93 seconds, 77% engaged; iPhone Safari about 49 seconds, 54% engaged; Android Chrome about 79 seconds, 66% engaged. These sessions include web as well as image visitors ([a4][]).
- Top desktop queries are single words: "spider" (1,152 impressions in 4 days, position 2.1), "poop", "rat", "spiders", "mouse", "bugs" ([a3][]).
- Off-topic queries that read like schoolwork or children's interests have appeared, such as "a bad case of stripes", "things fall apart", "how to do long division", "how to read a ruler", "what is an included angle", "wings of fire", "national geographic kids articles" ([a7][]).

**How Search Console counts:** "Image impressions are counted only when the image has been scrolled into view", and "Position in image search results is counted left to right, then top to bottom" ([Search Console Help](https://support.google.com/webmasters/answer/7042828)).

### Inferences
- Waterfall: 0.045% to about 0.083% is the block leaving (about 32% of the rise). 0.083% to about 0.165% is the rest (about 68%), almost all on desktop.
- The block looks automated: permuted long strings, all desktop, foreign-heavy, deep positions, zero clicks, a clean stop. Its source is unknown. It was empty traffic, and September's 6-7K a day overstates real demand by nearly half.
- The new desktop audience looks like US school computers: weekday school-hours shape, Chrome OS arriving, almost none on weekends, one-word and homework-style queries, short visits. This is an inference, but several independent signals agree.
- Position numbers are not comparable across devices, since a desktop grid fits more images per row than a phone grid.
- Real photos may have lifted phone click rate about x1.6 at the same position, but the queries changed too, so this is suggestive only.
- The Oct 26-29 rate is a weekday rate. A full week runs about 15% lower in clicks (section 8).

### Gaps
- No direct proof of school use. GSC gives no network or age data, and GA4 cannot isolate image visitors. Tests: the Oct 31-Nov 1 weekend, Thanksgiving (Nov 26-27) and the winter break (about Dec 21-Jan 1) should show desktop falling if this is right.
- Value per click is unmeasured. Short Chromebook visits may be worth little in display ads, and school networks may block ads.
- Who generated the block, and whether it can return, is unknown.

## 5. Coverage: how many pages have images, how many show, how fast, and who is missing out?

### Takeaway
372 of 789 pages have content images (2,257 page-image pairs, 661 distinct images). 231 of those showed in the last 8 days. Pages with photos for at least 8 days show 87.5% of the time, and first showing takes 1-4 days. Indexing is not the blocker. Product, service and other-info pages are the ones not taking part.

### Cited Findings
- 789 pages in the live sitemap; 372 with content images (median 6, maximum 14); 417 with none. Oct 22-29: 261 pages had any image impression (231 with a content image), 169 had at least 10 a day, 89 at least 100 a day, 90 had a click. 315 have ever shown since Sep 1 ([a5][]).

| Photos live since | Pages | Images | Shown Oct 22-29 | Never shown | Impressions | Clicks |
|---|---|---|---|---|---|---|
| Before Oct 21 (older pages) | 83 | 359 | 67 | 11 | 123,670 | 138 |
| Oct 16-21 (new pages) | 93 | 735 | 87 | 6 | 101,338 | 137 |
| Oct 22-25 | 42 | 319 | 41 | 1 | 61,226 | 61 |
| Oct 28-29 only (too new) | 107 | 381 | 18 | 73 | 2,089 | 1 |
| Created Oct 27+ (too new) | 47 | 463 | 18 | 29 | 356 | 1 |

([a5][])

- **Mature photo pages** (photos live by Oct 21): 176 pages, 154 shown in the last 8 days (87.5%), 17 never (9.7%). Of the 22 not shown, 16 have one image (mostly product and how-to) and 6 have 4-7 images: `cockroach-eggs`, `asian-lady-beetles`, `ticks-in-massachusetts`, `ticks-in-new-hampshire`, `ticks-in-maryland`, `ticks-in-rhode-island` ([a5][], [a6][]).
- All 22 are "Submitted and indexed" with their own canonical, per URL Inspection on Oct 30. So are 8 comparison pages that do show ([inspect][]).
- **Mature pages by type, Oct 22-29** (pages / shown / at least 100 impressions a day / median impressions in 8 days / clicks): other ID 56 / 54 / 34 / 1,014 / 84; bites 14 / 14 / 10 / 1,961 / 80; spiders 9 / 9 / 7 / 3,077 / 67; state 37 / 33 / 5 / 209 / 13; how-to 21 / 17 / 7 / 551 / 19; product 17 / 9 / 0 / 1 / 0; other info 9 / 7 / 2 / 3 / 8; local info 8 / 7 / 0 / 8.5 / 0 ([a5][]).
- **Time from photos to first showing**, pages with no earlier showing: 3% on day 0, 29% by day 1, 46% by day 2, 62% by day 3, 81% by day 5, 88% by day 7, 92% by day 13. Median by type 2-4 days ([a6][]).
- **All pages by type** (pages / with images / web impressions in 8 days / image impressions / image clicks; [a5][]):

| Type | Pages | With images | Web impr | Image impr | Image clicks |
|---|---|---|---|---|---|
| Other ID | 147 | 127 | 120,728 | 135,343 | 118 |
| Bites | 24 | 22 | 22,921 | 63,519 | 80 |
| Spiders | 20 | 20 | 16,867 | 42,949 | 89 |
| How-to | 83 | 42 | 42,104 | 20,632 | 21 |
| State/province | 39 | 38 | 12,278 | 11,769 | 13 |
| Bite questions | 10 | 9 | 30,869 | 8,183 | 8 |
| Other info | 49 | 28 | 65,560 | 4,157 | 8 |
| Local info | 32 | 11 | 8,163 | 1,117 | 0 |
| Product | 187 | 71 | 66,442 | 607 | 0 |
| Tools | 4 | 3 | 618 | 529 | 1 |
| Service/city | 194 | 1 | 8,050 | 61 | 0 |

- **23 image-intent pages still have no content image**, only a shared infographic at most, including `what-do-ticks-look-like`, `types-of-mice`, `flying-ants-vs-termites`, `flying-ants`, `deer-mice`, `field-mice`, `sugar-ants`, `red-ants` and `/learn/cockroaches` ([a5][]).
- **Highest-web pages with 0-2 images, outside service/city:** `how-to-get-rid-of-mosquitoes-in-the-house` (5,684 web impressions in 8 days), `what-colors-attract-mosquitoes` (4,524), `can-ticks-fly-jump-swim` (2,810), and many product pages. Pages with 0-2 images hold 85,682 of 394,600 web impressions, of which 54,080 are on product pages ([a8][]).

### Inferences
- A page with real demand that gets photos will almost always show within a week. The 6 multi-image pages that do not show are probably a reuse or lead-photo issue on low-demand pages. Google last crawled them on Oct 17-20, after release, so it has seen them ([inspect][]).
- The cheapest remaining wins are the 23 image-intent pages with no photo, and high-web information pages with 0-2 images. Product and service pages have little evidence behind them yet.

### Gaps
- Product pages have only 1-2 images so far, so 3+ images on a product page is untested. The 58 product pages in the Oct 28-29 wave will answer this.
- Search Console does not report per-image data, so we cannot see which photos on a page earn the showings.

## 6. Demand: which queries bring image impressions, how does click rate vary with position, and what is a position gain worth?

### Takeaway
Bites and spiders bring the most value; spiders, ticks and mosquitoes click far better than droppings or cockroaches. A quarter of named-query impressions look off-topic or low-value. Click rate falls from about 0.9% at position 1 to about 0.1% below position 30, but a broad position gain is worth about x1.2-1.8 clicks, not x10.

### Cited Findings
**Named queries, Oct 22-29** (51% of impressions and 59% of clicks; the rest are anonymized; [a6][]):

| Theme | Queries | Impr share | Click share | CTR | Position | Top queries (impressions/clicks) |
|---|---|---|---|---|---|---|
| Bites/skin | 2,970 | 26.2% | 23.2% | 0.16% | 26 | chigger bites 5,867/14; flea bites 3,476/3; flea bites on humans 3,339/6 |
| Off-topic or uncategorized | 11,822 | 21.3% | 8.6% | 0.07% | 16 | "bed", "a bad case of stripes", "yellow fever", "fifth disease" |
| Spiders | 2,539 | 11.0% | 29.8% | 0.49% | 19 | spider 1,759/9; spiders 613/5; black widow spider 259/5; wolf spider 269/4 |
| Cockroaches | 829 | 8.3% | 4.5% | 0.10% | 21 | baby cockroach 1,740/0; baby roach 810/1 |
| Droppings/poop | 1,160 | 7.4% | 3.0% | 0.07% | 38 | poop 945/0; rat droppings 389/0 |
| Other insects | 1,224 | 5.9% | 3.5% | 0.11% | 29 | camel cricket 898/0 |
| Ticks | 769 | 3.1% | 7.1% | 0.42% | 24 | tick 102/4 |
| Fleas, mites, lice, chiggers | 670 | 2.9% | 3.5% | 0.22% | 39 | chiggers 333/0 |
| Rodents | 833 | 2.8% | 3.0% | 0.20% | 20 | rat 562/1; mouse 414/2 |
| Bed bugs | 489 | 2.3% | 0.5% | 0.04% | 34 | signs of bed bugs 246/0 |
| Flies, gnats | 677 | 2.2% | 1.5% | 0.12% | 28 | fly 147/0 |
| Generic bugs | 900 | 2.1% | 3.0% | 0.27% | 19 | bugs 323/1 |
| Wildlife | 747 | 2.0% | 2.0% | 0.18% | 36 | squirrel 232/1 |
| Mosquitoes | 409 | 1.2% | 4.5% | 0.71% | 23 | mosquito 247/3 |
| Ants, termites | 340 | 0.9% | 2.0% | 0.40% | 21 | ant 152/2 |

- One-word queries: 11% of impressions, 19% of clicks, 0.31% CTR. Other lengths 0.15-0.18% ([a6][]).
- Query concentration: the top 10 queries hold 19% of named-query impressions, the top 100 36%, the top 1,000 59%. 16,611 single-impression rows hold 15% ([a6][]).
- Off-topic detail: on my reading, about 28 of the top 94 rows in that group are pest or health related (lyme disease, scabies, blackfly, west nile virus). The rest are not ("things fall apart", "steel ball run", "low taper fade", "gta 5", "how to do long division"), and 55% of the group's impressions are on rows with 1-2 impressions ([a7][]). Its share rose from under 1% of named-query impressions in September to 26% on Oct 26-29 ([a6][], [a9][]).
- **Compared with September** (named-query impressions per day): bites 3,408 to 3,656 (x1.07), bed bugs 712 to 315, spiders 7 to 1,988, cockroaches 0 to 1,535, droppings 15 to 1,055, off-topic 11 to 4,336 ([a6][]).

**Click rate by position**, named query x day rows, Oct 16-29 ([a6][]):

| Position | Impressions | Clicks | CTR [95%] |
|---|---|---|---|
| 1 | 5,148 | 48 | 0.93% [0.67-1.20] |
| 2 | 4,508 | 28 | 0.62% [0.39-0.86] |
| 3 | 3,482 | 11 | 0.32% [0.13-0.51] |
| 4-5 | 9,261 | 21 | 0.23% [0.13-0.33] |
| 6-10 | 22,999 | 41 | 0.18% [0.12-0.23] |
| 11-20 | 28,713 | 34 | 0.12% [0.08-0.16] |
| 21-30 | 17,270 | 26 | 0.15% [0.09-0.21] |
| 31-50 | 34,723 | 29 | 0.08% [0.05-0.11] |
| 51-100 | 14,236 | 15 | 0.11% [0.05-0.16] |

- **By device, Oct 26-29:** desktop 0.92% at position 1, 0.64% at 2, 0.41% at 3, 0.30% at 4-5, 0.23% at 6-10, 0.11% at 11-20. Phones had only 56 named-query impressions at positions 1-3; 0.07% at 4-5 (2,739 impressions, 2 clicks, nearly all "chigger bites") and about 0.09% from 11-50 ([a6][]).
- **Within the same query**, on days it ranked much better than its own average (under 0.6x its position number) clicks ran 1.28x expected, and much worse (over 1.5x) 0.47x (176 queries, 253 clicks). Impressions barely respond to position within a query: halving the position number goes with x1.04-1.14 impressions (51 queries) ([a6][]).
- **Position gain**, impressions held fixed, pooled curve: everything deeper than 20 moved to 20, x1.02; deeper than 10 to 10, x1.20; deeper than 5 to 5, x1.38; every position number halved, x1.49; every query 5 places better, x1.81 ([a6][]). Top-5 named queries today: 3,860 impressions a day, 17.8 clicks a day, 0.46% ([a6][]).
- **Demand cannot be read from position:** "black widow spider" shows about 32 impressions a day at position 2.4 against about 162,100 US web searches a month in the God list; "brown recluse" 6 a day at position 5.1 against 383,000 ([a7][]). Where both web and image rank in the top 10, the image-to-web impression ratio has a median of 0.05 but ranges up to 88x for "chigger bites" ([a9][]).

### Inferences
- Pick topics before counting images. Short species names and bite identification have the click rates that matter. Droppings and cockroach-stage queries bring impressions with few clicks (for example, "baby cockroach" 1,740 impressions, 0 clicks).
- The pooled curve overstates what a position gain buys, since head terms differ from long queries. Within-query evidence supports about x1.3-1.5 for a large gain, and x1.8 is the upper end.
- Average position is measured only when we appear. Position 2 with so few impressions suggests we appear for a small slice of those searches, so holding "position 2" on a head term does not mean holding it for everyone.
- Off-topic impressions inflate the total without much value, so impressions alone overstate the channel. Excluding the off-topic group, the Oct 26-29 named-query click rate is 0.26% rather than 0.22% ([a9][]).

### Gaps
- True image-search demand is unavailable in our data. Search Console reports only searches where we appeared, and the web volumes are not image volumes.
- 49% of impressions and 41% of clicks are in anonymized queries, whose themes are unknown.
- The Web: Multimodal slice (Lens and similar) is not in the API ([memory note](C:/Users/buzzs/.claude/projects/C--Users-buzzs-buzzskito-website/memory/project_image_search_oct30.md)), so it is not counted here.

## 7. Concentration: what share of image clicks comes from the top pages, and what does a typical new page yield?

### Takeaway
Clicks are concentrated but not extreme: the top 10 pages take 41%, the top 25 65%, and 90 pages take all of them. A typical new other-ID page yields about 6 clicks a month and a new spider page about 25-35, all at October weekday-based rates.

### Cited Findings
- **Oct 22-29** ([a5][]):

| Top pages | Share of clicks | Top pages by impressions | Share of impressions |
|---|---|---|---|
| 1 | 9% | 1 | 7% |
| 5 | 28% | 5 | 24% |
| 10 | 41% | 10 | 33% |
| 25 | 65% | 25 | 52% |
| 50 | 86% | 50 | 73% |
| 100 | 100% | 100 | 93% |

- 90 pages had a click, 22 had 5+, 6 had 10+. Chigger bites (32) and flea bites (22) are 16% of page-level clicks ([a5][], [a9][]).
- Next highest by clicks: wolf spiders 16, venomous spiders 13, house spiders 12, jumping spiders 11, then bugs that look like ticks, spiders in California, black spiders and baby cockroaches at 8-9 ([a5][]).
- Rankings are unstable at these counts: 11 of the top 25 pages overlap between Oct 18-25 and Oct 26-29; rank correlation 0.09 ([a5][]).
- **Yield per page, Oct 26-29, per weekday** ([a5][]):

| Group | Pages | Median images | Median impr | Mean impr | P25-P75 impr | Clicks/day | Pages with 0 clicks | CTR |
|---|---|---|---|---|---|---|---|---|
| New spiders, Oct 16-21 | 9 | 8 | 546 | 538 | 318-670 | 1.33 | 11% | 0.25% |
| New spiders, Oct 22-27 | 6 | 9 | 646 | 494 | 237-730 | 0.88 | 17% | 0.18% |
| New other ID, Oct 7-21 | 43 | 10 | 151 | 258 | 48-309 | 0.22 | 56% | 0.09% |
| New other ID, Oct 22-27 | 20 | 9 | 232 | 308 | 126-469 | 0.25 | 55% | 0.08% |
| New how-to, Oct 7-21 | 9 | 6 | 95 | 148 | 44-151 | 0.22 | 44% | 0.15% |
| New state/province | 37 | 6 | 35 | 50 | 14-66 | 0.05 | 84% | 0.09% |
| New bites, Oct 7-21 | 3 | 11 | 220 | 225 | 158-289 | 0.33 | 67% | 0.15% |
| Upgraded older bites | 11 | 6 | 375 | 808 | 157-708 | 1.05 | 27% | 0.13% |
| Upgraded older other ID | 24 | 6.5 | 209 | 442 | 51-629 | 0.41 | 54% | 0.09% |

- The 137 new pages created Oct 7-27 with images together take 29,644 impressions and 37.8 clicks a day: 216 impressions per page per day, or 7.0 clicks per page per month with the weekend factor ([a5][], [a7][]).

### Inferences
- Monthly yield with the weekend factor: new spider page about 22-34 clicks; upgraded bite page about 27; new other-ID page about 6; new how-to about 5; new state page about 1.3.
- Only 3 new bite pages exist in this window, so the yield of a new bite page is not known. Upgraded bite pages are the better guide, but they carry older demand.
- The first waves took the strongest topics. Later pages will probably yield less than these figures.

### Gaps
- All pages are under 5 weeks old, most under 2, so it is unknown whether yields keep rising or fade.

## 8. Scale maths: what would it take to reach 10,000, 50,000 and 100,000 image clicks a month?

### Takeaway
Today is about 1,530 clicks per 30 days. 10,000 needs x6.5. It is a stretch that requires new topics at spider-like yields or a strong summer. 50,000 (x33) and 100,000 (x66) would need 1-2 million impressions a day or several thousand more pages at measured yields, which nothing here supports. Summer is unknown in both directions.

### Cited Findings
- **Run rate:** Mon-Thu Oct 26-29 is 35,692 impressions and 60 clicks a day. Using the one weekend available (desktop at about 0.3x weekdays, phones about 1.05x), a full week averages about 30,800 impressions and 50.9 clicks a day: **about 924,000 impressions and 1,530 clicks per 30 days**, CTR 0.165% ([a7][]).
- Image clicks were 336 against 2,529 web clicks in Oct 22-29 ([a9][]).
- **What the targets need** ([a7][]):

| Target per month | Clicks/day | Multiple of today | Impr/day at 0.16% CTR | at 0.30% | at 0.50% | Extra pages at 7 clicks/mo (new-page average) | at 25/mo (spider-like) | at 120/mo (top page) |
|---|---|---|---|---|---|---|---|---|
| 10,000 | 333 | x6.5 | 208,000 (x6.8) | 111,000 (x3.6) | 67,000 (x2.2) | 1,210 | 339 | 71 |
| 50,000 | 1,667 | x33 | 1,042,000 (x34) | 556,000 (x18) | 333,000 (x11) | 6,925 | 1,939 | 404 |
| 100,000 | 3,333 | x66 | 2,083,000 (x68) | 1,111,000 (x36) | 667,000 (x22) | 14,067 | 3,939 | 821 |

- **In images,** at about 4.0 clicks per distinct image per month (4.7 x 0.85): 10,000 needs about 2,500 distinct images, 50,000 about 12,500, 100,000 about 25,000. The site has 661 live and 720 in the photo ledger ([a8][], [audit][]).
- **Click rate alone cannot do it.** Today's impressions at the top-5 rate (0.46%) give about 142 clicks a day, about 4,250 a month. At the position-1 rate (0.93%), about 8,600 a month ([a6][], [a7][]).
- **Supply:** 197 of 363 slugs in `data/god-build/plan.src.json` are not yet live; 53 of the 100 God-list pages are not live (2.37M US searches a month, led by brown recluse, cicadas, chiggers, rat snakes); `content/guides-scheduled` holds 5 files ([a7][], [a8][]). Owner's cap: 50 new URLs a day ([memory index](C:/Users/buzzs/.claude/projects/C--Users-buzzs-buzzskito-website/memory/MEMORY.md)).
- **Already added but not yet measured:** 177 pages and 923 images on Oct 27-29; at today's type yields, about +838 clicks a month ([a8][]).
- **Season, measured context only:** image impressions were 189 in all of July 2026 and 484 in August, because the site had no images until Sep 2. So no summer image data exists ([a1][], [commit 2936c942](https://github.com/diogo055/buzzskito-website/commit/2936c942)).
- Web-only proxy, not transferable because rank changes are mixed in: pages live by mid-July, web impressions Oct 16-29 against Jul 18-31 were bites x0.77, other ID x0.77, product x0.75, local info x0.44, ticks topic x0.62, mosquitoes topic x1.14 (the last two by page topic) ([a7][]).
- Desktop on weekends runs at about 0.27-0.3x weekdays, so roughly 70-75% of weekday desktop volume appears only on weekdays ([a4][], [a7][]).

### Inferences
**Illustrative build-up, at October rates, not a forecast:** today about 1,530, plus about 840 from the Oct 27-29 additions, plus about 1,400-2,000 from the 197 planned pages at 7-10 clicks each, gives about 3,800-4,400 a month. A broad position gain of x1.2-1.5 would take that to about 4,500-6,500.

| Target | Plausible? | What would have to be true |
|---|---|---|
| 10,000 a month | Stretch, possible but not the base case | All of the above holds, plus x1.5-2.2 more from either about 300+ new pages at spider-like yields (not at the 7-click average) or a summer that adds more than it loses. No evidence yet that either is available. |
| 50,000 a month | Not supported | About 1M impressions a day at today's click rate, or about 550,000 at 0.30%. That is 2,000-7,000 more pages, far more than the planned topic list. Also needs a demand pool nobody has measured. |
| 100,000 a month | Not supported | About 2M impressions a day, or 4,000-14,000 more pages. |

- **The seasonal unknown, plainly: no October rate here is a summer rate.** Two forces pull opposite ways, and neither can be sized. Bite, mosquito, tick and chigger searches should rise in season. Weekday school-computer searching should fall when US schools close. That weekday desktop block is roughly 55% of today's clicks (rough range 45-60%, about 850 of 1,530). If it vanished and nothing replaced it, today's run rate would be about 680 a month. Late-October spider demand may also be unusually high.
- More images will not "explode" this on their own. They have a real, near-proportional effect when they are new images on topics with demand. Stacking them on one page does not help past about 6-8. The binding limits look like the number of good topics, position and click rate, not image count.

### Gaps
- Summer image demand: the first real read is April-June 2027.
- Holiday reads (Thanksgiving, Dec 21-Jan 1) will size the school share earlier.
- Whether the plateau holds: only 4 weekdays exist (34,133, 34,995, 35,818, 37,820), in Halloween week, with Oct 29 incomplete. The [Nov 13 re-read](C:/Users/buzzs/buzzskito-website/data/god-build/work-plan-2026-10-28.md) should use full weeks, not Mon-Thu.
- Topic supply and total image demand are unmeasured. The other notes in this folder may cover competitor scale.
- Click value is not measured here.

## 9. Technical audit of the live site: is anything limiting image search?

### Takeaway
Nothing blocks image search. Photos are static, descriptive, large, captioned and in schema. Small fixes remain: look-alike card photos are missing from the image sitemap (108 images), the image sitemap is not registered in Search Console, and tool pages list images that are not in their HTML.

### Cited Findings
**14 live pages fetched with curl on Oct 30, all HTTP 200, same HTML for a Googlebot user agent where tested** ([audit][]):

| Page | Content imgs | Source format | In image sitemap | First image loading | Captions | Alt | ImageObject (contentUrl = src) |
|---|---|---|---|---|---|---|---|
| /blog/chigger-bites | 6 | static | 6 of 6 | lazy | 6/6 | 6/6 | 6 |
| /blog/flea-bites-on-humans | 6 | static | 6 of 6 | lazy | 6/6 | 6/6 | 6 |
| /blog/tick-vs-bed-bug | 5 | static | 5 of 5 | eager, fetchpriority high | 5/5 | 5/5 | 5 |
| /blog/what-do-baby-cockroaches-look-like | 8 | static | 8 of 8 | lazy | 4/8 | 8/8 | 8 |
| /blog/house-spiders | 10 | static | 10 of 10 | lazy | 10/10 | 10/10 | 10 |
| /blog/black-widow-spiders | 12 | static | 12 of 12 | lazy | 7/12 | 12/12 | 12 |
| /blog/bugs-that-look-like-ticks | 7 | static | 7 of 7 | eager, fetchpriority high | 7/7 | 7/7 | 7 |
| /learn/bug-bites | 11 | static | 11 of 11 | lazy | 11/11 | 11/11 | 11 |
| /blog/ticks-in-texas | 6 | static | 6 of 6 | lazy | 6/6 | 6/6 | 6 |
| /blog/how-to-get-rid-of-cockroaches | 13 | static | 13 of 13 | lazy | 7/13 | 13/13 | 13 |
| /blog/rat-droppings | 13 | static | 13 of 13 | lazy | 8/13 | 13/13 | 13 |
| /blog/best-ant-killer | 2 | static | 2 of 2 | lazy | 2/2 | 2/2 | 2 |
| /tools/spider-identifier | 6 | static | 3 of 6; sitemap also lists 17 not in the HTML | lazy | 0/6 | 6/6, short | 6 |
| /mosquito-control | 0 | service photos via /_next/image | none | n/a | n/a | n/a | 0 |

**Fine:**
- `<img src>` for photos and diagrams is a plain static path, such as `/guides/photos/chigger-bites-ruler.webp` or `/diagrams/bite-pattern-comparison.svg`. Where a photo is listed, the sitemap entry is the same path, and the ImageObject `contentUrl` matches the `src` on every sample page ([audit][]).
- Files served to a Googlebot-Image user agent: 200, `image/webp` or `image/svg+xml`, `Cache-Control: public, max-age=31536000, immutable`, no `X-Robots-Tag`. Samples: 1200x780, 1200x1823, 1200x1600, 864x915, 655x779 webp; 720x440 SVG ([audit][]).
- Ledger: 720 records, median width 1200, 89.4% at least 1200 wide (1200 is the maximum), 1.5% under 800, median 96.5 KB ([audit][]).
- File names are descriptive ([audit][]).
- Site-wide: `max-image-preview:large` on 789 of 789 pages; no `noimageindex`, no `noindex`, no `X-Robots-Tag`; robots.txt allows everything except `/api/` and lists both sitemaps ([audit][]).
- Alt text on 2,216 of 2,274 content images (97.4%), median 108 characters; 58 empty, mostly shared SVG diagrams on older pages; 21% of alts repeat because the photo repeats ([audit][], [a9][]).
- Lazy loading on the first content image on 359 of 372 pages, eager on 13. The real URL is in `src` in the HTML in every case, so nothing depends on scrolling for discovery ([audit][]).
- ImageObject on 349 pages: 2,426 objects, all with `license`, `acquireLicensePage`, `creditText`; 1,350 with `creator`; 602 with `copyrightNotice` ([audit][]).
- Google picks photos up fast: median 1-2 days for the Oct 20-23 waves ([a6][]).

**To fix or check:**
- **108 on-page photos on 63 pages are not in the image sitemap**, including `why-do-mosquito-bites-itch` (5 of 8), `bed-bug-bites` (4 of 7), `baby-bed-bugs-nymphs` (4 of 8), `what-does-a-tick-bite-look-like` (3 of 7). Main cause, confirmed on `bed-bug-bites`: `scripts/build-image-index.mjs` looks for `<Photo id=`, `shareImage(` and literal paths, and does not read `photo:` inside `<ConfusedWith>` cards on hand-written pages ([audit][], [a7][], [script](C:/Users/buzzs/buzzskito-website/scripts/build-image-index.mjs)). 4 of the top 30 pages by impressions are affected, and they still show ([a7][]).
- **27 pages with a content image are not in the sitemap at all**, mostly one-image product pages ([a7][]).
- **The image sitemap is not registered in Search Console.** `sitemaps.get` returned 404 for `image-sitemap.xml` on Oct 30 ([inspect_pages.py][inspectpy]), and only `sitemap.xml` is listed ([pull1][]). It is discoverable only through robots.txt, so there is no way to see whether Google has read it.
- **31 phantom entries on 3 tool pages:** the sitemap lists quiz-result photos that are not in the HTML (spider 17, tick 9, bite 5) ([audit][]).
- **`/_next/image` URLs include a deployment id** (`...&w=1920&q=75&dpl=dpl_...`), on the shared infographics and service photos only (18 files, 627 placements). They resolve with or without it. On 10 pages the sitemap lists the static path while the page shows the `/_next/image` URL ([a8][], [audit][]).
- **589 of 2,274 content images (26%) sit outside `<figure>`** with no caption, mainly look-alike cards. They do have alt text and mostly ImageObject ([a9][], [audit][]).
- 47 pages lead with an SVG diagram, not a photo; `chigger-bites` and `flea-bites-on-humans` both lead with the same SVG, used on 20 pages ([audit][]).
- The sampled product and service pages use a generic `og:image` ([audit][]).
- Photo sources: iNaturalist 385, Wikimedia Commons 206, CDC 125, NPS 4, so identical copies exist elsewhere ([audit][]).

### Inferences
- Technical issues are not what limits this channel. Pages show within days and none are blocked. The fixes above are cheap and worth doing, but do not expect them to move the totals much.
- Fixing the sitemap script and registering the sitemap gives a cleaner read for the next tests.
- The `dpl` value should change on each deploy, so those shared infographics may present a new URL to Google every release. This is inferred from how the parameter is named; only one deploy id was seen today. It is low priority unless the site wants the only truly original images to compete.

### Gaps
- Whether Google has processed the image sitemap is unknown until it is registered.
- Whether lead image choice or uniqueness of photos changes position cannot be tested here: too few pages differ, and Search Console has no per-image data.
- This audit fetched HTML and files only; rendered screenshots were not reviewed.

[a1]: C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/img-test/a1.log
[a2]: C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/img-test/a2.log
[a3]: C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/img-test/a3.log
[a4]: C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/img-test/a4.log
[a5]: C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/img-test/a5.log
[a6]: C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/img-test/a6.log
[a7]: C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/img-test/a7.log
[a8]: C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/img-test/a8.log
[a9]: C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/img-test/a9.log
[a10]: C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/img-test/a10.log
[audit]: C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/img-test/audit.log
[inspect]: C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/img-test/raw/inspect.json
[pull1]: C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/img-test/pull1.log
[inspectpy]: C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/img-test/inspect_pages.py
[daily]: C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/img-test/raw/daily_page.json
