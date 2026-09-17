# Amazon master plan — September 2026

Base: **CA$567.86/month** (Amazon Associates, 2026-08-17 → 2026-09-15, 3,126 clicks,
319 items, CA$12,891 ordered revenue, 4.4% effective commission rate).

Everything below is priced from measured inputs. Assumptions are labelled as assumptions.

---

## The finding that reorganises the whole arm

The Linked-Product report splits purchases into direct (the product we linked) and
indirect (something else in the shopper's cart):

| | Items |
|---|---|
| Bought **the product we linked** | **3** |
| Bought **something else in the cart** | **316** |

**99% of earnings are indirect.** Nobody buys what we recommend. They click, land on
Amazon.ca, and buy whatever was already on their list. We are paid ~4.4% of a stranger's
shopping cart because the click opened a 24-hour cookie.

Corroborated three ways: both Top Sellers are flagged "Indirect"; the two ASINs the site
pins sold **0 units on 77 clicks**; and a purchase-intent click is worth only 8% more than
an informational one ($0.0312 vs $0.0289 — inside the noise).

### What this kills

- **Product selection.** Which ASIN we pick is close to irrelevant. All the "best pick"
  research is near-worthless effort.
- **Basket engineering.** We take a fixed percentage of carts we do not control.
  "Recommend pricier items to raise AOV" is not a lever and should not appear in any model.
- **Buying-intent targeting as a content filter.** An informational page's readers are
  worth about the same per click as a product page's. A page with no route to Amazon
  earns exactly $0, whatever its topic.

### What this promotes

**Click-out rate and click mix are the whole game.** More natural routes to Amazon.ca,
on more pages, at more decision points.

---

## Tick is the best cluster on the site and it was invisible

Amazon itemises only 11 of the 15 cluster tracking IDs. Tick, ant, fogger and air purifier
are folded into an "Other" row. By GSC click volume tick is 639 of those four clusters'
755 clicks — **85%**. (Verified there are no legacy tags: every Amazon tag rendered anywhere
on the site is one of the 15 current cluster tags, so "Other" is exactly those four.)

| | Clicks | Earnings | EPC | Items/click |
|---|---|---|---|---|
| **Tick ("Other")** | 419 (13.4%) | **$236.02 (41.6%)** | **$0.563** | **31.7%** |
| Everything else | 2,707 | $331.84 | $0.123 | 10.2% |

**Tick earns 4.6× per click and converts 3× as often.** A tick edit is worth roughly five
of the same edit anywhere else.

Marginal EPC for a newly added tagged link is **$0.1226** (tagged earnings ÷ tagged clicks),
not the $0.182 blended rate — the blend contains the unattributable bucket. Use $0.1226.

---

## The misallocation

Internal links are the site's measured traffic lever. Bands, measured here:

| Inbound internal links | Pages | Impressions/page | Clicks/page |
|---|---|---|---|
| **0–4** | 118 | **726** | 6.5 |
| 5–9 | 74 | **3,219** | 31.3 |
| 10–19 | 85 | 3,097 | 28.9 |
| 20–44 | 52 | 2,323 | 26.3 |
| 45+ | 19 | 2,460 | 26.7 |

Getting a page from ≤4 links to 5+ is associated with **4.4× the impressions**, and the
effect plateaus past ~10. (Correlational; reverse causation is plausible. The fix is
additive and carries no URL or ranking risk either way.)

Now compare link equity against what each cluster earns:

| Cluster | Pages | Avg inbound links | EPC | |
|---|---|---|---|---|
| **tick** | 61 | **9.3** | **$0.563** | **starved** |
| bedbug | 59 | 23.6 | $0.151 | |
| rodent | 18 | 15.1 | **$0.000** | over-fed |
| roach | 3 | 15.3 | $0.198 | |
| sprayer | 8 | 12.4 | **$0.000** | over-fed |
| dehumidifier | 10 | 11.8 | **$0.000** | over-fed |
| mosquito | 98 | 11.6 | $0.101 | |
| flies | 11 | 10.2 | **$0.000** | over-fed |

**26 of 61 tick pages sit at 0–4 inbound links, holding 22,479 impressions.**
Link equity is pointed at clusters earning nothing and starved from the one earning 4.6×.

---

## The moves

### 1. Redirect internal link equity to tick
26 starved tick pages → 8–12 inbound links each, sourced from well-linked tick pages,
contextually relevant mosquito pages, and the dead clusters. Free, additive, no URL change.
**This is the mechanism for move 2.**

### 2. Shift the click mix toward tick
Same traffic, more of it from tick pages. No new visitors required:

| Tick share of clicks | Blended EPC | Per month | vs today |
|---|---|---|---|
| 13.4% (today) | $0.182 | $567.86 | — |
| 20% | $0.211 | $658.65 | **+16%** |
| 25% | $0.233 | $727.84 | **+28%** |
| 35% | $0.277 | $865.34 | **+52%** |

### 3. Repair click-out on mosquito + general
Measured click-out: mosquito 31%, general 28%. Same site: bedbug 56%, wasp 80%,
wildlife 88%. Mosquito + general hold **55% of all site impressions**.

| Target | Amazon clicks | Gain |
|---|---|---|
| 40% | 1,076 → 1,434 | **+$38.57/mo** |
| 45% | 1,076 → 1,613 | **+$57.86/mo** |
| 55% (bedbug-proven) | 1,076 → 1,972 | **+$96.54/mo** |

### 4. Stop investing in dead clusters
rodent, flies, steamer, dehumidifier, sprayer — **56 pages, 821 GSC clicks, 248 Amazon
clicks, $0.00 earned.** Those same 248 clicks at the tick rate would be $139.70/month.
Do not build here. Harvest their internal links for tick.

### 5. Seasonal timing
Ontario ticks have a spring nymph peak and a **fall adult peak (Sep–Oct)** — which is now.
Tick pushes land best in late April and September.

### 6. Levanta brand-direct — the only ceiling-breaker
Amazon's ~4.4% commission rate is the binding constraint on the whole arm. Levanta measured
**CA$16.81 per conversion — 7.6×** Amazon on Harris bed bug killer. Blocked on owner approval.

---

## Combined, central case

| Lever | Per month |
|---|---|
| Mix shift to 25% tick | +$159.76 |
| Click-out to 45% | +$57.86 |
| 15 unmonetised pages given a route (shipped 2026-09-16) | +$16.66 |
| **Total** | **+$234.28/mo → +$2,811/year** |

**New run-rate ≈ $802/month (+41%), with no new backlinks and no new pages.**

Annual ceiling on Amazon.ca rates with full optimisation and links: **$8–12K central**,
because the 4.4% commission rate caps it. Brand-direct is the only thing that moves the
ceiling rather than the numerator.

---

## Two measurement traps that cost real work this session

**GSC per-page country share is fiction.** `page` + country filter returns 2,479 Canadian
clicks against 6,623 from the `country` dimension alone — **62.6% of Canadian clicks have
no page attribution.** It makes every page look 60–90% foreign when the site is 63.8%
Canadian. Never target pages on "% foreign". Identify foreign-skewed pages by TOPIC
(chiggers, no-see-ums) or by the query dimension instead.

**US traffic is concentrated, not diffuse** (query dimension, 28 days):

| Topic | US clicks | CA | US share |
|---|---|---|---|
| Photon Matrix laser gadget | 256 | 122 | 68% |
| Ticks (generic ID queries) | 112 | 56 | 67% |
| No-see-ums / midges | 103 | 41 | 72% |
| Chiggers | 63 | 13 | **83%** |

USA is 19.2% of clicks. Converting these topics toward Canadian framing is worth roughly
$15–30/month — real, but fourth priority, not second.
