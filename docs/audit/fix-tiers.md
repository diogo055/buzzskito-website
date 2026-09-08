# Fix tiers — Phase 2

Built 2026-09-08 from `page-classification.csv` (180 days, 757 GSC URLs).

**Exclusions applied before tiering:**
- 185 protected pages (Phase 0) — removed from every tier.
- 176 GSC URLs with no page on disk (old or renamed) — cannot be edited, listed separately.
- 11 `www.` duplicate URLs — a separate finding, see the bottom.
- 71 pages inside a live experiment — eligible for tiers, but **held out of Tier 1**, because changing a title there destroys a running measurement.

## Counts

| Tier | What | Pages | Impressions | Clicks |
|---|---|---|---|---|
| **1** | title/meta fix | **4** (+9 held) | 53,611 | 535 |
| **2** | reviews retrofit | **34** | 1,157,744 | 15,989 |
| **3** | internal link sources | **21** | 976,220 | 14,579 |
| **4** | AI Overview casualties | **15** | 313,398 | 1,168 |
| **5** | dead weight (0 clicks/180d) | **36** | 4,858 | 0 |

## Tier 1 — title/meta fix

commercial intent, residual worse than −0.5pp, impressions over 3,000.

| URL | impr | clicks | pos | residual | lost | top query |
|---|---|---|---|---|---|---|
| `/blog/best-wasp-nest-spray-canada` | 31,021 | 444 | 6.2 | -0.649pp | 201 | wasp spray |
| `/blog/what-colors-attract-mosquitoes` | 10,017 | 23 | 7.6 | -0.86pp | 86 | colours that attract mosquitoes |
| `/blog/do-tiki-torches-repel-mosquitoes` | 9,373 | 53 | 6.8 | -0.885pp | 83 | do tiki torches keep mosquitoes away |
| `/blog/thermacell-refills-recharge-canada` | 3,200 | 15 | 8.1 | -0.621pp | 20 | thermacell refills canada |

**Held out — 9 pages that qualify but are inside a live experiment.** Their titles were
rewritten within the last week and are being measured to 2026-10-15. Touching them now destroys
the comparison and the only site-specific evidence about whether title rewrites work here.

| URL | impr | residual | lost |
|---|---|---|---|
| `/blog/bugs-that-look-like-ticks` | 139,613 | -0.575pp | 802 |
| `/blog/deer-flies-horse-flies-ontario` | 19,677 | -0.962pp | 189 |
| `/blog/male-vs-female-mosquito` | 18,964 | -0.969pp | 184 |
| `/blog/thermacell-canada-where-to-buy` | 28,348 | -0.643pp | 182 |
| `/blog/ultrasonic-pest-repellers-do-they-work` | 19,600 | -0.605pp | 119 |
| `/blog/deer-tick-vs-dog-tick-canada` | 13,548 | -0.668pp | 90 |
| `/blog/tick-vs-bed-bug` | 14,402 | -0.538pp | 78 |
| `/blog/mosquito-bite-vs-spider-bite` | 9,048 | -0.814pp | 74 |
| `/blog/ortho-home-defense-canada-review` | 5,011 | -0.771pp | 39 |

## Tier 2 — reviews retrofit

has an affiliate link and over 100 clicks in 180 days.

