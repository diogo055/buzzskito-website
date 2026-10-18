# Search Console health check, Oct 18, 2026

Property `sc-domain:buzzskito.ca`. Read-only API work: URL Inspection on 16 pages and the
sitemap list. Nothing was resubmitted and no indexing was requested.

## 1. The five "Image metadata" issues

The URL Inspection API names them exactly. All five are severity WARNING ("Improve item
appearance"). No item is invalid and no rich result is lost.

| Issue in the report | Items | Which images |
|---|---|---|
| Missing field "copyrightNotice" | 81 | every image (24 diagrams + 57 photos) |
| Missing field "creator" | 57 | every photo |
| Missing field "license" | 52 | 24 diagrams + 28 public-domain photos |
| Missing field "creditText" | 24 | the 24 original diagrams |
| Missing field "acquireLicensePage" | 24 | the 24 original diagrams |

The counts fit exactly: 81 items = 24 diagram placements (12 SVGs in `<Figure>` on 23
articles) + 28 public-domain photos + 29 CC BY / CC BY-SA / CC0 photos, all placed with `<Photo>` on
hand-written articles. Per-page inspection agrees, for example `/blog/mosquito-larvae-identification`
(6 items: copyrightNotice 6, license 6, creator 5, creditText 1, acquireLicensePage 1),
`/blog/chigger-bites`, `/blog/flea-bites-on-humans` and `/blog/no-see-um-bites` (6, 6 and 4 items),
and `/blog/bed-bug-bites` and `/blog/why-do-mosquito-bites-itch` (1 diagram each, crawled before
their photos were added).

Why each field was missing (live JSON-LD, checked):
- **Photos (`components/Photo.tsx` → `Figure.tsx`)** sent `creditText` and `acquireLicensePage`.
  They sent no `creator` and no `copyrightNotice`. Public-domain photos also had no `license`,
  because `LICENSE_LABEL['public-domain']` has no URL.
- **Diagrams (`Figure.tsx` with no credit)** sent only `creator: {"@id": "#organization"}`, with
  no name.
- **Guide photos were missing from the report altogether.** The guide `figure` block
  (`components/GuidePage.tsx`) and the look-alike cards (`components/ConfusedWith.tsx`) printed
  the credit on the page but sent no ImageObject. That covers about 410 photos on the guides,
  which is why `/blog/tiny-black-bugs` and `/blog/bugs-that-look-like-cockroaches` show no
  Image metadata item.

## 2. What changed (schema only; the visible page is byte-identical)

- `lib/photos.ts`: new `photoRights()` and `photoImageObject()`, built from the ledger record
  (`data/god-build/photos.json`):
  - `creditText` is the credit, as shown on the page.
  - `license` is the licence deed. Public domain gets the Creative Commons Public Domain Mark
    `https://creativecommons.org/publicdomain/mark/1.0/`, and CC0 gets `.../publicdomain/zero/1.0/`.
  - `acquireLicensePage` is the record's `sourceUrl`.
  - `creator` is a Person or Organization named in the credit: the iNaturalist "(c) Name", the
    CDC PHIL "photo: Name", or the Commons author. The name is always text taken from the credit
    (the code checks this). It is left out when the credit names nobody.
  - `copyrightNotice` is set only where the source gives one: iNaturalist's "(c) Name" on CC BY
    and CC BY-SA photos.
- `components/Photo.tsx` passes these fields to `<Figure>` through its new `rights` prop.
- `components/Figure.tsx`, original diagrams: now `creator` {Organization, name "BuzzSkito
  Mosquito & Tick Control"}, `creditText` "BuzzSkito" and `copyrightNotice` "© BuzzSkito
  Mosquito & Tick Control" (the footer's wording; `data/image-licenses.json` records all 12 as
  original, author BuzzSkito). The unused credit-without-licence branch now sends the source page
  as `acquireLicensePage`. Before, it sent it as `license`.
- `components/GuidePage.tsx`: each `figure` block now sends a full ImageObject. The caption has
  its markdown removed.
- `components/ConfusedWith.tsx`: each card's photo now sends a full ImageObject, all in one
  JSON-LD block.

Across all 362 ledger photos: 176 get a `creator` (142 Person, 34 Organization), 36 get a
`copyrightNotice`, and every photo gets `creditText`, `license` and `acquireLicensePage`.

## 3. What the report will show after deploy

Once Google recrawls, expect about 560 items (about 535 photo placements + 24 diagrams). These
optional warnings will **stay, on purpose**, because filling them would mean inventing facts:

| Still listed | About | Why it stays |
|---|---|---|
| copyrightNotice | 500 | Public-domain and CC0 photos have no copyright to give notice of. Commons credits carry no notice. |
| creator | 200 | 133 iNaturalist CC0 credits read "no rights reserved" and name nobody. 51 CDC PHIL credits name a content provider but no photographer. 2 Commons credits say "unknown author" or "Employee of US Government". |
| license, acquireLicensePage | 24 each | Our own diagrams. The site offers no licence for them (owner decision below). |
| creditText | 0 | fixed everywhere |

Because the guide photos now send metadata, the item count will go **up** in the next few weeks.
That is expected, not a regression.

## 4. Other health checks

- **Sitemap is stale at Google.** `sitemap.xml` was last submitted and downloaded at 2026-10-13
  15:31 UTC (619 URLs, 0 errors, 0 warnings). The live sitemap now lists 681 URLs. 84 have an
  Oct 16 lastmod, from the early tick release. All four Oct 16 pages sampled are "URL is unknown
  to Google": `/learn/ticks-by-state`, `/learn/ticks-by-province`, `/blog/ticks-in-connecticut`
  and `/blog/ticks-in-alabama`. `/blog/ticks-in-michigan` (Oct 7) is indexed.
- **Indexed pages are healthy.** 12 indexed pages were sampled (articles, guides, homepage,
  renamed `/blog/best-ant-killer`). All are "Submitted and indexed", robots allowed, fetch
  successful. Google's canonical equals the declared one on every page. Rich results PASS:
  Breadcrumbs everywhere, Review snippets on the homepage.
- Not available through the API: mobile usability (skipped, as briefed).
- Left alone: the BlogPosting `image` and logo ImageObjects. They have no `contentUrl`, so they
  are not image-metadata items.

## 5. Verification (no build, no commit)

- `npx tsc --noEmit`: clean.
- `node scripts/check-photos.mjs`: ok. 362 on record, 116 on 30 hand-written pages, 410 in
  guides, 9 on look-alike cards.
- `node scripts/validate-guide.mjs --all --complete --complete-visual`: 148 guides, 0 errors.
- Local server render of 2 guides (`tiny-black-bugs`, `ticks-in-connecticut`) and 2 articles
  (`why-do-mosquito-bites-itch`, `mosquito-larvae-identification`), committed code against
  working tree. With JSON-LD removed, the HTML is identical on all four. JSON-LD blocks went
  4 → 12, 4 → 11, 7 → 8 and 11 → 11. Example of a guide photo after the fix:
  `{"contentUrl":".../guides/photos/american-dog-tick-female.webp","creditText":"CDC/DVBID/ Gary O. Maupin; photo: James Gathany (CDC Public Health Image Library, phil.cdc.gov)","creator":{"@type":"Person","name":"James Gathany"},"license":"https://creativecommons.org/publicdomain/mark/1.0/","acquireLicensePage":"https://wwwn.cdc.gov/phil/Details.aspx?pid=170"}`

## 6. For the owner

1. **After the deploy:** Search Console → Enhancements → Image metadata → open "Missing field
   creditText" → **Validate fix**. It is the one issue fixed on every item, so validation will
   pass. Do not validate the other four yet. They shrink but cannot reach zero (section 3), so
   validation would end "Failed". That is harmless, but confusing.
2. **Resubmit the sitemap** (one click, your approval): Search Console → Sitemaps →
   `https://buzzskito.ca/sitemap.xml` → Resubmit. Google has not read it since Oct 13, before the
   tick release. Optionally, URL Inspection → Request indexing on `/learn/ticks-by-state` and
   `/learn/ticks-by-province`.
3. **Your decision: a licence for our 12 diagrams.** There are three options:
   - leave it, and two warnings stay on 24 items;
   - "all rights reserved, ask us", with `license` pointing at `/terms` and `acquireLicensePage`
     at `/contact`;
   - CC BY 4.0 with attribution, so other sites may reuse them with a credit link (a possible
     backlink source).

   Either of the last two clears those two warnings. Tell us which and it is a two-line change in
   `components/Figure.tsx`.
