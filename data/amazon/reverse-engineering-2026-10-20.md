# What actually drives Amazon clicks on buzzskito.ca (reverse-engineering, Oct 20, 2026)

**Owner's question:** do 8+ Amazon buttons matter, does having the first button in the top 20% of the page
matter, does the Top Pick box matter?

**How it was measured:** Canadian Amazon clicks (GA4 `affiliate_click`) per 1,000 Canadian page views, page
by page, comparing like with like (same page type, then same topic). Clicks, not sales, because Amazon reports
sales only per tracking tag, never per button, and 94% of items bought are things we never linked (the
24-hour cart), so a click is worth about the same wherever it comes from.

---

## The answer in plain words

**What the reader came for decides almost everything. The layout decides very little.**

- **Product pages** (best-X, reviews, pages named after a product): about **275 Amazon clicks per 1,000
  Canadian views**. **Remedy pages** (how to get rid of / kill / repel / trap / spray): about **157**.
  **Pure information pages** (bites, identification, seasons): about **18**. Product pages carry 80% of all
  Amazon clicks. Information pages carry 20% of the views on pages with Amazon links, but only 2% of the
  clicks.
- Inside a page, readers click near the top. A link in the first 5% of the page text gets about **25 clicks
  per 1,000 views**; a link past the 60% mark gets about **3**. Clarity agrees: on the bed bug steamer page
  two thirds of readers never get past the top fifth, and the site-wide average scroll depth is 21.5%.

### Your three questions

1. **8+ Amazon buttons: no.** With page type held equal, pages with 8 or more buttons do no better than pages
   with fewer. Depending on how it is cut the difference runs from 0.8x to 1.4x and flips direction between
   cuts. It is never clearly different from "no difference". Buttons low on the page get almost no clicks.

2. **First button in the top 20%: already done, and the wrong yardstick.** 82% of Canadian views are already on
   pages whose first button is in the top 20%. Nearly every page with real traffic is one of them, so there is
   nothing left to compare against. On a phone the 40 busiest Amazon pages are **20 to 70 screens long** (median
   31). So "top 20%" can mean 6 screens down, and most readers never scroll that far.
   - **On the 40 busiest Amazon pages, not one shows an Amazon link in the first phone screen.** The first link
     is a median 2.9 screens down and the first picks box 3.1 screens down.
   - In September the first button was moved up on **33 information pages**, from 68% to 25% of the way down.
     Those pages got **7 clicks on 415 views before and 4 clicks on 668 views after**.
   - **An early button helps only where the reader already wants to buy.**

3. **Top Pick box: there are no pages without a box to compare it with.** Every page with traffic has either a
   Top Pick box or an award row ("Our Picks").
   - **Pages:** Top Pick pages get about a third to two thirds fewer clicks than award-row pages of the same type.
     Most of that is which pages got Top Picks (information pages, single-product reviews, the legality
     explainers), not the box itself.
   - **Boxes:** at about the same depth on product and remedy pages, a Top Pick box gets about **27 clicks per
     1,000 views** and an award row of four cards about **110**.
   - **Still unknown:** whether a box *adds* clicks or only *collects* clicks that another button would have
     got. Only the test below can answer that.

**The sticky buy bar** is on 96% of Amazon pages, so it cannot be compared across pages either.
- It gets **15% of all Amazon clicks and 25% of phone clicks**.
- On 36 pages it was broken on phones until Oct 18 (wide tables pushed it off the screen). There, phone readers
  clicked the buttons in the page instead, and the phone click rate held up against the same pages' desktop rate.
- So **it mostly collects clicks that would happen anyway**. The data rule out the bar adding more than about a
  quarter to phone clicks. Keep it (it costs nothing), but don't count on it to add much.

### What holds up once page type and topic are held equal, and what does not

| | Holds up? |
|---|---|
| Page type (product / remedy / information) | **Yes, in every cut.** Information pages get 3-5% of a product page's clicks per view |
| Topic | **Probably.** Mosquito, wasp, mice and crawler pages get about half the clicks per view of bed bug pages of the same type (Sep-Oct, end of the outdoor season) |
| Top Pick box vs award row | **Direction yes, size no.** Award-row pages are ahead in every cut, by 1.4x to 5x. Most of that is the kind of page each box sits on |
| 8+ buttons | **No.** The direction flips between cuts |
| First button in the top 20% | **Can't be measured** (nearly every page already has it). No measurable effect when it was moved on 45 pages in September |
| Sticky buy bar | **Can't be measured across pages.** The broken-bar pages suggest it mostly re-routes clicks |

### What to change on the rest of the site

1. **Stop counting buttons.** Don't add buttons to reach 8. Don't add Amazon buttons or Top Pick boxes to
   information pages (bites, identification, seasons): where that was done, nothing happened.
2. **Measure in phone screens, not percentages.** The real target is an Amazon pick that shows within the first
   phone screen or two, and no page has that today. Whether it pays is the one placement question left. Test it
   (below) before the holiday pass puts it on every page.
3. **On product pages, keep the award row near the top and the obvious cheap item first.** The search terms that
   pulled the most Canadian clicks are cheap, familiar products: Combat roach bait stations, Victor rat trap,
   Terro fruit fly trap, Wilson One Shot foam, Summit mosquito bits, Cimexa dust and the Vapamore steamer.
4. **Information pages are better used to send readers to the matching product page than to Amazon.** This is
   untested and would be a good second experiment.
5. **The sticky bar should carry little weight in the open Mediavine phone sticky-ad decision.** Most of its
   clicks would happen anyway, and it stays on screen above the ad band in either case.

### The confirming experiment (a proposal: it needs your yes and two new tracking IDs)

