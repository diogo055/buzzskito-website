"""Site map refresh, Nov 10, 2026 (read-only): one row per live page (tonight's build of 4926e9a7) with Google web
clicks (Search Console) and page views (GA4, bots excluded) for the last 48 hours, 7 days, 28 days, summer and 2026,
plus the new-pages file (released Oct 28 - Nov 10: index status, first day shown, totals since release)."""
import collections
import datetime as dt
import glob
import html
import json
import os
import re
import sys
from urllib.parse import urlsplit

sys.stdout.reconfigure(encoding="utf-8")
HERE = os.path.dirname(os.path.abspath(__file__))
B = r"C:\Users\buzzs\buzzskito-build"


def J(name):
    return json.load(open(os.path.join(HERE, name), encoding="utf-8"))


# ---------- live pages and their groups (same rules as scripts/site-map/assemble.py) ----------
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
CLUSTER = {
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


MONTHS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov"]
G_KEYS = ["h48", "d7", "last28", "summer", "year_2026"] + MONTHS + ["h48_shown", "d7_shown", "last28_shown"]
V_KEYS = ["v_h48", "v_d7", "v_last28", "v_summer", "v_year_2026", "v28_ca", "v28_us"]
pages = {}
for p in routes:
    rel = "index" if p == "/" else p.lstrip("/")
    h = open(os.path.join(B, ".next", "server", "app", *rel.split("/")) + ".html", encoding="utf-8").read()
    t = re.search(r"<title>(.*?)</title>", h, re.S)
    title = re.sub(r"\s*\|\s*BuzzSkito\s*$", "", html.unescape(t.group(1)).strip()) if t else p
    rb = re.search(r'<meta name="robots" content="([^"]+)"', h)
    g, fam = assign(p)
    pages[p] = dict({"path": p, "title": title, "group": g, "family": fam,
                     "in_google": "no" if rb and "noindex" in rb.group(1) else "yes", "released": ""},
                    **{k: 0 for k in G_KEYS + V_KEYS})
print("live pages:", len(pages), "kept out of Google:", sum(r["in_google"] == "no" for r in pages.values()))

rm = json.load(open(os.path.join(B, ".next", "routes-manifest.json"), encoding="utf-8"))
exact = {r["source"]: r["destination"] for r in rm["redirects"] if not r.get("internal") and not any(c in r["source"] for c in ":(*")}


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


lost = collections.Counter()


def add_gsc(rows, key, shown_key=None):
    for x in rows:
        p = resolve(norm(x["keys"][-1]))
        if p is None:
            lost[("gsc " + key, norm(x["keys"][-1]))] += x["clicks"]
            continue
        pages[p][key] += int(x["clicks"])
        if shown_key:
            pages[p][shown_key] += int(x["impressions"])


add_gsc(J("gsc_h48.json"), "h48", "h48_shown")
add_gsc(J("gsc_p7.json"), "d7", "d7_shown")
add_gsc(J("gsc_p28.json"), "last28", "last28_shown")
gm = J("gsc_months.json")
for i, m in enumerate(MONTHS):
    add_gsc([{"keys": [u], "clicks": c, "impressions": imp} for u, (c, imp) in gm[f"{i + 1:02d}"]["rows"].items()], m)
for r in pages.values():
    r["summer"] = sum(r[m] for m in ("may", "jun", "jul", "aug", "sep"))
    r["year_2026"] = sum(r[m] for m in MONTHS)


def add_ga(rows, key, split=False):
    for x in rows:
        p = resolve(norm(x["pagePath"]))
        if p is None:
            lost[("ga " + key, norm(x["pagePath"]))] += x["screenPageViews"]
            continue
        v = int(x["screenPageViews"])
        pages[p][key] += v
        if split and x.get("country") == "Canada":
            pages[p]["v28_ca"] += v
        if split and x.get("country") == "United States":
            pages[p]["v28_us"] += v


add_ga(J("ga_pages48.json"), "v_h48")
add_ga(J("ga_pages7.json"), "v_d7")
add_ga(J("ga_pages28.json"), "v_last28", split=True)
add_ga(J("ga_pages_summer.json"), "v_summer")
add_ga(J("ga_pages_year.json"), "v_year_2026")

lk = collections.Counter()
for (k, p), c in lost.items():
    lk[k] += c
print("not matched to a live page:", dict(lk))
print("top unmatched:", collections.Counter({f"{k} {p}": c for (k, p), c in lost.items()}).most_common(8))

# ---------- new pages ----------
ins = J("inspect.json")
CHECKED = "2026-11-11T03:35:00Z"
days = {}
for f in sorted(glob.glob(os.path.join(HERE, "gsc_day_*.json"))):
    d = os.path.basename(f)[8:18]
    for x in json.load(open(f, encoding="utf-8")):
        p = resolve(norm(x["keys"][0]))
        if p:
            days.setdefault(p, {}).setdefault(d, [0, 0])
            days[p][d][0] += int(x["clicks"])
            days[p][d][1] += int(x["impressions"])
since_views = collections.Counter()
for x in J("ga_pages_since.json"):
    p = resolve(norm(x["pagePath"]))
    if p:
        since_views[p] += int(x["screenPageViews"])


def et_label(iso):
    if not iso:
        return ""
    t = dt.datetime.fromisoformat(iso.replace("Z", "+00:00")) - dt.timedelta(hours=5)
    h = t.hour % 12 or 12
    ampm = "am" if t.hour < 12 else "pm"
    return f"{t.strftime('%b')} {t.day}, {h}:{t.minute:02d} {ampm}"


newrows = []
for r in ins:
    p = r["path"]
    assert p in pages, p
    row = pages[p]
    cov = r.get("coverage") or ""
    indexed = "indexed" in cov.lower() and "not indexed" not in cov.lower()
    ds = days.get(p, {})
    if r["kind"] == "new":
        row["released"] = r["released"]
        shown = sum(v[1] for v in ds.values())
        clicks = sum(v[0] for v in ds.values())
        first = min((d for d, v in ds.items() if v[1] > 0), default="")
        views = since_views[p]
    else:  # rebuilt Nov 10: count from Nov 10 only
        shown = sum(v[1] for d, v in ds.items() if d >= "2026-11-10")
        clicks = sum(v[0] for d, v in ds.items() if d >= "2026-11-10")
        first = ""
        views = 0
    status = "waiting" if not indexed else ("shown" if shown > 0 else "indexed")
    label = {"waiting": "Not in Google yet", "indexed": "In Google, not shown in a search yet", "shown": "Shown in Google searches"}[status]
    if r["kind"] == "rebuilt":
        label = "Rebuilt; Google re-read it"
    newrows.append({"path": p, "title": row["title"], "group": row["group"], "family": row["family"], "released": r["released"],
                    "kind": r["kind"], "status": status, "status_label": label, "coverage": cov,
                    "last_crawl": ((r.get("lastCrawl") or "")[:19] + "Z") if r.get("lastCrawl") else "",
                    "last_crawl_label": et_label(r.get("lastCrawl")), "first_shown": first, "shown_since": shown,
                    "clicks_since": clicks, "views_since": views, "checked_at": CHECKED})
newrows = (sorted([x for x in newrows if x["kind"] == "new"], key=lambda x: (x["released"], x["shown_since"]), reverse=True)
           + [x for x in newrows if x["kind"] != "new"])
c = collections.Counter((x["kind"], x["status"]) for x in newrows)
print("new pages:", c)
for d in sorted({x["released"] for x in newrows if x["kind"] == "new"}):
    rs = [x for x in newrows if x["released"] == d and x["kind"] == "new"]
    print(d, len(rs), "indexed", sum(x["status"] != "waiting" for x in rs), "shown", sum(x["status"] == "shown" for x in rs),
          "impr", sum(x["shown_since"] for x in rs), "clicks", sum(x["clicks_since"] for x in rs), "views", sum(x["views_since"] for x in rs))
for x in newrows:
    if x["released"] == "2026-11-10":
        print("  ", x["path"], x["kind"], x["status"], x["shown_since"], x["clicks_since"], x["first_shown"], x["last_crawl_label"])

# ---------- site windows ----------
hw, hp = J("gsc_hourly.json"), J("gsc_hourly_prev.json")
t48, tprev = J("ga_tot48.json")[0], J("ga_prev48.json")[0]
sw = [
    {"window": "h48", "label": "Last 48 hours", "start": "2026-11-08T15:00-05:00", "end": "2026-11-10T15:00-05:00",
     "google_visits": int(sum(x["clicks"] for x in hw)), "google_shown": int(sum(x["impressions"] for x in hw)),
     "views": int(t48["screenPageViews"]), "sessions": int(t48["sessions"]), "users": int(t48["totalUsers"])},
    {"window": "prev48", "label": "The 48 hours before", "start": "2026-11-06T15:00-05:00", "end": "2026-11-08T15:00-05:00",
     "google_visits": int(sum(x["clicks"] for x in hp)), "google_shown": int(sum(x["impressions"] for x in hp)),
     "views": int(tprev["screenPageViews"]), "sessions": int(tprev["sessions"]), "users": int(tprev["totalUsers"])},
]
print("windows:", sw)

order = ["path", "title", "group", "family", "in_google", "released", "h48", "d7", "last28", "summer", "year_2026",
         "h48_shown", "d7_shown", "last28_shown", "v_h48", "v_d7", "v_last28", "v_summer", "v_year_2026", "v28_ca", "v28_us"] + MONTHS
out = [{k: r[k] for k in order} for r in sorted(pages.values(), key=lambda r: (-r["v_h48"], -r["h48"], -r["last28"], r["path"]))]
OUTD = os.path.join(HERE, "upload")
os.makedirs(OUTD, exist_ok=True)
json.dump(out, open(os.path.join(OUTD, "buzzskito-pages.json"), "w", encoding="utf-8"), ensure_ascii=False, separators=(",", ":"))
json.dump(newrows, open(os.path.join(OUTD, "buzzskito-new-pages.json"), "w", encoding="utf-8"), ensure_ascii=False, separators=(",", ":"))
json.dump(sw, open(os.path.join(OUTD, "buzzskito-48-hours.json"), "w", encoding="utf-8"), ensure_ascii=False, separators=(",", ":"))
for f in os.listdir(OUTD):
    print(f, os.path.getsize(os.path.join(OUTD, f)))
T = {k: sum(r[k] for r in out) for k in ["h48", "d7", "last28", "summer", "year_2026", "v_h48", "v_d7", "v_last28", "v_summer", "v_year_2026"]}
print("totals:", T)
print("top 48h views:", [(r["path"], r["v_h48"], r["h48"]) for r in out[:12]])
print("zero 48h google:", sum(r["h48"] == 0 for r in out), "zero 48h views:", sum(r["v_h48"] == 0 for r in out))
G = collections.defaultdict(lambda: [0, 0, 0])
for r in out:
    G[r["group"]][0] += r["h48"]
    G[r["group"]][1] += r["v_h48"]
    G[r["group"]][2] += r["last28"]
print("groups by 48h google:", sorted(G.items(), key=lambda x: -x[1][0])[:6])
print("groups by 48h views:", sorted(G.items(), key=lambda x: -x[1][1])[:6])
