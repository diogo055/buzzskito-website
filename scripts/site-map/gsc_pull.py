"""Site map dashboard data (read-only): every live page, its topic group and family, and its Google web clicks
from Search Console per month of 2026 plus the last 28 days. Feeds https://claude.ai/artifact/BjoM5C1kcLqJaAhsbSskwA
(Dashboard type; the page is files/index.html in its store, the data the attached file buzzskito-pages.json).

  python scripts/site-map/gsc_pull.py   <out dir>   # monthly page clicks -> <out>/gsc_raw.json
  python scripts/site-map/assemble.py   <out dir>   # -> <out>/buzzskito-pages.json (run after a fresh npm run build)

Run from the repo root. To refresh the dashboard: upload the new JSON to the artifact as an asset, update
datasets/pages (url, updated, edit), and if the month changed, extend MONTHS/DAYS in the page and the day
counts inside its calcs. Set LAST below to the last full day in Search Console. Never write output into the repo.
"""
import calendar, json, sys
from google.auth.transport.requests import AuthorizedSession, Request
from google.oauth2.credentials import Credentials

sys.stdout.reconfigure(encoding="utf-8")
creds = Credentials.from_authorized_user_file(r"C:\Users\buzzs\Documents\mcp-gsc\token.json")
if not creds.valid:
    creds.refresh(Request())
s = AuthorizedSession(creds)
URL = "https://searchconsole.googleapis.com/webmasters/v3/sites/sc-domain%3Abuzzskito.ca/searchAnalytics/query"


def q(body):
    body = {"type": "web", "dataState": "all", "rowLimit": 25000, **body}
    out, start = [], 0
    while True:
        r = s.post(URL, json={**body, "startRow": start}, timeout=180)
        if r.status_code != 200:
            print("ERROR", r.status_code, r.text[:300]); sys.exit(1)
        rows = r.json().get("rows", [])
        out += rows
        if len(rows) < body["rowLimit"]:
            return out
        start += len(rows)


days = q({"startDate": "2025-07-01", "endDate": "2026-11-05", "dimensions": ["date"]})
withc = [d for d in days if d["clicks"] > 0]
print("days with data:", len(days), "first:", days[0]["keys"][0], "first with clicks:", withc[0]["keys"][0], "last:", days[-1]["keys"][0])
print("last 6 days:", [(d["keys"][0], d["clicks"]) for d in days[-6:]])
first_month = withc[0]["keys"][0][:7]
last_day = days[-1]["keys"][0]
res = {"daily": {d["keys"][0]: [d["clicks"], d["impressions"]] for d in days}, "months": {}, "last_day": last_day}
y, m = map(int, first_month.split("-"))
while (y, m) <= (2026, 11):
    a = f"{y}-{m:02d}-01"
    b = f"{y}-{m:02d}-{calendar.monthrange(y, m)[1]:02d}"
    if b > last_day:
        b = last_day
    rows = q({"startDate": a, "endDate": b, "dimensions": ["page"]})
    res["months"][f"{y}-{m:02d}"] = {"start": a, "end": b, "rows": {r["keys"][0]: [r["clicks"], r["impressions"]] for r in rows}}
    print(f"{y}-{m:02d}: {len(rows)} pages, {sum(r['clicks'] for r in rows):.0f} clicks ({a} to {b})")
    m += 1
    if m == 13:
        y, m = y + 1, 1
import os
json.dump(res, open(os.path.join(sys.argv[1], "gsc_raw.json"), "w", encoding="utf-8"))
