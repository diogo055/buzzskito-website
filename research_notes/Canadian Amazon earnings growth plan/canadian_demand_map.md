# Canadian product demand map for buzzskito.ca (Oct 30, 2026)

Status: finished early at the coordinator's request. Anything unfinished is marked "not done" in the Gaps sections. All estimates are rough: read every search figure as a range, not a count.

Sources used throughout:
- [Search Console, Canada, web, Jun 18, 2025 to Oct 30, 2026, one dimension per pull](https://search.google.com/search-console/performance/search-analytics?resource_id=sc-domain:buzzskito.ca). "Visible" means the rows the query pull returns.
- Google Trends, Canada, past 5 years, 21 comparison pages, each with "mouse trap" as the shared anchor. The batch URLs are listed in the Trends section.
- Repo files: `data/amazon/page-types-2026-10-20.json`, `lib/article-index.json`, `data/god-build/research/god-list-2026-10-26.md`, `reports/amazon-what-sells-2026-10-30.md`, `app/blog/`, `content/guides/`.

Legal codes used in the tables:
- **A:** physical device, exempt because it is not a Schedule 1 type.
- **B:** Schedule 1 device. It needs a PCP number unless it meets Schedule 2 conditions.
- **C:** chemical product. Each named product needs a PCP number, checked in the Health Canada registry.
- **E:** ordinary appliance, not a pest control product unless sold with pest claims.
- **O:** Ontario cosmetic pesticide ban applies.
- Full sources are in the legal section.

## Which product families have the most real Canadian demand, and when?

### Takeaway
The demand is larger than the site's Search Console data suggests, but it sits on head terms where the site barely appears. The largest core pest family is rodents (mouse traps, rat traps, poison and bait), which is year-round and peaks October to January, right now. The largest numbers overall are adjacent appliances (air purifiers, dehumidifiers, sump pumps, steam cleaners, heaters), where the site has little authority.

### Cited Findings
Estimates convert Trends to searches with the calibration below: one "mouse trap" unit is about 10,000 searches a month (range 5,000-15,000). The 12-month average column shows the midpoint and range. Family rows add measured terms together, so they can overlap slightly. Sources: [Trends batches](https://trends.google.com/trends/explore?geo=CA&date=today%205-y&q=mouse%20trap,rat%20trap,fruit%20fly%20trap,bed%20bug%20spray,wasp%20spray) and [Search Console](https://search.google.com/search-console/performance/search-analytics?resource_id=sc-domain:buzzskito.ca).

| Rank | Family | Group | 12-mo average searches/mo, mid (range) | Peak month: searches/mo | Off-peak searches/mo | Season (Trends, 3-yr) | Visible GSC impressions, 16 mo | Our clicks | Avg pos | Legal | Coverage |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Air purifiers | adjacent | 63,200 (31,600-94,800) | Jul: 46,400-139,100 | 25,100-75,300 | year-round | 6,161 | 9 | 9.1 | E (ozone units: B) | One page (dust mites). No head-term presence. Credibility weak. |
| 2 | Dehumidifiers | adjacent | 43,900 (22,000-65,900) | Jun: 40,100-120,200 | 14,100-42,200 | Jun, Jul, Aug, Sep | 12,702 | 104 | 10.7 | E | 10 pages, no overall 'best dehumidifier Canada' page. Head term absent (58 impressions in 16 months). Best adjacent fit. |
| 3 | Sprayers and foggers | sprayers | 43,800 (21,900-65,700) | Jun: 37,000-111,000 | 13,400-40,300 | Apr, May, Jun, Jul, Aug | 19,023 | 265 | 8.5 | A; hose-end and auto-misting: B | About 15 pages, mostly narrow reviews. 'sprayer' also counts paint and garden sprayers, so this is overstated. |
| 4 | Sump pumps | adjacent | 32,000 (16,000-48,000) | Jun: 28,100-84,300 | 10,400-31,300 | Mar, Apr, May, Jun, Jul, Aug, Sep | 2,254 | 21 | 9.9 | E | Two pages, position 8-11. Head term at 12.8. |
| 5 | Steam cleaners and mops | adjacent | 30,700 (15,400-46,100) | Apr: 16,900-50,700 | 13,900-41,600 | year-round | 4,658 | 66 | 9.7 | E | Bed bug and niche pages only. No overall 'best steam cleaner' page. |
| 6 | Heaters (space, garage, patio) | adjacent | 26,300 (13,100-39,400) | Dec: 24,300-72,900 | 7,100-21,200 | Jan, Oct, Nov, Dec | 822 | 3 | 13.1 | E | Patio only. No garage or space heater page. Weak credibility. Peaks now. |
| 7 | Personal repellents and bug spray | mosquito | 25,500 (12,800-38,300) | Jul: 39,400-118,200 | 4,000-12,100 | May, Jun, Jul | 33,716 | 341 | 8.3 | C | Guide at position 7 for long tail; 'mosquito repellent' at 11, 'bug spray' absent (17 impressions). No 'best bug spray Canada' page. |
| 8 | Fly traps and swatters | flies | 15,400 (7,700-23,100) | Aug: 17,500-52,600 | 2,800-8,500 | Jul, Aug, Sep, Oct | 11,912 | 111 | 9.7 | B | Swatter page fine. No general 'best fly trap' page. 'fly trap' is inflated by the Venus fly trap plant. |
| 9 | Mouse traps | rodents | 15,100 (7,600-22,700) | Nov: 10,300-30,900 | 6,000-17,900 | Jan, May, Jul, Aug, Sep, Oct, Nov, Dec | 2,500 | 17 | 11.0 | A | THE core gap: 'mouse trap' at 31.8, 'mouse traps' at 21. best-mouse-trap-canada at 13.4 with 1,403 impressions in 90 days. |
| 10 | Thermacell and area repellers | mosquito | 12,700 (6,300-19,000) | Jul: 26,100-78,300 | 650-1,900 | Jun, Jul | 16,769 | 115 | 9.1 | C, B (check each) | Pages exist but win retailer-named noise. 'thermacell' head: 58 impressions. |
| 11 | Diatomaceous earth | general | 8,600 (4,300-12,900) | Jul: 7,300-21,900 | 2,600-7,900 | Apr, May, Jun, Jul, Aug | 630 | 7 | 11.3 | C, flagged | Two pages at 10-11, head 11.8 with 23 impressions. A named top seller in October. Term also covers garden and health uses. |
| 12 | Rat and mouse poison and bait | rodents | 8,500 (4,200-12,700) | Nov: 5,000-14,900 | 3,600-10,700 | year-round | 3,024 | 47 | 8.8 | C, restricted | Legal explainer ranks 7.5, 'rat poison' head at 25. mice-poison weak. |
| 13 | Fruit fly traps | flies | 6,900 (3,500-10,400) | Sep: 10,200-30,600 | 500-1,500 | Jul, Aug, Sep, Oct | 12,621 | 74 | 8.2 | B or C | One page at 8.6, 17,156 impressions in 90 days, CTR low. Lift it. |
| 14 | Mosquito traps and zappers | mosquito | 6,200 (3,100-9,300) | Jun: 11,800-35,500 | Below Trends floor | May, Jun, Jul | 57,071 | 828 | 9.0 | B | Heavily covered. Position 9-10. |
| 15 | Ant killers and traps | crawlers | 6,000 (3,000-8,900) | May: 8,100-24,400 | 240-720 | May, Jun, Jul | 7,018 | 34 | 11.8 | C; lawn use: O | Two pages around 10; 'ant killer' at 17.5. |
| 16 | Permethrin and treated clothing | mosquito | 5,600 (2,800-8,400) | May: 6,400-19,300 | 1,300-3,800 | May, Jun, Jul | 32,509 | 744 | 6.9 | C, flagged | Already strong (position 4-7, 712 clicks). Defend, do not build. |
| 17 | Rat traps | rodents | 5,500 (2,700-8,200) | Sep: 3,400-10,100 | 2,300-6,800 | year-round | 8,024 | 68 | 9.9 | A | Page at 9.2; 'rat traps' at 14.7. |
| 18 | Mosquito nets and screen tents | mosquito | 5,400 (2,700-8,100) | Jul: 7,100-21,200 | 530-1,600 | May, Jun, Jul | 11,986 | 29 | 12.5 | A | Pages at 11-13. |
| 19 | Lawn grubs, nematodes, slugs | garden | 5,400 (2,700-8,100) | May: 5,000-14,900 | 1,200-3,500 | Apr, May, Jun, Jul, Aug, Sep | 42 | 0 | 20.0 | O, check | NO product page. 42 impressions in 16 months. 'nematodes' also counts science searches. |
| 20 | Flea products | crawlers | 5,100 (2,500-7,600) | May: 3,400-10,200 | 1,600-4,900 | Apr, May, Jun, Jul, Aug, Sep, Oct, Nov | 6,220 | 51 | 8.1 | C or vet drug | Home spray and bomb pages at about 8. 'flea treatment' absent. |
| 21 | Wasp sprays, foams, dust | wasps | 4,400 (2,200-6,500) | Aug: 8,500-25,500 | Below Trends floor | Jul, Aug | 39,217 | 763 | 7.3 | C, flagged (dust) | Strong (position 6-8). Defend and lift to top 5. |
| 22 | Cockroach baits and killers | crawlers | 2,900 (1,400-4,300) | Jun: 2,100-6,400 | 1,100-3,300 | May, Jun, Jul, Aug, Sep, Oct, Nov | 27,927 | 402 | 8.7 | C, flagged (Advion) | Strong page set. 'cockroach killer' down 27% a year in Trends. |
| 23 | Mosquito dunks and bits | mosquito | 2,800 (1,400-4,300) | Jun: 7,400-22,300 | Below Trends floor | May, Jun | 57,560 | 1,748 | 6.2 | C, check | Site's strongest family. Trends 'mosquito dunks' up 3.9x. 'mosquito bits' is also a typo of 'bites'. |
| 24 | Live traps | wildlife | 2,500 (1,300-3,800) | Jul: 1,700-5,000 | 920-2,800 | year-round | 3,152 | 18 | 10.0 | A; Ontario wildlife rules not checked | Pages at 9.6-9.9, head 11.7 with 21 impressions. |
| 25 | Wasp traps | wasps | 2,300 (1,100-3,400) | Aug: 4,300-12,900 | Below Trends floor | Aug, Sep | 8,067 | 65 | 9.8 | B | Pages at 9-10, 'wasp traps' at 14. |
| 26 | Bed bug sprays and powders | bed bugs | 1,800 (920-2,700) | Jul: 1,200-3,600 | 790-2,400 | year-round | 18,735 | 244 | 9.0 | C, flagged | Many pages. Head at 12.8. |
| 27 | Spider, silverfish, earwig products | crawlers | 1,800 (890-2,700) | Jul: 1,900-5,600 | Below Trends floor | May, Jun, Jul, Aug, Sep | 8,383 | 59 | 9.3 | C; traps A | Pages at 8-11. Silverfish below the Trends floor. |
| 28 | Mothballs and moth traps | crawlers | 1,500 (760-2,300) | May: 1,000-3,100 | 650-1,900 | Apr, May, Jun, Jul, Aug, Sep, Oct, Nov | 943 | 4 | 9.9 | C, check | No mothballs buying page. Pantry moth page at 11.4. |
| 29 | Drain flies | flies | 1,500 (730-2,200) | Aug: 1,700-5,200 | 200-600 | Jul, Aug, Sep, Oct | 363 | 2 | 13.0 | C, check | Remedy page at 12; no buying page. Up 2x in a year. |
| 30 | Mouse repellents | rodents | 1,400 (700-2,100) | Oct: 2,700-8,000 | 280-850 | Oct | 13,087 | 99 | 8.4 | C; ultrasonic B | Page at 7.8. Strong October peak. Upgrade already planned from Nov 3. |
| 31 | Wildlife repellents and sprinklers | wildlife | 1,200 (580-1,700) | May: 1,900-5,600 | Below Trends floor | May, Jun, Jul | 12,258 | 138 | 7.7 | Sprinkler A; repellents C | Raccoon and sprinkler pages strong. No deer, squirrel or skunk repellent page. |
| 32 | Bird spikes and netting | wildlife | 780 (390-1,200) | Jun: 1,200-3,700 | Below Trends floor | Apr, May, Jun | 972 | 2 | 14.3 | A | NO page. Only a squirrel-proof feeder page. |
| 33 | Bed bug encasements and traps | bed bugs | 340 (170-500) | Mar: 510-1,500 | Below Trends floor | Mar, Apr, Jun, Jul, Oct | 10,736 | 97 | 9.0 | A; heat cabinets check | Over-covered against Trends demand. Below the Trends floor; GSC is the better guide. |
| 34 | Tick removal tools | ticks | 310 (150-460) | May: 800-2,400 | Below Trends floor | May | 1,419 | 19 | 9.7 | A | Guide at 10.6. Up 2.6x from a tiny base. |

- Earnings per click differ by topic: in September wildlife earned 46 cents, steamers 38, rodent 22, flies 20, bed bug 15, cockroach 15, general 14, wasp 13 and mosquito 10 — [`reports/amazon-what-sells-2026-10-30.md`](reports/amazon-what-sells-2026-10-30.md).
- October's top clicked families were roach bait stations, bed bug steamers, rat and mouse snap traps and dehumidifiers — [`reports/amazon-what-sells-2026-10-30.md`](reports/amazon-what-sells-2026-10-30.md).

### Inferences
- **What this is worth, plainly.** Measured CTR on product queries here is 4.09% at position 1-3, 2.92% at 4-6, 0.98% at 7-10, 0.29% at 11-20. At 10 cents a view, a term with 10,000 searches a month earns about $10 a month at position 8, $29 at position 5 and $41 at position 2. Off-season rates are lower and these rates mix seasons.
- Adding the core pest rows gives very roughly 160,000 searches a month on average. Adding the adjacent and sprayer rows gives very roughly 240,000 more.
- If every term reached position 4-6, that is about 11,700 views and about $1,170 a month in total. At position 7-10 it is about $390 a month. That is an upper-end sketch, not a forecast. The 10-cent rate may not hold for appliances.
- Demand is therefore bigger than hoped in searches but modest in dollars. Winning a few high-demand head terms matters more than page count: the July cohort of 215 pages earns a median of $0.16 a page a month (rule 2 in `.claude/skills/buzzskito-ops/SKILL.md`).
- Priority order for core pest work, by demand and fit: mouse traps, rat poison and bait, rat traps, then spring preparation for repellents, ant killers and lawn grubs.

### Gaps
- Family rows only cover terms measured in Trends. Not done: flea collar, tick collar, flea bomb, bed bug steamer, raccoon trap, squirrel trap, groundhog trap, ant bait, carpenter ant killer, gnat trap, fly paper and fly spray.
- Whether the site can actually rank on any head term is not tested. No Google results pages were loaded in this pass.

## What are the best new pages to build and existing pages to retarget?

### Takeaway
Retargeting comes first: 28 existing pages already target these families, and the top priority is `best-mouse-trap-canada`, now, for the November peak. I list 32 new pages rather than the maximum of 50 because the honest list thins out quickly; only about the first eight have clear demand, and several of those are outside the site's core topic.

### Cited Findings
Search figures use Trends and the calibration, multiplied by an assumed share where the target is a slice of a larger term (stated in the Basis column), or Search Console floors where marked. Sources: [Trends batches](https://trends.google.com/trends/explore?geo=CA&date=today%205-y&q=mouse%20trap,dehumidifier,air%20purifier,sump%20pump,steam%20cleaner) and [Search Console](https://search.google.com/search-console/performance/search-analytics?resource_id=sc-domain:buzzskito.ca).

**Existing pages to retarget, ranked:**

| # | Existing page | 90-day Canada: impr / clicks / pos | Retarget to | Family | Peak searches/mo | Off-peak searches/mo | Season | Price | Legal | Confidence | Why |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | /blog/best-mouse-trap-canada | 1,403 / 5 / 13.4 | mouse traps; best mouse trap | Mouse traps | 3,100-18,500 | 1,800-10,800 | Oct-Jan, peaks now | Low | A | High demand, medium rank | Biggest core gap. Do first, before the November peak ends. |
| 2 | /blog/rat-poison-canada-what-is-legal | 2,237 / 38 / 7.5 | rat poison | Rodent bait | 1,200-7,200 | 890-5,300 | Year-round | Low | C, restricted | Medium | Head at 25.2. Must carry the domestic-class limits. |
| 3 | /blog/mice-poison | 111 / 0 / 12.1 | mouse poison | Rodent bait | 740-4,400 | 390-2,300 | Sep-Nov | Low | C, restricted | Medium | Up 28%. Almost no impressions today. |
| 4 | /blog/best-rat-trap-canada | 8,655 / 76 / 9.2 | rat traps; best rat traps | Rat traps | 1,000-6,100 | 680-4,100 | Year-round | Low-Mid | A | Medium-high | 'rat traps' at 14.7; a known earner. |
| 5 | /blog/mouse-repellent-canada | 3,709 / 49 / 7.8 | mouse repellent | Mouse repellents | 1,300-7,600 | 140-850 | Oct peak | Low | C | Medium-high | Peak doubled in Oct 2026. Upgrade already planned from Nov 3; check the frozen test list. |
| 6 | /blog/diatomaceous-earth-canada-buyers-guide | 358 / 2 / 10.0 | diatomaceous earth | Diatomaceous earth | 1,500-10,900 | 530-3,900 | May-Sep | Low | C, flagged | Medium | Largest pest-adjacent gap. Top-seller evidence. |
| 7 | /blog/best-fruit-fly-trap-canada | 17,156 / 87 / 8.6 | fruit fly trap; best fruit fly trap | Fruit flies | 3,100-18,300 | 150-900 | Jul-Oct | Low | B | Medium-high | CTR 0.5%. Top 3 would multiply clicks. Next peak Aug 2027. |
| 8 | /blog/mosquito-repellent-guide-ontario-2026 | 9,534 / 197 / 7.0 | mosquito repellent; best mosquito repellent for skin | Personal repellents | 5,800-34,600 | 380-2,300 | May-Aug | Low | C | Medium | Head at 11. Update before April. |
| 9 | /blog/best-wasp-nest-spray-canada | 20,875 / 211 / 7.4 | wasp spray | Wasp sprays | 2,500-14,800 | Under about 300 | Jul-Sep | Low | C | Medium-high | Head at 8.4 with CTR 0.3%. Next peak Jul 2027. |
| 10 | /blog/best-dehumidifier-for-basement-canada | 2,536 / 27 / 15.7 | basement dehumidifier | Dehumidifiers | 1,500-9,300 | 160-960 | Jun-Sep | High | E | Medium | Up 2x in a year; page sits at 15.7. |
| 11 | /blog/best-large-capacity-dehumidifier-canada | 4,839 / 16 / 9.8 | 70 pint dehumidifier | Dehumidifiers | 300-600 | 100-250 | Jun-Sep | High | E | Medium | GSC: '70 pint dehumidifier' 214 at 9.3. |
| 12 | /blog/best-sump-pump-for-basement-canada | 1,611 / 18 / 11.0 | best sump pump canada; sump pump | Sump pumps | 1,400-12,700 | 520-4,700 | Mar-Apr, Jun-Aug | High | E | Medium | Head term huge but retailer-led. Share assumed. |
| 13 | /blog/best-steam-mop-for-hardwood-floors-canada | 1,204 / 7 / 13.1 | best steam mop canada | Steam cleaners | 680-4,100 | 410-2,400 | Year-round | Mid | E | Medium | GSC 'best steam mop canada' 385 at 7.0 while the page averages 13. |
| 14 | /blog/best-upholstery-steam-cleaner-canada | 2,067 / 7 / 10.5 | upholstery steam cleaner | Steam cleaners | 250-1,900 | 180-1,300 | Year-round | Mid-High | E | Medium | GSC 221 at 9.8. |
| 15 | /blog/thermacell-canada-where-to-buy | 4,749 / 7 / 9.4 | thermacell; thermacell canada | Thermacell | 7,400-44,200 | 190-1,200 | Jun-Jul | Mid | C, check | Medium | Half the family's impressions are retailer-named (0.08% CTR). Registration must be checked. |
| 16 | /blog/bug-zappers-canada-do-they-work | 8,711 / 66 / 10.4 | bug zapper; best bug zapper | Mosquito traps | 1,500-8,800 | Under about 300 | May-Aug | Mid | B | Medium | Head at 12.6. Health Canada says zappers do not reduce mosquitoes: keep that honest. |
| 17 | /blog/best-screen-tent-canada | 6,601 / 18 / 12.9 | screen tent; screen house | Nets and tents | 1,900-11,200 | 40-240 | May-Aug | Mid-High | A | Medium | Head at 14.6. High ticket. |
| 18 | /blog/mosquito-net | 1,080 / 2 / 11.6 | mosquito net | Nets and tents | 1,700-10,500 | 230-1,400 | May-Jul | Low | A | Medium | Head at 11.1, zero clicks. |
| 19 | /blog/best-ant-killer | 1,352 / 5 / 9.6 | ant killer; best ant killer | Ants | 1,900-11,400 | 60-350 | Apr-Jul | Low | C | Medium | Head at 17.5. Strong May peak. |
| 20 | /blog/best-ant-traps-canada | 3,587 / 16 / 10.1 | ant traps | Ants | 900-5,400 | 20-150 | Apr-Jul | Low | C | Medium | Up 51%; head at 14.8. |
| 21 | /blog/how-to-get-rid-of-drain-flies-canada | 3,548 / 11 / 12.0 | drain fly; drain flies | Drain flies | 870-5,200 | 100-600 | Jul-Sep | Low | C, check | Medium | Up 2x. A scheduled guide (how-to-get-rid-of-drain-flies) may compete: check first. |
| 22 | /blog/best-flea-spray-for-home-canada | 4,949 / 38 / 7.9 | flea spray; flea spray for house | Fleas | 570-3,400 | 140-850 | Year-round | Low | C | Medium | Good winter family. |
| 23 | /blog/best-live-animal-trap-canada | 765 / 3 / 9.9 | live trap | Live traps | 500-3,000 | 280-1,700 | Apr-Oct | Mid | A; Ontario rules not checked | Medium | Up 30%; head 11.7 with 21 impressions. |
| 24 | /blog/best-pump-pressure-sprayer-canada | 2,634 / 9 / 11.0 | pump sprayer | Sprayers | 750-4,500 | 130-800 | Apr-Jul | Mid | A | Low-medium | Term includes garden use. |
| 25 | /blog/bed-bug-spray-canada | 2,803 / 41 / 12.9 | bed bug spray | Bed bug sprays | 600-3,600 | 370-2,200 | Year-round | Low | C, flagged | Medium | Good winter family; head at 12.8. |
| 26 | /blog/best-yellow-jacket-trap-canada | 3,926 / 28 / 9.4 | yellow jacket trap; wasp traps | Wasp traps | 1,300-7,700 | Under about 300 | Jul-Sep | Low | B | Medium | Heads at 10.6 and 14. |
| 27 | /blog/best-cockroach-spray-canada | 9,450 / 69 / 9.0 | cockroach spray | Cockroaches | 270-1,600 | 110-640 | Year-round | Low | C | Medium | Winter family; roach bait clicks are the top October family. |
| 28 | /blog/best-spider-spray-canada | 3,412 / 31 / 8.6 | spider spray | Spiders | 840-5,000 | Under about 300 | Apr-Sep | Low | C | Medium | Head at 9.8. |

**New pages, ranked by demand and fit:**

| # | New page | Target search | Family | Peak searches/mo | Off-peak searches/mo | Season | Price | Legal | Confidence | Basis |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | /blog/best-dehumidifier-canada | best dehumidifier canada | Dehumidifiers | 3,800-11,300 | 1,300-3,800 | Jun-Aug | High | E | Demand high, rank medium | Overall page missing. Query already gets 2,245 impressions at 8.2 on other pages. Trends up 2x. |
| 2 | /blog/best-bug-spray-canada | best bug spray canada | Personal repellents | 1,000-9,000 | 130-1,200 | Jun-Aug | Low | C | Demand high, rank medium | No overall page. Share of 'bug spray' assumed 5-15%. |
| 3 | /blog/best-steam-cleaner-canada | best steam cleaner canada | Steam cleaners | 630-5,700 | 450-4,000 | Year-round | Mid-High | E | Demand high, rank low-medium | Steamer tag earned 38 cents a click in September. Share assumed. |
| 4 | /blog/best-garage-heater-canada | garage heater | Heaters | 3,100-18,400 | 490-3,000 | Oct-Jan, peaks now | High | E | Demand high, rank low | Hardware retailers likely dominate; page one not checked. Off-topic for a pest brand. |
| 5 | /blog/nematodes-for-grubs-canada | nematodes for grubs | Lawn grubs | 720-5,400 | 210-1,600 | Apr-May | Mid | O, check | Medium | No lawn product page. 'nematodes' includes science searches, so share assumed. |
| 6 | /blog/grub-killer-canada | grub killer | Lawn grubs | 1,900-5,700 | Under about 300 | Mar-May | Mid | O, check | Medium | Could share a page with nematodes. Must state what is legal in Ontario. |
| 7 | /blog/diatomaceous-earth-for-fleas | diatomaceous earth for fleas | Diatomaceous earth | 150-1,300 | 50-470 | May-Sep | Low | C, flagged | Low-medium | Share assumed. Only PCP-registered product may be named for pests. |
| 8 | /blog/diatomaceous-earth-for-ants | diatomaceous earth for ants | Diatomaceous earth | 150-1,300 | 50-470 | May-Aug | Low | C, flagged | Low-medium | Same limits. Ontario lawn use is restricted. |
| 9 | /blog/bucket-mouse-trap | bucket mouse trap | Mouse traps | 200-1,600 | 120-970 | Oct-Jan | Low | A | Medium | Related search 49 of 100; 'bucket trap for mice' and 'dizzy dunker' are breakout. Share assumed. |
| 10 | /blog/best-humane-mouse-trap-canada | humane mouse trap | Mouse traps | 140-1,000 | 80-600 | Oct-Jan | Low | A | Low-medium | Related 'mouse live trap' 26 of 100. Share assumed. |
| 11 | /blog/best-electronic-mouse-trap-canada | electronic mouse trap | Mouse traps | 150-500 | 100-300 | Oct-Jan | Mid | A | Low | Trends floor. GSC only: 'electric rat trap' 346, 'rat zapper' 412 impressions. |
| 12 | /blog/rat-bait-station-canada | rat bait station | Rodent bait | 200-1,200 | 110-680 | Sep-Nov | Low | C, restricted | Medium | 'bait station' up 51%. Domestic products must be sold with a station. |
| 13 | /blog/best-carpenter-ant-killer-canada | carpenter ant killer | Ants | 640-4,800 | 20-140 | Apr-Jun | Low | C | Medium | Related 23 of 100; 'terro carpenter ant & termite killer' breakout. Service tie-in risk: check lead-post rules. |
| 14 | /blog/pet-safe-ant-killer-canada | pet safe ant killer | Ants | 320-2,900 | 10-90 | Apr-Jun | Low | C | Medium | 'pet friendly ant killer indoor' +250%. No safety absolutes. |
| 15 | /blog/ant-killer-granules-canada | ant killer granules | Ants | 190-1,500 | 10-50 | May-Jul | Low | O: lawn use prohibited | Low | Rising (breakout) but lawn ant control is cosmetic use in Ontario. Build only as a what-is-legal page. |
| 16 | /blog/best-drain-fly-killer-canada | drain fly killer | Drain flies | 170-1,000 | 20-120 | Jul-Sep | Low | C, check | Medium | Family up 2x. Only a remedy page today. |
| 17 | /blog/best-fly-trap-canada | best fly trap | Flies | 800-7,200 | 140-1,300 | Jul-Sep | Low-Mid | B | Low-medium | Venus fly trap inflates the term. Outdoor devices have label conditions. |
| 18 | /blog/wasp-bag-trap-canada | wasp bag trap | Wasp traps | 300-600 | Under 100 | Aug-Sep | Low | B | Medium | GSC floor: 'wasp bags' 315, 'wasp bag trap' 303, 'wasp bag' 261 at about 10. |
| 19 | /blog/zevo-fruit-fly-trap-review-canada | zevo fruit fly trap | Fruit flies | 100-920 | 0-40 | Aug-Oct | Low-Mid | B | Low-medium | +900% in Trends. Label research only; no testing claims. |
| 20 | /blog/plug-in-fruit-fly-trap-canada | plug in fruit fly trap | Fruit flies | 100-920 | 0-40 | Aug-Oct | Low-Mid | B | Low-medium | +400%. 'best fruit fly trap indoor' breakout. May be better as a section of the main page. |
| 21 | /blog/best-icaridin-repellent-canada | picaridin / icaridin spray | Personal repellents | 1,100-6,600 | Under about 300 | May-Jul | Low | C | Medium | Picaridin up 2.1x in a year. Existing picaridin-vs-deet is a comparison at 7.5. |
| 22 | /blog/midea-cube-dehumidifier-review-canada | midea cube dehumidifier | Dehumidifiers | 200-2,400 | 70-840 | Jun-Aug | High | E | Low-medium | 'midea cube dehumidifier' +1,600%. Share assumed. |
| 23 | /blog/best-dehumidifier-for-bedroom-canada | dehumidifier for bedroom | Dehumidifiers | 200-2,400 | 70-840 | Jun-Aug | Mid | E | Low-medium | 'best dehumidifier for bedroom' +250%; 'small dehumidifier for bathroom' +200%. |
| 24 | /blog/danby-dehumidifier-review-canada | danby dehumidifier | Dehumidifiers | 400-3,600 | 140-1,300 | Jun-Aug | Mid-High | E | Low-medium | Related 70 of 100, higher than midea. Canadian brand. Share assumed. |
| 25 | /blog/mothballs-canada | mothballs | Moths | 520-3,100 | 320-1,900 | Year-round | Low | C, check | Medium | No buying page; registration of named products must be checked first. |
| 26 | /blog/deer-repellent-canada | deer repellent | Wildlife | 830-2,500 | Under about 300 | May-Jul | Low-Mid | C, O check | Medium | Existing pages are fence and cedar pieces. |
| 27 | /blog/bird-netting-canada | bird netting | Birds | 800-2,400 | Under about 300 | May-Jul | Low | A | Low-medium | No page. Small but open to check. |
| 28 | /blog/bird-spikes-canada | bird spikes | Birds | 470-1,400 | Under about 300 | Apr-Jun | Low | A | Low-medium | No page. Federal bird rules not checked. |
| 29 | /blog/squirrel-repellent-canada | squirrel repellent | Wildlife | 580-1,700 | Under about 300 | May | Low | C, check | Low | Near the Trends floor. Wildlife earns well per click (46 cents in September). |
| 30 | /blog/raid-bed-bug-spray-review-canada | raid bed bug spray | Bed bug sprays | 120-720 | 70-440 | Year-round | Low | C | Low-medium | Related 34 of 100; 'raid bed bug foaming spray' breakout. No Raid review exists. |
| 31 | /blog/best-air-purifier-canada | best air purifier canada | Air purifiers | 2,000-12,200 | 930-5,600 | Year-round, Jul spike | High | E; ozone B | Demand high, rank low | Largest term measured, but no credibility; only the dust-mite angle fits. Not recommended first. |
| 32 | /blog/best-flea-treatment-for-cats-canada | best flea treatments for cats | Fleas | 110-1,000 | 70-620 | May-Oct | Mid | C or vet drug | Low | 731 impressions in one month at 7.8. Many products are vet-only. Check before building. |

### Inferences
- Price level is my judgement, not measured: Low is under about $30, Mid $30-100, High over $100. No Amazon page was fetched.
- Rule 2 still applies: a typical new page earns very little. Treat the new list as candidates to test a few at a time, not a batch to build.
- Retailer-named searches are excluded from every row.
- Timing: only the rodent, heater, flea, bed bug and cockroach rows can pay this winter. Most mosquito, wasp and fly work should be live by March-April to be indexed before the peak.
- Conflict to resolve: `reports/amazon-what-sells-2026-10-30.md` lists new product pages as "not worth doing". This list does not overturn that. It shows where demand exists if the owner still wants to build.

### Gaps
- Not done: a check of retarget candidates against the frozen geo-title test pages (held until Nov 20-23) and the 60 upgraded pages being read Nov 6-20. Check before editing any of them.
- Not done: query-filtered page pulls to confirm which page ranks for each target, so cannibalization is not ruled out.
- Assumed shares are judgement. Rows with a share are low confidence on size, whatever the Confidence column says about fit.
- The product-level legal check is not done for any row. Check the registry before naming a product.

## What product-intent searches appear in Search Console, by family and month?

### Takeaway
Product-intent searches are the largest visible group, about 475,000 of 1,046,000 visible impressions over 16 months. Nearly all of them arrived after May 2026 because the pages did not exist before then, so these months show page launches as well as season. The query pull hides 61% of clicks and 50% of impressions.

### Cited Findings
- **How much the query pull misses against the country total.** All 16 months: 11,519 of 29,850 clicks visible (61% missing), 1,046,402 of 2,109,908 impressions visible (50% missing) — [Search Console](https://search.google.com/search-console/performance/search-analytics?resource_id=sc-domain:buzzskito.ca). October 2026 is the worst month for clicks (68% missing).

| month | total clicks | query clicks | missing % | total impr | query impr | missing % | rows |
|---|---|---|---|---|---|---|---|
| 2025-06 | 50 | 41 | 18% | 1253 | 1014 | 19% | 132 |
| 2025-07 | 199 | 130 | 35% | 8329 | 6236 | 25% | 557 |
| 2025-08 | 51 | 28 | 45% | 5644 | 4591 | 19% | 430 |
| 2025-09 | 28 | 10 | 64% | 4396 | 3573 | 19% | 231 |
| 2025-10 | 20 | 11 | 45% | 3420 | 2891 | 15% | 163 |
| 2025-11 | 9 | 2 | 78% | 2886 | 2402 | 17% | 196 |
| 2025-12 | 28 | 19 | 32% | 4343 | 3889 | 10% | 231 |
| 2026-01 | 28 | 14 | 50% | 3842 | 3170 | 17% | 236 |
| 2026-02 | 41 | 12 | 71% | 2738 | 1958 | 28% | 212 |
| 2026-03 | 94 | 52 | 45% | 4610 | 2672 | 42% | 295 |
| 2026-04 | 245 | 104 | 58% | 11497 | 4581 | 60% | 521 |
| 2026-05 | 1714 | 586 | 66% | 84062 | 32996 | 61% | 2606 |
| 2026-06 | 4777 | 2262 | 53% | 221835 | 108461 | 51% | 7280 |
| 2026-07 | 5453 | 2162 | 60% | 370601 | 186782 | 50% | 22299 |
| 2026-08 | 6749 | 2533 | 62% | 527410 | 265505 | 50% | 33404 |
| 2026-09 | 6163 | 2203 | 64% | 457999 | 227667 | 50% | 32084 |
| 2026-10 | 4201 | 1350 | 68% | 395043 | 188014 | 52% | 32714 |
| all16 | 29850 | 11519 | 61% | 2109908 | 1046402 | 50% | 78788 |
| season26 | 24856 | 9746 | 61% | 1661907 | 821411 | 51% | 62771 |
| last90 | 17113 | 6086 | 64% | 1380452 | 681186 | 51% | 66469 |
| last28 | 4065 | 1305 | 68% | 383509 | 182324 | 52% | 32124 |

- The page-dimension pull with a country filter is short by a similar amount: 11,619 of 29,850 clicks — [Search Console](https://search.google.com/search-console/performance/search-analytics?resource_id=sc-domain:buzzskito.ca).
- **Retailer-named searches, excluded:** 52,978 impressions and 382 clicks (0.72% CTR), against 1.44% for other product searches. Thermacell is 51% retailer-named with a 0.08% CTR (17,242 impressions, 14 clicks). Mosquito dunks and bits retailer searches do better at 1.48% — [Search Console](https://search.google.com/search-console/performance/search-analytics?resource_id=sc-domain:buzzskito.ca).
- **Anomaly excluded from conclusions:** "best air purifiers for allergies" shows 4,476 impressions in August 2026 at position 8, none after, and zero clicks. Trends shows "air purifier for allergies" near its floor, so I treat this as an artifact — [Search Console](https://search.google.com/search-console/performance/search-analytics?resource_id=sc-domain:buzzskito.ca); [Trends](https://trends.google.com/trends/explore?geo=CA&date=today%205-y&q=mouse%20trap,best%20dehumidifier,basement%20dehumidifier,best%20air%20purifier,air%20purifier%20for%20allergies).

**Impressions by family and month (visible rows, non-retailer):**

| Family | 25-06 | 25-07 | 25-08 | 25-09 | 25-10 | 25-11 | 25-12 | 26-01 | 26-02 | 26-03 | 26-04 | 26-05 | 26-06 | 26-07 | 26-08 | 26-09 | 26-10 | Total |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Mosquito dunks, bits and larvicides | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 134 | 4660 | 25194 | 12654 | 6567 | 4859 | 3491 | 57560 |
| Mosquito traps and killers (Dynatrap, Mosquito Magnet, propane, UV) | 0 | 1 | 1 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 958 | 8089 | 12164 | 11852 | 4610 | 2415 | 40092 |
| Personal repellents (DEET, icaridin, natural) | 0 | 5 | 5 | 3 | 0 | 1 | 0 | 0 | 1 | 1 | 1 | 127 | 2019 | 6495 | 14154 | 7820 | 3084 | 33716 |
| Permethrin and treated clothing | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 18 | 10264 | 11586 | 6613 | 2367 | 1661 | 32509 |
| Cockroach baits, gels and sprays | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 647 | 9518 | 10349 | 7409 | 27927 |
| Wasp and hornet sprays and foams | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1013 | 9336 | 13751 | 2817 | 26918 |
| Bed bug sprays, powders and kill products | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 7 | 661 | 5082 | 6909 | 6075 | 18735 |
| Thermacell and area repellers | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 37 | 384 | 5814 | 6383 | 3015 | 1134 | 16769 |
| Foggers (machines, liquid, yard) | 2 | 5 | 1 | 0 | 8 | 11 | 1 | 2 | 0 | 2 | 0 | 5 | 35 | 7515 | 4047 | 2495 | 1333 | 15462 |
| Mouse and rat repellents (car, house, ultrasonic) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 677 | 1842 | 2804 | 7764 | 13087 |
| Dehumidifiers | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 501 | 3516 | 4388 | 4297 | 12702 |
| Fruit fly traps and killers | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 209 | 3549 | 4699 | 4164 | 12621 |
| Wasp dust and powder | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 80 | 4159 | 6311 | 1748 | 12299 |
| Mosquito nets, screen tents and screen rooms | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 1401 | 5902 | 2757 | 1923 | 11986 |
| Electric fly swatters and rackets | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 1521 | 2062 | 4731 | 2301 | 10617 |
| Bug zappers | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 60 | 357 | 2162 | 4498 | 2389 | 833 | 10299 |
| Tick sprays, granules and repellents | 3 | 109 | 62 | 7 | 10 | 41 | 96 | 77 | 95 | 104 | 139 | 501 | 2458 | 3119 | 1099 | 659 | 955 | 9534 |
| Wildlife repellents and deterrents (raccoon, skunk, squirrel, deer) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 318 | 1657 | 3149 | 2952 | 8077 |
| Wasp, hornet and yellow jacket traps and decoys | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 217 | 2807 | 4463 | 579 | 8067 |
| Rat traps | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 657 | 1994 | 2659 | 2714 | 8024 |
| Ant baits, killers and traps | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 130 | 2759 | 2288 | 1839 | 7018 |
| Laser mosquito killers (Photon Matrix) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 755 | 4150 | 1031 | 744 | 6680 |
| Flea sprays, traps and treatments | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 9 | 1 | 16 | 996 | 3021 | 2174 | 6220 |
| Air purifiers | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 279 | 5671 | 121 | 90 | 6161 |
| Bed bug encasements and mattress covers | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 31 | 1664 | 2178 | 1648 | 5521 |
| Mosquito yard sprays and concentrates | 7 | 154 | 108 | 42 | 11 | 18 | 104 | 109 | 104 | 84 | 91 | 269 | 485 | 887 | 863 | 1059 | 893 | 5288 |
| Steam cleaners (general) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 86 | 604 | 1825 | 2143 | 4658 |
| Motion-activated sprinklers | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 110 | 1271 | 1738 | 1062 | 4181 |
| General insecticide, perimeter and bug sprays | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 14 | 84 | 482 | 1085 | 1227 | 726 | 3620 |
| Sprayers (backpack, pump, battery, mist) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 2 | 4 | 4 | 96 | 822 | 1379 | 1253 | 3561 |
| Live traps and cage traps (raccoon, squirrel, skunk) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 77 | 580 | 1115 | 1380 | 3152 |
| Bed bug interceptors, traps and monitors | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 109 | 853 | 1018 | 1070 | 3050 |
| Rat and mouse poison and bait | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 136 | 650 | 944 | 1294 | 3024 |
| Earwig, centipede, boxelder, stink bug, carpet beetle products | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 70 | 1291 | 890 | 697 | 2948 |
| Silverfish traps and killers | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 70 | 909 | 955 | 831 | 2765 |
| Spider sprays and traps | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 17 | 379 | 1259 | 1012 | 2670 |
| Mouse traps | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 294 | 559 | 492 | 1155 | 2500 |
| Bed bug steamers | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 27 | 519 | 983 | 854 | 2383 |
| Sump pumps | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 85 | 1112 | 1057 | 2254 |
| Bed bug heaters and heat boxes | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 146 | 742 | 728 | 549 | 2165 |
| Tick removal tools, tubes and kits | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 16 | 171 | 313 | 246 | 356 | 315 | 1419 |
| Fly traps, tapes and house fly killers | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 37 | 70 | 409 | 386 | 389 | 1295 |
| Bird spikes, netting and deterrents | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 4 | 0 | 135 | 424 | 408 | 972 |
| Moth traps and repellents (pantry and clothes) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5 | 141 | 204 | 593 | 943 |
| Rodent exclusion (steel wool, door sweeps, mesh) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 13 | 167 | 710 | 893 |
| Heaters (garage, shed, space) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 48 | 180 | 592 | 822 |
| Diatomaceous earth | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 87 | 155 | 156 | 231 | 630 |
| Drain fly and gnat products | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 2 | 33 | 146 | 181 | 363 |
| HEPA vacuums | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 128 | 71 | 78 | 310 |
| Grub, lawn pest and slug products | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 1 | 5 | 11 | 2 | 15 | 42 |
| Rain barrels and standing-water gear | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 2 | 1 | 3 | 9 | 4 | 4 | 24 |
| Termite products | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 0 | 4 |

**Clicks and average position by family, May to October 2026** (earlier months have almost no rows):

| Family | 26-05 clk | 26-06 clk | 26-07 clk | 26-08 clk | 26-09 clk | 26-10 clk | Total clk | 26-05 pos | 26-06 pos | 26-07 pos | 26-08 pos | 26-09 pos | 26-10 pos | pos all |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Mosquito dunks, bits and larvicides | 108 | 954 | 425 | 115 | 76 | 70 | 1748 | 8.4 | 5.8 | 5.9 | 5.7 | 6.6 | 6.6 | 6.2 |
| Mosquito traps and killers (Dynatrap, Mosquito Magnet, propane, UV) | 9 | 98 | 188 | 177 | 44 | 17 | 533 | 9.9 | 8.9 | 9.0 | 8.7 | 10.1 | 10.1 | 9.1 |
| Personal repellents (DEET, icaridin, natural) | 1 | 15 | 66 | 182 | 60 | 17 | 341 | 10.4 | 8.6 | 7.9 | 8.0 | 8.6 | 9.5 | 8.3 |
| Permethrin and treated clothing | 1 | 269 | 293 | 115 | 39 | 27 | 744 | 8.0 | 7.0 | 6.5 | 6.9 | 7.5 | 7.4 | 6.9 |
| Cockroach baits, gels and sprays | 0 | 0 | 22 | 158 | 149 | 73 | 402 | - | 3.0 | 7.5 | 8.7 | 8.5 | 8.9 | 8.7 |
| Wasp and hornet sprays and foams | 0 | 0 | 9 | 160 | 165 | 23 | 357 | - | 1.0 | 9.2 | 8.6 | 7.4 | 8.2 | 7.9 |
| Bed bug sprays, powders and kill products | 0 | 0 | 11 | 71 | 91 | 71 | 244 | 3.0 | 4.4 | 7.8 | 10.1 | 9.1 | 8.1 | 9.0 |
| Thermacell and area repellers | 0 | 1 | 45 | 58 | 8 | 3 | 115 | 8.5 | 7.5 | 9.4 | 8.3 | 9.6 | 10.6 | 9.1 |
| Foggers (machines, liquid, yard) | 0 | 0 | 112 | 89 | 27 | 9 | 237 | 2.8 | 4.4 | 8.3 | 6.5 | 8.2 | 8.7 | 7.9 |
| Mouse and rat repellents (car, house, ultrasonic) | 0 | 0 | 1 | 7 | 16 | 75 | 99 | - | - | 11.6 | 9.6 | 8.6 | 7.8 | 8.4 |
| Dehumidifiers | 0 | 0 | 7 | 33 | 32 | 32 | 104 | - | - | 12.0 | 10.5 | 10.9 | 10.4 | 10.7 |
| Fruit fly traps and killers | 0 | 0 | 0 | 22 | 27 | 25 | 74 | - | - | 13.9 | 8.4 | 7.5 | 8.4 | 8.2 |
| Wasp dust and powder | 0 | 0 | 2 | 118 | 216 | 70 | 406 | - | 7.0 | 2.9 | 5.9 | 6.1 | 5.1 | 5.9 |
| Mosquito nets, screen tents and screen rooms | 0 | 0 | 3 | 19 | 6 | 1 | 29 | - | 4.0 | 13.9 | 11.3 | 13.6 | 13.7 | 12.5 |
| Electric fly swatters and rackets | 0 | 0 | 21 | 35 | 34 | 9 | 99 | - | 4.5 | 9.5 | 9.1 | 9.7 | 9.0 | 9.4 |
| Bug zappers | 0 | 1 | 32 | 46 | 10 | 5 | 94 | 10.0 | 11.9 | 8.8 | 10.4 | 10.8 | 11.6 | 10.3 |
| Tick sprays, granules and repellents | 10 | 30 | 35 | 13 | 4 | 6 | 102 | 9.2 | 8.8 | 8.2 | 8.5 | 9.6 | 9.3 | 10.8 |
| Wildlife repellents and deterrents (raccoon, skunk, squirrel, deer) | 0 | 0 | 3 | 20 | 47 | 27 | 97 | - | 4.0 | 9.6 | 8.8 | 8.0 | 6.9 | 7.8 |
| Wasp, hornet and yellow jacket traps and decoys | 0 | 0 | 1 | 27 | 35 | 2 | 65 | - | 2.0 | 9.9 | 10.6 | 9.2 | 10.4 | 9.8 |
| Rat traps | 0 | 0 | 6 | 16 | 21 | 25 | 68 | - | - | 12.9 | 10.3 | 9.6 | 9.0 | 9.9 |
| Ant baits, killers and traps | 0 | 0 | 1 | 7 | 17 | 9 | 34 | - | 1.0 | 14.1 | 12.5 | 11.9 | 10.3 | 11.8 |
| Laser mosquito killers (Photon Matrix) | 0 | 0 | 21 | 113 | 43 | 24 | 201 | - | - | 7.5 | 6.3 | 6.4 | 7.7 | 6.6 |
| Flea sprays, traps and treatments | 0 | 0 | 0 | 16 | 19 | 16 | 51 | 34.8 | 1.0 | 7.4 | 9.3 | 8.0 | 7.7 | 8.1 |
| Air purifiers | 0 | 0 | 3 | 6 | 0 | 0 | 9 | - | - | 16.2 | 8.8 | 7.3 | 9.1 | 9.1 |
| Bed bug encasements and mattress covers | 0 | 0 | 1 | 8 | 14 | 6 | 29 | - | - | 7.1 | 11.1 | 7.9 | 8.6 | 9.1 |
| Mosquito yard sprays and concentrates | 5 | 7 | 9 | 4 | 7 | 9 | 42 | 6.7 | 5.6 | 8.3 | 9.4 | 10.8 | 8.8 | 13.0 |
| Steam cleaners (general) | 0 | 0 | 1 | 18 | 29 | 18 | 66 | - | - | 7.1 | 9.0 | 9.6 | 10.0 | 9.7 |
| Motion-activated sprinklers | 0 | 0 | 3 | 10 | 22 | 6 | 41 | - | - | 8.6 | 8.1 | 7.1 | 7.5 | 7.5 |
| General insecticide, perimeter and bug sprays | 0 | 0 | 1 | 8 | 6 | 2 | 17 | 10.2 | 6.1 | 6.3 | 8.7 | 9.9 | 8.7 | 8.7 |
| Sprayers (backpack, pump, battery, mist) | 0 | 0 | 1 | 10 | 14 | 3 | 28 | 3.0 | 2.8 | 11.1 | 11.3 | 11.1 | 11.7 | 11.3 |
| Live traps and cage traps (raccoon, squirrel, skunk) | 0 | 0 | 2 | 4 | 6 | 6 | 18 | - | - | 10.4 | 10.8 | 9.7 | 10.0 | 10.0 |
| Bed bug interceptors, traps and monitors | 0 | 0 | 1 | 8 | 10 | 21 | 40 | - | - | 10.3 | 11.1 | 7.8 | 7.8 | 8.8 |
| Rat and mouse poison and bait | 0 | 0 | 5 | 12 | 15 | 15 | 47 | - | - | 5.7 | 11.6 | 8.1 | 8.2 | 8.8 |
| Earwig, centipede, boxelder, stink bug, carpet beetle products | 0 | 0 | 0 | 6 | 5 | 4 | 15 | - | - | 10.7 | 10.6 | 9.8 | 8.4 | 9.8 |
| Silverfish traps and killers | 0 | 0 | 0 | 6 | 11 | 8 | 25 | - | - | 10.5 | 10.0 | 8.2 | 8.5 | 8.9 |
| Spider sprays and traps | 0 | 0 | 0 | 4 | 9 | 6 | 19 | - | 3.0 | 6.9 | 8.7 | 9.3 | 9.1 | 9.1 |
| Mouse traps | 0 | 0 | 4 | 4 | 4 | 5 | 17 | - | - | 9.3 | 9.7 | 13.8 | 10.8 | 11.0 |
| Bed bug steamers | 0 | 0 | 1 | 19 | 16 | 20 | 56 | - | - | 9.1 | 7.5 | 9.3 | 8.9 | 8.7 |
| Sump pumps | 0 | 0 | 0 | 1 | 11 | 9 | 21 | - | - | - | 13.6 | 8.4 | 11.2 | 9.9 |
| Bed bug heaters and heat boxes | 0 | 0 | 1 | 11 | 11 | 5 | 28 | - | - | 9.3 | 9.0 | 9.0 | 8.1 | 8.8 |
| Tick removal tools, tubes and kits | 1 | 3 | 6 | 3 | 3 | 3 | 19 | 10.1 | 10.8 | 9.1 | 10.3 | 9.2 | 9.9 | 9.7 |
| Fly traps, tapes and house fly killers | 0 | 0 | 0 | 7 | 2 | 3 | 12 | 3.0 | 4.2 | 8.8 | 11.6 | 13.9 | 13.2 | 12.4 |
| Bird spikes, netting and deterrents | 0 | 0 | 0 | 0 | 1 | 1 | 2 | 32.0 | 27.5 | - | 16.4 | 14.7 | 13.0 | 14.3 |
| Moth traps and repellents (pantry and clothes) | 0 | 0 | 0 | 1 | 1 | 2 | 4 | - | - | 7.6 | 12.4 | 11.2 | 8.9 | 9.9 |
| Rodent exclusion (steel wool, door sweeps, mesh) | 0 | 0 | 0 | 0 | 0 | 6 | 6 | - | - | 3.0 | 8.9 | 2.7 | 8.4 | 7.3 |
| Heaters (garage, shed, space) | 0 | 0 | 0 | 1 | 0 | 2 | 3 | - | - | 11.5 | 8.8 | 11.1 | 14.1 | 13.1 |
| Diatomaceous earth | 0 | 0 | 1 | 1 | 3 | 2 | 7 | - | 1.0 | 11.6 | 12.7 | 12.3 | 9.7 | 11.3 |
| Drain fly and gnat products | 0 | 0 | 0 | 0 | 1 | 1 | 2 | - | 4.0 | 20.5 | 30.6 | 13.3 | 9.4 | 13.0 |
| HEPA vacuums | 0 | 0 | 0 | 3 | 1 | 2 | 6 | - | - | 11.3 | 9.3 | 6.9 | 7.0 | 8.4 |
| Grub, lawn pest and slug products | 0 | 0 | 0 | 0 | 0 | 0 | 0 | - | 7.0 | 6.0 | 4.0 | 3.0 | 37.8 | 20.0 |
| Rain barrels and standing-water gear | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 15.0 | 1.0 | 2.7 | 4.7 | 6.5 | 9.2 | 6.6 |
| Termite products | 0 | 0 | 0 | 0 | 0 | 0 | 0 | - | - | - | 1.8 | - | - | 1.8 |

### Inferences
- These tables measure what the site was shown for, not market size. A family's low numbers can mean no demand or no ranking.
- Classification is by word patterns. Some queries land in a neighbouring family, so small rows are approximate.
- Season cannot be read from Search Console here: there is only one May-October, and it overlaps with the site's growth.

### Gaps
- Off-season product data barely exists because most product pages launched in mid-2026. The first real winter reading is the coming one.
- Hidden rare searches cannot be recovered or assigned to families.

## How do the families compare in Google Trends, and which related searches are rising?

### Takeaway
Rodents are the steady year-round core and peak in fall and winter. Mosquito, wasp, fly and ant families are sharply seasonal with near-zero winters. Bed bug, flea, steam, air purifier and rodent families hold through winter. Several families grew strongly: best dehumidifier and basement dehumidifier doubled in a year, best air purifier nearly doubled, picaridin doubled and mosquito dunks grew 3.9x.

### Cited Findings
Every term below came from a page with "mouse trap" as the anchor, so sizes are comparable across pages. 21 pages were loaded with pauses, and no bot check or error appeared. Year on year compares the last 52 weeks with the 52 before. "Floor" means Trends shows zero or near zero for most weeks.

| Term | Size vs 'mouse trap' | Peak month | Peak searches/mo | Off-peak searches/mo | Season | Year on year | vs 3 yrs ago |
|---|---|---|---|---|---|---|---|
| air purifier | 6.32 | Jul | 46,400-139,100 | 25,100-75,300 | year-round | 1.41x | 1.47x |
| dehumidifier | 4.39 | Jun | 40,100-120,200 | 14,100-42,200 | Jun, Jul, Aug, Sep | 1.36x | 1.41x |
| sprayer | 3.73 | May | 30,900-92,800 | 12,200-36,600 | Apr, May, Jun, Jul, Aug | 1.12x | 1.21x |
| sump pump | 3.20 | Jun | 28,100-84,300 | 10,400-31,300 | Mar, Apr, May, Jun, Jul, Aug, Sep | 1.41x | 1.50x |
| steam cleaner | 2.06 | Apr | 12,700-38,000 | 9,000-27,000 | year-round | 1.25x | 1.72x |
| fly trap | 1.42 | Aug | 15,900-47,800 | 2,800-8,500 | Jul, Aug, Sep, Oct | 0.98x | 0.85x |
| bug spray | 1.36 | Jul | 20,100-60,200 | 2,600-7,800 | May, Jun, Jul | 1.29x | 1.34x |
| space heater | 1.29 | Dec | 12,300-37,000 | 3,000-8,900 | Jan, Oct, Nov, Dec | 1.21x | 1.32x |
| thermacell | 1.21 | Jul | 24,600-73,700 | 650-1,900 | Jun, Jul | 1.07x | 0.96x |
| mosquito repellent | 1.07 | Jun | 19,200-57,700 | 1,300-3,800 | May, Jun, Jul | 1.32x | 1.16x |
| steam mop | 1.01 | Feb | 6,800-20,500 | 4,100-12,200 | year-round | 1.26x | 1.14x |
| mouse trap | 1.00 | Nov | 6,800-20,300 | 4,000-12,100 | year-round | 1.02x | 0.90x |
| best air purifier | 0.95 | Jul | 6,800-20,300 | 3,100-9,300 | year-round | 1.92x | 1.98x |
| garage heater | 0.93 | Dec | 10,200-30,700 | 1,600-4,900 | Jan, Oct, Nov, Dec | 1.22x | 1.38x |
| diatomaceous earth | 0.86 | Jul | 7,300-21,900 | 2,600-7,900 | Apr, May, Jun, Jul, Aug | 0.90x | 0.92x |
| fruit fly trap | 0.69 | Sep | 10,200-30,600 | 500-1,500 | Jul, Aug, Sep, Oct | 1.07x | 0.96x |
| permethrin | 0.56 | May | 6,400-19,300 | 1,300-3,800 | May, Jun, Jul | 1.43x | 1.60x |
| mouse traps | 0.51 | Oct | 3,600-10,700 | 2,000-5,900 | Jan, Jul, Aug, Sep, Oct, Nov, Dec | 1.18x | 1.46x |
| ant killer | 0.47 | May | 6,400-19,100 | 190-580 | May, Jun, Jul | 1.02x | 0.90x |
| rat poison | 0.42 | Nov | 2,400-7,200 | 1,800-5,300 | year-round | 0.97x | 0.91x |
| patio heater | 0.41 | Sep | 2,900-8,600 | 1,500-4,600 | Apr, May, Jun, Jul, Aug, Sep, Oct, Nov | 1.05x | 1.12x |
| nematodes | 0.40 | May | 3,600-10,700 | 1,100-3,200 | Apr, May, Jun, Jul, Aug, Sep | 1.15x | 1.20x |
| best dehumidifier | 0.37 | Jun | 3,800-11,300 | 1,300-3,800 | May, Jun, Jul, Aug, Sep | 2.03x | 2.15x |
| flea treatment | 0.37 | May | 2,300-6,800 | 1,400-4,100 | year-round | 0.99x | 0.91x |
| rat trap | 0.35 | Aug | 2,100-6,400 | 1,500-4,600 | year-round | 1.05x | 1.11x |
| bug zapper | 0.30 | Jun | 4,900-14,700 | floor | May, Jun, Jul, Aug | 1.22x | 1.10x |
| mosquito dunks | 0.28 | Jun | 7,400-22,300 | floor | May, Jun | 3.88x | 4.68x |
| basement dehumidifier | 0.28 | Aug | 3,100-9,300 | 320-960 | Jun, Jul, Aug, Sep | 2.03x | 2.22x |
| mosquito net | 0.27 | Jun | 3,500-10,500 | 450-1,400 | May, Jun, Jul | 1.21x | 1.25x |
| fogger | 0.27 | Jul | 3,300-10,000 | 790-2,400 | May, Jun, Jul | 1.57x | 1.17x |
| screen tent | 0.27 | Jul | 3,700-11,200 | 80-240 | May, Jun, Jul, Aug | 1.16x | 1.22x |
| wasp spray | 0.26 | Aug | 4,900-14,800 | floor | Jul, Aug | 1.19x | 1.44x |
| live trap | 0.25 | Jul | 1,700-5,000 | 920-2,800 | year-round | 1.30x | 1.27x |
| pump sprayer | 0.25 | May | 2,500-7,500 | 450-1,300 | Apr, May, Jun, Jul, Aug | 1.27x | 1.48x |
| wasp trap | 0.23 | Aug | 4,300-12,900 | floor | Aug, Sep | 0.94x | 0.90x |
| mouse poison | 0.21 | Oct | 1,500-4,400 | 780-2,300 | Jul, Aug, Sep, Oct, Nov | 1.28x | 1.05x |
| rat traps | 0.20 | Sep | 1,300-3,900 | 750-2,300 | year-round | 1.18x | 1.58x |
| bed bug spray | 0.18 | Jul | 1,200-3,600 | 730-2,200 | year-round | 0.92x | 0.92x |
| spider spray | 0.17 | May | 1,700-5,000 | floor | May, Jun, Jul, Aug, Sep | 1.13x | 1.47x |
| wasp killer | 0.15 | Aug | 2,900-8,600 | floor | Jul, Aug | 1.27x | 1.18x |
| advion | 0.15 | Jun | 1,200-3,500 | 470-1,400 | May, Jun, Jul, Aug, Sep, Oct, Nov | 1.35x | 6.44x |
| mothballs | 0.15 | May | 1,000-3,100 | 650-1,900 | year-round | 1.04x | 0.87x |
| drain fly | 0.15 | Aug | 1,700-5,200 | 200-600 | Jul, Aug, Sep, Oct | 2.00x | 3.31x |
| flea spray | 0.14 | May | 1,100-3,400 | 280-850 | May, Jun, Jul, Aug, Sep, Oct, Nov | 1.26x | 1.29x |
| mosquito trap | 0.14 | Jun | 3,100-9,200 | floor | May, Jun, Jul | 1.80x | 1.00x |
| mouse repellent | 0.13 | Oct | 2,500-7,600 | 280-850 | Oct | 1.53x | 1.34x |
| ant trap | 0.13 | May | 1,800-5,400 | 50-150 | Apr, May, Jun, Jul | 1.51x | 1.64x |
| backpack sprayer | 0.13 | Jun | 1,500-4,600 | floor | May, Jun, Jul | 1.15x | 1.61x |
| grub killer | 0.13 | Apr | 1,900-5,700 | floor | Apr, May | 1.30x | 1.18x |
| picaridin | 0.12 | Jun | 2,200-6,600 | floor | May, Jun, Jul | 2.11x | 3.25x |
| rat bait | 0.12 | Nov | 780-2,300 | 450-1,400 | May, Jun, Aug, Sep, Oct, Nov | 1.06x | 1.75x |
| cockroach killer | 0.11 | Aug | 890-2,700 | 350-1,100 | Jan, Jun, Jul, Aug, Sep, Oct, Nov, Dec | 0.73x | 0.82x |
| dynatrap | 0.11 | Jun | 2,200-6,500 | floor | May, Jun, Jul | 1.34x | 0.60x |
| bait station | 0.10 | Sep | 680-2,000 | 380-1,100 | Apr, May, Jun, Jul, Aug, Sep, Oct, Nov | 1.51x | 3.08x |
| fly swatter | 0.09 | Jul | 1,400-4,100 | floor | Jul, Aug, Sep | 1.03x | 1.20x |
| mosquito magnet | 0.06 | Jun | 1,700-5,200 | floor | May, Jun, Jul | 1.43x | 1.11x |
| deer repellent | 0.05 | May | 830-2,500 | floor | May, Jun, Jul | 1.31x | 0.97x |
| bird netting | 0.04 | Jun | 800-2,400 | floor | May, Jun | 1.16x | 1.45x |
| mosquito coil | 0.04 | Jul | 1,100-3,300 | floor | Jun, Jul | 1.82x | 2.00x |
| bird spikes | 0.03 | May | 470-1,400 | floor | Apr, May, Jun | 1.37x | 0.92x |
| tick remover | 0.03 | May | 800-2,400 | floor | May | 2.59x | 4.00x |
| mattress encasement | 0.03 | Mar | 510-1,500 | floor | Mar, Jun, Jul, Oct | 3.23x | 0.48x |
| roach bait | 0.03 | Jun | 440-1,300 | floor | Jul, Sep | 1.78x | 1.89x |
| delta dust | 0.03 | Aug | 690-2,100 | floor | Aug | 1.40x | 3.17x |
| squirrel repellent | 0.02 | May | 580-1,700 | floor | May | 1.59x | 1.49x |
| electric fly swatter | 0.02 | Jul | 450-1,400 | floor | Jul, Sep | 2.10x | 2.18x |
| motion sprinkler | 0.02 | Jul | 500-1,500 | floor | May | 1.65x | 1.93x |
| citronella candle | 0.02 | Jul | 450-1,400 | floor | Jul | 1.89x | 2.68x |
| air purifier for allergies | 0.02 | May | 450-1,400 | floor | May, Oct | 1.70x | 3.90x |
| motion activated sprinkler | 0.01 | Jun | 270-810 | floor | Jun, Jul, Oct | 0.60x | 0.60x |
| slug bait | 0.01 | Jun | 300-900 | floor | May, Jun | 5.00x | 0.58x |
| photon matrix | 0.01 | Aug | 250-760 | floor | Jul | 0.43x | 0.50x |
| skunk repellent | 0.01 | Jul | 140-410 | floor | Jul, Sep | 0.45x | 0.88x |
| earwig trap | 0.01 | Jul | 390-1,200 | floor | Jul | 3.83x | 0.44x |
| ultrasonic pest repeller | 0.01 | Dec | 160-490 | floor | Aug, Nov, Dec | 0.50x | 0.45x |
| raccoon repellent | 0.00 | May | 130-380 | floor | Sep | 0.17x | 0.90x |
| bed bug traps | 0.00 | Dec | 140-410 | floor | Jan, Mar, Jul, Oct, Dec | 1.00x | 1.00x |
| cimexa | 0.00 | Mar | 110-330 | floor | Feb, Mar | 1.60x | 0.89x |
| moth trap | 0.00 | Oct | 90-270 | floor | Jun, Jul | 0.44x | 0.33x |
| silverfish traps | 0.00 | Oct | 70-220 | floor | Oct, Dec | 0.50x | 0.06x |
| electronic mouse trap | 0.00 | Oct | 90-270 | floor | Sep | 0.44x | 0.80x |
| bed bug trap | 0.00 | Oct | 50-140 | floor | Apr | 0.29x | 0.04x |
| silverfish trap | 0.00 | Nov | 0-0 | floor | Nov | 0.00x | 0.00x |
| bed bug powder | 0.00 | Oct | 50-140 | floor | Nov | 0.33x | 0.40x |
| bed bug heater | 0.00 | Nov | 0-0 | floor |  | 0.00x | 0.00x |

**Batch URLs:** [1](https://trends.google.com/trends/explore?geo=CA&date=today%205-y&q=mouse%20trap,rat%20trap,fruit%20fly%20trap,bed%20bug%20spray,wasp%20spray), [2](https://trends.google.com/trends/explore?geo=CA&date=today%205-y&q=mouse%20trap,mosquito%20repellent,bug%20spray,mosquito%20trap,thermacell), [3](https://trends.google.com/trends/explore?geo=CA&date=today%205-y&q=mouse%20trap,dehumidifier,air%20purifier,sump%20pump,steam%20cleaner), [4](https://trends.google.com/trends/explore?geo=CA&date=today%205-y&q=mouse%20trap,bug%20zapper,fly%20trap,fly%20swatter,mosquito%20net), [5](https://trends.google.com/trends/explore?geo=CA&date=today%205-y&q=mouse%20trap,cockroach%20killer,roach%20bait,ant%20killer,ant%20trap), [6](https://trends.google.com/trends/explore?geo=CA&date=today%205-y&q=mouse%20trap,rat%20poison,mouse%20poison,mouse%20repellent,ultrasonic%20pest%20repeller), [7](https://trends.google.com/trends/explore?geo=CA&date=today%205-y&q=mouse%20trap,wasp%20trap,wasp%20killer,mosquito%20dunks,permethrin), [8](https://trends.google.com/trends/explore?geo=CA&date=today%205-y&q=mouse%20trap,flea%20spray,flea%20treatment,tick%20remover,bed%20bug%20trap), [9](https://trends.google.com/trends/explore?geo=CA&date=today%205-y&q=mouse%20trap,raccoon%20repellent,squirrel%20repellent,skunk%20repellent,live%20trap), [10](https://trends.google.com/trends/explore?geo=CA&date=today%205-y&q=mouse%20trap,bird%20spikes,bird%20netting,motion%20sprinkler,deer%20repellent), [11](https://trends.google.com/trends/explore?geo=CA&date=today%205-y&q=mouse%20trap,moth%20trap,mothballs,silverfish%20trap,spider%20spray), [12](https://trends.google.com/trends/explore?geo=CA&date=today%205-y&q=mouse%20trap,sprayer,backpack%20sprayer,fogger,pump%20sprayer), [13](https://trends.google.com/trends/explore?geo=CA&date=today%205-y&q=mouse%20trap,mouse%20traps,silverfish%20traps,rat%20traps,bed%20bug%20traps), [14](https://trends.google.com/trends/explore?geo=CA&date=today%205-y&q=mouse%20trap,dynatrap,photon%20matrix,delta%20dust,advion), [15](https://trends.google.com/trends/explore?geo=CA&date=today%205-y&q=mouse%20trap,cimexa,electric%20fly%20swatter,motion%20activated%20sprinkler,mosquito%20magnet), [16](https://trends.google.com/trends/explore?geo=CA&date=today%205-y&q=mouse%20trap,mattress%20encasement,bed%20bug%20powder,diatomaceous%20earth,bed%20bug%20heater), [17](https://trends.google.com/trends/explore?geo=CA&date=today%205-y&q=mouse%20trap,garage%20heater,space%20heater,patio%20heater,steam%20mop), [18](https://trends.google.com/trends/explore?geo=CA&date=today%205-y&q=mouse%20trap,screen%20tent,mosquito%20coil,citronella%20candle,picaridin), [19](https://trends.google.com/trends/explore?geo=CA&date=today%205-y&q=mouse%20trap,grub%20killer,slug%20bait,nematodes,earwig%20trap), [20](https://trends.google.com/trends/explore?geo=CA&date=today%205-y&q=mouse%20trap,best%20dehumidifier,basement%20dehumidifier,best%20air%20purifier,air%20purifier%20for%20allergies), [21](https://trends.google.com/trends/explore?geo=CA&date=today%205-y&q=mouse%20trap,rat%20bait,bait%20station,electronic%20mouse%20trap,drain%20fly).

**Rising related searches, from the six lists read:**
- **Mouse trap:** bucket trap for mice, dizzy dunker mouse trap and mouse trap senior (breakout); owltra mouse trap (+1,250%); flip and slide mouse trap (+120%); mouse trap near me (+110%). Movie and drama searches also rise, such as "mickey's mouse trap" — [Trends](https://trends.google.com/trends/explore?geo=CA&date=today%205-y&q=mouse%20trap,rat%20trap,fruit%20fly%20trap,bed%20bug%20spray,wasp%20spray).
- **Fruit fly trap:** stem, ceramic and "best fruit fly trap indoor" (breakout); zevo (+900%); raid instructions (+700%); plug in (+400%); fruit fly light trap (+250%); terro (+50%) — [Trends](https://trends.google.com/trends/explore?geo=CA&date=today%205-y&q=mouse%20trap,rat%20trap,fruit%20fly%20trap,bed%20bug%20spray,wasp%20spray).
- **Bed bug spray:** raid foaming spray, travel size, premo and crossfire concentrate (breakout); crossfire spray (+500%) — [Trends](https://trends.google.com/trends/explore?geo=CA&date=today%205-y&q=mouse%20trap,rat%20trap,fruit%20fly%20trap,bed%20bug%20spray,wasp%20spray).
- **Mosquito repellent:** vanilla extract, thermacell e90, flextail and stickers for adults (breakout); large areas (+850%); buzz patch (+650%); cliganic bracelets (+550%); kombat reviews (+300%); best for skin (+180%) — [Trends](https://trends.google.com/trends/explore?geo=CA&date=today%205-y&q=mouse%20trap,mosquito%20repellent,bug%20spray,mosquito%20trap,thermacell).
- **Dehumidifier:** omnimax, knka and ninesky (breakout); midea cube 20 pint (+3,600%); hogarlabs (+3,500%); how to choose a dehumidifier (+2,200%); midea cube dehumidifier (+1,600%); best for bedroom (+250%); small for bathroom (+200%) — [Trends](https://trends.google.com/trends/explore?geo=CA&date=today%205-y&q=mouse%20trap,dehumidifier,air%20purifier,sump%20pump,steam%20cleaner).
- **Ant killer:** granules for lawns, advion cockroach gel bait and terro carpenter ant & termite killer (breakout); amdro (+400%); pet friendly indoor (+250%); best for indoors (+250%) — [Trends](https://trends.google.com/trends/explore?geo=CA&date=today%205-y&q=mouse%20trap,cockroach%20killer,roach%20bait,ant%20killer,ant%20trap).

**Clear in Trends, little in our Search Console (gaps):**
- mouse trap (1.00 unit; 9 impressions, position 31.8) and mouse traps (0.51; 195 impressions, position 21)
- diatomaceous earth (0.86; 23 impressions)
- bug spray (1.36; 17 impressions)
- thermacell (1.21; 58 impressions, excluding retailer-named)
- rat poison (0.42; 123 impressions, position 25.2)
- flea treatment (0.37; no row)
- nematodes (0.40; 1 impression) and grub killer (0.13; no row)
- garage heater (0.93; no row) and space heater (1.29; 1 impression)
- steam mop (1.01; 1 impression) and steam cleaner (2.06; 9 impressions)
- air purifier (6.32; 1 impression), dehumidifier (4.39; 58 impressions) and sump pump (3.20; 66 impressions)

Source for the gap list: [Search Console](https://search.google.com/search-console/performance/search-analytics?resource_id=sc-domain:buzzskito.ca) and the Trends batches above.

### Inferences
- **Singular and plural are separate in Trends.** "mouse traps" is about half of "mouse trap" and has its own shape, so one-term sizes understate families. I measured this for only mouse and rat traps.
- **Contaminated terms:** "fly trap" includes Venus fly traps; "mouse trap" includes a film, a drama, a game and science projects; "sprayer" includes paint and garden use; "nematodes" includes science; "advion" may include a company; "diatomaceous earth" includes garden and health uses; "steam cleaner" includes carpets; "mosquito bits" is also a typo of "bites" (it still drew 1,626 impressions in October).
- The June 2026 surge in "mosquito dunks" is real in Trends. Its cause is unknown.

### Gaps
- Related lists were read for only six terms. The others were loaded but not read: not done.
- The classic Trends page shows a "Classic Explore is expiring soon" notice, so this method may stop working.
- With the browser pane hidden, the chart loads only after a screenshot forces a page draw. Long waits alone do not load it.
- The cookie notice had no decline option, and I did not click it.

## How do Trends indexes convert to monthly Canadian searches?

### Takeaway
One "mouse trap" unit is about 10,000 Canadian searches a month, with a working range of 5,000-15,000. Treat every estimate as good to about a factor of two at best, and worse for small terms.

### Cited Findings
Method: for terms where the site holds a page-one position, I summed Search Console impressions for all queries containing the term, divided by the term's Trends ratio to "mouse trap" that month, then scaled to the anchor's yearly average. Implied unit sizes — [Search Console](https://search.google.com/search-console/performance/search-analytics?resource_id=sc-domain:buzzskito.ca) and the Trends batches above:

| Term | Month | GSC impressions (all queries containing it) | Avg pos | Term index | Anchor index | Implied unit, searches/mo |
|---|---|---|---|---|---|---|
| permethrin | Jun 2026 | 10,943 | 7.1 | 29.8 | 18.5 | 9,070 |
| permethrin | Jul 2026 | 12,172 | 6.4 | 21.5 | 21.5 | 13,984 |
| mosquito dunks | Jun 2026 | 15,228 | 6.9 | 36.8 | 18.5 | 10,221 |
| mosquito dunks | Jul 2026 | 8,192 | 7.2 | 13.0 | 21.5 | 15,565 |
| mosquito magnet | Jun 2026 | 2,766 | 8.0 | 19.3 | 41.3 | 7,925 |
| mosquito magnet | Jul 2026 | 2,956 | 9.0 | 14.3 | 48.0 | 11,431 |
| dynatrap | Jun 2026 | 6,008 | 9.0 | 23.8 | 41.3 | 13,960 |
| dynatrap | Jul 2026 | 6,463 | 8.6 | 19.3 | 48.0 | 18,518 |
| wasp spray | Aug 2026 | 4,578 | 7.3 | 38.6 | 40.2 | 4,625 |
| wasp spray | Sep 2026 | 9,542 | 7.6 | 17.8 | 48.3 | 20,907 |
| delta dust | Aug 2026 | 2,075 | 4.4 | 7.6 | 57.0 | 15,098 |
| mouse repellent | Oct 2026 | 3,139 | 7.4 | 28.0 | 68.3 | 6,200 |

These twelve readings have a median of about 12,700. Readings left out of that median, because the site does not reliably hold page one for the head term: fruit fly trap (2,311-2,795), picaridin (1,522-3,769), thermacell (206-2,765), drain fly (1,920-6,905), spider spray (4,478-9,534). Readings left out because the Trends index is tiny and noisy: electric fly swatter (27,853-49,042), advion (38,319-47,558). Across all 24 readings with an index of 5 or more, the median is 8,498.

**Sanity check at the small end, both directions:**
- "silverfish traps" shows about 600 impressions a month at position 9-10 while Trends is near zero. "raccoon repellent" shows 831 in September at position 7 while Trends is near zero — [Search Console](https://search.google.com/search-console/performance/search-analytics?resource_id=sc-domain:buzzskito.ca); [Trends](https://trends.google.com/trends/explore?geo=CA&date=today%205-y&q=mouse%20trap,mouse%20traps,silverfish%20traps,rat%20traps,bed%20bug%20traps).

### Inferences
- **Why the range is wide.** Impressions undercount real searches because 50% of impressions are hidden and the site is not always shown. They may overcount because rank-tracking tools and other automated searches can register as impressions. I could not separate these effects.
- **Small terms:** Trends appears blind below about 1-2 index points. For anything near the floor, use Search Console impressions as the guide and label it low confidence.
- **A correction the owner should see.** The site's rule that low impressions at a good average position prove a keyword tool wrong does not hold for head terms. Average position only covers the impressions the site actually received. "dehumidifier" shows 58 impressions at position 6.8 over 16 months, yet Trends puts it at 4.4 times "mouse trap", about 44,000 a month on my calibration (range 22,000-66,000). Ahrefs' old 26,000 sits inside that range, so that test did not show the tool was wrong. The same pattern appears for thermacell (58 at 4.3), air purifier (1 at 5.0) and nematodes (1 at 4.0). These are rare appearances, not real page-one rankings. Search Console still beats keyword tools for sizing terms the site truly ranks for, but it cannot prove a term has no demand.

### Gaps
- There is no independent Canadian volume source to test the calibration. Keyword Planner's free view gives ranges only, and the repo note covers the US (`data/god-build/research/keyword-planner-2026-10-26.md`). Not done for Canada.
- The share of automated impressions is unknown.
- All calibrators come from May to October. Winter conversion is assumed to be the same, and it may not be.

## How big are the adjacent categories, and is the site credible there?

### Takeaway
They are the biggest numbers on the map, but credibility is uneven. Dehumidifiers are a real fit because the site already has 10 pages and an earner. Steam cleaners fit through bed bugs. Sump pumps are plausible. Heaters are weak, air purifiers are weakest for their size, and bird and wildlife deterrents are small but clearly on-topic.

### Cited Findings
- Sizes against "mouse trap": air purifier 6.32, dehumidifier 4.39, sump pump 3.20, steam cleaner 2.06, space heater 1.29, steam mop 1.01, garage heater 0.93, patio heater 0.41 — [Trends](https://trends.google.com/trends/explore?geo=CA&date=today%205-y&q=mouse%20trap,dehumidifier,air%20purifier,sump%20pump,steam%20cleaner); [Trends](https://trends.google.com/trends/explore?geo=CA&date=today%205-y&q=mouse%20trap,garage%20heater,space%20heater,patio%20heater,steam%20mop).
- Bird and wildlife sizes are small: live trap 0.25, deer repellent 0.05, bird netting 0.04, bird spikes 0.03, squirrel repellent 0.02, motion sprinkler 0.02, skunk repellent 0.01, raccoon repellent near the floor — [Trends](https://trends.google.com/trends/explore?geo=CA&date=today%205-y&q=mouse%20trap,raccoon%20repellent,squirrel%20repellent,skunk%20repellent,live%20trap); [Trends](https://trends.google.com/trends/explore?geo=CA&date=today%205-y&q=mouse%20trap,bird%20spikes,bird%20netting,motion%20sprinkler,deer%20repellent).
- Search Console nonetheless shows raccoon deterrent pages working: `/blog/raccoon-deterrent` has 4,558 Canadian impressions, 52 clicks, position 6.5 in 90 days, and `/blog/motion-activated-sprinkler-canada` has 4,761 impressions, 52 clicks, position 7.5 — [Search Console](https://search.google.com/search-console/performance/search-analytics?resource_id=sc-domain:buzzskito.ca).
- The dehumidifier pages rank unevenly in 90 days: cold garage 8.3, large capacity 9.8, basement 15.7, whole house 19.3 — [Search Console](https://search.google.com/search-console/performance/search-analytics?resource_id=sc-domain:buzzskito.ca).
- The cold-garage dehumidifier page was the second-most-clicked Amazon page in the last 30 days (42 Canadian clicks on 80 views), and the motion sprinkler is the top seller in every period seen — [`reports/amazon-what-sells-2026-10-30.md`](reports/amazon-what-sells-2026-10-30.md).

### Inferences
- **Dehumidifiers:** credible, and growing fast. Build the missing overall page and lift the basement page. Humid-basement moisture links naturally to pests.
- **Steam cleaners:** credible for bed bugs, stretching for floors. An overall page is a reasonable test.
- **Sump pumps:** plausible through basement moisture, but head terms are likely retailer-led.
- **Heaters:** demand peaks now, but the fit is weak. The cold-garage page is the only bridge. Test one page at most.
- **Air purifiers:** the largest and fastest-growing, but a pest control site has little claim here. Do not lead with it. The dust-mite page is the honest angle.
- **Bird and wildlife:** small in Trends, but Search Console and earnings per click (46 cents on wildlife) are better than Trends implies. Worth a few pages.

### Gaps
- Not done: page-one checks for adjacent terms, so "retailer-led" is an expectation rather than a finding.
- Commission rates by appliance category were not checked.
- Earnings per view on adjacent pages are unknown. Dehumidifier earnings were hidden in Amazon's October tag report.

## Where is coverage missing, wrong or weak?

### Takeaway
The site is not short of product pages: it has 174 product pages and 64 remedy pages across most families. The gap is mostly ranking on head terms, plus a short list of families with no page at all. The 100-page god list targets US identification searches, so it does not address this demand.

### Cited Findings
- Page types: 174 product, 97 information, 64 remedy, 335 in total — [`data/amazon/page-types-2026-10-20.json`](data/amazon/page-types-2026-10-20.json).
- The article index holds 597 articles, mostly ticks (106), mosquitoes (103), bed bugs (79) and mice (49) — [`lib/article-index.json`](lib/article-index.json).
- The god list is 64 species ID, 18 identification, 13 bites and stings and 5 droppings pages, sized on US searches — [`data/god-build/research/god-list-2026-10-26.md`](data/god-build/research/god-list-2026-10-26.md).
- **No page:** bird spikes, bird netting, grub killer and nematodes, squirrel, skunk and deer repellent, garage and space heaters, overall best dehumidifier, best steam cleaner, best bug spray, mothballs as a buying page. Checked against the [`app/blog/`](app/blog/) and [`content/guides/`](content/guides/) file lists.
- **Weak page (position 11 or worse, or very few impressions, in 90 days):** best-mouse-trap-canada (13.4), mice-traps (17 impressions), mice-poison (111 impressions), diatomaceous-earth-for-bed-bugs (11.3), best-dehumidifier-for-basement-canada (15.7), best-steam-mop-for-hardwood-floors-canada (13.1), best-screen-tent-canada (12.9), bed-bug-spray-canada (12.9), how-to-get-rid-of-drain-flies-canada (12.0) — [Search Console](https://search.google.com/search-console/performance/search-analytics?resource_id=sc-domain:buzzskito.ca).
- **Wrong page or wrong intent:** thermacell-canada-where-to-buy draws retailer-named searches and 7 clicks on 4,749 impressions. ultrasonic-pest-repellers-do-they-work draws 4 clicks on 2,820 impressions. `backpack-sprayer-canada` has only 49 impressions while narrower reviews exist — [Search Console](https://search.google.com/search-console/performance/search-analytics?resource_id=sc-domain:buzzskito.ca).

### Inferences
- More pages in already-covered families would mostly compete with existing ones. Lifting existing pages should come first.
- `best-mouse-trap-canada` and `mice-traps` may split the same demand. Consider a clear split between buying and how-to intent.

### Gaps
- Not done: full page-by-page review of content quality.
- Coverage was checked by slug. A page could cover a topic without naming it.
- Not done: comparison with pages that have not yet been released, apart from the five scheduled guides listed in `content/guides-scheduled/`.

## Can each product family legally be sold and recommended in Canada?

### Takeaway
No product-by-product registry check was completed. What follows are family-level rules from primary sources. Physical traps and appliances are generally clear. Chemical products need a PCP number, product by product. Flying-insect devices and repellent devices have special rules that catch many mosquito traps. Any named product must be checked in the Health Canada registry before it is recommended.

### Cited Findings
- **Registry to check:** Health Canada's Pesticide Product Information and label search, for example [this result page](https://pr-rp.hc-sc.gc.ca/pi-ip/result-eng.php?1=10000&2=10008&3=nh&4=y&5=2&6=desc&7=x&8=E). Registered products show a "Reg. No. 00000 P.C.P. Act" number — [Health Canada, Personal insect repellents](https://www.canada.ca/en/health-canada/services/about-pesticides/insect-repellents.html).
- **Devices:** a device not of a type in Schedule 1 is exempt from the Act, under section 3(1)(a) — [Pest Control Products Regulations](https://laws-lois.justice.gc.ca/eng/regulations/SOR-2006-124/FullText.html).
- **Schedule 1 lists:** garment bags, cabinets or chests sold to protect clothing or fabrics from pests; devices to attract or destroy flying insects; devices to repel pests by causing physical discomfort; devices that attach to garden hoses to apply a pest control product; devices for automatic or unattended application; ultraviolet and ozone-generating devices — [Pest Control Products Regulations](https://laws-lois.justice.gc.ca/eng/regulations/SOR-2006-124/FullText.html).
- **Schedule 2 flying-insect conditions:** indoor devices without a chemical active ingredient may go unregistered if CSA-certified. Outdoor non-chemical devices may too, but the label must say the device "does not control blackflies, mosquitoes or other biting flies" — [Pest Control Products Regulations](https://laws-lois.justice.gc.ca/eng/regulations/SOR-2006-124/FullText.html).
- A 2018 pre-consultation proposed changing the device rules. I did not confirm an outcome, though the current consolidated text still shows Schedule 1 — [PRO2018-02](https://www.canada.ca/en/health-canada/services/consumer-product-safety/pesticides-pest-management/public/consultations/regulatory-proposals/2018/pest-control-devices/document.html).
- **Repellents:** DEET up to 30% for adults and children over 12, and up to 10% for children aged 2-12 and for 6 months to 2 years. No DEET under 6 months. Icaridin not under 6 months. PMD not under 3. Permethrin is listed for clothing only, and metofluthrin for clip-on devices. Wristbands, and electronic or ultrasonic devices, are listed as not protecting well. Page dated 2021-06-02 — [Health Canada](https://www.canada.ca/en/health-canada/services/about-pesticides/insect-repellents.html).
- **Rodenticides:** domestic products with brodifacoum, bromadiolone or difethialone are prohibited. Domestic products must be used in bait stations and sold packaged with one. Loose meal, grain, pellet and liquid baits are prohibited. Page dated 2017-05-04 — [Health Canada Q&A](https://www.canada.ca/en/health-canada/services/consumer-product-safety/reports-publications/pesticides-pest-management/fact-sheets-other-resources/rodenticides-agricultural-settings/questions-answers.html).
- A 2026 registration decision covers cholecalciferol domestic baits, read as a search summary only and not opened — [RD2026-15](https://www.canada.ca/en/health-canada/services/consumer-product-safety/reports-publications/pesticides-pest-management/decisions-updates/registration-decision/2026/cholecalciferol-selontra-rodent-bait-tc-411-412-413-tc-bulk.html).
- **Ontario:** pesticides are banned for killing weeds and insects on lawns, gardens, patios and driveways, except for products with only allowed active ingredients. Uses to protect health or safety against wasps, mosquitoes, fleas or ticks that bite pets, indoor pests, structural pests and disease-spreading rodents are allowed. Page updated 2021-06-23 — [Ontario](https://www.ontario.ca/page/pesticides-home-lawns-and-gardens).
- Lawn ant control is a prohibited cosmetic use, while preventing ants from entering a home is excepted. Read as a search summary only — [Ontario guide to pesticide classes](https://www.ontario.ca/page/guide-pesticide-classes).
- Health Canada says bug zappers do not reduce mosquito populations. Read as a search summary only — [Health Canada, Mosquitoes](https://www.canada.ca/en/health-canada/services/pest-control-tips/mosquitoes.html).
- **Repo notes, not re-verified:** Harris is described as not registered in Canada ([`reports/amazon-what-sells-2026-10-30.md`](reports/amazon-what-sells-2026-10-30.md)). Boric acid dust is described as cancelled for home use ([`CLAUDE.md`](CLAUDE.md)). The Advion page calls it a grey-market answer ([`lib/article-index.json`](lib/article-index.json)).

**Family-level flags:**

| Family | Flag | What to do |
|---|---|---|
| Mouse and rat snap, electronic, bucket and live traps | Clear on the device rules (A) | Provincial wildlife rules for live traps not checked |
| Encasements, interceptors, steamers, sprayers (non-hose), nets, screen tents, bird spikes and netting, motion sprinklers | Clear on the device rules (A) | Hose-end and automatic misting units are B. Federal bird rules not checked |
| Bed bug heat cabinets (PackTite, ZappBug) | Check | May fall under "cabinets or chests" if sold to protect clothing or fabrics |
| Bug zappers, mosquito traps, UV fly traps, wasp and fruit fly traps | B | Claims about mosquitoes need a registered device. Attractant chemicals may need their own registration |
| Ultrasonic repellers | B, if they work by causing physical discomfort | Health Canada lists them as not protecting well |
| Air purifiers, dehumidifiers, heaters, sump pumps, steam cleaners | E | Ozone or UV pest claims are Schedule 1. Name no pest-kill claims unless registered |
| Rodent poison and bait | C, restricted | Domestic class only, sold with a station. No second-generation anticoagulants |
| Repellents, bug spray, picaridin, Thermacell-type devices | C | Check each product. Stickers and patches are not named on the Health Canada page |
| Permethrin | C, flagged | Health Canada lists clothing only. Check each product, including Sawyer. Yard use needs separate checks |
| Diatomaceous earth | C, flagged | Only registered products for pest claims. "Food grade" products sold for pests need checking |
| Wasp sprays and dust, ant, roach and flea sprays | C | Delta Dust and Advion must be checked. US-only brands may be unregistered |
| Flea treatments for pets | C or vet drug | Food and Drugs Act products fall outside the Act (s.3(1)(b)). Many are likely vet-only |
| Grub killers, lawn ant granules, lawn and garden insect sprays | O | Banned on lawns in Ontario unless on the allowed list. Check nematodes separately |
| Deer, squirrel and skunk repellents | C, O check | Repellents need PCP numbers. Garden use may fall under the ban |

### Inferences
- Pages should recommend product types and link only to products confirmed in the registry. This matches the site's rule 7 on primary sources.
- The flying-insect rule matters most for the money pages. A mosquito trap sold without a registration may not be legal to sell with a mosquito claim, even if it is listed on Amazon.ca.
- Amazon.ca listing a product does not show it is legally registered.
- This is research, not legal advice. A licensed operator's false claim is a liability, so doubtful rows should wait for a registry check.

### Gaps
- Not done: registry lookups for Thermacell, Sawyer permethrin, Delta Dust, CimeXa, Crossfire, Mosquito Dunks, Advion, Raid, Wilson, Terro, Zevo, mothballs and diatomaceous earth brands.
- Not done: Ontario Fish and Wildlife rules on live trapping, federal migratory bird rules, the current Ontario allowed-ingredient list, glue boards, and provinces other than Ontario.
- Three sources above were read only as search summaries, as marked.
- The Health Canada pages are several years old. The current rules should be confirmed before publishing.
