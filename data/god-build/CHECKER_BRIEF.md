# Fact-checker brief: scheduled pages (state and province series, photo-identification pages)

You are the independent second pass on one page that someone else wrote. Nothing goes live
until your check is on record, and the record is tied to the file's exact contents. Read the
brief the page was written to first: `data/god-build/WRITER_BRIEF.md` for the state and province
series, `data/god-build/WRITER_BRIEF_PHOTO_ID.md` for every other page (the photo-ID formula).
Then read the page (`content/guides-scheduled/<slug>.json`), its plan entry
(`data/god-build/plan.src.json`) and its data packet or research spec.

## Check every claim

- **Numbers:** every figure against the packet, or against the raw file it came from in
  `data/god-build/raw/` (recompute sums, rates, rankings and "X of Y counties" yourself).
  The raw files are listed with their URLs in `data/god-build/sources.json`.
- **Statements attributed to a source:** open the cited page and confirm it says that, for that
  place and year. A quotation must be word for word, or become a paraphrase. A source cited
  for something it does not say is an error even if the statement is true: cite the right page
  or soften the claim.
- **Dates and freshness:** "as of" dates, "data through" labels, the latest year really being
  the latest. Anything time-sensitive that will be stale on the release date gets an "as of".
- **Health and pesticide wording:** no diagnosis, no "safe" / "non-toxic", no testing claims,
  repellent advice that matches the official guidance cited (EPA for US pages, Health Canada
  for Canadian pages), "see a healthcare provider" where symptoms are discussed.
- **Maps and charts:** values match the data; categories and captions describe them
  correctly; "no record" is not presented as absence; residence-versus-exposure stated for
  disease counts; the 2022 Lyme case-definition change stated when years are compared.
- **Photos:** open each image file in `public/guides/photos/` and confirm the alt text and
  caption describe what is actually shown (species, stage, sex if stated); `credit`, `license`
  and `sourceUrl` must match `data/god-build/photos.json` exactly. On photo-ID pages, at least
  2 photos should show the bug where people find it (a home surface, bedding, a pet or skin, a
  plant or a lawn, not a lab background): if not, say so in your report.
- **Quick-ID table** (the `facts` box with a `head`, under the quick answer): check it like any
  table: every cell is a claim, so check each against its source (sizes in inches, colors, where
  found, bites or not) and recompute any conversion. A cell presented as the tell that separates
  two bugs must be a feature the cited source gives as distinguishing. The `caption` must name
  the sources the cells actually came from.
- **Look-alike cards** (the `confused` block): check each card like a figure. Open its photo
  (`public/guides/photos/<photo>.webp`) with its record in `data/god-build/photos.json` and its
  scout notes (`data/god-build/photo-notes-batch*.json`): the photo must show what the card's
  `name` says (species and life stage only as the record supports; an oriental rat flea is not
  a "Cat flea" card) and `alt`, if given, must be true. The `note` is a claim: check it against
  the page's sources. The `href` must be that look-alike's own page (a planned page is fine).
- **FAQs:** 8 to 10 on pages released from Oct 20, 2026; check every answer like body text, and
  that the questions are real searcher questions, not the h2s reworded. An answer you cannot
  support gets corrected to what the source says; deleting it below 8 fails the validator.
- **Snake pages:** identification features and ranges only from a state wildlife agency, a
  university or a museum; first aid only as CDC/NIOSH or a poison center gives it, "do not" list
  included; nothing that implies a snake is safe to handle, catch, move or kill, or a bite
  harmless; photos only with an expert identification (WRITER_BRIEF_PHOTO_ID.md, "Snakes").
  Treat a wrong venomous / nonvenomous identification as the most serious error a page can have.
- **Beat the top 3** (pages written from Oct 20, 2026): read the page's research (its section of
  `data/god-build/research/droppings-top3.md`, or `data/god-build/research/top3/<slug>.md`).
  Every question listed there as one the searcher needs is answered on the page, and the three
  things the page does that the ranking pages do not are really on it. Where the research says a
  ranking page got a fact wrong, check that our page states it correctly. A missing item is a
  finding for your report, not a reason to rewrite; add it only if it is one or two sentences
  you can source.
- **Authorship:** no `reviewedBy` / `reviewedOn` added by the writer, no invented author or
  first-person experience ("in our experience", "our technicians"), no testing claims.
- **Links:** internal links (text, card and map links) point at pages that exist or are
  planned (the validator checks); anchors and card names describe the destination; no service
  or city pages; external links are the page's own sources.

## Fix, then record

Fix errors in place with the smallest edit that makes the text true; do not rewrite good
prose. Keep `node scripts/validate-guide.mjs <slug>` passing. Then record the check:

    node scripts/us-pages-mark-checked.mjs guide <slug> <verdict> <claimsChecked> <claimsCorrected> <claimsRemovedOrSoftened>

where verdict is `publish` (no changes needed), `publish-after-my-fixes`, or `needs-rewrite`
(the page cannot be made right with edits: say why). Record it LAST: any edit after the
record voids it.

## Report

The verdict, the number of claims checked, each correction (what it said, what it says now,
the source), anything you could not verify and left out or softened, and any judgement call
the owner should know about.
