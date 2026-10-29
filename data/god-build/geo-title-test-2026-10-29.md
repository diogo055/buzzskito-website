# Geo-title test: do information pages earn more without "Canada/Ontario" in the title? (Oct 29, 2026)

**Why:** the photo-upgrade read (`photo-upgrade-read-2026-10-29.md`) found that the Oct 15-16 gain
came from 9 titles that dropped a Canadian place word: 300 clicks against 158 expected. Seven of
those had gained the word on Sep 17 and had lost about half their traffic since. Photos alone did
nothing for web clicks. 20 titles still carry the Sep-17 place word.

**What changed:** only the title line (`META_TITLE`, or `title:` in the metadata). It went back to
its pre-Sep-17 wording; each one was checked against the page ("five tells", "ranked" are on the
page). H1s, body, Amazon elements and dates are untouched. A title is not a content change, so the
sitemap date does not move.

## Which pages

- **Eligible (11):** information pages about pests that are the same everywhere (bites, simple
  questions), from the 20.
- **Left out on purpose:**
  - product reviews and product pages, where Canadian amazon.ca buyers are the point: the laser
    review, the Ortho review, DE for bed bugs, the tick removal tool;
  - the local page `deer-flies-horse-flies-ontario`;
  - the page with a US twin, `bugs-that-look-like-bed-bugs-canada`;
  - the two pages that sell the yard-spray idea to Ontario homeowners,
    `how-long-does-mosquito-spray-last` and `is-mosquito-spray-safe-kids-pets`;
  - `how-to-keep-mice-out-of-your-car`, which got photos today.
- **How the split was made:** pages were ranked by web impressions for Oct 18-27, neighbours were
  paired, and a fixed coin flip chose one of each pair:
  `sha256("geo-title-test-2026-10-29:" + first slug)`, first byte odd = the first page changes.

| Group | Page | Impressions Oct 18-27 | Title now |
|---|---|---|---|
| CHANGE | what-eats-ticks-and-mosquitoes | 1,294 | What Eats Ticks and Mosquitoes? Predators Ranked |
| CHANGE | do-tiki-torches-repel-mosquitoes | 910 | Do Tiki Torches Repel Mosquitoes? 2026 Verdict |
| CHANGE | tick-bite-vs-mosquito-bite | 841 | Tick Bite vs Mosquito Bite: Ticks Stay Attached |
| CHANGE | do-fire-pits-repel-mosquitoes-canada | 430 | Do Fire Pits Keep Mosquitoes Away? |
| CHANGE | mosquito-bite-treatment-relief | 392 | Mosquito Bite Treatment: Stop the Itch Fast |
| CHANGE | bed-bug-bites-vs-mosquito-bites | 181 | Bed Bug Bites vs Mosquito Bites: 5 Tells |
| HOLD | bed-bug-bites | 2,114 | Bed Bug Bites Canada: 3-5 in a Line, 14-Day Lag |
| HOLD | smells-mosquitoes-hate | 1,235 | Smells Mosquitoes Hate: 6 Scents (Ontario) |
| HOLD | horse-fly-and-deer-fly-bite-treatment | 889 | Horse Fly vs Deer Fly Bite Ontario: Why It Hurts |
| HOLD | do-ticks-die-in-the-washing-machine | 653 | Do Ticks Die in the Washing Machine? Canada |
| HOLD | do-cedar-trees-attract-mosquitoes | 366 | Do Cedar Trees Attract Mosquitoes in Ontario? |

## Rules until the read

- **Freeze both halves for three weeks:** no links, no Amazon edits, no photos, no twin pages. If
  an edit cannot wait, make it on both halves.
- **Live date:** the day of the push that carries this commit.
- **Read:** about Nov 20-23, using the photo read's method:
  - 10 days after a 3-day gap, against the same 10 weekdays before (Oct 18-27);
  - also look at two earlier 10-day windows;
  - web search and Google Images read separately;
  - count a result only if it beats the normal swing for a group this size (20-40% against the
    other half).
- **Season:** mosquito topics are out of season now, so the mosquito part will read better in
  spring. Read it again in May.
- **If CHANGE wins:** remove the place word from the HOLD half too, and stop adding place words to
  titles of information pages. That updates rule 6 of the buzzskito-ops skill, which says to put
  the geo token in the title.
