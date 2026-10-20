# Brief: rebuilding an existing page to the photo-ID formula (the retrofit)

Owner's decision, Oct 16, 2026: the pages that already rank get the same structure as the new
photo-ID pages, now. **Additive only, nothing detrimental.** You never remove content, never touch
an affiliate or recirculation line, and change a date only when the content really changed.

The formula, in one line (from `data/god-build/bettertermite-teardown.md`, "What we should copy"):
the searcher's exact words as the title, a quick-ID table near the top, real photos of the bug (or
the bite, the droppings) where people find it, a row of look-alike photo cards linking the sibling
pages, 8 to 10 real questions, and 10+ internal links pointing in.

## Read first

1. Your page's entry in `data/god-build/retrofit-order.json` (rank, `kind`, `type`, `topQueries`,
   `titleNow`, `has`, `formulaGaps`, `oct15_16`, `linkInCandidates`).
2. `data/god-build/WRITER_BRIEF_PHOTO_ID.md`: what each part of the formula is for and how each of the
   four winning formats is built (bites and signs, bugs in a room, look-alikes, X vs Y).
3. `data/god-build/PHOTO_UPGRADE_BRIEF.md`: the photo rules (ledger only, captions say only what the
   record supports, placement, uploader-identified photos, graphic photos low).
4. `CLAUDE.md`: affiliate integrity, recirculation units, sitemap dates, page roles.
5. The page itself, top to bottom, before you write anything: what it already states is what your
   table cells, card notes, captions and FAQ answers are made of.

## Which pages

Work down `retrofit-order.json` in rank order, in batches (about 20 a day from Oct 20, GSC-monitored).
Tier 1 pages have measured demand at positions 4-20; tier 2 are guides released Oct 7-16 with no
Search Console data yet. **Never retrofit:** service, city, quote or pricing pages; product-review or
affiliate "best X" pages (their title at most); the 33 lead posts (`leadPosts` in
`lib/page-roles.json`). The order file already leaves those out; `excludedHighGain` says why the
biggest ones are missing. Pages marked `localInfo` keep their quote prompts: retrofit the content,
touch nothing else.

## The seven parts, and what "done" means

| Part | Done when |
|---|---|
| 1. Quick-ID table | One table near the top: one row per suspect (per trait on an X vs Y page), 4-12 rows, 2-5 columns, first column names the row |
| 2. Look-alike cards | One row of 2-6 photo cards, each linking the look-alike's own page (live or planned) |
| 3. Photos | At least 2 photos from the ledger showing the pest, bite or sign where people find it |
| 4. FAQs | 8-10 questions in searchers' words; existing ones untouched |
| 5. Title | Starts with the searcher's exact words (only if it does not already) |
| 6. Links in | 10+ pages link to it (you list the sources; the link-in agent adds them) |
| 7. Dates | The page's own date and the sitemap date set to the day, because the content changed |

Skip a part the page already has (a page with 33 FAQs needs none; a page whose title already leads
with its top query keeps it). Never add a second quick-ID table or a second card row.

**Facts.** Every table cell, card note, caption and FAQ answer restates a fact the page already
states, or one a source the page already links supports. No new numbers from memory, no new
regulatory or product claims (ops skill rule 7), bite and health lines only at the source's
strength. Write in the page's own spelling: hand-written articles are mostly Canadian ("colour"),
guides are US (`check:guides` rejects Canadian spelling there).

## Hand-written articles (`kind: "tsx"`, `app/blog/<slug>/page.tsx`)

### The components (shared with the guide template, so both look identical)

```tsx
import QuickIdTable from '@/components/QuickIdTable'
import ConfusedWith from '@/components/ConfusedWith'
import Photo from '@/components/Photo'

<QuickIdTable
  title="Mosquito bite or another bite? Quick ID"
  head={['Bite', 'What you see', 'Where and when', 'How long it lasts']}
  rows={[
    ['Mosquito', 'One round, puffy welt; itchiest at 24–48 hours, then improving', 'Uncovered skin, outdoors', '3–7 days (up to 2 weeks if strongly allergic)'],
    ['Bed bug', 'Lines or tight clusters, with new ones night after night', 'Skin that was against the mattress', 'Often 1–2 weeks'],
    // 4 to 12 rows
  ]}
  caption="Typical ranges ... from the bite comparison further down this page; ..."
/>

<ConfusedWith
  title="Often mistaken for a mosquito bite"            // optional; default "Commonly confused with"
  items={[
    { href: '/blog/bed-bug-bites', name: 'Bed bug bites', photo: 'bed-bug-bites-forearm', note: 'Lines or tight clusters on skin that was against the mattress, new ones night after night' },
    { href: '/blog/flea-bites-on-humans', name: 'Flea bites', photo: 'flea-bites-lower-leg', note: 'Small red dots grouped on the lower legs and ankles, usually where a pet has been' },
  ]}
/>

<Photo id="mosquito-bite-welts" alt="..." caption="..." />
```

