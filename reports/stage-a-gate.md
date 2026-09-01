# Stage A gate report — inventory and opportunity mining

Completed 2026-09-01. All 12 Stage A artifacts built in `/data`. Every number below was
pulled this session and is reproducible from the cached datasets.

---

## Four findings that change the plan

### 1. The US base is half what the brief assumes — but the opportunity is bigger

The brief (§5) puts the US at 33% of traffic / 2,857 clicks per month, from Ahrefs.
GSC — which §11 designates as truth — disagrees:

| Month | Total clicks | Canada | US | US share |
|---|---|---|---|---|
| May 2026 | 1,810 | 1,714 | 63 | 3.5% |
| Jun | 5,209 | 4,777 | 299 | 5.7% |
| Jul | 6,845 | 5,453 | 762 | 11.1% |
| **Aug** | **9,406** | **6,263** | **1,431** | **15.2%** |

Ahrefs roughly doubles the real US figure. **But the volume asymmetry is far larger than
the brief claims** — and that is the half that matters:

| Keyword | US volume | CA volume | Multiple |
|---|---|---|---|
| house centipede | **150,761** | 14,049 | 10.7x |
| mouse poop | 40,368 | 4,802 | 8.4x |
| what does a spider bite look like | 33,459 | 2,263 | 14.8x |
| bug zapper | 26,851 | 2,179 | 12.3x |
| rat traps | 26,487 | 2,310 | 11.5x |
| mosquito dunks | 17,011 | 1,476 | 11.5x |

The US thesis survives, strengthened. The starting base is smaller and the ceiling higher.
**US share is also compounding on its own** — 3.5% → 15.2% in four months, with no US work done.

### 2. Stage D is already finished — the "fastest revenue in the project" isn't there

The brief expects a large monetization sweep. Measured: **303 of 358 blog pages already carry
affiliate links** (2,365 links total). Pages with ≥50 clicks/28d and fewer than two links:

| Page | Clicks/28d | Links |
|---|---|---|
| /blog/how-many-times-can-a-mosquito-bite-you | 160 | 0 |
| /blog/what-temperature-kills-mosquitoes | 59 | 0 |
| /blog/lyme-disease-risk-areas-ontario-2026 | 56 | 0 |

**Three pages, 275 clicks.** At the site's $0.044 revenue per visit that is ~$12/month.
All three are informational pages where a hard product push would be wrong anyway.

**Stage D as written should be closed out in an hour, not run as a workstream.** The
monetization upside is not in *coverage* — it is in *what the existing 2,365 links point at*.
**2,350 of 2,365 links are Amazon search URLs**, meaning Amazon's algorithm picks the product
on 99.4% of links. That is the real Stage D, and it maps to the brief's revenue-per-order
thesis (§2) far better than link-count coverage does.

### 3. Stage C's premise is already built — except the part that matters

The brief describes links "hardcoded across ~51 files" needing ASIN-keyed centralization.
Actual architecture (`data/repo-map.md`): a single fail-closed builder in `lib/amazon.ts`,
15 cluster tracking IDs in `lib/amazon-clusters.ts`, a four-component render layer, and two
build guards that fail the build on an untagged link. **Centralization exists and is stronger
than the brief's proposed design.**

What genuinely does not exist: **per-link outbound click tracking.** There is no `gtag` event,
no beacon, no listener anywhere. Attribution granularity today is the Amazon cluster tag —
15 buckets for 358 pages. **Revenue per click, the brief's primary metric (§12 task 22), is
currently unmeasurable per page.** That is the whole of Stage C worth doing, and it gates the
feedback loops in §13 tasks 75 and 76.

### 4. Content is built inversely to where it earns

Clicks per page, by vertical, across all 358 blog pages:

| Vertical | Pages | Clicks/28d | **Clicks per page** |
|---|---|---|---|
| wasp | 7 | 1,056 | **150.9** |
| roach | 5 | 318 | **63.6** |
| mosquito | 113 | 4,168 | 36.9 |
| general | 45 | 733 | 16.3 |
| rodent | 16 | 256 | 16.0 |
| tick | 61 | 860 | 14.1 |
| crawlers-flies | 29 | 403 | 13.9 |
| bedbug | 46 | 557 | 12.1 |
| steamer | 11 | 127 | 11.5 |
| wildlife | 11 | 110 | 10.0 |
| home-air-water | 14 | 74 | **5.3** |

