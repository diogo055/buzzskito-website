# Writer brief: photo-identification pages (next-50 build, from Oct 16, 2026)

You are writing one page from `data/god-build/next-50.json`: a roundup (tiny black bugs), a
look-alike or comparison page (bugs that look like fleas, rat vs mouse), a one-thing ID page (flea
eggs, droppings, nests) or a bite chart (/learn/bug-bites). These formats get clicked here because
the reader has a bug or a bite in front of them: look-alike pages 1.0-1.5% click-through, bite pages
up to 2%, single-answer pages 0.15-0.36% even with photos (`next-50.md`). Lead with photos and a test.

## Read first

1. **Your spec is your entry in `data/god-build/next-50.json`** (prose in `next-50.md`): `targetQuery`,
   `variants`, `format`, `whyHighClickThrough`, `overlap` (one decision per page: follow it) and `photos`.
2. **Your plan entry** in `data/god-build/plan.src.json`: `releaseOn`, `parent`, `mustLink`, `cluster`,
   `audience`, `flags`, `minWords`, `scope`, `collisions`. The validator enforces the plan.
3. **The model: `content/guides/bugs-that-look-like-cockroaches.json`**, the best new guide: a bold
   one-line test in the quick answer, an "at a glance" box, ordered checks, a comparison table, one
   section per look-alike, "what to do once you know" and a jar-and-ruler callout. It predates our
   photos: use `figure` blocks where it has `media` placeholders.
4. `data/us-pages/WRITER_BRIEF.md` (every hard fact from a source you opened, paraphrase, no testing
   or absolute claims, descriptive anchors) and `data/god-build/WRITER_BRIEF.md` (figure blocks, the
   Oct 15 caption rules). Where they differ, this brief wins on file location, dates, sources, audience.

## The file

- Write `content/guides-scheduled/<slug>.json`, never `content/guides/`. `kind` "spoke"; `cluster` =
  the plan's (flea pages are "household", rat and mouse pages "mice"); `"section": "learn"` only on the
  /learn pages (bug-bites, mites). No `locale`.
- `datePublished` = the plan's `releaseOn` exactly (wave 1: "2026-10-16"); the release job changes it
  to the day the page actually goes live.
- `parent` = the plan's `parent` exactly: mostly `{ "href": "/learn", "name": "Learning Centre" }`, as
  their topic hub is deferred (do not link /learn/household-bugs, /learn/spiders, /learn/fleas,
  /learn/mites, /learn/biting-flies); rat and mouse pages /learn/mice, cockroach pages /learn/cockroaches.
- `disclaimer`: "health" if the plan flags include health, "pesticide" for pesticide, "both" for both.
- `metaTitle` 25-48 characters, no brand, no year, leading with the next-50 `targetQuery`; add
  "(Photos)" only if the page shows photos of what the title names. Where the plan `keyword` differs
  from the target query (pantry-pests, how-to-get-rid-of-carpet-beetles, asian-lady-beetles), keep the
  plan keyword in the h1 (the validator warns otherwise). h1 20-80 characters, metaDescription 110-155,
  dek 60-230, breadcrumb 3-42, excerpt 90-185.
- Plan `audience` "us": no Canadian regulators, provinces or places (a passing range note naming
  Canada, twice at most). "na": Canada may be named where it helps the reader. Both: US spelling,
  °F first (°C may follow in parentheses), inches first (mm may follow in parentheses).
- US editions (plan `pairWith` set, e.g. carpet beetles): US facts (EPA labels, US species and ranges,
  CDC), written fresh, not a conversion of the Canadian page.

## Shape of the page: photos and the test first

