# Where Google clicks are going at the end of 2026, and whether image and visual search clicks are safer from AI answers

Grades, as in the Oct 30 notes: **[G]** Google source I read directly. **[G-via]** a Google statement read through a secondary report. **[D]** a named study or person with data. **[O]** a named person's opinion. **[F]** forum report. **[U]** untraceable, vendor-only, or seen only as a search summary or title. **[Project]** this site's own measurement or research file. Every figure carries the date of its data and of its publication where known.

This file adds to `research_notes/Google Images traffic growth plan/what_practitioners_and_google_say.md` (Oct 30, 2026) and does not repeat it. Where I lean on it, I say so. Limits: Search Engine Land returned HTTP 403 again. Growth Memo's 2027 workbook and Datos's Q2 2026 report are gated. One PDF (UC Davis) downloaded but would not render, and the brief allows PDFs through WebFetch only, so I went no further with it. I did not open Google results pages myself (bot check; brief), so the live results-page evidence here is the Oct 29-30 teardown in this repo. Direct quotes are kept to one; everything else is paraphrased.

## 1. What do the newest measured studies show about click loss from AI Overviews and AI Mode, and which query and page types still send clicks?

### Takeaway
Every independent 2026 measurement finds large click losses where AI answers appear. A randomized experiment (Jan-Feb 2026) found about 40% fewer outbound organic clicks. Ahrefs' Search Console aggregate (Dec 2025) found 58% less at position 1. Seer's 53-brand data (2025) found 38-72% fewer clicks per impression on informational queries. AI Mode is worse again, at 18.8 points of click-through in an Aug 2026 experiment. Publisher networks show the loss speeding up, not flattening: Chartbeat's Google Search referrals fell 21.9% and then 40.2% year on year to July 2026. The loss sits in informational queries. Navigational, transactional, shopping and brand-cited results hold up best. Google says click volume is stable but has never published the data.

