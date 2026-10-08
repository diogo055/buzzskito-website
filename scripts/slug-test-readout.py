"""Early read of the -canada slug test (started 2026-09-03).

Treatment: 12 pages renamed from <slug>-canada to <slug> (301 from the old URL).
Control:   12 matched pages left at <slug>-canada.

Pulls use the single `page` dimension (trustworthy for totals). A country filter on a page
pull drops low-volume rows, so the per-country figures are for comparing the two arms with
each other, never as absolute numbers.
"""
import json, os, sys
from google.oauth2.credentials import Credentials
from google.auth.transport.requests import Request
from googleapiclient.discovery import build

ROOT = r'C:\Users\buzzs\buzzskito-website'
OUT = os.path.join(ROOT, 'data', 'gsc')
creds = Credentials.from_authorized_user_file(r'C:\Users\buzzs\Documents\mcp-gsc\token.json')
if creds.expired and creds.refresh_token:
    creds.refresh(Request())
svc = build('searchconsole', 'v1', credentials=creds)
SITE = 'sc-domain:buzzskito.ca'

exp = json.load(open(os.path.join(ROOT, 'data', 'exp-slug-test.json'), encoding='utf-8'))
PRE = ('2026-08-06', '2026-09-02')    # 28 days before the rename
POST = ('2026-09-07', '2026-10-04')   # 28 days, skipping the first 4 days of the switch


def pull(window, country=None, dims=('page',)):
    body = {'startDate': window[0], 'endDate': window[1], 'dimensions': list(dims), 'rowLimit': 25000, 'dataState': 'all'}
    if country:
        body['dimensionFilterGroups'] = [{'filters': [{'dimension': 'country', 'operator': 'equals', 'expression': country}]}]
    return svc.searchanalytics().query(siteUrl=SITE, body=body).execute().get('rows', [])


def by_slug(rows):
    out = {}
    for r in rows:
        u = r['keys'][0].split('?')[0].split('#')[0].rstrip('/')
        if '/blog/' not in u:
            continue
        s = u.rsplit('/', 1)[-1]
        d = out.setdefault(s, {'clicks': 0, 'impr': 0, 'posw': 0.0})
        d['clicks'] += r['clicks']; d['impr'] += r['impressions']; d['posw'] += r['position'] * r['impressions']
    return out


data = {}
for label, window in (('pre', PRE), ('post', POST)):
    for c in (None, 'can', 'usa'):
        data[(label, c)] = by_slug(pull(window, c))

site = {}
for label, window in (('pre', PRE), ('post', POST)):
    rows = pull(window, None, ('country',))
    tot = {'all': [0, 0]}
    for r in rows:
        tot['all'][0] += r['clicks']; tot['all'][1] += r['impressions']
        if r['keys'][0] in ('can', 'usa'):
            tot[r['keys'][0]] = [r['clicks'], r['impressions']]
    site[label] = tot


def get(label, c, slugs):
    d = data[(label, c)]
    clicks = sum(d.get(s, {}).get('clicks', 0) for s in slugs)
    impr = sum(d.get(s, {}).get('impr', 0) for s in slugs)
    posw = sum(d.get(s, {}).get('posw', 0) for s in slugs)
    return clicks, impr, (posw / impr if impr else 0)


def arm_rows(arm, treated):
    rows = []
    for p in exp[arm]:
        old, new = p['slug'], p['newSlug']
        urls = [old, new] if treated else [old]
        row = {'page': old, 'renamed_to': new if treated else ''}
        for c, name in ((None, 'all'), ('can', 'ca'), ('usa', 'us')):
            pc, pi, pp = get('pre', c, urls)
            qc, qi, qp = get('post', c, urls)
            row[name] = {'pre_clicks': pc, 'post_clicks': qc, 'pre_impr': pi, 'post_impr': qi, 'pre_pos': round(pp, 1), 'post_pos': round(qp, 1)}
        if treated:   # how much of the post traffic still lands on the old address
            row['post_old_url_impr'] = get('post', None, [old])[1]
            row['post_new_url_impr'] = get('post', None, [new])[1]
        rows.append(row)
    return rows


res = {'pre_window': PRE, 'post_window': POST, 'site': site, 'treatment': arm_rows('treatment', True), 'control': arm_rows('control', False)}
json.dump(res, open(os.path.join(OUT, 'slug_test.json'), 'w'), indent=1)


def tot(rows, name, key):
    return sum(r[name][key] for r in rows)


def ratio(a, b):
    return (a / b) if b else float('nan')


print(f'windows: pre {PRE[0]}..{PRE[1]}  post {POST[0]}..{POST[1]}')
for name, lab in (('all', 'ALL countries'), ('ca', 'Canada'), ('us', 'United States')):
    print(f'\n=== {lab} ===')
    print(f'{"arm":10s} {"clicks pre":>10s} {"post":>6s} {"x":>6s}   {"impr pre":>9s} {"post":>8s} {"x":>6s}')
    for arm in ('treatment', 'control'):
        r = res[arm]
        cp, cq, ip, iq = tot(r, name, 'pre_clicks'), tot(r, name, 'post_clicks'), tot(r, name, 'pre_impr'), tot(r, name, 'post_impr')
        print(f'{arm:10s} {cp:10d} {cq:6d} {ratio(cq, cp):6.2f}   {ip:9d} {iq:8d} {ratio(iq, ip):6.2f}')
s = site
print('\n=== whole site, for seasonality ===')
for k in ('all', 'can', 'usa'):
    a, b = s['pre'].get(k, [0, 0]), s['post'].get(k, [0, 0])
    print(f'{k:4s} clicks {a[0]:6d} -> {b[0]:6d} (x{ratio(b[0], a[0]):.2f})   impr {a[1]:8d} -> {b[1]:8d} (x{ratio(b[1], a[1]):.2f})')

for arm in ('treatment', 'control'):
    print(f'\n--- {arm}: per page (ALL clicks pre->post | CA clicks | US impr | position) ---')
    for r in res[arm]:
        a, c, u = r['all'], r['ca'], r['us']
        extra = f"  [old url still {r['post_old_url_impr']} impr, new {r['post_new_url_impr']}]" if 'post_old_url_impr' in r else ''
        print(f"{r['page'][:44]:44s} {a['pre_clicks']:4d}->{a['post_clicks']:4d} | CA {c['pre_clicks']:4d}->{c['post_clicks']:4d} | US impr {u['pre_impr']:6d}->{u['post_impr']:6d} | pos {a['pre_pos']:5.1f}->{a['post_pos']:5.1f}{extra}")
