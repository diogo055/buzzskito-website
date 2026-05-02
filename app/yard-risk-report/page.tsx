import type { Metadata } from 'next'
import YardRiskQuiz from '@/components/YardRiskQuiz'
import { buildMetadata, breadcrumbSchema, faqSchema, speakableSchema } from '@/lib/seo'

const SLUG = '/yard-risk-report'

const FAQS = [
  {
    question: 'What is the BuzzSkito Yard Risk Report?',
    answer: 'A free 60-second assessment that calculates your property&rsquo;s mosquito and tick pressure score (1-100) using your address, neighbourhood data, ravine and water-source proximity, lot size, and family situation. You receive an instant on-page score plus a detailed custom report emailed to you within 60 seconds.',
  },
  {
    question: 'How does BuzzSkito calculate my yard risk score?',
    answer: 'The scoring algorithm weighs four factors: (1) geographic pressure based on your specific neighbourhood and proximity to known breeding sources like the Credit River, Don Valley ravines, Niagara Escarpment, or conservation areas; (2) yard features you select (ravine-adjacent, creek-adjacent, pond, wooded lot, etc.); (3) lot size; and (4) family stake (kids, pets, elderly). Each factor adjusts your base score on a 1-100 scale.',
  },
  {
    question: 'Is the Yard Risk Report really free?',
    answer: 'Yes — completely free, no credit card, no obligation. We invest in this tool because it helps homeowners understand their actual risk profile and make informed decisions about mosquito and tick protection. Even if you decide not to hire BuzzSkito, the report includes useful DIY recommendations and a peak-weeks calendar specific to your area.',
  },
  {
    question: 'What service area does BuzzSkito cover?',
    answer: 'BuzzSkito services 19 cities across the Greater Toronto Area: Mississauga, Toronto, Brampton, Oakville, Burlington, Hamilton, Vaughan, Richmond Hill, Markham, Etobicoke, Scarborough, North York, Caledon, Milton, Georgetown, Halton Hills, King City, Woodbridge, and Thornhill — plus 30+ neighbourhoods within these cities. Addresses outside the GTA still receive a general report by email but are not eligible for service.',
  },
  {
    question: 'How accurate is the score?',
    answer: 'The score reflects real geographic and environmental factors validated against Public Health Ontario tick surveillance data, GTA neighbourhood pressure observations, and 129 customer outcomes across the 19 cities BuzzSkito serves. It&rsquo;s designed as a relative pressure indicator (your yard vs. similar yards), not an absolute predictor of bite count. Most properties scoring 70+ benefit significantly from professional barrier spray.',
  },
  {
    question: 'What happens after I submit my email?',
    answer: 'Three things happen instantly: (1) your custom report is emailed to you within 60 seconds; (2) if you opted in for a callback, Alex (BuzzSkito&rsquo;s owner) calls you within 30 minutes to walk through your specific recommendations; (3) your report is saved so you can reference it later. We never sell your information and we never auto-charge anything.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: 'Free GTA Yard Risk Report — Mosquito & Tick Pressure Score (60 Seconds)',
  description: 'Enter your GTA address and get an instant custom mosquito and tick risk score (1-100) for your yard. Free 60-second assessment with personalized treatment plan. 129 five-star reviews.',
  canonical: SLUG,
})

export default function YardRiskReportPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Free Yard Risk Report', url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(SLUG)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-extrabold text-amber-400 uppercase tracking-widest mb-2">Free · 60 Seconds · No Obligation</p>
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight">
            What&rsquo;s your yard&rsquo;s <span className="text-amber-400">mosquito &amp; tick risk score</span>?
          </h1>
          <p className="text-lg text-brand-100 max-w-2xl mx-auto">Personalized to your address, neighbourhood, lot, and family. Used by 129 five-star GTA homeowners.</p>
        </div>
      </section>

      <YardRiskQuiz />

      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-white rounded-xl border border-brand-100 group">
                <summary className="cursor-pointer px-5 py-4 font-semibold text-brand-900 list-none flex justify-between items-center">
                  <span>{question}</span>
                  <svg className="w-5 h-5 shrink-0 group-open:rotate-180 transition-transform text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-5 pb-4 text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: answer }} />
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
