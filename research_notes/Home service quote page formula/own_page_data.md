# What BuzzSkito's own data says about service pages, quote requests and paying customers

Written Nov 1, 2026. Read-only: GA4, Search Console, Hub counts, git history, the live site. Nothing was changed, submitted or pushed.

Seasons used in every rate below:
- **In season** = Apr 15-Jul 31, 2026 unless another window is named.
- **Off-season** = Sep 17-Oct 29, 2026. Off-season numbers are a floor, never a forecast.

## By landing page and page type, what share of Ontario sessions reach the quote page, start the form and become leads? What can GA4 measure? Why do main service pages run lower?

### Takeaway
GA4 can give one usable in-season measure, form starts per session by landing page. It cannot link leads to pages, and its in-season "reached the quote page" count is wrong. The "main service pages run at half the rate" finding does not hold up: the two main pages had 48 Ontario landing sessions in 3.5 months and almost no Google clicks, so they are a traffic problem first. City pages and the homepage are level once controlled, and the biggest measured gaps are search intent, geography and time of season, not layout.

### Cited Findings

**What GA4 can and cannot measure, in season**
- `generate_lead` is unusable in season: Ontario counts were Apr 3, May 0, Jun 0, Jul 1. `form_submit` does not exist. There is no thank-you page in the data. `click_to_call`, `click_to_text`, `quote_cta_click` and `form_error` start Sep 18-23 — [GA4 event pull][s1].
- `form_start` runs through the season (Ontario: Apr 69, May 123, Jun 109, Jul 61, Aug 28, Sep 12, Oct 19), so it is the only in-season step — [GA4 event pull][s1].
- **The page label on in-season `form_start` is unreliable.** Until the popup commit of May 19, the only forms on the site were on `/free-yard-assessment` and `/contact` — [git history][s5]. Yet in the five weeks from Apr 13 to May 17, GA4 labels 38 form-start sessions as fired on the homepage, against 31 on the quote page — [weekly pull][s5]. The session's landing page is still sound, so "form starts by landing page" can be used and "fired on" cannot.
- **In-season quote-page visits are undercounted.** May 27-Jul 31: 187 non-popup Hub rows, but only 175 GA4 quote-page sessions (all regions) and 64 form-start sessions labelled on that page — [period table][h2]. A lead cannot exist without a visit. Even removing the roughly 20% of rows that follow a phone call ([baseline][base]), about 150 leads remain against 64 tracked form starts on that page.
- Sessions in the other direction may be inflated: GA4 shows 13,573 Canadian `google / organic` sessions in season against 5,085 Search Console web clicks. By group: homepage 651 vs 258, mosquito city pages 155 vs 46, tick city pages 172 vs 19, articles 10,564 vs 4,506 — [GA4 and GSC pull][s5]. Search Console was pulled for web search only, so image search and Discover may explain part of it.
- 435 Ontario sessions have a landing page of `(not set)` (1% engaged). Another group has `(not set)` for new vs returning with about 0% engagement: homepage 137 of 946, mosquito city pages 44 of 246 — [GA4 cube][s3]. These may not be people. Without them the homepage is about 18.8 form starts per 100 and mosquito city pages about 19.8 (my arithmetic).
- Leads cannot be tied to landing pages in season: `landing_page` held the form's page (302 of 380 people `/free-yard-assessment`, 64 `/exit-intent-popup`) — [Hub counts][h2]. Since Sep 17 it holds the real first page, 12 of 12 rows: homepage 4, city pages 5 (Markham, Hamilton, Georgetown, Caledon East, Caledon tick), cost page 1, a cockroach article 2 (off-season, too small) — [Hub counts][h2].

**Rates by page type (Ontario, in season)**

| Landing page type | Sessions | GTA % | Phone % | Organic % | New % | Engaged % | Sec per session | Reach quote page per 100 (undercounted) | Form-start sessions per 100 (95% CI) |
|---|---|---|---|---|---|---|---|---|---|
| Homepage | 946 | 81 | 64 | 72 | 50 | 59 | 58 | 7.3 | 16.1 (13.9-18.5) |
| Mosquito city pages | 246 | 78 | 76 | 77 | 69 | 49 | 40 | 5.7 | 16.3 (12.2-21.4) |
| Tick city pages | 207 | 87 | 64 | 88 | 80 | 51 | 54 | 4.8 | 15.5 (11.2-21.0) |
| Main service (strict: `/mosquito-control` 23, `/tick-control` 25, near-me 10, 2 others) | 60 | 80 | 47 | 70 | 70 | 42 | 26 | 3.3 | 3.3 (0.9-11.4) |
| Pricing (`/mosquito-control-cost`, `/mosquito-control-pricing`) | 161 | 44 | 72 | 96 | 88 | 47 | 32 | 3.7 | 8.1 (4.8-13.3) |
| Quote page itself | 128 | 85 | 74 | 59 | 23 | 41 | 19 | 100 | 14.8 (9.7-22.0) |
| 33 lead posts | 1,216 | 80 | 76 | 82 | 86 | 51 | 52 | 0.2 | 0.5 (0.2-1.1) |
| 38 local info pages | 3,876 | 57 | 69 | 93 | 86 | 55 | 58 | 0.2 | 0.4 (0.2-0.6) |
| Other articles | 3,640 | 53 | 66 | 92 | 85 | 52 | 45 | 0.2 | 0.2 (0.1-0.4) |
| Other service-side, includes `(not set)` | 997 | 76 | 49 | 82 | 46 | 35 | 87 | 2.0 | 4.1 (3.0-5.5) |

Source: [GA4 cube][s3]. Total 11,493 sessions with 16 on lead tools. The brief's homepage 17.5 matches the GTA-only homepage cut here (17.5, 15.0-20.4). Its city figure 17.3 is close to GTA-only mosquito plus tick city pages (65 of 373, 17.4).

**Reproduction problem:** I could not reproduce "main service pages 9.4". The strict set gives 3.3 per 100 (2 of 60), and 2.1 per 100 in the GTA (1 of 48). Adding the cost, comparison and contact pages gets about 7 to 8 — [landing page list][s4].