**A 28x spread, and page count runs close to inverse to yield.** 46 bed bug pages return
12.1 clicks each; 7 wasp pages return 150.9. This should govern Stage G/H sequencing more
than search volume does.

---

## Top 25 striking-distance opportunities

Scored `volume × CPC × intent × position_proximity × market_weight` per §12 task 5.
Full set: 111 opportunities in `data/striking-distance.csv` (50 US, 61 CA).

| # | Query | Mkt | Pos | Volume | CPC | Page |
|---|---|---|---|---|---|---|
| 1 | bug zapper | US | 16.7 | 26,851 | $0.30 | /blog/bug-zappers-canada-do-they-work |
| 2 | bed bug spray | US | 15.0 | 21,837 | $0.35 | /blog/best-bed-bug-spray-for-mattress-canada |
| 3 | photon matrix | US | 7.3 | 2,700 | $0.80 | /blog/laser-mosquito-killer-photon-matrix-review |
| 4 | mouse poop | US | 4.0 | 40,368 | $0.10 | /blog/what-does-mouse-poop-look-like-canada |
| 5 | mosquito larvae | US | 11.5 | 19,647 | $0.30 | /blog/mosquito-larvae-identification |
| 6 | mosquito dunks | US | 4.5 | 17,011 | $0.07 | /blog/mosquito-dunks-canada-guide |
| 7 | dynatrap | US | 4.8 | 5,428 | $0.20 | /blog/dynatrap-canada-review |
| 8 | best bug zapper | US | 6.0 | 2,371 | $0.45 | /blog/bug-zappers-canada-do-they-work |
| 9 | photon matrix mosquito killer | US | 8.8 | 1,500 | $1.00 | /blog/laser-mosquito-killer-photon-matrix-review |
| 10 | mosquito magnet | US | 5.1 | 3,617 | $0.25 | /blog/mosquito-magnet-canada |
| 11 | best air purifiers for allergies | CA | 8.1 | 3,300 | $0.50 | /blog/best-air-purifier-for-allergies-canada |
| 12 | best fruit fly trap | US | 7.0 | 8,040 | $0.10 | /blog/best-fruit-fly-trap-canada |
| 13 | female mosquito | CA | 10.0 | 1,054 | $3.50 | /blog/male-vs-female-mosquito |
| 14 | mouse poop | CA | 6.7 | 4,802 | $0.50 | /blog/what-does-mouse-poop-look-like-canada |
| 15 | best rat trap | US | 9.0 | 2,700 | $0.30 | /blog/best-rat-trap-canada |
| 16 | advion cockroach gel bait | CA | 8.1 | 3,477 | $0.25 | /blog/advion-cockroach-gel-bait-canada |
| 17 | what time do mosquitoes come out | US | 6.7 | 740 | $1.70 | /blog/when-are-mosquitoes-most-active |
| 18 | mosquito repellent | CA | 11.4 | 3,171 | $0.25 | /blog/natural-mosquito-repellent-ontario |
| 19 | mosquito bits | CA | 5.8 | 1,516 | $0.25 | /blog/mosquito-bits-canada-vs-dunks |
| 20 | pest control etobicoke | CA | 9.3 | 379 | $4.00 | /pest-control-etobicoke |
| 21 | pest control north york | CA | 9.3 | 372 | $4.00 | /pest-control-north-york |
| 22 | mosquito dunks | CA | 5.8 | 1,476 | $0.20 | /blog/mosquito-dunks-canada-guide |
| 23 | what does a spider bite look like | US | 11.6 | 33,459 | $0.03 | /blog/what-does-a-spider-bite-look-like |
| 24 | mosquito control | CA | 15.5 | 1,617 | $1.50 | /learn/how-to-combat-mosquitoes |
| 25 | no see um bites | US | 6.5 | 19,419 | $0.03 | /blog/no-see-um-bites |

**Every one of the top 25 is an EXISTING page needing improvement — not a new page.**
That is the single most actionable fact in Stage A. It means Stage E is an optimization
programme, and the Prime Directive's "expand, don't replace" (§4) governs all of it.

**Two service pages appear at #20 and #21** (Etobicoke, North York — position 9.3, $4.00 CPC).
Those are lead-generating pages at commercial-intent CPC; worth flagging to §14 rather than
treating as affiliate work.

### The single biggest untapped item

