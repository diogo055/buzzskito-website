# What a new page actually earns on this site

Measured 2026-09-03/04, in answer to a direct question from the owner: *"shouldn't u make more
of the pages that are working and converting high money?"*

**The instinct is reasonable and the answer is no — and for the first time this project can
put a measured number on it instead of an opinion.**

---

## The deciding measurement: reconstruct every page's build date, join to earnings

Page creation dates come from `git log --diff-filter=A`. Earnings are August Canadian clicks
multiplied by that page's cluster $/blog click from the Amazon Tracking-ID report.

| Built | Pages | CA clicks | $/mo total | Mean/page | **Median/page** | Zero-click |
|---|---|---|---|---|---|---|
| 2026-04 | 66 | 342 | $34.93 | $0.53 | **$0.00** | 61% |
| 2026-05 | 9 | 342 | $62.87 | $6.99 | **$2.13** | 22% |
| 2026-06 | 10 | 3 | $0.16 | $0.02 | **$0.00** | 70% |
| **2026-07** | **215** | **1,258** | **$367.00** | **$1.71** | **$0.16** | **40%** |
| 2026-08 | 46 | 7 | $7.18 | $0.16 | $0.00 | 89% |

**The July cohort is the honest test** — 215 pages built by exactly this process, on exactly
this domain, at exactly this authority, with enough age to have ranked. They earn **$367/month
between them. The mean is $1.71 per page. The median is $0.16. Forty percent earn nothing.**

**Twenty new pages at the median = $3.20/month.** The mean is four times higher but it is
carried by a handful of winners that cannot be picked in advance — site-wide, the top 10 pages
hold 62.6% of all blog clicks and the bottom 250 hold 4.3%.

*(The August cohort's 89% zero-click rate is NOT evidence — those pages are about eleven days
old inside an 84-day window. Re-measure in November.)*

## The "$/page/month" table that suggested building was an averaging artifact

Earlier today the cluster table appeared to show dehumidifier earning $7.69/page and wasp
$7.62/page, which looked like a reason to build more of both. Taking the **median** page in
each cluster instead: wasp $0.76, roach $0.59, steamer $0.51, bedbug $0.28, mosquito $0.06,
**dehumidifier $0.00**.

Not one cluster has a median page clearing $0.80/month. "Wasp earns $7.62/page" is one page —
`how-to-get-rid-of-ground-wasps-canada` — plus four also-rans. "Dehumidifier earns $7.69/page"
is three pages carrying 95% of the impressions and seven corpses. **A new page joins the
corpses, not the outliers.**

## There is also nothing left to point a page at

Scanning all 45,784 Canadian queries: the entire pool where this site ranks below position 12,
excluding retailer-named queries, is 17,300 impressions/month converting **42 clicks/month in
total, across everything.** Filtering to product-shaped queries above 250 impressions with no
matching page returns 12 rows, and every genuine one is already served at position 3-5.

## Ahrefs is not just unreliable here — it is fictional

Every candidate that looked good on Ahrefs died on GSC. The site ranks in the **top 2** for
several of these and still sees almost no impressions, which position cannot explain:

| Term | Ahrefs CA | GSC reality (84 days) | Our position |
|---|---|---|---|
| grub control | 1,800/mo | **8 impressions** | **1.0** |
| springtails | 4,300/mo | **1 impression** | **1.0** |
| dehumidifier | 26,000/mo | **20 impressions** | 4.3 |
| silverfish | 36,000/mo | **5 impressions** | 5.2 |
| house centipede | 12,000/mo | **5 impressions** | 2.2 |
| german cockroach | 7,900/mo | 150 impressions, 0 clicks | 2.1 |
| bald-faced hornet | 4,300/mo | **3 impressions** | — |
| cockroach eggs / american roach / roach droppings | 500–2,300/mo | **ZERO each** | — |

**Ranking first on "springtails" produces one impression per quarter.** Size from GSC, never
from Ahrefs. `grub control` would have been the obvious counter-seasonal September build.

---

## The lever that is 200x bigger, and needs no new URLs

Canadian impressions by position band, 84 days:

| Band | Impressions | Share | CTR |
|---|---|---|---|
| 0–3 | 29,971 | 6.1% | 3.22% |
| 3–5 | 45,888 | 9.4% | 2.34% |
| 5–8 | 178,907 | 36.7% | **1.47%** |
| **8–12** | **195,292** | **40.1%** | **0.52%** |
| 12–20 | 25,985 | 5.3% | 0.28% |

**Forty percent of everything this site earns in Google sits at position 8–12 converting at
0.52%.** The same impressions in the 5–8 band convert at 1.47%. Closing that gap is worth
**+662 clicks/month** — against $3.20/month for twenty new pages.

That is the work already underway: 30 pages of title and description rewrites across three
registered experiments, all measuring 2026-10-15.

## Correction to an earlier estimate in this project

Any figure built on published CTR curves is inflated about 5x for this site. Measured Canadian
CTR is 3.85% at position 0–3 where published curves say ~27%. A dehumidifier consolidation
priced at +$31/month on standard curves is worth **+$5/month** here.

## What would change this answer

1. **The August cohort is unmeasured, not disproven.** 46 pages, eleven days old. Chimney caps,
   roof vents, deck skirting and deer fencing ($80–300 basket, the best in the wildlife area)
   are genuinely untested. **Re-measure early November.**
2. **No page-level revenue truth exists.** Earnings attribute by cluster tag; 97% of Amazon
   clicks are search links with no product attribution. Every figure here is
   (page clicks × cluster rate) — the best available model, still a model.
3. **dehumidifier is n=6 orders and steamer n=8.** Those two rates could move a lot, and they
   are exactly the ones that would make a low-traffic page worth building.
