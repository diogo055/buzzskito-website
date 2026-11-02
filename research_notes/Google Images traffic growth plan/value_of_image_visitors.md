# Value of Google Images and Lens visitors to a display-ad and affiliate site

Research date: Oct 30, 2026. Evidence is thin. I found one side-by-side engagement report (2013-14) and no published revenue figure for image visitors from any ad network or publisher. The range in section 7 is mostly my own reasoning from the site's numbers and is labelled as such.

**Grades.**
- **[Primary]**: figures from a stated dataset or experiment, numbers visible.
- **[Owner]**: a company, site owner or consultant states it about its own system or site, with no data or method shown.
- **[Third-party]**: someone else's estimate, or a second-hand report of a study.
- **[Unsourced]**: a claim with nothing behind it.
- **[Own site]**: BuzzSkito's own measurements or forecasts. All are from Sep-Oct 2026, off-season, so by the owner's rule they are not a guide to summer (`feedback_season_data.md`).
- **(excerpt)**: read only as a search-result excerpt, because the page blocked fetching or I did not open it.

Local sources: memory files are in `C:\Users\buzzs\.claude\projects\C--Users-buzzs-buzzskito-website\memory\`. Other paths are relative to the repo.

## 1. What do publishers report about engagement from Google Images visitors compared with normal Google visitors?

### Takeaway
Only one report gives side-by-side figures, and it is from 2013-14: one client site with 1.5 pages and 3:00 per visit from image search, against 6 pages and 6:00 from web search. I found nothing named from 2023-2026. There is a structural reason: since Google cancelled its images referrer, no publisher can segment these visitors directly (section 6). So "image visitors are low-engagement" is plausible and often repeated, but almost unmeasured.

### Cited Findings
- 2013-14, one unnamed client site: "Image search traffic in this instance has a 1.5 Pages/Visit and 3:00 Avg. Visit Duration" against "6 Pages/Visit and 6.00 Avg. Visit Duration" for web organic. **[Primary, one site, old]** — [AJ Kohn, Blind Five Year Old](https://www.blindfiveyearold.com/tracking-image-search-in-google-analytics)
- Same post: "the conversion rate on these two types of traffic is different as well", with no figures. For one term, Webmaster Tools showed 170 clicks while his Analytics filter showed 24 visits, about 40 after he adjusted for (not provided). **[Primary, one site, old]** — [AJ Kohn](https://www.blindfiveyearold.com/tracking-image-search-in-google-analytics)
- 2018, unnamed site: "30 users (cookies) came to this website via an image search in Google, and they all bounced back immediately." The author adds that the cause could be poor images or that image search just isn't important for that site. **[Primary, trivially small]** — [Yoast](https://yoast.com/image-search-google-analytics/)
- Published 2017, updated Jul 2026: "you can get thousands of visits because of images that have nothing to do with your site", and "those visitors might bounce". Topically relevant images "qualify your traffic". No figures. **[Owner]** — [Neil Patel](https://neilpatel.com/blog/drive-traffic-using-google-image-search/)
- Aug 2026: "Image traffic is not always valuable without making it useful." Off-topic searchers wanting only the picture appear mainly when images are used as metaphors. No figures. **[Owner]** — [seo2.blog / onreact](https://seo2.onreact.com/simple-image-seo-best-practices)
- 2019, updated Apr 2026: "increased traffic from image search won't necessarily lead to an increase in sales"; the author knows of no studies on it. **[Owner]** — [Salience](https://salience.co.uk/insight/magazine/conversion-seo-product-images/)
- 2021: "I have a lot of people that come to my blog every day from an image search", said by a Mediavine publisher. No engagement or earnings figure. **[Owner]** — [Mediavine On Air](https://prod.mediavine.com/blog/stepping-up-your-seo-game-podcast-transcript/)
- This site's baseline, GA4, Oct 21-23, 840 sessions: 1.14 pages per session, 52% of sessions engaged, 64 s engaged time per session, about 123 s for an engaged session. **[Own site]** — `project_mediavine_rpm_estimate.md`

### Inferences
- Kohn's 4-to-1 pages-per-visit gap cannot repeat here. This site already sits at 1.14 pages per session, and the floor is 1.0, so image visitors can be at most about 12% lower on that measure. On this site the gap that matters is the share of quick exits and time on page, not page depth.
- Kohn's 2-to-1 time gap is the only published anchor for a time discount. It is a low anchor only: one site, deep sessions, Universal Analytics duration rather than GA4 engagement time.
- The off-topic anecdotes apply least to pages where the photo is the subject of the page, such as a spider or a bite (section 5).

### Gaps
- No named 2023-2026 engagement figures after about 10 differently worded searches.
- Reddit could not be read: reddit.com blocks the search and fetch tools, so r/juststart, r/Blogging and r/SEO threads are unread. I did not use mirror sites to get around the block. Facebook groups are not readable either.
- A Journey by Mediavine community thread, ["How to see RPM per post & possibly RPM per traffic source"](https://journeymv.zendesk.com/hc/en-us/community/posts/30390980842139-How-to-see-RPM-per-post-possibly-RPM-per-traffic-source), exists but returned 403.

## 2. What do display-ad publishers report about revenue per session or RPM from Google Images versus normal search or Pinterest? Do ad networks treat it differently?

### Takeaway
No network or publisher I could read reports RPM for Google Images. Mediavine, Raptive and Ezoic treat Google as one source. They do say that the source changes engagement and price, and that short stays mean fewer ads. I found no publisher reporting that image visitors pay more or less. Pinterest, the nearest image-led source, is reported both above and below Google, so "image-led" does not by itself mean low RPM.

### Cited Findings
- "The source of your visitors affects engagement, data availability, and how much advertisers are willing to pay." Search readers are "actively looking for solutions", "leading to higher engagement and RPM". Updated Mar 18, 2025. **[Owner]** — [Raptive](https://raptive.com/resources/traffic-sources/)
- The mechanism: "Since they don't stay long, they see fewer ads, leading to a lower RPM", and "Ads refresh every 30 seconds while on screen." **[Owner]** — [Raptive](https://raptive.com/resources/traffic-sources/)
- Pinterest over time: "viral Pins could drive massive pageviews, but those visits often had low RPMs because readers bounced quickly", while "Today, Pinterest traffic is more intentional", "resulting in longer time on page and higher RPMs". No figures. **[Owner]** — [Raptive](https://raptive.com/resources/traffic-sources/)
- Raptive's source report lists Google Search, Email, Pinterest, Facebook, Instagram, Twitter, MSN, Flipboard, SmartNews, NewsBreak, Direct and Other. Google Images is not listed. **[Owner] (excerpt)** — [Raptive help](https://help.raptive.com/hc/en-us/articles/29169377863067-Performance-by-Traffic-Source)
- 2019 chart of source value against the average: "Yahoo 10.8%; Google 10.1%; Facebook 6.1%; Pinterest 3.9%; Direct 3.0%; Bing 2.5%; Twitter -15.1%; Instagram -21.2%". No dataset, period or method given. **[Owner, old]** — [Mediavine](https://www.mediavine.com/blog/what-is-performance-how-to-measure-how-to-compare/)
- "Not all traffic is created equal", "An increase in a particular source of traffic might yield lower impressions or CPMs", "U.S. traffic always has the highest CPMs", and "An increase in mobile traffic can be the reason for serving fewer impressions or lower CPMs." **[Owner]** — [Mediavine help](https://help.mediavine.com/why-did-my-rpm-drop-during-a-traffic-spike)
- Mediavine's Traffic by Source report lists the top 5 sources contributing at least 2% of revenue, and smaller ones go under "other". It does not mention Google Images. **[Owner]** — [Mediavine help](https://help.mediavine.com/traffic-by-source-report)
- Apr 20, 2026: standard RPM is diluted by sessions "where no ad could ever have served", so measure "monetizable sessions only". No figures and no mention of image search. **[Owner]** — [Mediavine](https://www.mediavine.com/blog/your-rpm-isnt-lying-to-you-but-it-might-not-be-telling-the-whole-truth/)
- 2019: on one site, SmartNews traffic earned "almost double the EPMV of Flipboard's traffic". This shows a same-site gap by referrer, not image data. **[Owner, old]** — [Ezoic](https://www.ezoic.com/blog/website-analytics-reports-for-boosting-and-monitoring-revenue)
- Pinterest above average: Q4 2024, one food blog, Pinterest about $59.93 RPM against a blog-wide $39.13, self-calculated from estimated earnings. **[Owner] (excerpt)** — [Fig Jar](https://www.figjar.com/blogging-resources/food-blog-income-report-quarter-4-2024/)
- Pinterest above average: "Pinterest still provides one of the highest RPMs of any traffic source." No figure. **[Owner]** — [Food Blogger Pro](https://www.foodbloggerpro.com/blog/pinch-of-yums-traffic-trends-2024-vs-2026/)
- Pinterest weaker on conversions: Apr 2026, says Pinterest traffic does not convert at the rates of high-intent Google traffic, with no measurements. **[Owner]** — [Kamaldeen](https://kamaldeen.com/articles/does-pinterest-traffic-convert-bloggers)

### Inferences
- Do ad networks treat image traffic differently? I found no rule or statement that they do. Google sends the same referrer for image and web clicks (section 6), so a network cannot separate them that way. Any price gap would have to come through who the visitor is (country, device, cookies), the page, and how long they stay. No network states this; it is my reasoning.
- The only published size markers for source effects are about -21% to +11% (Mediavine 2019) and about 2 to 1 (Ezoic 2019). Gaps of tens of percent look normal, and 2 to 1 is possible.
- Pinterest does not transfer as an estimate. The reports are mostly food blogs with visitors in a planning mood. It only shows that image-led visits are not automatically poor.
- "U.S. traffic always has the highest CPMs" favours image traffic here, since about 85% of image clicks are from the US.

### Gaps
- No RPM, session RPM or EPMV figure for Google Images anywhere I could read. The Mediavine and Raptive Facebook groups, where this is most likely to be discussed, are not readable by these tools.

## 3. How do image-search visitors behave on arrival, and how have Google Images interface changes affected this?

### Takeaway
I found no eye-tracking, clickstream or analytics study of what image visitors do after they land on the host page. Research stops at the results page, where most sessions never click because the results are self-contained. A Search Console image click is therefore a selected, deliberate act, but whether that person reads or leaves on seeing the picture is unknown. Interface changes have moved click volume a lot (-63% in 2013, +37% in 2018). Nothing shows what they did to visit quality.

### Cited Findings
- Unnamed commercial image search engine, log from Oct 2017: "about 62.2% of the sessions have no click", with 179,410 of 476,586 sessions having at least one click. There are "about 20 times more hover interactions than click", and an earlier study found 8 to 10 times. Lab: 40 people with an eye-tracker. Dwell time and landing-page opens were not measured. **[Primary, old]** — [Xie et al., SIGIR 2018](https://ar5iv.labs.arxiv.org/html/1805.02811)
- "Image search results are self-contained, so that users do not need to click the document". Lab participants "click a thumbnail to view and download the full-size image in the preview page" rather than visiting host pages. **[Primary, old]** — [Xie et al., WSDM 2018](https://ar5iv.arxiv.org/html/1711.09559)
- Yahoo image search has a hover, preview and click-through-to-referral-page path, used as a ranking signal for gains of about 2%. I could not read any rates. **[Primary, old] (excerpt)** — [O'Hare et al., SIGIR 2016](https://ir.webis.de/anthology/2016.sigirconf_conference-2016.64)
- A 2014 eye-tracking study covers attention on the results grid only, not the landing page. **[Primary, old] (excerpt)** — [Lu & Jia](https://link.springer.com/chapter/10.1007/978-3-319-13560-1_14)
- Google's counting rules: "Clicks to expand a thumbnail image are not counted as clicks." "Clicks on expanded images, or any image clicks that navigate the user out of Google Search, are counted as a click." On the image tab, impressions count "only when the image has been scrolled into view." **[Owner, definition]** — [Search Console Help](https://support.google.com/webmasters/answer/7042828?hl=en)
- This site, Jul 30-Oct 30: about 1 click per 1,000 image showings against about 8 for normal search. Latest day, Oct 29: 65 clicks on 37K showings, about 1.8 per 1,000. **[Own site]** — `project_image_search_oct30.md`
- 2013 redesign (year inferred; the report shows no date): 63% drop in image referrals across 87 domains, near 80% for the sites that had optimised most, no recovery after 11 weeks. **[Third-party report of a Define Media Group study, old] (excerpt)** — [WebProNews](https://webpronews.com/?p=225222)
- Feb 15, 2018: Google removed View Image, saying "The Visit button remains, so users can see images in the context of the webpages they're on" and that the changes came "in part due to our settlement with Getty Images." **[Owner, old]** — [Search Engine Journal](https://www.searchenginejournal.com/google-image-search-2/238049/)
- After that removal: average 37% more image clicks across 58 sites with 100,000+ images (news, photography, entertainment) at 90 days. One site gained 600,000 visits a month with unchanged impressions. Clicks only, no quality data. **[Third-party report of a ZenSEM study, old]** — [Search Engine Journal](https://www.searchenginejournal.com/google-image-seo-updates/255573/)
- Jul 14, 2026: Google began a staged rollout of a redesigned Images homepage, "a browseable gallery" that updates in real time, on desktop, US, English. The article does not say how gallery images link to sites. Image generation in AI Overviews was announced at the same time. **[Owner, via trade press]** — [Search Engine Journal](https://www.searchenginejournal.com/google-adds-image-generation-to-ai-overviews-revamps-images/582242/)
- Clickstream data is old or silent on Images. Jumpshot 2017 put Google Images at 21.8% of searches across major properties **[Third-party, old] (excerpt)** — [MediaPost](https://www.mediapost.com/publications/article/305618/google-image-search-loses-market-share-as-amazon.html). SparkToro in Apr 2018 described Images as "sending out an even more significant portion of traffic" but gave no numbers in its text — [SparkToro](https://sparktoro.com/blog/new-jumpshot-2018-data-where-searches-happen-on-the-web-google-amazon-facebook-beyond/). A Jul 2026 Datos analysis (13.1 billion events, panel 94.5% desktop) has no image breakdown — [iPullRank](https://ipullrank.com/zero-click-behavior-analysis-q3-2026).
- Google's current advice: "Wherever possible, make sure images are placed near relevant text". It says nothing about top-of-page placement. Last updated Mar 2, 2026. **[Owner]** — [Google Search Central](https://developers.google.com/search/docs/appearance/google-images)

### Inferences
- With View Image gone, some people who only want the file now have to pass through the page. The extra 37% of clicks in 2018 probably included lower-intent visits. No data supports or refutes this.
- A visitor who came for a specific picture needs to find it fast. If it is not on the first screen, expect an exit. A quick exit earns only what is in view at once, so on phones the sticky (adhesion) ad decision probably matters more for image visits than for average visits. That decision is still open (`CLAUDE.md`, Mediavine section). No study tests this.

### Gaps
- What share of image visitors scroll to the picture, read, or leave within seconds. No study found. Microsoft Clarity on this site can give a proxy (section 6).
- Any effect of the 2026 redesign on clicks to sites. No data found.
- I could not confirm the often-repeated claim that Google favours images high on the page. Google's current page does not say it, and I could not read the original 2018 post in English.

## 4. What intent do Lens and multimodal searchers have? Do affiliate or e-commerce sites report conversions from image search?

### Takeaway
The commercial-share claim traces to Google's advertising side. First came "20 percent of all Lens searches are shopping-related" (Oct 3, 2024, no method), then "1 in 5 Google Lens Searches shows commercial intent" (Dec 2025, footnoted only as Google internal data, April 2025). The other way to read it is that about 80% is not commercial. I found no conversion data for image or Lens visitors on any affiliate or e-commerce site, and nothing for Amazon affiliates. The only conversion numbers come from vendors of on-site visual search tools.

### Cited Findings
- "Every month, people use Lens for nearly 20 billion visual searches, and 20 percent of all Lens searches are shopping-related." Written by Shashi Thakur, VP/GM Google Ads, Oct 3, 2024. No source or method for these two figures. The same post pitches "these high-intent consumers" to advertisers. **[Owner]** — [Google](https://blog.google/products/ads-commerce/google-lens-ai-overviews-ads-marketers/)
- "Lens queries are one of the fastest growing types of Search, with more than 25 billion queries per month" and "1 in 5 Google Lens Searches shows commercial intent". Page dated Dec 2025, footnoted "Google Internal Data, April 2025". **[Owner]** — [Think with Google](https://business.google.com/ca-en/think/search-and-video/search-trends-marketing-takeaways/)
- Repeated by Dan Taylor, Google VP of Global Advertising, at a Mar 12, 2026 briefing: more than 25 billion a month, 20% commercial. **[Owner] (excerpt, page would not load)** — [Asia Business Daily](https://www.asiae.co.kr/en/article/2026031214442621001)
- Marketing blogs in the same results repeat "1 in 4" (attributed to Webandcrafts) and "62%" (attributed to Go-Globe). I found no Google source for either, and I did not open them to confirm which blog says which. "4 billion" appears to be someone's own arithmetic on 20% of 20 billion. **[Unsourced] (excerpt)** — for example [mean.ceo](https://blog.mean.ceo/visual-search-usage-statistics/), [Layers](https://www.uselayers.com/articles/ai-visual-search-ecommerce-shopify)
- Volume: "Alphabet also surpassed 50 billion visual searches per month", on the Q3 2026 call, and "one in five global AI Mode searches use voice, images or documents". This may cover more than Lens, so do not chain it with the 25 billion figure. **[Owner]** — [Yahoo Finance](https://finance.yahoo.com/markets/stocks/articles/alphabet-q3-earnings-call-highlights-050416594.html)
- Lens clicks only became visible on Sep 24, 2026, as "Web: multimodal" in Search Console (Lens, Circle to Search on Android, image uploads, Chrome's "Search this image"). John Mueller: "the data wasn't previously in the counts, the report has new data." **[Owner]** — [Search Engine Roundtable](https://www.seroundtable.com/google-search-console-multimodal-search-type-filter-42156.html). No query data for this type. — [Search Console Help](https://support.google.com/webmasters/answer/17011259?hl=en)
- Vendor claims, about on-site tools and not Google Images: Syte "+177%" conversion **[Owner] (excerpt)** — [Syte](https://www.syte.ai/visual-discovery-suite-lp-fbcp/). Boohoo Camera Search users 85% higher conversion **[Owner] (excerpt)** — [case study](https://www.casestudies.com/company/syte/case-study/boohoo-customer-case-study). Syte's own footnote compares shoppers who clicked its results with the average shopper, which is self-selection **(excerpt)** — [Syte, Venca](https://www.syte.ai/case-studies/product-discovery/venca/).
- A contact-lens retailer's image clicks went from 799 to 1.49K. Clicks only, no sales. **[Owner] (excerpt)** — [Growth.pro](https://www.growth.pro/seo-case-study/optimising-image-search)
- A report on a John Mueller office-hours session claims some e-commerce sites saw conversions rise 15-20% from image-driven visits, with no data behind it. **[Unsourced] (excerpt)** — [WebProNews](https://www.webpronews.com/googles-john-mueller-unique-landing-pages-boost-image-seo/)
- On this site, page type decides Amazon clicks: product pages about 275 per 1,000 Canadian views, remedy about 157, information about 18 (GA4, Sep 2-Oct 19). Adding Amazon boxes to information pages was tried in September and did nothing. **[Own site]** — `CLAUDE.md`, "What drives Amazon clicks"
- Image clicks per page, Oct 22-29: spiders 5.3, bites 3.8, other ID 1.6, everything else 0.6, mosquito/tick other 0.4, product 0. **[Own site]** — `project_image_search_oct30.md`
- GA4 Amazon clicks stayed flat at about 250 a week while sessions rose 34% in the week of Oct 22-28 ("hardly any US Amazon clicks"). Amazon.ca earned 22.5 cents a click in October. **[Own site]** — `data/god-build/work-plan-2026-10-28.md`

### Inferences
- Google's 20% does not transfer to pest identification. It covers all Lens use, and a Lens photo of a spider is not a shopping search. Treat it as irrelevant here, not as a floor.
- Using the site's own rates, a Canadian reader on an information page is worth about 0.4 cents of Amazon income (18 clicks per 1,000 × 22.5 cents). Image visitors are about 85% US and land on ID and bite pages, so their Amazon value is probably lower still.
- Since Lens clicks were not reported anywhere before Sep 2026, any older claim about how Lens visitors behave on publisher sites cannot rest on Search Console data.

### Gaps
- No Amazon affiliate data on image or Lens visitors. No e-commerce study comparing image search and web search conversion that shows numbers.
- This site's multimodal click count is unknown as of Oct 30. A screenshot was requested from the owner (`project_image_search_oct30.md`).

## 5. For identification and health-adjacent queries, is there evidence those visitors read further than someone browsing wallpaper images?

### Takeaway
No direct evidence. Nothing I found measures reading by query type. Indirect evidence leans only mildly positive: learning-type image searches are a real and different group, people say they like image search for skin problems, and on this site spider pages draw well above-average image clicks per showing. Bite and other ID pages do not stand out from the rest. Treat "ID visitors read more" as a hypothesis to test, not a finding.

### Cited Findings
- Intent shares in image search. Survey: 27% Explore/Learn, 66% Locate/Acquire, 7% Entertain. Search log: 56%, 39%, 5%. 211 valid survey cases, 475 log sessions, 35 lab students. **[Primary, small, old]** — [Xie et al., WSDM 2018](https://ar5iv.arxiv.org/html/1711.09559)
- Same study: clicks on results run Explore/Learn << Locate/Acquire << Entertain (p<0.01), and dwell on the results page is longer for Explore/Learn than for Entertain (p<0.02). These are clicks to a preview, not visits to a host page. **[Primary, old]** — [Xie et al.](https://ar5iv.arxiv.org/html/1711.09559)
- Randomized study of skin-condition searching, Lens against text, Oct-Dec 2023, 372 panel respondents. Over 90% were satisfied with each. Image search was preferred on 5 of 6 dimensions and by 9.9% overall (p=0.004). 82.5% (95% CI 78.2-86.3) want image search in future searches. The abstract reports stated preferences only, with no click, page-visit or reading measure, and I could not open the full text. Preprint by Google authors. **[Primary, Google-run]** — [research.google](https://research.google/pubs/a-randomized-study-on-image-versus-text-based-internet-search-for-consumer-dermatology-information-seeking/), [medRxiv (excerpt)](https://www.medrxiv.org/content/10.1101/2024.10.25.24316155v1)
- This site, Oct 22-29, image click rate per showing: spiders 0.23%, mosquito/tick other 0.13%, bites 0.12%, other ID 0.09%, everything else 0.08%. 336 clicks in total. Pages were sorted by words in the URL, so it is rough. Four pages (chigger bites, flea bites, tick-vs-bed-bug, baby cockroaches) took about 30% of showings (62,608) and 68 clicks, about 0.11%. **[Own site]** — `project_image_search_oct30.md`

### Inferences
- Someone after a wallpaper has what they want once they have the file. Someone asking "what is this, is it dangerous, what do I do" has not had that answered by a thumbnail, so there is a reason to expect more reading. Nothing proves it.
- The opposite pull: learning-type searchers click least in the lab study, so many get their answer from the grid. Those who do click are a selected minority, which could mean more motivated readers, but the data does not show it.
- Expect differences by topic to matter more than differences by surface. The site should compare ID and bite pages with other pages among its image-dominant pages.

### Gaps
- No study of time on page or scroll depth for image visitors by query type. Nothing on pest or bite searches specifically. The abstract of Google's dermatology study shows no behavioural measure.

## 6. How can a site measure this? What is the most reliable method for a small site?

### Takeaway
Referrer methods cannot work, because Google deliberately keeps sending google.com for image clicks and tells site owners to use Search Console instead. The most reliable method is a read-only, page-level comparison. Join Search Console clicks by search type with GA4 landing-page metrics and Mediavine page data, then compare pages with high and low image share within the same page type. Cross-check with a before/after on the pages that gained image clicks after Oct 24. It changes nothing on the site, so it cannot break ads or analytics.

### Cited Findings
- Google planned an `images.google.com` referrer in Jul 2018, then reversed. It keeps google.com or the country domain, and "the best place to measure query and click traffic from Google Images is in the Search Console Performance Report." **[Owner]** — [Google](https://blog.google/products/marketingplatform/analytics/update-referral-source-urls-google-images/); reversal also reported by [Search Engine Land (excerpt)](https://searchengineland.com/google-says-image-search-referrals-will-not-get-new-source-url-but-forgets-to-tell-us-317135)
- This site's GA4 confirms it: image visitors arrive as google / organic and no referrer contains "images". **[Own site]** — `project_image_search_oct30.md`
- Old methods relied on referrers that are now gone: Kohn's `/imgres?` filter (2013-14) — [AJ Kohn](https://www.blindfiveyearold.com/tracking-image-search-in-google-analytics). Yoast's "google images / organic" source (2018) — [Yoast](https://yoast.com/image-search-google-analytics/).
- GA4's Organic Search channel is rule-based on source and medium, and Google's page does not mention an image source. AI Overviews and AI Mode are also inside it. — [Analytics Help](https://support.google.com/analytics/answer/9756891?hl=en)
- Search Console types. "Image": "Includes search traffic from results shown in the Google Images tab." "Web: multimodal": "Includes search traffic when users search using images (such as with a smartphone camera)." **[Owner]** — [Search Console Help](https://support.google.com/webmasters/answer/7576553)
- Clicks attach to the host page: "In search analytics data, an image is simply a link to the URL of the host page", and separate images on a page are not distinguished. **[Owner]** — [Search Console Help](https://support.google.com/webmasters/answer/7042828?hl=en)
- Multimodal data can be exported from the interface ("Click 'Export'") — [Google](https://developers.google.com/search/blog/2026/09/web-multimodal-in-sc?hl=en). It has no queries, and on this site the API returned HTTP 400 for it — `project_image_search_oct30.md`.
- Clicks and sessions do not match by design: the definitions differ, and session timeouts and repeat visits pull the two counts apart **[Third-party, 2015] (excerpt)** — [Bounteous](https://www.bounteous.com/insights/2015/08/05/google-search-console-vs-google-analytics-why-clicks-dont-match-sessions/). Search Console reports in Pacific Time and lags 2-3 days **[Third-party] (excerpt)** — [GSC PAP](https://gscpap.com/guides/correlate-organic-clicks-to-ga4-conversions), [Crawl Raven](https://crawlraven.com/blog/gsc-vs-ga4-numbers-dont-match).
- On this site, sessions are about 1.59 × Google web clicks. **[Own site]** — `data/god-build/work-plan-2026-10-28.md`
- Search Console's per-page country split is unreliable here: with page + country filter, 62.6% of Canadian clicks had no page attribution. Country totals are fine. **[Own site]** — `reference_gsc_per_page_country_is_fiction.md`
- Mediavine Top Pages gives Revenue, Pageviews, RPM, CPM, Fill Rate, Viewability and Impressions/Page, for the top 100 pages only. It warns against reading RPM on low-traffic pages and suggests using Impressions/Page with CPM. No export is mentioned. **[Owner]** — [Mediavine help](https://help.mediavine.com/using-page-level-data-to-improve-your-performance)
- Device, traffic source, country and page reports depend on GA and arrive on the second day. **[Owner]** — [Mediavine help](https://help.mediavine.com/ga4-reporting-mediavine-dashboard). Set reporting to New York time so revenue and traffic line up. — [Mediavine help](https://help.mediavine.com/why-did-my-rpm-drop-during-a-traffic-spike)
- GA4 counts a session as engaged if it lasts over 10 seconds, has a key event, or has 2+ page views **(excerpt)** — [Analytics Help](https://support.google.com/analytics/answer/12195621?hl=en). A vendor measured GA4 under-reporting average engagement time by about 55% **[Third-party, vendor] (excerpt)** — [Clickport](https://clickport.io/blog/ga4-engagement-metrics).
- The site already sends `amazon_click` and `recirculation_click` to GA4 and runs Microsoft Clarity. **[Own site]** — `CLAUDE.md`

### Inferences

**Comparing the methods (my assessment):**

| Method | Separates image visitors? | Risk to ads or analytics | Verdict |
|---|---|---|---|
| GA4 page referrer check | No: Google sends google.com | None | Spend 5 minutes looking for any `lens.google.com` or `android-app://` values, then stop |
| Server logs | No: same Referer header, and no ad data. Adds only ad-blocked and bot counts | None | Skip |
| Page-level comparison of image share | Statistically, not per visitor | None, read-only | **Use this** |
| Before/after on pages that gained image clicks | Statistically | None, read-only | Use as the cross-check. Season change and the Mediavine launch contaminate it, so it needs control pages |
| URL tagging of image clicks | Not possible: Google picks the host URL, and variants would threaten canonicals and the `check:sitemap` guard | High | Do not do it |
| Passive GA4 event "lead photo seen" on a few pages | No, but shows whether visitors reach the picture | Low, but it is new code on ad pages | Optional, later. Clarity scroll data may be enough |
| Blocking images on some pages as a holdout | Would work | Loses real traffic | Do not do it |

