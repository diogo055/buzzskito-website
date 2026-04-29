import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import AuthorByline from '@/components/AuthorByline'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { MOSQUITO_BLOGS, TICK_BLOGS } from '@/lib/constants'

const SLUG = 'how-to-keep-ticks-out-of-yard-ontario'
const DATE = '2026-04-29'
const TITLE = 'How to Keep Ticks Out of Your Yard (Ontario 2026 Lyme Disease Guide)'

const FAQS = [
  { question: `Create a 3-Foot Wood-Chip or Gravel Barrier Between Lawn and Woods`, answer: `The single most effective tick-prevention measure is a physical barrier between maintained lawn and natural vegetation. Wood chips or gravel at least 3 feet wide breaks the humidity gradient ticks need to survive — they dry out crossing the barrier. This is the CDC-recommended "tick zone" defense.` },
  { question: `Keep Grass Cut Short (2 inches or less)`, answer: `Ticks need humidity to survive. Tall grass holds humidity at the soil level where ticks live. Mowing to 2 inches or less significantly reduces tick survival on the lawn surface. Combine with edge-zone barrier spray for maximum effect.` },
  { question: `Remove Leaf Litter Weekly During Active Season`, answer: `Leaf litter is prime tick habitat — it holds humidity, hides ticks from sun, and accumulates in garden bed edges where they thrive. Rake or vacuum leaf litter weekly through spring and fall. Composting leaves on-property is fine — just keep the compost pile away from play areas.` },
  { question: `Move Woodpiles, Bird Feeders, and Compost Away from Play Areas`, answer: `Mice are the primary reservoir of Lyme disease bacteria — and they nest in woodpiles, under bird feeders, and in compost. Locate these features at least 30 feet from where children play. If you must keep them close, treat the surrounding area with barrier spray.` },
  { question: `Seal Mouse-Entry Points to Your House`, answer: `Tick prevention starts with mouse prevention. Seal foundation cracks, garage gaps, basement window wells, and dryer vents. The fewer mice on your property, the fewer ticks. This is a long-term play but highly effective.` },
  { question: `Plant Deer-Resistant Landscaping if You're Near Conservation Land`, answer: `White-tailed deer are the primary host for adult blacklegged ticks. Properties bordering conservation areas, ravines, or rural land that attract deer accumulate more ticks. Replace deer-favorite plants (hostas, daylilies, tulips) with deer-resistant alternatives (lavender, salvia, marigolds, Russian sage).` },
]

