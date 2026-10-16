// Publishes the scheduled pages whose day has come. GitHub runs this every morning
// (.github/workflows/release-scheduled.yml); it is also safe to run by hand.
//
//   node scripts/release-scheduled.mjs            release what is due today
//   node scripts/release-scheduled.mjs --check    only count what is due (changes nothing)
//   node scripts/release-scheduled.mjs --dry-run  say what would be released (changes nothing)
//   RELEASE_DATE=2026-11-16 node scripts/release-scheduled.mjs   act as if it were that day
//
// The schedule is data/god-build/plan.src.json: every page there has a `releaseOn` date, and
// until that date its file waits in content/guides-scheduled/. For each due page:
//   - its independent fact-check must be on record for the file exactly as it is
//     (data/us-pages/checked/<name>.json); a page without one is held back and reported
//   - a page whose hub is not live yet waits for the hub
//   - "datePublished" becomes the day the page actually goes live. That is the only change
//     made to the file, the script proves it, and the fact-check record is carried over.
//   - the file moves to content/guides/
// Then scripts/us-pages-register.mjs --checked-only wires the pages into the site (route
// files, blog index, sitemap, Next/Related picks, llms.txt). Notes for the commit go to
// data/god-build/releases/<date>.md and data/god-build/last-release-commit.txt.
import { readFileSync, readdirSync, writeFileSync, existsSync, mkdirSync, unlinkSync, appendFileSync } from 'fs'
import { join } from 'path'
import { createHash } from 'crypto'
import { execFileSync } from 'child_process'
import { internalLinks, inboundNeeded } from './guide-links.mjs'

const ROOT = process.cwd()
const SRC = join(ROOT, 'data', 'god-build', 'plan.src.json')
const WAITING = join(ROOT, 'content', 'guides-scheduled')
const LIVE = join(ROOT, 'content', 'guides')
const CHECKED = join(ROOT, 'data', 'us-pages', 'checked')
const args = process.argv.slice(2)
const CHECK = args.includes('--check'), DRY = args.includes('--dry-run')
const DATE = process.env.RELEASE_DATE?.trim() || new Date().toISOString().slice(0, 10)
if (!/^\d{4}-\d{2}-\d{2}$/.test(DATE)) { console.error(`RELEASE_DATE must be YYYY-MM-DD, got "${DATE}"`); process.exit(1) }

const out = (k, v) => { if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, `${k}=${v}\n`) }
const warn = (m) => console.log(process.env.GITHUB_ACTIONS ? `::warning::${m}` : `WARNING: ${m}`)
const sha = (text) => createHash('sha256').update(text.replace(/\r\n/g, '\n')).digest('hex')
const DATE_FIELD = /("datePublished"\s*:\s*")(\d{4}-\d{2}-\d{2})(")/

if (!existsSync(SRC)) { console.log('no schedule (data/god-build/plan.src.json): nothing to do'); out('due', 0); out('released', 0); process.exit(0) }
const pages = JSON.parse(readFileSync(SRC, 'utf8')).pages
const pathOf = (p) => `/${p.section || 'blog'}/${p.slug}`
const fileName = (p) => `${p.slug}.json`
const isLive = (path) => existsSync(join(ROOT, 'app', path.slice(1), 'page.tsx'))

const due = pages.filter((p) => p.releaseOn <= DATE && existsSync(join(WAITING, fileName(p))))
console.log(`${DATE}: ${due.length} scheduled page(s) due and still waiting`)
out('due', due.length)
if (CHECK || !due.length) { out('released', 0); process.exit(0) }

const releasing = new Set(due.map(pathOf))
const released = [], held = []
// hubs first, so a page released on the same day as its hub is not held back
for (const p of [...due].sort((a, b) => (a.role === 'hub' ? 0 : 1) - (b.role === 'hub' ? 0 : 1))) {
  const name = fileName(p)
  const raw = readFileSync(join(WAITING, name), 'utf8')
  let record = null
  try { record = JSON.parse(readFileSync(join(CHECKED, name), 'utf8')) } catch {}
  if (!record || record.sha !== sha(raw) || record.verdict === 'needs-rewrite') { held.push(`${pathOf(p)}: no fact-check on record for this exact file`); continue }
  if (p.parent && !isLive(p.parent.href) && !releasing.has(p.parent.href)) { held.push(`${pathOf(p)}: its hub ${p.parent.href} is not live yet`); continue }
  if (existsSync(join(LIVE, name))) { held.push(`${pathOf(p)}: content/guides/${name} already exists`); continue }
  if ((raw.match(new RegExp(DATE_FIELD.source, 'g')) || []).length !== 1) { held.push(`${pathOf(p)}: expected exactly one "datePublished"`); continue }

  // the only edit: the date the page really goes live
  const next = raw.replace(DATE_FIELD, `$1${DATE}$3`)
  const a = JSON.parse(raw), b = JSON.parse(next)
  a.datePublished = b.datePublished
  if (JSON.stringify(a) !== JSON.stringify(b)) { held.push(`${pathOf(p)}: the date change touched more than the date`); continue }
  released.push({ p, name, next, record })
}

