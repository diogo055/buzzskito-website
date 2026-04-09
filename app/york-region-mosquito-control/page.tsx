import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS, TICK_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito & Tick Control York Region | BuzzSkito',
  description:
    'Mosquito control in York Region. Serving Vaughan, Richmond Hill, Markham & all cities. From $99, no contracts. Call (289) 216-5030.',
  canonical: '/york-region-mosquito-control',
})

const CITIES = [
  { name: 'Vaughan', mosquitoSlug: '/vaughan-mosquito-control', tickSlug: '/vaughan-tick-spray' },
  { name: 'Richmond Hill', mosquitoSlug: '/richmond-hill-mosquito-control', tickSlug: '/richmond-hill-tick-spray' },
  { name: 'Markham', mosquitoSlug: '/markham-mosquito-control', tickSlug: '/markham-tick-spray' },
  { name: 'Thornhill', mosquitoSlug: '/thornhill-mosquito-control', tickSlug: '/thornhill-tick-spray' },
  { name: 'Woodbridge', mosquitoSlug: '/woodbridge-mosquito-control', tickSlug: '/woodbridge-tick-spray' },
  { name: 'King City', mosquitoSlug: '/king-city-mosquito-control', tickSlug: '/king-city-tick-spray' },
  { name: 'Kleinburg', mosquitoSlug: '/kleinburg-mosquito-control', tickSlug: '/vaughan-tick-spray' },
]

const FAQS = [
  {
    question: 'Is York Region a high-risk area for ticks and mosquitoes?',
    answer: "Yes — York Region is one of Ontario's highest-risk areas for both mosquitoes and blacklegged ticks. The Oak Ridges Moraine, which runs east–west through the northern tier of York Region (Richmond Hill, King City, Kleinburg, Whitchurch-Stouffville), is confirmed blacklegged tick habitat monitored annually by York Region Public Health. The Humber River valley (Vaughan, Woodbridge, Kleinburg) and Don River headwaters (Richmond Hill, Markham) create extensive mosquito breeding habitat throughout the region. Homeowners in York Region face a longer active season and higher pest pressure than most of the GTA.",
  },
  {
    question: 'Which York Region cities have the highest tick risk?',
    answer: "The highest tick activity in York Region is found near the Oak Ridges Moraine: King City, Kleinburg, Nobleton, and northern Richmond Hill face the most direct annual exposure. Vaughan and Woodbridge are also high-risk due to the Humber River valley and Boyd Conservation Area. York Region Public Health issues annual tick risk advisories for these communities, recommending tick bite prevention measures including professional yard treatment.",
  },
  {
    question: 'Does BuzzSkito serve all York Region communities?',
    answer: "Yes. BuzzSkito serves all York Region communities including Vaughan, Woodbridge, Kleinburg, Maple, Concord, Richmond Hill, Markham, Thornhill, King City, Nobleton, and Schomberg. We also cover the surrounding areas of Caledon, Brampton, North York, Etobicoke, and Scarborough. Call (289) 216-5030 to confirm service at your specific address.",
  },
  {
    question: 'Can I bundle mosquito and tick control in York Region?',
    answer: "Yes. Many York Region homeowners — especially those near the Oak Ridges Moraine, Humber River valley, or Don River headwaters — bundle mosquito and tick control in a single visit. The same professional barrier spray that eliminates mosquitoes also kills blacklegged ticks at all life stages. Bundling both services means one visit covers your entire yard protection needs from May through September.",
  },
  {
    question: 'When should York Region homeowners start mosquito and tick treatments?',
    answer: "For mosquito control, start in early May — mosquitoes begin emerging in York Region once temperatures consistently exceed 10°C, typically in late April or early May. For tick control, the highest-risk period for nymph ticks (the most dangerous stage for Lyme disease transmission) is May through July, with a second adult tick activity peak in September–October. We recommend a first tick treatment in late May or June and a second in August or September.",
  },
]