**Controls, in season (GA4 cube)**
| Comparison | Crude ratio | Adjusted ratio (95% CI) | Counts |
|---|---|---|---|
| Mosquito city vs homepage, form starts | 1.01 | 0.90 (0.65-1.23) | 40/246 vs 152/946 |
| Main vs mosquito city, form starts | 0.21 | 0.13 (0.02-0.82) | 2/60 vs 40/246 |
| Main vs mosquito city, reach quote page | 0.59 | 0.57 (0.08-4.13) | 2/60 vs 14/246 |
| Main vs homepage, form starts | 0.21 | 0.10 (0.02-0.65) | 2/60 vs 152/946 |

Adjusted = Mantel-Haenszel, stratified by month, device, channel, new vs returning and GTA — [GA4 cube][s3]. The main-page result rests on 2 events.

**Other cuts inside one page type (in season)** — [GA4 cube][s3]
- Geography: homepage GTA 17.5 (n=770) vs rest of Ontario 9.6 (n=166). Mosquito city pages GTA 18.7 (n=193) vs rest 7.8 (n=51).
- Time of season: homepage Apr 27.8 (n=90), May 20.2 (n=287), Jun 16.3 (n=331), Jul 6.3 (n=238). Mosquito city pages Apr 8.6 (n=35), May 19.0 (n=58), Jun 17.6 (n=108), Jul 15.6 (n=45).
- Like for like: organic, GTA visitors only: homepage 17.2 (n=557), mosquito city 18.2 (n=154), tick city 16.5 (n=158), main 3.0 (n=33).
- New vs returning: homepage 22.2 (n=474) vs 14.0 (n=335).
- Same people, different intent: lead posts are 80% GTA and start forms at 0.5 per 100, against 16 to 19 for GTA visitors on city pages and the homepage.
- Single pages are too small to rank. Examples of form starts over sessions: Toronto mosquito 6/34, King City 1/32 (97% phone, 12% new, 19% engaged, so odd traffic), Oakville mosquito 3/31, Vaughan 5/20, Mississauga mosquito 1/14, Hamilton tick 5/29, Mississauga tick 5/27, Oakville tick 7/21 — [landing page list][s4]. No city page reaches 40 sessions.

**Search intent, Canada, in season (Search Console web clicks)** — [GSC pull][s5]
| Page group | Clicks | Impressions | Clicks by intent |
|---|---|---|---|
| Homepage | 258 | 8,858 | Brand 183 (71%), hire 56, other 13, competitor 3, info 3 |
| `/mosquito-control` | 0 | 493 | none |
| `/tick-control` | 2 | 321 | hire 1, other 1 |
| 19 mosquito city pages | 46 | 7,724 | Hire 39 (85%), price 3, other 2, brand 1, info 1 |
| 19 tick city pages | 19 | 3,701 | Other 10 (such as "ticks in mississauga"), hire 8, info 1 |
| `/mosquito-control-cost` | 33 | 1,098 | Price 29 (88%) |
| Articles | 4,506 | 298,043 | not split |

Impressions are inflated by rank-checking software, per the [baseline][base]. Treat them as an upper bound.

**What the pages looked like in season**
- At Jun 15, 2026 every service page already had a quote button and phone link in the hero, on `/mosquito-control` (lines 52-55 of 232), `/mississauga-mosquito-control` (lines 104-107 of 497) and the homepage hero — [git, Jun 15][git]. City pages had 2 to 3 direct quote links plus a mid-page bar; main pages had 1 plus the closing section — [git, Jun 15][git].
- The pages measured in season are not the pages live now. Package prices were hidden Apr 28, removed from the quote form May 27, the homepage was redesigned Jul 24, and the sticky Call / Text / Get price bar, price cards and shared form shipped Sep 17 — [git log][s5], [rebuild memory][rebuild].

### Inferences
- Form starts on the homepage and city pages are level (0.90, CI spans 1). There is no measured reason to think one template beats the other.
- The main-page gap is real as a direction but too thin to explain. Geography, channel and new vs returning do not close it, since those match or adjust the wrong way. First-button position does not explain it either, since every page had a hero button in June. Fewer quote links and weaker engagement (26 sec vs 40-58) remain possible. On phones alone, reach is 7.1 per 100 (2 of 28) against 6.9 and 6.8 on city pages, so even the direction is unclear there.
- **The practical answer: a better `/mosquito-control` cannot move spring leads unless it first gets traffic.** Search sent it almost nothing in 3.5 months: 0 web clicks in Search Console, 20 Google sessions in GA4. About two thirds of clean service-side Ontario sessions (1,399 of 2,064) landed on the homepage or a city page.
- The homepage rate should not be read as page quality: 71% of its Google clicks are people searching the brand name.
- The pricing page's lower rate is likely mostly geography and research intent: 44% GTA, 88% price questions.
- Intent is the largest gap: GTA readers on lead posts start forms 30 to 40 times less often than GTA visitors on service pages. Time of season is next (up to 4 times on the homepage), then geography (about 2 times). None of these is a layout effect.
- Given all this, the owner's data cannot validate a page formula. It can only say where a formula would be seen. Treat any formula as a sensible default, not a proven lift.

### Gaps
- Share of sessions that become leads, by landing page, in season: not measurable.
- The true in-season quote-page reach and form completion: not measurable. If completion was near the off-season 39-43%, GA4 caught under half of in-season form starts (my estimate).
- Whether the GA4 vs Search Console gap is real traffic, repeat sessions, bots or other Google surfaces: **not done.** Image search and Discover were not pulled.
- Reproducing the brief's "main service pages 9.4": **not done**, no page set I tried matched it.
- Query mix on the two main pages: not measurable with 0 and 2 clicks.

## How do phone taps compare with forms? How many leads come by call or text? What share of visits are on phones, and does the lead rate differ?

### Takeaway
Tap tracking has no in-season data, so calls versus forms by page type cannot be answered for spring. A call-first lead is common (about a third of spring leads). About half of those first-time callers also end up in the Hub, and those who do not almost never buy. Phones are about two thirds of Ontario visits. Desktop visitors start forms more often within each page type, and the lead rate by device cannot be measured.

### Cited Findings
- Off-season, all regions, whole site: `quote_cta_click` 43, `form_start` 41, `click_to_text` 14, `click_to_call` 13, `generate_lead` 10, `form_error` 9. Ontario only: 30, 26, 7, 8, 8, 6 — [GA4 cube][s3].

