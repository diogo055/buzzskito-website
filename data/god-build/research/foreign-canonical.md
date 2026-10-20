# Pages "folded" into casino and cinema URLs: what is happening and how to stop it

Investigation of Oct 20, 2026 (read-only: no site code changed, nothing submitted in Search Console,
nobody contacted). Follows section 5.1 of `data/god-build/gsc-review-2026-10-18.md`.

---

## For the owner: the short version

### What is happening

- **Nobody is copying or hijacking our pages.** The "Google-selected canonical" sites are a Philippine
  online casino (747 Live) and a US cinema chain (Marcus Theatres). Neither carries a word of our text,
  and our page addresses on those sites are just "page not found".
- **What actually happens:** now and then, when Google loads one of our pages to read it, the copy it
  ends up with is broken: a blank page, or the standard crash screen of the software our site is built
  with (Next.js), which reads *"Application error: a client-side exception has occurred"*. That broken
  copy has no title, no article, no canonical tag and no structured data.
- **Why a casino and a cinema:** every website built with the same software shows that exact same crash
  screen when it breaks (and a blank page looks the same everywhere). Google sees identical pages, decides
  they are copies of each other, and files them all under one "original", usually a big site. All three
  foreign sites in our case are built with Next.js, like ours. Google's own help pages describe this situation, and Google's John
  Mueller explained a near-identical case (a casino "canonical") in September 2026.
- **Our server is not sending anything wrong.** More than 400 test downloads of our pages, as Googlebot,
  all came back complete and correct, with the right canonical tag and structured data.
- **The weak spot is how the page behaves when something goes wrong inside Google's page reader.** I
  reproduced it: if the browser receives an incomplete copy of a page, or one of its program files arrives
  damaged, the site's app wipes the whole page instead of leaving the text in place. Every page type does
  this, including city pages and the homepage, not only the guides.
- **What triggers it inside Google is not visible from outside.** Google's stored copy of one affected
  page (step 1 below) would tell us which of the two failures it was. It does not change the fix.

### How much it costs

- **Right now 7 pages are invisible in Google** (0 impressions since they went live):
  `/blog/does-vinegar-kill-ants`, `/blog/how-long-do-ants-live`, `/blog/wolf-spiders`,
  `/blog/venomous-spiders`, `/blog/ticks-in-maine`, `/blog/ticks-in-oklahoma`, `/learn/bug-bites`.
  `/learn/bug-bites` was hit this morning (11:13 UTC), on Google's very first visit to it.
- **What a fold costs, measured:** the 7 pages rescued by the Oct 16 re-requests went from 0 to about
  **470 impressions a day together** (Oct 17-18). Comparable ant pages that were never folded get 70-490
  a day each.
- **How often:** of the 105 inspected pages that Google crawled since Oct 16, 7 are folded (6.7%); 11 fold
  events since Oct 13, all on the guide template, mostly on a page's first visit. That is above the 5%
  bar set in the Oct 18 plan for speeding up releases.
- **In money, today, it is small** (guides convert impressions to clicks at about 0.4%, and it is off
  season). The real cost is the risk: the same weakness is on every page, so any page, a top Amazon
  article in summer or a city page in June, can drop out of Google after a routine visit and stay out
  until somebody notices.

### What to do

1. **Today, you, about 10 minutes (no code):**
   - Search Console > URL inspection > `https://buzzskito.ca/learn/bug-bites`. If it offers
     **View crawled page**, open the HTML tab, then "More info". Note whether you see (a) almost nothing
     (no title, no article text), (b) the words "Application error: a client-side exception has occurred",
     or (c) the full article. A screenshot is enough. This tells us which failure Google hit.
   - Then **Request indexing** for the 7 pages above (Google allows about 10 a day). The 7 requested on
     Oct 16 all came back within a day. Each new visit can fold again (bug-bites folded on a fresh
     visit this morning), so check them again in 2-3 days.
   - Do not rely on "Test live URL": it downloads a fresh copy, and fresh copies are fine. The earlier
     four pages also passed the live test while they were folded.
