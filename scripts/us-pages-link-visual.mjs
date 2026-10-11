// Adds one navigational link sentence to existing guides so each of the ten visual guides
// (Oct 11, 2026) is linked from two or three related pages.
//
//   node scripts/us-pages-link-visual.mjs          apply (safe to re-run)
//   node scripts/us-pages-link-visual.mjs --dry
//
// Each edit inserts ONE new paragraph line at the end of a named section of a guide's JSON and
// changes nothing else (it proves that before writing). The sentences only point to another
// page; they state no new fact, so the guide's fact-check still stands. The fact-check record
// is tied to the file's exact contents, so this script updates the record's fingerprint itself
// and notes that a link was added. It never touches a page whose record did not already match.
// A link is only added when its target guide exists; run again after more guides are written.
import { readFileSync, writeFileSync, existsSync } from 'fs'
import { join } from 'path'
import { createHash } from 'crypto'

const ROOT = process.cwd()
const DRY = process.argv.includes('--dry')
const guideFile = (id) => join(ROOT, 'content', 'guides', `${id}.json`)
const ledgerFile = (id) => join(ROOT, 'data', 'us-pages', 'checked', `${id}.json`)
const sha = (text) => createHash('sha256').update(text.split('\r\n').join('\n')).digest('hex')

const T = {
  mouse: '/blog/fall-mouse-proofing-checklist', ants: '/learn/ant-killer-recipes', bedbugs: '/blog/signs-of-bed-bugs-checklist',
  ticks: '/learn/tick-identification-chart', pets: '/learn/pet-safe-pest-control', garden: '/learn/natural-garden-pest-control',
  gnats: '/learn/how-to-get-rid-of-fungus-gnats', whitefly: '/learn/whitefly-identification-control', aphids: '/learn/aphid-control-guide', weeds: '/learn/natural-weed-control',
}

// file, the H2 of the section the sentence goes at the end of, the sentence
const EDITS = [
  ['pillar-mice', 'How do you seal mice out of a house?', `To do the whole seal-up in one pass before cold weather, work through [the fall mouse-proofing checklist](${T.mouse}), which ends with a card you can print.`],
  ['steel-wool-for-mice', 'Where should you look for mouse holes? A room-by-room checklist', `For a one-page version of this walk-through, [the fall mouse-proofing checklist](${T.mouse}) lists the entry points in order and ends with a card you can print.`],
  ['can-mice-climb-walls', 'What does climbing ability mean for sealing a house?', `Because the openings to seal are not all at ground level, a written list helps. [The fall mouse-proofing checklist](${T.mouse}) covers the entry points one by one.`],
  ['pillar-ants', 'Do home remedies work on ants?', `If you want to mix a bait or spray yourself, [homemade ant killer recipes](${T.ants}) gives the measurements for each recipe, what it does not do, and the notes for pets and children.`],
  ['borax-for-ants', 'How do you make borax ant bait at home, and what are the limits?', `Borax bait is one of several homemade options. [Homemade ant killer recipes](${T.ants}) sets it beside the others, with measurements, limits, and notes for pets and children on each.`],
  ['does-vinegar-kill-ants', 'Can you use vinegar and ant bait together?', `Vinegar is one of several things people mix at home for ants. [Homemade ant killer recipes](${T.ants}) sets the common ones side by side, with measurements and the limits of each.`],
  ['pillar-bed-bugs', 'What are the signs of a bed bug infestation?', `To check a bedroom for these signs in order, use [the signs of bed bugs checklist](${T.bedbugs}), which is laid out to print.`],
  ['where-do-bed-bugs-hide', 'How do you inspect a bedroom for bed bugs?', `For a shorter version to carry around the room, [the signs of bed bugs checklist](${T.bedbugs}) turns this inspection into a list you can print.`],
  ['what-do-bed-bugs-look-like', 'What do bed bugs look like on a mattress?', `The insect itself is only one kind of evidence. [The signs of bed bugs checklist](${T.bedbugs}) goes through the others to look for, in order.`],
  ['what-do-ticks-look-like', 'How do you tell the common US ticks apart?', `For a one-page comparison to print or save, see [the tick identification chart](${T.ticks}), which sets the deer tick, the dog tick and the lone star tick side by side.`],
  ['ticks-that-carry-lyme-disease', 'Which common ticks do not carry Lyme disease?', `[The tick identification chart](${T.ticks}) puts the blacklegged (deer) tick beside the dog tick and the lone star tick on one page, which helps when you are trying to rule one out.`],
  ['seed-ticks', 'Which ticks do seed ticks come from?', `To identify the later stages of the same species, see [the tick identification chart](${T.ticks}).`],
  ['natural-pest-control', 'Is natural pest control safe for children, pets and pollinators?', `For households with cats or dogs, [pest control around cats and dogs](${T.pets}) goes through common home remedies one at a time and gives the risk each carries, with veterinary sources.`],
  ['natural-pest-control', 'Do biological controls work on household and yard pests?', `For plants, [natural garden pest control](${T.garden}) applies the same order of steps to beds, borders and houseplants, and three common pests have pages of their own: [fungus gnats](${T.gnats}), [whiteflies](${T.whitefly}) and [aphids](${T.aphids}).`],
  ['peppermint-oil-for-mice', 'Is peppermint oil safe for cats, dogs and other pets?', `For the other remedies people use around pets, [pest control around cats and dogs](${T.pets}) gives the risk for each one, with veterinary sources.`],
  ['what-kills-ticks-on-dogs-instantly', 'What should you never use to kill a tick on a dog?', `For household pest remedies in general, [pest control around cats and dogs](${T.pets}) lists the risk each one carries for dogs and for cats.`],
  ['lawn-pest-control', 'What can you change in the lawn before using insecticide?', `Two related jobs are covered separately: [natural garden pest control](${T.garden}) for beds and borders, and [natural weed control](${T.weeds}) for weeds.`],
  ['diy-pest-control', 'Which pests can you handle yourself, and which need a professional?', `Garden problems have their own pages: [natural garden pest control](${T.garden}) for the overall approach, [how to identify and control whiteflies](${T.whitefly}), and [natural weed control](${T.weeds}).`],
  ['what-do-ants-eat', 'What is honeydew, and why do ants want it?', `If the honeydew is coming from aphids on your own plants, [how to get rid of aphids naturally](${T.aphids}) covers the plant side of the problem.`],
]

