# Target lists for 10,000 Google visitors a day

Written Nov 3, 2026, from the site's own Search Console pulls and the research already in the repo (no web research, no Ahrefs calls).
Search Console windows: query x page for May 3-Nov 1, Jun-Aug and Oct 5-Nov 1 (web), image search Oct 5-Nov 1, page totals for the same windows.
CSVs beside this file: `top3_push.csv` (all 625 pages with a gain), `new_pages.csv` (every topic checked, with the decision), `family_scale.csv`.

## The short version

- **Today:** 40,727 impressions and 273 clicks a day (Oct 5-Nov 1, web), from 753 indexable pages. Last summer (Jun-Aug) it was 21,424 impressions and 241 clicks a day from a much smaller site.
- **Push the pages we already have into the top 3:** about **+3,765 clicks a month** averaged over the year if every search a page shows for at positions 3.5-20 reached the top-3 click rate (3,313 a month at October's rate, 3,592 a month in summer). Counting the hidden searches too, up to about **+7,792**. The top 60 pages hold 60% of it. The two biggest by raw clicks are mostly one-fact questions (what temperature kills mosquitoes, when are mosquitoes most active), so read them with the question-aware column; after them come mosquito larvae, photon matrix, how long mosquito bites last, bugs that look like ticks, what do fleas look like, male vs female mosquito, what do bed bugs look like, rat traps and white cockroach.
- **New pages:** 188 topics survive the overlap check (20 of them planned US twins of Canadian pages). Only about 129 carry measurable demand in our data and 95 look strong (300+ impressions a month at maturity). The best are X vs Y pairs, droppings and signs, wasps and hornets for summer, little black ants, American cockroach, yellow jackets, voles and termite signs.
- **Search Console's "searches with no page" are mostly angles of pages that already rank** (time of day, temperature, how long bites last, Canadian Tire, permethrin brands). Those are title and section work on the existing page. About 15 looked like new topics; after the overlap check 6 become pages (flea bites vs bed bug bites, chigger vs flea bites, NestOff, huntsman spider, pharaoh ants, fly bites). The rest are sections.
- **The whole inventory, matured, reaches roughly 71,000-84,000 impressions a day on average and 109,000-128,000 at the summer peak**: live pages growing up and through the season, the 188 listed topics, and the 311 easy US keywords still open in the Oct 16 Ahrefs pool. That is about a third of the owner's 300,000-400,000 a day.
- **And 300,000-400,000 impressions a day is not 10,000 visitors a day at our click rates.** 10,000 clicks on 300,000-400,000 impressions is a 2.5-3.3% click rate. The site ran 1.13% last summer and 0.67% now, and even the top 3 positions averaged 2.32% in summer (3.13% on "see / choose / do" searches). At last summer's rate 10,000 clicks a day needs about 880,000 impressions a day.
- **What closes the gap:** far more strong topics than the repo holds (about 4,300-8,200 more pages at ~40 impressions a page a day, 3.3-6.3 years at 25 a week), or higher yield per page (authority and links, a US home for US pages), plus the top-3 push so the impressions we do get are clicked. The data supports about 1,500-2,500 Google clicks a day at the summer peak once today's inventory has matured, close to the Nov 3 growth plan; 10,000 a day needs both more impressions and a higher click rate than anything measured here.

## 1. TOP-3 PUSH: existing pages, ranked by extra clicks a month

**How it is counted.**
- Every search a page shows for at average position 3.5-20 is moved to the top-3 click rate; the gain is impressions x (top-3 rate - rate at its current position). Impressions are held flat, which understates page-2 searches.
- Click rates by position are the site's own. October (analysis.txt): top 3 1.12%. The same measurement on Jun-Aug: top 3 2.32%, about twice October at every position, so summer gains use the summer curve (the CSV also has the summer gain on the October curve).

| Position | 1-1.5 | 1.5-2.5 | 2.5-3.5 | 3.5-5 | 5-7 | 7-10 | 10-15 | 15-20 | 20+ |
|---|---|---|---|---|---|---|---|---|---|
| October (analysis.txt) | 1.01% | 0.75% | 1.40% | 1.12% | 0.65% | 0.30% | 0.17% | 0.11% | 0.04% |
| Jun-Aug (same method) | 1.36% | 1.40% | 3.30% | 1.95% | 1.49% | 0.62% | 0.34% | 0.25% | 0.08% |

- **Year average** = (4 summer months at the Jun-Aug gain + 8 months at the October gain) / 12. Pages with no summer data (new since September) use the October gain all year, so their summer is understated.
- Left out of the gain: retailer-named searches (skill rule 8), AI-prompt and bot searches ("evaluate the raid-ca company..."), foreign-language searches.
- Only named searches count (44% of impressions, and only 29% of clicks in the last 28 days). "With hidden" in the CSV scales each page by its total / named impressions (capped at 3x).
- **Value weight:** Amazon product pages x3 (owner's figure). Remedy pages x2, derived from Amazon clicks per 1,000 Canadian views on the Oct 20 page-type file (product 263, remedy 151, information 17). Five "vs" identification pages that the slug rule typed as products are counted as information pages.
- **Clicks vs curve** = the page's clicks / what its positions predict. Under 0.5 means Google answers the search itself or the snippet loses; the top-3 gain is then probably overstated. Over 1.5 means the page out-clicks its rank (usually Canadian product searches).
- **Q** marks pages where most of the gain is one-fact questions (Google answers many of them; "what time of day are mosquitoes most active" sits at 1.7 and draws 0.05%).

Searches: position (last 28 days, or summer if absent) · impressions last 28 days / Jun-Aug.

| # | Page | Family / type | Amazon | Extra clicks/mo (year avg) | Oct / summer month | Value-wtd | Clicks vs curve | 3 biggest searches |
|---|---|---|---|---|---|---|---|---|
| 1 | `/blog/what-temperature-kills-mosquitoes` Q | mosquitoes / question | – | **135** | 179 / 48 | 135 | 0.3 | at what temperature do mosquitoes die 7.8 · 1,957/872; what temp do mosquitoes die 8.7 · 1,957/473; what temperature kills mosquitoes 7.3 · 1,577/585 |
| 2 | `/blog/mosquito-larvae-identification` | mosquitoes / id | – | **117** | 52 / 246 | 117 | 0.64 | mosquito larvae 9.1 · 3,097/30,687; what does mosquito larvae look like 5.6 · 339/3,056; what do mosquito larvae look like 5.5 · 368/2,742 |
| 3 | `/blog/laser-mosquito-killer-photon-matrix-review` | products by pest / product | product (3x) | **95** | 14 / 258 | 285 | 5.3 | photon matrix 7.8 · 221/22,897; photon matrix mosquito killer 6.9 · 192/7,316; laser mosquito killer 8.7 · 108/5,336 |
| 4 | `/blog/when-are-mosquitoes-most-active` Q | mosquitoes / question | – | **92** | 89 / 97 | 92 | 0.35 | what time of day are mosquitoes most active 1.7 · 2,038/5,649; when are mosquitoes most active 5.5 · 1,157/4,666; when do mosquitoes go away 8.9 · 1,711/25 |
| 5 | `/blog/why-do-mosquito-bites-itch` Q | bites & stings / bite | – | **85** | 81 / 94 | 85 | 0.73 | how long do mosquito bites last 8.3 · 1,528/6,184; how long does a mosquito bite last 7.8 · 643/1,055; how long do mosquito bites itch 6.9 · 454/942 |
| 6 | `/blog/bugs-that-look-like-ticks` | ticks / id | – | **77** | 23 / 186 | 77 | 1.17 | bugs that look like ticks 7.9 · 451/3,868; insects that look like ticks 7.7 · 57/950; bug that looks like a tick 5.6 · 58/902 |
| 7 | `/blog/what-do-fleas-look-like` | fleas / id | – | **77** | 77 / no data | 77 | 1.04 | what do fleas look like 8.5 · 4,188/0; what does a flea look like 5.7 · 3,332/0; flea up close 8.2 · 210/0 |
| 8 | `/blog/male-vs-female-mosquito` | mosquitoes / vs | – | **60** | 64 / 54 | 60 | 0.31 | male vs female mosquito 6.3 · 800/1,460; male mosquito 8.6 · 838/183; male mosquito vs female 5.6 · 691/1,112 |
| 9 | `/blog/what-do-bed-bugs-look-like` | bed bugs / id | – | **58** | 58 / no data | 58 | 0.56 | what do bed bugs look like 12.7 · 1,178/0; how big are bed bugs 9.7 · 875/0; bed bug size 8.9 · 507/0 |
| 10 | `/blog/how-many-times-can-a-mosquito-bite-you` Q | bites & stings / question | – | **54** | 53 / 54 | 54 | 1.04 | can a mosquito bite more than once 5.8 · 964/630; how many times can a mosquito bite you 6.3 · 596/895; how many times can one mosquito bite you 7.5 · 480/619 |
| 11 | `/blog/best-rat-trap-canada` | products by pest / product | product (3x) | **53** | 71 / 17 | 159 | 0.7 | rat trap 11.3 · 2,082/86; rat traps 8.6 · 752/572; rat zapper 11.2 · 751/57 |
| 12 | `/blog/white-cockroach` | cockroaches / id | – | **50** | 50 / no data | 50 | 0.11 | white cockroach 8.7 · 3,681/0; albino cockroach 8.4 · 864/0; albino roach 8.4 · 102/0 |
| 13 | `/blog/how-many-ants-are-in-the-world` Q | ants / question | – | **49** | 49 / no data | 49 | 0.31 | how many ants are in the world 6.7 · 2,136/0; how many ants are there in the world 5.8 · 1,302/0; how many ants in the world 7.3 · 720/0 |
| 14 | `/blog/permethrin-canada-yard-clothing-spray` | ticks / howto | remedy (2x) | **45** | 11 / 112 | 90 | 3.33 | permethrin spray 9.8 · 157/4,808; permethrin canada 6.8 · 228/3,766; permethrin spray canada 8.1 · 173/2,708 |
| 15 | `/blog/what-does-a-spider-bite-look-like` | bites & stings / bite | – | **44** | 56 / 22 | 44 | 0.87 | what does a spider bite look like 7.0 · 2,450/1,169; what do spider bites look like 5.5 · 659/451; how to identify a spider bite 3.9 · 287/1 |
| 16 | `/blog/red-ticks-and-clover-mites` | ticks / id | – | **44** | 39 / 54 | 44 | 0.43 | red tick 8.1 · 1,970/2,258; red ticks 7.2 · 898/2,493; small red tick 4.8 · 260/673 |
| 17 | `/blog/best-fruit-fly-trap-canada` | products by pest / product | product (3x) | **42** | 52 / 21 | 125 | 1.07 | fruit fly trap 11.7 · 1,876/303; best fruit fly trap 6.3 · 1,280/2,113; fruit fly trap canadian tire (retailer) 8.4 · 437/667 |
| 18 | `/blog/bugs-that-look-like-cockroaches` | cockroaches / id | – | **41** | 41 / no data | 41 | 1.3 | bugs that look like cockroaches 7.4 · 715/0; bugs that look like roaches 7.7 · 319/0; what bugs look like cockroaches 8.7 · 145/0 |
| 19 | `/blog/how-long-do-ticks-live` Q | ticks / question | – | **41** | 30 / 64 | 41 | 0.69 | how long can ticks live in a house 7.8 · 624/1,238; how long can a tick live without a host 13.4 · 311/759; how long do ticks live 7.7 · 241/811 |
| 20 | `/blog/mosquito-bits-canada-vs-dunks` | products by pest / product | product (3x) | **38** | 18 / 79 | 115 | 2.87 | mosquito bits 7.5 · 1,508/15,207; mosquito bits canada 3.1 · 412/5,819; mosquito dunks canada 8.0 · 5/1,467 |
| 21 | `/blog/dynatrap-canada-review` | products by pest / product | product (3x) | **38** | 11 / 91 | 113 | 0.81 | dynatrap 8.2 · 352/6,189; dynatrap reviews 7.6 · 221/2,303; dynatrap mosquito trap 10.1 · 102/1,143 |
| 22 | `/blog/what-blood-type-do-mosquitoes-bite` Q | bites & stings / question | – | **37** | 46 / 19 | 37 | 0.62 | which blood type do mosquitoes hate 7.4 · 659/754; what blood type do mosquitoes like 10.7 · 506/364; what blood type do mosquitoes hate 7.2 · 244/169 |
| 23 | `/blog/advion-cockroach-gel-bait` | products by pest / product | product (3x) | **36** | 34 / 41 | 108 | 3.26 | advion cockroach gel bait 10.7 · 585/1,807; cockroach gel bait canada 7.3 · 382/538; advion cockroach gel 10.3 · 290/833 |
| 24 | `/blog/how-to-get-rid-of-mosquitoes-in-the-house` | mosquitoes / id | remedy (2x) | **36** | 53 / 1 | 72 | 1.98 | how to get rid of mosquitoes inside the house naturally 7.5 · 1,277/5; how to get rid of mosquitoes inside the house 8.8 · 975/42; how do i get rid of mosquitoes in my house fast 4.5 · 453/27 |
| 25 | `/blog/mosquito-dunks-canada-guide` | products by pest / product | product (3x) | **32** | 6 / 84 | 97 | 2.39 | mosquito dunks canada 5.8 · 259/6,922; mosquito dunks canadian tire (retailer) 7.5 · 120/3,925; mosquito dunks 11.6 · 161/2,649 |
| 26 | `/blog/can-ticks-fly-jump-swim` Q | ticks / question | – | **32** | 30 / 36 | 32 | 0.36 | can ticks drown 6.8 · 522/832; can ticks survive in water 7.5 · 428/299; can ticks swim 5.4 · 313/947 |
| 27 | `/blog/black-flies-ontario-when-they-come-out` | flies & gnats / id | – | **31** | 9 / 74 | 31 | 0.53 | black fly 8.8 · 362/2,395; black flies 7.4 · 123/2,421; black flies ontario 3.4 · 50/1,822 |
| 28 | `/blog/horse-fly-and-deer-fly-bite-treatment` | bites & stings / bite | remedy (2x) | **31** | 11 / 71 | 61 | 0.31 | deer fly bite 4.8 · 153/5,324; horse fly bite 7.5 · 464/202; horsefly bite 7.1 · 162/270 |
| 29 | `/blog/what-colors-attract-mosquitoes` Q | mosquitoes / question | – | **30** | 37 / 17 | 30 | 0.62 | what colors are mosquitoes attracted to 7.8 · 295/195; what colors attract mosquitoes 7.9 · 229/237; what color attracts mosquitoes 7.9 · 209/90 |
| 30 | `/blog/deer-tick-vs-dog-tick-canada` | ticks / vs | – | **29** | 14 / 58 | 29 | 0.4 | deer tick vs dog tick 8.4 · 724/3,768; dog tick vs deer tick 8.3 · 418/3,426; dog vs deer tick 6.3 · 54/449 |
| 31 | `/blog/no-see-um-bites` | bites & stings / bite | – | **28** | 34 / 16 | 28 | 2.08 | no see um bites 6.7 · 756/371; no see ums 2.8 · 366/401; noseeum 5.7 · 374/170 |
| 32 | `/blog/how-to-get-rid-of-ground-wasps-canada` | wasps & bees / howto | remedy (2x) | **27** | 12 / 57 | 54 | 1.41 | delta dust canada 4.2 · 79/1,066; ground wasps 6.8 · 75/856; how to get rid of ground wasps 8.0 · 47/674 |
| 33 | `/blog/what-do-baby-cockroaches-look-like` | cockroaches / id | – | **27** | 27 / no data | 27 | 0.47 | baby cockroach 7.7 · 535/0; baby roach 7.7 · 146/0; what do baby cockroaches look like 8.4 · 144/0 |
| 34 | `/blog/flea-bites-on-humans` | bites & stings / bite | – | **26** | 28 / 22 | 26 | 1.18 | what do flea bites look like 9.4 · 488/445; flea bites on humans 11.5 · 197/94; what do flea bites look like on humans 11.0 · 121/181 |
| 35 | `/blog/can-cockroaches-fly` Q | cockroaches / question | – | **26** | 26 / no data | 26 | 0.13 | can cockroaches fly 10.2 · 648/0; do cockroaches fly 11.1 · 262/0; do all cockroaches fly 9.3 · 153/0 |
| 36 | `/blog/tiny-black-bugs` | other household bugs / id | – | **25** | 25 / no data | 25 | 1.2 | tiny black bugs 8.4 · 113/0; black bugs 8.9 · 85/0; small black bug 7.6 · 78/0 |
| 37 | `/blog/chigger-bites` | bites & stings / bite | – | **24** | 18 / 38 | 24 | 2.01 | chiggers 3.0 · 310/644; chigger bites 3.5 · 244/118; what do chigger bites look like 11.1 · 143/183 |
| 38 | `/blog/what-does-mouse-poop-look-like-canada` | wildlife & droppings / droppings | – | **24** | 28 / 15 | 24 | 0.8 | mouse poop 7.5 · 960/1,597; what does mouse poop look like 7.5 · 443/550; mouse droppings 6.5 · 320/366 |
| 39 | `/blog/no-see-ums-biting-midges-ontario` | flies & gnats / id | – | **23** | 28 / 14 | 23 | 1.81 | no see ums 6.2 · 1,399/376; noseeums 5.7 · 1,001/1,286; noseeum 10.0 · 543/85 |
| 40 | `/blog/electric-fly-swatter` | products by pest / product | product (3x) | **23** | 22 / 25 | 69 | 1.37 | electric fly swatter 7.8 · 840/1,353; electric fly swatter canadian tire (retailer) 7.7 · 70/509; fly swatter electric 8.5 · 108/116 |
| 41 | `/blog/mosquito-fogger-canada` | products by pest / product | product (3x) | **23** | 7 / 55 | 69 | 0.75 | mosquito fogger 8.1 · 77/3,572; mosquito fogger liquid 8.7 · 26/1,082; fogger 9.2 · 140/7 |
| 42 | `/blog/mouse-repellent-canada` | mice & rats / howto | remedy (2x) | **22** | 34 / 0 | 45 | 3.02 | nestoff mouse repellent 7.1 · 1,147/0; best mouse repellent canada 5.4 · 368/2; nestoff mouse repellent canada 7.9 · 364/0 |
| 43 | `/blog/can-mice-climb-walls` Q | mice & rats / question | – | **22** | 22 / no data | 22 | 0.54 | can mice climb walls 9.8 · 635/0; can a mouse climb a wall 9.8 · 113/0; how high can mice jump 9.6 · 96/0 |
| 44 | `/blog/are-mice-nocturnal` Q | mice & rats / question | – | **21** | 21 / no data | 21 | 0.79 | are mice nocturnal 8.2 · 1,180/0; what time do mice come out at night 8.5 · 149/0; when are mice most active 8.9 · 128/0 |
| 45 | `/blog/rat-droppings` | wildlife & droppings / droppings | – | **21** | 21 / no data | 21 | 1.27 | rat poop 8.3 · 611/0; rat shit 8.5 · 550/0; rat droppings 7.8 · 227/0 |
| 46 | `/blog/tick-bite-vs-mosquito-bite` | bites & stings / bite | – | **21** | 6 / 50 | 21 | 1.24 | tick bite vs mosquito bite 6.9 · 346/3,422; tick vs mosquito bite 6.4 · 165/1,579; mosquito bite vs tick bite 6.7 · 140/1,520 |
| 47 | `/blog/tick-vs-bed-bug` | ticks / vs | – | **21** | 10 / 42 | 21 | 0.66 | tick vs bed bug 15.8 · 132/1,706; ticks vs bed bugs 16.1 · 112/1,020; bed bug vs tick 12.1 · 60/890 |
| 48 | `/blog/can-mosquitoes-bite-through-clothes` Q | bites & stings / question | – | **20** | 20 / 20 | 20 | 0.54 | can mosquitoes bite through clothes 7.7 · 531/1,114; can mosquitoes bite through jeans 9.2 · 130/227; can mosquitoes bite through leggings 6.9 · 116/144 |
| 49 | `/blog/mosquito-hawk-explained` | mosquitoes / id | – | **19** | 25 / 8 | 19 | 0.21 | mosquito hawk 7.8 · 1,735/588; mosquito hawks 7.5 · 77/46; do mosquito hawks eat mosquitoes 8.3 · 57/15 |
| 50 | `/blog/best-cockroach-spray-canada` | products by pest / product | product (3x) | **19** | 21 / 14 | 57 | 1.95 | cockroach spray 11.1 · 545/399; best cockroach killer canada 4.3 · 236/302; best cockroach killer 8.5 · 222/76 |
| 51 | `/blog/bug-zappers-canada-do-they-work` | products by pest / product | product (3x) | **19** | 6 / 44 | 56 | 1.54 | bug zapper 14.1 · 180/2,102; bug zappers 17.8 · 77/636; best bug zapper 7.2 · 26/534 |
| 52 | `/blog/natural-mosquito-repellent-ontario` | mosquitoes / howto | remedy (2x) | **19** | 6 / 45 | 38 | 0.0 | mosquito repellent 11.1 · 14/2,380; natural mosquito repellent 9.0 · 76/1,934; natural bug repellent 11.3 · 54/138 |
| 53 | `/blog/best-wasp-nest-spray-canada` | products by pest / product | product (3x) | **19** | 14 / 28 | 56 | 0.92 | wasp spray 8.5 · 920/35; best wasp spray 2.9 · 46/854; wasp nest spray 9.4 · 40/791 |
| 54 | `/blog/baby-bed-bugs-nymphs` | bed bugs / id | – | **18** | 22 / 10 | 18 | 1.24 | baby bed bugs 8.9 · 462/670; baby bed bug 7.9 · 273/469; bed bug nymph 9.2 · 313/175 |
| 55 | `/blog/best-mosquito-repellent-device-canada` | products by pest / product | product (3x) | **18** | 4 / 45 | 53 | 0.69 | mosquito repellent machine 9.7 · 114/3,107; mosquito killer machine 10.7 · 31/523; best mosquito repellent device 23.6 · 11/500 |
| 56 | `/blog/deer-flies-horse-flies-ontario` | flies & gnats / id | – | **17** | 3 / 45 | 17 | 0.42 | deer fly vs horse fly 6.0 · 75/1,770; deer fly 5.5 · 85/1,646; horse fly vs deer fly 6.9 · 56/1,319 |
| 57 | `/blog/alaska-mosquitoes` | mosquitoes / id | – | **17** | 17 / no data | 17 | 0.2 | alaskan mosquito 9.3 · 613/0; culiseta alaskaensis 5.9 · 337/0; alaskan mosquito size 6.6 · 158/0 |
| 58 | `/blog/bugs-that-look-like-fleas` | fleas / id | – | **17** | 17 / no data | 17 | 1.22 | flea bug 10.1 · 767/0; bugs that look like fleas 8.2 · 209/0; flea bugs 8.8 · 39/0 |
| 59 | `/blog/how-to-get-rid-of-drain-flies-canada` | flies & gnats / howto | remedy (2x) | **17** | 24 / 1 | 33 | 1.2 | drain flies 10.4 · 1,374/18; drain fly program 8.6 · 251/31; drain fly 10.0 · 230/16 |
| 60 | `/blog/best-large-capacity-dehumidifier-canada` | products by pest / product | product (3x) | **16** | 18 / 14 | 50 | 0.91 | best dehumidifier for basement canada 7.8 · 183/583; best dehumidifier canada 8.0 · 122/702; dehumidifier for basement 21.8 · 159/152 |

**By family (all 625 pages):** products by pest +846; mosquitoes +660; bites & stings +461; ticks +402; cockroaches +198; mice & rats +187; bed bugs +154; other household bugs +147; wildlife & droppings +135; fleas +128; flies & gnats +127; ants +113; spiders +77; service, city & home +76; wasps & bees +39; tools & data hubs +14 clicks a month.

**Re-ranked by value (Amazon weight):** `laser-mosquito-killer-photon-matrix-review` (285), `best-rat-trap-canada` (159), `what-temperature-kills-mosquitoes` (135), `best-fruit-fly-trap-canada` (125), `mosquito-larvae-identification` (117), `mosquito-bits-canada-vs-dunks` (115), `dynatrap-canada-review` (113), `advion-cockroach-gel-bait` (108), `mosquito-dunks-canada-guide` (97), `when-are-mosquitoes-most-active` (92).

**Question-aware check:** with separate curves for one-fact questions and for "see / choose / do" searches the total moves from 3,765 to 4,032 a month. Trivia pages drop (what-temperature-kills-mosquitoes 135 -> 103, when-are-mosquitoes-most-active 92 -> 61, how-many-times-can-a-mosquito-bite-you 54 -> 37). Product and ID pages rise (photon matrix 95 -> 137, mosquito larvae 117 -> 153, bugs that look like ticks 77 -> 103).

**Retailer-named searches** (left out above): 59,300 impressions in 6 months at 0.72% click-through. Not uniformly dead: "thermacell canadian tire" draws 0.07% (the skill's 0.08% finding), but the mosquito bits and dunks pages draw 0.95-1.95% on theirs, because the page answers "it is not sold here, buy this instead". A "where to buy in Canada" section is worth it where the product is not on the shelf; not where the retailer has it.

## 2. NEW PAGES: topics with demand and no page, ranked

**Where the topics came from.** 925 records, 551 distinct topics once duplicates were merged:
- Search Console searches no live title, H1 or address covers (the s3 gap scan: 933 topic groups with 150+ impressions; the top 260 read by hand).
- The Oct 26 top-100 list and the final god list: 55 addresses are not live, 53 topics once two already answered by other pages are taken out (how long mosquito bites last, chiggers).
- Planned or unscheduled taxonomy and plan pages, minus the 83 state/province pages held to April 2027.
- Competitors' proven searches: winners-gap (38 gaps), comparables-research, 200k-comparables, bettertermite's 100+ visit pages, and the Oct 16 Ahrefs keyword pool.
- The product block of `seed_keywords.txt` in this folder. All 60 are covered by live product pages or have no measured demand: there is almost no product-page gap in our data.

**Overlap check.**
- A topic counts as already covered when a live, indexable page's title and address hold all its words, share a subject word in the address and match the intent (bite / droppings / vs / product / other).
- The top 230 candidates and every automatic "already covered" call were then read by hand (`decisions.py`): 78 became "add a section to an existing page", 5 were dropped, 1 is already written and scheduled, and 1 is the owner's call (scabies). False "covered" calls were reversed (brown recluse is not answered by the brown recluse bite page).
- The overlap column names the closest live page and the page Google shows for the topic's searches now. That page is the cannibalization risk: link the two and keep one search per page.

**How impressions are estimated (calibrated on our own live pages, not on Ahrefs).**
- Stated volume barely predicts a page's impressions here. In their first weeks, pages built in October drew a median:
  - 4.6% of the topic's US volume at 5-15K searches a month, 2% at 15-50K and 0.4% at 50K+ (small topics under 5K drew more than their stated volume);
  - in absolute terms, roughly 400-600 impressions a month whatever the volume. Matured pages: about 760 a month at 5-15K searches, 1,200 at 50K+ (few pages).
- Fit used: 600 x (volume / 10,000)^0.35 a month, scaled by the god-list page-one screen where it exists.
- Competitor evidence: our October pages built on a competitor's proven search drew a median 0.6x the competitor's visits within 5 weeks; 1.2x is used at maturity.
- Our own Search Console impressions, annualized from Jun-Aug and October, are used where they are bigger. Image-search impressions count 0.3x as a web signal.
- Clicks = impressions x the measured click-through of that page type over 6 months: product 1.38%, how-to 1.24%, identification-type pages pooled 0.76%, question 0.48%.
- **Score** = clicks x value (product 3, remedy 2) x a type preference that favours what wins clicks here:
  - bites 1.25, droppings 1.2, identification sorters 1.15, X vs Y 1.1, product 1.0, species 0.9, how-to 0.8;
  - state series 0.6, hubs 0.5, questions 0.35, medical 0.25;
  - garden pests x0.6 (as the top-100 did), and a 0.75 cut when a live page holds two-thirds of the words.
- These are medians. Page yields here are skewed: the mean page draws 2.5-4.7x the median, so a few of these will do far better and many worse.

Season: when demand peaks and when to build so the page is indexed and aged first. Money: "Amazon" pages carry amazon.ca links (Canadian TSX pages); US guides carry one amazon.com pick box.

| # | Target search | Family / type | Season (build) | Money | Evidence | Est. impr/mo | Overlap check | Status |
|---|---|---|---|---|---|---|---|---|
| 1 | **little black ants** | ants / id | summer: Jan-Mar | ads | Fox 8,300 visits; GSC web 127/6mo @12.1; image 26/28d | 9,960 | black-ants and tiny-ants are near it but neither is aimed at the species; link both ways | not planned (competitor gap) |
| 2 | **nestoff mouse repellent** | products by pest / product | year-round: now | Amazon | GSC web 1,805/6mo @7.1 | 1,299 | near `mouse-repellent-canada`; brand page on the vamoose-for-mice pattern (that page went 0 -> 65 clicks in 28 days); mouse-repellent-canada ranks 7 for it now, link both ways | not planned (GSC gap) |
| 3 | **yellow jacket** (+ yellow jacket vs wasp, yellow jacket vs hornet) | wasps & bees / species | summer: Jan-Mar | ads | US 41,200/mo Trends, KD 26; Fox 10,774 visits; GSC web 5,393/6mo @8.8; image 145/28d | 5,124 | near `best-yellow-jacket-trap-canada`; species ID page (planned Dec 14); the live yellow jacket trap page is a product page, different intent | planned 2026-12-14 |
| 4 | **carpenter bee vs bumble bee** | wasps & bees / vs | summer: Jan-Mar | ads | US 3,200/mo Trends; Fox 2,600 visits | 3,120 | near `how-to-get-rid-of-carpenter-bees-canada`; planned Dec 14; overlaps how-to-get-rid-of-carpenter-bees-canada only in passing | planned 2026-12-14 |
| 5 | **types of wasps** | wasps & bees / id | summer: Jan-Mar | ads | US 17,000/mo Ahrefs; Moxie 2,463 visits; GSC web 12/6mo @23.1; image 1/28d | 2,956 | wasp-vs-hornet and paper-wasps are narrower; make it the wasp ID chart page | not planned (competitor gap) |
| 6 | **vole** | mice & rats / species | year-round: now | ads | US 101,000/mo Ahrefs, KD 11; Fox 2,829 visits; GSC web 919/6mo @11.8; image 81/28d | 3,395 | Google shows `how-to-get-rid-of-voles-canada`; species ID (planned Oct 26, waiting on a photo); the live voles page is a Canadian how-to | planned 2026-10-26 |
| 7 | **american cockroach** | cockroaches / species | summer: Jan-Mar | ads | US 5,700/mo Ahrefs; bettertermite + Fox 2,757 visits; GSC web 260/6mo @10.0; image 314/28d | 3,308 | palmetto-bugs and /learn/cockroaches cover it in passing; own page for "american cockroach" / "big cockroach" | not planned (competitor gap) |
| 8 | **roach droppings vs mouse droppings** | wildlife & droppings / droppings | winter: now | ads | bettertermite + pestcontrolcalifornia 2,413 visits; GSC web 19/6mo @17.0; image 105/28d | 2,896 | droppings X vs Y; link from cockroach-droppings and mouse-poop (or a shared section if the owner prefers fewer pages) | not planned (competitor gap) |
| 9 | **signs of termites** (+ termite mud tubes, termite larvae, signs of termites in walls and ceilings) | other household bugs / id | spring: Jan-Feb | ads | US 8,575/mo Trends; Presto-X + Romex 1,927 visits; GSC web 4/6mo @33.0; image 11/28d | 1,752 | near `termite-damage`; signs page; fold mud tubes, termite larvae and "signs in walls and ceilings" into it; termite-damage stays the damage page | not planned (competitor gap) |
| 10 | **wasp vs bee** (+ bugs that look like bees) | wasps & bees / vs | summer: Jan-Mar | ads | bettertermite 1,437 visits; GSC web 184/6mo @46.5; image 14/28d | 1,805 | fold "bugs that look like bees" into it | not planned (competitor gap) |
| 11 | **flea bites vs bed bug bites** (+ bed bug vs flea) | bites & stings / bite | summer: Jan-Mar | ads | US 8,400/mo Trends; competitor 333 visits; GSC web 555/6mo @13.0; image 9,409/28d | 2,072 | Google shows `flea-bites-on-humans`; bites X vs Y; image search already shows our flea and bed bug pages for it (4,400 in 28 days, positions 13-43) | not planned (GSC gap) |
| 12 | **carpenter ant frass** | wildlife & droppings / droppings | spring: Jan-Feb | ads | US 1,600/mo Ahrefs; bettertermite + Fox 1,195 visits; image 4/28d | 1,434 | droppings family; carpenter-ants-canada mentions frass only | not planned (competitor gap) |
| 13 | **bugs that look like termites** (+ bugs that look like flying termites) | other household bugs / id | spring: Jan-Feb | ads | US 7,000/mo Ahrefs; bettertermite + Moxie 1,106 visits; GSC web 1/6mo @26.0; image 10/28d | 1,201 | look-alikes; fold "bugs that look like flying termites"; live by early March | not planned (competitor gap) |
| 14 | **brown recluse** | spiders / species | summer: Jan-Mar | ads | US 383,000/mo Trends, KD 31; GSC web 2,134/6mo @11.9; image 2,974/28d | 1,535 | Google shows `brown-recluse-bite`; species page (planned Feb 1); brown-recluse-bite and brown-recluse-look-alikes are other intents; results page is institutions and Wikipedia | planned 2027-02-01 |
| 15 | **how to get rid of termites** | other household bugs / howto | summer: Jan-Mar | Amazon + ads | US 12,000/mo Ahrefs, KD 0 | 907 | US remedy page; spring; DIY limits and label rules need care | not planned |
| 16 | **snake poop** | wildlife & droppings / droppings | winter: now | ads | US 17,400/mo Trends, KD 1; image 19/28d | 971 | held on Oct 29 for a PD/CC0 photo; build when one is found | planned 2026-10-29 |
| 17 | **gnats vs fruit flies** (+ drain flies vs fruit flies, drain flies vs gnats, fungus gnats vs drain flies) | flies & gnats / vs | summer: Jan-Mar | ads | US 5,300/mo Ahrefs; bettertermite 1,664 visits; GSC web 94/6mo @7.4; image 220/28d | 1,018 | near `gnat-bites`; ONE comparison page: gnats vs fruit flies vs drain flies (fold drain-flies-vs-fruit-flies, drain-flies-vs-gnats, fungus-gnats-vs-drain-flies) | not planned (competitor gap) |
| 18 | **how to get rid of moles** | wildlife & droppings / howto | year-round: now | Amazon + ads | US 8,200/mo Ahrefs, KD 0; Fox 510 visits | 838 | holes-in-yard covers mole holes only | not planned (competitor gap) |
| 19 | **yellow jacket sting** | bites & stings / bite | summer: Jan-Mar | ads | US 26,000/mo Ahrefs; GSC web 2/6mo @2.5; image 5/28d | 838 | near `best-yellow-jacket-trap-canada`; own bite page; link yellow-jackets and bee-sting-vs-wasp-sting | not planned (competitor gap) |
| 20 | **cricket poop** | wildlife & droppings / droppings | year-round: now | ads | US 900/mo Trends, KD 0; Fox 545 visits; image 3/28d | 872 | droppings family; crickets-in-house mentions it | not planned (competitor gap) |
| 21 | **american dog tick** | ticks / species | summer: Jan-Mar | ads | US 282,100/mo Trends; GSC web 426/6mo @11.0; image 78/28d | 1,931 | US twin of american-dog-tick-canada (planned Dec 7); the 282K is every "dog tick" search, broad | planned 2026-12-07 |
| 22 | **possum poop** | wildlife & droppings / droppings | year-round: now | ads | US 5,500/mo Trends, KD 0; GSC web 4/6mo @14.8; image 88/28d | 783 | planned in October, not live (no photo yet); animal-droppings lists it only | planned 2026-10-20 |
| 23 | **moth eggs** (+ pantry moth eggs) | other household bugs / id | winter: now | ads | US 9,200/mo Ahrefs; bettertermite 757 visits; image 5/28d | 782 | near `bed-bug-eggs`; eggs page like bed-bug-eggs / flea-eggs; fold pantry moth eggs; moths-in-house stays the adult ID page | not planned (competitor gap) |
| 24 | **horse fly** | flies & gnats / vs | summer: Jan-Mar | ads | US 101,000/mo Trends, KD 20; GSC web 16,814/6mo @6.7; image 1,156/28d | 1,348 | US twin of deer-flies-horse-flies-ontario (planned Feb 1; "horse fly" ~101K US) | planned 2027-02-01 |
| 25 | **bee sting vs wasp sting** (+ bee sting remedy, bumblebee sting) | bites & stings / bite | summer: Jan-Mar | ads | US 2,900/mo Trends, KD 4; competitor 229 visits | 916 | planned Feb 1; fold "bee sting remedy" and "bumblebee sting" in | planned 2027-02-01 |
| 26 | **how to get rid of squirrels** | wildlife & droppings / howto | year-round: now | Amazon + ads | US 11,900/mo Trends | 638 | wildlife remedy; squirrel-poop is live | not planned |
| 27 | **lone star tick** | ticks / species | summer: Jan-Mar | ads | US 122,150/mo Trends; GSC web 1,407/6mo @10.0; image 258/28d | 1,441 | US twin of lone-star-tick-alpha-gal-canada (planned Dec 7) | planned 2026-12-07 |
| 28 | **lacewings** | other household bugs / species | summer: Jan-Mar | ads | Presto-X 711 visits; image 1/28d | 853 | beneficial insect ID (curiosity); low priority | not planned (competitor gap) |
| 29 | **fleas vs ticks** | ticks / vs | year-round: now | ads | US 1,400/mo Ahrefs, KD 0; Fox + Moxie 579 visits; GSC web 1,085/6mo @10.4; image 438/28d | 926 | X vs Y on pets | not planned (competitor gap) |
| 30 | **deer tick** | ticks / species | summer: Jan-Mar | ads | US 98,350/mo Trends; GSC web 13,045/6mo @9.3; image 935/28d | 1,335 | US twin of blacklegged-deer-tick-ontario (planned Dec 7) | planned 2026-12-07 |
| 31 | **huntsman spider** | spiders / species | year-round: now | ads | US 80,900/mo Trends, KD 10; image 445/28d | 788 | mostly searched for Australia/Asia; only Heteropoda venatoria lives in FL/TX/CA: say so | not planned (GSC gap) |
| 32 | **how to get rid of chipmunks** | wildlife & droppings / howto | summer: Jan-Mar | Amazon + ads | US 6,400/mo Ahrefs | 513 | wildlife remedy | not planned (competitor gap) |
| 33 | **types of bees** | wasps & bees / hub | year-round: now | ads | US 28,000/mo Ahrefs, KD 10; GSC web 1/6mo @3.0; image 1/28d | 1,147 | ID chart; low priority (bees are not a pest service here) | not planned |
| 34 | **carpenter ants vs termites** | other household bugs / vs | spring: Jan-Feb | ads | US 350/mo Ahrefs; Fox 510 visits; GSC web 7/6mo @13.9; image 2/28d | 612 | near `do-carpenter-ants-bite`; flying-ants-vs-termites covers the swarmer pair only | not planned (competitor gap) |
| 35 | **black flies** | flies & gnats / species | year-round: now | ads | US 74,500/mo Trends, KD 8; GSC web 29,891/6mo @6.2; image 364/28d | 1,212 | US twin of black-flies-ontario-when-they-come-out (planned Dec 7) | planned 2026-12-07 |
| 36 | **engorged tick** (+ grey tick) | ticks / species | summer: Jan-Mar | ads | US 12,600/mo Trends; competitor 150 visits; GSC web 466/6mo @11.6; image 367/28d | 705 | planned Dec 7; fold "grey tick" | planned 2026-12-07 |
| 37 | **rat vs lizard droppings** (+ lizard poop) | wildlife & droppings / droppings | year-round: now | ads | All U Need 505 visits; GSC web 3/6mo @10.0; image 34/28d | 669 | droppings X vs Y (US south); fold lizard poop | not planned (competitor gap) |
| 38 | **roach bombs vs gel bait** | cockroaches / vs | year-round: now | ads | US 590/mo Ahrefs; pestcontrolcalifornia 592 visits | 710 | near `advion-cockroach-gel-bait`; method-vs-method test page (comparables research #5); link the gel bait and cockroach killer pages | not planned (competitor gap) |
| 39 | **cicada** (+ cicada vs locust) | other household bugs / species | year-round: now | ads | US 302,100/mo Trends, KD 51; competitor 174 visits; GSC web 2/6mo @14.0; image 14/28d | 1,048 | big but news-driven (brood years) and not a pest; aim for page one, not the top 3 | not planned |
| 40 | **clothes moths** | other household bugs / species | year-round: now | ads | US 4,700/mo Ahrefs, KD 2; GSC web 13/6mo @12.3; image 33/28d | 614 | species page; moths-in-house stays the sorter | not planned |
| 41 | **how to get rid of carpenter bees** | wasps & bees / howto | summer: Jan-Mar | Amazon + ads | US 14,000/mo Ahrefs, KD 0; GSC web 13/6mo @11.4; image 1/28d | 675 | US twin of how-to-get-rid-of-carpenter-bees-canada (planned Feb 1) | planned 2027-02-01 |
| 42 | **rat snake** | wildlife & droppings / species | year-round: now | ads | US 126,400/mo Trends, KD 4; image 5/28d | 583 | snake family | not planned |
| 43 | **copperhead** | wildlife & droppings / species | year-round: now | ads | US 75,900/mo Trends, KD 0; image 2/28d | 576 | species page; copperhead-look-alikes (live Oct 29) aims at "baby copperhead" and look-alikes: sharpen both titles so they do not split | not planned |
| 44 | **marmot vs groundhog** | wildlife & droppings / vs | summer: Jan-Mar | ads | US 5,300/mo Ahrefs; GSC web 3/6mo @2.7 | 480 | curiosity; low priority | not planned (competitor gap) |
| 45 | **fuzzy caterpillar** | other household bugs / species | summer: Jan-Mar | ads | US 1,900/mo Trends, KD 0; image 3/28d | 570 | planned Feb 1 | planned 2027-02-01 |
| 46 | **chigger bites vs flea bites** | bites & stings / bite | summer: Jan-Mar | ads | GSC web 118/6mo @15.0; image 1,644/28d | 536 | Google shows `chigger-bites`; bites X vs Y; image search 1,600 in 28 days | not planned (GSC gap) |
| 47 | **how to get rid of rats** | mice & rats / howto | winter: now | Amazon + ads | US 12,000/mo Ahrefs, KD 10; GSC web 28/6mo @8.9 | 640 | US twin of how-to-get-rid-of-rats-canada | not planned |
| 48 | **fishing spider** (+ fishing spider vs wolf spider) | spiders / species | summer: Jan-Mar | ads | US 30,100/mo Trends, KD 6; competitor 226 visits; image 51/28d | 552 | planned Dec 21 | planned 2026-12-21 |
| 49 | **how to get rid of carpenter ants** | ants / howto | summer: Jan-Mar | Amazon + ads | US 11,000/mo Ahrefs, KD 4; GSC web 98/6mo @13.2 | 620 | US how-to beside the Canadian page carpenter-ants-canada | not planned |
| 50 | **garter snake** | wildlife & droppings / species | summer: Jan-Mar | ads | US 87,100/mo Trends, KD 12; GSC web 1/6mo @2.0 | 537 | snake family | not planned |
| 51 | **tarantula** | spiders / species | summer: Jan-Mar | ads | US 100,000/mo Trends; GSC web 6/6mo @19.2; image 657/28d | 537 | planned Dec 21 ("tarantula migration") | planned 2026-12-21 |
| 52 | **how to get rid of cluster flies** | flies & gnats / howto | winter: now | Amazon + ads | US 8,600/mo Ahrefs, KD 3; GSC web 264/6mo @9.7 | 569 | US twin of how-to-get-rid-of-cluster-flies-canada (planned Dec 21) | planned 2026-12-21 |
| 53 | **water moccasin vs water snake** | wildlife & droppings / vs | summer: Jan-Mar | ads | US 1,500/mo Ahrefs, KD 1 | 412 | snake X vs Y | not planned |
| 54 | **how to get rid of spiders** | spiders / howto | summer: Jan-Mar | Amazon + ads | US 8,500/mo Ahrefs, KD 2; GSC web 12/6mo @12.1; image 4/28d | 567 | US twin of how-to-get-rid-of-spiders-in-house-canada (planned Dec 21) | planned 2026-12-21 |
| 55 | **fly bites** | bites & stings / bite | summer: Jan-Mar | ads | US 27,600/mo Trends; GSC web 1,332/6mo @7.3; image 34/28d | 342 | Google shows `horse-fly-and-deer-fly-bite-treatment`; bite sorter: which fly bit you (horse, deer, black, stable, sand flies, no-see-ums); Ontario twin "biting flies ontario" can share it | planned 2026-12-07 |
| 56 | **how to get rid of wasps** | wasps & bees / howto | summer: Jan-Mar | Amazon + ads | US 7,400/mo Ahrefs, KD 3; GSC web 1,373/6mo @5.6 | 540 | US twin of how-to-get-rid-of-wasps-canada (planned Dec 14) | planned 2026-12-14 |
| 57 | **bat in house** | wildlife & droppings / id | year-round: now | ads | US 1,100/mo Ahrefs, KD 1; image 2/28d | 369 | near `bat-poop`; wildlife; public-health care (rabies) | not planned |
| 58 | **bugs that look like stink bugs** | other household bugs / id | winter: now | ads | US 500/mo Trends, KD 7; image 1/28d | 357 | look-alikes; small | not planned |
| 59 | **groundhog** | wildlife & droppings / species | summer: Jan-Mar | ads | US 4,200/mo Trends; GSC web 25/6mo @7.8; image 40/28d | 443 | wildlife species ID | not planned |
| 60 | **scorpion sting** | bites & stings / bite | year-round: now | ads | US 20,900/mo Trends, KD 17; image 12/28d | 311 | planned Dec 14 | planned 2026-12-14 |
| 61 | **nits vs dandruff** | other household bugs / vs | winter: now | ads | US 500/mo Trends, KD 0; image 1/28d | 357 | lice family (lice-eggs, what-do-lice-look-like live) | not planned |
| 62 | **tarantula hawk** | spiders / species | summer: Jan-Mar | ads | US 39,100/mo Trends, KD 6; GSC web 1/6mo @3.0; image 44/28d | 419 | near `mosquito-hawk-explained`; planned Dec 28 | planned 2026-12-28 |
| 63 | **brown dog tick** | ticks / species | summer: Jan-Mar | ads | US 7,875/mo Trends; GSC web 216/6mo @10.7; image 38/28d | 552 | near `what-does-tick-look-like-on-dog`; Google shows `deer-tick-vs-dog-tick-canada`; planned Dec 7 | planned 2026-12-07 |
| 64 | **mayflies** | other household bugs / species | summer: Jan-Mar | ads | US 27,000/mo Trends, KD 10; GSC web 15/6mo @14.1; image 32/28d | 413 | planned Dec 28 | planned 2026-12-28 |
| 65 | **carpet beetle vs bed bug** | bed bugs / vs | year-round: now | ads | US 358/mo Ahrefs; bettertermite 358 visits; GSC web 11/6mo @8.9; image 202/28d | 430 | near `how-to-get-rid-of-carpet-beetles-canada`; X vs Y | not planned (competitor gap) |
| 66 | **body lice** | other household bugs / species | winter: now | ads | US 27,800/mo Trends; GSC web 3/6mo @18.3; image 13/28d | 397 | near `lice-eggs`; medical edge: needs CDC sources | not planned |
| 67 | **ground beetle** (+ black ground beetle, ground beetles in house) | other household bugs / species | summer: Jan-Mar | ads | US 16,400/mo Trends; competitor 300 visits; GSC web 14/6mo @8.4; image 85/28d | 393 | fold "black ground beetle" and "ground beetles in house" | not planned |
| 68 | **snakes in texas** | wildlife & droppings / location | year-round: now | ads | US 2,600/mo Ahrefs, KD 5 | 591 | state series: same pattern as the held state pages (owner's call) | not planned |
| 69 | **bald faced hornet** | wasps & bees / species | summer: Jan-Mar | ads | US 24,300/mo Trends, KD 1; GSC web 13/6mo @3.8; image 27/28d | 386 | planned Dec 14 | planned 2026-12-14 |
| 70 | **snakes in florida** | wildlife & droppings / location | year-round: now | ads | US 3,800/mo Ahrefs, KD 2 | 570 | state series (owner's call) | not planned |
| 71 | **deer tick vs dog tick** | ticks / vs | summer: Jan-Mar | ads | US 6,650/mo Trends; GSC web 12,898/6mo @9.1; image 261/28d | 520 | US twin of deer-tick-vs-dog-tick-canada (planned Dec 7) | planned 2026-12-07 |
| 72 | **bot fly** | flies & gnats / species | summer: Jan-Mar | ads | US 34,300/mo Trends, KD 5; GSC web 8/6mo @21.4; image 23/28d | 369 | planned Dec 28 | planned 2026-12-28 |
| 73 | **snakes in georgia** | wildlife & droppings / location | summer: Jan-Mar | ads | US 3,400/mo Ahrefs, KD 2 | 548 | state series (owner's call) | not planned |
| 74 | **grass spider** | spiders / species | summer: Jan-Mar | ads | US 28,300/mo Trends, KD 1; GSC web 14/6mo @6.5; image 175/28d | 345 | planned Dec 21 | planned 2026-12-21 |
| 75 | **european hornet** (+ european hornet nest) | wasps & bees / species | summer: Jan-Mar | ads | US 13,900/mo Trends, KD 18; competitor 150 visits; GSC web 25/6mo @2.8; image 4/28d | 343 | near `wasp-vs-hornet`; planned Dec 28; fold "european hornet nest" | planned 2026-12-28 |
| 76 | **velvet ant** | wasps & bees / species | summer: Jan-Mar | ads | US 25,800/mo Trends, KD 3; image 3/28d | 334 | planned Dec 28 | planned 2026-12-28 |
| 77 | **spotted lanternfly** | other household bugs / species | summer: Jan-Mar | ads | US 78,700/mo Trends, KD 50; GSC web 2/6mo @2.0; image 5/28d | 535 | planned Dec 28; garden pest, hard results page | planned 2026-12-28 |
| 78 | **crab spider** | spiders / species | summer: Jan-Mar | ads | US 21,000/mo Ahrefs, KD 7; GSC web 2/6mo @13.5; image 122/28d | 311 | spider ID | not planned |
| 79 | **harvestman** | spiders / species | summer: Jan-Mar | ads | US 11,500/mo Trends, KD 4; GSC web 37/6mo @7.6; image 51/28d | 314 | daddy-long-legs is the cellar spider page; harvestmen are the other "daddy longlegs" | not planned |
| 80 | **grubs in lawn** | other household bugs / species | year-round: now | ads | US 12,000/mo Trends, KD 3; GSC web 1/6mo @49.0 | 521 | garden pest | not planned |
| 81 | **baby cockroach vs bed bug** | bed bugs / vs | year-round: now | ads | US 282/mo Ahrefs; cockroachcare 282 visits; GSC web 3/6mo @7.0; image 45/28d | 338 | X vs Y (cockroachcare's #3 page) | not planned (competitor gap) |
| 82 | **bird mites** | other household bugs / species | summer: Jan-Mar | ads | US 19,200/mo Trends, KD 7; GSC web 11/6mo @20.8; image 20/28d | 302 | planned Feb 1 | planned 2027-02-01 |
| 83 | **bugs that look like ants** | ants / id | summer: Jan-Mar | ads | US 300/mo Ahrefs, KD 0; GSC web 11/6mo @10.7 | 234 | look-alikes; small | not planned |
| 84 | **red and black bugs** | other household bugs / howto | year-round: now | Amazon + ads | US 2,100/mo Ahrefs, KD 3; GSC web 625/6mo @9.9; image 65/28d | 347 | US twin of how-to-get-rid-of-boxelder-bugs-canada (planned Oct 20, held) | planned 2026-10-20 |
| 85 | **bark scorpion** | spiders / species | winter: now | ads | US 16,100/mo Trends, KD 17; image 15/28d | 284 | planned Dec 28 | planned 2026-12-28 |
| 86 | **snake identification** (+ snakes in house) | wildlife & droppings / hub | year-round: now | ads | US 1,100/mo Ahrefs, KD 0 | 430 | snake ID hub; fold "snakes in house" | not planned |
| 87 | **house centipede vs silverfish** | other household bugs / vs | year-round: now | ads | US 1,500/mo Ahrefs; bettertermite 256 visits; image 42/28d | 309 | near `how-to-get-rid-of-centipedes-canada`; X vs Y; small | not planned (competitor gap) |
| 88 | **brown widow spider** | spiders / species | summer: Jan-Mar | ads | US 34,400/mo Trends, KD 1; GSC web 2/6mo @5.0; image 48/28d | 370 | planned Dec 21 | planned 2026-12-21 |
| 89 | **thrips** | other household bugs / species | year-round: now | ads | US 62,200/mo Trends, KD 22; GSC web 3/6mo @16.3; image 28/28d | 455 | garden pest | not planned |
| 90 | **blister beetle** | other household bugs / species | summer: Jan-Mar | ads | US 13,200/mo Trends; GSC web 1/6mo @3.0 | 264 | planned Dec 28 | planned 2026-12-28 |
| 91 | **spiders in michigan** | spiders / location | summer: Jan-Mar | ads | US 3,100/mo Ahrefs; GSC web 1/6mo @10.0; image 1/28d | 398 | state series (owner's call) | not planned |
| 92 | **phorid flies** | flies & gnats / species | year-round: now | ads | US 12,100/mo Trends, KD 3; GSC web 2/6mo @3.5; image 19/28d | 257 | fly ID | not planned |
| 93 | **itch mites** | other household bugs / species | summer: Jan-Mar | ads | US 7,000/mo Trends; GSC web 18/6mo @8.5; image 19/28d | 245 | planned Dec 21 ("oak mites") | planned 2026-12-21 |
| 94 | **stable fly** | flies & gnats / species | summer: Jan-Mar | ads | US 10,700/mo Trends; GSC web 117/6mo @3.9; image 1/28d | 246 | planned Dec 28 | planned 2026-12-28 |
| 95 | **how to get rid of chiggers** | fleas / howto | summer: Jan-Mar | Amazon + ads | US 274/mo Ahrefs; GSC web 118/6mo @2.7; image 12/28d | 170 | Google shows `chigger-bites`; planned Dec 21 | planned 2026-12-21 |
| 96 | **scorpions in arizona** | spiders / location | winter: now | ads | US 1,100/mo Ahrefs, KD 10; image 1/28d | 369 | state series (planned Dec 28) | planned 2026-12-28 |
| 97 | **cicada killer** | wasps & bees / species | summer: Jan-Mar | ads | US 47,200/mo Trends, KD 15; GSC web 2/6mo @14.0; image 8/28d | 413 | planned Dec 14 | planned 2026-12-14 |
| 98 | **winter tick** | ticks / species | winter: now | ads | US 9,300/mo Trends; image 25/28d | 234 | planned Dec 28 | planned 2026-12-28 |
| 99 | **natural mosquito repellent** | products by pest / product | year-round: now | Amazon | GSC web 5,046/6mo @6.7 | 84 | US twin of /blog/natural-mosquito-repellent-ontario (planned Dec 21) | planned 2026-12-21 |
| 100 | **stink bug eggs** | other household bugs / id | summer: Jan-Mar | ads | US 4,200/mo Trends | 177 | near `bed-bug-eggs`; eggs page; garden-adjacent | not planned (competitor gap) |
| 101 | **mealybugs** | other household bugs / species | year-round: now | ads | US 29,200/mo Trends, KD 1; GSC web 1/6mo @21.0; image 30/28d | 357 | garden pest | not planned |
| 102 | **pharaoh ants** | ants / species | summer: Jan-Mar | ads | US 6,600/mo Trends, KD 0; GSC web 585/6mo @10.8; image 1/28d | 213 | Google shows `how-to-get-rid-of-ants-canada`; ant species; 585 impressions already land on other ant pages | not planned (GSC gap) |
| 103 | **hammerhead worm** | other household bugs / species | summer: Jan-Mar | ads | US 19,000/mo Trends, KD 7; image 6/28d | 344 | garden; not an insect | not planned |
| 104 | **squash bugs** | other household bugs / species | summer: Jan-Mar | ads | US 27,500/mo Trends, KD 0; image 11/28d | 342 | garden pest | not planned |
| 105 | **venomous snakes** | wildlife & droppings / hub | year-round: now | ads | US 1,600/mo Ahrefs; GSC web 1/6mo @2.0 | 316 | snake family; could be the snake hub | not planned |
| 106 | **how to get rid of ground wasps** | wasps & bees / howto | summer: Jan-Mar | Amazon + ads | US 700/mo Ahrefs, KD 0; GSC web 4,026/6mo @5.7 | 237 | US twin of how-to-get-rid-of-ground-wasps-canada (planned Dec 14); add "ground hornets" | planned 2026-12-14 |
| 107 | **snow fleas** | fleas / species | winter: now | ads | US 5,300/mo Trends | 192 | winter earner; springtails page is the closest | not planned (competitor gap) |
| 108 | **pavement ants** | ants / species | summer: Jan-Mar | ads | US 5,900/mo Trends, KD 12; GSC web 100/6mo @12.6; image 11/28d | 200 | ant species | not planned |
| 109 | **spiders in arizona** | spiders / location | year-round: now | ads | US 1,300/mo Ahrefs; GSC web 1/6mo @15.0; image 3/28d | 294 | state series (planned Dec 21) | planned 2026-12-21 |
| 110 | **spider bites ontario** | bites & stings / bite | summer: Jan-Mar | ads | US 572/mo Ahrefs; GSC web 378/6mo @9.1; image 14/28d | 220 | Ontario edition of what-does-a-spider-bite-look-like (planned Dec 7) | planned 2026-12-07 |
| 111 | **western conifer seed bug** | other household bugs / species | year-round: now | ads | US 5,100/mo Trends; GSC web 6/6mo @10.5; image 32/28d | 190 | planned Dec 28; a fall invader in Ontario too | planned 2026-12-28 |
| 112 | **bugs in hair not lice** | other household bugs / id | year-round: now | ads | US 700/mo Ahrefs, KD 0; image 5/28d | 151 | small | not planned |
| 113 | **deer ked** | flies & gnats / species | winter: now | ads | US 254/mo Ahrefs; GSC web 57/6mo @6.3; image 1/28d | 166 | near `deer-poop`; planned Dec 7; small | planned 2026-12-07 |
| 114 | **rat mites** | other household bugs / species | year-round: now | ads | US 3,300/mo Trends; GSC web 3/6mo @9.0; image 11/28d | 163 | planned Dec 21 | planned 2026-12-21 |
| 115 | **spiders in alabama** | spiders / location | summer: Jan-Mar | ads | US 700/mo Ahrefs; image 6/28d | 237 | state series (owner's call) | not planned |
| 116 | **spiders in georgia** | spiders / location | summer: Jan-Mar | ads | US 700/mo Ahrefs; image 3/28d | 237 | state series (owner's call) | not planned |
| 117 | **spiders in indiana** | spiders / location | summer: Jan-Mar | ads | US 700/mo Ahrefs; image 8/28d | 237 | state series (owner's call) | not planned |
| 118 | **spiders in ohio** | spiders / location | summer: Jan-Mar | ads | US 700/mo Ahrefs; GSC web 2/6mo @10.0; image 20/28d | 237 | state series (owner's call) | not planned |
| 119 | **spiders in tennessee** | spiders / location | summer: Jan-Mar | ads | US 700/mo Ahrefs; GSC web 1/6mo @10.0; image 5/28d | 237 | state series (owner's call) | not planned |
| 120 | **spiders in washington** | spiders / location | summer: Jan-Mar | ads | US 700/mo Ahrefs; GSC web 2/6mo @10.5; image 15/28d | 237 | state series (owner's call) | not planned |
| 121 | **leaf footed bug** | other household bugs / species | summer: Jan-Mar | ads | US 11,500/mo Trends; GSC web 7/6mo @4.3; image 12/28d | 252 | planned Dec 28; garden | planned 2026-12-28 |
| 122 | **scale insects** | other household bugs / species | winter: now | ads | US 9,100/mo Trends; image 17/28d | 232 | garden pest | not planned |
| 123 | **scorpions in the us** | spiders / location | year-round: now | ads | US 100/mo Ahrefs, KD 0; image 16/28d | 203 | scorpion hub (planned Dec 14); low | planned 2026-12-14 |
| 124 | **odorous house ants** | ants / species | year-round: now | ads | US 3,800/mo Trends, KD 13; GSC web 1/6mo @24.0; image 4/28d | 171 | ant species | not planned |
| 125 | **mole crickets** | wildlife & droppings / species | year-round: now | ads | US 6,200/mo Trends; GSC web 5/6mo @10.6; image 38/28d | 203 | near `crickets-in-house`; planned Jan 4; garden | planned 2027-01-04 |
| 126 | **spiders in north carolina** | spiders / location | summer: Jan-Mar | ads | US 700/mo Ahrefs; image 2/28d | 237 | state series (owner's call) | not planned |
| 127 | **heat vs chemical bed bug treatment** | bed bugs / vs | year-round: now | ads | US 450/mo Ahrefs; GSC web 53/6mo @7.7 | 203 | US twin of heat-vs-chemical-bed-bug-treatment-canada | not planned |
| 128 | **scorpions in oklahoma** | spiders / location | summer: Jan-Mar | ads | US 236/mo Ahrefs; image 4/28d | 162 | state series (owner's call) | not planned |
| 129 | **skeeter syndrome** | mosquitoes / disease | summer: Jan-Mar | ads | US 35,525/mo Trends; GSC web 489/6mo @7.9; image 149/28d | 468 | Google shows `mosquito-bite-treatment-relief`; planned Dec 7; medical edge | planned 2026-12-07 |
| 130 | **permethrin spray for clothes** | products by pest / product | year-round: now | Amazon | GSC web 1,432/6mo @7.1 | 24 | US twin of permethrin-canada-yard-clothing-spray (planned Dec 7) | planned 2026-12-07 |
| 131 | **are there chiggers in <state>** | fleas / location | summer: Jan-Mar | ads | none in our data | 83 | none | planned 2026-12-14 |
| 132 | **asian tiger mosquito** | mosquitoes / species | summer: Jan-Mar | ads | GSC web 140/6mo @4.6; image 79/28d | 37 | planned Dec 7 | planned 2026-12-07 |
| 133 | **gallinipper** | mosquitoes / species | summer: Jan-Mar | ads | GSC web 77/6mo @8.2; image 17/28d | 34 | planned Dec 7 | planned 2026-12-07 |
| 134 | **culex mosquito** | mosquitoes / species | summer: Jan-Mar | ads | GSC web 118/6mo @7.6; image 7/28d | 35 | planned Dec 7 | planned 2026-12-07 |
| 135 | **asian longhorned tick** | ticks / species | summer: Jan-Mar | ads | GSC web 2/6mo @2.0; image 111/28d | 36 | planned Dec 7 | planned 2026-12-07 |
| 136 | **when is tick season** | ticks / location | summer: Jan-Mar | ads | GSC web 3,301/6mo @9.4; image 17/28d | 80 | US twin of the Ontario tick season pages (planned Dec 7) | planned 2026-12-07 |
| 137 | **what percentage of ticks carry lyme disease** | ticks / disease | summer: Jan-Mar | ads | GSC web 937/6mo @7.1; image 3/28d | 183 | near `ticks-that-carry-lyme-disease`; Google shows `/ticks-in-ontario-statistics`; planned Dec 7; a data page (Ontario searchers ask it) | planned 2026-12-07 |
| 138 | **scabies vs bed bugs** | bed bugs / disease | year-round: now | ads | US 525/mo Trends; GSC web 4/6mo @23.2; image 20/28d | 107 | planned Dec 14; medical edge | planned 2026-12-14 |
| 139 | **types of mosquitoes** | mosquitoes / hub | summer: Jan-Mar | ads | GSC web 126/6mo @7.4; image 18/28d | 21 | ID chart (planned Dec 7 as a hub) | planned 2026-12-07 |
| 140 | **anopheles mosquito** | mosquitoes / species | summer: Jan-Mar | ads | GSC web 8/6mo @6.6; image 23/28d | 8 | planned Dec 21 | planned 2026-12-21 |
| 141 | **groundhog tick** | ticks / species | summer: Jan-Mar | ads | GSC web 2/6mo @3.0; image 25/28d | 8 | planned Dec 21 | planned 2026-12-21 |
| 142 | **ticks on cats** | ticks / species | summer: Jan-Mar | ads | GSC web 4/6mo @2.5; image 40/28d | 13 | planned Dec 28 | planned 2026-12-28 |
| 143 | **dengue in the us** | mosquitoes / disease | year-round: now | ads | US 74/mo Ahrefs; GSC web 93/6mo @8.5; image 11/28d | 54 | planned Dec 7; medical | planned 2026-12-07 |
| 144 | **aedes aegypti** | mosquitoes / disease | summer: Jan-Mar | ads | GSC web 73/6mo @7.5; image 55/28d | 32 | planned Dec 7 | planned 2026-12-07 |
| 145 | **rocky mountain spotted fever** | other household bugs / disease | year-round: now | ads | GSC web 17/6mo @4.0; image 150/28d | 49 | planned Dec 7; medical | planned 2026-12-07 |
| 146 | **powassan virus** | ticks / disease | summer: Jan-Mar | ads | GSC web 28/6mo @3.1; image 64/28d | 21 | near `/west-nile-virus-ontario-tracker` | planned 2026-12-07 |
| 147 | **tick diseases in dogs** | ticks / disease | summer: Jan-Mar | ads | GSC web 45/6mo @18.1; image 37/28d | 12 | near `what-does-tick-look-like-on-dog` | planned 2026-12-07 |
| 148 | **anaplasmosis** | ticks / disease | summer: Jan-Mar | ads | GSC web 35/6mo @3.9; image 49/28d | 16 | none | planned 2026-12-07 |
| 149 | **what to do after a tick bite** | bites & stings / bite | summer: Jan-Mar | ads | GSC web 52/6mo @23.5; image 1/28d | 1 | US twin of /blog/tick-bite-symptoms-what-to-do-ontario (planned Dec 7) | planned 2026-12-07 |
| 150 | **mosquito borne diseases** | mosquitoes / disease | summer: Jan-Mar | ads | GSC web 29/6mo @14.9 | 5 | near `tick-borne-diseases-ontario-complete-list` | planned 2026-12-07 |

**Ranks with little evidence.** 21 of the 150 carry under 150 estimated impressions a month, mostly the planned US tick, mosquito and disease pages of the Dec 7-28 waves. The saved research dropped "pure summer tick or mosquito topics", so they have no saved volume, and we barely show in the US for them yet. Their real US demand is probably higher than this list says (for comparison, the saved Trends ratios put the lone star tick and deer tick twins at ~100K-120K US searches a month). Check them in Keyword Planner before January, and keep the medical ones (Powassan, EEE, RMSF, babesiosis...) at the back: institutions own those results pages.

**Beyond 150:** 38 more in `new_pages.csv`, all low-evidence.

**Upgrade instead (biggest 25 of 87): the topic belongs on a page that already ranks.** These are the same kind of work as the top-3 push: new title words, a section, photos.

| Topic | Est. impr/mo | Put it on |
|---|---|---|
| mouse repellent | 3,157 | /blog/mouse-repellent-canada already targets it |
| ground hornets | 2,346 | ground wasps pages: add "ground hornets" (bettertermite 1,955) and an ID section |
| what do earwigs eat | 2,044 | FAQ in how-to-get-rid-of-earwigs (winners-gap) |
| white house spider | 1,870 | /blog/yellow-sac-spiders ("pale house spider"): add "white house spider" to the title |
| fleas in hair | 1,745 | /blog/fleas-on-humans (built Oct 28 for this): add "fleas in hair" to it |
| red paper wasp | 1,432 | /blog/paper-wasps: add a red paper wasp section |
| little black beetles in house | 1,152 | /blog/beetles-in-house: add "little black beetles" to the title |
| are wolf spiders dangerous | 1,000 | /blog/wolf-spiders |
| wolf spider vs brown recluse | 970 | /blog/brown-recluse-look-alikes: put "wolf spider vs brown recluse" in the title and first section |
| black ants with wings | 952 | /blog/flying-ants |
| baby german cockroach | 924 | /blog/german-cockroaches: add nymph photos (image search 1,700 in 28 days goes to the baby cockroach page) |
| ultrasonic pest repeller | 764 | /blog/ultrasonic-pest-repellers-do-they-work already targets it |
| mud dauber vs wasp | 748 | /blog/mud-daubers: add the "mud dauber vs wasp" comparison |
| rat zapper | 715 | /blog/best-rat-trap-canada: add the electric "rat zapper" section and retitle (it already ranks 10-11 for these) |
| diatomaceous earth for fleas | 690 | /blog/diatomaceous-earth-canada-buyers-guide (home-remedy pages are on the do-not-build list) |
| flying ants in house | 673 | /blog/flying-ants |
| tiny red spiders | 658 | /blog/tiny-red-bugs and red-ticks-and-clover-mites: add "tiny red spiders" |
| what do chiggers look like | 641 | /blog/chigger-bites already ranks #3 for "chiggers" (god list: upgrade it, do not build a second page) |
| homemade fruit fly trap | 640 | /blog/how-to-get-rid-of-fruit-flies: DIY trap section |
| bugs that look like ladybugs | 626 | /blog/asian-lady-beetles: add "bugs that look like ladybugs" (winners-gap advice) |
| cellar spider vs daddy long legs | 601 | /blog/daddy-long-legs is titled "Cellar Spider (Daddy Long Legs)" |
| how to kill maggots | 591 | /blog/maggots: add the "how to kill maggots" section |
| are ants nocturnal | 567 | /learn/ants FAQ |
| how long do cockroaches live | 554 | /learn/cockroaches FAQ |
| giant mosquito | 499 | /blog/mosquito-hawk-explained: add "giant mosquito" to the title (crane flies are what people mean) |

**Dropped, scheduled or the owner's call:**

- common household bugs: hub (deferred in release-overrides; hubs earn little here)
- bed bug bites: written and scheduled for Nov 24 (content/guides-scheduled)
- do spiders poop: one-fact question (an FAQ line in house-spiders)
- how to keep snakes away: "keep X away" lists are on the do-not-build list
- scabies: skin condition, outside the pest identity (like head lice, which next-50 left to the owner)
- best dehumidifier canada: off-moat appliance head term (the Oct trust sweep retired 8 such pages)
- best air purifier for allergies: retired on purpose in the Oct trust sweep (off-moat appliance page; now 301s to /pest-product-guides)
- Plus 20 product seeds with no measured demand.

**US twins (20).** Planned US editions of live Canadian pages (hreflang pairs). Search Console here is all countries, so it cannot say how much US demand the Canadian page misses. Pull a US-only query report for each Canadian page before building its twin: build where the US impressions are a small share of US demand, skip where the Canadian page already ranks in the US.

## 3. FAMILY SCALE MAP

Impressions and clicks are web search, per day. "Now" = Oct 5-Nov 1; "summer 2026" = Jun-Aug.

**How "at maturity" is estimated.**
- **Live pages:** October pages count double and September pages x1.3, because they are still climbing (1-5 weeks old on Nov 1).
- **Season:** the family's Google Trends US index (12-month mean = 1, averaged over the terms saved in next-50 and next-wave-research) turns October into a yearly average and a June-August peak.
  - Summer is capped at 3x October for live pages. The mosquito index (0.38 in October) rests on 2 terms, and October's mosquito searches are fall questions.
- **Listed topics:** the low end sums the calibrated estimates; the high end is 2.5x that (the mean page draws 2.5-4.7x the median here).
- **Keyword pool:** topics still open in the Oct 16 Ahrefs pull (US, volume 300+, KD 20 or less, a DR-30-or-weaker page in the top 5), at 15-40 impressions a page a day.
  - The pool is a lower bound: lists were capped at 40-70 rows per family. Part of it was built after Oct 16.

| Family | Pages live | Impr/day now | Impr/day summer 2026 | Clicks/day now | Clicks/day summer 2026 | Strong new pages on the list (all) | More in the keyword pool | Impr/day at maturity: yearly avg | Summer peak | Top-3 push, clicks/mo |
|---|---|---|---|---|---|---|---|---|---|---|
| mosquitoes | 76 | 7,645 | 4,019 | 30.1 | 23.7 | 1 (10) | 6 | 13,800-14,000 | 23,800-24,100 | +660 |
| ticks | 103 | 3,968 | 4,173 | 31.7 | 56.4 | 7 (23) | 6 | 7,000-7,600 | 10,800-11,600 | +402 |
| bites & stings | 38 | 6,402 | 2,803 | 46.3 | 16.0 | 6 (10) | 19 | 7,800-8,500 | 13,200-14,400 | +461 |
| bed bugs | 32 | 1,793 | 276 | 11.3 | 2.9 | 2 (4) | 9 | 2,800-3,000 | 4,100-4,500 | +154 |
| mice & rats | 35 | 2,676 | 91 | 14.8 | 0.8 | 2 (2) | 27 | 5,900-6,800 | 6,100-7,000 | +188 |
| cockroaches | 17 | 1,854 | 38 | 7.5 | 0.2 | 2 (2) | 23 | 4,200-5,000 | 6,400-7,600 | +198 |
| spiders | 25 | 1,041 | 7 | 4.2 | 0.0 | 12 (29) | 23 | 2,700-3,700 | 4,300-5,900 | +77 |
| fleas | 8 | 962 | 0 | 5.8 | 0.0 | 0 (7) | 15 | 1,700-2,100 | 2,600-3,200 | +128 |
| flies & gnats | 16 | 1,109 | 1,175 | 11.0 | 13.9 | 5 (9) | 26 | 1,900-2,800 | 3,300-4,800 | +127 |
| wasps & bees | 10 | 269 | 533 | 1.9 | 9.2 | 11 (15) | 22 | 1,300-2,700 | 2,700-5,500 | +39 |
| ants | 22 | 1,331 | 35 | 4.0 | 0.2 | 2 (7) | 35 | 3,600-5,100 | 6,000-8,400 | +113 |
| wildlife & droppings | 23 | 1,303 | 327 | 9.1 | 2.7 | 21 (23) | 23 | 3,500-4,800 | 4,600-6,400 | +135 |
| other household bugs | 63 | 2,292 | 231 | 14.4 | 1.3 | 23 (44) | 77 | 5,300-8,000 | 6,900-10,300 | +147 |
| products by pest | 167 | 7,607 | 6,539 | 79.1 | 104.2 | 1 (3) | 0 | 8,800-8,900 | 12,800-12,900 | +846 |
| service, city & home | 113 | 439 | 1,063 | 1.5 | 9.3 | 0 (0) | 0 | 800-800 | 1,400-1,400 | +76 |
| tools & data hubs | 5 | 36 | 114 | 0.2 | 0.6 | 0 (0) | 0 | 100-100 | 100-100 | +14 |
| **TOTAL** | 753 | 40,727 | 21,424 | 273.0 | 241.0 | 95 (188) | 311 | 71,300-83,900 | 109,000-128,300 | +3,765 |

Notes on the rows:
- **Products by pest** holds the 167 Amazon product pages. Impressions a day now (summer 2026) by pest:
  - equipment and general (dehumidifiers, sprayers, repellers) 47 pages, 1,451 (989);
  - bed bugs 39 pages, 1,198 (332);
  - mosquitoes 37 pages, 1,044 (3,615: the summer leader);
  - rodents 10 pages, 1,246 (204);
  - then wildlife, flies, cockroaches, wasps, ticks, fleas, ants.
  - It has the biggest top-3 gain and almost no new-page inventory. Per skill rule 2, a new product page here earns about CA$30 a year on average.
- **Bites & stings** is the best family per page (mature bite pages average 219 impressions a day, median 98), but its listed inventory is small (10 topics, 6 strong, plus 19 in the Oct 16 pool). Most new bite topics are pairs (flea vs bed bug, chigger vs flea) and stings.
- **Mice & rats, cockroaches and fleas** had almost no pages last summer. Their summer numbers are not a season reading.
- **Wasps & bees** is the biggest summer opening on the list (11 strong topics: yellow jackets, types of wasps, carpenter bee vs bumble bee, wasp vs bee, yellow jacket sting).
- **Other household bugs** (23 strong: termite signs and look-alikes, moth eggs, clothes moths, beetles, lacewings, garden pests) and **wildlife & droppings** (21: droppings pairs, possum, snake and cricket poop, moles, squirrels, chipmunks, snakes) have the most strong listed topics.
- **Ticks and mosquitoes** are big only in summer, and their new-page evidence is weakest (the planned US species pages have no saved volume).

### Totalled against 300,000-400,000 impressions a day

- **Today:** 40,727 a day (1.14 million in the last 28 days).
- **Live pages matured, through the season:** about 63,000 a day on average, 97,000 at the summer peak.
- **+ the 188 listed topics:** +3,200 to +8,100 a day on average.
- **+ the 311 open pool keywords:** +4,700 to +12,400.
- **= 71,000-84,000 a day on average, 109,000-128,000 at the peak.** That is 18-28% of 300,000-400,000 on average, and 27-43% at the peak.
- **The gap is about 172,000-329,000 a day.** At what pages draw here, that is roughly:
  - 4,300-8,200 more pages at 40 a day (the October cohort averages 38 in its first weeks; matured pages average 70, median 15);
  - about half that if yield per page doubles.
- **At the owner's pace** (10 a day, 25 in any 7 days, about 1,300 a year) that is 3.3-6.3 years of building. The repo's research covers about 500 of those topics (this list plus the open keyword pool), so the rest needs new topic research.
- **The comparables got there with more:** Fox (223,000 visits in July 2026) and Orkin Canada (239,000 in July 2025) had 900-2,200+ pages, DR 36-66, 600-3,000 linking sites and 2-4 years of climbing (200k-comparables.md). We have 753 indexable pages, DR 1.9 and 55 followed linking sites.
- **Clicks:** at last summer's 1.1-1.5% click-through, the matured inventory gives about 1,200-1,900 Google clicks a day at the summer peak. The top-3 push adds +125 to +260 a day on average and more in summer. That is 1,500-2,500 a day, the Nov 3 plan's range. 10,000 a day needs both 3-4x the impressions and twice the click rate.

## 4. What this data cannot tell

- **More than half the picture is hidden.** Search Console names the search for 44% of impressions and only 29% of clicks in the last 28 days (47% and 41% in summer). Every query-level number here (push gains, gap topics, topic demand) sees less than half. Page totals are complete, which is why the family map uses them.
- **One summer, and the site changed under it.** Jun-Aug 2026 is a single season on a site a third this size, mostly Canadian and mostly mosquito and tick. Most of today's pages (the US guides, the 317 October pages) have never seen a summer, so their summer is a Trends-based guess. The summer click curve (2x October) may not hold for a more American site.
- **Position here is not organic rank.** Answer boxes, AI Overview citations and image blocks are counted as positions 1-3, so the measured top-3 rate (1.1% October, 2.3% summer) mixes true top-3 results (6-19% on some of ours) with blocks that are rarely clicked. The push gains are averages; a page that truly reaches #1-3 on a "see / choose / do" search can do several times better, and a trivia page will do worse.
- **Demand for topics we do not rank for is the weakest number.** Volumes are saved Ahrefs and Trends figures (Ahrefs was cancelled Oct 25), and our own page results say stated volume barely predicts impressions here. The planned US tick and mosquito pages have no saved volume at all.
- **Countries are mixed.** The pulls are all countries, so a Canadian page and its US twin cannot be separated, and US vs Canadian click rates (0.55% vs 1.79% at position 1, Nov 2 check) are averaged together.
- **Young pages.** 317 pages are under 6 weeks old. Their maturity (x2 here) is a judgment from the October cohort, not a measurement.
- **Nothing here models Google updates.** The trust audit's risk (fast publishing of look-alike pages, a fall 3-6 months after the peak) would undo the per-page yields. Neither does it model links, or the Mediavine and AdSense status, or the service side, where one customer is worth $1,222.
- **Estimates are medians from a skewed distribution.** Most new pages will land below their estimate and a few far above it. The ranking is more reliable than any single number.

## Files and method

- `top3_push.csv`: every page with a gain:
  - rank and value rank, family, type, Amazon flag;
  - gains (year average, October month, summer month, with hidden searches, question-aware, October curve all year);
  - clicks vs curve, current clicks and impressions, the 3 biggest searches.
- `new_pages.csv`: every topic checked:
  - decision (keep, twin, section, drop, scheduled, owner), rank for keep and twin;
  - target search, family, type, season, money, evidence, estimates, overlap check, sources, plan status;
  - raw volume, KD, competitor visits and GSC numbers.
- `family_scale.csv`: the family map with every intermediate column (season indexes, young-page share, image impressions).
- Scripts, in the session scratchpad `targets/`:
  - `common.py` (loaders, tokenizer, classifier), `s1_ctr.py` (curves), `s2_push.py`, `s3_gsc_gaps.py`;
  - `s4_candidates.py` (sources, coverage, estimates), `decisions.py` (the hand review), `s5_lists.py`, `s6_family.py`, `s7_write.py`.
- Old addresses are folded into today's through the 301s in `next.config.mjs`. Noindex and non-canonical pages are left out. Families come from the address and title, page types from the Oct 20 Amazon file and the address.