- **The one change:** a Top Pick box placed directly under the opening paragraph, so it shows on a phone without
  scrolling. It uses the page's existing #1 product (the same product and search term as its sticky bar), a
  one-line blurb and no pros/cons list.
- **Pages:** the 60 busiest product and remedy pages, about 62% of all Amazon clicks. They are put in 30 matched
  pairs (same season group, similar clicks), and the first page of each pair is chosen by coin flip.
- **Run it as a swap, which makes it about twice as sharp:**
  - **Weeks 1-3 (Tue Oct 27 to Mon Nov 16):** group A pages get the box, group B pages don't.
  - **Weeks 4-6 (Tue Nov 17 to Mon Dec 7):** the box moves to group B.
  - Two new Amazon tags follow the box: **tag ON** is on whichever pages have the box that week, **tag OFF** on
    the rest. Amazon's own report for the six weeks then reads directly as "box" against "no box".
- **Size:** about 400 Amazon clicks per tag in each 3-week half at October traffic, and still about 200 if
  November traffic halves. That is far above the 150 a month aimed for, so neither tag should end up lumped into
  Amazon's "Other" line.
- **Decision rule, fixed now:**
  - **Tue Nov 17, quick look** (group A's 3 weeks against the 3 weeks before): if clicks per 1,000 views on group
    A rose at least **25%** more than on group B, put the box on all product and remedy pages by Nov 20. A
    no-change split of these same pages shows a gap that big only 1 time in 20.
  - **Tue Dec 8, final read:** roll out if the swap shows at least **+12%** and Amazon's ON tag beats the OFF tag
    in both halves. Stop (default: remove the box) if under +5%. Between +5% and +12%, the effect is too small to
    see clearly: don't do a site-wide pass, and retest in May with season traffic.
- **What it can and cannot see:**
  - The swap reliably catches a lift of about **+18%**. A one-way test would need about +40% at 3 weeks, or +27%
    at 6 weeks.
  - Smaller lifts will look like noise, and they are small money. These 60 pages earn about **$257 of the $417 a
    month** (Sep 19 to Oct 18), so +12% is about $31 a month, +18% about $46 and +25% about $64. Those are
    October levels, before holiday carts.
- **What's needed from you:**
  - **(a)** Say yes.
  - **(b)** Create two tracking IDs in Associates Central (Manage Tracking IDs), for example `buzzskito-on` and
    `buzzskito-off`; Amazon adds the `-20`.
  - **(c)** Download the Tracking ID report on Nov 17 and Dec 8 into this folder.
  - The code work (tag mapping, the guard's tag list, the box on 30 pages, the swap on Nov 17) follows the
    affiliate integrity protocol: every existing link, term and tag stays byte for byte.

---

## How this was measured (read before trusting any number)

- **Source:** GA4 property 463652856 through the Data API, read-only. Country = Canada, which also excludes
  Singapore and China. The all-country checks exclude Singapore and China explicitly. The numbers are
  `screenPageViews` by `pagePath`, and `eventCount` of `affiliate_click` by `pagePath`.
- **Window: Sep 2 to Oct 19, 2026, which is 48 days, not 60.** The `affiliate_click` event was installed on
  Sep 2 (commit d02ffef1). Before that GA4 has no Amazon clicks at all, so views were counted over the same 48
  days.
- **Each page is measured only on the days its current set-up was live.** The five yes/no features were
  compared at the deploys of Sep 2, Sep 10, Sep 17, Sep 23 and today. 88 pages changed during the window,
  mostly in the Sep 17 "click-out overhaul" and the Sep 23 "first CTA into the first screen" batch. Those pages
  count from the day after their last change.
- **Page features: the owner's definitions,** taken from the deployed source (HEAD = diogo/main for `app/`,
  `components/` and `lib/`):
  - the number of `<BuyLink>` + `<AmazonLink>` tags;
  - where the first inline Amazon element sits, as a share of the JSX after the page's `return (`;
  - whether the page has `<TopPick>`, `<AwardRow>`/`<AwardCard>` and `<StickyBuyBar>`.
- **Cross-checks on the built pages** (local build of Oct 15, nothing published):
  - the rendered Amazon link count (a Top Pick renders 2 links and an award card 2), and the first link's share
    of the visible text;
  - the pixel depth of the first link, first amber button and first picks box at **375x812 (phone)** and
    **1366x900 (desktop)** on the 40 busiest Amazon pages. This was measured on a local copy of the build with
    every third-party request blocked: nothing reached Google Analytics, Facebook or Clarity, and the live site
    was not touched.
- **Page type:** the owner's slug rule (product = best-/review/vs/top-N/comparison; remedy =
  how-to-get-rid/kill/repellent/trap/spray; info = the rest), plus a **refined** version:
  - **Why:** the slug rule puts 46 pages that are named after a product into "info", and they behave exactly
    like product pages. Examples: wasp-dust-canada, advion-cockroach-gel-bait, raccoon-deterrent,
    electric-fly-swatter, rat-poison-canada-what-is-legal, motion-activated-sprinkler-canada,
    bed-bug-mattress-encasement-canada and mosquito-dunks-canada-guide.
  - **Second fix:** 13 "how to keep X out / prevent / proof" pages behave like remedy pages.
  - **Result:** refined "info" is left with bites, identification, seasons and biology. Both versions are shown
    below.
- **Topic:** the cluster in `lib/article-index.json`, or the Amazon tag cluster if a page is not listed there.
- **Statistics:**
  - medians within type;
  - a type-adjusted ratio (the average within-type difference in log clicks per 1,000 views), with a
    permutation test that shuffles the feature *within* type (the "chance" column) and a resampling range;
  - a regression of log((clicks+0.5)/views x 1000) on the features + type + topic, with robust (HC3) and
    bootstrap ranges;
  - a count model (quasi-Poisson with views as exposure, robust ranges).
