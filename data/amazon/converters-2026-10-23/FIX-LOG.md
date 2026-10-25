
## Rodent, roach and other pages

Fixed Oct 25, 2026 under FIX-BRIEF.md (owner: "Yes fix Amazon boxes"). Ten pages, all `app/blog/<slug>/page.tsx`. **50 lines changed.** Lines were replaced, never inserted, so each line number is the same before and after.

**Checks after editing** (against a copy of each file taken before editing; no git, no build):
- Line counts are unchanged.
- Counts of `<BuyLink`, `<AwardRow`, `<AwardCard`, `<StickyBuyBar`, `<AmazonLink`, `<TopPick`, `<TopBox`, `asin=`, `asin:`, `search=`, `search:` and `tag` are identical on all ten pages.
- Every tag and ASIN is unchanged.
- The only `search` changes are the four spider-page swaps.
- All ten files parse (TypeScript transpile only).

### advion-cockroach-gel-bait (6 lines)
**Evidence for every line:**
- OWNER-DECISIONS.md section A, row "advion-cockroach-gel-bait": "TopBox calls Combat roach bait the 'Legal consumer pick'". Writers recorded Combat PCP 26519 cancelled 2006, "not confirmed live".
- FIX-BRIEF rule: "If you cannot confirm a status, do not claim it either way; tell readers to check the PCP number on the label."
- **Product kept, not swapped:** the decisions file does not prove the cancellation, so the search term is unchanged.
- **Scope:** L131 and L132 carry the listed label. L295, L327, L332 and L336 make the same unconfirmed "legal" claim about Combat in this page's own boxes.

- **L131** (StickyBuyBar label)
  - Before: `<StickyBuyBar tag={AMZ_TAG} name="Combat roach killing bait stations (12-pack)" search="combat roach killing bait stations" label="Legal consumer pick" />`
  - After: `<StickyBuyBar tag={AMZ_TAG} name="Combat roach killing bait stations (12-pack)" search="combat roach killing bait stations" label="Consumer pick: check the PCP number" />`
  - Evidence: decisions row above (this is the listed item).
- **L132** (TopBox label; it mirrors the StickyBuyBar)
  - Before: `<TopBox tag={AMZ_TAG} name="Combat roach killing bait stations (12-pack)" search="combat roach killing bait stations" label="Legal consumer pick" />`
  - After: `<TopBox tag={AMZ_TAG} name="Combat roach killing bait stations (12-pack)" search="combat roach killing bait stations" label="Consumer pick: check the PCP number" />`
  - Evidence: decisions row above (this is the listed item).
- **L295** (table row with the Combat BuyLink)
  - Before: `<td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">The legal workhorse</strong></td>`
  - After: `<td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">The consumer workhorse</strong></td>`
  - Evidence: same claim, same product. The table intro (L261) already tells readers to confirm the PCP number.
- **L327** (AwardRow heading)
  - Before: `heading="Our Picks — The Legal Cockroach Toolkit"`
  - After: `heading="Our Picks — The Consumer Cockroach Toolkit"`
  - Evidence: the heading asserts that the picks are legal. Combat (and Raid Max: writers recorded 26645/27731 cancelled 2025, not confirmed) is unconfirmed.
- **L332** (AwardRow, Combat card)
  - Before: `why: 'The legal Canadian workhorse: enclosed, child-resistant stations pre-loaded with delayed-kill hydramethylnon bait, so foragers carry the dose back to the harbourage — the same core playbook as professional gel, in the format the consumer class allows.',`
  - After: `why: 'The consumer workhorse: enclosed, child-resistant stations pre-loaded with delayed-kill hydramethylnon bait, so foragers carry the dose back to the harbourage — the same core playbook as professional gel. Check the PCP registration number on the pack you receive before you use it.',`
  - Evidence: decisions row above, plus the FIX-BRIEF registration rule.
- **L336** (AwardRow, Combat card)
  - Before: `pros: ['Enclosed, child-resistant format — the class Canada permits', 'Cheap enough to deploy at the 12–24 station density that actually works'],`
  - After: `pros: ['Enclosed, child-resistant format', 'Cheap enough to deploy at the 12–24 station density that actually works'],`
  - Evidence: same unconfirmed status claim.

### best-spider-spray-canada (8 lines, swap)
**Evidence for every line:**
- OWNER-DECISIONS.md section B: "'Konk OnGuard' does not exist (lines 161-163, 227, 314, 335). Konk is Acuity's brand and OnGuard is UR-CAN's."
- **Swap target:** Knock Down Spider Killer, the registered alternative this page already recommends: "Reg. No. 29689 P.C.P. Act, domestic", in the page's registry table, L386-392.
- data/god-build/research/top3/best-spider-spray-canada.md: "'Knock Down residual insecticide spray' is fine (Knock Down Spider Killer 29689 is current)".
- **Search term:** reused from this page's own L234 (`knock down residual insecticide spray`). No term was invented.
- No other registered spray has a search term here or on a sibling page (grep of app/).
- **Kept:** element types, positions and tags. The Amazon element count is unchanged.
- L189 and L223 were changed so the box text matches the swapped links.

- **L161** (AwardRow, Best Alternative)
  - Before: `name: 'Konk OnGuard Residual Surface Spray',`
  - After: `name: 'Knock Down Spider Killer',`
  - Evidence: decisions row (listed line).
- **L162** (AwardRow, Best Alternative)
  - Before: `why: 'The other Canadian-market residual line you will actually find on shelves here — same perimeter and crack-and-crevice mission, mid-range price. If your local store stocks OnGuard or Knock Down instead of Doktor Doom, buy what is in front of you rather than importing anything; verify the PCP number as always.',`
  - After: `why: 'The other Canadian-market spider spray you will actually find on shelves here, for the same perimeter and crack-and-crevice job. Its label covers spiders and cockroaches inside buildings, and spiders outdoors “including under eaves, awnings and canopies”. If your local store stocks Knock Down instead of Doktor Doom, buy what is in front of you rather than importing anything; the brand sells several formulations, so check the PCP number and the label sites on the can.',`
  - Evidence: decisions row (listed line). The label quote comes from the page's registry table, L389 (label 2019-5838, read Oct 23).
- **L163** (AwardRow, Best Alternative)
  - Before: `search: 'konk onguard residual insecticide spray',`
  - After: `search: 'knock down residual insecticide spray',`
  - Evidence: decisions row (listed line). The term is reused from L234.
- **L189** (AwardRow whichToBuy)
  - Before: `... with the <em>Best Alternative</em> Konk OnGuard doing the same job where it is the brand on the shelf. ...`
  - After: `... with the <em>Best Alternative</em> Knock Down Spider Killer doing the same job where it is the brand on the shelf. ...` (the rest of the line is unchanged)
  - Evidence: it names the swapped card.
- **L223** (table row, product cell)
  - Before: `<td className="px-4 py-3 font-bold text-brand-800">Konk OnGuard residual<br /><span className="font-normal text-xs text-gray-500">Best alternative</span></td>`
  - After: `<td className="px-4 py-3 font-bold text-brand-800">Knock Down Spider Killer<br /><span className="font-normal text-xs text-gray-500">Best alternative</span></td>`
  - Evidence: the cell names the product its BuyLink (L227) now searches for.
- **L227** (table BuyLink)
  - Before: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="konk onguard residual insecticide spray" block>Check price on Amazon.ca →</BuyLink></td>`
  - After: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="knock down residual insecticide spray" block>Check price on Amazon.ca →</BuyLink></td>`
  - Evidence: decisions row (listed line).
- **L314** (picks button row)
  - Before: `<BuyLink tag={AMZ_TAG} search="konk onguard residual insecticide spray">Konk OnGuard →</BuyLink>`
  - After: `<BuyLink tag={AMZ_TAG} search="knock down residual insecticide spray">Knock Down →</BuyLink>`
  - Evidence: decisions row (listed line).
- **L335** (section BuyLink)
  - Before: `<BuyLink tag={AMZ_TAG} search="konk onguard residual insecticide spray">Check Konk OnGuard availability on Amazon.ca →</BuyLink>`
  - After: `<BuyLink tag={AMZ_TAG} search="knock down residual insecticide spray">Check Knock Down availability on Amazon.ca →</BuyLink>`
  - Evidence: decisions row (listed line).

### best-rodent-repellent-for-cars-canada (6 lines, relabel)
**Evidence for every line:**
- OWNER-DECISIONS.md section A, row "best-rodent-repellent-for-cars-canada": "Peppermint and tape picks | None registered | Relabel as 'not a registered repellent', or swap".
- data/god-build/research/top3/best-rodent-repellent-for-cars-canada.md (registry, Oct 23):
  - no capsaicin rodent tape is registered;
  - the only peppermint-oil product is a cancelled insect-repellent technical;
  - there is no current peppermint rodent repellent.
- **Relabelled, not swapped:** no registered alternative has a search term. Rodents Away Odor Free (PCP 33648) is named on the page (L313) but has no search term on this page or any sibling (grep of app/).

- **L122** (StickyBuyBar label, tape)
  - Before: `<StickyBuyBar tag={AMZ_TAG} name="Capsaicin rodent deterrent tape (Honda-style)" search="rodent deterrent tape capsaicin" label="Best overall" />`
  - After: `<StickyBuyBar tag={AMZ_TAG} name="Capsaicin rodent deterrent tape (Honda-style)" search="rodent deterrent tape capsaicin" label="Best overall · not a registered repellent" />`
  - Evidence: decisions row.
- **L123** (TopBox label, tape)
  - Before: `<TopBox tag={AMZ_TAG} name="Capsaicin rodent deterrent tape (Honda-style)" search="rodent deterrent tape capsaicin" label="Best overall" />`
  - After: `<TopBox tag={AMZ_TAG} name="Capsaicin rodent deterrent tape (Honda-style)" search="rodent deterrent tape capsaicin" label="Best overall · not a registered repellent" />`
  - Evidence: decisions row.
- **L152** (AwardRow, tape card)
  - Before: `why: 'Electrical tape infused with hot-pepper extract, developed after chronic wiring-chew warranty claims. Wrap the harness runs mice reach and the first bite is aversive enough to end the taste test — passive, weather-proof, and it never fades into background smell.',`
  - After: `why: 'Electrical tape infused with hot-pepper extract, developed after chronic wiring-chew warranty claims. Wrap the harness runs mice reach and the first bite is aversive enough to end the taste test — passive, weather-proof, and it never fades into background smell. Not a registered repellent: Health Canada’s pesticide registry lists no capsaicin rodent tape.',`
  - Evidence: decisions row and the research notes.
- **L171** (AwardRow, peppermint card)
  - Before: `why: 'Concentrated peppermint sachets for the cabin, trunk, and engine bay. Real aversion at high concentration, but the honest read is that the effect fades within weeks as the oil evaporates — the weakest evidence of our four picks, and priced accordingly.',`
  - After: `why: 'Concentrated peppermint sachets for the cabin, trunk, and engine bay. Real aversion at high concentration, but the honest read is that the effect fades within weeks as the oil evaporates — the weakest evidence of our four picks, and priced accordingly. Not a registered repellent: Health Canada’s registry lists no peppermint rodent repellent, so check the PCP number on any product you buy.',`
  - Evidence: decisions row and the research notes.
- **L216** (table row with the tape BuyLink)
  - Before: `<td className="px-4 py-3 font-bold text-brand-800">Capsaicin tape<br /><span className="font-normal text-xs text-gray-500">Honda-style deterrent tape</span></td>`
  - After: `<td className="px-4 py-3 font-bold text-brand-800">Capsaicin tape<br /><span className="font-normal text-xs text-gray-500">Honda-style deterrent tape; not a registered repellent</span></td>`
  - Evidence: decisions row.
- **L230** (table row with the peppermint BuyLink)
  - Before: `<td className="px-4 py-3 font-bold text-brand-800">Peppermint pouches<br /><span className="font-normal text-xs text-gray-500">Essential-oil sachets</span></td>`
  - After: `<td className="px-4 py-3 font-bold text-brand-800">Peppermint pouches<br /><span className="font-normal text-xs text-gray-500">Essential-oil sachets; not a registered repellent</span></td>`
  - Evidence: decisions row.

### best-raccoon-live-trap-canada (10 lines)
**Evidence for every line:**
- OWNER-DECISIONS.md section B: "'X-Large, ~32-inch' is wrong. Havahart's X-Large (1081) is 42 inches, and the Duke pick (HD Large 1112) is 28 inches."
- The amazon.ca listing for the box's ASIN B00004RAMT, read Oct 25, 2026 (https://www.amazon.ca/dp/B00004RAMT), is titled "Havahart 1079SR Live Animal Professional-Style One-Door Raccoon, Groundhog, Opossum, and Stray Cat Cage Trap".
- Havahart's 1079 page (https://www.havahart.com/large-1-door-animal-trap-1079, read Oct 25) names it the "Havahart® Large 1-Door Animal Trap" with "Dimensions: 32 in x 10 in x 12 in", and lists raccoons.
- When a box has both an ASIN and a search, the ASIN wins (`amazonUrl` in lib/amazon.ts). So the StickyBuyBar, TopBox and Best Overall card link to the 32-inch Large, and the wrong word was "X-Large". The real size is 32 inches.
- Duke sizes come from the page's own maker-size table (https://www.duketraps.com/cage-traps, checked Oct 23): HD Large 1112 is 28 × 12 × 12 in; HD X-Large 1114 is 36 × 15 × 14 in, "Duke lists it for large raccoons".
- The page body already names the 36-inch HD X-Large as the value pick.
- **Unchanged:** the ASIN and every search.

- **L114** (StickyBuyBar)
  - Before: `<StickyBuyBar tag={AMZ_TAG} name="Havahart X-Large one-door live trap" asin="B00004RAMT" search="havahart xl one door live trap raccoon" label="Best overall" />`
  - After: `<StickyBuyBar tag={AMZ_TAG} name="Havahart Large one-door live trap (1079, 32 in)" asin="B00004RAMT" search="havahart xl one door live trap raccoon" label="Best overall" />`
  - Evidence: the amazon.ca title and the Havahart 1079 page.
- **L115** (TopBox)
  - Before: `<TopBox tag={AMZ_TAG} name="Havahart X-Large one-door live trap" asin="B00004RAMT" search="havahart xl one door live trap raccoon" label="Best overall" />`
  - After: `<TopBox tag={AMZ_TAG} name="Havahart Large one-door live trap (1079, 32 in)" asin="B00004RAMT" search="havahart xl one door live trap raccoon" label="Best overall" />`
  - Evidence: the amazon.ca title and the Havahart 1079 page.
- **L143** (AwardRow, Best Overall)
  - Before: `name: 'Havahart X-Large One-Door Live Trap',`
  - After: `name: 'Havahart Large One-Door Live Trap (1079)',`
  - Evidence: same.
- **L144** (AwardRow, Best Overall)
  - Before: `why: 'The reference raccoon trap: a ~32-inch galvanized body long enough that a full-grown adult steps all the way onto the trip plate before the door drops, with heavy mesh a raccoon cannot bend or reach through. A single spring-loaded door and a smooth interior make it reliable and humane.',`
  - After: `why: 'The reference raccoon trap: Havahart lists the Large 1-Door (1079) at 32 × 10 × 12 inches, a galvanized body long enough that a full-grown adult steps all the way onto the trip plate before the door drops, with heavy mesh a raccoon cannot bend or reach through. A single spring-loaded door and a smooth interior make it reliable and humane.',`
  - Evidence: the Havahart 1079 page.
- **L154** (AwardRow, Best Value)
  - Before: `name: 'Duke Heavy-Duty Large Cage Trap',`
  - After: `name: 'Duke Heavy-Duty Cage Trap (HD X-Large)',`
  - Evidence: decisions row and the Duke sizes.
- **L155** (AwardRow, Best Value)
  - Before: `why: 'A rugged large cage trap with a footprint close to the top pick at a lower price. Solid steel construction and a dependable gravity door make it the sensible buy when you want a genuine adult-raccoon size without the premium-brand markup.',`
  - After: `why: 'A rugged heavy-duty cage trap at a lower price. Solid steel construction and a dependable gravity door make it the sensible buy without the premium-brand markup, as long as you get the right size: Duke lists its HD X-Large (1114) at 36 × 15 × 14 inches for large raccoons, while its HD Large (1112) is 28 inches, 4 inches short of this guide’s 32-inch rule.',`
  - Evidence: decisions row and the Duke sizes.
- **L159** (AwardRow, Best Value)
  - Before: `cons: ['Finish less refined than premium brands', 'Confirm the large/XL size, not the mid'],`
  - After: `cons: ['Finish less refined than premium brands', 'Buy the 36-inch HD X-Large, not the 28-inch HD Large'],`
  - Evidence: the Duke sizes.
- **L191** (AwardRow whichToBuy)
  - Before: `... The <em>Best Overall</em> Havahart XL one-door is the safest catch for a full-grown adult. <strong>Want the same size for less?</strong> The <em>Best Value</em> Duke large cage delivers. ...`
  - After: `... The <em>Best Overall</em> Havahart Large one-door (32 inches) is the most reliable catch for a full-grown adult. <strong>Want a heavy-duty cage for less?</strong> The <em>Best Value</em> Duke delivers in its 36-inch HD X-Large size (its HD Large is 28 inches). ...` (the rest of the line is unchanged)
  - Evidence: the sizes above. "safest" became "most reliable" under the banned-claims rule, in a line already being edited.
- **L225** (table row with the Duke BuyLink)
  - Before: `<td className="px-4 py-3 font-bold text-brand-800">Large heavy-duty<br /><span className="font-normal text-xs text-gray-500">Duke cage trap</span></td>`
  - After: `<td className="px-4 py-3 font-bold text-brand-800">Heavy-duty X-Large<br /><span className="font-normal text-xs text-gray-500">Duke HD X-Large, 36 in</span></td>`
  - Evidence: the Duke sizes.
- **L228** (same row)
  - Before: `<td className="px-4 py-3 text-gray-700">Confirm the large size, not the mid</td>`
  - After: `<td className="px-4 py-3 text-gray-700">Buy the 36-inch HD X-Large; Duke&rsquo;s HD Large is 28 inches</td>`
  - Evidence: the Duke sizes.

### best-battery-backpack-sprayer-canada (1 line)
- **L170** (AwardRow, Petra card)
  - Before: `why: 'The most tank and runtime for the money. A full 4-gallon (15 L) capacity and usable lithium runtime at a homeowner-friendly price — ideal if you want battery convenience across a big yard without paying pro-grade prices.',`
  - After: `why: 'The most tank and runtime for the money. A full 4-gallon (15 L) capacity and the longest rated runtime of the three (PetraTools lists 6–8 hours per charge from its 12V 8 Ah lead-acid battery) at a homeowner-friendly price — ideal if you want battery convenience across a big yard without paying pro-grade prices.',`
  - Evidence:
    - OWNER-DECISIONS.md section B: "AwardRow (line 170) says lithium. PetraTools says the HD4000 is a 12V 8Ah lead-acid."
    - PetraTools HD4000 page, cited in the page's spec table (https://www.petratools.com/products/petratools-hd4000-battery-powered-backpack-sprayer, read Oct 23): 12V 8 Ah lead-acid, 6–8 hours.
    - The new wording follows the page's own L312.

### best-pump-pressure-sprayer-canada (7 lines)
**Evidence for every line:**
- OWNER-DECISIONS.md section B: "Pump-sprayer ... boxes repeat claims the checkers cut from the page text (pump lines 122-123, 151-156, 189, 234, 282)".
- **The cut claim:** in the Oct 23 converter push the page text lost "both Chapin and Solo build exactly to that spec" (Viton) and "both brands make Viton-sealed models". It now reads "Chapin names no Viton model on its own site (its basic 2-gallon SureSpray lists nitrile seals)".
- Chapin 20002: https://chapinusa.com/shop/tank-sprayers/20002-2-gallon-garden-sprayer/ (nitrile, "compatible with standard lawn and garden chemicals").
- **Kept:** "Funnel-top", which the checkers left in the page text.

- **L122** (StickyBuyBar)
  - Before: `<StickyBuyBar tag={AMZ_TAG} name="Viton-sealed hand-pump tank sprayer (Chapin / Solo)" search="chapin viton pump sprayer 2 gallon" label="Best overall" />`
  - After: `<StickyBuyBar tag={AMZ_TAG} name="Chapin 2-gallon tank sprayer: check for Viton seals" search="chapin viton pump sprayer 2 gallon" label="Best overall" />`
  - Evidence: decisions row (listed line).
- **L123** (TopBox)
  - Before: `<TopBox tag={AMZ_TAG} name="Viton-sealed hand-pump tank sprayer (Chapin / Solo)" search="chapin viton pump sprayer 2 gallon" label="Best overall" />`
  - After: `<TopBox tag={AMZ_TAG} name="Chapin 2-gallon tank sprayer: check for Viton seals" search="chapin viton pump sprayer 2 gallon" label="Best overall" />`
  - Evidence: decisions row (listed line).
- **L151** (AwardRow, Best Overall)
  - Before: `name: 'Chapin 2-Gallon Viton-Sealed Tank Sprayer',`
  - After: `name: 'Chapin 2-Gallon Tank Sprayer',`
  - Evidence: decisions row (listed line).
- **L152** (AwardRow, Best Overall)
  - Before: `why: 'The sweet-spot size for a typical Canadian yard, with Viton seals that survive aggressive concentrates and a funnel-top tank that is easy to fill without spills. Widely stocked across Canadian retailers, so replacement parts are never far away.',`
  - After: `why: 'The sweet-spot size for a typical Canadian yard, with a funnel-top tank that is easy to fill without spills. Widely stocked across Canadian retailers, so replacement parts are never far away. Check the seals before you buy: Chapin names no Viton model on its own site and rates the nitrile seals on its basic 2-gallon SureSpray for standard lawn and garden chemicals, so choose a listing that names Viton for harsher products.',`
  - Evidence: decisions row (listed line) and Chapin 20002. The wording mirrors the page's L267.
- **L156** (AwardRow, Best Overall)
  - Before: `pros: ['Viton seals resist oils and solvents', 'Ideal 2-gallon size for a suburban yard', 'Easy to find + cheap parts in Canada'],`
  - After: `pros: ['Ideal 2-gallon size for a suburban yard', 'Easy to find + cheap parts in Canada'],`
  - Evidence: decisions row (listed line).
- **L189** (AwardRow whichToBuy)
  - Before: `... The <em>Best Overall</em> Chapin 2-gallon Viton model does nearly everything and is the easiest to find and service in Canada. ...`
  - After: `... The <em>Best Overall</em> Chapin 2-gallon does nearly everything and is the easiest to find and service in Canada; pick a listing that names Viton seals. ...` (the rest of the line is unchanged)
  - Evidence: decisions row (listed line).
- **L282** (picks button row)
  - Before: `<BuyLink tag={AMZ_TAG} search="chapin 2 gallon viton pump sprayer">Chapin 2-gallon (Viton) →</BuyLink>`
  - After: `<BuyLink tag={AMZ_TAG} search="chapin 2 gallon viton pump sprayer">Chapin 2-gallon →</BuyLink>`
  - Evidence: decisions row (listed line).
- **L234: left unchanged.**
  - Its visible text ("Check price on Amazon.ca →", in the "2-gallon tank / Chapin / Solo, ~8 L" row) makes no Viton claim.
  - "viton" appears only inside the search term, which this brief keeps.

### best-patio-heater-canada (2 lines)
**Evidence for both lines:**
- OWNER-DECISIONS.md section B: "Pump-sprayer and patio-heater boxes repeat claims the checkers cut from the page text (... patio 138, 213)".
- **The cut claim:** in the Oct 23 converter push the page text lost "a circle roughly 9 to 12 feet across". It now reads "warms a group seated close around it".
- **Kept:** the running-cost figures on L213 (the page text still has them at L115 and L286).

- **L138** (AwardRow, propane tower card)
  - Before: `pros: ['Warms a 9–12 ft circle, not just one chair', 'Goes anywhere — no outlet needed', 'Cheapest way to buy a lot of heat'],`
  - After: `pros: ['Warms a group seated close around it, not just one chair', 'Goes anywhere — no outlet needed', 'Cheapest way to buy a lot of heat'],`
  - Evidence: decisions row (listed line).
- **L213** (buy table row)
  - Before: `{ type: 'Propane tower (mushroom top)', out: '46,000–50,000 BTU', zone: '~9–12 ft circle', cost: '~$2.50–$4.00/hr', best: 'Open decks, groups, no wiring', search: 'propane patio heater 48000 btu tower' },`
  - After: `{ type: 'Propane tower (mushroom top)', out: '46,000–50,000 BTU', zone: 'A group seated close around it', cost: '~$2.50–$4.00/hr', best: 'Open decks, groups, no wiring', search: 'propane patio heater 48000 btu tower' },`
  - Evidence: decisions row (listed line).

