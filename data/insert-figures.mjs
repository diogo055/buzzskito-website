// Wire the original ID diagrams into their target pages.
//
// PLACEMENT: immediately after the first <h2> inside the prose container. That is
// where the reader who searched a visual-identification query wants the answer,
// and it puts the image high enough to be a plausible AI Overview thumbnail
// without displacing the Quick Answer capsule that feeds AI extraction.
//
// Additive only: inserts a <Figure> element and its import. Nothing is modified,
// moved or removed.

import { readFileSync, writeFileSync } from 'fs'

const DRY = process.argv.includes('--dry')

const PLACEMENTS = [
  {
    page: 'app/blog/tick-vs-bed-bug/page.tsx',
    src: '/diagrams/tick-vs-bed-bug-size.svg', w: 720, h: 400, priority: true,
    alt: 'Actual-size comparison of blacklegged tick larva, nymph, adult and engorged adult against bed bug nymph and adult, on a shared millimetre scale',
    caption: 'Ticks and bed bugs drawn to the same millimetre scale. The deciding check is leg count: ticks are arachnids with eight legs as nymphs and adults, bed bugs are insects with six.',
  },
  {
    page: 'app/blog/what-does-mouse-poop-look-like-canada/page.tsx',
    src: '/diagrams/mouse-vs-rat-droppings.svg', w: 720, h: 430, priority: true,
    alt: 'Actual-size comparison of house mouse, Norway rat, roof rat, squirrel, bat and cockroach droppings with a millimetre scale',
    caption: 'Droppings drawn to actual size. Size narrows it to a species group; the shape of the ends separates mouse from rat, and rat from squirrel.',
  },
  {
    page: 'app/blog/bugs-that-look-like-ticks/page.tsx',
    src: '/diagrams/bugs-that-look-like-ticks.svg', w: 720, h: 420, priority: true,
    alt: 'Comparison chart of a blacklegged tick against spider beetle, clover mite and bed bug across leg count, antennae, body shape, colour and true size',
    caption: 'The four attributes that separate a tick from its common look-alikes. Legs and antennae settle almost every case: eight legs and no antennae means tick.',
  },
  {
    page: 'app/blog/mosquito-larvae-identification/page.tsx',
    src: '/diagrams/mosquito-larvae-identification.svg', w: 720, h: 400, priority: true,
    alt: 'Diagram of mosquito larvae hanging head-down from the water surface with siphon, abdomen and head labelled, beside midge and rat-tailed maggot look-alikes',
    caption: 'Mosquito larvae hang head-down from the surface and breathe through a tail siphon. Red bottom-dwelling wrigglers are midges, and a single long tail means a harmless hoverfly larva.',
  },
  {
    page: 'app/blog/no-see-um-bites/page.tsx',
    src: '/diagrams/bite-pattern-comparison.svg', w: 720, h: 440, priority: false,
    alt: 'Diagram comparing the distribution patterns of mosquito, bed bug, flea, chigger, tick and no-see-um bites on the body',
    caption: 'Where bites sit and how they group identifies the insect far more reliably than how a single mark looks. No-see-um bites arrive as a dense patch on exposed skin near water at dawn or dusk.',
  },
  {
    page: 'app/blog/chigger-bites/page.tsx',
    src: '/diagrams/bite-pattern-comparison.svg', w: 720, h: 440, priority: false,
    alt: 'Diagram comparing the distribution patterns of mosquito, bed bug, flea, chigger, tick and no-see-um bites on the body',
    caption: 'Chigger bites gather where clothing presses against skin — sock line, waistband, behind the knees. That distribution is the clearest way to separate them from flea or mosquito bites.',
  },
  {
    page: 'app/blog/bed-bug-bites/page.tsx',
    src: '/diagrams/bite-pattern-comparison.svg', w: 720, h: 440, priority: false,
    alt: 'Diagram comparing the distribution patterns of mosquito, bed bug, flea, chigger, tick and no-see-um bites on the body',
    caption: 'Bed bug bites tend to run in lines or clusters of three on skin that met the mattress. Mosquito bites are scattered and isolated; flea bites concentrate below the knee.',
  },
  {
    page: 'app/blog/flea-bites-on-humans/page.tsx',
    src: '/diagrams/bite-pattern-comparison.svg', w: 720, h: 440, priority: false,
    alt: 'Diagram comparing the distribution patterns of mosquito, bed bug, flea, chigger, tick and no-see-um bites on the body',
    caption: 'Flea bites cluster tightly around the ankles and lower legs, usually with a small red dot at the centre. Bites above the waist in lines point to bed bugs instead.',
  },
]

let done = 0
const skipped = []

for (const p of PLACEMENTS) {
  let s
  try { s = readFileSync(p.page, 'utf-8') } catch { skipped.push([p.page, 'file not found']); continue }
  if (s.includes('<Figure')) { skipped.push([p.page, 'already has a Figure']); continue }

  // 1. add the import after the last existing component import
  if (!s.includes("from '@/components/Figure'")) {
    const imports = [...s.matchAll(/^import .+ from '@\/components\/.+'$/gm)]
    if (!imports.length) { skipped.push([p.page, 'no component imports to anchor to']); continue }
    const last = imports[imports.length - 1]
    const at = last.index + last[0].length
    s = s.slice(0, at) + "\nimport Figure from '@/components/Figure'" + s.slice(at)
  }

  // 2. insert the figure after the first <h2> inside the prose container
  const proseIdx = s.indexOf('prose-brand')
  if (proseIdx === -1) { skipped.push([p.page, 'no prose-brand container']); continue }
  const h2 = s.indexOf('<h2', proseIdx)
  if (h2 === -1) { skipped.push([p.page, 'no <h2> after prose container']); continue }
  const h2End = s.indexOf('</h2>', h2)
  if (h2End === -1) { skipped.push([p.page, 'unterminated <h2>']); continue }
  const insertAt = h2End + '</h2>'.length

  const lineStart = s.lastIndexOf('\n', h2) + 1
  const indent = s.slice(lineStart, h2).match(/^\s*/)[0]

  const fig = `\n${indent}<Figure\n` +
    `${indent}  src="${p.src}"\n` +
    `${indent}  alt="${p.alt}"\n` +
    `${indent}  caption="${p.caption}"\n` +
    `${indent}  width={${p.w}}\n` +
    `${indent}  height={${p.h}}\n` +
    (p.priority ? `${indent}  priority\n` : '') +
    `${indent}/>`

  s = s.slice(0, insertAt) + fig + s.slice(insertAt)

  if (!DRY) writeFileSync(p.page, s)
  done++
  console.log(`  ${DRY ? 'would add' : 'added'}: ${p.src.padEnd(42)} -> ${p.page.replace('app/blog/', '').replace('/page.tsx', '')}`)
}

console.log(`\n${DRY ? 'WOULD INSERT' : 'INSERTED'}: ${done} figures across ${new Set(PLACEMENTS.slice(0, done).map(p => p.page)).size} pages`)
if (skipped.length) { console.log('skipped:'); for (const [f, w] of skipped) console.log(`  ${f} — ${w}`) }
