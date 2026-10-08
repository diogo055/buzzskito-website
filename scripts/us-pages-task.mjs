// Prints one existing-page task from data/us-pages/existing-tasks.json.
//   node scripts/us-pages-task.mjs <id>
import { readFileSync } from 'fs'
import { join } from 'path'

const tasks = JSON.parse(readFileSync(join(process.cwd(), 'data', 'us-pages', 'existing-tasks.json'), 'utf8'))
const t = tasks.find((x) => x.id === process.argv[2])
if (!t) { console.error(`no task "${process.argv[2]}". ids: ${tasks.map((x) => x.id).join(', ')}`); process.exit(1) }
console.log(JSON.stringify(t, null, 2))
