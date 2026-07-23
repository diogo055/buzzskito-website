import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import QuickAnswer from '@/components/QuickAnswer'
import { buildMetadata, breadcrumbSchema, speakableSchema, faqSchema } from '@/lib/seo'

const SLUG = 'mosquito-life-cycle'
const TITLE = 'The Mosquito Life Cycle in Ontario — Egg, Larva, Pupa, Adult'

const FAQS = [
  {
    question: 'How long is the mosquito life cycle in Ontario?',
    answer: 'In Ontario\'s summer temperatures (20-30°C), a mosquito completes its full egg-to-adult life cycle in 8-14 days. In cooler spring or early-fall weather the cycle stretches to 3-4 weeks because larval development slows in cold water. This short cycle is why an untreated backyard can rebuild a large mosquito population within two weeks of a rainfall.',
  },
  {
    question: 'How many eggs does a female mosquito lay?',
    answer: 'A single female mosquito lays 100-300 eggs per batch and can produce multiple batches in one season — often 1,000+ eggs across her 2-4 week adult life. She needs a blood meal before each batch, which is why only females bite. Eliminating standing water and killing egg-laying females is the highest-leverage way to break the cycle.',
  },
  {
    question: 'Where do mosquitoes lay eggs in a backyard?',
    answer: 'Mosquitoes lay eggs on or near standing water — clogged eavestroughs, plant saucers, tarps, bird baths, kiddie pools, old tires, toys, and the folds of patio furniture covers. Some species lay directly on the water surface; others lay on damp soil that later floods. As little as a bottle cap of water can hatch dozens of larvae.',
  },
  {
    question: 'Which stage of the mosquito life cycle is easiest to control?',
    answer: 'The larval (wriggler) stage is the easiest to control because larvae are confined to standing water where they can be reached with BTI dunks or by simply dumping the water. Killing larvae prevents the next generation of biting adults. Professional barrier spray targets adults resting on vegetation, so combining source reduction with barrier spray attacks two stages at once.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: 'How the mosquito life cycle works in Ontario backyards: egg, larva, pupa, and adult stages, timing in GTA summer temperatures, and which stage is easiest to break for lasting control.',
  canonical: `/learn/${SLUG}`,
  type: 'article',
})

