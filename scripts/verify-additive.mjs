// Mechanical check that agent edits were ADDITIVE ONLY.
//
// Agents that edit pages self-report "byte-identical apart from the insert" while
// adding 40 lines, or "moved nothing" while moving a CTA. Never trust the report —
// diff the source against a snapshot taken BEFORE the run.
//
//   node scripts/verify-additive.mjs <snapshot-dir> [--frozen <file>] [--json <out>]
//
// Snapshot layout: <snapshot-dir>/<route with / replaced by __>.tsx, e.g.
//   blog__what-ticks-look-like-ontario.tsx  ->  app/blog/what-ticks-look-like-ontario/page.tsx
//
// Per changed page it reports:
//   - deleted lines: any line of the snapshot that is not present, in order, in the
//     current file (CRLF/LF normalised). Zero is the target. Modified import lines
//     show up here too — read them, don't wave them through.
//   - affiliate elements before/after and the first-element line, so the CTA moved UP
//   - service-CTA order for mosquito/tick pages: service CTA must precede the first
//     affiliate element (lead-CTA rule — $1,222 customer vs $0.12 click)
//   - frozen-slug violations (the slug experiment, data/exp-slug-test.json)
import { readFileSync, readdirSync, existsSync, writeFileSync } from 'fs'
import { join } from 'path'

const args = process.argv.slice(2)
const snapDir = args[0]
if (!snapDir || !existsSync(snapDir)) { console.error('usage: node scripts/verify-additive.mjs <snapshot-dir> [--frozen file] [--json out]'); process.exit(1) }
const opt = k => { const i = args.indexOf(k); return i > 0 ? args[i + 1] : null }
const frozenFile = opt('--frozen'), jsonOut = opt('--json')
const frozen = new Set(frozenFile && existsSync(frozenFile) ? readFileSync(frozenFile, 'utf8').split(/\r?\n/).map(s => s.trim()).filter(Boolean) : [])

const AFF = /<(BuyLink|AwardRow|AwardCard|TopPick|StickyBuyBar|AmazonLink)\b/
const SERVICE = /<(BlogPostCTA|CTASection|InlineYardRiskCTA|AdjacentPestCTA)\b|href="\/quote|href="\/free-yard-assessment/
const MOSQ_TICK = /mosquito|tick|lyme/i
const norm = s => s.replace(/\r\n/g, '\n').replace(/\r/g, '\n')

// is `before` an in-order subsequence of `after`? returns the lines of `before` that are not.
function missingInOrder(before, after) {
  const out = []
  let j = 0
  for (const line of before) {
    let k = j
    while (k < after.length && after[k] !== line) k++
    if (k === after.length) out.push(line)   // not found after the last match — deleted or edited
    else j = k + 1
  }
  return out
}

const results = []
for (const f of readdirSync(snapDir).filter(f => f.endsWith('.tsx'))) {
  const route = f.slice(0, -4).replace(/__/g, '/')
  const target = join('app', route, 'page.tsx')
  if (!existsSync(target)) { results.push({ route, status: 'MISSING_TARGET' }); continue }
  const before = norm(readFileSync(join(snapDir, f), 'utf8')), after = norm(readFileSync(target, 'utf8'))
  if (before === after) continue
  const bl = before.split('\n'), al = after.split('\n')
  const deleted = missingInOrder(bl, al).filter(l => l.trim() !== '')
  const affB = bl.filter(l => AFF.test(l)).length, affA = al.filter(l => AFF.test(l)).length
  const firstAffB = bl.findIndex(l => AFF.test(l)) + 1, firstAffA = al.findIndex(l => AFF.test(l)) + 1
  const firstSvcA = al.findIndex(l => SERVICE.test(l)) + 1
  const slug = route.split('/').pop()
  const mosqTick = MOSQ_TICK.test(slug)
  const orderOk = !mosqTick || firstAffA === 0 || (firstSvcA > 0 && firstSvcA < firstAffA)
  results.push({
    route, status: 'CHANGED', lines_before: bl.length, lines_after: al.length, added: al.length - bl.length,
    deleted_lines: deleted.length, deleted_sample: deleted.slice(0, 5),
    aff_before: affB, aff_after: affA, first_aff_before: firstAffB, first_aff_after: firstAffA,
    first_service_after: firstSvcA, mosquito_tick: mosqTick, order_ok: orderOk, frozen: frozen.has(slug),
  })
}

const changed = results.filter(r => r.status === 'CHANGED')
const bad = changed.filter(r => r.deleted_lines || !r.order_ok || r.frozen)
console.log(`changed ${changed.length} · with deleted lines ${changed.filter(r => r.deleted_lines).length} · order violations ${changed.filter(r => !r.order_ok).length} · frozen touched ${changed.filter(r => r.frozen).length} · missing targets ${results.filter(r => r.status === 'MISSING_TARGET').length}\n`)
console.log('route'.padEnd(62) + '+lines  del  aff b→a   1st aff b→a   1st svc  order')
for (const r of changed) {
  const flag = r.deleted_lines ? ' DEL' : ''
  console.log(r.route.padEnd(62) + String(r.added).padStart(6) + String(r.deleted_lines).padStart(5) + `  ${r.aff_before}→${r.aff_after}`.padEnd(10) + `  ${r.first_aff_before}→${r.first_aff_after}`.padEnd(14) + String(r.first_service_after).padStart(7) + '  ' + (r.mosquito_tick ? (r.order_ok ? 'ok' : 'AFF FIRST ✗') : '-') + (r.frozen ? '  FROZEN ✗' : '') + flag)
}
for (const r of changed.filter(r => r.deleted_lines)) {
  console.log(`\n-- ${r.route}: ${r.deleted_lines} snapshot line(s) not found in order:`)
  r.deleted_sample.forEach(l => console.log('   < ' + l.trim().slice(0, 140)))
}
if (jsonOut) writeFileSync(jsonOut, JSON.stringify(results, null, 1))
process.exit(bad.length ? 2 : 0)
