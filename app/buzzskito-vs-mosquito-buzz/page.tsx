import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'BuzzSkito vs Mosquito.Buzz · 2026 GTA Comparison',
  description:
    'Compare BuzzSkito and Mosquito.Buzz for GTA mosquito control. Local owner-operated vs national franchise — pricing, contracts, reviews, accountability.',
  canonical: '/buzzskito-vs-mosquito-buzz',
})

const FAQS = [
  {
    question: 'Is Mosquito.Buzz the same company as BuzzSkito?',
    answer: 'No. They are separate, unrelated companies. Mosquito.Buzz (often spelled "Mosquito Buzz") is a national Canadian franchise with locations across multiple provinces. BuzzSkito is a Mississauga-based, owner-operated GTA company founded in 2024. The names are similar but the businesses are distinct.',
  },
  {
    question: 'Is BuzzSkito cheaper than Mosquito.Buzz?',
    answer: 'BuzzSkito publishes all pricing publicly: single treatments from $99, seasonal packages from $549. Mosquito.Buzz operates on a quote-only model — pricing is not published online and varies by franchise location. Customer reports place Mosquito.Buzz seasonal pricing in the $400–$800 range depending on lot size and franchise. BuzzSkito\'s transparent pricing and $99 single-treatment option give it a clear advantage at the entry level.',
  },
  {
    question: 'Does Mosquito.Buzz have local technicians?',
    answer: 'Mosquito.Buzz operates as a franchise — quality and consistency depend on which franchisee operates in your specific area. Some Mosquito.Buzz franchises are excellent; others are less attentive. BuzzSkito is a single owner-operated company with one technician team and direct accountability — Alex Francisco still rides along on jobs to maintain quality.',
  },
  {
    question: 'Which has better reviews?',
    answer: 'Reviews vary wildly by Mosquito.Buzz franchise location. Some Ontario franchise locations have strong review records (4.5+ stars across hundreds of reviews); others have notably lower ratings or fewer reviews. BuzzSkito has 129 Google reviews — every one is five stars (perfect 5.0 rating, zero negative reviews). For consistency, BuzzSkito wins.',
  },
  {
    question: 'Does Mosquito.Buzz offer no-contract service?',
    answer: 'Mosquito.Buzz typically operates on seasonal program contracts at most franchise locations. BuzzSkito offers true no-contract service: book a single $99 treatment with no commitment, no cancellation fees, and decide whether to continue based on results.',
  },
  {
    question: 'Do they both serve the GTA?',
    answer: 'Yes, both serve major GTA cities. BuzzSkito has 19 GTA cities + 30+ neighbourhoods directly covered with a single team. Mosquito.Buzz coverage in the GTA depends on which franchisees are operating in your specific area at any given time. For continuity and direct accountability, BuzzSkito is the simpler choice.',
  },
]