const CR = String.fromCharCode(13)
const LF = String.fromCharCode(10)
// a target counts only once it is written AND its fact-check record matches it, which is the
// same test scripts/us-pages-register.mjs --checked-only uses to publish a page
const exists = (path) => {
  const id = path.split('/').pop()
  if (!existsSync(guideFile(id)) || !existsSync(ledgerFile(id))) return false
  try { const r = JSON.parse(readFileSync(ledgerFile(id), 'utf8')); return r.verdict !== 'needs-rewrite' && r.sha === sha(readFileSync(guideFile(id), 'utf8')) } catch { return false }
}
let added = 0, already = 0, waiting = 0
const problems = []
const touched = new Set()
for (const [id, h2, sentence] of EDITS) {
  const file = guideFile(id)
  if (!existsSync(file)) { problems.push(`${id}: no such guide`); continue }
  const targets = [...sentence.matchAll(/\]\((\/[^)]+)\)/g)].map((m) => m[1])
  if (!targets.every(exists)) { waiting++; continue }
  const raw = readFileSync(file, 'utf8')
  const g = JSON.parse(raw)
  if (g.body.some((b) => b.type === 'p' && b.text === sentence)) { already++; continue }
  const start = g.body.findIndex((b) => b.type === 'h2' && b.text === h2)
  if (start < 0) { problems.push(`${id}: section not found: ${h2}`); continue }
  const end = g.body.findIndex((b, i) => i > start && b.type === 'h2')
  if (end < 0) { problems.push(`${id}: the section is the last one on the page, pick an earlier section`); continue }
  // the record must match the file as it is NOW, or this page was edited by hand since its check
  const lf = ledgerFile(id)
  const rec = existsSync(lf) ? JSON.parse(readFileSync(lf, 'utf8')) : null
  if (!rec || rec.sha !== sha(raw)) { problems.push(`${id}: its fact-check record does not match the file, not touched`); continue }
  // insert as a new line in front of the next section's heading, keeping the file's own formatting
  const eol = raw.includes(CR + LF) ? CR + LF : LF
  const lines = raw.split(eol)
  const nextH2 = JSON.stringify(g.body[end].text)
  const at = lines.findIndex((l) => l.includes('"h2"') && l.includes(nextH2))
  if (at < 0) { problems.push(`${id}: could not find the next heading as a single line`); continue }
  let ins = at
  while (ins > 0 && lines[ins - 1].trim() === '') ins--
  const indent = lines[at].slice(0, lines[at].length - lines[at].trimStart().length)
  lines.splice(ins, 0, `${indent}{ "type": "p", "text": ${JSON.stringify(sentence)} },`)
  const out = lines.join(eol)
  // proof: the parsed page is the old page plus exactly this one paragraph, in this one place
  const expect = JSON.parse(raw)
  expect.body.splice(end, 0, { type: 'p', text: sentence })
  let parsed
  try { parsed = JSON.parse(out) } catch { parsed = null }
  if (!parsed || JSON.stringify(parsed) !== JSON.stringify(expect)) { problems.push(`${id}: the edit would change more than one paragraph, not touched`); continue }
  if (!DRY) {
    writeFileSync(file, out)
    writeFileSync(lf, JSON.stringify({ ...rec, sha: sha(out), linksAddedOn: '2026-10-11', linksAdded: [...new Set([...(rec.linksAdded || []), ...targets])] }, null, 1))
  }
  touched.add(id)
  added++
}
console.log(`${DRY ? 'would add' : 'added'} ${added} link paragraph(s) in ${touched.size} guide(s) | already there: ${already} | waiting for a target guide to be written: ${waiting}`)
if (problems.length) { console.log(`✗ ${problems.length} problem(s):`); for (const p of problems) console.log(`   - ${p}`); process.exit(1) }
