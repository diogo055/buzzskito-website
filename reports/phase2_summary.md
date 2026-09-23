# Phase 2 — Amazon link health

Checked 2026-09-23 02:46–02:54 UTC against amazon.ca. Output: `reports/link_health.csv`. Report only — no page files were touched.

## Headline

**No in-scope ASIN is dead.** All 11 in-scope ASINs resolve with a live buy box. One out-of-scope ASIN is dead (the Katchy trap, below). Every tag string is a registered ID. A dead product is **not** the cause of the $0 tags — those tags barely use ASIN links at all (see coverage gap).

## Scope reality vs. the brief

The brief expected 40–150 ASINs. The site has **25 distinct ASINs in total** (35 `dp_asin` rows out of 2,648 links; 98.6% of links are `search` links), and **11** of them fall in scope:

| bucket | distinct ASINs |
|---|---|
| (a) on a $0-tag page (dehumidifier / flies / sprayer / steamer / ant) | 4 |
| (b) on a Top-50-earner page | 7 |
| both | 0 |
| **in scope** | **11** |
| out of scope, checked anyway (cost: 14 extra requests, ~1 min) | 14 |
| **checked** | **25** |

All 25 are in the CSV; the `note` column starts with `in_scope:…` or `out_of_scope_bonus`.

## Counts by status (all 25)

| status | count | of which in scope |
|---|---|---|
| available | 24 | 11 |
| unavailable | 1 | 0 |
| not_found | 0 | 0 |
| unknown | 0 | 0 |

25/25 requests returned HTTP 200 on the first attempt. No CAPTCHA, no 503, no retries, no redirects to a different ASIN.

## Unavailable / not_found ASINs

### B07B6RZP4H — Katchy Fruit Fly Trap (Katchy Original, black) — **unavailable**
- Page: `/blog/best-indoor-fly-mosquito-trap-canada` (StickyBuyBar, tag `buzzskito-mosquito-20`). Out of scope for this phase but a live revenue leak: the sticky bar's product has no offer.
- Evidence: HTTP 200, no `add-to-cart-button`, no `buy-now-button`, Amazon's `unqualifiedBuyBox` (no featured offer) rendered, only a "See All Buying Options" link.
- The Katchy Original in white, **B07M8VX4T9, is also dead** (same markers). Both Original listings are gone from amazon.ca.
- Suggested replacement, in order of preference:
  1. **convert to search link: `katchy indoor insect trap`** — keeps the page's Katchy recommendation intact and lets Amazon route to whatever Katchy listing is live. Safest; zero copy change.
  2. **B08Y65R582 — Katchy Duo, Indoor Fly Trap with Scent Pod** (verified 2026-09-23: add-to-cart + buy-now present). Alternative: **B08TKG5M4S** (same Duo, verified live, but "Only 3 left in stock"). Caveat: the Duo is UV + fan + glue board **plus a scent pod**; the page's anchor says "UV + fan + glue board", so switching the ASIN means the page points at a different Katchy model. That is the owner's commercial decision (ops rule §1) — hence option 1 first.

No `not_found` ASINs.

## Tag-string check

**No problems.** 15 distinct `tag` values appear in the CSV; every one is a byte-exact match to a registered ID (no whitespace, case or typo variants):
`buzzskito-mosquito-20` (677 rows), `-bedbug-20` (491), `-general-20` (483), `-tick-20` (191), `-rodent-20` (183), `-flies-20` (100), `-dehumidifier-20` (87), `-wildlife-20` (83), `-steamer-20` (75), `-fogger-20` (65), `-sprayer-20` (63), `-wasp-20` (60), `-roach-20` (50), `-ant-20` (33), `-airpurifier-20` (7).

The 16th registered ID, `buzzskito200b-20`, does not appear in the CSV because it is the env default (`PUBLIC_AMAZON_TAG`), used only by pages that pass no cluster tag — and all such pages in Phase 1 have zero Amazon links. `lib/amazon-clusters.ts` registers exactly the same 15 cluster IDs. `lib/levanta-links.ts` has no active entries, so no ASIN link has its tag swapped out.

## Unknown count and the real coverage gap

**0 unknown.** Coverage of the ASIN question is complete.

