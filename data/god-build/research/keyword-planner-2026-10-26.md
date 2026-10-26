# Google Keyword Planner check (Oct 26, 2026)

The owner asked to use Keyword Planner (free, Google's own data) after Ahrefs was cancelled. Account 468-476-0160 (owner's
Chrome, campaigns all paused, nothing changed or spent). Keyword Planner auto-saved a draft plan "Plan from Oct 26, 2026,
5 PM" while testing; it is only a draft (no campaign, no spend).

## What the free account gives

- **Ranges only** ("10K - 100K"): the account has no active spend, and Google says "To get more detailed statistics, run
  a campaign." Sorting by volume orders the ranges, but inside a range the order is alphabetical, so there is no hidden
  precision.
- The Forecast tab (exact match, manual CPC, bid capped by Google at CA$6.45) gives plan-level totals only, no
  per-keyword numbers in this interface. Not usable for ranking.

## US results that matter

**Discovery from 4 seeds ("bug bites", "what bit me", "bugs in house", "what is this bug"), 3,143 ideas.** The top 500
broke down as 14 at 100K-1M, 51 at 10K-100K and 435 at 1K-10K.

- **100K-1M:**
  - the bed bug bites cluster ("bed bug bites", "what do bed bugs look like", treatments);
  - **"what type of bug is this"**;
  - **"chigger bites"**;
  - "bitten by mosquito".
- **10K-100K:**
  - bug bite types: "different insect bites", "types of bites from bugs" and "types of bug bites";
  - fly bites: "biting fly bites", "fly bite";
  - small biters: "gnat bite", "mites bite", "noseeum bite", "biting midge bites", "sand bug bites";
  - named bites: **"kissing bug bite"**, "dust mite bites", "red bug bites", "chigger bug bite", "chiggers bug";
  - identification: **"very small red bugs"**, "what are silverfish insects", "beetles house";
  - treatment searches (bee sting, insect sting): medical, not ours.

**Day 1 head terms, US:**
- **100K-1M:** huntsman spider, brown recluse, copperhead, black widow spider, maggots, yellow jacket and garter snake.
- **No row returned:** lice eggs, rat snake and bee sting vs wasp sting.

## Changes made to `top100-2026-10-26.*`

1. **Inflated clusters capped.** A cluster now counts at most twice its own head term. bee-sting-vs-wasp-sting's 111K
   cluster is mostly medical "bee sting" searches; its own phrase is about 2K. It moved from day 1 to day 9, and
   lice-eggs moved to day 3.
2. **Four Keyword Planner-confirmed bite and identification pages added:** kissing-bug-bites, mite-bites, fly-bites and
   tiny-red-bugs. They replaced the weakest extras (bugs that look like ants / bees).

## Bigger than a new page (do after the Oct 29-30 read)

- **chigger bites (US 100K-1M):** the existing /blog/chigger-bites ranks around 10 and is frozen until the Oct 30 read.
  Upgrading it is probably worth more than any single new page.
- **"what type of bug is this" (100K-1M):** make /tools/what-bug-is-this (or a photo guide) target it.
- **bed bug bites (100K-1M):** what-do-bed-bug-bites-look-like is written and held to Nov 11, so the Nov 3-10 read of
  /blog/bed-bug-bites stays clean.

## Next free step for precise numbers

Calibrate with Google Trends: compare each topic with an anchor whose volume is known (saved Ahrefs, or Search Console
impressions for pages on page one). Then re-order days 3-10 before they are built.