**Recommended method (no site changes):**
1. Pull per page for the same 28 days, leaving out the last 3 days. From Search Console: Image, Web and Discover clicks by API, Multimodal by interface export. From GA4, with landing page and session source/medium = google / organic: sessions, engaged sessions, views per session, `amazon_click` count. Split sessions by country in GA4, not in Search Console, because of the per-page country problem above.
2. Compute image share per page: Image ÷ (Image + Web + Multimodal + Discover).
3. First test whether image clicks become sessions at all. Across pages, fit sessions = a × web clicks + b × image clicks. If b is far below a, many image clicks never register in GA4 and the value per click is lower than the value per session. Kohn's 170 clicks against 24-40 visits in 2013-14 is why this is worth checking.
4. Within each page type (spider and other ID, bite, remedy, information), fit each metric against image share, weighted by sessions, with US share and phone share as controls. The fitted value at 100% image share against 0% gives the image-to-web ratio. Report the interval. If it spans 1.0, say "no detectable difference".
5. After Mediavine has one full month, add Impressions/Page and CPM from Top Pages. Group pages, because low-traffic RPM is unreliable and only 100 pages are shown.
6. Cross-check: pages whose image share jumped after Oct 24 against same-type pages whose share did not, before and after.
7. Look at Clarity scroll depth on the 10 most image-dominant pages against 10 similar low-share pages.
8. Label everything off-season and repeat in June.

