import { readFileSync } from 'fs'
const d = JSON.parse(readFileSync('./gsc_full_scan.json','utf-8'))

// GTA geo footprint (cities + neighbourhoods the site targets)
export const GEO = /\b(mississauga|toronto|brampton|oakville|burlington|hamilton|vaughan|richmond hill|markham|etobicoke|scarborough|north york|caledon|milton|georgetown|halton hills|king city|woodbridge|thornhill|gta|ontario|canada|near me|nearby|my area)\b/i
// service / hire-someone intent
export const SERVICE = /\b(control|spraying|spray|exterminat\w*|pest|treatment|company|companies|service|services|removal|contractor|professional|hire|cost|price|quote|near me)\b/i
// product-purchase intent
export const PRODUCT = /\b(best|top \d|review|reviews|vs|worth it|buy|cheapest|deal|amazon|canadian tire|home depot|walmart|costco)\b/i

export function classify(q){
  const geo = GEO.test(q), svc = SERVICE.test(q), prod = PRODUCT.test(q)
  // A local-service query = geography + hiring intent, and NOT a product hunt
  if (geo && svc && !prod) return 'LOCAL_SERVICE'
  if (geo && svc && prod)  return 'LOCAL_PRODUCT'   // "best pest control toronto"
  if (prod)                return 'PRODUCT_COMM'
  if (svc && !geo)         return 'SERVICE_GENERIC' // "mosquito control" w/o city
  return 'INFORMATIONAL'
}
export { d }
