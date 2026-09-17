import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import CityHero from '@/components/CityHero'
import QuickAnswer from '@/components/QuickAnswer'
import TypicalPrices from '@/components/TypicalPrices'
import CityPriceCard from '@/components/CityPriceCard'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema, howToSchema, itemListSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS, TICK_BLOGS, PROMISES } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Brampton Mosquito Control 2026 · From $99 · 150+ Five-Star Reviews',
  description:
    "Mosquito control in Brampton from $99 — no contracts, 150+ five-star reviews. Compare local providers on price, reviews & contracts. (289) 216-5030.",
  canonical: '/brampton-mosquito-control',
})

const CITY = 'Brampton'
const SLUG = '/brampton-mosquito-control'
const NEIGHBOURHOODS: { name: string; href?: string }[] = [
  { name: 'Mount Pleasant', href: '/mount-pleasant-mosquito-control' },
  { name: 'Gore Meadows' },
  { name: 'Castlemore', href: '/castlemore-mosquito-control' },
  { name: 'Springdale', href: '/springdale-mosquito-control' },
  { name: 'Bramalea', href: '/bramalea-mosquito-control' },
  { name: 'Creditview' },
  { name: "Fletcher's Meadow", href: '/fletcher-meadows-mosquito-control' },
  { name: 'Heart Lake', href: '/heart-lake-mosquito-control' },
  { name: 'Sandringham' },
  { name: 'Credit Valley', href: '/credit-valley-mosquito-control' },
  { name: 'Vales of Castlemore' },
  { name: 'Bram West', href: '/bram-west-mosquito-control' },
  { name: 'Sandalwood', href: '/sandalwood-mosquito-control' },
  { name: 'Snelgrove', href: '/snelgrove-mosquito-control' },
]