2. **This week, developer, about an hour plus the usual build and checks:** add the 20-line "page keeper"
   script (section E) to the site's root layout. In this investigation it turned every one of 16 broken
   test loads back into the full page (title, canonical tag, structured data, text) and did nothing on
   healthy pages. It protects the service and city pages too.
3. **After it ships:** a URL-inspection sweep of new pages every week (the script exists; section G).
   Success means no new casino or cinema canonicals over the next ~100 Google visits; at today's rate
   about 7 would be expected. Keep the release pace at the planned level until then (Oct 18 gate).
4. **Later, optional:** upgrading Next.js to version 15.4 or newer adds a similar built-in safety net for
   search engines. It is a big upgrade and not needed if step 2 works.

**Not needed, or not recommended:** a spam report or DMCA notice (nothing was copied, and it would not
change Google's choice); blocking "the mirror" (there is none); a host-name allow-list in the middleware
(Vercel already refuses other host names); hiding our JavaScript from Google again in robots.txt (Google
advises against it, and it would leave the scroll-reveal sections of the homepage and city pages
invisible to Google).

---

## Evidence

### A. URL Inspection sweep, Oct 20 (11:20-11:40 UTC)

205 URLs through the Search Console URL Inspection API (property `sc-domain:buzzskito.ca`): all 148 guides
(86 from Oct 7-11, 62 from Oct 16), the 30 upgraded articles, 12 older articles and 15 service URLs (one of
them, `/about`, is not a page on the site and is left out below).

| Group | Inspected | Indexed, own canonical | Folded (foreign canonical) | Other |
|---|---|---|---|---|
| Guides of Oct 7-11 | 86 | 80 | 2 | 2 crawled not indexed, 1 discovered, 1 unknown (`zombie-ants`) |
| Pages of Oct 16 | 62 | 53 | 5 | 1 crawled not indexed (`ticks-in-quebec`), 3 discovered (`flea-eggs`, `rat-vs-mouse`, `what-do-fleas-look-like`) |
| Upgraded articles | 30 | 30 | 0 | - |
| Older articles | 12 | 10 | 0 | `when-to-worry-about-a-mosquito-bite` crawled not indexed; `best-cockroach-killer-canada` discovered, never crawled |
| Service pages | 14 | 14 | 0 | - |

**The 7 folded pages** (all: "Duplicate without user-selected canonical", fetch SUCCESSFUL, crawled as
MOBILE, robots ALLOWED, **no user canonical seen, no rich results seen**):

| Page | Crawled (UTC) | Google-selected canonical |
|---|---|---|
| /blog/does-vinegar-kill-ants | Oct 16 11:28 | https://www.747ph.live/ |
| /blog/how-long-do-ants-live | Oct 16 12:07 | https://www.747ph.live/ |
| /blog/wolf-spiders | Oct 17 04:57 | https://www.marcustheatres.com/ (on Oct 18 it was `/theatre-locations/point-cinema`; it changed without a new crawl) |
| /blog/venomous-spiders | Oct 19 17:38 | https://www.marcustheatres.com/theatre-locations/duluth-cinema |
| /blog/ticks-in-maine | Oct 19 17:45 | same |
| /blog/ticks-in-oklahoma | Oct 19 17:47 | same |
| /learn/bug-bites | Oct 20 11:13 | same |

Rates and pattern:
- Crawled since Oct 16: **105 URLs, 7 folded (6.7%)**. Since Oct 13: 106 guide crawls with 7 folds visible
  now, plus the 4 fold events of Oct 13-15 (www.747live.bet, `data/HANDOFF-2026-10-16-traffic-build.md`)
  whose bad crawls were overwritten by the Oct 16 re-crawls. 43 crawls of hand-written and service
  pages in the same period: 0 folds (too few to call that a difference, and section D shows those pages
  have the same weakness).
- Folds come in clusters: Google read 24 pages between 17:33 and 17:47 UTC on Oct 19 and 3 of them folded;
  about 20 crawled later that evening, none folded.
- At least 5 of the 7 folded on the page's first crawl, as far as the inspection data shows: `wolf-spiders`,
  `venomous-spiders`, `ticks-in-maine` and `ticks-in-oklahoma` were released Oct 16 and this is their only
  recorded crawl; `bug-bites` was unknown to Google on Oct 18.
- Two pages crawled today show "Crawled - currently not indexed" **with no canonical recorded**
  (`/blog/baby-mice` 11:15 UTC, `/blog/ticks-in-quebec` 02:38 UTC), unlike a normal not-indexed page such
  as `field-mice`, crawled the same second, which shows its own canonical. They may still be processing, or
  they may be the same failure ending another way (Mueller lists "indexed as the error" and "soft 404" as
  the other outcomes). Re-inspect them on Oct 21-22.
- Timing: before Oct 11 robots.txt blocked `/_next/`, so Google's reader never ran our JavaScript. It was
  unblocked on the evening of Oct 11 (commit 5f4dcd61); the first folds were crawls of Oct 13-15. Only a
  page whose JavaScript runs can be wiped by it (section D), so this fits, though timing alone proves
  nothing.
- Folds do not line up with deploys (GitHub deployment records): the previous deploy was 1.6 to 20 hours
  before each folded crawl. Only `bug-bites` had a deploy soon after its crawl (14 minutes), and section D
  shows that a deploy between Google's download and its rendering does not break our pages.

**What it costs, Search Console (all searches, page filter, daily):**

| Page | Oct 7-15 | Oct 16 | Oct 17 | Oct 18* | Oct 19* |
|---|---|---|---|---|---|
| 7 folded pages (each) | 0 | 0 | 0 | 0 | 0 |
| do-mothballs-keep-mice-away (rescued Oct 16) | 0 | 91 | 156 | 204 | 163 |
| water-bugs-vs-cockroaches (rescued) | 3 | 44 | 97 | 74 | 40 |
| honeypot-ants (rescued) | 3 | 37 | 91 | 108 | 63 |
| types-of-mice (rescued) | 1 | 39 | 51 | 48 | 57 |
| where-do-cockroaches-come-from (rescued) | 0 | 18 | 67 | 27 | 20 |
| how-much-is-pest-control (rescued) | 0 | 9 | 13 | 5 | 6 |
| how-to-get-rid-of-mosquitoes (rescued) | 0 | 2 | 8 | 6 | 1 |
| **7 rescued, total** | 7 | 240 | **483** | **472** | 350 |
| what-do-ants-eat (never folded) | 270 (from Oct 12) | 113 | 83 | 71 | 91 |
| do-ants-bite (never folded) | 307 (from Oct 13) | 180 | 179 | 145 | 106 |

*Oct 18-19 are Google's fresh, incomplete data.

### B. Why a foreign canonical means Google stored a blank or crash copy of our page

1. **Several different articles point at one foreign URL.** `does-vinegar-kill-ants` and
   `how-long-do-ants-live` share `747ph.live/`; four pages (`venomous-spiders`, `ticks-in-maine`,
   `ticks-in-oklahoma`, `bug-bites`) share one cinema page. Different articles can only be "copies" of one
   page if Google holds the same content for all of them, i.e. not our articles but something generic.
2. **"Without user-selected canonical"** means Google found no canonical tag in its copy. Every page
   serves one (section C). Correctly indexed pages show it ("User canonical: self") and Breadcrumbs; the
   folded ones show neither.
3. **The canonical wanders without a recrawl** (wolf-spiders: point-cinema on Oct 18, Marcus homepage on
   Oct 20): our page sits in a cluster of identical pages whose chosen representative changes.
4. **Every foreign canonical is a Next.js App Router site**, the software we use (section C table). An
   empty page is anonymous; the Next.js crash screen is identical on every such site. A cluster made only
   of Next.js sites points to the crash screen.
5. **Outside confirmation.**
   - Google's canonicalization troubleshooting page says that unrelated servers returning identical
     error pages can make Google choose a canonical on another domain
     (https://developers.google.com/search/docs/crawling-indexing/canonicalization-troubleshooting,
     "Misconfigured servers").
   - Search Engine Journal, Sept 18, 2026: a site owner saw Google pick a casino betting page as canonical
     for his pages; a commenter found the third-party URL indexed under the Next.js crash-screen title;
     John Mueller called that a possible explanation and said the fix is to recognize such errors on your
     own side before they reach Google
     (https://www.searchenginejournal.com/google-responds-to-cross-domain-canonical-de-indexing-report/589917/).
   - Next.js discussion #78288 (Next.js 14.2.5 on Vercel, our exact versions): Search Console showed the
     same crash screen on random pages; the working fixes kept the server HTML when the app fails
     (https://github.com/vercel/next.js/discussions/78288). Next.js added that for search engines in 15.4
     (pull requests #77916 and #78298).

### C. The foreign URLs, and our own side

**Foreign sites** (fetched with curl as a browser and as Googlebot, and in a real browser):

| URL | Network | What it is | Built with | Our text on it? | Our slugs on that host |
|---|---|---|---|---|---|
| www.747ph.live/ | Cloudflare, AS13335 (172.64.80.1); origin behind Google Cloud (`via: 1.1 google`) | "747 Live" sports betting and casino site (SpringBuilder); a script sends visitors on to www.747live.bet | its own HTML has no Next.js markers; the destination is Next.js | No | 404 "404 Page - 747 Live" |
| www.747live.bet/ (Oct 13-15 episode) | Cloudflare, AS13335 | same casino | Next.js App Router (`x-powered-by: Next.js`, `Vary: RSC`) | No | 404 "Page Not Found" (repeats the requested address, nothing else) |
| www.marcustheatres.com/, /theatre-locations/point-cinema, /theatre-locations/duluth-cinema | Imperva Incapsula, AS19551 (45.60.171.25) | Marcus Theatres, US cinema chain; scripts get a 212-byte bot challenge marked noindex | Next.js App Router (no `__NEXT_DATA__`, App Router scripts) | No | 302 to /notfound |

None is a scraper or proxy of ours. They are innocent bystanders that share our software and, in Google's
index, the same broken screen.

**Our pages** (all 7 folded pages fetched as Googlebot smartphone, Oct 20):
- 200, `text/html`, Brotli, chunked, Vercel cache HIT. `<link rel="canonical">` absolute and self-referencing,
  inside `<head>` at byte ~4,400 of 187-624 KB; `og:url` absolute and self; robots `index, follow`.
- JSON-LD present: WebSite, Organization, Person, BlogPosting, BreadcrumbList, FAQPage, WebPage, plus one
  ImageObject per photo (7-15 blocks per page).
- More than 400 downloads as Googlebot (HTTP/1.1 and HTTP/2, Brotli and gzip, 205 URLs plus repeats): all
  complete (end with `</html>`), 0.1-0.4 s each.
- Folded pages are not different from the others: same size range (187-624 KB vs 157-858 KB), same
  structure (one-line HTML, largest inline script 85-335 KB vs 68-413 KB), no unusual characters in their
  source files. At crawl time all seven carried the Mediavine script, as 141 of the 148 guides do
  (`/learn/bug-bites` lost it in today's 11:27 UTC deploy, "hubs ad-free"); in the tests of section D the
  running Mediavine script never broke a page.

**Host names and proxies:**
- Another host name sent to our server (`Host: www.747ph.live`) gets Vercel's 404 `DEPLOYMENT_NOT_FOUND`;
  with that name in the TLS handshake the connection fails. Vercel serves our project only under host
  names attached to it, so a middleware host-name allow-list would add nothing.
- `www.buzzskito.ca` redirects (308) to `buzzskito.ca`.
- `buzzskito-website.vercel.app` serves the whole site with no noindex, but every page carries our
  canonical to `buzzskito.ca`. Harmless; a 308 redirect of that name is optional hygiene.

**The Oct 19 bot block (`middleware.ts`)** is not involved: the folds began on Oct 13; Googlebot and
Google-InspectionTool match its "declared crawler" pattern; the files Google's reader loads (`/_next/...`)
are outside its matcher.

### D. Reproduced: how our pages turn into the blank or crash screen

Chrome (the engine of Google's reader) with Googlebot's smartphone identity, against the live site:

| Situation | Result, today's site (4 pages: a guide, a hub, a city page, the homepage) |
|---|---|
| Complete page | Correct: title, canonical, structured data, text |
| HTML arrives incomplete, cut anywhere between ~45% and ~95% of its length (the part that carries the page's React data) | **Blank page**: no title, no canonical, no text; only scripts and the 3 site-wide schema blocks remain. React error #423 and "Connection closed." |
| One program file arrives but without its code (the layout file or the large shared file) | **"Application error: a client-side exception has occurred (see the browser console for more information)."** `<html id="__next_error__">`, no title, no canonical |

The incomplete-HTML result was the same on all 6 pages mapped (4 guides, `how-to-get-rid-of-cockroaches-canada`,
`/mississauga-mosquito-control`).

Tested and **not** able to break a complete page: 412 px and 20,000 px-tall screens; scrolling and
resizing; timers fast-forwarded 120 seconds; Los Angeles, UTC and Singapore time zones; reduced motion;
JavaScript off; every program file blocked, empty, or replaced by an HTML page, one at a time; 404s on the
layout file, the page's own file, the stylesheet and the fonts; all program files 3-8 seconds late (so
Mediavine runs first); and the page as saved at 11:17 UTC rendered after the next deploy (4 program files
and the stylesheet gone: the page loads unstyled but complete). In every case title, canonical and text
stayed.

So the page survives a missing or unreadable file, but not an incomplete page or a file that runs but lacks
the code the page expects. Why Google's reader sometimes gets one of those cannot be seen from outside: a
cut-off download on Google's side, a mismatched file in Google's cache of our files, or a failure in
Google's reader that ordinary Chrome does not show. Step 1 of "What to do" narrows it down; the fix in E
covers all of them.

**Version skew is not the cause.** The Next.js thread's leading theory is Google reading a page against
files from a newer deploy. Here: Vercel keeps old files available to Googlebot and Bingbot for 60 days
(Skew Protection; https://vercel.com/docs/skew-protection); our pages survive missing files anyway (above);
and the folds do not line up with deploys. Side note: for ordinary visitors this project's window looks
shorter than Vercel's one-day default (files of the deployment created around 15:25 UTC on Oct 19 were
already 404 at about 11:50 UTC on Oct 20, while those of the 11:27 UTC deployment were still served after
the 12:00 deploy). Check the setting under Vercel > Settings > Advanced > Skew Protection; it only matters
for someone who keeps a page open for many hours.

The Oct 18 review's candidate fix, adding `app/error.tsx` / `app/global-error.tsx`, would not solve it: in
the incomplete-page case the crash happens above those error pages (the page ends blank, not on an error
screen), and in the other case an error page still replaces the article.

### E. The fix: a "page keeper" (tested)

A small inline script, placed in `<head>` of `app/layout.tsx` right after the existing `anim` script (same
`dangerouslySetInnerHTML` pattern). When the HTML has been read, it keeps a reference to the page's own
elements (references only, no copying, so the cost should be negligible). If the app then crashes and the
canonical tag or the text disappears, it puts the original elements back, once. On a healthy page it does
nothing.

```js
(function () {
  try {
    var head = null, body = null, hadCanonical = false, done = false;
    document.addEventListener('DOMContentLoaded', function () {   // the server HTML is complete here
      head = Array.prototype.slice.call(document.head.childNodes);
      body = Array.prototype.slice.call(document.body.childNodes);
      hadCanonical = !!document.querySelector('link[rel="canonical"]');
    }, true);
    function broken() {
      return (hadCanonical && !document.querySelector('link[rel="canonical"]')) ||
             document.body.innerText.trim().length < 50;
    }
    function restore() {
      if (done || !head || !broken()) return;
      done = true;
      var keepBody = new Set(body), keepHead = new Set(head);
      Array.prototype.slice.call(document.body.childNodes).forEach(function (n) { if (!keepBody.has(n)) n.remove(); });
      Array.prototype.slice.call(document.head.childNodes).forEach(function (n) {
        if (!keepHead.has(n) && n.tagName !== 'SCRIPT' && n.tagName !== 'LINK') n.remove();
      });
      document.documentElement.removeAttribute('id');     // the crash screen sets id="__next_error__"
      document.documentElement.classList.remove('anim');  // no JavaScript left to run the scroll reveals
      head.forEach(function (n) { if (!n.isConnected) document.head.appendChild(n); });
      body.forEach(function (n) { if (!n.isConnected) document.body.appendChild(n); });
    }
    window.addEventListener('error', function () { setTimeout(restore, 0); });
    window.addEventListener('load', function () { setTimeout(restore, 1000); });
  } catch (e) {}
})();
```

Test result (the script injected into the live HTML, same four pages and situations as section D):

| | Complete page | HTML cut at 70% | HTML cut at 50% | Layout file without code | Shared file without code |
|---|---|---|---|---|---|
| Today's site | OK | blank | blank | crash screen | crash screen |
| With the page keeper | OK | **OK** | **OK** | **OK** | **OK** |

OK = title, canonical and full text present (16 of 16 broken loads restored; the 4 complete loads unchanged).
After a restore the page is the server HTML without the app running: links work, interactive extras
(sticky bars, quizzes) do not, which is still far better than a blank page. Notes for the developer:
`npx next build`, all `check:*` guards, then `node scripts/measure-speed.mjs` before and after; re-run the
harness (section G) against the live site after deploy, expecting all OK without injection.

### F. Defenses, by effort

| # | Defense | Effort | Verdict |
|---|---|---|---|
| 0 | Absolute self-canonical, og:url, JSON-LD | in place | Verified on every affected page. They cannot help when the app wipes the page, because they are wiped with it. |
| 1 | Owner: "View crawled page" on one folded URL; "Request indexing" for the 7 | 10 min | Do today. |
| 2 | Page keeper in `app/layout.tsx` (section E) | ~1 hour + build, checks, speed run | Do this week. Tested. Protects every page type. |
| 3 | Weekly URL-inspection sweep of new and changed pages; re-request any fold | ~15 min a week | Do. Script exists (section G). |
| 4 | Host-name allow-list in middleware | small | Not needed: Vercel already refuses other host names. |
| 5 | Block the mirror's crawler or IPs | - | There is no mirror. |
| 6 | Google spam report or DMCA notice (owner's decision) | owner | No basis: nothing was copied, the foreign sites are bystanders, and it would not change Google's choice. |
| 7 | Hide our JavaScript from Google again (`Disallow: /_next/static/chunks/`) | small | Not recommended: against Google's guidance, and with the `anim` gate the homepage (21 reveal sections) and city pages (4 on the Mississauga page) would show Google sections that never fade in. Only with a change to that gate, and only if 2 cannot ship. |
| 8 | Upgrade Next.js to 15.4 or newer (built-in fallback for search engines) | large (React 19) | Optional, later. Re-run the harness: its fallback may not cover the incomplete-page case. |
| 9 | Re-inspection after the fix | - | Weekly for 3 weeks. Success = no foreign canonical in ~100 Google visits (about 7 expected at today's rate). |

### G. Data, scripts and how to re-run

Scratchpad (not the repo): `C:\Users\buzzs\AppData\Local\Temp\claude\C--Users-buzzs-buzzskito-website\346ad20e-f0cd-4fd1-a3b4-396de78eb0ad\scratchpad\`
- `foreign-canon/inspect-2026-10-20.jsonl`: raw API answers for the 205 URLs; `foreign-canon/tables.md`: the tables of Appendix A.
- `fc-scripts/gsc_sweep.py <list.json> <out.jsonl>`: the read-only inspection sweep (uses the mcp-gsc token,
  never writes it). Run with `C:\Users\buzzs\Documents\mcp-gsc\.venv\Scripts\python.exe -I`.
  `fc-scripts/analyze.py <out.jsonl>` prints folds and rates.
- `fc-scripts/keeper-harness.js`: the reproduction and regression test of sections D and E (paste into the
  Playwright `browser_run_code_unsafe` tool; `INJECT_KEEPER = true` tests the keeper before it ships).
- `foreign-canon/dl/`: the foreign pages as fetched; `foreign-canon/ours/`: our HTML as served at 11:17 UTC;
  `foreign-canon/gsc_daily.json`, `deployments.json`, `sizes.json`, `scripts-shape.json`.

### H. Side findings (outside this question)

- `/blog/best-cockroach-killer-canada` (an Amazon article, live and in the sitemap) is "Discovered -
  currently not indexed": Google has never crawled it. Worth one "Request indexing".
- `/blog/zombie-ants` is still "URL is unknown to Google"; `flea-eggs`, `rat-vs-mouse`,
  `what-do-fleas-look-like` and `natural-pest-control` are discovered but not crawled.
- `lib/attribution.ts` `readCookie()` calls `decodeURIComponent` without a try/catch; a malformed cookie
  would crash the page for that visitor. Not Google's problem (its reader starts without cookies), and the
  page keeper would cover it; a two-line hardening when someone is in that file.

---

## Appendix A. URL Inspection details, Oct 20

| Page | Coverage | Google-selected canonical | User canonical seen | Last crawl (UTC) | Fetch | Crawled as | Rich results seen |
|---|---|---|---|---|---|---|---|
| /blog/does-vinegar-kill-ants | Duplicate without user-selected canonical | www.747ph.live/ | none | 2026-10-16 11:28 | SUCCESSFUL | MOBILE | - |
| /blog/how-long-do-ants-live | Duplicate without user-selected canonical | www.747ph.live/ | none | 2026-10-16 12:07 | SUCCESSFUL | MOBILE | - |
| /blog/wolf-spiders | Duplicate without user-selected canonical | www.marcustheatres.com/ | none | 2026-10-17 04:57 | SUCCESSFUL | MOBILE | - |
| /blog/venomous-spiders | Duplicate without user-selected canonical | www.marcustheatres.com/theatre-locations/duluth-cinema | none | 2026-10-19 17:38 | SUCCESSFUL | MOBILE | - |
| /blog/ticks-in-maine | Duplicate without user-selected canonical | www.marcustheatres.com/theatre-locations/duluth-cinema | none | 2026-10-19 17:45 | SUCCESSFUL | MOBILE | - |
| /blog/ticks-in-oklahoma | Duplicate without user-selected canonical | www.marcustheatres.com/theatre-locations/duluth-cinema | none | 2026-10-19 17:47 | SUCCESSFUL | MOBILE | - |
| /learn/bug-bites | Duplicate without user-selected canonical | www.marcustheatres.com/theatre-locations/duluth-cinema | none | 2026-10-20 11:13 | SUCCESSFUL | MOBILE | - |
| /blog/do-mothballs-keep-mice-away | Submitted and indexed | self | self | 2026-10-16 03:28 | SUCCESSFUL | MOBILE | Breadcrumbs |
| /blog/how-much-is-pest-control | Submitted and indexed | self | self | 2026-10-16 03:47 | SUCCESSFUL | MOBILE | Breadcrumbs |
| /blog/water-bugs-vs-cockroaches | Submitted and indexed | self | self | 2026-10-16 03:46 | SUCCESSFUL | MOBILE | Breadcrumbs |
| /blog/where-do-cockroaches-come-from | Submitted and indexed | self | self | 2026-10-16 03:47 | SUCCESSFUL | MOBILE | Breadcrumbs |
| /blog/honeypot-ants | Submitted and indexed | self | self | 2026-10-16 03:47 | SUCCESSFUL | MOBILE | Breadcrumbs |
| /blog/types-of-mice | Submitted and indexed | self | self | 2026-10-16 03:47 | SUCCESSFUL | MOBILE | Breadcrumbs |
| /blog/how-to-get-rid-of-mosquitoes | Submitted and indexed | self | self | 2026-10-16 03:47 | SUCCESSFUL | MOBILE | Breadcrumbs |
| /blog/baby-mice | Crawled - currently not indexed | none recorded | none | 2026-10-20 11:15 | SUCCESSFUL | MOBILE | - |
| /blog/field-mice | Crawled - currently not indexed | self | self | 2026-10-20 11:15 | SUCCESSFUL | MOBILE | - |
| /blog/ticks-in-quebec | Crawled - currently not indexed | none recorded | none | 2026-10-20 02:38 | SUCCESSFUL | MOBILE | - |
| /blog/asian-lady-beetles | Submitted and indexed | self | self | 2026-10-17 01:12 | SUCCESSFUL | MOBILE | Breadcrumbs |
| /blog/tiny-black-bugs | Submitted and indexed | self | self | 2026-10-17 01:12 | SUCCESSFUL | MOBILE | Breadcrumbs |
| /blog/bugs-in-house-in-winter | Submitted and indexed | self | self | 2026-10-17 07:22 | SUCCESSFUL | MOBILE | Breadcrumbs |
| /blog/how-to-get-rid-of-fleas | Submitted and indexed | self | self | 2026-10-17 07:24 | SUCCESSFUL | MOBILE | Breadcrumbs |
| /blog/pantry-pests | Submitted and indexed | self | self | 2026-10-17 09:08 | SUCCESSFUL | MOBILE | Breadcrumbs |
| /blog/bugs-that-look-like-fleas | Submitted and indexed | self | self | 2026-10-17 11:11 | SUCCESSFUL | MOBILE | Breadcrumbs |
| /blog/house-centipedes | Submitted and indexed | self | self | 2026-10-18 01:49 | SUCCESSFUL | MOBILE | Breadcrumbs |
| /blog/cockroach-eggs | Submitted and indexed | self | self | 2026-10-18 12:01 | SUCCESSFUL | MOBILE | Breadcrumbs |
| /blog/house-spiders | Submitted and indexed | self | self | 2026-10-19 17:34 | SUCCESSFUL | MOBILE | Breadcrumbs, Image Metadata |
| /blog/ticks-in-texas | Submitted and indexed | self | self | 2026-10-19 17:37 | SUCCESSFUL | MOBILE | Breadcrumbs, Image Metadata |
| /blog/spiders-in-california | Submitted and indexed | self | self | 2026-10-19 17:37 | SUCCESSFUL | MOBILE | Breadcrumbs, Image Metadata |
| /blog/palmetto-bugs | Submitted and indexed | self | self | 2026-10-19 17:42 | SUCCESSFUL | MOBILE | Breadcrumbs, Image Metadata |
| /blog/brown-recluse-bite | Submitted and indexed | self | self | 2026-10-19 17:43 | SUCCESSFUL | MOBILE | Breadcrumbs, Image Metadata |
| /blog/spiders-in-texas | Submitted and indexed | self | self | 2026-10-19 20:58 | SUCCESSFUL | MOBILE | Breadcrumbs, Image Metadata |
| /learn/ticks-by-state | Submitted and indexed | self | self | 2026-10-19 21:40 | SUCCESSFUL | MOBILE | Breadcrumbs, Image Metadata |
| /blog/roof-rat-vs-norway-rat | Submitted and indexed | self | self | 2026-10-19 21:44 | SUCCESSFUL | MOBILE | Breadcrumbs, Image Metadata |
| /blog/spiders-in-florida | Submitted and indexed | self | self | 2026-10-19 21:49 | SUCCESSFUL | MOBILE | Breadcrumbs, Image Metadata |
| /blog/brown-recluse-look-alikes | Submitted and indexed | self | self | 2026-10-19 22:07 | SUCCESSFUL | MOBILE | Breadcrumbs, Image Metadata |
| /learn/ticks-by-province | Submitted and indexed | self | self | 2026-10-20 03:48 | SUCCESSFUL | MOBILE | Breadcrumbs, Image Metadata |

All 62 pages of Oct 16 and the other groups are in `foreign-canon/tables.md` and the raw `.jsonl`.
