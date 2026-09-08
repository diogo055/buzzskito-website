# The intent rule has an impression-weighting defect

Found 2026-09-08, during Phase 3. Affects tier membership in `fix-tiers.md`.

## What the rule does

Phase 1 classified a page as commercial like this:

```js
const commercial = top.some(q => BRANDS.test(q.query) || COMMERCIAL.test(q.query))
```

`top` is the page's ten highest-impression queries. `.some()` has **no impression weighting**, so
a single query matching `best|buy|price|vs|review|...` or any brand name flips the whole page to
commercial, no matter how small that query is.

## What it did to two Tier 1 pages

| Page | Page impressions | What flipped it | Its impressions |
|---|---|---|---|
| `/blog/what-colors-attract-mosquitoes` | 10,017 | "best colours to avoid mosquitoes" | **7** |
| `/blog/do-tiki-torches-repel-mosquitoes` | 9,373 | "thermacell vs citronella" + 2 others | **16** |

Page-filtered GSC for the tiki page shows its six largest queries — 1,032 impressions — are all
pure questions:

```
do tiki torches keep mosquitoes away   533 |  1 | 0.19% | 7.5
do tiki torches help keep mosquitoes   172 |  1 | 0.58% | 7.3
do tiki torches repel mosquitoes       151 |  1 | 0.66% | 8.7
do tiki torches work                   120 |  1 | 0.83% | 10.6
how far do tiki torches repel...        38 |  1 | 2.63% | 6.9
how to use tiki torches for mosquitoes  18 |  1 | 5.56% | 9.6
```

Phase 3's instruction is to "lead the title with the exact highest-impression commercial query."
On these two pages **there is no such query to lead with.** The instruction is unexecutable, which
is the tell that the classification, not the instruction, is wrong.

Both are question-intent pages. Under the 2026-09-08 decision to hold Tier 4, they are held.

## Blast radius

Of 175 pages classified commercial, **38 (22%)** have commercial queries making up under 10% of
their visible impressions.

| Page impressions | commercial share of visible | Page |
|---|---|---|
| 97,091 | 4.7% | `/blog/laser-mosquito-killer-photon-matrix-review` |
| 21,167 | 5.0% | `/blog/mosquito-fogger-canada` |
| 19,600 | 3.0% | `/blog/ultrasonic-pest-repellers-do-they-work` |
| 19,146 | 6.8% | `/blog/natural-mosquito-repellent-ontario` |
| 15,521 | 4.1% | `/blog/mosquito-magnet-canada` |
| 15,384 | 1.3% | `/blog/flea-bites-on-humans` |
| 10,682 | 1.5% | `/blog/how-to-get-rid-of-wasps-canada` |
| 7,626  | 0.2% | `/toronto-mosquito-control` |

## The important caveat — do not over-read this

"Misclassified" is too strong for several of these. `laser-mosquito-killer-photon-matrix-review`
and `mosquito-magnet-canada` are genuinely commercial *pages* — they sell something — that happen
to attract mostly informational curiosity. The page's purpose and the query's intent are two
different things, and the Phase 1 rule collapsed them into one flag.

So the defect is not "38 pages are in the wrong bucket." It is narrower and more useful:

> **A commercial page with no commercial search demand cannot be fixed by a title rewrite aimed
> at a commercial query, because there is no such query to aim at.**

That is what makes it a Phase 3 problem rather than a filing problem.

## Recommended fix, not yet applied

Replace `.some()` with an impression-weighted share and split the flag in two:

```js
const commercialShare = trig.reduce((a,q)=>a+q.i,0) / top.reduce((a,q)=>a+q.i,0)
const queryIntent = commercialShare >= 0.25 ? 'commercial'
                  : QUESTION.test(topQuery) ? 'question' : 'other'
const pageIsCommercial = /BuyLink|AmazonLink|AwardRow|TopPick/.test(src)   // purpose, from the file
```

Tier 1 should key off `queryIntent`; Tier 2 and the reviews retrofit should key off
`pageIsCommercial`. Re-running this would change tier membership, so it needs approval — it is a
revision of an already-approved Phase 2, not a Phase 3 action.

**Not applied.** Flagged only.
