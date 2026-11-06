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

**The quota is a rolling 24 hours, not a calendar day** (measured Nov 5, 2026): the 9 requests made at 9:28 pm Toronto on Nov 4 left room for only one more at 9:40 am on Nov 5, then "Quota exceeded". So request at about the same time each day; the next window after a late-evening batch opens about 24 hours later. Second reading, 9:31-9:55 pm Toronto on Nov 5: 11 requests went through and the 12th got "Quota exceeded" (12 in 24 hours with the 9:40 am one), so plan on 10-12.

**Next run: about 9:30 pm Toronto on Nov 6.** First anything released on Nov 6-7, then the two merge survivors still open below (Mosquito Bits vs Dunks, Cimexa), then the upgraded pages (`/blog/mice-traps` and the others under Nov 5, the two Canadian mouse pages under Nov 4), then lines 12-18.

Released Nov 6, 2026 (just after 7 pm Toronto on Nov 5), plus the homepage's new title. All requested at 9:31-9:55 pm Toronto on Nov 5; the five new pages were "unknown to Google" before the request:

- https://buzzskito.ca/ (homepage: new title "Mosquito & Tick Control | Greater Toronto Area | From $99" and H1); recrawl requested 2026-11-06
- https://buzzskito.ca/blog/little-black-ants (new; ant ID, "little black ants"); requested 2026-11-06
- https://buzzskito.ca/blog/roach-droppings-vs-mouse-droppings (new; droppings comparison); requested 2026-11-06
- https://buzzskito.ca/blog/christmas-tree-bugs (new; seasonal, searched late November to December); requested 2026-11-06
- https://buzzskito.ca/blog/best-bed-bug-interceptors (new; US buying guide, amazon.com pick); requested 2026-11-06
- https://buzzskito.ca/blog/best-wasp-spray (new; US buying guide, amazon.com pick); requested 2026-11-06

Nov 5, 2026, second batch (the owner wants it done by hand in his Chrome, not by the scheduled task):

- https://buzzskito.ca/blog/best-mosquito-repellent (new; "mosquito repellent" US 100K-1M a month); requested 2026-11-05
- https://buzzskito.ca/blog/best-ant-bait (new; "ant killer" / "ant bait" / "ant traps" US 10K-100K each); indexed (checked 2026-11-05)
- https://buzzskito.ca/blog/best-bed-bug-mattress-cover (new; "bed bug mattress cover" US 10K-100K); indexed (checked 2026-11-06)
- https://buzzskito.ca/blog/best-bug-zapper (new; "bug zapper" US 10K-100K); was "Discovered - currently not indexed"; requested 2026-11-06
- Merge survivors, so Google sees the folded content and the 301s (all four checked were already on Google, so these are recrawl requests): https://buzzskito.ca/blog/best-large-capacity-dehumidifier-canada (requested 2026-11-06), https://buzzskito.ca/blog/bed-bug-spray-canada (requested 2026-11-06), https://buzzskito.ca/blog/best-cockroach-spray-canada (requested 2026-11-06), https://buzzskito.ca/blog/how-to-get-rid-of-ground-wasps-canada (requested 2026-11-06), https://buzzskito.ca/blog/mosquito-bits-canada-vs-dunks (on Google; "Quota exceeded" on Nov 5, request on Nov 6), https://buzzskito.ca/blog/cimexa-bed-bug-review-canada (not reached; request on Nov 6)

Released Nov 5, 2026 (the first US buying guides, amazon.com picks). Request these and the six Nov 4 lines below on Nov 5 (12 in all, about one day's quota):

- https://buzzskito.ca/blog/best-fruit-fly-traps (new; "fruit fly trap" US 100K-1M a month); requested 2026-11-05)
- https://buzzskito.ca/blog/best-bed-bug-spray (new; "bed bug spray" US 10K-100K); requested 2026-11-05)
- https://buzzskito.ca/blog/best-rat-traps (new; "rat traps" US 10K-100K); requested 2026-11-05)
- https://buzzskito.ca/blog/best-cockroach-gel-bait (new; "cockroach gel bait" US 10K-100K); requested 2026-11-05)
- https://buzzskito.ca/blog/best-flea-spray-for-home (new; "flea spray for house" US 10K-100K); requested 2026-11-05)
- https://buzzskito.ca/blog/raccoon-repellent (new; "raccoon repellent" US 10K-100K); requested 2026-11-05)
- Upgraded the same night (amazon.com picks block added), lower priority: /blog/mice-traps, /blog/how-to-get-rid-of-bed-bugs, /blog/how-to-get-rid-of-cockroaches, /blog/mice-repellent

Released or upgraded Nov 4, 2026 (God plan "go", day 1). Request these first:

- https://buzzskito.ca/blog/yellow-jackets (new; "yellow jacket" US 100K-1M a month); indexed 2026-11-05)
- https://buzzskito.ca/blog/voles (new; "vole" ~101K US); requested 2026-11-05)
- https://buzzskito.ca/blog/lone-star-tick (new; US edition of the Canadian lone star page); requested 2026-11-05)
- https://buzzskito.ca/tools/bug-bite-identifier (upgraded: title, intro, bite pictures moved up, open FAQ); recrawl requested 2026-11-05)
- https://buzzskito.ca/blog/mouse-repellent-canada (upgraded: NestOff section, evidence and registry table)
- https://buzzskito.ca/blog/best-mouse-trap-canada (upgraded: trap-type tables, numbered picks, registration FAQ)

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
