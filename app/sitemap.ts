import type { MetadataRoute } from 'next'
import { SITE_URL, CITIES, NEW_BLOGS_STEAMER_HOME, NEW_BLOGS_WINTER_EARNERS, NEW_BLOGS_BEDBUG_HIGH_TICKET, NEW_BLOGS_AUTUMN_EXCLUSION, MOSQUITO_BLOGS, TICK_BLOGS, NEW_BLOGS, NEW_BLOGS_2, NEW_BLOGS_3, NEW_BLOGS_4, NEW_BLOGS_5, NEW_BLOGS_6, NEW_BLOGS_7, NEW_BLOGS_8, NEW_BLOGS_9, NEW_BLOGS_10, NEW_BLOGS_11, NEW_BLOGS_12, NEW_BLOGS_13, NEW_BLOGS_14, NEW_BLOGS_15, NEW_BLOGS_16, NEW_BLOGS_17, NEW_BLOGS_18, NEW_BLOGS_19, NEW_BLOGS_20, NEW_BLOGS_21, NEW_BLOGS_22, NEW_BLOGS_23, NEW_BLOGS_24, NEW_BLOGS_25, NEW_BLOGS_26, NEW_BLOGS_27, NEW_BLOGS_28, NEW_BLOGS_29, NEW_BLOGS_30, NEW_BLOGS_31, NEW_BLOGS_32, NEW_BLOGS_33, NEW_BLOGS_34, NEW_BLOGS_35, NEW_BLOGS_36, NEW_BLOGS_37, NEW_BLOGS_38, NEW_BLOGS_STEAMER_LANDLORD, NEW_BLOGS_49, NEW_BLOGS_44, NEW_BLOGS_DEHUMIDIFIER_PRO, NEW_BLOGS_DEHUMIDIFIER_SPACES, NEW_BLOGS_47, NEW_BLOGS_HIGH_BASKET_AUG22, NEW_BLOGS_FALL_AUG31 } from '@/lib/constants'
import { NEW_BLOGS_US_GUIDES, US_GUIDE_LEARN_PAGES } from '@/lib/constants'

// The North American pest hubs and the two product-guide hubs added with them (Oct 2026).
// They carry their own date so the sitemap's lastmod is true for them without touching
// LAST_CONTENT_UPDATE, which would claim every other page changed too.
const US_GUIDES_PUBLISHED = '2026-10-07T12:00:00.000Z'

