# Lead baseline and demand for spring 2027

Researched Oct 30, 2026. Goal being tested: 2,000 leads in April to June 2027.

Nothing was changed, sent or signed up for. Every source was read-only: OpenPhone, the Hub database, Search Console, GA4 and the Google profile. My browser tabs are closed. Every season is labelled. Numbers from September and October are off-season and are not used to predict spring.

## The short version

- **Real leads last spring (Apr-Jun 2026): about 325 people.** The range is 305 to 345. That is the 294 Hub rows, less repeats, plus the callers who never reached the Hub.
- **Calls are real, but most are already in the Hub.** 146 new callers phoned last spring. At least 71 of them have a Hub row. About one Hub row in five appears within minutes of an answered call. Calls add about 16% to the form count. They do not double it.
- **Google Business Profile is a smaller source than it feels.** Google counted 44 calls from the profile in May-Jul 2026. New callers in those months were 170. So the profile explains at most about 1 new caller in 4.
- **GTA demand: about 5,500 service searches a month at the peak** (May and June). It could be 3,000 or 11,000. That is about 13,000 searches across April to June, or roughly 5,000 people shopping.
- **2,000 leads does not fit inside search.** It would be about 1 lead for every 6 searches. A realistic search-based spring is 700 to 1,200 leads, and that includes paying for ads.
- **2,000 is only reachable by buying about half the leads outside search,** such as Facebook or mail. At benchmark prices the whole plan costs about CA$75,000 to CA$140,000 in 13 weeks. One person cannot answer 28 leads a day.
- **Warning about Search Console:** about 60% of the raw impressions on local service searches come from rank-checking software, not people. Older notes that quote raw local numbers are too high.

---

## 1. Phone calls

### How I counted

- Source: the OpenPhone (Quo) API, GET requests only. There is one line on the account, (289) 216-5030. It is the same number shown on the Google profile.
- The API will not list calls without a participant. So I listed all 848 conversations on the line, took the 847 numbers in them, and read each number's calls and texts.
- Completeness check: I also read the 48 Hub lead and customer phones that were in no conversation. None had any call or text. So the conversation list is complete.
- To tell who is a form lead, I matched numbers to the Hub's `leads` and `customers` tables, read-only, using the key in the Hub's `.env.local`. Keys were never printed. Numbers stayed in memory. The saved files hold only scrambled IDs, dates, directions and call lengths. No numbers, names or message text are saved or shown.

### Inbound calls by month (2026)

| Month | Season | Inbound calls | Answered | Missed | Distinct callers | New callers |
|---|---|---|---|---|---|---|
| Apr | spring | 28 | 18 | 10 | 23 | 17 |
| May | spring | 96 | 67 | 29 | 65 | 55 |
| Jun | spring | 149 | 94 | 55 | 84 | 74 |
| Jul | summer | 114 | 56 | 58 | 52 | 41 |
| Aug | summer | 62 | 28 | 34 | 39 | 30 |
| Sep | off-season | 24 | 6 | 18 | 18 | 12 |
| Oct 1-27 | off-season | 21 | 0 | 21 | 15 | 12 |
| **Apr-Jun** | **spring** | **273** | **179** | **94** | | **146** |

"New caller" means this number's first inbound call ever, back to October 2024 when the line started.

### Who the spring's new callers were (Apr-Jun 2026)

| Group | People | What it means |
|---|---|---|
| All new callers | 146 | First inbound call ever |
| We had already called or texted them | 9 | Not new to us |
| Called with no earlier contact | 137 | The real first-contact calls |
| ...filled a form first, then called | 11 | Already in the Hub count |
| ...called first, then a Hub row appeared | 60 | Already in the Hub count |
| ...never in the Hub | 66 | **The group missing from the lead count** |
| ......Ontario number, and talked 30s+ or we followed up | 47 | My "likely real" count |
| ......Ontario number and talked 60s+ | 26 | Strict count |

Of the 66, 25 never connected at all. They may be real people we lost, or spam. We cannot tell.

### Are calls missing from the Hub numbers?

Only partly. The owner is right that many people phone. But most of those people show up in the Hub anyway.

