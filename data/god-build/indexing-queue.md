# Daily "Request indexing" queue

Owner, Oct 29, 2026: "request indexing on the most important ones... every day around the same time when it resets. It's important to do this manually every day."

## Rules

- **Daily limit:** Search Console allows about 10-12 requests a day, so do the top 10-12 not-yet-done URLs each day.
- **Skip pages already indexed**, except lines marked `recrawl` (merged or upgraded pages that Google should re-read). Check each URL first with the URL Inspection API: `scratchpad gsc/inspect_urls.py`, or Search Console's inspection box. Mark them "indexed".
- **Order:** most important first. That means the biggest search demand (god list Trends volume), new pages before old, and bite and identification pages first.
- **After every run:** add new releases at the right priority, and mark each line `requested YYYY-MM-DD` or `indexed`.

## Procedure

Use the owner's Chrome (Claude in Chrome), signed in to Search Console:

1. Open https://search.google.com/search-console?resource_id=sc-domain%3Abuzzskito.ca.
2. Paste the full URL into the top "Inspect any URL" box and press Enter. Wait for the result.
3. If it says "URL is on Google", mark the line `indexed` and move on. **A line marked `recrawl` is the exception:** request indexing anyway, so Google re-reads the new version, and mark it `recrawl requested YYYY-MM-DD`.
4. Otherwise click **Request indexing**: the newest matching button on the page. Wait about 40 seconds for the live test.
5. When "Indexing requested" shows, click **Dismiss**.
6. If you see "Quota exceeded" or "Oops! Something went wrong" twice, stop for the day.

Never change any Search Console setting, and never remove or submit sitemaps.

## Queue (in priority order)

Rebuilt Nov 3, 2026 (evening) from a URL Inspection API check of all 738 sitemap URLs: 720 are on Google, these 18 are not (`research_notes/God plan 10k a day/index_status.md`). All 18 were fetched live the same evening: 200, `index, follow`, self-canonical. The 50 location pages that are noindex on purpose are out of the sitemap and not listed.

**The quota is a rolling 24 hours, not a calendar day** (measured Nov 5, 2026): the 9 requests made at 9:28 pm Toronto on Nov 4 left room for only one more at 9:40 am on Nov 5, then "Quota exceeded". So request at about the same time each day; the next window after a late-evening batch opens about 24 hours later. Second reading, 9:31-9:47 pm Toronto on Nov 5: 11 requests went through and the 12th got "Quota exceeded" (12 in 24 hours with the 9:40 am one), so plan on 10-12.

