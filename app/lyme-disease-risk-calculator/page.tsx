import type { Metadata } from 'next'
import Link from 'next/link'
import LymeRiskCalculator from '@/components/LymeRiskCalculator'
import { buildMetadata, breadcrumbSchema, faqSchema, speakableSchema } from '@/lib/seo'

const SLUG = '/lyme-disease-risk-calculator'

const FAQS = [
  {
    question: 'How is Lyme disease risk calculated for my household?',
    answer: 'The Lyme Risk Calculator scores 6 inputs: your GTA city (we flag cities that contain or border terrain Public Health Ontario has mapped as blacklegged tick risk area — this grouping is ours, not PHO\'s); your yard type (wooded/leafy/open); whether you have a dog and how it is walked; whether kids play outdoors; hiking habits; tick-check behaviour; and past tick exposure history. The output is a 1-100 household-level Lyme exposure score with personalized prevention guidance. It is a relative planning tool, not a surveillance product — for the authoritative risk map covering your address, use PHO\'s Ontario Vector-Borne Disease Tool.',
  },
  {
    question: 'Which GTA areas have blacklegged tick risk?',
    answer: 'Public Health Ontario does not publish a list of "Lyme-endemic" municipalities or health units. It maps blacklegged tick risk areas as geographic areas built from field surveillance, published through the Ontario Vector-Borne Disease Tool. Those areas are drawn from where established tick populations have actually been found, so they do not follow municipal or health-unit boundaries — one city can contain both mapped risk area and areas with no identified risk — and the map is redrawn each year. The naturalized corridors most often mapped in and around the GTA include the Oak Ridges Moraine, the Rouge watershed, the Niagara Escarpment and the Hamilton-area conservation lands, but the only way to know about your own address is to check the tool. Ticks are also carried outside mapped areas every spring by deer and migratory birds, so a bite is possible anywhere in southern Ontario.',
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
    answer: 'Layer these, rather than picking one: daily tick checks after outdoor activities (removing a tick within 24-36 hours is the single most reliable way to stop transmission); permethrin-treated clothing for hiking; picaridin 20% on exposed skin; showering within 2 hours of outdoor exposure to wash off unattached ticks; and reducing tick habitat in your own yard by clearing leaf litter and treating the shaded perimeter with a Health Canada-registered residual acaricide. For dogs: NexGard, Bravecto, or Simparica oral tick preventatives. We are not ranking these against each other — the personal-protection steps are what CDC and Public Health Ontario emphasise, and yard treatment reduces the habitat rather than replacing tick checks.',
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
  description: 'Free 60-second household Lyme disease risk calculator for the Greater Toronto Area. Get your 1-100 exposure score, a prevention checklist, and a plain-English explanation of how Public Health Ontario actually maps blacklegged tick risk areas.',
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
          <p className="text-xs font-extrabold text-amber-400 uppercase tracking-widest mb-2">Free · 60 Seconds · Educational, Not Diagnostic</p>
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight">What&rsquo;s your family&rsquo;s <span className="text-amber-400">Lyme disease risk</span>?</h1>
          <p className="text-lg text-brand-100 max-w-2xl mx-auto">Free household tick-exposure assessment for GTA families. Prevention guidance follows CDC and Public Health Ontario recommendations; the score itself is our own relative estimate, not a public health product.</p>
        </div>
      </section>

      <LymeRiskCalculator />

      <section className="bg-amber-50 border-y-4 border-amber-300 py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-extrabold text-amber-700 uppercase tracking-wider mb-2">Quick Answer</p>
          <h2 className="text-xl font-extrabold text-brand-900 mb-3">How serious is Lyme disease in the GTA in 2026?</h2>
          <p className="text-base text-gray-800 leading-relaxed">
            <strong>Lyme disease in the Greater Toronto Area has shifted from rare to actively expanding, and the honest answer to &ldquo;is my area endemic?&rdquo; is that Ontario does not classify areas that way.</strong> Public Health Ontario maps blacklegged tick <em>risk areas</em> as geographic areas drawn from field surveillance — published in the <a href="https://www.publichealthontario.ca/en/data-and-analysis/infectious-disease/vbd-tool" target="_blank" rel="noopener noreferrer" className="underline font-semibold">Ontario Vector-Borne Disease Tool</a>, redrawn annually, and not aligned to municipal or health-unit boundaries. Ontario reported 2,369 confirmed and probable Lyme cases in 2024, up 27% over 2023, according to the Public Health Agency of Canada. The good news: Lyme is largely preventable when ticks are removed within 24-36 hours of attachment, and treatable with antibiotics when caught early. The bigger risk for most households isn&rsquo;t the disease itself — it&rsquo;s the gap between exposure and detection.
          </p>
        </div>
      </section>

      <section className="bg-white py-14 px-4">
        <div className="max-w-3xl mx-auto prose-brand">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-3">How Ontario actually publishes tick risk</h2>
          <p className="text-gray-700 mb-4">There is a widespread misconception — one this page previously repeated — that Public Health Ontario designates a fixed set of &ldquo;Lyme-endemic zones&rdquo; in the GTA. It does not, and we have removed that claim rather than relabelled it.</p>
          <p className="text-gray-700 mb-4">What PHO publishes is a map of blacklegged tick <strong>risk areas</strong>, available through the <a href="https://www.publichealthontario.ca/en/data-and-analysis/infectious-disease/vbd-tool" target="_blank" rel="noopener noreferrer" className="text-brand-700 underline font-semibold">Ontario Vector-Borne Disease Tool</a>. Three things about that map matter for reading any regional summary you find online, including ours:</p>
          <ul className="text-gray-700 mb-4 space-y-2">
            <li><strong>They are geographic areas, not jurisdictions.</strong> Risk areas are drawn from where field surveillance has actually found established tick populations, so they do not follow municipal or public health unit boundaries. A single city can contain both mapped risk area and areas with no identified risk.</li>
            <li><strong>The map is redrawn every year.</strong> The current map reflects newly identified or expanded risk areas based on the previous season&rsquo;s field data. Any list of zones written into a web page goes stale; the tool does not.</li>
            <li><strong>Being outside a risk area is not the same as zero risk.</strong> Migratory songbirds carry <em>Ixodes scapularis</em> larvae and nymphs north each spring and drop them at stopover sites, and deer move them locally, so ticks turn up in places that cannot yet sustain a resident population.</li>
          </ul>
          <p className="text-gray-700 mb-4">The naturalized corridors most often associated with tick habitat in and around the GTA are the Oak Ridges Moraine, the Rouge watershed, the Niagara Escarpment and the Hamilton-area conservation lands — mature mixed forest with deer, the leaf-litter humidity ticks need, and long edges against residential lots. That is why this calculator adds weight for cities that contain or border them. <strong>That grouping is our own editorial heuristic, not a Public Health Ontario classification</strong>, and it is no substitute for checking the risk-area map for your own address.</p>

          <h2 className="text-2xl font-extrabold text-brand-900 mt-10 mb-3">How Lyme transmission actually works</h2>
          <p className="text-gray-700 mb-4">A blacklegged tick must be attached to a host for 24-36 hours minimum to transmit Lyme bacterium. The bacteria live in the tick&rsquo;s midgut and need time to migrate to the salivary glands before they can be transmitted. This is why daily tick checks after outdoor activities are so effective.</p>

          <h2 className="text-2xl font-extrabold text-brand-900 mt-10 mb-3">Evidence-based Lyme prevention</h2>
          <p className="text-gray-700 mb-3">These are layers, not a ranking. CDC and Public Health Ontario guidance puts the emphasis on personal protection and prompt tick removal; yard treatment reduces habitat and is a complement to those steps, not a replacement for them.</p>
          <ol className="text-gray-700 mb-4 space-y-2">
            <li><strong>Reduce ticks in your yard.</strong> A Health Canada-registered residual acaricide applied to the yard-edge, leaf-litter and shaded-perimeter zones where blacklegged ticks quest. It is repeated through the season because wildlife keeps carrying new ticks in — no treatment clears a property permanently.</li>
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
            <li>If it was a blacklegged tick attached &gt;24 hours, contact your family doctor about doxycycline post-exposure prophylaxis (effective within 72 hours).</li>
            <li>Watch for symptoms for 30 days: bullseye rash, fever, fatigue, headache, joint aches.</li>
          </ol>

          <h2 className="text-2xl font-extrabold text-brand-900 mt-10 mb-3">Sources</h2>
          <ul className="text-gray-700 mb-4 space-y-1 text-sm">
            <li><a href="https://www.publichealthontario.ca/en/data-and-analysis/infectious-disease/vbd-tool" target="_blank" rel="noopener noreferrer" className="text-brand-700 underline">Public Health Ontario — Ontario Vector-Borne Disease Tool</a> (the authoritative blacklegged tick risk-area map, redrawn annually)</li>
            <li><a href="https://www.publichealthontario.ca/en/Data-and-Analysis/Infectious-Disease/Lyme-Disease-Active-Tick-Surveillance" target="_blank" rel="noopener noreferrer" className="text-brand-700 underline">Public Health Ontario — Lyme Disease Active Tick Surveillance</a></li>
            <li><a href="https://www.cdc.gov/lyme/index.html" target="_blank" rel="noopener noreferrer" className="text-brand-700 underline">CDC — Lyme Disease Information</a></li>
            <li><a href="https://www.etick.ca/" target="_blank" rel="noopener noreferrer" className="text-brand-700 underline">eTick.ca — Citizen-Science Tick Identification</a></li>
          </ul>

          <h2 className="text-2xl font-extrabold text-brand-900 mt-10 mb-3">Related reading</h2>
          <ul className="text-gray-700 mb-4 space-y-1">
            <li><Link href="/ontario-lyme-disease-tracker-2026" className="text-brand-700 underline font-semibold">Ontario Lyme Disease Tracker 2026 (full PHU directory + case data)</Link></li>
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
