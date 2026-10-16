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
