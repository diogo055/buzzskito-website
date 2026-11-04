# Google index status of buzzskito.ca (Nov 3, 2026)

Every URL in the live sitemap (738) was checked with the Search Console URL Inspection API on the evening of Nov 3 (00:26-00:52 UTC on Nov 4). Read-only: nothing was submitted or requested. One row per URL, with Google's status, verdict, last crawl, Google's and our canonical, robots and fetch state, family, release date and search demand: `index_status.csv` in this folder. The 50 location pages made noindex on Nov 3 have already left the sitemap, so they were not checked.

## Counts by state

| Search Console status | Pages |
|---|---:|
| Submitted and indexed | 720 (97.6%) |
| Discovered - currently not indexed | 9 |
| URL is unknown to Google | 5 |
| Duplicate without user-selected canonical | 2 |
| Crawled - currently not indexed | 2 |
| **All sitemap URLs** | **738** |

- **Pages released since Oct 1:** 247 of 262 indexed (94%). **Older pages:** 473 of 476 (99%).
- Every batch from Oct 11 to Oct 28 is fully indexed. The gaps are the newest pages (8 of the 19 from Oct 29, 2 of the 3 from Oct 31) and 8 stragglers.
- No technical blocks: every crawled page fetched fine, robots.txt allowed every URL, and none is noindex, redirected or missing. The 18 not-indexed pages were also fetched live: all return 200, `index, follow`, a self-canonical and a complete page.
- **The old queue worked.** All 15 pages it marked "requested" (Oct 28-30) are indexed now. Of its 22 unmarked lines, 14 got indexed with no request recorded; the other 8 are all Oct 29 pages.
- Google last read `sitemap.xml` on Nov 3 at 15:16 UTC. It counted 790 URLs then, because the 50 location pages and the 2 Durham pages left the sitemap that evening.

## Google chose a different canonical

Only 2 pages, and both point at another website. This is the "fold" described in `data/god-build/research/foreign-canonical.md`: Google stored a blank or crash copy of the page. Both crawls date from Oct 16, before the page keeper went live on Oct 20.

| Page | Google's canonical | Our canonical, as Google saw it | Last crawl (UTC) |
|---|---|---|---|
| /blog/how-long-do-ants-live | https://www.747live.bet/ | none seen | Oct 16, 12:07 |
| /mosquito-control-diy-vs-professional | https://www.marcustheatres.com/theatre-locations/parkwood-cinema | none seen | Oct 16, 17:18 |

- **The page keeper is working.** 555 pages were last crawled on Oct 21 or later, 178 of them guides, and none of them is folded. At the October rate (7 folds in 105 guide crawls) about 12 of those guides would have been.
- 6 of the 7 folds found on Oct 20 are now indexed under their own address. The seventh, how-long-do-ants-live, has not been crawled again since Oct 16. Its foreign canonical moved from 747ph.live to 747live.bet without a new crawl.
- /mosquito-control-diy-vs-professional is a new find. It is a service page with 167 impressions in the last 90 days.
- Both pages are in the queue. On Oct 16, one request fixed 7 of 7 folds.
- No page has another BuzzSkito page as Google's canonical. The US and Canadian twin guides are indexed separately.

## Not indexed, by family

| Family | Not indexed | Pages (release date; Google's status) |
|---|---:|---|
| Bites & stings | 1 of 32 | flea-bites (Oct 31; discovered) |
| Identification | 7 of 129 | baby-snakes, wood-roaches, bat-bugs, crazy-ants, bugs-in-basement (Oct 29; unknown to Google); lovebugs, baby-silverfish (Oct 29; discovered) |
| Droppings & signs | 1 of 23 | skunk-smell-in-house (Oct 29; discovered) |
| Products | 2 of 175 | /pest-product-guides/ant-control (Oct 8; discovered); pond-aerator-mosquito-larvae-canada (Aug 22; crawled Oct 25, not indexed) |
| Remedies | 2 of 101 | how-to-get-rid-of-drain-flies (Oct 31; discovered); natural-pest-control (Oct 7; discovered) |
| Questions & facts | 1 of 44 | how-long-do-ants-live (Oct 7; folded) |
| Other single-topic | 2 of 74 | zombie-ants (Oct 7; discovered); outdoor-event-mosquito-control-gta (Apr 5; last crawled Jun 18, not indexed) |
| Service side | 2 of 112 | mosquito-control-diy-vs-professional (Apr 19; folded); /image-use (Oct 24; discovered) |
| State & province pages, hubs | 0 of 48 | |

- **14 of the 18 have never been crawled** (9 discovered, 5 unknown to Google). Requesting indexing is the direct fix for these.
- **Only 2 were crawled and turned down.** pond-aerator was crawled Oct 25; its 111 impressions in 90 days show it was indexed before. outdoor-event was last crawled Jun 18.
- **Four pages have waited a month.** zombie-ants, natural-pest-control, how-long-do-ants-live (all Oct 7) and the ant product hub (Oct 8). zombie-ants and natural-pest-control were already "discovered, not crawled" on Oct 20.
- **How families were assigned:** the god-list type or the plan's page type comes first, then the URL rules of the Oct 26 traffic-by-type measurement. Species pages count as identification, as in the god list.

## Queue

`data/god-build/indexing-queue.md` now lists these 18 in priority order:
- the 15 released since Oct 1, with bites, identification, droppings and product pages first, each by US search demand;
- then the one older product page;
- then the other 2 older pages.

At 10-12 requests a day, that is two days of work. The old "done" history is kept.

**The daily task is stuck.** Its Oct 31 run has shown "running" since 13:11 UTC that day. It stopped at its first URL, right after opening Search Console, and no run has started since. Nothing has been requested since Oct 30, when 5 requests went through and then "Quota exceeded" came on bat-bugs. The owner needs to open that run in Claude Code and finish or stop it before the queue moves again.
