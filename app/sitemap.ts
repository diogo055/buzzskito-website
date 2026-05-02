import type { MetadataRoute } from 'next'
import { SITE_URL, CITIES, MOSQUITO_BLOGS, TICK_BLOGS, NEW_BLOGS, NEW_BLOGS_2, NEW_BLOGS_3, NEW_BLOGS_4, NEW_BLOGS_5, NEW_BLOGS_6, NEW_BLOGS_7, NEW_BLOGS_8, NEW_BLOGS_9, NEW_BLOGS_10 } from '@/lib/constants'

// Static lastModified date — update this only when making real content changes.
// Using new Date() on every request makes Google distrust the lastmod signal.
const LAST_CONTENT_UPDATE = '2026-04-26T22:00:00.000Z'

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
    { url: `${SITE_URL}/buzzskito-history`,             lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'yearly',  priority: 0.6 },
    { url: `${SITE_URL}/frequently-asked-question`,     lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/blog`,                          lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'weekly',  priority: 0.8 },
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
    '/mosquito-control-near-me',
    '/tick-control-near-me',
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
    // ── Best Mosquito Control listicles (full GTA coverage Apr 2026) ──────────
    '/best-mosquito-control-companies-brampton',
    '/best-mosquito-control-companies-vaughan',
    '/best-mosquito-control-companies-oakville',
    '/best-mosquito-control-companies-mississauga',
    '/best-mosquito-control-companies-toronto',
    '/best-mosquito-control-companies-hamilton',
    '/best-mosquito-control-companies-burlington',
    '/best-mosquito-control-companies-markham',
    '/best-mosquito-control-companies-richmond-hill',
    '/best-mosquito-control-companies-north-york',
    '/best-mosquito-control-companies-etobicoke',
    '/best-mosquito-control-companies-scarborough',
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
  ]

  // Add blog posts from constants
  const blogPosts: MetadataRoute.Sitemap = allBlogArrays.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
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
    'picaridin-vs-deet-canada',
    'dynatrap-canada-review',
    'bug-zappers-canada-do-they-work',
  ]
  const registeredSlugs = new Set(allBlogArrays.map(p => p.slug))
  const extraBlogs: MetadataRoute.Sitemap = extraBlogSlugs
    .filter(slug => !registeredSlugs.has(slug))
    .map((slug) => ({
      url: `${SITE_URL}/blog/${slug}`,
      lastModified: LAST_CONTENT_UPDATE,
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
  ]
}
