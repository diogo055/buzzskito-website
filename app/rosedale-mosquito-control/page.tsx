import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control Rosedale Toronto | BuzzSkito',
  description:
    'Professional mosquito control spray for Rosedale homes. Don Valley ravines create intense mosquito pressure for ravine-adjacent properties. 30-day protection. Call (289) 216-5030.',
  canonical: '/rosedale-mosquito-control',
})

const NEIGHBOURHOOD = 'Rosedale'
const CITY = 'Toronto'
const SLUG = '/rosedale-mosquito-control'

const FAQS = [
  {
    question: 'Why do Rosedale properties have intense mosquito activity?',
    answer: "Rosedale sits directly above the Don Valley ravine system. The deep ravines bordering Rosedale — with their permanent streams, dense vegetation, and humid microclimate — are among the most productive mosquito breeding sites in Toronto. Mosquitoes from the valley rise into adjacent properties each evening, and Rosedale's mature tree canopy provides ideal daytime resting habitat that allows populations to persist.",
  },
  {
    question: 'Which parts of Rosedale are most affected?',
    answer: "South Rosedale properties with direct ravine views — particularly those on Rosedale Valley Road, Crescent Road, and the streets backing onto the Rosedale Valley Road ravine — face the most intense pressure. North Rosedale properties near Roxborough Street and the ravine trails also experience elevated activity, particularly in June and July.",
  },
  {
    question: 'How often does my Rosedale property need treatment?',
    answer: "For ravine-adjacent Rosedale properties, we recommend treatment every 21–28 days from May through September — typically 4–5 visits per season. This maintains continuous barrier coverage throughout the active window. Call (289) 216-5030 for a free assessment and recommended schedule for your specific property.",
  },
  {
    question: "Is BuzzSkito's treatment safe for Rosedale's older established properties?",
    answer: "Yes. Our Health Canada–approved formula is safe for established gardens, mature trees, and all ornamental plantings. We apply it to the resting surfaces mosquitoes use — leaf undersides and shrub foliage — not to flowering plants or bare soil. After a 30-minute drying period, the treated area is safe for children, pets, and garden wildlife.",
  },
  {
    question: 'Does BuzzSkito serve all Rosedale streets?',
    answer: "Yes. We serve both South Rosedale and North Rosedale in their entirety. We also serve all adjacent Toronto neighbourhoods including Moore Park, Forest Hill, Leaside, and Summerhill. Call (289) 216-5030 to confirm service availability at your address and book your free quote.",
  },
]

export default function RosedaleMosquitoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: `${NEIGHBOURHOOD}, ${CITY}` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${NEIGHBOURHOOD}`, description: `Professional mosquito barrier spray for residential properties in ${NEIGHBOURHOOD}, ${CITY}.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: 'Toronto', url: '/toronto-mosquito-control' }, { name: NEIGHBOURHOOD, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1 flex-wrap">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <Link href="/toronto-mosquito-control" className="hover:text-white">Toronto</Link><span>/</span>
            <span className="text-white">{NEIGHBOURHOOD}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Mosquito Control in {NEIGHBOURHOOD}, Toronto</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Rosedale's ravine-adjacent properties face some of Toronto's most intense mosquito pressure from the Don Valley. BuzzSkito provides professional 30-day barrier spray so Rosedale families can enjoy their gardens all season.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>The Rosedale Mosquito Problem</h2>
          <p>Rosedale's real estate desirability and its mosquito problem share the same root cause: the Don Valley ravine. The ravine creates the dramatic topography that makes Rosedale architecturally distinctive — and it sustains the mosquito populations that affect ravine-adjacent properties each summer. The valley's permanent streams, seasonal wet areas, dense vegetation, and sheltered microclimate combine to produce reliable, season-long mosquito breeding habitat directly adjacent to some of Toronto's most valuable residential properties.</p>
          <p>BuzzSkito's barrier spray program creates a protective layer around your property by treating the vegetation mosquitoes use as daytime resting sites. When they move from the valley into your yard and land on treated foliage, the barrier eliminates them and deters subsequent arrivals for up to 30 days.</p>

          <h2>Part of Our Toronto Mosquito Control Network</h2>
          <p>We serve all of Rosedale and surrounding neighbourhoods. See our <Link href="/toronto-mosquito-control" className="text-brand-700 hover:underline">Toronto mosquito control</Link> page, or our pages for <Link href="/forest-hill-mosquito-control" className="text-brand-700 hover:underline">Forest Hill</Link> and <Link href="/leaside-mosquito-control" className="text-brand-700 hover:underline">Leaside</Link>.</p>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
            <li><Link href="/blog/mosquito-control-near-water-ravines-gta" className="text-brand-700 hover:underline">Mosquito Control Near Water: Ravines &amp; Waterfront Properties</Link></li>
            <li><Link href="/blog/how-to-prevent-mosquitoes-in-your-backyard" className="text-brand-700 hover:underline">12 Ways to Prevent Mosquitoes in Your Backyard</Link></li>
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

      <CTASection heading={`Get a Free Mosquito Control Quote in ${NEIGHBOURHOOD}`} subtext="Protecting Rosedale properties from ravine mosquitoes. No contracts." />
    </>
  )
}
