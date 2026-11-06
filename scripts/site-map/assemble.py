"""Site map dashboard data (read-only): every live page, its topic group and family, and its Google web clicks
from Search Console per month of 2026 plus the last 28 days. Feeds https://claude.ai/artifact/BjoM5C1kcLqJaAhsbSskwA
(Dashboard type; the page is files/index.html in its store, the data the attached file buzzskito-pages.json).

  python scripts/site-map/gsc_pull.py   <out dir>   # monthly page clicks -> <out>/gsc_raw.json
  python scripts/site-map/assemble.py   <out dir>   # -> <out>/buzzskito-pages.json (run after a fresh npm run build)

Run from the repo root. To refresh the dashboard: upload the new JSON to the artifact as an asset, update
datasets/pages (url, updated, edit), and if the month changed, extend MONTHS/DAYS in the page and the day
counts inside its calcs. Set LAST below to the last full day in Search Console. Never write output into the repo.
"""
import collections
import html
import json
import os
import re
import sys
from urllib.parse import urlsplit

from google.auth.transport.requests import AuthorizedSession, Request
from google.oauth2.credentials import Credentials

sys.stdout.reconfigure(encoding="utf-8")
HERE = sys.argv[1]  # output folder, outside the repo
B = os.getcwd()
LAST = "2026-11-04"          # last full day in Search Console
L28 = ("2026-10-08", LAST)

# ---------- live pages ----------
pm = json.load(open(os.path.join(B, ".next", "prerender-manifest.json"), encoding="utf-8"))
routes = sorted(r for r in pm["routes"] if not r.startswith("/api") and "." not in r and not r.startswith("/_"))
art = {a["path"]: a for a in json.load(open(os.path.join(B, "lib", "article-index.json"), encoding="utf-8"))["articles"]}
roles = json.load(open(os.path.join(B, "lib", "page-roles.json"), encoding="utf-8"))
local = set(roles["leadPosts"]) | set(roles["localInfo"])

CITIES = ["mississauga", "toronto", "brampton", "oakville", "burlington", "hamilton", "vaughan", "richmond-hill", "markham",
          "etobicoke", "scarborough", "north-york", "caledon", "milton", "georgetown", "halton-hills", "king-city", "woodbridge", "thornhill"]
CITY_PAGES = ({f"/{c}-mosquito-control" for c in CITIES} | {f"/{c}-tick-spray" for c in CITIES}
              | {"/burlington-mosquito-spray", "/york-region-mosquito-control"})
PROPERTY = {"/commercial-mosquito-control", "/daycare-camp-mosquito-tick-control", "/estate-property-mosquito-control",
            "/golf-course-mosquito-control", "/hoa-condo-community-mosquito-control", "/pool-backyard-mosquito-control",
            "/property-manager-mosquito-tick-control", "/restaurant-patio-mosquito-control", "/wedding-mosquito-control"}
TRACKERS = {"/yard-risk-report", "/am-i-a-mosquito-magnet", "/lyme-disease-risk-calculator", "/gta-mosquito-pressure-map",
            "/buzzskito-2026-gta-mosquito-tick-report", "/ontario-lyme-disease-tracker-2026", "/west-nile-virus-ontario-tracker",
            "/ticks-in-ontario-statistics"}
MAIN = {"/", "/mosquito-control", "/tick-control", "/mosquito-control-cost", "/mosquito-control-pricing", "/how-it-works",
        "/reviews", "/contact", "/service-areas", "/frequently-asked-question", "/mosquito-spray-safety", "/buzzskito-history",
        "/mosquito-control-near-me", "/tick-control-near-me", "/mosquito-control-ontario", "/tick-control-ontario",
        "/mosquito-control-diy-vs-professional", "/mosquito-tick-control-glossary", "/free-yard-assessment",
        "/buzzskito-vs-lawnsavers", "/buzzskito-vs-mosquito-buzz", "/buzzskito-vs-mosquitoman"}
