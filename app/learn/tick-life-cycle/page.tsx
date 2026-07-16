import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import QuickAnswer from '@/components/QuickAnswer'
import { buildMetadata, breadcrumbSchema, speakableSchema, faqSchema } from '@/lib/seo'

const SLUG = 'tick-life-cycle'
const TITLE = 'The Tick Life Cycle in Ontario — Egg, Larva, Nymph, Adult'

const FAQS = [
  {
    question: 'How long is the tick life cycle in Ontario?',
    answer: 'The blacklegged (deer) tick life cycle takes about two years in Ontario, spanning four stages: egg, larva, nymph, and adult. Each active stage needs a single blood meal before moulting to the next, and ticks can survive long stretches without feeding. This slow, multi-year cycle is why tick numbers build gradually over successive seasons rather than exploding after a single rainfall like mosquitoes do.',
  },
  {
    question: 'Which tick stage is most dangerous to humans?',
    answer: 'The nymph stage is the most dangerous to humans. Nymphs are active in late spring and summer, are only about the size of a poppy seed, and are easily missed on skin — yet they can already carry Lyme disease from their larval blood meal. Most human Lyme infections in Ontario are transmitted by nymphs precisely because they are so hard to spot.',
  },
  {
    question: 'When are ticks active in Ontario?',
    answer: 'Blacklegged ticks in Ontario are active any time the temperature is above roughly 4°C, which means early spring through late fall — and even mild winter days. Adults are most active in spring and again in fall, while nymphs peak in late spring and summer. Because activity spans most of the year, tick prevention in the GTA is not just a mid-summer concern.',
  },
  {
    question: 'How do ticks find a host at each stage?',
    answer: 'Ticks do not fly or jump. They &ldquo;quest&rdquo; — climbing to the tip of grass or a leaf and holding out their front legs to grab onto a passing animal or person. Larvae typically feed on small mammals and birds, nymphs and adults on larger hosts including deer, dogs, and humans. Keeping grass short and creating a woodchip barrier reduces questing zones near your yard.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: 'How the blacklegged (deer) tick life cycle works in Ontario: the two-year egg, larva, nymph, and adult journey, when each stage is active, and why nymphs cause most Lyme disease cases.',
  canonical: `/learn/${SLUG}`,
  type: 'article',
})