**Nov 9, 2026 run (about 5:00-5:15 pm Toronto, owner's Chrome):**
- **Gap before it:** nothing had been requested Nov 6-8.
- **Result:** 11 requests went through. The 12th, `/blog/oriental-cockroaches`, got "Quota exceeded".
- **Checked first:** every URL was looked up with the URL Inspection API (scratchpad `idx_nov9/check.py`). Pages Google had already re-read since their change are marked "re-read by Google" and need no request.
- **Use the inspect box:** the direct `search-console/inspect?...&id=` link returned a Google 404, so use the "Inspect any URL" box (step 2).

**Next run: from about 5:15 pm Toronto on Nov 10.**
1. The 10 new pages released the night of Nov 9 (just below) FIRST: new pages before old.
2. Then `/blog/oriental-cockroaches`.
3. Then every line below marked **still needed (Nov 9 check)**, winter money pages before off-season ones.

**Released the night of Nov 9, 2026 (release date Nov 10 UTC): the owner's "top 10".** Written from fresh research in the proven photo-ID template and fact-checked. The owner lifted the pace cap for them ("push everything if everything is good to go").
- **When:** they are new pages, so request them FIRST, on the Nov 10 evening run.
- **Order:** winter value first.

- https://buzzskito.ca/blog/brown-recluse (new; "brown recluse" US 100K-1M)
- https://buzzskito.ca/blog/coyote-poop (new; US 10K-100K; already 724 Google Images impressions in 4 weeks)
- https://buzzskito.ca/blog/drugstore-beetles (new; US 10K-100K)
- https://buzzskito.ca/blog/centipede-vs-millipede (new; US 10K-100K)
- https://buzzskito.ca/blog/squirrel-nest (new; US 10K-100K)
- https://buzzskito.ca/blog/phorid-flies (new; US 10K-100K)
- https://buzzskito.ca/blog/possum-poop (new; US 10K-100K)
- https://buzzskito.ca/blog/animal-tracks-in-snow (new; winter; three searches of 1K-10K)
- https://buzzskito.ca/blog/bear-poop (new; US 10K-100K; spring to fall)
- https://buzzskito.ca/blog/stink-bug-eggs (new; US 10K-100K; May-August)

Rebuilt Nov 10, 2026 in the proven template (owner's yes), both fact-checked. They are `recrawl`, on Google already; request them right after the 10 above:

- https://buzzskito.ca/blog/german-cockroaches (`recrawl`; "german cockroach" US 100K-1M, our page around 15-16)
- https://buzzskito.ca/blog/house-centipedes (`recrawl`; "house centipede" US 100K-1M, our page around 12)

Released Nov 6, 2026 (afternoon; mosquito & tick build, top 10), new pages. Nov 9 check: Google had found 7 of the 10 by itself; the other 3 were requested on Nov 9:

- https://buzzskito.ca/blog/what-do-mosquito-bites-look-like (new; bite photo page, "what do mosquito bites look like"); indexed (checked 2026-11-09)
- https://buzzskito.ca/blog/skeeter-syndrome (new; bites, "skeeter syndrome"); indexed (checked 2026-11-09)
- https://buzzskito.ca/blog/deer-tick-vs-dog-tick (new; US edition, regional pair with the Canadian page); was "Discovered - currently not indexed"; requested 2026-11-09
- https://buzzskito.ca/blog/best-tick-repellent (new; Canadian buying page for people, amazon.ca, "best tick repellent"); was "Discovered - currently not indexed"; requested 2026-11-09
- https://buzzskito.ca/blog/types-of-mosquitoes (new; released the same evening on the owner's "push everything now"); was not on Google; requested 2026-11-09
- https://buzzskito.ca/blog/asian-tiger-mosquito (new); indexed (checked 2026-11-09)
- https://buzzskito.ca/blog/permethrin-for-clothing (new; US buying guide, regional pair with the Canadian permethrin page); indexed (checked 2026-11-09)
- https://buzzskito.ca/blog/best-tick-spray-for-yard (new; US buying guide, regional pair with the Canadian yard page); indexed (checked 2026-11-09)
- https://buzzskito.ca/blog/best-mosquito-spray-for-yard (new; US buying guide, released the same evening after its fact-check); indexed (checked 2026-11-09)
- https://buzzskito.ca/blog/mosquito-bits-vs-dunks (new; US edition, regional pair with /blog/mosquito-bits-canada-vs-dunks); indexed (checked 2026-11-09)

Service pages changed Nov 7, 2026 (owner: "the goal is to appear number one for each one of these searches"; "make it right now so the pages aren't competing with each other"). All `recrawl`, all already on Google. They are off-season pages, so request them after the new pages above but before the Nov 6 upgrades below, within the week:

- https://buzzskito.ca/mosquito-control (`recrawl` requested 2026-11-09, FIRST of this group; rebuilt Nov 8, 2026 on the owner's OK: H1 "Mosquito Control & Yard Spraying for GTA Homes", six new sections, 15 FAQs; "mosquito control" 3,261 season impressions at 16.5, page itself at 20)
- https://buzzskito.ca/hamilton-mosquito-control (`recrawl`; **still needed (Nov 9 check: last read Nov 5)**; new section "Residential Mosquito Spray and Treatment in Hamilton", H1 "Hamilton Mosquito Control & Yard Spray", City of Hamilton West Nile facts with source)
- https://buzzskito.ca/blog/tick-control-vaughan-king-city-woodbridge (`recrawl`; retitled "Ticks in Vaughan, Woodbridge & King City" so it stops competing with /vaughan-tick-spray; now links to the Vaughan, Woodbridge and King City tick pages)
- https://buzzskito.ca/vaughan-tick-spray (`recrawl`; title "Tick Control Vaughan: Yard Tick Spray From $99", no 2026)
- https://buzzskito.ca/oakville-mosquito-control (`recrawl`; **still needed (Nov 9 check: last read Nov 5)**; its Nov 5 title was still not showing in Google on Nov 7)
- https://buzzskito.ca/toronto-tick-spray (`recrawl`; re-read by Google 2026-11-08, no request needed; "tick control toronto" is our weakest big city search, about 21st; Nov 5 title)
- https://buzzskito.ca/burlington-mosquito-spray (`recrawl`; title "Mosquito Control Burlington · 5-Star Rated", no 2026)
- https://buzzskito.ca/blog/mosquito-control-vaughan-york-region (`recrawl`; retitled "Mosquitoes in Vaughan & York Region: Hot Spots")
- https://buzzskito.ca/blog/tick-control-ancaster-dundas-hamilton (`recrawl`; retitled "Ticks in Ancaster & Dundas: Escarpment Risk"; now links to /hamilton-tick-spray)
- https://buzzskito.ca/blog/mosquito-tick-control-hamilton-burlington (`recrawl`; retitled "Mosquitoes & Ticks in Hamilton and Burlington")
- https://buzzskito.ca/blog/mosquito-control-etobicoke-north-york (`recrawl`; retitled "Mosquitoes & Ticks in Etobicoke and North York")
- https://buzzskito.ca/hamilton-tick-spray (`recrawl`; title "Tick Control Hamilton: Yard Tick Spray From $99")
- https://buzzskito.ca/woodbridge-mosquito-control (`recrawl`; title "Mosquito Control Woodbridge · 5-Star Rated")
- https://buzzskito.ca/best-mosquito-control-companies-gta (`recrawl`, lowest of this group; Nov 7 `738c929a`: says BuzzSkito wrote it, lists BuzzSkito last, no self-ranking ItemList or "Factual & Honest" badge)
- The other 22 service pages that lost "2026" from their titles on Nov 7 are left to Google's normal crawl.

Photos added Nov 8, 2026 (owner: "put pictures on all 17 pages"; commit `5691c9c4`): the biggest Amazon pages had no photo at all and now carry 3-4 real, credited photos each. All `recrawl`, all already on Google. Winter money pages first; the off-season mosquito, tick and wasp pages can wait (the sitemap date moved to Nov 8, so Google will re-read them anyway):

- https://buzzskito.ca/blog/best-rat-trap-canada (`recrawl`; photos; "rat trap" ~11); recrawl requested 2026-11-09
- https://buzzskito.ca/blog/best-mouse-trap-canada (`recrawl`; photos; mouse season peak); re-read by Google 2026-11-09, no request needed
- https://buzzskito.ca/blog/advion-cockroach-gel-bait (`recrawl`; photos); re-read by Google 2026-11-08, no request needed
- https://buzzskito.ca/blog/best-fruit-fly-trap-canada (`recrawl`; photos; "fruit fly trap" 11.6); recrawl requested 2026-11-09
- https://buzzskito.ca/blog/bed-bug-spray-canada (`recrawl`; photos; also receives the old mattress-spray URL); re-read by Google 2026-11-09, no request needed
- https://buzzskito.ca/blog/best-flea-spray-for-home-canada (`recrawl`; photos); recrawl requested 2026-11-09
- https://buzzskito.ca/blog/raccoon-deterrent (`recrawl`; photos); re-read by Google 2026-11-09, no request needed
- https://buzzskito.ca/blog/best-rodent-repellent-for-cars-canada (`recrawl`; photos); **still needed (Nov 9 check: last read Nov 5)**
- https://buzzskito.ca/blog/vamoose-for-mice (`recrawl`; photos); **still needed (Nov 9 check: last read Nov 2)**
- https://buzzskito.ca/blog/rat-poison-canada-what-is-legal (`recrawl`; photos); **still needed (Nov 9 check: last read Nov 5)**
- https://buzzskito.ca/blog/bed-bug-mattress-encasement-canada (`recrawl`; photos); **still needed (Nov 9 check: last read Nov 5)**
- https://buzzskito.ca/blog/electric-fly-swatter (`recrawl`; photos)
- Off-season, lowest: mosquito-bits-canada-vs-dunks, laser-mosquito-killer-photon-matrix-review, permethrin-canada-yard-clothing-spray, how-to-get-rid-of-ground-wasps-canada, best-wasp-nest-spray-canada (photos; request only if the quota has room after everything above)

Top-3 walkthrough Nov 8, 2026 (owner: "see what can be improved to get the positions up versus whoever already ranks top 3"): new sourced sections, tables, FAQs and photos, every new claim fact-checked. All `recrawl`, all already on Google, biggest US demand first:

- https://buzzskito.ca/blog/what-do-fleas-look-like (`recrawl`; ~14.7K impressions / 28 days at 6-7.5); recrawl requested 2026-11-09
- https://buzzskito.ca/blog/red-ticks-and-clover-mites (`recrawl`; "red tick" 2,448 at 8.6; corrected: the adult female deer tick is red-orange); re-read by Google 2026-11-09, no request needed
- https://buzzskito.ca/blog/sand-fleas (`recrawl`; "sand fleas" 3,427 at 8.4); recrawl requested 2026-11-09
- https://buzzskito.ca/blog/tiny-brown-bugs (`recrawl`; long-tail, top riser); re-read by Google 2026-11-09, no request needed
- https://buzzskito.ca/blog/tiny-black-bugs (`recrawl`); re-read by Google 2026-11-09, no request needed
- https://buzzskito.ca/blog/tiny-white-bugs (`recrawl`); recrawl requested 2026-11-09
- https://buzzskito.ca/blog/oriental-cockroaches (`recrawl`; "black cockroach" 1,233 at 10.1); "Quota exceeded" on 2026-11-09: **FIRST on the next run**
- https://buzzskito.ca/blog/bugs-that-look-like-fleas (`recrawl`); **still needed (Nov 9 check: last read Nov 8, before the change)**
- https://buzzskito.ca/blog/maggots (`recrawl`; "maggots" 1,324 at 10.3); re-read by Google 2026-11-09, no request needed
- https://buzzskito.ca/blog/animal-droppings (`recrawl`); **still needed (Nov 9 check: last read Nov 7)**
- https://buzzskito.ca/blog/mite-bites (`recrawl`); re-read by Google 2026-11-08, no request needed

Upgraded Nov 6, 2026 (owner: "fix the entire mosquito section"; new sections, tables, FAQs, photos, sourced corrections), all `recrawl`. Off-season pages, so after the winter pages above:

- https://buzzskito.ca/blog/mosquito-larvae-identification (`recrawl`; "mosquito larvae" 30,700 summer impressions at 9.7)
- https://buzzskito.ca/blog/laser-mosquito-killer-photon-matrix-review (`recrawl`; #1 mosquito Amazon earner)
- https://buzzskito.ca/blog/tick-head-stuck-in-skin (`recrawl`; new title, position 18-29 before)
- https://buzzskito.ca/blog/deer-tick-vs-dog-tick-canada (`recrawl`)
- https://buzzskito.ca/blog/best-mosquito-repellent-device-canada (`recrawl`)
- https://buzzskito.ca/blog/dynatrap-canada-review (`recrawl`)
- https://buzzskito.ca/blog/bug-zappers-canada-do-they-work (`recrawl`)
- https://buzzskito.ca/blog/best-screen-tent-canada (`recrawl`)
- https://buzzskito.ca/blog/tick-removal-tool-guide (`recrawl`)
- https://buzzskito.ca/blog/mosquito-repellent-guide-ontario-2026 (`recrawl`)
- https://buzzskito.ca/blog/natural-mosquito-repellent-ontario (`recrawl`)
- https://buzzskito.ca/blog/best-tick-repellent-yard-canada (`recrawl`; new title, buttons for unregistered products gone since Nov 5)

Released Nov 6, 2026 (just after 7 pm Toronto on Nov 5), plus the homepage's new title. All requested at 9:31-9:47 pm Toronto on Nov 5; the five new pages were "unknown to Google" before the request:

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
- Merge survivors, so Google sees the folded content and the 301s (all four checked were already on Google, so these are recrawl requests): https://buzzskito.ca/blog/best-large-capacity-dehumidifier-canada (requested 2026-11-06), https://buzzskito.ca/blog/bed-bug-spray-canada (requested 2026-11-06), https://buzzskito.ca/blog/best-cockroach-spray-canada (requested 2026-11-06), https://buzzskito.ca/blog/how-to-get-rid-of-ground-wasps-canada (requested 2026-11-06)
- https://buzzskito.ca/blog/mosquito-bits-canada-vs-dunks (merge survivor, `recrawl`; on Google; "Quota exceeded" on Nov 5); re-read by Google 2026-11-09, no request needed
- https://buzzskito.ca/blog/cimexa-bed-bug-review-canada (merge survivor, `recrawl`; not reached on Nov 5); re-read by Google 2026-11-09, no request needed

Released Nov 5, 2026 (the first US buying guides, amazon.com picks). Request these and the six Nov 4 lines below on Nov 5 (12 in all, about one day's quota):

- https://buzzskito.ca/blog/best-fruit-fly-traps (new; "fruit fly trap" US 100K-1M a month); requested 2026-11-05)
- https://buzzskito.ca/blog/best-bed-bug-spray (new; "bed bug spray" US 10K-100K); requested 2026-11-05)
- https://buzzskito.ca/blog/best-rat-traps (new; "rat traps" US 10K-100K); requested 2026-11-05)
- https://buzzskito.ca/blog/best-cockroach-gel-bait (new; "cockroach gel bait" US 10K-100K); requested 2026-11-05)
- https://buzzskito.ca/blog/best-flea-spray-for-home (new; "flea spray for house" US 10K-100K); requested 2026-11-05)
- https://buzzskito.ca/blog/raccoon-repellent (new; "raccoon repellent" US 10K-100K); requested 2026-11-05)
- Upgraded the same night (amazon.com picks block added), lower priority, all `recrawl`: https://buzzskito.ca/blog/mice-traps, https://buzzskito.ca/blog/how-to-get-rid-of-bed-bugs, https://buzzskito.ca/blog/how-to-get-rid-of-cockroaches, https://buzzskito.ca/blog/mice-repellent. Nov 9 check: mice-traps (last read Oct 9) and how-to-get-rid-of-cockroaches (last read Nov 2) are **still needed**; the other two were re-read Nov 6-7

Released or upgraded Nov 4, 2026 (God plan "go", day 1). Request these first:

- https://buzzskito.ca/blog/yellow-jackets (new; "yellow jacket" US 100K-1M a month); indexed 2026-11-05)
- https://buzzskito.ca/blog/voles (new; "vole" ~101K US); requested 2026-11-05)
- https://buzzskito.ca/blog/lone-star-tick (new; US edition of the Canadian lone star page); requested 2026-11-05)
- https://buzzskito.ca/tools/bug-bite-identifier (upgraded: title, intro, bite pictures moved up, open FAQ); recrawl requested 2026-11-05)
- https://buzzskito.ca/blog/mouse-repellent-canada (`recrawl`; upgraded: NestOff section, evidence and registry table); Google had last read it Nov 1; recrawl requested 2026-11-09
- https://buzzskito.ca/blog/best-mouse-trap-canada (`recrawl`; upgraded: trap-type tables, numbered picks, registration FAQ); re-read by Google 2026-11-09, no request needed

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
12. https://buzzskito.ca/blog/how-to-get-rid-of-drain-flies (indexed, checked 2026-11-09)
13. https://buzzskito.ca/blog/zombie-ants (still "Discovered - currently not indexed" on Nov 9: **still needed**)
14. https://buzzskito.ca/blog/natural-pest-control (still "Discovered - currently not indexed" on Nov 9: **still needed**)
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
