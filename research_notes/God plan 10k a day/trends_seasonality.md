# Keyword volumes, discovered keywords and seasonality (Nov 3, 2026)

Sources: Google Ads Keyword Planner (account 468-476-0160, read-only use) and Google Trends, both read in the owner's Chrome on Nov 3, 2026. Ahrefs was not used.

## Summary (read this first)

**Files in this folder**

| File | What it holds |
|---|---|
| `keyword_volumes.csv` | All 455 seed keywords: Canada and US average monthly searches, competition, top-of-page bid low/high, plus 3-month and year-over-year change and a note column. 451 measured, 4 refused (over 10 words). |
| `discovered_keywords.csv` | 25 head topics, the 30 highest-volume "Discover new keywords" ideas per country merged per topic: 927 rows, 887 unique keywords, 841 of them not in the seed list. Canada and US figures for every row. |
| `trends_seasonality.md` | This file: summary, limits, and Google Trends seasonality (5 years, US and Canada) for 16 core terms with rising related queries. |

**What I could get**
- Keyword Planner volumes for both countries for every seed keyword except the 4 that are longer than 10 words (Keyword Planner refuses them; the note column points to the closest measured phrasing).
- Competition and top-of-page bid ranges for both countries. Columns `competition`, `bid_low`, `bid_high` are **Canada**; `us_competition`, `us_bid_low`, `us_bid_high` are US. All bids are in **CAD** (the account's currency), for both countries.
- Discovery ideas for all 25 topics in both countries (top 100 per topic and country read, top 30 per country kept and merged; where a kept keyword was not in the other country's top 100, its figure came from another topic's list or from a separate search-volume lookup, as the note column says).
- 5-year Google Trends curves (261 weeks, Nov 2021 to Oct 2026) and 10 rising related queries for 16 terms in each country. No CAPTCHA or bot check appeared.

**What I could not get, and the limits**
1. **Ranges, not exact numbers.** The account has no running campaigns, so Keyword Planner shows buckets (0-10, 10-100, 100-1K, 1K-10K, 10K-100K, 100K-1M) and says "To get more detailed statistics, run a campaign." Each bucket is 10x wide. The CSVs carry the bucket as shown plus numeric `min`/`max` columns for sorting. Exact figures would need an active, spending campaign; I did not create one (read-only rule).
2. **The 3-month and YoY change columns are bucketed too** (mostly -90%, 0%, +900%). Do not read seasonality from them; use the Trends section below.
3. **Language.** Discovery results are English-only. The seed-list volumes come from a keyword plan whose historical view stayed on "All languages": the language control is locked in that view, and setting the plan to English in the Forecast tab did not change it. Where a keyword was measured both ways (for example "best mosquito repellent for yard", "cutter backyard bug control", "ant killer indoor", "how to rid your house of gnats") the bucket was the same.
4. **Close variants share one number.** Keyword Planner groups plurals, misspellings and near-duplicates and reports the same figure for each (black fly = black flies = blackflies; "brown recluse" = "violin spider" = "fiddleback spider" = "brown lacus spider"). 21 such groups in the seed list are flagged in the note column ("Identical figures to: ..."). **Never add these together.** The discovered list is full of them, so its 887 unique keywords represent far fewer distinct demand pools.
5. **20 seed keywords returned no data at all ("-") in either country**: baby bed bug(s), baby tick(s), baby snakes, baby rats, baby copperhead, baby silverfish, what do baby bed bugs look like, bug spray for kids, mole crickets, mole repellent, lyme disease map ontario 2026, what percentage of ticks carry lyme disease in ontario, caulk for pests, yes, mosquito control vaughan, tick control vaughan, mosquito control york region, what temperature do mosquitoes go away at night. Keyword Planner gives no reason. Most contain words (baby, kids, Lyme disease, mole) that Google Ads treats as sensitive; the GTA service terms are probably just too small. Treat them as unknown, not zero.
6. **Two topic seeds had to be changed.** Plain "mice" returned computer-mouse ideas (gaming mice, Logitech) and plain "flies" returned dragonfly and gym "delt fly" ideas, so those topics use "mice in house" + "get rid of mice" and "house flies" + "flies in house" (column `seed_used`).
7. Keyword Planner's 12-month window was Oct 2025 to Sep 2026; Google network only (no search partners).
8. Google Trends gives relative interest (0-100, each term and country scaled to its own busiest week), not search counts. News spikes inflate some months (listed below). Rising lists contain news, celebrities and homework questions; I kept them verbatim and put obvious noise in [brackets].
9. Side effect in Google Ads: Keyword Planner saved 3 draft keyword plans ("Plan from Nov 3, 2026, 7 PM" twice and "Plan from Nov 3, 2026, 8 PM"). No campaign, ad, budget, billing or account setting was touched. The drafts are harmless; delete them under Tools > Keyword Planner if you want a clean list.

**Headline findings**
- **The US is about 10x Canada for the same keyword.** Of the 451 measured seed keywords, the US has 28 at 100K-1M and 176 at 10K-100K; Canada has none above 100K, 32 at 10K-100K and 171 at 1K-10K.
- **Seed keywords at 100K-1M a month in the US:** mosquito, mosquito bites, mosquito repellent, bed bugs, what do bed bugs look like, fruit fly trap, chiggers, horse fly, brown recluse, maggots, huntsman spider, black widow spider, stick bug, cicada, garter snake, june bug, copperhead, dust mites, spotted lanternfly, yellow jacket, mayflies, love bugs, groundhog, mouse traps, deet bug spray, diatomaceous earth, dehumidifier, dehumidifier for basement.
- **Large information topics the seed list does not cover** (US 100K-1M in discovery): ticks, tick bites, lone star tick (amblyomma americanum), lyme disease, spider bites and brown recluse bite, fleas, rats, cockroaches and german cockroach, palmetto bug, carpenter ants, wasps and mud dauber, how to get rid of fruit flies / gnats, silverfish, house centipede, carpet beetles, bed bug bites, chigger bites. Commercial ones at the same level: flea treatment for cats, bed bug treatment / exterminator, cockroach exterminator, deet repellents.
- **Highest bids are service terms**, not products: mosquito control near me (US CA$48.44 high / CA CA$15.32), wasp control (US 42.01 / CA 15.33), tick control near me (US 40.33), wasp nest removal (US 30.43 / CA 13.12), tick control (US 27.06 / CA 13.63), mosquito control (US 26.60), pest control etobicoke (CA 20.27), pest control north york (CA 18.26). Product terms mostly sit at CA$0.50-5 high bid; cockroach spray (US 16.24) and mouse poop / rat poop (US 13-16) stand out.
- **Season shape (Trends):** mosquito searches are short and sharp in Canada (mosquito bites peak/trough 29x, half-peak or more only Jun-Aug) and longer in the US (13x, Jun-Sep). Ticks peak in **May**, a month before mosquitoes, with a small October bump in Canada. Fruit flies peak in **September**, wasps in **August**, fleas Jul (US) / Sep (CA) and stay high into November. Bed bugs and cockroaches are nearly flat (1.6-2x), so they earn all year. Mice and mouse traps run the other way: peak **Oct-Nov**, trough Jun-Jul, low amplitude (1.4-1.7x). Almost everything else bottoms in Dec-Feb.
- **5-year direction (last 52 weeks vs first 52):** ticks +76% US / +77% CA, tick bite +42% / +30%, mosquito +29% / +25%, mosquito repellent +34% / +19%, fruit flies +38% / +14%, wasps +35% / +21%; mosquito bites, bug bites and bed bugs flat; spider bite -11% / -12%. The 2026 tick jump coincides with a news spike ("bill gates ticks", "funding ticks"), so part of it is news. Canada's 2026 mosquito season was its biggest in 5 years (weekly high Jun 28, 2026).
- **Rising queries worth noting:** alpha-gal syndrome and lone star tick (both countries; Canada also "are lone star ticks in canada", "why are ticks getting worse", "worst areas for ticks in ontario" +500%), "bug bite identifier" (rising under tick bite, spider bite and bug bites), "itchy bumps on skin like mosquito bites but aren't", "no signs of bed bugs but i have bites", "close up pictures of bed bug bites", "types of bug bites chart", "how to get rid of fruit flies in 2 minutes", Zevo traps, Thermacell E90 / rechargeable, Photon Matrix mosquito killer (+2,800% US), mosquito repellent stickers and patches, vanilla extract repellent, Vamoose for mice, "how to humanely get rid of mice", "what smells do mice hate", Simparica Trio, Joro spider.

## How the numbers were gathered

**Keyword Planner.** Tools > Planning > Keyword Planner, already in the full ("expert") interface, so no mode switch or terms were needed.
- "Get search volume and forecasts" with the 455 seeds (451 accepted after removing 4 that are over 10 words and the "?" from "what flowers attract mosquitoes?"). The plan listed 419 keywords: Keyword Planner silently merged 32 close variants into other rows. Those 32 were run again in a second plan (26 listed; the last 6 are pure duplicates and carry their group's figure, as their notes say). Location Canada, then United States; Google network; Oct 2025 to Sep 2026.
- "Discover new keywords" (Keyword ideas) per topic, location Canada then United States, language English, sorted by average monthly searches; the top 100 rows were read for each topic and country. Default filter "Exclude adult ideas" left on.
- A third small plan looked up the 51 kept discovery keywords that were missing from the other country's top-100 list.
- All tables were read on screen; nothing was downloaded. Raw page dumps are kept in the session scratchpad (`kp_20261103/`).

**Google Trends.** trends.google.com Explore, one term at a time, "Past 5 years", Web Search, all categories, geo US and CA. Weekly values were read from the chart's own data table. For each term: monthly averages over Nov 2021 to Oct 2026 (the current partial week excluded), peak and trough month, peak-to-trough ratio, months at 50% or more of the peak month, and last-52-weeks vs first-52-weeks change. Rising related queries are the first 10 of the "Rising" list (5-year window).

## Seasonality (Google Trends, 5 years, Nov 2021 to Oct 2026)

Peak / trough = average of the peak month divided by average of the trough month. Seasonal index = each month's average as a % of the peak month.

| Term | Geo | Peak month | Trough month | Peak / trough | Months at 50%+ of peak | Last 52 wks vs first 52 wks | Seasonal index Jan-Dec (peak month = 100) |
|---|---|---|---|---|---|---|---|
| mosquito | US | Jun | Jan | 5.5x | Apr-Sep | +29% | 18 23 33 51 76 100 97 82 74 46 24 18 |
| mosquito | CA | Jul | Dec | 8.1x | May-Aug | +25% | 13 13 15 21 55 81 100 60 30 16 13 12 |
| mosquito bites | US | Jul | Jan | 13x | Jun-Sep | +2% | 8 8 12 20 46 79 100 88 67 39 15 9 |
| mosquito bites | CA | Jul | Feb | 29.2x | Jun-Aug | -5% | 4 4 4 6 28 62 100 64 25 9 5 4 |
| ticks | US | May | Jan | 5.5x | Apr-Jul | +76% | 18 21 31 64 100 88 62 41 30 30 27 19 |
| ticks | CA | May | Jan | 8.1x | May-Jul | +77% | 12 14 21 44 100 85 56 31 21 30 24 13 |
| tick bite | US | Jun | Jan | 9.5x | Apr-Jul | +42% | 10 11 23 57 96 100 75 47 32 31 28 14 |
| tick bite | CA | Jun | Feb | 17.5x | May-Aug | +30% | 6 6 10 31 86 100 89 52 28 36 25 8 |
| spider bite | US | Jul | Feb | 3.1x | Apr-Oct | -11% | 32 32 41 56 78 99 100 93 81 65 47 37 |
| spider bite | CA | Jul | Feb | 4.1x | May-Sep | -12% | 28 24 28 38 61 81 100 97 70 46 31 28 |
| bed bugs | US | Jul | Jan | 2x | Feb-Dec | -2% | 49 51 64 69 79 97 100 96 79 78 59 50 |
| bed bugs | CA | Aug | Feb | 1.8x | all year | +8% | 58 57 63 62 71 81 96 100 86 93 72 59 |
| fleas | US | Jul | Feb | 3.3x | May-Nov | +21% | 33 30 37 48 67 89 100 95 92 86 62 42 |
| fleas | CA | Sep | Feb | 2.4x | May-Dec | -5% | 47 42 44 47 54 63 82 97 100 94 75 54 |
| mice | US | Oct | Jul | 1.4x | all year | +43% | 82 83 88 87 86 74 73 74 89 100 92 83 |
| mice | CA | Oct | Jun | 1.4x | all year | +31% | 81 76 78 76 80 72 75 81 93 100 94 84 |
| get rid of mice | US | Feb | Mar | 1.4x | all year | +70% | 80 100 70 73 79 96 85 85 91 87 89 86 |
| get rid of mice | CA | Aug | Mar | 1.7x | all year | +50% | 77 96 59 67 70 87 86 100 98 89 95 79 |
| cockroach | US | Jul | Dec | 2x | all year | +38% | 51 52 57 68 82 99 100 92 81 76 61 51 |
| cockroach | CA | Jul | Apr | 1.6x | all year | +33% | 67 62 62 61 74 81 100 99 93 92 75 66 |
| ants | US | Jun | Dec | 3.8x | Apr-Sep | +24% | 29 35 49 76 96 100 95 80 62 47 32 26 |
| ants | CA | Jun | Dec | 4.8x | Apr-Aug | +19% | 24 28 33 56 97 100 84 55 37 27 22 21 |
| wasps | US | Aug | Jan | 7.3x | Apr-Sep | +35% | 14 18 38 62 61 70 99 100 66 43 25 15 |
| wasps | CA | Aug | Dec | 18.3x | Jul-Sep | +21% | 6 6 8 14 27 28 53 100 77 21 8 6 |
| fruit flies | US | Sep | Mar | 3.5x | May-Nov | +38% | 29 34 29 39 53 78 87 88 100 85 57 35 |
| fruit flies | CA | Sep | Apr | 10x | Jul-Oct | +14% | 19 17 11 10 11 21 52 93 100 71 41 24 |
| bug bites | US | Jul | Jan | 3.8x | May-Sep | -4% | 26 26 34 41 59 91 100 90 68 50 35 28 |
| bug bites | CA | Jul | Feb | 3.6x | May-Sep | +1% | 29 28 30 36 60 81 100 86 60 48 35 28 |
| mosquito repellent | US | Jun | Jan | 12.1x | May-Aug | +34% | 8 12 21 43 77 100 86 59 43 26 12 9 |
| mosquito repellent | CA | Jul | Dec | 17.6x | May-Jul | +19% | 7 7 9 15 60 85 100 42 16 7 6 6 |
| mouse trap | US | Nov | Jul | 1.5x | all year | +3% | 84 70 69 74 76 69 68 78 85 95 100 95 |
| mouse trap | CA | Nov | Jun | 1.7x | all year | -6% | 78 61 61 62 65 58 63 79 88 94 100 90 |

Notes on the table:
- "mice" is polluted: woolly-mammoth mice news (week of Mar 2, 2025 = 100), gaming mice ("razer basilisk v3") and "Of Mice and Men". "get rid of mice" is cleaner in meaning but small and jumpy (single-week highs Jun 21, 2026 US and Feb 15, 2026 CA). For the pest season, "mouse trap" (Oct-Nov peak) is the best guide.
- "mouse trap" also carries a film spike: "Mickey's Mouse Trap" horror film, week of Dec 31, 2023 = 100 in both countries.
- "bed bugs": the Oct 1, 2023 week = 100 in both countries is the Paris bed bug scare; without it the curve is a gentle Jul-Aug hump.
- "mosquito" US: the Sep 4, 2022 week = 100 is California's Mosquito Fire (a wildfire), which lifts the US September average.
- "ticks", "cockroach": the 2026 highs (May 2026 = 100) line up with news ("bill gates ticks", "funding ticks"; "cockroach janata party"), so part of their 5-year growth is news.

**Weekly high each year** (week starting; 0-100 scale of that term and country):

- mosquito (US): Sep 4 2022 = 100; May 28 2023 = 78; Aug 25 2024 = 89; Jul 6 2025 = 94; Jun 7 2026 = 95
- mosquito (CA): Jul 10 2022 = 76; May 28 2023 = 66; Jul 14 2024 = 55; Jun 29 2025 = 54; Jun 28 2026 = 100
- mosquito bites (US): Jul 3 2022 = 83; Jul 2 2023 = 100; Jul 7 2024 = 83; Jul 6 2025 = 99; Jul 5 2026 = 70
- mosquito bites (CA): Jul 10 2022 = 100; Jul 2 2023 = 73; Jul 14 2024 = 67; Jul 6 2025 = 61; Jun 28 2026 = 74
- ticks (US): May 29 2022 = 46; May 14 2023 = 48; May 19 2024 = 45; May 11 2025 = 50; May 24 2026 = 100
- ticks (CA): May 22 2022 = 45; May 21 2023 = 48; May 26 2024 = 43; Jun 1 2025 = 42; May 17 2026 = 100
- tick bite (US): May 29 2022 = 66; May 28 2023 = 66; May 26 2024 = 66; Jun 1 2025 = 70; May 24 2026 = 100
- tick bite (CA): May 29 2022 = 64; Jul 2 2023 = 82; May 19 2024 = 72; Jun 29 2025 = 74; May 17 2026 = 100
- spider bite (US): Jul 3 2022 = 91; Jul 2 2023 = 100; May 26 2024 = 92; Jul 6 2025 = 95; Aug 9 2026 = 72
- spider bite (CA): Jul 31 2022 = 98; Jul 2 2023 = 94; Jul 7 2024 = 90; Jul 6 2025 = 100; Aug 2 2026 = 83
- bed bugs (US): Jul 17 2022 = 62; Oct 1 2023 = 100; Jul 7 2024 = 58; Jul 13 2025 = 64; Jul 5 2026 = 61
- bed bugs (CA): Aug 28 2022 = 42; Oct 1 2023 = 100; Aug 25 2024 = 46; Aug 10 2025 = 45; Jul 5 2026 = 38
- fleas (US): Aug 7 2022 = 88; Jul 9 2023 = 96; Sep 1 2024 = 93; Jul 6 2025 = 98; Jul 5 2026 = 100
- fleas (CA): Aug 28 2022 = 93; Sep 10 2023 = 87; Sep 1 2024 = 100; Sep 7 2025 = 95; Jul 26 2026 = 73
- mice (US): Oct 16 2022 = 53; Oct 22 2023 = 51; Nov 17 2024 = 55; Mar 2 2025 = 100; May 3 2026 = 73
- mice (CA): Oct 16 2022 = 77; Nov 26 2023 = 74; Oct 20 2024 = 76; Mar 2 2025 = 100; May 3 2026 = 92
- get rid of mice (US): Oct 9 2022 = 33; Oct 15 2023 = 29; Oct 20 2024 = 30; Jul 13 2025 = 35; Jun 21 2026 = 100
- get rid of mice (CA): Oct 30 2022 = 49; Nov 5 2023 = 43; Nov 10 2024 = 39; Dec 7 2025 = 51; Feb 15 2026 = 100
- cockroach (US): Jun 12 2022 = 61; Aug 20 2023 = 100; Jun 23 2024 = 64; Jul 27 2025 = 71; May 17 2026 = 100
- cockroach (CA): Aug 21 2022 = 49; Aug 20 2023 = 70; Jul 28 2024 = 49; Aug 3 2025 = 55; May 17 2026 = 100
- ants (US): May 29 2022 = 89; Jul 2 2023 = 80; May 19 2024 = 85; Jun 8 2025 = 90; May 24 2026 = 100
- ants (CA): May 29 2022 = 84; May 28 2023 = 100; May 19 2024 = 92; May 11 2025 = 87; May 24 2026 = 99
- wasps (US): May 8 2022 = 64; Jul 30 2023 = 86; Jul 7 2024 = 69; Aug 3 2025 = 100; Jul 26 2026 = 82
- wasps (CA): Aug 28 2022 = 54; Aug 27 2023 = 58; Sep 1 2024 = 100; Aug 31 2025 = 50; Sep 6 2026 = 51
- fruit flies (US): Sep 18 2022 = 72; Jul 9 2023 = 73; Sep 29 2024 = 76; Sep 21 2025 = 73; Sep 13 2026 = 100
- fruit flies (CA): Sep 11 2022 = 86; Sep 24 2023 = 88; Sep 22 2024 = 66; Sep 28 2025 = 80; Aug 30 2026 = 100
- bug bites (US): Jul 3 2022 = 89; Jul 2 2023 = 100; Jul 7 2024 = 85; Jul 6 2025 = 96; Jul 5 2026 = 79
- bug bites (CA): Jul 3 2022 = 91; Jul 2 2023 = 95; Jul 7 2024 = 98; Jun 29 2025 = 100; Jul 5 2026 = 90
- mosquito repellent (US): Jun 5 2022 = 79; May 28 2023 = 96; Jun 30 2024 = 89; Jun 29 2025 = 92; Jun 7 2026 = 100
- mosquito repellent (CA): Jul 10 2022 = 83; May 28 2023 = 81; Jul 14 2024 = 56; Jun 29 2025 = 49; Jun 28 2026 = 100
- mouse trap (US): Nov 13 2022 = 73; Dec 31 2023 = 100; Oct 6 2024 = 75; Nov 30 2025 = 88; Apr 12 2026 = 73
- mouse trap (CA): Nov 6 2022 = 90; Dec 31 2023 = 100; Aug 4 2024 = 86; Nov 30 2025 = 89; Sep 6 2026 = 73

## Rising related queries (5-year window, first 10 of "Rising")

"Breakout" means growth above 5,000%. Obvious noise is in [brackets].

**mosquito (US):** mosquito fire update (Breakout); mosquito fire map (Breakout); mosquito fire containment (Breakout); stem mosquito repellent (Breakout); mosquito fire 2022 (Breakout); mosquito bucket of doom (+4,300%); massachusetts deadly mosquito virus (+3,100%); photon matrix mosquito killer (+2,800%); the mosquito bowl (+1,850%); thermacell rechargeable mosquito repeller (+1,500%)

**mosquito (CA):** niagara region asian tiger mosquito (Breakout); deadly mosquito virus massachusetts (Breakout); mozz guard mosquito zapper (Breakout); mosquito virus massachusetts (Breakout); a mosquito in the ear (+3,450%); [a long copy-pasted research-ethics exam question about mosquito nets (+3,150%)]; the mosquito bowl (+2,400%); thermacell rechargeable mosquito repeller (+650%); mosquito hero (+550%); mosquito bowl (+350%)

**mosquito bites (US):** monkeypox (Breakout); monkeypox symptoms (Breakout); monkey pox (Breakout); how many mosquito bites is dangerous (+1,100%); itchy bumps on skin like mosquito bites but aren't (+350%); acute urticaria (+350%); mosquito dunks (+200%); when to worry about a mosquito bite (+200%); why do my mosquito bites get so big (+170%); papular urticaria (+160%)

**mosquito bites (CA):** monkeypox (Breakout); acute urticaria (Breakout); do pimple patches work on mosquito bites (Breakout); why do mosquitoes need blood (Breakout); how many mosquito bites is dangerous (+2,250%); itchy bumps on skin like mosquito bites but aren't (+300%); urticaria (+300%); why do my mosquito bites bruise (+250%); why do my mosquito bites swell so much (+250%); how to fix mosquito bites (+200%)

**ticks (US):** bill gates ticks (Breakout); alpha gal syndrome (+3,400%); funding ticks (+3,100%); boxes of ticks (+2,350%); alpha gal (+1,000%); simparica trio (+650%); do all lone star ticks carry alpha gal (+600%); does simparica trio kill ticks (+550%); lonestar ticks (+550%); where are lone star ticks found (+300%)

**ticks (CA):** alpha gal syndrome (Breakout); bill gates ticks (+4,600%); funding ticks (+2,150%); why are ticks getting worse (+800%); are lone star ticks in canada (+800%); lonestar ticks (+600%); worst areas for ticks in ontario (+500%); etick (+450%); what kills ticks on dogs instantly (+450%); anaplasmosis ticks (+400%)

**tick bite (US):** alpha-gal syndrome (+1,450%); alpha gal syndrome (+1,200%); lyme disease tick bite day 1 (+800%); alpha gal symptoms (+500%); tick bite unspecified site icd-10 (+450%); alpha gal tick bite (+450%); alpha gal (+450%); tick bite day 1 (+400%); bug bite identifier (+250%); tick bite mark (+250%)

**tick bite (CA):** alpha gal syndrome (Breakout); lyme disease tick bite day 1 (Breakout); what to put on a tick bite after removal (Breakout); what does a tick bite look like after a week (+1,150%); tick bite day 1 (+600%); when to worry about a tick bite (+550%); etick (+500%); doxycycline dose for tick bite (+400%); doxycycline side effects (+400%); anaplasmosis (+300%)

**spider bite (US):** monkeypox (Breakout); taylor momsen hospitalized spider bite (Breakout); joro spider bite (+500%); joro spider (+500%); sydney funnel-web spider bite (+400%); sydney funnel-web spider (+400%); can jumping spiders bite (+300%); bug bite identifier (+300%); do jumping spiders bite (+250%); tick bite mark (+180%)

**spider bite (CA):** joro spider (Breakout); anne hathaway spider bite (Breakout); skeeter syndrome (Breakout); sydney sweeney spider bite (Breakout); joro spider bite (+1,300%); sydney funnel-web spider (+400%); sydney funnel-web spider bite (+350%); can a daddy long legs bite kill you (+300%); monkeypox (+300%); spider bite images (+300%)

**bed bugs (US):** fulton county jail bed bugs (Breakout); man eaten alive by bed bugs (Breakout); hotels in vegas with bed bugs (+3,050%); why do i get itchy when i lay in bed but no bugs (+2,500%); paris bed bugs (+2,200%); paris france bed bugs (+2,150%); bed bugs in paris (+1,500%); las vegas hotels bed bugs (+950%); no signs of bed bugs but i have bites (+800%); bed bugs in vegas (+500%)

**bed bugs (CA):** worst city in canada for bed bugs (Breakout); [benedict cumberbatch sam elliott (+3,500%)]; close up pictures of bed bug bites (+3,250%); paris france bed bugs (+3,050%); bed bugs paris (+1,650%); bed bugs in las vegas strip hotels (+1,450%); bed bugs france (+1,450%); bed bugs in paris (+1,000%); no signs of bed bugs but i have bites (+750%); why do i get itchy when i lay in bed but no bugs (+700%)

**fleas (US):** [dog man twenty thousand fleas under the sea (+5,000%)]; how to get rid of fleas in the house fast naturally (+1,400%); simparica trio (+900%); sand fleas bites on humans (+450%); revolution plus for cats (+250%); what home remedy will kill fleas on my dog (+250%); what kills fleas instantly (+250%); nitenpyram (+140%); how to get rid of fleas in the house fast (+140%); what kills fleas on dogs instantly (+140%)

**fleas (CA):** [fleas silksong (Breakout); dog man twenty thousand fleas (Breakout); twenty thousand fleas under the sea (Breakout); all fleas silksong (+2,850%)]; simparica trio (+700%); how to get rid of fleas in the house fast naturally (+700%); sand fleas edible (+250%); sand fleas bites on humans (+250%); how to get rid of fleas in the house fast (+200%); how small are fleas (+150%)

**mice (US):** vamoose mice (Breakout); vamoose for mice (Breakout); [transgender mice (Breakout); woolly mice (Breakout); muscle mice demon slayer (+4,750%)]; how to get rid of mice humanely (+3,900%); [wooly mice (+3,000%); woolly mammoth mice (+2,250%); wolly mice (+1,700%); demon slayer mice (+1,650%)]

**mice (CA):** [doritos dye mice (Breakout); muscle mice demon slayer (+4,600%); razer basilisk v3 (+4,350%); transgender mice (+4,200%)]; how to get rid of mice humanely (+2,950%); [woolly mice (+2,900%); the best laid plans of mice and men poem (+2,450%)]; vamoose for mice (+1,600%); [wooly mice (+1,500%); transparent mice (+500%)]

**get rid of mice (US):** zinc phosphide (Breakout); vamoose for mice (Breakout); how to get rid of mice in garage mgapgarage (Breakout); does vamoose really work to get rid of mice (Breakout); how to humanely get rid of mice (+4,550%); how to get rid of field mice permanently (+3,550%); how to get rid of mice in walls fast (+350%); how to get rid of mice quick (+200%); how do i get rid of mice in my home (+200%); how to get rid of mice permanently (+170%)

**get rid of mice (CA, only 8 listed):** how to get rid of field mice permanently (Breakout); how to get rid of mice in walls fast (Breakout); how long do mice live (Breakout); what smells do mice hate (Breakout); how to humanely get rid of mice (+3,250%); how to get rid of mice with vinegar (+700%); best way to get rid of mice in your house (+550%); how do i get rid of mice (+50%)

**cockroach (US):** [cockroach janata party (Breakout); cockroach janta party (Breakout)]; largest cockroach scientific name (Breakout); scientific name of largest cockroach (Breakout); [can a cockroach live in your penis (Breakout)]; scientific name for largest cockroach (Breakout); scientific name of the largest cockroach (Breakout); wyandotte michigan cockroach infestation (+3,900%); [cockroach met gala (+1,700%)]; how to hold a cockroach (+1,150%)

**cockroach (CA):** [cockroach janata party (Breakout)]; largest cockroach name (Breakout); [cockroach janta party (Breakout)]; scientific name of largest cockroach (Breakout); how to hold a cockroach (Breakout); scientific name of the largest cockroach (Breakout); [cockroach met gala (Breakout)]; scientific name for largest cockroach (Breakout); toronto zoo name a cockroach (Breakout); largest cockroach scientific name (Breakout)

**ants (US):** [fyre ants (Breakout); ants from up there (+2,350%)]; why do flying ants suddenly appear (+1,000%); ants running in circles (+950%); how to get rid of ants in the house quickly (+800%); how to get rid of ants permanently inside (+750%); asian needle ants (+550%); ants face close up (+450%); [idle ants (+350%)]; ants up close (+300%)

**ants (CA):** ants running in circles (Breakout); [south korea michelin ants (+4,500%); ants from up there (+3,450%)]; close up of ants face (+2,500%); [south korea ants (+1,800%)]; why do flying ants suddenly appear (+1,300%); how to get rid of ants in the house quickly (+1,050%); close up of an ants face (+1,050%); can you vacuum ants (+900%); [idle ants (+600%)]

**wasps (US):** radioactive wasps (Breakout); do wasps have photographic memory (+4,000%); does gasoline kill wasps (+1,050%); what will kill wasps instantly (+450%); are yellowjackets wasps (+450%); do wasps remember faces (+400%); are cicada killer wasps dangerous (+350%); are yellow jackets bees or wasps (+250%); can wasps fly at night (+200%); are paper wasps aggressive (+170%)

**wasps (CA):** what will kill wasps instantly (Breakout); [lisbon portugal earthquake today (Breakout); jesus shroud of turin (+4,150%); obituary randy snow (+4,050%); dog walkers banned (+3,400%)]; radioactive wasps (+2,150%); does gasoline kill wasps (+1,000%); what would happen if wasps went extinct (+550%); can wasps fly at night (+550%); do wasps remember faces (+500%)

**fruit flies (US):** does zevo work on fruit flies (+4,700%); small black flying bugs in house not fruit flies how to get rid of them (+3,500%); how to get rid of fruit flies in 2 minutes (+2,800%); zevo flying insect trap (+2,250%); how do you get rid of fruit flies in 5 minutes (+1,550%); [genetics homework questions: sex-linked inheritance (+1,100%), thomas hunt morgan (+800%), alleles (+800%)]; zevo (+950%); how to get rid of fruit flies in kitchen (+700%)

**fruit flies (CA):** how do you get rid of fruit flies in 5 minutes (Breakout); how to remove fruit flies from kitchen (Breakout); how to get rid of fruit flies in 2 minutes (+3,750%); how to get rid of fruit flies indoors (+950%); how to catch fruit flies fast (+600%); how to get rid of fruit flies in kitchen (+550%); how do fruit flies just appear (+550%); homemade fruit fly trap without apple cider vinegar (+550%); how to remove fruit flies from home (+450%); get rid of fruit flies in kitchen (+450%)

**bug bites (US):** monkey pox (Breakout); monkeypox (Breakout); monkeypox symptoms (Breakout); close up pictures of bed bug bites (+2,300%); no signs of bed bugs but i have bites (+800%); noseeums bug bites (+450%); types of bug bites chart (+450%); itchy bumps on skin like mosquito bites but aren't (+300%); bug bite identifier (+250%); stop bug bites itching in seconds (+250%)

**bug bites (CA):** monkeypox (+1,950%); close up pictures of bed bug bites (+1,600%); noseeums bug bites (+600%); stop bug bites itching in seconds (+500%); types of bug bites chart (+400%); no signs of bed bugs but i have bites (+350%); papular urticaria (+300%); how long does it take for bed bug bites to show up (+250%); [fluval bug bites (+200%), an aquarium fish food]; when do bed bug bites show up (+190%)

**mosquito repellent (US):** murphy's mosquito and tick repellent (Breakout); stem mosquito repellent (Breakout); kinfield mosquito repellent (Breakout); buzzkill mosquito repellent (Breakout); stem mosquito repellent reviews (Breakout); zevo mosquito repellent (+1,550%); hello bello mosquito repellent (+900%); hello bello mosquito repellent reviews (+700%); mosquito repellent bracelet does it work (+700%); vanilla extract mosquito repellent (+650%)

**mosquito repellent (CA):** thermacell e90 (Breakout); flextail mosquito repellent (Breakout); mosquito repellent stickers for adults (Breakout); homemade mosquito repellent for skin (Breakout); vanilla extract mosquito repellent (+1,900%); thermacell e90 rechargeable mosquito repellent (+850%); vanilla mosquito repellent (+750%); mosquito repellent for large areas (+700%); buzz patch mosquito repellent stickers (+550%); mosquito repellent spray for body (+450%)

**mouse trap (US):** [the mouse trap 2024 (Breakout); winnie the pooh blood and honey (Breakout); mickey's mouse trap (Breakout); mickey mouse horror movie (Breakout)]; is mouse trap news fake (Breakout); [an insurance homework question (+4,500%); mickeys mouse trap (+4,350%); mickey's mouse trap release date (+3,800%); mickey mouse trap movie (+3,550%); mouse trap movie 1997 (+1,450%)]

**mouse trap (CA):** [mickey's mouse trap (Breakout)]; owltra mouse trap (Breakout); [mouse trap kdrama (Breakout); mickey mouse horror movie (Breakout); mickey's mouse trap release date (Breakout); the mouse trap 2024 (+4,850%); mickey mouse trap movie (+1,500%); the mouse trap vernon (+850%)]; tomcat mouse trap how to set (+550%); dizzy dunker mouse trap (+500%)
