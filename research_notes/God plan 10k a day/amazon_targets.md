# Amazon targets: where the clicks come from, which searches to win, and what 10x would take

*Nov 3, 2026. Read-only research for the "God plan 10k a day" set. It builds on `reports/Canadian Amazon earnings growth plan.md` (Oct 30) and `reports/amazon-what-sells-2026-10-30.md` and does not repeat them. Every rate below was measured between August and October 2026, the end of the season and the off-season. No start-of-season rate exists yet.*

## The short answer

- **Baseline:** October 2026 had **1,177** Amazon clicks counted by GA4 (Canada 1,061, US 71, elsewhere 45). 10x means **11,770 a month**.
- **10x is not on any measured path in 2027.**
  - January-February 2027: about **900-1,300 a month**, 0.8-1.1x October. Winter keeps only the indoor pests.
  - July 2027: about **2,600-3,900 a month**, 2.2-3.3x October. It reaches about 4,700 (4x) if last July's higher click-through repeats.
  - If everything goes right: about **7,800** (6.7x).
  - The goal sheet's own Amazon.ca line (CA$1,425 in July) already implies about 3.3x October's Canadian clicks.
- **What moves the number, in order:**
  1. **The season**, which comes by itself: +750 to +2,000 a month by July.
  2. **Rank gains of 1-2 positions** on the existing product pages: +300 to +650.
  3. **100-200 new product pages**, at a typical page's yield: +200 to +600.
  4. **The US amazon.com boxes:** +50 to +150.
  5. **Placement changes** add nothing measurable. The **holiday season** raises money per click, not clicks.
- **A few product pages make the clicks.**
  - The top 10 pages make 32% of all Amazon clicks and the top 40 make 67%.
  - Amazon clicks per Canadian session, by the page the session starts on: product page 0.30, remedy 0.16, information 0.03, US guide 0.009.
- **Reaching the top 3 is rare on this site.**
  - Of the buying searches at positions 7.5-10.5, 1.4% reached the top 3 within two to three months. From 10.5-15.5, none of 202 did. From 3.5-5.5, 21% did.
  - 43% of our buying-search impressions sit at 7.5-10.5.
- **The biggest Canadian targets:**
  - the Advion / cockroach gel bait page
  - rat traps and the basement dehumidifier page
  - mosquito bits and dunks
  - fruit fly traps
  - mouse traps, which peak now
  - cockroach spray, bed bug spray, permethrin and bug zappers

  The full ranked list is in `amazon_buying_searches_canada.csv`.
- **Searches that name Canadian Tire or Home Depot bring few Amazon clicks.**
  - There were 54,282 Canadian impressions on searches that name a store, in six months.
  - If the 130 larger ones all reached #3, they would add only 75-237 Amazon clicks a year.
  - The exception is dunks and bits searches naming Rona or Home Depot: they click our pages at 2.5-4.4% from position 5.
- **The US is tiny so far.**
  - 230 US guides carry an amazon.com pick. Since Oct 20 the picks got 11 clicks in 14 days, 5 of them from the US. That is 3 clicks per 1,000 US views.
  - Of the US product searches we show for, 62% of the impressions and 96% of the clicks land on one amazon.ca page, the Photon Matrix laser-killer review.
  - The goal sheet's Amazon.com line (CA$821 in July) needs thousands of clicks a month. It is not on a measured path.
- **Watch this now: Mediavine may be costing clicks.** Since Mediavine went live on Nov 2, our phone sticky buy bar hides while an ad is pinned. That bar took 13.6% of Canadian Amazon clicks (95% of them on phones). Its share fell to 4.5% on Nov 1-2, two days and too few to read.

## How the numbers were made

**GA4 (Data API, property 463652856, read-only)**
- `affiliate_click` from Sep 2 to Nov 2, 2026, by:
  - page and country
  - placement, search term and link kind
  - the session's landing page
- Views by page and country, and sessions by landing page and country.
- For July and August I used GA4's outbound `click` event to Amazon, because `affiliate_click` starts on Sep 2. The two counts agree within 3% in September and October (1,607 vs 1,624 and 1,129 vs 1,177).
- `page_path` is not a registered custom dimension, so I used GA4's own `pagePath`.

**"Amazon clicks" means GA4-counted clicks** everywhere, the same basis as the 1,177 baseline.
- Amazon's own reports counted 1.4-2.0 times GA4's clicks from July to October. So GA4 sees about half to two thirds of the clicks, not one in three as the brief says.
- Money: about CA$0.41 per GA4-counted Canadian click (August-October).

**Search Console (sc-domain:buzzskito.ca, read-only)**
- Query dimension with a Canada or US filter, one dimension per pull (ops rule 4), for three windows:
  - May 3-Nov 1 (6 months)
  - Oct 5-Nov 1 (28 days)
  - each month from November 2025 to October 2026
- The page Google shows comes from the existing query x page files (`qp6.json`, `qp28.json`).
- Pages are mapped through the site's own redirects, so merged pages count under their new address.

**Buying search:** a search that names a product, a brand or a buying word (best, review, trap, spray, killer, repellent, bait, zapper, and so on). Service, city and "near me" searches are removed. 1,481 buying searches had 40+ Canadian impressions.

**Value of a search, using the brief's formula:** Canadian impressions (all impressions x Canadian share) x the CTR gain from reaching #3 x the Amazon clicks per session of the page that would rank. The CTR gain comes in two cases:
- **Mid case:** the search's own CTR times the same-search multiplier from the Oct 30 study.
  - Multipliers, against position 8 = 1.00: #3 = 2.11, #6 = 1.43, #10 = 0.70, #21+ = 0.29.
  - Below #10 a search also gains impressions as it climbs. Impressions at 11-12 run at 0.5 of the page-one level, 13-15 at 0.25, 16-20 at 0.15 and 21+ at 0.07.
- **High case:** the larger of the mid case and the cross-search CTR for that kind of search at #2-3. Those CTRs are 2.5% for generic product words, 5.5% for "best" or Canada searches, 8.7% for brand names and 1.8% for searches that name a store.

The other inputs:
- **Amazon clicks per session:** each page's own GA4 rate, pulled toward its type (product 0.30, remedy 0.16). A search landing on a page without Amazon is valued at the product rate, because it would need a product page.
- **Twelve months:** the six observed months, plus November-April estimated as the last 28 days x 6 x a winter level for each product family. The levels are my assumptions, taken from the Oct 30 Trends seasons: rodents 1.0-1.2, bed bugs and cockroaches 0.9, mosquito 0.1, wasps 0.05.
- **Chance of the top 3:** measured on this site (section 2c).

**Built pages:** the local build of Nov 3 (commit 3db30e9f). 333 pages carry amazon.ca links, 230 carry the amazon.com pick, and none carries both.

**Nothing in the repository was changed** except the files in this folder. No Amazon page was fetched and no Ahrefs tool was called.

## 1. Which pages and placements produce the Amazon clicks now

### Month by month (GA4)

| Month | Amazon clicks | Canada | US | Elsewhere | Canadian sessions | US sessions | Canadian clicks per 100 Canadian sessions |
|---|---:|---:|---:|---:|---:|---:|---:|
| Jul 2026 (links live from Jul 10) | 734 | 643 | 31 | 60 | 7,624 | 1,263 | 8.4 |
| Aug 2026 | 1,930 | 1,614 | 148 | 168 | 9,216 | 2,498 | 17.5 |
| Sep 2026 | 1,624 | 1,403 | 126 | 95 | 8,316 | 3,695 | 16.9 |
| **Oct 2026 (baseline)** | **1,177** | **1,061** | **71** | **45** | 6,005 | 4,041 | 17.7 |
| Nov 1-2 | 70 | 67 | 2 | 1 | 512 | 494 | 13.1 |

July and August use GA4's outbound click to Amazon.

- **The click rate held from August to October; the visitors fell.** Canadians made about 17-18 Amazon clicks per 100 sessions every month.
- **US visitors are growing but rarely click Amazon.** US sessions grew 15-fold from May to October, but they make 1.8 Amazon clicks per 100 sessions against 17.7 for Canadians.

### By page type (Sep 2 - Nov 2)

| Page type | Pages with Canadian views | Canadian Amazon clicks | Per 1,000 Canadian views | Per Canadian session that started on that type | US clicks | Per 1,000 US views |
|---|---:|---:|---:|---:|---:|---:|
| Product | 166 | 2,032 | 265 | 0.30 | 143 | 92 |
| Remedy | 61 | 430 | 140 | 0.16 | 25 | 50 |
| Information (with amazon.ca) | 85 | 64 | 19 | 0.03 | 26 | 7 |
| US guide (one amazon.com pick) | 132 | 5 | 7.5 | 0.009 | 5 | 2.6 |
| No Amazon | 125 | 0 | 0 | 0.008 | 0 | 0 |

The "no Amazon" sessions clicked Amazon later, on another page.

Over the whole window GA4 counted 2,871 Amazon clicks: 2,531 Canada, 199 US, 141 elsewhere. 225 pages had at least one click.

### Top 40 pages (Sep 2 - Nov 2)

Full list with US rates and per-month splits: `amazon_clicks_by_page.csv`.

