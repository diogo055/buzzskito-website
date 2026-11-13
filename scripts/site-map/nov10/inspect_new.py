"""URL Inspection (read-only) for every guide released Oct 28 - Nov 10, 2026, plus the two Nov 10 rebuilds."""
import json, glob, os, time
from concurrent.futures import ThreadPoolExecutor
from google.oauth2.credentials import Credentials
from google.auth.transport.requests import Request, AuthorizedSession

OUT = os.path.dirname(os.path.abspath(__file__))
B = r"C:\Users\buzzs\buzzskito-build"
c = Credentials.from_authorized_user_file(r"C:\Users\buzzs\Documents\mcp-gsc\token.json")
if not c.valid:
    c.refresh(Request())
s = AuthorizedSession(c)
arts = json.load(open(os.path.join(B, "lib", "article-index.json"), encoding="utf-8"))["articles"]
bypath = {a["path"]: a for a in arts}
new = []
for f in glob.glob(os.path.join(B, "data", "us-pages", "checked", "*.json")):
    j = json.load(open(f, encoding="utf-8"))
    rel = j.get("released") or {}
    on = rel.get("on") if isinstance(rel, dict) else None
    if on and on >= "2026-10-28":
        slug = os.path.basename(f)[:-5]
        cand = [p for p in bypath if p.rsplit("/", 1)[-1] == slug]
        assert len(cand) == 1, (slug, cand)
        new.append({"path": cand[0], "released": on, "kind": "new"})
for p in ("/blog/german-cockroaches", "/blog/house-centipedes"):
    new.append({"path": p, "released": "2026-11-10", "kind": "rebuilt"})


def inspect(row):
    for attempt in range(3):
        r = s.post("https://searchconsole.googleapis.com/v1/urlInspection/index:inspect",
                   json={"inspectionUrl": "https://buzzskito.ca" + row["path"], "siteUrl": "sc-domain:buzzskito.ca"}, timeout=90)
        if r.status_code == 200:
            ir = r.json().get("inspectionResult", {}).get("indexStatusResult", {})
            return dict(row, verdict=ir.get("verdict"), coverage=ir.get("coverageState"), indexing=ir.get("indexingState"),
                        lastCrawl=ir.get("lastCrawlTime"), googleCanonical=ir.get("googleCanonical"),
                        userCanonical=ir.get("userCanonical"), pageFetch=ir.get("pageFetchState"))
        time.sleep(3 + attempt * 5)
    return dict(row, error=f"{r.status_code} {r.text[:200]}")


with ThreadPoolExecutor(4) as ex:
    res = list(ex.map(inspect, new))
json.dump(res, open(os.path.join(OUT, "inspect.json"), "w", encoding="utf-8"), indent=1)
from collections import Counter
print(len(res), "inspected")
print(Counter((r["released"], r.get("coverage") or r.get("error")) for r in res))
for r in res:
    gc, uc = r.get("googleCanonical"), r.get("userCanonical")
    if gc and uc and gc != uc:
        print("CANONICAL MISMATCH", r["path"], gc, uc)
