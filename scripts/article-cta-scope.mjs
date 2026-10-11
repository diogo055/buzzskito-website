// Which article pages keep their quote call-to-action, and which end with "Keep reading".
// One definition, shared by scripts/flip-article-ctas.mjs (which made the change) and
// scripts/check-article-ctas.mjs (which keeps it true on every build).
//
// Owner's decision (Oct 2026): blog and Learning Centre readers are mostly national and US, so
// a quote button there is a dead end and a related article is another page view. Two groups of
// posts are the exception, because their reader IS in the service area:
//   1. the 18 local service / pricing posts listed as `adFree` in lib/ad-routes.json
//   2. mosquito and tick posts written for a named GTA place (season, hot-spot and
//      West Nile / Lyme posts for Mississauga, Toronto, Oakville and so on)
import { readFileSync } from 'fs'
import { join } from 'path'

const routes = JSON.parse(readFileSync(join(process.cwd(), 'lib', 'ad-routes.json'), 'utf8'))
const AD_FREE = new Set(routes.adFree)

const GTA_PLACE = /(^|-)(toronto|mississauga|brampton|oakville|burlington|hamilton|vaughan|richmond-hill|markham|etobicoke|scarborough|north-york|caledon|milton|georgetown|halton|king-city|woodbridge|thornhill|gta|york-region|ancaster|dundas|stoney-creek)(-|$)/
const TREATED_PEST = /mosquito|tick|lyme|west-nile|black-flies/

/** Why this article keeps its quote CTA, or null if it gets the "Keep reading" block. */
export function keepsQuoteCta(path) {
  if (AD_FREE.has(path)) return 'local service post'
  const slug = path.split('/').pop()
  if (GTA_PLACE.test(slug) && TREATED_PEST.test(slug)) return 'GTA-local mosquito/tick post'
  return null
}
