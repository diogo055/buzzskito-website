import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control Roseland Burlington | BuzzSkito',
  description:
    'Professional mosquito control spray for Roseland homes in Burlington. Mature tree canopy and Lake Ontario waterfront proximity create intense seasonal mosquito pressure. 30-day protection. Call (289) 216-5030.',
  canonical: '/roseland-mosquito-control',
})

const NEIGHBOURHOOD = 'Roseland'
const CITY = 'Burlington'
const SLUG = '/roseland-mosquito-control'

const FAQS = [
  {
    question: 'Why does Roseland have elevated mosquito activity?',
    answer: "Roseland is one of Burlington's most established lakeshore neighbourhoods, and its mosquito conditions reflect that setting. The Lake Ontario waterfront and Burlington Bay create a coastal mosquito environment with high humidity that sustains larger populations and extends evening activity compared to inland Burlington. Roseland's exceptional mature tree canopy — among the densest in Burlington — provides ideal daytime resting habitat for mosquitoes dispersing from the waterfront. Bronte Creek's southern reach also contributes pressure from the west side of the neighbourhood.",
  },
  {
    question: "Does Roseland's location near Lake Ontario make mosquitoes worse?",
    answer: "Yes, for two reasons. The waterfront vegetation along Burlington Bay and Lake Ontario provides breeding and resting habitat near the shore. More significantly, the coastal humidity microclimate elevates evening mosquito activity and extends it later into the night compared to inland areas. Roseland residents often notice that their evenings are more affected than those of neighbours in north Burlington, even when there are fewer obvious water sources nearby.",
  },
  {
    question: 'When is mosquito season in Roseland?',
    answer: "Roseland's mosquito season runs from late April through September or early October. The lake's moderating effect on local temperatures means both earlier spring emergence and later fall activity than inland Burlington. Peak pressure is from late May through August, with meaningful activity continuing into September near the waterfront.",
  },
  {
    question: 'How many treatments does a Roseland home need per season?',
    answer: "For waterfront or creek-adjacent Roseland properties, we recommend 4–5 treatments from May through September, spaced 21–28 days apart. The neighbourhood's mature tree canopy can extend effective mosquito resting habitat, making the full 5-treatment program a common recommendation for Roseland. Call (289) 216-5030 for a free assessment at your specific address.",
  },
  {
    question: 'Does BuzzSkito serve all of Roseland and Shoreacres?',
    answer: "Yes. We serve all Roseland and Shoreacres streets in Burlington, including those adjacent to the Lake Ontario waterfront. We also serve all surrounding Burlington neighbourhoods. Call (289) 216-5030 to confirm service at your specific address and book your free quote.",
  },
]

export default function RoselandMosquitoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: `${NEIGHBOURHOOD}, ${CITY}` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${NEIGHBOURHOOD}`, description: `Professional mosquito barrier spray for residential properties in ${NEIGHBOURHOOD}, ${CITY}.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: 'Burlington', url: '/burlington-mosquito-spray' }, { name: NEIGHBOURHOOD, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/roseland-mosquito-control')) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1 flex-wrap">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <Link href="/burlington-mosquito-spray" className="hover:text-white">Burlington</Link><span>/</span>
            <span className="text-white">{NEIGHBOURHOOD}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Mosquito Control in {NEIGHBOURHOOD}, {CITY}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Roseland's Lake Ontario waterfront proximity and exceptional mature canopy create some of Burlington's most intense mosquito conditions. BuzzSkito's professional barrier spray protects Roseland families all season.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>The Roseland Mosquito Environment</h2>
          <p>Roseland is one of Burlington's most coveted lakeshore addresses — and its mosquito conditions are a direct product of what makes it desirable. The Lake Ontario waterfront and Burlington Bay provide coastal mosquito habitat with the sustained humidity that keeps populations active through the summer evenings. Roseland's mature residential canopy — oaks, maples, and elms that in some cases predate the neighbourhood's development — creates the dense daytime resting habitat that allows arriving mosquitoes to persist within the neighbourhood between breeding cycles at the water's edge.</p>
          <p>BuzzSkito treats all resting surfaces on your Roseland property — shrubs, hedge lines, fence boundaries, and accessible undercanopy — creating a treated zone that eliminates arriving mosquitoes and provides up to 30 days of residual protection per visit.</p>

          <h2>Part of Our Burlington Mosquito Control Network</h2>
          <p>We serve all of Roseland and Shoreacres and surrounding Burlington. See our <Link href="/burlington-mosquito-spray" className="text-brand-700 hover:underline">Burlington mosquito control</Link> page for city-wide coverage, or our pages for <Link href="/aldershot-mosquito-control" className="text-brand-700 hover:underline">Aldershot</Link> and <Link href="/alton-village-mosquito-control" className="text-brand-700 hover:underline">Alton Village</Link>.</p>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
            <li><Link href="/blog/mosquito-control-near-water-ravines-gta" className="text-brand-700 hover:underline">Mosquito Control Near Water: Ravines &amp; Waterfront Properties</Link></li>
            <li><Link href="/blog/mosquito-tick-control-hamilton-burlington" className="text-brand-700 hover:underline">Hamilton &amp; Burlington Mosquito &amp; Tick Control Guide</Link></li>
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

      <CTASection heading={`Get a Free Mosquito Control Quote in ${NEIGHBOURHOOD}`} subtext="Protecting Roseland properties from waterfront mosquitoes. No contracts." />
    </>
  )
}
