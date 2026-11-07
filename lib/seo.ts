import type { Metadata } from 'next'
import { BUSINESS, PROMISES, SITE_URL } from './constants'

// ── Metadata builder ──────────────────────────────────────────────────────────

export function buildMetadata(opts: {
  title: string
  description: string
  canonical: string
  noIndex?: boolean
  /** With noIndex: still let crawlers follow the page's links (noindex, follow). */
  follow?: boolean
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  /** A real photo for the share card, from shareImage() in lib/photos.ts. Default: the sitewide og-image.jpg. */
  image?: { url: string; width: number; height: number; alt: string }
}): Metadata {
  const { title, description, canonical, noIndex, follow = false, type = 'website', publishedTime, modifiedTime, image } = opts
  const url = `${SITE_URL}${canonical}`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: BUSINESS.name,
      locale: 'en_CA',
      type,
      images: [image ?? { url: '/og-image.jpg', width: 1200, height: 630, alt: title }],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: { card: 'summary_large_image', title, description },
    ...(noIndex && { robots: { index: false, follow } }),
  }
}

// ── All service cities for areaServed ─────────────────────────────────────────

const ALL_AREA_SERVED = [
  'Mississauga','Toronto','Brampton','Oakville','Burlington','Hamilton',
  'Vaughan','Richmond Hill','Markham','Etobicoke','Scarborough','North York',
  'Caledon','Milton','Georgetown','Halton Hills','King City','Woodbridge','Thornhill',
].map((city) => ({ '@type': 'City', name: city, address: { '@type': 'PostalAddress', addressRegion: 'ON', addressCountry: 'CA' } }))

// ── Schema builders ───────────────────────────────────────────────────────────

// localBusinessSchema — emit on every page (per-page areaServed for local relevance).
// No aggregateRating anywhere (removed Nov 3, 2026, owner's OK): Google doesn't let a
// business mark up its own reviews, and these were our Google Business Profile reviews.
// The visible "150 five-star Google reviews" text stays. Credentials/identifiers live on
// organizationSchema (emitted globally in layout.tsx) — keeping them off LocalBusiness
// avoids `<parent_node>` parser errors that Google reports when those fields are nested
// inside PestControlService.
//
// @type uses an array ['LocalBusiness', 'PestControlService'] because PestControlService
// is valid in schema.org but not on Google's list of LocalBusiness subtypes, so
// LocalBusiness is named as well.
export function localBusinessSchema(overrides: {
  areaServed?: string
  description?: string
} = {}) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'PestControlService'],
    '@id': `${SITE_URL}/#business`,
    name: BUSINESS.legalName,
    url: SITE_URL,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    description: overrides.description ?? BUSINESS.description,
    priceRange: BUSINESS.priceRange,
    currenciesAccepted: 'CAD',
    paymentAccepted: 'Cash, Credit Card, E-Transfer',
    areaServed: overrides.areaServed
      ? { '@type': 'City', name: overrides.areaServed, address: { '@type': 'PostalAddress', addressRegion: 'ON', addressCountry: 'CA' } }
      : ALL_AREA_SERVED,
    address: {
      '@type': 'PostalAddress',
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.region,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng,
    },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:00', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '09:00', closes: '16:00' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Mosquito & Tick Control Services',
      itemListElement: [
        { '@type': 'Offer', name: 'Single Mosquito Treatment', price: '99', priceCurrency: 'CAD', description: 'One-time barrier spray treatment for a standard residential lot under 10,000 sq ft, plus HST' },
        { '@type': 'Offer', name: 'Mosquito Season Programs', priceCurrency: 'CAD', description: 'Seasonal mosquito barrier spray programs (5, 10, 20+ treatment frequencies). Custom-quoted by property size — call (289) 216-5030 for quote.' },
        { '@type': 'Offer', name: 'Tick Protection Program', priceCurrency: 'CAD', description: 'Seasonal tick barrier spray program (5 treatments per season). Available standalone or bundled with mosquito plan. Custom-quoted — call (289) 216-5030 for quote.' },
      ],
    },
    // sameAs = EXTERNAL profiles only. Self-referential URLs (/reviews,
    // /buzzskito-history) were removed: sameAs exists so Google can corroborate
    // the entity against sources it already trusts, and pointing it back at our
    // own pages corroborates nothing while diluting the two real signals. The
    // organizationSchema below already made this fix — this block had not.
    sameAs: [
      BUSINESS.facebookUrl,
      BUSINESS.googleReviewUrl,
    ],
    knowsLanguage: 'en-CA',
    // The Bite-Free Guarantee is Standard & Exclusive only, so the sitewide slogan names the guarantee that
    // holds on every plan.
    slogan: `Mosquito & Tick Specialist for the GTA — ${PROMISES.rainBackShort}`,
  }
  return schema
}

