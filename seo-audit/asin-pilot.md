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

---

## Wave 3 — bed-bug concentrate / roach spray / CO2 trap batch (2026-09-02)

Three pages assigned. **Zero pinned, three skipped.** Every hero failed rule 1 at the
same place: the brand the article actually recommends has no live amazon.ca listing at
all. No file in `app/blog/` was modified by this batch — the diff is this log entry only.

All searches run live on amazon.ca on 2026-09-02, delivering to Brampton L6V, signed out.

### Pinned

None.

### Skipped — search link kept

| Slug | Hero as written | Why no pin |
|---|---|---|
| co2-mosquito-trap-canada | `StickyBuyBar` + featured award = **Biogents BG-Mosquitaire** (`search="biogents mosquitaire mosquito trap"`) | **Biogents does not sell on amazon.ca.** Three independent searches returned zero Biogents products of any kind |
| crossfire-bed-bug-concentrate-review-canada | `StickyBuyBar` + `TopPick` = **PMRA-registered silica desiccant dust** (`search="cimexa insecticide dust bed bug"`) | **No amorphous-silica-gel insecticide dust exists on amazon.ca.** CimeXa is absent; the search returns diatomaceous earth and permethrin sprays, which are different chemistry |
| best-cockroach-spray-canada | `StickyBuyBar` + featured award = **Combat roach bait stations** (`search="combat roach killing bait stations"`) | Only Combat-adjacent listing on .ca is **B0HDCKM1N9**, a brand-obfuscated `Generic` reseller item. Decisive rule-1 failure |

### Verification notes for this batch

**co2-mosquito-trap-canada — Biogents is simply not on amazon.ca.**
Three queries, all zero brand hits:

- `biogents` → 33 cards; top results are Mosquito Magnet, Trappify, Thermacell, Flowtron, Bite Shield. No Biogents.
- `bg-mosquitaire` → header "1-48 of 95 results", 60 cards scanned, **0** matching `/biogents|mosquitaire|bg-gat|bg-home/`.
- `biogents bg mosquitaire trap` filtered to Patio, Lawn & Garden → 33 cards, **0** hits.

The page's own literal `search=` string (`biogents mosquitaire mosquito trap`, 168
results) returns PALONE bug-zapper rackets, a STEM plug-in fly trap, ZENLEA and Master
zappers, and octenol lure refills — i.e. the exact search-link failure this whole
programme exists to fix, but with no pinnable target to fix it with.

**A substitute was considered and rejected.** The obvious candidate is Mosquito Magnet
(B07QFNSC8Z, already pinned on `laser-mosquito-killer-photon-matrix-review`). It is a
rule-2 near-miss twice over: the StickyBuyBar and the featured card both read the brand
name *"Biogents BG-Mosquitaire"*, and the article's thesis is explicitly that electric
Biogents beats propane for GTA yards — the Quick Answer says propane traps "require a
mandatory 20 lb tank" and cost "$350-$550/season" against "$60-$120". Pinning the
runner-up under the winner's name would contradict the page's own verdict. Skip.

**crossfire-bed-bug-concentrate-review-canada — the recommended chemistry is not sold here.**

- `cimexa insecticide dust bed bug` (the live `search=` prop) → 41 cards, **zero CimeXa,
  zero silica gel**. Returns ECOPEST/OnGuard permethrin concentrates, KNOCK DOWN and
  Ortho Bed Bug B Gon diatomaceous earth, bed-bug glue traps, Raid aerosols, KONK.
- `cimexa` → 33 cards, one single hit: **B0F44B2PDV**, a *Relime powder duster* that
  merely lists "Cimexa" in its compatibility copy. The dust itself is not on .ca.
- `silica gel desiccant dust insecticide bed bug` → 60 cards, 55 "silica" matches, all of
  them **moisture-absorber packets** (wisedry, Dry & Dry, Wisesorb, Sukh, Fonday). Not
  insecticides.
- `amorphous silica gel insecticide dust bed bug duster` in Patio, Lawn & Garden → 21
  cards; every relevant hit is a *duster applicator* (Aspectek B01D0I21CI, Dr. Killigan's
  B078SK3R8Z) or diatomaceous earth (Eco-Way B0FP9P4399).

**Substituting diatomaceous earth was considered and rejected on two grounds.** (1) The
`TopPick` blurb names the mechanism precisely — "an **amorphous-silica-gel** desiccant
dust" — and DE is a different material (fossilised diatoms) with different performance;
pinning it would make the editorial text describe a product the button does not sell.
(2) The page's entire thesis is *buy the thing with a Canadian PCP number*, and the DE
listings surfaced lead with **"Food Grade"** (Doktor Doom B0F67FVMTP, KNOCK DOWN
B01FV3O3JO, B098TX2Y4C) — food-grade DE carries no PCP registration and no Canadian label
directions for killing insects. This is the `advion-cockroach-gel-bait-canada` precedent
exactly: on a page that tells readers to refuse unregistered product, the pin would invert
the article. Note the sister page `best-cockroach-spray-canada` makes this same point in
its own award copy ("a generic 'diatomaceous earth' ... search returns mostly food- and
craft-grade material that carries no PCP number").

Also worth recording for the next checker: this hero is **class-based, not brand-based** —
`name="PMRA-Registered Silica Desiccant Dust"`, no brand anywhere in the card. Same
structural situation as `bed-bug-stains-poop-droppings-canada`. Until the editorial commits
to a named, .ca-available registered product, there is nothing to pin even in principle.

**best-cockroach-spray-canada — B0HDCKM1N9 re-verified live, still disqualifying.**
Opened the product page directly on 2026-09-02:

- Title: `Co-mbat Max, Roach-Kil-ling Bait (18ct)` — hyphens inserted mid-word to evade
  brand matching.
- **Brand: Generic. Manufacturer: Generic.** Place of Business `JYD2365123`.
- **$49.99**, `$49.99/count`, seller **Quality--Shop** (third party), **Non-returnable**.
- **"Only 2 left in stock"** — down from "Only 3 left" when the advion page checked it.
- Breadcrumb: `Health & Personal Care › Vitamins, Minerals & Supplements › Herbal
  Supplements`. A roach bait filed under herbal supplements.

`combat roach killing bait stations` (60 cards) and `combat cockroach bait station henkel`
(14 cards) both surface this as the *only* Combat-adjacent listing; everything else is
sticky glue traps (MOUSINATOR, Coremaster, CatchCore), Raid ant baits, ECOPEST boron gel,
and KNOCK DOWN DE. There is no first-party Henkel Combat listing on amazon.ca.

This is the same skip already recorded for `advion-cockroach-gel-bait-canada`, and it is
if anything more clear-cut here: this page's Quick Answer instructs the reader to check
the pack for a "Reg. No. ___ P.C.P. Act" number, and the award card itself warns that
"marketplace listings mix Canadian and US-imported stock". Pinning a `Generic`-branded,
non-returnable, 2-in-stock reseller listing at $49.99 would be the precise behaviour the
page tells readers to refuse.

**Rule 2 note:** the secondary awards on this page (Raid Ant & Roach Killer, Safer's
diatomaceous earth) were *not* evaluated for pinning and were left as search links, per
the hero-only rule. Neither is the hero — the StickyBuyBar and the `featured: true` card
are both Combat.

### Constraint check

- `git diff` on the three assigned pages: **no changes**. Zero `asin=` props added
  anywhere; every existing `search=` prop untouched.
- No title, meta, H1, Quick Answer, verdict, score, or prose edited on any of the three.
- No price, star rating, review count, best-seller rank, image, or `AggregateRating`
  schema added. Prices and stock figures appear in this log only, as verification
  evidence — never on the pages.
- No shared file touched (`lib/`, `components/`, `app/sitemap.ts`, `app/blog/page.tsx`).
- Edit to this log is append-only.
- `npx tsc --noEmit` exits 0.

### Left for a human

1. **`co2-mosquito-trap-canada` is unpinnable until Biogents lists on .ca, and that is a
   revenue problem, not a link problem.** Every buy button on the page — hero, three award
   cards, the CO2 booster, the BG-GAT kit — points at a brand Amazon Canada does not
   stock, so each one lands the reader on zapper rackets and octenol refills. The article
   is correct on the merits; the affiliate path underneath it does not exist on .ca. Worth
   an editorial decision: either add a genuinely-available secondary pick, or accept the
   page as traffic/authority rather than affiliate revenue.
2. **`crossfire-bed-bug-concentrate-review-canada` has the same gap in milder form.** The
   Canada-legal recommendation is real and the reasoning is sound, but the specific
   chemistry it names cannot be bought on amazon.ca. The steamer and interceptor rows in
   the same table *are* purchasable, and the steamer row already points at a product this
   programme has pinned elsewhere (`dupray-steamer-review-canada` → B07C44DM6D) — a
   possible editorial reshuffle of which tool is the hero, but that is a content decision,
   not a link fix, and outside this batch's remit.
3. **Combat's absence from amazon.ca is now confirmed twice** (advion page, this page). If
   a third page names Combat as its hero, skip it without re-verifying from scratch — but
   re-check quarterly, since a first-party Henkel listing appearing would make three pages
   pinnable at once.

## Wave 3 batch — black flies / no-see-ums / DynaTrap, checked 2026-09-02

**Result: 0 pinned, 3 skipped.** All three heroes failed rule 1, for two different
reasons. Two are class-named heroes (no brand in the card, so there is no brand/model to
match); the third names an exact model that amazon.ca does not sell at all. No near-miss
substitutes were made. Zero lines changed in all three page files.

| Slug | Hero as written | ASIN | Action | Reason |
|---|---|---|---|---|
| dynatrap-canada-review | `StickyBuyBar` + featured `AwardCard` + `TopPick` = "DynaTrap DT3050 (1 acre + mosquito attractant fan)" | — | **SKIP** | **The DT3050 is not sold on amazon.ca.** Verified across four queries (`dynatrap dt3050`, `dynatrap insect trap`, `dynatrap 1 acre mosquito trap`, and `dynatrap` filtered to Patio/Lawn/Garden). The site's whole DynaTrap *trap* catalogue is two units: **B0DH5ZLK26 DT1130-CA** (1/2 acre LED, $129.99) and **B0GND1CY8C** (1/4-acre portable). No DT3050, no DT2030, no DT1050, no 1-acre model in any form. Everything else DynaTrap-branded on .ca is bulbs and glue cards. Substituting the DT1130-CA would be a rule-2 near-miss and worse: the article's stated and only reason to pick the DT3050 is that it is "the only model in the Canadian lineup that adds a dedicated mosquito-attractant fan… That is the feature worth paying for." The DT1130-CA has no attractant fan, and is half the coverage. Pinning it under a bar reading "DT3050 (1 acre + attractant fan)" would be a straight falsehood |
| black-flies-ontario-when-they-come-out | `StickyBuyBar` "Picaridin (icaridin) insect repellent" + `TopPick` "Picaridin (Icaridin) Insect Repellent" | — | **SKIP** | **Class-named hero — the page names no repellent brand anywhere** (the only brand token on the page is "sawyer" inside a *secondary* inline permethrin BuyLink). Same ground as the bed-bug-stains skip in the prior wave. Compounding it: the search is **healthy, not broken** — `picaridin insect repellent canada` returns **B0BYFF3S3V Natrapel Icaridin 100 mL at #1** ($11.53) and the 170 g variant at #2, i.e. the search already lands on the site's own established house pick, with Care Plus 20% Icaridin, Ben's Icaridin and PiACTIVE 20% below it. No junk, no wrong category, no markup. A pin buys ~nothing here and costs honesty: rule 4 forbids renaming the card, so a generic "Picaridin (Icaridin) Insect Repellent" card with category-level pros ("safe on plastics, sunglasses, and gear") would silently route to one brand's 100 mL bottle. Note also that B0BYFF3S3V's listing never states its concentration (see the wave-2 audit note), so it cannot self-evidence this card's explicit "20% picaridin" claim |
| no-see-ums-biting-midges-ontario | `TopPick` + `StickyBuyBar` = "No-see-um mesh screening (20x20, ~0.6 mm openings)" | — | **SKIP** | Class-named hero, **and** no listing on .ca passes rule 1. Detail below — this is the one page in the batch where the search is genuinely broken, so it is worth a human's attention |

### no-see-ums — why every candidate failed (the search here IS broken)

`no see um mesh screen replacement` currently returns, in order: **B0DR8DG3WC ($19.99),
B09BKYBFGY ($17.98), B06XXXM74W ($16.99), B0GVMF4KKM ($17.99) — all four are ordinary
fiberglass window screen**, which is exactly the 1.1–1.5 mm product the article's own
thesis tells the reader will NOT stop a 1 mm midge. Real 20x20 mesh does not appear until
position 5. This is the textbook failure the pinning programme exists to fix — and it still
cannot be fixed by pinning, because:

1. **The only 20x20 no-see-um family on .ca is one unrated third-party size matrix.** Brand
   "PPS Professional Screen", manufacturer Wuqiang Superstar Fiberglass Products Co. Checked
   B0CSFKHTZZ (4' x 25') live: **$133.85, "Usually ships within 3 to 4 days", Shipper/Seller
   "ShoppingCentre\*"** — not Amazon.ca, not FBA. `Material : 20x20` does match the article's
   spec, and the bullets do describe spline installation. But **every SKU in the family has
   zero ratings**, and the seller's own pricing contradicts itself, which is decisive under the
   "buy box is not a third-party markup" test — I cannot establish a fair price when the matrix
   is this incoherent:

   | SKU | Size | Sq ft | Price | $/sq ft |
   |---|---|---|---|---|
   | B0CSFJB589 | 4' x 10' | 40 | $101.79 | **$2.54** |
   | B0CSFJT8R2 | 6' x 10' | 60 | $110.10 | $1.84 |
   | B0CSFKHTZZ | 4' x 25' | 100 | $133.85 | $1.34 |
   | B0CSFHZFDR | 5' x 25' | 125 | $141.34 | $1.13 |
   | B0CSFJP8J4 | 6' x 25' | 150 | $139.12 | **$0.93** |
   | B0CSFJ1V35 | 7' x 25' | 175 | $305.84 | $1.75 |
   | B0CSFH5ZMP | 8' x 25' | 200 | $334.26 | $1.67 |
   | B0CSFJFFZR | 5' x 50' | 250 | $221.64 | $0.89 |
   | B0CSFHCJ57 | 6' x 50' | 300 | $455.68 | $1.52 |

   A 2.9x spread with no volume logic, and two outright inversions: the **5' x 25' costs more
   than the 6' x 25'** for 25 sq ft less material, and the **6' x 50' costs 2.06x the 5' x 50'**
   for 1.2x the material. That is algorithmic reseller repricing, not a stable catalogue price.

2. **The one branded, brand-direct alternative fails the article's load-bearing spec.**
   **B008TK7KXI Skeeta No-see-um Netting 54" x 10 yd** is genuinely clean on the commercial
   checks — In Stock, $44.90, 4.0 stars (24), **Shipper/Seller "Skeeta Inc."** (brand-direct, no
   markup). But the listing has **no feature bullets and no spec table at all**: it states no
   mesh count and no opening size, so the article's checkable "20x20 / ~0.6 mm" claim — the
   entire point of the page — cannot be verified from it. It is also soft *netting*, not
   splineable *screening*, against a card whose cons read "Requires rescreening the frames
   yourself." Product-type near-miss on top of an unverifiable spec.

3. No Phifer (the usual name-brand 20x20) exists on amazon.ca — checked.

### Constraint audit (repo)
- **Zero lines changed** across all three page files; `git diff` on them is empty. No `asin`
  prop added anywhere, so every `search=` prop is preserved verbatim by construction.
- No title/meta/H1/Quick Answer/prose/verdict/score touched. No price, rating, review count,
  BSR, or image added. No AggregateRating schema. No shared files touched (`lib/`,
  `components/`, `app/sitemap.ts`, `app/blog/page.tsx` all untouched).
- Log edit is append-only. `npx tsc --noEmit` exits 0.

### Left for a human — two editorial calls this programme cannot make

1. **`dynatrap-canada-review` has a genuinely broken hero and it needs an editorial fix, not
   a link fix.** `dynatrap dt3050` returns **4 results on amazon.ca and not one is a trap** —
   a $9.99 replacement bulb, $32.86 sticky cards, two more bulb multipacks — surrounded by
   sponsored fly paper, ultrasonic repellers and glue boards. So the StickyBuyBar on this page
   currently sends a reader who came for a $249–$329 machine to a page of $9.99 consumables.
   That is the AOV leak in its purest form, and pinning cannot close it because the product does
   not exist on .ca. Options, in the order I would rank them: (a) re-cut the hero to the
   **DT1130-CA (B0DH5ZLK26, $129.99)** with the blurb rewritten honestly — it is the only
   DynaTrap a Canadian reader can actually buy, and the page's real verdict ("barely a mosquito
   trap") arguably suits the cheaper unit better anyway; (b) point the hero at the CO2/propane
   trap the article already says is the better buy, via `best-mosquito-trap-canada`; or (c) drop
   the Amazon hero and let the barrier-spray CTA carry the page. Note the article's own
   comparison table already links `dynatrap dt1100 canada` and names "DT1100-CA / DT1130-CA",
   so option (a) is a small edit, not a rewrite. **This needs a human because it changes an
   editorial verdict and a scored top pick, which rule 4 puts out of my reach.**

2. **`no-see-ums-biting-midges-ontario` is one card-naming decision away from being pinnable.**
   The page is a strong candidate on the merits — it is the only one of the three where the
   search demonstrably sells the wrong product — but the hero has no brand and no size, so
   there is nothing to match. If someone commits the card to a named SKU, the pin follows
   immediately. Before doing that, note the supply problem the table above documents: the
   spec-correct product on .ca is a zero-rating 3P matrix with incoherent pricing, and the
   clean brand-direct option (Skeeta) will not evidence the 20x20 spec. Best value in the
   family if it is chosen anyway is **B0CSFJP8J4 (6' x 25', $139.12, $0.93/sq ft)**; the
   **4' x 10' at $2.54/sq ft is the one to avoid** — it is the cheapest sticker price and by
   far the worst value, which is exactly the SKU an unpinned reader is most likely to pick.

3. **Standing re-check note:** the DynaTrap finding is a catalogue-availability fact, not a
   stock blip. Re-test with the plain `dynatrap` query filtered to Patio, Lawn & Garden — if a
   1-acre unit ever appears on .ca, this page becomes pinnable as written.

---

## Wave 3 — steamer / sprinkler / biting-fly batch (2026-09-02)

Assigned pages: `best-bed-bug-steamer-canada`, `motion-activated-sprinkler-canada`,
`deer-flies-horse-flies-ontario`. **Result: 1 pinned, 2 skipped.**

The two skips are different failures and should not be collapsed together. One is a
**supply** failure (the hero product is not sold on amazon.ca at all); the other is the
familiar **class-based hero** failure (the article names a product category, not a model).
The supply failure on the steamer page is the more serious of the two and is written up
below as a revenue finding, not just a skip.

### Pinned

| Page | Product | ASIN | Verified on 2026-09-02 |
|---|---|---|---|
| motion-activated-sprinkler-canada | Orbit 62100 Yard Enforcer motion-activated sprinkler, single unit | B009F1R0GC | **In Stock**, **$136.68**, **Shipper/Seller Amazon.ca (first-party — no 3P markup)**. Brand byline "Brand: Orbit", **Manufacturer: Orbit**, `input#ASIN` = B009F1R0GC. **Item model number 62100**, Model Number 62100, MPN 62100Z. Number of Packs 1. 3-year manufacturer warranty. **#11 in Lawn & Garden Sprinklers**, #2,140 in Patio Lawn & Garden. 3.7★ (10,811) |

**Why this ASIN is unambiguously the article's Best Overall.** The card names the "Orbit Yard
Enforcer"; the listing's model number field reads **62100** twice and the bullets say
"Yard Enforcer" by name. The article's two load-bearing differentiators are reproduced
verbatim in Amazon's own bullets: "**day only, night only, or 24 hour protection**" (the
card's "Day / night / 24-hour sensing modes", which the page argues is the whole reason to
buy it over clones) and "**over 7,500 activation cycles**... as little as **2 cups of water
per activation**" (the Quick Answer's "~7,500 activations", "about 2 cups of water per
activation"). Price sits sensibly against the 2-pack B0B1SG9MJH at $260 (~$130/unit), so the
buy box is not a markup.