- **QuickIdTable** (`components/QuickIdTable.tsx`): `title` (string), `head` (2-5 headings),
  `rows` (cells are text or JSX; a `<Link>` in a cell is fine), `caption` (text or JSX: name the
  sources). The first column stays pinned when the table scrolls sideways on a phone. It is
  `.not-prose`, so prose styles and Mediavine's in-content ads stay out of it.
- **ConfusedWith** (`components/ConfusedWith.tsx`): `items` of `{ href, name, photo, note, alt? }`,
  optional `title`. Each photo shows whole in a fixed 4:3 frame (no layout shift), lazy-loaded, with
  every credit and licence in one line under the row. A card whose page is planned but not live
  shows without a link and lights up by itself when the page goes live. Clicks count in GA4 as
  `recirculation_click` with location `confused_with`.
  **Write the cards inline, single-quoted, keys in this order: `href, name, photo, note` (then
  optional `alt`).** `npm run check:photos` reads them there and fails the build on a photo the
  ledger does not list, a card linking a page that neither exists nor is planned
  (`data/us-pages/routes.json`), the page itself, fewer than 2 or more than 6 cards, a repeated
  page or photo, a name outside 3-40 characters or a note outside 15-120.
- **Photo** (`components/Photo.tsx`): as in `PHOTO_UPGRADE_BRIEF.md`.

### Where each part goes

- **Quick-ID table:** inside the article body (the `.prose-brand` container), as high as it can go
  without passing the page's first Amazon button: before the first `<h2>`, or, when a buy button
  (a "what to do now" box, a `<TopPick>`) sits above the first `<h2>`, directly after the block that
  holds it. Never between a `<TopPick>` / `<BuyLink>` and the text that introduces it. A reference
  table that already sits under the quick answer (a timeline, a "where you found it" table) stays
  where it is; if it already has one row per suspect, it *is* the quick-ID table: do not add another.
- **Look-alike cards:** at the end of the identification part: right after the page's own
  look-alike or "X vs other bites" section, or just before its "what to do" section. Card notes are
  the one tell, built from what the page says about that look-alike. `href` is the look-alike's own
  page; prefer a live page, and use a planned one (shown unlinked until it goes live) when the live
  alternative is the wrong audience or a weaker match.
- **Photos:** right after the paragraph or heading each one illustrates. At least 2 must show the
  subject where a homeowner meets it: on skin, a floor, a wall, bedding, a hand or a coin for scale.
  Specimen shots (white background, scale bar, microscope) are fine but do not count toward the two.
  Each photo once per page, and never the same photo as a figure and a card.
- **Lead photo and share image:** `shareImage(id)` only with a public-domain or CC0 photo that shows
  the page's main subject. If the ledger has none, do not call `shareImage`; place the CC BY photos
  with their credit as usual and list "PD/CC0 lead photo needed: <what>" in your report.

### FAQs

Most articles keep a `FAQS` array that feeds both the visible FAQ list and `faqSchema`. Check that
the visible list is rendered from the same array; if the page writes its visible FAQs out by hand,
add each new question to both, word for word (FAQ structured data must match what the page shows).

- Fewer than 8: **append** new entries at the end of the array until there are 8 to 10. Never edit,
  reorder or delete an existing question or answer.
- 8 or more: add nothing, unless a query in `topQueries` (or the page's own query list, below) has
  no answer anywhere on the page; then at most 2.
- Questions in the searcher's words: from the page's Search Console queries and Google's "People
  also ask", not the page's h2s reworded. Answers 35-120 words, plain text, each standing alone and
  agreeing with the body.

Pull the page's queries with `mcp__gscServer__get_search_by_page_query` (site
`sc-domain:buzzskito.ca`, `page_url` the full https://buzzskito.ca/... address, `days` 90,
`row_limit` 100), or read `topQueries` in the order file.

### Title

- Change it only if the rendered title does not already start with the page's top striking query
  (`titleNow`, `topQueries`), and never on a page whose title was reset on Oct 15-16
  (`oct15_16.titleChanged`: those are read on Oct 29-30 first).