| # | Page (/blog/) | Type | Season | Amazon clicks, all | Canada | US | Canadian clicks per 1,000 Canadian sessions starting there | Per 1,000 Canadian views | Canada, Oct 13-Nov 2 | Main placement | Most-clicked product (Canada) |
|---:|---|---|---|---:|---:|---:|---:|---:|---:|---|---|
| 1 | how-to-get-rid-of-ground-wasps-canada | remedy | late summer | 119 | 112 | 7 | 157 | 137 | 4 | BuyLink 38% | Wilson One Shot foam |
| 2 | advion-cockroach-gel-bait | product | year-round | 119 | 116 | 2 | 264 | 263 | 30 | BuyLink 62% | Combat roach bait stations |
| 3 | best-bed-bug-steamer-canada | product | year-round | 102 | 91 | 8 | 644 | 545 | 19 | BuyLink 59% | Vapamore MR-100 |
| 4 | raccoon-deterrent | product | spring-fall | 100 | 85 | 10 | 323 | 276 | 12 | BuyLink 71% | motion-activated sprinkler |
| 5 | wasp-dust-canada | product | late summer | 96 | 93 | 1 | 193 | 171 | 18 | BuyLink 55% | Wilson One Shot foam |
| 6 | best-dehumidifier-for-cold-garage-canada | product | summer-fall | 85 | 82 | 0 | 587 | 547 | 33 | BuyLink 66% | desiccant garage dehumidifier |
| 7 | electric-fly-swatter | product | summer-fall | 81 | 55 | 13 | 449 | 417 | 16 | BuyLink 75% | Zap It swatter |
| 8 | best-rat-trap-canada | product | year-round | 78 | 70 | 7 | 457 | 393 | 27 | BuyLink 50% | Victor rat trap |
| 9 | best-fruit-fly-trap-canada | product | late summer-fall | 70 | 67 | 1 | 409 | 387 | 30 | BuyLink 60% | Terro fruit fly trap |
| 10 | motion-activated-sprinkler-canada | product | spring-fall | 65 | 65 | 0 | 561 | 575 | 13 | BuyLink 88% | Orbit Yard Enforcer |
| 11 | laser-mosquito-killer-photon-matrix-review | product | summer | 62 | 20 | 13 | 136 | 98 | 4 | BuyLink 55% | Mosquito Magnet Patriot Plus |
| 12 | best-wasp-nest-spray-canada | product | late summer | 60 | 60 | 0 | 164 | 135 | 2 | AwardCard 33% | Raid wasp and hornet |
| 13 | bed-bug-mattress-encasement-canada | product | year-round | 53 | 52 | 0 | 574 | 481 | 14 | BuyLink 74% | Utopia zippered encasement |
| 14 | mosquito-bits-canada-vs-dunks | product | summer | 49 | 47 | 2 | 190 | 173 | 17 | BuyLink 42% | Summit mosquito bits |
| 15 | best-cockroach-spray-canada | product | year-round | 45 | 44 | 1 | 261 | 215 | 9 | BuyLink 53% | Combat roach bait stations |
| 16 | best-flea-spray-for-home-canada | product | late summer-fall | 42 | 41 | 0 | 385 | 306 | 21 | BuyLink 65% | IGR flea spray |
| 17 | best-rodent-repellent-for-cars-canada | product | fall-winter | 39 | 37 | 2 | 212 | 186 | 20 | BuyLink 70% | capsaicin rodent tape |
| 18 | best-steam-cleaner-for-pest-control-canada | product | year-round | 39 | 28 | 6 | 548 | 475 | 11 | BuyLink 61% | Dupray Neat |
| 19 | best-bed-bug-detector-canada | product | year-round | 38 | 38 | 0 | 685 | 655 | 3 | BuyLink 56% | CO2 bed bug monitor |
| 20 | bed-bug-spray-canada | remedy | year-round | 35 | 35 | 0 | 405 | 310 | 8 | BuyLink 27% | Doktor Doom Sleep Tight |
| 21 | best-bed-bug-powder-canada | product | year-round | 34 | 26 | 4 | 372 | 313 | 10 | BuyLink 46% | CimeXa dust |
| 22 | cimexa-bed-bug-review-canada | product | year-round | 33 | 31 | 2 | 484 | 413 | 6 | BuyLink 53% | CimeXa dust |
| 23 | best-wasp-trap | product | late summer | 32 | 31 | 0 | 372 | 365 | 0 | BuyLink 50% | Rescue W-H-Y trap |
| 24 | best-bed-bug-trap-canada | product | year-round | 31 | 30 | 1 | 448 | 390 | 14 | BuyLink 56% | bed bug monitor lure trap |
| 25 | bed-bug-heater-canada | product | year-round | 31 | 17 | 1 | 366 | 340 | 6 | BuyLink 69% | ThermalStrike heater |
| 26 | permethrin-canada-yard-clothing-spray | remedy | summer | 30 | 28 | 2 | 104 | 91 | 15 | BuyLink 72% | Insect Shield clothing |
| 27 | how-to-get-rid-of-drain-flies-canada | remedy | summer-fall | 30 | 30 | 0 | 323 | 286 | 7 | BuyLink 88% | drain brush set |
| 28 | best-indoor-fly-mosquito-trap-canada | product | summer | 28 | 23 | 3 | 1,222 | 1,150 | 3 | BuyLink 62% | Katchy indoor trap |
| 29 | best-mosquito-trap | product | summer | 28 | 17 | 8 | 311 | 254 | 2 | AwardCard 53% | Biogents Mosquitaire |
| 30 | best-hepa-vacuum-for-bed-bugs-and-fleas-canada | product | year-round | 27 | 23 | 2 | 688 | 622 | 9 | BuyLink 78% | Miele sealed HEPA vacuum |
| 31 | mosquito-repellent-guide-ontario-2026 | remedy | summer | 26 | 26 | 0 | 277 | 260 | 3 | BuyLink 92% | OFF Deep Woods |
| 32 | best-roach-traps-canada | product | year-round | 26 | 26 | 0 | 440 | 448 | 7 | BuyLink 79% | Combat roach bait stations |
| 33 | rat-poison-canada-what-is-legal | product | fall-winter | 25 | 25 | 0 | 134 | 97 | 9 | BuyLink 77% | Tomcat bait station |
| 34 | rodent-exclusion-kit-canada | product | fall-winter | 24 | 21 | 3 | 512 | 457 | 2 | BuyLink 65% | copper mesh |
| 35 | crossfire-bed-bug-concentrate-review-canada | product | year-round | 24 | 23 | 1 | 290 | 207 | 11 | BuyLink 84% | CimeXa dust |
| 36 | how-to-get-rid-of-cockroaches-canada | remedy | year-round | 23 | 23 | 0 | 469 | 240 | 3 | BuyLink 76% | roach bait stations |
| 37 | best-raccoon-live-trap-canada | product | spring-fall | 23 | 23 | 0 | 606 | 697 | 12 | BuyLink 53% | Duke cage trap |
| 38 | best-spider-spray-canada | product | late summer-fall | 21 | 21 | 0 | 292 | 262 | 1 | AwardCard 67% | residual insecticide spray |
| 39 | best-mouse-trap-canada | product | fall-winter | 21 | 21 | 0 | 375 | 568 | 11 | BuyLink 41% | Victor mouse traps |
| 40 | best-sump-pump-for-basement-canada | product | mixed | 21 | 20 | 1 | 322 | 303 | 5 | BuyLink 60% | cast iron sump pump |

How concentrated it is:
- The top 10 pages make 31.9% of all Amazon clicks.
- The top 20 make 48.0%, the top 40 make 66.7% and the top 100 make 89.8%.

**The mix is turning to winter.**
- The ground-wasp page fell from 96 Canadian clicks in September to 4 in the last three weeks.
- The last three weeks' leaders (Oct 13-Nov 2):
  - garage dehumidifier 33
  - fruit fly trap 30
  - Advion 30
  - rat trap 27
  - flea spray 21
  - rodent repellent for cars 20
  - bed bug steamer 19
  - wasp dust 18
  - mosquito bits 17
- In October, 73% of Canadian clicks came from indoor topics. On Nov 1-2 it was 91%.

**The pages with the most US clicks are amazon.ca pages:**
- the laser killer, 13 US clicks on 341 US views
- the electric fly swatter, 13
- raccoon deterrent, 10

### Placements (Sep 17 - Nov 2)

Placement data starts Sep 17.

| Placement | Canada clicks | Share of Canada | US clicks | Share of US | Canadian clicks on phones | October | Nov 1-2 |
|---|---:|---:|---:|---:|---:|---:|---:|
| BuyLink (buttons, including inside boxes and cards) | 1,059 | 63.6% | 63 | 50.4% | 54% | 744 | 42 |
| AwardCard | 229 | 13.8% | 14 | 11.2% | 48% | 161 | 9 |
| StickyBuyBar | 227 | 13.6% | 33 | 26.4% | 95% | 160 | 3 |
| TopBox (from Oct 20) | 74 | 4.4% | 3 | 2.4% | 72% | 63 | 16 |
| unknown | 62 | 3.7% | 6 | 4.8% | 60% | 32 | 0 |
| TopPick | 8 | 0.5% | 1 | 0.8% | 75% | 6 | 0 |
| GuidePick (amazon.com, from Oct 20) | 5 | 0.3% | 5 | 4.0% | 100% | 11 | 0 |

**The top box re-routes clicks; it does not add them.**
- It took 17.8% of the Canadian clicks on its 217 pages since Oct 20.
- But product pages with the box made 288 Canadian clicks per 1,000 views on Oct 1-19 and 291 on Oct 20-Nov 2. That is flat.
- This matches the Oct 20 finding: the box mostly collects clicks that another button would have got. It is two weeks at a season change, so it is not proof.

**The sticky bar may be losing share under Mediavine.** Its share of Canadian clicks was 17.7% from Sep 17-30, 12.2% in October and 4.5% on Nov 1-2. Those last two days are too few to read, and Mediavine only started on Nov 2.
- Since Nov 2 our fixed bars hide below 1024px while Mediavine pins an ad (`app/globals.css`, rule 6).
- The Oct 20 study found the bar adds at most about a quarter of phone clicks. So the loss is probably smaller than its share, but it is unmeasured.

