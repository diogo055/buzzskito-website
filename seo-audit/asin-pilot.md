# ASIN Pilot — hero links pinned to specific products

Date: 2026-08-25. Scope: hero link (StickyBuyBar + matching TopPick/featured award card)
on the four high-AOV clusters. `search=` kept on every link as the documented fallback —
`lib/amazon.ts` prefers `asin` when present. Secondary links remain searches.

Every ASIN below was verified live on amazon.ca on 2026-08-25 (title, availability,
price, seller checked in a browser session — not just the URL resolving).

## Pinned (8 pages, 16 link points — StickyBuyBar + featured card on every page)

Audit 2026-08-25: all 6 unique ASINs independently re-verified live on amazon.ca
(title, stock, price, seller). One fix applied: the crawl-space page's StickyBuyBar
label said "with pump" but the pinned HD55S is gravity-drain (pump is a separate
accessory; AlorAir's own listing table marks Pump Drainage ✘) — label changed to
"(HD55-class)". Note for quarterly check: ZappBug listing carries a ~$47 delivery
fee (sold by ZappBug, ships from US); Havahart badge-naming caveat below stands —
the 1079SR listing says "Professional-Style", not "X-Large", but every concrete
spec in the article (32 in, one-door) matches the pinned trap.

| Page | Product | ASIN | Verified on 2026-08-25 |
|---|---|---|---|
| dupray-steamer-review-canada | Dupray Neat Steam Cleaner — Essential Pack (17 acc.) | B07C44DM6D | In stock, $249.99, sold by Dupray Canada |
| dupray-vs-mcculloch-steamer-canada | Dupray Neat Steam Cleaner — Essential Pack | B07C44DM6D | same listing |
| best-large-capacity-dehumidifier-canada | Midea Cube 50 Pint (Energy Star, no pump, drain hose incl.) | B0GL7Y575V | In stock, $368.11, sold/shipped by Amazon.ca |
| best-crawl-space-dehumidifier-canada | AlorAir Sentinel HD55 (55 pint / 120 PPD sat.) | B097JH2HDH | In stock, $699.00, sold by AlorAir-CA (brand storefront) |
| best-bed-bug-heat-chamber-canada | ZappBug Heater (23" x 37.5" x 23", 1500 W, wireless probe) | B00F6EV306 | In stock, $289.99, sold by ZappBug |
| zappbug-heater-review-canada | ZappBug Heater | B00F6EV306 | same listing |
| bed-bug-mattress-encasement-canada | SafeRest Premium Zippered Encasement — Queen 9–12" | B004BAEF7E | In stock, $130.57, seller Layger. Size-variant listing: dp lands on Queen, size picker on page. Price runs high vs US — watch it |
| best-raccoon-live-trap-canada | Havahart 1079SR 32" Professional One-Door Trap | B00004RAMT | In stock, $123.19, sold/shipped by Amazon.ca. Note: article badge says "X-Large" but its ~32-inch spec = the 1079SR (the 42" 1081 is a different, $299 trap) |

## Wave 2 — pinned 2026-08-31 (1 page, 2 link points)

| Page | Product | ASIN | Verified on 2026-08-31 |
|---|---|---|---|
| mosquito-repellent-guide-ontario-2026 | Natrapel Icaridin 100 mL (3.4 fl oz) pump spray — 20% picaridin/icaridin | B0BYFF3S3V | In stock, $11.57, **Shipper/Seller Amazon.ca (first-party)**. Brand Natrapel, mfr Adventure Ready Brands; model 0007-6760; UPC 044224067609 confirmed = the 20% icaridin 100 mL SKU. #3 in Insect & Pest Repellent Body Sprays, 4.3★ (600), 3K+ bought past month. Listed as "Aerosol" in Amazon's spec table but it is the pump spray. Listing markets "up to 12 hours"; the article's own 6–10 hr figure is unchanged and is our editorial assessment — do not import Amazon's claim |

Note: this is the Canadian **icaridin**-labelled SKU (icaridin is the PMRA name for
picaridin — same molecule). The article says "Natrapel or Sawyer"; Natrapel is the
named brand on the award card and the StickyBuyBar, so Natrapel is what got pinned.

**Audit note (independent re-verification, 2026-08-31) — B0BYFF3S3V CONFIRMED, pin kept.**
Re-checked from scratch against amazon.ca rather than trusting the pin report. Live, In
Stock, $11.57, Shipper/Seller **Amazon.ca** (first-party, not a 3P markup), brand byline
Natrapel, item model number **0007-6760**, 100 ml, ingredients panel "Icaridin, Water,
Ethyl Alcohol, Polyethylene Glycol, Fragrance".

One caveat the next checker must know: **the Amazon listing never states the
concentration anywhere** — not in the title, bullets, spec table, or ingredients panel.
The article's hero claim is specifically "Natrapel **20%** Picaridin", so the 20% had to
be established off-listing. Verification path, reproducible:

1. Amazon's item model number `0007-6760` matches Munro Industries (munroindustries.ca),
   an independent Canadian retailer, on the same "Natrapel Icaridin 100mL" product.
2. Borderline Store (borderlinestore.ca), same SKU `0007-6760`, states "**20% Icaridin
   formula**" and "Easy **pump spray**" — which both confirms the concentration and
   corroborates that Amazon's "Item form: Aerosol" spec field is wrong.
3. Cross-check on the PMRA duration convention: 10% icaridin is registered for ~6 h and
   20% for ~12 h. This listing claims "up to 12 hours", and the *separate* cheaper
   "Natrapel 6-Hour" pump spray on .ca ($10.49) is the 10% SKU. The 12-hour claim is
   therefore itself evidence of the 20% formulation, independent of steps 1–2.

So the concentration is solid, but **do not treat a future Amazon page read as sufficient
to re-confirm it** — if Natrapel ever swaps this ASIN to a 10% formulation, the Amazon
listing would not visibly change. Re-run step 2 against the model number each quarter.

Size note (not a defect, no action): the article names no size for the hero, so the 100 mL
pin is not contradicted. Its cost FAQ does mention "$8–$15 for a 200ml bottle" as a
generic category price — the $11.57 pin sits inside that price band, so nothing on the
page is falsified. The sibling 170 g Natrapel (B0D-class, $14.14) is cheaper per mL and
closer to that 200 mL figure; if the FAQ is ever tightened into a hero spec, revisit which
size to pin.

### Skipped in the repellent-device batch — search link kept

| Page | Reason |
|---|---|
| thermacell-e90-canada-review | **PRODUCT/LISTING MISMATCH — the exact E90 is not cleanly sold on amazon.ca.** Thermacell has rebranded the E-Series to "E-ZoneGuard" on .ca, and the live lineup is Patio 5.5-Hr = E55 (B0CWMFFKDH, $53.99), Patio+ 6.5-Hr (B0DFMVY6B7, $71.98), Adventure 9-Hr = EX90 (B0C3FWDRSF, $74.97) and Glow lantern 9-Hr (B0BWSHDPHV). **There is no Patio 9-Hr (E90) listing.** The only ASIN with "E90" in the title is B0C9MNZPQ9 ($82.84, In Stock) — but its own product description reads *"Thermacell EX90 is easy to use... engineered specifically for the avid outdoors person and traveler"*, i.e. the listing body describes the **EX90**, not the E90. It is also sold by a 3P reseller ("Bookstore North America"), non-returnable, 30 reviews. This page's entire thesis is the E90-vs-EX90 distinction ("Buy the E90 for home decks and patios; buy the EX90 if the device is going camping"), so pinning a listing whose copy says EX90 would ship a patio buyer the rugged model and contradict the article's core comparison. Also checked and ruled out: B09X9C55MV ($136.90) is a 2-pack charcoal bundle, not a single E90. Re-check if a clean "E-ZoneGuard Patio 9Hr" listing appears |
| best-mosquito-repellent-device-canada | **Class-based hero — same call as `best-upholstery-steam-cleaner-canada`.** The winner is named "Thermacell Zone Repeller (E-Series / Patio Shield)" with a price range of **$35–$229** spanning at least three different models (E-Series/Patio Shield, rechargeable EL55/E90, and the Liv system). Worse, the badge fuses two incompatible product lines: Patio Shield is fuel-powered with butane + allethrin mats at a 15-ft zone, while E-Series is rechargeable with liquid metofluthrin cartridges at a 20-ft zone. The award's own con — "Needs refill mats and fuel" — is true only of the fuel line, so **any single ASIN would make roughly half the card's own claims wrong.** No exact model is named anywhere on the page. Search link kept |

**Audit note (2026-08-31) — both skips independently re-checked and CONFIRMED correct.**

- `thermacell-e90-canada-review`: re-opened B0C9MNZPQ9 directly. Title reads "Thermacell
  Rechargeable **E90** Mosquito Repeller with 40 Hours of Repellent" ($82.84, In Stock,
  Amazon's Choice, 4.2★/30) — but its own product description reads "Thermacell **EX90**
  is easy to use… engineered specifically for the avid outdoors person and traveler" and
  "the **EX90** provides a 20-foot zone". The title/body contradiction is real. Also re-ran
  the `thermacell e90 rechargeable` search on .ca: B0C9MNZPQ9 is the only E90-titled result
  and no clean E90 listing exists behind it. Given this page's hero is the E90 and its
  buying advice turns on "buy the E90 for patios, the EX90 for camping", pinning this ASIN
  would hand a patio buyer a listing that calls itself the rugged model. Correct skip.
- `best-mosquito-repellent-device-canada`: verified against the source. The StickyBuyBar
  name is literally `Thermacell Zone Repeller (E-Series / Patio Shield)` and the featured
  award card repeats it — a two-product OR with no model committed anywhere on the page.
  Correct skip.

## Wave 2 — BTI + wasp cluster (2026-08-31)

Same rule: hero only (StickyBuyBar + featured award card), `search=` kept as fallback.

| Page | Product | ASIN | Verified on 2026-08-31 |
|---|---|---|---|
| mosquito-dunks-canada-guide | Summit Mosquito Dunks — "Mosquito Dunks Organic 6/card" (model 704655) | B005UTKT0W | In stock, $29.99, Amazon's Choice, brand Summit, 4.4★/1,161, 1K+ bought past month. Sold by 3P **LoweBuys** but **Ships from Amazon** (FBA), returnable within 30 days. *Corrected at audit 2026-08-31:* the buy box is $29.99 and Amazon's "New (5) from" line reads $29.99, but the search page exposes "More buying choices **$26.95** (5 new offers)" — so $26.95, not $29.99, is the true .ca floor. A ~10% spread across five sellers is still a market price, not a single-reseller gouge, so the pin stands. Listing bullets confirm the article's hero spec exactly: ~30 days per dunk, 9.29 m² (= 100 sq ft) surface water, safe for wildlife/pets/fish. **Price caveat — corrected at audit 2026-08-31.** The original note claimed "no Amazon price is published on the page, so nothing contradicts". That is not accurate. The page's retailer table quotes $13.97–$16.49 for a 6-pack at Canadian Tire / Home Depot / Rona, and the Quick Answer bullet reads "A 6-pack costs about **$10–$20** in Canada (Canadian Tire, Home Depot, Rona, Lowe's, **Amazon.ca**)" — i.e. the page names Amazon.ca *inside* a $10–$20 bracket while the pinned listing is $29.99. **Editorial flag for Diogo, not a link fix:** drop Amazon.ca out of that price bracket, or re-state it. The pin was NOT reverted for this — the product identity (Summit, 6-count, 100 sq ft / 30 days) is exactly right, the discrepancy predates the pin, and the unpinned search sends buyers to *more* expensive SKUs ($34.50 / $39.32), so reverting would make the price problem worse, not better. Quick Answer wording left untouched per the batch constraints. **Why pinning matters here:** the unpinned `summit mosquito dunks` search puts the 20-pack (B07DJXQJS3, $39.32) first and a 2-pack of 6-packs (B01LYCI7E3, $34.50) second; the 6-pack the featured card actually recommends was buried at result #5 |
| how-to-get-rid-of-ground-wasps-canada | Wilson ONE Shot Jet Foam Hornet & Wasp Killer, 425 g (model 7316510) | B00LM93R58 | In stock, $9.98, **sold and shipped by Amazon.ca** (first-party). Brand Wilson; manufacturer Premier Tech Growers & Consumers, St-Isidore ON; country of origin Canada — matches the article's "Canadian, PMRA-registered" framing. Listing bullets confirm foam + long jet spray for exposed and hard-to-reach nests. BSR #73 in Patio, Lawn & Garden. Only Wilson foam listing on .ca — no size ambiguity. Non-returnable (hazmat shipping class) |

**Independent audit 2026-08-31 — both wave-2 BTI/wasp ASINs re-verified from scratch on
amazon.ca, neither reverted.** B00LM93R58: title, brand byline "Wilson", model/part number
7316510, manufacturer Premier Tech Growers & Consumers (St-Isidore ON), country of origin
Canada, In Stock, $9.98, Shipper/Seller **Amazon.ca** first-party, BSR #73 Patio Lawn &
Garden, 3.7★/33, 1K+ bought past month — all confirmed. B005UTKT0W: brand **Summit**,
"Mosquito Dunks Organic 6/card", **Unit count 6**, Amazon's Choice, In Stock, bullets
"30 days or longer" + "9.29 square meters" — all confirmed, and the article's hero really is
the 6-pack, so the count matches. The claim that the unpinned search buries the 6-card was
also reproduced independently: `summit mosquito bits` on .ca ranks the 2-Pack Dunks ($34.50)
and the 20-Pack ($39.32) above the $29.99 6-card.

Minor spec note on B00LM93R58 for the quarterly check: the listing title says **425G** while
Amazon's own spec table says "Unit count 450 gram" — an inconsistency inside Amazon's data,
not a product mismatch. The article states no can size anywhere, so there is nothing on-page
to contradict either way.

## Skipped in wave 2

| Page | Reason |
|---|---|
| mosquito-bits-canada-vs-dunks | **No 8-oz Mosquito Bits exists on amazon.ca.** The hero (StickyBuyBar + featured card) is the 8-oz container; every 8-oz ASIN is .com-only and 404s on .ca (checked B06XDQN82Z, B01CYQQC1S, B00JFRT4NI, B007RGAL6I, B0039ORMAU, B00Y7PIUS8, B01LN3TPXK, B001REBUKC). The single Bits listing on .ca is the 30 oz (B00GM2P9CY, $63.63, 3P seller PERAST CO) — that is the page's *secondary* "Best Value" card, not the hero, and $63.63 sits above the article's own stated Canadian 30-oz range of $34.99–$48.49. Pinning the StickyBuyBar (framed around the $15–$22 8-oz) to a $63.63 30-oz would be a size and price mismatch. Search link kept. Re-check if Summit ever lists the 8-oz on .ca. **Skip confirmed at independent audit 2026-08-31:** a fresh `summit mosquito bits` search on .ca returns 32 results whose only Bits listing is the 30 oz at $63.63 — every other Bits-adjacent result is a Dunks SKU. No 8-oz exists. Page verified still carries zero `asin` props |

## Expansion wave 2026-08-31 — top-traffic mosquito/tick pages

Three of the site's highest-click pages examined (laser 1,131 clicks, permethrin 325,
fogger 275). One pinned, two skipped. The two skips are the strongest evidence yet for
the basket thesis: on both pages the hero product is **not sold on amazon.ca at all**,
so every click on those search links has been landing on an unrelated substitute.

| Page | Product | ASIN | Verified on 2026-08-31 |
|---|---|---|---|
| laser-mosquito-killer-photon-matrix-review | Mosquito Magnet MM3300B Executive (propane CO₂ trap, up to 1 acre) | B07QFNSC8Z | In stock ("Only 7 left"), $1,135.99, Shipper/Seller **Amazon.ca** (first-party), brand byline "MOSQUITO MAGNET". Pinned to StickyBuyBar + featured "Best Real Alternative" card. The laser itself is NOT pinned and has no buy link anywhere on the page — the skeptical verdict is untouched |

