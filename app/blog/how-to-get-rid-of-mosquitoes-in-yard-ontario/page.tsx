import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import AuthorByline from '@/components/AuthorByline'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { MOSQUITO_BLOGS, TICK_BLOGS } from '@/lib/constants'

const SLUG = 'how-to-get-rid-of-mosquitoes-in-yard-ontario'
const DATE = '2026-04-29'
const TITLE = 'How to Get Rid of Mosquitoes in Your Yard (Ontario 2026 Guide)'

const FAQS = [
  { question: `Eliminate Every Standing Water Source on Your Property`, answer: `Mosquitoes need standing water to breed — they cannot reproduce without it. The fastest single action you can take is a yard sweep eliminating every container holding water for 48+ hours: birdbaths (change weekly), plant saucers (drill drainage holes), kiddie pools (drain after use), wheelbarrows, buckets, recycling bin lids, garbage can lids, kids' toys, tarps with creases, and old tires. One uncovered birdbath can produce thousands of mosquitoes per week.` },
  { question: `Clean Your Gutters Twice Per Season`, answer: `Clogged gutters accumulate organic debris and standing water at the roofline — a hidden breeding site most homeowners never check. Clean once in early May and again in mid-July, plus after major storms. Consider gutter guards if your property has heavy tree cover.` },
  { question: `Treat Rain Barrels with BTI Mosquito Dunks`, answer: `Rain barrels are productive mosquito breeding sites unless treated. BTI (Bacillus thuringiensis israelensis) mosquito dunks are the gold-standard solution — they kill mosquito larvae within 24 hours and are completely safe for fish, pets, beneficial insects, and humans (Health Canada approves BTI even for drinking water reservoirs). One dunk treats up to 100 sq ft of water surface for 30 days.` },
  { question: `Treat Your Pool Cover Weekly`, answer: `Active chlorinated pools cannot support mosquito breeding — chlorine kills larvae. But pool COVERS that collect rainwater are major breeding sites. Drain the cover weekly during peak season, or treat with BTI dunks until you can drain it.` },
  { question: `Level Low-Lying Lawn Areas`, answer: `Areas of lawn that hold water 48+ hours after rain are persistent breeding sites. Top-dress low spots with topsoil, or improve drainage through aeration and overseeding. Properties with clay soil should focus on aeration in early May.` },
  { question: `Apply Professional Barrier Spray`, answer: `Professional barrier spray (Health Canada-approved residual insecticide applied to vegetation, shrub interiors, leaf undersides, fence lines, and resting sites) is the single most effective adult-mosquito control measure available to homeowners. It kills on contact and provides up to 30 days of residual protection. Single treatments start at $99.` },
]

