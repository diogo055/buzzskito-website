import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import AuthorByline from '@/components/AuthorByline'
import BuyLink from '@/components/BuyLink'
import TopPick from '@/components/TopPick'
import FreshnessStamp from '@/components/FreshnessStamp'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'

const SLUG = 'mosquito-larvae-identification'
const DATE = '2026-04-28'
const UPDATED = '2026-07-12'
const TITLE = 'Mosquito Larvae — Identification, Lifecycle & Removal (2026)'

const FAQS = [
  {
    question: 'What do mosquito larvae look like?',
    answer: 'Mosquito larvae are 5–8 mm long, brown to black or grey, and look like tiny wiggling worms with a distinct head, thorax, and abdomen. They breathe through a siphon tube that pokes through the water surface — when you disturb the water, they immediately wiggle downward in a characteristic S-shape. This wiggling motion is why they\'re commonly called "wigglers." Mosquito larvae always live in water and never on land.',
  },
  {
    question: 'How do you identify mosquito larvae?',
    answer: 'Three diagnostic features: (1) They live in still or slow-moving water, never on land. (2) They hang upside-down at the water surface with their breathing siphon poking through. (3) When the water is disturbed, they wiggle in a distinctive S or comma shape as they swim downward. Common look-alikes include midge larvae (live in mud/sediment, not at the water surface) and mayfly larvae (have visible gills along their abdomen — mosquito larvae don\'t).',
  },
  {
    question: 'Where do mosquito larvae live?',
    answer: 'Mosquito larvae live in any standing water that has remained undisturbed for 5+ days. Common locations: rain barrels, clogged gutters, neglected bird baths, plant saucers, old tires, tarps with water collected on top, kiddie pools, ornamental ponds without fish, drainage ditches, tree holes, and any container that holds water. A bottle cap full of water can produce dozens of mosquitoes. They CANNOT live in flowing water (creeks, rivers) or chlorinated swimming pools.',
  },
  {
    question: 'How long do mosquito larvae take to become adults?',
    answer: 'Mosquito larvae develop into adults in 7–14 days at typical Ontario summer temperatures (20–25°C). The lifecycle has 4 stages: egg (1–3 days), larva (4–14 days, growing through 4 instars), pupa (1–4 days), adult. Cold water slows development; warm water speeds it up. This is why removing standing water weekly is the most effective preventive measure — it interrupts the lifecycle before adults emerge.',
  },
  {
    question: 'How do you get rid of mosquito larvae?',
    answer: 'Three options ranked by effectiveness: (1) Drain or empty the water — most effective, kills 100% of larvae instantly. (2) BTI Mosquito Dunks or Bits (Bacillus thuringiensis israelensis) — bacterial larvicide, kills larvae in 24–48 hours, completely safe for fish/pets/humans. Available at Canadian Tire, Home Depot, Rona for $10–$20. (3) Cooking oil or dish soap on the water surface — disrupts the larvae\'s breathing siphon, kills within hours. Use only as last resort and only in non-environmental water (e.g., disposable containers).',
  },
  {
    question: 'Are mosquito larvae harmful to humans or pets?',
    answer: 'No. Mosquito larvae cannot bite — they have no piercing mouthparts. They live entirely in water and never come into contact with humans or pets. Pets occasionally drink water containing larvae with no harm. The harm comes from the ADULT mosquitoes that emerge from the larvae — adult females bite and can transmit West Nile virus, Eastern Equine Encephalitis, and other diseases. The goal of larvae control is to prevent adult mosquito emergence, not because the larvae themselves are dangerous.',
  },
  {
    question: 'How do I check my yard for mosquito larvae?',
    answer: 'Walk your yard once a week between May and September. Look for any standing water that has been still for more than 5 days: clogged gutters, plant saucers, kiddie pools, bird baths, rain barrels, tarps, old containers, and low spots in the lawn that pool after rain. If you see wigglers, either dump the water immediately or treat with a BTI mosquito dunk. Continuous weekly inspection is the single most effective DIY mosquito control practice.',
  },
  {
    question: 'Do fish eat mosquito larvae?',
    answer: 'Yes — most pond fish eat mosquito larvae aggressively. Goldfish and koi are particularly effective. If you have an ornamental pond with fish, you typically don\'t need to treat for mosquitoes — the fish handle larvae naturally. Mosquitofish (Gambusia affinis) are specifically bred for this purpose in some regions. Frogs and dragonfly larvae also eat mosquito larvae. A balanced pond ecosystem rarely needs mosquito treatment.',
  },
  {
    question: 'What kills mosquito larvae instantly?',
    answer: 'Draining the water kills 100% of mosquito larvae instantly — they cannot survive out of water for more than a few minutes. For water you can\'t drain, nothing safe works truly "instantly": BTI (Mosquito Dunks/Bits) kills larvae within 24–48 hours and is the safest option for ponds, rain barrels, and ditches. A thin film of dish soap or cooking oil suffocates larvae within hours but should only be used in disposable container water, never ponds. Avoid bleach or gasoline — they contaminate water, harm wildlife, and are illegal to dump in many municipalities.',
  },
  {
    question: 'Why are there mosquito larvae in my pool?',
    answer: 'Mosquito larvae appear in pools when chlorine has lapsed and the water has sat undisturbed for 5+ days — properly chlorinated, filtered pool water cannot support larvae. Fix it by shocking the pool, running the filter, and skimming; larvae die quickly in restored chlorine levels. Pool covers are a bigger culprit than the pool itself: rainwater pooling on top of a cover is a perfect nursery. Tip the cover off after rain or treat the puddles with a BTI dunk.',
  },
  {
    question: 'Can mosquito larvae survive without water?',
    answer: 'No. Mosquito larvae die within minutes out of water — they are fully aquatic and breathe through a siphon at the water surface. This is exactly why dumping standing water is the most effective control. Note the eggs are tougher: some mosquito species lay eggs in moist soil or dry container edges that hatch when re-flooded, and those eggs can survive weeks to months dry. So after dumping a container, scrub the sides to remove any eggs stuck to the walls, then store it upside down.',
  },
  {
    question: 'How do I get rid of mosquito larvae in a rain barrel?',
    answer: 'Do not dump a rain barrel you want to keep using — treat it instead. Drop one BTI Mosquito Dunk (or a scoop of Mosquito Bits) into the barrel; the Bacillus thuringiensis israelensis kills all mosquito larvae within 24–48 hours and is completely safe for garden plants, pets, and beneficial insects, so the water stays fine to use on your vegetables and flowers. One dunk keeps a barrel larvae-free for about 30 days. Then fit a fine mesh screen over the barrel opening so egg-laying females cannot get back in — screening plus a monthly dunk keeps a rain barrel mosquito-free all season.',
  },
  {
    question: 'How can I tell mosquito larvae apart from other larvae?',
    answer: 'Only mosquito larvae hang head-down at the water surface with a breathing siphon poking through the surface tension and dart downward in a distinctive S-shaped wiggle when disturbed. Midge larvae (often red "bloodworms") live in bottom mud and swim in a figure-eight; mayfly larvae have feathery gills along the abdomen and need clean flowing water; drain-fly larvae live in the slime film inside pipes, never in open standing water. If it is at the surface of still water and wiggles in an S when you touch the water, it is a mosquito larva — and it will become a biting adult in 7–14 days.',
  },
  {
    question: 'What do mosquito eggs look like?',
    answer: 'Mosquito eggs are tiny — under 1 mm — and dark brown to black. Depending on the species, they appear either as a floating raft of 100–300 eggs stuck together in a boat shape on the water surface, or as single eggs laid along the moist edges of containers and damp soil. To the naked eye a raft looks like a small speck of dirt or soot bobbing on still water, so it is easy to overlook until larvae hatch a day or two later.',
  },
  {
    question: 'How big are mosquito larvae?',
    answer: 'Mosquito larvae are about 5–8 mm long when fully grown — roughly the size of a grain of rice. They start much smaller, around 1 mm, when they first hatch, then grow through four moults (instars) over 4–14 days before pupating. Even at full size they are small enough that many homeowners mistake a rain barrel or bird bath full of them for floating debris until the water is disturbed and the larvae wiggle.',
  },
  {
    question: 'What do mosquito larvae eat?',
    answer: 'Mosquito larvae are filter feeders that eat microscopic organic matter suspended in the water — bacteria, algae, fungi, protozoa, and decaying plant material — sweeping food toward their mouth with brush-like mouthparts. This feeding habit is exactly why BTI larvicides such as Mosquito Dunks and Bits work: the larvae swallow the bacterial spores along with their food, and the BTI proteins destroy their gut within 24 hours. Larvae never bite or feed on blood — only adult female mosquitoes do.',
  },
  {
    question: 'What do mosquito pupae look like?',
    answer: 'Mosquito pupae — nicknamed \'tumblers\' — are comma or question-mark shaped, with a bulbous head-and-thorax section and a curled tail. They rest at the water surface and tumble downward in a rolling somersault when disturbed, unlike the S-shaped wiggle of larvae. Pupae do not feed and last only 1–4 days before the adult mosquito emerges. Seeing tumblers means adults are about to hatch, so drain or treat the water with BTI immediately.',
  },
  {
    question: 'How do you identify mosquito larvae in water?',
    answer: 'To identify mosquito larvae in water, look for small worm-like creatures hanging head-down just beneath the surface with a breathing siphon poking through the surface film. Tap or disturb the water and they dart downward in a distinctive S-shaped wiggle, then float back up to breathe. They appear only in still or slow water that has sat undisturbed for 5 or more days — rain barrels, bird baths, clogged gutters, and plant saucers are the usual spots in a GTA backyard.',
  },
  {
    question: 'What do baby mosquitoes look like?',
    answer: '\'Baby mosquitoes\' almost always means the aquatic larvae — 5–8 mm brown-black wiggling worms that live in standing water, not tiny flying adults. Mosquitoes have no small winged juvenile stage; they go egg → larva → pupa → adult, and the adult emerges full-sized. So if you are seeing something small and mosquito-like in water, it is a larva or a comma-shaped pupa. A newly emerged adult is already the same size as any other adult mosquito.',
  },
]

