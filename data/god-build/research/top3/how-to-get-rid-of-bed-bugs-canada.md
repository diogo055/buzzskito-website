# Beat the top 3: "how to get rid of bed bugs in Canada" (Oct 28, 2026)

Page: `/blog/how-to-get-rid-of-bed-bugs-canada` (tier 3 Amazon page; Canadian half of the regional pair in `REGIONAL_PAIRS`,
`lib/guides.ts`, with the US guide `/blog/how-to-get-rid-of-bed-bugs`). Searches, 2026-07-28 to 2026-10-25, all countries
(queries-tier3.md): ontario bed bug treatments 5 at 19.2, bed bug pest control 1 at 25.0, diy canada 1 at 4.0 (0 clicks). Thin
data, so the main search is the page's own: how to get rid of bed bugs in Canada, plus Ontario treatment options.

Siblings sharing searches: the US guide (hreflang en-US, 'How to Get Rid of Bed Bugs: The EPA 6-Step Plan', keeps the US
searches; this page stays Canadian and was not retargeted), `/blog/how-to-get-rid-of-bed-bugs-yourself-diy-canada` (DIY kit,
bed bug treatment searches), `/blog/bed-bug-control-canada-hub`, `/blog/how-to-get-rid-of-bed-bugs-in-apartment-canada`.

## The results page (WebSearch, US index, Oct 28)
- #1 Health Canada "Bedbugs: how do I get rid of them?", then pesthq.ca, a Toronto squarespace page, Terminix Canada,
  HomeStars, Orkin Canada, Durham Region's myths PDF, mtlblog. Several spam results.

## The three, taken apart
1. **Health Canada (canada.ca), page dated 2015-02-27.** The authority: licensed professional "strongly recommended"; PCP
   number rule; bedbugs die at 50°C; dryer 30 minutes or more; -19°C for 4 days; ozone generators warning; tenant tells the
   landlord. No step-by-step home plan, no product examples, no photos of signs.
2. **PestHQ (Canadian store), undated, ~750 words.** 8 steps, each linked to its own products; DE called "one of the best bed
   bug killers in Canada" with no registration note; no PCP-number advice, no times or temperatures, no sources.
3. **Terminix Canada pest library, ~1,500 words.** Says DIY is "only temporary"; dryer 30 minutes; eggs hatch in about 7 days;
   no PCP or Health Canada mention, no sources, no landlord information.

## What none of them give, now on the page
- Answer-first hero: Health Canada's licensed-operator advice, then the plan and the "Start here" pick (encasement +
  interceptors).
- Sourced table "Bed bug treatments for Canadian homes, on the record" (8 rows: professional, dryer, steamer, freezing,
  encasement + interceptors, PCP-number dust, PCP-number spray, ozone/fogger), Health Canada + EPA + registry.
- "Which plan for your situation" list and an 8-point Canadian product checklist (PCP number, label sites, encasements,
  interceptors weekly, dry steamer, vacuum type, no ozone/fogger, no homemade pesticides).
- 3 FAQs: What bed bug treatments are available in Ontario? Should I call bed bug pest control or treat it myself? Which DIY
  bed bug products are legal in Canada? (registry examples: sprays 29339, 31110; DE dust 32674).
- Photos: bed-bugs-eggs-mattress-seam (PD, lead + share image), bed-bug-fecal-spots-bed-frame (CC BY 2.0, Step 1),
  bed-bug-fecal-stains-mattress (CC BY 2.0, Step 3).

## Corrected (false against the primary source)
- FAQ 3 freezing "days at around minus 18 C" -> Health Canada: 4 days of consistent cold at -19°C, may not kill all.
- CimeXa / silica dust as the Canadian residual (FAQ 3, Step 6, Quick Answer, bullet): Health Canada's registry has no CimeXa
  record and no domestic silica dust (silica aerogel products Drione 15255 and Protect-It 24259 are commercial); the home-use
  bed bug dusts are DE (Ortho Bed Bug B Gon Diatom 32674, DX 13 30973, Doktor Doom Be Green 32561, Knock Down 31143 and 31048).
- "Stick to products available on Amazon.ca and Canadian retailers" (FAQ 10, law section): being sold in Canada is not
  registration; replaced with Health Canada's rule (no PCP number, do not buy or use it).
- "PMRA-legal, Health-Canada-registered products" bullet -> products whose label shows a PCP number.

## Flags for the owner (affiliate boxes, not edited)
- AwardRow card 4 "Silica Desiccant Dust (e.g. CimeXa)" (search 'cimexa silica bed bug dust'), the plan table row
  "Silica desiccant (CimeXa)" and the "Silica dust" button: CimeXa is not in Health Canada's registry (searched Oct 28, 2026).
  Same finding as OWNER-DECISIONS.md row A.
- Schema description still says "PMRA-legal toolkit" (not visible; left).

## Sources opened (Oct 28, 2026)
- Health Canada, https://www.canada.ca/en/health-canada/services/pest-control-tips/bedbugs-how-do-i-get-rid-them.html
- EPA, https://www.epa.gov/bedbugs/do-it-yourself-bed-bug-control (updated Aug 10, 2026: six steps; dryer on high; DIY heat
  "might not work"; freezer 0°F three days; covers that seal mattresses and box springs; interceptors checked weekly; keep
  checking for at least a year; pool or food grade DE should not be used; foggers not the only method).
- Health Canada registry API (pest-control.canada.ca/pesticide-registry-api): CIMEXA 0 rows; ACTIVES SILICA (4, all
  commercial/technical/manufacturing); SILICON DIOXIDE + BED BUG + domestic (5 DE products); BED BUG + domestic (109).
- Competitors: pesthq.ca/blogs/bed-bugs/how-do-you-get-rid-of-bed-bugs ; terminix.ca/pest-library/bed-bugs. Not fetchable:
  homestars.com (403).
