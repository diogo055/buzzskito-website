# Doubling Amazon revenue — and three corrections to what I told you

2026-09-09. Amends `path-to-5k.md`. Three claims in that document are wrong; correcting them
here rather than editing them silently.

---

## The disputed number, first — it decides the biggest lever on the site

I told you pass-through was "already ~90–100%, that stage is maxed." **That may be wrong, and it
matters more than everything else in this document.**

| basis | pass-through |
|---|---|
| 2,795 Amazon clicks ÷ 2,816 blog clicks (**page+country GSC pull**) | 99.3% |
| 2,795 Amazon clicks ÷ 9,830 blog clicks (**true page dimension**) | **28.4%** |

The ~99% figure rests on a page+country pull — **the exact pull shape this repo has measured
losing 59% of its clicks.** If the true figure is 28.4%, there is large headroom and the mosquito
cluster alone is worth **+$140–238/month**.

**It is settleable in half a day and nobody has ever looked.**
`components/AffiliateClickTracker.tsx` is mounted in the root layout and already fires an
`affiliate_click` event carrying `page_path`, `placement`, `search_term` and `cluster_tag` on
every Amazon anchor click. Divide `affiliate_click` by `page_view` per page over the same 28-day
window as the Associates report. Both numerator and denominator live inside GA4, so the
calculation never touches the GSC pruning trap that caused the dispute.

I do not have GA4 API access. This needs you, or access granted.

**Do not spend a week on placement work before reading that number.**

---

## Correction 1 — the 3%→6% mix shift is ~$40/month, not $200–300

I inferred $200–300 from the blended rate. Measured from the **actual links** — 3,259 link
instances, 997 distinct search strings, 304 carrying pages weighted by real GSC clicks, each
bucketed by the Amazon.ca department verified live — the honest figure is **CA$31–55/month, best
estimate $40.** The absolute ceiling, if the entire 3% band could be purged (it cannot, and it
would be dishonest), is $164.

**Why so much smaller: most of the 3% band physically cannot move.** Amazon.ca files *every*
wearable repellent — permethrin-treated clothing, head nets, gaiters, bracelets — under
Health & Personal Care › Insect & Pest Repellent › **Wearables at 3%**. There is no Clothing (6%)
listing to move them to. That one fact kills the largest apparent swap, because
`insect shield permethrin treated clothing` is 1,883 of the 5,962 click-weight in the band.

Three strings are 76% of the entire 3% band: Insect Shield clothing (1,883), Summit Mosquito Bits
(1,768), picaridin (880).

**The one clean swap.** `/blog/permethrin-canada-yard-clothing-spray`: 1,431 clicks, six affiliate
links, *all six the same 3% string*. Its own PMRA warning box already tells the reader the yard
answer is BTI dunks plus a Thermacell — both verified 6% — and links neither. Adding them links a
recommendation the page already makes. It substitutes nothing and it is honest.

**Two swaps that would not be honest.** Do not swap Bits→Dunks wholesale on
`/blog/mosquito-bits-canada-vs-dunks` — it is the #2 page and its top query is literally
"mosquito bits". Rebalance the standing-water sections only. And do not put a BTI larvicide on the
black-flies page: black flies breed in *running* water, so it would be a false recommendation on a
licensed operator's page. Three rate points is not worth a wrong answer.

---

## Correction 2 — there is a bigger leak, and it is more fixable

Our verified link mix predicts a **5.45%** blended commission. We realise **4.80%**. That
0.65-point gap is **CA$89/month — larger than the entire honest band opportunity** — and it is a
search-link *relevance* problem, not a band-selection problem. Two failures confirmed by live
browser navigation:

- `combat roach killing bait stations` returns **zero Combat products**. The top four results are
  generic third-party sticky traps. Combat Max is our **#3 best-seller by units**.
- `safers diatomaceous earth` ranks a "Diatomaceous Planet food-grade powder" first and second —
  filed under Industrial & Scientific › Fossils at **2%** — while the real Safer's 1606
  (Patio, Lawn & Garden, **6%**) is only third. Across **37 link slots**.

We have 35 ASIN pins against ~2,357 search links, so which product, and which commission band, a
reader lands in is decided by whatever Amazon ranks that day.

