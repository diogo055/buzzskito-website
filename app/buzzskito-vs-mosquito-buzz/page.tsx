import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import CityHero from '@/components/CityHero'
import TypicalPrices from '@/components/TypicalPrices'
import CityPriceCard from '@/components/CityPriceCard'
import { buildMetadata, breadcrumbSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS, PROMISES } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'BuzzSkito vs National Mosquito Franchises',
  description:
    'Compare BuzzSkito and national franchise mosquito companies for GTA mosquito control. Local owner-operated vs national franchise — pricing, contracts, reviews, accountability.',
  canonical: '/buzzskito-vs-mosquito-buzz',
})

const FAQS = [
  {
    question: 'Is BuzzSkito part of a national franchise?',
    answer: 'No. BuzzSkito is a Mississauga-based, owner-operated GTA company. It is not a franchise and is not affiliated with any franchise brand, including ones with similar-sounding names.',
  },
  {
    question: 'Is BuzzSkito cheaper than a mosquito franchise?',
    answer: 'BuzzSkito publishes all pricing publicly: single treatments from $99 on a standard lot, and season plans of $549 (5 sprays), $994 (10 sprays) or $2,049 (20+ sprays), plus HST. Many franchises quote only after a call or visit, and pricing can vary by franchise location. Ask for the per-spray price and the number of sprays in the season so you can compare like for like.',
  },
  {
    question: 'Do mosquito franchises have local technicians?',
    answer: 'A franchise is run locally by a franchisee, so quality and consistency depend on which franchisee operates in your specific area. Some franchisees are excellent; others are less attentive. BuzzSkito is a single owner-operated company with one technician team and direct accountability — Alex Francisco still rides along on jobs to maintain quality.',
  },
  {
    question: 'How should I compare reviews between a franchise and BuzzSkito?',
    answer: 'Franchise reviews vary by location, so read the reviews for the franchisee that would serve your address, not the national brand. BuzzSkito has 150+ Google reviews with a 5.0 average and zero negative reviews, all from a single team.',
  },
  {
    question: 'Do mosquito franchises offer no-contract service?',
    answer: 'Many franchise locations sell seasonal programs, so confirm the terms before you book. BuzzSkito offers true no-contract service: book a single $99 treatment with no commitment, no cancellation fees, and decide whether to continue based on results.',
  },
  {
    question: 'Do franchises and BuzzSkito both serve the GTA?',
    answer: 'BuzzSkito covers 19 GTA cities + 30+ neighbourhoods directly with a single team. Franchise coverage in the GTA depends on which franchisees are operating in your specific area at any given time. For continuity and direct accountability, a single local team is the simpler choice.',
  },
]