CLUSTER = {  # the site's own topic clusters (lib/article-index.json) -> group, family
    "mosquitoes": ("Mosquitoes", "Mosquito & tick articles"), "ticks": ("Ticks", "Mosquito & tick articles"),
    "bed-bugs": ("Bed bugs", "Bugs in the house"), "cockroaches": ("Cockroaches", "Bugs in the house"),
    "ants": ("Ants", "Bugs in the house"), "household": ("Household bugs", "Bugs in the house"),
    "crawlers": ("Crawling bugs", "Bugs in the house"), "mites": ("Mites", "Bugs in the house"),
    "mice": ("Mice & rats", "Mice & wildlife"), "wildlife": ("Wildlife", "Mice & wildlife"),
    "spiders": ("Spiders", "Spiders, wasps & flies"), "wasps": ("Wasps & bees", "Spiders, wasps & flies"),
    "flies": ("Flies & gnats", "Spiders, wasps & flies"),
    "garden": ("Garden & plants", "Garden & gear"), "equipment": ("Sprayers & foggers", "Garden & gear"),
    "moisture": ("Dehumidifiers & sump pumps", "Garden & gear"), "pest-control": ("General pest control", "Garden & gear"),
    "bites": ("Bug bites", "Bites & ID tools"),
}
HUBS = {"/pest-product-guides/ant-control": "ants", "/pest-product-guides/bed-bug-control": "bed-bugs",
        "/pest-product-guides/cockroach-control": "cockroaches", "/pest-product-guides/mosquito-gear": "mosquitoes",
        "/pest-product-guides/rodent-control": "mice", "/pest-product-guides/tick-gear": "ticks",
        "/deadliest-animal-in-canada": "mosquitoes", "/lyme-disease-canada-statistics": "ticks"}
SB = "Spray business"


def assign(p):
    if p in MAIN:
        return "Homepage & main pages", SB
    if p in CITY_PAGES:
        return "City pages", SB
    if p in PROPERTY:
        return "Property-type pages", SB
    if p in TRACKERS:
        return "GTA tools & trackers", SB
    if p.startswith("/pest-control-"):
        return "Pest control city pages", SB
    if p.startswith("/best-mosquito-control-companies-"):
        return "Best-company lists", SB
    if p.endswith("-mosquito-control"):
        return "Neighbourhood pages", SB
    if p in local or (p.startswith("/blog/") and p not in art):
        return "Local mosquito & tick articles", SB
    if p.startswith("/tools/"):
        return "Bug ID tools", "Bites & ID tools"
    if p in HUBS:
        return CLUSTER[HUBS[p]]
    if p in art:
        return CLUSTER[art[p]["cluster"]]
    if p in ("/blog", "/learn", "/pest-product-guides"):
        return "Index pages", "Index & site pages"
    if p in ("/privacy-policy", "/terms", "/image-use"):
        return "Site info", "Index & site pages"
    raise SystemExit("no group for " + p)


pages = {}
for p in routes:
    rel = "index" if p == "/" else p.lstrip("/")
    h = open(os.path.join(B, ".next", "server", "app", *rel.split("/")) + ".html", encoding="utf-8").read()
    t = re.search(r"<title>(.*?)</title>", h, re.S)
    title = html.unescape(t.group(1)).strip() if t else p
    title = re.sub(r"\s*\|\s*BuzzSkito\s*$", "", title)
    rb = re.search(r'<meta name="robots" content="([^"]+)"', h)
    g, fam = assign(p)
    pages[p] = {"path": p, "title": title, "group": g, "family": fam,
                "in_google": "no" if rb and "noindex" in rb.group(1) else "yes"}
print("live pages:", len(pages))

# ---------- redirects (old addresses count toward the page they forward to) ----------
rm = json.load(open(os.path.join(B, ".next", "routes-manifest.json"), encoding="utf-8"))
exact = {r["source"]: r["destination"] for r in rm["redirects"]
         if not r.get("internal") and not any(c in r["source"] for c in ":(*")}


def resolve(p):
    for _ in range(6):
        if p in pages:
            return p
        if p in exact and exact[p].startswith("/"):
            p = exact[p]
            continue
        if p.startswith("/f/") or p.startswith("/home/f/"):
            p = "/mosquito-control"
            continue
        if p.startswith("/home/"):
            p = "/"
            continue
        return None
    return None


def norm(u):
    p = urlsplit(u).path or "/"
    return p.rstrip("/") or "/"


# ---------- Search Console ----------
raw = json.load(open(os.path.join(HERE, "gsc_raw.json"), encoding="utf-8"))
creds = Credentials.from_authorized_user_file(r"C:\Users\buzzs\Documents\mcp-gsc\token.json")
if not creds.valid:
    creds.refresh(Request())
