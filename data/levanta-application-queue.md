> # ⚠ READ data/levanta-catalogue-findings.md FIRST
>
> On 2026-09-02 the Levanta catalogue was inspected directly in the account (it is browsable
> before approval). Two of this document's assumptions need correcting:
>
> 1. **Canadian listings exist but are NOT ACTIVATED.** Every pest product checked resolves
>    on amazon.ca with a real price and rate — Harris bed bug killer is CA$84.07 at 20% =
>    **CA$16.81 per conversion, 7.6x our current average order** — but each is marked
>    "This product has not been activated on Levanta for Amazon Attribution". The catalogue
>    is not missing; a brand-side switch is off. **Ask each brand to activate amazon.ca as
>    part of the application** — that single request decides whether a partnership is worth
>    15% or 100% of its headline value.
> 2. **Rank 1 (Woodstream / Mosquito Magnet, est. $735/mo) was not found** in the catalogue.
>    Treat that row as unverified until searched in-account.
>
> Observed rates are in the findings file. Several are BELOW Amazon's own rate — Summit
> Mosquito Dunks is 3%, on this site's widest product footprint. The ranking method and the
> page/click mappings below remain sound; the brand availability and rate assumptions do not.

> ## CORRECTION APPLIED BEFORE SAVING — read this first
>
> This document states that **5.8% of affiliate-page clicks are US**. That figure is an
> **artifact of GSC dimension pruning** and it is wrong. Verified on the August window:
>
> | Method | US clicks |
> |---|---|
> | country dimension (complete) | **1,431 of 9,406 = 15.2%** |
> | page dimension + country=usa filter | 602 — captures only **42%** of real US clicks |
>
> The agent divided a *pruned* numerator by a *near-complete* denominator and got ~6%.
> **The true site-wide US share is 15.2%, and it has gone 3.5% -> 15.2% since May.**
>
> Two conclusions below therefore flip:
> - "a US-only brand is worth 6c on the dollar" -> closer to **15c and climbing**. Still a
>   real discount, but not the disqualifier this document treats it as.
> - "the brief's dual-marketplace rule doesn't apply to this site" -> **it does, and more
>   every month.** Prefer brands stocked on both .com and .ca.
>
> Everything else here — the click counts, hero-vs-inline splits, page mappings, the
> per-marketplace enrolment mechanic, and the honesty guardrails — stands.

# Levanta application queue

*Built 2026-09-02. Sources: `C:\Users\buzzs\buzzskito-website\data\affiliate-links.json` (2,365 links, hero placements + GSC 28d clicks per page) and `C:\Users\buzzs\buzzskito-website\data\gsc\monthly_pages_all.json` / `monthly_pages_usa.json` (country split, Jul–Aug 2026).*

---

## 1. Approval day — do this, ignore the rest

The moment the account clears, go to **Settings → User → Update Profile and check which Amazon marketplace it is set to, then set it to Amazon.ca** — 94.2% of the clicks on our 295 affiliate pages are Canadian (GSC, Jul–Aug: 13,490 clicks, only 781 from the US), so a brand that runs Levanta on the US marketplace only is worth about 6c on the dollar to us and the "one link monetises both markets" idea in the brief does not hold — Levanta enrolls brands *per marketplace*, invoices per marketplace, and most brands buy one region. Then re-check the Flowtron $39 figure on the CA instance, because if you saw it on the US instance it may not exist here. Then search the directory for these five names in this order — **Woodstream, Clam Outdoors, Flowtron/Armatron, Thermacell, Spectrum Brands** — clicking "Partner now" instantly wherever it appears (it is free and reversible) and submitting "Apply for access" where it doesn't, leading the Woodstream application with the fact that we hero their brands on **20 pages** (Mosquito Magnet 8, Victor 6, Havahart 2, plus DynaTrap if they own it). Then stop: rank 11 down is worth under $50/month each, and nothing on this list justifies changing a single word of a recommendation. Total realistic upside if *everything* approved on CA is ~$1,400/mo against $653 today — good, not transformational.

---

## 2. The queue

