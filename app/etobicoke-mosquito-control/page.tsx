import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import CityHero from '@/components/CityHero'
import { buildMetadata, serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, speakableSchema, howToSchema } from '@/lib/seo'
import { MOSQUITO_BLOGS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Etobicoke Mosquito Control 2026 · From $99 · 150+ Five-Star Reviews',
  description:
    'Etobicoke mosquito barrier spray from $99, no contracts — Humber Valley to Mimico. Compare top local companies and pricing. Call (289) 216-5030.',
  canonical: '/etobicoke-mosquito-control',
})

const CITY = 'Etobicoke'
const SLUG = '/etobicoke-mosquito-control'
const TICK_SLUG = '/etobicoke-tick-spray'
const NEIGHBOURHOODS: { name: string; href?: string }[] = [
  { name: 'Mimico' },
  { name: 'Long Branch' },
  { name: 'New Toronto' },
  { name: 'The Kingsway', href: '/the-kingsway-mosquito-control' },
  { name: 'Humber Valley' },
  { name: 'Richview' },
  { name: 'Rexdale' },
  { name: 'Islington Village' },
  { name: 'Alderwood' },
]
const FAQS = [
  {
    question: 'Who is the best mosquito control company in Etobicoke?',
    answer: 'BuzzSkito is the GTA-based mosquito and tick specialist serving Etobicoke, with the lowest entry price at $99 per single treatment, 150+ five-star Google reviews at a 5.0 average with zero negatives, and the BuzzSkito Bite-Free Guarantee — free re-treatment if pests return inside the window. Mosquito Man carries higher review volume across all of Ontario but operates as a general pest control company covering many pest types. LawnSavers serves Etobicoke as part of a broader lawn-care offering. The right choice depends on whether you want specialist depth, the lowest per-visit price, or services bundled with lawn care.',
  },
  {
    question: 'How much does mosquito control cost in Etobicoke?',
    answer: 'BuzzSkito mosquito control in Etobicoke starts from $99 per application. Properties near the Humber River valley, Etobicoke Creek, or Centennial Park typically benefit most from the full seasonal package for continuous protection. No contracts — single treatment or full season. Call (289) 216-5030 for a free Etobicoke quote.',
  },
  {
    question: 'Do Etobicoke mosquito control companies offer no-contract service?',
    answer: 'BuzzSkito is the no-contract option in Etobicoke — book a single treatment from $99 with no commitment and no cancellation fees, then decide based on results. Seasonal plans are available if you want them ($549 for 5 sprays, $994 for 10, $2,049 for 20+), but nothing locks you in. Many other providers quote seasonal packages only, so always confirm the contract terms before booking — some include automatic renewal clauses.',
  },
  {
    question: 'Why does the Humber Valley neighbourhood have a worse mosquito problem than other Etobicoke areas?',
    answer: "The Humber Valley neighbourhood sits directly on the Humber River valley escarpment, with properties backing onto one of Toronto's widest and most heavily forested ravine systems. The Humber River floodplain below holds standing water after every significant rainfall, and the dense tree canopy on ravine slopes creates cool, humid micro-environments where adult mosquitoes rest during the day. Properties backing onto the ravine face a near-continuous supply of newly emerged mosquitoes throughout the season — barrier spray on your property's vegetation provides a treated buffer that breaks this cycle.",
  },
  {
    question: 'Do Mimico and Long Branch waterfront properties have more mosquitoes?',
    answer: "Lake Ontario's Etobicoke waterfront — Mimico, Long Branch, and New Toronto — deals with a different but equally persistent mosquito challenge. Mimico Creek empties into the lake along this stretch, and the associated wetland margins, storm drain outlets, and lakefront park vegetation all provide breeding and resting habitat. Onshore breezes can move adult mosquitoes from Etobicoke Creek and Mimico Creek margins into nearby residential yards. Shoreline properties here benefit strongly from barrier spray applied to all yard vegetation.",
  },
  {
    question: 'Is Centennial Park an issue for nearby Etobicoke homeowners?',
    answer: "Centennial Park's large forest blocks and the adjacent Etobicoke Creek valley create a significant reservoir of mosquito habitat in northwestern Etobicoke. The stormwater ponds and creek margins within and around the park complex generate adult mosquitoes that readily move into surrounding Rexdale and Richview neighbourhoods. Homes within a 500-metre radius of the park boundary or Etobicoke Creek consistently report high seasonal mosquito activity.",
  },
  {
    question: 'Can I bundle tick control with mosquito spray in Etobicoke?',
    answer: 'Yes, and most Etobicoke homeowners backing onto the Humber River valley or Centennial Park do. Tick control is 5 sprays per season: $597 on its own, or $497 when added to any mosquito plan — a $100 saving. Both treatments are applied on the same visit, so there is no extra scheduling. If your property borders ravine, creek, or parkland vegetation, the bundle covers Lyme-carrying blacklegged ticks and mosquitoes together through the May–September season.',
  },
]

