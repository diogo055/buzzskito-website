import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, faqSchema, speakableSchema, howToSchema } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control Pricing Ontario 2026 — What to Expect | BuzzSkito',
  description:
    'Mosquito control pricing in Ontario for 2026. BuzzSkito seasonal packages from $549. Single treatments from $99. Transparent pricing, no hidden fees.',
  canonical: '/mosquito-control-pricing',
})

const FAQS = [
  {
    question: 'How much does mosquito control cost per treatment in Ontario?',
    answer: 'Single professional mosquito barrier spray treatments in Ontario start from $99 for standard residential lots (under 6,000 sq ft). Mid-size properties (6,000-10,000 sq ft) are quoted individually. BuzzSkito offers transparent pricing with no hidden fees — call (289) 216-5030 for a free quote specific to your property.',
  },
  {
    question: 'What is included in the BuzzSkito seasonal packages?',
    answer: "All seasonal packages include: Health Canada-approved barrier spray applied by a licensed technician, full property treatment (all vegetation, shrub interiors, fence lines, structural perimeters), SMS notification before arrival, post-treatment confirmation email with service log, rain-back guarantee on every visit, and no contracts or cancellation fees. The difference between packages is the number of treatments and whether tick control is included.",
  },
  {
    question: 'Is the season package worth it vs booking individual treatments?',
    answer: 'Yes, if you need 3 or more treatments per season (which most GTA properties do). The Basic package ($549 for 3 treatments) works out to $183/treatment vs $99+ per individual treatment. However, the real value is consistent scheduling — gaps between treatments allow mosquito populations to rebuild. Seasonal programs maintain continuous protection from May through September.',
  },
  {
    question: 'What affects mosquito control pricing?',
    answer: 'Four main factors: (1) Property size — larger lots require more product and technician time. (2) Treatment frequency — seasonal programs cost less per treatment than individual bookings. (3) Tick control add-on — combined mosquito and tick treatment costs more than mosquito-only. (4) Vegetation density — heavily landscaped properties with dense shrub coverage require more detailed application.',
  },
  {
    question: 'How does BuzzSkito pricing compare to competitors?',
    answer: "BuzzSkito's single treatments start from $99 — among the lowest in the GTA market. LawnSavers starts at $129 per treatment. MosquitoMan advertises seasonal programs around $450. BuzzSkito provides the same Health Canada-approved formula and licensed technicians at a competitive price point, with no contracts required and a rain-back guarantee included on every visit.",
  },
]

