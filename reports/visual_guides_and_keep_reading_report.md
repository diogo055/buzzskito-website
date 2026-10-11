# Visual guides, "Keep reading" and Pinterest: what shipped on October 11, 2026

## 1. The ten visual guides (all live)

| # | Address | Heading on the page | Claims checked / corrected / softened |
|---|---|---|---|
| 1 | https://buzzskito.ca/learn/ant-killer-recipes | Homemade Ant Killer: 4 Recipes With Exact Ratios | 100 / 8 / 9 |
| 2 | https://buzzskito.ca/blog/signs-of-bed-bugs-checklist | Signs of Bed Bugs: A 7-Point Checklist to Run Tonight | 106 / 7 / 6 |
| 3 | https://buzzskito.ca/blog/fall-mouse-proofing-checklist | How to Mouse-Proof Your House: A Fall Checklist | 95 / 10 / 6 |
| 4 | https://buzzskito.ca/learn/tick-identification-chart | Tick Identification Chart: Deer Tick vs Dog Tick vs Lone Star Tick | 90 / 8 / 8 |
| 5 | https://buzzskito.ca/learn/pet-safe-pest-control | Pet-Safe Pest Control: What Is Lower-Risk for Cats and Dogs | 96 / 6 / 9 |
| 6 | https://buzzskito.ca/learn/whitefly-identification-control | How to Get Rid of Whiteflies: Identification and Natural Control | 174 / 14 / 8 |
| 7 | https://buzzskito.ca/learn/how-to-get-rid-of-fungus-gnats | How to Get Rid of Fungus Gnats: The Full Kill Chain | 119 / 12 / 7 |
| 8 | https://buzzskito.ca/learn/aphid-control-guide | How to Get Rid of Aphids Naturally: 6 Controls and the Ant Connection | 140 / 9 / 7 |
| 9 | https://buzzskito.ca/learn/natural-garden-pest-control | Natural Garden Pest Control: A Season-by-Season Guide | 122 / 8 / 13 |
| 10 | https://buzzskito.ca/learn/natural-weed-control | Natural Weed Killer: What Works, With Exact Ratios and Honest Limits | 158 / 8 / 9 |

The mouse-proofing page was published first, as asked.

Every page:

- opens with the infographic you supplied as its hero, and uses it as the share image;
- has one H1 that contains the keyword;
- has a printable card (recipe card, checklist, chart or schedule);
- has a section on pets and children, with the risk for each remedy cited to a veterinary,
  poison-control or government source;
- cites 7 sources, each linked where the fact is used;
- has no Amazon link and no retailer link of any kind (the build fails if one is added);
- ends with "Keep reading" and is listed in the sitemap, the blog or Learning Centre index and
  `public/llms.txt`.

How they were made: each page was drafted with AI assistance and then fact-checked in a separate
pass against its sources. Across the ten pages that second pass checked 1,200 claims, corrected
90 and removed or softened 82. The pages say this in their "How this guide was made" note. No
person has read them yet; if you read one, add `reviewedBy` and `reviewedOn` to its file in
`content/guides/` and the page will say "Reviewed by".

### The artwork needs corrections (important)

The infographics make 98 statements that the sources do not support or that go further than the
sources do. Examples: the ant bait on the graphic is about 16 times stronger than the University
of California recipe (a strong bait repels ants and is the bigger risk to pets); the tick chart
gives "poppy seed" to the adult deer tick when CDC gives it to the nymph; the weed-killer graphic
calls for 20 percent vinegar without its hazard label; several say "safe".

The published pages are correct: each states the sourced fact and has a short note, "Where the
one-page guide differs". But a pin on Pinterest travels without the page. The full list, graphic
by graphic, with what to change and the source, is in
`reports/visual_guides_artwork_corrections.md`. Nothing on the artwork was edited.

### Links into the new pages

Each new page is linked from two or three related existing pages (one added sentence each):
18 existing guides and 2 hand-written posts (`/blog/bugs-that-look-like-ticks`,
`/blog/how-to-get-rid-of-fungus-gnats-houseplants`). The garden pages also link to each other
through the hub at `/learn/natural-garden-pest-control`.

## 2. "Keep reading" replaces the quote CTA on article pages

Templates and components changed:

