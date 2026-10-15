// Makes data/geo/canada.json: Canada's provinces and territories as SVG paths, for the "map"
// block with scope "canada" (the province hubs). Source: Natural Earth 1:50m admin-1
// boundaries (public domain), downloaded to data/god-build/raw/ by
// scripts/god-build-fetch.mjs. Projection: Lambert conformal conic with the parallels
// Statistics Canada uses (49°N and 77°N). Small islands are dropped and lines simplified so
// the map stays light on a phone.
//
//   node scripts/build-geo-canada.mjs
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

const ROOT = process.cwd()
const SRC = join(ROOT, 'data', 'god-build', 'raw', 'ne_50m_admin_1.geojson')
const fc = JSON.parse(readFileSync(SRC, 'utf8'))
const feats = fc.features.filter((f) => String(f.properties.iso_3166_2 || '').startsWith('CA-'))
if (feats.length !== 13) throw new Error(`expected 13 provinces and territories, found ${feats.length}`)

// Lambert conformal conic (spherical), Statistics Canada parameters
const rad = Math.PI / 180
const [p1, p2, lat0, lon0] = [49 * rad, 77 * rad, 63.390675 * rad, -91.866667 * rad]
const n = Math.log(Math.cos(p1) / Math.cos(p2)) / Math.log(Math.tan(Math.PI / 4 + p2 / 2) / Math.tan(Math.PI / 4 + p1 / 2))
const F = (Math.cos(p1) * Math.tan(Math.PI / 4 + p1 / 2) ** n) / n
const rho = (lat) => F / Math.tan(Math.PI / 4 + lat / 2) ** n
const rho0 = rho(lat0)
const lcc = ([lon, lat]) => { const r = rho(lat * rad), t = n * (lon * rad - lon0); return [r * Math.sin(t), rho0 - r * Math.cos(t)] }

// project every ring, then fit into an 800-wide box
const polys = feats.map((f) => {
  const g = f.geometry
  const list = g.type === 'Polygon' ? [g.coordinates] : g.coordinates
  return list.map((poly) => poly.map((ring) => ring.map(lcc)))
})
const all = polys.flat(3)
const xs = all.map((p) => p[0]), ys = all.map((p) => p[1])
const [x0, x1, y0, y1] = [Math.min(...xs), Math.max(...xs), Math.min(...ys), Math.max(...ys)]
const W = 800, s = W / (x1 - x0), H = Math.round((y1 - y0) * s)
const px = ([x, y]) => [(x - x0) * s, (y1 - y) * s]

// Ramer-Douglas-Peucker in pixels
function rdp(pts, eps) {
  if (pts.length < 3) return pts
  const [a, b] = [pts[0], pts[pts.length - 1]]
  let max = 0, idx = 0
  const dx = b[0] - a[0], dy = b[1] - a[1], len = Math.hypot(dx, dy) || 1
  for (let i = 1; i < pts.length - 1; i++) { const d = Math.abs(dy * pts[i][0] - dx * pts[i][1] + b[0] * a[1] - b[1] * a[0]) / len; if (d > max) { max = d; idx = i } }
  return max > eps ? [...rdp(pts.slice(0, idx + 1), eps).slice(0, -1), ...rdp(pts.slice(idx), eps)] : [a, b]
}
// a closed ring starts and ends on the same point, which RDP cannot split on: simplify the two
// halves either side of the point farthest from the start
function simplifyRing(pts, eps) {
  let k = 0, far = -1
  for (let i = 1; i < pts.length; i++) { const d = Math.hypot(pts[i][0] - pts[0][0], pts[i][1] - pts[0][1]); if (d > far) { far = d; k = i } }
  return [...rdp(pts.slice(0, k + 1), eps).slice(0, -1), ...rdp(pts.slice(k), eps)]
}
const area = (r) => Math.abs(r.reduce((s2, p, i) => { const q = r[(i + 1) % r.length]; return s2 + p[0] * q[1] - q[0] * p[1] }, 0) / 2)

const features = feats.map((f, fi) => {
  const rings = []
  for (const poly of polys[fi]) for (const ring of poly) {
    const pr = ring.map(px)
    if (area(pr) < 4) continue // islands smaller than about 2 x 2 px vanish
    const simple = simplifyRing(pr, 0.5)
    if (simple.length >= 4) rings.push(simple)
  }
  const d = rings.map((r) => 'M' + r.map(([x, y]) => `${Math.round(x * 10) / 10},${Math.round(y * 10) / 10}`).join('L') + 'Z').join('')
  return { id: f.properties.iso_3166_2.slice(3), name: f.properties.name, d }
}).sort((a, b) => a.name.localeCompare(b.name))
const out = { viewBox: `0 0 ${W} ${H}`, source: 'Natural Earth 1:50m admin-1 states and provinces (public domain), Lambert conformal conic 49N/77N', features }
writeFileSync(join(ROOT, 'data', 'geo', 'canada.json'), JSON.stringify(out))
console.log(`data/geo/canada.json: ${features.length} provinces and territories, ${(JSON.stringify(out).length / 1024).toFixed(0)} KB, viewBox 0 0 ${W} ${H}; ids ${features.map((f) => f.id).join(' ')}`)