| URL | impr | clicks | pos | top query |
|---|---|---|---|---|
| `/blog/laser-mosquito-killer-photon-matrix-review` | 97,091 | 2,167 | 6.9 | photon matrix |
| `/blog/mosquito-bits-canada-vs-dunks` | 62,275 | 2,118 | 5.8 | mosquito bits |
| `/blog/permethrin-canada-yard-clothing-spray` | 59,650 | 1,431 | 6.5 | permethrin spray |
| `/blog/black-flies-ontario-when-they-come-out` | 90,033 | 1,269 | 6.3 | black flies ontario |
| `/blog/bugs-that-look-like-ticks` | 139,613 | 1,222 | 7.4 | bugs that look like ticks |
| `/blog/how-to-get-rid-of-ground-wasps-canada` | 49,651 | 966 | 6.2 | delta dust canada |
| `/blog/are-ticks-dangerous-ontario` | 17,790 | 624 | 5.1 | worst areas for ticks in ontario |
| `/blog/mosquito-dunks-canada-guide` | 50,407 | 614 | 7.2 | mosquito dunks canada |
| `/blog/mosquito-fogger-canada` | 21,167 | 454 | 7.4 | mosquito fogger |
| `/blog/best-wasp-nest-spray-canada` | 31,021 | 444 | 6.2 | wasp spray |
| `/blog/when-are-mosquitoes-most-active` | 87,483 | 328 | 5.6 | what time of day are mosquitoes most active |
| `/blog/mosquito-magnet-canada` | 15,521 | 315 | 8.2 | mosquito magnet |
| `/blog/no-see-um-bites` | 18,096 | 313 | 6.7 | no see ums |
| `/blog/tick-bite-vs-mosquito-bite` | 25,837 | 298 | 6.5 | tick bite vs mosquito bite |
| `/blog/dynatrap-canada-review` | 33,759 | 284 | 8.2 | dynatrap |
| `/blog/mosquito-repellent-guide-ontario-2026` | 11,116 | 278 | 6.3 | best mosquito repellent |
| `/blog/mosquito-season-gta-when-does-it-start` | 37,574 | 273 | 4.8 | mosquito season ontario |
| `/blog/horse-fly-and-deer-fly-bite-treatment` | 36,491 | 266 | 7 | deer fly bite |
| `/blog/bug-zappers-canada-do-they-work` | 19,895 | 238 | 8.6 | bug zapper |
| `/blog/mosquito-larvae-identification` | 62,990 | 171 | 8.7 | mosquito larvae |
| `/blog/what-ticks-look-like-ontario` | 12,901 | 170 | 7.9 | tick identification ontario |
| `/blog/best-mosquito-repellent-device-canada` | 14,550 | 160 | 8.4 | mosquito repellent machine |
| `/blog/best-screen-tent-canada` | 11,485 | 160 | 9.6 | screen tent |
| `/blog/chigger-bites` | 26,507 | 157 | 9.8 | chiggers |
| `/blog/no-see-ums-biting-midges-ontario` | 8,303 | 148 | 6.3 | noseeums |
| `/blog/ultimate-tick-control-guide-ontario` | 17,569 | 147 | 8.4 | tick map ontario 2026 |
| `/blog/mosquito-repellent-plants-ontario` | 10,280 | 138 | 7.5 | mosquito repellent plants |
| `/blog/best-tick-repellent-yard-canada` | 10,269 | 136 | 8.4 | cedarcide canada |
| `/blog/bed-bug-spray-canada` | 6,179 | 129 | 7.7 | best bed bug killer in canada |
| `/blog/tick-removal-tool-guide` | 5,637 | 124 | 8.6 | best tick removal tool |
| `/blog/rat-poison-canada-what-is-legal` | 5,084 | 118 | 6.1 | best mouse poison in canada |
| `/blog/natural-mosquito-repellent-ontario` | 19,146 | 114 | 8.6 | mosquito repellent |
| `/blog/how-long-does-mosquito-spray-last` | 24,009 | 113 | 6.1 | how long does mosquito spray last |
| `/blog/do-cedar-trees-attract-mosquitoes` | 18,365 | 102 | 6 | do cedar trees attract mosquitoes |

## Tier 3 — internal link sources

over 200 clicks in 180 days — these are the pages with equity to route.

| URL | impr | clicks | pos |
|---|---|---|---|
| `/blog/laser-mosquito-killer-photon-matrix-review` | 97,091 | 2,167 | 6.9 |
| `/blog/mosquito-bits-canada-vs-dunks` | 62,275 | 2,118 | 5.8 |
| `/blog/permethrin-canada-yard-clothing-spray` | 59,650 | 1,431 | 6.5 |
| `/blog/black-flies-ontario-when-they-come-out` | 90,033 | 1,269 | 6.3 |
| `/blog/bugs-that-look-like-ticks` | 139,613 | 1,222 | 7.4 |
| `/blog/how-to-get-rid-of-ground-wasps-canada` | 49,651 | 966 | 6.2 |
| `/blog/are-ticks-dangerous-ontario` | 17,790 | 624 | 5.1 |
| `/blog/mosquito-dunks-canada-guide` | 50,407 | 614 | 7.2 |
| `/blog/mosquito-fogger-canada` | 21,167 | 454 | 7.4 |
| `/blog/best-wasp-nest-spray-canada` | 31,021 | 444 | 6.2 |
| `/blog/lyme-disease-risk-areas-ontario-2026` | 14,805 | 383 | 6.4 |
| `/blog/when-are-mosquitoes-most-active` | 87,483 | 328 | 5.6 |
| `/blog/mosquito-magnet-canada` | 15,521 | 315 | 8.2 |
| `/blog/no-see-um-bites` | 18,096 | 313 | 6.7 |
| `/blog/tick-bite-vs-mosquito-bite` | 25,837 | 298 | 6.5 |
| `/blog/how-many-times-can-a-mosquito-bite-you` | 56,945 | 294 | 5.2 |
| `/blog/dynatrap-canada-review` | 33,759 | 284 | 8.2 |
| `/blog/mosquito-repellent-guide-ontario-2026` | 11,116 | 278 | 6.3 |
| `/blog/mosquito-season-gta-when-does-it-start` | 37,574 | 273 | 4.8 |
| `/blog/horse-fly-and-deer-fly-bite-treatment` | 36,491 | 266 | 7 |
| `/blog/bug-zappers-canada-do-they-work` | 19,895 | 238 | 8.6 |