export default function YorkRegionMosquitoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: 'Mosquito & Tick Control York Region', description: 'Professional mosquito and tick barrier spray service across York Region, Ontario.', slug: '/york-region-mosquito-control' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: 'York Region', url: '/york-region-mosquito-control' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/york-region-mosquito-control')) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <span className="text-white">York Region</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">
            Mosquito &amp; Tick Control<br />
            <span className="text-amber-400">Across York Region</span>
          </h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            The Oak Ridges Moraine, Humber River valley, and Don River headwaters make York Region one of Ontario&apos;s highest-risk areas for both mosquitoes and blacklegged ticks. BuzzSkito serves every York Region community with professional barrier spray.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto prose-brand">
          <h2>Why York Region Has Some of Ontario&apos;s Highest Tick and Mosquito Risk</h2>
          <p>York Region sits at the intersection of three major natural systems that drive pest pressure throughout the GTA. The Oak Ridges Moraine — one of Ontario&apos;s most significant ecological features — runs east–west through the northern tier of York Region, providing the forested upland habitat, extensive wetlands, and wildlife corridors that support large deer populations. Deer are the primary host for adult blacklegged ticks, and the Moraine&apos;s deer population carries blacklegged ticks from confirmed tick habitat in King City, Kleinburg, and Richmond Hill into residential neighbourhoods throughout the region every season.</p>
          <p>The Humber River originates in the Oak Ridges Moraine and flows south through Vaughan, Woodbridge, and Kleinburg before continuing through Etobicoke to Lake Ontario. This continuous watershed corridor carries ticks from the Moraine into residential properties throughout Vaughan and provides extensive mosquito breeding habitat in the floodplain. The Don River headwaters originate in Richmond Hill and Markham, providing a second major mosquito source corridor on the eastern side of York Region.</p>
          <p>York Region Public Health monitors blacklegged ticks annually and issues public risk advisories for the Moraine communities and the Humber-Don corridor. The region&apos;s combination of mature conservation land, urban wildlife, and residential properties creates conditions where professional mosquito and tick control is not just a convenience — it&apos;s a meaningful health decision for families with children and pets who use the yard.</p>

          <h2>York Region Cities We Serve</h2>
          <div className="not-prose grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
            {CITIES.map((city) => (
              <div key={city.name} className="bg-brand-50 border border-brand-200 rounded-xl p-4">
                <div className="font-bold text-brand-900 mb-2">{city.name}</div>
                <div className="flex flex-col gap-1">
                  <Link href={city.mosquitoSlug} className="text-xs text-brand-700 hover:underline">Mosquito control →</Link>
                  <Link href={city.tickSlug} className="text-xs text-amber-700 hover:underline">Tick spray →</Link>
                </div>
              </div>
            ))}
          </div>
          <p>Also serving Maple, Concord, North Vaughan, Nobleton, Schomberg, and all rural King Township communities. Call <a href={BUSINESS.phoneHref} className="text-brand-700 hover:underline font-semibold">{BUSINESS.phone}</a> to confirm service at your specific address.</p>

          <h2>Oak Ridges Moraine Tick Risk</h2>
          <p>The Oak Ridges Moraine is the highest tick-risk environment in York Region. The Moraine&apos;s forested uplands, headwater wetlands, and meadow edges provide the exact combination of habitat that blacklegged ticks need to complete their three-stage life cycle: ground-level leaf litter and moisture for overwintering eggs and larvae, small mammal hosts (mice, voles, chipmunks) for larval and nymphal feeding, and deer for adult female feeding and reproduction. Properties in King City, Kleinburg, Nobleton, and northern Richmond Hill that back onto Moraine-adjacent conservation land carry the highest annual tick risk in York Region.</p>

          <h2>Our York Region Mosquito and Tick Service</h2>
          <ul>
            <li>Professional barrier spray applied to all vegetation, shrubs, fence lines, and canopy edges on your property</li>
            <li>Up to 30 days of protection per treatment — health Canada–approved formula safe for children and pets after 30-minute dry time</li>
            <li>Seasonal mosquito program: 5 treatments May through September</li>
            <li>Tick program: 2 strategic treatments targeting nymph emergence (late May/June) and adult activity (August/September)</li>
            <li>Bundle both services for complete yard protection in a single visit</li>
            <li>Free re-spray guarantee — if pests return within the protection window, we come back at no cost</li>
          </ul>
        </div>
      </section>

      <section aria-labelledby="york-region-guides" className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 id="york-region-guides" className="text-2xl font-extrabold text-brand-900 mb-6">Related Guides for York Region Homeowners</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="block bg-white border border-amber-200 rounded-xl p-5 hover:border-amber-400 transition-colors">
              <div className="text-xs font-bold text-amber-600 uppercase mb-1">Tick Control</div>
              <div className="font-bold text-brand-900">{TICK_BLOGS.pillar.title}</div>
            </Link>
            <Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="block bg-white border border-brand-200 rounded-xl p-5 hover:border-brand-400 transition-colors">
              <div className="text-xs font-bold text-brand-600 uppercase mb-1">Mosquito Control</div>
              <div className="font-bold text-brand-900">{MOSQUITO_BLOGS.pillar.title}</div>
            </Link>
            {TICK_BLOGS.supporting.slice(0, 2).map(b => (
              <Link key={b.slug} href={`/blog/${b.slug}`} className="block bg-white border border-amber-200 rounded-xl p-5 hover:border-amber-400 transition-colors">
                <div className="text-xs font-bold text-amber-600 uppercase mb-1">Tick Guide</div>
                <div className="font-bold text-brand-900">{b.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">FAQ – Mosquito &amp; Tick Control in York Region</h2>
          <div className="space-y-3">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-brand-50 rounded-xl border border-brand-100 group">
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

      <CTASection heading="Protect Your York Region Yard This Season" subtext="Free quote for mosquito and tick control. Serving all York Region communities." variant="dark" />
    </>
  )
}
