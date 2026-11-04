# Daily "Request indexing" queue

Owner, Oct 29, 2026: "request indexing on the most important ones... every day around the same time when it resets. It's important to do this manually every day."

## Rules

- **Daily limit:** Search Console allows about 10-12 requests a day, so do the top 10-12 not-yet-done URLs each day.
- **Skip pages already indexed.** Check each URL first with the URL Inspection API: `scratchpad gsc/inspect_urls.py`, or Search Console's inspection box. Mark them "indexed".
- **Order:** most important first. That means the biggest search demand (god list Trends volume), new pages before old, and bite and identification pages first.
- **After every run:** add new releases at the right priority, and mark each line `requested YYYY-MM-DD` or `indexed`.

## Procedure

Use the owner's Chrome (Claude in Chrome), signed in to Search Console:

1. Open https://search.google.com/search-console?resource_id=sc-domain%3Abuzzskito.ca.
2. Paste the full URL into the top "Inspect any URL" box and press Enter. Wait for the result.
3. If it says "URL is on Google", mark the line `indexed` and move on.
4. Otherwise click **Request indexing**: the newest matching button on the page. Wait about 40 seconds for the live test.
5. When "Indexing requested" shows, click **Dismiss**.
6. If you see "Quota exceeded" or "Oops! Something went wrong" twice, stop for the day.

Never change any Search Console setting, and never remove or submit sitemaps.

## Queue (in priority order)

Rebuilt Nov 3, 2026 (evening) from a URL Inspection API check of all 738 sitemap URLs: 720 are on Google, these 18 are not (`research_notes/God plan 10k a day/index_status.md`). All 18 were fetched live the same evening: 200, `index, follow`, self-canonical. The 50 location pages that are noindex on purpose are out of the sitemap and not listed.

Released since Oct 1. Bites and stings, identification, droppings and product pages first, by US search demand:

1. https://buzzskito.ca/blog/flea-bites (requested 2026-11-03)
2. https://buzzskito.ca/blog/baby-snakes (requested 2026-11-03)
3. https://buzzskito.ca/blog/lovebugs (requested 2026-11-03)
4. https://buzzskito.ca/blog/wood-roaches (requested 2026-11-03)
5. https://buzzskito.ca/blog/bat-bugs (requested 2026-11-03)
6. https://buzzskito.ca/blog/crazy-ants (requested 2026-11-03)
7. https://buzzskito.ca/blog/skunk-smell-in-house (requested 2026-11-03)
8. https://buzzskito.ca/blog/bugs-in-basement (requested 2026-11-03)
9. https://buzzskito.ca/blog/baby-silverfish (requested 2026-11-03)
10. https://buzzskito.ca/pest-product-guides/ant-control (requested 2026-11-03)

Released since Oct 1, the rest. Line 11 is a "fold": Google filed it under a casino site (`data/god-build/research/foreign-canonical.md`). One request fixed 7 of 7 folds on Oct 16:

11. https://buzzskito.ca/blog/how-long-do-ants-live (requested 2026-11-03)
12. https://buzzskito.ca/blog/how-to-get-rid-of-drain-flies
13. https://buzzskito.ca/blog/zombie-ants
14. https://buzzskito.ca/blog/natural-pest-control
15. https://buzzskito.ca/image-use

Older pages in the families that win clicks:

16. https://buzzskito.ca/blog/pond-aerator-mosquito-larvae-canada

Older pages, the rest. Line 17 is another fold, filed under a cinema site:

17. https://buzzskito.ca/mosquito-control-diy-vs-professional
18. https://buzzskito.ca/blog/outdoor-event-mosquito-control-gta

Pages released after Nov 3 go at the top of the queue.

## Done

Marked before the Nov 3 rebuild, with the marks as they were. The Nov 3 check found every one of them on Google:

- https://buzzskito.ca/blog/dust-mite-bites (requested 2026-10-30)
- https://buzzskito.ca/blog/gnat-bites (requested 2026-10-30)
- https://buzzskito.ca/blog/false-widow-spiders (requested 2026-10-30)
- https://buzzskito.ca/blog/ground-bees (requested 2026-10-30)
- https://buzzskito.ca/blog/sweat-bees (requested 2026-10-30)
- https://buzzskito.ca/blog/maggots (requested 2026-10-29)
- https://buzzskito.ca/blog/black-widow-spiders (indexed)
- https://buzzskito.ca/blog/black-widow-bite (indexed)
- https://buzzskito.ca/blog/dust-mites (requested 2026-10-29)
- https://buzzskito.ca/blog/lice-eggs (indexed)
- https://buzzskito.ca/blog/fleas-on-humans (requested 2026-10-29)
- https://buzzskito.ca/blog/wasp-vs-hornet (indexed)
- https://buzzskito.ca/blog/fire-ant-stings (indexed)
- https://buzzskito.ca/blog/bed-bug-eggs (indexed)
- https://buzzskito.ca/blog/kissing-bug-bites (indexed)
- https://buzzskito.ca/blog/what-do-lice-look-like (requested 2026-10-29)
- https://buzzskito.ca/blog/no-see-ums (indexed)
- https://buzzskito.ca/blog/japanese-beetles (requested 2026-10-29)
- https://buzzskito.ca/blog/june-bugs (indexed)
- https://buzzskito.ca/blog/hobo-spiders (indexed)
- https://buzzskito.ca/blog/mite-bites (indexed)
- https://buzzskito.ca/blog/sand-fleas (indexed)
- https://buzzskito.ca/blog/wasp-nest-identification (indexed)
- https://buzzskito.ca/blog/rabbit-poop (indexed)
- https://buzzskito.ca/blog/spider-mites (requested 2026-10-29)
- https://buzzskito.ca/blog/possum-vs-opossum (requested 2026-10-28)
- https://buzzskito.ca/blog/how-long-do-rats-live (requested 2026-10-28)
- https://buzzskito.ca/blog/carpet-beetle-rash (requested 2026-10-28)
- https://buzzskito.ca/blog/pseudoscorpions (requested 2026-10-28)

Listed in the queue but not yet requested before Nov 3. The Nov 3 check found them on Google:

- https://buzzskito.ca/blog/tiny-red-bugs (indexed)
- https://buzzskito.ca/blog/spider-beetles (indexed)
- https://buzzskito.ca/blog/southern-house-spider (indexed)
- https://buzzskito.ca/blog/woodlouse-spiders (indexed)
- https://buzzskito.ca/blog/copperhead-look-alikes (indexed)
- https://buzzskito.ca/blog/tomato-hornworms (indexed)
- https://buzzskito.ca/blog/baby-rats (indexed)
- https://buzzskito.ca/blog/rat-nest (indexed)
- https://buzzskito.ca/blog/bugs-in-carpet (indexed)
- https://buzzskito.ca/blog/tiny-white-bugs (indexed)
- https://buzzskito.ca/blog/bugs-in-bathroom (indexed)
- https://buzzskito.ca/blog/bugs-in-kitchen (indexed)
- https://buzzskito.ca/blog/crickets-in-house (indexed)
- https://buzzskito.ca/blog/stick-bugs (indexed)