Model-choice note for the quarterly check: the laser page names no Mosquito Magnet
model, only "propane CO₂ trap", "$400–$1,300", "best suited to larger and cottage
properties" — all true of the MM3300B Executive (1 acre, $1,135.99). The sibling page
`/blog/mosquito-magnet-canada` prefers the **Patriot Plus** for typical suburban lots,
but the Patriot Plus is not sold on amazon.ca (only its replacement net B07FQ2MK7N and
fuel nozzle B073Z5CDX9 are). The Executive is the only actual Mosquito Magnet *trap*
listed on .ca. If a Patriot Plus listing ever appears, revisit which model the
`mosquito-magnet-canada` page should pin — but the laser page should stay on the
Executive, since "larger and cottage properties" is the Executive's use case.

What the unpinned search returned instead (why this pin matters): `mosquito magnet trap`
on amazon.ca surfaced $49.99 bug zappers, $4.98 sticky fly paper, Thermacell repellers,
and a third-party "ZingZap Mosquito Magnet Trap" knockoff above the real product.

## Wave 2 — cockroach / swatter / trap batch (2026-08-31)

Three pages examined (advion 173 clicks, electric-fly-swatter 86, best-mosquito-trap).
One pinned, two skipped — both skips for the same root cause as the other wave-2 skips:
the product the article actually recommends has no honest amazon.ca listing.

| Page | Product | ASIN | Verified on 2026-08-31 |
|---|---|---|---|
| electric-fly-swatter-canada | The Executioner, original model **EX-1** (Sourcing4U single-layer racket) | B01EXES2SK | In stock, $49.99, sold by PNPV Outdoors; brand byline "The Executioner"; manufacturer contact Direct Factory Sales Ltd, Toronto ON. Listing description matches every article spec: "Requires 2 AA batteries", "Includes Carry Case", "51x18x3cm" (article: over 50 cm / 20 in), "Output voltage: 2800~3200 V" (article: ~2,800–3,200 V), "single layer 1.2mm zinc steel grill". #13 in Insect Zappers, 4.4★/844. Pinned to StickyBuyBar + featured "Best Overall" card. Fallback sibling if this dies: **B0H27YWXJN** (same EX-1, "Batteries Included", $49.99, seller AFT Commerce) |

Why this pin matters: unpinned, `executioner fly swatter racket` puts a sponsored
YISSVIC/PALONE/Master rechargeable racket ($27–$50) in the first three slots, and the
Executioner colour variants that do rank (B08D9CSC43 purple $66.05, B08D9CJ6HG pink
$74.05, B08D9CSYPD blue $86.05) are 3P-priced 30–70% above the black EX-1 the article
describes. Do NOT pin the colour variants.

**Independently re-verified at audit, 2026-08-31.** B01EXES2SK opened fresh on
amazon.ca: title "The Executioner Wasp, Bug, & Mosquito Swatter Zapper", brand byline
**The Executioner**, `Item model number: EX-1`, ASIN field confirms B01EXES2SK, **In
Stock**, $49.99 buy box (default variant = Item Parcel Quantity 1), Ships from Amazon
(FBA) / sold by PNPV Outdoors, "New (2) from $49.99", Amazon's Choice, #13 in Insect
Zappers, 4.4★ / 844. Product description reproduces the article's five load-bearing
specs verbatim: "Requires 2 AA batteries", "Includes Carry Case", "Product Dimensions:
51x18x3cm", "Output voltage: 2800~3200 V", "Instant zap single layer 1.2mm zinc steel
grill". Not a 3P markup — $49.99 sits inside the article's own stated $15–$50 Canadian
band, and FBA + Amazon's Choice + a two-seller floor at the same price rules out a
single-reseller gouge. Pin confirmed correct; no change made.

One wording correction to the row above: the listing does **not** name Sourcing4U. Its
`Manufacturer` field reads "Executioner" and `Place of Business` reads "Direct Factory
Sales Limited, Toronto, Ontario M1R4G2" — the Canadian responsible party, not the
maker. The article's "made by UK company Sourcing4U" is neither confirmed nor
contradicted by the listing. Brand and model number (EX-1) both match the article, so
the pin stands, but do not treat "Sourcing4U" as verified evidence at the quarterly check.

Both skips in this batch were re-tested at audit and both hold. `combat roach killing
bait stations` on amazon.ca returns 65 results whose only Combat-adjacent hit is
B0HDCKM1N9 "Co-mbat Max, Roach-Kil-ling Bait (18ct)", $49.99 — hyphenated title, no
brand, 3P. Confirmed grey-market; skip correct. `best-mosquito-trap-canada` re-read in
source: the Patriot Plus is named in the StickyBuyBar (line 82), the featured card
(line 112) and the FAQ price "$399–$549" (line 21), so the MM3300B Executive at
$1,135.99 would contradict the page's own copy; skip correct.

## Skipped — search link kept (16 pages)

