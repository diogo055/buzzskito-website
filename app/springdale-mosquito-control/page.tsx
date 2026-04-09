import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control Springdale Brampton | BuzzSkito',
  description:
    'Mosquito control in Springdale, Brampton. Barrier spray near stormwater ponds from $99. No contracts. Call (289) 216-5030.',
  canonical: '/springdale-mosquito-control',
})

const NEIGHBOURHOOD = 'Springdale'
const CITY = 'Brampton'
const SLUG = '/springdale-mosquito-control'

const FAQS = [
  {
    question: 'Why does Springdale have a mosquito problem?',
    answer: "Springdale is a newer north Brampton development, and like many planned communities in the area, it contains numerous stormwater management ponds. These ponds — built to manage drainage from impervious surfaces in the development — become active mosquito breeding sites each season. Springdale's ponds, combined with the tributary creek corridors running through the neighbourhood, provide the standing water that sustains local mosquito populations from May through September.",
  },
  {
    question: 'Are the stormwater ponds in Springdale a significant mosquito source?',
    answer: "Yes. Stormwater management ponds are among the most productive mosquito breeding sites in newer GTA developments. They maintain water year-round, have shallow margins that warm quickly in spring, and support the aquatic vegetation that provides mosquito larval habitat. The City of Brampton manages these ponds for drainage purposes, not mosquito control — making barrier spray on your property the most practical way to protect your home from pond-driven pressure.",
  },
  {
    question: 'When is mosquito season in Springdale?',
    answer: "Springdale's mosquito season typically runs from early May through September. The stormwater ponds warm quickly in spring and can produce early-season emergence, sometimes beginning in late April in warm years. Peak activity runs from late May through July. Populations remain active through September given the ponds' year-round water availability.",
  },
  {
    question: 'How many treatments does a Springdale home need per season?',
    answer: "For properties near stormwater ponds or creek corridors, we recommend 4 treatments from May through September. Properties directly adjacent to ponds may benefit from 5 treatments given sustained source proximity. Call (289) 216-5030 for a free assessment at your specific Springdale address.",
  },
  {
    question: 'Does BuzzSkito serve all of Springdale and Mount Pleasant?',
    answer: "Yes. We serve all Springdale and Mount Pleasant streets in north Brampton. We also serve all surrounding Brampton communities. Call (289) 216-5030 to confirm availability at your address and book your free quote.",
  },
]

export default function SpringdaleMosquitoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: `${NEIGHBOURHOOD}, ${CITY}` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${NEIGHBOURHOOD}`, description: `Professional mosquito barrier spray for residential properties in ${NEIGHBOURHOOD}, ${CITY}.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: 'Brampton', url: '/brampton-mosquito-control' }, { name: NEIGHBOURHOOD, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/springdale-mosquito-control')) }} />

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
            Springdale's stormwater ponds and creek corridors create reliable mosquito breeding habitat all season. BuzzSkito's barrier spray protects your home and family for up to 30 days per treatment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Why Springdale's Ponds Drive Mosquito Activity</h2>
          <p>Springdale exemplifies a pattern common across newer GTA developments: the same engineered stormwater ponds that make the neighbourhood's landscaping attractive and protect against flooding also function as reliable seasonal mosquito breeding sites. These ponds maintain water year-round, have shallow warming margins perfect for larval development in spring, and contain the aquatic vegetation structure that supports mosquito life cycles.</p>
          <p>The result is that many Springdale homeowners — particularly those with pond-facing backyards — experience unexpected mosquito pressure that wasn't present in their previous homes in older, non-pond neighbourhoods. BuzzSkito's barrier spray targets the resting vegetation on your property — the shrubs, fence lines, and garden borders where mosquitoes from the ponds land and rest before reaching your patio — eliminating the active population and providing up to 30 days of residual protection.</p>

          <h2>Part of Our Brampton Mosquito Control Network</h2>
          <p>We serve all of Springdale and north Brampton. See our <Link href="/brampton-mosquito-control" className="text-brand-700 hover:underline">Brampton mosquito control</Link> page for city-wide coverage, or our <Link href="/castlemore-mosquito-control" className="text-brand-700 hover:underline">Castlemore</Link> and <Link href="/fletcher-meadows-mosquito-control" className="text-brand-700 hover:underline">Fletcher's Meadows</Link> pages for adjacent neighbourhood coverage.</p>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
            <li><Link href="/blog/hidden-mosquito-breeding-spots-backyard" className="text-brand-700 hover:underline">Hidden Mosquito Breeding Spots in Your GTA Backyard</Link></li>
            <li><Link href="/blog/when-to-schedule-first-mosquito-treatment-ontario" className="text-brand-700 hover:underline">When to Book Your First Mosquito Treatment of the Season</Link></li>
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

      <CTASection heading={`Get a Free Mosquito Control Quote in ${NEIGHBOURHOOD}`} subtext="Protecting Springdale properties from pond-driven mosquitoes. No contracts." />
    </>
  )
}
