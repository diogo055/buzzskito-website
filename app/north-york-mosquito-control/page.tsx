import type { Metadata } from 'next'
import Link from 'next/link'
import CityHero from '@/components/CityHero'
import TypicalPrices from '@/components/TypicalPrices'
import CityPriceCard from '@/components/CityPriceCard'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema, howToSchema } from '@/lib/seo'
import { MOSQUITO_BLOGS, PROMISES } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'North York Mosquito Control 2026 · From $99 · 150+ Five-Star Reviews',
  description:
    "North York mosquito barrier spray from $99, no contracts, rain-back guarantee. Compare providers, pricing and how to choose. Call (289) 216-5030.",
  canonical: '/north-york-mosquito-control',
})

const CITY = 'North York'
const SLUG = '/north-york-mosquito-control'
const TICK_SLUG = '/north-york-tick-spray'
const NEIGHBOURHOODS: { name: string; href?: string }[] = [
  { name: 'Don Mills', href: '/don-mills-mosquito-control' },
  { name: 'Willowdale', href: '/willowdale-mosquito-control' },
  { name: 'Lawrence Park', href: '/lawrence-park-mosquito-control' },
  { name: 'York Mills', href: '/york-mills-mosquito-control' },
  { name: 'Bridle Path', href: '/bridle-path-mosquito-control' },
  { name: 'Bayview Village' },
  { name: 'Lansing' },
  { name: 'Newtonbrook' },
  { name: 'North York Centre' },
  { name: 'Parkwoods' },
]
const FAQS = [
  {
    question: 'How much does mosquito control cost in North York?',
    answer: 'BuzzSkito mosquito control in North York starts from $99 per application. Ravine-adjacent properties near the Don Valley, Serena Gundy Park, or Earl Bales Park typically benefit most from a season plan with more frequent visits, such as Standard (10 sprays, every 2 weeks). No contracts — single visits or full seasonal packages available. Call (289) 216-5030 for a free North York quote.',
  },
  {
    question: 'Why do Don Mills and Bayview Village properties have persistent mosquito problems?',
    answer: "Don Mills and Bayview Village back onto the Don River valley and Wilket Creek ravine — two of Toronto's widest and most continuously moist ravine systems. Serena Gundy Park sits at the confluence of the East Don River and Wilket Creek, with extensive floodplain forest that generates mosquitoes throughout the season. Properties on the valley edges in Don Mills, Parkwoods, and Bayview Village face an almost constant supply of adults drifting up from the ravine, particularly at dawn and dusk. Barrier spray on your yard vegetation is the practical solution for managing this pressure without affecting the ravine itself.",
  },
  {
    question: 'Is the Burke Brook ravine a mosquito source for Lawrence Park homeowners?',
    answer: "Burke Brook ravine, which runs through the heart of Lawrence Park, is one of North York's more significant neighbourhood-scale mosquito sources. The slow-moving stream, shaded by a mature canopy of sugar maples and white cedars, maintains the cool, humid conditions that mosquito larvae need to develop and that adults need to rest and survive between feedings. Sunnybrook Park and its associated creek margins extend this pattern east toward York Mills and Bayview Village. Homeowners backing directly onto Burke Brook or the ravine should prioritize early-May treatments.",
  },
  {
    question: 'Does Willowdale have as much mosquito pressure as the ravine areas?',
    answer: "Willowdale, North York Centre, and Lansing are more urban in character and generally have lower baseline mosquito pressure than the ravine-adjacent communities. However, mature street trees, garden ponds, improperly drained low-lying yards, and neighbourhood parks still produce localized pressure throughout the season. Willowdale homeowners with large, landscaped backyards — particularly those with ornamental water features or dense shrub borders — benefit meaningfully from professional barrier spray.",
  },
  {
    question: 'Who is the best mosquito control company in North York?',
    answer: "Honest answer: it depends on what you value, so ask every company the same five questions. Is the price shown before you book? How many sprays per season? What happens if it rains after a treatment? Is an Ontario pesticide operator licence number shown? Which plans include a guarantee? BuzzSkito's answers: from $99 on a standard lot; 5, 10 or 20+ sprays per season (tick: 5); rain within 1 hour of your treatment is re-treated free on every plan; yes, Ontario Pesticide Operator Licence L-240-2436835197; and the Bite-Free Guarantee on Standard and Exclusive plans. BuzzSkito treats mosquitoes and ticks only, with 150+ five-star Google reviews (5.0 average). For a ravine-edge North York property, specialist depth and a written re-treat guarantee usually matter more than company size.",
  },
  {
    question: 'Do North York mosquito control companies offer no-contract service?',
    answer: 'BuzzSkito is the no-contract option in North York — book a single treatment from $99, pay per visit, no cancellation fees, and judge the results before committing to a season. Seasonal plans are available ($549 for 5 treatments, $994 for 10, $2,049 for 20+) but never required. Most other providers steer you toward a seasonal agreement, so confirm the terms — including any automatic-renewal clause — before you book.',
  },
  {
    question: 'Can I bundle tick control with mosquito spray in North York?',
    answer: "Yes, and most ravine-adjacent North York homeowners do. The Don Valley, Burke Brook, and Sunnybrook Park corridors are blacklegged tick habitat, and the blacklegged tick is the Lyme disease vector in Ontario. Tick control is $597 for the season on its own, or $497 when added to any mosquito plan, and includes five tick treatments timed across the May–September season. Mosquito and tick treatments run on the same visit schedule.",
  },
]

