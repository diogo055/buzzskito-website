import type { Metadata } from 'next'
import { BUSINESS, SITE_URL } from './constants'

// ── Metadata builder ──────────────────────────────────────────────────────────

export function buildMetadata(opts: {
  title: string
  description: string
  canonical: string
  noIndex?: boolean
  type?: 'website' | 'article'
  publishedTime?: string
}): Metadata {
  const { title, description, canonical, noIndex, type = 'website', publishedTime } = opts
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
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: title }],
      ...(publishedTime && { publishedTime }),
    },
    twitter: { card: 'summary_large_image', title, description },
    ...(noIndex && { robots: { index: false, follow: false } }),
  }
}

// ── All service cities for areaServed ─────────────────────────────────────────

const ALL_AREA_SERVED = [
  'Mississauga','Toronto','Brampton','Oakville','Burlington','Hamilton',
  'Vaughan','Richmond Hill','Markham','Etobicoke','Scarborough','North York',
  'Caledon','Milton','Georgetown','Halton Hills','King City','Woodbridge','Thornhill',
].map((city) => ({ '@type': 'City', name: city, addressRegion: 'ON', addressCountry: 'CA' }))

// ── Schema builders ───────────────────────────────────────────────────────────

// localBusinessSchema — emit on every page (per-page areaServed for local relevance).
// aggregateRating is OPT-IN: only emitted on the homepage and /reviews to prevent
// Google's review-snippet parser from flagging "multiple aggregate ratings" across
// the site. Credentials/identifiers live on organizationSchema (emitted globally
// in layout.tsx) — keeping them off LocalBusiness avoids `<parent_node>` parser
// errors that Google reports when those fields are nested inside PestControlService.
export function localBusinessSchema(overrides: {
  areaServed?: string
  description?: string
  includeAggregateRating?: boolean
} = {}) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'PestControlService',
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
      ? { '@type': 'City', name: overrides.areaServed, addressRegion: 'ON', addressCountry: 'CA' }
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
        { '@type': 'Offer', name: 'Single Mosquito Treatment', price: '99', priceCurrency: 'CAD', description: 'One-time barrier spray treatment for standard residential lot' },
        { '@type': 'Offer', name: 'Mosquito Season Programs', priceCurrency: 'CAD', description: 'Seasonal mosquito barrier spray programs (5, 10, 20+ treatment frequencies). Custom-quoted by property size — call (289) 216-5030 for quote.' },
        { '@type': 'Offer', name: 'Tick Protection Program', priceCurrency: 'CAD', description: 'Seasonal tick barrier spray program. Available standalone or bundled with mosquito plan. Custom-quoted — call (289) 216-5030 for quote.' },
      ],
    },
    sameAs: [
      BUSINESS.facebookUrl,
      BUSINESS.googleReviewUrl,
      `${SITE_URL}/reviews`,
      `${SITE_URL}/buzzskito-history`,
    ],
    knowsLanguage: 'en-CA',
    slogan: 'BuzzSkito Bite-Free Guarantee — Mosquito & Tick Specialist for the GTA',
  }
  if (overrides.includeAggregateRating) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS.aggregateRating.ratingValue,
      bestRating: BUSINESS.aggregateRating.bestRating,
      ratingCount: BUSINESS.aggregateRating.ratingCount,
    }
  }
  return schema
}