**Sibling models deliberately not used.** The same search returns Orbit **62120** Garden
Enforcer, **62400** Green Enforcer and **62000** Enforcer 2-/3-packs. These are different
products at different price points; only 62100 is "Yard Enforcer", which is what the page
recommends. The 2-pack was also rejected — the article recommends one unit.

**Flag — a factual error in our own copy, not a product mismatch (do not "fix" by
re-pinning).** The page says "one **9V battery** lasts the whole season" (Quick Answer) and
"~7,500 activations per **9V battery**" / "Season-long battery life on one 9V" (card).
Amazon's listing, the bullets and the Batteries detail field all say **4 AA batteries**. The
7,500-cycle figure the article quotes is correct and comes from this listing; the battery
format is wrong. Identity of the pinned product is not in doubt (model 62100 confirmed in
three fields), so the pin stands. Per method rule 4 the prose was **not** edited — this
needs an editorial pass, flagged below.

### Skipped — search link kept

| Page | Reason |
|---|---|
| best-bed-bug-steamer-canada | **The hero product is not sold on amazon.ca.** See the write-up below — this is a live revenue leak, not a routine skip. |
| deer-flies-horse-flies-ontario | **Class-based hero with no honest match in the catalogue.** The `TopPick` is named "Blue Sticky Ball Deer Fly Trap" and no brand or model appears anywhere on the page. Verified across `deer fly sticky trap` (218 results) and `bug ball blue deer fly trap` (85 results): amazon.ca carries **no blue coroplast sticky sphere**. The only ball-format deer-fly products are generic 18" **inflatable** balls sold **"Glue Not Included"** (B0G35FFRJT, B0GSWML65W, B0GZP28G97) — a different mechanism from the "blue coroplast sphere coated in sticky glue" the card describes, and a product that arrives non-functional. Everything else returned is **yellow** fruit-fly/gnat sticky balls (wrong target insect) or Trappify/Rescue! house-fly paper. Pinning any of these is a rule-2 near-miss and would also invent an editorial pick the article never made. |

### best-bed-bug-steamer-canada — the hero cannot be bought, and the search link is spending clicks on accessories

This page's hero (StickyBuyBar + featured AwardCard + Quick Answer) is the **Vapamore MR-100
Primo**. It is not on amazon.ca. Verified on the bare brand query `vapamore` — **27 results,
zero steamer machines**. Every Vapamore listing is an accessory or a different appliance:

| ASIN | What it actually is | Price |
|---|---|---|
| B07144ZY8Z | MR-100 Primo **Upgrade Pack** (tools/accessories only) — carries *Amazon's Choice* | $242.81, only 4 left |
| B08192JBCG | Micro Fiber Floor Pad for MR-100 Primo | $42.20 |
| B01M6ZZ5ZN | MR-100 Steamer **Funnel** | $62.82 |
| B00304ONN8 / B0058OIOVK / B00CEZW8MW | Cotton cover / floor pad / brass brush | $37–$42 |
| B00U9RMLRO | MR-500 Vento **canister vacuum** (not a steamer) | — |

**This is very likely the mechanism behind the cluster's $47.99 average basket.** The hero
search `vapamore mr-100 steamer` returns **17 results**, and the only Vapamore item on it is
the **$242.81 accessory upgrade pack for a machine the reader does not own**. The rest of the
page-one inventory is unbranded $66–$99 handheld steamers (B0GTZH5K8R, B0FPPRLQD2,
B0H4ZFCLC4, B0H45WS5XZ, MLMLANT at $69.99, Gautye at $84.97) plus Dupray accessory bundles.
A reader who trusts the Quick Answer and clicks cannot buy the recommended product, and the
cheapest plausible-looking substitute in front of them lands almost exactly on $47.99.

**No substitution was made, on purpose.** The obvious move — repoint the hero at the
McCulloch MC1275 — is a rule-2/rule-4 violation: the title tag, H1, Quick Answer, StickyBuyBar
label and featured card all name Vapamore, so swapping the link alone would make the hero
button contradict the sentence above it. That is an editorial decision, not a link fix.

**Groundwork done for whoever makes that call.** The page's own *Best Value* pick verifies
clean: **McCulloch MC1275**, **B0000DF0RB** — In Stock, **$232.89**, **Shipper/Seller
Amazon.ca (first-party)**, brand byline "Brand: McCulloch", title confirms "**18 Accessories**"
(the card claims an 18-piece kit). Note $232.89 sits at the very top of the card's stated
"$150–$250 range".

### Verification notes for this batch

- Every ASIN above was opened as a live `/dp/` page; fields were read from that page, not
  from search-result tiles. Reads were done as atomic navigate+extract batches because
  concurrent agents were sharing the browser and repeatedly navigated the tab mid-read — two
  extractions returned another agent's page (a `biogents` search, and the Combat roach-bait
  listing from the wave above) and were discarded and re-run rather than trusted.
- Buy box checked on both verified ASINs; both are **sold and shipped by Amazon.ca**, so
  neither is a third-party markup listing.
- Hero-only respected (rule 2): on the sprinkler page the two pinned surfaces are the
  `StickyBuyBar` (line 105) and the `featured: true` AwardCard. The `Yard Enforcer Pro` and
  `Budget PIR` cards, the Quick Answer `AmazonLink`, the Quick Answer `BuyLink`, the three
  compare-rail `BuyLink`s and the three comparison-table `BuyLink`s were all left as search
  links.
- `search=` preserved verbatim on both pinned surfaces; `asin=` added alongside it.
- Diff is **+2 lines / −1 line in one file**, both changes additive prop insertions. No
  title, meta, H1, Quick Answer, verdict, score, prose or existing link altered. No price,
  star rating, review count, BSR, image or AggregateRating added to any page. No shared files
  touched. The other two assigned pages carry zero `asin` props.
- `npx tsc --noEmit` exits **0**.

### Left for a human

1. **`best-bed-bug-steamer-canada` needs an editorial decision, and it is the highest-value
   item in this batch.** The page's #1 recommendation is unpurchasable through our only
   affiliate channel while the page keeps sending its highest-intent clicks into a search
   result whose best Vapamore match is a $242 accessory. Promoting the MC1275 (B0000DF0RB,
   verified above) to Best Overall would fix the revenue leak *and* make the hero pinnable in
   one pass. Until someone decides, the search fallback stays — it is bad, but a wrong pin
   would be worse.
2. **`motion-activated-sprinkler-canada` battery spec is wrong in three places** — Quick
   Answer ("one 9V battery lasts the whole season"), the card's `why` ("~7,500 activations per
   9V battery") and its pros list ("Season-long battery life on one 9V"). The Orbit 62100
   takes **4 AA**. The 7,500-cycle claim is correct and can stay. Not fixed here because
   rule 4 forbids touching prose; it is a copy edit, not a link change.
3. **`deer-flies-horse-flies-ontario` — the one genuinely branded, on-target product in this
   cluster is the hat patch, not the ball.** `4/Pk Deerfly Patches / TredNot Deer Fly Patch`
   (B003NJ7VWA, $19.99, 4.0★/212) is a real named product matching what the article describes
   in prose. It was **not** verified to rule-1 depth and must not be pinned as-is: it is the
   *secondary* link, while the hero is the ball. If the ball trap genuinely cannot be sourced
   in Canada, the honest fix is editorial — reconsider which product leads the page — not a
   link swap.
4. **Quarterly re-check for B009F1R0GC** is low-risk: first-party, 10.8K reviews, #11 in its
   category, listed since 2012. Re-confirm the buy box is still Amazon.ca and that the model
   number still reads 62100 (Orbit rebadges Enforcer variants).

---

## Batch — best-mosquito-trap-canada / best-rodent-repellent-for-cars-canada / best-spider-spray-canada (2026-09-02)

| Slug | Product | ASIN | Fields verified / reason |
|---|---|---|---|
| best-mosquito-trap-canada | Mosquito Magnet **MM4202B Patriot Plus** Mosquito & Flying Insect Trap — protects up to 1 acre | **B07QJY2NL1** | **Supersedes the prior skip — the documented revisit condition has been met.** Two earlier rows (the 16-page skip table, and the `mosquito-magnet-canada` row re-confirmed 2026-08-31) recorded "the Patriot Plus trap is not sold on amazon.ca … Revisit if a Patriot Plus listing appears." It has appeared. Verified live 2026-09-02: title "Mosquito Magnet **MM4202B Patriot Plus** … Protects Up to 1 Acre"; brand byline **MOSQUITO MAGNET**; **Manufacturer: Mosquito Magnet**; **item model number MM4202B** — the exact model the page names. **Shipper/Seller: Amazon.ca — first-party**, so no 3P markup question arises. **$416.00**, which sits inside the page's own quoted **"$399–$549"** range (FAQ + featured card), so the pin contradicts no price claim. Availability "Usually ships within 3 to 5 days", FREE delivery Sep 13–21, 400 ratings. Bullets confirm the page's mechanism claims: propane-powered CounterFlow, heat + moisture lure, "protects up to 1 acre", and "Note: Propane tank is not included" — which matches the card's existing con "Ongoing propane + attractant cost". Pinned to StickyBuyBar + featured "Best Overall" card only |
| best-spider-spray-canada | Doktor Doom **Pro Max Spider Killer Plus, 1L** trigger spray | **B0CXV32GKD** | **Hero is line-level, not SKU-level — that is what makes it pinnable.** The page never names a model, size, format or price; it repeatedly recommends the *line*: "Doktor Doom's residual insecticide **line**" (Quick Answer), "a domestic-class product **line**" (FAQ), "Doktor Doom residual **line**" (takeaways table), and decisively "**The line includes residual formulations explicitly aimed at crawling insects and spiders** for indoor and outdoor use around the home — the exact mission profile spider control calls for." The card itself says "the brand sells **several formulations**". Verified live 2026-09-02: brand byline **Doktor Doom**, **Manufacturer: Doktor Doom**, **Country of origin: Canada**, item model 99222, **In Stock**, $31.15, 4.4 stars (220), **BSR #17 in Insect & Pest Repellent** — which independently substantiates the card's "widely stocked" pro. Bullets: "Strongest **Domestic** Water Based 0.35% Permethrin Formula", "long lasting **residual** kill", repels via d-Limonene + lemongrass — matching the card's "weeks-long treated zone" and "domestic-class Canadian product". **Markup checked, not assumed:** buy box is Spray Fresh Ltd (3P, the same Doktor Doom reseller accepted for B0D2PFS1WZ). Canadian retail comparators — Green Spot Brandon **C$21.99** (in-store pickup only, not shippable) and Purity Feed $13.95 (**listed Unavailable**). $31.15 = **1.42x** the only in-stock comparator, well under the 2–3x reseller-markup bar, and a #17 category rank means the market transacts at this price at volume. Not a gouge. Pinned to StickyBuyBar + featured "Best Overall" card only |
| best-rodent-repellent-for-cars-canada | — | **SKIPPED** | **Class-based hero — the page names no brand, model, size or price.** `StickyBuyBar name="Capsaicin rodent deterrent tape (Honda-style)"` and the featured card name the *mechanism* ("Capsaicin Rodent Deterrent Tape (Honda-Style)"); "Honda-**style**" explicitly means *like* Honda's, not Honda's. Rule 1's "brand and model match" therefore cannot be satisfied — same call as `bed-bug-stains-poop-droppings-canada` and `crossfire-bed-bug-concentrate-review-canada`. **Nor is there a clean product to pin:** the whole capsaicin-tape category on .ca is two small aftermarket listings, neither the genuine Honda OEM part, both titled "Replacement for Honda … 4019-2317" — **B0FZVZ5L9G** (brand *GROUP DMR*, mfr Teraoka, 3P, $82.69, 50 ratings, first listed Jan 2026) and **B0F1VZYNFM** (*Lakota Naturals*, $47.02). The two differ by **1.76x for the same nominal 19 mm x 20 m spec**, a sign of an unstable aftermarket. Genuine Honda OEM is $82.16 at a Canadian dealer, so B0FZVZ5L9G is at OEM parity rather than a markup — but choosing between two no-name reseller brands would be making an editorial decision the article deliberately declined to make, i.e. exactly the near-miss substitution rule 2 forbids. Search fallback left in place |

### What the unpinned searches were returning (why these two pins matter)
- **`mosquito magnet trap`** now surfaces the real Patriot Plus, but only *below* the $1,135.99 MM3300B Executive and two sponsored bug zappers; the rest of page one is fly paper, glue boards and a Terro sticky trap at $4.98. A reader who came for the $399–$549 trap the article names met a $1,136 sibling first.
- **`doktor doom residual insecticide spray`** (42 results) put **two competitor-brand jugs (OnGuard P-22-RTU, ECOPEST) in the sponsored slots above the fold**, and the first Doktor Doom result — carrying *Amazon's Choice* — was **"Long Lasting Residual Insecticide for Horses"**. A spider-page reader was being routed to a horse product under a competitor's ads.

### Constraint audit (repo)
- Diff on the three batch pages: **best-mosquito-trap-canada +2/-1**, **best-spider-spray-canada +2/-1**, **best-rodent-repellent-for-cars-canada 0/0**. Every change is an added `asin` prop; no other character altered.
- Both `search=` props **preserved verbatim** in all four edited call sites (sticky bar + featured card on each page); `amazonUrl()` gives `asin` precedence, so `search=` remains the source-level fallback.
- **Hero-only respected (rule 2).** On the mosquito page the Quick Answer `BuyLink`, the four comparison-table `BuyLink`s and the three footer links stay search links — including the two other `mosquito magnet trap` links. On the spider page the table row, the two "Doktor Doom residual" body links and the Konk/glue-trap links stay search links.
- No title, meta, H1, Quick Answer, verdict, score, pro/con or prose changed. No price, star rating, review count, BSR, image or AggregateRating schema added to any page. Secondary award cards carry no `asin`.
- No shared files touched (`lib/`, `components/`, `app/sitemap.ts`, `app/blog/page.tsx` all untouched). Log edit is append-only.
- `npx tsc --noEmit` exits 0.

### Left for a human
1. **The Patriot Plus pin needs a price re-check sooner than quarterly.** The page hard-codes **"$399–$549"** in the FAQ and the retailer table, and the listing is at $416.00 — comfortably inside today, but this is a first-party Amazon listing whose price moves. If it climbs past $549 the pin starts contradicting the page's own copy, and the fix is editorial (widen or drop the range), not a link change.
2. **The Patriot Plus listing carries 3.4 stars over 400 ratings**, against a featured-card editorial score of 9.2. Nothing was added to the page (rule 5) and the pin is the product the article recommends, so rule 8 is not engaged — but the gap is large enough that an editor may want to re-read the card's confidence against current owner sentiment.
3. **Editorial, not a link fix — best-spider-spray-canada:** the hero is labelled "Doktor Doom **Residual Insecticide Spray**", and no product by that name is sold on amazon.ca; the pinned can is "Pro Max Spider Killer Plus". The pin is sound because the page recommends the line, but naming the actual can in the card would make the page self-consistent and would let a future auditor verify it in one step. Note the sibling `/blog/doktor-doom-canada-guide` treats "Pro Max" and "Residual" as separate rows in its range table, so any rename should be made on both pages together.
4. **Doktor Doom on .ca is a single-reseller supply.** Every Doktor Doom SKU checked (spider 1L, spider aerosol, Sleep Tight) has **Spray Fresh Ltd** in the buy box; there is no first-party or Prime Doktor Doom offer. Same standing exception already recorded for B0D2PFS1WZ — if a first-party listing ever appears, move to it.
5. **Considered and rejected for the spider hero: B0D42DQ2D3** ("Maximum Strength 24/7 **Residual Barrier** Spider Killer Plus, 515g"). Closer on *name* and the only one with an explicit crack-and-crevice injection tube, but it fails the card's "widely stocked" pro on every axis: **4 ratings**, and **$20.75 product + $24.60 delivery = ~$45 landed** with delivery Sep 11–17, versus $31.15 with free delivery over $35. Recorded here so a future pass does not "upgrade" the pin to it without re-checking those numbers.

## Wave 3 — rat trap / Thermacell E90 / fruit fly batch (2026-09-02)

Assigned pages: `best-rat-trap-canada`, `thermacell-e90-canada-review`,
`best-fruit-fly-trap-canada`. **Result: 0 pinned, 3 skipped. Zero code changes in this
batch** — no `asin` prop was added to any of the three pages, so the working tree is
untouched by this wave. All three failures are supply-side: in every case the exact product
the article names as its hero has no valid amazon.ca listing.

### Skipped — search link kept

