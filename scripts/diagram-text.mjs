// Extract the visible text of every diagram SVG, in document order, so a fix can be proven
// not to have altered wording. Phase 4 support tool.
import fs from 'node:fs'
const out = {}
for (const f of fs.readdirSync('public/diagrams').filter(f => f.endsWith('.svg')).sort()) {
  const s = fs.readFileSync('public/diagrams/' + f, 'utf8')
  const texts = [...s.matchAll(/<(?:text|tspan)\b[^>]*>([\s\S]*?)<\/(?:text|tspan)>/g)]
    .map(m => m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim())
    .filter(Boolean)
  out[f] = texts
}
fs.writeFileSync(process.argv[2], JSON.stringify(out, null, 1))
console.log('captured text from ' + Object.keys(out).length + ' diagrams -> ' + process.argv[2])
for (const [k, v] of Object.entries(out)) console.log('  ' + k.padEnd(46) + v.length + ' strings')