s = AuthorizedSession(creds)
API = "https://searchconsole.googleapis.com/webmasters/v3/sites/sc-domain%3Abuzzskito.ca/searchAnalytics/query"


def pull(a, b):
    r = s.post(API, json={"startDate": a, "endDate": b, "dimensions": ["page"], "type": "web", "dataState": "all",
                          "rowLimit": 25000}, timeout=180)
    r.raise_for_status()
    return {x["keys"][0]: [x["clicks"], x["impressions"]] for x in r.json().get("rows", [])}


MONTHS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov"]
windows = {m: raw["months"][f"2026-{i + 1:02d}"]["rows"] for i, m in enumerate(MONTHS[:-1])}
windows["nov"] = pull("2026-11-01", LAST)
windows["last28"] = pull(*L28)
for row in pages.values():
    for k in MONTHS + ["last28", "last28_shown"]:
        row[k] = 0
lost = collections.Counter()
for k, rows in windows.items():
    for u, (c, imp) in rows.items():
        p = resolve(norm(u))
        if p is None:
            lost[(k, norm(u))] += c
            continue
        pages[p][k] += int(c)
        if k == "last28":
            pages[p]["last28_shown"] += int(imp)
for row in pages.values():
    row["summer"] = sum(row[m] for m in ("may", "jun", "jul", "aug", "sep"))
    row["year_2026"] = sum(row[m] for m in MONTHS)
tot = {k: sum(r[k] for r in pages.values()) for k in MONTHS + ["last28"]}
lostk = collections.Counter()
for (k, p), c in lost.items():
    lostk[k] += c
print("clicks kept:", tot)
print("clicks on addresses that no longer lead anywhere:", dict(lostk))
print("top lost:", collections.Counter({f"{k} {p}": c for (k, p), c in lost.items()}).most_common(10))

order = ["path", "title", "group", "family", "in_google", "last28", "last28_shown", "summer", "year_2026"] + MONTHS
out = [{k: r[k] for k in order} for r in sorted(pages.values(), key=lambda r: (-r["last28"], r["path"]))]
with open(os.path.join(HERE, "buzzskito-pages.json"), "w", encoding="utf-8") as fh:
    json.dump(out, fh, ensure_ascii=False, separators=(",", ":"))
print("file bytes:", os.path.getsize(os.path.join(HERE, "buzzskito-pages.json")))

# ---------- summary for the write-up ----------
G = collections.defaultdict(collections.Counter)
F = collections.defaultdict(collections.Counter)
for r in out:
    for k in ["last28", "summer", "year_2026"] + MONTHS:
        G[r["group"]][k] += r[k]
        F[r["family"]][k] += r[k]
    G[r["group"]]["pages"] += 1
    F[r["family"]]["pages"] += 1
    G[r["group"]]["zero"] += r["last28"] == 0
    G[r["group"]]["noindex"] += r["in_google"] == "no"
T = {k: sum(r[k] for r in out) for k in ["last28", "summer", "year_2026"]}
print("\nTOTAL pages", len(out), T, "zero last28:", sum(r["last28"] == 0 for r in out),
      "noindex:", sum(r["in_google"] == "no" for r in out))
print("\nFAMILIES                   pages  last28 (share)   summer (share)   2026")
for f, c in sorted(F.items(), key=lambda x: -x[1]["last28"]):
    print(f"{f:26s} {c['pages']:4d}  {c['last28']:6d} {c['last28'] / T['last28']:6.1%}  {c['summer']:6d} "
          f"{c['summer'] / T['summer']:6.1%}  {c['year_2026']:6d}")
print("\nGROUPS                          pages last28 per-page summer   2026 zero noindex  family")
fam_of = {r["group"]: r["family"] for r in out}
for g, c in sorted(G.items(), key=lambda x: -x[1]["last28"]):
    print(f"{g:32s} {c['pages']:4d} {c['last28']:6d} {c['last28'] / c['pages']:7.1f} {c['summer']:6d} {c['year_2026']:6d} "
          f"{c['zero']:4d} {c['noindex']:4d}  {fam_of[g]}")
print("\nFAMILY BY MONTH (visits per day):")
DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 4]
for f, c in sorted(F.items(), key=lambda x: -x[1]["year_2026"]):
    print(f"{f:26s}", " ".join(f"{c[m] / d:6.1f}" for m, d in zip(MONTHS, DAYS)))
print("\nTOP PAGES last28:", [(r["path"], r["last28"]) for r in out[:12]])
