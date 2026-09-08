# Does Finding 1 survive a page-level control?

Run 2026-09-08 on the brief's own dataset: 25,000 page+query pairs, 180 days, all countries.

**Finding 1 says** query type drives CTR at fixed position, and that question-format queries
lose ~half their clicks to AI Overviews and cannot be recovered — so Tier 4 should park them
and take no action.

## Pooled — the brief's table reproduces

| Position | commercial | other | question |
|---|---|---|---|
| 4–7 | 2.22% | 2.25% | **1.33%** |
| 7–10 | 0.85% | 0.97% | **0.69%** |

Overall commercial/question ratio: **1.64x**. So the pattern in the brief is real in the data.

## Within-page — it halves

Commercial and question queries are not spread evenly across pages; they cluster on different
pages, and pages differ enormously in how well they convert. Restricting to the 12 pages
carrying at least 150 impressions of **both** types:

| | pairs | impressions | clicks | CTR |
|---|---|---|---|---|
| commercial | 1,231 | 45,361 | 1,330 | 2.93% |
| question | 557 | 14,593 | 327 | 2.24% |

Ratio falls from **1.64x to 1.31x**, and **question queries out-click commercial ones on 5 of
the 12 pages**.

## Within-page AND position-matched — it inverts

Holding both the page and the position band constant:

| Position | commercial | question | ratio |
|---|---|---|---|
| **4–7** | 2.40% | **3.51%** | **0.68x — question WINS by 46%** |
| 7–10 | 1.42% | 1.17% | 1.21x |

At positions 4–7, on the same page, question-format queries out-click commercial ones.

## What this means for Tier 4

Tier 4 would park **33 pages, 359,721 impressions, 4,805 clicks below benchmark** and take no
action. On this evidence that is writing off recoverable traffic.

The pooled gap is mostly a **page** effect wearing a query-shape costume. Some pages convert
badly across every query type they hold; those pages happen to be question-heavy.

This is the second independent replication — the same control killed the same hypothesis last
week on an 84-day Canada-only dataset (`data/query-shape-finding.md`). Separately, live SERP
checks that week found AI Overviews present on **100% of both** the "dead" and the "winning"
query sets, so AIO cannot be what separates them.

## Honest limits

- **The within-page sample is small.** 12 pages clear the both-types threshold, and only 129
  question pairs sit in the 4–7 band. The direction is consistent across two datasets and two
  methods, but the position-matched inversion rests on thin data and should not be quoted as
  a precise effect size.
- **The page+query pull is pruned by GSC**, so absolute counts here are floors. This test only
  uses it for *relative* comparison within the same pull, which is the use the pruning permits.
- **This does not prove the pages are fixable.** It shows the query type is not the reason they
  underperform. The cause is more likely page-level, which is testable — four title-rewrite
  experiments on exactly this kind of page report 2026-10-15.

## Recommendation

Do not take Tier 4 as settled. Keep the tier as a label, but rather than "no action", hold it
until 2026-10-15 — three of the largest question-intent pages
(`when-are-mosquitoes-most-active`, `how-many-times-can-a-mosquito-bite-you`,
`do-cedar-trees-attract-mosquitoes`) already have rewritten titles in a live experiment. That
experiment will answer whether this traffic is recoverable, using this site's own money, in
five weeks. Deciding now, in either direction, throws that away.
