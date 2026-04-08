import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control Scarborough | BuzzSkito – Highland Creek to Rouge Park',
  description:
    'Professional mosquito spray in Scarborough. Serving Guildwood, West Hill, Highland Creek, Rouge, Morningside & all Scarborough neighbourhoods. Rouge National Urban Park and Highland Creek valley drive peak mosquito pressure. Call (289) 216-5030.',
  canonical: '/scarborough-mosquito-control',
})

const CITY = 'Scarborough'
const SLUG = '/scarborough-mosquito-control'
const TICK_SLUG = '/scarborough-tick-spray'
const NEIGHBOURHOODS = ['Guildwood','West Hill','Highland Creek','Rouge','Malvern','Agincourt','Birchcliffe','Cliffside','Woburn','Morningside']
const FAQS = [
  {
    question: 'Does living near Rouge National Urban Park mean more mosquitoes?',
    answer: "Yes, substantially. The Rouge National Urban Park — Canada's first and largest national urban park — encompasses extensive Rouge River wetlands, forested floodplain, and meadow habitat that sustain some of the GTA's highest mosquito populations. Properties in the Rouge neighbourhood and West Hill that back onto the park boundary or Rouge River tributaries often deal with mosquito pressure from early May through late September. Professional barrier spray applied to your yard vegetation creates a treated buffer between the park and your outdoor living areas.",
  },
  {
    question: 'Is Highland Creek valley worse than other Scarborough ravines?',
    answer: "Highland Creek is one of Scarborough's most significant mosquito corridors. The valley runs through a wide, forested ravine from Morningside Park south to the lake, with slow-moving water, backwater pools, and seasonal flooding that produces active breeding habitat through the season. Neighbourhoods immediately adjacent to the valley — Highland Creek, Guildwood, and parts of West Hill — experience the most pressure. Morningside Park and Colonel Danforth Park, both of which adjoin the Highland Creek system, extend this pressure west into Malvern and Woburn.",
  },
  {
    question: 'How early does mosquito season start in Scarborough?',
    answer: "In Scarborough's river valley and ravine neighbourhoods, adult mosquitoes can emerge as early as late April in warm years, with the main season typically running from mid-May through mid-September. The Rouge River's warmer, slower-moving water sections warm up faster than the creek systems to the north, triggering early emergence near the park. Booking your first treatment in the first two weeks of May, before peak emergence, is the most effective strategy for east-end Scarborough homeowners.",
  },
]

export default function ScarboroughMosquitoPage() {
  const lbSchema = localBusinessSchema({ areaServed: CITY, description: `Professional mosquito control service in ${CITY}, Ontario. Barrier spray for residential lawns serving all ${CITY} neighbourhoods.` })
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${CITY}`, description: `Professional mosquito barrier spray for residential properties in ${CITY}, Ontario.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: CITY, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/scarborough-mosquito-control')) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <span className="text-white">{CITY}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Mosquito Control in {CITY}</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            From the Rouge National Urban Park boundary to Highland Creek valley — BuzzSkito delivers professional mosquito barrier spray to every Scarborough neighbourhood.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Why Mosquito Pressure Is High in Scarborough</h2>
          <p>Scarborough is home to some of the GTA&apos;s most ecologically rich — and mosquito-productive — landscapes. The eastern portion of the city borders Rouge National Urban Park, Canada&apos;s first national urban park, where the Rouge River winds through wetlands, forested floodplain, and marsh edges that sustain a continuous population of mosquitoes from May through September. The Highland Creek valley, another major ravine system running through the centre of Scarborough, provides additional breeding habitat from Morningside Park and Colonel Danforth Park all the way to the lake.</p>
          <p>For Scarborough homeowners in these valley-adjacent communities, the challenge isn&apos;t simply managing mosquitoes on a single property — it&apos;s the continuous influx of adults emerging from these nearby natural systems. Professional barrier spray applied to your yard&apos;s vegetation breaks this cycle by eliminating the resting adults that would otherwise spend the day on your hedges, shrubs, and fence lines before feeding at dusk.</p>

          <h2>Scarborough Neighbourhoods We Serve</h2>
          <p>BuzzSkito provides mosquito control across all Scarborough communities, including:</p>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => <span key={n} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full">{n}</span>)}
          </div>

          <h2>Our Scarborough Mosquito Treatment Process</h2>
          <ul>
            <li><strong>Valley proximity assessment</strong> — We identify ravine edges, creek proximity, and standing water that elevate your property&apos;s risk.</li>
            <li><strong>Full-yard barrier spray</strong> — Treatment of all vegetation, shrubs, fence lines, and tree understorey that border your outdoor living areas.</li>
            <li><strong>28-day residual protection</strong> — Health Canada–approved formula works continuously between visits; safe for kids and pets after 30 minutes.</li>
            <li><strong>Seasonal program</strong> — Five visits May through September, with timing aligned to Rouge River and Highland Creek emergence cycles.</li>
          </ul>

          <h2>Also Providing Tick Control in Scarborough</h2>
          <p>Scarborough&apos;s Rouge National Urban Park and Highland Creek valley are among the GTA&apos;s most active blacklegged tick habitats. Homeowners near the park boundary or valley edges face meaningful tick risk alongside mosquito pressure. Ask about our <Link href={TICK_SLUG} className="text-brand-700 hover:underline">Scarborough tick spray service</Link> — bundling both treatments provides complete yard protection.</p>

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

      <CTASection heading={`Get a Free Mosquito Control Quote in ${CITY}`} subtext="Protect your Scarborough property from mosquitoes this season. No contracts." />
    </>
  )
}