**Other click details:**
- **First screen:** 6% of Canadian clicks since Oct 20 came from a link in the first screen at load (25 of about 436). 23 of those were the top box.
- **Link kind:** 90% of clicks are on search links and 10% on single-product (ASIN) links.
- **Device:** 60% of Canadian clicks come from phones.
- **What Canadians clicked most (search terms, Sep 17 - Nov 2):**
  - Combat roach bait stations 118
  - Wilson One Shot foam 52
  - Terro fruit fly trap 50
  - Vapamore MR-100 49
  - desiccant garage dehumidifier 46
  - Victor rat trap 44
  - CimeXa 40
  - Summit mosquito bits 32
  - IGR flea spray 30
  - Insect Shield permethrin clothing 23

  Full list: `amazon_clicks_by_search_term.csv`.
- **Channel:** 91% of Canadian clicks come from organic search sessions, about 18 per 100 sessions. AI assistants sent 164 Canadian sessions that made 59 clicks, 36 per 100, twice the organic rate but tiny.

## 2. Buying searches worth targeting

### 2a. What Search Console can and cannot show

**The searches I could see:**
- 1,481 buying searches had 40+ Canadian impressions from May 3 to Nov 1.
- Together they had 402,101 Canadian impressions (39% of all Canadian query impressions) and 5,798 Canadian clicks.

By kind:

| Kind | Searches | Canadian impressions | CTR |
|---|---:|---:|---:|
| Generic product word | 614 | 162,428 | 0.85% |
| Brand | 338 | 98,565 | 1.95% |
| "best", review or "canada" | 396 | 93,733 | 2.32% |
| Names a store | 130 | 47,179 | 0.67% |
| Names Amazon | 3 | 196 | |

**The visible searches explain only part of the clicks.**
- I estimated each search's Amazon clicks as its Canadian Google clicks x the Amazon clicks per session of the page it lands on.
- For July to October, the months the links were live, that comes to about 1,010 Amazon clicks. That is 22% of the roughly 4,660 Canadian GA4 clicks in those months.
- In the last 28 days it is 147, 16% of roughly 910.
- The rest arrive on the same product pages through searches Search Console hides (it hides about 62% of Canadian clicks) or searches my filter does not count as buying.
- **So a rank gain on a page is worth about 4 times (3-5 times) what its visible searches show.** The page tables below are the more reliable guide; the search tables say which words to aim at.

**Where our buying impressions sit:**

| Position | Share of buying impressions |
|---|---:|
| Top 3 | 1.7% |
| 3.5-5.5 | 11% |
| 5.5-7.5 | 29% |
| 7.5-10.5 | 43% |
| Below 10.5 | 15% |

### 2b. The searches producing Amazon clicks now (estimated)

Each estimate is the search's Canadian Google clicks x today's Amazon clicks per session on its page. The May-June searches happened before the links went live on Jul 10, so the six-month figures show what these searches are worth at today's rates, not what they earned.

| Search | Canadian Google clicks, 6 mo | Position | Page | Amazon clicks per session there | Estimated Amazon clicks, 6 mo | Season |
|---|---:|---:|---|---:|---:|---|
| mosquito bits canada | 664 | 3.6 | mosquito-bits-canada-vs-dunks | 0.20 | 134 | summer |
| mosquito bits | 471 | 6.2 | mosquito-bits-canada-vs-dunks | 0.20 | 95 | summer |
| mosquito dunks canada | 108 | 7.6 | mosquito-dunks-canada-guide | 0.23 | 24 | summer |
| best mosquito repellent canada | 96 | 3.3 | mosquito-repellent-guide-ontario-2026 | 0.25 | 24 | summer |
| mosquito magnet canada | 89 | 7.8 | mosquito-magnet-canada | 0.20 | 18 | summer |
| delta dust canada | 113 | 3.4 | how-to-get-rid-of-ground-wasps-canada | 0.16 | 18 | late summer |
| advion cockroach gel bait | 55 | 9.0 | advion-cockroach-gel-bait | 0.27 | 15 | year-round |
| mosquito fogger | 42 | 8.7 | mosquito-fogger-canada | 0.34 | 14 | summer |
| best fruit fly trap | 36 | 6.8 | best-fruit-fly-trap-canada | 0.39 | 14 | late summer-fall |
| best mosquito repellent | 53 | 5.4 | mosquito-repellent-guide-ontario-2026 | 0.25 | 13 | summer |
| permethrin canada | 112 | 6.0 | permethrin-canada-yard-clothing-spray | 0.11 | 12 | summer |
| wasp powder canada | 57 | 5.3 | wasp-dust-canada | 0.20 | 11 | late summer |

**In the last 28 days (Oct 5 - Nov 1) the leaders are winter searches:**
- best fruit fly trap
- mosquito bits canada (still)
- best cockroach killer canada
- best rat traps
- best steamer for bed bugs
- advion cockroach gel bait canada
- best dehumidifier canada
- garage dehumidifier canada
- best bed bug killer in canada

Each has only 2-4 estimated Amazon clicks. That is the off-season scale.

### 2c. How often a search reaches the top 3 here (measured)

I took Canadian buying searches with 20+ impressions in both months and compared their position two to three months apart. The pairs were Jun to Aug, Jun to Sep, Jul to Sep, Jul to Oct and Aug to Oct.

| Position in the earlier month | Searches | In the top 3 later | Moved up 1+ position | Average move (+ = better) |
|---|---:|---:|---:|---:|
| 1-3.5 | 41 | 49% stayed | | -2.2 |
| 3.5-5.5 | 137 | **21%** | 23% | -0.5 |
| 5.5-7.5 | 195 | **7.7%** | 35% | +0.2 |
| 7.5-10.5 | 362 | **1.4%** | 49% | +0.9 |
| 10.5-15.5 | 202 | **0%** | 53% | +1.0 |
| 15.5-20.5 | 33 | 0% | 73% | +3.0 |
| 20.5 and lower | 22 | 0% | 77% | +7.0 |

**What this means:**
- Small gains are common; jumps into the top 3 are rare.
- These months included the site's upgrade work, so this is the base rate with effort, not without it.
- With 50+ impressions the rates are lower still: 12% from 3.5-5.5 and 5% from 5.5-7.5.

### 2d. Top 30 buying searches by Amazon value (Canada)

All 30 already land on a product or remedy page with Amazon. So the action is to push that page; none needs a new page. "Mid / high" are the two CTR cases from "How the numbers were made".

| # | Search | Kind | Canadian impressions, 6 mo (Canadian share) | Position, 6 mo / 28 days | CTR | Page Google shows | Season | Extra Amazon clicks a year at #3, mid / high | Chance of top 3 in about 3 months |
|---:|---|---|---:|---|---:|---|---|---|---:|
| 1 | crawl space dehumidifier | generic | 228 (98%) | 22.9 / 18.8 | 0.44% | best-crawl-space-dehumidifier-canada | summer-fall | 55 / 69 | 0.3% |
| 2 | rat poison | generic | 138 (99%) | 24.3 / 12.2 | 1.45% | rat-poison-canada-what-is-legal | fall-winter | 51 / 51 | 0.3% |
| 3 | mosquito bits | generic | 18,896 (99%) | 6.2 / 7.6 | 2.49% | mosquito-bits-canada-vs-dunks | summer | 47 / 47 | 7.7% |
| 4 | advion cockroach gel bait | brand | 3,497 (97%) | 8.9 / 10.7 | 1.57% | advion-cockroach-gel-bait | year-round | 44 / 128 | 1.4% |
| 5 | mouse traps | generic | 248 (95%) | 19.7 / 15.8 | 0.4% | best-mouse-trap-canada | fall-winter | 42 / 84 | 0.3% |
| 6 | rat trap | generic | 949 (78%) | 11.4 / 11.2 | 0.42% | best-rat-trap-canada | year-round | 35 / 80 | 0.5% |
| 7 | bug zapper | generic | 3,195 (97%) | 12.6 / 14.1 | 0.25% | bug-zappers-canada-do-they-work | summer | 32 / 97 | 0.5% |
| 8 | rat traps | generic | 1,450 (71%) | 14.6 / 13.3 | 0.14% | best-rat-trap-canada | year-round | 31 / 153 | 0.5% |
| 9 | mosquito dunks canada | best/Canada | 9,239 (99%) | 7.6 / 6.0 | 1.17% | mosquito-dunks-canada-guide | summer | 27 / 92 | 1.4% |
| 10 | best patio heater | best/Canada | 109 (75%) | 19.6 / 19.8 | 0.0% | best-patio-heater-canada | winter | 24 / 111 | 0.3% |
| 11 | sump pumps | generic | 134 (100%) | 16.3 / 15.7 | 0.75% | best-sump-pump-for-basement-canada | spring-summer | 24 / 37 | 0.3% |
| 12 | mosquito fogger | generic | 3,940 (97%) | 8.7 / 9.2 | 1.07% | mosquito-fogger-canada | summer | 23 / 23 | 1.4% |
| 13 | cockroach gel bait | generic | 1,412 (100%) | 11.4 / 11.4 | 0.71% | advion-cockroach-gel-bait | year-round | 21 / 29 | 0.5% |
| 14 | basement dehumidifier | generic | 120 (100%) | 22.5 / 13.3 | 0.83% | best-large-capacity-dehumidifier-canada | summer-fall | 21 / 21 | 0.3% |
| 15 | best rat traps | best/Canada | 1,201 (87%) | 7.5 / 6.1 | 1.33% | best-rat-trap-canada | year-round | 20 / 62 | 1.4% |
| 16 | electric fly swatter | generic | 4,471 (100%) | 9.4 / 7.8 | 0.45% | electric-fly-swatter | summer-fall | 20 / 55 | 1.4% |
| 17 | fruit fly trap | generic | 1,825 (89%) | 12.2 / 11.6 | 0.22% | best-fruit-fly-trap-canada | late summer-fall | 19 / 77 | 0.5% |
| 18 | mosquito magnet canada | brand | 2,627 (99%) | 7.8 / 9.6 | 3.39% | mosquito-magnet-canada | summer | 19 / 30 | 1.4% |
| 19 | bed bug spray | generic | 1,463 (96%) | 12.8 / 10.4 | 0.14% | best-bed-bug-spray-for-mattress-canada | year-round | 18 / 90 | 0.5% |
| 20 | best dehumidifier canada | best/Canada | 2,296 (100%) | 8.3 / 8.9 | 0.87% | best-dehumidifier-for-mold-canada | summer-fall | 18 / 85 | 1.4% |
| 21 | motion activated sprinkler | generic | 1,856 (96%) | 7.5 / 7.5 | 1.02% | motion-activated-sprinkler-canada | spring-fall | 18 / 24 | 1.4% |
| 22 | best fruit fly trap | best/Canada | 6,177 (99%) | 6.8 / 6.3 | 0.58% | best-fruit-fly-trap-canada | late summer-fall | 17 / 162 | 7.7% |
| 23 | advion cockroach gel | brand | 1,674 (99%) | 9.0 / 10.2 | 1.25% | advion-cockroach-gel-bait | year-round | 17 / 65 | 1.4% |
| 24 | bed bug traps | generic | 437 (100%) | 13.9 / 10.1 | 0.23% | best-bed-bug-trap-canada | year-round | 17 / 56 | 0.5% |
| 25 | cockroach spray | generic | 1,750 (99%) | 10.9 / 11.2 | 0.23% | best-cockroach-spray-canada | year-round | 16 / 60 | 0.5% |
| 26 | mouse repellent | generic | 248 (100%) | 13.8 / 11.9 | 1.61% | mouse-repellent-canada | fall-winter | 14 / 14 | 0.5% |
| 27 | dehumidifier for basement | generic | 360 (98%) | 20.0 / 15.0 | 0.28% | best-large-capacity-dehumidifier-canada | summer-fall | 14 / 33 | 0.3% |
| 28 | indoor fly traps | generic | 124 (100%) | 30.5 / 29.4 | 0.0% | best-indoor-fly-mosquito-trap-canada | summer-fall | 14 / 44 | 0.3% |
| 29 | best mouse traps | best/Canada | 278 (99%) | 11.0 / 10.2 | 0.36% | best-mouse-trap-canada | fall-winter | 13 / 59 | 0.5% |
| 30 | cockroach gel bait canada | best/Canada | 1,361 (98%) | 6.9 / 7.4 | 1.84% | advion-cockroach-gel-bait | year-round | 13 / 34 | 7.7% |

