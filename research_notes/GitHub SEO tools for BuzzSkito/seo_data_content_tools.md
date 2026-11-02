# Open-source SEO data-analysis and content-strategy tools on GitHub (state on 2026-10-21), with fit verdicts for buzzskito.ca

## 1. Which GSC / GA4 analysis tools add real value beyond our scripts (striking distance, cannibalization, content decay, CTR-curve outliers, new-query discovery), and which handle GSC's row limits (BigQuery bulk export)?

### Takeaway
No GitHub GSC library does anything our scripts cannot do with a few more lines; the open-source field in 2025-2026 has moved almost entirely to MCP servers that wrap the same Search Console API (same row limits). The one thing that really fixes dropped rows is Google's own BigQuery bulk export (free to set up, no backfill, so start it early). Three ideas are worth copying into our scripts: an image-search split for photo-ID pages, a CTR curve calibrated on our own data to find CTR outliers, and seasonality-aware decay detection.

### Cited Findings

**How the numbers were collected (applies to every table in these notes)**
- Stars, forks, license, created date and last push come from the GitHub REST API repository search, read on 2026-10-21. These are the same values each repo page shows. "Commit" = the newest commit on the default branch (`GET /repos/{r}/commits`). "Push" = GitHub's `pushed_at` (last push to any branch), used where the unauthenticated API quota ran out. — [GitHub REST API: search repositories](https://docs.github.com/en/rest/search/search#search-repositories)
- PyPI downloads = "last month" from pypistats.org (for example [pypistats: advertools](https://pypistats.org/packages/advertools)). npm downloads = 2026-09-19 to 2026-10-18 from [npm downloads API](https://api.npmjs.org/downloads/point/last-month/next-seo).
- A repo with no license file stays under default copyright: nobody may reproduce, distribute or adapt the code without permission. That matters for every "none" below. — [GitHub Docs: Licensing a repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)
- Treat star counts on young repos with caution. A CMU/Socket/NC State study (StarScout) found about 4.5M suspected fake GitHub stars in v1 of the paper and 6.0M in the updated version, mostly from campaigns that give a short boost of under about two months. — [arXiv 2412.13459](https://arxiv.org/html/2412.13459v2)

**GSC API limits and Google's own features**
- The Search Analytics API returns at most 50K rows per day per search type, sorted by clicks. The maximum rowLimit is 25,000, and you page through with startRow. Google says grouping by page and/or query can make the system drop some data so results can be computed in reasonable time. For more complete counts, it says to leave out the page and query dimensions. — [Google: Getting all your data](https://developers.google.com/webmaster-tools/v1/how-tos/all-your-data)
- Bulk data export (announced 2023-02-21) is "not affected by the daily data row limit". Anonymized queries are filtered out for privacy reasons, the export is an ongoing daily dump, and only property owners can set it up. — [Google Search Central blog](https://developers.google.com/search/blog/2023/02/bulk-data-export)
- The export writes three tables: `searchdata_site_impression`, `searchdata_url_impression` and `ExportLog`. Rare queries are flagged with `is_anonymized_query`, and their query text is empty or null (Google's page says both). Tables are kept forever by default, Google recommends partition expiration over table expiration, and rows are not compressed, so you aggregate in your queries. — [Search Console Help: bulk export tables](https://support.google.com/webmasters/answer/12917991)
- There is no backfill: collection starts at setup, and the first export lands up to about 48 h after configuration. — [SEO Gets help](https://seogets.com/help/integrate-bigquery-data-with-seo-gets-rohne); [Google Developers forum](https://discuss.google.dev/t/transfer-all-search-console-data-to-bigquery/149422); [Adswerve](https://adswerve.com/blog/send-google-search-console-data-to-bigquery-with-the-bulk-data-export/)
- Search Console Insights "Query groups" (2025-10-27) uses AI to cluster query variants into groups, with Top / Trending up / Trending down tabs. It is rolling out to high-volume properties and has no ranking effect. — [Google Search Central blog](https://developers.google.com/search/blog/2025/10/search-console-query-groups); [Search Engine Journal](https://www.searchenginejournal.com/google-uses-ai-to-group-queries-in-search-console-data/559360/)
- Google quietly disabled `&num=100` around 2025-09-10. Bot impressions from 100-result pages disappeared, impressions fell, and average position "improved". Search Engine Land data: 77% of sites lost keyword visibility, and 87.7% of 319 properties saw impression declines. — [Search Engine Land](https://searchengineland.com/google-num100-impact-data-462231); [Search Engine Journal](https://www.searchenginejournal.com/google-modifies-search-results-parameter-affecting-seo-tools/556080/)

**Inventory: GSC / GA4 analysis**

| Project | What it does | GitHub | Stars | Last commit / push | License | Cost | Verdict for buzzskito.ca |
|---|---|---|---|---|---|---|---|
| GSC bulk export to BigQuery (Google, native) | Daily export of all performance data, no row cap, anonymized queries flagged | n/a ([docs](https://support.google.com/webmasters/answer/12917991)) | n/a | n/a | n/a | Export free. BigQuery storage and query charges apply above the free tier | **Adopt now**: it is the only fix for page×query rows the API drops, and it has no backfill, so every week of delay is lost data before the May–Aug 2027 peak |
| gscwrapper (Antoine Eripret) | Python GSC wrapper with analysis methods: `ctr_yield_curve`, `cannibalization` (brand filter), `brand_vs_no_brand`, `find_content_decay`, `winners_losers`, `find_ctr_outliers`, `seasonality_per_day`, keyword gap vs a list, migration URL remap, sitemap/active-page checks. Depends on pandas-gbq (BigQuery) | [antoineeripret/gsc_wrapper](https://github.com/antoineeripret/gsc_wrapper) ([methods](https://github.com/antoineeripret/gsc_wrapper/blob/master/README-METHODS.md)) | 49 | commit 2025-11-07 | MIT per README badge (GitHub detects no license file) | Free. Installed from GitHub (not on PyPI). Optional DataForSEO search-volume method (paid) | **Maybe later**: copy the decay and CTR-outlier logic into our scripts instead of adding a dependency stalled for 11 months |
| google-searchconsole (Josh Carty) | Thin query-builder wrapper for the GSC API | [joshcarty/google-searchconsole](https://github.com/joshcarty/google-searchconsole) | 255 | commit 2025-11-15 (docs only) | MIT | Free, `pip install git+…` | **Skip**: no analysis; our scripts already do this |
| advertools (Elias Dabbas) | Scrapy SEO crawler, robots.txt and XML sitemap parsers, text/SEM utilities, SERP helpers. v0.18.0 (PyPI 2026-06-17) adds "Claude SERP analytics" | [eliasdabbas/advertools](https://github.com/eliasdabbas/advertools) | 1,483 | commit 2026-06-30 | MIT | Free; 43,013 PyPI downloads/month | **Skip** for GSC work (it has no GSC analysis). Its Google SERP helper (`serp_goog`) is, from prior knowledge and not re-checked this session, built on the Custom Search JSON API, which is closing (see below) |
| mcp-gsc (Amin Foroutan) | GSC MCP server: analytics, period comparison, URL inspection, `cannibalization-check` and `content-opportunities` (positions 11–20, high impressions, low CTR) prompts. README advertises a hosted paid version | [AminForou/mcp-gsc](https://github.com/AminForou/mcp-gsc) | 2,006 | commit 2026-09-15 | MIT | Free | **Skip, already installed (likely)**: see Inferences |
| Suganthan's GSC MCP | 29 tools: `quick_wins` (positions 4–15), `ctr_opportunities`, `traffic_drops` (separates ranking loss, CTR collapse and demand decline), `cannibalization_check`, `content_decay` (three consecutive 30-day periods), `ctr_vs_benchmark`, `check_alerts`, `image_search_quick_wins` (image CTR baseline "roughly 5-6x lower" than web), `compare_web_vs_image`, `image_page_audit`, `genai_conversation_queries` | [Suganthan-Mohanadasan/Suganthans-GSC-MCP](https://github.com/Suganthan-Mohanadasan/Suganthans-GSC-MCP) | 162 | commit 2026-09-27 | Apache-2.0 | Free (local, OAuth or service account) | **Maybe later**: the image-search split is the one new angle for photo-ID pages. Our scripts can do the same by pulling `searchType=image` |
| seo (Ian Nuttall) | CLI + MCP: `seo report` (quick wins, low CTR, page two, decay, cannibalization), `seo compare` (weeks before/after a date with Google updates overlaid), `seo index`, Bing data, `seo internal-links` | [iannuttall/seo](https://github.com/iannuttall/seo) | 588 | commit 2026-10-21 | Apache-2.0 | Free. Optional paid LLM link judge (about $0.10–0.20 per 500-page site, [docs](https://seoskill.dev/docs/internal-links)) | **Maybe later**: the update-overlay compare is handy. The rest duplicates our scripts |
| SEOMonster | MCP with 70 tools (GSC, GA4, PageSpeed/CrUX, IndexNow, Cloudflare). `content_opportunities` scores the CTR gap against a curve "self-calibrated from your own per-position CTR", plus striking distance and momentum, and flags cannibalization. Also anomalies (sigma threshold) and `gsc_decaying_pages` | [avansaber/seo-monster](https://github.com/avansaber/seo-monster) | 559 | commit 2026-09-01 | MIT | Free | **Maybe later**: the self-calibrated CTR-curve scoring is the idea to copy |
| Search Console MCP (Saurabh Sharma) | GSC + Bing Webmaster Tools + GA4 + AdSense. `seo_audit` types: striking_distance, cannibalization, lost_queries, brand_vs_nonbrand. Also anomalies and `compare_engines` | [saurabhsharma2u/search-console-mcp](https://github.com/saurabhsharma2u/search-console-mcp) | 306 | commit 2026-10-21 | MIT | Free | **Maybe later**: only if Bing data becomes a priority |
| mcp-server-gsc | Basic GSC MCP | [ahonn/mcp-server-gsc](https://github.com/ahonn/mcp-server-gsc) | 281 | commit 2026-09-04 | none detected | Free | **Skip**: no license, duplicates the others |
| Google Analytics MCP (official, "Experimental") | GA4 Data API `run_report`, `run_realtime_report`, Admin API account and property info, property annotations (writes only with `--allow-write`) | [googleanalytics/google-analytics-mcp](https://github.com/googleanalytics/google-analytics-mcp) | 3,530 | commit 2026-10-21 | Apache-2.0 | Free | **Maybe later**: official and maintained, but a convenience layer over our existing GA4 Data API scripts |
| searchConsoleR (Mark Edmondson) | R client for GSC | [MarkEdmondson1234/searchConsoleR](https://github.com/MarkEdmondson1234/searchConsoleR) | 119 | commit 2026-08-11 | NOASSERTION | Free | **Skip**: R |
| search-console-bq | Python: GSC API → BigQuery | [benpowis/search-console-bq](https://github.com/benpowis/search-console-bq) | 51 | commit 2026-05-26 (dependabot) | none detected | Free + BigQuery | **Skip**: native export is better. API path keeps the API's row limits |
| tap-google-search-console (Singer) | ELT tap for GSC | [singer-io/tap-google-search-console](https://github.com/singer-io/tap-google-search-console) | 21 | push 2026-10-09 | AGPL-3.0 | Free | **Skip** |
| SEO-Dashboard (sundios) | Next.js + Flask GSC dashboard | [sundios/SEO-Dashboard](https://github.com/sundios/SEO-Dashboard) | 141 | push 2026-08-05 | none | Free | **Skip**: no license, and the Hub already has GSC views |
| dbt-ga4 (Velir) | dbt models for the GA4 BigQuery export | [Velir/dbt-ga4](https://github.com/Velir/dbt-ga4) | 402 | push 2026-09-14 | MIT | Free + BigQuery | **Skip**: needs a GA4 BigQuery export we don't run |
| querycat (JR Oakes) | Apriori/FP-growth query categorization (sample notebook) | [jroakes/querycat](https://github.com/jroakes/querycat) | 41 | push 2022-04-18 | none | Free | **Skip**: abandoned |
| queryloom, consolevault, other 2026 micro-repos | Striking-distance, decay, BigQuery backfill scripts | e.g. [publicusdijital-ai/queryloom](https://github.com/publicusdijital-ai/queryloom) (4★), [pdimo/consolevault](https://github.com/pdimo/consolevault) (0★) | ≤4 | 2026 | MIT / Apache-2.0 | Free | **Skip**: unproven |

- The Custom Search JSON API is closed to new customers and its endpoint stops serving results on 2027-01-01. Google points to Vertex AI Search (up to 50 domains) or a partner-only full-web product. — [Search Engine Journal](https://www.searchenginejournal.com/google-documents-partner-only-api-for-full-web-search-results/589194/); [Brave](https://brave.com/learn/google-api-shutdown/)
- The mcp-gsc README's changelog mentions a "row_limit parameter (up to 500)". That is an older entry, so the current ceiling may differ. Either way it is an interactive tool, not a bulk extractor. — [AminForou/mcp-gsc README](https://github.com/AminForou/mcp-gsc)
- Suganthan's README says Google's generative-AI performance data has no API and no BigQuery export, and that AI Mode follow-up prompts are logged as new queries inside the web search type. That pollutes query-level reports. — [Suganthans-GSC-MCP README](https://github.com/Suganthan-Mohanadasan/Suganthans-GSC-MCP)
- pytrends (unofficial Google Trends client) is archived (last push 2024-08-10) yet still had 908,810 PyPI downloads last month. — [GeneralMills/pytrends](https://github.com/GeneralMills/pytrends); [pypistats: pytrends](https://pypistats.org/packages/pytrends)

### Inferences
- The `mcp__gscServer__*` tools in this session (`get_search_analytics`, `compare_search_periods`, `check_indexing_issues`, `reauthenticate`, `get_creator_info`…) match the mcp-gsc README tool list, so mcp-gsc is very likely already installed. Adopting another GSC MCP mostly adds packaged prompts, not new data.
- Every library and MCP above calls the same Search Analytics API, so none of them escapes the 50K-row cap or the rows dropped by page×query grouping. Only the bulk export does. At our scale (project notes put the July 2026 baseline at about 278K impressions), the 50K/day cap is probably not what is losing our rows. The losses come from page/query grouping plus anonymized queries. The export recovers the grouping losses. Anonymized queries stay as flagged rows without query text: their clicks and impressions remain in the URL table, but you can't see which queries they were.
- What these tools have that our scripts lack, ranked by fit for "move US photo-ID pages from positions 7–10 to the top 3":
  1. An image-search split (`searchType=image`) per photo-ID page (Suganthan).
  2. CTR outliers measured against our own position curve, segmented by page type (SEOMonster, gscwrapper), not against industry benchmarks.
  3. A "traffic drop = rank loss vs CTR collapse vs demand drop" classifier (Suganthan).
  4. A Google-update overlay on before/after comparisons (iannuttall).
- New-query discovery has no tool with a unique advantage. It is a set difference between periods in our own scripts. gscwrapper's keyword-gap method and search-console-mcp's `lost_queries` are the closest.
- Decay detectors that compare consecutive 30-day windows (Suganthan's `content_decay`, SEOMonster's `gsc_decaying_pages`) will flag every mosquito/tick page from September onward as "decaying". For a seasonal site, decay has to be judged year over year.
- Any year-over-year comparison whose baseline falls in early September 2025 or earlier is distorted by the num=100 change. CTR and average position from before about 2025-09-10 are not comparable with later data.
- Query groups would be a free, Google-made query clustering, but it rolls out to high-volume properties first. It is worth checking whether buzzskito.ca shows the card.

### Gaps
- I did not confirm whether the bulk export needs a billing-enabled Cloud project (vs the BigQuery sandbox), and I did not price BigQuery for a site our size. Google's June 2023 post "BigQuery efficiency tips for Search Console bulk data exports" exists but was not read.
- No independent comparison exists of these MCP servers' accuracy (for example how they define cannibalization). All descriptions come from their own READMEs.
- Whether Query groups is visible for buzzskito.ca can only be checked in the Search Console UI.

## 2. Which keyword-clustering approach is best and cheapest (free embeddings vs SERP overlap that needs a paid API)?

### Takeaway
Practitioners favour a hybrid: free embeddings (sentence-transformers / BERTopic, run locally) for the bulk grouping, then SERP overlap only to decide whether two queries need one page or two. No independent benchmark settles which is better. For us the cheapest "SERP-overlap" signal is free and already in hand: GSC's own page×query pairs show which of our pages Google already serves for each query. Paid SERP pulls should be kept for the handful of target queries (Ahrefs MCP, already paid for).

### Cited Findings
- Vendor and practitioner guides converge on a hybrid. SERP overlap catches intent splits that embeddings miss (example given: "how to roast coffee" vs "buy roasted coffee"). The common threshold is about 3–4 shared top-10 URLs. Embeddings are recommended as the scalable first pass. The search found no independent benchmark. — [thruuu](https://thruuu.com/blog/semantic-keyword-clustering/); [seocrawl.ai](https://seocrawl.ai/blog/keyword-clustering); [Brandignity](https://www.brandignity.com/es/2026/02/automated-seo-clustering-with-ai-a-practical-workflow/)
- OpenSEO's clustering combines cosine similarity on embeddings with SERP-intent validation. This comes from a third-party code explainer, not OpenSEO's docs. — [instagit explainer](https://instagit.com/every-app/open-seo/keyword-clustering-algorithm-similarity-metrics/)
- OpenSEO needs a DataForSEO API key. The hosted version is $10/month and earns its money by charging 28% extra on every DataForSEO request. — [every-app/open-seo README](https://github.com/every-app/open-seo)
- SERP lookups are cheap per keyword. The SerpBear README lists serper.dev at $1.00 per 1,000 requests and valueserp at $2.50 per 1,000. serper.dev gives 2,500 free queries. — [SerpBear README](https://github.com/towfiqi/serpbear); [serper.dev](https://serper.dev/)

**Inventory: keyword clustering**

| Project | What it does | GitHub | Stars | Last commit / push | License | Cost | Verdict |
|---|---|---|---|---|---|---|---|
| sentence-transformers | Embedding/reranking library, the backbone of most "semantic clustering" scripts | [huggingface/sentence-transformers](https://github.com/huggingface/sentence-transformers) | 19,205 | push 2026-10-21 | Apache-2.0 | Free, local; 22,332,616 PyPI downloads/month | **Maybe later**: the right free engine if we ever cluster GSC queries. No new tool needed |
| BERTopic | Topic modelling with BERT embeddings + c-TF-IDF labels | [MaartenGr/BERTopic](https://github.com/MaartenGr/BERTopic) | 7,903 | commit 2026-08-27 | MIT | Free; 315,257 PyPI/month | **Maybe later**: good for labelled clusters of a few thousand GSC queries |
| KeyBERT | Keyword extraction (not clustering) | [MaartenGr/KeyBERT](https://github.com/MaartenGr/KeyBERT) | 4,224 | commit 2026-08-25 | MIT | Free; 381,292 PyPI/month | **Skip**: wrong job |
| PolyFuzz | Fuzzy string matching and grouping (used for redirect maps and near-duplicate titles) | [MaartenGr/PolyFuzz](https://github.com/MaartenGr/PolyFuzz) | 804 | commit 2025-07-10 | MIT | Free; 25,058 PyPI/month | **Skip**: no commits for 15 months, and string similarity is not intent |
| Search Solved scripts (Lee Foot) | 100+ SEO scripts and apps incl. "Semantic Keyword Clustering" (sentence transformers), keyword-to-page mapper, duplication finder (PolyFuzz) | [searchsolved/search-solved-public-seo](https://github.com/searchsolved/search-solved-public-seo) | 418 | commit 2026-09-21 | NOASSERTION | Free | **Maybe later**: a reference implementation. Check the license before copying code |
| seo-keyword-clusters | KMeans + TF-IDF labels on GSC CSVs. README says it is an archived legacy prototype of the SaaS seocluster.ai | [jfaccioli/seo-keyword-clusters](https://github.com/jfaccioli/seo-keyword-clusters) | 56 | commit 2025-12-05 | none | Free | **Skip** |
| llm-cluster (Simon Willison) | Clusters stored embeddings, LLM-labelled | [simonw/llm-cluster](https://github.com/simonw/llm-cluster) | 82 | push 2024-03-01 | Apache-2.0 | Free + model cost | **Skip**: stale |
| Carrot2 | Java text/search-result clustering engine | [carrot2/carrot2](https://github.com/carrot2/carrot2) | 859 | push 2026-10-21 | not detected by GitHub | Free | **Skip**: Java stack, built for snippets |
| SEO-Clustering-Tool | SERP URL-overlap clustering | [FassihFayyaz/SEO-Clustering-Tool](https://github.com/FassihFayyaz/SEO-Clustering-Tool) | 8 | push 2025-06-24 | none | Needs SERP data (paid API) | **Skip** |
| keyword-clustering-minhash | MinHash/LSH clustering on shared ranking URLs | [dartseoengineer/keyword-clustering-minhash](https://github.com/dartseoengineer/keyword-clustering-minhash) | 8 | push 2024-07-18 | Unlicense | Needs SERP data | **Skip** |
| OpenSEO | "Open source alternative to Semrush and Ahrefs". Keyword research and clustering on DataForSEO | [every-app/open-seo](https://github.com/every-app/open-seo) | 24,436 | push 2026-10-20 (created 2026-02-27) | MIT | DataForSEO pay-as-you-go; hosted $10/mo + 28% markup | **Skip**: duplicates the Ahrefs MCP and bills per call |
| Claude SEO `/seo cluster` | "SERP-based semantic clustering" sub-skill | [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | 19,570 | push 2026-10-21 | MIT | Free skill; data source for SERPs not stated | **Skip**: see section 5 |
| kwClustersR / simple_keyword_clusterer | Older R / Python clusterers | [remibacha/kwClustersR](https://github.com/remibacha/kwClustersR) (29★, push 2018-08-16); [andrea-dagostino/simple_keyword_clusterer](https://github.com/andrea-dagostino/simple_keyword_clusterer) (18★, archived) | — | — | none / MIT | Free | **Skip**: abandoned |
| GSC Query groups (Google, native) | AI clusters of query variants inside Search Console Insights | n/a ([blog](https://developers.google.com/search/blog/2025/10/search-console-query-groups)) | n/a | 2025-10-27 launch | n/a | Free | **Adopt now if visible** for our property: zero cost, built from Google's own data |

### Inferences
- Ahrefs volumes are unreliable for Canadian long tail. So the keyword set to cluster should be our own GSC queries (real impressions), not an Ahrefs list. Embedding about 10K GSC queries with a small sentence-transformers model is free and runs on a laptop.
- GSC page×query data already acts as a free "SERP overlap" for queries we rank for. If Google shows two of our pages for one query, that is the cannibalization and intent signal. Paid SERP overlap only adds information for queries where we don't rank yet.
- Cost of paid SERP overlap at SerpBear-listed prices: about $1 per 1,000 keywords at serper.dev, which is cheap. But every SERP API is automated Google scraping (see section 6). For new-page planning, the Ahrefs `serp-overview` we already pay for, or the Claude agents' top-3 research, covers the few queries that need a one-page-or-two decision.

### Gaps
- No independent, published benchmark comparing embedding clustering with SERP-overlap clustering on page-mapping accuracy was found. The thresholds quoted are vendor heuristics.
- DataForSEO SERP pricing was not verified.

## 3. Which internal-linking tools suggest links by semantic similarity, and could they improve on our cluster-based picks?

### Takeaway
There is no popular, maintained open-source semantic internal-linking tool. The repos that do it have 1–23 stars, are WordPress-only, or are research prototypes (WebKnoGraph). The popular options are commercial (Screaming Frog 22's embedding similarity, Lee Foot's hosted BERTlinker) or plain text matching (iannuttall/seo). Given our measured plateau at about 10–19 links per page and a median of 13, a tool would at most improve which links we pick, not how many. Using free embeddings to audit our existing Next/Related picks is cheaper than adopting anything.

### Cited Findings
- iannuttall/seo `internal-links`:
  - Without a paid key, suggestions come from text matching: shared words, and sentences that name the target page. The docs don't mention embeddings, and GSC data is only used for reporting.
  - It crawls up to 500 pages by default, 5,000 with `--max-pages`, and suggests up to 8 links per page.
  - It reports pages nothing links to, pages with fewer than 3 contextual inlinks, links through redirects, and vague anchors.
  - The optional LLM judge ("Jev", TypeSafe API key) costs about $0.10–0.20 per 500-page site.
  - — [seoskill.dev docs](https://seoskill.dev/docs/internal-links)
- WebKnoGraph is an open framework for "AI-assisted internal-link analysis and pre-deployment evaluation". It combines a crawler, vector embeddings, GraphSAGE link prediction, PageRank and intervention analysis, ships Jupyter UIs, and has an arXiv paper listed in its README. — [martech-engineer/WebKnoGraph](https://github.com/martech-engineer/WebKnoGraph)
- Screaming Frog SEO Spider 22.0 (June 2025) added semantic similarity via LLM embeddings (OpenAI, Gemini or Ollama). Pages score 0–1, with >0.95 flagged as similar by default and a threshold adjustable down to 0.5. Officially it is aimed at duplicate and off-topic detection; internal linking is only mentioned in vendor social posts. — [Screaming Frog 22.0 release](https://www.screamingfrog.co.uk/seo-spider-22/); [PPC Land](https://ppc.land/screaming-frog-seo-spider-22-0-introduces-semantic-similarity-analysis/)
- Lee Foot's "BERTlinker" (AI internal linking at scale) is listed in his repo as a hosted site, not code. — [searchsolved README](https://github.com/searchsolved/search-solved-public-seo)
- SEO Machine's "Internal Linker" agent works from a hand-maintained `context/internal-links-map.md`. — [TheCraigHewitt/seomachine README](https://github.com/TheCraigHewitt/seomachine)

**Inventory: internal linking and orphan detection**

| Project | What it does | GitHub | Stars | Last commit / push | License | Cost | Verdict |
|---|---|---|---|---|---|---|---|
| seo `internal-links` | Text-matching link suggestions + orphan, low-inlink, redirect and vague-anchor report | [iannuttall/seo](https://github.com/iannuttall/seo) | 588 | commit 2026-10-21 | Apache-2.0 | Free; optional ~$0.10–0.20/500 pages | **Maybe later**: a useful independent audit (vague anchors, links through redirects), but its matching is close to ours |
| WebKnoGraph | Embeddings + GraphSAGE link prediction + PageRank, evaluates link changes before deployment | [martech-engineer/WebKnoGraph](https://github.com/martech-engineer/WebKnoGraph) | 23 | push 2026-10-06 | Apache-2.0 | Free (local or Colab compute) | **Maybe later**: research-grade, worth a look only if we want to test link changes before shipping |
| ContextBridge | Python semantic internal-link script | [itsbariscan/ContextBridge-Semantic-Internal-Link-Tool](https://github.com/itsbariscan/ContextBridge-Semantic-Internal-Link-Tool) | 4 | push 2024-07-30 | none | Free | **Skip** |
| semantic-vector-internal-linking | Vector-embedding link suggestions | [frostyhand/semantic-vector-internal-linking](https://github.com/frostyhand/semantic-vector-internal-linking) | 1 | push 2025-06-18 | MIT | Free + embedding API | **Skip** |
| AI-Blog-Interlink-Engine | Semantic linking for markdown with LLM anchors | [Shreyas-Patro/AI-Blog-Interlink-Engine](https://github.com/Shreyas-Patro/AI-Blog-Interlink-Engine) | 4 | push 2026-04-18 | none | LLM cost | **Skip** |
| internal-linking (krysmalskipl) | One-command link suggestions, HTML/CSV report | [krysmalskipl/internal-linking](https://github.com/krysmalskipl/internal-linking) | 1 | push 2026-10-12 | MIT | Free | **Skip** |
| link-opportunities (Britney Muller) | Course demo: real-time link suggestions while writing | [BritneyMuller/link-opportunities](https://github.com/BritneyMuller/link-opportunities) | 1 | push 2026-04-16 | none | — | **Skip** |
| Loom / Interpost | WordPress AI internal-link plugins | [MarcinZmuda/loom](https://github.com/MarcinZmuda/loom) (5★, NOASSERTION); [geosem42/interpost](https://github.com/geosem42/interpost) (14★, none) | ≤14 | 2026 | — | — | **Skip**: WordPress only |
| LibreCrawl | Free desktop/web SEO crawler (Screaming Frog alternative), link analysis, plugins | [PhialsBasement/LibreCrawl](https://github.com/PhialsBasement/LibreCrawl) | 1,070 | commit 2026-09-29 | MIT | Free | **Skip**: our build-time guards and source data already know every link |
| SEOnaut | Go SEO auditor (broken links, redirects, etc.), hosted version available | [StJudeWasHere/seonaut](https://github.com/StJudeWasHere/seonaut) | 820 | commit 2026-10-08 | MIT | Free | **Skip**: same reason |
| python-seo-analyzer | Crawls a site, word counts, on-page warnings | [sethblack/python-seo-analyzer](https://github.com/sethblack/python-seo-analyzer) | 1,485 | commit 2026-10-08 | NOASSERTION | Free; 9,027 PyPI/month | **Skip** |
| Unlighthouse | Lighthouse across a whole site | [harlan-zw/unlighthouse](https://github.com/harlan-zw/unlighthouse) | 4,902 | push 2026-10-21 | MIT | Free; 178,847 npm/month | **Skip**: `scripts/measure-speed.mjs` already covers our speed questions |
| orphan-beacon / static-seo-audit | Orphan pages and click depth from a built static site; build-time SEO gate | [MrLouisWright/orphan-beacon](https://github.com/MrLouisWright/orphan-beacon) (1★, MIT); [audient-id4/static-seo-audit](https://github.com/audient-id4/static-seo-audit) (1★, MIT) | 1 | 2026-10 | MIT | Free | **Skip**: same idea as our own `check:*` guards |
| Screaming Frog 22 semantic similarity (commercial) | Embedding similarity per page | n/a | n/a | June 2025 | proprietary | Paid licence (LibreCrawl's README cites $279/yr) | **Maybe later**, not open source |

### Inferences
- Our recirculation already picks links by topic cluster plus shared distinctive words, which is TF-IDF-like. A semantic tool's only plausible gain is relevance, not quantity: we sit at a median of 13 links per page, inside the measured 10–19 plateau.
- The cheapest test is an embedding audit. Embed the ~730 pages locally with sentence-transformers (free) and score each current Next/Related/card pair. Hand-review the lowest-similarity pairs and the 174 pages whose Next points back at the page offering it (a known issue in the project notes).
- Orphan detection needs no crawler for us. `lib/article-index.json`, `lib/recirculation.json` and the built HTML already give the link graph. Crawlers mainly help on sites whose CMS hides that data.

### Gaps
- No published evidence was found that embedding-picked internal links beat cluster or word-overlap picks on rankings or pages per session. WebKnoGraph's arXiv paper was not read.
- WebKnoGraph's licensing of its bundled models and data was not checked.

## 4. Which rank trackers are maintained, how do they get rankings, and what does tracking ~200 keywords cost?

### Takeaway
Only SerpBear is a maintained, established open-source rank tracker (v3.1.0, March 2026). Serposcope is archived. The newer ones (SerpTrail by SerpApi, SearchMirror, SEO Playground) are months old and tied to one paid SERP vendor. Every one of them gets rankings by having Google scraped, by a vendor or by your own proxies, which Google's spam policies name as a violation. At page-1 depth, 200 keywords daily is about 6,000 lookups a month, roughly $6–40 a month depending on the vendor. We already get official positions free from GSC, and possibly from Ahrefs Rank Tracker through the existing MCP. Verdict: skip.

### Cited Findings
- **SerpBear README:**
  - It tracks unlimited keywords and integrates with GSC for real visits and impressions per keyword.
  - Rankings come from third-party scraping services (ScrapingAnt, ScrapingRobot, SearchApi, SerpApi, HasData) or from the user's own proxy IPs scraping Google.
  - The README claims it runs free on mogenius or Fly.io.
  - Listed vendor prices: serper.dev $1.00/1,000 requests; serply $49/mo for 5,000; SerpApi from $50/mo for 5,000; SearchApi from $40/mo for 10,000; valueserp $2.50/1,000; HasData from $29/mo for 10,000; crazyserp from $47/mo for 100,000.
  - spaceserp, ScrapingAnt and ScrapingRobot are marked "Doesn't work Anymore".
  - — [towfiqi/serpbear](https://github.com/towfiqi/serpbear)
- SerpBear changelog: v3.0.0 (2026-03-01) "adds dynamic scraping to tackle num=100 block" and fixes GSC "Forbidden" errors. v3.1.0 (2026-03-27) adds subdomain matching and scraper error-handling fixes. — [SerpBear CHANGELOG](https://github.com/towfiqi/serpbear/blob/main/CHANGELOG.md)
- SerpTrail (built by SerpApi, Rails + SQLite) checks up to five Google pages and tracks AI Overview citations. Each page costs one SerpApi credit per keyword per location; the README example is 2 locations × 3 pages × 30 checks = 180 credits/month. — [serpapi/serptrail](https://github.com/serpapi/serptrail)
- SearchMirror is self-hosted and powered by the DataBlue SERP API. Its README says self-hosting does not make those API calls free. — [databluedev/searchmirror](https://github.com/databluedev/searchmirror)
- SEO Playground runs on DataForSEO. Its rank checks stop crawling once the domain is found to lower cost, and it flags AI Overview citations and offers local geo-grids. The README carries a DataForSEO affiliate link. — [paulmassen/seo-playground](https://github.com/paulmassen/seo-playground)
- Google's spam policies (page updated 2026-08-28) treat sending automated queries to Google, including scraping results for rank checking without express permission, as a violation of both the spam policies and the Terms of Service. — [Google spam policies](https://developers.google.com/search/docs/essentials/spam-policies)
- In December 2025 Google sued SerpApi in the Northern District of California under the DMCA's anti-circumvention provisions. Google alleges SerpApi evades "SearchGuard", a JavaScript challenge Google launched in January 2025, and solves CAPTCHAs. It seeks $200–$2,500 per act plus an injunction. No ruling on the merits was found. — [Search Engine Journal](https://www.searchenginejournal.com/google-files-dmca-suit-targeting-serpapis-serp-scraping/563847/); [IPWatchdog](https://ipwatchdog.com/2025/12/26/google-sues-serpapi-parasitic-scraping-circumvention-protection-measures/)
- After `num=100` was disabled (around 2025-09-10), trackers need about ten requests to read 100 positions. Some now report anything beyond 20 as "20+". — [Tenant Inc.](https://www.tenantinc.com/blog/major-shift-in-seo-reporting-google-drops-the-num100-parameter); [Search Engine Land](https://searchengineland.com/google-num100-impact-data-462231)

**Inventory: rank trackers**

| Project | How it gets rankings | GitHub | Stars | Last commit / push | License | Cost (200 keywords) | Verdict |
|---|---|---|---|---|---|---|---|
| SerpBear | Third-party SERP scraping APIs or your own proxies, plus GSC data | [towfiqi/serpbear](https://github.com/towfiqi/serpbear) | 2,122 | commit 2026-05-14 (README); release 3.1.0 on 2026-03-27 | MIT | Software free. Page-1 daily ≈ 6,000 lookups/mo ≈ $6 (serper.dev) to $29–40 (HasData / SearchApi plans); weekly ≈ 870/mo ≈ under $1 | **Skip**: GSC already gives free official positions for every query with impressions; scraping-based |
| Serposcope | Scrapes Google directly with proxies (legacy) | [serphacker/serposcope](https://github.com/serphacker/serposcope) | 755 | commit 2022-01-15, **archived** ("LEGACY CODE") | MIT | Proxies | **Skip**: abandoned |
| SerpTrail (SerpApi) | SerpApi credits, organic + AI Overview citations | [serpapi/serptrail](https://github.com/serpapi/serptrail) | 50 | commit 2026-08-03 | MIT | 1 credit per page per keyword per location → 6,000 credits/mo for 200 keywords daily at page 1 | **Skip**: tied to the vendor Google is suing |
| SearchMirror | DataBlue SERP API | [databluedev/searchmirror](https://github.com/databluedev/searchmirror) | 110 | commit 2026-10-01 (created 2026-09-05) | AGPL-3.0 | DataBlue credits (not priced here) | **Skip**: six weeks old |
| SEO Playground | DataForSEO (rank tracker, geo-grid, AI-prompt tests) | [paulmassen/seo-playground](https://github.com/paulmassen/seo-playground) | 71 | commit 2026-10-19 | none | DataForSEO per call | **Skip**: no license |
| Google-rank-tracker (sundios) | Python script that fetches Google pages itself and parses them with BeautifulSoup, on a cron | [sundios/Google-rank-tracker](https://github.com/sundios/Google-rank-tracker) | 305 | push 2024-01-10 | none | Free + your IP's risk | **Skip**: abandoned, direct scraping |
| dataforseo-claude | 13 Claude Code skills incl. rank tracking on DataForSEO | [zubair-trabzada/dataforseo-claude](https://github.com/zubair-trabzada/dataforseo-claude) | 169 | push 2026-05-20 | MIT | DataForSEO per call | **Skip** |
| Search Console (native) | Official average position per query/page/country/device | n/a | n/a | n/a | n/a | Free | **Already used** |

### Inferences
- Our goal (positions 7–10 to the top 3) only needs page-1 depth, so the cheap scenario (~6,000 lookups/month for 200 keywords daily) is the relevant one. Even so, GSC average position (free, official, by country) answers "did it move into the top 3" for every query with impressions.
- What a tracker would add is a single-location, single-day snapshot and competitor positions. That is "nice to see", not a lever. Each US query also needs a US location parameter and each GTA service query a local one; at one request per keyword-location, 200 keywords in two markets doubles the lookups.
- The Ahrefs MCP in this session exposes `rank-tracker-overview`, `rank-tracker-serp-overview` and `management-project-keywords`. If our Ahrefs plan includes Rank Tracker, that is a paid, already-budgeted tracker that needs no new vendor. The plan and keyword limits are not known.
- Self-hosting SerpBear with our own proxies would make BuzzSkito itself the party sending automated queries. Using a vendor moves that risk to the vendor but ties us to its legal fate (SerpApi).

### Gaps
- The SerpBear price table is undated and may be stale, and serper.dev's current tier prices could not be read from its site (only "2,500 free queries"). The cost figures are back-of-envelope from the README.
- How SerpBear's v3 "dynamic scraping" pages past position 10 (and so its real lookups per keyword) was not checked in code.
- The Ahrefs Rank Tracker allowance on the owner's plan was not checked.

## 5. Which content-brief / content-optimization tools are open source and credible?

### Takeaway
No credible open-source Surfer/Clearscope equivalent exists. The one dedicated project (ContentSwift) has had no commits since 2023, and the rest are 1–11-star repos. What is popular in 2026 is Claude Code skill suites: Marketing Skills (55.8K★), Claude SEO (19.6K★), geo-seo-claude (11.1K★), SEO Machine (7.5K★). They package briefs, clustering and audits as prompts, mostly on DataForSEO data. None publishes evidence that its content score tracks rankings. Our own agents' top-3 teardown plus fact-check already covers this job.

### Cited Findings
- ContentSwift calls itself an alternative to Surfer, NeuronWriter and Frase. It uses SerpApi for SERPs and suggests a rotating proxy to fetch competitor pages. — [hilmanski/contentswift](https://github.com/hilmanski/contentswift)
- SEO Machine:
  - It has commands `/research` (writes a research brief), `/write`, `/rewrite`, `/optimize`, `/publish-draft` and `/article`.
  - It scores search intent, "keyword density & clustering", readability and an "SEO quality rating (0-100)".
  - Data comes from GA4, GSC and DataForSEO (a DataForSEO account is required).
  - — [TheCraigHewitt/seomachine](https://github.com/TheCraigHewitt/seomachine)
- Claude SEO: 26 sub-skills and 19 agents, including `/seo content-brief` (keywords, outline, internal links), `/seo cluster` (SERP-based) and `/seo programmatic`. Google APIs come in tiers: a PageSpeed/CrUX key, then GSC via OAuth or service account, then GA4. It describes itself as "Free skill + Claude Code subscription". — [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo)
- Marketing Skills is a free, MIT library of marketing skills including `programmatic-seo`. "Verified Partners" fund the work, and the README promotes a paid data aggregator (AIsa). — [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills)
- Open SEO MCP Skills (Ryze) are MIT skills, but the data runs through Ryze's hosted connector (GSC, GA4, DataForSEO). Its `content-brief` is "SERP-driven" on DataForSEO + GSC. The README itself notes most "open source SEO tools" are a UI over DataForSEO and that hosted versions add about 28% markup. — [Ryze-AI-Adgent/open-seo-mcp-skills](https://github.com/Ryze-AI-Adgent/open-seo-mcp-skills)

**Inventory: content briefs / optimization / Claude SEO suites**

| Project | What it does | GitHub | Stars | Last commit / push | License | Cost | Verdict |
|---|---|---|---|---|---|---|---|
| ContentSwift | SERP research and on-page term hints | [hilmanski/contentswift](https://github.com/hilmanski/contentswift) | 165 | push 2023-10-31 | none | SerpApi | **Skip**: abandoned, no license |
| STORM (Stanford OVAL) | LLM research agent that writes cited, Wikipedia-style reports | [stanford-oval/storm](https://github.com/stanford-oval/storm) | 31,680 | push 2025-09-30 | MIT | LLM + search-API costs | **Skip**: no push in 12+ months, and it isn't an SEO tool |
| GPT Researcher | Autonomous deep-research agent, any LLM | [assafelovic/gpt-researcher](https://github.com/assafelovic/gpt-researcher) | 30,227 | push 2026-10-10 | Apache-2.0 | LLM + search-API costs | **Skip**: duplicates our Claude research agents |
| SEO Machine | Claude Code workspace for long-form SEO posts (research → brief → write → optimize → publish) | [TheCraigHewitt/seomachine](https://github.com/TheCraigHewitt/seomachine) | 7,526 | push 2026-10-15 | MIT | DataForSEO + Claude | **Skip**: keyword-density scoring and a publish pipeline, both outside our measured rules |
| Claude SEO | Audit, brief, cluster and programmatic sub-skills; GSC/GA4/CrUX | [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | 19,570 | push 2026-10-21 (created 2026-02-07) | MIT | Free + Claude | **Maybe later**: read for ideas only. Our `buzzskito-ops` rules were measured on this site and contradict generic advice |
| Claude Blog | 30-sub-skill blog writing suite | [AgriciDaniel/claude-blog](https://github.com/AgriciDaniel/claude-blog) | 2,448 | push 2026-10-14 | MIT | Free + Claude | **Skip** |
| geo-seo-claude | GEO/AI-search audit skill | [zubair-trabzada/geo-seo-claude](https://github.com/zubair-trabzada/geo-seo-claude) | 11,149 | push 2026-10-21 | MIT | Free + Claude | **Skip**: outside this brief |
| Marketing Skills | Marketing skill library incl. programmatic-seo | [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 55,823 | push 2026-10-19 (created 2026-01-15) | MIT | Free + Claude | **Skip** |
| SE Ranking seo-skills | Claude skills over the SE Ranking MCP (briefs, AI share of voice) | [seranking/seo-skills](https://github.com/seranking/seo-skills) | 181 | push 2026-06-25 | MIT | SE Ranking subscription | **Skip** |
| Open SEO MCP Skills (Ryze) | Skills + hosted connector | [Ryze-AI-Adgent/open-seo-mcp-skills](https://github.com/Ryze-AI-Adgent/open-seo-mcp-skills) | 6,364 | push 2026-10-13 (created 2026-08-29) | MIT | Data via Ryze workspace | **Skip**: front-end for a hosted service; unusually fast star growth |
| Content-Brief-Generator | FastAPI SERP + scraping brief generator | [agniiva/Content-Brief-Generator](https://github.com/agniiva/Content-Brief-Generator) | 11 | push 2023-12-19 | Apache-2.0 | SERP API | **Skip**: abandoned |
| content-optimizer / OpenSEO (clawnify) | "Open source alternative to Surfer"; WordPress article generator with auto-publish | [sharozdawa/content-optimizer](https://github.com/sharozdawa/content-optimizer) (1★, MIT); [clawnify/OpenSEO](https://github.com/clawnify/OpenSEO) (5★, MIT) | ≤5 | 2026 | MIT | LLM/SERP costs | **Skip** |

### Inferences
- "Credible" here would mean evidence that the tool's term or score recommendations correlate with rankings. None of the READMEs offers that. Most are prompt packages over the same SERP data our agents already read.
- The star counts on the Claude-skill suites mostly measure Claude Code's popularity in 2026, not SEO results. Several repos with near-vertical star growth are mainly marketing for a hosted service: Ryze (6.4K★ in 7 weeks), irinabuht12-oss/google-ads-meta-ads-mcp (5,469★) and irinabuht12-oss/marketing-skills (5,202★). GitHub detects no programming language in either irinabuht12-oss repo, and marketing-skills has no license. Given the StarScout findings, treat their stars as advertising.

### Gaps
- I found no independent test of any open-source content scorer against rankings.
- I did not read the claude-seo `content-brief` or `cluster` code to see which SERP source they call.

## 6. Policy flags (scraping Google, scaled AI content, link schemes) and programmatic SEO frameworks

### Takeaway
Every rank tracker and most brief/clustering tools depend on automated Google scraping (directly or via SerpApi, DataForSEO, serper.dev and similar). Google's spam policies name that as a violation, and Google is suing SerpApi over it. The programmatic-SEO templates and content-pipeline skills are what Google's "scaled content abuse" policy targets when they are used to mass-produce pages without added value. None of the inventoried tools automates link building. The Next.js pSEO templates add nothing to our own JSON → GuidePage pipeline.

### Cited Findings
- **Scaled content abuse** means many pages made mainly to manipulate rankings, however they are produced. Examples include generative-AI pages that add no value, scraped or synonymized search results or feeds, stitched content, and spreading scaled content across multiple sites to hide it. — [Google spam policies](https://developers.google.com/search/docs/essentials/spam-policies)
- **Link spam** includes buying or selling links, excessive link exchanges, automated programs or services that create links, keyword-rich links in advertorials, guest posts and press releases, and widget or footer links. Paid links are fine with `rel="sponsored"` or `rel="nofollow"`. — [Google spam policies](https://developers.google.com/search/docs/essentials/spam-policies)
- **Automated queries**: scraping results for rank checking without express permission violates the spam policies and Google's ToS. — [Google spam policies](https://developers.google.com/search/docs/essentials/spam-policies)
- Google v. SerpApi (filed December 2025, DMCA anti-circumvention) is pending. Reddit is separately suing SerpApi and Perplexity. — [Search Engine Journal](https://www.searchenginejournal.com/google-files-dmca-suit-targeting-serpapis-serp-scraping/563847/); [MediaPost](https://www.mediapost.com/publications/article/414143/google-battles-serpapi-over-scraping.html)

**Programmatic SEO frameworks and Next.js SEO plumbing**

| Project | What it does | GitHub | Stars | Last commit / push | License | Cost | Verdict |
|---|---|---|---|---|---|---|---|
| pseo-next | Next 13 boilerplate: `/src/variant/[slug]` programmatic variants, Vercel deploy | [agamm/pseo-next](https://github.com/agamm/pseo-next) | 63 | push 2026-06-28 | none | Free | **Skip**: our guide pipeline is already more complete. No license |
| nextjs-programmatic-seo | Tutorial template | [codinginflow/nextjs-programmatic-seo](https://github.com/codinginflow/nextjs-programmatic-seo) | 47 | push 2025-02-05 | none | Free | **Skip**: stale |
| santifer-irepair | Astro pSEO site; description claims 15,500+ pages from an Airtable ERP and about 2,000 monthly clicks (unverified) | [santifer/santifer-irepair](https://github.com/santifer/santifer-irepair) | 41 | push 2026-08-27 | none | Free | **Skip** |
| local-business-builder | Claude Code plugin: local business sites with "80-100+ programmatic pages" (Astro) | [savvity/local-business-builder](https://github.com/savvity/local-business-builder) | 49 | push 2026-02-18 | none | Free | **Skip**: city-page spinning is the scaled-content pattern |
| programmatic-seo skill | Prompts for template + data page sets | [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 55,823 | push 2026-10-19 | MIT | Free | **Skip** |
| next-seo | SEO metadata/JSON-LD helpers for Next.js | [garmeeh/next-seo](https://github.com/garmeeh/next-seo) | 8,530 | push 2026-07-29 | MIT | Free; 1,956,410 npm/month | **Skip**: we use the App Router Metadata API |
| next-sitemap | Sitemap/robots generator | [iamvishnusankar/next-sitemap](https://github.com/iamvishnusankar/next-sitemap) | 3,748 | push 2026-05-13 | MIT | Free; 2,471,216 npm/month | **Skip**: `app/sitemap.ts` + `check:sitemap` already exist |
| schema-dts (Google) | TypeScript types for Schema.org JSON-LD (types only) | [google/schema-dts](https://github.com/google/schema-dts) | 1,251 | push 2026-10-02 | Apache-2.0 | Free; 11,897,799 npm/month | **Maybe later**: compile-time checking of our LocalBusiness/Service/FAQ/HowTo JSON-LD at zero runtime cost |

**Policy flags by tool (from the tables above)**
- **Depends on scraping Google (automated queries):**
  - Direct scraping: Serposcope, sundios/Google-rank-tracker, and SerpBear in proxy mode.
  - Via a SERP vendor: SerpBear in API mode, SerpTrail (SerpApi), SearchMirror (DataBlue), SEO Playground, OpenSEO, SEO Machine, Ryze and dataforseo-claude (DataForSEO), ContentSwift (SerpApi + rotating proxies), and the SERP-overlap clusterers.
  - advertools' Google SERP helper is believed to use the official Custom Search JSON API instead (not re-checked this session), which shuts down 2027-01-01.
  - — sources: the READMEs linked in sections 1–5; [Google spam policies](https://developers.google.com/search/docs/essentials/spam-policies)
- **Can mass-produce AI pages (scaled-content risk if used that way):** SEO Machine (`/write`, `/article`, `/publish-draft`), Claude Blog, the Marketing Skills `programmatic-seo` skill, local-business-builder (80–100+ pages), clawnify/OpenSEO (auto-publish). — READMEs linked above
- **Link schemes:** none of the inventoried tools builds links automatically. Lee Foot's "Wikipedia Citation Finder" only finds outreach targets. — [searchsolved README](https://github.com/searchsolved/search-solved-public-seo)

### Inferences
- Using GSC, GA4, Ahrefs and the bulk export keeps BuzzSkito on official or licensed data. Adopting any scraping-based tool would make us a customer of exactly the behaviour Google's policy names, and of a vendor class under litigation.
- Our scheduled release (about 40 pages a week, fact-check gate, real photos, sourced data) is the kind of programmatic publishing the scaled-content policy judges on value added, not on method. None of the pSEO templates adds a quality gate we lack. The relevant policy risk is velocity and sameness across state/province pages, which no GitHub tool measures.

### Gaps
- The current status of Google v. SerpApi (after the reported May 2026 response deadline) was not found.
- No source was found on whether Google acts against sites (as opposed to scrapers) that buy third-party rank tracking. The policy text addresses whoever sends the automated queries.