const FAQS = [
  {
    question: 'Who is the best mosquito control company in Brampton?',
    answer: "It depends on what matters most to you. BuzzSkito is priced from $99 per treatment in Brampton, with no contracts and 150+ five-star Google reviews. Mosquito Man has a large review volume across the GTA and a longer track record. Mosquito.Buzz is a national franchise, so service depends on the local franchisee. LawnSavers bundles mosquito control with lawn care for existing lawn customers. Ask every company you call the same five questions before you book. Is the price shown before you book? How many sprays are in a season? What happens if it rains after a treatment? Is an Ontario pesticide operator licence number shown? Which plans include a guarantee? BuzzSkito's answers: from $99 on a standard lot; 5, 10 or 20+ sprays per season (tick: 5); free re-treatment if rain falls within 1 hour of a treatment, on every plan; Ontario Pesticide Operator Licence L-240-2436835197; and the Bite-Free Guarantee on Standard & Exclusive plans. The Brampton company that answers all five clearly, in writing, is the easiest to compare.",
  },
  {
    question: 'How much does mosquito control cost in Brampton?',
    answer: 'BuzzSkito mosquito treatments in Brampton start from $99 per application for a standard residential lot. No contracts. Properties near stormwater ponds, Heart Lake Conservation Area, or Etobicoke Creek typically benefit most from the complete seasonal package. Call (289) 216-5030 for a free, no-obligation quote.',
  },
  {
    question: 'Do Brampton mosquito control companies offer no-contract plans?',
    answer: "BuzzSkito is the only major provider in Brampton offering true no-contract service — book a single treatment from $99 with no commitment and no cancellation fee. Most competitors in the Brampton market run seasonal program structures instead. Always confirm contract terms and cancellation policy before booking.",
  },
  {
    question: 'Why does Brampton have so many mosquitoes?',
    answer: "Brampton's rapid residential development has created abundant mosquito breeding habitat. Stormwater management ponds are built into virtually every new development and serve as ideal breeding sites — shallow, still water with minimal predator populations. The Etobicoke Creek corridor, Heart Lake Conservation Area, and Humber River tributaries in northern Brampton add significant natural mosquito pressure on top of the stormwater pond baseline.",
  },
  {
    question: 'Which Brampton neighbourhoods have the worst mosquito problems?',
    answer: "Properties near stormwater ponds in Mount Pleasant, Springdale, and Vales of Castlemore consistently have high mosquito activity due to the density of retention ponds in these developments. Gore Meadows and Heart Lake neighbourhoods face both pond pressure and natural creek corridor exposure from Etobicoke Creek and Heart Lake Conservation Area. Credit Valley properties near the Etobicoke Creek also experience elevated season-long pressure.",
  },
  {
    question: 'When does mosquito season start in Brampton?',
    answer: "Mosquito activity in Brampton typically begins in late April when temperatures consistently exceed 10°C. Stormwater ponds that retain standing water over winter can produce early-season mosquitoes in April — sometimes before seasonal norms. Peak activity runs May through July, with stormwater ponds sustaining a secondary surge in August following summer rain events. The season typically ends by late September.",
  },
  {
    question: 'How many mosquito treatments does my Brampton home need?',
    answer: "Season plans run May through September: Basic (5 sprays, monthly), Standard (10 sprays, every 2 weeks) or Exclusive (20+ sprays, weekly). Properties with stormwater pond views or backing onto Etobicoke Creek, Heart Lake Conservation Area, or any ravine typically benefit from Standard's two-week spacing; lower-exposure lots may do well with Basic. Our technicians will assess your specific exposure and recommend the right plan for your property.",
  },
  {
    question: "What should Brampton families with kids and pets know before a treatment?",
    answer: "Our licensed technician applies the product according to its label directions. The label directs people and pets to stay off treated areas until the spray has dried, and we remind you of that on the day. If you have questions about a specific child, pet, pond or garden bed, tell us before the visit and we will plan which areas to treat and which to leave untreated.",
  },
  {
    question: 'How quickly can BuzzSkito service my Brampton property?',
    answer: "We typically schedule Brampton service visits within the same week during the active season. Call (289) 216-5030 to confirm current availability at your specific Brampton address. Early-season bookings (April–May) are subject to higher demand, so booking ahead is recommended.",
  },
  {
    question: 'What is barrier spray and how does it work in Brampton?',
    answer: "Barrier spray is a residual insecticide applied to all vegetation on your property — shrubs, garden beds, the underside of leaves, fence lines, deck undersides, and shaded areas where mosquitoes rest during the heat of the day. The product is applied according to its label directions to the surfaces where mosquitoes rest, and treatments are repeated on a schedule through the season because pond-driven pressure keeps arriving. It treats your own yard; it does not treat the municipal ponds or creek corridors nearby.",
  },
  {
    question: 'Does BuzzSkito also provide tick control in Brampton?',
    answer: "Yes. Brampton's ravines, Heart Lake Conservation Area, and Humber River tributaries also harbour blacklegged ticks. Our standalone tick plan is $597 per season (5 sprays), or $497 when bundled with any mosquito plan — a $100 saving. Many Brampton homeowners bundle both for complete yard protection through the season.",
  },
]

