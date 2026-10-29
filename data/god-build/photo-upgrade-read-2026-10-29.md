# Did the photo upgrade work? The real read, Oct 29, 2026

**What was tested.** On Oct 15-16, 2026, 29 articles under `/blog/` got real photos
(`ARTICLES_PHOTOS_OCT15`, 9 pages, and `ARTICLES_PHOTOS_OCT16`, 20 pages, in `app/sitemap.ts`).
19 of them also got a new title. 10 kept their old title. The question: do these pages now get
more Google clicks than similar pages that were not upgraded?

**Data.** Google Search Console, final data only. Oct 28 was not final yet, so both windows end
one day earlier than planned: **before = Oct 4-13, after = Oct 18-27.** Both are 10 days, Sunday to
Tuesday, so the weekday mix matches. Oct 14-17 is skipped to give Google time to recrawl.
The Oct 18 smoke test (`gsc-review-2026-10-18.md`, section 4 and Appendix C) used the same method.

---

## The answer in short

**Verdict: the upgrade raised clicks, but the photos are not why.** Part by part:

| Part of the change | Web search | Google Images |
|---|---|---|
| Photos alone (10 pages, title unchanged) | **Didn't work.** 174 clicks vs 176 if they had moved like the control. | **Worked.** Part of the jump below. |
| New title that dropped "Canada" or "Ontario" (9 pages) | **Worked.** 300 clicks vs 158 (+90%). Mostly a recovery (see point 4). | Same as above. |
| New title that kept the place word, or never had one (10 pages) | **Unclear.** +30% vs the control, but this group swings that much with no change at all. | Same as above. |
| All 29 together | 630 clicks vs 454 (+39%). Click-through rate unchanged. | 16 to 135 image clicks. The control: 1 to 0. |

1. **Photos did not change web search.** The 10 photo-only pages earned what similar untouched
   pages predict. No change in how often Google showed them, no change in how often people clicked.
2. **Click-through rate did not improve.** All 29 pages got 630 clicks after. At each page's old
   click rate, adjusted for the control's change, we expected 604. The gap is normal noise (z +1.1).
3. **The gain came from Google showing 9 pages much more often.** Those 9 pages had "Canada" or
   "Ontario" removed from their title. Google then showed them to far more searchers, most likely
   outside Canada: impressions +65% against the control. Searches that name a Canadian place
   stayed flat on those pages, and the new impressions came from other searches.
4. **Most of that is a recovery, not new ground.** "Canada" or "Ontario" was added to 7 of those 9
   titles on Sep 17 (commit `3834646d`). The group of 9 then lost about half its traffic compared
   with similar pages. The new titles won it back. Compared with early September, all 29 pages are
   only about 8% ahead of similar pages.
5. **One page carries much of the result.** `no-see-um-bites` went from 97 to 186 clicks. Without
   it, the other 28 pages got +17% clicks against the control, with no change in click-through.
6. **Photos did pay off in Google Images.** Image clicks on the 29 pages went from 16 to 135, and
   image impressions from 27,617 to 105,901. Similar pages without new photos went from 1 to 0.
   The jump began on Oct 18-19, a week before the image sitemap went live (Oct 24), so the photos
   caused it. Bite pages earned most of it (chigger bites 48, flea bites 24).

---

## What the pages were compared against (the control)

- **The brief's rule leaves only 8 control pages, and none of them are year-round topics.** The
  rule was: hand-written `/blog/` articles with 150+ web impressions on Oct 4-14 whose
  `page.tsx` was not changed Oct 14-28. 163 of the 171 candidates were edited in that time. The
  Oct 20 Amazon top box alone touched 117 of them. The 8 left are all mosquito and tick posts,
  mostly Ontario ones.
- **The 29 upgraded pages were not frozen either.** 27 of 29 were edited after their upgrade day
  (only `mosquito-larvae-identification` and `male-vs-female-mosquito` were not). The edits
  were small, 1 to 5 lines: added links, links to the new identifier tools, the Amazon top box,
  small fact fixes. The full list is in Appendix C. These edits went live, so they are part of
  what was measured.
- **So the main control is 101 articles that got the same kind of small edits, but no photos, no
  new title and no rewrite** (56 seasonal, 45 year-round). Pages with any photo, title,
  retrofit, "top 3" upgrade, Amazon-text rewrite or US twin page in the window are left out.
  Edits made on Oct 28 are ignored, because they went live after the after-window ended.
  The strict 8-page control is used as a check.
- **Each page is compared with its own group.** Seasonal = mosquitoes, ticks, chiggers,
  no-see-ums, biting flies, wasps, spider bites. Year-round = bed bugs, mice, cockroaches, flies,
  fleas and other indoor pests (topic from `lib/article-index.json`).

