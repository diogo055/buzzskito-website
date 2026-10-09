// Writes the owner-facing reports for the Oct 2026 North American guides from what is on disk.
//
//   node scripts/us-pages-report.mjs [<workflow journal.jsonl> ...]
//
// Outputs:
//   reports/us_pages_final_report.md       what was built, merged and broadened, and what to expect
//   reports/us_pages_product_findings.md   product/registration issues the hub audits surfaced
//                                          (only when journals are passed; report-only, nothing removed)
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'fs'
import { join } from 'path'

const ROOT = process.cwd()
const D = join(ROOT, 'data', 'us-pages')
const plan = JSON.parse(readFileSync(join(D, 'plan.json'), 'utf8'))
const kw = JSON.parse(readFileSync(join(D, 'keywords.json'), 'utf8'))
const tp = JSON.parse(readFileSync(join(D, 'ahrefs-us-2026-10-07.json'), 'utf8')).keywords
const manifest = JSON.parse(readFileSync(join(ROOT, 'build-manifest.json'), 'utf8'))
const byRank = Object.fromEntries(kw.map((k) => [Number(k.rank), k]))
const checkedDir = join(D, 'checked')
const ledger = existsSync(checkedDir) ? readdirSync(checkedDir).map((f) => JSON.parse(readFileSync(join(checkedDir, f), 'utf8'))) : []
const sum = (list, key) => list.reduce((n, x) => n + (x[key] || 0), 0)
const guidesLedger = ledger.filter((l) => l.kind === 'guide'), existingLedger = ledger.filter((l) => l.kind === 'existing')

const built = manifest.pages.filter((p) => p.status === 'built' && p.action === 'new')
const mergedNew = manifest.pages.filter((p) => p.status === 'built' && p.action === 'merged')
const words = built.reduce((n, p) => n + (p.wordCount || 0), 0)
const tpOf = (keyword) => (tp[keyword] ? tp[keyword].tp : 0)
const totalTP = kw.reduce((n, k) => n + tpOf(k.keyword), 0)
const csvClicks = kw.reduce((n, k) => n + Number(k.proj_clicks_mo), 0)
const csvRev = kw.reduce((n, k) => n + Number(k.proj_rev_mo_cad), 0)
const fmt = (n) => Number(n).toLocaleString('en-US')

const lines = []
lines.push('# North American pest guides: what was built', '')
lines.push(`Generated ${new Date().toISOString().slice(0, 10)} from the files in the repository.`, '')
lines.push('## The 100 keywords', '')
lines.push('| Outcome | Count |', '|---|---|')
lines.push(`| New guides under /blog | ${built.filter((p) => p.kind === 'spoke').length} |`)
lines.push(`| New hub pages under /learn | ${built.filter((p) => p.kind === 'pillar').length} |`)
lines.push(`| Existing guides broadened for US readers | ${plan.broaden.length} |`)
lines.push(`| Keywords answered by an existing page (no new page) | ${plan.merged.length} |`)
lines.push(`| Keywords answered by another new page with the same intent | ${mergedNew.length} |`)
lines.push('', `Also added: two product hubs (/pest-product-guides/ant-control and /cockroach-control). New pages total ${fmt(words)} words of body text.`, '')

lines.push('## Why 76 new pages and not 100', '')
lines.push('Two keywords that mean the same thing need one page. Two pages would compete with each other in Google and both would do worse.', '')
lines.push('| Keyword | Answered by | Why |', '|---|---|---|')
for (const m of plan.merged) lines.push(`| ${byRank[m.rank].keyword} | ${m.into} | ${m.why} |`)
for (const p of mergedNew) lines.push(`| ${p.keyword} | ${p.url} | Same search intent as that page's main keyword. |`)
lines.push('')

lines.push('## Quality control', '')
lines.push(`- Every new page was written from government, university and peer-reviewed sources, then checked claim by claim by a second, independent pass that re-opened each source.`)
lines.push(`- New pages: ${fmt(sum(guidesLedger, 'claimsChecked'))} claims checked, ${fmt(sum(guidesLedger, 'claimsCorrected'))} corrected, ${fmt(sum(guidesLedger, 'claimsRemovedOrSoftened'))} softened or removed, across ${guidesLedger.length} pages.`)
lines.push(`- Edited existing pages: ${fmt(sum(existingLedger, 'claimsChecked'))} claims checked, ${fmt(sum(existingLedger, 'claimsCorrected'))} corrected, ${fmt(sum(existingLedger, 'claimsRemovedOrSoftened'))} softened or removed, across ${existingLedger.length} pages.`)
lines.push('- Every edit to an existing page was compared against a copy taken before the work started: no original line deleted, no product link added, moved or changed.')
lines.push('- No new page carries an affiliate or retailer link. The build now fails if one is added (`npm run check:guides`).')
lines.push('- **No person has read these pages.** They say so: each one states it was drafted with AI assistance and fact-checked by a second AI pass, and is published under the company name. When you have read a page and approve it, it can show "Reviewed by" with your name and the date.', '')