- **Components and search terms:** GA4 custom dimensions `placement`, `search_term` and `link_kind` (registered
  Sep 16, used from Sep 17). The button inside a Top Pick box or an award card reports as `BuyLink`. It was
  matched to its box through the search term on the built page. About half of all clicks are on a product
  linked in more than one place on the page; those clicks are split evenly between the places. That is why the
  component shares below come with a certain-to-at-most range.
- **Clarity:** the owner's last 30 days, as passed on Oct 20:
  - site average scroll depth 21.51%, 1.18 pages per session, 1.7 min active time, 10,122 sessions (1,940 bot
    sessions excluded);
  - bed bug steamer page (73 views): 86% of readers reach 5% of the page, 75% reach 10%, 45% reach 15%, 32%
    reach 20%, 22% reach 25%, 16% reach 30%, 12% reach 40%, 5% reach 50%, 3% reach 60% and none reach 65%.
  - That is one page plus a site average, not proof for every page.

**Limits:**
- **GA4 sees about half of Amazon's clicks** (Amazon counted 1.88x what GA4 saw, Sep 19 to Oct 18). Views and
  clicks come from the same GA4 tag, so blocked visitors drop out of both. That makes the per-page rate fine for
  comparing pages, but not for money.
- **September and October is the off-season** for mosquitoes and wasps.
- **Only 21 Amazon pages have 100+ Canadian views** in their stable days (44% of clicks); 52 pages have 50+ (67%
  of clicks). A regression with about 10 terms on 21 pages is over-fitted, so read its ranges, not its point
  estimates.
- **On this site, position, Top Pick and page type move together.** In September Top Picks and earlier buttons
  were added mainly to information and tick pages. So no comparison across pages can pull them apart, and that
  is why the experiment is needed.

---

## Tables

### 1. Page type decides the click rate (all 335 Amazon pages, Canada, each page's stable days)

| refined type | pages | Canadian views | Amazon clicks | clicks per 1,000 views | share of clicks | share of views |
|---|---|---|---|---|---|---|
| product | 174 | 5,760 | 1,585 | **275** | 80% | 57% |
| remedy | 64 | 2,327 | 366 | **157** | 18% | 23% |
| information | 97 | 1,973 | 36 | **18** | 2% | 20% |

With the owner's slug rule the same pages split product 128 / remedy 51 / info 156, at 285 / 161 / **139** clicks
per 1,000. The 139 for "info" is an average of named-product pages (which do as well as product pages) and true
information pages (about 18).

**Feature coverage across the 335 pages** (share of pages / share of Canadian views):

| feature | share of pages | share of views |
|---|---|---|
| 8+ buttons | 44% | 62% |
| first button in the top 20% | 64% | 82% |
| Top Pick box | 43% | 27% |
| award row | 53% | 73% |
| sticky bar | 96% | 100% |

Coverage of the two box types:
- Top Pick and award row are alternatives: only 5 pages have both, and the 18 pages with neither are all
  low-traffic pages.
- Among the 52 pages with 50+ views, every page has a sticky bar.
- Only 4 of those 52 pages have their first button below the top 20%.

### 2. Like with like: median clicks per 1,000 views, with vs without each feature

The "chance" column is the probability of a gap this big if the feature did nothing (feature shuffled within
page type). Ranges are unreliable where one side has only 1-2 pages; trust the "chance" column there.

**Refined type, pages with 100+ Canadian views (21 pages):**

| feature | product: with / without (pages) | remedy | information | type-adjusted ratio (95% range) | chance |
|---|---|---|---|---|---|
| 8+ buttons | 297 / 259 (11 v 3) | 80 / - (3 v 0) | 7 / 2 (2 v 2) | x1.30 (0.77-2.30) | 0.44 |
| first button in top 20% | 297 / 259 (13 v 1) | 80 / - (3 v 0) | 7 / 2 (2 v 2) | x1.45 (0.78-4.28) | 0.49 |
| Top Pick box | 133 / 297 (1 v 13) | - / 80 (0 v 3) | 2 / - (4 v 0) | x0.48 | 0.21 |
| award row | 297 / 133 (13 v 1) | 80 / - (3 v 0) | - / 2 (0 v 4) | x2.06 | 0.22 |
| sticky bar | 278 / - (14 v 0) | 80 / - | 2 / - | not measurable (no page without it) | - |

**Refined type, pages with 50+ Canadian views (52 pages):**

| feature | product: with / without (pages) | remedy | information | type-adjusted ratio (95% range) | chance |
|---|---|---|---|---|---|
| 8+ buttons | 265 / 338 (24 v 6) | 111 / 254 (10 v 3) | 16 / 0 (4 v 5) | x0.82 (0.51-1.29) | 0.45 |
| first button in top 20% | 288 / 259 (29 v 1) | 142 / - (13 v 0) | 7 / 3 (6 v 3) | x1.59 (0.54-5.57) | 0.42 |
| Top Pick box | 150 / 293 (4 v 26) | 196 / 142 (2 v 11) | 2 / 30 (6 v 3) | x0.65 (0.35-1.16) | 0.17 |
| award row | 288 / 167 (27 v 3) | 142 / 196 (11 v 2) | 30 / 2 (3 v 6) | x1.46 (0.79-3.02) | 0.27 |
| sticky bar | 279 / - (30 v 0) | 142 / - (13 v 0) | 3 / - (9 v 0) | not measurable | - |

**The owner's slug rule, 100+ views (21 pages): how the "info" mix makes the Top Pick look disastrous:**

