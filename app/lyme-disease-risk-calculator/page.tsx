import type { Metadata } from 'next'
import Link from 'next/link'
import LymeRiskCalculator from '@/components/LymeRiskCalculator'
import { buildMetadata, breadcrumbSchema, faqSchema, speakableSchema } from '@/lib/seo'

const SLUG = '/lyme-disease-risk-calculator'

const FAQS = [
  {
    question: 'How is Lyme disease risk calculated for my household?',
    answer: 'The Lyme Risk Calculator scores 6 inputs: your GTA address (Public Health Ontario tick surveillance data identifies four Lyme-endemic zones — Oak Ridges Moraine, Rouge National Urban Park, Niagara Escarpment edge, Hamilton-Wentworth conservation lands); your yard type (wooded/leafy/open); whether you have a dog and how it is walked; whether kids play outdoors; hiking habits; tick-check behaviour; and past tick exposure history. The output is a 1-100 household-level Lyme exposure score with personalized prevention guidance.',
  },
  {
    question: 'Which GTA areas are Lyme-endemic?',
    answer: 'Public Health Ontario currently flags four GTA zones as Lyme-endemic: (1) Oak Ridges Moraine — Caledon, King City, north Richmond Hill; (2) Rouge National Urban Park — Scarborough, east Markham; (3) Niagara Escarpment edge — Burlington, Halton Hills, Milton; (4) Hamilton-Wentworth conservation lands. Properties within 500m of any of these zones see elevated tick burden. Cases are now confirmed annually in every GTA city.',
  },
  {
    question: 'How long does a tick need to be attached to transmit Lyme?',
    answer: 'Most research and CDC guidance states blacklegged ticks need to be attached for 24-36 hours minimum to transmit the bacterium that causes Lyme disease. The bacteria need to migrate from the tick gut to its salivary glands. This is why daily tick checks after outdoor activities are the single most effective prevention behaviour: finding and removing ticks within 24 hours essentially eliminates Lyme transmission risk.',
  },
  {
    question: 'What does early Lyme disease look like?',
    answer: 'The classic early sign is erythema migrans — an expanding bullseye-pattern rash that appears 3-30 days after a tick bite (most commonly 7-14 days). About 70-80% of confirmed Lyme cases. Other early symptoms: fever, fatigue, headache, muscle aches, joint aches, swollen lymph nodes. If you see a bullseye rash or develop unexplained flu-like symptoms after known tick exposure, see a doctor promptly — early Lyme treats easily with 14-21 days of doxycycline.',
  },
  {
    question: 'How can I prevent Lyme disease for my family?',
    answer: 'Five evidence-based prevention behaviours, ranked by effectiveness: (1) Reduce ticks in your yard with Health Canada-approved barrier spray; (2) Permethrin-treated clothing for hiking; (3) Daily tick checks after outdoor activities; (4) Picaridin 20% on exposed skin; (5) Shower within 2 hours of outdoor exposure to wash off unattached ticks. For dogs: NexGard, Bravecto, or Simparica oral tick preventatives.',
  },
  {
    question: 'My dog had a tick — am I at risk?',
    answer: 'Possibly. Dogs are tick taxis — they sweep ticks up from grass and brush, then deposit them on furniture, beds, and you when you pet them. Three immediate actions: (1) Use a tick remover or fine-tipped tweezers to remove the tick whole; (2) Save the tick and submit a photo to eTick.ca for free identification; (3) Watch the dog and yourself for symptoms for 30 days.',
  },
  {
    question: 'Is the Lyme Risk Calculator a substitute for medical advice?',
    answer: 'No. This tool provides a relative household exposure-risk score and evidence-based prevention guidance — it is educational, not diagnostic. If you have a confirmed tick bite or unexplained symptoms, contact your family doctor or local public health unit.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: 'Lyme Disease Risk Calculator (GTA, Ontario) — Free Household Tick Exposure Score',
  description: 'Free 60-second household Lyme disease risk calculator for the Greater Toronto Area. Backed by Public Health Ontario tick surveillance data. Get your 1-100 exposure score, prevention checklist, and yard treatment plan.',
  canonical: SLUG,
})

