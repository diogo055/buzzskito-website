import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import CityHero from '@/components/CityHero'
import { buildMetadata, breadcrumbSchema, faqSchema, speakableSchema, howToSchema } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control Cost in Ontario — 2026 Prices from $99',
  description:
    'How much does mosquito control cost in Ontario? Single visits from $99, full-season plans from $549. Transparent 2026 pricing, no contracts. Call (289) 216-5030.',
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
  {
    question: 'How much does mosquito control cost?',
    answer: 'Professional mosquito control cost in the GTA breaks down like this: a single barrier spray treatment starts from $99 for a standard residential lot, and full-season programs run $549 for 5 sprays (Basic), $994 for 10 sprays (Standard — our most popular), or $2,049 for 20+ sprays (Exclusive). Tick control is $597 standalone or $497 when bundled with any mosquito plan. All prices are plus HST and scale with lot size for larger properties.',
  },
  {
    question: 'How much does mosquito spraying cost in Canada?',
    answer: 'In Canada, professional mosquito spraying typically ranges from about $99 to $175 per single visit for a standard residential yard, with full-season programs commonly running $450–$1,000+ depending on treatment frequency and lot size. BuzzSkito\'s Ontario pricing starts from $99 per treatment or $549 for a 5-spray season, plus HST — among the most transparent published rates in the GTA.',
  },
  {
    question: 'What is the cost of a mosquito control service for the whole season?',
    answer: 'A full-season mosquito control service with BuzzSkito costs $549 for the Basic plan (5 sprays, monthly), $994 for the Standard plan (10 sprays, bi-weekly — most popular), or $2,049 for the Exclusive plan (20+ sprays, weekly) for a standard lot under 10,000 sq ft, all plus HST. Season programs cover May through September and include the bite-free guarantee and rain-back re-treatment at no extra charge.',
  },
]

