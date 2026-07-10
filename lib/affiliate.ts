// ─────────────────────────────────────────────────────────────────────────────
// AFFILIATE CONFIG — one place to turn monetization on.
// ─────────────────────────────────────────────────────────────────────────────
// HOW TO ACTIVATE (5 minutes, once you have accounts):
//   1. Sign up: Amazon Associates Canada → https://associates.amazon.ca
//      Approval is provisional; you must make 3 qualifying sales within 180 days.
//   2. Copy your Store/Tracking ID (looks like "buzzskito-20").
//   3. Paste it into AMAZON_CA_TAG below and (optionally) AMAZON_COM_TAG.
//   4. Deploy. Every <BuyLink> on the site instantly becomes a monetized link.
//
// Until a tag is set, links still work — they just point to a plain retailer
// search (helpful for readers, zero monetization). Nothing breaks either way.
//
// COMPLIANCE: every page using BuyLink MUST render <AffiliateDisclosure /> near
// the top (Competition Act, Canada + FTC 16 CFR 255, US). BuyLink sets
// rel="sponsored nofollow" automatically (required by Amazon + Google).
// ─────────────────────────────────────────────────────────────────────────────

// ⬇️  PASTE YOUR TAGS HERE TO GO LIVE  ⬇️
export const AMAZON_CA_TAG = 'buzzskito20-20'   // amazon.ca Associates — LIVE 2026-07-10
export const AMAZON_COM_TAG = ''  // e.g. 'buzzskito0a-20' — amazon.com (for US traffic via OneLink)

export const AFFILIATE_ENABLED = AMAZON_CA_TAG.length > 0

// Build an Amazon.ca link. Pass an ASIN for a specific product, or a search
// query. Tag is appended only when configured. OneLink (set up in the Amazon
// dashboard) auto-redirects .ca → .com for US visitors so the 24% US traffic
// monetizes at US rates — no code change needed once OneLink is enabled.
export function amazon(opts: { asin?: string; search?: string }): string {
  const base = 'https://www.amazon.ca'
  const path = opts.asin
    ? `/dp/${opts.asin}`
    : `/s?k=${encodeURIComponent(opts.search ?? '')}`
  const sep = opts.asin ? '?' : '&'
  return AMAZON_CA_TAG ? `${base}${path}${sep}tag=${AMAZON_CA_TAG}` : `${base}${path}`
}

// Product registry — the items our content already discusses. Keeps ASINs and
// search terms in one auditable place. Fill in `asin` as you find them (better
// conversion); `search` works fine as a fallback.
export const PRODUCTS = {
  mosquitoDunks:   { name: 'Summit Mosquito Dunks',        search: 'summit mosquito dunks' },
  mosquitoBits:    { name: 'Summit Mosquito Bits',         search: 'summit mosquito bits' },
  thermacell:      { name: 'Thermacell Mosquito Repeller', search: 'thermacell mosquito repeller' },
  dynatrap:        { name: 'DynaTrap Insect Trap',         search: 'dynatrap mosquito trap' },
  mosquitoMagnet:  { name: 'Mosquito Magnet Trap',         search: 'mosquito magnet trap' },
  sawyerPermethrin:{ name: 'Sawyer Permethrin Spray',      search: 'sawyer permethrin clothing spray' },
  picaridin:       { name: 'Picaridin Insect Repellent',   search: 'picaridin insect repellent canada' },
  deetSpray:       { name: 'DEET Insect Repellent',        search: 'deet insect repellent' },
  tickTweezers:    { name: 'Tick Removal Tool',            search: 'tick removal tool tweezers' },
  bugZapper:       { name: 'Electric Bug Zapper',          search: 'electric bug zapper outdoor' },
} as const