export const metadata: Metadata = buildMetadata({
  title: `How to Get Rid of Mosquitoes in Your Yard (Ontario 2026 Guide)`,
  description: `Complete Ontario homeowner's guide to getting rid of mosquitoes in your yard. 12 proven steps from eliminating standing water to professional barrier spray. Tested in GTA conditions.`,
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

export default function HowToGetRidOfMosquitoesInYardOntarioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: `Complete Ontario homeowner's guide to getting rid of mosquitoes in your yard. 12 proven steps from eliminating standing water to professional barrier spray. Tested in GTA conditions.`, slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: TITLE, url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1 flex-wrap">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">How to Get Rid of Mosquitoes in Your Yard</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">How to Get Rid of Mosquitoes in Your Yard — Ontario 2026 Guide</h1>
          <p className="text-brand-300 text-sm">Practical, evidence-backed Ontario homeowner guide.</p>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <section className="bg-amber-50 border-y-4 border-amber-300 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-amber-700 uppercase tracking-wider mb-2">Quick Answer</p>
          <h2 className="text-xl font-extrabold text-brand-900 mb-3">How to Get Rid of Mosquitoes in Your Yard — Ontario 2026 Guide</h2>
          <p className="text-base text-gray-800 leading-relaxed">The fastest way to get rid of mosquitoes in your Ontario yard is a layered approach: (1) eliminate every standing-water source you can find, (2) treat any standing water you can&apos;t drain with BTI mosquito dunks (safe for fish, pets, and humans — sold at Canadian Tire and Home Depot for $10–$20 per pack), (3) apply professional barrier spray to vegetation, shrub interiors, and fence-line resting sites, and (4) maintain coverage with treatments every 3–4 weeks May through September. Layered approach reduces mosquito populations 85–95% on most properties. DIY-only approaches (citronella, fans, plants) reduce only 15–30% because they don&apos;t kill the breeding population.</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12 prose-brand">
        <AuthorByline datePublished={DATE} />

        <h3>1. Eliminate Every Standing Water Source on Your Property</h3>
        <p>Mosquitoes need standing water to breed — they cannot reproduce without it. The fastest single action you can take is a yard sweep eliminating every container holding water for 48+ hours: birdbaths (change weekly), plant saucers (drill drainage holes), kiddie pools (drain after use), wheelbarrows, buckets, recycling bin lids, garbage can lids, kids&apos; toys, tarps with creases, and old tires. One uncovered birdbath can produce thousands of mosquitoes per week.</p>

        <h3>2. Clean Your Gutters Twice Per Season</h3>
        <p>Clogged gutters accumulate organic debris and standing water at the roofline — a hidden breeding site most homeowners never check. Clean once in early May and again in mid-July, plus after major storms. Consider gutter guards if your property has heavy tree cover.</p>

        <h3>3. Treat Rain Barrels with BTI Mosquito Dunks</h3>
        <p>Rain barrels are productive mosquito breeding sites unless treated. BTI (Bacillus thuringiensis israelensis) mosquito dunks are the gold-standard solution — they kill mosquito larvae within 24 hours and are completely safe for fish, pets, beneficial insects, and humans (Health Canada approves BTI even for drinking water reservoirs). One dunk treats up to 100 sq ft of water surface for 30 days.</p>

        <h3>4. Treat Your Pool Cover Weekly</h3>
        <p>Active chlorinated pools cannot support mosquito breeding — chlorine kills larvae. But pool COVERS that collect rainwater are major breeding sites. Drain the cover weekly during peak season, or treat with BTI dunks until you can drain it.</p>

        <h3>5. Level Low-Lying Lawn Areas</h3>
        <p>Areas of lawn that hold water 48+ hours after rain are persistent breeding sites. Top-dress low spots with topsoil, or improve drainage through aeration and overseeding. Properties with clay soil should focus on aeration in early May.</p>

        <h3>6. Apply Professional Barrier Spray</h3>
        <p>Professional barrier spray (Health Canada-approved residual insecticide applied to vegetation, shrub interiors, leaf undersides, fence lines, and resting sites) is the single most effective adult-mosquito control measure available to homeowners. It kills on contact and provides up to 30 days of residual protection. Single treatments start at $99.</p>

        <h3>7. Use Fans on Outdoor Living Areas</h3>
        <p>Mosquitoes are weak fliers. Wind speeds above ~1.5 m/s exceed their flight capability. A moderately powerful outdoor fan creates a localized "mosquito-free zone" around a deck or patio. Fans complement professional barrier spray — they don&apos;t replace it.</p>

        <h3>8. Plant Mosquito-Repelling Plants Strategically</h3>
        <p>Lavender, basil, catnip, lemon balm, and citronella grass contain volatile oils mosquitoes find unpleasant. They reduce ambient mosquito pressure within 1–3 metres of the plant. Plant strategically near patios, doorways, and seating areas — not as a yard-wide solution. Combine with barrier spray for best results.</p>

        <h3>9. Keep Grass Cut Short and Shrubs Pruned</h3>
        <p>Mosquitoes rest in tall grass, shaded shrub interiors, and leaf-dense vegetation during the day. Keeping grass at 2–3 inches and pruning interior shrub growth reduces resting habitat. This won&apos;t eliminate mosquitoes, but it makes barrier spray treatments more effective.</p>

        <h3>10. Use Personal DEET or Picaridin Repellent for Outdoor Activities</h3>
        <p>DEET (20–30% concentration) and picaridin (20%) are the most effective personal mosquito repellents in Canada. Apply when spending extended time outdoors, especially at dusk/dawn. Personal repellent doesn&apos;t reduce yard mosquito population — but it prevents bites during outdoor activities.</p>

        <h3>11. Check Tree Holes and Catch Basins on Your Lot</h3>
        <p>Old tree holes that collect rainwater are productive breeding sites — fill with sand or expanding foam. Driveway catch basins and yard drains can hold water for weeks; treat with BTI dunks if water persists.</p>

        <h3>12. Maintain Through the Full Season — Don't Stop in July</h3>
        <p>Mosquito populations rebuild within 2–3 weeks if treatments stop. The most common mistake Ontario homeowners make is stopping mosquito control in late July when activity dips, then having a misery-spike in August. Continue barrier spray treatments through mid-September for full-season protection.</p>


        <h2>Bottom Line</h2>
        <p>A layered approach — source elimination, BTI for what you can&apos;t drain, professional barrier spray for adult control, and personal protection for outdoor activities — reduces mosquito populations 85–95% on most Ontario properties. DIY alone gets you 15–30%. The compounding works: each layer makes the next one more effective.</p>

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
