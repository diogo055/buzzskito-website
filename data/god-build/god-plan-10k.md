# THE GOD PLAN: 10,000+ Google visitors a day (written Nov 3, 2026)

The owner's goal (Nov 3, 2026): "10,000+ organic visitors a day... 10x the Amazon clicks... as many Amazon pages and Mediavine pages in the top three as possible... every day after today I want to just be like, go, and you know exactly what to do... and you index all the pages that need to be indexed."

Research behind it, all Nov 3, 2026:
- `research_notes/God plan 10k a day/`:
  - `targets.md`: top-3 push list, new pages, family scale map
  - `amazon_targets.md`
  - `top3_tactics.md`: what measurably works
  - `index_status.md`
  - Keyword Planner volumes, when the agent finishes
- `reports/growth-plan-2000-sessions-2026-11-03.md`
- `reports/Images and safe traffic growth 2026.md`
- `reports/google-trust-audit-2026-11-03.md`

---

## 0. "GO": what Claude does every day

When the owner says **go**:

1. **Read** this file's Build queue and Push queue, the Log at the bottom, and the guardrails (section 8).
2. **Indexing.**
   - The scheduled task "daily-request-indexing" runs at 9:10 and requests 10-12 pages from `data/god-build/indexing-queue.md`.
   - Check `list_task_runs`. If it didn't run, or is stuck, do it in the owner's Chrome. Method: Search Console > "Inspect any URL" box (clear it with its X first) > Request indexing. Then mark the lines `requested YYYY-MM-DD`.
3. **Build:** the next pages from the Build queue (section 4), in order, up to the room under the pace cap.
   - The cap is 10 new pages a day and 25 in any 7 days, counting `data/god-build/releases/*.md` plus hand-written pages.
   - Each page: beat-the-top-3 research, real credited photos (first figure public domain or CC0), fact-check record, `validate-guide`, register, guards.
   - Skip a page that is blocked (no usable photo yet) and note why.
4. **Push:** the next 3-5 pages from the Push queue (section 3), with the checklist in section 5.
   - Log every change with its date for the 4-6 week read.
   - Respect the locks in section 8.
5. **Ship.**
   - `npm run build` with every guard in the build worktree.
   - Push to `diogo` main, never 12:15-12:45 UTC.
   - Verify live.
   - Add every new or upgraded page to the top of `indexing-queue.md`.
6. **Log** what was done and what's next (section 9), then report to the owner in under 10 lines.

