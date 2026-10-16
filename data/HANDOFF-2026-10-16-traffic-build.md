# Handoff: maximum-traffic build for Mediavine (from Oct 16, 2026)

Read this first, then CLAUDE.md and the memory files `project_traffic_max_plan_oct2026`,
`project_god_build` and `project_us_guides_oct2026`. Owner: Diogo ("Alex"), not a developer,
often on his phone: send him PNG cards (sharp, written to the git-ignored `.playwright-mcp/`)
with SendUserFile.

## 1. What the owner wants now (his words, Oct 16)

- "prioritize high, super high click-through rate pages, building those and improving what we
  can improve right now already"
- "rework the top 30 high impression pages into photo identification pages with titles people
  click... If the data supports it, then do it" (no need to wait two weeks)
- "before you build the US pest identification hub, make sure that it's actually going to be a
  profitable build... If not, there's no point"
- "you can build spiders pages... whatever for max traffic"
- Real data only (Search Console, GA4, Ahrefs). Do not pay for Ahrefs upgrades.
- Mediavine is not approved/live yet: "We're still waiting for the AdSense code in the mail."

## 1b. WHERE THINGS STAND (end of Oct 16, 09:45 UTC) - start here

- **Live today: 62 new pages** = 37 tick pages + all 25 next-50 pages of build waves 1 and 2, in four
  hand releases (5d3b024d 12 pages, 1c7fa33f 3, b6725e7a 8, 19bc56ee 2), each built with every guard
  first and checked live (200 + title). diogo/main = 19bc56ee. Nothing is due or waiting in
  content/guides-scheduled/ from waves 1-2; the 12:15 UTC Action will find nothing due today.
- Regional pairs added: carpet beetles (71f79e0a), house centipedes (d64c56dc), stink bugs (c018b843).
- 57 links from strong older pages to the new ones (288a827e: 32; d5f58512: 17; 678f51b2 + cf98a233:
  8 cockroach-guide links). 79 photos added today (batch 4: 37, batch 5: 42; 289 on record).
- 8 fact errors fixed on live pages (spider beetle size f7e31831, "wrong fifth" 2f41b5a5, winter
  centipede line b14c4759, silverfish speed 0273b70d, stink bug shoulders e4e4a67d, flea jump
  656b4f7d, recluse 3/8-inch credit 0daefec5, desert recluse venom c47944be).
- Pipeline fixes: release job holds back a page no guide links to (69bcc49b, scripts/guide-links.mjs);
  same-day release notes append (80b7209c); `us-pages-mark-checked.mjs amend` for edited live guides
  (f7e31831). Brief for link-ins: data/god-build/LINK_IN_BRIEF.md.
- Usage: weekly 75% at 09:40 UTC Oct 16 (resets Oct 20 06:00 UTC). Wave 2 cost ~10% for 13 pages
  (writer + checker ~0.75% per page, plus photo scout and link agents).
- **SUPERSEDES the wave 3-4 list below (Oct 16 afternoon):** the owner set a goal of 50,000 Google
  visitors a month by July 2027. Read data/god-build/path-to-50k.md (the program: 500 new US photo-ID
  pages by Mar 15, 150-250 real links by April, 60 pages to the top 3, title/photo upgrades; middle
  ~36K) and data/god-build/next-wave-research.md (the next 30 pages in build order, 18 winter + 12
  for summer, and keep/replace/drop verdicts on waves 3-4). The Ahrefs key cap is now 200,000 units
  (~37K used Oct 16; resets on the 26th).
- **THE GOD PLAN is in memory (project_god_plan_50k.md) and in the plan files (10e32ffe):** the next
  30 pages are in taxonomy/plan: 18 winter pages releaseOn 2026-10-20, 12 summer pages 2027-02-01
  (list in data/god-build/next-wave-research.md). New cluster `wildlife`; flies relabelled "flies and
  gnats". Before writing: photos for termites, maggots, copperhead look-alikes and house flies (photo
  scout batch 6 running -> photo-notes-batch6.json); every new page needs >= 1 link in from a live
  guide (plan the link-ins, as done for palmetto-bugs via the cockroach pillar); copperhead-look-alikes
  (snakes = new topic) needs the owner's OK before writing. Not gated though dropped/replaced
  (live guides link them): clothes-moths, booklice, daddy-long-legs, brown-widow-spiders (gate text in
  their taxonomy notes; repoint the links first). Mediavine income forecast: data/god-build/
  income-forecast.json (12 months Dec 2026-Nov 2027 ~$6.9K middle, $3.6K-$15.7K). bettertermite.com
  teardown running -> data/god-build/bettertermite-teardown.md: fold its lessons into
  WRITER_BRIEF_PHOTO_ID.md before the 18 winter writers start (after the Oct 20 usage reset).
