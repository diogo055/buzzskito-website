# Writer brief: scheduled state and province pages (god build)

You are writing one page of the state/province series. The page is a JSON file rendered by
`components/GuidePage.tsx`; it must pass `node scripts/validate-guide.mjs <slug>` before you
finish. Read these first:

1. Your page's entry in `data/god-build/plan.src.json` (slug, keyword, alsoTargets, h1Hint,
   scope, releaseOn, parent, mustLink, neighbors, dataPacket, audience).
2. Your data packet (`dataPacket` in the entry). **Every number on the page comes from the
   packet or from a primary source you open and cite.** Never retype a figure from memory or
   from a secondary site.
3. `content/guides/ticks-in-michigan.json`: the structure, depth and voice to match or beat.
4. The SERP study for your country: `data/god-build/research/us-serp.md` or `canada-serp.md`.
   It lists what the page must carry to beat what ranks now, and what to avoid.
5. The general guide rules: `data/us-pages/WRITER_BRIEF.md` (sources linked inline, no
   retailer links, no testing claims, no absolute safety words, descriptive link anchors).

## The file

Write `content/guides-scheduled/<slug>.json` (NOT content/guides/). Fields as in the Michigan
page, plus:
- `"datePublished"`: the entry's `releaseOn` exactly (the release script moves it to the real
  release day).
- `"parent"`: the entry's `parent` object exactly.
- `"locale": "en-CA"` on Canadian pages only (Canadian spelling, °C first, metric first).
- `"disclaimer": "health"` (or `"both"` if the page discusses pesticides).
- `kind: "spoke"`, `cluster`: the entry's cluster. Hubs set `"section": "learn"`.

## What every state/province page carries

- A quick answer (22 to 75 words) that answers the search directly, with the latest figure and
  its year, and 3 to 6 bullets.
- A facts box (4 to 12 rows), every figure labelled with its year or "through <month year>".
- **At least one chart or map from the packet.** Tick pages: a county map (block `map`,
  `scope` = the two-letter code) and a cases-by-year chart (block `chart`). Mosquito pages: a
  month-by-month temperature chart for the season and a West Nile cases-by-year chart.
- **At least two real photos** (block `figure`) chosen from `data/god-build/photos.json`:
  copy `src` (the `file` value), `width`, `height`, `license`, `credit` and `sourceUrl`
  exactly from the record; write your own `alt` (15-220 characters, what the photo shows) and a
  short `caption`. Only species that actually occur in the state.
- Sections answering what the SERP study says searchers want, in plain question headings.
- Links: the hub (`mustLink`), at least 2 of the `neighbors` pages (they may not be live yet;
  link them anyway, they light up when released), and 2 to 4 real topical matches among
  existing pages (`data/us-pages/routes.json` lists them; e.g. /blog/what-do-ticks-look-like,
  /blog/how-to-remove-tick-safely, /learn/tick-identification-chart, /blog/ticks-on-dogs,
  /blog/how-to-get-rid-of-mosquitoes). Never link service or city pages.
- 4 to 6 FAQs (35 to 120 words each, plain text), 4 to 12 sources (at least 3 government,
  university or scientific), each linked inline where it is used.

## Data rules

- **Tick maps** (CDC tick status by county) come from the private file
  `data/god-build/raw/derived/ticks-county/<ST>.json` (keys `blacklegged`, `loneStar`, ...;
  values `established` / `reported`). Use it ONLY for this state's own map; the page's
  `source` must name "CDC ArboNET Tick Module (county status through Dec 31, 2025)". Never
  paste the table elsewhere. Map categories: `[{key:"established",label:"Established"},
  {key:"reported",label:"Reported"}]`; counties not listed show as "No record". Say in the
  caption that "no record" does not mean no ticks.
- **Lyme**: confirmed + probable, by county or state of RESIDENCE, through 2023 (CDC's latest).
  Always state the 2022 case-definition change when comparing years, and that 2019-2020 were
  affected by COVID-19 reporting.
- **CDC tick tables**: "established" is cumulative and depends on sampling effort.
- **Mosquito-borne disease**: CDC ArboNET, by state of residence, West Nile through 2025.
  Aedes county records run to about 2016 (Monaghan et al. 2019): say so.
- **Season**: NOAA statewide normals are averages over a whole state. For a season claim cite
  the state or county vector-control or extension source; use the normals only to illustrate.
  For tick activity the existing pages use "above about 40 to 45 °F" from cited extension or
  health department pages: cite whatever source you use.
- **State-specific services** (tick ID labs, testing, Asian longhorned reporting, county
  mosquito programs): find them on the state health department or extension site, open the
  page, and cite it. If a service cannot be confirmed, leave it out.
- A secondary site (news, pest company) may be cited only for news events, marked
  `"kind": "news"`.

## Style

US pages: US spelling, Fahrenheit (Celsius optional in brackets), inches and miles.
Canadian pages: Canadian spelling, Celsius (Fahrenheit optional in brackets), metric.
Short paragraphs, question headings, no filler ("in conclusion", "when it comes to"), no
"safe"/"non-toxic"/"100%", no claims that BuzzSkito tested anything, no quote or service
pitch (these pages are outside our service area), no retailer or Amazon links.

## Finish

Run `node scripts/validate-guide.mjs <slug>` and fix every error. Report: the file path, word
count, the sources you used, any figure you could not confirm, and anything a fact-checker
should look at first.