**The fix is to rewrite the search string, not to pin at scale.** A bad string degrades gracefully
to a related product; a bad pin fails silently to a dead or recalled listing. This project has
already shipped a recalled steam cleaner as "Best Overall". Pin Combat Max as one controlled test,
read it in 4–6 weeks, and stop there.

---

## Correction 3 — the winter-hedge thesis does not survive

I implied the indoor clusters are the natural winter hedge. Not supported:

- **Bed bugs peak with summer travel**, not winter.
- **Dehumidifiers are an Ontario summer purchase** — Dec/Aug volume ratio 0.59.
- The "39.7% of earnings on 15.2% of clicks" figure was measured **entirely inside one summer**,
  on pages six weeks old.
- The autumn impression ramp in rodent, bedbug and dehumidifier is **cohort maturation wearing
  seasonality's costume** — all three rose 1.9–2.4× at *worsening* rank.

**No page on this site has yet traded a full season at stable rank, so this site cannot currently
measure seasonality at all.** December 2026 is the first real test, and it lands in the middle of
this plan.

One genuine exception: **rodent** has measured counter-seasonal Canadian demand — mouse-trap volume
runs ~23% above summer in Nov–Jan. And its problem is page selection, not demand: the only rodent
page with visibility is an image-intent identification page that sells nothing, while
`/blog/how-to-get-rid-of-mice-canada` has nine impressions after 54 days live.

---

## The doubling verdict

**$656 → $1,312: June 2027, with July 2027 as the safe answer. December 2026 is 15–25%.**

Every lever that does not assume click-out headroom totals **+$116–310/month**, deduped. Add the
owner-dependent bed-bug rate lever and it is +$266–660. The gap is +$656. **Nothing on the list
doubles it alone**, and the combination only gets there in the best case.

June 2027 is arithmetic, not optimism. August 2026 was the best month ever *and* mosquito was
already 37% off its June peak inside it — so $656 was earned with the biggest cluster past peak.
Restating August at June mosquito rates is ~$743 on today's maturity alone. Nine months of growth
at even +5%/month is 1.55× → **$1,214–1,666 by June 2027 before any lever.** The levers raise the
probability and could pull it into May. They are not what gets you there.

## Order of work

| # | Action | $/month | Weeks | Who |
|---|---|---|---|---|
| 1 | **Read the GA4 `affiliate_click` stream** — settles the 3× dispute | decides $140–238 | 0.5 day | you / access |
| 2 | Fix the wrong-band search strings (Combat, Safer's) | +$10–30 | 1 | me |
| 3 | Re-point the permethrin page and 7 others out of the 3% band | +$31–55 | 1–2 | me |
| 4 | Route internal links into the indoor commercial pages | +$40–120 | 4–8 | me |
| 5 | Add buy paths to the 13 genuinely eligible zero-path pages | +$10–25 | 1–2 | me |
| 6 | Fix the rodent cluster's page selection | +$10–25 | 4–8 | me |
| 7 | Pin Combat Max — one controlled test, then stop | information | 1 | me |
| 8 | **Bed-bug brand rates** — the only doubling-sized number | +$150–350 | 6–16 | **you** |

Item 8 is the only lever with a doubling-sized number, and it is yours: applications and
brand-side activation are not in my hands. Select candidates from **measured order counts** (bed
bug is n=42 real orders/month, 21% of all orders) — never from basket size or headline rate. That
ordering is what makes it different from the queue that already failed.

## Do not do

- **Do not chase the 9% Pet band.** The flea cluster earned 34 clicks in six months, and
  pet-intent queries earned zero clicks on 71 impressions at positions 1–3. This is the
  commission-rate version of the basket-size error that has already failed twice here.
- **Do not build pages.** The July cohort is 215 pages built by this exact process, old enough to
  have ranked: $367/month between them, median $0.16, 40% earning nothing. Twenty new pages is
  +$3.20/month at the median.
- **Do not scale ASIN pinning.** Hit rate has decayed 39% → 28% → 22% → 5.5%.
- **Do not add buy paths to the 25 tick/Lyme-medical or 12 city/service zero-path pages.** A buy
  button on "can Lyme disease kill you" is an E-E-A-T failure for a licensed operator, and the
  service pages are $1,222 inventory.
- **Do not rename any slug before 2026-10-15** — the randomized slug test is still running.
- **Do not touch the `tick removal tool tweezers` string.** It is the site's largest affiliate
  string and it is already accidentally in the 9% band, the top rate on the card.
