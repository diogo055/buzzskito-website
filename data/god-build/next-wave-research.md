# Next wave: highest-traffic pest pages to build (all pests)

Written 2026-10-16 for the owner's goal: "what has the maximum search volume and is easy to rank for... doesn't matter what pest... straight for traffic". **Analysis only: nothing was built, scheduled or committed** apart from this file and `next-wave-research.json` (same content as data). It extends `next-50.md` with the same model so the numbers compare, adds a May-August estimate, and re-ranks the 25 queued wave 3-4 pages.

## Summary (plain words)

- **What wins: pages that answer "what is this thing in my house or yard?" with photos, for problems people have all year.** The biggest new opportunities are not single species but sorters: which animal is in my attic, which moth is in my closet, which bug is on my houseplant, which fly is swarming my house, which wasp built this nest. Single-species names (copperhead, carpenter bees, spider mites, june bug, no-see-ums) show a knowledge panel and Wikipedia on Google and are hard for this site.
- **For this winter (build now), the best are indoor problems:** animals in the attic (searches peak in winter), houseplant bugs, small moths in the house, flies in the house, gnats, a US "how to get rid of cockroaches" page, kissing-bug look-alikes, red-and-black bugs (the queued boxelder page, re-aimed), holes in the yard, millipedes. 18 of the 30 are winter earners worth about **397 Google clicks a month in Nov-Mar** together (model middle case).
- **For next summer (build in January-February so they are aged by May), the biggest single opportunity found is wasps:** a wasp/hornet/yellow-jacket **nest identification** page and a **wasp vs hornet vs bee** chart. Wasp searches are 3-6 times higher in summer, page 1 is pest companies and bee blogs, and the site's Canadian ground-wasp page already proves wasps work here (72,018 impressions and 1,372 clicks in 90 days). Also: maggots, copperhead look-alikes (snakes are a new family with no photos on record yet), termites (what they look like, and damage), June bugs, horse flies, carpenter bees.
- **All 30 together** (if live and aged): about **586 clicks a month in Nov-Mar** (range 235-1759) and **1921 a month in May-August** (range 768-5764). At the owner's Mediavine assumptions ($20-30 per 1,000 sessions, 1.3 sessions per click) that is roughly $15-23 a month in winter and $50-75 a month in summer in the middle case. These are **model estimates, not measurements**; most new pages here land below the middle and a few far above it.
- **Top 10 by 12-month value (the build order below puts the winter earners first):**

| Page | Search it targets | Winter clicks/mo | Summer clicks/mo | Build | Confidence |
|---|---|---|---|---|---|
| `/blog/wasp-nests` | wasp nest | 30.7 | 209.3 | Jan-Feb | high |
| `/blog/wasp-vs-hornet` | wasp vs hornet | 21.9 | 138.9 | Jan-Feb | high |
| `/blog/flies-in-house` | why are there so many flies in my house | 30.3 | 112.5 | now | medium |
| `/blog/houseplant-bugs` | bugs on houseplants | 37.2 | 92.8 | now | medium |
| `/blog/moths-in-house` | small moths in house | 34.7 | 72.3 | now | medium |
| `/blog/how-to-get-rid-of-gnats` | how to get rid of gnats | 24.1 | 76.9 | now | high |
| `/blog/copperhead-look-alikes` | baby copperhead | 19.9 | 70.6 | Jan-Feb | medium |
| `/blog/maggots` | maggots | 9.4 | 81.3 | Jan-Feb | high |
| `/blog/stinging-caterpillars` | fuzzy caterpillar | 28.5 | 58.2 | Jan-Feb | medium |
| `/blog/how-to-get-rid-of-earwigs` | how to get rid of earwigs | 16.3 | 72.1 | now | high |

- **The queued waves 3-4 (25 pages):** keep 12 (7 of them make the 30: millipedes, silverfish and the boxelder page move up; boxelder is re-aimed at "red and black bugs"), replace 4 with bigger sorters (types-of-gnats -> how-to-get-rid-of-gnats, clothes-moths -> moths-in-house, booklice -> tiny-white-bugs, camel-crickets -> crickets-in-house), drop 4 (dust mites, /learn/mites, daddy long legs, brown widow), defer 5 (springtails, cluster flies, bat bugs, hobo and yellow sac spiders). Details in "Verdict on the queued waves 3-4".
- **Cheaper than new pages: 9 upgrades of existing pages** with large, measured demand, led by /blog/how-to-get-rid-of-fruit-flies (Ahrefs 151,000 US searches a month; the page drew 1,752 impressions in 90 days) and /blog/chigger-bites (127,000; many US queries already at positions 10-12).
- **What could not be checked:** Google results pages for 22 candidates (marked "not checked"), some only in another engine (marked); Search Console after Oct 12 (API token expired); the model cannot predict outliers in either direction.

## The 30 to build next, in build order

Built now = winter earners (ordered by winter clicks). Built Jan-Feb = summer earners (ordered by when their season starts, so the earliest-season pages go first and every page is 3+ months old by its peak). Clicks are model estimates (middle case, low-high range in the full table).

| Order | Page | Target query | Winter (Nov-Mar) | Summer (May-Aug) | Ahrefs US vol / KD | Trends ratio | Build | Confidence | Status |
|---|---|---|---|---|---|---|---|---|---|
| 1 | `/blog/animals-in-attic` | noises in attic at night | 38.5 | 45.4 | 250 / 0 ("noises in attic") | 0.337 | now | medium | new |
| 2 | `/blog/houseplant-bugs` | bugs on houseplants | 37.2 | 92.8 | 100 / 0 | 0.39 | now | medium | new |
| 3 | `/blog/moths-in-house` | small moths in house | 34.7 | 72.3 | 900 / 0 | 0.4 | now | medium | replace |
| 4 | `/blog/flies-in-house` | why are there so many flies in my house | 30.3 | 112.5 | 3,000 / 0 | 1.104 | now | medium | new |
| 5 | `/blog/how-to-get-rid-of-gnats` | how to get rid of gnats | 24.1 | 76.9 | 130,000 / 4 | 1.211 | now | high | new |
| 6 | `/blog/how-to-get-rid-of-cockroaches` | how to get rid of roaches | 23.7 | 53 | 23,000 / 4 | 0.411 | now | high | new |
| 7 | `/blog/kissing-bug-look-alikes` | bugs that look like kissing bugs | 23 | 50.5 | 900 / 13 | 0.252 | now | medium | taxonomy |
| 8 | `/blog/how-to-get-rid-of-boxelder-bugs` | red and black bugs | 21 | 39.5 | 2,100 / 3 | 0.24 | now | high | queued |
| 9 | `/blog/holes-in-yard` | small holes in yard | 20.9 | 43.6 | 800 / 0 | 0.361 | now | medium | new |
| 10 | `/blog/millipedes` | millipedes in house | 18.6 | 42.5 | 1,300 / 0 | 0.73 | now | high | queued |
| 11 | `/blog/black-spiders` | black spider with white spots | 17.7 | 59.6 | 3,000 / 0 | 0.505 | now | medium | new |
| 12 | `/blog/beetles-in-house` | beetles in house | 17 | 39.8 | 500 / 0 | 0.361 | now | medium | new |
| 13 | `/blog/how-to-get-rid-of-earwigs` | how to get rid of earwigs | 16.3 | 72.1 | 8,400 / 5 | 0.757 | now | high | queued |
| 14 | `/blog/animal-droppings` | animal poop identification | 15.8 | 32.2 | 500 / 3 | 0.246 | now | high | new |
| 15 | `/blog/how-to-get-rid-of-silverfish` | how to get rid of silverfish | 15.3 | 38.9 | 15,000 / 4 | 0.159 | now | high | queued |
| 16 | `/blog/termite-damage` | termite damage | 14.6 | 32.7 | 7,600 / 0 | 0.28 | now | high | new |
| 17 | `/blog/how-to-get-rid-of-drain-flies` | drain flies | 14.5 | 45.3 | 59,000 / 0 | 0.595 | now | high | queued |
| 18 | `/blog/tiny-brown-bugs` | tiny brown bugs in house | 13.9 | 38.1 | 1,700 / 0 | 0.1 | now | medium | new |
| 19 | `/blog/what-do-termites-look-like` | what do termites look like | 11.9 | 50.8 | 37,000 / 3 | 0.456 | Jan-Feb | high | new |
| 20 | `/blog/how-to-get-rid-of-carpenter-bees` | how to get rid of carpenter bees | 11.5 | 37.6 | 14,000 / 0 | 0.754 | Jan-Feb | high | taxonomy |
| 21 | `/blog/copperhead-look-alikes` | baby copperhead | 19.9 | 70.6 | 15,000 / 0 | 0.159 | Jan-Feb | medium | new |
| 22 | `/blog/bird-mites` | bird mites | 10.5 | 56.2 | 13,000 / 5 | 0.127 | Jan-Feb | high | queued |
| 23 | `/blog/june-bugs` | june bug | 11.9 | 56.3 | 98,000 / 12 | 0.661 | Jan-Feb | high | taxonomy |
| 24 | `/blog/wasp-nests` | wasp nest | 30.7 | 209.3 | 56,000 / 5 | 0.917 | Jan-Feb | high | taxonomy |
| 25 | `/blog/wasp-vs-hornet` | wasp vs hornet | 21.9 | 138.9 | 18,000 / 0 | 0.469 | Jan-Feb | high | taxonomy |
| 26 | `/blog/bee-sting-vs-wasp-sting` | bee sting vs wasp sting | 10.3 | 75.5 | 2,000 / 4 | 1.829 | Jan-Feb | low | taxonomy |
| 27 | `/blog/horse-flies` | horse fly | 10.8 | 55.1 | 73,000 / 11 | 0.656 | Jan-Feb | high | taxonomy |
| 28 | `/blog/maggots` | maggots | 9.4 | 81.3 | 95,000 / 17 | 1.055 | Jan-Feb | high | new |
| 29 | `/blog/brown-recluse` | brown recluse | 11.9 | 43.9 | 383,000 / 31 | 2.013 | Jan-Feb | medium | queued |
| 30 | `/blog/stinging-caterpillars` | fuzzy caterpillar | 28.5 | 58.2 | 9,100 / 0 | 0.39 | Jan-Feb | medium | taxonomy |
| | **Total** | | **586** (235-1759) | **1921** (768-5764) | | | | | |

Status: new = no page or plan exists; taxonomy = planned in `taxonomy.src.json` and promoted; replace = new page that replaces a queued wave 3-4 page; queued = a next-50 wave 3-4 page kept.

## Full ranked table (77 candidates)

Ranked by a 12-month value (5 x winter + 4 x summer + 3 shoulder months at the average of the two). "Excluded" marks candidates kept out of the 30 and why. D = demand used by the model (ratio units of "stink bug").

| # | Page | Query | Winter mid (low-high) | Summer mid (low-high) | Trends | Ahrefs family vol | D | Nov-Mar | May-Aug | Format | SERP | SC | Conf. | Build | In 30 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | `wasp-nests` | wasp nest | 30.7 (12.3-92.2) | 209.3 (83.7-628) | 0.917 | 93,750 | 0.917 | 0.32 | 1.82 | roundup 2.5 | 1.2 | 1 | high | Jan-Feb | #24 |
| 2 | `wasp-vs-hornet` | wasp vs hornet | 21.9 (8.8-65.6) | 138.9 (55.6-416.8) | 0.469 | 44,500 | 0.469 | 0.33 | 1.76 | roundup 2.5 | 1.15 | 1 | high | Jan-Feb | #25 |
| 3 | `flies-in-house` | why are there so many flies in my house | 30.3 (12.1-90.8) | 112.5 (45-337.5) | 1.104 | 18,400 | 0.341 | 0.5 | 1.54 | roundup 2.5 | 1.25 | 1 | medium | now | #4 |
| 4 | `houseplant-bugs` | bugs on houseplants | 37.2 (14.9-111.7) | 92.8 (37.1-278.4) | 0.39 | 34,400 | 0.39 | 0.68 | 1.41 | roundup 2.5 | 1.05 | 1 | medium | now | #2 |
| 5 | `moths-in-house` | small moths in house | 34.7 (13.9-104.2) | 72.3 (28.9-216.8) | 0.4 | 16,350 | 0.193 | 0.73 | 1.26 | roundup 2.5 | 1.3 | 1 | medium | now | #3 |
| 6 | `how-to-get-rid-of-gnats` | how to get rid of gnats | 24.1 (9.7-72.4) | 76.9 (30.8-230.8) | 1.211 | 164,000 | 1.211 | 0.55 | 1.45 | control 1 | 1.2 | 1 | high | now | #5 |
| 7 | `copperhead-look-alikes` | baby copperhead | 19.9 (8-59.8) | 70.6 (28.2-211.7) | 0.159 | 18,700 | 0.159 | 0.46 | 1.36 | roundup 2.5 | 1.3 | 1 | medium | Jan-Feb | #21 |
| 8 | `maggots` | maggots | 9.4 (3.8-28.3) | 81.3 (32.5-243.9) | 1.055 | 116,900 | 1.055 | 0.28 | 1.97 | entity 1 | 1 | 1 | high | Jan-Feb | #28 |
| 9 | `stinging-caterpillars` | fuzzy caterpillar | 28.5 (11.4-85.6) | 58.2 (23.3-174.5) | 0.39 | 28,350 | 0.39 | 0.55 | 0.93 | roundup 2.5 | 1 | 1 | medium | Jan-Feb | #30 |
| 10 | `how-to-get-rid-of-earwigs` | how to get rid of earwigs | 16.3 (6.5-48.8) | 72.1 (28.9-216.4) | 0.757 | 41,400 | 0.423 | 0.48 | 1.77 | control 1 | 1.2 | 1.3 | high | now | #13 |
| 11 | `animals-in-attic` | noises in attic at night | 38.5 (15.4-115.4) | 45.4 (18.1-136.1) | 0.337 | 7,450 | 0.12 | 1.02 | 1.01 | roundup 2.5 | 1.3 | 1 | medium | now | #1 |
| 12 | `bee-sting-vs-wasp-sting` | bee sting vs wasp sting | 10.3 (4.1-30.8) | 75.5 (30.2-226.4) | 1.829 | 55,500 | 0.762 | 0.29 | 1.8 | bite 2 | 0.6 | 1 | low | Jan-Feb | #26 |
| 13 | `how-to-get-rid-of-cockroaches` | how to get rid of roaches | 23.7 (9.5-71.2) | 53 (21.2-158.9) | 0.411 | 41,000 | 0.411 | 0.71 | 1.32 | control 1 | 1.2 | 1.3 | high | now | #6 |
| 14 | `black-spiders` | black spider with white spots | 17.7 (7.1-53.1) | 59.6 (23.8-178.8) | 0.505 | 25,800 | 0.273 | 0.51 | 1.42 | roundup 2.5 | 0.8 | 1 | medium | now | #11 |
| 15 | `kissing-bug-look-alikes` | bugs that look like kissing bugs | 23 (9.2-68.9) | 50.5 (20.2-151.4) | 0.252 | 43,420 | 0.252 | 0.69 | 1.25 | roundup 2.5 | 0.8 | 1 | medium | now | #7 |
| 16 | `june-bugs` | june bug | 11.9 (4.7-35.6) | 56.3 (22.5-168.8) | 0.661 | 125,000 | 0.661 | 0.48 | 1.9 | entity 1 | 0.7 | 1.3 | high | Jan-Feb | #23 |
| 17 | `bird-mites` | bird mites | 10.5 (4.2-31.4) | 56.2 (22.5-168.7) | 0.127 | 13,000 | 0.127 | 0.44 | 1.97 | bite 2 | 1 | 1 | high | Jan-Feb | #22 |
| 18 | `holes-in-yard` | small holes in yard | 20.9 (8.4-62.6) | 43.6 (17.4-130.7) | 0.361 | 5,700 | 0.108 | 0.69 | 1.2 | roundup 2.5 | 1.1 | 1 | medium | now | #9 |
| 19 | `horse-flies` | horse fly | 10.8 (4.3-32.5) | 55.1 (22.1-165.4) | 0.656 | 81,100 | 0.656 | 0.44 | 1.86 | entity 1 | 0.7 | 1.3 | high | Jan-Feb | #27 |
| 20 | `what-do-termites-look-like` | what do termites look like | 11.9 (4.8-35.8) | 50.8 (20.3-152.5) | 0.456 | 74,800 | 0.456 | 0.44 | 1.56 | entity 1 | 1.2 | 1 | high | Jan-Feb | #19 |
| 21 | `millipedes` | millipedes in house | 18.6 (7.4-55.8) | 42.5 (17-127.5) | 0.73 | 88,300 | 0.73 | 0.69 | 1.31 | entity 1 | 0.95 | 1 | high | now | #10 |
| 22 | `how-to-get-rid-of-boxelder-bugs` | red and black bugs | 21 (8.4-63.1) | 39.5 (15.8-118.4) | 0.24 | 9,600 | 0.115 | 0.72 | 1.12 | roundup 2.5 | 0.8 | 1.3 | high | now | #8 |
| 23 | `how-to-get-rid-of-drain-flies` | drain flies | 14.5 (5.8-43.4) | 45.3 (18.1-135.8) | 0.595 | 75,000 | 0.595 | 0.54 | 1.41 | control 1 | 0.8 | 1.3 | high | now | #17 |
| 24 | `baby-snakes` | baby snakes | 15.5 (6.2-46.5) | 43.4 (17.4-130.2) | 0.416 | 4,900 | 0.108 | 0.56 | 1.32 | roundup 2.5 | 1 | 1 | low | Jan-Feb | excluded: only one Ahrefs volume and no results page check; build only if copperhead-look-alikes draws impressions |
| 25 | `beetles-in-house` | beetles in house | 17 (6.8-50.9) | 39.8 (15.9-119.5) | 0.361 | 1,750 | 0.06 | 0.69 | 1.35 | roundup 2.5 | 1.2 | 1 | medium | now | #12 |
| 26 | `brown-recluse` | brown recluse | 11.9 (4.7-35.6) | 43.9 (17.5-131.6) | 2.013 | 383,000 | 2.013 | 0.5 | 1.54 | entity 1 | 0.5 | 1 | medium | Jan-Feb | #29 |
| 27 | `how-to-get-rid-of-silverfish` | how to get rid of silverfish | 15.3 (6.1-46) | 38.9 (15.6-116.7) | 0.159 | 15,000 | 0.159 | 0.68 | 1.44 | control 1 | 1.3 | 1.3 | high | now | #15 |
| 28 | `tiny-brown-bugs` | tiny brown bugs in house | 13.9 (5.6-41.8) | 38.1 (15.3-114.4) | 0.1 | 3,400 | 0.044 | 0.64 | 1.45 | roundup 2.5 | 1.25 | 1 | medium | now | #18 |
| 29 | `rat-snakes` | rat snake | 13.2 (5.3-39.6) | 38.1 (15.2-114.2) | 0.883 | 71,000 | 0.883 | 0.6 | 1.44 | entity 1 | 0.7 | 1 | low | now | excluded: species head term, results page not checked; snakes are a new family |
| 30 | `how-to-get-rid-of-carpenter-bees` | how to get rid of carpenter bees | 11.5 (4.6-34.6) | 37.6 (15-112.9) | 0.754 | 72,000 | 0.754 | 0.51 | 1.38 | control 1 | 0.6 | 1.3 | high | Jan-Feb | #20 |
| 31 | `animal-droppings` | animal poop identification | 15.8 (6.3-47.3) | 32.2 (12.9-96.7) | 0.246 | 39,400 | 0.246 | 0.76 | 1.29 | droppingsRoundup 1.4 | 0.9 | 1 | high | now | #14 |
| 32 | `termite-damage` | termite damage | 14.6 (5.9-43.9) | 32.7 (13.1-98.1) | 0.28 | 37,800 | 0.28 | 0.72 | 1.34 | entity 1 | 1.15 | 1 | high | now | #16 |
| 33 | `lawn-grubs` | grubs in lawn | 14.9 (5.9-44.6) | 28.9 (11.6-86.7) | 0.819 | 34,900 | 0.404 | 0.7 | 1.13 | control 1 | 1 | 1 | medium | now | excluded: below the 30 |
| 34 | `copperheads` | copperhead | 12.6 (5-37.7) | 31.1 (12.4-93.3) | 2.281 | 122,000 | 1.261 | 0.67 | 1.38 | entity 1 | 0.5 | 1 | low | now | excluded: head term with knowledge panel and Wikipedia; build the look-alike page first |
| 35 | `yellow-jackets` | yellow jacket | 12.9 (5.2-38.7) | 30.1 (12-90.2) | 1.458 | 75,000 | 0.79 | 0.62 | 1.2 | entity 1 | 0.7 | 1 | low | now | excluded: head term polluted (clothing, gauges); covered by wasp-nests and wasp-vs-hornet |
| 36 | `tiny-white-bugs` | tiny white bugs | 10.8 (4.3-32.4) | 31.6 (12.7-94.9) | 0.127 | 3,400 | 0.05 | 0.58 | 1.42 | roundup 2.5 | 1 | 1 | low | Jan-Feb | excluded: below the 30 |
| 37 | `types-of-gnats` | gnats vs fruit flies | 11.9 (4.7-35.6) | 29.3 (11.7-87.8) | 0.047 | 5,500 | 0.047 | 0.66 | 1.35 | roundup 2.5 | 1 | 1 | high | Jan-Feb | excluded: replaced by how-to-get-rid-of-gnats |
| 38 | `fire-ant-stings` | fire ant bites | 11 (4.4-33) | 28.9 (11.6-86.7) | 0.33 | 19,000 | 0.189 | 0.63 | 1.38 | bite 2 | 0.6 | 1 | low | Jan-Feb | excluded: below the 30 |
| 39 | `no-see-ums` | no see ums | 9.7 (3.9-29.2) | 30 (12-90.1) | 0.285 | 42,000 | 0.285 | 0.56 | 1.44 | entity 1 | 0.75 | 1.3 | high | Jan-Feb | excluded: below the 30 |
| 40 | `black-widow-spiders` | black widow spider | 10.4 (4.2-31.2) | 28.2 (11.3-84.6) | 1.077 | 176,000 | 1.077 | 0.6 | 1.35 | entity 1 | 0.5 | 1 | medium | Jan-Feb | excluded: below the 30 |
| 41 | `cicada-killers` | cicada killer | 3.3 (1.3-9.9) | 35.5 (14.2-106.6) | 0.321 | 47,000 | 0.321 | 0.25 | 2.23 | entity 1 | 0.7 | 1 | medium | Jan-Feb | excluded: below the 30 |
| 42 | `paper-wasps` | paper wasp | 6.5 (2.6-19.6) | 31.2 (12.5-93.5) | 0.422 | 65,000 | 0.422 | 0.43 | 1.71 | entity 1 | 0.7 | 1 | medium | Jan-Feb | excluded: below the 30 |
| 43 | `huntsman-spiders` | huntsman spider | 12.7 (5.1-38.1) | 22.8 (9.1-68.3) | 0.583 | 160,000 | 0.583 | 0.83 | 1.24 | entity 1 | 0.6 | 1 | low | now | excluded: below the 30 |
| 44 | `scorpion-stings` | scorpion sting | 11.5 (4.6-34.5) | 23.9 (9.6-71.8) | 0.146 | 8,800 | 0.146 | 0.75 | 1.3 | bite 2 | 0.6 | 1 | low | Jan-Feb | excluded: below the 30 |
| 45 | `spotted-lanternfly` | spotted lanternfly | 4.6 (1.8-13.8) | 31.6 (12.6-94.8) | 0.581 | 99,000 | 0.581 | 0.3 | 1.72 | entity 1 | 0.6 | 1 | low | Jan-Feb | excluded: below the 30 |
| 46 | `springtails` | springtails | 9.1 (3.7-27.4) | 26.4 (10.5-79.1) | 0.431 | 62,000 | 0.431 | 0.64 | 1.54 | entity 1 | 0.65 | 1 | high | Jan-Feb | excluded: below the 30 |
| 47 | `thrips` | thrips | 9.9 (4-29.8) | 24.9 (10-74.8) | 0.39 | 55,000 | 0.39 | 0.68 | 1.42 | entity 1 | 0.7 | 1 | medium | Jan-Feb | excluded: below the 30 |
| 48 | `how-to-get-rid-of-rats` | how to get rid of rats | 13.8 (5.5-41.5) | 20.3 (8.1-60.9) | 0.202 | 12,000 | 0.202 | 0.92 | 1.13 | control 1 | 1 | 1 | medium | now | excluded: below the 30 |
| 49 | `bugs-in-hair` | bugs in hair not lice | 12.2 (4.9-36.7) | 22.1 (8.8-66.3) | 0.151 | 1,800 | 0.039 | 0.82 | 1.23 | roundup 2.5 | 0.9 | 1 | low | now | excluded: owner's call (lice) |
| 50 | `spider-mites` | spider mites | 9.8 (3.9-29.5) | 24.9 (10-74.7) | 0.536 | 36,000 | 0.536 | 0.67 | 1.41 | entity 1 | 0.6 | 1 | medium | Jan-Feb | excluded: below the 30 |
| 51 | `roly-polies` | roly poly | 13.1 (5.2-39.3) | 21.2 (8.5-63.5) | 0.423 | 41,700 | 0.423 | 0.86 | 1.16 | entity 1 | 0.7 | 1 | medium | now | excluded: below the 30 |
| 52 | `how-to-get-rid-of-wasps` | how to get rid of wasps | 4.4 (1.8-13.3) | 30.2 (12.1-90.5) | 0.096 | 7,400 | 0.096 | 0.33 | 1.87 | control 1 | 1 | 1.3 | high | Jan-Feb | excluded: below the 30 |
| 53 | `scorpions` | scorpions in house | 11.2 (4.5-33.7) | 18.7 (7.5-56.2) | 0.185 | 10,600 | 0.106 | 0.86 | 1.2 | control 1 | 1.2 | 1 | medium | Jan-Feb | excluded: below the 30 |
| 54 | `how-to-get-rid-of-spiders` | how to get rid of spiders | 5.1 (2.1-15.4) | 24.7 (9.9-74.1) | 0.156 | 8,500 | 0.087 | 0.4 | 1.61 | control 1 | 1 | 1.3 | medium | Jan-Feb | excluded: below the 30 |
| 55 | `lice-eggs` | what do lice eggs look like | 11.4 (4.6-34.2) | 16.3 (6.5-49) | 0.555 | 54,200 | 0.555 | 0.92 | 1.09 | entity 1 | 0.5 | 1 | low | Jan-Feb | excluded: owner's call (lice) |
| 56 | `rat-droppings` | rat droppings | 10.3 (4.1-31) | 17.4 (7-52.3) | 0.114 | 7,600 | 0.114 | 0.88 | 1.24 | droppings 0.8 | 1 | 1.3 | high | Jan-Feb | excluded: below the 30 |
| 57 | `black-flies` | black flies | 7.1 (2.8-21.2) | 20.3 (8.1-61) | 0.472 | 6,800 | 0.135 | 0.63 | 1.51 | entity 1 | 0.7 | 1.3 | medium | Jan-Feb | excluded: below the 30 |
| 58 | `hammerhead-worms` | hammerhead worm | 6.2 (2.5-18.7) | 19.8 (7.9-59.5) | 0.156 | 28,000 | 0.156 | 0.59 | 1.57 | entity 1 | 0.8 | 1 | medium | Jan-Feb | excluded: below the 30 |
| 59 | `how-to-get-rid-of-moles` | how to get rid of moles | 8.1 (3.2-24.3) | 16.4 (6.5-49.1) | 0.126 | 11,400 | 0.126 | 0.76 | 1.28 | control 1 | 0.9 | 1 | medium | Jan-Feb | excluded: below the 30 |
| 60 | `dust-mites` | dust mites | 9.9 (3.9-29.6) | 14 (5.6-42) | 0.778 | 90,000 | 0.778 | 0.93 | 1.1 | myth 0.6 | 0.6 | 1 | low | Jan-Feb | excluded: below the 30 |
| 61 | `japanese-beetles` | japanese beetles | 4.2 (1.7-12.6) | 20.2 (8.1-60.5) | 0.315 | 9,900 | 0.133 | 0.49 | 1.97 | entity 1 | 0.7 | 1 | low | Jan-Feb | excluded: below the 30 |
| 62 | `joro-spiders` | joro spider | 6.4 (2.6-19.3) | 15.6 (6.2-46.7) | 0.268 | 48,000 | 0.268 | 0.53 | 1.07 | entity 1 | 0.7 | 1 | medium | Jan-Feb | excluded: below the 30 |
| 63 | `crickets-in-house` | crickets in house | 6.2 (2.5-18.7) | 14.2 (5.7-42.7) | 0.214 | 6,250 | 0.088 | 0.63 | 1.2 | control 1 | 1 | 1 | medium | Jan-Feb | excluded: below the 30 |
| 64 | `daddy-long-legs` | daddy long legs | 6.2 (2.5-18.7) | 13.8 (5.5-41.5) | 0.766 | 76,000 | 0.766 | 0.71 | 1.31 | myth 0.6 | 0.5 | 1 | low | Jan-Feb | excluded: below the 30 |
| 65 | `mouse-nest` | what does a mouse nest look like | 7.6 (3.1-22.9) | 12 (4.8-36.1) | 0.093 | 4,000 | 0.046 | 0.85 | 1.12 | entity 1 | 1.25 | 1 | medium | Jan-Feb | excluded: below the 30 |
| 66 | `skunk-smell-in-house` | skunk smell in house | 7.5 (3-22.4) | 12.1 (4.8-36.4) | 0.074 | 4,150 | 0.042 | 0.84 | 1.14 | control 1 | 1.3 | 1 | medium | Jan-Feb | excluded: below the 30 |
| 67 | `how-to-get-rid-of-cluster-flies` | cluster flies | 5.8 (2.3-17.4) | 13.5 (5.4-40.5) | 0.079 | 8,600 | 0.079 | 0.68 | 1.32 | control 1 | 0.7 | 1.3 | high | Jan-Feb | excluded: below the 30 |
| 68 | `hobo-spiders` | hobo spider | 4.1 (1.6-12.3) | 15.5 (6.2-46.5) | 0.207 | 44,000 | 0.207 | 0.45 | 1.42 | entity 1 | 0.6 | 1 | low | Jan-Feb | excluded: below the 30 |
| 69 | `yellow-sac-spiders` | yellow sac spider | 5 (2-15.1) | 13.9 (5.5-41.6) | 0.12 | 19,000 | 0.12 | 0.58 | 1.33 | entity 1 | 0.75 | 1 | medium | Jan-Feb | excluded: below the 30 |
| 70 | `booklice` | booklice | 4.7 (1.9-14.1) | 14.3 (5.7-42.9) | 0.083 | 30,000 | 0.083 | 0.61 | 1.55 | entity 1 | 0.8 | 1 | high | Jan-Feb | excluded: replaced by tiny-white-bugs |
| 71 | `bat-bugs` | bat bugs | 5.6 (2.3-16.9) | 12.5 (5-37.6) | 0.068 | 7,600 | 0.068 | 0.72 | 1.33 | entity 1 | 0.9 | 1 | high | Jan-Feb | excluded: below the 30 |
| 72 | `brown-widow-spiders` | brown widow spider | 4.7 (1.9-14.2) | 13.5 (5.4-40.4) | 0.445 | 10,000 | 0.159 | 0.59 | 1.4 | entity 1 | 0.6 | 1 | low | Jan-Feb | excluded: below the 30 |
| 73 | `cockroach-droppings` | cockroach poop | 5.2 (2.1-15.7) | 12.6 (5-37.8) | 0.054 | 19,000 | 0.054 | 0.68 | 1.35 | droppings 0.8 | 1.25 | 1 | high | Jan-Feb | excluded: below the 30 |
| 74 | `snakes-in-florida` | snakes in florida | 5.4 (2.1-16.1) | 9.2 (3.7-27.6) | 0.173 | 3,800 | 0.061 | 0.83 | 1.19 | location 1.2 | 0.65 | 1 | low | Jan-Feb | excluded: authority results page; no state series |
| 75 | `camel-crickets` | camel crickets | 4.3 (1.7-13) | 9 (3.6-27.1) | 0.109 | 2,700 | 0.041 | 0.71 | 1.23 | entity 1 | 0.9 | 1 | medium | Jan-Feb | excluded: replaced by crickets-in-house |
| 76 | `clothes-moths` | clothes moths | 4.3 (1.7-12.9) | 9 (3.6-27.1) | 0.151 | 4,700 | 0.064 | 0.73 | 1.28 | control 1 | 0.7 | 1 | low | Jan-Feb | excluded: replaced by moths-in-house |
| 77 | `mites` | mite bites | 4 (1.6-11.9) | 8.9 (3.6-26.7) | 0.176 | 15,000 | 0.176 | 0.71 | 1.32 | hubBite 0.8 | 0.5 | 1 | medium | Jan-Feb | excluded: medical results page; /learn/bug-bites covers mite bites |

