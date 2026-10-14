// Makes the map shapes the guides draw (block type "map", components/GuideMap.tsx):
//   data/geo/us.json      the 50 states + DC, Albers USA (Alaska and Hawaii as insets)
//   data/geo/<st>.json    one file per state, its counties (county FIPS codes as ids)
// from the us-atlas package (TopoJSON made from the Census Bureau's cartographic boundary
// files; ISC licence, the underlying Census data is public domain).
//
//   npm i -D us-atlas@3    (once)
//   node scripts/build-geo.mjs [path/to/us-atlas]
//
// Output is plain SVG path data, rounded to 0.1 px, so the pages need no map library.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import { join } from 'path'

const ROOT = process.cwd()
const ATLAS = process.argv[2] || join(ROOT, 'node_modules', 'us-atlas')
if (!existsSync(join(ATLAS, 'counties-10m.json'))) { console.error(`us-atlas not found at ${ATLAS} (npm i -D us-atlas@3)`); process.exit(1) }
const OUT = join(ROOT, 'data', 'geo')
mkdirSync(OUT, { recursive: true })
const { states } = JSON.parse(readFileSync(join(ROOT, 'data', 'god-build', 'states.json'), 'utf8'))
const codeByFips = Object.fromEntries(states.map((s) => [s.fips, s.code]))
codeByFips['11'] = 'DC'

// ── TopoJSON: arcs -> rings -> polygons ─────────────────────────────────────────
function arcsOf(topo) {
  const t = topo.transform
  return topo.arcs.map((arc) => {
    if (!t) return arc
    let x = 0, y = 0
    return arc.map(([dx, dy]) => { x += dx; y += dy; return [x * t.scale[0] + t.translate[0], y * t.scale[1] + t.translate[1]] })
  })
}
function ring(arcs, idx) {
  const pts = []
  idx.forEach((i, k) => {
    const a = i >= 0 ? arcs[i] : arcs[~i].slice().reverse()
    pts.push(...(k ? a.slice(1) : a))
  })
  return pts
}
const polygons = (arcs, g) => (g.type === 'Polygon' ? [g.arcs.map((r) => ring(arcs, r))] : g.type === 'MultiPolygon' ? g.arcs.map((p) => p.map((r) => ring(arcs, r))) : [])
const pathD = (polys, project) => polys.map((rings) => rings.map((r) => {
  const pts = r.map(project).map(([x, y]) => `${Math.round(x * 10) / 10},${Math.round(y * 10) / 10}`)
  return `M${pts.join('L')}Z`
}).join('')).join('')

// ── the US, already projected by us-atlas (Albers USA, 975 x 610) ───────────────
const usTopo = JSON.parse(readFileSync(join(ATLAS, 'states-albers-10m.json'), 'utf8'))
const usArcs = arcsOf(usTopo)
const us = usTopo.objects.states.geometries.filter((g) => codeByFips[g.id]).map((g) => ({ id: codeByFips[g.id], name: g.properties.name, d: pathD(polygons(usArcs, g), (p) => p) }))
writeFileSync(join(OUT, 'us.json'), JSON.stringify({ viewBox: '0 0 975 610', source: 'us-atlas states-albers-10m (US Census Bureau cartographic boundaries)', features: us }))

// ── each state's counties, projected here: longitude scaled by cos(middle latitude) ──
const ctTopo = JSON.parse(readFileSync(join(ATLAS, 'counties-10m.json'), 'utf8'))
const ctArcs = arcsOf(ctTopo)
const W = 800
let total = 0
for (const s of states) {
  const geoms = ctTopo.objects.counties.geometries.filter((g) => String(g.id).slice(0, 2) === s.fips)
  // Alaska's Aleutians cross the 180th meridian: keep them on the same side
  const lon = (x) => (s.code === 'AK' && x > 0 ? x - 360 : x)
  const all = geoms.flatMap((g) => polygons(ctArcs, g).flat(2))
  const xs = all.map(([x]) => lon(x)), ys = all.map(([, y]) => y)
  const [x0, x1, y0, y1] = [Math.min(...xs), Math.max(...xs), Math.min(...ys), Math.max(...ys)]
  const k = Math.cos(((y0 + y1) / 2) * Math.PI / 180)
  const scale = W / ((x1 - x0) * k)
  const H = Math.round((y1 - y0) * scale)
  const project = ([x, y]) => [(lon(x) - x0) * k * scale, (y1 - y) * scale]
  const features = geoms.map((g) => ({ id: String(g.id), name: g.properties.name, d: pathD(polygons(ctArcs, g), project) })).sort((a, b) => a.name.localeCompare(b.name))
  const json = JSON.stringify({ viewBox: `0 0 ${W} ${H}`, source: 'us-atlas counties-10m (US Census Bureau cartographic boundaries)', features })
  total += json.length
  writeFileSync(join(OUT, `${s.code.toLowerCase()}.json`), json)
}
console.log(`data/geo: us.json (${us.length} states) + ${states.length} state files, ${(total / 1024).toFixed(0)} KB of county shapes`)
