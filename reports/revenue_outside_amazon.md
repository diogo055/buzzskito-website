# Phase 6B — Revenue outside Amazon

Research only, 2026-09-22. Nothing was applied for, no account created, no form submitted.
Every figure below is either (a) quoted from a source listed at the end, or (b) arithmetic on
this site's own measured data (`reports/page_economics.csv`, `data/amazon-reports-2026-09.md`,
`data/levanta-catalogue-findings.md`). Where two sources disagree I show the range and say which
one I trust.

## Summary table

| Program | Network | Commission (hardware/garden/pest) | Cookie | Canada-eligible | Est. $/yr to this site (5% click-out) | Conflict with Amazon OA? |
|---|---|---|---|---|---|---|
| **Levanta — Harris bed-bug (amazon.ca)** | Levanta (Amazon Attribution) | 20% = CA$16.81/order | 14 days, linked product only | Creators yes; **brand's .ca listing is DISABLED** | **+$260 if Harris activates .ca; ~+$40 if not** | No — but a product's link is Levanta OR Associates, never both |
| **Levanta — Flowtron (amazon.ca)** | Levanta | 10–15% = $12–40/order | 14 days | Same — .ca activation unverified | +$115–165 if .ca activated | Same |
| **Photon Matrix — bespoke deal** | None exists (Shopify DTC, no affiliate app) | Negotiable; none offered | n/a | Ships worldwide, USD | $85–340 **only if** they agree; nothing today | n/a — a non-Amazon link |
| **Home Hardware** | Rakuten Advertising (Gen3 agency); listed on FlexOffers | **8%** (FlexOffers listing — verify on Rakuten) | 30 days | Yes (Canadian retailer) | ~$110 (mosquito/wasp/general only) | No |
| **Home Depot Canada** | Impact | 1.6% base (8% select décor only) | 24 h (2025 source) / 3 days (older) | Yes | ~$33 | No |
| **Rona** | CJ Affiliate (2024); FlexOffers listing now "not offered" | 1.6–2%, appliances excluded | **1 day** | Yes | ~$35 | No |
| **Walmart Canada** | Rakuten / FlexOffers (walmart.ca page exists, CAPTCHA-gated) | 0.8% (FlexOffers) to 1.6–3.2% by category | 2–14 days (sources conflict; FlexOffers says 4) | Yes | ~$16–33 | No |
| **Canadian Tire** | Impact + Sovrn open; CJ closed; AffJumbo closed Mar-2025 | 0.8–1% | 30 days last-touch | Yes | ~$16–21 | No |
| **Best Buy Canada** | Impact | 1% | 7 days; app purchases excluded | Yes | <$5 (Thermacell only) | No |
| **Lowe's Canada** | — | — | — | **Does not exist** — sold to Sycamore Feb-2023, all stores rebranded RONA/RONA+ | $0 | — |
| **Dupray (direct)** | Refersion | 10% | 30 days | **Yes — US + Canada explicitly** | ~$60, but US$150 payout minimum (~2 yr to first payout) | Dupray forbids "competing brand mentions" — bites on `dupray-vs-mcculloch` |
| **EcoVenger / EcoRaider** | Awin (Reneotech, ex-ShareASale 49175) | 10–12% | 30 days | Ships from US; **PMRA registration for Canada unverified** | ~$30, gated on PMRA check | No |
| **Thermacell (direct)** | Impact | 4–8% | 30 days | **No — thermacell.com cannot ship to Canada (EPA/DOT/PMRA); thermacell.ca has no cart** | ~$3 (US traffic only) | No |
| Wondercide | Awin (since Jan-2025) | not public | not public | **No — does not ship to Canada** | $0 | No |
| DoMyOwn (Advion etc.) | Awin | 6%, ~$100 AOV | not stated | **No — does not ship to Canada; unregistered pesticides cannot be imported since 2018** | $0 | No |
| Katchy | FlexOffers listing (10–15%) marked "not currently offered"; own site is US-ship only | — | — | No | $0 | — |
| Victor / Havahart / Terro / DynaTrap / Mosquito Magnet (Woodstream) | FlexOffers listings **inactive** (was 4–7.2% tiered, 60-day) | — | — | US-only DTC | $0 | — |
| Orbit (Yard Enforcer) | None for publishers ("Collective Referral" is a retailer-referral app; wholesale ships contiguous US only) | — | — | No | $0 | — |
| Flowtron, Vapamore, ZappBug, PackTite, SafeRest, Harris (direct), Ortho/Tomcat (Scotts), Raid/OFF! (SC Johnson), CimeXa (Rockwell), Combat (Henkel) | **None found** | — | — | — | $0 | — |