- In Apr-Aug 2026, 69 of the 347 Hub rows with a phone (20%) were created within 10 minutes of an answered inbound call ending. The median gap is 75 seconds. The median call lasted about 2 minutes.
- Those rows look like normal website rows. They got a quote in a median of 8 minutes, against 49 minutes for other rows.
- So either Alex fills in the form after the call, or he asks the caller to. The data cannot say which. **Question for the owner.**
- Either way, about a fifth of "form leads" are really phone leads. Calls and forms must not be added together.

### Real leads, spring 2026

| Month | Hub rows | First-time people in the Hub | Likely-real callers not in the Hub | Text-first, not in the Hub | **Real leads** |
|---|---|---|---|---|---|
| Apr | 39 | 36 | 7 | 0 | **43** |
| May | 127 | 118 | 15 | 1 | **134** |
| Jun | 128 | 124 | 25 | 0 | **149** |
| **Total** | **294** | **278** | **47** | **1** | **326** |

- Range: 305 using the strict caller count, 345 counting all 66 callers.
- The Hub table starts on April 14, so April is a part month for forms.
- About 210 of the 326 are clearly in the GTA. That uses the 62% of Hub leads with a GTA address, and the 80% of those callers with a GTA area code. An area code is only a hint.
- By first touch: about 107 of the 326 (33%) started with a phone call. About 139 (43%) phoned us at some point.
- Not counted because I did not read them: emails to support@ and Facebook messages.

### Calls this year against last year

| | Apr 2025 | Apr 2026 | May 2025 | May 2026 | Jun 2025 | Jun 2026 |
|---|---|---|---|---|---|---|
| Inbound calls | 42 | 28 | 83 | 96 | 81 | 149 |
| New callers | 13 | 17 | 47 | 55 | 49 | 74 |

New callers in spring grew from 109 to 146, up 34%. Canadian site sessions in GA4 grew from 945 to 9,670 over the same months, about 10 times. So traffic grew far faster than calls. GA4 in 2025 may be incomplete, and paid ads ran for part of 2025 (see section 2), so read this as a hint only.

### Missed calls

| Window | Season | New callers with no earlier contact | First call answered | First call missed | Called or texted back within 1 hour | Within 24 hours | Ever | Never |
|---|---|---|---|---|---|---|---|---|
| Apr-Jun 2026 | spring | 137 | 86 | 51 | 23 | 36 | 40 | 11 |
| Jul-Aug 2026 | summer | 66 | 34 | 32 | 7 | 10 | 13 | 19 |
| Sep-Oct 2026 | off-season | 23 | 2 | 21 | 3 | 3 | 6 | 15 |

- 37% of first calls were missed in spring. 32 of those 51 came on weekdays between 8am and 6pm, when Alex is likely working.
- Spring callers whose first call was answered became customers 21% of the time (18 of 86). Those whose first call was missed: 10% (5 of 51). Small numbers, and not proof of cause.
- The voice line was reported down around June 10-12. June 10 shows 6 of 7 calls missed and June 11 shows 5 of 9.
- October shows 0 of 21 calls answered. That is off-season, but worth checking that the line is not going unattended.

### Calling and buying (Apr-Aug 2026)

| Path | Numbers | Became customers | Rate |
|---|---|---|---|
| Hub row, never phoned | 198 | 15 | 7.6% |
| Phoned first, then a Hub row | 102 | 29 | 28.4% |
| Hub row first, phoned after | 23 | 10 | 43.5% |
| Phoned, never in the Hub | 104 | 1 | 1.0% |
| **All** | **427** | **55** | **12.9%** |

- "Customer" means the phone is in the Hub's `customers` table. This gives 12.9%, higher than the 9% from the Hub's "paid" flag. The flag under-counts.
- 40 of the 55 customers (73%) phoned us. Buyers also phone more after deciding, so some of this runs backwards. But 29 of them phoned before there was any Hub row.
- The people who phoned and never reached the Hub almost never bought: 1 of 104. Many may have wanted a pest we do not treat, or lived outside the area. **The hidden calls are not hiding many customers.**

---

## 2. Google Business Profile

Read in the owner's Chrome. No sign-in was needed. I only looked and changed the date range on screen. Google offers May to October 2026 only, so **April 2026 is not available.** Earlier months show only as a percent change.