**Every Monday:** a Search Console and GA4 read.
- New-page cohorts at 8-12 weeks (Lily Ray's pattern: sites that fell did so 3-6 months after their page-count peak).
- Pushed pages against similar untouched pages.
- Amazon clicks per 1,000 product sessions.
- The not-indexed list.
- Re-rank the queues.

**On the 3rd of every month:** the goal check runs (scheduled task).

---

## 1. The honest math

**Today** (Oct 5-Nov 1): 40,700 Google web impressions and 273 clicks a day, plus about 50 image clicks. About 460 sessions a day (GA4, October: 14,387).

**10,000 visitors a day** takes about 880,000 impressions a day at last summer's click rate (1.13%), or 300,000-400,000 a day at 2.5-3.3%. The owner's 300-400K a day is 7-10x today's daily impressions.

**Everything we know how to build, matured:** about 71,000-84,000 impressions a day on average and 109,000-128,000 at the summer peak. That's about 1,500-2,500 Google clicks a day at the summer peak.

**What closes the rest of the gap:**
- **Breadth:** thousands more strong topics. At ~40 impressions a page a day that's 4,300-8,200 more pages, 3-6 years at 25 a week.
- **Authority:** links, so each page earns more. This is the real multiplier.
- **Click rate:** top 3, the right page formats, photos.

**Milestones** (peak months):

| When | Sessions a day | Google impressions a day |
|---|---|---|
| Summer 2027 | about 2,000 | about 110-130K |
| Summer 2028 | about 4,000-6,000 | about 250K |
| Summer 2029 | 10,000+ | 400K+ |

Each step needs the year to roughly double. 2026 grew 5x from May to September.

**Amazon:** the October baseline is 1,177 GA4-counted clicks (Canada 1,061, US 71). Realistic for July 2027 is 2.2-3.3x, about 4x if last July's click rate repeats, about 6.7x if everything goes right. **True 10x needs a new market (section 6). Earliest honest date: summer 2028.**

---

## 2. The six engines

1. **Push pages into the top 3** (section 3). Pages at positions 3.5-5.5 reached the top 3 21% of the time in 2-3 months; from 7.5-10.5 only 1.4%. Start with the close ones.
2. **New pages in the families that win clicks** (section 4): bites and stings, identification with photos, "X vs Y", droppings and signs, product picks. No trivia. "What time of day are mosquitoes most active" sits at position 2.5 with 16,200 impressions and got 12 clicks.
3. **Authority**, which is what lifts every page:
   - One new data page a month (the GTA mosquito map and Lyme tracker are already our best pages on Bing and Google).
   - Spring local media for the tick and mosquito season.
   - Technician photos from real jobs from May.
   - Links earned, never bought.
4. **Images and Lens:** first photos on pages with demand, labelled comparison photos on "vs" pages, the best photo near the top.
5. **The season:** summer pages built November-March so they're indexed and aged by May. Last summer's winners upgraded by March.
6. **Off-Google audience:** notifications (OneSignal ID), short videos, and a Pinterest test in February.

**Holding it all up: Google's trust.** That means the pace cap, reviewed pages and no penalties. Google's ad review (Nov 2) called the site "low-value content". Approval can be requested again from about May 2027 and is worth about CA$400-500 a month at goal traffic.

---

## 3. PUSH QUEUE: existing pages to the top 3, in order

Ranked by value-weighted extra clicks (`research_notes/God plan 10k a day/top3_push.csv`). Product pages count 3x and remedy pages 2x for Amazon. Trivia is down-weighted. Season decides when.

**Now (winter, Nov-Dec)**, after the locks lift (section 8):

| # | Page | Main searches (position) | What to do |
|---|---|---|---|
| 0 | `/tools/bug-bite-identifier` | "bug bite identifier" US 10K-100K and **rising** (Trends); the tool barely shows today | Title and intro in the searcher's words, links from all 17 bite pages, photo examples. It's a tool, so Google can't answer it in a snippet. **Done Nov 4** |
| 1 | `/blog/best-rat-trap-canada` | rat trap (11), rat traps (8.6), rat zapper (11.2) | Electric "rat zapper" section, numbered picks, comparison table, pros/cons |
| 2 | `/blog/best-mouse-trap-canada` | mouse traps (10-20) | Same pattern. **Done Nov 4** |
| 3 | `/blog/mouse-repellent-canada` | nestoff mouse repellent (7.1, 1,150 in Oct) | NestOff section (label, evidence, what it can't do). **Done Nov 4** |
| 4 | `/blog/best-fruit-fly-trap-canada` | fruit fly trap (11.7), best fruit fly trap (6.3) | Comparison table, DIY vs bought |
| 5 | `/blog/advion-cockroach-gel-bait` | advion gel (10.7), cockroach gel bait canada (7.3) | Facts table, placement photos |
| 6 | `/blog/what-do-fleas-look-like` | what do fleas look like (8.5, 4,188 in 28d) | Actual-size and macro photos first, look-alikes |
| 7 | `/blog/white-cockroach` | white cockroach (8.7, 3,681 in 28d) | Moulting photo sequence |
| 8 | `/blog/what-do-bed-bugs-look-like` | what do bed bugs look like (12.7), bed bug size (8.9) | Life-stage photo chart with a ruler |
| 9 | `/blog/bugs-that-look-like-cockroaches` | (7.4) | Look-alike photo grid |
| 10 | `/blog/what-does-mouse-poop-look-like-canada` | mouse poop (7.5) | Photo with a ruler; mouse vs rat vs roach |
| 11 | `/blog/baby-bed-bugs-nymphs` | baby bed bugs (8.9) | Nymph photos by stage |
| 12 | `/blog/best-cockroach-spray-canada` | cockroach spray (11.1) | Table and pros/cons |

**January-March (summer pages, ready before May):**

| # | Page | Main searches (position, summer impressions) | What to do |
|---|---|---|---|
| 13 | `/blog/laser-mosquito-killer-photon-matrix-review` | photon matrix (7.8, 22.9K summer) | 2027 update, clear verdict, comparison |
| 14 | `/blog/mosquito-larvae-identification` | mosquito larvae (9.1, 30.7K summer) | Photo ID: larvae vs pupae vs look-alikes, "found in my rain barrel" |
| 15 | `/blog/mosquito-bits-canada-vs-dunks` | mosquito bits (7.5, 15.2K summer) | Dosage card, "where to buy in Canada" (it isn't on every shelf) |
| 16 | `/blog/mosquito-dunks-canada-guide` | mosquito dunks canada (5.8, 6.9K summer) | Same |
| 17 | `/blog/dynatrap-canada-review` | dynatrap (8.2, 6.2K summer) | 2027 update, table |
| 18 | `/blog/bugs-that-look-like-ticks` | bugs that look like ticks (7.9) | Photo grid, stink bug and spider beetle sections |
| 19 | `/blog/why-do-mosquito-bites-itch` | how long do mosquito bites last (8.3) | Day-by-day photos; the title already targets it |
| 20 | `/blog/permethrin-canada-yard-clothing-spray` | permethrin spray (9.8) | Table, label rules |
| 21 | `/blog/what-does-a-spider-bite-look-like` | (7.0) | Labelled photos, red flags |
| 22 | `/blog/red-ticks-and-clover-mites` | red tick (8.1) | Photo grid |
| 23 | `/blog/deer-tick-vs-dog-tick-canada` | deer tick vs dog tick (8.4) | Side-by-side labelled photos (adult, nymph, engorged) |
| 24 | `/blog/black-flies-ontario-when-they-come-out` | black fly (8.8) | Photos, 2027 season dates |
| 25 | `/blog/horse-fly-and-deer-fly-bite-treatment` | deer fly bite (4.8) | **After Nov 24** (title test) |
| 26 | `/blog/tick-bite-vs-mosquito-bite` | (6.9) | **After Nov 24** |
| 27 | `/blog/best-wasp-nest-spray-canada` | wasp spray (8.5) | Spring |
| 28 | `/blog/how-to-get-rid-of-ground-wasps-canada` | ground wasps (6.8) | Spring |
| 29 | `/blog/mosquito-fogger-canada` | mosquito fogger (8.1) | Spring |
| 30 | `/blog/best-mosquito-repellent-device-canada` | mosquito repellent machine (9.7) | Spring |

Then the rest of `top3_push.csv` in order.

**Trivia pages, low priority, and only formats that answer what Google can't** (charts, photos): what-temperature-kills-mosquitoes, when-are-mosquitoes-most-active, how-many-ants-are-in-the-world.

---

## 4. BUILD QUEUE: new pages, most powerful first

Ranked by expected clicks x value (`research_notes/God plan 10k a day/new_pages.csv`, estimates calibrated on our own October pages: a new page draws about 400-600 impressions a month at first, more for big topics). Keyword Planner volumes will refine this when they arrive.

**NEXT 10**, re-ordered Nov 3 evening with Google Keyword Planner volumes (`keyword_volumes.csv`, `discovered_keywords.csv`; ranges because the Ads account runs no campaigns; the US is about 10x Canada):

| # | Target search | Family | Volume and evidence | Notes |
|---|---|---|---|---|
| 1 | yellow jacket | wasps / species | **US 100K-1M, CA 10K-100K**; 5,393 impressions already at position 8.8 | **Live Nov 4.** The "vs wasp" and "vs hornet" searches stay with wasp-vs-hornet |
| 2 | little black ants | ants / ID | Competitor Fox Pest gets ~8,300 visits from it | Link black-ants and tiny-ants both ways |
| 3 | vole | mice and rats / species | ~101K US a month (Ahrefs), KD 11 | **Live Nov 4** (US edition of the Canadian voles page) |
| 4 | lone star tick (US edition) | ticks / species | Lone star tick bite searches US 10K-100K, **rising** (alpha-gal); Trends ~122K | **Live Nov 4** (US edition of the Canadian page) |
| 5 | American cockroach | cockroaches / species | US 10K-100K, CA 1K-10K | |
| 6 | types of wasps | wasps / ID chart | US ~17K (Ahrefs) | Wasp ID chart page. wasp-vs-hornet lists "types of wasps" (and "bee vs wasp") among its targets and is frozen until Dec 1: build after that and take the target off that page |
| 7 | carpenter bee vs bumble bee | wasps / vs | Fox 2,600 visits | Planned Dec 14 |
| 8 | roach droppings vs mouse droppings | droppings / vs | mouse droppings US 10K-100K; competitors 2,400 visits; winter | Link both droppings pages |
| 9 | NestOff mouse repellent | product (Amazon) | Keyword Planner 10-100 a month, but Search Console 1,150 impressions in 28 days at position 7 with no page | **Dropped Nov 4:** answered by the new NestOff section on mouse-repellent-canada (NestOff has no Canadian registration, so no buy link) |
| 10 | signs of termites (+ mud tubes) | household / ID | ~8,600 US a month | Live by early March |

**Then, in order:**
- 11-20: wasp vs bee; flea bites vs bed bug bites (image demand 9,400 in 28 days); **brown recluse** (US 100K-1M, planned Feb 1, build in January; the results page is institutions and Wikipedia, so it's hard); carpenter ant frass; bugs that look like termites; how to get rid of termites; snake poop (photo first); gnats vs fruit flies vs drain flies (one page); how to get rid of moles; yellow jacket sting.
- 21-40: cricket poop; American dog tick (US); possum poop (photo first); moth eggs; horse fly (US); bee sting vs wasp sting; how to get rid of squirrels; lacewings; fleas vs ticks; deer tick (US); huntsman spider; how to get rid of chipmunks; types of bees; carpenter ants vs termites; black flies (US); engorged tick; rat vs lizard droppings; roach bombs vs gel bait; then `new_pages.csv` from #39.
- **Big searches we already have pages for** (US 100K-1M per Keyword Planner): ticks and tick bites, spider bites, fleas, rats, cockroaches, carpenter ants, wasps, fruit flies and gnats, silverfish, house centipede, carpet beetles, bed bug bites, chigger bites. These are push work (section 3), not new pages.
- **Seasons** (`trends_seasonality.md`, 5 years of Google Trends): mosquito bites swing 29x in Canada (June-August); ticks peak in May; fruit flies in September; wasps in August; mice and mouse traps in October-November; bed bugs and cockroaches are flat. Build each family 3-6 months before its peak.
- **Also from Search Console** (turned into pages after the overlap check): chigger bites vs flea bites, pharaoh ants, fly bites.
- **Sections, not pages** (78 of them, listed in `new_pages.csv` as "add a section"): add them during pushes.

**Don't build:** trivia or question pages, city or neighbourhood templates, the 83 state and province pages (held to Apr 5, 2027), self-ranking "best companies" lists.

---

## 5. How a page gets pushed into the top 3 (measured, `top3_tactics.md`)

1. **Enrich with facts that belong to that page:** tables, specs, comparisons, more depth (+18-20% in SearchPilot tests, 2025-2026). Don't delete content.
2. **Match the format to the search:**
   - "best X" and "types of X": numbered lists (top-3 share 54.5% vs 10.2% for other formats);
   - "X vs Y": a side-by-side table and paired photos;
   - "what does X look like": photo-led.
3. **Titles in the searcher's words**, tested: about 1 title change in 3 loses, so change them in batches with an untouched comparison group and keep what wins. On this site, dropping "Canada/Ontario" from 9 titles gave 300 clicks against 158 expected.
4. **Product pages:** a pros-and-cons table, a separate specs section, a clear verdict up top (+50% / +5.5% in 2023 tests).
5. **Real freshness only:** new facts, new photos, new data. Never just a date change. **79 article titles say "2026"**: give each a real update by Jan 1 or take the year out.
6. **FAQs as visible text** (+9.7% in an April 2026 test). FAQ schema no longer shows anything.
7. **Internal links** from the hub and 2-3 related strong pages (+5-25% in older tests).
8. **Photos:** labelled, real, the best one near the top, about 6-8 at most.
9. **Avoid:**
   - "Key takeaways" answer-first blocks (-6.5% measured);
   - self-ranking lists (demoted since January 2026);
   - thin pages built to a template;
   - heavy ad density on a page (a May 2026 core-update signal).

---

## 6. AMAZON: the honest plan to 10x

**Where clicks come from now:**
- **By the page a Canadian visit starts on** (clicks per session): product 0.30, remedy 0.16, information 0.03, US guide 0.009.
- **Concentration:** the top 10 pages make 32% of clicks.
- **By placement:** buttons inside the page 64%, award cards 14%, the sticky bar 14% (95% of it on phones).

**The 2027 levers, biggest first:**
1. The season coming back.
2. Rank gains of 1-2 positions on the big buying searches.
3. 100-200 new product and remedy pages under the cap.
4. US pages.

**Target pages, in order:** Advion cockroach gel; rat traps; the basement dehumidifier page; mosquito bits and dunks; fruit fly traps; mouse traps; cockroach spray; bed bug spray. Plus NestOff and mouse repellent, allowed now.

**The real 10x (test in 2027, scale in 2028):** a new market.
- (a) US product and remedy pages with amazon.com picks, after the owner finishes the US tax interview. US visitors are the majority, but US guide picks get about 3 clicks per 1,000 views today.
- (b) Canadian home and appliance guides, where dehumidifiers already convert.
- (c) The photo bug identifier recommending products, which needs the amazon.com guard widened.

**Watch:** since Mediavine started pinning ads on Nov 2, our phone sticky buy bar hides while an ad is pinned (5-15% of clicks at risk). Judge it on the first full month.

**Retailer searches:** a "where to buy in Canada" section only where the product isn't on the shelf (mosquito dunks and bits get 0.95-1.95% click-through on those searches). Not Thermacell at Canadian Tire (0.07%).

---

## 7. Indexing

- **Nov 3:** 720 of 738 sitemap pages indexed. The 18 others are in the queue; 11 were requested the same day.
- **The daily task** requests 10-12 pages at 9:10. Every new or upgraded page goes to the top of the queue the day it ships.
- **Folds:** if Google files a page under a foreign canonical (a casino or cinema site), re-request it at once. The page keeper prevents new ones.
- **Re-check the whole sitemap monthly:** scratchpad `idx-nov3/sweep.py`, using the URL Inspection API, ~740 of the 2,000 calls a day.

---

## 8. Guardrails

- **Pace:** at most 10 new pages a day and 25 in any 7 days, every kind of page counted (`release-scheduled.mjs` enforces it for scheduled guides).
- **Locks:**
  - The 9 title-test pages (scores still visible): until Nov 24.
  - Pages in the Nov 6-20 upgrade and Amazon reads: until Nov 20. Exception: best-mouse-trap-canada and mouse-repellent-canada.
  - The November photo tests, if approved: until Dec 27.
- **Nov 24 to-do:** take the x/10 scores off the 9 test pages, then delete `EditorialScore` and the `score` prop.
- **Content rules:**
  - Real photos only (PD, CC0, CC BY, CC BY-SA, with the first figure PD or CC0); never AI images.
  - A fact-check record for every guide.
  - "Reviewed by" only when the owner really read the page.
  - No testing claims we can't back.
  - Service, city, pricing and quote pages change only with the owner's OK.
- **Amazon rules:** one store per page; the disclosure verbatim; affiliate attributes untouched.
- **Never** the Indexing API, AdSense code or bought links.

**Owner's list:**
1. Amazon tax interview and payment method, on both accounts. CA$1,731 is held.
2. Anthropic key in Vercel (the photo bug identifier, "what bug is this" ~34.5K US searches a month).
3. OneSignal app ID.
4. Remove the "indexing-api" robot account in Search Console.
5. OK to rebuild the service pages around "mosquito spray", "tick control for yard" and "backyard mosquito control", plus the same names in the Business Profile services.
6. Read and approve the top 20 pages over the winter.
7. Decide on the 13 "best companies" city pages.

---

## 9. Log

- **2026-11-03:**
  - Plan written.
  - Research done: targets, Amazon, top-3 tactics, index status, and Keyword Planner and Trends volumes (the build queue was re-ordered by them).
  - Keyword Planner auto-saved 3 draft keyword plans named "Plan from Nov 3, 2026". They're harmless and nothing else in Google Ads changed.
  - The highest bids are service searches ("mosquito control near me" up to CA$48 in the US, "tick control near me" CA$40), which supports the service-page rebuild and the US call test.
  - The stuck daily-indexing run stopped.
  - 11 pages requested in Search Console: flea-bites, baby-snakes, lovebugs, wood-roaches, bat-bugs, crazy-ants, skunk-smell-in-house, bugs-in-basement, baby-silverfish, the ant-control hub, and how-long-do-ants-live (fold).
- **2026-11-04 (first "go", run the evening of Nov 3 Toronto time; commit `311ad344`):**
  - **Built 3** (pace room was 3: 22 releases in the 7 days before). Each got a writer, an independent checker (record on file) and links in from live guides, and their records were amended:
    - `/blog/yellow-jackets`: 3,076 words, 19 sources. Checker: 310 claims checked, 10 corrected, 13 softened. Re-aimed off "yellow jacket vs wasp" and "yellow jacket vs hornet", which wasp-vs-hornet owns (frozen until Dec 1). Title: "Yellow Jackets: ID, Ground Nests, Behavior". 6 live wasp guides already linked to it.
    - `/blog/voles`: 2,848 words, 17 sources. Checker: 262 claims checked, 9 corrected, 9 softened; disclaimer "both". US edition of how-to-get-rid-of-voles-canada (REGIONAL_PAIRS, hreflang on the Canadian page, its affiliate tokens unchanged). Links in from field-mice, types-of-mice, pillar-mice and the shrews card; holes-in-yard's two vole links moved from the Canadian page to this one.
    - `/blog/lone-star-tick`: 3,900 words, 20 sources. Checker: 511 claims checked, 11 corrected, 6 softened. US edition of lone-star-tick-alpha-gal-canada, paired the same way. Links in from tick-identification-chart (parent), what-do-ticks-look-like and seed-ticks, plus 5 state pages already.
    - amazon.com picks: yellow jacket trap ("To trap queens in early spring": UC IPM says the common lure mainly catches western yellowjackets), mouse snap traps, permethrin clothing spray (0.5%).
  - **Pushed 3** (baselines for the 4-6 week read, Search Console 28 days to Nov 3):
    - #0 `/tools/bug-bite-identifier` (108 impressions, 0 clicks). Title is now "Bug Bite Identifier With Pictures: What Bit Me?". Bite pictures moved up under the red-flag box, the FAQ is open text, and one sourced FAQ was added ("Which bug bites look like pimples?"). Sitemap date Nov 4.
    - #2 `best-mouse-trap-canada` (496, 3), about 1,285 words added:
      - trap types compared (running cost, children and pets, Canadian rules);
      - pros and cons by type;
      - numbered picks;
      - a registration FAQ;
      - England's glue-trap ban corrected (in force July 31, 2024).
    - #3 `mouse-repellent-canada` (3,932, 75; about 3,000 of those impressions are NestOff searches), about 1,627 words added:
      - a NestOff section: active oils, no Canadian registration found, minimum-risk status in the US, 0 PubMed results, and the maker's own limits;
      - an evidence-and-registry table by repellent type.
    - Every Amazon element on both product pages is byte-identical (diffed), and both are in `ARTICLES_EXTENDED_NOV4`. Title unchanged; a NestOff title is a candidate for the next tested batch.
  - **Found: a false legal claim, on more pages.** The repellent page said ultrasonic repellers need no Health Canada registration; it was fixed there.
    - Under the Pest Control Products Regulations, s. 3(1)(a), a device is exempt only if it is not a type in Schedule 1 (read Nov 4 on laws-lois.justice.gc.ca). Schedule 1 covers devices that attract or destroy flying insects (item 2), sound, touch or electromagnetic repellers (item 3), and UV devices (item 7).
    - Pages that say otherwise: ultrasonic-pest-repellers-do-they-work, best-commercial-fly-light-trap-canada, flowtron-bug-zapper-canada, best-mosquito-trap-for-acreage-canada, best-fruit-fly-trap-canada (in the Nov 6-20 read), probably electric-fly-swatter and other zapper and trap pages. This needs a sourced sweep.
    - Owner calls from the same check: the capsaicin tape claim on mouse-repellent-canada (locked AwardRow text); "release mice 2 km away" vs Ontario's 1 km guidance on best-mouse-trap-canada; scent advice vs no registered essential-oil repellent.
  - **Dropped:** build #9, the separate NestOff page. The repellent page's section answers it.
  - **Indexing:** a catch-up run started at 00:55 UTC and hung on a Chrome `find` call, like the Oct 31 run. A hung run blocks the following days' runs. I stopped it and made the task prompt safer (clear the box with its X; stop if Chrome stops responding). The 6 URLs above sit at the top of the queue for the Nov 4 9:10 run.
  - **Images plan, step 2 (weekend by device):** desktop image clicks on Oct 31-Nov 1 were 0.35x weekdays (prior weekends 0.14x), so the school pattern holds. The Nov 1 Search Console click jump is real: GA4 organic mobile sessions were 360, the high of the month. Nov 2 set records: 71 desktop image clicks, 29,826 desktop image impressions, 194 GA4 organic desktop sessions.
- **2026-11-04 evening to Nov 5 02:00 UTC (owner: "get more Canadian shoppers onto the buying pages... I don't care if the money is coming from Canada or a US audience"; commit `ab069e42`):**
  - **The owner's decisions:**
    - Read the tests now, not on Nov 20.
    - No first-screen box test.
    - Yes to a fixed Amazon.com button on Canadian pages Americans read.
    - Up to 20 new pages that day.
  - **Converter read, taken early** (scratchpad `read_upgrades_nov4.py`; 60 upgraded pages vs 179 others):
    - Positions 7.2 → 7.1; none reached the top 3.
    - Amazon clicks per 1,000 Canadian views 237 → 255, against control flat at 117.
    - So more content won't move these pages fast. Authority (links) is the gap.
  - **Released 6 US buying guides** with the new `picks` block (amazon.com), each a regional pair with its Canadian page: best-fruit-fly-traps, best-rat-traps, best-cockroach-gel-bait, best-bed-bug-spray, best-flea-spray-for-home, raccoon-repellent.
    - Written after a top-3 teardown.
    - Independently fact-checked: 850 claims, 72 corrected, 3 removed.
    - Link-ins from 6 US guides.
  - **Picks on 9 live US guides:** mice-traps, mice-repellent, and bed bugs, cockroaches, silverfish, carpet beetles, centipedes, stink bugs and earwigs. All checked.
  - **Amazon.com line on 27 Canadian pages** (`lib/amazon-dual-store.json`); `check:amazon` guards it.
  - **GA4, first two days with ads:** Canadian phone Amazon clicks per 1,000 views on product and remedy pages were 201, against 190 before. The sticky bar's clicks moved to the top box and the in-page buttons.
  - **Expert-quote link plan:** `reports/expert-quote-link-plan-2026-11-04.md`. The owner signs up (SOS, HARO, Qwoted free) and writes answers in his own words; Qwoted bans AI pitches.
  - **Indexing:** Search Console said "Quota exceeded" for Nov 4, so the six Nov 4 and six Nov 5 URLs head the queue.
- **2026-11-05, second batch the same night** (owner: "do number 2, 3 and 4 right now"; also "we could just request the pages to be indexed tomorrow manually"):
  - **Indexing:** the quota had reset by 9:28 pm Toronto. I requested by hand in his Chrome the six US buying guides, voles and lone-star-tick, and a recrawl of the bug-bite identifier. yellow-jackets was already indexed. best-cockroach-gel-bait was indexed about 15 minutes after its request and drew a burst of Indian phone readers (8:45 am there).
  - **Reviewed:** the owner read the six Nov 5 guides; each carries its own `reviewedBy`/`reviewedOn` (`OWNER_REVIEWED_THROUGH` stays 2026-11-04, so pages he has not read never say "Reviewed by").
  - **Merges done** (report: scratchpad `merges-nov5.md`): 23 pages into 12 survivors, with 23 301s in `next.config.mjs` and links repointed on 46 pages (9 US guides amended).
    - Dehumidifiers kept two survivors (large-capacity and cold-garage), because the garage page has its own demand.
    - wasp-dust went into ground-wasps; best-bed-bug-powder into cimexa; mosquito-dunks-guide into mosquito-bits; cockroach-killer into cockroach-spray.
    - Off-topic pages went into the nearest pest page. 61 products that did not fit were dropped and are listed in the report.
  - **4 more US buying guides**, fact-checked (526 claims, 51 corrected, 2 removed) and regional pairs: best-ant-bait, best-bed-bug-mattress-cover, best-mosquito-repellent, best-bug-zapper.
    - The two mosquito guides first named `/blog/ultimate-backyard-mosquito-control-guide` as parent, which would have made it an ad-free hub. They now use `/learn`. A guide's `parent` becomes a hub in `lib/hub-routes.json`, so never name an ad-earning article as one.
  - **Title audit** (scratchpad `title-audit/titles.md`):
    - 71% of 423 pages already lead with their main search. Low CTR is mostly answer boxes and images, not titles.
    - 11 rewrites applied tonight, for about +27 clicks a month now and +68 a summer month in total.
    - Waiting: 7 that drop "Ontario/Canada" (after the Nov 20-23 geo read), 4 spring swaps (Mar 15 and Apr 1), 6 optional ones for a held test, and 14 service-page suggestions (owner's OK).
    - Also retitled tonight: mouse-repellent-canada, "Does NestOff Work?".
- **2026-11-05 morning (owner: decisions 1-7 answered; "go ahead and do what you got to do for today"; commit `55b577f3`):**
  - **Google Discover, first real traffic:** best-cockroach-gel-bait went into India's Discover feed about 45 minutes after release (GSC Discover 4,487 impressions, 150 clicks; GA4 ~290 India sessions Nov 4-5, shown as direct). The visitors are real phones, but the traffic is worth about $0. The other 9 new guides share the same template and photos and were not picked, so the topic and the timing won, not the layout. Memory: `project_discover_india_nov5.md`.
  - **No buttons for products not registered in Canada** (owner's rule): every CimeXa button (19, on 9 pages) now goes to registered DE (Reg. No. 32561); every Combat roach and Raid Max button (23, on 4 pages) goes to Raid Ant Roach & Earwig Gel Baits (Reg. No. 25735), the Ecopest gel or the registered paste. The Advion page's FAQ and table no longer call hydramethylnon stations registered. bed-bug-spray-canada lost 10 buttons for unregistered sprays. A helper is sweeping the rest (pesticides the page itself calls unregistered); devices are listed for the owner, not changed.
  - **Merge follow-ups:** the large-capacity dehumidifier page lost 8 repeat buttons (206 views and 14 Amazon clicks across all seven pages Jun 1-Nov 4). The dunk dose is now the Canadian label's quarter dunk per rain barrel, on two pages.
  - **14 service-page titles** applied (owner's OK): no "2026", all fit 60 rendered characters; the price stays where the description has none.
  - **Reviewed:** the owner read the four guides of Nov 5 evening; each carries reviewedBy/reviewedOn.
  - **Nov 6 build (5 pages, plan entries added, releaseOn 2026-11-06):** little-black-ants, roach-droppings-vs-mouse-droppings, christmas-tree-bugs (a December Discover bet; photos scouted first), best-bed-bug-interceptors and best-wasp-spray (US buying guides, regional pairs). american-cockroaches stays gated: it was folded into the live palmetto-bugs page on Oct 16.
  - **Higgsfield:** 270 credits, Starter. A first cut of a quote-email explainer (q01) is being built from the real footage plus the September AI legs (0 new credits). Customer footage never goes to Higgsfield.
- **NEXT "go" (Nov 6; pace room 9: 16 new in the 7 days to Nov 6):**
  - **Owner decisions from the merges:**
    1. A CimeXa buy button sits on a page that says CimeXa is not registered in Canada.
    2. bed-bug-spray-canada now carries a US-products table with amazon.ca buttons for products not legal in Canada.
    3. The cockroach page's top box and sticky bar say "Best overall: Combat", which the page says is no longer registered. Switch them to Raid bait.
    4. The large-capacity dehumidifier page has 43 buttons; trim the low ones.
    5. The mosquito-bits page says "one dunk per 50-gallon barrel", against the label's quarter dunk; fix the prose.
- **Earlier NEXT list (Nov 5):**
  - **Indexing:** check the 9:10 run with `list_task_runs`. Stop it if it shows "running" with old activity, and do the batch in Chrome by hand.
  - **Merges, first** (owner approved every non-service merge and lifted the Nov 20 wait). Use the Nov 3 pattern: every product moves to the survivor, add the 301s, repoint links, amend records.
    - The six duplicate pairs from `reports/page-one-plan-2026-11-02.md`.
    - Then the 20 off-topic pages: 9 dehumidifiers into 1, 2 sump pumps into 1, and patio heaters, steam cleaners, leaf blower, brush cutter, bird feeder and dust-mite air purifier into the nearest pest page.
    - One dual-store page may be affected: how-to-get-rid-of-ground-wasps-canada, if wasp dust merges into it. Keep its amazon.com line.
  - **Push the Canadian buying pages:** titles in searchers' words ("best ... canada") on product pages ranking 4-15, then links from the busiest Canadian information pages.
  - **More US buying guides:** next by US volume are mouse traps (upgrade mice-traps further), ant killer, wasp spray (spring), mosquito repellent (spring), bug zapper (spring) and Dynatrap.
  - **Verify on the GTA report page** (`/buzzskito-2026-gta-mosquito-tick-report`), flagged by the link plan: "200+ property surveys", and blacklegged ticks "established across all 19 GTA cities per Public Health Ontario".
  - **Still open from Nov 4:** plan entries for little black ants (#2), American cockroach (#5), roach vs mouse droppings (#8) and signs of termites (#10). Offer the owner the device-registration sweep.
