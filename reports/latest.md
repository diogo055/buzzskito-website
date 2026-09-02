# BuzzSkito affiliate programme — 2026-09-02

## 1. The revenue equation

| Term | Now | Target | Source |
|---|---|---|---|
| Traffic | 9,406 clicks (Aug) | 28,000–35,000 | GSC, complete country dims |
| Affiliate CTR | ~22% | 30% | Amazon clicks ÷ blog clicks |
| Purchase conversion | 9.73% | hold 9–10% | Associates |
| Revenue per order | $2.33 | $6–9 | Associates |
| **Revenue per click** | **$0.21** | $0.60+ | derived |
| Monthly revenue | **$653** (Aug) | $4,000–5,000 peak 2027 | Associates dashboard |

August revenue was **$653**, not the $515 in the brief — that figure was a Jul 14–Aug 29
run rate. September is month 1 of the off-season; a 40–50% traffic fall is expected and is
not a signal.

## 2. CA vs US split

| Month | Total | Canada | US | US share |
|---|---|---|---|---|
| May | 1,810 | 1,714 | 63 | 3.5% |
| Jun | 5,209 | 4,777 | 299 | 5.7% |
| Jul | 6,845 | 5,453 | 762 | 11.1% |
| **Aug** | **9,406** | 6,263 | **1,431** | **15.2%** |

US share is compounding with no US work done. **The brief's 33% (Ahrefs) is wrong — GSC says
15.2%.** The thesis survives because the volume asymmetry is *larger* than briefed.

## 3. Position tracking — the five #1s (damage watch)

All holding. No ranking loss from any change shipped this week.

| Keyword | Market | Position |
|---|---|---|
| mosquito dunks canada | CA | 1 |
| mosquito bits | CA | 1 |
| best fruit fly trap | CA | 1 |
| ttc bed bugs | CA | 1 |
| worst areas for ticks in ontario | CA | 1 |
| tick vs bed bug | US | 1 |

## 4. Click mix — not yet measurable

**This is the metric the brief says decides the outcome, and it could not be measured until
today.** Amazon reports at cluster-tag granularity: 15 buckets for 358 pages. Per-page
revenue per click did not exist.

Per-link tracking shipped today (commit `d02ffef`). First usable mix data ~14 days out.

## 5. Shipped since 2026-08-31

| Change | Scale | Why it matters |
|---|---|---|
| Verified ASIN pins | 7 highest-traffic pages | Amazon was choosing the product on 99.4% of links |
| 6 fall-demand pages | wasp, roach, spider, cluster fly, earwig | Queries we already ranked 6.7–10.5 for with no page |
| **971 FAQ answers made visible** | **107 pages, 459,484 impr** | Schema declared Q&A that did not exist on-page — a guidelines violation on 48% of site impressions |
| 5 original ID diagrams | 8 pages | Site had **zero images across all 358 blog pages** |
| Per-link click tracking | sitewide | Makes revenue per click measurable per page |
| Schema fixes | 9 pages | 4 service pages missing LocalBusiness; 5 dead speakable imports |
| 3 false product claims corrected | 2 pages | "Sawyer year-round on Amazon.ca" — a live search returns zero Sawyer items |

## 6. Kill-criteria status (§13)

| Criterion | Status |
|---|---|
| Clicks down >15% w/w | No — up 40% MoM |
| Any #1 out of top 3 | No — all six holding |
| Affiliate conversion <8% | No — 9.73% |
| Amazon/Levanta account issue | None. Levanta still pending approval |

## 7. What the evidence says to do next

Ranked by measured confidence, not by the brief's ordering:

1. **ASIN pinning at scale.** 2,350 of 2,365 links are Amazon *search* URLs. Measured haircut:
   a steamer cluster written around $200–400 machines realised a **$47.99** basket. This is
   revenue per order — the brief's own biggest lever — and it needs no new traffic.
2. **Finish the image programme.** 21 identification pages still have no visual, carrying
   ~150,000 impressions. Highest-confidence remaining CTR work.
3. **US striking-distance.** ~22,400 clicks/month modelled at position 5. Slower, less certain.
4. **Levanta** — blocked on approval, not on us.

## 8. Contradictions with the brief (§15)

1. **US share 15.2%, not 33%.** Ahrefs roughly doubles it. GSC is truth per §11.
2. **Stage D was already done.** 303/358 pages carry links; only 3 pages qualified as gaps
   (~$12/mo). The real gap was *what the links point at*, not whether links exist.
3. **Stage C's premise was already built.** `lib/amazon.ts` is a fail-closed centralised
   builder with 15 cluster tags and two build guards — stronger than the design the brief
   proposed. Only click tracking was missing, and that is now shipped.
4. **Content decay is unmeasurable.** February 2026 was 43 clicks sitewide. The site is too
   young; revisit in 2027.
5. **Four Stage B recommendations were rejected after verification** — including one that
   would have stripped GTA keywords from 181 service pages, and a "Canada in titles hurts US
   CTR" claim falsified by its own cited example.

## 9. Needed from the owner

1. **Amazon Top-Sellers and Linked-Product reports** — requested twice, not yet in Downloads.
   These show what buyers actually purchased and gate the ASIN pinning priority order.
2. **Levanta**: still pending approval. Nothing is blocked but Stage F.
3. Six tracking IDs were registered on Aug 31 and verified to match the code exactly —
   roughly 460 clicks/month that previously earned nothing now attribute correctly.