### best-steam-cleaner-for-pest-control-canada (3 lines)
**Evidence for every line:**
- OWNER-DECISIONS.md section B: "Vapamore 'continuous fill' is false. Its manual says to cool down before removing the water tank cap."
- Vapamore MR-100 Primo specifications (https://www.vapamore.com/pages/mr-100-primo-steam-cleaning-system) list one 1.6 L boiler, 50–60 min per tank and no continuous fill. Sources: data/god-build/research/top3/best-steam-cleaner-for-pest-control-canada.md and the page's own type table, L272.

- **L162** (AwardRow, Vapamore card)
  - Before: `why: 'Built for the endurance side of the job. Continuous-fill design means you add water without cooling down, so you can steam a whole bedroom, carpet edges, and baseboards in one uninterrupted run. A workhorse boiler and a full accessory kit make it the pick when runtime matters most.',`
  - After: `why: 'Built for the endurance side of the job: Vapamore lists 50–60 minutes of steam per tank from its 1.6 L stainless steel boiler. It is not continuous-fill; its manual says to let it cool down before removing the water tank cap to refill. A workhorse boiler and a full accessory kit make it the pick when runtime per tank matters most.',`
  - Evidence: decisions row and the Vapamore specs.
- **L165** (AwardRow, Vapamore card)
  - Before: `pros: ['Continuous fill — no cool-down stops', 'Long uninterrupted runtime', 'Comprehensive accessory kit'],`
  - After: `pros: ['50–60 minutes of steam per tank (Vapamore)', 'Long runtime per tank', 'Comprehensive accessory kit'],`
  - Evidence: same.
- **L189** (AwardRow whichToBuy)
  - Before: `... The <em>Best for Long Sessions</em> Vapamore&rsquo;s continuous fill keeps you moving. ...`
  - After: `... The <em>Best for Long Sessions</em> Vapamore gives 50&ndash;60 minutes of steam per tank, Vapamore&rsquo;s own figure. ...` (the rest of the line is unchanged)
  - Evidence: same.

### best-rat-trap-canada (5 lines)
**Evidence for every line:**
- OWNER-DECISIONS.md section B: "Victor M201 'Metal Pedal' is officially discontinued (Victor)."
- Victor's old M201 page (https://www.victorpest.com/victor-metal-pedal-rat-trap-cm201) now shows the Easy Set M205 (https://www.victorpest.com/victor-wide-metal-pedal-rat-trap-m205). Source: data/god-build/research/top3/best-rat-trap-canada.md.
- **Search kept:** `victor rat trap` is unchanged; the name now describes what it returns. This matches the page's hero line ("a rat-sized wooden snap trap such as the Victor rat trap") and its comparison table ("Wooden snap trap (Victor)").

- **L175** (StickyBuyBar)
  - Before: `<StickyBuyBar tag={AMZ_TAG} name="Victor Metal Pedal Rat Snap Trap" search="victor rat trap" label="Best overall" />`
  - After: `<StickyBuyBar tag={AMZ_TAG} name="Victor Wooden Rat Snap Trap" search="victor rat trap" label="Best overall" />`
  - Evidence: decisions row.
- **L176** (TopBox)
  - Before: `<TopBox tag={AMZ_TAG} name="Victor Metal Pedal Rat Snap Trap" search="victor rat trap" label="Best overall" />`
  - After: `<TopBox tag={AMZ_TAG} name="Victor Wooden Rat Snap Trap" search="victor rat trap" label="Best overall" />`
  - Evidence: decisions row.
- **L182** (Quick Answer AmazonLink text only)
  - Before: `... className="font-bold underline decoration-emerald-500 underline-offset-2 hover:text-emerald-900">Victor Metal Pedal rat snap trap</AmazonLink> ...`
  - After: `... className="font-bold underline decoration-emerald-500 underline-offset-2 hover:text-emerald-900">Victor wooden rat snap trap</AmazonLink> ...` (the rest of the line is unchanged)
  - Evidence: decisions row.
- **L207** (AwardRow, Best Overall)
  - Before: `name: 'Victor Metal Pedal Rat Snap Trap',`
  - After: `name: 'Victor Wooden Rat Snap Trap',`
  - Evidence: decisions row.
- **L208** (AwardRow, Best Overall)
  - Before: `why: 'Unbeatable kill-rate-per-dollar. The metal-pedal trigger and full rat-force spring bar close the deal the first time, and each trap survives years of catches — cheap enough to deploy the 4–6 traps a real infestation needs.',`
  - After: `why: 'Unbeatable kill-rate-per-dollar. The full rat-force spring bar closes the deal the first time, and each trap survives years of catches — cheap enough to deploy the 4–6 traps a real infestation needs. Victor has discontinued its metal-pedal model (M201), and its page for that trap now shows the Easy Set (M205).',`
  - Evidence: decisions row and the Victor pages.

### best-mouse-trap-canada (2 lines)
**Evidence for both lines:**
- OWNER-DECISIONS.md section B: "the M250S '5 seconds / 100 kills' claim is not on Victor's page."
- Victor's electronic mouse trap page (https://www.victorpest.com/victor-electronic-mouse-trap-cm250b; the M250S address now shows the M250B) gives:
  - a green light every 10 seconds for up to a week after a catch;
  - an automatic switch-off when the lid is opened;
  - bevelled columns that keep children and pets from the plates;
  - no kill time and no kills-per-battery figure.
- Sources: data/god-build/research/top3/best-mouse-trap-canada.md and the page's own table, L247.

- **L167** (AwardRow, M250S card)
  - Before: `why: 'A high-voltage tunnel that kills in under 5 seconds, then a green light tells you to tip it into the garbage — no sight, no touch, no blood.',`
  - After: `why: 'A closed tunnel that kills with a high-voltage shock, then a green light flashes every 10 seconds for up to a week to tell you to tip it into the garbage — no sight, no touch, no blood.',`
  - Evidence: decisions row and Victor's page.
- **L170** (AwardRow, M250S card)
  - Before: `pros: ['Up to 100 kills per 4×AA battery set', 'Pets and kids cannot reach inside', 'No-see, no-touch disposal'],`
  - After: `pros: ['Switches itself off when the lid is opened', 'Pets and kids cannot reach inside', 'No-see, no-touch disposal'],`
  - Evidence: decisions row and Victor's page.

### Left unchanged, with the reason
**Page text that still carries a corrected claim.** These lines are not Amazon elements, so they are outside this brief; they need a separate text pass.
- **best-spider-spray-canada:** "Konk OnGuard" at L28 (FAQ), L102 (schema description), L128 (quick answer), L279 (key facts) and L308, L331-332 (body). L332 still says OnGuard is "the one we name as Best Alternative".
- **best-rat-trap-canada:** "Victor Metal Pedal" at L30 (FAQ), L334 (h3), L335 (body), and L351, L462 and L567 (tables with no Amazon link).
- **best-mouse-trap-canada:** "under 5 seconds" / "up to 100 kills" at L31 and L35 (FAQs), L135 (quick-answer bullet), L218 (a picks table with no Amazon link) and L274-275 (body).

**Kept on purpose:**
- **best-raccoon-live-trap-canada:** the table row at L218 and the button at L276 ("XL single-door", an X-Large search, no ASIN). They name the X-Large and search for it, which is accurate.
- **best-spider-spray-canada:** the comparison table now has two Knock Down rows (L222-228 and L229-235). Merging them would remove an Amazon element, which this brief forbids.
- **best-pump-pressure-sprayer-canada:** L234 (the reason is in its section above).

**Seen, but not listed in OWNER-DECISIONS.md** (left for the owner):
- **best-battery-backpack-sprayer-canada:**
  - The Chapin card (L151, L155) claims "adjustable pressure" and a "diaphragm pump". The page's own L310 says Chapin's page lists neither.
  - "safe" appears at L151 ("The safest all-round buy") and L188 ("the safe, do-everything choice").
- **best-rat-trap-canada:** the Victor Electronic card (L218, L221) gives 6,000 V and about 50 kills. Those are the older M241 figures; the research notes say the current M241B lists up to 35 rats per four AA and no voltage.
- **best-rodent-repellent-for-cars-canada:** the ultrasonic "Best Set-and-Forget" pick (L161-163) needs a PCP number in Canada (a Schedule 1 device), and listings may not show one.
- **advion-cockroach-gel-bait:** the Raid Max boxes (L302, L341-343) make no legality claim. Writers recorded 26645/27731 as cancelled in 2025 (not confirmed).
- **data/affiliate-links.json:** this inventory still lists the old `konk onguard residual insecticide spray` search. The build does not read it.

## Mosquito, wasp and fly pages

Agent run of Oct 25, 2026, under FIX-BRIEF.md. 10 pages, 93 lines replaced one for one (no line added or removed, so the line numbers below hold for both versions). Checked against copies taken before editing: every page keeps the same count of `<BuyLink`, `<AwardRow`, `<AwardCard`, `<StickyBuyBar`, `<AmazonLink`, `<TopPick`, `<TopBox`, `asin=`/`asin:`, `search=`/`search:` and every `tag` is unchanged; each file still parses as TSX. No git, no build.

### app/blog/mosquito-bits-canada-vs-dunks/page.tsx (19 lines)

Evidence for every line below: OWNER-DECISIONS.md, section A, row 1: Summit Mosquito Bits have no Canadian registration in Health Canada's 3 Oct 2026 export; fix: point the buttons at the registered BTI dunks the dunks page uses (label 28888). Swap target: the dunks page's existing `search="summit mosquito dunks"` (no asin added). Dunk facts quoted from the Canadian label for Reg. No. 28888 (label 2023-3665) as already quoted on /blog/mosquito-dunks-canada-guide; registry: https://pest-control.canada.ca/pesticide-registry/en/product-search.html

- Line 168. Listed line (StickyBuyBar).
  - Before: `<StickyBuyBar tag={AMZ_TAG} name="Summit Mosquito Bits (BTI granules)" search="summit mosquito bits" label="Fastest larvae kill" />`
  - After: `<StickyBuyBar tag={AMZ_TAG} name="Summit Mosquito Dunks (look for Reg. No. 28888)" search="summit mosquito dunks" label="In Canada: Dunks, not Bits" />`
- Line 169. Listed line (TopBox, kept identical to the StickyBuyBar).
  - Before: `<TopBox tag={AMZ_TAG} name="Summit Mosquito Bits (BTI granules)" search="summit mosquito bits" label="Fastest larvae kill" />`
  - After: `<TopBox tag={AMZ_TAG} name="Summit Mosquito Dunks (look for Reg. No. 28888)" search="summit mosquito dunks" label="In Canada: Dunks, not Bits" />`
- Line 176. Listed line (Quick Answer AmazonLink); the sentence called Bits "the best pick" and said GTA homeowners keep both.
  - Before: `<p className="text-gray-800 text-[15px] leading-relaxed font-medium">For fast larvae knockdown, <AmazonLink search="summit mosquito bits" tag={AMZ_TAG} className="font-bold underline decoration-emerald-500 underline-offset-2 hover:text-emerald-900">Mosquito Bits</AmazonLink> are the best pick &mdash; they release BTI within about 30 minutes and clear treated water within 24 hours &mdash; while Mosquito Dunks slow-release the same BTI for a full 30 days. Most GTA homeowners keep both.</p>`
  - After: `<p className="text-gray-800 text-[15px] leading-relaxed font-medium">For a Canadian rain barrel or pond, the pick is <AmazonLink search="summit mosquito dunks" tag={AMZ_TAG} className="font-bold underline decoration-emerald-500 underline-offset-2 hover:text-emerald-900">Mosquito Dunks</AmazonLink> (Reg. No. 28888), the same BTI as Mosquito Bits in a slow-release tablet: the Canadian label says to allow a minimum of 48 hours for control and to reapply at 30-day intervals if larvae are detected. Mosquito Bits act faster, but they have no Canadian registration.</p>`
- Line 187. Listed line.
  - Before: `<BuyLink search="summit mosquito bits" tag={AMZ_TAG} block className="sm:w-auto sm:min-h-0 sm:inline-flex sm:rounded-full sm:px-4 sm:py-2">Check price on Amazon.ca →</BuyLink>`
  - After: `<BuyLink search="summit mosquito dunks" tag={AMZ_TAG} block className="sm:w-auto sm:min-h-0 sm:inline-flex sm:rounded-full sm:px-4 sm:py-2">Check price on Amazon.ca →</BuyLink>`
- Line 228. Listed line.
  - Before: `<BuyLink tag={AMZ_TAG} search="summit mosquito bits">Check Mosquito Bits price on Amazon.ca →</BuyLink>`
  - After: `<BuyLink tag={AMZ_TAG} search="summit mosquito dunks">Check Mosquito Dunks on Amazon.ca (look for Reg. No. 28888) →</BuyLink>`
- Line 250. Card 1 text, rewritten to match its new dunks search.
  - Before: `name: 'Summit Mosquito Bits — 30 oz Value Pack',`
  - After: `name: 'Summit Mosquito Dunks, broken into quarters',`
- Line 251. Card 1 text, rewritten to match its new dunks search.
  - Before: `why: 'Nearly four times the contents of the 8-oz container, and normally the cheaper option per ounce. The right buy for properties with multiple rain barrels, a pond, or a neighbour to split with — compare the unit price on the shelf tag.',`
  - After: `why: 'The value buy in Canada, where Mosquito Bits have no registration: the Canadian label for Mosquito Dunks (Reg. No. 28888) says they “can be used whole or in pieces” and puts 0.1 to 3.0 m² of water at a quarter dunk, so one 6-pack gives 24 quarter-dunk doses for the rain barrels, flower planters and tires you cannot empty weekly.',`
- Line 252. Listed line (AwardRow card 1 search).
  - Before: `search: 'summit mosquito bits',`
  - After: `search: 'summit mosquito dunks',`
- Line 254. Card 1 text.
  - Before: `pros: ['Usually cheaper per ounce than the 8 oz — check the unit price', 'Treats roughly 4x the area of the small container', 'Sealed bits keep 2–3 years in dry storage'],`
  - After: `pros: ['One 6-pack breaks into 24 quarter-dunk doses', 'The label says dunks “can be used whole or in pieces”', 'Reapply at 30-day intervals if larvae are detected'],`
- Line 255. Card 1 text.
  - Before: `cons: ['Overkill for a single rain barrel — the 8 oz covers a typical yard', 'Once opened, use within a year and keep it dry'],`
  - After: `cons: ['Not for water that flows off your property (ditches, drains, rain gutters)', 'Use within one year of the date of manufacture (Canadian label)'],`
- Line 258. Card 2 badge: dunks are not a fast kill (label: allow a minimum of 48 hours).
  - Before: `badge: 'Best Overall — Fastest Kill',`
  - After: `badge: 'Best Overall in Canada',`
- Line 259. Card 2 text.
  - Before: `name: 'Summit Mosquito Bits (8 oz)',`
  - After: `name: 'Summit Mosquito Dunks (Canadian Reg. No. 28888)',`
- Line 260. Card 2 text.
  - Before: `why: 'The fastest larvae kill you can buy — starts releasing BTI within 30 minutes and clears treated water within 24 hours. At Summit’s label rate, one container treats about 2,000 sq ft of relatively clean water surface.',`
  - After: `why: 'The same BTI as Mosquito Bits in a slow-release tablet, and the one with a Canadian registration: Reg. No. 28888, domestic class. The Canadian label: one dunk for up to 6 m² of water surface, “regardless of depth”, reapplied at 30-day intervals if larvae are detected.',`
- Line 261. Listed line (AwardRow card 2 search).
  - Before: `search: 'summit mosquito bits',`
  - After: `search: 'summit mosquito dunks',`
- Line 264. Card 2 text.
  - Before: `pros: ['Releases BTI within about 30 minutes', 'Full larvae kill within 24 hours', 'BTI acts on mosquito and black fly larvae, per the label'],`
  - After: `pros: ['Canadian Reg. No. 28888; Mosquito Bits have none', 'Same BTI active ingredient as Mosquito Bits', 'Label sites include rain barrels and ornamental ponds you cannot empty weekly'],`
- Line 265. Card 2 text.
  - Before: `cons: ['Lasts 7–14 days — rain-barrel owners are better served by a Dunk', 'Only treats the water you apply it to'],`
  - After: `cons: ['Not a fast knockdown: allow a minimum of 48 hours for control (Canadian label)', 'Check that the listing shows Reg. No. 28888, not only a U.S. EPA number'],`
- Line 274. Same AwardRow: the dunks card told readers to buy Bits for larvae found today.
  - Before: `cons: ['Slow release — larvae found today call for Bits instead', 'The floating tablet is visible in small bird baths'],`
  - After: `cons: ['Slow release: for larvae found today, tip the water out if you can (Bits have no Canadian registration)', 'The floating tablet is visible in small bird baths'],`
- Line 279. Same AwardRow: its "Which one should you buy?" text sold the two Bits cards.
  - Before: `<strong>Found wrigglers right now?</strong> The <em>Best Overall</em> 8-oz Bits clear treated water within 24 hours &mdash; keep a container in the shed for every surprise find. <strong>Rain barrel or pond you check monthly?</strong> Drop in a <em>Dunk</em> &mdash; one tablet lasts about 30 days versus 7&ndash;14 for Bits. <strong>Several barrels, a pond, or a neighbour to split with?</strong> The 30-oz <em>Best Value</em> pack holds nearly four times as much and is normally the better buy per ounce. Whichever you pick, BTI only handles larvae in the water you treat &mdash; the adults flying in are the job of a <Link href="/mosquito-control">whole-yard barrier spray</Link>.`
  - After: `<strong>Found wrigglers right now?</strong> Tip the water out if you can; Mosquito Bits have no Canadian registration, so they are not the answer here. <strong>Rain barrel or pond you check monthly?</strong> The <em>Best Overall</em> pick is Mosquito Dunks (Reg. No. 28888), reapplied at 30-day intervals if larvae are detected, as the Canadian label says. <strong>Several barrels, planters or tires?</strong> The <em>Best Value</em> move is to break dunks into quarters: one 6-pack gives 24 doses. Whichever you pick, BTI only handles larvae in the water you treat &mdash; the adults flying in are the job of a <Link href="/mosquito-control">whole-yard barrier spray</Link>.`
- Line 323. Listed line.
  - Before: `<BuyLink tag={AMZ_TAG} search="summit mosquito bits" className="!px-3 !py-1.5 !text-xs">Check Bits price</BuyLink>`
  - After: `<BuyLink tag={AMZ_TAG} search="summit mosquito dunks" className="!px-3 !py-1.5 !text-xs">Check Dunks (Reg. No. 28888)</BuyLink>`

### app/blog/mosquito-dunks-canada-guide/page.tsx (12 lines)

Evidence for every line below: OWNER-DECISIONS.md, section A, row 1 (Summit Mosquito Bits: no Canadian registration in the 3 Oct 2026 export; fix: point the buttons at this page's registered BTI dunks, label 28888). Swap target: this page's existing `search="summit mosquito dunks"`. Label facts as already quoted on this page from the Canadian label for Reg. No. 28888 (label 2023-3665); bird-bath line from Health Canada's mosquito page, quoted on this page.

- Line 351. Listed line.
  - Before: `<BuyLink tag={AMZ_TAG} search="summit mosquito bits">Check Mosquito Bits (faster-acting) →</BuyLink>`
  - After: `<BuyLink tag={AMZ_TAG} search="summit mosquito dunks">Check Mosquito Dunks (look for Reg. No. 28888) →</BuyLink>`
- Line 391. Card 3 text, rewritten to match its new dunks search.
  - Before: `badge: 'Best for Fast Knockdown',`
  - After: `badge: 'Best for Small Containers',`
- Line 392. Card 3 text.
  - Before: `name: 'Summit Mosquito Bits (BTI granules)',`
  - After: `name: 'Summit Mosquito Dunks, broken into quarters',`
- Line 393. Card 3 text.
  - Before: `why: 'The same BTI in quick-release granules — works within minutes when you find larvae unexpectedly, and easier than a dunk for fungus gnats because you sprinkle it straight onto potting soil.',`
  - After: `why: 'Mosquito Bits, the quick-release granules, have no Canadian registration, so for a flower planter, discarded tire or rain barrel you cannot empty weekly, break a dunk: the Canadian label says dunks “can be used whole or in pieces” and puts 0.1 to 3.0 m² of water at a quarter dunk.',`
- Line 394. Listed line (AwardRow card 3 search).
  - Before: `search: 'summit mosquito bits',`
  - After: `search: 'summit mosquito dunks',`
- Line 396. Card 3 text.
  - Before: `pros: ['Acts within minutes, not days', 'Right size for bird baths and plant saucers', 'Sprinkles onto potting soil for fungus gnat larvae'],`
  - After: `pros: ['One 6-pack breaks into 24 quarter-dunk doses', 'Canadian Reg. No. 28888', 'Reapply at 30-day intervals if larvae are detected'],`
- Line 397. Card 3 text.
  - Before: `cons: ['Days of coverage, not the ~30 a dunk gives a rain barrel', 'Long-term water sources are better served by a dunk'],`
  - After: `cons: ['Not a fast knockdown: allow a minimum of 48 hours for control (Canadian label)', 'A bird bath you can change twice a week needs no product'],`
- Line 402. Same AwardRow: its "Which one should you buy?" text sold Bits, including for fungus gnats.
  - Before: `<strong>One rain barrel?</strong> The <em>Best Overall</em> 6-pack solves the whole season &mdash; one dunk per month, May through September. <strong>A pond, several barrels, or a ditch that holds water?</strong> The 20-pack costs less per dunk and won&rsquo;t run out in August. <strong>Wrigglers in a bird bath, saucer, or houseplant soil?</strong> Quick-release <em>Bits</em> work in minutes and go straight onto potting soil for fungus gnats. The limit they all share: BTI kills larvae in treated water only &mdash; the adults flying in from ravines and neighbours&rsquo; yards are what a <Link href="/mosquito-control">whole-yard barrier spray</Link> handles.`
  - After: `<strong>One rain barrel?</strong> The <em>Best Overall</em> 6-pack solves the whole season &mdash; one dunk per month, May through September. <strong>A pond, several barrels, or a ditch that holds water?</strong> The 20-pack costs less per dunk and won&rsquo;t run out in August. <strong>A flower planter or tire you cannot empty weekly?</strong> Use a quarter of a dunk, the Canadian label&rsquo;s dose for 0.1 to 3.0 m²; a bird bath you can change twice a week needs nothing, and Mosquito Bits have no Canadian registration. The limit they all share: BTI kills larvae in treated water only &mdash; the adults flying in from ravines and neighbours&rsquo; yards are what a <Link href="/mosquito-control">whole-yard barrier spray</Link> handles.`
- Line 598. Listed line (U.S. section; the link goes to Amazon.ca).
  - Before: `<BuyLink tag={AMZ_TAG} search="summit mosquito bits">Check Mosquito Bits (faster-acting) →</BuyLink>`
  - After: `<BuyLink tag={AMZ_TAG} search="summit mosquito dunks">Check Mosquito Dunks on Amazon.ca (Canadian Reg. No. 28888) →</BuyLink>`
- Line 657. Listed line.
  - Before: `<BuyLink tag={AMZ_TAG} search="summit mosquito bits" className="!px-3 !py-1.5 !text-xs">Check Bits price</BuyLink>`
  - After: `<BuyLink tag={AMZ_TAG} search="summit mosquito dunks" className="!px-3 !py-1.5 !text-xs">Check Dunks (Reg. No. 28888)</BuyLink>`
- Line 736. Listed line.
  - Before: `<BuyLink tag={AMZ_TAG} search="summit mosquito bits" className="!px-3 !py-1.5 !text-xs">Check Bits price</BuyLink>`
  - After: `<BuyLink tag={AMZ_TAG} search="summit mosquito dunks" className="!px-3 !py-1.5 !text-xs">Check Dunks (Reg. No. 28888)</BuyLink>`
- Line 879. Listed line. Text kept off fungus gnats: the Canadian 28888 label covers mosquito larvae in water only (quoted in this section).
  - Before: `<BuyLink tag={AMZ_TAG} search="summit mosquito bits" className="!px-3 !py-1.5 !text-xs">Check Bits for fungus gnats</BuyLink>`
  - After: `<BuyLink tag={AMZ_TAG} search="summit mosquito dunks" className="!px-3 !py-1.5 !text-xs">Check Dunks (mosquito larvae in water only)</BuyLink>`

### app/blog/mosquito-fogger-canada/page.tsx (4 lines)

Evidence for every line below: OWNER-DECISIONS.md, section A, row 2 (4 buttons sell fogging liquids with no current Canadian registration; registry export). Reworded, not swapped: the registered option this page names (Muskol Patio & Deck Fogger, Reg. No. 22808.03) has no existing search= or asin= on this page or its siblings (propane-vs-electric-fogger-canada, best-thermal-fogger-canada, thermal-vs-ulv-fogger-canada), and FIX-BRIEF bars new search terms. Black Flag: every Black Flag entry in Health Canada's registry is cancelled (this page's registry note; https://pest-control.canada.ca/pesticide-registry/en/product-search.html).

- Line 323. Listed line.
  - Before: `<BuyLink tag={AMZ_TAG} search="black flag fogging insecticide">Fogging liquid →</BuyLink>`
  - After: `<BuyLink tag={AMZ_TAG} search="black flag fogging insecticide">Black Flag fogging liquid (not registered in Canada) →</BuyLink>`
- Line 380. Listed line (button inside the paragraph; paragraph text unchanged).
  - Before: `<p className="not-prose text-sm text-gray-600 mb-6">The machine is only half the purchase &mdash; a thermal fogger is useless without an oil-based fogging insecticide. In Canada that half is the problem: Health Canada cancelled domestic handheld-fogger use of pyrethrin fogging liquid in RVD2023-06, and any product you use must carry a Canadian PCP registration number on its label. Check that before you buy anything. <BuyLink tag={AMZ_TAG} search="black flag fogging insecticide">Check fogging liquid listings →</BuyLink></p>`
  - After: `<p className="not-prose text-sm text-gray-600 mb-6">The machine is only half the purchase &mdash; a thermal fogger is useless without an oil-based fogging insecticide. In Canada that half is the problem: Health Canada cancelled domestic handheld-fogger use of pyrethrin fogging liquid in RVD2023-06, and any product you use must carry a Canadian PCP registration number on its label. Check that before you buy anything. <BuyLink tag={AMZ_TAG} search="black flag fogging insecticide">Black Flag fogging liquid listings (not registered in Canada) →</BuyLink></p>`
- Line 390. Listed line. Generic search, so the text tells readers to check the PCP number instead of claiming a status for every result.
  - Before: `<BuyLink tag={AMZ_TAG} search="mosquito fogger insecticide liquid">Fogging insecticide liquid →</BuyLink>`
  - After: `<BuyLink tag={AMZ_TAG} search="mosquito fogger insecticide liquid">Fogging insecticide liquid (check the label for a Canadian PCP number) →</BuyLink>`
- Line 391. Listed line. "Fogger fuel" is Black Flag's fogging insecticide sold as thermal-fogger fuel (retail listings), so the text says it is an insecticide.
  - Before: `<BuyLink tag={AMZ_TAG} search="black flag fogger fuel">Black Flag fogger fuel →</BuyLink>`
  - After: `<BuyLink tag={AMZ_TAG} search="black flag fogger fuel">Black Flag fogger fuel (an insecticide, not registered in Canada) →</BuyLink>`

### app/blog/how-to-get-rid-of-ground-wasps-canada/page.tsx (9 lines)

Evidence for every line below: OWNER-DECISIONS.md, section A, last row (boxes call the Wilson foam the ground-nest pick; Wilson label: "Not for use against nests located underground or in voids"). Reworded, not swapped: no product labelled for ground nests has a link on this page. Calgary clear-bowl method as already quoted on this page (calgary.ca).

- Line 126. StickyBuyBar label.
  - Before: `<StickyBuyBar tag={AMZ_TAG} name="Wilson OneShot Jet Foam Wasp & Hornet Killer" asin="B00LM93R58" search="wilson one shot foam wasp hornet killer" label="Best ground-nest foam" />`
  - After: `<StickyBuyBar tag={AMZ_TAG} name="Wilson OneShot Jet Foam Wasp & Hornet Killer" asin="B00LM93R58" search="wilson one shot foam wasp hornet killer" label="For exposed nests only" />`
- Line 127. TopBox label (kept identical to the StickyBuyBar).
  - Before: `<TopBox tag={AMZ_TAG} name="Wilson OneShot Jet Foam Wasp & Hornet Killer" asin="B00LM93R58" search="wilson one shot foam wasp hornet killer" label="Best ground-nest foam" />`
  - After: `<TopBox tag={AMZ_TAG} name="Wilson OneShot Jet Foam Wasp & Hornet Killer" asin="B00LM93R58" search="wilson one shot foam wasp hornet killer" label="For exposed nests only" />`
- Line 133. Quick Answer AmazonLink sentence told readers to soak a lawn hole with this foam; "PMRA-registered" dropped (BRIEF.md bars "Health Canada approved/registered").
  - Before: `<p className="text-gray-800 text-[15px] leading-relaxed font-medium">To get rid of ground wasps in Canada, confirm the single entrance hole in daylight, then treat it at dusk &mdash; when the whole colony is home and sluggish &mdash; by soaking the entrance from 2&ndash;3 metres away with a PMRA-registered jet foam like <AmazonLink search="wilson one shot foam wasp hornet killer" tag={AMZ_TAG} className="font-bold underline decoration-emerald-500 underline-offset-2 hover:text-emerald-900">Wilson OneShot Jet Foam Wasp &amp; Hornet Killer</AmazonLink>. Leave the hole open, walk away, and expect near-zero traffic within 48 hours.</p>`
  - After: `<p className="text-gray-800 text-[15px] leading-relaxed font-medium">To get rid of ground wasps in Canada, confirm the single entrance hole in daylight, then act at dusk, when the whole colony is home and sluggish, with a product whose label covers a nest in the ground. Our foam pick, <AmazonLink search="wilson one shot foam wasp hornet killer" tag={AMZ_TAG} className="font-bold underline decoration-emerald-500 underline-offset-2 hover:text-emerald-900">Wilson OneShot Jet Foam Wasp &amp; Hornet Killer</AmazonLink>, does not: its label says &ldquo;Not for use against nests located underground or in voids,&rdquo; so keep it for exposed nests. If no label covers your hole, use the City of Calgary&rsquo;s clear-bowl method or a licensed operator.</p>`
- Line 155. AwardRow heading called the row "Best Products for Ground Wasp Nests".
  - Before: `heading="Our Picks — Best Products for Ground Wasp Nests in Canada"`
  - After: `heading="Our Picks — Wasp Cans and Traps for Canada: Read the Label Before a Ground Nest"`
- Line 158. Badge "Best Overall" on that ground-nest row.
  - Before: `badge: 'Best Overall',`
  - After: `badge: 'Best for Exposed Nests',`
- Line 160. Why: "answer to a nest in the ground", "expands into the burrow entrance"; "PMRA-registered" dropped.
  - Before: `why: 'The Canadian, PMRA-registered answer to a nest in the ground: a d-phenothrin + tetramethrin foam that jets 2–2.5 m, expands into the burrow entrance, and makes the nest uninhabitable within about 48 hours.',`
  - After: `why: 'A d-phenothrin + tetramethrin foam that jets 2–2.5 m, for the exposed nests its Canadian label covers. Not for a hole in the lawn: the label says “Not for use against nests located underground or in voids.”',`
- Line 165. Pro "Foam expands down into the burrow".
  - Before: `pros: ['Foam expands down into the burrow', 'Canadian label with PCP registration number', 'Keeps killing returning foragers for hours'],`
  - After: `pros: ['Expanding foam coats an exposed nest', 'Canadian label with PCP registration number', 'Keeps killing returning foragers for hours'],`
- Line 166. Con added: the label exclusion.
  - Before: `cons: ['Shorter reach than straight-jet cans', 'One can treats one, maybe two nests'],`
  - After: `cons: ['Label: not for nests underground or in voids', 'Shorter reach than straight-jet cans', 'One can treats one, maybe two nests'],`
- Line 198. "Which one should you buy?": "foam down the hole at dusk" and "then foam the hole".
  - Before: `<strong>Nest in open lawn you can approach to 2&ndash;3 m?</strong> The <em>Best Overall</em> Wilson OneShot foam is the purpose-built tool &mdash; foam down the hole at dusk. <strong>Entrance somewhere you cannot get close to?</strong> Neither foam can helps you there: both Wilson and the Canadian Raid Max foam are rated at only 2&ndash;3 m. Real stand-off distance means a straight-jet can &mdash; on the Canadian market the mainstream one is the plain Raid Wasp &amp; Hornet Killer Spray, which S.C. Johnson rates at 5.7 m &mdash; used to collapse the entrance traffic first, then foam the hole once things quiet down. <strong>Either way, buy two cans</strong> &mdash; running dry mid-treatment over an angry nest is the scenario to design out. And if wasps are ruining dinner <em>today</em> while you wait for dusk, the <em>Best for Foragers</em> WHY Trap buys you a calmer patio &mdash; full breakdown in our <Link href="/blog/rescue-why-trap-review-canada">RESCUE! WHY Trap review</Link>.`
  - After: `<strong>Nest in open lawn?</strong> Read the label first: the <em>Best for Exposed Nests</em> Wilson OneShot foam&rsquo;s label says &ldquo;Not for use against nests located underground or in voids,&rdquo; so it is not for a hole in the ground. Use a can only if its directions cover your nest; if none does, the City of Calgary&rsquo;s clear-bowl method at dusk or a licensed operator is the answer. <strong>An exposed nest you cannot get close to?</strong> Both foam cans are rated at only 2&ndash;3 m. Real stand-off distance means a straight-jet can &mdash; on the Canadian market the mainstream one is the plain Raid Wasp &amp; Hornet Killer Spray, which S.C. Johnson rates at 5.7 m. <strong>Either way, buy two cans</strong> &mdash; running dry mid-treatment over an angry nest is the scenario to design out. And if wasps are ruining dinner <em>today</em> while you wait for dusk, the <em>Best for Foragers</em> WHY Trap buys you a calmer patio &mdash; full breakdown in our <Link href="/blog/rescue-why-trap-review-canada">RESCUE! WHY Trap review</Link>.`

### app/blog/wasp-dust-canada/page.tsx (7 lines)

Evidence for every line below: OWNER-DECISIONS.md, section A, last row (boxes call the Wilson foam the ground-nest pick; Wilson label: "Not for use against nests located underground or in voids"). FIX-BRIEF: remove "Legal" where false and the "ground-nest" use. Reworded, not swapped: no product labelled for ground nests has a link on this page.

- Line 117. StickyBuyBar label "Legal ground-nest fix".
  - Before: `<StickyBuyBar tag={AMZ_TAG} name="Wilson OneShot Jet Foam Wasp & Hornet Killer" search="wilson one shot foam wasp hornet killer" label="Legal ground-nest fix" />`
  - After: `<StickyBuyBar tag={AMZ_TAG} name="Wilson OneShot Jet Foam Wasp & Hornet Killer" search="wilson one shot foam wasp hornet killer" label="For exposed nests only" />`
- Line 118. TopBox label (kept identical to the StickyBuyBar).
  - Before: `<TopBox tag={AMZ_TAG} name="Wilson OneShot Jet Foam Wasp & Hornet Killer" search="wilson one shot foam wasp hornet killer" label="Legal ground-nest fix" />`
  - After: `<TopBox tag={AMZ_TAG} name="Wilson OneShot Jet Foam Wasp & Hornet Killer" search="wilson one shot foam wasp hornet killer" label="For exposed nests only" />`
- Line 145. Badge "Best Legal Ground-Nest Fix".
  - Before: `badge: 'Best Legal Ground-Nest Fix',`
  - After: `badge: 'Best for Exposed Nests',`
- Line 147. Why: "expands down the entrance tunnel of a lawn nest", "closest legal cousin of the dust technique"; "PMRA-registered" dropped.
  - Before: `why: 'The domestic-class answer to the job Delta Dust does commercially: a PMRA-registered d-phenothrin + tetramethrin foam that jets 2–2.5 metres and expands down the entrance tunnel of a lawn nest, contact-killing returning foragers as they dig through. For a single-entrance ground nest treated at dusk, it is the closest legal cousin of the dust technique.',`
  - After: `why: 'The domestic wasp can for the DIY lane: a d-phenothrin + tetramethrin foam that jets 2–2.5 metres, for exposed nests. It does not replace dust on a lawn nest: its label says “Not for use against nests located underground or in voids,” so ground, void and multi-entrance nests go to a licensed pro.',`
- Line 151. Pros: "Foam physically fills the tunnel"; "homeowner-legal" narrowed to exposed nests.
  - Before: `pros: ['Canadian label, PCP-registered, homeowner-legal', 'Foam physically fills the tunnel — the geometry dust exploits', 'Nest typically uninhabitable within about 48 hours'],`
  - After: `pros: ['Canadian label with a PCP number, for exposed nests', 'Expanding foam coats an exposed nest', 'Nest typically uninhabitable within about 48 hours'],`
- Line 152. Con "Single-entrance lawn nests only".
  - Before: `cons: ['Single-entrance lawn nests only — voids and multi-hole nests need a pro', 'Shorter jet than a pressurised aerosol can'],`
  - After: `cons: ['Label: not for nests underground or in voids — those need a pro', 'Shorter jet than a pressurised aerosol can'],`
- Line 184. "Which one should you buy?": "The Best Legal Ground-Nest Fix foam at dusk is the whole answer".
  - Before: `<strong>Wasps streaming in and out of one hole in the lawn?</strong> The <em>Best Legal Ground-Nest Fix</em> foam at dusk is the whole answer &mdash; our <Link href="/blog/how-to-get-rid-of-ground-wasps-canada">ground wasp guide</Link> walks the protocol step by step. <strong>Wasps entering a wall, deck, or soffit gap?</strong> That is the nest architecture dust exists for, and in Canada that means a licensed pro &mdash; spend your money on the phone call, not the grey market. <strong>Doing on-label dusting work around the structure?</strong> The <em>Best Applicator</em> bulb duster plus the <em>Best Domestic-Class Dust</em> is the legal pairing. <strong>Any of the above?</strong> The <em>Best Protection</em> suit makes every job calmer, and calm is a genuine safety feature around defended colonies.`
  - After: `<strong>Wasps streaming in and out of one hole in the lawn?</strong> Not a job for the <em>Best for Exposed Nests</em> foam, whose label says &ldquo;Not for use against nests located underground or in voids&rdquo;: use a can whose label covers a ground nest, the City of Calgary&rsquo;s clear-bowl method, or a licensed pro &mdash; our <Link href="/blog/how-to-get-rid-of-ground-wasps-canada">ground wasp guide</Link> walks through the options. <strong>A paper nest hanging in the open?</strong> That is the foam&rsquo;s job, applied as its label directs. <strong>Wasps entering a wall, deck, or soffit gap?</strong> That is the nest architecture dust exists for, and in Canada that means a licensed pro &mdash; spend your money on the phone call, not the grey market. <strong>Doing on-label dusting work around the structure?</strong> The <em>Best Applicator</em> bulb duster plus the <em>Best Domestic-Class Dust</em> is the legal pairing. <strong>Any of the above?</strong> The <em>Best Protection</em> suit makes every job calmer, and calm is a genuine safety feature around defended colonies.`

### app/blog/best-wasp-nest-spray-canada/page.tsx (12 lines)

Evidence for every line below: OWNER-DECISIONS.md, section B, row 1 (boxes call Raid 7 a "foam", lines 157-158, 177, 197-234, 423, 435; it is a 5.7 m jet spray). Raid 7 facts as already quoted on this page from S.C. Johnson's Canadian product page: PCP 29776, "up to 5.7 m", nests "in trees or attached to buildings", spray the nest opening first, then saturate the nest.

- Line 157. Listed line (StickyBuyBar name).
  - Before: `<StickyBuyBar tag={AMZ_TAG} name="Raid Wasp & Hornet Bug Killer (foaming aerosol)" search="raid wasp hornet killer" label="Best overall" />`
  - After: `<StickyBuyBar tag={AMZ_TAG} name="Raid Wasp & Hornet Bug Killer 7 (jet spray, up to 5.7 m)" search="raid wasp hornet killer" label="Best overall" />`
- Line 158. Listed line (TopBox name, kept identical).
  - Before: `<TopBox tag={AMZ_TAG} name="Raid Wasp & Hornet Bug Killer (foaming aerosol)" search="raid wasp hornet killer" label="Best overall" />`
  - After: `<TopBox tag={AMZ_TAG} name="Raid Wasp & Hornet Bug Killer 7 (jet spray, up to 5.7 m)" search="raid wasp hornet killer" label="Best overall" />`
- Line 177. Listed line (Quick Answer AmazonLink); "PMRA-registered" dropped.
  - Before: `<p className="text-gray-800 text-[15px] leading-relaxed font-medium">The best wasp nest spray for most Canadian homes is a PMRA-registered foaming aerosol like <AmazonLink search="raid wasp hornet killer" tag={AMZ_TAG} className="font-bold underline decoration-emerald-500 underline-offset-2 hover:text-emerald-900">Raid Wasp &amp; Hornet Bug Killer</AmazonLink> &mdash; the foam blankets the nest entrance, traps returning workers, and keeps killing for hours. Wilson WaspOut is the strongest pure-foam alternative, and the Ortho can registered for Canada is Wasp B Gon MAX Wasp Killer Spray (Health Canada PCP 33723) &mdash; the 20-foot Ortho Home Defense Hornet &amp; Wasp Killer 7 sold in the US has no Canadian registration. Spray at dusk, from the far end of the jet&rsquo;s reach, and always check the can for a Canadian PCP registration number.</p>`
  - After: `<p className="text-gray-800 text-[15px] leading-relaxed font-medium">The best wasp nest spray for most Canadian homes is a domestic wasp-and-hornet can with a PCP number, like <AmazonLink search="raid wasp hornet killer" tag={AMZ_TAG} className="font-bold underline decoration-emerald-500 underline-offset-2 hover:text-emerald-900">Raid Wasp &amp; Hornet Bug Killer 7</AmazonLink> (PCP 29776) &mdash; a jet spray S.C. Johnson rates at up to 5.7 m, for nests &ldquo;in trees or attached to buildings&rdquo;: spray the nest opening first, then saturate the nest. Wilson WaspOut is the strongest pure-foam alternative, and the Ortho can registered for Canada is Wasp B Gon MAX Wasp Killer Spray (Health Canada PCP 33723) &mdash; the 20-foot Ortho Home Defense Hornet &amp; Wasp Killer 7 sold in the US has no Canadian registration. Spray at dusk, from the far end of the jet&rsquo;s reach, and always check the can for a Canadian PCP registration number.</p>`
- Line 202. Listed range (card 1 name).
  - Before: `name: 'Raid Wasp & Hornet Bug Killer (foam)',`
  - After: `name: 'Raid Wasp & Hornet Bug Killer 7 (jet spray)',`
- Line 203. Listed range (card 1 why).
  - Before: `why: 'The Canadian benchmark: a foaming aerosol that blankets the nest and entrance, knocks wasps down on contact, and keeps killing returning foragers as they crawl through the residue. Widely stocked and inexpensive enough to keep a backup can.',`
  - After: `why: 'The Canadian benchmark: a jet spray (PCP 29776) that S.C. Johnson rates at up to 5.7 m and describes for nests “in trees or attached to buildings”; spray the nest opening first, then saturate the nest. Widely stocked and inexpensive enough to keep a backup can.',`
- Line 207. Listed range (card 1 pros: foam and residual claims).
  - Before: `pros: ['Foam traps wasps at the entrance', 'Residual kills returning foragers', 'Sold at nearly every Canadian retailer'],`
  - After: `pros: ['Longest published throw we found among cans registered here (up to 5.7 m)', 'Directions: spray the nest opening first, then saturate the nest', 'Sold at nearly every Canadian retailer'],`
- Line 208. Listed range (card 1 con "Foam can drip").
  - Before: `cons: ['Rated up to 5.7 m by SC Johnson — if the nest sits higher than the can reaches, call a pro rather than climb', 'Foam can drip on vertical surfaces'],`
  - After: `cons: ['Rated up to 5.7 m by SC Johnson — if the nest sits higher than the can reaches, call a pro rather than climb', 'A jet stream runs off vertical surfaces, so a nest may need a second evening'],`
- Line 213. Listed range, card 2 (Wilson WaspOut): "pushing foam into ground-nest and void entrances" contradicts its record (PCP 31899 excludes nests underground or in voids, as this page states); FIX-BRIEF: remove "ground-nest".
  - Before: `why: 'A Canadian-brand expanding foam that smothers the whole nest envelope — the best choice for visible paper nests on eaves, deck rails, and shed corners, and for pushing foam into ground-nest and void entrances.',`
  - After: `why: 'A Canadian-brand expanding foam that smothers the whole nest envelope — the best choice for visible paper nests on eaves, deck rails, and shed corners. Its record in Health Canada’s pesticide database excludes nests underground or in voids, so keep it out of holes.',`
- Line 216. Listed range, card 2: "Excellent for burrow and void entrances" removed for the same reason; "PMRA-registered line" became the PCP number.
  - Before: `pros: ['Expanding foam coats the full nest', 'Excellent for burrow and void entrances', 'Canadian brand, PMRA-registered line'],`
  - After: `pros: ['Expanding foam coats the full nest', 'Labelled for exposed nests', 'Canadian brand, PCP 31899'],`
- Line 231. Listed range ("Which one should you buy?": "Raid foam", "or a burrow entrance").
  - Before: `<strong>Typical eave, deck, or shed nest?</strong> The <em>Best Overall</em> Raid foam does everything well and is the one can to own. <strong>Big exposed paper nest or a burrow entrance?</strong> The <em>Best Foam Blanket</em> WaspOut&rsquo;s expanding foam smothers it most completely. <strong>Nest two storeys up?</strong> Reach for the longest published throw among Canadian-registered cans &mdash; SC Johnson rates Raid Wasp &amp; Hornet Bug Killer 7 at up to 5.7 m &mdash; and if you cannot reach it safely from the ground at all, that is a job for a licensed pro, not a taller ladder. Whichever you buy, check for the PCP number on the label before checkout.`
  - After: `<strong>Typical eave, deck, or shed nest?</strong> The <em>Best Overall</em> Raid jet spray does everything well and is the one can to own. <strong>Big exposed paper nest?</strong> The <em>Best Foam Blanket</em> WaspOut&rsquo;s expanding foam smothers it most completely; its record excludes nests underground or in voids, so keep it out of holes. <strong>Nest two storeys up?</strong> Reach for the longest published throw among Canadian-registered cans &mdash; SC Johnson rates Raid Wasp &amp; Hornet Bug Killer 7 at up to 5.7 m &mdash; and if you cannot reach it safely from the ground at all, that is a job for a licensed pro, not a taller ladder. Whichever you buy, check for the PCP number on the label before checkout.`
- Line 423. Listed line.
  - Before: `<BuyLink tag={AMZ_TAG} search="raid wasp hornet killer">Raid Wasp &amp; Hornet foam →</BuyLink>`
  - After: `<BuyLink tag={AMZ_TAG} search="raid wasp hornet killer">Raid Wasp &amp; Hornet jet spray →</BuyLink>`
- Line 435. Listed line.
  - Before: `<BuyLink tag={AMZ_TAG} search="raid wasp hornet killer">Check Raid Wasp &amp; Hornet foam on Amazon.ca →</BuyLink>`
  - After: `<BuyLink tag={AMZ_TAG} search="raid wasp hornet killer">Check Raid Wasp &amp; Hornet jet spray on Amazon.ca →</BuyLink>`

### app/blog/motion-activated-sprinkler-canada/page.tsx (15 lines)

Evidence for every line below: OWNER-DECISIONS.md, section B, row 4 (boxes say 9V, Orbit lists 4 AA; "Yard Enforcer Pro" does not exist). Orbit Canada product page, read Oct 25, 2026: "Requires 4-AA batteries", item 62100, detection "up to 40 feet away", a flow-through outlet that "allows you to add additional sprinklers triggered by the sensor", no Pro model: https://canada.orbitonline.com/en-ca/products/yard-enforcer-motion-activated-sprinkler. The Pro elements now use the page's existing standard Yard Enforcer search (the page already advises a second standard unit for big lots).

- Line 130. Quick Answer AmazonLink sentence: "one 9V battery lasts the whole season".
  - Before: `<p className="text-gray-800 text-[15px] leading-relaxed font-medium">The best motion-activated sprinkler in Canada is the <AmazonLink search="orbit yard enforcer motion activated sprinkler" tag={AMZ_TAG} className="font-bold underline decoration-emerald-500 underline-offset-2 hover:text-emerald-900">Orbit Yard Enforcer</AmazonLink> — its infrared sensor spots animals up to roughly 12 metres away across a 120-degree arc, its day/night selector lets you target nocturnal raccoons without soaking daytime birds or kids, and one 9V battery lasts the whole season. It is the rare deterrent that is humane, chemical-free, and needs no PMRA registration.</p>`
  - After: `<p className="text-gray-800 text-[15px] leading-relaxed font-medium">The best motion-activated sprinkler in Canada is the <AmazonLink search="orbit yard enforcer motion activated sprinkler" tag={AMZ_TAG} className="font-bold underline decoration-emerald-500 underline-offset-2 hover:text-emerald-900">Orbit Yard Enforcer</AmazonLink> — its infrared sensor spots animals up to roughly 12 metres away across a 120-degree arc, its day/night selector lets you target nocturnal raccoons without soaking daytime birds or kids, and it runs on 4 AA alkaline batteries (Orbit publishes no battery-life figure). It is the rare deterrent that is humane, chemical-free, and needs no PMRA registration.</p>`
- Line 156. Card 1 why: "~7,500 activations per 9V battery".
  - Before: `why: 'The category benchmark: ~12 m / 120° infrared detection, a genuine day/night/24-hour mode selector, ~7,500 activations per 9V battery, and a pass-through hose port for daisy-chaining. The mode selector alone justifies it over clones.',`
  - After: `why: 'The category benchmark: ~12 m / 120° infrared detection, a genuine day/night/24-hour mode selector, 4 AA alkaline batteries (Orbit publishes no battery-life figure), and a pass-through hose port for daisy-chaining. The mode selector alone justifies it over clones.',`
- Line 161. Card 1 pro: "Season-long battery life on one 9V".
  - Before: `pros: ['Day / night / 24-hour sensing modes', 'Season-long battery life on one 9V', 'Pass-through port to chain a second unit'],`
  - After: `pros: ['Day / night / 24-hour sensing modes', 'Runs on 4 AA alkaline batteries (per Orbit)', 'Pass-through port to chain a second unit'],`
- Line 166. Card 2: the non-existent Pro.
  - Before: `name: 'Orbit Yard Enforcer Pro',`
  - After: `name: 'A second Orbit Yard Enforcer',`
- Line 167. Card 2 why.
  - Before: `why: 'The upgraded version of the same platform with a wider detection footprint and beefed-up construction — one Pro can cover approach routes that would take two standard units on a big suburban or rural lot.',`
  - After: `why: 'For a big lot with more than one approach route, put a second standard Yard Enforcer on the second route: Orbit rates detection at up to 40 ft per unit, and says the flow-through outlet “allows you to add additional sprinklers triggered by the sensor.”',`
- Line 168. Card 2 search: Pro search replaced with the page's existing standard search.
  - Before: `search: 'orbit yard enforcer pro motion activated sprinkler',`
  - After: `search: 'orbit yard enforcer motion activated sprinkler',`
- Line 170. Card 2 pros.
  - Before: `pros: ['Larger detection footprint per unit', 'Same trusted sensing platform', 'Sturdier build for exposed placements'],`
  - After: `pros: ['Covers a second approach route', 'Same Off / Day / Night / Always settings', 'Flow-through outlet takes extra sprinklers (per Orbit)'],`
- Line 171. Card 2 cons.
  - Before: `cons: ['Premium price over the standard model', 'Overkill for a small garden bed'],`
  - After: `cons: ['Two units to buy, move and winterize', 'Overkill for a small garden bed'],`
- Line 185. "Which one should you buy?" sold the Pro.
  - Before: `<strong>Raccoons shredding the lawn or cats using the garden as a litter box?</strong> Buy the <em>Best Overall</em> Orbit Yard Enforcer and run it in night-only (raccoons) or 24-hour (cats) mode. <strong>Big lot with multiple approach routes?</strong> The <em>Best for Large Yards</em> Pro covers more ground per unit — or daisy-chain two standard Enforcers off one tap. <strong>Just protecting one small veggie bed on a tight budget?</strong> A <em>Best Budget</em> clone works, but you give up the day/night selector that keeps kids and dogs dry.`
  - After: `<strong>Raccoons shredding the lawn or cats using the garden as a litter box?</strong> Buy the <em>Best Overall</em> Orbit Yard Enforcer and run it in night-only (raccoons) or 24-hour (cats) mode. <strong>Big lot with multiple approach routes?</strong> The <em>Best for Large Yards</em> answer is a second standard Enforcer covering the second route. <strong>Just protecting one small veggie bed on a tight budget?</strong> A <em>Best Budget</em> clone works, but you give up the day/night selector that keeps kids and dogs dry.`
- Line 245. Button for the Pro.
  - Before: `<BuyLink tag={AMZ_TAG} search="orbit yard enforcer pro motion activated sprinkler">Yard Enforcer Pro →</BuyLink>`
  - After: `<BuyLink tag={AMZ_TAG} search="orbit yard enforcer motion activated sprinkler">A second Yard Enforcer →</BuyLink>`
- Line 249. Heading of the comparison table named the Pro (not an affiliate line; logged because it heads the buy table).
  - Before: `<h2>Comparison: Orbit Yard Enforcer vs Pro vs Budget Clones</h2>`
  - After: `<h2>Comparison: One Orbit Yard Enforcer vs Two vs Budget Clones</h2>`
- Line 270. Pro table row.
  - Before: `<td className="px-4 py-3 font-bold text-brand-800">Orbit Yard Enforcer Pro</td>`
  - After: `<td className="px-4 py-3 font-bold text-brand-800">Two Orbit Yard Enforcers</td>`
- Line 271. Pro table row.
  - Before: `<td className="px-4 py-3 text-gray-700">Same day/night platform, upgraded build</td>`
  - After: `<td className="px-4 py-3 text-gray-700">The same day/night selector on each unit</td>`
- Line 272. Pro table row ("9V battery").
  - Before: `<td className="px-4 py-3 text-gray-700">Wider detection footprint per unit; 9V battery</td>`
  - After: `<td className="px-4 py-3 text-gray-700">Two detection zones of up to 40 ft each; 4 AA batteries per unit</td>`
- Line 274. Pro table row button: Pro search replaced with the standard search.
  - Before: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="orbit yard enforcer pro motion activated sprinkler" block>Check price on Amazon.ca →</BuyLink></td>`
  - After: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="orbit yard enforcer motion activated sprinkler" block>Check price on Amazon.ca →</BuyLink></td>`

### app/blog/mosquito-repellent-guide-ontario-2026/page.tsx (3 lines)

Evidence for every line below: OWNER-DECISIONS.md, section B, row 5 (Natrapel AwardRow says "Odourless", but the maker lists a fragrance).

- Line 150. Listed (AwardRow why).
  - Before: `why: 'Odourless, long-wearing, and it won’t melt plastics or fabrics — and it is registered for sale in Canada under the Pest Control Products Act. The best all-round everyday backyard and travel pick for Ontario.',`
  - After: `why: 'Long-wearing, and it won’t melt plastics or fabrics — and it is registered for sale in Canada under the Pest Control Products Act. The best all-round everyday backyard and travel pick for Ontario.',`
- Line 155. Listed (AwardRow pros).
  - Before: `pros: ['Canadian label claims up to 12 hrs vs mosquitoes and ticks', 'Odourless and non-greasy', 'Won’t damage gear, plastics or fabrics'],`
  - After: `pros: ['Canadian label claims up to 12 hrs vs mosquitoes and ticks', 'Non-greasy', 'Won’t damage gear, plastics or fabrics'],`
- Line 208. Same claim about Natrapel in the comparison table's buy row.
  - Before: `<td className="py-3 pr-4"><strong>Best overall</strong> — odourless everyday backyard &amp; travel pick; Canadian PCP-registered, label claims up to 12 hrs.</td>`
  - After: `<td className="py-3 pr-4"><strong>Best overall</strong> — everyday backyard &amp; travel pick; Canadian PCP-registered, label claims up to 12 hrs.</td>`

### app/blog/best-indoor-fly-mosquito-trap-canada/page.tsx (8 lines)

Evidence for every line below: OWNER-DECISIONS.md, section B, row 8 (the 1/4-acre DynaTrap is an outdoor trap, but the page sold it as ~600 sq ft indoors). DynaTrap's store lists its 1/4 Acre trap under "Outdoor Traps" (https://www.dynatrap.com/store/outdoor, read Oct 25, 2026; the DT160 product URL now redirects there). Wording fix only: the search "dynatrap indoor insect trap dt160" is unchanged.

- Line 143. Card badge "Best for Large Rooms".
  - Before: `badge: 'Best for Large Rooms',`
  - After: `badge: 'Outdoor Option (1/4 Acre)',`
- Line 144. Card name.
  - Before: `name: 'DynaTrap Fan-Suction UV Unit',`
  - After: `name: 'DynaTrap 1/4 Acre Insect Trap (DT160)',`
- Line 145. Card why ("~600 sq ft", "open kitchen or family room").
  - Before: `why: 'Fan-suction UV that covers up to roughly 600 sq ft with no refills — you just rinse the basket. The pick for an open kitchen or family room.',`
  - After: `why: 'UV light plus fan suction, with no glue boards to buy: you empty the basket. DynaTrap rates this model for up to 1/4 acre and sells it with its outdoor traps, so it is a yard trap; for a bedroom or kitchen, the Best Overall pick is the indoor one.',`
- Line 148. Card pro "Covers up to ~600 sq ft".
  - Before: `pros: ['Covers up to ~600 sq ft', 'No refills to buy', 'Fair–good mosquito catch'],`
  - After: `pros: ['Rated for up to 1/4 acre (DynaTrap)', 'No refills to buy', 'Fair–good mosquito catch'],`
- Line 149. Card con added.
  - Before: `cons: ['Quiet fan hum', 'You empty and rinse the basket'],`
  - After: `cons: ['DynaTrap sells it as an outdoor trap', 'Quiet fan hum', 'You empty and rinse the basket'],`
- Line 172. "Which one should you buy?" sold it for large rooms.
  - Before: `<strong>Bedroom or kitchen?</strong> The <em>Best Overall</em> UV + fan + glue-board trap is the quiet, all-round winner. <strong>Open-plan or large room?</strong> The <em>Best for Large Rooms</em> DynaTrap covers more with no refills. <strong>Want zero fuss on a nightstand?</strong> Grab the <em>Best Set-and-Forget</em> plug-in — but remember no indoor trap fixes the source. Cutting the outdoor population with <Link href="/mosquito-control">professional barrier spray</Link> means far fewer insects reach the door in the first place.`
  - After: `<strong>Bedroom or kitchen?</strong> The <em>Best Overall</em> UV + fan + glue-board trap is the quiet, all-round winner. <strong>Want a trap for the yard rather than a room?</strong> The <em>Outdoor Option</em> DynaTrap is rated by DynaTrap for up to 1/4 acre, with no refills. <strong>Want zero fuss on a nightstand?</strong> Grab the <em>Best Set-and-Forget</em> plug-in — but remember no indoor trap fixes the source. Cutting the outdoor population with <Link href="/mosquito-control">professional barrier spray</Link> means far fewer insects reach the door in the first place.`
- Line 207. Buy-table row label.
  - Before: `<td className="px-4 py-3 font-bold text-brand-800">Best for large rooms</td>`
  - After: `<td className="px-4 py-3 font-bold text-brand-800">Outdoor option</td>`
- Line 209. Buy-table row "Up to ~600 sq ft".
  - Before: `<td className="px-4 py-3 text-gray-700">Up to ~600 sq ft</td>`
  - After: `<td className="px-4 py-3 text-gray-700">Rated up to 1/4 acre, sold as an outdoor trap (DynaTrap)</td>`

### app/blog/best-fruit-fly-trap-canada/page.tsx (4 lines)

Evidence for every line below: OWNER-DECISIONS.md, section B, row 7 (boxes say to buy a TERRO "refill lure"; TERRO: "We do not sell refills"). TERRO product page, read Oct 25, 2026: "We do not sell refills", traps "designed to be disposable", "each trap lasts for up to 45 days", "Discard the traps after 45 days of use": https://www.terro.com/terro-fruit-fly-trap-t2502b

- Line 165. Same claim in the Quick Answer's Amazon-link sentence.
  - Before: `<p className="text-gray-800 text-[15px] leading-relaxed font-medium">The best fruit fly trap in Canada is the <AmazonLink search="terro fruit fly trap" tag={AMZ_TAG} className="font-bold underline decoration-emerald-500 underline-offset-2 hover:text-emerald-900">TERRO Fruit Fly Trap</AmazonLink> &mdash; the little red apple with a vinegar-based liquid lure. Fruit flies hunt by fermentation smell, not light, so a scent lure out-catches UV traps and sticky ribbons in a kitchen. Each apple works for about 30 days, refill lure keeps seasonal costs low, and pairing traps with breeding-source removal ends most infestations in two to three weeks.</p>`
  - After: `<p className="text-gray-800 text-[15px] leading-relaxed font-medium">The best fruit fly trap in Canada is the <AmazonLink search="terro fruit fly trap" tag={AMZ_TAG} className="font-bold underline decoration-emerald-500 underline-offset-2 hover:text-emerald-900">TERRO Fruit Fly Trap</AmazonLink> &mdash; the little red apple with a vinegar-based liquid lure. Fruit flies hunt by fermentation smell, not light, so a scent lure out-catches UV traps and sticky ribbons in a kitchen. Each apple works for about 30 days (TERRO says up to 45) and is then thrown away, since TERRO sells no refills; pairing traps with breeding-source removal ends most infestations in two to three weeks.</p>`
- Line 169. Listed line.
  - Before: `<li>Reuse the apple housings and buy refill lure &mdash; the cheapest way to run traps every summer.</li>`
  - After: `<li>TERRO designs the apples to be disposable and sells no refills: it says to discard each trap after 45 days of use.</li>`
- Line 195. Listed line.
  - Before: `pros: ['Scent lure out-catches UV on fruit flies', 'About 30 days of catching per trap', 'Refill lure keeps seasonal cost low'],`
  - After: `pros: ['Scent lure out-catches UV on fruit flies', 'About 30 days of catching per trap', 'Disposable, so there is no refill to buy (TERRO sells none)'],`
- Line 258. Same claim in the trap-types table's TERRO buy row.
  - Before: `<td className="px-4 py-3 text-gray-700">Refill lure roughly monthly in season</td>`
  - After: `<td className="px-4 py-3 text-gray-700">A new trap every 30&ndash;45 days (TERRO sells no refills)</td>`

### Left unchanged, for the owner

- Not boxes, so outside FIX-BRIEF (same facts as above): motion-activated-sprinkler-canada FAQ answers at lines 30 and 66 still name the "Yard Enforcer Pro"; best-indoor-fly-mosquito-trap-canada FAQ (line 27), Quick Answer bullet (116) and placement tip (311) still say ~600 sq ft; best-fruit-fly-trap-canada FAQ (line 57) and the Refill Economics item (407) still say TERRO sells refill lure; mosquito-dunks-canada-guide Quick Answer text (line 297) still says to use Mosquito Bits for fast knockdown.
- Box text not in OWNER-DECISIONS.md: mosquito-dunks-canada-guide card 1 (line 373) quotes a price ("$25–$35"); mosquito-bits-canada-vs-dunks card 3 (line 270) gives the U.S. "one dunk per 50-gallon rain barrel" rate (the Canadian label puts a barrel at a quarter dunk); best-wasp-nest-spray-canada card 3 pro (line 225) says "registered with Health Canada".
- Fogger: the registered Muskol Patio & Deck Fogger (Reg. No. 22808.03) could become the swap target once someone adds and checks an Amazon.ca link for it; the brief does not allow inventing that link here.

## Bed bug pages

Nine TSX pages under app/blog. Line numbers are the edited file. Tags, element types, positions and counts are unchanged (counted before and after); every swapped-in search term was already live on another page; no line deleted. No git, no build; a TypeScript syntax parse of the nine files passed.

**Evidence key** (each entry cites these codes):

- `D-cross`: OWNER-DECISIONS A, row 'crossfire-bed-bug-concentrate-review-canada': TopPick, StickyBuyBar and TopBox call CimeXa 'registered'; CimeXa is not in the export; fix: remove 'registered' or swap the pick for a registered dust.
- `D-four`: OWNER-DECISIONS A, row 'cimexa-bed-bug-review-canada; bed bug spray pages': CimeXa, EcoRaider, Proof and Harris picks in buy boxes, none in the export; fix: mark them 'not registered in Canada' or swap for registered picks.
- `D-bulk`: OWNER-DECISIONS A, row 'best-bed-bug-powder-canada': 'Bulk DE' pick with no PCP number; fix: swap for a registered DE product.
- `D-matt`: OWNER-DECISIONS A, row 'best-bed-bug-spray-for-mattress-canada': 'mattress-safe' (lines 158, 159, 183); Pro Max box says 'frames' (label: DO NOT apply to ... furniture); Sleep Tight box says 'water-based' (label: contains petroleum distillates); KONK box says 'residual' (label: insects must be contacted). The Pro Max and Sleep Tight boxes are on bed-bug-spray-canada, not the mattress page (research note data/god-build/research/top3/bed-bug-spray-canada.md, 'Left alone, for the owner').
- `D-travel`: OWNER-DECISIONS A, row 'best-bed-bug-spray-for-travel-canada': Doktor Doom Travel Pro (PCP 32254) shown for luggage, not a listed use site; Proof not registered; Insect Shield permethrin clothing not registered (the only registered treated clothing, 32757, covers mosquitoes and ticks); fix: reword to the labelled uses, or swap.
- `D-detector`: OWNER-DECISIONS C: best-bed-bug-detector-canada picks BuggyBeds sticky traps; EPA says sticky traps are not for bed bugs. FIX-BRIEF item 3: keep the pick, make the box say what sticky monitors can't do.
- `D-steamer`: OWNER-DECISIONS C: best-bed-bug-steamer-canada picks hold 1.6, 1.4 and 0.35 L; UMN recommends 4 L or more. FIX-BRIEF item 3: keep the picks, give the capacity against UMN's 4 L advice.
- `B-safe`: FIX-BRIEF item 1 ('remove mattress-safe and every other safe') and the banned-claims rule (no 'safe', 'non-toxic').
- `B-swap`: FIX-BRIEF item 2: point the box at the registered alternative the same page (or a sibling) already recommends, reusing its existing search term; element type, position, tag and count kept.
- `B-text`: A text line (no affiliate element) changed only because the box swap would otherwise make it false.
- `R-none`: Registry export of 3 Oct 2026 (archived copy; latest registration date in it 2026-10-01): CIMEXA/SILICIDE 0 rows; ECORAIDER/ECOVENGER 0; HARRIS 0; INSECT SHIELD 0; PROOF 5 rows, none a bed bug product.
- `R-32561`: Export: 32561 DOKTOR DOOM BE GREEN PREMIUM FOOD GRADE DIATOMACEOUS EARTH, DOMESTIC, current, bed bugs among the pests. Label 32561 (https://pest-control.canada.ca/pesticide-registry/en/product-details.html?q=32561): 'BED BUGS: Disassemble beds and dust frames, joints, mattresses, tufts and seams, floors and baseboards'; 5.0 g per square metre; 'Apply lightly and uniformly'; 'Avoid breathing dust'; net contents 100 g to 7 kg; 'Made in Canada'.
- `R-29339`: Export: 29339 DOKTOR DOOM SLEEP TIGHT BED BUG KILLER II, DOMESTIC, current, pyrethrins + piperonyl butoxide, sites BED; BED FRAME; BOOKCASE; INDOOR; MATTRESS. Label as recorded by the checker (scratchpad converters/bedbug-evidence.md): furniture '(mattresses, box springs and bed frames only)'; 'Contains petroleum distillates'; no egg claim.
- `R-29633`: Export: 29633 KNOCK DOWN BED BUG KILLER, DOMESTIC, current, pyrethrins + piperonyl butoxide 0.25%/1.25%, sites INDOOR; MATTRESS, pests BED BUGS. Label as recorded by the checker: furniture '(pet bedding, mattresses, box springs and bed frames only)'; 'Spray mattress, particularly around tufts and seams'; max 16 s per square metre.
- `R-KDde`: Export: 31048 KNOCK DOWN ECO CRAWLING INSECT CONTROL & KILLER BAIT POWDER and 32665 KNOCK DOWN DUST DIATOMACEOUS EARTH, both DOMESTIC, current, bed bugs among the pests.
- `R-31110`: Export: 31110 KONK BED BUG KILLER, DOMESTIC, current, pyrethrins + piperonyl butoxide. Label as recorded by the checker: 0.50%/5.00%; 'Spray mattress lightly, particularly around seams and tufts. Take beds apart and spray the frames, springs and all joints'; 'Insects must be contacted to be killed'; DANGER extremely flammable.
- `R-34126`: Label 34126 (Doktor Doom Pro Max) as recorded by the checker: 'TO KILL BED BUGS: DO NOT apply to the mattress, headboard, footboard or furniture'; apply to cracks and crevices, along and behind baseboards and molding, floors beneath furniture. Residual wording from the page's own label-check row.
- `R-32254`: Export: 32254 DOKTOR DOOM TRAVEL PRO BED BUG KILLER, DOMESTIC, current, d-phenothrin + tetramethrin, sites BED; INDOOR; MATTRESSES, pests BED BUGS.
- `R-32757`: Export: 32757 NO FLY ZONE, DOMESTIC, permethrin, sites APPAREL, pests MOSQUITOES; TICKS.
- `S-terms`: Swapped-in search terms, each already live elsewhere: 'doktor doom diatomaceous earth' (best-bed-bug-powder-canada L227, L268); 'doktor doom sleep tight bed bug spray' (bed-bug-spray-canada L139-140, L260); 'knock down bed bug killer' (bed-bug-spray-canada L231, L262); 'knock down diatomaceous earth' (diatomaceous-earth-canada-buyers-guide L147, L219, a listed sibling of the powder page); 'thermalstrike ranger bed bug heater' and 'packtite closet bed bug heater' (best-bed-bug-luggage-heater-canada L153, L143; heaters are devices, no PCP number needed).
- `U-epa`: EPA, 'Sticky traps are not for bed bugs' (https://www.epa.gov/bedbugs/do-it-yourself-bed-bug-control); Wang, Gibb and Bennett 2009, minimal success with sticky traps even with heat or CO2 (https://www.extension.entm.purdue.edu/bedbugs/pdf/bedbuginterceptor.pdf). Both already cited on the page.
- `U-umn`: University of Minnesota Extension: a commercial steamer of at least 1 gallon (4 L), avoid smaller non-commercial units (https://extension.umn.edu/garden-and-home/home-maintenance/household-insects/bed-bugs/bed-bug-prevention-and-control-in-the-home). Tank sizes as in OWNER-DECISIONS C and the page's FAQ.
- `U-catsa`: CATSA insecticides entry, already cited on the page (https://www.catsa-acsta.gc.ca/en/what-can-bring/item/insecticides-except-those-be-used-crew-members-disinfection-purposes); Health Canada's hot-dryer advice, already cited on the page.

### crossfire-bed-bug-concentrate-review-canada

- **L122-123** (D-cross, B-swap, R-none, R-32561, S-terms). Pick swapped to Doktor Doom Be Green DE (PCP 32561). The BuyLinks at L140, L201 and L248 carried the same 'Canada-legal' CimeXa pick, so they follow it. TopPick score 8.3 is the powder page's score for this product.
  - L122 before: `<StickyBuyBar tag={AMZ_TAG} name="PMRA-registered silica desiccant dust (Canada-legal)" search="cimexa insecticide dust bed bug" label="Canada-legal pick" />`
  - L122 after: `<StickyBuyBar tag={AMZ_TAG} name="Doktor Doom Be Green diatomaceous earth (PCP 32561)" search="doktor doom diatomaceous earth" label="Canada-legal pick" />`
  - L123 before: `<TopBox tag={AMZ_TAG} name="PMRA-registered silica desiccant dust (Canada-legal)" search="cimexa insecticide dust bed bug" label="Canada-legal pick" />`
  - L123 after: `<TopBox tag={AMZ_TAG} name="Doktor Doom Be Green diatomaceous earth (PCP 32561)" search="doktor doom diatomaceous earth" label="Canada-legal pick" />`

- **L140** (same evidence as the entry above).
  - L140 before: `<BuyLink search="cimexa insecticide dust bed bug" tag={AMZ_TAG} block className="sm:w-auto sm:min-h-0 sm:inline-flex sm:rounded-full sm:px-4 sm:py-2">Check price on Amazon.ca →</BuyLink>`
  - L140 after: `<BuyLink search="doktor doom diatomaceous earth" tag={AMZ_TAG} block className="sm:w-auto sm:min-h-0 sm:inline-flex sm:rounded-full sm:px-4 sm:py-2">Check price on Amazon.ca →</BuyLink>`

- **L151-154** (same evidence as the entry above).
  - L151 before: `name="PMRA-Registered Silica Desiccant Dust"`
  - L151 after: `name="Doktor Doom Be Green Premium Food Grade Diatomaceous Earth (PCP 32561)"`
  - L152 before: `blurb="Since Crossfire cannot legally be used in Canada, this is the tool we point Canadian DIY readers to: an amorphous-silica-gel desiccant dust that kills bed bugs by dehydration rather than a nerve toxin. Resistance is essentially a non-issue, and a barely visible film in cracks, outlet boxes, and bed-frame voids stays lethal for months. It carries a Canadian PCP registration number — legal, low-toxicity, and the most reliable long-residual tool a homeowner can actually buy here."`
  - L152 after: `blurb="Since Crossfire cannot legally be used in Canada, this is the dust we point Canadian DIY readers to: a diatomaceous earth whose label carries Registration No. 32561 (domestic class) and lists bed bugs. It kills by drying insects out rather than through a nerve toxin. For bed bugs the label says to take beds apart and dust &ldquo;frames, joints, mattresses, tufts and seams, floors and baseboards,&rdquo; applied lightly and uniformly at 5.0 g per square metre. CimeXa, the best-known silica dust, has no Canadian registration."`
  - L153 before: `search="cimexa insecticide dust bed bug"`
  - L153 after: `search="doktor doom diatomaceous earth"`
  - L154 before: `score={8.4}`
  - L154 after: `score={8.3}`

- **L156-159** (same evidence as the entry above).
  - L156 before: `'PMRA-registered and legal to use in Canada',`
  - L156 after: `'Domestic-class registration, No. 32561, with bed bugs on the label',`
  - L157 before: `'Kills by dehydration — no resistance possible',`
  - L157 after: `'Kills by drying insects out, not a nerve toxin',`
  - L158 before: `'Months-long residual in dry, undisturbed cracks',`
  - L158 after: `'Label lists frames, joints, mattress tufts and seams, floors and baseboards',`
  - L159 before: `'Low-toxicity active; light film, not a pile',`
  - L159 after: `'Label sizes from 100 g to 7 kg',`

- **L163-164** (same evidence as the entry above).
  - L163 before: `'Must be applied as a fine film with a hand duster',`
  - L163 after: `'Slower than silica gel in university lab tests',`
  - L164 before: `'Not for damp areas or surfaces you touch daily',`
  - L164 after: `'Label: “Avoid breathing dust”; apply lightly and uniformly',`

- **L201** (same evidence as the entry above).
  - L201 before: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="cimexa insecticide dust bed bug" block>Check price on Amazon.ca →</BuyLink></td>`
  - L201 after: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="doktor doom diatomaceous earth" block>Check price on Amazon.ca →</BuyLink></td>`

- **L248** (same evidence as the entry above).
  - L248 before: `<BuyLink tag={AMZ_TAG} search="cimexa insecticide dust bed bug">Silica desiccant dust →</BuyLink>`
  - L248 after: `<BuyLink tag={AMZ_TAG} search="doktor doom diatomaceous earth">Diatomaceous earth dust (PCP 32561) →</BuyLink>`

- **L284** (B-text). Said the verdict box above held a silica dust.
  - L284 before: `<li><strong>A silica desiccant dust (your residual backbone).</strong> This is the tool in our verdict box above. Amorphous silica gel kills by stripping the waxy layer off the insect&rsquo;s shell so it dehydrates &mdash; a physical mechanism, not a nerve toxin, which means bed bugs cannot evolve resistance to it. A barely visible film in cracks, outlet boxes, and bed-frame voids stays lethal for months. In Canada, buy a dust whose label shows a PCP number: PMRA&rsquo;s registry has no CimeXa listing, and its domestic bed bug dusts are diatomaceous earth. Our <Link href="/blog/cimexa-bed-bug-review-canada">CimeXa review</Link> covers the best-known silica dust, and our <Link href="/blog/best-bed-bug-powder-canada">bed-bug powder guide</Link> compares it against diatomaceous earth.</li>`
  - L284 after: `<li><strong>A desiccant dust (your residual backbone).</strong> The dust in our verdict box above is a diatomaceous earth whose label carries PCP 32561 and lists bed bugs. Amorphous silica gel kills by stripping the waxy layer off the insect&rsquo;s shell so it dehydrates &mdash; a physical mechanism, not a nerve toxin, which means bed bugs cannot evolve resistance to it. A barely visible film in cracks, outlet boxes, and bed-frame voids stays lethal for months. In Canada, buy a dust whose label shows a PCP number: PMRA&rsquo;s registry has no CimeXa listing, and its domestic bed bug dusts are diatomaceous earth. Our <Link href="/blog/cimexa-bed-bug-review-canada">CimeXa review</Link> covers the best-known silica dust, and our <Link href="/blog/best-bed-bug-powder-canada">bed-bug powder guide</Link> compares it against diatomaceous earth.</li>`

### cimexa-bed-bug-review-canada

- **L118-119** (D-four, B-swap, R-none, R-32561, S-terms). CimeXa boxes swapped to the registered DE the page recommends for Canada (crossfire's 'what to buy instead' pattern). 97.5% vs 10% is the page's own cited Kentucky result. Score 8.3 as on the powder page.
  - L118 before: `<StickyBuyBar tag={AMZ_TAG} name="CimeXa silica gel dust" search="cimexa insecticide dust" label="Our verdict: 9.1/10" />`
  - L118 after: `<StickyBuyBar tag={AMZ_TAG} name="Doktor Doom Be Green diatomaceous earth (PCP 32561)" search="doktor doom diatomaceous earth" label="Canada-legal pick" />`
  - L119 before: `<TopBox tag={AMZ_TAG} name="CimeXa silica gel dust" search="cimexa insecticide dust" label="Our verdict: 9.1/10" />`
  - L119 after: `<TopBox tag={AMZ_TAG} name="Doktor Doom Be Green diatomaceous earth (PCP 32561)" search="doktor doom diatomaceous earth" label="Canada-legal pick" />`

- **L143-146** (same evidence as the entry above).
  - L143 before: `label="Our Verdict"`
  - L143 after: `label="Canada-Legal Pick (what to buy instead)"`
  - L144 before: `name="CimeXa Silica Gel Dust — pro-grade bed bug desiccant"`
  - L144 after: `name="Doktor Doom Be Green Premium Food Grade Diatomaceous Earth (PCP 32561)"`
  - L145 before: `blurb="An engineered amorphous silica gel that professionals reach for when they want a residual that never expires and never meets resistance. It clings to a bed bug’s cuticle, strips the waxy layer that holds moisture in, and the insect dries out and dies over a few days &mdash; a mechanism no bed bug can evolve around. A barely-visible film into cracks and voids keeps killing for years, a fraction of a bottle treats a whole bedroom, and there is no pyrethroid chemistry for a resistant population to shrug off. It is not a knockdown spray and it will not reach eggs cemented in a seam, which is exactly why it earns its keep as the long-term backstop in a broader plan."`
  - L145 after: `blurb="CimeXa has no Canadian registration, so this is the desiccant we point Canadian readers to: a diatomaceous earth whose label carries Registration No. 32561 (domestic class) and lists bed bugs. It works the same way, by drying insects out, but more slowly: in University of Kentucky tests, 10% of bed bugs were dead 24 hours after a brief walk over diatomaceous earth, against 97.5% on CimeXa. For bed bugs its label says to take beds apart and dust &ldquo;frames, joints, mattresses, tufts and seams, floors and baseboards,&rdquo; applied lightly and uniformly."`
  - L146 before: `search="cimexa insecticide dust"`
  - L146 after: `search="doktor doom diatomaceous earth"`

- **L148-150** (same evidence as the entry above).
  - L148 before: `score={9.1}`
  - L148 after: `score={8.3}`
  - L149 before: `pros={['Kills by desiccation — resistance is biologically impossible', 'Out-performs diatomaceous earth in independent lab testing', 'Near-permanent residual (up to ~10 years dry and undisturbed)', 'A tiny amount treats a whole room — excellent value per application', 'Legitimate Canadian retail availability — no grey-market importing']}`
  - L149 after: `pros={['Domestic-class registration, No. 32561, with bed bugs on the label', 'Kills by drying insects out, not a nerve toxin', 'Label sizes from 100 g to 7 kg']}`
  - L150 before: `cons={['Slow-acting — a residual barrier, not an instant knockdown', 'Treats voids and travel routes, not eggs sealed in seams', 'Needs a duster and a light touch — over-application actually works worse', 'Very fine dust — wear a mask and keep it out of open living areas']}`
  - L150 after: `cons={['Slower than CimeXa in university lab tests', 'A residual barrier, not an instant knockdown', 'Label: “Avoid breathing dust”; apply lightly and uniformly']}`

- **L179** (same evidence as the entry above).
  - L179 before: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="cimexa insecticide dust" block>Check price on Amazon.ca &rarr;</BuyLink></td>`
  - L179 after: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="doktor doom diatomaceous earth" block>Registered DE instead &rarr;</BuyLink></td>`

- **L186** (D-bulk, R-32561, S-terms). Same problem as the powder row: this row says DE is registered in Canada but searched generic food-grade DE. Now the registered DE.
  - L186 before: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="diatomaceous earth bed bugs food grade" block>Check price on Amazon.ca &rarr;</BuyLink></td>`
  - L186 after: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="doktor doom diatomaceous earth" block>Check price on Amazon.ca &rarr;</BuyLink></td>`

- **L258** (D-four, B-swap, R-none, R-32561, S-terms). CimeXa buttons pointed at the registered DE; button text names it.
  - L258 before: `<BuyLink tag={AMZ_TAG} search="cimexa insecticide dust">CimeXa dust on Amazon.ca &rarr;</BuyLink>`
  - L258 after: `<BuyLink tag={AMZ_TAG} search="doktor doom diatomaceous earth">Registered DE dust (PCP 32561) &rarr;</BuyLink>`

- **L314** (same evidence as the entry above).
  - L314 before: `<BuyLink tag={AMZ_TAG} search="cimexa insecticide dust">Check CimeXa on Amazon.ca &rarr;</BuyLink>`
  - L314 after: `<BuyLink tag={AMZ_TAG} search="doktor doom diatomaceous earth">Check Doktor Doom Be Green DE (PCP 32561) on Amazon.ca &rarr;</BuyLink>`

### best-bed-bug-powder-canada

- **L162** (B-safe, R-32561). Removed 'gentle to keep around a home with kids and pets', 'Low-toxicity' and 'forgiving to handle'.
  - L162 before: `why: 'A trusted, Canadian-market food-grade DE that is easy to find and gentle to keep around a home with kids and pets. Slower than silica, but effective in the right dry harbourage and the most accessible dust for a first-timer.',`
  - L162 after: `why: 'A trusted, Canadian-made DE whose label carries Reg. No. 32561 (domestic class) and lists bed bugs, and it is easy to find. Slower than silica, but effective in the right dry harbourage and the most accessible dust for a first-timer.',`

- **L165** (same evidence as the entry above).
  - L165 before: `pros: ['Low-toxicity food-grade mineral', 'Widely available to Canadian buyers', 'Inexpensive and forgiving to handle'],`
  - L165 after: `pros: ['Reg. No. 32561; bed bugs on the label', 'Widely available to Canadian buyers', 'Inexpensive'],`

- **L169-172** (D-bulk, B-swap, R-KDde, S-terms). Bulk DE swapped to Knock Down DE. Doktor Doom not used because it already has its own card in this row. Slot score 7.4 kept. L189 (whichToBuy) also drops 'gentle' (B-safe).
  - L169 before: `badge: 'Best Budget DE',`
  - L169 after: `badge: 'Best Alternate DE',`
  - L170 before: `name: 'Food-Grade Diatomaceous Earth (Bulk)',`
  - L170 after: `name: 'Knock Down Diatomaceous Earth (Reg. No. 31048 or 32665)',`
  - L171 before: `why: 'A plain bulk bag of food-grade DE is the cheapest way to dust a whole home. Not as refined as a named insecticide dust, but for cracks, voids, and baseboards on a budget it does the same desiccant job when applied thinly with a mask on.',`
  - L171 after: `why: 'Use a registered DE instead of a plain bulk “food grade” bag: a bag with no PCP number is not a registered pest control product. PMRA’s registry lists Knock Down Eco Crawling Insect Control & Killer Bait Powder (Reg. No. 31048) and Knock Down Dust Diatomaceous Earth (Reg. No. 32665) in the domestic class, both with bed bugs among the listed pests. Check the bag for one of those numbers and follow its label.',`
  - L172 before: `search: 'food grade diatomaceous earth bulk',`
  - L172 after: `search: 'knock down diatomaceous earth',`

- **L174-175** (same evidence as the entry above).
  - L174 before: `pros: ['Lowest cost per treatment', 'Big volume for whole-home coverage', 'Same desiccant mechanism as named DE'],`
  - L174 after: `pros: ['Domestic-class registrations that list bed bugs', 'Same desiccant mechanism as other DE', 'A second registered brand if Doktor Doom is out of stock'],`
  - L175 before: `cons: ['Verify food-grade, never pool-grade', 'Slowest option; wear a dust mask'],`
  - L175 after: `cons: ['Slow, like every DE', 'Confirm the PCP number on the listing'],`

- **L189** (same evidence as the entry above).
  - L189 before: `<strong>Want the single strongest dust?</strong> The <em>Best Overall</em> CimeXa silica gel kills faster and lasts at a lighter rate. <strong>Prefer a gentle, natural mineral that is easy to find?</strong> The <em>Best Diatomaceous Earth</em> Doktor Doom is the accessible pick. <strong>Dusting a whole house on a budget?</strong> A <em>Best Budget DE</em> bulk bag covers the most ground for the least money. <strong>Whichever powder you choose</strong>, add the <em>Best Applicator</em> bulb duster &mdash; the light-film technique it enables is what separates a powder that works from one that just sits there.`
  - L189 after: `<strong>Want the single strongest dust?</strong> The <em>Best Overall</em> CimeXa silica gel kills faster and lasts at a lighter rate. <strong>Prefer a natural mineral with a Canadian PCP number that is easy to find?</strong> The <em>Best Diatomaceous Earth</em> Doktor Doom (Reg. No. 32561) is the accessible pick. <strong>Doktor Doom out of stock?</strong> The <em>Best Alternate DE</em> from Knock Down carries a registration that lists bed bugs too (Reg. No. 31048 or 32665); skip plain bulk bags with no PCP number. <strong>Whichever powder you choose</strong>, add the <em>Best Applicator</em> bulb duster &mdash; the light-film technique it enables is what separates a powder that works from one that just sits there.`

- **L230-232** (same evidence as the entry above).
  - L230 before: `<td className="px-4 py-3 font-bold text-brand-800">Bulk food-grade DE<br /><span className="font-normal text-xs text-gray-500">value</span></td>`
  - L230 after: `<td className="px-4 py-3 font-bold text-brand-800">Knock Down DE<br /><span className="font-normal text-xs text-gray-500">registered alternative</span></td>`
  - L231 before: `<td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Good</strong> &mdash; slowest, most volume</td>`
  - L231 after: `<td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Good</strong> &mdash; slower, heavier film</td>`
  - L232 before: `<td className="px-4 py-3 text-gray-700">Whole-home coverage on a budget</td>`
  - L232 after: `<td className="px-4 py-3 text-gray-700">A second DE with a PCP number (Reg. No. 31048 or 32665)</td>`

- **L234** (same evidence as the entry above).
  - L234 before: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="food grade diatomaceous earth bulk" block>Check price on Amazon.ca →</BuyLink></td>`
  - L234 after: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="knock down diatomaceous earth" block>Check price on Amazon.ca →</BuyLink></td>`

### bed-bug-spray-canada

- **L146** (D-matt, R-34126, R-29339). Quick Answer line (carries the AmazonLink): Pro Max 'bed frames' replaced by the label's sites; link text names the mattress-labelled can, PCP 29339.
  - L146 before: `<p className="text-gray-800 text-[15px] leading-relaxed font-medium">The best bed bug spray legally available in Canada is <AmazonLink search="doktor doom sleep tight bed bug spray" tag={AMZ_TAG} className="font-bold underline decoration-emerald-500 underline-offset-2 hover:text-emerald-900">Doktor Doom Sleep Tight</AmazonLink> — it&rsquo;s PMRA-registered, labelled for direct use on mattresses and box springs, and widely stocked on Amazon.ca. Pair it with a permethrin-based residual (Doktor Doom Pro Max) for baseboards and bed frames, and treat every spray as a supporting tool: steam, encasements, and interceptor traps do the heavy lifting.</p>`
  - L146 after: `<p className="text-gray-800 text-[15px] leading-relaxed font-medium">The best bed bug spray legally available in Canada is <AmazonLink search="doktor doom sleep tight bed bug spray" tag={AMZ_TAG} className="font-bold underline decoration-emerald-500 underline-offset-2 hover:text-emerald-900">Doktor Doom Sleep Tight Bed Bug Killer II</AmazonLink> (PCP 29339) — it&rsquo;s PMRA-registered, labelled for direct use on mattresses and box springs, and widely stocked on Amazon.ca. Pair it with a permethrin-based residual (Doktor Doom Pro Max) for baseboards and floor cracks beside the bed, never the bed or other furniture, and treat every spray as a supporting tool: steam, encasements, and interceptor traps do the heavy lifting.</p>`

- **L210** (D-matt, R-29339). Removed 'Water-based, fast-drying' and 'won't stain' (not on label 29339) and 'the only widely stocked ... labelled for mattresses' (KONK, Knock Down, Raid and Ortho labels allow mattresses too: checker's evidence log).
  - L210 before: `why: 'The only widely stocked Canadian spray labelled for direct use on mattresses and box springs — a plant-derived pyrethrin that kills on contact, dries fast, and won’t stain most fabrics.',`
  - L210 after: `why: 'Sleep Tight Bed Bug Killer II (PCP 29339) is labelled for mattress tufts and seams, box springs and bed frames: a pyrethrin aerosol with piperonyl butoxide that kills the bugs it contacts. Check for PCP 29339, because the permethrin cans sold under the Sleep Tight name are not labelled for mattresses.',`

- **L215** (same evidence as the entry above).
  - L215 before: `pros: ['Labelled for mattresses & box springs', 'PMRA domestic-class registered', 'Water-based, fast-drying'],`
  - L215 after: `pros: ['Labelled for mattresses & box springs', 'PMRA domestic-class registered (PCP 29339)', 'Pyrethrins + piperonyl butoxide aerosol'],`

- **L221** (D-matt, R-34126). Pro Max: 'bed legs, frames, and furniture perimeters', 'Great for perimeters & frames' and 'weeks' replaced by the label's bed bug sites.
  - L221 before: `why: 'A permethrin residual for baseboards, bed legs, frames, and furniture perimeters — it keeps killing bugs that cross treated surfaces for weeks, the piece a contact-only spray misses.',`
  - L221 after: `why: 'A permethrin residual for cracks and crevices, along and behind baseboards and mouldings, and the floor beneath and behind the bed — the piece a contact-only spray misses. For bed bugs its label says do not apply to the mattress, headboard, footboard or furniture.',`

- **L224-225** (same evidence as the entry above).
  - L224 before: `pros: ['Weeks of surface residual', 'Great for perimeters & frames', 'Pairs with Sleep Tight'],`
  - L224 after: `pros: ['Residual, long-lasting out of sunlight (label)', 'Cracks, baseboards & floor beside the bed', 'Pairs with Sleep Tight'],`
  - L225 before: `cons: ['Not for mattresses or bedding', 'Pyrethroid resistance can blunt it'],`
  - L225 after: `cons: ['Label: not on the mattress, headboard, footboard or furniture', 'Pyrethroid resistance can blunt it'],`

- **L248** (D-matt, R-34126). whichToBuy: 'baseboards and frames' replaced by the label's sites.
  - L248 before: `<strong>Start with the <em>Best Overall</em> Sleep Tight</strong> for the bed itself, then add the <em>Best Residual</em> Pro Max for baseboards and frames. The <em>Best Alternate</em> and <em>Best Backup</em> cans are stock-out substitutes, not upgrades. Remember: no spray clears an infestation alone — pair any of these with steam, encasements, and interceptor traps.`
  - L248 after: `<strong>Start with the <em>Best Overall</em> Sleep Tight</strong> for the bed itself, then add the <em>Best Residual</em> Pro Max for baseboards and floor cracks (its label keeps it off the bed and other furniture). The <em>Best Alternate</em> and <em>Best Backup</em> cans are stock-out substitutes, not upgrades. Remember: no spray clears an infestation alone — pair any of these with steam, encasements, and interceptor traps.`

### best-natural-bed-bug-spray-canada

- **L123-124** (D-four, B-swap, R-none, R-29339, S-terms). EcoRaider swapped to the registered pick the page names in its hero and FAQ.
  - L123 before: `<StickyBuyBar tag={AMZ_TAG} name="EcoRaider plant-based bed bug killer" search="ecoraider bed bug killer spray" label="Best overall" />`
  - L123 after: `<StickyBuyBar tag={AMZ_TAG} name="Doktor Doom Sleep Tight Bed Bug Killer II (pyrethrins, PCP 29339)" search="doktor doom sleep tight bed bug spray" label="Best registered pick" />`
  - L124 before: `<TopBox tag={AMZ_TAG} name="EcoRaider plant-based bed bug killer" search="ecoraider bed bug killer spray" label="Best overall" />`
  - L124 after: `<TopBox tag={AMZ_TAG} name="Doktor Doom Sleep Tight Bed Bug Killer II (pyrethrins, PCP 29339)" search="doktor doom sleep tight bed bug spray" label="Best registered pick" />`

- **L131** (B-text). Said EcoRaider 'keeps the top slot here'.
  - L131 before: `<strong>EcoRaider is not currently sold on Amazon.ca.</strong> We have checked three times and searches for it return other brands entirely. It remains the strongest plant-based contact killer in published lab tests, which is why it keeps the top slot here &mdash; but on October 23, 2026, Health Canada&rsquo;s pesticide database showed no Canadian registration for EcoRaider or for <strong>Proof</strong>. The pick you can legally use in Canada is <strong>Doktor Doom</strong> in its pyrethrin version, Sleep Tight Bed Bug Killer II (PCP 29339).`
  - L131 after: `<strong>EcoRaider is not currently sold on Amazon.ca.</strong> We have checked three times and searches for it return other brands entirely. It remains the strongest plant-based contact killer in published lab tests, but on October 23, 2026, Health Canada&rsquo;s pesticide database showed no Canadian registration for EcoRaider or for <strong>Proof</strong>, so neither holds a pick slot here. The pick you can legally use in Canada, and our top pick, is <strong>Doktor Doom</strong> in its pyrethrin version, Sleep Tight Bed Bug Killer II (PCP 29339).`

- **L136** (D-four, B-swap, R-none, R-29339, S-terms). Quick Answer link and button, and AwardRow card 1. Score 8.6 is bed-bug-spray-canada's score for Sleep Tight.
  - L136 before: `<p className="text-gray-800 text-[15px] leading-relaxed font-medium">The best natural bed bug spray in Canada is a <strong>plant-based contact killer like <AmazonLink search="ecoraider bed bug killer spray" tag={AMZ_TAG} className="font-bold underline decoration-emerald-500 underline-offset-2 hover:text-emerald-900">EcoRaider</AmazonLink></strong>, worked directly into mattress seams, frame joints, and cracks. Botanical actives (geraniol, cedar) kill adults, nymphs, and directly-sprayed eggs with low odour &mdash; a common choice for bedrooms, used according to the label. <strong>Proof</strong> adds a longer-lasting botanical-plus-mineral residual; <strong>Doktor Doom</strong> is the pick when you want a Canadian brand with a clear PCP registration number. The catch that applies to every spray: contact killers only kill what they wet, so no spray alone clears an infestation &mdash; pair it with heat, encasements, and interceptor traps.</p>`
  - L136 after: `<p className="text-gray-800 text-[15px] leading-relaxed font-medium">The best natural bed bug spray you can legally use in Canada is a <strong>plant-derived pyrethrin spray such as <AmazonLink search="doktor doom sleep tight bed bug spray" tag={AMZ_TAG} className="font-bold underline decoration-emerald-500 underline-offset-2 hover:text-emerald-900">Doktor Doom Sleep Tight Bed Bug Killer II</AmazonLink></strong> (PCP 29339), whose label allows mattress tufts and seams, box springs and bed frames. Pyrethrins come from chrysanthemum flowers; this can pairs them with the synthetic synergist piperonyl butoxide. Essential-oil sprays such as <strong>EcoRaider</strong> and <strong>Proof</strong> show no Canadian registration. The catch that applies to every spray: contact killers only kill what they wet, so no spray alone clears an infestation &mdash; pair it with heat, encasements, and interceptor traps.</p>`

- **L147** (same evidence as the entry above).
  - L147 before: `<BuyLink search="ecoraider bed bug killer spray" tag={AMZ_TAG} block className="sm:w-auto sm:min-h-0 sm:inline-flex sm:rounded-full sm:px-4 sm:py-2">Check price on Amazon.ca →</BuyLink>`
  - L147 after: `<BuyLink search="doktor doom sleep tight bed bug spray" tag={AMZ_TAG} block className="sm:w-auto sm:min-h-0 sm:inline-flex sm:rounded-full sm:px-4 sm:py-2">Check price on Amazon.ca →</BuyLink>`

- **L161-164** (same evidence as the entry above).
  - L161 before: `name: 'EcoRaider Plant-Based Bed Bug Killer',`
  - L161 after: `name: 'Doktor Doom Sleep Tight Bed Bug Killer II (PCP 29339)',`
  - L162 before: `why: 'Our top plant-based contact killer: geraniol and cedar-oil actives knock down adults, nymphs, and directly-sprayed eggs fast, with low odour that suits bedrooms. The formula people reach for first when they want to avoid synthetic pyrethroids where they sleep.',`
  - L162 after: `why: 'The plant-derived spray you can legally use on a Canadian bed: pyrethrins, from chrysanthemum flowers, with the synthetic synergist piperonyl butoxide, in a can whose label allows mattress tufts and seams, box springs and bed frames. It kills the bugs it contacts, and the label makes no egg claim. Check for PCP 29339: the permethrin cans sold under the Sleep Tight name are not labelled for mattresses.',`
  - L163 before: `search: 'ecoraider bed bug killer spray',`
  - L163 after: `search: 'doktor doom sleep tight bed bug spray',`
  - L164 before: `score: 8.8,`
  - L164 after: `score: 8.6,`

- **L166-167** (same evidence as the entry above).
  - L166 before: `pros: ['Fast contact kill on adults & nymphs', 'Low-odour, plant-based formula', 'Comfortable to use on mattresses & upholstery'],`
  - L166 after: `pros: ['Domestic-class registration (PCP 29339)', 'Label allows mattress tufts & seams, box springs, frames', 'Plant-derived pyrethrins'],`
  - L167 before: `cons: ['Little lasting residual once dry', 'Only kills what the spray directly wets'],`
  - L167 after: `cons: ['Kills only the bugs it contacts; no egg claim', 'Contains petroleum distillates (label)'],`

- **L170-173** (D-four, B-swap, R-none, R-32561, S-terms). Proof swapped to the registered DE dust the page recommends for cracks and voids; badge says it is a dust, not a spray. Score 8.3 as on the powder page.
  - L170 before: `badge: 'Best Residual',`
  - L170 after: `badge: 'Best Natural Residual (a Dust)',`
  - L171 before: `name: 'Proof Bed Bug & Dust Mite Killer',`
  - L171 after: `name: 'Doktor Doom Be Green Diatomaceous Earth (PCP 32561)',`
  - L172 before: `why: 'Pairs botanical actives with a mineral component for a longer-lasting residual than an oil-only spray, so treated cracks and seams keep working a bit longer between applications. The pick when you want the spray to do more than knock down what you can see today.',`
  - L172 after: `why: 'Not a spray: a registered diatomaceous earth dust for the cracks and voids a spray cannot reach. A natural mineral that kills by drying insects out; its label (domestic class, PCP 32561) lists bed bugs and says to take beds apart and dust frames, joints, mattresses, tufts and seams, floors and baseboards, lightly and uniformly.',`
  - L173 before: `search: 'proof bed bug dust mite spray',`
  - L173 after: `search: 'doktor doom diatomaceous earth',`

- **L175-176** (same evidence as the entry above).
  - L175 before: `pros: ['Longer residual than oil-only sprays', 'Also targets dust mites', 'Low-odour, water-based'],`
  - L175 after: `pros: ['Domestic-class registration with bed bugs on the label', 'Mineral, not a nerve toxin', 'Keeps working where it is left in place'],`
  - L176 before: `cons: ['Still not a standalone cure', 'Check Canadian availability & registration'],`
  - L176 after: `cons: ['A dust, not a spray', 'Slow: kills over days, not on contact'],`

- **L193** (B-safe). 'Very low odour & toxicity'. The pick itself is not in OWNER-DECISIONS and was left.
  - L193 before: `pros: ['Affordable entry point', 'Very low odour & toxicity', 'Handy for spot-treating'],`
  - L193 after: `pros: ['Affordable entry point', 'Very low odour', 'Handy for spot-treating'],`

- **L199** (D-four, B-swap). whichToBuy (part of the AwardRow box) updated to the swapped picks.
  - L199 before: `<strong>Want the best all-round plant-based knockdown for a bedroom?</strong> The <em>Best Overall</em> EcoRaider is the right first bottle. <strong>Want the spray to keep working in treated cracks a little longer?</strong> Choose the <em>Best Residual</em> Proof. <strong>Set on a Canadian brand with a clear PMRA registration number?</strong> The <em>Best Canadian</em> Doktor Doom is your pick. <strong>Minor issue or a supplement on a tight budget?</strong> The <em>Best Budget Botanical</em> essential-oil spray does the light work &mdash; just confirm it is registered for sale in Canada.`
  - L199 after: `<strong>Want a plant-derived spray you can legally use on a Canadian bed?</strong> The <em>Best Overall</em> Sleep Tight Bed Bug Killer II (PCP 29339) is the right first can. <strong>Want something that keeps working in cracks a spray can&rsquo;t reach?</strong> Add the <em>Best Natural Residual</em>, a registered diatomaceous earth dust (PCP 32561). <strong>Set on a Canadian brand with a clear PMRA registration number?</strong> The <em>Best Canadian</em> Doktor Doom is your pick. <strong>Minor issue or a supplement on a tight budget?</strong> The <em>Best Budget Botanical</em> essential-oil spray does the light work &mdash; just confirm it is registered for sale in Canada.`

- **L228** (D-four). EcoRaider comparison row: 'Best overall' removed; the row already says no Canadian registration.
  - L228 before: `<td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Best overall</strong> &mdash; fast, low-odour contact kill</td>`
  - L228 after: `<td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Fast</strong> &mdash; contact kill in Rutgers lab tests</td>`

- **L230** (D-four, B-swap, R-none, R-29339, R-32561, S-terms). EcoRaider and Proof buttons pointed at the registered pick and dust.
  - L230 before: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="ecoraider bed bug killer spray" block>Check price on Amazon.ca →</BuyLink></td>`
  - L230 after: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="doktor doom sleep tight bed bug spray" block>Registered pick instead →</BuyLink></td>`

- **L237** (same evidence as the entry above).
  - L237 before: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="proof bed bug dust mite spray" block>Check price on Amazon.ca →</BuyLink></td>`
  - L237 after: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="doktor doom diatomaceous earth" block>Registered DE dust instead →</BuyLink></td>`

- **L277-278** (same evidence as the entry above).
  - L277 before: `<BuyLink tag={AMZ_TAG} search="ecoraider bed bug killer spray">EcoRaider →</BuyLink>`
  - L277 after: `<BuyLink tag={AMZ_TAG} search="doktor doom sleep tight bed bug spray">Sleep Tight Bed Bug Killer II →</BuyLink>`
  - L278 before: `<BuyLink tag={AMZ_TAG} search="proof bed bug dust mite spray">Proof →</BuyLink>`
  - L278 after: `<BuyLink tag={AMZ_TAG} search="doktor doom diatomaceous earth">Registered DE dust →</BuyLink>`

### best-bed-bug-spray-for-mattress-canada

- **L158-159** (D-matt, D-four, B-swap, R-none, R-29339, S-terms). 'mattress-safe' removed; EcoRaider swapped to the page's named registered mattress pick.
  - L158 before: `<StickyBuyBar tag={AMZ_TAG} name="EcoRaider Bed Bug Killer Spray (plant-based, mattress-safe)" search="ecoraider bed bug killer spray" label="Best overall" />`
  - L158 after: `<StickyBuyBar tag={AMZ_TAG} name="Doktor Doom Sleep Tight Bed Bug Killer II (PCP 29339)" search="doktor doom sleep tight bed bug spray" label="Best overall" />`
  - L159 before: `<TopBox tag={AMZ_TAG} name="EcoRaider Bed Bug Killer Spray (plant-based, mattress-safe)" search="ecoraider bed bug killer spray" label="Best overall" />`
  - L159 after: `<TopBox tag={AMZ_TAG} name="Doktor Doom Sleep Tight Bed Bug Killer II (PCP 29339)" search="doktor doom sleep tight bed bug spray" label="Best overall" />`

- **L183** (D-matt). 'Mattress-Safe' removed from the AwardRow heading.
  - L183 before: `heading="Our Picks — Best Mattress-Safe Bed Bug Sprays in Canada"`
  - L183 after: `heading="Our Picks — Mattress-Labelled Bed Bug Sprays in Canada"`

- **L186-193** (D-four, B-swap, R-none, R-29633, S-terms). EcoRaider card swapped to Knock Down (the page's label-check table lists it as mattress-labelled); not Sleep Tight, which already has its own card. Score 7.4 is bed-bug-spray-canada's score for Knock Down. 'featured' set to false here and moved to the Sleep Tight card.
  - L186 before: `badge: 'Best Overall',`
  - L186 after: `badge: 'Best Alternate',`
  - L187 before: `name: 'EcoRaider Bed Bug Killer Spray',`
  - L187 after: `name: 'Knock Down Bed Bug Killer (PCP 29633)',`
  - L188 before: `why: 'A plant-oil-based contact killer that people are comfortable spraying near where they sleep: low odour, drops bed bugs and nymphs fast on direct contact, and widely used on mattress seams and piping. Confirm current Canadian availability and the mattress direction on the label.',`
  - L188 after: `why: 'A Canadian-registered pyrethrin aerosol (pyrethrins 0.25% + piperonyl butoxide 1.25%) whose label allows pet bedding, mattresses, box springs and bed frames: spray the mattress, particularly around tufts and seams, no more than 16 seconds per square metre, and let it dry before laundered bedding goes back.',`
  - L189 before: `search: 'ecoraider bed bug killer spray',`
  - L189 after: `search: 'knock down bed bug killer',`
  - L190 before: `score: 9.1,`
  - L190 after: `score: 7.4,`
  - L191 before: `featured: true,`
  - L191 after: `featured: false,`
  - L192 before: `pros: ['Plant-based, low-odour formula', 'Fast contact kill on bugs and nymphs', 'Popular for direct mattress-seam use'],`
  - L192 after: `pros: ['Domestic-class registration (PCP 29633)', 'Label names mattresses, box springs and bed frames', 'Contact kill on the bugs it wets'],`
  - L193 before: `cons: ['Modest residual — re-treat on schedule', 'Does not kill glued-down eggs'],`
  - L193 after: `cons: ['No egg claim on the label', 'Max 16 seconds of spray per m² (label)'],`

- **L196-198** (B-safe, R-29339). 'Label approves mattress and furniture use' contradicted the label ('mattresses, box springs and bed frames only'), a label-contradicting use (FIX-BRIEF item 1). Card made Best Overall and featured to match the top box; L201 is the one inserted line.
  - L196 before: `badge: 'Best Canadian / PMRA-Registered',`
  - L196 after: `badge: 'Best Overall',`
  - L197 before: `name: 'Doktor Doom Sleep Tight Bed Bug Spray',`
  - L197 after: `name: 'Doktor Doom Sleep Tight Bed Bug Killer II (PCP 29339)',`
  - L198 before: `why: 'A Canadian brand with a clear PMRA registration and a label written for mattresses and furniture — the reassurance of a domestic product designed for exactly this surface. The straightforward, no-guesswork pick for spraying a bed.',`
  - L198 after: `why: 'A Canadian-registered pyrethrin aerosol whose label covers mattresses, box springs and bed frames only: spray the mattress, particularly around tufts and seams, and take the bed apart to spray the frame, springs and all joints. The straightforward pick for spraying a bed. Check for PCP 29339: the permethrin Sleep Tight cans say not to apply them to the mattress.',`

- **L201-202** (same evidence as the entry above).
  - L201 before: `(none: inserted line)`
  - L201 after: `featured: true,`
  - L202 before: `pros: ['Canadian PMRA / PCP registration', 'Label approves mattress and furniture use', 'Easy to source in Canada'],`
  - L202 after: `pros: ['Domestic-class registration (PCP 29339)', 'Label: mattresses, box springs and bed frames only', 'Easy to source in Canada'],`

- **L206-208** (D-matt, R-31110). KONK 'Best Residual (Frame & Edges)' and residual claims replaced by the label's contact-kill wording.
  - L206 before: `badge: 'Best Residual (Frame & Edges)',`
  - L206 after: `badge: 'Best Backup Can',`
  - L207 before: `name: 'Konk Bed Bug Killer',`
  - L207 after: `name: 'Konk Bed Bug Killer (PCP 31110)',`
  - L208 before: `why: 'A Canadian-registered spray better suited to the bed frame, box-spring wood, slats, and baseboards, where a longer-lasting deposit keeps killing bugs that travel back toward the bed. Check the label before using on the sleeping surface itself.',`
  - L208 after: `why: 'A Canadian-registered pyrethrin contact aerosol (pyrethrins 0.50% + piperonyl butoxide 5.00%). Its label says to spray the mattress lightly, particularly around seams and tufts, and to take beds apart and spray the frames, springs and all joints. Insects must be contacted to be killed, so it leaves no lasting barrier.',`

- **L211-212** (same evidence as the entry above).
  - L211 before: `pros: ['Lasting residual on hard surfaces', 'Canadian registration', 'Good partner to a mattress-surface spray'],`
  - L211 after: `pros: ['Domestic-class registration (PCP 31110)', 'Label covers mattress seams, frames, springs and joints', 'Good partner to steam and an encasement'],`
  - L212 before: `cons: ['Best on frame/edges, not the sleep surface', 'Heavier residue than a contact killer'],`
  - L212 after: `cons: ['Kills only the bugs it contacts', 'Extremely flammable aerosol (label)'],`

- **L217** (B-safe). 'lowest-tox' removed. The geraniol pick itself is not in OWNER-DECISIONS and was left.
  - L217 before: `why: 'A botanical, essential-oil-based spray for households that want the lowest-tox option near the bed. Genuine contact kill from the better formulas, but short residual — this pick demands disciplined repeat spraying.',`
  - L217 after: `why: 'A botanical, essential-oil-based spray for households that want a plant-oil option near the bed. Genuine contact kill from the better formulas, but short residual — this pick demands disciplined repeat spraying.',`

- **L220** (same evidence as the entry above).
  - L220 before: `pros: ['Lowest-tox choice near the bed', 'Contact kill from quality formulas', 'Low odour'],`
  - L220 after: `pros: ['Plant-oil formula', 'Contact kill from quality formulas', 'Low odour'],`

- **L226** (D-matt, D-four, B-safe). whichToBuy updated to the corrected picks; the geraniol status restates the page's own table row.
  - L226 before: `<strong>Want one spray for the whole bed?</strong> The <em>Best Overall</em> EcoRaider is the plant-based contact killer most people reach for on mattress seams. <strong>Prefer the reassurance of a Canadian-registered mattress label?</strong> The <em>Best Canadian</em> Doktor Doom Sleep Tight is the no-guesswork pick. <strong>Treating the frame, box spring, and baseboards?</strong> Add the <em>Best Residual</em> Konk for lasting protection where you are not sleeping. <strong>Want the lowest-tox option near the bed?</strong> The <em>Best Natural</em> geraniol spray works if you commit to frequent re-treats. Whichever you choose, confirm the label approves the exact surface you are spraying.`
  - L226 after: `<strong>Want one spray for the whole bed?</strong> The <em>Best Overall</em> Doktor Doom Sleep Tight Bed Bug Killer II (PCP 29339) is labelled for mattress tufts and seams, box springs and bed frames. <strong>Sleep Tight out of stock?</strong> The <em>Best Alternate</em> Knock Down Bed Bug Killer (PCP 29633) carries the same mattress directions. <strong>Want a second can for the frame, springs and joints?</strong> The <em>Best Backup</em> Konk (PCP 31110) is labelled for them too, and kills only the bugs it contacts. <strong>Want a plant-oil option near the bed?</strong> The <em>Best Natural</em> geraniol spray works only if you commit to frequent re-treats, and the table below shows no geraniol bed bug spray is registered in Canada. Whichever you choose, confirm the label approves the exact surface you are spraying.`

- **L257** (D-four, B-swap, R-none, R-29633, S-terms). EcoRaider buttons pointed at Knock Down.
  - L257 before: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="ecoraider bed bug killer spray" block>Check price on Amazon.ca →</BuyLink></td>`
  - L257 after: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="knock down bed bug killer" block>Registered alternative: Knock Down →</BuyLink></td>`

- **L304** (same evidence as the entry above).
  - L304 before: `<BuyLink tag={AMZ_TAG} search="ecoraider bed bug killer spray">EcoRaider →</BuyLink>`
  - L304 after: `<BuyLink tag={AMZ_TAG} search="knock down bed bug killer">Knock Down Bed Bug Killer →</BuyLink>`

- **L306** (D-matt, R-31110). KONK button '(frame & edges)' repeated the residual-frame claim.
  - L306 before: `<BuyLink tag={AMZ_TAG} search="konk bed bug killer spray">Konk (frame &amp; edges) →</BuyLink>`
  - L306 after: `<BuyLink tag={AMZ_TAG} search="konk bed bug killer spray">Konk (mattress seams, frame, springs) →</BuyLink>`

- **L614** (D-four, R-none). Harris rows in the 'If You Are Reading This From the United States' table: Harris is the US reader's own EPA-registered product, so the links stay and the rows are marked 'Canada: no registration found' (the decisions file's 'mark them' option).
  - L614 before: `<td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">EPA-registered</strong> &mdash; Reg. No. 1021-1767-3; its label names mattresses and box springs among the use sites</td>`
  - L614 after: `<td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">EPA-registered</strong> &mdash; Reg. No. 1021-1767-3; its label names mattresses and box springs among the use sites. Canada: no registration found (no Harris product in Health Canada&rsquo;s database)</td>`

- **L620** (same evidence as the entry above).
  - L620 before: `<td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">EPA-registered</strong> aerosol</td>`
  - L620 after: `<td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">EPA-registered</strong> aerosol; Canada: no registration found</td>`

### best-bed-bug-spray-for-travel-canada

- **L122-123** (D-travel, R-32254). Travel Pro box reworded to its listed use sites; link unchanged.
  - L122 before: `<StickyBuyBar tag={AMZ_TAG} name="Doktor Doom Travel Pro bed bug spray" search="doktor doom travel pro bed bug spray" label="Best travel pick" />`
  - L122 after: `<StickyBuyBar tag={AMZ_TAG} name="Doktor Doom Travel Pro (PCP 32254), for beds and mattresses" search="doktor doom travel pro bed bug spray" label="Best travel pick" />`
  - L123 before: `<TopBox tag={AMZ_TAG} name="Doktor Doom Travel Pro bed bug spray" search="doktor doom travel pro bed bug spray" label="Best travel pick" />`
  - L123 after: `<TopBox tag={AMZ_TAG} name="Doktor Doom Travel Pro (PCP 32254), for beds and mattresses" search="doktor doom travel pro bed bug spray" label="Best travel pick" />`

- **L147** (D-travel). AwardRow heading now matches the picks (one spray, two heat tools).
  - L147 before: `heading="Our Picks — Best Bed Bug Sprays for Travel in Canada"`
  - L147 after: `heading="Our Picks — Bed Bug Spray and Heat Tools for Travel in Canada"`

- **L152** (D-travel, R-32254, U-catsa). Travel Pro card reworded to its listed use sites; carry-on con matched to CATSA.
  - L152 before: `why: 'A compact, Canadian, PMRA-registered aerosol built for the job: knockdown for a bug you can see plus a residual film for suitcase seams. Because it carries a Canadian PCP number and is sold in a small can, it is both legal here and easy to pack.',`
  - L152 after: `why: 'A compact Canadian aerosol (d-phenothrin and tetramethrin, PCP 32254) registered for bed bugs. Its listed use sites are beds and mattresses; luggage and clothing are not on the list, so it is for a bed, not your suitcase. For bags and clothes, heat is the tool: see the two picks beside it.',`

- **L156-157** (same evidence as the entry above).
  - L156 before: `pros: ['Canadian, PMRA-registered (PCP number on label)', 'Compact can made for travel', 'Contact knockdown plus residual'],`
  - L156 after: `pros: ['Canadian, PMRA-registered (PCP 32254)', 'Compact can made for travel', 'Listed use sites: beds and mattresses'],`
  - L157 before: `cons: ['Aerosol — check carry-on vs checked rules', 'Surface use, not for spraying clothes'],`
  - L157 after: `cons: ['Not in carry-on (CATSA); checked only if your airline approves', 'Luggage and clothing are not listed use sites'],`

- **L160-163** (D-travel, B-swap, R-none, S-terms). Proof slot pointed at the page's own answer for the suitcase, heat: ThermalStrike Ranger (description from the sibling's card). Slot score 8.4 kept.
  - L160 before: `badge: 'Best Low-Odour Residual',`
  - L160 after: `badge: 'Best for the Suitcase (Heat)',`
  - L161 before: `name: 'Proof Travel-Size Bed Bug & Dust Mite Spray',`
  - L161 after: `name: 'ThermalStrike Ranger (folding suitcase heater)',`
  - L162 before: `why: 'A lower-odour, longer-lasting residual that is pleasant to use in a room you have to sleep in. Ideal for pre-treating a suitcase before a trip and re-spraying it on the way home, with a gentler profile around bedding.',`
  - L162 after: `why: 'Not a spray. Proof, the travel spray often suggested for pre-treating a suitcase, shows no Canadian registration. A suitcase-style heater chamber that packs flat and heats a single bag and its contents treats what is hiding inside the bag with no pesticide, so no PCP number is needed. Our luggage heater guide covers temperatures and times.',`
  - L163 before: `search: 'proof bed bug dust mite spray travel size',`
  - L163 after: `search: 'thermalstrike ranger bed bug heater',`

- **L165-166** (same evidence as the entry above).
  - L165 before: `pros: ['Low odour, good near bedding', 'Residual protection for the suitcase', 'Compact travel format'],`
  - L165 after: `pros: ['No pesticide, so no PCP number needed', 'Heats the bag and its contents, not just the seams', 'Packs flat'],`
  - L166 before: `cons: ['Confirm the size is carry-on legal', 'Slower knockdown than an aerosol'],`
  - L166 after: `cons: ['Bulkier than a spray can', 'One bag at a time'],`

- **L169-172** (D-travel, B-swap, R-none, R-32757, S-terms, U-catsa). Insect Shield slot pointed at the page's heat answer for clothes and gear: PackTite Closet. Slot score 7.8 kept.
  - L169 before: `badge: 'Best Fabric / Gear Pre-Treat',`
  - L169 after: `badge: 'Best for Clothes & Gear (Heat)',`
  - L170 before: `name: 'Permethrin Luggage & Gear Treatment Spray',`
  - L170 after: `name: 'PackTite Closet (hanging heat chamber)',`
  - L171 before: `why: 'A different category, labelled specifically to bond to fabric — for pre-treating luggage liners, travel sacks, and gear rather than surfaces. Only use products whose label authorises fabric application, and never on clothing that touches skin off-label.',`
  - L171 after: `why: 'Not a spray. Permethrin-treated clothing is not registered in Canada against bed bugs: the one registered treated apparel, No Fly Zone (Reg. No. 32757), is for mosquitoes and ticks. For clothes, a travel sack or gear, use heat instead: a hot dryer for 30 minutes or more, or a hanging heat chamber for items that cannot go in the dryer.',`
  - L172 before: `search: 'insect shield permethrin treated clothing',`
  - L172 after: `search: 'packtite closet bed bug heater',`

- **L174-175** (same evidence as the entry above).
  - L174 before: `pros: ['Made to bond to fabric and gear', 'Long-lasting on treated items', 'Good for a travel sack or liner'],`
  - L174 after: `pros: ['No pesticide on fabric you wear', 'Fits a full bag plus clothing'],`
  - L175 before: `cons: ['Fabric-only — read the label carefully', 'Not a hotel-room surface product'],`
  - L175 after: `cons: ['Bulkier than a spray can', 'A hot dryer does the same job for washable items'],`

- **L178** (B-safe). 'Non-Toxic', 'low-toxicity' and 'Low toxicity' removed. The plant-oil pick itself is not in OWNER-DECISIONS and was left.
  - L178 before: `badge: 'Best Natural / Non-Toxic',`
  - L178 after: `badge: 'Best Natural',`

- **L180** (same evidence as the entry above).
  - L180 before: `why: 'A botanical, low-toxicity spray for travellers who want reassurance in a room they are sleeping in. Fine for a quick spot treatment and suitcase touch-up — just know it is mostly contact-only with little residual, so it kills what it wets and then stops.',`
  - L180 after: `why: 'A botanical spray for travellers who want reassurance in a room they are sleeping in. Fine for a quick spot treatment and suitcase touch-up — just know it is mostly contact-only with little residual, so it kills what it wets and then stops.',`

- **L183** (same evidence as the entry above).
  - L183 before: `pros: ['Low toxicity and odour', 'Comfortable to use around a bed', 'Widely available in small sizes'],`
  - L183 after: `pros: ['Low odour', 'Comfortable to use around a bed', 'Widely available in small sizes'],`

- **L189** (D-travel, B-safe). whichToBuy updated to the corrected picks; 'gentle'/'gentlest' removed.
  - L189 before: `<strong>Want one reliable, Canada-legal pick?</strong> The <em>Best Overall</em> Doktor Doom Travel Pro covers spot treatment and suitcase seams in a packable can. <strong>Pre-treating a bag you want protected all week?</strong> The <em>Best Low-Odour Residual</em> Proof travel spray lasts and is gentle near bedding. <strong>Treating a travel sack or gear specifically?</strong> A <em>fabric-labelled permethrin</em> product is the right category. <strong>Sleeping light and want the gentlest option?</strong> The <em>Best Natural</em> plant-oil spray reassures for spot use &mdash; pair any of them with a hot-dryer cycle at home.`
  - L189 after: `<strong>Want one registered, packable can?</strong> The <em>Best Overall</em> Doktor Doom Travel Pro (PCP 32254) is labelled for beds and mattresses, not luggage. <strong>Worried about the suitcase itself?</strong> Heat it: the <em>Best for the Suitcase</em> folding heater treats what is inside the bag with no pesticide. <strong>Clothes, a travel sack or gear?</strong> A hot dryer for 30 minutes or more, or the <em>Best for Clothes &amp; Gear</em> heat chamber; no permethrin-treated clothing is registered in Canada against bed bugs. <strong>Want a plant-oil spray for spot use?</strong> The <em>Best Natural</em> plant-oil spray reassures for spot use &mdash; pair any of them with a hot-dryer cycle at home.`

- **L217** (D-travel, R-32254). Travel Pro comparison row reworded to its listed use sites.
  - L217 before: `<td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Spot kill + residual</strong> on seams and cracks</td>`
  - L217 after: `<td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Beds and mattresses</strong>, its listed use sites (PCP 32254)</td>`

- **L219** (same evidence as the entry above).
  - L219 before: `<td className="px-4 py-3 text-gray-700">Flammable-propellant limits; surface use only</td>`
  - L219 after: `<td className="px-4 py-3 text-gray-700">Luggage and clothing are not listed use sites</td>`

- **L226-227** (D-travel, B-swap, R-none, S-terms). Proof row marked unregistered; button points at the suitcase heater.
  - L226 before: `<td className="px-4 py-3 text-gray-700">Slower knockdown than an aerosol</td>`
  - L226 after: `<td className="px-4 py-3 text-gray-700">No Canadian registration found (no PCP number)</td>`
  - L227 before: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="proof bed bug dust mite spray travel size" block>Check price on Amazon.ca →</BuyLink></td>`
  - L227 after: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="thermalstrike ranger bed bug heater" block>Suitcase heater instead →</BuyLink></td>`

- **L233-234** (D-travel, B-swap, R-none, R-32757, S-terms). Fabric/gear row marked; button points at the clothes heat chamber.
  - L233 before: `<td className="px-4 py-3 text-gray-700">Fabric-only; never off-label on worn clothing</td>`
  - L233 after: `<td className="px-4 py-3 text-gray-700">No treated clothing is registered in Canada against bed bugs; No Fly Zone (Reg. No. 32757) is for mosquitoes and ticks</td>`
  - L234 before: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="insect shield permethrin treated clothing" block>Check price on Amazon.ca →</BuyLink></td>`
  - L234 after: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="packtite closet bed bug heater" block>Clothes heat chamber instead →</BuyLink></td>`

- **L268-269** (D-travel, B-swap, S-terms). Proof and Insect Shield availability buttons pointed at the two heat tools.
  - L268 before: `<BuyLink tag={AMZ_TAG} search="proof bed bug dust mite spray travel size">Proof travel spray →</BuyLink>`
  - L268 after: `<BuyLink tag={AMZ_TAG} search="thermalstrike ranger bed bug heater">Suitcase heater →</BuyLink>`
  - L269 before: `<BuyLink tag={AMZ_TAG} search="insect shield permethrin treated clothing">Treated clothing &amp; gear →</BuyLink>`
  - L269 after: `<BuyLink tag={AMZ_TAG} search="packtite closet bed bug heater">Clothes &amp; gear heat chamber →</BuyLink>`

### best-bed-bug-detector-canada

- **L171** (D-detector, U-epa). BuggyBeds kept; card, whichToBuy and table cell now say what a sticky monitor cannot do. Link and score unchanged.
  - L171 before: `badge: 'Best Passive Monitor',`
  - L171 after: `badge: 'Optional Extra (Drawers & Luggage)',`

- **L173** (same evidence as the entry above).
  - L173 before: `why: 'Thin adhesive cards that slip into the enclosed spots an interceptor cup can’t reach — nightstand drawers, behind headboards, inside luggage after travel. Inexpensive, discreet, and ideal as a supplementary spot-check layer across furniture and storage.',`
  - L173 after: `why: 'Thin adhesive cards for the enclosed spots an interceptor cup can’t reach — nightstand drawers, behind headboards, inside luggage after travel. EPA says sticky traps are not for bed bugs, and a 2009 Purdue and Rutgers study reported minimal success with them, even with heat or carbon dioxide added. Treat a strip as an optional extra, never as your detector: an empty card does not mean a room is clear.',`

- **L176-177** (same evidence as the entry above).
  - L176 before: `pros: ['Fits drawers, luggage, tight gaps', 'Discreet and cheap', 'Great travel and storage spot-check'],`
  - L176 after: `pros: ['Fits drawers, luggage, tight gaps', 'Discreet and cheap', 'Reaches spots a cup cannot sit'],`
  - L177 before: `cons: ['Depends on a bug crawling directly across it', 'Less catch than a well-placed interceptor'],`
  - L177 after: `cons: ['EPA: sticky traps are not for bed bugs', 'Catches only a bug that crawls right across it; an empty strip is not proof a room is clear'],`

- **L200** (same evidence as the entry above).
  - L200 before: `<strong>Just want reliable, always-on peace of mind?</strong> The <em>Best Overall</em> interceptors under every leg are the one thing almost everyone should own. <strong>Need a fast, confident answer</strong> for a new lease, a real-estate deal, or an empty room? Add the <em>Best Active</em> lured monitor. <strong>Checking drawers, furniture, and luggage?</strong> The <em>Best Passive Monitor</em> glue strips slip where cups can&rsquo;t. <strong>Want to inspect it yourself first?</strong> The <em>Best Inspection Kit</em> turns a hunch into a real look. <strong>On a tight budget?</strong> The <em>Best Budget</em> multipack covers the bed for the least money.`
  - L200 after: `<strong>Just want reliable, always-on peace of mind?</strong> The <em>Best Overall</em> interceptors under every leg are the one thing almost everyone should own. <strong>Need a fast, confident answer</strong> for a new lease, a real-estate deal, or an empty room? Add the <em>Best Active</em> lured monitor. <strong>Checking drawers and luggage too?</strong> The <em>Optional Extra</em> glue strips fit where cups can&rsquo;t, but EPA says sticky traps are not for bed bugs, so never treat an empty strip as an all-clear. <strong>Want to inspect it yourself first?</strong> The <em>Best Inspection Kit</em> turns a hunch into a real look. <strong>On a tight budget?</strong> The <em>Best Budget</em> multipack covers the bed for the least money.`

- **L244** (same evidence as the entry above).
  - L244 before: `<td className="px-4 py-3 text-gray-700">Drawers, headboards, luggage, storage gaps</td>`
  - L244 after: `<td className="px-4 py-3 text-gray-700">An optional extra in drawers, headboards and luggage; EPA says sticky traps are not for bed bugs</td>`

### best-bed-bug-steamer-canada

- **L128-129** (D-steamer, U-umn). Picks kept; each box gives its tank against UMN's 4 L advice; whichToBuy no longer sends multi-room jobs to a household unit. Links unchanged.
  - L128 before: `<StickyBuyBar tag={AMZ_TAG} name="Vapamore MR-100 Primo bed bug steamer" search="vapamore mr-100 steamer" label="Best overall" />`
  - L128 after: `<StickyBuyBar tag={AMZ_TAG} name="Vapamore MR-100 Primo steamer (1.6 L tank)" search="vapamore mr-100 steamer" label="Best household steamer" />`
  - L129 before: `<TopBox tag={AMZ_TAG} name="Vapamore MR-100 Primo bed bug steamer" search="vapamore mr-100 steamer" label="Best overall" />`
  - L129 after: `<TopBox tag={AMZ_TAG} name="Vapamore MR-100 Primo steamer (1.6 L tank)" search="vapamore mr-100 steamer" label="Best household steamer" />`

- **L135** (same evidence as the entry above).
  - L135 before: `<p className="text-gray-800 text-[15px] leading-relaxed font-medium">The best bed bug steamer in Canada for 2026 is the <AmazonLink search="vapamore mr-100 steamer" tag={AMZ_TAG} className="font-bold underline decoration-emerald-500 underline-offset-2 hover:text-emerald-900">Vapamore MR-100 Primo</AmazonLink> — a 1,500 W dry-vapour canister steamer with roughly 60 minutes of run time per fill and a lifetime warranty, hot enough at the tip to kill every bed bug life stage, including eggs, on contact. On a tighter budget, the McCulloch MC1275 does the same job with a shorter run time for roughly half the price.</p>`
  - L135 after: `<p className="text-gray-800 text-[15px] leading-relaxed font-medium">The best bed bug steamer in Canada for 2026 is the <AmazonLink search="vapamore mr-100 steamer" tag={AMZ_TAG} className="font-bold underline decoration-emerald-500 underline-offset-2 hover:text-emerald-900">Vapamore MR-100 Primo</AmazonLink> — a 1,500 W dry-vapour canister steamer with roughly 60 minutes of run time per fill and a lifetime warranty, hot enough at the tip to kill every bed bug life stage, including eggs, on contact. On a tighter budget, the McCulloch MC1275 does the same job with a shorter run time for roughly half the price. Both are household units (1.6 L and about 1.4 L tanks), smaller than the 4-litre (1-gallon) commercial steamer the University of Minnesota recommends, so expect to stop, cool and refill.</p>`

- **L170** (same evidence as the entry above).
  - L170 before: `why: 'A 1,500 W stainless-steel boiler with ~60 minutes of dry-vapour steam per fill and a lifetime warranty — enough sustained, low-moisture heat to kill every bed bug life stage, including eggs, on contact.',`
  - L170 after: `why: 'A 1,500 W stainless-steel boiler with ~60 minutes of dry-vapour steam per fill and a lifetime warranty — enough sustained, low-moisture heat to kill every bed bug life stage, including eggs, on contact. Its 1.6 L tank is smaller than the 4 L (1-gallon) commercial steamer the University of Minnesota recommends, so expect to stop, cool and refill.',`

- **L175** (same evidence as the entry above).
  - L175 before: `cons: ['Premium price tier', '~11 min heat-up'],`
  - L175 after: `cons: ['Premium price tier', '~11 min heat-up', '1.6 L tank, under UMN’s 4 L advice'],`

- **L180** (same evidence as the entry above).
  - L180 before: `why: 'The most-recommended budget canister for bed bug work in North America: 1,500 W, a 1.4 L tank good for ~45 minutes, and an 18-piece kit with the triangular seam brush — for roughly half the Vapamore price.',`
  - L180 after: `why: 'The most-recommended budget canister for bed bug work in North America: 1,500 W, a 1.4 L tank good for ~45 minutes, and an 18-piece kit with the triangular seam brush — for roughly half the Vapamore price. Like every pick here, its tank is far smaller than the 4 L commercial steamer the University of Minnesota recommends.',`

- **L184** (same evidence as the entry above).
  - L184 before: `cons: ['Wetter steam output', 'More plastic build'],`
  - L184 after: `cons: ['Wetter steam output', 'More plastic build', '1.4 L tank, under UMN’s 4 L advice'],`

- **L193** (same evidence as the entry above).
  - L193 before: `cons: ['Only ~10–15 min per fill', 'Pressure drops as tank empties'],`
  - L193 after: `cons: ['Only ~10–15 min per fill', 'Pressure drops as tank empties', '~0.35 L tank, far under UMN’s 4 L advice'],`

- **L198** (same evidence as the entry above).
  - L198 before: `<strong>Serious or multi-room infestation?</strong> Buy the <em>Best Overall</em> Vapamore MR-100 — the run time and warranty pay off across long slow-pass sessions. <strong>Single bedroom caught early on a budget?</strong> The <em>Best Value</em> McCulloch MC1275 does the same job for roughly half the price. <strong>Already own a canister?</strong> Add the <em>Best Handheld Supplement</em> PurSteam for fast follow-up passes inside the 7–10 day re-treatment window.`
  - L198 after: `<strong>Serious or multi-room infestation?</strong> The University of Minnesota recommends a commercial steamer holding at least 4 L (1 gallon), which you can rent, or a professional. <strong>Buying for one or two rooms?</strong> The <em>Best Overall</em> Vapamore MR-100 has the longest run time here, but its 1.6 L tank means stopping to cool and refill. <strong>Single bedroom caught early on a budget?</strong> The <em>Best Value</em> McCulloch MC1275 (about 1.4 L) does the same job for roughly half the price. <strong>Already own a canister?</strong> Add the <em>Best Handheld Supplement</em> PurSteam for fast follow-up passes inside the 7–10 day re-treatment window.`

- **L225** (B-text). Spec-table line (no affiliate link) sent 'multi-room jobs' to a 1.6 L unit, contradicting the corrected whichToBuy.
  - L225 before: `{ name: 'Vapamore MR-100 Primo', spec: '1,500 W · stainless boiler', run: '~60 min', heat: '~11 min', best: 'Serious infestations, multi-room jobs, buy-once-cry-once' },`
  - L225 after: `{ name: 'Vapamore MR-100 Primo', spec: '1,500 W · stainless boiler', run: '~60 min', heat: '~11 min', best: 'One or two rooms; for several rooms UMN recommends a 4 L commercial steamer' },`

### Left unchanged, with the reason

- **best-bed-bug-powder-canada, the CimeXa picks** (StickyBuyBar/TopBox L122-123, AwardRow card 1, table L216-220, button L267). CimeXa is not in the export, but OWNER-DECISIONS lists only the Bulk DE problem for this page, and its text (checked Oct 23) keeps CimeXa as the disclosed top pick; a swap would contradict the Quick Answer, FAQ 1 and the body. Owner call. Two box lines imply a registered Canadian version exists: card 1 con "Confirm the Canadian-market version before buying" and table L219 "Buy the Canadian-market version".
- **Generic botanical picks with no registered product behind them**: natural card 4 ("natural essential oil bed bug spray"), mattress card 4 ("natural bed bug spray geraniol"), travel card 4 ("natural plant based bed bug spray travel"), and their table rows and buttons. Not in OWNER-DECISIONS; only toxicity wording removed.
- **Mattress page US-reader table** (EcoRaider L610, Harris L616 and L622): links kept, rows marked (L614-620 above).
- **Page text, not boxes**: the travel hero, Quick Answer, FAQs 1 and 13 and body still pair the Travel Pro with luggage and recommend Proof; the powder Quick Answer and FAQ 1 still call CimeXa the best powder in Canada.
- **bed-bug-spray-canada ASIN B0D2PFS1WZ** (StickyBuyBar, TopBox, AwardRow card 1): which Sleep Tight can it opens is unverified (a permethrin can would not be mattress-labelled). Box text now says to check for PCP 29339; ASIN unchanged.

Lines changed in this section: 148 (one inserted, none deleted).

## Page text (Oct 25)

Text pass of Oct 25, 2026, after the box fixes above (commit 25d22a56). The box agents reported page text that still
repeated the errors the boxes had; this pass fixes that text so it matches the corrected boxes and the evidence.
134 lines on 14 pages, all `app/blog/<slug>/page.tsx`. Lines were replaced one for one (none added or removed),
so each line number is the same before and after. No git writes, no build; PDFs read with WebFetch only.

**Scope.** The leftovers listed in the brief (travel and powder bed bug pages, spider, rat trap, mouse trap, and the
mosquito-bits, fogger and wasp pages, including the dunks guide and the two ground-nest wasp pages), plus the page-text
leftovers the box agents logged above for motion-activated-sprinkler-canada, best-indoor-fly-mosquito-trap-canada and
best-fruit-fly-trap-canada. Each page was searched for other lines of the same kind.

**Rules kept.** Non-affiliate text only: no line carrying a BuyLink, AwardRow, AwardCard, StickyBuyBar, AmazonLink,
TopPick or TopBox was touched, nor any line inside one of those elements, nor any `search`, `asin` or `tag` value. Table
cells were edited only on lines with no affiliate element. No "safe", "non-toxic", prices, "we tested" or "Health Canada
approved" in the new text; prices on the lines being edited were removed.

**Checks** (script against `git show HEAD:<file>`, no git writes):
- Line counts unchanged on every page.
- Every line that carries an affiliate token, and every line inside an AwardRow/StickyBuyBar/TopBox block, is byte-identical to HEAD.
- Affiliate token counts are identical to HEAD on all 14 pages (columns: BuyLink / AwardRow / AwardCard / StickyBuyBar / AmazonLink / TopPick / TopBox / asin= / asin: / search= / search: / tag= / AMZ_TAG):

| Page | Lines changed | Counts (working = HEAD) | vs HEAD |
|---|---|---|---|
| best-bed-bug-spray-for-travel-canada | 39 | 8 / 1 / 0 / 1 / 0 / 0 / 1 / 0 / 0 / 10 / 4 / 11 / 12 | identical |
| best-bed-bug-powder-canada | 15 | 7 / 1 / 0 / 1 / 0 / 0 / 1 / 0 / 0 / 9 / 4 / 10 / 11 | identical |
| best-spider-spray-canada | 7 | 14 / 1 / 0 / 1 / 0 / 0 / 1 / 2 / 1 / 16 / 4 / 17 / 18 | identical |
| best-rat-trap-canada | 8 | 6 / 1 / 0 / 1 / 1 / 0 / 1 / 0 / 0 / 9 / 3 / 10 / 11 | identical |
| best-mouse-trap-canada | 6 | 7 / 1 / 0 / 1 / 1 / 0 / 1 / 0 / 0 / 10 / 3 / 11 / 12 | identical |
| mosquito-bits-canada-vs-dunks | 19 | 9 / 1 / 0 / 1 / 1 / 0 / 1 / 0 / 0 / 12 / 3 / 13 / 14 | identical |
| mosquito-dunks-canada-guide | 8 | 16 / 1 / 0 / 1 / 1 / 0 / 1 / 2 / 1 / 19 / 3 / 20 / 21 | identical |
| mosquito-fogger-canada | 4 | 10 / 1 / 0 / 1 / 1 / 0 / 1 / 0 / 0 / 13 / 4 / 14 / 15 | identical |
| best-wasp-nest-spray-canada | 9 | 9 / 1 / 0 / 1 / 1 / 0 / 1 / 0 / 0 / 12 / 3 / 13 / 14 | identical |
| how-to-get-rid-of-ground-wasps-canada | 7 | 8 / 1 / 0 / 1 / 1 / 0 / 1 / 2 / 1 / 11 / 4 / 12 / 13 | identical |
| wasp-dust-canada | 1 | 4 / 1 / 0 / 1 / 0 / 0 / 1 / 0 / 0 / 6 / 4 / 7 / 8 | identical |
| motion-activated-sprinkler-canada | 5 | 7 / 1 / 0 / 1 / 1 / 0 / 1 / 2 / 1 / 10 / 3 / 11 / 12 | identical |
| best-indoor-fly-mosquito-trap-canada | 3 | 9 / 1 / 0 / 1 / 0 / 0 / 1 / 0 / 0 / 11 / 4 / 12 / 13 | identical |
| best-fruit-fly-trap-canada | 3 | 21 / 1 / 0 / 1 / 1 / 0 / 1 / 0 / 0 / 24 / 4 / 25 / 26 | identical |

- Every file still transpiles as TSX (TypeScript `transpileModule`, no diagnostics).
- No banned word or price in any changed line.

**Evidence key** (each entry cites these codes):

- `T-32254`: The Canadian label for Doktor Doom Travel Pro Bed Bug Killer, Reg. No. 32254 (label 2018-1869), read Oct 25 with WebFetch:
  https://pest-control.canada.ca/pesticide-registry-api/api/pdf/inline/en/443996851
  - "Crack & Crevice & Spot Treatment"; "Contact spray".
  - "DO NOT treat bed linens. DO NOT treat clothing."
  - "ONLY spot or crack and crevice application is permitted".
  - "Treat mattresses, box springs, bed frames, and headboards, especially tufts, folds and edges of the mattress."
  - Luggage and suitcases are not mentioned. Registry export of 3 Oct 2026: sites BED; INDOOR; MATTRESSES.
  - OWNER-DECISIONS A, row best-bed-bug-spray-for-travel-canada; box fix D-travel.
- `T-proof`: Registry export of 3 Oct 2026: no bed bug product named Proof (the 18 product names containing PROOF are mothproofers, waterproofers and the like). OWNER-DECISIONS A; box evidence R-none.
- `T-32757`: Registry export: 32757 NO FLY ZONE, domestic, permethrin, site APPAREL, pests MOSQUITOES; TICKS (box evidence R-32757).
- `T-luggage`: Registry export: two current domestic sprays do list LUGGAGE as a site (NEU1161 Residual Pest Spray 28361 and NEU1161 Aerosol Residual Pest Spray 29163, W. Neudorff). So the text says "a product whose label lists luggage" and never claims that no registered spray may be used on a bag.
- `HC-travel`: Health Canada's travel routine as already quoted on the page (FAQ at L81): check luggage on a hard surface before bringing it in, vacuum the suitcase, dry on the highest heat for 30 minutes, ask for a room not next to the affected one.
- `B-safe`: Banned-claims rule: no "safe" or "non-toxic". The same pages' boxes lost "Non-Toxic", "gentle" and "low-toxicity" as B-safe, so the text lost that wording too, along with "reassuring on toxicity".
- `P-cimexa`: Registry export of 3 Oct 2026: 0 CimeXa rows and no domestic-class silica gel dust for bed bugs; Drione (15255) is commercial class (box evidence R-none and the page's own L81, L276, L289). CimeXa's label carries U.S. EPA Reg. No. 73079-12 (page L276). The CimeXa box itself stays as the owner's call (box pass, "Left unchanged").
- `P-32561`: The Canadian label for Doktor Doom Be Green Premium Food Grade Diatomaceous Earth, Reg. No. 32561 (label 2020-4730), read Oct 25 with WebFetch:
  https://pest-control.canada.ca/pesticide-registry-api/api/pdf/inline/en/443993860
  - "Net Contents: 100 g – 7 kg".
  - "BED BUGS: Disassemble beds and dust frames, joints, mattresses, tufts and seams, floors and baseboards."
  - "Avoid breathing dust."
- `P-bulk`: OWNER-DECISIONS A, row best-bed-bug-powder-canada: only a DE with a PCP number (box fix D-bulk).
- `S-konk`: OWNER-DECISIONS B: "Konk OnGuard" does not exist. The names used instead are the box's swap target and the page's own registry table: Knock Down Spider Killer, Reg. No. 29689 (label 2019-5838), and Konk Spider & Tick II, Reg. No. 32619 (label 2022-1723).
- `R-m201`: OWNER-DECISIONS B: Victor's M201 Metal Pedal is discontinued, and Victor's M201 page now shows the Easy Set M205 (box pass, rat section). The M205's "expanded trigger with a firm and a sensitive setting" is from the page's own table (L305, Victor's M205 page).
- `M-m250`: OWNER-DECISIONS B: the M250S "5 seconds / 100 kills" claim is not on Victor's page. Victor's M250B page (box pass, mouse section; the page's own FAQ L79) gives:
  - a high-voltage shock;
  - 4 AA batteries, not rechargeables;
  - one mouse per setting;
  - a green light every 10 seconds for up to a week;
  - bevelled columns that keep children and pets from the plates;
  - no kill time and no kills-per-battery figure.
- `Q-bits`: OWNER-DECISIONS A, row 1: Summit Mosquito Bits have no Canadian registration.
  - Registry export: the only current domestic BTI products are Mosquito Dunks 28888, AquaBac 200G 27374 and My-Crobe 200G 34631.
  - Label wording as already quoted on the bits page (table, L342-346):
    - Dunks: "DO NOT apply this product to any water that is designed to flow beyond your property limits (for example, ditches, drains, rain gutters or catch basin sumps ...)".
    - Granules: "Allow 24 hours for maximum effect on larvae" and "Do not apply to treated, finished drinking water reservoirs, drinking receptacles and wading pools".
    - Doktor Doom 34197: "DO NOT apply to water bodies where swimming is possible, including swimming pools".
  - The Dunks label says to use them "within one year from date of manufacture" (dunks guide L846).
- `HC-mosq`: Health Canada's mosquito advice as quoted on the bits page (L353): "replacing water in bird baths and outdoor pet dishes at least twice a week".
- `N-price`: No-prices rule. "$15/season", "$30/season", "$60–$110" and "$80–$250" were removed from lines being edited.
- `F-fog`: OWNER-DECISIONS A, row 2: fogging liquids with no current Canadian registration. The page's own sourced statements:
  - RVD2023-06 cancelled domestic handheld-fogger use of pyrethrins (L43, L123).
  - No domestic liquid was found that permits a handheld fogger (L73, L268).
  - Every Black Flag entry is cancelled (L69).
  - The label of Muskol Patio & Deck Fogger 22808.03 says "Treatment must only be repeated after 7 days if pest problem persists or reoccurs" (L300).
- `W-raid`: OWNER-DECISIONS B, row 1: Raid 7 is a 5.7 m jet spray, not a foam.
  - raid.ca, as quoted on the page (L28, L120, L258; scratchpad wasp-pmra/FACTS.md): "sprays up to 5.7 m"; nests "in trees or attached to buildings"; "spray into the opening of the nest first. Then spray the rest of the nest until it is saturated."
  - The corrected box's whichToBuy now calls the Raid jet "the one can to own", so text saying foam is the one can to buy contradicted it.
- `W-ground`: OWNER-DECISIONS A, last row: the Wilson label says "Not for use against nests located underground or in voids".
  - PMRA records carry that exclusion for 31899 and 12 other domestic wasp products, and S.C. Johnson's Raid Max Foam 2 directions say the same (all already on the pages).
  - The City of Calgary's clear-bowl method uses no pesticide (as quoted on the ground-wasp page).
- `Y-orbit`: OWNER-DECISIONS B, row 4: "Yard Enforcer Pro" does not exist, and Orbit lists 4 AA. Orbit Canada's page, read Oct 25 (box pass, sprinkler section), gives:
  - "Requires 4-AA batteries";
  - detection "up to 40 feet away";
  - a flow-through outlet that "allows you to add additional sprinklers triggered by the sensor";
  - no Pro model.
- `D-dyna`: OWNER-DECISIONS B, row 8: the DynaTrap 1/4 Acre (DT160) is sold with DynaTrap's outdoor traps (box pass, indoor-trap section).
- `T-terro`: OWNER-DECISIONS B, row 7: TERRO says "We do not sell refills". TERRO's page (box pass, fruit fly section) says the traps are disposable, last up to 45 days, and should be discarded after 45 days of use.

### best-bed-bug-spray-for-travel-canada (39 lines)

- **L29** FAQ 1 answer: luggage-seam spraying and Proof as the residual suitcase pick removed; the Travel Pro described by its label. T-32254, T-proof
  - Before: `answer: 'For most Canadian travellers, the best travel bed-bug spray is a small aerosol or pump with a Canadian PCP registration number that you can spray directly onto luggage seams, zippers, and hotel headboard cracks — the Doktor Doom Travel Pro is the standout because it is a Canadian product with a PCP registration number on the label, sold in a compact can, so it is legal here and easy to pack. A Proof travel-size bed-bug and dust-mite spray is the best lower-odour, residual pick for treating a suitcase before and after a trip. Whatever you choose, pack it in checked baggage only, and only if your airline approves (CATSA lists insecticides as not permitted in carry-on), and remember that a spray is a prevention-and-spot-treatment tool for the road, not a way to clear an active infestation at home.',`
  - After: `answer: 'For most Canadian travellers, the best travel bed-bug spray is a small can with a Canadian PCP registration number, used only where its label allows. Our pick is the Doktor Doom Travel Pro (Reg. No. 32254), a compact contact spray whose label covers spot and crack-and-crevice treatment, including mattresses, box springs, bed frames and headboards; it says "DO NOT treat clothing" and does not list luggage. Proof, the travel spray often suggested for suitcases, has no Canadian registration. For the suitcase itself, heat works with no pesticide: a luggage heater for the bag, a hot dryer for the clothes. If you fly, pack any insecticide in checked baggage only, and only if your airline approves (CATSA lists insecticides as not permitted in carry-on), and remember that a spray is a spot-treatment tool for the road, not a way to clear an active infestation at home.',`
- **L37** FAQ 3 answer (spray on luggage): the pre-trip and re-spray steps replaced by the label condition and Health Canada's inspect, vacuum and dryer routine. T-32254, T-luggage, HC-travel
  - Before: `answer: 'Treat the suitcase as the checkpoint that keeps bugs out of your home. Before the trip, lightly spray a residual product into the seams, piping, zippers, and interior corners of a hard or soft case and let it dry — this leaves a barrier that discourages hitchhikers. On arrival, keep the case on the luggage rack or in the bathtub, never on the bed or carpeted floor, and inspect the mattress seams and headboard before unpacking. If you see signs, spray the case seams again and treat only the immediate hotel harbourage with a contact product where permitted. On the way home, spray the empty case again, then heat-treat clothing in a hot dryer. The spray protects the bag; it does not treat the hotel room for you.',`
  - After: `answer: 'Only with a product whose label lists luggage, and our travel pick’s does not: the Doktor Doom Travel Pro label (Reg. No. 32254) covers mattresses, box springs, bed frames, headboards and cracks and crevices, and says "DO NOT treat clothing." So treat the suitcase as a checkpoint you inspect and heat rather than spray. On arrival, keep the case on the luggage rack or in the bathtub, never on the bed or carpeted floor, and inspect the mattress seams and headboard before unpacking. If you see signs, tell the front desk and ask for another room that is not next to it. At home, check the case on a hard surface, vacuum it, run the clothes through a hot dryer, and use a luggage heater for what cannot go in the dryer. If you do use a spray on a bag, check that its label lists luggage and shows a PCP number.',`
- **L41** FAQ 4 answer: "spray the suitcase shell" and the permethrin gear claim replaced by the label wording and the one registered treated apparel. T-32254, T-32757, T-luggage
  - Before: `answer: 'Read the label — it decides. Most contact bed-bug aerosols are labelled for cracks, crevices, and hard surfaces, not for direct application to fabric you will wear, so you spray the suitcase shell, seams, and zippers and let it dry, then pack clean clothes inside. A few products (permethrin-based gear and clothing treatments) are specifically formulated to bond to fabric and are meant for pre-treating luggage liners, travel sacks, and gear — but these are a different category and must say so on the label. Never freelance: applying a surface pesticide to bedsheets or clothing that touches skin is both a health risk and an off-label use. When in doubt, heat is the better option for fabric — a hot dryer cycle kills bed bugs on clothes with no chemical at all.',`
  - After: `answer: 'Read the label — it decides. Our travel pick’s label (Doktor Doom Travel Pro, Reg. No. 32254) says "DO NOT treat bed linens. DO NOT treat clothing." and does not list luggage, so it goes on neither. Permethrin-treated clothing and gear is a different category, and in Canada the one registered treated apparel, No Fly Zone (Reg. No. 32757), lists mosquitoes and ticks, not bed bugs. If a spray’s label does list luggage or fabric, follow it exactly and check its PCP number. Never freelance: applying a surface pesticide to bedsheets or clothing that touches skin is both a health risk and an off-label use. When in doubt, heat is the better option for fabric — a hot dryer cycle kills bed bugs on clothes with no chemical at all.',`
- **L45** FAQ 5 answer: "A residual spray on your suitcase seams" replaced; the pick is a contact spray not labelled for luggage. T-32254
  - Before: `answer: 'They reduce risk; they do not guarantee immunity. A residual spray on your suitcase seams makes the bag a less hospitable place for a hitchhiking bug and can kill ones that make contact, which meaningfully lowers the odds you carry an infestation home. But no spray creates a force field — the biggest wins in travel prevention are behavioural: inspecting the hotel bed before you settle in, keeping luggage off the floor and bed, and heat-treating everything when you get home. Think of the spray as one layer in a routine, not a substitute for the inspection and heat steps. Our guide on how to check for bed bugs walks through the two-minute hotel inspection that catches most problems.',`
  - After: `answer: 'Not on their own. Our travel pick is a contact spray, as its label says: it kills the bugs it contacts, and its label does not list luggage, so it is not a suitcase treatment. No spray creates a force field — the biggest wins in travel prevention are behavioural: inspecting the hotel bed before you settle in, keeping luggage off the floor and bed, and heat-treating everything when you get home. Think of the spray as a spot-treatment tool for the places its label lists, not a substitute for the inspection and heat steps. Our guide on how to check for bed bugs walks through the two-minute hotel inspection that catches most problems.',`
- **L49** FAQ 6 answer: residual spray for "pre-treating a suitcase" and the knockdown-plus-residual blend claim replaced. T-32254
  - Before: `answer: 'A contact spray kills bugs it directly wets and then dissipates, so it is a spot-treatment tool for something you see right now — a bug on a suitcase seam or in a headboard crack. A residual spray leaves a dried film that keeps working for days or weeks, which is what you want for pre-treating a suitcase so it stays protected through the trip. Many travel-oriented products blend both: a knockdown ingredient for immediate kill plus a residual for lasting protection. For prevention, prioritise residual; for a bug you can see, contact matters more. Neither replaces heat or a professional treatment for an established infestation back home.',`
  - After: `answer: 'A contact spray kills bugs it directly wets and then dissipates, so it is a spot-treatment tool for something you see right now — a bug in a headboard crack or a mattress seam. A residual spray leaves a dried film that keeps working for days or weeks on the surfaces its label lists. Our travel pick, the Doktor Doom Travel Pro (Reg. No. 32254), is labelled a contact spray, and its label does not list luggage, so it is not a suitcase pre-treatment; for the bag, use heat. Neither kind of spray replaces heat or a professional treatment for an established infestation back home.',`
- **L56** FAQ 8 question: "non-toxic" became "plant-based" (the box badge 'Best Natural / Non-Toxic' was cut the same way). B-safe
  - Before: `question: 'Is a natural or non-toxic travel bed bug spray any good?',`
  - After: `question: 'Is a natural or plant-based travel bed bug spray any good?',`
- **L57** FAQ 8 answer: suitcase pre-treatment advice removed; Proof's status added. T-proof, T-32254
  - Before: `answer: 'For light, precautionary use, yes — with realistic expectations. Plant-oil and essential-oil sprays (and some silica or enzyme blends) are lower-odour, which makes them appealing for spraying a suitcase in a hotel room where you have to sleep. Their limitation is that most are contact-only with little to no residual, so they kill what they wet and then stop working. That is fine for a quick spot treatment and reassurance, but for pre-treating a bag that needs to stay protected across a week of travel, a registered residual product does more. Our natural bed-bug spray guide compares what the botanical options genuinely accomplish versus where they fall short.',`
  - After: `answer: 'For light spot use, yes — with realistic expectations. Plant-oil and essential-oil sprays (and some silica or enzyme blends) are lower-odour, which makes them appealing in a hotel room where you have to sleep. Their limitation is that most are contact-only with little to no residual, so they kill what they wet and then stop working. Check the label for a Canadian PCP number before you buy one: Proof, a travel spray often suggested for suitcases, has no Canadian registration. Our natural bed-bug spray guide compares what the botanical options genuinely accomplish versus where they fall short.',`
- **L61** FAQ 9 answer: "You can spray your own suitcase seams and travel items" replaced. T-32254
  - Before: `answer: 'Only your immediate belongings and only lightly — treating someone else\'s room is not your job and can violate the property\'s rules. If you find evidence of bed bugs, the right move is to report it to the front desk, request a different room (ideally not adjacent to the affected one), and keep your luggage sealed. You can spray your own suitcase seams and travel items, but dousing the mattress or furniture of a hotel room is both ineffective against an established population and inappropriate. The spray is for protecting your gear so you do not bring anything home; clearing the room is the property\'s responsibility, and a real infestation there needs a professional, not a traveller with a can.',`
  - After: `answer: 'No — treating someone else\'s room is not your job and can violate the property\'s rules. If you find evidence of bed bugs, the right move is to report it to the front desk, request a different room (ideally not adjacent to the affected one), and keep your luggage sealed. Your suitcase and clothes are not targets for our travel pick either: its label (Reg. No. 32254) does not list luggage and says "DO NOT treat clothing." Dousing the mattress or furniture of a hotel room is both ineffective against an established population and inappropriate. Protect your gear with inspection and heat so you do not bring anything home; clearing the room is the property\'s responsibility, and a real infestation there needs a professional, not a traveller with a can.',`
- **L65** FAQ 10 answer: "Spray the empty suitcase seams and zippers with a residual product" became Health Canada's check-and-vacuum step. T-32254, HC-travel
  - Before: `answer: 'Treat the doorway as the last line of defence. Do not bring the suitcase inside and unpack onto the bed — unpack in the garage, entryway, or bathroom instead. Run all washable clothing (worn or not) through a hot dryer for at least 30 minutes, since sustained heat kills bed bugs at every life stage. Spray the empty suitcase seams and zippers with a residual product, wipe it down, and store it away from bedrooms — ideally sealed in a large bag or a hard bin, or heat-treated in a luggage heater. This homecoming routine is where most hitchhiker infestations are actually stopped, far more than any single spray application during the trip.',`
  - After: `answer: 'Treat the doorway as the last line of defence. Do not bring the suitcase inside and unpack onto the bed — unpack in the garage, entryway, or bathroom instead. Run all washable clothing (worn or not) through a hot dryer for at least 30 minutes, since sustained heat kills bed bugs at every life stage. Check the empty suitcase on a hard surface and vacuum it, as Health Canada advises, wipe it down, and store it away from bedrooms — ideally sealed in a large bag or a hard bin, or heat-treated in a luggage heater. This homecoming routine is where most hitchhiker infestations are actually stopped, far more than any single spray application during the trip.',`
- **L69** FAQ 11 answer: "A spray protects the outside of the bag" and the residual-spray routine removed. T-32254
  - Before: `answer: 'For frequent travellers, a heater is the stronger long-term tool, and the two work together. A spray protects the outside of the bag and spot-treats surfaces; a portable luggage heater raises the entire contents of a suitcase to a lethal temperature and kills anything hiding inside — eggs included, which sprays struggle to reach. If you travel a lot or have had a scare, a heated bag or luggage heater is the definitive homecoming step, with the spray as the lightweight in-transit layer. For occasional trips, disciplined inspection plus a residual spray and a hot-dryer cycle on clothes covers most of the risk. Our luggage-heater guide covers the portable options and how hot they actually need to get.',`
  - After: `answer: 'For the bag itself, a heater is the tool: our travel spray pick is not labelled for luggage. A spray spot-treats the places its label lists, such as a mattress seam or a crack; a portable luggage heater raises the entire contents of a suitcase to a lethal temperature and kills anything hiding inside — eggs included, which sprays struggle to reach. If you travel a lot or have had a scare, a heated bag or luggage heater is the definitive homecoming step. For occasional trips, disciplined inspection plus a hot-dryer cycle on clothes covers most of the risk. Our luggage-heater guide covers the portable options and how hot they actually need to get.',`
- **L73** FAQ 12 answer: "pre-treating a suitcase ... re-spraying on the way home" removed. T-32254
  - Before: `answer: 'Less than you think. A single travel-size can or a 60–100 mL pump bottle is plenty for pre-treating a suitcase, touching up on arrival, and re-spraying on the way home — you are treating seams and zippers, not fogging a room. A small size does not make it carry-on legal: CATSA lists insecticides as not permitted in carry-on, and says they may go in checked baggage only if your airline approves. On a road trip that limit does not apply, and the compact option still does everything you need and weighs almost nothing. Buy the small size on purpose; the big can is a home tool, not a travel one.',`
  - After: `answer: 'Less than you think. A single travel-size can is plenty for spot-treating the places its label lists if you find a bug on arrival; it is not for pre-treating or re-spraying a suitcase, which our pick’s label (Reg. No. 32254) does not list. A small size does not make it carry-on legal: CATSA lists insecticides as not permitted in carry-on, and says they may go in checked baggage only if your airline approves. On a road trip that limit does not apply, and the compact can weighs almost nothing. Buy the small size on purpose; the big can is a home tool, not a travel one.',`
- **L77** FAQ 13 answer: "labelled for ... suitcase seams and zippers" replaced by the label's sites. T-32254
  - Before: `answer: 'A small can or pump with a Canadian PCP registration number that is labelled for the surfaces you will treat, such as suitcase seams and zippers. Our pick is the Doktor Doom Travel Pro; check the can for its PCP number before you buy, because Health Canada says "If the product label does not have a PCP registration number, do not buy or use it." A travel size is handy for packing, but it does not change the airport rule: CATSA lists insecticides as not permitted in carry-on baggage, and they may go in checked baggage only if your airline approves.',`
  - After: `answer: 'A small can with a Canadian PCP registration number that is labelled for the surfaces you will treat. Our pick is the Doktor Doom Travel Pro (Reg. No. 32254), whose label covers spot and crack-and-crevice treatment, including mattresses, box springs, bed frames and headboards; it does not list luggage and says not to treat clothing. Check the can for its PCP number before you buy, because Health Canada says "If the product label does not have a PCP registration number, do not buy or use it." A travel size is handy for packing, but it does not change the airport rule: CATSA lists insecticides as not permitted in carry-on baggage, and they may go in checked baggage only if your airline approves.',`
- **L91** Meta description: "for luggage seams" replaced. T-32254
  - Before: `description: 'Best bed bug spray for travel in Canada: a small can with a PCP number for luggage seams. CATSA: insecticides not in carry-on. Picks and the hotel routine.',`
  - After: `description: 'Best bed bug spray for travel in Canada: a small can with a PCP number, for beds, not luggage. CATSA: insecticides not in carry-on. Heat tools for bags.',`
- **L103** BlogPosting schema description: "luggage pre-treatment" replaced. T-32254
  - Before: `<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian buyer’s guide to travel-size bed-bug sprays — what CATSA allows on a flight, picks with a Canadian PCP number, luggage pre-treatment, and the homecoming heat routine.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />`
  - After: `<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian buyer’s guide to travel-size bed-bug sprays — what CATSA allows on a flight, picks with a Canadian PCP number, what their labels allow (not luggage), and the homecoming heat routine.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />`
- **L116** Hero: "for your luggage seams" replaced. T-32254
  - Before: `<p className="text-xl text-brand-100 max-w-3xl">The best bed bug spray for travel is a small can with a Canadian PCP number for your luggage seams, not your clothes; our pick is the Doktor Doom Travel Pro (check its label for the number). Flying? CATSA says insecticides cannot go in carry-on, and checked bags need your airline&rsquo;s approval.</p>`
  - After: `<p className="text-xl text-brand-100 max-w-3xl">The best bed bug spray for travel is a small can with a Canadian PCP number, used only where its label allows: our pick, the Doktor Doom Travel Pro (Reg. No. 32254), is for spot treatment of beds and cracks, not your luggage or clothes. For the suitcase, use heat. Flying? CATSA says insecticides cannot go in carry-on, and checked bags need your airline&rsquo;s approval.</p>`
- **L129** Quick Answer paragraph (no Amazon element on the line): luggage spraying and Proof as the best residual removed. T-32254, T-proof
  - Before: `<p className="text-gray-800 text-[15px] leading-relaxed font-medium">The best bed-bug spray for travel in Canada is a small product with a Canadian <strong>PCP registration number</strong> that you can pack and spray onto luggage seams and hotel harbourage &mdash; the <strong>Doktor Doom Travel Pro</strong> is the standout because it is a Canadian aerosol with a PCP number on the label, in a compact can. A <strong>Proof travel-size</strong> spray is the best lower-odour residual for pre-treating a suitcase. Flying? CATSA lists insecticides as not permitted in carry-on (checked only if your airline approves). Treat the bag &mdash; not the hotel room &mdash; and finish with a hot-dryer cycle on clothes when you get home.</p>`
  - After: `<p className="text-gray-800 text-[15px] leading-relaxed font-medium">The best bed-bug spray for travel in Canada is a small can with a Canadian <strong>PCP registration number</strong>, used only where its label allows &mdash; the <strong>Doktor Doom Travel Pro</strong> (Reg. No. 32254) is our pick: a compact contact spray whose label covers spot and crack-and-crevice treatment, including mattresses, box springs, bed frames and headboards. Its label does not list luggage and says &ldquo;DO NOT treat clothing,&rdquo; and <strong>Proof</strong>, the travel spray often suggested for suitcases, has no Canadian registration, so heat the bag instead. Flying? CATSA lists insecticides as not permitted in carry-on (checked only if your airline approves). Inspect the room, keep the bag off the bed, and finish with a hot-dryer cycle on clothes when you get home.</p>`
- **L133** Quick Answer bullet: "Spray the suitcase seams, zippers, and corners" reversed. T-32254
  - Before: `<li>Spray the suitcase seams, zippers, and corners &mdash; not your clothes or the hotel mattress.</li>`
  - After: `<li>Do not spray the suitcase or your clothes with our pick (its label does not list luggage and says &ldquo;DO NOT treat clothing&rdquo;), and leave the hotel&rsquo;s mattress to the hotel; heat the bag instead.</li>`
- **L134** Quick Answer bullet: residual-for-prevention line replaced by the label's "Contact spray". T-32254
  - Before: `<li>Residual sprays leave a lasting film for prevention; contact sprays kill a bug you can see right now.</li>`
  - After: `<li>Our pick is a contact spray, as its label says: it kills a bug you can see right now, and it is not a suitcase barrier.</li>`
- **L136** Quick Answer bullet: "A spray protects the bag" replaced. T-32254
  - Before: `<li>A spray protects the bag; a <Link href="/blog/best-bed-bug-luggage-heater-canada" className="text-emerald-700 underline">luggage heater</Link> kills what&rsquo;s hiding inside it.</li>`
  - After: `<li>Our spray pick is not a bag treatment; a <Link href="/blog/best-bed-bug-luggage-heater-canada" className="text-emerald-700 underline">luggage heater</Link> kills what&rsquo;s hiding inside the bag.</li>`
- **L201** Comparison-table intro: "All four help on the road" replaced by the registration facts. T-proof, T-32757
  - Before: `All four help on the road, but they solve different parts of the travel problem. Here is the honest breakdown, with a live Amazon.ca availability check per type.`
  - After: `These are the four kinds of travel spray sold online, but in Canada Proof has no registration, and the one registered permethrin-treated apparel, No Fly Zone (Reg. No. 32757), lists mosquitoes and ticks, not bed bugs. Here is the honest breakdown, with a live Amazon.ca availability check per type, and a heat tool where no registered spray fits.`
- **L224** Comparison-table cell, Proof row, Best at (the row's BuyLink is on another line, untouched): "Pre-treating the suitcase to stay protected" replaced. T-proof
  - Before: `<td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Pre-treating the suitcase</strong> to stay protected</td>`
  - After: `<td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Sold for pre-treating a suitcase</strong>; heat the bag instead</td>`
- **L231** Comparison-table cell, fabric row, Best at: "Bonding to travel sacks, liners, gear" replaced. T-32757
  - Before: `<td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Bonding to</strong> travel sacks, liners, gear</td>`
  - After: `<td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Sold for</strong> travel sacks, liners, gear; heat them instead</td>`
- **L238** Comparison-table cell, natural row: "Gentle" became "Low-odour" (the box's gentle wording was cut the same way). B-safe
  - Before: `<td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Gentle spot touch-up</strong> in a room you sleep in</td>`
  - After: `<td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Low-odour spot touch-up</strong> in a room you sleep in</td>`
- **L251** Warning box: "A travel spray protects the bag" replaced. T-32254
  - Before: `<strong className="text-amber-900">⚠️ A travel spray protects the bag — it does not treat the room.</strong> Spraying a hotel mattress will not clear an established population, and treating someone else&rsquo;s room can break the property&rsquo;s rules. Protect your own luggage, report any evidence to the front desk, and finish with a <Link href="/blog/best-bed-bug-luggage-heater-canada" className="text-emerald-700 underline font-semibold">luggage heater</Link> or hot dryer at home.`
  - After: `<strong className="text-amber-900">⚠️ Our travel spray pick is not a bag treatment, and a spray does not treat the room.</strong> Our pick&rsquo;s label does not list luggage; spraying a hotel mattress will not clear an established population, and treating someone else&rsquo;s room can break the property&rsquo;s rules. Protect your own luggage by keeping it off the bed and floor, report any evidence to the front desk, and finish with a <Link href="/blog/best-bed-bug-luggage-heater-canada" className="text-emerald-700 underline font-semibold">luggage heater</Link> or hot dryer at home.`
- **L262** Body: "built for luggage seams" and "it protects your suitcase" replaced. T-32254
  - Before: `<p>The best travel bed-bug spray is the one you can legally pack and confidently use on the surfaces that matter &mdash; and for Canadian travellers that means a small product with a Canadian <strong>PCP registration number</strong>, built for luggage seams and hotel harbourage rather than a full-size home aerosol (and on a flight, no insecticide goes in your carry-on, whatever its size). A travel spray is a narrow tool with a specific job: it protects your suitcase and lets you spot-treat something you find on arrival. It is not, and cannot be, a way to clear an active infestation, and any product that promises otherwise on a trip-size can is overselling.</p>`
  - After: `<p>The best travel bed-bug spray is the one you can legally pack and confidently use on the surfaces that matter &mdash; and for Canadian travellers that means a small product with a Canadian <strong>PCP registration number</strong>, used only on the surfaces its label lists, rather than a full-size home aerosol (and on a flight, no insecticide goes in your carry-on, whatever its size). A travel spray is a narrow tool with a specific job: it lets you spot-treat something you find on arrival, where its label allows. Our pick&rsquo;s label does not list luggage, so the suitcase is a job for inspection and heat. It is not, and cannot be, a way to clear an active infestation, and any product that promises otherwise on a trip-size can is overselling.</p>`
- **L263** Body: "leaves a residual film" (label: "Contact spray") and Proof as "the longer-lasting choice" replaced. T-32254, T-proof
  - Before: `<p>That job splits into two jobs, which is why our picks above are differentiated by intent. If you want one reliable, Canada-legal can that does knockdown and leaves a residual film, the <strong>Doktor Doom Travel Pro</strong> is the standout &mdash; a Canadian aerosol with a PCP number on the label, in a compact format. If your priority is pre-treating a suitcase so it stays protected across a week, a lower-odour <strong>Proof travel-size</strong> residual is the longer-lasting choice. The fabric and natural picks cover narrower needs. The reasoning below explains how to match the tool to the trip &mdash; and, just as importantly, what the spray does <em>not</em> replace.</p>`
  - After: `<p>That is why our picks above split by job. If you want one registered, packable can for spot treatment, the <strong>Doktor Doom Travel Pro</strong> (Reg. No. 32254) is the standout &mdash; a Canadian contact spray in a compact format, labelled for spot and crack-and-crevice treatment, including mattresses, box springs, bed frames and headboards. If your worry is the suitcase itself, the answer is heat, not spray: <strong>Proof</strong>, the travel spray often suggested for that job, has no Canadian registration. The heat picks cover the bag and your clothes; the natural pick covers spot use. The reasoning below explains how to match the tool to the trip &mdash; and, just as importantly, what the spray does <em>not</em> replace.</p>`
- **L296** Body: residual spray "precisely what you want for pre-treating a suitcase" replaced. T-32254
  - Before: `<p>Bed-bug sprays fall into two functional camps, and understanding the split tells you exactly what to pack. A <strong>contact spray</strong> kills the bugs it directly wets and then dissipates &mdash; it is a spot-treatment tool for something you can see right now, like a bug on a suitcase seam or in a headboard crack. A <strong>residual spray</strong> dries into a film that keeps working for days or weeks, which is precisely what you want for pre-treating a suitcase that needs to stay protected through a trip.</p>`
  - After: `<p>Bed-bug sprays fall into two functional camps, and understanding the split tells you exactly what to pack. A <strong>contact spray</strong> kills the bugs it directly wets and then dissipates &mdash; it is a spot-treatment tool for something you can see right now, like a bug in a headboard crack or a mattress seam. A <strong>residual spray</strong> dries into a film that keeps working for days or weeks, but only on the surfaces its label lists, and our pick&rsquo;s label does not list luggage.</p>`
- **L297** Body: "a lasting film on the bag" and "a knockdown ingredient plus a residual" replaced by the label's "Contact spray". T-32254
  - Before: `<p>For travel, both jobs come up: you want a lasting film on the bag (residual) and the ability to knock down something you spot on arrival (contact). Many travel-oriented products blend the two &mdash; a knockdown ingredient plus a residual &mdash; which is a big part of why a compact aerosol like the Doktor Doom Travel Pro is such a practical single choice. If you are only going to carry one thing and you value prevention, prioritise residual; if you are worried about seeing a live bug and reacting, contact speed matters more. Neither, to be clear, substitutes for heat or a professional treatment once an infestation is established at home &mdash; that is a different problem covered in <Link href="/blog/how-to-get-rid-of-bed-bugs-canada">our full removal guide</Link>.</p>`
  - After: `<p>For travel, the job a spray can do is the second one: knocking down something you spot on arrival. The Doktor Doom Travel Pro&rsquo;s label calls it a &ldquo;Contact spray&rdquo; for spot and crack-and-crevice treatment, which is why it is a practical single can to carry; the bag itself is a job for heat, not a film of insecticide. No spray, to be clear, substitutes for heat or a professional treatment once an infestation is established at home &mdash; that is a different problem covered in <Link href="/blog/how-to-get-rid-of-bed-bugs-canada">our full removal guide</Link>.</p>`
- **L300** H2 "How to Actually Use Spray on Your Luggage" renamed. T-32254
  - Before: `<h2>How to Actually Use Spray on Your Luggage</h2>`
  - After: `<h2>How to Protect Your Luggage (Without Spraying It)</h2>`
- **L303** Step "Pre-treat before you leave" replaced. T-32254, T-luggage
  - Before: `<li><strong>Pre-treat before you leave.</strong> Lightly spray a residual product into the seams, piping, zippers, and interior corners of the empty case and let it dry. This leaves a barrier that discourages any bug that tries to move in.</li>`
  - After: `<li><strong>Skip the pre-trip spray.</strong> Our travel pick&rsquo;s label (Reg. No. 32254) does not list luggage, and it says &ldquo;DO NOT treat clothing.&rdquo; If any spray goes near your bag, its label has to list luggage and show a PCP number.</li>`
- **L306** Step "Spot-treat what you find ... re-spray your own case seams" replaced. HC-travel
  - Before: `<li><strong>Spot-treat what you find.</strong> If you see evidence, re-spray your own case seams and treat only your immediate belongings &mdash; then report it to the front desk and ask to move rooms.</li>`
  - After: `<li><strong>Report what you find.</strong> If you see evidence, keep the case closed and off the floor, report it to the front desk and ask to move rooms, not next to the affected one.</li>`
- **L307** Step "Re-spray on the way out" replaced by Health Canada's home step. HC-travel
  - Before: `<li><strong>Re-spray on the way out.</strong> Spray the empty case seams again before you pack for the trip home, so the barrier is fresh for the return leg.</li>`
  - After: `<li><strong>Heat and vacuum at home.</strong> Health Canada says to check luggage on a hard surface before you bring it in and to vacuum the suitcase; a luggage heater treats what is inside the bag.</li>`
- **L309** Body: "Spray the shell of the bag" and the fabric-treatment pick replaced. T-32254, T-32757
  - Before: `<p>Notice what is <em>not</em> on that list: spraying your clothes, or dousing the hotel mattress. Most contact aerosols are labelled for cracks, crevices, and hard surfaces &mdash; not for fabric you will wear against your skin. Spray the shell of the bag and pack clean clothes inside it. The exception is a purpose-built fabric treatment (our third pick), which is a different category, labelled specifically to bond to gear and travel sacks &mdash; and even then, only where the label authorises it.</p>`
  - After: `<p>Notice what is <em>not</em> on that list: spraying the bag, spraying your clothes, or dousing the hotel mattress. Our pick&rsquo;s label says &ldquo;DO NOT treat clothing&rdquo; and does not list luggage. Permethrin-treated fabric and gear is a different category, and in Canada the one registered treated apparel, No Fly Zone (Reg. No. 32757), lists mosquitoes and ticks, not bed bugs; that is why our third pick is a heat chamber, not a spray.</p>`
- **L313** Body: "spray the empty case seams and zippers with a residual product" became vacuum. HC-travel
  - Before: `<p>Do not carry the suitcase to the bedroom and unpack onto the bed. Unpack in the garage, entryway, or bathroom instead. Run every piece of washable clothing &mdash; worn or not &mdash; through a <strong>hot dryer for at least 30 minutes</strong>, because sustained heat kills bed bugs at every life stage, eggs included, with no chemical at all. Then spray the empty case seams and zippers with a residual product, wipe it down, and store it away from bedrooms &mdash; sealed in a large bag or a hard bin. For frequent travellers, the definitive version of this step is a <Link href="/blog/best-bed-bug-luggage-heater-canada">portable luggage heater</Link>, which raises the entire contents of a bag to a lethal temperature and reaches the eggs a surface spray never can. Spray protects the outside of the bag; heat clears the inside.</p>`
  - After: `<p>Do not carry the suitcase to the bedroom and unpack onto the bed. Unpack in the garage, entryway, or bathroom instead. Run every piece of washable clothing &mdash; worn or not &mdash; through a <strong>hot dryer for at least 30 minutes</strong>, because sustained heat kills bed bugs at every life stage, eggs included, with no chemical at all. Then vacuum the empty case, as Health Canada advises, wipe it down, and store it away from bedrooms &mdash; sealed in a large bag or a hard bin. For frequent travellers, the definitive version of this step is a <Link href="/blog/best-bed-bug-luggage-heater-canada">portable luggage heater</Link>, which raises the entire contents of a bag to a lethal temperature and reaches the eggs a surface spray never can. Heat, not spray, is what clears the bag.</p>`
- **L320** Buying list: "If you want the bag protected all week, prioritise a residual" replaced. T-32254
  - Before: `<li><strong>Residual for prevention, contact for reaction.</strong> If you want the bag protected all week, prioritise a residual. If your worry is reacting to a live bug, value knockdown speed. A blended aerosol covers both.</li>`
  - After: `<li><strong>The label decides where it goes.</strong> Our pick is a contact spray for spot and crack-and-crevice treatment, including mattresses and bed frames; its label does not list luggage, so protect the bag with inspection and heat, not a residual film.</li>`
- **L322** Buying list: "Fabric-labelled only for gear" replaced by heat and the apparel registration fact. T-32757
  - Before: `<li><strong>Fabric-labelled only for gear.</strong> If you specifically want to treat a travel sack or liner, use a product labelled for fabric &mdash; and never repurpose a surface spray for clothing that touches skin.</li>`
  - After: `<li><strong>Heat for gear and fabric.</strong> For a travel sack, liner or clothes, use a hot dryer or a heat chamber: the one registered treated apparel in Canada, No Fly Zone (Reg. No. 32757), lists mosquitoes and ticks, not bed bugs. Never repurpose a surface spray for clothing that touches skin.</li>`
- **L324** Body: "does everything a traveller needs" limited to label use plus a hot dryer. T-32254
  - Before: `<p>Read that as a packing decision, not a shopping spree: one small can or pump with a PCP number, in a checked bag or the car, does everything a traveller needs. The frequent-flyer upgrade is not a bigger spray &mdash; it is adding a luggage heater to your homecoming routine.</p>`
  - After: `<p>Read that as a packing decision, not a shopping spree: one small can with a PCP number, in a checked bag or the car, used only where its label allows, plus a hot dryer at home. The frequent-flyer upgrade is not a bigger spray &mdash; it is adding a luggage heater to your homecoming routine.</p>`
- **L327** Body: "residual travel spray" and "pre-treat and re-spray the case" removed. T-32254, HC-travel
  - Before: `<p>For occasional trips, disciplined behaviour plus a residual travel spray covers most of the real risk: inspect the hotel bed, keep luggage off the floor and bed, pre-treat and re-spray the case, and run your clothes through a hot dryer at home. That routine stops the large majority of hitchhiker scares before they become a problem, and the spray earns its small place in it.</p>`
  - After: `<p>For occasional trips, disciplined behaviour covers most of the real risk: inspect the hotel bed, keep luggage off the floor and bed, vacuum the case at home, and run your clothes through a hot dryer. That routine stops the large majority of hitchhiker scares before they become a problem, and a registered spray earns its small place in it as a spot-treatment tool for the places its label lists.</p>`
- **L328** Body: "prevention on the outside of the bag" replaced. T-32254
  - Before: `<p>For frequent travellers &mdash; or anyone who has already had a scare &mdash; the honest upgrade is to add heat, not more chemical. A portable <Link href="/blog/best-bed-bug-luggage-heater-canada">luggage heater</Link> is the definitive homecoming tool, and a <Link href="/blog/bed-bug-mattress-encasement-canada">mattress encasement</Link> back home turns your own bed into a monitored, sealable surface so a stray hitchhiker has nowhere to hide. If a spray ever feels like it is doing the whole job on the road, that is the sign to step back and remember it is one layer: prevention on the outside of the bag, with inspection and heat carrying the real weight. For the full picture of how these tools fit together &mdash; sprays, heaters, steamers, encasements, and detectors &mdash; our <Link href="/blog/bed-bug-control-canada-hub">bed-bug control hub</Link> lays out the complete Canadian toolkit, and our <Link href="/blog/best-pest-control-equipment-canada">pest-control equipment guide</Link> covers the gear side in one place.</p>`
  - After: `<p>For frequent travellers &mdash; or anyone who has already had a scare &mdash; the honest upgrade is to add heat, not more chemical. A portable <Link href="/blog/best-bed-bug-luggage-heater-canada">luggage heater</Link> is the definitive homecoming tool, and a <Link href="/blog/bed-bug-mattress-encasement-canada">mattress encasement</Link> back home turns your own bed into a monitored, sealable surface so a stray hitchhiker has nowhere to hide. If a spray ever feels like it is doing the whole job on the road, that is the sign to step back and remember it is one layer: spot treatment where its label allows, with inspection and heat carrying the real weight. For the full picture of how these tools fit together &mdash; sprays, heaters, steamers, encasements, and detectors &mdash; our <Link href="/blog/bed-bug-control-canada-hub">bed-bug control hub</Link> lays out the complete Canadian toolkit, and our <Link href="/blog/best-pest-control-equipment-canada">pest-control equipment guide</Link> covers the gear side in one place.</p>`

### best-bed-bug-powder-canada (15 lines)

- **L29** FAQ 1 answer: CimeXa called the best powder for Canadian homes with no registration note; now matches the hero (top pick on lab results, not registered; a DE with a PCP number for Canada). P-cimexa, P-32561
  - Before: `answer: 'For most Canadian homes, the best bed-bug powder is a silica-gel (amorphous silica aerogel) dust like CimeXa — it kills faster than diatomaceous earth, keeps working for months when left undisturbed in dry cracks and voids, and you use far less of it. Food-grade diatomaceous earth such as Doktor Doom is the trusted, low-cost, widely available alternative that is easy to find at Canadian retailers and works well in the right dry spots, just more slowly. The honest catch with any powder is that it is a slow, contact-only tool: bugs must physically walk through a thin, barely visible film before it dehydrates them over days, so a dust is one layer of a plan, never the whole plan.',`
  - After: `answer: 'Our top pick on lab results is a silica-gel (amorphous silica aerogel) dust like CimeXa — it kills faster than diatomaceous earth, keeps working for months when left undisturbed in dry cracks and voids, and you use far less of it — but CimeXa has no Canadian registration: Health Canada’s pesticide registry has no CimeXa listing and no domestic-class silica gel dust for bed bugs. For a dust whose label shows a Canadian PCP number, pick a diatomaceous earth such as Doktor Doom Be Green (Reg. No. 32561): low-cost, widely available at Canadian retailers, and effective in the right dry spots, just more slowly. The honest catch with any powder is that it is a slow, contact-only tool: bugs must physically walk through a thin, barely visible film before it dehydrates them over days, so a dust is one layer of a plan, never the whole plan.',`
- **L33** FAQ 2 answer: "choose silica", "cheap, accessible, and gentle" and "the comfort of a food-grade natural mineral" replaced. P-cimexa, P-bulk, B-safe
  - Before: `answer: 'Silica gel generally outperforms diatomaceous earth for bed bugs. Both kill the same way — by abrading and adsorbing the waxy layer on the insect cuticle so it dries out — but laboratory comparisons have repeatedly shown silica-gel dusts kill bed bugs faster and at much lighter application rates. Silica also holds up better in slightly humid conditions and does not clump the way some DE can. Diatomaceous earth wins on cost, availability, and the comfort of a food-grade natural mineral many people already keep on hand. If you want the strongest single dust, choose silica; if you want cheap, accessible, and gentle, choose a DE whose label shows a Canadian PCP number.',`
  - After: `answer: 'Silica gel generally outperforms diatomaceous earth for bed bugs. Both kill the same way — by abrading and adsorbing the waxy layer on the insect cuticle so it dries out — but laboratory comparisons have repeatedly shown silica-gel dusts kill bed bugs faster and at much lighter application rates. Silica also holds up better in slightly humid conditions and does not clump the way some DE can. Diatomaceous earth wins on cost and availability, and it is the one you can legally use at home in Canada: PMRA’s registry lists no domestic-class silica gel dust for bed bugs (no CimeXa listing; Drione, Reg. No. 15255, is commercial class). So in Canada, choose a DE whose label shows a PCP number and lists bed bugs.',`
- **L45** FAQ 5 answer: "considered low-toxicity to people and pets" replaced by the label's "Avoid breathing dust" (the box's Low-toxicity wording was cut the same way). B-safe, P-32561
  - Before: `answer: 'Food-grade diatomaceous earth is a naturally occurring mineral and is considered low-toxicity to people and pets, which is a large part of its appeal, but the practical safety issue is dust inhalation, not poisoning. The fine airborne particles can irritate the lungs, nose, and eyes, so you should wear a dust mask while applying, avoid creating clouds, and apply thin films into cracks rather than broadcasting powder across open floors. Never use pool-grade (calcined) diatomaceous earth indoors — it contains crystalline silica and is a genuine respiratory hazard. For bed bugs, use only a DE whose label carries a Canadian PCP registration number and lists bed bugs, applied lightly with a mask on: Health Canada says not to buy or use a pest control product without that number, and the U.S. EPA says pool or food grade DE should not be used.',`
  - After: `answer: 'Diatomaceous earth is a naturally occurring mineral, and the hazard to plan for is the dust itself: the label for Doktor Doom Be Green (Reg. No. 32561) says "Avoid breathing dust." The fine airborne particles can irritate the lungs, nose, and eyes, so you should wear a dust mask while applying, avoid creating clouds, and apply thin films into cracks rather than broadcasting powder across open floors. Never use pool-grade (calcined) diatomaceous earth indoors — it contains crystalline silica and is a genuine respiratory hazard. For bed bugs, use only a DE whose label carries a Canadian PCP registration number and lists bed bugs, applied lightly with a mask on: Health Canada says not to buy or use a pest control product without that number, and the U.S. EPA says pool or food grade DE should not be used.',`
- **L61** FAQ 9 answer: "the version that is legitimately available for the Canadian market" (implied a registered CimeXa) replaced by the registry facts. P-cimexa
  - Before: `answer: 'Silica-gel bed-bug dusts are sold to Canadian buyers, and CimeXa is the best-known name. As with any pest-control product, you want the version that is legitimately available for the Canadian market rather than a grey-market import, and you should check current Canadian availability and any registration status before buying. The broader point matters for compliance: Health Canada’s PMRA regulates pest-control products, and some dusts sold freely in the United States are not registered for sale in Canada. Stick to products offered to Canadian customers through Canadian retail channels, and treat a suspiciously cheap cross-border import with caution.',`
  - After: `answer: 'Not as a registered product. CimeXa is the best-known silica-gel bed-bug dust, but Health Canada’s pesticide registry has no CimeXa listing (its label carries U.S. EPA Reg. No. 73079-12), and it lists no domestic-class silica gel dust for bed bugs: the one current silica-aerogel bed bug dust, Drione (Reg. No. 15255), is commercial class. Health Canada says "If the product label does not have a PCP registration number, do not buy or use it." A store or marketplace listing is not a registration, so check the label for a PCP number; for a dust you can use at home, that means a diatomaceous earth such as Doktor Doom Be Green (Reg. No. 32561).',`
- **L129** Quick Answer paragraph: "The best bed-bug powder in Canada is ... CimeXa" and "gentler alternative" replaced. P-cimexa, P-32561, B-safe
  - Before: `<p className="text-gray-800 text-[15px] leading-relaxed font-medium">The best bed-bug powder in Canada is a <strong>silica-gel dust like CimeXa</strong>: it kills faster than diatomaceous earth, works at a far lighter application rate, and keeps killing for months in dry, undisturbed cracks. <strong>Food-grade diatomaceous earth</strong> (Doktor Doom) is the cheap, widely available, gentler alternative &mdash; slower, but trusted and easy to find. Both are slow, contact-only desiccants: bugs must walk through a barely-visible film, so a powder is one layer of a plan, paired with steam and vacuuming, never a standalone fix.</p>`
  - After: `<p className="text-gray-800 text-[15px] leading-relaxed font-medium">The fastest bed-bug powder in lab tests is a <strong>silica-gel dust like CimeXa</strong>, our top pick: it kills faster than diatomaceous earth, works at a far lighter application rate, and keeps killing for months in dry, undisturbed cracks &mdash; but it has no Canadian registration (Health Canada&rsquo;s registry has no CimeXa listing). For a dust whose label shows a Canadian PCP number, pick a <strong>diatomaceous earth</strong> such as Doktor Doom Be Green (Reg. No. 32561): cheap, widely available and easy to find, but slower. Both are slow, contact-only desiccants: bugs must walk through a barely-visible film, so a powder is one layer of a plan, paired with steam and vacuuming, never a standalone fix.</p>`
- **L132** Quick Answer bullet: "Food-grade DE wins on ... low toxicity" replaced. B-safe, P-bulk
  - Before: `<li>Food-grade DE wins on cost, availability, and low toxicity; never use pool-grade DE indoors.</li>`
  - After: `<li>A DE whose label shows a PCP number wins on cost and availability, and it is the dust you can legally use at home in Canada; never use pool-grade DE indoors.</li>`
- **L219** Comparison-table cell, CimeXa row, Watch out for (the row's BuyLink is on another line, untouched): "Buy the Canadian-market version" replaced. P-cimexa
  - Before: `<td className="px-4 py-3 text-gray-700">Buy the Canadian-market version</td>`
  - After: `<td className="px-4 py-3 text-gray-700">No Canadian registration found (no CimeXa listing; its label carries U.S. EPA Reg. No. 73079-12)</td>`
- **L225** Comparison-table cell, DE row: "gentle" removed. B-safe
  - Before: `<td className="px-4 py-3 text-gray-700">Cheap, gentle, easy to find</td>`
  - After: `<td className="px-4 py-3 text-gray-700">Cheap, easy to find, domestic-class registration</td>`
- **L247** Table note: "Buy the version legitimately offered to Canadian customers" replaced. P-cimexa
  - Before: `Pest-control products in Canada are regulated by Health Canada&rsquo;s PMRA. Buy the version legitimately offered to Canadian customers &mdash; some dusts sold freely in the United States are not registered for sale in Canada, and a suspiciously cheap cross-border import is worth avoiding.`
  - After: `Pest-control products in Canada are regulated by Health Canada&rsquo;s PMRA. Check the label for a Canadian PCP number, wherever you shop: some dusts sold freely in the United States are not registered here, CimeXa among them (no listing in Health Canada&rsquo;s registry).`
- **L262** Body: CimeXa as the best powder "for most Canadian homes" and DE's "gentleness" replaced. P-cimexa, B-safe
  - Before: `<p>The best bed-bug powder for most Canadian homes is a <strong>silica-gel dust</strong> &mdash; the amorphous-silica aerogel sold most recognizably as CimeXa &mdash; because it does the one thing a desiccant dust exists to do more efficiently than anything else on the shelf: it dries bed bugs out fast, at a barely-there application rate, and keeps doing it for months. The classic alternative, <strong>food-grade diatomaceous earth</strong> like Doktor Doom, kills the same way and earns its place on cost, availability, and gentleness, but it is slower and needs a heavier film to match silica. Both belong in the conversation, and this guide explains exactly when each is the smarter buy.</p>`
  - After: `<p>The strongest bed-bug powder in lab tests is a <strong>silica-gel dust</strong> &mdash; the amorphous-silica aerogel sold most recognizably as CimeXa &mdash; because it does the one thing a desiccant dust exists to do more efficiently than anything else: it dries bed bugs out fast, at a barely-there application rate, and keeps doing it for months. In Canada, though, CimeXa has no registration, and Health Canada&rsquo;s registry lists no domestic-class silica gel dust for bed bugs. The registered alternative, <strong>diatomaceous earth</strong> with a PCP number such as Doktor Doom Be Green (Reg. No. 32561), kills the same way and earns its place on cost and availability, but it is slower and needs a heavier film to match silica. Both belong in the conversation, and this guide explains what each does and which one a Canadian label allows.</p>`
- **L302** Body: "reassuringly natural for households nervous about anything near where they sleep" replaced. B-safe, P-cimexa
  - Before: `<p>Silica gel also tolerates mild humidity better and does not clump the way DE can when the air is damp &mdash; an underrated advantage in a Canadian basement bedroom. The trade-offs run the other way on cost and comfort: food-grade DE is inexpensive, sold everywhere, and reassuringly natural for households nervous about anything near where they sleep. Our deeper dives into each &mdash; the <Link href="/blog/cimexa-bed-bug-review-canada">CimeXa silica review</Link> and the <Link href="/blog/diatomaceous-earth-for-bed-bugs">diatomaceous earth for bed bugs</Link> guide &mdash; break down the evidence and the handling details for each product individually.</p>`
  - After: `<p>Silica gel also tolerates mild humidity better and does not clump the way DE can when the air is damp &mdash; an underrated advantage in a Canadian basement bedroom. The trade-offs run the other way on cost and registration: a DE with a PCP number is inexpensive, widely sold, and the one of the two you can legally use at home in Canada. Our deeper dives into each &mdash; the <Link href="/blog/cimexa-bed-bug-review-canada">CimeXa silica review</Link> and the <Link href="/blog/diatomaceous-earth-for-bed-bugs">diatomaceous earth for bed bugs</Link> guide &mdash; break down the evidence and the handling details for each product individually.</p>`
- **L303** Body: "choose silica gel", "gentle" and "Many people use both" replaced; DE directions quoted from the label. P-cimexa, P-32561, B-safe
  - Before: `<p><strong>The short version:</strong> if you want the strongest single dust and will use it carefully, choose silica gel. If you want cheap, widely available, and gentle, and you accept a slower kill, choose a DE whose label shows a Canadian PCP number. Many people use both &mdash; silica in the tight voids that stay dry, DE for broad, low-cost coverage along baseboards and under carpet edges.</p>`
  - After: `<p><strong>The short version:</strong> silica gel is the strongest single dust in lab tests, but in Canada no silica gel dust has a domestic-class registration for bed bugs (no CimeXa listing; Drione is commercial class), so a Canadian home uses a DE whose label shows a PCP number and accepts a slower kill. Use it where its label directs: Be Green&rsquo;s label says to take beds apart and dust &ldquo;frames, joints, mattresses, tufts and seams, floors and baseboards.&rdquo;</p>`
- **L320** Body: "genuinely reassuring on toxicity" and "low-toxicity to people and pets" replaced. B-safe, P-32561
  - Before: `<p>The safety story for these powders is genuinely reassuring on toxicity but demands respect on inhalation. Food-grade diatomaceous earth is a naturally occurring mineral considered low-toxicity to people and pets, and silica-gel insecticide dusts are formulated for indoor use around the home. The real hazard with any fine powder is the airborne dust itself: breathing clouds of it can irritate your lungs, nose, throat, and eyes. So wear a dust mask while applying, work slowly to avoid raising clouds, and apply thin films into cracks rather than broadcasting powder across open floor.</p>`
  - After: `<p>The hazard to plan for with these powders is inhalation. Diatomaceous earth is a naturally occurring mineral, and the Be Green label (Reg. No. 32561) says &ldquo;Avoid breathing dust.&rdquo; The real hazard with any fine powder is the airborne dust itself: breathing clouds of it can irritate your lungs, nose, throat, and eyes. So wear a dust mask while applying, work slowly to avoid raising clouds, and apply thin films into cracks rather than broadcasting powder across open floor.</p>`
- **L330** Buying list: "pay for silica gel" replaced. P-cimexa
  - Before: `<li><strong>Kill speed and rate (this is where silica wins).</strong> If you want the most effective single dust and will handle it carefully, pay for silica gel &mdash; it kills sooner and a small container lasts a long time because the correct film is so light.</li>`
  - After: `<li><strong>Kill speed and rate (this is where silica wins in lab tests).</strong> Silica gel kills sooner, and a small container lasts a long time because the correct film is so light, but PMRA&rsquo;s registry has no domestic-class silica gel dust for bed bugs, so check any listing for a PCP number before you pay for one.</li>`
- **L336** Body: "A single small jar of silica gel plus a duster covers a bedroom" replaced by DE with a PCP number and the label's pack sizes. P-cimexa, P-32561
  - Before: `<p>Read that as a spending map: put your dollars into the right powder and a real applicator, insist on a PCP number on the label, and treat sheer volume as the last consideration. A single small jar of silica gel plus a duster covers a bedroom with room to spare; a bulk DE bag with a PCP number is the budget route to dusting an entire home. Neither is expensive, and both outlast their cost many times over &mdash; provided you resist the urge to pile it on.</p>`
  - After: `<p>Read that as a spending map: put your dollars into the right powder and a real applicator, insist on a PCP number on the label, and treat sheer volume as the last consideration. A bag of DE with a PCP number plus a duster covers a bedroom; Be Green&rsquo;s label sizes run from 100 g to 7 kg, so a bigger bag with the same PCP number is the budget route to dusting an entire home. Neither is expensive, and both outlast their cost many times over &mdash; provided you resist the urge to pile it on.</p>`

### best-spider-spray-canada (7 lines)

- **L28** FAQ 1 answer. S-konk
  - Before: `answer: 'Doktor Doom residual insecticide spray is the best spider spray for most Canadian homes: it is a domestic-class product line formulated for crack-and-crevice and perimeter use, it leaves a treated zone that keeps working for weeks, and it is widely stocked at Canadian retailers. Konk OnGuard and the Knock Down line are strong Canadian-market alternatives if your local store carries them instead. Verify the exact can you buy carries a PCP registration number on the label — that number is what makes a pesticide legal for sale in Canada. For a low-tox route, a peppermint-oil spray can deter some spiders short-term, and flat glue traps remain the best pesticide-free interceptor.',`
  - After: `answer: 'Doktor Doom residual insecticide spray is the best spider spray for most Canadian homes: it is a domestic-class product line formulated for crack-and-crevice and perimeter use, it leaves a treated zone that keeps working for weeks, and it is widely stocked at Canadian retailers. Knock Down Spider Killer (Reg. No. 29689) and Konk Spider & Tick II (Reg. No. 32619) are strong Canadian alternatives if your local store carries them instead. Verify the exact can you buy carries a PCP registration number on the label — that number is what makes a pesticide legal for sale in Canada. For a low-tox route, a peppermint-oil spray can deter some spiders short-term, and flat glue traps remain the best pesticide-free interceptor.',`
- **L102** BlogPosting schema description. S-konk
  - Before: `<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian comparison of PMRA-registered residual spider sprays (Doktor Doom, Konk OnGuard, Knock Down) against natural sprays and glue traps, with perimeter application technique, indoor vs outdoor label rules, and the PCP-number check for grey-market imports.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />`
  - After: `<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Independent Canadian comparison of PMRA-registered residual spider sprays (Doktor Doom, Knock Down, Konk) against natural sprays and glue traps, with perimeter application technique, indoor vs outdoor label rules, and the PCP-number check for grey-market imports.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />`
- **L128** Quick Answer paragraph (no Amazon element on the line). S-konk
  - Before: `<p className="text-gray-800 text-[15px] leading-relaxed font-medium">The best spider spray in Canada is Doktor Doom&rsquo;s residual insecticide line — a widely stocked, Canadian-market domestic product formulated for the crack-and-crevice and perimeter treatments that actually intercept spiders, leaving a treated zone that keeps working for weeks. Konk OnGuard and Knock Down residual sprays are solid Canadian alternatives; whichever can you pick up, confirm it carries a PCP registration number on the label. Skip US-market favourites like Miss Muffet&rsquo;s Revenge — they are not registered for sale in Canada.</p>`
  - After: `<p className="text-gray-800 text-[15px] leading-relaxed font-medium">The best spider spray in Canada is Doktor Doom&rsquo;s residual insecticide line — a widely stocked, Canadian-market domestic product formulated for the crack-and-crevice and perimeter treatments that actually intercept spiders, leaving a treated zone that keeps working for weeks. Knock Down Spider Killer (Reg. No. 29689) and Konk Spider &amp; Tick II (Reg. No. 32619) are solid Canadian alternatives; whichever can you pick up, confirm it carries a PCP registration number on the label. Skip US-market favourites like Miss Muffet&rsquo;s Revenge — they are not registered for sale in Canada.</p>`
- **L279** Key-facts row 'Canadian alternatives'. S-konk
  - Before: `['Canadian alternatives', 'Konk OnGuard, Knock Down residual formulations'],`
  - After: `['Canadian alternatives', 'Knock Down Spider Killer (29689), Konk Spider & Tick II (32619)'],`
- **L308** Body paragraph. S-konk
  - Before: `<p><strong>Konk OnGuard</strong> and the <strong>Knock Down</strong> line are the other Canadian-market residual families you will meet on shelves here, and either does the same job well — regional stocking, more than performance, usually decides which one you go home with. One habit applies to all of them: brands sell multiple formulations under one name, so check that the specific can in your hand is labelled for your intended site and carries a <strong>PCP registration number</strong>. That number — required on every pesticide legally sold in Canada under the Pest Control Products Act — is the entire difference between a registered product and a grey-market one, and it takes five seconds to find on the label.</p>`
  - After: `<p><strong>Knock Down</strong> (its Spider Killer is Reg. No. 29689) and <strong>Konk</strong> (Konk Spider &amp; Tick II, Reg. No. 32619) are the other Canadian-market spider sprays you will meet on shelves here, and either does the same job well — regional stocking, more than performance, usually decides which one you go home with. One habit applies to all of them: brands sell multiple formulations under one name, so check that the specific can in your hand is labelled for your intended site and carries a <strong>PCP registration number</strong>. That number — required on every pesticide legally sold in Canada under the Pest Control Products Act — is the entire difference between a registered product and a grey-market one, and it takes five seconds to find on the label.</p>`
- **L331** H2. S-konk
  - Before: `<h2>Konk OnGuard and Knock Down: The Other Canadian Shelves</h2>`
  - After: `<h2>Knock Down and Konk: The Other Canadian Shelves</h2>`
- **L332** Body: "OnGuard is the one we name as Best Alternative" replaced by the box's swap target and its label quote. S-konk
  - Before: `<p>Walk into hardware stores across Canada and the residual-insecticide shelf usually belongs to some mix of Doktor Doom, <strong>Konk OnGuard</strong>, and <strong>Knock Down</strong> — three Canadian-market families doing broadly the same work with broadly similar active-ingredient classes. OnGuard is the one we name as Best Alternative because its residual surface-spray formulations map most directly onto the perimeter-and-baseboard mission; Knock Down&rsquo;s catalogue is wide, spanning contact aerosols to residual crack-and-crevice products, and its regional availability makes it many buyers&rsquo; most convenient option.</p>`
  - After: `<p>Walk into hardware stores across Canada and the residual-insecticide shelf usually belongs to some mix of Doktor Doom, <strong>Konk</strong>, and <strong>Knock Down</strong> — three Canadian-market brands doing broadly the same work with broadly similar active-ingredient classes. Knock Down Spider Killer (Reg. No. 29689) is the one we name as Best Alternative: its label covers spiders and cockroaches inside buildings, and spiders outdoors &ldquo;including under eaves, awnings and canopies&rdquo;. Knock Down&rsquo;s catalogue is wide, spanning contact aerosols to residual crack-and-crevice products, and its regional availability makes it many buyers&rsquo; most convenient option.</p>`

### best-rat-trap-canada (8 lines)

- **L30** FAQ 1 answer. R-m201
  - Before: `answer: 'For most Canadian homes, the classic Victor Metal Pedal rat snap trap is the best combination of kill rate, reusability, and cost — a 2-pack covers a typical basement or garage and each trap can be reused for years. If you don\'t want to see or handle the rat, the Victor Electronic Rat Trap kills with a 6,000-volt shock inside an enclosed chamber and signals a catch with an indicator light. The Tomcat rat snap trap is the easiest to set by hand or foot and is the best pick if you find the Victor\'s spring bar intimidating. All three are widely available on Amazon.ca, and because they are traps rather than pesticides — rodent traps are not among the devices prescribed in Schedule 1 of the Pest Control Products Regulations — no PMRA registration applies to them.',`
  - After: `answer: 'For most Canadian homes, the classic Victor wooden rat snap trap is the best combination of kill rate, reusability, and cost — a 2-pack covers a typical basement or garage and each trap can be reused for years. If you don\'t want to see or handle the rat, the Victor Electronic Rat Trap kills with a 6,000-volt shock inside an enclosed chamber and signals a catch with an indicator light. The Tomcat rat snap trap is the easiest to set by hand or foot and is the best pick if you find the Victor\'s spring bar intimidating. All three are widely available on Amazon.ca, and because they are traps rather than pesticides — rodent traps are not among the devices prescribed in Schedule 1 of the Pest Control Products Regulations — no PMRA registration applies to them.',`
- **L118** FAQ 'Victor vs Tomcat'. R-m201
  - Before: `answer: 'Victor for kill force per dollar; Tomcat for ease and safety of setting. The wooden Victor metal-pedal trap generates the most spring force of the mainstream consumer options and costs little enough to deploy six at once, which is the tactic that actually clears a colony — but arming it takes hand strength and nerve. Tomcat\'s moulded-plastic rat trap sets with a foot press and grips with interlocking teeth, giving up a little power on the largest rats in exchange for never putting your fingers near the strike zone. If you want neither, the electronic option kills inside a closed chamber.',`
  - After: `answer: 'Victor for kill force per dollar; Tomcat for ease and safety of setting. The wooden Victor rat trap generates the most spring force of the mainstream consumer options and costs little enough to deploy six at once, which is the tactic that actually clears a colony — but arming it takes hand strength and nerve. Tomcat\'s moulded-plastic rat trap sets with a foot press and grips with interlocking teeth, giving up a little power on the largest rats in exchange for never putting your fingers near the strike zone. If you want neither, the electronic option kills inside a closed chamber.',`
- **L334** H3 for pick 1. R-m201
  - Before: `<h3>1. Victor Metal Pedal Rat Snap Trap — best overall</h3>`
  - After: `<h3>1. Victor Wooden Rat Snap Trap — best overall</h3>`
- **L335** Pick 1 body: the metal-pedal trigger sentence replaced by the discontinuation and the M205's trigger. R-m201
  - Before: `<p>The wooden Victor rat trap has been in production since the 1890s for a reason: nothing beats its kill-rate-per-dollar. The metal pedal trigger is sensitive enough for a cautious rat but stiff enough not to false-trigger, the spring bar generates genuine rat-killing force, and each trap survives years of catches. Because they cost so little, you can deploy the 4–6 traps a real infestation demands — the single biggest tactical advantage over pricier options. Downsides: setting the bar takes some hand strength and a little nerve, and disposal means seeing the rat.</p>`
  - After: `<p>The wooden Victor rat trap has been in production since the 1890s for a reason: nothing beats its kill-rate-per-dollar. Victor has discontinued its metal-pedal model (M201); its page for that trap now shows the Easy Set (M205), whose expanded trigger has a firm and a sensitive setting. The spring bar generates genuine rat-killing force, and each trap survives years of catches. Because they cost so little, you can deploy the 4–6 traps a real infestation demands — the single biggest tactical advantage over pricier options. Downsides: setting the bar takes some hand strength and a little nerve, and disposal means seeing the rat.</p>`
- **L351** Comparison table, name cell (no Amazon link in the table). R-m201
  - Before: `<tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Victor Metal Pedal</strong></td><td className="px-3 py-2">Wood snap trap</td><td className="px-3 py-2">Spring bar — instant</td><td className="px-3 py-2">Yes, for years</td><td className="px-3 py-2">Active infestations, multi-trap deployments</td></tr>`
  - After: `<tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Victor wooden rat trap</strong></td><td className="px-3 py-2">Wood snap trap</td><td className="px-3 py-2">Spring bar — instant</td><td className="px-3 py-2">Yes, for years</td><td className="px-3 py-2">Active infestations, multi-trap deployments</td></tr>`
- **L462** Category table, examples cell. R-m201
  - Before: `<tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Wooden snap trap</strong></td><td className="px-3 py-2">Victor metal pedal; Victor M326 professional; Victor BM205 Easy Set</td><td className="px-3 py-2">Kills</td><td className="px-3 py-2">No</td><td className="px-3 py-2">Multi-trap first strike &mdash; the default</td></tr>`
  - After: `<tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Wooden snap trap</strong></td><td className="px-3 py-2">Victor wooden rat trap (the metal-pedal M201 is discontinued); Victor M326 professional; Victor BM205 Easy Set</td><td className="px-3 py-2">Kills</td><td className="px-3 py-2">No</td><td className="px-3 py-2">Multi-trap first strike &mdash; the default</td></tr>`
- **L509** Brand summary paragraph. R-m201
  - Before: `<p><strong>Brand-level summary.</strong> Victor is the oldest and by far the broadest consumer rodent line &mdash; the wooden metal-pedal trap has been in production since the 1890s, and the same brand now spans professional wide-trigger snap traps, plastic-bodied models, enclosed no-touch designs and the electronic chamber. If you want one brand that has a version of nearly every category on this page, it is that one. Tomcat is narrower and plays to a single, real strength: traps that a nervous person can arm without putting fingers anywhere near the strike zone, plus a removable bait cup that keeps peanut butter off your hands. Neither brand has a trap that beats pre-baiting; the brand argument is genuinely secondary to the protocol.</p>`
  - After: `<p><strong>Brand-level summary.</strong> Victor is the oldest and by far the broadest consumer rodent line &mdash; the wooden snap trap has been in production since the 1890s (Victor has since discontinued its metal-pedal M201), and the same brand now spans professional wide-trigger snap traps, plastic-bodied models, enclosed no-touch designs and the electronic chamber. If you want one brand that has a version of nearly every category on this page, it is that one. Tomcat is narrower and plays to a single, real strength: traps that a nervous person can arm without putting fingers anywhere near the strike zone, plus a removable bait cup that keeps peanut butter off your hands. Neither brand has a trap that beats pre-baiting; the brand argument is genuinely secondary to the protocol.</p>`
- **L567** US model-number table row (no Amazon link). R-m201
  - Before: `<tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Victor Metal Pedal rat snap trap</strong></td><td className="px-3 py-2">Wooden rat trap; the professional expanded/wide-trigger version is the <strong>M326</strong>; the wide plastic-pedal easy-set consumer version is the <strong>BM205</strong></td><td className="px-3 py-2">Model numbers on the wooden line have shifted over the years and vary by pack size and retailer &mdash; buy by description (rat-sized, metal or wide pedal) if the number on the shelf doesn&rsquo;t match</td></tr>`
  - After: `<tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Victor wooden rat snap trap</strong></td><td className="px-3 py-2">Wooden rat trap (Victor has discontinued the metal-pedal M201); the professional expanded/wide-trigger version is the <strong>M326</strong>; the wide plastic-pedal easy-set consumer version is the <strong>BM205</strong></td><td className="px-3 py-2">Model numbers on the wooden line have shifted over the years and vary by pack size and retailer &mdash; buy by description (rat-sized, metal or wide pedal) if the number on the shelf doesn&rsquo;t match</td></tr>`

### best-mouse-trap-canada (6 lines)

- **L31** FAQ 1 answer: "kills in seconds and manages up to 100 kills". M-m250
  - Before: `answer: 'For most Canadian homes, the classic Victor M325 wood snap trap is still the best overall mouse trap: it kills quickly when placed correctly, is reusable dozens of times, and a 4-pack covers a typical kitchen or garage problem for the market price of a coffee run. If you want no-touch, no-see disposal, the Victor M250S electronic trap is the best upgrade — it kills in seconds and manages up to 100 kills per set of 4 AA batteries. Choose a catch-and-release trap like the Motel Mouse only if you are committed to checking it every few hours and releasing mice at least 2 km from your house.',`
  - After: `answer: 'For most Canadian homes, the classic Victor M325 wood snap trap is still the best overall mouse trap: it kills quickly when placed correctly, is reusable dozens of times, and a 4-pack covers a typical kitchen or garage problem for the market price of a coffee run. If you want no-touch, no-see disposal, the Victor M250S electronic trap is the best upgrade — it kills with a high-voltage shock inside a closed tunnel, runs on 4 AA batteries, and flashes a green light after a catch. Choose a catch-and-release trap like the Motel Mouse only if you are committed to checking it every few hours and releasing mice at least 2 km from your house.',`
- **L35** FAQ 'Are electronic mouse traps worth it': "under 5 seconds", "up to 100 kills". M-m250
  - Before: `answer: 'Yes, for specific buyers. Electronic traps like the Victor M250S deliver a high-voltage shock that kills in under 5 seconds, then a green indicator light tells you there is a mouse inside — you tip the body into the garbage without seeing or touching it. One set of 4 AA batteries handles up to 100 kills. The trade-offs: a much higher upfront cost than snap traps, they are for indoor dry locations only, and a single unit covers one runway while the same spend buys 15–20 snap traps you can deploy along every wall.',`
  - After: `answer: 'Yes, for specific buyers. Electronic traps like the Victor M250S (Victor now lists it as the M250B) kill with a high-voltage shock, then a green light flashes every 10 seconds for up to a week to tell you there is a mouse inside — you tip the body into the garbage without seeing or touching it. It runs on 4 AA batteries; Victor publishes no kill time and no kills-per-battery figure. The trade-offs: a much higher upfront cost than snap traps, they are for indoor dry locations only, and a single unit covers one runway while the same spend buys 15–20 snap traps you can deploy along every wall.',`
- **L135** Quick Answer bullet (no Amazon element on the line). M-m250
  - Before: `<li>The Victor M250S electronic trap kills in under 5 seconds and delivers up to 100 kills per set of 4 AA batteries.</li>`
  - After: `<li>The Victor M250S electronic trap kills with a high-voltage shock in a closed tunnel and runs on 4 AA batteries; Victor publishes no kill time or kills-per-battery figure.</li>`
- **L218** Picks table row (the table has no Amazon link). M-m250
  - Before: `{ type: 'Electronic trap', pick: 'Victor M250S', kill: 'High-voltage shock, dead in under 5 seconds', reuse: 'Up to 100 kills per 4×AA battery set', best: 'No-see, no-touch disposal; indoor dry areas' },`
  - After: `{ type: 'Electronic trap', pick: 'Victor M250S', kill: 'High-voltage shock in a closed tunnel', reuse: 'Reusable; 4×AA batteries, one mouse per setting', best: 'No-see, no-touch disposal; indoor dry areas' },`
- **L274** Body: "kills it in under 5 seconds". M-m250
  - Before: `<p>Yes — if your objection to snap traps is seeing or touching the result, the Victor M250S solves exactly that problem. The mouse enters a dark tunnel (mice love enclosed spaces), steps on metal plates, and a high-voltage shock kills it in under 5 seconds. A green blinking light tells you there is a catch; you hold the trap over a garbage bag and tip. No sight, no touch, no blood.</p>`
  - After: `<p>Yes — if your objection to snap traps is seeing or touching the result, the Victor M250S solves exactly that problem. The mouse enters a dark tunnel (mice love enclosed spaces), steps on metal plates, and a high-voltage shock kills it. A green blinking light tells you there is a catch; you hold the trap over a garbage bag and tip. No sight, no touch, no blood.</p>`
- **L275** Body: "up to 100 kills per set"; the unsourced "kill rate in independent tests" clause went with the figures. M-m250
  - Before: `<p>The numbers: up to 100 kills per set of 4 AA batteries, a tunnel design that pets and children cannot reach into, and a kill rate in independent tests that rivals well-placed snap traps. The limits: indoor dry locations only (no garages with condensation, no crawl spaces), one runway covered per unit, and an upfront cost per trap that is 15–20× a wooden snap trap. For a full teardown of long-term reliability, battery life in real Canadian basements, and the common false-trigger complaints, see our <Link href="/blog/victor-electronic-mouse-trap-review-canada">Victor electronic mouse trap review</Link>.</p>`
  - After: `<p>What Victor publishes: four AA batteries (not rechargeables), one mouse per setting, a green light that flashes every 10 seconds for up to a week after a catch, and bevelled columns that keep children and pets from reaching the plates; it gives no kill time and no kills-per-battery figure. The limits: indoor dry locations only (no garages with condensation, no crawl spaces), one runway covered per unit, and an upfront cost per trap that is 15–20× a wooden snap trap. For a full teardown of long-term reliability, battery life in real Canadian basements, and the common false-trigger complaints, see our <Link href="/blog/victor-electronic-mouse-trap-review-canada">Victor electronic mouse trap review</Link>.</p>`

### mosquito-bits-canada-vs-dunks (19 lines)

- **L41** FAQ 'which should I use': "Use BITS for fast emergency knockdown ... Many homeowners use both" replaced. Q-bits, HC-mosq
  - Before: `answer: 'Same active ingredient (BTI), different release speed. Use DUNKS for long-term water sources (rain barrels, ornamental ponds, decorative water features) — they slow-release for 30 days. Use BITS for fast emergency knockdown or for water sources you don\'t want to look at a tablet floating in (small bird baths, kiddie pools, neglected pet bowls, drainage trays). Many homeowners use both: dunks dropped in the rain barrel for set-and-forget, bits sprinkled when you find larvae somewhere unexpected. Bits release their BTI within about 30 minutes while dunks release theirs slowly; on Summit\'s labelling, bits give 7–14 days of control versus about 30 days for a dunk.',`
  - After: `answer: 'Same active ingredient (BTI), different release speed, but in Canada only one of them is registered. Use DUNKS (Reg. No. 28888) for long-term water sources (rain barrels, ornamental ponds, decorative water features); the Canadian label says to reapply at 30-day intervals if larvae are detected. Bits have no Canadian registration, so where you would reach for Bits, use a registered BTI granule, AquaBac 200G (Reg. No. 27374) or My-Crobe 200G (Reg. No. 34631), whose labels say "Allow 24 hours for maximum effect on larvae"; a bird bath or outdoor pet dish needs fresh water twice a week (Health Canada), not a product. Bits release their BTI within about 30 minutes while dunks release theirs slowly; on Summit\'s U.S. labelling, bits give 7–14 days of control versus about 30 days for a dunk.',`
- **L49** FAQ 'safe for pets': "Use Bits only on the water sites the label lists" replaced. Q-bits
  - Before: `answer: 'The honest answer is to follow the label rather than rely on a blanket promise. The active ingredient (BTI) is a naturally-occurring soil bacterium whose proteins act on the larvae of mosquitoes, black flies and a few related midges once the larvae eat it. On drinking water specifically, Health Canada’s PMRA states that no product containing Bti may be applied to treated, finished drinking water for human consumption — while separately stating it has no human health and safety concerns about applying registered Bt products to bodies of water that will be used for human consumption. Use Bits only on the water sites the label lists, and store the container out of reach of children and pets as you would any pesticide, especially since the corn-cob granules look a lot like cereal.',`
  - After: `answer: 'The honest answer is to follow the label rather than rely on a blanket promise. The active ingredient (BTI) is a naturally-occurring soil bacterium whose proteins act on the larvae of mosquitoes, black flies and a few related midges once the larvae eat it. On drinking water specifically, Health Canada’s PMRA states that no product containing Bti may be applied to treated, finished drinking water for human consumption — while separately stating it has no human health and safety concerns about applying registered Bt products to bodies of water that will be used for human consumption. In Canada, Bits have no registration, so use a registered BTI product, only on the water sites its label lists, and store the container out of reach of children and pets as you would any pesticide, especially granules, which can look a lot like cereal.',`
- **L57** FAQ 'rain barrel': "Save bits for ... the gutter ... a neglected pet water bowl" replaced. Q-bits, HC-mosq
  - Before: `answer: 'In the U.S. you can (Bits have no Canadian registration), but mosquito DUNKS are better for rain barrels because they last 30 days vs bits lasting 7–14 days. On the Canadian label, a quarter of a dunk treats a rain barrel (its 0.1 to 3.0 sq. metre row), reapplied at 30-day intervals if larvae are detected. With bits, you\'d need to re-apply every 1–2 weeks. Save bits for situations where you discover larvae unexpectedly — a forgotten plant saucer, the gutter that\'s clogged, a neglected pet water bowl — places where you want immediate larvae knockdown without committing to a 30-day floating tablet.',`
  - After: `answer: 'In the U.S. you can (Bits have no Canadian registration), but mosquito DUNKS are better for rain barrels because they last 30 days vs bits lasting 7–14 days. On the Canadian label, a quarter of a dunk treats a rain barrel (its 0.1 to 3.0 sq. metre row), reapplied at 30-day intervals if larvae are detected. With bits, you\'d need to re-apply every 1–2 weeks. In Canada, use the dunk: for larvae you discover unexpectedly, tip the water out if you can, or use a registered BTI granule (AquaBac 200G or My-Crobe 200G) where its label allows; the Canadian labels exclude water that drains off your property, such as rain gutters, and a pet bowl needs fresh water, not a larvicide.',`
- **L61** FAQ 'swimming pool': "sprinkle bits across the surface" replaced. Q-bits
  - Before: `answer: 'Only in a NEGLECTED pool with standing rainwater (no chlorine). Bits and dunks are not designed for active chlorinated swimming pools — the chlorine kills mosquito larvae anyway, and pool filtration removes the BTI-coated corn-cob granules. If your pool has been sitting unused with rainwater for weeks, sprinkle bits across the surface to prevent it from becoming a mosquito breeding factory until you can drain or refill it.',`
  - After: `answer: 'Only in a NEGLECTED pool with standing rainwater (no chlorine). Bits and dunks are not designed for active chlorinated swimming pools — the chlorine kills mosquito larvae anyway, and pool filtration removes the BTI-coated corn-cob granules. If your pool has been sitting unused with rainwater for weeks, drain or refill it; in Canada Bits are not registered, so any larvicide you add must be a registered product whose label covers that water (check the PCP number: some Canadian larvicide labels rule out pools).',`
- **L65** FAQ 'storage': container-size buying advice for Bits replaced. Q-bits
  - Before: `answer: 'Sealed Mosquito Bits last 2–3 years in a cool, dry storage location. Once opened, they last 1 full year if kept dry and sealed (re-seal the container after each use). Moisture activates the BTI prematurely, so don\'t leave the container open in a humid garden shed all summer. Buying the smaller 8-oz container if you only have one rain barrel makes sense; the larger 30-oz container is for properties with multiple water sources or for splitting with a neighbour.',`
  - After: `answer: 'Sealed Mosquito Bits last 2–3 years in a cool, dry storage location. Once opened, they last 1 full year if kept dry and sealed (re-seal the container after each use). Moisture activates the BTI prematurely, so don\'t leave the container open in a humid garden shed all summer. In Canada the size question does not arise, because Bits have no Canadian registration; the registered Mosquito Dunks label says to use them within one year from the date of manufacture.',`
- **L77** FAQ 'same as dunks': "ideal for bird baths, plant saucers, and unexpected larvae" replaced. Q-bits
  - Before: `answer: 'Mosquito Dunks and Mosquito Bits contain the same active ingredient — BTI — but come in different formats. Dunks are slow-release donut tablets that protect standing water for about 30 days, ideal for rain barrels and ponds. Bits are corn-cob granules that release BTI within about 30 minutes for fast knockdown but last only 7–14 days, ideal for bird baths, plant saucers, and unexpected larvae. They kill the same larvae; you choose based on how fast and how long you need coverage.',`
  - After: `answer: 'Mosquito Dunks and Mosquito Bits contain the same active ingredient — BTI — but come in different formats. Dunks are slow-release donut tablets that protect standing water for about 30 days, ideal for rain barrels and ponds. Bits are corn-cob granules that release BTI within about 30 minutes for fast knockdown but last only 7–14 days; they have no Canadian registration, so in Canada the granule options are AquaBac 200G and My-Crobe 200G. They kill the same larvae; you choose based on how fast and how long you need coverage.',`
- **L85** FAQ 'directly in soil': the opening "Yes." now says U.S. label only (the answer already ended with the Canadian caveat). Q-bits
  - Before: `answer: 'Yes. Fungus gnat larvae are a labelled target pest for Mosquito Bits, and there are two accepted ways to reach them. You can sprinkle the dry granules across the soil surface and water them in, which is simple but gives an uncontrolled dose and can grow surface mould in a pot that stays wet. Or you can use the soil drench on Summit\u2019s label \u2014 mix 4 tablespoons of Bits per 1 gallon of water, let it steep 30 minutes, skim off the floating granules (or steep them inside a nylon stocking), then water your plants with the treated water so the soil surface is wetted. Repeat weekly for three weeks either way, because BTI kills larvae but not eggs or flying adults, so you have to cover the full life cycle. That method is from the U.S. label: in Canada, Mosquito Bits are not registered, and the Canadian Mosquito Dunks label (Reg. No. 28888) covers mosquito larvae in water only.',`
  - After: `answer: 'On Summit’s U.S. label, yes; in Canada, no (see the end of this answer). Fungus gnat larvae are a labelled target pest for Mosquito Bits, and there are two accepted ways to reach them. You can sprinkle the dry granules across the soil surface and water them in, which is simple but gives an uncontrolled dose and can grow surface mould in a pot that stays wet. Or you can use the soil drench on Summit\u2019s label \u2014 mix 4 tablespoons of Bits per 1 gallon of water, let it steep 30 minutes, skim off the floating granules (or steep them inside a nylon stocking), then water your plants with the treated water so the soil surface is wetted. Repeat weekly for three weeks either way, because BTI kills larvae but not eggs or flying adults, so you have to cover the full life cycle. That method is from the U.S. label: in Canada, Mosquito Bits are not registered, and the Canadian Mosquito Dunks label (Reg. No. 28888) covers mosquito larvae in water only.',`
- **L89** FAQ 'fungus gnats': "Yes" and "Bits are a better choice than Dunks" framed as the U.S. label. Q-bits
  - Before: `answer: 'Yes \u2014 fungus gnat larvae (usually Bradysia species) are listed on the Mosquito Bits label alongside mosquito and black fly larvae, and the same BTI bacterium that kills a mosquito wriggler kills a gnat larva in potting mix. It works on larvae in the soil only. The adult gnats you see flying are unaffected and need sticky traps, and the underlying cause is almost always soil kept wet for too long. Bits are a better choice than Dunks for houseplants because they release BTI in about 30 minutes, while a dunk is built to dissolve slowly over roughly 30 days and needs about 24 hours of steeping to make a weaker, less predictable drench. In Canada, none of the registered BTI labels we checked (Dunks 28888, AquaBac 200G 27374, My-Crobe 200G 34631) lists fungus gnats, so the tools that need no pesticide label here are the watering fix and sticky traps.',`
  - After: `answer: 'On the U.S. label, yes \u2014 fungus gnat larvae (usually Bradysia species) are listed on the Mosquito Bits label alongside mosquito and black fly larvae, and the same BTI bacterium that kills a mosquito wriggler kills a gnat larva in potting mix. It works on larvae in the soil only. The adult gnats you see flying are unaffected and need sticky traps, and the underlying cause is almost always soil kept wet for too long. Under that U.S. label, Bits suit houseplants better than Dunks because they release BTI in about 30 minutes, while a dunk is built to dissolve slowly over roughly 30 days and needs about 24 hours of steeping to make a weaker, less predictable drench. In Canada, none of the registered BTI labels we checked (Dunks 28888, AquaBac 200G 27374, My-Crobe 200G 34631) lists fungus gnats, so the tools that need no pesticide label here are the watering fix and sticky traps.',`
- **L109** FAQ 'bucket of doom': "Either product works. Bits suit the job slightly better" replaced. Q-bits
  - Before: `answer: 'The bucket of doom is a DIY attract-and-kill trap that spread widely in 2026. You fill a five-gallon bucket with water, add grass clippings, straw, or leaves, and let it sit until it goes foul. Female mosquitoes prefer that organic stink to clean water, so they lay their eggs there instead of elsewhere in your yard, and BTI added to the bucket kills every larva that hatches. CBC News reported that mosquito dunks were selling out across Canada as bug season and the bucket of doom trend collided, with a Home Hardware manager on Bank Street in Ottawa saying his store and the company warehouse were both out by mid-June. Either product works. Bits suit the job slightly better because bucket water is deliberately deep and organic \u2014 the condition Summit\u2019s label flags for the higher 8 oz per 1,000 sq ft rate \u2014 and Bits are easy to top up on the 7 to 14 day schedule. A dunk needs less attention but is harder to dose upward. The one rule: an untreated bucket of doom is simply a very effective mosquito nursery, so it has to be re-dosed all season.',`
  - After: `answer: 'The bucket of doom is a DIY attract-and-kill trap that spread widely in 2026. You fill a five-gallon bucket with water, add grass clippings, straw, or leaves, and let it sit until it goes foul. Female mosquitoes prefer that organic stink to clean water, so they lay their eggs there instead of elsewhere in your yard, and BTI added to the bucket kills every larva that hatches. CBC News reported that mosquito dunks were selling out across Canada as bug season and the bucket of doom trend collided, with a Home Hardware manager on Bank Street in Ottawa saying his store and the company warehouse were both out by mid-June. In the U.S. either product is used, and Bits suit the job slightly better because bucket water is deliberately deep and organic \u2014 the condition Summit\u2019s U.S. label flags for the higher 8 oz per 1,000 sq ft rate. In Canada, Bits have no registration, so the BTI option is a registered product such as Mosquito Dunks (Reg. No. 28888), used only as its label directs. The one rule: an untreated bucket of doom is simply a very effective mosquito nursery, so it has to be re-dosed all season.',`
- **L236** Warning box: "Bits kill larvae", "combine bits/dunks" and the price "$15/season" removed. Q-bits, N-price
  - Before: `<strong className="text-amber-900">⚠️ Bits kill larvae in your treated water — not the adult mosquitoes flying onto your property.</strong> For yard-wide control in the GTA, combine bits/dunks (your standing water) with professional barrier spray on vegetation. Bits cost $15/season per water source. Barrier spray treats the vegetation across the whole yard, renewed on a schedule.`
  - After: `<strong className="text-amber-900">⚠️ BTI kills larvae in your treated water — not the adult mosquitoes flying onto your property.</strong> For yard-wide control in the GTA, combine registered BTI such as Mosquito Dunks (your standing water) with professional barrier spray on vegetation. Barrier spray treats the vegetation across the whole yard, renewed on a schedule.`
- **L371** Body: Summit's "registered label" became U.S. label, with a pointer to the Canadian doses. Q-bits
  - Before: `<p>The number on the front of the bag is a coverage area, not a dose, which is why most people badly over-apply. Summit&rsquo;s registered label (US EPA Reg. No. 6218-86) gives the real rates, and they are small:</p>`
  - After: `<p>The number on the front of the bag is a coverage area, not a dose, which is why most people badly over-apply. Summit&rsquo;s U.S. label (US EPA Reg. No. 6218-86) gives the real rates, and they are small. They are U.S. rates for a product with no Canadian registration; in Canada, use the doses on the registered labels in the table above:</p>`
- **L395** Body: "Indoors, Bits beat Dunks clearly" framed as the U.S. label, with the Canadian status. Q-bits
  - Before: `<p><strong>Indoors, Bits beat Dunks clearly.</strong> A dunk is engineered to dissolve slowly across about 30 days, so steeping one for a gnat drench takes roughly 24 hours and still gives you a weaker, less predictable brew &mdash; and a quarter-tablet sitting in a plant pot looks exactly as odd as it sounds. Bits release their BTI in about half an hour, which is the whole reason the houseplant world standardised on them.</p>`
  - After: `<p><strong>Under the U.S. label, Bits beat Dunks indoors.</strong> A dunk is engineered to dissolve slowly across about 30 days, so steeping one for a gnat drench takes roughly 24 hours and still gives you a weaker, less predictable brew &mdash; and a quarter-tablet sitting in a plant pot looks exactly as odd as it sounds. Bits release their BTI in about half an hour, which is the whole reason the houseplant world standardised on them. In Canada, Bits have no registration and the Mosquito Dunks label covers mosquito larvae in water only (see the note above).</p>`
- **L403** List: "a clogged gutter ... sprinkle bits for 30-minute knockdown" replaced. Q-bits
  - Before: `<li><strong>You found larvae unexpectedly</strong> — wriggling in a saucer, an old bucket, a clogged gutter — sprinkle bits for 30-minute knockdown</li>`
  - After: `<li><strong>You found larvae unexpectedly</strong> — wriggling in a saucer or an old bucket — tip the water out if you can; if not, the registered granules&rsquo; labels say &ldquo;Allow 24 hours for maximum effect on larvae&rdquo;</li>`
- **L404** List: "bird baths, kiddie pools" removed from the uses. Q-bits, HC-mosq
  - Before: `<li><strong>Small water sources</strong> — bird baths, kiddie pools, plant saucers — where a floating dunk tablet would be visually awkward</li>`
  - After: `<li><strong>Small water sources you cannot change weekly</strong>, such as plant saucers, where a floating dunk tablet would be visually awkward; a bird bath needs fresh water twice a week instead (Health Canada), and the granule labels rule out wading pools</li>`
- **L405** List: "only add Bits to animal water" became a larvicide. Q-bits
  - Before: `<li><strong>Pet water bowls left outside</strong> — tip out and refill daily; only add Bits to animal water if the label on your package lists it</li>`
  - After: `<li><strong>Pet water bowls left outside</strong> — tip out and refill daily; only add a larvicide to animal water if the label on your package lists it</li>`
- **L409** List: "Storm drain catch basins" (excluded by the Canadian labels) reversed. Q-bits
  - Before: `<li><strong>Storm drain catch basins</strong> on your property</li>`
  - After: `<li><strong>Storm drain catch basins:</strong> not these; the Canadian labels exclude catch basin sumps that flow into weeping tile beds or municipal storm drain systems</li>`
- **L428** Body: "a sprinkle of bits" became BTI granules. Q-bits
  - Before: `<p>BTI bits and dunks solve the LARVAL side of mosquito control — but they only work on water you actually treat. Adult mosquitoes flying in from neighbours&rsquo; yards, ravines, and creeks are unaffected. On the deep, tree-lined lots north of the city this is most of the problem — a sprinkle of bits in the plant saucers does nothing about what is already flying, which is the gap <Link href="/vaughan-mosquito-control">mosquito control in Vaughan</Link> is built to close. For a fuller plan in your GTA backyard:</p>`
  - After: `<p>BTI bits and dunks solve the LARVAL side of mosquito control — but they only work on water you actually treat. Adult mosquitoes flying in from neighbours&rsquo; yards, ravines, and creeks are unaffected. On the deep, tree-lined lots north of the city this is most of the problem — a sprinkle of BTI granules in the plant saucers does nothing about what is already flying, which is the gap <Link href="/vaughan-mosquito-control">mosquito control in Vaughan</Link> is built to close. For a fuller plan in your GTA backyard:</p>`
- **L430** List: "BTI bits/dunks ... ($30/season)" replaced; price removed. Q-bits, N-price
  - Before: `<li><strong>BTI bits/dunks</strong> in any standing water on your property ($30/season)</li>`
  - After: `<li><strong>Registered BTI</strong> (Mosquito Dunks, Reg. No. 28888, or a registered granule) in the standing water on your property that its label covers</li>`
- **L449** Body: "For this specific job the label points toward Bits" framed as the U.S. label, with the Canadian option. Q-bits
  - Before: `<p>For this specific job the label points toward Bits. Bucket water is deliberately deep, dark and loaded with organic matter, which is precisely the condition Summit flags as needing the higher 8 oz per 1,000 sq ft rate, and Bits let you top the dose back up on the 7&ndash;14 day schedule as the brew degrades. A dunk works too and demands less attention; it is simply harder to dose upward in dirty water. Whichever you choose, the bucket has to be re-dosed all season &mdash; an untreated bucket of doom is just an unusually effective mosquito nursery, and that is the failure mode to take seriously before building one.</p>`
  - After: `<p>Under Summit&rsquo;s U.S. label this job points toward Bits: bucket water is deliberately deep, dark and loaded with organic matter, which is precisely the condition Summit flags as needing the higher 8 oz per 1,000 sq ft rate, and Bits let you top the dose back up on the 7&ndash;14 day schedule as the brew degrades. In Canada, Bits have no registration, so the BTI option is a registered product such as Mosquito Dunks (Reg. No. 28888), used only as its label directs. Whichever you use, the bucket has to be re-dosed all season &mdash; an untreated bucket of doom is just an unusually effective mosquito nursery, and that is the failure mode to take seriously before building one.</p>`

### mosquito-dunks-canada-guide (8 lines)

- **L50** FAQ 'Dunks vs Bits': "use [Bits] for emergency knockdown ... Many homeowners use both" replaced. Q-bits, HC-mosq
  - Before: `answer: 'Same active ingredient (BTI), different format. Dunks are slow-release tablets ideal for long-term water sources (rain barrels, ponds — 30 days per dunk). Bits are quick-release granules that work within minutes — use for emergency knockdown of larvae outbreaks or for small water sources you don\'t want to look at a tablet floating in (small bird baths, kiddie pools). Many homeowners use both: dunks for the rain barrel, bits sprinkled when you find larvae anywhere unexpected.',`
  - After: `answer: 'Same active ingredient (BTI), different format. Dunks are slow-release tablets ideal for long-term water sources (rain barrels, ponds — 30 days per dunk). Bits are quick-release granules that work within minutes, but they have no Canadian registration. In Canada, use Dunks (Reg. No. 28888), or a registered BTI granule such as AquaBac 200G (Reg. No. 27374) or My-Crobe 200G (Reg. No. 34631) where you would have used Bits; a small bird bath needs fresh water twice a week (Health Canada), not a product, and the granule labels rule out wading pools.',`
- **L106** FAQ 'cats': "Mosquito Bits granules are tidier" replaced. Q-bits
  - Before: `answer: 'The same points apply as for dogs: BTI toxins act on specific insect larvae, and the product should be used at the label rate. Cats are also far less likely than dogs to chew a tablet. If you are treating a bowl or fountain a cat drinks from, Mosquito Bits granules are tidier than a floating tablet — though a bowl you refresh every two or three days never gets the week of still water larvae need.',`
  - After: `answer: 'The same points apply as for dogs: BTI toxins act on specific insect larvae, and the product should be used at the label rate. Cats are also far less likely than dogs to chew a tablet. For a bowl or fountain a cat drinks from, skip the larvicide (Mosquito Bits have no Canadian registration, and the registered BTI granules’ labels rule out drinking receptacles): a bowl you refresh every two or three days never gets the week of still water larvae need.',`
- **L110** FAQ 'birds': "Mosquito Bits granules are the neater choice" replaced. Q-bits, HC-mosq
  - Before: `answer: 'Birdbaths, koi ponds, and water gardens are listed use sites on the Summit label, and birds are not among the larvae BTI toxins act on. For a small bird bath the simplest control is dumping and refilling every three days, which beats larvae on timing alone — mosquito larvae need more than a week of undisturbed water to reach a flying adult. If you would rather treat than refill, Mosquito Bits granules are the neater choice in a shallow basin.',`
  - After: `answer: 'Birdbaths, koi ponds, and water gardens are listed use sites on the Summit label, and birds are not among the larvae BTI toxins act on. For a small bird bath the simplest control is dumping and refilling every three days, which beats larvae on timing alone — mosquito larvae need more than a week of undisturbed water to reach a flying adult. In Canada, refilling is the answer: Health Canada advises replacing bird-bath water at least twice a week, and Mosquito Bits have no Canadian registration.',`
- **L659** Body: "use both ... bits sprinkled into bird baths" replaced. Q-bits, HC-mosq
  - Before: `<p>Most Canadian homeowners with mosquito issues use both — dunks in rain barrels and ponds for set-and-forget protection, bits sprinkled into bird baths or unexpected standing water as needed.</p>`
  - After: `<p>In Canada the choice is narrower than that table suggests: Bits have no Canadian registration, so the plan is dunks (Reg. No. 28888) in rain barrels and ponds, a registered granule such as AquaBac 200G or My-Crobe 200G for unexpected standing water its label covers, and fresh water twice a week in bird baths.</p>`
- **L754** Pets table, cats row (no Amazon link). Q-bits
  - Before: `['Cats', 'Not a BTI target', 'Same points as dogs, and cats rarely chew tablets. For a fountain or bowl a cat drinks from, Bits granules are tidier than a floating tablet.'],`
  - After: `['Cats', 'Not a BTI target', 'Same points as dogs, and cats rarely chew tablets. For a fountain or bowl a cat drinks from, refresh the water instead: Bits have no Canadian registration, and the registered granule labels rule out drinking receptacles.'],`
- **L811** Dose table, saucer row (no Amazon link): "A pinch of Bits" removed. Q-bits
  - Before: `['Plant saucer, small bird bath', 'A pinch of Bits, or a small broken piece', 'Weekly, or just refresh the water', 'Refilling every 3 days beats the larvae without any product'],`
  - After: `['Plant saucer, small bird bath', 'A small broken piece of dunk (Bits have no Canadian registration)', 'Weekly, or just refresh the water', 'Refilling every 3 days beats the larvae without any product'],`
- **L877** Body: "Bits are easier here than dunks ... Bits win on convenience" framed as the U.S. label, with the Canadian status. Q-bits
  - Before: `<p><strong>Bits are easier here than dunks.</strong> Mosquito Bits are the same BTI in granule form, and you sprinkle them straight onto the top inch of potting soil and water them in &mdash; no steeping, no jug, no tablet sitting in a decorative pot. Dunks win on cost if you already own a box; Bits win on convenience if houseplants are the only reason you are buying BTI at all. Either way, the durable fix is watering habits: fungus gnats breed in permanently damp soil, so letting the top inch dry between waterings does more than any product.</p>`
  - After: `<p><strong>Under the U.S. label, Bits are easier here than dunks.</strong> Mosquito Bits are the same BTI in granule form, and you sprinkle them straight onto the top inch of potting soil and water them in &mdash; no steeping, no jug, no tablet sitting in a decorative pot. In Canada that shortcut is not available: Bits have no Canadian registration, and the Mosquito Dunks label covers mosquito larvae in water only (see the note above). Either way, the durable fix is watering habits: fungus gnats breed in permanently damp soil, so letting the top inch dry between waterings does more than any product.</p>`
- **L961** List: "BTI dunks/bits ... ($15/season ...)" replaced; price removed. Q-bits, N-price
  - Before: `<li><strong>BTI dunks/bits</strong> in any standing water on your property ($15/season — covers larvae from your own water)</li>`
  - After: `<li><strong>BTI dunks</strong> (Reg. No. 28888) in the standing water on your property that the label covers &mdash; it handles larvae from your own water</li>`

### mosquito-fogger-canada (4 lines)

- **L39** FAQ 'propane vs electric': the liquid caveat added; "you refill from a reusable concentrate ... more economical per application" and the prices removed. F-fog, N-price
  - Before: `answer: 'It depends on how you plan to use it. Propane (thermal) foggers like the Black Flag, Repel, and Burgess units are cordless and portable — you heat a ready-to-use oil-based fogging insecticide into a dense visible fog and walk the perimeter of the yard, no outlet or extension cord required. They are cheap ($60–$110) and great for occasional yard clearing and cottages. Electric cold/ULV foggers atomize a water-based concentrate into a fine mist using an air pump instead of heat — the fog is less visible, the droplet size is more controllable, you refill from a reusable concentrate, and they double for indoor, greenhouse, and disinfecting work. Cold foggers cost more ($80–$250) and need power, but are more economical per application and more precise. For most homeowners who just want to knock the yard down before an event, a propane fogger is the simpler pick.',`
  - After: `answer: 'As machines, a propane (thermal) fogger like the Black Flag, Repel, or Burgess units is the simpler pick: cordless and portable, it heats an oil-based fogging insecticide into a dense visible fog, no outlet or extension cord required. Electric cold/ULV foggers atomize a water-based concentrate into a fine mist using an air pump instead of heat — the fog is less visible and the droplet size is more controllable, but they cost more and need power. In Canada the liquid decides it, not the machine: Health Canada’s RVD2023-06 cancelled domestic handheld-fogger use of pyrethrins, the U.S. fogging liquids such as Black Flag are not registered here, and we found no domestic liquid whose label permits either type. Check the label for a Canadian PCP number and your equipment before you buy anything to put in one.',`
- **L47** FAQ 'how long does fogging last': "Plan to re-fog before each outdoor event" replaced by the registered patio fogger's 7-day label rule. F-fog
  - Before: `answer: 'A single fogging typically keeps a yard noticeably clearer for the rest of that evening and often into the next morning — roughly 6 to 24 hours in practice, depending on wind, humidity, and how much reinvasion pressure your yard gets from surrounding properties. Foggers give strong immediate knockdown but very little residual, because the insecticide is dispersed as a short-lived airborne cloud rather than deposited as a lasting film on foliage. This is the fundamental difference from a professional barrier spray, which coats the underside of leaves and shady resting spots with a residual formula, applied according to label directions and renewed on a schedule because it wears down with time and rain. Plan to re-fog before each outdoor event.',`
  - After: `answer: 'A single fogging typically keeps a yard noticeably clearer for the rest of that evening and often into the next morning — roughly 6 to 24 hours in practice, depending on wind, humidity, and how much reinvasion pressure your yard gets from surrounding properties. Foggers give strong immediate knockdown but very little residual, because the insecticide is dispersed as a short-lived airborne cloud rather than deposited as a lasting film on foliage. This is the fundamental difference from a professional barrier spray, which coats the underside of leaves and shady resting spots with a residual formula, applied according to label directions and renewed on a schedule because it wears down with time and rain. In Canada, the fog a homeowner can legally use is a registered aerosol patio fogger such as Muskol Patio & Deck Fogger (Reg. No. 22808.03), whose label says treatment must only be repeated after 7 days if the pest problem persists or reoccurs.',`
- **L320** Lead-in above the Amazon buttons (no Amazon element on the line): "Compare current Canadian prices on ... fogging liquid" replaced. F-fog
  - Before: `<p className="not-prose text-sm text-gray-600 mb-1">Compare current Canadian prices on propane foggers, electric ULV cold foggers, and fogging liquid:</p>`
  - After: `<p className="not-prose text-sm text-gray-600 mb-1">Compare propane and electric ULV cold foggers on Amazon.ca; the Black Flag fogging liquid listed beside them has no Canadian registration:</p>`
- **L450** Body: "A fogger at least applies a registered insecticide" replaced. F-fog
  - Before: `<p>The device most people compare a fogger against is a plug-in UV trap, and that comparison is not close. A fogger at least applies a registered insecticide to the air and foliage where mosquitoes rest; a UV-plus-fan trap emits no CO&#8322; and, in independent trap research, catches under 5% mosquitoes. Before you buy one instead of a fogger, read <Link href="/blog/dynatrap-canada-review">our DynaTrap review &mdash; do they actually work on mosquitoes?</Link></p>`
  - After: `<p>The device most people compare a fogger against is a plug-in UV trap, and that comparison is not close. A fog at least kills the adult mosquitoes it reaches (for a Canadian homeowner, from a registered aerosol patio fogger can, since we found no domestic liquid whose label permits a handheld fogger); a UV-plus-fan trap emits no CO&#8322; and, in independent trap research, catches under 5% mosquitoes. Before you buy one instead of a fogger, read <Link href="/blog/dynatrap-canada-review">our DynaTrap review &mdash; do they actually work on mosquitoes?</Link></p>`

### best-wasp-nest-spray-canada (9 lines)

- **L40** FAQ 'foam or jet': "foam the pick for eave nests, deck-rail nests and shed corners" and "If you only buy one can, buy foam" contradicted the corrected box (the Raid jet is "the one can to own"); ground entrances added to the foam-label exclusion. W-raid, W-ground
  - Before: `answer: 'Foam is better for most nests; jet is better for pure reach. A foaming spray expands over the nest and its entrance hole, physically trapping wasps inside while the insecticide works, and it clings to the paper envelope so returning foragers walk through treated foam for hours. That makes foam the pick for eave nests, deck-rail nests and shed corners; not for wall-void entrances, which many Canadian foam labels exclude. A jet formula throws a narrower, straighter stream farther, which helps on second-storey soffits — but it runs off vertical surfaces faster and leaves less residual at the entrance. If you only buy one can, buy foam.',`
  - After: `answer: 'Each has a job. A foaming spray expands over the nest and its entrance hole, physically trapping wasps inside while the insecticide works, and it clings to the paper envelope so returning foragers walk through treated foam for hours; that suits a big exposed paper nest, but not wall-void or ground entrances, which many Canadian foam labels exclude. A jet formula throws a narrower, straighter stream farther — S.C. Johnson rates Raid Wasp & Hornet Bug Killer 7 (PCP 29776) at up to 5.7 m, for nests "in trees or attached to buildings" — but it runs off vertical surfaces faster. If you only buy one can, our pick is that Raid jet; add a foam such as Wilson WaspOut for a big exposed paper nest.',`
- **L181** Quick Answer bullet: "Foam beats jet for most nests" replaced. W-raid
  - Before: `<li>Foam beats jet for most nests: it expands over the entrance and kills returning foragers for hours; jets win only on second-storey reach.</li>`
  - After: `<li>Foam or jet: a foam blankets a big exposed paper nest and its entrance; a jet reaches farther (S.C. Johnson rates our pick, Raid Wasp &amp; Hornet Bug Killer 7, at up to 5.7 m).</li>`
- **L306** Key-facts row "Best format for most nests: Foaming aerosol" became "Our pick". W-raid
  - Before: `['Best format for most nests', 'Foaming aerosol — blankets the entrance, hours of residual'],`
  - After: `['Our pick', 'A jet: Raid Wasp & Hornet Bug Killer 7 (PCP 29776), rated up to 5.7 m; add a foam such as Wilson WaspOut for a big exposed paper nest'],`
- **L429** H2 "Why Foam Wins for Most Canadian Wasp Nests" renamed. W-raid
  - Before: `<h2>Why Foam Wins for Most Canadian Wasp Nests</h2>`
  - After: `<h2>Foam vs Jet for Canadian Wasp Nests</h2>`
- **L445** Step: "plug it with foam" replaced with Raid 7's own directions. W-raid
  - Before: `<li><strong>Soak the entrance first, then the envelope.</strong> The entrance hole is where defenders emerge; plug it with foam in the first second of spraying, then coat the rest of the nest until it is visibly saturated.</li>`
  - After: `<li><strong>Soak the entrance first, then the envelope.</strong> The entrance hole is where defenders emerge; hit it in the first second of spraying, then coat the rest of the nest until it is visibly saturated (S.C. Johnson&rsquo;s Raid 7 directions: spray the nest opening first, then saturate the nest).</li>`
- **L468** Body: "a foaming aerosol ... is the right answer" replaced with the pick. W-raid
  - Before: `<p><strong>It depends on what you are actually killing.</strong> For a nest, a foaming aerosol that plugs the entrance and leaves residual behind is the right answer. For loose wasps working a patio, deck or pool, a fast-knockdown aerosol kills the ones it hits &mdash; but they keep arriving until you find and treat the nest they came from.</p>`
  - After: `<p><strong>It depends on what you are actually killing.</strong> For a nest, a domestic wasp-and-hornet can applied at dusk, as its label directs, is the right answer: our pick is the Raid Wasp &amp; Hornet Bug Killer 7 jet, with a foam such as Wilson WaspOut for a big exposed paper nest. For loose wasps working a patio, deck or pool, a fast-knockdown aerosol kills the ones it hits &mdash; but they keep arriving until you find and treat the nest they came from.</p>`
- **L595** Body: "the 'plug the entrance with foam' technique that defines this page" updated to match L445. W-raid
  - Before: `<p><strong>Polistes paper wasps</strong> build an <em>open umbrella comb</em> &mdash; bare hexagonal cells on a short stalk, no paper envelope, no entrance hole. That last point matters enormously: the &ldquo;plug the entrance with foam&rdquo; technique that defines this page has nothing to plug on a Polistes comb. Instead you saturate the comb face and the adults sitting on it directly, from the underside upward, at dusk. The good news is that these colonies are small &mdash; often under fifty insects &mdash; and comparatively slow to defend, so a single thorough treatment ends it and format matters far less than on an enclosed nest.</p>`
  - After: `<p><strong>Polistes paper wasps</strong> build an <em>open umbrella comb</em> &mdash; bare hexagonal cells on a short stalk, no paper envelope, no entrance hole. That last point matters enormously: the &ldquo;hit the entrance first&rdquo; technique this page describes has nothing to aim at on a Polistes comb. Instead you saturate the comb face and the adults sitting on it directly, from the underside upward, at dusk. The good news is that these colonies are small &mdash; often under fifty insects &mdash; and comparatively slow to defend, so a single thorough treatment ends it and format matters far less than on an enclosed nest.</p>`
- **L625** Identification table, yellowjacket row (ground burrows, wall voids): "Foam the entrance at dusk" replaced by the label condition. W-ground
  - Before: `<td className="px-4 py-3 text-gray-700">Foam the entrance at dusk; dust for deep voids; never seal early</td>`
  - After: `<td className="px-4 py-3 text-gray-700">Only a can whose label covers the nest (many Canadian labels exclude nests underground or in voids); a licensed operator for voids; never seal early</td>`
- **L755** Body: "Exposed and reachable, use foam" became foam or jet. W-raid
  - Before: `<p>The pattern worth internalising: <strong>the format is chosen by where the nest is, not by how big the wasps are.</strong> Exposed and reachable, use foam. Exposed and high, use a jet or freeze. Inside a wall or underground, use dust. Trying to prevent next year, use a concentrate. A jet aimed into a void wets the first few centimetres and accomplishes very little, which is the most common way a competent homeowner still fails.</p>`
  - After: `<p>The pattern worth internalising: <strong>the format is chosen by where the nest is, not by how big the wasps are.</strong> Exposed and reachable, use a foam or a jet. Exposed and high, use a jet or freeze. Inside a wall or underground, use dust. Trying to prevent next year, use a concentrate. A jet aimed into a void wets the first few centimetres and accomplishes very little, which is the most common way a competent homeowner still fails.</p>`

### how-to-get-rid-of-ground-wasps-canada (7 lines)

- **L41** FAQ 'boiling water': "a registered jet foam applied from 2–3 metres" and "a registered foam does the same job" replaced. W-ground
  - Before: `answer: 'Sometimes partially, and it is the most dangerous popular DIY method. A mature yellow jacket nest is a multi-storey paper structure that can sit 30 cm or more below the entrance hole with side galleries — a kettle of boiling water rarely reaches every chamber, so you scald the outer combs, enrage the survivors, and stand directly over the entrance holding an empty kettle when they boil out. It also cooks a patch of your lawn. Compared with a registered jet foam applied from 2–3 metres away at dusk, boiling water offers a worse kill rate at far higher personal risk. It is not banned, and it is not universally condemned either — the Province of British Columbia’s own "Managing Yellow Jacket Pests" page lists pouring several gallons of boiling water into an underground nest as a do-it-yourself option, with a warning to wear protective clothing and not scald yourself. The objection here is practical, not legal: a registered foam does the same job from stand-off distance.',`
  - After: `answer: 'Sometimes partially, and it is the most dangerous popular DIY method. A mature yellow jacket nest is a multi-storey paper structure that can sit 30 cm or more below the entrance hole with side galleries — a kettle of boiling water rarely reaches every chamber, so you scald the outer combs, enrage the survivors, and stand directly over the entrance holding an empty kettle when they boil out. It also cooks a patch of your lawn. Compared with a registered product whose label covers a ground nest, applied at dusk from the distance on its label, boiling water puts you at far higher personal risk (many Canadian foam labels, Wilson WASP OUT Jet Foam’s among them, exclude nests underground). It is not banned, and it is not universally condemned either — the Province of British Columbia’s own "Managing Yellow Jacket Pests" page lists pouring several gallons of boiling water into an underground nest as a do-it-yourself option, with a warning to wear protective clothing and not scald yourself. The objection here is practical, not legal: a can whose label covers the nest works from stand-off distance, and where no label does, the City of Calgary’s clear-bowl method needs no pesticide.',`
- **L53** FAQ 'gasoline': "A registered jet foam can costs less than the patch of sod" replaced. W-ground
  - Before: `answer: 'No — do not do it. Pouring gasoline or other fuel into soil is a contaminant discharge prohibited by provincial environmental law: in Ontario, section 14(1) of the Environmental Protection Act bars discharging a contaminant into the natural environment where it causes or may cause an adverse effect, and every province has an equivalent. It contaminates soil and groundwater, kills the surrounding lawn permanently, and creates a genuine fire and vapour hazard next to your house. It is also not even reliable at killing the colony. Federal law is the second problem: section 6(1) of the Pest Control Products Act prohibits using a pest control product that is not registered, and section 6(5) prohibits using a registered one in a way inconsistent with its label. In practice that means homeowner wasp control in Canada runs on PMRA-registered domestic-class products applied per label — and provinces can layer further restrictions on top. A registered jet foam can costs less than the patch of sod gasoline destroys.',`
  - After: `answer: 'No — do not do it. Pouring gasoline or other fuel into soil is a contaminant discharge prohibited by provincial environmental law: in Ontario, section 14(1) of the Environmental Protection Act bars discharging a contaminant into the natural environment where it causes or may cause an adverse effect, and every province has an equivalent. It contaminates soil and groundwater, kills the surrounding lawn permanently, and creates a genuine fire and vapour hazard next to your house. It is also not even reliable at killing the colony. Federal law is the second problem: section 6(1) of the Pest Control Products Act prohibits using a pest control product that is not registered, and section 6(5) prohibits using a registered one in a way inconsistent with its label. In practice that means homeowner wasp control in Canada runs on PMRA-registered domestic-class products applied per label — and provinces can layer further restrictions on top. Use a product whose label covers a ground nest, the City of Calgary’s clear-bowl method, or a licensed operator instead.',`
- **L306** Methods table, Wilson row, Kills the colony? (the row's BuyLink is on another line, untouched): "Yes — nest uninhabitable in ~48 h" replaced. W-ground
  - Before: `<td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Yes</strong> &mdash; nest uninhabitable in ~48 h</td>`
  - After: `<td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Not for this nest</strong> &mdash; Wilson&rsquo;s ~48 h claim is for the exposed nests its label covers</td>`
- **L313** Methods table, other cans row: "Usually" replaced by the label condition. W-ground
  - Before: `<td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Usually</strong> &mdash; straight jets penetrate a burrow less than foam</td>`
  - After: `<td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Only if the label covers a ground nest</strong> &mdash; many do not</td>`
- **L360** Body: "Every advantage of the dusk-foam protocol" replaced. W-ground
  - Before: `<p>Boiling water is the internet&rsquo;s favourite &ldquo;chemical-free&rdquo; ground-nest fix, and it deserves a fair, specific debunking. The problem is not that hot water fails to kill wasps &mdash; it kills every wasp it touches. The problem is architecture: a mature nest is a stack of paper combs suspended in an excavated cavity that can sit well below and to the side of the entrance, and a kettle &mdash; or three &mdash; of water poured down a narrow tunnel cools, disperses into soil, and rarely floods every gallery. You get a scalded outer nest, hundreds of enraged survivors, a cooked patch of lawn, and the worst part: <strong>the method requires you to stand directly over the entrance at pouring range</strong>, exactly where the defensive response erupts. Every advantage of the dusk-foam protocol &mdash; stand-off distance, residual kill, full-colony coverage &mdash; is an advantage over the kettle.</p>`
  - After: `<p>Boiling water is the internet&rsquo;s favourite &ldquo;chemical-free&rdquo; ground-nest fix, and it deserves a fair, specific debunking. The problem is not that hot water fails to kill wasps &mdash; it kills every wasp it touches. The problem is architecture: a mature nest is a stack of paper combs suspended in an excavated cavity that can sit well below and to the side of the entrance, and a kettle &mdash; or three &mdash; of water poured down a narrow tunnel cools, disperses into soil, and rarely floods every gallery. You get a scalded outer nest, hundreds of enraged survivors, a cooked patch of lawn, and the worst part: <strong>the method requires you to stand directly over the entrance at pouring range</strong>, exactly where the defensive response erupts. A can whose label covers the nest, used at dusk, keeps you at stand-off distance, which is its advantage over the kettle &mdash; but many Canadian foam labels, Wilson&rsquo;s included, exclude nests underground, and then the City of Calgary&rsquo;s clear-bowl method or a licensed operator is the answer.</p>`
- **L362** Body: "A legal, registered foam can costs less than replacing the sod" replaced. W-ground
  - Before: `<p>Gasoline gets a shorter answer: never. Pouring fuel into soil is a contaminant discharge prohibited by provincial environmental law &mdash; in Ontario, section 14(1) of the <em>Environmental Protection Act</em> forbids discharging a contaminant into the natural environment where it causes or may cause an adverse effect, and every province has its equivalent. It permanently poisons the ground and kills the lawn in a wide ring, it creates a real fire and vapour hazard, and section 6(1) of the federal <em>Pest Control Products Act</em> separately prohibits using any unregistered product to control a pest. A legal, registered foam can costs less than replacing the sod gasoline destroys.</p>`
  - After: `<p>Gasoline gets a shorter answer: never. Pouring fuel into soil is a contaminant discharge prohibited by provincial environmental law &mdash; in Ontario, section 14(1) of the <em>Environmental Protection Act</em> forbids discharging a contaminant into the natural environment where it causes or may cause an adverse effect, and every province has its equivalent. It permanently poisons the ground and kills the lawn in a wide ring, it creates a real fire and vapour hazard, and section 6(1) of the federal <em>Pest Control Products Act</em> separately prohibits using any unregistered product to control a pest. A registered product whose label covers the nest, the clear-bowl method or a licensed operator is the answer instead.</p>`
- **L366** Body: "the nests foam cannot solve" replaced. W-ground
  - Before: `<p>The practical test takes five seconds: flip the can and look for a <strong>PCP registration number</strong> (&ldquo;Reg. No. XXXXX P.C.P. Act&rdquo;) &mdash; the same check Health Canada&rsquo;s own wasp page tells consumers to make. Wilson (PCP 31899), Canadian-label Raid (PCP 30746 and 29776) and Doktor Doom all carry one; grey-market imports do not. This is not bureaucratic trivia &mdash; the dust technique those US sites describe genuinely <em>is</em> the better method for complicated nests. It is simply a different dust here: the commercial-class product a Canadian professional actually reaches for is <strong>Drione Insecticide Dust</strong> (PCP 15255, pyrethrins with piperonyl butoxide and silica aerogel), which carries wasp nests on its registered label. That is why &ldquo;hire a pro&rdquo; is the honest answer for the nests foam cannot solve. For the broader landscape of what is and is not on Canadian shelves, our <Link href="/blog/how-to-get-rid-of-wasps-canada">complete Canadian wasp control guide</Link> covers every product class, and every dust Canadians ask about, with its class and registered use sites, is laid out in our <Link href="/blog/wasp-dust-canada">wasp dust and powder guide</Link>.</p>`
  - After: `<p>The practical test takes five seconds: flip the can and look for a <strong>PCP registration number</strong> (&ldquo;Reg. No. XXXXX P.C.P. Act&rdquo;) &mdash; the same check Health Canada&rsquo;s own wasp page tells consumers to make. Wilson (PCP 31899), Canadian-label Raid (PCP 30746 and 29776) and Doktor Doom all carry one; grey-market imports do not. This is not bureaucratic trivia &mdash; the dust technique those US sites describe genuinely <em>is</em> the better method for complicated nests. It is simply a different dust here: the commercial-class product a Canadian professional actually reaches for is <strong>Drione Insecticide Dust</strong> (PCP 15255, pyrethrins with piperonyl butoxide and silica aerogel), which carries wasp nests on its registered label. That is why &ldquo;hire a pro&rdquo; is the honest answer for the nests no homeowner product is labelled for. For the broader landscape of what is and is not on Canadian shelves, our <Link href="/blog/how-to-get-rid-of-wasps-canada">complete Canadian wasp control guide</Link> covers every product class, and every dust Canadians ask about, with its class and registered use sites, is laid out in our <Link href="/blog/wasp-dust-canada">wasp dust and powder guide</Link>.</p>`

### wasp-dust-canada (1 line)

- **L48** FAQ 'diatomaceous earth': "a domestic-class jet foam at the entrance" for an active, often ground, nest replaced. W-ground
  - Before: `answer: 'Not the way people hope. Diatomaceous earth is a domestic-class desiccant dust that is genuinely useful against crawling insects in dry voids, and it is the dust class Canadians can buy most freely. But it is slow — killing over days by abrading the insect cuticle rather than in hours by neurotoxic action — and against a defended colony of thousands of stinging insects, slow is not a rounding error, it is the difference between a treatment and a provocation. It also clumps when damp, which soil entrances usually are. Follow the label on whatever DE product you buy: several Canadian DE dusts list wasps among their pests, but Health Canada’s database gives them general indoor and outdoor use sites, not wasp nests, and label directions govern legal use. For an active nest, a domestic-class jet foam at the entrance or a professional dusting are the two honest options.',`
  - After: `answer: 'Not the way people hope. Diatomaceous earth is a domestic-class desiccant dust that is genuinely useful against crawling insects in dry voids, and it is the dust class Canadians can buy most freely. But it is slow — killing over days by abrading the insect cuticle rather than in hours by neurotoxic action — and against a defended colony of thousands of stinging insects, slow is not a rounding error, it is the difference between a treatment and a provocation. It also clumps when damp, which soil entrances usually are. Follow the label on whatever DE product you buy: several Canadian DE dusts list wasps among their pests, but Health Canada’s database gives them general indoor and outdoor use sites, not wasp nests, and label directions govern legal use. For an active nest, the two honest options are a domestic wasp-and-hornet can whose label covers that nest (many, including Wilson WASP OUT Jet Foam, exclude nests underground or in voids) or a professional dusting.',`

### motion-activated-sprinkler-canada (5 lines)

- **L30** FAQ 1 answer: "The step-up Yard Enforcer Pro" replaced. Y-orbit
  - Before: `answer: 'The Orbit Yard Enforcer is the best motion-activated sprinkler for Canadian yards in 2026. Its infrared sensor detects animal movement up to roughly 12 metres away across a 120-degree arc, fires a startling 5-second burst of water, and — critically — offers day-only, night-only, and 24-hour sensing modes, so you can target nocturnal raccoons without soaking daytime songbirds or your kids. It runs on 4 AA alkaline batteries, and each deterrent event uses only about 2 cups of water. The step-up Yard Enforcer Pro adds a wider detection footprint for larger lots, and budget clones cover small garden beds for less, but the standard Yard Enforcer hits the sweet spot of reliability, sensing intelligence, and parts availability in Canada.',`
  - After: `answer: 'The Orbit Yard Enforcer is the best motion-activated sprinkler for Canadian yards in 2026. Its infrared sensor detects animal movement up to roughly 12 metres away across a 120-degree arc, fires a startling 5-second burst of water, and — critically — offers day-only, night-only, and 24-hour sensing modes, so you can target nocturnal raccoons without soaking daytime songbirds or your kids. It runs on 4 AA alkaline batteries, and each deterrent event uses only about 2 cups of water. For a larger lot, a second standard Yard Enforcer covers a second approach route (Orbit says the flow-through outlet "allows you to add additional sprinklers triggered by the sensor"), and budget clones cover small garden beds for less, but the standard Yard Enforcer hits the sweet spot of reliability, sensing intelligence, and parts availability in Canada.',`
- **L66** FAQ 'more than one sprinkler': "the Yard Enforcer Pro's bigger detection footprint" replaced. Y-orbit
  - Before: `answer: 'Yes. The Orbit Yard Enforcer has a pass-through hose connection on the back, so you can daisy-chain a second unit (or a regular sprinkler) downstream off the same tap. Two units placed to cover different approach routes — say, the back fence line and the vegetable garden — dramatically cut down the unprotected gaps a clever raccoon or cat will find. If you daisy-chain, use good-quality washers at every connection and check for drips, since the whole chain sits under pressure around the clock. For very large lots, the Yard Enforcer Pro’s bigger detection footprint may cover in one unit what two standard units would.',`
  - After: `answer: 'Yes. The Orbit Yard Enforcer has a pass-through hose connection on the back, so you can daisy-chain a second unit (or a regular sprinkler) downstream off the same tap. Two units placed to cover different approach routes — say, the back fence line and the vegetable garden — dramatically cut down the unprotected gaps a clever raccoon or cat will find. If you daisy-chain, use good-quality washers at every connection and check for drips, since the whole chain sits under pressure around the clock. For very large lots, add a standard unit per approach route: Orbit rates detection at up to 40 ft per unit, and its Canadian site lists no Yard Enforcer Pro.',`
- **L74** FAQ 'vs repellents': "re-arms itself indefinitely on one battery" replaced. Y-orbit
  - Before: `answer: 'For raccoons, cats, and squirrels, the sprinkler wins on almost every axis that matters in Canada. Scent repellents (capsaicin, putrescent egg, predator urine) fade with rain and UV and need reapplication every one to two weeks all season; a sprinkler re-arms itself indefinitely on one battery. Repellents are also where the regulatory mess lives: a legal repellent in Canada must carry a PMRA registration number on the label, and many popular US-market granules and coyote-urine products sold through cross-border sellers carry none — while household folk remedies like scattering mothballs outdoors are actually an illegal off-label use of a registered pesticide. A device that fires water has no label, no residue, and no legal grey zone. Where repellents earn a place is indoors and in structures — areas a sprinkler obviously cannot go.',`
  - After: `answer: 'For raccoons, cats, and squirrels, the sprinkler wins on almost every axis that matters in Canada. Scent repellents (capsaicin, putrescent egg, predator urine) fade with rain and UV and need reapplication every one to two weeks all season; a sprinkler re-arms itself after every burst, on one set of 4 AA batteries (Orbit publishes no battery-life figure). Repellents are also where the regulatory mess lives: a legal repellent in Canada must carry a PMRA registration number on the label, and many popular US-market granules and coyote-urine products sold through cross-border sellers carry none — while household folk remedies like scattering mothballs outdoors are actually an illegal off-label use of a registered pesticide. A device that fires water has no label, no residue, and no legal grey zone. Where repellents earn a place is indoors and in structures — areas a sprinkler obviously cannot go.',`
- **L199** Key facts: "season-long battery" replaced. Y-orbit
  - Before: `['Best overall model', 'Orbit Yard Enforcer (day/night sensing, season-long battery)'],`
  - After: `['Best overall model', 'Orbit Yard Enforcer (day/night sensing, 4 AA batteries)'],`
- **L228** Body: "a battery budget that lasts an entire season" replaced. Y-orbit
  - Before: `<p>The Orbit Yard Enforcer is the best motion-activated sprinkler for Canadian yards, and it is not a close race. Plenty of products in this category can detect motion and fire water; the Yard Enforcer is the one that got the <em>sensing intelligence</em> right — a proper day/night/24-hour mode selector, an anti-false-trigger algorithm that learns to ignore wind-blown branches, and a battery budget that lasts an entire season. Those three things are the difference between a deterrent your household tolerates for years and a gadget that soaks the letter carrier twice and gets banished to the garage.</p>`
  - After: `<p>The Orbit Yard Enforcer is the best motion-activated sprinkler for Canadian yards, and it is not a close race. Plenty of products in this category can detect motion and fire water; the Yard Enforcer is the one that got the <em>sensing intelligence</em> right — a proper day/night/24-hour mode selector, an anti-false-trigger algorithm that learns to ignore wind-blown branches, and modest power needs: 4 AA batteries, though Orbit publishes no battery-life figure. Those three things are the difference between a deterrent your household tolerates for years and a gadget that soaks the letter carrier twice and gets banished to the garage.</p>`

### best-indoor-fly-mosquito-trap-canada (3 lines)

- **L27** FAQ 1 answer: "For larger rooms ... covers up to ~600 sq ft". D-dyna
  - Before: `answer: 'For most Canadian homes, a plug-in UV + fan + glue-board trap (Katchy-style) is the best all-round indoor pick — it catches fruit flies, fungus gnats, houseflies, and the occasional indoor mosquito quietly overnight, with cheap glue-board refills. For larger rooms, a DynaTrap fan-suction UV unit covers up to ~600 sq ft with no refills. For a set-and-forget plug-in, a UV + sticky-cartridge trap (Zevo/Black+Decker style) is the simplest. No indoor trap is strong against mosquitoes specifically, because mosquitoes hunt by CO2 and body heat, not light — so pair any trap with source control.',`
  - After: `answer: 'For most Canadian homes, a plug-in UV + fan + glue-board trap (Katchy-style) is the best all-round indoor pick — it catches fruit flies, fungus gnats, houseflies, and the occasional indoor mosquito quietly overnight, with cheap glue-board refills. DynaTrap’s fan-suction UV unit (the 1/4 Acre DT160) is rated for up to 1/4 acre and sold with DynaTrap’s outdoor traps, so it is a yard option, not a room trap. For a set-and-forget plug-in, a UV + sticky-cartridge trap (Zevo/Black+Decker style) is the simplest. No indoor trap is strong against mosquitoes specifically, because mosquitoes hunt by CO2 and body heat, not light — so pair any trap with source control.',`
- **L116** Quick Answer bullet: "covers up to roughly 600 sq ft". D-dyna
  - Before: `<li>A DynaTrap fan-suction UV unit covers up to roughly 600 sq ft with no refills to buy.</li>`
  - After: `<li>The DynaTrap 1/4 Acre unit (DT160) is rated for up to 1/4 acre and sold as an outdoor trap, with no refills to buy.</li>`
- **L311** Placement tip: "handles up to ~600 sq ft". D-dyna
  - Before: `<li><strong>Match the room size.</strong> A small plug-in covers a nightstand zone; a fan-suction DynaTrap-style unit handles up to ~600 sq ft. One trap does not cover a whole open-plan floor.</li>`
  - After: `<li><strong>Match the room size.</strong> A small plug-in covers a nightstand zone, and one trap does not cover a whole open-plan floor; the DynaTrap 1/4 Acre unit is sold as an outdoor trap, not a room trap.</li>`

### best-fruit-fly-trap-canada (3 lines)

- **L57** FAQ 'replace TERRO lure': "TERRO sells the lure separately as a refill bottle" replaced. T-terro
  - Before: `answer: 'Each TERRO trap lasts about 30 days after opening, or sooner if the liquid fills with flies or evaporates. The apple housings are technically reusable, and TERRO sells the lure separately as a refill bottle, so the economical pattern for households with recurring summer flies is: buy the two-pack once, then buy refill lure each season instead of new apples. Mark the date you open each trap on the base with a marker — an exhausted lure that stops catching is the most common reason people wrongly conclude the trap has failed.',`
  - After: `answer: 'Each TERRO trap lasts about 30 days after opening (TERRO says up to 45), or sooner if the liquid fills with flies or evaporates. You do not replace the lure: TERRO designs the traps to be disposable, says it does not sell refills, and says to discard each trap after 45 days of use, so a spent trap is replaced with a new one. Mark the date you open each trap on the base with a marker — an exhausted lure that stops catching is the most common reason people wrongly conclude the trap has failed.',`
- **L401** Table caption: it pointed readers to refill-lure mentions that are now gone. T-terro
  - Before: `caption={<>From each maker&rsquo;s own product page, read Oct 23, 2026: <a href="https://www.terro.com/terro-fruit-fly-trap-t2502b" target="_blank" rel="noopener" className="underline hover:text-brand-700">TERRO</a> (and its <a href="https://www.terro.com/terro-fruit-fly-trap-t2502b-all-questions" target="_blank" rel="noopener" className="underline hover:text-brand-700">answers to buyers</a>), <a href="https://www.rescue.com/products/traps/fruit-fly-trap/" target="_blank" rel="noopener" className="underline hover:text-brand-700">RESCUE!</a> and <a href="https://zevoinsect.com/flying-insect-trap-starter-kit-model-3" target="_blank" rel="noopener" className="underline hover:text-brand-700">Zevo</a>. TERRO says it does not sell refills, so where this guide mentions refill lure for the TERRO apple, plan on a new pack instead.</>}`
  - After: `caption={<>From each maker&rsquo;s own product page, read Oct 23, 2026: <a href="https://www.terro.com/terro-fruit-fly-trap-t2502b" target="_blank" rel="noopener" className="underline hover:text-brand-700">TERRO</a> (and its <a href="https://www.terro.com/terro-fruit-fly-trap-t2502b-all-questions" target="_blank" rel="noopener" className="underline hover:text-brand-700">answers to buyers</a>), <a href="https://www.rescue.com/products/traps/fruit-fly-trap/" target="_blank" rel="noopener" className="underline hover:text-brand-700">RESCUE!</a> and <a href="https://zevoinsect.com/flying-insect-trap-starter-kit-model-3" target="_blank" rel="noopener" className="underline hover:text-brand-700">Zevo</a>. TERRO says it does not sell refills, so when a TERRO apple is spent, plan on a new pack.</>}`
- **L407** Refill economics, TERRO item: refill bottle and the "pays the least per season" claim removed. T-terro
  - Before: `<li><strong>TERRO:</strong> each apple runs about 30 days, and the apples themselves are reusable — TERRO sells the lure separately in a refill bottle that recharges a housing many times over. A household that buys the two-pack once and switches to refill lure pays the least per season of any powered or lured option. Write the opening date on the base of each trap; an expired lure quietly catching nothing is the most common &ldquo;the trap stopped working&rdquo; complaint.</li>`
  - After: `<li><strong>TERRO:</strong> each apple runs about 30 days (TERRO says up to 45) and is then thrown away: TERRO designs the traps to be disposable and does not sell refills, so the recurring cost is a new trap every month or so while flies persist. Write the opening date on the base of each trap; an expired lure quietly catching nothing is the most common &ldquo;the trap stopped working&rdquo; complaint.</li>`

### Page text: left unchanged, with the reason

**Affiliate lines that still carry an old claim.** The rule is never to touch these, so they are left for the owner:
- **mosquito-dunks-canada-guide L297** (Quick Answer; the line holds the AmazonLink): "For fast knockdown of unexpected larvae, use quick-release Mosquito Bits instead." The next line (L298) already says Bits have no Canadian registration and names the registered granules.
- **mosquito-bits-canada-vs-dunks L398** (a paragraph that ends in a BuyLink): "Buy the traps at the same time as the Bits".
- **best-bed-bug-spray-for-travel-canada L180** (AwardRow, natural pick): "Fine for a quick spot treatment and suitcase touch-up".
- **best-bed-bug-powder-canada L157** (AwardRow): "Confirm the Canadian-market version before buying". The box pass already listed it.
- **wasp-dust-canada L175** (AwardRow, suit pick): "even just scouting an entrance or foaming a lawn nest at dusk".

**Seen while searching, outside this brief** (not edited; for the owner):
- **advion-cockroach-gel-bait: the Combat and Raid Max registrations are now confirmed cancelled.** The box pass recorded them as "not confirmed". In Health Canada's registry export of 3 Oct 2026:
  - every hydramethylnon product is cancelled, including COMBAT ROACH KILLING SYSTEM (26519);
  - RAID MAX ROACH BAIT (26645) and RAID DOUBLE CONTROL ROACH BAITS (27731) are cancelled;
  - the current domestic cockroach baits are borate gels and baits (for example RAID ANT ROACH & EARWIG GEL BAITS, 25735) and diatomaceous earth baits.

  The page text still calls Combat-style and Raid stations the legal consumer lane (FAQ L50, bullet L143, key facts L398: "Best legal system"). Fixing that text means changing the Combat pick, so it is the owner's call (OWNER-DECISIONS A: "pick a currently registered bait").
- **best-rat-trap-canada:** the text still gives the older M241 figures (6,000 V, four C batteries, about 50 kills) at L30, L338 and L352. These match the Victor Electronic box, which the box pass left for the owner.
- **mosquito-bits-canada-vs-dunks L415:** "drop one dunk per 50 gallons" is the U.S. rate; the Canadian label puts a barrel at a quarter dunk. This is the same figure as box card 3, also left for the owner.
- **mosquito-repellent-guide-ontario-2026:** the text calls 20% icaridin "odourless" right beside Natrapel (L57, L121, L123, L253). The box fix removed "Odourless" from the Natrapel box, because the maker lists a fragrance.
- **Spot checks with nothing to change.** Each page's box error was searched for in its own text; none was found:
  - steam cleaner: continuous fill;
  - raccoon trap: X-Large;
  - battery sprayer: lithium;
  - pump sprayer: Viton;
  - patio heater: 9–12 ft;
  - natural bed bug spray: EcoRaider or Proof as the pick;
  - mattress spray: "mattress-safe";
  - CimeXa review and Crossfire review: CimeXa as registered.
