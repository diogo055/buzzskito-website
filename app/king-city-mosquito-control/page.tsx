import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control King City | BuzzSkito – Rural Estate Mosquito Spray, King Township',
  description:
    'Professional mosquito spray in King City and King Township. Serving King City village, Nobleton, Schomberg, Kettleby & surrounding estate communities. Humber River tributaries, Oak Ridges Moraine, and rural ponds create intense seasonal pressure. Call (289) 216-5030.',
  canonical: '/king-city-mosquito-control',
})

const CITY = 'King City'
const SLUG = '/king-city-mosquito-control'
const TICK_SLUG = '/king-city-tick-spray'
const NEIGHBOURHOODS = ['King City village','Nobleton','Schomberg','King Township','Kettleby']
const FAQS = [
  {
    question: 'Why do King City estate properties deal with so many mosquitoes?',
    answer: "King City and the surrounding King Township estate corridor are particularly active mosquito areas for two reasons: lot size and landscape character. Large lots often include natural features — mature woodlots, low-wet areas, ornamental ponds, and farm ponds — that generate local breeding. At the same time, King Township's position on the Oak Ridges Moraine means groundwater seeps and spring-fed drainage features persist longer into dry periods than they would in lower-lying municipalities. The combination of large, naturalized properties and moraine hydrology creates sustained breeding conditions well into late summer.",
  },
  {
    question: 'Are Humber River tributaries a significant mosquito source in King Township?',
    answer: "Yes. Multiple Humber River tributaries originate in King Township and flow south through King City, Nobleton, and Schomberg before joining the main Humber system. These small streams, often flanked by riparian alder and willow scrub, maintain shallow backwater pools and slow-moving sections that are productive mosquito breeding habitat throughout May and June. Properties backing onto these tributaries in King City village or along rural roads in Kettleby and Schomberg see the earliest and most concentrated seasonal pressure.",
  },
  {
    question: 'Does the Holland Marsh area influence mosquito pressure in King Township?',
    answer: "The Holland Marsh — a large, low-lying agricultural muck land in the northern part of King Township — is one of the most significant regional mosquito source areas in York Region. The marsh&apos;s flat, wet character and agricultural ditching create extensive standing water that produces large numbers of mosquitoes in spring and early summer. Prevailing southerly winds can carry adults from the marsh into residential communities in Schomberg and northern King Township. This makes early-season treatment — especially a May application — particularly important for northern King Township homeowners.",
  },
]

export default function KingCityMosquitoPage() {
  const lbSchema = localBusinessSchema({ areaServed: CITY, description: `Professional mosquito control service in ${CITY} and King Township, Ontario. Barrier spray for residential and estate properties.` })
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${CITY}`, description: `Professional mosquito barrier spray for residential and estate properties in ${CITY}, Ontario.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: CITY, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/king-city-mosquito-control')) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <span className="text-white">{CITY}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Mosquito Control in {CITY}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            From Humber River tributaries through King City village to the Holland Marsh corridor near Schomberg — BuzzSkito delivers professional mosquito barrier spray for King Township estate properties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Why Mosquito Pressure Is High in King City and King Township</h2>
          <p>King Township occupies a uniquely challenging position in the York Region landscape. The southern portions of the municipality sit on the Oak Ridges Moraine, where groundwater recharge creates persistent seeps, spring-fed ponds, and slow-draining depressions that hold water through dry periods when other breeding sites have evaporated. The northern portions border the Holland Marsh, one of Ontario&apos;s most productive mosquito source areas, where agricultural drainage infrastructure maintains standing water in an intensively managed wetland system throughout the growing season.</p>
          <p>Between the moraine ponds and the marsh influence, King Township estate properties — with their mature woodlots, private ponds, rural road ditches, and extensive natural landscaping — face a mosquito season that regularly extends from late April through late September. The Eaton Hall property area and surrounding estate lots on the King City village perimeter are among the most consistently active zones for early-season mosquito pressure in York Region.</p>

          <h2>King Township Communities We Serve</h2>
          <p>BuzzSkito provides mosquito control across King Township, including:</p>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => <span key={n} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full">{n}</span>)}
          </div>

          <h2>Our King City Mosquito Treatment Process</h2>
          <ul>
            <li><strong>Estate property assessment</strong> — We evaluate ponds, woodlots, riparian features, and low-wet areas specific to your King Township lot.</li>
            <li><strong>Full-yard barrier spray</strong> — All vegetation, shrub borders, ornamental plantings, fence lines, and tree understorey treated on every visit.</li>
            <li><strong>28-day residual protection</strong> — Health Canada–approved formula provides continuous coverage; safe for children, pets, and horses after a 30-minute dry time.</li>
            <li><strong>Rural-adapted scheduling</strong> — We accommodate larger lots, gated properties, and multi-building estate complexes throughout King Township.</li>
          </ul>

          <h2>Also Providing Tick Control in King City</h2>
          <p>King Township consistently reports among the highest blacklegged tick activity rates in York Region. Forest edges, agricultural hedgerows, and the Oak Ridges Moraine location make tick exposure a serious concern for homeowners and anyone using the property. Ask about our <Link href={TICK_SLUG} className="text-brand-700 hover:underline">King City tick spray service</Link> — for estate properties, combining both treatments is strongly recommended.</p>

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

      <CTASection heading={`Get a Free Mosquito Control Quote in ${CITY}`} subtext="Protect your King City estate property from mosquitoes this season. No contracts." />
    </>
  )
}
