# Writer brief: photo-identification pages (from Oct 16, 2026; the formula from Oct 20)

You are writing one page of the photo-identification build: a roundup (tiny brown bugs, animals in
the attic), a look-alike page (kissing bug look-alikes), an "X vs Y" page (wasp vs hornet), a signs
page (animal droppings, termite damage, wasp nests), a one-thing ID page (flea eggs, millipedes), an
identification-first control page (how to get rid of gnats) or a bite chart (/learn/bug-bites). These
formats get clicked here because the reader has a bug, a sign or a bite in front of them: look-alike
pages 1.0-1.5% click-through, bite pages up to 2%, single-answer pages 0.15-0.36% even with photos
(`next-50.md`). Lead with photos and a test.

**The formula (owner, Oct 16, 2026).** Every page released from Oct 20, 2026 follows the pattern
that took a small pest company's site from about 1,100 to 56,000 Google visits a month in four
months (`data/god-build/bettertermite-teardown.md`: read its summary and "What we should copy"
first). In one line: the searcher's exact words as the title, a quick-ID table right under the
answer, real photos of the bug where people find it, a row of look-alike cards, 8 to 10 real
questions, and whole families of pages that link each other. Copy their formats, never their
shortcuts: no invented author, no near-duplicate pages, no uncredited or drawn images, no quote
buttons.

## Read first

1. **Your spec.** Pages released Oct 20, 2026 or later: your entry in `candidates` of
   `data/god-build/next-wave-research.json` (prose in `next-wave-research.md`): `query` (the target
   search), `variants`, `format`, `family`, `whyCtr`, `overlap` (one decision per page: follow it),
   `photos` (what is on record, what is missing) and `serp` (who ranks now). Two research slugs were
   renamed in the plan: `wasp-nests` is `wasp-nest-identification`, `horse-flies` is
   `deer-fly-vs-horse-fly`. Earlier waves: your entry in `data/god-build/next-50.json`
   (`targetQuery`, `variants`, `format`, `whyHighClickThrough`, `overlap`, `photos`).
2. **Your plan entry** in `data/god-build/plan.src.json`: `releaseOn`, `parent`, `mustLink`,
   `cluster`, `family`, `audience`, `flags`, `minWords`, `scope`, `collisions`. The validator
   enforces the plan. Where the plan and the research differ, the plan wins.
3. **The models.** `content/guides/tiny-black-bugs.json` (a location-first sorter) and
   `content/guides/bugs-that-look-like-cockroaches.json` (a look-alike page: a bold one-line test
   in the quick answer, an "at a glance" box, ordered checks, a comparison table, one section per
   look-alike, "what to do once you know", the jar-and-ruler callout). Both predate the formula: they
   have the two-column box instead of a quick-ID table, no look-alike cards and 6 FAQs.
4. `data/us-pages/WRITER_BRIEF.md` (every hard fact from a source you opened, paraphrase, no testing
   or absolute claims, descriptive anchors) and `data/god-build/WRITER_BRIEF.md` (figure blocks, the
   Oct 15 caption rules). Where they differ, this brief wins on file location, dates, sources,
   audience, FAQs, photos and the shape of the page.

## The file

- Write `content/guides-scheduled/<slug>.json`, never `content/guides/`. `kind` "spoke"; `cluster` =
  the plan's (flea pages are "household", rat and mouse pages "mice"); `"section": "learn"` only on the
  /learn pages (bug-bites, mites). No `locale`.
- `datePublished` = the plan's `releaseOn` exactly; the release job changes it to the day the page
  actually goes live.
- `parent` = the plan's `parent` exactly: mostly `{ "href": "/learn", "name": "Learning Centre" }`, as
  their topic hub is deferred (do not link /learn/household-bugs, /learn/spiders, /learn/fleas,
  /learn/mites, /learn/biting-flies); rat and mouse pages /learn/mice, cockroach pages /learn/cockroaches.
- `disclaimer`: "health" if the plan flags include health, "pesticide" for pesticide, "both" for both.
- **Title in the searcher's exact words: one search, one page.** `metaTitle` 25-48 characters, no
  brand, no year, starting with the target query as people type it ("Tiny Brown Bugs in the House?"
  for "tiny brown bugs in house"), then the promise ("ID Them (Photos)"). Add "(Photos)" only if the
  page shows photos of what the title names. Where the plan `keyword` differs from the target query
  (pantry-pests, how-to-get-rid-of-carpet-beetles, asian-lady-beetles), keep the plan keyword in the
  h1 (the validator warns otherwise). Re-aimed pages take the plan keyword as their search
  (how-to-get-rid-of-boxelder-bugs is "red and black bugs", deer-fly-vs-horse-fly is "horse fly").
  Word-order, singular and plural, and "X vs Y" / "Y vs X" variants are the same search: they go in
  `alsoTargets`, the dek, an h2 or an FAQ, never on a second page. h1 20-80 characters,
  metaDescription 110-155, dek 60-230, breadcrumb 3-42, excerpt 90-185.
