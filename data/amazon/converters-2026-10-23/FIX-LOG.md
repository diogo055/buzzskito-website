
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
