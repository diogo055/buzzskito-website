
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

## Tier 2-3 box fixes: bed bug, fly, wasp, wildlife and dehumidifier pages (Oct 29, 2026)

Fixed Oct 29, 2026 under the FIXBOX brief (owner, Oct 29: "Yes, fix the false product box claims"), following FIX-BRIEF.md. The list of problems is the "Box (owner)" findings for these 15 pages in TIER3-CHECK.md (lines 24-35 and 44-46) and the box flags in TIER3-LOG.md (lines 3-8, 21-26 and 30-32); none of the 15 pages is in TIER2-CHECK.md or TIER2-LOG.md. Every flag was re-checked against its primary source on Oct 29 before editing (sources in the key below). All files are `app/blog/<slug>/page.tsx`. **88 lines changed on 12 pages** (83 affiliate lines, 5 table-cell text lines marked B-text); 3 pages needed no change. Lines were replaced, never inserted or deleted, so each line number is the same before and after.

**Checks after editing** (against `git show HEAD:<file>`, read-only; no other git, no build):
- Line counts unchanged on all 15 pages.
- Counts of `<BuyLink`, `<AwardRow`, `<AwardCard`, `<StickyBuyBar`, `<AmazonLink`, `<TopPick`, `<TopBox`, `search=`, `search:`, `asin=`, `asin:` and `tag=` identical on all 15; the sequence of `tag` values identical; every TopBox still mirrors its StickyBuyBar.
- `search` values changed only on the approved swaps below, each to a term already live on the same page or a sibling (S-terms). No `asin` changed.
- `npx tsc --noEmit` clean. A scan of every added line found no "safe", "non-toxic", "Health Canada approved/registered", testing claim, price or rating added.

**Evidence key** (each entry cites these codes):

- `T3C`: the TIER3-CHECK.md row for the page (box items quoted in each entry); `T3L`: the TIER3-LOG.md row for the page.
- `R-api`: Health Canada's pesticide registry API, queried Oct 29, 2026 (https://pest-control.canada.ca/pesticide-registry-api/api/search/product, product name contains): HARRIS 0 rows; ECORAIDER 0; ECOVENGER 0; CIMEXA 0; SILICIDE 0; KATCHY 0; W.H.Y and W·H·Y 0; TRAPSTIK 0; MOSQUITO BITS 0; TERRO 13 rows, all ant products or cancelled, none a fruit fly product. Registrant STERLING: no W·H·Y product.
- `R-31110`: registry 31110 KONK BED BUG KILLER: Full Registration, Current, DOMESTIC, expiry 2027-12-31, Acuity Holdings; pests include BED BUGS. Label 2023-3451 (Dec 21, 2023), fetched with WebFetch from the registry (https://pest-control.canada.ca/pesticide-registry-api/api/pdf/inline/en/444691994): "Pyrethrins 0.50%", "Piperonyl Butoxide 5.00%", "BED BUGS: Spray mattress lightly, particularly around seams and tufts. Take beds apart and spray the frames, springs and all joints", "Tufts and/or seams (mattresses and upholstered furniture only)", "Insects must be contacted to be killed", "Treatment must only be repeated after 7 days if pest problem persists or reoccurs", "DANGER EXTREMELY FLAMMABLE EXPLOSIVE", "DO NOT allow people or pets or livestock to enter treated areas until sprays have settled and dried", address "ACUITY HOLDINGS, INC. 11627 - 178 STREET EDMONTON AB". The label has no "Made in" line and no egg claim.
- `R-32561`: registry 32561 DOKTOR DOOM BE GREEN PREMIUM FOOD GRADE DIATOMACEOUS EARTH: Full Registration, Current, DOMESTIC, expiry 2026-12-31; pest list includes BED BUGS (https://pest-control.canada.ca/pesticide-registry-api/api/search/product-pest/32561). No silica-gel dust is domestic: T3C row for the DIY page (15255, 24259 commercial).
- `R-35529`: registry 35529 DISPOSABLE YELLOWJACKET TRAP W: Full Registration, DOMESTIC, first registered 2025-12-11, expiry 2030-12-31, heptyl butyrate, Sterling International; pest YELLOWJACKET; site OUTDOOR LIVING AREAS.
- `R-34819`: registry 34819 FRUIT FLY TRAP[S]: Full Registration, Current, DOMESTIC, Sterling International, acetic acid; pest FRUIT FLIES.
- `R-bti`: the domestic Bti products 27374, 28888 and 34631 list only MOSQUITO / MOSQUITO LARVAE (product-pest API, Oct 29).
- `R-light`: registry 35296 STEM FLYING INSECT LIGHT TRAP: product type DEVICE, DOMESTIC, current (first registered 2024-09-13); T3C Katchy row (35297, 36005, 36155 also registered).
- `M-ts`: ThermalStrike Ranger page, re-read Oct 29 (https://thermalstrike.com/thermalstrike-ranger/): "a compact, hard working unit", "Just Load Items Directly In The Ranger", "When expanded, easily fits carry-on and most checked luggage with room to spare", "Folds down to the size of a briefcase for storage", Amazon.ca link B07NBVSRG8; Ranger manual Ver 2023R1 as verified in T3C (29 in., closed bags, four poles and a floor, bedding and books allowed, 2/4/8 h, 120°F for 30 min at the core).
- `M-zb`: ZappBug comparison page, re-read Oct 29 (https://zappbug.com/pages/compare-zappbug-products): ZappBug Heater (1 heater, 37.5 x 23 x 23 in), Oven 2 (2), Room (4); no product called "ZappBug Original".
- `U-uf`: University of Florida release, July 7, 2009 (https://archive.news.ufl.edu/articles/2009/07/uf-researchers-turn-up-the-heat-on-bedbugs-with-new-low-tech-treatment-method.html): "Homeowners should not attempt to build their own heat treatment chambers, the UF researchers said, warning that it could lead to fires."
- `M-rff`: RESCUE! Fruit Fly Trap page, read Oct 29 (https://www.rescue.com/products/traps/fruit-fly-trap/): food-based lure and colour; flies "enter through funnel-shaped holes, get trapped inside the liquid and drown"; 30-day supply, reusable with refills; "won't catch fungus gnats or drain flies"; indoor use.
- `M-ryj`: RESCUE! Disposable Yellowjacket Trap page, read Oct 29 (https://www.rescue.com/products/traps/disposable-yellowjacket-trap/): pre-baited, "Simply add water to activate the powdered lure pouch"; "most traps will last between 2 - 4 weeks"; dispose of it when full or dry; "does not target wasps or hornets"; hang it "at least 20 feet away from human activity areas (patios, decks, play spaces)"; "all of the major species of yellowjackets found in North America"; model YJTD.
- `U-isu`: Iowa State University Extension, Cluster Fly (Sept 12, 2016; https://yardandgarden.extension.iastate.edu/encyclopedia/cluster-fly): "Therefore, flypaper, fly strips and bug zappers are of no value." The page names no window or light trap.
- `M-hh`: Woodstream Canada, Havahart Medium 1-Door Animal Trap, read Oct 29 (https://www.woodstreambrands.ca/havahart-medium-1-door-animal-trap): model 1078, 24 x 7 x 7 in, "Best used for rabbits, skunks, and squirrels", no groundhogs. Havahart's groundhog guide (32-42 in traps) and the Large 1079 groundhog listing as verified in T3C (https://www.havahart.com/how-to-trap-groundhogs).
- `B-safe`: FIX-BRIEF ("remove ... every other 'safe'"; no "safe" or "non-toxic"); the checkers also cleared banned words from any changed line (T3C ThermalStrike row).
- `B-swap`: FIX-BRIEF item 2: point the box at the registered alternative the same page (or a sibling) already recommends, reusing its existing search term; element type, position, tag and count kept. Scores on swapped cards are the sibling's own score for that product.
- `B-text`: a table cell (no affiliate element) changed only because the swap beside it would otherwise make it false.
- `S-terms`: swapped-in search terms, each already live: 'konk bed bug killer aerosol' (konk-bed-bug-killer-review-canada L123, L124, L151, L185, L289, L337; its TopPick score 7.4; its ASIN not copied); 'doktor doom diatomaceous earth' (best-bed-bug-powder-canada L163, L227, L268, card score 8.3; also cimexa- and crossfire-review swaps of Oct 25); 'rescue fruit fly trap' (best-fruit-fly-trap-canada L630); 'rescue disposable yellowjacket trap' (rescue-why-trap-review-canada L280 itself; best-wasp-trap L176, 'Best Budget' card score 7.4).

### harris-bed-bug-killer-review-canada (9 lines, swap)

- **L123, L124** (T3C, T3L, R-api, R-31110, B-swap, S-terms). StickyBuyBar/TopBox sold "Harris Toughest Bed Bug Killer (verify Canadian-registered SKU)": no Harris product is in the registry and Harris's range has no Toughest product (T3C). Swapped to the registered can this page itself names for the bed (hero, FAQs 6, 10, situation list): KONK Bed Bug Killer, PCP 31110.
  - L123 before: `<StickyBuyBar tag={AMZ_TAG} name="Harris Toughest Bed Bug Killer (verify Canadian-registered SKU)" search="harris bed bug killer" label="Our verdict: 6.9/10 — conditional" />`
  - L123 after: `<StickyBuyBar tag={AMZ_TAG} name="KONK Bed Bug Killer aerosol (PCP 31110)" search="konk bed bug killer aerosol" label="Registered alternative in Canada" />`
  - L124 before: `<TopBox tag={AMZ_TAG} name="Harris Toughest Bed Bug Killer (verify Canadian-registered SKU)" search="harris bed bug killer" label="Our verdict: 6.9/10 — conditional" />`
  - L124 after: `<TopBox tag={AMZ_TAG} name="KONK Bed Bug Killer aerosol (PCP 31110)" search="konk bed bug killer aerosol" label="Registered alternative in Canada" />`

- **L148, L149, L150, L151, L153, L154, L155** (same evidence). TopPick said "only the specific PMRA-registered SKU sold through Canadian retail is legal here", pro "A Canadian-registered SKU can be a legitimate, label-legal purchase", con "Legality is per-SKU". Swapped to KONK as "What to Buy Instead in Canada", text from label 31110; score 7.4 is the KONK review's own score; cta unchanged.
  - L148 before: `label="Our Verdict — Conditional"`
  - L148 after: `label="What to Buy Instead in Canada"`
  - L149 before: `name="Harris Toughest Bed Bug Killer — a known-name contact spray with two big caveats"`
  - L149 after: `name="KONK Bed Bug Killer (PCP 31110) — the registered can for the bed"`
  - L150 before: `blurb="Harris is the brand nearly every Canadian searching for a bed bug spray eventually clicks on, and the Toughest liquid does the narrow thing a contact insecticide does: it kills the bed bugs it directly, thoroughly wets. That is genuinely useful for spot knockdown on bugs you can see and reach. But it is a pyrethroid, and the resistance now widespread in North American bed bug populations means the dried residual — the weeks-long protection the label implies — is exactly the part resistant bugs walk across and survive. It also cannot touch eggs sealed in seams or bugs hidden in voids. And before you buy at all, the legality question decides everything: only the specific PMRA-registered SKU sold through Canadian retail is legal here; a US listing that happens to ship is not. Buy it, if you buy it, as one Canadian-registered contact tool inside a layered plan — and lean on heat and desiccants for the durable kill."`
  - L150 after: `blurb="No Harris product is in Health Canada’s pesticide registry, so no Harris bottle has a PCP number; this is the can we point Canadian readers to instead. KONK Bed Bug Killer is a domestic-class pyrethrin aerosol (pyrethrins 0.50% with piperonyl butoxide 5.00%) whose label carries Reg. No. 31110. For bed bugs the label says to spray the mattress lightly, particularly around seams and tufts, and to take beds apart and spray the frames, springs and all joints, with a repeat only after 7 days if the problem persists. Insects must be contacted to be killed, so it is a spot tool, not a residual, and the label makes no egg claim: use heat for the eggs and a diatomaceous earth dust with a PCP number for the voids."`
  - L151 before: `search="harris bed bug killer"`
  - L151 after: `search="konk bed bug killer aerosol"`
  - L153 before: `score={6.9}`
  - L153 after: `score={7.4}`
  - L154 before: `pros={['Kills bed bugs it directly and thoroughly wets — real contact knockdown', 'Widely known, easy-to-recognise brand with several product formats', 'Useful as a spot tool for visible bugs inside a bigger plan', 'A Canadian-registered SKU can be a legitimate, label-legal purchase']}`
  - L154 after: `pros={['Domestic-class registration (PCP 31110), current', 'Label covers mattress seams and tufts, frames, springs and joints', 'Pyrethrins with piperonyl butoxide, not a synthetic pyrethroid', 'A Canadian label to follow, from Acuity Holdings, Edmonton']}`
  - L155 before: `cons={['Pyrethroid chemistry — undercut by the resistance common in local bed bugs', 'Residual is the weakest link; resistant bugs survive the dried film', 'Useless against eggs cemented in seams and bugs hidden in voids', 'Legality is per-SKU — a US listing that ships is not automatically legal to import', 'Not a stand-alone fix; needs heat, encasements, monitoring, and a dust to matter']}`
  - L155 after: `cons={['Kills only the bugs it contacts: no residual claimed (label)', 'No egg claim on the label: heat is the answer for eggs', 'EPA: some bed bug populations resist pyrethrins and pyrethroids', 'DANGER: extremely flammable, explosive aerosol (label)', 'Not a stand-alone fix; needs heat, encasements, monitoring, and a dust to matter']}`

### konk-bed-bug-killer-review-canada (4 lines)

- **L150** (T3C, T3L, R-31110). TopPick blurb "registered, Canadian-made": the label gives only Acuity's Edmonton address and no "Made in" line. The same line's "pyrethrin/pyrethroid chemistry" is the cons claim below (label: pyrethrins + PBO).
  - L150 before: `blurb="Konk is the aerosol to reach for when your priority is a registered, Canadian-made product you can actually buy off a shelf rather than smuggle across the border. As a contact insecticide it does its core job well: spray a bed bug you can see and it goes down fast. What holds the score back is nothing unique to Konk and everything about the category — it is pyrethrin/pyrethroid chemistry, so the resistant bugs you don't hit directly may shrug it off, it won't reliably kill eggs cemented in seams, and a surface spray can't reach the harbourage where an infestation actually lives. Bought and used for what it is — legal knockdown and spot treatment inside a layered plan — it is a sound, honest pick. Bought as a one-can cure for an established infestation, it will disappoint, as every consumer spray does."`
  - L150 after: `blurb="Konk is the aerosol to reach for when your priority is a registered product (PCP 31110) you can actually buy off a Canadian shelf rather than smuggle across the border. As a contact insecticide it does its core job well: spray a bed bug you can see and it goes down fast. What holds the score back is nothing unique to Konk and everything about the category — it is pyrethrins with piperonyl butoxide, and EPA says some bed bug populations resist pyrethrins and pyrethroids, so the resistant bugs you don't hit directly may shrug it off, it won't reliably kill eggs cemented in seams, and a surface spray can't reach the harbourage where an infestation actually lives. Bought and used for what it is — legal knockdown and spot treatment inside a layered plan — it is a sound, honest pick. Bought as a one-can cure for an established infestation, it will disappoint, as every consumer spray does."`

- **L155** (T3C, R-31110, B-safe). Pros "PMRA-registered and Canadian-made" and "defined safe-use directions" (banned word).
  - L155 before: `pros={['PMRA-registered and Canadian-made — fully legal retail purchase', 'Fast, effective contact knockdown on bugs you spray directly', 'Widely available at Canadian stores — no grey-market importing', 'A reviewed label with defined safe-use directions to follow']}`
  - L155 after: `pros={['PMRA-registered (PCP 31110, domestic) — a legal retail purchase', 'Fast, effective contact knockdown on bugs you spray directly', 'Widely available at Canadian stores — no grey-market importing', 'A reviewed Canadian label with clear directions to follow']}`

- **L156** (T3C, R-31110). Cons "Pyrethroid chemistry" (label: pyrethrins + piperonyl butoxide) and "Short residual" (label: insects must be contacted to be killed).
  - L156 before: `cons={['Pyrethroid chemistry — resistant bugs you miss may survive', 'Does not reliably kill eggs (heat is the answer there)', 'Short residual and no reach into deep harbourage', 'A knockdown layer only — never a standalone cure for an infestation']}`
  - L156 after: `cons={['Pyrethrins + piperonyl butoxide — resistant bugs you miss may survive', 'Does not reliably kill eggs (heat is the answer there)', 'No residual (label: insects must be contacted to be killed) and no reach into deep harbourage', 'A knockdown layer only — never a standalone cure for an infestation']}`

- **L199** (T3C, T3L, R-api, B-swap, S-terms). EcoRaider row BuyLink: EcoRaider has no registration. Pointed at the registered pick on this page (KONK, label 31110), as the Oct 25 natural-spray fix did ("Registered pick instead"); the row text already says EcoRaider is not registered.
  - L199 before: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="ecoraider bed bug spray" block>Check price on Amazon.ca &rarr;</BuyLink></td>`
  - L199 after: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="konk bed bug killer aerosol" block>Registered pick instead &rarr;</BuyLink></td>`

### how-to-get-rid-of-bed-bugs-in-couch-canada (12 lines, swap)

- **L153** (T3C, T3L, B-safe). Card 1 pro "safe over a sitting surface".
  - L153 before: `pros: ['Kills bugs and eggs on contact', 'Reaches deep into fabric seams', 'Chemical-free — safe over a sitting surface once dry'],`
  - L153 after: `pros: ['Kills bugs and eggs on contact', 'Reaches deep into fabric seams', 'Chemical-free — no pesticide on the fabric you sit on'],`

- **L157-162** (T3C, T3L, R-api, R-31110, B-swap, S-terms). Card 2 "EcoRaider PMRA-Registered Residual Spray", why "the Canadian PCP registration and its labelling for use around living spaces", pros "PMRA/PCP-registered for Canada", "labelled for living areas": all false (no EcoRaider by name or registrant). Swapped to KONK Bed Bug Killer, which this page names for couches (FAQ 4 and the label table: its tuft and seam treatment is defined for mattresses and upholstered furniture). Badge was "Residual Layer"; KONK is contact only (label). Score 7.4 is the KONK review's; cons unchanged (still true).
  - L157 before: `badge: 'Residual Layer',`
  - L157 after: `badge: 'Seam & Tuft Spray',`
  - L158 before: `name: 'EcoRaider PMRA-Registered Residual Spray',`
  - L158 after: `name: 'KONK Bed Bug Killer (PCP 31110)',`
  - L159 before: `why: 'A botanical, lower-toxicity residual that keeps killing for a couple of weeks after the steam pass, driven into the cracks and seams heat could not reach. Choose it for the Canadian PCP registration and its labelling for use around living spaces rather than raw knockdown power.',`
  - L159 after: `why: 'A domestic-class pyrethrin aerosol whose Canadian label defines its tuft and seam treatment for mattresses and upholstered furniture: use it on the seams, tufts and cracks the steam could not reach. Insects must be contacted to be killed, so it leaves no lasting barrier, and its label says to keep people and pets out until sprays have settled and dried. EcoRaider, often suggested for couches, has no Canadian registration.',`
  - L160 before: `search: 'ecoraider bed bug spray',`
  - L160 after: `search: 'konk bed bug killer aerosol',`
  - L161 before: `score: 8.6,`
  - L161 after: `score: 7.4,`
  - L162 before: `pros: ['Residual keeps working for weeks', 'Lower-toxicity, labelled for living areas', 'PMRA/PCP-registered for Canada'],`
  - L162 after: `pros: ['Domestic-class registration (PCP 31110)', 'Label defines tuft and seam treatment for upholstered furniture', 'Kills the bugs it contacts'],`

- **L176, L177** (T3C, R-32561 note). Card 4 "Silica / Diatomaceous-Earth Powder": no silica dust is registered for home use (Drione 15255 and Protect-It 24259 are commercial). Name and why now say DE with a PCP number; search unchanged (generic DE, not an unregistered product).
  - L176 before: `name: 'Silica / Diatomaceous-Earth Powder',`
  - L176 after: `name: 'Diatomaceous-Earth Dust (with a PCP number)',`
  - L177 before: `why: 'A barely-visible dust into the frame joints, staple lines, and deep voids the steam and spray never touch. Bugs crawling through it dry out and die over days. A patient, long-lasting mechanical backstop — apply a film, never a pile.',`
  - L177 after: `why: 'A barely-visible dust into the frame joints, staple lines, and deep voids the steam and spray never touch. Bugs crawling through it dry out and die over days. A patient, long-lasting mechanical backstop — apply a film, never a pile. Choose a diatomaceous earth dust whose label shows a PCP number and lists bed bugs: no silica dust is registered for home use in Canada.',`

- **L186** (same evidence as card 2). whichToBuy sent readers to "the Residual Layer EcoRaider spray".
  - L186 before: `<strong>Buying one thing first?</strong> Start with the <em>Core Tool</em> steamer &mdash; nothing else kills the eggs, and heat is what actually clears a couch. <strong>Adding a residual so bugs keep dying between passes?</strong> Pair it with the <em>Residual Layer</em> EcoRaider spray. <strong>Worried it will come back?</strong> The <em>Containment</em> encasement seals the spots you can&rsquo;t treat. <strong>Chasing survivors in the frame voids?</strong> Dust the joints with the <em>Crack Finisher</em> powder. The full couch kit is all four working together, not any one alone.`
  - L186 after: `<strong>Buying one thing first?</strong> Start with the <em>Core Tool</em> steamer &mdash; nothing else kills the eggs, and heat is what actually clears a couch. <strong>Want a spray for the seams the steam missed?</strong> Add the <em>Seam &amp; Tuft Spray</em>, KONK Bed Bug Killer (PCP 31110); it kills only the bugs it contacts. <strong>Worried it will come back?</strong> The <em>Containment</em> encasement seals the spots you can&rsquo;t treat. <strong>Chasing survivors in the frame voids?</strong> Dust the joints with the <em>Crack Finisher</em> powder. The full couch kit is all four working together, not any one alone.`

- **L227, L277** (same evidence as card 2). The EcoRaider table and body BuyLinks follow the swap.
  - L227 before: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="ecoraider bed bug spray" block>Check price on Amazon.ca →</BuyLink></td>`
  - L227 after: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="konk bed bug killer aerosol" block>Check price on Amazon.ca →</BuyLink></td>`
  - L277 before: `<BuyLink tag={AMZ_TAG} search="ecoraider bed bug spray">EcoRaider spray →</BuyLink>`
  - L277 after: `<BuyLink tag={AMZ_TAG} search="konk bed bug killer aerosol">KONK Bed Bug Killer →</BuyLink>`

### best-bed-bug-box-spring-encasement-canada (1 line)

- **L190** (T3L, B-safe). The upgrader's note: whichToBuy "safe default". T3C found no wrong claim; only the banned word was replaced.
  - L190 before: `<strong>Active bed-bug problem and want the safe default?</strong> The <em>Best Overall</em> SureGuard box-spring encasement gets the seal, the zipper, and the fabric right. <strong>Want documented, certified testing and the heaviest fabric?</strong> The <em>Best Premium</em> SafeRest. <strong>Encasing several beds or a rental?</strong> The <em>Best Value</em> Utopia keeps the per-unit cost down without dropping to an open-bottom cover. <strong>One low-pressure bed on a tight budget?</strong> The <em>Best Budget</em> cover works &mdash; just confirm it is truly six-sided before you buy.`
  - L190 after: `<strong>Active bed-bug problem and want the dependable default?</strong> The <em>Best Overall</em> SureGuard box-spring encasement gets the seal, the zipper, and the fabric right. <strong>Want documented, certified testing and the heaviest fabric?</strong> The <em>Best Premium</em> SafeRest. <strong>Encasing several beds or a rental?</strong> The <em>Best Value</em> Utopia keeps the per-unit cost down without dropping to an open-bottom cover. <strong>One low-pressure bed on a tight budget?</strong> The <em>Best Budget</em> cover works &mdash; just confirm it is truly six-sided before you buy.`

### thermalstrike-ranger-review-canada (6 lines)

- **L123, L124** (T3C, T3L, M-ts). StickyBuyBar/TopBox name "heated bed bug suitcase": the Ranger is a folding heater a closed bag goes into. Search unchanged (see Left unchanged).
  - L123 before: `<StickyBuyBar tag={AMZ_TAG} name="ThermalStrike Ranger heated bed bug suitcase" search="thermalstrike ranger heated suitcase bed bug" label="Our verdict: 8.2/10" />`
  - L123 after: `<StickyBuyBar tag={AMZ_TAG} name="ThermalStrike Ranger folding bed bug heater for luggage" search="thermalstrike ranger heated suitcase bed bug" label="Our verdict: 8.2/10" />`
  - L124 before: `<TopBox tag={AMZ_TAG} name="ThermalStrike Ranger heated bed bug suitcase" search="thermalstrike ranger heated suitcase bed bug" label="Our verdict: 8.2/10" />`
  - L124 after: `<TopBox tag={AMZ_TAG} name="ThermalStrike Ranger folding bed bug heater for luggage" search="thermalstrike ranger heated suitcase bed bug" label="Our verdict: 8.2/10" />`

- **L149, L150** (T3C, T3L, M-ts). TopPick name and blurb "A hard-shell rolling suitcase with a heating element engineered into its walls. You travel with it like any carry-on" and "no-setup" replaced with the maker's description.
  - L149 before: `name="ThermalStrike Ranger — heated bed bug suitcase"`
  - L149 after: `name="ThermalStrike Ranger — folding bed bug heater for luggage"`
  - L150 before: `blurb="A hard-shell rolling suitcase with a heating element engineered into its walls. You travel with it like any carry-on, then plug it in when you get home and let the sealed interior climb past the temperature at which bed bug adults, nymphs, and eggs all die — sterilizing the belongings in the exact bag they rode home in, before you ever unzip it in your bedroom. The appeal is that prevention becomes a no-setup habit rather than a chore, which is exactly what keeps frequent travellers consistent. Priced well below what a single bed bug introduction costs to eradicate."`
  - L150 after: `blurb="Not a suitcase: a collapsible six-sided heater you set up at home with four poles and a plastic floor. Your closed carry-on or checked bag, up to 29 inches with its contents, goes inside, and the 2, 4 or 8-hour timer runs until the core of the load passes the temperature at which bed bug adults, nymphs, and eggs all die (ThermalStrike recommends 120°F, 49°C, for 30 minutes at the core) — sterilizing the belongings in the exact bag they rode home in, before you ever unzip it in your bedroom. The appeal is that prevention becomes a simple habit rather than a chore, which is exactly what keeps frequent travellers consistent; it folds to briefcase size between trips. Priced well below what a single bed bug introduction costs to eradicate."`

- **L154, L155** (T3C, M-ts). Pros "Heater built into the suitcase" and "Zero-setup"; cons "not for bedding, boxes" (the manual allows bedding and books) and "Premium over a plain suitcase" (same false premise).
  - L154 before: `pros={['Heater built into the suitcase — treats belongings in the bag they travelled in, no separate chamber', 'Kills every life stage including eggs; heat has no resistance problem', 'Zero-setup prevention turns post-trip decontamination into a habit', 'Pesticide-free physical method — nothing to register, nothing grey-market', 'Ideal for frequent flyers, hotel/hostel/short-term-rental stays, and students moving between homes']}`
  - L154 after: `pros={['Takes the closed bag with its contents (manual) — treats belongings in the bag they travelled in, no unpacking first', 'Kills every life stage including eggs; heat has no resistance problem', 'Four poles and a floor to set up, and it folds to briefcase size, so post-trip decontamination becomes a habit', 'Pesticide-free physical method — nothing to register, nothing grey-market', 'Ideal for frequent flyers, hotel/hostel/short-term-rental stays, and students moving between homes']}`
  - L155 before: `cons={['Single-suitcase capacity — not for bedding, boxes, or whole-home remediation', 'Dense loads need patience: the packed core is the last thing to reach egg-kill temperature', 'Small US manufacturer — Canadian stock and model names can fluctuate', 'Premium over a plain suitcase; the maths favours frequent, higher-risk travel']}`
  - L155 after: `cons={['One suitcase-sized load at a time (bedding and books allowed) — not for furniture or whole-home remediation', 'Dense loads need patience: the packed core is the last thing to reach egg-kill temperature', 'Small US manufacturer — Canadian stock and model names can fluctuate', 'A device to buy on top of your luggage; the maths favours frequent, higher-risk travel']}`

### best-bed-bug-heat-chamber-canada (6 lines)

- **L152, L153** (T3C, T3L, M-zb). Card 1 "ZappBug Original" and "built-in heaters": ZappBug sells the Heater (one heater), Oven 2 and Room. Search and ASIN unchanged.
  - L152 before: `name: 'ZappBug Original (portable heat chamber)',`
  - L152 after: `name: 'ZappBug Heater (portable heat chamber)',`
  - L153 before: `why: 'The default choice for household bed-bug work: a collapsible insulated cube with built-in heaters and a probe thermometer that holds luggage, clothing, shoes, and books past the 48°C kill line for eggs and adults alike. Big enough for most jobs, small enough to store.',`
  - L153 after: `why: 'The default choice for household bed-bug work: a collapsible insulated box (37.5 x 23 x 23 in) with one heater and a probe thermometer that holds luggage, clothing, shoes, and books past the 48°C kill line for eggs and adults alike. ZappBug sells it as the ZappBug Heater; it has no model called the Original. Big enough for most jobs, small enough to store.',`

- **L164, L191, L282** (same evidence). The same false model name in card 2's why, whichToBuy and the BuyLink button text.
  - L164 before: `why: 'The larger unit for the loads the Original cannot swallow — a small armchair, stacked dining chairs, big totes, or a whole family’s clothing in one cycle. The right pick if you routinely need to heat furniture or clear big loads in fewer runs.',`
  - L164 after: `why: 'The larger unit for the loads the Heater cannot swallow — a small armchair, stacked dining chairs, big totes, or a whole family’s clothing in one cycle. The right pick if you routinely need to heat furniture or clear big loads in fewer runs.',`
  - L191 before: `<strong>Treating clothing, luggage, shoes, and books?</strong> The <em>Best Overall</em> ZappBug Original covers the majority of household jobs. <strong>Need to heat a chair or big loads?</strong> Step up to the <em>Best for Furniture</em> ZappBug Room. <strong>A traveller who just wants to zap a suitcase?</strong> The <em>Best for Travel</em> Thermal Strike Ranger is the focused tool. <strong>One-off job on a tight budget and willing to watch a thermometer?</strong> A carefully built <em>DIY</em> chamber can work &mdash; but a purpose-built unit removes the fire and cold-pocket risk for a reason.`
  - L191 after: `<strong>Treating clothing, luggage, shoes, and books?</strong> The <em>Best Overall</em> ZappBug Heater covers the majority of household jobs. <strong>Need to heat a chair or big loads?</strong> Step up to the <em>Best for Furniture</em> ZappBug Room. <strong>A traveller who just wants to zap a suitcase?</strong> The <em>Best for Travel</em> Thermal Strike Ranger is the focused tool. <strong>One-off job on a tight budget?</strong> The University of Florida researchers who built a <em>DIY</em> chamber told homeowners not to build their own, warning that it could lead to fires, so a purpose-built unit is the better buy.`
  - L282 before: `<BuyLink tag={AMZ_TAG} search="zappbug original bed bug heater">ZappBug Original →</BuyLink>`
  - L282 after: `<BuyLink tag={AMZ_TAG} search="zappbug original bed bug heater">ZappBug Heater →</BuyLink>`

- **L182** (T3C, T3L, U-uf, B-safe). Card 4 DIY chamber "only safe and effective if ...": banned word, and the UF researchers who built one told homeowners not to (fire). Pick and badge kept; the box now says so. The whichToBuy line (L191) carries the same correction and drops "removes the fire and cold-pocket risk".
  - L182 before: `why: 'For a single small job on a tight budget: an insulated tote or garment bag warmed by a small ceramic heater and — critically — monitored with a real probe thermometer. Cheapest route, but only safe and effective if you watch the temperature and never leave a heater unattended.',`
  - L182 after: `why: 'For a single small job on a tight budget: an insulated tote or garment bag warmed by a small ceramic heater and — critically — monitored with a real probe thermometer. Cheapest route, but the University of Florida researchers who built one told homeowners not to build their own heat treatment chambers, warning that it could lead to fires; never leave a heater unattended.',`

### how-to-get-rid-of-bed-bugs-canada (10 lines, swap)

- **L183-187** (T3C, T3L, R-api, R-32561, B-swap, S-terms). Card 4 "Silica Desiccant Dust (e.g. CimeXa)", search 'cimexa silica bed bug dust': CimeXa 0 rows. Swapped to a registered DE dust, the class this page recommends (Step 6, FAQ: diatomaceous earth with a PCP number); Doktor Doom Be Green is the DE its sibling powder guide recommends. Score 8.3 is the powder guide's. "Keeps killing for months" replaced with the page's own "keeps working while it stays dry".
  - L183 before: `name: 'Silica Desiccant Dust (e.g. CimeXa)',`
  - L183 after: `name: 'Diatomaceous Earth Dust with a PCP Number (e.g. Doktor Doom Be Green, PCP 32561)',`
  - L184 before: `why: 'A thin film of silica in wall voids, outlet gaps, and behind baseboards keeps killing for months — bugs that walk across it dehydrate and die. The residual backbone that outlasts any liquid spray.',`
  - L184 after: `why: 'A thin film of a registered diatomaceous earth dust in wall voids, outlet gaps, and behind baseboards keeps working while it stays dry — bugs that walk across it dry out and die. Doktor Doom Be Green (PCP 32561, domestic class) lists bed bugs on its label; CimeXa, the silica dust US guides favour, is not in Health Canada’s registry.',`
  - L185 before: `search: 'cimexa silica bed bug dust',`
  - L185 after: `search: 'doktor doom diatomaceous earth',`
  - L186 before: `score: 8.5,`
  - L186 after: `score: 8.3,`
  - L187 before: `pros: ['Keeps killing for months', 'Reaches voids you cannot heat', 'A little covers a lot'],`
  - L187 after: `pros: ['Domestic-class registration with bed bugs on the label', 'Reaches voids you cannot heat', 'A little covers a lot'],`

- **L193** (same evidence). whichToBuy "silica dust".
  - L193 before: `<strong>Just found bed bugs and don&rsquo;t know where to start?</strong> Buy the <em>Protect the Bed</em> encasements and <em>Monitor &amp; Isolate</em> interceptors first &mdash; together they stop the bites within a day and tell you if you&rsquo;re winning. <strong>Ready to actually kill them?</strong> Add the <em>Kill the Eggs</em> heat tools; a <Link href="/blog/best-bed-bug-steamer-canada">steamer</Link> for seams plus a <Link href="/blog/zappbug-heater-review-canada">box heater</Link> for belongings covers most homes. <strong>Want the killing to keep going while you sleep?</strong> Lay down the <em>Finish the Stragglers</em> silica dust in the voids. Do all four and you have a real plan, not a hopeful one.`
  - L193 after: `<strong>Just found bed bugs and don&rsquo;t know where to start?</strong> Buy the <em>Protect the Bed</em> encasements and <em>Monitor &amp; Isolate</em> interceptors first &mdash; together they stop the bites within a day and tell you if you&rsquo;re winning. <strong>Ready to actually kill them?</strong> Add the <em>Kill the Eggs</em> heat tools; a <Link href="/blog/best-bed-bug-steamer-canada">steamer</Link> for seams plus a <Link href="/blog/zappbug-heater-review-canada">box heater</Link> for belongings covers most homes. <strong>Want the killing to keep going while you sleep?</strong> Lay down the <em>Finish the Stragglers</em> diatomaceous earth dust in the voids. Do all four and you have a real plan, not a hopeful one.`

- **L250, L251, L252** (same evidence; L250 B-text). Plan-table row "Silica desiccant (CimeXa)" + BuyLink.
  - L250 before: `<td className="px-4 py-3 text-gray-700">Thin silica film in walls, outlets, baseboards</td>`
  - L250 after: `<td className="px-4 py-3 text-gray-700">Thin dust film in walls, outlets, baseboards</td>`
  - L251 before: `<td className="px-4 py-3 text-gray-700">Silica desiccant (CimeXa)</td>`
  - L251 after: `<td className="px-4 py-3 text-gray-700">Diatomaceous earth dust with a PCP number</td>`
  - L252 before: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="cimexa silica bed bug dust" block>Check price on Amazon.ca →</BuyLink></td>`
  - L252 after: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="doktor doom diatomaceous earth" block>Check price on Amazon.ca →</BuyLink></td>`

- **L306** (same evidence). "Silica dust" button.
  - L306 before: `<BuyLink tag={AMZ_TAG} search="cimexa silica bed bug dust">Silica dust →</BuyLink>`
  - L306 after: `<BuyLink tag={AMZ_TAG} search="doktor doom diatomaceous earth">DE dust (PCP 32561) →</BuyLink>`

### how-to-get-rid-of-bed-bugs-yourself-diy-canada (8 lines, swap)

- **L164-167** (T3C, T3L, R-api, R-32561, B-swap, S-terms). Card 2 "Silica / Diatomaceous-Earth Desiccant Dust", why "silica-gel or food-grade DE" (EPA: pool or food grade DE should not be used, https://www.epa.gov/bedbugs/do-it-yourself-bed-bug-control; no domestic silica dust), search 'silica bed bug desiccant dust'. Swapped to a registered DE dust as on the sibling plan page; score 8.3 is the powder guide's.
  - L164 before: `name: 'Silica / Diatomaceous-Earth Desiccant Dust',`
  - L164 after: `name: 'Diatomaceous-Earth Dust with a PCP Number (e.g. Doktor Doom Be Green, PCP 32561)',`
  - L165 before: `why: 'The lasting kill layer. A fine film of silica-gel or food-grade DE in cracks, voids, and under baseboards abrades the insect shell so anything crossing it dehydrates over days. This is what keeps working long after you put the steamer away.',`
  - L165 after: `why: 'The lasting kill layer. A fine film of a diatomaceous earth dust whose label shows a PCP number and lists bed bugs, such as Doktor Doom Be Green (PCP 32561), in cracks, voids, and under baseboards abrades the insect shell so anything crossing it dehydrates over days. No silica-gel dust is registered for home use in Canada. This is what keeps working long after you put the steamer away.',`
  - L166 before: `search: 'silica bed bug desiccant dust',`
  - L166 after: `search: 'doktor doom diatomaceous earth',`
  - L167 before: `score: 8.7,`
  - L167 after: `score: 8.3,`

- **L201** (T3C). whichToBuy link text "CimeXa silica dust"; the link target is unchanged.
  - L201 before: `<strong>Buy all five &mdash; that is the point.</strong> This is not a &ldquo;pick one&rdquo; list; each tool covers a gap the others leave. If budget forces a phased purchase, start with the <em>Steamer</em> and <em>Interceptor Traps</em> (kill + measure), add <em>Encasements</em> next to lock down the bed, then layer in the <em>Desiccant Dust</em> for residual and the <em>Sealed-HEPA Vacuum</em> for fast removal. For the deep dives, see our dedicated guides on <Link href="/blog/best-bed-bug-steamer-canada">steamers</Link>, <Link href="/blog/cimexa-bed-bug-review-canada">CimeXa silica dust</Link>, <Link href="/blog/bed-bug-mattress-encasement-canada">encasements</Link>, and <Link href="/blog/bed-bug-interceptor-traps-canada">interceptors</Link>.`
  - L201 after: `<strong>Buy all five &mdash; that is the point.</strong> This is not a &ldquo;pick one&rdquo; list; each tool covers a gap the others leave. If budget forces a phased purchase, start with the <em>Steamer</em> and <em>Interceptor Traps</em> (kill + measure), add <em>Encasements</em> next to lock down the bed, then layer in the <em>Desiccant Dust</em> for residual and the <em>Sealed-HEPA Vacuum</em> for fast removal. For the deep dives, see our dedicated guides on <Link href="/blog/best-bed-bug-steamer-canada">steamers</Link>, <Link href="/blog/cimexa-bed-bug-review-canada">desiccant dusts</Link>, <Link href="/blog/bed-bug-mattress-encasement-canada">encasements</Link>, and <Link href="/blog/bed-bug-interceptor-traps-canada">interceptors</Link>.`

- **L235, L239** (same evidence; L235 B-text). Table row label "silica or DE" + BuyLink.
  - L235 before: `<td className="px-4 py-3 font-bold text-brand-800">Desiccant dust<br /><span className="font-normal text-xs text-gray-500">silica or DE</span></td>`
  - L235 after: `<td className="px-4 py-3 font-bold text-brand-800">Desiccant dust<br /><span className="font-normal text-xs text-gray-500">DE with a PCP number</span></td>`
  - L239 before: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="silica bed bug desiccant dust" block>Check price on Amazon.ca →</BuyLink></td>`
  - L239 after: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="doktor doom diatomaceous earth" block>Check price on Amazon.ca →</BuyLink></td>`

- **L302** (same evidence). Button.
  - L302 before: `<BuyLink tag={AMZ_TAG} search="silica bed bug desiccant dust">Desiccant dust →</BuyLink>`
  - L302 after: `<BuyLink tag={AMZ_TAG} search="doktor doom diatomaceous earth">Desiccant dust (PCP 32561) →</BuyLink>`

### katchy-indoor-insect-trap-review-canada (5 lines, swap + reword)

- **L153** (T3C, T3L, B-safe). TopPick pro "No insecticide: safe around kids, pets, and food prep".
  - L153 before: `pros={['Excellent catch rates on fungus gnats and fruit flies', 'Completely silent — no zapper crack at 2 a.m.', 'No insecticide: safe around kids, pets, and food prep', 'Glue boards are cheap and generic boards fit']}`
  - L153 after: `pros={['Excellent catch rates on fungus gnats and fruit flies', 'Completely silent — no zapper crack at 2 a.m.', 'No insecticide: a UV light, a fan and a glue board', 'Glue boards are cheap and generic boards fit']}`

- **L218, L219, L223** (T3C, T3L, R-api, R-34819, M-rff, B-swap, S-terms; L218-219 B-text). TERRO Fruit Fly Trap row + BuyLink: no TERRO fruit fly product is registered. Swapped to the registered vinegar-lure trap this page names (QuickIdTable: RESCUE! Fruit Fly Trap, PCP 34819); the row's TERRO-only cells (name, apple-shaped bowl) follow it. "Fruit flies specifically", "Gnats, drain flies, everything else" and "Lure refills roughly monthly" are still true for RESCUE! (M-rff) and were kept.
  - L218 before: `<td className="px-4 py-3 font-bold text-brand-800">TERRO Fruit Fly Trap</td>`
  - L218 after: `<td className="px-4 py-3 font-bold text-brand-800">RESCUE! Fruit Fly Trap (PCP 34819)</td>`
  - L219 before: `<td className="px-4 py-3 text-gray-700">Food-grade vinegar lure in an apple-shaped bowl</td>`
  - L219 after: `<td className="px-4 py-3 text-gray-700">Food-based liquid lure; flies enter funnel-shaped holes and drown (RESCUE!)</td>`
  - L223 before: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="terro fruit fly trap" block>Check price on Amazon.ca →</BuyLink></td>`
  - L223 after: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="rescue fruit fly trap" block>Check price on Amazon.ca →</BuyLink></td>`

- **L287** (T3C, T3L, R-api, R-bti). The paragraph holding the 'mosquito bits bti granules' BuyLink told readers to treat houseplant soil: Mosquito Bits has no registration and no home-use Bti lists fungus gnats, so there is no registered alternative for this use (Dunks are mosquito-only). Reworded honestly per the brief; search unchanged.
  - L287 before: `<p>The format that suits houseplant soil is the granular one &mdash; sprinkled over the surface and watered in, or steeped in the watering can so the BTI goes down with every watering. Check the label for the use sites and rate it is registered for, and keep treating across a few consecutive waterings so each new hatch of larvae meets it. <BuyLink tag={AMZ_TAG} search="mosquito bits bti granules">Check BTI granules on Amazon.ca &rarr;</BuyLink></p>`
  - L287 after: `<p>Granular BTI such as Mosquito Bits is often suggested for houseplant soil, but in Canada it is not a registered fix for fungus gnats: Mosquito Bits does not appear in Health Canada&rsquo;s registry, and none of the home-use BTI products on it lists fungus gnats (searched October 28, 2026). Check the PCP number and the pests on the label of any product you buy, and use it only as that label directs; for houseplants, UC IPM&rsquo;s advice is to let the soil surface dry between waterings. <BuyLink tag={AMZ_TAG} search="mosquito bits bti granules">BTI granules (not registered in Canada; check the PCP number) &rarr;</BuyLink></p>`

### rescue-why-trap-review-canada (14 lines, swap)

- **L119, L120** (T3C, T3L, R-api, R-35529, M-ryj, B-swap, S-terms). StickyBuyBar/TopBox "Our verdict: buy it" for the W·H·Y Trap, which has no registration record (lures are pest control products, PCPA s. 2). Swapped to the registered RESCUE! trap this page recommends (situation list: "a heptyl butyrate yellowjacket trap with a PCP number"; QuickIdTable; compliance section), reusing this page's own term (L280).
  - L119 before: `<StickyBuyBar tag={AMZ_TAG} name="RESCUE! WHY Trap (wasps, hornets & yellowjackets)" search="rescue why trap wasp hornet yellowjacket" label="Our verdict: buy it" />`
  - L119 after: `<StickyBuyBar tag={AMZ_TAG} name="RESCUE! Disposable Yellowjacket Trap W (PCP 35529)" search="rescue disposable yellowjacket trap" label="Registered pick: yellowjackets only" />`
  - L120 before: `<TopBox tag={AMZ_TAG} name="RESCUE! WHY Trap (wasps, hornets & yellowjackets)" search="rescue why trap wasp hornet yellowjacket" label="Our verdict: buy it" />`
  - L120 after: `<TopBox tag={AMZ_TAG} name="RESCUE! Disposable Yellowjacket Trap W (PCP 35529)" search="rescue disposable yellowjacket trap" label="Registered pick: yellowjackets only" />`

- **L144, L145, L146, L147, L149, L151, L152, L153, L154, L155, L158, L161** (same evidence). TopPick (8.6) for the unregistered W·H·Y; blurb "stocked with Canadian-labelled refills at every big-box store" and pro "Canadian-labelled trap and refills at Canadian Tire, Home Depot, Amazon.ca" (unverified, T3C). Swapped to the Disposable Yellowjacket Trap W; text from the registry and RESCUE!'s page; score 7.4 is best-wasp-trap's score for this trap; cons 2-3 kept (still true).
  - L144 before: `label="Our Verdict"`
  - L144 after: `label="Registered Alternative (Yellowjackets)"`
  - L145 before: `name="RESCUE! WHY Trap (Wasp, Hornet & Yellowjacket)"`
  - L145 after: `name="RESCUE! Disposable Yellowjacket Trap W (PCP 35529)"`
  - L146 before: `blurb="The broadest-spectrum reusable wasp trap you can buy in Canada. The two-chamber design is genuinely clever engineering, not marketing — separate scent systems for the high-flying paper wasps and hornets versus the low-approaching yellowjackets. Reusable for years, insecticide-free, and stocked with Canadian-labelled refills at every big-box store. Score docked for the recurring attractant cost and for what every lure trap shares: it thins foragers, it cannot kill a colony."`
  - L146 after: `blurb="Health Canada’s registry shows no W·H·Y product, so this is the RESCUE! trap we can point Canadian readers to: Sterling International’s Disposable Yellowjacket Trap W, which the registry lists as PCP 35529 (domestic, first registered December 11, 2025) for yellowjackets in outdoor living areas. It comes pre-baited: add water to activate the lure, hang it at least 20 feet (6 m) from patios, decks and play spaces, and throw it out when it is full or dry, usually after 2 to 4 weeks, RESCUE! says. It is for yellowjackets, not paper wasps or hornets, and like every lure trap it thins foragers without killing the colony. Check the package for PCP 35529."`
  - L147 before: `search="rescue why trap wasp hornet yellowjacket"`
  - L147 after: `search="rescue disposable yellowjacket trap"`
  - L149 before: `score={8.6}`
  - L149 after: `score={7.4}`
  - L151 before: `'Catches all 3 groups — paper wasps, hornets, yellowjackets (19 species)',`
  - L151 after: `'Canadian registration: PCP 35529, domestic, for yellowjackets',`
  - L152 before: `'Two-chamber design targets each group with its own attractant',`
  - L152 after: `'Pre-baited: add water to activate the lure (RESCUE!)',`
  - L153 before: `'No insecticide, no zapper — and formulated to avoid honey bees',`
  - L153 after: `'No chamber to empty: dispose of it when full or dry',`
  - L154 before: `'Reusable season after season; catches spring queens before nests form',`
  - L154 after: `'Lasts about 2 to 4 weeks, RESCUE! says',`
  - L155 before: `'Canadian-labelled trap and refills at Canadian Tire, Home Depot, Amazon.ca',`
  - L155 after: `'Targets the major North American yellowjacket species (RESCUE!)',`
  - L158 before: `'Attractant refills are a recurring cost on a ~2-week cadence',`
  - L158 after: `'Single-use: a new trap every 2 to 4 weeks adds up over a season',`
  - L161 before: `'Emptying a chamber of dead wasps is not for the squeamish',`
  - L161 after: `'Yellowjackets only: RESCUE! says it does not target wasps or hornets',`

### cluster-flies-in-house-canada (6 lines, fit)

- **L113, L114, L141, L143** (T3C fit, U-isu). StickyBuyBar/TopBox/AwardRow sold clear window fly traps as the "Best indoor fix" beside Iowa State's "flypaper, fly strips and bug zappers are of no value". Pick kept (FIX-BRIEF item 3); labels and why now call it an add-on to the vacuum, which Health Canada's archived PMRA pest note advises (cited on the page).
  - L113 before: `<StickyBuyBar tag={AMZ_TAG} name="Clear window fly traps" search="window fly traps clear sticky" label="Best indoor fix" />`
  - L113 after: `<StickyBuyBar tag={AMZ_TAG} name="Clear window fly traps" search="window fly traps clear sticky" label="Window add-on to the vacuum" />`
  - L114 before: `<TopBox tag={AMZ_TAG} name="Clear window fly traps" search="window fly traps clear sticky" label="Best indoor fix" />`
  - L114 after: `<TopBox tag={AMZ_TAG} name="Clear window fly traps" search="window fly traps clear sticky" label="Window add-on to the vacuum" />`
  - L141 before: `badge: 'Best Indoor Fix',`
  - L141 after: `badge: 'Window Add-On',`
  - L143 before: `why: 'Transparent sticky panels that mount in the lower corner of the glass — exactly where cluster flies spend their indoor lives. They catch around the clock through the fall emergence and the warm-day winter wake-ups, without pesticide, odour, or anything visible from the curb. The single best-matched product to how this insect actually behaves.',`
  - L143 after: `why: 'Transparent sticky panels that mount in the lower corner of the glass — exactly where cluster flies spend their indoor lives. They catch around the clock through the fall emergence and the warm-day winter wake-ups, without pesticide, odour, or anything visible from the curb. They catch only the flies that reach that window, though, and Iowa State calls flypaper, fly strips and bug zappers of no value against cluster flies, so treat them as an add-on to the vacuum, not the fix.',`

- **L153** (T3C, R-light). The Plug-In UV Light Trap card did not mention a PCP number although indoor light traps are registered devices.
  - L153 before: `why: 'For rooms or attics where flies keep appearing over weeks, a plug-in UV trap with a hidden glue board runs unattended and quietly empties the airspace. On winter-sunny days when a warm attic wakes hundreds, it is the difference between managing the problem and chasing it fly by fly.',`
  - L153 after: `why: 'For rooms or attics where flies keep appearing over weeks, a plug-in UV trap with a hidden glue board runs unattended and quietly empties the airspace. On winter-sunny days when a warm attic wakes hundreds, it is the difference between managing the problem and chasing it fly by fly. Health Canada registers indoor light traps as devices, so check the box for a PCP number.',`

- **L180** (same evidence). whichToBuy: badge names and both points above; "for under fifty dollars" dropped from the edited line (brief: no prices).
  - L180 before: `<strong>Flies at the windows right now?</strong> The <em>Best Indoor Fix</em> window traps plus the <em>Best Cleanup Tool</em> handheld vacuum handle the visible problem for under fifty dollars. <strong>Steady emergence in one room or the attic?</strong> Add the <em>Best for Heavy Emergence</em> light trap and let it run. <strong>Want this to stop happening?</strong> The <em>Best Prevention Buy</em> caulk is the only item on this row that changes next year &mdash; walk the sunny walls with it in July or early August, before the flies stage. Order matters more than product here: trap and vacuum now, seal in summer, and never the reverse.`
  - L180 after: `<strong>Flies at the windows right now?</strong> The <em>Best Cleanup Tool</em> handheld vacuum handles the visible problem, as Health Canada&rsquo;s archived pest note advises, and the <em>Window Add-On</em> traps catch stragglers at the glass; Iowa State calls flypaper and fly strips of no value against cluster flies, so do not count on them alone. <strong>Steady emergence in one room or the attic?</strong> Add the <em>Best for Heavy Emergence</em> light trap and let it run; check its box for a PCP number. <strong>Want this to stop happening?</strong> The <em>Best Prevention Buy</em> caulk is the only item on this row that changes next year &mdash; walk the sunny walls with it in July or early August, before the flies stage. Order matters more than product here: trap and vacuum now, seal in summer, and never the reverse.`

### best-live-animal-trap-canada (7 lines)

- **L158, L160, L164** (T3C, T3L, M-hh). AwardRow "Best for Groundhogs" on the Medium 1078 with pro "Right size for groundhogs and skunks": Havahart lists 1078 for rabbits, skunks and squirrels and its 32-42 in traps for groundhogs. Wording fix (the product exists, so no swap; search unchanged).
  - L158 before: `badge: 'Best for Groundhogs',`
  - L158 after: `badge: 'Best Mid-Size (Rabbits, Squirrels)',`
  - L160 before: `why: 'The single most defensible DIY case: a groundhog under a shed you can legally release within 1 km on your own property. Sturdy single-door build resists a strong digger, and a solid rear panel keeps bait secure.',`
  - L160 after: `why: 'Havahart lists its 24-inch medium single-door (1078) for rabbits, skunks and squirrels; for a groundhog it lists its 32-inch-and-up traps, so use the large trap there. Set it only for an animal you can legally release within 1 km, outside denning season. Sturdy single-door build, and a solid rear panel keeps bait secure.',`
  - L164 before: `pros: ['Right size for groundhogs and skunks', 'Rigid steel resists strong animals', 'Simple, injury-free release'],`
  - L164 after: `pros: ['Havahart lists it for rabbits, skunks and squirrels', 'Rigid steel resists strong animals', 'Simple, injury-free release'],`

- **L188, L197** (same evidence). whichToBuy sent groundhogs to the medium; it now sends them to the existing "For Larger Animals" card, whose why now gives Havahart's groundhog listing for the Large 1079 (the hero, FAQ 6 and size table already say so). "safety" in the edited L188 replaced (B-safe).
  - L188 before: `why: 'Built for raccoon-sized animals and feral cats. Listed here for completeness — but for raccoons and skunks specifically we recommend a licensed wildlife-control operator over any DIY trap, for legal, safety, and welfare reasons.',`
  - L188 after: `why: 'Built for raccoon-sized animals and feral cats, and Havahart lists its 32-inch large single-door (1079) for groundhogs too, so this is the size for a groundhog under the shed. For raccoons and skunks specifically we recommend a licensed wildlife-control operator over any DIY trap, for legal, rabies-risk, and welfare reasons.',`
  - L197 before: `<strong>Groundhog under your shed?</strong> The <em>Best for Groundhogs</em> medium single-door is the one common case where DIY trapping is defensible — check bylaws and avoid denning season. <strong>Squirrel or chipmunk?</strong> The <em>Best for Small Rodents</em> trap fits, but a homing squirrel released within 1 km often returns, so pair it with sealing the entry point. <strong>Skittish animal or feral cat?</strong> The <em>Highest Catch Rate</em> two-door earns its keep. <strong>Raccoon or skunk?</strong> Don’t — call a licensed operator. Start every case with the <Link href="/blog/raccoon-deterrent">deterrence-first plan</Link>.`
  - L197 after: `<strong>Groundhog under your shed?</strong> It is the one common case where DIY trapping is defensible, and Havahart lists its 32-inch-and-up traps for groundhogs, so use the <em>For Larger Animals</em> large single-door — check bylaws and avoid denning season. <strong>Rabbit?</strong> The <em>Best Mid-Size</em> medium single-door is the size Havahart lists for rabbits, skunks and squirrels. <strong>Squirrel or chipmunk?</strong> The <em>Best for Small Rodents</em> trap fits, but a homing squirrel released within 1 km often returns, so pair it with sealing the entry point. <strong>Skittish animal or feral cat?</strong> The <em>Highest Catch Rate</em> two-door earns its keep. <strong>Raccoon or skunk?</strong> Don’t — call a licensed operator. Start every case with the <Link href="/blog/raccoon-deterrent">deterrence-first plan</Link>.`

- **L238, L278** (same evidence). BuyLink "Medium 1-door (groundhogs)" and size-table row "Medium ... Groundhogs, large squirrels, skunks".
  - L238 before: `<BuyLink tag={AMZ_TAG} search="havahart live animal trap medium">Medium 1-door (groundhogs) →</BuyLink>`
  - L238 after: `<BuyLink tag={AMZ_TAG} search="havahart live animal trap medium">Medium 1-door (rabbits, squirrels) →</BuyLink>`
  - L278 before: `{ size: 'Medium', pick: 'Havahart medium 1-door', target: 'Groundhogs, large squirrels, skunks', doors: '1', search: 'havahart live animal trap medium' },`
  - L278 after: `{ size: 'Medium', pick: 'Havahart medium 1-door', target: 'Rabbits, skunks, squirrels (Havahart)', doors: '1', search: 'havahart live animal trap medium' },`

### Left unchanged, with the reason

- **do-bed-bug-sprays-actually-work, raccoon-and-skunk-proofing-under-a-deck-canada, best-large-capacity-dehumidifier-canada:** no box problem in T3C or T3L (steamer picks; "Box: none wrong"; "no box issue").
- **ThermalStrike search term** 'thermalstrike ranger heated suitcase bed bug' (6 elements: L123, L124, L151, L184, L280, L307): the brief allows `search` changes only for an approved swap, and the product is right. The maker's own Amazon.ca listing is ASIN B07NBVSRG8 if the owner wants the boxes pinned to it.
- **Heat chamber search** 'zappbug original bed bug heater' (L155, L222, L282) kept for the same reason (card 1 also carries ASIN B00F6EV306). Page text still says "ZappBug Original" (L130, L135, the L201 H2, table cell L218, L264; the hero bridges it). Card 3 and its table row and button (L172-177, L232-236, L284) still call the Thermal Strike Ranger a "heated bag" used "on the road", which the Ranger manual contradicts; not flagged for this page by T3C or T3L, so left for the owner.
- **CimeXa buttons not in the flag lists:** Harris L191, L277, L329 and KONK L206, L290 (search 'cimexa insecticide dust'; CimeXa 0 rows in R-api). Same problem as the Oct 25 D-four fixes; for the owner or the next pass. The Harris BuyLinks L184 and L276 still open Harris; the text beside both says no Harris product has a PCP number (not flagged).
- **Katchy:** the Katchy pick itself has no registry record while indoor light traps are registered devices (the page text says so; not in the box list). The 8.3/10 editorial score on an untested product (T3C) is the owner's call. Page text still names TERRO: the L193 H2 and the L236 decision paragraph ("Start with the budget-priced TERRO lure").
- **RESCUE! W·H·Y:** the body BuyLinks L206, L207 (refills), L266 and L341 still open the W·H·Y Trap; they were not in the box list, and the page text (Quick Answer, comparison table, compliance section, FAQs) says no W·H·Y product is in the registry. The hero, Quick Answer and verdict still recommend the W·H·Y with a PCP check. Owner's call.
- **Live trap:** the StickyBuyBar/TopBox (Medium 1078, "For legal on-site release") carry no false wording; whether the top pick should be the Large 1079 for the groundhog case is the owner's call. The two-door "squirrels" flag (card 3, table L280) was not confirmed by T3C (Havahart still lists a Small 2-Door 1025 for squirrels), so it is unchanged.
- **Cluster flies:** card 1 pro "No pesticide — fine in bedrooms and kitchens" (an implied safety line, not flagged).
- **Couch:** card 4 keeps the generic search 'diatomaceous earth bed bugs' (only "Silica" was flagged).

Lines changed in this section: 88 (83 affiliate lines, 5 B-text table cells); none inserted, none deleted.

## Tier 2 box fixes, Oct 29: TTC, deer fence, silverfish, DE, Dupray, PackTite, picaridin, Victor, Wondercide, ant killer, ant traps, fly light, cordless fogger, basement dehumidifier

Agent run of Oct 29, 2026, under FIX-BRIEF.md (owner, Oct 29: "Yes, fix the false product box claims"). The problems come from the "Box claims for the owner" rows for these 14 pages in TIER2-CHECK.md and the box flags in TIER2-LOG.md (TIER3-CHECK.md and TIER3-LOG.md have no rows for them). Each was re-checked against its primary source on Oct 29 before editing. All files are `app/blog/<slug>/page.tsx`.

**69 lines on 12 pages**, replaced one for one (no line added or removed, so each line number holds before and after).

**Checks after editing**, against copies taken before editing (identical to HEAD):
- Each page keeps its line count and its count of `<BuyLink`, `<AwardRow`, `<AwardCard`, `<StickyBuyBar`, `<AmazonLink`, `<TopPick` and `<TopBox`.
- Every `tag` is unchanged, and no `asin` changed.
- The only `search` changes are the three approved swaps on best-cordless-fogger-canada, to a term already on that page.
- Each TopBox still matches its StickyBuyBar.
- `npx tsc --noEmit`: no errors.
- No git, no build.

### bed-bugs-on-the-ttc-toronto (5 lines)
- Reworded to the label (wording fix, no swap: Doktor Doom Travel Pro is registered; only its use site was wrong). TIER2-CHECK, Checker C row "AwardRow card 4, 279-285; whichToBuy 289".
- Evidence for every line unless noted: Health Canada registry, live API read Oct 29: 32254 DOKTOR DOOM TRAVEL PRO BED BUG KILLER, DOMESTIC, current, sites BED, INDOOR, MATTRESSES, pests BED BUGS (https://pest-control.canada.ca/pesticide-registry/en/product-details.html?q=32254). Label 32254 as read Oct 25 (FIX-LOG evidence T-32254): "DO NOT treat bed linens. DO NOT treat clothing."; "Treat mattresses, box springs, bed frames, and headboards"; luggage not mentioned. The bag advice repeats the page's own L427 ("Wipe the bag down ... If it is fabric, and it can take a dryer cycle, give it one").

- **L280** (AwardRow card 4 name)
  - Before: `name: 'PMRA-Registered Travel-Size Bed Bug Spray (for bags, not people)',`
  - After: `name: 'PMRA-Registered Travel-Size Bed Bug Spray (for beds and mattresses, not bags)',`
- **L281** (AwardRow card 4 why)
  - Before: `...ters, home care, moving or cleaning and your bag is repeatedly in real harbourage, a small Canadian-registered aerosol used on the outside seams and zipper channels of a bag has a defensible role. Confirm a PCP registration number on...`
  - After: `...ters, home care, moving or cleaning and are repeatedly in real harbourage, a small Canadian-registered aerosol has a defensible role, but on a bed or mattress, not a bag: Doktor Doom Travel Pro (PCP 32254) lists beds and mattresses as its use sites, and bags and luggage are not on its label. A work bag gets wiped down and, if it can take it, a hot dryer cycle. Confirm a PCP registration number on...` (changed part only; the rest of the line is unchanged)
- **L283** (AwardRow card 4 pros)
  - Before: `pros: ['A registered Canadian option rather than a grey-market US import', 'Small enough to keep in a work bag', 'Treats the item, which is what actually travels'],`
  - After: `pros: ['A registered Canadian option rather than a grey-market US import', 'Small enough to keep in a work bag', 'Listed use sites: beds and mattresses (PCP 32254)'],`
- **L284** (AwardRow card 4 cons)
  - Before: `cons: ['Wrong purchase for an ordinary commuter — a dryer cycle beats it', 'Never for skin, worn clothing or bedding — check the use sites on the label'],`
  - After: `cons: ['Wrong purchase for an ordinary commuter — a dryer cycle beats it', 'Not for bags or luggage, and never for skin, worn clothing or bedding — check the use sites on the label'],`
- **L289** (AwardRow whichToBuy)
  - Before: `...ional Exposure</em> spray earn its place &mdash; our <Link href="/blog/best-bed-bug-spray-for-travel-canada">Canadian travel spray guide</Link> covers what is registered here and how to use it on a bag.`
  - After: `...ional Exposure</em> spray earn its place, and only on a bed or mattress, the use sites on its label &mdash; our <Link href="/blog/best-bed-bug-spray-for-travel-canada">Canadian travel spray guide</Link> covers what is registered here and why heat, not a spray, is the answer for a bag.` (changed part only; the rest of the line is unchanged)

### diatomaceous-earth-canada-buyers-guide (5 lines)
- Wording fixes. Safer's kept (registered, PCP 32278), with a PCP check because the search may open a US or a cancelled bag. TIER2-CHECK, Checker C rows for this page.
- Evidence for every line unless noted: Registry, live API read Oct 29: 32278 SAFER'S ANT & CRAWLING INSECT KILLER, DOMESTIC, current (https://pest-control.canada.ca/pesticide-registry/en/product-details.html?q=32278); 32665 KNOCK DOWN DUST DIATOMACEOUS EARTH, DOMESTIC, current (https://pest-control.canada.ca/pesticide-registry/en/product-details.html?q=32665); 30832 SAFER'S BEDBUG AND FLEA KILLER, Cancelled, 2024-11-12 (https://pest-control.canada.ca/pesticide-registry/en/product-details.html?q=30832). TIER2-CHECK: Home Hardware listing for Safer's 200 g; "most widely stocked" unsourced; US Safer Home bags carry EPA numbers.

- **L116** (StickyBuyBar name)
  - Before: `<StickyBuyBar tag={AMZ_TAG} name="Safer's Diatomaceous Earth insect killer" search="safers insect killing diatomaceous earth" label="Our top pick" />`
  - After: `<StickyBuyBar tag={AMZ_TAG} name="Safer's Ant & Crawling Insect Killer DE (check for PCP 32278)" search="safers insect killing diatomaceous earth" label="Our top pick" />`
- **L117** (TopBox name (mirrors the StickyBuyBar))
  - Before: `<TopBox tag={AMZ_TAG} name="Safer's Diatomaceous Earth insect killer" search="safers insect killing diatomaceous earth" label="Our top pick" />`
  - After: `<TopBox tag={AMZ_TAG} name="Safer's Ant & Crawling Insect Killer DE (check for PCP 32278)" search="safers insect killing diatomaceous earth" label="Our top pick" />`
- **L149** (AwardRow Best Overall why)
  - Before: `why: 'The most widely stocked PMRA-registered domestic-class DE in Canada. Its label legally covers indoor crawling-insect use, so you get tested directions instead of internet folklore.',`
  - After: `why: 'A PMRA-registered domestic-class DE, Safer’s Ant & Crawling Insect Killer (PCP 32278), stocked by Canadian chains such as Home Hardware. Its label legally covers indoor crawling-insect use, so you get label directions instead of internet folklore. Check the bag for PCP 32278: a US-market Safer Home bag carries an EPA number instead, and Safer’s Bedbug and Flea Killer (PCP 30832) was cancelled in 2024.',`
- **L159** (AwardRow Best Value why)
  - Before: `why: 'The same amorphous-silica, same registration, often at a budget-friendly price. A correct buy whenever Safer’s is out of stock.',`
  - After: `why: 'The same amorphous silica under its own registration (Knock Down Dust Diatomaceous Earth, PCP 32665), often at a budget-friendly price. A correct buy whenever Safer’s is out of stock.',`
  - Evidence: Knock Down has its own registration, 32665, not Safer's 32278 (https://pest-control.canada.ca/pesticide-registry/en/product-details.html?q=32665).
- **L186** (AwardRow whichToBuy)
  - Before: `<strong>Want the safe default?</strong> The <em>Best Overall</em> Safer&rsquo;s is the easiest registered DE to find. <strong>Watching the budget?</strong>...`
  - After: `<strong>Want the easy default?</strong> The <em>Best Overall</em> Safer&rsquo;s is a registered DE stocked by Canadian chains; check the bag for PCP 32278. <strong>Watching the budget?</strong>...` (changed part only; the rest of the line is unchanged)
  - Evidence: "safe" is banned (TIER2-CHECK: DIR2016-01); "the easiest registered DE to find" is the same unsourced claim as "most widely stocked"; PCP check as above.

### dupray-steamer-review-canada (4 lines)
- Wording fixes. The Neat is kept (a steamer needs no registration, and the owner's Sep 2 decision kept the search links, per data/god-build/research/top3/dupray-steamer-review-canada.md); the boxes now carry the recall check. TIER2-CHECK, Checker C rows for this page. Score 9.1 left.
- Evidence for every line unless noted: Health Canada recall notice, read Oct 29 (https://recalls-rappels.canada.ca/en/alert-recall/dupray-neat-steam-cleaner-recalled-due-burn-hazard): importer Dupray Industries Inc., Montreal; manufacturer NVision Electrical Appliance Co. Ltd.; "Manufactured in China"; model DUP020WNA, "batch/date numbers 0118-01 through 0425-05"; recall date 2026-02-26. Dupray recall page (https://www.dupray.com/recall): the numbers "are printed on the rating label located at the bottom of your Neat Steam Cleaner".

- **L117** (StickyBuyBar name)
  - Before: `<StickyBuyBar tag={AMZ_TAG} name="Dupray Neat steam cleaner" search="dupray neat steam cleaner" label="Reviewed here" />`
  - After: `<StickyBuyBar tag={AMZ_TAG} name="Dupray Neat steam cleaner: check the batch code (2026 recall)" search="dupray neat steam cleaner" label="Reviewed here" />`
- **L118** (TopBox name (mirrors the StickyBuyBar))
  - Before: `<TopBox tag={AMZ_TAG} name="Dupray Neat steam cleaner" search="dupray neat steam cleaner" label="Reviewed here" />`
  - After: `<TopBox tag={AMZ_TAG} name="Dupray Neat steam cleaner: check the batch code (2026 recall)" search="dupray neat steam cleaner" label="Reviewed here" />`
- **L144** (TopPick blurb)
  - Before: `blurb="A Canadian-made, boiler-driven dry-vapour steamer that hits the two specs pest work actua...`
  - After: `blurb="A boiler-driven dry-vapour steamer from Montreal-based Dupray (made in China, says Health Canada’s recall notice) that hits the two specs pest work actua...` (changed part only; the rest of the line is unchanged)
- **L149** (TopPick cons (item added at the front))
  - Before: `cons={['Premium price vs impulse-buy handhelds', 'Corded and needs a few minutes to build pressure', 'Only treats surfaces the nozzle can reach']}`
  - After: `cons={['Batch codes 0118-01 to 0425-05 recalled Feb 26, 2026: check the label under the base', 'Premium price vs impulse-buy handhelds', 'Corded and needs a few minutes to build pressure', 'Only treats surfaces the nozzle can reach']}`

### packtite-portable-review-canada (6 lines)
- Wording fixes to the current model and its listing; search unchanged. TIER2-CHECK, Checker C row "StickyBuyBar 117, TopBox 118, TopPick 141-151".
- Evidence for every line unless noted: Solutions Stores PackTite 2 listing, read Oct 29 (https://www.solutionsstores.com/packtite-2-bed-bug-killing-heat-system): "Packtite 2 Bed Bug Killing Heat System"; "Kills all bedbug life in the heat range of 120-150 degrees F"; "reaches 120 degrees F and holds that temperature for 1 hour"; "can be used to treat luggage, backpacks and other carrying cases"; "Dimensions: 36" L x 19" W x 24" H". Thermometer in the centre of the load: same listing, per TIER2-CHECK.

- **L117** (StickyBuyBar name)
  - Before: `<StickyBuyBar tag={AMZ_TAG} name="PackTite Portable bed-bug heater" search="packtite portable bed bug heater" label="Best for small items & travel" />`
  - After: `<StickyBuyBar tag={AMZ_TAG} name="PackTite 2 portable bed-bug heater" search="packtite portable bed bug heater" label="Best for small items & travel" />`
- **L118** (TopBox name (mirrors the StickyBuyBar))
  - Before: `<TopBox tag={AMZ_TAG} name="PackTite Portable bed-bug heater" search="packtite portable bed bug heater" label="Best for small items & travel" />`
  - After: `<TopBox tag={AMZ_TAG} name="PackTite 2 portable bed-bug heater" search="packtite portable bed bug heater" label="Best for small items & travel" />`
- **L143** (TopPick name)
  - Before: `name="PackTite Portable (folding bed-bug heat chamber)"`
  - After: `name="PackTite 2 (folding bed-bug heat chamber)"`
- **L144** (TopPick blurb)
  - Before: `...rb="A proven, folding heat chamber that reaches a sustained 120–140°F to kill bed bugs and eggs on non-launderable items — shoes, books, bags, and travel gear. It packs flat, runs a chemical-free cycle, and does its narrow job well. Marked down only for its small capacity (no mattresses or full suitcases) and intermittent Canadian stock. If...`
  - After: `...rb="A proven, folding heat chamber that kills bed bugs and eggs on non-launderable items — shoes, books, bags, luggage and travel gear; its listing gives a 120–150°F kill range and says to hold the centre of the load at 120°F for an hour. It packs flat, runs a chemical-free cycle, and does its narrow job well. Marked down only for its size (36 x 19 x 24 in, so no mattresses) and intermittent Canadian stock. If...` (changed part only; the rest of the line is unchanged)
- **L147** (TopPick pros (first item))
  - Before: `pros={['Sustained 120–140°F kills every life stage, eggs included', 'Folds flat — ideal for travel and sm...`
  - After: `pros={['Kills every life stage, eggs included: 120–150°F, centre of the load held at 120°F for 1 hour (PackTite 2 listing)', 'Folds flat — ideal for travel and sm...` (changed part only; the rest of the line is unchanged)
- **L148** (TopPick cons (first item))
  - Before: `cons={['Small chamber — no mattresses, duvets, or full suitcases', 'Canadian stock is intermittent and import pricing swings', 'Dense loads need long cycles; must verify core temperature', 'Not for electronics, batteries, aerosols, or heat-sensitive items']}`
  - After: `cons={['Small chamber (36 x 19 x 24 in) — no mattresses or duvets', 'Canadian stock is intermittent and import pricing swings', 'Dense loads need long cycles; must verify core temperature', 'Not for electronics, batteries, aerosols, or heat-sensitive items']}`

### picaridin-vs-deet (8 lines)
- Wording fixes; searches unchanged. The OFF! card is relabelled, not swapped: no OFF! icaridin search term exists on this page, and Natrapel and Sawyer already have their own cards. TIER2-CHECK, Checker C rows for this page.
- Evidence for every line unless noted: Registry, live API read Oct 29: 30155 OFF! DEEP WOODS INSECT REPELLENT 9 and 33575 OFF! DEEP WOODS INSECT REPELLENT 10 (icaridin 20%, DOMESTIC, current; https://pest-control.canada.ca/pesticide-registry/en/product-details.html?q=30155, https://pest-control.canada.ca/pesticide-registry/en/product-details.html?q=33575); 33032 SAWYER ICARIDIN INSECT REPELLENT PUMP SPRAY and 33177 SAWYER ICARIDIN INSECT REPELLENT PRESSURIZED SPRAY-BOV (https://pest-control.canada.ca/pesticide-registry/en/product-details.html?q=33032, https://pest-control.canada.ca/pesticide-registry/en/product-details.html?q=33177), the only current Sawyer registrations in the Oct 23 extract; 34244 NATRAPEL ICARIDIN and 34555 NATRAPEL ICARIDIN SPRAY (https://pest-control.canada.ca/pesticide-registry/en/product-details.html?q=34244, https://pest-control.canada.ca/pesticide-registry/en/product-details.html?q=34555). No product name in the extract combines OFF! and DEFENSE. Canadian Paediatric Society (https://caringforkids.cps.ca/handouts/safety-and-injury-prevention/insect_repellents, cited on the page): icaridin up to 20% about 5-7 h, DEET up to 30% 5-8 h, both protect against ticks.

- **L117** (StickyBuyBar name)
  - Before: `<StickyBuyBar tag={AMZ_TAG} name="Picaridin 20% insect repellent (Natrapel / OFF! Defense / Sawyer)" search="natrapel picaridin insect repellent" label="Our top pick" />`
  - After: `<StickyBuyBar tag={AMZ_TAG} name="Picaridin 20% insect repellent (Natrapel / OFF! Deep Woods / Sawyer)" search="natrapel picaridin insect repellent" label="Our top pick" />`
- **L118** (TopBox name (mirrors the StickyBuyBar))
  - Before: `<TopBox tag={AMZ_TAG} name="Picaridin 20% insect repellent (Natrapel / OFF! Defense / Sawyer)" search="natrapel picaridin insect repellent" label="Our top pick" />`
  - After: `<TopBox tag={AMZ_TAG} name="Picaridin 20% insect repellent (Natrapel / OFF! Deep Woods / Sawyer)" search="natrapel picaridin insect repellent" label="Our top pick" />`
- **L137** (TopPick name)
  - Before: `name="Picaridin 20% (Natrapel, OFF! Defense, or Sawyer)"`
  - After: `name="Picaridin 20% (Natrapel, OFF! Deep Woods 9 or 10, or Sawyer)"`
- **L138** (TopPick blurb)
  - Before: `...blurb="The winner for most Canadians — the same 5–8 hour mosquito and 8-hour tick protection as DEET 30%, but non-greasy, odourless, and won’t damage...`
  - After: `...blurb="The winner for most Canadians — it repels ticks and protects against mosquitoes for about 5–7 hours at up to 20% (the Canadian Paediatric Society gives DEET at up to 30% about 5–8 hours), and it is non-greasy, odourless, and won’t damage...` (changed part only; the rest of the line is unchanged)
- **L272** (Natrapel card text (card BuyLink L273))
  - Before: `<p className="text-sm text-gray-600 mt-1 mb-3 flex-1">Outdoor-store favourite &mdash; pump or continuous spray, travel-friendly, stocked at MEC and Atmosphere.</p>`
  - After: `<p className="text-sm text-gray-600 mt-1 mb-3 flex-1">Outdoor-store favourite &mdash; pump or continuous spray, travel-friendly, stocked at MEC. Check the bottle for PCP 34244 or 34555.</p>`
  - Evidence: MEC search, read Oct 29 (https://www.mec.ca/en/search?q=natrapel): one Natrapel product, "Insect Repellent Pump Spray 37ml". atmosphere.ca, read Oct 29 (https://www.atmosphere.ca/): "Atmosphere Consolidation Notice" and "We have consolidated our operations under our parent company, Sport Chek". PCP numbers as above.
- **L276** (OFF! card name (card BuyLink L278))
  - Before: `<p className="font-extrabold text-brand-900">OFF! Defense Picaridin</p>`
  - After: `<p className="font-extrabold text-brand-900">OFF! Deep Woods 9 or 10 (icaridin)</p>`
- **L277** (OFF! card text)
  - Before: `...text-sm text-gray-600 mt-1 mb-3 flex-1">Most-stocked pharmacy pick &mdash; lotion or spray, budget-friendly, easy to find at Shoppers and Canadian Tire.</p>`
  - After: `...text-sm text-gray-600 mt-1 mb-3 flex-1">No OFF! product called Defense is registered in Canada; S.&nbsp;C. Johnson&rsquo;s 20% icaridin repellents here are OFF! Deep Woods Insect Repellent 9 (PCP 30155) and 10 (33575). Check the bottle for one of those numbers: a US OFF! bottle carries an EPA number instead.</p>` (changed part only; the rest of the line is unchanged)
- **L282** (Sawyer card text (card BuyLink L283))
  - Before: `...text-sm text-gray-600 mt-1 mb-3 flex-1">Long-lasting lotion loved by hikers and travellers &mdash; one application covers a full day outdoors.</p>`
  - After: `...text-sm text-gray-600 mt-1 mb-3 flex-1">Pump or pressurized spray loved by hikers and travellers: Canada&rsquo;s two Sawyer registrations are both 20% icaridin sprays (PCP 33032 and 33177), and no Sawyer lotion is registered here. About 5&ndash;7 hours against mosquitoes (Canadian Paediatric Society).</p>` (changed part only; the rest of the line is unchanged)

### victor-electronic-mouse-trap-review-canada (2 lines)
- Wording fixes to the maker page (same fix as best-mouse-trap-canada on Oct 25). TIER2-CHECK, Checker C row "TopPick blurb 183, pros 186".
- Evidence for every line unless noted: Victor CM250B page, read Oct 29 (https://www.victorpest.com/victor-electronic-mouse-trap-cm250b): "Quickly kills mice with a humane, high-voltage shock"; "Kills Per Setting: 1"; no kills-per-battery figure; 4 AA batteries (not included); low battery: red light flashes every 10 seconds.

- **L183** (TopPick blurb)
  - Before: `...n Canada: an enclosed kill chamber that shocks in seconds, delivers up to 100 kills per set of 4 AA batteries, and empties into the ga...`
  - After: `...n Canada: an enclosed kill chamber that quickly kills with a high-voltage shock, takes one mouse per setting on 4 AA batteries, and empties into the ga...` (changed part only; the rest of the line is unchanged)
- **L186** (TopPick pros (third item))
  - Before: `pros={['No-touch, no-see disposal', 'Fast, consistent kill inside an enclosed chamber', 'Up to 100 kills per battery set — a full season or more', 'Kid- and pet-resistant; circuit cuts when the lid opens']}`
  - After: `pros={['No-touch, no-see disposal', 'Fast, consistent kill inside an enclosed chamber', 'Runs on 4 AA batteries; a red light flags when they run low', 'Kid- and pet-resistant; circuit cuts when the lid opens']}`

### wondercide-canada-review (9 lines)
- Relabelled, not swapped: no Wondercide product is registered, and no registered flea or tick product has a search term on this page (its other terms are Wondercide lines, a consumer permethrin clothing spray, a flea comb and a tick tool). Searches unchanged. TIER2-CHECK, Checker C rows for this page. Score 7.6 left.
- Evidence for every line unless noted: Registry: no product or registrant named Wondercide (TIER2-CHECK, live API Oct 28; Oct 23 extract: 0 rows). Health Canada, as quoted on the page (L270): "If the product label does not have a PCP registration number, do not buy or use it", and unregistered pesticides' "safety and effectiveness have not been reviewed by Health Canada". The page's own verdict (L342) sends pets to a vet-recommended or registered product.

- **L102** (StickyBuyBar label)
  - Before: `<StickyBuyBar tag={AMZ_TAG} name="Wondercide Flea & Tick Spray (cedarwood + lemongrass)" search="wondercide flea and tick spray" label="Best for pets" />`
  - After: `<StickyBuyBar tag={AMZ_TAG} name="Wondercide Flea & Tick Spray (cedarwood + lemongrass)" search="wondercide flea and tick spray" label="Reviewed here · not registered in Canada" />`
- **L103** (TopBox label (mirrors the StickyBuyBar))
  - Before: `<TopBox tag={AMZ_TAG} name="Wondercide Flea & Tick Spray (cedarwood + lemongrass)" search="wondercide flea and tick spray" label="Best for pets" />`
  - After: `<TopBox tag={AMZ_TAG} name="Wondercide Flea & Tick Spray (cedarwood + lemongrass)" search="wondercide flea and tick spray" label="Reviewed here · not registered in Canada" />`
- **L110** (Quick Answer line holding a BuyLink)
  - Before: `...<strong>Available but limited, and worth it mainly for pets and personal use &mdash; not as your only yard tick solution.</strong> Wondercide is a US natural brand built on cedarwood oil (plus lemongrass and sesame oil in the pet sprays), and in Canada it is sold mostly through third-party sellers on <BuyLink tag={AMZ_TAG} search="wondercide flea and tick spray">Amazon.ca</BuyLink> rather than big-box retail, at a premium over US pricing. The cedar-oil formula genuinely kills and repels ticks, fleas, and mosquitoes on contact...`
  - After: `...<strong>Available but limited, not registered in Canada, and not your only yard tick solution.</strong> Wondercide is a US natural brand built on cedarwood oil (plus lemongrass and sesame oil in the pet sprays), and in Canada it is sold mostly through third-party sellers on <BuyLink tag={AMZ_TAG} search="wondercide flea and tick spray">Amazon.ca</BuyLink> rather than big-box retail, at a premium over US pricing. The cedar-oil formula is sold to kill and repel ticks, fleas, and mosquitoes on contact...` (changed part only; the rest of the line is unchanged)
- **L129** (TopPick label)
  - Before: `label="Our Top Pick"`
  - After: `label="Reviewed Here — Not Registered in Canada"`
- **L131** (TopPick blurb)
  - Before: `blurb="Where Wondercide genuinely shines: a gentle, ready-to-use cedar-oil spray for the dog, the cat's bedding, and indoor surfaces. It kills and repels fleas and ticks on contact, and it is the line Wondercide fans actually love. Just treat it as a knockdown for the pet and the person — not a set-and-forget yard barrier."`
  - After: `blurb="The Wondercide product most buyers come for: a ready-to-use cedar-oil spray sold for the dog, the cat's bedding and indoor surfaces as a contact flea and tick spray. It is not registered in Canada: Health Canada's registry lists no Wondercide product, and Health Canada says not to buy or use a pesticide whose label has no PCP registration number. For the pet itself, ask your vet or use a registered product labelled for that species."`
- **L134** (TopPick pros)
  - Before: `pros={['Cedar-oil formula made for pets, bedding, and furniture', 'Genuinely kills & repels fleas and ticks on contact', 'Ready-to-use — great for spot-treating the dog, bedding, and couch']}`
  - After: `pros={['Cedar-oil formula sold for pets, bedding, and furniture', 'Sold as a contact flea and tick spray', 'Ready-to-use bottle']}`
- **L135** (TopPick cons)
  - Before: `cons={['Essential oils break down within days — needs frequent reapplication', 'Not a long-residual yard barrier; overwhelmed under heavy pressure']}`
  - After: `cons={['Not registered in Canada: no PCP number on the label', 'Essential oils break down within days — needs frequent reapplication', 'Not a long-residual yard barrier; overwhelmed under heavy pressure']}`
- **L262** (Paragraph holding a BuyLink)
  - Before: `...yard? The <strong>Concentrate</strong> is cheaper per gallon than the ready-to-spray bottles, but remember you will re-mix and re-apply often thro...`
  - After: `...yard? The <strong>Concentrate</strong> mixes multiple gallons, but like every Wondercide product it has no Canadian registration, and you will re-mix and re-apply often thro...` (changed part only; the rest of the line is unchanged)
  - Evidence: The per-gallon price comparison is unverified (TIER2-CHECK), and the page itself says "We do not quote prices" (FAQ). "Mixes multiple gallons" is the page's own table cell (L249). Registration as above.
- **L269** (Paragraph holding a BuyLink)
  - Before: `...5(b) list. The practical result is that Wondercide yard products are not registered Canadian pesticides, and you buy them as imported goods thr...`
  - After: `...5(b) list. The practical result is that no Wondercide product, pet or yard, is a registered Canadian pesticide, and you buy them as imported goods thr...` (changed part only; the rest of the line is unchanged)
  - Evidence: No Wondercide product of any kind is registered (registry as above; the page's own L270 says so); the old line implied only the yard products were unregistered.

### best-ant-killer (14 lines)
- Combat reworded, not swapped: no registered protein or grease bait has a search term on this page or a sibling (grep of app/: the ant bait terms are TERRO liquid, TERRO stakes, Combat, borax stations, a generic gel and a Raid spray). Doktor Doom House & Garden is registered, so it is reworded to its active ingredient. Searches unchanged. TIER2-CHECK, ant-killer checker rows for this page.
- Evidence for every line unless noted: Registry, live API read Oct 29: 26467 COMBAT ANT KILLING SYSTEM, Cancelled, expiry 2006-05-31, Historical (https://pest-control.canada.ca/pesticide-registry/en/product-details.html?q=26467); the Oct 23 extract has no other Combat ant product. 26140 DOKTOR DOOM HOUSE & GARDEN INSECTICIDE SPRAY, DOMESTIC, current, PERMETHRIN 0.25%, pests include ANTS, sites include INDOOR and OUTDOOR (https://pest-control.canada.ca/pesticide-registry/en/product-details.html?q=26140).

- **L174** (AwardRow Best for Grease Feeders name)
  - Before: `name: 'Combat Ant Killing Bait Stations (solid protein bait)',`
  - After: `name: 'Combat Ant Killing Bait Stations (solid protein bait; not registered in Canada)',`
- **L175** (AwardRow Best for Grease Feeders why)
  - Before: `...it is often what unlocks the job. Combat is an enclosed solid-bait line stocked by Canadian hardware and grocery retailers, sold here with Canadian label directions and a PCP registration number on the pack.',`
  - After: `...it is often what unlocks the job. Combat’s ant bait is not registered in Canada: its registration (Combat Ant Killing System, PCP 26467) was cancelled in 2006, so a Combat pack on sale here has no Canadian label. For the protein station, buy one whose pack shows a Canadian PCP number and the DOMESTIC class.',` (changed part only; the rest of the line is unchanged)
- **L177** (AwardRow Best for Grease Feeders pros)
  - Before: `pros: ['Addresses a common "bait is not working" case', 'Runs alongside liquid bait — not instead of it', 'Same enclosed-station safety format, sold on Canadian shelves'],`
  - After: `pros: ['Addresses a common "bait is not working" case', 'Runs alongside liquid bait — not instead of it', 'Enclosed station format'],`
- **L178** (AwardRow Best for Grease Feeders cons)
  - Before: `cons: ['Useless if the colony is currently sugar-feeding', 'Slower uptake than liquid for most Canadian house ants', 'Marketplace listings can mix Canadian and US packs — buy the one showing a PCP number'],`
  - After: `cons: ['Useless if the colony is currently sugar-feeding', 'Slower uptake than liquid for most Canadian house ants', 'Not registered in Canada (PCP 26467 cancelled in 2006): buy a protein bait whose pack shows a PCP number'],`
- **L182** (AwardRow Best Emergency Knockdown name)
  - Before: `name: 'Short-Residual Contact Spray (Doktor Doom House & Garden)',`
  - After: `name: 'Contact Spray (Doktor Doom House & Garden, permethrin)',`
- **L183** (AwardRow Best Emergency Knockdown why)
  - Before: `...den aerosol is a domestic-class product sold here under a Canadian PCP registration number — a pyrethrin-type knockdown rather than the long-residual pyrethroid barrier that sabotages baiting. That distinction is the whole reason this is the spray on the list. Treat the one spot, wash it, then bait...`
  - After: `...den aerosol is a domestic-class product registered in Canada (PCP 26140). Its active is permethrin (0.25%), a synthetic pyrethroid rather than a short-lived pyrethrin, so it belongs on the one spot only, never on the trail your bait needs. Treat the one spot, wash it, then bait...` (changed part only; the rest of the line is unchanged)
- **L185** (AwardRow Best Emergency Knockdown pros)
  - Before: `pros: ['Genuine seconds-fast knockdown for a contained situation', 'Pyrethrin-based aerosols break down fast in light and air', 'Canadian brand, domestic class, PCP number on the can'],`
  - After: `pros: ['Genuine seconds-fast knockdown for a contained situation', 'Ants are on its registration, indoors and out (PCP 26140)', 'Canadian brand, domestic class, PCP number on the can'],`
- **L186** (AwardRow Best Emergency Knockdown cons)
  - Before: `cons: ['Kills only what it wets — the nest is untouched', 'Overuse causes bait refusal and, in some species, budding', 'Short residual by design — it prevents nothing, so bait still has to follow'],`
  - After: `cons: ['Kills only what it wets — the nest is untouched', 'Overuse causes bait refusal and, in some species, budding', 'A pyrethroid (permethrin), not a short-residual pyrethrin — spray one spot, wash it, and bait still has to follow'],`
- **L207** (AwardRow whichToBuy)
  - Before: `...</strong> The colony is on protein: run the <em>Best for Grease Feeders</em> station beside it rather than switching. <strong>Need something gone in the nex...`
  - After: `...</strong> The colony is on protein: run a protein bait station whose pack shows a Canadian PCP number beside it rather than switching (the <em>Best for Grease Feeders</em> Combat pick no longer has one). <strong>Need something gone in the nex...` (changed part only; the rest of the line is unchanged)
- **L241** (Table row product cell (row of the Combat BuyLink, L245))
  - Before: `<td className="px-4 py-3 font-bold text-brand-800">Protein / grease bait<br /><span className="font-normal text-xs text-gray-500">Combat Ant Killing Bait Stations</span></td>`
  - After: `<td className="px-4 py-3 font-bold text-brand-800">Protein / grease bait<br /><span className="font-normal text-xs text-gray-500">Combat Ant Killing Bait Stations; not registered in Canada</span></td>`
- **L262** (Table row product cell (row of the Doktor Doom BuyLink, L266))
  - Before: `<td className="px-4 py-3 font-bold text-brand-800">Contact aerosol<br /><span className="font-normal text-xs text-gray-500">Short-residual knockdown</span></td>`
  - After: `<td className="px-4 py-3 font-bold text-brand-800">Contact aerosol<br /><span className="font-normal text-xs text-gray-500">Spot knockdown</span></td>`
- **L345** (BuyLink text)
  - Before: `<BuyLink tag={AMZ_TAG} search="combat ant killing bait stations">Combat protein bait stations →</BuyLink>`
  - After: `<BuyLink tag={AMZ_TAG} search="combat ant killing bait stations">Combat protein bait stations (not registered in Canada) →</BuyLink>`
- **L364** (BuyLink text)
  - Before: `<BuyLink tag={AMZ_TAG} search="doktor doom house and garden insect spray">Check short-residual contact sprays on Amazon.ca →</BuyLink>`
  - After: `<BuyLink tag={AMZ_TAG} search="doktor doom house and garden insect spray">Check Doktor Doom House &amp; Garden (permethrin) on Amazon.ca →</BuyLink>`
- **L395** (BuyLink text)
  - Before: `<BuyLink tag={AMZ_TAG} search="combat ant killing bait stations">Check Combat protein bait stations on Amazon.ca →</BuyLink>`
  - After: `<BuyLink tag={AMZ_TAG} search="combat ant killing bait stations">Check Combat protein bait stations on Amazon.ca (not registered in Canada) →</BuyLink>`

### best-ant-traps-canada (2 lines)
- Wording fix. The checker's "unverified" child-resistant claim was re-verified against TERRO's own page. TIER2-CHECK row "AwardRow Best Overall 156-160".
- Evidence for every line unless noted: TERRO Liquid Ant Baits (T300) page, read Oct 29 (https://www.terro.com/terro-liquid-ant-baits-t300): usage note "Place bait in areas inaccessible to children and pets"; no child-resistant statement. Health Canada ants page (cited on the page): bait stations out of the reach of children and pets.

- **L157** (AwardRow Best Overall why)
  - Before: `...cting borax-family active, held inside a child-resistant plastic housing you set directly on the...`
  - After: `...cting borax-family active, held inside an enclosed plastic housing you set directly on the...` (changed part only; the rest of the line is unchanged)
- **L160** (AwardRow Best Overall pros (third item))
  - Before: `...refer', 'Enclosed housing suits kitchens, homes with kids and pets', 'Among the least expensive products i...`
  - After: `...refer', 'Enclosed housing suits kitchens (TERRO says to place it where children and pets cannot reach)', 'Among the least expensive products i...` (changed part only; the rest of the line is unchanged)

### best-commercial-fly-light-trap-canada (2 lines)
- Wording fixes. TIER2-CHECK row "AwardRow Best Overall 149". Editorial scores left.
- Evidence for every line unless noted: BASF news release of Oct 1, 2020, read Oct 29 (https://www.basf.com/us/en/media/news-releases/2020/10/basf-divests-its-global-vector-light-fly-trap-portfolio-to-ap-g-.html): "BASF announced the divestiture of its entire global Vector® insect light fly trap business to AP&G, Co., Inc."; AP&G: "We are thrilled to add the Vector brand to the Catchmaster® portfolio." The release does not mention Rentokil.

- **L149** (AwardRow Best Overall why)
  - Before: `why: 'A Rentokil professional brand built around food-safety auditing: shatterproof lamps, high glue-board su...`
  - After: `why: 'A professional fly-light line built around food-safety auditing, part of AP&G’s Catchmaster portfolio since BASF divested its Vector business in October 2020: shatterproof lamps, high glue-board su...` (changed part only; the rest of the line is unchanged)
- **L153** (AwardRow Best Overall pros (first item))
  - Before: `pros: ['Shatterproof lamp — food-safe compliant', 'High glue-board catch surface', 'Recognized by auditors and inspectors'],`
  - After: `pros: ['Shatterproof lamp', 'High glue-board catch surface', 'Recognized by auditors and inspectors'],`
  - Evidence: TIER2-CHECK flags "food-safe compliant" (pros): an unsourced compliance claim in "safe" wording. Shatterproof lamps are on the Vector 30 listing the checker read.

### best-cordless-fogger-canada (7 lines)
- Approved swap (the product does not exist): every "hudson cordless ulv fogger" element now uses "cordless battery ulv fogger", the term this page already uses for its Best overall pick (StickyBuyBar L119, TopBox L120). Element types, positions, tags and counts unchanged. TIER2-CHECK row "AwardRow Best Overall 148-151; BuyLinks 217, 264". Editorial scores left.
- Evidence for every line unless noted: H.D. Hudson catalogue, read Oct 29 (https://www.hdhudson.com/product-category/commercial-products/ pages 1-2 and https://www.hdhudson.com/product-category/residential-products/ pages 1-2): sprayers, hoses and spray guns; the only atomizer is the Hudson 2 Gallon Atomizer (#99598), which TIER2-CHECK found "Operates on 110 AC Power". Site search "fogger": "No products were found"; "cordless": none; "battery": only a dual-power inflator.

- **L148** (AwardRow Best Overall name)
  - Before: `name: 'Hudson-Style Cordless ULV Fogger',`
  - After: `name: 'Cordless Battery ULV Fogger',`
- **L149** (AwardRow Best Overall why)
  - Before: `why: 'A cordless ULV cold fogger from a maker like Hudson hits the sweet spot: a fine adjustable...`
  - After: `why: 'A battery-powered cordless ULV cold fogger hits the sweet spot: a fine adjustable...` (changed part only; the rest of the line is unchanged)
- **L150** (AwardRow Best Overall search (swap))
  - Before: `search: 'hudson cordless ulv fogger',`
  - After: `search: 'cordless battery ulv fogger',`
- **L186** (AwardRow whichToBuy)
  - Before: `...ger?</strong> The <em>Best Overall</em> Hudson-style ULV unit covers the widest range of Can...`
  - After: `...ger?</strong> The <em>Best Overall</em> cordless battery ULV unit covers the widest range of Can...` (changed part only; the rest of the line is unchanged)
- **L213** (Table row product cell (row of the swapped BuyLink, L217))
  - Before: `<td className="px-4 py-3 font-bold text-brand-800">Cordless ULV (Hudson-style)<br /><span className="font-normal text-xs text-gray-500">handheld / shoulder</span></td>`
  - After: `<td className="px-4 py-3 font-bold text-brand-800">Cordless battery ULV<br /><span className="font-normal text-xs text-gray-500">handheld / shoulder</span></td>`
- **L217** (Table BuyLink search (swap))
  - Before: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="hudson cordless ulv fogger" block>Check price on Amazon.ca →</BuyLink></td>`
  - After: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="cordless battery ulv fogger" block>Check price on Amazon.ca →</BuyLink></td>`
- **L264** (BuyLink search and text (swap))
  - Before: `<BuyLink tag={AMZ_TAG} search="hudson cordless ulv fogger">Cordless ULV (Hudson-style) →</BuyLink>`
  - After: `<BuyLink tag={AMZ_TAG} search="cordless battery ulv fogger">Cordless battery ULV →</BuyLink>`

### best-dehumidifier-for-basement-canada (5 lines)
- Wording fix ("Energy Star" removed); the pick and its search are kept (an appliance; the product exists). TIER2-CHECK row "StickyBuyBar 123, TopBox 124, AwardRow Best Overall 152-157".
- Evidence for every line unless noted: ENERGY STAR certified dehumidifiers dataset (Version 6.0), queried Oct 29 (https://data.energystar.gov/resource/mgiu-hu4z.json): hOmeLabs HME0088 (24.48 pints/day) and HME0089 (32.46) are partner Aterian's only models; no 50-pint hOmeLabs. Midea MAD50S1QWT-A (the Midea Cube, 49.67 pints/day) is listed for the United States and Canada.

- **L123** (StickyBuyBar name)
  - Before: `<StickyBuyBar tag={AMZ_TAG} name="hOmeLabs 50-Pint Energy Star Dehumidifier" search="homelabs 50 pint dehumidifier" label="Best overall" />`
  - After: `<StickyBuyBar tag={AMZ_TAG} name="hOmeLabs 50-Pint Dehumidifier" search="homelabs 50 pint dehumidifier" label="Best overall" />`
- **L124** (TopBox name (mirrors the StickyBuyBar))
  - Before: `<TopBox tag={AMZ_TAG} name="hOmeLabs 50-Pint Energy Star Dehumidifier" search="homelabs 50 pint dehumidifier" label="Best overall" />`
  - After: `<TopBox tag={AMZ_TAG} name="hOmeLabs 50-Pint Dehumidifier" search="homelabs 50 pint dehumidifier" label="Best overall" />`
- **L152** (AwardRow Best Overall name)
  - Before: `name: 'hOmeLabs 50-Pint Energy Star Dehumidifier',`
  - After: `name: 'hOmeLabs 50-Pint Dehumidifier',`
- **L153** (AwardRow Best Overall why)
  - Before: `...hold 45–50% RH, a continuous-drain port, auto-defrost for cool basements, and Energy Star efficiency so the season-long running cost stays reasonable.',`
  - After: `...hold 45–50% RH, a continuous-drain port and auto-defrost for cool basements. It is not on ENERGY STAR’s certified list, which names only two smaller hOmeLabs models; for a certified 50-pint unit, see the Midea Cube.',` (changed part only; the rest of the line is unchanged)
- **L157** (AwardRow Best Overall pros (third item))
  - Before: `pros: ['Right capacity for most basements', 'Continuous gravity-drain hose port', 'Auto-defrost + Energy Star efficiency'],`
  - After: `pros: ['Right capacity for most basements', 'Continuous gravity-drain hose port', 'Auto-defrost for cool basements'],`

### Left unchanged, with the reason

**No wrong box claim found:**
- **best-deer-fence-for-gardens-canada:** TIER2-CHECK: ok. Fit note for the owner: the Best Overall box is 7 ft netting ("Seven feet clears the jump threshold"; pro "Clears the 6 ft jump threshold"). Ontario's fencing page gives 96 in. and UVM Extension "at least 8 feet"; the Oregon Ask Extension answer accepts 7 ft.
- **best-silverfish-traps:** TIER2-CHECK: ok. Seen but not in the findings: the AwardRow pro "Safer around pets and toddlers than an open board" (L233).

**Not in the findings, left for the owner:**
- **Editorial scores on units we have not tested.** Fly light 9.1-7.9, cordless fogger 8.9-7.0, Dupray 9.1, Victor 8.9, PackTite 8.4, picaridin 9.0, Wondercide 7.6. They are not a false claim in the checks; removing them is the owner's call.
- **best-commercial-fly-light-trap-canada:** "food-safe" also appears in card 4's pros (L180, "Food-safe glue-board capture") and in two table cells (L222, L229). Only card 1's "food-safe compliant" was in the findings.
- **best-dehumidifier-for-basement-canada:** whichToBuy L190 says "the safe default" (an appliance, not a pesticide).
- **wondercide-canada-review:** L339 BuyLink "Check permethrin clothing and gear treatments" (search "permethrin clothing spray"). PHAC says permethrin liquids and sprays for consumers to treat their own clothing are not approved for use in Canada (the source the TTC checker used).
- **victor-electronic-mouse-trap-review-canada:** the boxes still say "Victor M250S"; Victor's page now lists the CM250B (M250B).
- **packtite-portable-review-canada:** the BuyLink text at L238 ("PackTite Portable →") and the table row at L173 still say "PackTite Portable"; only the StickyBuyBar, TopBox and TopPick were in the findings.

**Kept on purpose:**
- **picaridin-vs-deet:** the OFF! card keeps its search ("off defense picaridin insect repellent"), because no OFF! icaridin term is on the page; the card now names the registered products and their PCP numbers. "Odourless" (TopPick blurb and pros) was not in these findings; OWNER-DECISIONS B recorded that Natrapel's maker lists a fragrance (for the Ontario repellent guide's box).
- **packtite-portable-review-canada:** TopPick pro "Chemical-free; no PMRA-registration question" kept. TIER2-CHECK lists it as an open question, not a finding (PCP Regulations Schedule 1 item 1 names garment bags and cabinets sold to protect clothing or fabrics from pests).
- **best-ant-killer:** the DE card (L190-193) uses the Safer's search the DE checker flagged. That card already says to buy by name with a PCP number, and it was not flagged on this page.

**Page text, not affiliate lines** (outside this brief):
- **best-cordless-fogger-canada:** still says "Hudson-style" in the Quick Answer (L126), the body (L259), FAQ 1 and the BlogPosting description (L100).
- **packtite-portable-review-canada:** the title still says "PackTite Portable". The suitcase FAQ says "Usually not a full hard-shell suitcase", while the PackTite 2 listing says it treats luggage.
- **best-ant-killer:** the knockdown paragraph (L362) still recommends a short-residual product. The button under it now names the permethrin pick.
- **dupray-steamer-review-canada:** the recall box (L233) says "We have removed our direct product link to this machine", while the boxes keep the search links (the owner's Sep 2 decision).

Lines changed in this section: 69 (all affiliate lines or cells in a row that holds a BuyLink); none inserted, none deleted.

## Tier 2 pages: box fixes, Oct 29, 2026 (15 pages)

Fixed under the Oct 29 brief (owner: "Yes, fix the false product box claims"), following FIX-BRIEF.md. The verified problems are the "Box claims for the owner" rows for these pages in TIER2-CHECK.md (Checkers B and C), plus the upgraders’ box flags in TIER2-LOG.md, each re-checked against its primary source on Oct 29. TIER3-CHECK.md and TIER3-LOG.md have no box rows for these 15 pages. All files are `app/blog/<slug>/page.tsx`. **109 lines changed on 13 pages**; 2 pages unchanged. Lines were replaced one for one (none inserted, none deleted), so every line number holds before and after. Where a long line changed only in part, "…" marks unchanged text left out of the Before/After quote.

**Checks after editing** (against copies taken before editing and `git show HEAD:<file>`; no git write, no build):
- Line counts unchanged on all 15 pages; the only changed lines are the ones listed below.
- Counts of `<BuyLink`, `<AwardRow`, `<AwardCard`, `<StickyBuyBar`, `<AmazonLink`, `<TopPick`, `<TopBox` equal HEAD on all 15 pages; every `tag` unchanged; `search=`/`search:` counts unchanged.
- `asin=` unchanged except how-to-get-rid-of-wasps-canada (3 to 0): the W·H·Y ASIN came off the three swapped elements (code A-asin).
- Every swapped-in search term was already on the same page, except best-ulv-cold-fogger-canada, which uses its sibling’s live term (code B-swap-sib).
- `npx tsc --noEmit`: no errors.
- No price, rating or testing claim added; no "safe" left in a changed line; Canadian spelling.

**Evidence key** (registry lookups on Oct 29, 2026 used Health Canada’s registry API, e.g. https://pest-control.canada.ca/pesticide-registry-api/api/search/product/25735; labels were fetched with WebFetch and read from the saved file):
- `B-swap`: FIX-BRIEF item 2 / Oct 29 brief: box pointed at the registered (or registration-free device) alternative the same page already recommends, reusing that product’s existing search term; element type, position, tag and element count kept.
- `B-swap-sib`: as B-swap, but the term is the sibling page’s (FIX-BRIEF: "the same page (or its sibling page)"): `corded electric ulv fogger disinfectant`, live on app/blog/thermal-vs-ulv-fogger-canada/page.tsx L166 (card "Best Corded ULV: Corded Electric ULV Fogger"). This page has no term for a corded adjustable ULV. Easy to revert if the coordinator reads the rule as same-page only.
- `B-reword`: no registered alternative for that job on the page, so the box is reworded honestly and its link is unchanged.
- `B-safe`: FIX-BRIEF banned claims ("safe").
- `B-fit`: FIX-BRIEF item 3: keep the pick, make the box text honest.
- `B-text`: a text cell (no affiliate element) changed only because the swap or reword beside it would otherwise leave it false.
- `A-asin`: `asin="B00BPTN6YC"` (the W·H·Y Trap) removed so the swapped links follow the swapped-in search; no ASIN for the RESCUE! Yellowjacket Trap exists anywhere on the site. In the TopPick, L141 now carries `cta="Check price on Amazon.ca"` (the component’s default) instead of the ASIN, so no line was deleted.
- `C2-roach`: TIER2-CHECK, Checker B, best-cockroach-killer-canada rows. Registry: 26519 COMBAT ROACH KILLING SYSTEM Cancelled, expiry 2006-05-31; 26645 RAID MAX ROACH BAIT and 27731 RAID DOUBLE CONTROL ROACH BAITS Cancelled, 2025-09-25; 25735 RAID ANT ROACH & EARWIG GEL BAITS Full Registration, DOMESTIC, boric acid, current; 30293 HOMEOWNERS DIY ROACH BAIT current, boric acid; 20471 PIC ROACH CONTROL SYSTEM current, propoxur. Label facts are the page’s own label table (Raid 25735 label 2017-1008: "CONTAINS 12 CHILD RESISTANT BAITS", "Apply/use only in areas inaccessible to children and pets", at least 10 baits in the kitchen and 2 per bathroom, replace every 4 weeks; Nisus 30293: crack-and-crevice only). https://pest-control.canada.ca/pesticide-registry/en/product-details.html?q=25735
- `C2-tick`: TIER2-CHECK, Checker B, tick-removal-tool-guide rows: the vet claim is unsourced (PHAC and CDC describe fine-point tweezers); only human study, Akin Belli 2016: card 3/40 intact vs tweezers 33/40; Duscher 2012 (7/108 vs 20/108, lasso) and Zenner 2006 (forceps), all in the ILCOR review already cited on the page: https://costr.ilcor.org/document/methods-of-tick-removal-first-aid-systematic-review
- `C2-co2`: TIER2-CHECK, Checker B, co2-mosquito-trap-canada rows: no Biogents product in the registry; PCP Regulations s. 3(1)(a) and Schedule 1 item 2 keep flying-insect attracting devices under the Act (https://laws-lois.justice.gc.ca/eng/regulations/SOR-2006-124/page-10.html); home traps use BG-Sweetscent, not BG-Lure (https://research-shop.biogents.com/products/bg-sweetscent). Oct 29: registry search PROD_NAME_E or REGT_NAME contains BIOGENTS = 0 rows; 32375 MOSQUITO MAGNET PATRIOT PLUS Full Registration, DOMESTIC, current. Woodstream Canada (https://www.woodstreambrands.ca/store/mosquito-magnet-trap): "50-foot power cord", "Protects about 1 acre", Octenol "sold separately", 20 lb tank changed every 18 to 21 days, results in 7 to 10 days. UW–Madison (already cited on the page): homeowner traps usually do not reduce biting.
- `C2-fog`: TIER2-CHECK, Checker B, best-bed-bug-fogger-canada rows. Oct 29: 33939, 28912 (Doktor Doom) and 32676 (Konk) total-release foggers Cancelled, expiry 2024-09-02 (RVD2023-06); 34126 DOKTOR DOOM PRO MAX current; label 34126 (2025-1185, https://pest-control.canada.ca/pesticide-registry-api/api/pdf/inline/en/444695186): "Apply this product with the attached trigger sprayer"; "TO KILL BED BUGS: DO NOT apply to the mattress, headboard, footboard or furniture. Apply to inside building surfaces including, cracks and crevices in the walls, floors and ceilings; along and behind baseboards and molding; and localized areas of walls behind and floors beneath furniture (e.g., bed and nightstand)"; "When protected from the sun, permethrin will provide residual/long lasting activity". 32278 SAFER'S ANT & CRAWLING INSECT KILLER Full Registration, DOMESTIC, current, pests include BEDBUGS; label 32278 (2025-1883, https://pest-control.canada.ca/pesticide-registry-api/api/pdf/inline/en/444695778): squeeze bottle; "BEDBUGS: Disassemble beds and dust frames, joints, mattresses, tufts and seams, floors and baseboards"; "Avoid breathing dust. Do not use as a space spray." 30832 SAFER'S BEDBUG AND FLEA KILLER Cancelled 2024-11-12. Steamer facts are the page’s own steam row and FAQs; PCP Regulations Schedule 1 names no steamer.
- `C2-mop`: TIER2-CHECK, Checker B row: no Dupray Bliss product. Oct 29, https://dupray.com/en-ca: steam cleaners Neat, Neat Plus, Tosca, Hill Injection; Stellar PRO floor washer; no Bliss and no steam mop. Dupray FAQ quote already on the page (checker: exact). Neat recall batch codes 0118-01 to 0425-05 (Health Canada RA-81643, Feb 26, 2026; TIER2-CHECK, Checker C, dupray-steamer-review-canada).
- `C2-vent`: TIER2-CHECK, Checker B row: UF/IFAS bee-proofing closes openings with 1/8-inch hardware cloth or insect screen, so vent mesh does not stop wasps (https://ask.ifas.ufl.edu/publication/IN741).
- `C2-uph`: TIER2-CHECK, Checker B, "Also noted": "stiff-but-safe brush" uses "safe".
- `C2-heat`: TIER2-CHECK, Checker B rows: no Nuventa brand (closest Nuvenco, maker of PackTite); ZappBug Room "Circuits Needed: 4". Oct 29, https://zappbug.com/products/zappbug-room: "Needs 4 separate circuits"; "Plug each thermal unit (about 1,500 watts) into an outlet on a different circuit rated 15 amps or more".
- `C2-yj`: TIER2-CHECK, Checker B, best-yellow-jacket-trap-canada rows. Oct 29 registry: REGT_NAME contains STERLING = 23 rows; the current DOMESTIC yellowjacket products are 35529 DISPOSABLE YELLOWJACKET TRAP W, 35530 YELLOWJACKET TRAP CARTRIDGE and 35531 YELLOWJACKET TRAP TUBE (heptyl butyrate, first registered 2025-12-11); no W·H·Y, WHY or East-formula product; PROD_NAME_E contains "W.H.Y" = 0. RESCUE! East or West (https://www.rescue.com/latest-buzz/outdoor-pests/disposable-yellowjacket-trap-east-or-west/): Eastern Formula "designed to attract species that are more prevalent in eastern and central regions"; Western Formula "designed around yellowjacket species commonly found in western regions". DIY bottle traps: PCP Regulations Schedule 1 item 2.
- `U-yj`: TIER2-LOG upgrader flag ("does not lure honey bees"), re-checked Oct 29 on https://www.rescue.com/products/traps/reusable-yellowjacket-trap/: "Won't trap beneficial honeybees"; "designed to target yellowjackets and prevent accidental capture of beneficial honeybees" (capture, not attraction).
- `C2-mm` / `U-mm`: TIER2-CHECK, Checker B rows and the TIER2-LOG flag. Oct 29, https://www.woodstreambrands.ca/executive-canada-trap (MM3302B): "cordless", "rechargeable Nickel Metal Hydride Battery", "4 fuel saving modes", features that "can extend the life of accessories and propane up to 40%", "heavy duty construction with reinforced base for added durability"; nothing on attractant delivery. So "longer cartridge life" (flagged by the upgrader) is supported and kept. Page’s own advice: hero L162 and Best Overall cons L255 ("Skip it on lots under 0.25 acres").
- `C2-vap` / `U-vap`: TIER2-CHECK, Checker C rows and the TIER2-LOG flag. Oct 29, https://www.vapamore.com/pages/mr-100-primo-steam-cleaning-system: "Steam Time: 50-60 Min"; accessories include Floor Cleaning Head, Clothes / Fabric Tool, Jet Nozzle Tool, Nylon Grout Brush, Nylon Brush Medium and Large, Brass Metal Brush; no "concentrator" and no "detail brush". UMN (quoted in TIER2-CHECK): "Do not use a pinpoint steam nozzle; use a nozzle that distributes steam at lower pressures, such as a floor or upholstery attachment. Pinpoint nozzles can blow the bed bugs away".
- `C2-ulv`: TIER2-CHECK, Checker C row and the TIER2-LOG flag: PetraTools’ only ULV fogger is a lithium-ion battery backpack (3+ gallon tank). Oct 29, https://petratools.com/collections/foggers: "Sorry, there are no products in this collection."
- `C2-wasp`: TIER2-CHECK, Checker C row: no W·H·Y product in the registry; Sterling International’s current products are 35529–35531 (re-checked Oct 29, as C2-yj). RESCUE! facts in the new TopPick text are from the reusable trap page (as U-yj): won’t catch hornets or paper wasps; initial lure lasts 2 to 4 weeks; 4-week liquid and 10-week cartridge refills.

### best-cockroach-killer-canada (14 lines)

- **L124** (StickyBuyBar; C2-roach, B-swap). Combat (26519, cancelled 2006) swapped to the page’s registered station, Raid 25735, on the page’s own boric acid bait search.
  - Before: `<StickyBuyBar tag={AMZ_TAG} name="Combat Roach Killing Bait Stations (12-pack)" search="combat roach killing bait stations" label="Best cockroach killer" />`
  - After: `<StickyBuyBar tag={AMZ_TAG} name="Raid Ant Roach & Earwig Gel Baits (look for Reg. No. 25735)" search="boric acid roach bait" label="Best cockroach killer" />`
- **L125** (TopBox (mirrors the StickyBuyBar); C2-roach, B-swap).
  - Before: `<TopBox tag={AMZ_TAG} name="Combat Roach Killing Bait Stations (12-pack)" search="combat roach killing bait stations" label="Best cockroach killer" />`
  - After: `<TopBox tag={AMZ_TAG} name="Raid Ant Roach & Earwig Gel Baits (look for Reg. No. 25735)" search="boric acid roach bait" label="Best cockroach killer" />`
- **L153** (AwardRow Best Overall; C2-roach, B-swap). Name, why and search moved to Raid 25735 with its label rates; "mainstream domestic-class bait station in Canada" removed.
  - Before: `name: 'Combat Roach Killing Bait Stations (large 12-pack)',`
  - After: `name: 'Raid Ant Roach & Earwig Gel Baits (Reg. No. 25735)',`
- **L154** (AwardRow Best Overall; C2-roach, B-swap). Same evidence as the entry above.
  - Before: `why: 'The mainstream domestic-class bait station in Canada and the closest legal cousin of a professional gel program: a slow-acting food bait in a child-resistant enclosure that foragers carry back to the colony. Buy more packs than feels reasonable — …`
  - After: `why: 'A registered domestic-class bait station (Reg. No. 25735, boric acid 2.0%): slow-acting bait in child-resistant stations that foragers carry back to the colony. The label says to place at least 10 in the kitchen and 2 in each bathroom, and to replace all of them every 4 weeks while the problem persists. The search below also shows other boric acid baits, so look for Reg. No. 25735 on the box. Buy more packs than feels reasonable — …`
- **L155** (AwardRow Best Overall; C2-roach, B-swap). Same evidence as the entry above.
  - Before: `search: 'combat roach killing bait stations',`
  - After: `search: 'boric acid roach bait',`
- **L158** (AwardRow Best Overall pros; C2-roach, B-safe). "safe around kids and pets" replaced by the label’s placement rule.
  - Before: `… ['Colony-transfer mechanism, not one-roach-at-a-time', 'Enclosed — safe around kids and pets when placed per label', 'No residue, no odour, no scattered survivors'],`
  - After: `… ['Colony-transfer mechanism, not one-roach-at-a-time', 'Child-resistant stations, still placed out of reach of children and pets (label)', 'No residue, no odour, no scattered survivors'],`
- **L163** (AwardRow Best for Bait Rotation; C2-roach, B-swap). Raid Max (26645/27731, cancelled 2025) swapped to the page’s registered boric acid paste (Nisus 30293) on the same search; PIC 20471 named in text only (no search term for it on this page or a sibling). "on Canadian shelves" and "Widely stocked" removed.
  - Before: `name: 'Raid Max Roach Bait Stations',`
  - After: `name: 'Boric Acid Roach Paste (e.g. Homeowners DIY Roach Bait, Reg. No. 30293)',`
- **L164** (AwardRow Best for Bait Rotation; C2-roach, B-swap). Same evidence as the entry above.
  - Before: `why: 'The other mainstream station line on Canadian shelves, with a different bait formulation — which is exactly what you want if feeding on the first line stalls mid-campaign. Bait aversion is a real, documented German-roach …`
  - After: `why: 'For rotation, use a registered bait in a different formulation: Raid Max roach baits, once the usual rotation pick, are no longer registered in Canada (Health Canada lists Raid Max Roach Bait and Raid Double Control Roach Baits as historical, last retail sale September 25, 2025). A boric acid paste such as Homeowners DIY Roach Bait (Reg. No. 30293) goes into the cracks a station cannot reach; its label allows crack-and-crevice use only. For a different active, PIC Roach Control System trays (Reg. No. 20471) use propoxur. Bait aversion is a real, documented German-roach …`
- **L165** (AwardRow Best for Bait Rotation; C2-roach, B-swap). Same evidence as the entry above.
  - Before: `search: 'raid max roach bait stations',`
  - After: `search: 'boric acid roach bait',`
- **L167** (AwardRow Best for Bait Rotation; C2-roach, B-swap). Same evidence as the entry above.
  - Before: `pros: ['Different bait matrix for aversion insurance', 'Same enclosed, kid-resistant format', 'Widely stocked at Canadian grocery and hardware stores'],`
  - After: `pros: ['A different bait formulation for aversion insurance', 'Registered for cockroaches (Reg. No. 30293)', 'Reaches the cracks a station cannot'],`
- **L168** (AwardRow Best for Bait Rotation; C2-roach, B-swap). Same evidence as the entry above.
  - Before: `cons: ['Buy it as the rotation, not the reason to skip Combat', 'Same density rule applies — one pack under-places a kitchen'],`
  - After: `cons: ['Buy it as the rotation, not instead of the stations', 'Label: crack-and-crevice use only'],`
- **L191** (AwardRow whichToBuy; C2-roach). Same two picks, renamed to match the swapped cards.
  - Before: `… infestation: buy the <em>Best Overall</em> Combat stations at full density plus the <em>Best Diagnostic</em> glue monitors the same day, and add the <em>Best Budget Add-On</em> boric acid bait for the gaps the stations miss. <strong>Feeding stalls after a strong start?</strong> Rotate to the <em>Best for Bait Rotation</em> Raid Max stations rather than doubling down on the same bait. …`
  - After: `… infestation: buy the <em>Best Overall</em> Raid boric acid stations (Reg. No. 25735) at full density plus the <em>Best Diagnostic</em> glue monitors the same day, and add the <em>Best Budget Add-On</em> boric acid bait for the gaps the stations miss. <strong>Feeding stalls after a strong start?</strong> Rotate to the <em>Best for Bait Rotation</em> paste, or to PIC Roach Control System trays (Reg. No. 20471), which use a different active, rather than doubling down on the same bait. …`
- **L209** (BuyLink; C2-roach, B-swap).
  - Before: `<BuyLink tag={AMZ_TAG} search="combat roach killing bait stations">Combat bait stations &rarr;</BuyLink>`
  - After: `<BuyLink tag={AMZ_TAG} search="boric acid roach bait">Raid boric acid stations (Reg. No. 25735) &rarr;</BuyLink>`
- **L210** (BuyLink; C2-roach, B-swap).
  - Before: `<BuyLink tag={AMZ_TAG} search="raid max roach bait stations">Raid Max stations &rarr;</BuyLink>`
  - After: `<BuyLink tag={AMZ_TAG} search="boric acid roach bait">Boric acid paste (Reg. No. 30293) &rarr;</BuyLink>`

### tick-removal-tool-guide (4 lines)

- **L137** (AwardRow Best Overall why; C2-tick). Unsourced "the standard tool most veterinarians recommend" replaced by the Duscher (2012) result already cited on the page.
  - Before: `… twists it free without squeezing the body — the standard tool most veterinarians recommend, and budget-friendly.',`
  - After: `… twists it free without squeezing the body. In a randomized trial on pets it left 7 of 108 ticks with damaged mouthparts, against 20 of 108 for a lasso-style remover (Duscher, 2012), and it is budget-friendly.',`
- **L157** (AwardRow Best Backup (fit item); C2-tick, B-fit). Pick kept; box now gives the one human study (card 3/40 intact vs tweezers 33/40).
  - Before: `… hand when you find a tick away from home.',`
  - After: `… hand when you find a tick away from home. Keep it as a backup only: in the one study on people, a card-type remover pulled out 3 of 40 ticks intact, against 33 of 40 for tweezers (Akin Belli, 2016).',`
- **L161** (AwardRow Best Backup (fit item); C2-tick, B-fit). Same evidence as the entry above.
  - Before: `cons: ['Awkward on very small nymphs', 'Needs a flat skin surface'],`
  - After: `cons: ['Far fewer ticks out intact than tweezers in a study on people', 'Awkward on very small nymphs; needs a flat skin surface'],`
- **L184** (AwardRow whichToBuy; C2-tick). Same "vet-standard" claim in the same box.
  - Before: `… household?</strong> The <em>Best Overall</em> Tick Twister is the vet-standard pick. <strong>First time removing a tick?</strong> …`
  - After: `… household?</strong> The <em>Best Overall</em> Tick Twister left fewer damaged mouthparts than a lasso tool or forceps in the pet trials. <strong>First time removing a tick?</strong> …`

### co2-mosquito-trap-canada (19 lines)

- **L108** (StickyBuyBar; C2-co2, B-swap). Biogents (no Canadian registration) swapped to the page’s registered trap, Patriot Plus 32375, on its existing search.
  - Before: `<StickyBuyBar tag={AMZ_TAG} name="Biogents BG-Mosquitaire (electric CO2 mosquito trap)" search="biogents mosquitaire mosquito trap" label="Best CO2 trap" />`
  - After: `<StickyBuyBar tag={AMZ_TAG} name="Mosquito Magnet Patriot Plus (propane CO2 trap, Reg. No. 32375)" search="mosquito magnet patriot plus" label="Registered CO2 trap" />`
- **L109** (TopBox (mirrors the StickyBuyBar); C2-co2, B-swap).
  - Before: `<TopBox tag={AMZ_TAG} name="Biogents BG-Mosquitaire (electric CO2 mosquito trap)" search="biogents mosquitaire mosquito trap" label="Best CO2 trap" />`
  - After: `<TopBox tag={AMZ_TAG} name="Mosquito Magnet Patriot Plus (propane CO2 trap, Reg. No. 32375)" search="mosquito magnet patriot plus" label="Registered CO2 trap" />`
- **L116** (Quick Answer line carrying the AmazonLink; C2-co2, B-swap).
  - Before: `For most GTA backyards, an electric <strong>Biogents</strong> trap (BG-Home or <AmazonLink search="biogents mosquitaire mosquito trap" tag={AMZ_TAG} className="font-bold underline decoration-emerald-500 underline-offset-2 hover:text-emerald-900">BG-Mosquitaire</AmazonLink>) is the best CO2 mosquito trap because it runs on a wall plug and a chemical lure with no propane tank, and it uses the same research-grade design mosquito scientists deploy. Propane traps like Mosquito Magnet cover larger acreage but require a mandatory 20 lb tank.`
  - After: `In Canada, buy a CO2 mosquito trap with a registration number: the propane <AmazonLink search="mosquito magnet patriot plus" tag={AMZ_TAG} className="font-bold underline decoration-emerald-500 underline-offset-2 hover:text-emerald-900">Mosquito Magnet Patriot Plus</AmazonLink> (Reg. No. 32375) is in Health Canada&rsquo;s registry, plugs in on a 50-foot cord and protects about 1 acre, but it needs a 20 lb propane tank. Electric <strong>Biogents</strong> traps (BG-Home, BG-Mosquitaire) run on a wall plug and a lure with no tank and use a research-grade design, but we found no Biogents product in Health Canada&rsquo;s registry.`
- **L130** (BuyLink (Quick Answer button); C2-co2, B-swap).
  - Before: `<BuyLink search="biogents mosquitaire mosquito trap" tag={AMZ_TAG} block className="sm:w-auto …`
  - After: `<BuyLink search="mosquito magnet patriot plus" tag={AMZ_TAG} block className="sm:w-auto …`
- **L143** (AwardRow Best Overall; C2-co2, B-swap). Also removes "BG-Lure" (home traps use BG-Sweetscent).
  - Before: `name: 'Biogents BG-Mosquitaire (electric CO₂)',`
  - After: `name: 'Mosquito Magnet Patriot Plus (Reg. No. 32375)',`
- **L144** (AwardRow Best Overall; C2-co2, B-swap). Same evidence as the entry above.
  - Before: `why: 'Research-grade airflow and the BG-Lure catch host-seeking females on a wall plug alone — no propane tank, with an optional CO₂ boost for heavy-pressure yards.',`
  - After: `why: 'The CO₂ trap with a Canadian registration: Health Canada’s registry lists the Patriot Plus (Reg. No. 32375). It burns propane from a 20 lb tank for its CO₂ plume, plugs in on a 50-foot cord and protects about 1 acre, with octenol attractant sold separately (Woodstream Canada). University of Wisconsin–Madison researchers report that homeowner traps usually do not reduce biting in the yard, so treat it as one layer, with dumping standing water and repellent.',`
- **L145** (AwardRow Best Overall; C2-co2, B-swap). Same evidence as the entry above.
  - Before: `search: 'biogents mosquitaire mosquito trap',`
  - After: `search: 'mosquito magnet patriot plus',`
- **L148** (AwardRow Best Overall; C2-co2, B-swap). Same evidence as the entry above.
  - Before: `pros: ['No tank — runs on a plug + lure', 'Research-grade capture design', 'Low running cost'],`
  - After: `pros: ['In Health Canada’s registry (Reg. No. 32375)', 'Protects about 1 acre (Woodstream Canada)', 'Plugs in on a 50-foot cord'],`
- **L149** (AwardRow Best Overall; C2-co2, B-swap). Same evidence as the entry above.
  - Before: `cons: ['Covers a zone, not full acreage', 'Works over weeks, not same-day'],`
  - After: `cons: ['A 20 lb propane tank to change every 18–21 days', 'Works over weeks, not same-day'],`
- **L154** (AwardRow Best for Patios (BG-Home); C2-co2, B-reword). No registered indoor or patio trap on the page: reworded honestly, link unchanged; "BG-Lure" corrected to BG-Sweetscent.
  - Before: `why: 'A very quiet plug-in unit sized for an indoor room or covered patio, using the same BG-Lure chemistry — ideal for tiger-mosquito hotspots close to where you sit.',`
  - After: `why: 'A very quiet plug-in unit that Biogents designs for indoors, with covered patios also on its list, using the BG-Sweetscent lure. Not registered in Canada: we found no Biogents product in Health Canada’s pesticide registry (October 28, 2026), so check for a PCP number on any trap you buy.',`
- **L158** (AwardRow Best for Patios (BG-Home); C2-co2, B-reword). Same evidence as the entry above.
  - Before: `cons: ['Smaller coverage zone', 'Needs lure refills'],`
  - After: `cons: ['No Canadian registration found', 'Smaller coverage zone; needs lure refills'],`
- **L163** (AwardRow Best Passive (BG-GAT); C2-co2, B-reword). No registered passive trap on the page: reworded honestly, link unchanged.
  - Before: `… three or more for set-and-forget control.',`
  - After: `… three or more for set-and-forget control. Not registered in Canada: we found no Biogents product in Health Canada’s pesticide registry (October 28, 2026), so check for a PCP number on any trap you buy.',`
- **L167** (AwardRow Best Passive (BG-GAT); C2-co2, B-reword). Same evidence as the entry above.
  - Before: `cons: ['Best deployed in clusters', 'Targets Aedes specifically'],`
  - After: `cons: ['No Canadian registration found', 'Targets Aedes specifically; best in clusters'],`
- **L181** (AwardRow whichToBuy; C2-co2).
  - Before: `<strong>Normal suburban backyard?</strong> The <em>Best Overall</em> BG-Mosquitaire skips the tank and wins on running cost. <strong>Patio or indoor hotspot?</strong> The <em>Best for Patios</em> BG-Home is quiet and compact. <strong>Cottage or off-grid?</strong> A cluster of <em>Best Passive</em> BG-GATs needs no power. <strong>1+ acre rural lot?</strong> The …`
  - After: `<strong>Want a CO2 trap you can buy and use in Canada?</strong> The <em>Best Overall</em> Patriot Plus is in Health Canada&rsquo;s registry (Reg. No. 32375). <strong>Patio, indoor hotspot or off-grid cottage?</strong> The <em>Best for Patios</em> BG-Home and the <em>Best Passive</em> BG-GAT are not: we found no Biogents product in the registry, so check for a PCP number before you buy either. <strong>1+ acre rural lot?</strong> The …`
- **L255** (BuyLink (Biogents product); C2-co2, B-reword). Link unchanged; button text now says no Canadian registration was found.
  - Before: `… search="biogents bg-home mosquito trap">Check price on Amazon.ca</BuyLink>`
  - After: `… search="biogents bg-home mosquito trap">BG-Home (no Canadian registration found)</BuyLink>`
- **L256** (BuyLink (Biogents product); C2-co2, B-reword). Same evidence as the entry above.
  - Before: `… search="biogents gat trap kit">BG-GAT trap kit →</BuyLink>`
  - After: `… search="biogents gat trap kit">BG-GAT trap kit (no Canadian registration found) →</BuyLink>`
- **L257** (BuyLink (Biogents product); C2-co2, B-reword). Same evidence as the entry above.
  - Before: `<BuyLink tag={AMZ_TAG} search="biogents bg booster co2">CO2 booster →</BuyLink>`
  - After: `<BuyLink tag={AMZ_TAG} search="biogents bg booster co2">Biogents CO2 booster (no Canadian registration found) →</BuyLink>`
- **L275** (BuyLink (lure refill); C2-co2, B-reword). "BG-Lure" corrected to BG-Sweetscent; link unchanged.
  - Before: `… search="biogents bg-lure refill">Check BG-Lure refills on Amazon.ca →</BuyLink>`
  - After: `… search="biogents bg-lure refill">Check BG-Sweetscent lures on Amazon.ca (no Canadian registration found) →</BuyLink>`
- **L342** (BuyLink (Biogents product); C2-co2, B-reword). Same evidence as the entry above.
  - Before: `… trap kit">Check BG-GAT kits on Amazon.ca</BuyLink>`
  - After: `… trap kit">Check BG-GAT kits on Amazon.ca (no Canadian registration found)</BuyLink>`

### best-bed-bug-fogger-canada (22 lines)

- **L120** (StickyBuyBar; C2-fog, B-swap). Cancelled Doktor Doom fogger (33939/28912) swapped to the page’s first alternative, the steamer, on its existing search (a device: no PCP number needed).
  - Before: `<StickyBuyBar tag={AMZ_TAG} name="PMRA-registered total-release fogger (Doktor Doom)" search="doktor doom total release fogger" label="If you must fog" />`
  - After: `<StickyBuyBar tag={AMZ_TAG} name="Dry-vapour bed bug steamer" search="bed bug steamer" label="Instead of a fogger" />`
- **L121** (TopBox (mirrors the StickyBuyBar); C2-fog, B-swap).
  - Before: `<TopBox tag={AMZ_TAG} name="PMRA-registered total-release fogger (Doktor Doom)" search="doktor doom total release fogger" label="If you must fog" />`
  - After: `<TopBox tag={AMZ_TAG} name="Dry-vapour bed bug steamer" search="bed bug steamer" label="Instead of a fogger" />`
- **L145** (AwardRow heading; C2-fog). "PMRA-Registered Foggers in Canada" is false since 2024.
  - Before: `heading="Our Picks — PMRA-Registered Foggers in Canada (Used Correctly)"`
  - After: `heading="Our Picks — What to Buy Instead of a Bed Bug Fogger in Canada"`
- **L148** (AwardRow card 1 (was Doktor Doom fogger); C2-fog, B-swap). Swapped to the steamer (page search "bed bug steamer"); "legal to use here" and "PMRA-registered" removed.
  - Before: `badge: 'Best PMRA Fogger',`
  - After: `badge: 'Instead of a Fogger: Steam',`
- **L149** (AwardRow card 1 (was Doktor Doom fogger); C2-fog, B-swap). Same evidence as the entry above.
  - Before: `name: 'Doktor Doom Total-Release Fogger (pyrethrin)',`
  - After: `name: 'Dry-Vapour Bed Bug Steamer',`
- **L150** (AwardRow card 1 (was Doktor Doom fogger); C2-fog, B-swap). Same evidence as the entry above.
  - Before: `why: 'An established Canadian brand carrying a Health Canada PCP registration number, so it is legal to use here. As a flushing and knockdown aerosol for exposed insects in an open room it does its narrow job — but like every fogger, it cannot reach the harbourage where bed bugs actually live.',`
  - After: `why: 'Health Canada cancelled domestic total-release foggers, the Doktor Doom and Konk cans among them, with a last date of use of September 2, 2024. Steam does what a fog never did: a dry-vapour steamer drives heat into mattress seams, folds and cracks and kills bed bugs and their eggs on contact, and as a device rather than a pesticide it needs no PCP number.',`
- **L151** (AwardRow card 1 (was Doktor Doom fogger); C2-fog, B-swap). Same evidence as the entry above.
  - Before: `search: 'doktor doom total release fogger',`
  - After: `search: 'bed bug steamer',`
- **L154** (AwardRow card 1 (was Doktor Doom fogger); C2-fog, B-swap). Same evidence as the entry above.
  - Before: `pros: ['PMRA-registered — legal in Canada', 'Trusted Canadian brand', 'Fine for flushing exposed insects in the open'],`
  - After: `pros: ['Reaches seams and folds a fog cannot', 'Kills bugs and eggs on contact', 'Heat, so resistance does not blunt it'],`
- **L155** (AwardRow card 1 (was Doktor Doom fogger); C2-fog, B-swap). Same evidence as the entry above.
  - Before: `cons: ['Cannot reach cracks, seams, or voids', 'Resistance blunts pyrethrin chemistry', 'Not a standalone bed-bug solution'],`
  - After: `cons: ['Kills only what the steam touches', 'Slow, seam-by-seam work', 'Not a standalone bed-bug solution'],`
- **L158** (AwardRow card 2 (was Konk fogger); C2-fog, B-swap). Swapped to the registered DE the page already sells (Safer’s 32278, page search "safers insect killing diatomaceous earth"); "Canadian-registered" removed. Box tells readers to look for 32278 because that search can surface other bags (TIER2-CHECK, DE page).
  - Before: `badge: 'Best for Large Rooms',`
  - After: `badge: 'Instead of a Fogger: Dust',`
- **L159** (AwardRow card 2 (was Konk fogger); C2-fog, B-swap). Same evidence as the entry above.
  - Before: `name: 'Konk Total-Release Fogger',`
  - After: `name: 'Safer’s Ant & Crawling Insect Killer DE (look for Reg. No. 32278)',`
- **L160** (AwardRow card 2 (was Konk fogger); C2-fog, B-swap). Same evidence as the entry above.
  - Before: `why: 'A widely stocked Canadian-registered total-release aerosol for large open spaces where fast, hands-off coverage of exposed surfaces is the goal. Same fundamental limits apply — treat it as a supplemental flush, never the treatment.',`
  - After: `why: 'An inert desiccant dust for the cracks, joints and voids a fog never reaches. Health Canada’s registry lists Safer’s Ant & Crawling Insect Killer (Reg. No. 32278), a diatomaceous earth squeeze bottle whose label says, for bed bugs, to disassemble beds and dust frames, joints, mattresses, tufts and seams, floors and baseboards. The search below can also show US Safer Home bags and the cancelled Safer’s Bedbug and Flea Killer, so look for Reg. No. 32278.',`
- **L161** (AwardRow card 2 (was Konk fogger); C2-fog, B-swap). Same evidence as the entry above.
  - Before: `search: 'konk total release fogger',`
  - After: `search: 'safers insect killing diatomaceous earth',`
- **L163** (AwardRow card 2 (was Konk fogger); C2-fog, B-swap). Same evidence as the entry above.
  - Before: `pros: ['PMRA-registered', 'Good open-area aerosol coverage', 'Easy to source seasonally'],`
  - After: `pros: ['Bed bugs on the registered label (Reg. No. 32278)', 'Physical action, so resistance does not blunt it', 'Reaches cracks, joints and voids'],`
- **L164** (AwardRow card 2 (was Konk fogger); C2-fog, B-swap). Same evidence as the entry above.
  - Before: `cons: ['Untargeted — lands where it drifts', 'Misses harbourage entirely', 'Flammable; strict label limits'],`
  - After: `cons: ['Label: do not use as a space spray; avoid breathing dust', 'Search results can include other Safer’s bags; check the number'],`
- **L169** (AwardRow card 3 (Pro Max); C2-fog). Use sites now match label 34126; "can" corrected to the label’s trigger sprayer; "weeks of residual" replaced by the label’s out-of-sunlight residual wording.
  - Before: `why: 'If you are set on a chemical step, a directed residual spray injected into seams, cracks, and screw holes does what a fog cannot — it puts product exactly where bugs shelter and keeps killing for weeks, whereas a fog only settles on exposed surfaces. Pro Max is a PMRA-registered permethrin residual for baseboards, bed legs, frames, and furniture perimeters; it is not for mattresses or bedding, so read the label use sites before you spray. This is where fogger money is better spent.',`
  - After: `why: 'If you are set on a chemical step, a directed crack-and-crevice spray does what a fog cannot: it puts product where bugs shelter, whereas a fog only settles on exposed surfaces. Pro Max (Reg. No. 34126) is a permethrin trigger spray; for bed bugs its label says to apply it to cracks and crevices in walls, floors and ceilings, along and behind baseboards and moulding, and to the walls behind and floors beneath furniture such as the bed and nightstand, but not to the mattress, headboard, footboard or furniture. This is where fogger money is better spent.',`
- **L172** (AwardRow card 3 (Pro Max); C2-fog). Same evidence as the entry above.
  - Before: `pros: ['Targets harbourage directly', 'Weeks of residual activity', 'PMRA-registered — the PCP number is on the can'],`
  - After: `pros: ['Targets harbourage directly', 'Long-lasting residual out of sunlight (label)', 'PMRA-registered — Reg. No. 34126 on the label'],`
- **L173** (AwardRow card 3 (Pro Max); C2-fog). Same evidence as the entry above.
  - Before: `cons: ['Still limited by resistance', 'Not for mattresses or bedding', 'Requires careful, directed application'],`
  - After: `cons: ['Still limited by resistance', 'Label: not on the mattress, headboard, footboard or furniture', 'Requires careful, directed application'],`
- **L178** (AwardRow whichToBuy; C2-fog). "Use the Best PMRA Fogger" removed.
  - Before: `<strong>Determined to fog an open room?</strong> Use the <em>Best PMRA Fogger</em> from Doktor Doom, strictly to the label, as a minor flush only. <strong>Large open space?</strong> The <em>Best for Large Rooms</em> Konk aerosol covers more ground. <strong>Want a chemical step that actually helps?</strong> Spend on the <em>Better Chemical Step</em> residual spray instead. <strong>And do not buy a US-market &ldquo;bed …`
  - After: `<strong>Were you about to fog?</strong> Domestic total-release foggers are cancelled in Canada (the last date of use was September 2, 2024), so steam the seams and folds with the <em>Instead of a Fogger: Steam</em> pick and dust cracks and voids with the <em>Instead of a Fogger: Dust</em> pick, checking the bottle for Reg. No. 32278. <strong>Want a chemical step that actually helps?</strong> Spend on the <em>Better Chemical Step</em> spray, used only where its label allows. <strong>And do not buy a US-market &ldquo;bed …`
- **L209** (BuyLink (fogger row of the comparison table); C2-fog, B-swap). Swapped to the page’s registered spray, Pro Max 34126.
  - Before: `… py-3"><BuyLink tag={AMZ_TAG} search="doktor doom total release fogger" block>Check price on Amazon.ca →</BuyLink></td>`
  - After: `… py-3"><BuyLink tag={AMZ_TAG} search="doktor doom pro max" block>Registered spray instead →</BuyLink></td>`
- **L263** (BuyLink; C2-fog, B-swap). Doktor Doom fogger swapped to Doktor Doom Pro Max (page search).
  - Before: `<BuyLink tag={AMZ_TAG} search="doktor doom total release fogger">Doktor Doom fogger →</BuyLink>`
  - After: `<BuyLink tag={AMZ_TAG} search="doktor doom pro max">Doktor Doom Pro Max, not a fogger →</BuyLink>`
- **L264** (BuyLink; C2-fog, B-swap). Konk fogger swapped to the page’s DE (Reg. No. 32278).
  - Before: `<BuyLink tag={AMZ_TAG} search="konk total release fogger">Konk fogger →</BuyLink>`
  - After: `<BuyLink tag={AMZ_TAG} search="safers insect killing diatomaceous earth">DE dust (look for Reg. No. 32278) →</BuyLink>`

### best-steam-mop-for-hardwood-floors-canada (7 lines)

- **L140** (AwardRow Best Canadian Brand; C2-mop, B-swap). No "Dupray Bliss" exists: swapped to the page’s own canister-steamer search ("canister steam cleaner floor tool", L222), the kind of Dupray machine the page text recommends.
  - Before: `name: 'Dupray Bliss-class Steam Mop',`
  - After: `name: 'Dupray Canister Steam Cleaner with a Floor Tool',`
- **L141** (AwardRow Best Canadian Brand; C2-mop, B-swap). Same evidence as the entry above.
  - Before: `… actually claim, and the right plug in the box. A tidier, better-built machine for people who keep appliances a decade.',`
  - After: `… actually claim, and the right plug in the box. It makes no steam mop: it sells canister steam cleaners (Neat, Neat Plus, Tosca, Hill Injection) that take a floor tool, and its FAQ says “Do NOT steam clean unsealed or oiled hardwood floors.” This search shows canister steamers from several brands, so look for the Dupray name; on a Neat, check the batch code against Health Canada’s February 2026 recall (0118-01 to 0425-05).',`
- **L142** (AwardRow Best Canadian Brand; C2-mop, B-swap). Same evidence as the entry above.
  - Before: `search: 'dupray bliss steam mop',`
  - After: `search: 'canister steam cleaner floor tool',`
- **L144** (AwardRow Best Canadian Brand; C2-mop, B-swap). Same evidence as the entry above.
  - Before: `pros: ['Canadian company, local warranty and parts', 'Solid build for long service life', 'Straightforward controls'],`
  - After: `pros: ['Canadian company, local warranty and parts', 'Takes a floor tool for sealed floors', 'Also does grout, upholstery and other surfaces'],`
- **L145** (AwardRow Best Canadian Brand; C2-mop, B-swap). Same evidence as the entry above.
  - Before: `cons: ['Costs more than the mass-market mops', 'Fewer accessory options than a canister steamer'],`
  - After: `cons: ['Costs more than the mass-market mops', 'Heavy, and easy to over-treat a soft finish'],`
- **L177** (AwardRow whichToBuy; C2-mop).
  - Before: `… reach?</strong> The <em>Best Canadian Brand</em> Dupray-class unit. <strong>Tight budget?</strong> The <em>Best …`
  - After: `… reach?</strong> The <em>Best Canadian Brand</em> pick, a Dupray canister steam cleaner with its floor tool (Dupray makes no steam mop). <strong>Tight budget?</strong> The <em>Best …`
- **L256** (BuyLink; C2-mop, B-swap).
  - Before: `<BuyLink tag={AMZ_TAG} search="dupray bliss steam mop">Dupray Bliss-class →</BuyLink>`
  - After: `<BuyLink tag={AMZ_TAG} search="canister steam cleaner floor tool">Canister steamer with floor tool →</BuyLink>`

### best-crawl-space-dehumidifier-canada (0 lines)

- No change: TIER2-CHECK found no wrong box claim and TIER2-LOG has no box flag for this page.

### best-raccoon-proof-roof-vent-covers-canada (1 line)

- **L157** (AwardRow Best for Soffits & Gables pros; C2-vent). Wasps removed.
  - Before: `… airflow intact', 'Also excludes squirrels, birds, and wasps'],`
  - After: `… airflow intact', 'Also excludes squirrels and birds'],`

### best-upholstery-steam-cleaner-canada (1 line)

- **L161** (AwardRow Best Add-On why; C2-uph, B-safe). "stiff-but-safe" removed.
  - Before: `… tufted arms. A proper narrow tool and a stiff-but-safe brush lift results more than a bigger motor does.',`
  - After: `… tufted arms. A proper narrow tool and a firm brush that suits the fabric lift results more than a bigger motor does.',`

### best-whole-house-dehumidifier-canada (0 lines)

- No change: TIER2-CHECK found no wrong box claim and TIER2-LOG has no box flag for this page. The unsourced CAD price bands the upgrader left for the owner (FAQ 1, AwardRow whichToBuy, "Where to Buy") are not a box-claim finding and were left alone.

### best-whole-room-bed-bug-heater-canada (5 lines)

- **L155** (AwardRow Best Overall pros; C2-heat). "Runs on a standard Canadian outlet" vs ZappBug’s 4 separate circuits.
  - Before: `… mattresses, furniture, and belongings together', 'Runs on a standard Canadian outlet'],`
  - After: `… mattresses, furniture, and belongings together', 'Plugs into household outlets; ZappBug says it needs 4 separate circuits'],`
- **L160** (AwardRow Best Portable Room Heater; C2-heat, B-swap). No "Nuventa" brand exists: swapped to the page’s own certified-heater search (L240, "See certified units").
  - Before: `name: 'Forced-Air Portable Bed-Bug Heater (Nuventa-style)',`
  - After: `name: 'Forced-Air Portable Bed-Bug Heater (120V, certified)',`
- **L162** (AwardRow Best Portable Room Heater; C2-heat, B-swap). Same evidence as the entry above.
  - Before: `search: 'nuventa portable bed bug heater',`
  - After: `search: 'portable bed bug heater 120v certified',`
- **L226** (BuyLink (comparison table); C2-heat, B-swap).
  - Before: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="nuventa portable bed bug heater" block>Check price on Amazon.ca →</BuyLink></td>`
  - After: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="portable bed bug heater 120v certified" block>Check price on Amazon.ca →</BuyLink></td>`
- **L279** (BuyLink; C2-heat, B-swap).
  - Before: `<BuyLink tag={AMZ_TAG} search="nuventa portable bed bug heater">Portable room heater →</BuyLink>`
  - After: `<BuyLink tag={AMZ_TAG} search="portable bed bug heater 120v certified">Portable room heater →</BuyLink>`

### best-yellow-jacket-trap-canada (13 lines)

- **L133** (Quick Answer line carrying the AmazonLink; C2-yj). Same unregistered East-formula recommendation as the Best Disposable box; "barely works" (not in RESCUE!’s wording) dropped.
  - Before: `… describes as similar to the Western formula. If matching the lure to Ontario species matters more to you, buy the EAST-formula disposable (YJTD-E) and avoid the YJTD-W &ldquo;West of the Rockies&rdquo; SKU, whose heptyl butyrate lure barely works on the eastern, German, and common yellowjackets that dominate here. Hang traps 6+ metres from your patio, and …`
  - After: `… describes as similar to the Western formula. RESCUE! also makes an East-formula disposable (YJTD-E) for the species more common east of the Rockies, but Health Canada&rsquo;s registry lists only the W bag (PCP 35529), RESCUE!&rsquo;s western formula, so check the PCP number on any bag you buy. Hang traps 6+ metres from your patio, and …`
- **L159** (AwardRow Best Overall why; C2-yj, U-yj). "does not lure honey bees" -> RESCUE!’s "won’t trap"; East-formula recommendation replaced by the registry facts.
  - Before: `… cartridge, a body that lasts years, and it does not lure honey bees. Note the chemistry honestly though — RESCUE! sells the reusable nationwide with a single lure, and by the company\'s own account it is similar to the Western Formula used in the disposable. If species-matched chemistry matters more to you than reusability, the East-formula disposable below is the better Ontario buy.',`
  - After: `… cartridge, a body that lasts years, and RESCUE! says it won’t trap beneficial honeybees. Note the chemistry honestly though — RESCUE! sells the reusable nationwide with a single lure, and by the company\'s own account it is similar to the Western Formula used in the disposable. Health Canada’s registry lists its cartridge and tube lures (PCP 35530, 35531); we found no Canadian registration for RESCUE!’s East-formula disposable.',`
- **L163** (AwardRow Best Overall pros; U-yj).
  - Before: `pros: ['Reusable body — replace only cartridges', 'Does not attract honey bees', 'Catches for weeks per cartridge'],`
  - After: `pros: ['Reusable body — replace only cartridges', 'RESCUE!: won’t trap honeybees', 'Catches for weeks per cartridge'],`
- **L169** (AwardRow Best Multi-Species (W·H·Y); C2-yj, B-reword). No registered multi-species trap on the page: reworded honestly, link unchanged; "Well-proven design in Canada" removed.
  - Before: `… wasps, and bald-faced hornets together. The right pick when you cannot tell what is bullying the patio.',`
  - After: `… wasps, and bald-faced hornets together. Not registered in Canada: we found no W·H·Y Trap in Health Canada’s pesticide registry, and a lure trap sold to attract wasps falls under the Pest Control Products Act, so check for a PCP number before you buy one.',`
- **L172** (AwardRow Best Multi-Species (W·H·Y); C2-yj, B-reword). Same evidence as the entry above.
  - Before: `… groups', 'Season-long with attractant refills', 'Well-proven design in Canada'],`
  - After: `… groups', 'Season-long with attractant refills'],`
- **L173** (AwardRow Best Multi-Species (W·H·Y); C2-yj, B-reword). Same evidence as the entry above.
  - Before: `cons: ['Costs more up front than a single-species …`
  - After: `cons: ['No Canadian registration found', 'Costs more up front than a single-species …`
- **L177** (AwardRow Best Disposable; C2-yj, B-reword). Same search (it covers both bags); box now names the registered W bag, 35529, and says no East registration was found.
  - Before: `name: 'RESCUE! Disposable Yellowjacket Trap — East formula (YJTD-E)',`
  - After: `name: 'RESCUE! Disposable Yellowjacket Trap W (PCP 35529)',`
- **L178** (AwardRow Best Disposable; C2-yj, B-reword). Same evidence as the entry above.
  - Before: `… rural property without tending cartridges.',`
  - After: `… rural property without tending cartridges. The registered bag in Canada is the W (PCP 35529), RESCUE!’s western formula; we found no Canadian registration for the East formula (YJTD-E), so check the PCP number on the bag.',`
- **L182** (AwardRow Best Disposable; C2-yj, B-reword). Same evidence as the entry above.
  - Before: `cons: ['Single-use — pricier over a full season', 'Must check the label says East, not West of the Rockies'],`
  - After: `cons: ['Single-use — pricier over a full season', 'The registered W bag is RESCUE!’s western formula'],`
- **L187** (AwardRow Best Refillable / DIY Bait; C2-yj, B-reword). Schedule 1 item 2 note added; link unchanged.
  - Before: `… only as hard as you do at refreshing bait.',`
  - After: `… only as hard as you do at refreshing bait. A trap sold to attract wasps falls under the Pest Control Products Act in Canada, so check the listing for a PCP number.',`
- **L196** (AwardRow whichToBuy; C2-yj).
  - Before: `… reusable is the default buy on durability &mdash; or take the <em>Best Disposable</em> East-formula bag if you want the lure blended for eastern species. <strong>Mixed wasp trouble &mdash; paper wasps on the eaves plus yellow jackets at the table?</strong> Go <em>Best Multi-Species</em> with the WHY Trap (our <Link href="/blog/rescue-why-trap-review-canada">full WHY Trap review</Link> covers it in depth). <strong>One long weekend or a cottage you visit monthly?</strong> Hang a few <em>Best Disposable</em> bags and bin them full. <strong>Enjoy tinkering?</strong> A <em>Refillable bottle trap</em> plus the seasonal bait switch below out-catches lazy cartridge use &mdash; but only if you keep the bait fresh.`
  - After: `… reusable is the default buy on durability; its cartridge and tube lures are in Health Canada&rsquo;s registry. <strong>Mixed wasp trouble &mdash; paper wasps on the eaves plus yellow jackets at the table?</strong> The <em>Best Multi-Species</em> WHY Trap covers all three, but we found no Canadian registration for it, so check for a PCP number first (our <Link href="/blog/rescue-why-trap-review-canada">full WHY Trap review</Link> covers it in depth). <strong>One long weekend or a cottage you visit monthly?</strong> Hang a few <em>Best Disposable</em> bags and bin them full; the registered one is the W (PCP 35529). <strong>Enjoy tinkering?</strong> A <em>Refillable bottle trap</em> plus the seasonal bait switch below out-catches lazy cartridge use &mdash; but only if you keep the bait fresh, and check its listing for a PCP number.`
- **L254** (Table row label beside the W·H·Y BuyLink (text cell); C2-yj, B-text).
  - Before: `… text-gray-500">wasps + hornets + yellowjackets</span></td>`
  - After: `… text-gray-500">wasps + hornets + yellowjackets; no Canadian registration found</span></td>`
- **L282** (BuyLink (W·H·Y); C2-yj, B-reword). Link unchanged; button text now says no Canadian registration was found.
  - Before: `… wasp hornet yellow jacket">RESCUE! WHY Trap →</BuyLink>`
  - After: `… wasp hornet yellow jacket">RESCUE! WHY Trap (no Canadian registration found) →</BuyLink>`

### mosquito-magnet-canada (3 lines)

- **L249** (AwardRow Best Overall why (fit item); C2-mm). "sufficient for most GTA suburban backyards" contradicted the page’s own advice (hero L162, cons L255).
  - Before: `why: 'Treats up to 1 acre and is sufficient for most GTA suburban backyards — the same propane CO₂ engine as the models costing twice as much, at the entry price in the lineup.',`
  - After: `why: 'Treats up to 1 acre — the same propane CO₂ engine as the models costing twice as much, at the entry price in the lineup. It pays off on acreage and cottage lots; on a typical suburban lot under about a quarter-acre, barrier spray protects the yard faster.',`
- **L260** (AwardRow Executive why; C2-mm, U-mm). "improved attractant delivery" removed; the rest now matches Woodstream Canada’s Executive page.
  - Before: `why: 'The top consumer model — improved attractant delivery, longer cartridge life, and tougher construction built for multi-season cottage …`
  - After: `why: 'The top consumer model — cordless on a rechargeable battery, with fuel-saving modes that Woodstream says extend accessory and propane life by up to 40%, and heavy-duty construction built for multi-season cottage …`
- **L277** (AwardRow whichToBuy; C2-mm). Same suburban claim in the same box.
  - Before: `<strong>Typical suburban backyard, committed to 24/7 operation?</strong> The <em>Best Overall</em> Patriot Plus is all the trap most properties can use. <strong>Cottage, rural acreage, or chronic …`
  - After: `<strong>A lot of a quarter-acre or more, committed to 24/7 operation?</strong> The <em>Best Overall</em> Patriot Plus is all the trap most such properties can use; on a typical suburban lot, barrier spray protects the yard faster. <strong>Cottage, rural acreage, or chronic …`

### vapamore-mr100-steamer-review-canada (3 lines)

- **L145** (TopPick blurb; C2-vap). "the concentrator and detail brush" do not exist on Vapamore’s list; UMN advises against pinpoint nozzles.
  - Before: `… soaking the bed, and a full accessory kit with the concentrator and detail brush that actually drive heat into seams. It is priced in the sensible middle of …`
  - After: `… soaking the bed, and a full accessory kit (floor head, fabric tool, jet nozzle and brushes); for bed bugs, University of Minnesota Extension suggests a floor or upholstery attachment rather than a pinpoint nozzle, which can blow the bugs away. It is priced in the sensible middle of …`
- **L150** (TopPick pros; C2-vap).
  - Before: `'Full accessory kit in the box (concentrator + detail brushes)',`
  - After: `'Full accessory kit in the box (floor head, fabric tool, jet nozzle, brushes)',`
- **L151** (TopPick pros; C2-vap, U-vap). "Hour-plus" vs Vapamore’s 50–60 min.
  - Before: `'Hour-plus run time per fill — enough for one bedroom',`
  - After: `'50–60 minutes of steam per fill (Vapamore) — enough for one bedroom',`

### best-ulv-cold-fogger-canada (7 lines)

- **L119** (StickyBuyBar; C2-ulv, B-swap-sib). PetraTools makes no corded 1–2 gallon ULV (its only ULV is a battery backpack; its fogger collection is empty).
  - Before: `<StickyBuyBar tag={AMZ_TAG} name="PetraTools-class adjustable electric ULV cold fogger" search="petratools ulv cold fogger electric" label="Best overall" />`
  - After: `<StickyBuyBar tag={AMZ_TAG} name="Adjustable corded electric ULV cold fogger" search="corded electric ulv fogger disinfectant" label="Best overall" />`
- **L120** (TopBox (mirrors the StickyBuyBar); C2-ulv, B-swap-sib).
  - Before: `<TopBox tag={AMZ_TAG} name="PetraTools-class adjustable electric ULV cold fogger" search="petratools ulv cold fogger electric" label="Best overall" />`
  - After: `<TopBox tag={AMZ_TAG} name="Adjustable corded electric ULV cold fogger" search="corded electric ulv fogger disinfectant" label="Best overall" />`
- **L148** (AwardRow Best Overall; C2-ulv, B-swap-sib). Brand removed from the name; the class description (corded, flow dial, 1–2 gallon tank) is unchanged.
  - Before: `name: 'PetraTools-Class Adjustable Electric ULV',`
  - After: `name: 'Adjustable Corded Electric ULV Fogger',`
- **L150** (AwardRow Best Overall; C2-ulv, B-swap-sib). Same evidence as the entry above.
  - Before: `search: 'petratools ulv cold fogger electric',`
  - After: `search: 'corded electric ulv fogger disinfectant',`
- **L213** (Table row label beside the swapped BuyLink (text cell); C2-ulv, B-text).
  - Before: `… className="font-normal text-xs text-gray-500">PetraTools-class</span></td>`
  - After: `… className="font-normal text-xs text-gray-500">corded, with a flow dial</span></td>`
- **L217** (BuyLink; C2-ulv, B-swap-sib).
  - Before: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="petratools ulv cold fogger electric" block>Check price on Amazon.ca →</BuyLink></td>`
  - After: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="corded electric ulv fogger disinfectant" block>Check price on Amazon.ca →</BuyLink></td>`
- **L264** (BuyLink; C2-ulv, B-swap-sib).
  - Before: `<BuyLink tag={AMZ_TAG} search="petratools ulv cold fogger electric">Adjustable electric ULV →</BuyLink>`
  - After: `<BuyLink tag={AMZ_TAG} search="corded electric ulv fogger disinfectant">Adjustable electric ULV →</BuyLink>`

### how-to-get-rid-of-wasps-canada (10 lines)

- **L113** (StickyBuyBar; C2-wasp, B-swap, A-asin). W·H·Y (no Canadian registration) swapped to the page’s RESCUE! Yellowjacket Trap row (search "rescue yellowjacket trap", L281).
  - Before: `<StickyBuyBar tag={AMZ_TAG} name="RESCUE! WHY Trap (wasps, hornets & yellowjackets)" asin="B00BPTN6YC" search="rescue why trap" label="Best all-round trap" />`
  - After: `<StickyBuyBar tag={AMZ_TAG} name="RESCUE! Yellowjacket Trap (look for PCP 35529–35531)" search="rescue yellowjacket trap" label="Top trap pick: yellowjackets" />`
- **L114** (TopBox (mirrors the StickyBuyBar); C2-wasp, B-swap, A-asin).
  - Before: `<TopBox tag={AMZ_TAG} name="RESCUE! WHY Trap (wasps, hornets & yellowjackets)" asin="B00BPTN6YC" search="rescue why trap" label="Best all-round trap" />`
  - After: `<TopBox tag={AMZ_TAG} name="RESCUE! Yellowjacket Trap (look for PCP 35529–35531)" search="rescue yellowjacket trap" label="Top trap pick: yellowjackets" />`
- **L139** (TopPick; C2-wasp, B-swap, A-asin). Blurb, pros and cons now describe the yellowjacket trap from RESCUE!’s page and the registry; score 8.7 and label kept.
  - Before: `name="RESCUE! WHY Trap (Wasps, Hornets & Yellowjackets)"`
  - After: `name="RESCUE! Yellowjacket Trap (Yellowjackets Only)"`
- **L140** (TopPick; C2-wasp, B-swap, A-asin). Same evidence as the entry above.
  - Before: `blurb="The one trap that covers all three wasp groups Canadians actually deal with. Its dual-chamber design and multi-attractant lure catch paper wasps, bald-faced hornets, and yellowjackets in a single unit, each lure refill runs about two weeks, and it is reusable season after season. Hang it 6+ metres from your patio starting in mid-April to intercept spring queens. Reasonably priced for a multi-season tool — full teardown in our dedicated review below."`
  - After: `blurb="The trap pick whose lures are in Health Canada’s registry, which lists RESCUE!’s heptyl butyrate W disposable (PCP 35529), cartridge (35530) and tube (35531) but no W·H·Y Trap. It catches yellowjackets only: RESCUE! says it won’t catch hornets or paper wasps. The lure lasts about 2 to 4 weeks, with 4-week liquid and 10-week cartridge refills sold separately. Hang it 6+ metres from your patio, starting in spring to intercept queens, and check the PCP number on the box."`
- **L141** (TopPick; C2-wasp, B-swap, A-asin). Same evidence as the entry above.
  - Before: `asin="B00BPTN6YC"`
  - After: `cta="Check price on Amazon.ca"`
- **L142** (TopPick; C2-wasp, B-swap, A-asin). Same evidence as the entry above.
  - Before: `search="rescue why trap"`
  - After: `search="rescue yellowjacket trap"`
- **L144** (TopPick; C2-wasp, B-swap, A-asin). Same evidence as the entry above.
  - Before: `pros={['Catches all three wasp groups, not just yellowjackets', 'Reusable for years; only the lure is …`
  - After: `pros={['Health Canada lists its cartridge and tube lures (PCP 35530, 35531)', 'Reusable for years; only the lure is …`
- **L145** (TopPick; C2-wasp, B-swap, A-asin). Same evidence as the entry above.
  - Before: `cons={['Manages foragers — it will not eliminate an established nest', 'Lure refills are an ongoing small cost']}`
  - After: `cons={['Yellowjackets only: no paper wasps or hornets (RESCUE!)', 'Manages foragers — it will not eliminate an established nest']}`
- **L272** (Table row label beside the swapped BuyLink (text cell); C2-wasp, B-text).
  - Before: `… font-bold text-brand-800">RESCUE! WHY Trap</td>`
  - After: `… font-bold text-brand-800">RESCUE! WHY Trap<br /><span className="font-normal text-xs text-gray-500">no Canadian registration found</span></td>`
- **L275** (BuyLink (W·H·Y row); C2-wasp, B-swap).
  - Before: `… py-3"><BuyLink tag={AMZ_TAG} search="rescue why trap" block>Check price on Amazon.ca →</BuyLink></td>`
  - After: `… py-3"><BuyLink tag={AMZ_TAG} search="rescue yellowjacket trap" block>RESCUE! Yellowjacket Trap instead →</BuyLink></td>`

### Left unchanged, for the owner (tier 2 pages)

- **Text lines (no affiliate element) that still recommend a product the boxes no longer sell as registered:** co2-mosquito-trap-canada (hero, Quick Answer bullets, FAQs and body still favour Biogents; L119 bullet says "BG-Lure"); best-yellow-jacket-trap-canada (L32 FAQ, L135 bullet and the SKU section still tell Ontario readers to buy the East bag); how-to-get-rid-of-wasps-canada (Quick Answer L120, FAQs L31 and L47 and body L258 still recommend the W·H·Y Trap); best-ulv-cold-fogger-canada (FAQ L30 and L74 still name PetraTools); vapamore-mr100-steamer-review-canada (Quick Answer L126, L129, L131 still say "concentrator", as TIER2-CHECK already noted).
- **Editorial scores on untested units** (Vapamore TopPick 8.9, and every AwardRow score): no rating was added or changed; the owner decides whether scores stay.
- **Prices** already in boxes or beside them were not touched (steam mop AwardRow and FAQs, whole-house whichToBuy, Mosquito Magnet tables and Quick Answer): they are owner items in TIER2-LOG, not box-claim findings.
- **best-crawl-space-dehumidifier-canada and best-whole-house-dehumidifier-canada:** no change (see their sections above).
- **Duplicates the swaps created** (each one honest, none a new product): the cockroach page now has three boxes on the boric acid bait search, the CO2 page two Patriot Plus cards (Best Overall and Best for Acreage), and the fogger page two Pro Max buttons in one row.

## Tier 2 and 3 box fixes: mosquito devices, repellents, foggers, zappers, ants and yard ticks (Oct 29, 2026)

Box fixes of Oct 29, 2026 under FIXBOX.md (owner: "Yes, fix the false product box claims"), following FIX-BRIEF.md. The verified problems are the "Box (owner)" items in TIER3-CHECK.md (lines 7-18, 41-43) and the box flags in TIER3-LOG.md (lines 9-29), each re-checked against its primary source on Oct 29. None of these 15 pages is in TIER2-CHECK.md or TIER2-LOG.md. **202 lines changed on 13 pages**, all `app/blog/<slug>/page.tsx`. Lines were replaced one for one (none added or removed), so each line number is the same before and after. Long lines are shown as exact excerpts around the change (… marks a cut).

**Checks** (script against `git show HEAD:<file>`, line endings normalized; no git writes, no build):
- Line counts unchanged on all 15 pages.
- Counts of `<BuyLink`, `<AwardRow`, `<AwardCard`, `<StickyBuyBar`, `<AmazonLink`, `<TopPick`, `<TopBox`, `asin=`/`asin:`, `search=`/`search:`, `tag=`/`tag:` and `AMZ_TAG` identical to HEAD on all 15.
- Every tag and ASIN unchanged. Every changed `search` value is a term already on the same page (listed per page below).
- No "safe", "non-toxic", "PMRA-registered", "Health Canada approved", testing claim or price in any changed line.
- `npx tsc --noEmit`: no errors.

**Evidence key** (each entry cites these codes):

- `R-ext`: Health Canada's registry product extract, downloaded Oct 29, 2026 (https://pest-control.canada.ca/pesticide-registry-api/api/extract/product; newest first registration 2026-10-28; product pages at https://pest-control.canada.ca/pesticide-registry/en/product-details.html?q=<Reg. No.>).
  - 0 rows (any field): BIOGENTS, MOSQUITAIRE, DYNATRAP, ATRAKTA, IN2CARE, WONDERCIDE, CEDARCIDE, INSECT SHIELD, MOSQUITO BITS; no current BLACK FLAG or CUTTER product; no current citronella, cedar-oil or soybean-oil repellent active.
  - Mosquito traps: MOSQUITO MAGNET PRO 28441 Cancelled (expiry 2024-11-12); PATRIOT PLUS 32375 and EXECUTIVE 29944 (DEVICE), SKEETERVAC SV-15 28452 and SV-3100C 31703, MK12 GUARDIAN 28460 current, DOMESTIC.
  - Fogging: BLACK FLAG FOG INSECTICIDE 28121 and WILSON MOSQUITO FOGGING INSECTICIDE 17201 Cancelled (2017-10-31); current fogging products are aerosol cans (22808.03, 22808.01, 32481) or commercial.
  - BTI: MOSQUITO DUNKS 28888 current DOMESTIC (sites include rain barrels, ornamental ponds, flower planters); pyriproxyfen lists mosquitoes only on dog spot-ons.
  - Repellents: NATRAPEL ICARIDIN 34244, PIACTIVE KIDS 31457 and PIACTIVE LOTION 33411 (icaridin 20%), SAWYER 33032 (pump) and 33177 (pressurized), OFF! FAMILYCARE LOTION FOR KIDS 21299 (DEET 7.5%, ticks among its pests), OFF! BOTANICALS 34594 and 34008 (PMD); THERMACELL PATIO SHIELD 31998 and refills 35066 (allethrin), 33291 (prallethrin), Zone 33274, 34261, 34262 (metofluthrin).
  - Permethrin clothing: NO FLY ZONE 32757 (DOMESTIC, apparel); the 0.5% clothing treatments 27930 and 31726 are COMMERCIAL (military uniforms, mosquito netting).
  - Ants: COMBAT ANT KILLING SYSTEM 26467 Cancelled (2006-05-31); WILSON ANTOUT 28793 and KNOCK DOWN ECO ANT KILLER BAIT 31203 current DOMESTIC, pests include GREASE EATING ANTS; 12 current DOMESTIC products name CARPENTER ANTS (7 spinosad, 5 disodium octaborate, no borax or boric acid), among them RAID MAX LIQUID ANT BAITS 33831 and ORTHO ANT B GON MAX ANT & ROACH KILLER GEL 32560; TERRO 30897 lists "ANTS (COMMON SWEET-EATING ANTS)".
  - Ticks: DOKTOR DOOM TICK KILLER PLUS+ 34405 and MOSQUITO BARRIER 32049 (garlic) current DOMESTIC.
- `L-31998`: Thermacell Patio Shield label 2024-1463 (2024-05-24), fetched with WebFetch: https://pest-control.canada.ca/pesticide-registry-api/api/pdf/inline/en/444693314 . "area up to 4.5 metres from the product (as large as an average-size deck or patio) for up to four hours"; "Effect is not immediate. For best results, allow 30 minutes for product to take effect."; "minimal air movement".
- `L-28888`: Mosquito Dunks label 2023-3665 (2023-07-28), fetched with WebFetch: https://pest-control.canada.ca/pesticide-registry-api/api/pdf/inline/en/444690607 . "one (1) Mosquito Dunk for up to 6 sq. metres water surface, regardless of depth"; "Allow a minimum of 48 hours for control"; "reapply at 30 day intervals if mosquito larvae are detected"; "DO NOT apply this product to any water that is designed to flow beyond your property limits".
- `W-mm`: Woodstream Canada, Patriot Plus MM4202B, read Oct 29: https://www.woodstreambrands.ca/patriot-plus-mm-trap-canada-mm4202b . "Coverage area up to 1 acre"; "Trap works immediately, with results in 7 to 10 days"; "huge drops in the mosquito population should occur in about four weeks"; tank "every 18-21 days"; no percentage reduction. 50-foot cord as verified in TIER2-CHECK.md (mosquito-magnet-canada line).
- `B-bg`: Biogents, read Oct 29: https://us-shop.biogents.com/products/bg-mosquitaire ("BG-Sweetscent ... Each sachet lasts up to two months"; box: "1x BG-Sweetscent lure (2 months)"; "We include the regulator, tubing, and nozzle; you just add the tank"; CO2 "broadens the catch to nearly every species") and https://research-shop.biogents.com/products/bg-sweetscent ("The BG-Sweetscent odor uses the same formulation as the BG-Lure").
- `P-kito`: PARA'KITO, read Oct 29: https://us.parakito.com/products/mosquito-repellent-sport-band-with-2-refills . "Made in France"; "up to 15 days per refill"; not EPA-registered.
- `N-2017`: Rodriguez et al. 2017, J Insect Sci 17(1):24: https://academic.oup.com/jinsectscience/article/17/1/24/3058025 . Bracelets tested: Mosquitavert, Mosquito-NO!, Invisaband (geraniol 30%). "None of the bracelets we tested caused any significant reduction in mosquito attraction."
- `HC-rep`: Health Canada, Personal insect repellents (page details 2021-06-02): https://www.canada.ca/en/health-canada/services/about-pesticides/insect-repellents.html . Wristbands among products that "do not protect well"; no "most effective" statement for DEET or icaridin; icaridin "should not be used on infants younger than 6 months old"; PMD/OLE "should not be used on children younger than 3 years old"; soybean oil "no age restrictions".
- `HC-buy`: Health Canada, Buying pest control products online (2023-12-15): https://www.canada.ca/en/health-canada/services/consumer-product-safety/reports-publications/pesticides-pest-management/fact-sheets-other-resources/buying-pest-control-products-online.html . "It's a violation of the Pest Control Products Act to buy and use unregistered pesticides."
- `PCPR`: Pest Control Products Regulations, Schedule 1 item 2 (devices sold to attract or destroy flying insects) and Schedule 2: https://laws-lois.justice.gc.ca/eng/regulations/SOR-2006-124/page-10.html , as cited on the pages and in TIER3-CHECK.md.
- `CPS-CAT`: Canadian Paediatric Society handout (July 2023): https://caringforkids.cps.ca/handouts/safety-and-injury-prevention/insect_repellents , and CATMAT 2012: https://pmc.ncbi.nlm.nih.gov/articles/PMC6802427/ , as verified in TIER3-CHECK.md lines 10-11 and TIER2-CHECK.md (picaridin-vs-deet): icaridin up to 20% about 5-7 h; PMD up to 2 h; soybean up to 3.5 h; adults DEET 20-30% or icaridin 20%; 20% icaridin first choice 6 months to 12 years.
- `FH-man`: Fountainhead manuals No. 161856 (Burgess propane) and No. 180557 (electric), as verified in TIER3-CHECK.md lines 13-14: Formula 2 only (Burgess); Formula 2, Cutter or Repel (electric); electric preheat 2-3 minutes, no ready light.
- `DT-faq`: DynaTrap FAQ, read Oct 29: https://www.dynatrap.com/faq . Models named: DT1000, DT1000-12V, DT1700, DT1775, DT2000XL, DT2000XLP, DT3019, DT3039; no DT3050 and no separate attractant-fan model; Atrakta "Each lure will last approximately 8 weeks", "designed to mimic the natural body odors of humans" (no ingredients listed). A web search for "DT3050" DynaTrap (Oct 29) found no such model.
- `LR`: Longray does make pulse-jet thermal foggers: Home Depot US lists the Longray Pulsejet Thermal Fogger TS35AE3 (https://www.homedepot.com/p/Longray-Pulsejet-Thermal-Fogger-Sprayer-3rd-Gen-1-6-Gal-TS35AE3/331534392), the Compact Pulsejet TS34 and the TS35N; Shenzhen Longray lists the TS-35A(E) handheld thermal fogger. The flag "no Longray thermal model verified" did not hold.
- `ZAP`: PALONE solar zappers are listed with 4,500 V grids and 5.5-10 W panels (e.g. https://www.desertcart.ma/products/537933075-palone-solar-powerful-fly-zapper-7-5w-solar-panel-fly); PIC solar lanterns are listed at 600 V (e.g. https://www.landmsupply.com/pic-solar-barn-lantern-bug-zapper-flickering-flame). No source for a 3-5 m kill radius or for "stuns more than it kills" (TIER3-CHECK.md line 17).
- `CED`: Cedarcide, read Oct 29: https://cedarcide.com/products/pco-choice . "For your first application each year, apply twice two weeks apart. Then just monthly after that." Wondercide's own pages returned 403 on Oct 29; retailer copy gives up to four weeks per application, so the box's "every 2 weeks" could not be confirmed and was removed.
- `PHAC`: Public Health Agency of Canada, Permethrin-treated clothing: https://www.canada.ca/en/public-health/services/publications/diseases-conditions/permethrin-treated-clothing.html (consumer liquids or sprays to treat one's own clothing are not approved), as verified in TIER2-CHECK.md (TTC line).
- `CAES`: Connecticut Agricultural Experiment Station, Tick Management Handbook: https://portal.ct.gov/-/media/caes/documents/publications/bulletins/b1010pdf (liquids give somewhat better control than granules; fertilizer spreader), as verified in TIER3-CHECK.md line 43.
- `USDA`: Flor-Weiler et al. 2022 (USDA ARS): cedarwood oil repellency against tick nymphs decreased over time, as cited on the page and verified in TIER3-CHECK.md line 43.
- `B-swap`: FIXBOX brief swap rule: the box now points at the registered alternative the same page recommends, reusing a search term already on that page (named in the page note); element type, position and tag kept.
- `B-safe`: banned "safe" wording (FIXBOX brief; DIR2016-01).
- `B-text`: a line with no affiliate element, changed only because the fixed box next to it would otherwise be wrong.
- `N-price`: no-prices rule: prices on lines being edited were removed.

### best-mosquito-repellent-device-canada (13 lines)

Wording fixes; DynaTrap relabelled, not swapped (no registered UV light trap has a search term on this page; the registered devices that do, Thermacell and Mosquito Magnet, already hold their own cards); fogger card and liquid button reworded (no current insecticide is registered for a propane fogger, and the registered aerosol foggers have no search term here). Flags: TIER3-CHECK.md line 7, TIER3-LOG.md line 15.

- **L117** Quick Answer (holds the AmazonLink): "6-metre (about 20-foot) repellent zone ... in roughly 15 minutes" replaced by the Patio Shield label; price range removed. L-31998, N-price
  - Before: `…d-900">Thermacell zone repeller</AmazonLink> ($35&ndash;$229) &mdash; it creates a 6-metre (about 20-foot) repellent zone around your patio in roughly 15 minutes, with no smoke or spray. For thinning a whol…`
  - After: `…d-900">Thermacell zone repeller</AmazonLink> &mdash; the Patio Shield&rsquo;s Canadian label (Reg. No. 31998) gives a repellent zone up to 4.5 metres (15 feet) from the unit and says to allow 30 minutes for it to take effect, with no smoke or spray. For thinning a whol…`
- **L172** Table row label cell (no affiliate element; the row's BuyLink at L177 sells DynaTrap). R-ext, PCPR
  - Before: `<td className="px-4 py-3 font-bold text-brand-800">UV + fan trap (DynaTrap)</td>`
  - After: `<td className="px-4 py-3 font-bold text-brand-800">UV + fan trap (DynaTrap) <span className="font-normal text-xs text-gray-500">not registered in Canada</span></td>`
- **L217** Best Overall why: "bite-free 6-metre bubble ... about 15 minutes" and "Testing shows 70–95% fewer bites" (unsourced testing claim) replaced by the label. L-31998
  - Before: `why: 'Creates a bite-free 6-metre bubble around your patio in about 15 minutes — no smoke, no spray, no flame. Testing shows 70–95% fewer bites inside the zone, and it is the cheapest device that genuinely works…`
  - After: `why: 'The Patio Shield’s Canadian label (Reg. No. 31998) says it repels and kills mosquitoes and reduces bites up to 4.5 metres (15 feet) from the unit, for up to four hours per mat, and to allow 30 minutes for it to take effect — no smoke, no spray, no flame. It is the cheapest device that genuinely works…`
- **L221** Best Overall pro "Works in ~15 minutes". L-31998
  - Before: `pros: ['Works in ~15 minutes', 'No smoke, spray, or flame', 'Cheapest device that actually works'],`
  - After: `pros: ['Label zone up to 4.5 m (15 ft)', 'No smoke, spray, or flame', 'Cheapest device that actually works'],`
- **L227** Best for Large Lots why: "70–90% over 6–8 weeks" (unsourced) replaced by the maker's figures. W-mm, R-ext
  - Before: `…vidence of actually reducing mosquito numbers — 70–90% over 6–8 weeks within about a 1-acre radius by mimicking a breathing human.',`
  - After: `…vidence of actually reducing mosquito numbers, by mimicking a breathing human. Woodstream Canada rates the Patriot Plus (Reg. No. 32375) at up to 1 acre and says results come in 7 to 10 days, with the big drops in about four weeks.',`
- **L231** Same card, con "Takes 6–8 weeks" (same unsourced figure). W-mm
  - Before: `cons: ['Premium up-front cost plus propane', 'Takes 6–8 weeks — nothing tonight'],`
  - After: `cons: ['Premium up-front cost plus propane', 'Works over weeks — nothing tonight'],`
- **L235** DynaTrap card name. R-ext, PCPR
  - Before: `name: 'DynaTrap UV + Fan Trap',`
  - After: `name: 'DynaTrap UV + Fan Trap (not registered in Canada)',`
- **L236** DynaTrap card why. R-ext, PCPR
  - Before: `…insect catcher rather than your primary plan.',`
  - After: `…insect catcher rather than your primary plan. No DynaTrap model is in Health Canada’s register, and a device sold to attract or destroy flying insects needs a Reg. No. (Pest Control Products Regulations, Schedule 1), so check the box for one.',`
- **L245** Fogger card why: no current liquid for a propane fogger. R-ext
  - Before: `…fect is short-lived with no lasting residual.',`
  - After: `…fect is short-lived with no lasting residual. In Canada the liquid is the catch: the propane-fogger insecticides in Health Canada’s registry (Black Flag Fog 28121, Wilson Mosquito Fogging 17201) are cancelled, so check any fogging liquid for a current Reg. No. before you buy the machine.',`
- **L254** whichToBuy: the fogger "buys a few hours" only with a registered liquid. R-ext
  - Before: `…m>Best Pre-Event</em> fogger buys a few hours — but for same-day, whole-yard relief that a…`
  - After: `…m>Best Pre-Event</em> fogger buys a few hours, if you can find a fogging liquid with a current Canadian Reg. No. for it — but for same-day, whole-yard relief that a…`
- **L323** DynaTrap button. R-ext
  - Before: `<BuyLink tag={AMZ_TAG} search="dynatrap insect trap">UV trap →</BuyLink>`
  - After: `<BuyLink tag={AMZ_TAG} search="dynatrap insect trap">UV trap (not registered in Canada) →</BuyLink>`
- **L356** DynaTrap button. R-ext
  - Before: `<BuyLink tag={AMZ_TAG} search="dynatrap insect trap">Check UV trap price on Amazon.ca →</BuyLink>`
  - After: `<BuyLink tag={AMZ_TAG} search="dynatrap insect trap">Check UV trap price on Amazon.ca (no DynaTrap is registered in Canada) →</BuyLink>`
- **L371** Fogging-insecticide button. R-ext
  - Before: `<BuyLink tag={AMZ_TAG} search="mosquito fogging insecticide">Check fogging insecticide on Amazon.ca →</BuyLink>`
  - After: `<BuyLink tag={AMZ_TAG} search="mosquito fogging insecticide">Check fogging insecticide on Amazon.ca (look for a current Canadian Reg. No.) →</BuyLink>`

### biogents-bg-mosquitaire-mosquito-trap-canada (31 lines)

Swap: the page's top pick (StickyBuyBar, TopBox, AwardRow card 1, body button L274) now points at the registered alternative the page itself names for "a trap with a Canadian registration number" (L259: Patriot Plus 32375, Executive 29944), reusing this page's own search `mosquito magnet propane mosquito trap` (L222). Score 8.6 is mosquito-magnet-canada's score for the Patriot Plus. Reworded, not swapped: the CO2 version (its registered alternative already holds card 1 in this row), the comparison-table rows L214-215 (all rows share one button text at L229, which cannot say "instead"), the lures, the BG-GAT and the BG-Home (no registered lure, passive trap or indoor trap has a search term on this page). Flags: TIER3-CHECK.md line 8, TIER3-LOG.md line 16.

- **L106** StickyBuyBar swapped. B-swap, R-ext, W-mm
  - Before: `<StickyBuyBar tag={AMZ_TAG} name="Biogents BG-Mosquitaire mosquito trap" search="biogents bg-mosquitaire mosquito trap" label="The version most people should buy" />`
  - After: `<StickyBuyBar tag={AMZ_TAG} name="Mosquito Magnet propane trap (look for Reg. No. 32375 or 29944)" search="mosquito magnet propane mosquito trap" label="Registered alternative" />`
- **L107** TopBox swapped (mirrors the StickyBuyBar). B-swap, R-ext, W-mm
  - Before: `<TopBox tag={AMZ_TAG} name="Biogents BG-Mosquitaire mosquito trap" search="biogents bg-mosquitaire mosquito trap" label="The version most people should buy" />`
  - After: `<TopBox tag={AMZ_TAG} name="Mosquito Magnet propane trap (look for Reg. No. 32375 or 29944)" search="mosquito magnet propane mosquito trap" label="Registered alternative" />`
- **L131** AwardRow heading, to match the swapped card. B-swap
  - Before: `heading="Our Picks — Biogents Traps &amp; Consumables in Canada"`
  - After: `heading="Our Picks — Biogents Traps &amp; Consumables, and a Registered Alternative"`
- **L134** Card 1 badge. B-swap
  - Before: `badge: 'Best Overall',`
  - After: `badge: 'Registered Alternative',`
- **L135** Card 1 name. B-swap, R-ext
  - Before: `name: 'Biogents BG-Mosquitaire (lure-only)',`
  - After: `name: 'Mosquito Magnet Propane Trap (Patriot Plus, Reg. No. 32375)',`
- **L136** Card 1 why (was "the BG-Lure" and the lure-only trap). B-swap, R-ext, W-mm
  - Before: `why: 'The version most Canadian homeowners should actually buy. Mains power, a fan, the BG-Lure, and a catch bag — no cylinder, no tank, no combustion. Same airflow design as the BG-Sentinel research trap, in a housing meant to live in a garden rather than a field study.',`
  - After: `why: 'No Biogents trap or lure is in Health Canada’s registry, so this is the trap we point Canadian buyers to instead: a propane CO₂ trap registered here as a device, the Patriot Plus (Reg. No. 32375) or the Executive (29944). Woodstream Canada rates the Patriot Plus at up to 1 acre; it runs on a 20 lb propane tank changed every 18 to 21 days and plugs into an outlet within its 50-foot cord.',`
- **L137** Card 1 search. B-swap
  - Before: `search: 'biogents bg-mosquitaire mosquito trap',`
  - After: `search: 'mosquito magnet propane mosquito trap',`
- **L138** Card 1 score (sibling page's score for this product). B-swap
  - Before: `score: 9.1,`
  - After: `score: 8.6,`
- **L140** Card 1 pros. R-ext, W-mm
  - Before: `pros: ['No propane tank or CO2 cylinder', 'Research-grade design lineage', 'Very low season running cost'],`
  - After: `pros: ['Registered device in Canada (32375; Executive 29944)', 'Up to 1 acre (Woodstream Canada)', 'Results in 7 to 10 days, the maker says'],`
- **L141** Card 1 cons. W-mm
  - Before: `cons: ['Needs a continuous outdoor outlet', 'Works over weeks, not overnight'],`
  - After: `cons: ['A 20 lb propane tank every 18 to 21 days', 'Works over weeks, not overnight'],`
- **L145** Card 2 name. R-ext, PCPR
  - Before: `name: 'Biogents BG-Mosquitaire CO2',`
  - After: `name: 'Biogents BG-Mosquitaire CO2 (not registered in Canada)',`
- **L146** Card 2 why: registration added; regulator. B-bg, R-ext, PCPR
  - Before: `why: 'The same trap with a carbon-dioxide plume added, which extends its pull against species that home in on exhaled breath rather than skin scent. Worth it on a property that genuinely backs onto a ravine, pond or wetland — and only after lure-only has proven insufficient.',`
  - After: `why: 'The BG-Mosquitaire with a carbon-dioxide plume added, which Biogents says broadens the catch to nearly every species. Biogents includes the regulator, tubing and nozzle; you add the CO2 tank. No Biogents product is in Health Canada’s registry, and a device sold to attract or destroy flying insects needs a Reg. No. (Pest Control Products Regulations, Schedule 1), so check the box for one.',`
- **L150** Card 2 con "Needs a cylinder plus a regulator" (Biogents includes the regulator). B-bg
  - Before: `cons: ['Needs a cylinder plus a regulator', 'Ongoing refill cost and a tank to store'],`
  - After: `cons: ['Needs a CO2 tank you source locally (Biogents includes the regulator)', 'Ongoing refill cost and a tank to store'],`
- **L153** Card 3 badge "Best Running Cost" (the BG-Lure is not the trap's lure). B-bg
  - Before: `badge: 'Best Running Cost',`
  - After: `badge: 'Check the Lure First',`
- **L155** Card 3 why: "a lure for months ... a multipack covers an Ontario season". B-bg, R-ext
  - Before: `why: 'The consumable that keeps the trap honest. Biogents rates a lure for months rather than weeks, so a multipack covers an Ontario season with a spare. Buying one with the trap is the single best thing you can do to avoid a dead trap in the middle of July.',`
  - After: `why: 'Check which lure your trap takes before you order: Biogents ships the BG-Mosquitaire with a BG-Sweetscent sachet, not a BG-Lure cartridge, and says BG-Sweetscent uses the same formulation as the BG-Lure. No Biogents lure is in Health Canada’s registry, so check the pack for a Reg. No.',`
- **L158** Card 3 pro "One season, one or two cartridges". B-bg
  - Before: `pros: ['One season, one or two cartridges', 'Scent lure, no insecticide in the trap'],`
  - After: `pros: ['Same skin-scent formulation as BG-Sweetscent (Biogents)', 'Scent lure, no insecticide in the trap'],`
- **L159** Card 3 cons. B-bg
  - Before: `cons: ['Store sealed and cool or it degrades early'],`
  - After: `cons: ['Not the lure Biogents ships with the BG-Mosquitaire', 'Store sealed and cool or it degrades early'],`
- **L162** Card 4 badge "Best Add-On Lure" (BG-Sweetscent is the main lure). B-bg
  - Before: `badge: 'Best Add-On Lure',`
  - After: `badge: 'The Lure It Runs On',`
- **L164** Card 4 why: "alongside the BG-Lure", "Short-lived by design". B-bg, R-ext
  - Before: `why: 'A complementary attractant designed to be used alongside the BG-Lure rather than instead of it. Short-lived by design, so treat it as a boost during peak weeks — June and July in the GTA — rather than a season-long consumable.',`
  - After: `why: 'The BG-Mosquitaire’s own lure: Biogents ships the trap with one BG-Sweetscent sachet and says each lasts up to two months, so a May-to-September Ontario season takes about three. No Biogents lure is in Health Canada’s registry, so check the pack for a Reg. No.',`
- **L167** Card 4 pros. B-bg
  - Before: `pros: ['Stacks with the standard lure', 'Cheap way to lift peak-season catch'],`
  - After: `pros: ['The lure that ships with the BG-Mosquitaire', 'Up to two months per sachet (Biogents)'],`
- **L168** Card 4 cons "Shorter life than the BG-Lure", "Not a substitute for the main lure". B-bg, R-ext
  - Before: `cons: ['Shorter life than the BG-Lure', 'Not a substitute for the main lure'],`
  - After: `cons: ['About three sachets for May to September', 'No Biogents lure in Health Canada’s registry'],`
- **L177** Card 5 (BG-GAT) con added. R-ext, PCPR
  - Before: `cons: ['Needs several units to matter', 'Targets container-breeding Aedes specifically'],`
  - After: `cons: ['Needs several units to matter', 'Targets container-breeding Aedes specifically', 'Not registered in Canada (no Biogents product in the registry)'],`
- **L186** Card 6 (BG-Home) con added. R-ext, PCPR
  - Before: `cons: ['Solves an indoor problem, not a yard problem'],`
  - After: `cons: ['Solves an indoor problem, not a yard problem', 'Not registered in Canada (no Biogents product in the registry)'],`
- **L191** whichToBuy: swapped pick, BG-Sweetscent, regulator included. B-swap, B-bg, R-ext
  - Before: `<strong>Suburban GTA backyard with real, all-season pressure?</strong> The <em>Best Overall</em> lure-only BG-Mosquitaire, plus a <em>Best Running Cost</em> lure multipack in the same order. <strong>Backing onto a ravine, pond or wetland, and lure-only was not enough last year?</strong> Step up to <em>Best for Heavy Pressure</em> and budget for the cylinder and regulator too. <strong>Cottage, dock, or nowhere to plug i…`
  - After: `<strong>Want a trap with a Canadian registration?</strong> The <em>Registered Alternative</em> propane trap: look for Reg. No. 32375 (Patriot Plus) or 29944 (Executive) on the box. <strong>Set on the lure-only BG-Mosquitaire anyway?</strong> No Biogents trap or lure is in Health Canada&rsquo;s registry, so weigh that first; the trap runs on <em>BG-Sweetscent</em>, about three sachets a season. <strong>Backing onto a ravine, pond or wetland, and lure-only was not enough last year?</strong> The <em>Best for Heavy Pressure</em> CO2 version needs a CO2 tank too; Biogents includes the regulator. <strong>Cottage, dock, or nowhere to plug i…`
- **L214** Table row 1 (one line; its button is the shared L229): "BG-Lure cartridges" and registration. B-bg, R-ext
  - Before: `… lure + convection-style airflow', feed: 'BG-Lure cartridges, wall power', best: 'Suburban yards with chronic pressure', search: 'biogents bg-mosquitaire mosquito …`
  - After: `… lure + convection-style airflow', feed: 'BG-Sweetscent lure, wall power', best: 'Suburban yards with chronic pressure; no Canadian registration found', search: 'biogents bg-mosquitaire mosquito …`
- **L215** Table row 2: registration. R-ext
  - Before: `…best: 'Ravine, pond and wetland-adjacent lots', search: 'biogents bg-mosquitaire co2 mosqu…`
  - After: `…best: 'Ravine, pond and wetland-adjacent lots; no Canadian registration found', search: 'biogents bg-mosquitaire co2 mosqu…`
- **L216** Table row 3: "Required for the CO2 version". B-bg
  - Before: `…the trap', feed: 'One-time purchase', best: 'Required for the CO2 version', search: 'co2 regulator pressur…`
  - After: `…the trap', feed: 'One-time purchase', best: 'Biogents includes one with its CO2 version', search: 'co2 regulator pressur…`
- **L274** Body button for the lure-only trap swapped, as its card was. B-swap, R-ext
  - Before: `<BuyLink tag={AMZ_TAG} search="biogents bg-mosquitaire mosquito trap">Check the BG-Mosquitaire on Amazon.ca &rarr;</BuyLink>`
  - After: `<BuyLink tag={AMZ_TAG} search="mosquito magnet propane mosquito trap">A propane trap instead (look for Reg. No. 32375 or 29944; no Biogents trap is registered) &rarr;</BuyLink>`
- **L275** BG-Lure button. B-bg
  - Before: `<BuyLink tag={AMZ_TAG} search="biogents bg-lure replacement cartridge">Check BG-Lure cartridges &rarr;</BuyLink>`
  - After: `<BuyLink tag={AMZ_TAG} search="biogents bg-lure replacement cartridge">Check BG-Lure cartridges (the BG-Mosquitaire ships with BG-Sweetscent) &rarr;</BuyLink>`
- **L293** CO2-version button. R-ext
  - Before: `<BuyLink tag={AMZ_TAG} search="biogents bg-mosquitaire co2 mosquito trap">Check the CO2 version &rarr;</BuyLink>`
  - After: `<BuyLink tag={AMZ_TAG} search="biogents bg-mosquitaire co2 mosquito trap">Check the CO2 version (no Canadian registration found) &rarr;</BuyLink>`
- **L357** BG-Sweetscent button. R-ext
  - Before: `<BuyLink tag={AMZ_TAG} search="biogents bg-sweetscent lure">Check BG-Sweetscent &rarr;</BuyLink>`
  - After: `<BuyLink tag={AMZ_TAG} search="biogents bg-sweetscent lure">Check BG-Sweetscent (no Canadian registration found) &rarr;</BuyLink>`

### best-professional-mosquito-trap-canada (19 lines)

Swaps. Mosquito Magnet Pro (28441, cancelled) -> the registered propane CO2 traps this page names (L111, L284-288, L350), reusing the page's own search `propane co2 mosquito trap` (card 3, L166). In2Care (no In2Care product and no pyriproxyfen mosquito larvicide registered) -> the registered BTI this page names for the larval job (Mosquito Dunks 28888, L293, L302, L335), reusing the page's own search `bti mosquito dunks granules` (L396); score 8.8 is mosquito-dunks-canada-guide's score for Mosquito Dunks. DynaTrap button reworded (no registered UV trap has a search term here). Flags: TIER3-CHECK.md line 9, TIER3-LOG.md line 17.

- **L117** StickyBuyBar swapped. B-swap, R-ext
  - Before: `<StickyBuyBar tag={AMZ_TAG} name="Mosquito Magnet Pro (commercial propane CO₂ trap)" search="mosquito magnet pro commercial trap" label="Best pro trap" />`
  - After: `<StickyBuyBar tag={AMZ_TAG} name="Registered propane CO₂ trap (look for Reg. No. 32375, 29944, 28452, 31703 or 28460)" search="propane co2 mosquito trap" label="Best registered pro trap" />`
- **L118** TopBox swapped. B-swap, R-ext
  - Before: `<TopBox tag={AMZ_TAG} name="Mosquito Magnet Pro (commercial propane CO₂ trap)" search="mosquito magnet pro commercial trap" label="Best pro trap" />`
  - After: `<TopBox tag={AMZ_TAG} name="Registered propane CO₂ trap (look for Reg. No. 32375, 29944, 28452, 31703 or 28460)" search="propane co2 mosquito trap" label="Best registered pro trap" />`
- **L145** Card 1 name. B-swap, R-ext
  - Before: `name: 'Mosquito Magnet Pro (commercial propane CO₂)',`
  - After: `name: 'Registered Propane CO₂ Trap (Patriot Plus, Executive or SkeeterVac)',`
- **L146** Card 1 why: cancelled Pro and the current numbers. R-ext
  - Before: `…uous seasonal running across roughly an acre.',`
  - After: `…uous seasonal running across roughly an acre. The Mosquito Magnet Pro’s Canadian registration (28441) is cancelled, so buy a model whose box shows a current Reg. No.: Patriot Plus 32375, Executive 29944, SkeeterVac SV-15 28452 or SV-3100C 31703.',`
- **L147** Card 1 search. B-swap
  - Before: `search: 'mosquito magnet pro commercial trap',`
  - After: `search: 'propane co2 mosquito trap',`
- **L154** Card 2 badge. B-swap
  - Before: `badge: 'Best Life-Cycle System',`
  - After: `badge: 'Best Larval Control (Registered)',`
- **L155** Card 2 name. B-swap, R-ext
  - Before: `name: 'In2Care Larvicide Autodissemination Station',`
  - After: `name: 'Mosquito Dunks BTI Larvicide (Reg. No. 28888)',`
- **L156** Card 2 why: "A licensed-operator, PMRA-regulated program" replaced. R-ext, L-28888
  - Before: `why: 'A different weapon entirely: females contaminate themselves on treated gauze, then carry a larvicide to every water source they visit — sabotaging cryptic breeding sites you could never find. A licensed-operator, PMRA-regulated program, not a consumer purchase.',`
  - After: `why: 'The In2Care larvicide station has no Canadian registration: Health Canada’s registry lists no In2Care product and no pyriproxyfen product labelled for mosquito larvae, so no one may use it here. The larval half of a Canadian program is a registered BTI product in the water you can reach. The Mosquito Dunks label: one dunk for up to 6 square metres of water surface, regardless of depth; allow at least 48 hours; reapply at 30-day intervals if larvae are detected.',`
- **L157** Card 2 search. B-swap
  - Before: `search: 'mosquito larvicide station',`
  - After: `search: 'bti mosquito dunks granules',`
- **L158** Card 2 score (sibling page's score for Mosquito Dunks). B-swap
  - Before: `score: 8.5,`
  - After: `score: 8.8,`
- **L159** Card 2 pros. R-ext, L-28888
  - Before: `pros: ['Reaches hidden breeding sites you cannot', 'Attacks larvae, not just adults', 'Grid-placed to cover a whole zone'],`
  - After: `pros: ['Registered for home use (Reg. No. 28888)', 'Kills larvae before they become biting adults', 'Label sites include rain barrels, ornamental ponds and planters'],`
- **L160** Card 2 cons "Regulated pesticide — licensed operators only" replaced. L-28888, R-ext
  - Before: `cons: ['Regulated pesticide — licensed operators only', 'Priced and serviced as a seasonal program'],`
  - After: `cons: ['Only treats the water you find and dose', 'Not for water that flows off your property (label); Mosquito Bits granules have no Canadian registration'],`
- **L183** whichToBuy: "In2Care ... through a licensed operator" replaced. R-ext, L-28888
  - Before: `…ding sites you can’t find or reach?</strong> The <em>Best Life-Cycle System</em> (In2Care) is the autodissemination answer &mdash; through a licensed operator. <strong>Estate-size lot?</strong> Plan a <e…`
  - After: `…ding sites you can’t find or reach?</strong> In2Care has no Canadian registration, so it is not an option here; dose the water you can reach with the <em>Best Larval Control</em> BTI (Mosquito Dunks, Reg. No. 28888) and let a barrier spray cover the rest. <strong>Estate-size lot?</strong> Plan a <e…`
- **L210** Table row label cell (no affiliate element): "Mosquito Magnet Pro" -> the registered models, to match the swapped button at L214. B-text, R-ext
  - Before: `…lassName="font-normal text-xs text-gray-500">Mosquito Magnet Pro</span></td>`
  - After: `…lassName="font-normal text-xs text-gray-500">Registered models: Patriot Plus, Executive, SkeeterVac</span></td>`
- **L214** Table row button swapped. B-swap
  - Before: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="mosquito magnet pro commercial trap" block>Check price on Amazon.ca →</BuyLink></td>`
  - After: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="propane co2 mosquito trap" block>Check price on Amazon.ca →</BuyLink></td>`
- **L221** Table row button (In2Care row, which already says "Not registered in Canada") swapped. B-swap, L-28888
  - Before: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="mosquito larvicide station" block>Check price on Amazon.ca →</BuyLink></td>`
  - After: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="bti mosquito dunks granules" block>BTI instead (look for Reg. No. 28888) →</BuyLink></td>`
- **L235** DynaTrap button. R-ext
  - Before: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="dynatrap insect trap" block>Check price on Amazon.ca →</BuyLink></td>`
  - After: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="dynatrap insect trap" block>Check price on Amazon.ca (no DynaTrap is registered) →</BuyLink></td>`
- **L316** Body button swapped. B-swap
  - Before: `<BuyLink tag={AMZ_TAG} search="mosquito magnet pro commercial trap">Commercial propane trap →</BuyLink>`
  - After: `<BuyLink tag={AMZ_TAG} search="propane co2 mosquito trap">Propane trap (check for a current Reg. No.) →</BuyLink>`
- **L317** Body button swapped. B-swap, L-28888
  - Before: `<BuyLink tag={AMZ_TAG} search="mosquito larvicide station">Larvicide station →</BuyLink>`
  - After: `<BuyLink tag={AMZ_TAG} search="bti mosquito dunks granules">BTI larvicide instead (look for Reg. No. 28888) →</BuyLink>`

### mosquito-repellent-bracelets-canada (32 lines)

Swaps, product by product. PARA'KITO elements (StickyBuyBar, TopBox, card 1, L282, L305) -> the registered recommendation this page makes instead of a band (hero L96, L268, L389): a 20% icaridin repellent, reusing the page's own search `icaridin insect repellent` (L389); score 9.0 is picaridin-vs-deet's score for its 20% icaridin pick. Invisaband elements (card 4, L326; Invisaband failed the NMSU test) -> a heated area repeller, this page's answer for an evening on the deck (L270, L380), reusing the page's own search `thermacell mosquito repeller` (L380); score 9.1 is best-mosquito-repellent-device-canada's Thermacell score. Reworded, not swapped: citronella disposables and Mosquito Guard (both registered alternatives already hold a card in this row), and the PARA'KITO refill line (a refill for a band already owned). Flags: TIER3-CHECK.md line 10, TIER3-LOG.md line 18.

- **L102** StickyBuyBar swapped (was PARA'KITO). B-swap, R-ext, HC-rep
  - Before: `<StickyBuyBar tag={AMZ_TAG} name="PARA'KITO refillable repellent band" search="parakito mosquito bracelet" label="Best-value band" />`
  - After: `<StickyBuyBar tag={AMZ_TAG} name="20% icaridin repellent (look for a Canadian Reg. No.)" search="icaridin insect repellent" label="What works instead" />`
- **L103** TopBox swapped. B-swap, R-ext, HC-rep
  - Before: `<TopBox tag={AMZ_TAG} name="PARA'KITO refillable repellent band" search="parakito mosquito bracelet" label="Best-value band" />`
  - After: `<TopBox tag={AMZ_TAG} name="20% icaridin repellent (look for a Canadian Reg. No.)" search="icaridin insect repellent" label="What works instead" />`
- **L126** AwardRow heading, to match the swapped cards. B-swap
  - Before: `heading="Our Picks — Best Mosquito Repellent Bracelets in Canada"`
  - After: `heading="Our Picks — Mosquito Bracelets, and What Works Instead"`
- **L129** Card 1 badge. B-swap
  - Before: `badge: 'Best Overall',`
  - After: `badge: 'What Works Instead',`
- **L130** Card 1 name. B-swap
  - Before: `name: 'PARA’KITO Refillable Band',`
  - After: `name: '20% Icaridin Repellent (look for a Canadian Reg. No.)',`
- **L131** Card 1 why (was "Swiss-made"; PARA'KITO: "Made in France"). B-swap, R-ext, HC-rep, CPS-CAT
  - Before: `why: 'The one band worth buying: Swiss-made with replaceable essential-oil pellets, so it lasts a full season instead of a weekend. Still only protects the skin right next to it — but it is the best-value pick in a weak category.',`
  - After: `why: 'No repellent bracelet is in Health Canada’s registry, and Health Canada lists repellent wristbands among products that do not protect well, so this is what we point readers to instead: an icaridin repellent on exposed skin. The Canadian Paediatric Society gives icaridin up to 20% about 5 to 7 hours against mosquitoes, and CATMAT names 20% icaridin its first choice for children 6 months to 12 years. Examples on the register: Natrapel Icaridin (34244) and PiActive Kids (31457).',`
- **L132** Card 1 search. B-swap
  - Before: `search: 'parakito mosquito bracelet',`
  - After: `search: 'icaridin insect repellent',`
- **L133** Card 1 score (sibling page's score). B-swap
  - Before: `score: 7.4,`
  - After: `score: 9.0,`
- **L135** Card 1 pros. R-ext, CPS-CAT
  - Before: `pros: ['Refillable — season-long value', 'DEET-free · popular with parents', 'Sturdier than disposables'],`
  - After: `pros: ['Covers all the skin you apply it to', 'Registered examples: Natrapel 34244, PiActive Kids 31457', 'CATMAT’s first choice for ages 6 months to 12 years'],`
- **L136** Card 1 cons. HC-rep
  - Before: `cons: ['Only protects near the band', 'Refill pellets add cost'],`
  - After: `cons: ['Something to apply, not something to wear', 'Not for infants under 6 months (Health Canada)'],`
- **L140** Card 2 name. R-ext
  - Before: `name: 'Citronella Disposable (10-pk)',`
  - After: `name: 'Citronella Disposable (10-pk; not registered in Canada)',`
- **L141** Card 2 why: registration. R-ext, HC-rep
  - Before: `… scent fades within a day or two of real use.',`
  - After: `… scent fades within a day or two of real use. No current Canadian product has citronella oil as its active ingredient, and no bracelet is in Health Canada’s registry.',`
- **L148** Card 3 badge "Best for Kids" (unregistered band). R-ext
  - Before: `badge: 'Best for Kids',`
  - After: `badge: 'Kids’ Band (Not Registered)',`
- **L150** Card 3 why: registration and CATMAT. R-ext, CPS-CAT
  - Before: `…topical repellent whose label covers children.',`
  - After: `…topical repellent whose label covers children: no bracelet is in Health Canada’s registry, and for a child CATMAT’s first choice is 20% icaridin from 6 months.',`
- **L157** Card 4 badge. B-swap
  - Before: `badge: 'Best for Parties',`
  - After: `badge: 'Best for a Backyard Gathering',`
- **L158** Card 4 name. B-swap
  - Before: `name: 'Invisaband Bulk Pack',`
  - After: `name: 'Thermacell Heated Area Repeller (look for a Canadian Reg. No.)',`
- **L159** Card 4 why (Invisaband failed the test). N-2017, L-31998
  - Before: `why: 'Bulk citronella bands for camping trips and backyard gatherings where you want to hand one to everyone. Same limited-radius principle as the rest.',`
  - After: `why: 'Invisaband was one of the three bracelets in the 2017 New Mexico State University test, and none of them reduced mosquito attraction. For a group on a deck, a heated area repeller protects the seating instead: Thermacell’s Patio Shield label (Reg. No. 31998) gives a zone up to 4.5 metres (15 feet) from the unit and says to allow 30 minutes for it to take effect.',`
- **L160** Card 4 search. B-swap
  - Before: `search: 'invisaband citronella bracelet',`
  - After: `search: 'thermacell mosquito repeller',`
- **L161** Card 4 score (sibling page's score). B-swap
  - Before: `score: 6.8,`
  - After: `score: 9.1,`
- **L162** Card 4 pros. L-31998, R-ext
  - Before: `pros: ['Bulk quantities', 'Handy for groups', 'Cheap'],`
  - After: `pros: ['Protects the seating area, not one wrist', 'No spray on skin', 'Registered in Canada (Patio Shield 31998)'],`
- **L163** Card 4 cons (page L380: works best on a still evening; nothing outside the zone). L-31998
  - Before: `cons: ['Disposable only', 'Weak beyond the band'],`
  - After: `cons: ['Works best in still air', 'Nothing for anyone outside the zone'],`
- **L168** whichToBuy, to match the swapped and reworded cards. B-swap, N-2017, R-ext
  - Before: `<strong>Using a band all season?</strong> The <em>Best Overall</em> refillable PARA’KITO is the only one worth reusing. <strong>Handing them out at a party?</strong> Grab the <em>Best Budget</em> or <em>Best for Parties</em> multipacks. <strong>For a child?</strong> A <em>Best for Kids</em> DEET-free band is a fine extra layer — but for a backyard evening with fewer bites, a pro…`
  - After: `<strong>Want protection that works?</strong> The <em>What Works Instead</em> pick is a 20% icaridin repellent with a Canadian Reg. No., on exposed skin. <strong>Hosting people on the deck?</strong> The <em>Backyard Gathering</em> heated area repeller protects the seating; a band does not. <strong>Still want a band?</strong> No bracelet is registered in Canada and none of the three in the NMSU test reduced mosquito attraction, so treat a <em>Best Budget</em> multipack or a <em>Kids’ Band</em> as an extra at most, on top of a registered repellent. For a backyard evening with fewer bites, a pro…`
- **L282** Body button swapped. B-swap
  - Before: `<BuyLink tag={AMZ_TAG} search="parakito mosquito bracelet">Check refillable band price on Amazon.ca →</BuyLink>`
  - After: `<BuyLink tag={AMZ_TAG} search="icaridin insect repellent">Icaridin repellent instead (look for the Reg. No.) →</BuyLink>`
- **L283** Citronella button. R-ext
  - Before: `<BuyLink tag={AMZ_TAG} search="citronella mosquito bracelet">Citronella band multipacks →</BuyLink>`
  - After: `<BuyLink tag={AMZ_TAG} search="citronella mosquito bracelet">Citronella band multipacks (not registered in Canada) →</BuyLink>`
- **L305** Table row button (PARA'KITO row) swapped. B-swap
  - Before: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="parakito mosquito band" block>Check price on Amazon.ca →</BuyLink></td>`
  - After: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="icaridin insect repellent" block>Icaridin instead (look for the Reg. No.) →</BuyLink></td>`
- **L308** Table row label cell (no affiliate element; its button is L312). R-ext
  - Before: `…me="font-normal text-xs text-gray-500">(10-pk)</span></td>`
  - After: `…me="font-normal text-xs text-gray-500">(10-pk; not registered in Canada)</span></td>`
- **L315** Table row label cell (no affiliate element; its button is L319). R-ext
  - Before: `<td className="px-4 py-3 font-bold text-brand-800">Mosquito Guard Bands</td>`
  - After: `<td className="px-4 py-3 font-bold text-brand-800">Mosquito Guard Bands <span className="font-normal text-xs text-gray-500">(not registered in Canada)</span></td>`
- **L326** Table row button (Invisaband row) swapped. B-swap
  - Before: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="invisaband citronella bracelet" block>Check price on Amazon.ca →</BuyLink></td>`
  - After: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="thermacell mosquito repeller" block>Area repeller instead (look for the Reg. No.) →</BuyLink></td>`
- **L331** Refill line (holds the BuyLink): "roughly 7–15 days" -> maker's "up to 15 days"; registration. P-kito, R-ext
  - Before: `… text-gray-600 mb-6">Buying a refillable band? Grab a pack of replacement pellets at the same time — each lasts roughly 7–15 days, so a few packs cover a full May–September season. <BuyLink tag={AMZ_TAG} search="parakito r…`
  - After: `… text-gray-600 mb-6">Buying a refillable band anyway? PARA&rsquo;KITO says each pellet lasts up to 15 days, so a few packs cover a full May–September season; like the band, the refills have no Canadian registration. <BuyLink tag={AMZ_TAG} search="parakito r…`
- **L380** Thermacell line (holds the BuyLink): "(metofluthrin or prallethrin)" -> the Canadian registrations' actives. R-ext
  - Before: `…a mat that disperses a pyrethroid repellent (metofluthrin or prallethrin) across a defined zone around the seating, s…`
  - After: `…a mat that disperses a pyrethroid repellent (allethrin or prallethrin on the butane models, metofluthrin on the rechargeable Zone models, by their Canadian registrations) across a defined zone around the seating, s…`
- **L389** Icaridin line (holds the BuyLink): "Health Canada describes DEET and icaridin as the most effective" (not on Health Canada's page) -> CATMAT. HC-rep, CPS-CAT
  - Before: `…people skip, having already bought the band. Health Canada describes DEET and icaridin as the most effective personal insect repellents available in Canada &mdash; icaridin being the Canadian name for…`
  - After: `…people skip, having already bought the band. Canada&rsquo;s travel-medicine committee, CATMAT, recommends DEET at 20&ndash;30% or icaridin at 20% for adults and names 20% icaridin its first choice for children 6 months to 12 years &mdash; icaridin being the Canadian name for…`
- **L406** Permethrin button: the 0.5% clothing sprays on the register are commercial class. R-ext
  - Before: `…in clothing spray">Check permethrin clothing and gear treatments on Amazon.ca &rarr;</BuyLink></p>`
  - After: `…in clothing spray">Check permethrin clothing sprays on Amazon.ca (the 0.5% sprays on Canada&rsquo;s register are commercial class) &rarr;</BuyLink></p>`

### best-bug-spray-for-kids-canada (20 lines)

Swaps. Sawyer lotion (no Sawyer lotion registered: 33032 pump, 33177 pressurized) -> PiActive Insect Repellent Lotion 33411, the registered icaridin lotion in this page's own registry table (L261), reusing the page's own search `piactive icaridin repellent` (L141, L319); score 8.7 is this page's PiActive score. Bite Blocker (no soybean-oil repellent registered) -> OFF! FamilyCare Lotion for use on Kids 21299, in the page's registry table (L263), reusing the page's own search `off familycare deet` (L290); score kept. Wording: Natrapel "Health Canada's preferred pick" -> CATMAT; PiActive "approved for kids" and "safety tier" removed; OFF! Botanicals "4–6 hour" -> CPS up to 2 h. Flags: TIER3-CHECK.md line 11, TIER3-LOG.md line 19.

- **L130** Card 1 why: "Health Canada's preferred pick" (Health Canada names none). CPS-CAT, R-ext, HC-rep
  - Before: `why: 'Health Canada’s preferred pick for children over 6 months — icaridin 20% covers mosquitoes and ticks for up to 12 hours, is nearly odourless, and won’t cloud sunglasses or soften strolle…`
  - After: `why: '20% icaridin is CATMAT’s first choice for children 6 months to 12 years, and Natrapel’s label (Reg. No. 34244) claims up to 12 hours against mosquitoes and ticks — it is nearly odourless and won’t cloud sunglasses or soften strolle…`
- **L140** Card 2 why: "approved for kids 6 months and up" and "at the same safety tier". B-safe, R-ext, HC-rep
  - Before: `why: 'A widely stocked Canadian icaridin 20% at the same safety tier as Natrapel — approved for kids 6 months and up, with up to 7 hours of mosquito and tick protection per application.',`
  - After: `why: 'A widely stocked Canadian icaridin 20% with the same active as Natrapel, giving up to 7 hours of mosquito and tick protection per application. PiActive Kids is registered here (Reg. No. 31457); Health Canada says icaridin should not be used on infants under 6 months.',`
- **L147** Card 3 badge "Best Long-Lasting Lotion". B-swap
  - Before: `badge: 'Best Long-Lasting Lotion',`
  - After: `badge: 'Best Lotion',`
- **L148** Card 3 name. B-swap, R-ext
  - Before: `name: 'Sawyer Picaridin 20% Lotion',`
  - After: `name: 'PiActive Insect Repellent Lotion (icaridin 20%, Reg. No. 33411)',`
- **L149** Card 3 why: "up to 12 hours" (not on a Canadian label). R-ext, CPS-CAT
  - Before: `why: 'A lotion format that’s easy to rub on squirming kids without overspray, giving up to 12 hours of icaridin coverage for hikes and cottage days.',`
  - After: `why: 'No Sawyer lotion is registered in Canada (Sawyer’s Canadian registrations are a pump spray, 33032, and a pressurized spray, 33177), so the lotion pick is PiActive’s registered icaridin lotion (Reg. No. 33411). A lotion is easy to rub on squirming kids without overspray; the Canadian Paediatric Society gives icaridin up to 20% about 5 to 7 hours against mosquitoes.',`
- **L150** Card 3 search. B-swap
  - Before: `search: 'sawyer picaridin lotion',`
  - After: `search: 'piactive icaridin repellent',`
- **L151** Card 3 score (this page's PiActive score). B-swap
  - Before: `score: 8.5,`
  - After: `score: 8.7,`
- **L152** Card 3 pros "Up to 12 h coverage". R-ext, CPS-CAT
  - Before: `pros: ['Up to 12 h coverage', 'Lotion = no aerosol overspray', 'Good for face-adjacent application by parents'],`
  - After: `pros: ['Registered icaridin 20% lotion (33411)', 'Lotion = no aerosol overspray', 'About 5 to 7 h against mosquitoes (CPS)'],`
- **L158** Card 4 why: "solid 4–6 hour protection". CPS-CAT, HC-rep
  - Before: `why: 'The strongest plant-derived choice for families who want a botanical repellent — solid 4–6 hour protection, but note the Health Canada label caps it at 3 years and up.',`
  - After: `why: 'The registered plant-derived choice for families who want a botanical repellent — the Canadian Paediatric Society gives PMD up to 2 hours against mosquitoes, and Health Canada says not to use it on children under 3.',`
- **L161** Card 4 pro "4–6 h protection". CPS-CAT, R-ext
  - Before: `pros: ['Plant-derived (PMD)', '4–6 h protection', 'DEET-free'],`
  - After: `pros: ['Plant-derived (PMD)', 'Registered (spray 34594, lotion 34008)', 'DEET-free'],`
- **L166** Card 5 name. B-swap, R-ext
  - Before: `name: 'Bite Blocker Soybean-Oil Repellent',`
  - After: `name: 'OFF! FamilyCare Lotion for use on Kids (DEET 7.5%, Reg. No. 21299)',`
- **L167** Card 5 why: "about 2 hours" (CPS: up to 3.5 h) and no registration. R-ext, CPS-CAT, label 21299 as verified in TIER3-CHECK.md line 11
  - Before: `why: 'The gentlest option for younger toddlers over 6 months — soybean-oil based and low-irritation, though it wears off in about 2 hours so you’ll reapply often.',`
  - After: `why: 'Bite Blocker and other soybean-oil repellents have no current Canadian registration, so the toddler pick is a registered low-DEET lotion. Its label: not on infants under 6 months; from 6 months to 2 years no more than once a day and not for daily use; from 2 to 12 years up to 3 times a day; reapply after 3 hours if necessary.',`
- **L168** Card 5 search. B-swap
  - Before: `search: 'bite blocker soybean repellent',`
  - After: `search: 'off familycare deet',`
- **L170** Card 5 pros. R-ext
  - Before: `pros: ['Gentle for young toddlers', 'Soybean-oil base', 'DEET-free'],`
  - After: `pros: ['Labelled for children from 6 months', 'Low DEET (7.5%)', 'Ticks are on the label'],`
- **L171** Card 5 cons (label 21299, TIER3-CHECK.md line 11). R-ext
  - Before: `cons: ['Only ~2 h protection', 'Frequent reapplication', 'Weak on ticks'],`
  - After: `cons: ['Under 2: once a day at most, not daily (label)', 'Reapply after 3 hours if necessary (label)'],`
- **L176** whichToBuy: "Best Long-Lasting Lotion". B-swap
  - Before: `…on for younger kids?</strong> The <em>Best Long-Lasting Lotion</em> avoids aerosol overspray. <strong>Want a pla…`
  - After: `…on for younger kids?</strong> The <em>Best Lotion</em>, PiActive&rsquo;s registered icaridin lotion (Reg. No. 33411), avoids aerosol overspray. <strong>Want a pla…`
- **L322** Table row label cell (no affiliate element). R-ext
  - Before: `…e="font-normal text-xs text-gray-500">(lotion)</span></td>`
  - After: `…e="font-normal text-xs text-gray-500">(lotion; not registered in Canada)</span></td>`
- **L325** Table row cell "Up to 12 h" (no Canadian label). R-ext
  - Before: `<td className="px-4 py-3 text-gray-700">Up to 12 h</td>`
  - After: `<td className="px-4 py-3 text-gray-700">No Canadian label</td>`
- **L326** Table row button swapped. B-swap
  - Before: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="sawyer picaridin lotion" block>Check price on Amazon.ca →</BuyLink></td>`
  - After: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="piactive icaridin repellent" block>Registered lotion instead (Reg. No. 33411) →</BuyLink></td>`
- **L347** Table row button (Bite Blocker row, which already says "not registered in Canada") swapped. B-swap
  - Before: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="bite blocker soybean repellent" block>Check price on Amazon.ca →</BuyLink></td>`
  - After: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="off familycare deet" block>Registered kids’ lotion instead (Reg. No. 21299) →</BuyLink></td>`

### best-thermal-fogger-canada (5 lines)

Reworded: Black Flag propane and electric cards and the whichToBuy (no current homeowner liquid labelled for a thermal fogger; the registered aerosol foggers have no search term here). Longray boxes left: see LR. Flags: TIER3-CHECK.md line 13, TIER3-LOG.md line 9.

- **L159** Card 2 why: "fog a suburban yard before an evening event". R-ext, FH-man
  - Before: `why: 'The plug-and-play choice: screw on a propane cartridge, let it warm up, and fog a suburban yard before an evening event. Light, affordable, and simple — the easiest way to get a real thermal fog without buying pro gear.',`
  - After: `why: 'The plug-and-play machine: screw on a propane cartridge, let it warm up, and it makes a real thermal fog without pro gear. In Canada the liquid is the catch: no current homeowner insecticide is labelled for a thermal fogger, the Canadian Black Flag Fog Insecticide (Reg. No. 28121) was cancelled in 2017, and the Black Flag Formula 2 that Fountainhead’s manuals name has no Canadian registration.',`
- **L162** Card 2 pro "Great for occasional pre-event fogging". R-ext
  - Before: `pros: ['Cheap and genuinely simple to run', 'Light and cordless — no fuel mixing', 'Great for occasional pre-event fogging'],`
  - After: `pros: ['Cheap and genuinely simple to run', 'Light and cordless — no fuel mixing'],`
- **L163** Card 2 cons: liquid. R-ext
  - Before: `cons: ['Ongoing propane cartridge cost', 'Smaller tank, less canopy reach'],`
  - After: `cons: ['No current Canadian homeowner liquid labelled for it', 'Ongoing propane cartridge cost', 'Smaller tank, less canopy reach'],`
- **L168** Card 3 why: the electric manual's liquids. FH-man, R-ext
  - Before: `…wer source and wants to skip disposable fuel.',`
  - After: `…wer source and wants to skip disposable fuel. The Fountainhead electric fogger’s manual names Black Flag Formula 2, Cutter or Repel fogging insecticide, and none of them is registered in Canada; check any liquid for a current Reg. No. and a label that names your machine.',`
- **L186** whichToBuy: "is all you need". R-ext
  - Before: `…w per-acre cost. <strong>Normal suburban yard, occasional pre-party knockdown?</strong> The <em>Best for Homeowners</em> Black Flag propane fogger is all you need. <strong>Fog often near an outlet and hate buying cartridges?</strong> Go <em>Electric</em>. <strong>Testing the waters on a small lot?<…`
  - After: `…w per-acre cost. <strong>Normal suburban yard?</strong> The <em>Best for Homeowners</em> Black Flag propane fogger is the simplest machine, but no current Canadian homeowner liquid is labelled for a thermal fogger, so settle the liquid first; the simplest legal fog for a homeowner is a registered aerosol patio fogger can. <strong>Fog often near an outlet and hate buying cartridges?</strong> Go <em>Electric</em>, with the same liquid caveat. <strong>Testing the waters on a small lot?<…`

### propane-vs-electric-fogger-canada (7 lines)

Reworded (no current Canadian homeowner liquid for these machines; no registered liquid has a search term here). Flags: TIER3-CHECK.md line 14, TIER3-LOG.md line 10.

- **L118** StickyBuyBar label. R-ext, FH-man
  - Before: `<StickyBuyBar tag={AMZ_TAG} name="Burgess propane thermal fogger" search="burgess propane insect fogger" label="Best overall fogger" />`
  - After: `<StickyBuyBar tag={AMZ_TAG} name="Burgess propane thermal fogger" search="burgess propane insect fogger" label="Best overall machine; settle the liquid first" />`
- **L119** TopBox label. R-ext, FH-man
  - Before: `<TopBox tag={AMZ_TAG} name="Burgess propane thermal fogger" search="burgess propane insect fogger" label="Best overall fogger" />`
  - After: `<TopBox tag={AMZ_TAG} name="Burgess propane thermal fogger" search="burgess propane insect fogger" label="Best overall machine; settle the liquid first" />`
- **L218** Card 1 why: liquid. FH-man, R-ext
  - Before: `…he dense thermal fog knocks down adults fast.',`
  - After: `…he dense thermal fog knocks down adults fast. In Canada, though, the only liquid its manual allows, Black Flag Fogging Insecticide Formula 2, has no Canadian registration, and we found no current homeowner liquid labelled for a thermal fogger.',`
- **L228** Card 2 why: "wait for the ready light" (manual 180557: no ready light; preheat 2–3 min). FH-man, R-ext
  - Before: `… fogging and the easiest to learn — plug in, wait for the ready light, pull the trigger. No propane to seat or ignite. Perfect if your treatable area is small and within an extension cord of a GFCI outlet.',`
  - After: `… fogging and the easiest to learn — plug in, let it preheat for 2 to 3 minutes (the manual’s figure), pull the trigger. No propane to seat or ignite. It suits a small treatable area within an extension cord of a GFCI outlet, but the liquids its manual names (Black Flag Formula 2, Cutter or Repel fogging insecticide) have no Canadian registration.',`
- **L231** Card 2 pro "Fast warm-up". FH-man
  - Before: `pros: ['Lowest up-front cost', 'No fuel — just plug in', 'Fast warm-up, easy for beginners'],`
  - After: `pros: ['Lowest up-front cost', 'No fuel — just plug in', 'Easy for beginners; preheats in 2 to 3 minutes'],`
- **L246** whichToBuy: liquid. R-ext
  - Before: `…<em>Best Overall</em> propane Burgess is the fogger to buy. <strong>Small yard by the house on a budget?</strong> The <em>Best Budget</em> Black Flag electric does the same job for less. <strong>Want a residual barrier that reache…`
  - After: `…<em>Best Overall</em> propane Burgess is the machine to buy, once you have a liquid with a current Canadian Reg. No. for it (we found none for these foggers). <strong>Small yard by the house on a budget?</strong> The <em>Best Budget</em> Black Flag electric does the same job for less, with the same liquid problem. <strong>Want a residual barrier that reache…`
- **L356** TopPick blurb: "load only a PMRA-registered fog solution" (none current for these machines). FH-man, R-ext
  - Before: `…ou pocket the savings. Whichever you choose, load only a PMRA-registered fog solution."`
  - After: `…ou pocket the savings. Whichever you choose, settle the liquid first: the manuals name Black Flag Formula 2, Cutter or Repel fogging insecticide, none of which is registered in Canada, and we found no current homeowner liquid labelled for a thermal fogger."`

### thermal-vs-ulv-fogger-canada (5 lines)

Banned "safe" wording removed. Flags: TIER3-CHECK.md line 15, TIER3-LOG.md line 11.

- **L146** Card 1 why "safely". B-safe
  - Before: `…one fogger that does the widest range of jobs safely, this is it.',`
  - After: `…one fogger that does the widest range of jobs, this is it.',`
- **L150** Card 1 pro "Indoor-safe cold operation". B-safe
  - Before: `pros: ['Indoor-safe cold operation', 'Adjustable droplet size', 'Cordless — walk the whole property'],`
  - After: `pros: ['Cold operation: no flame or heated coil', 'Adjustable droplet size', 'Cordless — walk the whole property'],`
- **L183** whichToBuy "safely", "indoor-safe". B-safe
  - Before: `…rong>Want one machine that does the most jobs safely?</strong> The <em>Best All-Round</em> cordless ULV is the default buy &mdash; indoor-safe, adjustable, and mobile. <strong>Fogging ac…`
  - After: `…rong>Want one machine that does the most jobs?</strong> The <em>Best All-Round</em> cordless ULV is the default buy &mdash; cold-running with no flame, adjustable, and mobile. <strong>Fogging ac…`
- **L327** TopPick blurb "runs cold and safe indoors". B-safe
  - Before: `…V cold fogger is the one to own. It runs cold and safe indoors, uses water-based products, lets you dial dr…`
  - After: `…V cold fogger is the one to own. It runs cold, with no flame or heated coil (so it can work indoors where a product’s label allows), uses water-based products, lets you dial dr…`
- **L330** TopPick pro "Indoor-safe". B-safe
  - Before: `pros={['Indoor-safe cold operation on water-based products', 'Adjustable droplet size for many jobs', '…`
  - After: `pros={['Cold operation on water-based products, no flame', 'Adjustable droplet size for many jobs', '…`

### best-solar-bug-zapper-canada (5 lines)

Unsourced kill-radius and grid-performance claims removed. Voltages kept, attributed to listings (ZAP), so the StickyBuyBar/TopBox name and the L249/L345 buttons are unchanged. Flags: TIER3-CHECK.md line 17, TIER3-LOG.md line 13.

- **L141** Card 1 why: "strong enough to finish large moths", "Realistic 3–5 m kill radius". ZAP
  - Before: `why: 'The all-round pick: a 4,500V grid strong enough to finish large moths, a ~7.5W panel, and — the part that matters in Canada — a USB-C backup port that rescues cloudy weeks. Realistic 3–5 m kill radius.',`
  - After: `why: 'The all-round pick: a grid listed at 4,500V, a ~7.5W panel, and — the part that matters in Canada — a USB-C backup port that rescues cloudy weeks. Treat any kill radius or coverage figure as the seller’s claim, not a measured zone.',`
- **L145** Card 1 pro "4,500V grid actually kills large moths". ZAP
  - Before: `pros: ['USB-C backup for cloudy stretches', '4,500V grid actually kills large moths', 'Stake, hang, or tabletop mounting'],`
  - After: `pros: ['USB-C backup for cloudy stretches', 'Grid listed at 4,500V', 'Stake, hang, or tabletop mounting'],`
- **L146** Card 1 con "3–5 m radius". ZAP
  - Before: `cons: ['3–5 m radius, not the "2,100 sq ft" claimed', 'Near-useless on the mosquitoes that bite'],`
  - After: `cons: ['"2,100 sq ft" coverage is the seller’s claim', 'Near-useless on the mosquitoes that bite'],`
- **L160** Card 3 why: "A weaker 600V grid means it stuns more than it kills". ZAP
  - Before: `…fect LED ambiance mode with a zapper built in. A weaker 600V grid means it stuns more than it kills, but it earns its spot as patio decor first.',`
  - After: `…fect LED ambiance mode with a zapper built in, on a grid retailers list at 600V. It earns its spot as patio decor first.',`
- **L164** Card 3 con "600V grid only stuns big moths". ZAP
  - Before: `cons: ['600V grid only stuns big moths', 'Half-acre attraction claim is marketing'],`
  - After: `cons: ['A decor light first, a zapper second', 'Half-acre attraction claim is marketing'],`

### dynatrap-canada-review (33 lines)

Swap for the DT3050 (not in DynaTrap's model list; no DT3050 found anywhere; the page's own note says the search returns bulbs and glue cards): its TopPick, AwardRow card 1, button L429 and table row now point at the registered answer this page gives for bites on the deck (L680-686, "buy the Thermacell"), reusing the page's own search `thermacell mosquito repeller refill` (L686); score 9.1 is best-mosquito-repellent-device-canada's Thermacell score. Reworded: the StickyBuyBar/TopBox label (no registered trap for the DynaTrap's own job has a search term here), cards 2-3 (DT3050 comparisons and prices), whichToBuy and the Atrakta lines. Flags: TIER3-CHECK.md line 18, TIER3-LOG.md line 14.

- **L195** StickyBuyBar label. R-ext, PCPR
  - Before: `<StickyBuyBar tag={AMZ_TAG} name="DynaTrap UV + fan insect trap" search="dynatrap insect trap" label="See DynaTrap models sold in Canada" />`
  - After: `<StickyBuyBar tag={AMZ_TAG} name="DynaTrap UV + fan insect trap" search="dynatrap insect trap" label="No DynaTrap model is registered in Canada" />`
- **L196** TopBox label. R-ext, PCPR
  - Before: `<TopBox tag={AMZ_TAG} name="DynaTrap UV + fan insect trap" search="dynatrap insect trap" label="See DynaTrap models sold in Canada" />`
  - After: `<TopBox tag={AMZ_TAG} name="DynaTrap UV + fan insect trap" search="dynatrap insect trap" label="No DynaTrap model is registered in Canada" />`
- **L294** TopPick label "Best DynaTrap if mosquitoes are the goal". B-swap, DT-faq
  - Before: `label="Best DynaTrap if mosquitoes are the goal"`
  - After: `label="If mosquitoes are the goal"`
- **L295** TopPick name "DynaTrap DT3050 (1 acre + mosquito attractant fan)". B-swap, DT-faq
  - Before: `name="DynaTrap DT3050 (1 acre + mosquito attractant fan)"`
  - After: `name="Thermacell heated area repeller (look for a Canadian Reg. No.)"`
- **L296** TopPick blurb "the only model in the Canadian lineup that adds a dedicated mosquito-attractant fan". B-swap, DT-faq, R-ext, L-31998
  - Before: `blurb="If you are buying a DynaTrap in spite of everything above, buy the one built for the job. The DT3050 is the only model in the Canadian lineup that adds a dedicated mosquito-attractant fan on top of the UV lamp. That is the feature worth paying for — not the coverage rating, which changes how much yard the trap draws from but not the species mix it pulls in."`
  - After: `blurb="If the complaint is “we get bitten on the deck,” this review’s answer is a heated area repeller, not a DynaTrap. DynaTrap’s FAQ lists no DT3050 and describes no model with a mosquito-attractant fan, and no DynaTrap model or Atrakta lure is in Health Canada’s registry. Thermacell’s Patio Shield carries Reg. No. 31998; its label gives a zone up to 4.5 metres (15 feet) from the unit and says to allow 30 minutes for it to take effect."`
- **L297** TopPick search. B-swap
  - Before: `search="dynatrap dt3050"`
  - After: `search="thermacell mosquito repeller refill"`
- **L298** TopPick score (sibling page's Thermacell score). B-swap
  - Before: `score={7.0}`
  - After: `score={9.1}`
- **L299** TopPick pros "The only DynaTrap with a mosquito-attractant fan", "No chemicals — safe around kids and pets". B-safe, DT-faq, R-ext
  - Before: `pros={['The only DynaTrap with a mosquito-attractant fan', 'Full-acre coverage — suits cottage lots and open properties', 'No chemicals — safe around kids and pets']}`
  - After: `pros={['Protects the seating area where you get bitten', 'Registered in Canada (Patio Shield 31998)', 'No spray on skin']}`
- **L300** TopPick cons. L-31998
  - Before: `cons={['Still a UV trap: no CO₂, the cue mosquitoes actually hunt by', 'Does nothing for ticks', 'Ongoing bulb + Atrakta cartridge costs']}`
  - After: `cons={['Works best in still air', 'Nothing for anyone outside the zone', 'Refill mats and fuel are the running cost']}`
- **L303** AwardRow heading "DT3050 vs DT2030 vs DT1050". B-swap, DT-faq
  - Before: `heading="How It Compares — DT3050 vs DT2030 vs DT1050"`
  - After: `heading="How It Compares — DT2030 vs DT1050, and the Pick for Bites"`
- **L306** Card 1 badge. B-swap
  - Before: `badge: 'Best for Mosquitoes',`
  - After: `badge: 'Best for Bites on the Deck',`
- **L307** Card 1 name. B-swap
  - Before: `name: 'DynaTrap DT3050 (1 acre + attractant fan)',`
  - After: `name: 'Thermacell Heated Area Repeller (look for a Canadian Reg. No.)',`
- **L308** Card 1 why "the only Canadian unit with a dedicated mosquito-attractant fan"; price removed. DT-faq, L-31998, N-price
  - Before: `why: 'The model this review recommends if mosquitoes are the goal: the only Canadian unit with a dedicated mosquito-attractant fan on top of the UV lamp — the one spec that shifts the species mix at all. $249–$329.',`
  - After: `why: 'DynaTrap’s FAQ lists no DT3050 and describes no model with a mosquito-attractant fan, so for bites on the deck this review’s pick is a heated area repeller: the label of Thermacell’s Patio Shield (Reg. No. 31998) gives a zone up to 4.5 metres (15 feet) from the unit and says to allow 30 minutes for it to take effect.',`
- **L309** Card 1 search. B-swap
  - Before: `search: 'dynatrap dt3050',`
  - After: `search: 'thermacell mosquito repeller refill',`
- **L310** Card 1 score. B-swap
  - Before: `score: 7.0,`
  - After: `score: 9.1,`
- **L312** Card 1 pros (same "only ... attractant fan" and "safe" pros as the TopPick). B-safe, DT-faq, R-ext
  - Before: `pros: ['Only DynaTrap with a mosquito-attractant fan', 'Full-acre coverage for cottage lots', 'No chemicals — safe around kids and pets'],`
  - After: `pros: ['Protects the seating area where you get bitten', 'Registered in Canada (Patio Shield 31998)', 'No spray on skin'],`
- **L313** Card 1 cons. L-31998
  - Before: `cons: ['Still no CO₂ — buyers who want real mosquito reduction need a propane trap or barrier spray', 'Does nothing for ticks'],`
  - After: `cons: ['Works best in still air', 'Does nothing for ticks'],`
- **L318** Card 2 why "every model without the attractant fan"; prices removed. DT-faq, R-ext, N-price
  - Before: `why: 'The most popular full-acre unit at $199–$279, and usually the best Costco spring-sale deal. Same UV-plus-fan mechanism as every model without the attractant fan.',`
  - After: `why: 'The most popular full-acre unit. Same UV-plus-fan mechanism as the other models. No DynaTrap model is in Health Canada’s registry, so check the box for a Reg. No.',`
- **L321** Card 2 pros: DT3050 comparison and prices removed. DT-faq, N-price
  - Before: `pros: ['Best spring-sale pricing at Costco ($179–$229)', 'Full-acre coverage for about $50 less than the DT3050', 'Right scale for open cottage properties'],`
  - After: `pros: ['Full-acre coverage rating', 'Right scale for open cottage properties'],`
- **L322** Card 2 con "should pay up for the DT3050". DT-faq
  - Before: `cons: ['No attractant fan — mosquito-focused buyers should pay up for the DT3050', 'Full-acre rating is wasted on a standard suburban yard'],`
  - After: `cons: ['Mostly moths and beetles, like every UV model', 'Full-acre rating is wasted on a standard suburban yard'],`
- **L327** Card 3 why: DT3050 comparison and prices removed. DT-faq, R-ext, N-price
  - Before: `why: 'The cheapest sensible size at $149–$199 — the half-acre rating comfortably covers a typical GTA backyard for roughly $100–$130 less than the DT3050.',`
  - After: `why: 'The cheapest sensible size — the half-acre rating comfortably covers a typical GTA backyard. No DynaTrap model is in Health Canada’s registry, so check the box for a Reg. No.',`
- **L330** Card 3 pro "Saves $100–$130 versus the DT3050". DT-faq, N-price
  - Before: `pros: ['Saves $100–$130 versus the DT3050', 'Half-acre rating suits lots under ~10,000 sq ft', 'Same quiet, chemical-free operation'],`
  - After: `pros: ['Half-acre rating suits lots under ~10,000 sq ft', 'Same quiet, chemical-free operation'],`
- **L336** whichToBuy: "The DT3050 is the only model with the attractant fan"; "cheapest at Costco"; Atrakta. DT-faq, R-ext, N-price
  - Before: `…Buying specifically for mosquitoes?</strong> The DT3050 is the only model with the attractant fan &mdash; and even then, treat it as a supplement: a UV trap without CO₂ never beats a <Link href="/blog/propane-mosquito-trap-canada">propane trap</Link> or a <Link href="/mosquito-control">whole-yard barrier spray</Link> at mosquito reduction. <strong>Moths and beetles off a cottage deck?</strong> The DT2030 is the workhorse, cheapest at Costco in spring. <strong>Standard suburban backyard?</strong> The DT1050 does the same job for less. Whichever you buy, budget for Atrakta cartridges and a fresh UV bulb each season.`
  - After: `…Buying specifically for mosquitoes?</strong> Skip the DynaTrap: for bites on the deck the pick is the <em>Best for Bites on the Deck</em> heated area repeller (look for a Canadian Reg. No.), and a UV trap without CO₂ never beats a <Link href="/blog/propane-mosquito-trap-canada">propane trap</Link> or a <Link href="/mosquito-control">whole-yard barrier spray</Link> at mosquito reduction. <strong>Moths and beetles off a cottage deck?</strong> The DT2030 is the workhorse. <strong>Standard suburban backyard?</strong> The DT1050 does the same job for less. No DynaTrap model or Atrakta lure is in Health Canada&rsquo;s registry, so check the box for a Reg. No.; on fluorescent models, budget for a fresh UV bulb each season.`
- **L427** Lead-in to the buttons below (no affiliate element): "DT3050 attractant-fan model". B-text, DT-faq
  - Before: `…text-gray-600 mb-1">Compare current Canadian prices (DT3050 attractant-fan model, DT2030/DT1100 full-acre, DT1050 half-acre) and Atrakta refills:</p>`
  - After: `…text-gray-600 mb-1">Compare current Canadian listings (the DT2030/DT1100 full-acre and DT1050 half-acre models are in the table below), a patio repeller for bites, and Atrakta refills:</p>`
- **L429** Body button swapped (was "Check DT3050 price"). B-swap
  - Before: `<BuyLink tag={AMZ_TAG} search="dynatrap dt3050">Check DT3050 price on Amazon.ca →</BuyLink>`
  - After: `<BuyLink tag={AMZ_TAG} search="thermacell mosquito repeller refill">For bites: a patio repeller instead (look for the Reg. No.) →</BuyLink>`
- **L430** Atrakta button. R-ext
  - Before: `<BuyLink tag={AMZ_TAG} search="dynatrap atrakta refill">Atrakta refill cartridges →</BuyLink>`
  - After: `<BuyLink tag={AMZ_TAG} search="dynatrap atrakta refill">Atrakta refills (not registered in Canada) →</BuyLink>`
- **L448** Table row label cell (no affiliate element). B-text, DT-faq
  - Before: `<td className="px-4 py-3 font-bold text-brand-800">DT3050 <span className="font-normal text-xs text-gray-500">(+ attractant fan)</span></td>`
  - After: `<td className="px-4 py-3 font-bold text-brand-800">DT3050 <span className="font-normal text-xs text-gray-500">(not in DynaTrap&rsquo;s model list)</span></td>`
- **L449** Table row cell. B-text, DT-faq
  - Before: `<td className="px-4 py-3 text-gray-700">1 acre (full)</td>`
  - After: `<td className="px-4 py-3 text-gray-700">Not listed by DynaTrap</td>`
- **L450** Table row cell "only model with an attractant fan". DT-faq
  - Before: `<td className="px-4 py-3 text-gray-700"><strong>Best DynaTrap for mosquitoes</strong> — only model with an attractant fan</td>`
  - After: `<td className="px-4 py-3 text-gray-700">DynaTrap&rsquo;s FAQ lists no DT3050 and no attractant-fan model; for bites on the deck, see the patio repeller</td>`
- **L451** Table row price cell. N-price
  - Before: `<td className="px-4 py-3 font-mono text-gray-800">$249 – $329</td>`
  - After: `<td className="px-4 py-3 font-mono text-gray-800">&mdash;</td>`
- **L452** Table row button swapped. B-swap
  - Before: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="dynatrap dt3050" block>Check price on Amazon.ca →</BuyLink></td>`
  - After: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="thermacell mosquito repeller refill" block>Patio repeller instead (look for the Reg. No.) →</BuyLink></td>`
- **L485** Atrakta line (holds the BuyLink): "octenol ... (60-day refill)" -> maker's "about 8 weeks"; registration. DT-faq, R-ext
  - Before: `…y-600 mb-6">Catching too few mosquitoes? The octenol <strong>Atrakta</strong> cartridge (60-day refill) is the lure that nudges the mosquito catch upward — budget a couple per season. <BuyLink tag={AMZ_TAG} search="dynatrap a…`
  - After: `…y-600 mb-6">Catching too few mosquitoes? The <strong>Atrakta</strong> lure (about 8 weeks each, DynaTrap says) is the add-on DynaTrap sells for mosquitoes; like every DynaTrap product, it has no Canadian registration. <BuyLink tag={AMZ_TAG} search="dynatrap a…`
- **L802** Atrakta button. R-ext
  - Before: `…e">Compare Atrakta lure refills on Amazon.ca →</BuyLink></p>`
  - After: `…e">Compare Atrakta lure refills on Amazon.ca (no Canadian registration found) →</BuyLink></p>`

### how-to-get-rid-of-ants-canada (6 lines)

Reworded, not swapped: the only Combat ant registration (26467) was cancelled in 2006, and no registered solid or grease-ant bait has a search term on this page (its terms are the TERRO liquid, which holds card 1, a generic gel, a DE duster and sealant). Flags: TIER3-CHECK.md line 41, TIER3-LOG.md line 27.

- **L179** Card name "(Combat-style, domestic-class)". R-ext
  - Before: `name: 'Enclosed Solid / Protein Ant Bait Stations (Combat-style, domestic-class)',`
  - After: `name: 'Enclosed Solid / Protein Ant Bait Stations (check for a current PCP number)',`
- **L180** Card why: cancellation and registered grease-ant baits. R-ext
  - Before: `…k or behind the stove without making a mess. As with any pesticide in Canada, confirm the Pest Control Products (PCP) registration number on the label — especially from online marketplaces that mix Canadian and US stock.',`
  - After: `…k or behind the stove without making a mess. The only Combat ant system ever registered in Canada (Reg. No. 26467) was cancelled in 2006, so a Combat box has no current Canadian registration; current home-use ant baits whose registrations list grease-eating ants include Wilson AntOut Ant Bait (28793) and Knock Down Eco Ant Killer Bait (31203). Confirm the PCP number on the label before you buy.',`
- **L183** Card con. R-ext
  - Before: `…er uptake than liquid for most house ants', 'Marketplace listings can mix Canadian and US-labelled stock — check for a PCP number'],`
  - After: `…er uptake than liquid for most house ants', 'Combat’s Canadian registration (26467) was cancelled in 2006 — check for a current PCP number'],`
- **L204** whichToBuy. R-ext
  - Before: `…m>Best for Grease Feeders</em> solid stations; colonies swing between carbohydrate and pro…`
  - After: `…m>Best for Grease Feeders</em> solid stations, with a current PCP number on the label (Combat&rsquo;s Canadian registration was cancelled in 2006); colonies swing between carbohydrate and pro…`
- **L304** Table row button. R-ext
  - Before: `…ombat ant killing bait stations" block>Check price on Amazon.ca →</BuyLink></td>`
  - After: `…ombat ant killing bait stations" block>Check listings (Combat has no current Canadian registration) →</BuyLink></td>`
- **L394** Body button. R-ext
  - Before: `<BuyLink tag={AMZ_TAG} search="combat ant killing bait stations">Protein bait stations →</BuyLink>`
  - After: `<BuyLink tag={AMZ_TAG} search="combat ant killing bait stations">Protein bait stations (Combat: no current Canadian registration) →</BuyLink>`

### carpenter-ants-canada (6 lines)

Reworded, not swapped: no current home-use borax or boric acid bait names carpenter ants, and the registered carpenter-ant baits this page names (Raid Max 33831, Ortho gel 32560) have no search term on this page. Flags: TIER3-CHECK.md line 42, TIER3-LOG.md line 28.

- **L175** Card badge "Best Colony Killer". R-ext
  - Before: `badge: 'Best Colony Killer',`
  - After: `badge: 'Colony Bait (Check the Label)',`
- **L177** Card why: "The widely stocked domestic-class option ... confirm ... that carpenter ants are listed". R-ext
  - Before: `…uth-to-mouth, which is exactly the weakness sugar-based borax baits exploit — a forager drinks, walks home, and feeds the colony including brood. The widely stocked domestic-class option in Canada; confirm a PCP registration number on the label and that carpenter ants are listed.',`
  - After: `…uth-to-mouth, which is exactly the weakness slow liquid baits exploit — a forager drinks, walks home, and feeds the colony including brood. But no current home-use borax or boric acid bait in Canada names carpenter ants on its label (TERRO’s Canadian labels name common sweet-eating ants); the registered baits that do are spinosad liquids such as Raid Max Liquid Ant Baits (PCP 33831) and borate gels such as Ortho Ant B Gon Max Ant & Roach Killer Gel (PCP 32560). Buy one whose label names carpenter ants.',`
- **L180** Card con added. R-ext
  - Before: `cons: ['Acceptance is seasonal and fussy — some weeks…`
  - After: `cons: ['No current home-use borax label names carpenter ants', 'Acceptance is seasonal and fussy — some weeks…`
- **L201** whichToBuy. R-ext
  - Before: `…ail located, nest still hidden?</strong> Run the <em>Best Colony Killer</em> liquid baits on that trail and let the ants carry the treatment to the …`
  - After: `…ail located, nest still hidden?</strong> Run a liquid bait whose label names carpenter ants on that trail (no current home-use borax bait does; see the <em>Colony Bait</em> card) and let the ants carry the treatment to the …`
- **L303** Body button. R-ext
  - Before: `<BuyLink tag={AMZ_TAG} search="liquid ant bait stations borax">Liquid borax baits &rarr;</BuyLink>`
  - After: `<BuyLink tag={AMZ_TAG} search="liquid ant bait stations borax">Liquid borax baits (labels don&rsquo;t name carpenter ants) &rarr;</BuyLink>`
- **L394** Body button. R-ext
  - Before: `…liquid ant bait stations borax">Check liquid borax ant baits on Amazon.ca &rarr;</BuyLink>`
  - After: `…liquid ant bait stations borax">Check liquid ant baits on Amazon.ca (borax labels don&rsquo;t name carpenter ants; check yours does) &rarr;</BuyLink>`

### best-tick-repellent-yard-canada (20 lines)

Reworded, not swapped: every pick is unregistered, and none of the registered yard products this page names (Doktor Doom Tick Killer Plus+ 34405, Safer's Trounce 28680, Mosquito Barrier 32049, No Fly Zone 32757) has a search term on this page. BuzzSkito service lines, the 5-spray season and $597/$497 are untouched. Flags: TIER3-CHECK.md line 43, TIER3-LOG.md line 29.

- **L106** StickyBuyBar label "Best DIY pick". R-ext, HC-buy
  - Before: `<StickyBuyBar tag={AMZ_TAG} name="Wondercide Cedar-Oil Yard Spray" search="wondercide tick yard spray" label="Best DIY pick" />`
  - After: `<StickyBuyBar tag={AMZ_TAG} name="Wondercide Cedar-Oil Yard Spray" search="wondercide tick yard spray" label="Not registered in Canada" />`
- **L107** TopBox label. R-ext, HC-buy
  - Before: `<TopBox tag={AMZ_TAG} name="Wondercide Cedar-Oil Yard Spray" search="wondercide tick yard spray" label="Best DIY pick" />`
  - After: `<TopBox tag={AMZ_TAG} name="Wondercide Cedar-Oil Yard Spray" search="wondercide tick yard spray" label="Not registered in Canada" />`
- **L127** Wondercide button. R-ext
  - Before: `<BuyLink tag={AMZ_TAG} search="wondercide tick yard spray">Check yard tick sprays on Amazon.ca →</BuyLink>`
  - After: `<BuyLink tag={AMZ_TAG} search="wondercide tick yard spray">Check Wondercide yard spray (no Canadian registration) →</BuyLink>`
- **L128** Insect Shield button. R-ext
  - Before: `…d permethrin treated clothing">Insect Shield permethrin-treated clothing →</BuyLink>`
  - After: `…d permethrin treated clothing">Insect Shield clothing (no Canadian registration; No Fly Zone, PCP 32757, is registered) →</BuyLink>`
- **L136** Card 1 badge "Best Overall DIY". R-ext
  - Before: `badge: 'Best Overall DIY',`
  - After: `badge: 'Cedar Oil (Not Registered in Canada)',`
- **L138** Card 1 why: registration; "re-apply every 2 weeks" (unverifiable) removed. R-ext, HC-buy, USDA, CED
  - Before: `why: 'The leading natural yard spray. Cedar oil has documented contact repellency against ticks, but it evaporates much faster than a synthetic residual, so it holds only if you re-apply every 2 weeks. The strongest DIY layer to stack on top of the free habitat fixes.',`
  - After: `why: 'The best-known natural yard spray, but it has no Canadian registration: no cedar-oil pesticide is registered in Canada, and Health Canada says it is a violation of the Pest Control Products Act to buy and use unregistered pesticides. In lab tests cedarwood oil repels tick nymphs, but the effect fades within hours, and we found no published yard field trial.',`
- **L142** Card 1 pros. USDA
  - Before: `pros: ['Real, research-backed cedar-oil repellency', 'Follow the label on when kids and pets can return', 'Hose-end coverage of lawn edges'],`
  - After: `pros: ['Lab repellency against tick nymphs (USDA study)', 'Hose-end coverage of lawn edges'],`
- **L143** Card 1 cons "Re-apply every 2 weeks". CED, USDA
  - Before: `cons: ['Re-apply every 2 weeks', 'Weaker than professional barrier spray'],`
  - After: `cons: ['No Canadian registration', 'Lab repellency fades within hours'],`
- **L146** Card 2 badge "Best Granular". R-ext
  - Before: `badge: 'Best Granular',`
  - After: `badge: 'Granular (None Registered in Canada)',`
- **L148** Card 2 why: none registered. R-ext, CAES
  - Before: `why: 'Granules carry the residual down into the leaf-litter and lawn-edge zones ticks quest from, where a surface spray never lands — the strongest DIY control if you nail even coverage.',`
  - After: `why: 'Granules carry an insecticide down into the leaf-litter and lawn-edge zones ticks quest from, but no permethrin granules, and no home-use granular product with ticks on its label, are registered in Canada (Health Canada’s registry, October 2026). The registered home options are sprays, such as Doktor Doom Tick Killer Plus+ (PCP 34405), and permethrin tick tubes; Connecticut’s tick handbook also found liquids usually give somewhat better control than granules.',`
- **L151** Card 2 pros "Lasts 4–6 weeks", "Wide retailer availability" (unsupported). CAES
  - Before: `pros: ['Longest-holding residual of the DIY yard options', 'Lasts 4–6 weeks per application', 'Wide retailer availability'],`
  - After: `pros: ['Spreads into leaf litter with a fertilizer spreader'],`
- **L152** Card 2 cons. R-ext
  - Before: `cons: ['Hard to spread evenly without gear', 'Synthetic pesticide handling care'],`
  - After: `cons: ['None registered for home use in Canada', 'Hard to spread evenly without gear'],`
- **L155** Card 3 badge. R-ext
  - Before: `badge: 'Best Natural Alternative',`
  - After: `badge: 'Cedarcide (Not Registered in Canada)',`
- **L157** Card 3 why "evidence-backed ... mild-but-real repellency". R-ext, CED
  - Before: `why: 'The other leading evidence-backed cedar-oil option. Same natural approach as Wondercide with mild-but-real repellency at recommended concentrations — a solid pick if you prefer their formula.',`
  - After: `why: 'The other best-known cedar-oil option, with the same problem: no Canadian registration, and we found no published yard field trial. Cedarcide’s own directions for its yard spray: apply twice, two weeks apart, then monthly.',`
- **L160** Card 3 pro "Safe around kids and pets". B-safe
  - Before: `pros: ['Natural cedar-oil formula', 'Safe around kids and pets', 'Good for seating-area perimeters'],`
  - After: `pros: ['Natural cedar-oil formula', 'Good for seating-area perimeters'],`
- **L161** Card 3 con "Bi-weekly reapplication all season" (maker: twice, then monthly). CED, R-ext
  - Before: `cons: ['Bi-weekly reapplication all season', 'Consumer concentrations run low'],`
  - After: `cons: ['No Canadian registration', 'Maker: twice two weeks apart, then monthly', 'Consumer concentrations run low'],`
- **L164** Card 4 badge. R-ext
  - Before: `badge: 'Best for Personal Wear',`
  - After: `badge: 'Personal Wear (Not Registered in Canada)',`
- **L166** Card 4 why: Insect Shield has no registry record. R-ext, PHAC
  - Before: `… that kill ticks on contact with the fabric. In Canada this is the route to take: Health Canada does not approve permethrin liquids and sprays for consumers to treat their own clothing, so buy the treatment already in the garment rather than applying it yourself. The best add-on for anyone working, hiking, or gardening in a tick zone.',`
  - After: `… that kill ticks on contact with the fabric. Factory treatment is the Canadian route, since the Public Health Agency of Canada says permethrin liquids and sprays for consumers to treat their own clothing are not approved, but Insect Shield has no record in Health Canada’s registry: the factory-treated clothing registered here is No Fly Zone (PCP 32757). Check the garment for a PCP number.',`
- **L170** Card 4 cons. R-ext
  - Before: `cons: ['Clothing only — not a skin repellent', 'Does not treat the yard itself'],`
  - After: `cons: ['No Canadian registration record (No Fly Zone, 32757, is registered)', 'Clothing only — not a skin repellent'],`
- **L175** whichToBuy: Wondercide "bi-weekly", granular "longest residual", Insect Shield. R-ext, CED, PHAC
  - Before: `<strong>Going fully natural?</strong> The <em>Best Overall DIY</em> Wondercide cedar-oil spray is the strongest layer — plan on bi-weekly application. <strong>Want maximum DIY knockdown?</strong> The <em>Best Granular</em> permethrin option holds the longest residual of the DIY choices, provided you spread it evenly. <strong>Spending real time in the yard or on trails?</strong> Add the <em>Best for Personal Wear</em> factory permethrin-treated Insect Shield clothing &mdash; Health Canada doesn&rsquo;t approve permethrin sprays for consumers to treat their own clothing, so in Canada buy the treatment already in the garment. But for placing a longer-lasting residual p…`
  - After: `<strong>Going fully natural?</strong> No cedar-oil yard spray, including the Wondercide and Cedarcide picks, is registered in Canada; the registered natural option is a garlic-juice repellent (PCP 32049), alongside the habitat work. <strong>Want a do-it-yourself pesticide?</strong> No permethrin granules are registered here; a registered permethrin yard spray such as Doktor Doom Tick Killer Plus+ (PCP 34405), used as its label says, is the home option. <strong>Spending real time in the yard or on trails?</strong> Factory-treated clothing is the Canadian route, since consumer permethrin sprays for clothing are not approved, but Insect Shield has no registration record here; No Fly Zone (PCP 32757) is the registered line. But for placing a longer-lasting residual p…`

### Left unchanged, with the reason (this section's pages)

- **pergola-mosquito-curtains-canada** and **bug-zappers-canada-do-they-work**: no box claim found by the checker (TIER3-CHECK.md lines 12 and 16) or the upgrader (TIER3-LOG.md lines 12 and 20). 0 lines each. Editorial scores on untested units are not a false claim and were left.
- **best-thermal-fogger-canada, Longray boxes** (StickyBuyBar/TopBox L117-118, card 1 L147-154, buttons L135, L217, L305): Longray pulse-jet thermal foggers exist (`LR`), so the flag did not hold. The editorial scores were left.
- **best-solar-bug-zapper-canada**: StickyBuyBar/TopBox "4,500V" and buttons L249, L345 kept (listings give 4,500 V, `ZAP`). whichToBuy L178 calls the dual-charge unit "the safe buy" (a figure of speech, not in the checker's list); the owner may prefer "dependable buy".
- **thermal-vs-ulv-fogger-canada, card 2 con L160** "Propane + oil-based carrier logistics": Longray pulse-jets run on petrol (the TS-35A(E) is listed with a petrol engine), not propane. Not in the checker's list, so not changed: owner's call.
- **Unregistered products still linked, honestly labelled**, because no registered alternative for that job has a search term on the page and the brief bars new terms: DynaTrap boxes (device page, professional page, DynaTrap review StickyBuyBar/TopBox and model rows), the Biogents CO2 version, lures, BG-GAT, BG-Home and table rows, the citronella and Mosquito Guard bands, PARA'KITO refills, the Combat ant stations, the borax carpenter-ant baits, the Atrakta lures, and every pick on best-tick-repellent-yard-canada. Each would need a new search term for a registered product (for example Wilson AntOut 28793, Raid Max Liquid Ant Baits 33831, Doktor Doom Tick Killer Plus+ 34405, No Fly Zone 32757): owner's call.
- **Page text, not boxes** (left for a text pass): best-mosquito-repellent-device-canada key-facts row L272 ("Thermacell (~15 min)"), the "6–8 weeks" in FAQs, bullets and body, and L369 ("Buy the liquid at the same time as the machine"); the bracelets page L389 still calls icaridin "odourless" (the Oct 25 pass removed "Odourless" from a Natrapel box because the maker lists a fragrance); best-bug-spray-for-kids-canada card 1 keeps "nearly odourless" (not flagged); best-tick-repellent-yard-canada L125 lead-in says the linked products "help".
- **Prices** were removed only on the lines edited here; the rest are left for the owner, as the upgraders noted.

Lines changed in this section: 202 (best-mosquito-repellent-device-canada 13, biogents-bg-mosquitaire-mosquito-trap-canada 31, best-professional-mosquito-trap-canada 19, mosquito-repellent-bracelets-canada 32, best-bug-spray-for-kids-canada 20, best-thermal-fogger-canada 5, propane-vs-electric-fogger-canada 7, thermal-vs-ulv-fogger-canada 5, best-solar-bug-zapper-canada 5, dynatrap-canada-review 33, how-to-get-rid-of-ants-canada 6, carpenter-ants-canada 6, best-tick-repellent-yard-canada 20).

## Tier 4 box fixes, Oct 29

Box fixes of Oct 29, 2026 under FIXBOX-T4.md (owner, Oct 29: "Yes, fix the false product box claims"), following FIX-BRIEF.md. The problems are the "Box (owner)" items in TIER4-CHECK.md and the box flags in TIER4-LOG.md, each re-checked against its primary source on Oct 29. All files are `app/blog/<slug>/page.tsx`. "Before" is the Oct 29 tier 4 upgrade in the working tree. Each block below gives its own pages, checks and evidence.

### Drain fly and fruit fly pages: checks and evidence key

**Checks** (against `git show HEAD:<file>`, read-only; no other git, no build): line counts unchanged (517 and 418), because lines were replaced one for one, so each line number is the same before and after; counts of `<BuyLink`, `<AwardRow`, `<AwardCard`, `<StickyBuyBar`, `<AmazonLink`, `<TopPick`, `<TopBox`, `search=`, `search:`, `tag=` and `AMZ_TAG` identical to HEAD on both pages; the sequence of `tag` values identical; no `asin` on either page, so nothing for A-asin; every changed `search` is a term already live on a sibling page (S-terms); 24 of the 26 "before" lines match HEAD verbatim, and the other two (fruit fly L119 and L337, the upgrader's text) were confirmed by reversing the edit; `npx tsc --noEmit` clean; no "safe", "non-toxic", "PMRA-registered", "Health Canada approved", price, rating or testing claim in a changed line.

**Evidence key:**

- `T4C`: TIER4-CHECK.md line 7 (drain flies) and line 8 (fruit flies), "Box (owner)" items. `T4L`: TIER4-LOG.md lines 3 and 4, "Box flags".
- `R-ext`: Health Canada's registry product extract (https://pest-control.canada.ca/pesticide-registry-api/api/extract/product), copy downloaded Oct 29, 2026 21:30 UTC, searched Oct 29. KATCHY 0 rows; GOBBLER 0; BIO-CLEAN and BIO CLEAN 0 (one unrelated historical disinfectant, BIOCLEAN B 17614); TERRO 13 rows, all ant products or cancelled, none a fruit fly product. The only current products whose pests include DRAIN FLIES are 35296 and 35297. TYRATECH DRAIN FLY KILLER 31237: Cancelled (expiry 2019-07-23), COMMERCIAL. 35801 STEM FLYING INSECT LIGHT TRAP1 (DOMESTIC, current) lists FLYING INSECTS, FRUIT FLIES, FUNGUS GNATS, HOUSE FLIES, MOSQUITOES, SMALL MOTHS, not drain flies. 35381 ONGUARD FRUIT FLY TRAP (DOMESTIC, acetic acid) lists FRUIT FLIES.
- `R-api`: the live registry API, Oct 29 (https://pest-control.canada.ca/pesticide-registry-api/api/search/product/<Reg. No.>, with product-pest and product-site). 35296 STEM FLYING INSECT LIGHT TRAP and 35297 RAID ESSENTIALS FLYING INSECT LIGHT TRAP: Full Registration, Current, DOMESTIC, DEVICE, S. C. Johnson and Son, Limited; pests DRAIN FLIES, FLYING INSECTS, FRUIT FLIES, FUNGUS GNATS, MOSQUITOES, SMALL MOTHS; site ROOMS. 34819 FRUIT FLY TRAP[S]: Full Registration, Current, DOMESTIC, Sterling International, acetic acid 6.0%; pests FRUIT FLIES; sites COMPOST BINS, GARBAGE DISPOSALS, KITCHEN TRASH, PANTRIES, SINKS, WHEREVER FRUITS, VEGETABLES, FOOD SCRAPS ARE PRESENT.
- `L-35296`: STEM label 2023-1891 (2024-09-13), fetched with WebFetch and read from the saved file: https://pest-control.canada.ca/pesticide-registry-api/api/pdf/inline/en/444696838 . "* fruit flies, drain flies, fungus gnats, mosquitoes and small moths"; "USE IN ANY ROOM WHERE YOU SEE FLYING INSECTS*"; "Plug the trap into a wall socket near common insect hangouts"; "Replace (refill) (cartridge) every 30 days for best performance."; "dual-sided adhesive (cartridge)"; "FOR SALE IN CANADA ONLY".
- `L-34819`: RESCUE! label 2023-5272 (2023-11-02), fetched with WebFetch and read from the saved file: https://pest-control.canada.ca/pesticide-registry-api/api/pdf/inline/en/444695628 . "Rescue"; "[Reusable] Fruit Fly Trap[s]"; "ACTIVE INGREDIENT: Acetic Acid 6%"; "DANGER – CORROSIVE TO EYES"; "KEEP OUT OF REACH OF CHILDREN"; "Place trap on a counter, table, windowsill or other stable surface near the fruit fly problem."; "Fruit flies can breed in pantries, kitchen trash, sinks, garbage disposals and compost bins – wherever fruits, vegetables and food scraps are present. All of these are good locations for the trap."; "Rinse and reuse trap with Fruit Fly Trap Refill pouches as needed."
- `M-rff`: RESCUE! Fruit Fly Trap page, re-read Oct 29 (https://www.rescue.com/products/traps/fruit-fly-trap/): "The fruit flies enter through funnel-shaped holes, get trapped inside the liquid and drown"; "Each trap comes with a 30-day supply of attractant"; "it starts catching fruit flies within minutes"; "in most cases, you'll see fruit flies caught in less than 24 hours"; "These traps won't catch fungus gnats or drain flies"; "designed for indoor use". Its "safe around pets, kids, and food" was not carried into any box.
- `M-gg`: Green Gobbler, read Oct 29 (https://greengobbler.com/fruit-fly-goodbye-fruit-drain-fly-killer): "Fruit Fly Killer - Drain Fly Treatment - 32oz"; "It kills fruit flies, drain flies and sewer flies."; "Our formula contains natural Citronella Oil and Cinnamon Oil to repel flies from your drain."; no enzyme or bacteria claim; no registration number.
- `M-bc`: Bio-Clean, read Oct 29 (https://bio-clean.com/): "a unique blend of all natural bacteria and enzymes used to eliminate waste buildup in plumbing and septic systems"; no claim to kill, control, repel or attract any insect.
- `M-terro`: Woodstream Canada, read Oct 29 (https://www.woodstreambrands.ca/terror-fruit-fly-trap): "TERRO® Fruit Fly Trap", Model # T2502CANB; "90 day lure supply - each trap lasts for up to 45 days"; "a special food-based liquid lure"; no PCP number.
- `UC-IPM`: UC IPM Pest Notes: Moth or Drain Flies, Pub. 74167 (https://ipm.ucanr.edu/home-and-landscape/moth-or-drain-flies/), as verified in T4C line 7: mechanical cleaning with a hard-bristle brush comes first.
- `PCPA`: Pest Control Products Act s. 2 (a product sold or used to control, destroy, attract or repel a pest is a pest control product, so the claim decides) and s. 6(1); Regulations Schedule 1 item 2 (devices sold to attract or destroy flying insects): https://laws-lois.justice.gc.ca/eng/regulations/SOR-2006-124/page-10.html , as verified in T4C lines 7-8.
- `B-safe`, `B-swap`, `B-text`: as in the tier 2-3 sections above. `B-swap-sib`: B-swap with a term live on a sibling page in the small-fly cluster (FIX-BRIEF: "the same page (or its sibling page)"). Easy to revert if the coordinator reads the rule as same-page only.
- `S-terms`: 'stem indoor fly trap' (app/blog/best-fruit-fly-trap-canada/page.tsx L660, the Stem plug-in light + glue row); 'rescue fruit fly trap' (same page L630, and katchy-indoor-insect-trap-review-canada L223 since the tier 2-3 swap); 'bio-clean drain bacteria enzyme treatment' (app/blog/how-to-get-rid-of-drain-flies-canada/page.tsx L186, L230, L408, L451). Raid Essentials, OnGuard and the other registered light traps have no search term anywhere in app/.

### how-to-get-rid-of-drain-flies-canada (8 lines, swap + reword)

Katchy swapped, not reworded: the page names the two registered products that list drain flies (QuickIdTable L396, key facts L358, FAQ L79, body L449: STEM 35296 and Raid Essentials 35297), and STEM has a live term on a sibling (S-terms). All 8 lines are affiliate lines. The AwardRow cards here carry no score.

- **L204** Decision-table "Indoor catch trap" button sold the Katchy (0 rows; a light trap sold to attract and destroy flying insects is a prescribed device). Swapped to STEM. T4C, T4L, R-ext, R-api, L-35296, PCPA, B-swap-sib
  - Before: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="katchy indoor insect trap" block>Indoor catch trap &rarr;</BuyLink></td>`
  - After: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="stem indoor fly trap" block>STEM light trap (PCP 35296) &rarr;</BuyLink></td>`
- **L223** Card 1 pro: "safe" and the unsourced "any pipe material" removed. T4C, T4L, B-safe, UC-IPM
  - Before: `pros: ['Physically removes the biofilm — the actual breeding site', 'No chemistry, safe on any pipe material', 'Reusable for years, and it also fixes slow drains'],`
  - After: `pros: ['Physically removes the biofilm — the actual breeding site', 'No chemistry: it scrubs the film off the pipe wall', 'Reusable for years, and it also fixes slow drains'],`
- **L229** Card 2 why: "raises no re-entry concerns beside a kitchen sink" (unsourced safety wording, already cut from the body) removed. "Needs no pesticide registration" now holds only while the product makes no pest claim, and Bio-Clean's maker makes none. T4C, T4L, B-safe, PCPA, M-bc
  - Before: `why: 'What the brush cannot reach, a bacterial or enzyme product digests. It clings to the pipe wall and works on the organic film over hours, which is why it goes in at night when nothing will flush it away. Sold as a cleaner rather than an insecticide, so it needs no pesticide registration and raises no re-entry concerns beside a kitchen sink.',`
  - After: `why: 'What the brush cannot reach, a bacterial or enzyme product digests. It clings to the pipe wall and works on the organic film over hours, which is why it goes in at night when nothing will flush it away. Sold only as a cleaner, with no claim to kill or repel flies, it needs no PCP number.',`
- **L231** Card 2 pro "no PCP registration questions": same point. T4C, T4L, PCPA, M-bc
  - Before: `pros: ['Reaches film the brush cannot', 'A cleaner, not a pesticide — no PCP registration questions', 'Keeps the drain clear afterwards as maintenance'],`
  - After: `pros: ['Reaches film the brush cannot', 'No PCP number needed while it is sold only as a cleaner', 'Keeps the drain clear afterwards as maintenance'],`
- **L244, L245, L246** Card 4 "Indoor Light and Glue Trap" on the Katchy search. Swapped to STEM 35296: new name and search. The why keeps its text and adds the registry, the label's 30-day cartridge and the 35801 caveat. Badge, pros and cons are unchanged because they are still true of STEM. T4C, T4L, R-ext, R-api, L-35296, PCPA, B-swap-sib
  - L244 before: `name: 'Indoor Light and Glue Trap',`
  - L244 after: `name: 'STEM Flying Insect Light Trap (PCP 35296)',`
  - L245 before: `why: 'Instrumentation and morale rather than control. Adults keep emerging for one to three weeks after you fix the source, and a quiet indoor trap mops them up while the real work takes effect. It is also a decent monitor: catch counts that keep falling mean the source treatment is working.',`
  - L245 after: `why: 'Instrumentation and morale rather than control. Adults keep emerging for one to three weeks after you fix the source, and a quiet indoor trap mops them up while the real work takes effect. It is also a decent monitor: catch counts that keep falling mean the source treatment is working. Health Canada’s registry lists two current products for drain flies, both plug-in light traps: STEM (PCP 35296) and Raid Essentials (PCP 35297). STEM’s label says to replace the sticky cartridge every 30 days. Check the box for 35296: STEM’s other light trap (35801) does not list drain flies.',`
  - L246 before: `search: 'katchy indoor insect trap',`
  - L246 after: `search: 'stem indoor fly trap',`
- **L261** whichToBuy sent buyers of "the catch trap" to the Katchy review. It now names the two registered traps; the review link stays, with the Katchy's registration status. T4C, T4L, R-ext, R-api
  - Before: `<strong>One bathroom, a few flies?</strong> The <em>Best Overall</em> brush plus a week of the <em>Best Follow-Up</em> product is the whole job. <strong>Slow drain as well as flies?</strong> Start with the <em>Best for Deep Clogs</em> tool &mdash; the clog is the nursery. <strong>Flies while you work?</strong> The catch trap is a morale purchase, and our <Link href="/blog/katchy-indoor-insect-trap-review-canada">Katchy indoor trap review</Link> covers what that category can and cannot do. <strong>Basement floor drain?</strong> Buy nothing yet &mdash; fill the trap with water first and re-test. <strong>Sewer odour with it?</strong> Buy nothing at all and call a plumber.`
  - After: `<strong>One bathroom, a few flies?</strong> The <em>Best Overall</em> brush plus a week of the <em>Best Follow-Up</em> product is the whole job. <strong>Slow drain as well as flies?</strong> Start with the <em>Best for Deep Clogs</em> tool &mdash; the clog is the nursery. <strong>Flies while you work?</strong> The catch trap is a morale purchase: buy a light trap whose label lists drain flies, STEM (PCP 35296) or Raid Essentials (PCP 35297). Our <Link href="/blog/katchy-indoor-insect-trap-review-canada">Katchy indoor trap review</Link> covers what that category can and cannot do, but the Katchy itself has no Canadian registration. <strong>Basement floor drain?</strong> Buy nothing yet &mdash; fill the trap with water first and re-test. <strong>Sewer odour with it?</strong> Buy nothing at all and call a plumber.`

### how-to-get-rid-of-fruit-flies (18 lines, swap + reword)

- **TERRO swapped to RESCUE!** No TERRO fruit fly product is registered (R-ext), and Woodstream Canada shows no PCP number (M-terro). The page itself names RESCUE! 34819 and OnGuard 35381 as the registered lure traps (FAQs L43, L71, L79, key facts L247, QuickIdTable L288, situation list L360), and RESCUE! has a live sibling term, as on the tier 2-3 Katchy-review swap. OnGuard has none.
- **Green Gobbler swapped to a bacterial cleaner,** the page's own recommendation for drains (Step 3, QuickIdTable L292, key facts L248, FAQ L87). No registered product names fruit flies for drains, and a cleaner that makes no pest claim needs no PCP number (PCPA s. 2). This follows the Oct 25 Proof → ThermalStrike swap on best-bed-bug-spray-for-travel-canada, where heaters need no PCP number.
- **Katchy swapped to STEM,** a registered light trap the page names for fruit flies (QuickIdTable L291, FAQ L79).
- **TopPick score 8.7 removed.** TERRO's score cannot pass to RESCUE!, no sibling page scores RESCUE!, and nothing was tested. Its line now holds a code comment, so line numbers stay the same.

The 18 lines are 14 affiliate lines and 4 B-text lines (L119, L189, L210, L337).

- **L119** Hero (B-text): "The pick below is TERRO's" became false once the boxes below were swapped. It keeps TERRO as the page's pick, as the rest of the text does, and says the linked trap is RESCUE!. R-ext, R-api, M-terro
  - Before: `<p className="text-xl text-brand-100 max-w-3xl">To get rid of fruit flies, remove what they breed in first (ripe produce, drain slime, unrinsed recycling, the green bin), then trap the adults that are left. The pick below is TERRO&rsquo;s apple-shaped lure trap, for flies at the fruit bowl, sink or bin; Health Canada&rsquo;s registry does not list it, and the fruit fly lure traps it lists for home use are RESCUE! (PCP 34819) and OnGuard (PCP 35381). Egg to adult takes about a week, so plan on one to two weeks.</p>`
  - After: `<p className="text-xl text-brand-100 max-w-3xl">To get rid of fruit flies, remove what they breed in first (ripe produce, drain slime, unrinsed recycling, the green bin), then trap the adults that are left. Our pick is TERRO&rsquo;s apple-shaped lure trap, for flies at the fruit bowl, sink or bin, but Health Canada&rsquo;s registry does not list it, so the trap linked below is RESCUE! (PCP 34819), one of the two fruit fly lure traps the registry lists for home use (the other is OnGuard, PCP 35381). Egg to adult takes about a week, so plan on one to two weeks.</p>`
- **L125, L126** StickyBuyBar and TopBox (the TopBox mirrors the StickyBuyBar). "Best ready-made trap" became "Registered alternative". T4C, T4L, R-ext, R-api, L-34819, B-swap-sib
  - L125 before: `<StickyBuyBar tag={AMZ_TAG} name="TERRO T2502 Fruit Fly Trap (2-pack)" search="terro fruit fly trap" label="Best ready-made trap" />`
  - L125 after: `<StickyBuyBar tag={AMZ_TAG} name="RESCUE! Fruit Fly Trap (PCP 34819)" search="rescue fruit fly trap" label="Registered alternative" />`
  - L126 before: `<TopBox tag={AMZ_TAG} name="TERRO T2502 Fruit Fly Trap (2-pack)" search="terro fruit fly trap" label="Best ready-made trap" />`
  - L126 after: `<TopBox tag={AMZ_TAG} name="RESCUE! Fruit Fly Trap (PCP 34819)" search="rescue fruit fly trap" label="Registered alternative" />`
- **L150-L153, L155-L157** TopPick: label, name, blurb, search, score, pros and cons; the L154 cta is unchanged. Removed with the swap: the blurb's "Sold in Canada with a Canadian label, non-insecticidal (fine right beside the fruit bowl)" (T4C) and the pros "Canadian-label ... non-insecticidal lure", "Up to 45 days per trap — covers the whole Aug–Oct spike" (M-terro: 90 days is two traps of up to 45) and "One-way entry design outperforms open vinegar jars" (unsourced). The new text comes from L-34819, M-rff and R-api. T4C, T4L, R-ext, B-swap-sib
  - L150 before: `label="Our Top Pick — Ready-Made Trap"`
  - L150 after: `label="Registered Alternative — Ready-Made Trap"`
  - L151 before: `name="TERRO T2502 Fruit Fly Trap (2-pack)"`
  - L151 after: `name="RESCUE! Fruit Fly Trap (PCP 34819)"`
  - L152 before: `blurb="The apple-shaped counter trap that actually earns its shelf space: a food-based liquid lure draws adults in through angled entry holes they can't navigate back out of. Sold in Canada with a Canadian label, non-insecticidal (fine right beside the fruit bowl), and each trap stays effective for up to 45 days once activated. It won't fix your drain or your recycling bin — nothing in a bottle will — but for mopping up the adult population while you remove the source, it is a tidier job than an open vinegar jar: the angled entry holes let flies in and not back out, and the lure stays sealed inside instead of fermenting in an open dish on your counter."`
  - L152 after: `blurb="Health Canada’s registry has no TERRO fruit fly trap, so this is the ready-made trap we link for Canadian readers: Sterling International’s RESCUE! Fruit Fly Trap, registered as PCP 34819 for home use, with an acetic acid (vinegar) lure. Its label says to set it on a counter, table or windowsill near the problem, and names pantries, kitchen trash, sinks, garbage disposals and compost bins as good spots. Flies enter through funnel-shaped holes and drown in the liquid; each trap comes with a 30-day supply of attractant and is reused with refill pouches, RESCUE! says. It won’t fix your drain or your recycling bin — nothing in a bottle will — and RESCUE! says it won’t catch fungus gnats or drain flies. Check the package for PCP 34819."`
  - L153 before: `search="terro fruit fly trap"`
  - L153 after: `search="rescue fruit fly trap"`
  - L155 before: `score={8.7}`
  - L155 after: `// No score (Oct 29, 2026 box fix): no sibling page scores this trap, and no product was tested.`
  - L156 before: `pros={['Canadian-label product with a food-based, non-insecticidal lure', 'Up to 45 days per trap — covers the whole Aug–Oct spike', 'One-way entry design outperforms open vinegar jars', 'Sealed lure — no insecticide sprayed around food prep']}`
  - L156 after: `pros={['Registered for home use in Canada: PCP 34819, for fruit flies', 'Label lists pantries, kitchen trash, sinks, garbage disposals and compost bins', 'Reusable: rinse it and add a refill pouch (label)', 'Starts catching within minutes, usually within 24 hours (RESCUE!)']}`
  - L157 before: `cons={['Catches adults only — does nothing for eggs and larvae at the source', 'Modest cost per season if you run several traps', 'Lure smell is noticeable at very close range']}`
  - L157 after: `cons={['Catches adults only — does nothing for eggs and larvae at the source', 'Won’t catch fungus gnats or drain flies (RESCUE!)', 'Label: corrosive to eyes; keep out of reach of children']}`
- **L189** Methods-table row sub-label "TERRO T2502" (B-text; follows the L193 swap).
  - Before: `<td className="px-4 py-3 font-bold text-brand-800">Lure trap<br /><span className="font-normal text-xs text-gray-500">TERRO T2502</span></td>`
  - After: `<td className="px-4 py-3 font-bold text-brand-800">Lure trap<br /><span className="font-normal text-xs text-gray-500">RESCUE! (PCP 34819)</span></td>`
- **L193** Methods-table TERRO button. T4C, R-ext, B-swap-sib
  - Before: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="terro fruit fly trap" block>Check price on Amazon.ca →</BuyLink></td>`
  - After: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="rescue fruit fly trap" block>Check price on Amazon.ca →</BuyLink></td>`
- **L207** Methods-table Green Gobbler button. The row still describes Green Gobbler honestly (citronella and cinnamon oil, "not in Health Canada's registry", "a bacterial drain cleaner is what digests the film"), so the button says "instead". T4C, T4L, M-gg, M-bc, R-ext, PCPA, B-swap-sib
  - Before: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="green gobbler fruit fly goodbye drain gel" block>Check price on Amazon.ca →</BuyLink></td>`
  - After: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="bio-clean drain bacteria enzyme treatment" block>A bacterial drain cleaner instead →</BuyLink></td>`
- **L210** Methods-table row "UV + fan trap / Katchy" (B-text; follows the L214 swap). STEM is a light trap with an adhesive cartridge and no fan (L-35296); 35296 and 35801 both list fruit flies (R-ext).
  - Before: `<td className="px-4 py-3 font-bold text-brand-800">UV + fan trap<br /><span className="font-normal text-xs text-gray-500">Katchy</span></td>`
  - After: `<td className="px-4 py-3 font-bold text-brand-800">Light trap<br /><span className="font-normal text-xs text-gray-500">STEM (PCP 35296 or 35801)</span></td>`
- **L214** Methods-table Katchy button. T4C, R-ext, R-api, B-swap-sib
  - Before: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="katchy indoor insect trap" block>Check price on Amazon.ca →</BuyLink></td>`
  - After: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="stem indoor fly trap" block>Check price on Amazon.ca →</BuyLink></td>`
- **L326** Step 2 TERRO button. It sits under TERRO's paragraph and bullets, which already say the registry has no TERRO trap and name RESCUE!, so it says "instead". T4C, T4L, R-ext, L-34819, B-swap-sib
  - Before: `<BuyLink tag={AMZ_TAG} search="terro fruit fly trap">Check TERRO Fruit Fly Trap on Amazon.ca →</BuyLink>`
  - After: `<BuyLink tag={AMZ_TAG} search="rescue fruit fly trap">A registered lure trap instead: RESCUE! (PCP 34819) on Amazon.ca →</BuyLink>`
- **L337** Step 3 (B-text): "the gel linked below" became false once L340 was swapped.
  - Before: `<li><strong>Pour a bacterial or enzyme drain cleaner at night</strong>, when the drain will sit unused for hours, so it works on the organic film instead of just flowing past it; Iowa State Extension names a bacterial drain treatment that biodegrades the organic matter as another option. Check the label: Green Gobbler&rsquo;s Fruit Fly Goodbye, the gel linked below, is a citronella and cinnamon oil product that its maker says kills fruit flies and drain flies, not an enzyme cleaner, and Health Canada&rsquo;s registry lists no Green Gobbler product. Repeat for <strong>3–5 consecutive nights</strong> — one dose rarely clears an established film.</li>`
  - After: `<li><strong>Pour a bacterial or enzyme drain cleaner at night</strong>, when the drain will sit unused for hours, so it works on the organic film instead of just flowing past it; Iowa State Extension names a bacterial drain treatment that biodegrades the organic matter as another option. Check the label: Green Gobbler&rsquo;s Fruit Fly Goodbye is a citronella and cinnamon oil product that its maker says kills fruit flies and drain flies, not an enzyme cleaner, and Health Canada&rsquo;s registry lists no Green Gobbler product, so the link below is a bacterial cleaner instead. Repeat for <strong>3–5 consecutive nights</strong> — one dose rarely clears an established film.</li>`
- **L340** Step 3 "Check enzyme drain gel" sold Green Gobbler, which is not an enzyme gel (M-gg) and has no registration (R-ext). T4C, T4L, M-gg, M-bc, PCPA, B-swap-sib
  - Before: `<BuyLink tag={AMZ_TAG} search="green gobbler fruit fly goodbye drain gel">Check enzyme drain gel on Amazon.ca →</BuyLink>`
  - After: `<BuyLink tag={AMZ_TAG} search="bio-clean drain bacteria enzyme treatment">Check bacterial drain cleaners on Amazon.ca →</BuyLink>`

### Drain fly and fruit fly pages: left unchanged, with the reason

- **Fruit fly page text that still calls TERRO the pick** (not boxes): the Quick Answer L132 and bullet L136; FAQs L31, L43, L75 and L79 ("our pick above", which still holds because the hero names TERRO as the pick); key facts L246 ("Best ready-made trap"); QuickIdTable L289 ("(our pick)"); the Step 2 H2 L317 and L319-L323; prevention L375; the schema description L106. Each now sits beside a RESCUE! box labelled "Registered alternative". Making RESCUE! the editorial pick in the text is the owner's call.
- **Prices:** the fruit fly table note L227 ("under twenty dollars for a multi-pack"; it also still mentions "drain gels"), left for the owner by T4C and T4L.
- **Amazon.ca results:** 'stem indoor fly trap' may show STEM's 35801 trap (no drain flies on its pest list) or US stock with no PCP number, and 'rescue fruit fly trap' may show US stock. Every swapped box tells readers which PCP number to check for.
- **Drain fly page, not flagged:** card 3 "Cheap, disposable-cheap" and card 5 "Cheapest genuinely preventive item here" (cost words, no price). The decision-table cell L203 ("a sticky or light trap") and step 5 L428 ("a quiet indoor light-and-glue trap") are still true.
- **Raid Essentials 35297 and OnGuard 35381** are registered, but neither has a search term anywhere in app/, so neither could take a box (FIX-BRIEF bars new terms).

Lines changed in this block: 26 (how-to-get-rid-of-drain-flies-canada 8, how-to-get-rid-of-fruit-flies 18). That is 22 affiliate lines and 4 B-text lines; none inserted, none deleted.

### Mosquito trap and raccoon electric fence pages: checks and evidence key

**Checks** (against `git show HEAD:<file>`, read-only; no other git, no build): line counts unchanged from the tier 4 upgrade (397 and 388), because lines were replaced one for one, so each line number is the same before and after; counts of `<BuyLink`, `<AwardRow`, `<AwardCard`, `<StickyBuyBar`, `<AmazonLink`, `<TopPick`, `<TopBox`, `asin=`, `asin:`, `search=`, `search:`, `tag=` and `AMZ_TAG` identical to HEAD on both pages; the sequences of `tag`, `search` and `asin` values identical (no swap, so no search term or ASIN changed and nothing for A-asin); all 16 "before" lines match HEAD verbatim; `npx tsc --noEmit` clean; no "safe", "non-toxic", "PMRA", "approved", price, rating or testing claim in a changed line.

**Evidence key:**

- `T4C`: TIER4-CHECK.md line 12 (mosquito trap) and line 13 (electric fence), "Box (owner)" items. `T4L`: TIER4-LOG.md lines 5 and 6, "Box flags".
- `R-ext`: Health Canada's registry product extract (https://pest-control.canada.ca/pesticide-registry-api/api/extract/product), downloaded and searched Oct 29, 2026 (21,844 rows). 0 rows (English name, French name or registrant) for BIOGENTS, MOSQUITAIRE, SWEETSCENT, DYNATRAP, ATRAKTA, KATCHY, ZAREBA, GALLAGHER, FI-SHOCK and PARMAK. No fence energizer: the "FENCE" and "ENERGIZER" rows are herbicides, wood preservatives, repellents and a pool product. MOSQUITO MAGNET PATRIOT PLUS 32375 and EXECUTIVE 29944 current, DOMESTIC; the Independence, Patriot, Pro, Pro Plus, Liberty, Liberty Plus and Defender historical (2024-11-12).
- `R-api`: the live registry API, Oct 29 (https://pest-control.canada.ca/pesticide-registry-api/api/search/product/<Reg. No.> and /search/product-pest/<Reg. No.>). 32375: Full Registration, Current, DOMESTIC, device, Woodstream Canada; pest MOSQUITOES. 35296 STEM FLYING INSECT LIGHT TRAP, 35801 STEM FLYING INSECT LIGHT TRAP1 and 35297 RAID ESSENTIALS FLYING INSECT LIGHT TRAP: Full Registration, Current, DOMESTIC, device; pests include MOSQUITOES, FRUIT FLIES and FUNGUS GNATS. 36155 ZEVO FLYING INSECT* TRAP6.5: Current, DOMESTIC, no pests listed.
- `L-32375`: Patriot Plus label, fetched with WebFetch and read from the saved file: https://pest-control.canada.ca/pesticide-registry-api/api/pdf/inline/en/444693361 . "Attracts certain mosquitoes."; no coverage area, percentage or reduction claim.
- `UW`: University of Wisconsin–Madison, read Oct 29 (https://mosquitosite.russell.wisc.edu/preventing-mosquito-bites/carbon-dioxide-baited-mosquito-traps): "traps purchased by individual homeowners usually do not work to reduce human biting"; "Mosquito Magnets do catch 1000's of mosquitoes, but this does not change the biting rates"; after "the Dynatrap marketing materials state that a novel method of CO2 generation is used": "we detected no CO2 at all (unpublished results)". No percentage reduction anywhere.
- `W-mm`: Woodstream Canada, Patriot Plus MM4202B, read Oct 29 (https://www.woodstreambrands.ca/patriot-plus-mm-trap-canada-mm4202b): "Coverage area up to 1 acre"; no percentage reduction.
- `B-bg`: Biogents, BG-Mosquitaire, read Oct 29 (https://us-shop.biogents.com/products/bg-mosquitaire): "BG-Sweetscent is a patented lure that mimics human skin scent"; "Each sachet lasts up to two months"; "you may start your setup without CO₂ and optionally add CO₂"; no octenol; in the box: the trap, an outdoor power supply, a 33 ft extension cord and a 2-month BG-Sweetscent lure.
- `AMCA`: American Mosquito Control Association FAQ, read Oct 29 (https://www.mosquito.org/faqs/): 4.1% and 6.4% are the mosquito share of the daily catch in two University of Notre Dame bug zapper studies, not a DynaTrap figure.
- `PCPR`: Pest Control Products Regulations, Schedule 1 item 2, "Devices that are manufactured, represented or sold as a means to attract or destroy flying insects, or to attract and destroy them" (https://laws-lois.justice.gc.ca/eng/regulations/SOR-2006-124/page-10.html); Schedule 2 items 5-6 exempt only CSA-certified high-voltage insect killers (https://laws-lois.justice.gc.ca/eng/regulations/SOR-2006-124/page-11.html).
- `Z-kit`: Zareba garden kit, read Oct 29 (https://www.zarebasystems.com/garden-kit): "5 Acre AC OR DC Powered Charger"; 250 ft of "17 gauge aluminum wire"; ten "30 inch Poly fence posts with clips"; "Ground rod with clamp"; "Electric fence tester"; three "Electric Fence Warning Signs"; keeps out "rabbits, raccoons, skunks, woodchucks". The page has no "low impedance", "certified", CSA, UL or cUL.
- `Z-rod`: Zareba ground-rod guide, read Oct 29 (https://www.zarebasystems.com/learning-center/installation-guide/ground-rod-installation): "An effective grounding system consists of three 6 to 8 foot grounding rods".
- `BYLAW`: Toronto Municipal Code ch. 447 (consolidated June 9, 2021; https://www.toronto.ca/legdocs/municode/1184_447.pdf) § 447-1.2 A(4), and Mississauga Fence By-law 0397-1978 (amended to 0020-2026; https://www.mississauga.ca/wp-content/uploads/2026/02/18081845/Fence-By-law-0397-1978.pdf) s. 12, both fetched with WebFetch and read from the saved file: electric fences only on agricultural land, to contain livestock or animals, at 12 volts or less, with warning signs.

### best-mosquito-trap (12 lines, reword)

Reworded, not swapped. Biogents and DynaTrap: the only current outdoor mosquito traps in the registry are propane CO₂ traps (Patriot Plus 32375, Executive 29944, SkeeterVac SV-15 28452 and SV-3100C 31703, MK12 Guardian 28460; T4C), and the one with a search term here, the Patriot Plus, already holds card 1. Katchy: this page named no registered indoor trap, and its indoor sibling (best-indoor-fly-mosquito-trap-canada) offers only the Zevo, whose registration (36155) lists no pests (R-api) and whose label, per TIER4-CHECK.md line 8, names no mosquitoes. All 12 lines are affiliate lines in the AwardRow block.

- **L132** Card 1 why: "Independent testing supports 70–90% population reduction over 6–8 weeks on up to 1 acre". No source gives a reduction; the label claims attraction only, and UW says biting rates do not change. T4C, T4L, UW, L-32375, W-mm
  - Before: `why: 'The only trap type that makes real CO₂ — the cue biting females hunt for. Independent testing supports 70–90% population reduction over 6–8 weeks on up to 1 acre.',`
  - After: `why: 'The only trap type that makes real CO₂ — the cue biting females hunt for. Its Canadian label (Reg. No. 32375) says it attracts certain mosquitoes, and Woodstream Canada rates it for up to 1 acre; the University of Wisconsin–Madison says Mosquito Magnets catch thousands of mosquitoes without changing biting rates in yards, so pair it with a repellent.',`
- **L137** Card 1 pro "Genuinely reduces the biting population". T4C, T4L, UW, R-api
  - Before: `pros: ['Genuinely reduces the biting population', 'Covers up to ~1 acre', 'Targets egg-laying females'],`
  - After: `pros: ['Registered in Canada (Reg. No. 32375)', 'Covers up to ~1 acre', 'Targets egg-laying females'],`
- **L142** Card 2 name "(CO₂ lure)": the lure is BG-Sweetscent and CO₂ is optional; no Biogents registration. T4C, T4L, B-bg, R-ext, PCPR
  - Before: `name: 'Biogents BG-Mosquitaire (CO₂ lure)',`
  - After: `name: 'Biogents BG-Mosquitaire (not registered in Canada)',`
- **L143** Card 2 why: "A CO₂/octenol lure that mimics a human host"; registration added; the price comparison dropped. T4C, T4L, B-bg, R-ext, PCPR
  - Before: `why: 'A CO₂/octenol lure that mimics a human host and vacuums in host-seeking females — better mosquito targeting than UV, without the full Mosquito Magnet price.',`
  - After: `why: 'A fan trap baited with BG-Sweetscent, which Biogents says mimics human skin scent and lasts up to two months a sachet (CO₂ from a tank is optional); it vacuums in host-seeking females — better mosquito targeting than UV. No Biogents product is in Health Canada’s registry, and a device sold to attract or destroy flying insects needs a Reg. No. (Pest Control Products Regulations, Schedule 1), so check the box for one.',`
- **L146** Card 2 pro "Consistent reviews" (unsourced) replaced by a fact from the maker's box list. T4C, B-bg
  - Before: `pros: ['Mosquito-specific catch', 'Cheaper than propane', 'Consistent reviews'],`
  - After: `pros: ['Mosquito-specific catch', 'Cheaper than propane', 'Runs on mains power, no propane (Biogents)'],`
- **L147** Card 2 con "Needs CO₂ or octenol refills"; registration added. T4C, T4L, B-bg, R-ext
  - Before: `cons: ['Needs CO₂ or octenol refills', 'Covers less area than a whole-yard barrier spray'],`
  - After: `cons: ['Not registered in Canada (no Biogents record)', 'A new BG-Sweetscent sachet about every two months', 'Covers less area than a whole-yard barrier spray'],`
- **L151** Card 3 name: no DynaTrap registration. T4C, T4L, R-ext, PCPR
  - Before: `name: 'DynaTrap UV + Fan Trap',`
  - After: `name: 'DynaTrap UV + Fan Trap (not registered in Canada)',`
- **L152** Card 3 why: "only ~5% of the catch is mosquitoes" is a bug zapper figure, not DynaTrap's; replaced by UW's DynaTrap reading; registration added. T4C, T4L, AMCA, UW, R-ext, PCPR
  - Before: `why: 'Cheap and satisfying to empty, and fine as a supplemental flying-insect catcher — but only ~5% of the catch is mosquitoes, so treat it as a bonus, not a solution.',`
  - After: `why: 'Cheap and satisfying to empty, and fine as a supplemental flying-insect catcher — but UW–Madison detected no CO₂ from DynaTraps, so treat it as a bonus, not a solution. No DynaTrap model is in Health Canada’s registry, and a device sold to attract or destroy flying insects needs a Reg. No. (Pest Control Products Regulations, Schedule 1), so check the box for one.',`
- **L156** Card 3 con "~5% of catch is mosquitoes". T4C, T4L, AMCA, R-ext
  - Before: `cons: ['~5% of catch is mosquitoes', 'Bulbs + cartridges add up'],`
  - After: `cons: ['Not registered in Canada (no DynaTrap record)', 'Bulbs + cartridges add up'],`
- **L160** Card 4 name: no Katchy registration. T4C, T4L, R-ext, PCPR
  - Before: `name: 'Katchy Indoor Insect Trap',`
  - After: `name: 'Katchy Indoor Insect Trap (not registered in Canada)',`
- **L161** Card 4 why: registration added, with the registered indoor light traps that list mosquitoes named as examples (no link, no search term). T4C, R-ext, R-api, PCPR
  - Before: `why: 'A small UV + fan + glue-card unit for near a lamp or window. Best against fungus gnats and fruit flies and the occasional stray mosquito — not a room full of them.',`
  - After: `why: 'A small UV + fan + glue-card unit for near a lamp or window. Best against fungus gnats and fruit flies and the occasional stray mosquito — not a room full of them. No Katchy record is in Health Canada’s registry; indoor light traps are registered as devices, and current ones whose registrations list mosquitoes include STEM (Reg. No. 35296) and Raid Essentials (35297), so check the box for a Reg. No.',`
- **L170** whichToBuy: "Best Mid-Price CO₂ lure"; registration for the Biogents and DynaTrap picks; the Patriot Plus is the one registered pick. T4C, T4L, B-bg, R-ext, R-api
  - Before: `<strong>Rural acreage or a cottage near water?</strong> The <em>Best Overall</em> propane trap earns its keep. <strong>Suburban lot on a budget?</strong> The <em>Best Mid-Price</em> CO₂ lure gives real mosquito-specific catch for less. <strong>Just want something cheap on the deck?</strong> Grab the <em>Best Budget</em> DynaTrap — but for whole-yard treatment that can also target ticks where they wait, look at <Link href="/mosquito-control">professional barrier spray</Link>.`
  - After: `<strong>Rural acreage or a cottage near water?</strong> The <em>Best Overall</em> propane trap earns its keep, and it is the one pick here with a Canadian Reg. No. (32375). <strong>Suburban lot on a budget?</strong> The <em>Best Mid-Price</em> skin-scent trap gives mosquito-specific catch for less, but no Biogents product is in Health Canada&rsquo;s registry, so weigh that first. <strong>Just want something cheap on the deck?</strong> The <em>Best Budget</em> DynaTrap is a flying-insect catcher, not a mosquito fix, and no DynaTrap model is registered here either. For whole-yard treatment that can also target ticks where they wait, look at <Link href="/mosquito-control">professional barrier spray</Link>.`

### best-electric-fence-for-raccoons-canada (4 lines, reword)

Wording fixes, no swap: the Zareba kit is real and sold as its maker describes it, and no energizer of any brand is in the registry (R-ext), so there is no registered alternative to point at; whether fence energizers need a registration is the owner's question for Health Canada (T4L). The by-law gap in "all five picks" (T4C) is closed in card 1 and in the first sentence of the whichToBuy that every pick sits under. All 4 lines are affiliate lines.

- **L149** Card 1 why: "a low-impedance energizer, poly-wire, step-in posts, and insulators", "sized for a small two-strand raccoon loop" and "certified for Canada" are not on Zareba's page (its wire is aluminum, its posts come with clips, and Zareba's own raccoon layout is one wire at 4–6 in, per T4L); now the kit contents, a certification check and the by-law. T4C, T4L, Z-kit, BYLAW
  - Before: `why: 'The cleanest all-in-one starting point for a home garden: a low-impedance energizer, poly-wire, step-in posts, and insulators in one box, sized for a small two-strand raccoon loop. Widely available and certified for Canada, so you are running in a weekend.',`
  - After: `why: 'The cleanest all-in-one starting point for a home garden: Zareba’s kit pairs a 5-acre AC or DC charger with 250 ft of 17-gauge aluminum wire and ten 30-inch poly posts with clips, plus a ground rod, a tester and warning signs. Check the charger for a recognized Canadian certification mark, and check your fence by-law first: Toronto and Mississauga allow electric fences only on agricultural land.',`
- **L153** Card 1 pros "Low-impedance — tolerates light weed contact" and "Well-supported, Canada-certified brand"; "insulators" in the first pro. T4C, T4L, Z-kit
  - Before: `pros: ['Complete kit — energizer, wire, posts, insulators', 'Low-impedance — tolerates light weed contact', 'Well-supported, Canada-certified brand'],`
  - After: `pros: ['Complete kit — charger, wire, posts, ground rod, tester', 'Three warning signs in the box', 'Zareba lists raccoons, rabbits, skunks and woodchucks'],`
- **L154** Card 1 con "Grounding rods often bought separately": one rod is in the box, and Zareba's guide calls for three. T4C, T4L, Z-kit, Z-rod
  - Before: `cons: ['Grounding rods often bought separately', 'Sized for small plots, not long perimeters'],`
  - After: `cons: ['One ground rod in the box; Zareba’s guide calls for three', 'Sized for small plots, not long perimeters'],`
- **L195** whichToBuy: no pick mentioned the Toronto and Mississauga by-laws; "everything in one box" (one of the three ground rods Zareba's guide calls for). The rest of the line is unchanged. T4C, Z-kit, Z-rod, BYLAW
  - Before: `<strong>Small home garden, outlet nearby?</strong> The <em>Best Overall</em> Zareba kit gets you running fastest with everything in one box. <strong>Want maximum longevity and headroom?</strong> …`
  - After: `<strong>First, check your fence by-law:</strong> Toronto and Mississauga allow electric fences only on agricultural land. <strong>Small home garden, outlet nearby?</strong> The <em>Best Overall</em> Zareba kit gets you running fastest, with the charger, wire, posts and a ground rod in one box. <strong>Want maximum longevity and headroom?</strong> …`

### Mosquito trap and electric fence pages: left unchanged, with the reason

- **Mosquito trap Patriot Plus elements** (StickyBuyBar L100, TopBox L101, card 1 search and ASIN, buttons L118, L201, L296): registered (32375), no false wording.
- **Plain buttons for the unregistered picks** (Biogents L208, DynaTrap L215 and L297, Katchy L222 and L298): not in T4C or T4L, and they make no claim; the QuickIdTable (L276-L279) and FAQs (L59, L63) already say the registry has no Biogents, DynaTrap or Katchy record. The tier 3 pages labelled such buttons "(not registered in Canada)": owner's call.
- **Katchy to STEM, if the coordinator reads "sibling" broadly:** 'stem indoor fly trap' is live on best-fruit-fly-trap-canada (L660) and carried the drain fly swap above (B-swap-sib), and STEM 35296 lists mosquitoes. Not done here, because this page did not recommend STEM before this pass and the fruit fly page is not its sibling; card 4 now names STEM and Raid Essentials as registered examples instead.
- **Badges and scores on the unregistered picks** ('Best Mid-Price' 8.4, 'Best Budget' 7.0, 'Best Indoor' 7.4): editorial, not flagged; each name now says "not registered in Canada".
- **Prices** (FAQs 1, 2, 4 and 5, the types table, the price note, the GTA table) and FAQ 6's retailer stock claims: left for the owner (T4L).
- **Electric fence StickyBuyBar and TopBox** (L119, L120): no false wording, and the hero above them gives the by-law. Cards 2-5: the by-law now heads the whichToBuy they sit under.
- **Electric fence text, not boxes:** FAQ 1 (L30) "two-strand poly-wire kit ... a Zareba garden kit covers this cleanly" (the kit wire is aluminum, T4C) and body L268 ("puts the energizer, wire, posts, and insulators in one box").

Lines changed in this block: 16 (best-mosquito-trap 12, best-electric-fence-for-raccoons-canada 4), all affiliate lines; none inserted, none deleted.

### Cockroach, house centipede and carpet beetle pages: checks and evidence key

**Checks** (against copies taken before editing and `git show HEAD:<file>`, read-only; no other git, no build): line counts unchanged (565, 549 and 544), because lines were replaced one for one, so each line number is the same before and after; all 22 "before" lines match HEAD verbatim; counts of `<BuyLink`, `<AwardRow`, `<AwardCard`, `<StickyBuyBar`, `<AmazonLink`, `<TopPick`, `<TopBox`, `search=`/`search:` and `tag={AMZ_TAG}` identical to HEAD on all three pages, and every `tag` is unchanged; no `asin` on any of the three pages, so nothing for A-asin; the one swapped-in term ('boric acid roach bait') was already live on the same page (L251, L314); after the swap no 'roach killing bait stations', "Combat-style" or secondary-kill wording is left on the cockroach page; `npx tsc --noEmit` clean; no "safe", "non-toxic", "PMRA-registered", "Health Canada approved", price, rating or testing claim in a changed line ("Safer’s" is the brand).

**Evidence key:**

- `T4C`: TIER4-CHECK.md line 17 (cockroaches), line 18 (house centipedes) and line 19 (carpet beetles), "Box (owner)" items. `T4L`: TIER4-LOG.md lines 7, 8 and 9, "Box flags".
- `R-api`: the live registry API, Oct 29 (https://pest-control.canada.ca/pesticide-registry-api/api/search/product/<Reg. No.>). 26519 COMBAT ROACH KILLING SYSTEM: Cancelled, expiry 2006-05-31, Historical. 25735 RAID ANT ROACH & EARWIG GEL BAITS: Full Registration, DOMESTIC, boric acid, Current (expiry 2029-12-31). 20471 PIC ROACH CONTROL SYSTEM: Full Registration, DOMESTIC, propoxur, Current. 32278 SAFER'S ANT & CRAWLING INSECT KILLER: Full Registration, DOMESTIC, Current. 32561 DOKTOR DOOM BE GREEN PREMIUM FOOD GRADE DIATOMACEOUS EARTH: Full Registration, DOMESTIC, Current.
- `R-ext`: Health Canada's registry product extract (https://pest-control.canada.ca/pesticide-registry-api/api/extract/product), the copy downloaded Oct 29, 2026, searched Oct 29: 21,844 rows; 448 name carpet beetles (192 current), and none of them is a lure, trap, pheromone or attractant product (the registered pheromones are all for other pests). No current device is a garment bag, chest or cabinet.
- `L-25735`: Raid label 2017-1008 (2017-03-07), fetched with WebFetch and read from the saved file: https://pest-control.canada.ca/pesticide-registry-api/api/pdf/inline/en/444689489 . "GUARANTEE: BORIC ACID 2.0%"; "CONTAINS 12 CHILD RESISTANT BAITS"; "Place at least 10 baits in the kitchen and 2 in each bathroom."; "replace all baits every four weeks"; "Apply/use only in areas inaccessible to children and pets."; "Ants, cockroaches & earwigs enter. Eat bait. Crawl away to die." Nothing on sharing bait, nestmates or secondary kill.
- `L-20471`: PIC label 2026-0064 (2026-01-21), fetched with WebFetch and read from the saved file: https://pest-control.canada.ca/pesticide-registry-api/api/pdf/inline/en/444685167 . "Roaches will feed and generally die in their hiding places."
- `L-32278`: Safer's label 2025-1883 (2025-05-21), fetched with WebFetch and read from the saved file: https://pest-control.canada.ca/pesticide-registry-api/api/pdf/inline/en/444695778 . "Remains effective in the control of insects for as long as SAFER’S® ANT & CRAWLING INSECT KILLER is present."; "KILLS ANTS, COCKROACHES, EARWIGS, FLEAS, SILVERFISH, CRICKETS, MILLIPEDES AND CENTIPEDES"; "CARPET BEETLES: Thoroughly dust underneath and along edges of carpeting and rugs."; "Avoid breathing dust."; "WARNING, CONTAINS THE ALLERGEN MILK". Nothing on resistance, expiry or shelf life.
- `PCPA`: Pest Control Products Act s. 2 (https://laws-lois.justice.gc.ca/eng/acts/P-9.01/page-1.html): a product "manufactured, represented, distributed or used as a means for directly or indirectly controlling, destroying, attracting or repelling a pest". Regulations Schedule 1 (https://laws-lois.justice.gc.ca/eng/regulations/SOR-2006-124/FullText.html), item 1: "Garment bags, cabinets or chests that are manufactured, represented or sold as a means to protect clothing or fabrics from pests."; item 2: "Devices that are manufactured, represented or sold as a means to attract or destroy flying insects, or to attract and destroy them."
- `HC-buy`: Health Canada, Buying pest control products online, read Oct 29 (https://www.canada.ca/en/health-canada/services/consumer-product-safety/reports-publications/pesticides-pest-management/fact-sheets-other-resources/buying-pest-control-products-online.html): "It’s a violation of the Pest Control Products Act to buy and use unregistered pesticides."
- `UC-IPM`: bait placement "near hiding spaces or where roaches are likely to encounter them while foraging" (UC IPM pn7467, as verified in T4C line 17; already the cockroach page's own wording at L307).
- `C2-roach`: the tier 2 precedent above (best-cockroach-killer-canada): the same Combat search swapped to Raid 25735 on 'boric acid roach bait', with the card score kept.
- `B-safe`, `B-swap`, `B-reword`, `B-text`: as in the tier 2-3 sections above.

### how-to-get-rid-of-cockroaches-canada (11 lines, swap)

The six elements on 'roach killing bait stations' (Combat's US product name; Combat's Canadian roach registration 26519 was cancelled in 2006) were swapped to Raid Ant Roach & Earwig Gel Baits (PCP 25735), the registered station the page itself recommends (hero L128, FAQs L48 and L92, QuickIdTable L322, bait plan L376 and L382, Advion section L429, situation list L437, checklist L450), on the page's own boric acid bait term (L251, L314), as in C2-roach. The 11 lines are 9 affiliate lines and 2 B-text lines (L230 and L231, the methods-table row whose button was swapped; T4C lists both). Card 1 keeps its score 8.8, as the tier 2 swap kept 9.2 on the same Raid card.

- **L134, L135** StickyBuyBar and TopBox (the TopBox mirrors the StickyBuyBar). T4C, T4L, R-api, L-25735, B-swap, C2-roach
  - L134 before: `<StickyBuyBar tag={AMZ_TAG} name="Enclosed roach bait stations (domestic-class)" search="roach killing bait stations" label="Best first move" />`
  - L134 after: `<StickyBuyBar tag={AMZ_TAG} name="Raid Ant Roach & Earwig Gel Baits (look for PCP 25735)" search="boric acid roach bait" label="Best first move" />`
  - L135 before: `<TopBox tag={AMZ_TAG} name="Enclosed roach bait stations (domestic-class)" search="roach killing bait stations" label="Best first move" />`
  - L135 after: `<TopBox tag={AMZ_TAG} name="Raid Ant Roach & Earwig Gel Baits (look for PCP 25735)" search="boric acid roach bait" label="Best first move" />`
- **L175, L176, L177** AwardRow "Best First Move": name, why and search swapped to Raid 25735. Removed: "Combat-style", "poison the harbourage through contaminated carcasses and droppings" (lab-only and active-dependent, on no Canadian label; T4C) and "The compliant, widely stocked Canadian answer" (T4L). The new why is the label's own text. T4C, T4L, R-api, L-25735, UC-IPM, B-swap, C2-roach
  - L175 before: `name: 'Enclosed Roach Bait Stations (Combat-style, domestic-class)',`
  - L175 after: `name: 'Raid Ant Roach & Earwig Gel Baits (PCP 25735)',`
  - L176 before: `why: 'Child-resistant plastic stations with slow-acting food bait — foragers feed, walk home, and poison the harbourage through contaminated carcasses and droppings. The compliant, widely stocked Canadian answer; check the label for a PCP registration number.',`
  - L176 after: `why: 'Twelve child-resistant bait stations of slow-acting boric acid gel (2.0%), registered in Canada for cockroaches (PCP 25735). Roaches eat the bait and crawl away to die (label), so stations set beside their hiding spots reach the ones you never see. The label asks for at least 10 in the kitchen and 2 in each bathroom, only where children and pets cannot reach, replaced every 4 weeks. The search below also shows other boric acid baits, so look for PCP 25735 on the box.',`
  - L177 before: `search: 'roach killing bait stations',`
  - L177 after: `search: 'boric acid roach bait',`
- **L180** Card 1 pro "Secondary kill reaches roaches that never leave the wall void" (T4C, T4L) replaced by the placement point. T4C, T4L, L-25735, UC-IPM
  - Before: `pros: ['Secondary kill reaches roaches that never leave the wall void', 'Enclosed and child-resistant — the bait stays inside the station', 'Modest cost to blanket a whole kitchen'],`
  - After: `pros: ['Set beside their hiding spots, it reaches roaches you never see', 'Enclosed and child-resistant — the bait stays inside the station', 'Modest cost to blanket a whole kitchen'],`
- **L230** Methods-table sub-label "Combat-style, domestic-class" (B-text; follows the L233 swap). T4C, T4L, R-api
  - Before: `<td className="px-4 py-3 font-bold text-brand-800">Enclosed bait stations<br /><span className="font-normal text-xs text-gray-500">Combat-style, domestic-class</span></td>`
  - After: `<td className="px-4 py-3 font-bold text-brand-800">Enclosed bait stations<br /><span className="font-normal text-xs text-gray-500">With a PCP number, e.g. Raid 25735</span></td>`
- **L231** Methods-table mechanism cell "carried back to the harbourage; secondary kill via carcasses and droppings" (B-text; T4C). Now the labels' wording. T4C, L-25735, L-20471
  - Before: `<td className="px-4 py-3 text-gray-700">Slow-acting food bait carried back to the harbourage; secondary kill via carcasses and droppings</td>`
  - After: `<td className="px-4 py-3 text-gray-700">Slow-acting food bait eaten where roaches forage; they generally die back in their hiding places</td>`
- **L233** Methods-table stations button. T4C, R-api, B-swap, C2-roach
  - Before: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="roach killing bait stations" block>Check price on Amazon.ca →</BuyLink></td>`
  - After: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="boric acid roach bait" block>Check price on Amazon.ca →</BuyLink></td>`
- **L312** Core-kit button. T4C, R-api, B-swap, C2-roach
  - Before: `<BuyLink tag={AMZ_TAG} search="roach killing bait stations">Enclosed bait stations →</BuyLink>`
  - After: `<BuyLink tag={AMZ_TAG} search="boric acid roach bait">Raid bait stations (PCP 25735) →</BuyLink>`
- **L388** Bait-plan button. T4C, R-api, B-swap, C2-roach
  - Before: `<BuyLink tag={AMZ_TAG} search="roach killing bait stations">Check enclosed bait stations on Amazon.ca →</BuyLink>`
  - After: `<BuyLink tag={AMZ_TAG} search="boric acid roach bait">Check Raid bait stations (PCP 25735) on Amazon.ca →</BuyLink>`

### how-to-get-rid-of-centipedes-canada (2 lines)

1 affiliate line and 1 B-text line (L272, the verdict cell beside the DE button; T4C lists it).

- **L198** AwardRow "Best Diagnostic" pro: "fine in kids-and-pets homes" (safety wording) removed. T4C, T4L, B-safe
  - Before: `pros: ['Tells you what the centipedes have been eating', 'Gives a weekly trend line instead of guesswork', 'No pesticide — fine in kids-and-pets homes'],`
  - After: `pros: ['Tells you what the centipedes have been eating', 'Gives a weekly trend line instead of guesswork', 'No pesticide — nothing to spray or dust'],`
- **L272** Methods-table DE verdict (B-text): "a registered insecticidal DE with a PCP number, not food-grade" was false, because Doktor Doom Be Green Premium Food Grade DE (32561) is registered. Now the page's own test (body L468): a PCP number and centipedes on the label. T4C, T4L, R-api, L-32278
  - Before: `<td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Useful supplement</strong> &mdash; inert once damp, so sequence it after the dehumidifier; buy a registered insecticidal DE with a PCP number, not food-grade</td>`
  - After: `<td className="px-4 py-3 text-gray-700"><strong className="text-amber-700">Useful supplement</strong> &mdash; inert once damp, so sequence it after the dehumidifier; buy a DE whose label shows a PCP number and lists centipedes, such as Safer&rsquo;s 32278 (&ldquo;food grade&rdquo; is not the test)</td>`

### how-to-get-rid-of-carpet-beetles-canada (9 lines, reword)

The lure-trap pick is reworded, not swapped: no carpet beetle lure, trap or pheromone is registered (R-ext), and neither this page nor a sibling has a search term for the alternative the page names (a plain glue board with no lure, FAQ L70). The page has no amazon.ca sibling by design (its code comment, L25-L26), and the US twin's only pick is the amazon.com 'airtight plastic storage bins'. All 9 lines are affiliate lines.

- **L193** Decision-table "Monitors" button sells lure traps. Search kept. T4C, T4L, R-ext, PCPA, HC-buy, B-reword
  - Before: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="carpet beetle pheromone trap" block>Monitors &rarr;</BuyLink></td>`
  - After: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="carpet beetle pheromone trap" block>Lure traps (not registered in Canada) &rarr;</BuyLink></td>`
- **L218** "Does Most of the Work" pro: "safe around children and pets" removed. T4C, T4L, B-safe
  - Before: `pros: ['Removes every life stage plus the food source at once', 'No chemistry, no label restrictions, safe around children and pets', 'Doubles for dust mites, fleas and general allergen control'],`
  - After: `pros: ['Removes every life stage plus the food source at once', 'No chemistry and no pesticide label to follow', 'Doubles for dust mites, fleas and general allergen control'],`
- **L226** "Best Prevention" pro: "Also protects against clothes moths" removed (a garment bag, cabinet or chest represented as protecting fabric from pests is a Schedule 1 item 1 device, and none is registered). T4C, T4L, PCPA, R-ext
  - Before: `pros: ['Ends the annual relapse rather than treating it', 'One-time purchase, no chemistry, no re-application', 'Also protects against clothes moths and humidity damage'],`
  - After: `pros: ['Ends the annual relapse rather than treating it', 'One-time purchase, no chemistry, no re-application', 'Also protects against humidity damage'],`
- **L231, L232** "Best for Finding the Source": name and why. Removed: "if there is no number, treat it as a plain glue board" (a lure used to attract a pest is a pest control product; T4C). Added: no registration, the Act, Health Canada's line, and the plain-glue-board alternative in the FAQ's words (L70). Search, pros and cons unchanged. T4C, T4L, R-ext, PCPA, HC-buy, B-reword
  - L231 before: `name: 'Carpet Beetle Monitors (Lure-Baited or Plain Glue Boards)',`
  - L231 after: `name: 'Carpet Beetle Pheromone Traps (Not Registered in Canada)',`
  - L232 before: `why: 'Instrumentation, not control. When the food source is hidden inside a wall, an attic, or a closet nobody has emptied in a decade, a line of dated monitors narrows the hunt to a room and tells you whether adults are still emerging. Check the packaging for a PCP registration number — a lure-baited insect trap can be a regulated product in Canada — and if there is no number, treat it as a plain glue board.',`
  - L232 after: `why: 'Instrumentation, not control. When the food source is hidden inside a wall, an attic, or a closet nobody has emptied in a decade, a line of dated monitors narrows the hunt to a room and tells you whether adults are still emerging. But a lure that attracts a pest is a pest control product under the Pest Control Products Act, Health Canada’s registry listed no carpet beetle lure, trap or pheromone on October 29, 2026, and Health Canada says it is a violation of the Act to buy and use unregistered pesticides. Check any package for a PCP number; a plain glue board with no lure, laid along the carpet edge, still catches wandering larvae and adults.',`
- **L240** "Best Crack and Crevice" why: "nothing develops resistance to it and the powder does not expire" (unsourced; T4C) replaced by the label's line. T4C, T4L, L-32278
  - Before: `… abrading and absorbing the waxy layer that holds an insect’s moisture in, so nothing develops resistance to it and the powder does not expire. Buy the duster with it …`
  - After: `… abrading and absorbing the waxy layer that holds an insect’s moisture in, and Safer’s label says it stays effective for as long as the powder is present. Buy the duster with it …`
- **L242** Same card's pros: "PMRA-registered — the PCP number is printed on the bag" (true only for Safer's 32278; T4C) and "no resistance can develop" (unsourced). T4C, T4L, R-api, L-32278
  - Before: `pros: ['PMRA-registered — the PCP number is printed on the bag', 'Reaches the void spaces a vacuum cannot', 'Mechanical kill, so no resistance can develop'],`
  - After: `pros: ['Safer’s Ant & Crawling Insect Killer is registered (PCP 32278): look for that number', 'Reaches the void spaces a vacuum cannot', 'Mechanical kill, effective as long as the powder is present (label)'],`
- **L256** whichToBuy (same AwardRow) sent buyers to the lure traps without the caveat; follows the L231-L232 reword. T4C, R-ext, B-reword
  - Before: `… <strong>Cannot find where they are coming from?</strong> The <em>Best for Finding the Source</em> monitors will narrow it to a room in a fortnight. <strong>Larvae emerging …`
  - After: `… <strong>Cannot find where they are coming from?</strong> The <em>Best for Finding the Source</em> monitors will narrow it to a room in a fortnight, but no carpet beetle lure trap is registered in Canada; a plain glue board with no lure, laid along the carpet edge, still catches wandering larvae and adults. <strong>Larvae emerging …`
- **L396** Intro "Monitors" button sells lure traps. Search kept. T4C, T4L, R-ext, B-reword
  - Before: `<BuyLink tag={AMZ_TAG} search="carpet beetle pheromone trap">Monitors &rarr;</BuyLink>`
  - After: `<BuyLink tag={AMZ_TAG} search="carpet beetle pheromone trap">Lure traps (not registered in Canada) &rarr;</BuyLink>`

### Cockroach, house centipede and carpet beetle pages: left unchanged, with the reason

- **Centipede DE button L273** ('safers insect killing diatomaceous earth'): whether it opens Safer's 32278 or a US Safer Brand bag with an EPA number was not checked (T4C: no Amazon access), so it is not a verified problem and the term stays. The verdict cell beside it (L272) now names Safer's 32278 and the PCP-number test.
- **Carpet beetle 'zippered garment storage bag' button L458** (T4L flag): Schedule 1 item 1 covers bags "manufactured, represented or sold" as pest protection; the search and link text name a plain bag, the page's checklist (L497) says to use plain totes or bags, and T4C did not confirm the flag. Left for the owner.
- **Carpet beetle Safer's card** (L239 name, L241 search): the same unchecked Amazon.ca question as the centipede button; the pro (L242) now names the registered product and its number.
- **Carpet beetle lure-trap swap not made:** if the owner wants a swap instead of the reword, 'insect glue board traps multi pack' is live on app/blog/how-to-get-rid-of-centipedes-canada (L164, L197, L267, L351, L442), a different pest's page, not a sibling.
- **Cockroach card 1 score 8.8** and the pre-existing "Modest cost to blanket a whole kitchen" (cost words, no price): kept, as on the tier 2 Raid swap (C2-roach).
- **Not flagged and still true:** cockroach card 2 "a device, so no registration needed" (plain glue boards) and card 3 (gel syringe, already says to check for a PCP number); carpet beetle decision-table cell L192 "Lay monitors" (true of a plain glue board); "PMRA-registered" in cockroach body text L373 and in the carpet beetle related-guide title L526 (not boxes).

Lines changed in this block: 22 (how-to-get-rid-of-cockroaches-canada 11, how-to-get-rid-of-centipedes-canada 2, how-to-get-rid-of-carpet-beetles-canada 9). That is 19 affiliate lines and 3 B-text lines; none inserted, none deleted.

### Bed bug vacuum, bed bug heater and EcoRaider pages: checks and evidence key

**Checks** (against `git show HEAD:<file>`, read-only; no other git, no build): line counts unchanged from the tier 4 upgrade (393, 441 and 375), because lines were replaced one for one, so each line number is the same before and after; counts of `<BuyLink`, `<AwardRow`, `<AwardCard`, `<StickyBuyBar`, `<AmazonLink`, `<TopPick`, `<TopBox`, `search=`, `search:`, `asin=`, `asin:`, `tag=` and `AMZ_TAG` identical to HEAD on all three pages; the sequence of `tag` values identical; every TopBox still mirrors its StickyBuyBar; no `asin` changed (the heater's ZappBug ASIN on L127, L128 and L159 is untouched; the other two pages have none), so nothing for A-asin; `search` changed only on the EcoRaider page (8 swaps), each to a term already live on a sibling (S-terms); all 30 "before" lines match HEAD verbatim; `npx tsc --noEmit` clean; no "safe", "non-toxic", "PMRA-registered", "Health Canada approved", price or testing claim in a changed line (one "safest" removed). The one score change is a swapped card taking the sibling's own score for that product (8.6 to 7.4).

**Evidence key:**

- `T4C`: TIER4-CHECK.md line 28 (vacuum), line 29 (heater) and line 30 (EcoRaider), "Box (owner)" items, and lines 24-26 (the three settled questions). `T4L`: TIER4-LOG.md lines 10, 11 and 12, "Box flags".
- `HC-bb`: Health Canada, Bedbugs: how do I get rid of them? (page details 2015-02-27), re-read Oct 29 (https://www.canada.ca/en/health-canada/services/pest-control-tips/bedbugs-how-do-i-get-rid-them.html): "Handheld vacuums, vacuums with a cloth bag, and vacuums with hoses that are made of fabric are not a good idea for bedbug clean-up because these vacuums can become infested."; "Heat treatments should be left to the professionals."; "Place small non-washable items and dry-clean-only items in a hot dryer for 30 minutes or more."; "If the product label does not have a PCP registration number, do not buy or use it."; "Unregistered pesticides are illegal in Canada and their safety and effectiveness have not been reviewed by Health Canada."
- `UC-flea`: UC IPM Pest Notes: Fleas, UC ANR Publication 7419, re-read Oct 29 (https://ipm.ucanr.edu/PMG/PESTNOTES/pn7419.html): "Vacuum upholstered furniture, cleaning under cushions and in crevices."; "regularly vacuum and launder areas where your pet rests"; "Vacuum floors, rugs, carpets, upholstered furniture, and crevices around baseboards and cabinets daily or every other day". It names no vacuum type and gives no reason against a handheld.
- `U-uf`: University of Florida release, July 7, 2009, re-read Oct 29 (https://archive.news.ufl.edu/articles/2009/07/uf-researchers-turn-up-the-heat-on-bedbugs-with-new-low-tech-treatment-method.html): "Homeowners should not attempt to build their own heat treatment chambers", warning that it "could lead to fires"; Koehler and Pereira's chamber, "big enough for a bed or dresser", was built from oil-filled electric space heaters, fans and polystyrene insulation board.
- `M-rgr`: ThermalStrike Ranger manual, Ver: 2023R1 (https://www.thermalstrike.com/TS_DOCS/Ranger2023.pdf, linked from https://thermalstrike.com/thermalstrike-manuals/), fetched with WebFetch and read from the saved file: "The Ranger will treat most carry-on and mid-sized suitcases up to 29" inches."; "Bedding and Pillows: The Ranger can be loaded just like a laundry hamper. The Ranger can treat feather comforters, memory foam pillows, blankets and other bedding."; no furniture anywhere. Ranger page, re-read Oct 29 (https://www.thermalstrike.com/thermalstrike-ranger): "easily fits carry-on and most checked luggage with room to spare".
- `R-ext`: Health Canada's registry product extract (https://pest-control.canada.ca/pesticide-registry-api/api/extract/product), a fresh copy downloaded Oct 29, 2026 at 22:31 local and searched (21,844 rows; newest first registration 2026-10-28). 0 rows (English product name or registrant) for ECORAIDER, ECO RAIDER, ECOVENGER, RENEOTECH and CIMEXA; no current domestic non-DE silica product lists bed bugs; the 4 geraniol, 2 cedar and 3 lauryl sulfate rows include no bed bug product. KONK BED BUG KILLER 31110: DOMESTIC, Current, expiry 2027-12-31 (the commercial KONK 31111 is separate). DOKTOR DOOM SLEEP TIGHT BED BUG KILLER II 29339: DOMESTIC, Current, expiry 2028-12-31, pyrethrins + piperonyl butoxide, sites include MATTRESS; the three other current Sleep Tight cans (28973, 30096, 30809) are permethrin. DOKTOR DOOM BE GREEN PREMIUM FOOD GRADE DIATOMACEOUS EARTH 32561: DOMESTIC, Current, expiry 2026-12-31, pests include BED BUGS; Doktor Doom's Go Green baited DE 29411 (domestic) does not list bed bugs, and 31917 is commercial.
- `R-api`: the live registry API, Oct 29 (https://pest-control.canada.ca/pesticide-registry-api/api/search/product/<Reg. No.>, /search/product-pest/<Reg. No.>, /search/product-site/<Reg. No.>): 31110 Full Registration, Current, DOMESTIC, Acuity Holdings, pests include BED BUGS, sites INDOOR, INDOORS, MATTRESS, OUTDOORS; 29339 pests include BED BUGS, sites BED, BED FRAME, BOOKCASE, INDOOR, MATTRESS; 32561 pests include BED BUGS; 26679 WILSON BED BUG OUT current, DOMESTIC (no search term for it anywhere in app/).
- `L-31110`: KONK label 2023-3451 (2023-12-21), fetched with WebFetch and read from the saved file: https://pest-control.canada.ca/pesticide-registry-api/api/pdf/inline/en/444691994 . "KONK BED BUG KILLER"; "PRESSURIZED SPRAY"; "DOMESTIC"; "Pyrethrins ... 0.50%"; "Piperonyl Butoxide ... 5.00%"; "REG. NO. 31110 PCP ACT"; "DANGER"; "EXTREMELY FLAMMABLE EXPLOSIVE"; "KEEP OUT OF REACH OF CHILDREN"; "ACUITY HOLDINGS, INC. 11627 - 178 STREET EDMONTON AB"; "BED BUGS: Spray mattress lightly, particularly around seams and tufts. Take beds apart and spray the frames, springs and all joints."; "Treatment must only be repeated after 7 days if pest problem persists or reoccurs."; "Insects must be contacted to be killed."; "DO NOT allow people or pets or livestock to enter treated areas until sprays have settled and dried." The label has no egg claim and no residual claim.
- `P-harris`: the tier 2-3 swap on harris-bed-bug-killer-review-canada, a review of another unregistered spray (above): StickyBuyBar, TopBox and TopPick to 'konk bed bug killer aerosol', label "Registered alternative in Canada", TopPick label "What to Buy Instead in Canada", score 7.4 from the KONK review.
- `P-diy`: the tier 2-3 fix on best-bed-bug-heat-chamber-canada card 4, the DIY chamber (above): pick, badge and score kept; the box now gives UF's warning.
- `P-fit`: FIX-BRIEF item 3 (fit items): keep the pick and make the box text honest.
- `B-safe`, `B-swap`, `B-text`, `B-swap-sib`: as in the sections above.
- `S-terms`: 'konk bed bug killer aerosol' (app/blog/konk-bed-bug-killer-review-canada/page.tsx L123, L124, L151, L185, L199, L289, L337; its TopPick score 7.4 is on L154; its ASIN B07CGRLRNV was not copied, so no `asin` was added); 'doktor doom sleep tight bed bug spray' (app/blog/best-natural-bed-bug-spray-canada/page.tsx L123, L124, box name "Doktor Doom Sleep Tight Bed Bug Killer II (pyrethrins, PCP 29339)", and app/blog/bed-bug-spray-canada/page.tsx L139, L140); 'doktor doom diatomaceous earth' (app/blog/best-bed-bug-powder-canada/page.tsx L163, L227, L268, card "Doktor Doom Diatomaceous Earth (Food Grade)", and the tier 3 CimeXa swap on how-to-get-rid-of-bed-bugs-canada).

### best-hepa-vacuum-for-bed-bugs-and-fleas-canada (11 lines, reword)

Reworded, not swapped. A handheld vacuum needs no registration, so FIX-BRIEF's swap rule does not apply: it is a fit item (P-fit), kept and made honest. The pick stays for fleas, which UC IPM says to vacuum on upholstery, under cushions and in crevices, and the card, whichToBuy, table row and both buttons now say plainly that it is not for bed bugs. Name, search and score 8.0 are unchanged. 10 affiliate lines and 1 B-text line (L229).

- **L149** Card 1 why: "the safest tool for the job" (banned word). T4C, B-safe
  - Before: `why: 'A true sealed-system canister with a bag is the safest tool for the job: nothing you capture leaks back out, and you seal and bin the bag without ever opening the dust chamber. Strong sustained suction and a long crevice tool reach every seam and baseboard.',`
  - After: `why: 'A true sealed-system canister with a bag is the best-suited tool for the job: nothing you capture leaks back out, and you seal and bin the bag without ever opening the dust chamber. Strong sustained suction and a long crevice tool reach every seam and baseboard.',`
- **L159, L162** Card 2 why "Converts to a handheld with a crevice tool for seam work" and pro "Converts to handheld for seams". The page's own text (FAQ L78, body L303) does seams with the crevice tool on a canister or stick. T4C, T4L, HC-bb
  - L159 before: `why: 'For daily bed-frame and baseboard passes without dragging a hose, a cordless stick with whole-machine HEPA seals the whole airflow path. Converts to a handheld with a crevice tool for seam work, then floats to the next room.',`
  - L159 after: `why: 'For daily bed-frame and baseboard passes without dragging a hose, a cordless stick with whole-machine HEPA seals the whole airflow path. Fit the crevice tool to the wand for seam work: Health Canada says handheld vacuums are not a good idea for bedbug clean-up, because they can become infested.',`
  - L162 before: `pros: ['Whole-machine sealed filtration', 'Converts to handheld for seams', 'Effortless for daily passes'],`
  - L162 after: `pros: ['Whole-machine sealed filtration', 'Crevice tool on the wand for seams', 'Effortless for daily passes'],`
- **L166, L168, L171, L172** Card 3 "Best Handheld / Crevice", sold for "detailed seam, piping, and headboard-bolt work", which Health Canada calls not a good idea for bed bugs. Badge, why and one pro now point it at UC IPM's flea uses; a con says it is not for bed bugs. T4C, T4L, HC-bb, UC-flea, P-fit
  - L166 before: `badge: 'Best Handheld / Crevice',`
  - L166 after: `badge: 'Best Handheld for Fleas',`
  - L168 before: `why: 'The most manoeuvrable tool for detailed seam, piping, and headboard-bolt work. Corded means constant suction that never fades mid-mattress, and a HEPA-filtered handheld keeps the fine dust contained where a shop vac would not.',`
  - L168 after: `why: 'For fleas, not bed bugs. UC IPM says to vacuum upholstered furniture, under cushions and in crevices, and the areas where your pet rests, and a light corded handheld with constant suction does that detail work. Keep it away from bed bugs: Health Canada says handheld vacuums are not a good idea for bedbug clean-up, because they can become infested.',`
  - L171 before: `pros: ['Constant corded suction', 'Gets into tight seams and bolt holes', 'Light and easy to control'],`
  - L171 after: `pros: ['Constant corded suction', 'Reaches cushions, crevices and pet resting spots', 'Light and easy to control'],`
  - L172 before: `cons: ['Small capacity — frequent emptying', 'Not for whole-floor jobs'],`
  - L172 after: `cons: ['Not for bed bugs: Health Canada says handheld vacuums can become infested', 'Small capacity — frequent emptying', 'Not for whole-floor jobs'],`
- **L186** whichToBuy "Doing fine detail work on seams and bolts? Add the Best Handheld / Crevice." T4C, T4L, HC-bb, UC-flea
  - Before: `<strong>Active bed-bug problem or allergen-sensitive home?</strong> The <em>Best Overall</em> sealed-HEPA bagged canister is the right tool &mdash; the seal and the bag are exactly what stop re-contamination. <strong>Want to vacuum the bed and baseboards every single day without hassle?</strong> The <em>Best Cordless Stick</em> makes daily passes effortless. <strong>Doing fine detail work on seams and bolts?</strong> Add the <em>Best Handheld / Crevice</em>. <strong>One-time minor flea issue on a tight budget?</strong> The <em>Best Budget</em> bagged canister does the job if you empty it outdoors into a sealed bag every time.`
  - After: `<strong>Active bed-bug problem or allergen-sensitive home?</strong> The <em>Best Overall</em> sealed-HEPA bagged canister is the right tool &mdash; the seal and the bag are exactly what stop re-contamination. <strong>Want to vacuum the bed and baseboards every single day without hassle?</strong> The <em>Best Cordless Stick</em> makes daily passes effortless. <strong>Doing fine detail work on seams and bolts?</strong> Use the crevice tool on the canister&rsquo;s hose, not a handheld: Health Canada says handheld vacuums are not a good idea for bedbug clean-up, because they can become infested. <strong>Fleas on upholstery or where your pet rests?</strong> Add the <em>Best Handheld for Fleas</em>. <strong>One-time minor flea issue on a tight budget?</strong> The <em>Best Budget</em> bagged canister does the job if you empty it outdoors into a sealed bag every time.`
- **L229** (B-text) Table "Best at" cell for the handheld row: "Fine seam, piping, and bolt-hole work" would contradict the button beside it (L231). UC-flea, HC-bb
  - Before: `<td className="px-4 py-3 text-gray-700">Fine seam, piping, and bolt-hole work</td>`
  - After: `<td className="px-4 py-3 text-gray-700">Fleas: upholstery, under cushions and crevices (UC IPM); not bed bugs</td>`
- **L231** Table handheld button. T4C, HC-bb
  - Before: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="corded handheld hepa vacuum" block>Check price on Amazon.ca →</BuyLink></td>`
  - After: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="corded handheld hepa vacuum" block>For fleas only: check Amazon.ca →</BuyLink></td>`
- **L280** Body button "HEPA handheld". T4C, HC-bb
  - Before: `<BuyLink tag={AMZ_TAG} search="corded handheld hepa vacuum">HEPA handheld →</BuyLink>`
  - After: `<BuyLink tag={AMZ_TAG} search="corded handheld hepa vacuum">HEPA handheld (fleas only) →</BuyLink>`

### bed-bug-heater-canada (4 lines, reword)

Reworded, not swapped: neither pick needs a registration. Card 3 keeps its badge, name, search ('wireless probe thermometer remote monitor') and score 6.8, as the sibling's DIY card did (P-diy); the box now gives UF's and Health Canada's warnings and says the link is the thermometer only. All 4 lines are affiliate lines in the AwardRow block.

- **L172** Card 2 con "Luggage-scale only — not for bedding piles or furniture": the Ranger manual lists comforters, pillows, blankets and other bedding. T4C, T4L, M-rgr
  - Before: `cons: ['Luggage-scale only — not for bedding piles or furniture', 'Slower on densely packed bags'],`
  - After: `cons: ['Luggage up to 29 in., or bedding loaded like a laundry hamper (manual); not sized for furniture', 'Slower on densely packed bags'],`
- **L177** Card 3 why "can reach lethal temperatures — but you supply the vigilance ... and the fire-safety discipline": UF told homeowners not to build their own (fire), and Health Canada leaves heat treatments to professionals. T4C, T4L, U-uf, HC-bb, P-diy
  - Before: `why: 'The honest cheap route: a ceramic heater and a probe thermometer inside a small, well-sealed enclosure can reach lethal temperatures — but you supply the vigilance, the cold-spot checks, and the fire-safety discipline a purpose-built chamber has engineered in.',`
  - After: `why: 'The cheap route people try: a ceramic heater and a probe thermometer inside a small, well-sealed enclosure. The University of Florida researchers who built one told homeowners not to build their own heat treatment chambers, warning that it could lead to fires, and Health Canada says heat treatments should be left to the professionals. The link is for the probe thermometer only, which reads the temperature at the core of a load.',`
- **L181** Card 3 con "Real fire risk if unattended or badly rigged": it implies a watched, well-built rig carries none, and UF's warning has no such condition. U-uf, P-diy
  - Before: `cons: ['Real fire risk if unattended or badly rigged', 'Cold spots and failed holds are common', 'No safety cutoffs or engineered airflow'],`
  - After: `cons: ['Fire risk: UF told homeowners not to build their own', 'Cold spots and failed holds are common', 'No safety cutoffs or engineered airflow'],`
- **L186** whichToBuy "The Best Budget heater-and-probe route works if you respect the physics and never leave it unattended". T4C, T4L, U-uf, HC-bb, P-diy
  - Before: `<strong>Dealing with an active belongings infestation?</strong> The <em>Best Overall</em> ZappBug Oven 2 processes everything from suitcases to bedding in daily cycles — see our full <Link href="/blog/zappbug-heater-review-canada">ZappBug review</Link> for the model-by-model breakdown. <strong>Frequent traveller playing defence?</strong> The <em>Best Luggage-Size</em> ThermalStrike treats every returning bag before it enters a bedroom. <strong>Tight budget and handy?</strong> The <em>Best Budget</em> heater-and-probe route works if you respect the physics and never leave it unattended — but if bugs are in your bed frame or walls, skip all three and price professional whole-room heat via our <Link href="/pest-control-cost-canada">Canadian pest control cost guide</Link>.`
  - After: `<strong>Dealing with an active belongings infestation?</strong> The <em>Best Overall</em> ZappBug Oven 2 processes everything from suitcases to bedding in daily cycles — see our full <Link href="/blog/zappbug-heater-review-canada">ZappBug review</Link> for the model-by-model breakdown. <strong>Frequent traveller playing defence?</strong> The <em>Best Luggage-Size</em> ThermalStrike treats every returning bag before it enters a bedroom. <strong>Tight budget?</strong> Put small non-washable items in a hot dryer for 30 minutes or more (Health Canada), and do not build a heater box: the University of Florida researchers who built one told homeowners not to build their own heat treatment chambers, warning that it could lead to fires. From the <em>Best Budget</em> card, buy only the probe thermometer. If bugs are in your bed frame or walls, skip all three and price professional whole-room heat via our <Link href="/pest-control-cost-canada">Canadian pest control cost guide</Link>.`

### ecoraider-bed-bug-spray-review-canada (15 lines, swap)

Swapped under the review-page rule (FIXBOX-T4: prefer a swap to a registered pick the page names), following P-harris. Every EcoRaider and EcoVenger element went to registered cans the page itself names: KONK 31110, its registered plant-derived alternative (hero L113, Quick Answer L126, FAQs L42, L46, L54, L66, L82, QuickIdTable L264, body L313, L322, verdict L337), and Sleep Tight II 29339 (FAQ L82, L264, L313, L322). The CimeXa button went to a registered DE, the class the page recommends for cracks and voids (FAQs L50, L66, L82, L211, L296, L314, L330). Wilson Bed Bug Out 26679, the DE it names, has no search term anywhere in app/, so the sibling powder guide's Doktor Doom term was used, as on the tier 3 CimeXa swaps (B-swap-sib). The swap removed every TopPick claim T4C verified false: kills adults as well as eggs (Rutgers tested large nymphs and eggs), a mode of action resistant bugs "have not adapted to" (the authors: the oils are too dilute, adjuvants may explain it), "lower-toxicity ... in an occupied bedroom" (SDS hazard statements), "the botanicals break down faster" and "Short residual" (14-day residue killed 90%), the "Strong botanical" scent (SDS: minty) and "Confirm the Canadian-cleared version" (none exists). 14 affiliate lines and 1 B-text line (L273).

- **L119, L120** StickyBuyBar and TopBox (the TopBox mirrors the StickyBuyBar) sold the unregistered pick under "Our verdict: 8.6/10". T4C, T4L, R-ext, R-api, HC-bb, L-31110, P-harris, B-swap-sib
  - L119 before: `<StickyBuyBar tag={AMZ_TAG} name="EcoRaider / EcoVenger bed bug killer" search="ecoraider bed bug killer" label="Our verdict: 8.6/10" />`
  - L119 after: `<StickyBuyBar tag={AMZ_TAG} name="KONK Bed Bug Killer aerosol (PCP 31110)" search="konk bed bug killer aerosol" label="Registered alternative in Canada" />`
  - L120 before: `<TopBox tag={AMZ_TAG} name="EcoRaider / EcoVenger bed bug killer" search="ecoraider bed bug killer" label="Our verdict: 8.6/10" />`
  - L120 after: `<TopBox tag={AMZ_TAG} name="KONK Bed Bug Killer aerosol (PCP 31110)" search="konk bed bug killer aerosol" label="Registered alternative in Canada" />`
- **L144-L147, L149-L151** TopPick: label, name, blurb, search, score, pros and cons; the L148 cta is unchanged. The new text comes from L-31110, R-ext and R-api; score 7.4 is the KONK review's own (S-terms). T4C, T4L, R-ext, R-api, HC-bb, L-31110, P-harris, B-swap-sib
  - L144 before: `label="Our Verdict"`
  - L144 after: `label="What to Buy Instead in Canada"`
  - L145 before: `name="EcoRaider / EcoVenger Bed Bug Killer — plant-based contact spray"`
  - L145 after: `name="KONK Bed Bug Killer (PCP 31110) — the registered pyrethrin can for the bed"`
  - L146 before: `blurb="The rare botanical bed bug spray with real university testing behind it. Built on geraniol and plant oils rather than a synthetic pyrethroid, it kills adults, nymphs, and — unusually — eggs on direct contact, and it does so through a mode of action the resistant bed bugs now common across North America have not adapted to. That makes it the pick for anyone who wants a lower-toxicity spray they can use in an occupied bedroom without conceding effectiveness. The honest trade-off is residual: the botanicals break down faster than a synthetic film, so it is a contact killer you spray thoroughly and repeat, not a set-and-forget barrier. Pair it with a desiccant dust for long residual and a steamer for the deep eggs, and it earns its place."`
  - L146 after: `blurb="EcoRaider and EcoVenger have no Canadian registration: Health Canada’s registry lists neither name, and Health Canada says not to buy or use a pesticide whose label has no PCP number. So this is the can we point Canadian readers to instead. KONK Bed Bug Killer is a domestic-class pressurized spray of pyrethrins (0.50%), from chrysanthemum flowers, with piperonyl butoxide (5.00%), and its label carries Reg. No. 31110. For bed bugs the label says to spray the mattress lightly, particularly around seams and tufts, and to take beds apart and spray the frames, springs and all joints, repeating only after 7 days if the problem persists. Insects must be contacted to be killed, and the label makes no egg claim, so add heat for the eggs and a diatomaceous earth dust with a PCP number for the voids."`
  - L147 before: `search="ecoraider bed bug killer"`
  - L147 after: `search="konk bed bug killer aerosol"`
  - L149 before: `score={8.6}`
  - L149 after: `score={7.4}`
  - L150 before: `pros={['Independent Rutgers testing showed high contact mortality — rare for a natural product', 'Kills bed bug eggs on direct contact, not just adults and nymphs', 'Botanical mode of action beats pyrethroid-resistant populations', 'Lower-toxicity, plant-based — usable in an occupied bedroom once dry']}`
  - L150 after: `pros={['Registered for home use in Canada: PCP 31110, domestic class, current', 'Label covers mattress seams and tufts, bed frames, springs and joints', 'Pyrethrins, from chrysanthemum flowers, with piperonyl butoxide', 'A Canadian label to follow, from Acuity Holdings, Edmonton']}`
  - L151 before: `cons={['Short residual — a contact killer, not a lasting barrier; repeat while active', 'Only kills what you directly spray — misses eggs and bugs it never reaches', 'Strong botanical (geraniol/cedar) scent some find overpowering', 'Confirm the Canadian-cleared version — US minimum-risk status is not PMRA registration']}`
  - L151 after: `cons={['Kills only the bugs it contacts (label); no residual claim', 'No egg claim on the label: heat is the answer for eggs', 'Label: DANGER, extremely flammable and explosive; keep people and pets out of treated areas until the spray has settled and dried', 'Not a stand-alone fix: add heat, encasements, monitoring and a registered dust']}`
- **L180** Table EcoRaider-row button, beside a cell that says Health Canada says do not buy or use it. It says "instead", as the KONK review's own L199 button does. T4C, R-ext, HC-bb, B-swap-sib
  - Before: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="ecoraider bed bug killer" block>Check price on Amazon.ca &rarr;</BuyLink></td>`
  - After: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="konk bed bug killer aerosol" block>A registered can instead: KONK (PCP 31110) &rarr;</BuyLink></td>`
- **L194** Table "Desiccant dust / CimeXa silica gel" button: CimeXa 0 rows, and no home-use silica dust lists bed bugs. T4C, R-ext, R-api, HC-bb, B-swap-sib
  - Before: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="cimexa insecticide dust" block>Check price on Amazon.ca &rarr;</BuyLink></td>`
  - After: `<td className="px-4 py-3"><BuyLink tag={AMZ_TAG} search="doktor doom diatomaceous earth" block>A registered DE dust instead (PCP 32561) &rarr;</BuyLink></td>`
- **L273** (B-text) Lead-in "Check current Canadian availability (listed under either name):" became false once L275 and L276 were swapped. R-ext, HC-bb
  - Before: `<p className="not-prose text-sm text-gray-600 mb-1">Check current Canadian availability (listed under either name):</p>`
  - After: `<p className="not-prose text-sm text-gray-600 mb-1">EcoRaider and EcoVenger have no Canadian registration under either name, so we link the two registered pyrethrin cans this page names instead:</p>`
- **L275, L276** Body buttons "EcoRaider on Amazon.ca" and "EcoVenger (rebrand)". T4C, T4L, R-ext, R-api, HC-bb, B-swap-sib
  - L275 before: `<BuyLink tag={AMZ_TAG} search="ecoraider bed bug killer">EcoRaider on Amazon.ca &rarr;</BuyLink>`
  - L275 after: `<BuyLink tag={AMZ_TAG} search="konk bed bug killer aerosol">KONK Bed Bug Killer (PCP 31110) &rarr;</BuyLink>`
  - L276 before: `<BuyLink tag={AMZ_TAG} search="ecovenger bed bug killer">EcoVenger (rebrand) &rarr;</BuyLink>`
  - L276 after: `<BuyLink tag={AMZ_TAG} search="doktor doom sleep tight bed bug spray">Sleep Tight Bed Bug Killer II (PCP 29339) &rarr;</BuyLink>`
- **L317** Body button "Check EcoRaider / EcoVenger on Amazon.ca", right after the paragraph ending on PCPA s. 6(1). T4C, R-ext, HC-bb, B-swap-sib
  - Before: `<BuyLink tag={AMZ_TAG} search="ecoraider bed bug killer">Check EcoRaider / EcoVenger on Amazon.ca &rarr;</BuyLink>`
  - After: `<BuyLink tag={AMZ_TAG} search="konk bed bug killer aerosol">A registered can instead: KONK Bed Bug Killer (PCP 31110) on Amazon.ca &rarr;</BuyLink>`

### Bed bug vacuum, heater and EcoRaider pages: left unchanged, with the reason

- **Vacuum page text, not boxes** (for a text pass): L198 "All four can help with bed bugs and fleas" and L259 ("a corded handheld trades capacity for reach") now sit beside a handheld box that says it is not for bed bugs. L244 "Vacuums are appliances ... none require PMRA registration" is too broad for UV vacuums (T4C line 24: Schedule 1 item 7), though no pick here is one.
- **Vacuum table L228** "Good — contained dust, constant suction": about dust containment, not bed bugs; not flagged.
- **Heater card 3:** badge "Best Budget", name, score 6.8 and pros kept (P-diy). The body text it mirrors (H2 L345, L346 "Yes, you can build the physics yourself ... We score it 6.8") still frames the DIY box as workable, with the upgrader's UF, Health Canada and EPA paragraph right after it (L347). The DIY table-row button (L231) and the body thermometer buttons (L324, L350) sell only the thermometer and were not flagged. Renaming the card "Probe Thermometer" and dropping its score is the owner's call.
- **EcoRaider page text that still treats EcoRaider as the pick:** the table sub-label L176 "Our pick — 8.6/10", the Quick Answer's "We score it 8.6/10 as a US contact spray" (L126) and the verdict section (L335-L337), which already says "Not a Buy in Canada". The CimeXa row text (L190-L193: "CimeXa silica gel", "Resistance-proof — residual up to ~10 yr") still describes CimeXa, beside a button that now says "A registered DE dust instead". Making the text match the boxes is the owner's call.
- **Amazon.ca results:** 'doktor doom sleep tight bed bug spray' may also show the three permethrin Sleep Tight cans (registered, but not the pyrethrin can), and 'doktor doom diatomaceous earth' may show the Go Green baited DE 29411 (no bed bugs on its list). Each swapped button names the PCP number to check for. Whether 'konk bed bug killer aerosol' opens the domestic 31110 rather than the commercial 31111 was not checked (no Amazon access).
- **Prices** on the heater page (FAQs 7 and 12, Quick Answer bullet, key facts, decision table) are left for the owner, as T4L noted.

Lines changed in this block: 30 (best-hepa-vacuum-for-bed-bugs-and-fleas-canada 11, bed-bug-heater-canada 4, ecoraider-bed-bug-spray-review-canada 15). That is 28 affiliate lines and 2 B-text lines; none inserted, none deleted.