- **Owner, Oct 16 evening:** snakes approved; "follow what that small site's winning formulas are";
  up to 100 pages/week allowed if quality holds (advised: 40/week from Oct 20 -> 60 -> 100 while
  Google keeps indexing new pages within ~a week; 100/week ~ his whole weekly Claude allowance).
  Teardown: data/god-build/bettertermite-teardown.md. TEMPLATE UPGRADE LIVE (0e3e42e8, full build
  passed): `confused` photo-card block, quick-ID `facts.head` table, 8-10 FAQs for releases from
  2026-10-20, briefs rewritten (WRITER_BRIEF_PHOTO_ID.md = the formula + snakes; CHECKER_BRIEF.md).
  MONDAY OCT 20 (after the 06:00 UTC usage reset): read photo-notes-batch6.json (photo scout batch 6
  was still running at handoff; commit its files first), then writers for the 18 winter pages in
  families (flies/gnats/drain flies; moths/beetles/tiny brown bugs/houseplant bugs; attic animals/
  droppings/holes in yard; millipedes/earwigs/silverfish; roaches; termite damage; kissing-bug and
  red-and-black look-alikes; black spiders), each with a confused-card row and >= 1 live guide linking
  it; checkers; hand releases; link-in round. Then a family topic planner with Ahrefs after Oct 26.
- **RETROFIT PROGRAM (owner agreed in principle, Oct 16):** existing pages get the winning structure
  too. Order: (1) before Oct 29, build drop-in TSX components for hand-written articles mirroring the
  guide blocks (ConfusedWith photo cards, QuickIdTable) + a RETROFIT brief (additive only, affiliate
  integrity loop, true dates); (2) Oct 29-30 read of the 30 photo/title upgrades; (3) if the lift is
  real, retrofit the 60 striking-distance pages (path-to-50k.md table 1b), measure 2-3 weeks, then the
  remaining ~150 identification pages through November. Never service/city/quote/product-review pages.