// A lastmod must be the day the page's main content last really changed, or Google stops
// trusting every date in this file. These are the true dates for pages that changed after the
// date they were listed with (audited Oct 11, 2026 against git history):
//   Oct 8  — product-guide hubs gained their North American guide listings (commit 7d49dce),
//            and 17 existing articles gained a section for US readers (same commit)
//   Sep 17 — the five Learning Centre explainers were rewritten (commit 3834646)
//   Oct 11 — the blog and Learning Centre indexes gained the ten visual guides
// A changed footer, a swapped call-to-action or one added link is NOT a reason to move a date.
const HUBS_UPDATED_OCT8 = '2026-10-08T12:00:00.000Z'
const LEARN_EXPLAINERS_UPDATED = '2026-09-17T12:00:00.000Z'
const INDEXES_UPDATED = '2026-10-11T12:00:00.000Z'
// Articles whose text was extended on Oct 8, 2026. Their publish date in lib/constants.ts stays
// as it is; this only tells search engines the page is worth fetching again.
const ARTICLES_EXTENDED_OCT8 = new Set([
  'where-do-mosquitoes-go-in-winter-ontario', 'mosquito-repellent-plants-ontario', 'what-does-mouse-poop-look-like-canada',
  'what-kills-bed-bugs-instantly-canada', 'how-to-get-rid-of-ants-canada', 'carpenter-ants-canada', 'how-to-get-rid-of-mice-canada',
  'how-to-get-rid-of-cockroaches-canada', 'bed-bug-spray-canada', 'baby-bed-bugs-nymphs', 'types-of-ticks-identification',
  'mosquito-facts', 'do-ticks-fly-or-jump', 'bugs-that-look-like-ticks', 'how-to-get-rid-of-mosquitoes-in-the-house',
  'can-mosquitoes-bite-through-clothes', 'bed-bug-bites',
])
// Oct 15, 2026: nine identification articles gained real, credited photographs (their first),
// and /lyme-disease-canada-statistics was corrected to PHAC's current series (2024 = 5,809,
// preliminary 2025 = 7,105).
const UPDATED_OCT15 = '2026-10-15T12:00:00.000Z'
// Oct 16, 2026: real photos added (and search titles reset) on these articles.
const UPDATED_OCT16 = '2026-10-16T12:00:00.000Z'
const ARTICLES_PHOTOS_OCT16 = new Set<string>([
  'baby-ticks-nymphs-seed-ticks-ontario',
  'bed-bug-shells-casings-shed-skins-canada',
  'bed-bug-stains-poop-droppings-canada',
  'bugs-that-look-like-bed-bugs-canada',
  'flea-bites-on-humans',
  'how-to-get-rid-of-boxelder-bugs-canada',
  'how-to-get-rid-of-carpet-beetles-canada',
  'how-to-get-rid-of-centipedes-canada',
  'how-to-get-rid-of-cluster-flies-canada',
  'how-to-get-rid-of-cockroaches-canada',
  'how-to-get-rid-of-drain-flies-canada',
  'how-to-get-rid-of-fruit-flies',
  'how-to-keep-mice-out-of-your-car',
  'male-vs-female-mosquito',
  'mosquito-bite-vs-spider-bite',
  'mouse-bait-station-canada',
  'mouse-repellent-canada',
  'types-of-ticks-identification',
  'what-does-mouse-poop-look-like-canada',
  'what-kills-bed-bugs-instantly-canada',
])
const ARTICLES_PHOTOS_OCT15 = new Set([
  'mosquito-larvae-identification', 'red-ticks-and-clover-mites', 'tick-vs-bed-bug', 'tick-bite-vs-mosquito-bite',
  'what-does-a-spider-bite-look-like', 'bugs-that-look-like-ticks', 'no-see-um-bites', 'chigger-bites', 'how-long-do-ticks-live',
])
// The photo-ID retrofit (from Oct 16, 2026; data/god-build/RETROFIT_BRIEF.md): an article's path and
// the day its content was really rebuilt (quick-ID table, look-alike photo cards, photos, FAQs).
// Checked first. Add a page here only on the day its main content changed, never for a title,
// a link or a swapped call-to-action.
const ARTICLES_RETROFITTED: Record<string, string> = {
  '/blog/why-do-mosquito-bites-itch': '2026-10-16T12:00:00.000Z',
  '/blog/bugs-that-look-like-cockroaches': '2026-10-16T12:00:00.000Z',
  '/blog/baby-bed-bugs-nymphs': '2026-10-20T12:00:00.000Z',
  '/blog/bed-bug-bites-vs-mosquito-bites': '2026-10-20T12:00:00.000Z',
  '/blog/bed-bug-bites': '2026-10-20T12:00:00.000Z',
  '/blog/what-does-tick-look-like-on-dog': '2026-10-20T12:00:00.000Z',
  '/blog/what-does-a-tick-bite-look-like': '2026-10-20T12:00:00.000Z',
  '/blog/tick-bites-that-wont-heal-when-to-worry': '2026-10-20T12:00:00.000Z',
  '/blog/deer-tick-vs-dog-tick-canada': '2026-10-20T12:00:00.000Z',
  '/blog/what-ticks-look-like-ontario': '2026-10-20T12:00:00.000Z',
  '/blog/blacklegged-deer-tick-ontario': '2026-10-20T12:00:00.000Z',
  '/blog/what-temperature-kills-mosquitoes': '2026-10-23T12:00:00.000Z',
  '/blog/when-are-mosquitoes-most-active': '2026-10-23T12:00:00.000Z',
  '/blog/how-many-times-can-a-mosquito-bite-you': '2026-10-23T12:00:00.000Z',
  '/blog/what-colors-attract-mosquitoes': '2026-10-23T12:00:00.000Z',
  '/blog/can-ticks-fly-jump-swim': '2026-10-23T12:00:00.000Z',
  '/blog/how-to-get-rid-of-mosquitoes-in-the-house': '2026-10-23T12:00:00.000Z',
  '/blog/mosquito-hawk-explained': '2026-10-23T12:00:00.000Z',
  '/blog/what-do-bed-bugs-look-like': '2026-10-23T12:00:00.000Z',
  '/blog/horse-fly-and-deer-fly-bite-treatment': '2026-10-23T12:00:00.000Z',
  '/blog/what-do-baby-cockroaches-look-like': '2026-10-23T12:00:00.000Z',
}

