# Phase 2 — fixes applied

Source: `reports/link_health.csv` (25 ASINs checked live on amazon.ca 2026-09-23, 24 available, 1 unavailable, 0 not found).

## Applied

| page | element | was | now | why |
|---|---|---|---|---|
| /blog/best-indoor-fly-mosquito-trap-canada | StickyBuyBar + "Best Overall" award | ASIN `B07B6RZP4H` (Katchy Original, black) | search `katchy indoor insect trap uv fan` | ASIN returns HTTP 200 with no buy box (`unqualifiedBuyBox`); the white variant `B07M8VX4T9` is dead too. Dropping the ASIN lets both elements fall back to the search term already on the page, so the Katchy recommendation and all copy stay exactly as the owner wrote them. Sticky bar = the most-clicked element on the page, so this was a live leak on a mosquito-tag page. |

Token check vs HEAD: `asin=` 1 → 0 (the fix itself); every other affiliate token count unchanged.

## Deliberately NOT changed

- **Three `<BuyLink search="">` on the wasp pages** (`best-wasp-killer-canada` ×1, `best-wasp-nest-spray-canada` ×2, all "Ortho Wasp B Gon MAX"). Blanked on purpose in `257f841`: every amazon.ca search variant returned Raid or Ortho *ant* products, so the button sent readers to another brand. `BuyLink` renders nothing on an empty search — fail-closed. Re-check when Ortho lists the product on amazon.ca; until then leave blank.
- **`B0CXV32GKD` on /blog/best-spider-spray-canada** — label says "Doktor Doom Residual Insecticide Spray", the ASIN is "Doktor Doom Pro Max Spider Killer Plus, 1L" (in stock). Both are on-topic Doktor Doom products; which one the page should recommend is the owner's call (ops rule §1). Options: keep the ASIN and rename the label to "Doktor Doom Pro Max Spider Killer Plus", or drop the ASIN so the search term routes to the Residual product. **Owner decision — not applied.**
- **Katchy Duo `B08Y65R582`** as a replacement ASIN — rejected for now: the Duo adds a scent pod, so it is a different model from the "UV + fan + glue board" the page describes. Search link chosen instead.

## Not a defect, but worth knowing

- The site has only 25 distinct ASINs; 98.6% of the 2,648 links are search links. "Dead product" cannot explain the five $0 tags (dehumidifier/flies/sprayer/steamer/ant) — they carry 5 ASIN rows against 353 search rows. Search-term quality is the unverified variable there; the tick cluster is search-only.
- Low stock (not dead): `B0GL7Y575V` Midea dehumidifier, `B00BPTN6YC` RESCUE trap, `B009F1R0GC` Orbit sprinkler ("only 1 left"). Re-check next month via `scripts/monthly_review.mjs`.