**Sample size, my rough calculation.** Suppose high-share pages are 60% image and low-share pages 5%, and the true gap in engaged rate is 15 points. The observed gap would then be about 8 points, needing about 600 sessions per group for 80% power. At about 65 image clicks a day, that is a few weeks if the clicks concentrate on a modest number of pages, as they appear to. Revenue per session is noisier and will take longer.

**Main weakness.** Pages that attract image clicks may differ in other ways, such as more photos or shorter text. Matching by page type reduces this but does not remove it, so treat the result as an estimate, not a controlled test. GA4's google / organic also holds Discover, AI Mode and Lens clicks, which is why those columns must be in the share.

### Gaps
- Whether Lens or Circle to Search clicks ever pass a distinct referrer. I found no source. The 5-minute check above answers it for this site.
- Where image thumbnails clicked on the main All tab are counted. Google's "Image" definition covers the Images tab, so those clicks probably fall under Web, but no page I read says so.
- Why sessions run 1.59 × web clicks. Multimodal and Discover clicks may be part of it, and step 3 may help explain it.

## 7. What range should we use for value per image visit relative to a normal search visit, and how far should the 3 to 5 cents be discounted?

### Takeaway
Plan on **0.7× a normal Google visit from the same country** (range 0.5-1.0×, low confidence). In money, plan on **about 1.5 Canadian cents per image visit** (range 1-3 cents): about 2 cents in Nov-Dec and summer, about 1 cent in Jan-Mar. Yes, discount the 3-5 cents, by about half or more. Even with identical engagement, image visitors produce very little of the Amazon.ca income in that blend, so they would earn about 2.5 cents in good months. Lens visitors have no data of their own, so use the same figure for now. Everything rests on an unlaunched ad estimate and off-season data.

