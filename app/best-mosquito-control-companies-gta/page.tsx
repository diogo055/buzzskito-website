import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, faqSchema, speakableSchema, howToSchema } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Best Mosquito Control GTA 2026 · Prices Compared',
  description:
    'Compare the best mosquito control companies in the GTA for 2026. BuzzSkito vs Mosquito Man vs Mosquito.Buzz vs LawnSavers. Pricing, reviews & service areas.',
  canonical: '/best-mosquito-control-companies-gta',
})

const FAQS = [
  {
    question: 'Who is the best mosquito control company in the GTA?',
    answer: 'It depends on what matters most to you. BuzzSkito offers the lowest starting price (from $99/treatment), no contracts, and 129 five-star Google reviews. MosquitoMan has the largest review volume (900+ reviews) and longest track record. LawnSavers offers bundled lawn care and pest control. Mosquito.Buzz operates nationally with franchise locations. Each has trade-offs in pricing, flexibility, and service area coverage.',
  },
  {
    question: 'How much does mosquito control cost in the GTA in 2026?',
    answer: 'Single treatment pricing in 2026 ranges from $99 (BuzzSkito) to $129+ (LawnSavers) per visit for standard residential lots. Seasonal programs range from approximately $450 (MosquitoMan seasonal) to $549-$2,049 (BuzzSkito seasonal tiers). Exact pricing depends on property size, treatment frequency, and whether tick control is included. Most companies offer free quotes.',
  },
  {
    question: 'Do I need a contract for mosquito control in the GTA?',
    answer: 'Not with all providers. BuzzSkito offers no-contract service — you can book single treatments or seasonal programs with no commitment and no cancellation fees. Some competitors require seasonal contracts with cancellation penalties. Always ask about contract terms before booking.',
  },
  {
    question: 'What should I look for when choosing a mosquito control company?',
    answer: 'Key factors to evaluate: (1) Licensed applicators — Ontario requires a Pesticide Applicator\'s Licence. (2) Health Canada-registered products. (3) Rain-back or re-treatment guarantee. (4) Transparent pricing — companies that won\'t quote over the phone often use the assessment as a sales visit. (5) Contract flexibility — no contracts means you can evaluate results before committing. (6) Google reviews from verified customers.',
  },
  {
    question: 'Is BuzzSkito better than MosquitoMan or LawnSavers?',
    answer: 'BuzzSkito offers the lowest per-treatment starting price ($99 vs $129+ for LawnSavers), no contracts (MosquitoMan typically requires seasonal commitment), and a perfect 5-star rating across 129 Google reviews. MosquitoMan has more reviews (900+) and a longer track record. LawnSavers offers bundled lawn and pest services. The best choice depends on your priorities — pricing, flexibility, bundled services, or provider experience.',
  },
]

export default function BestMosquitoControlCompaniesGTAPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: 'Best Companies GTA', url: '/best-mosquito-control-companies-gta' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ service: 'mosquito' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/best-mosquito-control-companies-gta')) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <span className="text-white">Best Companies GTA</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Best Mosquito Control Companies in the GTA &mdash; 2026</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            An honest comparison of the top mosquito control providers serving the Greater Toronto Area in 2026. Pricing, reviews, service areas, and what each company actually offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/free-yard-assessment" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Quote from BuzzSkito</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-brand-900 text-white py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-200">
          <span>&#10003; Factual &amp; Honest Comparison</span>
          <span>&#10003; Pricing Data Updated 2026</span>
          <span>&#10003; Google Review Counts Verified</span>
          <span>&#10003; No Affiliate Links</span>
        </div>
      </section>

      {/* Main content */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>GTA Mosquito Control Companies Compared — 2026</h2>
          <p>There are several professional mosquito control companies serving the Greater Toronto Area. Here&rsquo;s an honest comparison based on publicly available pricing, Google review data, and service offerings as of 2026.</p>

          {/* Comparison table */}
          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-800 text-white">
                  <th className="px-4 py-3 text-left">Company</th>
                  <th className="px-4 py-3 text-left">Starting Price</th>
                  <th className="px-4 py-3 text-left">Google Reviews</th>
                  <th className="px-4 py-3 text-left">Contracts</th>
                  <th className="px-4 py-3 text-left">Service Area</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { company: 'BuzzSkito', price: 'From $99/treatment', reviews: '129 reviews (5.0 stars)', contracts: 'No contracts', area: 'GTA — 19+ cities' },
                  { company: 'MosquitoMan', price: '~$450 seasonal', reviews: '900+ reviews (4.8 stars)', contracts: 'Seasonal programs', area: 'GTA & Southern Ontario' },
                  { company: 'Mosquito.Buzz', price: 'Quote-based', reviews: 'Varies by location', contracts: 'Seasonal programs', area: 'National (franchise)' },
                  { company: 'LawnSavers', price: 'From $129/treatment', reviews: '500+ reviews', contracts: 'Seasonal programs', area: 'GTA' },
                  { company: 'Mosquito Hero', price: 'Quote-based', reviews: 'Newer entrant', contracts: 'Varies', area: 'GTA (select areas)' },
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
          <p className="text-sm text-gray-500 not-prose mb-8">Pricing and review counts are based on publicly available information as of early 2026. Actual pricing may vary by property size and location. Contact each company directly for current quotes.</p>

          <h2>BuzzSkito</h2>
          <p>BuzzSkito is a GTA-based mosquito and tick control company serving 19+ cities across the Greater Toronto Area and York Region. Founded locally, not a franchise.</p>
          <ul>
            <li><strong>Pricing:</strong> Single treatments from $99. Seasonal packages: Basic ($549 for 5 treatments), Standard ($994 for 10 treatments), Exclusive ($2,049 for 20+ treatments with tick add-on).</li>
            <li><strong>Reviews:</strong> 129 Google reviews, 5.0-star average.</li>
            <li><strong>Contracts:</strong> No contracts, no cancellation fees. Book single treatments or seasonal programs with full flexibility.</li>
            <li><strong>Treatment:</strong> Health Canada-approved barrier spray applied by licensed technicians. Targets all vegetation, shrub interiors, fence lines, and structural perimeters.</li>
            <li><strong>Guarantee:</strong> Rain-back guarantee (re-treat at no cost if rain falls within one hour). 30-day protection per treatment.</li>
            <li><strong>Tick control:</strong> Available as add-on or bundled with mosquito treatment.</li>
          </ul>

          <h2>MosquitoMan</h2>
          <p>MosquitoMan is one of the longest-running mosquito control companies in the GTA with a large customer base and extensive review history.</p>
          <ul>
            <li><strong>Pricing:</strong> Seasonal programs advertised around $450. Individual treatment pricing not prominently published.</li>
            <li><strong>Reviews:</strong> 900+ Google reviews, approximately 4.8-star average — the largest review volume in the GTA market.</li>
            <li><strong>Contracts:</strong> Typically seasonal programs.</li>
            <li><strong>Treatment:</strong> Barrier spray targeting mosquitoes. Details on specific products vary.</li>
            <li><strong>Service area:</strong> GTA and parts of Southern Ontario.</li>
          </ul>

          <h2>Mosquito.Buzz</h2>
          <p>Mosquito.Buzz is a national Canadian franchise with locations across multiple provinces, including Ontario.</p>
          <ul>
            <li><strong>Pricing:</strong> Quote-based. Pricing is not published online and requires an assessment.</li>
            <li><strong>Reviews:</strong> Review counts and ratings vary by franchise location.</li>
            <li><strong>Contracts:</strong> Seasonal programs typical for franchise operations.</li>
            <li><strong>Treatment:</strong> Barrier spray. As a franchise, service quality may vary by location.</li>
            <li><strong>Service area:</strong> National — check local franchise availability for your GTA city.</li>
          </ul>

          <h2>LawnSavers</h2>
          <p>LawnSavers is primarily a lawn care company that also offers mosquito control as an add-on service.</p>
          <ul>
            <li><strong>Pricing:</strong> Mosquito treatments starting at $129 per visit. Bundled pricing available with lawn care programs.</li>
            <li><strong>Reviews:</strong> 500+ Google reviews across all services (lawn care + pest control combined).</li>
            <li><strong>Contracts:</strong> Seasonal programs available.</li>
            <li><strong>Treatment:</strong> Barrier spray as part of broader property care offerings.</li>
            <li><strong>Differentiator:</strong> If you already use LawnSavers for lawn care, adding mosquito control is convenient and may offer bundled pricing.</li>
          </ul>

          <h2>What to Look for in a Mosquito Control Company</h2>
          <p>Regardless of which company you choose, make sure they meet these minimum standards:</p>
          <div className="not-prose grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { title: 'Licensed Applicators', desc: 'Ontario law requires a Pesticide Applicator\'s Licence for commercial pesticide application. Ask to see the licence.' },
              { title: 'Health Canada-Registered Products', desc: 'All products used should carry a Health Canada Pest Control Product (PCP) registration number.' },
              { title: 'Rain/Re-Treatment Guarantee', desc: 'If the product washes off before curing, the company should return and re-treat at no charge.' },
              { title: 'Transparent Pricing', desc: 'Companies that won\'t quote over the phone or publish pricing often use the "free assessment" as a high-pressure sales visit.' },
              { title: 'Contract Flexibility', desc: 'No-contract options let you evaluate results before committing to a full season. Look for cancellation terms.' },
              { title: 'Real Google Reviews', desc: 'Check Google reviews for specific, detailed experiences. Be cautious of providers with very few reviews or only generic testimonials.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-brand-50 rounded-xl p-5 border border-brand-100">
                <h3 className="font-bold text-brand-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>

          <h2>Why GTA Homeowners Choose BuzzSkito</h2>
          <p>We built BuzzSkito to address the gaps we saw in the existing market:</p>
          <ul>
            <li><strong>Lowest starting price</strong> &mdash; from $99 per treatment, among the most competitive in the GTA</li>
            <li><strong>No contracts</strong> &mdash; book one treatment to evaluate results, or commit to a seasonal program. Cancel anytime with no penalty.</li>
            <li><strong>Perfect review rating</strong> &mdash; 129 Google reviews, 5.0-star average. Every single review is five stars.</li>
            <li><strong>Local operation</strong> &mdash; not a franchise. Your technician is trained, licensed, and accountable to us directly.</li>
            <li><strong>Full transparency</strong> &mdash; we publish pricing, we quote over the phone, and we don&rsquo;t use assessments as sales calls.</li>
          </ul>

          <h2>Ready to Compare in Person?</h2>
          <p>The best way to evaluate any mosquito control company is to try a single treatment and judge results for yourself. BuzzSkito&rsquo;s no-contract model makes this easy &mdash; book one treatment from $99, see the difference, and decide if you want to continue.</p>
          <p>Call <a href={BUSINESS.phoneHref} className="text-brand-700 hover:underline">{BUSINESS.phone}</a> or use our <Link href="/free-yard-assessment" className="text-brand-700 hover:underline">contact form</Link> for a free, no-obligation quote.</p>

          <h2>City-Specific Comparisons</h2>
          <ul>
            <li><Link href="/best-mosquito-control-companies-brampton" className="text-brand-700 hover:underline">Best Mosquito Control Companies in Brampton 2026</Link></li>
            <li><Link href="/best-mosquito-control-companies-vaughan" className="text-brand-700 hover:underline">Best Mosquito Control Companies in Vaughan 2026</Link></li>
            <li><Link href="/best-mosquito-control-companies-oakville" className="text-brand-700 hover:underline">Best Mosquito Control Companies in Oakville 2026</Link></li>
          </ul>

          <h2>Related Pages</h2>
          <ul>
            <li><Link href="/mosquito-control-pricing" className="text-brand-700 hover:underline">Mosquito Control Pricing 2026</Link> &mdash; detailed pricing breakdown by property size and program</li>
            <li><Link href="/mosquito-control-diy-vs-professional" className="text-brand-700 hover:underline">DIY vs Professional Mosquito Control</Link> &mdash; is professional treatment worth it?</li>
            <li><Link href="/mosquito-control-cost" className="text-brand-700 hover:underline">Mosquito Control Cost Ontario</Link> &mdash; what affects pricing across Ontario</li>
            <li><Link href="/mosquito-spray-safety" className="text-brand-700 hover:underline">Is Mosquito Spray Safe for Kids &amp; Pets?</Link> &mdash; safety FAQ for GTA families</li>
            <li><Link href="/mosquito-control" className="text-brand-700 hover:underline">BuzzSkito Mosquito Control Services</Link></li>
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-2 text-center">What GTA Homeowners Say</h2>
          <p className="text-center text-gray-500 text-sm mb-8">From our 129 five-star Google reviews</p>
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
            <a href="https://g.page/r/CYytaw5LxucdEAE/review" target="_blank" rel="noopener noreferrer" className="text-brand-700 font-semibold text-sm hover:underline">Read all 129 reviews on Google &rarr;</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Mosquito Control Companies GTA &mdash; FAQ</h2>
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

      <CTASection heading="Try BuzzSkito — From $99, No Contract" subtext="129 five-star reviews. Lowest starting price in the GTA. Book one treatment and judge the results for yourself." />
    </>
  )
}