| feature | product | remedy | info | type-adjusted ratio (95% range) | chance |
|---|---|---|---|---|---|
| 8+ buttons | 209 / 357 (7 v 1) | 80 / - (3 v 0) | 215 / 86 (6 v 4) | x2.12 (0.29-23.65) | 0.44 |
| first button in top 20% | 267 / - (8 v 0) | 80 / - (3 v 0) | 168 / 3 (7 v 3) | x6.21 (0.27-60.80) | 0.26 |
| Top Pick box | - / 267 (0 v 8) | - / 80 (0 v 3) | 3 / 297 (5 v 5) | **x0.03** (0.01-0.15) | 0.01 |
| award row | 267 / - (8 v 0) | 80 / - (3 v 0) | 297 / 3 (5 v 5) | **x29** (6.9-93.5) | 0.01 |

Within the slug rule's "info":
- **Top Pick pages:** 4 of the 5 are bite or season pages (no-see-ums, no-see-um bites, chigger bites, mosquito
  season); the fifth is the rat poison explainer.
- **Award-row pages:** all 5 are named-product pages (wasp dust, Advion, raccoon deterrent, fly swatter,
  sprinkler).

Move the named-product pages to "product" and the Top Pick gap shrinks from x0.03 to x0.48-0.65. **That shrinkage is the
page-type effect wearing a Top Pick costume** (ops rule 10).

### 3. Regression (log clicks per 1,000 views; "times" = multiplier, with 95% ranges)

**Refined type, 50+ views: 52 pages, 13 terms, R2 0.80.** Topic reference = bed bugs; "Top Pick" here means
Top Pick instead of an award row.

| term | OLS: times | range (HC3) | range (bootstrap) | count model: times | range (robust) |
|---|---|---|---|---|---|
| 8+ buttons | x0.87 | 0.45-1.68 | 0.46-1.48 | x0.85 | 0.66-1.09 |
| first button in top 20% | x1.32 | 0.31-5.61 | 0.39-5.09 | x1.17 | 0.79-1.73 |
| Top Pick box | x0.56 | 0.31-1.00 | 0.31-0.95 | x0.64 | 0.46-0.89 |
| remedy (vs product) | x0.57 | 0.34-0.97 | | x0.74 | 0.60-0.92 |
| information (vs product) | **x0.05** | 0.02-0.13 | | **x0.04** | 0.02-0.09 |
| mosquitoes | x0.52 | 0.28-0.98 | | x0.47 | 0.31-0.71 |
| wasps | x0.50 | 0.28-0.91 | | x0.42 | 0.30-0.57 |
| mice | x0.46 | 0.24-0.88 | | x0.49 | 0.30-0.80 |
| crawlers | x0.37 | 0.10-1.32 | | x0.46 | 0.26-0.82 |
| cockroaches | x0.77 | 0.30-2.02 | | x0.62 | 0.41-0.94 |
| flies | x1.08 | 0.58-2.02 | | x0.89 | 0.68-1.16 |

**Other versions of the same regression:**

| version | 8+ buttons | first button in top 20% | Top Pick box | page type |
|---|---|---|---|---|
| refined type, 100+ views (21 pages, 10 terms, R2 0.94, over-fitted) | x0.79 (0.11-5.81) | x1.76 (0.20-15.6) | x0.65 (0.10-4.10) | information x0.04 (0.00-0.31) |
| owner's slug rule, 50+ views | x0.92 (0.35-2.43) | x2.85 (0.32-25.5) | x0.30 (0.08-1.14) | info x0.32 (0.11-0.90) |

Measured on the built page instead of the source (refined type, 50+):
- **8+ rendered links:** x0.76 (0.13-4.47); the count model gives x0.53 (0.38-0.74). In the 100+ sample the
  same term is x1.09 (count model x1.52), so the direction flips again.
- **First link in the top 20% of the visible text:** x1.09 (0.16-7.62).

### 4. Robustness: type-adjusted ratios under other cuts (refined type; chance in brackets)

| cut | pages | 8+ buttons | first button top 20% | Top Pick box | award row |
|---|---|---|---|---|---|
| Canada, stable days, 100+ views | 21 | x1.30 (0.44) | x1.45 (0.49) | x0.48 (0.21) | x2.06 (0.22) |
| Canada, stable days, 50+ views | 52 | x0.82 (0.45) | x1.59 (0.42) | x0.65 (0.17) | x1.46 (0.27) |
| Canada, all 48 days ignoring set-up changes, 100+ | 27 | x1.37 (0.40) | x0.77 (0.65) | x0.59 (0.24) | x1.38 (0.56) |
| same, 50+ | 62 | x0.93 (0.79) | x1.15 (0.78) | x0.69 (0.19) | x1.61 (0.13) |
| all countries except Singapore and China, 100+ | 46 | x2.51 (0.02) | x1.16 (0.75) | x0.32 (0.00) | x5.35 (0.00) |
| all countries except Singapore and China, 200+ | 18 | x0.81 (0.67) | x0.72 (0.64) | x0.51 (0.17) | x1.86 (0.42) |

How each feature behaves across the six cuts:
- **8+ buttons:** swings from x0.8 to x2.5 depending on the cut. It is significant only in the one cut that
  mixes in US readers clicking amazon.ca links.
- **Top Pick vs award row:** points the same way in all six cuts, but is clearly different from no difference in
  only two of them.

### 5. Where the clicks come from (Canada, Sep 17 to Oct 19, 1,226 clicks on Amazon pages)