- **NEXT (needs the owner's go, or start after the Oct 20 reset):** next-50 waves 3 (13 pages) and 4
  (12 pages): millipedes, earwigs, drain flies, types of gnats, brown recluse, silverfish, dust mites,
  bird mites, black widow spiders, rat droppings, brown widow spiders, no-see-ums, mouse nest;
  springtails, daddy long legs, boxelder bugs, mites, camel crickets, clothes moths, cluster flies,
  bat bugs, hobo spiders, yellow sac spiders, cockroach droppings, booklice. Steps: add their slugs to
  release-overrides.json (releaseOn = the day you start), `node scripts/god-build-plan.mjs` +
  `node scripts/us-pages-plan.mjs`, photo scout for gaps first (photo-notes-batch5.json "gaps"), then
  writers (WRITER_BRIEF_PHOTO_ID.md; tell each writer which live siblings to agree with and link, and
  make sure some live guide links each new page), checkers (CHECKER_BRIEF.md + the writer's flags),
  commit page + record, hand release from the scratchpad ci-repro clone (section "Oct 16 07:18 UTC" in
  the log), link-in agent (LINK_IN_BRIEF.md), live check.
- **Open follow-ups (small):** venomous-spiders Texas row lacks the northern black widow (needs Texas
  A&M E-408 as a new source); texasinsects.tamu.edu retired, 3 pages cite it (do-ants-bite.json,
  mosquito-hawk-explained, what-temperature-kills-mosquitoes); flea-bites-on-humans unsourced claims
  (96% vacuuming, 60°C, 2-8 weeks) and its recluse timeline vs what-does-a-spider-bite-look-like (owner's
  call on trimming); photo gaps listed in the wave reports (spitting spider, noble false widow, brown
  recluse egg sac, nursery web spider, mantid egg case, MRSA abscess PD/CC0, regal jumper,
  pantropical huntsman, American cockroach ootheca with scale, roof rat droppings).
- **Measure Oct 29-30:** the 21 Oct 16 photo upgrades + 9 Oct 15 upgrades (titles/CTR), the 25 photo-ID
  pages and 37 tick pages (indexing, impressions), via GSC (owner must re-auth the API first, or read
  GSC in his Chrome). Spiders-by-state pilot verdict Jan 15-31.

## 2. State on Oct 16, 2026

| Item | State |
|---|---|
| 86 North American guides | Live since Oct 8 (68) and Oct 11 (18). 73 of 86 indexed, 65 with impressions in week 1 |
| 37 tick pages (2 hubs + 30 states + 5 provinces) | **Released early Oct 16**, commit 5c04606c, `data/god-build/release-overrides.json` |
| Remaining scheduled pages | 250 not written (3 tick provinces, 20 tick states, 59 mosquito series pages, 168 taxonomy pages) + mosquitoes-in-texas written and checked but held until its hub `/learn/mosquitoes-by-state` exists |
| Recrawl requests | Done Oct 16 for do-mothballs-keep-mice-away, how-much-is-pest-control, water-bugs-vs-cockroaches, where-do-cockroaches-come-from (Google had clustered these 4 with a casino homepage, www.747live.bet, after bad crawls Oct 13-15; live test is fine), honeypot-ants, how-to-get-rid-of-mosquitoes, types-of-mice |
| Mediavine | Installed, not live; "mcmNetworkCode is required" error on every page until the owner's AdSense/MCM code step |
| GSC API token | Expired (invalid_grant). Owner re-auth: `cd C:\Users\buzzs\Documents\mcp-gsc; .\.venv\Scripts\python.exe auth_setup.py`. Meanwhile read GSC in the owner's Chrome (section 5) |
| Ahrefs | Key capped at 100,000 units (used up until Oct 26); workspace allows 200,000, so raising the key cap is FREE. Website: owner must sign in himself (one login at a time) |
| Weekly usage | 49% on Oct 16 (resets Oct 20, 06:00 UTC). Run 5-6 agents at a time; ~0.5% of the week per page (writer + checker) |

### Progress log

- Oct 16: 37 tick pages live (5c04606c); 7 recrawl requests done.
- Oct 16: photo upgrade wave 1 committed (17b50ae4): 50 credited photos on 14 pages (flea bites,
  bed bug poop/shells/look-alikes/instant kill, centipedes, boxelder bugs, drain flies, carpet
  beetles, cluster flies, fruit flies, spider vs mosquito bite, types of ticks, baby ticks); new
  search titles on 12 from their top GSC queries (TITLE NOTE comments), UPDATED 2026-10-16,
  sitemap set ARTICLES_PHOTOS_OCT16; black widow fact fixed (two species in Canada);
  /pest-product-guides counts now computed at build time (lib/product-guide-counts.ts: 329).
  Scratch scripts: session scratchpad titles-oct16.mjs (titles + dates + sitemap in one pass).
- Waiting: photo scout batch 4 (mice, rats, droppings, cockroach species, male mosquito, pantry
  pests) -> then wave 2: what-does-mouse-poop-look-like-canada (505+423+193 impressions, ~1 click),
  male-vs-female-mosquito (~4,000 impressions, 5 clicks), how-to-get-rid-of-cockroaches-canada,
  mice pages. Fix the bed-bug-signs ledger subject (its source does not say cast skins/fecal spots).
- Oct 16 research DONE: `data/god-build/next-50.md` + `.json` (50 pages ranked by expected Google
  clicks Nov-Mar, 4 build waves, fields: targetQuery, variants, format, evidence, overlap
  decision, photos, estimate, confidence, buildWave). Expected ~638 clicks/month Nov-Mar
  (255-1,907). CTR by format on this site: look-alike 1.0-1.5%, bite pages up to ~2%,
  single-answer pages 0.15-0.36% even with photos. Single-species head terms show a knowledge
  panel + Wikipedia (out of reach); comparison / look-alike / "bugs in my house" SERPs are
  winnable. Verdicts: spiders-in-<state> = PILOT 3 (TX, FL, CA; judge Jan 15-31: 300+ impressions
  in 28 days and position <= 12 on 2 of 3 -> build 10 more Feb-Jun); US pest-ID hub = NO (hubs get
  12-34 impressions in 5 days vs 372-665 for spokes); defer all 83 remaining tick/mosquito series
  pages (write Jan 5-Feb 20, release Feb 2-Mar 16).
- Wave 1 (12): pantry-pests, tiny-black-bugs*, how-to-get-rid-of-carpet-beetles (US edition),
  /learn/bug-bites (photo bite chart), venomous-spiders, asian-lady-beetles, flea-eggs*,
  rat-vs-mouse*, roof-rat-vs-norway-rat*, bugs-in-house-in-winter*, brown-recluse-look-alikes,
  bugs-that-look-like-fleas* (*new, not yet in taxonomy.src.json). Waves 2-4 in next-50.json.
- DECIDED plumbing (Oct 16): do NOT build topic hubs just to unblock children; pages whose parent
  hub is not being built (/learn/household-bugs, /learn/spiders, ...) get parent /learn and no
  hub mustLink via a deferred-hubs rule in the planner; new pages go into taxonomy.src.json;
  wave-1 slugs get releaseOn = today in release-overrides.json so each goes live the morning
  after its fact-check is committed and pushed. A photo-ID writer brief is needed (state-page
  WRITER_BRIEF does not fit): photo-led roundup/comparison/bite formats, ledger photos only,
  US spelling for audience na, no retailer links, sources inline, validator + checker as usual.
- Context note: this session reached 82% context at ~05:10 UTC Oct 16.
- Oct 16 ~05:30 UTC: photo batch 4 committed (51c4fc1d): 37 photos, 247 on record (mice, rats,
  droppings, German/Oriental/brown-banded cockroaches, aedes-aegypti-male +
  culex-quinquefasciatus-male, pantry pests, bed bug cast skins); caveats per photo in
  data/god-build/photo-notes-batch4.json. NOT PUSHED YET: 17b50ae4 + 51c4fc1d (+ what follows).
- Running at that time: (1) integration agent: deferredHubs rule in god-build-plan.mjs, 13 new
  pages into taxonomy.src.json, wave-1 releaseOn 2026-10-16 in release-overrides.json, regenerated
  plans, new brief data/god-build/WRITER_BRIEF_PHOTO_ID.md; (2) upgrade wave 2 agent:
  what-does-mouse-poop-look-like-canada, male-vs-female-mosquito, how-to-get-rid-of-cockroaches-canada,
  how-to-keep-mice-out-of-your-car, mouse-repellent-canada, mouse-bait-station-canada,
  bed-bug-shells (cast-skin photos), plus the bed-bug-signs ledger subject fix.
- NEXT, in order: (a) when wave 2 is back: run the session scratchpad script titles-oct16.mjs for
  what-does-mouse-poop-look-like-canada + male-vs-female-mosquito (titles already in it; add
  null-title entries for the cockroach and mice pages so they get UPDATED + sitemap set), verify
  affiliate tokens (loop in section 5 of PHOTO_UPGRADE_BRIEF), commit; (b) review the integration
  agent's diff, commit; (c) npm run build --ignore-scripts (all guards), push `git push diogo
  HEAD:main`, check Vercel + live pages; (d) launch wave-1 writers (6 at a time) with
  WRITER_BRIEF_PHOTO_ID.md + the page's next-50 entry, then checkers (CHECKER_BRIEF.md), commit
  page + data/us-pages/checked record, push; the daily Action releases them (releaseOn 2026-10-16).
- Oct 16 ~06:00 UTC: integration committed (4512d6c9; planner keeps released pages' slots; mice
  cluster). Wave-1 writers launched for pantry-pests, tiny-black-bugs,
  how-to-get-rid-of-carpet-beetles (US edition; add the REGIONAL_PAIRS pairing with the -canada page
  in lib/guides.ts when it goes live), bug-bites (/learn), venomous-spiders, asian-lady-beetles.
  Still to write in wave 1: flea-eggs, rat-vs-mouse, roof-rat-vs-norway-rat,
  bugs-in-house-in-winter, brown-recluse-look-alikes, bugs-that-look-like-fleas. Each finished
  writer -> checker (CHECKER_BRIEF.md + the writer's flags) -> commit -> push.
- Oct 16 ~07:00 UTC: upgrade wave 2 committed (dfce252b: 25 photos on 7 pages: mouse poop, male vs
  female mosquito, cockroaches, 3 mice pages, bed bug cast skins; titles for mouse poop + male/female
  mosquito; ARTICLES_PHOTOS_OCT16 now 20 slugs). Full build passed in the scratchpad ci-repro clone
  (679 pages, every guard). PUSHED dfce252b to diogo/main (includes 17b50ae4, 51c4fc1d, 4512d6c9).
- Oct 16 ~07:40 UTC: written + validated: tiny-black-bugs (2,842 words, 8 photos, 15 sources),
  pantry-pests (2,760 words, 8 photos, 5 sources; title "Bugs in Flour or Rice? Pantry Pest ID
  (Photos)"); their checkers are running. Writers still running: how-to-get-rid-of-carpet-beetles,
  bug-bites, venomous-spiders, asian-lady-beetles. After each checker: validate, commit page +
  data/us-pages/checked/<slug>.json, push (the 12:15 UTC Action releases due + checked pages).
  Then launch round 2 writers: flea-eggs, rat-vs-mouse, roof-rat-vs-norway-rat,
  bugs-in-house-in-winter, brown-recluse-look-alikes, bugs-that-look-like-fleas (same prompt
  shape: WRITER_BRIEF_PHOTO_ID.md + next-50 entry + plan entry; photo caveats in
  photo-notes-batch4.json). ~08:10 UTC: bug-bites written (4,124 words, 8 bite photos, 20
  sources; /learn/bug-bites), its checker running; upgrades verified live (hub 329, new titles).
  ~08:20 UTC: asian-lady-beetles written (2,420 words, 13 sources, 4 photos; needs a native
  ladybug photo), its checker running. After it goes live: the stink-bug page says lady beetles
  are "covered here rather than at their own page" -> update that line to link the new page.
  ~08:40 UTC: how-to-get-rid-of-carpet-beetles (US) written (3,019 words, 5 photos, 12 sources),
  checker running; routes.json committed (b6cfb0f2). AT ITS RELEASE: add { us:
  '/blog/how-to-get-rid-of-carpet-beetles', ca: '/blog/how-to-get-rid-of-carpet-beetles-canada' } to
  REGIONAL_PAIRS in lib/guides.ts and wrap the Canadian page's metadata in withRegionalAlternates()
  like the other Canadian twins; build; push.
  ~09:00 UTC: venomous-spiders written (3,280 words, 8 photos, 17 sources, recluse state map),
  checker running. ALL 6 round-1 pages now in fact-check. After its release: trim
  /blog/what-does-a-spider-bite-look-like's "Which spiders actually bite in the US" + "Where do
  black widows and brown recluses live" sections to a summary linking /blog/venomous-spiders
  (next-50 overlap decision; affiliate-integrity rules apply). Next: commit each checked page,
  push, then launch round 2 writers (list above).
  ~09:20 UTC: tiny-black-bugs CHECKED (241/7/6) + pushed (19fd502d); the 12:15 UTC Action releases
  it. To fix later: live /blog/bugs-that-look-like-bed-bugs says spider beetles are "1/16 to 1/8
  inch (2 to 4 mm)" twice (Colorado State's own conversion is wrong; 2-4 mm = about 1/12 to 1/6
  inch): edit the guide JSON, validate, re-record its check.
  ~09:40 UTC: pantry-pests CHECKED (290/13/1) + pushed (b26d3e25). Owner calls noted by its
  checker: majority size figures, no disclaimer though it mentions health + insecticides.
  ~10:00 UTC: asian-lady-beetles CHECKED (126/4/5, disclaimer both) + pushed (2890a494). After the
  US carpet beetle page is live, switch this page's carpet beetle link to it.
  ~10:20 UTC: bug-bites CHECKED (322/5/4) + pushed (41068973). Waiting: carpet beetles US +
  venomous spiders checkers. Then round 2 writers.
  ~10:40 UTC: how-to-get-rid-of-carpet-beetles CHECKED (296/4/5; naphthalene mothballs are NOT
  labeled for carpet beetles, PDB is) + pushed (3874b9ec). After it releases (Oct 17 Action): add
  the REGIONAL_PAIRS entry + withRegionalAlternates on the -canada page in the SAME commit as a
  build, so the two editions do not compete. Ledger: bed-bug-adult-ruler subject says "unfed";
  CDC's captions say only "adult" -> fix subject + photo script entry.
  ~11:00 UTC: venomous-spiders CHECKED (354/13/7) + pushed (4442ca23). ROUND 1 COMPLETE: 6 pages
  checked + on GitHub, released by the Oct 17 12:15 UTC Action. NOW: launch round 2 writers
  (flea-eggs, rat-vs-mouse, roof-rat-vs-norway-rat, bugs-in-house-in-winter,
  brown-recluse-look-alikes, bugs-that-look-like-fleas), then their checkers, commit, push.
  Verify the Oct 17 release (6 pages live, Vercel ok) and do the post-release follow-ups above.
  Writers flag missing photos as `media` placeholder blocks (e.g. a
  springtail with ruler, black carpet beetle adult, Indian meal moth webbing PD/CC0, drugstore
  beetle) -> a later photo scout.
- CORRECTION (checked 06:59 UTC Oct 16 with `date -u`): the clock times in the entries above are
  wrong (they ran ahead). Real commit times: 19fd502d 05:56 UTC ... 4442ca23 06:11 UTC. The checked
  pages therefore go live with TODAY's Action (Oct 16, 12:15 UTC = 8:15 am Toronto), not Oct 17;
  the "releases 2026-10-17" in some commit messages is wrong.
- Round 2, Oct 16 ~06:50-07:00 UTC: rat-vs-mouse (174 claims, 456bb167), roof-rat-vs-norway-rat
  (330, ae5ca87f), bugs-that-look-like-fleas (440/10/13, a49e36ed), flea-eggs (281/8/7, added
  disclaimer "health", 34e12578) CHECKED + pushed. Still in fact-check: brown-recluse-look-alikes,
  bugs-in-house-in-winter (each: validate, commit page + record, push, same as above).
- `node scripts/release-scheduled.mjs --dry-run` at 07:00 UTC: 10 pages due today (bug-bites,
  venomous-spiders, carpet beetles US, asian-lady-beetles, pantry-pests, tiny-black-bugs, flea-eggs,
  rat-vs-mouse, roof-rat-vs-norway-rat, bugs-that-look-like-fleas). Full rehearsal (release script
  + `npm run build --ignore-scripts`) run in the scratchpad ci-repro clone.
- **Do NOT push to diogo/main between 12:15 and ~12:45 UTC**: the release workflow refuses to push
  if main moved while it was building ("main changed while this release was building"). After it
  runs, `git fetch diogo` and merge diogo/main before the next push (the Action's commit is on main).
- Oct 16 07:00-07:20 UTC: bugs-in-house-in-winter CHECKED (420/8/1, disclaimer both, 57e22f7e) and
  brown-recluse-look-alikes CHECKED (359/3/4, 2e34a994), both pushed. WAVE 1 COMPLETE: all 12
  checked + on GitHub; `--dry-run` says all 12 go out at today's 12:15 UTC Action.
- REHEARSAL CAUGHT A RELEASE-BREAKER (fixed, 69bcc49b): the build's guide check needs >= 1 link in
  from another live guide for every scheduled page; with hubs deferred, venomous-spiders had none
  and the WHOLE release would have failed. Now scripts/release-scheduled.mjs holds back such a page
  (warning in the log) until a page linking to it is live; link rules shared with the validator in
  scripts/guide-links.mjs. Rehearsal = sync scratchpad ci-repro, `node scripts/release-scheduled.mjs`,
  `npm run build --ignore-scripts` (exit 0 with 10 pages; a 12-page rehearsal was started 07:15).
  For every new page, make sure some other new guide links it (writers are told which siblings).
- Wave 2 (13 pages) dated releaseOn 2026-10-16 (35269f10). Started 07:10-07:20 UTC: photo scout
  batch 5 (cockroach species + egg cases, wolf spider views, spider egg sacs, recluse eyes and early
  bite, FL/TX/CA spiders, stink bugs; then group B gaps) -> data/god-build/photo-notes-batch5.json;
  writers: how-to-get-rid-of-stink-bugs (US edition, pair with -canada), how-to-get-rid-of-fleas,
  house-centipedes (US edition, pair with how-to-get-rid-of-centipedes-canada),
  what-do-fleas-look-like, house-spiders. WAITING FOR PHOTOS: brown-recluse-bite, wolf-spiders,
  spider-egg-sacs, palmetto-bugs, cockroach-eggs, spiders-in-florida/-texas/-california.
  palmetto-bugs and cockroach-eggs have no inbound links yet: their writers must link each other,
  or add the links from /learn/cockroaches (pillar JSON) at release.
- brown-recluse-bite SERP read on Google (Oct 16): Poison Control, Cleveland Clinic, Univ. of
  Kentucky entomology, Reddit x2, Quora, ColumbiaDoctors, WebMD, an Army hospital, Illinois DPH;
  image pack + "Things to know". Mostly medical but NOT all (forums + a university), so it stays
  in wave 2 per next-50's rule; needs early-stage bite photos (scout) before writing.
- REGIONAL PAIRS at release (add `{ us, ca }` to REGIONAL_PAIRS in lib/guides.ts, then
  `node scripts/us-pages-regional.mjs` wraps the Canadian page's metadata + adds the visible
  "See the US edition" line; check affiliate tokens on that page are unchanged; build; push):
  carpet beetles (live today), stink bugs, house centipedes (when they release).
- **Oct 16 07:18 UTC: WAVE 1 RELEASED BY HAND (5d3b024d), not by the Action.** Why: GitHub ran the
  "12:15 UTC" schedule at 16:59 UTC on Oct 15 (cron runs late), so the no-push window was unknowable.
  Method (same as the tick release): sync scratchpad ci-repro to the branch, `node
  scripts/release-scheduled.mjs`, `npm run build --ignore-scripts` (exit 0), then the Action's own
  `git add -A content data app lib public next.config.mjs scripts/index-urls.mjs new-urls.txt
  build-manifest.json reports`, commit with data/god-build/last-release-commit.txt AS
  `-c user.name=BuzzSkito -c user.email=diogoaofrancisco@gmail.com` (the clone's global identity is
  buzzskito-afk: never deploy with it), fetch that commit into the main repo, `git merge --ff-only`,
  push. The release notes file for a date was overwritten by a second same-day release: restored
  (37 + 12 lists) and fixed (80b7209c, appends now). The Action at 12:15+ finds nothing due.
- Post-release done: carpet beetle regional pair (71f79e0a, build verified before push). Link-in
  agent running (data/god-build/LINK_IN_BRIEF.md + scratchpad link-in-oct16.md): one sentence per
  link from ~18 strong existing articles to the 12 new pages, incl. the stink bug "rather than at
  their own page" sentence and asian-lady-beetles' carpet beetle link -> US page. Review its diff
  (affiliate loop, removed lines), build, commit, push.
- 07:42 UTC pushed: 32 links from 17 strong articles + 3 guide JSONs to the 12 new pages (288a827e;
  build verified; affiliate tokens unchanged; asian-lady-beetles now links the US carpet beetle
  page); "the wrong fifth" -> "the wrong 5%" on best-flea-spray-for-home-canada (2f41b5a5). Note:
  data/us-pages/checked/existing__* records for bed-bug-bites, what-does-mouse-poop-look-like-canada
  and how-to-get-rid-of-mice-canada no longer match their (link-edited) files; nothing in the build
  or release reads them (only `us-pages-mark-checked.mjs status`). The stink bug TSX page's code
  comment (lines 19-22) still says lady beetles have no page of their own (not shown on the site).
- At house-centipedes' release: REGIONAL_PAIRS { us: '/blog/house-centipedes', ca:
  '/blog/how-to-get-rid-of-centipedes-canada' } + `node scripts/us-pages-regional.mjs` (as 71f79e0a).
  It uses the scout's new photo house-centipede-on-wall: commit photo batch 5 BEFORE the page.
- Wave 2 checked so far: what-do-fleas-look-like (116/2/4, 581a461c), how-to-get-rid-of-fleas
  (195/7/2, disclaimer both, 9fa1a624) pushed; house-centipedes (208/7/4) checked but NOT committed
  until photo batch 5 is (it uses house-centipede-on-wall; house-spiders and stink bugs also use
  new photos). Never push a page whose figure is not in the pushed photos.json: the release build
  would fail.
- ~08:00 UTC: photo batch 5 committed (9f246064: 42 photos, 289 on record; caption limits in
  photo-notes-batch5.json; gaps: Indian meal moth webbing PD/CC0, roof rat droppings, American
  cockroach ootheca with scale). house-centipedes committed (eec7b084). Fixes committed: winter
  roundup centipede line softened + amended (b14c4759); Canadian centipede page silverfish "run
  quickly" (0273b70d). Writers launched: brown-recluse-bite, wolf-spiders, spider-egg-sacs,
  palmetto-bugs. Still to launch: cockroach-eggs, spiders-in-florida, -texas, -california.
  Second release of the day being built in ci-repro: what-do-fleas-look-like,
  how-to-get-rid-of-fleas, house-centipedes + the centipede regional pair (lib/guides.ts +
  us-pages-regional.mjs on the Canadian page) in the same build.
- 08:02 UTC RELEASE 2 pushed + verified live (1c7fa33f + pairing d64c56dc): what-do-fleas-look-like,
  how-to-get-rid-of-fleas, house-centipedes (paired with the Canadian page, hreflang live). Checked
  + pushed, waiting for the next release: house-spiders (390/10/7, e0d70d66), how-to-get-rid-of-
  stink-bugs (160/7/3, b6586198). Local, not pushed: e4e4a67d (Canadian stink bug page: toothed
  shoulders belong to the rough stink bug). At the stink bug release: REGIONAL_PAIRS { us:
  '/blog/how-to-get-rid-of-stink-bugs', ca: '/blog/how-to-get-rid-of-stink-bugs-canada' } +
  us-pages-regional.mjs, in the clone after the release step (as d64c56dc). Writers running (08:05):
  brown-recluse-bite, wolf-spiders, spider-egg-sacs, palmetto-bugs, cockroach-eggs,
  spiders-in-florida. To launch: spiders-in-texas, spiders-in-california. palmetto-bugs and
  cockroach-eggs need an inbound link from a live page (each other + /learn/cockroaches pillar or
  bugs-that-look-like-cockroaches) or the release holds them back.
- 09:06 UTC RELEASE 3 pushed (b6725e7a + stink bug pairing c018b843): brown-recluse-bite (300/7/4),
  wolf-spiders (340/6/8), how-to-get-rid-of-stink-bugs (160/7/3), house-spiders (390/10/7),
  spiders-in-florida (324/7/4; iNaturalist chart re-pulled by the checker), spider-egg-sacs
  (352/11/6), palmetto-bugs (320/10/5), cockroach-eggs (284/14/9). Same push: fixes e4e4a67d (stink
  bug shoulders), 656b4f7d (flea jump), 0daefec5 (recluse look-alikes credits UC IPM's 3/8 inch),
  /learn/cockroaches + 5 cockroach guides link palmetto-bugs and cockroach-eggs (678f51b2, cf98a233).
  Link-in round 2 agent running (scratchpad link-in-oct16b.md): ~20 links from strong pages to the 11
  wave-2 pages. Writers still running: spiders-in-texas, spiders-in-california (then checkers,
  release 4). WAVE 2 = 13 pages; 11 live after release 3.
- Flagged by the spiders-in-texas writer (open): live venomous-spiders.json's Texas row omits the
  northern black widow (Texas A&M E-408 lists it; 166 research-grade iNaturalist Texas records).
  texasinsects.tamu.edu (Texas A&M's Field Guide to Common Texas Insects) now redirects every page to
  the Extension Entomology home page: 3 live pages still cite it (content/guides/do-ants-bite.json,
  app/blog/mosquito-hawk-explained/page.tsx, app/blog/what-temperature-kills-mosquitoes/page.tsx):
  replace with a current source (guide JSON: validate + amend; TSX: affiliate loop).
  Flagged by the spiders-in-california writer: live venomous-spiders.json says California's native
  recluses are "not as dangerous" as the brown recluse (older undated UC Riverside Myth page); UC IPM's
  2018 Pest Note says treat desert recluse venom as equally potent but a minor concern. Fix both
  venomous-spiders items together after the TX and CA checks (validate + amend).
- To check after brown-recluse-bite is fact-checked: live /blog/what-does-a-spider-bite-look-like
  has its own unsourced recluse timeline (e.g. a dark scab at days 3 to 7); the checked page uses
  Illinois DPH / Mayo / MedlinePlus (scab sloughs off after about 2 to 5 weeks). Align the live
  page's numbers with sourced ones (TSX, affiliate loop; no trimming).
- Also committed locally, not yet pushed (go with the next release build): 656b4f7d flea jump height
  on flea-bites-on-humans (15-18 cm / 6-7 in, Kentucky + Ohio State).
- To fix (from the house-centipedes checker): Canadian /blog/how-to-get-rid-of-centipedes-canada
  calls silverfish "slow-wiggling rather than sprinting" (text + caption); Missouri says they "run
  quickly": fix it in the same commit as the centipede regional pairing. Live
  /blog/bugs-in-house-in-winter says house centipedes "live in the house all year rather than
  moving in for the winter" vs Missouri's "especially in winter, when they move indoors": soften
  (guide JSON: validate + `amend`).
- To fix (flagged by the what-do-fleas-look-like writer): live /blog/flea-bites-on-humans gives a cat
  flea's vertical jump as 20 cm (8 in); Kentucky says about 6 inches, Ohio State 7. Verify and fix
  after the link-in agent's edit to that file is committed (TSX page: affiliate loop applies).
  Same page, "How do you get rid of fleas at home?" section: claims the fleas how-to writer could
  not source ("vacuuming kills 96% of adult fleas" - probably the 2008 Ohio State study, find it;
  "60°C (140°F)" washing; "2 to 8 weeks"). Source or soften; do NOT trim the section (it holds
  Amazon BuyLinks; next-50's "trim to a summary" is the owner's call).
- what-does-a-spider-bite-look-like: next-50 said "trim to a summary that links here"; NOT trimmed
  (owner's rule: never remove content he did not ask to remove; it is a 43K-impression page). Links
  added instead. Trimming is the owner's call.
- flea-eggs checker owner notes: larva max left at 3/16 inch (Ohio State/Texas A&M say 1/4); the
  University of Florida source prints ~1/64 in for a 0.5 mm egg (its own error); the page's
  "step-by-step guide to getting rid of fleas" link waits for how-to-get-rid-of-fleas (wave 2).
- Open: american-cockroaches still scheduled Dec 28 though next-50 folds it into palmetto-bugs
  (gate or remove it); taxonomy summary still says 173 pages.

## 3. Measured facts (do not re-derive)

- GSC, 28 days to Oct 15: 749 pages, 837,759 impressions, 7,284 clicks (0.87%). 97% of
  impressions are on pages averaging positions 3-10 at 0.8-1.05% CTR.
- Quick-fact pages are answered on Google's results page: when-are-mosquitoes-most-active 52.9K
  impressions 0.4% CTR, what-temperature-kills-mosquitoes 51.6K 0.3%, male-vs-female-mosquito
  19.5K 0.2%, what-blood-type-do-mosquitoes-bite 11.3K 0.2%. Photo-identification pages get
  clicked: no-see-um-bites 1.9%, bugs-that-look-like-ticks 1.5%.
- Google Trends US, Nov-Dec vs each term's peak: ticks 19%, mosquitoes 20%, spiders 50%, bed bugs
  53%, mice 89%. Nov-Dec vs ticks: mice 4.9x, spiders 2.4x, bed bugs 1.6x, mosquitoes 0.6x.
  "spiders in texas" ~3x "ticks in texas" across the year (Florida the same).
- The 86 guides, week 1 (Oct 8-15): 13,245 impressions, 69 clicks, median position 8.1; GA4
  472 views / 435 users (12% of site views). ticks-in-michigan: 34 impressions, position 12.3.
- Forecast given to the owner: 37 tick pages -> ~150 Google clicks by Dec 31; 50 pages/week
  evergreen-first -> ~1,800 clicks by Dec 31 (700-4,100), ~240/week by mid-December.

## 4. Plan from here

1. **Upgrades first** (biggest lever): pages with high impressions, low CTR, visual intent and
   year-round demand get real photos (data/god-build/photos.json; scout more under the photo
   rules), a photo-led identification section and a title people click. Brief:
   `data/god-build/PHOTO_UPGRADE_BRIEF.md` (additive only; never touch affiliate or
   recirculation lines; captions only from the photo record). Measure the 9 pages upgraded on
   Oct 15 around Oct 29 before judging the method.
2. **New pages with high click-through**: year-round photo-identification topics (indoor and
   winter pests, look-alikes, bites) from `data/god-build/taxonomy.src.json`, ordered by demand
   (GSC first, Ahrefs US second). A spiders-in-<state> series only if the results pages are
   winnable. The US pest-ID hub only if it pays; honest view: the hub itself is not a traffic
   page, its value is internal links for the spokes.
3. **Later (Jan-Feb):** the 20 remaining tick states and the mosquito series, so they are aged
   by May.
4. **Track** around Oct 30: the 37 tick pages, the 86 guides, the upgraded pages.

## 5. How to do things

- Pipeline per new page: writer agent (`data/god-build/WRITER_BRIEF.md`) -> `node
  scripts/validate-guide.mjs <slug>` -> checker agent (`data/god-build/CHECKER_BRIEF.md`, give it
  the writer's "look at these first" list) -> `node scripts/us-pages-mark-checked.mjs guide <slug>
  <verdict> <claims> <corrected> <softened>` -> commit page + record by explicit path.
- Release now instead of the computed date: add the slug to
  `data/god-build/release-overrides.json`, run `node scripts/god-build-plan.mjs` then `node
  scripts/us-pages-plan.mjs`, `node scripts/release-scheduled.mjs --dry-run`, then without
  `--dry-run`, `npm run build --ignore-scripts`, commit, `git push diogo HEAD:main`.
- Status: `node scripts/god-build-status.mjs --todo`.
- GSC in the owner's Chrome (Claude in Chrome): Performance report URL with
  `start_date=YYYYMMDD&end_date=YYYYMMDD&breakdown=page`, set rows per page to 500, read `tr`
  rows in the page and return only short summaries (output with a URL, `=`, `%` or `?` is
  blocked). URL Inspection: type the URL into the top "Inspect any URL" box (the old
  /inspect?id= link 404s); "Request indexing" is a submit action (owner OK needed; ~10 a day).
- Google Trends: the explore page holds a hidden accessibility table with the weekly values.
- Ahrefs stored data: `data/us-pages/keywords.json`, `data/us-pages/ahrefs-us-2026-10-07.json`,
  `data/gsc/enrich/ahrefs-volumes.json`, SERP teardowns in `data/serp-teardowns/`.

## 6. Open owner items

- AdSense/MCM code (in the mail) to finish Mediavine; until then ads earn nothing.
- Optional: raise the Ahrefs API key cap to 200,000 (free) or sign in to Ahrefs in Chrome.
- Optional: re-auth the GSC API (command above).
- CDC courtesy email now that tick pages are live: `data/god-build/cdc-courtesy-email.md`.
- Alberta: optional written permission to reuse dashboard figures on an ad-supported site.