// serviceSchema — per-service/city Service entity.
// `price` defaults to the $99 single mosquito treatment. Pass price: null on
// tick pages (tick programs are seasonal/on-quote — advertising a $99 tick
// offer was inaccurate) — the offers block is omitted entirely.
export function serviceSchema(opts: { name: string; description: string; slug: string; city?: string; price?: string | null }) {
  const price = opts.price === undefined ? '99' : opts.price
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.slug}`,
    provider: { '@type': 'PestControlService', name: BUSINESS.legalName, url: SITE_URL },
    areaServed: opts.city
      ? { '@type': 'City', name: opts.city, address: { '@type': 'PostalAddress', addressRegion: 'ON', addressCountry: 'CA' } }
      : { '@type': 'AdministrativeArea', name: 'Greater Toronto Area', address: { '@type': 'PostalAddress', addressRegion: 'ON', addressCountry: 'CA' } },
    serviceType: 'Pest Control',
    ...(price && {
      offers: {
        '@type': 'Offer',
        price,
        priceCurrency: 'CAD',
        availability: 'https://schema.org/InStock',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price,
          priceCurrency: 'CAD',
          unitText: 'treatment',
        },
      },
    }),
  }
}

// itemListSchema — ranked-list entity for "best companies" listicle pages.
// AI answer engines lean on comparative listicles harder than any other
// format (2.4x brand-mention rate); ItemList makes the ranking machine-readable.
export function itemListSchema(opts: { name: string; description: string; slug: string; items: { name: string; url?: string }[] }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.slug}`,
    numberOfItems: opts.items.length,
    itemListOrder: 'https://schema.org/ItemListOrderDescending',
    itemListElement: opts.items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      ...(item.url && { url: item.url }),
    })),
  }
}

// personSchema — the owner-operator entity. Zero GTA competitors name a
// single human on their sites; a real Person node linked from Organization
// (founder) and BlogPosting (author) is an E-E-A-T signal franchises
// structurally cannot copy.
export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#alex`,
    name: 'Alex Francisco',
    alternateName: 'Alex',
    jobTitle: 'Founder & Owner-Operator',
    url: `${SITE_URL}/buzzskito-history`,
    worksFor: { '@type': 'Organization', '@id': `${SITE_URL}/#organization` },
    knowsAbout: [
      'Mosquito control',
      'Tick control',
      'Barrier spray application',
      // Was 'Lyme disease prevention' and 'Health Canada-approved pesticides': DIR2016-01 bars the
      // "approved" wording and the service must not carry a disease-prevention claim.
      'Tick bite awareness',
      'Pesticide label directions',
      'GTA mosquito ecology',
    ],
    homeLocation: {
      '@type': 'Place',
      address: { '@type': 'PostalAddress', addressLocality: 'Mississauga', addressRegion: 'ON', addressCountry: 'CA' },
    },
  }
}

// howToSchema ("How Professional Mosquito/Tick Control Works") was removed Nov 3, 2026: it marked up our
// service process as HowTo steps on 124 service, city and article pages. HowTo is for instructions the reader
// follows, and Google retired the HowTo rich result in 2023, so it carried risk and no benefit.

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }
}

