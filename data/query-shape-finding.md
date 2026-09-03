# The query-shape thesis is dead. What killed it is more useful.

Measured and then adversarially tested 2026-09-03. **I was wrong, the refuters were also
partly wrong, and the real finding is bigger than either.** Full workflow: 4 adversarial
lenses + 3 market-research agents + a judge, ~913K tokens.

---

## What I originally claimed

Among query-page pairs ranking top-10 with >=100 impressions, factual questions converted at
0.51% and everything else at 1.33-1.54% — a 3x gap at the same average position. I proposed
that AI Overviews answer trivia inline so the click never lands, and that the site should stop
building factual-question content.

## Why it is wrong

**The mechanism is dead.** Live SERP snapshots show an AI Overview at position 1 on **100% of
the "zero-click" queries AND 100% of the earners**. The feature named as the cause is present
everywhere, so it cannot explain a difference between the groups. Worse for the thesis:
buzzskito is cited *inside* the AI Overview on `does dynatrap work` (2.3% CTR, earns) and on
`how long do mosquito bites last` (0%, dies). Same feature, same citation, opposite results.

**The effect is mostly a PAGE effect, not a query-shape effect.** This is the control I should
have run first. Restricting to the 18 Canadian pages that carry >=150 impressions of *both*
shapes, so the page is held constant:

| | Impressions | Clicks | CTR |
|---|---|---|---|
| factual queries | 12,560 | 103 | **0.82%** |
| everything else | 95,884 | 1,015 | **1.06%** |

**The 3.9x gap collapses to 1.3x**, and factual wins outright on 8 of the 18 pages. What
looked like a query-shape law was mostly which pages the queries happened to land on. Some
pages convert at 2.3% and some at 0.12%, across every query shape.

## Where the refuters were also wrong

The strongest counter-claim — and the one the judge leaned on to say acting on my thesis
"would have destroyed value" — was that Canadian pure-trivia duration questions run
**4.61-6.35% CTR**, making factual content the site's *best* Canadian segment.

I re-ran it on the same file. Every Canadian `how long do X live/last` query:
**7,618 impressions, 19 clicks — 0.25%.** With the impressions>=20 floor: **0.18%.** Not
4.61%. That claim does not survive contact with the data, so "it would have destroyed value"
is not established either. The truthful position is narrower: **the effect is real but small
and page-driven, so acting on it would have been unjustified, not catastrophic.**

---

## THE ACTUAL FINDING: a flat ~5x CTR ceiling at every position

This is the number that matters, and nobody on this project had looked at it. Canadian traffic
only — the market we can monetize:

| Position | Impressions | Clicks | Our CTR | Benchmark | Ratio |
|---|---|---|---|---|---|
| 1-2 | 8,187 | 305 | 3.73% | ~27% | **0.14x** |
| 2-3 | 21,784 | 660 | 3.03% | ~15% | **0.20x** |
| 3-4 | 25,493 | 582 | 2.28% | ~11% | **0.21x** |
| 4-5 | 20,395 | 492 | 2.41% | ~8% | **0.30x** |
| 5-7 | 110,842 | 1,962 | 1.77% | ~6% | **0.30x** |
| 7-10 | 202,111 | 1,457 | 0.72% | ~3.5% | **0.21x** |
| 10-15 | 79,762 | 269 | 0.34% | ~2% | **0.17x** |

**The ratio is flat.** It does not improve at the top. At position 1-2 the site earns 3.73%
where a normal result earns ~27%. Whatever is wrong is wrong *before* ranking — people see the
result and do not click it.

**Verified against pruning:** these are the multi-dimension files, which the repo warns can
drop 50-60% of clicks. For this Canadian 84-day pull the bias is negligible — 95.8% impression
capture, 91.6% click capture, pruned CTR 0.96x true. Scaling every row up by 1.05x changes
nothing about the conclusion.

### What this reframes

- **Ranking work pays about a fifth of what it should.** Every position gained is worth ~20% of
  its normal value. That caps the return on the entire SEO programme.
- **62.7% of Canadian impressions sit at position 7 or worse** — 300,871 impressions earning
  1,757 clicks at 0.58%.
- **The constraint is not content, position, or query shape. It is that the snippet does not
  earn the click.** What a searcher sees is the title and the meta description.

**And that collides with a standing constraint.** `No title-tag changes` has governed this
whole programme. The data now says titles and descriptions are the most likely site of the
loss. That constraint should be revisited deliberately by the owner — not quietly broken, and
not quietly obeyed while the thing it protects is the thing that is failing.

**Honest caveat on the benchmark:** published CTR curves are blended across query types and
skew to head terms. A site ranking largely for long-tail informational queries will
underperform them by construction. A 5x flat gap is too large to be entirely that, but some
of it is.

---

## Confirmed defect: cannibalization

`/blog/how-many-times-can-a-mosquito-bite-you` ranks **position 2.1 on 364 impressions with 0
clicks** for "why do mosquito bites itch" — a question it does not answer — while the correct
page `/blog/why-do-mosquito-bites-itch` sits at position 15.7. Two or three smaller cases
exist (`wasp dust` -> `wasp-dust-canada`, `earwig traps indoor` -> `earwig-traps-indoor-canada`,
both of which have a dedicated page that is not ranking at all).

Total roughly 900 impressions. Real, cheap, additive to fix. Not large.

**A token-overlap detector flagged 9 cases; on inspection only 3-4 are genuine.** The rest are
detector noise — longer slugs win token overlap. Do not act on that list without reading each.

---

## What the market research established: there is no second permethrin

Three agents probed 18 restricted-product families against GSC. Every one came back near-zero
or already covered. `tempo dust` = 11 impressions in 84 days against an Ahrefs figure of
300/mo. `suspend sc` = 1. `tick tubes` = 189. `nootkatone` = 0.

**Ahrefs is unreliable for Canadian long-tail pest terms in both directions** — over by 25-135x
on some terms, under by 135x on `bti canada` (quoted 20/mo, measured 2,695 impressions/month).
**Size from GSC, never from Ahrefs.**

The best-converting shape on the site — buy-intent — is **2.1% of impressions** and is
concentrated in exactly two topics, permethrin and mosquito dunks/BTi. Both are products that
are genuinely hard to buy in Canada. The judge's read, which I agree with: the scarcity that
creates the query is also what makes the category small and mostly already captured.

---

## Standing conclusion

**Stop building pages.** Three stages (D, G, and this one) have now been scoped on premises
that did not survive checking. The measured levers, in order of size:

1. **Why nobody clicks the snippet** — a flat 5x penalty across 480,000 Canadian impressions.
   Untested. Requires revisiting the no-title-changes rule.
2. **Domain authority at DR 2** — changes the CTR curve everywhere at once. Not a writing task.
3. **Cannibalization fixes** — ~900 impressions. Real but small.
4. **New pages** — the whole justified build list is worth roughly $6-17/month.

**Check demand in GSC before writing, not after.**