### Cited Findings
**Inputs:**
- Forecast (CAD a month), Mediavine / Amazon.ca / Amazon.com: Dec 300 / 650 / 10, Jan 200 / 400 / 15, May 1,150 / 800 / 60, Jul 1,800 / 1,200 / 100. Ads are not live, so these are estimates. Amazon is about 69% of the total in December and about 42% in July. **[Own site, forecast]** — `data/god-build/work-plan-2026-10-28.md`
- Mediavine estimate per 1,000 sessions on ad pages: Nov-Dec about CA$20 (14-28), Jan-Mar CA$9-15, summer CA$15-25. About 4 ad impressions per session. Country mix of sessions: about 41% US, 40% Canada, 19% elsewhere. The sticky phone ad could add 20-40%. **[Own site, estimate]** — `project_mediavine_rpm_estimate.md`
- Image clicks Oct 22-29: USA 284 of 336. About 60-65 image clicks a day against about 320 from normal search. **[Own site]** — `project_image_search_oct30.md`

**Evidence that image visits are worth less:**
- 1.5 against 6 pages and 3:00 against 6:00 (2013-14) — [AJ Kohn](https://www.blindfiveyearold.com/tracking-image-search-in-google-analytics); 30 of 30 bounced (2018) — [Yoast](https://yoast.com/image-search-google-analytics/).
- "Since they don't stay long, they see fewer ads", and viral Pins historically earned low RPMs because readers bounced — [Raptive](https://raptive.com/resources/traffic-sources/).
- Results are "self-contained", and 62.2% of sessions have no click — [Xie et al.](https://ar5iv.arxiv.org/html/1711.09559), [Xie et al.](https://ar5iv.labs.arxiv.org/html/1805.02811).
- A rise in one source "might yield lower impressions or CPMs" — [Mediavine](https://help.mediavine.com/why-did-my-rpm-drop-during-a-traffic-spike).
- Off-topic and picture-only visitors — [Neil Patel](https://neilpatel.com/blog/drive-traffic-using-google-image-search/), [onreact](https://seo2.onreact.com/simple-image-seo-best-practices).
- No product-page image clicks, about 18 Amazon clicks per 1,000 Canadian views on information pages, and hardly any US Amazon clicks — `CLAUDE.md`, `project_image_search_oct30.md`, `data/god-build/work-plan-2026-10-28.md`.

**Evidence that image visits are worth as much or more:**
- A click requires expanding the image and then leaving Google, so it is a deliberate act — [Search Console Help](https://support.google.com/webmasters/answer/7042828?hl=en).
- About 85% US, and "U.S. traffic always has the highest CPMs" — [Mediavine](https://help.mediavine.com/why-did-my-rpm-drop-during-a-traffic-spike). Raptive also ranks the US first and Canada in the next tier **(excerpt)** — [Raptive help](https://help.raptive.com/hc/en-us/articles/20016740721563-Performance-by-Country).
- Pinterest, also image-led, is reported at above-average RPM in some food-blog data — [Fig Jar (excerpt)](https://www.figjar.com/blogging-resources/food-blog-income-report-quarter-4-2024/), [Food Blogger Pro](https://www.foodbloggerpro.com/blog/pinch-of-yums-traffic-trends-2024-vs-2026/). Mediavine's 2019 chart has it below Google, at +3.9% against +10.1% — [Mediavine](https://www.mediavine.com/blog/what-is-performance-how-to-measure-how-to-compare/).
- Spider pages get about 2 to 3 times the image click rate of other page groups on this site (0.23% against 0.08-0.13%), though bite and other ID pages sit within that normal band (0.12%, 0.09%) — `project_image_search_oct30.md`.
- People prefer image search for skin problems (Google-run, stated preference only) — [research.google](https://research.google/pubs/a-randomized-study-on-image-versus-text-based-internet-search-for-consumer-dermatology-information-seeking/).

### Inferences

Everything here is my reasoning, not a published figure.

**The formula:** image visit value ≈ (session RPM on ad pages) × (US-mix uplift) × (stay factor) + (about 0.15 cents of Amazon).

| Piece | Site-wide visit | Image visit | Basis and confidence |
|---|---|---|---|
| Ads, Nov-Dec and summer | about 2¢ | 2¢ × 1.2 × 0.7 = **1.7¢** (1.2-2.4¢) | Uplift assumes US = 1, Canada = 0.7, elsewhere = 0.4 (my assumption), giving 0.77 site-wide and 0.93 for image visitors. Low confidence |
| Ads, Jan-Mar | about 1.2¢ | 1.2¢ × 1.2 × 0.7 = **1.0¢** (0.7-1.4¢) | Same |
| Amazon | about 1-4.5¢, depending on month | about **0.15¢** (0.05-0.4¢) | US: Amazon.com forecast CA$10 on about 6-8K US sessions in Dec, about 0.15¢. Canada: 0.4¢ at the information-page rate. Assumes 85% US, 5% Canada, 10% elsewhere. Medium on direction, low on size |
| **Total** | **3-5¢** | **about 1.8¢ in good months, about 1.2¢ in Jan-Mar** | Single planning figure: 1.5¢ |

- **Stay factor:** 0.5 to 1.0, central 0.7. The low end is Kohn's 2-to-1 time gap. The high end is no difference. Pages per session cannot fall much here, and ads in the first screen should still serve unless the visitor leaves within a second or two, so I do not go below 0.5. Above 1.0 is possible on ID and bite pages, but nothing supports planning on it.
- **Same-country comparison:** 1.8¢ ÷ 2.55¢ ≈ 0.7×. This is the fair answer to "compared with a normal search visit", because geography cancels and the Amazon pieces are close.
- **The discount holds at equal engagement.** With a stay factor of 1.0, an image visit is about 2.5¢ in good months and about 1.6¢ in Jan-Mar, still below 3¢. It would pass 3¢ only near the top of the Nov-Dec estimate. So I am medium-confident that the right number is under 3 cents, and low-confident about where it sits within 1-3 cents.
- **The base can move.** If real Mediavine US RPMs come in far above the estimate, every number rises in proportion. The structure stays: mostly a US ad visit, with little Amazon.
- **Scale check.** A Canadian reader on a product page earns about 6¢ from Amazon alone (275 clicks per 1,000 × 22.5¢), more than three image visits in total. That figure is off-season.

**Effect on what the owner was told:**

| | Told Oct 30 | At 1-3¢ | At the planning figure |
|---|---|---|---|
| Now, about 1,900 visits a month | CA$60-100 | CA$19-57 | about CA$30 at 1.5¢ |
| July 2027 guess, 5,000-15,000 visits | CA$150-750 | CA$50-450 | CA$100-300 at 2¢ |
| Per 1 million showings at about 1.8 clicks per 1,000 | not given | CA$18-54 | about CA$27 at 1.5¢ |

- Today image search is about 17% of Google clicks (65 of 385 a day) but about 7% of Google-visit value, using 1.5¢ against 4¢.
- 100,000 image visits a month would be about CA$2,000 at 2¢. At today's click rate that needs about 55 million showings a month, against about 1.1 million now.

**Is it worth chasing at scale? My read: worth having, not worth chasing alone.** It pays when the cost is close to zero, such as real photos on existing pages, which also serve the pages' normal readers. It does not justify building pages only for image rankings on current numbers. Three things would change that:
- The page-level comparison shows a ratio of 0.9× or better, on ad impressions especially. Then use about 2.5¢.
- Image click-through rises well above about 2 per 1,000.
- Lens (multimodal) turns out to be large and well engaged.

If the ratio comes in at 0.5× or lower, use about 1¢.

**Biggest levers on the value, in order (my judgement):** share of image visitors who stay past the first screen, whether an ad is in view immediately (the sticky ad decision), and real US RPM.

### Gaps
- Every published input is old, tiny or from a different kind of site. No source gives a value per image visit. The 3-5 cents is itself an estimate until Mediavine is live.
- No summer data exists for image visitors. Oct 2026 clicks are a recent step-change, so visitor behaviour may shift as the channel settles.
- The Canada and elsewhere weights in the US-mix uplift are my assumptions. The only sample I saw was one niche site at US RPM $21.58 against Canada $15.02, as a search excerpt of a Reddit post on a mirror site that I did not open (reddit.com itself is blocked to these tools): [r/juststart mirror (excerpt)](https://lr.us.psf.lt/r/juststart/comments/1b0kkow/rpm_cpm_by_country).
