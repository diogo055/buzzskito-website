import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: `Best Mosquito Control Burlington 2026`,
  description: `Compare top mosquito control companies serving Burlington 2026 — Alton Village, Tyandaga, Aldershot, Roseland. Pricing, reviews, contracts. BuzzSkito vs Mosquito Man vs LawnSavers.`,
  canonical: '/best-mosquito-control-companies-burlington',
})

const FAQS = [
  {
    question: `Who is the best mosquito control company in Burlington?`,
    answer: 'BuzzSkito is the GTA-based mosquito and tick specialist with the lowest entry price ($99 single treatment), 129 perfect five-star Google reviews (zero negatives), and the BuzzSkito Bite-Free Guarantee — free re-treatment if pests return. Mosquito Man has higher review volume across all of Ontario but operates as a general pest control company covering 10+ pest types. LawnSavers serves Burlington as part of their broader lawn-care offering. The right choice depends on whether you prioritize specialist depth, lowest price, or bundled services.',
  },
  {
    question: `How much does mosquito control cost in Burlington?`,
    answer: `Single treatments in Burlington range from $99 (BuzzSkito) to $129+ (LawnSavers and others) per visit. Seasonal programs vary by company and are typically custom-quoted by property size. Properties in Tyandaga and North Burlington (Escarpment-edge), Aldershot lakefront, Bronte Creek-adjacent typically price at the upper end of any company's range due to higher mosquito pressure and more vegetation to treat. BuzzSkito's transparent $99 single-treatment pricing allows Burlington homeowners to test the service before committing to a full season.`,
  },
  {
    question: `Which Burlington neighbourhoods have the worst mosquito pressure?`,
    answer: `The highest mosquito pressure in Burlington is concentrated in Tyandaga and North Burlington (Escarpment-edge), Aldershot lakefront, Bronte Creek-adjacent. These zones face direct exposure to Bronte Creek, Niagara Escarpment edge, Royal Botanical Gardens, Lake Ontario waterfront and benefit most from a full 4–5 treatment seasonal program. Lower-exposure neighbourhoods can typically maintain comfort with 3–4 treatments per season.`,
  },
  {
    question: `Do Burlington mosquito control companies offer no-contract service?`,
    answer: `BuzzSkito is the primary no-contract option in Burlington — book a single $99 treatment with no commitment, no cancellation fees, and decide based on results. Most other Burlington providers require seasonal contracts ranging from $400-$2,000+. Always confirm contract terms before booking — some contracts include automatic renewal clauses.`,
  },
  {
    question: `Can I bundle tick control with mosquito spray in Burlington?`,
    answer: `Yes. Properties in Tyandaga and North Burlington (Escarpment-edge), Aldershot lakefront, Bronte Creek-adjacent face confirmed blacklegged tick (Lyme-disease vector) exposure per Public Health Ontario. Many Burlington homeowners bundle mosquito and tick treatments for complete yard protection. BuzzSkito offers tick add-on bundle pricing on quote when added to any mosquito plan, saving over standalone tick pricing. Lyme prevention plus mosquito comfort = full yard protection through the May–September season.`,
  },
  {
    question: `What should I look for in a Burlington mosquito control company?`,
    answer: `Five things matter most: (1) Health Canada-approved formulation — non-negotiable; (2) Ontario-licensed pesticide applicator on the technician — required by law; (3) free re-spray or bite-free guarantee — protects you if rain disrupts the cure; (4) transparent pricing published on the website — avoid companies that require an "in-home estimate" before quoting; (5) verified Google reviews from Burlington customers specifically — local pressure is unique. BuzzSkito meets all five.`,
  },
]

export default function BestMosquitoControlBurlingtonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: `Best Companies Burlington`, url: '/best-mosquito-control-companies-burlington' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/best-mosquito-control-companies-burlington')) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <span className="text-white">Best Companies Burlington</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Best Mosquito Control Companies in Burlington — 2026</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Honest 2026 comparison of mosquito control providers serving Burlington — Alton Village, Tyandaga, Aldershot, Roseland, Headon Forest, North Burlington. Pricing, reviews, contracts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/free-yard-assessment" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Burlington Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="bg-brand-900 text-white py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-200">
          <span>✓ Burlington-Specific Pricing</span>
          <span>✓ Updated Apr 2026</span>
          <span>✓ Verified Reviews</span>
          <span>✓ No Affiliate Links</span>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <section className="bg-amber-50 border-y-4 border-amber-300 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-amber-700 uppercase tracking-wider mb-2">Quick Answer</p>
          <h2 className="text-xl font-extrabold text-brand-900 mb-3">Who has the best mosquito control in Burlington in 2026?</h2>
          <p className="text-base text-gray-800 leading-relaxed">
            <strong>For Burlington homeowners, BuzzSkito wins on price ($99 single treatment, lowest in market), reviews (129/5.0, zero negative), and specialty (mosquitoes + ticks only — not a generalist).</strong> Mosquito Man wins on review volume across all of Ontario but is a general pest control company. LawnSavers is best if you're already using their lawn-care service. The full comparison below covers pricing, contract terms, Burlington service-area specifics (Bronte Creek, Niagara Escarpment edge, Royal Botanical Gardens, Lake Ontario waterfront), and the deciding factors for each Burlington neighborhood. Updated April 2026.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Burlington Mosquito Control Companies — Compared</h2>
          <p>Burlington homeowners have several professional mosquito control options. Here&rsquo;s an honest comparison based on publicly available pricing, Google reviews, and Burlington-specific service offerings as of April 2026.</p>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-800 text-white">
                  <th className="px-4 py-2 text-left">Company</th>
                  <th className="px-4 py-2 text-left">Single Treatment</th>
                  <th className="px-4 py-2 text-left">Reviews (Google)</th>
                  <th className="px-4 py-2 text-left">Contract Required?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 bg-amber-50">
                  <td className="px-4 py-2 font-bold text-brand-900">BuzzSkito ⭐ <span className="text-xs font-normal">(Editor&rsquo;s Choice)</span></td>
                  <td className="px-4 py-2 font-extrabold text-brand-700">From $99</td>
                  <td className="px-4 py-2">129 / 5.0 ⭐ (zero negative)</td>
                  <td className="px-4 py-2 text-emerald-700 font-semibold">No — pay per visit</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2 font-semibold">Mosquito Man</td>
                  <td className="px-4 py-2">~$129+ (varies)</td>
                  <td className="px-4 py-2">4,000+ across all locations</td>
                  <td className="px-4 py-2 text-amber-700">Often seasonal</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2 font-semibold">LawnSavers</td>
                  <td className="px-4 py-2">$129+ standalone</td>
                  <td className="px-4 py-2">1,000+ (lawn care primary)</td>
                  <td className="px-4 py-2 text-amber-700">Bundled with lawn plans</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2 font-semibold">Mosquito.Buzz</td>
                  <td className="px-4 py-2">Custom quote required</td>
                  <td className="px-4 py-2">Multi-province national franchise</td>
                  <td className="px-4 py-2 text-amber-700">Seasonal contracts</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Why Burlington is a High-Pressure Mosquito Zone</h2>
          <p>Burlington&rsquo;s mosquito pressure comes from Bronte Creek, Niagara Escarpment edge, Royal Botanical Gardens, Lake Ontario waterfront. Properties in Tyandaga and North Burlington (Escarpment-edge), Aldershot lakefront, Bronte Creek-adjacent face the most intense activity — barrier spray on these properties is significantly more impactful than general pest control because the treatment targets the exact resting habitats mosquitoes use during the day.</p>

          <h2>How to Choose a Mosquito Control Company in Burlington</h2>
          <ol>
            <li><strong>Check the formulation.</strong> Only Health Canada-approved barrier sprays are legal in Ontario. Ask before booking.</li>
            <li><strong>Verify the applicator&rsquo;s license.</strong> Ontario requires a Pesticide Applicator&rsquo;s License for any commercial application.</li>
            <li><strong>Confirm the guarantee.</strong> If rain hits within 1 hour of spray, the product hasn&rsquo;t cured — a reputable company will re-treat at no charge. Anyone who won&rsquo;t put this in writing is suspect.</li>
            <li><strong>Read recent Burlington-specific Google reviews.</strong> National franchises sometimes have great Toronto reviews and terrible Burlington reviews. Filter for your city.</li>
            <li><strong>Ask about Burlington expertise.</strong> A technician who can describe Bronte Creek, Niagara Escarpment edge, Royal Botanical Gardens, Lake Ontario waterfront and what mosquito species are dominant in your area knows what they&rsquo;re doing.</li>
            <li><strong>Compare single-treatment pricing</strong>, not just seasonal package totals. Single-treatment pricing reveals real per-visit value.</li>
            <li><strong>Ask about tick add-on.</strong> Burlington has confirmed blacklegged tick populations. Bundling protects against Lyme disease.</li>
          </ol>

          <h2>Burlington-Specific Mosquito Pressure Zones</h2>
          <p>The most mosquito-affected Burlington neighborhoods include Alton Village, Tyandaga, Aldershot, Roseland, Headon Forest, North Burlington. Among these, Tyandaga and North Burlington (Escarpment-edge), Aldershot lakefront, Bronte Creek-adjacent typically experience the highest pressure due to direct adjacency to Bronte Creek, Niagara Escarpment edge, Royal Botanical Gardens, Lake Ontario waterfront.</p>

          <h2>BuzzSkito Burlington Service Pages</h2>
          <ul>
            <li><Link href="/burlington-mosquito-spray" className="text-brand-700 hover:underline font-semibold">Burlington Mosquito Control</Link> — full service page with pricing, neighborhoods, FAQ</li>
            <li><Link href="/burlington-tick-spray" className="text-brand-700 hover:underline font-semibold">Burlington Tick Control</Link> — Lyme disease prevention barrier spray</li>
            <li><Link href="/pest-control-burlington" className="text-brand-700 hover:underline">Pest Control Burlington</Link> — overview of mosquito + tick specialist services</li>
          </ul>

          <h2>Related Burlington Comparisons</h2>
          <ul>
            <li><Link href="/buzzskito-vs-mosquitoman" className="text-brand-700 hover:underline">BuzzSkito vs Mosquito Man</Link></li>
            <li><Link href="/buzzskito-vs-mosquito-buzz" className="text-brand-700 hover:underline">BuzzSkito vs Mosquito.Buzz</Link></li>
            <li><Link href="/buzzskito-vs-lawnsavers" className="text-brand-700 hover:underline">BuzzSkito vs LawnSavers</Link></li>
            <li><Link href="/best-mosquito-control-companies-gta" className="text-brand-700 hover:underline">Best Mosquito Control Companies in the GTA — Master Comparison</Link></li>
          </ul>
        </div>
      </section>

      <section className="py-12 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Best Mosquito Control Burlington — FAQ</h2>
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

      <CTASection heading={`Get a Free Mosquito Quote in Burlington`} subtext={`Specialist barrier spray for Burlington backyards. Same-week service.`} />
    </>
  )
}
