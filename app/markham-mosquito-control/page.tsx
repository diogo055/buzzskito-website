import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control Markham | BuzzSkito – Rouge River to Toogood Pond Protection',
  description:
    'Mosquito control in Markham, ON. Professional barrier spray from $99. No contracts. Health Canada-approved. Call (289) 216-5030.',
  canonical: '/markham-mosquito-control',
})

const CITY = 'Markham'
const SLUG = '/markham-mosquito-control'
const TICK_SLUG = '/markham-tick-spray'
const NEIGHBOURHOODS = ['Unionville','Cornell','Milliken Mills','Berczy Village','Wismer','Angus Glen','Cathedraltown','Thornhill']
const FAQS = [
  {
    question: 'How much does mosquito control cost in Markham?',
    answer: 'BuzzSkito mosquito control in Markham starts from $99 per application. Properties near Rouge National Urban Park, Swan Lake, or any ravine corridor typically benefit most from the full seasonal package for continuous protection. No contracts. Call (289) 216-5030 for a free Markham quote.',
  },
  {
    question: 'Why do Unionville backyards have such a bad mosquito problem?',
    answer: "Unionville's Toogood Pond and the creek system flowing through the heritage village core create a natural mosquito nursery that is active from May through August. The mature tree canopy along Main Street Unionville and the adjacent park system retains moisture and provides ideal resting habitat for adult mosquitoes throughout the day. Homes backing onto the pond or within a few blocks of the creek typically benefit most from early-season barrier spray.",
  },
  {
    question: 'Does the Rouge National Urban Park affect mosquito pressure in Markham?',
    answer: "Significantly. Cornell and Cathedraltown are the Markham neighbourhoods closest to the Rouge National Urban Park boundary, and both experience elevated mosquito pressure due to their proximity to the Rouge River system and its associated wetlands. Milner Creek, which runs through central Markham, also contributes to breeding habitat for properties in Berczy Village and Wismer. Professional barrier spray on your property creates a treated buffer between these natural areas and your yard.",
  },
  {
    question: 'Is Swan Lake in Markham Village a source of mosquitoes?',
    answer: "Swan Lake and the Don River headwater tributaries running through Markham Village and Old Markham are active mosquito breeding sources through the early and mid season. The shallow margins of Swan Lake in particular warm quickly in spring, producing an early surge of adult mosquitoes before many homeowners have scheduled their first treatment. We recommend Markham Village homeowners book their first visit in early May.",
  },
]

export default function MarkhamMosquitoPage() {
  const lbSchema = localBusinessSchema({ areaServed: CITY, description: `Professional mosquito control service in ${CITY}, Ontario. Barrier spray for residential lawns serving all ${CITY} neighbourhoods.` })
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${CITY}`, description: `Professional mosquito barrier spray for residential properties in ${CITY}, Ontario.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: CITY, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/markham-mosquito-control')) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <span className="text-white">{CITY}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Mosquito Control in {CITY}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            From Toogood Pond in Unionville to the Rouge River boundary in Cornell — BuzzSkito delivers professional mosquito barrier spray to every Markham neighbourhood.
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
            <p className="font-extrabold text-brand-900 text-base">Mosquito Control Pricing in {CITY}</p>
            <p className="text-gray-600 text-sm mt-0.5">Professional mosquito control from <strong className="text-brand-700">$99</strong> per treatment · No contracts</p>
          </div>
          <Link href="/contact" className="shrink-0 bg-amber-500 hover:bg-amber-400 text-white font-bold px-6 py-2.5 rounded-full text-sm transition-colors">Get a Free Quote</Link>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Why Mosquito Pressure Is High in Markham</h2>
          <p>Markham&apos;s geography makes it one of the GTA&apos;s most active mosquito municipalities. The city straddles the Rouge River system — one of Canada&apos;s largest urban river ecosystems — with wetland pockets and forested floodplain running from Cathedraltown in the north down through Cornell to the Rouge National Urban Park boundary. Milner Creek bisects central Markham, winding through Berczy Village and Wismer communities where maturing subdivision landscaping traps moisture along fence lines and garden borders.</p>
          <p>In historic Markham Village, the Don River headwater tributaries and Swan Lake sustain mosquito populations from early May, while Toogood Pond in Unionville draws mosquitoes into the creek valley park system throughout the peak season. For Markham homeowners, the combination of a broad river system, multiple pond features, and a dense mature tree canopy creates conditions that reward early, consistent barrier spray treatment.</p>

          <h2>Markham Neighbourhoods We Serve</h2>
          <p>BuzzSkito provides mosquito control across all Markham communities, including:</p>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => <span key={n} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full">{n}</span>)}
          </div>

          <h2>Our Markham Mosquito Treatment Process</h2>
          <ul>
            <li><strong>Yard assessment</strong> — We identify creek proximity, tree canopy, standing water, and conditions specific to your Markham lot.</li>
            <li><strong>Vegetation barrier spray</strong> — Full treatment of shrubs, hedges, fence lines, ornamental grasses, and tree understorey.</li>
            <li><strong>28-day residual protection</strong> — Health Canada–approved formula continues working between visits; safe for kids and pets after a 30-minute dry time.</li>
            <li><strong>Seasonal program</strong> — Five applications May through September, timed to match Markham&apos;s Rouge River and creek-driven emergence patterns.</li>
          </ul>

          <h2>Also Providing Tick Control in Markham</h2>
          <p>Markham&apos;s proximity to the Rouge National Urban Park and extensive forest edges along the Rouge River corridor create significant blacklegged tick exposure for homeowners in Cornell and Cathedraltown. Ask about our <Link href={TICK_SLUG} className="text-brand-700 hover:underline">Markham tick spray service</Link> — combining both treatments gives your property complete year-round protection.</p>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
            {MOSQUITO_BLOGS.supporting.slice(0, 2).map(b => <li key={b.slug}><Link href={`/blog/${b.slug}`} className="text-brand-700 hover:underline">{b.title}</Link></li>)}
          </ul>
        </div>
      </section>

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">FAQ – Mosquito Control in {CITY}</h2>
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

      <CTASection heading={`Get a Free Mosquito Control Quote in ${CITY}`} subtext="Protect your Markham property from mosquitoes this season. No contracts." />
    </>
  )
}
