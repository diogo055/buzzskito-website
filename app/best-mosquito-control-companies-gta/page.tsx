import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import CityHero from '@/components/CityHero'
import QuickAnswer from '@/components/QuickAnswer'
import TypicalPrices from '@/components/TypicalPrices'
import CityPriceCard from '@/components/CityPriceCard'
import { buildMetadata, breadcrumbSchema, faqSchema, speakableSchema, howToSchema, itemListSchema } from '@/lib/seo'
import { BUSINESS, PROMISES } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Best Mosquito Control Companies GTA 2026 (4 Compared, Prices Inside)',
  description:
    'Honest 2026 comparison: BuzzSkito ($99, 150+ reviews, no contracts) vs Mosquito Man (seasonal contracts) vs Mosquito.Buzz (franchise) vs LawnSavers (bundled lawn care). Real pricing, reviews, service areas, and which is right for your GTA property.',
  canonical: '/best-mosquito-control-companies-gta',
})

const FAQS = [
  {
    question: 'Who is the best mosquito control company in the GTA?',
    answer: `It depends on what matters most to you. BuzzSkito offers a starting price from $99/treatment, no contracts, and 150+ five-star Google reviews. MosquitoMan has a large Google review volume and a long track record. LawnSavers offers bundled lawn care and pest control. Mosquito.Buzz operates nationally with franchise locations. Each has trade-offs in pricing, flexibility, and service area coverage. Whichever you consider, ask any provider five questions before you book: Is the price shown before you book? How many sprays per season? What happens if it rains after a treatment? Is an Ontario pesticide operator licence number shown? Which plans include a guarantee? BuzzSkito's answers: from $99 on a standard lot; 5, 10 or 20+ sprays (tick: 5); a free re-treat if it rains within 1 hour of a treatment, on every plan; Licence ${BUSINESS.licenseNumber}; and the Bite-Free Guarantee on Standard & Exclusive plans.`,
  },
  {
    question: 'How much does mosquito control cost in the GTA in 2026?',
    answer: 'BuzzSkito single treatments in 2026 start at $99 on a standard lot under 10,000 sq ft, and season plans are $549 (5 sprays), $994 (10 sprays) or $2,049 (20+ sprays), plus HST. Tick control adds $497 with any mosquito plan (5 sprays per season). Other providers, including LawnSavers, price differently (pricing varies — check their site), so ask for a written price before you book. Most companies offer free quotes.',
  },
  {
    question: 'Do I need a contract for mosquito control in the GTA?',
    answer: 'Not with all providers. BuzzSkito offers no-contract service — you can book single treatments or seasonal programs with no commitment and no cancellation fees. Some competitors require seasonal contracts with cancellation penalties. Always ask about contract terms before booking.',
  },
  {
    question: 'What should I look for when choosing a mosquito control company?',
    answer: 'Key factors to evaluate: (1) Licensed applicators — Ontario requires a Pesticide Applicator\'s Licence. (2) Registered products with a PCP number on the label. (3) Rain-back or re-treatment guarantee. (4) Transparent pricing — companies that won\'t quote over the phone often use the assessment as a sales visit. (5) Contract flexibility — no contracts means you can evaluate results before committing. (6) Google reviews from verified customers.',
  },
  {
    question: 'Is BuzzSkito better than MosquitoMan or LawnSavers?',
    answer: 'BuzzSkito offers a per-treatment starting price of $99 on a standard lot (LawnSavers pricing varies — check their site), no contracts (MosquitoMan typically requires seasonal commitment), and a perfect 5-star rating across 150+ Google reviews. MosquitoMan has more reviews and a longer track record. LawnSavers offers bundled lawn and pest services. BuzzSkito also publishes its season prices ($549, $994 and $2,049, plus HST) and puts its guarantees in writing: rain-back on every plan, and the Bite-Free Guarantee on Standard & Exclusive plans. The best choice depends on your priorities — pricing, flexibility, bundled services, or provider experience.',
  },
]

export default function BestMosquitoControlCompaniesGTAPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: 'Best Companies GTA', url: '/best-mosquito-control-companies-gta' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ service: 'mosquito' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/best-mosquito-control-companies-gta', '2026-07-01')) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema({ name: 'Best Mosquito Control Companies in the GTA — 2026', description: 'Honest 2026 comparison: BuzzSkito ($99, 150+ reviews, no contracts) vs Mosquito Man (seasonal contracts) vs Mosquito.Buzz (franchise) vs LawnSavers (bundled lawn care).', slug: '/best-mosquito-control-companies-gta', items: [{ name: 'BuzzSkito' }, { name: 'MosquitoMan' }, { name: 'Mosquito.Buzz' }, { name: 'LawnSavers' }] })) }} />

      {/* Hero */}
      <CityHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Mosquito Control', href: '/mosquito-control' },
          { label: 'Best Companies GTA' },
        ]}
        title={<>Best Mosquito Control Companies in the GTA &mdash; 2026</>}
        subtitle={<>An honest comparison of the top mosquito control providers serving the Greater Toronto Area in 2026. Pricing, reviews, service areas, and what each company actually offers. BuzzSkito is a licensed Ontario pesticide operator, with treatments applied according to label directions.</>}
        image="/spray-pool.webp"
        imageAlt="BuzzSkito technician applying barrier spray beside a backyard pool"
      />

      {/* Trust bar */}
      <section className="bg-brand-900 text-white py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-200">
          <span>&#10003; Factual &amp; Honest Comparison</span>
          <span>&#10003; Pricing Data Updated July 2026</span>
          <span>&#10003; Google Review Counts Verified</span>
          <span>&#10003; No Affiliate Links</span>
        </div>
      </section>

      <QuickAnswer question="Who is the best mosquito control company in the GTA?">
        <p>
          <strong>BuzzSkito is the best mosquito control company in the GTA for 2026, with a starting price from $99/treatment, no contracts, and 150+ five-star Google reviews.</strong> This comparison ranks 4 providers — BuzzSkito, MosquitoMan, Mosquito.Buzz, and LawnSavers — on pricing, reviews, contracts, and service area coverage. Whichever you choose, ask about price, sprays per season, rain, licensing ({PROMISES.licence} for BuzzSkito), and which plans carry a guarantee.
        </p>
      </QuickAnswer>

      <TypicalPrices service="mosquito" city="GTA" />

      {/* Main content */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>GTA Mosquito Control Companies Compared — 2026</h2>
          <p>There are several professional mosquito control companies serving the Greater Toronto Area. Here&rsquo;s an honest comparison based on publicly available information and service offerings as of July 2026.</p>

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
                  { company: 'BuzzSkito', price: 'From $99/treatment', reviews: '150+ reviews (5.0 stars)', contracts: 'No contracts', area: 'GTA — 19+ cities' },
                  { company: 'MosquitoMan', price: 'Quote-based', reviews: 'See Google', contracts: 'Seasonal programs', area: 'GTA & Southern Ontario' },
                  { company: 'Mosquito.Buzz', price: 'Quote-based', reviews: 'Varies by location', contracts: 'Seasonal programs', area: 'National (franchise)' },
                  { company: 'LawnSavers', price: 'Pricing varies — check their site', reviews: 'See Google', contracts: 'Seasonal programs', area: 'GTA' },
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
          <p className="text-sm text-gray-500 not-prose mb-8">Other companies&rsquo; pricing and Google reviews change over time, so check each company&rsquo;s own site and Google listing. Actual pricing may vary by property size and location. Contact each company directly for current quotes.</p>

          <h2>What to Ask Any Mosquito Control Company in the GTA</h2>
          <p>Whichever company you consider, here are the questions worth asking any provider before you book, with BuzzSkito&rsquo;s answers.</p>

          {/* Checklist table */}
          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-800 text-white">
                  <th className="px-4 py-3 text-left">Ask this</th>
                  <th className="px-4 py-3 text-left">BuzzSkito&rsquo;s answer</th>
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
                    <td className="px-4 py-3 font-semibold text-brand-800">{q}</td>
                    <td className="px-4 py-3 text-gray-700">{a}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 not-prose mb-8">BuzzSkito prices are for a standard lot under 10,000 sq ft, plus HST. Actual pricing varies by property size. Contact any company directly for a current quote.</p>

          <h2>BuzzSkito</h2>
          <p>BuzzSkito is a GTA-based mosquito and tick control company serving 19+ cities across the Greater Toronto Area and York Region. Founded locally, not a franchise.</p>
          <ul>
            <li><strong>Pricing:</strong> Single treatments from $99 on a standard lot. Season plans: Basic $549 (5 sprays), Standard $994 (10 sprays, most popular), Exclusive $2,049 (20+ sprays), plus HST. Questions? Call (289) 216-5030.</li>
            <li><strong>Reviews:</strong> 150+ Google reviews, 5.0-star average.</li>
            <li><strong>Contracts:</strong> No contracts, no cancellation fees. Book single treatments or seasonal programs with full flexibility.</li>
            <li><strong>Treatment:</strong> Barrier spray applied by a licensed Ontario operator ({PROMISES.licence}), according to product label directions. Targets all vegetation, shrub interiors, fence lines, and structural perimeters.</li>
            <li><strong>Guarantee:</strong> Rain-back guarantee on every plan (re-treat at no cost if rain falls within one hour). Bite-Free Guarantee on Standard &amp; Exclusive plans.</li>
            <li><strong>Tick control:</strong> 5 sprays per season — $597 on its own or $497 bundled with any mosquito plan.</li>
          </ul>

          <h2>MosquitoMan</h2>
          <p>MosquitoMan is one of the longest-running mosquito control companies in the GTA with a large customer base and extensive review history.</p>
          <ul>
            <li><strong>Pricing:</strong> Seasonal programs; pricing varies — check their site. Individual treatment pricing not prominently published.</li>
            <li><strong>Reviews:</strong> A large Google review history — see Google for the current count and rating.</li>
            <li><strong>Contracts:</strong> Typically seasonal programs.</li>
            <li><strong>Treatment:</strong> Barrier spray targeting mosquitoes. Details on specific products vary.</li>
            <li><strong>Service area:</strong> GTA and parts of Southern Ontario.</li>
          </ul>

          <h2>Mosquito.Buzz</h2>
          <p>Mosquito.Buzz is a national Canadian franchise with locations across multiple provinces, including Ontario.</p>
          <ul>
            <li><strong>Pricing:</strong> Quote-based; pricing varies — check their site.</li>
            <li><strong>Reviews:</strong> Review counts and ratings vary by franchise location.</li>
            <li><strong>Contracts:</strong> Seasonal programs typical for franchise operations.</li>
            <li><strong>Treatment:</strong> Barrier spray. As a franchise, service can vary by location, so ask for the local business&rsquo;s operator licence number.</li>
            <li><strong>Service area:</strong> National — check local franchise availability for your GTA city.</li>
          </ul>

          <h2>LawnSavers</h2>
          <p>LawnSavers is primarily a lawn care company that also offers mosquito control as an add-on service.</p>
          <ul>
            <li><strong>Pricing:</strong> Per-visit mosquito treatments; pricing varies — check their site. Bundled pricing available with lawn care programs.</li>
            <li><strong>Reviews:</strong> Google reviews span all services (lawn care + pest control combined) — see Google for the current count.</li>
            <li><strong>Contracts:</strong> Seasonal programs available.</li>
            <li><strong>Treatment:</strong> Barrier spray as part of broader property care offerings.</li>
            <li><strong>Differentiator:</strong> If you already use LawnSavers for lawn care, adding mosquito control is convenient and may offer bundled pricing.</li>
          </ul>

        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4">
        <CityPriceCard city="GTA" service="mosquito" location="price_card_mid" />
      </div>

      <section className="pb-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>What to Look for in a Mosquito Control Company</h2>
          <p>Regardless of which company you choose, make sure they meet these minimum standards:</p>
          <div className="not-prose grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { title: 'Licensed Applicators', desc: 'Ontario law requires a Pesticide Applicator\'s Licence for commercial pesticide application. Ask to see the licence.' },
              { title: 'Registered Products (PCP Number)', desc: 'All products used should carry a Pest Control Product (PCP) registration number on the label.' },
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
            <li><strong>Published starting price</strong> &mdash; from $99 per treatment on a standard lot, plus HST</li>
            <li><strong>No contracts</strong> &mdash; book one treatment to evaluate results, or commit to a seasonal program. Cancel anytime with no penalty.</li>
            <li><strong>Perfect review rating</strong> &mdash; 150+ Google reviews, 5.0-star average. Every single review is five stars.</li>
            <li><strong>Local operation</strong> &mdash; not a franchise. Your technician is trained, licensed, and accountable to us directly.</li>
            <li><strong>Full transparency</strong> &mdash; we publish pricing, we quote over the phone, and we don&rsquo;t use assessments as sales calls.</li>
          </ul>

          <h2>Ready to Compare in Person?</h2>
          <p>The best way to evaluate any mosquito control company is to try a single treatment and judge results for yourself. BuzzSkito&rsquo;s no-contract model makes this easy &mdash; book one treatment from $99, see the difference, and decide if you want to continue.</p>
          <p>Call <a href={BUSINESS.phoneHref} className="text-brand-700 hover:underline">{BUSINESS.phone}</a> or use our <Link href="/free-yard-assessment" className="text-brand-700 hover:underline">contact form</Link> for a free, no-obligation quote.</p>

          <h2>City-Specific Comparisons</h2>
          <ul>
            <li><Link href="/brampton-mosquito-control" className="text-brand-700 hover:underline">Mosquito Control in Brampton</Link></li>
            <li><Link href="/vaughan-mosquito-control" className="text-brand-700 hover:underline">Mosquito Control in Vaughan</Link></li>
            <li><Link href="/oakville-mosquito-control" className="text-brand-700 hover:underline">Mosquito Control in Oakville</Link></li>
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
        <CityPriceCard city="GTA" service="mosquito" />
      </div>

      {/* FAQ */}
      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Mosquito Control Companies GTA &mdash; FAQ</h2>
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

      <CTASection heading="Try BuzzSkito — From $99, No Contract" subtext="150+ five-star reviews. From $99 on a standard lot. Book one treatment and judge the results for yourself." />
    </>
  )
}
