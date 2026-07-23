import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'

const SLUG = 'what-flowers-attract-mosquitoes'
const DATE = '2026-07-15'
const TITLE = 'What Flowers & Plants Attract Mosquitoes? An Ontario Garden Guide'
const EXCERPT = 'Flowers don’t bite you — but water-holding plants like bromeliads, taro and water lettuce breed mosquitoes, while nectar blooms feed adults. Ontario guide.'

const FAQS = [
  {
    question: 'Do flowers attract mosquitoes?',
    answer: 'Flowers do not attract mosquitoes to bite you — female mosquitoes find people by CO2, body heat, and skin odour, not by flowers. However, both male and female mosquitoes drink flower nectar as their main energy source, so a garden packed with nectar-rich blooms can help sustain the adult mosquitoes already living nearby. The bigger issue is not the flower itself but any standing water the plant or its container holds. A blooming plant sitting in a saucer of rainwater is a far bigger mosquito problem than the flower is.',
  },
  {
    question: 'What flowers and plants attract mosquitoes the most?',
    answer: 'The plants most associated with mosquitoes are the ones that trap standing water where larvae can develop: bromeliads (water pools in the leaf axils), taro and elephant ear, water lettuce and water hyacinth in ponds, cut or hollow bamboo, and any plant whose leaves or cupped structure hold rainwater. Dense, nectar-heavy plantings — large sweeps of flowering perennials, ivy, and thick ground cover — also help by feeding adult mosquitoes and giving them cool, shaded, humid daytime resting habitat. In every case the mechanism is water and shelter, not the bloom.',
  },
  {
    question: 'Do water gardens and ponds attract mosquitoes?',
    answer: 'Yes — a still, unmanaged water garden is one of the strongest mosquito magnets in an Ontario yard. Female mosquitoes lay eggs directly on calm water, and larvae need only 7 to 12 days of warm, standing water to become biting adults. Water features with floating plants like water lettuce or water hyacinth are worse, because the plants block circulation and shelter larvae from fish. A water garden becomes low-risk when you add movement (a pump, fountain, or bubbler), stock mosquito-eating fish, or dose it with a BTI (Bacillus thuringiensis israelensis) larvicide, which Health Canada registers as safe for ponds with fish and wildlife.',
  },
  {
    question: 'Does standing water in plants attract mosquitoes?',
    answer: 'Yes — and this is the single most important point. Mosquitoes do not need much water: a bottle-cap volume held in a bromeliad cup, a plant saucer, a potted-plant drainage tray, or a folded leaf can produce dozens of adult mosquitoes. Public Health Ontario and the Public Health Agency of Canada both list standing water in containers and plants as a primary breeding source for the Culex mosquitoes that carry West Nile virus. Emptying or refreshing that water every few days breaks the breeding cycle before larvae can mature.',
  },
  {
    question: 'Do bromeliads attract mosquitoes?',
    answer: 'Bromeliads are notorious mosquito breeders because their leaves overlap into a central cup (a phytotelma) that naturally holds water. In warm conditions those cups can breed mosquitoes continuously. In Ontario, bromeliads are grown as houseplants and patio plants, so the risk is seasonal and container-scale, but it is real. Flush the central cup with fresh water every 3 to 5 days, or move bromeliads indoors and away from where the cups can catch rain.',
  },
  {
    question: 'Do marigolds, lavender, and citronella attract mosquitoes?',
    answer: 'No — these are on the opposite side of the ledger. Marigolds, lavender, citronella grass, lemongrass, catnip, basil, and rosemary release aromatic compounds that mildly repel mosquitoes when the leaves are crushed or warmed. The effect is small and localized, not a yard-wide shield, but these plants do not attract mosquitoes. See our guide to mosquito-repellent plants for Ontario for how to use them around seating areas.',
  },
  {
    question: 'What garden plants bring mosquitoes into a yard?',
    answer: 'Two categories: water-holders and shelter-makers. Water-holders include bromeliads, taro, elephant ear, teasel, cup plant, banana plants, and any cupped-leaf or hollow-stem plant that pools rain. Shelter-makers are dense plantings that create cool, humid, still air — thick hostas and ferns, ivy, tall ornamental grasses, and untrimmed hedges — which mosquitoes use as daytime resting spots before coming out to feed at dusk. Neither category attracts mosquitoes to bite you; they sustain and shelter the population that is already there.',
  },
  {
    question: 'Do hostas attract mosquitoes?',
    answer: 'Hostas do not attract mosquitoes chemically, but a dense bed of large-leaved hostas creates exactly the cool, shaded, humid, still micro-climate mosquitoes rest in during the heat of the day. Cupped hosta leaves can also briefly hold rainwater. The plant is not the enemy — the habitat is. Thinning dense beds, improving airflow, and treating the underside of the foliage with a barrier spray addresses the resting-habitat problem without removing the plants.',
  },
  {
    question: 'Does a bird bath or plant saucer really breed mosquitoes?',
    answer: 'Yes. A bird bath, plant saucer, potted-plant tray, or any dish that holds water for more than about a week is a functional mosquito nursery. Culex mosquitoes strongly prefer these small, warm, organically-rich container waters. Refresh bird baths every 2 to 3 days, drill drainage holes or tip out saucers after rain, and check the hidden spots — gutters, tarps, toys, and the folds of pool covers — where the same thing happens unseen.',
  },
  {
    question: 'How do I stop my garden from attracting mosquitoes?',
    answer: 'Start with water: walk the property after rain and empty, drain, or refresh every container, saucer, bromeliad cup, and low spot on a 3-to-5-day cycle. Add movement or BTI to ponds and water gardens. Open up dense plantings and hedges to reduce resting habitat. Grow repellent plants near seating rather than attract-heavy sweeps far from the patio. Then, for yard-wide control, a professional barrier spray treats the underside of foliage where mosquitoes rest — the combination of source reduction plus barrier treatment is what actually clears a yard.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: 'What Flowers & Plants Attract Mosquitoes? Ontario Garden Guide 2026',
  description: 'Flowers don’t attract mosquitoes to bite you — water-holding plants (bromeliads, taro, water lettuce), water gardens, and standing water in plant saucers do. The real culprits and fixes for Ontario yards.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

export default function WhatFlowersAttractMosquitoesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: EXCERPT, slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'What Flowers & Plants Attract Mosquitoes?', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">What Flowers &amp; Plants Attract Mosquitoes?</span>
          </nav>
          <span className="bg-brand-800 text-brand-200 text-xs px-3 py-1 rounded-full mb-4 inline-block">Mosquito Control</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-brand-300 text-sm">Published {new Date(DATE).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })} · By BuzzSkito</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12 prose-brand">
        <div className="not-prose bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Quick Answer</p>
          <p className="text-gray-800 text-[15px] leading-relaxed font-medium">Flowers don&rsquo;t attract mosquitoes to bite you &mdash; people do that with CO2, heat, and body odour. Plants matter in three ways: water-holding species like bromeliads, taro, and water lettuce breed larvae in trapped water; nectar-rich blooms feed adult mosquitoes; and dense foliage shelters them by day. The real driver is standing water in the planting, not the flower itself.</p>
          <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
            <li>Mosquitoes find you by CO2, body heat, moisture, and skin odour &mdash; not by the colour or scent of your flowers.</li>
            <li>A mosquito needs only a bottle-cap of standing water and 7 to 12 warm days to develop from egg to biting adult.</li>
            <li>Water-holding plants like bromeliads, taro, water lettuce, and cut bamboo trap the standing water that actually breeds larvae.</li>
            <li>Both sexes drink flower nectar for energy; females take blood only to develop eggs, so nectar-rich plantings sustain adults but don&rsquo;t create them.</li>
            <li>Dense foliage matters for shelter by structure, not species &mdash; mosquitoes rest in cool, shaded, still air during the day.</li>
            <li>A potted plant&rsquo;s drainage saucer is one of the most overlooked breeding sites in GTA yards.</li>
          </ul>
          <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control &middot; 150+ five-star Google reviews</p>
        </div>

        <p className="text-lg text-gray-600 not-prose border-l-4 border-amber-400 pl-5 py-2 mb-8">
          It is one of the most common gardening questions we hear in the GTA: <strong>&ldquo;Which flowers am I planting that are attracting all these mosquitoes?&rdquo;</strong> The honest answer surprises people. No flower reaches out and pulls mosquitoes into your yard to bite you &mdash; that job is done by your breath, body heat, and skin odour. What certain plants <em>do</em> is feed adult mosquitoes with nectar, shelter them in cool shade, and, above all, <em>hold standing water</em> where the next generation is born. Here is exactly which plants matter, why, and what to do about it in an Ontario garden.
        </p>

        <h2>Do flowers attract mosquitoes?</h2>
        <p>Not in the way most people mean. A female mosquito hunting for a blood meal locates you by carbon dioxide from your breath, your body heat, moisture, and hundreds of skin-odour compounds &mdash; not by the colour or scent of your flowers. So a rose bed does not draw biting mosquitoes toward it the way it draws bees.</p>
        <p>There is one genuine connection, though, and it is worth understanding. <strong>Both male and female mosquitoes feed on flower nectar</strong> &mdash; sugar is their primary energy source, and males feed on nothing else. Females only take blood to develop eggs; the rest of the time they, too, run on nectar. So a garden filled with abundant, easy-access nectar can help <em>sustain</em> the adult mosquito population already living in and around your yard. It is a supporting factor, not a magnet. Removing the flowers would not fix a mosquito problem, and no one should tear out a pollinator garden over it. But it explains why lush, heavily-planted yards often feel buggier than sparse ones: the plantings feed and shelter the adults, and usually hold the water that breeds them too.</p>

        <h2>What flowers and plants attract mosquitoes the most?</h2>
        <p>The plants worth knowing about fall into three groups, ranked here by how much they actually matter. Almost all of the real risk is in the first group.</p>

        <h3>1. Water-holding plants (the real culprits)</h3>
        <p>These are the plants that trap standing water in a cup, axil, hollow, or saucer &mdash; and standing water is where mosquitoes breed. A mosquito needs only a bottle-cap of water and 7 to 12 warm days to go from egg to biting adult. Any plant that holds even a small pool of rainwater becomes a functional nursery.</p>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden">
            <thead className="bg-brand-50">
              <tr>
                <th className="px-3 py-2 text-left font-bold text-brand-800">Plant</th>
                <th className="px-3 py-2 text-left font-bold text-brand-800">Why it holds water</th>
                <th className="px-3 py-2 text-left font-bold text-brand-800">Ontario context</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Bromeliads</td><td className="px-3 py-2">Overlapping leaves form a central cup that pools water</td><td className="px-3 py-2">Houseplant / patio plant &mdash; flush the cup weekly</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Taro &amp; elephant ear</td><td className="px-3 py-2">Large cupped leaves and boggy soil hold water</td><td className="px-3 py-2">Popular container &amp; pond-edge ornamental</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Water lettuce &amp; water hyacinth</td><td className="px-3 py-2">Float on still water, block circulation, shelter larvae</td><td className="px-3 py-2">Common in backyard water gardens</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Bamboo (cut / hollow)</td><td className="px-3 py-2">Open cut stems and internodes catch and hold rain</td><td className="px-3 py-2">Cut stumps &amp; screens are a classic breeding spot</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Cup plant &amp; teasel</td><td className="px-3 py-2">Paired leaves clasp the stem and form a water cup</td><td className="px-3 py-2">Native / naturalized in gardens and meadows</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Banana &amp; canna</td><td className="px-3 py-2">Leaf bases and folds trap rainwater</td><td className="px-3 py-2">Grown as tropical container accents</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2 font-semibold">Any potted plant with a saucer</td><td className="px-3 py-2">Drainage tray or saucer holds standing water</td><td className="px-3 py-2">The most overlooked breeder in GTA yards</td></tr>
            </tbody>
          </table>
        </div>

        <h3>2. Nectar-heavy plantings (they feed the adults)</h3>
        <p>Large sweeps of nectar-rich flowers, flowering ivy, and dense perennial borders provide the sugar meals that keep adult mosquitoes alive between bites. This is a genuine but secondary effect &mdash; it supports a population, it does not create one. You do not need to remove nectar plants. Just be aware that a heavily-planted yard gives adults more to feed on, so pairing it with good water control and barrier treatment matters more.</p>

        <h3>3. Dense foliage (it shelters them by day)</h3>
        <p>Mosquitoes are weak fliers that cannot tolerate direct midday sun. They spend most of the day <em>resting</em> in cool, shaded, humid, still air &mdash; and dense plantings provide exactly that. Thick hostas and ferns, ivy, tall ornamental grasses, and untrimmed hedges are prime daytime refuges. The plant species barely matters; the structural density does. This is the same reason people wrongly blame cedars &mdash; the shade and trapped moisture of a dense hedge, not the tree, is the draw. We break that down in <Link href="/blog/do-cedar-trees-attract-mosquitoes" className="text-brand-700 underline">do cedar trees attract mosquitoes?</Link></p>

        <h2>What garden plants bring mosquitoes into a yard?</h2>
        <p>Putting the three groups together, the garden plants most likely to increase mosquito pressure are the ones that combine <em>water-holding</em> with <em>dense shelter</em>. A bromeliad in a shaded corner, a taro at a pond edge, or a thick, untrimmed hedge over a boggy, poorly-drained bed is the worst-case stack: a breeding source and a resting refuge in one spot.</p>
        <p>Crucially, none of these plants attracts mosquitoes to bite you. They sustain and shelter the mosquitoes already produced by standing water on your property or your neighbour&rsquo;s. That is why the fix is almost never &ldquo;remove the plant&rdquo; &mdash; it is &ldquo;remove the water and open up the shelter.&rdquo; Many of the worst offenders are not garden plants at all but the hidden containers around them; see our <Link href="/blog/hidden-mosquito-breeding-spots-backyard" className="text-brand-700 underline">hidden mosquito breeding spots guide</Link> for the full checklist.</p>

        <aside aria-label="Professional mosquito control" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
          <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">Or let us handle it</h3>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">BuzzSkito&rsquo;s professional barrier spray covers your whole yard from $99 &mdash; treating the underside of foliage where mosquitoes rest. Backed by 150 five-star reviews and serving 19 GTA cities.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/free-yard-assessment" className="btn-primary-sm">Get a Free Quote &rarr;</Link>
            <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
          </div>
        </aside>

        <h2>Do water gardens attract mosquitoes?</h2>
        <p>Yes &mdash; a still, unmanaged water garden is one of the strongest mosquito magnets you can install. Female mosquitoes lay their eggs directly on the surface of calm water, and in the warm water of a summer pond, larvae can complete development in as little as a week. Floating plants make it worse: water lettuce and water hyacinth block surface circulation and give larvae a canopy to hide under, out of reach of any fish.</p>
        <p>The good news is that a water garden is easy to convert from a breeder into a non-issue. You do not have to drain it. You have to make the water unwelcome to larvae:</p>
        <ul>
          <li><strong>Add movement.</strong> A pump, fountain, bubbler, or waterfall keeps the surface disturbed. Mosquitoes need still water to lay eggs; moving water almost never breeds them.</li>
          <li><strong>Stock mosquito-eating fish.</strong> Goldfish and native minnows eat larvae. (Note that mosquitofish, <em>Gambusia</em>, are not permitted for release in Ontario &mdash; use locally-appropriate fish.)</li>
          <li><strong>Use a BTI larvicide.</strong> BTI (<em>Bacillus thuringiensis israelensis</em>) is a naturally-occurring soil bacterium sold as floating &ldquo;dunks&rdquo; or granules. It kills mosquito larvae specifically and is registered by Health Canada as safe for ponds containing fish, pets, birds, and wildlife.</li>
          <li><strong>Thin floating plants.</strong> Keep at least part of the surface open so it stays moving and reachable by fish.</li>
        </ul>

        <h2>Does standing water in plants attract mosquitoes?</h2>
        <p>This is the single most important sentence in this article: <strong>it is not the plant that attracts mosquitoes, it is the water the plant holds.</strong> Mosquitoes need astonishingly little of it. A bromeliad&rsquo;s central cup, a potted-plant saucer, the fold of an elephant-ear leaf, a bird bath, or a low spot in a garden bed that stays wet after rain &mdash; each can produce dozens of biting adults from a volume you would not think twice about.</p>
        <p>Public Health Ontario and the Public Health Agency of Canada (PHAC) both identify standing water in containers and plantings as a primary breeding source for <em>Culex</em> mosquitoes, the group responsible for spreading West Nile virus in the province. Their guidance is consistent and simple: eliminate or refresh standing water on a regular cycle so larvae never have time to mature. Because the egg-to-adult cycle runs about 7 to 12 days in Ontario summer temperatures, a <strong>refresh-or-empty cycle of every 3 to 5 days</strong> breaks the cycle reliably.</p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full text-sm border-collapse border border-navy-100 rounded-lg overflow-hidden">
            <thead className="bg-brand-50">
              <tr>
                <th className="px-3 py-2 text-left font-bold text-brand-800">Myth</th>
                <th className="px-3 py-2 text-left font-bold text-brand-800">Fact</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-t border-navy-50"><td className="px-3 py-2">&ldquo;My flowers are attracting mosquitoes.&rdquo;</td><td className="px-3 py-2">Flowers feed adults with nectar; they don&rsquo;t lure biting mosquitoes to your yard.</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">&ldquo;Bright or fragrant blooms draw mosquitoes.&rdquo;</td><td className="px-3 py-2">Mosquitoes find hosts by CO2, heat, and skin odour &mdash; not flower colour or scent.</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">&ldquo;A little water in a pot saucer is harmless.&rdquo;</td><td className="px-3 py-2">A bottle-cap of standing water can breed dozens of mosquitoes.</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">&ldquo;I need to rip out the plants.&rdquo;</td><td className="px-3 py-2">You need to remove the water and open up dense shelter &mdash; not the plants.</td></tr>
              <tr className="border-t border-navy-50"><td className="px-3 py-2">&ldquo;Repellent plants like citronella keep my yard clear.&rdquo;</td><td className="px-3 py-2">Their effect is mild and local; useful near seating, not a yard-wide shield.</td></tr>
            </tbody>
          </table>
        </div>

        <h2>The Ontario garden fix: what to actually do</h2>
        <p>Here is the practical, ordered checklist for a GTA yard &mdash; from highest to lowest leverage. The first two steps do most of the work.</p>
        <ol>
          <li><strong>Walk the yard after every rain and hunt water.</strong> Empty or refresh every plant saucer, potted-plant tray, bromeliad cup, bird bath, and low, boggy bed on a 3-to-5-day cycle. Drill drainage holes in saucers, or stop using them outdoors. Tip out anything that collects rain.</li>
          <li><strong>Fix the pond or water garden.</strong> Add a pump or fountain for movement, stock appropriate fish, and drop in a BTI dunk. This converts your biggest single source into a non-issue.</li>
          <li><strong>Manage water-holding ornamentals.</strong> Flush bromeliad and taro cups weekly. Fill open bamboo cuts with sand or seal them. Keep leaf folds and container bases from pooling water.</li>
          <li><strong>Open up dense plantings.</strong> Thin thick hosta and fern beds, prune untrimmed hedges to let air and light through, and clear leaf litter from bed edges. This removes the cool, humid daytime resting habitat mosquitoes depend on.</li>
          <li><strong>Plant smart, not just less.</strong> Put <Link href="/blog/mosquito-repellent-plants-ontario" className="text-brand-700 underline">mosquito-repellent plants for Ontario</Link> &mdash; citronella grass, lavender, catnip, basil, rosemary &mdash; near seating areas where you can brush the leaves, rather than nectar-heavy sweeps far from the patio.</li>
          <li><strong>Treat the resting surfaces.</strong> For yard-wide control, a professional barrier spray coats the underside of foliage and the interior of dense plantings &mdash; exactly where the adults hide by day. Source reduction plus barrier treatment is the combination that actually clears a yard, and it is the backbone of our <Link href="/blog/ultimate-backyard-mosquito-control-guide" className="text-brand-700 underline">ultimate backyard mosquito control guide</Link>.</li>
        </ol>

        <h2>The bottom line</h2>
        <p>No flower is reaching out to pull mosquitoes into your yard to bite you. What plants do is more mundane and more fixable: nectar feeds the adults, dense foliage shelters them, and &mdash; the one that really counts &mdash; water-holding plants and their containers breed the next generation. In an Ontario garden, the highest-value hour you will spend all summer is walking the property after a rain, finding every pocket of standing water in and around your plantings, and clearing it. Do that, keep your pond moving, open up the dense shade, and let a barrier spray handle the resting surfaces &mdash; and your garden stops being a mosquito hatchery without losing a single flower you love.</p>
        <p>If you want the water sources found and the resting habitat treated for you, book a <Link href="/free-yard-assessment" className="text-brand-700 underline">free yard assessment</Link>. We walk the property, point out the breeding and rest zones hiding in your plantings, and give you an honest quote &mdash; barrier spray starts from $99, and we serve 19 cities across the GTA.</p>

        <h2>Related Guides</h2>
        <ul>
          <li><Link href="/blog/mosquito-repellent-plants-ontario" className="text-brand-700 hover:underline">Best Mosquito-Repellent Plants for Ontario Gardens</Link></li>
          <li><Link href="/blog/do-cedar-trees-attract-mosquitoes" className="text-brand-700 hover:underline">Do Cedar Trees Attract Mosquitoes?</Link></li>
          <li><Link href="/blog/hidden-mosquito-breeding-spots-backyard" className="text-brand-700 hover:underline">Hidden Mosquito Breeding Spots in Your Backyard</Link></li>
          <li><Link href="/blog/ultimate-backyard-mosquito-control-guide" className="text-brand-700 hover:underline">The Ultimate Backyard Mosquito Control Guide</Link></li>
          <li><Link href="/mosquito-control" className="text-brand-700 hover:underline">BuzzSkito Professional Mosquito Control Services</Link></li>
        </ul>
      </article>

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Frequently Asked Questions</h2>
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

      <CTASection heading="It&rsquo;s Not the Flowers — It&rsquo;s the Water and the Shade" subtext="Professional barrier spray targets the foliage where mosquitoes rest, and we find the breeding water hiding in your plantings. Free quote available." />
    </>
  )
}
