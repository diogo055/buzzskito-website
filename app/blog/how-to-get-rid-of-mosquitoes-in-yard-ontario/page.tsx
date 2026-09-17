import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import AuthorByline from '@/components/AuthorByline'
import BuyLink from '@/components/BuyLink'
import FreshnessStamp from '@/components/FreshnessStamp'
import TopPick from '@/components/TopPick'
import StickyBuyBar from '@/components/StickyBuyBar'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { MOSQUITO_BLOGS, TICK_BLOGS, PROMISES } from '@/lib/constants'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'how-to-get-rid-of-mosquitoes-in-yard-ontario'
const DATE = '2026-04-29'
const UPDATED = '2026-04-29'
const TITLE = 'How to Get Rid of Mosquitoes in Your Yard & Keep Them Away'
const META_TITLE = 'Get Rid of Mosquitoes in Your Yard: 12 Steps'

const FAQS = [
  { question: `Eliminate Every Standing Water Source on Your Property`, answer: `Mosquitoes need standing water to breed — they cannot reproduce without it. The fastest single action you can take is a yard sweep eliminating every container holding water for 48+ hours: birdbaths (change weekly), plant saucers (drill drainage holes), kiddie pools (drain after use), wheelbarrows, buckets, recycling bin lids, garbage can lids, kids' toys, tarps with creases, and old tires. One uncovered birdbath can produce thousands of mosquitoes per week.` },
  { question: `Clean Your Gutters Twice Per Season`, answer: `Clogged gutters accumulate organic debris and standing water at the roofline — a hidden breeding site most homeowners never check. Clean once in early May and again in mid-July, plus after major storms. Consider gutter guards if your property has heavy tree cover.` },
  { question: `Treat Rain Barrels with BTI Mosquito Dunks`, answer: `Rain barrels are productive mosquito breeding sites unless treated. BTI (Bacillus thuringiensis israelensis) mosquito dunks are the gold-standard solution — the label rates them to kill mosquito larvae within 24 hours. BTI is a bacterial larvicide that acts on the larvae of mosquitoes and a few related flies; use it only where the label directs, and check for the PCP registration number. Per the label, one dunk treats up to 100 sq ft of water surface for 30 days.` },
  { question: `Treat Your Pool Cover Weekly`, answer: `Active chlorinated pools cannot support mosquito breeding — chlorine kills larvae. But pool COVERS that collect rainwater are major breeding sites. Drain the cover weekly during peak season, or treat with BTI dunks until you can drain it.` },
  { question: `Level Low-Lying Lawn Areas`, answer: `Areas of lawn that hold water 48+ hours after rain are persistent breeding sites. Top-dress low spots with topsoil, or improve drainage through aeration and overseeding. Properties with clay soil should focus on aeration in early May.` },
  { question: `Apply Professional Barrier Spray`, answer: `Professional barrier spray (a registered residual insecticide applied according to label directions to vegetation, shrub interiors, leaf undersides, fence lines, and resting sites) targets adult mosquitoes where they rest during the day. It kills on contact, and because the residual on treated foliage wears down with time and rain, season plans re-treat on a schedule. Single treatments start at $99 on a standard lot.` },
  { question: `How do I keep mosquitoes away from my yard?`, answer: `To keep mosquitoes away long-term, remove the standing water they breed in, treat any water you can't drain with BTI mosquito dunks, and put down a professional barrier spray on shrubs and fence-line resting sites, re-applied on a schedule through the season. Between treatments, run a fan where you sit, keep grass short, and re-check for refilled containers after every rain. The two layers cover different failure modes: source elimination removes the mosquitoes bred on your lot, and barrier spray treats the vegetation the ones flying in from elsewhere land on. Neither clears a yard on its own, and neither is permanent.` },
  { question: `What is the fastest way to repel mosquitoes outdoors?`, answer: `The fastest way to repel mosquitoes off your body is a DEET (20–30%) or picaridin (20%) repellent with a PCP registration number on the label, applied before you head outside. To repel them from a specific spot like a deck or patio, aim a fan at your seating area — mosquitoes are weak fliers and steady airflow keeps them away instantly. Repellents and fans reduce bites but don't lower your yard's mosquito population, so pair them with source elimination and barrier spray for lasting results.` },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: `Ontario homeowner's guide to getting rid of mosquitoes in your yard and keeping them away. Fast ways to repel and keep mosquitoes away, plus 12 practical steps for GTA yards.`,
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

const AMZ_TAG = tagForSlug('how-to-get-rid-of-mosquitoes-in-yard-ontario')

export default function HowToGetRidOfMosquitoesInYardOntarioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: `Complete Ontario homeowner's guide to getting rid of mosquitoes in your yard. 12 practical steps from eliminating standing water to professional barrier spray, written for GTA yards.`, slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: TITLE, url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1 flex-wrap">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">How to Get Rid of Mosquitoes in Your Yard &amp; Keep Them Away</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">How to Get Rid of Mosquitoes in Your Yard &amp; Keep Them Away — Ontario 2026 Guide</h1>
          <p className="text-brand-300 text-sm">Practical, evidence-backed Ontario homeowner guide.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      {/* QUICK ANSWER */}
      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">The most effective way to get rid of mosquitoes in your Ontario yard is a layered approach: eliminate every standing-water source, treat water you can&apos;t drain with BTI mosquito dunks, apply a professional barrier spray to shrubs and fence-line resting sites, and re-treat on a schedule from May through September. Each layer covers a different failure mode: source elimination removes what breeds on your lot, BTI kills larvae in water you can&apos;t drain, and barrier spray treats the vegetation adults rest on after flying in from elsewhere. Repellent-only tactics protect the person wearing them and do not lower the yard&apos;s mosquito population at all.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Mosquitoes can&apos;t breed without standing water &mdash; one uncovered birdbath can produce thousands of mosquitoes per week.</li>
              <li>BTI mosquito dunks (a low-cost garden-aisle buy at Canadian Tire and Home Depot) kill larvae within 24 hours and treat up to 100 sq ft of water for 30 days, according to the product label.</li>
              <li>Professional barrier spray targets the vegetation adults rest on and is re-applied on a schedule through the season; single treatments start at $99 on a standard lot.</li>
              <li>Source elimination handles what breeds on your lot; barrier spray treats the resting vegetation for what flies in from off-property. You need both.</li>
              <li>Mosquitoes are weak fliers stopped by wind above about 1.5 m/s, so a patio fan keeps them off a seating area right away.</li>
              <li>DEET (20&ndash;30%) and picaridin/icaridin (20%) are the standard skin repellents in Canada; check for the PCP registration number on the label.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control &middot; 150+ five-star Google reviews</p>
          </div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12 prose-brand">
        <AuthorByline datePublished={DATE} dateModified={UPDATED} />

        <AffiliateDisclosure />

        <h2>How to Keep Mosquitoes Away (Fast)</h2>
        <p>If you just want to know how to keep mosquitoes away and repel them today, here&apos;s the ranked quick-list — highest-impact action first. The top three do the heavy lifting; the rest keep them away between treatments.</p>
        <ol>
          <li><strong>Dump every source of standing water.</strong> No water, no breeding — this is the single fastest way to keep mosquitoes away because it stops the next generation before it hatches.</li>
          <li><strong>Drop a BTI mosquito dunk in water you can&apos;t drain.</strong> Rain barrels, pond features, and pooling drains are treated for about 30 days per dunk, according to the label.</li>
          <li><strong>Apply a professional barrier spray.</strong> A residual treatment on shrubs, fence lines, and resting sites targets adult mosquitoes where they rest, re-applied on a schedule through the season.</li>
          <li><strong>Run a fan where you sit.</strong> Mosquitoes are weak fliers; steady airflow keeps them away from a deck or patio instantly.</li>
          <li><strong>Wear DEET or picaridin.</strong> The most reliable way to repel mosquitoes off your skin during outdoor activities — see our <Link href="/blog/mosquito-repellent-guide-ontario-2026" className="text-brand-700 hover:underline">Ontario mosquito repellent guide</Link> for what actually works.</li>
          <li><strong>Cut grass short and prune dense shrubs.</strong> Removing shaded daytime resting spots keeps mosquitoes from settling in your yard.</li>
        </ol>

        <h3>1. Eliminate Every Standing Water Source on Your Property</h3>
        <p>Mosquitoes need standing water to breed — they cannot reproduce without it. The fastest single action you can take is a yard sweep eliminating every container holding water for 48+ hours: birdbaths (change weekly), plant saucers (drill drainage holes), kiddie pools (drain after use), wheelbarrows, buckets, recycling bin lids, garbage can lids, kids&apos; toys, tarps with creases, and old tires. One uncovered birdbath can produce thousands of mosquitoes per week.</p>

        <h3>2. Clean Your Gutters Twice Per Season</h3>
        <p>Clogged gutters accumulate organic debris and standing water at the roofline — a hidden breeding site most homeowners never check. Clean once in early May and again in mid-July, plus after major storms. Consider gutter guards if your property has heavy tree cover.</p>

        <h3>3. Treat Rain Barrels with BTI Mosquito Dunks</h3>
        <p>Rain barrels are productive mosquito breeding sites unless treated. BTI (Bacillus thuringiensis israelensis) mosquito dunks are the gold-standard solution &mdash; the widely sold Summit Mosquito Dunks are the reference product. Their label rates them to kill mosquito larvae within 24 hours. BTI is a bacterial larvicide that acts on the larvae of mosquitoes and a few related flies; use it only where the label directs, and check for the PCP registration number (<a href="https://www.canada.ca/en/health-canada/services/consumer-product-safety/pesticides-pest-management.html" rel="noopener" className="text-brand-700 hover:underline">Health Canada</a> explains how pesticide registration works). Per the label, one dunk treats up to 100 sq ft of water surface for 30 days.</p>
        <p><BuyLink tag={AMZ_TAG} search="summit mosquito dunks">Check Summit Mosquito Dunks prices on Amazon.ca &rarr;</BuyLink> For dosing, brand comparisons, and safety notes, see our <Link href="/blog/mosquito-dunks-canada-guide" className="text-brand-700 hover:underline">complete guide to mosquito dunks in Canada</Link>.</p>

        <TopPick tag={AMZ_TAG}
          label="Our Top Pick for Water You Can't Drain"
          name="Summit BTI Mosquito Dunks"
          blurb="For rain barrels, pond features, and pooling drains you can't empty, floating BTI dunks are the gold-standard larvicide — they kill mosquito larvae within a day and keep working for weeks, and BTI acts on the larvae of mosquitoes and a few related flies rather than on fish, pets, or pollinators. Use it where the label directs. The single most useful buyable product in this whole guide."
          search="summit mosquito dunks"
          score={9.0}
          pros={['Kills larvae within 24 hours', 'One dunk protects a water source for about a month', 'Targets mosquito larvae; check the label for the PCP number and use sites']}
          cons={['Treats larvae only — does nothing for adult mosquitoes', 'Needs replacing each month through the season']}
        />

        <h3>4. Treat Your Pool Cover Weekly</h3>
        <p>Active chlorinated pools cannot support mosquito breeding — chlorine kills larvae. But pool COVERS that collect rainwater are major breeding sites. Drain the cover weekly during peak season, or treat with BTI dunks until you can drain it.</p>

        <h3>5. Level Low-Lying Lawn Areas</h3>
        <p>Areas of lawn that hold water 48+ hours after rain are persistent breeding sites. Top-dress low spots with topsoil, or improve drainage through aeration and overseeding. Properties with clay soil should focus on aeration in early May.</p>

        <h3>6. Apply Professional Barrier Spray</h3>
        <p>Professional barrier spray (a registered residual insecticide applied according to label directions to vegetation, shrub interiors, leaf undersides, fence lines, and resting sites) targets adult mosquitoes where they rest during the day. It kills on contact, and because the residual on treated foliage wears down with time and rain, season plans re-treat on a schedule: monthly on Basic ($549, 5 sprays), every 2 weeks on Standard ($994, 10 sprays), weekly on Exclusive ($2,049, 20+ sprays). Single treatments start at $99 on a standard lot.</p>

        <h3>7. Use Fans on Outdoor Living Areas</h3>
        <p>Mosquitoes are weak fliers. Wind speeds above ~1.5 m/s exceed their flight capability. A moderately powerful outdoor fan creates a localized zone of moving air around a deck or patio that mosquitoes struggle to fly through. Fans complement professional barrier spray — they don&apos;t replace it.</p>
        <p>The same physics works indoors, which is why a box or ceiling fan aimed across a bed is the best no-chemical fix for the one mosquito that made it inside. If the problem has moved through your door, <Link href="/blog/how-to-get-rid-of-mosquitoes-in-the-house" className="text-brand-700 hover:underline">the indoor version of this playbook</Link> covers hunting it down and closing the gap it came in through.</p>

        <h3>8. Plant Mosquito-Repelling Plants Strategically</h3>
        <p>Lavender, basil, catnip, lemon balm, and citronella grass contain volatile oils mosquitoes find unpleasant. They reduce ambient mosquito pressure within 1–3 metres of the plant. Plant strategically near patios, doorways, and seating areas — not as a yard-wide solution. Combine with barrier spray for best results.</p>

        <h3>9. Keep Grass Cut Short and Shrubs Pruned</h3>
        <p>Mosquitoes rest in tall grass, shaded shrub interiors, and leaf-dense vegetation during the day. Keeping grass at 2–3 inches and pruning interior shrub growth reduces resting habitat. This won&apos;t eliminate mosquitoes, but it makes barrier spray treatments more effective.</p>

        <h3>10. Use Personal DEET or Picaridin Repellent for Outdoor Activities</h3>
        <p>DEET (20–30% concentration) and picaridin (also called icaridin, 20%) are the standard personal mosquito repellents in Canada. Both are sold with a PCP registration number on the label (<a href="https://www.canada.ca/en/health-canada/services/consumer-product-safety/pesticides-pest-management.html" rel="noopener" className="text-brand-700 hover:underline">Health Canada</a> explains pesticide registration). DEET is the longest-studied active; picaridin is odourless, non-greasy, and won&apos;t damage plastics or gear. Apply when spending extended time outdoors, especially at dusk/dawn. Personal repellent doesn&apos;t reduce yard mosquito population — but it prevents bites during outdoor activities.</p>
        <p><BuyLink tag={AMZ_TAG} search="picaridin insect repellent canada">Check picaridin repellent prices on Amazon.ca &rarr;</BuyLink> Not sure which active to pick? Our <Link href="/blog/picaridin-vs-deet" className="text-brand-700 hover:underline">picaridin vs DEET comparison for Canada</Link> breaks down protection time, safety, and cost.</p>

        <h3>11. Check Tree Holes and Catch Basins on Your Lot</h3>
        <p>Old tree holes that collect rainwater are productive breeding sites — fill with sand or expanding foam. Driveway catch basins and yard drains can hold water for weeks; treat with BTI dunks if water persists.</p>

        <h3>12. Maintain Through the Full Season — Don't Stop in July</h3>
        <p>Mosquito populations rebuild within 2–3 weeks if treatments stop. A common mistake Ontario homeowners make is stopping mosquito control in late July when activity dips, then having a misery-spike in August. Continue barrier spray treatments through mid-September for full-season protection.</p>


        <h2>Bottom Line</h2>
        <p>A layered approach — source elimination, BTI for what you can&apos;t drain, professional barrier spray for adult control, and personal protection for outdoor activities — each cover a gap the others leave open. The compounding is the point: source elimination removes local breeding, BTI handles water you cannot drain, barrier spray treats the resting vegetation for mosquitoes arriving from off-property, and personal protection catches what still gets through. No layer clears a yard on its own.</p>

        <h2>Related Guides</h2>
        <ul>
          <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
          <li><Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{TICK_BLOGS.pillar.title}</Link></li>
          <li><Link href="/blog/hidden-mosquito-breeding-spots-backyard" className="text-brand-700 hover:underline">Hidden Mosquito Breeding Spots in Your GTA Backyard</Link></li>
          <li><Link href="/blog/mosquito-repellent-guide-ontario-2026" className="text-brand-700 hover:underline">Best Mosquito Repellents for Ontario (2026 Guide)</Link></li>
          <li><Link href="/blog/lyme-disease-tick-prevention-ontario" className="text-brand-700 hover:underline">Lyme Disease Prevention in Ontario</Link></li>
          <li><Link href="/mosquito-control" className="text-brand-700 hover:underline">View Our Mosquito Control Services</Link></li>
          <li><Link href="/tick-control" className="text-brand-700 hover:underline">View Our Tick Control Services</Link></li>
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

      </article>

      <StickyBuyBar tag={AMZ_TAG} name="Summit BTI Mosquito Dunks" search="summit mosquito dunks" label="For standing water" />

      <CTASection heading="Specialist Mosquito & Tick Control for Ontario" subtext={`From $99 per treatment on a standard lot. ${PROMISES.rainBackShort}. ${PROMISES.biteFreeScope}. 150+ five-star Google reviews.`} />
    </>
  )
}