export default function BuzzSkitoVsMosquitoBuzzPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'BuzzSkito vs National Mosquito Franchises', url: '/buzzskito-vs-mosquito-buzz' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/buzzskito-vs-mosquito-buzz', '2026-07-01')) }} />

      <CityHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'BuzzSkito vs National Mosquito Franchises' },
        ]}
        title={<>BuzzSkito vs National Mosquito Franchises</>}
        subtitle={<>Local owner-operated vs national franchise. Honest 2026 comparison for GTA homeowners.</>}
        image="/spray-pool.webp"
        imageAlt="BuzzSkito technician applying barrier spray beside a backyard pool"
      />

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose-brand">
          <h2>What to Ask Any Mosquito Control Company</h2>
          <p>Ask every company you call the same five questions and compare the answers side by side.</p>
          <div className="not-prose overflow-x-auto my-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-800 text-white">
                  <th className="px-4 py-2 text-left">Question to ask</th>
                  <th className="px-4 py-2 text-left">BuzzSkito&apos;s answer</th>
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
                    <td className="px-4 py-2 font-semibold text-brand-800">{q}</td>
                    <td className="px-4 py-2 text-gray-700">{a}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>The Owner-Operator vs Franchise Question</h2>
          <p>This is the central choice between BuzzSkito and a national franchise. They differ on more than just pricing.</p>
          <p><strong>BuzzSkito</strong> is one company, one owner (Alex Francisco), one team. When you book BuzzSkito, you know exactly who is treating your yard, exactly what products are being used, and exactly who to call if something is wrong. The downside: smaller geographic reach (GTA core only).</p>
          <p><strong>A national franchise</strong> is a brand operated through local franchisees. The brand sets standards, but the actual service experience depends entirely on which franchisee operates in your area. Some are excellent; others are not. The brand name is consistent — the service quality is not.</p>

          <h2>Where BuzzSkito Wins</h2>
          <ul>
            <li><strong>Pricing transparency.</strong> $99 single treatment, all packages published. No "schedule a free consultation to find out the price" gatekeeping.</li>
            <li><strong>Direct accountability.</strong> Alex Francisco answers the phone. No "I&rsquo;ll have your franchisee call you back" runarounds.</li>
            <li><strong>No contracts.</strong> Test with one treatment, decide whether to continue.</li>
            <li><strong>Perfect review record.</strong> 150+ reviews, all five stars, single team — no franchise variance.</li>
            <li><strong>Bundled tick savings.</strong> $100 off when adding tick to a mosquito plan.</li>
          </ul>

          <h2>Where a National Franchise Wins</h2>
          <ul>
            <li><strong>National coverage.</strong> If you also need service in other Canadian cities (e.g. you have multiple properties), a franchise may operate across multiple provinces.</li>
            <li><strong>Brand recognition.</strong> Larger marketing footprint may make some homeowners more comfortable with a known brand.</li>
            <li><strong>Some franchises are excellent.</strong> If your local franchisee has strong reviews and good word-of-mouth, that&rsquo;s a valid choice.</li>
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

          <h2>Who Should Choose a National Franchise</h2>
          <p>Choose a national franchise if you:</p>
          <ul>
            <li>Live outside the GTA in a city a franchise serves but BuzzSkito doesn&rsquo;t</li>
            <li>Have multiple properties across Canada and want one provider</li>
            <li>Have done specific research on your local franchisee and confirmed strong reviews</li>
          </ul>

          <h2>Try BuzzSkito Without Committing</h2>
          <p>One $99 treatment. No contract. See for yourself why our 150+ Google reviews average 5.0. Call <a href={BUSINESS.phoneHref} className="text-brand-700 hover:underline">{BUSINESS.phone}</a> or <Link href="/free-yard-assessment" className="text-brand-700 hover:underline">get a quick quote</Link>.</p>

          <h2>Related Comparisons</h2>
          <ul>
            <li><Link href="/buzzskito-vs-mosquitoman" className="text-brand-700 hover:underline">Local company vs multi-region company</Link></li>
            <li><Link href="/buzzskito-vs-lawnsavers" className="text-brand-700 hover:underline">Specialist vs lawn-care add-on</Link></li>
            <li><Link href="/best-mosquito-control-companies-gta" className="text-brand-700 hover:underline">Full GTA Comparison</Link></li>
          </ul>
        </div>
      </section>

      <TypicalPrices service="mosquito" city="GTA" />

      <div className="max-w-4xl mx-auto px-4">
        <CityPriceCard city="GTA" service="mosquito" />
      </div>

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">FAQ — BuzzSkito vs National Mosquito Franchises</h2>
          <div className="space-y-3">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-white rounded-xl border border-brand-100 group open:shadow-md transition-shadow">
                <summary className="cursor-pointer px-5 py-4 font-semibold text-brand-900 list-none flex justify-between items-center rounded-xl hover:bg-brand-100/60 transition-colors">
                  <span>{question}</span>
                  <svg className="w-5 h-5 shrink-0 text-brand-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="px-5 pb-4 text-gray-600 text-sm">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Local. Transparent. No Franchise Variance." subtext="One owner. One team. 150+ five-star reviews. Try us with a single $99 treatment." variant="dark" />
    </>
  )
}
