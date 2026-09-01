import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import QuickAnswer from '@/components/QuickAnswer'
import { buildMetadata, breadcrumbSchema, speakableSchema, faqSchema } from '@/lib/seo'
import { SITE_URL } from '@/lib/constants'

const SLUG = 'how-to-combat-mosquitoes'
const TITLE = 'How to Combat Mosquitoes in Ontario — 10-Step Backyard Guide'

const STEPS: { name: string; text: string }[] = [
  { name: 'Eliminate standing water weekly', text: 'Once a week, walk your property and empty anything holding water — plant saucers, buckets, tarps, toys, wheelbarrows, and kiddie pools. Mosquito larvae need standing water to develop, and as little as a bottle cap is enough. This single habit removes entire future generations.' },
  { name: 'Clean and unclog eavestroughs', text: 'Clogged gutters hold stagnant water and rotting leaves — a prime Culex breeding site. Clear them in spring and again mid-season so water drains freely and never pools.' },
  { name: 'Treat water you cannot drain with BTI', text: 'For rain barrels, ponds, and low spots that stay wet, drop in BTI larvicide dunks or bits. BTI is a naturally occurring bacterium that kills mosquito larvae but is safe for pets, birds, and fish.' },
  { name: 'Cut grass and trim dense vegetation', text: 'Adult mosquitoes rest during the day in tall grass, dense shrubs, and shaded groundcover. Keeping the lawn short and thinning overgrown beds removes the humid resting spots where they shelter from the sun.' },
  { name: 'Improve drainage and grading', text: 'Fill low spots that puddle after rain and redirect downspouts away from the yard. Fixing chronic wet areas removes breeding habitat that no amount of spraying can fully offset.' },
  { name: 'Add mosquito-repelling plants and airflow', text: 'Plant citronella, lemongrass, marigolds, and lavender near seating areas, and run a fan on the patio — mosquitoes are weak fliers and avoid moving air. These reduce landings in the zones where you actually sit.' },
  { name: 'Use personal repellent when outdoors', text: 'Apply a Health Canada-approved repellent containing DEET or icaridin (picaridin) to exposed skin, and consider permethrin-treated clothing for extended time outside at dawn and dusk when mosquitoes are most active.' },
  { name: 'Screen and protect gathering areas', text: 'Repair window and door screens, and consider screened gazebos or patio netting for high-use areas. A physical barrier keeps mosquitoes off you during peak evening hours.' },
  { name: 'Apply a professional barrier spray', text: 'Have a licensed technician apply a residual barrier spray to vegetation, shrub interiors, leaf undersides, and fence lines. It kills adult mosquitoes on contact and keeps working for up to 30 days — the highest-impact single step for a whole-yard reduction.' },
  { name: 'Repeat on a schedule all season', text: 'Because the mosquito life cycle resets every 8-14 days, protection has to be ongoing. Combine weekly water dumping with barrier spray re-treatment every 2-4 weeks from May through September to keep the population from rebuilding.' },
]

const FAQS = [
  {
    question: 'What is the fastest way to get rid of mosquitoes in a yard?',
    answer: 'The fastest way to get rid of mosquitoes in a yard is a professional barrier spray, which kills resting adult mosquitoes on contact and keeps working for up to 30 days — you can use the yard the same day it dries. Pair it with dumping all standing water weekly to stop the next generation of larvae. Together these two steps deliver the quickest, longest-lasting relief.',
  },
  {
    question: 'How do I get rid of mosquitoes naturally?',
    answer: 'To reduce mosquitoes naturally, eliminate standing water, treat unavoidable water with BTI larvicide (a natural bacterium safe for pets and fish), keep grass short, run a fan in seating areas, and plant citronella, lemongrass, and marigolds. These lower the population without synthetic pesticides, though they work best combined for a noticeable reduction.',
  },
  {
    question: 'How often should I spray my yard for mosquitoes?',
    answer: 'A professional mosquito barrier spray should be reapplied every 2-4 weeks throughout the May-to-September season, because the residual formula lasts up to 30 days and the mosquito life cycle rebuilds in as little as 8-14 days. Bi-weekly treatment offers the most consistent protection during peak June-July mosquito pressure in the GTA.',
  },
]

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Combat Mosquitoes in Your Ontario Backyard',
  description: 'A 10-step plan to reduce mosquitoes in a GTA backyard — from eliminating standing water and larvicide treatment to professional barrier spray and season-long maintenance.',
  totalTime: 'P1D',
  step: STEPS.map((s, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: s.name,
    text: s.text,
    url: `${SITE_URL}/learn/${SLUG}#step-${i + 1}`,
  })),
  tool: [{ '@type': 'HowToTool', name: 'Professional backpack precision sprayer' }],
  supply: [
    { '@type': 'HowToSupply', name: 'BTI larvicide (mosquito dunks/bits)' },
    { '@type': 'HowToSupply', name: 'Health Canada-approved barrier spray formula' },
    { '@type': 'HowToSupply', name: 'DEET or icaridin repellent' },
  ],
}

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: 'A practical 10-step guide to combating mosquitoes in your Ontario backyard: eliminate standing water, larvicide treatment, habitat reduction, repellent, barrier spray, and season-long maintenance.',
  canonical: `/learn/${SLUG}`,
  type: 'article',
})