export default function BuzzSkitoVsMosquitoBuzzPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'BuzzSkito vs Mosquito.Buzz', url: '/buzzskito-vs-mosquito-buzz' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/buzzskito-vs-mosquito-buzz')) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <span className="text-white">BuzzSkito vs Mosquito.Buzz</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">BuzzSkito vs Mosquito.Buzz</h1>
          <p className="text-xl text-brand-100 max-w-2xl mb-8">Local owner-operated vs national franchise. Honest 2026 comparison for GTA homeowners.</p>
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
                  <th className="px-4 py-3 text-left">Mosquito.Buzz</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Business model', 'Owner-operated, single team', 'National franchise (varies by location)'],
                  ['Single treatment', 'From $99', 'Quote-based (not published)'],
                  ['Standard season', '$994 (10 sprays bi-weekly)', 'Quote-based ($400-$800 reported)'],
                  ['Tick control', '$597 standalone / $497 bundled', 'Varies by franchise'],
                  ['Google reviews', '126 (perfect 5.0★)', 'Varies by franchise location'],
                  ['Contracts required', 'No', 'Typically seasonal'],
                  ['Pricing transparency', 'All published online', 'Quote-only model'],
                  ['Service area', '19 GTA cities + 30 neighbourhoods', 'Franchise-dependent'],
                  ['Local accountability', 'Alex Francisco directly', 'Depends on franchisee'],
                  ['Operating since', '2024 (GTA-focused)', 'Multi-year national'],
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

          <h2>The Owner-Operator vs Franchise Question</h2>
          <p>This is the central choice between BuzzSkito and Mosquito.Buzz. They differ on more than just pricing.</p>
          <p><strong>BuzzSkito</strong> is one company, one owner (Alex Francisco), one team. When you book BuzzSkito, you know exactly who is treating your yard, exactly what products are being used, and exactly who to call if something is wrong. The downside: smaller geographic reach (GTA core only).</p>
          <p><strong>Mosquito.Buzz</strong> is a national brand operated through local franchisees. The brand sets standards, but the actual service experience depends entirely on which franchisee operates in your area. Some are excellent; others are not. The brand name is consistent — the service quality is not.</p>

          <h2>Where BuzzSkito Wins</h2>
          <ul>
            <li><strong>Pricing transparency.</strong> $99 single treatment, all packages published. No "schedule a free consultation to find out the price" gatekeeping.</li>
            <li><strong>Direct accountability.</strong> Alex Francisco answers the phone. No "I&rsquo;ll have your franchisee call you back" runarounds.</li>
            <li><strong>No contracts.</strong> Test with one treatment, decide whether to continue.</li>
            <li><strong>Perfect review record.</strong> 129 reviews, all five stars, single team — no franchise variance.</li>
            <li><strong>Bundled tick savings.</strong> $100 off when adding tick to a mosquito plan.</li>
          </ul>

          <h2>Where Mosquito.Buzz Wins</h2>
          <ul>
            <li><strong>National coverage.</strong> If you also need service in other Canadian cities (e.g. you have multiple properties), Mosquito.Buzz franchises operate across multiple provinces.</li>
            <li><strong>Brand recognition.</strong> Larger marketing footprint may make some homeowners feel safer with a known brand.</li>
            <li><strong>Some franchises are excellent.</strong> If your local Mosquito.Buzz franchisee has strong reviews and good word-of-mouth, that&rsquo;s a valid choice.</li>
          </ul>

          <h2>Who Should Choose BuzzSkito</h2>
          <p>Choose BuzzSkito if you:</p>
          <ul>
            <li>Live in any of our <Link href="/service-areas" className="text-brand-700 hover:underline">19 GTA cities</Link></li>
            <li>Want transparent published pricing</li>
            <li>Don&rsquo;t want to sign a contract</li>
            <li>Value direct accountability with a single owner-operator</li>
            <li>Don&rsquo;t need service outside the GTA core</li>
          </ul>

          <h2>Who Should Choose Mosquito.Buzz</h2>
          <p>Choose Mosquito.Buzz if you:</p>
          <ul>
            <li>Live outside the GTA in a city where they operate but BuzzSkito doesn&rsquo;t</li>
            <li>Have multiple properties across Canada and want one provider</li>
            <li>Have done specific research on your local Mosquito.Buzz franchise and confirmed strong reviews</li>
          </ul>

          <h2>Try BuzzSkito Without Committing</h2>
          <p>One $99 treatment. No contract. See for yourself why our 126 customers all rated us 5 stars. Call <a href={BUSINESS.phoneHref} className="text-brand-700 hover:underline">{BUSINESS.phone}</a> or <Link href="/free-yard-assessment" className="text-brand-700 hover:underline">get a quick quote</Link>.</p>

          <h2>Related Comparisons</h2>
          <ul>
            <li><Link href="/buzzskito-vs-mosquitoman" className="text-brand-700 hover:underline">BuzzSkito vs Mosquito Man</Link></li>
            <li><Link href="/buzzskito-vs-lawnsavers" className="text-brand-700 hover:underline">BuzzSkito vs LawnSavers</Link></li>
            <li><Link href="/best-mosquito-control-companies-gta" className="text-brand-700 hover:underline">Full GTA Comparison</Link></li>
          </ul>
        </div>
      </section>

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">FAQ — BuzzSkito vs Mosquito.Buzz</h2>
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

      <CTASection heading="Local. Transparent. No Franchise Variance." subtext="One owner. One team. 129 five-star reviews. Try us with a single $99 treatment." variant="dark" />
    </>
  )
}