| component | share of clicks: expected (certain to at most) | product | remedy | information | clicks per element per 1,000 views (product + remedy) | median depth (share of text above) |
|---|---|---|---|---|---|---|
| award row (card name + button) | **36%** (20-65%) | 37% | 32% | 10% | 27 per card, about 110 per row of 4 | 12-14% |
| buttons in the text | 26% (3-52%) | 25% | 28% | 42% | 10 per button | 34% |
| comparison tables | 16% (1-44%) | 16% | 16% | 10% | 12 per button | 21% |
| sticky buy bar | **15%** (exact) | 15% | 16% | 24% | 36 per page | (fixed bar) |
| product names linked in sentences | 4% (exact) | 4% | 6% | 0% | **39 per link** (only 25 such links) | 2.5% |
| Top Pick box (name + button) | **2%** (1-6%) | 2% | 2% | 14% | 27 per box | 10-13% |

Link kinds: 90% of clicks are on search links and 10% on ASIN (single-product) links. Information pages
produced only 25 clicks in total, so their column is a curiosity, not evidence.

**Box by box** (pages with only one kind of box):

| page type | box | pages | box clicks per 1,000 views | whole-page clicks per 1,000 views | box share of the page's clicks |
|---|---|---|---|---|---|
| product | Top Pick only | 45 | 30 | 148 | 20% |
| product | award row only | 106 | 120 | 289 | 42% |
| remedy | Top Pick only | 11 | 26 | 184 | 14% |
| remedy | award row only | 39 | 59 | 153 | 39% |
| information | Top Pick only | 56 | 3 | 12 | 22% |
| information | award row only | 11 | 9 | 34 | 27% |

### 6. Position: where on the page the clicked link sits (product + remedy pages)

| link depth (share of page text above it) | links | share of links | share of clicks | clicks per link per 1,000 views |
|---|---|---|---|---|
| first 5% | 59 | 2% | 9% | **24.9** |
| 5-10% | 411 | 11% | 22% | 17.6 |
| 10-20% | 1,388 | 39% | 31% | 11.3 |
| 20-40% | 1,138 | 32% | 31% | 13.2 |
| 40-60% | 429 | 12% | 5% | 6.0 |
| 60-100% | 162 | 5% | 1% | **2.6** |

How the clicks spread down the page:
- **Top 20% of the text:** about 62% of the clicks that don't come through the sticky bar land there. Because
  some clicks can't be pinned to one link, the true share is somewhere between 33% and 93%.
- **First link on the page:** 13% of those clicks, although it is only 6% of the links.
- **What this does not show:** where clicks happen, not whether moving a link up creates new ones (see table 8).

**How deep the first Amazon element really is (40 busiest Amazon pages, local build of Oct 15):**

| | phone (375x812) | desktop (1366x900) |
|---|---|---|
| page length | median **31 screens** (20-70) | median 15 screens |
| pages with any Amazon link in the first screen | **0 of 40** | 11 of 40 |
| first Amazon link | 2.9 screens down (1.0-9.6), 8% of page height | 1.5 screens, 9% |
| first amber button | 3.5 screens, 9% | 2.0 screens, 10.5% |
| first picks box (award row or Top Pick) | 3.1 screens, 10% | 1.7 screens, 12% |
| "top 20% of the page" | = **6.3 screens** down (median) | = 3 screens |

On a typical product page in a phone the order is: breadcrumb, H1, intro paragraph (all of the first screen),
then the Quick Answer box, "A note on who we are", the byline, and only then the award row. On
best-bed-bug-steamer-canada the award row starts 3.3 screens down.

**Does depth go with fewer clicks?** Within product pages (Spearman correlation, pages with 20+ views on that
device):
- **First picks box:** yes, deeper boxes go with fewer clicks: **phone -0.43 (p 0.02, 27 pages), desktop -0.48
  (p 0.04, 19 pages)**.
- **First link:** no relation (phone +0.11, desktop -0.19).
- **Caveat:** it is suggestive, but the pages with deep boxes are also built differently (reviews and explainers
  rather than best-X roundups).

**Clarity's steamer curve applied to that page:**

| element on the steamer page | where it sits | share of readers who reach it |
|---|---|---|
| first inline link | 4.9% of page height | about 86% |
| first button | 8.9% | about 77% |
| award row | 13.4% | about 55% |
| the 20% mark | 5 phone screens | 32% |

**The counter-example: advion-cockroach-gel-bait.**
- Its first link is half-way down the page (9.6 phone screens), yet it gets 259 clicks per 1,000 views.
- On phones a third of its clicks come through the sticky bar. The rest come from the comparison table and the
  award row far down the page.
- Readers who want gel bait go looking for it.

### 7. The sticky buy bar

**By device** (Amazon pages, Canada, Sep 17 to Oct 19):

| | phone | desktop | tablet |
|---|---|---|---|
| Canadian views | 4,829 | 1,855 | 211 |
| Amazon clicks per 1,000 views | 151 | 241 | 227 |
| share of clicks from the sticky bar | **24.5%** | 1.6% | 6% |
| clicks per 1,000 views without the sticky bar | 114 | 237 | 213 |

On product pages the rate is 239 per 1,000 on phones (184 without the bar) and 302 on desktop.

**Natural experiment: the bar was broken on phones on 37 pages** whose wide comparison tables made the layout
696px wide, so the fixed bar ended up mid-screen or off it. Fixed Oct 18 (a07412e1). The table covers product
and remedy pages that have a sticky bar.

| | broken-bar pages | working-bar pages |
|---|---|---|
| sticky bar's share of phone clicks (all page types) | **8%** | **27%** |
| phone clicks per 1,000 phone views, Sep 17 to Oct 19 | 196 | 211 |
| phone rate divided by the same pages' desktop rate, Sep 17 to Oct 19 | 0.91 | 0.72 |
| same, Sep 2 to Oct 19 | 0.79 | 0.73 |

- **Ratio of the two phone/desktop ratios: 1.27 (95% range 0.89-2.55), or 1.07 (0.78-1.57) over the longer
  window.** If the bar added clicks, broken-bar pages would score below 1. They don't, and the lower ends rule
  out the bar adding more than about a quarter of phone clicks.
