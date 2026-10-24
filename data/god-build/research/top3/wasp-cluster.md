# Wasp cluster: which page owns which search (Oct 23, 2026)

Data used:
- `scratchpad/converters/queries-b.md` for the four pages upgraded today (GSC, Jul 23 to Oct 20, all countries).
- `data/gsc/qp84_can.json` for all wasp pages, including the siblings (GSC Canada, roughly Jun 9 to Aug 31). That file
  is pruned, so read it for relative comparison only.

## Who owns what

| Page | Owns these searches | Shares with |
|---|---|---|
| `/blog/how-to-get-rid-of-ground-wasps-canada` | ground wasps, how to get rid of ground wasps, wasp nest in ground, ground wasp nest, underground wasp nest killer, how to (get rid of / kill) ground wasp nest, ground wasps ontario, ground wasp killer, ground wasp spray | the dust searches below (they belong to the dust page); "best spray for ground wasps" and the "... for underground nest" family with the spray page |
| `/blog/wasp-dust-canada` | wasp dust, wasp powder (canada), wasp dust canada, delta dust (canada), delta dust for wasps, where to buy delta dust canada, insecticide/insecticidal dust for wasps, wasp dust killer, wasp killer powder (canada) | the ground page (it still takes most of these impressions) and `/blog/how-to-get-rid-of-wasps-canada` ("delta dust") |
| `/blog/best-wasp-nest-spray-canada` | wasp spray, best wasp spray (canada), best wasp killer spray, wasp foam, wasp spray vs foam, wasp nest spray, best wasp nest killer, best wasp and hornet killer, best wasp spray for inside walls | "best wasp killer" (984 impressions here, pos 5.8) with `/blog/best-wasp-killer-canada`; "wasp spray for underground nest" with the ground page |
| `/blog/best-wasp-trap` | best wasp trap(s), wasp bags, wasp bag traps, bee bag traps, best hornet trap, best outdoor wasp trap | "wasp traps" with `/blog/rescue-why-trap-review-canada`; yellow jacket trap searches belong to `/blog/best-yellow-jacket-trap-canada` |
| `/blog/how-to-get-rid-of-wasps-canada` (sibling) | how to get rid of wasps, wasp nest removal, wasp control | "delta dust" (120 impressions, pos 3.0 in Jun to Aug) |
| `/blog/best-wasp-killer-canada` (sibling) | best wasp killer canada | "best wasp killer" with the spray page |
| `/blog/best-yellow-jacket-trap-canada` (sibling) | yellow jacket trap(s), yellow jacket bait | "yellow jackets" with the ground page |
| `/blog/rescue-why-trap-review-canada` (sibling) | rescue why trap, why trap review | "wasp traps" with the trap page |
| `/blog/paper-wasps`, `/blog/mud-daubers` (guides) | paper wasp(s), mud dauber(s) | none |

Retailer and local searches ("canadian tire wasp traps", "wasp traps toronto") are not targeted (ops rule 8).

## The one real collision: dust searches on the ground page
**Jun to Aug, Canada.** `wasp-dust-canada` did not exist until Aug 31, so the ground page took every dust search:

| Search | Impressions | Position | Clicks |
|---|---|---|---|
| delta dust canada | 980 | 3.7 | 62 |
| wasp dust canada | 550 | | |
| wasp dust | 300 | | |
| delta dust for wasps | 281 | | |
| wasp powder canada | 216 | | |

`/blog/how-to-get-rid-of-wasps-canada` also had "delta dust" (120 impressions, pos 3.0) and "delta dust canada" (116).

**Jul 23 to Oct 20, all countries.** The split is still lopsided toward the ground page:

| Search | Ground page | Dust page |
|---|---|---|
| delta dust canada | 2,009 impr, pos 3.6, 99 clicks | 276 impr, pos 5.0, 8 clicks |
| wasp powder canada | 953 impr, pos 4.9 | 733 impr, pos 5.4 |
| wasp dust canada | 871 impr, pos 6.7 | 247 impr, pos 5.7 |

**What was done today:**
1. **Dust page title** now names its own searches: 'Wasp Dust & Powder Canada: Is Delta Dust Legal?'. Its first
   screen answers them, and it gained "where to buy wasp powder" and "where to buy Delta Dust" FAQs.
2. **Ground page title** stays on ground wasps ('Ground Wasps in Canada: How to Get Rid of a Nest'). It gained no dust
   FAQs. Its existing Delta Dust FAQ and "Canadian Rulebook" section stay, because they carry its biggest click source.
3. **One new link** from the ground page's Delta Dust section to `/blog/wasp-dust-canada`. Before this, only
   `best-wasp-killer-canada` and `best-wasp-nest-spray-canada` linked to the dust page.

**What to expect:**
- Google may move some "delta dust canada" impressions from the ground page to the dust page.
- That would be welcome, because the dust page converts better (170 Amazon clicks per 1,000 Canadian views against
  63).

**When to check, and what to do:**
- Read on or after Nov 13 (three weeks).
- If the ground page loses "delta dust canada" clicks and the dust page does not pick them up, strengthen the link.
  Do not retitle either page.

## Facts the four pages now share (so the cluster says the same thing)
Source: Health Canada's Pesticide Product Information Database, read Oct 23, 2026. The other three wasp pages,
`how-to-get-rid-of-wasps-canada`, `best-wasp-killer-canada` and `best-yellow-jacket-trap-canada`, were not checked
against these today.

| Fact | Detail |
|---|---|
| Delta Dust | DeltaDust Powder, PCP 33495: restricted class, black-tailed prairie dog burrows only. DeltaDust Insecticide, 29862: cancelled |
| Drione Insecticide Dust, 15255 | Commercial class; the one dust whose record names wasp nests |
| Domestic dusts that list wasps | DE dusts and Knock Down Dust Devil (31143): general indoor and outdoor sites, no nest site |
| Underground-or-void exclusion | 13 current domestic wasp products, including Wilson WASP OUT Jet Foam (31899), Wilson WASP OUT Wasp & Hornet Killer (33973), Ortho Wasp B Gon MAX spray and foam (33723, 33724), Doktor Doom Nest Annihilator I (35094) and Home Gardener foam (31358) |
| Raid Max Wasp & Hornet Foam Bug Killer 2, 30746 | No exclusion on the database record, but S.C. Johnson's directions say "Not for use against nests located underground or in voids". Also under a leak recall |
| Raid Wasp & Hornet Bug Killer 7, 29776 | A jet, not a foam: "up to 5.7 m", for nests "in trees or attached to buildings" |
| Baited yellowjacket lures | Registered, domestic: 35529, 35530, 35531 (Sterling International / RESCUE!) |

**Before anyone edits those three siblings:** check their claims on Delta Dust class, foam in ground nests and trap
registration against this table.
