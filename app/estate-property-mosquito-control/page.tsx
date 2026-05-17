import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import InlineYardRiskCTA from '@/components/InlineYardRiskCTA'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema, howToSchema } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

const SLUG = '/estate-property-mosquito-control'

const FAQS = [
  {
    question: 'How is estate property mosquito control different from standard residential treatment?',
    answer: "Estate property treatment is fundamentally different from a standard suburban application in three ways: (1) Equipment — we use commercial-grade backpack misters and ATV-mounted units rather than handheld sprayers, allowing us to cover 1-5 acre properties efficiently. (2) Application zones — instead of treating a single perimeter, we create multiple treated zones around outdoor living areas, pool decks, gazebos, and treelines. (3) Pricing — estate treatments are quoted by acreage and start from $200-$500 per visit depending on lot size and feature density (vs. $99 for a standard sub-10,000 sq ft lot). Most estate clients book 5-10 treatments per season for continuous protection from May through September.",
  },
  {
    question: 'Do you service Caledon, Kleinburg, King City, and the Oak Ridges Moraine?',
    answer: 'Yes. BuzzSkito specializes in estate properties across Caledon (Bolton, Caledon East, Inglewood, Belfountain, Palgrave), Kleinburg, King Township (King City, Nobleton, Schomberg, Kettleby), the Oak Ridges Moraine, the Forks of the Credit corridor, and large estate properties in Halton Hills, Milton, north Oakville, and Mississauga\'s lakefront/Mississauga Road corridor. These areas have unique mosquito and tick pressure profiles due to mature forest cover, water features, conservation land proximity, and Oak Ridges Moraine hydrology — they require more treatments per season than typical urban lots.',
  },
  {
    question: 'How much does mosquito spray cost for a 2-acre property in the GTA?',
    answer: "A 2-acre estate property in the GTA typically runs $250-$375 per single treatment, with full-season programs (5-10 treatments May-September) ranging from $1,500-$3,500 depending on feature density (pool, pond, mature woodlot, multiple outdoor living areas). We provide a free no-obligation site visit and written quote — pricing is based on the actual treated acreage (not just lot size), feature count, and desired treatment frequency. Estate clients typically receive volume pricing on multi-treatment seasonal packages.",
  },
  {
    question: 'Can BuzzSkito treat my pond, water feature, or wetland edge?',
    answer: 'We treat the perimeter and surrounding vegetation around ponds, water features, and seasonal wet areas — but not the water itself. For active mosquito breeding in a pond, we use Health Canada-approved BTI (Bacillus thuringiensis israelensis) larvicide which is safe for fish, frogs, and pond ecology but lethal to mosquito larvae. The combination of barrier spray to surrounding vegetation + BTI in standing water is the most effective approach for estate properties with water features.',
  },
  {
    question: 'Do estate properties need tick treatment in addition to mosquito treatment?',
    answer: "Almost always yes. Estate properties typically have higher tick pressure than suburban homes due to four factors: (1) deer access (large properties = larger ranging area for white-tailed deer carrying ticks), (2) mature woodlot edges (prime blacklegged tick questing habitat), (3) leaf litter accumulation in landscape beds and forest edges, (4) proximity to conservation land or rural agricultural fringe. Our standard estate package combines mosquito and tick barrier treatment at the same visit — same vegetation surfaces, same equipment, complete protection. Tick add-on for estate properties typically runs $497-$997 for the full season (5 treatments).",
  },
  {
    question: "Are your treatments safe for horses, livestock, dogs, and kids playing on a large property?",
    answer: "Yes. We use Health Canada-approved formulas registered specifically for residential outdoor use. The product dries in approximately 30 minutes after which the property is fully safe for children, dogs, horses, livestock, and other animals. We coordinate application timing with our estate clients to ensure animals are temporarily relocated or stabled during the 30-minute drying window. Around horse paddocks, vegetable gardens, and fish ponds, we maintain documented buffer zones. Our technicians are licensed under the Ontario Pesticides Act for both Class 6 and structural extermination work.",
  },
  {
    question: "How quickly can BuzzSkito respond for a same-day estate property treatment before an event?",
    answer: "For confirmed estate clients, we maintain priority same-day or next-day scheduling for pre-event treatments (weddings, family gatherings, garden parties, charity events). Pre-event applications cost the same as standard scheduled treatments for existing clients. New clients can typically be onboarded with a same-week site visit and treatment, though 5-10 day advance booking is recommended during peak season (June-August). Call (289) 216-5030 for urgent estate scheduling.",
  },
  {
    question: 'Do you provide a written treatment record for property management or insurance purposes?',
    answer: "Yes. Estate clients receive a written treatment log after every visit including: date and time of application, technician name and licence number, products applied with batch numbers and Health Canada PCP numbers, treated zones with property map, weather conditions during application, and any property-specific observations (rising tick pressure, new water sources, etc.). This documentation is suitable for property management records, insurance, or for clients who want a defensible record of pest management activity.",
  },
]