- **Caveat:** the broken pages' phone layout was also zoomed out, which shows more of the page per screen.

### 8. September's natural experiment: first button moved up, same days, against pages left alone

| batch | pages | before -> after (views / clicks) | moved pages | unchanged pages | net (95% range) |
|---|---|---|---|---|---|
| Sep 17, first button moved up 5%+ of the page | 15 | 432 / 10 -> 532 / 19 | x1.54 | x1.07 | x1.44 (0.11-4.69) |
| Sep 17, any change | 49 | 1,025 / 119 -> 1,519 / 174 | x0.99 | x1.07 | x0.92 (0.61-1.44) |
| Sep 23, first button moved up 5%+ | 20 | 151 / 5 -> 330 / 5 | x0.46 | x1.10 | x0.42 (0.08-2.94) |
| Sep 23, any change | 30 | 250 / 19 -> 610 / 42 | x0.91 | x1.10 | x0.83 (0.27-2.09) |

**By page type (all moved pages):**

| page type | pages | first button moved | clicks / views before | clicks / views after | per 1,000 views |
|---|---|---|---|---|---|
| information | 33 | from 68% to 25% of the way down | 7 / 415 | 4 / 668 | 17 -> 6 |
| product | 7 | | 4 / 127 | 19 / 195 | 31 -> 97 |
| remedy | 5 | | 4 / 48 | 1 / 29 | |

Examples among the information pages:
- bugs-that-look-like-ticks: first button moved from 62% to 12%, and the page got 0 clicks before and after.
- are-ticks-dangerous-ontario: 81% -> 20%, 0 and 0.
- mosquito-season-gta-when-does-it-start: 53% -> 27%, 0 and 0.

The product-page rise is a hint at most:
- It rests on 23 clicks.
- The biggest page in it (rat-poison-canada-what-is-legal) also gained a sticky bar and 6 buttons.
- The Sep 17 pages were picked because they had no clicks, so some rise was expected anyway.

### 9. Search terms that pull Canadian clicks (Sep 17 to Oct 19)

| product pages (887 clicks on 214 terms; top 10 = 35%) | clicks | remedy pages (186 clicks on 57 terms; top 10 = 53%) | clicks |
|---|---|---|---|
| combat roach killing bait stations (4 pages) | 78 | wilson one shot foam wasp hornet killer | 20 |
| vapamore mr-100 steamer | 33 | flexible drain cleaning brush set long | 13 |
| cimexa insecticide dust (3 pages) | 31 | roach killing bait stations | 12 |
| victor rat trap | 28 | bio-clean drain bacteria enzyme treatment | 10 |
| desiccant dehumidifier garage cold | 26 | insect shield permethrin treated clothing | 10 |
| wilson one shot foam wasp hornet killer | 26 | terro fruit fly trap | 8 |
| summit mosquito bits (2 pages) | 25 | climbup bed bug interceptor | 8 |
| terro fruit fly trap | 22 | 50 pint dehumidifier basement energy star | 6 |
| motion activated sprinkler animal repellent | 20 | cockroach gel bait | 6 |
| flea spray home carpet upholstery igr | 20 | window fly trap clear sticky | 6 |

Information pages produced 25 search-term clicks in total; the top one was the Vapamore steamer (7).

### 10. Amazon's own report by tag (Sep 19 to Oct 18), joined to GA4

| tag | Amazon clicks | Amazon earnings | earnings per click | GA4 clicks (all countries except SG/CN) | Amazon / GA4 |
|---|---|---|---|---|---|
| bedbug | 483 | $90.60 | $0.188 | 289 | 1.67 |
| mosquito | 415 | $59.87 | $0.144 | 166 | 2.50 |
| roach | 266 | $17.04 | $0.064 | 111 | 2.40 |
| general | 250 | $33.26 | $0.133 | 136 | 1.84 |
| wasp | 190 | $23.68 | $0.125 | 122 | 1.56 |
| rodent | 185 | $26.87 | $0.145 | 121 | 1.53 |
| wildlife | 169 | in "Other" | | 118 | 1.43 |
| flies | 87 | in "Other" | | 64 | 1.36 |
| ant | 43 | in "Other" | | 7 | (6.1, too few) |
| dehumidifier | 43 | in "Other" | | 38 | 1.13 |
| sprayer | 31 | in "Other" | | 26 | 1.19 |
| steamer | 24 ($478.71 ordered) | in "Other" | | 39 | 0.62 |
| "Other" (all small tags) | | $166.01 | | | |
| **total** | **2,390** | **$417.33** | **$0.175** | **1,271** | **1.88** |

88% of GA4's Amazon clicks are Canadian (1,116 of 1,271).

### 11. Sizing the experiment from the site's own data

Method:
- Real pages were split into matched pairs. Each pair got a coin flip, over periods in which **nothing was
  changed**, using Canadian GA4 numbers.
- That was repeated 4,000 times to see how big a gap pure chance produces.
- The estimate is page by page: each page's change in clicks per 1,000 views, compared within its pair and
  weighted by its clicks.

| design | no-change gap reached 1 time in 20 | lift caught 4 times in 5 |
|---|---|---|
| one-way, 3 weeks against the 3 before, 20 pairs (40 pages) | +27% | +43% |
| one-way, 3 v 3 weeks, **30 pairs (60 pages)** | **+25%** | +40% |
| one-way, 3 v 3 weeks, 39 pairs (78 pages) | +22% | +36% |
| one-way, 2 v 2 weeks in October, 30 pairs | +34% | +57% |
| one-way, 6 v 6 weeks, 30 pairs (estimated) | +17% | +27% |
| **swap, 3 + 3 weeks, 30 pairs (recommended)** | **+12%** | **+18%** |
| total clicks per group instead of page by page, 3 v 3, 30 pairs | +43% | +72% |