- Plan `audience` "us": no Canadian regulators, provinces or places (a passing range note naming
  Canada, twice at most). "na": Canada may be named where it helps the reader. Both: US spelling,
  °F first (°C may follow in parentheses), inches first (mm may follow in parentheses).
- US editions (plan `pairWith` set, e.g. carpet beetles): US facts (EPA labels, US species and ranges,
  CDC), written fresh, not a conversion of the Canadian page.

## The page, top to bottom

1. `quickAnswer` (22-75 words): bold the one-sentence answer, which is the test that sorts the
   candidates (the model's: a flat body, a plate hiding the head, long thin antennae). 3-6 bullets,
   sizes in inches, each from a source.
2. **The quick-ID table, directly under the quick answer.** It is the `facts` box with a `head`: one
   row per suspect (on an X vs Y page, one row per trait), 4-12 rows, 2-5 columns. Three or four
   columns read best on a phone; the first column stays pinned while the reader scrolls sideways, so
   put the bug's name there. Every cell is a fact from a source linked on the page, and the `caption`
   names those sources. A page about one thing (one species, one kind of egg) may keep the two-column
   "at a glance" list instead: no `head`, rows of `[label, value]`.
   ```json
   "facts": {
     "title": "Tiny brown bugs: quick ID",
     "head": ["Bug", "Size", "Where you find it", "Crawls, jumps or flies", "Bites people?"],
     "rows": [
       ["Drugstore beetle", "About 1/10 inch", "Pantry: flour, spices, dry pet food", "Crawls; flies to light", "No"],
       ["Bed bug", "1/16 to 1/4 inch", "Mattress seams, bed frame", "Crawls", "Yes"]
     ],
     "caption": "Sizes from [UC IPM's carpet beetle guide](https://ipm.ucanr.edu/home-and-landscape/carpet-beetles/) and the other extension sources linked below."
   }
   ```
   (Four rows at least; two are shown to keep the example short.)
3. Body: at least 5 h2s, each a question a searcher asks, answered in its first sentence. The lead
   photo of the main subject sits within the first three blocks; it must be public domain or CC0 (the
   first figure becomes the share image, which shows no credit). Then the photos with the real ID
   features, before any background. Build the body to its format (next section).
4. **"Commonly confused with" cards** (a `confused` block, see "Look-alike cards" below): one row per
   page, at the end of the identification part, before "What should you do once you know?".
5. "What to do once you know": on ID pages, link the control page instead of giving product advice.
   End the body with the jar-and-ruler callout (photo beside a ruler; the state's extension office can
   help).
6. `faqs`: **8 to 10** (the validator requires 8 to 10 on every scheduled page released from Oct 20,
   2026), 35-120 words each, plain text, no links, no two alike. Write the questions in the searcher's
   words: take them from Google's "People also ask" for the target query and from your spec's
   `variants`, not the h2s reworded. Each answer stands alone, agrees with the body and rests on the
   same sources.
7. `sources`: 4-20, fewer and stronger is better; government and university first (extension fact
   sheets for identification, CDC and EPA for health and pesticides), at least 3. Each one linked
   inline where it is used (body, quick answer, facts or its caption; FAQ answers carry no links).

## The four formats that win, and how each is built

At the small site these four page types earned 100+ visits a month far more often than anything else
(signs and life stages 58% of pages, bugs in a room 58%, look-alikes 56%, X vs Y 41%; encyclopedia
species pages 2%, city pages 0%). Your spec's `format` says which one you are writing (`roundup`,
`droppingsRoundup`, `entity`, `control`, `bite`).

1. **Signs and life stages**: droppings, eggs, babies or nymphs, larvae, bites, shed skins, nests,
   damage (animal-droppings, termite-damage, wasp-nest-identification, maggots). The searcher holds
   the sign, not the bug. Lead with a photo of the sign at life size (beside a coin or ruler when the
   ledger has one), then up close. Quick-ID table: one row per maker (size, shape, color, where found,
   who left it). Sections: what it looks like; what leaves something similar (each with a photo); where
   it turns up; what finding it means (fresh or old, how many); what to do (a link). Cleanup and
   health advice only from CDC or a state health department.