| What | Change |
|---|---|
| `components/ReadNext.tsx` (new) | The "Keep reading" block: three cards from the same topic, one plain text link to the quote form |
| 330 hand-written article pages under `/blog` and `/learn` | Closing quote CTA replaced by the block; any other quote CTA component on the page removed |
| `components/GuidePage.tsx` (template of the 86 guide pages) | Quote buttons and GTA pitch removed from the "Who wrote this" box; block added after the article |
| `components/AdjacentPestCTA.tsx` (151 product-research posts) | "Who wrote this" box kept; quote pitch, quote button and phone button removed |

Note on counts: across the 330 pages the script removed 255 quote CTA components in total
(the closing `CTASection`, the mid-page `BlogPostCTA` and two `InlineYardRiskCTA`).

Result on the built site: **416 articles end with "Keep reading"** and carry no quote CTA
component.

Left alone on purpose:

- **Every service, city, pricing and quote page.** Compared before and after, all of them are
  identical in text and links.
- **33 local posts keep their quote CTA**: the 18 local service and pricing posts that are
  already ad-free, plus 15 mosquito and tick posts written for a named GTA place (season,
  hot-spot and West Nile posts for Mississauga, Toronto, Oakville and so on). Their reader is in
  the service area. This second group was my call; the list is in
  `reports/cta_flip_pages.json` and the rule is in `scripts/article-cta-scope.mjs`.
- **The bar at the bottom of the phone screen** (Call / Text / Get price) still shows on
  mosquito and tick articles. It lives in the site layout, not in the article template.
- **The header quote button**, the product hub pages, the five data pages and the blog and
  Learning Centre index pages.

Checked mechanically, not by eye: all 3,085 affiliate-bearing lines in the changed pages are
byte-identical; no page lost an Amazon link, a title, a canonical, a description or structured
data; every link an article lost is a quote, phone or review link from a removed CTA.

Only about 33 of the 431 articles have a picture, so most cards show a labelled colour band
instead of an image.

### Top 10 posts by traffic (Search Console clicks, Sep 11 to Oct 8)

| Post | Same-topic links already in the prose | Added | Mid-article quote box |
|---|---|---|---|
| how-many-times-can-a-mosquito-bite-you | 4 | 0 | removed |
| no-see-um-bites | 2 | 4 links in 2 sentences | none |
| how-to-get-rid-of-ground-wasps-canada | 5 | 0 | none |
| wasp-dust-canada | 4 | 0 | none |
| bugs-that-look-like-ticks | 13 | 1 (tick chart) | removed |
| when-are-mosquitoes-most-active | 5 | 0 | removed |
| laser-mosquito-killer-photon-matrix-review | 8 | 0 | 2 removed |
| best-wasp-nest-spray-canada | 7 | 0 | none |
| what-does-a-spider-bite-look-like | 3 | 2 links in 1 sentence | none |
| what-temperature-kills-mosquitoes | 9 | 0 | removed |

Eight of the ten already had four or more contextual links to sibling articles. Three posts got
additions. Plain sentences that mention a free assessment inside the text were left as they are.

About 100 other articles still have the amber mid-article quote box. One command removes them:
`node scripts/remove-mid-article-ctas.mjs --all`. It was not run, because those boxes are also
the articles' links to `/mosquito-control` and `/tick-control`.

### Mobile check at 390 px

Checked on `/blog/how-many-times-can-a-mosquito-bite-you`, `/blog/wasp-dust-canada` and
`/blog/how-to-get-rid-of-mosquitoes`: the three cards stack in one column, each card is a single
358 px wide link, there is no sideways scroll, the block starts after the article and FAQ end,
and no ad slot sits between the last paragraph and the block. Ads are not switched on yet, so
the spacing around a live ad should be looked at again on the day Mediavine launches.

### One caution about the decision itself

The numbers behind it (11,757 readers, 9 visits to the quote form, 0 leads) are from mid
September to mid October, the end of the season. Worth checking the same report in June.

## 3. Pinterest

`<meta name="p:domain_verify" content="df9d0a4e3a51bf5a52cc8baa766b4500"/>` is in the `<head>`
of every page. Confirmed on the live homepage and on live article pages.

## 4. Google Indexing API

The script reads the environment variable **`GOOGLE_INDEXING_SERVICE_ACCOUNT_JSON`** (the whole
service-account JSON, or the same text base64-encoded). No key is in the repository. It only
submits on a production build. The ten new addresses are at the top of its list and at the top
of `new-urls.txt`. Search Console's "Request indexing" remains the surer route for the priority
pages.

## 5. Build guards added

- `npm run check:article-ctas`: an article cannot lose "Keep reading" or regain a quote CTA
  component, and the block can never appear on a service page.
- `npm run check:guides` now also requires all ten visual guides to exist and to be linked.
