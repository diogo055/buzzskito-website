# Getting cited and linked by ChatGPT and other AI assistants: evidence, myths, and buzzskito.ca readiness (research date 2026-10-21)

Scope note: every live check below was run on 2026-10-21 (Toronto evening, UTC-4) without logging in anywhere, without submitting any form or IndexNow ping, and without solving any CAPTCHA. Tools: curl from the owner's machine (Canadian IP), WebFetch, the Claude desktop browser pane (plain GET searches on bing.com only), the connected Ahrefs API (read-only) and the connected Google Search Console API (URL Inspection, read-only).

## 1. What do OpenAI, Perplexity, Google and Microsoft themselves say about appearing in AI answers?

### Takeaway
All four say the same basic thing. Let their search crawler in, make sure the page can be indexed, and put the content in plain HTML text. None of them asks for a special file or markup. Each separates its search crawler from its training crawler. Google says outright that no AI text files and no special schema are needed. Microsoft is the only one that recommends schema and gives detailed formatting advice. Since February 2026 Bing's guidelines name "GEO" (generative engine optimization) and treat engineered language and prompt injection as abuse.

### Cited Findings
**OpenAI (crawler docs, undated, read 2026-10-21)**
- "OAI-SearchBot is for search." Sites that are opted out of it "will not be shown in ChatGPT search answers", "though can still appear as navigational links". After a robots.txt change, "it can take ~24 hours" for OpenAI's systems to adjust. IP list: openai.com/searchbot.json. [OpenAI crawler docs](https://developers.openai.com/api/docs/bots)
- GPTBot is the training crawler. Disallowing it means content "should not be used in training generative AI foundation models". OpenAI says "Each setting is independent of the others" and gives the example of allowing OAI-SearchBot (to appear in search) while disallowing GPTBot. [OpenAI crawler docs](https://developers.openai.com/api/docs/bots)
- ChatGPT-User handles user-initiated fetches. "robots.txt rules may not apply" to it, and it "is not used to determine whether content may appear in Search". [OpenAI crawler docs](https://developers.openai.com/api/docs/bots)
- OAI-AdsBot only visits pages submitted as ChatGPT ad landing pages, and its data is not used for training. [OpenAI crawler docs](https://developers.openai.com/api/docs/bots)
- **Publishers FAQ (help article 12627856).** I could not read it directly: WebFetch got HTTP 403 on 2026-10-21, and the browser pane opened a different article. Per a search-engine summary of the live page on 2026-10-21:
  - Any public website can appear in ChatGPT search, and to appear in summaries and snippets a site must not block OAI-SearchBot.
  - A disallowed page can still show as a bare link and title if OpenAI finds the URL elsewhere. To prevent that, use a noindex meta tag, which the crawler must be allowed to fetch.
  - ChatGPT adds `utm_source=chatgpt.com` to referral URLs.
  - Training is controlled separately through GPTBot.
  
  [OpenAI Publishers and Developers FAQ](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq). Verify the wording on the live page before quoting it.
- **Shopping help article (per search summary, 2026-10-21).** Product results are "selected independently" by ChatGPT, are not ads and are not influenced by OpenAI partnerships. Seller lists are built from merchant and product metadata, supplied either by third-party providers or directly by merchants. Shopify merchants are connected automatically through Shopify Catalog, and other merchants can apply for direct product-feed access. Some products offer Instant Checkout. [OpenAI Help: shopping in ChatGPT](https://help.openai.com/en/articles/11128490)

**Google ("AI features and your website", last updated 2025-12-10)**
- "There are no additional requirements to appear in AI Overviews or AI Mode, nor other special optimizations necessary." To be shown as a supporting link, a page must be "indexed and eligible to be shown in Google Search with a snippet". [Google Search Central](https://developers.google.com/search/docs/appearance/ai-features)
- "You don't need to create new machine readable files, AI text files, or markup to appear in these features." "There's also no special schema.org structured data that you need to add." [Google Search Central](https://developers.google.com/search/docs/appearance/ai-features)
- Google's listed best practices:
  - "Ensuring that crawling is allowed in robots.txt, and by any CDN or hosting infrastructure".
  - Important content available "in textual form".
  - Structured data that matches the visible text.
  - Merchant Center and Business Profile information kept up to date.
  
  [Google Search Central](https://developers.google.com/search/docs/appearance/ai-features)
- The controls are nosnippet, data-nosnippet, max-snippet and noindex. Google-Extended limits training and grounding in other Google systems. AI Overviews and AI Mode traffic is counted inside Search Console's Performance report under the "Web" search type. Both features may use "query fan-out", meaning they issue several related searches across subtopics. [Google Search Central](https://developers.google.com/search/docs/appearance/ai-features)

**Microsoft (Bing and Copilot)**
- **October 8, 2025 guidance** (Krishna Madhavan, Bing). [Microsoft Advertising blog](https://about.ads.microsoft.com/en/blog/post/october-2025/optimizing-your-content-for-inclusion-in-ai-search-answers)
  - Assistants break content into pieces and assemble answers "often drawing from multiple sources". They favour content that is "fresh, authoritative, structured, and semantically clear".
  - What helps: headings that act as "chapter titles", and an H1 that matches the title. Schema "helps search engines and AI systems understand your content". Q&A pairs can be lifted "word for word". Lists and tables help, as does "self-contained phrasing".
  - What hurts: content that AI systems "may not render" because it is hidden, core facts kept in PDFs, text inside images, and walls of text.
  - The post does not mention IndexNow or Bing Webmaster Tools.
- **Bing Webmaster Guidelines rewrite (reported 2026-02-27).** [Search Engine Journal, 2026-02-27](https://searchenginejournal.com/bing-adds-geo-to-official-guidelines-expands-ai-abuse-definitions/568442/); [Bing Webmaster Guidelines](http://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a)
  - The guidelines now cover Copilot and grounding citations, name GEO, and say "GEO doesn't guarantee citations".
  - Advice for being chosen as a source: state facts directly, keep entity names consistent, give each URL one topic, and put essential information near the top. "Single-topic pages are more likely to be selected for grounding results."
  - New abuse wording: "Large-scale content generated without oversight, quality control, or editorial review" may be excluded from indexing. Keyword stuffing became "Keyword Stuffing and Artificially Engineered Language". A new section, "Prompt Injection and AI Manipulation", was added.
  - Meta directives: NOARCHIVE blocks use in Copilot answers, NOCACHE limits Copilot to the URL, title and snippet, and nosnippet or data-nosnippet may limit citation quality.
- Per a search summary of the guidelines, duplicate URLs "dilute signals" and reduce Bing's confidence in picking a URL for grounding. [Bing Webmaster Guidelines](http://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a)
- **AI Performance report, public preview from 2026-02-10.** It reports how often a site is cited in Copilot, in Bing AI summaries and in "select partner experiences". It shows the cited URLs and the "grounding queries" (phrases the AI searched with), and the data is a sample. [Bing Webmaster Blog, 2026-02-10](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview)
  - June 2026 added Intents, Topics, Citation Share and Compare. [Bing Search Blog, June 2026](https://blogs.bing.com/search/June-2026/New-AI-Visibility-Insights-in-Bing-Webmaster-Tools-Intents-Topics-Citation-Share-Compare)
  - Any site verified in Bing Webmaster Tools can use it. [Search Influence](https://www.searchinfluence.com/blog/bing-ai-performance-report-copilot-citations/)
  - Sources disagree on whether it shows clicks. Search Engine Land says it does not. [Search Engine Land](https://searchengineland.com/bing-webmaster-tools-testing-new-ai-performance-report-468039)
- **May 6, 2026 Bing post.** Grounding "builds on the same foundational infrastructure" as search. "Stale facts can directly produce wrong answers." Abstaining is valid when support is "missing, stale, or conflicting". [Bing Search Blog, 2026-05-06](https://blogs.bing.com/search/May-2026/Evolving-role-of-the-index-From-ranking-pages-to-supporting-answers)

**Perplexity (bots docs, undated, read 2026-10-21)**
- PerplexityBot "is designed to surface and link websites in search results on Perplexity" and "is not used to crawl content for AI foundation models". Perplexity recommends allowing it in robots.txt and allowing its IP ranges (perplexity.com/perplexitybot.json). [Perplexity docs](https://docs.perplexity.ai/guides/bots)
- Perplexity-User handles user requests and "generally ignores robots.txt rules". Changes can take "up to 24 hours" to take effect. Perplexity advises firewall operators to refresh its IP lists automatically. [Perplexity docs](https://docs.perplexity.ai/guides/bots)
- In August 2025 Cloudflare alleged that Perplexity crawled undeclared from IPs outside its published ranges. This is an allegation that Perplexity disputes. [GovInfoSecurity](https://www.govinfosecurity.com/perplexitys-bots-ignore-no-crawl-rules-says-cloudflare-a-29126)

### Inferences
- **Hard technical requirements.** Across all four platforms these are only: crawler access (robots.txt plus the CDN or firewall), being indexed, and content in HTML text. Everything beyond that is which page they choose among those already indexed.
- **Schema.** Microsoft and Google disagree: Microsoft says schema helps understanding, Google says none is needed. In practice keep schema accurate (for rich results and Bing), but do not plan on it as a way to earn citations (see section 2).
- **Risk for the god-build.** Bing's February 2026 wording on "large-scale content generated without oversight, quality control, or editorial review" deserves attention when publishing about 40 AI-drafted pages a week. The site's honest authorship notice, the second fact-check pass and the owner's `reviewedBy` reviews are the kind of evidence of oversight that wording points at. Bing does not say whether an AI-only fact check counts as "editorial review".

### Gaps
- I could not read the OpenAI Publishers FAQ and shopping help pages directly (403 to WebFetch). Their contents above come from search summaries of the live pages.
- I found no OpenAI statement either way on schema, llms.txt or "no special markup needed". The no-special-markup statement is explicit only from Google.
- I did not research Perplexity's publisher (revenue share) program.
- None of the platforms publish how they rank sources among pages that are already indexed.

## 2. What do independent studies (2025-2026) find predicts AI citations, and which "GEO" tactics have no evidence?

### Takeaway
**Better-supported predictors:**
- **Being found for the many sub-searches an assistant runs, not just the main query.** Overlap between citations and the top 10 for the original prompt is low: about 8% for ChatGPT, about 1 in 3 for Perplexity, and 38% for Google AI Overviews.
- **Freshness.** AI-cited pages are about 26% newer than Google's organic results, and LLM rankers favour recent dates.
- **Answers near the top of the page.** About 44% of ChatGPT citations come from the first 30% of the page.
- **Off-site brand mentions, especially on YouTube.** Correlations are 0.66 to 0.74, against 0.22 for backlinks.
- **Statistics, quotations and cited sources.** Up to +40%, but only in a lab benchmark.

**Weak or no evidence:**
- **llms.txt**: no measurable effect.
- **Schema as a citation lever**: the one controlled study found no ChatGPT lift.
- **Page speed and Core Web Vitals**: no relationship found.
- **Keyword stuffing**: does not help, and is now abuse under Bing's guidelines.

### Cited Findings
**Ranking vs. citation overlap (studies disagree widely; method drives the number)**
- **Ahrefs, 2025-08-11.** 15,000 long-tail prompts, data collected early July 2025. [Ahrefs](https://ahrefs.com/blog/ai-search-overlap/)
  - ChatGPT's in-text citations matched Google's top 10 for the same prompt 8.0% of the time and Bing's top 10 8.1%.
  - Nearly 1 in 3 Perplexity citations ranked in the top 10.
  - Average overlap across assistants was about 11%.
- **Seer Interactive, February 2025.** About 100 queries and 500+ citations. 87% of SearchGPT citations matched Bing's top 20 and 56% matched Google's. As described by [AI+Automation, 2026-04-05](https://aiplusautomation.com/blog/bing-replication-chatgpt-citations), which calls the 87% "misleading in how it has been repeated".
- **AI+Automation replication, 2026-04-05.** 400 queries through the OpenAI API (gpt-5.4-nano with web_search, not the consumer app). [AI+Automation](https://aiplusautomation.com/blog/bing-replication-chatgpt-citations)
  - 35% of queries triggered a search, with about 4.7 sub-queries each.
  - Citations matching Bing's top 20 for the original question only: 3.0%.
  - Matching Bing's top 20 once the sub-queries are included: 27.4%.
  - Matching Google's top 20 for the original question: 13.4%.
  - Matching neither: 68.0%.
- **CapConvert/Cortex (date not confirmed).** 1,000 citations across 200 queries; Bing top-3 rankings went with being cited about 80% of the time. Vendor study, method not checked. [CapConvert](https://www.capconvert.com/learn/blog/what-1000-chatgpt-citations-reveal-about-openai-s-hidden-ranking-signals)
- **Google AI Overviews.**
  - Ahrefs, March 2026 (863,000 keywords, about 4 million cited URLs): 38% of AI Overview citations came from top-10 pages, down from 76% in its July 2025 study. 31.2% came from positions 11-100 and 31% from outside the top 100. Ahrefs says part of the drop reflects better citation detection. [DesignRush](https://news.designrush.com/ai-overview-citations-drop-ahrefs); [ThriveStack](https://www.thrivestack.ai/research/ai-citation-sources-2026); [Quattr](https://www.quattr.com/blog/takeaway-from-ahrefs-ai-search-study)
  - Moz reportedly found 88% of AI Mode citations are not in the organic results for the same query, and BrightEdge puts overlap at about 17%. Both are secondary reports. [ThriveStack](https://www.thrivestack.ai/research/ai-citation-sources-2026); [Quattr](https://www.quattr.com/blog/takeaway-from-ahrefs-ai-search-study)

**Freshness**
- **Ahrefs, 2025-07-28** (16.975 million cited URLs). [Ahrefs](https://ahrefs.com/blog/do-ai-assistants-prefer-to-cite-fresh-content/)
  - AI-cited pages averaged 1,064 days old, against 1,432 days for organic results, about 25.7% "fresher".
  - ChatGPT was the most freshness-biased. AI Overviews and organic results cited the oldest pages.
  - Perplexity and ChatGPT order their in-text references newest to oldest.
- **Waseda/PolyU arXiv preprint, 2025-09-14.** Seven LLM rerankers were given fake publication dates on otherwise identical passages. "Fresh" passages were consistently promoted: the top 10's mean year moved forward by up to 4.78 years, and items jumped by as many as 95 ranks. Pairwise preferences between equally relevant passages flipped up to 25% of the time on average. A lab test with injected dates, not real web pages. [arXiv 2509.11353](https://arxiv.org/abs/2509.11353v1)
- Bing, 2026-05-06: "Stale facts can directly produce wrong answers." [Bing Search Blog](https://blogs.bing.com/search/May-2026/Evolving-role-of-the-index-From-ranking-pages-to-supporting-answers)

**Where on the page, and page structure**
- **Kevin Indig (Growth Memo, 2026, secondary reports).** About 44% of ChatGPT citations come from the first 30% of a page's text, 31.1% from the middle and 24.7% from the final third. Within a paragraph, the middle is cited most (53%). Reported sample sizes conflict (1.2 million results vs. 3 million responses). [Practical Ecommerce](https://www.practicalecommerce.com/studies-reveal-ai-citation-clues); [Scalevise](https://scalevise.com/resources/llm-citation-study-front-load-content/)
- A separate Indig analysis reportedly found about 30 domains capture 67% of ChatGPT citations within a topic. [Search Engine Land](https://searchengineland.com/chatgpt-citations-domains-study-472349) (not opened; secondary summary)
- Bing's 2026 guidelines: single-topic pages with essential information near the top are favoured for grounding. [SEJ, 2026-02-27](https://searchenginejournal.com/bing-adds-geo-to-official-guidelines-expands-ai-abuse-definitions/568442/)

**Statistics, quotations, source citations (lab evidence)**
- **"GEO: Generative Engine Optimization"** (Aggarwal et al., arXiv November 2023, KDD 2024). On the GEO-bench benchmark, the tested methods boosted source visibility "by up to 40%". Adding citations, quotations from relevant sources and statistics helped most. [arXiv 2311.09735](https://arxiv.org/pdf/2311.09735)
  - Per-method numbers in blogs conflict and were not checked against the paper's tables.
  - Blog summaries say keyword stuffing gave "little to no improvement". [Liner review](https://liner.com/review/geo-generative-engine-optimization)

**Off-site brand signals**
- **Ahrefs, 75,000 brands.**
  - May 2025: branded web mentions correlated 0.664 with AI Overview visibility, against 0.218 for backlinks.
  - December 2025 update: YouTube mentions correlated most strongly with AI visibility across ChatGPT, AI Mode and AI Overviews (about 0.737; YouTube mention impressions about 0.717). Branded web mentions still correlated 0.66-0.71.
  - Ahrefs warns that correlation is not causation.
  
  [Ahrefs](https://ahrefs.com/blog/ai-brand-visibility-correlations); [TheNextWeb](https://thenextweb.com/news/ahrefs-youtube-mentions-ai-visibility-brand-search)
- **Profound, August 2024 to June 2025** (680 million citations). Wikipedia was ChatGPT's top source at 7.8% of all citations, with Reddit at 1.8%. Reddit led Perplexity at 6.6%, with YouTube at 2.0%. The often-quoted "47.9% Wikipedia / 46.7% Reddit" figures are shares of each platform's top 10 sources, not of all citations. [Profound](https://www.tryprofound.com/blog/ai-platform-citation-patterns)

**Tactics with weak or no evidence**
- **llms.txt.**
  - SE Ranking (about 300,000 domains; about 10% have the file) found no measurable link between having llms.txt and citation rates, and removing the variable improved their model. [Search Engine Journal](https://www.searchenginejournal.com/llms-txt-shows-no-clear-effect-on-ai-citations-based-on-300k-domains/)
  - MaxAEO: 2,400 domains over 90 days showed 11.8% vs. 11.6% citation rates with and without the file. Vendor panel. [MaxAEO](https://maxaeo.ai/blog/does-llms-txt-work/)
  - Google: "You don't need to create new machine readable files, AI text files". [Google Search Central](https://developers.google.com/search/docs/appearance/ai-features)
- **Schema as a citation lever.**
  - Ahrefs controlled study (2026): 1,885 pages that added JSON-LD between August 2025 and March 2026, against 4,000 controls. [Ahrefs](https://ahrefs.com/blog/schema-ai-citations/)
    - ChatGPT citations rose 2.2% and AI Mode 2.4%, both statistically indistinguishable from zero. AI Overview citations fell 4.6%.
    - Limits: every page already had 100+ AI Overview citations, the window was 30 days, and only static-HTML schema was tested.
    - A searchVIU test cited by Ahrefs found that ChatGPT, Claude, Perplexity, Gemini and AI Mode ignored JSON-LD during live page fetches and read only visible HTML.
  - Correlational studies disagree: Semrush (304,805 URLs) reported +22%, and Search Atlas (5.5 million responses) found no effect. Both are secondary reports. [Analyzify](https://analyzify.com/hub/schema-markup-ai-citations-research); [CMSWire](https://www.cmswire.com/digital-marketing/does-structured-data-actually-improve-answer-engine-citations/)
- **Page speed / Core Web Vitals.** Insites correlated performance data for 10,000 US local businesses with ChatGPT and Perplexity outcomes and found "no meaningful relationship" (date not confirmed; single vendor). Claims that speed matters are unsourced vendor posts. [Insites](https://insites.com/blog/does-website-speed-matter-for-ai-search-we-tested-it-against-10000-sites/); [ThriveStack myth check](https://www.thrivestack.ai/citedby/aeo-geo-myths/crawlability-technical-signals/does-page-speed-affect-ai-citations-core-web-vitals-impact)
- **Keyword stuffing and engineered phrasing, prompt injection.** No benefit in the GEO benchmark, and named as abuse in Bing's February 2026 guidelines. [SEJ, 2026-02-27](https://searchenginejournal.com/bing-adds-geo-to-official-guidelines-expands-ai-abuse-definitions/568442/)

**Scale of the prize (context)**
- SE Ranking, 2026: AI platforms send 0.32% of all website traffic (0.24% in 2025, 0.02% in 2024). ChatGPT sends 74.78% of AI referral traffic. [SE Ranking](https://seranking.com/blog/ai-traffic-research-study/)
- Similarweb: ChatGPT's share of visits to AI chatbot sites fell from about 76% (June 2025) to about 53% (May 2026). [Similarweb](https://aisearch.similarweb.com/blog/gen-ai-stats/) (via search summary)
- Microsoft: AI referrals to top websites reached 1.13 billion visits in June 2025, up 357% year over year. [Search Engine Journal](https://www.searchenginejournal.com/microsoft-explains-how-to-optimize-content-for-ai-search-visibility/557893)

### Inferences
**Evidence-weighted list of what to do, strongest first:**
1. **Be retrievable everywhere the assistants look.** That means OAI-SearchBot, PerplexityBot and bingbot access, Bing indexing (Copilot, and part of ChatGPT's retrieval) and Google indexing (AI Overviews and AI Mode). This is a precondition, not a ranking factor.
2. **Rank for the sub-questions, not only the head term.** Fan-out searches are why citations overlap so little with the top 10 for the original prompt. One-page-per-question coverage (look-alikes, "X vs Y", signs, life stages, regional editions) fits how assistants decompose a question.
3. **Put a self-contained, factual answer near the top**, in a short paragraph, Q&A pair, list or table, and keep each URL to one topic.
4. **Show true freshness.** A visible updated date and accurate dateModified and lastmod on real updates. Do not bump dates without changing content: the recency bias is real, but Bing now treats manipulation as abuse, and the site's own `check:sitemap` rule forbids false dates.
5. **Use specific numbers, quotations and named sources** (CDC, state health departments, extension offices). The lab evidence is positive and it costs little, since the site already does it.
6. **Build off-site brand mentions**, especially YouTube and editorial mentions. This is the strongest correlation in the data, but correlational only.

**Do not spend effort on:** expanding or perfecting llms.txt, adding schema types specifically "for AI", speed work aimed at AI citations, or phrasing engineered for LLMs.

### Gaps
- I did not open Indig's original Growth Memo, Seer's original post or Ahrefs' March 2026 AI Overviews study; those numbers come from secondary write-ups.
- A reported collapse of ChatGPT's Reddit citation share (about 60% to 10%, mid-September 2025) appeared only in an unattributed secondary summary and is left out of the findings.
- A claim that 97% of llms.txt files got zero requests in May 2026 (attributed to Ahrefs) could not be traced to a primary URL.
- No study isolates the pest-control or home-and-garden vertical.

## 3. How important is Bing indexing for ChatGPT citations, what could our broken Bing ownership and IndexNow cost, and how is it fixed?

### Takeaway
- **Copilot:** Bing is its foundation.
- **ChatGPT:** Bing is only one input among several. Research from September 2026 shows ChatGPT blending OpenAI's own index ("Labrador") with Google, Microsoft and at least eight other providers. Measured overlap between ChatGPT citations and Bing results runs from 8% to 87% depending on method, with the larger, newer studies at the low end (8-27%).
- **Our evidence that Bing lags:** older buzzskito.ca pages are in Bing and even cited in Bing's AI answers. But two pages released on 2026-10-16 that Google had indexed by 2026-10-19 were not in Bing on 2026-10-21.
- **Cost:** the traffic at stake today is small, since AI referrals are about 0.3% of web traffic. But the fix is about 30 minutes of the owner's time, and it also unlocks Bing's AI Performance report, the only first-party AI-citation data available from any assistant.

### Cited Findings
**How ChatGPT retrieves (2025-2026)**
- **Peec research (September 2026).** Based on ChatGPT server-side events from 2026-05-21 to 2026-07-21. [Peec](https://docs.peec.ai/research/chatgpt-own-search-index-labrador)
  - A `result_source` field took four values: "Labrador" (OpenAI's own index) and three external scraping providers.
  - ChatGPT blends Labrador with Google, Microsoft and at least eight outside providers. No proportions are given.
  - It "still is not running on its own pipelines alone".
- Per the same Peec page, ChatGPT head Nick Turley testified in the Google antitrust case that OpenAI started building its own index in 2023 because of "significant quality issues" with non-Google search API partners. [Peec](https://docs.peec.ai/research/chatgpt-own-search-index-labrador)
- **Google results via SerpApi (August 2025).** The Information reported that OpenAI used Google results scraped through SerpApi for some ChatGPT answers. This was disputed, including by an Ahrefs analysis. [Search Engine Land](https://searchengineland.com/openai-chatgpt-serpapi-google-search-results-461226); [Search Engine World](https://www.searchengineworld.com/we-have-a-new-chapter-in-the-saga-of-openai-using-google-serps)
- **Shopping (Profound, data from June 2026).** Web-crawled product cards draw their details from live merchant sources "just under 25% of the time". The rest come from "ChatGPT's internal search and Google commercial indices, not Bing". [Profound, 2026-07-23](https://www.tryprofound.com/blog/chatgpt-shopping-end-to-end-breakdown)
- Overlap with Bing ranges from 8.1% (Ahrefs, Bing top 10, original prompt) through 27.4% (AI+Automation, Bing top 20 including sub-queries) to 87% (Seer, small commercial sample); see section 2. [Ahrefs](https://ahrefs.com/blog/ai-search-overlap/); [AI+Automation](https://aiplusautomation.com/blog/bing-replication-chatgpt-citations)

**The 403 error and Bing ownership**
- IndexNow's own response codes: 403 = "key not valid (e.g. key not found, file found but key not in the file)". 202 = "URL received. IndexNow key validation pending." 422 = URLs not belonging to the host. 429 = too many requests. [IndexNow documentation](https://www.indexnow.org/documentation)
- The protocol says participating engines automatically share submitted URLs with one another. [IndexNow documentation](https://www.indexnow.org/documentation)
- **Project note, 2026-09-14** (the memory file, not public). Every `www.bing.com/indexnow` and `api.indexnow.org` submission has returned 403 `UserForbiddedToAccessSite` since at least 2026-09-10, while Yandex returns 202. The key file was checked and is correct. The site has no `BingSiteAuth.xml` and no `msvalidate.01` meta tag. Source: `C:\Users\buzzs\.claude\projects\C--Users-buzzs-buzzskito-website\memory\reference_bing_indexnow_healthy.md`
- **Re-confirmed live, 2026-10-21:** `https://buzzskito.ca/BingSiteAuth.xml` returns 404, and the homepage has no `msvalidate.01` (nor any other verification meta tag). [buzzskito.ca](https://buzzskito.ca/BingSiteAuth.xml)
- **Bing on imported ownership.** Bing's post on importing from Google Search Console (2019-09-13, updated June 2025) says imported sites "will be automatically verified". It also says Bing "will periodically validate your site ownership status by syncing with your Google Search Console account", and "if access to your Google Search Console account is revoked, you will need to reconnect or verify your sites". [Bing Webmaster Blog](https://blogs.bing.com/webmaster/september-2019/Import-sites-from-Search-Console-to-Bing-Webmaster-Tools)
- **Community reports of this exact error (2025-2026):**
  - One owner whose Bing account was set up via Google Search did not get it working; the error went away after recreating the account with XML-file verification. [Microsoft Q&A](https://learn.microsoft.com/en-us/answers/questions/5825616/indexnow-submission-failed-responded-403-user-is-u)
  - Another confirmed the apex (non-www) key location and still got 403; the suggested remedy was generating a new key in Bing Webmaster Tools. [onlinefreetools devlog, 2026-08-08](https://onlinefreetools.org/devlogs/2026-08-08-18-07-bing-indexnow-apex-key-submit.html)
  - A site verified by CNAME was still refused, and the proposed fix was again a new key. [GitHub PR #300](https://github.com/randerson-23/agent-business/pull/300)
  - A Japanese write-up's title reports that 418 URLs sent via IndexNow produced 0 of 40 articles in Bing search (title only, not read). [AI時短ラボ](https://www.ai-jitan-hub.com/news/bing-zero-articles-indexnow-not-enough)

**Verification methods (official and secondary)**
- Bing offers four verification methods: an XML file, a meta tag, a CNAME record in DNS, and Domain Connect (automatic CNAME, if the DNS provider supports it). Importing from Search Console is a fifth route. [Search Engine Land (2019)](https://searchengineland.com/bing-webmaster-tools-adds-domain-connect-verification-integration-320898); [Bing Webmaster Blog](https://blogs.bing.com/webmaster/september-2019/Import-sites-from-Search-Console-to-Bing-Webmaster-Tools)
- The meta tag is named `msvalidate.01`. [AIOSEO docs](https://aioseo.com/documentation/bing-webmaster-verification)
- The CNAME method: the host is the code Bing generates, pointing to `verify.bing.com`. A sitemap URL can be entered during setup or added later. [Promodo, 2026](https://www.promodo.com/blog/how-to-add-website-to-bing-webmaster-tools)

**What our live checks show about Bing vs Google for new pages (2026-10-21)**
- **Google.** URL Inspection API on `sc-domain:buzzskito.ca`, read-only. [Search Console URL Inspection API](https://developers.google.com/webmaster-tools/v1/urlInspection.index/inspect)
  - `/blog/ticks-in-alabama`, `/blog/ticks-in-illinois` and `/blog/ticks-in-west-virginia` (released 2026-10-16) are "Submitted and indexed", last crawled 2026-10-19.
  - `/blog/how-to-get-rid-of-silverfish` (released 2026-10-20) is "URL is unknown to Google".
  - `/blog/red-ants` is indexed, crawled 2026-10-11.
- **Bing** (plain searches in the Claude desktop browser, 2026-10-21).
  - `"Ticks in Alabama" buzzskito` and `"Ticks in Illinois" buzzskito` returned no buzzskito.ca result. Bing showed tickzone.app, alabamapublichealth.gov and birdwatchinghq.com, marked "Missing: buzzskito". For Illinois, Bing's AI answer cited tickzone.app and tickalmanac.com. [Bing search](https://www.bing.com/search?q=%22Ticks+in+Alabama%22+buzzskito)
  - `"How to Get Rid of Silverfish" buzzskito` returned the July Canadian twin `/blog/how-to-get-rid-of-silverfish-canada` (Jul 21, 2026), not the new US page. [Bing search](https://www.bing.com/search?q=%22How+to+Get+Rid+of+Silverfish%22+buzzskito)
- **Ahrefs.** Copilot, which grounds on Bing, cites buzzskito.ca 93 times across 49 distinct pages in Ahrefs' prompt sample. Queried 2026-10-21 via the Ahrefs API `site-explorer-ai-responses-count`. [Ahrefs API docs](https://docs.ahrefs.com/docs/api/reference/introduction)

### Inferences
**What the broken Bing set-up probably costs**
- **Copilot and Bing's AI answers:** new pages appear later, or not at all, until Bingbot finds them through the sitemap or links. In our sample, the 2026-10-16 tick pages were missing from Bing 5 days after release, while Google had them in 3.
- **ChatGPT:** the effect is diluted, because Bing is one of several retrieval sources. Recent studies put Bing-matched citations at 8-27%.
- **Freshness timing:** ChatGPT is the most freshness-biased assistant, so a page that is invisible to Bing during its first weeks loses some of its best window.
- **Order of magnitude:** if buzzskito.ca received AI referrals at the 2026 web average (0.32% of visits), then at the 2027 goal of about 48,000 to 63,000 Google visitors a month, AI referrals would be roughly 150 to 200 visits a month. Only part of that depends on Bing. So the direct loss is small, likely tens of visits a month today. This is a rough inference, not a measurement.
- **What it costs most:** measurement. Without native verification there is no access to Bing's AI Performance report, which shows Copilot citations, cited URLs and grounding queries.

**Fix steps for the owner** (not executed; the owner must log in to Bing Webmaster Tools):
1. **Look before changing anything.** In Bing Webmaster Tools → My Sites, confirm whether `https://buzzskito.ca/` is listed. Check:
   - which verification method it shows, and any site-level message;
   - whether the property is apex https or `www.`/`http://` (everything is submitted as apex https; `www` 308-redirects to apex);
   - the IndexNow page, for the date of the last accepted submission.
2. **Add a native verification method next to the Search Console import.** This stops ownership from lapsing whenever the Google link breaks. Pick one:
   - **XML file (simplest on this stack):** download `BingSiteAuth.xml` from Bing Webmaster Tools, put it in the repo's `public/` folder so it serves at `https://buzzskito.ca/BingSiteAuth.xml`, deploy, then press Verify. The middleware already skips `.xml` files, so the country block cannot interfere (`middleware.ts` matcher).
   - **Meta tag:** add `<meta name="msvalidate.01" content="CODE">` to the homepage `<head>`, through the root layout's metadata in `app/layout.tsx`.
   - **DNS:** add a CNAME record whose name is the code Bing gives and whose value is `verify.bing.com`, or use Domain Connect if the DNS host supports it.
3. **Submit the sitemap** under Sitemaps: `https://buzzskito.ca/sitemap.xml` (712 URLs, 2026-10-21).
4. **Re-test IndexNow once verification shows as OK.** One normal deploy is enough; do not loop. Watch the deploy log for 200/202 from Bing, and Bing Webmaster Tools → IndexNow for new submission dates.
5. **If Bing still returns 403 after native verification**, community reports say generating a new IndexNow key in Bing Webmaster Tools and hosting the new key file fixed some cases. **Conflict to flag:** the project's own note says not to rotate the key, delete or recreate the account, or retry in a loop. Treat a new key as a last resort taken after step 2, and Bing Webmaster Support as the documented route for this specific error.
6. **Code improvements from the project note.** These are small and optional:
   - log Bing's `errorCode` in `app/api/indexnow/route.ts`;
   - submit only changed URLs on each deploy, not the whole sitemap. The IndexNow docs describe submitting URLs that were "added, updated, or deleted".
7. **Afterwards**, open Bing Webmaster Tools → AI Performance and record Copilot citations monthly next to the goal tracker.

### Gaps
- No public tool gives a reliable count of Bing-indexed pages (see section 4); the owner can see it inside Bing Webmaster Tools.
- I could not verify Bing Webmaster Tools' current state (verification status, property form, the IndexNow log) without logging in.
- No source quantifies Bing's share of ChatGPT's retrieval in 2026. Peec names Microsoft as an input but gives no proportions.
- The Bing check used only 9 pages, and one result is unreliable because the browser tab was on another page when it was read. The lag finding is directional.

## 4. Live readiness check of buzzskito.ca (robots.txt, llms.txt, crawler access, Bing index)

### Takeaway
Technically the site is ready: every AI search crawler is allowed and gets HTTP 200, pages are fully server-rendered text with sources, dates, tables and FAQs, and nothing stops Copilot from quoting them. Ahrefs already records 3,959 AI citations of 321 buzzskito.ca pages. There are five issues:
1. The brief is wrong about robots.txt: GPTBot and CCBot have been allowed since 2026-07-16.
2. Bing ownership has no native verification, and new pages lag in Bing.
3. Bing's local panel shows "Milton · Open 24 hours".
4. Bing still lists at least one redirected URL.
5. Bing's `site:` operator gave no usable count.

### Cited Findings
**robots.txt (live, 2026-10-21; HTTP 200, 383 bytes, served from Vercel cache)**
- Everyone may crawl everything except `/api/`.
- These are each explicitly allowed: OAI-SearchBot, ChatGPT-User, PerplexityBot, ClaudeBot, Google-Extended, Applebot-Extended, **GPTBot and CCBot**.
- The file declares `Sitemap: https://buzzskito.ca/sitemap.xml` and also carries a `Host:` line.
- No bingbot-specific rule exists; bingbot falls under the allow-all rule.

[buzzskito.ca/robots.txt](https://buzzskito.ca/robots.txt)
- **The brief and CLAUDE.md are out of date.** They say robots.txt "blocks GPTBot and CCBot". The source `app/robots.ts` allows both, since commit `f9238b0c` on 2026-07-16: "feat(ai): allow GPTBot + CCBot training crawlers (owner decision)". Source: `git log -- app/robots.ts` in `C:\Users\buzzs\buzzskito-website`.
- Per OpenAI, the GPTBot setting does not affect ChatGPT search inclusion ("Each setting is independent"); it only governs training use. [OpenAI crawler docs](https://developers.openai.com/api/docs/bots)

**Crawler access and rendering (curl, 2026-10-21, sample `/blog/tick-prevention-yard-ontario-safe-for-kids`)**
- These user agents all got HTTP 200 with the full 220 KB page in 0.18-0.45 s: OAI-SearchBot/1.3, ChatGPT-User/1.0, PerplexityBot/1.0, bingbot/2.0, ClaudeBot/1.0 and GPTBot/1.3. [buzzskito.ca sample](https://buzzskito.ca/blog/tick-prevention-yard-ontario-safe-for-kids)
- The raw HTML, before any JavaScript runs, holds 3,812 words of visible text. It has 16 JSON-LD blocks (FAQ Question/Answer, NewsArticle, HowToStep, Organization, LocalBusiness, Person and others), a self-referencing canonical, `index, follow`, and dateModified equal to datePublished (2026-04-07). [buzzskito.ca sample](https://buzzskito.ca/blog/tick-prevention-yard-ontario-safe-for-kids)
- **US guide `/blog/ticks-in-alabama`:** 7,457 words, 18 external source domains (cdc.gov, alabamapublichealth.gov, agi.alabama.gov, aces.edu, southalabama.edu and others), 8 tables, 15 H2s and 10 images. The visible "Published by BuzzSkito … Published October 16" sits at about 8% of the text; the "Sources" list at about 87%. [buzzskito.ca](https://buzzskito.ca/blog/ticks-in-alabama)
- **Canadian product page `/blog/bed-bug-spray-canada`:** 8,036 words, 17 external domains (EPA, CDC, NPIC, PubMed, canada.ca and others). A visible "Updated" appears at about 2% of the text. [buzzskito.ca](https://buzzskito.ca/blog/bed-bug-spray-canada)
- **Robots meta** on guides: `index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1`. There is no `noarchive`, `nocache`, `nosnippet` or `data-nosnippet` on the guide, the product page or the homepage, and no X-Robots-Tag header. So nothing blocks Copilot or AI Overviews from quoting the pages. [buzzskito.ca](https://buzzskito.ca/blog/ticks-in-alabama)
- **Country block** (`middleware.ts`, Oct 19, 2026). Visitors from Singapore and China get a 403 unless their user agent matches a regex that includes `bot|crawl|…|bing|…|preview`. That passes OAI-SearchBot, GPTBot, PerplexityBot, ClaudeBot, bingbot, and ChatGPT-User, whose user agent contains "openai.com/bot". A user-fetch agent whose string contains none of those words (for example a bare "Perplexity-User") would be blocked, but only if it came from a Singapore or China IP. Source: `C:\Users\buzzs\buzzskito-website\middleware.ts` lines 9-14.

**llms.txt (live, 2026-10-21)**
- HTTP 200, `text/plain`, 44,309 bytes, 542 lines. It holds company facts, prices, guarantees and licence number, plus 388 unique buzzskito.ca URLs; the sitemap has 712. [buzzskito.ca/llms.txt](https://buzzskito.ca/llms.txt)

**Sitemap (live, 2026-10-21)**
- 712 URLs, all with lastmod. By month: March 5, April 41, May 9, June 19, July 348, August 46, September 5, October 239. [buzzskito.ca/sitemap.xml](https://buzzskito.ca/sitemap.xml)

**Bing verification (live, 2026-10-21)**
- `/BingSiteAuth.xml` returns 404, and the homepage has no `msvalidate.01` meta tag. [buzzskito.ca/BingSiteAuth.xml](https://buzzskito.ca/BingSiteAuth.xml)

**Bing index (2026-10-21)**
- **The `site:` operator could not be used.** For `site:buzzskito.ca`, `site:buzzskito.ca/blog`, `site:buzzskito.ca/learn` and `site:buzzskito.ca mosquito`, Bing returned unrelated sites in every client I tried:
  - curl: answers.microsoft.com, support.google.com, rbcroyalbank.com, Wikipedia, with nonsense counts ("About 50", "10,600", "109,000").
  - WebFetch: chefswarehouse.com, "About 95 results".
  - The desktop browser: Halton Healthcare, "About 14,100 results".
  - A control query, `site:orkincanada.ca`, hit a Bing CAPTCHA ("One last step"), which was not solved.
  - Yahoo (Bing-powered) returned HTTP 500.
  
  [Bing](https://www.bing.com/search?q=site%3Abuzzskito.ca)
- **DuckDuckGo** (`site:buzzskito.ca`, HTML version) listed 10 buzzskito.ca pages: the homepage, /mosquito-control-ontario, /mosquito-control-pricing, /buzzskito-2026-gta-mosquito-tick-report, /pest-control-brampton, /pest-control-gta, /free-yard-assessment, /mosquito-control-cost, /mosquito-control and /contact. [DuckDuckGo](https://html.duckduckgo.com/html/?q=site%3Abuzzskito.ca)
- **Plain Bing searches show established pages indexed.**
  - "buzzskito" (About 4,760 results) shows the homepage first with sitelinks (Facts, Mosquito Info, FAQ, Hamilton Mosquito Spray, Mosquito Control Pricing Ontario 2026), then /pest-control-gta, /mosquito-control-pricing and /mosquito-control, plus Yelp, YouTube, Instagram and Facebook profiles. [Bing](https://www.bing.com/search?q=buzzskito)
  - "Am I a Mosquito Magnet buzzskito": `/am-i-a-mosquito-magnet` is #1, and `/blog/what-attracts-mosquitoes-to-you` also appears. [Bing](https://www.bing.com/search?q=Am+I+a+Mosquito+Magnet+buzzskito)
  - "Mosquito Control Roseland buzzskito": `/roseland-mosquito-control` is #1, with `/mosquito-control-ontario`. [Bing](https://www.bing.com/search?q=Mosquito+Control+Roseland+buzzskito)
- **Bing's own AI answers already cite buzzskito.ca.**
  - "Tick Identification Chart buzzskito": the generative answer is titled "Tick Identification Chart — BuzzSkito Guide" and cites buzzskito.ca. [Bing](https://www.bing.com/search?q=%22Tick+Identification+Chart%22+buzzskito)
  - The bed bug query: the answer cites `/blog/bed-bug-spray-canada` and `/blog/best-bed-bug-spray-for-mattress-canada`. [Bing](https://www.bing.com/search?q=Best+Bed+Bug+Spray+Killer+Canada+2026+PMRA+buzzskito)
  - The red-ants query: the answer cites `/learn/ants`, not `/blog/red-ants`. [Bing](https://www.bing.com/search?q=Red+Ants+fire+ant+or+look-alike+buzzskito)
- **New pages missing.** The 2026-10-16 tick pages for Alabama and Illinois were not found, and the 2026-10-20 silverfish page was not found (Google also does not know it yet); see section 3.
- **Bing's local panel and map pack** read "BuzzSkito Mosquito Control · Pest control service · Milton · Open 24 hours · (289) 216-5030". The site's own llms.txt gives hours of Mon-Fri 8am-6pm and Sat 9am-4pm and a Mississauga base. [Bing](https://www.bing.com/search?q=buzzskito); [buzzskito.ca/llms.txt](https://buzzskito.ca/llms.txt)
- **A redirected URL still listed.** Bing lists `buzzskito.ca/mississauga-mosquito`, titled "Mississauga Mosquito Control 2026 · From $99", but that URL 308-redirects to `/mississauga-mosquito-control` (curl, 2026-10-21). [Bing](https://www.bing.com/search?q=buzzskito.ca+mosquito+control+Mississauga)

**AI citations already earned (Ahrefs API, `site-explorer-ai-responses-count`, queried 2026-10-21)**
- buzzskito.ca, citations / distinct pages:

  | Platform | Citations | Pages |
  |---|---|---|
  | All platforms | 3,959 | 321 |
  | AI Overviews (keyword dataset) | 2,737 | 262 |
  | Perplexity | 471 | 133 |
  | Gemini | 222 | 81 |
  | AI Overviews (prompt dataset) | 220 | 89 |
  | ChatGPT | 118 | 64 |
  | AI Mode | 97 | 50 |
  | Copilot | 93 | 49 |
  | Grok | 0 | 0 |

  [Ahrefs API docs](https://docs.ahrefs.com/docs/api/reference/introduction)
- Comparison: bettertermite.com, one of the comparables in the god-build plan:

  | Platform | Citations | Pages |
  |---|---|---|
  | All platforms | 20,383 | 776 |
  | AI Overviews (keyword dataset) | 18,481 | 731 |
  | Perplexity | 829 | 160 |
  | ChatGPT | 57 | 36 |
  | Copilot | 29 | 21 |

  [Ahrefs API docs](https://docs.ahrefs.com/docs/api/reference/introduction)
- The Ahrefs plan does not include the Brand Radar add-ons. Every AI-response lookup returned "Missing addon: Brand Radar" for ChatGPT, Perplexity, Copilot and AI Overviews, so per-prompt citation lists could not be pulled. [Ahrefs API docs](https://docs.ahrefs.com/docs/api/reference/introduction)

### Inferences
**Readiness scorecard as of 2026-10-21**

| Area | Status | Notes |
|---|---|---|
| Crawler access | Pass | |
| Server-rendered text | Pass | |
| Snippet and quote permissions | Pass | |
| Sources and statistics on page | Pass | |
| Visible dates | Pass | |
| FAQ and table structure | Pass | |
| Schema | Present | Not a citation lever |
| llms.txt | Present | No proven effect; low priority. If kept, its facts must stay consistent with the pages. |
| Bing native verification | **Fail** | |
| Bing freshness for new pages | **Lagging** | |
| Bing Places / local data | **Wrong hours shown** | Owner should check Bing Places, which feeds Bing's local panel |
| Off-site mentions (YouTube, Reddit, editorial) | Not audited | |

- **Where the gap is.** ChatGPT and Copilot already cite buzzskito.ca about as often as bettertermite.com in Ahrefs' sample, or more. bettertermite.com leads by about 7x on AI Overview keyword citations, which follow Google rankings. So the biggest remaining citation gap is Google ranking and authority, not AI-specific formatting.
- **Front-loading.** On the US guides, the source list sits at the very end (about 87% of the text). That is fine for credibility. Given the "first 30%" finding, the key facts and numbers should also appear in the opening quick-answer and quick-ID sections, which is what the guide template already does.

### Gaps
- No Bing indexed-page count could be obtained from public tools. The best floor is the 49 distinct pages Copilot cites in Ahrefs' sample.
- Reddit and YouTube brand-mention volume for BuzzSkito was not measured.
- I did not check whether Bing's map pack draws on Bing Places, or how the "Open 24 hours" value got there.
- ChatGPT referral volume for buzzskito.ca was not pulled. GA4 is readable only in the owner's Chrome; filter on `utm_source=chatgpt.com`. The Ahrefs Web Analytics API needs a numeric project id that was not found in the repo (`app/layout.tsx` has only the script key).

## 5. For shopping-type questions in our niche, what kinds of sources do ChatGPT and other assistants cite?

### Takeaway
Across 2026 studies, ChatGPT's shopping answers draw on:
- **Earned media** (publisher reviews and "best X" lists): about 41% of citations.
- **Retailers:** about 37%.
- **User-generated content:** about 19%. Reddit alone accounts for about a third of shopping citations in another study.
- **Brand sites:** only about 3%.

Product cards are built mostly from crawled merchant product pages and Google commercial data, not from affiliate pages. Amazon has blocked OpenAI's search and user agents since November 2025.

In our own niche, Bing's generative answers (checked 2026-10-21) cite home-and-garden publishers (This Old House, Bob Vila, Business Insider, Healthline, wikiHow, PestSource) and one pest-company blog. For a commercial query like "best mosquito trap", Bing showed an Amazon.ca and Home Depot shopping carousel instead. I could not run ChatGPT itself under the constraints.

### Cited Findings
**Published studies (2026)**
- **Azoma**, millions of ChatGPT shopping citations, Q2 2026. [GlobeNewswire / Azoma, 2026-08-26](https://www.globenewswire.com/news-release/2026/08/26/3351631/0/en/what-sources-does-chatgpt-cite-for-products-azoma-publishes-the-data-and-explains-how-brands-get-recommended.html)
  - Source mix: "41% earned media, 37% retailer, 19% UGC, 3% brand.com".
  - The shopping module activates on "roughly one in seven ChatGPT queries".
  - "Walmart consistently appears as the top buy-link destination, with Target behind it."
  - ChatGPT's sponsored ad units "sit separate from the organic answer and do not influence it".
  - Vendor study.
- **Profound** (2026-07-23; data June 18-25, 2026; 201,137 prompt runs; 812,190 product cards; about 3.3 million citations). [Profound](https://www.tryprofound.com/blog/chatgpt-shopping-end-to-end-breakdown)
  - "Reddit is by far the most indexed domain, covering for ~1/3 of all shopping citations."
  - 87.3% of product cards come from web crawl and 12.7% from merchant feeds.
  - Card data comes from live merchant sources "just under 25%" of the time; the rest from ChatGPT's internal search and Google commercial indices, "not Bing".
  - Top-ranked cards had a median of 787 reviews, against 352 for rank 4 and below.
  - Affiliate review sites were not analysed as a separate type.
- **Jeff Oxford study** (2026, about 20,000 responses; via search summary, as Search Engine Land showed a bot check). ChatGPT's product recommendations changed 80.2% when search was enabled. The correlation between how often a product is mentioned in cited sources and how often it is recommended was 0.4 (Pearson). [Search Engine Land](https://searchengineland.com/chatgpt-product-recommendations-change-search-study-480463)
- **cloro** (3,300 product-intent prompts, date not confirmed). ChatGPT showed a product card on 87% of prompts, sourced from Reddit and RTINGS rather than brand sites. Secondary summary. [cloro](https://cloro.dev/blog/ai-shopping-chatgpt-recommends/)
- **Precis** (vendor, date not confirmed). Claims ChatGPT's product carousels pull from Google Shopping's top 40 organic results and re-rank them. This conflicts in emphasis with Profound. [Precis](https://www.precis.com/resources/how-chatgpt-shops-what-we-found-why-it-matters-and-what-to-do-about-it)
- **Academic audit** (arXiv 2609.18729, September 2026; via search summary). ChatGPT expressed a first-person product preference in 79% of product-recommending answers, against 7% for Gemini and 2% for AI Overviews. ChatGPT and Gemini shared only 5.4% of displayed domains for the same query. [arXiv 2609.18729](https://arxiv.org/pdf/2609.18729)
- **Amazon's robots.txt.** In November 2025 Amazon added disallow rules for OAI-SearchBot and ChatGPT-User. In August 2025 it added bots from Meta, Google, Huawei, Mistral and others. [Modern Retail, 2025-11-21](https://www.modernretail.co/technology/amazon-quietly-blocks-more-of-openais-chatgpt-web-crawlers-from-accessing-its-site/); [Digiday](https://digiday.com/media-buying/amazon-quietly-blocks-more-of-openais-chatgpt-web-crawlers-from-accessing-its-site/); [Modern Retail, 2025-08-21](https://www.modernretail.co/technology/amazon-expands-its-fight-to-keep-ai-bots-off-its-e-commerce-site/)
- **OpenAI's own statement.** Product results are selected independently and are not ads. Merchant data comes from third-party providers or direct feeds. [OpenAI Help](https://help.openai.com/en/articles/11128490)

**Reproducible niche examples: Bing generative answers, 2026-10-21, desktop browser, location shown by Bing as Brampton, Ontario**
- **"best roach killer":**
  - thisoldhouse.com/pest-control/best-roach-killer
  - bcpestcontrol.com/best-roach-killers-on-the-market/ (a pest-control company blog)
  - businessinsider.com/guides/home/best-roach-killer
  - bobvila.com/articles/best-roach-killer/
  
  [Bing](https://www.bing.com/search?q=best+roach+killer)
- **"how to get rid of mice":**
  - pestsource.com/mouse/control/
  - wikihow.com/Get-Rid-of-Mice-Naturally
  - healthline.com/health/how-to-get-rid-of-mice
  - bobvila.com/articles/how-to-get-rid-of-mice/
  
  [Bing](https://www.bing.com/search?q=how+to+get+rid+of+mice)
- **"best mosquito trap":** a sponsored shopping carousel at the top (Mosquito Magnet, Bite Shield, Mega-Catch, Flowtron and others, mostly Amazon.ca listings, one Home Depot Canada). No AI answer sources were found on the page. [Bing](https://www.bing.com/search?q=best+mosquito+trap)
- **Commercial query with our brand added** ("Best Bed Bug Spray Killer Canada 2026 PMRA buzzskito"): the answer cited buzzskito.ca bed bug pages. This is brand-biased and not a fair test of unbranded visibility. [Bing](https://www.bing.com/search?q=Best+Bed+Bug+Spray+Killer+Canada+2026+PMRA+buzzskito)

### Inferences
- **We fit the "earned media" slot.** That is the share ChatGPT draws from most (about 41%), but the cited publishers in our niche are large home brands (This Old House, Bob Vila, Business Insider) that usually claim hands-on testing.
- **Testing claims are off the table.** buzzskito.ca's guard (`check:guides`) forbids testing claims, so differentiation has to come from what those publishers lack:
  - Canadian legality (PMRA registration, products not legal in Canada);
  - label and active-ingredient facts;
  - cited government and extension data;
  - regional editions.
  
  Each of those is the kind of "stated directly, single-topic, sourced" content Bing's guidelines and the GEO paper favour.
- **Product cards will not come from affiliate pages.** Their details come from merchant pages and feeds, so an affiliate page's realistic win is a text citation that sends a reader to the page, where the Amazon buttons are. The ChatGPT buy links themselves go to merchants (Walmart, then Target), not to affiliate links.
- **Amazon's block** on OpenAI's search agent means ChatGPT cannot read Amazon product pages directly. Publisher pages that summarise Amazon-sold products are one of the few ways those products' details reach ChatGPT's text answers. This is a plausible opening, but untested.
- **Reddit's share** (about a third of shopping citations) and YouTube's correlation with AI visibility suggest that genuine participation (answering in r/pestcontrol-type communities, short YouTube explainers) could matter more for shopping prompts than more on-page optimisation. Astroturfing breaks Reddit's rules; this is not a recommendation to post promotional content.

### Gaps
- ChatGPT itself was not queried: entering prompts counts as submitting a form under this task's constraints, and Ahrefs' ChatGPT Brand Radar add-on is not on the plan. To reproduce, run "best mosquito trap", "best roach killer" and "how to get rid of mice" in ChatGPT with search on (logged out, Canada and US) and log the cited domains. Alternatively, buy the Brand Radar ChatGPT add-on and query questions containing those phrases.
- No published study breaks down shopping citations for pest-control products specifically, or for Canada.
- I found no data on whether ChatGPT's shopping module is active for Canadian users, or which merchants it links in Canada.
- The Search Engine Land (Oxford) and cloro findings were captured from search summaries, not read in full. Search Engine Land showed a Cloudflare bot check, which I did not solve.