**Current baseline for scale:** Amazon.ca Associates earns ~$606–656/month = ~$7,300/yr at 4.8%
effective commission, $3.32 per order, 27% click-out, 10.7% conversion, $0.231 per Amazon click.

**Bottom line:** every retailer program on this list pays 0.8–2% with a 1–30-day cookie. On this
site's measured funnel that is **$0.02–0.03 per click sent**, against **$0.23 per click Amazon.ca
already pays**. A retailer link is only additive if it captures a click that would never have gone
to Amazon; a click it diverts from Amazon loses ~$0.20. The only things on the list that beat
Amazon per click are Levanta (once a brand activates amazon.ca) and a bespoke Photon Matrix deal
(which does not exist yet). Realistic incremental total if the top three land: **+$500–800/yr
(+7–11%)**. Not transformational, and the retailer programs are a rounding error.

---

## 1. Retailer affiliate programs — Canadian publisher

All seven are on third-party networks; none is in-house. Impact, CJ and Rakuten gate their full
T&Cs behind a publisher login, so rates and cookies come from public directory listings, which lag
and sometimes conflict. Treat every rate as "verify inside the network on approval day".

### Canadian Tire
- **Exists:** yes. affi.io lists the program as **open on Impact.com and Sovrn Commerce**, and
  **closed on CJ**. The AffJumbo listing closed with that network on 2025-03-31. The FlexOffers
  "Canadian Tire" URL now renders a different merchant, i.e. it was removed there. No affiliate
  page exists on canadiantire.ca itself (site: search returns nothing).
