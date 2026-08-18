// Wire a local conversion path onto the 105 product-research posts that carry an
// Amazon buy-bar and nothing else.
//
// Measured: those pages take 1,613 clicks per 28 days at 1.137% CTR — the
// highest commercial intent on the site (someone searching "bed bug spray
// canada" has an active infestation) — and the only thing offered is an
// affiliate link worth about $0.074.
//
// 104 of the 105 cover pests BuzzSkito does not treat, so they get
// AdjacentPestCTA, which states that plainly rather than implying we spray for
// bed bugs. Using BlogPostCTA here ("Want this problem solved at YOUR
// address?") would promise a service that does not exist.
//
//   node add-adjacent-cta.mjs --dry
//   node add-adjacent-cta.mjs

import { readFileSync, writeFileSync, readdirSync } from 'fs'

const DRY = process.argv.includes('--dry')
const ROOT = 'C:/Users/buzzs/buzzskito-website'

const walk = (d, o = []) => {
  for (const e of readdirSync(d, { withFileTypes: true })) {
    const f = `${d}/${e.name}`
    e.isDirectory() ? walk(f, o) : /page\.tsx$/.test(e.name) && o.push(f)
  }
  return o
}

// Application gear we genuinely use in the field. These get the 'equipment'
// variant — claiming "we don't do this" on a backpack-sprayer review would be
// false, and would waste the strongest pitch we have: the reader is currently
// pricing a $400 machine they would also have to learn to calibrate.
const isEquipment = (p) => /sprayer|fogger|steam-cleaner|pest-control-equipment|diatomaceous-earth/i.test(p)

// What the reader is actually here about, so the disclosure names it honestly.
const pestFor = (p) =>
  /bed-bug|bedbug|packtite|zappbug|thermalstrike|encasement|mattress|steamer|dupray|vapamore|mcculloch/i.test(p) ? 'bed bugs'
  : /roach|advion/i.test(p) ? 'cockroaches'
  : /mouse|mice|rat-|rats|rodent|vole|squirrel|goodnature|bait-station/i.test(p) ? 'rodents'
  : /raccoon|wildlife|live-trap|electric-fence/i.test(p) ? 'wildlife'
  : /wasp|hornet|yellow-jacket|carpenter-bee/i.test(p) ? 'wasps and hornets'
  : /flea/i.test(p) ? 'fleas'
  : /spider/i.test(p) ? 'spiders'
  : /ant-|ants|carpenter-ant/i.test(p) ? 'ants'
  : /silverfish|centipede|earwig|carpet-beetle|boxelder|moth|gnat|fruit-fly|drain-fly|cluster-fly/i.test(p) ? 'household pests'
  : /air-purifier|dehumidifier|hepa|ozone/i.test(p) ? 'indoor air quality gear'
  : /chigger/i.test(p) ? 'chiggers'
  : /fly|flies|katchy|rescue-why/i.test(p) ? 'flies'
  : /live-trap|live-animal-trap|sprinkler/i.test(p) ? 'wildlife'
  : /ultrasonic/i.test(p) ? 'pest repellers'
  : /doktor-doom/i.test(p) ? 'bed bugs'
  : 'this gear'

let touched = 0
const preview = []

for (const f of walk(`${ROOT}/app/blog`)) {
  const src = readFileSync(f, 'utf-8')
  if (!/StickyBuyBar|StickyBarShell/.test(src)) continue
  if (/CTASection|BlogPostCTA|InlineYardRiskCTA|AdjacentPestCTA/.test(src)) continue

  const slug = f.replace(`${ROOT}/app/blog/`, '').replace('/page.tsx', '')
  const pest = pestFor(slug)
  const variant = isEquipment(slug) ? 'equipment' : 'adjacent'

  // Import goes after the last existing @/components import so the block stays tidy.
  const importRe = /^import .+ from '@\/components\/.+'$/gm
  const hits = [...src.matchAll(importRe)]
  if (!hits.length) { console.log(`  SKIP (no component imports): ${slug}`); continue }
  const last = hits[hits.length - 1]
  const insertAt = last.index + last[0].length

  let out = src.slice(0, insertAt)
    + "\nimport AdjacentPestCTA from '@/components/AdjacentPestCTA'"
    + src.slice(insertAt)

  // Render it as the last thing inside the article.
  const close = out.lastIndexOf('</article>')
  if (close === -1) { console.log(`  SKIP (no </article>): ${slug}`); continue }
  out = out.slice(0, close)
    + `  <AdjacentPestCTA pest="${pest}" />\n      `
    + out.slice(close)

  touched++
  preview.push(`  ${(variant === 'equipment' ? '[equipment]' : pest).padEnd(26)} ${slug}`)
  if (!DRY) writeFileSync(f, out)
}

console.log(preview.slice(0, 20).join('\n'))
if (preview.length > 20) console.log(`  … and ${preview.length - 20} more`)
console.log(`\n${DRY ? 'DRY RUN — ' : ''}${touched} pages wired`)

const byPest = {}
for (const l of preview) { const k = l.trim().split(/\s{2,}/)[0]; byPest[k] = (byPest[k] || 0) + 1 }
console.log('\nby disclosure label:')
for (const [k, v] of Object.entries(byPest).sort((a, b) => b[1] - a[1])) console.log(`  ${String(v).padStart(3)}  ${k}`)
