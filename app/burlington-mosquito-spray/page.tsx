import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import CityHero from '@/components/CityHero'
import QuickAnswer from '@/components/QuickAnswer'
import TypicalPrices from '@/components/TypicalPrices'
import CityPriceCard from '@/components/CityPriceCard'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema, howToSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS, TICK_BLOGS, PROMISES } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Burlington Mosquito Control 2026 · From $99 · 150+ Five-Star Reviews',
  description:
    'Professional mosquito spray in Burlington from $99. Compare providers, pricing & neighbourhoods from Alton Village to Aldershot. Call (289) 216-5030.',
  canonical: '/burlington-mosquito-spray',
})

const CITY = 'Burlington'
const SLUG = '/burlington-mosquito-spray'
const NEIGHBOURHOODS: { name: string; href?: string }[] = [
  { name: 'Alton Village', href: '/alton-village-mosquito-control' },
  { name: 'Millcroft', href: '/millcroft-mosquito-control' },
  { name: 'The Orchard', href: '/orchard-mosquito-control' },
  { name: 'Roseland', href: '/roseland-mosquito-control' },
  { name: 'Downtown Burlington' },
  { name: 'Shoreacres' },
  { name: 'Headon Forest' },
  { name: 'North Burlington' },
  { name: 'Palmer', href: '/palmer-mosquito-control' },
  { name: 'Tyandaga', href: '/tyandaga-mosquito-control' },
  { name: 'Brant Hills' },
  { name: 'Elizabeth Gardens' },
  { name: 'Aldershot', href: '/aldershot-mosquito-control' },
  { name: 'Mountainside' },
]

const FAQS = [
  {
    question: 'How much does mosquito control cost in Burlington?',
    answer: 'BuzzSkito mosquito control in Burlington starts from $99 per application. Waterfront neighbourhoods and properties near Bronte Creek typically benefit most from a full season plan, with treatments on a schedule from May to September. No contracts. Call (289) 216-5030 for a free Burlington quote.',
  },
  {
    question: 'Who is the best mosquito control company in Burlington?',
    answer: "Ask every company you call the same five questions before you book. Is the price shown before you book? How many sprays are in a season? What happens if it rains after a treatment? Is an Ontario pesticide operator licence number shown? Which plans include a guarantee? BuzzSkito's answers: from $99 on a standard lot; 5, 10 or 20+ sprays per season (tick: 5); free re-treatment if rain falls within 1 hour of a treatment, on every plan; Ontario Pesticide Operator Licence L-240-2436835197; and the Bite-Free Guarantee on Standard & Exclusive plans. The Burlington company that answers all five clearly, in writing, is the easiest to compare.",
  },
  {
    question: 'Do Burlington mosquito control companies require a contract?',
    answer: 'BuzzSkito does not. You can book a single treatment from $99 with no commitment and no cancellation fee, then decide based on results. Most other Burlington providers steer you into a seasonal program instead. Whichever company you call, confirm the contract terms before booking and ask specifically about automatic renewal.',
  },
  {
    question: 'What should I look for in a Burlington mosquito control company?',
    answer: 'Start with the two things that are non-negotiable in Ontario — a product with a Pest Control Products Act (PCP) number on its label, applied according to that label, and a licensed pesticide applicator — then judge companies on transparency. A provider that publishes a per-visit price and puts its rain re-treatment policy in writing is easy to compare; one that quotes only after an in-home visit is not. BuzzSkito publishes from $99 per treatment, requires no contract, shows its Ontario Pesticide Operator Licence (L-240-2436835197), offers a rain-back guarantee on every plan, and carries the Bite-Free Guarantee on Standard & Exclusive plans.',
  },
  {
    question: 'Why are mosquitoes so bad in Burlington?',
    answer: "Burlington's geography creates mosquito pressure from multiple directions. Burlington Bay and the Lake Ontario shoreline generate waterfront mosquito activity that affects lakeshore and Aldershot properties. Bronte Creek runs north-south through the city's west end, creating a continuous breeding and dispersal corridor through West Oak Trails, Bronte, and River Oaks. The Royal Botanical Gardens — 1,100+ hectares of naturalized land on Burlington's northwest border — sustains large mosquito populations that disperse into adjacent North Burlington and Waterdown neighbourhoods. Newer developments in Alton Village and The Orchard contain stormwater ponds that become active breeding sites each season.",
  },
  {
    question: "Does Burlington's waterfront increase mosquito activity?",
    answer: "Yes. Burlington Bay and the Lake Ontario shoreline provide breeding grounds through shoreline vegetation, and properties near Spencer Smith Park, LaSalle Park, and Aldershot lakeshore are particularly affected. The high humidity along the waterfront also extends evening mosquito activity later into the night compared to inland properties.",
  },
  {
    question: 'Which Burlington neighbourhoods have the most mosquito activity?',
    answer: "Properties near Bronte Creek face the highest consistent pressure — particularly Bronte, West Oak Trails, and River Oaks. Shoreacres and Roseland lakeshore properties experience activity from the waterfront and mature tree canopy. Alton Village and Millcroft homeowners encounter pond-driven pressure from stormwater infrastructure in their developments. North Burlington properties near the Royal Botanical Gardens boundary have elevated mosquito activity from the naturalized RBG lands.",
  },
  {
    question: 'How many treatments does a Burlington home need per season?',
    answer: "Season plans run May through September: Basic (5 sprays, monthly), Standard (10 sprays, every 2 weeks) or Exclusive (20+ sprays, weekly). Properties adjacent to Bronte Creek, Burlington Bay, or the RBG boundary typically benefit from Standard's two-week spacing given the sustained pressure from these natural features; lower-exposure properties may do well with Basic. Our technician will assess your property and recommend accordingly.",
  },
  {
    question: "How do you treat around mature trees and gardens in Burlington?",
    answer: "Our licensed technician applies the product according to its label directions around mature trees, established gardens, and native plant landscaping. The product targets resting surfaces — leaf undersides and shrub foliage — not tree trunks or bare soil, and we avoid direct application to plants in bloom. The label directs people and pets to stay off treated areas until the spray has dried.",
  },
  {
    question: 'Does BuzzSkito serve all Burlington neighbourhoods?',
    answer: "Yes. We serve all Burlington communities including Alton Village, Millcroft, The Orchard, Roseland, Shoreacres, Headon Forest, North Burlington, Palmer, Tyandaga, Brant Hills, Aldershot, and Downtown Burlington. Call (289) 216-5030 to confirm availability at your address.",
  },
  {
    question: 'Does BuzzSkito also provide tick control in Burlington?',
    answer: "Yes. Burlington's wooded greenbelt corridors, Bronte Creek Provincial Park, and Royal Botanical Gardens are significant blacklegged tick habitat. Many Burlington homeowners bundle mosquito and tick treatments so one visit covers both pests. See our Burlington tick control service or ask about bundle pricing when you call.",
  },
]