How the estimated rows were derived:
- The page-by-page spread for 30 pairs (0.134 on the log scale) is close to what the click counts alone would
  produce (about 0.126). That is why the 6-week row could be estimated by scaling.
- In the swap every page is its own control in the other half, which halves the spread.
- **If November traffic falls by a third, all thresholds rise by about a fifth.**

---

## Appendix A. The 21 pages with 100+ Canadian views (stable days)

"First / box (phone screens)" = how far down the first Amazon link and the first picks box sit on a 375x812
phone.

| page | slug rule | refined | topic | CA views | CA clicks | per 1,000 | buttons | first element (JSX share) | Top Pick | award row | sticky | first / box (phone screens) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| how-to-get-rid-of-ground-wasps-canada | remedy | remedy | wasps | 789 | 112 | 142 | 9 | 0.08 | | yes | yes | 1.3 / 2.9 |
| wasp-dust-canada | info | product | wasps | 489 | 82 | 168 | 4 | 0.20 | | yes | yes | 3.2 / 3.2 |
| best-wasp-nest-spray-canada | product | product | wasps | 438 | 60 | 137 | 10 | 0.05 | | yes | yes | 1.9 / 3.8 |
| advion-cockroach-gel-bait | info | product | cockroaches | 348 | 90 | 259 | 5 | 0.49 | | yes | yes | 9.6 / 11.0 |
| no-see-ums-biting-midges-ontario | info | info | flies | 289 | 1 | 3 | 2 | 0.46 | yes | | yes | 6.0 / 6.0 |
| raccoon-deterrent | info | product | wildlife | 263 | 78 | 297 | 8 | 0.13 | | yes | yes | 2.3 / 3.0 |
| no-see-um-bites | info | info | flies | 218 | 3 | 14 | 11 | 0.10 | yes | | yes | 4.0 / 18.7 |
| best-cockroach-spray-canada | product | product | cockroaches | 172 | 36 | 209 | 13 | 0.16 | | yes | yes | 4.2 / 5.4 |
| mosquito-season-gta-when-does-it-start | info | info | mosquitoes | 157 | 0 | 0 | 7 | 0.27 | yes | | yes | 3.8 / 8.5 |
| how-to-get-rid-of-centipedes-canada | remedy | remedy | crawlers | 153 | 12 | 78 | 12 | 0.10 | | yes | yes | 3.0 / 5.0 |
| best-bed-bug-steamer-canada | product | product | bed-bugs | 143 | 82 | 573 | 8 | 0.10 | | yes | yes | 1.2 / 3.3 |
| best-rat-trap-canada | product | product | mice | 140 | 50 | 357 | 7 | 0.03 | | yes | yes | 1.1 / 2.8 |
| permethrin-canada-yard-clothing-spray | remedy | remedy | mosquitoes | 138 | 11 | 80 | 11 | 0.11 | | yes | yes | 3.8 / 4.6 |
| mosquito-bits-canada-vs-dunks | product | product | mosquitoes | 133 | 20 | 150 | 10 | 0.05 | | yes | yes | 1.0 / 4.1 |
| best-rodent-repellent-for-cars-canada | product | product | mice | 126 | 19 | 151 | 12 | 0.13 | | yes | yes | 3.0 / 3.0 |
| chigger-bites | info | info | flies | 124 | 0 | 0 | 9 | 0.08 | yes | | yes | 3.4 / 23.1 |
| best-fruit-fly-trap-canada | product | product | flies | 123 | 40 | 325 | 22 | 0.03 | | yes | yes | 1.2 / 2.8 |
| electric-fly-swatter | info | product | flies | 114 | 45 | 395 | 12 | 0.09 | | yes | yes | 1.2 / 2.6 |
| rat-poison-canada-what-is-legal | info | product | mice | 113 | 15 | 133 | 9 | 0.11 | yes | | yes | 1.5 / 6.5 |
| best-dehumidifier-for-cold-garage-canada | product | product | moisture | 110 | 55 | 500 | 8 | 0.16 | | yes | yes | 3.0 / 3.0 |
| motion-activated-sprinkler-canada | info | product | wildlife | 103 | 61 | 592 | 8 | 0.10 | | yes | yes | 1.3 / 3.0 |

## Appendix B. The experiment, step by step

**Before the start**
1. **Owner:** says yes, then creates two tracking IDs in Associates Central (e.g. `buzzskito-on-20`,
   `buzzskito-off-20`). An unregistered tag earns nothing.
2. **Agent: tags.**
   - Add the two tags to the tag registry and to the mirror list in `scripts/check-amazon.mjs`.
   - Add a 60-entry page list mapping each page to ON or OFF for the current half. It overrides `tagForSlug`
     for those pages only.
3. **Agent: the box.**
   - Insert the Top Pick box on the group A pages, directly under the opening paragraph.
   - Product, search term and tag come from the page's existing sticky bar.
   - Optional, analytics only: give the box's two links their own `component` label (for example
     `FirstScreenPick`), so GA4 shows the box's own clicks and whether other buttons lost clicks to it.
4. **Agent: checks.**
   - Confirm at 375x812 that the box starts within the first screen.
   - Run the affiliate integrity protocol: every existing token, term and tag stays identical.
   - Build and run all guards, then deploy **Tue Oct 27**, outside 12:15-12:45 UTC.

**During the test**
5. **Freeze:** no other Amazon edits on the 60 pages until Dec 8. Any change that can't wait (a recall, a
   holiday product swap) goes to **both pages of a pair on the same day**.
