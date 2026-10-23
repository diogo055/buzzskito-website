# Volume-20 program (owner, Oct 23 2026, ~15:30 UTC)

Owner's words: "build the 20 most stat changing pages u can right now. Backed by data and our ability to rank ... traffic is the goal ... fix or upgrade any pages ... first page but just need a little push to break into top 3 ... maximum effort".

## Budget and limits
- **Claude weekly allowance:** 56% used at 15:10 UTC Oct 23. It resets Oct 27 06:00 UTC and extra usage is OFF, so keep about 15% in reserve.
- **Agent reports:** short, because the orchestrator's context is nearly full.
- **Ahrefs:** about 19.7K units until Oct 26. The selector may use ≤ 8K.
- **Google indexing:** 10 requests a rolling day. 10 were used Oct 23 15:05-15:25 UTC. Next: bed-bugs-in-hotels, rat-vs-mouse, then the new pages.
- **Pushes:** none in 12:15-12:45 UTC. Fetch diogo/main before pushing.

## Pipeline (same as Oct 21-23)
1. **Selector:** writes `data/god-build/research/volume-20-2026-10-23.md` (20 new pages + 10 upgrades). Running.
2. **Plan entries:** one planner drafts 20 taxonomy entries into scratchpad `plan-drafts-v20/`. Merge with a `merge_plan_oct23.py`-style script (in the session scratchpad), dated with `release-overrides.json` `releaseOn`. Pulled-forward planned pages keep their releaseOrder.
3. **Photo scout:** batch 12 in `scripts/god-build-photos.mjs` + `photo-notes-batch12.json`.
4. **Writers and checkers:** one writer per page into `content/guides-scheduled/<slug>.json`, with research/top3 notes, then an independent checker per page (CHECKER_BRIEF, record via `us-pages-mark-checked.mjs`). Waves of about 5-7.
5. **Link-ins:** each new page needs ≥1 inbound link from a live guide JSON. Insert textual lines, validate, amend.
6. **Release:** `RELEASE_DATE=<date> node scripts/release-scheduled.mjs`, then amazon.com picks in `lib/amazon-us-picks.json` (only for live US guides), then `npm run build --ignore-scripts` (11 guards), commit by explicit path, push.
7. **Upgrades:** the retrofit approach (`data/god-build/RETROFIT_BRIEF.md`). For hand-written pages: zero deleted affiliate lines, token check. For guides: validate + amend. Pages frozen until after Oct 30 (photo-test read): what-does-a-spider-bite-look-like, bugs-that-look-like-ticks, and the Canadian fly and bed bug pages.

## Status log
- 15:30 UTC: selector launched.
- ~16:10 UTC: the selector finished; its list is in `research/volume-20-2026-10-23.md`. Expected about 750-1,500 clicks a month next summer.
- **Launched, in parallel:**
  - planner: writes the taxonomy entries and the plan regen itself; writer notes go to scratchpad `plan-drafts-v20/`, and live re-aims (e.g. do-ants-bite) go to `UPGRADES.md` there;
  - photo scout: batch 12;
  - upgrade agent A: the 4 mosquito pages (rows 1-4);
  - upgrade agent B: rows 5-10.
- **Next:**
  1. writers, in waves, after the planner and the photos;
  2. checkers;
  3. the live re-aims from `UPGRADES.md`;
  4. link-ins;
  5. release of the Oct 24 pages and the picks;
  6. build, then push.
- **Release dates:** flea-bites, fruit-flies and how-to-get-rid-of-drain-flies are dated Oct 31.
- **~16:40 UTC update:**
  - **Upgrades:** all 10 done (A: 4 mosquito pages; B: 6 pages). The upgrade checker is running.
  - **Planner:** done. 18 pages are in the plan:
    - 14 dated Oct 24: jumping-spiders, orb-weaver-spiders, camel-spiders, joro-spiders, paper-wasps, mud-daubers, wheel-bugs (targets "assassin bug"), pill-bugs ("roly poly"), booklice, what-do-termites-look-like, carpet-beetle-larvae, weevils, jerusalem-crickets, shrews.
    - 3 dated Oct 31: flea-bites, fruit-flies, how-to-get-rid-of-drain-flies.
    - what-do-bed-bug-bites-look-like moved to Nov 11 (keeps the Nov 3-10 bed-bug-bites read clean).
  - **Live re-aims:** water-bugs-vs-cockroaches and do-ants-bite, plus side-target removals on 3 live guides. All are listed in scratchpad `plan-drafts-v20/UPGRADES.md`.
  - **Writers wave 1 launched (7):** jumping-spiders, orb-weaver-spiders, camel-spiders, joro-spiders, what-do-termites-look-like, weevils, carpet-beetle-larvae.
  - **Wave 2 waits for photo batch 12:** paper-wasps, mud-daubers, wheel-bugs, pill-bugs, booklice, jerusalem-crickets, shrews, flea-bites, fruit-flies, drain flies, bed bug bites.
  - **The plan files are not committed yet.**
