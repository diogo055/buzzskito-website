// Rasterize every /public/diagrams SVG to PNG so the diagrams can actually be LOOKED AT.
// Phase 4 of the affiliate-content brief requires viewing each image, not inspecting its source.
// Re-run after any fix to re-verify. Usage: node scripts/raster-diagrams.mjs <outDir>
import sharp from 'sharp'
import fs from 'node:fs'
import path from 'node:path'

const OUT = process.argv[2]
if (!OUT) { console.error('usage: node scripts/raster-diagrams.mjs <outDir>'); process.exit(1) }
fs.mkdirSync(OUT, { recursive: true })

const files = fs.readdirSync('public/diagrams').filter(f => f.endsWith('.svg')).sort()
for (const f of files) {
  const src = path.join('public/diagrams', f)
  const base = f.replace(/\.svg$/, '')
  const meta = await sharp(src).metadata()
  for (const w of [720, 380]) {
    const out = path.join(OUT, `${base}@${w}.png`)
    try {
      // Oversample the rasterization so small labels stay legible for inspection.
      const density = Math.max(72, Math.round(72 * (w / (meta.width || 720)) * 2))
      await sharp(src, { density }).resize({ width: w }).flatten({ background: '#ffffff' }).png().toFile(out)
    } catch (e) {
      console.log('FAIL ' + f + ' @' + w + ': ' + e.message)
    }
  }
  console.log(`${f.padEnd(46)} native ${meta.width}x${meta.height}`)
}
console.log('\n-> ' + fs.readdirSync(OUT).filter(f => f.endsWith('.png')).length + ' PNGs in ' + OUT)
