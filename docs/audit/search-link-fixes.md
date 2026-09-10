# Search-link fixes — 2026-09-10

Every affiliate link on this site is an Amazon.ca **search**, not a product link, so the product
a reader lands on is whatever Amazon ranks for that string on the day. This pass checked where
the high-traffic strings actually land and rewrote the ones that land on the wrong product.

## How it was checked

- Ranked all **997 distinct search strings (3,259 links on 304 pages)** by the GSC clicks of the
  pages carrying them. The top 45 strings carry **76% of all affiliate traffic**.
- Checked ~45 strings live on amazon.ca, reading the top five results for each, including which
  are paid ads.
- Used the built-in preview browser, **not** the owner's logged-in Chrome, so these lookups are
  not tied to the Associates account. Paced ~2 seconds apart; no bot-block was hit.
- Every replacement string was itself checked live before it was applied.

## What changed — 76 search values on 26 pages

| Old string | New string | Links | Why |
|---|---|---|---|
| `mosquito magnet trap` | `mosquito magnet patriot plus` | 21 | #5 string by traffic. Readers saw **four unrelated ads** (fruit-fly trap, zapper, sticky monitors) before the real product. New string: Patriot Plus #1, Executive #2, **no ads**. |
| `safers diatomaceous earth` | `safers insect killing diatomaceous earth` | 37 | Three ads first — two for food-grade DE, which earns 2% or less and is not a registered insecticide. New string puts the **same Safer's product at #1 with no ads**. |
| `tick twister removal tool` | `otom tick twister` | 13 | No Tick Twister in the top five — a different brand appeared first. New string: the actual Tick Twister is the first normal result. |
| `ortho wasp b gon max` | *(blank — renders no button)* | 5 | **Wasp B Gon is not sold on Amazon.ca.** Every variant returned Raid wasp spray or Ortho's ant products, so a button labelled "Ortho Wasp B Gon MAX" sent readers to a different brand. This string was introduced by this project earlier on 2026-09-09 and never verified. The pick card and its text stay; only the misleading button is gone. |

On every changed file: affiliate element count, line count and tracking-tag references are
identical before and after, and each changed line differs only in its search value. The built
site was checked for zero surviving links on the old strings and zero untagged Amazon links.

## Checked and fine — no change

Summit Mosquito Dunks, Mosquito Dunks BTI, Thermacell Patio Shield, Thermacell mosquito
repeller, Thermacell E90, Wilson ONE Shot, Raid wasp & hornet, Rescue WHY trap, Tomcat rat
station, Flowtron BK-40D, bed bug interceptors. All land on the product the page names.

## Deliberately left alone

- **Combat roach bait** (`combat roach killing bait stations`, 17 links). Today it lands Combat
  Max as the first normal result; tested alternatives only differed in which ads showed, which
  changes by the hour. The research note that it returned "zero Combat products" did not
  reproduce. Also: the listing readers land on is titled **"Co-mbat Max, Roach-Kil-ling Bait"**,
  a hyphenation pattern that often means a reseller evading brand filters. Not worth steering
  harder toward it with a more specific string.
- **Wilson Wasp Out** (8 links). Amazon.ca has no separate Wasp Out listing; every Wasp Out search
  lands on Wilson ONE Shot foam, which is the best available match.

## Needs the owner — product choices, not link fixes

1. **Three recommended products are not on Amazon.ca**, so their buttons land on something else:
   - *Victor M250S electronic mouse trap* (7 links, 3 pages) → lands on a Rat Zapper / OWLTRA trap.
   - *Combat ant killing bait stations* (7 links, 2 pages) → no Combat ant bait exists; lands on
     Raid and Terro, and the pages specifically recommend **protein** bait, which Terro's liquid is not.
   - *Doktor Doom Sleep Tight bed bug spray* → lands on Doktor Doom Pro Max, a different product.
   Options per product: keep the pick and relabel the button to what it returns, drop the button,
   or pick a product Amazon.ca carries.
2. **Wilson registration.** Health Canada lists **Wilson Wasp Out Jet Foam Wasp & Hornet Killer
   as PCP 31899, currently registered** — so the "Best Overall" wasp pick is legitimate. But the
   Amazon.ca listing readers actually buy (Wilson ONE Shot Wasp Spray Foam, ASIN B00LM93R58, the #5
   best-seller) shows **no PCP number**, and of Wilson's ONE Shot wasp registrations two are
   historical (26201, 26844) and one is current (30192, ONE Shot Long Shot). Which one that
   listing is cannot be told from the page.
3. **Food-grade diatomaceous earth** is still recommended by name on a few pages
   (`diatomaceous earth food grade` and similar, ~6 links). Food-grade DE is not a registered
   insecticide and earns 2% or less. Changing it changes what the page recommends, so it is left
   for a decision.

## Honest size of the gain

Not measurable yet, and probably modest. The earlier research put the whole relevance leak at
~$89/month as an upper bound, with only two mechanisms verified. What this pass guarantees is
narrower and certain: 71 links now land on the product their page names instead of on ads or a
different brand, and 5 buttons no longer send readers to the wrong brand.
