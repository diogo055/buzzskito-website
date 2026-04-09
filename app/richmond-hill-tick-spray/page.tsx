import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, TICK_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Tick Spray Richmond Hill | BuzzSkito – Free Quotes',
  description:
    'Professional tick spray in Richmond Hill. Oak Ridges Moraine is one of Ontario\'s highest-density blacklegged tick zones. Serving Oak Ridges, Jefferson, Bayview Hill & all Richmond Hill. Call (289) 216-5030.',
  canonical: '/richmond-hill-tick-spray',
})

const CITY = 'Richmond Hill'
const NEIGHBOURHOODS = ['Oak Ridges','Jefferson','Bayview Hill','Mill Pond','Langstaff','Crosby','Doncrest','North Richvale']
const FAQS = [
  {
    question: 'How much does tick spray cost in Richmond Hill?',
    answer: 'Tick spray in Richmond Hill starts from $99 per application. Properties near Lake Wilcox, Jefferson Forest, or the Oak Ridges Trail benefit most from both spring and fall applications. No contracts. Call (289) 216-5030.',
  },
  {
    question: 'Why is Richmond Hill considered high-risk for ticks?',
    answer: 'The Oak Ridges Moraine runs directly through Richmond Hill, and it is one of Ontario\'s most concentrated blacklegged tick habitats. Lake Wilcox shoreline, the Rouge River headwaters near Oak Ridges, and Mill Pond\'s surrounding wooded areas are all documented tick zones. York Region Public Health consistently flags Richmond Hill in its annual tick risk communications.',
  },
  {
    question: 'Are Lyme disease cases actually rising in Richmond Hill?',
    answer: 'Yes. York Region Public Health data shows a steady increase in confirmed Lyme disease cases across York Region, including Richmond Hill. The primary driver is the expanding blacklegged tick population on and near the Oak Ridges Moraine. Professional tick control for properties adjacent to natural areas significantly reduces family exposure.',
  },
  {
    question: 'When should I schedule tick spray for my Richmond Hill property?',
    answer: 'The first treatment should go down in late May or early June to catch the dangerous nymph stage — nymphs are tiny (poppy-seed sized) and responsible for most human Lyme disease cases. A second treatment in August or September targets fall adult ticks. Properties near the Moraine or Lake Wilcox should prioritize early-season treatment.',
  },
]

export default function RichmondHillTickPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Tick Spray ${CITY}`, description: `Professional tick barrier spray service in ${CITY}, Ontario. Kills ticks at all life stages.`, slug: '/richmond-hill-tick-spray', city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tick Control', url: '/tick-control' }, { name: CITY, url: '/richmond-hill-tick-spray' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/richmond-hill-tick-spray')) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/tick-control" className="hover:text-white">Tick Control</Link><span>/</span>
            <span className="text-white">{CITY}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Tick Control in {CITY}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            The Oak Ridges Moraine running through Richmond Hill is one of Ontario's highest-density blacklegged tick zones. BuzzSkito provides professional tick spray to protect your family from Lyme disease.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      {/* Pricing bar */}
      <section className="bg-amber-50 border-y border-amber-200 py-5 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <p className="font-extrabold text-brand-900 text-base">Tick Spray Pricing in {CITY}</p>
            <p className="text-gray-600 text-sm mt-0.5">Professional tick spray from <strong className="text-amber-700">$99</strong> per treatment · No contracts</p>
          </div>
          <Link href="/contact" className="shrink-0 bg-amber-500 hover:bg-amber-400 text-white font-bold px-6 py-2.5 rounded-full text-sm transition-colors">Get a Free Quote</Link>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Why Tick Spray Is Crucial in Richmond Hill</h2>
          <p>Richmond Hill is situated directly on the Oak Ridges Moraine — a glacially formed ridge of porous soils and dense forest that spans from the Niagara Escarpment to Northumberland County. For blacklegged ticks, this Moraine is ideal habitat: cool, moist leaf litter, abundant white-tailed deer hosts, and protected forest corridors. York Region Public Health has identified the Oak Ridges community in Richmond Hill as a persistently high-risk area for tick exposure, reporting rising Lyme disease case counts in the region year over year.</p>
          <p>Lake Wilcox in Oak Ridges is surrounded by shoreline vegetation that creates classic tick questing habitat. Mill Pond's wooded perimeter and the Rouge River headwaters area provide additional exposure corridors that extend right to the edges of residential properties. Unlike urban centres where ticks are confined to isolated ravines, Richmond Hill properties near the Moraine can have ticks active throughout the backyard during the full April-through-October season.</p>

          <h2>Tick Hotspots in Richmond Hill</h2>
          <ul>
            <li>Oak Ridges Moraine corridor — high-density blacklegged tick zone confirmed by York Region</li>
            <li>Lake Wilcox shoreline and surrounding natural areas (Oak Ridges)</li>
            <li>Rouge River headwaters — wooded tributary areas near Oak Ridges</li>
            <li>Mill Pond wooded perimeter (Richmond Hill town core)</li>
            <li>Jefferson Forest and adjacent residential lot edges</li>
          </ul>

          <h2>Richmond Hill Neighbourhoods We Serve for Tick Control</h2>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => <span key={n} className="text-sm bg-amber-50 border border-amber-200 text-amber-700 px-3 py-1.5 rounded-full">{n}</span>)}
          </div>

          <h2>What Our Richmond Hill Tick Treatment Includes</h2>
          <ul>
            <li>Barrier spray targeting lawn edges, leaf litter, garden beds, fence lines, under decks, and woodpiles</li>
            <li>Up to 30 days of tick protection per treatment</li>
            <li>Kills adult ticks, nymphs, and larvae on contact</li>
            <li>Health Canada–approved formula, safe for children and pets after 30 minutes</li>
            <li>Free reapplication guarantee if ticks return</li>
          </ul>

          <h2>Also Providing Mosquito Control in Richmond Hill</h2>
          <p>Many Richmond Hill homeowners combine tick and mosquito control in the same visit. See our <Link href="/richmond-hill-mosquito-control" className="text-brand-700 hover:underline">Richmond Hill mosquito control service</Link>.</p>

          <h2>Related Tick Control Guides</h2>
          <ul>
            <li><Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{TICK_BLOGS.pillar.title}</Link></li>
            {TICK_BLOGS.supporting.slice(0, 2).map(b => <li key={b.slug}><Link href={`/blog/${b.slug}`} className="text-brand-700 hover:underline">{b.title}</Link></li>)}
          </ul>
        </div>
      </section>

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">FAQ – Tick Spray in {CITY}</h2>
          <div className="space-y-3">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-white rounded-xl border border-brand-100 group">
                <summary className="cursor-pointer px-5 py-4 font-semibold text-brand-900 list-none flex justify-between items-center">
                  <span>{question}</span>
                  <svg className="w-5 h-5 shrink-0 group-open:rotate-180 transition-transform text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="px-5 pb-4 text-gray-600 text-sm">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <CTASection heading={`Get a Free Tick Spray Quote in ${CITY}`} subtext="Protect your family from Lyme disease. No contracts, guaranteed results." variant="dark" />
    </>
  )
}