**Scoring:** `priority = $/conversion × hero-page clicks/mo × intent weight × experience multiplier`. Inputs shown in the Score column so you can check the arithmetic. $/conversion = basket midpoint × **10% assumed Levanta rate** (only Flowtron's 15% is verified). Clicks = GSC 28d on pages where the brand holds the **hero** slot (StickyBuyBar/AwardRow); inline-only mentions excluded. Intent = click-weighted (3.0 commercial query, 1.5 problem guide, 1.0 identification). Experience = 1.5 where you have hands-on trade standing, else 1.0. "Real $/mo" applies our measured order rate (3.41% of organic clicks = 295 orders on 8,663 blog clicks in Aug) plus a conversion haircut for high-ticket items (×0.2 over $400, ×0.35 $150–400, ×0.6 $50–150, ×1.0 under $50) — the raw score badly overstates $400 devices.

| # | Brand (parent) | What we'd sell | Pages served | Clicks/mo | $/conv (vs $2.21) | .com / .ca | Score = inputs | Real $/mo | Why apply |
|---|---|---|---|---|---|---|---|---|---|
| 1 | **Woodstream** (Mosquito Magnet) | Propane CO₂ traps $400–1,300 | 8 hero — led by `/blog/laser-mosquito-killer-photon-matrix-review` (1,482) | **1,597** | $45 · **20.4×** | .com ✓ / **.ca UNVERIFIED** | 45×1597×3.0×1.5 = **323,393** | **$735** | Our biggest page pointed at our biggest basket; one approval may also cover Victor, Havahart and (if they own it) DynaTrap |
| 2 | Clam Outdoors | Quick-Set hub shelters $250–450 | `best-screen-tent-canada` | 114 | $35 · 15.8× | both | 35×114×3.0×1.5 = 17,955 | $71 | Highest basket per click after rank 1; screen exclusion is real mosquito work |
| 3 | **Flowtron** / Armatron | BK-40D zapper $99–169 | `bug-zappers-canada-do-they-work` (103) + `flowtron-bug-zapper-canada` (3) | 106 | **$19.50 verified** · 8.8× | **same ASIN both** ✓ | 19.5×106×3.0×1.5 = 9,302 | $63 | The only rate you have actually seen; page already heroes it, so zero content change |
| 4 | Spectrum (Black Flag) | Foggers $60–250 + fogging liquid refills | `mosquito-fogger-canada` (135), `black-flag-electric-fogger-review-canada` (22) | 157 | $12 · 5.4× | .ca ✓, PMRA screen the liquids | 12×157×3.0×1.5 = 8,478 | $58 | Your strongest authority page + a recurring consumable; may cover Cutter/Repel/Hot Shot too |
| 5 | Vapamore | MR-100 Primo steamer $400–500 | `best-bed-bug-steamer-canada` (54) +2 | 63 | $45 · 20.4× | .com ✓ / .ca unverified | 45×63×2.93×1.0 = 8,307 | $28 | High basket, but exp 1.0 — bed-bug steamers are outside your kit; verify .ca before spending time |
| 6 | DynaTrap | DT3050 $249–329 | `dynatrap-canada-review` (63) + 9 mention pages | 63 | $28.90 · 13.1× | both ✓ | 28.9×63×3.0×1.5 = 8,193 | $33 | **Check ownership first** — if Woodstream owns it (research conflicts), it rides rank 1 for free |
| 7 | **Thermacell** | E-series/Liv repellers $35–229 + refill cartridges | 10 hero (256) / 26 total (2,025) | 256 | $9 · 4.1× | **both ✓ — brand's own 3P seller on .ca** | 9×256×2.26×1.5 = 7,811 | $53 | **The only brand with confirmed Levanta participation** and confirmed .ca seller status — highest probability row on the sheet |
| 8 | Biogents | BG-Mosquitaire $200–500 | `co2-mosquito-trap-canada` (45) +2 | 45 | $35 · 15.8× | .com ✓ / .ca thin & intermittent | 35×45×3.0×1.5 = 7,088 | $28 | German brand; if .ca stock is patchy this drops off the sheet entirely |
| 9 | Dupray | Steam cleaners $180–400 | 6 hero — `dupray-vs-mcculloch` (26), `best-steam-cleaner-for-pest-control` (20) | 66 | $28 · 12.7× | **both ✓ — Montreal HQ, full .ca store** | 28×66×2.93×1.0 = 5,415 | $32 | Best native-Canadian marketplace position on the list; bed-bug pages only, never yard |
| 10 | ZappBug | Heat chambers $350–500 | 8 hero (43) | 43 | $42 · 19× | .com ✓ / .ca unverified | 42×43×2.63×1.0 = 4,750 | $16 | Score flatters it — 43 clicks at a 0.2 haircut is under 1 order/mo |
| 11 | Sawyer | 0.5% permethrin clothing spray, picaridin $24–38 | `permethrin-canada-yard-clothing-spray` (270) +2 | 294 | $3.10 · 1.4× | both, **.ca stock intermittent** | 3.1×294×3.0×1.5 = 4,101 | $47 | Best low-ticket row; **clothing and gear only** — yard permethrin is licensed-applicator class in Ontario |
| 12 | Orbit Irrigation | Yard Enforcer sprinkler $70–150 | `raccoon-deterrent-canada` (74), `motion-activated-sprinkler-canada` (51) | 125 | $11 · 5× | both ✓ | 11×125×2.11×1.0 = 2,901 | $30 | Two pages, one application; exp 1.0 — wildlife deterrence isn't your trade |
| 13 | PetraTools | Battery backpack sprayers $150–300 | 7 hero (24) | 24 | $22 · 10× | **.com only — no .ca found** | 22×24×3.0×1.5 = 2,376 | $9 | **BLOCKED.** Best Levanta profile on the list, but with 5.8% US traffic a .com-only brand earns ~$0.50/mo here |
| 14 | SC Johnson (Raid/OFF!) | Wasp foam, OFF! Botanicals $8–18 | `best-wasp-nest-spray-canada` (259) +2 | 342 | $1.30 · 0.6× | both | 1.3×342×3.0×1.5 = 2,001 | $23 | Directory check only — mega-CPG, almost certainly absent |
| 15 | Summit | Dunks / Bits BTI $10–25 | **19 hero** (324) / 31 total (2,092) | 324 | $1.80 · 0.8× | both ✓ (multiple .ca ASINs) | 1.8×324×2.27×1.5 = 1,986 | $23 | Widest honest footprint on the site and a true annual repeat purchase; apply on volume, not on rate |
| 16 | Wilson / Premier Tech | OneShot wasp foam $8–18 | `how-to-get-rid-of-ground-wasps-canada` (637) +2 | 637 | $1.30 · 0.6× | **.ca only — and that's fine** | 1.3×637×1.5×1.5 = 1,863 | $21 | Canada-only is not a disqualifier at 5.8% US share; the brief's dual-marketplace rule doesn't apply to this site |
| 17 | Sterling (RESCUE!) | WHY Trap $20–40 + 2-week lure refills | 4 hero (168) | 168 | $3.00 · 1.4× | both ✓ | 3.0×168×2.39×1.5 = 1,807 | $21 | Mid-size US brand = better Levanta odds than the CPGs above it; refill cycle lifts lifetime value |
| 18 | Tender (Natrapel + After Bite) | Picaridin, bite relief $8–15 | 5 hero (526) | 526 | $1.15 · 0.5× | both | 1.15×526×1.79×1.2 = 1,299 | $18 | Only way to brand the 318-click bite-relief cluster; per-conversion is below today's average order |
| — | **Tail (score <1,300)** | Executioner 1,253 · Chapin/Field King 1,134 · tick-tool brand 1,121 · Phifer mesh 991 · Henkel/Combat 965 · Doktor Doom 904 · ClimbUp 899 · CimeXa 774 · Wondercide 770 · Victor/Havahart 768 · Tomcat 124 | | | | | | $2–16 each | Partner-now only. Never spend an application form on these. |

**Guardrails that must survive approval** — these are what the 10.4% conversion rests on: keep the bug-zapper debunk and the "If you must buy one" label, and do **not** push the $259 2-acre over the $99 BK-40D; keep `dynatrap-canada-review` scoped as best-*within-class* and keep its Mosquito Magnet recommendation even if DynaTrap approves and Woodstream doesn't; keep the "buy the cheap Coleman instead" down-sell on the screen-tent page; keep the disclosure that Canadian Tire beats Amazon.ca on Dunks; keep the Thermacell hero at 96% depth on `mosquito-season-gta` — that page's job is booking a treatment.

---

## 3. Do not bother

- **Ortho / Scotts Miracle-Gro** — flagship US SKUs (Home Defense Max, bifenthrin) were never PMRA-registered, and bifenthrin is banned for cosmetic yard use in Ontario. 1P CPG vendor, so Levanta is unlikely anyway. The site already handles this correctly by heroing Bug B Gon ECO. *One live item though:* `best-wasp-nest-spray-canada` (259 clicks) carries two "ortho home defense hornet wasp killer" Amazon.ca search links — confirm that search resolves to a Canada-registered product.
- **Spectracide / Cutter / Repel** — same unresolved PMRA screen; Triazicide is a pyrethroid in the class restricted in Ontario. Two links each. If Spectrum approves via Black Flag (rank 4) these come along free; never submit separately.
- **Zevo (P&G)** — 2 pages, 67 clicks, indoor houseflies not mosquitoes. P&G runs enterprise 1P affiliate programmes; it appearing in a self-serve creator directory would be anomalous.
- **Levoit / Coway / Aprilaire / dehumidifiers** — 1 page, 6 clicks. A HEPA purifier does nothing to a mosquito. Putting these on pest pages for the basket size is exactly the "worse product for higher commission" failure. Only revisit if dedicated indoor-air-quality pages ever exist.
- **Terro / Safer Brand** — same parent as rank 1. Ride the Woodstream approval; do not use a second application slot.
- **Tomcat / Scotts** — score 124, $2/mo, no hero component on either page, and rodent work is outside your domain. If Woodstream approves, Victor covers these pages instead.
- **Chasing US-only programmes generally** — measured US share on our affiliate pages is 5.8%. A US-only Levanta partnership converts a $735/mo brand into a $43/mo brand.
- **The unbranded clusters** — 498 clicks of tick-removal tools and 319 clicks of hydrocortisone have no brand to apply to. Leave hydrocortisone unbranded permanently: it is a drugstore pharmaceutical, outside your trade, and the least defensible place on the site for a commission incentive. Tick tools are genuine trade experience — brand them only if TickCheck/TickEase/Tick Twister actually appear in the directory.

---

## 4. Confidence

**Hard evidence (trust these):** every click figure, page count and hero-vs-inline split — pulled from our own `affiliate-links.json` and GSC, not estimated. The 5.8% US share — GSC country dimension, and it **corrects the 63%/78%/87% per-page US estimates in the brief**, which were Ahrefs guesses (the laser page is actually 20% US, `bugs-that-look-like-ticks` 18%, `no-see-um-bites` 18%). The $3.41-per-100-clicks order rate — derived from your actual August: $653 ÷ $2.21 = 295 orders over 8,663 blog clicks. Flowtron's 15% — you saw it in-account. Thermacell's Levanta participation — confirmed by an independent agency case study, not inferred. Thermacell and Flowtron .ca presence — verified ASINs.

**Inference, flag it as such:** every commission rate except Flowtron's is a flat 10% assumption; real Levanta rates run 5–20% and are set per brand, so any row could be half or double what's shown. "Runs Levanta" is **unknown for 27 of the 29 rows** — the directory is login-gated, so nothing external can settle it and five minutes logged in beats any further research. The high-ticket conversion haircut is my judgment, not measured. Brand-parent groupings (does one Woodstream approval really cover Victor and Havahart? does Chapin own Field King? does Woodstream own DynaTrap — the two research sources disagree) are unconfirmed.

**The weak point is rank 1, and you should know it before you build anything on it.** 1,482 of its 1,597 clicks — 93% — come from a single page, Woodstream's Levanta status is unknown, and I could not verify that Mosquito Magnet is listed on amazon.ca at all. It is also a $400–1,300 propane appliance with ongoing attractant costs, mixed real-world results and a 2018 CPSC recall on the trap line. If the .ca listing is missing, the top row of this queue is worth roughly $43/month, not $735, and Thermacell — confirmed on Levanta, confirmed on .ca, $53/mo — becomes the honest #1.