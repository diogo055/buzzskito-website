// Records that a page's independent fact-check finished, tied to the exact file contents.
// If the file is edited afterwards the record no longer matches and the page counts as
// unchecked again.
//
//   node scripts/us-pages-mark-checked.mjs guide <file-basename> <verdict> [claimsChecked] [claimsCorrected] [claimsRemoved]
//   node scripts/us-pages-mark-checked.mjs existing <route> <verdict> [claimsChecked] [claimsCorrected] [claimsRemoved]
//   node scripts/us-pages-mark-checked.mjs status          what is written / checked / still to do
import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync } from 'fs'
import { join } from 'path'
import { createHash } from 'crypto'

const ROOT = process.cwd()
const DIR = join(ROOT, 'data', 'us-pages', 'checked')
mkdirSync(DIR, { recursive: true })
const sha = (f) => createHash('sha256').update(readFileSync(f, 'utf8').replace(/\r\n/g, '\n')).digest('hex')
const guideFile = (id) => join(ROOT, 'content', 'guides', `${id}.json`)
const pageFile = (route) => join(ROOT, 'app', route, 'page.tsx')
const ledger = (kind, id) => join(DIR, `${kind === 'guide' ? '' : 'existing__'}${id.replace(/\//g, '__')}.json`)

export function isChecked(kind, id) {
  const l = ledger(kind, id), f = kind === 'guide' ? guideFile(id) : pageFile(id)
  if (!existsSync(l) || !existsSync(f)) return false
  try { const j = JSON.parse(readFileSync(l, 'utf8')); return j.sha === sha(f) && j.verdict !== 'needs-rewrite' } catch { return false }
}

const [cmd, id, verdict, c1, c2, c3] = process.argv.slice(2)
if (cmd === 'status') {
  const plan = JSON.parse(readFileSync(join(ROOT, 'data', 'us-pages', 'plan.json'), 'utf8'))
  const tasks = existsSync(join(ROOT, 'data', 'us-pages', 'existing-tasks.json')) ? JSON.parse(readFileSync(join(ROOT, 'data', 'us-pages', 'existing-tasks.json'), 'utf8')) : []
  const out = { toWrite: [], toCheck: [], done: [], existingToEdit: [], existingToCheck: [], existingDone: [] }
  for (const p of plan.pages) {
    const base = `${p.kind === 'pillar' ? 'pillar-' : ''}${p.slug}`
    const item = { slug: p.slug, kind: p.kind, cluster: p.cluster }
    if (!existsSync(guideFile(base))) out.toWrite.push(item)
    else if (!isChecked('guide', base)) out.toCheck.push(item)
    else out.done.push(item)
  }
  const snapDir = process.env.US_SNAP
  for (const t of tasks) {
    const item = { id: t.id, type: t.type, route: t.route }
    const f = pageFile(t.route)
    const edited = existsSync(f) && (t.type === 'hub-new' || !snapDir || !existsSync(join(snapDir, `${t.route.replace(/\//g, '__')}.tsx`)) || readFileSync(f, 'utf8').replace(/\r\n/g, '\n') !== readFileSync(join(snapDir, `${t.route.replace(/\//g, '__')}.tsx`), 'utf8').replace(/\r\n/g, '\n'))
    const needsCheck = ['broaden', 'merge', 'hub-new'].includes(t.type)
    if (!edited) out.existingToEdit.push(item)
    else if (needsCheck && !isChecked('existing', t.route)) out.existingToCheck.push(item)
    else out.existingDone.push(item)
  }
  if (process.argv.includes('--json')) console.log(JSON.stringify(out))
  else console.log(`guides: ${out.done.length} written and checked, ${out.toCheck.length} written but not checked, ${out.toWrite.length} not written\nexisting pages: ${out.existingDone.length} done, ${out.existingToCheck.length} edited but not checked, ${out.existingToEdit.length} not edited`)
} else if ((cmd === 'guide' || cmd === 'existing') && id && verdict) {
  const f = cmd === 'guide' ? guideFile(id) : pageFile(id)
  if (!existsSync(f)) { console.error(`no such file: ${f}`); process.exit(1) }
  if (!['publish', 'publish-after-my-fixes', 'needs-rewrite'].includes(verdict)) { console.error('verdict must be publish, publish-after-my-fixes or needs-rewrite'); process.exit(1) }
  writeFileSync(ledger(cmd, id), JSON.stringify({ id, kind: cmd, verdict, sha: sha(f), claimsChecked: Number(c1) || 0, claimsCorrected: Number(c2) || 0, claimsRemovedOrSoftened: Number(c3) || 0, checkedOn: new Date().toISOString().slice(0, 10) }, null, 1))
  console.log(`recorded: ${id} ${verdict}`)
} else if (cmd) {
  console.error('usage: node scripts/us-pages-mark-checked.mjs guide|existing <id> <verdict> [checked corrected removed] | status [--json]')
  process.exit(1)
}