export function blogPostingSchema(opts: {
  title: string
  description: string
  slug: string
  /** Pages that do not live under /blog name their real address here (e.g. '/buzzskito-2026-gta-mosquito-tick-report'). */
  path?: string
  datePublished: string
  dateModified?: string
  /** The page's lead photo, from shareImage() in lib/photos.ts. Default: the sitewide og-image.jpg. */
  image?: { url: string; width: number; height: number }
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: opts.title,
    description: opts.description,
    url: opts.path ? `${SITE_URL}${opts.path}` : `${SITE_URL}/blog/${opts.slug}`,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    // Author resolves to the sitewide Person entity (#alex) — a named human
    // author with a face and a bio outranks "The Team" for E-E-A-T.
    author: {
      '@type': 'Person',
      '@id': `${SITE_URL}/#alex`,
      name: 'Alex Francisco',
      jobTitle: 'Founder & Owner-Operator, BuzzSkito Mosquito & Tick Control',
      url: `${SITE_URL}/buzzskito-history`,
      worksFor: {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: BUSINESS.legalName,
        url: SITE_URL,
      },
    },
    publisher: {
      '@type': 'Organization',
      name: BUSINESS.legalName,
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
    },
    image: opts.image
      ? { '@type': 'ImageObject', url: `${SITE_URL}${opts.image.url}`, width: opts.image.width, height: opts.image.height }
      : { '@type': 'ImageObject', url: `${SITE_URL}/og-image.jpg` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': opts.path ? `${SITE_URL}${opts.path}` : `${SITE_URL}/blog/${opts.slug}` },
    inLanguage: 'en-CA',
    about: { '@type': 'Thing', name: 'Pest Control' },
  }
}

// reviewSchema() REMOVED — Google rejects self-served reviews on the business's own site.
// AggregateRating REMOVED too (Nov 3, 2026, owner's OK), from the homepage and /reviews, the
// last two pages that carried it: a business rating itself on its own site is ineligible for
// review stars and risks a spammy-structured-data action. Do not add review or rating markup
// back. Real review stars come from the Google Business Profile.

// speakableSchema — marks key sections for Google AI / voice results.
// Pass the canonical path of the page (e.g. '/toronto-mosquito-control').
// dateModified is only emitted when a real date is provided. The old fallback
// (new Date() on every build/request) made every page claim it was modified
// "today" every day — a fake-freshness signal Google detects and discounts,
// which can erode trust in the site's other date signals.
export function speakableSchema(path: string, dateModified?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}${path}#webpage`,
    url: `${SITE_URL}${path}`,
    ...(dateModified && { dateModified }),
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', 'article p:first-of-type', '.speakable'],
    },
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BUSINESS.name,
    description: BUSINESS.description,
    inLanguage: 'en-CA',
    // A bare @id reference (Nov 6, 2026): with '@type' here, Google read this as a LocalBusiness of its
    // own on every page without the full localBusinessSchema (all articles and guides) and flagged it
    // "missing name and image" in the Rich Results Test. Service pages still merge it with the full node.
    publisher: { '@id': `${SITE_URL}/#business` },
  }
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: BUSINESS.legalName,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/logo.png`,
      width: 300,
      height: 100,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BUSINESS.phone,
      contactType: 'customer service',
      areaServed: 'CA-ON',
      availableLanguage: 'English',
    },
    // sameAs = external profiles only (self-referential URLs diluted the
    // entity signal). Press coverage lives in subjectOf — three DR-80+ GTA
    // news placements that establish the org as a citable local authority.
    sameAs: [
      BUSINESS.facebookUrl,
      BUSINESS.googleReviewUrl,
    ],
    founder: { '@type': 'Person', '@id': `${SITE_URL}/#alex` },
    subjectOf: [
      {
        '@type': 'NewsArticle',
        headline: 'Ticks are surging in Ontario this year and Toronto is a hot spot',
        url: 'https://www.thestar.com/news/gta/ticks-are-surging-in-ontario-this-year-and-toronto-is-a-hot-spot-heres-how-to-protect-yourself/article_b004ab3c-2987-4c64-852b-26d1f4978a14.html',
        publisher: { '@type': 'Organization', name: 'Toronto Star' },
      },
      {
        '@type': 'NewsArticle',
        headline: 'Experts warning of a bad mosquito season ahead',
        url: 'https://toronto.citynews.ca/2026/05/17/experts-warning-of-a-bad-mosquito-season-ahead/',
        publisher: { '@type': 'Organization', name: 'CityNews Toronto' },
      },
      {
        '@type': 'NewsArticle',
        headline: 'More ticks and mosquitoes expected in Toronto this summer',
        url: 'https://www.torontotoday.ca/local/environment-climate/more-ticks-mosquitoes-toronto-this-summer-12249274',
        publisher: { '@type': 'Organization', name: 'TorontoToday' },
      },
    ],
    identifier: [
      { '@type': 'PropertyValue', propertyID: 'CanadaBusinessRegistration', value: BUSINESS.canadaBusinessReg },
      { '@type': 'PropertyValue', propertyID: 'OntarioPesticideOperatorLicence', value: BUSINESS.licenseNumber },
    ],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'license',
      name: 'Ontario Pesticide Operator Licence',
      identifier: BUSINESS.licenseNumber,
      recognizedBy: {
        '@type': 'GovernmentOrganization',
        name: 'Ontario Ministry of the Environment, Conservation and Parks',
        url: 'https://www.ontario.ca/page/ministry-environment-conservation-parks',
      },
    },
    foundingLocation: {
      '@type': 'Place',
      address: { '@type': 'PostalAddress', addressLocality: 'Mississauga', addressRegion: 'ON', addressCountry: 'CA' },
    },
    subOrganization: { '@id': `${SITE_URL}/#business` }, // bare reference: see websiteSchema
    knowsAbout: [
      'Mosquito control',
      'Tick control',
      'Barrier spray treatment',
      'Lyme disease public-health guidance',
      'Pest control Ontario',
      'Mosquito barrier spray',
      'Tick yard treatment',
      'Blacklegged tick (Ixodes scapularis)',
      'American dog tick (Dermacentor variabilis)',
      'West Nile virus surveillance in Ontario',
      'BTI (Bacillus thuringiensis israelensis)',
      'Mosquito dunks',
      'Mosquito larvae control',
      'Standing water mosquito breeding',
      'Mosquito repellent plants',
      'Permethrin-based barrier spray',
      'Bifenthrin pest control',
      'Pesticide label directions and PCP registration numbers',
      'GTA mosquito ecology',
      'Toronto ravine mosquito habitat',
      'Don River mosquito breeding',
      'Credit River tick exposure',
      'Oak Ridges Moraine tick risk',
      'Ontario mosquito season May-September',
      'Black flies Ontario',
      'Crane flies (mosquito hawks)',
      'Tick removal methods',
      'Lyme disease symptoms',
      'Outdoor event mosquito control',
      'Wedding venue mosquito treatment',
      'Commercial pest control GTA',
      // 'Pet-safe mosquito spray', 'Child-safe pest control' and 'Eco-friendly mosquito control' were removed:
      // DIR2016-01 bars safety and green claims for pest control products, in structured data as well.
      'Pesticide re-entry directions for families with kids and pets',
    ],
  }
}