export default function EtobicokeMosquitoPage() {
  const lbSchema = localBusinessSchema({ areaServed: CITY, description: `Professional mosquito control service in ${CITY}, Ontario. Barrier spray for residential lawns serving all ${CITY} neighbourhoods.` })
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: `Mosquito Control ${CITY}`, description: `Professional mosquito barrier spray for residential properties in ${CITY}, Ontario.`, slug: SLUG, city: CITY })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: CITY, url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ service: 'mosquito', city: 'Etobicoke' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/etobicoke-mosquito-control', '2026-07-01')) }} />

      {/* Hero */}
      <CityHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Mosquito Control', href: '/mosquito-control' },
          { label: CITY },
        ]}
        title={<>{CITY} Mosquito Control</>}
        titleAccent={<>From $99 · 150+ Five-Star Reviews</>}
        subtitle={<>From the Humber River valley ravines to Mimico&apos;s lakefront — BuzzSkito delivers professional mosquito barrier spray to every Etobicoke neighbourhood.</>}
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
          <h2>Why Mosquito Pressure Is High in Etobicoke</h2>
          <p>Etobicoke is defined by water. The Humber River — one of Toronto&apos;s widest and most ecologically significant river corridors — runs along its eastern boundary, with a vast floodplain forest and ravine system that stretches from Rexdale in the north through the Kingsway and Humber Valley to the lake. The Etobicoke Creek runs through the west side, and Mimico Creek drains through the south, both feeding into Lake Ontario across a low-lying, wetland-influenced shoreline. These three creek systems, combined with Centennial Park&apos;s forest blocks and the Lake Ontario shoreline parks, make Etobicoke one of Toronto&apos;s most mosquito-active districts.</p>
          <p>For Etobicoke homeowners, the challenge is that many of these natural systems are beloved green amenities — and they&apos;re not going away. The practical solution is professional barrier spray on your own property: treating all vegetation, shrubs, and fence-line plantings creates a treated zone that eliminates resting mosquitoes and provides 28 days of residual protection between visits.</p>

          <h2>Etobicoke Neighbourhoods We Serve</h2>
          <p>BuzzSkito provides mosquito control across all Etobicoke communities, including:</p>
          <div className="not-prose flex flex-wrap gap-2 mb-6">
            {NEIGHBOURHOODS.map(({ name, href }) => href ? (
              <Link key={name} href={href} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full hover:bg-brand-100 transition-colors">{name}</Link>
            ) : (
              <span key={name} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full">{name}</span>
            ))}
          </div>

          <h2>Our Etobicoke Mosquito Treatment Process</h2>
          <ul>
            <li><strong>Property review</strong> — We assess ravine proximity, creek frontage, and standing water contributing to mosquito pressure on your lot.</li>
            <li><strong>Full-yard barrier spray</strong> — All shrubs, hedges, garden borders, fence lines, and tree understorey treated on every visit.</li>
            <li><strong>28-day residual coverage</strong> — Health Canada–approved formula provides continuous protection; safe for kids and pets after 30 minutes.</li>
            <li><strong>Seasonal scheduling</strong> — Five visits May through September, timed to Humber River and creek-corridor emergence patterns in Etobicoke.</li>
          </ul>

          <h2>Also Providing Tick Control in Etobicoke</h2>
          <p>The Humber River valley and Centennial Park forest areas in Etobicoke harbour blacklegged tick populations that have expanded in recent years. If your property backs onto the ravine or is near parkland, tick risk is real alongside mosquito pressure. Ask about our <Link href={TICK_SLUG} className="text-brand-700 hover:underline">Etobicoke tick spray service</Link> — most homeowners bundle both for complete yard protection.</p>


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

          <h2>How Etobicoke Mosquito Control Companies Compare</h2>
          <p>Etobicoke homeowners have several professional options. Here is an honest comparison based on publicly available pricing, Google review profiles, and what each company actually specialises in.</p>
          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-800 text-white">
                  <th className="px-4 py-3 text-left">Company</th>
                  <th className="px-4 py-3 text-left">Single Treatment</th>
                  <th className="px-4 py-3 text-left">Reviews (Google)</th>
                  <th className="px-4 py-3 text-left">Contract Required?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 bg-amber-50"><td className="px-4 py-3 font-bold text-brand-900">BuzzSkito</td><td className="px-4 py-3 font-extrabold text-brand-700">From $99</td><td className="px-4 py-3">150+ / 5.0 (zero negative)</td><td className="px-4 py-3 text-emerald-700 font-semibold">No — pay per visit</td></tr>
                <tr className="border-b border-gray-200"><td className="px-4 py-3 font-semibold">Mosquito Man</td><td className="px-4 py-3">~$129+ (varies)</td><td className="px-4 py-3">Higher volume, across all Ontario locations</td><td className="px-4 py-3 text-amber-700">Often seasonal</td></tr>
                <tr className="border-b border-gray-200"><td className="px-4 py-3 font-semibold">LawnSavers</td><td className="px-4 py-3">$129+ standalone</td><td className="px-4 py-3">1,000+ (lawn care primary)</td><td className="px-4 py-3 text-amber-700">Bundled with lawn plans</td></tr>
                <tr><td className="px-4 py-3 font-semibold">Mosquito.Buzz</td><td className="px-4 py-3">Custom quote required</td><td className="px-4 py-3">National franchise, multi-province</td><td className="px-4 py-3 text-amber-700">Seasonal contracts</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 not-prose">Review counts for franchise operators are aggregated across all their locations, not Etobicoke specifically. Head-to-head detail: <Link href="/buzzskito-vs-mosquitoman" className="text-brand-700 hover:underline">vs Mosquito Man</Link>, <Link href="/buzzskito-vs-lawnsavers" className="text-brand-700 hover:underline">vs LawnSavers</Link>, <Link href="/buzzskito-vs-mosquito-buzz" className="text-brand-700 hover:underline">vs Mosquito.Buzz</Link>, or the <Link href="/best-mosquito-control-companies-gta" className="text-brand-700 hover:underline">GTA-wide comparison</Link>.</p>

          <h2>How to Choose a Mosquito Control Company in Etobicoke</h2>
          <p>Whoever you end up hiring, these are the checks worth making before you book:</p>
          <ol>
            <li><strong>Check the formulation.</strong> Only Health Canada–approved barrier sprays are legal for this use in Ontario. Ask what product is going on your yard.</li>
            <li><strong>Verify the applicator&apos;s licence.</strong> Ontario requires a Pesticide Applicator&apos;s Licence for commercial application — the technician on site should hold one.</li>
            <li><strong>Confirm the guarantee in writing.</strong> If rain arrives within an hour of spraying, the product has not cured. A reputable company re-treats at no charge; anyone who will not put that in writing is a risk.</li>
            <li><strong>Compare single-treatment pricing, not just season totals.</strong> The per-visit number is what reveals real value once you divide a package by its visit count.</li>
            <li><strong>Ask about Etobicoke specifically.</strong> A technician who can talk about the Humber River valley ravines, Mimico and Etobicoke Creek margins, and Centennial Park&apos;s forest blocks is treating your property, not reading a script.</li>
            <li><strong>Check for a tick add-on.</strong> Etobicoke has established blacklegged tick populations near ravine and parkland vegetation. Bundling both on one visit costs less than booking them separately.</li>
          </ol>

          <h2>Why Professional Treatment Outperforms DIY</h2>
          <p>Citronella candles, essential oil sprays, and consumer foggers provide temporary relief in a small radius — typically 30 minutes to 2 hours in the immediate area of use. Professional barrier spray treats every resting surface on your entire property, creating a residual barrier that kills mosquitoes on contact for up to 30 days. The difference is coverage and duration: DIY products address symptoms; barrier spray addresses the source of activity on your lot.</p>
          <p>For a detailed comparison, see our <Link href="/mosquito-control-diy-vs-professional" className="text-brand-700 hover:underline">DIY vs Professional Mosquito Control</Link> guide.</p>

          <h2>When to Start Treatment</h2>
          <p>In the GTA, mosquito season typically runs from late April through September. The best time to book your first treatment is early-to-mid May, before populations peak. Starting early establishes a protective barrier before breeding cycles accelerate in June and July. <Link href="/blog/mosquito-season-gta-when-does-it-start" className="text-brand-700 hover:underline">Read our full seasonal timing guide</Link>.</p>



          <h2>Compare Etobicoke Pest Control Options</h2>
          <p>Looking at all your Etobicoke pest control options? See our specialist guide: <Link href="/pest-control-etobicoke" className="text-brand-700 hover:underline font-semibold">Pest Control in Etobicoke</Link> — explains why a mosquito and tick specialist beats a generalist for the two pests that actually drive Etobicoke backyard misery.</p>
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
        </div>
      </section>

      <CTASection heading={`Get a Free Mosquito Control Quote in ${CITY}`} subtext="Protect your Etobicoke property from mosquitoes this season. No contracts." />
    </>
  )
}
