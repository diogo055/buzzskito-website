import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import CityHero from '@/components/CityHero'
import QuickAnswer from '@/components/QuickAnswer'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema, howToSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Vaughan Mosquito Control · From $99 · 150+ 5-Star Reviews',
  description:
    'Vaughan mosquito control from $99 · 150+ 5-star reviews, no contracts. Compare Vaughan companies on price & coverage. Free quote (289) 216-5030.',
  canonical: '/vaughan-mosquito-control',
})

const CITY = 'Vaughan'
const SLUG = '/vaughan-mosquito-control'
const TICK_SLUG = '/vaughan-tick-spray'
const NEIGHBOURHOODS: { name: string; href?: string }[] = [
  { name: 'Woodbridge', href: '/woodbridge-mosquito-control' },
  { name: 'Kleinburg', href: '/kleinburg-mosquito-control' },
  { name: 'Maple' },
  { name: 'Concord' },
  { name: 'Thornhill', href: '/thornhill-mosquito-control' },
  { name: 'Patterson' },
  { name: 'Vellore Village' },
  { name: 'Islington Woods' },
  { name: 'Sonoma Heights' },
]
const FAQS = [
  {
    question: 'Who is the best mosquito control company in Vaughan?',
    answer: 'Of the Vaughan providers compared on this page, BuzzSkito has the lowest published starting price ($99 per treatment), no contracts, and a 5.0 rating across 150+ Google reviews. Mosquito Man carries more cumulative reviews (900+) but sells seasonal contract programs, and LawnSavers (from $129 per treatment) suits homeowners already on its lawn-care plan. The right pick depends on whether you value price, flexibility, or a bundled lawn service. Call (289) 216-5030 for a free Vaughan quote.',
  },
  {
    question: 'How much does mosquito control cost in Vaughan?',
    answer: 'BuzzSkito mosquito treatments in Vaughan start from $99 per application. No contracts. Properties near Boyd Conservation Area, the Humber River, or the Kortright Centre for Conservation typically benefit most from the full seasonal package for continuous protection. Call (289) 216-5030 for a free Vaughan quote.',
  },
  {
    question: 'Why is mosquito pressure so intense near Boyd Conservation Area?',
    answer: "Boyd Conservation Area's Humber River floodplain, seasonal ponds, and dense forest understorey create ideal standing-water breeding habitat. Properties bordering Boyd or backing onto Humber River tributaries in Woodbridge and Islington Woods are typically among the first to see mosquitoes in spring and face the highest seasonal pressure. Professional barrier spray treats the vegetation buffer between your property and these natural areas.",
  },
  {
    question: 'Which Vaughan neighbourhoods need the most mosquito control?',
    answer: "Kleinburg estate properties with Humber River valley exposure, Woodbridge homes near the Humber, Maple properties along the East Don River corridor, and Thornhill backyards near the Bayview ravines see the highest mosquito pressure. Tick risk is elevated along those same green corridors and along the Oak Ridges Moraine edge, which is why many homeowners in these pockets book mosquito and tick treatment together.",
  },
  {
    question: 'Do the new Vellore Village and Patterson subdivisions have a mosquito problem?',
    answer: "Yes. New construction in Vellore Village and Patterson often includes engineered retention ponds, swales, and landscaped buffers that hold standing water — prime breeding habitat. Early-season treatment (May) is especially valuable for newer Vaughan homes where vegetation is maturing and pest pressure is still being established.",
  },
  {
    question: 'How many mosquito treatments does a Vaughan property need per season?',
    answer: "Most Vaughan homeowners benefit from five treatments spaced approximately 28 days apart, running from May through September. Properties directly adjacent to the Humber River, Black Creek headwaters, or Kortright Centre woods may benefit from a sixth application in peak July–August weeks.",
  },
  {
    question: 'Do you offer mosquito control in Woodbridge and the rest of Vaughan?',
    answer: "Yes. Woodbridge is one of our busiest Vaughan zones — its Humber River frontage and stormwater-pond networks drive heavy mosquito pressure. Our mosquito control in Woodbridge, Kleinburg, Thornhill, Maple, Concord, Vellore Village, and every other Vaughan community uses the same Health Canada-approved barrier spray, from $99 per treatment with no contract. Call (289) 216-5030 for a free Woodbridge or Vaughan quote.",
  },
  {
    question: 'Can I bundle Vaughan and King City tick control with my mosquito plan?',
    answer: "Yes. Vaughan and King City homeowners near Boyd Conservation Area, the Kortright Centre, and the Humber River valley — all confirmed blacklegged tick habitat — commonly bundle tick control with their mosquito plan for complete yard protection. Tick control is $597 for the season standalone (five sprays), or $497 when added to any mosquito plan, saving $100. Ask about bundling when you call (289) 216-5030.",
  },
]