**"house centipede": 150,761/mo US, 14,049/mo CA — and we rank position 2.2 in Canada.**
We hold a near-#1 Canadian ranking on the topic and are absent from a US market 10.7x larger.
It did not enter the top 25 because our US position is unranked, so `position_proximity`
never applied. It belongs at the top of the US work regardless of the formula.

---

## Total addressable traffic

Modelled at position 5 with a flat 6% CTR, counting only US queries with volume ≥1,000 that
already appear in GSC: **~22,400 additional clicks/month.**

Against the current 9,406/month that is a plausible path to the brief's 28,000–35,000 target
(§2) **without new content** — purely by moving existing pages up. It is also deliberately
conservative: it excludes house centipede entirely (we don't rank in the US yet), excludes all
CA opportunities, and applies one flat CTR rather than this site's measured 10–21% on
commercial terms at position 2–3.

## Estimated revenue impact per workstream

Ranked by measured evidence, not by the brief's ordering. All figures at current traffic.

| Workstream | Mechanism | Est. monthly | Confidence |
|---|---|---|---|
| **ASIN pinning at scale** (2,350 search links → verified products) | revenue per order: $2.33 → $6–9 | **+$400–900** | Medium-high — measured 16.7x per-conversion gap on high-ticket; 7 pages already pinned as pilot |
| **US striking-distance programme** | +22,400 clicks/mo at $0.044/visit | **+$980** | Medium — depends on ranking movement, unproven at this scale |
| **Levanta high-ticket** | $39/conversion vs $2.33 | **+$300–800** | Unknown — account pending, conversion rate on $259 items unmeasured |
| Per-link click tracking (Stage C) | none directly | **$0** | Certain — but it gates measuring all three above |
| Monetization coverage sweep (Stage D) | 3 pages, 275 clicks | **+$12** | High confidence, trivial size |

**The ordering the evidence supports: Stage C tracking first (it is the instrument), then
ASIN pinning at scale, then US striking-distance, then Levanta when approved.**
That is close to the brief's own sequence, with Stage D collapsed to a footnote.

---

## Contradictions with the brief, logged per §15

1. **US traffic share** — brief 33% (Ahrefs), GSC 15.2%. GSC is truth per §11.
2. **Stage D size** — brief calls it "fastest revenue"; it is 3 pages and ~$12/month.
3. **Stage C premise** — link centralization already exists and is better than the proposed
   design; only click tracking is missing.
4. **Revenue baseline** — brief cites ~$515/mo (Jul 14–Aug 29). The Associates dashboard shows
   **$653 for Aug 1–30 alone** with 2,832 clicks and 295 orders. The August-only figure is the
   better baseline going into the off-season.
5. **Content decay** — `data/content-decay.csv` is empty. The site is too young; February 2026
   traffic was 43 clicks total. Decay analysis is not possible until 2027.
6. **Cannibalization is larger than expected** — 193 queries have 2+ pages competing
   (`data/cannibalization.md`). Flagged only, no action taken, per §12 task 8.

---

## Artifacts

| File | Contents |
|---|---|
| `data/repo-map.md` | Full structural map — 546 pages, link architecture, tracking, schema, geo signals |
| `data/winning-template.md` | Reverse-engineered from six #1-ranking pages |
| `data/content-inventory.json` | 521 pages with type, vertical, market, GSC metrics, link counts |
| `data/coverage-map.md` | Per-vertical coverage, CA vs US, verified gaps |
| `data/striking-distance.csv` | 111 scored opportunities |
| `data/monetization-gaps.csv` | 3 pages |
| `data/us-opportunity.md` | US business case, quantified |
| `data/cannibalization.md` | 193 flagged queries |
| `data/affiliate-links.json` | 2,365 links with page, component, ASIN/search, depth |
| `data/content-decay.csv` | Empty — site too young |
| `data/traffic-geography.md` | Market split, service vs content |
| `data/gsc/` | Cached GSC pulls (gitignored — 23MB) |

### Methodological note worth keeping

GSC prunes multi-dimension queries. Measured on an identical 28-day window:

| Dimensions | Clicks returned |
|---|---|
| (none) | 9,099 |
| page | 9,123 |
| country | 9,099 |
| **page + country** | **3,747 — 59% missing** |

The first 12-month pull used `query × page × country` and undercounted by ~60%. All Stage A
figures were rebuilt on single-dimension pulls with country *filters*, which stay complete.
**Any future analysis must not trust multi-dimension GSC rollups for totals.**
