// Minimal .xlsx reader (no dependencies): unzips with the system `unzip` and returns each
// sheet as rows of cell text. Used by the god-build packet scripts to read CDC workbooks.
//   node scripts/xlsx-read.mjs <file.xlsx> [sheet name] [max rows]   print a sheet
import { execFileSync } from 'child_process'
import { fileURLToPath } from 'url'

const unescape = (s) => s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&amp;/g, '&')
const part = (file, name) => { try { return execFileSync('unzip', ['-p', file, name], { maxBuffer: 256 * 1024 * 1024 }).toString('utf8') } catch { return '' } }
const colIndex = (ref) => { let n = 0; for (const ch of ref.replace(/\d+/g, '')) n = n * 26 + (ch.charCodeAt(0) - 64); return n - 1 }

export function readXlsx(file) {
  const strings = [...part(file, 'xl/sharedStrings.xml').matchAll(/<si>([\s\S]*?)<\/si>/g)].map((m) => unescape([...m[1].matchAll(/<t[^>]*>([\s\S]*?)<\/t>/g)].map((t) => t[1]).join('')))
  const wb = part(file, 'xl/workbook.xml')
  const rels = part(file, 'xl/_rels/workbook.xml.rels')
  const target = Object.fromEntries([...rels.matchAll(/<Relationship [^>]*Id="([^"]+)"[^>]*Target="([^"]+)"/g)].map((m) => [m[1], m[2]]))
  const sheets = {}
  for (const m of wb.matchAll(/<sheet [^>]*name="([^"]+)"[^>]*r:id="([^"]+)"/g)) {
    const path = 'xl/' + target[m[2]].replace(/^\/?xl\//, '')
    const xml = part(file, path)
    const rows = []
    for (const r of xml.matchAll(/<row[^>]*>([\s\S]*?)<\/row>/g)) {
      const row = []
      for (const c of r[1].matchAll(/<c r="([A-Z]+\d+)"([^>]*?)(?:\/>|>([\s\S]*?)<\/c>)/g)) {
        const attrs = c[2] || '', inner = c[3] || ''
        const v = (inner.match(/<v>([\s\S]*?)<\/v>/) || [])[1]
        const inline = (inner.match(/<t[^>]*>([\s\S]*?)<\/t>/) || [])[1]
        let val = ''
        if (/t="s"/.test(attrs) && v !== undefined) val = strings[Number(v)]
        else if (/t="inlineStr"/.test(attrs) && inline !== undefined) val = unescape(inline)
        else if (v !== undefined) val = unescape(v)
        row[colIndex(c[1])] = val
      }
      rows.push(Array.from(row, (x) => x ?? ''))
    }
    sheets[unescape(m[1])] = rows
  }
  return sheets
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const [file, sheet, max = 30] = process.argv.slice(2)
  const s = readXlsx(file)
  for (const [name, rows] of Object.entries(s)) {
    if (sheet && name !== sheet) continue
    console.log(`== ${name} (${rows.length} rows)`)
    for (const r of rows.slice(0, Number(max))) console.log(r.join(' | '))
  }
}