export default function NorthYorkMosquitoPage() {
  const lbSchema = localBusinessSchema({ areaServed: CITY, description: `Professional mosquito control service in ${CITY}, Ontario. Barrier spray for residential lawns serving all ${CITY} neighbourhoods.` })
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${CITY}`, description: `Professional mosquito barrier spray for residential properties in ${CITY}, Ontario.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: CITY, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ service: 'mosquito', city: 'North York' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/north-york-mosquito-control', '2026-07-01')) }} />

      <CityHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Mosquito Control', href: '/mosquito-control' },
          { label: CITY },
        ]}
        title={<>{CITY} Mosquito Control</>}
        titleAccent={<>From $99 · 150+ Five-Star Reviews</>}
        subtitle={<>From Burke Brook ravine in Lawrence Park to Serena Gundy Park in Don Mills — BuzzSkito delivers professional mosquito barrier spray to every North York neighbourhood.</>}
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
      <section className="py-12 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <p className="kicker mb-3 text-center">How It Works</p>
          <h2 className="h2-display text-brand-950 mb-8 text-center">How BuzzSkito Mosquito Control Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Free Property Assessment', desc: 'We evaluate your property — identifying water features, dense vegetation, and mosquito pressure zones specific to your area.' },
              { step: '2', title: 'Professional Barrier Spray', desc: 'Our licensed technician applies a barrier product, according to its label directions, to vegetation, shrub interiors, leaf undersides, and fence lines using a precision backpack sprayer.' },
              { step: '3', title: 'Rain-Back Guarantee', desc: 'Rain within 1 hour of your treatment? We come back and re-treat free, on every plan. Standard & Exclusive plans also carry the Bite-Free Guarantee.' },
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
          <h2>Why Mosquito Pressure Is High in North York</h2>
          <p>North York is threaded by one of Toronto&apos;s most extensive ravine networks. The Don River valley runs along the eastern side of the district, with Wilket Creek and the East Don River feeding through Serena Gundy Park and the Lower Don. Sunnybrook Park — one of the city&apos;s largest ravine parks — extends the valley corridor west through Bayview Village and York Mills, while Burke Brook ravine cuts through the heart of Lawrence Park. The West Don Lands and its tributaries add further standing water habitat in the northwest reaches of the district near Parkwoods and Don Mills.</p>
          <p>This ravine network is one of North York&apos;s defining assets — but for homeowners, it means a dependable and often intense mosquito season. Adults emerging from ravine-bottom floodplains drift upslope into adjacent neighbourhoods throughout the summer, resting on yard vegetation and feeding at dusk. Professional barrier spray applied to your property&apos;s shrubs, hedges, and garden borders is the practical way to manage this influx without impacting the ravine ecosystem itself.</p>

          <h2>North York Neighbourhoods We Serve</h2>
          <p>BuzzSkito provides mosquito control across all North York communities, including:</p>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map(({ name, href }) => href ? (
              <Link key={name} href={href} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full hover:bg-brand-100 hover:border-brand-300 transition-colors">{name}</Link>
            ) : (
              <span key={name} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full">{name}</span>
            ))}
          </div>

          <h2>Our North York Mosquito Treatment Process</h2>
          <ul>
            <li><strong>Ravine-edge assessment</strong> — We identify your property&apos;s relationship to the valley, ravine slopes, and any standing water on or adjacent to your lot.</li>
            <li><strong>Full-yard barrier spray</strong> — All vegetation, hedges, fence lines, and ornamental plantings treated where resting adults settle, according to label directions.</li>
            <li><strong>Residual coverage between visits</strong> — the product dries onto treated surfaces as a residual barrier; keep children and pets off treated areas until the spray has dried, as the label directs.</li>
            <li><strong>Seasonal program</strong> — Five visits (Basic), 10 (Standard) or 20+ (Exclusive) May through September, timed to Don River valley and Burke Brook emergence patterns.</li>
          </ul>

          <h2>Also Providing Tick Control in North York</h2>
          <p>North York&apos;s ravine network — Don Valley, Serena Gundy Park, and Lawrence Park — provides extensive blacklegged tick habitat in the heart of Toronto. Tick populations have been confirmed along these corridors in recent years. Ask about our <Link href={TICK_SLUG} className="text-brand-700 hover:underline">North York tick spray service</Link> — bundling both treatments puts mosquito and tick visits on the same schedule, with tick control at $497 per season (5 sprays) when added to any mosquito plan.</p>


          <CityPriceCard city={CITY} service="mosquito" location="price_card_mid" />

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
          <p className="text-sm text-gray-500 not-prose">Pricing is for standard residential lots under 10,000 sq ft, plus HST. Larger properties receive custom quotes. <Link href="/mosquito-control-pricing" className="text-brand-700 hover:underline">See full pricing details</Link> or <Link href="/free-yard-assessment" className="text-brand-700 hover:underline">get a free quote</Link>.</p>

          <h2>Why Professional Treatment Outperforms DIY</h2>
          <p>Citronella candles, essential oil sprays, and consumer foggers provide temporary relief in a small radius — typically 30 minutes to 2 hours in the immediate area of use. Professional barrier spray treats the resting surfaces across your whole property, creating a residual barrier that is renewed on a set schedule through the season. The difference is coverage and duration: DIY products address symptoms; barrier spray addresses the source of activity on your lot.</p>
          <p>For a detailed comparison, see our <Link href="/mosquito-control-diy-vs-professional" className="text-brand-700 hover:underline">DIY vs Professional Mosquito Control</Link> guide.</p>

          <h2>What to Ask Any Mosquito Control Company in North York</h2>
          <p>North York homeowners have several professional options. Ask each one the same five questions and compare the answers side by side. Here is how BuzzSkito answers them for the 2026 season.</p>
          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-800 text-white">
                  <th className="px-4 py-3 text-left">Question to ask</th>
                  <th className="px-4 py-3 text-left">BuzzSkito&apos;s answer</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200"><td className="px-4 py-3 font-semibold">Is the price shown before you book?</td><td className="px-4 py-3">From $99 on a standard lot</td></tr>
                <tr className="border-b border-gray-200 bg-gray-50"><td className="px-4 py-3 font-semibold">How many sprays per season?</td><td className="px-4 py-3">5, 10 or 20+ (tick: 5)</td></tr>
                <tr className="border-b border-gray-200"><td className="px-4 py-3 font-semibold">What happens if it rains after a treatment?</td><td className="px-4 py-3">{PROMISES.rainBack}</td></tr>
                <tr className="border-b border-gray-200 bg-gray-50"><td className="px-4 py-3 font-semibold">Is an Ontario pesticide operator licence number shown?</td><td className="px-4 py-3">Yes: L-240-2436835197</td></tr>
                <tr><td className="px-4 py-3 font-semibold">Which plans include a guarantee?</td><td className="px-4 py-3">Rain-back on every plan; Bite-Free on Standard &amp; Exclusive</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 not-prose">Get each company&apos;s answers in writing and confirm the details for your own property before you book. More ways to weigh it up: <Link href="/buzzskito-vs-mosquitoman" className="text-brand-700 hover:underline">compare mosquito control options</Link>, <Link href="/buzzskito-vs-lawnsavers" className="text-brand-700 hover:underline">compare lawn-care add-on services</Link>, <Link href="/buzzskito-vs-mosquito-buzz" className="text-brand-700 hover:underline">compare franchise mosquito services</Link>.</p>

          <h2>How to Choose a Mosquito Control Company in North York</h2>
          <p>Whichever company you go with, these are the checks worth making before you hand over a credit card:</p>
          <ol>
            <li><strong>A product applied according to its label.</strong> Ask what product is going on your yard before you book, and check that the technician follows the label directions.</li>
            <li><strong>A licensed applicator doing the work.</strong> Ontario requires a Pesticide Applicator&apos;s Licence for commercial application — not just somewhere in the company, but on the technician who shows up.</li>
            <li><strong>A written re-treat guarantee.</strong> If rain falls within about an hour of application, the product has not cured. A reputable company re-sprays at no charge; if they will not put that in writing, keep looking.</li>
            <li><strong>Published pricing.</strong> Companies that require an in-home estimate before naming any number are usually leaving room to price you by your house rather than by your lot.</li>
            <li><strong>Single-treatment price, not just the seasonal total.</strong> Per-visit cost is the only honest way to compare programs that include different numbers of visits.</li>
            <li><strong>Local knowledge.</strong> A technician who can tell you which ravine your yard drains toward — Burke Brook, Wilket Creek, the East Don — knows where the adults are actually resting during the day.</li>
            <li><strong>Tick coverage available.</strong> North York&apos;s ravine corridors carry blacklegged ticks. A mosquito-only provider leaves half the ravine-edge problem untreated.</li>
          </ol>

          <h2>When to Start Treatment</h2>
          <p>In the GTA, mosquito season typically runs from late April through September. The best time to book your first treatment is early-to-mid May, before populations peak. Starting early establishes a protective barrier before breeding cycles accelerate in June and July. <Link href="/blog/mosquito-season-gta-when-does-it-start" className="text-brand-700 hover:underline">Read our full seasonal timing guide</Link>.</p>



          <h2>Compare North York Pest Control Options</h2>
          <p>Looking at all your North York pest control options? See our specialist guide: <Link href="/pest-control-north-york" className="text-brand-700 hover:underline font-semibold">Pest Control in North York</Link> — explains why a mosquito and tick specialist beats a generalist for the two pests that actually drive North York backyard misery. For the wider market, see <Link href="/best-mosquito-control-companies-gta" className="text-brand-700 hover:underline font-semibold">Best Mosquito Control Companies in the GTA</Link>.</p>
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
          <p className="kicker mb-3 text-center">Testimonials</p>
          <h2 className="h2-display text-brand-950 mb-2 text-center">What GTA Homeowners Say</h2>
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
                  <svg className="w-5 h-5 shrink-0 group-open:rotate-180 transition-transform text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="px-5 pb-4 text-gray-600 text-sm">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading={`Get a Free Mosquito Control Quote in ${CITY}`} subtext="Protect your North York property from mosquitoes this season. No contracts." />
    </>
  )
}
