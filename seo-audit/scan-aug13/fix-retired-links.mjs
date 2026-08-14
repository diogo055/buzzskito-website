// Repoint internal links away from the 12 retiring best-companies pages.
//
// Swapping only the href would leave anchor text reading "Best Mosquito Control
// Companies in Toronto 2026" while pointing at a service page — a link that lies
// about its destination. So this rewrites the visible text too.
//
// SKIPS files owned by the running workflows: app/<city>-mosquito-control/ and
// app/best-mosquito-control-companies-<city>/ are being edited concurrently.
//
//   node fix-retired-links.mjs --dry     preview
//   node fix-retired-links.mjs           apply

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs'
import { join } from 'path'

// execSync on Windows runs cmd.exe, which has no grep. Walk the tree in Node.
function walk(dir, out = []) {
  let entries
  try { entries = readdirSync(dir) } catch { return out }
  for (const e of entries) {
    if (e === 'node_modules' || e === '.next' || e === '.claude' || e === '.git') continue
    const full = join(dir, e).replace(/\\/g, '/')
    if (statSync(full).isDirectory()) walk(full, out)
    else if (/\.(tsx?|jsx?)$/.test(e)) out.push(full)
  }
  return out
}
const grepFiles = (needle, roots) =>
  roots.flatMap((r) => walk(r)).filter((f) => readFileSync(f, 'utf-8').includes(needle))

const DRY = process.argv.includes('--dry')
const REPO = 'C:/Users/buzzs/buzzskito-website'

const CITIES = {
  toronto:         { name: 'Toronto',       dest: '/toronto-mosquito-control' },
  mississauga:     { name: 'Mississauga',   dest: '/mississauga-mosquito-control' },
  brampton:        { name: 'Brampton',      dest: '/brampton-mosquito-control' },
  oakville:        { name: 'Oakville',      dest: '/oakville-mosquito-control' },
  vaughan:         { name: 'Vaughan',       dest: '/vaughan-mosquito-control' },
  markham:         { name: 'Markham',       dest: '/markham-mosquito-control' },
  etobicoke:       { name: 'Etobicoke',     dest: '/etobicoke-mosquito-control' },
  scarborough:     { name: 'Scarborough',   dest: '/scarborough-mosquito-control' },
  'north-york':    { name: 'North York',    dest: '/north-york-mosquito-control' },
  hamilton:        { name: 'Hamilton',      dest: '/hamilton-mosquito-control' },
  'richmond-hill': { name: 'Richmond Hill', dest: '/richmond-hill-mosquito-control' },
  // Burlington has no -mosquito-control route; its service page is -mosquito-spray.
  burlington:      { name: 'Burlington',    dest: '/burlington-mosquito-spray' },
}

// Files the two live workflows own. Touching these would race their edits.
// The -gta hub is NOT owned — it is not in the consolidation pair list — but it
// links out to three retiring pages, so it must be processed here.
const OWNED = (f) =>
  !/best-mosquito-control-companies-gta/.test(f) && (
    /app\/[a-z-]+-mosquito-control\/page\.tsx$/.test(f) ||
    /app\/best-mosquito-control-companies-[a-z-]+\/page\.tsx$/.test(f) ||
    /app\/burlington-mosquito-spray\/page\.tsx$/.test(f)
  )

const ROOTS = [`${REPO}/app`, `${REPO}/components`, `${REPO}/lib`]
const files = grepFiles('best-mosquito-control-companies-', ROOTS)

let touched = 0, links = 0
const skipped = []

for (const file of files) {
  if (OWNED(file)) { skipped.push(file.replace(REPO + '/', '')); continue }
  const before = readFileSync(file, 'utf-8')
  let src = before

  for (const [slug, { name, dest }] of Object.entries(CITIES)) {
    // The -gta hub survives; a plain slug match would also hit it, so anchor the
    // slug to a quote or word boundary that cannot be followed by more slug text.
    const hrefRe = new RegExp(`(["'])/best-mosquito-control-companies-${slug}\\1`, 'g')
    if (!hrefRe.test(src)) continue
    src = src.replace(hrefRe, `$1${dest}$1`)

    // Anchor text: "Best Mosquito Control Companies in Toronto 2026" -> "Mosquito Control in Toronto"
    src = src.replace(
      new RegExp(`Best Mosquito Control Companies in ${name}(\\s+\\d{4})?`, 'g'),
      `Mosquito Control in ${name}`
    )
    links++
  }

  if (src !== before) {
    touched++
    console.log(`  ${src === before ? '     ' : 'EDIT '} ${file.replace(REPO + '/', '')}`)
    if (!DRY) writeFileSync(file, src)
  }
}

console.log(`\n${DRY ? 'DRY RUN — ' : ''}${touched} files rewritten, ${links} slug groups repointed`)
if (skipped.length) {
  console.log(`\nSKIPPED (owned by a running workflow — handle after it finishes):`)
  for (const s of skipped) console.log(`  ${s}`)
}

// Safety net: nothing should still point at a retiring URL outside owned files.
// The -gta hub survives, so a bare slug match would produce false positives.
const RETIRING = new RegExp(`best-mosquito-control-companies-(${Object.keys(CITIES).join('|')})`)
const leftover = []
for (const f of grepFiles('best-mosquito-control-companies-', ROOTS)) {
  if (OWNED(f)) continue
  readFileSync(f, 'utf-8').split('\n').forEach((line, i) => {
    if (RETIRING.test(line)) leftover.push(`${f.replace(REPO + '/', '')}:${i + 1}`)
  })
}
console.log(`\nRemaining references to RETIRING urls outside owned files: ${leftover.length}`)
for (const l of leftover.slice(0, 20)) console.log('  ' + l)
