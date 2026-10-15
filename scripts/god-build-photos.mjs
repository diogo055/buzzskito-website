// Downloads the licensed real photographs the scheduled pages use, converts them to web-sized
// WebP in public/guides/photos/, and records each in data/god-build/photos.json with the credit
// and licence read from the source page itself (never typed by hand). Originals go to
// data/god-build/raw/photos/ (not committed).
//
//   node scripts/god-build-photos.mjs           fetch what is missing
//
// Allowed: public domain (CDC PHIL images whose page says public domain), CC0, CC BY, CC BY-SA.
// Never NonCommercial or NoDerivatives. No AI images, no drawings.
import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'
import { createHash } from 'crypto'
import sharp from 'sharp'

const ROOT = process.cwd()
const RAW = join(ROOT, 'data', 'god-build', 'raw', 'photos')
const OUT = join(ROOT, 'public', 'guides', 'photos')
const LEDGER = join(ROOT, 'data', 'god-build', 'photos.json')
mkdirSync(RAW, { recursive: true }); mkdirSync(OUT, { recursive: true })

const PHIL_FILE = { 1669: 'https://wwwn.cdc.gov/phil/phil_images/20040209/2/039.tif', 170: 'https://wwwn.cdc.gov/phil/phil_images/20030131/1/PHIL_170.tif' }
// [our file name, subject, source]
const PHOTOS = [
  ['blacklegged-tick-female', 'Blacklegged (deer) tick, Ixodes scapularis, adult female', { phil: 1669 }],
  ['blacklegged-tick-nymph-fingernail', 'Blacklegged tick nymph beside a fingernail, for size', { phil: 28382 }],
  ['western-blacklegged-tick-female', 'Western blacklegged tick, Ixodes pacificus, adult female', { phil: 8687 }],
  ['lone-star-tick-female', 'Lone star tick, Amblyomma americanum, adult female', { phil: 8683 }],
  ['lone-star-tick-male', 'Lone star tick, Amblyomma americanum, adult male', { phil: 8685 }],
  ['american-dog-tick-female', 'American dog tick, Dermacentor variabilis, adult female', { phil: 170 }],
  ['rocky-mountain-wood-tick-female', 'Rocky Mountain wood tick, Dermacentor andersoni, adult female', { phil: 10865 }],
  ['gulf-coast-tick-female', 'Gulf Coast tick, Amblyomma maculatum, adult female', { phil: 10876 }],
  ['gulf-coast-tick-life-stages', 'Gulf Coast tick life stages beside a pin, for size', { phil: 10879 }],
  ['brown-dog-tick-male', 'Brown dog tick, Rhipicephalus sanguineus, adult male', { phil: 31722 }],
  ['asian-longhorned-tick-female', 'Asian longhorned tick, Haemaphysalis longicornis, adult female', { phil: 22886 }],
  ['asian-longhorned-tick-on-dime', 'Asian longhorned tick nymph and adult female on a US dime, for size', { phil: 22872 }],
  ['groundhog-tick', 'Groundhog (woodchuck) tick, Ixodes cookei, engorged female', { inat: { obs: 168811425, photo: 292607194 } }],
  ['aedes-aegypti-female', 'Yellow fever mosquito, Aedes aegypti, female', { phil: 26042 }],
  ['aedes-albopictus', 'Asian tiger mosquito, Aedes albopictus', { phil: 26043 }],
  ['culex-quinquefasciatus-female', 'Southern house mosquito, Culex quinquefasciatus, female', { phil: 26026 }],
  ['culex-tarsalis-female', 'Western encephalitis mosquito, Culex tarsalis, female', { phil: 7955 }],
  ['culex-pipiens', 'Northern house mosquito, Culex pipiens', { commons: 'Common_House_Mosquito_culex_pipiens.jpg' }],
  ['anopheles-quadrimaculatus', 'Common malaria mosquito, Anopheles quadrimaculatus', { phil: 27676 }],
  ['aedes-vexans', 'Inland floodwater mosquito, Aedes vexans', { commons: 'Inland_Floodwater_Mosquito_(48453823681).jpg' }],
  ['psorophora-ciliata', 'Gallinipper, Psorophora ciliata', { commons: 'Gallinipper_(Culicidae,_Psorophora_ciliata)_(30015323241).jpg' }],
  ['culex-larvae', 'Culex mosquito larvae in water', { phil: 26020 }],
]

const UA = { 'User-Agent': 'BuzzSkitoSiteBuilder/1.0 (photo credits recorded; support@buzzskito.ca)' }
const strip = (h) => String(h || '').replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, ' ').trim()
const LIC = { 'cc0': 'CC0-1.0', 'cc by 2.0': 'CC-BY-2.0', 'cc by 2.5': 'CC-BY-2.5', 'cc by 3.0': 'CC-BY-3.0', 'cc by 4.0': 'CC-BY-4.0', 'cc by-sa 2.0': 'CC-BY-SA-2.0', 'cc by-sa 2.5': 'CC-BY-SA-2.5', 'cc by-sa 3.0': 'CC-BY-SA-3.0', 'cc by-sa 4.0': 'CC-BY-SA-4.0', 'public domain': 'public-domain' }