lines.push('## What to expect, honestly', '')
lines.push(`The spreadsheet projected ${fmt(csvClicks)} clicks and $${fmt(Math.round(csvRev))} a month. That is not a forecast. It assumes a top-three ranking for every keyword.`, '')
lines.push('Three measured facts set the real range:', '')
lines.push(`- **Ahrefs' own estimate for the page ranked number one today** adds up to ${fmt(totalTP)} visits a month across all 100 keywords. That is the ceiling if every page ranked first. For some head terms it is tiny: "how to get rid of bed bugs" is listed at 49,000 searches, and the current number-one page gets about ${fmt(tpOf('how to get rid of bed bugs'))} visits a month.`)
lines.push('- **"Difficulty 0" does not mean easy.** That score counts links to the ranking pages. The pages that rank are from national pest companies, CDC, EPA and universities.')
lines.push('- **This site\'s own record:** the 215 pages built in July earn a median of $0.16 a page a month, and 40% earn nothing. The whole site had about 1,900 US clicks in the last 28 days.')
lines.push('', 'A realistic first quarter is a few hundred to a few thousand extra visits a month, concentrated in a handful of pages. Check Search Console in six to eight weeks and judge by impressions first.', '')
lines.push('Highest traffic potential among the new pages (Ahrefs, US, monthly visits to the current top page):', '')
lines.push('| Page | Traffic potential |', '|---|---|')
const ranked = plan.pages.map((p) => ({ path: p.path, tp: p.ranks.reduce((n, r) => n + tpOf(byRank[r].keyword), 0) })).sort((a, b) => b.tp - a.tp).slice(0, 12)
for (const r of ranked) lines.push(`| ${r.path} | ${fmt(r.tp)} |`)
lines.push('')

lines.push('## Decisions made for you (each is easy to reverse)', '')
lines.push('- **Canadian twins.** Seven new guides answer the same question as an existing Canadian guide. They are set up as US and Canadian editions of each other, so Google shows each country its own page and your Canadian product pages keep their Canadian visitors. The list is `REGIONAL_PAIRS` in `lib/guides.ts`.')
lines.push('- **Titles.** Three broadened guides with little traffic were retitled "(US & Canada)". The five with real Canadian traffic kept their titles, because the country word in the title is what earns their clicks.')
lines.push('- **Slug test.** Read early at your request: no reliable difference, no harm. The 12 renames stay; no more renames. See `data/exp-slug-test-readout-2026-10-07.md`.')
lines.push('- **Phone quote bar** is hidden on the guides about pests you do not treat, as it already is on your other such pages.')
lines.push('- **Photos.** None were added. `reports/us_pages_media_needed.md` lists the photos each page would benefit from.', '')

lines.push('## How to check any of this', '')
lines.push('```bash', 'node scripts/validate-guide.mjs --all --complete --report', '```', '')
lines.push('The full list of keyword, page, action, word count and inbound links is in `build-manifest.json`. The order to request indexing in Search Console is in `new-urls.txt`.', '')
writeFileSync(join(ROOT, 'reports', 'us_pages_final_report.md'), lines.join('\n'))
console.log(`final report: ${built.length} new pages, ${fmt(words)} words, ${fmt(sum(ledger, 'claimsChecked'))} claims checked`)

// ── product findings from the hub and broaden agents ────────────────────────────
const journals = process.argv.slice(2).filter((f) => existsSync(f))
if (journals.length) {
  const found = []
  for (const j of journals) {
    for (const line of readFileSync(j, 'utf8').split('\n')) {
      if (!line.includes('productFindings')) continue
      try { const r = JSON.parse(line).result; if (r && Array.isArray(r.productFindings) && r.productFindings.length) found.push({ id: r.id, findings: r.productFindings }) } catch { /* skip */ }
    }
  }
  const out = ['# Product and registration findings from the audit', '',
    'While refreshing the product hubs and broadening guides, the editors checked the products those pages name against the manufacturer or the regulator. **Nothing was removed or changed on the strength of these findings**: taking a product or a buy link off a page is your decision. Items marked ACTION are the ones most worth your time.', '']
  for (const f of found) {
    out.push(`## ${f.id}`, '')
    for (const x of f.findings) {
      const action = /cancel|prohibit|not registered|no longer|discontinu|illegal|still recommend/i.test(`${x.status} ${x.evidence || ''}`) ? '**ACTION** ' : ''
      out.push(`- ${action}**${x.product}**: ${x.status}${x.evidence ? `\n  - Evidence: ${x.evidence}` : ''}`)
    }
    out.push('')
  }
  writeFileSync(join(ROOT, 'reports', 'us_pages_product_findings.md'), out.join('\n'))
  console.log(`product findings: ${found.reduce((n, f) => n + f.findings.length, 0)} items from ${found.length} pages`)
}