| Page | Reason |
|---|---|
| best-dehumidifier-for-mold-canada | No healthy Frigidaire listing: 35-pint models (B0DFZJJJ4Q, B07Z5PMDD3) unavailable; live 50-pint listings are 3P-gouged ($465–$986). B0BHC5P5TZ now canonicalizes to a different ASIN — unstable |
| best-dehumidifier-for-basement-canada | Article describes the gravity-drain hOmeLabs HME020031N ("no pump"); not sold on .ca — the only .ca 50-pint hOmeLabs (B0D1HMXQTB) is a different Wi-Fi + pump model |
| what-size-dehumidifier-do-i-need-canada | Sizing guide; hero is deliberately generic ("50-pint default"), no exact product to pin |
| best-whole-house-dehumidifier-canada | Aprilaire E-series only via 3P imports at inflated prices (E070 $2,251, E080 $3,519) |
| desiccant-vs-compressor-dehumidifier-canada | "Ivation-class" hero; both Ivation desiccants on .ca are one 3P reseller at ~2x US price ($449–$480) |
| best-bed-bug-steamer-canada | Primary (Vapamore MR-100 Primo, B004XVM19A) is Currently unavailable on .ca; only accessories in stock |
| vapamore-mr100-steamer-review-canada | Same — the reviewed product itself is unavailable on .ca |
| best-upholstery-steam-cleaner-canada | Article is deliberately class-based ("Bissell-class"); no exact model named anywhere on the page |
| bed-bug-heater-rental-vs-buying-canada | Hero is a generic high-temp probe thermometer; no model named |
| thermalstrike-ranger-review-canada | PRODUCT/ARTICLE MISMATCH: the article describes a heated rolling suitcase, but the actual ThermalStrike Ranger on .ca (B07NBVSRG8) is a fold-flat six-sided heat chamber you put a suitcase INTO. Pinning would harden the error. The article content needs a factual fix first |
| best-electric-fence-for-raccoons-canada | All three Zareba kits on .ca Currently unavailable (KGPAC-Z B0079GHC86, KGPDC-Z B0079GHC8Q, K9KIT B00099FAK2) |
| raccoon-proof-chimney-cap-canada | Class-based hero; chimney caps are flue-size-dependent — a single-size ASIN risks wrong-size purchases |
| advion-cockroach-gel-bait-canada | Hero is NOT Advion (the page's whole verdict is "don't buy it") — it is the **Combat roach killing bait stations, 12-pack**. Combat has no legitimate amazon.ca presence: `combat roach bait` returns zero listings with "Combat" in the title, and the only Combat match sitewide is B0HDCKM1N9 "Co-mbat Max, Roach-Kil-ling Bait (18ct)" — brand field "Generic", title deliberately hyphenated to evade brand matching, 3P seller "Quality--Shop", $49.99 for 18ct (~4x US shelf price). That is a textbook grey-market listing, i.e. precisely what this article tells readers to refuse. Pinning it would invert the page's thesis. Search link kept |
| best-mosquito-trap-canada | Hero is named on-page as the **Mosquito Magnet Patriot Plus** (StickyBuyBar name, featured card name, FAQ price "$399–$549"). The Patriot Plus trap is not sold on amazon.ca — only its consumables (replacement net B07FQ2MK7N, fuel nozzle B073Z5CDX9, cords B00JBHDA1Y). The one real Mosquito Magnet *trap* on .ca is the MM3300B Executive (B07QFNSC8Z, $1,135.99), a different model at 2.1–2.8x the price this page quotes, so pinning it here would contradict the page's own name and price claims. (Contrast the laser page above, which names no model and legitimately takes the Executive.) Revisit if a Patriot Plus listing appears |
| permethrin-canada-yard-clothing-spray | **Sawyer permethrin is not sold on amazon.ca.** Checked 2026-08-31: `amazon.ca/dp/B001ANQVYU` (SP657 24 oz, the US ASIN) returns Page Not Found, and three searches — "sawyer permethrin clothing spray", "sawyer permethrin", "sawyer products permethrin 24 oz" — returned **zero** Sawyer-branded results. Top results are Ben's DEET, Natrapel picaridin, OFF!, and 3.78 L commercial permethrin jugs (OnGuard/EcoGuard Pro-Perm) that the page itself says a homeowner may not use. Consistent with PMRA/hazmat limits on shipping RTU permethrin into Canada. **Content flag for Diogo:** the page states in several places that Sawyer is "available year-round on Amazon.ca" (FAQ answers + the Where-to-Buy section); the Canadian Tire / MEC / Cabela's / Bass Pro / Atmosphere claims look sound, but the Amazon.ca claim needs an editorial fix — not a link fix |
| mosquito-fogger-canada | **The Black Flag PROPANE fogger is not sold on amazon.ca.** Checked 2026-08-31: the article's hero is the propane unit (model 190095, US ASIN B0001AUFAO) and `amazon.ca/dp/B0001AUFAO` returns Page Not Found. The only Black Flag fogger on .ca is the **electric** 190107 (B0000BYBSD) — a different machine, already covered by its own page `/blog/black-flag-electric-fogger-review-canada` — and it is 3P-gouged at **$400.00** against the $60–$90 the article quotes. Pinning it would be wrong on product type AND price. The unpinned search meanwhile returns Halloween fog-machine juice, a $449 backpack mister, and a $7.49 camping tube. Fix is editorial (re-point the hero at a fogger Canada actually stocks), not a pin |

## Expansion wave 2026-08-31 — bedbug spray cluster

Three bedbug-cluster pages examined (bedbug cluster EPC $0.478). One pinned, two skipped
— and both skips are the same failure the mosquito wave found: the hero brand has **no
amazon.ca listing at all**, so every hero click has been landing on an unrelated substitute.

### Pinned

| Page | Product | ASIN | Verified on 2026-08-31 |
|---|---|---|---|
| bed-bug-spray-canada | Doktor Doom Sleep Tight Bed Bug Killer II, 515 g aerosol | B0D2PFS1WZ | In stock, $23.87, seller **Spray Fresh Ltd** (3P), brand byline "Doktor Doom", UPC 628683221095, item model 22109, mfr "Doktor Doom" / Ultrasol Industries, Made in Canada. Pinned to StickyBuyBar + featured "Best Overall" award card. The manufacturer's own page for this exact 515 g SKU (doktordoom.com, **PCP ACT 29339**, 0.25% pyrethrin, botanical/chrysanthemum-derived) confirms the article's load-bearing claims verbatim: *"Spray mattresses, box springs, bed frames"*, and *"Kills on contact only… no residual control"* — which also matches the award card's stated con. **Not a markup listing:** manufacturer direct price is $21.99, so Amazon's $23.87 is normal retail |

Caveats for the quarterly check on B0D2PFS1WZ:

1. **Delivery is $25.67 (Sep 9–15) — shipping exceeds the item price.** Same class of
   issue as the ZappBug listing. It is still the right pin (see below), but if a
   first-party or Prime Doktor Doom listing ever appears, move to it.
2. **The Amazon bullet copy on this listing is wrong.** Its "About this item" bullets are
   boilerplate for a Doktor Doom *garden* pyrethrin ("use on asters, begonias,
   chrysanthemums… cabbage, carrots, tomatoes") — copy that does **not** appear on the
   manufacturer's own page for this SKU. Title, brand, UPC, and model are correct and the
   product is right; the bullets are not. Never source a product claim from this listing —
   use doktordoom.com.
3. **PBO figure: do not quote either source.** The 515 g listing *and* the manufacturer's
   515 g page both print "25% PBO"; the manufacturer's own 420 g sibling page prints
   "1.25% PBO" for the same formula. One of the two is a typo and we cannot tell which, so
   the PBO number is unverified. It is not published anywhere on the site and must not be.
   Only the 0.25% pyrethrin figure is consistent across sources.

**Editorial flag for Diogo (not a link issue, not changed here).** The page describes Sleep
Tight as **"water-based"** twice — the award card pro "Water-based, fast-drying" and the
prose "it's water-based so it won't stain most fabrics." Neither the Amazon listing (item
form: **Aerosol**) nor the manufacturer's page for this SKU says water-based; the
manufacturer calls it a *"pyrethrin and PBO aerosol formula"*. The claim may still be true
of the carrier, but it is currently unsourced, and it is doing real work in the copy (the
staining reassurance). Worth confirming against the physical label / SDS or softening. This
predates the pin and the pin does not depend on it — the mattress-label claim, which is the
actual reason this product wins the page, **is** confirmed by the manufacturer.

Why the pin matters here (re-measured at audit against the string the link actually uses,
`doktor doom sleep tight bed bug spray` — **18 results**): the correct product sits well
down the page, under sponsored OnGuard Pro-Perm ($42.99), OnGuard P-22-RTU ($49.99), and
two ECOPEST jugs ($69.99 / $35.99), with Raid ($10.98) and OnGuard aerosol ($22.99) also
ranking. The leak is **not** simply "down-basket" — it runs in both directions. The real
damage is category: every one of those substitutes is a general permethrin/pyrethroid
insecticide, and **none is labelled for direct application to mattresses and box springs**,
which is the single reason this page picks Sleep Tight at all. An unpinned search here
doesn't just cost basket, it hands the reader a product that can't do the job the article
sent them to do. B0D2PFS1WZ is also the **only** Doktor Doom Sleep Tight listing on .ca —
no size or variant ambiguity to get wrong.

### Skipped — search link kept

| Page | Reason |
|---|---|
| best-natural-bed-bug-spray-canada | **EcoRaider is not sold on amazon.ca.** Checked 2026-08-31: `ecoraider` returns 11 results, **zero** of them EcoRaider (ECOGUARD, ECOPEST, Raid, ultrasonic repellers); `ecoraider bed bug killer spray` returns 18, again zero EcoRaider; `eco raider bed bug killer geraniol` returns 6, all OnGuard/ECOPEST/Raid/Konk. The page's Best Overall pick and StickyBuyBar both target a product Canadians cannot buy on Amazon. Note the article already hedges ("check CA listing", "many US listings lack PMRA registration") — the hedge is correct and pinning any near-miss substitute would contradict it. GSC: 7 clicks / 851 impressions over 90 days, and it ranks position 8 for "ecoraider canada", so the demand is real. **Editorial fix needed, not a link fix** |
| crossfire-bed-bug-concentrate-review-canada | **Two independent reasons.** (Audit note: re-confirmed the hero is class-based — `StickyBuyBar name="PMRA-registered silica desiccant dust (Canada-legal)"`, and the `TopPick` names no brand or model. Correct skip under method rule 5.) (1) The hero is deliberately class-based — the TopPick is literally named "PMRA-Registered Silica Desiccant Dust" and no exact model is named anywhere on the page; same call as `best-upholstery-steam-cleaner-canada`. (2) The `cimexa` search it hints at returns **no CimeXa product on amazon.ca** — 23 results, all Knock Down / Ortho Bed Bug B Gon / Doktor Doom diatomaceous earth and permethrin jugs. Separately worth an editorial look: the page asserts the dust "carries a Canadian PCP registration number", but CimeXa (Rockwell Labs) is US EPA-registered and I found no PMRA registration for it — on a page whose entire thesis is "buy PMRA-registered products", that claim should be verified against the PMRA registry before anything is pinned. The Crossfire skeptical verdict itself is untouched and Crossfire has no buy link anywhere on the page |

### Audit pass — bedbug spray cluster (2026-08-31, second agent)

Independently re-verified, not taken from the first agent's report.

- **B0D2PFS1WZ CONFIRMED and KEPT.** Loaded `amazon.ca/dp/B0D2PFS1WZ` directly: title
  "Doktor Doom Sleep Tight Bed Bug Killer II, 515g", brand Doktor Doom, ASIN and UPC
  628683221095 as logged, In Stock, $23.87, amazon.**ca**. Cross-checked the manufacturer's
  page for this exact SKU, which confirms PCP ACT 29339 and the mattress/box-spring
  labelling the award card's "why" depends on. Brand, model, and size all match the article.
  **No ASIN removed from this batch.**
- **Both skips re-tested and upheld.** `ecoraider bed bug` on .ca returns 8 results, zero
  EcoRaider (ECOPEST jugs and interceptor traps only) — the skip is correct and the page
  needs an editorial fix, not a pin. Crossfire's hero is class-based with no model named
  anywhere — correct skip.
- **Corrected three inaccuracies in the entry above:** the "non-flammable" confirmation was
  removed (no source states it), the PBO figure was demoted to unverified (sources conflict
  25% vs 1.25%), and the leak description was re-measured against the link's real search
  string. Added the unsourced "water-based" editorial flag.
- Checked: metadata/titles untouched, no price or rating or image added to the page,
  `search=` preserved on both pinned links, only the two hero link points pinned (the four
  other Sleep Tight links on the page remain search-only, per method rule 4), no component
  or lib touched. `npx tsc --noEmit` exits clean.

## Wave 2 — zapper / UV-trap / CO₂-trap batch (2026-08-31)

Three pages examined (bug-zappers 122 clicks, dynatrap 73, mosquito-magnet 67).
**Zero pinned, three skipped — no code changed on any of the three.** Unusual for a
batch, but each failure is a different one and each is decisive. Recording all three
here so the quarterly check knows they were tested and does not re-litigate them.

| Page | Reason |
|---|---|
| bug-zappers-canada-do-they-work | **The right ASIN exists but has no buy box.** The hero is unambiguous — Flowtron BK-40D, named in the StickyBuyBar, the featured "Best Overall" card, the ItemList schema, the #1 row of the ranked table and two FAQ answers. It resolves cleanly to **B00004R9VW**, and the listing's own spec table confirms `Item model number: BK-40D` (4.4★, 26,407 ratings, 1 acre / 40 W / 5600 V — matches the article's coverage claim exactly). But on 2026-08-31 the dp has **no featured offer and no Add to Cart button** — only "See All Buying Options". The single offer behind it: **$199.99 + $25.64 delivery, arriving Oct 6–27, 3P seller BTExtra**, and Amazon itself banners the page *"Price higher than typical"*. The article prices the BK-40D at **$99–$169**, so a pin would land buyers on a buy-box-less page at ~$225 all-in against a stated $169 ceiling. Same call as the Frigidaire/Ivation 3P-gouge skips above. The sibling ASIN B00004R9VV (Flowtron 40 W / 1.5-acre / day-night sensor) is also "No featured offers available" at $249.95, so there is no healthy Flowtron *large* unit to move to. **This one is genuinely likely to fix itself** — it is a stock problem at the tail end of the season, not a product problem. Re-test B00004R9VW in spring; if a first-party or Prime offer returns inside $99–$169, pin StickyBuyBar + featured card and nothing else |
| dynatrap-canada-review | **PRODUCT DOES NOT EXIST — same class as `thermalstrike-ranger-review-canada`, and worse.** The hero is "DynaTrap **DT3050** (1 acre + mosquito attractant fan)", carried by three link points (StickyBuyBar, TopPick, featured award card) and described as *"the only model in the Canadian lineup that adds a dedicated mosquito-attractant fan"* at $249–$329. **There is no DT3050.** DynaTrap's own manuals index lists 34 model numbers (DT030, DT1050, DT1100, DT1120, DT1125, DT1130, DT1200, DT1210, DT1250, DT1260, DT150, DT160, DT1750, DT1775, DT2000XL, DT2000XLP, DT2020XLP, DT2030, DT3007, DT3009, DT3012, DT3019, DT3030, DT3039, DS1000, DT600, DT700, DZ30100, DZ30200SR, DZ30300SR …) and **DT3050 is not among them**; nor is it in dynatrap.com's trap store, whose full outdoor lineup is DT030 (¼ acre, $59.99), DT1130SR (½ acre, $79.99) and DT2030 (1 acre, **$99.00**). The DT30xx block is DynaTrap's *indoor* series. DT2030 and DT1050 — the page's two comparison cards — are real; DT3050 is not, and its quoted $249–$329 is 2.5–3.3x the real 1-acre price. **Do not pin DT2030's ASIN to a card labelled DT3050** — that would harden the error exactly as the ThermalStrike note warns. Separately, no DT2030 or DT1050 listing exists on amazon.ca either: the live .ca lineup is DT1130-CA (B0DH5ZLK26, "No featured offers available") and a ¼-acre rechargeable portable (B0GND1CY8C). **Editorial fix needed before any pin is possible.** The skeptical verdict itself (mosquitoes <5% of catch) is untouched and is not what is wrong here |
| mosquito-magnet-canada | **Hero not sold on amazon.ca** — the same finding already recorded above for `best-mosquito-trap-canada` (line item in the 16-page skip table) and in the laser-page model-choice note, independently re-confirmed on 2026-08-31. The hero here is the **Patriot Plus**, named in the StickyBuyBar, the Quick Answer, the featured "Best Overall" card, the retailer table and six FAQ answers at $399–$549. The entire Mosquito Magnet brand storefront on .ca is **four items**: the MM3300B Executive trap (B07QFNSC8Z), OCTENOL3CAN attractant (B00DGKXPFI), the **Patriot Plus replacement net** (B07FQ2MK7N, $27.84) and a Patriot power cord (B00JBHDA1Y, no featured offer). The trap itself does not exist on .ca. Pinning the Executive would be wrong twice over: it is this page's *secondary* "Best for Cottages & Acreage" card (secondary links stay searches by rule), and at **$1,135.99** it is 2.1–2.8x the price the hero card quotes. Note the Executive *is* healthy — In Stock, first-party, Add to Cart present — which is why the laser page legitimately pins it: that page names no model. Revisit only if a Patriot Plus trap listing appears |

## Quarterly link-check instructions

For each pinned ASIN: confirm (1) listing live, (2) actually in stock, (3) price not
3P-gouged (compare against the "Verified" column), (4) seller still first-party/brand
where noted. A page whose dp goes "Currently unavailable" should have its `asin` prop
removed (the `search` fallback takes over automatically — no other change needed).
Re-check the skipped pages too: Vapamore, Zareba, Frigidaire, and hOmeLabs stock
comes and goes on .ca — any that return healthy first-party can be pinned then.

Two of the 2026-08-31 skips are a different class of problem and will not fix
themselves: on `permethrin-canada-yard-clothing-spray` and `mosquito-fogger-canada`
the recommended hero brand has no amazon.ca listing at all, so those pages need an
editorial decision about what they recommend before any pin is possible. Re-testing
the same searches quarterly is still worth it — Sawyer and Black Flag propane could
appear on .ca — but do not pin a near-miss substitute on either page.

## Expansion wave 2026-08-31 — wildlife / high-AOV outdoor batch

Three pages examined (raccoon-deterrent 52 clicks and the best commission band on the
account at 6.07%; best-screen-tent 76 clicks, $300–600 baskets; co2-mosquito-trap,
$300–500 basket). **One pinned, two skipped.** Both skips are the now-familiar wave-2
failure mode — the hero the article names is not honestly buyable on amazon.ca.

### Pinned

| Page | Product | ASIN | Verified on 2026-08-31 |
|---|---|---|---|
| raccoon-deterrent-canada | Orbit **62100 Yard Enforcer** motion-activated sprinkler (single unit) | B009F1R0GC | In Stock. "Buy New" box **$136.50, Shipper/Seller Amazon.ca (first-party)**. Brand byline "Orbit"; 3.7★ / 10.8K ratings; 200+ bought in past month. Listing bullets confirm the article's load-bearing specs: "options for day only, night only, or 24 hour protection" (article: "Day/night/24h modes"), "35-Feet adjustable impact sprinkler", "120-Degree sensor", spike mount, brass hose connection. Pinned to StickyBuyBar + featured "Best Overall" award card. **Independently re-verified at audit 2026-08-31** on a second browser session: dp title "Orbit 62100 Yard Motion Activated Sprinkler", `Brand: Orbit`, `Number of Packs: 1`, variant selector shows **Size: Yard Enforcer $136.50** (vs the Garden Enforcer variant at $183.83) — so the ASIN resolves to the single Yard Enforcer unit the article names, not the 2-pack and not the Garden Enforcer. "In Stock", Shipper/Seller **Amazon.ca**. Pin CONFIRMED, not reverted |

Three cautions for the quarterly check on B009F1R0GC:

1. **Watch the buy-box condition.** The same ASIN carries a Used–Good offer at $115.48
   from **Warehouse Deals** (Amazon's open-box arm), and the all-offers strip reads "New &
   Used (10) from $95.10". Today the default New box is Amazon.ca first-party — confirm
   that is still true, not a Warehouse or 3P winner.
2. **$136.50 CAD runs well above US street price** for this sprinkler. It is first-party,
   not 3P gouging, but it is worth re-checking.
3. **Do not pin B0B1SG9MJH** — that is the *2-pack* Orbit 62100, not the single unit the
   article describes. B00CD3UWPA is the different 62120 Garden Enforcer ($183.83).

Why this pin matters: unpinned, `motion activated sprinkler animal repellent` ranks the
real Orbit first but immediately surrounds it with $57–$80 unbranded generics (B0F6LR6LX8,
B0D2HRN7TH, B0DHTBQ5MW-class listings) and a Havahart Critter Ridder at $89.99 — a $136.50
hero leaking to a $66 substitute, on the site's best-commission cluster.

#### Article-vs-listing discrepancy — FIXED AT AUDIT 2026-08-31

`raccoon-deterrent-canada` said the Yard Enforcer ran "all season on a garden hose and a
**9V battery**" (FAQ 1 answer, and again in the Best Overall card's `why`). The Orbit 62100
takes **4 AA alkaline batteries** — Amazon.ca bullet: "over 7,500 activation cycles on just
4 AA alkaline batteries". Brand and model number both match the article exactly, so the pin
is correct and does not harden this error (unlike the ThermalStrike case, where the product
*category* was wrong). **Corrected at audit 2026-08-31:** both instances now read "four AA batteries" — FAQ 1 answer and the Best Overall card's `why`. The Quick Answer capsule never carried the claim, so no Quick Answer wording was touched. Source: the listing bullet quoted above.

### Skipped — search link kept

| Page | Reason |
|---|---|
| best-screen-tent-canada | **The Clam Quick-Set Escape has no healthy amazon.ca listing, and the hero is class-based anyway.** (1) The canonical listing, Clam Corporation 9879 Quick-Set Escape 140x140 in (B00TMBENDS), is **"Currently unavailable. We don't know when or if this item will be back in stock."** (2) The only two Escape listings actually in stock are both sold by the **same single third-party reseller**, "RMH RV Parts & Acc. (Edwards RV Parts & Acc.)": B00E3LF7FK (Escape 11.5', Green, $699.00, **only 4 left**, sole offer — verified on the offer-listing page) and B0CSPKGQLJ (Quick-Set Escape 11.5 x 11.5 ft, Slate Blue, $599.00, **only 3 left**, miscategorised under "Books"). Same tent, **$100 apart** — so any single pin either overcharges the reader by $100 or is arbitrary. 3–7 total units from one RV-parts reseller on a seasonal product at the end of August will very likely go dead long before the next quarterly check, and a dead `/dp/` converts far worse than a search. Same call as `desiccant-vs-compressor-dehumidifier-canada` ("one 3P reseller"). (3) Independently, the hero is deliberately class-based — the featured card is named "**Clam Quick-Set Escape / Gazelle G6** Hub Shelter", a two-brand OR, and the comparison table's own size cell reads "footprint varies by model"; the page never commits to a size or colour. Same call as `best-upholstery-steam-cleaner-canada`. **Do NOT pin B0H5K4YF6L** — "Quick Set Escape 12x12ft" at $273.42 is an unbranded knockoff trading on the Clam model name. Note for a future revisit: the **Gazelle G6** (B08TB6DBV8, $399.98) is healthier and cheaper than either Clam listing, but it is the *second* brand on a slashed card and is not what the StickyBuyBar names, so promoting it would be an editorial decision, not a pin |
| co2-mosquito-trap-canada | **Biogents is not sold on amazon.ca at all — the entire page's hero brand is absent.** Checked 2026-08-31 across four searches: `biogents` returns **10 results, zero of them Biogents**; `BG-Mosquitaire` returns 3, zero; `biogents bg-gat trap kit` returns 9, zero (mouse traps, a gopher trap, a mole trap); `biogents mosquitaire mosquito trap` returns bug zappers. The single plausible-looking hit, **B01F1TGEOK at $329.99, is a Flowtron 2-acre electric bug zapper** — opened and confirmed by title and bullets. So the hero link's current search sends a reader who came for a research-grade suction trap to a **UV bug zapper**, which is the exact product class this page and its sibling `/blog/best-mosquito-trap-canada` tell readers to avoid. There is no ASIN to pin. Same root cause as the permethrin/Sawyer and fogger/Black Flag skips. **Editorial fix needed, not a link fix** — see the content flag below |

#### Content flag for Diogo — `co2-mosquito-trap-canada` makes a now-false Amazon claim

The FAQ "Where can I buy Biogents and other CO2 mosquito traps in Canada?" answers:
"**Amazon.ca carries the Biogents lineup (BG-Home, the BG-GAT trap kits, and
BG-Booster/CO2 accessories) with the most reliable Canadian stock and shipping.**" That is
false as of 2026-08-31 — amazon.ca lists no Biogents product of any kind. The same claim is
echoed in the Quick Answer's Amazon link and in six BuyLinks across the page. This is the
same class of problem as the Sawyer claim on `permethrin-canada-yard-clothing-spray`: the
page needs an editorial decision about what it points readers at (Biogents direct, or a
different recommendation) before any pin is possible. Re-test the four searches quarterly —
Biogents could list on .ca — but do not pin a near-miss substitute here, because on this
page every plausible substitute is a bug zapper the article itself argues against.

## Wave 3 — BTI larvae / fogger batch (2026-09-02)

Three pages examined. **One pinned, two skipped.** Both skips were already recorded in
earlier waves; both were re-tested from scratch on amazon.ca today rather than trusted,
and both got *worse* since 2026-08-31 — recorded here so the quarterly check has current
numbers and does not re-litigate them.

### Pinned

| Page | Product | ASIN | Verified on 2026-09-02 |
|---|---|---|---|
| mosquito-larvae-identification | Summit Mosquito Dunks — "Mosquito Dunks Organic 6/card" (model/part 704655) | B005UTKT0W | In Stock, $29.99 ($5.00/count), **Ships from Amazon** (FBA), sold by 3P LoweBuys, returnable 30 days. Brand byline **Summit**, Manufacturer Summit, Unit count **6**, UPC 886827074154, ASIN field confirms B005UTKT0W. 4.4★ / 1,162, 1K+ bought in past month. Pinned to the **TopPick** ("Best for Water You Can't Drain") — the page's only award card and its hero. The two inline BuyLinks above it stay search links per method rule 3 |

This is the same ASIN already pinned on `mosquito-dunks-canada-guide` (wave 2) and it was
re-verified independently today, not carried over.

**Why the identity is right.** The listing bullets confirm the TopPick's load-bearing
claims verbatim: *"Each dunk lasts for 30 days or longer and treats 9.29 Square meters of
surface water"* (9.29 m² = 100 sq ft — the card says "One dunk keeps roughly 100 sq ft of
water surface larvae-free for about 30 days"), *"Non-toxic and safe for all other wildlife,
pets, fish, and humans"* (card pro: "Safe for fish, pets, and people"), and *"The only
product with BTI (Bacillus thuringiensis subspecies israelensis)"*. The product description
also states *"Registered for sale by health Canada pest management regulatory agency"*,
which supports the page's Canadian framing. **No size mismatch is possible here:** unlike
the Bits page, this page names no pack count anywhere — the card describes the performance
of *one dunk*, which the 6-card satisfies.

**Why the pin matters (measured today).** Unpinned, `summit mosquito dunks` returns 40
results whose **top three slots are sponsored PALONE bug-zapper rackets at $42.99–$45.99** —
a different product category entirely. The first real Dunks result is the **20-Pack at
$44.00**, then the 2-Pack at $35.16, and the 6-card the card actually recommends is only
*third*. Further down the same page: fruit-fly sticky traps, ECOGUARD Pro-Perm jugs, Ben's
DEET, and $77.65 barley straw. So the hero click has been leaking both sideways (into
zappers) and up-basket (into a $44 20-pack).

**On the price tension — pin moves the reader toward the page's number, not away.** The page
quotes BTI dunks at **$10–$20** (Quick Answer bullet, method table, and FAQ 5) and the pinned
listing is $29.99. Two things make this the right call anyway, and they are the opposite of
the usual gouge test:
1. **$29.99 is the cheapest genuine Summit Dunks SKU on amazon.ca** (offer floor $26.95
   across 5 sellers). Every alternative the unpinned search surfaces is *more* expensive —
   $35.16 and $44.00. Leaving it as a search link therefore makes the price gap **worse**,
   not better. Same reasoning already recorded for `mosquito-dunks-canada-guide`.
2. **The page never attributes $10–$20 to Amazon.** FAQ 5 reads "Available at Canadian Tire,
   Home Depot, Rona for $10–$20" and the prose says "one of the cheaper things in the garden
   aisle at Canadian Tire, Home Depot, or Rona." Amazon.ca is not named inside the price
   bracket — a materially cleaner position than the dunks-guide page, whose Quick Answer
   *does* list Amazon.ca inside $10–$20 (that editorial flag stands, and is unaffected here).

Not a 3P markup listing: FBA, 30-day returns, 1K+ bought in the past month, and a five-seller
$26.95 floor rule out single-reseller gouging. Prose, Quick Answer, scores and verdicts were
not touched; no price, rating, or image was added to the page.

**One caution for the quarterly check:** the buy box today reads **"Only 1 left in stock."**
The dp will not go dead when LoweBuys sells out (there are "New (5) from $29.99" behind it),
but the buy box may roll to a slower or pricier seller. Re-check the winning offer in spring;
if it lands well above $29.99, drop the `asin` prop and the `search` fallback resumes.

### Skipped — search link kept

| Page | Reason |
|---|---|
| mosquito-bits-canada-vs-dunks | **Re-confirmed skip — still no 8-oz Mosquito Bits on amazon.ca, and the mismatch has widened.** The hero is unambiguously the 8 oz: `StickyBuyBar name="Summit Mosquito Bits (BTI granules)"` and the featured award card is literally `Summit Mosquito Bits (8 oz)`, priced on-page at $15–$22. Re-tested today with two independent searches: `summit mosquito bits` returns **51 tiles** and `mosquito bits 8 oz granules` returns **7** — in both, the *only* Bits product of any size is **B00GM2P9CY, "Mosquito Bits - Net Wt. 30 oz."**. Everything else is Dunks, nematodes, sticky traps and zappers. **The 30 oz has risen from $63.63 (2026-08-31) to $74.36**, now **38% above the article's own stated Canadian 30-oz range of $34.99–$54.99** — so it has moved further out of range, not closer. It is also the page's *secondary* "Best Value" card, which method rule 3 keeps as a search link regardless. Pinning it to a StickyBuyBar framed around a $15–$22 8-oz container would be wrong on size *and* price. Search link kept; re-check if Summit ever lists the 8 oz on .ca |
| mosquito-fogger-canada | **Re-confirmed skip — the Black Flag PROPANE fogger does not exist on amazon.ca, and the brand's whole .ca presence is now dead.** The hero is the propane unit: `StickyBuyBar name="Black Flag Propane Mosquito Fogger"` plus the featured "Best Overall" card of the same name, quoted at $60–$110. Re-tested today: `black flag fogger` returns 38 results containing exactly **two** Black Flag ASINs, and **both have no featured offer and no price** — B0000BYBSD (190107 **Electric** Insect Fogger, a different machine with its own page) and B004F9Q8SK (BZ-15 bug zapper). That is a regression: the electric unit was 3P-gouged at $400 on 2026-08-31 and now has **no buy box at all**. `black flag propane fogger` returns zero Black Flag propane results; the propane units that do rank are **Bonide Propane Thermal ($400)** and **Fog RX Propane Insect Fogger ($400)** — different brands at **3.6–6.7x the article's stated $60–$110** — alongside Halloween fog juice, photography fog machines, ultrasonic mist makers and a $449 backpack mister. There is nothing honest to pin. Per the standing rule, **no adjacent substitute was pinned**; the fix here remains editorial (re-point the hero at a fogger Canada actually stocks), not a link change |

### Verification notes for this batch

- `npx tsc --noEmit` exits clean (0).
- `git diff` is **one line**: `asin="B005UTKT0W"` added to the larvae page's TopPick. The
  existing `search="summit mosquito dunks"` is preserved verbatim as the fallback.
- No title, meta description, H1, Quick Answer, verdict, score or prose was altered on any
  of the three pages. No price, star rating, review count, BSR, or product image was added.
  No AggregateRating schema added. No shared file (`lib/`, `components/`, `sitemap.ts`,
  `blog/page.tsx`) touched. The two skipped pages carry zero `asin` props — unchanged.

## Wave 3 — screen tent / bug zapper / repellent-device batch (2026-09-02)

Assigned pages: `best-screen-tent-canada`, `bug-zappers-canada-do-they-work`,
`best-mosquito-repellent-device-canada`. **Result: 0 pinned, 3 skipped. Zero code changes
in this batch** — no `asin` prop was added to any of the three pages, so the working tree is
untouched by this wave.

Two of the three had already been skipped by earlier waves. Both were re-derived from the
page source rather than trusted from the log, and both skips are re-confirmed. The third
(`bug-zappers-canada-do-they-work`) is a new finding.

### Skipped — search link kept

| Page | Reason |
|---|---|
| bug-zappers-canada-do-they-work | **NEW SKIP. The Flowtron BK-40D has no healthy amazon.ca listing — the only unit is a dead-buy-box single-reseller markup, and its price breaks the article's own stated ceiling.** The hero is unambiguous: `StickyBuyBar name="Flowtron BK-40D Electronic Insect Killer"` (label "If you must buy one") + the featured "Best Overall" card of the same name. (1) The canonical 1-acre/40W unit, **B00004R9VW** ("Flowtron Bug Zapper, 1 Acre of Outdoor Coverage with Powerful 40W Bulb & 5600V Instant Zapping Grid", 4.4★/26,416), has **no buy box at all** — verified on the dp: no Add-to-Cart button, no price, right column reads only "**Price higher than typical** … See All Buying Options". Its offer page shows "No featured offers available — **1 option**": a lone third-party seller, **BTExtra, $199.99, delivery October 1–22**. That is a single-reseller markup on a ~$119–140 product, with a six-week delivery window on a seasonal item at the start of September. (2) The only other live 1-acre/40W Flowtron, **B0FGKGHTT9** ("1 Acre Outdoor, 40W UV, 5600V Zap, Tan"), is **the same seller at the same price** — BTExtra, $199.99, "usually ships within 4 to 5 days", delivery Oct 1–22 — and it is a *different* product anyway (the 2-lure octenol-cartridge variant, i.e. BK-40CCN-class, not the plain BK-40D; no model number is published in its spec table). (3) A `flowtron BK-40D` search returns 37 results in which **every** remaining BK-40D match is a **replacement part, not the zapper** — B0BT9TM8L9 (BF190 replacement bulb), B0D79T4FXV (ballast/transformer), B0GKCCHN3W / B0D3RLCNVK / B0DVM2RZBM (octenol cartridges). (4) Independently decisive: **$199.99 contradicts the page in four places** — the H1 subtitle ("ranked from **$15 to $169**"), the meta description ("$15–$169"), the comparison table row (BK-40D = "**$99 – $169**") and FAQ 5 ("Flowtron BK-40D — best large outdoor coverage up to 1 acre (**$99–$169**)"). Pinning it would land the reader on a listing 18% above the article's own stated ceiling. Since rule 5 forbids touching the price prose, there is no pin that leaves the page self-consistent. **Do NOT "fix" this by pinning an adjacent unit:** B00004R9VV is the 1.5-acre BK-80D (also no featured offer, $249.95) and B01F1TGEOK is the 2-acre 120W unit ($329.99) — both are different coverage classes from the 1-acre hero. **Do NOT promote the Black Flag Executioner racket** either: the article does call it "the one zapper format we genuinely recommend", but it is a *secondary* card, and swapping which product the hero names is an editorial change, not an `asin=` addition. Search link kept |
| best-screen-tent-canada | **Re-confirmed skip (unchanged since 2026-08-31).** Both original reasons still hold. (1) The canonical Clam listing **B00TMBENDS** (Clam Corporation 9879 Quick-Set Escape, 140x140 in) was re-opened today and still reads "**Currently unavailable. We don't know when or if this item will be back in stock.**" — no Add-to-Cart, no price, no merchant. (2) Independently and more importantly, **the hero is deliberately class-based and no Amazon stock change can fix it**: verified in source, the StickyBuyBar reads `name="Clam Quick-Set Escape Hub Shelter"` while the featured award card reads `name="Clam Quick-Set Escape / Gazelle G6 Hub Shelter"` — a two-brand OR — and the Quick Answer says "the Clam Quick-Set Escape **or Gazelle G6**". The comparison table's size cell reads "footprint varies by model" and the page commits to no size or colour anywhere. Same call as `best-upholstery-steam-cleaner-canada`. The prior wave's standing warnings carry forward unchanged: **do not pin B0H5K4YF6L** (unbranded "Quick Set Escape 12x12ft" knockoff trading on the Clam model name), and **do not promote the Gazelle G6** (B08TB6DBV8) — it is the second brand on a slashed card and is not what the StickyBuyBar names, so promoting it is an editorial decision, not a pin |
| best-mosquito-repellent-device-canada | **Re-confirmed skip — decidable from the article alone, no Amazon check can change it.** Re-verified in source: `StickyBuyBar name="Thermacell Zone Repeller (E-Series / Patio Shield)"` and the featured "Best Overall" card repeats that exact two-product OR. The Quick Answer prices the hero at "**$35–$229**", a range spanning at least three distinct models (Patio Shield, rechargeable E-Series/EL55/E90, and the Liv system), and the badge fuses two incompatible product lines — Patio Shield is **fuel-powered** (butane + allethrin mats, 15-ft zone) while E-Series is **rechargeable** (liquid metofluthrin cartridges, 20-ft zone). The card's own listed con, "**Needs refill mats and fuel**", is true only of the fuel line, so **any single ASIN would falsify roughly half the card's own claims**. No exact model is named anywhere on the page. This is a property of the article, not of Amazon inventory — it stays a skip until the page commits to one model. Search link kept |

### Verification notes for this batch

- `npx tsc --noEmit` exits **clean (0)**, run from `C:/Users/buzzs/buzzskito-website`.
- **`git diff` for this batch is empty** — no page file was modified. The `asin-pilot.md`
  entry above is the only artifact. (Concurrent unrelated edits by another session were
  present in the working tree and were left untouched.)
- No title, meta description, H1, Quick Answer, verdict, score or prose was altered. No
  price, star rating, review count, BSR or product image was added. No AggregateRating
  schema added. No shared file (`lib/`, `components/`, `sitemap.ts`, `blog/page.tsx`) touched.
- All three pages retain their original `search=` props verbatim on every BuyLink.

**Pattern worth flagging to Diogo:** three of this wave's three pages fail for the *same two
structural reasons*, not for bad luck — (a) the hero names a **product class or a two-brand
OR** rather than one model (screen tent, repellent device), or (b) the named model exists on
.ca **only through a single third-party reseller at a markup** (bug zapper; previously Clam,
Black Flag, Biogents, Sawyer). Case (a) is fixable in-house and is the higher-value fix: an
article that commits to one model can be pinned, and commits the editorial to a real
recommendation. Case (b) is not a link problem and should not be papered over with a
substitute — it means the article recommends a product Canadians cannot actually buy on
Amazon.ca, which is an editorial decision about what to recommend.

## Wave 3 — repellent / bite-treatment batch (2026-09-02)

Three pages examined: `permethrin-canada-yard-clothing-spray`, `no-see-um-bites`,
`natural-mosquito-repellent-ontario`. **One pinned, two skipped.** Hero only
(StickyBuyBar + featured award card / TopPick); every `search=` preserved verbatim as the
fallback; secondary and inline BuyLinks left as search links per method rule 3.

### Pinned

| Page | Product | ASIN | Verified on 2026-09-02 |
|---|---|---|---|
| natural-mosquito-repellent-ontario | **OFF! Botanicals** DEET-Free Insect Repellent Lotion, Eucalyptus, **142 g** (single) | B0CWQ3G2RB | In Stock. Buy box **$13.98**, **Amazon's Choice**. Brand byline "Visit the OFF! Store", Brand Name `OFF!`, Manufacturer **SC Johnson**, UPC 062300009732, Unit Count 142 gram, Size "142 g (Pack of 1)". 4.2★ / 88 ratings, 400+ bought in past month, BSR #25 in Insect & Pest Repellent Body Sprays. Pinned to the StickyBuyBar + the featured "Best Overall" award card |

**Not a 3P markup — this is the strongest part of the case.** The offer-listing page shows
the $13.98 winner carrying "FREE delivery … on orders shipped by Amazon" with **no
Ships-from/Sold-by third-party line** (Amazon.ca first-party), and then **four 3P offers on
the same ASIN at $32.93 / $33.89 / $33.90 / $33.97** — Laib Store, Erisan Business Supplies,
TRUE NORTH STORE, HF Commerce, all with 43–63% positive ratings. The buy box is **2.4x
cheaper than every alternative offer on its own ASIN**.

**Why the pin matters (measured today).** The unpinned `off botanicals lemon eucalyptus`
search returns only **5 results**, and the #1 slot is a **sponsored Lemon Eucalyptus
*essential oil* for aromatherapy/diffusers ($12.50)** — not a repellent at all — with a
HIQILI diffuser oil further down. The other two OFF! Botanicals tiles are the **Pack-of-2 at
$27.96** and the **118 mL (B09PRVP3MJ) with no featured offer at $32.97**. So the hero click
was one Amazon re-rank away from selling a bottle of diffuser oil, and was already exposed
to a $27.96 twin-pack and a $32.97 3P listing against a $13.98 correct SKU.

**Product-identity check.** The listing's own bullet describes the active exactly as the
article does: *"contains the repellent ingredient found in eucalyptus, but chemically
synthesized from pine oil"* — i.e. PMD, which is what the article's card means by "Refined
PMD". Brand (OFF!) and product line (Botanicals) match the article's named hero exactly, so
this is a pin, not a substitute. The article states **no size**, so the 142 g single carries
no size mismatch. Ruled out and **do not pin**: B0H1PL3PZD (Pack of 2, $27.96), B09PRVP3MJ
(118 mL, no featured offer), B09PRSVN3F (59 mL clothing spray, no featured offer).

#### Content flag for Diogo — `natural-mosquito-repellent-ontario` overstates the Canadian duration

Not a link defect, and **the pin was not reverted for it** — but the next editorial pass
should look. The page makes a per-product duration claim in three places: the "Natural
Repellents Compared" table row reads **"Off! Botanicals | Lemon eucalyptus (OLE / PMD) |
4–6 hrs"**, the Best Overall card's pro reads **"4–6 hours per application"**, and the Quick
Answer says OLE gives "about 95% protection for **4–6 hours**". The pinned listing's own
label copy says: *"provides up to **2 hours** of protection from mosquitoes and up to 5 hours
of protection from black flies."* That 2 h figure is the Health Canada / PMRA-registered
duration for PMD; the article's 4–6 h comes from published OLE trials at US concentrations.
The article's error predates and is independent of the pin — but a reader who clicks the
hero now lands one scroll away from copy that contradicts the page's headline number on the
pest the page is about. Recommend restating the Off! Botanicals row as ~2 h mosquitoes /
5 h black flies for the Canadian SKU, and keeping 4–6 h only as the ingredient-class figure.
Per this batch's constraints, **no prose, table cell, score or verdict was touched.**

Two data-quality notes on B0CWQ3G2RB for the quarterly check, neither a product mismatch:
Amazon's "Ingredients" attribute reads **"10% Icaridin"**, which contradicts the title,
bullets and brand positioning (DEET-free plant-based eucalyptus) and is almost certainly a
mis-populated field carried from the OFF! Gentle 10% Icaridin SKU; and "Item Form" reads
**"Aerosol"** for a product the title calls a lotion (same class of Amazon field error already
recorded for Natrapel B0BYFF3S3V). Title, bullets, brand byline and manufacturer all agree on
the identity, so unlike the Thermacell E90 case there is no title-vs-body product conflict.

### Skipped — search link kept

| Page | Reason |
|---|---|
| permethrin-canada-yard-clothing-spray | **Re-confirmed skip — Sawyer permethrin is still not sold on amazon.ca.** Re-tested from scratch today rather than trusted: `sawyer permethrin clothing spray` returns **20 results and zero Sawyer-branded products**. The page is led by Ben's 30% DEET, **OnGuard Pro-Perm 3.78 L** and **ECOGUARD Pro-Perm / P-22 RTU 3.78 L** commercial jugs — the exact restricted-class concentrates this article tells homeowners they may not legally apply — plus Natrapel icaridin, OFF! Deep Woods and Ben's Tick. The only permethrin-adjacent consumer tiles are two unbranded "Permethrin Treated Repels Tick Mosquitoes Flies Chiggers" 2-packs (B0BPJNNRDG / B0BPJWRB54), which are not Sawyer and not the article's hero. Identical finding to 2026-08-31. Per the standing rule, **no adjacent substitute was pinned** — pinning a commercial permethrin jug here would actively contradict the page's own legal thesis. The Amazon.ca availability claim in the FAQs and the Where-to-Buy section remains an **editorial** fix, not a link fix (flag already open from the 2026-08-31 wave) |
| no-see-um-bites | **Class-based hero — no product is named, so there is nothing to pin.** Both hero surfaces are generic drug-class labels: `TopPick name="Hydrocortisone 1% Anti-Itch Cream"` and `StickyBuyBar name="Hydrocortisone 1% Anti-Itch Cream"`, and the blurb commits only to "a plain 1% hydrocortisone cream … the widely recommended over-the-counter workhorse". **No brand, no size, no format appears anywhere on the page.** The `hydrocortisone anti itch cream` search returns **56 results** spread across at least six unrelated identities — LivRelief 50 g, three different Cortizone-10 SKUs (Soothing Aloe 56 g, Eczema Relief 28 g, Easy Relief Applicator 36 mL), an unbranded Amazon's Choice 15 g tube, CeraVe Itchy Skin Relief, plus **Vagisil and Canesten yeast-infection / antifungal creams that are not hydrocortisone bite treatments at all**. Choosing one would be an editorial decision the article deliberately never made — same call as `best-upholstery-steam-cleaner-canada`, `crossfire-bed-bug-concentrate-review-canada` and `best-mosquito-repellent-device-canada`. Reinforcing this: the page is explicitly framed as "general information, not medical advice" and repeatedly defers to a pharmacist, so hard-pinning one medicated OTC SKU would take a position the article's own editorial stance declines to take. Search link kept. Revisit only if the article is ever edited to name a specific brand and size |

### Verification notes for this batch

- `npx tsc --noEmit` exits **0**.
- This batch's diff is **two lines**, both on `natural-mosquito-repellent-ontario/page.tsx`:
  `asin="B0CWQ3G2RB"` added to the StickyBuyBar and `asin: 'B0CWQ3G2RB',` added to the
  featured "Best Overall" award object. Both existing `search` / `search:` values
  (`off botanicals lemon eucalyptus`) are preserved verbatim as the fallback.
- No title, meta description, H1, Quick Answer wording, editorial verdict, score or any
  prose was altered on any of the three pages. No Amazon price, star rating, review count,
  best-seller rank or product image was added to any page. No AggregateRating schema added.
- No shared file touched (`lib/`, `components/`, `app/sitemap.ts`, `app/blog/page.tsx`).
- The two skipped pages carry **zero** `asin` props — verified unchanged.

## Wave 3 — wasp cluster, verified 2026-09-02 (2 pinned / 1 skipped)

Hero links only (StickyBuyBar + the featured AwardCard / TopPick). Every `search=`
kept verbatim as the fallback. No prose, title, meta, H1, score, or verdict touched.

| Page | ASIN | Product | Verified live on amazon.ca 2026-09-02 |
|---|---|---|---|
| best-wasp-trap-canada | B00BPTN6YC | RESCUE! WHY Trap — WHYTR-BB8, single reusable trap | In Stock, $39.99, **Ships from Amazon (FBA), sold by Canadian Sales Limited (3P)**. Brand byline RESCUE!, model in title `WHYTR-BB8`. 3.8★ (211), 400+ bought past month. 9 other offers from $37.43 |
| how-to-get-rid-of-wasps-canada | B00BPTN6YC | same listing | same |
| best-wasp-nest-spray-canada | — | **SKIPPED** | see below |

**Why B00BPTN6YC clears rule 1.** Every concrete spec the two articles assert is stated
on the listing itself, not inferred:

- article "double-chamber design with separate top and bottom attractants" →
  listing "A **dual-chambered** design uses **three attractants**… can crawl in through
  the **top or bottom**"
- article "Catches wasps, hornets AND yellowjackets" / "all three wasp groups" →
  listing "attract **paper wasps, bald-faced hornets, European hornets, and
  yellowjackets**"
- article "each lure refill runs about two weeks" → listing "includes a **two-week
  supply of attractant**"
- article "Reusable — refills cost far less than new traps" → listing "**reused for
  many seasons**. Attractant refills are available for purchase."

Quantity matches too: `WHYTR-BB8` is the single-trap retail SKU, and both articles
recommend one trap, not a multipack.

**Two caveats for the next quarterly checker:**

1. **3P seller, and the price runs ~2× the US.** US Home Depot lists the same WHY Trap
   at $14.73 USD; .ca is $39.99 CAD. This is *not* a lone reseller marking up a
   commodity — it is the market-clearing .ca price: there is **no first-party Amazon.ca
   listing of this trap at all**, and all nine competing offers cluster at $37.43+. The
   only other WHY Trap ASIN on .ca, **B00Q71KG5U** ($54.99, seller "Shop Canadian",
   4.0★/62, delivery Sep 10–14, and a spec table that reads "Target species: **Mouse**",
   "Number of pieces: 12"), is strictly worse on price, speed, and data quality — it was
   considered and rejected. Neither article states a price, and nothing about $39.99
   contradicts "reasonably priced for a multi-season tool", so no prose changed.
2. **The search link this replaces was actively harmful**, which is the case for pinning
   here: querying `rescue why trap wasp hornet yellowjacket` on .ca returns a *sponsored
   Aspectek 2-pack* above the fold, and by result #5 an attractant-only
   **16-pack at $150.02** (B00BKB0MNS) — a refill, not the trap. The correct product sat
   at organic #2.

### SKIPPED — best-wasp-nest-spray-canada (the product the article names is not on .ca)

The hero is "Raid Wasp & Hornet **Bug Killer** (**foaming aerosol**)" and the whole page
is built on a foam-vs-jet spine — the Quick Answer ("the **foam** blankets the nest
entrance"), the award card ("a **foaming** aerosol that blankets the nest"), the
comparison table (Raid filed under the row **"Foaming aerosol"**), and the stated cons
("**Moderate jet reach** — not for high soffits", "**Foam** can drip").

- The real Canadian product with that exact name is **Raid Max® Wasp & Hornet Foam Bug
  Killer 2** (PCP 30746, raid.ca). It has **no amazon.ca listing** — searches for
  `raid wasp hornet foam` and `raid max wasp hornet foam bug killer` return zero Raid
  foam SKUs. It also carries an **active Health Canada recall** (leaking cans, ~456,804
  units sold Dec 2023–Jan 2025; re-issued 2025-09-09), so it should not be hunted for
  on an adjacent listing either.
- The only Raid wasp/hornet SKU that *is* on .ca — **B071F16CJF**, "Raid Wasp & Hornet
  Killer Spray, Long Range Nest Killer, 400 g", $12.68, In Stock, **Shipper/Seller
  Amazon.ca (first-party)**, Amazon's Choice, 4.4★ (1,528), 4K+ bought past month,
  UPC 062300017768 — is the **non-foaming long-range jet**. The word "foam" appears
  **zero times** anywhere on that listing; its spec table says `Item form: Spray` and its
  bullets say "continuous **aerosol spray**" and "**Sprays up to 7.5 metres**".

Pinning B071F16CJF would be the textbook rule-2 near-miss: it inverts the article's
defining attribute (jet, not foam), it contradicts the article's own stated con
("moderate jet reach"), its 7.5 m throw **exceeds** the page's own *Best Long Reach*
winner, and 7.5 m falls outside the range the article tells readers to expect
("Canadian jets typically throw roughly 2–6.7 metres"). The fix would require rewriting
the prose, which rule 5 forbids. Search link left in place.

(Noted for a future editorial pass, NOT actioned here: the same page's *Best Foam
Blanket* pick, "Wilson **WaspOut**", also has no .ca listing — the live Wilson foam SKU
is "Wilson **ONE Shot** Wasp Spray Foam & Hornet Killer, 425 g" (B00LM93R58), a
differently-named product. Secondary link, so out of scope for a hero-only wave.)

## Wave 3 — bite-treatment / tick-tool batch (2026-09-02)

Assigned pages: `horse-fly-and-deer-fly-bite-treatment`, `chigger-bites`,
`tick-bite-vs-mosquito-bite`. **Result: 2 pinned, 1 skipped.**

**Read this first — all three heroes are GENERIC, no brand named anywhere on any page.**
Verified by grep across all three files: zero brand tokens (no Cortizone, Caladryl, Aveeno,
Polysporin, TickCheck, Tick Twister, O'Tom, Sawyer, Coghlan). The cards name a *specification*
— "Hydrocortisone 1% Anti-Itch Cream", "Calamine lotion", "Fine-Tipped Tick-Removal Tool Set" —
not a model. That is a different situation from the class-based skips already in this log
(`best-mosquito-repellent-device-canada`, `best-screen-tent-canada`,
`best-upholstery-steam-cleaner-canada`), and the distinction is the whole basis of the two
pins below, so it is worth stating precisely:

- Those pages were skipped because the hero spans **incompatible product lines at a wide
  price range** ($35–$229; fuel vs rechargeable; a two-brand OR), so **any** single ASIN
  would falsify roughly half the card's own claims.
- Here the hero is a **single well-defined thing** — one regulated active at one
  concentration, or one tool geometry — where every conforming product satisfies **every**
  claim on the card. Nothing on the page becomes false, and the displayed card name does not
  change. The reader simply lands on the thing the article specified instead of on Amazon's
  guess.

Where the search demonstrably could not be improved on honestly (`chigger-bites`), it was
still skipped. Pins were applied only to the hero (TopPick + StickyBuyBar); every inline body
BuyLink stays a search link per method rule 3.

### Pinned

| Page | Product | ASIN | Verified on 2026-09-02 |
|---|---|---|---|
| horse-fly-and-deer-fly-bite-treatment | Cortizone-10 Soothing Aloe Itch Relief Cream, 1% Hydrocortisone, 56 g | B0GBY8KXFY | In Stock, **$14.03**, **Shipper/Seller Amazon.ca (first-party)**. Brand byline "Cortizone 10 Store", Manufacturer **Sanofi Consumer Health, Inc.**, ASIN field confirms B0GBY8KXFY. **#1 in Cortisone Treatments**, #498 in Health & Personal Care. 4.6★ (243), 3K+ bought in past month |
| tick-bite-vs-mosquito-bite | TickCheck Premium Tick Remover Kit — stainless tick remover + super-fine-tip tweezer, leatherette case, tick ID card | B075DKL3Z6 | In Stock, **$16.49**, brand byline "Visit the TickCheck Store", sold by **Marathon Commerce, LLC.** (TickCheck's established distributor — holds the buy box on both TickCheck listings, ~6.4K and ~7.0K reviews). 4.6★ (**6,379**) |

**horse-fly — why this ASIN is exactly what the article specifies.** The card's spec is "a
**1% hydrocortisone** cream". The listing's Canadian bilingual ingredient panel reads
"Medicinal ingredient/**Ingrédient médicinal: Hydrocortisone 1%**" — a genuine
Canadian-market product, not a US import. Its bullets confirm every claim the card makes:
"rashes due to **insect bites**", "Starts working to relieve itch in just 5 minutes", 56 g
tube (card: "Small enough to keep on hand", "Keep a tube in the car or bag"). Score, blurb,
pros/cons and the displayed name "Hydrocortisone 1% Anti-Itch Cream" are all still true of
it, and none were touched.

**horse-fly — why the pin matters (measured today).** Unpinned, `hydrocortisone anti itch
cream` returns **44 results whose top slots are not hydrocortisone at all**: EMUAIDMAX
ointment at **$88.99** (explicitly "**Steroid and Chemical-Free**" — i.e. contains no
hydrocortisone), FixMySkin balm $35.00, and **two Vagisil yeast-infection cremes** plus
**two Canesten antifungal creams**. Further down: CeraVe, Cetaphil and Eucerin *eczema
moisturizers*. So a reader with a bleeding horse-fly bite was being routed to a $88.99
non-steroid ointment or a vaginal antifungal. This is the single clearest instance of the
search-link failure mode in the batch.

**horse-fly — rule 9 check (no commission upsell).** The cheaper alternative is the
brandless B0CPYG8D3B, "Hydrocortisone Cream, 15 g", $5.28, Amazon's Choice. Cortizone-10 is
the higher absolute price but **cheaper per gram — $25.05/100 g vs $35.20/100 g** — so the
pin is better value as well as the market leader and the only one explicitly indicated for
bug bites. The pin does not trade the reader's interest for basket size.

**tick — why this ASIN and not the others.** The card is titled "**Fine-Tipped**
Tick-Removal Tool **Set**" and its load-bearing pro is "**Works on tiny nymphs** household
tweezers miss"; the body says "Grasp the tick with **fine-tipped tweezers** as close to the
skin as possible". The pinned listing's own bullets match that almost word-for-word: "a
specially shaped **super-fine-tip tweezer for removing nymphs and small deer ticks**", plus a
stainless remover for larger embedded ticks, "**UNIVERSITY TESTED**", and "Keep your tick
remover kit in your first aid kit, glove compartment, or backpack" (card: "Keep one in the
first-aid kit before you need it"). It is a genuine *set*, and it is inexpensive ($16.49 —
card: "Inexpensive kit to keep on hand year-round").

**tick — why the pin matters (measured today).** Unpinned, `tick removal tool tweezers` is
dominated by **pet-oriented crowbar kits and 5-packs of plastic hooks** ("Tick Remover Tool
Kit for Dogs Cats", "Tick Remover Tool 5 Pack"), and the first-party slice of the same query
degrades into **eyebrow/splinter tweezers** — Tweezerman Splintertweeze $21.85, "Splinter
Tweezers" $10.11, General Tools 415 Utility Tweezers, **Trim Beautycare Mini Slant/Point
06847, 3-Piece Set $6.37**. This is a human-Lyme page; routing it to dog crowbars and
beauty tweezers is the same category leak the pilot exists to close.

**tick — the 3P seller, and why it is not a markup.** Marathon Commerce, LLC is not a
drop-shipper: it holds the buy box on both TickCheck listings with **6,379 and 6,983
reviews**, and **CA$16.49 sits at or below US parity** for this kit — the opposite of a
gouge. Same standard already applied in this log to ZappBug (sold by ZappBug), AlorAir
(AlorAir-CA) and SafeRest (Layger).

**tick — first-party alternative considered and rejected, recorded so it is not re-litigated.**
**B0D35SYJ54**, "Coleman Tick Removal Kit for Humans – 15-Piece Tick Remover Tool Set with
Identification Card" — $17.49, In Stock, **Shipper/Seller Amazon.ca (first-party)**,
Manufacturer Coleman, **Country of origin Canada**, includes "Precision Tweezers with
Magnifying Glass", vials and ID card. It is the safer pick on the first-party test and a
legitimate future swap. It lost on the merits: only **15 reviews** (vs 6,379), its Amazon
category rank is "**#20 in Dog Tick Remover Tools**" despite the "for Humans" title, and its
tweezer bullet claims only "precision … with an integrated magnifier" — it never makes the
**nymph** claim that is this card's headline pro. If strict first-party sourcing is ever
preferred over review depth, this is the ASIN to switch to.

**tick — consistency with the sibling page (checked, no conflict).** `tick-removal-tool-guide`
points its hero at the **Tick Twister / O'Tom** (a hook), while this page's hero is the
**fine-tipped tweezer** class. That is not a contradiction: the two pages name different tool
geometries on purpose, and the kit pinned here **contains both** — a stainless hook-type
remover for larger embedded ticks *and* the super-fine-tip tweezer. Also ruled out for this
page: **B07D6J52JJ** (TickCheck Value 3-Pack, $7.49, Bestseller, 6,983 reviews) — its bullets
say "**The hook tip** … can be easier to use on a thick-furred, feisty dog or cat **than a
pair of tweezers**", i.e. it is explicitly *not* the fine-tipped tool this card names.

### Skipped — search link kept

| Page | Reason |
|---|---|
| chigger-bites | **NO CLEAN FIRST-PARTY PLAIN CALAMINE EXISTS ON AMAZON.CA — every candidate is a third-party markup of a cheap drugstore item.** The hero is unambiguous and generic: `StickyBuyBar name="Calamine lotion"` (label "Best for the itch") + a TopPick of the same name, blurbed as "**The classic**, pharmacist-recommended first line". Decisive test: filtering `calamine lotion` to **sold-by-Amazon.ca only** returns **zero plain calamine lotions** — the entire first-party slice is something else (Aveeno calamine+oat, Polysporin Itch Relief, hydrocortisone cream, After Bite, Bactine, CeraVe, Cortizone-10). All three actual plain-calamine listings fail rule 1: (1) **B005631726** Caladryl 6 oz — **$23.52**, sold by "**Simply Better Deals LLC**", Place of Business **Brooklyn, NY** — a US 3P reseller at roughly double Canadian shelf price, *and* it is calamine **plus pramoxine**, a combination product, not the plain calamine the card names; (2) **B0BWX2NZQS** Life Brand Calamine 8.45 oz — **$17.33**, sold by "**Orion West Supply**" — a 3P flip of a Shoppers Drug Mart house brand that costs about $6 in store, the textbook "markup listing of a cheap item"; (3) **B0HF1MXL3H** "**Medicinc**" Calamine 225 ml — **$16.99**, sold by "**1spa**", an unknown white-label brand on a very recent ASIN with no manufacturer or Date First Available in its detail table. **Do NOT "fix" this by pinning the Aveeno** (B0000536EW, calamine **+ oat**, first-party): it is a different formulation and would be exactly the near-miss substitute rule 2 forbids. Search link kept — and note the search here is *already* reasonably on-target, so the upside was small even before the sellers disqualified it. Standing context: the page's own body says established chiggers are "**rare to absent**" across nearly all of Canada, so .ca purchase intent on this page is weak regardless. Re-check if a first-party plain calamine ever lists |

### Verification notes for this batch

- `npx tsc --noEmit` exits **clean (0)**, run from `C:/Users/buzzs/buzzskito-website`.
- **`git diff` for my two files is exactly 4 lines**, all additions of an `asin` prop:
  `asin="B0GBY8KXFY"` on the horse-fly TopPick and StickyBuyBar, `asin="B075DKL3Z6"` on the
  tick-page TopPick and StickyBuyBar. Every existing `search=` prop is preserved **verbatim**
  as the documented fallback. `chigger-bites/page.tsx` is **unmodified** and carries zero
  `asin` props.
- No title, meta description, H1, Quick Answer, verdict, score or prose was altered on any of
  the three pages. No price, star rating, review count, BSR or product image was added to any
  page. No AggregateRating schema added. No shared file (`lib/`, `components/`,
  `app/sitemap.ts`, `app/blog/page.tsx`) touched.
- Concurrent unrelated edits by other sessions were present in the working tree
  (`mosquito-larvae-identification`, `natural-mosquito-repellent-ontario`) and were **left
  untouched**.
- Quarterly re-check items: B0GBY8KXFY is first-party and low-risk. B075DKL3Z6 depends on a
  single distributor holding the buy box — if Marathon Commerce lapses or the price climbs
  well above ~$17, either drop the `asin` prop (the `search` fallback resumes) or switch to
  the Coleman B0D35SYJ54 documented above.

## Wave 3 — rodenticide / roach-gel / bed-bug-evidence batch (2026-09-02)

Assigned pages: `advion-cockroach-gel-bait-canada`, `rat-poison-canada-what-is-legal`,
`bed-bug-stains-poop-droppings-canada`. **Result: 1 pinned, 2 skipped.** One skip
(`advion`) was already recorded in the wave-2 cockroach batch; it was re-derived from
scratch today rather than trusted, and it holds. The bed-bug skip is a new finding.

### Pinned

| Page | Product | ASIN | Verified on 2026-09-02 |
|---|---|---|---|
| rat-poison-canada-what-is-legal | Tomcat Rat Killer Bait Station **Advanced Formula**, 1 x 113 g (model/part **4605605**) | B012ODWW7Y | **In Stock**, $16.99 (Subscribe & Save $16.14), **Shipper/Seller: Amazon.ca — first-party**. Brand byline **Tomcat**, Manufacturer **Scotts Canada**, Model/MPN 4605605, UPC 888603000463. BSR **#9 in Pest Control Lures** (#643 Patio, Lawn & Garden), 3.4 stars / 30, **200+ bought in past month**. Pinned to the **TopPick** hero ("The Legal Consumer Option") — the page's only award component |

**Why the identity is right — including the bromethalin claim, which the listing does NOT
state.** The TopPick is named "Tomcat Rat Killer Disposable Bait Station **(bromethalin)**"
and its blurb turns on bromethalin specifically ("no antidote", "24–48 hours"), so the active
had to be established off-listing, the same way Natrapel's 20% was. Verification path,
reproducible:

1. Amazon's `Model Number` / `ManufacturerPartNumber` field reads **4605605**.
2. ScottsMiracle-Gro's own Canadian product page for SKU **4605605**
   (`scottsmiraclegro.com/en-ca/.../4605605.html`) is the same product — "RAT KILLER BAIT
   STATION ADVANCED FORMULA - 1CT", 113 g — and states the active is **bromethalin**, in a
   "pre-filled, ready-to-use bait station" with "each station prefilled with 1 bait block".
   That confirms both the active *and* the "disposable" framing in the card's name.
3. Corroborating on-listing evidence, independent of steps 1–2: the description claims
   *"Each 113g bait station block can kill up to 10 rats"* from one block, i.e. single-feeding
   lethality — bromethalin behaviour, not a first-generation anticoagulant, which the article
   itself says "often need multiple feedings across several days".

**Canadian SKU, which is the whole point of this page.** The product photography shows a
**bilingual EN/FR box** ("ADVANCED FORMULA / FORMULE AVANCÉE", "RAT KILLER BAIT STATION /
STATION D'APPÂT RATICIDE", "WARNING / AVERTISSEMENT", "113 g"), manufacturer **Scotts Canada
Ltée**, sold first-party by Amazon.ca. On an article whose entire thesis is "check for a
Canadian PCP registration number", pinning a US-labelled unit would have inverted the page —
so this mattered more here than on a normal product page. *Caveat for the quarterly check:*
the PCP number is printed on the box but **is not legible at Amazon's image resolution and is
not in the listing text**, so the Canadian registration is evidenced by the bilingual label +
Scotts Canada manufacturer + Canadian retail distribution, not by a number I read.

**Why the pin matters (measured today).** The unpinned `tomcat rat killer disposable station`
search returns 118 results whose **first three organic slots are sponsored TruGuard X bed bug
interceptors** ($35.99–$46.99) — wrong pest entirely — and, once past those, **the Tomcat
results that rank are predominantly MOUSE stations**: the 4-pack Mouse-Rodent Killer
(B07VY6NJPN, 800+ bought/month), Mouse Killer Disposable (B012RIPK2U), Mouse Killer 4-station
(B07FPN2K3Q), plus a Victor mouse station and a generic 8-station mouse pack. On a page whose
own copy insists "mouse traps physically cannot kill a rat", the hero click was landing
readers on mouse product. This is a **species mismatch**, not just a basket-size one.

**Rejected alternative, recorded so it is not re-litigated:** B004XWULZU ("Tomcat Rat Killer,
1-Pack (Kid and Dog Resistant Disposable Rat Bait Station)", $21.49) is the *US* SKU — item
model **BL22580**, `Place of Business: MARYSVILLE, OH, US`, sold by 3P **Stratton
Enterprises** at 26% above the first-party Canadian unit. Correct product family, wrong
country, worse seller, higher price. Not pinned.

Not a 3P markup: sold **and** shipped by Amazon.ca at $16.99 with a Subscribe & Save tier,
200+ bought in the past month. The page publishes no price for this product anywhere, so
there is nothing on-page for $16.99 to contradict.

### Skipped — search link kept

| Page | Reason |
|---|---|
| advion-cockroach-gel-bait-canada | **Re-confirmed skip (first recorded in the wave-2 cockroach batch; re-derived from scratch today, unchanged).** The hero is *not* Advion — the page's verdict on Advion is "grey zone", and per rule 8 it carries no buy link. The hero is `StickyBuyBar name="Combat roach killing bait stations (12-pack)"` + the featured "Best Overall" card, **Combat Roach Killing Bait Stations (large 12-pack)**. **Combat still has no legitimate amazon.ca presence.** Three searches run today: `combat roach killing bait stations` (65 results), `combat max roach bait station` and `roach bait station hydramethylnon` — across all three the **only** Combat-adjacent hit is the same **B0HDCKM1N9, "Co-mbat Max, Roach-Kil-ling Bait (18ct)", $49.99**, and its dp is worse than the log's earlier note: `Brand Name: **Generic**`, `Manufacturer: **Generic**`, `Manufacturer Contact Information: JYD2365123`, feature bullets consisting of the single word "ct", product description consisting of the single character "18", filed under **#496 in Herbal Supplements**, **"Only 3 left in stock."** The title is deliberately hyphenated ("Co-mbat", "Roach-Kil-ling") to evade brand matching, at ~4x US shelf price. That is a textbook grey-market listing — **precisely the thing this article instructs readers to refuse** — so pinning it would invert the page's own thesis. **Do NOT "fix" this by pinning the Raid card:** Raid Max Roach Bait Stations is the *secondary* "Best for Bait Rotation" card (score 7.8) whose own con reads "Not your first buy", so promoting it into the hero is an editorial change, not an `asin=` addition. Everything else the search surfaces is sticky glue traps and *ant* baits, not roach bait stations. Search link kept |
| bed-bug-stains-poop-droppings-canada | **NEW SKIP, two independent reasons.** (1) **The hero is class-based — no brand or model is named anywhere on the page.** Verified in source: `StickyBuyBar name="Bed bug interceptor traps (under each bed leg)"` and the featured "Buy This First" card reads `name="Bed Bug Interceptor Traps (Under Each Bed Leg)"`. The card's `why` describes only a *mechanism* ("bed bugs climb the textured outer wall easily and cannot climb the smooth inner one"), never a product. Same call as `crossfire-bed-bug-concentrate-review-canada` and `best-mosquito-repellent-device-canada` under method rule 5. (2) **The one brand the `search=` string hints at — ClimbUp — has no healthy .ca listing.** `climbup insect interceptor bed bug` returns exactly one genuine ClimbUp product: **B00743B6ZE, "ClimbUp Insect Interceptor - Box (12 Traps)", $111.03 ($9.25/count), Shipper/Seller BERRYDEALS INC (3P, ships from seller), "Only 6 left in stock", delivery Sep 9–11, 3.1 stars on 3 ratings.** The site's own sibling page `bed-bug-interceptor-traps-canada` states Canadian market pricing is "**$20–$50 for a 4-pack**"; $9.25/cup sits at the top of that band on a three-review single-reseller import with a week-plus ship window. Fails the markup test. **Do NOT substitute:** the well-stocked interceptors on .ca are ECOPEST "Bed Bug Blocker (Pro)" 4/8/12-packs (B07SPDXVMM, B07SPH43R7, B07M7XT7Y1), TruGuard X and Aspectek — all different brands, and pinning one would invent a brand recommendation this page deliberately does not make. The same ECOPEST substitute was already refused on `best-natural-bed-bug-spray-canada`. **Note the search link is not failing badly here** (unlike most skips): `bed bug interceptor traps climbup` already returns correct 4-pack double-well interceptors in its top organic slots, so the fallback is doing its job. The fix, if wanted, is editorial — commit the card to one model (the sibling page already commits to ClimbUp, and `best-bed-bug-trap-canada` names Aspectek as the stocked budget-to-mid pick) — not a link change |

### Verification notes for this batch

- `npx tsc --noEmit` exits **clean (0)**, run from `C:/Users/buzzs/buzzskito-website`.
- **My `git diff` for this batch is one line**: `asin="B012ODWW7Y"` added to the rat-poison
  page's `TopPick`. The existing `search="tomcat rat killer disposable station"` is preserved
  verbatim as the fallback. (Concurrent unrelated edits by other sessions were present in the
  working tree and were left untouched.)
- Method rule 3 respected: on the rat page the two inline `BuyLink`s (the availability check
  above the TopPick, and the Tomcat Rat/Mouse pair further down) remain **search links**.
- No title, meta description, H1, Quick Answer, verdict, score or prose was altered on any of
  the three pages. No price, star rating, review count, BSR or product image was added. No
  AggregateRating schema added. No shared file (`lib/`, `components/`, `sitemap.ts`,
  `blog/page.tsx`) touched. Both skipped pages carry zero `asin` props — unchanged.

### Independent audit of Wave 3 (2026-09-02)

Second agent, re-verified every claim against live amazon.ca and the repo rather than
trusting the pinning agent's report. **Verdict: the batch is sound. Nothing removed,
nothing reverted.**

| Page | Agent's action | Audit result |
|---|---|---|
| mosquito-larvae-identification | pinned B005UTKT0W | **UPHELD.** dp re-opened independently: ASIN field `B005UTKT0W`, title "Mosquito Dunks Organic 6/card", Brand **Summit**, Manufacturer Summit, Model/Part **704655**, UPC **886827074154**, Unit count **6**, **In Stock**, **$29.99** ($5.00/count), **Ships from Amazon** (FBA, sold by LoweBuys), 30-day returns, 4.4★/1,162, 1K+ bought past month. Bullets match the TopPick's load-bearing claims: "Each dunk lasts for 30 days or longer and treats 9.29 Square meters" (9.29 m² = 100.0 sq ft, exactly the card's "roughly 100 sq ft ... about 30 days"), "Non-toxic and safe for all other wildlife, pets, fish, and humans", BTI, Health Canada PMRA registration. Page states no pack count, so no size mismatch |
| mosquito-bits-canada-vs-dunks | skipped | **CORRECT SKIP — independently reproduced.** Hero is `featured: true` card "Summit Mosquito Bits (8 oz)". `mosquito bits 8 oz` returns **4 results and zero Bits of any size**. The only Bits SKU on .ca, B00GM2P9CY (30 oz), re-opened directly: **$74.36**, "Shipper / Seller **PERAST CO**" — **3P, not FBA** — only 3 reviews. Wrong size, wrong price band (article's 30-oz range is $34.99–$54.99, so ~35% over), and a textbook 3P markup listing. Pinning it would have violated rule 1 three ways |
| mosquito-fogger-canada | skipped | **CORRECT SKIP — and mandated by rule 2**, which names the Black Flag fogger explicitly. Re-verified anyway: B0000BYBSD re-opened, shows **"See All Buying Options" with no featured offer and no price**, plus Amazon's own "Price higher than typical" banner — and it is the **190107 ELECTRIC** unit, a different machine from the propane one the article's hero names. The agent correctly declined to substitute the Bonide/Fog RX propane units ($400 vs the article's $60–$110) that rule 2 forbids |

**Constraint checks (whole working tree, not just this batch).** `npx tsc --noEmit` exits **0**.
Every added line across all pages is an `asin=` prop or `asin:` field — **zero** prose, title,
meta, H1, Quick Answer, verdict, score, price, star-rating, review-count, BSR, image or
AggregateRating changes. Every removed line is byte-identical to its replacement except for
the inserted prop, so **`search=` is preserved verbatim on every link touched** (rule 4).
No shared file (`lib/`, `components/`, `app/sitemap.ts`, `app/blog/page.tsx`) modified.
Both skipped pages still carry zero `asin` props. This batch's own contribution is exactly
one line. B005UTKT0W is also the ASIN already pinned on `mosquito-dunks-canada-guide`, so
the two Dunks pages agree.

**Corrections to the agent's report (immaterial to the decision, logged for accuracy):**
1. The report calls $29.99 "the CHEAPEST genuine Summit Dunks SKU." True on *absolute*
   price, but it is the **most expensive per dunk** of the three genuine SKUs: 6-card
   **$5.00/dunk** vs 2-Pack $35.16 (**$2.93**/count) vs 20-Pack $44.00 (**$2.20**/dunk).
   The pin is still right — it is the smallest pack and the lowest ticket, which suits the
   page's one-rain-barrel reader, and it is the *cheaper* option, so this is the opposite of
   a commission grab (rule 9). But "cheapest" should read "lowest total price, highest unit
   price."
2. Report says the 30-oz Bits is "38% above" the article's $34.99–$54.99; actual is ~35%
   over the top of range ($74.36 / $54.99). Direction and conclusion unchanged.
3. Report cites a "$26.95 floor across 5 sellers." The dp itself shows "New (5) from $29.99";
   $26.95 appears only on the search-results tile. Amazon display inconsistency, not an error.

**Left for a human (editorial, not link work).** The $10–$20 vs $29.99 gap is real. The
agent's mitigation is *mostly* right — FAQ 5 and the prose do attribute $10–$20 to Canadian
Tire/Home Depot/Rona — but three instances are **unattributed**: the Quick Answer bullet
("cost $10–$20"), the method table ("$10–$20 / 30 days") and the closing paragraph ("a
$10–$20 pack of dunks"). The unattributed bullet sits directly above two BuyLinks reading
"Mosquito Dunks on **Amazon.ca** →", so proximity does imply Amazon even though no sentence
says so. Recommend re-basing that bracket to the real Canadian spread or attributing it
everywhere. Stock caution stands: buy box reads "Only 1 left in stock"; 5 offers sit behind
it so the dp will not die, but re-check the winning offer in spring.

## AUDIT — independent verification of the screen tent / bug zapper / repellent-device wave (2026-09-02)

Independent auditor pass over the three pages `best-screen-tent-canada`,
`bug-zappers-canada-do-they-work`, `best-mosquito-repellent-device-canada`. Every ASIN in
the wave report was re-derived from amazon.ca rather than trusted, and every repo claim was
re-checked against source. **Verdict: all three skips upheld. Nothing removed, because
nothing was pinned. No corrective edit was required.**

### Constraint verification

| Check | Result |
|---|---|
| `asin=` props added by this wave | **0** — `grep asin` returns nothing on all three pages |
| Working-tree diff on the three assigned pages | **empty** — all three byte-identical to HEAD |
| `search=` props preserved | **Yes** — worktree counts equal HEAD exactly: 13 / 9 / 19 (the wave report said 12/9/19; the screen-tent count is 13, an immaterial miscount since worktree == HEAD) |
| Title / meta / H1 / Quick Answer / verdict / score / prose altered | **No** — no page file modified at all |
| Price, rating, review count, BSR, image, AggregateRating added | **No** |
| Shared files (`lib/`, `components/`, `sitemap.ts`, `blog/page.tsx`) | **Untouched** |
| `npx tsc --noEmit` | **exit 0**, re-run independently |
| `asin-pilot.md` append | **526 insertions, 0 deletions** — purely additive, concurrent session's work not clobbered |

### Live re-verification of the rejected ASINs

- **B00004R9VW (Flowtron BK-40D, 1 acre / 40W)** — skip **upheld, and the case is stronger
  than reported**. Confirmed on the dp: no Add-to-Cart, no Buy Now, no price, right column
  reads only "Price higher than typical … See All Buying Options". Offer page returns
  `heading: "1 option"` and the literal string **"No featured offers available"**; the sole
  offer is **BTExtra at $199.99 plus $25.64 delivery = $225.63 landed**, arriving
  **October 1–22**. The wave report quoted $199.99 and missed the delivery charge — the true
  landed cost is **33% above the article's own $169 ceiling**, not 18%. Decisive under
  rule 1 (no buy box, single third-party markup) independent of the price-prose conflict.
  *Caution for whoever re-tests:* the dp scrapes a `$119.99` price string, but that belongs
  to the "Consider these alternative items" carousel (the 1/2-acre 15W unit), **not** to this
  product. Do not mistake it for a live offer.
- **B0FGKGHTT9 (Flowtron 1 acre / 40W, Tan)** — exclusion upheld. Same seller **BTExtra**,
  same **$199.99**, plus $25.53 delivery, Oct 1–22, only 17 ratings. **One factual correction
  to the wave report:** it claims this listing publishes no model number, but the spec table
  does show `Item model number: FLWBK40DT`. The correction does not change the outcome —
  single-reseller markup at 33% over the article's ceiling still fails rule 1.
- **B00TMBENDS (Clam Quick-Set Escape 9879, 140x140in)** — skip upheld. Re-opened today:
  `availability: "Currently unavailable. We don't know when or if this item will be back in
  stock."` No Add-to-Cart, no price, no merchant, no buying options. Fails rule 1 on stock,
  and independently fails on the two-brand-OR hero verified in source (line 115 StickyBuyBar
  vs line 146 award card).

### The repellent-device skip — pressure-tested against the marketplace, not just the article

The wave report decided this one from the article alone and never checked amazon.ca. That
was a gap worth closing, because its `search=` prop (`thermacell patio shield`) is far more
specific than its hero name, which is the profile of a page that *could* be pinnable. I
checked. **The skip is correct, and the marketplace evidence independently confirms it:**

- **B078X1N5CW / B078X21G3H** — the classic 15-ft fuel Patio Shield, i.e. the exact unit the
  article's "$35–$45 cheapest that works" figure describes: **dead buy box.** No
  Add-to-Cart, no price, no seller. The cheap hero the article names is not buyable.
- **B091MT7GFL** — the closest thing to a pinnable match, and worth recording because it is
  genuinely tempting: title contains **both** "Patio Shield" **and** "E-Series", 20-ft zone
  matching the Quick Answer, **In Stock, $69.99, Ships from Amazon**, 4.3★/473. It still
  fails: $69.99 sits **above the article's own stated $35–$60 band for that exact tier**
  (FAQ 5) and 55% above the "$35–$45" cheapest-that-works row, and it is the *rechargeable*
  line, so the featured card's listed con **"Needs refill mats and fuel"** is false of it.
  Pinning it would contradict the page in two places while rule 5 forbids fixing the prose.

**New finding the wave missed — this page's search fallback is actively leaking basket.**
`thermacell patio shield` returns 75 results in which **four of the top ten are refill
consumables, not devices** — B0C9S2J62K ($59.98, flagged *Bestseller*), B0C9RNBXYX
(*Bestseller*), B07YBJNRT8, B07D7XZQV3 ($72.97 refill value pack) — and rank 1 is a
*sponsored* competitor-adjacent unit. A reader clicking a hero badged **"Best overall"** can
land on a refill cartridge pack. That is the exact revenue-per-order failure this project
exists to fix, and on this page it cannot be fixed by pinning, because no single ASIN
satisfies the card. **It needs the editorial fix: commit the hero to one model.**

**Thermacell naming drift, same pattern as Flowtron.** Thermacell has rebranded the line on
.ca to **Fuel-ZoneGuard** (fuel) and **E-ZoneGuard** (rechargeable). The article's
"Patio Shield / E-Series" vocabulary now matches Amazon's titles only partially, which is
why the search returns a scatter. Worth tracking alongside the Flowtron BK-40D → BK-40CCN
drift already logged.

### Auditor's conclusion

Zero pins means the serious error class — a bad pin shipped — is structurally impossible in
this batch. Every skip is correct on rule 1 grounds, and two of the three are additionally
unfixable by any stock change because the hero names a class or a two-brand OR. The wave
correctly refused every adjacent substitute available to it (BK-80D, the 2-acre unit,
Gazelle G6, the B0H5K4YF6L knockoff, the Executioner racket). Reporting accuracy was high;
the three defects found were a missed delivery surcharge, one wrong claim about a published
model number, and a search-prop miscount — none of which changed a decision.

**Left for a human (editorial, not a link change):** all three pages now fail for the same
reason — the article recommends something Canadians cannot cleanly buy on amazon.ca, or
recommends a *category* rather than a model. The bug-zapper page additionally carries a
now-false claim: its "Where to Buy" table (line 358) tells readers Amazon.ca is
*"Best for finding a specific model (like the BK-40D)"*, which is no longer true.

---

## Independent audit — bite-treatment / tick-tool batch (2026-09-02)

**Auditor:** independent verification pass over the agent that pinned
`horse-fly-and-deer-fly-bite-treatment`, `chigger-bites`, `tick-bite-vs-mosquito-bite`.
**Result: both pins CONFIRMED and RETAINED. Nothing removed. The skip was correct.**

| slug | ASIN | verdict | live re-verification (independent, 2026-09-02) |
|---|---|---|---|
| horse-fly-and-deer-fly-bite-treatment | B0GBY8KXFY | **PIN UPHELD** | Cortizone-10 Soothing Aloe, 1% Hydrocortisone, 56 g. In Stock, $14.03. **Shipper/Seller = Amazon.ca (first-party)** — not a 3P markup. Brand byline "Cortizone 10 Store", detail table `Active ingredients: 1% Hydrocortisone`, ASIN field confirms. 4.6★ (243), 3K+ bought past month, breadcrumb Cortisone Treatments. Bullets carry every card claim: "rashes due to insect bites", "Starts working to relieve itch in just 5 minutes", 56 g tube + "first aid kits, camping essentials and travel bags" = card's "small enough to keep on hand". Rule 9: $25.05/100 g, cheaper per gram than the brandless alt the agent cited. |
| tick-bite-vs-mosquito-bite | B075DKL3Z6 | **PIN UPHELD** | TickCheck Premium Tick Remover Kit. In Stock, $16.49, **Amazon's Choice**, 4.6★ (6,379), 400+ bought past month. `ASIN: B075DKL3Z6`, `Manufacturer: TickCheck`, `Item model number: TICKCHECK-REMOVER-KIT`, `Date First Available: Oct. 4 2017` — the brand's own canonical listing, not a reseller dupe. Bullets match the card near-verbatim: "a specially shaped super-fine-tip tweezer for removing nymphs and small deer ticks" vs card's headline pro "Works on tiny nymphs household tweezers miss". |
| chigger-bites | — | **SKIP UPHELD** | File byte-unmodified, 0 `asin` props. Re-ran the `calamine lotion` search: top slots are Aveeno *Daily Moisturizing* lotion (not calamine at all), Aveeno calamine **+ oat**, Caladryl calamine **+ pramoxine**, Life Brand $17.33 and a $16.99 small-business white-label. No plain first-party calamine. Rule 2 (near-miss is worse than a search link) correctly applied. |

**Markup test on the one 3P listing (B075DKL3Z6) — passed.** Sold by Marathon Commerce, LLC
but **"Ships from Amazon"** (FBA), and **"Other sellers on Amazon: New (2) from $16.49"** —
the second seller is at the *identical* price, so no one is being undercut and $16.49 is the
genuine market price, not a lone flipper's markup. Amazon's Choice badge + 6,379 reviews +
2017 listing age corroborate. This is a distributor holding the buy box on a real brand's
product, not a markup of a cheap item.

**Rule 9 challenge — independently tested and cleared.** The obvious rule-9 objection is that
the cheaper TickCheck 3-Pack (B07D6J52JJ, $7.49, #1 Best Seller, 6,983 reviews) was passed
over for a $16.49 SKU. I opened it: it is **three sizes of the HOOK tool and contains no
tweezer at all** — its own bullet reads "The hook tip ... can be easier to use on a
thick-furred, feisty dog or cat than a pair of tweezers." The card's headline pro ("works on
tiny nymphs household tweezers miss") requires the super-fine-tip tweezer, which only the
Premium Kit carries. The dearer pin is the *only* conforming SKU, not a commission upsell.

**Sibling-page conflict check — clean.** `tick-removal-tool-guide` hero is
`search="tick twister removal tool"` (O'Tom hook), unpinned and untouched. The two pages now
differentiate correctly: hook tool on the tool guide, fine-tip kit on the nymph/Lyme page.

**Constraint audit — clean.** `git diff -U0` over the three files yields exactly **4 added
lines, all pure `asin=` props**; the 2 corresponding removed lines are byte-identical to
their replacements except for the inserted prop, so **`search=` is preserved verbatim on
every link touched** (rule 4) and `tag`/`name`/`label` are unchanged. Pins are on hero
surfaces only (TopPick + StickyBuyBar); every inline body `BuyLink` remains a search link
(rule 3) — verified `horse-fly` line 151-152 and `tick-bite` line 186. Zero title, meta, H1,
Quick Answer, verdict, score or prose edits; zero prices, star ratings, review counts, BSR,
images or AggregateRating (rules 5, 6). No shared file touched (rule 7). `npx tsc --noEmit`
exits **0**. `asin-pilot.md` diff is **526 insertions / 0 deletions** — pure append, no prior
log content rewritten.

**Adjudicating the agent's own flagged judgment call (generic hero, no brand named).**
I side with the agent. `asin` beats `search` in `amazonUrl()`, so the pin changes only the
destination — the rendered card still reads "Hydrocortisone 1% Anti-Itch Cream" and
"Fine-Tipped Tick-Removal Tool Set", no displayed text becomes false. That is the real test,
and it is why these differ from the wide-range class heroes skipped earlier
(`best-mosquito-repellent-device-canada`, `best-screen-tent-canada`), where one ASIN would
falsify half the card. **Precedent to carry forward: a generic hero MAY be pinned when it
names a single well-defined spec (one active at one concentration, one tool geometry) that
every conforming product satisfies — and MUST be skipped when it spans product lines or a
wide price range.**

**Left for a human.**
1. *Single-seller dependency (B075DKL3Z6).* Buy box is one 3P distributor. Fine today (FBA,
   2 sellers both $16.49, at/below US parity). If that seller lapses or price climbs past
   ~$17, delete the `asin` prop — the preserved `search=` fallback resumes automatically —
   or switch to first-party Coleman B0D35SYJ54.
2. *Category cosmetic, not a mismatch.* B075DKL3Z6 sits in Pet Supplies › Dogs › Tick Remover
   Tools ("#3 in Dog Tick Remover Tools") on a human-Lyme page. Amazon.ca has no human
   tick-remover node — every tick remover lives under Pet Supplies — and the listing itself
   says "BEST TICK REMOVERS FOR PEOPLE OR PETS" and "from humans, dogs, cats", plus it funds
   Lyme research. Taxonomy artifact; no action needed, but worth knowing before anyone
   re-audits and panics.
3. *Not this batch.* The working tree also contains edits from parallel agents
   (`best-wasp-trap-canada`, `how-to-get-rid-of-wasps-canada`, `mosquito-larvae-identification`,
   `natural-mosquito-repellent-ontario`, `rat-poison-canada-what-is-legal`). Out of scope for
   this audit and not attributable to this batch.

## AUDIT — independent verification of the repellent / bite-treatment batch (2026-09-02)

Auditor pass over the three slugs claimed by the "Wave 3 — repellent / bite-treatment"
batch. Every ASIN re-checked live on amazon.ca from scratch; no claim taken on trust.

| Slug | ASIN | Auditor verdict |
| --- | --- | --- |
| natural-mosquito-repellent-ontario | B0CWQ3G2RB | **PIN UPHELD — kept** |
| permethrin-canada-yard-clothing-spray | — | **SKIP CORRECT** (re-tested: 20 results, zero Sawyer) |
| no-see-um-bites | — | **SKIP DEFENSIBLE** (class-based hero, no brand/size/format named) |

### B0CWQ3G2RB — re-verified live, all fields independently reproduced
Title "OFF! Botanicals DEET-Free Insect Repellent Lotion, Eucalyptus, 142g"; byline
"Visit the OFF! Store"; Brand OFF!; Manufacturer SC Johnson; UPC 062300009732; Size
"142 g (Pack of 1)"; **In Stock**; buy box **$13.98** with merchant line reading
**"Shipper / Seller Amazon.ca"** (first-party — not a third-party markup); Amazon's
Choice; 4.2 stars / 88 ratings; 400+ bought in past month; BSR #25 in Insect & Pest
Repellent Body Sprays. Active-ingredient identity matches the article's "Refined PMD"
via the listing's own bullet ("the repellent ingredient found in eucalyptus, but
chemically synthesized from pine oil"). Article states no size → no size mismatch.

Ruled-out alternates independently re-checked (all three exclusions were honest):
- `B09PRVP3MJ` (118 mL lotion) — confirmed **no buy box**: renders "See All Buying
  Options", no add-to-cart button. Correctly excluded.
- `B07DDKL88R` — OFF! FamilyCare Power Dry, **15% DEET**. Disqualifying on a non-DEET
  page. Correctly excluded.
- `B09PRVKDH3` — "OFF! Gentle DEET Free Insect Repellent Spray, **10% Icaridin**, 142g".
  This *confirms* the batch's data-quality note: the bogus "10% Icaridin" Ingredients
  field on B0CWQ3G2RB is carried over from this sibling SKU. Correctly excluded.

Conclusion: B0CWQ3G2RB is the only OFF! Botanicals PMD product on amazon.ca carrying a
live first-party buy box. The pin is the best available match for the named hero.

### Constraint checks (auditor-run)
- Batch footprint is exactly **2 added lines**, both `asin` props on
  `natural-mosquito-repellent-ontario/page.tsx`. No title, meta, H1, Quick Answer,
  prose, score, price, rating, or image change anywhere. Rules 5 + 6 clean.
- `search=` preserved **verbatim** on both hero surfaces. Rule 4 clean.
- Hero-only: the three secondary AwardRow entries and all six inline BuyLinks remain
  search links. Rule 3 clean.
- No shared file touched (`lib/`, `components/`, `sitemap.ts`, `blog/page.tsx`). Rule 7 clean.
- This log is append-only (526 insertions, 0 deletions).
- `npx tsc --noEmit` → exit 0 (re-run by auditor).

### Functional check the batch did not perform
Traced the prop end-to-end: `AwardRow` spreads `{...a}` → `AwardCard` (`asin` is in the
exported `Award` type) → `BuyLink` → `AmazonLink` → `amazonUrl()`, which branches on
`asin` **first** and emits `https://www.amazon.ca/dp/{asin}?tag=…`. Both pinned surfaces
therefore resolve to real product links — the pin is not a silent no-op, and `search=`
sits behind it as an inert fallback exactly as intended.

### Left for a human (nothing reverted)
1. **Cross-session inconsistency — highest priority.** A concurrent session pinned
   `B0GBY8KXFY` (verified: "Cortizone-10 Soothing Aloe Itch Relief Cream, 1%
   Hydrocortisone, 56g") on `horse-fly-and-deer-fly-bite-treatment` for a hero whose
   name string is **identical** to the one skipped here: "Hydrocortisone 1% Anti-Itch
   Cream". The same generic hero is now pinned on one page and deliberately skipped on
   another. Each call is defensible alone; together they are incoherent. Pick one policy.
   (Outside this audit's scope — left untouched.)
2. **Duration contradiction — confirmed, and broader than first reported.** The pinned
   listing's bullet reads "up to 2 hours of protection from mosquitoes and up to 5 hours
   of protection from black flies". Sibling SKU `B09PRVP3MJ` carries the same claim in
   its *title* ("Repels Mosquitoes Up To 2Hrs & Black Flies 5Hrs"), so **2 h is the
   OFF! Botanicals Canadian line-wide figure, not a single-listing quirk**. The article
   asserts 4–6 h for this product in three places (comparison table row, Best Overall
   pro, Quick Answer). Readers now click from "4–6 hours per application" to a label
   saying 2. Prose fix, not a link fix — pin stays.
3. **Format wording.** The `whichToBuy` router calls the Best Overall a "spray"; the
   pinned SKU is a lotion. No OFF! Botanicals PMD *spray* exists on amazon.ca with a buy
   box (the Canadian line is lotion-only), so no ASIN change can resolve this — it is a
   one-word prose fix. The hero card's own `name` field specifies no format, so the pin
   itself is not mismatched.
4. **permethrin editorial flag stands.** The page still tells readers Sawyer permethrin
   is buyable on Amazon.ca; today's re-test found zero Sawyer across 20 results, while
   OnGuard ($42.99) and ECOGUARD ($54.99) restricted-class commercial concentrates —
   the exact products the article says homeowners may not legally apply — now lead the
   results. Editorial fix needed.

---

## INDEPENDENT AUDIT — wasp cluster (2026-09-02)

Auditor re-verified the wasp batch against the live marketplace and the repo.
**Verdict: batch PASSES. Nothing removed, nothing reverted.**

| slug | ASIN | auditor finding |
|---|---|---|
| best-wasp-trap-canada | B00BPTN6YC | **CONFIRMED — pin stands.** |
| how-to-get-rid-of-wasps-canada | B00BPTN6YC | **CONFIRMED — pin stands.** |
| best-wasp-nest-spray-canada | — | **SKIP CONFIRMED CORRECT.** |

### Live re-verification of B00BPTN6YC (auditor's own page load)
`/dp/B00BPTN6YC` resolves. Title `Rescue WHYTR-BB8 Wasp Hornet & Yellow Jacket Trap`;
byline `Brand: RESCUE!`; **In Stock**; $39.99; sold by Canadian Sales Limited; 3.8★ (211).
Model `WHYTR-BB8` is in the title and is the single-trap SKU — matches the one trap both
articles tell the reader to buy. Listing bullets independently substantiate every
editorial claim on both pages: dual-chambered design, three attractants, entry top or
bottom, catches paper wasps / bald-faced hornets / European hornets / yellowjackets,
two-week attractant supply included, reusable for many seasons with refills sold
separately. No claim on either page is unsupported by the listing.

**Rule 1 "third-party markup" test — examined, passes.** The listing is 3P and ~2.7x the
US price, so this was checked rather than assumed. A `rescue why trap wasp hornet
yellowjacket` search returns B00BPTN6YC at $39.99 as the *only* single WHY Trap on .ca;
every other RESCUE result is a different product (attractant refills, disposable
yellowjacket traps). There is no cheaper first-party path to the same trap, so this is
.ca market pricing, not a reseller inflating an otherwise-cheap listing. Re-check at the
next quarterly audit: a first-party listing appearing later would be the better pin.

**The search-link failure mode is real and reproduced.** On the article's own search term,
organic #1 is a SPONSORED $11.89 4-pack of fake-nest *decoys* (not a trap), and organic #5
is B00BKB0MNS, a $150.02 16-pack of *attractant refills with no trap*. The correct product
sits at organic #2. An unpinned reader can very plausibly buy a $150 box of refills or a
decoy instead of the trap. The pin removes this on both pages.

### Skip re-verification — best-wasp-nest-spray-canada
Confirmed correct, and confirmed for the right reason. Searching `raid wasp hornet foam`
on .ca returns **zero Raid foam SKUs** — the only foam hit is Wilson ONE Shot (B00LM93R58),
a differently-named product from the article's named "Wilson WaspOut."
The tempting substitute B071F16CJF was inspected directly: the word **"foam" appears 0
times**, spec table reads `Item form: Spray`, bullets say "continuous aerosol spray" /
"Sprays up to 7.5 metres". Pinning it would invert the page's defining foam-vs-jet axis,
contradict the page's own stated con ("Moderate jet reach"), beat the page's own Best Long
Reach winner, and exceed the range the article gives readers ("roughly 2–6.7 metres").
Textbook rule-2 near-miss. **Do not "fix" this page by pinning B071F16CJF.**

### Constraint audit (repo)
- Only added lines across all three pages are **4 `asin=` props**. Nothing else. Verified
  with `git diff -U0`.
- `search=` preserved **verbatim** at all 4 pinned points (`rescue why trap wasp hornet
  yellowjacket` ×2, `rescue why trap` ×2). Fallback intact.
- Hero-only respected (rule 3): StickyBuyBar + featured `AwardCard`/`TopPick`. Secondary
  awards (TrapStik, disposable bag traps), comparison-table BuyLinks, and inline body
  links all correctly left as search links.
- No title/meta/H1/Quick Answer/prose/verdict/score change. No price, rating, review count,
  best-seller rank, or image added. No AggregateRating schema.
- No shared files touched (`lib/`, `components/`, `app/sitemap.ts`, `app/blog/page.tsx`).
- Log edits are append-only (0 deleted lines).
- `npx tsc --noEmit` exits 0 with zero output.

### Left for a human
1. **best-wasp-nest-spray-canada needs an editorial pass, not a pinning pass.** Two of its
   three picks are unbuyable by name on .ca: the Best Overall (Raid foam) and the Best Foam
   Blanket (Wilson WaspOut). Confirmed by the auditor.
2. **The Canadian Raid foam the article names is under an active Health Canada recall**
   (Raid Max Wasp & Hornet Foam Bug Killer 2, PCP 30746) for leaking cans. Recommending it
   by name is a live editorial risk independent of the affiliate question.

---

## Independent audit — Wave 3 (rodenticide / roach-gel / bed-bug-evidence), 2026-09-02

Auditor pass over the wave-3 batch (`advion-cockroach-gel-bait-canada`,
`rat-poison-canada-what-is-legal`, `bed-bug-stains-poop-droppings-canada`).
Every ASIN re-looked-up live on amazon.ca from scratch; both skips re-derived rather
than trusted. **Result: 1 pin upheld, 2 skips upheld, 0 props removed.**

### Pin verified — rat-poison-canada-what-is-legal → B012ODWW7Y

| Check | Result |
|---|---|
| ASIN resolves | Yes — `ASIN ‏ : ‎ B012ODWW7Y` on the dp |
| Title | "Tomcat Rat Killer Bait Station Advanced Formula 1 x 113g" |
| Brand / Manufacturer | Tomcat / **Scotts Canada** |
| Seller | **Shipper/Seller: Amazon.ca — first-party**, not a 3P markup |
| Stock / price | **In Stock**, $16.99 (S&S $16.14), 200+ bought in past month |
| Model / UPC | 4605605 · MPN 4605605 · UPC 888603000463 |
| Species match | Product description names **"Norway Rats and Roof Rats"** — a rat station, not a mouse station |
| Format match | "Pre-filled and ready-to-use", "comes pre-filled as a ready to use bait station" = article's "Disposable Bait Station" |
| Quantity conflict | None — the article states no pack count |
| Editorial stance | Article **recommends** this product by name ("the practical answer for rats"); rule 8 satisfied |

**Bromethalin claim independently re-verified.** The active is absent from the Amazon
listing, and the article's card stakes its name, blurb, and both cons on bromethalin — so
this was re-derived, not accepted. ScottsMiracle-Gro's Canadian page for SKU **4605605**
("RAT KILLER BAIT STATION ADVANCED FORMULA - 1CT") states *"each 113 g **bromethalin** bait
block can kill up to 10 rats"* and calls the line "TOMCAT® ADVANCED FORMULA **DISPOSABLE**
BAIT STATIONS". **New corroboration the original pass did not have:** PMRA registered two
bromethalin rodenticides in 2023 under the product names *Tomcat Mouse Killer Bait Station
Advanced Formula* and *Tomcat Rat Killer Bait Station Advanced Formula* — which
independently substantiates the card's "PMRA-registered for Canadian consumers" pro, not
just the bromethalin claim. Canadian retail distribution confirmed at Home Depot Canada
(SKU 1001893622 = the 1×113 g unit) and Home Hardware.

**Rejected alternative re-checked and upheld:** B004XWULZU is **Sold by Stratton
Enterprises** (3P) at **$21.49** (26% dearer) and lists Target species "Mouse, Rat" — less
rat-specific and a rule-1 failure. Correctly rejected.

### Skips upheld

| Slug | Auditor finding |
|---|---|
| advion-cockroach-gel-bait-canada | **Upheld.** Re-ran `combat roach killing bait stations` on .ca: 61 results, and the only Combat-adjacent hit is **B0HDCKM1N9**, confirmed live as **Brand: Generic, Manufacturer: Generic**, title hyphenated ("Co-mbat", "Roach-Kil-ling") to evade brand matching, **$49.99, "Only 3 left in stock", non-returnable**, seller **Quality--Shop**, and filed under **Health & Personal Care › Vitamins, Minerals & Supplements › Herbal Supplements**. On a page whose thesis is "check the PCP number, refuse grey-market listings", pinning this would invert the article. Everything else the search returns is sticky traps and diatomaceous earth. Skip is correct. |
| bed-bug-stains-poop-droppings-canada | **Upheld on both grounds.** (1) Hero is class-based — `StickyBuyBar name="Bed bug interceptor traps (under each bed leg)"` and the featured card name the mechanism, no brand. (2) **B00743B6ZE confirmed live**: $111.03/12 ($9.25/count), **BERRYDEALS INC** (3P), "Only 6 left in stock", 3.1★ on **3 ratings**, delivery Sep 9–11 — against **$39.99 and $49.99 (Amazon's Choice)** 12-packs shown in the same page's own related rail, i.e. a 2.2–2.8× markup. Decisive rule-1 failure; substituting ECOPEST/TruGuard/Aspectek would be a rule-2 near-miss. Skip is correct. |

### Constraint audit (repo)
- Diff on the three batch pages is **exactly 1 added line, 0 removed**: `asin="B012ODWW7Y"`.
- `search="tomcat rat killer disposable station"` **preserved verbatim**; `amazonUrl()`
  gives `asin` precedence, so `search=` is the source-level fallback as intended.
- Hero-only respected (rule 3): pinned the **TopPick** ("The Legal Consumer Option"), the
  page's only award component. The three inline `BuyLink`s (lines 155, 183, 184) — including
  the Mouse Killer link — correctly left as search links.
- No title/meta/H1/Quick Answer/prose/verdict/score change. No price, rating, review count,
  BSR, or image added. No AggregateRating schema. The other two pages carry zero `asin` props.
- No shared files touched. Log edits append-only. `npx tsc --noEmit` exits 0.

### Left for a human
1. **The PCP registration number is still not evidenced for B012ODWW7Y**, and this page's own
   ten-second screening rule is "look for Reg. No. ___ P.C.P. Act". PMRA registration of the
   product *name* is now confirmed (2023, bromethalin), but the number itself is not legible
   at Amazon image resolution. The mouse-version number circulating publicly is 30757 — do
   **not** reuse it for the rat SKU. Nobody should later cite this row as a verified number.
2. **Quarterly re-check must use the model-number path, not Amazon alone.** The listing never
   states the active ingredient, so re-confirming the pin means re-running 4605605 against
   ScottsMiracle-Gro's Canadian page — same standing exception as the Natrapel row.
3. **Cosmetic only:** the listing shows `Country of origin ‏ : ‎ USA`. This is where it is
   manufactured, not which market SKU it is (Manufacturer is Scotts Canada, sold first-party
   on .ca, bilingual packaging). Flagged because the article warns hard about US-labelled
   stock, so a future reader of this log may trip on the field. Not disqualifying.
4. **Editorial, not a link fix — bed-bug-stains-poop-droppings-canada:** committing the hero
   card to one model would make it pinnable, but ClimbUp's .ca supply ($111.03/12 from a
   single 3-review reseller) should inform which model is chosen. The search fallback is
   currently returning correct product, so this is not urgent.