export default function MosquitoControlCostPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: 'Mosquito Control Cost', url: '/mosquito-control-cost' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ service: 'mosquito' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/mosquito-control-cost', '2026-07-12')) }} />

      {/* Hero */}
      <CityHero
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Mosquito Control', href: '/mosquito-control' }, { label: 'Cost & Pricing' }]}
        title={<>How Much Does Mosquito Control Cost in Ontario?</>}
        subtitle={<>Transparent pricing, no hidden fees. BuzzSkito mosquito barrier spray starts from $99 per treatment. No contracts, rain-back guarantee included.</>}
        image="/spray-backyard.webp"
      />

      {/* Trust bar */}
      <section className="bg-brand-900 text-white py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-200">
          <span>✓ Transparent Pricing — No Surprises</span>
          <span>✓ No Contracts Required</span>
          <span>✓ Bite-Free Guarantee Included</span>
          <span>✓ Health Canada–Approved Formula</span>
          <span>✓ 5-Star Rated · 150+ Reviews</span>
        </div>
      </section>

      {/* Answer-first capsule (speakable) */}
      <section className="py-8 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <p className="speakable text-lg text-gray-800 leading-relaxed bg-brand-50 border-l-4 border-brand-500 rounded-r-xl px-5 py-4">
            <strong>How much does mosquito control cost in Ontario?</strong> A single professional mosquito spray treatment starts from <strong>$99</strong> for a standard residential lot, while full-season programs run <strong>$549 for 5 sprays (Basic)</strong>, <strong>$994 for 10 sprays (Standard — most popular)</strong>, or <strong>$2,049 for 20+ sprays (Exclusive)</strong>, all plus HST. Final pricing scales with your lot size (10,000–100,000+ sq ft) &mdash; there are no contracts and every quote is free.
          </p>
        </div>
      </section>

      {/* Main pricing content */}

      {/* How It Works */}
      <section className="py-12 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-8 text-center">How BuzzSkito Mosquito Control Works</h2>
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
          <p className="text-sm text-gray-500 not-prose mb-8">All pricing is property-specific. Call <a href={BUSINESS.phoneHref} className="text-brand-700 underline">{BUSINESS.phone}</a> or use our <Link href="/free-yard-assessment" className="text-brand-700 underline">contact form</Link> for a free, no-obligation quote.</p>

          <h2>Mosquito Season Program Pricing (2026)</h2>
          <p>A single visit protects your yard for up to 30 days. To stay bite-free all summer, most GTA homeowners choose a full-season program (May&ndash;September). Season pricing below is for a standard lot under 10,000 sq ft &mdash; larger properties (10,000&ndash;100,000+ sq ft) scale up proportionally. All prices are plus HST.</p>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-800 text-white">
                  <th className="px-4 py-3 text-left">Plan</th>
                  <th className="px-4 py-3 text-left">Season Price</th>
                  <th className="px-4 py-3 text-left">Treatments</th>
                  <th className="px-4 py-3 text-left">Best For</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { plan: 'Single Treatment', price: 'From $99', treatments: '1 visit', best: 'Trying us out, one-off events, low pressure' },
                  { plan: 'Basic Season', price: '$549', treatments: '5 sprays · monthly', best: 'Lower-pressure yards wanting steady coverage' },
                  { plan: 'Standard Season ★ Most Popular', price: '$994', treatments: '10 sprays · bi-weekly', best: 'Most GTA homes — continuous May–Sep protection' },
                  { plan: 'Exclusive Season', price: '$2,049', treatments: '20+ sprays · weekly', best: 'High-pressure or waterfront lots, zero tolerance' },
                  { plan: 'Tick Control — Standalone', price: '$597', treatments: '5 sprays · season', best: 'Wooded lots, ravine backing, Lyme-risk zones' },
                  { plan: 'Tick Control — Bundled', price: '$497 (save $100)', treatments: '5 sprays · season', best: 'Added to any mosquito plan, same-visit service' },
                ].map(({ plan, price, treatments, best }) => (
                  <tr key={plan} className={`border-b border-gray-200 ${plan.includes('Most Popular') ? 'bg-brand-50' : 'even:bg-gray-50'}`}>
                    <td className="px-4 py-3 font-semibold text-brand-800">{plan}</td>
                    <td className="px-4 py-3 font-extrabold text-brand-700">{price}</td>
                    <td className="px-4 py-3 text-gray-600">{treatments}</td>
                    <td className="px-4 py-3 text-gray-600">{best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 not-prose mb-8">All season prices shown are for standard lots under 10,000 sq ft, plus HST. Every plan includes our bite-free guarantee, rain-back re-treatment, and no lock-in contract. <Link href="/free-yard-assessment" className="text-brand-700 underline">Get a free quote for your exact lot size &rarr;</Link></p>

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
          <h3>1. Property Size (the biggest factor)</h3>
          <p>Lot size is the single largest driver of mosquito control cost — larger lots require more product and more technician time. Most Ontario suburban lots (standard semi-detached or detached in the GTA) fall in the under-6,000 sq ft category and start from $99 per treatment. Pricing scales up smoothly for bigger properties, from roughly 10,000 sq ft all the way to 100,000+ sq ft estate and acreage lots. Because we quote by measured square footage rather than a flat &ldquo;per yard&rdquo; rate, you never overpay for a smaller lot or get surprised on a larger one.</p>

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

          <h2>How BuzzSkito Pricing Compares to Other GTA Companies</h2>
          <p>We believe transparent pricing wins. Here&rsquo;s an honest look at how BuzzSkito compares to the two most-searched mosquito companies in the GTA. The value difference isn&rsquo;t just the price &mdash; it&rsquo;s no contracts, a published starting rate, and a real bite-free guarantee.</p>
          <div className="not-prose overflow-x-auto my-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-800 text-white">
                  <th className="px-4 py-3 text-left">Provider</th>
                  <th className="px-4 py-3 text-left">Single Visit</th>
                  <th className="px-4 py-3 text-left">Season Program</th>
                  <th className="px-4 py-3 text-left">Contract?</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { provider: 'BuzzSkito', single: 'From $99', season: 'From $549 (5 sprays)', contract: 'No contract, cancel anytime' },
                  { provider: 'LawnSavers', single: '$129+ per visit', season: 'Add-on to lawn programs', contract: 'Typically program-based' },
                  { provider: 'Mosquito Man', single: 'Not published', season: '~$450+ season', contract: 'Franchise, season commitment' },
                ].map(({ provider, single, season, contract }) => (
                  <tr key={provider} className={`border-b border-gray-200 ${provider === 'BuzzSkito' ? 'bg-brand-50' : 'even:bg-gray-50'}`}>
                    <td className="px-4 py-3 font-semibold text-brand-800">{provider}</td>
                    <td className="px-4 py-3 text-brand-700 font-semibold">{single}</td>
                    <td className="px-4 py-3 text-gray-600">{season}</td>
                    <td className="px-4 py-3 text-gray-600">{contract}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 not-prose mb-8">Competitor figures are based on publicly advertised rates and vary by property; confirm directly with each provider. BuzzSkito uses the same Health Canada&ndash;approved formula and licensed technicians &mdash; see our <Link href="/reviews" className="text-brand-700 underline">150+ five-star reviews</Link>.</p>

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

      {/* Testimonials */}
      <section className="py-12 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-2 text-center">What GTA Homeowners Say</h2>
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
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">FAQ – Mosquito Control Pricing in Ontario</h2>
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

      <CTASection
        heading="Get Your Free Mosquito Control Quote"
        subtext="Transparent pricing, no contracts, no hidden fees. Starts from $99 per treatment anywhere in the GTA."
      />
    </>
  )
}
