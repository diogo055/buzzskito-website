# The god build: scheduled US pages (from Nov 2026)

Owner's request (Oct 14, 2026): build 100 to 200 deep pages for US readers, using the whole US
public database and real images, and release them on a schedule of about 40 a week so Google
indexes each batch before the next one lands.

## How a page goes from idea to live

1. **Planned.** `data/god-build/states.json` (the 50 states, neighbors, release order),
   `provinces.json` (the 10 provinces) and `extra-pages.json` (anything outside the series)
   feed `node scripts/god-build-plan.mjs`, which writes `plan.src.json` with a `releaseOn` date
   for every page (40 per Monday from Nov 16, 2026). `extra-pages.json` is generated: the page
   map `taxonomy.src.json` (173 pages beyond the series, each with its Search Console evidence,
   the existing pages it overlaps and how that is resolved, and a release order) goes through
   `node scripts/god-build-taxonomy.mjs`, which maps its topic families onto the site's topic
   categories (spiders, wasps, flies, mites, household, bites, ticks, mosquitoes ...), drops
   gated pages and tools, and moves every hub ahead of the pages under it. Then `node scripts/us-pages-plan.mjs` folds
   them into `data/us-pages/plan.json` as batch `god`, which the validator and the register
   script read. Re-running the generator never moves a page that is already live.
2. **Written and checked.** The page is `content/guides-scheduled/<slug>.json` (same format as
   every guide, rendered by `components/GuidePage.tsx`). `node scripts/validate-guide.mjs <slug>`
   checks it there. The independent fact-check is recorded with
   `node scripts/us-pages-mark-checked.mjs guide <slug> publish ...`; the record is tied to the
   file's exact contents, so any later edit needs a new check.
   `node scripts/god-build-status.mjs --todo` shows, week by week, what is written, checked and
   still to write: start there when resuming.
3. **Released.** Every morning GitHub runs `.github/workflows/release-scheduled.yml`, which runs
   `scripts/release-scheduled.mjs`. Due pages with a fact-check on record (and a live hub) move
   to `content/guides/`, get `datePublished` = the day they go live, and are wired in by
   `scripts/us-pages-register.mjs --checked-only`. The workflow then builds the site and runs
   every guard exactly like Vercel; only if all pass does it push to `main`, which makes
   Vercel deploy. If anything fails, nothing is pushed and GitHub emails a failure notice.
   Notes per release: `data/god-build/releases/<date>.md`.

Test without changing anything: `RELEASE_DATE=2026-11-16 node scripts/release-scheduled.mjs --dry-run`.
Run it by hand on GitHub: Actions > "Release scheduled pages" > Run workflow.

**Working locally while the schedule runs:** GitHub now commits to `main` on release days. Before
pushing local work, `git fetch diogo` and merge `diogo/main` first (the usual
`merge-base --is-ancestor` check will fail otherwise). Never edit a file in
`content/guides-scheduled/` after its check without re-checking it: the release holds it back.

**Editing a page that is already live** (any `content/guides/*.json`): record its fact-check
again (`node scripts/us-pages-mark-checked.mjs guide <slug> publish ...`) in the same commit.
The release run uses `us-pages-register.mjs --checked-only`, which treats an edited, unrecorded
guide as unpublished: it would drop it from the sitemap and the blog index and put a temporary
redirect over it. `check:guides` catches the redirect and fails the build, so nothing bad
deploys, but that morning's release fails until the record is fixed.

## What every state page carries (from the Oct 14 study of what ranks)

The pages ranking for "ticks in <state>" today are thin: pestworld's ~400-word template with
the state name swapped in, undated news posts, stock photos. None of 33 pages read has a
county map or a county table. So each state page leads with what nobody else has:

- a 60-word answer and an at-a-glance box (species ranked, counties established, latest cases
  with the year, the season)
- our own county map (`map` block) and the same data as a plain list
- disease counts by year (`chart` block) and top counties, with the residence-versus-exposure
  and 2022 Lyme case-definition caveats
- real photographs (`figure` blocks) with credit and licence; never AI images or drawings
- a month-by-month season view for the state's regions
- state services: free tick identification, testing, where to report Asian longhorned ticks
- "data through <month year>" on every table and chart, 5 to 8 primary sources, 8 to 10 FAQs
  (4 to 6 on pages fact-checked before the Oct 16, 2026 formula: `WRITER_BRIEF_PHOTO_ID.md`)

The numbers come from the state's data packet, `data/god-build/packets/<series>/<STATE>.json`,
built from the downloaded government files, so writers do not retype figures from web pages.

## Photos

Real photographs only: public domain (CDC PHIL, USDA, USGS, NPS), CC0, CC BY or CC BY-SA.
NonCommercial or NoDerivatives licences are not allowed on this ad-supported site. Every photo
is listed in `data/god-build/photos.json` with its source page, credit and licence; the
validator refuses a `figure` that is not in that record or whose details differ.

- **Adding photos:** add a line to `PHOTOS` in `scripts/god-build-photos.mjs` (a CDC PHIL id, a
  Commons file name, an iNaturalist observation + photo id, or a numbered figure on a www.nps.gov
  page whose own caption credits it "NPS Photo"; any other credit is refused) and run it. It checks the licence
  at the source, downloads, converts to WebP and writes the record. Then look at every new photo
  against its `sourceDescription` before using it (a contact sheet is quickest): a photo labelled
  as something it does not show is a false claim on an identification page.
- **On hand-written pages** (the TSX articles) a photo goes in with `<Photo id="..." caption="..." />`
  (`components/Photo.tsx`), which takes the credit, licence and size from the record. A page's
  share card and BlogPosting image can use `shareImage(id)` from `lib/photos.ts`, which accepts
  only public-domain or CC0 photos because a share card shows no credit line. How to add photos
  to an existing article without touching its affiliate links: `PHOTO_UPGRADE_BRIEF.md`.
- `npm run check:photos` (in the build) fails if a page uses a photo the record does not list, a
  file sits in `public/guides/photos/` without a record, or a credit-requiring photo is used as a
  share image.

## Charts and maps

`chart` blocks are drawn as plain HTML (`components/GuideChart.tsx`); `map` blocks are SVG
drawn at build time from `data/geo/<scope>.json` (`components/GuideMap.tsx`, shapes made by
`scripts/build-geo.mjs` from Census boundary data). Neither ships any JavaScript.

## Policy notes

- Disclosure stays as on the other guides: "Published by BuzzSkito", drafted with AI assistance,
  checked by a separate pass. `reviewedBy` / `reviewedOn` only when a person really read it.
- Mediavine does not monetize mass-produced, unedited AI content. The schedule, the unique
  government data, our own maps and real photos are what make these pages more than templated
  text. The owner reading a sample of each week's batch before it goes out is the strongest
  protection; add `reviewedBy` only for pages he actually read.
- No Amazon or retailer links (the North American guide rules apply), no quote buttons
  (traffic pages), no Canadian references (US readers).
