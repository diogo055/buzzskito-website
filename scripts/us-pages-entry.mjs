// Prints one page's entry from data/us-pages/plan.json.
//   node scripts/us-pages-entry.mjs <slug>            a guide under /blog
//   node scripts/us-pages-entry.mjs pillar:<slug>     a hub page under /learn
import { readFileSync } from 'fs'
import { join } from 'path'

const plan = JSON.parse(readFileSync(join(process.cwd(), 'data', 'us-pages', 'plan.json'), 'utf8'))
const arg = process.argv[2] || ''
const [kind, slug] = arg.includes(':') ? arg.split(':') : ['spoke', arg]
const page = plan.pages.find((p) => p.kind === kind && p.slug === slug)
if (!page) { console.error(`no plan entry for ${arg}`); process.exit(1) }
console.log(JSON.stringify({ ...page, file: `content/guides/${kind === 'pillar' ? 'pillar-' : ''}${slug}.json`, validate: `node scripts/validate-guide.mjs ${slug}` }, null, 2))
