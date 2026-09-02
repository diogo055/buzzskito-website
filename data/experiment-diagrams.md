# Natural experiment — do diagrams lift CTR on visual-identification queries?

Registered **2026-09-02**, before any outcome is known. Measure on or after
**2026-09-30** (brief §13 task 73: re-measure 3–4 weeks after deploy).

## The hypothesis

Visual-identification queries underperform badly on this site. Measured across US
queries with ≥50 impressions (GSC 84d, 2026-06-09 → 2026-08-30):

| Query type | Queries | Impressions | Clicks | CTR |
|---|---|---|---|---|
| Visual-identification | 105 | 32,452 | 127 | **0.39%** |
| Everything else | 299 | 53,073 | 439 | **0.83%** |

Non-visual queries convert impressions to clicks **2.1× better**. The site had
**zero images across all 358 blog pages** until 2026-09-01, so the proposed mechanism
is that image-pack and AI-Overview-thumbnail SERPs give a text-only result nothing
to show.

**Prediction:** pages that received a diagram improve CTR on their identification
queries relative to comparable pages that did not.

## Treatment group — diagram shipped 2026-09-01/02 (20 pages)

Baselines for the ones with a measurable US query:

| Page | Key query | US impr (84d) | Baseline CTR | Position |
|---|---|---|---|---|
| /blog/mosquito-larvae-identification | mosquito larvae | 8,139 | **0.04%** | 11.48 |
| /blog/red-ticks-and-clover-mites | red ticks | 1,789 | 0.11% | 7.37 |
| /blog/tick-bite-vs-mosquito-bite | tick bite vs mosquito bite | 1,701 | 0.41% | 6.74 |
| /blog/tick-vs-bed-bug | tick vs bed bug | 948 | **0.00%** | 10.30 |
| /blog/bugs-that-look-like-ticks | bugs that look like ticks | 897 | 1.34% | 6.14 |

Also treated: what-does-mouse-poop-look-like-canada, no-see-um-bites, chigger-bites,
bed-bug-bites, flea-bites-on-humans, why-do-mosquito-bites-itch,
how-many-times-can-a-mosquito-bite-you, why-do-mosquitoes-bite-my-ankles,
horse-fly-and-deer-fly-bite-treatment, deer-flies-horse-flies-ontario,
bed-bug-stains-poop-droppings-canada, bugs-that-look-like-bed-bugs-canada,
what-ticks-look-like-ontario, types-of-ticks-identification,
what-does-tick-look-like-on-dog.

## Control group — identification pages deliberately left without a diagram

| Page | Impressions 28d | Clicks | Position |
|---|---|---|---|
| /blog/what-does-a-spider-bite-look-like | 6,070 | 21 | 9.37 |
| /blog/what-blood-type-do-mosquitoes-bite | 3,709 | 5 | 9.19 |
| /blog/tick-bites-that-wont-heal-when-to-worry | 1,957 | 39 | 7.63 |
| /blog/when-to-worry-about-a-mosquito-bite | 1,428 | 5 | 10.04 |
| /blog/why-mosquitoes-bite-some-people-more | 1,286 | 3 | 17.18 |
| /blog/mosquito-bite-treatment-relief | 855 | 1 | 16.93 |
| /blog/tick-bite-symptoms-what-to-do-ontario | 257 | 0 | 11.92 |
| /blog/what-does-a-tick-bite-look-like | 122 | 0 | 12.19 |

## The confounds, stated up front

1. **107 pages simultaneously received visible FAQ blocks on 2026-09-01**, and that
   set overlaps both groups. Any CTR change on an overlapping page cannot be cleanly
   attributed to the diagram alone. Pages in the treatment group that did *not* also
   get FAQs are the cleanest read — check `data/invisible-faq-pages.json` first.
2. `what-does-a-spider-bite-look-like` is in the control group but is also a Stage E
   US-expansion target. If it receives PAA sections it leaves the control group; note
   that at measurement time rather than pretending it did not happen.
3. September is the start of the off-season. Compare **CTR**, never raw clicks —
   traffic falls for reasons unrelated to this change.

## Decision rule, set now so it cannot be rationalised later

- **Treatment CTR up ≥30% relative to control** → mechanism is real. Extend diagrams
  to the remaining identification pages and to commercial comparison pages.
- **Change under ±15%** → diagrams do not move CTR on this site at this authority
  level. Stop at 20 pages. Do not build more on faith.
- **Treatment down** → check whether the figure is pushing content below the fold;
  consider moving it lower on the page before abandoning.

Record the outcome in `data/seo-changelog.json` and state it plainly in
`reports/latest.md` — **including if it failed**. Brief §13 task 76 requires
reporting a negative result, not quietly dropping it.
