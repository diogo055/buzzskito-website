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
| 1 | `/blog/best-rat-trap-canada` | rat trap (11), rat traps (8.6), rat zapper (11.2) | Electric "rat zapper" section, numbered picks, comparison table, pros/cons |
| 2 | `/blog/best-mouse-trap-canada` | mouse traps (10-20) | Same pattern. **Allowed now** |
| 3 | `/blog/mouse-repellent-canada` | nestoff mouse repellent (7.1, 1,150 in Oct) | NestOff section (label, evidence, what it can't do). **Allowed now** |
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

**NEXT 10:**

| # | Target search | Family | Why | Notes |
|---|---|---|---|---|
| 1 | little black ants | ants / ID | Competitor Fox Pest gets ~8,300 visits from it | Link black-ants and tiny-ants both ways |
| 2 | NestOff mouse repellent | product (Amazon) | 1,805 impressions in 6 months at position 7 with no page; rising now | Brand-page pattern (vamoose-for-mice went 0 to 65 clicks in 28 days) |
| 3 | yellow jacket (+ vs wasp, vs hornet) | wasps / species | ~41K US a month; 5,393 impressions already at position 8.8 | Planned Dec 14; build now |
| 4 | carpenter bee vs bumble bee | wasps / vs | Fox 2,600 visits | Planned Dec 14 |
| 5 | types of wasps | wasps / ID chart | 17K US a month | Wasp ID chart page |
| 6 | vole | mice and rats / species | 101K US a month, KD 11 | **Photo first** (PD/CC0) |
| 7 | American cockroach | cockroaches / species | 5,700 US a month; image demand | |
| 8 | roach droppings vs mouse droppings | droppings / vs | competitors 2,400 visits; winter | Link both droppings pages |
| 9 | signs of termites (+ mud tubes) | household / ID | 8,600 US a month | Live by early March |
| 10 | wasp vs bee (+ bugs that look like bees) | wasps / vs | bettertermite 1,437 visits | |

**Then, in order:**
- 11-20: flea bites vs bed bug bites (image demand 9,400 in 28 days); carpenter ant frass; bugs that look like termites; brown recluse (383K US, planned Feb 1, build in January); how to get rid of termites; snake poop (photo first); gnats vs fruit flies vs drain flies (one page); how to get rid of moles; yellow jacket sting; cricket poop.
- 21-40: American dog tick (US); possum poop (photo first); moth eggs; horse fly (US); bee sting vs wasp sting; how to get rid of squirrels; lone star tick (US); lacewings; fleas vs ticks; deer tick (US); huntsman spider; how to get rid of chipmunks; types of bees; carpenter ants vs termites; black flies (US); engorged tick; rat vs lizard droppings; roach bombs vs gel bait; then `new_pages.csv` from #39.
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
  - Research done (targets, Amazon, top-3 tactics, index status); Keyword Planner volumes pending.
  - The stuck daily-indexing run stopped.
  - 11 pages requested in Search Console: flea-bites, baby-snakes, lovebugs, wood-roaches, bat-bugs, crazy-ants, skunk-smell-in-house, bugs-in-basement, baby-silverfish, the ant-control hub, and how-long-do-ants-live (fold).
- **NEXT (first "go"):**
  - Build #1-#3 (little black ants, NestOff mouse repellent, yellow jacket).
  - Push #2-#3 (mouse traps, mouse repellent: allowed now).
  - Check the 9:10 indexing run.