export default function BramptonMosquitoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${CITY}`, description: `Professional mosquito barrier spray for residential properties in ${CITY}, Ontario.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: CITY, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ service: 'mosquito', city: 'Brampton' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/brampton-mosquito-control', '2026-07-01')) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema({ name: 'Mosquito Control Companies Serving Brampton — 2026', description: 'Mosquito control companies serving Brampton compared on price, reviews, contracts, and coverage — BuzzSkito, Mosquito Man, Mosquito.Buzz, LawnSavers.', slug: SLUG, items: [{ name: 'BuzzSkito' }, { name: 'Mosquito Man' }, { name: 'Mosquito.Buzz' }, { name: 'LawnSavers' }] })) }} />

      <CityHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Mosquito Control', href: '/mosquito-control' },
          { label: CITY },
        ]}
        title={<>Brampton Mosquito Control</>}
        titleAccent={<>From $99 · 150+ Five-Star Reviews</>}
        subtitle={<>Brampton&apos;s specialist barrier spray for stormwater-pond, ravine, and new-build neighbourhoods. Licensed Ontario pesticide operator, with treatments applied according to label directions.</>}
        image="/spray-backyard.webp"
      />

      <section className="bg-brand-900 text-white py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-200">
          <span>✓ Licensed Ontario Pesticide Operator</span>
          <span>✓ {PROMISES.labelLine}</span>
          <span>✓ {PROMISES.rainBackShort}</span>
          <span>✓ {PROMISES.biteFreeScope}</span>
          <span>✓ 5-Star Rated · 150+ Reviews</span>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <QuickAnswer question="What is the best mosquito control company in Brampton?">
        <p>
          <strong>BuzzSkito provides specialist mosquito barrier spray across all Brampton neighbourhoods — Mount Pleasant, Gore Meadows, Castlemore, Springdale, Bramalea, Creditview, and Fletcher&apos;s Meadow.</strong> Treatments are applied according to label directions to vegetation and shrub interiors where mosquitoes rest. Single treatments start at <strong>$99</strong> on a standard lot, with season plans from <strong>$549</strong>. With <strong>150+ five-star Google reviews</strong>, no contracts, a rain-back guarantee on every plan, and the <strong>Bite-Free Guarantee on Standard &amp; Exclusive plans</strong>, Brampton homeowners get barrier spray for stormwater-pond and creek-adjacent properties. Call (289) 216-5030.
        </p>
      </QuickAnswer>

      {/* KEY FACTS */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Brampton Mosquito Control Key Facts</h2>
          <div className="rounded-xl border border-navy-100 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Service area', 'All Brampton neighbourhoods (Mount Pleasant, Gore Meadows, Castlemore, Springdale, Bramalea, Creditview, Fletcher’s Meadow, Heart Lake, Snelgrove, Sandalwood, Bram West)'],
                  ['Specialization', 'Mosquito barrier spray for residential properties'],
                  ['Licence', PROMISES.licence],
                  ['Pricing', 'From $99 per treatment on a standard lot · season plans from $549 (plus HST)'],
                  ['Treatment season', 'May through September (peak: late May–July)'],
                  ['Sprays per season', '5 (Basic), 10 (Standard) or 20+ (Exclusive)'],
                  ['Re-entry', 'Stay off treated areas until the spray has dried, as the label directs'],
                  ['Recommended schedule', 'Standard (10 sprays, every 2 weeks) for stormwater-pond and creek-adjacent properties; Basic (5 sprays, monthly) for lower-exposure lots'],
                  ['Highest pressure zones', 'Heart Lake · Etobicoke Creek · Professor’s Lake · Chinguacousy Park ponds · stormwater management ponds in new subdivisions'],
                  ['Booking lead time', 'Same-week service typical'],
                  ['Contract required', 'No — single treatments and seasonal programs both available'],
                  ['Guarantee', 'Rain-back guarantee on every plan · Bite-Free Guarantee on Standard & Exclusive plans'],
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

      <TypicalPrices service="mosquito" city={CITY} />

      {/* How It Works */}
      <section className="py-14 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <p className="kicker mb-3 text-center">Our Process</p>
          <h2 className="h2-display text-brand-900 mb-8 text-center">How BuzzSkito Mosquito Control Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Free Property Assessment', desc: 'We evaluate your Brampton property — identifying stormwater pond proximity, creek exposure, and mosquito pressure zones specific to your neighbourhood.' },
              { step: '2', title: 'Professional Barrier Spray', desc: 'Our licensed technician applies barrier spray, following the label directions, to all vegetation, shrub interiors, leaf undersides, fence lines, and property perimeters using a precision backpack sprayer.' },
              { step: '3', title: 'Rain-Back Guarantee', desc: `Stay off treated areas until the spray has dried, as the label directs. ${PROMISES.rainBack} Standard & Exclusive plans also carry the Bite-Free Guarantee.` },
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
          <h2>Mosquito Pressure in Brampton</h2>
          <p>Brampton is one of Canada's fastest-growing cities, and that growth has created a mosquito problem that gets worse with each new development phase. Every subdivision built in Brampton includes stormwater management ponds engineered to capture runoff — but these ponds are perfect mosquito breeding habitat: shallow, still, warm in summer, and largely unshaded in newer areas. Neighbourhoods like <strong>Mount Pleasant, Springdale, Vales of Castlemore, and Credit Valley</strong> have dozens of these ponds within walking distance of residential streets.</p>
          <p>Natural water features compound the stormwater issue. The <strong>Etobicoke Creek corridor</strong> runs north-south through central Brampton, and <strong>Heart Lake Conservation Area</strong> in the city's northwest creates a significant natural mosquito source for adjacent neighbourhoods. <strong>Humber River tributaries</strong> in northern Brampton (Castlemore, Countryside Drive area) add further pressure for properties near undeveloped greenbelt.</p>

          <h2>Mosquito Pressure Zones by Brampton Neighbourhood</h2>
          <h3>Mount Pleasant, Vales of Castlemore, Springdale</h3>
          <p>Northern Brampton's newest developments sit adjacent to the highest concentration of stormwater management ponds in the city. Many properties in these areas have direct pond views — and those ponds sustain mosquito activity from early May through September without natural predator populations to control them.</p>

          <h3>Heart Lake and Gore Meadows</h3>
          <p>Heart Lake Conservation Area borders these north-west Brampton neighbourhoods and generates substantial natural mosquito populations each season. The combination of conservation area exposure and nearby stormwater ponds gives Heart Lake and Gore Meadows some of the city's most persistent mosquito pressure.</p>

          <h3>Creditview, Credit Valley, Bramalea</h3>
          <p>These neighbourhoods along the Etobicoke Creek corridor experience elevated mosquito activity from the creek's floodplain and seasonal side channels. Summer rain events regularly re-activate breeding in low-lying areas adjacent to the creek system.</p>

          <h2>Brampton Neighbourhoods We Serve</h2>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map(({ name, href }) => href ? (
              <Link key={name} href={href} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full hover:bg-brand-100 transition-colors">{name}</Link>
            ) : (
              <span key={name} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full">{name}</span>
            ))}
          </div>

          <h2>Recommended Mosquito Treatment Schedule for Brampton</h2>
          <div className="not-prose overflow-x-auto my-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-800 text-white">
                  <th className="px-4 py-2 text-left">Treatment</th>
                  <th className="px-4 py-2 text-left">Timing</th>
                  <th className="px-4 py-2 text-left">Purpose</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { t: 'Treatment 1', timing: 'Early May', purpose: 'Establish barrier before stormwater ponds activate' },
                  { t: 'Treatment 2', timing: 'Early June', purpose: 'Maintain coverage through peak ramp-up' },
                  { t: 'Treatment 3', timing: 'Early July', purpose: 'Peak mosquito season — highest activity window' },
                  { t: 'Treatment 4', timing: 'Early August', purpose: 'Post-rain surge from stormwater and creek features' },
                  { t: 'Treatment 5', timing: 'Early September', purpose: 'Late-season close-out for extended coverage' },
                ].map(({ t, timing, purpose }) => (
                  <tr key={t} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-2 font-medium text-gray-800">{t}</td>
                    <td className="px-4 py-2 text-brand-700 font-semibold">{timing}</td>
                    <td className="px-4 py-2 text-gray-600">{purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <CityPriceCard city={CITY} service="mosquito" location="price_card_mid" />

          <h2>Mosquito Control Pricing in Brampton</h2>
          <p>BuzzSkito mosquito treatments in Brampton start from $99 per visit — no contracts, no pressure to commit to a full season.</p>
          <div className="not-prose overflow-x-auto my-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-800 text-white">
                  <th className="px-4 py-2 text-left">Property Type</th>
                  <th className="px-4 py-2 text-left">Starting Price</th>
                  <th className="px-4 py-2 text-left">Typical Properties</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: 'Standard residential lot (under 10,000 sq ft)', price: 'From $99/treatment', coverage: 'Typical Brampton detached or semi-detached home' },
                  { type: 'Larger lot (10,000–100,000 sq ft)', price: 'Priced by lot size', coverage: 'Larger detached, pond-backing, Castlemore properties' },
                  { type: 'Estate property (100,000+ sq ft)', price: 'Custom quote', coverage: 'Vales of Castlemore, rural properties, large corner lots' },
                ].map(({ type, price, coverage }) => (
                  <tr key={type} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-2 font-semibold text-brand-800">{type}</td>
                    <td className="px-4 py-2 font-extrabold text-brand-700">{price}</td>
                    <td className="px-4 py-2 text-gray-600">{coverage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>Season plans are $549 (5 sprays), $994 (10 sprays) or $2,049 (20+ sprays). Prices are plus HST.</p>
          <p>No contracts and no cancellation fees. Call <a href={BUSINESS.phoneHref} className="text-brand-700 font-semibold hover:underline">{BUSINESS.phone}</a> for a free quote. See our <Link href="/mosquito-control-cost" className="text-brand-700 hover:underline">2026 mosquito control pricing guide</Link> for a full Ontario breakdown.</p>

          <h2>Professional Mosquito Control vs. DIY in Brampton</h2>
          <p>Hardware stores sell foggers, citronella candles, and consumer sprays. Here&apos;s why they fall short for Brampton&apos;s specific mosquito problem:</p>
          <ul>
            <li><strong>Consumer foggers provide hours of relief, not a season of scheduled treatments.</strong> Professional residual barrier spray is applied to the leaf surfaces where mosquitoes rest and renewed on a schedule.</li>
            <li><strong>Application technique matters more than product.</strong> Mosquitoes rest on leaf undersides, in shaded shrub interiors, and under deck joists — surfaces consumer foggers miss entirely.</li>
            <li><strong>Brampton&apos;s mosquito sources are beyond your control.</strong> Stormwater management ponds, Heart Lake Conservation Area, and Etobicoke Creek will produce mosquitoes every season regardless of what you do on your lot. Professional barrier spray treats the surfaces where they rest once they reach your property.</li>
            <li><strong>Larvicide tablets don&apos;t address stormwater ponds.</strong> You can&apos;t legally treat municipal stormwater ponds. The only effective residential strategy is creating a treated barrier on your own property.</li>
          </ul>

          <h2>Choosing the Right Mosquito Control Service in Brampton</h2>
          <ul>
            <li><strong>A PCP number on the label.</strong> Any pest control product used in Canada carries a Pest Control Products Act (PCP) number on its label — ask which product will be used. BuzzSkito applies products according to label directions.</li>
            <li><strong>Licensed applicators.</strong> Ontario requires a Pesticide Applicator&apos;s Licence for all commercial applications. BuzzSkito&apos;s is {PROMISES.licence}.</li>
            <li><strong>Rain-back guarantee.</strong> Reputable companies re-treat if rain falls within the cure window. At BuzzSkito: {PROMISES.rainBack}</li>
            <li><strong>No long-term contracts.</strong> Book a single treatment and evaluate results before committing.</li>
            <li><strong>Local Brampton knowledge.</strong> Companies that understand stormwater pond dynamics and Etobicoke Creek exposure treat more effectively.</li>
            <li><strong>Transparent pricing.</strong> BuzzSkito publishes pricing and quotes over the phone — no mandatory &quot;assessment visit&quot; required first. A company that will not quote over the phone often uses the home visit as a sales pitch.</li>
            <li><strong>Real, specific reviews.</strong> Look for detailed reviews from Brampton addresses that describe the property and the result — not generic five-star listings with no detail.</li>
          </ul>

          <h2 id="compare">Brampton Mosquito Control Companies Compared</h2>
          <p>Brampton homeowners have several professional options. Here is an honest side-by-side based on each company&apos;s service model and Brampton coverage. Other companies&apos; prices and review totals change, so check their own sites and Google listings for current figures.</p>
          <div className="not-prose overflow-x-auto my-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-800 text-white">
                  <th className="px-4 py-2 text-left">Company</th>
                  <th className="px-4 py-2 text-left">Starting Price</th>
                  <th className="px-4 py-2 text-left">Reviews</th>
                  <th className="px-4 py-2 text-left">Contracts</th>
                  <th className="px-4 py-2 text-left">Brampton Coverage</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { company: 'BuzzSkito', price: 'From $99', reviews: '150+ (5.0★)', contracts: 'No contracts', area: 'All Brampton' },
                  { company: 'Mosquito Man', price: 'Varies — check their site', reviews: 'See Google', contracts: 'Seasonal', area: 'All Brampton' },
                  { company: 'Mosquito.Buzz', price: 'Varies — check their site', reviews: 'Varies by franchise', contracts: 'Seasonal', area: 'Franchise' },
                  { company: 'LawnSavers', price: 'Varies — check their site', reviews: 'See Google', contracts: 'Seasonal', area: 'Brampton' },
                ].map(({ company, price, reviews, contracts, area }) => (
                  <tr key={company} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-2 font-semibold text-brand-800">{company}</td>
                    <td className="px-4 py-2 font-extrabold text-brand-700">{price}</td>
                    <td className="px-4 py-2 text-gray-600">{reviews}</td>
                    <td className="px-4 py-2 text-gray-600">{contracts}</td>
                    <td className="px-4 py-2 text-gray-600">{area}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>Mosquito Man is one of the longest-running options, with a large review volume across the GTA. Mosquito.Buzz is a national franchise, so consistency depends on which franchisee covers your area. LawnSavers is primarily a lawn care company offering mosquito control as an add-on for existing lawn customers. BuzzSkito publishes its per-treatment price and books single visits with no contract — so you can trial one Brampton treatment from $99, judge the result, and decide whether to continue.</p>

          <h2>What to Ask Any Mosquito Control Company in Brampton</h2>
          <p>Beyond the comparison above, ask every company you call the same five questions and compare the answers side by side.</p>
          <div className="not-prose overflow-x-auto my-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-800 text-white">
                  <th className="px-4 py-2 text-left">Question to ask</th>
                  <th className="px-4 py-2 text-left">BuzzSkito&apos;s answer</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { q: 'Is the price shown before you book?', a: 'From $99 on a standard lot' },
                  { q: 'How many sprays per season?', a: '5, 10 or 20+ (tick: 5)' },
                  { q: 'What happens if it rains after a treatment?', a: PROMISES.rainBack },
                  { q: 'Is an Ontario pesticide operator licence number shown?', a: `Yes: ${BUSINESS.licenseNumber}` },
                  { q: 'Which plans include a guarantee?', a: 'Rain-back on every plan; Bite-Free on Standard & Exclusive' },
                ].map(({ q, a }) => (
                  <tr key={q} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-2 font-semibold text-brand-800">{q}</td>
                    <td className="px-4 py-2 text-gray-700">{a}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">Brampton pricing varies by lot size. Larger Castlemore and Heart Lake properties are priced to the yard, and your quote shows the exact price before you pay.</p>
          <p>A company that answers all five questions clearly, in writing, is easy to compare against the others you call. Head-to-head detail: <Link href="/buzzskito-vs-mosquitoman" className="text-brand-700 hover:underline">BuzzSkito vs Mosquito Man</Link>, <Link href="/buzzskito-vs-lawnsavers" className="text-brand-700 hover:underline">BuzzSkito vs LawnSavers</Link>, and <Link href="/buzzskito-vs-mosquito-buzz" className="text-brand-700 hover:underline">BuzzSkito vs Mosquito.Buzz</Link>.</p>

          <h2>What to Expect on Your BuzzSkito Treatment Day</h2>
          <ol>
            <li><strong>Visit window</strong> — {PROMISES.visitWindow} You don&apos;t need to be home.</li>
            <li><strong>Property walkthrough</strong> — On the first visit, your technician assesses pond proximity, vegetation density, and property-specific risk factors.</li>
            <li><strong>Full barrier application</strong> — Systematic treatment of all vegetation: shrubs, garden beds, leaf undersides, fence lines, deck undersides, woodpiles. A typical Brampton lot takes 25–40 minutes.</li>
            <li><strong>Lawn sign placement</strong> — Confirms the treatment date and product used.</li>
            <li><strong>Drying time</strong> — Keep people and pets off treated areas until the spray has dried, as the product label directs.</li>
            <li><strong>Follow-up email confirmation</strong> — Treatment log with areas treated, product applied, and your next visit date.</li>
          </ol>

          <h2>Also Providing Tick Control in Brampton</h2>
          <p>Brampton's ravines and wooded corridors are also prime tick habitat. Ask about our <Link href="/brampton-tick-spray" className="text-brand-700 hover:underline">Brampton tick control service</Link> — bundle both so one visit covers both pests.</p>

          <h2>Everything Brampton Homeowners Ask About Mosquito Control</h2>

          <h3>How do Brampton stormwater ponds affect mosquito populations?</h3>
          <p>Stormwater management ponds &mdash; built into virtually every new Brampton development since the 2000s &mdash; are engineered to hold rainwater for filtration. They also produce thousands of mosquitoes per pond per season. New subdivisions in Mount Pleasant, Springdale, Vales of Castlemore, and Sandalwood have especially high pond density. Properties within 500 metres of a stormwater pond experience consistent pressure. Barrier spray on your own property is the practical response, since the pond itself is municipal land.</p>

          <h3>Does Peel Region or the City of Brampton spray for mosquitoes?</h3>
          <p>No &mdash; neither treats residential properties. Peel Region Public Health does targeted larviciding (treating standing water in storm sewers) for West Nile surveillance, and the City of Brampton maintains catch basins. Neither program treats private yards. Yard-level mosquito control is the homeowner&apos;s responsibility.</p>

          <h3>How much does Brampton mosquito control cost for a typical lot?</h3>
          <p>For a standard Brampton residential lot under 10,000 sq ft: from $99 per single treatment, with season plans from $549 (plus HST). Larger Castlemore or Heart Lake estate properties require a custom quote. No contracts &mdash; book one treatment and decide whether to continue.</p>

          <h3>Why are Heart Lake and Castlemore especially affected?</h3>
          <p>Heart Lake is adjacent to Heart Lake Conservation Area &mdash; 121 hectares of forest, meadow, and Heart Lake itself. The conservation area sustains large mosquito populations that disperse into adjacent neighbourhoods. Castlemore, in northeast Brampton, borders the Humber River tributary system and rural agricultural land that holds standing water through spring. Both communities face combined creek/conservation and tree-canopy mosquito pressure.</p>

          <h3>When should I book my first Brampton mosquito treatment?</h3>
          <p>Mid-May for most properties. Stormwater pond microhabitats can produce mosquito activity earlier &mdash; sometimes by late April in warm springs. Booking before peak season (late May–July) ensures the barrier is established before mosquito numbers climb.</p>

          <h3>Are there mosquitoes near Etobicoke Creek and Professor&apos;s Lake?</h3>
          <p>Yes. Etobicoke Creek runs through south Brampton and creates a continuous mosquito breeding corridor. Professor&apos;s Lake (in north Brampton near Bramalea) supports breeding mosquito populations through summer. Properties in Bramalea, Sandringham, and along the Etobicoke Creek experience consistent pressure.</p>

          <h3>How do mosquito treatments work around a Brampton vegetable garden?</h3>
          <p>We keep the spray off vegetable garden beds, herb gardens, and edible plants. Properties commonly have substantial vegetable gardens, and our applicators apply barrier spray to surrounding shrubs and fence-line vegetation while leaving the vegetable area untreated, following the product label directions. Point out your garden beds before the visit so the technician can plan around them.</p>

          <h3>Can mosquitoes breed in my Brampton rain barrel?</h3>
          <p>Yes &mdash; uncovered rain barrels are one of the most productive backyard breeding sites in Brampton. A single barrel can produce thousands of mosquitoes per week. Solutions: tight-fitting screen on the inlet, BTI mosquito dunks (sold at Canadian Tire and Home Depot &mdash; follow the label directions), and emptying every 5–7 days during peak season.</p>

          <h3>Why are mosquitoes worse in some Brampton neighbourhoods than others?</h3>
          <p>Three factors: (1) stormwater pond proximity &mdash; Mount Pleasant, Springdale, and Vales of Castlemore have especially high pond density; (2) creek and ravine adjacency &mdash; Etobicoke Creek-adjacent and Heart Lake-adjacent properties experience the most pressure; (3) tree canopy density &mdash; mature canopy creates ideal daytime resting habitat in older Brampton neighbourhoods.</p>

          <h3>Can BuzzSkito treat my Brampton backyard before a wedding or party?</h3>
          <p>Yes &mdash; pre-event treatment is a common booking. We recommend the spray 2–4 days before your event. Booking a few days ahead leaves room to reschedule if the forecast turns wet. For backyard weddings or graduations in Castlemore, Mount Pleasant, or Heart Lake, this timing window works well.</p>

          <h3>What happens if it rains right after my Brampton treatment?</h3>
          <p>{PROMISES.rainBack} That rain-back guarantee is separate from the Bite-Free Guarantee, which applies to Standard &amp; Exclusive plans.</p>

          <h3>Does mosquito spray work against ticks in Brampton too?</h3>
          <p>Barrier spray is also used against blacklegged ticks, but tick control requires different application zones &mdash; the 1–3 ft transition zone where lawn meets woods. Heart Lake Conservation Area and Humber River tributaries in Brampton are confirmed blacklegged tick habitat. Many Brampton homeowners bundle our Brampton tick spray with mosquito control.</p>

          {/* Related Guides */}

          <h2>Compare Brampton Pest Control Options</h2>
          <p>Looking at all your Brampton pest control options? See our specialist guide: <Link href="/pest-control-brampton" className="text-brand-700 hover:underline font-semibold">Pest Control in Brampton</Link> — explains why a mosquito and tick specialist beats a generalist for the two pests that actually drive Brampton backyard misery. For mosquito providers specifically, see the <a href="#compare" className="text-brand-700 hover:underline font-semibold">Brampton company comparison above</a>, or our <Link href="/best-mosquito-control-companies-gta" className="text-brand-700 hover:underline font-semibold">GTA-wide comparison</Link>.</p>
          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
            <li><Link href="/blog/mosquito-season-gta-when-does-it-start" className="text-brand-700 hover:underline">When Does Mosquito Season Start in the GTA?</Link></li>
            <li><Link href="/blog/hidden-mosquito-breeding-spots-backyard" className="text-brand-700 hover:underline">Hidden Mosquito Breeding Spots in Your GTA Backyard</Link></li>
            <li><Link href="/blog/is-mosquito-spray-safe-kids-pets" className="text-brand-700 hover:underline">Is Mosquito Spray Safe for Kids and Pets?</Link></li>
            <li><Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{TICK_BLOGS.pillar.title}</Link></li>
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <p className="kicker mb-3 text-center">Reviews</p>
          <h2 className="h2-display text-brand-900 mb-2 text-center">What Brampton Homeowners Say</h2>
          <p className="text-center text-gray-500 text-sm mb-8">From our 150+ five-star Google reviews</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { author: 'Priya R.', location: 'Castlemore', text: 'The technician explained exactly what product they were using. Couldn\'t be happier with the results.' },
              { author: 'Raj P.', location: 'Springdale', text: 'Our house backs onto a stormwater pond and mosquitoes were unbearable. After the first BuzzSkito treatment the change was dramatic. We signed up for the full season and haven\'t looked back.' },
              { author: 'Kevin M.', location: 'Heart Lake', text: 'Living near Heart Lake Conservation Area means mosquitoes every year. BuzzSkito is the first thing that actually worked. Professional, on time, and the SMS alerts are a nice touch.' },
              { author: 'Tina S.', location: 'Credit Valley', text: 'Tried citronella candles and store sprays for years. One BuzzSkito treatment did more than everything else combined. Our kids can actually play in the backyard now.' },
            ].map(({ author, location, text }) => (
              <div key={author} className="bg-brand-50 rounded-2xl p-6 border border-brand-100">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-3 italic">&ldquo;{text}&rdquo;</p>
                <p className="text-brand-800 font-semibold text-sm">{author} — <span className="text-gray-500 font-normal">{location}, Brampton</span></p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <a href="https://g.page/r/CYytaw5LxucdEAE/review" target="_blank" rel="noopener noreferrer" className="text-brand-700 font-semibold text-sm hover:underline">Read all 150+ reviews on Google &rarr;</a>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4">
        <CityPriceCard city={CITY} service="mosquito" />
      </div>

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">FAQ – Mosquito Control in {CITY}</h2>
          <div className="space-y-3">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-white rounded-xl border border-brand-100 group open:shadow-md transition-shadow">
                <summary className="cursor-pointer px-5 py-4 font-semibold text-brand-900 list-none flex justify-between items-center rounded-xl hover:bg-brand-100/60 transition-colors">
                  <span>{question}</span>
                  <svg className="w-5 h-5 shrink-0 group-open:rotate-180 transition-transform text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-5 pb-4 text-gray-600 text-sm">{answer}</p>
              </details>
            ))}
          </div>
          <p className="text-center mt-8 text-sm text-gray-500">
            Comparing options? Our <a href="#compare" className="text-brand-700 underline hover:text-brand-500">2026 Brampton mosquito control comparison</a> puts pricing, reviews, and contracts side by side — or see the <Link href="/best-mosquito-control-companies-gta" className="text-brand-700 underline hover:text-brand-500">GTA-wide comparison</Link>.
          </p>
        </div>
      </section>

      <CTASection heading={`Get a Free Mosquito Control Quote in ${CITY}`} subtext="Protect your Brampton property from mosquitoes this season. No contracts." />
    </>
  )
}