| Page type where the event fired (off-season, all regions) | Sessions on page | Quote clicks | Calls | Texts | Form starts | Leads | Errors |
|---|---|---|---|---|---|---|---|
| Quote page | 38 | 1 | 0 | 5 | 23 | 9 | 9 |
| Homepage | 488 | 9 | 2 | 1 | 6 | 1 | 0 |
| Main service | 64 | 4 | 0 | 0 | 1 | 0 | 0 |
| Mosquito city | 104 | 5 | 0 | 0 | 5 | 0 | 0 |
| Tick city | 27 | 2 | 0 | 0 | 2 | 0 | 0 |
| Other service-side | 187 | 4 | 4 | 3 | 0 | 0 | 0 |
| Local info | 1,075 | 2 | 3 | 0 | 1 | 0 | 0 |
| Articles | 18,494 | 14 | 4 | 5 | 2 | 0 | 0 |
| Pricing and lead tools | 30 | 2 | 0 | 0 | 1 | 0 | 0 |

- Tap location cannot be read: the code sends `link_location`, which is not a registered GA4 dimension, and the registered `location` comes back `(not set)` — [LeadClickTracker][lct], [GA4 cube][s3].
- Taps undercount calls: 13 call taps in the off-season window, against 45 inbound calls in Sep 1-Oct 27 — [GA4 cube][s3], [baseline][base]. The windows differ slightly.
- Spring 2026 from the earlier work: about 107 of 326 real leads (33%) started with a call, about 43% phoned at some point, 47 likely-real callers plus 1 texter never reached the Hub, and about 20% of Hub rows with a phone appeared within 10 minutes of an answered call — [baseline][base].
- Those who phoned and never reached the Hub almost never bought: 1 of 104, Apr-Aug — [baseline][base].
- Device, all Ontario sessions in season: phone 7,671 (66.7%), desktop 3,480 (30.3%), tablet 340 (3.0%) — [GA4 cube][s3]. Service side: phone 1,668, desktop 1,044, tablet 49. About 317 of those desktop sessions are the `(not set)` rows, so clean service-side share is about 67% phone (my arithmetic).
- Form starts per 100 by device, in season: homepage desktop 19.0 vs phone 14.5; mosquito city 24.1 vs 13.8; tick city 26.9 vs 9.8. Engagement, all Ontario: desktop 67% and 88 sec, phone 45% and 38 sec — [GA4 cube][s3].
- Off-season leads by device: phone 7, desktop 2, tablet 1, against form starts 21, 18, 2 — [GA4 cube][s3].

### Inferences
- The desktop lead over phones is not proof of a phone problem. The exit popup (from May 19) fires mainly on desktop mouse-exit, and desktop visitors stay longer, so a popup form start is cheap. Popup leads are also the weakest (next section).
- Off-season, phone completion (7 of 21) looks better than desktop (2 of 18), the reverse of form starts. Too small, and 4 of the desktop errors came in the first two days after launch, so they may be tests.
- Counting calls and forms together would double count. The earlier report's warning stands.

### Gaps
- Calls and texts by landing page in spring: no data. Spring 2027 is the first read.
- Lead rate by device in season: the Hub stores no device and GA4 has no in-season lead event.

## Which form errors happen, on which field, how many starters drop out, and is anything broken?

### Takeaway
The field cannot be read: `error_type` is sent but not registered in GA4, and registration is not retroactive. Of 21 off-season starters, 8 hit an error and only about 1 of those 8 finished, against about 8 of 13 who hit none. The sample is tiny. Address autocomplete worked on a phone-sized view when the field was tapped normally. One typed-too-early run left the dropdown hidden, and the field still accepts typed text.

### Cited Findings
- GA4's API refuses `customEvent:error_type` and `customEvent:form_name`. Registered custom dimensions are `above_fold`, `cluster_tag`, `link_kind`, `location`, `placement`, `position_index`, `search_term`, `target_slug` — [GA4 discovery][s1].
- The form does send them: `validation_<field>` for the first bad field, `http_<status>`, `network` — [QuoteForm][qf].
- Quote page, off-season, all regions: 38 sessions, 23 form starts (21 sessions), 9 leads, 9 errors (8 sessions). Hub rows for Sep 17-Oct 31: 12, against 10 GA4 leads site-wide, so GA4 caught about 80% of leads after the rebuild — [GA4 cube][s3], [Hub counts][h2].
- Error days on the quote page, off-season — [GA4 cube][s3]:

| Date | Device | Errors | Starts | Leads that day |
|---|---|---|---|---|
| Sep 18 | desktop | 3 | 3 | 0 |
| Sep 19 | desktop | 1 | 1 | 0 |
| Sep 20 | phone | 2 | 1 | 1 |
| Oct 3 | phone | 1 | 1 | 0 |
| Oct 19 | desktop | 1 | 1 | 0 |
| Oct 29 | desktop | 1 | 1 | 0 |

- By device: desktop 6, phone 3. By region: Ontario 6, elsewhere 3 — [GA4 cube][s3].
- The Hub route rejects only a missing name or email and an invalid service type (400), and answers 500 if the save fails — [Hub route][route]. The browser checks those fields first, so most errors should be validation.
- The form's five fields, in order: service (no default unless carried from a service page), address, name, mobile (optional), email — [QuoteForm][qf].
- Autocomplete tests, Nov 1, 2026, live quote page — [live test][live]:

| View | How | Google script loaded | Suggestions | Dropdown shown |
|---|---|---|---|---|
| Phone 375x812, mobile browser ID | Click on field, wait, type | Yes | 5 | **Yes** |
| Tablet 768x1024 | Focus, wait, type | Yes | 5 | Yes |
| 800x600 | Focus, type at once | Not at focus, yes after | 5 | Yes |
| Phone 375x812 | Focus, type at once, before script loaded | Not at focus, yes after | 5 | **No** (hidden) |

- On the phone view the dropdown sits below the field and covers Name and Mobile until a pick is made, and stops short of the sticky bar (dropdown 417-672 px, bar from 728 px) — [live test][live].
- Console showed no errors — [live test][live].
- At phone size the "Get my price" button's top edge sits at about 755 px, behind the sticky bar that starts at 728 px, so a visitor must scroll a little to see it on an 812 px screen — [live audit][live].

