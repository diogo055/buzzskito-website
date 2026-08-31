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