| Control | Pages | Impressions Oct 4-13 -> Oct 18-27 | Clicks | Click-through rate |
|---|---|---|---|---|
| Strict (brief's rule), seasonal | 8 | 1,645 -> 1,785 (x1.09) | 25 -> 23 (x0.92) | 1.52% -> 1.29% (x0.85) |
| Strict (brief's rule), year-round | **0** | - | - | - |
| **Main control, seasonal** | 56 | 41,044 -> 38,182 (x0.93) | 232 -> 180 (x0.78) | 0.57% -> 0.47% (x0.83) |
| **Main control, year-round** | 45 | 17,863 -> 19,719 (x1.10) | 167 -> 156 (x0.93) | 0.93% -> 0.79% (x0.85) |
| Whole site, for context | all | 283,890 -> 447,516 (x1.58) | 2,285 -> 2,950 (x1.29) | 0.80% -> 0.66% |

The whole site grew mostly because of the new pages. Older pages (the control) did not grow.

---

## Results: web search

**How to read the tables.**
- *Expected clicks* = what the page would have earned at its own old click-through rate,
  adjusted for how the control's click-through rate changed. It tests the title and the search
  result, holding impressions fixed.
- *z* = how unusual the gap from expected is. Between -2 and +2 is normal noise.
- *Impressions vs control* = 1.00 means Google showed the pages exactly as much as the control
  would predict. 1.16 means 16% more.
- *If it had moved like the control* = the page's old clicks times the control's change in clicks.
  This is the bottom line: it counts both more impressions and a better click rate.

### Per set (Appendix C format, control = the main control)

| Set | Pages | CTR before -> after | Clicks before -> after | Expected clicks | z | Impressions per day | Impressions vs control | If it had moved like the control |
|---|---|---|---|---|---|---|---|---|
| Oct 15 set | 9 | 0.98% -> 0.96% | 342 -> 353 | 350 | +0.1 | 3,491 -> 3,675 | 1.13 | 265 (+33%) |
| Oct 16 set | 20 | 0.63% -> 0.68% | 206 -> 277 | 253 | +1.5 | 3,256 -> 4,060 | 1.18 | 189 (+47%) |
| Seasonal topics | 13 | 0.83% -> 0.84% | 365 -> 392 | 378 | +0.7 | 4,404 -> 4,686 | 1.14 | 283 (+38%) |
| Year-round topics | 16 | 0.78% -> 0.78% | 183 -> 238 | 226 | +0.8 | 2,342 -> 3,050 | 1.18 | 171 (+39%) |
| **All 29 (pooled)** | 29 | 0.81% -> 0.81% | **548 -> 630** | **604** | **+1.1** | 6,746 -> 7,735 | **1.16** | **454 (+39%)** |
| All 29 without `no-see-um-bites` | 28 | 0.72% -> 0.65% | 451 -> 444 | 456 | -0.6 | 6,272 -> 6,872 | 1.10 | 379 (+17%) |
| Without the 8 pages that have a US twin | 21 | 0.80% -> 0.81% | 454 -> 503 | 476 | +1.2 | 5,674 -> 6,216 | 1.13 | 367 (+37%) |

A more cautious z, which also counts the noise in the before window, is about two-thirds of the
z shown (pooled: +0.7). Either way, the click-through rate did not change.

### Which part of the change did what

| Kind of change | Pages | CTR before -> after | Clicks before -> after | Expected clicks | z | Impressions vs control | If it had moved like the control |
|---|---|---|---|---|---|---|---|
| Photos only (title unchanged) | 10 | 0.84% -> 0.71% | 212 -> 174 | 179 | -0.4 | 0.98 | 176 (-1%) |
| Photos + new title, place word unchanged | 10 | 0.56% -> 0.62% | 143 -> 156 | 121 | +3.2 | 1.01 | 120 (+30%) |
| Photos + new title that dropped Canada/Ontario | 9 | 1.17% -> 1.09% | 193 -> 300 | 304 | -0.2 | **1.65** | **158 (+90%)** |

The middle row looks good on paper (z +3.2). But the history below shows this group swings by
30-40% against the control with no change at all, so it is unclear.

### The longer view: four 10-day windows

Clicks of each group against the control, with Oct 4-13 set to 1.00. All windows run Sunday to
Tuesday. Above 1.00 = better than the control would predict.

| Group | Sep 6-15 | Sep 20-29 | Oct 4-13 (before) | Oct 18-27 (after) |
|---|---|---|---|---|
| 9 pages, new title dropped Canada/Ontario | **1.91** | 1.19 | 1.00 | **1.90** |
| 10 pages, photos + new title, place word unchanged | 0.97 | 1.36 | 1.00 | 1.30 |
| 10 pages, photos only | 0.93 | 1.09 | 1.00 | 0.99 |
| All 29 | 1.29 | 1.20 | 1.00 | 1.39 |

- The 9 pages fell by about half after "Canada/Ontario" went into their titles on Sep 17. They
  came back to the same level after the word came out on Oct 15-16. Their impressions tell the
  same story: 1.88, 1.09, 1.00, 1.65.
- The photo-only pages are flat in every window.
- Oct 4-13 was a low point for all three groups. So part of any rise after it is a rebound
  that might have happened anyway.
- 20 of the 29 titles that gained a Canadian place on Sep 17 still carry it today (scratch file
  `geo17.json`). Most of them also lost ground against the control after Sep 17.

### Biggest winners and losers

Measured as clicks after vs. what the page would have had if it had moved like the control:

| Winners | Clicks after | If it had moved like the control | What changed |
|---|---|---|---|
| `no-see-um-bites` | 186 | 75 | New title dropped "in Canada". Impressions x1.96 against the control. |
| `mouse-repellent-canada` | 46 | 19 | Photos only. Impressions x2.15, mostly new product searches ("nestoff mouse repellent"), so maybe not the photos. |
| `tick-vs-bed-bug` | 21 | 8.5 | New title. Click-through rate 0.65% -> 1.10%. |

| Losers | Clicks after | If it had moved like the control | What changed |
|---|---|---|---|
| `bugs-that-look-like-ticks` | 39 | 69 | Photos only. Same title, same position (6.6 -> 6.8), but click-through halved (1.43% -> 0.77%). Flagged in the Oct 18 smoke test too. |
| `what-does-a-spider-bite-look-like` | 21 | 39 | New title. Fewer searches shown (x0.58): spider-bite demand fell, and new spider pages went live. |
| `what-kills-bed-bugs-instantly-canada` | 7 | 17 | Photos only. Position fell 4.2 -> 6.4. Lost most of the broad "bed bugs" search. |

On click-through alone (the z column), `how-to-get-rid-of-drain-flies-canada` (z -3.2),
`chigger-bites` (-3.0) and `how-to-get-rid-of-carpet-beetles-canada` (-2.7) look worst. They are
not real losers: Google now shows them to two or three times as many people, lower on the page,
so the click rate fell while clicks held or rose.

**Pages whose average position moved by 1 or more** (a position change alone moves the click
rate): `chigger-bites` 6.2 -> 8.6, `how-to-get-rid-of-drain-flies-canada` 5.7 -> 8.6,
`mosquito-bite-vs-spider-bite` 6.4 -> 8.6, `what-kills-bed-bugs-instantly-canada` 4.2 -> 6.4
(all worse), `how-to-get-rid-of-carpet-beetles-canada` 7.5 -> 6.4 (better).

Full per-page table: Appendix A.

---

## Results: Google Images

| Group | Pages | Image impressions Oct 4-13 -> Oct 18-27 | Image clicks | Pages with any image impressions |
|---|---|---|---|---|
| **The 29 upgraded pages** | 29 | **27,617 -> 105,901** | **16 -> 135** | 14 -> 29 |
| of which seasonal | 13 | 14,931 -> 62,625 | 9 -> 96 | 8 -> 13 |
| of which year-round | 16 | 12,686 -> 43,276 | 7 -> 39 | 6 -> 16 |
| Main control (no new photos) | 101 | 723 -> 901 | 1 -> 0 | 11 -> 13 |
| Strict control | 8 | 0 -> 15 | 0 -> 0 | 0 -> 2 |
| All other `/blog/` pages (new guides, other photo waves) | 194 | 8,195 -> 136,302 | 6 -> 158 | 42 -> 178 |
| Whole site | - | 36,182 -> 245,545 | 23 -> 296 | - |

- **The photos caused the image gain, not the sitemap.** The 29 pages had 0-5 image clicks a day
  until Oct 17. They jumped to 11-18 a day on Oct 18-19. They averaged 13.8 a day on Oct 18-23 and
  13.0 a day on Oct 24-27, after the image sitemap went live.
- **The control got no image lift**, because those pages have almost no images to show.
- **The 29 pages earned 46% of the whole site's image clicks** in the after window.
- **It pays on bite and identification pages, not on how-to or product pages:**

| Page type | Pages | Image clicks before -> after | Image clicks per page in 10 days | Web clicks: after vs. if it had moved like the control |
|---|---|---|---|---|
| Bites | 6 | 15 -> 84 | **14.0** | 269 vs 162 (all of the gain is `no-see-um-bites`) |
| Identification ("what does X look like", look-alikes, X vs Y) | 12 | 1 -> 45 | 3.8 | 187 vs 160 |
| How-to and product | 11 | 0 -> 6 | 0.5 | 174 vs 132 |

To put that in scale: 135 image clicks next to 630 web clicks on the same pages. That adds about
a fifth, on top of web search. Images per page: Appendix B.

---

## Honest caveats

1. **Small numbers.** 29 pages, 548 -> 630 clicks. One page is 30% of all clicks and most of
   the gain. The z values treat clicks as simple random counts. Real pages swing more: in the
   weeks before the upgrade, groups of 10 of these pages moved 20-40% against the control with
   nothing changed.
2. **The before window was a low point.** Against the control, the 29 pages were 20% higher on
   Sep 20-29 than on Oct 4-13. Part of the rise is a rebound.
3. **Title and photos changed together on 19 pages.** The 10 photo-only pages are what let us
   separate the two. But they are a small group, and the topics differ between groups.
4. **No freeze.** 27 of 29 pages got small edits after the upgrade. The main control got the same
   kind of edits, so it is a fair comparison for those. Separately, 5 pages got a new US twin page
   with hreflang during the test: carpet beetles and centipedes on Oct 16; cockroaches, bed bug
   poop and mouse poop on Oct 20. Three more have had one since Oct 8 (baby ticks, bugs that look
   like bed bugs, mouse repellent). Google should send US searchers to the twin, which takes
   impressions from the Canadian page. Without those 8 pages, the result is about the same
   (+37% clicks against the control).
5. **Recrawl timing is fine.** Google recrawled all 29 pages after the upgrade. Their last crawls
   were Oct 20-29, all "Submitted and indexed", all with their own address as canonical. The web
   gain shows in the first week (Oct 18-24, z +1.7) and does not grow in the last three days
   (Oct 25-27, z -0.5). So the after window measures the new versions.
6. **The control is imperfect.** With the strict 8-page control, the seasonal pages gain less:
   +9% to +17% clicks instead of +38%. There is no strict year-round control at all. The main
   year-round control mixes topics (bed bugs, dehumidifiers, ants, wildlife, steamers).
7. **Seasons differ inside "seasonal".** Untouched tick pages rose 25% in late October (adult tick
   season), while mosquito pages fell 9%. Against tick pages only, the 7 upgraded tick pages did
   25% worse. Against topic-matched controls the pooled result is about the same: +41% clicks,
   click-through x1.10 (z +2.4, cautious z +1.6).
8. **New pages went live in the after window.** Dozens of new spider, tick, bite and state pages
   went live. Some may now take searches from older pages, on both sides of the test.
9. **Canadian vs US clicks can't be split per page.** Search Console's page-plus-country numbers
   drop most Canadian clicks, so they were not used. As a proxy: on the 9 Canada-dropped pages,
   searches that name a Canadian place went 303 -> 342 impressions; all other searches went
   6,867 -> 13,719.
10. **The freeze ended today.** Commit `8732ed67` (Oct 29) edited 12 of the 29 pages (photos and
    tool links). Any later read of these 29 pages is mixed from Oct 29 on.

---

## Recommendation

**Do not roll the same package out to many pages and expect web traffic from the photos.**
Photos alone did nothing for web clicks, rankings or click-through. Most pages have no
"Canada/Ontario" to remove, so the part that worked does not carry over to them.

**Do these instead, in this order:**

1. **Fix the place word in titles first. It is the cheapest change and it is the one that worked.**
   - 20 titles that gained a Canadian place on Sep 17 still carry it (list in scratch
     `geo17.json`).
   - Remove it from the information pages about pests that are the same everywhere: bites,
     identification, simple questions. For example `tick-bite-vs-mosquito-bite`, `bed-bug-bites`,
     `bed-bug-bites-vs-mosquito-bites`, `horse-fly-and-deer-fly-bite-treatment`,
     `do-ticks-die-in-the-washing-machine`, `what-eats-ticks-and-mosquitoes`.
   - Keep the place word on local service posts and on Amazon product pages, where Canadian
     buyers are the point. amazon.ca links earn only when the reader buys on amazon.ca, which US
     readers rarely do.
   - Leave it on pages that have a US twin (hreflang). They are the Canadian edition on purpose.
     Three of the 9 pages lost their place word on Oct 16 while getting a twin
     (`how-to-get-rid-of-carpet-beetles-canada`, `what-does-mouse-poop-look-like-canada`,
     `bed-bug-stains-poop-droppings-canada`). That mix is worth a second look.
   - Expect more US readers. That is good for traffic and for display ads, not for amazon.ca.
   - Run it as the next test (method below): half of these pages now, the other half held back.
     Mosquito topics are out of season now, so their part will read better in spring.
2. **Keep adding real photos, but to bite and identification pages first.** Expect Google Images
   visits: about 14 image clicks per bite page and 4 per identification page every 10 days. Expect
   almost nothing on how-to and product pages (0.5). This supports the Google Images photo waves
   already running. Point them at bite and ID pages.
3. **Look at `bugs-that-look-like-ticks` by hand.** Same title and same position, but half the
   clicks since the photos went in. Search for it and see what Google now shows. Its 13 new image
   clicks do not make up for the 30 web clicks it lost.

**How to measure the next batch, so the answer is clean:**

- **Split the pages at random into two halves.** Change one half and leave the other half alone.
  The untouched half is the control. Then no hunt for untouched pages is needed.
- **One kind of change per batch.** Either photos or a title change, never both, so we know which
  one did it.
- **Freeze both halves for three weeks.** No links, no Amazon edits, no new twin pages. If an edit
  can't wait, make it on both halves.
- **Read it the same way as this time.** 10 days after a 3-day gap, against the same 10 weekdays
  before. Also look at two earlier 10-day windows, to see whether "before" was a dip.
- **Read web search and Google Images separately.**
- **Count a result only if it beats the normal swing.** For a group of about 10 pages over
  10 days, that swing is 20-40% against the control.

---

## Appendix A. The 29 pages: before vs after (Appendix C format)

Before = Oct 4-13, after = Oct 18-27 (10 days each, Sunday to Tuesday). Control = the main control
(same small edits, no upgrade), seasonal or year-round to match the page.
- *Rel. impr* = the page's after/before impressions divided by its control group's.
- *Expected* = after-impressions x the page's own before click-through rate x the control's change
  in click-through (x0.83 seasonal, x0.85 year-round).
- *z* = (clicks - expected) / square root of expected.
- *If moved like control* = before clicks x the control's change in clicks (x0.78 seasonal,
  x0.93 year-round).
- *Change*: "photos" = photos only; "photos + title" = new title as well; "photos + title, no
  Canada" = the new title dropped Canada or Ontario; "US twin" = has a US page linked by hreflang.

| Page | Set | Topic | Change | Impr/day before | Impr/day after | Rel. impr | CTR before | CTR after | Clicks before | Clicks after | Expected | z | If moved like control | Pos before | Pos after | Head query: pos before/after, CTR before/after (impr after) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| /blog/mosquito-larvae-identification | Oct 15 | seasonal | photos | 550 | 469 | 0.92 | 0.44% | 0.36% | 24 | 17 | 17.1 | -0.0 | 18.6 | 7.5 | 6.7 | 'mosquito larvae' 9.5/8.5, 0.1%/0.1% (772) |
| /blog/red-ticks-and-clover-mites | Oct 15 | seasonal | photos + title, no Canada | 201 | 381 | 2.03 | 0.60% | 0.32% | 12 | 12 | 18.9 | -1.6 | 9.3 | 6.6 | 6.7 | 'red tick' 5.6/8.3, 0.0%/0.0% (1034) |
| /blog/tick-vs-bed-bug | Oct 15 | seasonal | photos + title | 170 | 191 | 1.21 | 0.65% | 1.10% | 11 | 21 | 10.4 | 3.3 | 8.5 | 6.9 | 7.4 | 'tick vs bed bug' 13.7/18.7, 0.0%/0.0% (35) |
| /blog/tick-bite-vs-mosquito-bite | Oct 15 | seasonal | photos | 133 | 84 | 0.68 | 1.43% | 0.71% | 19 | 6 | 10.0 | -1.3 | 14.7 | 5.7 | 5.7 | 'tick bite vs mosquito bite' 6.7/6.6, 0.6%/1.0% (103) |
| /blog/what-does-a-spider-bite-look-like | Oct 15 | seasonal | photos + title | 793 | 427 | 0.58 | 0.63% | 0.49% | 50 | 21 | 22.5 | -0.3 | 38.8 | 6.3 | 7.3 | 'what does a spider bite look like' 7.5/6.6, 0.3%/0.6% (465) |
| /blog/bugs-that-look-like-ticks | Oct 15 | seasonal | photos | 624 | 504 | 0.87 | 1.43% | 0.77% | 89 | 39 | 60.0 | -2.7 | 69.1 | 6.6 | 6.8 | 'bugs that look like ticks' 7.3/7.7, 2.7%/0.7% (149) |
| /blog/no-see-um-bites | Oct 15 | seasonal | photos + title, no Canada | 474 | 864 | 1.96 | 2.05% | 2.15% | 97 | 186 | 147.4 | 3.2 | 75.3 | 5.0 | 5.7 | 'no see um bites' 4.6/7.4, 0.9%/1.6% (317) |
| /blog/chigger-bites | Oct 15 | seasonal | photos + title, no Canada | 155 | 337 | 2.33 | 2.00% | 1.01% | 31 | 34 | 56.1 | -3.0 | 24.1 | 6.2 | 8.6 (moved 1+) | 'chiggers' 2.0/4.1, 4.9%/1.6% (122) |
| /blog/how-long-do-ticks-live | Oct 15 | seasonal | photos | 390 | 418 | 1.15 | 0.23% | 0.41% | 9 | 17 | 8.0 | 3.2 | 7.0 | 7.2 | 7.6 | 'how long can ticks live in a house' 7.7/7.7, 0.6%/0.0% (292) |
| /blog/baby-ticks-nymphs-seed-ticks-ontario | Oct 16 | seasonal | photos + title, US twin | 73 | 56 | 0.84 | 0.41% | 0.88% | 3 | 5 | 1.9 | 2.2 | 2.3 | 7.3 | 7.0 | 'baby tick' 7.6/8.9, 0.0%/0.0% (17) |
| /blog/bed-bug-shells-casings-shed-skins-canada | Oct 16 | year-round | photos + title, no Canada | 66 | 162 | 2.23 | 0.46% | 0.68% | 3 | 11 | 6.2 | 1.9 | 2.8 | 7.7 | 7.7 | 'bed bug shells' 7.9/7.9, 1.8%/0.0% (84) |
| /blog/bed-bug-stains-poop-droppings-canada | Oct 16 | year-round | photos + title, no Canada, US twin | 196 | 179 | 0.83 | 0.82% | 0.84% | 16 | 15 | 12.4 | 0.7 | 14.9 | 6.9 | 6.4 | 'bed bug poop' 9.1/4.4, 0.0%/0.0% (48) |
| /blog/bugs-that-look-like-bed-bugs-canada | Oct 16 | year-round | photos + title, US twin | 91 | 116 | 1.16 | 1.32% | 1.29% | 12 | 15 | 12.9 | 0.6 | 11.2 | 7.2 | 6.6 | 'bugs that look like bed bugs' 8.1/7.1, 0.0%/1.4% (138) |
| /blog/flea-bites-on-humans | Oct 16 | year-round | photos + title | 240 | 366 | 1.38 | 0.38% | 0.49% | 9 | 18 | 11.6 | 1.9 | 8.4 | 8.2 | 9.2 | 'what do flea bites look like' 6.9/10.2, 0.0%/0.5% (212) |
| /blog/how-to-get-rid-of-boxelder-bugs-canada | Oct 16 | year-round | photos + title, no Canada | 227 | 144 | 0.57 | 0.40% | 0.91% | 9 | 13 | 4.8 | 3.7 | 8.4 | 8.6 | 8.6 | 'how to get rid of boxelder bugs' 9.1/10.7, 0.0%/0.0% (21) |
| /blog/how-to-get-rid-of-carpet-beetles-canada | Oct 16 | year-round | photos + title, no Canada, US twin | 63 | 213 | 3.06 | 1.43% | 0.56% | 9 | 12 | 25.7 | -2.7 | 8.4 | 7.5 | 6.4 (moved 1+) | 'carpet beetles canada' 7.9/7.9, 0.0%/0.0% (8) |
| /blog/how-to-get-rid-of-centipedes-canada | Oct 16 | year-round | photos + title, US twin | 276 | 326 | 1.07 | 0.87% | 0.71% | 24 | 23 | 24.0 | -0.2 | 22.4 | 5.9 | 6.4 | 'how to get rid of house centipedes' 2.9/3.5, 4.0%/2.3% (131) |
| /blog/how-to-get-rid-of-cluster-flies-canada | Oct 16 | year-round | photos + title | 83 | 85 | 0.93 | 1.68% | 2.23% | 14 | 19 | 12.1 | 2.0 | 13.1 | 7.0 | 7.0 | 'cluster flies ontario' 8.5/7.2, 4.5%/0.0% (15) |
| /blog/how-to-get-rid-of-cockroaches-canada | Oct 16 | year-round | photos, US twin | 84 | 100 | 1.09 | 0.96% | 0.60% | 8 | 6 | 8.1 | -0.7 | 7.5 | 7.7 | 8.0 | 'cockroach' 2.1/2.2, 0.0%/0.0% (22) |
| /blog/how-to-get-rid-of-drain-flies-canada | Oct 16 | year-round | photos + title, no Canada | 106 | 264 | 2.26 | 1.32% | 0.45% | 14 | 12 | 29.6 | -3.2 | 13.1 | 5.7 | 8.6 (moved 1+) | 'drain flies' 4.0/10.7, 0.0%/0.2% (857) |
| /blog/how-to-get-rid-of-fruit-flies | Oct 16 | year-round | photos | 55 | 75 | 1.23 | 0.72% | 0.27% | 4 | 2 | 4.6 | -1.2 | 3.7 | 8.6 | 8.5 | 'fruit fly drain killer canadian tire' 9.8/12.0, 0.0%/0.0% (2) |
| /blog/how-to-keep-mice-out-of-your-car | Oct 16 | year-round | photos | 159 | 222 | 1.27 | 0.95% | 0.81% | 15 | 18 | 17.8 | 0.0 | 14.0 | 7.8 | 7.6 | 'how to keep mice out of cars' 9.0/8.7, 2.8%/0.0% (63) |
| /blog/male-vs-female-mosquito | Oct 16 | seasonal | photos + title | 689 | 680 | 1.06 | 0.19% | 0.31% | 13 | 21 | 10.7 | 3.2 | 10.1 | 6.7 | 6.4 | 'male mosquito' 8.3/8.7, 0.3%/0.0% (324) |
| /blog/mosquito-bite-vs-spider-bite | Oct 16 | seasonal | photos + title | 86 | 95 | 1.18 | 0.12% | 0.42% | 1 | 4 | 0.9 | 3.2 | 0.8 | 6.4 | 8.6 (moved 1+) | 'spider bite vs mosquito bite' 5.7/9.8, 0.0%/0.0% (151) |
| /blog/mouse-bait-station-canada | Oct 16 | year-round | photos | 104 | 119 | 1.04 | 0.58% | 1.35% | 6 | 16 | 5.8 | 4.2 | 5.6 | 5.1 | 5.2 | 'best mouse poison in canada' 9.9/10.0, 0.0%/0.0% (54) |
| /blog/mouse-repellent-canada | Oct 16 | year-round | photos, US twin | 131 | 312 | 2.15 | 1.52% | 1.47% | 20 | 46 | 40.2 | 0.9 | 18.7 | 6.3 | 7.3 | 'best mouse repellent canada' 6.8/5.3, 0.0%/1.1% (178) |
| /blog/types-of-ticks-identification | Oct 16 | seasonal | photos + title | 65 | 180 | 2.98 | 0.92% | 0.50% | 6 | 9 | 13.9 | -1.3 | 4.7 | 8.0 | 8.3 | 'tick identification ontario' 5.5/4.0, 0.0%/0.0% (6) |
| /blog/what-does-mouse-poop-look-like-canada | Oct 16 | year-round | photos + title, no Canada, US twin | 160 | 217 | 1.23 | 0.13% | 0.23% | 2 | 5 | 2.3 | 1.8 | 1.9 | 8.2 | 7.5 | 'what does mouse poop look like' 8.3/7.1, 0.0%/0.0% (112) |
| /blog/what-kills-bed-bugs-instantly-canada | Oct 16 | year-round | photos | 303 | 149 | 0.45 | 0.59% | 0.47% | 18 | 7 | 7.5 | -0.2 | 16.8 | 4.2 | 6.4 (moved 1+) | 'bed bugs' 2.1/2.3, 0.8%/0.0% (131) |

Head queries carry very few clicks (most are 0-7). They show where Google moved the page, not the result.

## Appendix B. Google Images, page by page

Image impressions and clicks, Oct 4-13 -> Oct 18-27.

| Page | Type | Image impressions | Image clicks |
|---|---|---|---|
| /blog/chigger-bites | bites | 8,023 -> 26,025 | 7 -> 48 |
| /blog/flea-bites-on-humans | bites | 9,932 -> 21,058 | 6 -> 24 |
| /blog/tick-vs-bed-bug | identification | 2,521 -> 10,692 | 0 -> 13 |
| /blog/bugs-that-look-like-ticks | identification | 1,431 -> 5,718 | 0 -> 13 |
| /blog/mosquito-larvae-identification | identification | 694 -> 3,383 | 0 -> 5 |
| /blog/what-does-mouse-poop-look-like-canada | identification | 825 -> 5,215 | 1 -> 5 |
| /blog/what-does-a-spider-bite-look-like | bites | 0 -> 5,088 | 0 -> 4 |
| /blog/no-see-um-bites | bites | 1,107 -> 3,680 | 2 -> 4 |
| /blog/bed-bug-shells-casings-shed-skins-canada | identification | 0 -> 1,711 | 0 -> 3 |
| /blog/how-to-get-rid-of-carpet-beetles-canada | how-to | 0 -> 3,543 | 0 -> 3 |
| /blog/types-of-ticks-identification | identification | 157 -> 1,277 | 0 -> 3 |
| /blog/red-ticks-and-clover-mites | identification | 226 -> 1,876 | 0 -> 2 |
| /blog/tick-bite-vs-mosquito-bite | bites | 772 -> 2,959 | 0 -> 2 |
| /blog/mosquito-bite-vs-spider-bite | bites | 0 -> 756 | 0 -> 2 |
| /blog/bugs-that-look-like-bed-bugs-canada | identification | 33 -> 1,819 | 0 -> 1 |
| /blog/how-to-get-rid-of-boxelder-bugs-canada | how-to | 0 -> 1,518 | 0 -> 1 |
| /blog/how-to-get-rid-of-fruit-flies | how-to | 0 -> 913 | 0 -> 1 |
| /blog/what-kills-bed-bugs-instantly-canada | how-to | 0 -> 446 | 0 -> 1 |
| /blog/how-to-get-rid-of-drain-flies-canada | how-to | 0 -> 2,031 | 0 -> 0 |
| /blog/bed-bug-stains-poop-droppings-canada | identification | 1,893 -> 1,743 | 0 -> 0 |
| /blog/how-to-get-rid-of-cockroaches-canada | how-to | 0 -> 1,280 | 0 -> 0 |
| /blog/how-to-get-rid-of-centipedes-canada | how-to | 0 -> 1,162 | 0 -> 0 |
| /blog/how-long-do-ticks-live | identification | 0 -> 755 | 0 -> 0 |
| /blog/baby-ticks-nymphs-seed-ticks-ontario | identification | 0 -> 335 | 0 -> 0 |
| /blog/mouse-repellent-canada | product | 0 -> 318 | 0 -> 0 |
| /blog/how-to-get-rid-of-cluster-flies-canada | how-to | 1 -> 315 | 0 -> 0 |
| /blog/how-to-keep-mice-out-of-your-car | how-to | 0 -> 130 | 0 -> 0 |
| /blog/male-vs-female-mosquito | identification | 0 -> 81 | 0 -> 0 |
| /blog/mouse-bait-station-canada | product | 2 -> 74 | 0 -> 0 |

## Appendix C. Freeze check: edits after the upgrade

From `git log --since=2026-10-14 --until=2026-10-29 -- app/blog/<slug>/page.tsx` on the live branch.
The Oct 15 set went live in commit `cc08d5ba` (Oct 14, 22:13 Eastern). The Oct 16 set went live in
`17b50ae4` (Oct 16, 00:08) and `dfce252b` (Oct 16, 01:33). Lines are added/removed in `page.tsx`.
**27 of 29 pages changed after their upgrade day.** Commit `f4c4a761` (Oct 14, quote-box
removal) also touched 7 of the 29 just before their upgrade, after the before window ended.

| Page | Edits after the upgrade (date: what, lines +/-) |
|---|---|
| mosquito-larvae-identification | none |
| red-ticks-and-clover-mites | Oct 23: bite-identifier link + Lyme timing fix (+3/-3); Oct 23: tick/spider identifier link (+1) |
| tick-vs-bed-bug | Oct 21: links (+3); Oct 23: bite-identifier link + Lyme timing fix (+2/-2); Oct 23: identifier link (+1) |
| tick-bite-vs-mosquito-bite | Oct 23: bite-identifier link (+1) |
| what-does-a-spider-bite-look-like | Oct 16: links (+3, +2); Oct 23: bite-identifier link (+1); Oct 23: identifier link (+1) |
| bugs-that-look-like-ticks | Oct 23: bite-identifier link + Lyme timing fix (+3/-3); Oct 23: identifier link (+1) |
| no-see-um-bites | Oct 16: link (+1); Oct 21: link (+1); Oct 23: bite-identifier link (+1) |
| chigger-bites | Oct 16: link (+1); Oct 23: bite-identifier link (+1) |
| how-long-do-ticks-live | Oct 23: bite-identifier link + Lyme timing fix (+2/-2); Oct 29 edit (after the window) |
| baby-ticks-nymphs-seed-ticks-ontario | Oct 23: identifier link (+1) |
| bed-bug-shells-casings-shed-skins-canada | Oct 21: link (+1); Oct 29 edit (after the window) |
| bed-bug-stains-poop-droppings-canada | **Oct 20: US twin + hreflang (+3/-2)**; Oct 21: link (+1); Oct 22: fix + link (+1/-1); Oct 29 edit |
| bugs-that-look-like-bed-bugs-canada | Oct 16: link (+1); Oct 21: links (+2); Oct 22: fix + link (+1/-1); Oct 29 edit |
| flea-bites-on-humans | Oct 16: links (+3, +2), copy fix (+2/-2); Oct 21: link (+1); Oct 23: bite-identifier link (+1) |
| how-to-get-rid-of-boxelder-bugs-canada | Oct 16: links (+1, +1); Oct 20: Amazon top box (+2) |
| how-to-get-rid-of-carpet-beetles-canada | **Oct 16: US twin + hreflang (+5/-2)**; Oct 20: Amazon top box (+2) |
| how-to-get-rid-of-centipedes-canada | Oct 16: link (+1), copy fix (+2/-2), **US twin + hreflang (+5/-2)**; Oct 20: Amazon top box (+2) |
| how-to-get-rid-of-cluster-flies-canada | Oct 16: link (+1); Oct 20: Amazon top box (+2); Oct 29 edit |
| how-to-get-rid-of-cockroaches-canada | Oct 16: links (+2); Oct 20: boric-acid fix (+5/-5), Amazon top box (+2), **US twin + hreflang (+3/-2)**; Oct 22: fix + links (+3/-3); Oct 29 edit |
| how-to-get-rid-of-drain-flies-canada | Oct 20: Amazon top box (+2) |
| how-to-get-rid-of-fruit-flies | Oct 20: Amazon top box (+2); Oct 21: link (+1) |
| how-to-keep-mice-out-of-your-car | Oct 20: Amazon top box (+2); Oct 21: links (+3); Oct 29 edit |
| male-vs-female-mosquito | Oct 29 edit only (after the window) |
| mosquito-bite-vs-spider-bite | Oct 16: links (+6, +3); Oct 23: bite-identifier link (+3); Oct 23: identifier link (+3) |
| mouse-bait-station-canada | Oct 18: mobile layout fix (+2); Oct 20: Amazon top box (+2); Oct 21: link (+1); Oct 29 edit |
| mouse-repellent-canada | Oct 20: Amazon top box (+2); Oct 21: links (+3); Oct 29 edit |
| types-of-ticks-identification | Oct 23: identifier link (+1) |
| what-does-mouse-poop-look-like-canada | Oct 16: link (+1); **Oct 20: US twin + hreflang (+5/-2)**; Oct 21: link (+1); Oct 29 edit |
| what-kills-bed-bugs-instantly-canada | Oct 20: Amazon top box (+2); Oct 29 edit |

The upgrade commits themselves added 15-41 lines per page (photos, and the title on 19 pages).

## Appendix D. Method and files

- **Pulls.** Search Console API, `sc-domain:buzzskito.ca`, `dataState: final`, single dimension only.
  - `page`, for web and image, per window: Sep 6-15, Sep 20-29, Oct 4-13, Oct 18-27, plus Oct 4-14
    for picking the control.
  - `page`, one pull per day for Oct 4-27. The daily sums match the window totals exactly.
  - `query` with a page filter, for the 29 pages' head queries.
  - URL Inspection, for the 29 pages' last crawl dates.
  - Sitelink rows with `#` in the address were dropped (they have no clicks).
- **Which days were final.** On Oct 29, Search Console marked Oct 28 as the first incomplete day.
- **Two numbers per page.** *Expected clicks* tests the click-through rate with impressions held
  fixed (the brief's measure). *If it had moved like the control* tests the bottom line. A page
  can lose on the first and win on the second when Google shows it to many more people lower
  down, as with `chigger-bites`.
- **Cautious z.** Adds the noise in the page's own before-window clicks to the variance
  (expected + expected squared / before-clicks).
- **Main control.** Same pool as the brief's rule, but a page may carry only these edits in
  Oct 14-27: link rounds, the identifier-tool links, the Oct 20 Amazon top box, the Oct 18 mobile
  fix, the Oct 14 quote-box removal, and one-line copy fixes. Pages with any photo, title,
  retrofit, "top 3" upgrade, Amazon-text or hreflang-twin commit are excluded. This leaves 101
  pages out of 171.
- **Topic-matched check.** Each page is compared only with control pages of its own topic: ticks
  (11 control pages), mosquitoes (36), other biters (9), bed bugs (14), other year-round (31).
- **Scripts and raw data** (not in the repo):
  `C:\Users\buzzs\AppData\Local\Temp\claude\C--Users-buzzs-buzzskito-website\346ad20e-f0cd-4fd1-a3b4-396de78eb0ad\scratchpad\photo-read\`
  - `step1_dates.py`: which days are final.
  - `step2_pull.py`, `step4_pre_inspect.py`: the GSC pulls and URL inspection.
  - `step3_git.py`, `step5c_numstat.py`: the git checks.
  - `step6_controls.py`: the controls.
  - `step7_analyze.py`, `step8_robust.py`, `step9_baselines.py`, `step10_geo17.py`,
    `step11_tables.py`: the analysis and the tables.
  - Raw JSON: in `raw\`.
