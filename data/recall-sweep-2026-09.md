# Product safety recall sweep — September 2026

Every product this site carries a **direct purchase link** to (23 distinct ASINs across 27
placements), checked against Health Canada `recalls-rappels.canada.ca`, US CPSC
`cpsc.gov/Recalls` and the CPSC `saferproducts.gov` API.

**Why this sweep exists:** we found the Dupray Neat Steam Cleaner recall by accident, while
an agent was refusing an unrelated pin. It was recommended as "Best Overall" on two live
pages. It had passed every Amazon-side check — In Stock, 4.4 stars over 22,998 ratings, sold
by the brand's own storefront. **A recall is invisible from an Amazon listing.** So the rest
had to be checked deliberately.

---

## Result: no other product is under an active recall

| Status | Count | Meaning |
|---|---|---|
| clear | 17 | No recall found in any source |
| related | 6 | A recall exists on the brand or a sibling model, but **not** this product |
| recalled | **0** | — |
| uncertain | 0 | — |

---

## The one item that needed action

**Mosquito Magnet Patriot Plus (B07QJY2NL1) and Executive (B07QFNSC8Z)** — on
`best-mosquito-trap-canada`, `mosquito-magnet-canada`, `laser-mosquito-killer-photon-matrix-review`.

CPSC recall **18-114** (6 March 2018) names these exact models. But it is scoped to serial
numbers **PT01438–PT01642** and **EX01444–EX01637**, from December 2014 – December 2016
production. Units built since carry the corrective brass check valve. Hazard: cleaning the
trap while still powered on with a Quick Clear Cartridge kit could damage the gas regulator
and propel fragments. **One incident, zero injuries.**

**Action taken:** a serial-check note on all three pages, aimed at second-hand buyers, since
a serial is not visible before purchase. **Not** a pull — a still-in-production product with
a zero-injury, serial-scoped 2018 action does not warrant one, and over-reacting would cost
the reader a genuinely good recommendation.

---

## The five "related" findings that need no action

- **TERRO liquid ant baits** (B014H8NZ7U) and **Havahart live trap** (B00004RAMT) — parent
  company Woodstream has the Mosquito Magnet recall above. Different brands, different
  product lines, not named in it.
- **Victor snap traps** (B0CQ8RSTC9) — same parent, checked specifically. CPSC has exactly
  one Woodstream recall ever and it covers propane traps only.
- **OFF! Botanicals lotion** (B0CWQ3G2RB) — a 2014 recall covered the *4 oz spritz bottle*
  variant (removable sprayer, ingestion risk). The notice explicitly excludes other OFF!
  Botanicals products; a lotion has no sprayer, and this SKU post-dates it by a decade.
- **Natrapel** (B0BYFF3S3V) — sibling-brand recall was on Easy Care AfterBurn Cream, a
  different brand and category. FDA has terminated it.

## Two live recalls elsewhere in this niche, already handled

- **Raid Max Wasp & Hornet Foam Bug Killer 2** (PCP 30746) — leaking cans, ~456,800 units.
  `best-wasp-nest-spray-canada` carries a notice. **Its Best Overall pick is still this
  product family — an editorial decision for the owner.**
- **Dupray Neat Steam Cleaner** (B07C44DM6D) — boiler rupture, 15 ruptures, 4 injuries.
  Pins removed from two pages, recall notices added.

## Checked and clear on the wider niche

**STEM Zone** (SC Johnson) has an active June 2026 US recall for incorrect repellent-oil
mixture and undisclosed ingredients. Grepped the whole site: **zero mentions.** No exposure.

---

## Two methodological cautions worth carrying forward

**1. Health Canada's public database is not complete.** It returned *nothing* for the
Mosquito Magnet recall, even though a bilingual Canadian distributor letter demonstrably
exists (canadamosquito.com/recall, 7 March 2018). An absence there is **not** evidence of
absence. Agents validated the endpoint with a positive control — searching "Dupray"
correctly returned the known recall — so the tool works; the coverage does not.

**2. Brand-name collisions produce false positives.** "Orbit" returned recalls for Orbit
Baby car seats, Orbit hoverboards and Orbit sprinkler O-rings from three unrelated
companies. Filter by manufacturer, not brand string.

**Gap not closed:** the Tick Twister is French-made (H3D). An EU-only action would sit in
the EU Safety Gate / RAPEX register, which was not searched.

---

## Standing rule now in `seo-audit/asin-pilot.md`

> Before pinning any ASIN, search `recalls-rappels.canada.ca` and `cpsc.gov` for the
> **brand + model**. Amazon-side verification can never surface a recall.

Re-run this sweep quarterly, and whenever a new wave of pins ships. Bed-bug heaters deserve
particular attention — PackTite and ThermalStrike both had fire-hazard recalls in that exact
product class, from different manufacturers than the one we recommend.
