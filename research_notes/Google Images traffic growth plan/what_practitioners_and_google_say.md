# What practitioners, publishers and Google say about Google Images, Google Lens and multimodal search (Jan 2025 to Oct 30, 2026)

Grades on every finding: **[G]** official Google source I read directly. **[G-via]** a Google statement I could read only through a secondary report. **[D]** named practitioner or researcher with data. **[O]** named practitioner's opinion. **[F]** forum report. **[U]** unsourced or untraceable. Anything before 2025 carries its year.

Limits on this evidence: Reddit refused both my search tool and my fetch tool. The one X post I tried to open returned HTTP 402, so X appears here only as search snippets. Search Engine Land and Search Engine Watch returned HTTP 403 to fetches. LinkedIn was barely visible. So "nothing found" below means nothing in what I could reach. It is weak evidence of silence, above all for forums and social posts.

## 1. What exactly is the Multimodal search type added around Sep 24, 2026?

### Takeaway
It is a new sub-type of Web in the Search Console Performance report that reports web results from searches where an image, photo or screenshot was used (Lens, Circle to Search, image uploads, Chrome's Search this image). It has no query data, Google's John Mueller says it is new data that was not in the earlier counts, and three independent tests show the API does not return it. Only two named sources have published real numbers, one site each: about 0.2% and about 2% of text-search impressions, with click rates of about 0.5% to 1%.

### Cited Findings
**What Google says it counts**
- [G] Announced Sep 24, 2026 by Harsh Kharbanda (Product Manager Lead, Google Lens) and Moshe Samet (Product Manager Lead, Search Console). It appears in the Search results report and the Generative AI features report, and covers Lens, Circle to Search on Android, image uploads to Google Search and Chrome's right-click Search this image. Rollout is global, metrics appear only if a site receives this traffic, and the post points to the Export button. It gives no figures — [Google Search Central](https://developers.google.com/search/blog/2026/09/web-multimodal-in-sc?hl=en)
- [G] The help page lists five search types: Web text-based, Web multimodal, Image, Video and News. Multimodal is described as traffic when people search using images, such as with a phone camera. Image is described as results in the Google Images tab — [Search Console Help](https://support.google.com/webmasters/answer/7576553)
- [G] The queries dimension is unavailable for this type because such searches mostly use images. The page does not explain how position or clicks are counted for multimodal, and multimodal is not listed as a Search appearance type — [Search Console Help, dimensions](https://support.google.com/webmasters/answer/17011259?hl=en)
- [G-via] The filter tooltip says it tracks results triggered by a query that uses an image, photo or screenshot — [Search Engine Roundtable](https://www.seroundtable.com/google-search-console-multimodal-search-type-filter-42156.html)
- [G-via] In the Generative AI report the multimodal slice shows impressions only, since that report has no clicks or queries. That report launched Jun 3, 2026 and reached all sites Aug 31, 2026 — [PPC Land](https://ppc.land/google-search-console-gains-lens-and-circle-to-search-data-without-queries/); [Search Engine Journal](https://www.searchenginejournal.com/google-search-console-multimodal-filter/590781/)

**Is it included in the Web total?**
- [G] The announcement does not say. The help page describes web as text-based or multimodal, but never says in one sentence how totals combine — [Google Search Central](https://developers.google.com/search/blog/2026/09/web-multimodal-in-sc?hl=en); [Search Console Help](https://support.google.com/webmasters/answer/7576553)
- [G-via] John Mueller, on Bluesky, after checking with the team: "the data wasn't previously in the counts, the report has new data." — [Search Engine Roundtable](https://www.seroundtable.com/google-search-console-multimodal-search-type-filter-42156.html)
- [D, conflicts with the line above] Dave Smart reported matching drops in impressions and clicks from Sep 10 on a few properties, without figures. Google has not explained this — [Search Engine Roundtable](https://www.seroundtable.com/google-search-console-multimodal-search-type-filter-42156.html)
- [D] Christian Ott found no multimodal values on or before Sep 9 on his property, so his series starts Sep 10. Linus Li also sees a start around Sep 9-10. Google has published no start date — [SEO-Kreativ](https://www.seo-kreativ.de/en/blog/search-console-multimodal-en/); [Linus Li](https://www.linusseo.com/en/gsc-web-multimodal/); [PPC Land](https://ppc.land/google-search-console-gains-lens-and-circle-to-search-data-without-queries/)
- [O, secondary] Ott paraphrases a German-language Mueller reply of Sep 27: multimodal is recorded separately, the way Image Search is separate from web search — [SEO-Kreativ](https://www.seo-kreativ.de/en/blog/search-console-multimodal-en/)

**The API**
- [G] The Search Analytics API lists six `type` values (discover, googleNews, news, image, video, web) and no multimodal value. The page was last updated Aug 11, 2026, before the launch — [API reference](https://developers.google.com/webmaster-tools/v1/searchanalytics/query)
- [D] Three separate tests agree that API `type=web` equals the text-based view, so multimodal is absent:
  - Ott: six device totals matched for Jun 22 to Sep 21, one property — [SEO-Kreativ](https://www.seo-kreativ.de/en/blog/search-console-multimodal-en/)
  - Suganthan Mohanadasan: 21,380 clicks and 2,263,857 impressions over three months matched, one client site — [Suganthan](https://suganthan.com/notes/search-console-multimodal/)
  - Linus Li: nine days compared (Sep 12-20). On Sep 20 both showed 260 clicks and 33,303 impressions, while the 773 multimodal impressions were not in the API — [Linus Li](https://www.linusseo.com/en/gsc-web-multimodal/)
- [O, contradicted] Arnav Mukherjee of TofuBofu, a vendor, inferred from reading documentation on Sep 26 that `type: web` returns text and multimodal blended. He ran no queries, and the three tests above contradict him — [TofuBofu](https://tofubofu.com/blog/search-console-multimodal-api-gap)

**What site owners have reported since launch**
- [D] Christian Ott, seo-kreativ.de (an SEO blog, one property). Sep 10-21: multimodal 407 impressions and 2 clicks, against text 201,457 impressions and 410 clicks, so about 0.2% of impressions. CTR 0.5% against 0.2%, average position 2.5 against 10.6. 89% of multimodal impressions were on phones against about 22% for text. One page took 45% of the impressions. Top countries were India 98, Germany 47, UK 43, USA 36. He stresses that this is one property and tells readers to check their own data — [SEO-Kreativ](https://www.seo-kreativ.de/en/blog/search-console-multimodal-en/)
- [D] Linus Li (Shenzhen SEO firm, one unnamed client site with product pages). Last 28 days: 102 clicks, 10.6K impressions, about 1% CTR, average position 1.6, about 2% of daily text impressions. The Generative AI report showed 3,994 multimodal impressions over three months, mostly product pages plus one styling guide. He warns that position and CTR are not comparable with text results, and his guess that Lens-style layouts explain this is unconfirmed. His team sees 100+ sites but publishes only this one — [Linus Li](https://www.linusseo.com/en/gsc-web-multimodal/)
- [O] Suganthan Mohanadasan gives no multimodal numbers. He finds the Pages tab the useful part, says the report is hard to act on without query or image context, and advises a monthly check rather than action — [Suganthan](https://suganthan.com/notes/search-console-multimodal/)
- [O] Brian Weerasinghe (Oct 14) repeats that one site proves nothing and hypothesises that product stores see a larger share than an SEO blog. Check Ott's original numbers rather than this reprint: the table, as my tool read it, swaps the two average positions — [AI Eating The World](https://www.aieatingtheworld.com/articles/visual-search-search-console-multimodal)

### Inferences
- Multimodal and the Image tab are separate search types, so buzzskito.ca's 60-65 Image clicks a day are not multimodal clicks, and the Sep 24 split cannot by itself have moved the Image tab. Multimodal clicks would be additional to both Image and text-based Web.
- Anything built on the Search Console API, including this project's own pulls, undercounts Google clicks by the multimodal amount. The only route today is a manual export from the interface.
- A click rate of 0.5-1% at average positions of 1.6-2.5 would be very poor for text results. That may mean many Lens views end without a click, but it rests on two sites and Google has not said what position means here.
- A site whose readers photograph a bug may sit well above these two sites. That is untested, and a manual export from the owner's property would answer it in minutes.

### Gaps
- Whether any multimodal traffic sat inside Web before Sep 10 (Smart's drops against Mueller's statement) is unresolved.
- Whether the interface's default Web selection now shows text-based only or a sum. Google does not say, and the owner can check this in the property.
- I found no multi-site benchmark, no page-type study and no pest or identification site data. Launch coverage carries no site-owner figures — [Search Engine Journal](https://www.searchenginejournal.com/google-search-console-multimodal-filter/590781/); [Search Engine Roundtable](https://www.seroundtable.com/google-search-console-multimodal-search-type-filter-42156.html)
- Bulk export: I found no source saying it carries a multimodal split. One developer issue tracker is still waiting on documentation — [GitHub issue](https://github.com/LowcountryDigitalWorks/gas-engine/issues/83)
- Whether Search Live and image prompts in AI Mode count as multimodal is not stated — [PPC Land](https://ppc.land/google-search-console-gains-lens-and-circle-to-search-data-without-queries/)

## 2. What has Google officially said about Lens, Circle to Search and visual search volumes?

### Takeaway
The newest official figure is over 50 billion visual searches a month (Pichai, Oct 28, 2026), which is not labelled as Lens and has no stated definition. The widely repeated 25 billion Lens figure was published in June 2026 but is footnoted to April 2025 data. Every official number counts searches on Google. None counts clicks to websites, and none is specific to the Google Images tab.

### Cited Findings
**Official figures, oldest first**
- [G] Oct 3, 2024 (older): Lilian Rincon wrote that about one in five Lens searches are shopping-related. I saw this post only as a search excerpt — [Google blog](https://blog.google/products/shopping/visual-search-lens-shopping/)
- [G] Oct 29, 2024 (older), Q3 2024 call: Lens over 20 billion visual searches a month and among the fastest-growing query types. Circle to Search on over 150 million Android devices, with a third of people who tried it using it weekly — [Pichai remarks](https://blog.google/company-news/inside-google/message-ceo/alphabet-earnings-q3-2024/)
- [G] Feb 4, 2025, Q4 2024 call: Circle to Search on over 200 million devices. People who have tried it start more than 10% of their searches with it — [Pichai remarks](https://blog.google/company-news/inside-google/message-ceo/alphabet-earnings-q4-2024/)
- [G] Apr 24, 2025, Q1 2025 call: Circle to Search on more than 250 million devices, usage up nearly 40% in the quarter. Monthly Lens visual searches up 5 billion since October — [Pichai remarks](https://blog.google/company-news/inside-google/message-ceo/alphabet-earnings-q1-2025/)
- [G] June 2025, Think with Google (Rose La Prairie interviewing Lens co-founder Lou Wang, Google internal data): more than 1.5 billion people use Lens each month, Lens up 65% year over year (Apr 2024 to Apr 2025), more than 100 billion visual searches in Jan-May 2025. The piece gives no click data — [Think with Google](https://business.google.com/en-all/think/search-and-video/google-lens-ai-visual-search/)
- [G] Jul 23, 2025, Q2 2025 call: strong growth in multimodal Search, especially Lens and Circle to Search, strongest among younger users. No figure — [Pichai remarks](https://blog.google/company-news/inside-google/message-ceo/alphabet-earnings-q2-2025/)
- [G-via] Jul 23, 2025 podcast: Robby Stein cited 65% year-over-year growth in visual searching in the multimodal case. PPC Land also reports Circle to Search on over 300 million devices — [PPC Land](https://ppc.land/google-reports-65-surge-in-visual-searches-as-ai-mode-drives-multimodal-adoption/)
- [G] Oct 29, 2025, Q3 2025 call: no mention of Lens, visual search or Circle to Search. AI Mode over 75 million daily users — [Pichai remarks](https://blog.google/company-news/inside-google/message-ceo/alphabet-earnings-q3-2025/)
- [G] Feb 4, 2026, Q4 2025 call: Circle to Search on over 580 million Android devices. Nearly one in six AI Mode queries are non-text (voice or images) — [Pichai remarks](https://blog.google/company-news/inside-google/message-ceo/alphabet-earnings-q4-2025/)
- [G] Apr 29, 2026, Q1 2026 call: no Lens or visual figures. Search Live named as a multimodal capability — [Pichai remarks](https://blog.google/company-news/inside-google/message-ceo/alphabet-earnings-q1-2026/)
- [G] June 2026, Think with Google APAC: Lens over 25 billion visual searches a month, 1 in 5 with commercial intent, Circle to Search over 10% of queries for younger consumers. All three are footnoted to Google Internal Data, April 2025 — [Think with Google](https://business.google.com/en-all/think/search-and-video/ai-search-marketing-customer-journey-india/)
- [G] Jul 14, 2026, Google Images 25th anniversary post by Brad Kellett: Circle to Search on more than 580 million devices. No usage figures for Google Images or Lens, and nothing on referral traffic — [Google blog](https://blog.google/products-and-platforms/products/search/google-images-25th-anniversary/)
- [G] Jul 22, 2026, Q2 2026 call: no mention of Lens or visual search. AI Mode over 1 billion monthly users — [Pichai remarks](https://blog.google/company-news/inside-google/message-ceo/alphabet-earnings-q2-2026/)
- [G] Oct 28, 2026, Q3 2026 call: over 50 billion visual searches a month, one in five AI Mode searches use voice, images or documents, AI Mode queries about three times longer, query growth the highest in five years. Lens and Circle to Search are not named — [Pichai remarks](https://blog.google/company-news/inside-google/message-ceo/alphabet-earnings-q3-2026/); [transcript](https://www.fool.com/earnings/call-transcripts/2026/10/29/alphabet-googl-q3-2026-earnings-call-transcript/)

**Recycled or misattributed claims**
- 25 billion as a June 2026 figure: Scalevise presents it as June 2026 and Crypto Briefing calls it a forecast. Google's own footnote dates the data to April 2025, which also fits 100 billion in Jan-May 2025 — [Scalevise](https://scalevise.com/resources/google-lens-25-billion-monthly-visual-searches/); [Crypto Briefing](https://cryptobriefing.com/google-visual-searches-50-billion-monthly/); [Think with Google](https://business.google.com/en-all/think/search-and-video/ai-search-marketing-customer-journey-india/)
- [U] Google Images as 22% or 22.6% of searches, repeated in 2026 guides without a source. The nearest origin I could reach is 2017 Jumpshot data with Rand Fishkin, showing 21.8%. I could not verify 22.6% against the 2018 SparkToro post — [Digital Applied](https://www.digitalapplied.com/blog/image-seo-2026-visual-search-optimization-guide); [MediaPost, 2017](https://www.mediapost.com/publications/article/305618/google-image-search-loses-market-share-as-amazon.html)
- [D] The newer figure I could trace: almost 11% of American desktop users' Google Search activity was on Google Image Search in 2024 (SparkToro with Datos panel data). That measures activity, not clicks — [Search Engine Roundtable](https://www.seroundtable.com/google-searcher-activity-study-38999.html)
- [U] 3.88% of Google searches ending in a click to another Google product is credited to a SparkToro/Datos 2026 study on a page dated March 2026. SparkToro's 2026 post came out in June, uses Similarweb data and gives no such figure — [Search Lab](https://searchlab.nl/en/statistics/search-engine-market-share-statistics-2026); [SparkToro](https://sparktoro.com/blog/in-2026-less-than-one-third-of-google-searches-still-send-a-click/)
- [U] Claims I could not trace to any data: 20-40% of organic traffic from image search, visual search growing 30% a year, 3-8% of publisher traffic, 4.3% or 3% of clicks (Ahrefs-based), 28.5% of clicks to Google-owned properties. Treat all as unusable until someone finds the origin.
- [U] A 65% surge since AI Mode went multimodal: this is misattributed, because Google's 65% covers Apr 2024 to Apr 2025 and AI Mode's multimodal launch came in April 2025 — [Think with Google](https://business.google.com/en-all/think/search-and-video/google-lens-ai-visual-search/); [Google blog](https://blog.google/products/search/ai-mode-multimodal-search/)
- [D, vendor estimate] Similarweb estimates images.google.com at 12.6M visits, down 6.18% month on month (labelled September 2026). It covers one host, so I would not read it as Google Images overall — [Similarweb](https://www.similarweb.com/website/images.google.com/)

### Inferences
- 50 billion is not like-for-like with 25 billion, because one is called visual searches and the other Lens. If the definition were the same it would mean a doubling in about 18 months, but Google has not said so.
- Google's growth story is about cameras, screenshots and AI Mode. It offers no evidence about the Google Images tab, which is the surface where this site jumped.
- Search volume is not click volume. Nothing official lets anyone turn 50 billion into visits.

### Gaps
- Google's definition of visual searches, and whether it includes queries in the Images tab.
- Any official click, referral or country figure (including Canada) for Lens, Circle to Search or Images.
- I/O 2026: I read only secondary coverage and found no official visual search figure from the event.

## 3. What are recognized practitioners saying about image search as a channel?

### Takeaway
Recognized names are mostly talking about multimodal content for AI answers, or about Lens as a commercial curiosity, not about Google Images as a click channel. The clearest pro-channel argument from a named expert is Glenn Gabe's, from June 2025 and with caveats. I found nothing on the topic from Aleyda Solis, Marie Haynes or Eli Schwartz, and nothing image-specific in 2025-2026 from Cyrus Shepard or Danny Sullivan.

### Cited Findings
**Leaning positive**
- [O, screenshots without published figures] Glenn Gabe, Jun 16, 2025, The Forgotten Coupling: clicks and impressions in image search stayed in step while web search decoupled, and AI Overviews were not hurting image search so far. He suggests image search as a partial offset to AI Overview losses and describes a large publisher whose image clicks recovered strongly after a technical fix. His caveats: image traffic is well below web, this may not last, and core updates still reach it — [GSQi](https://www.gsqi.com/marketing-blog/the-forgotten-coupling-image-search-video-mode-and-news-tab-in-search/)
- [G] Gary Illyes (2019, older) said in an AMA that Images and Video search are overlooked by publishers and have large potential — [Search Engine Roundtable, 2019](https://seroundtable.com/media-search-overlooked-by-publishers-google-27100.html)
- [O] Kevin Indig, Jan 19, 2026 podcast: he notes Google's billions of Lens searches, thinks even a 20% e-commerce share would be huge, and wonders whether Lens offsets erosion in classic search. He says plainly that nobody knows, and guesses Lens sends people to a Shopping results page with ads. Gianluca Fiorelli raised the topic — [Advanced Web Ranking](https://www.advancedwebranking.com/blog/beyond-old-seo-models-ai-search)
- [U] Vendor and agency guides call Google Images underused or neglected. They have a commercial stake and their statistics do not trace — [LLMrefs](https://llmrefs.com/blog/google-image-seo); [Love Marketing](https://love.marketing/blog/image-seo-free-traffic)

**Leaning sceptical or redirecting**
- [O] Lily Ray, Jan 19, 2026: in traditional search an image was another route to a website, while in AI search images and other media become raw material for the answer. She argues for multimodal content on those grounds, which is not a claim about clicks — [Lily Ray](https://lilyraynyc.substack.com/p/a-reflection-on-seo-and-ai-search)
- [D, 2020, older] Kevin Indig found a strong negative correlation (about -0.7) between image boxes and website traffic, concluding that more images on the results page means less traffic. I saw this as a search excerpt — [Growth Memo, 2020](https://www.growth-memo.com/p/the-impact-of-image-serp-features-on-traffic)
- [G, 2022, older] John Mueller said visual searching is rare in many areas, and that a stock image used in many places makes Image Search harder because Google shows one copy — [Search Engine Roundtable, 2022](https://www.seroundtable.com/google-searching-visually-is-rare-34193.html)
- [O] Arnav Mukherjee (vendor) expects most B2B firms to see close to nothing from multimodal, without data — [TofuBofu](https://tofubofu.com/blog/search-console-multimodal-api-gap)
- [D] Cyrus Shepard's Oct 2026 one-site opt-out test estimated about 0.9% CTR on AI impressions. Organic clicks also fell when AI features were off. Barry Schwartz calls it a very limited study, and it is not about images — [Search Engine Roundtable](https://www.seroundtable.com/google-ai-overviews-mode-ctr-42421.html)

**Google staff, 2025-2026**
- [G-via] John Mueller, Sep 2026: an image-heavy site can now see which pages appeared for multimodal searches and how often — [Search Engine Roundtable](https://www.seroundtable.com/google-search-console-multimodal-search-type-filter-42156.html)
- [G-via] John Mueller, Apr 2025: serving images through streaming stops them being found by search engines. Oct 2026: JPEG XL is unsupported in Google Images and Discover. These are technical remarks, not a view on the channel — [Search Engine Roundtable](https://seroundtable.com/google-image-streaming-is-not-seo-friendly-39279.html); [Search Engine Roundtable](https://www.seroundtable.com/google-jpeg-xl-42352.html)
- [G-via] Danny Sullivan left the Search Liaison role in Aug 2025. I found no 2025-2026 comment from him on images. His last relevant remark I found is from Dec 2023 (older), about using licensed images in some features — [Search Engine Roundtable](https://www.seroundtable.com/danny-sullivan-drops-google-search-liaison-39872.html); [Search Engine Roundtable, 2023](https://www.seroundtable.com/google-image-attribution-vs-license-images-36595.html)

**Reporters and others**
- [D] Barry Schwartz tracks Image Search product changes steadily, about a dozen items in 2026, none of them a traffic analysis — [Search Engine Roundtable tag page](https://www.seroundtable.com/tag/google-images)
- [D, secondary] Brodie Clark flagged the filter on launch day and, per Passionfruit's timeline, flagged Merchant listings and Google Images impression spikes on LinkedIn on Mar 30, 2026 — [X snippet](https://x.com/brodieseo/status/2103098703037026484); [Passionfruit](https://www.getpassionfruit.com/research/your-search-console-data-has-been-wrong-for-a-year)
- [O] Dan Petrovic (DEJAN) wrote about Lens modes from Chromium source. This is unofficial and technical, and I saw it only as a search excerpt — [DEJAN](https://dejan.ai/blog/google-lens-modes/)

### Inferences
- Recognized names treat visual search mainly as an input to AI answers or as an e-commerce matter. An information site earning from Image-tab clicks is not the case any of them is writing about.
- Practitioners on both sides are more cautious than the vendors. Gabe, Indig and Mohanadasan all hedge. The confident numbers come from pages selling something.

### Gaps
- Aleyda Solis, Marie Haynes, Eli Schwartz: targeted searches returned nothing on this topic. Their X, LinkedIn and newsletter posts were not reachable, so this is absence in my reach and not proof of silence.
- Cyrus Shepard: nothing on Google Images found.
- A search summary mentioned a 2026 analysis arguing that classic Google Images has long been declining as activity moves to camera search. I could not identify or verify that page, and the one I checked (varyvoda.com) makes no such claim. Do not use it.

## 4. What do site owners say in forums? Have others reported sudden image-search jumps in 2026?

### Takeaway
I found no public report of a sudden Image-tab click jump in 2026, whether lasting or reversing. The biggest forums were unreachable, though, so this is a real blind spot. The October forum talk I could read is about Discover, News, ranking volatility and bots, not images.

### Cited Findings
- [F] WebmasterWorld's October 2026 thread has no post mentioning images. The posts I could read run Oct 2-9 and cover weak Discover and News traffic. Brett_Tabke saw most accounts roughly flat, while gatormark reported traffic up over 35% after ranking gains. Nothing from the Oct 16-27 window was visible to me there — [WebmasterWorld](https://www.webmasterworld.com/google/5134184.htm)
- [F, via reporter] Forum digests in Search Engine Roundtable for Oct 16, 21, 24 and 27 cover poor traffic, vanished conversions, suspected bots, stale News stories and short Discover spikes. One poster reported traffic up 70% year over year and others saw impressions up with clicks down 60-70%. None mentions image search — [Oct 16](https://www.seroundtable.com/google-search-ranking-volatility-chatter-42317.html); [Oct 21](https://www.seroundtable.com/google-search-ranking-volatility-42347.html); [Oct 25](https://www.seroundtable.com/google-search-ranking-volatility-heated-42373.html); [Oct 27](https://www.seroundtable.com/google-search-ranking-volatility-42379.html)
- [F] The only 2026 image-view anecdote I found: Peter Martin of WoodCentral (Oct 25, 2026) reports a gallery image with over 75K views since April 2026 and quotes a reply naming Discover, Image Search and AI features as likely sources. There is no daily data or Search Console evidence. The reply looks like an AI answer rather than a Google statement, so do not treat it as one — [WoodCentral](https://www.woodcentral.com/-/peter/how-google-can-drive-traffic-spikes/)
- [O] Glenn Gabe's unnamed large publisher (2025): the image-click surge followed that site's own technical fix, not a Google change — [GSQi](https://www.gsqi.com/marketing-blog/the-forgotten-coupling-image-search-video-mode-and-news-tab-in-search/)
- [D, secondary] A known reporting case: practitioners flagged Google Images impression spikes in late March 2026, days before Google's Apr 3 logging-error note. Google said clicks were not affected — [Passionfruit](https://www.getpassionfruit.com/research/your-search-console-data-has-been-wrong-for-a-year); [Data anomalies](https://support.google.com/webmasters/answer/6211453)
- [F, older, date not verified] An old WebmasterWorld thread shows an image-traffic collapse that turned out to be a referrer change, a reminder that past swings have been measurement artefacts — [WebmasterWorld](https://www.webmasterworld.com/google/4149889.htm)
- [O] Casey Markee, a food-blog SEO specialist, appears in interviews that cover image optimisation, but the material I could see has no click figures — [Niche Pursuits](https://www.nichepursuits.com/?p=58391)

### Inferences
- The question of whether such jumps last or reverse cannot be answered from public reports, so the owner's own daily series is the best evidence available.
- The one documented reporting bug in this area hit impressions and not clicks. A rise in clicks is therefore less likely to be that kind of artefact, though it cannot be ruled out.

### Gaps
- Reddit (r/SEO, r/bigseo, r/juststart): inaccessible to my tools, so I can report nothing either way.
- X and LinkedIn threads: not readable beyond snippets.
- Mediavine and Raptive communities: nothing reachable. My searches returned only ad-network comparison pages. Food, craft and DIY publishers are the most likely to have comparable experience, and someone with access should ask there directly.

## 5. Did anything change in Google Images or its reporting that could explain sudden jumps?

### Takeaway
I found no Google-side change dated to Oct 18 or Oct 26 that specifically touches Google Images, and Google's data-anomalies page has no September or October entry. The nearest events are unconfirmed ranking volatility on Oct 16, 20-21, 24 and 27. The site's own changes (robots fix Oct 11, image sitemap Oct 24) fit the timing at least as well.

### Cited Findings
**Reporting and logging**
- [G-via] Jun 17, 2025: AI Mode data counted in Search Console totals — [PPC Land](https://ppc.land/google-reports-65-surge-in-visual-searches-as-ai-mode-drives-multimodal-adoption/)
- [D, secondary] Sep 12, 2025: removal of the &num=100 parameter cut scraper-driven impressions — [Passionfruit](https://www.getpassionfruit.com/research/your-search-console-data-has-been-wrong-for-a-year)
- [G] Apr 3, 2026 entry: a logging error prevented accurate impression reporting, affecting CTR and position but not clicks. Passionfruit quotes the affected period as starting May 13, 2025 — [Data anomalies](https://support.google.com/webmasters/answer/6211453); [Passionfruit](https://www.getpassionfruit.com/research/your-search-console-data-has-been-wrong-for-a-year)
- [G] Aug 13 and Aug 13-17, 2026: logging errors affecting Discover and generative AI reporting, with the AI-in-Search data later restored. The fetched page has no entry naming Images or multimodal, and none dated September or October 2026 — [Data anomalies](https://support.google.com/webmasters/answer/6211453)
- [O] Glenn Gabe flagged an odd Search Console click drop from Aug 12, 2026 with analytics stable. Seen as an X snippet — [X](https://x.com/glenngabe/status/2089397660809588856)
- [G] Sep 24, 2026: the multimodal split, with data from about Sep 10 — [Google Search Central](https://developers.google.com/search/blog/2026/09/web-multimodal-in-sc?hl=en); [SEO-Kreativ](https://www.seo-kreativ.de/en/blog/search-console-multimodal-en/)
- [D, secondary] Oct 11, 2026: Barry Schwartz saw Performance data over 64 hours stale, falling to 44 hours the same morning. That is a lag and not a logging change. Google's response is reported inconsistently, and search types are not specified — [RSWebSols](https://www.rswebsols.com/news/google-search-console-updates-are-delayed-by-several-days-october-2026/)

**Google Images and visual product changes**
- [G-via] Jan 23, 2025: AI Overviews in Circle to Search. May 27, 2025: AI Overviews with image carousels — [Search Engine Roundtable](https://www.seroundtable.com/google-ai-overviews-come-to-circle-to-search-38792.html); [Search Engine Roundtable](https://www.seroundtable.com/google-ai-overviews-image-carousel-39474.html)
- [G] Sep 30, 2025: visual results in AI Mode, using visual search fan-out, US English — [Google blog](https://blog.google/products/search/search-ai-updates-september-2025/)
- [G-via] Nov 12, 2025: search ads tested in image results. Jun 16, 2026: ads mixed among organic image results — [Search Engine Roundtable](https://www.seroundtable.com/google-images-ad-carousel-40412.html); [Search Engine Roundtable](https://www.seroundtable.com/google-image-search-mix-ads-41511.html)
- [G-via] Feb 26, 2026: Circle to Search looks at the whole image — [Search Engine Roundtable](https://www.seroundtable.com/google-circle-to-search-update-40996.html)
- [G] Jul 14, 2026: a new browsable Images home (desktop, US, English, signed in, rolling out over the following weeks), and image generation inside AI Overviews. The same post lists a 2026 search box accepting multiple image uploads, without a date — [Google blog](https://blog.google/products-and-platforms/products/search/google-images-25th-anniversary/)
- [G-via] Sep 14, 2026: Google says image thumbnails are normally slow to update (headline only). Sep 16, 2026: a collections change — [Search Engine Roundtable](https://www.seroundtable.com/google-search-slow-image-thumbnails-42072.html); [Search Engine Roundtable](https://www.seroundtable.com/google-images-suggested-by-al-42096.html)
- [G-via] Oct 2026, the only Images items I found: Oct 23, JPEG XL not supported, and Oct 28, a test of a Save button on image hover — [Search Engine Roundtable](https://www.seroundtable.com/google-jpeg-xl-42352.html); [Search Engine Roundtable](https://www.seroundtable.com/google-images-save-button-overlay-42394.html)

**Rankings**
- [D] Timeline: May 2026 core update finished Jun 2. An Aug 2026 spam update ran Aug 18-21. An unconfirmed Sep 4 change reportedly reverted Sep 13. The Sep 2026 spam update ran Sep 24 to Oct 8. Unconfirmed volatility on Oct 16, Oct 20-21, Oct 24 and Oct 27, the last reported as still heating up on Oct 29. Google has confirmed none of those four volatility events — [Search Engine Roundtable updates](https://www.seroundtable.com/category/google-updates); [Oct 27](https://www.seroundtable.com/google-search-ranking-volatility-42379.html)
- [O] Glenn Gabe reported two sites in one niche dropping out of results and returning on Oct 16 at 8:15 PM, which he attributes to Google's side — [Search Engine Roundtable](https://www.seroundtable.com/google-search-ranking-volatility-42347.html)
- [O] Glenn Gabe has said broad core updates can reach image search visibility (2025) — [X snippet](https://x.com/glenngabe/status/1934660676913430966)
- [D, secondary] Rank trackers are themselves unreliable right now. Ahrefs says 5-20% of results served to tools are poisoned depending on provider, Nozzle measured about 8% of pages, and DataForSEO's CTO estimated 20-30% since Sep 26. Semrush reports the same problem. Google has not confirmed it, and I read these mainly as summaries — [PPC Land](https://ppc.land/ahrefs-says-google-poisons-5-to-20-of-results-served-to-seo-data-tools/); [PPC Land](https://ppc.land/google-feeds-rank-trackers-swapped-results-on-8-of-pages-nozzle-finds/); [Techwyse](https://www.techwyse.com/news/search-seo/semrush-inaccurate-google-serps-rank-tracking)

**The site's own changes, from project notes**
- [Project note] `/_next/` was unblocked in robots.txt on Oct 11, 2026. The notes say the block had kept images out of Google Images — [project CLAUDE.md](C:\Users\buzzs\buzzskito-website\CLAUDE.md)
- [Project note] `/image-sitemap.xml` launched Oct 24, 2026 with 1,232 images on 189 pages — [project CLAUDE.md](C:\Users\buzzs\buzzskito-website\CLAUDE.md)

### Inferences
- The most plausible explanations are site-side, ranking-side or both. The Oct 18 jump comes 7 days after the robots fix and 2 days after the Oct 16 volatility. The Oct 26 jump comes 2 days after both the image sitemap launch and the Oct 24 volatility, so those two are confounded and public sources cannot separate them.
- A useful test: did Image clicks rise mainly on pages whose images were newly crawlable or newly in the sitemap, and did Web clicks move on the same dates? Gabe's publisher example shows that a site-side image fix can produce this pattern.
- Product changes do not fit well. The new Images home is US, desktop and signed-in only and dates from July. The other October items are minor or came after the jumps.
- The multimodal split should not touch Image-tab numbers, because the two are separate types, though Google has not stated this directly.

### Gaps
- No Google statement on any change to Image Search ranking or display in October 2026.
- Whether the Oct 16-27 volatility touched the Image tab. Trackers do not measure it, and no report mentions it.
- Whether other sites saw Image clicks move on the same dates. This is the single most useful missing fact.

## 6. How are AI Overviews, AI Mode and Lens changing clicks from visual searches?

### Takeaway
Google says its visual and AI surfaces link out and send billions of clicks, while independent experiments on general (mostly text) searches show large click losses. I found no independent measurement of clicks from visual searches specifically. The nearest thing is two single-site multimodal readings of about 0.5-1% CTR. Whether the Image tab still resists these losses rests on one June 2025 observation.

### Cited Findings
**Google's position**
- [G] AI Mode's visual results: each image carries a link to click out and learn more, and shoppers can go to the retailer (Sep 30, 2025, Robby Stein and Lilian Rincon) — [Google blog](https://blog.google/products/search/search-ai-updates-september-2025/)
- [G] Multimodal AI Mode gives a detailed response with links (April 2025; search excerpt) — [Google blog](https://blog.google/products/search/ai-mode-multimodal-search/)
- [G] Google says it sends billions of clicks to websites every week through AI features in Search (Jul 22, 2026). There is no visual breakdown or baseline — [Pichai remarks](https://blog.google/company-news/inside-google/message-ceo/alphabet-earnings-q2-2026/)
- [G-via] Google argued in 2024 (older) that widening result types in Lens and Circle to Search gives more sites a chance at clicks. Seen as a search excerpt, because the page blocked my fetch — [Search Engine Land, 2024](https://searchengineland.com/google-lens-and-circle-to-search-gains-more-links-facts-and-ai-overviews-440652)
- [G-via] John Mueller said in July 2025 that clicks from AI Overview pages are higher quality — [PPC Land](https://ppc.land/google-reports-65-surge-in-visual-searches-as-ai-mode-drives-multimodal-adoption/)

**Independent evidence, none specific to visual searches**
- [D] Agarwal and Sen (Indian School of Business, Carnegie Mellon), a working paper not yet peer-reviewed. A randomised experiment with 1,065 US desktop Chrome users, Jan-Feb 2026: outbound organic clicks fell 38% on queries with AI Overviews, and zero-click searches rose from 54% to 72%. The coverage does not say whether image searches were included — [Search Engine Journal](https://www.searchenginejournal.com/ai-overviews-cut-organic-clicks-38-field-study-finds/573145/)
- [D] University of Pennsylvania and Northeastern researchers, arXiv, Aug 18, 2026. A preregistered experiment with 1,100 US adults: AI Mode cut external click-through by 18.8 percentage points. AI Overviews were hidden in only 51.1% of cases in the no-AI arm — [Techwyse summary](https://www.techwyse.com/news/search-seo/google-ai-mode-reduces-publisher-clicks-study-2026); [arXiv](https://arxiv.org/abs/2608.18352)
- [D] Semrush, about 69 million US sessions: 92-94% of AI Mode sessions had no external click. Growth Memo's task study: 77.6% of sessions had no external visit, shopping prompts nearly always produced clicks, and non-transactional tasks almost never did (Kevin Indig's summary, Oct 21, 2025) — [Search Engine Journal](https://www.searchenginejournal.com/the-impact-of-ai-mode-on-seo-analysis-of-10-studies/558816/)
- [D] SparkToro (Rand Fishkin, Jun 2026, Similarweb panel, US, browsers only): 68.01% of Google searches ended with no click in Jan-Apr 2026, up from 60.45% in 2024. Google Images is not broken out, and the panels differ between years — [SparkToro](https://sparktoro.com/blog/in-2026-less-than-one-third-of-google-searches-still-send-a-click/)
- [D] Multimodal readings: Ott 0.5% CTR, Li about 1% — [SEO-Kreativ](https://www.seo-kreativ.de/en/blog/search-console-multimodal-en/); [Linus Li](https://www.linusseo.com/en/gsc-web-multimodal/)
- [D, secondary] Peec AI data via a recap: the share of AI Overviews with an inline external link rose from near zero to 26.2% over Sep 10-20, 2026, and some inline links open a new AI Mode query rather than a website — [WebCrawlSpace](https://webcrawlspace.com/seo/google-search-recap-october-2026/)

**The Image tab**
- [O] Glenn Gabe (Jun 2025): AI Overviews were not hurting image search so far. I found nothing updating this for 2026 — [GSQi](https://www.gsqi.com/marketing-blog/the-forgotten-coupling-image-search-video-mode-and-news-tab-in-search/)
- [G-via] Since then Google has added competing elements around images: ads mixed among organic image results (Jun 2026) and image creation inside AI Overviews (Jul 2026) — [Search Engine Roundtable](https://www.seroundtable.com/google-image-search-mix-ads-41511.html); [Google blog](https://blog.google/products-and-platforms/products/search/google-images-25th-anniversary/)
- [O] Kevin Indig guesses Lens sends many users to a Shopping page where Google can show ads — [Advanced Web Ranking](https://www.advancedwebranking.com/blog/beyond-old-seo-models-ai-search)

### Inferences
- Visual and AI surfaces probably keep more visits on Google than classic results do, but that is an extrapolation from text-search experiments.
- Identification searches may be especially exposed: the reader wants a name, and Lens or AI Mode can give it on the spot. That fits the Growth Memo pattern for non-transactional tasks. On this reasoning the click would have to be earned with what comes after the name (what to do, how to confirm it). There is no pest-specific data behind this.
- Google's move toward AI Mode for visual queries (one in six non-text in Feb 2026, one in five including documents in Oct 2026; the two measures differ slightly) means visual growth may increasingly happen where clicks are scarcest.

### Gaps
- No study separates visual from text queries when measuring clicks.
- No click data exists for Lens by result type, because Search Console has no such split and Google has not published any.
- Whether AI Overviews now appear inside the Images tab in a way that affects clicks: I found no measurement.

## 7. Is the owner right that nobody is talking about this?

### Takeaway
Partly. Lens and multimodal search are being talked about plenty, by Google on earnings calls and by the SEO press and agencies since Sep 24. What is rare is real click data, and rarer still is anyone treating the Google Images tab as a growth channel in 2026, so the owner's sense of silence holds for that narrower thing. The silence has ordinary explanations, and the evidence I found does not support "huge" yet.

### Cited Findings
**Evidence that people are talking**
- [G] Pichai put visual search in the Q3 2026 earnings remarks, and Google product leads wrote the Search Console announcement — [Pichai remarks](https://blog.google/company-news/inside-google/message-ceo/alphabet-earnings-q3-2026/); [Google Search Central](https://developers.google.com/search/blog/2026/09/web-multimodal-in-sc?hl=en)
- [D] The launch was covered by Search Engine Roundtable, Search Engine Journal and PPC Land, and my searches surfaced more than 30 agency and vendor explainers within five weeks. The ones I sampled mostly restate Google's post — [Search Engine Roundtable](https://www.seroundtable.com/google-search-console-multimodal-search-type-filter-42156.html); [Search Engine Journal](https://www.searchenginejournal.com/google-search-console-multimodal-filter/590781/); [PPC Land](https://ppc.land/google-search-console-gains-lens-and-circle-to-search-data-without-queries/)
- [D] Consumer tech press covered the Images redesign in July 2026 — [Engadget](https://engadget.com/2214477/google-images-25th-anniversary-makeover); [9to5Google](https://9to5google.com/2026/07/14/google-images-redesign/); [Gizmodo](https://gizmodo.com/google-images-is-trying-to-be-pinterest-2000785569)

**Evidence that the owner has a point**
- [D] I found only two named sources with real multimodal numbers, and no multi-site study — [SEO-Kreativ](https://www.seo-kreativ.de/en/blog/search-console-multimodal-en/); [Linus Li](https://www.linusseo.com/en/gsc-web-multimodal/)
- [D] Search Engine Roundtable's 2026 Images coverage is product news, not traffic analysis. Its Oct 23 and Oct 28 recaps carry two minor Images items among many AI and ads stories — [tag page](https://www.seroundtable.com/tag/google-images); [Oct 23 recap](https://www.seroundtable.com/recap-10-23-2026-42368.html); [Oct 28 recap](https://www.seroundtable.com/recap-10-28-2026-42398.html)
- [F] The October forum talk I could read does not mention images — [WebmasterWorld](https://www.webmasterworld.com/google/5134184.htm); [Search Engine Roundtable](https://www.seroundtable.com/google-search-ranking-volatility-heated-42373.html)
- [O] The overlooked framing is itself old: Illyes in 2019, Gabe in 2025 — [Search Engine Roundtable, 2019](https://seroundtable.com/media-search-overlooked-by-publishers-google-27100.html); [GSQi](https://www.gsqi.com/marketing-blog/the-forgotten-coupling-image-search-video-mode-and-news-tab-in-search/)

**Reasons for the quiet that have a source**
- [G, D] Measurement: multimodal has no queries and no API, so dashboards built on the API cannot see it — [API reference](https://developers.google.com/webmaster-tools/v1/searchanalytics/query); [Linus Li](https://www.linusseo.com/en/gsc-web-multimodal/)
- [G, 2018, older] Google has pointed to Search Console as the place to measure Images traffic since 2018. I saw this as a search excerpt — [Google blog, 2018](https://blog.google/products/marketingplatform/analytics/update-referral-source-urls-google-images/)
- [U] One guide says GA4 does not separate Images from organic, which I could not confirm — [PolyTraffic](https://polytraffic.pages.dev/articles/image-seo-visual-search-traffic.html)
- [D] Small numbers on the sites reporting: about 0.2% and about 2% of text impressions — [SEO-Kreativ](https://www.seo-kreativ.de/en/blog/search-console-multimodal-en/); [Linus Li](https://www.linusseo.com/en/gsc-web-multimodal/)
- [D, headline only] Attention is on AI: a survey headline in the Oct 28 recap says 44% of SEOs are more worried about AI than a year ago, and the same recap's SEO stories mostly concern AI visibility — [Oct 28 recap](https://www.seroundtable.com/recap-10-28-2026-42398.html)
- [D, secondary] Tools are unreliable right now because of the poisoned-results problem — [PPC Land](https://ppc.land/ahrefs-says-google-poisons-5-to-20-of-results-served-to-seo-data-tools/); [Search Engine Roundtable](https://www.seroundtable.com/google-search-ranking-volatility-42379.html)
- [U] Credibility: the loudest image-search statistics do not trace to data (see question 2).

**Scale, from project notes**
- [Project note] About 150 image-plus-Lens clicks a week on Oct 24 (about 8% of Google clicks), and the owner's goal is 50,000 Google visitors a month by July 2027 — [project CLAUDE.md](C:\Users\buzzs\buzzskito-website\CLAUDE.md)

### Inferences
- The fair verdict is under-reported rather than undiscovered. People know about visual search and few are publishing click data on Google Images, partly because it is hard to measure and usually small.
- Silence is not proof of opportunity. It would fit a hidden channel, and it would equally fit a channel that is too small or too low-click for most sites to bother with. The public evidence cannot separate those.
- 60-65 clicks a day is about 1,900 a month, roughly 4% of the 50,000 goal. It looks like a real signal worth testing, and the rise from about 21 a day on Oct 24 is too recent to extrapolate. What would change this view: Image clicks holding for four or more weeks, spreading beyond a few pages, and growing in a way the Oct 11 and Oct 24 site changes alone cannot explain.
- The site may have an unusual fit that the public cases do not cover. People photograph unknown bugs, and identification and bite pages are visual by nature. That is a hypothesis to test, not a finding. The manual multimodal export is the cheapest first check.

### Gaps
- Reddit, X and LinkedIn remain the main unknown. Someone with access should search them for October 2026 Image-tab reports before anyone concludes that nobody else saw this.
- No public figure exists for how much of a typical information site's Google clicks come from the Image tab, so I cannot say whether this site is unusual.