- `META_TITLE` (or `SEO_TITLE`, or the title inside `buildMetadata`) is 48 characters or fewer: the
  site appends " | BuzzSkito". The searcher's exact words first ("No-See-Um Bites: Photos & How Long
  They Last"), then the promise; "(Photos)" only when the page shows photos of what the title names.
- Put a note on the line above: `// TITLE NOTE (Oct 20, 2026): was '...'; top queries: <query>
  <impressions>, ... (<clicks> clicks).`
- The h1 stays as it is.

### Lines you may change in a hand-written page

Everything else is an addition. Existing lines you may change: the import block (add lines), the
`buildMetadata({...})` call (add `modifiedTime: UPDATED`, `image`, or the title), the
`blogPostingSchema({...})` call (add `dateModified: UPDATED`, `image`), `<AuthorByline
datePublished={DATE} />` (add `dateModified={UPDATED}`), the `UPDATED` constant (add one if missing),
the title constant (with its TITLE NOTE), and the end of the `FAQS` array (append).

Change those lines in place: set `UPDATED` to the new date on its own line, and extend the schema,
metadata and byline lines as listed. **Do not keep the old version in a comment** to make the diff
show zero deleted lines: these few changed lines are expected and checked by hand. The zero-deletion
rule is about the page's content and its affiliate, quote and recirculation elements, which stay
byte for byte.

**Never touch** a line containing `BuyLink`, `TopPick`, `StickyBuyBar`, `AffiliateDisclosure`,
`AwardRow`, `AwardCard`, `AmazonLink`, `asin=`, `search=`, `tag=`, `NextUp`, `RelatedLinks` or
`ReadNext`, and do not move one by inserting a block between a buy button and its introduction.

## Guides (`kind: "json"`, `content/guides/<slug>.json`)

Same parts, as guide blocks (`WRITER_BRIEF_PHOTO_ID.md` has the formats):

- **Quick-ID table:** `facts` with a `head`. If the page has the two-column "at a glance" box,
  restructure it: one row per suspect, and **every fact in the old rows must survive** in the new
  cells (diff the old and new rows before you move on). Keep the title or make it a quick-ID title;
  add a `caption` (10-300 characters) naming the sources. A page about one thing may keep the
  two-column box.
- **Look-alike cards:** a `confused` block before the "What to do once you know" h2.
- **Photos:** `figure` blocks copied from the ledger record (`src`, `width`, `height`, `license`,
  `credit`, `sourceUrl` exactly), your own `alt` (15-220) and `caption`. The first figure becomes the
  share image: it must be public domain or CC0 and show the main subject, within the first three
  blocks of the body. A `media` placeholder may be replaced only by a figure that fully satisfies
  it; otherwise leave it.
- **FAQs:** append to 8-10 (the validator allows 10 at most).
- **Title:** `metaTitle` 25-48 characters, same rule as above.
- **Dates:** `"dateModified": "<today>"` after `datePublished`.
- Then: `node scripts/validate-guide.mjs content/guides/<slug>.json` (fix every error, read every
  warning) and `node scripts/us-pages-mark-checked.mjs amend <slug> "<what changed and its
  sources>"`. Without the amend the next morning release fails.

## Dates (both kinds)

The retrofit is a real content change, so on the day it lands: set the page's own date (`UPDATED` /
`dateModified`) and run

```bash
node scripts/retrofit-date.mjs /blog/<slug> 2026-10-20
```

which adds the page to `ARTICLES_RETROFITTED` in `app/sitemap.ts` (the sitemap's true lastmod;
`app/sitemap.ts` has CRLF line endings and the script keeps them). A title-only or link-only change
is not a content change: no date.

## Links in (part 6)

You do not edit other pages. List up to 10 source pages for the link-in agent
(`data/god-build/LINK_IN_BRIEF.md`): start from `linkInCandidates` (topically close live articles that
do not link to the page yet, strongest first), drop any that would be a stretch for its reader, and
for each name the section where one sentence would fit. Pages that already have 10+ links in
(`inboundLinks`) still benefit from 2-3 links from the strongest pages in their family.

## Checks before you report (Git Bash, repo root)