export const metadata: Metadata = buildMetadata({
  title: `How to Keep Ticks Out of Your Yard (Ontario 2026 Lyme Disease Guide)`,
  description: `Ontario homeowner's complete guide to keeping ticks out of your yard. 10 proven steps for Lyme disease prevention, with a focus on the GTA's confirmed blacklegged tick zones.`,
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

export default function HowToKeepTicksOutOfYardOntarioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: `Ontario homeowner's complete guide to keeping ticks out of your yard. 10 proven steps for Lyme disease prevention, with a focus on the GTA's confirmed blacklegged tick zones.`, slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: TITLE, url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1 flex-wrap">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">How to Keep Ticks Out of Your Yard</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">How to Keep Ticks Out of Your Yard — Ontario 2026 Lyme Disease Guide</h1>
          <p className="text-brand-300 text-sm">Practical, evidence-backed Ontario homeowner guide.</p>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <section className="bg-amber-50 border-y-4 border-amber-300 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-amber-700 uppercase tracking-wider mb-2">Quick Answer</p>
          <h2 className="text-xl font-extrabold text-brand-900 mb-3">How to Keep Ticks Out of Your Yard — Ontario 2026 Lyme Disease Guide</h2>
          <p className="text-base text-gray-800 leading-relaxed">Ticks live in the 1–3 metre transition zone where lawn meets woods, garden bed edges, leaf litter, woodpiles, and fence-line vegetation — not in open lawns. To keep ticks out: (1) maintain a 3-foot wood-chip or gravel barrier between lawn and woods, (2) keep grass cut short and remove leaf litter weekly, (3) move woodpiles and bird feeders away from play areas, (4) seal mouse-entry points (mice are tick reservoirs), and (5) apply professional tick barrier spray to the specific transition zones twice per season — late May (nymph emergence) and August/September (adult activity). Ontario has confirmed blacklegged tick populations across the GTA — Lyme disease prevention starts with yard treatment.</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12 prose-brand">
        <AuthorByline datePublished={DATE} />

        <h3>1. Create a 3-Foot Wood-Chip or Gravel Barrier Between Lawn and Woods</h3>
        <p>The single most effective tick-prevention measure is a physical barrier between maintained lawn and natural vegetation. Wood chips or gravel at least 3 feet wide breaks the humidity gradient ticks need to survive — they dry out crossing the barrier. This is the CDC-recommended "tick zone" defense.</p>

        <h3>2. Keep Grass Cut Short (2 inches or less)</h3>
        <p>Ticks need humidity to survive. Tall grass holds humidity at the soil level where ticks live. Mowing to 2 inches or less significantly reduces tick survival on the lawn surface. Combine with edge-zone barrier spray for maximum effect.</p>

        <h3>3. Remove Leaf Litter Weekly During Active Season</h3>
        <p>Leaf litter is prime tick habitat — it holds humidity, hides ticks from sun, and accumulates in garden bed edges where they thrive. Rake or vacuum leaf litter weekly through spring and fall. Composting leaves on-property is fine — just keep the compost pile away from play areas.</p>

        <h3>4. Move Woodpiles, Bird Feeders, and Compost Away from Play Areas</h3>
        <p>Mice are the primary reservoir of Lyme disease bacteria — and they nest in woodpiles, under bird feeders, and in compost. Locate these features at least 30 feet from where children play. If you must keep them close, treat the surrounding area with barrier spray.</p>

        <h3>5. Seal Mouse-Entry Points to Your House</h3>
        <p>Tick prevention starts with mouse prevention. Seal foundation cracks, garage gaps, basement window wells, and dryer vents. The fewer mice on your property, the fewer ticks. This is a long-term play but highly effective.</p>

        <h3>6. Plant Deer-Resistant Landscaping if You're Near Conservation Land</h3>
        <p>White-tailed deer are the primary host for adult blacklegged ticks. Properties bordering conservation areas, ravines, or rural land that attract deer accumulate more ticks. Replace deer-favorite plants (hostas, daylilies, tulips) with deer-resistant alternatives (lavender, salvia, marigolds, Russian sage).</p>

        <h3>7. Apply Professional Tick Barrier Spray Twice Per Season</h3>
        <p>Late May and August/September are the optimal application windows — late May targets emerging nymphs (the highest-risk life stage for Lyme disease transmission) and August/September targets adult ticks before they overwinter. Spray must be applied to the specific 1–3 metre transition zones, not broadcast across the lawn. Single treatments start at $99.</p>

        <h3>8. Inspect Yourself and Pets After Outdoor Activity</h3>
        <p>Lyme disease bacteria typically require 24–36 hours of tick attachment to transmit. Daily tick checks dramatically reduce infection risk. Focus checks on warm, hidden areas: behind ears, scalp, armpits, groin, behind knees. For dogs: between toes, under collars, around ears.</p>

        <h3>9. Use Permethrin-Treated Clothing for High-Risk Outdoor Activity</h3>
        <p>Permethrin kills ticks on contact. You can buy pre-treated clothing or treat your own outdoor clothes (treatment lasts ~70 washes). Especially valuable for hiking the Bruce Trail, working in conservation-area-adjacent yards, or outdoor events in tick zones.</p>

        <h3>10. Know the GTA's High-Risk Zones</h3>
        <p>Public Health Ontario confirms blacklegged tick populations across the GTA. Highest-risk areas: Oak Ridges Moraine (King City, Caledon, Richmond Hill), Rouge National Urban Park (Scarborough, Markham), Niagara Escarpment (Hamilton, Burlington north end), Don Valley and ravine system (Toronto), Bronte Creek Provincial Park (Oakville/Burlington edge), and Boyd Conservation Area (Vaughan/Woodbridge). Properties within 1 km of these areas should treat barrier zones twice yearly minimum.</p>


        <h2>Bottom Line</h2>
        <p>Tick prevention in Ontario is now a year-round consideration — not just a cottage-country issue. Blacklegged tick populations have established across virtually all of Southern Ontario and continue expanding northward. The combination of physical yard modifications + professional barrier spray + personal vigilance protects against Lyme disease, Anaplasmosis, Babesiosis, and other tick-borne illnesses that are increasing in Ontario every year.</p>

        <h2>Related Guides</h2>
        <ul>
          <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
          <li><Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{TICK_BLOGS.pillar.title}</Link></li>
          <li><Link href="/blog/hidden-mosquito-breeding-spots-backyard" className="text-brand-700 hover:underline">Hidden Mosquito Breeding Spots in Your GTA Backyard</Link></li>
          <li><Link href="/blog/lyme-disease-tick-prevention-ontario" className="text-brand-700 hover:underline">Lyme Disease Prevention in Ontario</Link></li>
          <li><Link href="/mosquito-control" className="text-brand-700 hover:underline">View Our Mosquito Control Services</Link></li>
          <li><Link href="/tick-control" className="text-brand-700 hover:underline">View Our Tick Control Services</Link></li>
        </ul>
      </article>

      <CTASection heading="Specialist Mosquito & Tick Control for Ontario" subtext="From $99 per treatment. BuzzSkito Bite-Free Guarantee. 129 five-star reviews." />
    </>
  )
}
