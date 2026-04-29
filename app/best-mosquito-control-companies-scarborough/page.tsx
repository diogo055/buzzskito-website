import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: `Best Mosquito Control Scarborough 2026`,
  description: `Compare top mosquito control companies serving Scarborough 2026 — Guildwood, Highland Creek, Rouge, Malvern. Pricing, reviews, contracts. BuzzSkito vs Mosquito Man vs LawnSavers.`,
  canonical: '/best-mosquito-control-companies-scarborough',
})

const FAQS = [
  {
    question: `Who is the best mosquito control company in Scarborough?`,
    answer: 'BuzzSkito is the GTA-based mosquito and tick specialist with the lowest entry price ($99 single treatment), 129 perfect five-star Google reviews (zero negatives), and the BuzzSkito Bite-Free Guarantee — free re-treatment if pests return. Mosquito Man has higher review volume across all of Ontario but operates as a general pest control company covering 10+ pest types. LawnSavers serves Scarborough as part of their broader lawn-care offering. The right choice depends on whether you prioritize specialist depth, lowest price, or bundled services.',
  },
  {
    question: `How much does mosquito control cost in Scarborough?`,
    answer: `Single treatments in Scarborough range from $99 (BuzzSkito) to $129+ (LawnSavers and others) per visit. Seasonal programs vary by company and are typically custom-quoted by property size. Properties in Rouge and Malvern (park boundary), Highland Creek and Guildwood (creek-adjacent), Cliffside (bluff microclimate) typically price at the upper end of any company's range due to higher mosquito pressure and more vegetation to treat. BuzzSkito's transparent $99 single-treatment pricing allows Scarborough homeowners to test the service before committing to a full season.`,
  },
  {
    question: `Which Scarborough neighbourhoods have the worst mosquito pressure?`,
    answer: `The highest mosquito pressure in Scarborough is concentrated in Rouge and Malvern (park boundary), Highland Creek and Guildwood (creek-adjacent), Cliffside (bluff microclimate). These zones face direct exposure to Rouge National Urban Park, Highland Creek valley, Lake Ontario bluffs and benefit most from a full 4–5 treatment seasonal program. Lower-exposure neighbourhoods can typically maintain comfort with 3–4 treatments per season.`,
  },
  {
    question: `Do Scarborough mosquito control companies offer no-contract service?`,
    answer: `BuzzSkito is the primary no-contract option in Scarborough — book a single $99 treatment with no commitment, no cancellation fees, and decide based on results. Most other Scarborough providers require seasonal contracts ranging from $400-$2,000+. Always confirm contract terms before booking — some contracts include automatic renewal clauses.`,
  },
  {
    question: `Can I bundle tick control with mosquito spray in Scarborough?`,
    answer: `Yes. Properties in Rouge and Malvern (park boundary), Highland Creek and Guildwood (creek-adjacent), Cliffside (bluff microclimate) face confirmed blacklegged tick (Lyme-disease vector) exposure per Public Health Ontario. Many Scarborough homeowners bundle mosquito and tick treatments for complete yard protection. BuzzSkito offers tick add-on bundle pricing on quote when added to any mosquito plan, saving over standalone tick pricing. Lyme prevention plus mosquito comfort = full yard protection through the May–September season.`,
  },
  {
    question: `What should I look for in a Scarborough mosquito control company?`,
    answer: `Five things matter most: (1) Health Canada-approved formulation — non-negotiable; (2) Ontario-licensed pesticide applicator on the technician — required by law; (3) free re-spray or bite-free guarantee — protects you if rain disrupts the cure; (4) transparent pricing published on the website — avoid companies that require an "in-home estimate" before quoting; (5) verified Google reviews from Scarborough customers specifically — local pressure is unique. BuzzSkito meets all five.`,
  },
]

export default function BestMosquitoControlScarboroughPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mosquito Control', url: '/mosquito-control' }, { name: `Best Companies Scarborough`, url: '/best-mosquito-control-companies-scarborough' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/best-mosquito-control-companies-scarborough')) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/mosquito-control" className="hover:text-white">Mosquito Control</Link><span>/</span>
            <span className="text-white">Best Companies Scarborough</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">Best Mosquito Control Companies in Scarborough — 2026</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">
            Honest 2026 comparison of mosquito control providers serving Scarborough — Guildwood, Highland Creek, Rouge, Malvern, Agincourt, Birchcliffe, Cliffside, Woburn. Pricing, reviews, contracts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/free-yard-assessment" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Get a Free Scarborough Quote</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="bg-brand-900 text-white py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-200">
          <span>✓ Scarborough-Specific Pricing</span>
          <span>✓ Updated Apr 2026</span>
          <span>✓ Verified Reviews</span>
          <span>✓ No Affiliate Links</span>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <section className="bg-amber-50 border-y-4 border-amber-300 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-amber-700 uppercase tracking-wider mb-2">Quick Answer</p>
          <h2 className="text-xl font-extrabold text-brand-900 mb-3">Who has the best mosquito control in Scarborough in 2026?</h2>
          <p className="text-base text-gray-800 leading-relaxed">
            <strong>For Scarborough homeowners, BuzzSkito wins on price ($99 single treatment, lowest in market), reviews (129/5.0, zero negative), and specialty (mosquitoes + ticks only — not a generalist).</strong> Mosquito Man wins on review volume across all of Ontario but is a general pest control company. LawnSavers is best if you're already using their lawn-care service. The full comparison below covers pricing, contract terms, Scarborough service-area specifics (Rouge National Urban Park, Highland Creek valley, Lake Ontario bluffs), and the deciding factors for each Scarborough neighborhood. Updated April 2026.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>Scarborough Mosquito Control Companies — Compared</h2>
          <p>Scarborough homeowners have several professional mosquito control options. Here&rsquo;s an honest comparison based on publicly available pricing, Google reviews, and Scarborough-specific service offerings as of April 2026.</p>

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

          <h2>Why Scarborough is a High-Pressure Mosquito Zone</h2>
          <p>Scarborough&rsquo;s mosquito pressure comes from Rouge National Urban Park, Highland Creek valley, Lake Ontario bluffs. Properties in Rouge and Malvern (park boundary), Highland Creek and Guildwood (creek-adjacent), Cliffside (bluff microclimate) face the most intense activity — barrier spray on these properties is significantly more impactful than general pest control because the treatment targets the exact resting habitats mosquitoes use during the day.</p>

          <h2>How to Choose a Mosquito Control Company in Scarborough</h2>
          <ol>
            <li><strong>Check the formulation.</strong> Only Health Canada-approved barrier sprays are legal in Ontario. Ask before booking.</li>
            <li><strong>Verify the applicator&rsquo;s license.</strong> Ontario requires a Pesticide Applicator&rsquo;s License for any commercial application.</li>
            <li><strong>Confirm the guarantee.</strong> If rain hits within 1 hour of spray, the product hasn&rsquo;t cured — a reputable company will re-treat at no charge. Anyone who won&rsquo;t put this in writing is suspect.</li>
            <li><strong>Read recent Scarborough-specific Google reviews.</strong> National franchises sometimes have great Toronto reviews and terrible Scarborough reviews. Filter for your city.</li>
            <li><strong>Ask about Scarborough expertise.</strong> A technician who can describe Rouge National Urban Park, Highland Creek valley, Lake Ontario bluffs and what mosquito species are dominant in your area knows what they&rsquo;re doing.</li>
            <li><strong>Compare single-treatment pricing</strong>, not just seasonal package totals. Single-treatment pricing reveals real per-visit value.</li>
            <li><strong>Ask about tick add-on.</strong> Scarborough has confirmed blacklegged tick populations. Bundling protects against Lyme disease.</li>
          </ol>

          <h2>Scarborough-Specific Mosquito Pressure Zones</h2>
          <p>The most mosquito-affected Scarborough neighborhoods include Guildwood, Highland Creek, Rouge, Malvern, Agincourt, Birchcliffe, Cliffside, Woburn. Among these, Rouge and Malvern (park boundary), Highland Creek and Guildwood (creek-adjacent), Cliffside (bluff microclimate) typically experience the highest pressure due to direct adjacency to Rouge National Urban Park, Highland Creek valley, Lake Ontario bluffs.</p>

          <h2>BuzzSkito Scarborough Service Pages</h2>
          <ul>
            <li><Link href="/scarborough-mosquito-control" className="text-brand-700 hover:underline font-semibold">Scarborough Mosquito Control</Link> — full service page with pricing, neighborhoods, FAQ</li>
            <li><Link href="/scarborough-tick-spray" className="text-brand-700 hover:underline font-semibold">Scarborough Tick Control</Link> — Lyme disease prevention barrier spray</li>
            <li><Link href="/pest-control-scarborough" className="text-brand-700 hover:underline">Pest Control Scarborough</Link> — overview of mosquito + tick specialist services</li>
          </ul>

          <h2>Related Scarborough Comparisons</h2>
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
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Best Mosquito Control Scarborough — FAQ</h2>
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

      <CTASection heading={`Get a Free Mosquito Quote in Scarborough`} subtext={`Specialist barrier spray for Scarborough backyards. Same-week service.`} />
    </>
  )
}
