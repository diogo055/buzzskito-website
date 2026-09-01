import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import QuickAnswer from '@/components/QuickAnswer'
import { buildMetadata, breadcrumbSchema, speakableSchema, faqSchema } from '@/lib/seo'
import { SITE_URL } from '@/lib/constants'

const SLUG = 'how-to-combat-ticks'
const TITLE = 'How to Combat Ticks in Ontario — 10-Step Yard &amp; Family Guide'

const STEPS: { name: string; text: string }[] = [
  { name: 'Keep your lawn mowed short', text: 'Ticks quest by climbing to the tips of tall grass and waiting for a host. A short, well-maintained lawn dries out faster and gives ticks far fewer places to wait, immediately shrinking the questing zone near your home.' },
  { name: 'Clear leaf litter and brush', text: 'Ticks survive on humidity, sheltering in damp leaf litter, brush piles, and groundcover. Raking and removing leaves — especially along fences and wood edges — strips away the moist microclimate they depend on.' },
  { name: 'Create a woodchip or gravel barrier', text: 'Lay a 1-metre-wide strip of dry woodchips or gravel between your lawn and any woods, tall grass, or garden beds. Ticks avoid crossing this hot, dry barrier, which keeps them from questing into the areas your family uses.' },
  { name: 'Move play areas away from the yard edge', text: 'Position swing sets, sandboxes, and patios toward the centre of the yard and away from the lawn-to-woods transition, where tick density is highest. Distance from the edge dramatically lowers exposure for kids and pets.' },
  { name: 'Discourage tick-carrying wildlife', text: 'Mice and deer ferry ticks into your yard. Secure garbage, remove bird feeders that draw rodents, and use fencing or deer-resistant planting to reduce the animals that restock ticks each season.' },
  { name: 'Dress defensively in tick habitat', text: 'When hiking, gardening, or working near brush, wear long sleeves and light-coloured clothing, tuck pants into socks, and consider permethrin-treated clothing so ticks are repelled before they reach skin.' },
  { name: 'Use tick repellent on skin and gear', text: 'Apply a Health Canada-approved repellent with DEET or icaridin (picaridin) to exposed skin. For pets, ask your vet about a tick-preventive product, since dogs frequently carry ticks indoors.' },
  { name: 'Do a full-body tick check every time', text: 'After any time outdoors, check the whole body — especially the scalp, behind the ears, underarms, waistband, and behind the knees. Because nymphs are the size of a poppy seed, careful checking is your most important daily habit.' },
  { name: 'Remove any tick promptly and correctly', text: 'Use fine-tipped tweezers to grasp the tick close to the skin and pull straight out with steady pressure — do not twist or crush it. Prompt removal within 24 hours sharply lowers the chance of Lyme transmission.' },
  { name: 'Apply a professional tick barrier spray', text: 'Have a licensed technician treat the specific 1-3 metre yard-edge zones where ticks concentrate. A residual tick barrier spray kills questing nymphs and adults on contact and is the single most effective yard-level intervention across the season.' },
]

const FAQS = [
  {
    question: 'What is the best way to get rid of ticks in a yard?',
    answer: 'The best way to get rid of ticks in a yard is to combine habitat reduction — mowing short, clearing leaf litter, and adding a dry woodchip barrier at the yard edge — with a professional tick barrier spray applied to the shaded transition zones where ticks quest. Habitat changes shrink where ticks can live, and the barrier spray kills the ticks that remain, giving families season-long protection.',
  },
  {
    question: 'Does mowing the lawn reduce ticks?',
    answer: 'Yes. Ticks quest by climbing tall grass and depend on humid, shaded conditions, so keeping the lawn short and letting it dry in the sun removes both the perches and the moisture ticks need. Mowing alone will not eliminate ticks, but it is a foundational step that makes every other control measure — barrier spray, barriers, and habitat clearing — more effective.',
  },
  {
    question: 'How do I protect my kids and pets from ticks?',
    answer: 'Protect kids and pets by moving play areas away from the yard edge, keeping the lawn short, using repellent and (for dogs) a vet-recommended tick preventive, and doing a full-body tick check after every outing — focusing on the scalp, behind the ears, and skin folds. A professional tick barrier spray on the yard-edge zones reduces the ticks they can encounter in the first place.',
  },
]

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Combat Ticks in Your Ontario Yard',
  description: 'A 10-step plan to reduce ticks and protect your family in Ontario — habitat reduction, barriers, repellent, tick checks, safe removal, and professional barrier spray.',
  totalTime: 'P1D',
  step: STEPS.map((s, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: s.name,
    text: s.text,
    url: `${SITE_URL}/learn/${SLUG}#step-${i + 1}`,
  })),
  tool: [
    { '@type': 'HowToTool', name: 'Professional backpack precision sprayer' },
    { '@type': 'HowToTool', name: 'Fine-tipped tweezers' },
  ],
  supply: [
    { '@type': 'HowToSupply', name: 'Woodchips or gravel for a tick barrier' },
    { '@type': 'HowToSupply', name: 'Health Canada-approved tick barrier spray formula' },
    { '@type': 'HowToSupply', name: 'DEET or icaridin repellent' },
  ],
}

export const metadata: Metadata = buildMetadata({
  title: 'How to Combat Ticks in Ontario — 10-Step Yard & Family Guide',
  description: 'A practical 10-step guide to combating ticks in Ontario: mow short, clear leaf litter, build a woodchip barrier, use repellent, do tick checks, remove ticks safely, and apply a professional barrier spray.',
  canonical: `/learn/${SLUG}`,
  type: 'article',
})