export default function VaughanMosquitoPage() {
  const lbSchema = localBusinessSchema({ areaServed: CITY, description: `Professional mosquito control service in ${CITY}, Ontario. Barrier spray for residential lawns serving all ${CITY} neighbourhoods.` })
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${CITY}`, description: `Professional mosquito barrier spray for residential properties in ${CITY}, Ontario.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: CITY, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ service: 'mosquito', city: 'Vaughan' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/vaughan-mosquito-control', '2026-07-12')) }} />

      {/* Hero */}
      <CityHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Mosquito Control', href: '/mosquito-control' },
          { label: CITY },
        ]}
        title={<>Vaughan Mosquito Control</>}
        titleAccent={<>From $99 · 150+ Five-Star Reviews</>}
        subtitle={<>Vaughan&apos;s specialist barrier spray for Boyd Conservation, Humber River, and Kleinburg-area properties. Health Canada-approved, safe for kids and pets in 30 minutes, backed by the <strong className="text-amber-400">BuzzSkito Bite-Free Guarantee</strong>.</>}
        image="/spray-backyard.webp"
      />

      
      {/* Trust bar */}
      <section className="bg-brand-900 text-white py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-200">
          <span>✓ Health Canada–Approved Formula</span>
          <span>✓ Safe for Kids &amp; Pets (30 min dry)</span>
          <span>✓ Up to 30-Day Protection</span>
          <span>✓ Bite-Free Guarantee</span>
          <span>✓ 5-Star Rated · 150+ Reviews</span>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <QuickAnswer question="What is the best mosquito control company in Vaughan?">
        <p>
          <strong>BuzzSkito provides specialist mosquito barrier spray across all Vaughan neighbourhoods — Woodbridge, Kleinburg, Maple, Concord, Thornhill, Patterson, Vellore Village, Islington Woods, and Sonoma Heights.</strong> Treatments use Health Canada-approved formulations applied to vegetation and shrub interiors where mosquitoes rest. Single treatments start at <strong>$99</strong>, with seasonal programs available on quote. With <strong>150+ five-star Google reviews</strong>, no contracts, a 30-minute re-entry window, and the <strong>BuzzSkito Bite-Free Guarantee</strong>, Vaughan homeowners get reliable barrier spray for Humber River, Boyd Conservation, and stormwater-pond-adjacent properties. Call (289) 216-5030.
        </p>
      </QuickAnswer>

      {/* KEY FACTS */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Vaughan Mosquito Control Key Facts</h2>
          <div className="rounded-xl border border-navy-100 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Service area', 'All Vaughan neighbourhoods (Woodbridge, Kleinburg, Maple, Concord, Thornhill, Patterson, Vellore Village, Islington Woods, Sonoma Heights)'],
                  ['Specialization', 'Mosquito barrier spray for residential properties'],
                  ['Pricing', 'From $99 per treatment · seasonal programs available on quote'],
                  ['Treatment season', 'May through September (peak: late May–July)'],
                  ['Protection per visit', 'Up to 30 days residual'],
                  ['Re-entry time', '30 minutes after spray dries (kid and pet safe)'],
                  ['Recommended schedule', '4–5 treatments per season for Humber/conservation-area-adjacent properties'],
                  ['Highest pressure zones', 'Humber River corridor · Boyd Conservation Area · Kortright Centre · Vellore stormwater ponds'],
                  ['Booking lead time', 'Same-week service typical'],
                  ['Contract required', 'No — single treatments and seasonal programs both available'],
                  ['Guarantee', 'BuzzSkito Bite-Free Guarantee (free re-treatment in protection window)'],
                  ['Google reviews', '150+ reviews · 5.0 average · 0 negative'],
                  ['Phone', BUSINESS.phone],
                ].map(([k, v]) => (
                  <tr key={k} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-2.5 font-semibold text-brand-900 bg-gray-50 w-1/3">{k}</td>
                    <td className="px-4 py-2.5 text-gray-800">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing bar */}
      <section className="bg-amber-50 border-y border-amber-200 py-5 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <p className="font-extrabold text-brand-900 text-base">Mosquito Control Pricing in {CITY}</p>
            <p className="text-gray-600 text-sm mt-0.5">Professional mosquito control service from <strong className="text-brand-700">$99</strong> per treatment · No contracts</p>
          </div>
          <Link href="/free-yard-assessment" className="shrink-0 bg-amber-500 hover:bg-amber-400 text-white font-bold px-6 py-2.5 rounded-full text-sm transition-colors">Get a Free Quote</Link>
        </div>
      </section>

      
      {/* How It Works */}
      <section className="py-12 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <p className="kicker mb-3 text-center">Our Process</p>
          <h2 className="h2-display text-brand-900 mb-8 text-center">How BuzzSkito Mosquito Control Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Free Property Assessment', desc: 'We evaluate your property — identifying water features, dense vegetation, and mosquito pressure zones specific to your area.' },
              { step: '2', title: 'Professional Barrier Spray', desc: 'Our licensed technician applies Health Canada-approved formula to all vegetation, shrub interiors, leaf undersides, and fence lines using a precision backpack sprayer.' },
              { step: '3', title: '30-Day Protection Guarantee', desc: 'The barrier kills mosquitoes on contact and repels new ones for up to 30 days. If pests return within the window, we re-treat at no cost.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div className="w-14 h-14 bg-brand-800 text-white rounded-full flex items-center justify-center text-2xl font-extrabold mx-auto mb-4">{step}</div>
                <h3 className="font-bold text-brand-900 text-lg mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Why Mosquito Pressure Is High in Vaughan</h2>
          <p>Vaughan is threaded by some of York Region&apos;s most significant natural corridors. Boyd Conservation Area — Vaughan&apos;s largest green space — spans the Humber River floodplain through Woodbridge and Kleinburg, providing miles of shaded, moist riverbank and seasonal flooding that creates standing water for weeks after each rainfall. The Kortright Centre for Conservation adds another dense woodland block, and the Black Creek headwaters originate in Maple, running south through residential neighbourhoods before entering the Humber system.</p>
          <p>For Vaughan homeowners, this natural wealth translates to a long, intense mosquito season. Properties near Boyd, along the Humber, or backing onto the Woodbridge ponds network typically see mosquito activity from early May through late September — a full five-month season. Professional barrier spray applied to your yard&apos;s vegetation and shrub borders is the most reliable way to stay outside and enjoy your property all season.</p>

          <h2>Vaughan Neighbourhoods We Serve</h2>
          <p>BuzzSkito provides mosquito control across all Vaughan communities, including:</p>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map(({ name, href }) => href ? (
              <Link key={name} href={href} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full hover:bg-brand-100 transition-colors">{name}</Link>
            ) : (
              <span key={name} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full">{name}</span>
            ))}
          </div>

          <h2>Our Vaughan Mosquito Treatment Process</h2>
          <ul>
            <li><strong>Site assessment</strong> — We identify breeding zones, standing water issues, and high-canopy areas specific to your Vaughan property.</li>
            <li><strong>Full-yard barrier spray</strong> — Treatment of all vegetation, hedges, garden beds, fence lines, and tree understorey within your property.</li>
            <li><strong>28-day residual protection</strong> — Health Canada–approved formula works continuously between visits, safe for kids and pets after 30-minute dry time.</li>
            <li><strong>Seasonal scheduling</strong> — We track local conditions and recommend application windows timed to Vaughan&apos;s mosquito emergence cycle.</li>
          </ul>

          <h2>Also Serving Kleinburg</h2>
          <p>Kleinburg village — with its Humber River frontage and Oak Ridges Moraine edge — is one of York Region&apos;s highest-pressure mosquito and tick zones. See our dedicated <Link href="/kleinburg-mosquito-control" className="text-brand-700 hover:underline">Kleinburg mosquito control service</Link> for neighbourhood-specific information.</p>

          <h2>Woodbridge, Thornhill &amp; Maple</h2>
          <p>Woodbridge is Vaughan&apos;s largest and most mosquito-prone community — its Humber River frontage, Boyd Conservation edge, and dense stormwater-pond networks put most homes within flight range of a breeding site. Our <Link href="/woodbridge-mosquito-control" className="text-brand-700 hover:underline">mosquito control in Woodbridge</Link> covers West Woodbridge, Pine Valley, Vellore Village, and Sonoma Heights with the same barrier spray from $99. We also treat every <Link href="/thornhill-mosquito-control" className="text-brand-700 hover:underline">Thornhill</Link> street plus the Maple, Concord, and Patterson subdivisions — same crew, same Bite-Free Guarantee. The East Don River corridor through Maple and the Bayview ravine system behind Thornhill drive the same ravine-fed pressure as the Humber-side communities, so those streets are treated on the same schedule — and the tick risk along those corridors is why many of these homes bundle both services.</p>

          <h2>Also Providing Tick Control in Vaughan</h2>
          <p>Boyd Conservation Area, the Kortright Centre, and the Humber River valley are confirmed blacklegged tick habitat zones in York Region. If your property is near these areas, tick risk is real. Ask about our <Link href={TICK_SLUG} className="text-brand-700 hover:underline">Vaughan tick spray service</Link> — most homeowners bundle both treatments for complete yard protection. For the full local picture, read our guide to <Link href="/blog/tick-control-vaughan-king-city-woodbridge" className="text-brand-700 hover:underline">tick control across Vaughan, King City &amp; Woodbridge</Link>, and King City homeowners can book directly through our <Link href="/king-city-tick-spray" className="text-brand-700 hover:underline">King City tick spray service</Link>.</p>


          <h2>Pricing — Treatments from $99</h2>
          <p>BuzzSkito offers flexible pricing for every budget. No contracts, no cancellation fees.</p>
          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-800 text-white">
                  <th className="px-4 py-3 text-left">Plan</th>
                  <th className="px-4 py-3 text-left">Price</th>
                  <th className="px-4 py-3 text-left">Treatments</th>
                  <th className="px-4 py-3 text-left">Frequency</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200"><td className="px-4 py-3 font-semibold">Single Treatment</td><td className="px-4 py-3 font-extrabold text-brand-700">From $99</td><td className="px-4 py-3">1</td><td className="px-4 py-3">One-time</td></tr>
                <tr className="border-b border-gray-200 bg-gray-50"><td className="px-4 py-3 font-semibold">Basic Season</td><td className="px-4 py-3 font-extrabold text-brand-700">$549</td><td className="px-4 py-3">5</td><td className="px-4 py-3">Monthly (May–Sep)</td></tr>
                <tr className="border-b border-gray-200"><td className="px-4 py-3 font-semibold">Standard Season</td><td className="px-4 py-3 font-extrabold text-brand-700">$994</td><td className="px-4 py-3">10</td><td className="px-4 py-3">Every 2 weeks</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-semibold">Exclusive Season</td><td className="px-4 py-3 font-extrabold text-brand-700">$2,049</td><td className="px-4 py-3">20+</td><td className="px-4 py-3">Weekly</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 not-prose">Pricing is for standard residential lots up to 10,000 sq ft. Larger properties receive custom quotes. <Link href="/mosquito-control-pricing" className="text-brand-700 hover:underline">See full pricing details</Link> or <Link href="/free-yard-assessment" className="text-brand-700 hover:underline">get a free quote</Link>.</p>

          <h2 id="compare-vaughan-companies">How BuzzSkito Compares to Other Vaughan Mosquito Control Companies</h2>
          <p>Vaughan homeowners in Woodbridge, Kleinburg, Maple, Thornhill, and Concord have several professional options. Here is an honest side-by-side based on publicly available pricing, Google reviews, and Vaughan service offerings — no affiliate links, no paid placements.</p>
          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-800 text-white">
                  <th className="px-4 py-3 text-left">Company</th>
                  <th className="px-4 py-3 text-left">Starting Price</th>
                  <th className="px-4 py-3 text-left">Reviews</th>
                  <th className="px-4 py-3 text-left">Contracts</th>
                  <th className="px-4 py-3 text-left">Vaughan Coverage</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { company: 'BuzzSkito', price: 'From $99', reviews: '150+ (5.0★)', contracts: 'No contracts', area: 'All Vaughan' },
                  { company: 'Mosquito Man', price: 'Quote-based', reviews: '900+ (4.8★)', contracts: 'Seasonal', area: 'All Vaughan' },
                  { company: 'Mosquito.Buzz', price: 'Quote-based', reviews: 'Varies by franchisee', contracts: 'Seasonal', area: 'Franchise' },
                  { company: 'LawnSavers', price: 'From $129', reviews: '500+ combined', contracts: 'Seasonal', area: 'Vaughan' },
                ].map(({ company, price, reviews, contracts, area }) => (
                  <tr key={company} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-brand-800">{company}</td>
                    <td className="px-4 py-3 font-extrabold text-brand-700">{price}</td>
                    <td className="px-4 py-3 text-gray-600">{reviews}</td>
                    <td className="px-4 py-3 text-gray-600">{contracts}</td>
                    <td className="px-4 py-3 text-gray-600">{area}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 not-prose mb-8">Competitor figures reflect publicly available rates and review counts. Large Kleinburg and Maple estate lots price above the base rate with every provider — always confirm your tier before booking. Compare the whole region in our <Link href="/best-mosquito-control-companies-gta" className="text-brand-700 hover:underline">GTA-wide provider comparison</Link>.</p>

          <h3>What to Check Before Booking Any Vaughan Company</h3>
          <div className="not-prose grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { title: 'Licensed Applicator', desc: 'An Ontario Pesticide Applicator\'s Licence is mandatory for barrier spray. Ask to see it.' },
              { title: 'Health Canada PCP Registration', desc: 'Every product applied to your yard needs a valid PCP number — confirm it before booking.' },
              { title: 'Vaughan Coverage Confirmation', desc: 'Check they actually service Kleinburg, Maple, or Thornhill — some "GTA-wide" providers limit their Vaughan routes.' },
              { title: 'Large-Lot Pricing Tier', desc: 'Kleinburg and Maple estate lots run past the standard 10,000 sq ft band. Get the tier in writing upfront.' },
              { title: 'Re-Treatment Guarantee', desc: 'Ask whether a free re-spray is included if mosquitoes return inside the protection window. Ours is — the Bite-Free Guarantee.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-brand-50 rounded-xl p-5 border border-brand-100">
                <h4 className="font-bold text-brand-900 mb-2">{title}</h4>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>

          <h2>Why Professional Treatment Outperforms DIY</h2>
          <p>Citronella candles, essential oil sprays, and consumer foggers provide temporary relief in a small radius — typically 30 minutes to 2 hours in the immediate area of use. Professional barrier spray treats every resting surface on your entire property, creating a residual barrier that kills mosquitoes on contact for up to 30 days. The difference is coverage and duration: DIY products address symptoms; barrier spray addresses the source of activity on your lot.</p>
          <p>For a detailed comparison, see our <Link href="/mosquito-control-diy-vs-professional" className="text-brand-700 hover:underline">DIY vs Professional Mosquito Control</Link> guide.</p>

          <h2>When to Start Treatment</h2>
          <p>In the GTA, mosquito season typically runs from late April through September. The best time to book your first treatment is early-to-mid May, before populations peak. Starting early establishes a protective barrier before breeding cycles accelerate in June and July. <Link href="/blog/mosquito-season-gta-when-does-it-start" className="text-brand-700 hover:underline">Read our full seasonal timing guide</Link>.</p>


          <h2>Everything Vaughan Homeowners Ask About Mosquito Control</h2>

          <h3>How does the Humber River affect mosquitoes in my Vaughan yard?</h3>
          <p>The Humber River runs north-south through Vaughan and creates a continuous mosquito breeding corridor through Woodbridge, Kleinburg, and Islington Woods. Standing water in floodplain pools, slow-moving sections, and post-storm pools produces mosquitoes that disperse up to 3 km from emergence sites. Properties in Pine Valley, Sonoma Heights, Vellore Village, and West Woodbridge sit within that radius. Barrier spray treats your property &mdash; it doesn&apos;t fix the river source, but it stops mosquitoes from settling once they arrive.</p>

          <h3>Why is Boyd Conservation Area such a strong mosquito source?</h3>
          <p>Boyd Conservation Area&apos;s 235 hectares of Humber River floodplain, seasonal ponds, and dense forest understorey create ideal standing-water breeding habitat. Properties bordering Boyd or backing onto Humber River tributaries in Woodbridge and Islington Woods are typically among the first to see mosquitoes in spring and face the highest seasonal pressure. Professional barrier spray treats the vegetation buffer between your property and Boyd.</p>

          <h3>Does York Region or the City of Vaughan spray for mosquitoes?</h3>
          <p>No &mdash; neither does. York Region Public Health performs targeted larviciding of select catch basins for West Nile surveillance. The City of Vaughan maintains storm infrastructure. Neither program treats private yards. Yard-level mosquito control is the homeowner&apos;s responsibility.</p>

          <h3>How much does Vaughan mosquito control cost for a typical lot?</h3>
          <p>For a standard Vaughan residential lot under 6,000 sq ft: from $99 per single treatment. Larger Kleinburg, Maple, or estate-area properties require a custom quote based on coverage area. No contracts &mdash; book one treatment and decide whether to continue based on results.</p>

          <h3>Are stormwater ponds in Vellore Village and Patterson a mosquito problem?</h3>
          <p>Yes. New construction in Vellore Village, Patterson, and Sonoma Heights includes engineered retention ponds that hold water for filtration but also produce thousands of mosquitoes per pond per season. Properties within 500 metres of a stormwater pond experience consistent pressure. Barrier spray on your property is the most effective response since the pond itself is municipal land.</p>

          <h3>When should I book my first Vaughan mosquito treatment?</h3>
          <p>Mid-May for most properties. Properties adjacent to the Humber River, Boyd Conservation Area, Kortright Centre, or any stormwater pond benefit from an early-May start because populations begin emerging earlier in those microhabitats.</p>

          <h3>Why are Kleinburg and Pine Valley especially affected?</h3>
          <p>Kleinburg sits in the Humber River valley and is surrounded by conservation lands &mdash; McMichael Canadian Art Collection grounds, Bindertwine Park, and the Humber River corridor. Pine Valley borders Boyd Conservation Area and the Humber. Both communities have mature tree canopy and natural-area exposure that drive intense seasonal mosquito pressure.</p>

          <h3>Will mosquito spray harm fish in the Humber River?</h3>
          <p>The Health Canada-approved formula is applied to vegetation surfaces &mdash; never to water. Once dried (about 30 minutes), it bonds to leaves and does not leach into waterways. We maintain buffer zones around any riparian areas at your property line.</p>

          <h3>Can mosquitoes breed in my Vaughan rain barrel?</h3>
          <p>Yes. Uncovered rain barrels are one of the most productive backyard breeding sites in Vaughan. A single barrel can produce thousands of mosquitoes per week. Solutions: tight-fitting screen on the inlet, BTI mosquito dunks (sold at Canadian Tire and Home Depot &mdash; safe for fish, pets, humans), and emptying every 5–7 days during peak season.</p>

          <h3>Can BuzzSkito treat my Vaughan backyard before a wedding or party?</h3>
          <p>Yes &mdash; pre-event treatment is a common booking. We recommend the spray 2–4 days before your event. The barrier becomes fully active over 24 hours and continues for up to 30 days. For backyard weddings or large gatherings in Kleinburg, Maple, or Vellore Village, this timing window gives peak protection on event day.</p>

          <h3>What happens if it rains right after my Vaughan treatment?</h3>
          <p>Once dry (about 30 minutes), the formula bonds to leaf surfaces and becomes rain-resistant. If heavy rain falls within one hour of application &mdash; before the product cures &mdash; we return and re-treat at no charge. Part of the BuzzSkito Bite-Free Guarantee.</p>

          <h3>Does mosquito spray work against ticks in Vaughan too?</h3>
          <p>The same Health Canada-approved formula kills blacklegged ticks on contact, but tick control requires different application zones &mdash; the 1–3 ft transition zone where lawn meets woods and garden edges. Vaughan tick risk is significant &mdash; Boyd Conservation Area, Kortright Centre, and Humber River corridor are confirmed blacklegged tick habitat. Many Vaughan homeowners bundle our Vaughan tick spray with mosquito control.</p>

          {/* Related Guides */}

          <h2>Compare Vaughan Pest Control Options</h2>
          <p>Looking at all your Vaughan pest control options? See our specialist guide: <Link href="/pest-control-vaughan" className="text-brand-700 hover:underline font-semibold">Pest Control in Vaughan</Link> — explains why a mosquito and tick specialist beats a generalist for the two pests that actually drive Vaughan backyard misery. Comparing providers instead? Jump to our <a href="#compare-vaughan-companies" className="text-brand-700 hover:underline font-semibold">side-by-side comparison of Vaughan mosquito control companies</a> above.</p>
          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
            {MOSQUITO_BLOGS.supporting.slice(0, 2).map(b => <li key={b.slug}><Link href={`/blog/${b.slug}`} className="text-brand-700 hover:underline">{b.title}</Link></li>)}
          </ul>
        </div>
      </section>


      {/* Testimonials */}
      <section className="py-12 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <p className="kicker mb-3 text-center">Reviews</p>
          <h2 className="h2-display text-brand-900 mb-2 text-center">What GTA Homeowners Say</h2>
          <p className="text-center text-gray-500 text-sm mb-8">From our 150+ five-star Google reviews</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { author: 'Katharine M.', text: 'Fantastic experience with the mosquito control last summer! We\u2019re re-signing for this season once again \u2014 we can finally enjoy our yard again in Mississauga.' },
              { author: 'Anthony', text: 'Highly recommend this company for mosquito control. I got my house in Milton serviced recently and loved the end result!' },
            ].map(({ author, text }) => (
              <div key={author} className="bg-brand-50 rounded-2xl p-6 border border-brand-100">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-3 italic">&ldquo;{text}&rdquo;</p>
                <p className="text-brand-800 font-semibold text-sm">{author}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <a href="https://g.page/r/CYytaw5LxucdEAE/review" target="_blank" rel="noopener noreferrer" className="text-brand-700 font-semibold text-sm hover:underline">Read all 150+ reviews on Google &rarr;</a>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">FAQ – Mosquito Control in {CITY}</h2>
          <div className="space-y-3">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-white rounded-xl border border-brand-100 group open:shadow-md transition-shadow">
                <summary className="cursor-pointer px-5 py-4 font-semibold text-brand-900 list-none flex justify-between items-center rounded-xl hover:bg-brand-100/60 transition-colors">
                  <span>{question}</span>
                  <svg className="w-5 h-5 shrink-0 group-open:rotate-180 transition-transform text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="px-5 pb-4 text-gray-600 text-sm">{answer}</p>
              </details>
            ))}
          </div>
          <p className="text-center mt-8 text-sm text-gray-500">
            Shopping around? See our honest <a href="#compare-vaughan-companies" className="text-brand-700 underline hover:text-brand-500">Vaughan mosquito control comparison</a> — pricing, reviews, and contracts side by side.
          </p>
        </div>
      </section>

      <CTASection heading={`Get a Free Mosquito Control Quote in ${CITY}`} subtext="Protect your Vaughan yard from mosquitoes this season. No contracts." />
    </>
  )
}