export default function TickLifeCyclePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Learning Centre', url: '/learn' }, { name: 'Tick Life Cycle', url: `/learn/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/learn/${SLUG}`)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/learn" className="hover:text-white">Learning Centre</Link><span>/</span>
            <span className="text-white">Tick Life Cycle</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">The two-year, four-stage journey of Ontario&rsquo;s blacklegged tick — and why the poppy-seed-sized nymph is the stage that matters most for Lyme disease.</p>
        </div>
      </section>

      <QuickAnswer question="What is the tick life cycle?">
        <p>
          <strong>The blacklegged tick life cycle has four stages — egg, larva, nymph, and adult — and takes about two years to complete in Ontario.</strong> Each active stage takes one blood meal, then drops off to moult into the next. Larvae feed on small mammals and birds, picking up Lyme bacteria; the resulting nymphs — barely the size of a poppy seed — transmit most human Lyme cases. BuzzSkito targets ticks where they quest: the shaded, leaf-littered edges of your yard.
        </p>
      </QuickAnswer>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <h2>The Four Stages of a Tick&rsquo;s Life</h2>
          <p>The tick that matters most in the Greater Toronto Area is the blacklegged tick, <em>Ixodes scapularis</em> — also called the deer tick — because it is the species that spreads Lyme disease across Ontario. Unlike a mosquito, which races through its life cycle in under two weeks, a blacklegged tick takes roughly <strong>two years</strong> to go from egg to reproducing adult, passing through four stages and taking just one blood meal in each active stage. Understanding that slow, deliberate cycle explains why tick populations creep upward year over year and why prevention has to be a season-long habit. Get the species basics in our <Link href="/blog/blacklegged-deer-tick-ontario">blacklegged deer tick guide</Link> and the wider <Link href="/blog/types-of-ticks-identification">tick identification guide</Link>.</p>

          <h3>1. Egg</h3>
          <p>In spring, an engorged female that fed and mated the previous fall lays a single mass of up to several thousand eggs in leaf litter, then dies. The eggs incubate through the warm months and hatch into larvae in late summer. Ticks are not born carrying Lyme disease — the eggs are clean — which is why the larval blood meal is such a pivotal moment.</p>

          <h3>2. Larva</h3>
          <p>Newly hatched larvae have six legs and are almost microscopic. In late summer and early fall they take their first blood meal, usually from a small host close to the ground — white-footed mice, chipmunks, shrews, and ground-feeding birds. If that host is infected, the larva picks up the Lyme bacterium (<em>Borrelia burgdorferi</em>) and carries it for the rest of its life. After feeding, the larva drops off and moults into a nymph, usually overwintering before becoming active. These tiny early-stage ticks are covered in our guide to <Link href="/blog/baby-ticks-nymphs-seed-ticks-ontario">baby ticks, nymphs, and seed ticks in Ontario</Link>.</p>

          <h3>3. Nymph</h3>
          <p>This is the stage public-health officials worry about most. The following spring and early summer, nymphs — now eight-legged but still only about the size of a poppy seed — quest for a second blood meal from a medium or large host, including humans and pets. Because a nymph may already be infected from its larval meal, and because it is so small it is routinely missed during a body check, <strong>nymphs cause the majority of human Lyme disease cases in Ontario.</strong> A diligent <Link href="/blog/how-to-do-a-tick-check">tick check</Link> after time outdoors is your best defence during nymph season.</p>

          <h3>4. Adult</h3>
          <p>Nymphs that feed successfully moult into adults by fall. Adult females — recognizable by their reddish-orange body and black shield — climb waist-high vegetation to find a large host such as a deer, dog, or human, take their final blood meal, mate, and then overwinter before laying eggs in spring. Adults are large enough to spot and remove more easily than nymphs, but they can still transmit disease. If you find one, follow our step-by-step guide on <Link href="/blog/how-to-remove-tick-safely">how to remove a tick safely</Link>.</p>

          <h2>When Each Stage Is Active in Ontario</h2>
          <p>Blacklegged ticks become active whenever the temperature climbs above about 4°C, which in the GTA means from the first spring thaw through late fall — and even on mild winter days. That long window is why <Link href="/blog/spring-tick-season-ontario">spring tick season in Ontario</Link> starts earlier than most people expect. Here is roughly how the stages line up:</p>

          <table className="not-prose w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden my-6">
            <thead className="bg-brand-50">
              <tr><th className="px-3 py-2 text-left">Stage</th><th className="px-3 py-2 text-left">Peak activity</th><th className="px-3 py-2 text-left">Size</th><th className="px-3 py-2 text-left">Lyme risk to humans</th></tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Egg</strong></td><td className="px-3 py-2">Spring (dormant)</td><td className="px-3 py-2">Tiny mass</td><td className="px-3 py-2">None</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Larva</strong></td><td className="px-3 py-2">Late summer / fall</td><td className="px-3 py-2">Pinhead (6 legs)</td><td className="px-3 py-2">Very low</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Nymph</strong></td><td className="px-3 py-2">Late spring / summer</td><td className="px-3 py-2">Poppy seed</td><td className="px-3 py-2"><strong>Highest</strong></td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Adult</strong></td><td className="px-3 py-2">Spring &amp; fall</td><td className="px-3 py-2">Sesame seed+</td><td className="px-3 py-2">Moderate-high</td></tr>
            </tbody>
          </table>

          <p>For a fuller month-by-month breakdown, see <Link href="/blog/tick-season-ontario-when-are-ticks-active">tick season in Ontario — when are ticks active</Link>, and check how long each stage can survive between meals in <Link href="/blog/how-long-do-ticks-live">how long do ticks live</Link>.</p>

          <h2>How Ticks Find You — and How to Break the Cycle</h2>
          <p>Ticks do not fly or jump; they &ldquo;quest.&rdquo; A tick climbs to the tip of a grass blade or leaf, holds out its front legs, and waits to grab onto anything that brushes past. That behaviour is the whole reason yard control works: ticks concentrate in predictable zones — the shaded, humid, leaf-littered transition between lawn and woods, garden bed edges, tall grass, and fence lines. Break the cycle by making those zones inhospitable:</p>
          <ul>
            <li><strong>Reduce habitat:</strong> Keep grass short, clear leaf litter, and create a dry woodchip or gravel barrier between lawn and woods to stop ticks from questing at the edge.</li>
            <li><strong>Treat the edges:</strong> A professional <Link href="/tick-control">tick barrier spray</Link> applied to the specific 1-3 metre transition zones where ticks concentrate kills questing nymphs and adults on contact — the single stage-independent intervention that protects your family all season.</li>
            <li><strong>Check every time:</strong> Because nymphs are so small, a body check after every outing — plus prompt, safe removal — catches the ticks that slip past the yard barrier.</li>
          </ul>
          <p>For the complete season-long routine, see <Link href="/learn/how-to-combat-ticks">how to combat ticks</Link> and our <Link href="/blog/ultimate-tick-control-guide-ontario">ultimate tick control guide for Ontario</Link>.</p>

          <aside aria-label="Professional tick control" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">Protect your yard from ticks</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">BuzzSkito treats the exact yard edges where ticks quest — 5 sprays per season, Health Canada-approved formula, 129 five-star reviews.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/free-yard-assessment" className="btn-primary-sm">Get a Free Quote →</Link>
              <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
            </div>
          </aside>

          <h2>Keep Learning</h2>
          <ul>
            <li><Link href="/blog/blacklegged-deer-tick-ontario">The Blacklegged (Deer) Tick in Ontario</Link></li>
            <li><Link href="/blog/baby-ticks-nymphs-seed-ticks-ontario">Baby Ticks, Nymphs &amp; Seed Ticks in Ontario</Link></li>
            <li><Link href="/blog/tick-season-ontario-when-are-ticks-active">Tick Season Ontario — When Are Ticks Active?</Link></li>
            <li><Link href="/blog/how-long-do-ticks-live">How Long Do Ticks Live?</Link></li>
            <li><Link href="/blog/how-to-remove-tick-safely">How to Remove a Tick Safely</Link></li>
            <li><Link href="/learn/how-to-combat-ticks">How to Combat Ticks — 10-Step Guide</Link></li>
            <li><Link href="/learn">← Back to the Ontario Learning Centre</Link></li>
          </ul>
        </div>
      </article>

      <CTASection heading="Two-Year Cycle. One Season of Protection." subtext="Get a free quote for licensed tick barrier spray. 5 sprays per season. Health Canada-approved." variant="dark" />
    </>
  )
}
