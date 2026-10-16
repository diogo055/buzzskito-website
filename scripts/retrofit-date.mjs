// Records the day an article's content was really rebuilt to the photo-ID formula
// (data/god-build/RETROFIT_BRIEF.md): adds or updates its line in ARTICLES_RETROFITTED in
// app/sitemap.ts, which gives the sitemap its true lastmod. Keeps the file's CRLF line endings
// (an edit tool would mix in LF lines).
//
//   node scripts/retrofit-date.mjs /blog/<slug> [YYYY-MM-DD]      default: today
//   (blog/<slug> works too: Git Bash rewrites a leading-slash argument into a Windows path,
//    which this script also accepts)
//
// Use it only on the day the page's main content changed (a quick-ID table, look-alike cards,
// photos, new FAQs), never for a title, a link or a swapped call-to-action. Set the page's own
// date to the same day: UPDATED in a hand-written page, dateModified in a guide's JSON.
import { readFileSync, writeFileSync, existsSync } from 'fs'

const today = new Date().toISOString().slice(0, 10)
const [arg, day = today] = process.argv.slice(2)
const fail = (m) => { console.error(m); process.exit(1) }
const m = /(?:^|\/)(blog|learn)\/([a-z0-9-]+)\/?$/.exec(String(arg || '').replace(/\\/g, '/'))
if (!m || !/^\d{4}-\d{2}-\d{2}$/.test(day)) fail('usage: node scripts/retrofit-date.mjs /blog/<slug> [YYYY-MM-DD]')
const path = `/${m[1]}/${m[2]}`
if (!existsSync(`app${path}/page.tsx`)) fail(`${path}: app${path}/page.tsx does not exist`)
if (day > today) fail(`${day} is in the future; a lastmod must be the day the content changed`)

const f = 'app/sitemap.ts'
let s = readFileSync(f, 'utf8')
const NL = s.includes('\r\n') ? '\r\n' : '\n'
const head = `const ARTICLES_RETROFITTED: Record<string, string> = {${NL}`
const at = s.indexOf(head)
if (at < 0) fail(`${f}: ARTICLES_RETROFITTED not found`)
const end = s.indexOf(`${NL}}`, at)
const block = s.slice(at + head.length, end)
const line = `  '${path}': '${day}T12:00:00.000Z',`
const lines = block ? block.split(NL) : []
const i = lines.findIndex((l) => l.startsWith(`  '${path}':`))
if (i >= 0) lines[i] = line
else lines.push(line)
s = s.slice(0, at + head.length) + lines.join(NL) + s.slice(end)
writeFileSync(f, s)
console.log(`${i >= 0 ? 'updated' : 'added'}: ${line.trim()}`)