- **Commission:** 0.8% (UpPromote; AffJumbo's terms sheet: "0.8% ... Sports, outdoor and fitness")
  to 1% (LinkClicky, "officially listed"). InfluencerRate's "1–4%" and Shopper.com's "5–10%" are
  aggregator inflation — ignore. **Use 0.8–1%.**
- **Cookie:** 30 days, last-touch (AffJumbo terms, UpPromote, InfluencerRate). The "45-day
  Rakuten Canada" figure surfacing in search summaries is a generic Rakuten-Canada blurb, not a
  CT-specific term.
- **Approval:** application via Impact; "a few hours to a few weeks" (LinkClicky). Live site
  required. US$100 payout threshold via wire/PayPal/Payoneer (UpPromote).
- **Whole cart?** Standard Impact retail tracking pays on the order placed in-window, not just the
  linked SKU — but confirm in the Impact contract; AffJumbo's sheet quoted the rate per category,
  which implies per-line-item category rates, not a flat basket rate.
- **Restrictions that bite:** no trademark bidding (irrelevant here). Nothing found excluding
  content sites or setting a traffic floor.
- **Fit:** CT stocks Thermacell, Mosquito Dunks, Doktor Doom, Raid, wasp foams, DynaTrap,
  Flowtron — the widest overlap with this site's catalogue of any retailer.

### Home Depot Canada
- **Exists:** yes, on **Impact**. The official page (homedepot.ca/…/the-home-depot-canada-affiliate-program.html)
  timed out three times; details below are from TrueHost (Jun-2025) and TapRefer.
- **Commission:** **1.6% on most products**; up to 8% on select home décor only. No commission
  on gift cards, in-store purchases, installation. Returns reverse commission.
- **Cookie:** **24 hours** (TrueHost, Jun-2025) vs 3 days (TapRefer, Mar-2024). The US program
  went to 24 h; assume Canada followed. **Plan on 24 h.**
- **Approval:** ~2 business days; needs a live website with traffic. US$50 payout threshold
  (direct deposit), monthly around the 20th.
- **Whole cart:** yes on Impact retail tracking, within the 24 h window.
- **Restrictions:** none found against content sites.

### Walmart Canada
- **Exists:** yes — walmart.ca has an official "Affiliate Program" landing page (CAPTCHA-gated
  to fetch). Managed via **Rakuten Advertising and FlexOffers** for Canada (the US program is on
  Impact; Canada is not).
- **Commission:** FlexOffers listing says **0.8%**; UpPromote/TapRefer say 1.6% base with 3.2% on
  select categories and lower rates on groceries, electronics, video games. Pest/garden would
  sit at the 0.8–1.6% base.
- **Cookie:** 4 days (FlexOffers), 2 days (TapRefer), 14 days (UpPromote). **Plan on 2–4 days.**
- **Approval:** via Rakuten/FlexOffers; not detailed publicly. Commissions in USD.
- **Restrictions:** explicit/political content bans only.

### Rona (and Lowe's Canada)
- **Lowe's Canada no longer exists.** Lowe's sold the Canadian business to Sycamore Partners
  (closed 2023-02-03); every Lowe's store was rebranded RONA or RONA+. There is no Lowe's Canada
  program to join.
- **Rona:** on **CJ Affiliate** (LinkClicky, Mar-2024). FlexOffers lists it at **1.6% of online
  sales, appliances excluded, 1-day cookie**, but flags "not currently offering this program in
  our system". Lasso says 2%, 1-day cookie.
- **Cookie: 1 day** — worst on the list.
- **Restrictions:** "sufficient traffic" screening; Canada-only.
- **Fit:** rona.ca carries Thermacell and Dunks; the 1-day cookie makes it the weakest retailer
  option per click.

### Home Hardware
- **Exists:** yes, on **Rakuten Advertising**, agency-managed by **Gen3 Marketing** (FMTC
  directory), also listed on FlexOffers.
- **Commission: 8%** (FlexOffers listing), 30-day cookie. This is by far the best rate on the
  retailer list, and it needs verifying on Rakuten before anything is built on it — an 8% rate on
  a hardware retailer is unusual and may be a launch rate or apply to a limited online assortment.
- **Restrictions (FMTC):** display, PPC, email and social restrictions listed — content-site
  linking is not among them.
- **Bite:** homehardware.ca's online assortment is thinner than the others and much of it is
  ship-to-store ("free shipping to any Home store"), which suppresses online conversion. It does
  carry Thermacell online.

### Best Buy Canada
- **Exists:** yes, on **Impact** (since Jul-2019). **1%**, **7-day cookie**, mobile-web purchases
  count but **app purchases do not**, no brand bidding.
- **Fit:** only Thermacell is relevant. Negligible.

### General notes on the networks
- Impact closed its acquisition of Partnerize on 2026-08-22; Awin absorbed ShareASale in 2025.
  Any brand listed on ShareASale (EcoVenger) now lives on Awin.
- None of the seven programs' public terms contains a clause forbidding co-listing with Amazon or
  excluding content/review sites. Full T&Cs are login-gated; re-check on approval.

---

## 2. Manufacturer / brand programs (one line each)

| Brand | Finding |
|---|---|
| **Thermacell** | Direct program on **Impact**, **30-day cookie**, 4–8% (Lasso/TapRefer). **Useless for Canadian buyers:** thermacell.com "can only ship in the US … U.S. EPA & DOT and the Canadian PMRA do not allow" cross-border shipping; thermacell.ca is a where-to-buy catalogue with no cart. Also on Levanta at 7% (below Amazon's effective rate on some SKUs). |
| **DynaTrap** | None. Owned by Woodstream since Nov-2019; Knoji: no active program on Awin/Pepperjam/Rakuten. Levanta: 8%, "Apply" row, CA unverified. |
| **Katchy** | Own site is US-ship only and itself an Amazon Associate. FlexOffers listing (10–15%) marked "not currently offering". None usable. |
| **Flowtron** | None (Shopify store, no affiliate app in source, wholesale page only). **Levanta: 10–15%, "Access" (no application), US live, CA unverified.** |
| **Dupray** | **Yes — Refersion, 10%, 30-day, explicitly open to Canadian residents**, US$150 minimum payout, paid within 60 days, PayPal/bank. Terms forbid "competing brand mentions" — a comparison page violates that. Montreal HQ, full dupray.com/en-ca store. Also on the Levanta queue at ~$28/conv (unverified). |
| **Vapamore** | None (dealer section only). |
| **ZappBug** | None. |
| **PackTite** | None found. |
| **SafeRest** | None; "Free U.S. shipping" — US-only DTC. |
| **Harris (PF Harris)** | No direct program (pfharris.com has no affiliate link, no affiliate app). **Levanta: 20%, US live, amazon.ca listing present at CA$84.07 = CA$16.81/order but "not activated for Amazon Attribution".** |
| **Ortho / Tomcat (Scotts Miracle-Gro)** | None found (only a pro-rebate program). 1P CPG; flagship SKUs never PMRA-registered — already excluded in `levanta-application-queue.md`. |
| **Raid / OFF! (SC Johnson)** | None. (The Awin "RAID" programme is a UK fashion brand.) |
| **Terro / Victor / Havahart / Mosquito Magnet (Woodstream)** | FlexOffers listings for VictorPest (4/5.6/7.2% tiered, 60-day) and Havahart (30-day) are **inactive**. No current network found. US-only DTC. |
| **Wondercide** | Moved ShareASale → **Awin** Jan-2025; rate not public. **Does not ship to Canada.** Not PMRA-registered as far as this research went — verify before any Canadian recommendation regardless of commission. |
| **EcoRaider / EcoVenger** | **Awin (Reneotech), 10–12%, 30-day, AOV $50+**; legacy ShareASale ID 49175. Ships from US with "deep discount international shipping". **PMRA registration for Canada unverified** — rule 7 applies before promoting. |
| **CimeXa (Rockwell Labs)** | None; professional distribution only. |
| **Advion (Syngenta)** | None direct. DoMyOwn (Awin, 6%, ~$100 AOV, 5–7 day manual approval) carries it but **does not ship to Canada**, and unregistered pesticides cannot be imported since 2018-04-18. |
| **Combat (Henkel)** | None. |
| **Orbit (Yard Enforcer)** | None for publishers. Footer "Collective Referral" is a retailer-referral app. Wholesale ships contiguous US only. Orbit is the site's #1 actual best-seller on Amazon — leave it on Amazon.ca. |

---

## 3. Levanta — mechanics for a Canadian publisher

**How it works.** Levanta links are Amazon Attribution links generated per brand, per product,
per marketplace. Brands set the rate (observed 3–25% on pest products; Harris 20%, Premo Guard
25%, Flowtron 10–15%, Thermacell 7%, Summit Dunks 3%). Brands enrol **per marketplace** and
"enabling multiple Amazon marketplaces requires upgrading … to the Enterprise Plan" — which is
why every Canadian pest listing inspected on 2026-09-02 reads "not activated on Levanta for
Amazon Attribution". Levanta supports amazon.ca as a marketplace; the brands simply have not
switched it on.

**Enrolment and verification.**
- Creator sign-up is free; Levanta reviews the account ("a thorough review by our team") and
  approved creators "typically hear back within 24 hours". This site's account has sat at
  "pending approval" since at least 2026-09-02.
- Stated acceptance bar: "published content and an organic, active, and engaged audience base
  with at least 10k followers on a single platform"; accepted countries: **US, Canada**, France,
  Germany, Italy, Mexico, Spain, Netherlands, UK. Rejections: AI personas, duplicate content,
  artificial traffic. Whether a 26k-clicks/quarter website with ~30 social followers meets
  "10k on a single platform" is at Levanta's discretion — this is a real approval risk.
- After account approval, each brand is applied to separately ("Apply for access") or joined
  instantly ("Access").
- No Amazon Associates account is required or linked.

**Does it stack with Associates? No.** Effective **2024-12-20**, Amazon's Participation
Requirements say: "If we detect that you … are attempting to claim commissions from both Amazon
Associates and another program using the same traffic (for example, by manipulating or combining
attribution links), we may take action, including withholding commissions." Levanta's own FAQ:
"Levanta links will no longer support Amazon Associates tags" and "creators will need to choose
whether to use links from Levanta OR Amazon Associates on a product-by-product basis." Mechanically
a Levanta link carries Attribution parameters and no `tag=`; adding a tag is the violation.

**What a Levanta click earns.** Only the **linked product** — "Levanta does not pay commissions
on the full cart". Amazon.ca Associates pays on **any qualifying item added to the cart within 24
hours** of the click. So switching a link from Associates to Levanta trades a cart-wide 4.8% for a
single-product 20%: a win only where the linked product is what people actually buy.

**Attribution window:** 14 days (Levanta), vs 24 hours (Associates).
**Returns:** no commission if returned within 30 days after the end of the conversion month.
**Payout:** monthly via Stripe, 30 days after month-end, one "Creator Commissions invoice for
each brand in each Amazon Marketplace". Stripe supports Canadian payees; Levanta has "no Global
contractor tax solution" — Canadian creators handle their own tax. Brand Referral Bonus is US-only.

**The trap specific to this site.** A Levanta link for a brand enrolled only on amazon.com lands
a Canadian reader on amazon.com. They either bounce or face cross-border shipping. That click
earns $0 from Levanta (wrong marketplace) and $0 from Associates (no tag allowed). Since 70% of
clicks are Canadian, **switching any product link to Levanta before the brand activates amazon.ca
destroys that product's Canadian revenue outright**, with no fallback.

---

## 4. Photon Matrix

- **No affiliate, referral, ambassador or partner program exists.** Checked photonmatrixlab.com
  (nav/footer), store.photonmatrixlab.com (Shopify; page source has no UpPromote, Refersion,
  GoAffPro, Shopify Collabs, Affiliatly, Social Snowball or ReferralCandy), `/pages/affiliate`
  (404), `/partners/` (404 — the footer "Partners" is an on-page anchor). Web search for any
  program: nothing.
- Sales channels: direct store (Pro configuration, **US$988 infrared / US$1,088 blue, "15% off",
  pre-order, "ship within 120 days"**, "Free Worldwide Shipping" with duties on the buyer) and
  Indiegogo. **Not on Amazon.ca or Amazon.com**; the manufacturer's anti-counterfeit notice says
  no genuine units had shipped as of 2026-08-09 and Amazon listings claiming immediate shipment
  are not authentic.
- The only door is the contact page: "partnership opportunities" → lawrence@photonmatrixlab.com.
  A bespoke referral deal is possible in principle (Shopify makes it a 10-minute app install on
  their side), but that is outreach, not a program, and the owner does it.
- **Integrity flag before any deal:** the site's #1 page reviews a pre-order device with no
  shipped units and no Canadian warranty depot. Taking a commission on it without disclosing that
  status prominently is exactly the "worse product for higher commission" failure the ops rules
  forbid. If a deal is ever struck, the page's honesty about pre-order status must not move.

---

## 5. Annual value — arithmetic

### Base: Canadian clicks by cluster (90 days, 2026-06-22 → 2026-09-19)

From `reports/page_economics.csv` (page + country pull; captures ~92% of Canadian clicks, so
slightly low). The site has one season of history, so annualisation is a judgement call: seasonal
clusters × 1.5 (the summer quarter is most of the year), year-round clusters × 3, no growth
assumed. The brief's "mosquito ~700 CA clicks/mo" matches the annualised mosquito figure
(8,630/12 = 719/mo); the brief's wasp 450 and roach 160 are peak-month numbers — I use the
lower annualised figures.

| Cluster | 90-day CA clicks | Season factor | Annual CA clicks |
|---|---|---|---|
| mosquito | 5,753 | ×1.5 | 8,630 |
| general | 1,421 | ×3 | 4,263 |
| bedbug | 989 | ×3 | 2,967 |
| flies | 855 | ×1.5 | 1,283 |
| rodent | 403 | ×3 | 1,209 |
| wasp | 673 | ×1.5 | 1,010 |
| roach | 129 | ×3 | 387 |
| wildlife | 239 | ×1.5 | 359 |
| dehumidifier | 111 | ×3 | 333 |
| steamer | 101 | ×3 | 303 |
| fogger / ant / sprayer | 201 | ×1.5 | 302 |
| tick | 1,591 | — | excluded: service category, $0 affiliate history |
| **Affiliate-eligible total** | | | **≈ 21,000** |

### Retailer model

`annual clicks × click-out to retailer × retailer conversion × AOV × commission × (1 − 7% returns)`

- Click-out to a non-Amazon retailer: **5%** (brief's low end; 10% shown as upper).
- Conversion on a big-box site: **3%** (Amazon here is 10.7%; big-box Canadian retail sites
  convert far worse and the cookies are 1–30 days, not 90-day cart persistence).
- AOV: **CA$70** (site's Amazon basket is $68.85).

Per 1,000 annual clicks: 1,000 × 0.05 × 0.03 × $70 = **$105 of sales**.

| Program | Rate | $/yr per 1,000 clicks | Clicks in scope | **$/yr @5%** | @10% |
|---|---|---|---|---|---|
| Home Hardware | 8% | $7.81 | 13,900 (mosquito, wasp, general — the Thermacell/garden overlap) | **$109** | $217 |
| Home Depot CA | 1.6% | $1.56 | 21,000 | **$33** | $66 |
| Rona | 1.6–2% | $1.56–1.95 | 21,000 | **$33–41** | $66–82 |
| Walmart CA | 0.8–1.6% | $0.78–1.56 | 21,000 | **$16–33** | $33–66 |
| Canadian Tire | 0.8–1% | $0.78–0.98 | 21,000 | **$16–21** | $33–41 |
| Best Buy CA | 1% | $0.98 | ~2,000 (Thermacell pages) | **$2** | $4 |
| **All retailers together** | | | | **≈ $210–240** | ≈ $420–480 |

**Per-click comparison, which is the number that matters:**

| Destination | $ per click sent |
|---|---|
| Amazon.ca Associates (measured) | **$0.231** |
| Home Hardware @8% (if real) | $0.156 |
| Rona @2% | $0.039 |
| Home Depot CA @1.6% | $0.031 |
| Canadian Tire @0.8% | $0.016 |

Every retailer pays less per click than Amazon already does. A "Buy at Canadian Tire" button
only adds money if it catches a reader who would not have clicked Amazon; each reader it
*diverts* from Amazon costs ~$0.20. There is no measurement on this site of how many readers
refuse Amazon, so the $210–480/yr above is a ceiling, not an expectation; the honest expected
value is lower, possibly negative, until an A/B test says otherwise.

**On the "thermacell canadian tire" premise:** 11.4k impressions/quarter at position 8.9 is real,
but the ops rules record a **measured 0.08% CTR on retailer-named queries** — the searcher wants
canadiantire.ca, not a blog. That is ~9 clicks/quarter. The site already has
`/blog/thermacell-canada-where-to-buy`; it is not a lever.

### Levanta model (replaces Amazon on the linked product; same click-out and conversion)

`annual CA clicks × 27% Amazon click-out × 10.7% conversion × share of orders that are the
linked product × (Levanta $/order − $3.32 Amazon $/order) × 0.93`

- **Harris, bed bug:** 2,967 × 0.27 = 801 Amazon clicks → 86 orders. Assume 25% are the linked
  Harris SKU (unknown — Amazon's Linked-Product report is 97% "Unknown/None") → 21 orders.
  21 × (CA$16.81 − $3.32) × 0.93 = **+$263/yr if Harris activates amazon.ca.** If not, only the
  ~15% US share converts on a .com link and the Canadian 85% earns nothing: ≈ **+$40/yr, and
  that is before counting the Canadian orders lost** (21 × 0.85 × $3.32 = −$59) → **net negative**.
- **Flowtron, zappers:** ~1,500 annual CA clicks on zapper pages → 405 Amazon clicks → 43 orders
  → 30% Flowtron → 13 orders × ($12–16 − $3.32) × 0.93 = **+$105–155/yr if .ca activated.** Same
  negative if not.
- **Premo Guard (25%, $22.49 on US price):** no amazon.ca listing verified. $0 until it is.
- **Thermacell (7%), Summit (3%), Sawyer (7%), DynaTrap (8%):** at or below Amazon's cart-wide
  4.8% once the cart-vs-single-product difference is counted. **Do not switch these.**

### Direct brand programs

- **Dupray (Refersion 10%, CA-eligible):** ~600 annual CA clicks on steamer + bed-bug-steamer
  pages × 10% click-out (a brand-direct link, commercial pages) × 3% × CA$350 × 10% × 0.93 =
  **≈ $59/yr.** At US$150 minimum payout, first payment arrives in year three. The "no competing
  brand mentions" clause conflicts with `dupray-vs-mcculloch`.
- **EcoVenger (Awin 10–12%):** 2,967 × 0.05 × 0.03 × US$60 × 0.11 × 0.93 = **≈ $27/yr**, gated
  on confirming PMRA registration first.
- **Thermacell (Impact):** only the ~15% non-Canadian share can buy; ≈ **$3/yr**. Skip.
- **Photon Matrix (no program):** if a bespoke 5–10% deal existed: page ≈ 3,460 annual clicks
  (all countries — it ships worldwide) × 5% click-out × 1–2% conversion on a US$988 pre-order ×
  US$49–99 = **$85–340/yr.** Purely hypothetical today.

### Total, conservative

| | $/yr |
|---|---|
| Levanta Harris + Flowtron, **both** activate amazon.ca | +$370–420 |
| Home Hardware, if 8% survives verification | +$110 |
| Dupray + EcoVenger (after PMRA check) | +$85 |
| Photon Matrix bespoke deal, if it happens | +$85–340 |
| Other retailers combined | +$100 (ceiling; may be negative) |
| **Realistic incremental** | **+$500–800/yr on a $7,300/yr base (+7–11%)** |

---

## 6. Amazon Operating Agreement — conflicts

Quoted from the **Amazon.ca Associates Program Participation Requirements** (the .ca and .com
texts are identical on these points):

> "link any Program Content to, or in conjunction with any Program Content, direct traffic to any
> page of a site other than an Amazon Site (however, parts of your application that are not closely
> associated with Program Content may contain links to sites other than an Amazon Site)"

and, added 2024-12-20:

> "If we detect that you (and/or a third party acting on your behalf) are attempting to claim
> commissions from both Amazon Associates and another program using the same traffic (for example,
> by manipulating or combining attribution links), we may take action, including withholding
> commissions"

"Program Content" is defined in the Operating Agreement as Amazon-supplied "data, images, text,
link formats, widgets, links, marketing content, and other linking tools" — it explicitly
excludes content from non-Amazon sites. Special Links are Program Content.

**Is a competing-retailer link on the same page permitted?**
- **Yes, with a layout condition.** The agreement does not require exclusivity ("we may … operate
  sites … that compete with your Site" is the only mention of competition) and it expressly allows
  non-Amazon links in "parts of your application that are not closely associated with Program
  Content". Multi-retailer buy buttons are universal on review sites and Amazon has not enforced
  against them.
- **What is actually prohibited** is using Amazon's Program Content to send traffic elsewhere:
  wrapping an Amazon-supplied image or widget in a Canadian Tire link, or putting a non-Amazon
  destination inside the same linking element as a Special Link. "In conjunction with" is the grey
  phrase. Safe implementation: the Amazon.ca link and any retailer link are separate elements,
  separately labelled, the retailer link never nested in or styled as part of an Amazon widget.
  This site uses plain text `search=` links and no Amazon imagery, prices or widgets (rule 8), so
  the risk surface is already small.
- **The 2024-12-20 clause is about the same click, not the same page.** It targets one link (or
  one visitor's session) earning two commissions — Associates tag plus Levanta/Archer/Wayfront
  parameters. A link to homedepot.ca is different traffic to a different site; it is not "the same
  traffic". Levanta's rule follows the same logic: product-by-product exclusivity, not page-level.
- **Price comparison:** if the site ever showed Amazon's price next to a competitor's, the
  Requirements demand showing Amazon's lowest new (and used) price. The site publishes no prices,
  so this does not arise — and it is one more reason to keep it that way.

**Do any of the other programs forbid co-listing with Amazon?** None found in public terms:
Impact (Home Depot CA, Canadian Tire, Best Buy CA), CJ (Rona), Rakuten (Home Hardware, Walmart
CA), Awin (EcoVenger, Wondercide, DoMyOwn), Refersion (Dupray) and Levanta all allow other
programs on the same page. Two adjacent restrictions to note: Dupray's "no competing **brand**
mentions" (brand, not retailer — but it does bite on a Dupray-vs-McCulloch page), and Levanta's
product-level exclusivity above. Full network contracts are login-gated; re-read on approval.

---

## What I would actually do, in order

1. **Wait for Levanta approval; on approval day, apply to Harris and Flowtron with the amazon.ca
   activation request as the headline of the application.** Switch nothing until a brand confirms
   .ca is active. This is the only item with a measured upside above $100/yr.
2. **Verify Home Hardware's 8% inside Rakuten** (owner logs in; research cannot). If it holds,
   test one "Also stocked at Home Hardware" text link on `thermacell-canada-where-to-buy` and
   `mosquito-dunks-canada-guide` with a GA4 outbound event, and read Amazon click-out on those two
   pages before/after. Kill it if Amazon click-out drops by more than the Home Hardware link earns.
3. **Owner-only outreach to lawrence@photonmatrixlab.com** asking whether they will run a
   referral arrangement for Canadian coverage — with the pre-order disclosure kept intact.
4. **Do not join Canadian Tire, Home Depot CA, Walmart CA, Rona or Best Buy CA for this site.**
   At 0.8–2% and 1–30-day cookies they pay a seventh to a fourteenth of an Amazon click and
   cannibalise the click-out that earns the $606/month.
5. **Before EcoVenger or Wondercide go anywhere near a Canadian page, check PMRA registration**
   (rule 7). Commission is irrelevant if the product is not registered for sale here.

---

## Sources

Amazon
- Amazon.ca Associates Participation Requirements — https://associates.amazon.ca/help/operating/participation
- Amazon.ca Associates Operating Agreement — https://associates.amazon.ca/help/operating/agreement/
- Amazon.ca Associates help, 24-hour window / any qualifying item — https://associates.amazon.ca/help/node/topic/G9SMD8TQHFJ7728F
- Geniuslink, Dec-20-2024 Operating Agreement update — https://geniuslink.com/blog/update-amazon-associates-operating-agreement-dec-20-2024/

Levanta
- Levanta KB, Amazon Associates Policy Update FAQ — https://knowledge.levanta.io/articles/2364861905-amazon-associates-policy-update-faq
- Levanta KB, Creator FAQs — https://knowledge.levanta.io/articles/1540173350-faq-s
- Levanta KB, Global Documentation (marketplaces, Stripe, tax) — https://knowledge.levanta.io/articles/5595551323-global-documentation
- Levanta KB, Why wasn't my creator account accepted — https://knowledge.levanta.io/why-wasnt-my-creator-account-accepted
- Levanta KB, Getting started for creators — https://knowledge.levanta.io/articles/8719723727-getting-started-with-levanta-a-comprehensive-guide-for-creators
- Making Sense of Cents, Levanta review (linked-product-only, 14-day, payout) — https://www.makingsenseofcents.com/2025/06/levanta-review.html
- In-account catalogue observations — `data/levanta-catalogue-findings.md` (2026-09-02)

Retailers
- Canadian Tire: affi.io — https://affi.io/m/canadian-tire ; LinkClicky — https://linkclicky.com/affiliate-program/canadian-tire/ ; AffJumbo terms — https://www.affjumbo.com/new-offer-launched-canadian-tire-affiliate-program/ ; UpPromote — https://uppromote.com/affiliate-programs/canadian/ ; InfluencerRate — https://www.influencerrate.com/affiliate-program/canadiantire ; Sovrn — https://commerce.sovrn.com/merchants/143109/canadian-tire-affiliate-program
- Home Depot Canada: official (timed out) — https://www.homedepot.ca/en/home/the-home-depot-canada-affiliate-program.html ; TrueHost — https://www.truehost.ca/home-depot-canada-affiliate-program/ ; TapRefer — https://taprefer.com/the-home-depot-canada-affiliate-program/the-home-depot-canada/ ; BloggingTips (US comparison) — https://www.bloggingtips.com/affiliate-programs/home-depot
- Walmart Canada: official (CAPTCHA) — https://www.walmart.ca/en/cp/discovery-pages/discovery-pages-gm/affiliate-program/6000208941216 ; FlexOffers — https://www.flexoffers.com/affiliate-programs/walmart-canada-affiliate-program/ ; UpPromote — https://uppromote.com/affiliate-directory/walmart-canada/ ; TapRefer — https://taprefer.com/walmart-canada-affiliate-program/walmart-canada/
- Rona / Lowe's Canada: LinkClicky — https://linkclicky.com/affiliate-program/rona/ ; FlexOffers — https://www.flexoffers.com/affiliate-programs/rona-affiliate-program/ ; Lasso — https://getlasso.co/affiliate/rona/ ; Retail Insider on the Sycamore sale — https://retail-insider.com/retail-insider/2022/11/lowes-sells-canadian-division-to-us-private-equity-firm/ ; RONA inc. — https://www.ronainc.ca/en/news/lowes-canada-to-now-operate-as-rona-inc
- Home Hardware: FlexOffers — https://www.flexoffers.com/affiliate-programs/home-hardware-affiliate-program/ ; FMTC directory — https://directory.fmtc.co/cp/program_directory/details/m/46821
- Best Buy Canada: official — https://www.bestbuy.ca/en-ca/about/affiliate-program/blt82df225e80ec75e9 ; TapRefer — https://taprefer.com/best-buy-ca-affiliate-program/best-buy-ca/

Brands
- Thermacell affiliate — https://www.thermacell.com/affiliate-program ; Lasso — https://getlasso.co/affiliate/thermacell-repellents/ ; shipping FAQ — https://www.thermacell.com/faqs ; thermacell.ca — https://www.thermacell.ca/products
- DynaTrap/Woodstream — https://www.woodstream.com/woodstream-acquires-dynamic-solutions-worldwide-maker-of-dynatrap-insect-traps ; Knoji — https://dynatrap.knoji.com/questions/dynatrap-affiliate-programs/
- VictorPest FlexOffers (inactive) — https://www.flexoffers.com/affiliate-programs/victorpest-affiliate-program/ ; Havahart — https://www.flexoffers.com/affiliate-programs/havahart-wireless-affiliate-program/
- Katchy FlexOffers — https://www.flexoffers.com/affiliate-programs/katchy-affiliate-program/ ; mykatchy.com
- Dupray FAQ — https://dupray.com/en-us/pages/faq ; Refersion terms — https://dupray.refersion.com/affiliate/registration
- EcoVenger — https://ecovenger.com/pages/affiliate ; Awin Reneotech profile — https://ui.awin.com/merchant-profile/88605
- Wondercide/Awin case study — https://www.awin.com/gb/case-studies/wondercide-affiliate-success ; Canada shipping — https://support.wondercide.com/hc/en-us/sections/360011826092-Buying-Shipping
- DoMyOwn affiliates — https://www.domyown.com/pages/affiliates ; Canada shipping — https://www.domyown.com/do-you-ship-to-canada-qa-19256.html
- Orbit — https://www.orbitonline.com/ ; Flowtron — https://flowtron.com/ ; Vapamore — https://www.vapamore.com/ ; ZappBug — https://zappbug.com/ ; SafeRest — https://saferest.com/ ; PF Harris — https://pfharris.com/
- Photon Matrix — https://photonmatrixlab.com/ ; store — https://store.photonmatrixlab.com/ ; product — https://store.photonmatrixlab.com/products/photon-matrix-infrared-laser-mosquito-air-defense ; contact — https://photonmatrixlab.com/contact-us/
- Network consolidation: Impact–Partnerize — https://affiliate-times.com/impact-coms-340m-acquisition-of-partnerize-reshapes-enterprise-affiliate-infrastructure/
