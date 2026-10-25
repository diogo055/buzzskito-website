# Impressions target: 3 million a month by mid-January 2027 (owner, Oct 24, 2026)

The owner's call: impressions are the lead indicator, so build toward them. Clicks follow as pages climb
toward the top 3.

## Baseline
- Oct 23, 2026: 45,598 Google impressions a day, about 1.37 million a month.
- Clicks: 285 a day.
- The target is 3 million a month, a 7-day average of about 100,000 a day, by Jan 18, 2027. That is about 2.2 times the baseline.

## What one page adds (measured on the October releases, GSC)
- New pages bring about 1,100-2,500 impressions a month in their first weeks.
- They usually grow over their first 2-3 months.

| Build pace | Pages by mid-January | Likely impressions a month |
|---|---|---|
| About 40 a week | about 300 | 2.0-2.5M |
| About 60 a week, winter topics first | about 450-500 | about 3M |

**Headwind:** mosquito and tick pages carry a large share of today's impressions, and those searches fall close
to zero in Canada over winter. Part of the new pages' gain only replaces that fade. Holiday weeks (Dec 21 to Jan 3)
usually dip.

## Weekly checkpoints (7-day average of daily Google impressions, all countries)

| Week of | Target per day | Actual |
|---|---|---|
| Oct 26 | 46,000 | |
| Nov 2 | 50,000 | |
| Nov 9 | 55,000 | |
| Nov 16 | 59,000 | |
| Nov 23 | 63,000 | |
| Nov 30 | 68,000 | |
| Dec 7 | 72,000 | |
| Dec 14 | 77,000 | |
| Dec 21 | 81,000 (holiday dip likely) | |
| Dec 28 | 85,000 (holiday dip likely) | |
| Jan 4 | 90,000 | |
| Jan 11 | 94,000 | |
| Jan 18 | 100,000 (3M a month) | |

Report where we stand against this every Monday. If two weeks in a row run more than 10% behind, say so plainly and propose what to change.

## The pace comes from real search volumes, not averages (owner, Oct 24)

The "about 60 a week" above is a placeholder from per-page averages. On Monday, Oct 27, when the Claude
allowance resets, the real pace is worked out from search demand.

**Ahrefs was cancelled by the owner on Oct 25, 2026:** no new pulls. The demand data is what the repo already
holds, plus our own Search Console:
- the Ahrefs volumes and KD saved in `research/volume-20-2026-10-23.md`, `next-wave-research.md`, the
  comparables files, `path-to-50k.md` and the taxonomy;
- GSC impressions for our queries, which are the most accurate for this site;
- Trends notes already in the repo.

A candidate with no evidence gets low confidence and goes to the back of the queue. The owner will
resubscribe if it turns out to be truly needed. The steps below still apply; step 2 uses saved data instead
of a new pull.

1. **Collect about 600 candidates.** Draw winter and year-round topics from `taxonomy.src.json`, `next-wave-research.md`, the comparables research and Ahrefs related terms.
2. **Pull real search volumes and difficulty for each.** US and Canada volume and KD come from Ahrefs Keywords Explorer, including each topic's keyword cluster (head term plus close variants). For Canada, also use our own Search Console impressions where we already show (Ahrefs Canadian volumes are unreliable; skill rule 3).
3. **Estimate each topic's impressions.** Expected impressions a month = cluster volume x the chance of reaching page one by mid-January. Set that chance from KD and from our measured October results: low-KD pages reached page one within 1-3 weeks. On page one, almost every search counts as an impression.
4. **Pick the smallest set that closes the gap.** The gap is about +1.6M a month. That set, highest expected impressions per page first, decides the number of pages and the weekly pace. Bigger topics mean fewer pages.
5. **Recalibrate every Monday** against actual Search Console impressions per cohort.

## The build plan (from Monday, Oct 27, when the weekly allowance resets)

**1. About 60 new pages a week through mid-December.** This puts them in the index by mid-December, so they mature by mid-January.
- Winter and year-round topics come first: mice and rats, cockroaches, bed bugs, indoor spiders, cluster flies and other overwintering bugs, pantry pests, wildlife in attics, and bites and identification.
- Each page uses the photo-ID formula, an independent fact-check and real photos, exactly as in October.

**2. Re-order the schedule.**
- `plan.src.json` currently puts 83 tick and mosquito state-series pages on Nov 16-30. Those are spring pages.
- Move them to January (Jan 4-25). They are then indexed and maturing before April.
- Fill November and December with the winter topics. Pick them with the volume-20 selector method: US volume x low difficulty x our ability to rank, plus beat-the-top-3.

**3. Keep upgrade rounds small.** At about 60 pages a week (writer plus checker), the build uses about 12-15% of the weekly Claude allowance.

**4. Indexing.** Request indexing for 10 pages a day through the owner's Chrome Search Console tab. Google has been indexing new pages within 1-4 days anyway.

## Spring: dominate mosquito and tick (the service money topics, about $1,222 a customer)

| When | What |
|---|---|
| Jan-Feb | Publish the mosquito and tick state and province series. |
| Feb-Mar | Upgrade the top 30 mosquito and tick pages for the top 3: refresh season dates and 2027 picks, and polish the summer Amazon converters (already upgraded Oct 23). |
| March | Service side, with the owner's approval first: fix "mosquito control toronto" (9 of our URLs compete for it) and strengthen the city pages. |
| April | Google Business Profile posts, a reviews push, and the AI phone agent answering inbound calls before the May rush. |

## Status log
- **Oct 25, ~15:50 UTC: wave 1 started at the owner's request.**
  - **Selection:** a planner picks the 6 winter/year-round pages with the highest expected impressions from `research/impressions-3m-candidates.json`, writes the plan entries (releaseOn 2026-10-26) and the writer notes (scratchpad `plan-drafts-3m/`).
  - **Then:**
    1. writers (photo-ID formula, beat-the-top-3);
    2. independent checkers;
    3. `RELEASE_DATE` release;
    4. amazon.com picks;
    5. build + 11 guards;
    6. push;
    7. index.
  - **Allowance:** about 89% of the weekly Claude allowance is used. Wave 2 starts right after the reset (Oct 27 06:00 UTC).
  - **Also running:** a text-fix agent for the Amazon pages' article text (FIX-LOG.md "Page text (Oct 25)"). Build + push after it finishes.