export default function HowToCombatTicksPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Learning Centre', url: '/learn' }, { name: 'How to Combat Ticks', url: `/learn/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/learn/${SLUG}`)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/learn" className="hover:text-white">Learning Centre</Link><span>/</span>
            <span className="text-white">How to Combat Ticks</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">How to Combat Ticks in Ontario — 10-Step Yard &amp; Family Guide</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Ten steps to keep blacklegged ticks — and the Lyme disease they carry — away from your family, from yard-edge barriers to safe tick removal.</p>
        </div>
      </section>

      <QuickAnswer question="How do you combat ticks in a yard?">
        <p>
          <strong>To combat ticks, keep grass short, clear leaf litter, build a dry woodchip barrier between lawn and woods, use repellent, do a full-body tick check after every outing, and apply a professional tick barrier spray to the yard edges where ticks quest.</strong> Ticks concentrate in the shaded, humid transition between lawn and woods, so shrinking that habitat and treating it directly is the most effective protection. BuzzSkito targets exactly those zones with a Health Canada-approved barrier spray.
        </p>
      </QuickAnswer>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <p>Ticks are a different challenge from mosquitoes. They do not fly or breed in your backyard by the thousands — instead, blacklegged (deer) ticks are carried in by wildlife and quietly wait at the edges of your property, questing for a host. Because a single bite from an infected nymph can transmit Lyme disease, the goal is not just fewer ticks but zero contact. The ten steps below combine habitat reduction, personal protection, and professional treatment to protect your family all season. To understand why yard edges matter so much, start with the <Link href="/learn/tick-life-cycle">tick life cycle</Link>.</p>

          <h2>The 10-Step Tick Combat Plan</h2>
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
          <p>Steps 1 through 5 are <strong>habitat reduction</strong> — they make your yard a place ticks cannot thrive. Ticks live and die by humidity, so a short lawn, cleared leaf litter, and a dry barrier at the woods edge do more than any single product. Steps 6 through 9 are <strong>personal protection</strong>: the clothing, repellent, checks, and safe removal that stop a tick from ever attaching, or catch it before it can transmit disease. Step 10, a professional <Link href="/tick-control">tick barrier spray</Link>, is the one intervention that works independently of tick stage, killing questing nymphs and adults exactly where they concentrate. Read the deeper playbook in <Link href="/blog/how-to-keep-ticks-out-of-yard-ontario">how to keep ticks out of your yard</Link> and the <Link href="/blog/ultimate-tick-control-guide-ontario">ultimate tick control guide for Ontario</Link>.</p>

          <h2>Protecting Kids and Pets</h2>
          <p>Children and dogs are the most common way ticks come indoors, so they deserve extra attention. Move play structures toward the sunny centre of the yard, do a thorough check of kids after outdoor play, and ask your veterinarian about a tick preventive for pets. For a family-safe treatment approach, see <Link href="/blog/tick-prevention-yard-ontario-safe-for-kids">tick prevention safe for kids</Link>, and for the details of catching ticks early, our step-by-step <Link href="/blog/how-to-do-a-tick-check">tick check guide</Link> and <Link href="/blog/how-to-remove-tick-safely">how to remove a tick safely</Link>.</p>

          <h2>Common Mistakes to Avoid</h2>
          <ul>
            <li><strong>Only treating the open lawn.</strong> Ticks live at the edges — the woods line, garden beds, and fence rows — not the middle of a sunny lawn. Treat where they actually are.</li>
            <li><strong>Skipping the tick check.</strong> No yard measure is perfect. The post-outing body check is the backstop that catches what gets through.</li>
            <li><strong>Removing ticks incorrectly.</strong> Twisting, burning, or squeezing a tick raises infection risk. Steady straight-out traction with fine tweezers is the only recommended method.</li>
            <li><strong>Assuming ticks are only a summer problem.</strong> Blacklegged ticks are active any time it is above about 4°C — read <Link href="/blog/tick-season-ontario-when-are-ticks-active">when ticks are active in Ontario</Link>.</li>
          </ul>

          <aside aria-label="Professional tick control" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">Let us handle step 10 for you</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">BuzzSkito treats the exact yard-edge zones where ticks quest — 5 sprays per season, Health Canada-approved formula, 150 five-star reviews across the GTA.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/free-yard-assessment" className="btn-primary-sm">Get a Free Quote →</Link>
              <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
            </div>
          </aside>

          <h2>Keep Learning</h2>
          <ul>
            <li><Link href="/blog/how-to-keep-ticks-out-of-yard-ontario">How to Keep Ticks Out of Your Yard</Link></li>
            <li><Link href="/blog/ultimate-tick-control-guide-ontario">Ultimate Tick Control Guide for Ontario</Link></li>
            <li><Link href="/blog/tick-prevention-yard-ontario-safe-for-kids">Tick Prevention Safe for Kids</Link></li>
            <li><Link href="/blog/how-to-remove-tick-safely">How to Remove a Tick Safely</Link></li>
            <li><Link href="/blog/how-to-do-a-tick-check">How to Do a Tick Check</Link></li>
            <li><Link href="/learn/tick-life-cycle">The Tick Life Cycle Explained</Link></li>
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

      <CTASection heading="Keep Ticks Off Your Family" subtext="Get a free quote for licensed tick barrier spray. 5 sprays per season. Health Canada-approved." variant="dark" />
    </>
  )
}