// The build's guide check (validate-guide.mjs --all) fails the whole release if a page goes live
// with no link in from another guide, and a page whose topic hub is deferred has only other
// guides to link it. So count the links from the live guides plus the other pages going out today,
// and hold back a page that has too few: it goes out on the first morning a page linking to it
// is live. Repeat until nothing changes (holding one page back can take away another's only link).
const liveLinks = readdirSync(LIVE).filter((f) => f.endsWith('.json')).map((f) => {
  try { return internalLinks(JSON.parse(readFileSync(join(LIVE, f), 'utf8'))) } catch { return [] }
})
for (let changed = true; changed; ) {
  changed = false
  const going = released.map((r) => ({ path: pathOf(r.p), links: internalLinks(JSON.parse(r.next)) }))
  for (let i = released.length - 1; i >= 0; i--) {
    // every page in this schedule is in the "god" batch of data/us-pages/plan.json
    const path = pathOf(released[i].p), need = inboundNeeded({ batch: 'god' })
    const n = [...liveLinks, ...going.filter((x) => x.path !== path).map((x) => x.links)].filter((ls) => ls.includes(path)).length
    if (n < need) { held.push(`${path}: ${n} link(s) in from other guides; it needs ${need}, so it waits until a page linking to it is live`); released.splice(i, 1); changed = true }
  }
}

for (const h of held) warn(`held back ${h}`)
if (DRY) {
  console.log(`would release ${released.length}:`)
  for (const { p } of released) console.log(`  ${pathOf(p)} (scheduled ${p.releaseOn})`)
  out('released', 0)
  process.exit(0)
}
if (!released.length) { out('released', 0); process.exit(0) }

mkdirSync(LIVE, { recursive: true })
for (const { p, name, next, record } of released) {
  writeFileSync(join(LIVE, name), next)
  writeFileSync(join(CHECKED, name), JSON.stringify({ ...record, sha: sha(next), released: { on: DATE, scheduledFor: p.releaseOn, note: 'datePublished set to the release day; nothing else changed' } }, null, 1))
}
// wire them into the site; if that fails, put every file back the way it was
try {
  execFileSync(process.execPath, [join(ROOT, 'scripts', 'us-pages-register.mjs'), '--checked-only'], { stdio: 'inherit' })
} catch (e) {
  for (const { name, record } of released) {
    unlinkSync(join(LIVE, name))
    writeFileSync(join(CHECKED, name), JSON.stringify(record, null, 1))
  }
  console.error('the register script failed; nothing was released')
  throw e
}
for (const { name } of released) unlinkSync(join(WAITING, name))

const list = released.map(({ p }) => `- https://buzzskito.ca${pathOf(p)} (scheduled ${p.releaseOn})`)
const notes = [`# Release ${DATE}`, '', `${released.length} page(s) went live${held.length ? `; ${held.length} held back` : ''}.`, '', ...list, ...(held.length ? ['', 'Held back:', ...held.map((h) => `- ${h}`)] : []), '']
mkdirSync(join(ROOT, 'data', 'god-build', 'releases'), { recursive: true })
writeFileSync(join(ROOT, 'data', 'god-build', 'releases', `${DATE}.md`), notes.join('\n'))
writeFileSync(join(ROOT, 'data', 'god-build', 'last-release-commit.txt'), [`release: ${released.length} scheduled page(s) go live (${DATE})`, '', ...released.map(({ p }) => `- ${pathOf(p)}`), ...(held.length ? ['', `Held back: ${held.length} (see data/god-build/releases/${DATE}.md)`] : []), ''].join('\n'))
console.log(notes.join('\n'))
out('released', released.length)
