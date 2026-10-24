# Amazon converter push (owner, Oct 23, 2026: "push the top 50 pages up as much as you can ... triple these clicks")

**Finding (GA4, Canada, 90 days to Oct 22):**
- 2,181 Amazon clicks came from 194 pages. The top 10 pages took 34% of them, the top 20 took 50% and the top 50 took 75%.
- Product pages convert at 113-583 Amazon clicks per 1,000 Canadian views; information pages convert at about 18-70.
- The converters average Google positions 6-9, with CTR under 1%.
- The lever is rank on proven converters, not new pages. The July cohort of 215 product pages built from keyword tools earns a median of $0.16 a month each.

**Wave A: 24 pages, launched Oct 23 ~21:30 UTC, 6 agents x 4 pages.** These are the winter and year-round converters, ranked by Canadian clicks per 1,000 views x Google impressions.
- rodents: best-rat-trap, best-mouse-trap, rodent-exclusion-kit, best-rodent-repellent-for-cars
- raccoons and dehumidifiers: best-raccoon-live-trap, raccoon-deterrent, best-dehumidifier-for-cold-garage, best-dehumidifier-for-mold
- flies and fleas: best-fruit-fly-trap, electric-fly-swatter, best-indoor-fly-mosquito-trap, best-flea-spray-for-home
- cockroaches and spiders: best-cockroach-spray, best-roach-traps, advion-cockroach-gel-bait, best-spider-spray
- bed bug tools: bed-bug-mattress-encasement, best-bed-bug-steamer, best-bed-bug-detector, best-air-purifier-for-dust-mites
- bed bug sprays: bed-bug-spray, best-bed-bug-spray-for-mattress, best-natural-bed-bug-spray, cimexa-bed-bug-review. These cannibalize each other, so the agent maps the searches first.
- All slugs end in -canada except raccoon-deterrent, electric-fly-swatter and advion-cockroach-gel-bait.

**Workflow:** the brief and each page's real Google searches are in this folder. Each upgrade goes through independent checkers, then the orchestrator runs `retrofit-date.mjs` for all pages, builds and pushes.

**Wave B: the next 26, from Oct 27 (after the weekly allowance resets) and after Oct 30 for frozen pages.** Ranked candidates are in `converters-top60.json`.
- **Summer** (upgrade by March-April):
  - wasps: ground wasps, wasp dust, wasp nest spray, wasp trap
  - mosquitoes: bits vs dunks, the repellent guide, the laser review (108K impressions), fogger, dunks guide, mosquito trap
  - other outdoor: motion sprinkler, permethrin, screen tent, the two sprayers, raccoon electric fence
- **Year-round:** steam cleaner, bed bug powder, HEPA vacuum, bed bug trap, the rat poison legality page, garage door seal, sump pump, crossfire, interceptors, bed bug heater, ecoraider, DIY heat treatment, travel spray, patio heater, compost bin.
- **Frozen until Oct 30:** how-to-get-rid-of-drain-flies-canada, -cockroaches-canada, -fruit-flies, -centipedes-canada, -carpet-beetles-canada.

**Measure:**
- Weekly in GA4: `affiliate_click`, Canada, Wave A pages vs the other converters.
- In GSC: position and CTR on each page's main searches, read Nov 6-20.
- Amazon.ca earnings, against the holiday comparison in `scripts/holiday-amazon-compare.py`. That comparison now mixes in this push, so note it.