export const metadata: Metadata = buildMetadata({
  // Head term (~pos 15). Title front-loads the keyword, matches "what they look
  // like" + the dominant "kill them" intent, and stays under 60 chars.
  title: 'Mosquito Larvae: What They Look Like & How to Kill',
  description: 'See what mosquito larvae look like, where they breed (pool, rain barrel, gutter) and how to kill them fast with BTI Dunks & Bits. Ontario guide.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

export default function MosquitoLarvaePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Visual identification and removal guide for mosquito larvae.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Mosquito Larvae', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Mosquito Larvae</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">How to identify, where they live, and how to get rid of them — Ontario-focused.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      <section className="bg-white px-4 pt-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">Mosquito larvae are 5&ndash;8 mm long, brown-black wiggling worm-like creatures (&ldquo;wigglers&rdquo;) that live in standing water. They hang head-down at the surface with a breathing siphon and dart downward in an S-shape when disturbed.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Mosquito larvae are 5&ndash;8 mm long (about the size of a grain of rice), brown to black, and live only in standing water.</li>
              <li>They hang at the water surface with a breathing siphon and wiggle downward in an S-shape when disturbed.</li>
              <li>Larvae develop into biting adults in 7&ndash;14 days at 20&ndash;25&deg;C Ontario summer temperatures.</li>
              <li>Draining the water kills 100% of larvae instantly and costs nothing.</li>
              <li>BTI Mosquito Dunks kill larvae within 24&ndash;48 hours, last about 30 days, and cost $10&ndash;$20.</li>
              <li>Larvae cannot live in flowing water (creeks, rivers) or properly chlorinated pools.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control &middot; 150+ five-star Google reviews</p>
          </div>
        </div>
      </section>

      {/* How to kill — the dominant search intent behind "mosquito larvae" */}
      <section className="bg-white border-b border-gray-100 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-3">How do you kill mosquito larvae in standing water?</h2>
          <p className="speakable text-base text-gray-800 leading-relaxed mb-5">
            <strong>The fastest way to kill mosquito larvae is to drain the water — this kills 100% of larvae instantly and costs nothing.</strong> If the water cannot be drained (a rain barrel, ornamental pond, or drainage ditch), drop in a BTI larvicide such as Mosquito Dunks or Mosquito Bits. BTI is a naturally occurring soil bacterium that kills mosquito larvae within 24 hours and is harmless to fish, frogs, pets, birds, bees, and people. One dunk treats about 100 square feet of water surface for 30 days and costs $10&ndash;$20 at Canadian Tire, Home Depot, or Rona.
          </p>
          <AffiliateDisclosure />
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <BuyLink search="summit mosquito dunks">Mosquito Dunks on Amazon.ca &rarr;</BuyLink>
            <BuyLink search="summit mosquito bits">Mosquito Bits on Amazon.ca &rarr;</BuyLink>
            <Link href="/blog/mosquito-bits-canada-vs-dunks" className="text-sm font-semibold text-brand-700 hover:text-brand-600">Dunks or Bits? See the comparison &rarr;</Link>
          </div>
          <TopPick
            label="Best for Water You Can't Drain"
            name="Summit BTI Mosquito Dunks"
            blurb="For a rain barrel, ornamental pond, or drainage ditch you can't empty, a BTI dunk is the standout larvae killer. The Bacillus thuringiensis israelensis targets only mosquito (and blackfly/fungus-gnat) larvae, wiping them out within 24–48 hours while staying harmless to fish, frogs, pets, birds, bees, and people. One dunk keeps roughly 100 sq ft of water surface larvae-free for about 30 days."
            search="summit mosquito dunks"
            score={9.0}
            pros={['Kills larvae in 24–48 hours', 'Safe for fish, pets, and people', 'One dunk lasts ~30 days']}
            cons={['Slower than simply draining the water', 'Not needed for water you can just dump']}
          />
          <div className="rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-3 py-2 text-left">Method</th>
                  <th className="px-3 py-2 text-left">Time to kill</th>
                  <th className="px-3 py-2 text-left">Cost</th>
                  <th className="px-3 py-2 text-left">Safe for fish &amp; pets?</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Drain / dump the water', 'Instant', 'Free', 'Yes'],
                  ['BTI (Mosquito Dunks)', '24–48 hours', '$10–$20 / 30 days', 'Yes — completely'],
                  ['BTI granules (Mosquito Bits)', '24 hours', '$12–$18', 'Yes — completely'],
                  ['Add fish (goldfish, koi)', 'Ongoing', '$5–$30', 'Yes'],
                  ['Dish soap / cooking oil film', 'Hours', 'Free', 'No — last resort only'],
                  ['Bleach or chlorine', 'Hours', 'Low', 'No — never in ponds'],
                ].map(([m, t, c, s]) => (
                  <tr key={m} className="border-t border-gray-100">
                    <td className="px-3 py-2 font-semibold text-brand-800">{m}</td>
                    <td className="px-3 py-2 text-gray-700">{t}</td>
                    <td className="px-3 py-2 text-gray-700">{c}</td>
                    <td className="px-3 py-2 text-gray-700">{s}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Look-alike disambiguation — the second big intent */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-3">Is it a mosquito larva or something else?</h2>
          <p className="speakable text-base text-gray-800 leading-relaxed mb-5">
            <strong>If the wiggler hangs head-down at the water surface and darts downward in an S-shape when disturbed, it is a mosquito larva.</strong> Midge larvae look similar but live in bottom mud and swim in a figure-eight; mayfly larvae have feathery gills along the abdomen; drain-fly larvae live in slimy pipe film, not open water. Only mosquito larvae breathe through a siphon at the surface, and only mosquito larvae become biting adults.
          </p>
          <div className="rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-3 py-2 text-left">Creature</th>
                  <th className="px-3 py-2 text-left">Where it lives</th>
                  <th className="px-3 py-2 text-left">Telltale sign</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Mosquito larva', 'Hangs at water surface', 'Breathing siphon; S-shaped wiggle'],
                  ['Midge larva', 'Bottom mud / sediment', 'Red "bloodworm"; figure-eight swim'],
                  ['Mayfly larva', 'Clean flowing water', 'Feathery gills along abdomen'],
                  ['Drain-fly larva', 'Slime film inside drains', 'Flat, never in open standing water'],
                  ['Mosquito pupa ("tumbler")', 'Water surface', 'Comma-shaped; tumbles, does not feed'],
                ].map(([c, w, t]) => (
                  <tr key={c} className="border-t border-gray-100">
                    <td className="px-3 py-2 font-semibold text-brand-800">{c}</td>
                    <td className="px-3 py-2 text-gray-700">{w}</td>
                    <td className="px-3 py-2 text-gray-700">{t}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Mosquito Larvae Identification Key Facts</h2>
          <div className="rounded-xl border border-navy-100 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Size', '5–8 mm long (about the size of a grain of rice)'],
                  ['Colour', 'Brown, black, or dark grey'],
                  ['Shape', 'Worm-like with distinct head, thorax, abdomen'],
                  ['Behaviour', 'Hang at water surface; wiggle in S-shape when disturbed'],
                  ['Where found', 'Standing water only (never on land or in flowing water)'],
                  ['Lifecycle', 'Egg → Larva (4–14 days) → Pupa (1–4 days) → Adult'],
                  ['Total egg-to-adult time', '7–14 days at 20–25°C'],
                  ['Diet', 'Filter-feed on bacteria and microorganisms in water'],
                  ['Predators', 'Fish (goldfish, koi, mosquitofish), dragonfly larvae, frogs'],
                  ['Cannot survive in', 'Flowing water (creeks/rivers), chlorinated pools, dry environments'],
                  ['Threat to humans', 'NONE — cannot bite. Adults are the threat.'],
                  ['Most effective removal', 'Drain water, or treat with BTI (Mosquito Dunks/Bits)'],
                ].map(([k, v]) => (
                  <tr key={k} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-2 font-semibold text-brand-800 bg-brand-50 w-1/3">{k}</td>
                    <td className="px-4 py-2 text-gray-700">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <h2>The Mosquito Lifecycle (Why It Matters)</h2>
          <p>Mosquitoes have 4 distinct life stages, all but the last one in water:</p>
          <ol>
            <li><strong>Egg (1–3 days)</strong> — Female mosquitoes lay eggs in standing water or in moist soil that floods. Some species lay floating egg rafts; others lay individually.</li>
            <li><strong>Larva (4–14 days)</strong> — &ldquo;Wigglers.&rdquo; Filter-feed on water microorganisms. Grow through 4 instars, shedding skin each time. This is the stage you can target with BTI.</li>
            <li><strong>Pupa (1–4 days)</strong> — &ldquo;Tumblers.&rdquo; Comma-shaped, don&rsquo;t feed but still in water. Transitioning into adult form.</li>
            <li><strong>Adult</strong> — Emerges from pupa, flies away, mates within 24 hours. Females then seek a blood meal to develop eggs and the cycle repeats.</li>
          </ol>
          <p>Total egg-to-adult time is about <strong>7–14 days</strong> in typical Ontario summer temperatures. This is why <strong>weekly yard inspection</strong> is the most effective DIY mosquito prevention — you interrupt the cycle before adults emerge.</p>

          <h2>Where to Look on Your Property</h2>
          <p>Walk your yard every 7 days between May and September. The <strong>highest-yield inspection spots</strong> for mosquito larvae:</p>
          <ul>
            <li><strong>Clogged gutters</strong> — #1 cause of urban mosquito problems</li>
            <li><strong>Rain barrels without screens</strong></li>
            <li><strong>Plant pot saucers</strong> (especially under outdoor potted plants)</li>
            <li><strong>Kids&rsquo; toys left outside</strong> (toy buckets, sandbox toys, kiddie pools)</li>
            <li><strong>Tarps</strong> over BBQ, boats, woodpiles — water pools on top</li>
            <li><strong>Birdbaths</strong> not refreshed weekly</li>
            <li><strong>Old tires</strong> in side yards or garages</li>
            <li><strong>Tree holes</strong> and stump cavities</li>
            <li><strong>Drainage ditches</strong> at property edges</li>
            <li><strong>Low spots</strong> in lawn that pool after rain</li>
            <li><strong>Pet water bowls</strong> left outside more than 3 days</li>
            <li><strong>Disused pools, hot tubs, fountains</strong></li>
          </ul>

          <aside aria-label="Professional mosquito control" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">Or let us handle it</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">BuzzSkito&rsquo;s professional barrier spray covers your whole yard from $99 — backed by 150+ five-star reviews and serving 19 GTA cities.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/free-yard-assessment" className="btn-primary-sm">Get a Free Quote →</Link>
              <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
            </div>
          </aside>

          <h2>How to Get Rid of Mosquito Larvae (Ranked by Effectiveness)</h2>
          <ol>
            <li><strong>Drain the water (best).</strong> Empty the container, fix the drainage, or eliminate the water source. 100% effective, free, instant.</li>
            <li><strong>BTI Mosquito Dunks or Bits.</strong> Drop in any water you can&rsquo;t drain (rain barrel, ornamental pond, drainage ditch). BTI is a soil bacterium that kills only mosquito larvae — completely safe for fish, frogs, pets, humans, beneficial insects. $10–$20 at Canadian Tire / Home Depot. Lasts 30 days per dunk. <Link href="/blog/mosquito-dunks-canada-guide">Full Mosquito Dunks Canada guide</Link>, or compare the two formats in <Link href="/blog/mosquito-bits-canada-vs-dunks">Mosquito Bits vs Dunks</Link> — Bits act faster, Dunks last longer.</li>
            <li><strong>Add fish to ornamental ponds.</strong> Goldfish, koi, and mosquitofish eat larvae aggressively. A stocked pond rarely needs treatment.</li>
            <li><strong>Cooking oil or dish soap (last resort).</strong> A small amount on the water surface disrupts the larvae&rsquo;s breathing siphon. Effective in disposable containers; don&rsquo;t use in environmental water (kills other organisms).</li>
          </ol>

          <h2>The Bigger Picture</h2>
          <p>Larvae control on your own property eliminates mosquitoes <em>born on your property</em>. But adult mosquitoes from neighbours&rsquo; yards, ravines, creeks, and conservation areas can fly up to 3 km — they will still find your yard regardless of how thoroughly you eliminate your own breeding sites.</p>
          <p>For complete yard mosquito control, combine larval source reduction with <Link href="/mosquito-control">professional barrier spray</Link> that targets adult mosquitoes resting on your vegetation. Larvae control + barrier spray + habitat modification is the three-leg stool of effective residential mosquito management.</p>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/mosquito-dunks-canada-guide">Mosquito Dunks Canada Complete Guide</Link></li>
            <li><Link href="/blog/mosquito-bits-canada-vs-dunks">Mosquito Bits vs Dunks — Which Kills Larvae Faster?</Link></li>
            <li><Link href="/blog/hidden-mosquito-breeding-spots-backyard">Hidden Mosquito Breeding Spots in Your Backyard</Link></li>
            <li><Link href="/blog/natural-mosquito-repellent-ontario">Natural Mosquito Repellent — What Works</Link></li>
            <li><Link href="/blog/mosquito-season-gta-when-does-it-start">When Does Mosquito Season Start in Ontario?</Link></li>
            <li><Link href="/mosquito-control">Professional Mosquito Control Service</Link></li>
          </ul>
        </div>
      </article>

      <CTASection heading="Drain the Water + Spray the Yard = Mosquito Free" subtext="BuzzSkito barrier spray controls adult mosquitoes flying in from off-property. From $99." variant="dark" />
    </>
  )
}
