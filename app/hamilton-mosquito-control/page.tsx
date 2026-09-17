import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import CityHero from '@/components/CityHero'
import QuickAnswer from '@/components/QuickAnswer'
import TypicalPrices from '@/components/TypicalPrices'
import CityPriceCard from '@/components/CityPriceCard'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema, howToSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS, PROMISES } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Hamilton Mosquito Control 2026 · From $99 · 150+ Five-Star Reviews',
  description:
    'Mosquito control in Hamilton from $99. Compare local providers, pricing and contract terms. Serving Ancaster, Dundas, Stoney Creek. Call (289) 216-5030.',
  canonical: '/hamilton-mosquito-control',
})

const CITY = 'Hamilton'
const SLUG = '/hamilton-mosquito-control'
const TICK_SLUG = '/hamilton-tick-spray'
const NEIGHBOURHOODS: { name: string; href?: string }[] = [
  { name: 'Stoney Creek', href: '/stoney-creek-mosquito-control' },
  { name: 'Dundas', href: '/dundas-mosquito-control' },
  { name: 'Ancaster', href: '/ancaster-mosquito-control' },
  { name: 'Westdale' },
  { name: 'Waterdown', href: '/waterdown-mosquito-control' },
  { name: 'Ainslie Wood' },
  { name: 'Downtown Hamilton' },
  { name: 'Mount Hope' },
  { name: 'Binbrook' },
  { name: 'Flamborough', href: '/flamborough-mosquito-control' },
  { name: 'Rymal' },
  { name: 'Glanbrook' },
]

