# The Amazon reports finally arrived — what they confirm, and what they overturn

Received 2026-09-03 (Linked-Product + Top-Sellers). These had been requested five times and
were the weakest point in the whole analysis: every claim about what earns money on this site
was inference from click data. Now it is measured.

---

## 1. The funnel inference was right, to within ~2%

| | I inferred | Report says |
|---|---|---|
| Amazon clicks | 2,833 | **2,795** |
| items ordered | 295 | **300** |
| conversion rate | 10.4% | **10.73%** |
| commission rate | 4.75% | **4.80%** |
| earnings | $651 | **$656.48** |

No correction needed to the funnel model. The economics section of
`data/where-the-ceiling-actually-is.md` stands.

## 2. Two things I did not have, and one of them changes a number I gave the owner

**Orders are not items. 300 items came from 198 orders — 1.52 items per order.**

- earnings per **item**: **$2.19** (the $2.21 used throughout — correct)
- earnings per **order**: **$3.32** ← the right basis for comparing against Levanta
- average basket: **$68.85 per order** (not the $46.53 per-item figure)

Levanta pays per *conversion*, i.e. per order. So the Harris comparison is
**CA$16.81 vs $3.32 = 5.1x**, not the 7.6x quoted to the owner earlier today. Still the
largest lever available, but the correct multiple is 5.1x. Every "vs $2.21" multiple in
`data/levanta-application-queue.md` is on the wrong basis and should be divided by ~1.5.

**Returns cost 7.3% of gross earnings.** 17 items returned of 311 shipped; $51.61 clawed
back from $708.09 gross to leave $656.48. Nothing in this project had modelled returns.
Any forecast should carry a ~7% haircut.

---

## 3. What actually sells — and the application queue had it backwards

| Sold | Product | Pinned? | Levanta queue put the brand at |
|---|---|---|---|
| #1 | Orbit 62100 motion-activated sprinkler | yes, 2 pages | **#12** |
| #2 | The Executioner swatter | yes, 1 page | **tail — "never spend an application form"** |
| #3 | Combat Max roach bait 18ct | **no — search link** | **tail — "never spend an application form"** |
| #4 | Natrapel Icaridin 100 mL | yes, 1 page | **#18, last** |
| #5 | Wilson ONE Shot wasp foam | yes, 1 page | **#16** |

**Four of the five best-sellers sit at rank 12, 16, 18 and "never apply."** The queue was
ranked on estimated basket size x clicks; the report ranks on what people actually bought.
Basket-size ranking has now been wrong twice — it also drove Stage G, whose 72 high-basket
pages earn 13.6 clicks each against a 24.2 site average.

Not one high-basket item — no propane trap, no bed-bug heater, no steamer, no $400 zapper —
appears in the top five. **What sells here is $8-40 consumables and gadgets.**

## 4. ASIN pins look like they matter far more than their share suggests

**4 of the 5 best-sellers are ASIN-pinned**, and pins are only **1.5% of affiliate links**
(35 `asin=` instances against 2,357 `search=`). A search link cannot be attributed to a
product, which is why the Linked-Product report is one aggregated "Unknown/None" row holding
$656 of earnings with no product visibility.

**Caution before acting on this.** The Top-Sellers report marks only Orbit as "Direct" —
the other four are "Indirect", meaning the buyer clicked one of our links and then bought
that item, not necessarily from the link itself. So this is suggestive, not causal. It is
also confounded: pins were placed on the pages judged most commercial, so pinned products
would sell more anyway.

**The cheap test that settles it:** `Combat Max roach bait` is the #3 seller with **no pin at
all**. Pin it, and watch whether its rank and the page's earnings move. One page, one link,
no content change.

---

## 5. What this changes, concretely

1. **Re-rank the Levanta applications** around Orbit, Wilson, Tender/Natrapel and — if they
   are in the catalogue at all — Executioner and Henkel/Combat. Do not lead with the
   high-basket brands the queue ranks 1-10 purely on basket size.
2. **Divide every "vs $2.21" multiple in the queue by ~1.5** — the correct basis is $3.32.
3. **Carry a 7% returns haircut** in any earnings forecast.
4. **Pin Combat Max** as a controlled test of whether pinning drives sales.

## 6. Still not answerable

