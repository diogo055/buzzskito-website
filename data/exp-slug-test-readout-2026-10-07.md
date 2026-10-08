# Slug test read-out, 7 October 2026 (read early at the owner's request)

**The test** (`data/exp-slug-test.json`, started 3 September 2026): 12 blog pages had
`-canada` removed from their address, with a permanent redirect from the old address. 12
matched pages kept `-canada`. Planned read date was 15 October; the owner asked for the
result now.

**Windows compared**: 28 days before (6 Aug to 2 Sep) against 28 days after (7 Sep to 4 Oct),
skipping the first four days of the switch. Search Console, `page` dimension. For renamed
pages the old and new addresses are added together.

## Result: no reliable difference in Canadian clicks. The rename did no measurable harm.

| | Renamed (12 pages) | Kept `-canada` (12 pages) |
|---|---|---|
| All clicks, before to after | 678 to 611 (down 10%) | 616 to 409 (down 34%) |
| Canadian clicks, before to after | 282 to 250 (down 11%) | 191 to 140 (down 27%) |
| US impressions, before to after | 1,634 to 2,195 (up 34%) | 667 to 276 (down 59%) |
| Typical page, all clicks | down 25% | down 5% |
| Typical page, Canadian clicks | up 13% | flat |
| Pages whose position improved / worsened | 8 / 3 | 8 / 4 |

Whole site over the same two windows: Canadian clicks down 14%, US clicks up 32%.

**Why the headline gap is not a win.** The kept group happened to hold the bigger summer
pages (mosquito fogger, screen tent, wasps), and those collapsed with the season. Split by
season the picture reverses:

| | Renamed | Kept |
|---|---|---|
| Summer topics, all clicks | down 35% (6 pages) | down 72% (4 pages) |
| Year-round topics, all clicks | up 4% (6 pages) | up 22% (8 pages) |
| Year-round topics, Canadian clicks | down 3% | up 36% |

A shuffle test on the per-page changes gives p = 0.38 for all clicks and p = 0.43 for
Canadian clicks. With 12 pages a side, this test could only ever have detected a very large
effect, and there was not one.

**US impressions lean toward the renamed pages** (typical page up 21% against down 9%,
p = 0.22). That is the same direction as the earlier site-wide finding in
`data/geo-slug-finding.md`, but it is not proof on its own.

**Google has only partly switched.** In the after window, 41% of the renamed pages'
impressions were still recorded against the old `-canada` address, five weeks in.

## The stop rule, and what was done instead

The rule written on 3 September says: if the renamed pages do not beat the kept pages by 25%
or more on Canadian clicks per page, revert all 12 redirects. On this read they do not
clear that bar in any way that survives the seasonal split.

**The 12 renames were left in place, not reverted. This is a recommendation, and the owner's
call to overrule.** The reasons:

1. Reverting is a second address change on the same 12 pages. Google has not finished
   absorbing the first one. A revert restarts that for no measured gain.
2. The test found no harm from the rename, which is what the stop rule was there to catch.
3. The US lean is mildly in favour of the neutral address.

To revert anyway: flip the 12 entries under `redirects()` in `next.config.mjs` (lines 31 to
42) so each neutral address points back at its `-canada` address, and rename the 12 page
folders back.

## What this changes going forward

- **The freeze is over.** Pages in both groups can be edited again.
- **No more renames.** The test gives no reason to rename the other ~190 `-canada` pages.
- **New pages get a neutral address** with any country word in the title only, as before.
- A fresh look at the same 24 pages in January (a full quarter, past the seasonal drop) would
  settle the Canadian-clicks question properly. The pull script is
  `scripts/slug-test-readout.py`.
