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
- **~17:00 UTC update (allowance 63% weekly):**
  - **Committed locally, NOT pushed** (they push with tomorrow's release build):
    - `1108eeed`: the 10 upgrades, checker-fixed, affiliate tokens identical.
    - `8ff62ba3`: the plan.
  - **Photo batch 12** done: 58 photos, ledger now 479. NOT committed yet: script, ledger, notes batch12, public photos.
  - **Wave 1 status:**
    - joro-spiders, jumping-spiders, camel-spiders, carpet-beetle-larvae, what-do-termites-look-like and orb-weaver-spiders are written, and each has its checker running.
    - weevils' writer is still running.
  - **Wave 2 writers (11) launched ~17:05:** paper-wasps, mud-daubers, wheel-bugs, pill-bugs, booklice, jerusalem-crickets, shrews, flea-bites, fruit-flies, how-to-get-rid-of-drain-flies, what-do-bed-bug-bites-look-like.
  - **Live re-aims agent launched:** do-ants-bite and water-bugs-vs-cockroaches, plus the side-target removals per `UPGRADES.md`.
  - **After every writer finishes:** run its checker. Each checker gets a SHORT brief: CHECKER_BRIEF, the flagged items, validate, record LAST, a final message under 60 words.
  - **When all 14 Oct-24 pages are checked:**
    - Link-ins: one agent; every new page needs ≥1 inbound link from a live guide. Frozen until after Oct 30: what-does-a-spider-bite-look-like, bugs-that-look-like-ticks, Canadian fly and bed bug pages.
    - `RELEASE_DATE=2026-10-24 node scripts/release-scheduled.mjs`.
    - amazon.com picks: each writer reported 1-2 generic types (joro: telescoping cobweb brush; jumping: bug-catcher cup; camel: bug catcher jar; carpet beetle larvae: hand lens; termites: specimen vials; orb weavers: yellow bug-light bulbs).
    - Then build, commit by path, push (not 12:15-12:45 UTC), verify the deploy, and index 10 a day.
- **~17:50 UTC update (weekly allowance 65%):**
  - Committed locally, not pushed: `b1a5c1b6` photo batch 12 (58 photos, ledger 479).
  - Checked and recorded: jumping-spiders, joro-spiders, camel-spiders.
    - The orchestrator added batch-12 photos to all three. Placeholders were kept beside the photos where a photo only partly meets the request (RETROFIT_BRIEF), then amended.
  - Checkers still running: orb-weaver, carpet-beetle-larvae, termites, weevils. Each was told by message to add its batch-12 photos with the same placeholder rule.
  - Link-ins done: 10 links from 9 live guides, each amended:
    - flying-ants-vs-termites, signs-of-carpet-beetles and beetles-in-house (x2)
    - tiny-black-bugs, camel-crickets and types-of-mice
    - house-spiders, wolf-spiders and diy-pest-control
    - The re-aims agent adds pantry-pests → weevils and carpet-beetles → larvae per UPGRADES.md.
  - Live photo pass agent running on about 15 live guides (batch-12 photos the scout picked for them). It skips the frozen 29, the Oct 20 retrofits and the re-aims agent's pages.
  - The diagram on when-are-mosquitoes-most-active now reads "past the evening peak" instead of "biting falls away" (SVG + alt; not committed yet).
  - amazon.com picks staged in scratchpad `picks-oct24.json` for joro, jumping and camel. Apply them after the release, before the build: check:amazon fails on a pick for a page that is not live.
  - No title work on are-ticks-arachnids-or-insects or what-blood-type-do-mosquitoes-bite:
    - blood-type already answers "hate";
    - the ticks page's searches are yes/no questions that Google answers itself.
  - Release gate notes:
    - The release needs `record.sha === sha(file)`, so amend after ANY edit.
    - Links from other pages going out the same day count.
    - Hubs /learn, /learn/mice, /learn/bug-bites and /learn/bed-bugs are all live.
- **~17:45 UTC: release 2 pushed (`6118312e`, on top of `b1a5c1b6` photos, `8ff62ba3` plan and `1108eeed` upgrades).**
  - **New pages:** joro, orb-weaver, jumping and camel spiders, what-do-termites-look-like, carpet-beetle-larvae and weevils, each with an amazon.com pick. Pulled forward to Oct 23 via release-overrides.
  - **Re-aims:** do-ants-bite now targets "ant bites"; water-bugs-vs-cockroaches now targets "water bug". American cockroach flight is re-sourced to Texas A&M AgriLife.
  - **Links and photos:** 12 link-ins; batch-12 photos on 13 live guides.
  - **AI line:** removed from under the title on guides and the 3 tools (owner). The foot note stays; whether to remove it too is the owner's call (Mediavine's "undisclosed AI content" sentence).
  - **Mosquito diagram:** label fixed.
  - **Build:** 752 pages, all 11 guards passed.
- **Wave 2 (dated Oct 24):** the morning GitHub release job publishes these once each check is on record and committed, so commit the scheduled files plus check records tonight.
  - Being checked: shrews, pill-bugs, booklice, jerusalem-crickets, paper-wasps, mud-daubers, wheel-bugs.
  - Also being checked: what-do-bed-bug-bites-look-like (Nov 11).
  - Still being written: flea-bites, fruit-flies, how-to-get-rid-of-drain-flies (all Oct 31).
  - After release, add picks by hand. The writers suggested:
    - shrews: hardware cloth
    - pill-bugs: door sweep
    - booklice: dehumidifier
    - jerusalem-crickets: clear bug-catcher container
    - paper-wasps: nest spray (only if the page names it)
    - mud-daubers: putty knife
    - wheel-bugs: door sweep
    - bed bug bites: hydrocortisone cream
  - Verify each pick against the page text, as for wave 1. Example: weevils' moth trap was WRONG, because the page says moth traps don't catch weevils.
- **Indexing, Oct 24 from ~15:05 UTC (10 a day):**
  1. bed-bugs-in-hotels
  2. rat-vs-mouse
  3. the 7 new pages
  4. water-bugs-vs-cockroaches
  - **Oct 25:** do-ants-bite and the wave-2 pages.
- **~18:05 UTC: `6aab442f` pushed.**
  - The Oct 24 morning job releases paper-wasps, mud-daubers, wheel-bugs, pill-bugs, booklice, jerusalem-crickets and shrews. All are checked, and their sha matches.
  - drain-flies (Oct 31) and bed-bug-bites (Nov 11) are committed and checked.
  - Live fix: the masked hunter size on kissing-bug-look-alikes, now from Penn State.
- **AT EACH US-EDITION RELEASE (Oct 31: flea-bites, fruit-flies, how-to-get-rid-of-drain-flies; Nov 11: what-do-bed-bug-bites-look-like):**
  1. Add the pair to `REGIONAL_PAIRS` in `lib/guides.ts`: flea-bites ↔ flea-bites-on-humans, fruit-flies ↔ how-to-get-rid-of-fruit-flies, drain flies ↔ how-to-get-rid-of-drain-flies-canada, bed bug bites ↔ bed-bug-bites.
  2. Do the link repoints in `data/god-build/research/volume-20-upgrades.md`, section 4 (12 + 6 + 1 + 14 guides). Validate and amend each one.
  3. Add the amazon.com picks:
     - flea-bites: flea comb
     - fruit-flies: fruit fly trap
     - drain flies: enzyme drain cleaner
     - bed bug bites: hydrocortisone cream
     - Check each against the page text first.
  - The morning job releases the pages, but it does NOT do steps 1-3.