## Tier 4 — AI Overview casualties

**313,398 impressions and 4,686 clicks below benchmark are parked here.**

The brief says take no action. **I recommend changing that to "hold until 2026-10-15"** — see
`finding1-control-test.md`. The premise for this tier did not survive a page-level control:
within-page and position-matched at positions 4–7, question queries *out-click* commercial ones
(3.51% vs 2.40%). Three of the largest pages here already have rewritten titles in a live
experiment that reports 2026-10-15 and will answer this with real money.

| URL | impr | clicks | pos | residual | lost |
|---|---|---|---|---|---|
| `/blog/when-are-mosquitoes-most-active` | 87,483 | 328 | 5.6 | -1.705pp | 1,492 |
| `/blog/how-many-times-can-a-mosquito-bite-you` | 56,945 | 294 | 5.2 | -2.224pp | 1,266 |
| `/blog/how-long-does-mosquito-spray-last` | 24,009 | 113 | 6.1 | -1.609pp | 386 |
| `/blog/why-do-mosquito-bites-itch` | 41,947 | 82 | 7.7 | -0.895pp | 375 |
| `/blog/do-cedar-trees-attract-mosquitoes` | 18,365 | 102 | 6 | -1.525pp | 280 |
| `/blog/how-long-do-ticks-live` | 27,056 | 65 | 8 | -0.85pp | 230 |
| `/blog/why-do-mosquitoes-bite-my-ankles` | 12,831 | 44 | 5.8 | -1.737pp | 223 |
| `/blog/can-mosquitoes-bite-through-clothes` | 16,963 | 62 | 6.7 | -1.084pp | 184 |
| `/blog/can-ticks-fly-jump-swim` | 14,013 | 31 | 7.6 | -0.869pp | 122 |
| `/blog/what-eats-ticks-and-mosquitoes` | 5,215 | 13 | 8.1 | -0.841pp | 44 |
| `/blog/are-ticks-arachnids-or-insects` | 3,293 | 4 | 7.1 | -1.329pp | 44 |
| `/blog/citronella-candles-canada-do-they-work` | 2,544 | 13 | 8 | -0.579pp | 15 |
| `/blog/what-percentage-of-ticks-carry-lyme-ontario` | 1,216 | 10 | 6.1 | -1.258pp | 15 |
| `/blog/do-ticks-fly-or-jump` | 722 | 5 | 6.6 | -0.757pp | 5 |
| `/blog/what-does-a-tick-bite-look-like` | 796 | 2 | 8.9 | -0.579pp | 5 |

## Tier 5 — dead weight

36 pages, 4,858 impressions, **zero clicks in 180 days**.

Recommendations only. **Nothing here is executed** — and none of it can be until 2026-10-15,
because redirecting or noindexing changes URLs while a randomized slug test is running.

