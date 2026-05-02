import type { Metadata } from 'next'
import Link from 'next/link'
import MosquitoMagnetQuiz from '@/components/MosquitoMagnetQuiz'
import { buildMetadata, breadcrumbSchema, faqSchema, speakableSchema } from '@/lib/seo'

const SLUG = '/am-i-a-mosquito-magnet'

const FAQS = [
  {
    question: 'Why do mosquitoes bite me more than other people?',
    answer: 'Mosquitoes pick targets based on a hierarchy of detectable cues: CO2 exhalation (detectable from up to 50 metres), lactic acid in skin sweat, body temperature, blood type chemicals secreted in skin, visual contrast against background, skin microbiome diversity, and certain volatile compounds your body produces. Some factors you can change (clothing colour, lotion use, exercise timing); others you can\'t (blood type, body size, pregnancy). The Mosquito Magnet Quiz scores you across 9 factors to identify which are driving your specific attraction profile.',
  },
  {
    question: 'Is the blood type theory of mosquito attraction real?',
    answer: 'Yes. Smith et al. (2002) — published in the Journal of Medical Entomology — demonstrated that Type O blood is roughly 2x as attractive to mosquitoes as Type A, with Type B and AB falling in the middle. The mechanism: chemicals secreted through skin pores correlate with blood type and signal "high-quality blood meal" to a mosquito\'s sensors. About 80% of people are "secretors" who release these chemicals strongly; non-secretors get bitten less regardless of blood type.',
  },
  {
    question: 'Does drinking beer really attract more mosquitoes?',
    answer: 'Yes — Lefèvre et al. (2010) measured a statistically significant increase in mosquito landings within 15 minutes of beer consumption compared to a placebo control. The exact mechanism is debated (changes in skin chemistry, ethanol metabolites in sweat, slight CO2 increase) but the effect is consistent across studies. The increase is modest (~15-20%) but compounds with other risk factors.',
  },
  {
    question: 'Are pregnant women really bitten more by mosquitoes?',
    answer: 'Yes — Lindsay et al. (2000) measured pregnant women being bitten approximately 2x more often than non-pregnant women in Gambia. Two physiological changes drive this: pregnancy increases body temperature ~0.5°C and increases CO2 exhalation rate by ~21%. Both signal "good target" to a mosquito\'s sensors. This is why malaria-endemic regions specifically prioritize pregnant women for protection — the same biology that protects fetal development creates a stronger mosquito attraction signal.',
  },
  {
    question: 'How accurate is this Mosquito Magnet test?',
    answer: 'The score is based on peer-reviewed research linking each of the 9 factors to measurable mosquito attraction effects. The relative weightings come from published effect-size estimates (e.g., Type O blood ~2x effect, pregnancy ~2x, lactic acid post-exercise ~1.5x, dark clothing visual cue ~1.4x). It\'s designed as a relative attractiveness score (you vs. typical person), not an absolute predictor of bite count. People scoring 75+ consistently report higher bite rates than those scoring under 40 in our customer surveys.',
  },
  {
    question: 'If I\'m a mosquito magnet, what actually works to protect me?',
    answer: 'Three layers, in order of effectiveness: (1) Reduce the mosquito population around your property — even high-magnet people don\'t get bitten if there are no mosquitoes nearby (this is what BuzzSkito barrier spray does); (2) Personal repellent — picaridin 20% or DEET 30% on skin during outdoor time provides 5-8 hours of protection; (3) Behavioural changes — wear lighter colours, avoid floral lotions/perfumes outdoors, time exercise away from dusk if possible. The single highest-leverage move for high-magnet people is reducing the mosquito population in the first place.',
  },
  {
    question: 'Is the Mosquito Magnet test free?',
    answer: 'Yes — completely free, no email required to see your score, no credit card. Email is only requested if you want the full personalized report with your factor breakdown, the science behind each one, and your custom protection plan. Even if you skip the email, you see your score and top 3 attraction drivers immediately.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: 'Am I a Mosquito Magnet? — Free 60-Second Test (Backed by Real Science)',
  description: 'Find out why mosquitoes bite you more than other people. Free 9-question test based on peer-reviewed research (blood type, body chemistry, lactic acid, CO2, pregnancy, clothing). Get your 1-100 magnet score + custom protection plan. Used by 129 GTA homeowners.',
  canonical: SLUG,
})

