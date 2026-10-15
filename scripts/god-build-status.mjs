// Where the scheduled build stands, week by week: how many pages are written (a file in
// content/guides-scheduled/ or already live), fact-checked (a check record for the file's exact
// contents) and still to write.
//
//   node scripts/god-build-status.mjs            summary per release week
//   node scripts/god-build-status.mjs --todo     also list every page not yet written / checked
import { readFileSync, existsSync } from 'fs'
import { join } from 'path'
import { createHash } from 'crypto'

const ROOT = process.cwd()
const plan = JSON.parse(readFileSync(join(ROOT, 'data', 'god-build', 'plan.src.json'), 'utf8')).pages
const TODO = process.argv.includes('--todo')
const sha = (s) => createHash('sha256').update(s).digest('hex')

const rows = plan.map((p) => {
  const live = join(ROOT, 'content', 'guides', `${p.slug}.json`)
  const waiting = join(ROOT, 'content', 'guides-scheduled', `${p.slug}.json`)
  if (existsSync(live)) return { p, state: 'live' }
  if (!existsSync(waiting)) return { p, state: 'todo' }
  const recFile = join(ROOT, 'data', 'us-pages', 'checked', `${p.slug}.json`)
  if (!existsSync(recFile)) return { p, state: 'written' }
  const rec = JSON.parse(readFileSync(recFile, 'utf8'))
  const ok = rec.sha === sha(readFileSync(waiting, 'utf8')) && rec.verdict !== 'needs-rewrite'
  return { p, state: ok ? 'checked' : 'written' }
})

const weeks = {}
for (const r of rows) (weeks[r.p.releaseOn] ||= []).push(r)
const count = (list, s) => list.filter((r) => r.state === s).length
console.log('release      pages  live  checked  written  to write')
for (const [d, list] of Object.entries(weeks).sort()) {
  console.log(`${d}  ${String(list.length).padStart(5)}  ${String(count(list, 'live')).padStart(4)}  ${String(count(list, 'checked')).padStart(7)}  ${String(count(list, 'written')).padStart(7)}  ${String(count(list, 'todo')).padStart(8)}`)
}
const all = (s) => count(rows, s)
console.log(`total        ${String(rows.length).padStart(5)}  ${String(all('live')).padStart(4)}  ${String(all('checked')).padStart(7)}  ${String(all('written')).padStart(7)}  ${String(all('todo')).padStart(8)}`)
if (TODO) {
  for (const [d, list] of Object.entries(weeks).sort()) {
    const open = list.filter((r) => r.state === 'todo' || r.state === 'written')
    if (open.length) console.log(`\n${d}:\n  ${open.map((r) => `${r.p.slug}${r.state === 'written' ? ' (written, needs check)' : ''}`).join('\n  ')}`)
  }
}