export function serviceSchema(opts: { name: string; description: string; slug: string; city?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.slug}`,
    provider: { '@type': 'PestControlService', name: BUSINESS.legalName, url: SITE_URL },
    areaServed: opts.city
      ? { '@type': 'City', name: opts.city, addressRegion: 'ON', addressCountry: 'CA' }
      : { '@type': 'AdministrativeArea', name: 'Greater Toronto Area', addressRegion: 'ON' },
    serviceType: 'Pest Control',
    offers: {
      '@type': 'Offer',
      price: '99',
      priceCurrency: 'CAD',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '99',
        priceCurrency: 'CAD',
        unitText: 'treatment',
      },
    },
  }
}

export function howToSchema(opts: { service: 'mosquito' | 'tick'; city?: string }) {
  const isTick = opts.service === 'tick'
  const cityLabel = opts.city ? ` in ${opts.city}` : ''
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: isTick ? `How Professional Tick Control Works${cityLabel}` : `How Professional Mosquito Control Works${cityLabel}`,
    description: isTick
      ? `Three-step professional tick barrier spray process for residential yards${cityLabel}. Health Canada-approved.`
      : `Three-step professional mosquito barrier spray process for residential yards${cityLabel}. Health Canada-approved.`,
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Free Property Assessment',
        text: isTick
          ? 'We evaluate your property, identifying tick habitat zones — lawn-to-woods transition areas, leaf litter, garden bed edges, and fence lines where ticks concentrate.'
          : 'We evaluate your property, identifying water features, dense vegetation, and mosquito pressure zones specific to your area.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Professional Barrier Spray',
        text: isTick
          ? 'Our licensed technician applies Health Canada-approved formula to the specific 1-3 metre zones where ticks concentrate using a precision backpack sprayer.'
          : 'Our licensed technician applies Health Canada-approved formula to all vegetation, shrub interiors, leaf undersides, and fence lines using a precision backpack sprayer.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: '30-Day Protection Guarantee',
        text: 'The residual formula kills pests on contact and creates a protective barrier for up to 30 days. If pests return within the protection window, we re-treat at no cost.',
      },
    ],
    totalTime: 'PT40M',
    supply: [{ '@type': 'HowToSupply', name: 'Health Canada-approved barrier spray formula' }],
    tool: [{ '@type': 'HowToTool', name: 'Professional backpack precision sprayer' }],
  }
}

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
  datePublished: string
  dateModified?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: opts.title,
    description: opts.description,
    url: `${SITE_URL}/blog/${opts.slug}`,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: {
      '@type': 'Person',
      name: BUSINESS.author.name,
      jobTitle: BUSINESS.author.role,
      url: BUSINESS.author.url,
      sameAs: [
        BUSINESS.facebookUrl,
        BUSINESS.googleReviewUrl,
        `${SITE_URL}/buzzskito-history`,
      ],
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
    image: { '@type': 'ImageObject', url: `${SITE_URL}/og-image.jpg` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${opts.slug}` },
    inLanguage: 'en-CA',
    about: { '@type': 'Thing', name: 'Pest Control' },
  }
}

// reviewSchema() REMOVED — Google rejects self-served reviews on the business's own site.
// AggregateRating on localBusinessSchema() is sufficient and valid for star snippets.

// speakableSchema — marks key sections for Google AI / voice results.
// Pass the canonical path of the page (e.g. '/toronto-mosquito-control').
// Now includes dateModified for content freshness (2026 AI Overview signal).
export function speakableSchema(path: string, dateModified?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}${path}#webpage`,
    url: `${SITE_URL}${path}`,
    dateModified: dateModified ?? new Date().toISOString().split('T')[0],
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
    publisher: { '@type': 'PestControlService', '@id': `${SITE_URL}/#business` },
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
    sameAs: [
      BUSINESS.facebookUrl,
      BUSINESS.googleReviewUrl,
      `${SITE_URL}/buzzskito-history`,
      `${SITE_URL}/reviews`,
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
    subOrganization: { '@type': 'PestControlService', '@id': `${SITE_URL}/#business` },
    knowsAbout: [
      'Mosquito control',
      'Tick control',
      'Barrier spray treatment',
      'Lyme disease prevention',
      'Pest control Ontario',
      'Mosquito barrier spray',
      'Tick yard treatment',
      'Blacklegged tick (Ixodes scapularis)',
      'American dog tick (Dermacentor variabilis)',
      'West Nile virus prevention',
      'BTI (Bacillus thuringiensis israelensis)',
      'Mosquito dunks',
      'Mosquito larvae control',
      'Standing water mosquito breeding',
      'Mosquito repellent plants',
      'Permethrin-based barrier spray',
      'Bifenthrin pest control',
      'Health Canada-approved pesticides',
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
      'Pet-safe mosquito spray',
      'Child-safe pest control',
      'Eco-friendly mosquito control',
    ],
  }
}