export default function MosquitoLifeCyclePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Learning Centre', url: '/learn' }, { name: 'Mosquito Life Cycle', url: `/learn/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/learn/${SLUG}`)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/learn" className="hover:text-white">Learning Centre</Link><span>/</span>
            <span className="text-white">Mosquito Life Cycle</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">The four stages every GTA mosquito passes through — and why understanding the 8-14 day cycle is the key to stopping bites at the source.</p>
        </div>
      </section>

      <QuickAnswer question="What is the mosquito life cycle?">
        <p>
          <strong>The mosquito life cycle has four stages — egg, larva, pupa, and adult — and completes in just 8-14 days in Ontario summer heat.</strong> A female lays 100-300 eggs on or near standing water; larvae (&ldquo;wrigglers&rdquo;) hatch and feed for 4-10 days, become non-feeding pupae for 2-3 days, then emerge as biting adults. Because the cycle is so fast, BuzzSkito breaks it at two points: dumping standing water to stop larvae, and barrier spray to kill resting adults across your yard.
        </p>
      </QuickAnswer>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <h2>The Four Stages of a Mosquito&rsquo;s Life</h2>
          <p>Every mosquito in the Greater Toronto Area — whether it&rsquo;s the <em>Aedes vexans</em> floodwater mosquito that swarms after summer rain or the <em>Culex pipiens</em> that carries West Nile virus — moves through the same four-stage metamorphosis: egg, larva, pupa, and adult. Three of those four stages happen in water. That single fact is the foundation of every effective backyard mosquito strategy: control the water, and you control the mosquitoes before they ever grow wings.</p>

          <h3>1. Egg</h3>
          <p>A female mosquito needs a blood meal to develop her eggs — which is why only females bite. After feeding, she lays a batch of 100 to 300 eggs. Some species, like <em>Culex</em>, lay eggs in floating rafts directly on standing water; floodwater species like <em>Aedes</em> lay on damp soil and dead leaves at the water&rsquo;s edge, where the eggs can survive for months and hatch the moment rain floods them. In a GTA backyard, the most common egg sites are clogged eavestroughs, plant saucers, tarps, bird baths, kiddie pools, and forgotten containers. Learn which spots to check in our guide to <Link href="/blog/hidden-mosquito-breeding-spots-backyard">hidden mosquito breeding spots in your backyard</Link>.</p>

          <h3>2. Larva</h3>
          <p>Within 24-48 hours (warm water) the eggs hatch into larvae, commonly called &ldquo;wrigglers&rdquo; for the way they thrash toward the surface to breathe through a snorkel-like tube. Larvae feed on organic matter and microorganisms in the water, moulting through four growth stages over roughly 4-10 days. This is the single most vulnerable point in the whole cycle — larvae are trapped in the water and cannot escape. See what they look like in our <Link href="/blog/mosquito-larvae-identification">mosquito larvae identification guide</Link>, and why <Link href="/blog/does-standing-water-attract-mosquitoes">standing water attracts mosquitoes</Link> in the first place.</p>

          <h3>3. Pupa</h3>
          <p>The larva then transforms into a comma-shaped pupa, sometimes called a &ldquo;tumbler.&rdquo; Pupae do not feed, but they are mobile and respond to shadows by diving. This resting-and-reorganizing stage lasts just 2-3 days in warm weather. Inside the pupal case, the aquatic wriggler is rebuilding itself into a flying, biting adult.</p>

          <h3>4. Adult</h3>
          <p>The adult mosquito emerges onto the water surface, rests while its wings and exoskeleton harden, then flies off to find food and mate. Males feed only on nectar and live about a week; females also drink nectar but seek blood to fuel egg production, living 2-4 weeks and often laying multiple batches. Understanding the difference matters — read our breakdown of the <Link href="/blog/male-vs-female-mosquito">male vs female mosquito</Link> and <Link href="/blog/why-do-mosquitoes-exist">why mosquitoes exist</Link> at all in the ecosystem.</p>

          <h2>How Fast Is the Cycle in the GTA?</h2>
          <p>Temperature is the throttle. In the peak of a Mississauga or Toronto July, with water sitting at 25-30°C, the entire egg-to-adult journey takes just 8-10 days. In cool spring water or a shaded ravine, it can stretch to three or four weeks because larval development slows dramatically in cold conditions. This temperature sensitivity is exactly why mosquito populations explode in the humid stretch after a summer rainfall — and why the <Link href="/blog/mosquito-season-gta-when-does-it-start">GTA mosquito season</Link> ramps up in June and July. It also explains where they disappear to: read <Link href="/blog/where-do-mosquitoes-go-in-winter-ontario">where mosquitoes go in winter in Ontario</Link>.</p>

          <table className="not-prose w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden my-6">
            <thead className="bg-brand-50">
              <tr><th className="px-3 py-2 text-left">Stage</th><th className="px-3 py-2 text-left">Location</th><th className="px-3 py-2 text-left">Duration (summer)</th><th className="px-3 py-2 text-left">Bites?</th></tr>
            </thead>
            <tbody>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Egg</strong></td><td className="px-3 py-2">On/near water</td><td className="px-3 py-2">1-2 days to hatch</td><td className="px-3 py-2">No</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Larva</strong></td><td className="px-3 py-2">In water</td><td className="px-3 py-2">4-10 days</td><td className="px-3 py-2">No</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Pupa</strong></td><td className="px-3 py-2">In water</td><td className="px-3 py-2">2-3 days</td><td className="px-3 py-2">No</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2"><strong>Adult</strong></td><td className="px-3 py-2">Flying / resting on vegetation</td><td className="px-3 py-2">1-4 weeks</td><td className="px-3 py-2">Females only</td></tr>
            </tbody>
          </table>

          <h2>Why the Life Cycle Is the Key to Control</h2>
          <p>Because three of the four stages are stuck in water and only adult females bite, an effective mosquito plan attacks the cycle at two points:</p>
          <ul>
            <li><strong>Source reduction (egg, larva, pupa):</strong> Empty or treat standing water weekly. Dumping a plant saucer eliminates an entire generation before it can fly. BTI larvicide dunks kill wrigglers in water you cannot drain, like rain barrels and ponds.</li>
            <li><strong>Adult control (adult):</strong> Adult mosquitoes spend the daytime resting on the undersides of leaves, in shrubs, and along fence lines. A professional <Link href="/mosquito-control">barrier spray</Link> coats those resting surfaces with a residual formula that kills adults on contact for up to 30 days — knocking down the biting generation while source reduction chokes off the next one.</li>
          </ul>
          <p>Attacking a single stage rarely works for long, because the 8-14 day cycle simply rebuilds. Attacking two stages at once — draining water <em>and</em> treating vegetation — is what produces a genuinely bite-free yard. For the full playbook, see <Link href="/learn/how-to-combat-mosquitoes">how to combat mosquitoes</Link> and our <Link href="/blog/ultimate-backyard-mosquito-control-guide">ultimate backyard mosquito control guide</Link>.</p>

          <aside aria-label="Professional mosquito control" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">Break the cycle in your yard</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">BuzzSkito&rsquo;s barrier spray targets resting adult mosquitoes across your whole property from $99 — backed by 150 five-star reviews across 19 GTA cities.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/free-yard-assessment" className="btn-primary-sm">Get a Free Quote →</Link>
              <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
            </div>
          </aside>

          <h2>Keep Learning</h2>
          <ul>
            <li><Link href="/blog/mosquito-larvae-identification">Mosquito Larvae Identification</Link></li>
            <li><Link href="/blog/hidden-mosquito-breeding-spots-backyard">Hidden Mosquito Breeding Spots in Your Backyard</Link></li>
            <li><Link href="/blog/male-vs-female-mosquito">Male vs Female Mosquito — What&rsquo;s the Difference</Link></li>
            <li><Link href="/blog/mosquito-season-gta-when-does-it-start">When Does Mosquito Season Start in the GTA?</Link></li>
            <li><Link href="/blog/where-do-mosquitoes-go-in-winter-ontario">Where Do Mosquitoes Go in Winter in Ontario?</Link></li>
            <li><Link href="/learn/how-to-combat-mosquitoes">How to Combat Mosquitoes — 10-Step Guide</Link></li>
            <li><Link href="/learn">← Back to the Ontario Learning Centre</Link></li>
          </ul>
        </div>
      </article>

      <CTASection heading="Stop Mosquitoes Before They Fly" subtext="Get a free quote for licensed barrier spray. From $99. Same-day yard protection. 30-day residual." variant="dark" />
    </>
  )
}