**How to read the table:**
- **Rows 1, 2, 5, 10, 11, 14, 27 and 28 rest on few impressions.** They are small searches that sit deep, so the "impressions grow as you climb" factor dominates. They are real demand signals, but their chance of reaching the top 3 is about 0.3%.
- **The realistic targets** are the big searches already at 5-9 (section 2e).
- **Mosquito bits:** part of "mosquito bits" is a typo for "mosquito bites". The page converts at 0.20 Amazon clicks per session, below the product-page 0.30.
- **Rat poison:** the domestic-class rules must stay on the page.

**If all 1,481 visible buying searches reached #3:**
- They would add 2,241 (mid) to 7,397 (high) Amazon clicks a year.
- At the page level, which is about 4 times larger, that is about 750-2,450 a month on average.
- At the measured top-3 rates the expected gain is about 71 a year on the visible searches, about 280 at the page level.

### 2e. The most winnable searches (Canadian position 3.5-7.5, 500+ impressions)

| Search | Kind | Canadian impressions, 6 mo | Position, 6 mo / 28 days | CTR | Page | Season | Extra a year at #3, mid / high |
|---|---|---:|---|---:|---|---|---|
| best fruit fly trap | best/Canada | 6,177 | 6.8 / 6.3 | 0.58% | best-fruit-fly-trap-canada | late summer-fall | 17 / 162 |
| cimexa | brand | 894 | 6.5 / 6.3 | 1.34% | cimexa-bed-bug-review-canada | year-round | 12 / 72 |
| nestoff mouse repellent | brand | 1,152 | 7.0 / 7.1 | 1.04% | mouse-repellent-canada | fall-winter | 7 / 53 |
| mosquito bits | generic | 18,896 | 6.2 / 7.6 | 2.49% | mosquito-bits-canada-vs-dunks | summer | 47 / 47 |
| advion cockroach gel bait canada | brand | 1,217 | 5.1 / 5.8 | 3.04% | advion-cockroach-gel-bait | year-round | 9 / 44 |
| cockroach gel bait canada | best/Canada | 1,361 | 6.9 / 7.4 | 1.84% | advion-cockroach-gel-bait | year-round | 13 / 34 |
| permethrin canada | brand | 4,334 | 6.0 / 6.9 | 2.58% | permethrin-canada-yard-clothing-spray | summer | 6 / 31 |
| best rat trap | best/Canada | 556 | 6.9 / 5.2 | 1.44% | best-rat-trap-canada | year-round | 8 / 26 |
| permethrin | brand | 3,005 | 4.0 / 5.5 | 1.0% | permethrin-canada-yard-clothing-spray | summer | 0 / 26 |
| photon matrix | brand | 2,371 | 5.6 / 6.0 | 2.19% | laser-mosquito-killer-photon-matrix-review | summer | 4 / 25 |
| permethrin spray canada | brand | 3,117 | 6.5 / 8.1 | 2.98% | permethrin-canada-yard-clothing-spray | summer | 9 / 21 |
| best dehumidifier for basement canada | best/Canada | 1,072 | 7.4 / 7.7 | 1.4% | best-large-capacity-dehumidifier-canada | summer-fall | 5 / 18 |
| raccoon repellent | generic | 1,734 | 7.3 / 6.8 | 0.92% | raccoon-deterrent | spring-fall | 9 / 17 |
| best mosquito repellent | best/Canada | 2,120 | 5.4 / 7.0 | 2.5% | mosquito-repellent-guide-ontario-2026 | summer | 6 / 16 |
| best cockroach killer canada | best/Canada | 877 | 5.2 / 4.3 | 3.08% | best-cockroach-spray-canada | year-round | 7 / 15 |

All 52 searches in this band together: 276 (mid) to 852 (high) extra Amazon clicks a year on their visible searches.

**The best fruit fly trap search under-clicks.** It gets 0.58% at #6.8, about a third of what "best" searches usually get at that position here. That points to the title or snippet, not the rank.

### 2f. Target pages (each page's buying searches added together)