export default function BurlingtonMosquitoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Spray ${CITY}`, description: `Professional mosquito barrier spray for residential properties in ${CITY}, Ontario.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: CITY, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ service: 'mosquito', city: 'Burlington' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/burlington-mosquito-spray', '2026-07-01')) }} />

      <CityHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Mosquito Control', href: '/mosquito-control' },
          { label: CITY },
        ]}
        title={<>Burlington Mosquito Control</>}
        titleAccent={<>From $99 · 150+ Five-Star Reviews</>}
        subtitle={<>Burlington&apos;s specialist barrier spray for waterfront, Bronte Creek, Tyandaga, and Aldershot properties. Licensed Ontario pesticide operator, with treatments applied according to label directions.</>}
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
      <QuickAnswer question="What is the best mosquito control company in Burlington?">
        <p>
          <strong>BuzzSkito provides specialist mosquito barrier spray across all Burlington neighbourhoods — Alton Village, Millcroft, The Orchard, Roseland, Downtown Burlington, Shoreacres, Headon Forest, North Burlington, Palmer, Tyandaga, and Aldershot.</strong> Treatments are applied according to label directions to vegetation and shrub interiors where mosquitoes rest. Single treatments start at <strong>$99</strong> on a standard lot, with season plans from <strong>$549</strong>. With <strong>150+ five-star Google reviews</strong>, no contracts, a rain-back guarantee on every plan, and the <strong>Bite-Free Guarantee on Standard &amp; Exclusive plans</strong>, Burlington homeowners get barrier spray for waterfront and creek-adjacent properties. Call (289) 216-5030.
        </p>
      </QuickAnswer>

      {/* KEY FACTS */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Burlington Mosquito Control Key Facts</h2>
          <div className="rounded-xl border border-navy-100 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Service area', 'All Burlington neighbourhoods (Alton Village, Millcroft, The Orchard, Roseland, Downtown Burlington, Shoreacres, Headon Forest, North Burlington, Palmer, Tyandaga, Aldershot)'],
                  ['Specialization', 'Mosquito barrier spray for residential properties'],
                  ['Licence', PROMISES.licence],
                  ['Pricing', 'From $99 per treatment on a standard lot · season plans from $549 (plus HST)'],
                  ['Treatment season', 'May through September (peak: late May–July)'],
                  ['Sprays per season', '5 (Basic), 10 (Standard) or 20+ (Exclusive)'],
                  ['Re-entry', 'Stay off treated areas until the spray has dried, as the label directs'],
                  ['Recommended schedule', 'Standard (10 sprays, every 2 weeks) for waterfront and creek-adjacent properties; Basic (5 sprays, monthly) for lower-exposure lots'],
                  ['Highest pressure zones', 'Lake Ontario shoreline · Bronte Creek · Tyandaga ravines · Niagara Escarpment edge'],
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
              { step: '1', title: 'Free Property Assessment', desc: 'We evaluate your Burlington property — identifying waterfront exposure, creek proximity, and mosquito pressure zones specific to your neighbourhood.' },
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
          <h2>Take Back Your Burlington Backyard</h2>
          <p>Burlington's combination of waterfront access, mature tree canopy in established neighbourhoods like Roseland and Shoreacres, and newer developments with stormwater ponds creates one of the GTA's more complex mosquito environments. <strong>Bronte Creek Provincial Park</strong> borders Burlington's west end and generates significant natural mosquito pressure that disperses into Bronte, West Oak Trails, and River Oaks. <strong>Burlington Bay</strong> and the Lake Ontario waterfront create early-season pressure along the lakeshore. The <strong>Royal Botanical Gardens</strong> — 1,100+ hectares of naturalized land on Burlington's northwest boundary — sustains active mosquito populations that affect North Burlington and Waterdown neighbourhoods throughout the season.</p>
          <p>BuzzSkito treats Burlington properties of all sizes — from compact Alton Village townhomes to larger estate lots in Shoreacres and Roseland. Our no-contract approach means you can book individual treatments or a full season program based on your property's needs and exposure level.</p>

          <h2>Mosquito Pressure Zones by Burlington Neighbourhood</h2>
          <h3>Bronte, West Oak Trails &amp; River Oaks</h3>
          <p>These west Burlington neighbourhoods face the highest mosquito activity due to proximity to Bronte Creek Provincial Park and the Bronte Creek valley. Properties within 500 metres of the creek experience consistent season-long pressure.</p>

          <h3>Roseland, Shoreacres &amp; Lakeshore</h3>
          <p>Mature lakeshore neighbourhoods benefit from lake breezes but the dense tree canopy, established gardens, and proximity to Burlington Bay create significant daytime resting habitat. Evening mosquito activity is elevated near the waterfront throughout the season.</p>

          <h3>Alton Village, Millcroft &amp; The Orchard</h3>
          <p>North Burlington's newer developments contain stormwater management ponds that become active mosquito breeding sites from May through September. First-season homeowners in these areas frequently report unexpected mosquito pressure from these engineered water features.</p>

          <h3>North Burlington &amp; Waterdown (RBG border)</h3>
          <p>Properties adjacent to or within 600 metres of Royal Botanical Gardens lands experience elevated mosquito pressure from the naturalized wetlands and mature vegetation within the RBG boundaries.</p>

          <h2>Burlington Neighbourhoods We Serve</h2>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map(({ name, href }) => href ? (
              <Link key={name} href={href} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full hover:bg-brand-100 transition-colors">{name}</Link>
            ) : (
              <span key={name} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full">{name}</span>
            ))}
          </div>

          <CityPriceCard city={CITY} service="mosquito" location="price_card_mid" />

          <h2>Mosquito Control Pricing in Burlington</h2>
          <p>BuzzSkito treatments start from $99 per visit — no contracts, no pressure to commit to a full season.</p>
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
                  { type: 'Standard lot (under 10,000 sq ft)', price: 'From $99/treatment', coverage: 'Typical Burlington townhome or detached' },
                  { type: 'Larger lot (10,000–100,000 sq ft)', price: 'Priced by lot size', coverage: 'Larger detached, Roseland, Shoreacres' },
                  { type: 'Estate property (100,000+ sq ft)', price: 'Custom quote', coverage: 'Lakeshore estates, large waterfront lots' },
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
          <p>See our <Link href="/mosquito-control-cost" className="text-brand-700 hover:underline">2026 pricing guide</Link> for a full Ontario breakdown. Call <a href={BUSINESS.phoneHref} className="text-brand-700 font-semibold hover:underline">{BUSINESS.phone}</a> for a free quote.</p>

          <h2>What to Ask Any Mosquito Control Company in Burlington</h2>
          <p>Burlington homeowners have several professional options. Ask every company you call the same five questions and compare the answers side by side.</p>
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
          <p>A company that answers all five questions clearly, in writing, is easy to compare. BuzzSkito treats mosquitoes and ticks only, so ask any generalist pest or lawn company how much of its work is mosquito and tick control.</p>

          <h2>How to Choose a Mosquito Control Company in Burlington</h2>
          <ol>
            <li><strong>Ask which product will be used.</strong> Every pest control product used in Canada carries a Pest Control Products Act (PCP) number on its label, and it must be applied according to that label. Ask before booking.</li>
            <li><strong>Verify the applicator&apos;s licence.</strong> Ontario requires a Pesticide Applicator&apos;s Licence for any commercial application. Hesitation on this question is your answer. BuzzSkito&apos;s is {PROMISES.licence}.</li>
            <li><strong>Get the rain guarantee in writing.</strong> If rain falls within an hour of application the product hasn&apos;t cured. A reputable company re-treats at no charge &mdash; ours is a rain-back guarantee on every plan.</li>
            <li><strong>Read Burlington reviews specifically.</strong> A national franchise can hold strong Toronto ratings and weak Halton ones. Filter reviews to your own city.</li>
            <li><strong>Test their local knowledge.</strong> A technician who can explain how Bronte Creek, the Escarpment slope behind Tyandaga, and the Royal Botanical Gardens boundary each drive pressure differently has actually worked here.</li>
            <li><strong>Compare single-treatment pricing, not package totals.</strong> The per-visit price is the only number that lets you compare providers like for like.</li>
            <li><strong>Ask about the tick add-on.</strong> Burlington has confirmed blacklegged tick habitat along the greenbelt and Escarpment. Our tick programme runs 5 sprays per season and bundles with any mosquito plan.</li>
          </ol>

          <h2>Professional Mosquito Control vs. DIY in Burlington</h2>
          <ul>
            <li><strong>Consumer foggers provide hours of relief, not a season of scheduled treatments.</strong> Professional barrier spray is applied to the leaf surfaces where mosquitoes rest and renewed on a schedule.</li>
            <li><strong>Mosquitoes rest where foggers can&apos;t reach.</strong> Leaf undersides, shaded shrub interiors, and under deck joists — precision backpack sprayers target these surfaces directly.</li>
            <li><strong>Burlington&apos;s mosquito sources are beyond your control.</strong> Bronte Creek, Burlington Bay, and the Royal Botanical Gardens will produce mosquitoes every season. Barrier spray treats the surfaces where they rest once they reach your property.</li>
            <li><strong>Larvicide tablets don&apos;t solve it.</strong> You can treat your own standing water and still have severe mosquitoes from off-property sources.</li>
          </ul>

          <h2>What to Expect on Treatment Day</h2>
          <ol>
            <li><strong>Visit window</strong> — {PROMISES.visitWindow} You don&apos;t need to be home.</li>
            <li><strong>Property walkthrough</strong> — assess waterfront exposure, vegetation density, and risk factors.</li>
            <li><strong>Full barrier application</strong> — all vegetation, fence lines, deck undersides, woodpiles. 25–40 minutes.</li>
            <li><strong>Lawn sign placement</strong> — confirms treatment date and product.</li>
            <li><strong>Drying time</strong> — keep people and pets off treated areas until the spray has dried, as the product label directs.</li>
            <li><strong>Email confirmation</strong> — treatment log with next visit date.</li>
          </ol>

          <h2>Also Providing Tick Control in Burlington</h2>
          <p>Burlington's wooded greenbelt corridors and Escarpment trails are significant tick habitat. See our <Link href="/burlington-tick-spray" className="text-brand-700 hover:underline">Burlington tick control service</Link>.</p>
          <p>Ticks also start well before mosquito season does. Adults become active on the escarpment slope as early as the second week of March here, months ahead of the first mosquito treatment — the full picture is in <Link href="/blog/tick-season-burlington-when-are-ticks-active" className="text-brand-700 hover:underline">when ticks are active in Burlington</Link>.</p>

          <h2>Everything Burlington Homeowners Ask About Mosquito Control</h2>

          <h3>How does the Niagara Escarpment affect mosquitoes in my Burlington yard?</h3>
          <p>The Niagara Escarpment rises directly behind Burlington&apos;s northern neighbourhoods (Tyandaga, North Burlington, Aldershot) and creates sheltered microclimates where humidity stays high and mosquito populations persist later into the evening. Combined with Bronte Creek to the west and Lake Ontario to the south, Burlington has mosquito pressure from three directions. Properties closest to the Escarpment face or to Bronte Creek experience the most intense activity.</p>

          <h3>Does Halton Region or the City of Burlington spray for mosquitoes?</h3>
          <p>No &mdash; not on residential properties. Halton Region Public Health does targeted larviciding of catch basins for West Nile virus monitoring, and the City of Burlington maintains storm infrastructure. Neither program treats private yards. Yard-level mosquito control is the homeowner&apos;s responsibility.</p>

          <h3>How much does Burlington mosquito control cost for a typical lot?</h3>
          <p>For a standard Burlington residential lot under 10,000 sq ft: from $99 per single treatment, with season plans from $549 (plus HST). Larger lakefront, Tyandaga, or Aldershot estate properties require a custom quote based on coverage area. No contracts &mdash; book one treatment and decide whether to continue based on results.</p>

          <h3>When should I book my first Burlington mosquito treatment?</h3>
          <p>Mid-May for most properties. Burlington&apos;s lakefront and Escarpment-edge microclimates can produce mosquito activity slightly earlier than inland Burlington &mdash; sometimes by early May in warm springs. Booking before peak season (late May–July) ensures the barrier is established before mosquito numbers climb.</p>

          <h3>Are there mosquitoes near Burlington Bay and the lakefront?</h3>
          <p>Yes &mdash; Burlington Bay&apos;s shoreline vegetation and high lakefront humidity support active mosquito populations through the evening. Spencer Smith Park, LaSalle Park, and Aldershot lakeshore properties experience the most lakefront activity. Wind off the lake helps during the day, but calm evenings create heavy feeding windows.</p>

          <h3>How does Bronte Creek affect Burlington west-end mosquitoes?</h3>
          <p>Bronte Creek forms the western border between Burlington and Oakville and is a continuous mosquito breeding corridor. Burlington properties in the west end (off Walker&apos;s Line, Cumberland Avenue, and along the creek) experience some of the highest mosquito pressure in the city. Barrier spray treats your property &mdash; it doesn&apos;t fix the creek source, but it treats the surfaces where mosquitoes rest once they arrive.</p>

          <h3>How do mosquito treatments work around a Burlington flower garden?</h3>
          <p>The product is applied to mosquito resting surfaces (undersides of leaves, shrub interiors) rather than flower blooms, according to its label directions. We avoid direct application to actively flowering plants and maintain buffer zones around vegetable gardens. Point out any beds you want left untreated before the visit.</p>

          <h3>Why are Tyandaga and North Burlington especially affected?</h3>
          <p>Tyandaga and North Burlington back onto the Niagara Escarpment, with mature ravines, conservation lands, and the Royal Botanical Gardens nearby. The Escarpment&apos;s sheltered microclimate, dense forest understorey, and abundant standing water in Escarpment seeps create exceptional mosquito breeding and resting habitat that disperses into adjacent residential areas.</p>

          <h3>Can mosquitoes breed in my Burlington pool cover?</h3>
          <p>Yes &mdash; pool covers that collect rainwater are one of the most overlooked breeding sites. Drain cover puddles weekly during peak season, or treat with BTI mosquito dunks (follow the label directions). Active chlorinated pools cannot support mosquito breeding &mdash; the chlorine kills larvae.</p>

          <h3>Can BuzzSkito treat my Burlington backyard before a wedding?</h3>
          <p>Yes &mdash; pre-event treatment is a common booking. We recommend the spray 2–4 days before your event. Booking a few days ahead leaves room to reschedule if the forecast turns wet. For backyard weddings or large gatherings in Roseland, Aldershot, or Tyandaga, this timing window works well.</p>

          <h3>What happens if it rains right after my Burlington treatment?</h3>
          <p>{PROMISES.rainBack} That rain-back guarantee is separate from the Bite-Free Guarantee, which applies to Standard &amp; Exclusive plans.</p>

          <h3>Does mosquito spray work against Burlington ticks too?</h3>
          <p>Barrier spray is also used against blacklegged ticks, but tick control requires different application zones &mdash; the 1–3 ft transition zone where lawn meets woods and garden bed edges. We offer separate Burlington tick treatment for properties near Bronte Creek, Tyandaga ravines, or the Royal Botanical Gardens &mdash; all confirmed tick habitat. Many Burlington homeowners bundle both.</p>

          {/* Related Guides */}

          <h2>Compare Burlington Pest Control Options</h2>
          <p>Looking at all your Burlington pest control options? See our specialist guide: <Link href="/pest-control-burlington" className="text-brand-700 hover:underline font-semibold">Pest Control in Burlington</Link> — explains why a mosquito and tick specialist beats a generalist for the two pests that actually drive Burlington backyard misery. For more on weighing providers see <Link href="/buzzskito-vs-mosquitoman" className="text-brand-700 hover:underline">compare mosquito control options</Link>, <Link href="/buzzskito-vs-lawnsavers" className="text-brand-700 hover:underline">compare a specialist with a lawn-care add-on</Link>, and <Link href="/buzzskito-vs-mosquito-buzz" className="text-brand-700 hover:underline">compare a local company with a franchise</Link>, or the <Link href="/best-mosquito-control-companies-gta" className="text-brand-700 hover:underline">GTA master comparison</Link>.</p>
          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
            <li><Link href="/blog/mosquito-vs-diy-vs-professional-control" className="text-brand-700 hover:underline">DIY vs. Professional Mosquito Control: What Actually Works</Link></li>
            <li><Link href="/blog/mosquito-tick-control-hamilton-burlington" className="text-brand-700 hover:underline">Hamilton &amp; Burlington Mosquito &amp; Tick Control Guide</Link></li>
            <li><Link href="/blog/hidden-mosquito-breeding-spots-backyard" className="text-brand-700 hover:underline">Hidden Mosquito Breeding Spots in Your GTA Backyard</Link></li>
            <li><Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{TICK_BLOGS.pillar.title}</Link></li>
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <p className="kicker mb-3 text-center">Reviews</p>
          <h2 className="h2-display text-brand-900 mb-2 text-center">What Burlington Homeowners Say</h2>
          <p className="text-center text-gray-500 text-sm mb-8">From our 150+ five-star Google reviews</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { author: 'Anthony', location: 'Milton', text: 'Highly recommend this company for mosquito control. I got my house in Milton serviced recently and loved the end result!' },
              { author: 'Sandra H.', location: 'Roseland', text: 'Our mature garden near the lake was a mosquito magnet. BuzzSkito treated it carefully around all our plants and the results were immediate. Very professional team.' },
              { author: 'Greg W.', location: 'Aldershot', text: 'Living near the waterfront means mosquitoes every summer. We tried everything before calling BuzzSkito. One treatment made more difference than years of citronella candles.' },
              { author: 'Lisa M.', location: 'Millcroft', text: 'The stormwater pond behind our house made our backyard unusable. BuzzSkito changed that completely. Great communication, professional service, and our yard is finally enjoyable.' },
            ].map(({ author, location, text }) => (
              <div key={author} className="bg-brand-50 rounded-2xl p-6 border border-brand-100">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-3 italic">&ldquo;{text}&rdquo;</p>
                <p className="text-brand-800 font-semibold text-sm">{author} — <span className="text-gray-500 font-normal">{location}, Burlington</span></p>
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
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">FAQ – {CITY} Mosquito Spray</h2>
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
        </div>
      </section>

      <CTASection heading={`Get a Free Mosquito Spray Quote in ${CITY}`} subtext="No contracts. Rain-back guarantee on every plan. Book your Burlington treatment today." />
    </>
  )
}
