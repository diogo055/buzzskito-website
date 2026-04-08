import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control Glen Abbey Oakville | BuzzSkito',
  description:
    'Professional mosquito control spray for Glen Abbey homes in Oakville. Bronte Creek and ravine corridors create intense seasonal mosquito pressure. 30-day protection. Call (289) 216-5030.',
  canonical: '/glen-abbey-mosquito-control',
})

const NEIGHBOURHOOD = 'Glen Abbey'
const CITY = 'Oakville'
const SLUG = '/glen-abbey-mosquito-control'

const FAQS = [
  {
    question: 'Why does Glen Abbey have significant mosquito activity?',
    answer: "Glen Abbey sits alongside the Bronte Creek valley — one of the most active mosquito corridors in Oakville. The creek's permanent flow, adjacent floodplain vegetation, and the conservation area upstream sustain large mosquito populations from May through September. Glen Abbey's internal ravines (which give the community its name) add secondary corridors that disperse populations from the creek into interior streets. Properties backing onto any ravine edge or within 600 metres of Bronte Creek face the most consistent pressure.",
  },
  {
    question: 'Are the ravines within Glen Abbey also a mosquito source?',
    answer: "Yes. The ravine trail system running through Glen Abbey — a major feature of the neighbourhood — provides ideal conditions for mosquito resting and breeding. Shaded, humid ravine bottoms with any seasonal standing water or wet vegetation become breeding sites. Even if ravines don't have standing water, they provide the sheltered resting habitat that allows mosquito populations from Bronte Creek to persist within the neighbourhood between breeding cycles.",
  },
  {
    question: 'How many treatments does a Glen Abbey home need?',
    answer: "For ravine-adjacent or creek-proximate Glen Abbey properties, we recommend 4–5 treatments spaced 21–28 days apart from May through September. Interior properties further from the ravine system may be well-served by 3–4 visits. Call (289) 216-5030 for a free assessment tailored to your specific address.",
  },
  {
    question: 'When is mosquito season in Glen Abbey?',
    answer: "Glen Abbey's mosquito season typically runs from late April through September, with peak activity from late May through July. The Bronte Creek corridor can support earlier emergence than inland areas — activity sometimes beginning in mid-April in warm years. The sheltered ravine microclimate extends late-season activity into September.",
  },
  {
    question: 'Does BuzzSkito serve all of Glen Abbey?',
    answer: "Yes. We serve all Glen Abbey streets including those adjacent to the Bronte Creek valley and the internal ravine trail system. We also serve all surrounding Oakville neighbourhoods. Call (289) 216-5030 to confirm service at your specific address and get a free quote.",
  },
]

export default function GlenAbbeyMosquitoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: `${NEIGHBOURHOOD}, ${CITY}` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${NEIGHBOURHOOD}`, description: `Professional mosquito barrier spray for residential properties in ${NEIGHBOURHOOD}, ${CITY}.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: 'Oakville', url: '/oakville-mosquito-control' }, { name: NEIGHBOURHOOD, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/glen-abbey-mosquito-control')) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1 flex-wrap">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <Link href="/oakville-mosquito-control" className="hover:text-white">Oakville</Link><span>/</span>
            <span className="text-white">{NEIGHBOURHOOD}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Mosquito Control in {NEIGHBOURHOOD}, {CITY}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Glen Abbey's ravines and proximity to Bronte Creek create some of Oakville's most consistent seasonal mosquito pressure. BuzzSkito's professional barrier spray protects Glen Abbey families all season.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Glen Abbey's Ravine-Driven Mosquito Problem</h2>
          <p>Glen Abbey was designed around its ravine corridor — a landscape feature that creates the neighbourhood's distinctive character and its consistent mosquito challenge. Bronte Creek runs along the community's eastern boundary, providing a permanent, seasonally active breeding corridor. The internal ravine trails that wind through Glen Abbey extend this habitat into the neighbourhood itself, creating resting zones that allow populations to persist and disperse deep into residential areas.</p>
          <p>BuzzSkito treats all resting vegetation on your Glen Abbey property — shrubs, garden borders, fence lines adjacent to ravine edges, and any naturalized plantings — creating a protective barrier that eliminates arriving mosquitoes and provides up to 30 days of residual protection per treatment.</p>

          <h2>Part of Our Oakville Mosquito Control Network</h2>
          <p>We serve all of Glen Abbey and surrounding Oakville. See our <Link href="/oakville-mosquito-control" className="text-brand-700 hover:underline">Oakville mosquito control</Link> page for city-wide coverage, or our pages for <Link href="/bronte-mosquito-control" className="text-brand-700 hover:underline">Bronte</Link> and <Link href="/west-oak-trails-mosquito-control" className="text-brand-700 hover:underline">West Oak Trails</Link>.</p>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
            <li><Link href="/blog/mosquito-control-near-water-ravines-gta" className="text-brand-700 hover:underline">Mosquito Control Near Water: Ravines &amp; Waterfront Properties</Link></li>
            <li><Link href="/blog/is-mosquito-spray-safe-kids-pets" className="text-brand-700 hover:underline">Is Mosquito Spray Safe for Kids and Pets?</Link></li>
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

      <CTASection heading={`Get a Free Mosquito Control Quote in ${NEIGHBOURHOOD}`} subtext="Protecting Glen Abbey properties from ravine and creek mosquitoes. No contracts." />
    </>
  )
}