export default function MosquitoControlPricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: 'Pricing', url: '/mosquito-control-pricing' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ service: 'mosquito' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/mosquito-control-pricing')) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <span className="text-white">Pricing</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Mosquito Control Pricing &mdash; Ontario 2026</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Transparent pricing. No hidden fees. No contracts. BuzzSkito seasonal packages from $549. Single treatments from $99. Here&rsquo;s exactly what you&rsquo;ll pay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-brand-900 text-white py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-200">
          <span>&#10003; Transparent Pricing &mdash; No Surprises</span>
          <span>&#10003; No Contracts Required</span>
          <span>&#10003; Rain-Back Guarantee Included</span>
          <span>&#10003; Health Canada&ndash;Approved Formula</span>
          <span>&#10003; 5-Star Rated &middot; 126 Reviews</span>
        </div>
      </section>

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

      {/* Main pricing content */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">

          <h2>BuzzSkito Seasonal Packages &mdash; 2026</h2>
          <p>Season packages are the most cost-effective way to maintain continuous mosquito protection from May through September. Every package includes the same professional treatment &mdash; the difference is frequency and coverage.</p>

          {/* Package comparison */}
          <div className="not-prose grid sm:grid-cols-3 gap-4 my-8">
            {[
              {
                name: 'Basic',
                price: '$549',
                treatments: '3 treatments',
                perTreatment: '$183/treatment',
                features: ['May through September', 'Every 35-40 days', 'Mosquito barrier spray', 'Health Canada-approved formula', 'Rain-back guarantee', 'No contracts'],
                best: 'Lower-pressure properties away from water features',
              },
              {
                name: 'Standard',
                price: '$994',
                treatments: '4 treatments',
                perTreatment: '$249/treatment',
                features: ['May through September', 'Every 28 days', 'Mosquito barrier spray', 'Health Canada-approved formula', 'Rain-back guarantee', 'No contracts', 'Priority scheduling'],
                best: 'Most GTA suburban properties',
                popular: true,
              },
              {
                name: 'Exclusive',
                price: '$2,049',
                treatments: '5 treatments',
                perTreatment: '$410/treatment',
                features: ['May through September', 'Every 21 days', 'Mosquito + tick barrier spray', 'Health Canada-approved formula', 'Rain-back guarantee', 'No contracts', 'Priority scheduling', 'Tick control included'],
                best: 'High-pressure properties near ravines, water, or conservation areas',
              },
            ].map(({ name, price, treatments, perTreatment, features, best, popular }) => (
              <div key={name} className={`rounded-2xl p-6 border-2 ${popular ? 'border-amber-400 bg-amber-50 relative' : 'border-brand-100 bg-brand-50'}`}>
                {popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</span>}
                <h3 className="text-xl font-extrabold text-brand-900 mb-1">{name}</h3>
                <p className="text-3xl font-extrabold text-brand-800 mb-1">{price}</p>
                <p className="text-sm text-gray-500 mb-1">{treatments} &middot; {perTreatment}</p>
                <p className="text-xs text-brand-600 font-medium mb-4">Best for: {best}</p>
                <ul className="space-y-2 mb-6">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="block text-center bg-brand-700 hover:bg-brand-600 text-white font-bold px-4 py-3 rounded-full text-sm transition-colors">Get a Quote</Link>
              </div>
            ))}
          </div>

          <h2>Single Treatment Pricing</h2>
          <p>Not ready for a seasonal package? No problem. BuzzSkito offers individual treatments with no contracts and no commitment.</p>
          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-800 text-white">
                  <th className="px-4 py-3 text-left">Property Size</th>
                  <th className="px-4 py-3 text-left">Starting Price</th>
                  <th className="px-4 py-3 text-left">Typical Property</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { size: 'Standard lot (under 6,000 sq ft)', price: 'From $99', typical: 'GTA semi-detached or standard detached home' },
                  { size: 'Mid-size lot (6,000-10,000 sq ft)', price: 'Custom quote', typical: 'Larger detached, corner lots, wider lots' },
                  { size: 'Large lot (10,000-20,000 sq ft)', price: 'Custom quote', typical: 'Estate properties, acreage' },
                  { size: 'Rural / farm (20,000+ sq ft)', price: 'Custom quote', typical: 'Hobby farms, rural acreage' },
                ].map(({ size, price, typical }) => (
                  <tr key={size} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-brand-800">{size}</td>
                    <td className="px-4 py-3 font-extrabold text-brand-700">{price}</td>
                    <td className="px-4 py-3 text-gray-600">{typical}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 not-prose mb-8">All pricing is property-specific. Call <a href={BUSINESS.phoneHref} className="text-brand-700 underline">{BUSINESS.phone}</a> or use our <Link href="/contact" className="text-brand-700 underline">contact form</Link> for a free, no-obligation quote.</p>

          <h2>What Affects Mosquito Control Cost?</h2>
          <h3>1. Property Size (Lot Size)</h3>
          <p>The single biggest factor in pricing. Larger lots require more product and more technician time. Most GTA suburban lots fall in the standard category (under 6,000 sq ft). Properties on ravine lots, cul-de-sacs with oversized yards, or rural acreage are quoted individually.</p>

          <h3>2. Treatment Frequency</h3>
          <p>More treatments per season means better coverage but higher total cost. However, per-treatment cost drops substantially with seasonal packages. A single $99 treatment is great for evaluating results, but consistent 21&ndash;28-day scheduling delivers dramatically better seasonal outcomes.</p>

          <h3>3. Tick Control Add-On</h3>
          <p>Tick treatment can be added to any mosquito program. The Exclusive package includes tick control in the price. For other packages or single treatments, tick add-on is available at an additional cost. Properties near ravines, conservation areas, or in York Region (where blacklegged tick populations are well-established) benefit most from combined treatment.</p>

          <h3>4. Vegetation Density</h3>
          <p>Heavily landscaped properties with dense mature shrubs, ornamental grasses, and extensive garden beds require more thorough application to ensure full coverage of all mosquito resting sites. This can affect treatment time and, for very dense properties, pricing.</p>

          <h2>Seasonal Package vs Single Treatments</h2>
          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-800 text-white">
                  <th className="px-4 py-3 text-left">Approach</th>
                  <th className="px-4 py-3 text-left">Season Cost (5 visits)</th>
                  <th className="px-4 py-3 text-left">Per Treatment</th>
                  <th className="px-4 py-3 text-left">Scheduling</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { approach: 'Individual bookings (5x)', cost: '$495+', per: 'From $99 each', sched: 'You manage timing' },
                  { approach: 'Basic package (3 treatments)', cost: '$549', per: '$183 each', sched: 'Pre-scheduled' },
                  { approach: 'Standard package (4 treatments)', cost: '$994', per: '$249 each', sched: 'Pre-scheduled + priority' },
                  { approach: 'Exclusive package (5 treatments)', cost: '$2,049', per: '$410 each', sched: 'Pre-scheduled + priority + tick' },
                ].map(({ approach, cost, per, sched }) => (
                  <tr key={approach} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-gray-800">{approach}</td>
                    <td className="px-4 py-3 text-brand-700 font-semibold">{cost}</td>
                    <td className="px-4 py-3 text-gray-600">{per}</td>
                    <td className="px-4 py-3 text-gray-600">{sched}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>Individual bookings offer the lowest per-treatment cost and maximum flexibility. Seasonal packages offer guaranteed scheduling, priority service dates, and the peace of mind that your property is covered from May through September without you having to remember to rebook.</p>

          <h2>How BuzzSkito Compares to Competitors</h2>
          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-800 text-white">
                  <th className="px-4 py-3 text-left">Company</th>
                  <th className="px-4 py-3 text-left">Single Treatment</th>
                  <th className="px-4 py-3 text-left">Seasonal Program</th>
                  <th className="px-4 py-3 text-left">Contracts</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { company: 'BuzzSkito', single: 'From $99', seasonal: 'From $549 (3 treatments)', contracts: 'No contracts' },
                  { company: 'MosquitoMan', single: 'Not published', seasonal: '~$450 seasonal', contracts: 'Seasonal commitment' },
                  { company: 'LawnSavers', single: 'From $129', seasonal: 'Quote-based', contracts: 'Seasonal programs' },
                  { company: 'Mosquito.Buzz', single: 'Quote-based', seasonal: 'Quote-based', contracts: 'Seasonal programs' },
                ].map(({ company, single, seasonal, contracts }) => (
                  <tr key={company} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-brand-800">{company}</td>
                    <td className="px-4 py-3 text-brand-700 font-semibold">{single}</td>
                    <td className="px-4 py-3 text-gray-600">{seasonal}</td>
                    <td className="px-4 py-3 text-gray-600">{contracts}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>What&rsquo;s Included in Every Treatment</h2>
          <p>Every BuzzSkito treatment &mdash; whether a single visit or part of a seasonal package &mdash; includes:</p>
          <ul>
            <li><strong>Full property barrier application</strong> &mdash; all vegetation, shrubs, garden beds, leaf undersides, fence lines, deck undersides, and structural perimeters</li>
            <li><strong>Health Canada-registered, water-based formula</strong> &mdash; kills mosquitoes on contact and leaves a 30-day residual barrier</li>
            <li><strong>Property assessment on first visit</strong> &mdash; identification of standing water sources, high-risk zones, and property-specific factors</li>
            <li><strong>SMS notification before arrival</strong> &mdash; you don&rsquo;t need to be home</li>
            <li><strong>Post-treatment confirmation email</strong> with full treatment log</li>
            <li><strong>Rain-back guarantee</strong> &mdash; if significant rain falls within one hour, we return and re-treat free</li>
            <li><strong>No contracts, no cancellation fees</strong></li>
          </ul>

          <h2>Get Your Custom Quote</h2>
          <p>Pricing is property-specific. The fastest way to get an accurate quote is to call us directly or submit your address through our contact form.</p>
          <div className="not-prose bg-amber-50 border border-amber-200 rounded-2xl p-6 my-6">
            <h3 className="text-xl font-extrabold text-brand-900 mb-2">Free, No-Obligation Quote</h3>
            <p className="text-gray-600 text-sm mb-4">Tell us your address and property size. We&rsquo;ll provide an exact quote &mdash; typically within 24 hours for online requests, or immediately over the phone.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-bold px-6 py-3 rounded-full text-sm transition-colors text-center">Request a Quote Online</Link>
              <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center gap-2 border-2 border-brand-700 text-brand-700 hover:bg-brand-700 hover:text-white font-bold px-6 py-3 rounded-full text-sm transition-colors">Call {BUSINESS.phone}</a>
            </div>
          </div>

          <h2>Related Pages</h2>
          <ul>
            <li><Link href="/mosquito-control-cost" className="text-brand-700 hover:underline">Mosquito Control Cost Ontario</Link> &mdash; detailed pricing factors and city-by-city information</li>
            <li><Link href="/best-mosquito-control-companies-gta" className="text-brand-700 hover:underline">Best Mosquito Control Companies GTA</Link> &mdash; compare providers side by side</li>
            <li><Link href="/mosquito-control-diy-vs-professional" className="text-brand-700 hover:underline">DIY vs Professional Mosquito Control</Link> &mdash; is professional treatment worth it?</li>
            <li><Link href="/mosquito-control" className="text-brand-700 hover:underline">BuzzSkito Mosquito Control Services</Link></li>
            <li><Link href="/tick-control" className="text-brand-700 hover:underline">Tick Control Services</Link> &mdash; add tick treatment to any mosquito program</li>
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-2 text-center">What GTA Homeowners Say</h2>
          <p className="text-center text-gray-500 text-sm mb-8">From our 126 five-star Google reviews</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { author: 'Sarah M.', text: 'BuzzSkito treated our backyard and we noticed a huge difference immediately. No mosquitoes at our outdoor birthday party! The technician was professional and on time. Highly recommend.' },
              { author: 'Mike T.', text: 'Second year using BuzzSkito for the season package. Consistent, reliable, and actually works. Our backyard used to be unbearable by July \u2014 now we\u2019re out there every evening.' },
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
            <a href="https://g.page/r/CYytaw5LxucdEAE/review" target="_blank" rel="noopener noreferrer" className="text-brand-700 font-semibold text-sm hover:underline">Read all 126 reviews on Google &rarr;</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Mosquito Control Pricing FAQ</h2>
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

      <CTASection heading="Get Your Free Mosquito Control Quote" subtext="Transparent pricing from $99/treatment. Seasonal packages from $549. No contracts. No hidden fees." />
    </>
  )
}
