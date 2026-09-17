import type { Metadata } from 'next'
import Link from 'next/link'
import CityHero from '@/components/CityHero'
import TypicalPrices from '@/components/TypicalPrices'
import CityPriceCard from '@/components/CityPriceCard'
import CTASection from '@/components/CTASection'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema, howToSchema } from '@/lib/seo'
import { BUSINESS, MOSQUITO_BLOGS, PROMISES } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Scarborough Mosquito Control 2026 · From $99 · 150+ Five-Star Reviews',
  description:
    'Scarborough mosquito barrier spray from $99, no contracts, rain-back guarantee. Compare providers, pricing, Rouge & Highland Creek risk. (289) 216-5030.',
  canonical: '/scarborough-mosquito-control',
})

const CITY = 'Scarborough'
const SLUG = '/scarborough-mosquito-control'
const TICK_SLUG = '/scarborough-tick-spray'
const NEIGHBOURHOODS = ['Guildwood','West Hill','Highland Creek','Rouge','Malvern','Agincourt','Birchcliffe','Cliffside','Woburn','Morningside']
const FAQS = [
  {
    question: 'How much does mosquito control cost in Scarborough?',
    answer: 'BuzzSkito mosquito control in Scarborough starts from $99 per application. Properties near Highland Creek, the Rouge River, or Rouge National Urban Park typically benefit most from the full seasonal package, with repeat visits through the summer. No contracts. Call (289) 216-5030 for a free Scarborough quote.',
  },
  {
    question: 'Who is the best mosquito control company in Scarborough?',
    answer: `Rather than go by a name, ask every company you are considering the same five questions. Is the price shown before you book? How many sprays per season? What happens if it rains after a treatment? Is an Ontario pesticide operator licence number shown? Which plans include a guarantee? BuzzSkito's answers: from $99 on a standard lot; 5, 10 or 20+ sprays per season (tick: 5); ${PROMISES.rainBack} Our licence is ${BUSINESS.licenseNumber}, and the Bite-Free Guarantee applies to Standard & Exclusive plans. A company that answers all five clearly, in writing, gives you a solid baseline to compare against.`,
  },
  {
    question: 'Can I book mosquito control in Scarborough without signing a contract?',
    answer: 'Yes. BuzzSkito is a no-contract service in Scarborough — book a single treatment from $99, with no seasonal commitment and no cancellation fee, then decide based on the result. The seasonal plans ($549, $994 and $2,049) are optional, not required. If you are quoting other Scarborough providers, confirm the contract length and whether it auto-renews the following spring before you book.',
  },
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
    answer: "In Scarborough's river valley and ravine neighbourhoods, adult mosquitoes can emerge as early as late April in warm years, with the main season typically running from mid-May through mid-September. The Rouge River's warmer, slower-moving water sections warm up faster than the creek systems to the north, triggering early emergence near the park. Booking your first treatment in the first two weeks of May, before peak emergence, is what we recommend for east-end Scarborough homeowners.",
  },
  {
    question: 'Can I bundle tick control with mosquito spray in Scarborough?',
    answer: 'Yes, and it is worth doing if your property backs onto Rouge National Urban Park, the Highland Creek valley, or any Scarborough ravine edge — blacklegged ticks, the Lyme disease vector, are established in that kind of park-edge habitat. BuzzSkito tick control is $597 for a standalone season of 5 sprays, or $497 when added to any mosquito plan, saving $100. The tick treatment targets ravine edges, leaf litter, and tall grass rather than the shrubs and fence lines mosquitoes rest on, so the two services cover different parts of the same yard.',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ service: 'mosquito', city: 'Scarborough' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/scarborough-mosquito-control', '2026-07-01')) }} />

      <CityHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Mosquito Control', href: '/mosquito-control' },
          { label: CITY },
        ]}
        title={<>{CITY} Mosquito Control</>}
        titleAccent={<>From $99 · 150+ Five-Star Reviews</>}
        subtitle={<>From the Rouge National Urban Park boundary to Highland Creek valley, BuzzSkito delivers professional mosquito barrier spray to every Scarborough neighbourhood. Licensed Ontario pesticide operator; treatments applied according to label directions.</>}
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
            <p className="text-gray-600 text-sm mt-0.5">Professional mosquito control service from <strong className="text-brand-700">$99</strong> per treatment on a standard lot · No contracts</p>
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
              { step: '2', title: 'Professional Barrier Spray', desc: 'Our licensed technician applies a barrier product according to its label directions to all vegetation, shrub interiors, leaf undersides, and fence lines using a precision backpack sprayer.' },
              { step: '3', title: 'Rain-Back Guarantee', desc: `Visits repeat through the season on your plan’s schedule, so the foliage where mosquitoes rest stays treated. ${PROMISES.rainBack}` },
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
          <h2>Why Mosquito Pressure Is High in Scarborough</h2>
          <p>Scarborough is home to some of the GTA&apos;s most ecologically rich — and mosquito-productive — landscapes. The eastern portion of the city borders Rouge National Urban Park, Canada&apos;s first national urban park, where the Rouge River winds through wetlands, forested floodplain, and marsh edges that sustain a continuous population of mosquitoes from May through September. The Highland Creek valley, another major ravine system running through the centre of Scarborough, provides additional breeding habitat from Morningside Park and Colonel Danforth Park all the way to the lake. A third, less obvious pressure zone runs along the Lake Ontario shoreline, where the wooded gullies cutting through the Scarborough Bluffs create sheltered microclimates behind Cliffside and Birchcliffe properties.</p>
          <p>For Scarborough homeowners in these valley-adjacent communities, the challenge isn&apos;t simply managing mosquitoes on a single property — it&apos;s the continuous influx of adults emerging from these nearby natural systems. Professional barrier spray applied to your yard&apos;s vegetation targets the resting adults that would otherwise spend the day on your hedges, shrubs, and fence lines before feeding at dusk.</p>

          <h2>Scarborough Neighbourhoods We Serve</h2>
          <p>BuzzSkito provides mosquito control across all Scarborough communities, including:</p>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map((n) => <span key={n} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full">{n}</span>)}
          </div>
          <p>Pressure is not evenly distributed across these communities. Rouge and Malvern sit against the park boundary, Highland Creek and Guildwood sit against the creek valley, and Cliffside sits in the bluff microclimate — these are the highest-pressure addresses in Scarborough, and they generally do best on the bi-weekly Standard plan. Neighbourhoods set back from the valleys and the shoreline, such as Agincourt, are usually comfortable on the monthly Basic plan.</p>

          <h2>Our Scarborough Mosquito Treatment Process</h2>
          <ul>
            <li><strong>Valley proximity assessment</strong> — We identify ravine edges, creek proximity, and standing water that elevate your property&apos;s risk.</li>
            <li><strong>Full-yard barrier spray</strong> — Treatment of all vegetation, shrubs, fence lines, and tree understorey that border your outdoor living areas.</li>
            <li><strong>Label-directed application</strong> — {PROMISES.labelLine}. Stay off treated areas until the spray has dried, as the product label directs.</li>
            <li><strong>Seasonal program</strong> — Five visits (Basic), 10 (Standard) or 20+ (Exclusive) May through September, with timing aligned to Rouge River and Highland Creek emergence cycles.</li>
          </ul>

          <h2>Also Providing Tick Control in Scarborough</h2>
          <p>Scarborough&apos;s Rouge National Urban Park and Highland Creek valley are among the GTA&apos;s most active blacklegged tick habitats. Homeowners near the park boundary or valley edges face meaningful tick risk alongside mosquito pressure. Ask about our <Link href={TICK_SLUG} className="text-brand-700 hover:underline">Scarborough tick spray service</Link> — bundling both treatments covers both pests in the same visit.</p>


          <CityPriceCard city={CITY} service="mosquito" />

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
          <p>Citronella candles, essential oil sprays, and consumer foggers provide temporary relief in a small radius — typically 30 minutes to 2 hours in the immediate area of use. Professional barrier spray treats every resting surface on your entire property, leaving a residual on the foliage where mosquitoes rest, renewed on a regular schedule through the season. The difference is coverage and consistency: DIY products address symptoms; barrier spray addresses the source of activity on your lot.</p>
          <p>For a detailed comparison, see our <Link href="/mosquito-control-diy-vs-professional" className="text-brand-700 hover:underline">DIY vs Professional Mosquito Control</Link> guide.</p>

          <h2>What to Ask Any Mosquito Control Company in Scarborough</h2>
          <p>Scarborough homeowners have several professional options. Whoever you call, these five questions separate a clear offer from a vague one. Here is how we answer each of them.</p>
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
                <tr className="border-b border-gray-200 bg-gray-50"><td className="px-4 py-3 font-semibold">Is an Ontario pesticide operator licence number shown?</td><td className="px-4 py-3">Yes: {BUSINESS.licenseNumber}</td></tr>
                <tr><td className="px-4 py-3 font-semibold">Which plans include a guarantee?</td><td className="px-4 py-3">Rain-back on every plan; Bite-Free on Standard &amp; Exclusive</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 not-prose">For more on choosing a provider anywhere in the GTA, see <Link href="/best-mosquito-control-companies-gta" className="text-brand-700 hover:underline">Compare mosquito control options</Link>.</p>

          <h2>How to Choose a Mosquito Control Company in Scarborough</h2>
          <ol>
            <li><strong>Check the formulation.</strong> Ask which product will be applied on your property, and how its label directions will be followed, before booking.</li>
            <li><strong>Verify the licence.</strong> Commercial pesticide application in Ontario is licensed. Ask for the licence number and who will apply the product. Ours: {PROMISES.licence}.</li>
            <li><strong>Get the guarantee in writing.</strong> Rain soon after a spray can wash product off before it dries, so ask what happens if it rains. Ours: {PROMISES.rainBack}</li>
            <li><strong>Read Scarborough-specific reviews.</strong> A national franchise can have strong reviews in one city and weak ones in the next. Filter for your own.</li>
            <li><strong>Ask about local knowledge.</strong> A technician who can talk about the Rouge River wetlands, the Highland Creek valley, and the bluff gullies knows where the mosquitoes on your lot are actually coming from.</li>
            <li><strong>Compare single-treatment pricing</strong>, not just seasonal package totals. Per-visit price is the honest measure of value.</li>
            <li><strong>Ask about the tick add-on.</strong> Scarborough has established blacklegged tick habitat, and bundling costs less than buying tick control separately in July.</li>
          </ol>

          <h2>When to Start Treatment</h2>
          <p>In the GTA, mosquito season typically runs from late April through September. The best time to book your first treatment is early-to-mid May, before populations peak. Starting early establishes a protective barrier before breeding cycles accelerate in June and July. <Link href="/blog/mosquito-season-gta-when-does-it-start" className="text-brand-700 hover:underline">Read our full seasonal timing guide</Link>.</p>



          <h2>Compare Scarborough Pest Control Options</h2>
          <p>Looking at all your Scarborough pest control options? See our specialist guide: <Link href="/pest-control-scarborough" className="text-brand-700 hover:underline font-semibold">Pest Control in Scarborough</Link> — explains why a mosquito and tick specialist beats a generalist for the two pests that actually drive Scarborough backyard misery.</p>
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

      <CTASection heading={`Get a Free Mosquito Control Quote in ${CITY}`} subtext="Protect your Scarborough property from mosquitoes this season. No contracts." />
    </>
  )
}