| Month 2026 | Season | Calls | Website clicks | Chat clicks | Bookings | Interactions | Against same month 2025 | Profile views | Searches listed |
|---|---|---|---|---|---|---|---|---|---|
| May | spring | 17 | 74 | 2 | 0 | 93 | -14.7% | 1,582 | 489 |
| Jun | spring | 16 | 67 | 6 | 0 | 89 | -19.8% | 1,580 | 444 |
| Jul | summer | 11 | 26 | 2 | 0 | 39 | -45.8% | 947 | 174 |
| Aug | summer | 3 | 10 | 0 | 0 | 13 | | | |
| Sep | off-season | 4 | 1 | 1 | 0 | 6 | | | |
| Oct | off-season | 1 | 9 | 1 | 0 | 11 | | | |
| **Total** | | **52** | **187** | **12** | **0** | **251** | | **5,370** | **1,222** |

- Chat clicks by month are worked out by subtraction. Aug-Oct views were 1,261 in total.
- **Direction requests:** Google shows no such figure for this profile. The tabs are Calls, Chat clicks, Bookings and Website clicks.
- 96% of profile views are on Google Search, not Maps. 77% are Search on a phone.
- Calls miss anyone who reads the number and dials by hand. So 44 calls in May-Jul is a floor. Even so, inbound calls that quarter were 359.

### The profile got weaker while the site grew (May-Jul 2026 against May-Jul 2025)

