import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'

const SLUG = 'mosquito-larvae-identification'
const DATE = '2026-04-28'
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
]

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Larvae · How to Identify & Remove (Canada 2026)',
  description: 'How to identify mosquito larvae, where they live, how to get rid of them. Visual identification, lifecycle, BTI treatment, fish predators.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

export default function MosquitoLarvaePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Visual identification and removal guide for mosquito larvae.', slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Mosquito Larvae', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Mosquito Larvae</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">How to identify, where they live, and how to get rid of them — Ontario-focused.</p>
        </div>
      </section>

      <section className="bg-amber-50 border-y-4 border-amber-300 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-amber-700 uppercase tracking-wider mb-2">Quick Answer</p>
          <h2 className="text-xl font-extrabold text-brand-900 mb-3">What do mosquito larvae look like?</h2>
          <p className="text-base text-gray-800 leading-relaxed">
            <strong>Mosquito larvae are 5–8 mm long, brown-black wiggling worm-like creatures that live in standing water.</strong> They hang upside-down at the water surface with a breathing siphon poking through the surface tension. When disturbed, they wiggle downward in a distinctive S-shape — earning their nickname &ldquo;wigglers.&rdquo; They live for 4–14 days in water before emerging as adult mosquitoes. Found in: rain barrels, clogged gutters, bird baths, plant saucers, neglected pools, ornamental ponds without fish, tarps with pooled water, and tree holes. Removal: drain the water, or treat with BTI Mosquito Dunks ($10–$20 at Canadian Tire) which kill larvae in 24 hours and are 100% safe for pets, fish, and humans.
          </p>
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

          <h2>How to Get Rid of Mosquito Larvae (Ranked by Effectiveness)</h2>
          <ol>
            <li><strong>Drain the water (best).</strong> Empty the container, fix the drainage, or eliminate the water source. 100% effective, free, instant.</li>
            <li><strong>BTI Mosquito Dunks or Bits.</strong> Drop in any water you can&rsquo;t drain (rain barrel, ornamental pond, drainage ditch). BTI is a soil bacterium that kills only mosquito larvae — completely safe for fish, frogs, pets, humans, beneficial insects. $10–$20 at Canadian Tire / Home Depot. Lasts 30 days per dunk. <Link href="/blog/mosquito-dunks-canada-guide">Full Mosquito Dunks Canada guide here</Link>.</li>
            <li><strong>Add fish to ornamental ponds.</strong> Goldfish, koi, and mosquitofish eat larvae aggressively. A stocked pond rarely needs treatment.</li>
            <li><strong>Cooking oil or dish soap (last resort).</strong> A small amount on the water surface disrupts the larvae&rsquo;s breathing siphon. Effective in disposable containers; don&rsquo;t use in environmental water (kills other organisms).</li>
          </ol>

          <h2>The Bigger Picture</h2>
          <p>Larvae control on your own property eliminates mosquitoes <em>born on your property</em>. But adult mosquitoes from neighbours&rsquo; yards, ravines, creeks, and conservation areas can fly up to 3 km — they will still find your yard regardless of how thoroughly you eliminate your own breeding sites.</p>
          <p>For complete yard mosquito control, combine larval source reduction with <Link href="/mosquito-control">professional barrier spray</Link> that targets adult mosquitoes resting on your vegetation. Larvae control + barrier spray + habitat modification is the three-leg stool of effective residential mosquito management.</p>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/mosquito-dunks-canada-guide">Mosquito Dunks Canada Complete Guide</Link></li>
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