## Verdict on the queued waves 3-4 (25 pages)

| Page | next-50 rank / winter clicks | Now: winter / summer | Verdict | Why |
|---|---|---|---|---|
| `how-to-get-rid-of-earwigs` | #19 / 13 | 16.3 / 72.1 | **KEEP, build now** | how-to page 1 is weak (checked today); summer-heavy |
| `bird-mites` | #26 / 10 | 10.5 / 56.2 | **KEEP, Jan-Feb** | spring-peaked |
| `millipedes` | #12 / 15 | 18.6 / 42.5 | **KEEP, build now (moved up)** | weak page 1 for "millipedes in house"; "centipede vs millipede" (Ahrefs 10,000, KD 0) folded in |
| `how-to-get-rid-of-boxelder-bugs` | #38 / 8 | 21 / 39.5 | **KEEP, re-aimed at "red and black bugs", build now** | Ahrefs makes "boxelder bug" the parent topic of "red and black bugs"; the Canadian edition already ranks |
| `how-to-get-rid-of-drain-flies` | #20 / 13 | 14.5 / 45.3 | **KEEP, build now** | add drain fly larvae photos for "small black worms in bathroom" |
| `brown-recluse` | #22 / 12 | 11.9 / 43.9 | **KEEP, Jan-Feb** | authority head term; summer 1.54 |
| `how-to-get-rid-of-silverfish` | #23 / 12 | 15.3 / 38.9 | **KEEP, build now (moved up)** | how-to page 1 is very weak (Reddit, Scotts, Quora, WebMD, Facebook, Raid) |
| `types-of-gnats` | #21 / 12 | 11.9 / 29.3 | **REPLACE with how-to-get-rid-of-gnats** | same sorter, about 50x the demand (Ahrefs 130,000 vs 2,700) |
| `no-see-ums` | #33 / 9 | 9.7 / 30 | **KEEP, Jan-Feb (next in line)** | knowledge panel and Wikipedia; summer page |
| `black-widow-spiders` | #27 / 10 | 10.4 / 28.2 | **KEEP, later (next in line)** | authority head term |
| `springtails` | #31 / 10 | 9.1 / 26.4 | **DEFER** | knowledge panel, Wikipedia, extension pages |
| `rat-droppings` | #28 / 10 | 10.3 / 17.4 | **KEEP, later** | winter-flat but small (Ahrefs 7,600) |
| `dust-mites` | #24 / 12 | 9.9 / 14 | **DROP for now** | KD 71, Wikipedia and health publishers, myth format |
| `daddy-long-legs` | #34 / 9 | 6.2 / 13.8 | **DROP** | myth answered on the results page; authority and dictionary results |
| `mouse-nest` | #35 / 9 | 7.6 / 12 | **KEEP, later** | pest-company-only page 1 but small (Ahrefs 3,400 + 600) |
| `how-to-get-rid-of-cluster-flies` | #45 / 6 | 5.8 / 13.5 | **DEFER** | small; flies-in-house carries a cluster fly section |
| `hobo-spiders` | #47 / 5 | 4.1 / 15.5 | **DEFER** | authority head term |
| `yellow-sac-spiders` | #48 / 5 | 5 / 13.9 | **DEFER** | small |
| `booklice` | #50 / 4 | 4.7 / 14.3 | **REPLACE with tiny-white-bugs** | knowledge panel and Wikipedia on the head term |
| `bat-bugs` | #46 / 6 | 5.6 / 12.5 | **DEFER** | small |
| `brown-widow-spiders` | #32 / 9 | 4.7 / 13.5 | **DROP** | Trends counts "brown recluse vs black widow" inside "brown widow"; Ahrefs 10,000 with an authority page 1 |
| `cockroach-droppings` | #49 / 4 | 5.2 / 12.6 | **KEEP, later** | pest-company-only page 1 and Ahrefs 19,000, but Trends puts it small |
| `camel-crickets` | #41 / 7 | 4.3 / 9 | **REPLACE with crickets-in-house (itself later)** | authority head term; small |
| `clothes-moths` | #42 / 7 | 4.3 / 9 | **REPLACE with moths-in-house** | authority page 1; the sorter has a weak page 1 and more demand |
| `mites` | #40 / 8 | 4 / 8.9 | **DROP** | medical results page throughout; /learn/bug-bites covers it |

Why the numbers moved: Search Console and the formats are unchanged, but (1) Google results pages were read today for 9 of these pages that next-50 had to leave unchecked (silverfish, earwigs, millipedes, cockroach poop, mouse nest and drain flies were weaker than assumed; springtails, no-see-ums, booklice, mite bites stronger); (2) Ahrefs US volumes were added and where Trends and Ahrefs disagree by more than 3x the midpoint is used (brown widow, earwigs, the boxelder/red-and-black page).

## Upgrades instead of new pages

| Existing page | Query | Evidence | Action |
|---|---|---|---|
| `/blog/how-to-get-rid-of-fruit-flies` | how to get rid of fruit flies | Ahrefs US 151,000 (KD 8); Trends 0.838 of "stink bug" (as large as "how to get rid of gnats"); the page drew only 1,752 impressions in 90 days at position 8.4 (27 clicks) | Photo upgrade and a title aimed at the query (PHOTO_UPGRADE_BRIEF.md; TSX page: affiliate integrity loop); link the new gnats page. |
| `/blog/chigger-bites` | chigger bites / what do chiggers look like | Ahrefs US: chigger bites 127,000 (KD 1), chiggers 174,000, what do chiggers look like 7,400; the page has 40,211 impressions in 90 days at 8.3 and many US queries at positions 10-12 ("how long do chigger bites itch" 539, "how big are chiggers" 319, "chigger bites pics" 288, "what do chiggers look like" 107) | Photo upgrade (chigger beside a pinhead is on record), "how long" and "what do chiggers look like" sections. |
| `/blog/red-ticks-and-clover-mites` | tiny red bugs | Ahrefs US 13,000 (KD 0); Trends 0.171, peaking April-May; the page has 29,492 impressions in 90 days at 6.5 | Retitle toward "tiny red bugs" with a short sorter (clover mites, chiggers, red velvet mites, spider mites, bird mites); photos on record. |
| `/blog/mosquito-hawk-explained` | crane fly | Ahrefs US 40,000 (KD 6); Trends 0.231; the page has 10,575 impressions in 90 days at 8.4 but 20 clicks | Title aimed at "crane fly" plus a photo-led identification section. |
| `/blog/what-eats-ticks-and-mosquitoes` | do bats eat ticks / do possums eat mosquitoes | "do bats eat ticks" 757 US impressions in 90 days at 9.1 and "do possums eat mosquitoes" about 350 at 9.5, no section on the page | Add sourced sections for bats and opossums (quick-fact queries: expect low click-through). |
| `/blog/tiny-black-bugs` | black bugs in house | Trends 0.135; Ahrefs 1,300 | Add the variant to the title/meta and an H2. |
| `/blog/mice-removal` | dead mouse smell / mice in attic | the page already has both sections; "dead mouse smell" Ahrefs 1,100 (Nov-Mar 1.02), "mice in attic" 1,900 (Nov-Mar 1.09) | Surface both in H2 wording and the meta description; link animals-in-attic. |
| `/blog/house-centipedes` | centipede bite | Ahrefs US 12,000; page 1 is medical throughout (Healthline, poison.org, WebMD, MedlinePlus, NIH) | A short, sourced bite section rather than a new page. |
| `/blog/flying-ants-vs-termites` | termite vs ant / flying termites | Trends "termite vs ant" 0.061, "flying ants vs termites" 0.027 (Ahrefs 5,500) | Link the two new termite pages; no new comparison page. |

## Considered and not recommended (now)

- **Head terms for single species**: copperhead (Ahrefs 122,000), garter snake (100,000), rat snake (71,000), paper wasp (65,000), carpenter bees (58,000), june bug (98,000), spotted lanternfly (99,000, KD 43), huntsman spider (160,000), silverfish (253,000, KD 41), brown recluse (383,000), black widow spider (176,000), dust mites (90,000, KD 71). Every one checked on Google shows a knowledge panel and/or Wikipedia with universities and agencies; the model keeps the ones with the best long tail (june-bugs, horse-flies, carpenter bees as regional pairs) and leaves the rest.
- **Lice** (Trends "lice" 8.94, "lice eggs" 0.41, flat all year; Ahrefs "lice" 227,000, KD 55): page 1 for "what do lice eggs look like" is Cleveland Clinic, CDC, Harvard, Healthline. A look-alike page ("bugs in hair not lice") is the only winnable angle and it is small. Owner's call: children's health, outside the pest-company identity.
- **Snakes by state**: "snakes in florida" page 1 is the Florida Museum, FWC, UF/IFAS and a Wikipedia list (much stronger than the spiders-in-Florida page 1); Trends counts "florida snakes" inside the phrase. No series; revisit with the spiders pilot verdict (Jan 15-31).
- **"Worms in the house" family** ("tiny worms in house", "small black worms in bathroom"): very weak page 1s, but tiny demand (Trends 0.003-0.03; Ahrefs 50-1,500). Folded into drain flies (larvae) and maggots.
- **Skunk smell in house** (page 1 very weak) is small once the cannabis meaning of "skunk" is removed (Trends 0.062, Ahrefs 3,700); **bat in house** is polluted in Trends by "bat house" (Ahrefs 1,100); **dead mouse smell** is already a section of /blog/mice-removal.
- **Medical bite/sting pages with medical page 1s**: centipede bite, mite bites, fire ant bites, scorpion sting (bite format helps, but Cleveland Clinic, Healthline, poison.org and NIH hold page 1). fire-ant-stings and scorpion-stings stay in the taxonomy for later.
- **Possum vs opossum** (Trends 0.24, flat): curiosity, not a pest problem. **Cicada**: harmless and news-driven.

## Method