export default function LymeRiskPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Lyme Disease Risk Calculator', url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(SLUG)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-rose-900 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-extrabold text-amber-400 uppercase tracking-widest mb-2">Free · 60 Seconds · Backed by Public Health Ontario</p>
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight">What&rsquo;s your family&rsquo;s <span className="text-amber-400">Lyme disease risk</span>?</h1>
          <p className="text-lg text-brand-100 max-w-2xl mx-auto">Free household tick-exposure assessment for GTA families. Backed by Public Health Ontario surveillance data + CDC prevention guidelines.</p>
        </div>
      </section>

      <LymeRiskCalculator />

      <section className="bg-amber-50 border-y-4 border-amber-300 py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-extrabold text-amber-700 uppercase tracking-wider mb-2">Quick Answer</p>
          <h2 className="text-xl font-extrabold text-brand-900 mb-3">How serious is Lyme disease in the GTA in 2026?</h2>
          <p className="text-base text-gray-800 leading-relaxed">
            <strong>Lyme disease in the Greater Toronto Area has shifted from rare to actively expanding. Public Health Ontario currently flags four GTA zones as Lyme-endemic: the Oak Ridges Moraine (Caledon, King City, north Richmond Hill), Rouge National Urban Park (Scarborough, east Markham), Niagara Escarpment edge (Burlington, Halton Hills, Milton), and Hamilton-Wentworth conservation lands.</strong> Blacklegged tick populations have expanded ~20% per year in southern Ontario since 2015. Confirmed Lyme cases are now reported annually in every GTA city. The good news: Lyme is fully preventable when ticks are removed within 24-36 hours of attachment, and treatable with antibiotics when caught early. The bigger risk for most households isn&rsquo;t the disease itself — it&rsquo;s the gap between exposure and detection.
          </p>
        </div>
      </section>

      <section className="bg-white py-14 px-4">
        <div className="max-w-3xl mx-auto prose-brand">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-3">The four GTA Lyme-endemic zones</h2>
          <p className="text-gray-700 mb-4">Public Health Ontario maintains an annual blacklegged tick surveillance program. Areas where established tick populations sustain Lyme bacterium transmission are flagged as &ldquo;risk areas.&rdquo;</p>

          <h3 className="text-lg font-extrabold text-brand-900 mt-6 mb-2">1. Oak Ridges Moraine</h3>
          <p className="text-gray-700 mb-3">Includes Caledon, King City, and northern Richmond Hill. The moraine&rsquo;s mature mixed forests support large white-tailed deer populations. Lyme cases per 100,000 population in moraine-area postal codes run 3-5x the GTA average.</p>

          <h3 className="text-lg font-extrabold text-brand-900 mt-6 mb-2">2. Rouge National Urban Park watershed</h3>
          <p className="text-gray-700 mb-3">Covers eastern Scarborough and eastern Markham. Rouge National Urban Park is Canada&rsquo;s largest urban park (79+ km²) and contains one of the highest blacklegged tick densities in any North American urban park.</p>

          <h3 className="text-lg font-extrabold text-brand-900 mt-6 mb-2">3. Niagara Escarpment edge</h3>
          <p className="text-gray-700 mb-3">Burlington, Halton Hills, and Milton — properties along the escarpment edge plus Bruce Trail-adjacent neighbourhoods.</p>

          <h3 className="text-lg font-extrabold text-brand-900 mt-6 mb-2">4. Hamilton-Wentworth conservation lands</h3>
          <p className="text-gray-700 mb-3">Cootes Paradise, Dundas Valley, and Beverly Swamp — Hamilton&rsquo;s conservation lands network is one of southern Ontario&rsquo;s densest tick reservoirs.</p>

          <h2 className="text-2xl font-extrabold text-brand-900 mt-10 mb-3">How Lyme transmission actually works</h2>
          <p className="text-gray-700 mb-4">A blacklegged tick must be attached to a host for 24-36 hours minimum to transmit Lyme bacterium. The bacteria live in the tick&rsquo;s midgut and need time to migrate to the salivary glands before they can be transmitted. This is why daily tick checks after outdoor activities are so effective.</p>

          <h2 className="text-2xl font-extrabold text-brand-900 mt-10 mb-3">Evidence-based Lyme prevention</h2>
          <p className="text-gray-700 mb-3">Ranked by effectiveness in CDC and Public Health Ontario guidance:</p>
          <ol className="text-gray-700 mb-4 space-y-2">
            <li><strong>Reduce ticks in your yard.</strong> Health Canada-approved barrier spray reduces resident tick populations 80-90% for 21-30 days per treatment.</li>
            <li><strong>Permethrin-treated clothing for hiking.</strong> Kills ticks on contact through fabric. Lasts 6 wash cycles.</li>
            <li><strong>Daily tick checks after outdoor activities.</strong> Focus on hairline, behind ears, armpits, waistband, behind knees.</li>
            <li><strong>Picaridin 20% on exposed skin.</strong> Repels ticks for 8 hours. Safe for kids 6 months and older.</li>
            <li><strong>Shower within 2 hours of outdoor exposure.</strong></li>
            <li><strong>For dogs:</strong> Vet-prescribed oral tick prevention (NexGard, Bravecto, Simparica).</li>
          </ol>

          <h2 className="text-2xl font-extrabold text-brand-900 mt-10 mb-3">If you find a tick attached</h2>
          <ol className="text-gray-700 mb-4 space-y-2">
            <li>Remove it whole with fine-tipped tweezers — pull steady, don&rsquo;t squeeze the body.</li>
            <li>Save the tick in a sealed plastic container with a damp paper towel.</li>
            <li>Submit a photo to <a href="https://www.etick.ca/" target="_blank" rel="noopener noreferrer" className="text-brand-700 underline">eTick.ca</a> for free identification.</li>
            <li>If it was a blacklegged tick attached &gt;24 hours in a Lyme-endemic area, contact your family doctor about doxycycline post-exposure prophylaxis (effective within 72 hours).</li>
            <li>Watch for symptoms for 30 days: bullseye rash, fever, fatigue, headache, joint aches.</li>
          </ol>

          <h2 className="text-2xl font-extrabold text-brand-900 mt-10 mb-3">Sources</h2>
          <ul className="text-gray-700 mb-4 space-y-1 text-sm">
            <li><a href="https://www.publichealthontario.ca/en/Data-and-Analysis/Infectious-Disease/Lyme-Disease-Active-Tick-Surveillance" target="_blank" rel="noopener noreferrer" className="text-brand-700 underline">Public Health Ontario — Lyme Disease Active Tick Surveillance</a></li>
            <li><a href="https://www.cdc.gov/lyme/index.html" target="_blank" rel="noopener noreferrer" className="text-brand-700 underline">CDC — Lyme Disease Information</a></li>
            <li><a href="https://www.etick.ca/" target="_blank" rel="noopener noreferrer" className="text-brand-700 underline">eTick.ca — Citizen-Science Tick Identification</a></li>
          </ul>

          <h2 className="text-2xl font-extrabold text-brand-900 mt-10 mb-3">Related reading</h2>
          <ul className="text-gray-700 mb-4 space-y-1">
            <li><Link href="/yard-risk-report" className="text-brand-700 underline font-semibold">Free GTA Yard Risk Report</Link></li>
            <li><Link href="/blog/permethrin-canada-yard-clothing-spray" className="text-brand-700 underline">Permethrin Canada Guide</Link></li>
            <li><Link href="/blog/ultimate-tick-control-guide-ontario" className="text-brand-700 underline">Ultimate Tick Control Guide for Ontario</Link></li>
            <li><Link href="/gta-mosquito-pressure-map" className="text-brand-700 underline">GTA Mosquito &amp; Tick Pressure Map</Link></li>
            <li><Link href="/tick-control" className="text-brand-700 underline">BuzzSkito Tick Control Service</Link></li>
          </ul>
        </div>
      </section>

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
                <p className="px-5 pb-4 text-gray-600 text-sm">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
