# Internal linking: what is proven, what our data says, what to do

*Oct 29, 2026. Research for the owner. Read-only: no site files were changed.*

## Bottom line

Internal links do three proven things: they let Google find a page, they show how pages relate, and they pass some PageRank. Controlled tests show traffic gains of 5% to 25% when links work, and often nothing for the pages receiving the links. No study shows that interlinking a cluster, by itself, takes a page to #1. Our data agrees. A page with no link from a page Google already crawls stays invisible. Once a page is linked, more links show no measurable effect. We are already densely linked, so further link work should be targeted and measured.

## 1. Outside evidence

| Claim | Source | Evidence |
|---|---|---|
| Google uses links to find pages and judge relevance. "Every page you care about should have a link from at least one other page." Use descriptive anchors. "There's no magical ideal number of links." | [Google, Link best practices](https://developers.google.com/search/docs/crawling-indexing/links-crawlable) | Official; strong |
| PageRank "continues to be part of our core ranking systems." | [Google ranking systems guide](https://developers.google.com/search/docs/appearance/ranking-systems-guide) | Official; strong (how it works) |
| Internal linking is "super critical for SEO… to guide Google" (Mueller did not call it a ranking factor). A pyramid "helps us a lot more to understand the context of individual pages". Google "mostly differentiate[s] between the primary content & boilerplate". | Mueller [2022](https://www.searchenginejournal.com/internal-linking-critical-for-seo/441381/), [2021](https://www.seroundtable.com/google-pyramid-navigation-structures-31020.html), [2019](https://www.seroundtable.com/google-links-primary-boilerplate-content-27958.html) | Statements; moderate |
| Exact-match internal anchors are not penalised: "you can abuse your internal links as much as you want AFAIK". | [Illyes, 2019](https://seroundtable.com/google-no-internal-linking-overoptimization-penalty-27092.html) | Statement; moderate |
| First-link rule: Mueller says not to assume Google will "naively take the first one". Three small tests found Google kept only the first text anchor and the first image anchor. | [Mueller, 2021](https://www.seroundtable.com/google-multiple-anchors-same-page-31541.html); [Zyppy](https://zyppy.com/seo/selective-link-priority/) | Weak: a tie-breaker at most |
| Across 23M links on 1,800 sites, pages with 0-4 links got ~2 clicks and pages with 40-44 got ~4x that; traffic falls past 45-50. Varied anchors, and at least one exact-match anchor (~5x), went with more traffic. The author calls it "mostly a correlation study". | [Zyppy (Cyrus Shepard)](https://zyppy.com/seo/internal-links-study/) | Correlation; moderate |
| Split tests against control groups: [nearby-location links](https://www.searchpilot.com/resources/case-studies/adding-internal-link-modules/) +7%; [homepage footer links](https://searchpilot.com/resources/blog/internal-linking-tests) +5%; [category links](https://www.searchpilot.com/resources/case-studies/seo-split-test-lessons-increasing-internal-linking) +25%. A [related-article block grown from 2 to 4 links](https://www.searchpilot.com/resources/case-studies/seo-split-test-lessons-increasing-related-article-links) lifted the pages showing it by 16%, with nothing detectable on the pages it linked to. [Links to already-popular pages](https://www.searchpilot.com/resources/case-studies/can-popular-destinations-links-improve-seo) (2026) showed no measurable change. No test shows strict silos beating cross-linking. | SearchPilot | Controlled; strong, but the gains are modest and differ by site |
| HubSpot (2016) said "the more interlinking they did, the better the placement", but published no control group ([page offline](https://research.hubspot.com/topic-clusters-seo)). Mueller agreed "topical authority" is a buzzword for relevance: ["Don't worry about it"](https://www.searchenginejournal.com/google-on-topical-authority-dont-worry-about-it/501209/). Google's own topic-authority system is for [news](https://developers.google.com/search/blog/2023/05/understanding-news-topic-authority). The [2024 leak](https://en.wikipedia.org/wiki/2024_Google_Search_documentation_leak) shows site-focus scores exist, with unknown weight. | As linked | Weak support for "clusters get you to #1" |
| TIPR: "Internal link optimization is incomplete without factoring in backlinks." The "+160%" result is quoted with no baseline. | [Indig](https://www.growth-memo.com/p/internal-link-optimization-with-tipr); [Lumar](https://www.lumar.io/webinars-events/webinar-recap-internal-link-building-kevin-indig/) | A useful model, weak evidence |
| 58% of pages under 4 clicks deep get crawled, against 31.5% past 8 clicks. Pages with 90-100 links in are crawled twice as often as pages with 0-10. | [Botify, 2018](https://botify.com/blog/botifyconnect-2018-global-botify-community-collaborates-on-internal-linking) | Vendor logs; moderate, crawling only |
| A new link counts "essentially immediately" once Google crawls the page it sits on. [Breadcrumbs left mobile results](https://www.seroundtable.com/google-search-drops-breadcrumb-from-mobile-search-results-38796.html) in Jan 2025, and Mueller (2022, above) said markup is no substitute for HTML links. | [Mueller, 2020](https://www.searchenginejournal.com/google-link-algorithm-updates-and-effects/381920/) | Statement; moderate |

**Where the Twitter claim goes too far.** The best controlled gains are +5% to +25%, on big sites with real authority, and pages receiving new links often show nothing. Internal links only redistribute authority earned from outside, and with few backlinks we have little to redistribute (Indig's point). Clusters help Google understand a site. By themselves they do not lift pages to #1.

## 2. Our own data

We joined the Oct 28 build (752 indexable pages; 18,227 content links, nav and footer excluded) to Search Console web data for Sep 29-Oct 26, pulled by page. The structure is healthy: the median page has 13 content links in, 674 pages sit within 2 clicks of the homepage, only 2 pages lack an in-content link (both are in the footer), and there are 0 broken links and 0 generic anchors. Defects:
- Two pairs of neighbourhood pages link only to each other (`/the-annex` ↔ `/casa-loma`, `/ajax` ↔ `/pickering`). None of the 4 can be reached from the homepage.
- 22 links point at redirects.
- Brand-new pages sit 4-5 clicks deep.

**Do pages with more links do better?**

| Pages | Links alone | Topic and age held equal | Also page length held equal |
|---|---|---|---|
| 362 established hand-written articles | Explain 4% of the spread in impressions | Doubling links = +26% impressions (95% CI −3% to +62%) | −4% (−24% to +21%) |
| 149 service pages | | +11% (−8% to +34%) | |
| 179 new US guides, compared within each release day | | +22% (−16% to +78%) | |

- **Position:** no relationship (rho +0.01).
- **Earlier window:** Sep 27-Oct 10 with pre-existing links only gives the same result. +30% falls to 0% once page length is held equal.
- **Page length explains the raw link effect.** Complete pages attract both links and impressions.
- **The Oct 16 guides' strong correlation** comes from mixing tick-state pages with ID pages. Within each type it vanishes.
- **Links cannot create demand.** Our most-linked article has 140 links in and 187 impressions.

**Our own link changes, before and after, against controls:**

| Change | Result | Meaning |
|---|---|---|
| Jul 22: 35 bed-bug pages linked only to each other; Jul 27: linked from the indexed hub | First week, Google showed 0 of the 35 against 25 of 28 same-day pages. The week of the link: 25/35. All 35 by Aug 24, then level with the controls. | Being found is real and fast. It brings pages level with their peers, not above them. |
| Jul 28: 3-4 in-text links each to orphaned posts (11 with a clean baseline) | −9% impressions (−54% to +80%) | Nothing detectable |
| Sep 5: 1-4 links from pages with traffic to 18 pages, each vs 3 matched pages | +20% (−22% to +84%); up on 9 of 18 | Inconclusive: too few pages |
| Oct 11-12: automatic Next / Related / Keep-reading links on 362 articles (median +6 linking pages, picked blind to traffic) | Doubling the new links: +1.5% impressions (−7% to +11%); position unchanged | No effect after 2 weeks |

**Reverse causation is real but secondary.** The Oct 20-22 link-ins chose "climbers", and the Sep 5 pass chose pages that already had impressions. Page length, type and topic still explain more. The cleanest test, the traffic-blind modules, shows nothing so far.

**Verdict: weak.** Being linked matters for being found. Beyond that, more links show no measurable effect at our density.

## 3. What we should do (ranked)

| # | Action | Expected impact | Evidence | Effort |
|---|---|---|---|---|
| 1 | Link every new page from its hub and from at least one indexed page 30+ days old. Never release a batch that links only to itself. Add the check to the release gate. | Each of our 10 new pages a day keeps its first week (bed-bug pages: 0 of 35 seen) | Strong | Low |
| 2 | Fix the defects. Link `/the-annex` and `/casa-loma` from `/toronto-mosquito-control`, and `/ajax` and `/pickering` from the nearest city page. Give the glossary an in-content link or two (`/terms` needs none). Repoint the 22 links that go to redirects. The service-page edits need the owner's OK. | Small but certain: 4 pages no link path reaches | Strong (crawling) | Under 1 hour |
| 3 | Stop link-count campaigns. Add no more automatic modules for rankings, but keep them for readers. Retire the "3.4x impressions" line in the ops rules: it fails once page length is held equal. | Frees time for what moves rankings: complete pages, the right intent, outside links | Moderate | None |
| 4 | Test once, properly. Give 40 pages ranking 5-15 for big searches 1-2 in-text links each from our ~20 highest-click pages (or pages Search Console's Links report shows with outside links), with the searcher's words as anchors (exact match is fine). Leave 40 matched pages untouched. Read at 4 and 8 weeks. | 0-20% more impressions on the linked pages, not jumps to #1 | Moderate in general, weak here | Low |
| 5 | Give the big clusters without a hub one: household, spiders, wildlife, flies, wasps. The hub links every page; each page links back once. | Small to moderate: crawl paths, clearer structure | Moderate | Medium (spiders hub due Dec 7) |
| 6 | Before May, tidy the links between cities, their neighbourhoods and nearby cities. Anchors are already aligned: 46 of 64 internal "Toronto + mosquito" anchors point at `/toronto-mosquito-control`. The rest of the Toronto split (42 URLs had impressions Jun-Sep) is a content and title question. | Modest, but these are the most valuable clicks | Moderate (SearchPilot +7%) | Low-medium; owner approval |
| 7 | On Nov 23, re-read the module test and the Oct 20-22 link-ins before doing more link work. | Shows whether more is worth doing | n/a | Low |

**How this was done.** Search Console was pulled by page only; country filters drop about half the rows. Scripts are in the temporary folder `C:\Users\buzzs\AppData\Local\Temp\claude\C--Users-buzzs-buzzskito-website\346ad20e-f0cd-4fd1-a3b4-396de78eb0ad\scratchpad\il\` (`gsc_pull.py`, `link_graph_split.mjs`, `page_meta.mjs`, `analyze.py`, `analyze2.py`, `experiments.py`, `exp_c_matched.py`, `newguides_weekly.py`).