export default function MosquitoMagnetPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Am I a Mosquito Magnet?', url: SLUG }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(SLUG)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-rose-900 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-extrabold text-amber-400 uppercase tracking-widest mb-2">Free · 60 Seconds · Peer-reviewed science</p>
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight">Am I a <span className="text-amber-400">Mosquito Magnet</span>?</h1>
          <p className="text-lg text-brand-100 max-w-2xl mx-auto">Take the 9-question test. Find out exactly why mosquitoes bite you more than other people — and what to do about it.</p>
        </div>
      </section>

      <MosquitoMagnetQuiz />

      <section className="bg-amber-50 border-y-4 border-amber-300 py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-extrabold text-amber-700 uppercase tracking-wider mb-2">Quick Answer</p>
          <h2 className="text-xl font-extrabold text-brand-900 mb-3">Why do mosquitoes bite some people more than others?</h2>
          <p className="text-base text-gray-800 leading-relaxed">
            <strong>Mosquitoes don&rsquo;t pick targets randomly. They use a hierarchy of detectable cues: CO2 exhalation (detectable from up to 50 metres away), body heat, lactic acid in skin sweat, blood-type-specific chemicals secreted through skin, visual contrast, skin microbiome composition, and certain volatile compounds.</strong> Some people score high on multiple factors — they&rsquo;re what we call &ldquo;mosquito magnets&rdquo; and get bitten 5-10x more than the average person at the same location. The factors are well-documented in peer-reviewed entomology research: Type O blood (2x effect), pregnancy (2x), larger body size, post-exercise lactic acid, beer drinking, dark clothing, floral fragrances, and high body temperature. Some you can change; some you can&rsquo;t. The Mosquito Magnet Quiz scores you on all 9 factors to identify your specific attraction profile and what you can do about it.
          </p>
        </div>
      </section>

      <section className="bg-white py-14 px-4">
        <div className="max-w-3xl mx-auto prose-brand">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-3">The science of mosquito attraction</h2>
          <p className="text-gray-700 mb-4">Female mosquitoes — the only ones that bite humans — need a blood meal to develop eggs. They&rsquo;ve evolved to find blood meals efficiently, using a layered detection system:</p>

          <h3 className="text-lg font-extrabold text-brand-900 mt-6 mb-2">Long-range detection (up to 50 metres)</h3>
          <p className="text-gray-700 mb-4"><strong>CO2 plumes.</strong> Mosquitoes detect carbon dioxide gradients in the air using sensors on their antennae. Bigger bodies, exercising bodies, and pregnant women all exhale measurably more CO2 — and become detectable from further away. This is why hiding in a tent doesn&rsquo;t work — the CO2 leaks through.</p>

          <h3 className="text-lg font-extrabold text-brand-900 mt-6 mb-2">Mid-range detection (5-15 metres)</h3>
          <p className="text-gray-700 mb-4"><strong>Body heat + visual contrast.</strong> Mosquitoes have infrared-sensitive antennae that detect body temperature gradients. They also use eyes (yes, mosquitoes have surprisingly good vision) to lock onto dark high-contrast targets against the background. Switching to light-coloured clothing reduces visual detection by 30-40% — one of the easiest changes you can make.</p>

          <h3 className="text-lg font-extrabold text-brand-900 mt-6 mb-2">Close-range targeting (under 1 metre)</h3>
          <p className="text-gray-700 mb-4"><strong>Skin chemistry.</strong> Within striking distance, mosquitoes use highly specialized receptors to detect skin volatiles — lactic acid (post-exercise), ammonia, fatty acids, and blood-type-specific compounds. Skin microbiome composition matters too: people with more diverse skin bacteria are LESS attractive than those with low-diversity bacteria. This is partly genetic.</p>

          <h2 className="text-2xl font-extrabold text-brand-900 mt-10 mb-3">What actually reduces your bite rate</h2>
          <p className="text-gray-700 mb-3">Once you know what makes you attractive, you can counter each factor specifically:</p>
          <ul className="text-gray-700 mb-5 space-y-1">
            <li><strong>Picaridin 20% or DEET 30% on skin</strong> — interferes with mosquito olfactory receptors, masks your scent</li>
            <li><strong>Light-coloured clothing</strong> — reduces visual targeting</li>
            <li><strong>Permethrin-treated clothing</strong> — kills mosquitoes (and ticks) that contact treated fabric</li>
            <li><strong>Shower within 30 min of exercise</strong> — washes off lactic acid</li>
            <li><strong>Skip floral lotions outdoors</strong> — they mimic flower nectar</li>
            <li><strong>Reduce mosquito populations around your property</strong> — even the highest-magnet person doesn&rsquo;t get bitten if there are no mosquitoes nearby</li>
          </ul>
          <p className="text-gray-700 mb-5">That last one is the highest-leverage move. <Link href="/yard-risk-report" className="text-brand-700 underline font-semibold">Take our Yard Risk Report</Link> to find out how bad your specific yard&rsquo;s mosquito pressure is — and how to fix it.</p>

          <h2 className="text-2xl font-extrabold text-brand-900 mt-10 mb-3">Related reading</h2>
          <ul className="text-gray-700 mb-4 space-y-1">
            <li><Link href="/blog/picaridin-vs-deet-canada" className="text-brand-700 underline">Picaridin vs DEET Canada — Which Repellent Is Better?</Link></li>
            <li><Link href="/blog/permethrin-canada-yard-clothing-spray" className="text-brand-700 underline">Permethrin Canada — Where to Buy + Yard vs Clothing Spray</Link></li>
            <li><Link href="/blog/thermacell-canada-where-to-buy" className="text-brand-700 underline">Thermacell Canada — Where to Buy + Do They Actually Work?</Link></li>
            <li><Link href="/yard-risk-report" className="text-brand-700 underline font-semibold">Free GTA Yard Risk Report — Get Your Property&rsquo;s Score</Link></li>
            <li><Link href="/gta-mosquito-pressure-map" className="text-brand-700 underline">GTA Mosquito Pressure Map — Find Your City&rsquo;s Tier</Link></li>
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