```bash
f=app/blog/<slug>/page.tsx
for t in "<BuyLink" "<AwardRow" "<AwardCard" "<StickyBuyBar" "<AmazonLink" "<TopPick" "<AffiliateDisclosure" "asin=" "search=" "tag=" "<NextUp" "<RelatedLinks" "<ReadNext" "<Figure"; do
  a=$(git show HEAD:"$f" | grep -o -- "$t" | wc -l); b=$(grep -o -- "$t" "$f" | wc -l)
  [ "$a" = "$b" ] || echo "MISMATCH $t: $a -> $b"
done
# the affiliate and recirculation lines themselves, byte for byte:
diff <(git show HEAD:"$f" | grep -E "BuyLink|TopPick|StickyBuyBar|AffiliateDisclosure|AwardRow|AwardCard|AmazonLink|asin=|search=|NextUp|RelatedLinks|ReadNext") \
     <(grep -E "BuyLink|TopPick|StickyBuyBar|AffiliateDisclosure|AwardRow|AwardCard|AmazonLink|asin=|search=|NextUp|RelatedLinks|ReadNext" "$f") && echo "affiliate lines identical"
git diff -U0 "$f" | grep '^-[^-]'   # removed lines: only the allowed lines above, each extended, never shortened
node scripts/check-photos.mjs
npx tsc --noEmit
```

For a guide: `validate-guide` passes, the amend is recorded, `git diff -U0` shows removed lines only
in a restructured `facts` box (every fact still there), and `check-photos` passes.

Do NOT run `next build` or `npm run build` (other pages are being edited), do NOT `git add -A` or
commit; the coordinator builds and commits. Never set `reviewedBy`, never write first-person
experience or claim testing, never add a quote button to a traffic page, never use an image that
is not in the ledger.

## Measure, and roll back what drops

Each batch is logged with its date. Two to three weeks later compare each page's clicks and the
positions of its top queries against the same days before (Search Console, `page` dimension; ops
skill rule 4: single dimensions). A page whose clicks fall while its impressions hold is reverted
with `git revert` of its own change, and noted in the handoff.

## Report

Per page: each part added (table rows and their sources; each card: page, photo id, the tell; each
photo: id, the section it sits under, the caption, and whether it shows the subject where found),
FAQs added (questions), title before and after with its queries, the dates set, the link-in source
list, photos needed that the ledger lacks, and the check results with every removed line quoted.

## Worked examples (Oct 16, 2026 pilots)

**1. `/blog/why-do-mosquito-bites-itch` (TSX, rank 1: about 13,700 impressions a month at positions
4-20, 0.2% click-through; top query "how long do mosquito bites last").**
- Quick-ID table "Mosquito bite or another bite? Quick ID" (bite, what you see, where and when, how
  long it lasts: mosquito, bed bug, flea, chigger, no-see-um, tick), placed after the "What to do
  right now" box that holds the page's first two buy buttons, before the first h2. Every cell restates
  the page's own bite comparison further down.
- Two photos of bites on skin: `mosquito-bite-welts` under "How long do mosquito bites last" and
  `skeeter-syndrome-leg` under "What is skeeter syndrome?", captioned as their uploaders describe
  them. No share image: the ledger has no public-domain or CC0 photo of a mosquito bite (needed).
- Cards "Often mistaken for a mosquito bite" after the page's "Mosquito Bite vs Other Bites" list:
  bed bug bites, flea bites, chigger bites, no-see-um bites, Lyme disease rash.
- FAQs: 33 already, none added. Title already "How Long Do Mosquito Bites Last & Itch? Timeline":
  kept. `UPDATED` added (2026-10-16) with `modifiedTime`, `dateModified` and the byline; sitemap
  entry added.
- Checks: affiliate tokens and lines identical (6 BuyLink, 7 search=, 1 StickyBuyBar, 3 disclosures),
  removed lines = the schema and byline lines that gained `dateModified`; check-photos and tsc pass.

**2. `/blog/bugs-that-look-like-cockroaches` (guide, rank 35, the highest-ranked guide; top query
"bugs that look like cockroaches").**
- The eight-row "at a glance" box became a seven-row quick-ID table (insect, adult size, how to tell it
  apart) holding every fact of the old rows, with a caption naming Texas A&M, Penn State, the
  Missouri Department of Conservation and UC IPM.
- Three CC0 photos where people find them: a smokybrown cockroach on a wooden rail (lead and share
  image, within the first three blocks), an Oriental cockroach on pavement, a European earwig on a
  palm. Both `media` placeholders stay (neither photo they describe is in the ledger).
- Cards: palmetto bug (American cockroach photo), May beetle on a fingertip, house cricket (planned
  page, unlinked until Dec 28), bed bug.
- FAQs 6 to 9: "What beetles look like cockroaches?", "What bug looks like a cockroach but has
  pincers?", "Is a water bug a cockroach?", each restating facts and sources already on the page.
- `dateModified` 2026-10-16, sitemap entry added, `validate-guide` passes, amendment recorded.
