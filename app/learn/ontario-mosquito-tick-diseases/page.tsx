import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import QuickAnswer from '@/components/QuickAnswer'
import { buildMetadata, breadcrumbSchema, speakableSchema, faqSchema } from '@/lib/seo'

const SLUG = 'ontario-mosquito-tick-diseases'
const TITLE = 'Mosquito &amp; Tick Diseases in Ontario — West Nile, Lyme, EEE, Anaplasmosis'

const FAQS = [
  {
    question: 'What diseases do mosquitoes and ticks carry in Ontario?',
    answer: 'In Ontario, mosquitoes primarily spread West Nile virus and, more rarely, Eastern Equine Encephalitis (EEE). Blacklegged (deer) ticks spread Lyme disease — by far the most common tick-borne illness — along with anaplasmosis and, less often, babesiosis and Powassan virus. Lyme disease and West Nile virus account for the large majority of reported cases each year.',
  },
  {
    question: 'What is the most common tick-borne disease in Ontario?',
    answer: 'Lyme disease is by far the most common tick-borne disease in Ontario, transmitted by the blacklegged (deer) tick. Ontario reports hundreds to over a thousand human cases in recent years and the number has climbed as tick range has expanded across the GTA and southern Ontario. Early treatment is highly effective, which is why prompt tick removal and awareness of the bullseye rash matter.',
  },
  {
    question: 'How do I reduce my family\'s risk of these diseases?',
    answer: 'Reduce risk by lowering the number of mosquitoes and ticks around where your family spends time: eliminate standing water, keep grass short, clear leaf litter, use repellent, do tick checks after being outdoors, and treat your yard with a professional barrier spray. BuzzSkito\'s barrier spray reduces both biting mosquitoes and questing ticks on your property, cutting the exposure that leads to bites.',
  },
  {
    question: 'Are mosquito and tick diseases in Ontario getting worse?',
    answer: 'Yes. Warmer, longer seasons have expanded the range of the blacklegged tick across the GTA and southern Ontario, driving a steady rise in Lyme disease cases, while West Nile virus remains an annual risk in mosquito season. Public-health surveillance shows both tick populations and reported cases trending upward, making yard-level prevention increasingly important.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito & Tick Diseases in Ontario — West Nile, Lyme, EEE, Anaplasmosis',
  description: 'The mosquito- and tick-borne diseases that matter in Ontario: West Nile virus, Lyme disease, Eastern Equine Encephalitis (EEE), and anaplasmosis — symptoms, carriers, and how to reduce risk.',
  canonical: `/learn/${SLUG}`,
  type: 'article',
})