2. **Bugs in a room or place**: "tiny brown bugs in house", flies-in-house, animals-in-attic,
   holes-in-yard, houseplant-bugs. A sorter by where the reader found it: h2s by place or clue
   (kitchen and pantry, bathroom, bed, windowsill; noises at night or by day), the most common first.
   Quick-ID table: one row per suspect (size, color, where in the room, crawls, jumps or flies, bites
   or not). Each suspect gets a photo of it where people find it, its size, the one tell, why it is
   there (moisture, food, light) and the next step (a link). A how-to-tell checklist (`checklist`,
   3+ items) for the bug in a jar: shape, size against a coin or ruler, legs and antennae, where
   found, does it jump or fly.
3. **Look-alikes**: "bugs that look like X" (kissing-bug-look-alikes, copperhead-look-alikes). First
   how to recognize the real X (a photo and the one test, bolded in the quick answer), then one section
   per look-alike, the most commonly met first: photo, size, the tell, where it turns up, what to do.
   Quick-ID table: one row per look-alike, with the tell in its own column.
4. **X vs Y**: wasp-vs-hornet, bee-sting-vs-wasp-sting, deer-fly-vs-horse-fly. The quick answer opens
   with the one difference that settles it. Quick-ID table with traits as rows and the two as columns
   (`"head": ["Feature", "Wasp", "Hornet"]`). One photo of each, ideally both where people meet them,
   then one section per trait (size and shape, color and markings, nest, behavior and stings, season,
   where found) and a "which one do I have?" checklist. The cards link X's page, Y's page and the
   third thing people confuse them with. One page per pair: "hornet vs wasp" is this page.

The other page types use the same parts. **One-thing pages** (eggs, a single species): what it looks
like at life size and magnified, what it gets confused with, where it is found, what finding it
means. **Control pages** (how-to-get-rid-of-*): identification photos and the quick-ID table before
any method; pesticides by class and active ingredient, the label is the law, never an off-label use.

## Photos: what keeps an identification page honest

- **3 to 8 `figure` blocks, at least 2 of them showing the bug where people find it**: on tile,
  carpet, a wall, a windowsill, bedding or a mattress seam, a pet or skin, a houseplant or a lawn, as
  a homeowner sees it. Specimen shots (white background, scale bar, microscope) are fine as
  identification photos but do not count toward the two. Judge from the record's `subject` and
  `sourceDescription`, the scout notes (`data/god-build/photo-notes-batch*.json`: `caveats` say where
  a photo was taken and who identified it, plus `confidence` and `leadEligible`) and by opening the
  image. The validator warns below 3 photos; the checker checks the two.
- Only from `data/god-build/photos.json`: copy `src` (the record's `file`), `width`, `height`,
  `license`, `credit` and `sourceUrl` exactly; write your own `alt` (15-220 characters) and `caption`.
  Read each record's `subject` and `sourceDescription` first.
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

## Look-alike cards (`confused`)

```json
{ "type": "confused", "items": [
  { "href": "/blog/booklice", "name": "Booklouse", "photo": "booklouse", "note": "Soft, pale and under 1/16 inch; on damp books, papers and shelves" },
  { "href": "/blog/what-do-bed-bugs-look-like", "name": "Bed bug", "photo": "bed-bug-adult-ruler", "note": "Flat, oval and rust brown; hides in mattress seams and bites at night" }
] }
```

- 2 to 6 cards, one row per page. `title` is optional (it defaults to "Commonly confused with").
- `href`: the look-alike's own page (`/blog/...` or `/learn/...`), existing or planned
  (`data/us-pages/routes.json`). A planned page shows as a card without a link until it goes live.
  Never the page itself, a service, city or quote page. Card links count as the page's internal
  links, for the validator and the release job.
- `photo`: a photo id from `data/god-build/photos.json` (the file name without `.webp`, e.g.
  `booklouse`). The card shows the whole photo and its credit and licence under the row, so any
  licence on record works. The photo must show what the card names, by the caption rules above (a
  record that says oriental rat flea is not a "Cat flea" card).
- `name`: 3-40 characters. `note`: the one tell, 15-120 characters, a plain line (no links, no bold)
  built from facts the page states and sources. `alt` is optional and defaults to the name.

## Build families, not single pages

- Each page belongs to a family (`family` in your plan entry: termites, wildlife, stinging-insects,
  look-alikes, household, ...). A family is written and released close together, so it goes live
  complete, every page linking its siblings.
- Link every sibling in your family, live or planned: in the text where it helps the reader, and in
  the cards when the sibling is a look-alike. A planned link shows as plain text until that page goes
  live, then lights up by itself, so you never edit a sibling's file.
- Link the family's hub when the plan names one (`parent`, `mustLink`).

## Who stands behind the page

- The template states that the page was drafted with AI assistance and fact-checked against its
  sources, and names BuzzSkito as the publisher. Never contradict it: no invented author or expert,
  no first-person experience ("in our experience", "we found", "our technicians"), no claimed testing.
- Never set `reviewedBy` or `reviewedOn`. They are added later, and only after Alex has actually read
  and approved the page; the byline then says "Reviewed by".

## Bite pages and bite sections

- When to see a doctor comes from CDC, the American Academy of Dermatology, Mayo Clinic, Cleveland
  Clinic or a poison center, at the source's strength ("consider seeing a provider" must not become
  "go to the ER"). Emergency signs (trouble breathing, a swelling face or throat) only as listed there.