const FAQS = [
  {
    question: 'How much does mosquito control cost in Hamilton?',
    answer: 'BuzzSkito mosquito control in Hamilton starts from $99 per application. Properties near Cootes Paradise, the Niagara Escarpment, or Red Hill Creek Valley typically benefit most from the full seasonal package for continuous protection. No contracts. Call (289) 216-5030 for a free Hamilton quote.',
  },
  {
    question: 'Why does Hamilton have such a significant mosquito problem?',
    answer: "Hamilton's geography creates a perfect combination of mosquito breeding habitat. Cootes Paradise — one of the Great Lakes basin's largest urban wetlands — sits directly adjacent to Hamilton's west end residential areas, producing enormous quantities of mosquitoes from May through September. Red Hill Creek, Spencer Creek, and the dozens of smaller watercourses that flow through Hamilton neighbourhoods provide additional breeding sites. The Niagara Escarpment channels moisture into the lower city, keeping vegetation wet and creating the cool, humid microclimate adult mosquitoes prefer for resting. Neighbourhoods in Westdale, Ainslie Wood, Dundas, and Ancaster — which back onto ravines, creeks, or conservation land — experience the most intense annual pressure.",
  },
  {
    question: 'What areas of Hamilton have the worst mosquito problems?',
    answer: "The highest mosquito pressure in Hamilton is found in areas immediately adjacent to Cootes Paradise (Westdale, Ainslie Wood, Ancaster), along Red Hill Creek (east Hamilton), along Spencer Creek (Dundas, Greensville), and near Binbrook Conservation Area in Glanbrook. Flamborough and Waterdown also face meaningful pressure due to proximity to Spencer Creek headwaters and rural wetlands. Even interior Hamilton neighbourhoods that aren't directly adjacent to watercourses see significant mosquito activity because adult mosquitoes can travel 3–5 km from breeding sites.",
  },
  {
    question: 'What is residential mosquito spray service in Hamilton?',
    answer: "Residential mosquito spray — also called barrier spray or barrier treatment — is a professional service where a licensed technician applies a fine residual insecticide mist to all the vegetation on your property: shrubs, hedges, garden beds, fence lines, and the underside of leaves up to 10 feet high. This is where mosquitoes rest during the day. The spray dries onto those surfaces, and treatments are repeated on a set schedule through the season (monthly, every two weeks or weekly, depending on the plan). BuzzSkito's residential mosquito spray service in Hamilton is applied by an Ontario-licensed pesticide operator (Licence L-240-2436835197), with products applied according to label directions. Keep people and pets off treated areas until the spray has dried, as the product label directs.",
  },
  {
    question: 'How many mosquito treatments does a Hamilton property need per season?',
    answer: "Season plans run May through September: Basic (5 sprays, monthly), Standard (10 sprays, every 2 weeks) or Exclusive (20+ sprays, weekly). Many Hamilton properties are well-served by Basic; properties immediately adjacent to Cootes Paradise, Red Hill Creek, or Spencer Creek — which face continuous re-pressure from large adjacent breeding areas — typically benefit from Standard's two-week spacing. Hamilton's season typically starts earlier in the spring than outer GTA communities because the lower city's microclimate warms faster than the Escarpment.",
  },
  {
    question: 'How much does professional mosquito spray cost in Hamilton?',
    answer: "Mosquito spray pricing varies by property size and the number of treatments in a seasonal program. On a standard lot under 10,000 sq ft, a single visit starts from $99, and season plans are $549 (Basic, 5 sprays), $994 (Standard, 10 sprays) or $2,049 (Exclusive, 20+ sprays), plus HST. BuzzSkito provides free quotes for all Hamilton properties — call (289) 216-5030 or use our online contact form. There are no contracts: you can book individual treatments or a full seasonal program. Rain within 1 hour of your treatment? We come back and re-treat free, on every plan. Standard and Exclusive plans also carry the Bite-Free Guarantee: if mosquitoes come back between scheduled treatments, we re-treat at no charge.",
  },
  {
    question: 'How does BuzzSkito compare to other mosquito control companies in Hamilton?',
    answer: "Ask every Hamilton company the same five questions: Is the price shown before you book? How many sprays per season? What happens if it rains after a treatment? Is an Ontario pesticide operator licence number shown? Which plans include a guarantee? BuzzSkito's answers: from $99 on a standard lot; 5, 10 or 20+ sprays per season (tick: 5); a rain-back re-treat if it rains within 1 hour, on every plan; Ontario Pesticide Operator Licence L-240-2436835197; and the Bite-Free Guarantee on Standard & Exclusive plans. BuzzSkito is a mosquito and tick specialist rather than a general pest control company, with 150+ five-star Google reviews at a 5.0 average. The checklist table on this page sets the questions out side by side.",
  },
  {
    question: 'Do Hamilton mosquito control companies require a contract?',
    answer: "BuzzSkito does not. You can book a single Hamilton treatment from $99 with no seasonal commitment and no cancellation fee, then decide based on results. Seasonal programs are available if you want scheduled coverage through the May–September season, but they are optional. The other providers serving Hamilton generally structure their service around seasonal programs, so confirm the terms — including any automatic renewal clause — before you book.",
  },
  {
    question: 'What should I look for in a Hamilton mosquito control company?',
    answer: "Six things: products applied according to label directions; an Ontario Pesticide Applicator's Licence held by the technician actually spraying; a written re-treatment guarantee if it rains within an hour of treatment; pricing published up front rather than withheld until an in-home estimate; single-treatment pricing you can compare directly instead of only seasonal package totals; and reviews from Hamilton customers specifically, because Cootes Paradise and Escarpment pressure is not the same problem a Toronto crew is solving.",
  },
  {
    question: 'What precautions apply for children and pets after a Hamilton treatment?',
    answer: "BuzzSkito's Hamilton treatments are applied by an Ontario-licensed pesticide operator (Licence L-240-2436835197), and products are applied according to label directions. Keep children and pets off treated areas until the spray has dried, as the product label directs. The spray is aimed at leaf surfaces and vegetation where mosquitoes rest, not at open lawn. We observe buffer zones around vegetable gardens, sandboxes, and pet areas on every property we treat.",
  },
  {
    question: 'Does BuzzSkito provide tick control in Hamilton too?',
    answer: "Yes. Hamilton's Dundas Valley, Escarpment trail system, and conservation areas are established blacklegged tick habitat. The Dundas Valley Conservation Area, Westfield Heritage Village trails, and the Bruce Trail through the Escarpment all carry tick risk. Many Hamilton homeowners bundle mosquito and tick control in a single visit for complete yard protection. See our Hamilton tick spray service for details.",
  },
]

