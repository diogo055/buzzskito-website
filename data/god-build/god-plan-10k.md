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

### NOW 10: the strongest new pages we can write (owner, Nov 5 evening)

The owner asked for "the combination of 10 pages that is literally the most powerful that we can make right now... don't repeat anything that we have on the site." These come before everything else in this section. Evidence: `data/god-build/research/what-wins-2026-11-05.md`.

**How they were chosen:**
- **Page types, median Google clicks per mature page in 28 days:** bites & stings 39, identification 33.5, droppings & signs 21. Everything else is 0-4.5.
- **New pages in winter start best as identification:** "bugs that look like" and "tiny bugs" pages drew 72-117 clicks in their first 28 days. Droppings and signs pages come next.
- **Topics, median per page:** flies & gnats 41, cockroaches 22, mice & rats 13.5, crawling bugs 13.
  - Bed bugs and ticks have about 80 pages each and are saturated.
  - Mosquitoes are a summer topic: US searches in January are 19% of July, and Canada's are 13%.
- **No repeats:** each page was checked against all 794 live pages, the scheduled folder and this plan.

| # | Page (slug) | Main search, US volume (Keyword Planner unless noted) | Type | Why now | Keep it distinct from |
|---|---|---|---|---|---|
| 1 | `brown-recluse` (planned Feb 1, now) | brown recluse, brown recluse spider: 100K-1M each | ID with look-alike cards | The biggest search we can reach. It is found indoors all winter, and our look-alike and bite pages already sit around position 9 | `brown-recluse-look-alikes`, `brown-recluse-bite`: link both, don't re-cover bites |
| 2 | `phorid-flies` | 10K-100K (CA 1K-10K) | species ID | Flies & gnats is our best topic per page, and these flies are indoors in winter | the drain fly, fruit fly and fungus gnat pages |
| 3 | `centipede-vs-millipede` | 10K-100K (CA 1K-10K) | ID, X vs Y | Both come indoors in fall | `house-centipedes`, `millipedes` |
| 4 | `tiny-flying-bugs-in-house` | six searches at 1K-10K ("small flying bugs in house", "small black flying bugs in house not fruit flies"...) | ID (the tiny-bugs formula) | The tiny-bugs pages are our best new pages | It replaces the planned "gnats vs fruit flies vs drain flies". The how-to pages keep the killing |
| 5 | `flea-bites-vs-bed-bug-bites` (was #11, now) | about 8,400 (Trends); 9,400 image impressions in 28 days | bites, X vs Y | Both pests are indoors all year | `flea-bites`, `bed-bug-bites`, `what-do-bed-bug-bites-look-like` (Nov 24) |
| 6 | `possum-poop` (held for photos) | 10K-100K | droppings | Year-round. `animal-droppings` drew 62 clicks in its first 28 days | `animal-droppings`, `raccoon-poop` |
| 7 | `signs-of-mice` | Not in our Keyword Planner seeds: check its volume first | signs | Mice peak in Oct-Nov, and nothing on the site answers "do I have mice?" | `mouse-poop`, `mouse-urine`, `mice-in-walls`: summarize and link |
| 8 | `mouse-nest` (planned Jan 4, now) | plan targets: what does a mouse nest look like, mouse nest in car or wall | signs, ID | Winter | `signs-of-mice`, `rat-nest` |
| 9 | `snake-poop` (held for photos) | 10K-100K (Trends 17,400) | droppings | Built now, it is aged by April; snakes are out April-October | `animal-droppings`, lizard droppings |
| 10 | `stink-bug-eggs` | 10K-100K | ID | Eggs are found May-August, so it is aged by spring | `how-to-get-rid-of-stink-bugs`, which doesn't rank for it |

- **Order:** build 1-5 first. Pages 6 and 9 need their photo check first; open iNaturalist scat photos exist (10 possum, 25 snake), plus Wikimedia Commons. All ten fit the pace cap in about a week, as the Oct 31-Nov 4 releases age out.
- **Two pushes that may beat any new page** (top of section 3, now): `german-cockroaches` and `house-centipedes`. Both searches run 100K-1M in the US.
  - Our German cockroach page sits at position 15-16 with 1 click in 28 days.
  - Our house centipede page sits at position 12.
  - Rewrite both into the winning ID format.
- **Rule from now on, "hammer what wins, never repeat" (owner, Nov 5):**
  - Pick new pages by per-page yield: bites, identification, droppings and signs, in the topics where pages earn most. Re-measure the type and topic table every month.
  - One search, one page. If a live page already holds a search's words or ranks for it, improve that page instead.
  - Species-only, trivia and disease pages get built only when demand is big and we have a real angle. Google answers trivia in the results, and trusts health authorities on disease.

### Earlier queue

Ranked by expected clicks x value (`research_notes/God plan 10k a day/new_pages.csv`). The estimates are calibrated on our own October pages: a new page draws about 400-600 impressions a month at first, more for big topics. Keyword Planner volumes will refine this when they arrive.

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
- 11-20:
  - wasp vs bee;
  - flea bites vs bed bug bites (**moved to NOW 10**);
  - **brown recluse** (**moved to NOW 10**; the results page is institutions and Wikipedia, so it's hard);
  - carpenter ant frass;
  - bugs that look like termites;
  - how to get rid of termites;
  - snake poop (**moved to NOW 10**);
  - gnats vs fruit flies vs drain flies (**folded into tiny-flying-bugs-in-house**);
  - how to get rid of moles;
  - yellow jacket sting.
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
  - **Higgsfield:** 270 credits, Starter. A first cut of the quote-email explainer (q01, 42.8 s) was built from the real footage plus the September AI legs, using 0 new credits, and sent to the owner. Customer footage never goes to Higgsfield. render.mjs gained AI/REAL chips, custom end-card lines and a blur fix.
- **2026-11-05 afternoon (commits `cc49bba8`, `bf7d5a5a`; the owner's rule applied site-wide):** five passes over every Canadian page. A button came off only where a Health Canada primary source or the page's own sourced text says the product is unregistered, cancelled or not legal; devices were left for the owner. Reports: scratchpad `unregistered-sweep-report.md` to `-5-report.md`.
  - **Removed or switched, about 190 amazon.ca elements on about 60 pages:** Combat ant baits, Wondercide/Cedarcide/Vet's Best, Insect Shield, InsectGuard, consumer permethrin clothing sprays, Biogents/Atrakta/W·H·Y lures, Black Flag fogging liquid, citronella bands and PARA'KITO, peppermint pouches, carpet beetle pheromone traps, and three US-only Ortho products.
  - **Mosquito Bits → Mosquito Dunks (Reg. No. 28888)** on 16 pages.
  - **Cancelled total-release foggers** (RVD2023-06) are off the flea bomb page, which no longer calls them registered.
  - **Corrected text that called unregistered products legal:** permethrin-canada, can-mosquitoes, ortho, and bug-protective-clothing-canada (13 passages).
  - **Still open, for the owner:**
    - devices: DynaTrap, Katchy, BG-Home/BG-GAT, glue boards, heaters, steamers, fogger machines, capsaicin tape;
    - the frozen horse-fly page (one Insect Shield button, after Nov 24).
  - **Done Nov 5 evening (commit `c6a0b08e`, ships with the Nov 6 release):** the fungus gnat page's related links no longer say "A Full Season of Testing" / "Tested and Compared".
  - **Photo licences, done Nov 5 evening (same commit):** 9 iNaturalist photos from one photographer (kzoebel) were CC0 when downloaded (Oct 16-23) and later relicensed CC BY-NC.
    - Five were replaced with CC BY or CC BY-SA photos of the same subjects, under the same ids.
    - Three were retired, and their seven uses now point at photos already on record: termite-swarmers-pine-straw-house, carpenter-bee-nest-hole, lizard-droppings-ruler. The unused carpenter-bee-male is gone too.
    - Captions and alt text on 17 guides and 4 TSX pages were rewritten to describe the new photos, and the 17 records were amended.
    - The carpenter-ants-canada share image is now black-carpenter-ant-dry-leaves, because a share image must be CC0 or public domain.
    - Re-run scratchpad `audit-inat-licences.mjs` now and then: photographers can relicense.
  - **Site map dashboard for the owner and his partner:** https://claude.ai/artifact/BjoM5C1kcLqJaAhsbSskwA.
    - It is a treemap of all 794 pages in 29 groups and 8 families, sized by Google web clicks, with a toggle for 28 days, summer or 2026, monthly bars by family, and a ranked group table.
    - The data is a fixed snapshot to Nov 4. To refresh it, use `scripts/site-map/`.
  - **Indexing:** the 9:10 run hung on its first PowerShell call; I stopped it and ran the batch by hand. The Search Console quota is a **rolling 24 hours**: last night's 9:28 pm batch left room for one request this morning (best-mosquito-repellent requested; best-ant-bait already indexed). Next window about 9:30 pm.
  - **GTA report:** the tick claim now cites the five public health units. "200+ property surveys" waits on the owner's count.
- **2026-11-05, GA4 read** (owner: "tell me what's working and what isn't"; scratchpad `ga4_working_nov5.py` and `ga4_working_nov5b.py`; GA4 data to 9 am):
  - **Google, Sun-Wed vs Sun-Wed:**
    - Search Console clicks 1,553 vs 1,366 (+14%); two weeks earlier 1,029. Impressions +23%.
    - November goal: 29% reached in 4 days.
    - The gain came from October pages now indexed: tiny-white-bugs 0→21, tiny-brown-bugs 29→50, raccoon-deterrent 5→21, no-see-ums 0→15, maggots 0→13, mite-bites 0→11, bugs-in-carpet 0→10.
  - **Ads, Nov 3-4 vs the week before:**
    - Phone pages per visit 1.12→1.15; time on page 65→61 s.
    - Desktop time on page 76→61 s, but pages per visit 1.09→1.20.
    - Canadian Amazon.ca clicks per 1,000 Canadian views: 128→152.
    - Phone sticky-bar clicks (8→0) moved to the top box (9→14).
  - **Merges:** the 23 old URLs had 0 views on Nov 5.
  - **Not yet:**
    - The 13 new pages had 0-3 views each, except best-cockroach-gel-bait (India Discover: ~460 visits, 36 amazon.com clicks that pay nothing).
    - Americans clicked amazon.com 6 times since Oct 20.
    - The amazon.com line on 27 pages had 11 US views and 0 clicks overnight.
    - Recirculation gets about 8 clicks a day; the next-article bar got 0 in two ad days.
  - **Noise:** 42 US "direct" visits on Nov 4 were a bot in Ashburn, VA.
  - **Next reads:** titles in Search Console Nov 12-19; new pages and merges Nov 19.
- **2026-11-05 evening: what wins, and the NOW 10.** The owner asked whether mosquitoes are our most powerful topic, then for the 10 strongest pages to write now.
  - **The answer:** the measurement is in `research/what-wins-2026-11-05.md`, and the NOW 10 are at the top of section 4.
    - Mosquitoes bring the most visits because we have the most pages (116, counting local pages). Per page they are weak off-season: a median of 2 clicks, against 15 in August.
    - The winning page types are bites (39), identification (33.5) and droppings & signs (21).
  - **Mosquito search map** (Search Console, 6 months): 27,066 searches. Bites are 21%, timing 18%, kill & control 15%, shopping 12% and larvae 8%. We already have a page for nearly every type, so the mosquito work is pushes before May.
  - **Trends** (`research/mosquito-trends-2026-11-05.md`):
    - "Mosquito" in January is 19% of July in the US and 13% in Canada. Bites drop to 4-9% and larvae hold at 15-20%.
    - Rising in the US: "mosquito control near me" +170%, "mosquito spraying near me" +160%, mosquito dunks +400%, and Spartan/"mosquito tnt" devices.
    - Google Trends blocked our browser with a CAPTCHA partway through, so the pest comparison and the 12-month related lists are not in.
  - **December mosquito batch, apply after the Nov 6 release:** set these 11 pages to `2027-04-05` in `release-overrides.json` and regenerate the plan (`node scripts/god-build-plan.mjs`, then `node scripts/us-pages-plan.mjs`):
    - culex-mosquitoes, anopheles-mosquitoes, floodwater-mosquitoes, gallinipper, yellow-fever-mosquito;
    - dengue, eastern-equine-encephalitis, chikungunya, la-crosse-encephalitis, jamestown-canyon-virus, st-louis-encephalitis.
    - `types-of-mosquitoes` and `mosquito-borne-diseases` (Dec 7) cover them as sections instead.
    - Kept: asian-tiger-mosquito and skeeter-syndrome.
    - The owner was told and did not object.
  - **Forecast for the NOW 10, given to the owner Nov 5.** Read it Dec 15 and Jan 15 against Search Console.
    - **The base:** 510 pages launched Jul 10-Nov 4, read day by day (`page_date.json` in the session scratchpad).
      - Bite, identification and droppings pages averaged about 0.5 clicks and 120 impressions a day per page in their first 4 weeks (median; the mean was about 0.9 and 180).
      - They roughly doubled in weeks 5-8, to a median of 0.9-1.4 clicks and 190-280 impressions.
      - October launches, in winter, ran at a median of about 14 clicks per 28 days for identification, 19 for droppings and 13 for bites.
    - **All 10 combined:**
      - Month 1 (to about mid-December): 100-400 Google visits (likely about 225), and 20,000-60,000 impressions (likely about 35,000).
      - Month 2 (to about mid-January): 150-750 visits (likely about 400), and 30,000-100,000 impressions (likely about 60,000).
    - **Who carries it:** tiny-flying-bugs-in-house, signs-of-mice, flea-bites-vs-bed-bug-bites and phorid-flies. Snake poop and stink bug eggs are spring pages and add little before April.
    - **The swing is brown-recluse.** In the top 10 it is worth 100-300+ visits a month by itself. On page 2, like german-cockroaches at position 15, it is worth about 10.
- **2026-11-06, released by hand just after 7 pm Toronto on Nov 5 (with the homepage title and the photo licence commit `c6a0b08e`):**
  - **Live (5):** little-black-ants, roach-droppings-vs-mouse-droppings, christmas-tree-bugs, best-bed-bug-interceptors, best-wasp-spray. Pace: 21 new in the 7 days to Nov 6, so 4 more fit on Nov 6 (UTC).
  - **Links in** (the release gate holds a page until a live guide links it): one sentence each on best-bed-bug-mattress-cover, pillar-bed-bugs, paper-wasps, spider-egg-sacs, cockroach-droppings, mouse-poop, black-ants and tiny-ants; on yellow-jackets one link swapped from the Canadian wasp removal page to best-wasp-spray. All 9 validated and their records amended. None is in a frozen test.
  - **US editions:** best-bed-bug-interceptors pairs with bed-bug-interceptor-traps-canada and best-wasp-spray with best-wasp-nest-spray-canada (REGIONAL_PAIRS, hreflang on both Canadian pages, affiliate tokens unchanged). The regional script's edits to 5 other Canadian pages were reverted.
  - **amazon.com picks:** "Bed bug interceptor cups" and "Wasp and hornet jet spray" (basis sentences in `lib/amazon-us-picks.json`). The two buying guides send readers on to US guides, not Canadian amazon.ca pages (overrides plus stored cards).
  - **Homepage (owner's request):** title "Mosquito & Tick Control | Greater Toronto Area | From $99"; H1 "Mosquito & Tick Control in the Greater Toronto Area"; hero line "for backyards across the GTA, from our Mississauga-based team". Read it in May-June 2027 (memory `project_homepage_title_gbp`).
- **2026-11-06, the mosquito & tick section** (owner: "fix the entire mosquito section... make the 10 pages... put the buttons near the top... make the existing pages rank higher"; commits `cb35171f`, `910b3797`, `e61d04a3` and the queue commit after them). Audit: memory `project_mosquito_tick_money_nov6`. Each page had a beat-the-top-3 read and a separate fact-check.
  - **Upgraded and live (12):**
    - mosquito-larvae-identification (30,700 summer impressions at 9.7) and the laser page (#1 earner);
    - tick-head-stuck-in-skin (new title) and deer-tick-vs-dog-tick-canada;
    - the repellent-device, DynaTrap and bug-zapper pages, plus screen tent and tick-removal-tool;
    - the best and natural repellent pages;
    - best-tick-repellent-yard-canada (broken by the Nov 5 sweep; now "Yard Tick Spray Canada: Is Cedarcide Registered?").
    - Every Amazon element byte-identical against source snapshots. The Repel button became Natrapel lemon eucalyptus (30823), per the Nov 5 rule.
    - Sourced corrections: black flies get through standard mesh; DynaTrap models and bulbs; no DT3050 exists; propane-trap evidence softened.
  - **Top boxes and amazon.com lines: already done.** Every traffic-side mosquito/tick buying page got its box in October (the laser page has a TopPick under the disclosure). The pages Americans read already carry the line; the rest had under 90 US views all summer.
  - **New and live (4):**
    - what-do-mosquito-bites-look-like and skeeter-syndrome;
    - deer-tick-vs-dog-tick (US; REGIONAL_PAIRS added);
    - best-tick-repellent (Canadian TSX, registered products only, Natrapel pinned to ASIN B0BYFF3S3V; no Sawyer/Avon/Murphy's buttons because amazon.ca can show their US bottles).
  - **Released the same evening (owner: "you can push everything now. It's okay. Just don't forget to request to index it as the days go by"):** a hand run with `PACE_OVERRIDE` (the robot never sets it):
    - types-of-mosquitoes, asian-tiger-mosquito, permethrin-for-clothing and best-tick-spray-for-yard (commit `125df80d`, live and checked);
    - best-mosquito-spray-for-yard (277 claims checked, 12 corrected, 8 softened or removed: the 25-day and 6-week barrier results came from licensed applicators with mist blowers, now said) and mosquito-bits-vs-dunks (307 checked, 9 corrected; EPA's Dec 2021 Bits label adds a dry fungus gnat method).
    - Nov 6 ends at 15 new URLs (5 robot + 10 mosquito & tick). The 10/25 cap applies again from Nov 7. Counted from the release records, there is no room Nov 7-10, 1 page on Nov 11, and 10 a day again from Nov 12. Edits and upgrades stay uncapped.
  - **Held to 2027-04-05:** the 11 rare-species and mosquito-disease pages; /learn/types-of-mosquitoes is deferred.
  - **AFTER EACH ROBOT RELEASE (by hand, the release does not do these). DONE Nov 6 evening for all six:** picks (types-of-mosquitoes has a `_noPick` reason), the three pairs with hreflang plus the "See the US edition" line on the three Canadian twins where it does not push the first product link down (deer-tick-vs-dog-tick-canada skipped for that reason), and the indexing queue.
    1. amazon.com top picks into `lib/amazon-us-picks.json`, only once the page is live (check:amazon fails on a pick for a non-live page). Asian tiger: "Picaridin insect repellent", basis "Protect your skin. CDC recommends EPA-registered repellents..." The buying guides take their notes' proposed top pick.
    2. REGIONAL_PAIRS plus withRegionalAlternates on the Canadian twin: permethrin-for-clothing ↔ permethrin-canada-yard-clothing-spray, best-tick-spray-for-yard ↔ best-tick-repellent-yard-canada, mosquito-bits-vs-dunks ↔ mosquito-bits-canada-vs-dunks. Neither of the first two Canadian pages wraps its metadata yet.
    3. Indexing queue: add each page first.
  - **Gamma-cyhalothrin:** taken out of best-tick-spray-for-yard's picks. EPA's 2020 proposed interim decision proposed cancelling its outdoor residential uses; the final 2021 decision could not be read (403). Bifenthrin granules are the top pick.
  - **Owner flags (Amazon elements, not changed by the agents):** see scratchpad `upgrades/*.md`. Example: unsourced DynaTrap XL row specs.
- **NEXT "go" (Nov 6; pace room 4 on Nov 6 UTC: 21 new in the 7 days to Nov 6):**
  - **First:** the NOW 10 (section 4), within the cap, starting with brown-recluse, phorid-flies, centipede-vs-millipede, tiny-flying-bugs-in-house and flea-bites-vs-bed-bug-bites.
  - **Then:** the german-cockroaches and house-centipedes pushes, and the December mosquito holds above.
  - **amazon.com picks on 3 of the Nov 6 morning pages: DONE Nov 6 evening.** little-black-ants: ant bait stations ("Bait first, then seal"); roach-droppings-vs-mouse-droppings: EPA-registered disinfectant spray (CDC's cleanup steps); christmas-tree-bugs: cordless handheld vacuum (Penn State: vacuum strays; no aerosol on the tree).
  - **Owner decisions from the merges:**
    1. A CimeXa buy button sits on a page that says CimeXa is not registered in Canada.
    2. bed-bug-spray-canada now carries a US-products table with amazon.ca buttons for products not legal in Canada.
    3. The cockroach page's top box and sticky bar say "Best overall: Combat", which the page says is no longer registered. Switch them to Raid bait.
    4. ~~The large-capacity dehumidifier page has 43 buttons; trim the low ones.~~ **Declined Nov 6:** the owner said no to Amazon button trims ("Isn't that going to decrease our Amazon income?"). Do not trim.
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