1. `quickAnswer` (22-75 words): bold the one-sentence answer, which is the test that sorts the
   candidates (the model's: a flat body, a plate hiding the head, long thin antennae). 3-6 bullets,
   sizes in inches, each from a source.
2. `facts` ("At a glance", 4-12 rows): each candidate and the one feature that settles it.
3. Body: at least 5 h2s, each a question a searcher asks, answered in its first sentence.
   - The first h2 answers the search. The lead photo of the main subject sits within the first three
     blocks; it must be public domain or CC0 (the first figure becomes the share image, which shows no
     credit). Then the photos with the real ID features, before any background.
   - **Roundups and look-alikes:** first how to recognize the real thing (a real flea, a real recluse),
     then one section per candidate, the most commonly met first: photo, size, the one feature that
     tells it apart, where it turns up, what to do (a link).
   - **Comparison and look-alike pages:** a comparison table (5 columns at most: candidates as rows,
     traits as columns; name the sources in its caption).
   - **A how-to-tell checklist** (`checklist`, 3+ items, or an `ol`) the reader can run with the bug in
     a jar: shape, size against a coin or ruler, legs and antennae, where found, does it jump or fly.
   - **One-thing pages** (eggs, droppings, nests): what it looks like at life size and magnified, what
     it gets confused with, where it is found, what finding it means.
   - **Control pages** (how-to-get-rid-of-*): identification photos before any method; pesticides by
     class and active ingredient, the label is the law, never an off-label use.
   - "What to do once you know": on ID pages, link the control page instead of giving product advice.
   - End with the jar-and-ruler callout (photo beside a ruler; the state's extension office can help).
4. `faqs`: 4-6, 35-120 words, plain text: the next questions searchers ask (the `variants`, People
   also ask), not the h2s reworded.
5. `sources`: 4-20, fewer and stronger is better; government and university first (extension fact
   sheets for identification, CDC and EPA for health and pesticides), at least 3. Each one linked
   inline where it is used (body, quick answer or facts; FAQ answers carry no links).

## Photos: what keeps an identification page honest

- 3 to 8 `figure` blocks, only from `data/god-build/photos.json`: copy `src` (the record's `file`),
  `width`, `height`, `license`, `credit` and `sourceUrl` exactly; write your own `alt` (15-220
  characters) and `caption`. Read each record's `subject` and `sourceDescription` first.
- **A caption says only what the record supports.** Species, life stage and sex only when the record
  states them. `wolf-spider` shows a wolf spider carrying spiderlings, not an egg sac;
  `house-mouse-vs-young-rat` shows a 2-week-old Norway rat, not an adult; `flea-larva-and-adult` shows
  an oriental rat flea, not a cat flea; `deer-mouse-nest` is a deer mouse nest, not a house mouse nest;
  `brown-recluse-penny` rests on its uploader's identification (say so, or skip it). Never use a photo
  for something it does not show. At most one sentence on what to look for, using facts the page states.
- Do not paste a record's `subject` as the caption: rewrite it in US spelling, and drop Canadian place
  names on "us" pages (the validator rejects "centimetre" anywhere and "Ontario" on "us" pages).
  No double quotes inside captions.
- Graphic photos (tissue damage) go low on the page, never first.
- **Need a photo that is not in the ledger?** Do not use any other image: nothing AI-generated, no
  drawings, nothing found online. Leave a `media` block describing the photo needed (it is not shown)
  and list it in your report. Do not edit photos.json or anything in public/guides/photos/.

## Bite pages and bite sections

- When to see a doctor comes from CDC, the American Academy of Dermatology, Mayo Clinic, Cleveland
  Clinic or a poison center, at the source's strength ("consider seeing a provider" must not become
  "go to the ER"). Emergency signs (trouble breathing, a swelling face or throat) only as listed there.
- Never diagnose: bites "can look like"; many rashes are not bites; one insect's bites vary. No home
  remedies beyond what the source says, no medicine doses.
- /learn/bug-bites is a photo chart by pattern, place on the body, timing and feel: each bite type
  gets a short summary and a link to its bite page (its `collisions`), not a rewrite of that page.

## Links

- Every `mustLink` in the plan (rat, mouse and cockroach pages: their pillar), in body text.
- 2-4 real topical matches among existing pages (3+ on /learn/bug-bites). The validator counts only
  the `existing` list in `data/us-pages/routes.json` (mostly older posts written for Canadians: use
  neutral anchors). Start with your next-50 `overlap` pages and apply each decision.
- A decision that changes another page ("trim to a summary that links here") is not yours: report it.
  Planned pages (`planned` in routes.json) may be linked; they show as plain text until they go live.
- Never a service, city or quote page. No Amazon or any retailer link or name, no product prices.

## Finish

1. `node scripts/validate-guide.mjs <slug>` passes: fix every ERROR, read every warning.
2. Edit no other file. No `next build`, no `npm run build`, no git.
3. Report: the file path; body words; sources (how many government or university); each figure (file
   and what its caption claims); photos you needed but the ledger lacks; the overlap decisions you
   applied and the ones that need another page changed; for a US edition, that its pair goes into
   `REGIONAL_PAIRS` (lib/guides.ts) at release. Then **"Fact-checker, look at these first"**: every
   caption against its photo record; sizes, ranges and any "this one feature tells them apart" claim;
   health and when-to-see-a-doctor sentences against the source's strength; facts resting on a single
   source; anything you softened or left out.
