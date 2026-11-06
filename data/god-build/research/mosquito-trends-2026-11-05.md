# Mosquito search demand: Google Trends + Google autocomplete (outside view)

Collected Thursday Nov 5, 2026, 21:23-21:37 UTC (16:23-16:37 Toronto), for buzzskito.ca page planning.
Sources: Google Trends (classic Explore, built-in browser, read-only, no sign-in, no downloads; the cookie notice offered only "OK, got it", so it was left unclicked) and Google's public autocomplete endpoint (node script). No paid tools, no Amazon pages.

Files next to this note:
- `raw-trends/v01..v08-*.json`: the weekly Trends values exactly as served (one file per view), plus the US 5-year related queries in `v01`.
- `trends-monthly.json`, `trends-tables.md`: monthly means and ratios computed from them.
- `raw-suggest/suggest-raw.json` (+ `suggest-log.jsonl`): every autocomplete request and answer.
- `suggest-grouped.md` / `.json`: the grouping below.
- Scripts (separate folder): `scripts/fetch-suggest.mjs`, `scripts/analyze-trends.mjs`, `scripts/classify-suggest.mjs`.

---

## 0. What I could NOT get, and why

**Google Trends cut the session off at the 9th view.** Every Trends data request in this session carried `userConfig.userType = "USER_TYPE_SCRAPER"` (Google's own label, inside the request), i.e. Google's reCAPTCHA scoring classed the built-in browser as automated from the first page. Views 1-8 were still served normally (HTTP 200). View 9 (`mosquito spray`, US, 5 years) got **HTTP 429** on the chart data, and the page showed "Oops! Something went wrong. Please try again in a bit." and "Could not connect to the reCAPTCHA service. Please check your internet connection and reload to get a reCAPTCHA challenge." Per the brief, I stopped the Trends source there and did not retry or work around it.

Missing as a result (exact URLs, for someone to open by hand in a normal browser):

| item | URL | status |
|---|---|---|
| 1. "mosquito spray" seasonality, US | https://trends.google.com/trends/explore?date=today%205-y&geo=US&q=mosquito%20spray&hl=en-US | 429 + reCAPTCHA, no data |
| 1. "mosquito spray" seasonality, CA | https://trends.google.com/trends/explore?date=today%205-y&geo=CA&q=mosquito%20spray&hl=en-US | not attempted (stopped) |
| 2. pest comparison, US 5y | https://trends.google.com/trends/explore?date=today%205-y&geo=US&q=mosquito,tick,bed%20bugs,cockroach,mice&hl=en-US | not attempted (stopped) |
| 3. related queries "mosquito", US 12m | https://trends.google.com/trends/explore?date=today%2012-m&geo=US&q=mosquito&hl=en-US | not attempted (stopped) |
| 3. related queries "mosquito", CA 12m | https://trends.google.com/trends/explore?date=today%2012-m&geo=CA&q=mosquito&hl=en-US | not attempted (stopped) |
| 3. related queries "mosquito bites", US 12m | https://trends.google.com/trends/explore?date=today%2012-m&geo=US&q=mosquito%20bites&hl=en-US | not attempted (stopped) |

Partial substitute for item 3: the **5-year** US related queries for "mosquito" came with view 1 (section 3 below). The related-topics widget on that page came back empty.

Autocomplete worked completely: 80 of 80 requests answered, no block, no CAPTCHA.

---

## 1. Seasonality (Google Trends, past 5 years, weekly)

### Views read

All with `date=today 5-y` (Trends request window "2021-11-05 2026-11-05"), weekly points from the week of Oct 31, 2021 to the partial week of Nov 1-7, 2026 (dropped). Data taken from the page's own `widgetdata/multiline` response (read from the browser cache, no extra request).

| view | URL | captured (UTC) | geo | term |
|---|---|---|---|---|
| v01 | https://trends.google.com/trends/explore?date=today%205-y&geo=US&q=mosquito&hl=en-US | 21:25:30 | US | mosquito |
| v02 | https://trends.google.com/trends/explore?date=today%205-y&geo=CA&q=mosquito&hl=en-US | 21:26:50 | CA | mosquito |
| v03 | https://trends.google.com/trends/explore?date=today%205-y&geo=US&q=mosquito%20bites&hl=en-US | 21:28:55 | US | mosquito bites |
| v04 | https://trends.google.com/trends/explore?date=today%205-y&geo=CA&q=mosquito%20bites&hl=en-US | 21:29:52 | CA | mosquito bites |
| v05 | https://trends.google.com/trends/explore?date=today%205-y&geo=US&q=mosquito%20repellent&hl=en-US | 21:30:49 | US | mosquito repellent |
| v06 | https://trends.google.com/trends/explore?date=today%205-y&geo=CA&q=mosquito%20repellent&hl=en-US | 21:33:11 | CA | mosquito repellent |
| v07 | https://trends.google.com/trends/explore?date=today%205-y&geo=US&q=mosquito%20larvae&hl=en-US | 21:34:04 | US | mosquito larvae |
| v08 | https://trends.google.com/trends/explore?date=today%205-y&geo=CA&q=mosquito%20larvae&hl=en-US | 21:35:00 | CA | mosquito larvae |
| v09 | https://trends.google.com/trends/explore?date=today%205-y&geo=US&q=mosquito%20spray&hl=en-US | ~21:36 | US | mosquito spray: **429, stopped** |

**How the ratios were computed.** Each view is scaled so its own highest week = 100, so a value is only comparable within its own view (US "mosquito" 50 is not CA "mosquito" 50). Each week goes to the month containing its midpoint; monthly means over the 60 complete months Nov 2021-Oct 2026 (5 of each calendar month); then the 5 Januaries are averaged, etc. "Low % of peak" = lowest month / highest month of that 5-year average profile. Weeks Google marks "no data" (below its reporting threshold) count as 0, as Trends plots them.

### Summary (5-year average month profile)

| term | geo | peak month | low month | low as % of peak | Jan as % of Jul | Dec-Feb as % of Jun-Aug | Nov-Mar share of a year's interest | Oct-Nov avg as % of peak |
|---|---|---|---|---:|---:|---:|---:|---:|
| mosquito | US | Jun (70.1; Jul 68.1) | Dec (12.5) | 18% | 19% | 21% | 18% | 35% |
| mosquito | CA | Jul (57.1) | Dec (7.2) | 13% | 13% | 16% | 16% | 15% |
| mosquito bites | US | Jul (70.5) | Jan (5.4) | 8% | 8% | 9% | 11% | 27% |
| mosquito bites | CA | Jul (63.0) | Feb (2.3) | 4% | 4% | 5% | 7% | 6% |
| mosquito repellent | US | Jun (76.5) | Jan (6.3) | 8% | 10% | 12% | 13% | 19% |
| mosquito repellent | CA | Jul (50.8) | Dec (2.9) | 6% | 6% | 8% | 10% | 6% |
| mosquito larvae | US | Jul (78.9) | Dec (12.1) | 15% | 18% | 20% | 18% | 30% |
| mosquito larvae | CA | Jul (49.4) | Dec-Feb: below Google's threshold (0) | ~0% | ~0% | ~0% | 2% | 4% |
| mosquito spray | US, CA | not obtained (see section 0) | | | | | | |

**Which search types hold up best in winter** (Dec-Feb as % of Jun-Aug):
- US: "mosquito" 21% ≈ "mosquito larvae" 20% > "mosquito repellent" 12% > "mosquito bites" 9%.
- Canada: "mosquito" 16% > "mosquito repellent" 8% > "mosquito bites" 5% > "mosquito larvae" ~0% (176 of 261 weeks had no data; too small in Canada to measure off-season).
- Canada is much more seasonal than the US for every term: its season is roughly May-September with a sharp July peak; the US season is wider (rises from March, peaks June-July, still at 46% of the peak month in October; Canada 16%).
- The head term's winter floor is partly non-pest meanings (below). "mosquito larvae" (US) has no such noise and still keeps about a fifth of its summer level, the most winter-resilient pest-intent term measured.

### Stability: the same ratio year by year (lowest month as % of that calendar year's peak month)

| term | geo | 2022 | 2023 | 2024 | 2025 | 2026 (Jan-Oct) |
|---|---|---:|---:|---:|---:|---:|
| mosquito | US | 14% (peak Sep: Mosquito Fire) | 18% | 17% | 15% | 20% |
| mosquito | CA | 8% | 14% | 13% | 14% | 13% |
| mosquito bites | US | 7% | 6% | 8% | 7% | 10% |
| mosquito bites | CA | 2% | 4% | 5% | 4% | 4% |
| mosquito repellent | US | 7% | 9% | 8% | 9% | 9% |
| mosquito repellent | CA | 1% | 6% | 5% | 9% | 4% |
| mosquito larvae | US | 12% | 14% | 14% | 16% | 25% |
| mosquito larvae | CA | 0% | 0% | 0% | 0% | 0% |

### Monthly means by year (each view on its own 0-100 scale)

| view | year | Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| US mosquito | 2022 | 10.8 | 12 | 18.8 | 27.5 | 42.3 | 63 | 60.8 | 54 | 75.3 | 26.5 | 17.4 | 13 |
| | 2023 | 13.5 | 14.3 | 21.2 | 31.8 | 54.6 | 65.8 | 67.8 | 50.8 | 49.8 | 31 | 15.4 | 12 |
| | 2024 | 11.6 | 16.8 | 25.5 | 32.3 | 56.6 | 67.8 | 66.4 | 63.3 | 43 | 26.4 | 14.8 | 11.3 |
| | 2025 | 11.6 | 14.8 | 21.3 | 31.8 | 47.8 | 67.5 | 76.8 | 57 | 46 | 33.6 | 22.3 | 15.6 |
| | 2026 | 17.3 | 22.5 | 32.5 | 51.4 | 66.5 | 86.3 | 69 | 62.3 | 51.8 | 43 | | |
| CA mosquito | 2022 | 5.5 | 6.8 | 7.8 | 11.3 | 27.8 | 48.6 | 67.8 | 34 | 14 | 8.3 | 7.8 | 7.5 |
| | 2023 | 8.8 | 7 | 7.8 | 12 | 38.4 | 44.3 | 48.5 | 32.2 | 16.8 | 9 | 7 | 8 |
| | 2024 | 7.4 | 7.5 | 9.5 | 12.3 | 31.4 | 40.8 | 50.6 | 33.3 | 18.8 | 9 | 6.8 | 6.5 |
| | 2025 | 6.8 | 6.8 | 8.3 | 10.6 | 27.5 | 38.8 | 47.8 | 33.8 | 15.8 | 9.8 | 9.3 | 8.8 |
| | 2026 | 9.5 | 10 | 9.8 | 14.4 | 30.5 | 62 | 71 | 39.8 | 20.4 | 10.3 | | |
| US mosquito bites | 2022 | 5 | 5.5 | 7.4 | 11.5 | 24.5 | 55.4 | 66 | 69.2 | 50.5 | 24.3 | 9.6 | 5.5 |
| | 2023 | 5 | 5.5 | 7.4 | 12 | 33 | 57.5 | 80.3 | 61 | 53.3 | 31.3 | 11.4 | 7 |
| | 2024 | 5.4 | 6 | 9.5 | 13.5 | 37 | 60 | 68.8 | 58.5 | 42 | 22.4 | 9.8 | 6 |
| | 2025 | 5.2 | 5.8 | 7.5 | 14.4 | 32 | 57.8 | 74.8 | 59.3 | 44 | 29.8 | 14 | 7.4 |
| | 2026 | 6.5 | 6.3 | 13 | 19 | 33 | 53.3 | 62.4 | 63 | 44.8 | 28 | | |
| CA mosquito bites | 2022 | 1.3 | 1.8 | 2.6 | 3 | 14.8 | 40.8 | 82.3 | 41.2 | 12.3 | 4.3 | 2.6 | 1.8 |
| | 2023 | 2.5 | 2.3 | 2.2 | 5 | 25.2 | 39.5 | 58.8 | 39.8 | 16.5 | 6.3 | 3 | 2.8 |
| | 2024 | 2.8 | 3 | 4 | 4.5 | 17 | 34.8 | 60.4 | 37.3 | 18.5 | 5.8 | 3 | 3.3 |
| | 2025 | 2.8 | 2 | 3 | 4 | 14.5 | 31.3 | 52.6 | 39.3 | 13 | 6.4 | 3.8 | 3 |
| | 2026 | 2.5 | 2.5 | 3 | 3.8 | 13.8 | 46.3 | 61 | 38.8 | 17.2 | 4.3 | | |
| US mosquito repellent | 2022 | 4.8 | 6 | 12.6 | 22.8 | 42.5 | 64.8 | 52.3 | 43 | 34.8 | 16.8 | 7.8 | 6.3 |
| | 2023 | 6.3 | 7 | 13.4 | 28.8 | 62.6 | 72.5 | 67.5 | 42.8 | 38.8 | 22.3 | 8.2 | 6.5 |
| | 2024 | 6 | 8.8 | 16.3 | 27.3 | 62.6 | 80.5 | 68.6 | 51 | 29.8 | 16.8 | 8.3 | 6 |
| | 2025 | 6.2 | 8.5 | 14.5 | 28.2 | 49.5 | 72 | 70 | 43.5 | 29.3 | 22 | 13.8 | 8.2 |
| | 2026 | 8.3 | 12.8 | 25 | 52 | 70.3 | 92.8 | 58.6 | 42 | 30.4 | 19.8 | | |
| CA mosquito repellent | 2022 | 0.5 | 3 | 3.8 | 6.8 | 25.3 | 46.6 | 59.8 | 18.8 | 5.8 | 2.3 | 3 | 3 |
| | 2023 | 3.5 | 3 | 3.8 | 7.5 | 40.2 | 42.5 | 42.8 | 22.2 | 9 | 3.3 | 3.2 | 2.8 |
| | 2024 | 3.6 | 2.8 | 5.3 | 8 | 32.8 | 40.8 | 46.6 | 20 | 10 | 3.2 | 2.3 | 3.3 |
| | 2025 | 4 | 3.3 | 4.8 | 7.8 | 27 | 34.3 | 38.2 | 24 | 8 | 4.2 | 5 | 4.2 |
| | 2026 | 3.8 | 5.5 | 6.3 | 10.4 | 24.3 | 50.8 | 66.6 | 21.8 | 7.6 | 2.8 | | |
| US mosquito larvae | 2022 | 11.5 | 12.3 | 18.2 | 33 | 50.8 | 64.6 | 74.5 | 65.6 | 49.3 | 29.3 | 14.2 | 9 |
| | 2023 | 11.8 | 11.8 | 21.6 | 34.8 | 52.8 | 69.8 | 82.5 | 64.4 | 48.8 | 31.3 | 17.8 | 13.8 |
| | 2024 | 13 | 16.8 | 27 | 41.5 | 67.2 | 73.5 | 79.6 | 64.8 | 44.3 | 27 | 15.8 | 10.8 |
| | 2025 | 12.4 | 14 | 21.5 | 33.8 | 60 | 80 | 79.8 | 59 | 46 | 32 | 22.3 | 16.8 |
| | 2026 | 22.5 | 30.8 | 34.5 | 53.6 | 70.3 | 91 | 78.2 | 66.5 | 48.2 | 30.8 | | |
| CA mosquito larvae | 2022 | 0 | 0 | 0 | 6 | 36.3 | 47 | 46 | 46.8 | 11 | 0 | 0 | 0 |
| | 2023 | 0 | 0 | 0 | 0 | 25.8 | 54.5 | 49.8 | 42.4 | 15.3 | 9 | 7.8 | 0 |
| | 2024 | 0 | 0 | 0 | 0 | 22.4 | 34.8 | 51.6 | 35.3 | 8.8 | 0 | 0 | 0 |
| | 2025 | 0 | 0 | 0 | 6.4 | 37.8 | 32.8 | 38 | 22.8 | 21 | 0 | 0 | 0 |
| | 2026 | 0 | 0 | 9 | 9 | 21.8 | 63.5 | 61.6 | 32.5 | 0 | 2.8 | | |

(Nov-Dec 2021 omitted from this table; they are in `trends-monthly.json` and in the 5-year averages.)

### Spikes and noise worth knowing

- **US "mosquito" 5-year peak week is not mosquitoes:** Sep 4-17, 2022 (98, 100) = the Mosquito Fire, a California wildfire. The related-queries list confirms it ("mosquito fire update / map / containment", Breakout). It makes Sep 2022 the top month of 2022; without 2022, US September averages ~48, not 53.
- Other non-pest meanings in the head term (from related queries and autocomplete): The Mosquito Bowl (book/film; "is mosquito bowl on netflix"), The Mosquito Coast (series), Mosquito ultralight helicopters (XE/XEL/XET), Mosquito Girl / Mosquito Queen (One Punch Man), Mosquito Supper Club (restaurant/cookbook). They lift the head term's winter floor a little.
- Aug 25-31, 2024 (US "mosquito" 87): likely the late-August 2024 eastern equine encephalitis news in New England (my inference, not checked).
- **2026 was the biggest year of the five in both countries.** US "mosquito" Jun 2026 = 86 vs 63-68 in 2022-2025; Apr 2026 = 51 vs 28-32; Oct 2026 = 43 vs 26-34; Jan 2026 = 17 vs 11-14. Same pattern in US repellent (Apr 2026 52 vs 23-29) and US larvae (Jan-Feb 2026 23-31 vs 11-17). Canada: Jun-Jul 2026 = 62-71 vs 39-51 in 2023-2025. Either real growth or a Trends sampling shift; autocomplete also offers "mosquito outbreak 2026", "mosquito virus 2026" and "mosquito outbreak in florida". So this winter's floor may sit above the 5-year average.

---

## 2. Relative size against other pests (US, 5 years)

**Not obtained.** Trends stopped the session before this view (section 0). URL to open by hand: https://trends.google.com/trends/explore?date=today%205-y&geo=US&q=mosquito,tick,bed%20bugs,cockroach,mice&hl=en-US

Partial size signal within the mosquito family only (US, 5 years, from view 1's related queries, each relative to the biggest = 100): mosquito bites 100, mosquito repellent 70, mosquito bite 64, mosquito control 35, mosquito spray 24, mosquito net 13, mosquito trap 12, best mosquito repellent 10, mosquito larvae 8.

---

## 3. Related queries

### "mosquito", US, past **5 years** (view v01, 21:25:30 UTC; the 12-month views were not obtained)

Top (relative to the biggest = 100):

| # | query | value | # | query | value |
|---:|---|---:|---:|---|---:|
| 1 | mosquito bites | 100 | 14 | mosquito killer | 9 |
| 2 | mosquito repellent | 70 | 15 | big mosquito | 8 |
| 3 | mosquito bite | 64 | 16 | mosquito larvae | 8 |
| 4 | mosquito control | 35 | 17 | mosquito dunks | 7 |
| 5 | mosquito spray | 24 | 18 | mosquito virus | 7 |
| 6 | mosquito net | 13 | 19 | mosquito joe | 7 |
| 7 | mosquito trap | 12 | 20 | baby mosquito | 7 |
| 8 | best mosquito repellent | 10 | 21 | mosquito zapper | 7 |
| 9 | thermacell mosquito | 10 | 22 | thermacell mosquito repellent | 6 |
| 10 | mosquito fire | 10 | 23 | mosquito plant | 6 |
| 11 | mosquito coast | 10 | 24 | natural mosquito repellent | 6 |
| 12 | thermacell | 10 | 25 | mosquito bits | 6 |
| 13 | mosquito treatment | 9 | | | |

Rising (growth over the period; "Breakout" = over +5,000%):

| # | query | value | # | query | value |
|---:|---|---|---:|---|---|
| 1 | mosquito fire update | Breakout | 14 | mosquito control near me | +170% |
| 2 | mosquito fire map | Breakout | 15 | mosquito bits | +170% |
| 3 | mosquito fire containment | Breakout | 16 | mosquito spraying near me | +160% |
| 4 | the mosquito bowl | +1,800% | 17 | mosquito control services | +160% |
| 5 | mosquito tnt | +1,300% | 18 | mosquito spray for yards | +120% |
| 6 | spartan mosquito tubes | +950% | 19 | natural mosquito repellent for skin | +120% |
| 7 | mosquito fire | +650% | 20 | mosquito repellent device | +100% |
| 8 | mosquito bowl | +500% | 21 | mosquito bay puerto rico | +100% |
| 9 | mosquito dunk | +400% | 22 | thermacell mosquito | +90% |
| 10 | mosquito burger | +300% | 23 | thermacell | +80% |
| 11 | itchy bumps on skin like mosquito bites but aren't | +250% | 24 | mosquito trap outdoor | +80% |
| 12 | mosquito dunks | +200% | 25 | thermacell mosquito repellent | +80% |
| 13 | mosquito supper club | +180% | | | |

Pest-relevant rising themes: service intent ("mosquito control near me" +170%, "mosquito spraying near me" +160%, "mosquito control services" +160%, "mosquito spray for yards" +120%), Bti larvicides ("mosquito dunk(s)" +400% / +200%, "mosquito bits" +170%), devices ("spartan mosquito tubes" +950%, "mosquito tnt" +1,300%, "mosquito repellent device" +100%, Thermacell), and one bite look-alike question ("itchy bumps on skin like mosquito bites but aren't" +250%).

### "mosquito" CA 12m, "mosquito bites" US 12m, "mosquito" US 12m: **not obtained** (section 0).

---

## 4. What people actually type: Google autocomplete

**Method.** `https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl={us|ca}&q=<seed>` from node (default user agent), 80 requests 1.5 s apart, 21:23:50-21:25:55 UTC. All 80 answered (HTTP 200, 10 suggestions each). Seeds:
- 20 question stems, run with gl=us and again with gl=ca: why do mosquito, why are mosquitoes, how do mosquito, how to get rid of mosquito, when do mosquito, when is mosquito, where do mosquito, where are mosquito, what do mosquito, what are mosquito, can mosquito, can mosquitoes, do mosquito, do mosquitoes, does mosquito, does a mosquito, are mosquito, are mosquitoes, is mosquito, is a mosquito. (Singular stems on purpose: autocomplete matches prefixes, so "why do mosquito" returns both "why do mosquito bites itch" and "why do mosquitoes bite".)
- "mosquito a" ... "mosquito z" (26, US).
- mosquito bite, mosquito bites, mosquitoes in, best mosquito, mosquito vs (US).
- 9 extra US seeds to reach ~80: mosquito, mosquitoes, mosquito larvae, mosquito spray, mosquito repellent, mosquito season, mosquito control, how long do mosquito, mosquito bite on.

**Caveats.** The requests came from a Canadian connection (Mississauga). `gl=us` sets the country, but location still leaks in: the US seed "mosquitoes" returned "mosquitoes toronto". Treat the US lists as "US settings, Canadian connection". Autocomplete shows what people type, not how often: the counts below measure how many distinct phrasings a type has, not its search volume.

**Grouping.** One primary type per distinct suggestion (lower-cased), by ordered rules plus 15 hand corrections (listed in `scripts/classify-suggest.mjs`). Rule order: other, pets, disease, larvae and water, identification and look-alikes, biting behaviour, bites and reactions, timing and season, getting rid of them, products, places, biology and behaviour. So "mosquito bites on dogs" = pets, "mosquito bites vs bed bug bites" = identification and look-alikes (it's "what bit me"), "mosquito season in florida" = timing and season (with a geo tag), "mosquito control near me" = getting rid of them (service tag), "best mosquito repellent" = products. Secondary tags count overlaps.

Search types by suggestion source (distinct suggestions):
- Question seeds, US (172): biology and behaviour 71 (41%), timing and season 27 (16%), products 14, bites and reactions 13, places 12, getting rid of them 10, larvae and water 6, disease 6, pets 6, identification 5, other 2.
- Question seeds, CA (172): biology and behaviour 76 (44%), timing and season 30 (17%), products 18, bites and reactions 14, places 11, getting rid of them 9, disease 6, identification 3, larvae and water 3, pets 2.
- "mosquito + letter" seeds, US (259): products 103 (40%), other 66 (25%), getting rid of them 22, biology and behaviour 17, identification 14, bites and reactions 11, disease 9, larvae and water 9, pets 4, places 3, timing 1.
- 64 suggestions appeared only with gl=ca, e.g. "when do mosquitoes go away in ontario", "when is mosquito season (over) in ontario", "when is mosquito season in toronto / canada", "how do mosquitoes survive winter in canada", "why are mosquitoes so bad in canada", "can mosquitoes carry lyme disease", "is mosquito buzz safe", five mosquito-coil questions.
- 20 distinct suggestions are about the off-season itself (winter / cold / October / "season over" / "still out" / "die off"): "where do mosquitoes go in the winter", "how do mosquitoes survive winter (in canada)", "when do mosquitoes go away (in ontario)", "when is mosquito season over (in ontario)", "are mosquitoes still out", "is mosquito season over", "mosquitoes in october", "what do mosquitoes do in the winter"...

### Counts per search type (all 80 requests)

Requests: 80 (80 answered, 0 blocked). Raw suggestions: 800. Distinct suggestions (lower-cased): 592 (US requests 528, CA requests 172; CA-only 64).

| search type | distinct suggestions (all) | share | from US question seeds (172) | from CA question seeds (172) |
|---|---:|---:|---:|---:|
| products | 141 | 24% | 14 | 18 |
| biology and behaviour | 115 | 19% | 71 | 76 |
| other | 73 | 12% | 2 | 0 |
| timing and season | 53 | 9% | 27 | 30 |
| bites and reactions | 49 | 8% | 13 | 14 |
| getting rid of them | 46 | 8% | 10 | 9 |
| identification and look-alikes | 30 | 5% | 5 | 3 |
| places | 29 | 5% | 12 | 11 |
| larvae and water | 24 | 4% | 6 | 3 |
| disease | 19 | 3% | 6 | 6 |
| pets | 13 | 2% | 6 | 2 |
| **total** | **592** | 100% | 172 | 172 |

Secondary tags (a suggestion can carry several; counts are over all 592 distinct suggestions): geo place 34, indoors 22, yard/outdoor 30, service/near me 22, bites 79, product words 112, kids/babies 5, winter/cold/off-season 20, safety question 13.

### products (141)

best mosquito killer · best mosquito repellent · best mosquito repellent device · best mosquito repellent for kids · best mosquito repellent for patio · best mosquito repellent for skin · best mosquito repellent for yard · best mosquito spray for yard · best mosquito trap · do mosquito coils work [CA only] · does mosquito coil kill mosquitoes [CA only] · does mosquito repellent expire [US+CA] · does mosquito repellent work [US+CA] · does mosquito repellent work on fleas · does mosquito repellent work on flies · does mosquito repellent work on fruit flies [CA only] · does mosquito repellent work on ticks [US+CA] · does mosquito repellent work on wasps [CA only] · does mosquito spray expire [US+CA] · does mosquito spray kill bees · does mosquito spray work [CA only] · does mosquito tnt work · how do mosquito coils work [CA only] · how do mosquito dunks work [US+CA] · how long do mosquito dunks last · how long do mosquito dunks take to work · is mosquito coil harmful to humans [CA only] · is mosquito repellent safe [US+CA] · is mosquito spray harmful to humans [US+CA] · is mosquito spray safe · mosquito air defense · mosquito air defense system laser · mosquito and tick repellent · mosquito attractant · mosquito bits · mosquito candles · mosquito catcher · mosquito coil · mosquito curtains · mosquito dunk bucket · mosquito dunks · mosquito dunks for fungus gnats · mosquito dunks home depot · mosquito dunks how to use · mosquito eradicator · mosquito fogger · mosquito fogger for yard · mosquito fogger liquid · mosquito fogger machine · mosquito granules · mosquito grass spray · mosquito gun · mosquito hat · mosquito head net · mosquito incense · mosquito jacket · mosquito killer · mosquito killer for yard · mosquito killer indoor · mosquito killer lamp · mosquito killer machine · mosquito killer outdoor · mosquito killer spray · mosquito killing drone · mosquito killing laser · mosquito lamp · mosquito laser · mosquito laser defense system · mosquito laser killer · mosquito laser zapper · mosquito light · mosquito machine · mosquito magician · mosquito magnet · mosquito magnet patriot · mosquito magnet patriot plus · mosquito misting system · mosquito net · mosquito net for bed · mosquito net for stroller · mosquito net hat · mosquito net near me · mosquito net tent · mosquito netting fabric · mosquito netting for patio · mosquito oil · mosquito outdoor repellent · mosquito outdoor spray · mosquito patches · mosquito pellets · mosquito plant · mosquito proof clothing · mosquito repellent · mosquito repellent bracelet · mosquito repellent candle · mosquito repellent for yard · mosquito repellent machine · mosquito repellent natural · mosquito repellent plants · mosquito repellent spray · mosquito repellent stickers · mosquito spray · mosquito spray for body · mosquito spray for house · mosquito spray for kids · mosquito spray for yard · mosquito sprayer · mosquito stickers · mosquito sucker · mosquito tent · mosquito tnt · mosquito torches · mosquito trap · mosquito trap diy · mosquito trap indoor · mosquito trap outdoor · mosquito uv light · mosquito uv light trap · mosquito vacuum · mosquito venom sucker · mosquito wipes · mosquito wristbands · mosquito yard fogger · mosquito yard repellent · mosquito yard spray · mosquito yeast trap · mosquito zapper · mosquito zapper amazon · mosquito zapper home depot · mosquito zapper indoor · mosquito zapper laser · mosquito zapper outdoor · mosquito zapper outdoor solar · mosquito zapper racket · mosquito zapper walmart · mosquito zappers that work · mosquitoes repellent · what are mosquito bits [US+CA] · what are mosquito coils made of [CA only] · what are mosquito dunks [US+CA] · what are mosquito dunks made of [CA only]

### biology and behaviour (115)

are mosquitoes active at night · are mosquitoes animals [CA only] · are mosquitoes attracted to a certain blood type [US+CA] · are mosquitoes attracted to dark colors [CA only] · are mosquitoes attracted to light [US+CA] · are mosquitoes attracted to the smell of weed [US+CA] · are mosquitoes good for anything · are mosquitoes important · are mosquitoes nocturnal [US+CA] · are mosquitoes parasites [US+CA] · are mosquitoes pollinators [US+CA] · are mosquitoes useful [CA only] · can mosquitoes bite more than once [US+CA] · can mosquitoes bite through clothes [US+CA] · can mosquitoes bite through jeans [US+CA] · can mosquitoes hear [CA only] · can mosquitoes see in the dark [US+CA] · can mosquitoes smell blood [US+CA] · do mosquitoes bite · do mosquitoes bite through clothes · do mosquitoes feel pain [CA only] · do mosquitoes have a purpose · do mosquitoes have brains [CA only] · do mosquitoes like a certain blood type · do mosquitoes like certain blood types [CA only] · do mosquitoes pollinate [US+CA] · do mosquitoes serve a purpose · do mosquitoes sleep [US+CA] · does a mosquito bite more than once [US+CA] · does a mosquito bite or sting [US+CA] · does a mosquito die after biting [US+CA] · does a mosquito die after it bites you [US+CA] · does a mosquito have a brain [US+CA] · does a mosquito have a heart [US+CA] · does a mosquito have a proboscis · does a mosquito have eyes [CA only] · does a mosquito have teeth [CA only] · does a mosquito only bite once [CA only] · does mosquito have teeth [CA only] · does mosquito sleep [CA only] · how do mosquitoes bite [US+CA] · how do mosquitoes find you [US+CA] · how do mosquitoes help the environment · how do mosquitoes know where to bite [CA only] · how do mosquitoes reproduce [US+CA] · how long do mosquitoes live · how long do mosquitoes live indoors · is a mosquito a bug [US+CA] · is a mosquito a carnivore [CA only] · is a mosquito a fly [US+CA] · is a mosquito a parasite [US+CA] · is a mosquito a type of fly · is a mosquito an animal [US+CA] · is a mosquito an animal or an insect · is a mosquito an arthropod [US+CA] · is a mosquito an insect [US+CA] · is a mosquito an insect or an animal [CA only] · is a mosquito considered an animal [US+CA] · is mosquito a bug [CA only] · is mosquito a parasite [CA only] · is mosquito an animal [US+CA] · is mosquito an insect [US+CA] · mosquito anatomy · mosquito eyes · mosquito face · mosquito favorite blood type · mosquito genus · mosquito life cycle · mosquito lifespan · mosquito mouth · mosquito order · mosquito proboscis · mosquito under microscope · mosquito up close · mosquito up close face · mosquito up close microscope · mosquito uses · mosquito venom · mosquito wings · mosquitoes and blood type · mosquitoes favorite blood type · mosquitoes lifespan · what are mosquitoes attracted to [US+CA] · what are mosquitoes attracted to in humans [US+CA] · what are mosquitoes favorite blood type [US+CA] · what are mosquitoes for [US+CA] · what are mosquitoes good for [US+CA] · what are mosquitoes purpose [US+CA] · what do mosquitoes do [US+CA] · what do mosquitoes do for the ecosystem [CA only] · what do mosquitoes do for the environment · what do mosquitoes do with blood [US+CA] · what do mosquitoes eat [US+CA] · where are mosquitoes during the day [US+CA] · where do mosquitoes go at night [CA only] · where do mosquitoes go during the day [US+CA] · where do mosquitoes hide during the day [US+CA] · where do mosquitoes live [US+CA] · where do mosquitoes sleep [US+CA] · why are mosquitoes attracted to certain people [US+CA] · why are mosquitoes attracted to humans [US+CA] · why are mosquitoes attracted to light [US+CA] · why are mosquitoes important [US+CA] · why are mosquitoes so annoying [US+CA] · why are mosquitoes so attracted to me [US+CA] · why are mosquitoes so loud [CA only] · why do mosquitoes bite [US+CA] · why do mosquitoes bite me [CA only] · why do mosquitoes bite me so much · why do mosquitoes exist [US+CA] · why do mosquitoes like me [CA only] · why do mosquitoes love me · why do mosquitoes need blood [US+CA] · why do mosquitoes not bite me · why do mosquitoes suck blood

### other (73)

is mosquito a spanish word · is mosquito bowl on netflix · mosquito · mosquito airplane · mosquito bowl · mosquito bowl movie · mosquito bowl release date · mosquito bowl reviews · mosquito coast · mosquito coast movie · mosquito coast series · mosquito costume · mosquito drawing · mosquito drone · mosquito emoji · mosquito etymology · mosquito forceps · mosquito game · mosquito gif · mosquito girl · mosquito girl one punch man · mosquito girl opm · mosquito helicopter · mosquito helicopter cost · mosquito helicopter for sale · mosquito hemostat · mosquito hooks · mosquito in amber · mosquito in ear meme · mosquito in spanish · mosquito in the ear · mosquito in the ear movie · mosquito jokes · mosquito jurassic park · mosquito meme · mosquito movie · mosquito noise · mosquito one punch man · mosquito patty · mosquito plane · mosquito playing violin · mosquito pokemon · mosquito quail · mosquito queen · mosquito queen block tales · mosquito queen one punch man · mosquito queen opm · mosquito quest · mosquito quote lizzie borden · mosquito quotes · mosquito season comic · mosquito sound · mosquito supper club · mosquito ultra beast · mosquito ultralight helicopter · mosquito usa · mosquito violin · mosquito violin meme · mosquito wars · mosquito with violin · mosquito x · mosquito xe · mosquito xe / xel · mosquito xe helicopter · mosquito xe helicopter price · mosquito xe3 · mosquito xel · mosquito xel for sale · mosquito xet · mosquito xet for sale · mosquitoes · mosquitoes in spanish · mosquitoes or mosquitos

### timing and season (53)

are mosquitoes still out [US+CA] · do mosquitoes come out in the rain [CA only] · how do mosquitoes survive the winter · how do mosquitoes survive winter [CA only] · how do mosquitoes survive winter in canada [CA only] · is mosquito season over [US+CA] · mosquito season · mosquito season cancun · mosquito season in alaska · mosquito season in florida · mosquito season in north carolina · mosquito season in texas · mosquito season japan · mosquito season maine · mosquito season michigan · mosquitoes in october · what do mosquitoes do in the winter [CA only] · when do mosquitoes come out [US+CA] · when do mosquitoes die [US+CA] · when do mosquitoes die off [US+CA] · when do mosquitoes go away [US+CA] · when do mosquitoes go away at night [US+CA] · when do mosquitoes go away in ontario [CA only] · when do mosquitoes sleep · when do mosquitoes start dying off · when do mosquitoes start to die off [CA only] · when do mosquitoes stop coming out [US+CA] · when is mosquito breeding season · when is mosquito mating season · when is mosquito season [US+CA] · when is mosquito season in alaska [US+CA] · when is mosquito season in australia [CA only] · when is mosquito season in california · when is mosquito season in canada [CA only] · when is mosquito season in florida · when is mosquito season in japan · when is mosquito season in mexico [CA only] · when is mosquito season in ontario [CA only] · when is mosquito season in texas · when is mosquito season in thailand [CA only] · when is mosquito season in toronto [CA only] · when is mosquito season over [US+CA] · when is mosquito season over in ontario [CA only] · when is mosquitoes most active · where are mosquitoes in the winter · where are mosquitoes in winter [CA only] · where do mosquitoes go in the winter · where do mosquitoes go in winter [CA only] · where do mosquitoes go when it gets cold · where do mosquitoes go when it rains [US+CA] · why are mosquitoes so bad right now [US+CA] · why are mosquitoes so bad this year [US+CA] · why do mosquitoes come out at night [CA only]

### bites and reactions (49)

best mosquito bite relief · can mosquito bites blister · does a mosquito bite hurt · how do mosquito bites work [US+CA] · how long do mosquito bites itch · how long do mosquito bites last · how long do mosquito bites take to go away · how long do mosquito bites take to show up · how to get rid of mosquito bite scars [CA only] · how to get rid of mosquito bites [US+CA] · how to get rid of mosquito bites fast [US+CA] · how to get rid of mosquito bites on face [CA only] · how to get rid of mosquito bites overnight [US+CA] · is a mosquito bite an allergic reaction [US+CA] · is mosquito bite dangerous [CA only] · mosquito allergic reaction · mosquito allergy · mosquito bite allergic reaction · mosquito bite allergy · mosquito bite on baby · mosquito bite on bottom of foot · mosquito bite on eyelid · mosquito bite on face · mosquito bite on finger · mosquito bite on foot · mosquito bite on forehead · mosquito bite on lip · mosquito bite on neck · mosquito bite relief · mosquito bite treatment · mosquito bites · mosquito bites allergy · mosquito bites on babies · mosquito bites on toddler · mosquito bites relief · mosquito bites swelling · mosquito itch relief · mosquito ointment · mosquito syndrome · mosquito welts · mosquitoes bites · what are mosquito bites · when do mosquito bites go away [US+CA] · when do mosquito bites stop itching [US+CA] · why do mosquito bites itch [US+CA] · why do mosquito bites itch days later [CA only] · why do mosquito bites itch more at night [US+CA] · why do mosquito bites swell · why do mosquito bites swell up [CA only]

### getting rid of them (46)

do mosquitoes like cedar trees [CA only] · do mosquitoes like lavender [US+CA] · does mosquito spraying work · how to get rid of mosquitoes [US+CA] · how to get rid of mosquitoes at home [CA only] · how to get rid of mosquitoes in backyard [US+CA] · how to get rid of mosquitoes in backyard naturally · how to get rid of mosquitoes in yard · how to get rid of mosquitoes in your house · how to get rid of mosquitoes inside the house [US+CA] · how to get rid of mosquitoes inside the house naturally [US+CA] · is mosquito buzz safe [CA only] · mosquito abatement · mosquito authority · mosquito control · mosquito control backyard · mosquito control companies · mosquito control for home · mosquito control for yard · mosquito control near me · mosquito control products · mosquito control services · mosquito control spray · mosquito control truck · mosquito extermination · mosquito home remedy · mosquito hunters · mosquito joe · mosquito joe cost · mosquito joe lawsuit · mosquito joe login · mosquito joe near me · mosquito joe phone number · mosquito joe reviews · mosquito man · mosquito quick kill · mosquito spray truck · mosquito spraying near me · mosquito spraying st pete · mosquito squad · mosquito treatment · mosquito treatment for yard · mosquito yard control · mosquito yard treatment · mosquito yard treatment near me · what do mosquitoes hate [US+CA]

### identification and look-alikes (30)

does a mosquito bite have a dot in the middle [US+CA] · does a mosquito bite look like · how do mosquito bites look · mosquito bites pictures · mosquito bites vs bed bug bites · mosquito bites vs flea bites · mosquito eater · mosquito eater bug · mosquito flies · mosquito hawk · mosquito killer bug · mosquito or bed bug bite · mosquito types · mosquito vs ant bite · mosquito vs bed bug · mosquito vs bed bug bite · mosquito vs chigger bites · mosquito vs crane fly · mosquito vs flea bites · mosquito vs fly · mosquito vs gnat · mosquito vs spider bite · mosquito vs tick bite · mosquito with black and white legs · mosquito with stripes · mosquito with white spots · mosquito with white stripes · what do mosquito bites look like [US+CA] · what do mosquito hawks eat [CA only] · what do mosquitoes look like

### places (29)

how do mosquitoes get in the house · how long do mosquitoes live in your house · mosquito gulf panama · mosquito in house · mosquito island · mosquitoes in alaska · mosquitoes in backyard · mosquitoes in bathroom · mosquitoes in california · mosquitoes in hawaii · mosquitoes in house · mosquitoes in iceland · mosquitoes in my house · mosquitoes toronto · where are mosquitoes born [US+CA] · where are mosquitoes coming from in my house [US+CA] · where are mosquitoes dangerous [CA only] · where are mosquitoes found · where are mosquitoes most dangerous [CA only] · where are mosquitoes native to [US+CA] · where are mosquitoes not found [US+CA] · where are mosquitoes originally from [CA only] · where are mosquitoes the worst · where are mosquitoes the worst in the world [US+CA] · where do mosquitoes come from [US+CA] · where do mosquitoes hide in the house [US+CA] · why are mosquitoes in my house · why are mosquitoes so bad in alaska · why are mosquitoes so bad in canada [CA only]

### larvae and water (24)

how long do mosquito eggs take to hatch · mosquito eating fish · mosquito eggs · mosquito eggs in water · mosquito fish · mosquito fish for sale · mosquito larvae · mosquito larvae in fish tank · mosquito larvae in pool · mosquito larvae in water · mosquito larvae killer · mosquito larvae pictures · mosquito larvae stages · mosquito larvae swimming · mosquito larvae vs dragonfly larvae · mosquito larvae vs tadpole · mosquito nest · mosquito pupa · what are mosquito fish · what do mosquito eggs look like [US+CA] · what do mosquito larvae eat · what do mosquito larvae look like [US+CA] · where are mosquito fish native to · where do mosquitoes lay their eggs [US+CA]

### disease (19)

can mosquito bites make you sick [US+CA] · can mosquitoes carry aids [CA only] · can mosquitoes carry lyme disease [CA only] · can mosquitoes carry rabies [CA only] · can mosquitoes kill you · can mosquitoes transmit aids · can mosquitoes transmit hiv [US+CA] · can mosquitoes transmit rabies · how do mosquitoes get malaria [CA only] · how do mosquitoes get west nile virus · mosquito disease in florida · mosquito diseases · mosquito illness · mosquito outbreak · mosquito outbreak 2026 · mosquito outbreak in florida · mosquito que transmite el dengue · mosquito virus · mosquito virus 2026

### pets (13)

can mosquitoes bite dogs · do mosquitoes bite cats [US+CA] · do mosquitoes bite dogs [US+CA] · does mosquitoes bite dogs · is mosquito repellent safe for dogs · is mosquito spray safe for dogs · mosquito bite on dog · mosquito bites on dogs · mosquito repellent for dogs · mosquito spray for dogs · mosquito yard spray pet safe · mosquito yard spray safe for dogs · mosquito yard treatment safe for dogs

### Raw suggestions per request (in Google's order)

- US `why do mosquito` (21:23:50Z): why do mosquito bites itch | why do mosquitoes exist | why do mosquitoes bite | why do mosquitoes love me | why do mosquitoes need blood | why do mosquitoes bite me so much | why do mosquitoes suck blood | why do mosquito bites swell | why do mosquito bites itch more at night | why do mosquitoes not bite me
- US `why are mosquitoes` (21:23:52Z): why are mosquitoes so attracted to me | why are mosquitoes important | why are mosquitoes so bad right now | why are mosquitoes so bad this year | why are mosquitoes attracted to certain people | why are mosquitoes so bad in alaska | why are mosquitoes in my house | why are mosquitoes so annoying | why are mosquitoes attracted to light | why are mosquitoes attracted to humans
- US `how do mosquito` (21:23:53Z): how do mosquitoes reproduce | how do mosquitoes find you | how do mosquitoes survive the winter | how do mosquitoes bite | how do mosquito dunks work | how do mosquitoes help the environment | how do mosquitoes get in the house | how do mosquito bites work | how do mosquito bites look | how do mosquitoes get west nile virus
- US `how to get rid of mosquito` (21:23:55Z): how to get rid of mosquito bites | how to get rid of mosquitoes | how to get rid of mosquitoes in yard | how to get rid of mosquito bites fast | how to get rid of mosquitoes in your house | how to get rid of mosquitoes in backyard | how to get rid of mosquitoes inside the house naturally | how to get rid of mosquitoes in backyard naturally | how to get rid of mosquito bites overnight | how to get rid of mosquitoes inside the house
- US `when do mosquito` (21:23:56Z): when do mosquitoes go away | when do mosquitoes come out | when do mosquito bites go away | when do mosquitoes go away at night | when do mosquitoes die | when do mosquitoes die off | when do mosquito bites stop itching | when do mosquitoes stop coming out | when do mosquitoes sleep | when do mosquitoes start dying off
- US `when is mosquito` (21:23:58Z): when is mosquito season | when is mosquito season over | when is mosquito season in alaska | when is mosquito breeding season | when is mosquito season in florida | when is mosquito mating season | when is mosquitoes most active | when is mosquito season in california | when is mosquito season in texas | when is mosquito season in japan
- US `where do mosquito` (21:24:00Z): where do mosquitoes go in the winter | where do mosquitoes live | where do mosquitoes lay their eggs | where do mosquitoes come from | where do mosquitoes go when it rains | where do mosquitoes go during the day | where do mosquitoes sleep | where do mosquitoes go when it gets cold | where do mosquitoes hide in the house | where do mosquitoes hide during the day
- US `where are mosquito` (21:24:01Z): where are mosquitoes native to | where are mosquitoes during the day | where are mosquitoes found | where are mosquitoes in the winter | where are mosquitoes coming from in my house | where are mosquitoes the worst in the world | where are mosquitoes the worst | where are mosquito fish native to | where are mosquitoes born | where are mosquitoes not found
- US `what do mosquito` (21:24:03Z): what do mosquito bites look like | what do mosquitoes do | what do mosquitoes eat | what do mosquitoes do for the environment | what do mosquito larvae look like | what do mosquitoes hate | what do mosquitoes look like | what do mosquito eggs look like | what do mosquitoes do with blood | what do mosquito larvae eat
- US `what are mosquito` (21:24:04Z): what are mosquitoes good for | what are mosquitoes attracted to | what are mosquito bits | what are mosquitoes purpose | what are mosquito dunks | what are mosquitoes favorite blood type | what are mosquitoes for | what are mosquito fish | what are mosquitoes attracted to in humans | what are mosquito bites
- US `can mosquito` (21:24:06Z): can mosquitoes transmit hiv | can mosquitoes bite through clothes | can mosquitoes bite through jeans | can mosquitoes see in the dark | can mosquito bites make you sick | can mosquitoes bite dogs | can mosquito bites blister | can mosquitoes kill you | can mosquitoes bite more than once | can mosquitoes transmit aids
- US `can mosquitoes` (21:24:07Z): can mosquitoes transmit hiv | can mosquitoes bite through clothes | can mosquitoes bite through jeans | can mosquitoes see in the dark | can mosquitoes bite dogs | can mosquitoes kill you | can mosquitoes bite more than once | can mosquitoes transmit aids | can mosquitoes transmit rabies | can mosquitoes smell blood
- US `do mosquito` (21:24:09Z): do mosquitoes bite dogs | do mosquitoes bite | do mosquitoes sleep | do mosquitoes bite cats | do mosquitoes pollinate | do mosquitoes have a purpose | do mosquitoes like lavender | do mosquitoes like a certain blood type | do mosquitoes serve a purpose | do mosquitoes bite through clothes
- US `do mosquitoes` (21:24:11Z): do mosquitoes bite dogs | do mosquitoes bite | do mosquitoes sleep | do mosquitoes bite cats | do mosquitoes like a certain blood type | do mosquitoes pollinate | do mosquitoes have a purpose | do mosquitoes like lavender | do mosquitoes serve a purpose | do mosquitoes bite through clothes
- US `does mosquito` (21:24:12Z): does mosquito repellent work | does mosquito repellent expire | does mosquito tnt work | does mosquito repellent work on flies | does mosquito spray kill bees | does mosquitoes bite dogs | does mosquito repellent work on fleas | does mosquito repellent work on ticks | does mosquito spray expire | does mosquito spraying work
- US `does a mosquito` (21:24:14Z): does a mosquito die after it bites you | does a mosquito bite more than once | does a mosquito bite or sting | does a mosquito have a brain | does a mosquito bite hurt | does a mosquito have a heart | does a mosquito bite have a dot in the middle | does a mosquito die after biting | does a mosquito bite look like | does a mosquito have a proboscis
- US `are mosquito` (21:24:15Z): are mosquitoes attracted to light | are mosquitoes pollinators | are mosquitoes important | are mosquitoes attracted to a certain blood type | are mosquitoes nocturnal | are mosquitoes good for anything | are mosquitoes parasites | are mosquitoes attracted to the smell of weed | are mosquitoes still out | are mosquitoes active at night
- US `are mosquitoes` (21:24:17Z): are mosquitoes attracted to light | are mosquitoes pollinators | are mosquitoes important | are mosquitoes attracted to a certain blood type | are mosquitoes nocturnal | are mosquitoes good for anything | are mosquitoes parasites | are mosquitoes attracted to the smell of weed | are mosquitoes still out | are mosquitoes active at night
- US `is mosquito` (21:24:18Z): is mosquito bowl on netflix | is mosquito an animal | is mosquito spray safe | is mosquito repellent safe for dogs | is mosquito season over | is mosquito spray safe for dogs | is mosquito spray harmful to humans | is mosquito an insect | is mosquito repellent safe | is mosquito a spanish word
- US `is a mosquito` (21:24:20Z): is a mosquito an animal | is a mosquito a parasite | is a mosquito an animal or an insect | is a mosquito an insect | is a mosquito considered an animal | is a mosquito a fly | is a mosquito a bug | is a mosquito bite an allergic reaction | is a mosquito an arthropod | is a mosquito a type of fly
- US `mosquito a` (21:24:22Z): mosquito allergy | mosquito authority | mosquito allergic reaction | mosquito attractant | mosquito anatomy | mosquito airplane | mosquito air defense system laser | mosquito abatement | mosquito and tick repellent | mosquito air defense
- US `mosquito b` (21:24:23Z): mosquito bowl | mosquito bites | mosquito bits | mosquito bite relief | mosquito bowl movie | mosquito bite allergy | mosquito bites swelling | mosquito bite treatment | mosquito bowl release date | mosquito bowl reviews
- US `mosquito c` (21:24:25Z): mosquito coast | mosquito coil | mosquito candles | mosquito control | mosquito coast series | mosquito catcher | mosquito control near me | mosquito costume | mosquito curtains | mosquito coast movie
- US `mosquito d` (21:24:26Z): mosquito dunks | mosquito diseases | mosquito dunk bucket | mosquito drone | mosquito dunks home depot | mosquito drawing | mosquito dunks for fungus gnats | mosquito dunks how to use | mosquito repellent | mosquito disease in florida
- US `mosquito e` (21:24:28Z): mosquito eater | mosquito eggs | mosquito eater bug | mosquito eggs in water | mosquito eyes | mosquito etymology | mosquito emoji | mosquito eradicator | mosquito extermination | mosquito eating fish
- US `mosquito f` (21:24:29Z): mosquito fish | mosquito fogger | mosquito fogger machine | mosquito fish for sale | mosquito forceps | mosquito flies | mosquito fogger liquid | mosquito favorite blood type | mosquito face | mosquito fogger for yard
- US `mosquito g` (21:24:31Z): mosquito girl one punch man | mosquito girl | mosquito granules | mosquito gif | mosquito gun | mosquito game | mosquito grass spray | mosquito girl opm | mosquito genus | mosquito gulf panama
- US `mosquito h` (21:24:33Z): mosquito hawk | mosquito helicopter | mosquito head net | mosquito hemostat | mosquito hunters | mosquito hat | mosquito hooks | mosquito helicopter for sale | mosquito helicopter cost | mosquito home remedy
- US `mosquito i` (21:24:34Z): mosquito island | mosquito in the ear | mosquito in spanish | mosquito itch relief | mosquito illness | mosquito in the ear movie | mosquito in house | mosquito in amber | mosquito incense | mosquito in ear meme
- US `mosquito j` (21:24:36Z): mosquito joe | mosquito joe near me | mosquito jacket | mosquito joe reviews | mosquito joe cost | mosquito jokes | mosquito joe phone number | mosquito joe login | mosquito jurassic park | mosquito joe lawsuit
- US `mosquito k` (21:24:37Z): mosquito killer | mosquito killer outdoor | mosquito killer machine | mosquito killer bug | mosquito killer indoor | mosquito killer spray | mosquito killing drone | mosquito killer for yard | mosquito killer lamp | mosquito killing laser
- US `mosquito l` (21:24:39Z): mosquito larvae | mosquito lifespan | mosquito larvae in water | mosquito laser | mosquito laser killer | mosquito life cycle | mosquito laser zapper | mosquito laser defense system | mosquito light | mosquito lamp
- US `mosquito m` (21:24:40Z): mosquito magnet | mosquito movie | mosquito magnet patriot plus | mosquito meme | mosquito man | mosquito misting system | mosquito machine | mosquito magnet patriot | mosquito mouth | mosquito magician
- US `mosquito n` (21:24:42Z): mosquito net | mosquito netting for patio | mosquito net for bed | mosquito nest | mosquito net hat | mosquito netting fabric | mosquito noise | mosquito net near me | mosquito net tent | mosquito net for stroller
- US `mosquito o` (21:24:44Z): mosquito outdoor repellent | mosquito outbreak | mosquito outbreak in florida | mosquito ointment | mosquito or bed bug bite | mosquito outbreak 2026 | mosquito order | mosquito one punch man | mosquito oil | mosquito outdoor spray
- US `mosquito p` (21:24:45Z): mosquito plant | mosquito patches | mosquito proboscis | mosquito playing violin | mosquito plane | mosquito pellets | mosquito pupa | mosquito proof clothing | mosquito pokemon | mosquito patty
- US `mosquito q` (21:24:47Z): mosquito queen one punch man | mosquito queen | mosquito quail | mosquito quote lizzie borden | mosquito quotes | mosquito queen opm | mosquito quick kill | mosquito quest | mosquito que transmite el dengue | mosquito queen block tales
- US `mosquito r` (21:24:48Z): mosquito repellent | mosquito repellent plants | mosquito repellent for yard | mosquito repellent spray | mosquito repellent machine | mosquito repellent bracelet | mosquito repellent candle | mosquito repellent for dogs | mosquito repellent stickers | mosquito repellent natural
- US `mosquito s` (21:24:50Z): mosquito spray | mosquito spray for yard | mosquito squad | mosquito supper club | mosquito stickers | mosquito spray for body | mosquito season | mosquito sound | mosquito syndrome | mosquito sucker
- US `mosquito t` (21:24:51Z): mosquito trap | mosquito trap indoor | mosquito trap outdoor | mosquito tnt | mosquito treatment for yard | mosquito torches | mosquito tent | mosquito types | mosquito treatment | mosquito trap diy
- US `mosquito u` (21:24:53Z): mosquito up close | mosquito under microscope | mosquito ultralight helicopter | mosquito up close face | mosquito uses | mosquito up close microscope | mosquito uv light trap | mosquito usa | mosquito uv light | mosquito ultra beast
- US `mosquito v` (21:24:55Z): mosquito virus | mosquito vs bed bug bite | mosquito vs spider bite | mosquito virus 2026 | mosquito vs flea bites | mosquito violin meme | mosquito violin | mosquito vacuum | mosquito venom | mosquito venom sucker
- US `mosquito w` (21:24:56Z): mosquito with white stripes | mosquito with black and white legs | mosquito wipes | mosquito with white spots | mosquito wings | mosquito with violin | mosquito welts | mosquito with stripes | mosquito wars | mosquito wristbands
- US `mosquito x` (21:24:58Z): mosquito xel | mosquito xe | mosquito xe helicopter | mosquito xet | mosquito xel for sale | mosquito xet for sale | mosquito x | mosquito xe3 | mosquito xe helicopter price | mosquito xe / xel
- US `mosquito y` (21:24:59Z): mosquito yard spray | mosquito yard treatment | mosquito yard repellent | mosquito yard control | mosquito yard spray pet safe | mosquito yard fogger | mosquito yard spray safe for dogs | mosquito yard treatment safe for dogs | mosquito yeast trap | mosquito yard treatment near me
- US `mosquito z` (21:25:01Z): mosquito zapper | mosquito zapper outdoor | mosquito zapper indoor | mosquito zapper outdoor solar | mosquito zapper racket | mosquito zapper laser | mosquito zapper walmart | mosquito zappers that work | mosquito zapper home depot | mosquito zapper amazon
- US `mosquito bite` (21:25:02Z): mosquito bites | mosquito bite relief | mosquito bite allergy | mosquito bites swelling | mosquito bite treatment | mosquito bite allergic reaction | mosquito bite on face | mosquito bites on babies | mosquito bites pictures | mosquito bites on dogs
- US `mosquito bites` (21:25:04Z): mosquito bites | mosquito bites vs bed bug bites | mosquito bites swelling | mosquito bites relief | mosquito bites on babies | mosquito bites allergy | mosquito bites pictures | mosquito bites on dogs | mosquito bites vs flea bites | mosquito bites on toddler
- US `mosquitoes in` (21:25:06Z): mosquitoes in house | mosquitoes in alaska | mosquitoes in my house | mosquitoes in spanish | mosquitoes in iceland | mosquitoes in bathroom | mosquitoes in hawaii | mosquitoes in california | mosquitoes in october | mosquitoes in backyard
- US `best mosquito` (21:25:07Z): best mosquito repellent | best mosquito repellent for yard | best mosquito repellent for patio | best mosquito repellent for skin | best mosquito trap | best mosquito killer | best mosquito repellent device | best mosquito bite relief | best mosquito spray for yard | best mosquito repellent for kids
- US `mosquito vs` (21:25:09Z): mosquito vs bed bug bite | mosquito vs spider bite | mosquito vs flea bites | mosquito vs fly | mosquito vs tick bite | mosquito vs crane fly | mosquito vs ant bite | mosquito vs chigger bites | mosquito vs bed bug | mosquito vs gnat
- US `mosquito` (21:25:10Z): mosquito bowl | mosquito | mosquito bites | mosquito repellent | mosquito dunks | mosquito bits | mosquitoes | mosquito larvae | mosquito hawk | mosquito bowl movie
- US `mosquitoes` (21:25:12Z): mosquitoes | mosquitoes bites | mosquitoes in house | mosquitoes repellent | mosquitoes or mosquitos | mosquitoes toronto | mosquitoes in alaska | mosquitoes and blood type | mosquitoes favorite blood type | mosquitoes lifespan
- US `mosquito larvae` (21:25:14Z): mosquito larvae | mosquito larvae in water | mosquito larvae killer | mosquito larvae in pool | mosquito larvae vs tadpole | mosquito larvae stages | mosquito larvae in fish tank | mosquito larvae vs dragonfly larvae | mosquito larvae pictures | mosquito larvae swimming
- US `mosquito spray` (21:25:15Z): mosquito spray | mosquito spray for yard | mosquito spray for body | mosquito spray for house | mosquito spraying near me | mosquito spray for dogs | mosquito spraying st pete | mosquito sprayer | mosquito spray for kids | mosquito spray truck
- US `mosquito repellent` (21:25:17Z): mosquito repellent | mosquito repellent plants | mosquito repellent for yard | mosquito repellent spray | mosquito repellent machine | mosquito repellent bracelet | mosquito repellent candle | mosquito repellent for dogs | mosquito repellent stickers | mosquito repellent natural
- US `mosquito season` (21:25:18Z): mosquito season | mosquito season in alaska | mosquito season in florida | mosquito season in texas | mosquito season comic | mosquito season michigan | mosquito season japan | mosquito season cancun | mosquito season in north carolina | mosquito season maine
- US `mosquito control` (21:25:20Z): mosquito control | mosquito control near me | mosquito control backyard | mosquito control for yard | mosquito control products | mosquito control truck | mosquito control for home | mosquito control services | mosquito control spray | mosquito control companies
- US `how long do mosquito` (21:25:21Z): how long do mosquitoes live | how long do mosquito bites last | how long do mosquito bites itch | how long do mosquitoes live in your house | how long do mosquito bites take to go away | how long do mosquito dunks last | how long do mosquitoes live indoors | how long do mosquito bites take to show up | how long do mosquito dunks take to work | how long do mosquito eggs take to hatch
- US `mosquito bite on` (21:25:23Z): mosquito bite on face | mosquito bite on eyelid | mosquito bite on lip | mosquito bite on baby | mosquito bite on forehead | mosquito bite on dog | mosquito bite on finger | mosquito bite on bottom of foot | mosquito bite on foot | mosquito bite on neck
- CA `why do mosquito` (21:25:25Z): why do mosquito bites itch | why do mosquitoes like me | why do mosquitoes need blood | why do mosquitoes exist | why do mosquitoes bite me | why do mosquitoes bite | why do mosquito bites swell up | why do mosquitoes come out at night | why do mosquito bites itch more at night | why do mosquito bites itch days later
- CA `why are mosquitoes` (21:25:26Z): why are mosquitoes important | why are mosquitoes so bad this year | why are mosquitoes attracted to certain people | why are mosquitoes so attracted to me | why are mosquitoes so bad right now | why are mosquitoes attracted to light | why are mosquitoes so annoying | why are mosquitoes attracted to humans | why are mosquitoes so loud | why are mosquitoes so bad in canada
- CA `how do mosquito` (21:25:28Z): how do mosquitoes survive winter | how do mosquitoes reproduce | how do mosquitoes find you | how do mosquitoes survive winter in canada | how do mosquito bites work | how do mosquito coils work | how do mosquito dunks work | how do mosquitoes bite | how do mosquitoes know where to bite | how do mosquitoes get malaria
- CA `how to get rid of mosquito` (21:25:29Z): how to get rid of mosquito bites | how to get rid of mosquitoes | how to get rid of mosquitoes inside the house naturally | how to get rid of mosquito bites fast | how to get rid of mosquitoes in backyard | how to get rid of mosquito bites overnight | how to get rid of mosquitoes at home | how to get rid of mosquitoes inside the house | how to get rid of mosquito bites on face | how to get rid of mosquito bite scars
- CA `when do mosquito` (21:25:31Z): when do mosquitoes go away in ontario | when do mosquitoes go away | when do mosquitoes come out | when do mosquito bites go away | when do mosquitoes go away at night | when do mosquitoes start to die off | when do mosquitoes die off | when do mosquitoes die | when do mosquitoes stop coming out | when do mosquito bites stop itching
- CA `when is mosquito` (21:25:32Z): when is mosquito season in ontario | when is mosquito season over | when is mosquito season | when is mosquito season over in ontario | when is mosquito season in toronto | when is mosquito season in mexico | when is mosquito season in canada | when is mosquito season in australia | when is mosquito season in alaska | when is mosquito season in thailand
- CA `where do mosquito` (21:25:34Z): where do mosquitoes go in winter | where do mosquitoes live | where do mosquitoes lay their eggs | where do mosquitoes go during the day | where do mosquitoes come from | where do mosquitoes go when it rains | where do mosquitoes sleep | where do mosquitoes go at night | where do mosquitoes hide during the day | where do mosquitoes hide in the house
- CA `where are mosquito` (21:25:36Z): where are mosquitoes during the day | where are mosquitoes the worst in the world | where are mosquitoes born | where are mosquitoes native to | where are mosquitoes most dangerous | where are mosquitoes in winter | where are mosquitoes coming from in my house | where are mosquitoes dangerous | where are mosquitoes not found | where are mosquitoes originally from
- CA `what do mosquito` (21:25:37Z): what do mosquitoes eat | what do mosquitoes do | what do mosquito bites look like | what do mosquitoes do for the ecosystem | what do mosquito larvae look like | what do mosquitoes do with blood | what do mosquitoes hate | what do mosquitoes do in the winter | what do mosquito hawks eat | what do mosquito eggs look like
- CA `what are mosquito` (21:25:39Z): what are mosquitoes good for | what are mosquitoes attracted to | what are mosquito coils made of | what are mosquito bits | what are mosquito dunks | what are mosquitoes for | what are mosquitoes purpose | what are mosquitoes favorite blood type | what are mosquito dunks made of | what are mosquitoes attracted to in humans
- CA `can mosquito` (21:25:40Z): can mosquitoes carry aids | can mosquitoes bite through clothes | can mosquitoes transmit hiv | can mosquitoes bite more than once | can mosquitoes see in the dark | can mosquitoes bite through jeans | can mosquitoes carry lyme disease | can mosquito bites make you sick | can mosquitoes hear | can mosquitoes smell blood
- CA `can mosquitoes` (21:25:42Z): can mosquitoes carry aids | can mosquitoes transmit hiv | can mosquitoes bite through clothes | can mosquitoes bite more than once | can mosquitoes see in the dark | can mosquitoes bite through jeans | can mosquitoes carry lyme disease | can mosquitoes hear | can mosquitoes smell blood | can mosquitoes carry rabies
- CA `do mosquito` (21:25:43Z): do mosquitoes sleep | do mosquitoes bite dogs | do mosquitoes pollinate | do mosquitoes like certain blood types | do mosquito coils work | do mosquitoes come out in the rain | do mosquitoes like lavender | do mosquitoes have brains | do mosquitoes feel pain | do mosquitoes bite cats
- CA `do mosquitoes` (21:25:45Z): do mosquitoes sleep | do mosquitoes bite dogs | do mosquitoes pollinate | do mosquitoes like certain blood types | do mosquitoes come out in the rain | do mosquitoes like lavender | do mosquitoes have brains | do mosquitoes feel pain | do mosquitoes bite cats | do mosquitoes like cedar trees
- CA `does mosquito` (21:25:47Z): does mosquito repellent expire | does mosquito repellent work | does mosquito repellent work on ticks | does mosquito repellent work on wasps | does mosquito coil kill mosquitoes | does mosquito spray expire | does mosquito have teeth | does mosquito spray work | does mosquito sleep | does mosquito repellent work on fruit flies
- CA `does a mosquito` (21:25:48Z): does a mosquito die after it bites you | does a mosquito bite more than once | does a mosquito have a brain | does a mosquito die after biting | does a mosquito have a heart | does a mosquito bite or sting | does a mosquito only bite once | does a mosquito have teeth | does a mosquito bite have a dot in the middle | does a mosquito have eyes
- CA `are mosquito` (21:25:50Z): are mosquitoes useful | are mosquitoes attracted to light | are mosquitoes pollinators | are mosquitoes nocturnal | are mosquitoes attracted to a certain blood type | are mosquitoes still out | are mosquitoes parasites | are mosquitoes attracted to the smell of weed | are mosquitoes attracted to dark colors | are mosquitoes animals
- CA `are mosquitoes` (21:25:51Z): are mosquitoes useful | are mosquitoes attracted to light | are mosquitoes pollinators | are mosquitoes nocturnal | are mosquitoes attracted to a certain blood type | are mosquitoes still out | are mosquitoes parasites | are mosquitoes attracted to the smell of weed | are mosquitoes attracted to dark colors | are mosquitoes animals
- CA `is mosquito` (21:25:53Z): is mosquito an animal | is mosquito buzz safe | is mosquito coil harmful to humans | is mosquito season over | is mosquito an insect | is mosquito spray harmful to humans | is mosquito a parasite | is mosquito bite dangerous | is mosquito repellent safe | is mosquito a bug
- CA `is a mosquito` (21:25:55Z): is a mosquito an animal | is a mosquito a parasite | is a mosquito a fly | is a mosquito an insect | is a mosquito considered an animal | is a mosquito a bug | is a mosquito bite an allergic reaction | is a mosquito an arthropod | is a mosquito a carnivore | is a mosquito an insect or an animal


---

## 5. Things that surprised me

1. Google Trends labelled the built-in browser a scraper from the very first view (`USER_TYPE_SCRAPER`) and stopped serving at view 9 with a reCAPTCHA demand. Nine views in about 11 minutes was enough.
2. "mosquito larvae" (US) holds up in winter as well as the head term (Dec-Feb ≈ 20% of summer), while "mosquito bites" and "mosquito repellent" fall to about 9-12%. In Canada, larvae drops below Google's reporting threshold every winter.
3. Canada's off-season is far deeper than the US one for every term (bites: Jan = 4% of July in Canada vs 8% in the US; repellent 6% vs 10%), and it starts sooner: in October "mosquito" is still at 46% of its peak month in the US (32.1 vs 70.1) but already down to 16% in Canada (9.3 vs 57.1).
4. The US "mosquito" peak month is June, not July (June 70.1 vs July 68.1 on the 5-year average; repellent also peaks in June), while Canada peaks in July for every term.
5. The question-style autocomplete is mostly curiosity, not problem-solving: about 41-44% of question suggestions are biology and behaviour ("why do mosquitoes exist", "do mosquitoes sleep", "is a mosquito an animal", blood type, "attracted to the smell of weed"). The "mosquito + letter" lists are 40% products.
6. 2026 was the biggest mosquito-search year of the five in both countries, with a higher US winter floor in Jan-Feb 2026 and a higher October 2026 than any earlier October.
7. Service intent is growing in the US 5-year rising list ("mosquito control near me", "mosquito spraying near me", "mosquito control services", +160-170%), and Mosquito Joe (a franchise) has a full brand cluster in autocomplete (near me, cost, reviews, phone number, login, lawsuit).
