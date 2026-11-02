# Does publishing many more images increase Google Images and Lens traffic?

Researched Oct 30, 2026. Older evidence carries its year.

**Evidence grades used on every claim:**
- **[Google]**: a Google document, blog post or employee statement.
- **[Controlled]**: an experiment with a control.
- **[Correlation]**: a correlation study.
- **[Anecdote]**: a practitioner report or uncontrolled case.
- **[Unsupported]**: repeated widely, no evidence found.
- **[Documents]**: a patent or the 2024 leak. These show a field or method existed, not that it is used or how much it weighs.
- **[Platform]**: Next.js, Vercel or WordPress documentation or code.
- **[Academic]**: a peer-reviewed log or lab study.
- **[Site data]**: BuzzSkito's own numbers, measured for these notes. Uncontrolled, Sep-Oct only (end of season), and not an experiment.

Site data comes from read-only scripts in the session scratchpad: [img_baseline.py](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/img_baseline.py) (Search Console pulls by page, plus a crawl of 412 live pages), [img_quasi.py](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/img_quasi.py) (git history against Search Console), [img_debug.py](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/img_debug.py) and [img_source.py](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/img_source.py). All Search Console figures use a single dimension (`page` or `date`), as the site's rules require.

## Objective: what is known, what is folklore, and does quantity work?

### Takeaway
I found no controlled test, anywhere, showing that more images on a page or site raises image impressions or clicks. Google's statements point elsewhere: fit between image and page, one stable URL per image, page strength, placement high on the page, and reused images being harder to rank.

On BuzzSkito itself, going from almost no images to many clearly coincided with a large rise: image clicks went from about 16 a week to 271 a week within three weeks. That rise has no control group, starts from near zero and overlaps other changes.

The best reading is that quantity works as **coverage** (no image means no image traffic, and each new distinct photo on a page with visual demand is a new chance), not as **density**. Whether "a lot more" helps pages that already have photos is untested. It should be tested before it is scaled, and the site can run that test for free (see the test question below).