Neither report breaks earnings down **by page**. The Linked-Product report aggregates 97% of
clicks into "Unknown/None" because the links are searches, not ASINs. So "which of the 358
pages earns the $653" remains unknown, and will stay unknown until a much larger share of
links carry an ASIN. That is the real cost of the search-link architecture, now quantified.

---

## 7. THE TRACKING-ID REPORT — the single most useful table in this project

The 15 per-cluster tracking IDs were built for exactly this. First read:

| Cluster | Pages | Blog clicks | Amazon clicks | $/Amazon click | Earned | **$/blog click** |
|---|---|---|---|---|---|---|
| **dehumidifier** | 10 | 32 | 50 | **$1.538** | $76.91 | **$2.403** |
| **steamer** | 9 | 14 | 42 | $0.474 | $19.89 | **$1.421** |
| **bedbug** | 57 | 165 | 373 | $0.347 | **$129.38** | **$0.784** |
| wildlife | 13 | 111 | 128 | $0.384 | $49.19 | $0.443 |
| general | 44 | 283 | 427 | $0.212 | $90.45 | $0.320 |
| roach | 4 | 155 | 200 | $0.133 | $26.57 | $0.171 |
| **mosquito** | 87 | **1,310** | 973 | $0.221 | $215.15 | **$0.164** |
| rodent | 16 | 61 | 95 | $0.084 | $7.95 | $0.130 |
| **wasp** | 5 | **383** | 375 | $0.102 | $38.12 | **$0.100** |
| flies | 8 | 47 | 44 | $0.072 | $3.16 | $0.067 |
| fogger | 8 | 16 | 48 | — | **$0.00** | $0.000 |
| **tick** | 55 | **219** | 25 | — | **$0.00** | $0.000 |
| sprayer | 8 | 10 | 28 | — | $0.00 | $0.000 |
| ant | 4 | 10 | 26 | — | $0.00 | $0.000 |

Site average: **$0.231 per Amazon click.**

### The mismatch is enormous and it is the whole opportunity

**A dehumidifier blog click is worth $2.40. A mosquito blog click is worth $0.16 — 15x less.**
And the site sends **1,310 blog clicks to mosquito content and 32 to dehumidifier content.**

The site's traffic is aimed almost exactly opposite to where its money is. This is the same
conclusion Stage G reached from basket size, now confirmed with actual revenue rather than
inferred value — and it says the routing pass done in Stage G was right and should be extended.

### Four clusters earn exactly zero

`fogger`, `tick`, `sprayer`, `ant` — **127 Amazon clicks, $0.00.** Notably **`tick` has 55
pages and 219 blog clicks and has never earned a cent** from affiliates. That is the company's
own core service category; its value is service leads, not commissions, and it should stop
being counted as affiliate inventory.

### Sample-size caveats, stated plainly

- **dehumidifier is n=6 items** ($1,741 revenue, ~$290 each). Six orders is a thin base and
  the $1.538 could move a lot. It is not a single outlier — the average is consistent with
  six separate mid-range dehumidifiers — but treat it as directional.
- **steamer is n=8.** Same caution.
- **bedbug is n=42** and is well-sampled. At $0.347 per Amazon click and $129.38 earned it is
  the site's second-biggest earner on 38% of mosquito's clicks. **This is the most trustworthy
  high-value row in the table.**

## 8. This re-ranks the Levanta applications again — bed-bug first

Combining the cluster earnings with the catalogue rates in
`data/levanta-catalogue-findings.md`:

| Priority | Brand | Levanta rate | Serves | Why |
|---|---|---|---|---|
| **1** | **Premo Guard** | **$22.49/conv (25%)** | bedbug | Best rate in the catalogue meeting the site's best-sampled high-value cluster. "Apply" row. |
| **2** | **Harris** | **$12–16.81/conv (20%)** | bedbug | 10 Harris pages already live. "Apply" row. |
| **3** | Dupray | $28/conv | steamer | Montreal HQ, full .ca store — best native-Canadian position |
| **4** | Orbit Irrigation | $11/conv | wildlife | **The #1 actual best-seller.** Queue had it at #12 |
| **5** | Flowtron | $16–40/conv | general/zapper | No application needed — "Access" row, 11 pages ready |

**Do not lead with the propane-trap and high-basket brands the old queue ranks 1-10.** They
were ranked on basket size, which has now been wrong twice.