export default function OntarioDiseasesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Learning Centre', url: '/learn' }, { name: 'Mosquito & Tick Diseases in Ontario', url: `/learn/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/learn/${SLUG}`)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/learn" className="hover:text-white">Learning Centre</Link><span>/</span>
            <span className="text-white">Mosquito &amp; Tick Diseases in Ontario</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">Mosquito &amp; Tick Diseases in Ontario</h1>
          <p className="text-xl text-brand-100 max-w-3xl">West Nile virus, Lyme disease, Eastern Equine Encephalitis, and anaplasmosis — the four illnesses GTA families should understand, and how to lower your risk.</p>
        </div>
      </section>

      <QuickAnswer question="What diseases do mosquitoes and ticks spread in Ontario?">
        <p>
          <strong>In Ontario, mosquitoes spread West Nile virus and (rarely) Eastern Equine Encephalitis, while blacklegged ticks spread Lyme disease and anaplasmosis.</strong> Lyme disease is the most common of the four and has been rising as tick range expands across the GTA; West Nile virus is an annual mosquito-season risk. Most cases are preventable by reducing bites — the reason BuzzSkito&rsquo;s barrier spray cuts both mosquito and tick numbers around your home.
        </p>
      </QuickAnswer>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <p>Mosquitoes and ticks are not just a nuisance in the Greater Toronto Area — they are Ontario&rsquo;s two most important disease vectors. The good news is that the illnesses they carry are, for the most part, preventable through bite reduction. Below are the four diseases GTA families should know, what carries them, the symptoms to watch for, and where to go deeper. This is general educational information, not medical advice — if you suspect any of these illnesses, contact a healthcare provider.</p>

          <h2>1. West Nile Virus (mosquito-borne)</h2>
          <p>West Nile virus is the most significant mosquito-borne disease in Ontario. It is spread mainly by <em>Culex</em> mosquitoes, which breed in stagnant, nutrient-rich water like clogged catch basins and neglected containers. Roughly 80% of infected people have no symptoms at all, while most others experience a flu-like illness — fever, headache, body aches, and fatigue. In rare cases (well under 1%), the virus causes serious neurological disease. Risk peaks in late summer, when <em>Culex</em> populations and infection rates are highest. Dig deeper in our <Link href="/blog/west-nile-virus-mosquito-risk-ontario">West Nile virus mosquito risk guide</Link> and track the season on the <Link href="/west-nile-virus-ontario-tracker">Ontario West Nile virus tracker</Link>.</p>

          <h2>2. Lyme Disease (tick-borne)</h2>
          <p>Lyme disease is the most common vector-borne illness in Ontario and the single biggest reason to take tick control seriously. It is spread by the blacklegged (deer) tick, <em>Ixodes scapularis</em>, and most often transmitted by the tiny, easily-missed nymph stage. The classic early sign is a spreading &ldquo;bullseye&rdquo; rash (erythema migrans) days after a bite, often with fever, fatigue, headache, and joint pain; untreated, it can progress to serious joint, heart, and neurological problems. Caught early, it responds very well to antibiotics — which is why prompt tick removal matters so much. See the full <Link href="/blog/lyme-disease-symptoms-guide">Lyme disease symptoms guide</Link>, learn <Link href="/blog/what-percentage-of-ticks-carry-lyme-ontario">what percentage of Ontario ticks carry Lyme</Link>, and review the province-wide picture in our <Link href="/lyme-disease-canada-statistics">Lyme disease statistics</Link> hub.</p>

          <h2>3. Eastern Equine Encephalitis / EEE (mosquito-borne)</h2>
          <p>Eastern Equine Encephalitis is rare in Ontario but serious when it occurs. It is spread by mosquitoes and, as the name suggests, has historically affected horses, though human cases can happen. EEE circulates mainly among birds in freshwater swamp habitats, with certain mosquito species occasionally bridging it to mammals. Most human infections cause mild or no symptoms, but severe cases can lead to brain inflammation (encephalitis). Because there is no vaccine or specific treatment for people, reducing mosquito bites is the only protection. The best defence is the same as for West Nile — cut mosquito populations around your home; see our <Link href="/blog/mosquito-repellent-guide-ontario-2026">Ontario mosquito repellent guide</Link> for personal-protection options.</p>

          <h2>4. Anaplasmosis (tick-borne)</h2>
          <p>Anaplasmosis is a bacterial infection spread by the same blacklegged tick that carries Lyme disease, and it has been reported more frequently in Ontario as tick populations grow. Symptoms typically appear one to two weeks after a bite and include fever, chills, severe headache, and muscle aches — often without any rash, which can make it harder to recognize than Lyme. Like Lyme, it is treatable with antibiotics and most serious when diagnosis is delayed. Because a single tick can carry more than one pathogen, the prevention playbook is identical: avoid bites, check for ticks, and reduce tick habitat. Read the wider list in our <Link href="/blog/tick-borne-diseases-ontario-complete-list">complete list of tick-borne diseases in Ontario</Link>.</p>

          <table className="not-prose w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden my-6">
            <thead className="bg-brand-50">
              <tr><th className="px-3 py-2 text-left">Disease</th><th className="px-3 py-2 text-left">Carrier</th><th className="px-3 py-2 text-left">Peak risk</th><th className="px-3 py-2 text-left">Ontario frequency</th></tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>West Nile virus</strong></td><td className="px-3 py-2">Culex mosquito</td><td className="px-3 py-2">Late summer</td><td className="px-3 py-2">Annual, dozens-hundreds of cases</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Lyme disease</strong></td><td className="px-3 py-2">Blacklegged tick</td><td className="px-3 py-2">Spring-fall (nymphs)</td><td className="px-3 py-2">Most common — hundreds+ cases</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>EEE</strong></td><td className="px-3 py-2">Mosquito</td><td className="px-3 py-2">Late summer</td><td className="px-3 py-2">Rare</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Anaplasmosis</strong></td><td className="px-3 py-2">Blacklegged tick</td><td className="px-3 py-2">Spring-fall</td><td className="px-3 py-2">Uncommon but rising</td></tr>
            </tbody>
          </table>

          <h2>How to Lower Your Family&rsquo;s Risk</h2>
          <p>Every one of these diseases is transmitted by a bite, so every effective prevention strategy comes down to the same principle: fewer mosquitoes and ticks where your family lives and plays. A layered approach works best:</p>
          <ul>
            <li><strong>Reduce vectors at the source:</strong> Eliminate standing water to stop mosquitoes; keep grass short and clear leaf litter to reduce tick habitat.</li>
            <li><strong>Treat your yard:</strong> A professional <Link href="/mosquito-control">mosquito barrier spray</Link> and <Link href="/tick-control">tick barrier spray</Link> lower the population of biting adults and questing ticks around your home for weeks at a time.</li>
            <li><strong>Protect your body:</strong> Use repellent, wear long sleeves in tick habitat, and perform a <Link href="/blog/how-to-do-a-tick-check">tick check</Link> after every outing.</li>
            <li><strong>Act fast on bites:</strong> Remove ticks promptly and correctly, and watch for the symptoms above in the days that follow.</li>
          </ul>
          <p>For step-by-step routines, see <Link href="/learn/how-to-combat-mosquitoes">how to combat mosquitoes</Link> and <Link href="/learn/how-to-combat-ticks">how to combat ticks</Link>.</p>

          <aside aria-label="Professional mosquito and tick control" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">Fewer bites, lower risk</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">BuzzSkito&rsquo;s barrier spray cuts both mosquito and tick numbers around your home from $99 — Health Canada-approved formula, 150 five-star reviews across the GTA.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/free-yard-assessment" className="btn-primary-sm">Get a Free Quote →</Link>
              <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
            </div>
          </aside>

          <h2>Keep Learning</h2>
          <ul>
            <li><Link href="/blog/west-nile-virus-mosquito-risk-ontario">West Nile Virus Mosquito Risk in Ontario</Link></li>
            <li><Link href="/blog/lyme-disease-symptoms-guide">Lyme Disease Symptoms Guide</Link></li>
            <li><Link href="/blog/tick-borne-diseases-ontario-complete-list">Complete List of Tick-Borne Diseases in Ontario</Link></li>
            <li><Link href="/blog/what-percentage-of-ticks-carry-lyme-ontario">What Percentage of Ticks Carry Lyme in Ontario?</Link></li>
            <li><Link href="/lyme-disease-canada-statistics">Lyme Disease Statistics</Link></li>
            <li><Link href="/learn">← Back to the Ontario Learning Centre</Link></li>
          </ul>
          <p className="text-xs text-gray-500">This page is general educational information and is not medical advice. If you have symptoms or a concerning bite, consult a licensed healthcare provider.</p>
        </div>
      </article>

      <CTASection heading="Prevention Starts in Your Yard" subtext="Get a free quote for licensed mosquito and tick barrier spray. From $99. Same-day protection." variant="dark" />
    </>
  )
}