| URL | impr | pos | words | last modified |
|---|---|---|---|---|
| `/blog/why-do-mosquitoes-exist` | 1,676 | 7.9 | 2,699 | 2026-09-01 |
| `/blog/hidden-mosquito-breeding-spots-backyard` | 383 | 11.9 | 1,417 | 2026-08-25 |
| `/blog/goodnature-a24-review-canada` | 255 | 9.1 | 2,921 | 2026-08-25 |
| `/blog/lyme-disease-tick-prevention-ontario` | 250 | 25.1 | 2,299 | 2026-08-14 |
| `/blog/mosquito-control-milton-georgetown` | 205 | 10.4 | 1,150 | 2026-07-16 |
| `/blog/best-commercial-steam-cleaner-canada` | 188 | 24.4 | 3,203 | 2026-08-25 |
| `/blog/how-to-remove-tick-from-dog-ontario` | 186 | 8.3 | 1,722 | 2026-09-01 |
| `/blog/can-lyme-disease-kill-you` | 166 | 13.3 | 2,616 | 2026-08-25 |
| `/blog/how-to-check-for-bed-bugs-canada` | 153 | 19.8 | 3,323 | 2026-08-25 |
| `/blog/lyme-disease-symptoms-guide` | 148 | 51.2 | 2,886 | 2026-09-01 |
| `/blog/outdoor-fan-mosquito-control-canada` | 121 | 7.1 | 3,574 | 2026-08-25 |
| `/blog/what-attracts-mosquitoes-to-you` | 118 | 14.7 | 2,243 | 2026-09-05 |
| `/blog/diy-outdoor-misting-system-kit-canada` | 103 | 9.9 | 3,502 | 2026-08-25 |
| `/blog/longray-thermal-fogger-review-canada` | 100 | 6.8 | 3,608 | 2026-09-03 |
| `/blog/pond-aerator-mosquito-larvae-canada` | 93 | 8.4 | 3,460 | 2026-08-25 |
| `/blog/zappbug-room-review-canada` | 81 | 9 | 3,378 | 2026-08-25 |
| `/blog/patio-heater-vs-fire-table-canada` | 71 | 6.6 | 3,695 | 2026-08-25 |
| `/blog/mosquito-trap-running-cost-canada` | 67 | 13 | 3,058 | 2026-09-03 |
| `/blog/green-pool-mosquito-breeding-ontario` | 65 | 6 | 3,460 | 2026-08-25 |
| `/blog/can-dogs-get-lyme-disease` | 60 | 27.4 | 2,926 | 2026-09-01 |
| `/blog/rain-barrel-mosquito-proof-canada` | 59 | 9 | 3,349 | 2026-08-25 |
| `/blog/west-nile-virus-mosquito-risk-ontario` | 54 | 8.5 | 1,196 | 2026-07-28 |
| `/blog/dupray-neat-vs-hill-injection-canada` | 49 | 5.6 | 3,188 | 2026-08-25 |
| `/blog/gutter-guards-mosquito-breeding-canada` | 44 | 8.2 | 3,201 | 2026-08-25 |
| `/blog/how-to-get-rid-of-bed-bugs-canada` | 44 | 10.5 | 4,005 | 2026-09-03 |
| `/blog/bed-bug-control-canada-hub` | 36 | 12.4 | 3,379 | 2026-08-25 |
| `/blog/fall-yard-cleanup-leaf-blower-canada` | 30 | 9.4 | 3,283 | 2026-08-25 |
| `/blog/mosquito-screened-porch-kit-canada` | 25 | 7.3 | 3,228 | 2026-09-03 |
| `/blog/traces-punaises-de-lit-matelas` | 18 | 16.8 | 3,508 | 2026-09-03 |
| `/blog/what-colors-attract-mosquitoes/` | 3 | 1 | 1,383 | 2026-08-25 |
| `/blog/can-mosquitoes-bite-through-clothes/` | 2 | 1 | 2,323 | 2026-09-03 |
| `/blog/bug-zappers-canada-do-they-work/` | 1 | 7 | 14,697 | 2026-09-04 |
| `/blog/mosquito-bite-vs-spider-bite/` | 1 | 1 | 2,087 | 2026-09-05 |
| `/blog/natural-mosquito-repellent-ontario/` | 1 | 1 | 2,942 | 2026-09-05 |
| `/blog/red-ticks-and-clover-mites/` | 1 | 1 | 3,578 | 2026-09-05 |
| `/blog/when-are-mosquitoes-most-active/` | 1 | 1 | 6,068 | 2026-09-05 |

## Separate finding — `www.` duplicate URLs

GSC is reporting **11 URLs on `www.buzzskito.ca`** alongside their non-www twins —
5,276 impressions and 67 clicks.
Several rank well (`/toronto-mosquito-control` at 1.5, `/oakville-tick-spray` at 1.0), so this is
real indexed duplication splitting signal with the canonical host, not a reporting artifact.

This is a **hosting/redirect** fix, not a content one, and it touches service pages — so it is
flagged for Diogo rather than actioned. Worth checking whether the www host 301s to the apex.

| URL | impr | clicks | pos |
|---|---|---|---|
| `https://www.buzzskito.ca/blog/mosquito-season-gta-when-does-it-start` | 3,689 | 47 | 4.8 |
| `https://www.buzzskito.ca/mississauga-mosquito-control` | 703 | 3 | 6.8 |
| `https://www.buzzskito.ca/brampton-tick-spray` | 372 | 4 | 4.9 |
| `https://www.buzzskito.ca/tick-control` | 192 | 1 | 7.4 |
| `https://www.buzzskito.ca/blog/tick-control-ancaster-dundas-hamilton` | 139 | 6 | 5.7 |
| `https://www.buzzskito.ca/woodbridge-mosquito-control` | 61 | 1 | 3.5 |
| `https://www.buzzskito.ca/caledon-tick-spray` | 32 | 1 | 3.6 |
| `https://www.buzzskito.ca/how-it-works` | 31 | 1 | 11.9 |
| `https://www.buzzskito.ca/vaughan-mosquito-control` | 27 | 1 | 7.3 |
| `https://www.buzzskito.ca/halton-hills-tick-spray` | 18 | 1 | 20.8 |
| `https://www.buzzskito.ca/blog/tick-prevention-yard-ontario-safe-for-kids` | 12 | 1 | 6.3 |