| # | Page (/blog/) | Buying searches | Canadian buying impressions, 6 mo | Page position, 28 days | Canadian Amazon clicks, Sep 2-Nov 2 | Extra a year if its searches reached #3, mid / high | Biggest searches (Canadian impressions, position) |
|---:|---|---:|---:|---:|---:|---|---|
| 1 | advion-cockroach-gel-bait | 52 | 16,380 | 7.8 | 116 | 159 / 540 | advion cockroach gel bait (3,497, #9); advion cockroach gel (1,674, #9); cockroach gel bait (1,412, #11) |
| 2 | best-rat-trap-canada | 25 | 6,915 | 7.6 | 70 | 135 / 472 | rat traps (1,450, #15); best rat traps (1,201, #8); rat trap (949, #11) |
| 3 | best-large-capacity-dehumidifier-canada (now also the basement page) | 34 | 4,855 | 10.4 | 12 | 85 / 290 | best dehumidifier for basement canada (1,072, #7); dehumidifier for basement (360, #20); best dehumidifiers canada (295, #8) |
| 4 | mosquito-bits-canada-vs-dunks | 63 | 36,886 | 5.7 | 47 | 77 / 104 | mosquito bits (18,896, #6); mosquito bits canada (8,710, #4); mosquito bits home depot canada (637, #5) |
| 5 | best-fruit-fly-trap-canada | 33 | 15,361 | 8.3 | 67 | 72 / 359 | best fruit fly trap (6,177, #7); fruit fly trap (1,825, #12); fruit fly trap canadian tire (1,810, #10) |
| 6 | best-mouse-trap-canada | 4 | 1,250 | 9.7 | 21 | 69 / 183 | best mouse traps canada (375, #7); best mouse trap (349, #10); best mouse traps (278, #11) |
| 7 | mosquito-dunks-canada-guide | 57 | 31,035 | 7.0 | 19 | 69 / 207 | mosquito dunks canada (9,239, #8); mosquito dunks canadian tire (4,700, #6); mosquito dunks (3,361, #7) |
| 8 | best-cockroach-spray-canada | 25 | 6,202 | 7.5 | 44 | 60 / 191 | cockroach spray (1,750, #11); best cockroach killer canada (877, #5); best cockroach killer (561, #9) |
| 9 | best-crawl-space-dehumidifier-canada | 3 | 438 | 10.0 | 8 | 57 / 75 | crawl space dehumidifier (228, #23); crawl space dehumidifier canada (138, #8) |
| 10 | rat-poison-canada-what-is-legal | 8 | 678 | 5.3 | 25 | 55 / 62 | rat poison (138, #24); rat poison outdoor (122, #10) |
| 11 | bug-zappers-canada-do-they-work | 28 | 7,763 | 11.3 | 7 | 53 / 183 | bug zapper (3,195, #13); bug zappers (875, #14); best bug zapper (659, #6) |
| 12 | best-bed-bug-spray-for-mattress-canada | 24 | 5,473 | 7.7 | 15 | 51 / 225 | bed bug spray (1,463, #13); best bed bug killer in canada (708, #4); best bed bug spray (491, #5) |
| 13 | permethrin-canada-yard-clothing-spray | 84 | 30,170 | 6.7 | 28 | 51 / 222 | permethrin spray (5,121, #9); permethrin canada (4,334, #6); permethrin spray canada (3,117, #7) |
| 14 | best-sump-pump-for-basement-canada | 10 | 952 | 9.0 | 20 | 50 / 110 | best sump pump canada (220, #7); submersible sump pump (174, #11) |
| 15 | electric-fly-swatter | 38 | 9,600 | 8.4 | 55 | 49 / 161 | electric fly swatter (4,471, #9); electric fly swatter canadian tire (845, #6) |
| 16 | mosquito-fogger-canada | 41 | 10,350 | 9.1 | 18 | 48 / 70 | mosquito fogger (3,940, #9); mosquito fogger liquid (1,128, #7) |
| 17 | best-bed-bug-steamer-canada | 14 | 2,345 | 7.2 | 91 | 44 / 52 | steam cleaner for bed bugs (629, #7); steamer for bed bugs (300, #9) |
| 18 | best-screen-tent-canada | 14 | 3,860 | 14.1 | 11 | 44 / 141 | screen tent (1,273, #15); screen house (666, #17) |
| 19 | mouse-repellent-canada | 20 | 3,936 | 7.1 | 8 | 41 / 140 | nestoff mouse repellent (1,152, #7); best mouse repellent canada (496, #6) |
| 20 | raccoon-deterrent | 16 | 6,132 | 5.4 | 85 | 37 / 66 | raccoon repellent (1,734, #7); raccoon deterrent (1,002, #7) |

**Totals for the top pages:**
- The top 20 pages add 1,306 (mid) to 3,853 (high) Amazon clicks a year if all their visible searches reached #3.
- At the page level that is about 440-1,280 a month on average.
- At the measured top-3 rates, expect a handful of these searches to get there by July, about +50 to +250 a month at the page level.

Full list (154 pages): `amazon_target_pages_canada.csv`.

### 2g. The products the owner named

| Set | Searches (40+ impressions) | Canadian impressions, 6 mo | Canadian clicks | CTR | Position | Canadian impressions, last 28 days | Impressions by month, May to Oct | Extra Amazon clicks a year at #3, mid / high | Main page |
|---|---:|---:|---:|---:|---:|---:|---|---|---|
| Names a store (Canadian Tire, Home Depot, Rona, Walmart, Costco...) | 130 | 47,179 | 316 | 0.67% | 8.2 | 2,906 | 1,003 / 8,037 / 18,064 / 10,133 / 6,613 / 3,359 | 75 / 237 | thermacell-canada-where-to-buy |
| of which Canadian Tire | 102 | 40,787 | 188 | 0.46% | 8.3 | 2,683 | 611 / 5,465 / 16,092 / 9,352 / 6,168 / 3,115 | 61 / 218 | thermacell-canada-where-to-buy |
| of which Home Depot | 8 | 3,241 | 60 | 1.85% | 7.0 | 126 | 55 / 1,266 / 1,029 / 504 / 244 / 140 | 6 / 10 | mosquito-dunks-canada-guide |
| Thermacell | 27 | 18,225 | 19 | 0.10% | 9.2 | 199 | 29 / 770 / 12,547 / 3,893 / 729 / 251 | 17 / 161 | thermacell-canada-where-to-buy |
| Mosquito dunks and bits | 119 | 68,114 | 1,922 | 2.82% | 6.2 | 3,452 | 5,377 / 30,720 / 16,213 / 7,636 / 5,287 / 3,913 | 146 / 310 | mosquito-bits-canada-vs-dunks |
| Laser mosquito killer (Photon Matrix) | 24 | 9,208 | 238 | 2.58% | 6.4 | 768 | 0 / 0 / 979 / 5,963 / 1,328 / 928 | 21 / 63 | laser-mosquito-killer-photon-matrix-review |
| Permethrin | 81 | 29,941 | 671 | 2.24% | 6.7 | 1,464 | 17 / 9,671 / 10,543 / 5,910 / 2,155 / 1,611 | 51 / 221 | permethrin-canada-yard-clothing-spray |
| Wasp spray, foam and dust | 113 | 28,889 | 593 | 2.05% | 6.9 | 2,631 | 0 / 1 / 780 / 9,317 / 15,323 / 3,415 | 50 / 128 | best-wasp-nest-spray-canada |
| Mouse traps | 5 | 1,364 | 10 | 0.73% | 11.2 | 675 | 0 / 0 / 193 / 279 / 175 / 650 | 70 / 188 | best-mouse-trap-canada |
| Rat traps | 22 | 6,708 | 50 | 0.75% | 10.1 | 2,181 | 0 / 0 / 545 / 1,650 / 2,114 / 2,318 | 131 / 463 | best-rat-trap-canada |
| NestOff and rodent repellents | 36 | 6,157 | 85 | 1.38% | 7.5 | 4,642 | 0 / 0 / 83 / 487 / 762 / 4,298 | 61 / 187 | mouse-repellent-canada |
| Bed bug spray | 61 | 11,561 | 170 | 1.47% | 8.3 | 3,281 | 0 / 0 / 414 / 3,066 / 4,247 / 3,741 | 109 / 533 | best-bed-bug-spray-for-mattress-canada |
| Fruit fly traps | 34 | 15,528 | 69 | 0.44% | 8.6 | 4,516 | 0 / 0 / 349 / 4,498 / 5,458 / 4,970 | 72 / 360 | best-fruit-fly-trap-canada |

#### Searches that name Canadian Tire or Home Depot (about 55,000 impressions)

**The demand is real:**
- All Canadian searches that name a store came to 54,282 impressions over six months (1,408 searches). Canadian Tire alone was 45,078.
- The 130 with 40+ impressions came to 47,179.

**Our CTR on them depends on the product.**

| Store-named searches at position | CTR |
|---|---:|
| 4.5-5.5 (3,331 impressions) | 2.88% |
| 5.5-6.5 | 1.28% |
| 6.5-7.5 | 0.87% |
| 7.5-8.5 | 0.79% |
| 8.5-10.5 | 0.14-0.21% |

- **Where it works:** dunks and bits searches that name Rona, Home Depot or Walmart click our pages. Examples:
  - "mosquito bits home depot canada": 4.4% at #5.4
  - "mosquito dunks rona": 3.1% at #5.0
  - "mosquito dunks home depot canada": 2.5% at #5.4

  My reading: stores don't reliably stock BTI, so people look elsewhere.
- **Where it doesn't:** Thermacell at Canadian Tire got 0.08% at #9 (9 clicks on 11,626 impressions), probably because Canadian Tire stocks it.
- **The Amazon value is small either way:** 75-237 extra Amazon clicks a year if all 130 reached #3. The dunks and bits pages that these searches land on make 0.19-0.23 Amazon clicks per session, below the product-page 0.30.

**Advice:**
- A "Where to buy in Canada" section (the Nov 3 growth plan) is fine for readers and for traffic, but don't expect Amazon clicks from it.
- Don't put store names in titles. This is ops rule 8, and my numbers say the rule holds except for products the stores don't carry.
- Never print a store's price.

#### Summer products

- **Mosquito dunks and bits: the site's strongest buying family.**
  - 68,114 Canadian impressions, a 2.8% CTR at #6.2, and a June peak (30,720).
  - Extra at #3: +146 / +310 a year on visible searches. The page level is about 4 times that.
  - Two pages share it: bits vs dunks at #5.7 and the dunks guide at #7.0.
  - Both need to be in shape by April.
- **Permethrin:** 29,941 impressions at #6.7, peaking in June-July, worth +51 / +221.
  - The page converts poorly, at 0.10 Amazon clicks per session. Its readers ask what is legal ("why is permethrin banned in canada", 672).
  - Keep the registered-use facts primary-sourced (ops rule 7).
- **Wasp spray:** 28,889 impressions at #6.9, peaking in September, worth +50 / +128.
  - "wasp spray" alone: 6,279 impressions at #8.4 with a 0.3% CTR, landing on best-wasp-nest-spray-canada.
  - Check the registration of any dust the pages name.
- **Laser mosquito killer (Photon Matrix):** in Canada only 9,208 impressions at #6.4, worth +21 / +63.
  - Canadians are only 10-37% of these impressions. This is mostly a US search (section 3).
  - The page converts at 0.14 Amazon clicks per session, and its top click goes to Mosquito Magnet.
- **Thermacell:** 18,225 impressions but a 0.10% CTR, worth +17 / +161.
  - 91% of the impressions name Canadian Tire. Low Amazon value.
  - Thermacell LIV is not sold in Canada. Check each model's registration before naming it.
- **Mosquito traps and zappers:** 49,928 impressions at #9.1, worth +193 / +764. It is the second-largest family by potential.
  - Bug zappers: "bug zapper" 3,195 at #12.6. Health Canada says zappers do not reduce mosquitoes, so the page must keep saying that.
  - Dynatrap: 7,091 at #10.2. The page made 1 Canadian Amazon click from Sep 2 to Nov 2, off-season.
  - Mosquito Magnet: 2,958 at #9.8.

#### Winter products

- **Mouse traps: the biggest winter demand, and the weakest position.**
  - Trends puts Canadian searches at 10,300-30,900 a month at the November peak (Oct 30 demand map).
  - We showed for 1,364 visible impressions in six months. Our October impressions were 3.6 times September's.
  - Positions: "best mouse traps" #11, "best mouse trap" #10, "mouse traps" #16-20. "mouse trap" does not show up at all.
  - Visible value: +70 / +188.
  - At #3 on the head term, Trends demand x a 2.5% CTR x 0.30 Amazon clicks per visit is worth about 1,360 Amazon clicks a year, about 150-230 a month at the November peak. That alone would be 13-20% of October's whole total.
  - The head term is the hardest kind of search to win. Retailers and Amazon held 49% of the top-5 spots on 22 Canadian buying searches checked on Oct 30.
- **Rat traps: the biggest winnable winter page.**
  - 6,708 impressions at #10.1, worth +131 / +463.
  - The searcher's words rank low: "rat traps" #14.6 with a 0.14% CTR, "rat trap" #11.4, "rat zapper" #10.4. "best rat traps" sits at #7.5.
  - The page converts well, at 0.43 Amazon clicks per session.
- **NestOff and rodent repellents:** October exploded, to 4,298 impressions against 762 in September.
  - "nestoff mouse repellent" alone had 1,152 Canadian impressions in October, at #7.
  - **The page that ranks, mouse-repellent-canada, never mentions NestOff.** It converts at 0.08 Amazon clicks per session, half the remedy rate.
  - Worth +61 / +187.
- **Bed bug spray:** 11,561 impressions at #8.3, worth +109 / +533.
  - "bed bug spray" sits at #12.8 with a 0.14% CTR.
  - Two pages split it: best-bed-bug-spray-for-mattress-canada and bed-bug-spray-canada.
- **Fruit fly traps:** 15,528 impressions at #8.6 with a 0.44% CTR. They peaked in September-October and fall from November. Worth +72 / +360.
  - The page converts well (0.41 per session) but is under-clicked in search. Fix the title and snippet now, and judge it in August 2027.

### 2h. Product families, and the head terms we barely show for

| Family | Season | Canadian impressions we got, 6 mo | Last 28 days | Our CTR | Our position | Canadian searches a month (Trends, Oct 30 demand map) | Extra Amazon clicks a year if our visible searches reached #3, mid / high | Main pages |
|---|---|---:|---:|---:|---:|---|---|---|
| cockroach products | year-round | 23,894 | 5,632 | 1.54% | 8.5 | 2,900 (1,400-4,300) | 239 / 811 | advion-cockroach-gel-bait; best-cockroach-spray-canada |
| mosquito traps & zappers | summer | 49,928 | 2,800 | 1.32% | 9.1 | 6,200 (3,100-9,300) | 193 / 764 | dynatrap-canada-review; laser-mosquito-killer-photon-matrix-review |
| dehumidifiers | summer-fall | 9,612 | 2,812 | 0.77% | 10.6 | 43,900 (22,000-65,900) | 193 / 539 | best-large-capacity-dehumidifier-canada; best-dehumidifier-for-mold-canada |
| mosquito dunks & bits | summer | 68,114 | 3,452 | 2.82% | 6.2 | 2,800 (1,400-4,300) | 146 / 310 | mosquito-bits-canada-vs-dunks; mosquito-dunks-canada-guide |
| rat traps | year-round | 6,794 | 2,209 | 0.85% | 10.1 | 5,500 (2,700-8,200) | 133 / 465 | best-rat-trap-canada |
| bed bug sprays & powders | year-round | 12,328 | 3,473 | 1.41% | 8.4 | 1,800 (920-2,700) | 120 / 576 | best-bed-bug-spray-for-mattress-canada; crossfire-bed-bug-concentrate-review-canada |
| sump pumps & heaters | mixed | 1,939 | 873 | 0.93% | 10.7 | sump pumps 32,000; heaters 26,300 | 90 / 273 | best-sump-pump-for-basement-canada |
| bed bug gear | year-round | 6,353 | 1,896 | 0.88% | 9.2 | 340 (170-500) | 85 / 231 | bed-bug-mattress-encasement-canada; best-bed-bug-trap-canada |
| wildlife deterrents & traps | spring-fall | 10,750 | 3,346 | 1.11% | 7.8 | about 3,700 | 83 / 159 | raccoon-deterrent; motion-activated-sprinkler-canada |
| rodent repellents & exclusion | fall-winter | 8,290 | 5,691 | 1.10% | 7.8 | 1,400 (700-2,100), peak Oct | 78 / 242 | mouse-repellent-canada; best-rodent-repellent-for-cars-canada |
| fruit fly traps | late summer-fall | 15,463 | 4,502 | 0.45% | 8.6 | 6,900 (3,500-10,400), peak Sep | 72 / 359 | best-fruit-fly-trap-canada |
| mouse traps | fall-winter | 1,364 | 675 | 0.73% | 11.2 | 15,100 (7,600-22,700), peak Nov | 70 / 188 | best-mouse-trap-canada |
| rodent bait & poison | fall-winter | 1,445 | 639 | 1.11% | 9.6 | 8,500 (4,200-12,700), peak Nov | 62 / 83 | rat-poison-canada-what-is-legal; mouse-bait-station-canada |
| cluster & house flies | summer-fall | 9,024 | 1,611 | 0.62% | 9.2 | 15,400, inflated by "Venus fly trap" | 55 / 194 | electric-fly-swatter |
| personal repellents | summer | 24,887 | 1,971 | 0.98% | 8.2 | 25,500 (12,800-38,300) | 54 / 235 | mosquito-repellent-guide-ontario-2026 |
| nets & screen tents | summer | 7,915 | 1,122 | 0.16% | 13.0 | 5,400 | 53 / 216 | best-screen-tent-canada; mosquito-net |
| wasp sprays & dust | late summer | 29,243 | 2,655 | 2.06% | 6.9 | 4,400 | 52 / 131 | best-wasp-nest-spray-canada; wasp-dust-canada |
| foggers & yard sprays | summer | 10,405 | 566 | 1.40% | 7.9 | in sprayers | 51 / 77 | mosquito-fogger-canada |
| permethrin & treated clothing | summer | 29,826 | 1,455 | 2.24% | 6.7 | 5,600 | 50 / 220 | permethrin-canada-yard-clothing-spray |
| bed bug steamers | year-round | 2,440 | 781 | 2.79% | 6.9 | all steam cleaners 30,700 | 47 / 64 | best-bed-bug-steamer-canada |
| sprayers | spring-summer | 3,035 | 861 | 0.33% | 11.8 | 43,800 (includes garden sprayers) | 41 / 159 | best-pump-pressure-sprayer-canada |
| Thermacell & area repellers | summer | 24,025 | 427 | 0.31% | 9.1 | 12,700 | 36 / 197 | thermacell-canada-where-to-buy |
| wasp traps | late summer | 8,007 | 453 | 0.69% | 9.4 | 2,300 | 34 / 84 | best-wasp-trap; best-yellow-jacket-trap-canada |
| tick products | spring-summer | 3,407 | 481 | 1.09% | 9.6 | removal tools 310 | 26 / 80 | best-tick-control-yard-treatment; tick-removal-tool-guide |
| flea products | late summer-fall | 4,018 | 1,411 | 0.77% | 8.1 | 5,100 | 21 / 64 | best-flea-spray-for-home-canada; best-flea-bomb-canada |
| spider, silverfish & crawlers | late summer-fall | 5,731 | 1,812 | 0.38% | 9.5 | 1,800 | 20 / 74 | best-silverfish-traps; best-spider-spray-canada |
| ant products | spring-summer | 4,211 | 1,017 | 0.19% | 12.5 | 6,000 | 18 / 91 | best-ant-killer |

**The biggest prizes are head terms we barely show for.** At #3 they would be worth roughly this many Amazon clicks a year. The arithmetic is Trends searches x 12 x a 2.5% generic top-3 CTR x 0.30 Amazon clicks per visit:

- Core pests:
  - mosquito repellent / bug spray: about 2,300
  - mouse trap(s): about 1,360
  - rat and mouse bait: about 770, within the domestic-class limits
  - fruit fly trap: about 620
  - rat trap(s): about 500
- Adjacent home products:
  - dehumidifier: about 3,950
  - steam cleaner: about 2,760
  - air purifier: about 5,690. That page was removed on purpose; it now redirects to /pest-product-guides.

**Why this is hard:**
- We sit at #11 or lower on these heads, or don't show at all.
- Retailers and Amazon held about half the top-5 spots on the buying searches checked on Oct 30, and every one carried an AI answer and a product grid.
- The four core-pest heads together, all at #3, would add about 400 Amazon clicks a month. That is the size of the head-term prize inside pests.

### 2i. New pages: what Search Console cannot show

**Search Console sees almost no unserved buying demand.**
- Only 28 buying searches with 40+ Canadian impressions land on a page without amazon.ca.
- The biggest is "best air purifiers for allergies" (4,482 impressions, all in August). Its page was removed on purpose.

**So demand for new pages has to come from the Oct 30 demand map.** Two of its candidates are supported by this data:
- **best-dehumidifier-canada:** "best dehumidifier canada" (2,296 Canadian impressions at #8.3) lands on the narrower mold page.
- **A "best bug spray Canada" product page:** "mosquito repellent" (4,356 at #11) lands on a remedy guide, and "bug spray" barely shows.

Also from that list: bucket, humane and electronic mouse traps, rat bait stations and best-steam-cleaner-canada.

**Build in tested batches** (ops rule 2, and the Oct 31 agreement with the owner).

## 3. The US amazon.com opportunity

**The GuidePick boxes so far**
- 230 US guides carry one amazon.com pick (build of Nov 3).
- From Oct 20 to Nov 2 the picks got **11 clicks: 5 from Canada, 5 from the US and 1 from the Philippines.**
- The guides had 1,690 US views in that time, so the rate is **2.96 US clicks per 1,000 US views** (4.0 counting every country).
- Clicks by page:
  - carpet-beetle-larvae 2 (both Canadian)
  - vamoose-for-mice 2
  - what-do-baby-cockroaches-look-like 2
  - german-cockroaches 1
  - mouse-urine 1
  - bed-bug-bites-but-no-bed-bugs 1
  - ticks-in-texas 1
  - tiny-black-bugs 1
- **Why so few:** the busiest US guides are identification pages (bugs that look like fleas, what fleas look like, bugs that look like cockroaches), and their picks are tools: a magnifying glass on 269 US views, tweezers on 194, gloves. These are information pages; Canadian information pages get about 19 clicks per 1,000 views.
- About half of these clicks come from Canadians, who are sent to amazon.com.

**US readers on amazon.ca pages (Sep 2 - Nov 2)**
- 143 US clicks on product pages (92 per 1,000 US views), 25 on remedy pages and 26 on information pages.
- Through Amazon's global earning preference, the Canadian store (200b) earns when such a reader buys on amazon.com. That was US$3.76 on 23 clicks in the 30 days to Oct 30 (Oct 30 report).
- **US sessions are up 15-fold since May, but a US session makes 1.8 Amazon clicks per 100 against 17.7 for a Canadian.**

**US product searches we show for** (US filter, May 3 - Nov 1, 100+ US impressions, store names and Canada words removed): 57 searches, 23,652 US impressions and 437 US clicks.
- **62% of the impressions and 96% of the clicks land on one page:** laser-mosquito-killer-photon-matrix-review, an amazon.ca page, with 14,740 US impressions and 418 US clicks (Photon Matrix and laser-killer searches).
  - In GA4 that page had 341 US views and 13 US Amazon clicks from Sep 2 to Nov 2.
- The rest: "do tiki torches" (2,781 US impressions, 3 clicks), rat traps (1,634), Dynatrap (1,442).
- Only 5 searches land on a US guide (vamoose-for-mice, 632).

| Search | US impressions, 6 mo | US clicks | US position | Canadian impressions | Page | Store on that page |
|---|---:|---:|---:|---:|---|---|
| photon matrix | 6,188 | 71 | 7.4 | 2,371 | laser-mosquito-killer-photon-matrix-review | amazon.ca |
| photon matrix mosquito killer | 2,959 | 28 | 8.8 | 854 | laser-mosquito-killer-photon-matrix-review | amazon.ca |
| photon matrix mosquito | 1,824 | 28 | 8.6 | 668 | laser-mosquito-killer-photon-matrix-review | amazon.ca |
| photon matrix review | 867 | 142 | 2.9 | 121 | laser-mosquito-killer-photon-matrix-review | amazon.ca |
| do tiki torches keep mosquitoes away | 740 | 0 | 7.5 | 34 | do-tiki-torches-repel-mosquitoes | amazon.ca |
| dynatrap reviews | 661 | 3 | 8.7 | 2,400 | dynatrap-canada-review | amazon.ca |
| rat traps | 597 | 0 | 2.0 | 1,450 | best-rat-trap-canada | amazon.ca |
| photon matrix mosquito killer reviews | 492 | 59 | 3.4 | 53 | laser-mosquito-killer-photon-matrix-review | amazon.ca |
| mosquito spray for yard safe for dogs | 481 | 3 | 10.3 | 18 | is-mosquito-spray-safe-kids-pets | amazon.ca |
| laser mosquito killer | 389 | 9 | 8.0 | 2,320 | laser-mosquito-killer-photon-matrix-review | amazon.ca |

Full list: `amazon_us_product_searches.csv`.

**What the US could add**
- **Today:** about 10-25 amazon.com clicks a month.
- **The guides:** if US guide traffic triples by July (the season plus the guide releases), they would reach about 35-75 a month.
- **A US edition of the laser killer page** (amazon.com, an hreflang pair, one page = one store) might add 10-40 a month at the peak.
- **Together: about +50 to +150 a month by July.** That is not a 10x lever.

**What would make it one: US product pages that rank for US shoppers.**
- This .ca domain barely shows for US shopping searches (Oct 21 finding).
- That decision belongs with buzzskito.com in January.

**The goal sheet's Amazon.com line is far off its measured path.**
- The goal: CA$512 in May and CA$821 (about US$578) in July.
- The two US-store readings so far pay US$0.06-0.16 per Amazon click. At that rate, July needs roughly 3,600-9,600 amazon.com clicks a month.
- We get about 10-25 today.
- Plan as if it were zero until a US test says otherwise.

## 4. The 10x math

**Baseline:** October 2026 had 1,177 GA4-counted Amazon clicks. **10x = 11,770 a month.**

For scale:
- The best month so far was August 2026 with 1,930.
- 11,770 clicks a month would be about CA$4,300 a month at today's money per click.

### The levers, ranked by what they add at the July 2027 peak

| Rank | Lever | Adds, Jan-Feb 2027 | Adds, Jul 2027 | Basis | How sure |
|---:|---|---:|---:|---|---|
| 1 | **The season comes back** (nothing to do) | -277 (winter dip to about 900) | +750 to +2,035 | Aug 2026 = 1,930. Jul 2027 at today's ranks = 1,930 x 1.28 = 2,470; x1.30 if July's higher click-through repeats. Winter keeps the indoor clicks (73% of October) and 10% of the outdoor ones. | Measured once. The 1.28 is an estimate. |
| 2 | **Rank gains of +1 to +2 positions** on existing product and remedy pages | +55 to +110 | +300 to +645 | Same page, one position better = +12.3% Amazon clicks (95% range 4-21%). These pages carry 97% of Canadian clicks. Click-weighted position is 7.4 today. | The rate is measured. The gain is unproven: the October upgrades show no top-3 jumps yet (read Nov 6-20). |
| 3 | **New product pages**: 100-200 live by April under the 25-a-week site cap, the first 50 now | +55 to +230 | +200 to +600 | July 2026 cohort: a typical page makes 2-3 Amazon clicks a month at the peak and 1.1 in winter. The average page makes 8.8-11.2 (stretch row). | Yields measured on the July cohort. Later pages are likely weaker. |
| 4 | **Click-out fixes on busy, low-converting pages** (NestOff section; permethrin, laser killer, dynatrap, wasp spray pages) | +30 to +60 | +60 to +120 | 40 product and remedy pages with 60+ Canadian sessions sit 339 clicks below their type's rate over two months, an upper bound of about 170 a month. I assume a third can be closed. | Upper bound measured. Part of the gap is honest intent. |
| 5 | **US amazon.com** | +10 to +20 | +50 to +150 | 3 clicks per 1,000 US views on the guides, plus one US edition. | Measured, tiny. |
| 6 | **Information pages link to the matching product page** (no Amazon links on information pages) | +10 to +20 | +30 to +60 | 1,700 Canadian information-page views a month, 3-5% follow a link, then 0.27 Amazon clicks per product-page view. | Untested. |
| 7 | **Placement** (TopBox, first-screen pick) | 0 | 0 | The top box took 17.8% of clicks on its pages, but product pages stayed at 288 to 291 per 1,000 views. | Two weeks, measured. |
| 8 | **Holiday season** (Nov 20 - Dec 31) | 0 clicks | n/a | Amazon pays on the whole 24-hour cart, so money per click may rise. Clicks don't. | Read after Jan 15. |
| - | **Risk: Mediavine** (ads, and the phone sticky bar hidden while an ad is pinned) | -45 to -135 | -125 to -480 | The sticky bar made 13.6% of Canadian clicks, 95% on phones. Its share fell to 4.5% on Nov 1-2. | Unmeasured. |

**Where the levers are not in the table:**
- **Top-3 pushes on the target pages** are part of row 2. If all 20 top target pages reached #3 on their visible searches, that would be about +440 to +1,280 a month at the page level. At the measured rates, expect +50 to +250.
- **Winning head terms** (mouse trap, bug spray, fruit fly trap, rat trap, all at #3) would add about +400 a month. That is a stretch item.

### Totals

| | GA4 Amazon clicks a month | Against October |
|---|---:|---:|
| January-February 2027 | 925-1,296 | 0.8-1.1x |
| July 2027, realistic | 2,632-3,921 | 2.2-3.3x |
| July 2027, if last July's higher click-through repeats | about 4,660 | 4.0x |
| July 2027, everything goes right | about 7,830 | 6.7x |
| Top 3 on every visible buying search: same-search curve / cross-search curve | 5,560 / 11,040 | 4.7x / 9.4x |
| **10x** | **11,770** | **10x** |

"Everything goes right" means +3 positions everywhere (x1.68), 200 pages at the average yield, the click-out fixes, the US and the information-page links, minus 5% for ads.

**In money:**
- Realistic July 2027 is about CA$970-1,450 a month from Amazon.ca: 90% of the clicks are Canadian, at CA$0.41 each.
- The goal sheet's CA$1,425 for July sits at the top of that range.
- The goal sheet's months, converted to Canadian GA4 clicks at CA$0.41 each, make a usable monthly click goal:

| Month | Canadian GA4 clicks the goal implies |
|---|---:|
| Nov | about 1,160 |
| Dec | 1,390 |
| Jan-Feb | 930 |
| Mar | 1,160 |
| Apr | 1,620 |
| May | 2,320 |
| Jun | 3,010 |
| Jul | 3,480 |
| Aug | 3,240 |

### What 10x would actually take

Any one of these:
1. **About 10 times today's Canadian product-page traffic.** That is about 38,000 Canadian product-page views a month, against about 3,800 now and 4,800 in August 2026. It would mean taking 6-12% of all Canadian shopping searches as clicks, against about 1.2-3% now. Retailers and Amazon hold half the top-5 spots.
2. **The top 3 on nearly every visible buying search, on the generous cross-search curve, at the peak.** That reaches about 11,000. The measured rate says under 2% of searches at 7.5-10.5 get there in a quarter.
3. **A new market:** US product pages (buzzskito.com) or Canadian home and appliance buying guides (dehumidifiers, steam cleaners, sprayers, heaters). Neither has been tested. The appliance heads are large (30,000-63,000 searches a month each), but retailers own them and a pest brand has weak standing there.

### The plain answer

- **Not 10x in 2027.**
- **About 1x this winter, and about 2-3.5x at the July 2027 peak if the rank and page work lands.**
- The earliest honest date for 10x is **summer 2028**, and only if a 2027 test of option 3 works.

## 5. The plan, in order

### Now to November 30: the rodent and indoor peak (holiday carts start Nov 20)

**Timing rule for these edits.** Most of the pages below were upgraded on Oct 24-29 and are being read on Nov 6-20: rat trap, Advion, fruit fly trap, both bed bug spray pages, cockroach spray, bits and dunks, permethrin, wasp spray and the laser killer. The Oct 30 rule is to wait for that read before retitling them. There are two exceptions:
- best-mouse-trap-canada goes now, for the peak.
- mouse-repellent-canada is not in the read and is already on the Nov 3 upgrade list.

None of these pages is in the frozen geo-title test (information pages only, open Nov 20-23).

1. **best-mouse-trap-canada: retarget it at the searcher's words. Now.**
   - Aim the title and H1 at "mouse traps" and "best mouse traps".
   - It is #10-11 for the "best" forms and #16-20 for "mouse traps". Impressions were up 3.6x in October.
   - This was already the Oct 30 plan's first item; do it before the November peak passes.
   - Worth +70 / +188 a year visible, up to about 1,360 if the head term ever reached #3.
2. **best-rat-trap-canada: same treatment, right after the Nov 20 read.**
   - "rat traps" #14.6 (0.14% CTR), "rat trap" #11.4, "rat zapper" #10.4.
   - It is the biggest winnable winter page (+135 / +472), and it converts at 0.43 per session.
3. **advion-cockroach-gel-bait: the top target page** (+159 / +540). After the read.
   - It ranks #9-11 for "advion cockroach gel bait" and "cockroach gel bait".
   - Work on its title and snippet, and add plain links to it from the cockroach information pages.
   - The Oct 20 audit found its first Amazon link 9.6 phone screens down. It has a top box now.
4. **mouse-repellent-canada: add a sourced NestOff section. Now.**
   - 1,152 Canadian impressions in October alone at #7, and the page never mentions NestOff. It converts at 0.08 per session against 0.16 for remedy pages.
   - **Check NestOff's Health Canada / PMRA registration first** (ops rule 7). If the evidence says it doesn't work, say so; the honest page then earns what it earns.
5. **"bed bug spray" is split** between best-bed-bug-spray-for-mattress-canada and bed-bug-spray-canada (#12.8, 0.14% CTR).
   - Pick one target (the Nov 2 page-one plan's merge list) before pushing, after the read.
   - Worth +51 / +225 for the main page.
6. **best-fruit-fly-trap-canada: test the title and snippet right after the read.**
   - "best fruit fly trap" gets 0.58% at #6.8, about a third of the usual rate for a "best" search there.
   - Demand fades in November-December, so judge it in August 2027.
7. **Audit the click-out on the busiest low-converting pages.** The audit itself is reading only and can start now; edits to pages in the read wait for it. For each page, check whether the first pick matches what readers came for:
   - mouse-repellent 0.08 per session
   - centipedes 0.09
   - how-to-keep-mice-out-of-your-car 0.10
   - permethrin 0.10
   - best-ant-killer 0.11
   - mouse-bait-station 0.12
   - rat-poison legal 0.13
   - laser killer 0.14
   - wasp-nest-spray 0.16

   **Change nothing affiliate-related without the integrity protocol** (ops rule 1).
8. **Holiday:** there is nothing to build. Keep the indoor pages healthy (rodents, bed bugs, cockroaches, garage dehumidifiers). Read money per click after Jan 15 (`scripts/holiday-amazon-compare.py`).
9. **Mediavine:** each week, compare Canadian Amazon clicks per 1,000 product-page views, phones against desktop, with October.
   - If phone clicks fall by 15% or more, bring it to the owner as part of the open sticky-ad decision (`reports/mediavine_launch_checklist.md`).
   - Agree any placement change with Mediavine first; their 90-day set-up period applies.

### December to February

10. **Build the first 50 new product pages,** winter and year-round topics with demand, within the 25-a-week site cap:
    - best-dehumidifier-canada
    - best-steam-cleaner-canada
    - bucket, humane and electronic mouse traps
    - rat bait station
    - others from the Oct 30 demand map

    Read them in mid-January. Continue only if a typical page earns about CA$1 a month, about 2.4 Amazon clicks.
11. **Information pages link to their product page** (row 6): one plain link from the Canadian bed bug, cockroach and mouse-droppings pages. No Amazon on information pages.

### February to April: summer pages must be live and indexed by April

12. **Push the pages that carried August.** All of them sit at #5-11:
    - mosquito-bits-canada-vs-dunks (#5.7, 36,900 impressions)
    - mosquito-dunks-canada-guide (#7.0, 31,000)
    - permethrin (#6.7, 30,200)
    - best-wasp-nest-spray-canada ("wasp spray" #8.4, 0.3% CTR)
    - dynatrap-canada-review (#7.0)
    - mosquito-magnet-canada (#9.8)
    - bug-zappers (#11.3)
    - mosquito-fogger-canada (#9.1)

    The searches at #3.5-7.5 have an 8-21% chance per quarter of reaching the top 3.
13. **Bug spray:** decide whether "mosquito repellent" (#11) needs a "best bug spray Canada" product page. The remedy guide converts at 0.25 per session.
14. **The next batch of product pages** (to 100-200 in total) only if the January read passes.
15. **"Where to buy" sections:** fine to add, but count them as traffic work, not Amazon work.

### May to August

16. The season does most of the lifting. **Read the first start-of-season rates in June** before deciding anything big.

### The US, in January

17. Leave the US guides' pick boxes as they are: compliant, and 10-25 clicks a month.
18. The only US Amazon lever with size is product pages for US shoppers. Decide it with buzzskito.com.
    - If tested, start with one US edition of the laser killer page: amazon.com, an hreflang pair, one page = one store, and **no switching by the visitor's country, ever.**

### Checkpoints

| When | What to read |
|---|---|
| Nov 6-20 | Did the upgraded pages move? |
| Nov 20-23 | The geo-title test; the frozen pages open up |
| Mid-January | The first 50 new product pages, and the holiday money per click |
| June 2027 | The first start-of-season rates |
| Every month | Canadian GA4 Amazon clicks against the goal-implied click line in section 4 |

## 6. Limits

- **The season of every rate:** all were measured from August to October 2026. No start-of-season data exists, and July 2027 rests on one August.
- **Clicks are GA4-counted.** Amazon counts more. Money uses CA$0.41 per GA4 Canadian click (August-October).
- **Search Console shows visible searches only.** It hides about 62% of Canadian clicks. Visible buying searches explain 16-22% of Canadian Amazon clicks, so page-level values are about 4 times (3-5 times) the visible-search values.
- **The click-through curves** are from May-October 2026. A true #1 is unmeasured, so it is treated as #2.
- **November-April search volume** is my estimate: the last 28 days x 6 x a winter level per family. The assumptions are in `C:\Users\buzzs\AppData\Local\Temp\claude\C--Users-buzzs-buzzskito-website\346ad20e-f0cd-4fd1-a3b4-396de78eb0ad\scratchpad\amazon_targets\intent.py`.
- **The buying-search filter** is a word list. It has some misses and some false hits.
- **Canadian share for small searches** can read over 100% in raw pulls, because of Search Console's row limits. I capped it at 100%.
- **The chance of reaching the top 3** comes from two- to three-month pairs between June and October, on searches with 20+ impressions in both months.
- **US money per click** rests on two tiny readings.
- **Not done:** no results pages were checked, no Amazon page was opened, no Ahrefs tool was used, and no product's registration was checked. Check each chemical product's registration before a page names it.

## Files

All in `C:\Users\buzzs\buzzskito-website\research_notes\God plan 10k a day\`:

| File | What it holds |
|---|---|
| `amazon_targets.md` | This note |
| `amazon_clicks_by_page.csv` | 225 pages with any Amazon click, Sep 2 - Nov 2. Clicks by country; views and landing sessions by country; per-1,000 rates; September, October and three-week splits; top placements and products |
| `amazon_clicks_by_placement.csv` | Placement by country, phone share and month |
| `amazon_clicks_by_search_term.csv` | Amazon search terms clicked, by country |
| `amazon_buying_searches_canada.csv` | 1,481 buying searches. Impressions, Canadian share, position, CTR, monthly shape, the page shown and its Amazon click rate, estimated Amazon clicks now, potential at #3 (mid and high), chance of the top 3, notes |
| `amazon_target_pages_canada.csv` | The same searches added up by page, with GA4 clicks |
| `amazon_us_product_searches.csv` | 57 US product searches with 100+ US impressions, the page shown and its store |
| `amazon_10x_levers.csv` | The lever table and totals |

The scripts (read-only pulls and the analysis) are in `C:\Users\buzzs\AppData\Local\Temp\claude\C--Users-buzzs-buzzskito-website\346ad20e-f0cd-4fd1-a3b4-396de78eb0ad\scratchpad\amazon_targets\`, not in the repository:
- `ga4_pull.py`, `ga4_pull2.py` and `gsc_pull.py`: the pulls
- `sec1_pages.py`, `sec2_searches.py`, `sec2b_groups.py`, `sec3_us.py` and `sec4_levers.py`: the analysis
- `feasibility.py`: the chance of reaching the top 3
- `intent.py`: the buying-search filter and product families