6. **Tue Nov 17, the swap:** the box moves from group A to group B, and the ON/OFF tags move with it, in the
   same deploy. Same checks.

**Reading the results**
7. **Reads:** Nov 17 (quick look, one-way) and Dec 8 (final, swap), with the decision rule above. Primary number:
   Canadian `affiliate_click` per 1,000 Canadian views, page by page within pairs. Confirmation from Amazon's
   Tracking ID report:
   - **clicks:** ON vs OFF clicks per 1,000 GA4 views of the pages carrying each tag;
   - **guardrail:** ON's items ordered per click should not be below half of OFF's.
8. **Things to note in the read:**
   - If Mediavine ads go live during the test, note the date. It hits both groups the same week, so the swap
     cancels most of it.
   - The cluster tags lose these 60 pages for six weeks, so the per-cluster Amazon numbers for Oct 27 to Dec 7
     will be incomplete.
   - The `position_index` and `above_fold` GA4 dimensions, registered Oct 20, will show from now on where on the
     page each click happened.

**The 30 pairs**
- Who is in it: the busiest product and remedy pages with a sticky bar whose set-up did not change Sep 2 to Oct
  19.
- Who is left out: the five pages being edited today (advion-cockroach-gel-bait, best-cockroach-killer-canada,
  how-to-get-rid-of-cockroaches-canada, baby-bed-bugs-nymphs, bed-bug-bites-vs-mosquito-bites).
- How the pairs were made: within season group, by Canadian clicks over Sep 2 to Oct 19.
- How "starts with the box" was chosen: a coin flip drawn now (seed 20261020). Redraw on the start day if the
  list has changed.

| pair | season | starts with the box (A) | starts without (B) |
|---|---|---|---|
| 1 | indoor | best-bed-bug-steamer-canada | best-dehumidifier-for-cold-garage-canada |
| 2 | indoor | bed-bug-mattress-encasement-canada | best-rat-trap-canada |
| 3 | indoor | best-bed-bug-detector-canada | best-cockroach-spray-canada |
| 4 | indoor | cimexa-bed-bug-review-canada | bed-bug-spray-canada |
| 5 | indoor | best-bed-bug-powder-canada | best-spider-spray-canada |
| 6 | indoor | best-hepa-vacuum-for-bed-bugs-and-fleas-canada | rodent-exclusion-kit-canada |
| 7 | indoor | best-roach-traps-canada | best-steam-cleaner-for-pest-control-canada |
| 8 | indoor | best-rodent-repellent-for-cars-canada | best-bed-bug-trap-canada |
| 9 | indoor | mouse-proof-garage-door-seal-canada | best-natural-bed-bug-spray-canada |
| 10 | indoor | best-sump-pump-for-basement-canada | best-mouse-trap-canada |
| 11 | indoor | best-air-purifier-for-dust-mites-canada | crossfire-bed-bug-concentrate-review-canada |
| 12 | indoor | rodent-proof-compost-bin-canada | bed-bug-interceptor-traps-canada |
| 13 | indoor | bed-bug-heater-canada | ecoraider-bed-bug-spray-review-canada |
| 14 | indoor | best-dehumidifier-for-mold-canada | how-to-get-rid-of-centipedes-canada |
| 15 | indoor | best-patio-heater-canada | best-screen-tent-canada |
| 16 | indoor | best-bed-bug-spray-for-travel-canada | best-bed-bug-spray-for-mattress-canada |
| 17 | indoor | how-to-get-rid-of-carpet-beetles-canada | best-steam-mop-for-hardwood-floors-canada |
| 18 | indoor | best-crawl-space-dehumidifier-canada | best-bed-bug-fogger-canada |
| 19 | indoor | best-whole-room-bed-bug-heater-canada | vapamore-mr100-steamer-review-canada |
| 20 | indoor | mouse-repellent-canada | victor-electronic-mouse-trap-review-canada |
| 21 | outdoor | wasp-dust-canada | how-to-get-rid-of-ground-wasps-canada |
| 22 | outdoor | motion-activated-sprinkler-canada | best-wasp-nest-spray-canada |
| 23 | outdoor | best-fruit-fly-trap-canada | how-to-get-rid-of-drain-flies-canada |
| 24 | outdoor | best-raccoon-live-trap-canada | mosquito-repellent-guide-ontario-2026 |
| 25 | outdoor | mosquito-fogger-canada | best-battery-backpack-sprayer-canada |
| 26 | outdoor | best-pump-pressure-sprayer-canada | best-electric-fence-for-raccoons-canada |
| 27 | outdoor | how-to-get-rid-of-cluster-flies-canada | best-yellow-jacket-trap-canada |
| 28 | outdoor | best-ulv-cold-fogger-canada | best-raccoon-proof-roof-vent-covers-canada |
| 29 | outdoor | how-to-get-rid-of-wasps-canada | mosquito-magnet-canada |
| 30 | outdoor | best-deer-fence-for-gardens-canada | best-commercial-fly-light-trap-canada |

How the two groups compare:
- Over Sep 2 to Oct 19 both had about 665 Canadian Amazon clicks.
- At Sep 19 to Oct 18 levels, group A carries about 660 Amazon clicks a month and group B about 570.
- Because of the swap, both tags see both groups.

---

*Read-only analysis. No site code, tag or page was changed. GA4 was read through the Data API. Page layouts were
measured on a local copy of the Oct 15 build with all outside requests blocked. Analysis scripts ran from the
session scratchpad and are not part of the repo. Sources inside the repo: `reports/phase4_changes.md` (the Sep 23
batch), commit a07412e1 (the 37 wide-table pages), `lib/amazon-clusters.ts` (tags), and `lib/article-index.json`
(topics).*