| | 2026 | 2025 (worked out from Google's percent) | Change |
|---|---|---|---|
| Interactions | 221 | about 292 | -24.3% |
| Calls | 44 | about 65 | -32.3% |
| Website clicks | 167 | about 227 | -26.4% |
| Profile views | 4,109 | about 5,683 | -27.7% |
| Searches listed | 1,107 | about 2,740 | -59.6% |

I do not know why. May views fell most (-47.2%). June calls fell from about 35 to 16.

### Top search terms that showed the profile (May-Jul 2026)

| Term | Searches | Term | Searches |
|---|---|---|---|
| mosquito buzz (a competitor) | 298 | tick and mosquito yard treatment | 53 |
| ontario mosquito control | 133 | mosquito and tick control near me | 37 |
| mosquito control | 132 | mosquito and tick control | 25 |
| mosquito spray | 130 | backyard mosquito control | 22 |
| tick control | 85 | mosquito spray company | 18 |
| tick control for yard | 73 | companies that spray for ticks | 17 |
| tick spray | 68 | backyard tick control | 16 |

- Google's total of 1,107 is exactly these 14 terms added up. The other 80 terms show only "under 15" and are left out. So the true total is between 1,107 and about 2,200.
- City searches are tiny here. "mosquito control mississauga" is under 15 in three months.

### Other things seen

- **Reviews: 139, rating 5.0, on Oct 30, 2026.** The site says "150+ five-star Google reviews" on many pages, and `lib/constants.ts` has `ratingCount: '150'`. The two disagree. Worth a look. I changed nothing.
- Google flags 2 new reviews to read and reply to. Photos were last added 108 days ago.
- **Two Google Ads campaigns exist, both paused:** "Mosquito Spray near Me" and "Phone Calls Campaign". Google rates the first ad's strength as Poor. I did not open Google Ads, because the brief covered the profile only. GA4 shows paid search only in June and July 2025 (74 sessions). So spring 2026 had no paid web clicks. A phone-call ad would not show in GA4, so only the Ads account can confirm its history.

---

## 3. Search demand in the GTA

### Warning: the raw numbers are mostly software

Rank-checking software runs Google searches automatically. Each check is logged like a real search. Our Search Console is full of it. The evidence, May-Jul 2026, Canada:

- **A monthly run.** On May 22, Jun 23, Jul 21, Aug 19 and Sep 28 the same 8 searches jump together (5 of them on Apr 22). On May 22, "mosquito control vaughan" got 183 phone impressions in one day. Three of those days hold 2,234 impressions.
- **Desktop only.** Many searches have no phone impressions at all. Real people here are 77% on phones, on two separate measures: profile views, and clicks on these same searches.
- **Impossible depth.** "mosquito control barrie" has 399 impressions at position 58, and no clicks.
- **Out of season.** "mosquito spray yard service" still logs desktop impressions every day from Oct 10 to Oct 29.
- **A phone-based run too.** Four "oakville ..." searches are 90%+ phone with no clicks. Three of them appear on nearly the same dates.

It kept running after the Ahrefs plan ended on Oct 25, so I cannot say whose it is. **Question for the owner.**

| Search (May-Jul 2026) | Raw impressions | Phone impressions, tool days removed | Raw position | Phone position |
|---|---|---|---|---|
| mosquito control | 1,224 | 190 | 11.5 | 6.6 |
| tick control toronto | 909 | 4 | 18.8 | 6.2 |
| mosquito control toronto | 748 | 107 | 16.4 | 4.6 |
| mosquito control vaughan | 593 | 18 | 8.1 | 5.7 |
| tick control near me | 510 | 32 | 8.7 | about 8 |
| mosquito control barrie | 399 | 0 | 58.1 | none |
| tick pest control toronto | 309 | 0 | 19.7 | none |
| mosquito control kleinburg | 185 | 0 | 3.4 | none |
| mosquito spray (looks real) | 146 | 118 | 3.5 | 3.1 |

Two things follow. **Our real positions are better than the raw report says.** And **real volumes are far smaller.** Any older note that quotes raw local impressions is too high, including "mosquito control ranks about 12-15".

### How I estimated real people

- Source: Search Console, Python pull, `country = can`, by query, date and device. Totals matched a plain query pull on the searches I spot-checked.
- Kept: searches about hiring someone for mosquitoes or ticks (control, spray company, near me, cost, city names). Dropped: products, repellent, bites, foggers, dunks and how-to questions.
- Two groups. **Hiring searches** clearly want a company. **DIY-or-hire searches** could be either, such as "mosquito spray" or "tick spray for yard".
- Real-person estimate = phone impressions, with tool days removed, divided by 0.77.
- Also removed: other Canadian places, the Oakville phone tool, and anything at position 20+ on phones.
- Result: 18,327 raw impressions became 7,551 estimated searches. That is 41%.

### Real-person estimate by month (2026, Canada, searches where we appear)

| Month | Season | Hiring searches | DIY-or-hire searches | Clicks on hiring searches |
|---|---|---|---|---|
| Apr | spring | 681 | 174 | 35 |
| May | spring | 1,914 | 453 | 52 |
| Jun | spring | 1,881 | 996 | 59 |
| Jul | summer | 1,320 | 987 | 29 |
| Aug | summer | 830 | 681 | 11 |
| Sep | off-season | 501 | 314 | 12 |

Hiring searches peak in May and June. DIY searches run later.

### By place (May-Jul 2026)

| Place named in the search | Raw impressions | Estimated searches a month, all | Hiring only | Clicks in 3 months | Position on phones |
|---|---|---|---|---|---|
| No place named | 10,484 | 2,170 | 1,479 | 137 | 6.9 |
| Ontario, no city | 490 | 109 | 94 | 3 | 6.6 |
| Canada, no city | 317 | 98 | 3 | 3 | 11.4 |
| Toronto, with Etobicoke, Scarborough, North York, "GTA" | 2,875 | 64 | 54 | 11 | 4.6 |
| Mississauga | 125 | 22 | 22 | 5 | 3.8 |
| Hamilton | 480 | 16 | 16 | 3 | 6.9 |
| Vaughan, with Woodbridge, Kleinburg | 1,311 | 15 | 15 | 1 | 6.8 |
| Oakville | 739 | 10 | 10 | 2 | 1.3 |
| Brampton | 256 | 5 | 5 | 1 | 3.8 |
| Caledon / King | 274 | 3 | 3 | 0 | 9.4 |
| Burlington | 20 | 3 | 3 | 1 | 2.2 |
| Milton | 38 | 1 | 1 | 1 | 2.0 |
| Markham, Richmond Hill | 0 | 0 | 0 | 0 | not shown |

- **City-named hiring searches total about 130 a month across the whole GTA.** That is about 2 per 100,000 residents (Census 2021 populations). Most people do not type a city.
- Markham and Richmond Hill show no named searches. The Markham page still got 450 impressions in those months, so searches exist there but Google hides the words.

### By service (May-Jul 2026, estimated searches)

| Service | May | Jun | Jul | Hiring only: May / Jun / Jul | Clicks | Position on phones |
|---|---|---|---|---|---|---|
| Mosquito | 1,253 | 1,472 | 1,716 | 1,128 / 1,235 / 1,100 | 118 | 6.3 |
| Tick | 831 | 1,200 | 516 | 602 / 534 / 194 | 38 | 8.3 |
| Both | 283 | 203 | 74 | 183 / 111 / 25 | 12 | 5.5 |

Tick hiring demand is strongest in May and fades by July. Mosquito hiring demand holds steady.

### Biggest real searches (May-Jul 2026, estimated searches a month)

| Top five on phones | A month | Position | Page one, below the top five | A month | Position |
|---|---|---|---|---|---|
| ontario mosquito control | 70 | 4.3 | mosquito control near me | 88 | 8.5 |
| mosquito control toronto | 48 | 4.6 | mosquito control | 85 | 6.6 |
| how much does it cost to spray for mosquitoes | 27 | 2.3 | tick control | 68 | 6.4 |
| how much does mosquito control cost | 23 | 2.1 | mosquito spray company | 56 | 7.4 |
| mosquito control mississauga | 22 | 3.8 | mosquito and tick control near me | 52 | 6.6 |
| mosquito and tick control | 17 | 1.5 | mosquito spraying near me | 48 | 7.9 |
| mosquito control oakville | 10 | 1.1 | tick control for yard | 40 | 6.6 |

All hiring searches in the top five on phones add up to about 565 a month. That is where impressions come closest to true volume, and it is a low floor.

Competitor names are extra: "mosquito buzz" and similar searches add about 370 in May and 860 in June. Own brand: 438 impressions and 174 clicks in the three months.

### Peak monthly demand for the GTA (estimate for May-June)

| Step | Searches a month | Basis |
|---|---|---|
| Hiring searches where we appear, May-June 2026 | 1,900 | **Measured** after cleaning |
| Keep the GTA part | 1,510 | City names all, Ontario half, no-place 80% (my judgment: Google shows these mostly near us, but cost questions run nationally) |
| Add a quarter of DIY-or-hire searches | 1,650 | Assumption |
| Add searches Google hides | 3,300 | x2 (1.5 to 3). Google names only 47% of impressions and 34% of clicks on our real service pages |
| Add parts of the GTA where we do not show | 4,950 | x1.5 (1.2 to 2). Judgment, not measured. Results depend on where the searcher stands, and we are based in Mississauga |
| Add Bing, DuckDuckGo and others | **about 5,500** | x1.1. GA4: other engines were about 12% of Google in May-June 2026 |

- **Low case 3,000. High case 11,000.**
- **April to June:** April's hiring searches ran at 36% of a peak month, so the spring total is about 2.4 peak months. That is **about 13,000 searches** (7,400 to 27,000).
- **People:** one shopper makes several searches. Assuming 2.5 each (not measured), that is **about 5,000 people shopping** (2,500 to 13,000).

### How rough is this?

Rough. Only the first line is measured. Every step after it is my judgment. If they all lean the same way the answer moves by 2 times. Trust the size, thousands a month and not tens of thousands. Do not trust the third digit.

One check supports the cleaning. The profile's term counts sit much closer to the cleaned numbers than to the raw ones:

| Term (May-Jul 2026) | Profile searches | Cleaned estimate | Raw impressions |
|---|---|---|---|
| mosquito control | 132 | 254 | 1,224 |
| tick control | 85 | 203 | 612 |
| mosquito spray | 130 | 153 | 146 |
| tick and mosquito yard treatment | 53 | 66 | 62 |
| companies that spray for ticks | 17 | 28 | 25 |

A Keyword Planner view or a short paid test in May would replace this guess with a real number.

---

## 4. The math of 2,000

### Inputs

| Input | Value | Where from |
|---|---|---|
| GTA searches, Apr-Jun | 13,000 (7,400-27,000) | Section 3, estimate |
| People shopping, Apr-Jun | 5,000 (2,500-13,000) | Section 3, assumption |
| Our organic click rate on hiring searches, by phone position | Top 3: 4.9%. 3-5: 3.4%. 5-10: 2.1%. 10-20: 0.8% | Measured, May-Jul 2026 |
| Leads per GTA service-page visit | 9-12%, use 10% | May-Jun 2026. GTA leads by address divided by GTA service sessions. An upper bound, because leads also come from other pages |
| Close rate | 12.9% overall | Measured by phone match, Apr-Aug 2026 |
| Close rate on low-effort leads | about 5-6% | Popup leads closed at 6.3%, season 2026 |
| Customer value | CA$1,031 average revenue | Season 2026, 62 customers. Older figure CA$1,222 |
| Google Ads | CTR 6.47%, CPC US$8.33, conversion 8.05%, CPL US$90.92 | LocaliQ benchmark, home improvement. US-heavy, not GTA |
| Facebook lead ads | CPC US$2.18, conversion 5.32%, CPL US$42.95 | LocaliQ benchmark, home improvement. US-heavy, not GTA |
| Share of clicks on local results | Organic 44-51%, map pack 29-32%, paid 15-25% | BrightLocal, 2018, a panel on San Francisco searches. Old and small |
| Local Services Ads | 14% of clicks. About $20-55 a lead | The same study. Prices come from vendors who sell the service, and the currency is often unstated. I treat them as US dollars |
| US dollar | CA$1.38 | Assumption |

No ad tests have been run for this business. All paid numbers are outside benchmarks and could be well off for the GTA.

### What each channel could give, spring 2027

Spring 2026 was about 326 leads with no ad spend. Which page brought which lead cannot be known for last season, because the Hub did not store the first page until mid-September.

| Channel | Spring 2026 | Realistic extra in 2027 | Upper limit | Could it supply 2,000 alone? |
|---|---|---|---|---|
| Everything we do now (organic, brand, direct, profile) carried forward | 326 | Total of 350-610 leads. From the earlier 400 Hub estimate (300-525) plus 16% for calls | | **No** |
| Better organic rankings | about 105 of the 326, from about 1,050 Google clicks to service pages | +40-100 | About 320 in total, even at top 3 everywhere in the high-demand case | **No.** 2,000 needs 20,000 clicks, more than all searches |
| Google profile / map pack | about 55 of the 326 (about 40 calls, about 165 site clicks at 10%) | +60-120 | About 700. Needs a top spot across the whole GTA from one address, which distance rules out | **No.** Even the limit is about a third |
| Phone calls | Not a source of demand. It is how people respond | +10-30 from answering every call | Same people as the other rows | **No.** Calls come out of the same pool |
| Google Ads | 0 | +100-220 for CA$15,000-30,000 | Limited by search volume | **No.** 2,000 needs 25,000 clicks, about twice all searches |
| Local Services Ads | 0 | +150-400 for CA$12,000-32,000, if offered | About 900 in the high case | **No.** Also unverified for GTA pest control |
| Facebook / Instagram lead ads | 0 | +300-1,000 for CA$18,000-59,000 | Budget, not searches | **Volume yes, profit doubtful** |
| Mail, door hangers, referrals | no data | not measured | | Needs a test |

My assumptions behind the limits: 70% of searches lead to a click. A business at the top of the map pack takes about half the pack's clicks, and half of those are calls. A top ad gets 12% of clicks at 85% coverage. Local Services Ads split three ways.

Search-based rows add up to about 710 to 1,480. The same shoppers overlap across them, so I would plan on **700 to 1,200 leads**. That is roughly 2 to 4 times last spring.

### What 2,000 would take

- **Share of demand:** about 1 lead for every 6 searches. That is about 40% of the people shopping (15% to 80% across the demand range). Last spring's 326 was about 6%.
- **The gap:** after 700-1,200 from search, 800 to 1,300 leads must come from outside search.
- **Cost:** 800-1,300 Facebook leads at benchmark cost CA$47,000-77,000. Add Google Ads and Local Services Ads and the total is **about CA$75,000-140,000 in 13 weeks.**
- **Customers:** about 1,000 search leads at 12.9% plus 1,000 bought leads at 5% gives about 180 customers. That is about CA$185,000 of first-year revenue, so ads would take 40-75% of it. It is about 3 times today's 62 customers and well inside two vans' roughly 410.
- **Facebook alone may lose money.** At CA$59 a lead and a 5% close rate, a customer costs about CA$1,180 against CA$1,031 in revenue. It works only if they renew or close better. Test small first.
- **Workload:** 2,000 leads is 28 a day in May and June. Last spring it was about 5 a day, and 37% of first calls were missed. About a third of leads start with a phone call, so this needs someone or something answering the phone from day one.

### Plain answer

- **2,000 does not fit inside search demand.** Organic, the map pack, calls and search ads together top out around 700 to 1,200 realistic leads.
- **It can be bought, at a price, with weaker leads.** It is not a free outcome of SEO.
- **The cheaper prize:** answer the phone. Callers who reached the Hub closed at 28-43%, against 7.6% for leads who never phoned. Part of that gap is buyers phoning more, but it is still the strongest signal in this data.

---

## 5. What I could not measure, and questions for the owner

| Open item | Why it matters |
|---|---|
| Who creates the Hub row right after a call: Alex or the caller? | Decides how many "form leads" are really phone leads |
| Whose rank-checking tool is this? It runs monthly on 8 searches and daily on desktop | It inflates Search Console by about 60% on local searches, and it is still running |
| What did the two paused Google Ads campaigns spend and return? | Real cost per call would replace the US benchmarks. Owner can check, or allow a read |
| Where do the other three-quarters of new callers come from? | The site, the van, referrals and word of mouth cannot be split. Tap tracking only began Sept 16, 2026, and has no spring data yet |
| April on the Google profile | Google offers May to October only |
| Are Local Services Ads offered for pest control in the GTA? | One agency blog lists pest control for Canada. No official confirmation found |
| Why did the profile fall 24-60% against 2025? | Could be the 2025 ads, a ranking change or something else |
| The site says 150+ reviews, Google shows 139 | Should match |
| Emails and Facebook messages | Not counted as leads here |

## Sources and files

Benchmarks:
- [LocaliQ, search advertising benchmarks](https://localiq.com/blog/search-advertising-benchmarks/)
- [LocaliQ, Facebook advertising benchmarks](https://localiq.com/blog/facebook-advertising-benchmarks/)
- [BrightLocal, Local Services Ads click study, 2018](https://www.brightlocal.com/research/local-services-ads-click-study/)
- [Niagara Stands Out, Local Services Ads in Canada](https://niagarastandsout.ca/blogs/business-resources/google-local-services-ads-for-contractors-pay-per-lead-guide-canada-2026) (agency blog, category list only)
- [Webtonic, pest control Google Ads statistics](https://www.webtonic.io/blog/pest-control-google-ads-statistics) (vendor page, Local Services Ads price range)

Internal numbers from the brief or earlier today: Hub leads by month, GA4 GTA sessions, 62% GTA by address, the 400 Hub estimate for spring 2027.

Scripts and scrambled data:
- `C:\Users\buzzs\AppData\Local\Temp\claude\C--Users-buzzs-buzzskito-website\346ad20e-f0cd-4fd1-a3b4-396de78eb0ad\scratchpad\lead2027\quo_pull.py`
- `C:\Users\buzzs\AppData\Local\Temp\claude\C--Users-buzzs-buzzskito-website\346ad20e-f0cd-4fd1-a3b4-396de78eb0ad\scratchpad\lead2027\quo_analyze.py`
- `C:\Users\buzzs\AppData\Local\Temp\claude\C--Users-buzzs-buzzskito-website\346ad20e-f0cd-4fd1-a3b4-396de78eb0ad\scratchpad\lead2027\hub_call_rows.py`
- `C:\Users\buzzs\AppData\Local\Temp\claude\C--Users-buzzs-buzzskito-website\346ad20e-f0cd-4fd1-a3b4-396de78eb0ad\scratchpad\lead2027\gsc_final.py`
- `C:\Users\buzzs\AppData\Local\Temp\claude\C--Users-buzzs-buzzskito-website\346ad20e-f0cd-4fd1-a3b4-396de78eb0ad\scratchpad\lead2027\demand_lib.py`