- **Model (unchanged from next-50):** clicks per month in Nov-Mar = 10 x sqrt(D / 0.0895) x Nov-Mar factor x format x SERP x Search Console. **New: May-Aug** = 12 x sqrt(D / 0.0895) x May-Aug factor x the same factors (12 = the site's median new page by month 3 in season, no launch ramp because the page is aged by May). Range x0.4 to x3. Formats: roundup 2.5, bite 2.0, one thing / comparison / how-to 1.0, location 1.2, droppings 0.8, myth 0.6, bite hub 0.8, and one new class, **droppings sorter 1.4** (several animals' droppings on one page; between droppings 0.8 and roundup 2.5; not yet measured on this site).
- **Demand D:** Google Trends US, weekly, 2024-10-01 to 2026-10-10, every request anchored on "stink bug" with up to 4 terms, the same script and window as next-50. 236 terms were measured today; 7 repeats of next-50 terms agreed within 2% (tiny black bugs 0.241 vs 0.239, house centipede 0.487 vs 0.488, carpet beetle 0.758 vs 0.757, rat vs mouse 0.154 vs 0.152, bugs in bathroom 0.102 vs 0.102, types of gnats 0.010 vs 0.011, what do lice look like 0.135 vs 0.13). One request was discarded because Groundhog Day flattened its anchor; its terms were re-measured.
- **New rule: Trends vs Ahrefs.** Trends matches the words of a phrase in any order, so short phrases swallow other searches ("flies in house" contains every "house flies" search; "black spider" contains "black widow spider"; "beetles in house" contains "carpet beetles in house"). Ahrefs measures the exact phrase. Each candidate's Ahrefs family (target + main variants) was converted to ratio units at next-50's calibration (175,000 Ahrefs searches per unit). Where the two agree within 3x (the calibration's own spread), D = Trends, as in next-50. Where they disagree by more than 3x, D = their geometric mean, and the page is marked. This lowered flies-in-house, moths-in-house, animals-in-attic, holes-in-yard, beetles-in-house, tiny-brown-bugs, black-spiders and the boxelder page; it raised none.
- **Half and quarter weights** (as next-50's polluted-term rule): a head term with mixed intent counts at half (wasp nest: removal and spray searches; maggots: the band's fans; yellow jacket: clothing); per-animal or per-species searches that a sorter will only partly win count at half (droppings, kissing-bug look-alikes) or a quarter (houseplant-bugs: spider mites, thrips, mealybugs).
- **SERP factor** from Google page 1 read today (gl=us, hl=en, pws=0) in the built-in browser: 60 results pages, no unusual-traffic check this time. 1.25-1.3 forums, newsletters, local pest companies; 1.15-1.2 pest brands and magazines without authority sites; 1.0 mixed; 0.8 authority with weak results; 0.6-0.65 authority throughout; 0.5 knowledge panel + Wikipedia + agencies throughout. Unchecked species head terms 0.7 (next-50 rule). A few pages were read only with the WebSearch tool (another engine; marked).
- **Search Console factor** 1.3 where a Canadian edition has 1,000+ impressions in 90 days at position 10 or better (cockroaches 7,592 at 9.8; wasps 13,973 at 9.1; carpenter bees 1,095 at 8.8; horse/deer flies 22,045 at 6.7; black flies 41,057 at 6.9; june bugs 3,999 at 6.4; spiders 1,167 at 8.8; boxelder 6,392 at 9.4; earwigs, drain flies, silverfish, cluster flies, no-see-ums as in next-50); otherwise 1.0. Search Console data: the 90-day pull to 2026-10-12 (the API token has since expired). Outside mosquitoes and ticks the site has almost no presence in these families, so most candidates get 1.0.
- **Confidence:** one point each for a Google results-page read, Trends/Ahrefs agreement and an existing Canadian edition that ranks; minus one for an authority page 1 and for topics outside the site's current families; high = 2+, medium = 1, low = 0 or less. Three pages were set to medium by hand (houseplant-bugs, kissing-bug-look-alikes, stinging-caterpillars; reasons in their entries).
- **Build timing:** now if the Nov-Mar factor is 0.45 or more and the page earns 12+ clicks a month in winter; otherwise Jan-Feb. Overridden for copperhead-look-alikes and stinging-caterpillars (reasons in their entries). Note: ad rates are highest in Q4, which favours the "now" pages more than these click numbers show.
- **Ahrefs:** Keywords Explorer, US, 204 keywords pulled today, 6,732 API units (of the 20,000 allowed). Ahrefs volume is a scale, not truth: next-50 measured that it overstates what this site receives by 20-40x, and KD measures links to the top pages, not site strength. Shown next to the Trends ratio for every candidate.
- **Autocomplete** (hl=en, gl=us) for ~90 seeds supplied the variants. **Photos**: `data/god-build/photos.json` (289 records) was checked per family: snakes, termites, lice, house flies/maggots and wildlife droppings have none on record, so those pages need a photo scout first.

## Page by page

### 1. `/blog/animals-in-attic` — "noises in attic at night"
- **Estimate:** 38.5 clicks/month Nov-Mar (15.4-115.4); 45.4 May-Aug (18.1-136.1); model estimates, not measurements. Factors: D 0.12 (Trends 0.337 and Ahrefs 0.043 disagree 7.9x: geometric mean used), Nov-Mar 1.02, May-Aug 1.01 (from squirrels in attic, mice in attic, bats in attic), format photo ID roundup / sorter (several candidates on one page) 2.5, SERP 1.3, Search Console 1.
- **Confidence:** medium (results page read on Google; Trends and Ahrefs disagree (midpoint used)). **Build:** now (winter earner (Nov-Mar factor >= 0.45 and >= 12 clicks a month in winter)). **Status:** new.
- **Variants:** animal in attic; squirrels in attic; mice in attic; rats in attic; raccoon in attic; bats in attic; scratching in walls. **Audience:** US and Canadian readers.
- **Demand evidence:** Trends noises in attic + animal in attic + squirrels in attic + mice in attic + rats in attic + raccoons in attic + bats in attic + scratching in walls + noises in walls = 0.337. Ahrefs US: noises in attic 250; animal in attic 1,100; squirrels in attic 1,800; mice in attic 1,900; raccoon in attic 900; bats in attic 1,500 (family 7,450 = 0.043 ratio units). Search Console: Nothing beyond product queries.
- **Page 1:** Google, Oct 16 ("noises in attic at night"); features: AI Overview, People also ask, image pack, videos, What people are saying. wildlifecompanytn.com, Reddit, Critter Control, Breda Pest, Facebook community group. Read: one national brand, two local firms and two forums: very weak.
- **Why it should earn the click:** Scratching at night (mice, rats), heavy thumps (raccoons), daytime scurrying (squirrels), dusk fluttering (bats): a sound-and-sign sorter answers "what is in my attic".
- **Overlap:** `/blog/mice-removal` ("Mice in the attic" section) -> link; this page sorts which animal it is by sound and time of night; `/blog/raccoon-deterrent` (raccoon deterrents) -> link.
- **Decision:** Build now: winter-peaked (Nov-Mar 1.02: squirrels 1.22, mice 1.09, rats 1.05).
- **Photos:** in hand: Virginia opossum, house mouse, roof rat, Norway rat (rodent records); need squirrel, raccoon, bat (PD).

### 2. `/blog/houseplant-bugs` — "bugs on houseplants"
- **Estimate:** 37.2 clicks/month Nov-Mar (14.9-111.7); 92.8 May-Aug (37.1-278.4); model estimates, not measurements. Factors: D 0.39 (Trends 0.390 and Ahrefs 0.197 agree within 3x: Trends used), Nov-Mar 0.68, May-Aug 1.41 (from white bugs on plants, spider mites, thrips, mealybugs), format photo ID roundup / sorter (several candidates on one page) 2.5, SERP 1.05, Search Console 1.
- **Confidence:** medium (results page read on Google; Trends and Ahrefs agree; a quarter of the spider mite, thrips and mealybug searches is assumed winnable; without that assumption the page is about a third as large). **Build:** now (winter earner (Nov-Mar factor >= 0.45 and >= 12 clicks a month in winter)). **Status:** new.
- **Variants:** houseplant pests; white bugs on plants; tiny bugs in houseplant soil; spider mites on houseplants; mealybugs; thrips on houseplants. **Audience:** US and Canadian readers.
- **Demand evidence:** Trends houseplant pests + white bugs on plants + bugs in plant soil + spider mites x0.25 + thrips x0.25 + mealybugs x0.25 = 0.39. Ahrefs US: houseplant pests 500; bugs on houseplants 100; white bugs on plants 3,300; spider mites x0.25 36,000; thrips x0.25 55,000; mealybugs x0.25 31,000 (family 34,400 = 0.197 ratio units); target KD 0, traffic potential 200, parent topic "tiny bugs in houseplant soil". Search Console: Nothing (the garden guides launched Oct 8 have tens of impressions).
- **Page 1:** Google, Oct 16 ("bugs on houseplants"); features: AI Overview, People also ask. Homestead Brooklyn (plant shop), Colorado State, Reddit r/plantclinic, Orange Lake Nursery, This Old House video, Iowa State, Reddit r/houseplants, Terminix, UMN extension. Read: plant shops, forums and extension pages.
- **Why it should earn the click:** Sorter: spider mites (webbing), mealybugs (white fluff), scale, thrips, aphids, whiteflies, fungus gnats, springtails.
- **Overlap:** `/blog/how-to-get-rid-of-fungus-gnats` (fungus gnats) -> link; `/blog/aphid-control-guide` (aphids) -> link; `/blog/whitefly-identification-control` (whiteflies) -> link.
- **Decision:** Build now: houseplant pests are an indoor, winter problem (Nov-Mar ~0.7). Species searches counted at a quarter: the sorter will not win "spider mites" (knowledge panel), only the "which bug is on my plant" searches.
- **Photos:** in hand: spider mite webbing, twospotted spider mite, aphid/whitefly records; need mealybug, scale, thrips.

### 3. `/blog/moths-in-house` — "small moths in house"
- **Estimate:** 34.7 clicks/month Nov-Mar (13.9-104.2); 72.3 May-Aug (28.9-216.8); model estimates, not measurements. Factors: D 0.193 (Trends 0.400 and Ahrefs 0.093 disagree 4.3x: geometric mean used), Nov-Mar 0.73, May-Aug 1.26 (from moths in house, clothes moths, how to get rid of moths, moth larvae), format photo ID roundup / sorter (several candidates on one page) 2.5, SERP 1.3, Search Console 1.
- **Confidence:** medium (results page read on Google; Trends and Ahrefs disagree (midpoint used)). **Build:** now (winter earner (Nov-Mar factor >= 0.45 and >= 12 clicks a month in winter)). **Status:** replace.
- **Variants:** moths in house; how to get rid of moths; clothes moths; moth larvae; pantry moths vs clothes moths. **Audience:** US and Canadian readers.
- **Demand evidence:** Trends moths in house + clothes moths + how to get rid of moths x0.5 + moth larvae x0.5 = 0.4. Ahrefs US: moths in house 3,800; small moths in house 900; clothes moths 4,700; how to get rid of moths x0.5 5,700; moth larvae x0.5 8,200 (family 16,350 = 0.093 ratio units); target KD 0, traffic potential 2,700, parent topic "moths in house". Search Console: Only product queries (pantry moth traps) on the Canadian trap page.
- **Page 1:** Google, Oct 16 ("small moths in house"); features: AI Overview, People also ask, image pack. Reddit, Scotts, Facebook, Pest Solutions (UK), moth-prevention.com, Terro, Quora, YouTube. Read: forums and product brands: weak.
- **Why it should earn the click:** Two moths, two different fixes; most people do not know which they have.
- **Overlap:** `/blog/pantry-pests` (Indian meal moths) -> link; pantry moths stay there; `/blog/clothes-moths` (queued wave 4 page) -> REPLACE: clothes moths become this page's main section (Ahrefs: moths in house 3,800 + small moths 900 vs clothes moths 4,700 with an authority page 1); `/blog/pantry-moth-traps-canada` (product page) -> link (Canadian product page; no Amazon links on the new page).
- **Decision:** Build now (Nov-Mar 0.70): a "which moth is this" sorter (pantry vs clothes vs drain fly vs house moths). Replaces the queued clothes-moths page.
- **Photos:** in hand: webbing and casemaking clothes moths, Indian meal moth adult/larva/webbing, drain fly.

### 4. `/blog/flies-in-house` — "why are there so many flies in my house"
- **Estimate:** 30.3 clicks/month Nov-Mar (12.1-90.8); 112.5 May-Aug (45-337.5); model estimates, not measurements. Factors: D 0.341 (Trends 1.104 and Ahrefs 0.105 disagree 10.5x: geometric mean used), Nov-Mar 0.5, May-Aug 1.54 (from flies in house, where do flies come from, how to get rid of house flies), format photo ID roundup / sorter (several candidates on one page) 2.5, SERP 1.25, Search Console 1.
- **Confidence:** medium (results page read on Google; Trends and Ahrefs disagree (midpoint used)). **Build:** now (winter earner (Nov-Mar factor >= 0.45 and >= 12 clicks a month in winter)). **Status:** new.
- **Variants:** flies in house; flies in house all of a sudden; how to get rid of house flies; where do flies come from; house flies. **Audience:** US and Canadian readers.
- **Demand evidence:** Trends flies in house + where do flies come from + how to get rid of house flies x0.5 = 1.104. Ahrefs US: flies in house 4,900; why are there so many flies in my house 3,000; where do flies come from 1,600; how to get rid of house flies 5,700; house flies 3,200 (family 18,400 = 0.105 ratio units); target KD 0, traffic potential 1,800, parent topic "why are there so many flies in my house". Search Console: Nothing: the site has no fly page beyond fruit flies, drain flies and cluster flies.
- **Page 1:** Google, Oct 16 ("why are there so many flies in my house"); features: AI Overview, People also ask, What people are saying. Reddit, JC Ehrlich, Quora, Facebook group, Orkin, HuffPost UK, EarthKind, Good Housekeeping (also checked "how to get rid of house flies": Reddit, Catchmaster, Purdue, Good Housekeeping, Facebook, Healthline, Quora, Orkin Canada). Read: forums, magazines and pest brands: weak.
- **Why it should earn the click:** A sudden swarm of big flies usually means a hidden source (dead mouse in a wall, garbage, pet waste) or cluster flies; a photo sorter by fly and by cause earns the click.
- **Overlap:** `/blog/cluster-flies-in-house-canada` (cluster flies (Canadian)) -> link; this page covers cluster flies in one section; `/blog/bugs-in-house-in-winter` ("slow flies at my windows in winter" section) -> link both ways; `/blog/how-to-get-rid-of-gnats` (small flies (new page above)) -> this page owns big flies (house, blow, flesh, cluster flies); link gnats for small ones.
- **Decision:** Build now (Jan-Feb at the latest): a "which fly and where is it breeding" sorter. Trends counts "house flies" searches inside "flies in house", so its 0.91 was cut to the Trends/Ahrefs midpoint.
- **Photos:** in hand: cluster fly only; need house fly, blow fly (green bottle), flesh fly and maggots (PD/CC0).

### 5. `/blog/how-to-get-rid-of-gnats` — "how to get rid of gnats"
- **Estimate:** 24.1 clicks/month Nov-Mar (9.7-72.4); 76.9 May-Aug (30.8-230.8); model estimates, not measurements. Factors: D 1.211 (Trends 1.211 and Ahrefs 0.937 agree within 3x: Trends used), Nov-Mar 0.55, May-Aug 1.45 (from how to get rid of gnats, tiny flying bugs, gnats in house), format identification + how-to (control) 1, SERP 1.2, Search Console 1.
- **Confidence:** high (results page read on Google; Trends and Ahrefs agree). **Build:** now (winter earner (Nov-Mar factor >= 0.45 and >= 12 clicks a month in winter)). **Status:** new.
- **Variants:** gnats in house; how to kill gnats; tiny flying bugs in house; gnats vs fruit flies; how to get rid of gnats in plants; how to get rid of gnats in kitchen. **Audience:** US and Canadian readers.
- **Demand evidence:** Trends how to get rid of gnats + tiny flying bugs + types of gnats + gnats in house x0.5 = 1.211. Ahrefs US: how to get rid of gnats 130,000; gnats in house 17,000; how to kill gnats 10,000; tiny flying bugs in house 1,500; gnats vs fruit flies 2,700; types of gnats 2,800 (family 164,000 = 0.937 ratio units); target KD 4, traffic potential 32,000, parent topic "how to kill gnats". Search Console: Site already appears for "how to get rid of gnats" (23 US impressions in 90 days at position 1.9, almost certainly an AI Overview citation): too few for the bonus.
- **Page 1:** Google, Oct 16 ("how to get rid of gnats"); features: AI Overview, People also ask, videos. Reddit, Scotts, Facebook group, diypestcontrol.com, Quora, Orkin, wikiHow. Read: forums, a retailer blog and two brands: beatable.
- **Why it should earn the click:** Searchers say "gnats" for four different flies; the fix differs by fly (soil, fruit bowl, drain). A sorter with photos answers what an AI Overview summary cannot.
- **Overlap:** `/blog/how-to-get-rid-of-fungus-gnats` (fungus gnat control (live guide)) -> link; this page sorts which gnat it is and sends fungus gnats there; `/blog/how-to-get-rid-of-fruit-flies` (fruit fly control (TSX)) -> link; keep fruit flies there; `/blog/types-of-gnats` (queued wave 3 page "gnats vs fruit flies") -> REPLACE: fold types-of-gnats into this page (Ahrefs: "how to get rid of gnats" 130,000 vs "gnats vs fruit flies" 2,700).
- **Decision:** Build now. One umbrella page: identify the gnat (fungus gnat, fruit fly, drain fly, phorid fly) then the fix for each; replaces types-of-gnats.
- **Photos:** in hand: fruit fly, fungus gnat, drain fly, phorid fly (all with scale bars).

### 6. `/blog/how-to-get-rid-of-cockroaches` — "how to get rid of roaches"
- **Estimate:** 23.7 clicks/month Nov-Mar (9.5-71.2); 53 May-Aug (21.2-158.9); model estimates, not measurements. Factors: D 0.411 (Trends 0.411 and Ahrefs 0.234 agree within 3x: Trends used), Nov-Mar 0.71, May-Aug 1.32 (from how to get rid of roaches, how to get rid of cockroaches), format identification + how-to (control) 1, SERP 1.2, Search Console 1.3.
- **Confidence:** high (results page read on Google; Trends and Ahrefs agree; the site already ranks for the topic in Canada). **Build:** now (winter earner (Nov-Mar factor >= 0.45 and >= 12 clicks a month in winter)). **Status:** new.
- **Variants:** how to get rid of cockroaches; how to get rid of roaches fast; how to get rid of german cockroaches; roaches in apartment. **Audience:** US readers; regional pair with /blog/how-to-get-rid-of-cockroaches-canada.
- **Demand evidence:** Trends how to get rid of roaches + how to get rid of cockroaches = 0.411. Ahrefs US: how to get rid of roaches 23,000; how to get rid of cockroaches 18,000 (family 41,000 = 0.234 ratio units); target KD 4, traffic potential 8,300, parent topic "cockroach". Search Console: Canadian edition how-to-get-rid-of-cockroaches-canada: 7,592 impressions in 90 days at 9.8.
- **Page 1:** Google, Oct 16 ("how to get rid of roaches"); features: AI Overview, People also ask, videos, Discussions and forums. Reddit, Orkin, UK Entomology, Facebook, Food & Wine, Scotts. Read: forums, a magazine and two brands with one university page: beatable.
- **Why it should earn the click:** Huge how-to with a weak page 1; the bait-not-spray order and species ID first.
- **Overlap:** `/learn/cockroaches` ("What is the right order for getting rid of cockroaches?" (5 steps)) -> keep the pillar as the overview and link here; trimming it is the owner's call; `/blog/how-to-get-rid-of-cockroaches-canada` (Canadian edition) -> regional pair (hreflang); no Amazon links on the US edition.
- **Decision:** Build now: year-round (Nov-Mar 0.75) and a proven Canadian edition.
- **Photos:** in hand: German, American, Oriental, brown-banded cockroaches, egg cases.

### 7. `/blog/kissing-bug-look-alikes` — "bugs that look like kissing bugs"
- **Estimate:** 23 clicks/month Nov-Mar (9.2-68.9); 50.5 May-Aug (20.2-151.4); model estimates, not measurements. Factors: D 0.252 (Trends 0.252 and Ahrefs 0.248 agree within 3x: Trends used), Nov-Mar 0.69, May-Aug 1.25 (from assassin bug, wheel bug), format photo ID roundup / sorter (several candidates on one page) 2.5, SERP 0.8, Search Console 1.
- **Confidence:** medium (results page read on Google; Trends and Ahrefs agree; half of the assassin bug and wheel bug searches is assumed winnable by a look-alike page). **Build:** now (winter earner (Nov-Mar factor >= 0.45 and >= 12 clicks a month in winter)). **Status:** taxonomy.
- **Variants:** assassin bug vs kissing bug; wheel bug vs kissing bug; assassin bug; wheel bug; kissing bug look alikes. **Audience:** US readers.
- **Demand evidence:** Trends assassin bug x0.5 + wheel bug x0.5 = 0.252. Ahrefs US: bugs that look like kissing bugs 900; kissing bug look alikes 20; assassin bug x0.5 69,000; wheel bug x0.5 16,000 (family 43,420 = 0.248 ratio units); target KD 13, traffic potential 1,300, parent topic "bugs that look like kissing bugs". Search Console: Nothing.
- **Page 1:** Google, Oct 16 ("bugs that look like kissing bugs"); features: AI Overview, People also ask. Ohio State BYGL, Colorado State extension, WA Department of Health (Medium), Texas A&M Kissing Bug program, Reddit, UW-Madison insect lab, City of Brownsville, Reddit, San Diego County. Read: extension and health departments with two forum threads.
- **Why it should earn the click:** Fear-driven photo ID (Chagas): wheel bug, masked hunter, leaf-footed bug, western conifer seed bug, boxelder bug vs real kissing bugs.
- **Overlap:** `/blog/bugs-in-house-in-winter` (western conifer seed bug, boxelder bug) -> link.
- **Decision:** Build in Jan-Feb (Nov-Mar 0.69). Assassin and wheel bug searches counted at half: the page wins the comparison searches, not the species heads.
- **Photos:** in hand: eastern kissing bug, three Texas kissing bugs, wheel bug and nymph.

### 8. `/blog/how-to-get-rid-of-boxelder-bugs` — "red and black bugs"
- **Estimate:** 21 clicks/month Nov-Mar (8.4-63.1); 39.5 May-Aug (15.8-118.4); model estimates, not measurements. Factors: D 0.115 (Trends 0.240 and Ahrefs 0.055 disagree 4.4x: geometric mean used), Nov-Mar 0.72, May-Aug 1.12 (from boxelder bug, red and black bugs), format photo ID roundup / sorter (several candidates on one page) 2.5, SERP 0.8, Search Console 1.3.
- **Confidence:** high (results page read on Google; Trends and Ahrefs disagree (midpoint used); the site already ranks for the topic in Canada). **Build:** now (winter earner (Nov-Mar factor >= 0.45 and >= 12 clicks a month in winter)). **Status:** queued.
- **Variants:** boxelder bugs; how to get rid of boxelder bugs; red and black bugs on house. **Audience:** US readers; regional pair.
- **Demand evidence:** Trends boxelder bug + red and black bugs = 0.24. Ahrefs US: boxelder bugs 7,500; red and black bugs 2,100 (family 9,600 = 0.055 ratio units); target KD 3, traffic potential 9,800, parent topic "boxelder bug". Search Console: Canadian edition: 6,392 impressions in 90 days at 9.4; "black and red bugs" 205 impressions at 9.5.
- **Page 1:** Google, Oct 16 ("red and black bugs"); features: AI Overview, People also ask, videos, What people are saying. UC IPM, ThoughtCo, Orkin, Orkin Canada, Facebook, PestWorld, MSU (head "boxelder bugs" in next-50: authority-led). Read: mixed.
- **Overlap:** `/blog/how-to-get-rid-of-boxelder-bugs-canada` (Canadian edition) -> regional pair.
- **Decision:** KEEP, but re-aim it as "red and black bugs" (boxelder bug + look-alikes: milkweed bugs, red-shouldered bug, firebugs) under the same slug: Ahrefs makes "boxelder bug" the parent topic of "red and black bugs".
- **Photos:** in hand: boxelder bug.

### 9. `/blog/holes-in-yard` — "small holes in yard"
- **Estimate:** 20.9 clicks/month Nov-Mar (8.4-62.6); 43.6 May-Aug (17.4-130.7); model estimates, not measurements. Factors: D 0.108 (Trends 0.361 and Ahrefs 0.033 disagree 11.1x: geometric mean used), Nov-Mar 0.69, May-Aug 1.2 (from holes in yard), format photo ID roundup / sorter (several candidates on one page) 2.5, SERP 1.1, Search Console 1.
- **Confidence:** medium (results page read on Google; Trends and Ahrefs disagree (midpoint used)). **Build:** now (winter earner (Nov-Mar factor >= 0.45 and >= 12 clicks a month in winter)). **Status:** new.
- **Variants:** holes in yard; what animal is digging holes in my yard; holes in lawn; snake holes; mole vs vole. **Audience:** US and Canadian readers.
- **Demand evidence:** Trends holes in yard + holes in lawn + snake holes + mole vs vole x0.5 + rat holes x0.5 = 0.361. Ahrefs US: holes in yard 500; small holes in yard 800; what animal is digging holes in my yard 1,600; snake holes 1,200; mole vs vole x0.5 3,200 (family 5,700 = 0.033 ratio units); target KD 0, traffic potential 1,600, parent topic "what animal is digging holes in my yard". Search Console: Nothing.
- **Page 1:** Google, Oct 16 ("holes in yard"); features: AI Overview, People also ask, videos, What people are saying. Facebook group, Iowa State extension, Reddit, UMD extension, Western Exterminator, Wildlife Illinois. Read: two extension pages among forums and a pest brand.
- **Why it should earn the click:** Hole size, shape and mound decide the animal (moles, voles, chipmunks, skunks and raccoons digging grubs, rats, cicada killers, ground bees, crayfish): a photo sorter.
- **Overlap:** `/blog/how-to-get-rid-of-voles-canada` (vole runways) -> link; `/blog/lawn-pest-control` (grub-hunting animals) -> link.
- **Decision:** Build now or early Jan (Nov-Mar 0.65, May-Aug 1.25; spring digging starts in March).
- **Photos:** in hand: cicada killer burrow, mining bee burrow, mole crickets; need mole hill, vole runway, chipmunk hole, skunk grub digging.

### 10. `/blog/millipedes` — "millipedes in house"
- **Estimate:** 18.6 clicks/month Nov-Mar (7.4-55.8); 42.5 May-Aug (17-127.5); model estimates, not measurements. Factors: D 0.73 (Trends 0.730 and Ahrefs 0.505 agree within 3x: Trends used), Nov-Mar 0.69, May-Aug 1.31 (from millipede, centipede vs millipede), format photo ID of one thing (species, eggs, nest, damage) 1, SERP 0.95, Search Console 1.
- **Confidence:** high (results page read on Google; Trends and Ahrefs agree). **Build:** now (winter earner (Nov-Mar factor >= 0.45 and >= 12 clicks a month in winter)). **Status:** queued.
- **Variants:** millipede; centipede vs millipede; how to get rid of millipedes; are millipedes poisonous. **Audience:** US and Canadian readers.
- **Demand evidence:** Trends millipede + centipede vs millipede = 0.73. Ahrefs US: millipede 77,000; millipedes in house 1,300; centipede vs millipede 10,000 (family 88,300 = 0.505 ratio units); target KD 0, traffic potential 500, parent topic "millipede in house". Search Console: "house millipede canada", "centipede vs millipede" 10 impressions (centipede page).
- **Page 1:** Google, Oct 16 ("millipedes in house"); features: AI Overview, People also ask, image pack, Things to know. Reddit, Scotts, UC IPM, Orkin, Facebook, UK Entomology, All American Pest, bettertermite, Northwest Exterminating (also "centipede vs millipede": Carnegie Museum, Reddit, Orkin, Terminix, Library of Congress, reconnectwithnature, EcoShield). Read: the situational search is weak; the head term was not checked.
- **Why it should earn the click:** Visual and harmless-but-alarming.
- **Overlap:** `/blog/house-centipedes` (centipede vs millipede) -> the comparison becomes a section here; link both ways.
- **Decision:** KEEP, move up: weak page 1 for "millipedes in house" and "centipede vs millipede" (Ahrefs 10,000, KD 0) folded in.
- **Photos:** in hand: greenhouse millipede.

### 11. `/blog/black-spiders` — "black spider with white spots"
- **Estimate:** 17.7 clicks/month Nov-Mar (7.1-53.1); 59.6 May-Aug (23.8-178.8); model estimates, not measurements. Factors: D 0.273 (Trends 0.505 and Ahrefs 0.147 disagree 3.4x: geometric mean used), Nov-Mar 0.51, May-Aug 1.42 (from big black spider, black spider with red, black house spider), format photo ID roundup / sorter (several candidates on one page) 2.5, SERP 0.8, Search Console 1.
- **Confidence:** medium (results page read on Google; Trends and Ahrefs disagree (midpoint used)). **Build:** now (winter earner (Nov-Mar factor >= 0.45 and >= 12 clicks a month in winter)). **Status:** new.
- **Variants:** black spider; big black spider; black spider with red; black house spider; black spiders in house. **Audience:** US readers.
- **Demand evidence:** Trends big black spider + black spider with red + black spider with white spots + black house spider + black spiders in house = 0.505. Ahrefs US: black spider 8,600; big black spider 1,000; black spider with red 200; black spider with white spots 3,000; black house spider 13,000 (family 25,800 = 0.147 ratio units); target KD 0, traffic potential 300, parent topic "spider with white dot on back". Search Console: Nothing.
- **Page 1:** Google, Oct 16 ("black spider with white spots"); features: AI Overview, People also ask. Wikipedia (bold jumping spider), Facebook, Reddit, WSU, Quora, Pinterest, Orkin, spideradv.com, Hawx (also "black house spider": knowledge panel for the Australian species, Wikipedia, Australian Museum, Australian Geographic). Read: mixed; the head "black house spider" is an Australian species.
- **Why it should earn the click:** Colour-first sorter: bold jumping spider, black widow, false widow, wolf spider, black purse-web, ground spiders.
- **Overlap:** `/blog/house-spiders` ("Is a shiny dark spider a black widow?", "small black spider that jumps") -> colour-first sorter here; link both ways; `/blog/venomous-spiders` (widows) -> link.
- **Decision:** Later (spider season Aug-Oct; Nov-Mar 0.48). Bare "black spider" is not counted: Trends matches "black widow spider" inside it.
- **Photos:** in hand: widows, bold and Johnson jumping spiders, false black widow.

### 12. `/blog/beetles-in-house` — "beetles in house"
- **Estimate:** 17 clicks/month Nov-Mar (6.8-50.9); 39.8 May-Aug (15.9-119.5); model estimates, not measurements. Factors: D 0.06 (Trends 0.361 and Ahrefs 0.010 disagree 36.1x: geometric mean used), Nov-Mar 0.69, May-Aug 1.35 (from beetles in house, black beetles), format photo ID roundup / sorter (several candidates on one page) 2.5, SERP 1.2, Search Console 1.
- **Confidence:** medium (results page read on Google; Trends and Ahrefs disagree (midpoint used)). **Build:** now (winter earner (Nov-Mar factor >= 0.45 and >= 12 clicks a month in winter)). **Status:** new.
- **Variants:** black beetles in house; small black beetles in house; brown beetles in house; beetles in house in winter. **Audience:** US and Canadian readers.
- **Demand evidence:** Trends beetles in house + small black beetles + black beetles x0.5 = 0.361. Ahrefs US: beetles in house 500; black beetles in house 900; small black beetles in house 350 (family 1,750 = 0.01 ratio units); target KD 0, traffic potential 2,100, parent topic "beetles". Search Console: Nothing.
- **Page 1:** Google, Oct 16 ("black beetles in house"); features: AI Overview, People also ask, short videos. Reddit, UMN extension, Facebook, bettertermite.com, Orkin, bugspray.com, Quora, UC IPM. Read: forums and pest companies with two extension pages.
- **Why it should earn the click:** Beetle sorter.
- **Overlap:** `/blog/tiny-black-bugs` (tiny beetles) -> scope this page to beetles of all sizes; link the tiny-bug sorter; `/blog/how-to-get-rid-of-carpet-beetles` (carpet beetles) -> link.
- **Decision:** Later in the winter list: Trends counts "carpet beetles in house" here, so the exact phrase is small (Ahrefs 500); overlap with tiny-black-bugs.
- **Photos:** in hand: 22 beetle records.

### 13. `/blog/how-to-get-rid-of-earwigs` — "how to get rid of earwigs"
- **Estimate:** 16.3 clicks/month Nov-Mar (6.5-48.8); 72.1 May-Aug (28.9-216.4); model estimates, not measurements. Factors: D 0.423 (Trends 0.757 and Ahrefs 0.237 disagree 3.2x: geometric mean used), Nov-Mar 0.48, May-Aug 1.77 (from earwig), format identification + how-to (control) 1, SERP 1.2, Search Console 1.3.
- **Confidence:** high (results page read on Google; Trends and Ahrefs disagree (midpoint used); the site already ranks for the topic in Canada). **Build:** now (winter earner (Nov-Mar factor >= 0.45 and >= 12 clicks a month in winter)). **Status:** queued.
- **Variants:** earwigs; earwigs in house; do earwigs pinch. **Audience:** US readers; regional pair.
- **Demand evidence:** Trends earwig = 0.757. Ahrefs US: earwigs 33,000; how to get rid of earwigs 8,400 (family 41,400 = 0.237 ratio units); target KD 5, traffic potential 2,200, parent topic "(Ahrefs returned an unrelated parent topic)". Search Console: Canadian earwig pages: 1,290 impressions in 90 days.
- **Page 1:** Google, Oct 16 ("how to get rid of earwigs"); features: AI Overview, People also ask, videos. Reddit, Orkin, Facebook, UC IPM, pesticide.org, Houzz, Terro. Read: forums and brands with one extension page.
- **Why it should earn the click:** Visual.
- **Overlap:** `/blog/how-to-get-rid-of-earwigs-canada` (Canadian edition) -> regional pair.
- **Decision:** KEEP, build in Jan-Feb (summer-peaked: Nov-Mar 0.48, May-Aug 1.77).
- **Photos:** in hand: European earwig.

### 14. `/blog/animal-droppings` — "animal poop identification"
- **Estimate:** 15.8 clicks/month Nov-Mar (6.3-47.3); 32.2 May-Aug (12.9-96.7); model estimates, not measurements. Factors: D 0.246 (Trends 0.246 and Ahrefs 0.225 agree within 3x: Trends used), Nov-Mar 0.76, May-Aug 1.29 (from raccoon poop, squirrel poop, bat poop, snake poop), format droppings sorter for several animals (between droppings 0.8 and roundup 2.5; not yet measured on this site) 1.4, SERP 0.9, Search Console 1.
- **Confidence:** high (results page read on Google; Trends and Ahrefs agree). **Build:** now (winter earner (Nov-Mar factor >= 0.45 and >= 12 clicks a month in winter)). **Status:** new.
- **Variants:** raccoon poop; squirrel poop; bat poop; possum poop; snake poop; squirrel poop vs rat poop; raccoon poop vs possum poop. **Audience:** US and Canadian readers.
- **Demand evidence:** Trends animal poop identification + raccoon poop x0.5 + possum poop x0.5 + squirrel poop x0.5 + bat poop x0.5 + snake poop x0.5 = 0.246. Ahrefs US: animal poop identification 500; raccoon poop x0.5 19,000; possum poop x0.5 9,400; opossum poop x0.5 4,500; squirrel poop x0.5 18,000; bat poop x0.5 10,000; bat guano x0.5 5,900; snake poop x0.5 11,000 (family 39,400 = 0.225 ratio units); target KD 3, traffic potential 2,400, parent topic "identify animal poop". Search Console: Nothing.
- **Page 1:** Google, Oct 16 ("animal poop identification"); features: AI Overview, People also ask, Things to know. ICWDM, poosquad.com, Wildlife Trusts (UK), NH Fish & Game, a Google Play app, a-z-animals, Illinois DNR, Queensland government, fieldbook-app (also "raccoon poop": Critter Control, CDC, Outbreak News, Texas DSHS, Reddit, WA DOH; "bat poop": Bat Conservation Trust, BCI, Critter Control, CSU, YouTube, NC Wildlife, a pest company). Read: wildlife agencies plus a pet-waste blog and a-z-animals; health departments on the per-animal searches.
- **Why it should earn the click:** Autocomplete is full of comparisons (raccoon vs opossum, squirrel vs rat, bat vs mouse): a side-by-side photo sorter with a scale is the answer; raccoon latrines carry a CDC-documented roundworm risk worth stating with the source.
- **Overlap:** `/blog/what-does-mouse-poop-look-like-canada` (mouse droppings) -> link; mice stay there; `/blog/rat-droppings` (queued rat droppings page) -> link.
- **Decision:** Build now or early Jan (Nov-Mar 0.76: raccoon and squirrel droppings are found all winter). Per-animal searches counted at half: a sorter wins the "X poop vs Y poop" variants that fill autocomplete, not every single-animal search.
- **Photos:** in hand: rat and mouse droppings, rodent droppings in a drawer; need raccoon latrine (CDC PD), bat guano, squirrel and opossum droppings.

### 15. `/blog/how-to-get-rid-of-silverfish` — "how to get rid of silverfish"
- **Estimate:** 15.3 clicks/month Nov-Mar (6.1-46); 38.9 May-Aug (15.6-116.7); model estimates, not measurements. Factors: D 0.159 (Trends 0.159 and Ahrefs 0.086 agree within 3x: Trends used), Nov-Mar 0.68, May-Aug 1.44 (from silverfish in house), format identification + how-to (control) 1, SERP 1.3, Search Console 1.3.
- **Confidence:** high (results page read on Google; Trends and Ahrefs agree; the site already ranks for the topic in Canada). **Build:** now (winter earner (Nov-Mar factor >= 0.45 and >= 12 clicks a month in winter)). **Status:** queued.
- **Variants:** silverfish in house; silverfish bugs; what are silverfish. **Audience:** US readers; regional pair.
- **Demand evidence:** Trends how to get rid of silverfish + silverfish in house = 0.159. Ahrefs US: how to get rid of silverfish 15,000 (family 15,000 = 0.086 ratio units); target KD 4, traffic potential 6,300, parent topic "how to get rid of silverfish". Search Console: Canadian edition: 3,405 impressions in 90 days at 6.5 and 1.35% CTR.
- **Page 1:** Google, Oct 16 ("how to get rid of silverfish"); features: AI Overview, People also ask, videos. Reddit, Scotts, pest-ex.com.au, Quora, WebMD, Facebook, Raid, JustAnswer. Read: forums and brands: very weak.
- **Overlap:** `/blog/how-to-get-rid-of-silverfish-canada` (Canadian edition) -> regional pair.
- **Decision:** KEEP, move up to build now: the how-to page 1 is very weak (checked today) and the demand is year-round.
- **Photos:** in hand.

### 16. `/blog/termite-damage` — "termite damage"
- **Estimate:** 14.6 clicks/month Nov-Mar (5.9-43.9); 32.7 May-Aug (13.1-98.1); model estimates, not measurements. Factors: D 0.28 (Trends 0.280 and Ahrefs 0.216 agree within 3x: Trends used), Nov-Mar 0.72, May-Aug 1.34 (from termite damage), format photo ID of one thing (species, eggs, nest, damage) 1, SERP 1.15, Search Console 1.
- **Confidence:** high (results page read on Google; Trends and Ahrefs agree). **Build:** now (winter earner (Nov-Mar factor >= 0.45 and >= 12 clicks a month in winter)). **Status:** new.
- **Variants:** what does termite damage look like; signs of termites; termite droppings; termite mud tubes; termite damage vs wood rot. **Audience:** US readers.
- **Demand evidence:** Trends termite damage + signs of termites + termite droppings + termite mud tubes = 0.28. Ahrefs US: termite damage 7,600; what does termite damage look like 2,900; signs of termites 9,800; termite droppings 15,000; termite mud tubes 2,500 (family 37,800 = 0.216 ratio units); target KD 0, traffic potential 10, parent topic "what does termite damage look like on wood". Search Console: Nothing.
- **Page 1:** Google, Oct 16 ("termite damage"); features: AI Overview, People also ask, image pack, videos. Orkin, Viking Pest, EPA, Mississippi State extension, termitetom.com, Reddit, inspectify (also "termite droppings": Orkin, Terminix, Frontline, Bug Out Service, Prestox, Dodson Bros). Read: pest companies with one EPA and one extension page.
- **Why it should earn the click:** Homeowners photograph damage, frass or tubes and want to know "is this termites?"; a photo guide with "termite damage vs wood rot" answers it.
- **Overlap:** `/blog/flying-ants-vs-termites` ("What do frass, mud tubes and damaged wood tell you?") -> keep a short version there; this page owns the photo guide to damage, droppings and mud tubes.
- **Decision:** Build in Jan-Feb (Nov-Mar 0.67, May-Aug 1.45). Termite droppings (Ahrefs 15,000, all pest companies on page 1) is a section here, not a separate page.
- **Photos:** none on record: need damaged wood, mud tubes, drywood frass (PD/CC BY).

### 17. `/blog/how-to-get-rid-of-drain-flies` — "drain flies"
- **Estimate:** 14.5 clicks/month Nov-Mar (5.8-43.4); 45.3 May-Aug (18.1-135.8); model estimates, not measurements. Factors: D 0.595 (Trends 0.595 and Ahrefs 0.429 agree within 3x: Trends used), Nov-Mar 0.54, May-Aug 1.41 (from drain flies), format identification + how-to (control) 1, SERP 0.8, Search Console 1.3.
- **Confidence:** high (results page read on Google; Trends and Ahrefs agree; the site already ranks for the topic in Canada). **Build:** now (winter earner (Nov-Mar factor >= 0.45 and >= 12 clicks a month in winter)). **Status:** queued.
- **Variants:** how to get rid of drain flies; drain fly larvae; small black worms in bathroom. **Audience:** US readers; regional pair.
- **Demand evidence:** Trends drain flies = 0.595. Ahrefs US: drain flies 59,000; how to get rid of drain flies 16,000 (family 75,000 = 0.429 ratio units); target KD 0, traffic potential 80, parent topic "sewer fly". Search Console: Canadian edition: 7,149 impressions in 90 days at 8.3.
- **Page 1:** Google, Oct 16 ("drain flies"); features: knowledge panel, People also ask, videos, Discussions and forums, Things to know. Arkansas extension, Reddit, Wikipedia, greendrains.com, UC IPM, Orkin, Good Housekeeping, UK Entomology. Read: mixed: knowledge panel and Wikipedia but forums and brands too.
- **Why it should earn the click:** Year-round bathroom puzzle.
- **Overlap:** `/blog/how-to-get-rid-of-gnats` (drain flies are one of the gnats) -> link; this page owns drain flies and their larvae ("black worms in the bathroom").
- **Decision:** KEEP; add the "small black worms in bathroom" larva photos (weak page 1 for that search).
- **Photos:** in hand: drain fly.

### 18. `/blog/tiny-brown-bugs` — "tiny brown bugs in house"
- **Estimate:** 13.9 clicks/month Nov-Mar (5.6-41.8); 38.1 May-Aug (15.3-114.4); model estimates, not measurements. Factors: D 0.044 (Trends 0.100 and Ahrefs 0.019 disagree 5.1x: geometric mean used), Nov-Mar 0.64, May-Aug 1.45 (from tiny brown bugs, brown bugs in house), format photo ID roundup / sorter (several candidates on one page) 2.5, SERP 1.25, Search Console 1.
- **Confidence:** medium (results page read on Google; Trends and Ahrefs disagree (midpoint used)). **Build:** now (winter earner (Nov-Mar factor >= 0.45 and >= 12 clicks a month in winter)). **Status:** new.
- **Variants:** tiny brown bugs; little brown bugs in house; tiny brown bugs in kitchen; tiny brown bugs that bite; tiny brown bugs in bed. **Audience:** US and Canadian readers.
- **Demand evidence:** Trends tiny brown bugs + brown bugs in house x0.5 = 0.1. Ahrefs US: tiny brown bugs in house 1,700; tiny brown bugs 1,700 (family 3,400 = 0.019 ratio units); target KD 0, traffic potential 12,000, parent topic "tiny bugs in house". Search Console: Nothing; the live tiny-black-bugs page has the sibling query.
- **Page 1:** Google, Oct 16 ("tiny brown bugs in house"); features: AI Overview, People also ask, videos, What people are saying. Orkin, UMD extension, Reddit, Bob Vila, Facebook, YouTube (Clean My Space), Quora. Read: very weak.
- **Why it should earn the click:** Same format as tiny-black-bugs (live) and the look-alike winners: location-first photo sorter (kitchen, bed, bathroom, carpet).
- **Overlap:** `/blog/tiny-black-bugs` (sibling sorter) -> same template; link both ways; `/blog/pantry-pests` (drugstore and cigarette beetles) -> link.
- **Decision:** Build now (Nov-Mar 0.62). Ahrefs traffic potential 12,000 for the top page: the long tail is large.
- **Photos:** in hand: drugstore and cigarette beetles, carpet beetle larva, booklouse, German cockroach nymphs, bed bug, cat flea.

### 19. `/blog/what-do-termites-look-like` — "what do termites look like"
- **Estimate:** 11.9 clicks/month Nov-Mar (4.8-35.8); 50.8 May-Aug (20.3-152.5); model estimates, not measurements. Factors: D 0.456 (Trends 0.456 and Ahrefs 0.427 agree within 3x: Trends used), Nov-Mar 0.44, May-Aug 1.56 (from what do termites look like, flying termites, subterranean termites), format photo ID of one thing (species, eggs, nest, damage) 1, SERP 1.2, Search Console 1.
- **Confidence:** high (results page read on Google; Trends and Ahrefs agree). **Build:** Jan-Feb (summer earner: build in Jan-Feb so it is indexed and aged by May). **Status:** new.
- **Variants:** flying termites; termite swarmers; subterranean termites; drywood termites; termites with wings; baby termites. **Audience:** US readers (Canada: southern Ontario only).
- **Demand evidence:** Trends what do termites look like + flying termites + termite swarmers + subterranean termites + drywood termites = 0.456. Ahrefs US: what do termites look like 37,000; flying termites 13,000; termite swarmers 6,900; subterranean termites 12,000; drywood termites 5,900 (family 74,800 = 0.427 ratio units); target KD 3, traffic potential 7,200, parent topic "what do termites look like". Search Console: Nothing for termite identification (only Canadian local "termite treatment <city>" queries at position ~30).
- **Page 1:** Google, Oct 16 ("what do termites look like"); features: AI Overview, People also ask, videos. DoMyOwn, Terminix, Smithereen, Dodson Bros, Massey, PestWorld, Orkin, Mississippi State extension (also "flying termites": Orkin, Massey, Reddit, Terminix, bettertermite, Martha Stewart, NC State). Read: pest companies only plus one extension page: winnable.
- **Why it should earn the click:** People find winged insects or pale "white ants" and need a photo match: workers, soldiers, swarmers, subterranean vs drywood vs Formosan.
- **Overlap:** `/blog/flying-ants-vs-termites` (swarmer vs flying ant tests, frass, mud tubes) -> keep the comparison there; this page is the insect itself (castes, species, swarmers); link both ways.
- **Decision:** Build in Jan-Feb so it is aged for the March-May swarm season (Nov-Mar 0.44). Ahrefs: 37,000 + 13,000 + 12,000 + 6,900 + 5,900, KD 1-24.
- **Photos:** none on record: need termite worker, soldier and swarmer (USDA ARS and Wikimedia have PD/CC BY).

### 20. `/blog/how-to-get-rid-of-carpenter-bees` — "how to get rid of carpenter bees"
- **Estimate:** 11.5 clicks/month Nov-Mar (4.6-34.6); 37.6 May-Aug (15-112.9); model estimates, not measurements. Factors: D 0.754 (Trends 0.754 and Ahrefs 0.411 agree within 3x: Trends used), Nov-Mar 0.51, May-Aug 1.38 (from carpenter bees), format identification + how-to (control) 1, SERP 0.6, Search Console 1.3.
- **Confidence:** high (results page read on Google; Trends and Ahrefs agree; the site already ranks for the topic in Canada; authority results page). **Build:** Jan-Feb (summer earner: build in Jan-Feb so it is indexed and aged by May). **Status:** taxonomy.
- **Variants:** carpenter bees; carpenter bee holes; carpenter bee vs bumble bee; do carpenter bees sting. **Audience:** US readers; regional pair with the Canadian page.
- **Demand evidence:** Trends carpenter bees = 0.754. Ahrefs US: carpenter bees 58,000; how to get rid of carpenter bees 14,000 (family 72,000 = 0.411 ratio units); target KD 0, traffic potential 7,100, parent topic "how to get rid of carpenter bees". Search Console: Canadian edition how-to-get-rid-of-carpenter-bees-canada: 1,095 impressions in 90 days at 8.8.
- **Page 1:** Google, Oct 16 ("carpenter bees"); features: knowledge panel, People also ask, videos, What people are saying, Things to know. UK Entomology, Wikipedia, UC IPM, PestWorld, UMD extension, UGA, NAHB. Read: authority throughout for the head term; the how-to variant was not checked.
- **Why it should earn the click:** Holes in decks and fascia are a visual problem; how-to with photos.
- **Overlap:** `/blog/how-to-get-rid-of-carpenter-bees-canada` (Canadian edition) -> regional pair.
- **Decision:** Build in Jan-Feb: searches peak in April (the May-Aug figure understates it), so it must be live by March.
- **Photos:** in hand: carpenter bee nest hole; need the bee.

### 21. `/blog/copperhead-look-alikes` — "baby copperhead"
- **Estimate:** 19.9 clicks/month Nov-Mar (8-59.8); 70.6 May-Aug (28.2-211.7); model estimates, not measurements. Factors: D 0.159 (Trends 0.159 and Ahrefs 0.107 agree within 3x: Trends used), Nov-Mar 0.46, May-Aug 1.36 (from baby copperhead), format photo ID roundup / sorter (several candidates on one page) 2.5, SERP 1.3, Search Console 1.
- **Confidence:** medium (results page read on Google; Trends and Ahrefs agree; outside the site's current topics). **Build:** Jan-Feb (its winter searches are almost all November and March; build in January (after a snake photo scout) so it is indexed before snakes emerge in April). **Status:** new.
- **Variants:** snakes that look like copperheads; copperhead vs corn snake; copperhead vs rat snake; water moccasin vs water snake; baby copperhead vs brown snake. **Audience:** US readers.
- **Demand evidence:** Trends baby copperhead + snakes that look like copperheads + copperhead vs corn snake + copperhead vs rat snake + water moccasin vs water snake = 0.159. Ahrefs US: baby copperhead 15,000; snakes that look like copperheads 1,000; copperhead vs corn snake 600; copperhead vs rat snake 600; water moccasin vs water snake 1,500 (family 18,700 = 0.107 ratio units); target KD 0, traffic potential 4,400, parent topic "snakes that look like copperheads". Search Console: Nothing (the site has no snake pages).
- **Page 1:** Google, Oct 16 ("snakes that look like copperheads"); features: AI Overview, People also ask, videos. Virginia Herpetological Society, a-z-animals, Facebook group, Clemson HGIC, News & Observer, Reddit, Nature Conservancy blog, The State (also "baby copperhead": Virginia Herpetological Society, a community newsletter, Facebook, Fox Nashville video, Reddit, News & Observer; Ahrefs shows no AI Overview there). Read: hobby society, newspapers and forums: the look-alike pattern this site wins.
- **Why it should earn the click:** Pure photo identification with a fear in it (is it venomous?): hourglass bands, yellow tail tip on babies, head shape, vs corn snake, rat snake, northern water snake, hognose.
- **Decision:** Build in Jan-Feb (Nov-Mar 0.46, May-Aug 1.36; "baby copperhead season" is late summer). Ahrefs makes "baby copperhead" (15,000) and "snakes that look like copperheads" (1,000) each other's parent topic: one page should target both. Owner's call: New family for the site (wildlife, not insects): snakes are handled by wildlife-control firms, not by BuzzSkito. Traffic play only.
- **Photos:** none on record: snakes need a photo scout first (USFWS/NPS public domain; Wikimedia CC BY/BY-SA).

### 22. `/blog/bird-mites` — "bird mites"
- **Estimate:** 10.5 clicks/month Nov-Mar (4.2-31.4); 56.2 May-Aug (22.5-168.7); model estimates, not measurements. Factors: D 0.127 (Trends 0.127 and Ahrefs 0.074 agree within 3x: Trends used), Nov-Mar 0.44, May-Aug 1.97 (from bird mites), format bite / sting identification with photos 2, SERP 1, Search Console 1.
- **Confidence:** high (results page read on Google; Trends and Ahrefs agree). **Build:** Jan-Feb (summer earner: build in Jan-Feb so it is indexed and aged by May). **Status:** queued.
- **Variants:** bird mites on humans; bird mite bites. **Audience:** US and Canadian readers.
- **Demand evidence:** Trends bird mites = 0.127. Ahrefs US: bird mites 13,000 (family 13,000 = 0.074 ratio units); target KD 5, traffic potential 450, parent topic "bird mite". Search Console: 1 impression.
- **Page 1:** Google, read by next-50 on Oct 16 ("bird mites"); features: AI Overview, People also ask, image pack, videos. UMN extension, Healthline, forum, Iowa State, SA Health, Orkin. Read: mixed.
- **Decision:** KEEP, Jan-Feb (spring-peaked: Nov-Mar 0.44).
- **Photos:** in hand.

### 23. `/blog/june-bugs` — "june bug"
- **Estimate:** 11.9 clicks/month Nov-Mar (4.7-35.6); 56.3 May-Aug (22.5-168.8); model estimates, not measurements. Factors: D 0.661 (Trends 0.661 and Ahrefs 0.714 agree within 3x: Trends used), Nov-Mar 0.48, May-Aug 1.9 (from june bug), format photo ID of one thing (species, eggs, nest, damage) 1, SERP 0.7, Search Console 1.3.
- **Confidence:** high (results page read on Google; Trends and Ahrefs agree; the site already ranks for the topic in Canada). **Build:** Jan-Feb (summer earner: build in Jan-Feb so it is indexed and aged by May). **Status:** taxonomy.
- **Variants:** june bugs; green june bug; are june bugs dangerous; june bug vs japanese beetle. **Audience:** US readers; regional pair with /blog/june-bugs-ontario.
- **Demand evidence:** Trends june bug = 0.661. Ahrefs US: june bug 98,000; june bugs 27,000 (family 125,000 = 0.714 ratio units); target KD 12, traffic potential 20,000, parent topic "june bug". Search Console: Canadian edition june-bugs-ontario: 3,999 impressions in 90 days at 6.4.
- **Page 1:** Google, Oct 16 ("june bug"); features: knowledge panel, People also ask, videos, Things to know. Wikipedia (green June beetle), Britannica, Terminix, Homestead Gardens, Mr. Buggs, Facebook, Texas A&M field guide, WebMD. Read: knowledge panel and Wikipedia, then a weak middle.
- **Why it should earn the click:** Visual (green June beetle vs May/June beetles vs Japanese beetle).
- **Overlap:** `/blog/june-bugs-ontario` (Canadian edition) -> regional pair.
- **Decision:** Build in Jan-Feb for June-July (Nov-Mar 0.48, May-Aug 1.90).
- **Photos:** check record (beetles); need green June beetle.

### 24. `/blog/wasp-nests` — "wasp nest"
- **Estimate:** 30.7 clicks/month Nov-Mar (12.3-92.2); 209.3 May-Aug (83.7-628); model estimates, not measurements. Factors: D 0.917 (Trends 0.917 and Ahrefs 0.536 agree within 3x: Trends used), Nov-Mar 0.32, May-Aug 1.82 (from hornet nest, yellow jacket nest, wasp nest), format photo ID roundup / sorter (several candidates on one page) 2.5, SERP 1.2, Search Console 1.
- **Confidence:** high (results page read on Google; Trends and Ahrefs agree). **Build:** Jan-Feb (summer earner: build in Jan-Feb so it is indexed and aged by May). **Status:** taxonomy.
- **Variants:** what does a wasp nest look like; hornet nest; yellow jacket nest; paper wasp nest; wasp nest vs hornet nest; bald faced hornet nest; mud dauber nest. **Audience:** US and Canadian readers.
- **Demand evidence:** Trends hornet nest + yellow jacket nest + what does a wasp nest look like + wasp nest x0.5 = 0.917. Ahrefs US: wasp nest 56,000; hornet nest 20,000; yellow jacket nest 16,000; what does a wasp nest look like 1,400; yellow jackets in ground 350 (family 93,750 = 0.536 ratio units); target KD 5, traffic potential 4,500, parent topic "wasp nest". Search Console: Only product queries (wasp nest spray, killer) on the Canadian product pages; they do not count.
- **Page 1:** Google, Oct 16 ("wasp nest"); features: AI Overview, People also ask, image pack, videos, Things to know. bestbees.com, mosquitojoe.com, Moxie, Viking Pest, buzzaboutbees.net, MSU extension (also "hornet nest": Gurney's, Orkin, American Pest, Pestmaster, YouTube, House Digest nest-ID list, Merriam-Webster). Read: bee and pest-company blogs: beatable.
- **Why it should earn the click:** Which insect built this nest decides how dangerous it is: paper umbrella (paper wasp), grey football (bald-faced hornet), hole in the ground (yellowjackets), mud tubes (mud daubers), wax comb (bees). A photo sorter is the natural answer.
- **Overlap:** `/blog/how-to-get-rid-of-ground-wasps-canada` (ground nests (Canadian control page, 72,018 impressions in 90 days)) -> link; that page is control, this is nest identification; `/blog/how-to-get-rid-of-wasps-canada` (Canadian control page) -> link.
- **Decision:** Promote the taxonomy's wasp-nest-identification (p2): build in Jan-Feb so it is aged for May-August (Nov-Mar 0.32, May-Aug 1.82). Bare "wasp nest" counted at half (removal and spray searches).
- **Photos:** in hand: bald-faced hornet nest, mud dauber on nest, cicada killer burrow, paper wasps, eastern yellowjacket, carpenter bee hole, mining bee burrow; need a paper wasp comb and a yellowjacket ground entrance.

### 25. `/blog/wasp-vs-hornet` — "wasp vs hornet"
- **Estimate:** 21.9 clicks/month Nov-Mar (8.8-65.6); 138.9 May-Aug (55.6-416.8); model estimates, not measurements. Factors: D 0.469 (Trends 0.469 and Ahrefs 0.254 agree within 3x: Trends used), Nov-Mar 0.33, May-Aug 1.76 (from wasp vs hornet, bee vs wasp, wasp vs yellow jacket, types of wasps), format photo ID roundup / sorter (several candidates on one page) 2.5, SERP 1.15, Search Console 1.
- **Confidence:** high (results page read on Google; Trends and Ahrefs agree). **Build:** Jan-Feb (summer earner: build in Jan-Feb so it is indexed and aged by May). **Status:** taxonomy.
- **Variants:** bee vs wasp; hornet vs yellow jacket; wasp vs yellow jacket; types of wasps; wasp vs hornet vs yellow jacket. **Audience:** US and Canadian readers.
- **Demand evidence:** Trends wasp vs hornet + bee vs wasp + hornet vs yellow jacket + wasp vs yellow jacket + types of wasps = 0.469. Ahrefs US: wasp vs hornet 18,000; bee vs wasp 6,200; hornet vs yellow jacket 3,300; types of wasps 17,000 (family 44,500 = 0.254 ratio units); target KD 0, traffic potential 2,800, parent topic "hornet nest vs wasp nest". Search Console: Nothing.
- **Page 1:** Google, Oct 16 ("wasp vs hornet"); features: AI Overview, People also ask, videos, Discussions and forums, What people are saying. Terminix, Britannica, Western Exterminator, Joshua's Pest Control, The Spruce, diypestcontrol.com. Read: pest brands, Britannica and a home magazine.
- **Why it should earn the click:** An identification chart of 8 look-alike stinging insects (honey bee, bumble bee, carpenter bee, paper wasp, yellowjacket, bald-faced hornet, European hornet, mud dauber) works like the site's look-alike pages.
- **Overlap:** `/blog/wasp-nests` (nests) -> link both ways; this page is the insects.
- **Decision:** Build in Jan-Feb (Nov-Mar 0.33, May-Aug 1.75). The taxonomy planned it as a hub ("wasps-and-bees"); build it instead as an 8-insect identification chart, which targets real searches.
- **Photos:** in hand: 17 wasp/hornet records + 8 bee records.

### 26. `/blog/bee-sting-vs-wasp-sting` — "bee sting vs wasp sting"
- **Estimate:** 10.3 clicks/month Nov-Mar (4.1-30.8); 75.5 May-Aug (30.2-226.4); model estimates, not measurements. Factors: D 0.762 (Trends 1.829 and Ahrefs 0.317 disagree 5.8x: geometric mean used), Nov-Mar 0.29, May-Aug 1.8 (from yellow jacket sting, bee sting, wasp sting), format bite / sting identification with photos 2, SERP 0.6, Search Console 1.
- **Confidence:** low (results page not checked; Trends and Ahrefs disagree (midpoint used); authority results page). **Build:** Jan-Feb (summer earner: build in Jan-Feb so it is indexed and aged by May). **Status:** taxonomy.
- **Variants:** bee sting; wasp sting; yellow jacket sting; what does a wasp sting look like. **Audience:** US and Canadian readers.
- **Demand evidence:** Trends yellow jacket sting + bee sting x0.5 + wasp sting x0.5 = 1.829. Ahrefs US: bee sting vs wasp sting 2,000; bee sting x0.5 54,000; wasp sting x0.5 53,000 (family 55,500 = 0.317 ratio units); target KD 4, traffic potential 800, parent topic "bee sting vs wasp sting". Search Console: Nothing.
- **Page 1:** not checked. Read: not checked; "bee sting" and "wasp sting" are first-aid searches where medical publishers rank (Ahrefs KD 28 for wasp sting).
- **Why it should earn the click:** Bite/sting format is the site's best converter; but medical publishers hold page 1.
- **Overlap:** `/learn/bug-bites` (bite and sting chart) -> link; this page is stings only.
- **Decision:** Jan-Feb build, medical sources only (Mayo/AAAAI/CDC), no treatment advice beyond first aid and when to call 911. Heads counted at half (treatment searches).
- **Photos:** in hand: honey bee stinging, io caterpillar sting swelling; need wasp sting reaction (PD).

### 27. `/blog/horse-flies` — "horse fly"
- **Estimate:** 10.8 clicks/month Nov-Mar (4.3-32.5); 55.1 May-Aug (22.1-165.4); model estimates, not measurements. Factors: D 0.656 (Trends 0.656 and Ahrefs 0.463 agree within 3x: Trends used), Nov-Mar 0.44, May-Aug 1.86 (from horse fly), format photo ID of one thing (species, eggs, nest, damage) 1, SERP 0.7, Search Console 1.3.
- **Confidence:** high (results page not checked; Trends and Ahrefs agree; the site already ranks for the topic in Canada). **Build:** Jan-Feb (summer earner: build in Jan-Feb so it is indexed and aged by May). **Status:** taxonomy.
- **Variants:** horse flies; horse fly bite; deer fly vs horse fly; how to get rid of horse flies. **Audience:** US readers; regional pair with /blog/deer-flies-horse-flies-ontario.
- **Demand evidence:** Trends horse fly = 0.656. Ahrefs US: horse fly 73,000; horse flies 8,100 (family 81,100 = 0.463 ratio units); target KD 11, traffic potential 27,000, parent topic "horse fly". Search Console: Canadian edition deer-flies-horse-flies-ontario: 22,045 impressions in 90 days at 6.7; horse-fly-and-deer-fly-bite-treatment 43,852 at 6.8.
- **Page 1:** not checked. Read: not checked; species head term (the 10 checked in next-50 averaged 0.72).
- **Why it should earn the click:** Visual ID plus "does it bite / why so painful"; the Canadian editions already earn 2-3x the site median.
- **Overlap:** `/blog/deer-flies-horse-flies-ontario` (Canadian edition) -> regional pair (hreflang), as the taxonomy planned (deer-fly-vs-horse-fly, p1); `/blog/horse-fly-and-deer-fly-bite-treatment` (bites) -> link.
- **Decision:** Build in Jan-Feb for summer (Nov-Mar 0.44, May-Aug 1.86). This is the taxonomy's deer-fly-vs-horse-fly page, re-aimed at the bigger "horse fly" query.
- **Photos:** check photos.json (deer fly/horse fly photos exist for the Canadian page).

### 28. `/blog/maggots` — "maggots"
- **Estimate:** 9.4 clicks/month Nov-Mar (3.8-28.3); 81.3 May-Aug (32.5-243.9); model estimates, not measurements. Factors: D 1.055 (Trends 1.055 and Ahrefs 0.668 agree within 3x: Trends used), Nov-Mar 0.28, May-Aug 1.97 (from maggots in trash can, maggots), format photo ID of one thing (species, eggs, nest, damage) 1, SERP 1, Search Console 1.
- **Confidence:** high (results page read on Google; Trends and Ahrefs agree). **Build:** Jan-Feb (summer earner: build in Jan-Feb so it is indexed and aged by May). **Status:** new.
- **Variants:** where do maggots come from; maggots in house; maggots in trash can; maggots on floor; fly larvae. **Audience:** US and Canadian readers.
- **Demand evidence:** Trends maggots in trash can + maggots in house + maggots x0.5 = 1.055. Ahrefs US: maggots 95,000; where do maggots come from 10,000; maggots in trash can 5,000; maggots in house 1,400; fly larvae x0.5 11,000 (family 116,900 = 0.668 ratio units); target KD 17, traffic potential 23,000, parent topic "maggots". Search Console: Only "mosquito maggots" (95 impressions, lands on mosquito larvae).
- **Page 1:** Google, Oct 16 ("maggots in house"); features: AI Overview, People also ask, image pack, videos, What people are saying, Things to know. Reddit, diypestcontrol.com, WebMD, JC Ehrlich, Cat's Eye Pest, Quora; head term "maggots": Wikipedia, Britannica, WebMD, diypestcontrol.com, Reddit (no knowledge panel). Read: situational searches are weak; the head term has Wikipedia and Britannica first but beatable results below.
- **Why it should earn the click:** "Where did these come from" is the core question; the answer (a fly laid eggs on X within the last day) plus photos of larvae vs other worms earns the click.
- **Overlap:** `/blog/mosquito-larvae-identification` ("mosquito maggots/worms" queries) -> link; different insect.
- **Decision:** Build in Jan-Feb (summer-peaked: Nov-Mar 0.49, May-Aug 1.63), photo-led: what maggots are, where they come from, trash can, floor, kitchen. Head "maggots" counted at half (polluted: Slipknot fans are "maggots").
- **Photos:** none on record: need blow fly larvae/maggots (PD/CC0).

### 29. `/blog/brown-recluse` — "brown recluse"
- **Estimate:** 11.9 clicks/month Nov-Mar (4.7-35.6); 43.9 May-Aug (17.5-131.6); model estimates, not measurements. Factors: D 2.013 (Trends 2.013 and Ahrefs 2.189 agree within 3x: Trends used), Nov-Mar 0.5, May-Aug 1.54 (from brown recluse), format photo ID of one thing (species, eggs, nest, damage) 1, SERP 0.5, Search Console 1.
- **Confidence:** medium (results page read on Google; Trends and Ahrefs agree; authority results page). **Build:** Jan-Feb (summer earner: build in Jan-Feb so it is indexed and aged by May). **Status:** queued.
- **Variants:** what does a brown recluse look like; brown recluse range. **Audience:** US readers.
- **Demand evidence:** Trends brown recluse + -brown recluse bite = 2.013. Ahrefs US: brown recluse 383,000 (family 383,000 = 2.189 ratio units); target KD 31, traffic potential 25,000, parent topic "brown recluse spider". Search Console: 11 impressions.
- **Page 1:** Google, read by next-50 on Oct 16 ("brown recluse"); features: knowledge panel, People also ask. Wikipedia, Univ. of Kentucky, poisonhelp.org, Univ. of Arizona, Orkin, Missouri DoC, Oklahoma wildlife. Read: authority throughout.
- **Overlap:** `/blog/brown-recluse-look-alikes` (ID) -> live; this is the species page.
- **Decision:** KEEP but late (authority head term; summer 1.54).
- **Photos:** in hand.

### 30. `/blog/stinging-caterpillars` — "fuzzy caterpillar"
- **Estimate:** 28.5 clicks/month Nov-Mar (11.4-85.6); 58.2 May-Aug (23.3-174.5); model estimates, not measurements. Factors: D 0.39 (Trends 0.390 and Ahrefs 0.162 agree within 3x: Trends used), Nov-Mar 0.55, May-Aug 0.93 (from fuzzy caterpillar, puss caterpillar, woolly bear caterpillar), format photo ID roundup / sorter (several candidates on one page) 2.5, SERP 1, Search Console 1.
- **Confidence:** medium (results page read on Google; Trends and Ahrefs agree; its peak (September-October) falls outside both windows, so both estimates rest on shoulder months). **Build:** Jan-Feb (peaks September-October, outside both windows; build by July). **Status:** taxonomy.
- **Variants:** stinging caterpillars; puss caterpillar; is this fuzzy caterpillar poisonous; woolly bear caterpillar; hickory tussock moth caterpillar. **Audience:** US readers.
- **Demand evidence:** Trends fuzzy caterpillar + puss caterpillar + woolly bear caterpillar x0.5 = 0.39. Ahrefs US: fuzzy caterpillar 9,100; puss caterpillar 19,000; stinging caterpillars 250 (family 28,350 = 0.162 ratio units); target KD 0, traffic potential 2,500, parent topic "yellow fuzzy caterpillar". Search Console: Nothing.
- **Page 1:** Google, Oct 16 ("fuzzy caterpillar"); features: AI Overview, People also ask, videos. mybeautifulworldblog.com, Penn State extension, Wikipedia (woolly bear), weather.gov, Wildlife Trusts, Reddit, UW-Milwaukee, Fox 13 news. Read: mixed, with a blog and Reddit on page 1.
- **Why it should earn the click:** "Is this fuzzy caterpillar poisonous?" is a photo question with a health edge.
- **Overlap:** `/learn/bug-bites` (caterpillar stings) -> link.
- **Decision:** Build by July (peaks September-October; Nov-Mar 0.52). The taxonomy page "stinging-caterpillars" (p3), retitled around the bigger "fuzzy caterpillar" search.
- **Photos:** in hand: puss, saddleback, io (and its sting swelling), buck moth, hag moth caterpillars.

### `/blog/baby-snakes` — "baby snakes"
- **Estimate:** 15.5 clicks/month Nov-Mar (6.2-46.5); 43.4 May-Aug (17.4-130.2); model estimates, not measurements. Factors: D 0.108 (Trends 0.416 and Ahrefs 0.028 disagree 14.9x: geometric mean used), Nov-Mar 0.56, May-Aug 1.32 (from baby snakes, baby rattlesnake), format photo ID roundup / sorter (several candidates on one page) 2.5, SERP 1, Search Console 1.
- **Confidence:** low (results page not checked; Trends and Ahrefs disagree (midpoint used); outside the site's current topics). **Build:** Jan-Feb (snake family; after copperhead-look-alikes). **Status:** new; not in the 30: only one Ahrefs volume and no results page check; build only if copperhead-look-alikes draws impressions.
- **Variants:** baby rattlesnake; baby rat snake; baby garter snake; baby snake identification; small snakes in yard. **Audience:** US readers.
- **Demand evidence:** Trends baby snakes + baby rattlesnake + baby rat snake + baby garter snake = 0.416. Ahrefs US: baby snakes 4,900 (family 4,900 = 0.028 ratio units); target KD 0, traffic potential 100, parent topic "baby snakes". Search Console: Nothing.
- **Page 1:** not checked. Read: not checked; Ahrefs shows an image pack and AI Overview.
- **Why it should earn the click:** Photo sorter of small snakes found in yards and garages.
- **Overlap:** `/blog/copperhead-look-alikes` (baby copperheads) -> summary + link; this page covers other baby snakes.
- **Decision:** Later (after copperhead-look-alikes). Ahrefs measured only "baby snakes" (4,900), so the blend leans on Trends here. Owner's call: Snakes: new family.
- **Photos:** none on record.

### `/blog/rat-snakes` — "rat snake"
- **Estimate:** 13.2 clicks/month Nov-Mar (5.3-39.6); 38.1 May-Aug (15.2-114.2); model estimates, not measurements. Factors: D 0.883 (Trends 0.883 and Ahrefs 0.406 agree within 3x: Trends used), Nov-Mar 0.6, May-Aug 1.44 (from rat snake), format photo ID of one thing (species, eggs, nest, damage) 1, SERP 0.7, Search Console 1.
- **Confidence:** low (results page not checked; Trends and Ahrefs agree; outside the site's current topics). **Build:** now (winter earner (Nov-Mar factor >= 0.45 and >= 12 clicks a month in winter)). **Status:** new; not in the 30: species head term, results page not checked; snakes are a new family.
- **Variants:** black rat snake; rat snake vs copperhead; are rat snakes venomous. **Audience:** US readers.
- **Demand evidence:** Trends rat snake = 0.883. Ahrefs US: rat snake 71,000 (family 71,000 = 0.406 ratio units); target KD 4, traffic potential 11,000, parent topic "rat snake". Search Console: Nothing.
- **Page 1:** not checked. Read: not checked; species head term.
- **Why it should earn the click:** Species page.
- **Overlap:** `/blog/copperhead-look-alikes` (rat snake section) -> link.
- **Decision:** Later; species head term. Owner's call: Snakes: new family.
- **Photos:** none.

### `/blog/lawn-grubs` — "grubs in lawn"
- **Estimate:** 14.9 clicks/month Nov-Mar (5.9-44.6); 28.9 May-Aug (11.6-86.7); model estimates, not measurements. Factors: D 0.404 (Trends 0.819 and Ahrefs 0.199 disagree 4.1x: geometric mean used), Nov-Mar 0.7, May-Aug 1.13 (from grubs), format identification + how-to (control) 1, SERP 1, Search Console 1.
- **Confidence:** medium (results page read on Google; Trends and Ahrefs disagree (midpoint used)). **Build:** now (winter earner (Nov-Mar factor >= 0.45 and >= 12 clicks a month in winter)). **Status:** new; not in the 30: ranked below the 30.
- **Variants:** grubs; grub worms; lawn grubs; grub damage; when to treat for grubs. **Audience:** US and Canadian readers.
- **Demand evidence:** Trends grubs = 0.819. Ahrefs US: grubs 24,000; grubs in lawn 7,200; grub worms 3,700 (family 34,900 = 0.199 ratio units); target KD 3, traffic potential 2,300, parent topic "lawn grubs". Search Console: Canadian "grub" queries are tiny (skill rule 3: Ahrefs Canada is fiction here); US Trends is real (0.82).
- **Page 1:** Google, Oct 16 ("grubs in lawn"); features: AI Overview, People also ask, videos, What people are saying. LawnStarter, UNH extension, TruGreen, Wisconsin extension, MSU, Lawn Doctor. Read: lawn brands and extension pages.
- **Why it should earn the click:** Identify the grub (Japanese beetle, June beetle, masked chafer), the damage, the timing.
- **Overlap:** `/blog/lawn-pest-control` ("How do you check for white grubs?") -> keep the summary there; link here; `/blog/june-bugs-ontario` (grubs of June beetles) -> link.
- **Decision:** Build in Jan-Feb (peaks April and September). Trends "grubs" is partly the Hollow Knight game, so the midpoint is used.
- **Photos:** in hand: Japanese beetle grub; need June beetle and masked chafer grubs.

### `/blog/copperheads` — "copperhead"
- **Estimate:** 12.6 clicks/month Nov-Mar (5-37.7); 31.1 May-Aug (12.4-93.3); model estimates, not measurements. Factors: D 1.261 (Trends 2.281 and Ahrefs 0.697 disagree 3.3x: geometric mean used), Nov-Mar 0.67, May-Aug 1.38 (from copperhead), format photo ID of one thing (species, eggs, nest, damage) 1, SERP 0.5, Search Console 1.
- **Confidence:** low (results page read on Google; Trends and Ahrefs disagree (midpoint used); authority results page; outside the site's current topics). **Build:** now (winter earner (Nov-Mar factor >= 0.45 and >= 12 clicks a month in winter)). **Status:** new; not in the 30: head term with knowledge panel and Wikipedia; build the look-alike page first.
- **Variants:** copperhead snake; copperhead bite; where do copperheads live. **Audience:** US readers.
- **Demand evidence:** Trends copperhead = 2.281. Ahrefs US: copperhead 122,000 (family 122,000 = 0.697 ratio units); target KD 0, traffic potential 150, parent topic "copperhead venom". Search Console: Nothing.
- **Page 1:** Google, Oct 16 ("copperhead"); features: knowledge panel, People also ask, videos, What people are saying, Things to know. Wikipedia, Smithsonian National Zoo, UGA field report, iNaturalist, NC Wildlife, LiveScience, Orianne Society. Read: knowledge panel + Wikipedia + authority throughout.
- **Why it should earn the click:** Species page; clicks would come from the long tail.
- **Overlap:** `/blog/copperhead-look-alikes` (identification) -> look-alikes first; this page later.
- **Decision:** Not now: head term with knowledge panel and Wikipedia; Trends is inflated by the song "Copperhead Road", so the Trends/Ahrefs midpoint is used. Owner's call: Snakes: new family.
- **Photos:** none on record.

### `/blog/yellow-jackets` — "yellow jacket"
- **Estimate:** 12.9 clicks/month Nov-Mar (5.2-38.7); 30.1 May-Aug (12-90.2); model estimates, not measurements. Factors: D 0.79 (Trends 1.458 and Ahrefs 0.429 disagree 3.4x: geometric mean used), Nov-Mar 0.62, May-Aug 1.2 (from yellow jacket), format photo ID of one thing (species, eggs, nest, damage) 1, SERP 0.7, Search Console 1.
- **Confidence:** low (results page not checked; Trends and Ahrefs disagree (midpoint used)). **Build:** now (winter earner (Nov-Mar factor >= 0.45 and >= 12 clicks a month in winter)). **Status:** taxonomy; not in the 30: head term polluted (clothing, gauges); covered by wasp-nests and wasp-vs-hornet.
- **Variants:** yellow jacket nest; yellow jacket sting; yellow jackets in ground. **Audience:** US and Canadian readers.
- **Demand evidence:** Trends yellow jacket x0.5 = 1.458. Ahrefs US: yellow jacket 75,000 (family 75,000 = 0.429 ratio units); target KD 19, traffic potential 900, parent topic "yellow jacket gauges". Search Console: Nothing.
- **Page 1:** not checked. Read: not checked; species head term, polluted (clothing, gauges: Ahrefs parent topic "yellow jacket gauges").
- **Why it should earn the click:** Species ID.
- **Overlap:** `/blog/wasp-nests` (yellow jacket nests) -> link.
- **Decision:** Later; polluted head term.
- **Photos:** in hand: eastern yellowjacket.

### `/blog/tiny-white-bugs` — "tiny white bugs"
- **Estimate:** 10.8 clicks/month Nov-Mar (4.3-32.4); 31.6 May-Aug (12.7-94.9); model estimates, not measurements. Factors: D 0.05 (Trends 0.127 and Ahrefs 0.019 disagree 6.5x: geometric mean used), Nov-Mar 0.58, May-Aug 1.42 (from tiny white bugs), format photo ID roundup / sorter (several candidates on one page) 2.5, SERP 1, Search Console 1.
- **Confidence:** low (results page not checked; Trends and Ahrefs disagree (midpoint used)). **Build:** Jan-Feb (summer earner: build in Jan-Feb so it is indexed and aged by May). **Status:** replace; not in the 30: ranked below the 30.
- **Variants:** tiny white bugs in house; tiny white bugs in bathroom; tiny white bugs on plants; booklice; white bugs in soil. **Audience:** US and Canadian readers.
- **Demand evidence:** Trends tiny white bugs = 0.127. Ahrefs US: tiny white bugs 3,400 (family 3,400 = 0.019 ratio units); target KD 0, traffic potential 10, parent topic "little white bugs in garden". Search Console: Nothing.
- **Page 1:** not checked. Read: not checked.
- **Why it should earn the click:** Sorter: booklice, mites, springtails (white), mealybugs, mold mites, termites.
- **Overlap:** `/blog/booklice` (queued wave 4 page) -> REPLACE: booklice become a section (its head term has a knowledge panel and Wikipedia); `/blog/houseplant-bugs` (mealybugs, white soil bugs) -> link.
- **Decision:** Build now (Nov-Mar 0.58). Replaces the queued booklice page.
- **Photos:** in hand: booklouse; need springtail, mold mite (scout).

### `/blog/types-of-gnats` — "gnats vs fruit flies"
- **Estimate:** 11.9 clicks/month Nov-Mar (4.7-35.6); 29.3 May-Aug (11.7-87.8); model estimates, not measurements. Factors: D 0.047 (Trends 0.047 and Ahrefs 0.031 agree within 3x: Trends used), Nov-Mar 0.66, May-Aug 1.35 (from fungus gnats, drain flies), format photo ID roundup / sorter (several candidates on one page) 2.5, SERP 1, Search Console 1.
- **Confidence:** high (results page read on Google; Trends and Ahrefs agree). **Build:** Jan-Feb (summer earner: build in Jan-Feb so it is indexed and aged by May). **Status:** queued; not in the 30: replaced by how-to-get-rid-of-gnats.
- **Variants:** types of gnats. **Audience:** US and Canadian readers.
- **Demand evidence:** Trends gnats vs fruit flies + types of gnats = 0.047. Ahrefs US: gnats vs fruit flies 2,700; types of gnats 2,800 (family 5,500 = 0.031 ratio units); target KD 0, traffic potential 6,400, parent topic "fruit flies vs gnats". Search Console: "types of gnats" 22 impressions.
- **Page 1:** Google, read by next-50 on Oct 16 ("gnats vs fruit flies"); features: AI Overview, People also ask, image pack, videos. Orkin, jenreesources.com, Western Exterminator, growarber.com, Breda Pest. Read: beatable but six result features.
- **Overlap:** `/blog/how-to-get-rid-of-gnats` (umbrella page) -> REPLACED by how-to-get-rid-of-gnats.
- **Decision:** REPLACE with how-to-get-rid-of-gnats (same sorter, 50x the demand).

### `/blog/fire-ant-stings` — "fire ant bites"
- **Estimate:** 11 clicks/month Nov-Mar (4.4-33); 28.9 May-Aug (11.6-86.7); model estimates, not measurements. Factors: D 0.189 (Trends 0.330 and Ahrefs 0.109 disagree 3.0x: geometric mean used), Nov-Mar 0.63, May-Aug 1.38 (from fire ants), format bite / sting identification with photos 2, SERP 0.6, Search Console 1.
- **Confidence:** low (results page read on Google; Trends and Ahrefs disagree (midpoint used); authority results page). **Build:** Jan-Feb (summer earner: build in Jan-Feb so it is indexed and aged by May). **Status:** taxonomy; not in the 30: ranked below the 30.
- **Variants:** fire ant bites pictures; fire ant bites treatment; fire ant bites on dogs. **Audience:** US readers.
- **Demand evidence:** Trends fire ants x0.5 = 0.33. Ahrefs US: fire ant bites 19,000 (family 19,000 = 0.109 ratio units); target KD 9, traffic potential 14,000, parent topic "fire ant bites". Search Console: Nothing.
- **Page 1:** Google, Oct 16 ("fire ant bites"); features: AI Overview, People also ask, image pack, videos, What people are saying, Things to know. Cleveland Clinic, WebMD, Mississippi State extension, a pediatric clinic, fireants.org.au, an urgent-care clinic. Read: medical publishers and clinics.
- **Why it should earn the click:** Bite format.
- **Overlap:** `/blog/red-ants` (fire ant ID) -> link; `/blog/do-ants-bite` (which ants sting) -> link.
- **Decision:** Jan-Feb build; medical sources only.
- **Photos:** check record (red imported fire ant).

### `/blog/no-see-ums` — "no see ums"
- **Estimate:** 9.7 clicks/month Nov-Mar (3.9-29.2); 30 May-Aug (12-90.1); model estimates, not measurements. Factors: D 0.285 (Trends 0.285 and Ahrefs 0.240 agree within 3x: Trends used), Nov-Mar 0.56, May-Aug 1.44 (from no see ums), format photo ID of one thing (species, eggs, nest, damage) 1, SERP 0.75, Search Console 1.3.
- **Confidence:** high (results page read on Google; Trends and Ahrefs agree; the site already ranks for the topic in Canada). **Build:** Jan-Feb (summer earner: build in Jan-Feb so it is indexed and aged by May). **Status:** queued; not in the 30: ranked below the 30.
- **Variants:** noseeums; biting midges. **Audience:** US readers; regional pair.
- **Demand evidence:** Trends no see ums = 0.285. Ahrefs US: no see ums 42,000 (family 42,000 = 0.24 ratio units); target KD 10, traffic potential 22,000, parent topic "no see ums". Search Console: 11,597 impressions in 90 days at 6.4 for the taxonomy topic.
- **Page 1:** Google, Oct 16 ("no see ums"); features: knowledge panel, People also ask, videos, What people are saying. Wikipedia, UF/IFAS, Southern Living, Univ. of Arizona, bestbeebrothers, moshield.com, UC ANR. Read: knowledge panel and Wikipedia, then a weaker middle.
- **Overlap:** `/blog/no-see-um-bites` (bites) -> link.
- **Decision:** KEEP, Jan-Feb (summer).
- **Photos:** being sourced.

### `/blog/black-widow-spiders` — "black widow spider"
- **Estimate:** 10.4 clicks/month Nov-Mar (4.2-31.2); 28.2 May-Aug (11.3-84.6); model estimates, not measurements. Factors: D 1.077 (Trends 1.077 and Ahrefs 1.006 agree within 3x: Trends used), Nov-Mar 0.6, May-Aug 1.35 (from black widow spider), format photo ID of one thing (species, eggs, nest, damage) 1, SERP 0.5, Search Console 1.
- **Confidence:** medium (results page read on Google; Trends and Ahrefs agree; authority results page). **Build:** Jan-Feb (summer earner: build in Jan-Feb so it is indexed and aged by May). **Status:** queued; not in the 30: ranked below the 30.
- **Variants:** black widow male; brown widow vs black widow. **Audience:** US and Canadian readers.
- **Demand evidence:** Trends black widow spider = 1.077. Ahrefs US: black widow spider 176,000 (family 176,000 = 1.006 ratio units); target KD 30, traffic potential 33,000, parent topic "black widow spider". Search Console: 27 impressions.
- **Page 1:** Google, read by next-50 on Oct 16 ("black widow spider"); features: knowledge panel. Wikipedia, UC IPM, NatGeo Kids, WSU, NC State, Missouri DoC, MedlinePlus. Read: authority throughout.
- **Overlap:** `/blog/black-spiders` (colour sorter) -> link.
- **Decision:** KEEP but late (authority).
- **Photos:** in hand.

### `/blog/cicada-killers` — "cicada killer"
- **Estimate:** 3.3 clicks/month Nov-Mar (1.3-9.9); 35.5 May-Aug (14.2-106.6); model estimates, not measurements. Factors: D 0.321 (Trends 0.321 and Ahrefs 0.269 agree within 3x: Trends used), Nov-Mar 0.25, May-Aug 2.23 (from cicada killer), format photo ID of one thing (species, eggs, nest, damage) 1, SERP 0.7, Search Console 1.
- **Confidence:** medium (results page not checked; Trends and Ahrefs agree). **Build:** Jan-Feb (summer earner: build in Jan-Feb so it is indexed and aged by May). **Status:** taxonomy; not in the 30: ranked below the 30.
- **Variants:** cicada killer wasp; cicada killer sting; cicada killer nest. **Audience:** US readers.
- **Demand evidence:** Trends cicada killer = 0.321. Ahrefs US: cicada killer 47,000 (family 47,000 = 0.269 ratio units); target KD 0, traffic potential 150, parent topic "biggest wasp". Search Console: Nothing.
- **Page 1:** not checked. Read: not checked; species head term.
- **Why it should earn the click:** Huge wasp, alarming; photo + "does it sting".
- **Overlap:** `/blog/holes-in-yard` (burrows in lawns) -> link.
- **Decision:** Later; July-August only (Nov-Mar 0.25).
- **Photos:** in hand: cicada killer, burrow.

### `/blog/paper-wasps` — "paper wasp"
- **Estimate:** 6.5 clicks/month Nov-Mar (2.6-19.6); 31.2 May-Aug (12.5-93.5); model estimates, not measurements. Factors: D 0.422 (Trends 0.422 and Ahrefs 0.371 agree within 3x: Trends used), Nov-Mar 0.43, May-Aug 1.71 (from paper wasp), format photo ID of one thing (species, eggs, nest, damage) 1, SERP 0.7, Search Console 1.
- **Confidence:** medium (results page not checked; Trends and Ahrefs agree). **Build:** Jan-Feb (summer earner: build in Jan-Feb so it is indexed and aged by May). **Status:** taxonomy; not in the 30: ranked below the 30.
- **Variants:** paper wasp nest; are paper wasps aggressive; paper wasp sting. **Audience:** US and Canadian readers.
- **Demand evidence:** Trends paper wasp = 0.422. Ahrefs US: paper wasp 65,000 (family 65,000 = 0.371 ratio units); target KD 4, traffic potential 27,000, parent topic "paper wasp". Search Console: Nothing.
- **Page 1:** not checked. Read: not checked; species head term.
- **Why it should earn the click:** Species ID.
- **Overlap:** `/blog/wasp-nests` (paper wasp nests) -> link.
- **Decision:** Later (after wasp-nests and wasp-vs-hornet); summer.
- **Photos:** in hand: dark and European paper wasps.

### `/blog/huntsman-spiders` — "huntsman spider"
- **Estimate:** 12.7 clicks/month Nov-Mar (5.1-38.1); 22.8 May-Aug (9.1-68.3); model estimates, not measurements. Factors: D 0.583 (Trends 0.583 and Ahrefs 0.914 agree within 3x: Trends used), Nov-Mar 0.83, May-Aug 1.24 (from huntsman spider), format photo ID of one thing (species, eggs, nest, damage) 1, SERP 0.6, Search Console 1.
- **Confidence:** low (results page not checked; Trends and Ahrefs agree; authority results page). **Build:** now (winter earner (Nov-Mar factor >= 0.45 and >= 12 clicks a month in winter)). **Status:** new; not in the 30: ranked below the 30.
- **Variants:** huntsman spider florida; huntsman spider size; huntsman spider bite. **Audience:** US readers.
- **Demand evidence:** Trends huntsman spider = 0.583. Ahrefs US: huntsman spider 160,000 (family 160,000 = 0.914 ratio units); target KD 16, traffic potential 66,000, parent topic "huntsman spider". Search Console: Nothing.
- **Page 1:** not checked. Read: not checked; Wikipedia and Australian sources expected.
- **Why it should earn the click:** Viral species.
- **Overlap:** `/blog/house-spiders` (large house spiders) -> link.
- **Decision:** Later; most of the interest is the Australian spider (only the pantropical huntsman is established in the southern US).
- **Photos:** none.

### `/blog/scorpion-stings` — "scorpion sting"
- **Estimate:** 11.5 clicks/month Nov-Mar (4.6-34.5); 23.9 May-Aug (9.6-71.8); model estimates, not measurements. Factors: D 0.146 (Trends 0.146 and Ahrefs 0.050 agree within 3x: Trends used), Nov-Mar 0.75, May-Aug 1.3 (from scorpion sting), format bite / sting identification with photos 2, SERP 0.6, Search Console 1.
- **Confidence:** low (results page not checked; Trends and Ahrefs agree; authority results page). **Build:** Jan-Feb (summer earner: build in Jan-Feb so it is indexed and aged by May). **Status:** taxonomy; not in the 30: ranked below the 30.
- **Variants:** scorpion sting symptoms; bark scorpion sting. **Audience:** US readers.
- **Demand evidence:** Trends scorpion sting = 0.146. Ahrefs US: scorpion sting 8,800 (family 8,800 = 0.05 ratio units); target KD 17, traffic potential 6,200, parent topic "scorpion sting". Search Console: Nothing.
- **Page 1:** not checked. Read: not checked; medical results expected (KD 17).
- **Why it should earn the click:** Bite format.
- **Overlap:** `/blog/scorpions` (species) -> link.
- **Decision:** Later; poison-center sources only.
- **Photos:** in hand: bark scorpion.

### `/blog/spotted-lanternfly` — "spotted lanternfly"
- **Estimate:** 4.6 clicks/month Nov-Mar (1.8-13.8); 31.6 May-Aug (12.6-94.8); model estimates, not measurements. Factors: D 0.581 (Trends 0.581 and Ahrefs 0.566 agree within 3x: Trends used), Nov-Mar 0.3, May-Aug 1.72 (from spotted lanternfly), format photo ID of one thing (species, eggs, nest, damage) 1, SERP 0.6, Search Console 1.
- **Confidence:** low (results page not checked; Trends and Ahrefs agree; authority results page). **Build:** Jan-Feb (summer earner: build in Jan-Feb so it is indexed and aged by May). **Status:** taxonomy; not in the 30: ranked below the 30.
- **Variants:** spotted lanternfly eggs; spotted lanternfly nymph; how to kill spotted lanternfly. **Audience:** US readers.
- **Demand evidence:** Trends spotted lanternfly = 0.581. Ahrefs US: spotted lanternfly 99,000 (family 99,000 = 0.566 ratio units); target KD 43, traffic potential 48,000, parent topic "spotted lanternfly". Search Console: Nothing.
- **Page 1:** not checked. Read: not checked; state agriculture departments and universities expected (Ahrefs KD 43).
- **Why it should earn the click:** Invasive with egg-mass and nymph photo ID.
- **Decision:** Jan-Feb build for July-October (Nov-Mar 0.30).
- **Photos:** in hand: adult, egg masses, life stages.

### `/blog/springtails` — "springtails"
- **Estimate:** 9.1 clicks/month Nov-Mar (3.7-27.4); 26.4 May-Aug (10.5-79.1); model estimates, not measurements. Factors: D 0.431 (Trends 0.431 and Ahrefs 0.354 agree within 3x: Trends used), Nov-Mar 0.64, May-Aug 1.54 (from springtails), format photo ID of one thing (species, eggs, nest, damage) 1, SERP 0.65, Search Console 1.
- **Confidence:** high (results page read on Google; Trends and Ahrefs agree). **Build:** Jan-Feb (summer earner: build in Jan-Feb so it is indexed and aged by May). **Status:** queued; not in the 30: ranked below the 30.
- **Variants:** springtails in house; springtails vs fleas. **Audience:** US readers.
- **Demand evidence:** Trends springtails = 0.431. Ahrefs US: springtails 62,000 (family 62,000 = 0.354 ratio units); target KD 12, traffic potential 26,000, parent topic "springtails". Search Console: Canadian reality check: one impression a quarter at position 1.
- **Page 1:** Google, Oct 16 ("springtails"); features: knowledge panel, People also ask, videos, What people are saying, Things to know. Wikipedia, UMN extension, UC IPM, Terminix, Missouri DoC, naturespot, Reddit. Read: authority-led.
- **Overlap:** `/blog/tiny-white-bugs` (white springtails) -> link.
- **Decision:** KEEP late (authority head).
- **Photos:** need a springtail.

### `/blog/thrips` — "thrips"
- **Estimate:** 9.9 clicks/month Nov-Mar (4-29.8); 24.9 May-Aug (10-74.8); model estimates, not measurements. Factors: D 0.39 (Trends 0.390 and Ahrefs 0.314 agree within 3x: Trends used), Nov-Mar 0.68, May-Aug 1.42 (from thrips), format photo ID of one thing (species, eggs, nest, damage) 1, SERP 0.7, Search Console 1.
- **Confidence:** medium (results page not checked; Trends and Ahrefs agree). **Build:** Jan-Feb (summer earner: build in Jan-Feb so it is indexed and aged by May). **Status:** new; not in the 30: ranked below the 30.
- **Variants:** thrips on plants; how to get rid of thrips; thrips on houseplants. **Audience:** US and Canadian readers.
- **Demand evidence:** Trends thrips = 0.39. Ahrefs US: thrips 55,000 (family 55,000 = 0.314 ratio units); target KD 19, traffic potential 6,100, parent topic "thrips". Search Console: Nothing.
- **Page 1:** not checked. Read: not checked; species head term (Ahrefs KD 19).
- **Why it should earn the click:** Species/control.
- **Overlap:** `/blog/houseplant-bugs` (sorter) -> link.
- **Decision:** Later.
- **Photos:** none.

### `/blog/how-to-get-rid-of-rats` — "how to get rid of rats"
- **Estimate:** 13.8 clicks/month Nov-Mar (5.5-41.5); 20.3 May-Aug (8.1-60.9); model estimates, not measurements. Factors: D 0.202 (Trends 0.202 and Ahrefs 0.069 agree within 3x: Trends used), Nov-Mar 0.92, May-Aug 1.13 (from how to get rid of rats), format identification + how-to (control) 1, SERP 1, Search Console 1.
- **Confidence:** medium (results page not checked; Trends and Ahrefs agree). **Build:** now (winter earner (Nov-Mar factor >= 0.45 and >= 12 clicks a month in winter)). **Status:** new; not in the 30: ranked below the 30.
- **Variants:** how to get rid of rats in house; how to get rid of rats in yard; how to get rid of rats in attic. **Audience:** US readers; regional pair with /blog/how-to-get-rid-of-rats-canada.
- **Demand evidence:** Trends how to get rid of rats + how to get rid of rats in house = 0.202. Ahrefs US: how to get rid of rats 12,000 (family 12,000 = 0.069 ratio units); target KD 10, traffic potential 4,700, parent topic "how to get rid of rats". Search Console: Canadian edition: 2,086 impressions in 90 days at 11.0 (outside the bonus rule).
- **Page 1:** not checked. Read: not checked; Ahrefs shows AI Overview, discussions and shopping.
- **Why it should earn the click:** How-to with species ID first.
- **Overlap:** `/blog/how-to-get-rid-of-rats-canada` (Canadian edition) -> regional pair; `/blog/rat-vs-mouse` (ID) -> link.
- **Decision:** Build now: flat all year (Nov-Mar 0.92) and completes the US rat cluster (rat-vs-mouse and roof-rat-vs-norway-rat are live).
- **Photos:** in hand: roof rat, Norway rat, droppings.

### `/blog/bugs-in-hair` — "bugs in hair not lice"
- **Estimate:** 12.2 clicks/month Nov-Mar (4.9-36.7); 22.1 May-Aug (8.8-66.3); model estimates, not measurements. Factors: D 0.039 (Trends 0.151 and Ahrefs 0.010 disagree 14.7x: geometric mean used), Nov-Mar 0.82, May-Aug 1.23 (from bugs in hair), format photo ID roundup / sorter (several candidates on one page) 2.5, SERP 0.9, Search Console 1.
- **Confidence:** low (results page read on Google; Trends and Ahrefs disagree (midpoint used); outside the site's current topics). **Build:** now (winter earner (Nov-Mar factor >= 0.45 and >= 12 clicks a month in winter)). **Status:** new; not in the 30: owner's call (lice).
- **Variants:** bugs in hair; black bugs in hair not lice; bugs that look like lice. **Audience:** US and Canadian readers.
- **Demand evidence:** Trends bugs in hair + bugs that look like lice = 0.151. Ahrefs US: bugs in hair 1,100; bugs in hair not lice 700 (family 1,800 = 0.01 ratio units); target KD 0, traffic potential 1,400, parent topic "bugs in hair". Search Console: Nothing.
- **Page 1:** Google, Oct 16 ("bugs in hair not lice"); features: AI Overview, People also ask. Healthline, getlabtest.com, three Lice Lifters franchise pages, Reddit, Mayo Clinic, WebMD, a pediatric clinic. Read: health publishers and lice clinics.
- **Why it should earn the click:** Look-alike format (booklice, bird mites, springtails, fleas, dandruff).
- **Overlap:** `/blog/bugs-that-look-like-bed-bugs` (look-alike format) -> link.
- **Decision:** Owner's call (children's health; medical sources only). Owner's call: Lice are medical/children's health, outside the pest-company identity; next-50 left it to the owner.
- **Photos:** no lice photos on record.

### `/blog/spider-mites` — "spider mites"
- **Estimate:** 9.8 clicks/month Nov-Mar (3.9-29.5); 24.9 May-Aug (10-74.7); model estimates, not measurements. Factors: D 0.536 (Trends 0.536 and Ahrefs 0.206 agree within 3x: Trends used), Nov-Mar 0.67, May-Aug 1.41 (from spider mites), format photo ID of one thing (species, eggs, nest, damage) 1, SERP 0.6, Search Console 1.
- **Confidence:** medium (results page read on Google; Trends and Ahrefs agree; authority results page). **Build:** Jan-Feb (summer earner: build in Jan-Feb so it is indexed and aged by May). **Status:** taxonomy; not in the 30: ranked below the 30.
- **Variants:** spider mites on plants; how to get rid of spider mites; spider mites on houseplants. **Audience:** US and Canadian readers.
- **Demand evidence:** Trends spider mites = 0.536. Ahrefs US: spider mites 36,000 (family 36,000 = 0.206 ratio units); target KD 13, traffic potential 8,000, parent topic "spider mites". Search Console: Nothing.
- **Page 1:** Google, Oct 16 ("spider mites"); features: knowledge panel, People also ask, short videos, Discussions and forums, What people are saying, Things to know. UC IPM, Wikipedia, Ohio State, Missouri Botanical Garden, Rainbow EcoScience, UMN, Costa Farms. Read: authority-led.
- **Why it should earn the click:** Species/control page; much demand is cannabis growers.
- **Overlap:** `/blog/houseplant-bugs` (sorter) -> build the sorter first.
- **Decision:** Later.
- **Photos:** in hand.

### `/blog/roly-polies` — "roly poly"
- **Estimate:** 13.1 clicks/month Nov-Mar (5.2-39.3); 21.2 May-Aug (8.5-63.5); model estimates, not measurements. Factors: D 0.423 (Trends 0.423 and Ahrefs 0.238 agree within 3x: Trends used), Nov-Mar 0.86, May-Aug 1.16 (from roly poly), format photo ID of one thing (species, eggs, nest, damage) 1, SERP 0.7, Search Console 1.
- **Confidence:** medium (results page not checked; Trends and Ahrefs agree). **Build:** now (winter earner (Nov-Mar factor >= 0.45 and >= 12 clicks a month in winter)). **Status:** taxonomy; not in the 30: ranked below the 30.
- **Variants:** pill bugs; pill bugs in house; sow bugs; roly poly vs pill bug. **Audience:** US and Canadian readers.
- **Demand evidence:** Trends roly poly = 0.423. Ahrefs US: roly poly 32,000; pill bugs 9,700 (family 41,700 = 0.238 ratio units); target KD 2, traffic potential 1,900, parent topic "roly poly". Search Console: Nothing.
- **Page 1:** not checked. Read: not checked; species head term, much of it pet keeping.
- **Why it should earn the click:** Species.
- **Decision:** Later; much of the demand is kids and pet isopods.
- **Photos:** in hand: pill bug.

### `/blog/how-to-get-rid-of-wasps` — "how to get rid of wasps"
- **Estimate:** 4.4 clicks/month Nov-Mar (1.8-13.3); 30.2 May-Aug (12.1-90.5); model estimates, not measurements. Factors: D 0.096 (Trends 0.096 and Ahrefs 0.042 agree within 3x: Trends used), Nov-Mar 0.33, May-Aug 1.87 (from how to get rid of wasps), format identification + how-to (control) 1, SERP 1, Search Console 1.3.
- **Confidence:** high (results page not checked; Trends and Ahrefs agree; the site already ranks for the topic in Canada). **Build:** Jan-Feb (summer earner: build in Jan-Feb so it is indexed and aged by May). **Status:** taxonomy; not in the 30: ranked below the 30.
- **Variants:** how to get rid of wasps nest; how to get rid of yellow jackets; wasp spray. **Audience:** US readers; regional pair.
- **Demand evidence:** Trends how to get rid of wasps = 0.096. Ahrefs US: how to get rid of wasps 7,400 (family 7,400 = 0.042 ratio units); target KD 3, traffic potential 4,200, parent topic "how to get rid of wasps". Search Console: Canadian edition how-to-get-rid-of-wasps-canada: 13,973 impressions in 90 days at 9.1.
- **Page 1:** not checked. Read: not checked.
- **Why it should earn the click:** How-to with ID first.
- **Overlap:** `/blog/how-to-get-rid-of-wasps-canada` (Canadian edition) -> regional pair (no Amazon links on the US edition).
- **Decision:** Jan-Feb build (summer).
- **Photos:** in hand (wasp records).

### `/blog/scorpions` — "scorpions in house"
- **Estimate:** 11.2 clicks/month Nov-Mar (4.5-33.7); 18.7 May-Aug (7.5-56.2); model estimates, not measurements. Factors: D 0.106 (Trends 0.185 and Ahrefs 0.061 disagree 3.1x: geometric mean used), Nov-Mar 0.86, May-Aug 1.2 (from bark scorpion), format identification + how-to (control) 1, SERP 1.2, Search Console 1.
- **Confidence:** medium (results page read on Google; Trends and Ahrefs disagree (midpoint used)). **Build:** Jan-Feb (summer earner: build in Jan-Feb so it is indexed and aged by May). **Status:** taxonomy; not in the 30: ranked below the 30.
- **Variants:** bark scorpion; arizona bark scorpion; scorpions in arizona; how to get rid of scorpions. **Audience:** US readers.
- **Demand evidence:** Trends scorpions in house + bark scorpion + scorpions in arizona = 0.185. Ahrefs US: scorpions in house 100; bark scorpion 9,400; scorpions in arizona 1,100 (family 10,600 = 0.061 ratio units); target KD 0, traffic potential 700, parent topic "house scorpions". Search Console: Nothing.
- **Page 1:** Google, Oct 16 ("scorpions in house"); features: AI Overview, People also ask, image pack, videos, Things to know. Reddit, Terro, Mayday Pest, Orkin, scorpionalert.com, azpest.com, PF Harris, Urban Ex, Orkin. Read: pest companies and a forum.
- **Why it should earn the click:** Blacklight check and species ID.
- **Decision:** Later; year-round in the Southwest (Nov-Mar 0.85) but small (Ahrefs: bark scorpion 9,400, KD 26).
- **Photos:** in hand: Arizona bark scorpion (and under blacklight), striped bark scorpion, desert hairy scorpion.

### `/blog/how-to-get-rid-of-spiders` — "how to get rid of spiders"
- **Estimate:** 5.1 clicks/month Nov-Mar (2.1-15.4); 24.7 May-Aug (9.9-74.1); model estimates, not measurements. Factors: D 0.087 (Trends 0.156 and Ahrefs 0.049 disagree 3.2x: geometric mean used), Nov-Mar 0.4, May-Aug 1.61 (from how to get rid of spiders), format identification + how-to (control) 1, SERP 1, Search Console 1.3.
- **Confidence:** medium (results page not checked; Trends and Ahrefs disagree (midpoint used); the site already ranks for the topic in Canada). **Build:** Jan-Feb (summer earner: build in Jan-Feb so it is indexed and aged by May). **Status:** taxonomy; not in the 30: ranked below the 30.
- **Variants:** how to get rid of spiders in house; how to keep spiders out. **Audience:** US readers; regional pair.
- **Demand evidence:** Trends how to get rid of spiders = 0.156. Ahrefs US: how to get rid of spiders 8,500 (family 8,500 = 0.049 ratio units); target KD 2, traffic potential 7,400, parent topic "how to get rid of spiders". Search Console: Canadian edition how-to-get-rid-of-spiders-in-house-canada: 1,167 impressions in 90 days at 8.8.
- **Page 1:** not checked. Read: not checked.
- **Why it should earn the click:** How-to.
- **Overlap:** `/blog/how-to-get-rid-of-spiders-in-house-canada` (Canadian edition) -> regional pair; `/blog/how-to-keep-spiders-out-of-your-house` (prevention) -> link.
- **Decision:** Jan-Feb build (summer-fall).
- **Photos:** in hand (spiders).

### `/blog/lice-eggs` — "what do lice eggs look like"
- **Estimate:** 11.4 clicks/month Nov-Mar (4.6-34.2); 16.3 May-Aug (6.5-49); model estimates, not measurements. Factors: D 0.555 (Trends 0.555 and Ahrefs 0.310 agree within 3x: Trends used), Nov-Mar 0.92, May-Aug 1.09 (from lice eggs, what do lice look like), format photo ID of one thing (species, eggs, nest, damage) 1, SERP 0.5, Search Console 1.
- **Confidence:** low (results page read on Google; Trends and Ahrefs agree; authority results page; outside the site's current topics). **Build:** Jan-Feb (summer earner: build in Jan-Feb so it is indexed and aged by May). **Status:** new; not in the 30: owner's call (lice).
- **Variants:** lice eggs; nits vs dandruff; what do lice look like; lice eggs vs dandruff. **Audience:** US and Canadian readers.
- **Demand evidence:** Trends lice eggs + what do lice look like + nits vs dandruff + lice eggs vs dandruff = 0.555. Ahrefs US: lice eggs 29,000; what do lice eggs look like 6,900; what do lice look like 16,000; nits vs dandruff 2,300 (family 54,200 = 0.31 ratio units); target KD 0, traffic potential 1,500, parent topic "lice life cycle". Search Console: Nothing.
- **Page 1:** Google, Oct 16 ("what do lice eggs look like"); features: AI Overview, People also ask, videos. Verywell Health, Lice Clinics of America, Cleveland Clinic, CDC, Healthline, Harvard Health, CVS. Read: medical authority throughout.
- **Why it should earn the click:** Photo ID (nits vs dandruff).
- **Overlap:** `/blog/bugs-in-hair` (look-alikes) -> link.
- **Decision:** Owner's call; flat all year (Nov-Mar 0.95) but medical page 1. Owner's call: As bugs-in-hair.
- **Photos:** none on record.

### `/blog/rat-droppings` — "rat droppings"
- **Estimate:** 10.3 clicks/month Nov-Mar (4.1-31); 17.4 May-Aug (7-52.3); model estimates, not measurements. Factors: D 0.114 (Trends 0.114 and Ahrefs 0.043 agree within 3x: Trends used), Nov-Mar 0.88, May-Aug 1.24 (from rat droppings), format photo ID of droppings (image pack answers many searches) 0.8, SERP 1, Search Console 1.3.
- **Confidence:** high (results page read only in another engine; Trends and Ahrefs agree; the site already ranks for the topic in Canada). **Build:** Jan-Feb (summer earner: build in Jan-Feb so it is indexed and aged by May). **Status:** queued; not in the 30: ranked below the 30.
- **Variants:** rat poop; rat vs mouse droppings. **Audience:** US readers.
- **Demand evidence:** Trends rat droppings = 0.114. Ahrefs US: rat droppings 7,600 (family 7,600 = 0.043 ratio units); target KD 12, traffic potential 10,000, parent topic "mouse droppings". Search Console: "rat poop" 248 impressions at 8.9 with no rat page.
- **Page 1:** not checked on Google; WebSearch tool (another engine) ("rat droppings"). critterstop, realhomes, colonialpest, raising-happy-chickens, an Australian pest company. Read: pest companies and lifestyle sites (other engine).
- **Overlap:** `/blog/animal-droppings` (sorter) -> link both ways.
- **Decision:** KEEP (winter-flat).
- **Photos:** in hand.

### `/blog/black-flies` — "black flies"
- **Estimate:** 7.1 clicks/month Nov-Mar (2.8-21.2); 20.3 May-Aug (8.1-61); model estimates, not measurements. Factors: D 0.135 (Trends 0.472 and Ahrefs 0.039 disagree 12.1x: geometric mean used), Nov-Mar 0.63, May-Aug 1.51 (from black flies), format photo ID of one thing (species, eggs, nest, damage) 1, SERP 0.7, Search Console 1.3.
- **Confidence:** medium (results page not checked; Trends and Ahrefs disagree (midpoint used); the site already ranks for the topic in Canada). **Build:** Jan-Feb (summer earner: build in Jan-Feb so it is indexed and aged by May). **Status:** taxonomy; not in the 30: ranked below the 30.
- **Variants:** black fly bites; when do black flies come out; black flies vs gnats. **Audience:** US readers; regional pair with the Ontario page.
- **Demand evidence:** Trends black flies = 0.472. Ahrefs US: black flies 6,800 (family 6,800 = 0.039 ratio units); target KD 8, traffic potential 5,600, parent topic "black flies". Search Console: Canadian edition black-flies-ontario-when-they-come-out: 41,057 impressions in 90 days at 6.9.
- **Page 1:** not checked. Read: not checked; species head term.
- **Why it should earn the click:** Seasonal biter with a strong Canadian edition.
- **Overlap:** `/blog/black-flies-ontario-when-they-come-out` (Canadian edition) -> regional pair.
- **Decision:** Jan-Feb build. Trends "black flies" also counts "black flies in house" (other insects), so it was cut to the Trends/Ahrefs midpoint.
- **Photos:** check record (Canadian page photos).

### `/blog/hammerhead-worms` — "hammerhead worm"
- **Estimate:** 6.2 clicks/month Nov-Mar (2.5-18.7); 19.8 May-Aug (7.9-59.5); model estimates, not measurements. Factors: D 0.156 (Trends 0.156 and Ahrefs 0.160 agree within 3x: Trends used), Nov-Mar 0.59, May-Aug 1.57 (from hammerhead worm), format photo ID of one thing (species, eggs, nest, damage) 1, SERP 0.8, Search Console 1.
- **Confidence:** medium (results page not checked; Trends and Ahrefs agree). **Build:** Jan-Feb (summer earner: build in Jan-Feb so it is indexed and aged by May). **Status:** new; not in the 30: ranked below the 30.
- **Variants:** hammerhead worm toxic; how to kill hammerhead worms; hammerhead flatworm. **Audience:** US readers.
- **Demand evidence:** Trends hammerhead worm = 0.156. Ahrefs US: hammerhead worm 28,000 (family 28,000 = 0.16 ratio units); target KD 7, traffic potential 2,900, parent topic "hammerhead worms". Search Console: Nothing.
- **Page 1:** not checked. Read: not checked; news and extension pages expected.
- **Why it should earn the click:** Invasive, alarming, photo ID.
- **Decision:** Later.
- **Photos:** none.

### `/blog/how-to-get-rid-of-moles` — "how to get rid of moles"
- **Estimate:** 8.1 clicks/month Nov-Mar (3.2-24.3); 16.4 May-Aug (6.5-49.1); model estimates, not measurements. Factors: D 0.126 (Trends 0.126 and Ahrefs 0.065 agree within 3x: Trends used), Nov-Mar 0.76, May-Aug 1.28 (from how to get rid of moles), format identification + how-to (control) 1, SERP 0.9, Search Console 1.
- **Confidence:** medium (results page not checked; Trends and Ahrefs agree). **Build:** Jan-Feb (summer earner: build in Jan-Feb so it is indexed and aged by May). **Status:** new; not in the 30: ranked below the 30.
- **Variants:** how to get rid of moles in yard; mole vs vole; mole hills. **Audience:** US readers.
- **Demand evidence:** Trends mole vs vole + how to get rid of moles x0.5 = 0.126. Ahrefs US: how to get rid of moles 8,200; mole vs vole 3,200 (family 11,400 = 0.065 ratio units); target KD 0, traffic potential 5,600, parent topic "get rid of moles". Search Console: Nothing.
- **Page 1:** not checked. Read: not checked; Ahrefs shows a discussions box.
- **Why it should earn the click:** How-to.
- **Overlap:** `/blog/holes-in-yard` (mole section) -> link.
- **Decision:** Later. Trends counted at half ("moles on skin" pollutes it).
- **Photos:** none.

### `/blog/dust-mites` — "dust mites"
- **Estimate:** 9.9 clicks/month Nov-Mar (3.9-29.6); 14 May-Aug (5.6-42); model estimates, not measurements. Factors: D 0.778 (Trends 0.778 and Ahrefs 0.514 agree within 3x: Trends used), Nov-Mar 0.93, May-Aug 1.1 (from dust mites), format myth / quick-fact topic 0.6, SERP 0.6, Search Console 1.
- **Confidence:** low (results page read only in another engine; Trends and Ahrefs agree; authority results page). **Build:** Jan-Feb (summer earner: build in Jan-Feb so it is indexed and aged by May). **Status:** queued; not in the 30: ranked below the 30.
- **Variants:** what do dust mites look like; dust mite bites. **Audience:** US and Canadian readers.
- **Demand evidence:** Trends dust mites = 0.778. Ahrefs US: dust mites 90,000 (family 90,000 = 0.514 ratio units); target KD 71, traffic potential 12,000, parent topic "dust mites". Search Console: 356 impressions, product queries only.
- **Page 1:** not checked on Google; WebSearch tool (another engine) ("dust mites"). Wikipedia, sheppardsoftware, rememberthefilter, ColumbiaDoctors, UofM Health, HealthLinkBC, UMaine extension x2, DoMyOwn. Read: Wikipedia and health publishers (Ahrefs KD 71).
- **Overlap:** `/blog/best-air-purifier-for-dust-mites-canada` (product page) -> link.
- **Decision:** DROP to "later": KD 71 and health publishers; myth format.
- **Photos:** in hand.

### `/blog/japanese-beetles` — "japanese beetles"
- **Estimate:** 4.2 clicks/month Nov-Mar (1.7-12.6); 20.2 May-Aug (8.1-60.5); model estimates, not measurements. Factors: D 0.133 (Trends 0.315 and Ahrefs 0.057 disagree 5.6x: geometric mean used), Nov-Mar 0.49, May-Aug 1.97 (from japanese beetles), format photo ID of one thing (species, eggs, nest, damage) 1, SERP 0.7, Search Console 1.
- **Confidence:** low (results page not checked; Trends and Ahrefs disagree (midpoint used)). **Build:** Jan-Feb (summer earner: build in Jan-Feb so it is indexed and aged by May). **Status:** taxonomy; not in the 30: ranked below the 30.
- **Variants:** japanese beetle; how to get rid of japanese beetles; japanese beetle traps. **Audience:** US readers.
- **Demand evidence:** Trends japanese beetles = 0.315. Ahrefs US: japanese beetles 9,900 (family 9,900 = 0.057 ratio units); target KD 34, traffic potential 600, parent topic "japanese flying beetle". Search Console: Nothing.
- **Page 1:** not checked. Read: not checked; species head term (Ahrefs KD 34).
- **Why it should earn the click:** Species.
- **Overlap:** `/blog/june-bugs` (look-alike) -> link.
- **Decision:** Later; July only.
- **Photos:** in hand: Japanese beetle grub.

### `/blog/joro-spiders` — "joro spider"
- **Estimate:** 6.4 clicks/month Nov-Mar (2.6-19.3); 15.6 May-Aug (6.2-46.7); model estimates, not measurements. Factors: D 0.268 (Trends 0.268 and Ahrefs 0.274 agree within 3x: Trends used), Nov-Mar 0.53, May-Aug 1.07 (from joro spider), format photo ID of one thing (species, eggs, nest, damage) 1, SERP 0.7, Search Console 1.
- **Confidence:** medium (results page not checked; Trends and Ahrefs agree). **Build:** Jan-Feb (summer earner: build in Jan-Feb so it is indexed and aged by May). **Status:** taxonomy; not in the 30: ranked below the 30.
- **Variants:** joro spider bite; joro spider georgia; joro spider vs banana spider. **Audience:** US readers.
- **Demand evidence:** Trends joro spider = 0.268. Ahrefs US: joro spider 48,000 (family 48,000 = 0.274 ratio units); target KD 11, traffic potential 2,400, parent topic "joro spiders". Search Console: Nothing.
- **Page 1:** not checked. Read: not checked; news-heavy.
- **Why it should earn the click:** Invasive, visual.
- **Overlap:** `/blog/spiders-in-texas` (golden silk orb weaver look-alike) -> link.
- **Decision:** Later; news-driven, peaks August-October.
- **Photos:** check record (golden silk orb weaver in hand).

### `/blog/crickets-in-house` — "crickets in house"
- **Estimate:** 6.2 clicks/month Nov-Mar (2.5-18.7); 14.2 May-Aug (5.7-42.7); model estimates, not measurements. Factors: D 0.088 (Trends 0.214 and Ahrefs 0.036 disagree 6.0x: geometric mean used), Nov-Mar 0.63, May-Aug 1.2 (from crickets in house, camel cricket), format identification + how-to (control) 1, SERP 1, Search Console 1.
- **Confidence:** medium (results page read on Google; Trends and Ahrefs disagree (midpoint used)). **Build:** Jan-Feb (summer earner: build in Jan-Feb so it is indexed and aged by May). **Status:** replace; not in the 30: ranked below the 30.
- **Variants:** how to get rid of crickets; camel crickets; crickets in house at night; cave crickets. **Audience:** US and Canadian readers.
- **Demand evidence:** Trends crickets in house + camel cricket + how to get rid of crickets x0.5 = 0.214. Ahrefs US: crickets in house 1,600; camel crickets 2,700; how to get rid of crickets x0.5 3,900 (family 6,250 = 0.036 ratio units); target KD 9, traffic potential 500, parent topic "how to get rid of crickets inside house". Search Console: Nothing.
- **Page 1:** Google, Oct 16 ("crickets in house"); features: knowledge panel, People also ask, videos, Discussions and forums, What people are saying. Reddit, Home Depot, PestWorld, Missouri extension, Scotts, Orkin, WebMD. Read: mixed.
- **Why it should earn the click:** Control with ID.
- **Overlap:** `/blog/camel-crickets` (queued wave 4 page) -> REPLACE: camel crickets become a section.
- **Decision:** Later (late summer-fall peak: Aug-Sep).
- **Photos:** in hand: house cricket, camel cricket.

### `/blog/daddy-long-legs` — "daddy long legs"
- **Estimate:** 6.2 clicks/month Nov-Mar (2.5-18.7); 13.8 May-Aug (5.5-41.5); model estimates, not measurements. Factors: D 0.766 (Trends 0.766 and Ahrefs 0.434 agree within 3x: Trends used), Nov-Mar 0.71, May-Aug 1.31 (from daddy long legs), format myth / quick-fact topic 0.6, SERP 0.5, Search Console 1.
- **Confidence:** low (results page read only in another engine; Trends and Ahrefs agree; authority results page). **Build:** Jan-Feb (summer earner: build in Jan-Feb so it is indexed and aged by May). **Status:** queued; not in the 30: ranked below the 30.
- **Variants:** are daddy long legs spiders. **Audience:** US and Canadian readers.
- **Demand evidence:** Trends daddy long legs = 0.766. Ahrefs US: daddy long legs 76,000 (family 76,000 = 0.434 ratio units); target KD 0, traffic potential 12,000, parent topic "cellar spider". Search Console: 14 impressions.
- **Page 1:** not checked on Google; WebSearch tool (another engine) ("daddy long legs"). Wikipedia, NWF, Britannica x2, Boulder County, Merriam-Webster, Clemson, UW news. Read: authority and dictionary (other engine).
- **Overlap:** `/blog/house-spiders` (cellar spider) -> link.
- **Decision:** DROP to later: myth answered on the results page.
- **Photos:** in hand.

### `/blog/mouse-nest` — "what does a mouse nest look like"
- **Estimate:** 7.6 clicks/month Nov-Mar (3.1-22.9); 12 May-Aug (4.8-36.1); model estimates, not measurements. Factors: D 0.046 (Trends 0.093 and Ahrefs 0.023 disagree 4.1x: geometric mean used), Nov-Mar 0.85, May-Aug 1.12 (from mouse nest), format photo ID of one thing (species, eggs, nest, damage) 1, SERP 1.25, Search Console 1.
- **Confidence:** medium (results page read on Google; Trends and Ahrefs disagree (midpoint used)). **Build:** Jan-Feb (summer earner: build in Jan-Feb so it is indexed and aged by May). **Status:** queued; not in the 30: ranked below the 30.
- **Variants:** mouse nest; rat nest vs mouse nest. **Audience:** US readers.
- **Demand evidence:** Trends mouse nest = 0.093. Ahrefs US: mouse nest 3,400; what does a mouse nest look like 600 (family 4,000 = 0.023 ratio units); target KD 0, traffic potential 1,000, parent topic "mice nest". Search Console: "mice nesting in car" 16 impressions.
- **Page 1:** Google, Oct 16 ("what does a mouse nest look like"); features: AI Overview, People also ask, videos. Terminix, Orkin, Rid-A-Pest, Cooper Pest, Trutech, Reddit, iStock. Read: pest companies only.
- **Overlap:** `/blog/baby-mice` (nest of babies) -> link.
- **Decision:** KEEP (winter-flat).
- **Photos:** in hand: deer mouse nest.

### `/blog/skunk-smell-in-house` — "skunk smell in house"
- **Estimate:** 7.5 clicks/month Nov-Mar (3-22.4); 12.1 May-Aug (4.8-36.4); model estimates, not measurements. Factors: D 0.042 (Trends 0.074 and Ahrefs 0.024 disagree 3.1x: geometric mean used), Nov-Mar 0.84, May-Aug 1.14 (from skunk smell in house), format identification + how-to (control) 1, SERP 1.3, Search Console 1.
- **Confidence:** medium (results page read on Google; Trends and Ahrefs disagree (midpoint used)). **Build:** Jan-Feb (summer earner: build in Jan-Feb so it is indexed and aged by May). **Status:** new; not in the 30: ranked below the 30.
- **Variants:** house smells like skunk; skunk smell in house at night; skunk under house. **Audience:** US and Canadian readers.
- **Demand evidence:** Trends skunk smell in house + skunk under house = 0.074. Ahrefs US: skunk smell in house 3,700; house smells like skunk 450 (family 4,150 = 0.024 ratio units); target KD 0, traffic potential 2,600, parent topic "skunk smell in house". Search Console: Nothing.
- **Page 1:** Google, Oct 16 ("skunk smell in house"); features: AI Overview, People also ask, image pack. Reddit, Anchor Pest ("check for gas leak first"), Facebook, odorcide.com, JustAnswer, Quora, Servpro, YouTube. Read: forums and odor companies: weak.
- **Why it should earn the click:** Safety first (a skunk-like smell can be a gas leak), then skunk under the deck.
- **Overlap:** `/blog/raccoon-and-skunk-proofing-under-a-deck-canada` (skunk exclusion) -> link.
- **Decision:** Later: small once the cannabis meaning of "skunk smell" is removed (Trends 0.062 for the house phrase).
- **Photos:** none.

### `/blog/how-to-get-rid-of-cluster-flies` — "cluster flies"
- **Estimate:** 5.8 clicks/month Nov-Mar (2.3-17.4); 13.5 May-Aug (5.4-40.5); model estimates, not measurements. Factors: D 0.079 (Trends 0.079 and Ahrefs 0.049 agree within 3x: Trends used), Nov-Mar 0.68, May-Aug 1.32 (from cluster flies), format identification + how-to (control) 1, SERP 0.7, Search Console 1.3.
- **Confidence:** high (results page not checked; Trends and Ahrefs agree; the site already ranks for the topic in Canada). **Build:** Jan-Feb (summer earner: build in Jan-Feb so it is indexed and aged by May). **Status:** queued; not in the 30: ranked below the 30.
- **Variants:** how to get rid of cluster flies. **Audience:** US readers; regional pair.
- **Demand evidence:** Trends cluster flies = 0.079. Ahrefs US: cluster flies 8,600 (family 8,600 = 0.049 ratio units); target KD 3, traffic potential 2,600, parent topic "cluster flies". Search Console: Canadian edition: 3,075 impressions in 90 days at 7.8 and 1.59% CTR.
- **Page 1:** not checked. Read: not checked; species head term.
- **Overlap:** `/blog/flies-in-house` (cluster fly section) -> link both ways.
- **Decision:** KEEP (small).
- **Photos:** in hand.

### `/blog/hobo-spiders` — "hobo spider"
- **Estimate:** 4.1 clicks/month Nov-Mar (1.6-12.3); 15.5 May-Aug (6.2-46.5); model estimates, not measurements. Factors: D 0.207 (Trends 0.207 and Ahrefs 0.251 agree within 3x: Trends used), Nov-Mar 0.45, May-Aug 1.42 (from hobo spider), format photo ID of one thing (species, eggs, nest, damage) 1, SERP 0.6, Search Console 1.
- **Confidence:** low (results page read only in another engine; Trends and Ahrefs agree; authority results page). **Build:** Jan-Feb (summer earner: build in Jan-Feb so it is indexed and aged by May). **Status:** queued; not in the 30: ranked below the 30.
- **Variants:** -. **Audience:** US and Canadian readers.
- **Demand evidence:** Trends hobo spider = 0.207. Ahrefs US: hobo spider 44,000 (family 44,000 = 0.251 ratio units); target KD 13, traffic potential 13,000, parent topic "hobo spider". Search Console: 2 impressions.
- **Page 1:** not checked on Google; WebSearch tool (another engine) ("hobo spider"). Wikipedia x2, animalcorner, mypmp, WSU x2, Univ. of Arizona, Terminix, UC IPM. Read: authority-led (other engine).
- **Decision:** KEEP late.
- **Photos:** in hand.

### `/blog/yellow-sac-spiders` — "yellow sac spider"
- **Estimate:** 5 clicks/month Nov-Mar (2-15.1); 13.9 May-Aug (5.5-41.6); model estimates, not measurements. Factors: D 0.12 (Trends 0.120 and Ahrefs 0.109 agree within 3x: Trends used), Nov-Mar 0.58, May-Aug 1.33 (from yellow sac spider), format photo ID of one thing (species, eggs, nest, damage) 1, SERP 0.75, Search Console 1.
- **Confidence:** medium (results page read only in another engine; Trends and Ahrefs agree). **Build:** Jan-Feb (summer earner: build in Jan-Feb so it is indexed and aged by May). **Status:** queued; not in the 30: ranked below the 30.
- **Variants:** -. **Audience:** US and Canadian readers.
- **Demand evidence:** Trends yellow sac spider = 0.12. Ahrefs US: yellow sac spider 19,000 (family 19,000 = 0.109 ratio units); target KD 9, traffic potential 500, parent topic "yellow spider". Search Console: 2 impressions.
- **Page 1:** not checked on Google; WebSearch tool (another engine) ("yellow sac spider"). animalcorner, MSU, Espace pour la vie, UC Davis, WorldAtlas, earthathome, Orkin, USU. Read: mixed (other engine); Ahrefs shows no AI Overview.
- **Decision:** KEEP late.
- **Photos:** in hand.

### `/blog/booklice` — "booklice"
- **Estimate:** 4.7 clicks/month Nov-Mar (1.9-14.1); 14.3 May-Aug (5.7-42.9); model estimates, not measurements. Factors: D 0.083 (Trends 0.083 and Ahrefs 0.171 agree within 3x: Trends used), Nov-Mar 0.61, May-Aug 1.55 (from booklice), format photo ID of one thing (species, eggs, nest, damage) 1, SERP 0.8, Search Console 1.
- **Confidence:** high (results page read on Google; Trends and Ahrefs agree). **Build:** Jan-Feb (summer earner: build in Jan-Feb so it is indexed and aged by May). **Status:** queued; not in the 30: replaced by tiny-white-bugs.
- **Variants:** -. **Audience:** US and Canadian readers.
- **Demand evidence:** Trends booklice = 0.083. Ahrefs US: booklice 30,000 (family 30,000 = 0.171 ratio units); target KD 1, traffic potential 6,600, parent topic "booklice". Search Console: 2 impressions.
- **Page 1:** Google, Oct 16 ("booklice"); features: knowledge panel, People also ask, videos, Things to know. Penn State, Wikipedia, UMN, ph.health.mil, Rottler, Lowe's, Southern Living, Reddit, YouTube. Read: authority-led with retail and magazine pages.
- **Overlap:** `/blog/tiny-white-bugs` (umbrella) -> REPLACED by tiny-white-bugs (booklice section).
- **Decision:** REPLACE with tiny-white-bugs.

### `/blog/bat-bugs` — "bat bugs"
- **Estimate:** 5.6 clicks/month Nov-Mar (2.3-16.9); 12.5 May-Aug (5-37.6); model estimates, not measurements. Factors: D 0.068 (Trends 0.068 and Ahrefs 0.043 agree within 3x: Trends used), Nov-Mar 0.72, May-Aug 1.33 (from bat bugs), format photo ID of one thing (species, eggs, nest, damage) 1, SERP 0.9, Search Console 1.
- **Confidence:** high (results page read on Google; Trends and Ahrefs agree). **Build:** Jan-Feb (summer earner: build in Jan-Feb so it is indexed and aged by May). **Status:** queued; not in the 30: ranked below the 30.
- **Variants:** bat bugs vs bed bugs. **Audience:** US and Canadian readers.
- **Demand evidence:** Trends bat bugs = 0.068. Ahrefs US: bat bugs 7,600 (family 7,600 = 0.043 ratio units); target KD 2, traffic potential 1,700, parent topic "bat bugs". Search Console: 13 impressions.
- **Page 1:** Google, read by next-50 on Oct 16 ("bat bugs"); features: knowledge panel. Wikipedia, MSU, WebMD, insect.com, American Pest, Iowa State, Cooper Pest. Read: mixed.
- **Decision:** KEEP (small).
- **Photos:** in hand.

### `/blog/brown-widow-spiders` — "brown widow spider"
- **Estimate:** 4.7 clicks/month Nov-Mar (1.9-14.2); 13.5 May-Aug (5.4-40.4); model estimates, not measurements. Factors: D 0.159 (Trends 0.445 and Ahrefs 0.057 disagree 7.8x: geometric mean used), Nov-Mar 0.59, May-Aug 1.4 (from brown widow), format photo ID of one thing (species, eggs, nest, damage) 1, SERP 0.6, Search Console 1.
- **Confidence:** low (results page read only in another engine; Trends and Ahrefs disagree (midpoint used); authority results page). **Build:** Jan-Feb (summer earner: build in Jan-Feb so it is indexed and aged by May). **Status:** queued; not in the 30: ranked below the 30.
- **Variants:** brown widow egg sac. **Audience:** US readers.
- **Demand evidence:** Trends brown widow = 0.445. Ahrefs US: brown widow spider 10,000 (family 10,000 = 0.057 ratio units); target KD 1, traffic potential 4,600, parent topic "brown widow spider". Search Console: Nothing.
- **Page 1:** not checked on Google; WebSearch tool (another engine) ("brown widow spider"). Wikipedia, Clemson HGIC x2, UC Riverside x2, Purcor, Clark Pest, PCT, UF/IFAS. Read: authority-led (other engine).
- **Overlap:** `/blog/black-spiders` (widows) -> link.
- **Decision:** DROP to later: Trends counts "brown recluse vs black widow" inside "brown widow"; Ahrefs 10,000 with an authority page 1.
- **Photos:** in hand.

### `/blog/cockroach-droppings` — "cockroach poop"
- **Estimate:** 5.2 clicks/month Nov-Mar (2.1-15.7); 12.6 May-Aug (5-37.8); model estimates, not measurements. Factors: D 0.054 (Trends 0.054 and Ahrefs 0.109 agree within 3x: Trends used), Nov-Mar 0.68, May-Aug 1.35 (from cockroach eggs, baby cockroach), format photo ID of droppings (image pack answers many searches) 0.8, SERP 1.25, Search Console 1.
- **Confidence:** high (results page read on Google; Trends and Ahrefs agree). **Build:** Jan-Feb (summer earner: build in Jan-Feb so it is indexed and aged by May). **Status:** queued; not in the 30: ranked below the 30.
- **Variants:** roach poop; cockroach droppings. **Audience:** US and Canadian readers.
- **Demand evidence:** Trends cockroach poop = 0.054. Ahrefs US: cockroach poop 19,000 (family 19,000 = 0.109 ratio units); target KD 2, traffic potential 11,000, parent topic "roach poop". Search Console: 1 impression.
- **Page 1:** Google, Oct 16 ("cockroach poop"); features: AI Overview, People also ask, videos, Things to know. Fox Pest, Reddit, Terminix, pestrol.com, Dodson Bros, PF Harris, Terminate Pest. Read: pest companies and a forum only.
- **Overlap:** `/learn/cockroaches` (signs section) -> link.
- **Decision:** KEEP, move up: Ahrefs 19,000 (twice the Trends scale) and a pest-company-only page 1.
- **Photos:** need (none on record).

### `/blog/snakes-in-florida` — "snakes in florida"
- **Estimate:** 5.4 clicks/month Nov-Mar (2.1-16.1); 9.2 May-Aug (3.7-27.6); model estimates, not measurements. Factors: D 0.061 (Trends 0.173 and Ahrefs 0.022 disagree 8.0x: geometric mean used), Nov-Mar 0.83, May-Aug 1.19 (from snakes in florida), format location roundup with photos 1.2, SERP 0.65, Search Console 1.
- **Confidence:** low (results page read on Google; Trends and Ahrefs disagree (midpoint used); outside the site's current topics). **Build:** Jan-Feb (summer earner: build in Jan-Feb so it is indexed and aged by May). **Status:** new; not in the 30: authority results page; no state series.
- **Variants:** florida snakes; venomous snakes in florida; snakes in texas; snakes in georgia. **Audience:** US readers.
- **Demand evidence:** Trends snakes in florida = 0.173. Ahrefs US: snakes in florida 3,800 (family 3,800 = 0.022 ratio units); target KD 2, traffic potential 10,000, parent topic "florida snakes". Search Console: Nothing.
- **Page 1:** Google, Oct 16 ("snakes in florida"); features: AI Overview, People also ask, image pack, videos, What people are saying. Florida Museum (UF), FWC, Flickr, Wikipedia list, UF/IFAS, WFSU blog. Read: state museum, state agency, university and Wikipedia: much stronger than the spiders-in-Florida page 1.
- **Why it should earn the click:** Location roundup.
- **Overlap:** `/blog/spiders-in-florida` (state template) -> same template family.
- **Decision:** No series now. Texas (Trends 0.147, Ahrefs 2,600) and Georgia (0.063, 3,400) are smaller; Trends counts "florida snakes" and "venomous snakes in florida" here, so Ahrefs pulls the blend down. Re-decide with the spiders pilot verdict (Jan 15-31). Owner's call: Snakes: new family.
- **Photos:** none on record.

### `/blog/camel-crickets` — "camel crickets"
- **Estimate:** 4.3 clicks/month Nov-Mar (1.7-13); 9 May-Aug (3.6-27.1); model estimates, not measurements. Factors: D 0.041 (Trends 0.109 and Ahrefs 0.015 disagree 7.1x: geometric mean used), Nov-Mar 0.71, May-Aug 1.23 (from camel cricket), format photo ID of one thing (species, eggs, nest, damage) 1, SERP 0.9, Search Console 1.
- **Confidence:** medium (results page read on Google; Trends and Ahrefs disagree (midpoint used)). **Build:** Jan-Feb (summer earner: build in Jan-Feb so it is indexed and aged by May). **Status:** queued; not in the 30: replaced by crickets-in-house.
- **Variants:** -. **Audience:** US and Canadian readers.
- **Demand evidence:** Trends camel cricket = 0.109. Ahrefs US: camel crickets 2,700 (family 2,700 = 0.015 ratio units); target KD 12, traffic potential 16,000, parent topic "camel cricket". Search Console: Nothing.
- **Page 1:** Google, read by next-50 on Oct 16 ("camel crickets"); features: knowledge panel. Wikipedia, NC State, Missouri DoC, Cooper Pest, colinpurrington.com, PestWorld. Read: authority-led.
- **Overlap:** `/blog/crickets-in-house` (umbrella) -> REPLACED by crickets-in-house.
- **Decision:** REPLACE with crickets-in-house.

### `/blog/clothes-moths` — "clothes moths"
- **Estimate:** 4.3 clicks/month Nov-Mar (1.7-12.9); 9 May-Aug (3.6-27.1); model estimates, not measurements. Factors: D 0.064 (Trends 0.151 and Ahrefs 0.027 disagree 5.6x: geometric mean used), Nov-Mar 0.73, May-Aug 1.28 (from clothes moths), format identification + how-to (control) 1, SERP 0.7, Search Console 1.
- **Confidence:** low (results page read only in another engine; Trends and Ahrefs disagree (midpoint used)). **Build:** Jan-Feb (summer earner: build in Jan-Feb so it is indexed and aged by May). **Status:** queued; not in the 30: replaced by moths-in-house.
- **Variants:** -. **Audience:** US and Canadian readers.
- **Demand evidence:** Trends clothes moths = 0.151. Ahrefs US: clothes moths 4,700 (family 4,700 = 0.027 ratio units); target KD 2, traffic potential 400, parent topic "moth larvae". Search Console: Nothing.
- **Page 1:** not checked on Google; WebSearch tool (another engine) ("clothes moths"). Univ. of Kentucky, Raid, MSU, Maine.gov, Dodson Bros, UC IPM, Baygon, USU. Read: authority and brands (other engine).
- **Overlap:** `/blog/moths-in-house` (umbrella) -> REPLACED by moths-in-house.
- **Decision:** REPLACE with moths-in-house.

### `/learn/mites` — "mite bites"
- **Estimate:** 4 clicks/month Nov-Mar (1.6-11.9); 8.9 May-Aug (3.6-26.7); model estimates, not measurements. Factors: D 0.176 (Trends 0.176 and Ahrefs 0.086 agree within 3x: Trends used), Nov-Mar 0.71, May-Aug 1.32 (from mite bites), format bite hub (as next-50 scored /learn/mites) 0.8, SERP 0.5, Search Console 1.
- **Confidence:** medium (results page read on Google; Trends and Ahrefs agree; authority results page). **Build:** Jan-Feb (summer earner: build in Jan-Feb so it is indexed and aged by May). **Status:** queued; not in the 30: medical results page; /learn/bug-bites covers mite bites.
- **Variants:** mite bites on humans. **Audience:** US and Canadian readers.
- **Demand evidence:** Trends mite bites = 0.176. Ahrefs US: mite bites 15,000 (family 15,000 = 0.086 ratio units); target KD 1, traffic potential 80, parent topic "mite butes". Search Console: 365 impressions in 90 days at 10.1.
- **Page 1:** Google, Oct 16 ("mite bites"); features: knowledge panel, People also ask, short videos, Things to know. Merck Manual, Healthline, poison.org, an allergy clinic, NC State, Illinois DPH, Northwestern Medicine, Cedars-Sinai, Loyola Medicine. Read: medical throughout.
- **Overlap:** `/learn/bug-bites` (bite chart) -> covers mites already.
- **Decision:** DROP: medical page 1 throughout; /learn/bug-bites covers it.

## Sources and limits

- Google Trends: 236 terms measured today + next-50's 132 (`next-50.json` -> trendsTable), all relative to "stink bug"; per-term values in `next-wave-research.json` -> trendsTable.
- Google results pages: 60 read today in the built-in browser (gl=us, hl=en, pws=0); no unusual-traffic check appeared. Others: read by next-50, read only with the WebSearch tool, or not checked (marked per page).
- Ahrefs US: 204 keywords, 6,732 units. Search Console: 90-day pull to 2026-10-12. Autocomplete: suggestqueries, hl=en gl=us, from an Ontario IP.
- The model is median-shaped: it cannot predict outliers such as bugs-that-look-like-ticks (about 10x its model value), and most new pages here land below the middle case (skill rule 2: median page $0.16/month in the July cohort).
