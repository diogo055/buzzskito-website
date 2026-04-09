import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'How Much Does Mosquito Control Cost? 2026 Ontario Price Guide | BuzzSkito',
  description:
    'How much does mosquito control cost in Ontario? BuzzSkito treatments from $99. See 2026 pricing by city & property size.',
  canonical: '/mosquito-control-cost',
})

const FAQS = [
  {
    question: 'How much does a single mosquito treatment cost in Ontario?',
    answer: 'A single professional mosquito barrier spray treatment in Ontario starts from $99 for a standard residential lot (under 6,000 sq ft). Mid-size properties (6,000–10,000 sq ft) typically run $129–$159. Large lots (10,000–20,000 sq ft) typically run $175–$249 per visit. BuzzSkito\'s pricing starts from $99 and is quoted by property size — call (289) 216-5030 for a free, no-obligation quote.',
  },
  {
    question: 'How many mosquito treatments do I need per season in Ontario?',
    answer: 'Most GTA properties benefit from 4–5 treatments spaced 21–28 days apart from May through September for continuous protection. Properties near high-pressure areas (Credit River, Humber River valley, Rattray Marsh, stormwater ponds) typically need the full 5-treatment season. Lower-pressure properties may do well with 3–4 visits. Call (289) 216-5030 and we\'ll recommend the right frequency for your specific property.',
  },
  {
    question: 'Can I book treatments one at a time, or do I have to commit to the season?',
    answer: 'You can book a single treatment with no commitment — there are no contracts and no cancellation fees. Many customers start with a single visit to evaluate results before scheduling ongoing service. BuzzSkito offers full flexibility to match your comfort level.',
  },
  {
    question: 'What factors affect mosquito control pricing?',
    answer: 'Four main factors affect mosquito control cost in Ontario: (1) Property size — larger lots require more product and more application time. (2) Proximity to water features — properties near creeks, ponds, or conservation areas may require more thorough perimeter treatment. (3) Vegetation density — heavily landscaped properties with dense shrub coverage require more detailed treatment to ensure full coverage. (4) Number of treatments — single visits cost more per treatment than seasonal packages.',
  },
  {
    question: 'Are there any hidden fees with BuzzSkito mosquito control?',
    answer: 'No. BuzzSkito\'s pricing is all-inclusive: product, labour, travel within our service area, and our rain-back guarantee. If significant rain falls within one hour of your treatment — before the product has fully cured — we return and re-treat at no additional cost. There are no contracts and no cancellation fees.',
  },
  {
    question: 'How does BuzzSkito\'s pricing compare to competitors like MosquitoMan or LawnSavers?',
    answer: 'BuzzSkito\'s pricing starts from $99 per treatment — among the most competitive in the GTA market. LawnSavers lists treatments starting at $129 per visit. MosquitoMan advertises seasonal programs around $450. BuzzSkito provides the same Health Canada–approved formula and licensed technicians at a lower per-treatment starting price, with no contracts required.',
  },
  {
    question: 'Does mosquito control cost more near water or ravines in the GTA?',
    answer: 'Not necessarily. BuzzSkito prices by property size, not location risk. A property near the Humber River pays the same rate per square foot as an inland property the same size — the difference is that high-pressure properties typically benefit from more treatments per season to maintain effective protection.',
  },
  {
    question: 'Can I book just one treatment, or do I have to commit to a full season?',
    answer: 'You can book a single treatment — there are no contracts and no minimum commitment. Many customers start with a single treatment to evaluate results before booking a seasonal program. BuzzSkito offers full flexibility: single visits, 3-treatment programs, or 5-treatment seasonal coverage.',
  },
]

