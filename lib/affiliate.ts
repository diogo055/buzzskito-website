// ─────────────────────────────────────────────────────────────────────────────
// AFFILIATE CONFIG — one place to turn monetization on.
// ─────────────────────────────────────────────────────────────────────────────
// LIVE since 2026-07-10. Both storefronts monetized:
//   • Canada  → amazon.ca  (AMAZON_CA_TAG)  — default, and what crawlers see.
//   • US      → amazon.com (AMAZON_COM_TAG) — served to US visitors only.
//
// GEO-ROUTING (see BuyLink.tsx): pages are statically generated, so the server
// always renders the .ca link (correct for our majority-Canadian audience and
// for Googlebot, whose canonical market is Canada). After hydration, BuyLink
// checks the visitor's IANA timezone; US timezones get the link rewritten to
// amazon.com with the US tag. No third-party OneLink script, no dashboard setup,
// no per-request server cost, no hydration mismatch.
//
// Until a tag is set, links still work — they just point to a plain retailer
// search (helpful for readers, zero monetization). Nothing breaks either way.
//
// COMPLIANCE: every page using BuyLink MUST render <AffiliateDisclosure /> near
// the top (Competition Act, Canada + FTC 16 CFR 255, US). BuyLink sets
// rel="sponsored nofollow" automatically (required by Amazon + Google).
// ─────────────────────────────────────────────────────────────────────────────

export const AMAZON_CA_TAG = 'buzzskito20-20'      // amazon.ca Associates — LIVE 2026-07-10
export const AMAZON_COM_TAG = 'buzzskito200d-20'   // amazon.com Associates — LIVE 2026-07-10

export const AFFILIATE_ENABLED = AMAZON_CA_TAG.length > 0

// IANA timezones that map to the United States. A Canadian visitor reports a
// distinct zone (America/Toronto, America/Vancouver, …) so they are never
// misrouted to .com; anyone we can't place as US falls through to the .ca
// default. Covers the 50 states + territories that share the US storefront.
export const US_TIMEZONES = new Set<string>([
  'America/New_York', 'America/Detroit', 'America/Kentucky/Louisville',
  'America/Kentucky/Monticello', 'America/Indiana/Indianapolis',
  'America/Indiana/Vincennes', 'America/Indiana/Winamac', 'America/Indiana/Marengo',
  'America/Indiana/Petersburg', 'America/Indiana/Vevay', 'America/Indiana/Tell_City',
  'America/Indiana/Knox', 'America/Chicago', 'America/Menominee',
  'America/North_Dakota/Center', 'America/North_Dakota/New_Salem',
  'America/North_Dakota/Beulah', 'America/Denver', 'America/Boise',
  'America/Phoenix', 'America/Los_Angeles', 'America/Anchorage', 'America/Juneau',
  'America/Sitka', 'America/Metlakatla', 'America/Yakutat', 'America/Nome',
  'America/Adak', 'Pacific/Honolulu', 'Pacific/Guam', 'Pacific/Saipan',
  'America/Puerto_Rico', 'America/St_Thomas',
])

// Build an Amazon link for the given storefront. Pass an ASIN for a specific
// product, or a search query. Tag is appended only when configured. Defaults to
// the Canadian store (server render + crawlers); BuyLink switches to 'com' for
// detected US visitors after hydration.
export function amazon(opts: { asin?: string; search?: string }, store: 'ca' | 'com' = 'ca'): string {
  const base = store === 'com' ? 'https://www.amazon.com' : 'https://www.amazon.ca'
  const tag = store === 'com' ? AMAZON_COM_TAG : AMAZON_CA_TAG
  const path = opts.asin
    ? `/dp/${opts.asin}`
    : `/s?k=${encodeURIComponent(opts.search ?? '')}`
  const sep = opts.asin ? '?' : '&'
  return tag ? `${base}${path}${sep}tag=${tag}` : `${base}${path}`
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