export default function HowToCombatMosquitoesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Learning Centre', url: '/learn' }, { name: 'How to Combat Mosquitoes', url: `/learn/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/learn/${SLUG}`)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/learn" className="hover:text-white">Learning Centre</Link><span>/</span>
            <span className="text-white">How to Combat Mosquitoes</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Ten proven steps to take back your backyard — attacking mosquitoes at every stage of their 8-14 day life cycle, from standing water to resting adults.</p>
        </div>
      </section>

      <QuickAnswer question="How do you combat mosquitoes in a backyard?">
        <p>
          <strong>To combat mosquitoes, eliminate all standing water weekly, treat water you cannot drain with BTI larvicide, cut grass and dense vegetation, use repellent, and apply a professional barrier spray to kill resting adults for up to 30 days.</strong> The mosquito life cycle rebuilds in 8-14 days, so the key is attacking two stages at once — draining breeding sites and treating vegetation — and repeating all season. BuzzSkito&rsquo;s barrier spray handles the adult-control half of that plan across your whole property.
        </p>
      </QuickAnswer>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <p>Mosquitoes are relentless in the Greater Toronto Area because their life cycle is so fast — a single warm, rainy week can rebuild a population from scratch. Winning back your yard is not about one silver bullet; it is about layering the ten steps below so you hit mosquitoes at every stage: the eggs and larvae in standing water, and the biting adults resting on your vegetation. Work through them in order for the biggest impact. For the science behind why this works, see the <Link href="/learn/mosquito-life-cycle">mosquito life cycle</Link>.</p>

          <h2>The 10-Step Mosquito Combat Plan</h2>
          <ol className="not-prose space-y-5 my-6">
            {STEPS.map((s, i) => (
              <li key={s.name} id={`step-${i + 1}`} className="flex gap-4">
                <span className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-brand-700 text-white font-extrabold text-sm">{i + 1}</span>
                <div>
                  <h3 className="text-lg font-extrabold text-brand-900 mb-1 mt-0.5">{s.name}</h3>
                  <p className="text-gray-700 leading-relaxed text-[0.95rem]">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <h2>Why This Order Matters</h2>
          <p>Steps 1 through 5 are <strong>source reduction</strong> — they stop mosquitoes from being born on your property in the first place. This is the foundation, and it is free. Steps 6 through 8 are <strong>personal and area protection</strong> for the spaces where your family actually gathers. Step 9, professional <Link href="/mosquito-control">barrier spray</Link>, is the force multiplier: it removes the adult mosquitoes already flying and creates a residual shield that keeps working between your weekly water checks. Step 10 ties it together — because nothing you do holds unless it is repeated across the full May-to-September season.</p>
          <p>Homeowners who try only one tactic — just spraying, or just dumping water — usually see the problem creep back within two weeks. The layered approach is what produces a yard you can genuinely enjoy at dusk. Go deeper in our <Link href="/blog/how-to-get-rid-of-mosquitoes-in-yard-ontario">how to get rid of mosquitoes in your yard</Link> guide and the comprehensive <Link href="/blog/ultimate-backyard-mosquito-control-guide">ultimate backyard mosquito control guide</Link>.</p>

          <h2>Common Mistakes to Avoid</h2>
          <ul>
            <li><strong>Skipping the weekly water walk.</strong> Barrier spray kills adults, but if larvae keep hatching in a forgotten saucer, you are fighting a losing battle.</li>
            <li><strong>Relying on bug zappers.</strong> Research shows zappers kill mostly harmless insects and few biting mosquitoes — see <Link href="/blog/bug-zappers-canada-do-they-work">do bug zappers work</Link>.</li>
            <li><strong>Treating once and stopping.</strong> The 8-14 day cycle means one-and-done never lasts. Consistency beats intensity.</li>
            <li><strong>Ignoring dawn and dusk.</strong> Mosquitoes are most active at these hours — read <Link href="/blog/when-are-mosquitoes-most-active">when mosquitoes are most active</Link> and plan protection accordingly.</li>
          </ul>

          <aside aria-label="Professional mosquito control" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">Let us handle step 9 for you</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">BuzzSkito&rsquo;s licensed barrier spray covers your whole yard from $99 — same-day protection, up to 30-day residual, 150 five-star reviews across 19 GTA cities.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/free-yard-assessment" className="btn-primary-sm">Get a Free Quote →</Link>
              <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
            </div>
          </aside>

          <h2>Keep Learning</h2>
          <ul>
            <li><Link href="/blog/how-to-get-rid-of-mosquitoes-in-yard-ontario">How to Get Rid of Mosquitoes in Your Yard</Link></li>
            <li><Link href="/blog/how-to-prevent-mosquitoes-in-your-backyard">How to Prevent Mosquitoes in Your Backyard</Link></li>
            <li><Link href="/blog/hidden-mosquito-breeding-spots-backyard">Hidden Mosquito Breeding Spots in Your Backyard</Link></li>
            <li><Link href="/blog/mosquito-repellent-guide-ontario-2026">Ontario Mosquito Repellent Guide 2026</Link></li>
            <li><Link href="/learn/mosquito-life-cycle">The Mosquito Life Cycle Explained</Link></li>
            <li><Link href="/learn">← Back to the Ontario Learning Centre</Link></li>
          </ul>
        <h2>Frequently Asked Questions</h2>
        <div className="not-prose space-y-4">
          {FAQS.map(({ question, answer }) => (
            <details key={question} className="group rounded-xl border border-navy-100 bg-white p-4">
              <summary className="cursor-pointer font-bold text-brand-900 list-none flex justify-between items-center gap-3">
                {question}
                <span className="text-emerald-600 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
              </summary>
              <p className="mt-3 text-sm text-gray-700 leading-relaxed">{answer}</p>
            </details>
          ))}
        </div>

        </div>
      </article>

      <CTASection heading="Take Back Your Backyard" subtext="Get a free quote for licensed mosquito barrier spray. From $99. Same-day yard protection. 30-day residual." variant="dark" />
    </>
  )
}