### Inferences
- A visitor who presses the button and gets an error mostly leaves: about 1 of 8 sessions, vs about 8 of 13 with no error (assuming the Sep 20 lead is the same visitor as that day's errors). Treat as a flag, not a rate: 4 of the 9 errors fall on two desktop days right after launch and may be tests. Without those, it is still about 1 of 4.
- A likely candidate is the service choice, since it is the first check and has no default. That is a guess until `error_type` is readable.
- Autocomplete is not broken. The hidden-dropdown run may be a timing race for someone who types before the Google script arrives, or it may be a tool artifact: the pane was hidden, and the same order worked at 800 px. It loses no lead, because the field works as plain text.

### Gaps
- Errors by field: **not available**. To fix, register `error_type`, `form_name`, `link_location` and `service_type` as custom dimensions in GA4 Admin. Free, about two minutes, forward only. Doing it before April matters most.
- iPhone Safari and real touch: **not done.** The tool sends mouse clicks (touch points reported 0).
- Microsoft Clarity recordings and heatmaps: **not done.** They may show what errors look like.
- In-season drop-off from the form: not measurable.

## From the Hub, what is the close rate by source, plan, lot size, city and time to first quote?

### Takeaway
Three things separate buyers clearly: giving a phone number, getting a quote at all, and not coming from the popup. Speed to quote looks helpful but does not survive scrutiny yet, because the fastest quotes go disproportionately to people who just phoned. Time of season is strong, and April's figure looks contaminated. City and lot size are too small to act on.

### Cited Findings
Counts only. Season = Apr 14-Aug 31, 2026. "Customer" = phone or email matches the Hub `customers` table. Rates are per unique person (first row), with 95% CI — [Hub counts][h2].

**Reference figures**
- 412 rows (349 with a valid phone by my 10-digit check; the brief says 351), 380 unique people, 36 rows with `status = paid`, 65 rows or 54 people matching a customer.
- Close rate: **recorded 8.7%** (36 of 412). **Audit 15.0%** (62 of 412) or 14.2% (54 of 380 people). 8 of 62 customers match no lead row. `customers.source`: Stripe 56, Jobber 4, manual 2.
- Revenue: CA$63,908 over 62 customers, CA$1,031 mean.
- Statuses across all 427 rows: quoted 308, new 83, paid 36. `lost_reason` is empty on all rows, `email_click_count` has one value, and `email_opened_at` is empty on all rows.

| Group, in season | n | Customers | Rate (95% CI) |
|---|---|---|---|
| Phone given | 320 | 52 | 16.2% (12.6-20.7) |
| No phone | 60 | 2 | 3.3% (0.9-11.4) |
| Quote form | 264 | 39 | 14.8% (11.0-19.6) |
| Quiz funnel (Apr 19-May 14) | 52 | 11 | 21.2% (12.2-34.0) |
| Popup | 64 | 4 | 6.2% (2.5-15.0) |
| Quote form, phone given | 232 | 37 | 15.9% (11.8-21.2) |
| Popup, phone given | 42 | 4 | 9.5% (3.8-22.1) |
| Popup, no phone | 22 | 0 | 0% (0-14.9) |
| Quote form, no phone | 32 | 2 | 6.2% (1.7-20.1) |
| Tick only | 35 | 9 | 25.7% (14.2-42.1) |
| Mosquito only | 148 | 19 | 12.8% (8.4-19.2) |
| Both | 197 | 26 | 13.2% (9.2-18.6) |
| Named service-area city in address | 206 | 29 | 14.1% (10.0-19.5) |
| Other or no city named | 174 | 25 | 14.4% (9.9-20.3) |
| Weekday 8am-6pm | 187 | 31 | 16.6% (11.9-22.6) |
| Weekday evening or night | 101 | 9 | 8.9% (4.8-16.1) |
| Weekend 8am-6pm | 60 | 10 | 16.7% (9.3-28.0) |
| Weekend evening or night | 32 | 4 | 12.5% (5.0-28.1) |

**By month of lead** — [Hub counts][h2]
| Month | n | Customers | Rate | Median minutes to quote | Never quoted |
|---|---|---|---|---|---|
| Apr | 36 | 12 | 33.3% | 9 | 0 |
| May | 118 | 16 | 13.6% | 27 | 10 |
| Jun | 124 | 17 | 13.7% | 46 | 11 |
| Jul | 72 | 7 | 9.7% | 99 | 23 |
| Aug | 30 | 2 | 6.7% | 82 | 15 |

**By city, 10 or more leads** — [Hub counts][h2]
Oakville 6/29 (20.7%), Mississauga 5/24 (20.8%), Hamilton 2/17 (11.8%), Burlington 1/12, Etobicoke 1/12, Markham 0/10. All others are under 10. 156 addresses name no city on my list (24 customers, 15.4%).

**Plan chosen (customers only)** — [Hub counts][h2]
| Plan | Customers | Mean paid | Median paid | Total |
|---|---|---|---|---|
| Basic | 24 | $701 | $640 | $16,834 |
| Standard | 23 | $1,509 | $1,455 | $34,696 |
| Tick only | 14 | $695 | $622 | $9,723 |
| Exclusive | 1 | $2,654 | $2,654 | $2,654 |
34 of 62 customers have tick. Zones: brampton-halton 17, north-toronto 14, mississauga 11, oakville-burlington 9, hamilton-niagara 7, far-east 3, guelph 1.

**Lot size, using the stored Standard-plan price as a stand-in, people quoted and with a phone** — [weekly pull][s5], [pricing table][price]
| Standard price (rough lot) | n | Customers | Rate |
|---|---|---|---|
| Under $994 (under 10K sq ft) | 95 | 15 | 16% |
| $994 (10K) | 28 | 4 | 14% |
| $995-1,287 (10-15K) | 78 | 14 | 18% |
| $1,288-1,667 (15-25K) | 42 | 10 | 24% |
| $1,668+ (25K+) | 27 | 7 | 26% |

**Time from lead to first quote** — [Hub counts][h2]
| Time | All people | Phone given | Phone + named city |
|---|---|---|---|
| Within 15 min | 20/108 (18.5%) | 20/91 (22.0%) | 14/54 (25.9%) |
| 15-60 min | 15/82 (18.3%) | 14/72 (19.4%) | 10/40 (25.0%) |
| 1-4 hours | 11/88 (12.5%) | 11/75 (14.7%) | 3/38 (7.9%) |
| 4-24 hours | 4/33 (12.1%) | 4/24 (16.7%) | 1/14 (7.1%) |
| Over a day | 2/10 | 1/8 | 0/6 |
| Never quoted | 2/59 (3.4%) | 2/50 (4.0%) | 0/18 (0%) |

- Median 42 minutes, 75th percentile 111, 90th 386. 59 of 380 people (15.5%) were never quoted — [Hub counts][h2].
- Phone given, within 60 min vs later: 34/163 (20.9%) vs 16/107 (15.0%), ratio 1.39 (0.81-2.39, my calculation). Named-city addresses: 24/94 vs 4/58, ratio 3.7 (1.35-10.1). Other addresses: 10/69 (14.5%) vs 12/49 (24.5%), reversed — [Hub counts][h2], my arithmetic.
- After-hours arrivals with a phone, within 60 min vs later: 12/63 (19%) vs 8/61 (13%) — [weekly pull][s5].
- Rows created right after an answered call get a quote in a median of 8 minutes, against 49 for others, and phoned-first people close at 28.4% — [baseline][base].

**Natural experiments on the quote page, 12-day windows side by side** — [weekly pull][s5]
| Window | Page version | GTA service sessions | Non-popup rows | Rows per 100 sessions | Phone % | Customers | Close % |
|---|---|---|---|---|---|---|---|
| May 3-14 | Quiz | 116 | 31 | 26.7 | 84 | 1 | 3.2 |
| May 15-26 | One page, package prices | 264 | 54 | 20.5 | 89 | 13 | 24.1 |
| May 27-Jun 7 | One page, no prices | 268 | 69 | 25.7 | 86 | 12 | 17.4 |
| Jun 8-19 | Same | 231 | 41 | 17.7 | 93 | 9 | 22.0 |
| Jun 20-Jul 1 | Same | 173 | 26 | 15.0 | 85 | 2 | 7.7 |

- Removing package prices from the form on May 27: rows per 100 sessions 20.5 to 25.7 (z about 1.45, not significant), customers per 100 sessions 4.9 to 4.5. A popup expansion shipped the same day — [git log][s5], my arithmetic.
- The quiz's high close rate falls apart inside its own window: Apr 19-May 2, 15 of 32 rows (47%), May 3-14, 1 of 31 (3.2%) — [period table][h2], [weekly pull][s5].

### Inferences
- **Getting a quote out is the clearest lever in the Hub data.** Never-quoted people almost never buy, and that group is 9% of people in May-June but 32% in July and 50% in August. Part of this runs backwards (bad addresses, out of area, no reply), but those are cheap to separate next season if `lost_reason` is filled in.
- **Speed: not proven.** The gap is weak on all phone leads, strong in one subset and reversed in the other, which looks like noise. A rough check: if the roughly 69 after-call rows all sit in the 60-minute band and close at 28.4%, removing them leaves about 14 of 94 (14.9%), level with the 15.0% for later quotes. So the speed gap could be entirely people who already phoned. Going from a median of 42 minutes to 10 is not supported as a profit driver here.
- Popup leads are weak mainly because of who they are, but a phone-given popup lead still closes at about 0.6 of a form lead (small numbers).
- The earlier claim that clearly GTA leads close better than others (14% vs 9%) mixes two definitions. On the same definition they are equal, 14.1% vs 14.4% by match and 8.7% vs 8.6% by paid flag. The "other" group mostly looks like real customers whose address names no listed city.
- April's 33% should not be taken as normal. Some April customers may be returning 2025 customers. The renewal base was not separated.
- Larger lots close at least as well as small ones despite higher prices (15.4% at $994 or less vs 24.6% at $1,288 or more; ratio 1.6, CI 0.89-2.86). A hint that price is not the first objection, not proof. People who talk to Alex may also have better-measured lots.
- The site calls Standard "most popular". By count, Basic and Standard are tied (24 vs 23); by revenue Standard is 54%. That is a question for the owner, not a copy change.
- Evening leads close at about half the daytime rate, in weekday data only. Alex's reach by phone at that hour may be part of it.

### Gaps
- Phoned-first control on speed: **not done.** The saved call file uses a random salt that was not kept, so it cannot be joined, and the call-system key was outside this brief. A 20-line rerun with that key would settle this.
- Close rate by landing page: no in-season data.
- `plan` on unsold leads: not stored, so "plan chosen" covers buyers only.
- True lot size: not stored as a field. Price is a stand-in, and some prices were hand-edited.
- Lost reason: empty on all rows.
- Returning vs new customer: not separated.

## Live audit on a phone-sized view: first screen, first button, where price, reviews and guarantee sit, length, competing links, speed

### Takeaway
Service templates now put a clear button, licence line and reviews in the first screen. The weak spots are the homepage's first screen, the 40-screen city pages, a submit button hidden behind the sticky bar on the quote page, and slow load. None of the live layouts has any in-season data.

### Cited Findings
375x812 emulated phone, Nov 1, 2026, after 3 seconds. Positions are in screens from the top (1.0 = one 812 px screen). "In-page" excludes header, footer and the fixed bar. The sticky bar starts at 728 px, so anything at about 0.9 or lower is hidden behind it — [live audit][live].

| | Quote page | Homepage | /mosquito-control | /tick-control | Mississauga mosquito | Toronto mosquito | Oakville tick |
|---|---|---|---|---|---|---|---|
| Page length, screens | 9.3 | 20.9 | 22.3 | 20.0 | 39.0 | 41.9 | 22.5 |
| Words | 636 | 1,494 | 1,956 | 1,977 | 5,031 | 5,629 | 2,341 |
| First in-page button | Form, submit at 0.93 | Get a Free Quote at 0.9 (behind bar) | Get my price at 0.7 | Get my price at 0.7 | Get my price at 0.7 | Get my price at 0.7 | Get my price at 0.8 |
| Price first seen | 1.4 | 4.2 | 0.9 (behind bar) | 0.9 (behind bar) | 0.4 (headline) | 0.4 (headline) | 0.4 (headline) |
| Reviews first seen, in page | 0.2 | 1.2 | 0.8 | 0.9 | 0.4 | 0.4 | 0.4 |
| Guarantee first seen | 0.2 | 1.2 | 0.9 | 0.9 | 0.9 | 0.9 | 1.0 |
| Licence first seen | 2.2 | 3.0 | 0.5 | 0.5 | 0.5 | 0.5 | 0.5 |
| Same-day line first seen | 1.0 | 16.1* | 4.9 | 7.8 | 15.7 | 11.8 | 10.8 |
| Phone number in text | 1.1 | 1.0 | 6.4 | 7.9 | 1.7 | 1.6 | 1.7 |
| FAQ | | 13.2 | 16.0 | 13.7 | 32.1 | 35.1 | 16.3 |
| In-page quote / call / text links | 0 / 2 / 2 | 2 / 4 / 1 | 6 / 6 / 5 | 5 / 5 / 5 | 8 / 6 / 6 | 8 / 6 / 6 | 6 / 4 / 5 |
| Other in-page links | 2 | 42 | 68 | 44 | 20 | 49 (low confidence) | 14 (low confidence) |
| H2 headings | 4 | 12 | 11 | 10 | 23 | 21 | 18 |
| Images | 3 | 16 | 4 | 4 | 4 | 4 | 4 |

*The homepage hero text, once visible, includes "Ontario-licensed operator" and "Most requests get a price the same day" at about 0.7-0.85 screens. The licence and same-day entries above missed it because the text was transparent at measurement.

Every page also has a header and footer with about 72 to 74 links plus 9 external ones. A sticky strip reads "5.0, 150+ Google reviews, Rain-back guarantee on every plan" above Call / Text / Get price (Call / Text on the quote page).

**Address check on these readings.** Each audit reading records the address it was taken on, and all match the page named in its column. The shared browser pane was reopened once between runs, so its tab had been closed, possibly by another agent. The run straight after that had a zero-size viewport (width 0) and was thrown away, and Toronto and Oakville were re-measured at 375x812. Positions, length, words and button totals (20 and 15) for those two come from the good run. Their "other links" and the quote / call / text split come from the zero-size run: the split adds up to the confirmed totals, but the other-links counts may be low. H2 and image counts do not depend on viewport size.

**First screens as seen**
- Quote page: logo, "Get Your Free Custom Quote", the star strip, then all five fields. Good. No promo banner. The button needs a small scroll.
- Homepage: promo banner ("Refer a friend, you both get 20% off"), press strip, then **only a photo** for at least the first 4 seconds. Headline transparent at 1.0 and 4.0 seconds in the phone run. Fully visible at 10.1 seconds in one run, still transparent at 10.1 seconds in another. The hero button then sits at about 737-753 px, behind the sticky bar, so the only visible buttons are in the bar — [live audit][live].
- `/mosquito-control`: both banners, headline, licence line, large "Get my price", Call, Text us, reviews, rain-back chip. "From $99" just under the bar.
- City pages: both banners, headline with "From $99, 150+ Five-Star Reviews", licence line, button. Call and Text at about 0.8.
- The two banners take about 135 px of the first screen on the pages screenshotted, except the quote page.

**How far people scrolled in season** — sessions with a 90% scroll event, by device (Ontario, in season; old templates): mosquito city phone 5 of 188, tick city phone 2 of 133, homepage phone 48 of 608, homepage desktop 93 of 332 — [GA4 cube][s3].

**Speed, Nov 1, 2026.** One run per page, Lighthouse mobile, slow 4G simulated. The script recommends 3 runs — [speed run][speed].
| Page | Score | LCP | First paint | Blocking | LCP element |
|---|---|---|---|---|---|
| Quote page | 64 | 4.36 s | 3.07 s | 609 ms | H1 text |
| Homepage | 52 | 9.59 s | 3.34 s | 626 ms | Hero photo |
| /mosquito-control | 71 | 4.73 s | 3.19 s | 266 ms | Hero photo |
| Mississauga mosquito | 67 | 4.67 s | 3.20 s | 388 ms | Hero photo |

The script flagged the first two runs as possibly late (first paint over 800 ms unthrottled). For comparison, the article template measured 3.2 s on Oct 12 — [CLAUDE.md][claude]. Third-party blocking: Google tag 160-268 ms, Facebook 138-275 ms, Clarity 58-89 ms, Google Maps 201 ms on the quote page, Google ads 134 ms on the homepage.

**Gap list for the live pages** (not ranked by proven lift, since none exists)
| # | Gap | Where | Exposure in season | Basis |
|---|---|---|---|---|
| 1 | Headline may stay invisible for seconds on phones; only a photo shows | Homepage | 946 sessions, the largest service page | Measured in a hidden pane, must be checked on a real phone |
| 2 | Hero button behind the sticky bar at 812 px | Homepage | Same | Measured |
| 3 | Price not seen until 4.2 screens | Homepage | Same | Measured. Whether showing it earlier helps is untested |
| 4 | Homepage LCP about 9.6 s simulated, the hero photo | Homepage | Same | One run |
| 5 | Submit button behind the sticky bar at 812 px; hidden sooner on shorter phones | Quote page | Every form lead | Measured |
| 6 | 39-42 screens on top city pages; FAQ past screen 32 | Mississauga, Toronto | 48 sessions on those two | Measured. Length was not shown to hurt, since the old 90% scroll is only a hint |
| 7 | "From $99" just hidden on main pages, in the headline on city pages | Main pages | 48 sessions | Measured |
| 8 | "150+ Google reviews" on the quote page and sticky strip, 139 on Google on Oct 30 | All service pages | All | Owner decision below |
| 9 | "24 to 48 hours" on `/mosquito-control` vs "3-5 business days" on near-me pages | Main pages | Low | Code |
| 10 | "Same-day" promise first seen at 4.9-15.7 screens on main and city pages | Those pages | 500 sessions | Measured |
| 11 | Banner promises 20% off, while the business rule is to pay in sprays, not dollars | All but quote page | All | Owner decision below |
| 12 | `error_type`, `form_name`, `link_location` unregistered; `generate_lead` not a key event | GA4 | All | Measured |
| 13 | `lost_reason` empty; no device or test arm stored | Hub | All | Measured |

### Inferences
- Items 1, 2 and 5 are simple to check and do not need a test: on the owner's phone, does the homepage headline appear within a second or two, and can the button be seen?
- City pages at 40 screens may have grown for search. Do not cut them for conversion alone; the sticky bar already keeps a button in view at any depth.
- The service page differences that remain (price position, length, link count) are not explained by any measured result. They should go into the next-season test, not be treated as known leaks.

### Gaps
- Homepage reveal timing: **not done.** The pane can run in the background, where timing can be off, and the hero's animation code was not traced. Needs a look on a real phone.
- Real-user speed: only the owner can open Vercel Speed Insights.
- Three-run median speed: not done, one run only.
- Desktop audit: not done.
- Audit of the other 15+ city pages: not done. They share a template, but pages differ widely in length.

## What would a 25%, 50% and 100% lift in visitor-to-lead rate be worth next spring, and how many visits does a coin-flip test need?

### Takeaway
At 400 spring leads, a 50% lift is worth about 17 to 30 customers, about CA$18,000 to CA$31,000 in revenue. In one season, a coin-flip test can read a lift of about 35-70% in quote requests on the whole service side, about 25-50% on the quote page itself, and almost never in paying customers. So only a few big-swing tests are worth running.

### Cited Findings
- Spring form rows: 294 in Apr-Jun 2026, about 400 expected in 2027 with no new work (range 300-525) — [what works][works].
- Close rates: recorded 36/412 = 8.74%; audit 62/412 = 15.05%. Revenue CA$1,031 mean; about CA$850 first-season worth per customer at that average — [Hub counts][h2], [what works][works].

**Value, Apr-Jun 2027 (my arithmetic)**
| Lift | Extra leads on 400 | Customers at 8.7% | Revenue | Customers at 15.0% | Revenue | If extra leads close like popup leads (6.3%) | On 294 base: customers at 8.7 / 15.0% |
|---|---|---|---|---|---|---|---|
| +25% | +100 | +8.7 | CA$9,000 | +15.0 | CA$15,500 | +6.3, CA$6,500 | +6.4 / +11.1 |
| +50% | +200 | +17.5 | CA$18,000 | +30.1 | CA$31,000 | +12.6, CA$13,000 | +12.8 / +22.1 |
| +100% | +400 | +35.0 | CA$36,000 | +60.2 | CA$62,100 | +25.2, CA$26,000 | +25.7 / +44.2 |

**Visits available, 2026 traffic (Ontario GA4, service-side landing, excluding data pages and `(not set)`)** — [weekly pull][s5]
- Apr 15-Jul 31: 2,064 sessions, 1,617 in the GTA.
- May-June: 1,057 GTA sessions, against the brief's 1,583; that figure likely includes pages I excluded.
- GTA sessions per week: 50, 98, 82, 59, 115, 133, 149, 186, 143, 113, 99, 102, 103, 88, 81, 56 for the weeks of Apr 13 to Jul 27.
- Hub rows per 100 GTA service sessions, Apr 15-Jul 31: 22.9 all rows, 12.7 where the address names a service-area city. Neither is a clean rate: rows include article visitors, call follow-ups and out-of-area people, and sessions are uncertain.

**Total visits for a 50/50 test (two-sided 5%, 80% power)** — [sample sizes][s4]
| What is measured | Base rate | +25% | +50% | +100% |
|---|---|---|---|---|
| Quote requests per visit | 16% | 2,888 | 777 | 215 |
| | 10% | 5,007 | 1,365 | 392 |
| | 5% | 10,658 | 2,935 | 863 |
| | 3% | 18,193 | 5,028 | 1,491 |
| Paying customers per visit | 16% x 15% | 22,903 | 6,336 | 1,883 |
| | 10% x 15% | 37,031 | 10,261 | 3,061 |
| | 10% x 8.7% | 64,313 | 17,839 | 5,334 |
| | 3% x 8.7% | 215,879 | 59,941 | 17,965 |
| Leads per quote-page visit (my calculation) | 45% | 612 | 145 | 26 |
| | 24% (off-season) | 1,711 | 450 | 118 |

**Smallest lift readable in one season at 1,600 GTA visits (my calculation):** about +34% at a 16% base, +46% at 10%, +70% at 5%. Paying customers: about +150% at 1.5%, about +220% at 0.87%. Doubling traffic takes the 10% case to about +32%.

**What can realistically be tested in spring 2027**
| Test | Metric | Read |
|---|---|---|
| Quote-form change (fields, default service, button) | Leads per quote-page visit | Best bet. All non-popup web leads pass through it, about 700-1,300 visits in season if completion is 24-45% (my estimate from about 310 non-popup rows). +50% readable, +25% borderline |
| One big change to the homepage and city template (hero and price) | Leads per session, quote clicks as early signal | +50% takes most of the season at a 10% base; +100% takes about 3 peak weeks |
| Popup on vs off | Leads, phone share | Leads yes. Customers no |
| Phone required vs optional | Leads and phone share | Leads yes. Customers no, the reason for testing it |
| Anything judged by paying customers | | No, except a 2.5 to 3 times lift |
| Small copy changes, single city pages, main pages | | No, too little traffic |
| Season over season by page type, GTA, device and month, same definitions | Form starts per 100 | Always available, weak, because season and rankings move too |

### Inferences
- Run two tests at most in spring, set the length before starting, and do not stop early at a good-looking number.
- Judge page tests on quote requests. Judge customers separately over the whole season.
- Do the setup before April: register the GA4 fields, make `generate_lead` a key event, store the device and test arm with the lead, and fill in `lost_reason`.
- A split must not change what Google sees, and service pages must keep passing the site's SEO parity check. How to do this on this site was not designed here.
- Money from the quoting side may be easier: the 50 never-quoted people with a phone, closing like other quoted phone leads (18.5%), would be about 6 to 8 more customers (rough, some were not servable).

### Gaps
- True visitor-to-lead rate per real visitor: unknown, likely 5-20%. Hence the range above.
- 2027 traffic forecast for service pages: not built here.
- Serving capacity: 5 vs 15 stops a day is still open — [what works][works].

## Which facts are approved for these pages, and what awaits owner decisions?

### Takeaway
There is a short approved set in `lib/constants.ts` plus several operating facts the owner confirmed. Most open items are wording decisions, which a formula rollout would touch, so they should be asked before copy is written.

### Cited Findings
**Approved in code, `PROMISES`** — [constants][const]
- "Most requests get a price the same day." (Deliberately conservative: median quote about 42 minutes; [Hub][h2] confirms 42 in season.)
- "Rain within 1 hour of your treatment? We come back and re-treat free, on every plan." Short form: "Rain-back guarantee on every plan". Owner-confirmed Sep 14, 2026.
- "Bite-Free Guarantee on Standard & Exclusive plans". Every mention must carry that scope.
- "Ontario Pesticide Operator Licence L-240-2436835197".
- "Products applied according to label directions".
- "We book a visit window, never an exact arrival time."

**Also confirmed or on file**
- $99 single treatment on a standard lot, under 10,000 sq ft; Basic $549, Standard $994, Exclusive $2,049; tick $597 standalone, $497 bundled; 5 tick sprays — [constants][const], [CLAUDE.md][claude].
- 19 GTA cities, owner-confirmed — [funnel research][funnel].
- Same-week service, first tick treatment within 3-5 business days, "As Featured In Toronto Star, CityNews, TorontoToday" — owner-confirmed, Sep 15, 2026, do not remove — [business facts][facts].
- 150+ reviews stays, owner, Nov 1, 2026 ("We have 150 with other reviews too") — [funnel research][funnel].

**Not allowed:** "Health Canada approved" or "registered" (DIR2016-01), "safe for kids & pets", "30-Day Protection", "Lyme disease prevention" — [funnel research][funnel].

**Awaiting the owner**
| Item | Why it matters | Source |
|---|---|---|
| "150+ Google reviews" vs "150+ reviews": Google showed 139 on Oct 30 | Sticky strip and quote page say Google | [funnel research][funnel], [baseline][base], [live audit][live] |
| `/mosquito-control` "24 to 48 hours" vs near-me "3-5 business days" | Both live | [rebuild][rebuild], [code][claims] |
| Whether Exclusive includes tick (usually separate, sometimes added) | Price cards | [rebuild][rebuild], [business facts][facts] |
| "No contracts": listed as unconfirmed in the Sep 14 plan, but live on service pages and in the closing section | Trust line | [funnel research][funnel], [code][claims] |
| Referral offer: live banner says "you both get 20% off"; the rule says pay in sprays | Top of nearly every page | [Header][hdr], [CLAUDE.md][claude], [funnel research][funnel] |
| Bite-Free terms, HST wording, label re-entry wording | Guarantee and price copy | [funnel research][funnel] |
| Popup kept, mobile popup banner or off | Closes at 6.2%, in season | [funnel research][funnel], [Hub counts][h2] |
| Comparison pages, photos and reviews, June-July quoting rule | 32% and 50% of July and August people were never quoted | [funnel research][funnel], [Hub counts][h2] |
| GBP website link UTM, optional Hub migration | Measurement | [rebuild][rebuild] |
| Stops a day, 5 or 15 | Capacity and how many leads are useful | [what works][works] |
| Standard labelled "most popular" (24 Basic, 23 Standard by count) | Pricing copy | [CLAUDE.md][claude], [Hub counts][h2] |

### Inferences
- A "no contracts" or "Standard is most popular" line should be asked about in one short question, not changed, per the owner's rule on business facts.
- The "As featured in" entry in the older plan's "never publish" list is out of date: the owner confirmed it the next day.

### Gaps
- I did not re-verify each open question with the owner. Some may have been settled in conversations not recorded in the files read.
- Run notes: my audit added about 25 page views (including 4 Lighthouse loads) and 4 `form_start` events to GA4 on Nov 1, 2026, plus a few Google address lookups, from typing a public address (100 Queen St W) in the field without submitting. Viewport reset and temporary browser storage removed. I closed the pane's last tab at the end, as the brief asked, so any other agent using that shared pane must reopen it. The run used about 55 tool calls, over the 40 asked for, partly because the phone view reset between steps and one script crashed.

[s1]: <file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/oppd/s1_discover.py> "GA4 property 463652856, Ontario events by month, read Nov 1, 2026"
[s3]: <file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/oppd/s3_analyze.py> "GA4 cube: month, landing page, device, channel, new vs returning, city. Script s2_pull.py, analysis s3_analyze.py"
[s4]: <file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/oppd/s4_more.py> "Landing page lists and sample sizes"
[s5]: <file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/oppd/s5_final.py> "Weekly funnel, adjacent windows, Search Console by host and intent, git timeline, Hub lot and speed cuts"
[h2]: <file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/oppd/h2_hub.py> "Hub leads and customers tables, counts only"
[speed]: <file:///C:/Users/buzzs/buzzskito-website/scripts/measure-speed.mjs> "Run Nov 1, 2026 from the scratch folder, reports in scratchpad/oppd/.lighthouse/oppd"
[live]: <https://buzzskito.ca/free-yard-assessment> "Built-in browser, 375x812 emulation, Nov 1, 2026. Also /, /mosquito-control, /tick-control, /mississauga-mosquito-control, /toronto-mosquito-control, /oakville-tick-spray"
[git]: <file:///C:/Users/buzzs/buzzskito-website/app/mosquito-control/page.tsx> "git history, commit f075a57c as of Jun 15, 2026, read with git show"
[base]: <file:///C:/Users/buzzs/buzzskito-website/reports/lead-explosion-2027/01-baseline.md> "Lead baseline, Oct 30, 2026"
[works]: <file:///C:/Users/buzzs/buzzskito-website/reports/lead-explosion-2027/03-what-works.md> "What works, Oct 30, 2026"
[funnel]: <file:///C:/Users/buzzs/.claude/projects/C--Users-buzzs-buzzskito-website/memory/project_quote_funnel_research.md> "Quote funnel research memory"
[rebuild]: <file:///C:/Users/buzzs/.claude/projects/C--Users-buzzs-buzzskito-website/memory/project_quote_funnel_rebuild.md> "Quote funnel rebuild memory"
[facts]: <file:///C:/Users/buzzs/.claude/projects/C--Users-buzzs-buzzskito-website/memory/feedback_dont_remove_business_facts.md> "Owner's rule on business facts"
[const]: <file:///C:/Users/buzzs/buzzskito-website/lib/constants.ts> "PROMISES, PRICING, BUSINESS"
[qf]: <file:///C:/Users/buzzs/buzzskito-website/components/QuoteForm.tsx> "Shared quote form"
[lct]: <file:///C:/Users/buzzs/buzzskito-website/components/LeadClickTracker.tsx> "Tap tracking, link_location parameter"
[hdr]: <file:///C:/Users/buzzs/buzzskito-website/components/Header.tsx> "Referral banner, line 105"
[claims]: <file:///C:/Users/buzzs/buzzskito-website/app/mosquito-control/page.tsx> "Line 26, 24 to 48 hours; app/mosquito-control-near-me/page.tsx line 29, 3-5 business days; components/CTASection.tsx line 69, No contracts"
[route]: <file:///C:/Users/buzzs/buzzskito-hub/src/app/api/quote-request/route.ts> "Hub intake route"
[price]: <file:///C:/Users/buzzs/buzzskito-hub/src/lib/pricing.ts> "Hub price matrix by lot size"
[claude]: <file:///C:/Users/buzzs/buzzskito-website/CLAUDE.md> "Project context"