| Page | Reason |
|---|---|
| best-rat-trap-canada | **Victor's metal-pedal traps on amazon.ca are mouse-only — the metal-pedal RAT trap (M201/M203 class) is not sold on .ca.** Hero is unambiguous: `StickyBuyBar name="Victor Metal Pedal Rat Snap Trap" search="victor rat trap"` (line 104) + the featured "Best Overall" card of the same name (score 9.1). Four queries run — `victor metal pedal rat trap`, `victor m201 rat trap`, `victor rat trap`, `metal pedal rat trap wooden 2 pack`. Victor's complete live rat lineup on .ca: **B0CNH8VZYX** (Wide Pedal Rat Trap M205TRI, $5.29), **B0CCWRKQ56** (Power Kill Rat Trap 2-Pack, $11.99), **B0CCWPCCSM** (M144B Power Kill, $8.49), **B00T3HHXS8** (Power Kill M144 6-Pack, $47.98), **B0CCWPBF8Z** (M147B Safe-Set, $11.98). Every *metal pedal* hit is a **mouse** trap — B0CQ8RSTC9 (M150-12 Metal Pedal FSC Wood Snap **Mouse** Trap, 12 traps) and B0HF3ZKDV9 (Victor Metal Pedal **Mouse** Traps, 12-pack). **Do NOT substitute B0CNH8VZYX.** It verifies clean on every other axis (In Stock, Brand Victor, Manufacturer Woodstream Corporation, Model M205TRI, Target Species Rat, Material Wood, $5.29, no 3P markup) but it is a rule-2 near-miss on three counts: (a) it is a differently named model — "Wide Pedal", not "Metal Pedal"; (b) its lead feature bullet, "**Expanded trigger for the highest catch rates**", is the direct opposite of the claim the article's H3 makes for the hero ("The metal pedal trigger is sensitive enough for a cautious rat but **stiff enough not to false-trigger**") — pinning it would put a contradicting product behind that sentence; (c) `Unit Count: 1`, against the FAQ's "a **2-pack** covers a typical basement or garage". **Do NOT promote the Power Kill 2-pack** either — it is a moulded-plastic trap, a different mechanism from the wooden 1890s design the H3 spends a paragraph on. **Do NOT promote the Tomcat** (B012VO4TLS, Tomcat Wooden Rat Trap, $4.68, live and clean) — it is the article's *third* card ("Easiest to Set"), and swapping which product the hero names is an editorial change, not an `asin=` addition (rule 2). Decoy to avoid on re-check: **B00004RAMU** shows as "Victor …" in search-result markup but resolves to the **M310S Tin Cat Live Mouse Trap**. Search link kept |
| thermacell-e90-canada-review | **The E90 has exactly one amazon.ca listing and it has no first-party offer — 14 of 14 offers are third-party, the buy box is a 70%-positive reseller, and the item is non-returnable.** Hero is three link points, all naming the same product: `StickyBuyBar` (line 96), `TopPick` (line 189) and the featured "Best Overall" card, all `name="Thermacell E90 Rechargeable Mosquito Repeller"`, `search="thermacell e90 rechargeable"`. The candidate **B0C9MNZPQ9** ("Thermacell Rechargeable E90 Mosquito Repeller with 40 Hours of Repellent") passes identity cleanly — $82.84, **In Stock**, byline "**Visit the Thermacell Store**", Brand Thermacell, Manufacturer Thermacell, Model Number 1669618, 4.2★/30 — and it is **not** a markup ($82.84 is the floor of all 14 offers and sits *below* the article's own stated "$90–$120"). It fails on supply quality instead: (1) `#mbc` reads "Other sellers on Amazon **New (14) from $82.84**" and there is **no Amazon.ca or Thermacell first-party offer at all**; (2) the buy box is held by **Bookstore North America** (seller `AHB6M8I8W73JG`) — **3.8/5, 70% positive in the last 12 months, 213 ratings**, whose own storefront copy opens its policy section with "**No Guaranteed Deli**[very]"; (3) the offer block reads "**Non-returnable.** Transportation of this item is subject to hazardous materials regulation" — an $83 rechargeable device the reader cannot send back. (4) It is the **US-market SKU**: Thermacell's first-party Canadian line is the **E-ZoneGuard** rebrand, and that line has **no plain 9-hr non-lantern unit** — B0CWMFFKDH (E-ZoneGuard Patio, 5.5-Hr, $53.99), B0BWSHDPHV (E-ZoneGuard **Glow** + Lantern LED, 9-Hr, $69.98), B0DFMVY6B7 (E-ZoneGuard Patio+, 6.5-Hr + charging dock, $71.98), B0C3FWDRSF (E-ZoneGuard **Adventure**, IP54, 9-Hr, $74.97). **Do NOT substitute any E-ZoneGuard.** This page is a single-product *review* of the E90 — the title, H1, Quick Answer and the whole E90-vs-E55-vs-EX90 comparison collapse if the hero points at another model. B0C3FWDRSF is the EX90 and is already the article's *secondary* "Best for Camping & Cottage" card (rule 2); B0BWSHDPHV adds a lantern the article never mentions. Secondary mismatch noted for completeness: the SKU ships "**with 40 Hours of Repellent**" while the page's refill card states "The **12-hour** cartridge in the box is a sampler" — and rule 4 forbids fixing the prose. Search link kept — **see "Left for a human" #1 below; this is the closest call in the batch.** |
| best-fruit-fly-trap-canada | **TERRO does not sell the apple-shaped Fruit Fly Trap on amazon.ca — at all.** Hero: `StickyBuyBar name="TERRO Fruit Fly Trap (2-pack, liquid lure)" search="terro fruit fly trap"` (line 105) + the featured "Best Overall" card "TERRO Fruit Fly Trap (2-pack)" (score 9.0). Three queries run — `terro fruit fly trap`, `terro T2502 fruit fly trap apple`, `terro fruit fly` — plus a generic `fruit fly trap apple shaped liquid lure` sweep that returned **zero** TERRO results. TERRO's entire live .ca catalogue across those queries is four unrelated SKUs: **B07F97SSGZ** (T510 Fly Magnet sticky **fly paper**, 4-pack, $4.98), **B07Q697VZK** (T3206SR **Spider & Insect** Trap, $16.46), **B014H8NZ7U** (T300CAN Liquid **Ant** Bait Stations, $9.98), **B08C225K7R** (T231 **Flea** Trap refill glue boards, $9.97). No T2500/T2502, no fruit-fly product of any kind. **Do NOT substitute a generic red/apple trap or a refill-liquid listing** — the article's thesis is brand-specific and quantity-specific ("the little red apple with a vinegar-based liquid lure", "the strongest, longest-lived scent lure", "2-pack" in *both* hero names), so any generic swap is the exact rule-2 near-miss that misleads the reader. Search link kept — **but see "Left for a human" #3: this page is the sharpest live example of the failure this whole project exists to fix.** |

### Verification notes for this batch

- `npx tsc --noEmit` exits **clean (0)**, run from `C:/Users/buzzs/buzzskito-website`.
- **`git diff` for the three assigned pages is empty** — no page file was modified. This
  log entry is the only artifact. Concurrent unrelated edits by other sessions
  (`app/blog/motion-activated-sprinkler-canada/page.tsx`, `data/asin-wave3.json`) were
  present in the working tree and were left untouched.
- No title, meta description, H1, Quick Answer, verdict, score or prose was altered. No
  price, star rating, review count, BSR or product image was added to any page. No
  AggregateRating schema added. No shared file (`lib/`, `components/`, `app/sitemap.ts`,
  `app/blog/page.tsx`) touched.
- All three pages retain their original `search=` props verbatim on every link point.
- Every ASIN above was opened live on amazon.ca on 2026-09-02 and read from the product
  page itself (title, byline, `#productOverview_feature_div`, tech-spec table,
  `#availability`, `#offer-display-features`, `#sellerProfileTriggerId`, `#mbc`) — not
  inferred from search-result cards. Seller reputation for `AHB6M8I8W73JG` was read from
  its seller profile page.

### Left for a human

1. **`thermacell-e90-canada-review` is a judgement call, not a dead end — Diogo should
   decide.** Unlike the other two, the product *is* on .ca and the ASIN is correct
   (**B0C9MNZPQ9**). Everything in rule 1 passes except a clean buy box, and the price is
   not inflated. Pinning it would not change *which* product a reader buys — that ASIN is
   already the #1 organic result for the existing `thermacell e90 rechargeable` search
   link — it would only add product attribution, which per the affiliate-ceiling analysis
   search links do not earn. Against that: it sends readers to a **70%-positive reseller
   with no guaranteed delivery, on a non-returnable $83 device**. I skipped because I will
   not commit the site's top recommendation to a listing I cannot verify as a clean
   purchase, but the revenue case is real and the decision is his.
2. **The deeper issue on that page is editorial, not a link.** The article states the E90
   is "the flagship rechargeable Thermacell you can actually buy in Canada". On Amazon.ca
   that is only true through a marketplace importer — Thermacell's own Canadian first-party
   line (E-ZoneGuard) has **no plain 9-hr unit**. Either the page should acknowledge that
   the E90 reaches Canada as a US SKU via resellers, or the review should move to a model
   Thermacell actually sells here.
3. **`best-fruit-fly-trap-canada` is the single clearest live proof of the search-link
   problem in the whole programme, and it is leaking money now.** The hero carries a 9.0
   "Best Overall" verdict on a named TERRO product, and its search link returns **zero
   TERRO fruit fly traps**: page one is a sponsored Cusbus plug-in, a sponsored Trappify
   sticky trap, TERRO **fly paper**, TERRO **ant bait**, generic 20-packs of sticky cards
   and refill liquids. Every reader who trusts that verdict and clicks lands on a
   competitor's product. No pin can fix it, because the product is not sold here — the fix
   is to re-anchor the "Best Overall" card to a fruit fly trap that *is* stocked on .ca,
   which is an editorial decision and outside this batch's mandate.
4. **Standing re-check note for `best-rat-trap-canada`:** this is a catalogue-availability
   fact, not a stock blip — Woodstream ships the Wide Pedal (M205TRI) and Power Kill lines
   to Canada in place of the metal-pedal rat trap. Re-test with `victor rat trap` filtered
   to Patio, Lawn & Garden; if an M201/M203-class wooden metal-pedal **rat** trap ever
   appears on .ca, this page becomes pinnable exactly as written, ideally in the 2-pack the
   FAQ names.

---

## Independent audit — Wave 3 batch (2026-09-02)

Auditor pass over the three Wave 3 pages (`crossfire-bed-bug-concentrate-review-canada`,
`best-cockroach-spray-canada`, `co2-mosquito-trap-canada`). Verdict: **all three skips
upheld. Nothing removed, nothing reversed.** Wave 3 pinned zero ASINs, so there was no
bad pin to strip — the primary failure mode this audit hunts did not occur.

### Mechanical checks

| Check | Result |
|---|---|
| `asin=` props in the three pages at HEAD | **0 / 0 / 0** — no `.tsx` under `app/blog/` touched by this batch |
| Hero `search=` props preserved verbatim | Yes — `biogents mosquitaire mosquito trap`, `cimexa insecticide dust bed bug`, `combat roach killing bait stations` all intact |
| Title tags / H1s / Quick Answer / verdicts / scores | Untouched (no file diff at all) |
| Shared files (`lib/`, `components/`, `sitemap.ts`) | Untouched |
| `npx tsc --noEmit` | **Passes, exit 0** |
| `seo-audit/asin-pilot.md` diff | Append-only — **0 removed lines** |

### Live re-verification on amazon.ca (2026-09-02, independent of Wave 3's session)

- **Biogents — absence confirmed, 3 fresh searches.** The page's own live `search=` prop
  returns **60 cards, zero Biogents**: Mosquito Magnet, Flowtron $329.99, Bite Shield,
  STEM, Coremaster/ZENLEA/Master zappers, octenol lure refills. Bare `biogents` returns
  **"10 results"** and the only occurrence of the string "biogents" anywhere in the DOM is
  the search box echoing the query. A fourth angle — `BG-Lure mosquito attractant biogents
  sentinel`, chosen because a consumable lure is the easiest SKU for a brand to list —
  returns 20 cards of generic octenol cartridges, zero Biogents. Skip is correct, and
  Wave 3's refusal to substitute Mosquito Magnet B07QFNSC8Z is the right call: the Quick
  Answer ranks propane *below* electric on both tank requirement and running cost
  ($350–550/season vs $60–120), so pinning it under a card reading "Biogents
  BG-Mosquitaire" would invert the page's own verdict (rules 2, 7, 8).
- **CimeXa / silica gel — absence confirmed.** `cimexa insecticide dust bed bug` → 43
  cards, **zero CimeXa, zero silica gel**; only DOM hit is the search-box echo.
  `amorphous silica gel desiccant dust insecticide bed bug` filtered to Health & Personal
  Care → 14 cards, all moisture-absorber packets (Wisesorb, wisedry, Dry & Dry, Sukh) plus
  one Raid spray. No amorphous-silica-gel insecticide is sold on .ca. Skip upheld.
- **B0HDCKM1N9 — re-opened, every disqualifying field reproduced.** Title
  `Co-mbat Max, Roach-Kil-ling Bait (18ct)` (hyphenated mid-word to evade brand matching);
  **Brand: Generic**, **Manufacturer: Generic**; **$49.99**; **"Only 2 left in stock"**;
  seller **Quality--Shop** (third party); Place of Business JYD2365123; breadcrumb
  **Health & Personal Care › Vitamins, Minerals & Supplements › Herbal Supplements**;
  best-seller rank #446 in *Herbal Supplements*. A ~$13 retail 18-count bait pack listed at
  $49.99 by a 3P reseller is a textbook rule-1 markup failure. **Rejecting this was
  correct**; pinning it would have been the serious error. Two searches
  (`combat roach killing bait stations`, 70 cards; `combat bait station cockroach henkel
  gel`, 25 cards) surface **no first-party Henkel Combat listing** — the rejected ASIN is
  the only Combat-adjacent item on .ca.

### One rationale corrected (conclusion unchanged)

Wave 3 justified the `crossfire` skip partly on the claim that the diatomaceous-earth
alternatives "lead with *Food Grade*, which carries no PCP number". That is **only partly
accurate**. The same result set contains **B08244CY3D — Ortho Bed Bug B Gon Diatom
Diatomaceous Earth Bed Bug Killer 340 g, Brand: Ortho, $13.99, In Stock, first-party
(no third-party merchant)** — a brand-name registered Canadian bed-bug insecticide, not a
food-grade moisture absorber. Doktor Doom B0F67FVMTP *is* food grade, but Ortho is not, and
Wave 3 did not mention it.

**The skip still stands, on the stronger reason Wave 3 gave first:** the hero is
class-based (`StickyBuyBar name="PMRA-registered silica desiccant dust (Canada-legal)"`,
`TopPick name="PMRA-Registered Silica Desiccant Dust"`, no brand or model anywhere) and the
blurb explicitly specifies **amorphous silica gel**, a materially different substance from
diatomaceous earth. Pinning Ortho DE under a card that names silica gel is exactly the
rule-2 near-miss substitution. Recorded so a future wave does not re-open this page
believing "no DE is registered" — the real blocker is the material mismatch plus the
unnamed brand, not registration status.

### Duplicate-coverage note for whoever schedules these batches

Two of the three pages had **already been adjudicated as skips in an earlier wave** and are
logged above: `co2-mosquito-trap-canada` (checked 2026-08-31, four searches, same Biogents
conclusion) and `crossfire-bed-bug-concentrate-review-canada` (same class-based-hero call).
Wave 3 re-derived both from scratch and reached the same answer, which is a good
consistency signal but wasted a batch slot. Worth de-duplicating slugs against this log
before assigning future waves.

### Left for a human

1. **`co2-mosquito-trap-canada` has no working affiliate path at all.** Every buy surface —
   hero StickyBuyBar, all three Biogents award cards, the CO2 booster and BG-GAT kit links —
   points at a brand amazon.ca does not stock, so readers land on bug-zapper rackets and
   octenol refills. The page also tells readers to avoid exactly that product class. This is
   an editorial/revenue decision, not a link fix. An earlier wave already filed this same
   flag; it is now confirmed twice and still open.
2. **The `crossfire` page's PCP claim needs checking against the PMRA registry.** The
   TopPick asserts the dust "carries a Canadian PCP registration number", but CimeXa
   (Rockwell Labs) is US EPA-registered and no PMRA registration was found. On a page whose
   entire thesis is "buy the thing with a Canadian PCP number", that sentence should be
   verified or softened. Raised by an earlier wave, not re-surfaced by Wave 3, still open.
3. **Combat's absence from amazon.ca is now confirmed on three pages** — `advion-cockroach-gel-bait-canada`,
   `best-cockroach-spray-canada`, and this audit. Treat a Combat-hero page as an automatic
   skip, but re-check quarterly: a first-party Henkel listing would unlock several pages at once.

---

## Wave 4 — wasp-trap / tick-tool / CO₂-trap batch, 2026-09-02

Three pages: `best-yellow-jacket-trap-canada`, `tick-removal-tool-guide`,
`mosquito-magnet-canada`. Every ASIN opened live on amazon.ca on 2026-09-02 (title,
brand byline, manufacturer, model number, seller, fulfilment, stock, price checked on
the dp — not just the URL resolving). **Result: 3 pinned, 0 skipped.**

Hero-only respected on all three (rule 2): `StickyBuyBar` + the `featured: true`
AwardCard. Every other `BuyLink`/`AmazonLink` on these pages — comparison-table rows,
the Quick Answer inline CTA, the "check availability" rails — left as search links.
`search=` preserved verbatim on all six pinned link points.

| Page | Product | ASIN | Model | Seller / fulfilment | Stock & price |
|---|---|---|---|---|---|
| best-yellow-jacket-trap-canada | RESCUE! Reusable Yellowjacket Trap – Includes Attractant | B01LX43HWH | YJTR | Sold by Online Solutions Store, **Ships from Amazon** | In stock, $39.99 |
| tick-removal-tool-guide | Tick Twister 3-Pack Tick Removal Tools | B0D4DTM25H | BLISTPLA3-VA | Sold by Pet Science Ltd., **Ships from Amazon** | **In Stock**, $9.99 |
| mosquito-magnet-canada | Mosquito Magnet MM4202B Patriot Plus | B07QJY2NL1 | MM4202B | **Shipper / Seller: Amazon.ca (first-party)** | Ships in 3–5 days, $416.00 |

### best-yellow-jacket-trap-canada → B01LX43HWH

| Check | Result |
|---|---|
| ASIN resolves | Yes — `ASIN : B01LX43HWH` on the dp |
| Title | "RESCUE! Reusable Yellowjacket Trap – Includes Attractant" |
| Brand / Manufacturer | RESCUE! / RESCUE |
| Model | **YJTR** — the plain reusable body, **no "-W" suffix** |
| Editorial stance | Article's own Best Overall; rule 7/8 satisfied |
| Bullet ↔ card parity | Listing bullets independently carry all three of the card's pros: "Attracts Multiple Species… roughly a dozen species", "Reusable — durable plastic… attractant refills sold separately", "Won't Attract Honeybees" |
| Quantity conflict | None — the hero states no count, and the page states no price for this trap |

**The East/West thesis was re-derived, not assumed** — this page's entire headline is the
YJTD-W SKU trap, so pinning a "-W" product would invert the article. RESCUE!'s own product
page for the Reusable Yellowjacket Trap describes **one** attractant "designed to catch
multiple species of yellowjackets common in North America… roughly a dozen species", with
models **YJTR** (trap) and **YJTA** (attractant), and lists only 2–4 week liquid and 10-week
cartridge refills — **no regional formulations**. The East/West split is a *disposable*-trap
distinction (YJTD-E vs YJTD-W), which is exactly what the article's warning is about. So the
pinned reusable body cannot land a reader on a West-of-the-Rockies SKU. This is a
material improvement over the status quo: the current `search=` query
("rescue reusable yellowjacket trap") returns, in the top organic results,
**"Rescue YJTD-W Disposable Yellow Jacket Trap, West of the Rockies (2 PACK)" with 1K+ bought
in the past month** — the precise product the H1 warns readers away from — plus Trappify fly
paper and an $11.99 generic solar wasp trap.

**Borderline call of the batch — price. Flagged for a human, pin made deliberately.**
$39.99 is a 3P offer; there is **no Amazon.ca first-party offer at all**, and all three
"New" offers sit at the same $39.99. Reference points gathered: Home Depot US lists the
same trap (YJTR-SF4) at **$11.38 USD** and a 2-pack at $20.35–$23.75 USD; **Canadian Tire
does not stock the reusable yellowjacket trap at all** (its RESCUE! range is the two
disposables, the W.H.Y. trap and the W.H.Y. refill). So $39.99 is roughly **2.2–2.6× the
US-retail equivalent**. What kept this on the pin side of the line: the markup is a
*market* premium, not an *ASIN-level reseller* markup. Canadian Tire sells the larger
RESCUE! Reusable W.H.Y. Trap at **$21.99 CAD** while amazon.ca prices the same W.H.Y. trap
(B00BPTN6YC) at **$39.50** — i.e. amazon.ca already runs ~1.8× Canadian retail across this
brand — and the 3-pack of the pinned trap (B07YCNR28T, Amazon's Choice) independently
prices at $35.97/unit. Unlike the wave-3 ClimbUp skip, there is no cheaper equivalent offer
on amazon.ca being undercut. The page also states no price for this trap ("a modest one-time
spend for the reusable bodies"), so no reader expectation is broken. **A human who weighs
the 2.2–2.6× harder than I did should revert this one row; the other two are not close.**

### tick-removal-tool-guide → B0D4DTM25H

| Check | Result |
|---|---|
| ASIN resolves | Yes — `ASIN : B0D4DTM25H` |
| Title | "Tick Twister 3-Pack Tick Removal Tools" |
| Brand | **Tick Twister** |
| Manufacturer | **H3D / ZA Sous la Combe, 01590 LAVANCIA (France)** · `info@tick-twister.com` · Country of origin **France** — H3D is the actual maker of the O'TOM / Tick Twister, so this is the genuine article the page names, not a keyword-squatting generic |
| Model | BLISTPLA3-VA (3-hook blister) |
| Seller / fulfilment | Sold by Pet Science Ltd., **Ships from Amazon** |
| Stock / price | **In Stock**, $9.99 — inside the article's stated "$5–$10" |
| Sales signal | BSR **#16 in Dog Tick Remover Tools** |
| Bullet ↔ prose parity | Listing bullets carry the article's exact mechanism claims: "Doesn't leave the tick's rostrum in the skin", "Doesn't squeeze the tick's abdomen", "Removes ticks of any size", "indefinitely reusable" |
| Editorial stance | Article's own Best Overall (score 9.1); rule 7/8 satisfied |

**Rejected alternative, and why.** B0BQ7N1PYY ("Tick Twister® Set of 3 Tick Removers in
Sachet… Made in France", model PLA3VESAC) is also genuine and cheaper at $8.12, but it is
**"Only 8 left in stock"**, seller-fulfilled by **MillerRock** with no manufacturer field on
the dp. B0D4DTM25H is the same brand and the same French manufacturer, FBA, unqualified
"In Stock", and a far stronger sales rank — the more durable pin. The two other
"tick twister"-titled hits (B0BMGSGM9G Clipbox, delivery **Sep 28 – Oct 20**; B0FF91JHR4
5-pc generic) were rejected on stock and identity respectively.

**Quantity note — read this before the next audit (rule 1, count).** The article's body
copy states **"Cost: $5–$10 (2-pack with different sizes)"**; the pinned SKU is a
**3-pack**. This is not a substitution — it is the genuine H3D Tick Twister, and the modern
O'TOM retail blister ships 3 hooks (small/medium/large), so the article's "2-pack" line is
simply stale. It was left untouched under rule 4 (no prose edits). Two things made this
acceptable rather than a skip: **neither hero surface states a count** (StickyBuyBar reads
"Tick Twister / O'Tom Tick Twister removal tool"; the card reads "Tick Twister / O'Tom Tick
Twister"), and the discrepancy runs in the reader's favour — 3 hooks for $9.99 against an
expectation of 2 for $5–$10, with the "different sizes" claim satisfied. **Editorial
follow-up for a human: update that Cost bullet to "3-pack with different sizes".** Do not
let a future auditor read this row as licence to pin count-mismatched SKUs generally.

### mosquito-magnet-canada → B07QJY2NL1

| Check | Result |
|---|---|
| ASIN resolves | Yes — `ASIN : B07QJY2NL1` |
| Title | "Mosquito Magnet MM4202B Patriot Plus Mosquito and Flying Insect Trap and Killer - Protects Up to 1 Acre" |
| Brand / Manufacturer | MOSQUITO MAGNET / Mosquito Magnet, **LANCASTER, PA** |
| Model | **MM4202B** — the Patriot Plus, matching the article's model-by-name recommendation |
| Seller | **Shipper / Seller: Amazon.ca — first-party.** Cleanest pin in the batch; no 3P markup question arises |
| Stock / price | "Usually ships within 3 to 5 days", FREE delivery Sep 13–21, **$416.00** |
| Price ↔ article parity | Article states Patriot Plus runs **$399–$549** in Canada; $416 sits inside that band |
| Coverage claim parity | Article card says "Treats up to 1 acre"; listing title and bullet both say "protects up to 1 acre" |
| Mechanism parity | Bullets confirm propane-powered **CounterFlow** (heat + moisture lure, vacuum capture) and the 50-ft cord — matches the card's "propane CO₂ engine" and the page's corded-Patriot framing |
| Editorial stance | Article's own Best Overall (score 8.6); rule 7/8 satisfied |

**Watch item, not disqualifying:** the delivery window is ~11–19 days out and availability
reads "Usually ships within 3 to 5 days" rather than a flat "In Stock". It is Amazon.ca's
own inventory on a bulky seasonal item at the tail of the season, not a stockout and not a
reseller. Worth re-checking at the May re-stock.

### Constraint audit (repo)
- Diff on the three pages is **6 added lines and 3 modified lines, 0 removed** — one
  `asin` prop per hero surface, nothing else.
- `search=` preserved verbatim on all six pinned link points; `amazonUrl()` gives `asin`
  precedence, so `search=` remains the source-level fallback.
- No title, meta description, H1, Quick Answer, verdict, score, pro/con or prose change.
- No price, star rating, review count, best-seller rank, product image, or
  AggregateRating schema added to any page. (Prices and BSRs appear in this log only.)
- No shared files touched — `lib/`, `components/`, `app/sitemap.ts`, `app/blog/page.tsx`
  all untouched. Log edit is append-only.
- Unrelated concurrent changes in the working tree (`data/asin-wave3.json`,
  `.playwright-mcp/` console log) left alone.
- `npx tsc --noEmit` exits 0.

### Left for a human
1. **B01LX43HWH price (see above).** The one row in this batch a stricter reading of rule 1
   would revert. Numbers are laid out so the call can be re-made without re-doing the research.
2. **The tick page's "2-pack" Cost bullet is stale** — O'TOM now ships a 3-hook blister.
   Prose fix, not a link fix.
3. **Quarterly re-check priorities:** B01LX43HWH (3P-only, no first-party offer — if a cheaper
   or Amazon-sold offer appears, repoint) and B07QJY2NL1 (seasonal bulky stock; confirm at the
   May re-stock). B0D4DTM25H is the most stable of the three.

---

## Wave 3 INDEPENDENT AUDIT — steamer / sprinkler / biting-fly (2026-09-02)

Audited the 1 pin and 2 skips from the wave-3 batch. **Verdict: pin UPHELD, both skips
CORRECT, zero reverts.** `npx tsc --noEmit` exits 0. `git diff` on the three assigned
files shows exactly two added lines, both `asin=`, with `search=` preserved verbatim.
No shared file (`lib/`, `components/`, `app/sitemap.ts`, `app/blog/page.tsx`) touched.

| slug | ASIN | verdict | fields verified live on amazon.ca |
|---|---|---|---|
| motion-activated-sprinkler-canada | B009F1R0GC | **PIN UPHELD** | `input#ASIN` = B009F1R0GC. Title "Orbit 62100 Yard Motion Activated Sprinkler". `Brand: Orbit`, `Manufacturer: Orbit`. **Item model number 62100 / Model Number 62100 / MPN 62100Z**. Variant selector resolves to **Size: Yard Enforcer** (not Garden Enforcer). `Number of Packs: 1`, `Number of Items: 1`, `Unit Count: 1` — the single unit the article names. **In Stock.** Buy box primary row = **"Buy New $136.68 · Shipper / Seller Amazon.ca"** — first-party, no 3P markup. 3-yr warranty, #11 in Lawn & Garden Sprinklers, 3.7★ (10,811). Bullets corroborate every load-bearing article claim: "day only, night only, or 24 hour protection", "120-Degree sensor", "35-Feet adjustable impact sprinkler", "over 7,500 activation cycles", "2 cups of water per activation", "learns the difference between trees and animals". Not in `LEVANTA_LINKS` (map is empty) so `amazonUrl` emits `/dp/B009F1R0GC?tag=…`. Both pinned surfaces (StickyBuyBar, featured AwardCard) confirmed to forward `asin` through BuyLink → AmazonLink → `amazonUrl`, so neither pin is a silent no-op. |
| best-bed-bug-steamer-canada | — | **SKIP CORRECT** (reasoning corrected) | Verified B004XVM19A live: the MR-100 Primo **does have an amazon.ca listing** under "Visit the Vapamore Store", but it reads **"Currently unavailable. We don't know when or if this item will be back in stock."** Rule 1 requires in-stock, so the skip stands. See correction note below. |
| deer-flies-horse-flies-ontario | — | **SKIP CORRECT** | Independently re-ran `bug ball deer fly trap` (121 results). No blue coroplast sticky sphere on amazon.ca. Pulled the single plausible candidate B0G35FFRJT and confirmed it fails rule 1 on four counts: **Brand "Mysora"** (generic, article names no brand), **18" inflatable PVC** not coroplast, **BLACK** ball (the card specifies *blue*), **"glue not included"** (the card says "coated in sticky glue" — it arrives non-functional), and **Shipper/Seller "BMULS"** — third-party, not Amazon.ca. Pinning it would have been a rule-1 and rule-2 violation. |

### Methodology trap worth recording for future waves

`#merchant-info` is **not** a safe first-party test on an accordion buy box. On
B009F1R0GC it returns *"Sold by Warehouse Deals and Fulfilled by Amazon"* — which is
the **second** accordion row (a Used – Very Good offer at $125.58), not the buy box.
The primary row is new stock sold by Amazon.ca. A naive `#merchant-info` read would
have produced a false "third-party markup" finding and reverted a good pin. Read
`#desktop_buybox` in full and confirm which row carries the `#availability` price.

### Correction to the wave-3 report

1. **The steamer finding was over-claimed on two counts.** The report states the MR-100
   "IS NOT SOLD ON AMAZON.CA AT ALL" and that the brand query returns "zero steamer
   machines". The listing exists (B004XVM19A) and is *currently unavailable* — a
   materially different fact, because an unavailable listing can return to stock and
   become pinnable, whereas "not carried" would not. It was also **not** a new discovery:
   line 205 of this file already recorded `best-bed-bug-steamer-canada` as skipped for
   "Primary (Vapamore MR-100 Primo, B004XVM19A) is Currently unavailable on .ca" in an
   earlier wave. The report bills it as "the most valuable finding in this batch".
   The *decision* is right and the revenue leak is real; the framing is not.
2. **The battery copy error is far broader than the reported "three places"** — see below.

### Left for a human

1. **`motion-activated-sprinkler-canada` battery spec — ~11 occurrences, not 3, and it
   ships in structured data.** Amazon's bullet reads "get over 7,500 activation cycles on
   just **4 AA alkaline batteries**"; the detail field reads "Batteries: 4 AA batteries
   required." The article kept the 7,500 number from that sentence and changed the battery
   to 9V at lines 111, 115, 137, 142, 180, 183, 220, 245, 252, 298 — **and at lines 24 and
   39–40, which are FAQ answers rendered into FAQPage schema**, so the wrong spec is being
   served to Google as structured data.
   Worse, the article uses the battery as a *differentiator*: line 40 says budget models
   "use 4 AA batteries with shorter life" and the line-259 comparison row contrasts budget
   "AA batteries" against the Orbit's "9V". The Orbit itself takes 4 AA, so that
   comparison is backwards. Product identity is not in doubt (model 62100 in three fields),
   so the pin stands — this is a copy edit, untouched here under rule 4.
2. **Commit hygiene.** The pin was committed inside `ae45b5e`, whose message is entirely
   about the Levanta application queue and never mentions an ASIN pin. That commit also
   swept in `best-mosquito-trap-canada` and `best-spider-spray-canada` page edits from a
   different wave. The pin cannot be reverted independently without a partial revert.
3. **A Used – Very Good offer ($125.58, Warehouse Deals) sits directly below the new buy
   box on B009F1R0GC.** Not disqualifying and not a 3P markup, but readers who expand the
   buy box may land on a used unit. Worth knowing if returns complaints ever surface.

---

## INDEPENDENT AUDIT — black flies / no-see-ums / DynaTrap wave-3 batch (2026-09-02)

Auditor pass over the batch above. **All three SKIPs upheld. Nothing to remove — the
batch added zero `asin=` props, so there is no pin to audit for correctness.** One factual
error found in the skip *reasoning* (not the outcome), and one rule the batch missed that
makes its biggest skip more permanent than it realised.

### Mechanical checks — all pass

| Check | Result |
|---|---|
| `git diff` on the three page files | **0 lines.** Byte-identical to HEAD |
| `asin=` props added to the three pages | **0** — nothing to verify or remove |
| `search=` props preserved | Yes, trivially — no link was touched on any of the three |
| Title / meta / H1 / Quick Answer / verdict / score / prose | Unmodified |
| Prices, ratings, review counts, BSR, images, AggregateRating schema | None added to any page |
| Shared files (`lib/`, `components/`, `app/sitemap.ts`, `app/blog/page.tsx`) | Untouched |
| Log edit append-only | Yes — 286 insertions, **0 deletions** |
| `npx tsc --noEmit` | **Exit 0** |

### Skip decisions — re-verified live on amazon.ca

**1. `dynatrap-canada-review` — SKIP CONFIRMED, and it is permanent.**
Re-ran the searches independently. `dynatrap dt3050` returns 7 results, **not one a trap**:
DynaTrap 21050 AtraktaGlo bulb ($17.99), a 43050 replacement bulb ($9.99), 24-pack sticky
cards ($32.86), two more bulb multipacks, surrounded by sponsored PALONE zapper rackets and
Coremaster glue rolls. `dynatrap insect trap` in Patio/Lawn/Garden — 68 cards scanned, every
DynaTrap-branded hit enumerated — confirms the trap catalogue on .ca is exactly two units:
**B0DH5ZLK26** (1/2-acre LED) and **B0GND1CY8C** (1/4-acre portable). No DT3050, no DT2030, no
DT1050, no 1-acre model. Everything else is bulbs and glue cards. The batch's finding
reproduces exactly.

**The batch missed a second, independent ground: rule 7.** This page's editorial verdict is
not merely lukewarm, it is a recommendation against the product. The Honest Verdict reads
"If you're shopping for mosquito control specifically, **skip DynaTrap**"; the Quick Answer
says "As a mosquito solution, a DynaTrap is not worth it for most Canadian backyards"; the
hero scores 7.0 with a con reading "Still a UV trap: no CO2". Under rule 7 no DynaTrap may be
pinned here **even if Amazon.ca listed the DT3050 tomorrow** — and the alternatives the
article actually recommends (barrier spray, a CO2/propane trap) are not DynaTraps, so there is
no in-article alternative to pin either. This matters operationally: the batch's own
"re-check quarterly" advice for Combat should **not** be applied to this page. It is
permanently unpinnable, not supply-blocked.

**2. `black-flies-ontario-when-they-come-out` — SKIP UPHELD, but this is the batch's one
genuinely debatable call.**
Verified the hero is class-named: `TopPick name="Picaridin (Icaridin) Insect Repellent"` and
`StickyBuyBar name="Picaridin (icaridin) insect repellent"`, with no brand anywhere on the
page (the only brand token is `sawyer` inside a secondary inline permethrin BuyLink — correctly
left alone under rule 2). Search health confirmed: `picaridin insect repellent canada` returns
**B0BYFF3S3V Natrapel Icaridin 100 mL at #1** and the 170 g variant at #2.

Verified the batch's sharpest claim and it holds: **B0BYFF3S3V's listing never states its
concentration.** Pulled every `%` token on the product page — the sole "20%" is a *discount
badge on an unrelated sponsored wristband*, and the detail table carries only Item Volume /
Number of Items / Unit Count / Size. Nothing evidences the card's explicit "20% picaridin"
claim. Commercially the listing is otherwise clean: Brand Natrapel, In Stock, **Shipper/Seller
Amazon.ca**, $11.53, no third-party markup.

*The counter-argument, recorded for a human:* the search is healthy at the top but not clean
below it — positions 3, 4, 9 and 11 are **Ben's 30% DEET** and **OFF! Botanicals eucalyptus**,
i.e. the wrong active entirely for a card whose whole thesis is picaridin-over-DEET. A reader
who does not click the first result can land on the product the page's sister article argues
against. That is a real argument for pinning. It is outweighed here — rule 4 forbids renaming
the class card, and B0BYFF3S3V cannot evidence the "20%" the card claims — but if the
editorial ever names a brand in this card, this page becomes pinnable immediately and should
be revisited.

**3. `no-see-ums-biting-midges-ontario` — SKIP UPHELD, but the batch's stated reason contains
a factual error. Correct the reasoning before it is reused.**

Search breakage confirmed and it is as bad as reported: `no see um mesh screen replacement`
returns **B0DR8DG3WC ($19.99), B06XXXM74W ($16.99), B0DT5WXT8S ($71.99), B0GVM8N3GF ($25.99)** in
the top four — all ordinary fiberglass window screen, the exact 1.1-1.5 mm product the article
says a 1 mm midge flies straight through. Correct 20x20 mesh first appears at organic #5.

> **CORRECTION — the batch wrote "every SKU in the family has zero ratings". That is false.**
> **B0CSFJP8J4** (6'x25') shows **4.2 stars / 84 ratings**, and **B0CSFKHTZZ** (4'x25') shows the
> same **4.2 / 84** — a shared variant-family rating pool, not an unrated listing. Any future
> wave re-reading this log would be skipping on a premise that does not hold.

The skip is nonetheless correct, on the two grounds that *do* survive checking:

- **The buy box is third-party and unstable, not brand-direct.** B0CSFJP8J4 is Shipper/Seller
  **Gelmonk**; B0CSFKHTZZ and B0CSFHZFDR are Shipper/Seller **ShoppingCentre\***. Different
  unrelated resellers hold different sizes of the same brand's matrix, and none is PPS itself.
- **Price inversion re-confirmed live**, which is the decisive markup signal: **B0CSFHZFDR
  (5'x25', 125 sq ft) is $141.34 while B0CSFJP8J4 (6'x25', 150 sq ft) is $139.12** — 25 sq ft
  *less* material for $2.22 *more*. Coupled with **"Only 3 left in stock"** on the best-value SKU
  and 3-to-5-day handling on the others, a pin here would likely break within weeks.

The brand-direct alternative was also re-checked and the batch is right to reject it:
**B008TK7KXI Skeeta No-see-um Netting 54" x 10 yd** is commercially spotless — Brand Skeeta,
**Shipper/Seller Skeeta Inc.**, In Stock, $44.90, 4.0 stars (24) — but its `#feature-bullets`
block is genuinely **empty**, and scanning the full page for `20x20` / `mesh count` / `0.6 mm`
returns only the words "no-see-um" and nothing else. It cannot evidence the card's load-bearing
"20x20, ~0.6 mm" spec, and it is soft netting sold by the yard rather than splineable screening,
against a card whose con reads "Requires rescreening the frames yourself". Rule-1 failure on
model match. Correctly skipped.

### Left for a human

1. **`dynatrap-canada-review`'s StickyBuyBar is actively harmful and no link fix can repair it.**
   The bar reads "DynaTrap DT3050 (1 acre + attractant fan)" and lands the reader on $9.99
   replacement bulbs and sticky cards. The batch flagged this correctly. Adding the rule-7
   finding above: this needs an **editorial** decision, and re-pointing the hero at the
   DT1130-CA is *not* available as a shortcut — rule 7 bars pinning any DynaTrap on a page
   that tells readers to skip DynaTrap. The honest options are to leave it as an
   authority/traffic page with the buy bar removed, or to re-cut the hero toward the barrier
   spray / CO2 trap the article actually recommends.
2. **Correct the "zero ratings" line in the wave-3 no-see-ums entry** so the next wave does not
   inherit a wrong premise. The real blockers are the 3P buy box, the confirmed price
   inversion, and 3-unit stock.
3. **`no-see-ums` remains one editorial decision from pinnable**, but .ca supply is poor and the
   supply-side caution in the batch entry stands: B0CSFJB589 (4'x10') is the cheapest sticker
   price at $101.79 and the worst value in the matrix at $2.54/sq ft.
4. **Out of scope, flagged for whoever owns it:** a parallel wave-3 agent added (and has since
   committed) `asin="B009F1R0GC"` on `app/blog/motion-activated-sprinkler-canada/page.tsx`,
   which is **not part of this batch**. Spot-checked as a courtesy and it
   looks sound — B009F1R0GC resolves to "Orbit 62100 Yard Motion Activated Sprinkler", brand
   Orbit, In Stock, Shipper/Seller Amazon.ca, $136.68, and Orbit's Yard Enforcer is model
   62100 — but it is not this auditor's to sign off, and it should not be mistaken for output
   of the black-flies / no-see-ums / DynaTrap batch.

---

## Independent audit — rat trap / Thermacell E90 / fruit fly batch (2026-09-02)

Auditor pass over `best-rat-trap-canada`, `thermacell-e90-canada-review`,
`best-fruit-fly-trap-canada`. **Verdict: all three skips UPHELD. Nothing removed, nothing
reversed.** The batch pinned zero ASINs, so the serious failure mode this audit hunts — a
pin that should have been a skip — did not occur. No missed pin found either.

### Mechanical checks

| Check | Result |
|---|---|
| `asin=` props in the three pages | **0 / 0 / 0** — `grep -n asin` returns nothing in any of the three |
| Files vs HEAD | `git diff --exit-code` on all three returns **exit 0 — byte-identical to HEAD** |
| Hero `search=` preserved | Yes — `victor rat trap`, `thermacell e90 rechargeable`, `terro fruit fly trap` all intact on StickyBuyBar, TopPick and featured cards |
| Titles / meta / H1 / Quick Answer / verdicts / scores / prose | Untouched (no file diff exists at all) |
| Shared files (`lib/`, `components/`, `app/sitemap.ts`, `app/blog/page.tsx`, `src/`) | **Clean — none modified** |
| `npx tsc --noEmit` | **Exit 0** |
| `seo-audit/asin-pilot.md` | Append-only — `git diff --numstat` = **391 added, 0 removed** |

### Live re-verification on amazon.ca (independent session, 2026-09-02)

- **best-fruit-fly-trap-canada — absence CONFIRMED on three independent lines.** (1) The
  page's own live `search=` prop (`terro fruit fly trap`) returns **60 cards with exactly 4
  TERRO SKUs, none a fruit fly trap**: B07F97SSGZ (T510 Fly Magnet sticky **fly paper**),
  B014H8NZ7U (T300CAN Liquid **Ant** Bait), B07Q697VZK (T3206SR **Spider & Insect** Trap),
  B07G1B58VW (T3206CAN 4-Pack **Spider & Insect** Trap). Note B07G1B58VW is a *fifth* TERRO
  SKU not in Wave 3's catalogue list (it recorded B08C225K7R flea-trap refills instead) —
  it is another spider trap, so the conclusion is unchanged. (2) `terro T2502 fruit fly
  trap` returns **30 cards, zero TERRO**. (3) The canonical US ASIN for the TERRO fruit fly
  trap, **B00OERUWSY, returns HTTP 404 on amazon.ca** — it does not exist in the Canadian
  catalogue. Skip is correct; no generic red-apple substitute is valid (rule 2).
- **best-rat-trap-canada — absence CONFIRMED, and the near-miss call was right.** `victor
  rat trap` returns 60 cards / **21 Victor SKUs**; filtering for a *metal pedal* + *rat* +
  not-mouse title yields **zero**. Every "Metal Pedal" hit is a **mouse** trap (B0CQ8RSTC9
  M150-12). Victor's live .ca rat lineup reproduces Wave 3's list exactly. I opened
  **B0CNH8VZYX** (the only plausible substitute) and confirm the rule-2 refusal from the
  product page itself: title "Victor **Wide** Pedal Rat Trap - M205TRI", lead bullet
  "**Expanded trigger for the highest catch rates**" — which directly contradicts the
  article's H3 claim that the pedal is "**stiff enough not to false-trigger**". In Stock,
  Brand Victor, Material Wood, $5.29, no markup — clean on every axis *except* being the
  wrong trigger design. Correctly skipped. B00004RAMU decoy confirmed: resolves to the
  M310S Tin Cat Live **Mouse** Trap.
- **thermacell-e90-canada-review — skip UPHELD, and the evidence is now STRONGER than Wave
  3 recorded.** Identity re-confirmed on B0C9MNZPQ9 (title "Thermacell Rechargeable E90…",
  byline "Visit the Thermacell Store", In Stock, $82.84, 4.2★/30, Non-returnable / hazmat).
  Two new findings from the full offer-listing page that sharpen the call:
  1. **The buy box rotated within hours.** Wave 3 recorded the buy box held by *Bookstore
     North America*; on my check the same listing's buy box is held by **Inspire CMC Inc.**
     (4/5, 76% positive). **Pinning this ASIN would not pin the seller** — the reader gets
     whichever reseller holds the box at click time.
  2. **All 14 offers are third-party; there is no Amazon.ca or Thermacell first-party offer
     at any price** (`/Sold by Amazon\.ca/` matches nowhere in the offer DOM). Seller
     quality across the box-eligible offers ranges from Crestiva 83% positive down to
     **TRUE NORTH STORE at 48% positive** (3/5), with WoodStock 63%, Erisan 60%, DURABASE
     59%. A dozen no-name importers clustered at an identical $82.84 is the classic
     grey-import pattern.
  Minor correction to Wave 3's row: "$82.84 is the floor of all 14 offers" is true only on
  a *landed* basis — Crestiva lists $52.84 + $30 delivery and TrueEssence $74.97 + $9. This
  does not change the conclusion. Rule-2 refusal to substitute an E-ZoneGuard is verified
  correct: the EX90 is **already the article's own secondary "Best for Camping & Cottage"
  card** (line ~211), so promoting it to hero would be an editorial rewrite, not a pin.

### Auditor's own notes for a human

1. **I agree with Wave 3 that the E90 is Diogo's call, but I lean harder toward "do not
   pin".** The buy-box rotation is the deciding fact: a pin buys attribution but hands the
   reader a lottery across resellers rated 48%–83% positive on a **non-returnable $83
   device**. That is a poor trade against a site whose 10.4% conversion rate rests on
   honesty. If it is ever pinned, it should be re-checked on a schedule, because the seller
   behind the ASIN changes on its own.
2. **The fruit fly page is the batch's real money leak and needs an editor, not a linker.**
   I independently reproduced it: the hero carries a 9.0 "Best Overall" verdict on a named
   TERRO product that **does not exist on amazon.ca**, and the live search link returns
   sponsored competitors plus TERRO fly paper and ant bait. Every reader who trusts that
   verdict lands on someone else's product. Rules 2 and 4 correctly block this batch from
   fixing it. Recommend prioritising the editorial re-anchor.
3. **No missed pins.** I actively tried to falsify each skip (extra model-number queries, a
   direct US-ASIN lookup, and a product-page read of the one viable substitute) and found
   no case where a valid pin was available and passed over.

---

## Independent audit — best-mosquito-trap-canada / best-rodent-repellent-for-cars-canada / best-spider-spray-canada (2026-09-02)

Second-agent verification of the batch above. **Both pins re-verified live on amazon.ca and
left in place; nothing removed. The skip is correct.** Every ASIN was opened independently
rather than taken from the batch report.

| Slug | ASIN | Audit verdict | Fields re-verified independently |
|---|---|---|---|
| best-mosquito-trap-canada | **B07QJY2NL1** | **PIN UPHELD** | Opened live. Title "Mosquito Magnet **MM4202B Patriot Plus** Mosquito and Flying Insect Trap and Killer - Protects Up to 1 Acre"; brand byline **MOSQUITO MAGNET**. Model **MM4202B Patriot Plus** is exactly what the page names in the StickyBuyBar, featured card and FAQs. **Shipper/Seller: Amazon.ca — first-party**, so the third-party-markup test cannot fail. **$416.00**, inside the page's own hard-coded **$399–$549**. Orderable: "Usually ships within 3 to 5 days", Add-to-cart present. Bullets independently confirm every mechanism claim the card makes — propane-powered CounterFlow, heat + moisture lure, up to 1 acre, "Propane tank is not included" (matches the card's existing propane con). Strongest result in the batch: it genuinely retires two prior skips whose recorded revisit condition was "revisit if a Patriot Plus listing appears" |
| best-spider-spray-canada | **B0CXV32GKD** | **PIN UPHELD** (pressure-tested) | Opened live. Brand **Doktor Doom**, title "Pro Max Spider Killer Plus, 1L", **In Stock**, **Ships from Amazon** (FBA), sold by Spray Fresh Ltd, $31.15. **P.C.P. Act Registration 32698** — which satisfies the page's own central buying test ("confirm it carries a PCP registration number"). Bullets: 0.35% permethrin, "long lasting **residual** kill & control of **Spiders**" — it is both a residual and spider-specific. See the identity and markup re-tests below |
| best-rodent-repellent-for-cars-canada | — | **SKIP CORRECT** | File is byte-identical to HEAD (`git diff HEAD` empty, zero `asin` props). Hero "Capsaicin Rodent Deterrent Tape (Honda-Style)" names a mechanism; the card's `why` describes the mechanism only; no brand, model, size or price anywhere on the page, so rule 1 is unsatisfiable. Independently confirmed there was nothing clean to pin — see the new finding below |

### The two claims I did not take on trust

**1. Is the spider hero really "line-level"?** This was the batch's one judgement call and the
place a wrong pin would hide, so I tried to falsify it. Evidence *against* the agent: the
sibling `/blog/doktor-doom-canada-guide` treats **"Pro Max"** and **"Residual Insecticide
Spray"** as two *separate rows* with different jobs ("Pro Max on baseboards, bed legs and
furniture edges" vs "Residual Insecticide Spray, on the foundation band, at dusk"), which
makes "Residual Insecticide Spray" look like a real distinct SKU name. That would make the
pin a rule-2 near-miss substitution. But on **this** page the prose is unambiguously
line-level and settles it the other way: *"Brands like Doktor Doom, Konk, and Knock Down each
sell **multiple formulations under one name**"*, *"**The line includes** residual formulations
explicitly aimed at crawling insects and spiders"*, *"the brand sells **several
formulations**"* — and the page states no model, size, format or price. I also confirmed
independently that **no SKU named "Doktor Doom Residual Insecticide Spray" exists on
amazon.ca** (40-result search; the Doktor Doom items present are the horse residual, Pro Max
Spider 1L and 3.8L, the rat-repellent barrier, the dog tick/flea spray and the thrip killer).
So the pin *fulfils* the recommendation rather than substituting for it. **Upheld** — but the
cross-page naming inconsistency is real and item 3 in the batch's "left for a human" is the
right fix.

**2. Is $31.15 a reseller markup?** The batch reported 1.42x against a single in-stock
comparator, which is a thin basis. I substantiated it from the listing itself instead: the ASIN
carries **Amazon's Choice**, **300+ bought in the past month**, 4.4 stars over 220 ratings, is
**FBA (Ships from Amazon)**, and has a coherent sibling **3.8L at $51.99** from the same seller
with 200+ bought/month. A listing transacting at that volume with an Amazon's Choice badge is
the market price, not a 2–3x gouge. **Under the bar.**

### Verified the misrouting claim (reproduced)
The batch's strongest revenue argument checked out exactly as reported. Searching
`doktor doom residual insecticide spray` on .ca returns three **competitor-brand** sponsored
listings above the fold — OnGuard P-22-RTU $49.99, ECOPEST Total Insect Killer $62.99, OnGuard
Pro-Perm $42.99 — and the first Doktor Doom organic result, carrying **Amazon's Choice**, is
**"Long Lasting Residual Insecticide for Horses"** ($36.88). A spider-page reader really was
being sent to a horse product under a competitor's ads.

### New finding the batch did not report
**The rodent page's fallback search is itself misrouting readers.** The skip is correct, but
`search="rodent deterrent tape capsaicin"` returns **5 results, all of them copper mesh rolls**
— zero capsaicin tape of any brand. So the hero link on that page sends a reader who came for
hot-pepper wiring tape to a completely different product class. This is an editorial /
search-term fix, not a pin (same shape as the `co2-mosquito-trap-canada` finding logged
above), and it is the one unaddressed reader-facing defect in this batch.

### Constraint audit (independently re-run)
- `git show ae45b5e -- <the three pages>` is **4 added `asin` props and nothing else** — one
  `-`/`+` pair per StickyBuyBar, one pure `+` per featured award object. No title, meta, H1,
  Quick Answer, verdict, score, pro/con or prose byte altered.
- **`search=` preserved verbatim** at all four edited call sites.
- **Hero-only (rule 2) holds:** exactly 2 `asin` props per pinned page, on the StickyBuyBar and
  the `featured: true` card. Quick Answer link, retailer-table links, inline body links and all
  secondary award cards remain search links.
- **No prices, ratings, review counts, BSR, images or AggregateRating** added to any page.
- **No shared files touched** — `lib/`, `components/`, `app/sitemap.ts`, `app/blog/page.tsx`
  all absent from the diff.
- **`npx tsc --noEmit` exits 0.**
- **Plumbing verified end-to-end** (the pin is live, not silently dead): page → `AwardRow`
  (`{...a}` spread) → `AwardCard` (`Award` type declares `asin?: string`, passes it to
  `BuyLink`) → `AmazonLink` → `amazonUrl()` → `https://www.amazon.ca/dp/<ASIN>?tag=…`. Neither
  ASIN has a `lib/levanta-links.ts` entry, so `levantaFor()` returns null and both emit
  standard amazon.ca `/dp/` links.

### Endorsed for follow-up
- **Re-queue `mosquito-magnet-canada`.** Its recorded skip reason ("Patriot Plus absent from
  .ca") is now void; B07QJY2NL1 is live and first-party, and the Patriot Plus is that page's
  hero in the StickyBuyBar, Quick Answer, featured card, retailer table and six FAQs.
- The batch's own items 1 (the `$399–$549` range vs a moving first-party price) and 3 (rename
  the spider card to the actual can, on this page and the Doktor Doom guide together) are both
  sound and worth doing.
- **Commit hygiene:** this batch is not isolated — commit `ae45b5e` ("levanta: ranked
  application queue") swept both page edits in via a broad `git commit -a` from a concurrent
  agent. Content verified intact in HEAD, but per-batch commits are not currently guaranteed
  while agents run in parallel.

## INDEPENDENT AUDIT — Wave 4 wasp-trap / tick-tool / CO₂-trap batch (2026-09-02)

Audited the three pins logged at "Wave 4 — wasp-trap / tick-tool / CO₂-trap batch" (line ~1859).
Every ASIN re-opened on amazon.ca from scratch; the reporting agent's reasoning was treated as a
claim to test, not as evidence. **Result: 2 pins confirmed, 1 pin REVERTED.**

### REVERTED — `best-yellow-jacket-trap-canada` · B01LX43HWH

`asin` removed from both hero surfaces (StickyBuyBar + featured AwardCard); `search="rescue
reusable yellowjacket trap"` untouched, so the page is now byte-identical to HEAD.

The prior agent re-derived the page's East/West thesis and concluded the reusable trap has a
single North-America-wide attractant, so the pin "cannot land a reader on a '-W' SKU." **Half of
that is right and the decisive half is wrong.** RESCUE!'s own explainer
(`rescue.com/latest-buzz/outdoor-pests/disposable-yellowjacket-trap-east-or-west/`) states:

- The Reusable Yellowjacket Trap is "a refillable option **sold nationwide**" — correct, there is
  no `-W` reusable SKU, and no East reusable SKU either.
- But: "**Although its attractant is similar to the lure used in the Western Formula Disposable
  Trap**, the Reusable and Disposable traps do not deliver their attractants in exactly the same
  way." And: "The Reusable Trap can work in both eastern and western locations, although
  performance may vary based on the species active in your area."

So the reusable trap's chemistry is the **Western-type lure**. The page sells it as the opposite:
the product name on both hero surfaces reads "RESCUE! Reusable Yellowjacket Trap **(standard/East
attractant)**", the Quick Answer says "with the standard (East-formula) attractant", and the award
card's first pro is "**Attractant tuned to Ontario yellowjacket species**". Pinning hard-commits an
Ontario reader to the exact chemistry the H1 promises to save them from, while the page tells them
it is the East version — a claim the reader cannot check once the link bypasses the listing grid.
That is the "near-miss substitute is worse than a search link" rule, hit squarely. The search link
at least leaves the article's own "check the label before you buy" instruction operative.

Verified but NOT the reason for the revert (recorded so this is not re-litigated):

- Identity is otherwise genuine — Brand RESCUE!, Manufacturer RESCUE, model **YJTR**, no `-W`.
- Amazon corroborates that regional formulas are a disposable-only distinction: every regional SKU
  on the search page is a `YJTD-*` disposable (YJTD-E East, YJTD-W West, Mountain & Pacific), and
  the refill cartridge is sold in one un-regionalised variant "for RESCUE! Reusable Yellowjacket
  Traps".
- The prior agent's harm claim checks out: the fallback search does surface "Rescue YJTD-W …
  West of the Rockies (2 PACK)", 1K+ bought/month. But the same search also surfaces the genuine
  East formula ("Disposable Rescue Yellowjacket Trap **YJTD-E for East of The Rockies**, Pack of 3,
  $33.11, 400+ bought/month"), which is this page's own *Best Disposable* pick — so the reader is
  not left without a correct-chemistry option.
- **Price flag resolved in the pin's favour, and it did not save the pin.** $39.99, all 3 New
  offers at $39.99, Ships from Amazon / sold by Online Solutions Store, **no first-party offer**.
  Not an ASIN-level gouge: the 3-pack of the same trap is Amazon's Choice at $107.90 = **$35.97 /
  unit**, only ~11% under the single, and the brand's W.H.Y. trap sits at $39.50 on the same
  marketplace. That is a Canadian marketplace premium, not a reseller holding a buy box at 2–3x.
  The revert is on product identity, not price.

### CONFIRMED — `tick-removal-tool-guide` · B0D4DTM25H

Re-verified independently: Brand Tick Twister; **Manufacturer H3D / ZA Sous la Combe, 01590
LAVANCIA (France), info@tick-twister.com, Country of origin France**, model **BLISTPLA3-VA** — the
genuine O'TOM maker, not a keyword squatter. **In Stock**, Ships from Amazon, sold by Pet Science
Ltd., **$9.99** (inside the page's stated $5–$10), Amazon's Choice, BSR #16 in Dog Tick Remover
Tools. Listing bullets carry the page's mechanism claims verbatim ("Doesn't leave the tick's
rostrum in the skin", "Doesn't squeeze the tick's abdomen", "Removes ticks of any size").

The count mismatch the prior agent self-flagged is real but benign, and the listing itself explains
it: the description says each blister holds "a large one … a small one … and a micro one" and that
"**A new MICRO tick remover has been added**". The 2-pack became a 3-pack; the article's body line
is stale, the pin is not wrong. Neither hero surface states a count, price is inside the stated
band, and the discrepancy runs in the reader's favour. **Editorial follow-up for a human:**
`app/blog/tick-removal-tool-guide/page.tsx` line 210 — `<strong>Cost:</strong> $5–$10 (2-pack with
different sizes)` should read 3-pack. Not changed here (rule 4 forbids prose edits).

### CONFIRMED — `mosquito-magnet-canada` · B07QJY2NL1

The cleanest of the three, as reported. Title "Mosquito Magnet **MM4202B Patriot Plus** Mosquito
and Flying Insect Trap and Killer — Protects Up to 1 Acre"; Brand MOSQUITO MAGNET, Manufacturer
Mosquito Magnet, Lancaster PA. **Buy box "Shipper / Seller: Amazon.ca" — first-party**, so no
markup question arises. **$416.00**, inside the page's own stated $399–$549 band. Coverage parity
("protects up to 1 acre" vs the card's "Treats up to 1 acre") and mechanism parity (bullets confirm
propane CounterFlow heat+moisture lure, vacuum capture, 50-ft cord vs the page's "propane CO₂
engine" and corded-Patriot framing) both hold.

Availability watch item confirmed and downgraded to informational: "Usually ships within 3 to 5
days", FREE delivery Sep 13–21, Add-to-Cart live. Amazon's own handling time on a bulky seasonal
item at season's end — buyable, not a stockout. Re-confirm at the May re-stock.

### Constraint audit (independently re-run)

- **Working-tree diff on the three pages is now 2 pinned pages × (1 `-`/`+` StickyBuyBar pair + 1
  pure `+` award-card line) and nothing else.** `best-yellow-jacket-trap-canada/page.tsx` has an
  empty diff against HEAD after the revert.
- **`search=` preserved verbatim.** Mechanically checked: the ordered list of every `search="…"` /
  `search: '…'` value in each of the three files is byte-identical to `git show HEAD:<file>` (14 /
  13 / 17 occurrences respectively, zero drift).
- **Rule 2 (hero-only) holds** on both surviving pins — exactly 2 `asin` props per page, on the
  StickyBuyBar and the `featured: true` card. Quick Answer links, retailer-table links, inline body
  links and all secondary award cards remain search links.
- **No title, meta, H1, Quick Answer, verdict, score, pro/con or prose byte altered.**
- **No prices, ratings, review counts, BSR, images or AggregateRating** added to any page.
- **No shared files touched** — `lib/`, `components/`, `app/sitemap.ts`, `app/blog/page.tsx` absent
  from the diff.
- **`npx tsc --noEmit` exits 0** (re-run after the revert).
- **Plumbing re-verified:** `lib/levanta-links.ts` `LEVANTA_LINKS` is still an empty map, so
  `levantaFor()` returns null and both surviving pins emit standard tagged
  `https://www.amazon.ca/dp/<ASIN>?tag=…` links. `BuyLink` treats `asin` as the winner and `search`
  as the retained fallback, so removing an `asin` cleanly restores search behaviour.
- **Audit log integrity:** `git diff --numstat seo-audit/asin-pilot.md` showed 685 added / **0
  removed** before this section — the prior agent's append-only claim holds, and concurrent agents'
  sections are intact.

### Left for a human

1. **The yellow-jacket page has an editorial defect, not just a pin problem.** Its central thesis —
   that Ontario buyers need a "standard/East attractant" *reusable* trap — describes a product that
   does not exist, and RESCUE! says the reusable lure is Western-type. The H1, Quick Answer, FAQ 1,
   FAQ 2 and the Best Overall card all need rewriting before *any* pin on that page is safe. The
   honest version is probably: recommend the **YJTD-E disposable** (which genuinely is the East
   formula) as Best Overall for eastern Canada, and demote the reusable to a durability pick with
   the Western-lure caveat stated plainly. That rewrite is out of scope here (rule 4) and is worth
   more than the pin was.
2. `tick-removal-tool-guide` line 210: "2-pack" → "3-pack" (see above).

## Wave 4 — flea bomb / steam cleaner / tiki torches (verified 2026-09-02)

Batch of 3 pages. 1 pinned (2 link points), 2 skipped. Every check run live against
amazon.ca on 2026-09-02, not inherited from the earlier waves' notes.

| Page | Product | ASIN | Verified on 2026-09-02 |
|---|---|---|---|
| best-steam-cleaner-for-pest-control-canada | Dupray Neat Steam Cleaner — Essential Pack (17-piece) | B07C44DM6D | In Stock, $249.99, **Shipper/Seller "Dupray Canada"** (the manufacturer's own storefront — byline "Visit the Dupray Store", so not a 3P markup). Brand Dupray, model name "Neat Steam Cleaner", 1500 W, 54 fl oz tank, 4.4★ (22,998), 500+ bought past month. Third page to carry this pin, alongside `dupray-steamer-review-canada` and `dupray-vs-mcculloch-steamer-canada` |

Size-variant note: the listing has two sizes — 17-piece Neat ($249.99, where `/dp/` lands)
and 41-piece "Neat Steam Cleaner Pack Pro" ($349.98). The article names no piece count for
the hero, so the 17-piece pin contradicts nothing. Its award card asks for "the concentrator
and detail-brush accessories the job needs"; the listing's Included Components field reads
"Brass Brush, Nylon Brushes, Tubes extension, Bonnets, pads, tools", which covers the
detail brushes.

**Caveat the next checker should not have to rediscover — boiler temperature.** The page's
Quick Answer describes the winning category as "a heavy-duty dry-vapour unit whose boiler
reaches roughly **150–170°C**" and then names the Dupray Neat as the reference machine. The
Amazon listing's own bullet says the Neat "**Heats up to 275°F/135°C**" — i.e. below the
band the page states. This is a pre-existing editorial claim on the page (it predates every
ASIN wave and is identical on the two sibling Dupray pages), and pinning does not create or
worsen it: the `search=` link already resolved to this same machine. Nothing was changed,
per the no-prose rule. But if that 150–170°C figure is ever revisited editorially, this is
the listing that contradicts it — decide it as a content question, not an ASIN question.

### Skipped in this batch — search link kept

| Page | Reason |
|---|---|
| best-flea-bomb-canada | **CLASS-NAMED HERO — nothing to match.** Both hero link points are generic: StickyBuyBar is "Pet-hair vacuum with a beater bar and sealed filtration" and the featured award is "High-Suction Vacuum With a Beater Bar and Sealed Filtration" (`search="upright vacuum pet hair carpet sealed hepa"`). No brand or model is named for the vacuum anywhere on the page — grepped the full file for the usual vacuum brands (Dyson, Shark, Bissell, Hoover, Miele, Eureka, Kenmore, SEBO, Riccar) and got zero real hits. Same call as the picaridin/no-see-um-mesh class heroes. The #2 award, "Plug-In Light Flea Trap", is class-named too. The only branded products on the page are **Doktor Doom / Konk foggers**, and rule 7 blocks those twice over: they are not the hero, and the page's verdict on foggers is openly hostile ("Not recommended — read the conditions first", "the best flea bomb is no flea bomb"). Safer's DE appears only as a secondary in-body link, not a hero. Correct outcome: no pin |
| do-tiki-torches-repel-mosquitoes | **Same E90 listing problem that skipped `thermacell-e90-canada-review`, re-verified from scratch today and still true.** Hero on both link points (TopPick + StickyBuyBar) is the "Thermacell E90 (rechargeable patio zone)". A live `thermacell e90` search returns 43 results with **no E-ZoneGuard Patio 9-Hr listing**: the lineup is Patio 5.5-Hr $53.99, Patio+ 6.5-Hr $71.98, Adventure 9-Hr $74.97, E55 ~$71. The only E90-titled ASIN is **B0C9MNZPQ9** ($82.84, In Stock), and it fails rule 1 on two independent counts. (1) **Identity contradicts itself:** the title says "Rechargeable E90", but the listing's own Product description reads *"Thermacell **EX90** is easy to use... engineered specifically for the avid outdoors person and traveler... the **EX90** provides a 20-foot zone"*, with the EX90's 9-hr-per-charge spec. That is the rugged travel model, not the patio model — and this page's hero blurb sells "a real hands-off **patio** zone" for a deck. Judging identity on the body copy rather than the SKU string is exactly the yellow-jacket lesson. (2) ~~**Third-party markup:** buy box held by reseller "WoodStock Supplies" at $82.84 while the search page lists "More buying choices $52.84 (14 new offers)" — a ~57% premium.~~ **[AUDITOR CORRECTION 2026-09-02 — ground (2) does not hold; do not propagate it.]** The detail page's own "Other sellers on Amazon" panel reads **"New (14) from $82.84"**, i.e. $82.84 *is* the floor across all 14 offers, not a 57% premium over $52.84. The "$52.84" figure appears nowhere in a re-extraction of the search results and was most likely a misread of an adjacent row (the Patio 5.5-Hr sits at $53.99). The buy box **is** third-party (WoodStock Supplies, not Thermacell), which is worth noting, but it is **not marked up**. Ground (1), the E90/EX90 identity contradiction, was independently re-verified and stands on its own — **the skip is correct on identity alone.** Re-check only if a clean first-party "E-ZoneGuard Patio 9Hr" listing appears |

## Wave 3 — centipede / dog-repellent / bed-bug-powder batch (2026-09-02)

All three pages verified live on amazon.ca on 2026-09-02. **Result: 0 pinned, 3 skipped.**
No file in this batch was modified — all three still carry zero `asin` props and every
`search=` prop is byte-identical to HEAD. `npx tsc --noEmit` exits 0.

### Skipped — search link kept (3 pages)

| Page | Reason |
|---|---|
| how-to-get-rid-of-centipedes-canada | **Class-named hero — nothing to match.** StickyBuyBar is `name="Energy Star basement dehumidifier (50-pint class)"` and the featured "Best Overall" card is `Energy Star Basement Dehumidifier (50-Pint Class)`. Grepped the whole file for a manufacturer (Frigidaire, Midea, Hisense, Danby, hOmeLabs, Honeywell, Tosot, Colzer, Waykar, Vremi, GE): **zero brand names anywhere on the page.** The card's own con — "Compressor units struggle in cold crawl spaces — check the **low-temp rating**" — is an instruction to the reader to spec their own unit, and the `whichToBuy` block explicitly defers sizing to `/blog/best-dehumidifier-for-basement-canada`. Same call as `what-size-dehumidifier-do-i-need-canada` ("hero is deliberately generic — 50-pint default") and `best-upholstery-steam-cleaner-canada`. Note: a healthy 50-pint ASIN **does** exist in this repo (Midea Cube B0GL7Y575V, pinned on `best-large-capacity-dehumidifier-canada`), and it was deliberately **not** borrowed here — routing a category recommendation to one vendor is the exact failure mode the method forbids. Search link kept |
| mosquito-repellent-for-dogs-canada | **Product verifies, but the hero spans four separate weight-band ASINs with no on-page selector.** K9 Advantix II is genuinely live and healthy on .ca — e.g. **B07YWB2PG4** (Medium, 4.6–11 kg / 10–24 lbs, 4 doses): In Stock, $79.37, **Shipper/Seller Amazon.ca (first-party)**, byline "Visit the K9 Advantix Store", manufacturer **Elanco** (correct — Elanco holds the ex-Bayer Advantix line), country of origin Germany, model 90208390, BSR #2 in Dog Flea Drops, 4.5★/2,423. Price sits inside the article's stated "$55–$95 for a 4-pack". **So why skip:** the .ca listings are split by dog weight band (Small / Medium 10–24 lb / Large / XL over 55 lb) as *independent* listings, and the on-page twister offers **dose count only (2 / 4 / 6)** — verified on both B07YWB2PG4 and B0862TCMDW: neither variant picker exposes a weight band. The article names no band and makes weight-dosing the product's selling point ("a vet-recommended spot-on **dosed by weight**", pro: "Dosed by dog weight"), so any single pin hard-routes every reader to one dose of a **permethrin** spot-on with no way to correct it on the landing page. This is the `raccoon-proof-chimney-cap-canada` case ("size-dependent — a single-size ASIN risks wrong-size purchases"), **not** the `bed-bug-mattress-encasement-canada` case, which was pinnable precisely because the size picker was on the page. **Second, independent reason:** the revenue argument runs backwards here. The unpinned `k9 advantix ii dogs` search is effectively navigational — the top ~10 results are all genuine K9 Advantix II — and it ranks the **XL 6-dose B0862TCMDW at $130.82 first**. Pinning the Medium 4-dose would *lower* basket from $130.82 to $79.37, and pinning the XL to chase the $130.82 would be choosing a dose band for commission rather than for the reader (rule 8). Amazon is not mis-picking the product on this term, so there is no defect to fix. Search link kept |
| best-bed-bug-powder-canada | **CimeXa is not sold on amazon.ca.** Hero is unambiguous — StickyBuyBar `name="CimeXa silica gel insecticide dust"` and the featured "Best Overall" card `CimeXa Silica Gel Insecticide Dust` (score 9.2). Verified 2026-09-02 with three searches: `cimexa insecticide dust` → 54 results, **zero** CimeXa (top hits are ECOPEST / OnGuard permethrin jugs, Knock Down DE, Safer's, Raid); `CimeXa` → 23 results, **zero** CimeXa (scraped every `data-asin` — Knock Down, Doktor Doom, Raid, OnGuard, ECOGUARD, Aspectek, ultrasonic repellers); `Rockwell Labs silica gel dust` → the string "cimexa" does not appear anywhere in the page body, and results are moisture-absorbent desiccant beads (Dry & Dry, wisedry, Hydrosorbent), a different product class entirely. This independently reproduces the finding already logged against `crossfire-bed-bug-concentrate-review-canada` (same 23-result count, same zero). **The page already flags this itself** — the Best Overall card's first con reads "Confirm the Canadian-market version before buying" — so the hedge is correct and no substitution is appropriate. No near-miss pinned: the runner-up Doktor Doom DE card was deliberately **not** promoted into the hero, because the hero's whole thesis is *silica gel beats diatomaceous earth*, so pinning a DE product to a silica-gel card would invert the article's own comparison (and rule 2 restricts pins to the hero regardless). Search link kept. **Editorial flag for Diogo, not a link fix:** the Quick Answer states "The best bed-bug powder in Canada is a silica-gel dust like CimeXa" — a product Canadians cannot buy on Amazon.ca. Worth either re-pointing the hero at a Canada-stocked silica dust or stating plainly that CimeXa must be sourced outside Amazon |

## Wave 4 — fruit fly / silverfish / mouse-poop batch (2026-09-02)

Three pages assigned: `how-to-get-rid-of-fruit-flies-canada`, `how-to-get-rid-of-silverfish-canada`,
`what-does-mouse-poop-look-like-canada`. **Result: 1 pinned, 2 skipped.** One file touched,
two lines added, both additive `asin=` props with the `search=` prop preserved verbatim.

| Page | Action | ASIN | Verification |
|---|---|---|---|
| what-does-mouse-poop-look-like-canada | **PINNED** (StickyBuyBar + featured AwardCard) | **B0CQ8RSTC9** | Victor M150-12 Metal Pedal Sustainably Sourced FSC Wood Snap Mouse Trap — 12 Traps. Brand **Victor**, Manufacturer **Woodstream Corporation**, Item model number **M150-12**, Country of origin USA. **In Stock**, **Shipper/Seller: Amazon.ca** (no third-party markup), **$17.04**, 4.2★ / 3,896 ratings, **Amazon's Choice**, 100+ bought in past month, BSR #48 in Pest Control Traps. Category Patio, Lawn & Garden › Pest Control › Traps. Product description confirms the mechanism: "The original wood-based wire snap trap… Once a rodent triggers the metal pedal, the trap immediately snaps closed to kill the mouse." |
| how-to-get-rid-of-fruit-flies-canada | **SKIPPED** | — | TERRO sells no fruit fly trap on amazon.ca. See below. |
| how-to-get-rid-of-silverfish-canada | **SKIPPED** | — | Every card is class-named; no brand appears anywhere on the page. See below. |

### what-does-mouse-poop-look-like-canada — why the 12-pack is the right pin

- **The hero names a brand, not a model.** `StickyBuyBar name="Victor snap traps (what to buy
  once you've confirmed it)"` (line 114) and the featured `AwardCard name="Victor Snap Traps
  (Multi-Pack)"` (line 238). Brand = Victor, mechanism = snap trap, count = "Multi-Pack".
  The page's own file-header comment states the split explicitly — "best-mouse-trap-canada owns
  the trap comparison" — so this page deliberately does not pick a model, and pinning a specific
  Victor wooden snap-trap multi-pack instantiates the card rather than overriding it.
- **No count is stated in reader-facing copy.** Grepped the whole file for `4-pack` / `4 pack` /
  `pedal` / `expanded` / `wood` / `M325` / `dozen`: **zero hits in visible prose**. The only
  "4 pack" on the page lives inside the `search=` prop, which the reader never sees and which is
  preserved verbatim. So there is no quantity claim for a 12-pack to contradict — and the card's
  own body copy ("buy far more than feels reasonable… a dense line set all at once usually
  delivers its biggest catch on the first night") argues for the larger pack, not against it.
- **There is no Victor 4-pack, and no M325, on amazon.ca.** Two queries run:
  `victor mouse trap 4 pack` (82 results) and `victor m325 wood snap trap` (15 results). Victor's
  complete live mouse lineup across both: **B0CQ8RSTC9** (M150-12 Metal Pedal wood, 12 traps,
  $17.04), **M035-12** (Plastic Pedal Easy Set wood, 12 traps, $16.63, 4.0★/2K), M140SSR 2-Pack
  Quick-Kill ($44.32), M140B 2-Pack Quick-Kill ($10.98), M137B Quick-Set ($8.49), M335TRI
  Multi-Catch ($8.98), M337TRI Live Catch ($6.99), M310S Tin Cat ($27.96). **No M325 in either
  result set, and no Victor pack of four anything.**
- **Chose M150-12 over M035-12** on mechanical tiebreaks only, since this page's copy is silent on
  pedal type and both are Victor FSC-wood snap traps at ~$17 for 12: M150-12 is higher rated
  (4.2★/3,896 vs 4.0★/2,000), is **Amazon's Choice**, and is **shipped and sold by Amazon.ca**.
  Not an editorial change — both candidates are the exact product the card names.
- **Decoy avoided: B0HF3ZKDV9**, "Victor Metal Pedal Mouse Traps, 12-Pack" at **$27.99** — the same
  12 wooden traps at **64% more**, from a **Small Business** third-party seller, delivery
  **Sep 27 – Oct 23**. That is precisely the third-party-markup case rule 1 exists to catch.
- **Spec-field trap checked and cleared.** B0CQ8RSTC9's *product description* block ends with
  "This **2-pack** of mouse traps is an economical option" — stale Woodstream boilerplate carried
  over from the 2-pack SKU, the same class of error as the "lotion listed as Aerosol" case.
  Identity was judged on the other evidence, which is unanimous for 12: the **title**
  ("- 12 Traps"), the **model number** (M150-**12**), the **search-result title**, the **shipping
  weight** (421.84 g ≈ 12 × ~30 g traps plus carton; a genuine 2-pack would be ~70 g), and the
  **package dimensions** in the buy-box spec block (24.5 × 15 × 11.1 cm — a 12-trap carton —
  versus the 9.91 × 4.57 × 1.52 cm single-trap footprint listed lower down).
- **Species checked**, per the Wave 3 rat/mouse mismatch lesson: title, description and browse
  category all say **mouse**. This page is about *mouse* droppings and explicitly routes rat-sized
  pellets away to the rat guide, so a mouse trap is the correct species. Victor's only live
  metal-pedal-class *rat* item (B0CNH8VZYX, Wide Pedal M205TRI) was correctly left alone — wrong
  page.
- Not pinned: the three non-hero `BuyLink`s in the kit strip (lines 307–309 — respirator, snap
  traps, exclusion fill) remain search links, per rule 2.

### how-to-get-rid-of-fruit-flies-canada — SKIPPED (brand absent from amazon.ca)

The hero is unambiguous and brand-plus-model specific: `StickyBuyBar name="TERRO T2502 Fruit Fly
Trap (2-pack)" search="terro fruit fly trap"` (line 104) plus the `TopPick` of the same name
(score 8.7); the Quick Answer and FAQ 1 both name the **T2502 Canadian label** by SKU.

Two independent queries run today. **`terro fruit fly trap`** — 141 results, and the only TERRO
SKUs on page one are **T510 Fly Magnet sticky fly paper** ($4.98, Amazon's Choice), **T300CAN
Liquid Ant Bait Stations** ($9.98, Bestseller) and **T3206SR Spider & Insect Trap** ($16.45).
**`terro T2502 fruit fly trap apple`** — 30 results, the same three TERRO SKUs, no T2502, and no
apple-shaped TERRO trap of any kind. Everything else returned is a sponsored Cusbus plug-in UV
unit, Trappify sticky sticks, generic 20-pack yellow sticky cards, mason-jar lids, and **refill
liquid** listings for other vendors' traps.

This independently reproduces the Wave 3 finding on the sibling page `best-fruit-fly-trap-canada`
(logged 2026-09-02, four queries, upheld on independent audit) — the two pages share the identical
`search=` prop and the identical named product. **Do NOT substitute** a generic red/apple trap or
a refill-liquid listing: the page's thesis is brand-specific *and* quantity-specific *and*
regulatory-specific ("Canadian label", "non-insecticidal food-based lure", "up to 45 days",
"2-pack"), so any swap is the rule-2 near-miss. Search link kept verbatim.

### how-to-get-rid-of-silverfish-canada — SKIPPED (class-named hero, no brand on the page)

`StickyBuyBar name="Energy Star 50-pint basement dehumidifier"` (line 104) and the featured
`AwardCard name="Energy Star 50-Pint Basement Dehumidifier"` (score 9.3). **No brand or model
appears anywhere on the page** — not in the hero, the H1, the Quick Answer, the twelve FAQs, or
the prose. The other three cards are class-named too: "Insect Glue Board Traps (Multi-Pack)",
"Diatomaceous Earth (Insecticidal, DE Duster)", "Door Sweeps + Silicone Caulk Kit". There is
nothing to match, so no search was needed to reach the decision — pinning would silently convert a
*category* recommendation into a single-vendor one. Same call as
`what-size-dehumidifier-do-i-need-canada` ("hero is deliberately generic — 50-pint default") and
`best-upholstery-steam-cleaner-canada`.

Worth recording that the dehumidifier cluster has now failed to pin **six times for six different
reasons**: `best-dehumidifier-for-mold-canada` (3P-gouged), `best-dehumidifier-for-basement-canada`
(model not sold on .ca), `what-size-dehumidifier-do-i-need-canada` (generic),
`best-whole-house-dehumidifier-canada` (3P imports), `desiccant-vs-compressor-dehumidifier-canada`
(single 3P reseller), and now this one (class-named). The two that *did* pin — Midea Cube
B0GL7Y575V and AlorAir HD55 B097JH2HDH — are the exceptions. If a future wave wants this page
pinned, that is an editorial job (naming a specific 50-pint unit in the card), not a link job.

### Verification run

- **`npx tsc --noEmit` exits 0.**
- **Rule 3 (search preserved):** `git diff` shows both changed lines keep
  `search="victor mouse trap 4 pack"` / `search: 'victor mouse trap 4 pack'` byte-for-byte; the
  only edit is an inserted `asin` prop.
- **Rules 4–6:** the diff is **2 insertions across 1 file** — no title, meta description, H1,
  Quick Answer, editorial verdict, score, prose or existing link altered; no price, star rating,
  review count, best-seller rank, product image or AggregateRating added; no shared file touched.
- **Rule 9:** no Health Canada recall found against Victor M150 / Woodstream wooden snap traps.

### Left for a human

1. **`best-mouse-trap-canada` recommends a product that is not sold on amazon.ca.** That page picks
   the **"Victor M325 wood snap trap (4-pack)"** as Best Overall — in the StickyBuyBar, the Quick
   Answer link, the featured AwardCard, the comparison table, an H2, and FAQ 1 ("a **4-pack**
   covers a typical kitchen or garage problem"). Verified today: `victor m325 wood snap trap`
   returns **15 results with zero M325**, and Victor's only live .ca wooden snap traps are the
   **M150-12** and **M035-12**, both **12-packs**. So that page's central recommendation, its model
   number, and its 4-pack quantity claim are all unpurchasable in Canada. The fix is an editorial
   rewrite (re-anchor to M150-12 or M035-12 and correct "4-pack" to "12-pack"), not an `asin=`
   addition — out of scope here under rule 4 and the touch-only-my-three-files constraint, but it
   is the same failure mode as the TERRO fruit fly page and worth more than a pin.

## Wave 4 — pinned 2026-09-02 (2 pages pinned, 1 skipped)

| Page | Product | ASIN | Verified on 2026-09-02 |
|---|---|---|---|
| best-ant-killer-canada | TERRO Liquid Ant Bait Stations **T300CAN** — 6-count indoor liquid bait stations | B014H8NZ7U | In Stock, $9.98, **Shipper/Seller Amazon.ca (first-party)**. Brand byline "Terro", Manufacturer TERRO, **Item model number T300CAN** — the Canadian SKU, not the US T300. #12 in Patio, Lawn & Garden / **#1 in Pest Control Lures**, 4.3★ (10,027) |
| bed-bug-heater-canada | ZappBug Oven 2 heat chamber (39.5 × 39.5 × 28 in, dual 1500 W) | B00JU5G1PY | In Stock, $545.72, **Shipper/Seller ZappBug** (brand direct, not a reseller). 4.1★ (184) |

### best-ant-killer-canada — why T300CAN and not the US pack
The article's Best Overall card leans on "widely stocked here, and **sold with Canadian
label directions on the pack**", and the page elsewhere warns that "marketplace listings
can mix Canadian and US packs — buy the one showing a PCP number". Amazon's item model
number field reads `T300CAN`; RONA sells the same `T300CAN` 6-pack in Canadian retail,
corroborating that this is the Canadian-registered SKU rather than a US T300 import. The
article states no quantity, so the canonical 6-count carries no size mismatch. Buy box is
Amazon.ca first-party at $9.98 — normal Canadian retail, no third-party markup.

### bed-bug-heater-canada — the title says "XL", the product is the Oven 2
**Read this before re-verifying.** The amazon.ca title is "The ZappBug Oven 2 **XL** kill
more bed bugs in larger items with heat", while the article's hero is the plain **Oven 2**
("mid-size chamber"). The title is the anomaly, not the product. Every concrete fact on the
listing describes the standard Oven 2:

- Its own first feature bullet: "**Medium size**: Measures **39.5 inches-by-39.5 inches-by-28**".
- Amazon spec table Product Dimensions: **100.3 × 100.3 × 71.1 cm** = exactly 39.5 × 39.5 × 28 in.
- "**Two 1500-Watt** thermal heating units"; "Included extension cord allows for easier
  access to **2nd circuit**".

Manufacturer cross-check (zappbug.com): ZappBug's own catalogue contains exactly three
chambers — **ZappBug Heater $219.99**, **ZappBug Oven 2 $389.99 (exterior 39.5 × 39.5 × 28
in, requires 2 separate circuits)**, and **ZappBug Room $1,695**. There is **no separate
"Oven 2 XL" product**, and the accessory listings confirm it ("Thermal Unit for ZappBug
Heater, Oven 2 & Room", "Thermometer for ZappBug Heater & Oven 2" — no XL variant). A
third-party eBay listing likewise titles it "Oven 2 XL" while stating 40 × 40 × 28. So "XL"
is marketing wording on the one and only Oven 2, distinguishing it from the smaller Heater.

Price sanity: $389.99 USD MSRP × ~1.38 ≈ $538 CAD against the listed $545.72 CAD, sold by
the brand itself — MSRP-equivalent, not a reseller markup. Same caveat as the earlier
ZappBug pins: ships from the US, so check delivery cost at checkout. This is the same class
of badge-vs-spec mismatch documented for the Havahart 1079SR in Wave 1 — judged on what the
product IS (dimensions, heater count, circuit requirement), not on the marketing word.

### best-dehumidifier-for-basement-canada — SKIPPED, no clean hOmeLabs listing
The hero is the "hOmeLabs 50-Pint Energy Star Dehumidifier" (Energy Star, continuous gravity
drain, auto-defrost, explicitly **no built-in pump**). hOmeLabs has effectively left the
Canadian channel; every hOmeLabs listing left on amazon.ca is a third-party reseller at a
large markup, the wrong capacity, or an internally contradictory listing. Rule 1 disqualifies
all of them, and a near-miss substitute is worse than the search link:

| ASIN | Listing | Price | Seller | Why it fails |
|---|---|---|---|---|
| B073VBWKJZ | hOmeLabs 4,500 Sq. Ft Energy Star — "removes up to 50 pints" | **$944.80** | NEFELLI LLC (3P) | This IS the model the article means, at roughly 3× normal retail. Only 9 left |
| B08MWQSGQ5 | hOmeLabs 3,500 Sq. Ft Dehumidifier **with Pump**, 40 pint | **$865.07** | Canavax (3P) | ~3× markup, and the pump contradicts the card's stated "no built-in pump" |
| B06X9MFTZZ | hOmeLabs 3,000 Sq. Ft Energy Star — 35 pint current DOE | $597.63 | Botley Store (3P) | Markup; wrong capacity; title says 3,000 sq ft while spec table says 4,500. Only 3 left |
| B0D1H9DXJZ | hOmeLabs "1,800 Sq Ft 8 Pint" | $385.58 | NelsonLife (3P) | Listing contradicts itself — title 8 pint, bullets describe 4,500 sq ft / 50 pint |
| B0DX7GQSP5 | hOmeLabs 8 Pint / 1,800 sq ft Wi-Fi | $219.99 | KNDirect (3P) | Wrong capacity — an 8-pint unit cannot hold a 1,500–2,500 sq ft basement |

Deliberately **not** substituted with the Midea Cube: rule 2 pins the hero only, and the
Midea is a different award card on this page ("Best Energy-Efficient & Quiet"). Re-check when
hOmeLabs returns to a first-party or fairly-priced Canadian buy box. Health Canada recall
check run for all three heroes — nothing on TERRO or ZappBug (the live 2026 pest recall is
Raid ant & hornet spray, which this site does not pin).

## Wave 4 batch C — verified 2026-09-02 (3 pages, 0 pinned, 3 skipped)

All three heroes were checked live on amazon.ca in a real browser session (search page,
`/dp/`, and the all-offers panel where a buy box was missing). None could be pinned without
breaking a rule. Every `search=` kept verbatim; no page file in this batch was edited.
`npx tsc --noEmit` clean.

| Page | Action | Reason |
|---|---|---|
| picaridin-vs-deet-canada | **Skipped** | Class hero naming three brands with "or" |
| how-to-keep-mice-out-of-your-car | **Skipped** | Class hero + no candidate whose identity verifies |
| black-flag-electric-fogger-review-canada | **Skipped** | No featured offer; sole offer a US 3P at ~5x |

### picaridin-vs-deet-canada — skipped (class hero)

Hero is class-named at both link points and the class is explicitly multi-brand:
StickyBuyBar name "Picaridin 20% insect repellent (Natrapel / OFF! Defense / Sawyer)",
TopPick name "Picaridin 20% (Natrapel, OFF! Defense, or Sawyer)". The head noun is the
compound; the brands are parenthetical examples joined by "or". The body copy then declines
to choose in so many words: "All three of these are 20% picaridin... Any one of them gives
you the full 5-8 hours... pick the format you like best." The page already carries three
per-brand cards (Natrapel / OFF! Defense / Sawyer), each with its own secondary BuyLink —
that trio IS the page's mechanism for letting the reader choose.

Pinning the hero to any one of them would silently convert an explicit category
recommendation into a single-vendor one — changing the editorial verdict by means of a link.
Same call as the `best-flea-bomb-canada` and `best-upholstery-steam-cleaner-canada` skips.

Availability was NOT the problem — recorded so a future checker does not redo the search
work. Natrapel 20% icaridin 100 mL **B0BYFF3S3V** is live and already pinned on the sibling
page `mosquito-repellent-guide-ontario-2026` (verified 2026-08-31, first-party Amazon.ca).
If this page's award card is ever narrowed editorially to one named brand, B0BYFF3S3V is
the ready pin, subject only to the quarterly model-number re-check documented in the Wave 2
note above. Until the card names a single winner, this stays a search.

Basket-risk note: the harm this programme fixes is basket randomisation on high-AOV
clusters. All three named picaridin brands sit in a ~$10-18 band and the hero search string
already resolves to picaridin repellents, so the revenue forgone by skipping is near zero.

### how-to-keep-mice-out-of-your-car — skipped (class hero, and the best candidate cannot be identity-verified)

Hero at both link points is "Capsaicin Rodent Deterrent Tape" / "Capsaicin rodent deterrent
tape (wire-wrap style)" — no brand is named anywhere on the page. Grepped the file: the only
marque mentions are Honda/Toyota/Subaru as lawsuit defendants, plus Honda as the automaker
that "made the fix famous" through its dealer parts counter. The article then says
"aftermarket versions are now widely available" and warns that "marketing claims vary by
brand — so read the label of the specific product you buy, check for a PCP number". That is
an explicit instruction to the reader to evaluate the individual product, which is the
opposite of what a pinned hero does.

Two independent failures, either one sufficient:

1. **Class hero, no brand to match.** Same call as the picaridin / no-see-um-mesh skips.
2. **Neither live candidate survives rule 1.** The hero's own search string
   (`rodent deterrent tape capsaicin wire`) returns ZERO capsaicin tape products on
   amazon.ca — the entire first page is copper mesh, steel wool, glue traps and ultrasonic
   plug-ins. Searching `capsaicin rodent tape` surfaces only two real candidates, and both
   fail:
   - **B0F1VZYNFM** — "Lakota Naturals Honda Tape Replacement 19MM x 20M OEM 4019-2317",
     $47.02, In Stock, Ships from Amazon, sold by "Your Family Market", 143 ratings.
     The listing never says capsaicin or capsicum anywhere — not in the title, not in the
     bullets ("Wires, pipes, cables and more", "MANY APPLICATIONS"). It is sized to replace
     the Honda part number, which is not the same claim as being the treated tape. This is
     the yellow-jacket lesson exactly: matching a SKU string is not verifying what the
     product IS. Identity unverifiable, so skip.
   - **B0FZVZ5L9G** — "Rodent Anti-Chew Deterrent Tape - Replacement for Honda Rodent Tape
     OEM 4019-2317 ... Capsicum-Infused ... 3/4 in x 65 ft", brand **GROUP DMR**, sold by
     GROUP DMR (brand = seller), $82.69 (**$1.27/ft**), 50 ratings. It does state the
     capsicum treatment, but it is an unknown reseller-brand at roughly double the cheaper
     candidate per foot and well above what a genuine Honda 4019-2317 roll costs at a
     dealer counter. Routing a no-brand category hero into a $82.69 unknown-brand listing
     is the "near-miss substitute is worse than a search link" failure.

   Re-check if a recognised brand — or genuine Honda OEM 4019-2317 — appears on .ca.

Flagged separately as a CONTENT issue, not an ASIN one: the hero search string currently
returns no capsaicin tape at all, so the page's number-one "Best Deterrent" CTA lands
readers on copper mesh. Fixing that means editing an existing link, which this programme is
not permitted to do — hand it to a content pass.

### black-flag-electric-fogger-review-canada — skipped (no buy box; sole offer a US third-party at ~5x)

This page names an exact model, so it got a full check rather than a class-hero dismissal.
The ASIN exists: **B0000BYBSD**, title "Black Flag 190107 Electric Insect Fogger for Killing
and Repelling Mosquitoes, Flies, and Flying Insects Outdoors", brand byline Black Flag,
4.2 stars (815 ratings). Correct product, exact model. It still fails rule 1 on availability
and price:

- The `/dp/` page has no Add-to-Cart and no buy box — only "See All Buying Options", under
  an Amazon "Price higher than typical" warning.
- The all-offers panel reads **"No featured offers available"** and lists exactly ONE offer:
  **$420.00 plus $16.59 delivery, arriving September 15-24, shipped from the United States,
  sold by "gimantic warehouse deals"** (seller rating 4/5 from 40 ratings, 73% positive
  lifetime), with import fees flagged on the offer.

The 190107 is a sub-$100 machine. A single grey-import reseller at roughly $437 delivered is
a textbook third-party markup, and pinning it would directly falsify the page's own thesis:
the Quick Answer, the TopPick blurb and the closing verdict all sell this as "the cheapest,
most accessible way into thermal fogging" and "the most affordable, lowest-hassle machine
going". The pin would make the hero contradict the article at the moment of the click.

Also checked and ruled out as substitutes: **B01MR7LT8H** "190396 Electric Insect Fogger,
40-oz. - Quantity 3" at $600 (different model AND a three-pack, 3P priced), and the generic
ULV cold foggers that dominate the search results — the wrong machine class entirely, as the
page's own comparison table explains at length.

This confirms the earlier wave's "Black Flag fogger verified absent" finding and sharpens
it: the ASIN is not absent, but it is not purchasable on amazon.ca at a defensible price,
which for our purposes is the same outcome. The search link stays.

Escalated as a content/commercial question, deliberately not decided here: an entire review
page is built on a product no Canadian reader can currently buy on Amazon.ca. Options are a
retailer-availability note, redirecting intent to the page's own
`/blog/best-thermal-fogger-canada` sibling, or leaving it informational. No prose was
touched.

## Wave 4 — bed-bug-spray / TTC / indoor-fly-trap batch (2026-09-02)

**Result: 1 pinned, 2 skipped.** Both skips were re-verified live from scratch rather than
inherited from the prior waves' notes — both hold, and both are the *correct* outcome
rather than a failure. Three link points changed in total, all on one page.

| Slug | Hero as written | ASIN | Action | Reason |
|---|---|---|---|---|
| best-indoor-fly-mosquito-trap-canada | `StickyBuyBar` "Katchy Indoor Insect Trap (UV + fan + glue board)" + featured `AwardCard` "UV + Fan + Glue-Board Trap (Katchy-style)" | **B07B6RZP4H** | **PINNED** (2 link points) | Genuine original Katchy, in stock, only offer on .ca, price inside the article's own stated band. Detail below |
| best-natural-bed-bug-spray-canada | `StickyBuyBar` "EcoRaider plant-based bed bug killer" + featured `AwardCard` "EcoRaider Plant-Based Bed Bug Killer" | — | **SKIP** | **EcoRaider is still not sold on amazon.ca.** Re-tested 2026-09-02 from scratch: `ecoraider bed bug killer spray` returns **23 results, zero EcoRaider** (ECOPEST, OnGuard, ECOGUARD, Raid, KONK, Knock Down); bare `ecoraider` returns **11 results, zero EcoRaider** (ECOGUARD P-22 / Pro-Perm jugs, an ultrasonic repeller, Raid, a bed-bug interceptor). Third independent confirmation of the wave-1 finding. **No substitution made:** the page's #2 and #3 picks (Proof, Doktor Doom) *are* stocked, but pinning either under a StickyBuyBar that reads "EcoRaider plant-based bed bug killer" would be a straight falsehood, and rule 2 confines the pin to the hero. Same call as `dynatrap-canada-review`. Editorial fix, not a link fix |
| bed-bugs-on-the-ttc-toronto | `StickyBuyBar` "Bed bug interceptor traps — the only real answer" + featured `AwardCard` "Bed Bug Interceptor Traps (Under Each Bed Leg)" | — | **SKIP** | Two independent grounds, both re-verified. Detail below |

### best-indoor-fly-mosquito-trap-canada → B07B6RZP4H (the pin)

| Check | Result |
|---|---|
| ASIN resolves | Yes — `ASIN : B07B6RZP4H` |
| Title (.ca) | "Katchy Fruit Fly Trap - Indoor Mosquito, Gnat, Insect Trap w/UV Light & Suction Fan - Manual, Non-Zapper Insect Catcher Traps for Bug-Free Home - 5 X 8.8 Inches (Black)" |
| Identity cross-check | **The same ASIN on amazon.com is titled "The Original Katchy Indoor Insect Trap — Fan Powered with UV Light"** — i.e. this is the flagship classic Katchy, not a lookalike or a bundle. The .ca title is a re-keyworded rendering of the identical item |
| Brand / Manufacturer | KATCHY / KATCHY, Place of Business **Ferndale, WA** |
| Mechanism ↔ card parity | Listing bullets carry the card's exact mechanism: "combines the power of **UV light and a suction fan** to attract pests, which get trapped to the **sticky disc**" = the card's "UV + fan + glue board". Bullets also independently carry the card's "silent" pro ("DUAL SETTINGS… 'standard' and 'silent'") and its target pests ("gnats, fruit flies, and moths") |
| Stock | **In Stock**, quantity selector runs to 10 |
| Price / seller | **$84.05**, FREE delivery Sep 15–24, Shipper/Seller **Meighen Island** (3P) |
| Quantity conflict | None — neither hero surface states a count, and the article states no price for the trap itself |
| Editorial stance | The page's own Best Overall, score 8.6; rules 7 and 8 satisfied |

**Why the pin is worth making — the search is actively leaking basket.** The site's own
query `katchy indoor insect trap uv fan` currently returns **four sponsored non-Katchy
products above the first genuine Katchy**: Cusbus fruit-fly plug-in $25.99, a Coremaster
**cockroach/silverfish glue-board 12-pack $16.99** (wrong pest entirely), a generic $39.99
plug-in, and a $39.99 bug zapper. A reader clicking a bar that reads "Katchy Indoor Insect
Trap" lands on a screen whose visible top row is $17–$40 of other things. That is the exact
basket-erosion mechanism this programme exists to fix, and the gap here is roughly 2–5×.

**Markup test — passed, with the reasoning recorded.** $84.05 is a 3P buy box, so it was
checked properly rather than waved through:

1. **No cheaper offer exists for this ASIN.** `/gp/offer-listing/B07B6RZP4H` redirects
   straight back to the dp and the search row carries no "More buying choices" line —
   a single offer, so there is no undercut offer being marked up over.
2. **The whole Katchy catalogue on .ca sits in one band**, not just this SKU: Duo Black
   B08TKG5M4S $104.90, Duo White B08Y65R582 $102.40, Automatic B07H2JGSM6 $84.05, classic
   White B07M8VX4T9 $88.05, "Original" B0FX2Q7P4Z $93.32. A reseller markup shows up as one
   outlier ASIN; this is a market-wide import premium.
3. **Independent Canadian reference points.** amazon.com priced *for delivery to Canada*
   quotes Katchy at **CAD 74.88 (Duo White bundle), CAD 79.86 (Midnight), CAD 97.83 (Duo
   Black bundle)** — $84.05 sits inside that band. **Walmart.ca does not stock Katchy at
   all** (4 results for the query, none of them Katchy), so there is no cheaper Canadian
   retail channel being undercut. Same shape as the wave-4 RESCUE! call.
4. **The article's own numbers accommodate it.** Its comparison table prices the indoor
   UV/glue trap category at **"$25–$90 + refills"**; $84.05 is inside that. No reader
   expectation is broken, and rule 4 was not touched to make it fit.

**Two Amazon spec fields on this listing are wrong — flagged so a future auditor does not
re-litigate them.** The top spec table reads `Colour: Purple` (the title says Black),
`Material: Paper`, and `Product Dimensions 10.9 x 10.9 x 0.5 cm` — that is a **glue board**,
not a trap. The Product-details block further down gives the real item: **13.97 x 13.97 x
23.11 cm, 150 g, Manufacturer KATCHY, first available May 19 2018**. Per the established
method, identity was judged on title, bullets, brand byline and manufacturer — all four
agree — not on a single spec field. Same failure mode as the Natrapel "Item form: Aerosol".

**Watch items for the quarterly check.** (a) Delivery is **Sep 15–24** — a slow
seller-fulfilled window, acceptable but worth re-checking; if Meighen Island goes out of
stock this ASIN has no backup offer, and the pin should then be dropped rather than
re-pointed. (b) Katchy's current-generation model is the **Duo** (scent pod, B08TKG5M4S,
$104.90) and Amazon labels the pinned unit "There is a newer model of this item" — the Duo
was **not** substituted, because it is a different product at a different price and the
page's hero describes the classic UV + fan + glue-board unit. If the classic is delisted,
the correct response is an editorial decision about the Duo, not a silent re-point.

### bed-bugs-on-the-ttc-toronto — why it is a skip (both grounds re-verified)

**Ground 1 — the hero is class-named.** `StickyBuyBar name="Bed bug interceptor traps — the
only real answer"` and the featured card `name: 'Bed Bug Interceptor Traps (Under Each Bed
Leg)'`. The card's `why` describes a *mechanism* only ("bed bugs climb the textured outer
wall and cannot climb the smooth inner one"), and **no brand appears anywhere in the visible
editorial** — not in the H1, Quick Answer, risk table, FAQs, or any of the four "worth
buying" cards. The only brand token on the entire page is the string `climbup` inside the
`search=` prop, which no reader ever sees. Pinning would silently convert a deliberately
category-level recommendation into one vendor's SKU. Identical call to
`bed-bug-stains-poop-droppings-canada` (skipped twice) and `black-flies-ontario`.

**Ground 2 — ClimbUp still fails rule 1 on price, independently re-checked 2026-09-02.**
`climbup insect interceptor` returns exactly one genuine ClimbUp item:
**B00743B6ZE "Climbup Insect Interceptor - Box (12 Traps)", $111.03 ($9.25/count), was
$116.69, "Only 6 left in stock", 3.1★ on 3 ratings, delivery Sep 9–11.** Against the
well-stocked equivalents *on the same results page*: **ECOPEST Bed Bug Blocker (Pro) 8-pack
B07MG8BD7X $39.99 ($5.00/cup), 4.1★ on 4.6K**; **4-pack B07SPDXVMM $25.99 ($6.50/cup), 4.3★
on 3.2K**; **Aspectek 4-pack B0186A8ARK $23.99 ($6.00/cup), 4.0★ on 1.7K**. ClimbUp is
**1.4–1.85× per cup** on a three-review single-reseller listing with six units left. No
substitution was made: ECOPEST, TruGuard, Aspectek and Coremaster are all *different
brands*, and swapping one in would invent a brand recommendation this page deliberately
declines to make.

**The fallback here is healthy, which is why the skip costs nothing.** `bed bug interceptor
traps climbup` returns 23 results whose top organic slots are all correct-category
double-well interceptors at sane prices — TruGuard XL 4-pack, TruGuard X 12-pack, ECOPEST
Bed Bug Blocker (Pro) 4/8/12-packs, Aspectek 4-pack. The reader arrives at the right shelf.
Unlike the no-see-um case, nothing is broken; there is simply nothing to pin.

**Editorial note for a human (out of scope under rule 4).** This page and
`bed-bug-stains-poop-droppings-canada` share the same class-named interceptor hero, and the
site's *own* sibling `bed-bug-interceptor-traps-canada` already commits to a brand. If that
sibling's committed pick is one of the stocked .ca families (ECOPEST / TruGuard / Aspectek
rather than ClimbUp), naming it on these two pages would make both pinnable in one edit and
would end the recurring skip. That is a content decision, not a link decision.

**Verification method note.** Every claim above was read off a live amazon.ca session on
2026-09-02 (result counts, titles, prices, per-unit prices, seller/shipper, stock strings,
delivery windows), plus one amazon.com read for the B07B6RZP4H identity cross-check and one
walmart.ca read for the Canadian-retail reference. `npx tsc --noEmit` exits 0.

## Wave 4 — INDEPENDENT AUDIT (2026-09-02)

Auditor re-verified every claim in the wave-4 report against live sources. **The single pin in
this batch was REVERTED.** Net result for the batch: **0 pinned, 3 skipped.**

| Page | Auditor action | Finding |
|---|---|---|
| best-steam-cleaner-for-pest-control-canada | **PIN REVERTED** (`asin="B07C44DM6D"` removed from both link points; `search="dupray neat steam cleaner"` preserved verbatim) | **RULE 9 VIOLATION — active Health Canada recall.** The Dupray Neat Steam Cleaner is under a joint Health Canada / US CPSC consumer product recall, "Dupray Neat Steam Cleaner recalled due to burn hazard", last updated **2026-02-26**. Model **DUP020WNA**, batch/date codes **0118-01 through 0425-05** affected (0525-XX and later are not). Cause: an overfilled/corroded boiler with a malfunctioning pressure-release cap **can rupture**. As of 2026-01-20 Health Canada logged **15 boiler ruptures, 4 injuries** (burns, lacerations, a broken wrist) and 7 property-damage reports. The notice states the Canada Consumer Product Safety Act **prohibits recalled units from being redistributed, sold, or given away in Canada**. An Amazon listing gives the buyer **no way to select a batch code**, so a purchase through our link cannot be steered to safe stock. Rule 9 is unconditional: do not pin, flag it. |
| best-flea-bomb-canada | **SKIP CONFIRMED** | Independently verified. Both hero points are class-named ("Pet-hair vacuum with a beater bar and sealed filtration" / "High-Suction Vacuum With a Beater Bar and Sealed Filtration"). Re-ran the brand grep: the 11 apparent "SEBO" hits are a **substring false positive inside the word "ba-sebo-ards"** — genuine brand hits are zero, exactly as reported. Rule 7 correctly blocks the Doktor Doom / Konk foggers: they are award #3 (badge "If You Still Want a Fogger"), not the hero, and the page's verdict is openly hostile ("the best flea bomb is no flea bomb", "Not recommended — read the conditions first", "A fogger is not in that list"). |
| do-tiki-torches-repel-mosquitoes | **SKIP CONFIRMED** (on one of the two stated grounds) | Correct outcome. Re-verified live: 43 results for `thermacell e90`, **no E-ZoneGuard Patio 9-Hr listing** (lineup: Patio 5.5-Hr $53.99, Patio+ $71.98, Adventure $74.97, E55 $71.45). B0C9MNZPQ9's title says "Rechargeable E90" while its own Product description says **"Thermacell EX90 ... engineered specifically for the avid outdoors person and traveler"** — a self-contradicting listing, so identity cannot be verified and rule 1's "if you cannot verify, SKIP" applies. **However the report's second ground (a ~57% third-party markup) is factually wrong** — see the struck-through correction in the wave-4 entry above. |

### Systemic finding — the same recalled ASIN is live on two other pages

`B07C44DM6D` was pinned in **wave 1** and is still committed on two pages **outside this batch**,
two occurrences each:

- `app/blog/dupray-steamer-review-canada/page.tsx` (lines 104, 131)
- `app/blog/dupray-vs-mcculloch-steamer-canada/page.tsx` (lines 104, 253)

Both are live in production and both point a buyer at a recalled burn-hazard appliance under a
"Best Overall" endorsement. Left untouched here only because they are out of this batch's scope —
**they need the same revert urgently.**

### Process lesson for future waves

Rule 9 (Health Canada recall) was the one check the wave-4 report never ran; its Amazon-side
verification was otherwise accurate in every particular. **A recall is invisible on the Amazon
listing** — B07C44DM6D shows In Stock, 4.4 stars, 22,998 ratings, "500+ bought in past month",
sold by Dupray's own storefront, and reads as a model pin. Amazon-side verification alone cannot
surface it. **Add a `recalls-rappels.canada.ca` search on the brand + model to the standard
pre-pin checklist, before any pin is written.**

Also worth noting: the temperature discrepancy the report flagged as a content question (listing
says the Neat "Heats up to 275°F/135°C"; the page's Quick Answer demands a boiler at "roughly
150–170°C") sits directly adjacent to a recall whose failure mode is **boiler rupture**. That
editorial claim should be settled by a human, and it is now more than a tidiness issue.

### Independent audit — Wave 4 batch C (auditor pass, 2026-09-02)

Re-verified the three batch-C pages against amazon.ca without trusting the batch report.

| Page | Claimed | Auditor verdict |
|---|---|---|
| picaridin-vs-deet-canada | Skipped (class hero) | **Upheld** |
| how-to-keep-mice-out-of-your-car | Skipped (class hero, identity unverifiable) | **Upheld** |
| black-flag-electric-fogger-review-canada | Skipped (no featured offer) | **Upheld** |

**Nothing removed — there was nothing to remove.** All three files are byte-identical to
HEAD (`git diff HEAD` empty) and contain zero `asin=` props, so no pin could be wrong. Every
`search=` is intact and unmodified. `npx tsc --noEmit` exits 0.

**B0000BYBSD re-verified independently.** Title matches the hero verbatim ("Black Flag 190107
Electric Insect Fogger for Killing and Repelling Mosquitoes, Flies, and Flying Insects
Outdoors"), brand byline Black Flag, 4.2 stars / 815 ratings. No Add-to-Cart and no Buy-Now
button; "No featured offers available" and "price higher than typical" both present. The skip
is correct under rule 1. Minor variance from the batch report: the offscreen price read
**$400.00**, not $420.00 — immaterial, both are ~4-5x a sub-$100 machine, and the decision is
unchanged. The prior wave's "verified absent" record for this fogger is genuinely **wrong**;
the listing is live, it simply has no featured offer.

**Mice-in-car escalation confirmed real.** The hero search `rodent deterrent tape capsaicin
wire` returns **zero** capsaicin/capsicum products in the top 12 — sonic mole stakes, rat
mesh, 4x steel wool and 5x copper mesh. The page's "Best deterrent" CTA does land readers on
an unrelated category. B0F1VZYNFM ("Lakota Naturals Honda Tape Replacement 19MM x 20M OEM
4019-2317", Lakota Naturals, $47.02) mentions capsaicin/capsicum **nowhere** in its full page
text; the batch agent's application of the yellow-jacket lesson here was correct.

**Method note.** The shared browser was being re-tabbed mid-call by concurrent agents; two
early reads returned another agent's fruit-fly and mouse-trap pages. All figures above were
re-taken via same-origin `fetch` inside an amazon.ca context with a URL guard, which is
immune to that race. Any batch reporting DOM figures from this shared session without a guard
should be re-checked.

---

## Independent audit — Wave 3 (centipede / dog-repellent / bed-bug-powder), 2026-09-02

Auditor pass over `how-to-get-rid-of-centipedes-canada`, `mosquito-repellent-for-dogs-canada`,
`best-bed-bug-powder-canada`. Wave report claimed **0 pinned, 3 skipped, no file modified**.

**Verdict: report accurate on every checkable claim. Nothing to revert.** No `asin` prop was
added anywhere, so the serious error class this audit hunts — a pin that should have been a
skip — is structurally absent. Zero ASINs removed because zero were added.

| Check | Result |
|---|---|
| Files modified | **None.** `git diff HEAD` = **0 bytes** for all three files. md5 deltas vs HEAD are CRLF/LF only |
| `asin=` props present | **0** in all three files |
| `search=` props preserved | Yes — trivially, since no byte changed. `50 pint dehumidifier basement energy star`, `k9 advantix ii dogs`, `cimexa insecticide dust` all intact |
| `npx tsc --noEmit` | **Exit 0** |
| `asin-pilot.md` append-only | **346 insertions, 0 deletions** — no concurrent agent's section clobbered |

### Skip-by-skip re-verification (live, own browser tab, `location.href`-guarded)

| Page | Skip upheld? | Independent evidence |
|---|---|---|
| how-to-get-rid-of-centipedes-canada | **Yes** | Hero is a pure class name. `StickyBuyBar name="Energy Star basement dehumidifier (50-pint class)"`, featured card `name: 'Energy Star Basement Dehumidifier (50-Pint Class)'`. Re-ran the brand grep (Frigidaire/Midea/Hisense/Danby/hOmeLabs/Honeywell/Tosot/Colzer/Waykar/Vremi/GE/Ivation/Kesnos/Shinco) — **zero hits**. `whichToBuy` defers sizing to `/blog/best-dehumidifier-for-basement-canada`. The claimed restraint is real: `B0GL7Y575V` **is** pinned on `best-large-capacity-dehumidifier-canada` (line 100) and was correctly not borrowed — that page's `search="midea cube 50 pint dehumidifier"` names a brand, the centipede page's names none |
| best-bed-bug-powder-canada | **Yes** | CimeXa absence reproduced independently, and the report's exact counts verify: `s?k=cimexa` → DOM `s-metadata` `"totalResultCount":23` (report said 23), **zero** CimeXa products; every `cimexa` string in the DOM is search-box echo, `<title>`, or script config — the only product-adjacent mention is a DE **duster** listing CimeXa in compatibility copy. `s?k=cimexa+insecticide+dust` → "1-48 of **54** results" (report said 54), zero CimeXa. Third independent confirmation on this repo |
| mosquito-repellent-for-dogs-canada | **Yes** | The load-bearing claim verifies at the data layer. `B07YWB2PG4` = "K9 Advantix II … **Medium Dogs weighing 4.6 kg to 11 kg (10 lbs. to 24 lbs.)-4 doses**", In Stock, $79.37, byline "Visit the K9 Advantix Store". Its twister JSON is `"dimensions":["size_name"]` with values `{B088BYRD5V:"2 doses", B07YWB2PG4:"4 doses", B0862V9SG5:"6 doses"}` — **dose count is the only selectable dimension; weight band is not selectable.** `B0862TCMDW` = "…**Extra Large Dogs weighing over 25 kg (over 55 lbs.)-6 doses**", $130.82, In Stock, and carries its own separate `["size_name"]` twister (`B088BZC1JX` 2, `B0862TVSRX` 4, `B0862TCMDW` 6). **Weight bands are separate parent listings**, so any pin hard-routes a permethrin dose band with no on-page correction — the `raccoon-proof-chimney-cap-canada` case, correctly distinguished from `bed-bug-mattress-encasement-canada` (size picker on page). Revenue claim also verifies: `k9 advantix ii dogs` returns **B0862TCMDW at $130.82 organic-first**, and the top 11 organic results are all genuine K9 Advantix (first non-brand hit is ParaPet at #12). The term is navigational — Amazon is not mis-picking — so the steamer-cluster defect does not exist here |

### Notes

- **The dog page is the one worth understanding**, and the wave report got it right for the right
  reason. Pinning the Medium 4-dose would have *cut* basket $130.82 → $79.37; pinning the XL to
  chase $130.82 would have picked a **pesticide dose band for commission**, which rule 8 forbids
  on a product the article itself sells on being "dosed by dog weight". Both directions are wrong,
  which is what makes it a skip rather than a close call.
- **One claim I could not fully confirm** (non-load-bearing, since the page was skipped): the
  report states `B07YWB2PG4`'s buy box is "Shipper/Seller Amazon.ca first-party". I confirmed the
  listing renders "Shipper / Seller" buy-box labels but did not extract the merchant value. Does
  not affect the skip.
- **Editorial escalation, unchanged from the wave report and now confirmed a third time:**
  `best-bed-bug-powder-canada` hard-recommends a product Canadians cannot buy on Amazon.ca — the
  Quick Answer reads "The best bed-bug powder in Canada is a silica-gel dust like CimeXa" and the
  Best Overall card scores it 9.2. The card's con ("Confirm the Canadian-market version before
  buying") under-states it: there is no Canadian-market version on .ca to confirm. Same defect
  already logged against `crossfire-bed-bug-concentrate-review-canada`. **This is a content fix
  for a human, not a link fix** — correctly left untouched under rule 4.
- Live price spot-check on the dog page's stated "$55–$95 for a 4-pack": 4-packs are $79.37
  (Medium) and $92.64 (`B0862TVSRX` XL, `B07YW8JTVT`) — inside the range but near its ceiling.
  2-pack XL $55.24; 6-packs $120.69–$130.82. Range holds today; one price move breaches it.

---

### INDEPENDENT AUDIT — wave 4 batch: best-natural-bed-bug-spray-canada / bed-bugs-on-the-ttc-toronto / best-indoor-fly-mosquito-trap-canada (2026-09-02)

Second agent, verified live on amazon.ca from scratch. Nothing inherited from the pinning agent's notes.

| slug | claim audited | verdict | evidence |
|---|---|---|---|
| best-indoor-fly-mosquito-trap-canada | PIN B07B6RZP4H | **PIN UPHELD — not removed** | `/dp/B07B6RZP4H` resolves. Title "Katchy Fruit Fly Trap - Indoor Mosquito, Gnat, Insect Trap w/UV Light & Suction Fan - Manual, Non-Zapper ... 5 X 8.8 Inches (Black)". Brand byline **KATCHY**, Manufacturer **KATCHY**, Ferndale WA. Target Species "Mosquitos, Gnats, Moths, Fruit Flies". Style **Manual** (not the Automatic/Duo). Unit Count **1**, Number of Pieces **1** — no multipack conflict, and the hero states no count. Detail-block dims **13.97 x 13.97 x 23.11 cm, 150 g** = the trap body (matches the title's 5 x 8.8 in). **In Stock**, $84.05, seller Meighen Island (3P). Date first available May 19 2018 = the original unit |
| best-natural-bed-bug-spray-canada | SKIP (EcoRaider absent) | **SKIP UPHELD** | Re-tested independently: `ecoraider bed bug killer spray` → **35 results, zero EcoRaider**; bare `ecoraider` → **23 results, zero EcoRaider** (Amazon fuzzy-substitutes ECOGUARD). No "no results" banner — the brand simply is not carried. File byte-identical to HEAD; no substitute pinned. **Fourth** independent confirmation |
| bed-bugs-on-the-ttc-toronto | SKIP (class-named hero) | **SKIP UPHELD** | Ground (1) is dispositive and verified in source: the string `climbup` appears exactly 4x in the file (lines 103, 201, 338, 367) and **every one is inside a `search=` prop** — StickyBuyBar, the featured card, and two BuyLinks. Zero brand tokens in visible editorial. Hero is `Bed Bug Interceptor Traps (Under Each Bed Leg)`, `why` describes only a mechanism. Pinning would invent a brand recommendation the page deliberately declines to make. File byte-identical to HEAD |

**Markup test re-run independently (the pin's main risk).** B07B6RZP4H is the **joint-cheapest genuine Katchy on amazon.ca**, not an outlier: on the article's own query the Katchy shelf reads B07B6RZP4H $84.05, B07H2JGSM6 $84.05, B07M8VX4T9 $88.05, B0FX2Q7P4Z $93.32, B08Y65R582 $102.40, Duo B08TKG5M4S $104.90. A whole-brand $84–$105 band is an import premium, not a single-ASIN reseller markup. `/gp/offer-listing/B07B6RZP4H` **302s back to the dp** (`ref=olp-opf-redir`) and `#universalMbcContent` is null — one offer only, so there is no cheaper offer being marked up over. Passes rule 1.

**The pin fixes a real, confirmed leak.** Re-ran `katchy indoor insect trap uv fan`: position 1 is a **sponsored $16.99 Coremaster cockroach/silverfish glue-board 12-pack (B0GV4MZ7C1)** — wrong pest, wrong product class — above every genuine Katchy. Readers clicking a bar labelled "Katchy Indoor Insect Trap" were landing on that.

**Rule 9 (recall):** no Health Canada / recalls.gc.ca recall found for the Katchy trap. Clear.

**Notes recorded so a future auditor does not re-litigate them:**
- **`Item model number: Aspectek` on B07B6RZP4H is NOT a brand mismatch.** Aspectek is Katchy's original manufacturing partner and this is a legacy catalogue field. Brand byline, Manufacturer, Place of Business and title all say KATCHY. Judged on identity, per the standing method.
- The bogus spec rows the pinning agent flagged are confirmed real and confirmed harmless: `Colour Purple` / `Material Paper` / `Item Dimensions 10.9 x 10.9 x 0.5 cm` are **glue-board** values sitting in the trap's attribute table. The Product-details block on the same page gives the true item. Same failure mode as the Natrapel "Item form: Aerosol" note.
- Variation parent is **B08NQ2VQ9F**; the family is Black $84.05 / White $88.05. The pinned child is the cheaper one. No refill SKU sits inside the buy family.
- Listing carries **3.6 stars on 88,697 ratings**. Low-ish, but the editorial already names Katchy by brand and scores it 8.6 — the pin changes *which Katchy the reader lands on*, not which brand is recommended. No rule-8 issue.
- **Link plumbing verified functional:** `lib/amazon.ts:54` prefers `asin` and emits `/dp/{asin}?tag=`, falling back to `/s?k=` only when `asin` is absent — so the pin is not a no-op and `search=` remains a live fallback if it is ever dropped.

**Cross-page opportunity (out of this batch's scope, not touched):** `app/blog/katchy-indoor-insect-trap-review-canada/page.tsx:105` carries `StickyBuyBar name="Katchy Indoor Insect Trap" search="katchy indoor insect trap"` with **no asin**, and its verdict is a positive 8.3/10. The same now-verified B07B6RZP4H applies there and it feeds off the same polluted search shelf. Candidate for the next wave.

**Minor drift in the pinning agent's report, non-material:** it logged the EcoRaider queries as 23 / 11 results; I measured 35 / 23. Amazon result counts vary by session. The finding that matters — **zero EcoRaider in either** — reproduced exactly. It also logged the audit-log append as 458 added / 0 removed; `git diff --numstat` now reads 580 / 0 because parallel agents appended to the same file. The append-only invariant holds.

---

## MANDATORY PRE-PIN CHECK, added 2026-09-02 after a near miss

**Search recalls-rappels.canada.ca for the brand + model BEFORE pinning any ASIN.**

A recall is invisible from the Amazon listing. B07C44DM6D (Dupray Neat Steam Cleaner)
presented as a textbook-clean pin: In Stock, 4.4 stars over 22,998 ratings, "500+ bought in
past month", buy box held by Dupray's own Canadian storefront, price inside the article's
stated band. It passed every Amazon-side check.

It is under an active Health Canada + US CPSC recall dated 2026-02-26 for **burn hazard from
boiler rupture** — model DUP020WNA, batches 0118-01 to 0425-05, 15 ruptures and 4 injuries
including a broken wrist, ~97,000 units sold in Canada. Health Canada's guidance is to stop
using it immediately.

The wave-4 auditor caught it. The pinning agent did not, because nothing on Amazon says so.

**Amazon-side verification can never surface a recall. Check the regulator.**

Also relevant: `best-wasp-nest-spray-canada` recommends Raid Max Wasp & Hornet Foam Bug
Killer 2 (PCP 30746), also under an active Health Canada recall for leaking cans. That page
now carries a recall notice.