export default function HamiltonMosquitoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema({ areaServed: CITY, description: `Professional mosquito control service in ${CITY}, Ontario. Barrier spray for residential lawns serving all ${CITY} neighbourhoods.` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${CITY}`, description: `Professional mosquito barrier spray for residential properties in ${CITY}, Ontario.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: CITY, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(SLUG, '2026-07-01')) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ service: 'mosquito', city: 'Hamilton' })) }} />

      <CityHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Mosquito Control', href: '/mosquito-control' },
          { label: CITY },
        ]}
        title={<>Hamilton Mosquito Control</>}
        titleAccent={<>From $99 · 150+ Five-Star Reviews</>}
        subtitle={<>Licensed Ontario pesticide operator. Treatments applied according to label directions, with specialist barrier spray for Cootes Paradise, Dundas Valley, escarpment, and creek-adjacent Hamilton properties.</>}
        image="/spray-backyard.webp"
      />

      {/* Trust bar */}
      <section className="bg-brand-900 text-white py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-200">
          <span>✓ {PROMISES.licence}</span>
          <span>✓ {PROMISES.labelLine}</span>
          <span>✓ {PROMISES.rainBackShort}</span>
          <span>✓ {PROMISES.biteFreeScope}</span>
          <span>✓ 5-Star Rated · 150+ Reviews</span>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <QuickAnswer question="What is the best mosquito control company in Hamilton?">
        <p>
          <strong>BuzzSkito provides specialist mosquito barrier spray across Hamilton — Stoney Creek, Dundas, Ancaster, Westdale, Waterdown, Rymal, Downtown Hamilton, Mount Hope, and Binbrook.</strong> Treatments are applied by an Ontario-licensed pesticide operator, according to label directions, to vegetation and shrub interiors where mosquitoes rest. Single treatments start at <strong>$99</strong> on a standard lot under 10,000 sq ft, with season plans from $549. With <strong>150+ five-star Google reviews</strong>, no contracts, a rain-back guarantee on every plan, and the <strong>Bite-Free Guarantee on Standard &amp; Exclusive plans</strong>, Hamilton homeowners get reliable barrier spray for escarpment, Cootes Paradise, and Dundas Valley properties. Call (289) 216-5030.
        </p>
      </QuickAnswer>

      {/* KEY FACTS */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Hamilton Mosquito Control Key Facts</h2>
          <div className="rounded-xl border border-navy-100 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Service area', 'All Hamilton neighbourhoods (Stoney Creek, Dundas, Ancaster, Westdale, Waterdown, Rymal, Downtown Hamilton, Mount Hope, Binbrook, Flamborough)'],
                  ['Specialization', 'Mosquito barrier spray for residential properties'],
                  ['Pricing', 'From $99 per treatment on a standard lot under 10,000 sq ft · season plans from $549 (plus HST)'],
                  ['Treatment season', 'May through September (peak: late May–July)'],
                  ['Sprays per season', '5 (Basic), 10 (Standard) or 20+ (Exclusive) · tick: 5'],
                  ['Re-entry', 'Stay off treated areas until the spray has dried, as the product label directs'],
                  ['Licence', PROMISES.licence],
                  ['Recommended schedule', 'Standard (10 sprays, every 2 weeks) for escarpment- or creek-adjacent properties; Basic (5 sprays, monthly) for lower-exposure lots'],
                  ['Highest pressure zones', 'Cootes Paradise · Dundas Valley · Red Hill Creek · Niagara Escarpment edge · Bayfront'],
                  ['Booking lead time', 'Same-week service typical'],
                  ['Contract required', 'No — single treatments and seasonal programs both available'],
                  ['Guarantee', `${PROMISES.rainBackShort} · ${PROMISES.biteFreeScope}`],
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

      <TypicalPrices service="mosquito" city="Hamilton" />

      {/* How It Works */}
      <section className="py-14 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <p className="kicker mb-3 text-center">Our Process</p>
          <h2 className="h2-display text-brand-900 mb-8 text-center">How BuzzSkito Mosquito Control Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Free Property Assessment', desc: 'We evaluate your Hamilton property — identifying Escarpment exposure, creek proximity, and mosquito pressure zones specific to your neighbourhood.' },
              { step: '2', title: 'Professional Barrier Spray', desc: 'Our licensed technician applies barrier spray, according to label directions, to all vegetation, shrub interiors, leaf undersides, fence lines, and property perimeters using a precision backpack sprayer.' },
              { step: '3', title: 'Rain-Back Guarantee', desc: `${PROMISES.rainBack} Standard and Exclusive plans also carry the Bite-Free Guarantee between scheduled visits.` },
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
          <h2>Why Hamilton Has Intense Mosquito Pressure</h2>
          <p>Hamilton is one of the GTA&apos;s most challenging cities for mosquito control because of its unique combination of natural features. Cootes Paradise — a 250-hectare wetland complex at the western end of Hamilton Harbour — is one of the largest urban wetlands in the Great Lakes basin. It generates enormous quantities of mosquitoes from May through September, and its proximity to Westdale, Ainslie Wood, and Ancaster means that residents in Hamilton&apos;s west end face continuous re-pressure from this massive breeding source throughout the season.</p>
          <p>Red Hill Creek runs north through the east end from Glanbrook to the Harbour, providing a second major mosquito corridor. Spencer Creek drains the Dundas Valley and flows through Dundas, Greensville, and Ancaster. The Niagara Escarpment channels moisture and creates cool, humid air pockets in the lower city that adult mosquitoes exploit as daytime resting habitat. Combined, these features give Hamilton a mosquito season that often starts earlier than other GTA cities and lasts well into September.</p>
          <p>The east end stacks several of those features into one community: Stoney Creek runs from the Lake Ontario shoreline up to the Escarpment brow with the Red Hill ravine cutting through the middle. We map that pressure area by area in <Link href="/blog/mosquito-tick-control-stoney-creek" className="text-brand-700 hover:underline">the Stoney Creek mosquito and tick breakdown</Link>.</p>
          <p>For Hamilton homeowners, professional mosquito barrier spray is the most reliable way to reclaim backyard space. BuzzSkito&apos;s service targets every surface on your property where mosquitoes rest — shrubs, hedges, under-deck vegetation, fence lines, and garden bed borders — with treatments repeated on a set schedule through the season.</p>

          <h2>Hamilton Neighbourhoods We Serve for Mosquito Control</h2>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map(({ name, href }) => href ? (
              <Link key={name} href={href} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full hover:bg-brand-100 transition-colors">{name}</Link>
            ) : (
              <span key={name} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full">{name}</span>
            ))}
          </div>
          <p>We serve all Hamilton addresses — from the Mountain to the Harbourfront, from Flamborough to Stoney Creek. Call <a href={BUSINESS.phoneHref} className="text-brand-700 hover:underline font-semibold">{BUSINESS.phone}</a> to confirm service at your specific address.</p>

          <h2>What&apos;s Included in Every Hamilton Mosquito Treatment</h2>
          <ul>
            <li><strong>Full-yard barrier spray</strong> — We treat all vegetation, shrubs, hedges, garden beds, fence lines, and under-canopy surfaces where mosquitoes rest during the day. Coverage up to 10 feet high.</li>
            <li><strong>Residual barrier on leaf surfaces</strong> — The formula dries onto the leaf surfaces where mosquitoes rest, and treatments repeat monthly, every two weeks or weekly depending on your plan.</li>
            <li><strong>Rain-back guarantee</strong> — {PROMISES.rainBack}</li>
            <li><strong>Label-directed application</strong> — {PROMISES.labelLine}, by an operator holding {PROMISES.licence}. Keep children and pets off treated areas until the spray has dried, as the product label directs.</li>
            <li><strong>Bite-Free Guarantee on Standard &amp; Exclusive plans</strong> — If mosquitoes come back between scheduled treatments, we re-treat at no additional charge.</li>
            <li><strong>Written service documentation</strong> — Every visit includes a detailed service log delivered by SMS after treatment.</li>
          </ul>

          <h2>Recommended Hamilton Mosquito Treatment Schedule</h2>
          <p>Season plans run May through September: Basic (5 sprays, monthly), Standard (10 sprays, every 2 weeks) or Exclusive (20+ sprays, weekly). Many Hamilton properties are well-served by Basic; properties adjacent to Cootes Paradise, Red Hill Creek, or Spencer Creek typically benefit from Standard&apos;s two-week spacing. Early May treatment is especially important in Hamilton because the lower city&apos;s microclimate means mosquitoes emerge earlier here than in many GTA suburbs.</p>

          <h2>Tick Control in Hamilton</h2>
          <p>Hamilton&apos;s Dundas Valley Conservation Area, Escarpment trails, and the Bruce Trail corridor are established blacklegged tick habitat. Many Hamilton homeowners bundle mosquito and tick control in a single visit. See our <Link href={TICK_SLUG} className="text-brand-700 hover:underline">Hamilton tick spray service</Link> for details.</p>

          <CityPriceCard city="Hamilton" service="mosquito" />

          <h2>Everything Hamilton Homeowners Ask About Mosquito Control</h2>

          <h3>How does Cootes Paradise affect mosquitoes in my Hamilton yard?</h3>
          <p>Cootes Paradise &mdash; one of the Great Lakes basin&apos;s largest urban wetlands &mdash; sits directly adjacent to Hamilton&apos;s west end residential areas (Westdale, Ainslie Wood, McMaster area). It produces enormous quantities of mosquitoes from May through September. Properties within 2 km of Cootes Paradise face the most intense seasonal pressure in Hamilton. Barrier spray treats your property &mdash; it doesn&apos;t fix the marsh source, but it stops mosquitoes from settling once they arrive.</p>

          <h3>Does Hamilton Public Health or the City spray for mosquitoes?</h3>
          <p>No &mdash; not on residential properties. Hamilton Public Services performs targeted larviciding of catch basins for West Nile surveillance. The City does not treat private yards. Yard-level mosquito control is the homeowner&apos;s responsibility.</p>

          <h3>How much does Hamilton mosquito control cost for a typical lot?</h3>
          <p>For a standard Hamilton residential lot under 10,000 sq ft: from $99 per single treatment. Larger Ancaster or Dundas estate properties require a custom quote. No contracts &mdash; book one treatment and decide whether to continue.</p>

          <h3>When does Hamilton mosquito season actually start?</h3>
          <p>Hamilton mosquitoes typically emerge when daytime temperatures consistently exceed 10°C &mdash; usually late April or early May. The lower city&apos;s urban heat island effect and Lake Ontario thermal moderation often produce activity slightly earlier than inland GTA cities. Peak runs late May through July.</p>

          <h3>Why are Dundas, Ancaster, and Westdale so affected by mosquitoes?</h3>
          <p>These west Hamilton communities are at the foot of the Niagara Escarpment, immediately adjacent to Cootes Paradise, Spencer Creek (Dundas), and the Bruce Trail corridor. The Escarpment microclimate keeps vegetation moist and humid, creating ideal mosquito resting habitat. Conservation lands and dense forest understorey support sustained mosquito populations across the season.</p>

          <h3>How is mosquito spray kept out of Cootes Paradise and Spencer Creek?</h3>
          <p>The spray is applied to vegetation on your property &mdash; never to water &mdash; and according to the product label, which sets out how close to water it may be used. We maintain buffer zones around any riparian areas at your property line.</p>

          <h3>Are there mosquitoes near the Hamilton waterfront and Bayfront Park?</h3>
          <p>Yes &mdash; Hamilton Harbour shoreline vegetation and high humidity create lakefront mosquito activity that affects east-end properties from Bayfront through Confederation Park. Wind off the lake helps during the day, but calm evenings create heavy feeding windows.</p>

          <h3>Can mosquitoes breed in my Hamilton rain barrel or pool cover?</h3>
          <p>Yes &mdash; both are common backyard breeding sites. Uncovered rain barrels can produce thousands of mosquitoes per week. Pool covers collecting rainwater are major sources. Solutions: tight-fitting screen on barrel inlets, BTI mosquito dunks for any standing water that can&apos;t be drained, and weekly draining of pool cover puddles during peak season.</p>

          <h3>Why does Stoney Creek see strong mosquito activity?</h3>
          <p>Stoney Creek&apos;s Red Hill Creek corridor, ravine system, and proximity to Lake Ontario&apos;s south shore create sustained mosquito pressure. Properties along the Red Hill Valley Parkway corridor and lakefront Stoney Creek face the most exposure. Our Stoney Creek mosquito control service serves this area.</p>

          <h3>Can BuzzSkito treat my Hamilton backyard before a wedding or party?</h3>
          <p>Yes &mdash; pre-event treatment is a common booking. We recommend the spray 2–4 days before your event, so it has dried well before guests arrive and there is room to re-book if the forecast turns wet. For backyard weddings or graduations in Westdale, Dundas, or Ancaster, tell us the event date when you book.</p>

          <h3>What happens if it rains right after my Hamilton treatment?</h3>
          <p>If it rains within 1 hour of your treatment, we come back and re-treat free. That rain-back guarantee comes with every plan; it is separate from the Bite-Free Guarantee, which covers Standard and Exclusive plans.</p>

          <h3>Does mosquito spray work against Hamilton ticks too?</h3>
          <p>Barrier spray is also used against blacklegged ticks, but tick control requires different application zones &mdash; the 1–3 ft transition zone where lawn meets woods. Hamilton tick risk is significant: Dundas Valley Conservation Area, Bruce Trail corridor, and Royal Botanical Gardens edge are confirmed blacklegged tick habitat. Many Hamilton homeowners bundle our Hamilton tick spray with mosquito control.</p>

          {/* Related Guides */}

          <h2>What to Ask Any Mosquito Control Company in Hamilton</h2>
          <p>Hamilton homeowners have a handful of professional options, and they aren&rsquo;t structured the same way. These five questions make any quote easy to compare. Here is how BuzzSkito answers them.</p>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-800 text-white">
                  <th className="px-4 py-2 text-left">Question to ask</th>
                  <th className="px-4 py-2 text-left">BuzzSkito&apos;s answer</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Is the price shown before you book?', 'From $99 on a standard lot'],
                  ['How many sprays per season?', '5, 10 or 20+ (tick: 5)'],
                  ['What happens if it rains after a treatment?', PROMISES.rainBack],
                  ['Is an Ontario pesticide operator licence number shown?', `Yes: ${BUSINESS.licenseNumber}`],
                  ['Which plans include a guarantee?', 'Rain-back on every plan; Bite-Free on Standard & Exclusive'],
                ].map(([q, a]) => (
                  <tr key={q} className="border-b border-gray-200">
                    <td className="px-4 py-2 font-semibold text-brand-900">{q}</td>
                    <td className="px-4 py-2">{a}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>How to Choose a Mosquito Control Company in Hamilton</h2>
          <ol>
            <li><strong>Ask which product will be used.</strong> A professional should name it and apply it according to its label directions. Ask before booking.</li>
            <li><strong>Check the applicator&rsquo;s licence.</strong> Ontario requires a Pesticide Applicator&rsquo;s Licence for any commercial application — the person holding the sprayer, not just the company.</li>
            <li><strong>Get the rain guarantee in writing.</strong> Look for a free re-treatment if it rains within an hour of treatment. Anyone who won&rsquo;t put that in writing is worth skipping.</li>
            <li><strong>Look for pricing published up front.</strong> Companies that hold back every number until an in-home estimate are usually treating the estimate as a sales visit.</li>
            <li><strong>Compare single-treatment pricing, not just seasonal totals.</strong> Per-visit price is the only number that shows what you actually get for the money.</li>
            <li><strong>Read Hamilton reviews specifically, and ask Hamilton questions.</strong> A crew that can explain Cootes Paradise carry, Spencer Creek in Dundas, or Red Hill Creek in the east end knows the pressure on your street. Regional franchises sometimes have strong Toronto reviews and thin Hamilton coverage.</li>
          </ol>
          <p>BuzzSkito meets all six: products applied according to label directions, {PROMISES.licence}, a rain-back guarantee on every plan (plus the Bite-Free Guarantee on Standard &amp; Exclusive plans), published $99 single-treatment pricing, and 150+ five-star reviews with named Hamilton neighbourhoods in them.</p>

          <h2>Compare Hamilton Pest Control Options</h2>
          <p>Looking at all your Hamilton pest control options? See our specialist guide: <Link href="/pest-control-hamilton" className="text-brand-700 hover:underline font-semibold">Pest Control in Hamilton</Link> — explains why a mosquito and tick specialist beats a generalist for the two pests that actually drive Hamilton backyard misery. For more detail on how different kinds of provider are set up, see <Link href="/buzzskito-vs-mosquitoman" className="text-brand-700 hover:underline">compare mosquito control options</Link>, <Link href="/buzzskito-vs-lawnsavers" className="text-brand-700 hover:underline">specialist vs lawn-care bundles</Link>, <Link href="/buzzskito-vs-mosquito-buzz" className="text-brand-700 hover:underline">specialist vs franchise service</Link>, or the <Link href="/best-mosquito-control-companies-gta" className="text-brand-700 hover:underline">GTA-wide provider comparison</Link>.</p>
          <h2>Related Guides</h2>
          <ul>
            <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
            <li><Link href="/blog/west-nile-virus-mosquito-risk-ontario" className="text-brand-700 hover:underline">West Nile Virus &amp; Mosquito Risk in Ontario</Link></li>
            <li><Link href="/blog/mosquito-tick-control-hamilton-burlington" className="text-brand-700 hover:underline">Mosquito &amp; Tick Control in Hamilton and Burlington</Link></li>
            {MOSQUITO_BLOGS.supporting.slice(0, 2).map(b => <li key={b.slug}><Link href={`/blog/${b.slug}`} className="text-brand-700 hover:underline">{b.title}</Link></li>)}
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <p className="kicker mb-3 text-center">Reviews</p>
          <h2 className="h2-display text-brand-900 mb-2 text-center">What Hamilton Homeowners Say</h2>
          <p className="text-center text-gray-500 text-sm mb-8">From our 150+ five-star Google reviews</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { author: 'Steve R.', location: 'Westdale', text: 'Living near Cootes Paradise means mosquitoes are a given every summer. BuzzSkito is the first thing that actually made a difference. Professional service, great communication, and our yard is usable again.' },
              { author: 'Karen L.', location: 'Dundas', text: 'The Spencer Creek valley makes our neighbourhood a mosquito hotspot. After the first BuzzSkito treatment the change was dramatic — we can actually sit outside in the evening now.' },
              { author: 'Paul G.', location: 'Ancaster', text: 'Tried citronella, bug zappers, everything. One BuzzSkito treatment did more than years of DIY attempts. The technician was knowledgeable about our specific area and the results speak for themselves.' },
              { author: 'Jennifer W.', location: 'Stoney Creek', text: 'Our backyard backs onto the Escarpment and mosquitoes were terrible. BuzzSkito treated it thoroughly and the difference was immediate. Signed up for the full season package.' },
            ].map(({ author, location, text }) => (
              <div key={author} className="bg-brand-50 rounded-2xl p-6 border border-brand-100">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-3 italic">&ldquo;{text}&rdquo;</p>
                <p className="text-brand-800 font-semibold text-sm">{author} — <span className="text-gray-500 font-normal">{location}, Hamilton</span></p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <a href="https://g.page/r/CYytaw5LxucdEAE/review" target="_blank" rel="noopener noreferrer" className="text-brand-700 font-semibold text-sm hover:underline">Read all 150+ reviews on Google &rarr;</a>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4">
        <CityPriceCard city="Hamilton" service="mosquito" location="price_card_faq" />
      </div>

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
          <p className="text-center mt-6 text-sm text-gray-500">
            More questions? Call <a href={BUSINESS.phoneHref} className="text-brand-700 underline">{BUSINESS.phone}</a> or see our <Link href="/frequently-asked-question" className="text-brand-700 underline">full FAQ</Link>.
          </p>
        </div>
      </section>

      <CTASection heading={`Get a Free Mosquito Control Quote in ${CITY}`} subtext="Serving all Hamilton neighbourhoods from Flamborough to Stoney Creek. No contracts, rain-back guarantee on every plan." />
    </>
  )
}