- Never diagnose: bites "can look like"; many rashes are not bites; one insect's bites vary. No home
  remedies beyond what the source says, no medicine doses.
- /learn/bug-bites is a photo chart by pattern, place on the body, timing and feel: each bite type
  gets a short summary and a link to its bite page (its `collisions`), not a rewrite of that page.

## Snakes: venomous identification is safety-critical

A wrong "harmless" here can put someone in hospital. Snake pages (copperhead-look-alikes first) keep
every rule above, plus:

- **Sources:** the state wildlife agency (department of natural resources, fish and wildlife, or
  conservation) for which species live where and how to tell them apart; university herpetology and
  extension pages and natural history museums for identification; CDC/NIOSH for bite prevention and
  first aid; a poison center for what to do after a bite. Never a pest company, a pet-reptile site,
  a forum or a video.
- **Never imply that handling is safe.** Do not write that a snake can be picked up, caught, moved or
  killed safely, or that any bite is harmless. Give the agency's advice (keep your distance, let it
  leave, call for help) at the agency's own strength. Say "venomous" and "nonvenomous" (not
  "poisonous", not "harmless": nonvenomous snakes bite too).
- **No rule of thumb as a test.** Head shape, pupil shape, a color rhyme or a rattle are not reliable
  tests unless the cited agency presents them that way; where the agency says a rule fails, say so.
  The test for a look-alike is the set of features the agency gives, together.
- **Ranges by state** come from the state agency or a university range map. Say where a look-alike
  does and does not overlap with the venomous species.
- **First aid** only as CDC/NIOSH or a poison center gives it, including what not to do, with the
  emergency and Poison Help numbers as the source states them. Snake pages carry the health flag, so
  `disclaimer` is "health".
- **Photos only with an expert identification:** from a government wildlife agency, a university or
  museum, CDC PHIL, or a photo whose scout notes (`caveats` in `data/god-build/photo-notes-batch*.json`)
  name a herpetologist as the identifier. A photo identified only by its uploader or by community
  agreement (iNaturalist, Wikimedia Commons) does not qualify on a snake page, and neither does a
  photo of a person holding a snake. The ledger had no snake photos on Oct 16: if none that meet this
  rule have been added since, leave `media` placeholders and report them.

## Links

- Every `mustLink` in the plan (rat, mouse and cockroach pages: their pillar), in body text.
- 2-4 real topical matches among existing pages (3+ on /learn/bug-bites). The validator counts only
  the `existing` list in `data/us-pages/routes.json` (mostly older posts written for Canadians: use
  neutral anchors). Start with your spec's `overlap` pages and apply each decision.
- A decision that changes another page ("trim to a summary that links here") is not yours: report it.
  Planned pages (`planned` in routes.json) may be linked; they show as plain text until they go live.
- Never a service, city or quote page. No Amazon or any retailer link or name, no product prices.

## Finish

1. `node scripts/validate-guide.mjs <slug>` passes (a draft elsewhere: pass its path,
   `node scripts/validate-guide.mjs path/to/<slug>.json`): fix every ERROR, read every warning.
2. Edit no other file. No `next build`, no `npm run build`, no git.
3. Report: the file path; body words; sources (how many government or university); each figure (file
   and what its caption claims, and which ones show the bug where people find it); each card (page,
   photo id, the tell); photos you needed but the ledger lacks; the overlap decisions you applied and
   the ones that need another page changed; for a US edition, that its pair goes into
   `REGIONAL_PAIRS` (lib/guides.ts) at release. Then **"Fact-checker, look at these first"**: every
   caption and card against its photo record; every quick-ID cell; sizes, ranges and any "this one
   feature tells them apart" claim; health and when-to-see-a-doctor sentences against the source's
   strength; facts resting on a single source; anything you softened or left out.
