# Getting pages onto page 1, and merging duplicates

Search Console, web search, Oct 5 to Nov 1, 2026, all countries: 1,129,252 impressions, 7,643 clicks (0.68%), 776 pages.
Only 44% of impressions come with their search attached (the rest is hidden by Google), so the tables below cover that 44%.
Scripts: scratchpad `rank_lift/scan.py`, `ctr.py`, `service.py`.

## The short answer

- **Most impressions are already on page 1.** 79% sit in positions 1-10, and only 19% on pages 2 and 3.
- **The bigger gap is that page-1 spots rarely get clicked.** Position 1 was clicked about once per 100 impressions (US 0.55%, Canada 1.79%).
  - Example: "what time of day are mosquitoes most active" sat at position 1.7, with 2,038 impressions and 1 click. Google answers simple questions on its own results page.
- **Moving page-2 pages up still helps, but less than it looks.** If every page-2 and page-3 search reached positions 4-10 at our own click rate there, with impressions unchanged, that is about +317 clicks per 28 days (+4%).
  - Page 1 is seen by far more people than page 2, so the real gain is larger. Search Console cannot say how much larger.
- **Where a higher spot pays:** Canadian product searches (2.7% of impressions clicked at positions 1-5, the best of any kind of search) and the money service searches (below). Plain questions pay least.

| Position | Share of impressions | Clicked |
|---|---:|---:|
| 1-3 | 8.0% | 0.95% |
| 4-10 | 71.3% | 0.49% |
| 11-20 (page 2) | 17.0% | 0.17% |
| 21-30 (page 3) | 2.2% | 0.05% |
| 31+ | 1.5% | about 0 |

## The page-2 pages, and when to work on each

Top 45 pages by page-2 and page-3 impressions:

| Group | Pages | When | Why |
|---|---|---|---|
| **Amazon product pages** (11): rat trap ("rat trap" @11.3, 2,081 impr), fruit fly trap ("fruit fly trap" @11.7, 1,849), Advion gel, drain flies ("drain flies" @10.4, 1,354), cockroach spray, bed bug spray, screen tent, fly swatter, encasement, sump pump, patio heater | Nov 20 | The Amazon box changes on these pages are measured until then. These are the money pages to move first. |
| **Already upgraded** (5): blood type, flea bites on humans, ultrasonic repellers, spider bite pictures, how long ticks live | Nov 6-20 | Their before/after read decides whether the upgrade method works. |
| **Title test** (1): bed bug bites | Nov 20-23 | One of the 11 geo-title test pages, frozen. |
| **New pages** (19): what do bed bugs look like ("what do bed bugs look like" @12.6, 1,152), can cockroaches fly, black cockroach, no-see-ums, tiny black bugs, Florida spiders, flea dirt, bugs that look like fleas ("flea bug" @10.1), house spiders, steel wool, what mice eat, brown recluse bite, mosquito net, cockroach droppings, how long mice live, baby cockroaches, do cockroaches bite, do ants bite, alcohol and bed bugs | Mid-December | Built in the last 2 months. New pages usually keep climbing on their own for 2-3 months. Upgrade only the ones still stuck. |
| **Free to work on now** (7): chigger bites (@11.1), mouse repellent (@11.9), carpenter ants (@18.2), large dehumidifier, couch steam cleaner, tick vs bed bug, tick on a dog | After the Nov 6 read | Older pages, not under any test. |
| **Service side** (2): `/learn/how-to-combat-mosquitoes` shows for "mosquito control"; `/pest-control-north-york` (@10.3) | Owner's OK | See "The money searches". |

**What an upgrade is.** Look at the top 3 results for the page's main search, list what they cover that we don't, make our page the best answer to that exact search, and match the title to it.

This site's evidence on what moves a page:
- Photos alone did not lift web clicks (Oct 29 read).
- Dropping "Canada/Ontario" from titles did. That is the geo-title test, read Nov 20-23. If it holds, it applies to about 200 titles at once, which makes it the cheapest lever for clicks on page 1.
- Rewrites against the top 3: clicks +17% against -16% for the control pages in the early read, with no big position jumps yet. Final read Nov 6-20.

