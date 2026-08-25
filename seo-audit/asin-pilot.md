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

## Skipped — search link kept (12 pages)

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

## Quarterly link-check instructions

For each pinned ASIN: confirm (1) listing live, (2) actually in stock, (3) price not
3P-gouged (compare against the "Verified" column), (4) seller still first-party/brand
where noted. A page whose dp goes "Currently unavailable" should have its `asin` prop
removed (the `search` fallback takes over automatically — no other change needed).
Re-check the skipped pages too: Vapamore, Zareba, Frigidaire, and hOmeLabs stock
comes and goes on .ca — any that return healthy first-party can be pinned then.