The gap is in what this method can see. On the five $0 tags:

| | rows |
|---|---|
| total link rows on $0-tag pages | 358 |
| `dp_asin` rows | 5 (4 distinct ASINs — all 4 **available**) |
| `search` rows | 353 (156 distinct search terms) |

A search link cannot be "dead" the way an ASIN can (amazon.ca/s never 404s), but it can land on empty or wrong results, and **this phase did not test search terms** — the brief's method is per-ASIN. So: dead products are ruled out as a cause for the $0 tags; search-term quality on those 156 terms is untested and is the obvious next check (156 requests ≈ 10 min at the 3 s throttle).

Same shape on the Top 50: **8 of 50 pages carry an ASIN link, 38 are search-only, 4 have no Amazon links at all.** The entire tick cluster — the money cluster — is search-only, so ASIN health cannot be a factor in any tick page's performance.

## Low-stock warnings (available today, may flip)

| ASIN | product | pages | scope |
|---|---|---|---|
| B0GL7Y575V | Midea Cube 50-pint dehumidifier | /blog/best-large-capacity-dehumidifier-canada | **in scope** (dehumidifier tag) — "Only 4 left" / "Only 1 left" |
| B00BPTN6YC | RESCUE! WHY trap | /blog/best-wasp-trap; /blog/how-to-get-rid-of-wasps-canada | bonus — "Only 1 left in stock", no "In Stock" |
| B08TKG5M4S | Katchy Duo (candidate replacement) | — | "Only 3 left"; prefer B08Y65R582 |

B00004RAMT (Havahart) and B009F1R0GC (Orbit) show "In Stock" with a secondary "Only 1 left" on a variant — fine.

## Other observations (not link-health defects, for the fix pass to be aware of)

1. **Three invisible buttons, not broken links.** `<BuyLink tag={AMZ_TAG} search="">` (empty search) on `app/blog/best-wasp-killer-canada/page.tsx:229` and `app/blog/best-wasp-nest-spray-canada/page.tsx:263,330` — all three are the Ortho Wasp B Gon MAX rows. `amazonUrl()` fails closed on an empty query and `BuyLink` renders nothing, so the reader sees no button at all. best-wasp-nest-spray-canada is Top-50 earner #12 ($4.07/mo). This may be deliberate (the comment in `lib/amazon.ts` describes exactly this case: product not sold on amazon.ca). Not changed; flagging so it is a decision rather than an accident.
2. **One label/product mismatch.** B0CXV32GKD is labelled "Doktor Doom Residual Insecticide Spray" on `/blog/best-spider-spray-canada` but amazon.ca's title is "Doktor Doom Pro Max Spider Killer Plus, 1L" — a different Doktor Doom SKU. On-topic for the page, but the page's claims should be checked against the product actually linked. Out of scope.
3. Every other anchor matches its Amazon title (e.g. "HD55-class" → AlorAir 55-pint/120 PPD; "Natrapel 20% Picaridin" → Natrapel Icaridin 100 mL; "SafeRest encasement" → SafeRest Zippered Encasement).

## Method

- `WebFetch` reaches amazon.ca but truncates the body before the buy box (it returned the title only), so per the brief's fallback every check used `curl -sL` with a Chrome 128 User-Agent and `Accept-Language: en-CA` against `https://www.amazon.ca/dp/<ASIN>`, saving the raw HTML and grepping it.
- One sequential loop, `sleep 3` between requests (measured 5–6 s apart including fetch time), one retry after 10 s on 503/429/CAPTCHA/timeout — never triggered. 25 product requests + 1 search + 4 candidate verifications = **30 requests total**, all ≥3 s apart.
- Classification: `available` = `id="add-to-cart-button"` or `id="buy-now-button"` present (availability span recorded); `unavailable` = HTTP 200 with neither button and either visible-text "Currently unavailable" or Amazon's `unqualifiedBuyBox`/`outOfStock` container; `not_found` = 404 or dog page; `unknown` = anything else. Note: the string "Currently unavailable" appears in Amazon's variant JSON dictionary on ~9 healthy pages — only the visible-text form counts.
- Raw HTML for every request is kept in the session scratchpad if any classification needs a second look.