async function phil(pid) {
  const page = `https://wwwn.cdc.gov/phil/Details.aspx?pid=${pid}`
  const html = await (await fetch(page, { headers: UA })).text()
  const field = (id) => strip((html.match(new RegExp(`<span id="${id}">([\\s\\S]*?)</span>`)) || [])[1])
  const rights = field('lblCopyRight')
  if (!/public domain/i.test(rights) || /copyright protected/i.test(rights)) throw new Error(`PHIL ${pid} is not public domain: ${rights.slice(0, 80)}`)
  const provider = field('lblContprov') || 'CDC'
  const photographer = field('lblPhotoCredit')
  const credit = `${provider}${photographer ? `; photo: ${photographer}` : ''} (CDC Public Health Image Library, phil.cdc.gov)`
  return { sourceUrl: page, originalUrl: PHIL_FILE[pid] || `https://wwwn.cdc.gov/phil/PHIL_Images/${pid}/${pid}.tif`, license: 'public-domain', credit, description: field('lblDesc').slice(0, 300) }
}
async function commons(name) {
  const api = `https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url|extmetadata&titles=${encodeURIComponent('File:' + name)}`
  const j = await (await fetch(api, { headers: UA })).json()
  const info = Object.values(j.query.pages)[0].imageinfo[0]
  const m = info.extmetadata
  const short = strip(m.LicenseShortName?.value).toLowerCase()
  const license = LIC[short]
  if (!license) throw new Error(`Commons ${name}: licence "${short}" is not allowed`)
  const artist = strip(m.Artist?.value) || 'unknown author'
  return { sourceUrl: info.descriptionurl, originalUrl: info.url, license, credit: `${artist}, ${strip(m.LicenseShortName?.value)}, via Wikimedia Commons`, description: strip(m.ImageDescription?.value).slice(0, 300) }
}
async function inat({ obs, photo }) {
  const j = await (await fetch(`https://api.inaturalist.org/v1/observations/${obs}`, { headers: UA })).json()
  const p = j.results[0].photos.find((x) => x.id === photo)
  if (!p) throw new Error(`iNaturalist photo ${photo} is not on observation ${obs}`)
  const license = { 'cc-by': 'CC-BY-4.0', 'cc0': 'CC0-1.0', 'cc-by-sa': 'CC-BY-SA-4.0' }[p.license_code]
  if (!license) throw new Error(`iNaturalist photo ${photo}: licence "${p.license_code}" is not allowed`)
  return { sourceUrl: `https://www.inaturalist.org/observations/${obs}`, originalUrl: p.url.replace('/square.', '/original.'), license, credit: `${p.attribution}, via iNaturalist`, description: j.results[0].taxon?.name || '' }
}

const ledger = JSON.parse(readFileSync(LEDGER, 'utf8'))
const have = Object.fromEntries(ledger.photos.map((p) => [p.file, p]))
for (const [name, subject, src] of PHOTOS) {
  const file = `/guides/photos/${name}.webp`
  if (have[file] && existsSync(join(OUT, `${name}.webp`))) { console.log(`have ${name}`); continue }
  try {
    const meta = src.phil ? await phil(src.phil) : src.commons ? await commons(src.commons) : await inat(src.inat)
    const res = await fetch(meta.originalUrl, { headers: UA })
    if (!res.ok) throw new Error(`download HTTP ${res.status}`)
    const buf = Buffer.from(await res.arrayBuffer())
    writeFileSync(join(RAW, `${name}${meta.originalUrl.match(/\.[a-z]+$/i)?.[0] || ''}`), buf)
    let quality = 80, out
    do { out = await sharp(buf, { limitInputPixels: false }).rotate().toColourspace('srgb').resize({ width: 1200, withoutEnlargement: true }).webp({ quality }).toBuffer({ resolveWithObject: true }); quality -= 8 } while (out.data.length > 260 * 1024 && quality >= 56)
    writeFileSync(join(OUT, `${name}.webp`), out.data)
    have[file] = { file, subject, sourceUrl: meta.sourceUrl, originalUrl: meta.originalUrl, license: meta.license, credit: meta.credit, width: out.info.width, height: out.info.height, bytes: out.data.length, sourceDescription: meta.description, downloadedOn: new Date().toISOString().slice(0, 10), sha256Original: createHash('sha256').update(buf).digest('hex') }
    console.log(`ok   ${name}: ${(buf.length / 1048576).toFixed(1)} MB -> ${(out.data.length / 1024).toFixed(0)} KB ${out.info.width}x${out.info.height} | ${meta.license} | ${meta.credit}`)
  } catch (e) {
    console.log(`FAIL ${name}: ${e.message}`)
  }
}
ledger.photos = Object.values(have).sort((a, b) => a.file.localeCompare(b.file))
writeFileSync(LEDGER, JSON.stringify(ledger, null, 1) + '\n')
console.log(`photos on record: ${ledger.photos.length}`)
