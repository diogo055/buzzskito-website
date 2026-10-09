# North American pest guides: what was built

Generated 2026-10-09 from the files in the repository.

## The 100 keywords

| Outcome | Count |
|---|---|
| New guides under /blog | 64 |
| New hub pages under /learn | 4 |
| Existing guides broadened for US readers | 9 |
| Keywords answered by an existing page (no new page) | 9 |
| Keywords answered by another new page with the same intent | 9 |

Also added: two product hubs (/pest-product-guides/ant-control and /cockroach-control). New pages total 204,122 words of body text.

## Why 76 new pages and not 100

Two keywords that mean the same thing need one page. Two pages would compete with each other in Google and both would do worse.

| Keyword | Answered by | Why |
|---|---|---|
| mosquitoes | /blog/mosquito-facts | The existing mosquito facts page is the site's general page about mosquitoes, and the brief rules out a new mosquito pillar. |
| what do bed bugs bites look like | /blog/bed-bug-bites | An existing page already answers what bed bug bites look like. |
| baby bed bugs | /blog/baby-bed-bugs-nymphs | An existing page already answers what baby bed bugs look like, on a neutral address. |
| bugs that look like ticks | /blog/bugs-that-look-like-ticks | An existing page already answers this exact search on the same address a new page would use. |
| do ticks fly | /blog/do-ticks-fly-or-jump | An existing page already answers whether ticks fly. |
| types of ticks | /blog/types-of-ticks-identification | An existing page already answers types of ticks. |
| can mosquitoes bite through clothes | /blog/can-mosquitoes-bite-through-clothes | An existing page already answers this exact search on the same address a new page would use. |
| how to get rid of mosquitoes in the house | /blog/how-to-get-rid-of-mosquitoes-in-the-house | An existing page already answers this exact search on the same address a new page would use. |
| best way to get rid of mice | /blog/how-to-get-rid-of-mice-canada | Same search intent as 'how to get rid of mice', which the brief maps to this page. |
| how to get rid of sugar ants | /blog/sugar-ants | Same search intent as that page's main keyword. |
| do cockroaches fly | /blog/can-cockroaches-fly | Same search intent as that page's main keyword. |
| how to get rid of bed bugs fast | /blog/how-to-get-rid-of-bed-bugs | Same search intent as that page's main keyword. |
| mice pest control | /blog/mice-exterminator | Same search intent as that page's main keyword. |
| exterminator for mice | /blog/mice-exterminator | Same search intent as that page's main keyword. |
| ants in house | /blog/how-to-get-rid-of-ants-in-the-house | Same search intent as that page's main keyword. |
| flying ants in house | /blog/flying-ants | Same search intent as that page's main keyword. |
| baby ticks | /blog/seed-ticks | Same search intent as that page's main keyword. |
| termites vs ants | /blog/flying-ants-vs-termites | Same search intent as that page's main keyword. |

## Quality control

- Every new page was written from government, university and peer-reviewed sources, then checked claim by claim by a second, independent pass that re-opened each source.
- New pages: 6,210 claims checked, 521 corrected, 502 softened or removed, across 68 pages.
- Edited existing pages: 1,000 claims checked, 63 corrected, 75 softened or removed, across 19 pages.
- Every edit to an existing page was compared against a copy taken before the work started: no original line deleted, no product link added, moved or changed.
- No new page carries an affiliate or retailer link. The build now fails if one is added (`npm run check:guides`).
- **No person has read these pages.** They say so: each one states it was drafted with AI assistance and fact-checked by a second AI pass, and is published under the company name. When you have read a page and approve it, it can show "Reviewed by" with your name and the date.

## What to expect, honestly

The spreadsheet projected 109,887 clicks and $3,626 a month. That is not a forecast. It assumes a top-three ranking for every keyword.

Three measured facts set the real range:

- **Ahrefs' own estimate for the page ranked number one today** adds up to 514,440 visits a month across all 100 keywords. That is the ceiling if every page ranked first. For some head terms it is tiny: "how to get rid of bed bugs" is listed at 49,000 searches, and the current number-one page gets about 150 visits a month.
- **"Difficulty 0" does not mean easy.** That score counts links to the ranking pages. The pages that rank are from national pest companies, CDC, EPA and universities.
- **This site's own record:** the 215 pages built in July earn a median of $0.16 a page a month, and 40% earn nothing. The whole site had about 1,900 US clicks in the last 28 days.

A realistic first quarter is a few hundred to a few thousand extra visits a month, concentrated in a handful of pages. Check Search Console in six to eight weeks and judge by impressions first.

Highest traffic potential among the new pages (Ahrefs, US, monthly visits to the current top page):

| Page | Traffic potential |
|---|---|
| /blog/bed-bugs-on-mattress | 57,000 |
| /blog/diy-pest-control | 22,000 |
| /blog/flying-ants | 21,700 |
| /blog/do-ants-bite | 21,000 |
| /blog/types-of-mice | 16,000 |
| /blog/can-cockroaches-fly | 11,300 |
| /blog/do-cockroaches-bite | 11,000 |
| /blog/ticks-that-carry-lyme-disease | 10,000 |
| /blog/what-kills-ticks | 10,000 |
| /blog/borax-for-ants | 9,400 |
| /blog/red-ants | 7,500 |
| /blog/where-do-cockroaches-come-from | 7,300 |

## Decisions made for you (each is easy to reverse)

- **Canadian twins.** Seven new guides answer the same question as an existing Canadian guide. They are set up as US and Canadian editions of each other, so Google shows each country its own page and your Canadian product pages keep their Canadian visitors. The list is `REGIONAL_PAIRS` in `lib/guides.ts`.
- **Titles.** Three broadened guides with little traffic were retitled "(US & Canada)". The five with real Canadian traffic kept their titles, because the country word in the title is what earns their clicks.
- **Slug test.** Read early at your request: no reliable difference, no harm. The 12 renames stay; no more renames. See `data/exp-slug-test-readout-2026-10-07.md`.
- **Phone quote bar** is hidden on the guides about pests you do not treat, as it already is on your other such pages.
- **Photos.** None were added. `reports/us_pages_media_needed.md` lists the photos each page would benefit from.

## How to check any of this

```bash
node scripts/validate-guide.mjs --all --complete --report
```

The full list of keyword, page, action, word count and inbound links is in `build-manifest.json`. The order to request indexing in Search Console is in `new-urls.txt`.