export const metadata: Metadata = buildMetadata({
  title: 'Estate & Acreage Mosquito Control GTA · 1-10 Acre Properties · From $200',
  description: "Specialized mosquito and tick barrier spray for estate and acreage properties in the GTA. Caledon, Kleinburg, King City, Oak Ridges Moraine, large Oakville/Mississauga lots. Health Canada-approved, BuzzSkito Bite-Free Guarantee, 150+ five-star reviews. Call (289) 216-5030.",
  canonical: SLUG,
})

export default function EstatePropertyMosquitoControlPage() {
  const lbSchema = localBusinessSchema({ description: 'Specialized mosquito and tick barrier spray for estate and acreage residential properties across the Greater Toronto Area, including the Oak Ridges Moraine, Caledon, Kleinburg, King City, Halton Hills, and large lakefront estate corridors.' })
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: 'Estate Property Mosquito & Tick Control', description: 'Acreage mosquito barrier spray for 1-10 acre estate properties across the GTA.', slug: SLUG })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: 'Estate Property Mosquito Control', url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ service: 'mosquito' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(SLUG)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <span className="text-white">Estate &amp; Acreage</span>
          </nav>
          <p className="text-xs font-extrabold text-amber-400 uppercase tracking-widest mb-3">Specialized Service · 1-10 Acre Properties · GTA Estate Specialists</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight">
            Estate &amp; Acreage Mosquito Control GTA<br/>
            <span className="text-amber-400">From $200 · 150+ Five-Star Reviews</span>
          </h1>
          <p className="text-xl text-brand-100 max-w-3xl mb-8 leading-relaxed">
            Specialized mosquito and tick barrier spray for estate and acreage properties across the GTA. Commercial-grade equipment, multi-zone application, and seasonal programs designed for 1-10 acre lots in Caledon, Kleinburg, King City, the Oak Ridges Moraine, and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/free-yard-assessment" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get Estate Property Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-brand-900 text-white py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-200">
          <span>✓ Commercial-Grade Backpack Misters</span>
          <span>✓ Multi-Zone Treatment Strategy</span>
          <span>✓ Pond &amp; Water Feature Specialists</span>
          <span>✓ Written Treatment Records</span>
          <span>✓ 5-Star Rated · 150+ Reviews</span>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <section className="bg-amber-50 border-y-4 border-amber-300 py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-extrabold text-amber-700 uppercase tracking-wider mb-2">Quick Answer</p>
          <h2 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-3">How does mosquito control work on a 1+ acre estate property?</h2>
          <p className="text-base text-gray-800 leading-relaxed">
            <strong>Estate property mosquito control treats 1-10 acre lots through a multi-zone application strategy: barrier spray to perimeter vegetation, targeted treatment of outdoor living areas (pool decks, patios, gazebos, fire pits), perimeter treatment of mature woodlots and treelines, and BTI larvicide to ponds or seasonal standing water.</strong> A standard 1-acre property requires 60-90 minutes of application using a commercial-grade backpack mister, treats up to 25 distinct zones, and provides 21-30 days of residual protection per visit. Estate properties in Caledon, Kleinburg, King City, and Oak Ridges Moraine areas typically benefit from 5-10 treatments per season due to elevated mosquito and tick pressure from forest cover, water features, and deer activity. Pricing starts at $200 per treatment for 1-acre lots and scales by acreage and feature density.
          </p>
        </div>
      </section>

      {/* WHY ESTATE PROPERTIES NEED SPECIALIZED TREATMENT */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-3">Why estate properties need specialized treatment</h2>
          <p className="text-base text-gray-700 mb-8 max-w-3xl">Standard suburban mosquito treatment isn&rsquo;t designed for 1-10 acre properties. Three structural differences make estate work fundamentally different:</p>

          <div className="grid md:grid-cols-3 gap-5 mb-10">
            <div className="rounded-2xl bg-gradient-to-br from-amber-50 to-white border-2 border-amber-200 p-6">
              <p className="text-xs font-extrabold text-amber-700 uppercase tracking-wider mb-2">Difference 1</p>
              <h3 className="text-lg font-extrabold text-brand-900 mb-3">Equipment scale</h3>
              <p className="text-sm text-gray-700 leading-relaxed">A standard handheld sprayer covers ~5,000 sq ft of vegetation in 20 minutes. A 2-acre estate has 87,000 sq ft of vegetation. Estate work requires commercial-grade backpack misters and, for properties over 5 acres, ATV-mounted units that can deliver consistent application across the full property in a reasonable timeframe.</p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-amber-50 to-white border-2 border-amber-200 p-6">
              <p className="text-xs font-extrabold text-amber-700 uppercase tracking-wider mb-2">Difference 2</p>
              <h3 className="text-lg font-extrabold text-brand-900 mb-3">Multiple breeding sources</h3>
              <p className="text-sm text-gray-700 leading-relaxed">A suburban yard typically has one or two mosquito breeding sources (rain gutters, kid&rsquo;s pool). Estate properties commonly have 8-15: ornamental ponds, koi ponds, decorative fountains, woodland vernal pools, swale and ditch standing water, eaves of gazebos and pool houses, watering troughs, and seasonal flooded depressions. Each source needs to be addressed individually.</p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-amber-50 to-white border-2 border-amber-200 p-6">
              <p className="text-xs font-extrabold text-amber-700 uppercase tracking-wider mb-2">Difference 3</p>
              <h3 className="text-lg font-extrabold text-brand-900 mb-3">Higher tick pressure</h3>
              <p className="text-sm text-gray-700 leading-relaxed">Estate properties are essentially mini-conservation areas: mature trees, leaf litter, woodland margins, deer access, and proximity to natural corridors. Public Health Ontario tick surveillance consistently shows estate-corridor properties (Oak Ridges Moraine, Niagara Escarpment edge, Caledon hills) at 3-5x the tick density of urban lots. Tick treatment is essential, not optional.</p>
            </div>
          </div>

          <h2 className="text-2xl font-extrabold text-brand-900 mb-3">Areas we serve</h2>
          <p className="text-base text-gray-700 mb-4">BuzzSkito specializes in estate properties across the GTA&rsquo;s premium residential corridors. Each area has a distinct pressure profile we understand from 24+ months of property-by-property assessments:</p>

          <div className="grid md:grid-cols-2 gap-5 mb-10">
            <div className="rounded-xl bg-gray-50 border border-gray-200 p-5">
              <h3 className="text-lg font-extrabold text-brand-900 mb-2">🏞️ Oak Ridges Moraine</h3>
              <p className="text-sm text-gray-700 mb-2"><strong>Caledon, King City, Kleinburg, north Richmond Hill, parts of Aurora.</strong></p>
              <p className="text-sm text-gray-700">The Moraine&rsquo;s glacial topography creates persistent groundwater seeps, recharge ponds, and vernal pools that sustain mosquito breeding well into late summer. Public Health Ontario flags much of this corridor as Lyme-endemic. Most properties here benefit from 8-10 treatments per season.</p>
            </div>
            <div className="rounded-xl bg-gray-50 border border-gray-200 p-5">
              <h3 className="text-lg font-extrabold text-brand-900 mb-2">⛰️ Niagara Escarpment Edge</h3>
              <p className="text-sm text-gray-700 mb-2"><strong>Halton Hills, Milton, Burlington, Mount Nemo, Hilton Falls corridor.</strong></p>
              <p className="text-sm text-gray-700">Escarpment properties feature mature deciduous canopy and abundant deer habitat — both prime tick conditions. Properties within 1 km of escarpment trail systems consistently report the highest tick burden in the western GTA.</p>
            </div>
            <div className="rounded-xl bg-gray-50 border border-gray-200 p-5">
              <h3 className="text-lg font-extrabold text-brand-900 mb-2">🌳 Forks of the Credit Corridor</h3>
              <p className="text-sm text-gray-700 mb-2"><strong>Inglewood, Belfountain, Cheltenham, Caledon Village.</strong></p>
              <p className="text-sm text-gray-700">The upper Credit River and Forks corridor combines mature riparian forest with floodplain wetland habitat. Properties along the river or backing onto Conservation Halton land require dedicated water-feature treatment alongside barrier spray.</p>
            </div>
            <div className="rounded-xl bg-gray-50 border border-gray-200 p-5">
              <h3 className="text-lg font-extrabold text-brand-900 mb-2">🌲 Estate Lakefront &amp; Lakefront-Adjacent</h3>
              <p className="text-sm text-gray-700 mb-2"><strong>Mississauga Road corridor, Lorne Park, Bronte, Old Oakville, Burlington lakefront.</strong></p>
              <p className="text-sm text-gray-700">Lake Ontario humidity extends the mosquito season 1-2 weeks longer than inland properties. Lakefront and lake-adjacent estate properties typically need extended fall treatments through late September.</p>
            </div>
          </div>
        </div>
      </section>

      <InlineYardRiskCTA pretext="Free 60-second yard score · No obligation" />

      {/* PROCESS */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-3">Our estate property treatment process</h2>
          <p className="text-base text-gray-700 mb-8">Every estate engagement starts with a free site visit. We don&rsquo;t quote sight-unseen — every property is different and pricing depends on actual treated acreage, feature count, and access conditions.</p>
          <ol className="space-y-5">
            {[
              { n: 1, t: 'Free site visit & written quote', d: 'A licensed BuzzSkito technician walks the property with you, identifies treatment zones, documents water features, and provides a written quote with seasonal package options. Typically completed in 45-60 minutes. No obligation.' },
              { n: 2, t: 'First treatment scheduled', d: 'For confirmed clients, first treatment is typically scheduled within 5-7 days. May/June is peak season for first applications — book by mid-April for best scheduling availability.' },
              { n: 3, t: 'Multi-zone application', d: 'Our technician arrives with commercial-grade equipment, treats all identified zones (perimeter, woodlot edges, water-feature surroundings, outdoor living areas), and applies BTI larvicide to standing water sources. Treatment time: 60-180 minutes depending on property size.' },
              { n: 4, t: 'Written treatment log', d: 'After each visit, you receive a treatment log documenting application date, products used, zones treated, and any property-specific observations (e.g., rising tick pressure in a specific area, new water source identified).' },
              { n: 5, t: '21-30 day residual protection', d: 'Each treatment provides 21-30 days of residual protection. Subsequent visits are scheduled at 21-28 day intervals. Standard estate seasonal packages include 5-10 treatments from May through September.' },
              { n: 6, t: 'BuzzSkito Bite-Free Guarantee', d: 'If pests return inside the protection window of any treatment, we re-treat at no charge. Period. This applies to every estate engagement, every treatment, every visit.' },
            ].map(s => (
              <li key={s.n} className="flex gap-4 bg-white rounded-xl border border-gray-200 p-5">
                <span className="shrink-0 w-12 h-12 rounded-full bg-amber-500 text-white font-extrabold flex items-center justify-center text-xl">{s.n}</span>
                <div>
                  <h3 className="text-lg font-extrabold text-brand-900 mb-1">{s.t}</h3>
                  <p className="text-sm text-gray-700">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-brand-900 mb-3">Estate property pricing</h2>
          <p className="text-base text-gray-700 mb-8">Pricing scales by treated acreage and feature density. Below are typical ranges. Every property gets a custom quote — pricing reflects what your property actually requires, not what we can charge for it.</p>
          <div className="rounded-2xl border-2 border-gray-200 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <thead className="bg-brand-900 text-white">
                <tr>
                  <th className="text-left px-4 py-3 font-bold">Property Size</th>
                  <th className="text-left px-4 py-3 font-bold">Single Treatment</th>
                  <th className="text-left px-4 py-3 font-bold">Season (5-10 visits)</th>
                  <th className="text-left px-4 py-3 font-bold hidden sm:table-cell">Add Tick Protection</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-t border-gray-200"><td className="px-4 py-3 font-semibold">1 acre</td><td className="px-4 py-3">$200-$250</td><td className="px-4 py-3">$1,200-$2,000</td><td className="px-4 py-3 hidden sm:table-cell">+$497-$697</td></tr>
                <tr className="border-t border-gray-200 bg-gray-50"><td className="px-4 py-3 font-semibold">2 acres</td><td className="px-4 py-3">$250-$375</td><td className="px-4 py-3">$1,500-$3,500</td><td className="px-4 py-3 hidden sm:table-cell">+$697-$897</td></tr>
                <tr className="border-t border-gray-200"><td className="px-4 py-3 font-semibold">3-5 acres</td><td className="px-4 py-3">$375-$525</td><td className="px-4 py-3">$2,500-$5,000</td><td className="px-4 py-3 hidden sm:table-cell">+$897-$1,297</td></tr>
                <tr className="border-t border-gray-200 bg-gray-50"><td className="px-4 py-3 font-semibold">5-10 acres</td><td className="px-4 py-3">Custom quote</td><td className="px-4 py-3">Custom quote</td><td className="px-4 py-3 hidden sm:table-cell">Custom</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 italic">Pricing reflects 2026 season rates. Single treatments include up to 25 zones, written treatment log, and rain-back guarantee. Seasonal packages include 5-10 treatments, dedicated technician scheduling, and priority access for pre-event applications. No contracts — cancel anytime.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Frequently asked questions</h2>
          <div className="space-y-3">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-white rounded-xl border border-gray-200 group">
                <summary className="cursor-pointer px-5 py-4 font-bold text-brand-900 list-none flex justify-between items-start gap-3">
                  <span>{question}</span>
                  <span className="text-brand-700 group-open:rotate-180 transition shrink-0">▾</span>
                </summary>
                <p className="px-5 pb-5 text-sm text-gray-700 leading-relaxed">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Get your estate property quote" subtext="Free site visit · Written quote within 24 hours · No obligation" />
    </>
  )
}
