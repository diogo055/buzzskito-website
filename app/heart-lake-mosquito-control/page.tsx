import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control Heart Lake Brampton | BuzzSkito',
  description:
    'Mosquito control in Heart Lake, Brampton. Barrier spray near conservation area from $99. No contracts. Call (289) 216-5030.',
  canonical: '/heart-lake-mosquito-control',
})

const NEIGHBOURHOOD = 'Heart Lake'
const CITY = 'Brampton'
const SLUG = '/heart-lake-mosquito-control'

const FAQS = [
  {
    question: 'Why is Heart Lake so bad for mosquitoes?',
    answer: "Heart Lake gets its name from the lake at the heart of Heart Lake Conservation Area — and that same water feature is a primary mosquito breeding source for the neighbourhood. The conservation area's lake, wetlands, and naturalized vegetation sustain large mosquito populations from May through August that disperse into adjacent residential properties. Etobicoke Creek running south from the conservation area adds a secondary corridor of mosquito breeding habitat through the neighbourhood.",
  },
  {
    question: 'How close does your property need to be to Heart Lake Conservation Area to be affected?',
    answer: "Properties within 500 metres of the conservation area boundary experience the most intense pressure, but mosquitoes travel up to 3 km from breeding sites. The entire Heart Lake neighbourhood sees meaningful dispersal from the conservation area throughout the season. Properties backing onto any creek, drainage swale, or naturalized vegetation within the neighbourhood have above-average exposure beyond the conservation area effect.",
  },
  {
    question: 'When does mosquito season run in Heart Lake?',
    answer: "Heart Lake's mosquito season typically begins in late April or early May, with peak activity from late May through July. The conservation area's lake and wetlands can sustain breeding into September, making Heart Lake's season one of the longer ones in Brampton. Activity is most intense on calm, warm evenings from dusk through the early nighttime hours.",
  },
  {
    question: 'How many treatments does a Heart Lake home need?',
    answer: "For properties adjacent to or within the dispersal range of Heart Lake Conservation Area, we recommend 4–5 treatments from May through September. This maintains continuous barrier coverage through the full active season. Call (289) 216-5030 for a free assessment tailored to your specific Heart Lake address.",
  },
  {
    question: 'Does BuzzSkito serve all of Heart Lake?',
    answer: "Yes. We serve all Heart Lake streets including those adjacent to the conservation area boundary and Etobicoke Creek. We also serve all surrounding Brampton neighbourhoods. Call (289) 216-5030 to confirm availability and book your free quote.",
  },
]

export default function HeartLakeMosquitoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: `${NEIGHBOURHOOD}, ${CITY}` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${NEIGHBOURHOOD}`, description: `Professional mosquito barrier spray for residential properties in ${NEIGHBOURHOOD}, ${CITY}.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: 'Brampton', url: '/brampton-mosquito-control' }, { name: NEIGHBOURHOOD, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/heart-lake-mosquito-control')) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1 flex-wrap">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <Link href="/brampton-mosquito-control" className="hover:text-white">Brampton</Link><span>/</span>
            <span className="text-white">{NEIGHBOURHOOD}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Mosquito Control in {NEIGHBOURHOOD}, {CITY}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Heart Lake Conservation Area and Etobicoke Creek create sustained mosquito pressure for Heart Lake homes all season. BuzzSkito's professional barrier spray gives you up to 30 days of protection per treatment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Heart Lake Conservation Area and Mosquito Pressure</h2>
          <p>Heart Lake Conservation Area is one of Brampton's most valuable community assets — and one of the city's most significant mosquito source zones for adjacent residential properties. The conservation area's lake, interconnected wetlands, and naturalized shoreline vegetation provide exactly the conditions mosquitoes require: shallow standing water, emergent aquatic vegetation, and sheltered humidity that sustains breeding from late April through September.</p>
          <p>Etobicoke Creek flowing south from the conservation area extends this mosquito corridor deeper into the neighbourhood. BuzzSkito's barrier spray creates a treated zone around your Heart Lake property by targeting the resting vegetation where mosquitoes land when they move from these source areas into your lot. After a single treatment, up to 30 days of residual protection keeps your yard comfortable throughout that period.</p>

          <h2>Part of Our Brampton Mosquito Control Network</h2>
          <p>We serve all of Heart Lake and surrounding Brampton. See our <Link href="/brampton-mosquito-control" className="text-brand-700 hover:underline">Brampton mosquito control</Link> page for city-wide coverage, or our <Link href="/castlemore-mosquito-control" className="text-brand-700 hover:underline">Castlemore</Link> and <Link href="/springdale-mosquito-control" className="text-brand-700 hover:underline">Springdale</Link> pages for adjacent neighbourhood coverage.</p>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
            <li><Link href="/blog/mosquito-control-near-water-ravines-gta" className="text-brand-700 hover:underline">Mosquito Control Near Water: Ravines &amp; Waterfront Properties</Link></li>
            <li><Link href="/blog/hidden-mosquito-breeding-spots-backyard" className="text-brand-700 hover:underline">Hidden Mosquito Breeding Spots in Your GTA Backyard</Link></li>
          </ul>
        </div>
      </section>

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">FAQ – Mosquito Control in {NEIGHBOURHOOD}</h2>
          <div className="space-y-3">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-white rounded-xl border border-brand-100 group">
                <summary className="cursor-pointer px-5 py-4 font-semibold text-brand-900 list-none flex justify-between items-center">
                  <span>{question}</span>
                  <svg className="w-5 h-5 shrink-0 group-open:rotate-180 transition-transform text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-5 pb-4 text-gray-600 text-sm">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading={`Get a Free Mosquito Control Quote in ${NEIGHBOURHOOD}`} subtext="Protecting Heart Lake properties from conservation area mosquitoes. No contracts." />
    </>
  )
}
