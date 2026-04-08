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
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: `${title} | BuzzSkito` }],
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

export function localBusinessSchema(overrides: { areaServed?: string; description?: string } = {}) {
  return {
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
    sameAs: [BUSINESS.facebookUrl],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS.aggregateRating.ratingValue,
      bestRating: BUSINESS.aggregateRating.bestRating,
      ratingCount: BUSINESS.aggregateRating.ratingCount,
    },
  }
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
      priceCurrency: 'CAD',
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'PestControlService', name: BUSINESS.legalName, url: SITE_URL },
    },
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
    author: { '@type': 'Organization', name: BUSINESS.legalName, url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: BUSINESS.legalName,
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${opts.slug}` },
    inLanguage: 'en-CA',
    about: { '@type': 'Thing', name: 'Pest Control' },
  }
}

export function reviewSchema() {
  const reviews = [
    { author: 'Sarah M.', rating: 5, date: '2026-03-10', text: 'BuzzSkito treated our backyard in Mississauga and we noticed a huge difference immediately. No mosquitoes at our outdoor birthday party! The technician was professional and on time. Highly recommend.' },
    { author: 'James K.', rating: 5, date: '2026-02-28', text: 'We had a tick problem near our garden border in Oakville. BuzzSkito came out quickly, treated the whole yard, and gave us a detailed service log. Great experience and the kids can play outside again.' },
    { author: 'Priya R.', rating: 5, date: '2026-03-18', text: 'Called on a Tuesday, they were at my Brampton home by Thursday. The technician explained exactly what product they were using and why it\'s safe for our dog. Couldn\'t be happier with the results.' },
    { author: 'Mike T.', rating: 5, date: '2026-01-15', text: 'Second year using BuzzSkito for the season package. Consistent, reliable, and actually works. Our backyard in Burlington used to be unbearable by July — now we\'re out there every evening.' },
    { author: 'Linda C.', rating: 5, date: '2026-03-05', text: 'Very impressed with the SMS alerts before and after service. Our Toronto property backs onto a ravine so mosquitoes are a real issue — after the first treatment the difference was night and day.' },
  ]
  return {
    '@context': 'https://schema.org',
    '@type': 'PestControlService',
    '@id': `${SITE_URL}/#business`,
    name: BUSINESS.legalName,
    review: reviews.map(({ author, rating, date, text }) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: author },
      reviewRating: { '@type': 'Rating', ratingValue: rating, bestRating: 5 },
      datePublished: date,
      reviewBody: text,
      itemReviewed: { '@type': 'PestControlService', '@id': `${SITE_URL}/#business`, name: BUSINESS.legalName },
    })),
  }
}

// speakableSchema — marks key sections for Google AI / voice results.
// Pass the canonical path of the page (e.g. '/toronto-mosquito-control').
export function speakableSchema(path: string) {
  return {
    '@context': 'https://schema.org/',
    '@type': 'WebPage',
    '@id': `${SITE_URL}${path}#webpage`,
    url: `${SITE_URL}${path}`,
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
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}
