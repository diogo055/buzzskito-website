"""Phase 1 input: 90-day GSC by page, single dimension (trustworthy), plus the
country split for the SITE (also trustworthy). Per-page country is NOT pulled —
it drops 62.6% of Canadian clicks (see memory) and would make every page look foreign."""
import json, datetime, os
from google.oauth2.credentials import Credentials
from google.auth.transport.requests import Request
from googleapiclient.discovery import build

creds = Credentials.from_authorized_user_file(r'C:\Users\buzzs\Documents\mcp-gsc\token.json')
if creds.expired and creds.refresh_token:
    creds.refresh(Request())
svc = build('searchconsole', 'v1', credentials=creds)
SITE = 'sc-domain:buzzskito.ca'
end = datetime.date.today() - datetime.timedelta(days=3)
start = end - datetime.timedelta(days=89)


def q(dims, limit=25000, filt=None):
    body = {'startDate': str(start), 'endDate': str(end), 'dimensions': dims, 'rowLimit': limit, 'dataState': 'all'}
    if filt:
        body['dimensionFilterGroups'] = [{'filters': filt}]
    return svc.searchanalytics().query(siteUrl=SITE, body=body).execute().get('rows', [])


pages = [{'page': r['keys'][0], 'clicks': r['clicks'], 'impressions': r['impressions'], 'ctr': r['ctr'], 'position': r['position']}
         for r in q(['page'])]
country = {r['keys'][0]: r['clicks'] for r in q(['country'], limit=250)}
tot = sum(country.values()) or 1
ca_share = country.get('can', 0) / tot
out = {'window': [str(start), str(end)], 'pages': pages, 'ca_share': ca_share,
       'total_clicks': sum(p['clicks'] for p in pages), 'country_top': sorted(country.items(), key=lambda x: -x[1])[:8]}
path = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'data', 'gsc', 'gsc90.json'); os.makedirs(os.path.dirname(path), exist_ok=True)
json.dump(out, open(path, 'w'))
print(f'window {start} -> {end}: {len(pages)} pages, {out["total_clicks"]:,.0f} clicks, Canada share {ca_share*100:.1f}%')