### Cited Findings
**Randomized experiments (the strongest evidence)**
- [D] Agarwal (Indian School of Business) and Sen (Carnegie Mellon), SSRN working paper, first posted Apr 3, 2026 and revised Jun 17, 2026. Sample: 1,065 US desktop Chrome users recruited on Prolific, Jan 7 to Feb 10, 2026, 68,089 searches. An AI Overview appeared on about 41% of queries. When one appeared, outbound organic clicks fell 39.8% and zero-click searches rose 34.5%, while sponsored clicks did not change measurably. The effect was large and significant on informational queries (71% of searches). It was not distinguishable from zero on navigational (18%) or transactional (12%) ones. The AI Mode arm is exploratory because of heavy attrition, and image searches are not addressed — [PPC Land](https://ppc.land/researchers-find-google-ai-overviews-cut-publisher-clicks-39-8/)
  - An earlier version was reported as -38%, with zero-click going from 54% to 72% — [Search Engine Journal](https://www.searchenginejournal.com/ai-overviews-cut-organic-clicks-38-field-study-finds/573145/)
- [D] Penn and Northeastern researchers, arXiv 2608.18352, Aug 2026, preregistered, about 1,100 US adults. Being assigned to AI Mode cut external click-through by 18.8 percentage points. Hiding AI Overviews raised it by 8.8 points; a secondary summary gives a 95% CI of 2.3-15.3, which I did not check against the paper — [arXiv](https://arxiv.org/abs/2608.18352); [Techwyse](https://www.techwyse.com/news/search-seo/google-ai-mode-reduces-publisher-clicks-study-2026)
  - The Oct 30 notes record that the no-AI arm hid AI Overviews in only 51.1% of cases, so the true effect is probably larger — [Oct 30 notes](C:/Users/buzzs/buzzskito-website/research_notes/Google%20Images%20traffic%20growth%20plan/what_practitioners_and_google_say.md)

**Observational panels**
- [D] Chapekis, Lieb, Shah and Smith, arXiv 2608.04831, submitted Aug 5, 2026 and presented at IC2S2 2026. One month of browsing by 900 US adults — [arXiv](https://arxiv.org/abs/2608.04831)
  - Clicks on sources cited in an AI Overview happened in about 1% of overview visits.
  - Overviews went with fewer clicks and more sessions ending, which held after controlling for panelist and query attributes.
  - Overviews were more likely on longer queries, queries starting with a question word, and queries with both a noun and a verb.
  - Search summaries put the raw rates at 15% of visits with a click without an overview against 8% with one — [arXiv HTML, search summary](https://arxiv.org/html/2608.04831v1)
  - These are the same figures as Pew Research Center's July 2025 study — [Presenc, secondary](https://presenc.ai/research/ai-overviews-ctr-impact-2026). So this is probably that data published as a paper, not a new sample. That is my inference; the page lists no affiliations.
- [D] SparkToro (Rand Fishkin), Jun 9, 2026, updated Jun 18 — [SparkToro](https://sparktoro.com/blog/in-2026-less-than-one-third-of-google-searches-still-send-a-click/)
  - Data: Similarweb's US panel, Jan-Apr 2026, browsers only. Google's own app is excluded, so Fishkin thinks the true figure is higher.
  - 68.01% of Google searches ended with no click, against 60.45% in 2024 on a different panel (Datos).
  - Searches with one or more clicks of any kind fell 9.51 points (-22.9%).
  - No Google Images figure.
- [D, conflicts with SparkToro] Datos Q1 2026 State of Search, released Apr 28, 2026. Desktop only, US and EU/UK, Mar 2025 to Mar 2026. No Images or Lens figures — [PPC Land](https://ppc.land/ai-still-under-2-but-growing-datos-q1-2026-state-of-search-report/)
  - US organic click share rose from 42.0% (Dec 2025) to 44.9% (Mar 2026), and zero-click share fell from 24.5% to 22.4%.
  - EU/UK organic click share was about 46% in Mar 2026.
  - The two panels define zero-click differently and Datos leaves out phones, so 22% and 68% cannot be compared. Neither shows the other is wrong.
- [U, vendor data via a secondary page, title and summary only] BrightEdge tracking reportedly put AI Overviews on about 48% of tracked queries in Feb 2026, against about 31% a year earlier — [WrittenlyHub](https://www.writtenlyhub.com/news/ai-overviews-brightedge-data-2026-seo)

**Search Console aggregates**
- [D] Ahrefs (Ryan Law, Xibeijia Guan), Feb 4, 2026. 300,000 keywords, aggregated desktop Search Console CTR, Dec 2023 against Dec 2025. Images are not mentioned — [Ahrefs](https://ahrefs.com/blog/ai-overviews-reduce-clicks-update/)
  - Position-1 CTR on AI Overview keywords fell from 0.073 to 0.016, against a modelled 0.037 without overviews.

    | Position | 1 | 2 | 3 | 5 | 10 |
    |---|---:|---:|---:|---:|---:|
    | Change in CTR | -58.0% | -50.8% | -46.4% | -32.6% | -19.4% |

  - The 58% depends on that model.
  - Informational keywords with no overview also fell, from 0.076 to 0.039.
  - The Apr 17, 2025 version (Mar 2024 against Mar 2025) found -34.5% — [Ahrefs](https://ahrefs.com/blog/ai-overviews-reduce-clicks/)
  - Medianama printed the CTRs as 0.073% and 0.016%, which looks like a unit slip — [Medianama](https://www.medianama.com/2026/02/223-google-ai-overviews-click-through-rates-58-study/)
- [D] Seer Interactive, "AIO Impact on Google CTR: 2026 Update," Apr 24, 2026. 53 brands, 5,471,127 queries and 2.43 billion organic impressions, Jan 2025 to Feb 2026. Images are classed as not intent-bearing and not analyzed — [Seer Interactive](https://www.seerinteractive.com/insights/aio-impact-on-google-ctr-2026-update)

  | Organic CTR | Jan 2025 | Dec 2025 | Feb 2026 |
  |---|---:|---:|---:|
  | AI Overview shown | 3.19% | 1.31% | 2.36% |
  | No AI Overview | 2.75% | 3.16% | 3.82% |

  - On informational queries in 2025 there were about 33,500 clicks per million organic impressions with no overview, 20,743 when the brand was cited and 9,445 when it was not.
  - Paid CTR held up best.
  - Caveats: correlation only; the overview label is static and applied to every month; one account is 47% of one cell; no seasonality adjustment. The text's "85% rebound" is about 80% on its own table.
- [D] Cyrus Shepard's one-site opt-out test (Oct 2026) found about 0.9% CTR on AI impressions (in the Oct 30 notes) — [Search Engine Roundtable](https://www.seroundtable.com/google-ai-overviews-mode-ctr-42421.html)
- [D] Semrush, May 1 to Jul 5, 2025 (older), about 69 million US desktop sessions: 6-8% of AI Mode sessions reached an external site. I found no 2026 update — [Search Engine Journal](https://www.searchenginejournal.com/the-impact-of-ai-mode-on-seo-analysis-of-10-studies/558816/)

**Publisher networks and big sites**
- [D] Chartbeat 2026 Publisher Playbook, reported Sep 24, 2026. It skews to news and media, gives no sample size and says nothing on images — [Search Engine Journal](https://www.searchenginejournal.com/google-search-decline-publishers-chartbeat/590681/)
  - Google Search referrals fell 40.2% year on year for Jul 2025-Jul 2026, after -21.9% the year before.
  - Discover fell 34.3%, after -6.6%.

  | Share of pageviews | Jul 2024 | Jul 2026 |
  |---|---:|---:|
  | Search | about 9% | about 5% |
  | Direct | 13.5% | 15.9% |
  | Dark social | 7.1% | 11.3% |
  | AI chatbots | | 0.01% |

- [D] Chartbeat Q3 2026 Global audience insights, Oct 15, 2026. Search engines supplied 12% of North American publisher pageviews in Q3 2026, against 21% in Q3 2025. Search share fell in nine of ten regions. There is no split by search engine — [PPC Land](https://ppc.land/search-drops-to-12-of-north-american-publisher-pageviews-chartbeat-finds/)
- [D] Reuters Institute, *Journalism and Technology Trends and Predictions 2026*, Jan 12, 2026, using Chartbeat data on 2,500+ sites — [Press Gazette](https://pressgazette.co.uk/publishers/digital-journalism/google-traffic-down-2025-trends-report-2026/)
  - Google search referrals fell 33% globally and 38% in the US in the year to Nov 2025.
  - Discover fell 21% globally and 29% in the US.
- [D] Reddit, Oct 30, 2026. It said Google's AI search is cutting its referrals and that daily unique visitors could fall by a low double-digit percentage in Q4. Its shares fell 29% that day. An analyst put the loss at over a million search referrals a week — [The Star / Reuters](https://www.thestar.com.my/tech/tech-news/2026/10/30/reddit-pinterest-shares-tumble-on-weak-user-and-revenue-growth)
  - CEO Steve Huffman, via CNBC, said Google referrals fell meaningfully in the quarter and blamed the shift to AI Mode and AI Overviews. He described Google as changing from a traffic driver into something else — [Search Engine Roundtable](https://www.seroundtable.com/reddit-stock-drops-declining-google-search-traffic-42432.html)
- [D] Time (Digiday, Jun 2, 2026): Google's share of Time's traffic fell from 60% to 51% (Similarweb). One anonymous lifestyle publisher lost 60% of its Google traffic in two years — [Digiday](https://digiday.com/media/how-publishers-are-modeling-and-mitigating-a-future-with-significantly-less-google-search-traffic/)

**Google's position (no data published)**
- [G] Liz Reid, Aug 2025 (older): total organic click volume from Search to websites was roughly stable year on year, and average click quality rose. She grants that quick-answer questions (her example is the date of the next full moon) may end without a click — [Google blog](https://blog.google/products-and-platforms/products/search/ai-search-driving-more-queries-higher-quality-clicks/)
- [G-via] May 26, 2026: a Google spokesperson told Press Gazette that Google still sends billions of clicks to the web every day — [Press Gazette](https://pressgazette.co.uk/platforms/what-google-ai-mode-push-means-for-publishers/)
- [G] Oct 28, 2026 earnings: neither the remarks nor the call mention clicks or traffic to websites (see question 3) — [transcript](https://www.fool.com/earnings/call-transcripts/2026/10/29/alphabet-googl-q3-2026-earnings-call-transcript/)

**Which query and page types still send clicks**
- [D] Navigational and transactional searches showed no measurable loss in the randomized experiment — [PPC Land](https://ppc.land/researchers-find-google-ai-overviews-cut-publisher-clicks-39-8/)
- [D] Where overviews appear, from Seer's Feb 2026 data on 53 accounts — [Seer Interactive](https://www.seerinteractive.com/insights/aio-impact-on-google-ctr-2026-update)
  - By intent, share of queries: informational 36%, commercial 8%, transactional 5%.
  - By query shape, share of organic impressions:

    | Query shape | With an overview |
    |---|---:|
    | Comparison ("X vs Y") | 95.4% |
    | Review | 86.3% |
    | Question | 85.9% |
    | Price, cost or buy | 83.4% |
    | Best-of | 81.3% |
    | Near me | 76.9% |
    | Single word | 27.3% |

- [D] Being cited helps but does not restore the click. Cited brands got about 120% more clicks per impression than uncited ones, but about 38% fewer than queries with no overview (informational, 2025) — [Seer Interactive](https://www.seerinteractive.com/insights/aio-impact-on-google-ctr-2026-update)
- [D] In Growth Memo's usability study (Oct 2025, older; in the Oct 30 notes), shopping tasks in AI Mode nearly always produced a click and non-transactional tasks almost never did — [Search Engine Journal](https://www.searchenginejournal.com/the-impact-of-ai-mode-on-seo-analysis-of-10-studies/558816/)
- [G] Philipp Schindler said on Oct 28, 2026 that sponsored and organic product listings inside AI Mode already get similar click-through — [transcript](https://www.fool.com/earnings/call-transcripts/2026/10/29/alphabet-googl-q3-2026-earnings-call-transcript/)
- [Project] On this site, Sep 28-Oct 25, 2026, question-and-fact pages earned a median 4 clicks per established page a month at 0.33% CTR, against 45 for bite pages and 33 for identification pages — [project memory](C:/Users/buzzs/.claude/projects/C--Users-buzzs-buzzskito-website/memory/project_page_type_performance.md)

### Inferences
- The measured range is wide, but every method points the same way. Where an overview shows, expect roughly 35-70% fewer organic clicks than without one, and fewer again in AI Mode. The randomized -39.8% is the figure least open to selection bias.
- At publisher level the loss is speeding up (Chartbeat -21.9%, then -40.2%), and it now reaches queries without overviews too: Ahrefs' no-overview informational CTR roughly halved in two years.
- Seer's early-2026 rebound is real in its data, but the no-overview series rose too (3.16% to 3.82%), so part of it is mix or season. The ratio of overview to no-overview CTR did improve, from about 0.41 to about 0.62. One quarter is not a trend.
- The searches that keep their clicks are the ones where the reader must go somewhere to act: brand and site names, buying, booking, local service. For this site that makes the GTA service pages the protected part and the information library the exposed part.
- The Datos and SparkToro panels disagree on the zero-click level (about 22% on desktop against 68% across devices). Neither should be quoted as "the" zero-click rate without naming the panel and device.

### Gaps
- No 2026 study splits clicks by device. Most aggregates are desktop only (Ahrefs, Datos, Agarwal-Sen), while this site's image clicks skew to phones and school desktops.
- No 2026 study measures health, identification or "what is this" queries as a group. The closest are Seer's "question" class and Agarwal-Sen's "informational" class.
- Nobody has published an independent 2026 update of Semrush's AI Mode session data, and Google publishes no AI Mode click data. On Nov 2, 2026, Gary Illyes said Google has nothing to announce about more data in the AI report — [Search Engine Roundtable](https://www.seroundtable.com/click-data-search-console-ai-reporting-42437.html)
- A search summary attributed to BrightEdge a fall in AI Overview coverage on "near me" queries from 100% (2023) to 0%. I could not identify the page or the original, and Seer's 76.9% for near-me queries contradicts it. Health-query coverage figures of 88-89% credited to BrightEdge had the same problem.
- A Piano benchmark (June 2026, search traffic -36%) appeared only in search summaries with no source page I could open, so I left it out.

## 2. Is there measured data on Google Images, Lens/multimodal and Discover clicks in 2025-2026, compared with web clicks?

### Takeaway
For Images and Lens, almost none. No 2026 study measures Images-tab clicks: Seer, Ahrefs, Chartbeat, SparkToro, Datos and the randomized experiment all leave images out or never mention them. The only expert claim that image clicks are holding is Glenn Gabe's from June 2025, which rests on screenshots. Since the Oct 30 notes I found no new site publishing Web: Multimodal numbers, so the evidence is still two single-site readings. Discover is measured, but only for news publishers, and it is falling fast. Search Console click data also has an unexplained spike on some sites right now.

### Cited Findings
**Images tab**
- [D] None of the 2026 studies in question 1 reports image-search clicks:
  - Seer classes images as not intent-bearing and does not analyze them — [Seer Interactive](https://www.seerinteractive.com/insights/aio-impact-on-google-ctr-2026-update)
  - Ahrefs' 2026 update does not mention images — [Ahrefs](https://ahrefs.com/blog/ai-overviews-reduce-clicks-update/)
  - Chartbeat's playbook does not mention images — [Search Engine Journal](https://www.searchenginejournal.com/google-search-decline-publishers-chartbeat/590681/)
  - SparkToro gives no Images figure — [SparkToro](https://sparktoro.com/blog/in-2026-less-than-one-third-of-google-searches-still-send-a-click/)
  - Datos's Q1 summary gives no Images or Lens figure — [PPC Land](https://ppc.land/ai-still-under-2-but-growing-datos-q1-2026-state-of-search-report/)
  - The randomized experiment does not address image searches — [PPC Land](https://ppc.land/researchers-find-google-ai-overviews-cut-publisher-clicks-39-8/)
- [O] Glenn Gabe, Jun 16, 2025: image-search clicks and impressions were still moving together and were not hurt by AI Overviews. He showed screenshots but no figures, and warned that image traffic is far smaller than web and this may not last. I found no 2026 update from him on image search — [GSQi](https://www.gsqi.com/marketing-blog/the-forgotten-coupling-image-search-video-mode-and-news-tab-in-search/)
- [D] A search for 2026 reports of image clicks rising while web clicks fall found only general pieces on publisher decline — [Digital Bloom](https://thedigitalbloom.com/learn/organic-traffic-crisis-report-2026-update/); [AdExchanger](https://www.adexchanger.com/publishers/the-ai-search-reckoning-is-dismantling-open-web-traffic-and-publishers-may-never-recover/)
- [D-via, search summary only] Pinterest is the site most associated with image search, and it has disclosed no 2026 loss of Google traffic. Its Oct 30, 2026 miss was blamed on European cross-border sellers — [The Star / Reuters](https://www.thestar.com.my/tech/tech-news/2026/10/30/reddit-pinterest-shares-tumble-on-weak-user-and-revenue-growth)
  - A June 2025 J.P. Morgan note said 85% of its monthly users arrive directly in the app, so it is a poor proxy for image-search referrals — [Barron's via iTiger](https://www.itiger.com/news/2540470992)
- [Project] This site, late October 2026: about 1,530 Images clicks per 30 days, about 14% of its Google clicks, and about 55% of them look like US school computers — [Oct 30 report](C:/Users/buzzs/buzzskito-website/reports/Google%20Images%20traffic%20growth%20plan.md); [CLAUDE.md](C:/Users/buzzs/buzzskito-website/CLAUDE.md)

**Lens and multimodal (Web: Multimodal in Search Console)**
- [D] The only published site figures are still the two in the Oct 30 notes — [SEO-Kreativ](https://www.seo-kreativ.de/en/blog/search-console-multimodal-en/); [Linus Li](https://www.linusseo.com/en/gsc-web-multimodal/)
  - Ott (seo-kreativ.de, Sep 10-21, 2026): about 0.2% of text impressions, at 0.5% CTR.
  - Li (one product client, 28 days): about 2% of text impressions, at about 1% CTR.
- [D] Searches on Nov 3, 2026 for newer numbers returned about ten explainer pages and no site data. A Calgary agency's guide (Oct 6, 2026) says outright that Google has published no country breakdown, and it gives no figures — [Wisemedia](https://wisemedia.io/2026/10/06/search-console-multimodal-search-type-canada/); [Cliczeo](https://cliczeo.com/blog/gsc-multimodal-report-google-lens-traffic); [Techwyse](https://www.techwyse.com/blog/general-category/google-search-console-multimodal-search)
- [G-via] Nov 2, 2026: asked about clicks in the AI report, Gary Illyes said Google wants to give more useful data but has nothing to announce. That report shows impressions only, multimodal included — [Search Engine Roundtable](https://www.seroundtable.com/click-data-search-console-ai-reporting-42437.html)
- [Project] This site's only reading: 34 Lens (multimodal) clicks against 117 Images clicks in one week around Oct 24, 2026 — [Oct 30 report](C:/Users/buzzs/buzzskito-website/reports/Google%20Images%20traffic%20growth%20plan.md)

**Discover**
- [D] News publishers:
  - Chartbeat: Discover referrals fell 6.6% (Jul 2024-Jul 2025), then 34.3% (Jul 2025-Jul 2026), and Discover's share of pageviews fell 28.4% — [Search Engine Journal](https://www.searchenginejournal.com/google-search-decline-publishers-chartbeat/590681/)
  - Reuters Institute: in the year to Nov 2025, Discover fell 21% globally and 29% in the US — [Press Gazette](https://pressgazette.co.uk/publishers/digital-journalism/google-traffic-down-2025-trends-report-2026/)
- [D, counterexample] One large lifestyle publisher told Digiday (Jun 2, 2026) that its Discover traffic has been rising — [Digiday](https://digiday.com/media/how-publishers-are-modeling-and-mitigating-a-future-with-significantly-less-google-search-traffic/)
- [U, search summaries only]
  - Discover has shown AI summaries since July 2025 — [TechCrunch, 2025](https://techcrunch.com/2025/07/15/google-discover-adds-ai-summaries-threatening-publishers-with-further-traffic-declines)
  - A June 2026 report says Discover began replacing publisher links with AI-written summaries — [RightsTech](https://rightstech.com/2026/06/google-ai-changes-could-deal-further-blow-to-publisher-discover-traffic/)
  - A Marfeel analysis reportedly found that 77% of US Discover AI summaries default to an inline YouTube video — [PPC Land](https://ppc.land/google-discover-feeds-users-ai-and-youtube-while-publishers-watch-traffic-vanish/)
- [G-via] Oct 23, 2026: Google Images and Discover do not support JPEG XL images — [Search Engine Roundtable](https://www.seroundtable.com/google-jpeg-xl-42352.html)

**Data quality right now**
- [D] Nov 3, 2026: some Search Console properties show a sudden click spike over the past couple of days while impressions stay flat. One commenter saw about 5x clicks over the Oct 31-Nov 1 weekend. The search type affected is not stated, and Google has not commented — [Search Engine Roundtable](https://www.seroundtable.com/google-performance-reports-spike-clicks-42448.html)
  - Joy Hawkins thinks it is bots.
  - Glenn Gabe sees it on only a few properties and says it may be a bug.
  - Three sites showed it in the API but only one in the web interface.

### Inferences
- Whether Images clicks are holding up against AI answers is unmeasured, not disproven. Confident claims on either side have no 2026 data behind them.
- The only multi-site measures of Google referrals (Chartbeat, Reuters) come from news sites, whose Google traffic is mostly text search and Discover. They say little about an image-heavy pest library.
- Anything built on the Search Console API still cannot see multimodal clicks, this project's own data pulls included — [API reference](https://developers.google.com/webmaster-tools/v1/searchanalytics/query). The owner's manual export is the only route.
- This site's own Search Console export is now the best evidence available for Images and Lens on a site like this. Because of the Nov 3 anomaly, the Oct 31-Nov 1 weekend read planned for Nov 4 should be checked against GA4 before anyone relies on it.

### Gaps
- No public 2025-2026 time series of Images clicks across many sites, and no study comparing Images-tab and web CTR before and after AI Overviews.
- Whether a click on an image inside an AI Overview on the web results page counts as Web or Image in Search Console. Nothing I saw from Google says.
- Lens clicks by result type (AI Overview link, visual match, shopping) remain invisible.
- Datos Q2 2026 is gated and may hold an Images share I could not see — [Datos](https://datos.live/report/state-of-search-q2-2026/)

## 3. What has Google changed or announced in 2026 about Images, Lens, Circle to Search, AI Mode visual answers, image blocks in AI Overviews, image ads and the Images home, and what did it say on Oct 28, 2026?

### Takeaway
Google's 2026 moves push visual search into AI answers and make Images a place to browse, save and see ads, not just a route to websites. It reports search volume, never clicks. On Oct 28, 2026 it reported over 50 billion visual searches a month and said one in five AI Mode searches use voice, images or documents. It also said ads in AI Overviews and AI Mode are going global. The newest change with direct consequences for this site has nothing to do with AI answers: on Nov 3, 2026 Google said Search will be off for K-12 student accounts unless school administrators switch it on.

### Cited Findings
**Late 2025 and earlier (context)**
- [G-via] Feb 20, 2025 (older): AI Overviews show in Lens results more often, mainly for novel or unique images. They carry links to web resources, and the user does not have to type a question — [SER](https://www.seroundtable.com/google-lens-ai-overviews-ios-app-38928.html)
- [G-via] May 27, 2025 (older): AI Overviews with image carousels — [SER](https://www.seroundtable.com/google-ai-overviews-image-carousel-39474.html)
- [G] Sep 30, 2025: visual results in AI Mode, each image with a link out (in the Oct 30 notes) — [Google blog](https://blog.google/products-and-platforms/products/search/search-ai-updates-september-2025/)
- [G-via] Nov 12, 2025: Google tested search ads, not just shopping ads, in image results — [SER](https://www.seroundtable.com/google-images-ad-carousel-40412.html)
- [G-via, headline only] Nov 17, 2025: image search in the Google app offers a start-from-topics browsing view — [SER](https://www.seroundtable.com/google-get-started-with-a-few-topics-40419.html)
- [D] Nov 27, 2025: Circle to Search began sending follow-up questions to AI Mode by default instead of to standard image search (Google app 16.47.49 on Android). Android Authority reported it, via ChannelNews, without a Google statement — [ChannelNews](https://www.channelnews.com.au/google-circle-to-search-now-uses-ai-mode-by-default/)
  - A January 2026 Android Authority teardown reportedly found groundwork for showing AI Mode results first in Circle to Search, not yet visible to users (search summary only) — [Android Authority](https://www.androidauthority.com/circle-search-ai-mode-3636023/)

**2026, in order**
- [G-via, search summary] Jan 2026: a test turned the AI Mode button into a blue Send button that leads to normal results — [SER](https://www.seroundtable.com/google-search-blue-send-button-40694.html)
- [G] Feb 4, 2026 (Q4 2025 call): Circle to Search on over 580 million Android devices, and nearly one in six AI Mode queries non-text (in the Oct 30 notes) — [Pichai remarks](https://blog.google/company-news/inside-google/message-ceo/alphabet-earnings-q4-2025/)
- [G-via] Feb 26, 2026: Circle to Search looks at the whole image — [SER](https://www.seroundtable.com/google-circle-to-search-update-40996.html)
- [G] May 19, 2026, I/O, post by Elizabeth Reid — [Google blog](https://blog.google/products-and-platforms/products/search/search-io-2026/)
  - AI Mode passed one billion monthly users, with queries more than doubling every quarter.
  - Gemini 3.5 Flash became the default model inside AI Mode worldwide.
  - A new search box takes text, images, files, videos or Chrome tabs, rolling out wherever AI Mode exists.
  - Follow-up questions from an AI Overview now continue into AI Mode, live worldwide on desktop and mobile.
  - Generated layouts for everyone in the summer; agents, booking and business calling, US first.
  - The post does not mention Lens, Circle to Search, Search Live or traffic to websites.
  - [G, search summary] Lens, AI Mode and Circle to Search can check whether an image was made with AI (SynthID) — [Google blog](https://blog.google/innovation-and-ai/technology/ai/google-io-2026-all-our-announcements/)
- [G-via] May 26, 2026: Google told Press Gazette that "AI Mode is not the default experience in Search," and that blue links still show below AI summaries — [Press Gazette](https://pressgazette.co.uk/platforms/what-google-ai-mode-push-means-for-publishers/)
- [G-via] Jun 5-8, 2026: Chrome Canary sent address-bar searches into AI Mode. Google's Rajan Patel called it an error and said Google has no plan to make AI Mode the default for Chrome searches — [SER](https://www.seroundtable.com/google-chrome-ai-mode-default-41458.html)
- [G-via] Jun 16, 2026: ads mixed among organic image results — [SER](https://www.seroundtable.com/google-image-search-mix-ads-41511.html)
- [G-via] Jun 18, 2026: a test of 3D models in product results — [SER](https://www.seroundtable.com/google-3d-model-from-41515.html)
- [G] Jul 14-15, 2026, Images' 25th anniversary — [Google blog](https://blog.google/products-and-platforms/products/search/google-images-25th-anniversary/); [SER](https://www.seroundtable.com/google-image-search-home-page-gallery-41679.html); [SER](https://www.seroundtable.com/google-ai-overviews-ai-images-41680.html)
  - A browsable gallery home for Images, at first on desktop, in the US, in English, for signed-in users.
  - AI image generation inside AI Overviews, in English, where AI Mode image creation exists.
  - The consumer press framed it as Images copying Pinterest — [Gizmodo](https://gizmodo.com/google-images-is-trying-to-be-pinterest-2000785569)
- [G-via] Aug 28, 2026: for some queries the AI Overview now opens in full on its own. The Show more button is gone and a follow-up box is open, which pushes the links lower — [SER](https://www.seroundtable.com/google-ai-overviews-push-ai-mode-responses-41974.html)
  - Google called it a test and said its research shows people find this more helpful. Robby Stein said it happens only where Google's systems judge it most useful.
  - Barry Schwartz called it bad for publishers.
- [G-via] Sep 14, 2026: Google says image thumbnails are normally slow to update — [SER](https://www.seroundtable.com/google-search-slow-image-thumbnails-42072.html)
- [G-via] Sep 16, 2026: Image Search collections now suggest where to save — [SER](https://www.seroundtable.com/google-images-suggested-by-al-42096.html)
- [G] Sep 24, 2026: Web: Multimodal in Search Console (Oct 30 notes) — [Google Search Central](https://developers.google.com/search/blog/2026/09/web-multimodal-in-sc?hl=en)
- [G] Oct 15, 2026, post by Hema Budaraju. It gives no click figures and says nothing about Lens — [Google blog](https://blog.google/products-and-platforms/products/search/updates-ai-mode-overviews-explore-web/)
  - More inline links in AI Overviews and AI Mode, placed higher in answers.
  - A test of an official-websites section at the top of AI answers.
  - News carousels in more places, and image thumbnails on related-article links.
  - Clickable creator profiles on video results in AI Mode.
  - Preferred Sources users up more than 7x since January.
- [G-via] Oct 28, 2026: a test of a Save button on image hover in Image Search — [SER](https://www.seroundtable.com/google-images-save-button-overlay-42394.html)
- [G-via, headlines only]
  - Nov 2, 2026: AI Overviews for brand queries moved to the right column — [SER](https://www.seroundtable.com/google-ai-overviews-brands-right-42440.html)
  - Nov 3, 2026: AI Mode shows only Google Flights links for some travel queries — [SER](https://www.seroundtable.com/google-ai-mode-links-google-flights-42428.html)
- [D] Nov 3, 2026: one user saw the AI Mode button removed from the search bar in Chrome incognito. Schwartz could not reproduce it, and Google has not commented — [SER](https://www.seroundtable.com/google-removing-ai-mode-42436.html)
- [G] Nov 3, 2026, post by Chris Phillips, VP of Education — [Google blog](https://blog.google/products-and-platforms/products/education/ai-learning-era-updates-2026/); [SER](https://www.seroundtable.com/google-search-off-k-12-schools-42447.html)
  - Gemini, Gemini Notebook, Gemini in Classroom and Google Search will be entirely off for K-12 student accounts until school administrators turn them on.
  - No date: Google will give schools the details in the coming months, before the rollout.
  - Guided Learning in Search, which walks students through homework step by step instead of giving the answer, starts as a pilot in select US schools later in November.
  - The post does not say whether "Google Search" includes Images, or which countries are covered.

**Q3 2026 earnings, Oct 28, 2026**
- [G] Sundar Pichai — [Pichai remarks](https://blog.google/company-news/inside-google/message-ceo/alphabet-earnings-q3-2026/)
  - Over 50 billion visual searches a month.
  - One in five AI Mode searches worldwide use voice, images or documents.
  - AI Mode queries are on average three times as long as traditional ones.
  - Query growth is the highest in five years, commercial queries included.
  - Google is building one seamless experience across AI Overviews, AI Mode and traditional Search.
  - Search revenue grew 12%.
- [G] Philipp Schindler — [transcript](https://www.fool.com/earnings/call-transcripts/2026/10/29/alphabet-googl-q3-2026-earnings-call-transcript/)
  - Most AI Mode queries are additional searches, and many are early-stage commercial searches.
  - Google is scaling ads in AI Overviews and AI Mode to more users and queries, and taking that advertising global for the first time.
  - Lower ad revenue per query in AI Mode weighed on growth.
  - Sponsored and organic product listings in AI Mode get similar click-through.
  - Search revenue was $63.3 billion.
  - Not mentioned on the call: Lens, Circle to Search, Search Live, Images, clicks to websites, AI Mode as the default.
- [D] Reuters tied a fall in Alphabet shares the next day (reported as about $500 billion of market value) to questions about earning money from AI search after Search growth slowed to 12% — [The Star / Reuters](https://www.thestar.com.my/tech/tech-news/2026/10/30/reddit-pinterest-shares-tumble-on-weak-user-and-revenue-growth)

### Inferences
- Every visual entry point now leads into an AI answer:
  - Lens shows overviews on novel images.
  - Circle to Search hands follow-up questions to AI Mode.
  - The new search box takes images.
  - AI Overviews carry image sets and now open fully on their own.

  As far as I found, the Images tab is the one visual surface where Google has added browsing, saving and ads instead of an AI answer.
- The growth Google cites (50 billion visual searches, one in five AI Mode searches multimodal) is growth on Google's own pages. Nothing Google said in 2026 gives a visual click figure.
- For this site, the K-12 change may matter more than any AI feature on this list, if its school-hour image clicks come from student accounts. When it lands, and how many districts switch Search back on, are both unknown.
- With ads going global inside AI answers, Google's revenue increasingly comes from the AI surfaces, which weakens its reasons to protect the classic layout.

### Gaps
- Whether the Images tab is part of "Google Search" for the K-12 change, and whether the change covers Canada.
- Google's definition of "visual searches", and whether the Images tab counts in the 50 billion.
- I found no 2026 Lens-specific announcement. Whether AI Mode answers now open first in Lens or Circle to Search for everyone is unconfirmed.
- No measured effect yet of the Images home, image ads or AI image generation on organic image clicks.
- I did not check Google's August 2026 hardware event or Search Central events for visual-search statements.

## 4. Where are credible analysts saying search traffic is heading for 2027, and is AI Mode becoming the default anywhere?

### Takeaway
The named analysts all expect fewer clicks in 2027, and none of them has published a modelled 2027 number. Two sets of numbers exist, both from the news-publisher world:
- One large lifestyle publisher's model: AI Mode up to 80% of Google searches by the end of 2027, and Google referrals down another 30-40% or to single digits.
- A survey of publishers' expectations: search traffic down 43% over three years.

Google says AI Mode is not the default in Search or Chrome, and browser panels show it handling well under 1% of searches. The nearest things to a default are Circle to Search, where follow-up questions go to AI Mode, and AI Overviews that continue or expand into AI Mode-style answers. Google now calls all of it one experience.

### Cited Findings
**Analysts**
- [O, with data] Rand Fishkin (SparkToro), Jun 2026: expects zero-click rates to keep rising, and sees AI Mode as the likely driver of the next decade of increases. He plans to repeat the study in 6-12 months and promises data for Europe, the UK and Canada — [SparkToro](https://sparktoro.com/blog/in-2026-less-than-one-third-of-google-searches-still-send-a-click/)
- [O] Lily Ray:
  - May 26, 2026: AI Mode will not become the default until it earns as much ad revenue as organic search, and the new features will keep cutting organic traffic across the board — [Press Gazette](https://pressgazette.co.uk/platforms/what-google-ai-mode-push-means-for-publishers/)
  - Jul 23, 2025 (older): expects AI Mode to become the default in a different form, with Google folding its most successful features into core search — [Peec AI](https://peec.ai/blog/the-future-of-seo-and-ai-search-a-conversation-with-lily-ray)
  - Jan 19, 2026 (in the Oct 30 notes): in AI search, images become material for the answer — [Lily Ray](https://lilyraynyc.substack.com/p/a-reflection-on-seo-and-ai-search)
- [O] Kevin Indig, Oct 16, 2026 (Growth Memo, paywalled): 2027 SEO plans should be built on the signals that come before the visit, not on a traffic target — [Growth Memo](https://www.growth-memo.com/p/2027-seo-planning-workbook)
  - A Search Engine Land piece (Oct 2026; HTTP 403, so search summary only) adds quarterly re-forecasting and scenario budgets because of the volatility — [Search Engine Land](https://searchengineland.com/how-to-plan-2027-when-traffic-is-down-and-ai-wont-attribute-493970)
- [O, slide summary only] Aleyda Solis, June 2026 deck: search traffic keeps falling as AI search spreads, so measure AI presence and business impact rather than traffic alone — [Speaker Deck](https://speakerdeck.com/aleyda/winning-organic-in-2026-a-framework-for-surviving-googles-ai-era)
- [O] Glenn Gabe: I found no 2026 forecast from him. His post on X prompted Google's June 2026 denial on Chrome defaults, and on Nov 3, 2026 he called the click spike a possible bug — [SER](https://www.seroundtable.com/google-chrome-ai-mode-default-41458.html); [SER](https://www.seroundtable.com/google-performance-reports-spike-clicks-42448.html)
- [O] Barry Schwartz, Aug 28, 2026: the self-expanding AI Overview is bad for publishers — [SER](https://www.seroundtable.com/google-ai-overviews-push-ai-mode-responses-41974.html)
- [D, model] An anonymous large lifestyle publisher's three-year, title-by-title model, reported by Digiday on Jun 2, 2026 — [Digiday](https://digiday.com/media/how-publishers-are-modeling-and-mitigating-a-future-with-significantly-less-google-search-traffic/)
  - AI Mode is capped near 80% of Google searches, on the assumption that short queries will never trigger it. In the slower case it reaches 80% by the end of 2027.
  - Google referrals either fall to single digits or drop another 30-40% over the next few years.
- [D, survey] Publishers expect search traffic to fall 43% on average over three years. About a fifth expect a loss above 75% (Reuters Institute, Jan 2026) — [Press Gazette](https://pressgazette.co.uk/publishers/digital-journalism/google-traffic-down-2025-trends-report-2026/)
- [U] A vendor blog forecasts that 70% of US Google searches will end without a click by Q4 2027. It shows no data — [mean.ceo](https://blog.mean.ceo/seo-predictions)

**Is AI Mode the default anywhere?**
- [G-via] Not officially. Google said so on May 26, 2026, and in June said it has no plan to make AI Mode Chrome's default — [Press Gazette](https://pressgazette.co.uk/platforms/what-google-ai-mode-push-means-for-publishers/); [SER](https://www.seroundtable.com/google-chrome-ai-mode-default-41458.html)
- [U, contradicted] Several SEO blogs report that I/O 2026 made AI Mode the global default. Google's post says Gemini 3.5 Flash became the default model inside AI Mode, which these pages appear to misread — [MaxPlaces](https://www.maxplaces.com/blog/google-io-2026-what-the-new-ai-mode-search-box-means-for-your-traffic/); [Google blog](https://blog.google/products-and-platforms/products/search/search-io-2026/)
- [D] Browser panels show small use:
  - 0.34% of US searches moved into AI Mode in Jan-Apr 2026, with Google's app excluded — [SparkToro](https://sparktoro.com/blog/in-2026-less-than-one-third-of-google-searches-still-send-a-click/)
  - AI Mode was 0.16% of US desktop visits and 0.21% in the EU/UK in Mar 2026, up from 0.06% in Dec 2025. AI tools overall were 1.65% of US desktop activity in Q1 2026 — [PPC Land](https://ppc.land/ai-still-under-2-but-growing-datos-q1-2026-state-of-search-report/)
- [G] Against that, Google reports over a billion monthly AI Mode users (May 2026) — [Google blog](https://blog.google/products-and-platforms/products/search/search-io-2026/)
- [G, G-via, D] Defaults in practice (sources in question 3):
  - AI Overview follow-ups continue in AI Mode worldwide (May 19, 2026).
  - Some AI Overviews open in full with a follow-up box by default (test, Aug 28, 2026).
  - Circle to Search follow-ups go to AI Mode (Nov 2025).
  - Google describes one seamless experience (Oct 28, 2026).

### Inferences
- A billion monthly users against 0.16-0.34% of browser searches can both be true. Most AI Mode use probably happens in the Google app, in Circle to Search and through follow-ups from AI Overviews, none of which those panels see well. That is my inference; Google has not published a split.
- The likely 2027 path is not a switch flipping to AI Mode. It is more AI-shaped results by default on more queries (self-expanding overviews, follow-ups, generated layouts), with ads following. Lily Ray's revenue test is the condition to watch, and Schindler's Oct 28 comments say ad revenue in AI Mode is improving and going global.
- For a 2027 plan, the only numbers with stated assumptions are the Digiday model and the Reuters survey, and both reflect news publishers.

### Gaps
- No analyst forecast for Images, Lens or visual-search clicks in 2027.
- Datos Q2 2026 (gated) and SparkToro's promised Europe/UK/Canada data would give Canadian context; neither was available.
- No country-level AI Mode adoption data for Canada.
- No standalone 2026 Similarweb traffic report found; its panel is the data behind SparkToro's 2026 study.

## 5. Pest and insect identification searches: what does Google show now, and how much can be answered without a click?

### Takeaway
Pest identification sits in the query shapes AI answers cover most: questions, comparisons and health. On 16 pest searches checked on Oct 29-30, 2026, an AI Overview with 4-15 embedded third-party images led 14 of them. Lens answers a photo of an unfamiliar object with an AI Overview without being asked a question. So the name of the bug can be had without a click. What still earns a click is confirming it, judging the risk and deciding what to do. On this site, bite and identification pages still earn the most clicks per page, while quick-fact pages earn almost none.

### Cited Findings
- [Project] Pest searches checked Oct 29-30, 2026, on desktop, signed out, from Ontario with US settings, each seen once — [teardown](C:/Users/buzzs/buzzskito-website/research_notes/Google%20Images%20traffic%20growth%20plan/pest_image_search_teardown.md)

  | Searches | What sat at the top |
  |---|---|
  | baby cockroach, house spider | Classic Images pack |
  | wolf spider, jumping spider, black widow, brown recluse, mosquito larvae, tick, chigger bites | AI Overview with a large hero image plus about 14 images |
  | flea bites, flea bites on humans, bed bug bites, spider bite, mouse droppings, tick vs bed bug | AI Overview with a strip of 4-5 images |

  - 15 of 16 searches showed an image block.
  - BuzzSkito was in none of about 155 image slots.
  - The overview's hero image was not the Images-tab #1.
  - For "bed bug bites" the 4 images came from Healthline, Medical News Today, a dermatology clinic and a bed bug company.
- [D] AI Overview rates in Seer's client data (Feb 2026): question queries 85.9%, comparisons 95.4%, single words 27.3% — [Seer Interactive](https://www.seerinteractive.com/insights/aio-impact-on-google-ctr-2026-update)
- [D] Queries that start with a question word are more likely to trigger an overview — [arXiv](https://arxiv.org/abs/2608.04831)
- [U, vendor, title and search summary only] A WebFX study of 130,000+ health queries put AI Overview coverage at 51%. Bite searches are health searches — [Stacker](https://stacker.com/stories/business-economy/ai-overviews-healthcare-what-study-more-130k-health-queries-reveals)
- [G-via] Lens shows AI Overviews more often for novel or unique images, with links, and no question is needed (Feb 2025) — [SER](https://www.seroundtable.com/google-lens-ai-overviews-ios-app-38928.html)
- [D] Circle to Search follow-ups go to AI Mode (Nov 2025) — [ChannelNews](https://www.channelnews.com.au/google-circle-to-search-now-uses-ai-mode-by-default/)
- [U, search summary only, undated] A UC Davis review of pest-ID apps rated Google Lens its top pick: fairly accurate, and mostly avoiding false certainty. The PDF downloaded but would not render here, and the brief allows PDFs through WebFetch only — [UC Davis](https://ucnfa.ucdavis.edu/sites/g/files/dgvnsk14416/files/inline-files/02%20Middleton%20Pest%20ID%20Apps%20Reduced.pdf)
- [G] Google's own example of a search that ends without a click is a quick factual answer (Aug 2025) — [Google blog](https://blog.google/products-and-platforms/products/search/ai-search-driving-more-queries-higher-quality-clicks/)
- [D] Informational searches carry the measured click loss; navigational and transactional ones do not — [PPC Land](https://ppc.land/researchers-find-google-ai-overviews-cut-publisher-clicks-39-8/)
- [Project] On this site (Sep 28-Oct 25, 2026), median clicks per established page a month were 45 for bites and stings (17 pages), 33 for identification (10 pages) and 4 for questions and facts (26 pages, 0.33% CTR). The note does not say which search types are included — [project memory](C:/Users/buzzs/.claude/projects/C--Users-buzzs-buzzskito-website/memory/project_page_type_performance.md)
- [Project] Demand for the head terms (Oct 28, 2026): "what bug is this" about 34.5K US searches a month, "bug identifier" 14.3K — [CLAUDE.md](C:/Users/buzzs/buzzskito-website/CLAUDE.md)

### Inferences
- When the reader only needs the name ("what is this bug"), Google can almost always answer on its own page. Someone with a bug in front of them will increasingly point the camera, and Lens and Circle to Search answer with an AI Overview and then AI Mode. Expect this to be the most exposed part of the library.
- The click survives when the answer raises a next step Google's summary cannot settle: is it dangerous, is it a bed bug or a lookalike, what do I do, who treats it near me. Bite pages fit that, which matches this site's bite pages leading on clicks per page.
- On pest searches the visible opportunity in web results is the image slots inside the overview. Those draw on different sites from the Images-tab leaders, so ranking in the Images tab does not get a page into them (the chigger-bites case).
- Comparison pages ("X vs Y") face the highest overview rate of any query shape in Seer's data, and on this site they had about zero clicks in October.

### Gaps
- "what bug is this", "spider identification", "tick identification" and "bed bug bites pictures" were not in the Oct 29-30 teardown. I did not open Google results pages myself (bot check; brief), and the owner can check them on his phone in a minute.
- No measured click rate for Lens on insect photos, for this site or anyone else.
- Nobody has measured whether the overview images on pest searches send clicks at all.
- Phone layouts were not observed.
- Health-query coverage figures of 88-89% credited to BrightEdge circulate on vendor pages without the original.

## 6. Test of the owner's belief: "AI Overviews take web clicks, but nobody can take the clicks away from the images"

### Takeaway
Half right. The first half is well supported: 2026 studies find large web-click losses where AI answers appear. The second half has no 2026 evidence behind it, and several facts weigh against it.

No study shows AI Overviews cutting Images-tab clicks, and the one expert who looked (Gabe, 2025) found them holding, so "safer for now" is fair. But Images clicks can be taken away, and the likeliest taker is Google's own design and policy, not AI Overviews alone:
- Google's 2013 redesign cut image clicks by an average 63%.
- In 2025-2026 it moved pest images into AI Overviews, added ads and browse-and-save features to Images, and routed camera searches into AI answers.
- On Nov 3, 2026 it announced Search off by default for K-12 student accounts, and this site's image clicks lean on US school computers.

### Cited Findings
**For the belief**
- [O] Gabe (Jun 2025): image-search clicks were not hurt by AI Overviews, with caveats — [GSQi](https://www.gsqi.com/marketing-blog/the-forgotten-coupling-image-search-video-mode-and-news-tab-in-search/)
- [D] No 2026 study reports a loss of Images-tab clicks (question 2) — [Seer Interactive](https://www.seerinteractive.com/insights/aio-impact-on-google-ctr-2026-update); [Ahrefs](https://ahrefs.com/blog/ai-overviews-reduce-clicks-update/)
- [G] Google keeps investing in Images and visual search: a new Images home (Jul 2026) and over 50 billion visual searches a month (Oct 2026) — [Google blog](https://blog.google/products-and-platforms/products/search/google-images-25th-anniversary/); [Pichai remarks](https://blog.google/company-news/inside-google/message-ceo/alphabet-earnings-q3-2026/)
- [D] The measured click losses fall on informational text searches; other intents were not measurably hit — [PPC Land](https://ppc.land/researchers-find-google-ai-overviews-cut-publisher-clicks-39-8/)
- [Project] This site's Images clicks rose sharply in October 2026, to about 14% of its Google clicks — [Oct 30 report](C:/Users/buzzs/buzzskito-website/reports/Google%20Images%20traffic%20growth%20plan.md)

**Against the belief**
- [Project, published history] Google's 2013 Images redesign cut image clicks by an average 63%, and its 2018 change added 37%. Google's design choices are the largest recorded swings in this channel — [Oct 30 report](C:/Users/buzzs/buzzskito-website/reports/Google%20Images%20traffic%20growth%20plan.md)
- [Project] Most pest images people see in normal results now sit inside AI Overviews, not in the Images pack, and they come from different sites than the Images-tab leaders — [teardown](C:/Users/buzzs/buzzskito-website/research_notes/Google%20Images%20traffic%20growth%20plan/pest_image_search_teardown.md)
- [G-via] Ads mixed among organic image results (Jun 16, 2026, after tests from Nov 2025) — [SER](https://www.seroundtable.com/google-image-search-mix-ads-41511.html)
- [G, G-via] Images is becoming a place to stay: a browsable home (Jul 2026), suggested collections (Sep 2026) and a Save button test (Oct 28, 2026) — [Google blog](https://blog.google/products-and-platforms/products/search/google-images-25th-anniversary/); [SER](https://www.seroundtable.com/google-images-suggested-by-al-42096.html); [SER](https://www.seroundtable.com/google-images-save-button-overlay-42394.html)
- [G] AI image generation inside AI Overviews (Jul 2026) — [Google blog](https://blog.google/products-and-platforms/products/search/google-images-25th-anniversary/)
  - [O] A vendor argues that generated images will meet generic image needs; this is opinion with no data — [Cicero](https://cicero.studio/en/blog/google-ai-image-generation-ai-overviews-2026/)
- [G, D] Visual-search growth flows into AI answers:
  - Lens overviews (2025) — [SER](https://www.seroundtable.com/google-lens-ai-overviews-ios-app-38928.html)
  - Circle to Search follow-ups go to AI Mode (Nov 2025) — [ChannelNews](https://www.channelnews.com.au/google-circle-to-search-now-uses-ai-mode-by-default/)
  - One in five AI Mode searches are multimodal (Oct 2026) — [Pichai remarks](https://blog.google/company-news/inside-google/message-ceo/alphabet-earnings-q3-2026/)
  - In an experiment, AI Mode cut external click-through by 18.8 points (Aug 2026) — [arXiv](https://arxiv.org/abs/2608.18352)
  - The two multimodal readings show 0.5-1% CTR — [SEO-Kreativ](https://www.seo-kreativ.de/en/blog/search-console-multimodal-en/); [Linus Li](https://www.linusseo.com/en/gsc-web-multimodal/)
- [G, Project] Search will be off for K-12 student accounts unless admins turn it on (announced Nov 3, 2026, no date), while about 55% of this site's image clicks look like US school computers — [Google blog](https://blog.google/products-and-platforms/products/education/ai-learning-era-updates-2026/); [CLAUDE.md](C:/Users/buzzs/buzzskito-website/CLAUDE.md)
- [O] Lily Ray (Jan 2026): images become material for AI answers rather than routes to websites — [Lily Ray](https://lilyraynyc.substack.com/p/a-reflection-on-seo-and-ai-search)

### Inferences
- A fairer version of the belief: AI answers have not yet been shown to hurt Images-tab clicks, but Google controls that surface and is changing it, and the camera searches that are growing go through AI answers.
- For this site the image channel's biggest near-term risk is the school dependence combined with the K-12 change, then a Google redesign, then images being replaced by AI answers. The first is the one that can be measured: school-day desktop clicks against evenings, weekends, phones and Canada. Widening the image audience beyond school hours lowers it.
- What would show the owner right: Images clicks holding or growing through the spring while web clicks on the same pages fall, with Lens clicks rising alongside. What would show him wrong: Images clicks falling on school days after the K-12 rollout, or after an Images layout change, while impressions hold.

### Gaps
- The K-12 rollout date and scope (does it include Images?), and how many districts switch Search back on.
- Any independent 2026 measure of Images-tab CTR over time.
- Whether AI Overviews or AI Mode answers appear inside the Images tab itself. I found nothing either way.