// Static lastModified date — update this only when making real content changes.
// Using new Date() on every request makes Google distrust the lastmod signal.
// 2026-07-01: sitewide refresh — photographic heroes on all template pages,
// Quick Answer restyle, Person/ItemList schema, listicle freshness stamps.
const LAST_CONTENT_UPDATE = '2026-07-01T17:00:00.000Z'

export default function sitemap(): MetadataRoute.Sitemap {

  // ── Core pages ──────────────────────────────────────────────────────────────
  const core: MetadataRoute.Sitemap = [
    { url: SITE_URL,                                    lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${SITE_URL}/mosquito-control`,              lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/tick-control`,                  lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/service-areas`,                 lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/contact`,                       lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/free-yard-assessment`,          lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/yard-risk-report`,              lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'weekly',  priority: 0.95 },
    { url: `${SITE_URL}/gta-mosquito-pressure-map`,     lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${SITE_URL}/am-i-a-mosquito-magnet`,        lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${SITE_URL}/lyme-disease-risk-calculator`,  lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'weekly',  priority: 0.9 },
    // Pest identifier quiz, published Oct 12, 2026 (its true date, not the site-wide one)
    { url: `${SITE_URL}/tools/what-bug-is-this`,        lastModified: '2026-10-12T12:00:00.000Z', changeFrequency: 'monthly', priority: 0.7 },
    // Bug bite identifier, published Oct 20, 2026 (its true date)
    { url: `${SITE_URL}/tools/bug-bite-identifier`,     lastModified: '2026-10-20T12:00:00.000Z', changeFrequency: 'monthly', priority: 0.7 },
    // Tick and spider identifiers, published Oct 23, 2026 (their true date)
    { url: `${SITE_URL}/tools/tick-identifier`,         lastModified: '2026-10-23T04:00:00.000Z', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/tools/spider-identifier`,       lastModified: '2026-10-23T04:00:00.000Z', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/ontario-lyme-disease-tracker-2026`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'weekly', priority: 0.95 },
    // ── Statistics / data hubs (linkable assets — Jun 2026) ───────────────────
    { url: `${SITE_URL}/ticks-in-ontario-statistics`,       lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/west-nile-virus-ontario-tracker`,   lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/deadliest-animal-in-canada`,        lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITE_URL}/pest-control-cost-canada`,          lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITE_URL}/lyme-disease-canada-statistics`,    lastModified: UPDATED_OCT15, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/estate-property-mosquito-control`,         lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/pool-backyard-mosquito-control`,           lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/hoa-condo-community-mosquito-control`,     lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/daycare-camp-mosquito-tick-control`,       lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/property-manager-mosquito-tick-control`,   lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/buzzskito-history`,             lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'yearly',  priority: 0.6 },
    { url: `${SITE_URL}/frequently-asked-question`,     lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/blog`,                          lastModified: INDEXES_UPDATED, changeFrequency: 'weekly',  priority: 0.8 },
    // ── Pest Product Guides pillar hub (publishing arm — Jul 2026) ────────────
    { url: `${SITE_URL}/pest-product-guides`,                      lastModified: HUBS_UPDATED_OCT8, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${SITE_URL}/pest-product-guides/mosquito-gear`,        lastModified: HUBS_UPDATED_OCT8, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/pest-product-guides/tick-gear`,            lastModified: HUBS_UPDATED_OCT8, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/pest-product-guides/bed-bug-control`,      lastModified: HUBS_UPDATED_OCT8, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/pest-product-guides/rodent-control`,       lastModified: HUBS_UPDATED_OCT8, changeFrequency: 'weekly', priority: 0.8 },
    // ── Ontario Learning Centre (nav-level educational hubs) ──────────────────
    { url: `${SITE_URL}/learn`,                                    lastModified: INDEXES_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/learn/mosquito-life-cycle`,               lastModified: LEARN_EXPLAINERS_UPDATED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/learn/tick-life-cycle`,                   lastModified: LEARN_EXPLAINERS_UPDATED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/learn/ontario-mosquito-tick-diseases`,    lastModified: LEARN_EXPLAINERS_UPDATED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/learn/how-to-combat-mosquitoes`,          lastModified: LEARN_EXPLAINERS_UPDATED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/learn/how-to-combat-ticks`,               lastModified: LEARN_EXPLAINERS_UPDATED, changeFrequency: 'monthly', priority: 0.7 },
    // ── North American pest hubs (Oct 2026) — listed before the guides they anchor ──
    { url: `${SITE_URL}/learn/bed-bugs`,                          lastModified: US_GUIDES_PUBLISHED, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITE_URL}/learn/ants`,                              lastModified: US_GUIDES_PUBLISHED, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITE_URL}/learn/mice`,                              lastModified: US_GUIDES_PUBLISHED, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITE_URL}/learn/cockroaches`,                       lastModified: US_GUIDES_PUBLISHED, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITE_URL}/pest-product-guides/ant-control`,         lastModified: US_GUIDES_PUBLISHED, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/pest-product-guides/cockroach-control`,   lastModified: US_GUIDES_PUBLISHED, changeFrequency: 'weekly', priority: 0.8 },
    // /about removed (page doesn't exist), /privacy-policy removed (noindex)
    { url: `${SITE_URL}/terms`,                         lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'yearly',  priority: 0.3 },
  ]

  // ── All city pages — generated from CITIES array ────────────────────────────
  const cityPages: MetadataRoute.Sitemap = CITIES.flatMap((city) => [
    {
      url: `${SITE_URL}${city.mosquitoSlug}`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}${city.tickSlug}`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
  ])

  // ── High-intent pages ───────────────────────────────────────────────────────
  const highIntent: MetadataRoute.Sitemap = [
    '/how-it-works',
    '/commercial-mosquito-control',
    // '/mosquito-control-near-me' and '/tick-control-near-me' 301 to their hub
    // pages as of Aug 2026 — both sat at position ~46 duplicating the intent of
    // /mosquito-control and /tick-control.
    '/mosquito-control-cost',
    '/mosquito-control-pricing',
    '/mosquito-control-ontario',
    '/tick-control-ontario',
    '/mosquito-control-diy-vs-professional',
    '/best-mosquito-control-companies-gta',
    '/york-region-mosquito-control',
    '/kleinburg-mosquito-control',
    '/golf-course-mosquito-control',
    '/restaurant-patio-mosquito-control',
    '/wedding-mosquito-control',
    '/pest-control-gta',
    '/mosquito-spray-safety',
    '/reviews',
    '/buzzskito-2026-gta-mosquito-tick-report',
    '/mosquito-tick-control-glossary',
    // ── Pest Control [City] guide pages (Apr 2026) ────────────────────────────
    '/pest-control-mississauga',
    '/pest-control-toronto',
    '/pest-control-brampton',
    '/pest-control-oakville',
    '/pest-control-burlington',
    '/pest-control-hamilton',
    '/pest-control-vaughan',
    '/pest-control-richmond-hill',
    '/pest-control-markham',
    '/pest-control-etobicoke',
    '/pest-control-scarborough',
    '/pest-control-north-york',
    '/pest-control-caledon',
    '/pest-control-milton',
    '/pest-control-georgetown',
    '/pest-control-halton-hills',
    '/pest-control-king-city',
    '/pest-control-woodbridge',
    '/pest-control-thornhill',
    // ── Best Mosquito Control listicles ──────────────────────────────────────
    // The 12 per-city listicles were 301'd into their matching city service
    // pages in Aug 2026 (see next.config.mjs). They overlapped those pages on
    // 62–100% of their queries and were splitting the ranking signal — Google
    // was choosing between 19 of our own URLs for "mosquito control toronto"
    // and settling on none. Removed from the sitemap so it advertises only
    // resolvable URLs. The regional GTA hub is not a duplicate and survives —
    // it is listed in the highIntent block above.
    '/buzzskito-vs-mosquitoman',
    '/buzzskito-vs-mosquito-buzz',
    '/buzzskito-vs-lawnsavers',
  ].map((slug) => ({
    url: `${SITE_URL}${slug}`,
    lastModified: LAST_CONTENT_UPDATE,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // ── ALL neighbourhood pages ─────────────────────────────────────────────────
  const neighbourhoods: MetadataRoute.Sitemap = [
    // Toronto
    '/forest-hill-mosquito-control',
    '/rosedale-mosquito-control',
    '/leaside-mosquito-control',
    '/east-york-mosquito-control',
    '/don-mills-mosquito-control',
    '/willowdale-mosquito-control',
    '/york-mills-mosquito-control',
    '/the-beaches-mosquito-control',
    '/danforth-mosquito-control',
    '/davisville-mosquito-control',
    '/high-park-mosquito-control',
    '/lawrence-park-mosquito-control',
    '/leslieville-mosquito-control',
    '/moore-park-mosquito-control',
    '/riverdale-mosquito-control',
    '/sunnybrook-mosquito-control',
    '/the-annex-mosquito-control',
    '/the-kingsway-mosquito-control',
    '/summerhill-mosquito-control',
    '/baby-point-mosquito-control',
    '/bridle-path-mosquito-control',
    '/casa-loma-mosquito-control',
    '/college-park-mosquito-control',
    // Brampton
    '/heart-lake-mosquito-control',
    '/castlemore-mosquito-control',
    '/springdale-mosquito-control',
    '/fletcher-meadows-mosquito-control',
    '/bramalea-mosquito-control',
    '/mount-pleasant-mosquito-control',
    '/bram-west-mosquito-control',
    '/sandalwood-mosquito-control',
    '/snelgrove-mosquito-control',
    // Oakville
    '/glen-abbey-mosquito-control',
    '/bronte-mosquito-control',
    '/west-oak-trails-mosquito-control',
    '/old-oakville-mosquito-control',
    '/north-oakville-mosquito-control',
    '/joshua-creek-mosquito-control',
    '/river-oaks-mosquito-control',
    '/falgarwood-mosquito-control',
    '/clearview-mosquito-control',
    '/eastlake-mosquito-control',
    // Burlington
    '/alton-village-mosquito-control',
    '/aldershot-mosquito-control',
    '/roseland-mosquito-control',
    '/palmer-mosquito-control',
    '/tyandaga-mosquito-control',
    '/millcroft-mosquito-control',
    '/orchard-mosquito-control',
    // Hamilton
    '/stoney-creek-mosquito-control',
    '/dundas-mosquito-control',
    '/ancaster-mosquito-control',
    '/waterdown-mosquito-control',
    '/flamborough-mosquito-control',
    // Mississauga
    '/credit-valley-mosquito-control',
    // Other GTA
    '/bolton-mosquito-control',
    '/ajax-mosquito-control',
    '/pickering-mosquito-control',
    '/caledon-east-mosquito-control',
  ].map((slug) => ({
    url: `${SITE_URL}${slug}`,
    lastModified: LAST_CONTENT_UPDATE,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // ── All blog posts ──────────────────────────────────────────────────────────
  const allBlogArrays = [
    ...NEW_BLOGS_STEAMER_HOME, ...NEW_BLOGS_WINTER_EARNERS, ...NEW_BLOGS_BEDBUG_HIGH_TICKET,
    MOSQUITO_BLOGS.pillar,
    ...MOSQUITO_BLOGS.supporting,
    TICK_BLOGS.pillar,
    ...TICK_BLOGS.supporting,
    ...NEW_BLOGS,
    ...NEW_BLOGS_2,
    ...NEW_BLOGS_3.filter((post) => post.slug !== 'mosquito-control-cost-ontario'),
    ...NEW_BLOGS_4,
    ...NEW_BLOGS_5,
    ...NEW_BLOGS_6,
    ...NEW_BLOGS_7,
    ...NEW_BLOGS_8,
    ...NEW_BLOGS_9,
    ...NEW_BLOGS_10,
    ...NEW_BLOGS_11,
    ...NEW_BLOGS_12,
    ...NEW_BLOGS_13,
    ...NEW_BLOGS_14,
    ...NEW_BLOGS_15,
    ...NEW_BLOGS_16,
    ...NEW_BLOGS_17,
    ...NEW_BLOGS_18,
    ...NEW_BLOGS_19,
    ...NEW_BLOGS_20,
    ...NEW_BLOGS_21,
    ...NEW_BLOGS_22,
    ...NEW_BLOGS_23,
    ...NEW_BLOGS_24,
    ...NEW_BLOGS_25,
    ...NEW_BLOGS_26,
    ...NEW_BLOGS_27,
    ...NEW_BLOGS_28,
    ...NEW_BLOGS_29,
    ...NEW_BLOGS_30,
    ...NEW_BLOGS_31,
    ...NEW_BLOGS_32,
    ...NEW_BLOGS_33,
    ...NEW_BLOGS_34,
    ...NEW_BLOGS_35,
    ...NEW_BLOGS_36,
    ...NEW_BLOGS_37,
    ...NEW_BLOGS_38,
    ...NEW_BLOGS_AUTUMN_EXCLUSION,
    ...NEW_BLOGS_47,
    ...NEW_BLOGS_44,
    ...NEW_BLOGS_49,
    ...NEW_BLOGS_STEAMER_LANDLORD,
    ...NEW_BLOGS_DEHUMIDIFIER_SPACES,
    ...NEW_BLOGS_DEHUMIDIFIER_PRO,
    ...NEW_BLOGS_HIGH_BASKET_AUG22,
    ...NEW_BLOGS_FALL_AUG31,
    ...NEW_BLOGS_US_GUIDES,
  ]

  // Add blog posts from constants
  const blogPosts: MetadataRoute.Sitemap = allBlogArrays.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: ARTICLES_RETROFITTED[`/blog/${post.slug}`] ?? (ARTICLES_PHOTOS_OCT16.has(post.slug) ? UPDATED_OCT16 : ARTICLES_PHOTOS_OCT15.has(post.slug) ? UPDATED_OCT15 : ARTICLES_EXTENDED_OCT8.has(post.slug) ? HUBS_UPDATED_OCT8 : new Date(post.date).toISOString()),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Blog posts that exist on disk but aren't in the constants arrays yet
  const extraBlogSlugs = [
    'are-ticks-dangerous-ontario',
    'how-much-does-tick-treatment-cost-ontario',
    'lyme-disease-risk-areas-ontario-2026',
    'mosquito-control-worth-the-cost',
    'spring-tick-season-ontario',
    'tick-borne-diseases-ontario-complete-list',
    'west-nile-virus-ontario-2026',
    'when-does-mosquito-season-start-toronto-2026',
    'black-flies-ontario-when-they-come-out',
    'bugs-that-look-like-ticks',
    'do-cedar-trees-attract-mosquitoes',
    'why-mosquitoes-bite-some-people-more',
    // ── Listicle blogs added Apr 2026 ────────────────────────────
    'how-to-get-rid-of-mosquitoes-in-yard-ontario',
    'how-to-keep-ticks-out-of-yard-ontario',
    'mosquito-mistakes-ontario-homeowners-make',
    'tick-bites-that-wont-heal-when-to-worry',
    // ── Canada product guides (May 2026) — following dunks template ──
    'thermacell-canada-where-to-buy',
    'mosquito-bits-canada-vs-dunks',
    'permethrin-canada-yard-clothing-spray',
    'mosquito-magnet-canada',
    'picaridin-vs-deet',
    'dynatrap-canada-review',
    'bug-zappers-canada-do-they-work',
    // ── 2026 tick-surge news cluster (May 2026 — news boost) ──
    'ontario-tick-surge-2026',
    'toronto-tick-hot-spot-2026',
    'lyme-disease-cases-ontario-2026',
  ]
  const registeredSlugs = new Set(allBlogArrays.map(p => p.slug))
  const extraBlogs: MetadataRoute.Sitemap = extraBlogSlugs
    .filter(slug => !registeredSlugs.has(slug))
    .map((slug) => ({
      url: `${SITE_URL}/blog/${slug}`,
      lastModified: ARTICLES_RETROFITTED[`/blog/${slug}`] ?? (ARTICLES_PHOTOS_OCT16.has(slug) ? UPDATED_OCT16 : ARTICLES_PHOTOS_OCT15.has(slug) ? UPDATED_OCT15 : ARTICLES_EXTENDED_OCT8.has(slug) ? HUBS_UPDATED_OCT8 : LAST_CONTENT_UPDATE),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))

  return [
    ...core,
    ...cityPages,
    ...highIntent,
    ...neighbourhoods,
    ...blogPosts,
    ...extraBlogs,
    // the printable guides that live under /learn (Oct 2026), generated by scripts/us-pages-register.mjs
    ...US_GUIDE_LEARN_PAGES.map((p) => ({
      url: `${SITE_URL}/learn/${p.slug}`,
      lastModified: ARTICLES_RETROFITTED[`/learn/${p.slug}`] ?? new Date(p.date).toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