## Duplicate content

199 searches are split between two or more of our pages, most of them small. Sorted:

**Not duplicates: our US and Canadian editions.**
- Mouse poop, seed ticks, bed bug poop, carpet beetles, centipedes, mouse traps and cockroaches look split in all-country data.
- Google is already told to show each country its own edition. Leave them.

**Fixed Nov 2: no-see-ums**, the biggest overlap.
- "no see ums" and "noseeum" (about 3,800 impressions) were split between `/blog/no-see-ums` (US guide, @10.6) and `/blog/no-see-ums-biting-midges-ontario` (@6.2-10.0).
- They are now paired as US and Canadian editions.
- `/blog/no-see-um-bites` (bites, under the upgrade test) stays separate.

**Real duplicates to merge:**

| Pages | Search they split | When |
|---|---|---|
| `types-of-ticks-identification` + `/learn/tick-identification-chart` (+ `/tools/tick-identifier`) | "tick identification chart" @10.1 / @11.8 | Now |
| `best-ant-killer` + `best-ant-traps-canada` | "ant bait", "best ant traps" | Now |
| `best-dehumidifier-for-basement-canada` + `best-large-capacity-dehumidifier-canada` + `best-dehumidifier-for-mold-canada` | "best dehumidifier canada" | Now for the first two; mold page Nov 20 |
| `bed-bug-spray-canada` + `best-bed-bug-spray-for-mattress-canada` (+ `best-natural-bed-bug-spray-canada`) | "best bed bug spray canada" | Nov 20 |
| `best-cockroach-killer-canada` + `best-cockroach-spray-canada` | "best cockroach killer canada" | Nov 20 |
| `wasp-dust-canada` + `how-to-get-rid-of-ground-wasps-canada` | "wasp dust", "delta dust canada" | Nov 20 |
| `cimexa-bed-bug-review-canada` + `best-bed-bug-powder-canada` | "cimexa canada" | Nov 20 |
| `mosquito-bits-canada-vs-dunks` + `mosquito-dunks-canada-guide` | "bti canada", "mosquito bits" | Nov 20 |

**Sharpen rather than merge** (different topics that overlap; give each page its own search):
- mosquito temperature vs most active time (21 shared searches; both under the upgrade test, so Nov 20);
- carpet beetle larvae vs carpet beetle removal;
- what bed bugs look like vs baby bed bugs.

**Rules for every merge:**
- The surviving page gains every product the merged page recommended, so no Amazon product is lost.
- The old address 301-redirects to the survivor.
- Nothing else is removed.
- The exact list goes to the owner before the push.

## The money searches (service side, needs the owner's OK)

Canada only.

| Search | Season (May-Jul) | October |
|---|---|---|
| mosquito control | Homepage @3.6, 703 impr, 0 clicks (most likely the Google Business map listing). Then `/learn/how-to-combat-mosquitoes` @22.3, a yard blog @31.1, `/toronto-mosquito-control` @22.7. `/mosquito-control` barely shows. | `/learn/how-to-combat-mosquitoes` @14.6, 754 impr; `/mosquito-control` barely shows |
| tick control | Homepage @4.3 (map listing); content pages @20-31 | `/tick-control` @31.2, 13 impr |
| mosquito control toronto | Split two ways: "best companies" page 404 impr @7.4 (7 clicks), Toronto service page 385 impr @7.2 (1 click) | Toronto page @8.5 |

**Proposal: one page per money search.**
- `/mosquito-control` for "mosquito control", `/tick-control` for "tick control", and one Toronto page for Toronto.
- The pages Google picks instead are retitled to their own topic and link to the service page. Duplicate service pages (for example `/mosquito-control-ontario`) are compared and merged where they say the same thing.
- One customer is worth about CA$1,000, so this carries more money than any blog work.
- November is the right time: Google needs months to settle before May.
- It changes service pages, so it waits for the owner's OK.

## Limits

- Positions are Google's averages across everyone who saw the page, including answer boxes, image blocks and map listings, so "position 2" is not always a blue link in second place.
- Some searches are hidden by Google.
- Off-season data: the money searches are tiny in October. Use the May-July column for those.
