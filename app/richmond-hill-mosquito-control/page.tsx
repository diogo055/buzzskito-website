import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control Richmond Hill | BuzzSkito – Lake Wilcox to Mill Pond Protection',
  description:
    'Mosquito control in Richmond Hill, ON. Professional barrier spray from $99. No contracts. Call (289) 216-5030.',
  canonical: '/richmond-hill-mosquito-control',
})

const CITY = 'Richmond Hill'
const SLUG = '/richmond-hill-mosquito-control'
const TICK_SLUG = '/richmond-hill-tick-spray'
const NEIGHBOURHOODS = ['Oak Ridges','Jefferson','Bayview Hill','Mill Pond','Langstaff','Crosby','Doncrest','North Richvale']
const FAQS = [
  {
    question: 'How much does mosquito control cost in Richmond Hill?',
    answer: 'BuzzSkito mosquito treatments in Richmond Hill start from $99 per application. Properties near Lake Wilcox, Jefferson Forest, or Mill Pond typically benefit most from the full seasonal program for continuous protection. No contracts — book a single visit or a full season. Call (289) 216-5030 for a free Richmond Hill quote.',
  },
  {
    question: 'Does living near Lake Wilcox mean more mosquitoes?',
    answer: "Yes. Lake Wilcox in Oak Ridges has extensive shallow marshy margins and weedy shoreline habitat that produces significant numbers of mosquitoes each season, particularly in May and June. Properties within a few blocks of the lake consistently see earlier and heavier mosquito activity. A May treatment timed to the first adult emergence significantly reduces the season-long population on your property.",
  },
  {
    question: 'Is the Mill Pond area particularly bad for mosquitoes?',
    answer: "Richmond Hill's Mill Pond and its surrounding park system create consistent breeding habitat along the creek corridor that feeds it. The shaded banks and slow-moving water allow mosquito larvae to develop through spring and early summer. Homes in the Mill Pond neighbourhood benefit from treatment of their back and side yards where trees create the cool, humid microclimate mosquitoes prefer for resting.",
  },
  {
    question: 'When is the best time to start mosquito treatments in Richmond Hill?',
    answer: "We recommend booking your first treatment in early to mid May. In Richmond Hill, the Oak Ridges Moraine influences local hydrology — snowmelt and spring rains fill moraine recharge ponds and vernal pools along trail corridors, allowing mosquitoes to breed earlier than in lower-lying communities. Getting ahead of the first emergence means far fewer mosquitoes to deal with all season.",
  },
]

export default function RichmondHillMosquitoPage() {
  const lbSchema = localBusinessSchema({ areaServed: CITY, description: `Professional mosquito control service in ${CITY}, Ontario. Barrier spray for residential lawns serving all ${CITY} neighbourhoods.` })
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${CITY}`, description: `Professional mosquito barrier spray for residential properties in ${CITY}, Ontario.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: CITY, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/richmond-hill-mosquito-control')) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <span className="text-white">{CITY}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Mosquito Control in {CITY}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            From Lake Wilcox in Oak Ridges to Mill Pond&apos;s creek corridor — BuzzSkito delivers professional mosquito barrier spray across all Richmond Hill neighbourhoods.
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
          <h2>Why Mosquito Pressure Is High in Richmond Hill</h2>
          <p>Richmond Hill sits at a uniquely challenging intersection of natural systems. The southern edge of the Oak Ridges Moraine runs directly through the northern part of the city, feeding countless springs, vernal pools, and stream headwaters — including the Rouge River headwaters in Jefferson and Phyllis Rawlinson Park. These moraine-fed water bodies warm up quickly in spring, triggering early mosquito emergence well before lower-elevation communities in the GTA see significant activity.</p>
          <p>Closer to the urban core, Lake Wilcox in Oak Ridges and Richmond Hill&apos;s Mill Pond are two of York Region&apos;s most prominent recreational water bodies — and both sustain active mosquito populations along their shorelines. The trail network connecting these features, including the Oak Ridges Moraine trail corridor, creates a continuous strip of shaded, moist habitat that keeps mosquitoes well-fed and well-hidden throughout the season.</p>

          <h2>Richmond Hill Neighbourhoods We Serve</h2>
          <p>BuzzSkito provides mosquito control across all Richmond Hill communities, including:</p>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => <span key={n} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full">{n}</span>)}
          </div>

          <h2>Our Richmond Hill Mosquito Treatment Process</h2>
          <ul>
            <li><strong>Property walk-through</strong> — We assess moraine drainage, pond proximity, tree canopy, and any standing water unique to your lot.</li>
            <li><strong>Full-yard barrier application</strong> — Every shrub, hedge, garden bed, and tree understorey treated to eliminate resting and breeding adults.</li>
            <li><strong>28-day residual coverage</strong> — Health Canada–approved formula protects continuously, safe for kids and pets once dry (30 minutes).</li>
            <li><strong>Seasonal program</strong> — Five visits May through September, adjusted to local emergence timing on the Moraine.</li>
          </ul>

          <h2>Also Providing Tick Control in Richmond Hill</h2>
          <p>The Oak Ridges Moraine is one of Ontario&apos;s highest-density zones for blacklegged tick activity, and that risk extends directly into Richmond Hill&apos;s Oak Ridges and Jefferson neighbourhoods. Ask about our <Link href={TICK_SLUG} className="text-brand-700 hover:underline">Richmond Hill tick spray service</Link> — most homeowners near the Moraine trails bundle both treatments for complete yard protection.</p>

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

      <CTASection heading={`Get a Free Mosquito Control Quote in ${CITY}`} subtext="Protect your Richmond Hill property from mosquitoes this season. No contracts." />
    </>
  )
}
