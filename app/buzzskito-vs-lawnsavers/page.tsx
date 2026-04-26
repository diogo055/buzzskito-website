import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'BuzzSkito vs LawnSavers · 2026 GTA Comparison',
  description:
    'Compare BuzzSkito and LawnSavers for GTA mosquito and tick control. Specialist vs lawn-care add-on — pricing, focus, contracts, what each does best.',
  canonical: '/buzzskito-vs-lawnsavers',
})

const FAQS = [
  {
    question: 'Is BuzzSkito or LawnSavers better for mosquito control?',
    answer: 'BuzzSkito is mosquito and tick control as its primary business — it\'s what we do all day. LawnSavers is primarily a lawn care company that also offers mosquito control as an add-on service for existing lawn customers. For specialized mosquito knowledge, technique, and pricing flexibility, BuzzSkito has the edge. For homeowners who already use LawnSavers for lawn care and want a one-stop convenience, LawnSavers can make sense.',
  },
  {
    question: 'Is BuzzSkito cheaper than LawnSavers?',
    answer: 'Yes at the entry level. BuzzSkito single treatments start at $99; LawnSavers single treatments start at $129. For full-season programs, BuzzSkito\'s Standard Plan ($994 for 10 sprays bi-weekly) provides more frequent coverage than LawnSavers\' typical seasonal mosquito add-on. If you\'re already paying LawnSavers for lawn care, the bundled mosquito price may be slightly more competitive — but the standalone comparison favours BuzzSkito.',
  },
  {
    question: 'Does LawnSavers do tick control too?',
    answer: 'LawnSavers has limited tick offerings — typically as an add-on to lawn care or mosquito programs. BuzzSkito offers a dedicated 5-spray-per-season tick program ($597 standalone, $497 bundled with mosquito) targeting tick-specific habitats: leaf litter, lawn-to-woods edges, fence-line vegetation. For Lyme prevention in GTA tick zones, BuzzSkito\'s specialist focus is the better choice.',
  },
  {
    question: 'Should I bundle lawn care and mosquito control with one company?',
    answer: 'Bundling is convenient but not always cheaper or higher-quality. LawnSavers excels at lawn care — they rank for "creeping charlie", "snow mold", "lawn fertilizer schedule" because that\'s their specialty. BuzzSkito excels at mosquito and tick control. Many homeowners get the best results by using a lawn-care specialist for lawns and a mosquito specialist for bugs — each company focuses on what they do best.',
  },
  {
    question: 'Which company has more reviews?',
    answer: 'LawnSavers has 500+ Google reviews accumulated across all their services (lawn care + mosquito + irrigation). BuzzSkito has 126 reviews — all for mosquito and tick control specifically, with a perfect 5.0 rating. LawnSavers wins on review volume; BuzzSkito wins on rating and specialty-specific feedback.',
  },
  {
    question: 'Do both companies use Health Canada–approved products?',
    answer: 'Yes. Both use Health Canada-registered formulations applied by licensed Ontario pesticide applicators. The product chemistry is similar; the differentiation is technique, application frequency, and target habitats. BuzzSkito\'s specialist focus means we apply to mosquito-specific resting zones (leaf undersides, dense shrubs, fence-line vegetation). General-purpose lawn care add-on services may not target with the same depth.',
  },
]

export default function BuzzSkitoVsLawnSaversPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'BuzzSkito vs LawnSavers', url: '/buzzskito-vs-lawnsavers' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/buzzskito-vs-lawnsavers')) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <span className="text-white">BuzzSkito vs LawnSavers</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">BuzzSkito vs LawnSavers</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">Specialist vs lawn-care add-on. Honest 2026 comparison for GTA homeowners deciding where to get their mosquito and tick control.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/free-yard-assessment" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors text-center">Try BuzzSkito Risk-Free</Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-900 font-bold px-8 py-4 rounded-full text-lg transition-colors">{BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>The Quick Comparison</h2>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-800 text-white">
                  <th className="px-4 py-3 text-left">Factor</th>
                  <th className="px-4 py-3 text-left">BuzzSkito</th>
                  <th className="px-4 py-3 text-left">LawnSavers</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Primary business', 'Mosquito + Tick Control', 'Lawn Care (mosquito as add-on)'],
                  ['Single treatment', 'From $99', 'From $129'],
                  ['Standard mosquito season', '$994 (10 sprays bi-weekly)', 'Bundle pricing varies'],
                  ['Tick control', '$597 standalone / $497 bundled', 'Limited add-on'],
                  ['Google reviews', '126 (perfect 5.0★, mosquito-specific)', '500+ (across all services)'],
                  ['Contracts required', 'No', 'Typically seasonal'],
                  ['Focus depth', 'Mosquito + tick specialist', 'Lawn care specialist'],
                  ['Best for', 'Specialized bug control', 'Existing lawn customers'],
                  ['Bundle savings', 'Mosquito + tick combo', 'Lawn + mosquito combo'],
                ].map(([factor, a, b], i) => (
                  <tr key={i} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-brand-800">{factor}</td>
                    <td className="px-4 py-3 text-brand-700 font-bold">{a}</td>
                    <td className="px-4 py-3 text-gray-600">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>The Specialist vs Generalist Question</h2>
          <p>This is the central trade-off. LawnSavers is one of the GTA&rsquo;s strongest lawn care brands — they rank top-3 organically for &ldquo;lawn care toronto&rdquo;, &ldquo;weed control near me&rdquo;, &ldquo;creeping charlie&rdquo;, &ldquo;snow mold&rdquo;. They earn that ranking because lawn care is their specialty. Their mosquito control offering exists, but it&rsquo;s an add-on category for them, not the primary business.</p>
          <p>BuzzSkito is the inverse. Mosquito and tick control is what we do, all day, every day, May through September. That focus shows up in technique (we apply to leaf undersides and shrub interiors where mosquitoes rest, not just to lawn surfaces), frequency (bi-weekly Standard Plan vs typical monthly add-on), and tick-specific knowledge (5-spray season targeting nymphs, adults, and habitat zones).</p>

          <h2>Where BuzzSkito Wins</h2>
          <ul>
            <li><strong>Specialist focus.</strong> Mosquito + tick is our primary business — not a side service.</li>
            <li><strong>Lower entry price.</strong> $99 single vs $129+ at LawnSavers.</li>
            <li><strong>Tick coverage.</strong> Dedicated 5-spray season program ($597 / $497 bundled), targeted at Lyme-zone GTA properties.</li>
            <li><strong>No contracts.</strong> Test with one treatment.</li>
            <li><strong>Bundled mosquito + tick savings.</strong> $100 off when adding tick to a mosquito plan.</li>
          </ul>

          <h2>Where LawnSavers Wins</h2>
          <ul>
            <li><strong>Lawn care.</strong> If you also need fertilization, weed control, aeration — LawnSavers is genuinely excellent at this.</li>
            <li><strong>One-vendor convenience.</strong> If you already use LawnSavers for lawn care and want a single quarterly bill, adding mosquito is convenient.</li>
            <li><strong>Established reputation.</strong> Long history in GTA lawn care.</li>
            <li><strong>Broader service catalogue.</strong> Lawn rolling, sprinkler systems, lawn disease treatment, etc.</li>
          </ul>

          <h2>The Best Setup for Most GTA Homeowners</h2>
          <p>If you&rsquo;re trying to optimize for both lawn quality and bug-free yards, the strongest setup we&rsquo;ve seen is:</p>
          <ul>
            <li><strong>Lawn care</strong> — LawnSavers (or another lawn specialist) for fertilization, weed control, and lawn health</li>
            <li><strong>Mosquito + tick control</strong> — BuzzSkito for specialized bug control with deep targeting</li>
          </ul>
          <p>Each company does what they do best. The all-in-one bundle approach often delivers a compromise on both fronts.</p>

          <h2>Who Should Choose BuzzSkito Specifically</h2>
          <p>Choose BuzzSkito if you:</p>
          <ul>
            <li>Want specialist-grade mosquito and tick control</li>
            <li>Need dedicated tick coverage (Lyme-zone properties, families with kids/pets, ravine-adjacent yards)</li>
            <li>Don&rsquo;t need lawn care services (or have a separate lawn provider)</li>
            <li>Want transparent published pricing and no-contract flexibility</li>
            <li>Want to test with a single $99 treatment before committing</li>
          </ul>

          <h2>Who Should Choose LawnSavers</h2>
          <p>Choose LawnSavers if you:</p>
          <ul>
            <li>Already use LawnSavers for lawn care and want a single-vendor bundle</li>
            <li>Have low mosquito and tick pressure (suburban interior lots without ravine/creek proximity)</li>
            <li>Prioritize lawn quality over specialist bug control</li>
            <li>Want one quarterly bill instead of two specialist providers</li>
          </ul>

          <h2>Try BuzzSkito for Your Bug Control</h2>
          <p>You don&rsquo;t have to choose between lawn quality and bug-free outdoor time. Use a specialist for each. BuzzSkito&rsquo;s no-contract single $99 treatment lets you try us without disrupting your existing lawn arrangement. Call <a href={BUSINESS.phoneHref} className="text-brand-700 hover:underline">{BUSINESS.phone}</a> or <Link href="/free-yard-assessment" className="text-brand-700 hover:underline">get a quote</Link>.</p>

          <h2>Related Comparisons</h2>
          <ul>
            <li><Link href="/buzzskito-vs-mosquitoman" className="text-brand-700 hover:underline">BuzzSkito vs Mosquito Man</Link></li>
            <li><Link href="/buzzskito-vs-mosquito-buzz" className="text-brand-700 hover:underline">BuzzSkito vs Mosquito.Buzz</Link></li>
            <li><Link href="/best-mosquito-control-companies-gta" className="text-brand-700 hover:underline">Full GTA Comparison</Link></li>
          </ul>
        </div>
      </section>

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">FAQ — BuzzSkito vs LawnSavers</h2>
          <div className="space-y-3">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-white rounded-xl border border-brand-100 group">
                <summary className="cursor-pointer px-5 py-4 font-semibold text-brand-900 list-none flex justify-between items-center">
                  <span>{question}</span>
                  <svg className="w-5 h-5 shrink-0 text-brand-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="px-5 pb-4 text-gray-600 text-sm">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Specialist Bug Control · From $99" subtext="Mosquito and tick control is what we do. Try a single treatment without a contract." variant="dark" />
    </>
  )
}