### Cited Findings
**Known (Google has said so):**
- [Google] Google finds images through the `src` of `<img>` elements and does not index CSS background images — [Image SEO best practices, updated Mar 2, 2026](https://developers.google.com/search/docs/appearance/google-images).
- [Google] Google takes the image's subject from the page, including captions and titles, so images should sit near relevant text on relevant pages — [same page](https://developers.google.com/search/docs/appearance/google-images).
- [Google] If an image appears on several pages, "consistently reference the image with the same URL, so that Google can cache and reuse the image" — [same page](https://developers.google.com/search/docs/appearance/google-images).
- [Google] Image ranking weighs the authority of the page and its freshness, and prioritises sites "where the image is central to the page, and higher up on the page" — [Google blog, Sep 24, 2018](https://blog.google/products/search/making-visual-content-more-useful-search/).
- [Google] Changing image URLs "will affect your website in Google Images" and images are recrawled less often — [Mueller via SEJ, Jan 2019](https://www.searchenginejournal.com/google-changing-image-urls-will-affect-rankings-in-image-search/286163/).
- [Google] EXIF is "not used for ranking" — [Mueller video via Search Engine Roundtable, Feb 2021](https://www.seroundtable.com/google-on-image-seo-in-detail-30911.html).

**Probable, size unknown:**
- [Google] "For image search, if it's the same image as used in many places, it'll be harder" — [Mueller tweet via SEJ, Jun 2020](https://www.searchenginejournal.com/stock-photography-and-seo/373153/).
- [Controlled] Unique images beat duplicates in one small controlled test, with no effect size given and an invented keyword — [Reboot Online, 2019](https://www.rebootonline.com/blog/long-term-duplicate-image-experiment/).

**Folklore or unsupported:**
- [Unsupported] Image count as a ranking factor. No evidence, says [SEJ's review, Dec 2021](https://www.searchenginejournal.com/ranking-factors/image-quantity/), which cites no study. I found no Google statement setting a number. The only hard limit is 1,000 images per URL in a [sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps).
- [Unsupported] An image sitemap lifts traffic by itself. Google's page promises no indexing ([sitemap doc](https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps)), and Mueller said of re-indexing, "I don't think it would speed that up" ([SEJ, Apr 2022](https://www.searchenginejournal.com/why-updating-images-can-backfire/445977/)).
- [Unsupported] Licence or `ImageObject` markup lifts ranking. The docs describe a badge only and "does not guarantee" display, and say nothing about ranking ([licence metadata doc](https://developers.google.com/search/docs/appearance/structured-data/image-license-metadata)).
- [Controlled] Choosing images that score well in Google's Vision API helps web ranking: no correlation between relevant images and rankings across 20 sites. The authors also report Mueller saying Vision is not currently used in search ([Reboot, Dec 2021](https://www.rebootonline.com/blog/cats-vs-dogs-google-image-relevancy-experiment/)).
- [Unsupported] "Lens weights alt text heavily." This appeared in a search summary of vendor blogs, and I could not tie it to a named source. A vendor page I read in full says "Google hasn't confirmed any Lens-only signals" ([ImageSEO, Oct 2026](https://imageseo.io/blog/how-google-lens-works-2026/)). The one large study found only 11.4% of Lens results matched on alt text ([Backlinko, 2020](https://backlinko.com/visual-search-ranking-factors)).

### Inferences
- The owner's instinct is half right. Real photos on pages people search for visually clearly coincide with image traffic. "A lot more images" as a goal in itself has no support and carries some risk.
- The stronger levers, in order of evidence, are stable URLs, placement, page fit and photos not already everywhere. All are cheaper than mass publishing.
- **Value check.** At the roughly CA$20 session RPM in the [Mediavine estimate noted in project memory](file:///C:/Users/buzzs/.claude/projects/C--Users-buzzs-buzzskito-website/memory/project_mediavine_rpm_estimate.md), 271 clicks a week is about CA$23 a month, assuming image visitors behave like other visitors. That assumption is unverified. Even ten times this is small against the [goal of about CA$32,200 in 12 months](file:///C:/Users/buzzs/buzzskito-website/data/god-build/goal-2027.md). Image traffic is worth having cheaply, not worth a large build on faith.

### Gaps
- No published controlled test of image count on image traffic. SearchPilot's public results surfaced only an alt-text test. Reboot's list has no image-count test.
- A 2026 test by Milana Kostova on Search Engine Land (47 articles, six months) could not be read, because Search Engine Land returned 403. An [AI-assisted summary](https://www.writtenlyhub.com/news/visual-assets-seo-test-images-infographics-rankings) gives no numbers or control group, so it is unusable until someone reads the original.
- No Sistrix or Kevin Indig dataset on image search turned up. A vendor claim from [SEOJuice (35K pages)](https://smart.seojuice.io/tools/seo-mythbusters/do-more-images-hurt-rankings) appeared only in a search summary and was not verified.

## What does Google's own documentation say about Google Images?

### Takeaway
Google documents how to be eligible and understood, and gives almost no ranking detail. It says nothing about image count. Its original-versus-reused comments come from employees, not the documentation, and they partly disagree with each other.

### Cited Findings
- [Google] Alt text is treated as the most important metadata attribute. Keyword stuffing is discouraged and can be treated as spam. Short descriptive filenames are preferred — [Image SEO best practices](https://developers.google.com/search/docs/appearance/google-images).
- [Google] Use `srcset` or `<picture>`, but always include a fallback `src`. Sharp images are preferred: "High-quality photos appeal to users more than blurry, unclear images" — [same page](https://developers.google.com/search/docs/appearance/google-images).
- [Google] A preferred image can be set with `primaryImageOfPage`, a main-entity `image` or `og:image`. Avoid generic logos, images with text and extreme aspect ratios — [same page](https://developers.google.com/search/docs/appearance/google-images). Google added this in early 2026 "based on feedback", and it concerns thumbnails in Search and Discover ([SEJ, Mar 2, 2026](https://www.searchenginejournal.com/google-clarifies-how-it-picks-thumbnails-for-search-discover/568628/)).
- [Google] `max-image-preview` takes `none`, `standard` or `large` ("up to the width of the viewport") and applies to "all forms of search results" including Google Images and Discover. Without it, Google "may show an image preview of the default size" — [robots meta doc, updated Mar 24, 2026](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag).
- [Google] Licence metadata makes an image eligible for the Licensable badge, and `license` is required for that badge. The page says nothing about ranking — [licence doc, updated Dec 10, 2025](https://developers.google.com/search/docs/appearance/structured-data/image-license-metadata).
- [Google] Image sitemaps tell Google about images it might otherwise miss. Images may sit on another domain if both are verified. Caption, title, geo and licence tags were removed — [sitemap doc, updated Dec 10, 2025](https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps).
- [Google] Mueller's own 2021 list: relevance, placement near text with captions, important images near the top, no text embedded in images, high quality, good sites, descriptive URLs and filenames, "Avoid changing the URL", structured data, large previews, licensing, speed and lazy loading. He also advised starting on a few pages before applying a change site-wide — [Search Engine Roundtable, Feb 2021](https://www.seroundtable.com/google-on-image-seo-in-detail-30911.html).
- [Google] "For image search, there's the context that comes from the page + image combination that matters... the alt-text is unique in that it's what directly connects the image to the page with context" — [Mueller via Search Engine Roundtable, Sep 2024](https://www.seroundtable.com/google-image-seo-page-38106.html).
- [Google] The people-first content guide asks whether content gives "original information, reporting, research, or analysis", and warns against "extensive automation" and producing lots of content on many topics. It gives no image-specific rule — [updated Oct 5, 2026](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).
- [Google] Conflict on originality. "IMO with images in particular, uniqueness isn't equivalent to higher quality" ([Mueller, Aug 2021](https://www.seroundtable.com/google-images-uniqueness-higher-quality-32053.html)), against "you wouldn't rank for this in Image Search" for a shared stock image ([Search Off the Record via SEJ, Oct 2022](https://www.searchenginejournal.com/google-on-use-of-stock-photography/468849/)).
- [Documents] An abandoned Google patent application scores image and landing-page pairs together, using image content, page freshness, domain features, link anchors, "the location of the image within the landing page", "relative size of the image", alt text and surrounding text. Weights vary by query, and clicks appear as a training target — [US20200201915A1, filed 2019](https://patents.google.com/patent/US20200201915A1/en).

### Inferences
- The 2018 post and the patent agree on what matters most: the image and page are scored as a pair, with size and position mattering.
- The two Mueller statements fit if read as "unique does not make an image good, but a copy on many sites has less chance of being the one shown".

### Gaps
- The documentation does not say whether licence markup, `og:image` or image size affect ranking in Google Images.
- The 2018 post is eight years old and I found no later Google statement updating it.

## Does adding more images to a page, or more image pages to a site, raise image impressions and clicks?

### Takeaway
External evidence does not answer this. Site data shows image impressions rising strongly with image count, but count is tangled with page type, age and topic, and every page that had images also gained more, so no clean comparison exists. On guide pages the rise levels off around 10-11 images and click rate falls. Important images may deserve their own page only when they have unique text to go with them.

### Cited Findings
**External:**
- [Google] A gallery may not look like a landing page for any one photo: "If you only have a gallery page, then we're like, 'Oh, there are 50 images on this page". Give important images their own page "If you have something unique to add to the image like a unique text, longer description kind of thing" — [Mueller, Search Off the Record, via SEJ, Aug 2025](https://www.searchenginejournal.com/google-unique-image-landing-pages-can-help-boost-search-visibility/553282/).
- [Google] A dedicated page beats a category page showing many items, in the 2018 example of shoes — [Google blog, 2018](https://blog.google/products/search/making-visual-content-more-useful-search/).
- [Google] Search Console counts "only once per host page URL" and "doesn't distinguish between different images on the same page". By inference, extra images cannot multiply impressions within one result view, and per-image performance cannot be seen — [Search Console help](https://support.google.com/webmasters/answer/7042828).
- [Anecdote] Swapping stock photos for unique ones on 5 pages over four weeks, with no control: "minimal ranking changes for most pages", some drops — [Sterling Sky, Mar 2025](https://www.sterlingsky.ca/stock-photos-vs-real-photos/).
- [Anecdote] One page rose from position 3 to 1 after a larger, on-topic photo replaced a 150x150 one. A separate test on a lawyer's page showed no impact. No control — [Sterling Sky, posted 2023, test about 2021](https://www.sterlingsky.ca/do-images-impact-ranking-on-google/).
- [Correlation] Backlinko's [11.8 million result study](https://backlinko.com/search-engine-ranking) does not report on images at all.

**Site data ([img_baseline.py](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/img_baseline.py), [img_quasi.py](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/img_quasi.py)):**
- [Site data] Timeline: the site had no visual assets until Sep 2 (commit 2936c942, "first visual assets on a site that had literally zero"). About 13 SVG diagrams were added from Sep 2. `/_next/` was unblocked in robots on Oct 11 ([CLAUDE.md](file:///C:/Users/buzzs/buzzskito-website/CLAUDE.md)). Ten infographics arrived on Oct 11. Photos arrived as 210 on Oct 14, 152 on Oct 16, 117 on Oct 20-23, and 241 on Oct 28-29. The image sitemap went live on Oct 24.
- [Site data] Weekly image search, weeks starting:

| Week from | Clicks | Impressions |
|---|---|---|
| Aug 27 | 0 | 139 |
| Sep 3 | 11 | 35,036 |
| Sep 10 | 35 | 51,699 |
| Sep 24 | 14 | 40,467 |
| Oct 1 | 16 | 35,337 |
| Oct 8 | 17 | 20,281 |
| Oct 15 | 96 | 57,142 |
| Oct 22 | 271 | 174,240 |

- [Site data] Daily clicks took off around Oct 18 (3 on Oct 17, 14 on Oct 18, 28 on Oct 21), then stepped up again on Oct 26 (48, then 62-65). Oct 26 is two days after the sitemap and three after 74 more photos, so the two cannot be separated.
- [Site data] Pages that existed on Oct 6, comparing Sep 24-Oct 7 with Oct 15-28:

| Images gained since Oct 6 | Pages | Image impressions | Image clicks | Web impressions |
|---|---|---|---|---|
| None (and had none) | 410 | 72 to 150 | 0 to 0 | 109,331 to 95,052 |
| 1-2 | 46 | 14,331 to 15,484 | 3 to 18 | 107,459 to 103,858 |
| 3-5 | 78 | 49,989 to 112,914 | 27 to 141 | 139,830 to 156,573 |
| 6+ | 12 | 12,253 to 27,000 | 0 to 33 | 34,982 to 33,698 |
| Had images, gained none | 0 | n/a | n/a | n/a |

- [Site data] New pages since Oct 6 (259 pages) made 155,122 image impressions and 177 clicks in Oct 15-28, about half of the site's image traffic in that window.
- [Site data] Guide pages live at least 8 days, by images on the page, Oct 15-28:

| Images | Pages | Median image impressions | Median per image | Clicks | Click rate |
|---|---|---|---|---|---|
| 1-3 | 14 | 2 | 2 | 0 | 0.000% |
| 4-5 | 19 | 63 | 16 | 12 | 0.138% |
| 6-7 | 53 | 136 | 19 | 37 | 0.154% |
| 8-9 | 27 | 345 | 43 | 44 | 0.149% |
| 10-11 | 14 | 1,990 | 190 | 26 | 0.089% |
| 12-14 | 10 | 1,616 | 125 | 19 | 0.088% |

- [Site data] Adjusting guide pages for topic cluster, age and web impressions, the image-count coefficient is 1.22 (standard error 0.65, n=131). The direction is positive but it is not clearly different from zero at the usual threshold.
- [Site data] Clicks are concentrated: the top 2 pages hold 27% and the top 10 hold 51% of October image clicks. Only 91 pages had any click, 166 pages had at least 100 impressions, and 78 had at least 1,000.

### Inferences
- **0 to some images is real.** Pages with no images have essentially no image traffic. Existing pages that gained images doubled their image impressions (76,573 to 155,398) while their web impressions were roughly flat (+4%). The site-wide surge, page selection (upgrades went to pages with demand first) and overlapping changes all inflate this, so the true effect is smaller than it looks.
- **Some to more is unknown.** The dose pattern (1-2 images about flat, 3+ doubling) and the guide bands suggest more helps up to around 10 images, with click rate falling beyond that. Those bands are confounded by template, because pages with 10+ images are the newest photo-ID format. Treat the plateau as a hypothesis.
- **Does each image need its own page?** No. Google's context advice is met by a section of real text around the image. Separate pages only pay when there is enough unique text to justify them. The site's species and bite guides already work this way.
- **Dilution.** No evidence of per-image dilution up to about 14 images. The falling click rate is the nearest thing to a warning, and it fits more low-value exposures.

### Gaps
- No control group exists in current data, because every page that had images on Oct 6 gained more by Oct 29.
- Page-level image data cannot say which image earned an impression.
- All numbers are from the end of the season, and image demand in June may behave differently ([owner's rule on off-season data](file:///C:/Users/buzzs/.claude/projects/C--Users-buzzs-buzzskito-website/memory/feedback_season_data.md)).

## When the same photo appears on many sites, which page does Google show, and how big is the advantage of originals?

### Takeaway
Google clusters near-duplicates and tends to show one or a few hosts, and it has said a widely shared image will be hard to rank. But "reused" is not "cannot rank": this site's reused-photo pages earn real image impressions. The advantage of originals has barely been measured. One 2019 lab test with an invented keyword is the only controlled evidence.

### Cited Findings
- [Google] "We would have that image, but probably, I don't know, 20, 30 other sites have the same image... you probably want to go with the original site... you wouldn't rank for this in Image Search, but it doesn't count against it either" — [Mueller, Search Off the Record, via SEJ, Oct 2022](https://www.searchenginejournal.com/google-on-use-of-stock-photography/468849/).
- [Google] Reused stock "doesn't matter for web-search directly", but is harder in image search — [Mueller, 2020, via SEJ](https://www.searchenginejournal.com/stock-photography-and-seo/373153/).
- [Google] Asked whether a resized, rotated or re-angled image counts as unique, Mueller answered "uniqueness isn't equivalent to higher quality" — [Search Engine Roundtable, 2021](https://www.seroundtable.com/google-images-uniqueness-higher-quality-32053.html).
- [Google] Google tracks image history: "When the image and similar images were first indexed by Google" and "Where it may have first appeared" — [About this image, May 2023](https://blog.google/products/search/about-this-image-google-search/).
- [Google] "See exact matches" shows "all the locations where the image is found by Google across the web", available since 2021 per a quoted post — [Search Engine Roundtable, May 2024](https://www.seroundtable.com/google-images-see-exact-matches-37449.html).
- [Documents] The 2024 leak lists near-duplicate hashes, `rankInNeardupCluster` ("rank 1 is the best"), `contentFirstCrawlTime` ("Earliest known crawl time among all neardups of this image") and `canonicalDocid`. Field existence only, no weights — [ImageData schema](https://google-api-content-warehouse.hexdocs.pm/0.2.0/GoogleApi.ContentWarehouse.V1.Model.ImageData.html). Google declined to comment signal by signal ([Wikipedia summary, seen in search results, not read in full](https://en.wikipedia.org/wiki/2024_Google_Search_documentation_leak)).
- [Controlled] 10 new sites, 5 with stock-style images (one used on 213 other sites) and 5 with unique photos. Same invented keyword, stripped metadata, no links, three months. Results matching the hypothesis rose from 72% to 85% of daily readings, and unique images were preferred in image search too. No gap in positions is reported, and the authors say this does not show strength relative to other signals — [Reboot Online, 2019](https://www.rebootonline.com/blog/long-term-duplicate-image-experiment/).
- [Correlation] Across 50 sites, "stock images or any images where it is clearly not the original source" correlated -0.403 (p=0.0037) with winning after the 2023 updates. This is site-level web traffic with many confounds, not image search — [Zyppy, data to Dec 2023](https://zyppy.com/seo/google-update-case-study/).
- [Anecdote] Removing a stock photo let a competitor using the same photo appear, and restoring it made the competitor disappear. Read as Google keeping one copy. No data in the text — [Sterling Sky, 2025](https://www.sterlingsky.ca/stock-photos-vs-real-photos/).
- [Site data] The photo ledger holds 720 reused photos: iNaturalist 385, Wikimedia Commons 206, CDC 125, National Park Service 4. Licences include CC0 304 and public domain 191 ([data/god-build/photos.json](file:///C:/Users/buzzs/buzzskito-website/data/god-build/photos.json)).
- [Site data] Pages whose only images are these reused photos made 133,870 of 366,927 October image impressions (36%) and 159 of 402 clicks ([img_quasi.py](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/img_quasi.py)).
- [Site data] Among guide pages with 3+ photos, by majority source ([img_source.py](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/img_source.py)): iNaturalist-heavy pages (n=53) had a median of 723 image impressions and 105 clicks, CDC-heavy (n=44) 274 and 22, Commons-heavy (n=21) 1 and 7. Topics differ by source, so this is not clean. A regression attempt on this sample was unstable and is not reported.
- [Site data] Pages with an original diagram did not beat pages without one in this sample: median 220 image impressions (n=75) against 868 (n=48). Again confounded by topic and age.
- [Site data] Our own pages reuse photos heavily: 649 distinct photos make 2,192 placements. 371 appear on 2+ pages, 41 on 10+, and one tick photo on 48 ([img_source.py](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/img_source.py)).

### Inferences
- "Public" and "widely republished" are different things. A field photo on iNaturalist may exist on only a few pages, while a CDC image may be on hundreds. Mueller's warning fits the second case more. This is untested here, so the exact-match count per photo should be measured.
- For a shared photo, the likely winner is the source or the strongest relevant page. A small site should expect to lose the plain species-name query and win only where its page context fits a more specific search, such as a bite on a particular body part. This follows from Mueller's 2022 and 2024 comments and is not measured.
- Placing the same file on dozens of our own pages adds no new image for Google to index. It makes Google choose among our pages. "More images" should mean new files.
- Flips, crops or re-encodes to look unique are unlikely to work and are not worth doing, given the near-duplicate hashing in the leak and Mueller's reply. A truly new image, such as a labelled side-by-side of two credited photos, is a different thing and worth testing. Check licences first: CC BY-SA terms may require the combined image to carry the same licence, which would conflict with the site's CC BY 4.0 offer on its own diagrams.

### Gaps
- No measurement exists of how much more an original photo earns in real, competitive image results.
- I did not measure how many other sites host each ledger photo. That is the missing variable for this site.
- Google has not stated which host wins within a duplicate cluster.

## What are the risks of mass publishing?

### Takeaway
Adding real photos to existing pages that have real text carries little risk. The risk sits in new thin pages built around images. Google's scraping policy names compiling images from other sites without added value. Named-site damage with data is close to nonexistent in what I could find, so the warnings rest on policy wording and the WordPress lesson, not on measured cases.

### Cited Findings
- [Google] Scaled content abuse: "many pages are generated for the primary purpose of manipulating search rankings and not helping users... large amounts of unoriginal content... no matter how it's created". Examples include "Scraping feeds, search results, or other content to generate many pages" and "Stitching or combining content from different web pages without adding value" — [spam policies, updated Aug 28, 2026](https://developers.google.com/search/docs/essentials/spam-policies).
- [Google] Under scraping, one example is "Creating sites dedicated to embedding or compiling content, such as videos, images, or other media from other sites, without substantial added value to the user" — [same page](https://developers.google.com/search/docs/essentials/spam-policies). This is the closest sentence to a public-photo site.
- [Google] Doorway abuse includes "Creating substantially similar pages that are closer to search results than a clearly defined, browseable hierarchy" — [same page](https://developers.google.com/search/docs/essentials/spam-policies).
- [Google, conflicting with practitioners] On the 2018 Yoast attachment bug, Mueller said "Sites generally shouldn't be negatively affected by something like this". Joost de Valk said some sites "showed a rather enormous impact" while few of 8 million+ users were affected. No numbers were published, and timing overlapped a major Google update — [Search Engine Roundtable, Jun 2018](https://seroundtable.com/yoast-plugin-google-drop-25842.html).
- [Platform] WordPress 6.4 turned attachment pages off by default: "On the vast majority of sites, these attachment pages don't add any meaningful information", and they can outrank useful content — [Make WordPress Core, Oct 2023](https://make.wordpress.org/core/2023/10/16/changes-to-attachment-pages/). Yoast describes them as thin content with little SEO value ([Yoast help](https://yoast.com/media-attachment-urls/)).
- [Anecdote] Panda-era forum posts (2011-12) report image-heavy sites hit hard, with no data ([WebmasterWorld thread, seen in search results only](https://www.webmasterworld.com/google/4436764.htm)). A publisher worried a 500-page gallery section could trigger Panda, but no outcome was reported ([MediaPost, seen in search results only](https://www.mediapost.com/publications/article/155392/how-mturk-combats-google-panda.html)).
- [Google] Crawl budget matters for sites of 1 million+ pages, or 10,000+ with daily changes, and for sites with many "Discovered - currently not indexed" URLs. Otherwise "you don't need to read this guide" — [crawl budget doc, updated Jul 22, 2026](https://developers.google.com/crawling/docs/crawl-budget). That page does not say whether images count towards budget.
- [Google] Fetch limits are per URL: resources "have their own, separate, per-URL byte counter and don't count towards the size of the parent page". Rendering does not request images. Image crawlers have their own thresholds — [Gary Illyes, Mar 31, 2026](https://developers.google.com/search/blog/2026/03/crawler-blog-post).
- [Google] Lazy-load only what is out of view at load, and never content users see right away — [lazy-loading doc, updated Dec 10, 2025](https://developers.google.com/search/docs/crawling-indexing/javascript/lazy-loading).
- [Platform] Cost: static files pay data transfer only. `/_next/image` is billed per transformation at $0.05-$0.0812 per 1,000. On Hobby plans the limit is 5,000 a month, after which new images fail with a 402 error ([Vercel limits and pricing, Aug 2026](https://vercel.com/docs/image-optimization/limits-and-pricing)).
- [Site data] Photo files are small: 720 files, median 97 KB, 84 MB total. A sampled photo tag is 1200 px wide, `loading="lazy"`, with width and height set ([img_debug.py](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/img_debug.py)). The article template's largest paint element is the H1, not an image ([CLAUDE.md, speed section](file:///C:/Users/buzzs/buzzskito-website/CLAUDE.md)).
- [Site data] This site's July cohort of 215 pages earned a median of $0.16 a month ([buzzskito-ops rule 2](file:///C:/Users/buzzs/buzzskito-website/.claude/skills/buzzskito-ops/SKILL.md)), and a [50 new URLs per day cap](file:///C:/Users/buzzs/.claude/projects/C--Users-buzzs-buzzskito-website/memory/feedback_max_50_pages_per_day.md) exists. Edits to existing pages are not capped.

### Inferences
- Lowest risk: more distinct photos on existing guides with real text. Highest risk: one URL per photo, galleries, or state and species pages whose main difference is swapped public photos. The latter match the policy wording about compiling and "stitching", and the same photo appearing on up to 48 pages adds to that look.
- At about 814 pages, crawl budget is not the constraint. Speed risk is small if images stay lazy, sized and static, but re-measure with the site's own speed script after any large change. Skew Protection is Pro or Enterprise only and `dpl` is live here, so the Hobby 402 limit should not apply (the owner can confirm the plan).
- Licence compliance scales with volume. Each new photo needs its credit record, which the site's `check:photos` guard already enforces.

### Gaps
- I found no named publisher with before-and-after data hurt by mass image publishing in 2023-2026, and no named image gallery manual action with numbers.
- Whether graphic skin and wound photos trigger SafeSearch filtering on this site is unknown. Google says only to help it "understand the nature of your site" ([Image SEO doc](https://developers.google.com/search/docs/appearance/google-images)). The owner could check this by hand.

## Which formats get clicks from Images and Lens, and what makes a searcher click through?

### Takeaway
I found no measured click rate by image format (comparison, labelled diagram, infographic, size scale, step photo, text overlay) anywhere. What is known is that click-through depends on the intent behind the search and on Google's interface. Image results often satisfy on their own, so a click needs a reason the thumbnail cannot supply.

### Cited Findings
- [Academic, log study, 2015, Yahoo] "click-through is heavily dependent on query type" and "position information is not always important". Celebrity searches are "often satisfied by the thumbnails". Graphics and fashion queries are "much more likely to click on the referral website". Knowledge-seeking searches may succeed without any interaction. Users viewed "at least 17 images" per result click — [Park et al., CHI 2015](https://s.yimg.com/ge/labs/v2/uploads/chi_2015_imagesearch3.pdf).
- [Academic, 2018, Sogou] "Image search results are self-contained", so users need not visit a landing page. Intent classes are Explore/Learn, Locate/Acquire and Entertain, with Explore/Learn at 56% of logged sessions (n=475) and 27% of survey cases (n=211) — [Xie et al., WSDM 2018](https://ar5iv.labs.arxiv.org/html/1711.09559). Landing-page click rate by intent was not reported.
- [Anecdote, 58 sites, 2018] After Google removed "View Image", image clicks rose an average 37%, with impressions unchanged on the one site detailed — [ZenSEM via SEJ, Jun 2018](https://www.searchenginejournal.com/google-image-seo-updates/255573/). An earlier 2013 interface change was followed by an average 63% traffic drop across 87 sites ([Define Media via Search Engine Land, seen in search results only](https://searchengineland.com/study-google-image-search-referrer-traffic-drops-63-since-upgrade-155879)).
- [Google] Results carry "captions that show you the title of the webpage where each image is published" — [Google blog, 2018](https://blog.google/products/search/making-visual-content-more-useful-search/). The page title therefore works as the image's call to action (inference).
- [Google] Text in images: "Don't embed text in the image" ([Mueller, 2021](https://www.seroundtable.com/google-on-image-seo-in-detail-30911.html)). Later, more pragmatically, ask whether it is "something substantial that would be missing from your site if the images weren't there" ([Mueller, Jan 2024](https://www.seroundtable.com/google-seo-text-within-images-36734.html)). "Images with text" should be avoided as the preferred thumbnail ([Image SEO doc](https://developers.google.com/search/docs/appearance/google-images)).
- [Documents] The leak lists OCR text fields (`ocrTextboxes`), `clickMagnetScore` and `h2i` hover ratios, and quality scores (`nimaAva`, `nimaVq`). Nothing shows they drive ranking — [ImageData schema](https://google-api-content-warehouse.hexdocs.pm/0.2.0/GoogleApi.ContentWarehouse.V1.Model.ImageData.html). Reboot's "does Google read images" test has [no published result](https://www.rebootonline.com/google-can-read-experiment/).
- [Google] Position in image search "is counted left to right, then top to bottom", so it can be hard to read. Clicks to expand a thumbnail are not clicks, and clicks that leave Google are — [Search Console help](https://support.google.com/webmasters/answer/7042828).
- [Site data] Image search click rate was 0.045% in Sep 3-30 (diagrams only), 0.110% in October and 0.156% in Oct 22-28 (photos live). October web search was 0.695%, about six times higher ([img_baseline.py](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/img_baseline.py)).
- [Site data] Click rate by page-level average position: 15-20 was 0.124%, 20-25 was 0.129%, 25-30 was 0.105%, 30-40 was 0.082%, 40-60 was 0.050%. Flat through about 30, then falling ([img_source.py](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/img_source.py)).
- [Site data] The 36 pages whose only images are the owner's tall, text-heavy infographics made 442 image impressions and 0 clicks in October ([img_debug.py](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/img_debug.py)). Many of these are product and garden pages with little visual demand, and they also have the unstable URL problem described in the Next.js section.

### Inferences
- The site's image clicks mostly come from bite and identification pages (chigger bites, flea bites, wolf spiders). These searches suit images, but the thumbnail may answer "what does it look like". The next questions ("is mine this?", "what do I do?") are what earn a click, so titles and captions should promise those answers. This is reasoning, not measured.
- Comparison and size-scale images plausibly suit identification, because a single thumbnail cannot settle "which one is it". There is no evidence either way, so this is a good arm for a test.
- Photos appear to out-click diagrams on this site (0.045% against 0.156%), but pages, positions and dates all differ.

### Gaps
- No click-rate-by-position curve for Google Images exists publicly. The nearest source I found, [Mad Monkey Media](https://madmonkey.media/google-click-through-rates-ctrs-by-ranking-position/), gives only a broad range for image results on the main results page, in a search summary.
- No evidence on text overlays, labelled diagrams or step photos in Google Images specifically.

## Does serving images through `/_next/image` hurt indexing or ranking compared with static URLs?

### Takeaway
No evidence shows the `/_next/image?url=` form itself hurts, and nothing from Google or Vercel says so. The real issue is more specific and was found on the live site: on Vercel with Skew Protection, every `/_next/image` URL carries `&dpl=<deployment id>`, which changes on every deploy, and this site deploys constantly. So the site's own infographics and company photos appear to change URL repeatedly, while reused photos have stable addresses. The harm has not been measured, but Google's advice is plainly against it and the fix is cheap.

The brief's premise needs correcting. On the 412 pages crawled (pages in the image index or with image impressions), about 91% of in-content images (2,261 of 2,492) are already plain static files. Service pages using root-level photos were not all crawled, so the whole-site share may be lower.

### Cited Findings
**The `/_next/image` form:**
- [Anecdote] One developer reported images leaving Google Images after moving to `next/image`, and a custom sitemap of original URLs did not bring them back. No maintainer or Google reply, no data, last touched Dec 2024 — [GitHub #26286, Jun 2021](https://github.com/vercel/next.js/discussions/26286).
- [Anecdote] Another asked for semantic URLs because the query form is "not ideal for indexing images with Google". Zero replies, no data — [GitHub #47860, Apr 2023](https://github.com/vercel/next.js/discussions/47860).
- [Site data] Pages with 1-2 images, by serving method: next/image 22 pages, all 22 with some image impressions (279 in total on 13,675 web impressions). Static 27 pages, 11 with some (344 on 52,023 web impressions) ([img_debug.py](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/img_debug.py)). Tiny numbers, but they show no blanket block. Before Oct 11 the site's `/_next/` path was blocked in robots, which would itself stop image indexing ([CLAUDE.md](file:///C:/Users/buzzs/buzzskito-website/CLAUDE.md)).

**The changing `dpl` value:**
- [Platform] The default loader appends `&dpl=<deploymentId>` to root-relative images — [Next.js loader source](https://raw.githubusercontent.com/vercel/next.js/canary/packages/next/src/shared/lib/image-loader.ts). Next.js says it "Appends `?dpl=<deploymentId>` to static asset URLs (JavaScript, CSS, images)" for cache busting, and does not read it on incoming requests — [Next.js docs, Aug 2026](https://nextjs.org/docs/app/api-reference/config/next-config-js/deploymentId).
- [Platform] A maintainer confirms "each Deployment will invalidate the browser cache", and a custom loader that omits it is the suggested workaround — [GitHub #73015, Nov 2024](https://github.com/vercel/next.js/discussions/73015). Vercel's image cache key excludes `dpl`, so redeploys add no transformation cost — [Vercel docs, Aug 2026](https://vercel.com/docs/image-optimization).
- [Platform] Skew Protection is on by default for projects created after Nov 19, 2024, on Pro and Enterprise plans — [Vercel docs, Sep 2026](https://vercel.com/docs/skew-protection). Older deployments stay reachable for Googlebot for 60 days ([Vercel changelog, Apr 2025](https://vercel.com/changelog/automatic-mitigation-of-crawler-delay-via-skew-protection)), so old URLs should keep working (inference).
- [Site data] All 412 crawled live pages have `dpl=dpl_...` on at least the logo. In-content `/_next/image` uses total 231, nearly all of them the 10 owner-made infographics (188 pages carry one) and company photos such as `/spray-pool.webp`. Those infographics appear only through `/_next/image` in `<img>`, never as a static `<img>`. The deployed branch had 287 commits on 18 of 29 days since Oct 1, an upper bound on deploys ([img_baseline.py](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/img_baseline.py), [img_debug.py](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/img_debug.py)).
- [Site data] The image sitemap misses most of these. Its source file names a `bz-guide` infographic only 10 times ([lib/page-images.json](file:///C:/Users/buzzs/buzzskito-website/lib/page-images.json), built by [scripts/build-image-index.mjs](file:///C:/Users/buzzs/buzzskito-website/scripts/build-image-index.mjs), which reads literal paths), while 188 crawled pages show one. Where one is listed, the sitemap names the static URL and the page's `<img>` shows a different one, the same mismatch as GitHub #26286.
- [Google] "Avoid changing the URL" ([Mueller, 2021](https://www.seroundtable.com/google-on-image-seo-in-detail-30911.html)). "if you remove one image URL and you add a new one on a page, then it does take a lot of time to be picked up again" and image indexing "is a lot slower than normal web pages" ([Mueller, Apr 2022](https://www.searchenginejournal.com/why-updating-images-can-backfire/445977/)).
- [Site data, in tension with that] New images here produced impressions within days: diagrams added Sep 2-3 showed in the week of Sep 3, and photos added Oct 14-16 by about Oct 18.

**Other technical questions:**
- [Google, Correlation] Filenames: Google prefers descriptive names and Mueller says it reads URL paths and filenames, with no size given ([Image SEO doc](https://developers.google.com/search/docs/appearance/google-images), [Mueller 2021](https://www.seroundtable.com/google-on-image-seo-in-detail-30911.html)). 22.6% of Lens results had a filename match ([Backlinko, 2020](https://backlinko.com/visual-search-ranking-factors)). Effect unknown.
- [Google, Controlled] Alt text: named as the key metadata by Google ([Image SEO doc](https://developers.google.com/search/docs/appearance/google-images)). SearchPilot's split test on ecommerce category pages found no detectable effect on total organic traffic, with identical alt text on every image and image search a small share of traffic, so it could not see image-only gains ([SearchPilot, Nov 2021](https://www.searchpilot.com/resources/case-studies/seo-split-test-lessons-adding-alt-text)).
- [Google] Lazy loading is fine if images load when visible, and you can check that image URLs appear in `src` in the rendered HTML ([doc](https://developers.google.com/search/docs/crawling-indexing/javascript/lazy-loading)).
- [Google] `srcset` needs a fallback `src`, and Google does not say which variant it indexes ([doc](https://developers.google.com/search/docs/appearance/google-images)). Only 13.1% of Lens results were responsive in 2020, so it is not a requirement ([Backlinko](https://backlinko.com/visual-search-ranking-factors)).
- [Anecdote] The `src:` operator in Google Images shows which pages reference an image URL, URL Inspection does not reliably confirm image indexing, and neither is definitive — [Helen Pollitt, SEJ, Oct 29, 2026](https://www.searchenginejournal.com/ask-an-seo-how-can-i-tell-if-my-images-are-optimised-for-multimodal-search/593861/).
- [Site data] A live `/_next/image` response returned 200, `Content-Type: image/jpeg`, `Content-Disposition: inline; filename="logo.jpg"` and a year-long immutable cache, tested with a Googlebot-Image user agent.
- [Site data] Status of the rest ([img_debug.py](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/img_debug.py) plus a one-off check of 395 pages): `max-image-preview:large` on all 395, `ImageObject` on all 395, `figcaption` on 346, `primaryImageOfPage` on 0. A generic `/og-image.jpg` on 96 pages holding 29,221 October image impressions, including `/blog/bed-bug-bites` (10,563) and `/blog/why-do-mosquito-bites-itch` (8,008).

### Inferences
- **Does Google index the optimised URL or the original?** Most likely whichever is in `<img src>`, so the optimised URL, because that is what Google says it reads. The static original can also be found through the sitemap, but Google may not tie it to the page because the page does not render it.
- **Why `dpl` may matter:** a page recrawled after a deploy names a different image URL than before. Google's stated handling of that is slow reprocessing, so these images may never settle.
- **Why it may not matter:** the bytes are identical, and Google's near-duplicate systems may collapse them. Also, pages with only these images still show some impressions. Nobody has measured it.
- **Why fix it anyway:** the cost is one small change and the affected images are the site's only truly unique ones. Those are exactly the images the originality evidence says have the best chance. Options are a custom loader that drops `dpl`, or `unoptimized` on these images with properly sized static files. Check phone load weight on the tall infographics if going static, and use one URL everywhere (`src`, sitemap, schema, `og:image`).
- Do not rename existing photo files for keywords. They are already descriptive and renaming would change their URLs.

### Gaps
- No Google statement addresses query-string or deployment-id image URLs specifically. Mueller's "cache-busting is a bad idea" remark [concerned sitemaps](https://www.relevantaudience.com/seo/mueller-sitemap-cache-busting-bad-idea/), seen in search results only.
- No public Next.js site has published image-search data before and after removing `dpl` or moving to static.
- I could not run `src:` checks (browser tools were out of scope). The owner can do it by hand in Google Images in two minutes, once for `src:buzzskito.ca/_next/image` and once for a static photo URL.

## How does Google Lens find pages, and what helps on identification searches?

### Takeaway
Google publishes almost nothing on how Lens ranks results. The Search Console report it launched on Sep 24, 2026 is the first real measurement tool, and it comes with no queries and no API. For someone photographing an unknown bug or rash, what is known is that Lens returns visual matches and, increasingly, an AI Overview with links. Everything else about "appearing" is inference.

### Cited Findings
- [Google] Web multimodal covers "searches with Lens, Circle to Search on Android, image uploads to Google Search" and Chrome's "Search this image", found through a new filter with an Export button. It only says the data should help you "optimize your visual content", with no steps — [Google, Sep 24, 2026](https://developers.google.com/search/blog/2026/09/web-multimodal-in-sc).
- [Google] "Web-multimodal tracks search results triggered by a query that uses an image, photo, or screenshot". Mueller: "the data wasn't previously in the counts, the report has new data" — [Search Engine Roundtable, Sep 2026](https://www.seroundtable.com/google-search-console-multimodal-search-type-filter-42156.html).
- [Google] "specific text query data isn't available for this traffic" — [Search Console help](https://support.google.com/webmasters/answer/17011259?hl=en). The API reference listed no multimodal type when SEJ checked ([SEJ, Sep 2026](https://www.searchenginejournal.com/google-search-console-multimodal-filter/590781/)).
- [Site data] An API call with `type=webMultimodal` returned figures identical to plain web (7,170 clicks, 1,030,990 impressions), so it is not a working filter. Lens numbers must come from the UI export ([img_baseline.py](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/img_baseline.py)). The owner noted image search at 117 clicks and Lens at 34 in one week around Oct 24 ([route.ts comment](file:///C:/Users/buzzs/buzzskito-website/app/image-sitemap.xml/route.ts)).
- [Google] AI Overviews appear more often in Lens, "with no need to add a question to your visual search", for "more novel or unique images", with "links to helpful resources on the web". More than 20 billion visual searches a month — [Google, Feb 19, 2025](https://blog.google/products-and-platforms/devices/google-lens/lens-on-ios-ai-overviews/).
- [Google] Lens can "search skin conditions that are visually similar to what you see on your skin", giving "visual matches". "This feature does not constitute a medical analysis of the image", and it is available in select markets. The same post covers plants and animals but does not mention insects or bug bites — [Google, Jun 14, 2023](https://blog.google/products/google-lens/google-lens-features/).
- [Google] The current [Lens page](https://search.google/ways-to-search/lens/) explains nothing about ranking. The older "How Lens works" page now redirects there.
- [Correlation, 2020] 65,388 Lens results: 32.5% had the Vision label in the title tag, 29.9% in the URL, 22.6% in the filename, 11.4% in alt text. 33.1% of images came from the top quarter of the page. Average Domain Authority was 64, average words 1,631, average images on the page 34. 7.2% were from Pinterest and 4.1% from Amazon. Only 15% also ranked in the organic top 10. The label is a proxy, the 34-image average is probably lifted by Pinterest and Amazon (inference), and the study is six years old — [Backlinko](https://backlinko.com/visual-search-ranking-factors).
- [Anecdote] Vendor blogs describe detailed Lens pipelines (seen only in a search summary, and I could not tie them to a named source). One vendor page I read in full says the opposite: "Google hasn't published the inner workings or ranking factors of Lens" — [ImageSEO, Oct 2026](https://imageseo.io/blog/how-google-lens-works-2026/). SEJ suggests photographing your own subject and checking results by hand — [Pollitt, Oct 2026](https://www.searchenginejournal.com/ask-an-seo-how-can-i-tell-if-my-images-are-optimised-for-multimodal-search/593861/).

### Inferences
These are reasoning, not findings.
- For an unknown insect, the photo a person takes is not on any website, so exact match barely applies. Visual similarity plus a page that answers the question decides. That favours in-situ, phone-style photos (on a wall, on skin, on a finger, on a mattress seam) over clean museum specimens, and iNaturalist-style field photos fit well.
- This is where more images may help most. Several life stages, angles and sizes of the same species give more chances of a visual match. It is the strongest argument for the owner's idea, and it is untested.
- Name the thing plainly in the title, the heading near the photo, the caption and the alt text, since the page is how Google learns what the image shows.
- AI Overviews in Lens may answer without a click, so a link from the overview needs pages worth citing. Expect a low click rate.
- For rashes, photos across skin tones may fill a real gap. Commentary from 2023 notes such tools have been [less accurate on darker skin](https://iphonesoft.fr/2023/06/15/google-lens-detecter-maladie-peau-partir-photo), seen in search results only. Medical accuracy rules apply here, and the page should keep the red-flag guidance already on the site's bite pages.

### Gaps
- My recollection is that the old Lens page said results are ranked on similarity and relevance and may use words and metadata on the host page. I could not retrieve it (archive.org was blocked), so treat this as unverified.
- I found no study of Lens results for insects or skin, no measure of how often AI Overviews appear for them, and no data on Lens click rates.
- I found no public study on the exact-match tab's domain mix.

## Can a site like this run a simple, cheap test with a control group?

### Takeaway
Yes. Randomly split pages that already earn image impressions, add new photos to half, change nothing else, and compare the change in image impressions between groups after a 2-week lag. It costs staff or agent time and no money, and it adds no new URLs. The site can detect a gain of about 50% or more but not a gain of 25%, which is the right question before committing to a large build.

### Cited Findings
- [Site data] Sizing, from the spread of change in log impressions between adjacent periods (SD about 0.65-0.85 across pages with at least 100 impressions, based on only about 20 pages, so re-estimate before starting). Pages needed per group for 80% power at 5% two-sided: +25% needs 130-240, +50% needs 40-70, doubling needs 14-25 ([img_baseline.py](file:///C:/Users/buzzs/AppData/Local/Temp/claude/C--Users-buzzs-buzzskito-website/346ad20e-f0cd-4fd1-a3b4-396de78eb0ad/scratchpad/img_baseline.py)). 166 pages had 100+ image impressions in October.
- [Anecdote] For comparison, SearchPilot's split tests often include thousands of pages, which is why small effects are out of reach here ([SearchPilot, 2021](https://www.searchpilot.com/resources/case-studies/seo-split-test-lessons-adding-alt-text)).
- [Google] Search Console records image data per host page and per search type, and impressions need the image in view ([help page](https://support.google.com/webmasters/answer/7042828)). So the page is the smallest unit of measurement.
- [Site rule] "A finding needs a control before it becomes a decision" ([buzzskito-ops rule 10](file:///C:/Users/buzzs/buzzskito-website/.claude/skills/buzzskito-ops/SKILL.md)).

### Inferences
**The main test: does adding photos to pages that already have them help?**

1. **Pages.** Articles with at least 100 image impressions in the baseline and at least 3 photos, excluding the 33 local lead posts and any page with planned edits. Aim for 50-80 pairs. 40 pairs is the minimum.
2. **Assignment.** Sort within topic cluster by baseline image impressions, form consecutive pairs, and flip a seeded coin in each pair. Save the assignment file before any edit, so nobody can choose later.
3. **Treatment.** Add about 5 new photos to each treated page, next to the text they illustrate, with caption and real alt text. Each photo must be a file on no other page, and all use static URLs. Change nothing else.
4. **Control.** No edits at all. Add a build check that fails if a test page changes.
5. **Timing.** Baseline of 28 days, then edit, then skip 14 days for pick-up, then read 28 days. For example: baseline Oct 19-Nov 15, edit around Nov 16, read Nov 30-Dec 27, decision around Dec 30. The control group absorbs the current surge, the season and the holidays.
6. **Primary measure.** Change in log(1 + image impressions) per page, treated minus control within pairs, with a 90% interval. Pull `type=image` by `page` only.
7. **Secondary measures.** Pooled image clicks per group, because page-level clicks are too sparse (permutation test, and report results with and without the top 2 pages). Web impressions and clicks as a harm check. Web: multimodal clicks by page from the UI export, taken at baseline and at the end. Ad pages per session on treated pages, if GA4 can provide it.
8. **Decision rule, set in advance.** Scale only if the interval's lower bound is at least +20% and pooled clicks rise in the treated group. Stop if it includes zero. Stop immediately if treated web clicks fall 10% or more against control.

**Cheap add-ons:**
- **Third arm: placement.** Same images, best photo moved directly under the opening. This tests Google's most specific statement ("higher up on the page"). Site data shows a median of about 4,300 characters of text (15% of the article) above the first image. Median October image impressions by first-image position were 254 at 5-15% of the text (208 pages), 11 at 15-30% (81 pages) and 2 at 30%+ (97 pages), confounded by template. This may beat more images and costs almost nothing.
- **Stepped rollout for the URL fix.** Move the infographics to a stable URL on half the 188 pages first and the rest six weeks later. Same work, and some evidence as a bonus. Low power, so do not wait on it.
- **Later arm: originals.** In season, compare technician-shot photos with public photos on matched pages. This would be the first real-site measure of the originality advantage.

**A free early read before any new work.** Photos added on Oct 28-29 (241 files) should create a natural comparison, because some pages that had images on Oct 23 will not have gained more in that window. Check this first, since the Oct 6 baseline had no such pages. Around Nov 20, compare pages that gained photos on Oct 28-29 with pages that did not, among those with images on Oct 23. Selection is not random, so this cannot decide anything, but it is free and may show whether a larger test is worthwhile.

**Threats to the design:**
- Treated pages could take impressions from control pages on the same topic, which would overstate the effect. Check cluster totals as well.
- New photos reused on control pages would contaminate the test, which is why treatment photos must be exclusive.
- The automated release job and recirculation scripts must not touch test pages.
- Image demand in winter is not image demand in June, so repeat a smaller version in season if the result is close.

### Gaps
- The noise estimate rests on about 20 pages during a surge, so the real sample requirement could shift either way.
- GA4 attribution of image visitors and their ad value was not examined here.

## What should a publisher do, in order of evidence, and what should it avoid?

### Takeaway
Do the things Google has stated and that cost little first. Then give photos to pages that have demand and none. Then test density before scaling it. Avoid thin image pages and anything that changes image URLs.

### Cited Findings
**Do, strongest evidence first (status on this site in brackets):**
1. [Google] Real `<img src>` with one stable URL per image, used everywhere — [Image SEO doc](https://developers.google.com/search/docs/appearance/google-images), [Mueller 2021](https://www.seroundtable.com/google-on-image-seo-in-detail-30911.html). *(Photos done. Infographics and company photos not done, because of `dpl`. See the Next.js section.)*
2. [Google, Documents] Put each image on a page truly about it, near the relevant text, with caption and specific alt text — [Mueller 2024](https://www.seroundtable.com/google-image-seo-page-38106.html), [patent](https://patents.google.com/patent/US20200201915A1/en). *(Mostly done: `figcaption` on 346 of 395 pages.)*
3. [Google, Documents, Correlation] Make the best image large and high on the page — [Google 2018](https://blog.google/products/search/making-visual-content-more-useful-search/), [patent](https://patents.google.com/patent/US20200201915A1/en), [Backlinko 2020](https://backlinko.com/visual-search-ranking-factors). *(Not done: first image sits about 15% down the article text. Test it.)*
4. [Google] Strengthen and refresh the page itself, since authority and freshness were both named — [Google 2018](https://blog.google/products/search/making-visual-content-more-useful-search/). *(Ongoing. No image-specific work needed.)*
5. [Google] Set a relevant preferred image, not a logo or generic image — [Image SEO doc](https://developers.google.com/search/docs/appearance/google-images). This concerns thumbnails, not proven Image ranking. *(96 pages still use `/og-image.jpg`. Cheap fix.)*
6. [Google] Keep `max-image-preview:large` and the image sitemap, and list the same URL as `src` — [robots doc](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag), [sitemap doc](https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps). *(Done, except that most infographic placements are missing from the sitemap and the rest name a different URL from `src`.)*
7. [Google, Controlled, Correlation] Prefer photos not already everywhere, and originals where possible — [Mueller 2022](https://www.searchenginejournal.com/google-on-use-of-stock-photography/468849/), [Reboot 2019](https://www.rebootonline.com/blog/long-term-duplicate-image-experiment/), [Zyppy 2023](https://zyppy.com/seo/google-update-case-study/). *(Partly possible now. Plan technician photos for May.)*
8. [Site data] Coverage before density: give a relevant photo to pages with visual demand and none. *(410 pages had no images on Oct 6 and no image gain. 148 of them had at least 100 web impressions in the pre window, and they earned 84 image impressions afterwards. Many are product pages, where site rules bar Amazon product images, so filter for visual intent.)*
9. [No evidence yet] More images per page: test first. *(See the test question.)*

**Avoid:**
- [Google] Pages built to hold images from other sites without substantial added value — [spam policies](https://developers.google.com/search/docs/essentials/spam-policies).
- [Google, platform] One URL per photo without unique text, and gallery pages expected to rank for single photos — [Mueller 2025](https://www.searchenginejournal.com/google-unique-image-landing-pages-can-help-boost-search-visibility/553282/), [WordPress 2023](https://make.wordpress.org/core/2023/10/16/changes-to-attachment-pages/). Lightbox and fragment-based galleries may not get images indexed individually (same SEJ report).
- [Google] Changing or renaming image URLs without redirects — [Mueller 2019](https://www.searchenginejournal.com/google-changing-image-urls-will-affect-rankings-in-image-search/286163/), [Mueller 2022](https://www.searchenginejournal.com/why-updating-images-can-backfire/445977/).
- [Google] CSS background images for content — [Image SEO doc](https://developers.google.com/search/docs/appearance/google-images).
- [Google] Important information only inside an image, and text-heavy images as the preferred thumbnail — [Mueller 2021](https://www.seroundtable.com/google-on-image-seo-in-detail-30911.html), [Image SEO doc](https://developers.google.com/search/docs/appearance/google-images).
- [Google] Keyword-stuffed alt text — [Image SEO doc](https://developers.google.com/search/docs/appearance/google-images).
- [Google, Controlled] Expecting web ranking gains from images — [Mueller 2020](https://www.searchenginejournal.com/stock-photography-and-seo/373153/), [Reboot 2021](https://www.rebootonline.com/blog/cats-vs-dogs-google-image-relevancy-experiment/).

### Inferences
- Avoid raising image count by placing the same files on more pages. It adds no new images for Google and looks more cookie-cutter.
- Avoid judging a further image push by a before-and-after chart. Image search is rising about threefold a week on its own right now, so any change made today would look like a success.
- For the owner, in plain terms: "Real photos were a good call and they are working. Before adding a lot more, spend one week fixing the things Google has told us about, then run a six-week test on about 100 pages. If it shows a clear gain, roll it out by topic. If not, we saved weeks of work."

### Gaps
- None of this ranking is by measured effect size, because almost no effect sizes exist. The order reflects the strength of evidence, not the expected traffic gain.