export default function MosquitoControlCostPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: 'Mosquito Control Cost', url: '/mosquito-control-cost' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/mosquito-control-cost')) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <span className="text-white">Cost & Pricing</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">How Much Does Mosquito Control Cost in Ontario?</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Transparent pricing, no hidden fees. BuzzSkito mosquito barrier spray starts from $99 per treatment. No contracts, rain-back guarantee included.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">
              Get a Free Quote
            </Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-brand-900 text-white py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-200">
          <span>✓ Transparent Pricing — No Surprises</span>
          <span>✓ No Contracts Required</span>
          <span>✓ Rain-Back Guarantee Included</span>
          <span>✓ Health Canada–Approved Formula</span>
          <span>✓ 5-Star Rated · 126 Reviews</span>
        </div>
      </section>

      {/* Main pricing content */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">

          <h2>BuzzSkito Mosquito Control Pricing — 2026</h2>
          <p>Most mosquito control companies in Ontario refuse to publish pricing until after an in-home assessment. That assessment is a sales visit. We don't operate that way. Here are our actual 2026 prices:</p>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-800 text-white">
                  <th className="px-4 py-3 text-left">Property Type</th>
                  <th className="px-4 py-3 text-left">Starting Price</th>
                  <th className="px-4 py-3 text-left">Coverage</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: 'Standard residential lot (under 6,000 sq ft)', price: 'From $99/treatment', coverage: 'Typical GTA semi-detached or detached home' },
                  { type: 'Mid-size lot (6,000–10,000 sq ft)', price: 'Custom quote', coverage: 'Larger detached, corner lots, estate properties' },
                  { type: 'Large / rural property (10,000+ sq ft)', price: 'Custom quote', coverage: 'Acreage, farm properties, hobby farms' },
                ].map(({ type, price, coverage }) => (
                  <tr key={type} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-brand-800">{type}</td>
                    <td className="px-4 py-3 font-extrabold text-brand-700">{price}</td>
                    <td className="px-4 py-3 text-gray-600">{coverage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 not-prose mb-8">All pricing is property-specific. Call <a href={BUSINESS.phoneHref} className="text-brand-700 underline">{BUSINESS.phone}</a> or use our <Link href="/contact" className="text-brand-700 underline">contact form</Link> for a free, no-obligation quote.</p>

          <h2>What's Included in Every BuzzSkito Treatment</h2>
          <p>Every treatment — whether it's a single visit or part of a seasonal program — includes the same comprehensive service:</p>
          <ul>
            <li><strong>Full property barrier application</strong> — all vegetation, shrubs, garden beds, leaf undersides, fence lines, deck undersides, woodpile areas</li>
            <li><strong>Health Canada–registered, water-based formula</strong> — kills mosquitoes on contact and leaves a 30-day residual barrier</li>
            <li><strong>Property assessment on first visit</strong> — identification of standing water sources, high-risk zones, and any property-specific factors</li>
            <li><strong>SMS notification before arrival</strong> — you don't need to be home</li>
            <li><strong>Post-treatment confirmation email</strong> with full treatment log</li>
            <li><strong>Rain-back guarantee</strong> — if significant rain falls within one hour of treatment, we return and re-treat at no charge</li>
            <li><strong>No contracts, no cancellation fees</strong></li>
          </ul>

          <h2>How Ontario Mosquito Control Pricing Works</h2>
          <p>Mosquito barrier spray costs in Ontario vary based on four factors:</p>
          <h3>1. Property Size</h3>
          <p>Larger lots require more product and more technician time. Most Ontario suburban lots (standard semi-detached or detached in the GTA) fall in the under-6,000 sq ft category. Properties on ravine lots, rural acreage, or larger estate lots are typically in the mid-size or custom-quote tier.</p>

          <h3>2. Treatment Frequency</h3>
          <p>Single treatments cost more per visit than seasonal packages. If you're near a Credit River floodplain, a stormwater management pond, or any conservation area, you need multiple treatments per season — and the per-treatment cost drops substantially with a seasonal program.</p>

          <h3>3. Geographic Pressure Zone</h3>
          <p>Mosquito pressure varies significantly across the GTA. High-pressure zones — properties near the Humber River, Don Valley, Credit River, Rattray Marsh, or any conservation area — typically need more thorough perimeter treatment and benefit most from the full 5-treatment seasonal program. Low-pressure zones (urban properties well away from natural water features) may be well-protected with 3 seasonal treatments.</p>

          <h3>4. Service Provider Quality</h3>
          <p>All mosquito control companies in Ontario are not equal. Look for:</p>
          <ul>
            <li>Licensed applicators (Pesticide Applicator's Licence required in Ontario)</li>
            <li>Health Canada–registered products</li>
            <li>Rain-back guarantee</li>
            <li>No-contract flexibility</li>
            <li>Published pricing (if a company won't quote over the phone, the assessment is a sales visit)</li>
          </ul>

          <h2>Mosquito Control Cost vs. DIY: A Real Comparison</h2>
          <div className="not-prose overflow-x-auto my-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-800 text-white">
                  <th className="px-4 py-3 text-left">Approach</th>
                  <th className="px-4 py-3 text-left">Upfront Cost</th>
                  <th className="px-4 py-3 text-left">Protection Duration</th>
                  <th className="px-4 py-3 text-left">Coverage</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { approach: 'Citronella candles / torches', cost: '$20–$60/season', duration: 'Hours, only while burning', coverage: 'Very limited radius' },
                  { approach: 'Consumer fogger (Home Depot)', cost: '$50–$90 + product refills', duration: '2–4 hours', coverage: 'Open air only, misses resting sites' },
                  { approach: 'Professional barrier spray', cost: 'From $99/treatment', duration: 'Up to 30 days per visit', coverage: 'Full property — all vegetation, undersides, shaded zones' },
                ].map(({ approach, cost, duration, coverage }) => (
                  <tr key={approach} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-gray-800">{approach}</td>
                    <td className="px-4 py-3 text-brand-700 font-semibold">{cost}</td>
                    <td className="px-4 py-3 text-gray-600">{duration}</td>
                    <td className="px-4 py-3 text-gray-600">{coverage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Mosquito Control Pricing by City</h2>
          <p>BuzzSkito serves the full GTA and surrounding regions. Pricing starts from $99 per treatment across all service areas:</p>
          <div className="not-prose flex flex-wrap gap-2 my-4">
            {[
              { city: 'Toronto', href: '/toronto-mosquito-control' },
              { city: 'Mississauga', href: '/mississauga-mosquito-control' },
              { city: 'Brampton', href: '/brampton-mosquito-control' },
              { city: 'Vaughan', href: '/vaughan-mosquito-control' },
              { city: 'Oakville', href: '/oakville-mosquito-control' },
              { city: 'Burlington', href: '/burlington-mosquito-spray' },
              { city: 'Hamilton', href: '/hamilton-mosquito-control' },
              { city: 'Richmond Hill', href: '/richmond-hill-mosquito-control' },
              { city: 'Markham', href: '/markham-mosquito-control' },
              { city: 'North York', href: '/north-york-mosquito-control' },
              { city: 'Scarborough', href: '/scarborough-mosquito-control' },
              { city: 'Etobicoke', href: '/etobicoke-mosquito-control' },
              { city: 'Milton', href: '/milton-mosquito-control' },
              { city: 'Halton Hills', href: '/halton-hills-mosquito-control' },
              { city: 'Caledon', href: '/caledon-mosquito-control' },
            ].map(({ city, href }) => (
              <Link key={city} href={href} className="text-sm bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1.5 rounded-full hover:bg-brand-100 transition-colors">{city}</Link>
            ))}
          </div>

          <h2>Tick Control Pricing</h2>
          <p>Need tick control too? BuzzSkito tick spray starts from $99 per application. Many GTA homeowners bundle mosquito and tick treatments for complete yard protection — the combined service is done in a single visit. See our <Link href="/tick-control" className="text-brand-700 hover:underline">full tick control service</Link> for details.</p>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href="/mosquito-control" className="text-brand-700 hover:underline">All GTA Mosquito Control Services</Link></li>
            <li><Link href="/tick-control" className="text-brand-700 hover:underline">All GTA Tick Control Services</Link></li>
            <li><Link href="/blog/is-mosquito-spray-safe-kids-pets" className="text-brand-700 hover:underline">Is Mosquito Spray Safe for Kids and Pets?</Link></li>
            <li><Link href="/blog/how-to-prevent-mosquitoes-in-your-backyard" className="text-brand-700 hover:underline">12 Ways to Prevent Mosquitoes in Your Backyard</Link></li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">FAQ – Mosquito Control Pricing in Ontario</h2>
          <div className="space-y-3">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-white rounded-xl border border-brand-100 group">
                <summary className="cursor-pointer px-5 py-4 font-semibold text-brand-900 list-none flex justify-between items-center">
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

      <CTASection
        heading="Get Your Free Mosquito Control Quote"
        subtext="Transparent pricing, no contracts, no hidden fees. Starts from $99 per treatment anywhere in the GTA."
      />
    </>
  )
}
