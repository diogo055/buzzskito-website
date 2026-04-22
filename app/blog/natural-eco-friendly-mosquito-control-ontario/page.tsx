import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { NEW_BLOGS_3, MOSQUITO_BLOGS } from '@/lib/constants'

const POST = NEW_BLOGS_3[3]

export const metadata: Metadata = buildMetadata({
  title: 'Natural Mosquito Control Ontario | 2026',
  description:
    'Natural mosquito control options in Ontario — garlic sprays, essential oils, BTi dunks & plant-based barriers reviewed.',
  canonical: `/blog/${POST.slug}`,
  type: 'article',
  publishedTime: POST.date,
})

const FAQS = [
  {
    question: 'Is professional mosquito barrier spray safe for the environment?',
    answer:
      "BuzzSkito uses Health Canada–approved formulas that are evaluated under the Pest Management Regulatory Agency (PMRA) framework for environmental safety. Synthetic pyrethroids — the active ingredient in most professional barrier sprays — break down rapidly in sunlight and soil and do not accumulate in the food chain at typical application rates. The formula is applied only to targeted vegetation surfaces, not broadcast across soil or water.",
  },
  {
    question: 'Are there truly natural mosquito control products that work for Ontario yards?',
    answer:
      "Yes, within limits. Bacillus thuringiensis israelensis (BTi) dunks are a genuinely natural and effective larvicide for standing water — they kill mosquito larvae without harming other organisms. For adult mosquito control, garlic-based perimeter sprays reduce activity modestly but don't provide the residual knockdown of professional barrier spray. The most effective natural approach combines thorough source elimination (removing all standing water) with BTi for water features, plus a plant-based barrier spray for the perimeter.",
  },
  {
    question: 'Are plant-based mosquito sprays as effective as synthetic ones?',
    answer:
      "For most Ontario properties, no. Plant-based repellent sprays (cedar oil, rosemary, citronella) degrade faster in our climate — particularly in the humid GTA summers with frequent rain — providing 7–14 days of light residual versus 21–30 days for professional synthetic barrier spray. For low-pressure properties away from water, they can be sufficient. For properties near ravines, creeks, or conservation areas, they typically don't provide adequate coverage through peak season.",
  },
  {
    question: 'Do essential oils actually repel mosquitoes in the yard?',
    answer:
      "Essential oils (lavender, citronella, eucalyptus, peppermint) have real mosquito-repelling properties when applied directly to skin as personal repellents. As a yard treatment applied to vegetation, they evaporate too quickly to provide meaningful residual protection outdoors in Ontario's climate. They're best used to supplement other control methods — not as a standalone yard treatment.",
  },
  {
    question: 'Is BuzzSkito\'s barrier spray safe for pollinators like bees?',
    answer:
      "BuzzSkito technicians apply barrier spray to foliage, fence lines, and shaded resting surfaces — not to open flowers or actively blooming plants. Pyrethroids are toxic to bees on direct contact when wet, but break down quickly once dry. We follow best-practice application timing (early morning or evening, outside peak pollinator activity hours) and avoid treating flowering plants. The risk to pollinators from a correctly applied residential barrier spray is very low.",
  },
]

export default function NaturalMosquitoControlPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            blogPostingSchema({
              title: POST.title,
              description: POST.excerpt,
              slug: POST.slug,
              datePublished: POST.date,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Blog', url: '/blog' },
              { name: 'Natural Eco-Friendly Mosquito Control Ontario', url: `/blog/${POST.slug}` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }}
      />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Natural Eco-Friendly Mosquito Control Ontario</span>
          </nav>
          <span className="bg-brand-800 text-brand-200 text-xs px-3 py-1 rounded-full mb-4 inline-block">Mosquito Control</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">{POST.title}</h1>
          <p className="text-brand-300 text-sm">
            Published {new Date(POST.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })} · By BuzzSkito
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12 prose-brand">
        <p className="text-lg text-gray-600 not-prose border-l-4 border-brand-400 pl-5 py-2 mb-8">
          More GTA homeowners are asking us about natural and eco-friendly mosquito control options — and it&apos;s a fair question. This guide gives you an honest breakdown of what natural options actually do, where they fall short in Ontario&apos;s climate, and the right combination strategy for different property types.
        </p>

        <h2>The Natural vs. Synthetic Spectrum: What We&apos;re Actually Comparing</h2>
        <p>When Ontario homeowners ask about &ldquo;natural&rdquo; mosquito control, they usually mean one of four things: plant-based repellent sprays applied to the yard, biological larvicides that kill larvae without chemicals, essential oils used as personal repellents, or mosquito-repelling plants in the garden. Each of these exists on a spectrum from genuinely effective to mostly wishful thinking.</p>
        <p>Professional barrier spray, by contrast, typically uses a synthetic pyrethroid (permethrin or bifenthrin) that is a synthetic analogue of naturally occurring pyrethrins found in chrysanthemum flowers. It is not &ldquo;organic&rdquo; but it is PMRA-evaluated, Health Canada–approved, and has a well-documented safety and environmental profile at the concentrations used in residential applications.</p>
        <p>The honest answer: a layered approach — combining the genuinely effective natural methods with targeted professional treatment where it&apos;s warranted — gives you the best outcome with the smallest environmental footprint.</p>

        <h2>Natural Mosquito Control Methods: An Honest Assessment</h2>

        <h3>1. Bacillus thuringiensis israelensis (BTi) — Highly Effective for Larvae</h3>
        <p>BTi is a naturally occurring soil bacterium that produces proteins toxic specifically to mosquito (and blackfly) larvae. It is available in &ldquo;dunk&rdquo; or &ldquo;granule&rdquo; form and is the most effective natural tool available for Ontario homeowners with standing water on their property.</p>
        <p>Drop a BTi dunk into rain barrels, ornamental ponds, birdbaths, and any standing water that can&apos;t be eliminated. The bacterium reproduces in the water and kills larvae before they develop into biting adults. It is completely safe for fish, birds, bees, and mammals. The City of Toronto uses BTi as its primary larviciding tool across the city each year.</p>
        <p><strong>Best for:</strong> Any property with decorative ponds, birdbaths, rain barrels, or areas of persistent standing water. Works in combination with other methods.</p>

        <h3>2. Garlic-Based Barrier Sprays — Modest Adult Repellent</h3>
        <p>Concentrated garlic juice sprayed onto vegetation creates an odour barrier that adult mosquitoes find repellent. Products like Mosquito Barrier use food-grade garlic extract and claim to provide 2–4 weeks of residual repellency. In practice, Ontario homeowners report mixed results — garlic sprays work well in low-pressure environments but are typically insufficient for properties near water or with significant natural mosquito habitat nearby.</p>
        <p><strong>Best for:</strong> Urban properties in lower-pressure areas (few trees, no nearby water) where homeowners want to minimize chemical use. Less effective for ravine-adjacent or waterfront properties.</p>

        <h3>3. Cedar Oil Yard Treatments — Short Residual, Mild Effect</h3>
        <p>Cedar oil-based products are marketed as &ldquo;natural&rdquo; yard sprays and do have mosquito-repelling and insecticidal properties. The practical limitation for Ontario use is residual time — cedar oil volatilizes rapidly in heat and breaks down quickly in rain, typically providing 7–14 days of light protection versus 21–30 days from professional synthetic barrier spray.</p>
        <p><strong>Best for:</strong> Supplemental perimeter treatment between professional spray visits. Not sufficient as a standalone solution for high-pressure GTA properties.</p>

        <h3>4. Essential Oils as Personal Repellents — Works on People, Not Yards</h3>
        <p>Lemon eucalyptus oil (OLE, not the essential oil) is the only plant-based personal repellent recognized by Health Canada and the US CDC as effective against mosquitoes carrying West Nile virus and other diseases. Citronella, lavender, and other essential oils provide brief personal repellency but degrade within 20–30 minutes on skin.</p>
        <p>Essential oils applied to yard vegetation have negligible residual effect — they evaporate too quickly to serve as a practical barrier spray. They&apos;re useful as personal repellents, not as yard treatments.</p>

        <h3>5. Mosquito-Repelling Plants — Modest Passive Effect</h3>
        <p>Lavender, citronella grass, lemon balm, basil, catnip, and marigolds all contain volatile compounds that mosquitoes dislike. Planting them near seating areas provides a modest ambient repellent effect when leaves are brushed or disturbed. They do not project a chemical barrier around the yard — you need to be near the plants for any effect.</p>
        <p>For a detailed guide on which plants work best in Ontario gardens, see our <Link href="/blog/mosquito-repellent-plants-ontario" className="text-brand-700 underline">Ontario mosquito-repelling plants guide</Link>.</p>

        <h3>6. Eliminating Standing Water — Non-Negotiable Foundation</h3>
        <p>No mosquito control method — natural or professional — works as well as it should on a property with unaddressed breeding sources. A female mosquito lays 100–300 eggs in water as shallow as a bottle cap. Every 10 days, a new generation of biting adults emerges. Eliminating every standing water source on your property before any treatment dramatically reduces the local population and the amount of product needed to maintain control.</p>
        <p>See our guide to <Link href="/blog/hidden-mosquito-breeding-spots-backyard" className="text-brand-700 underline">hidden mosquito breeding spots in GTA backyards</Link> for a comprehensive checklist.</p>

        <h2>When Natural Control Is Enough — and When It Isn&apos;t</h2>
        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-brand-800 text-white">
                <th className="px-4 py-2 text-left">Property Type</th>
                <th className="px-4 py-2 text-left">Natural Methods Alone</th>
                <th className="px-4 py-2 text-left">Recommended Approach</th>
              </tr>
            </thead>
            <tbody>
              {[
                { type: 'Urban townhouse, minimal yard', alone: 'Often sufficient', approach: 'BTi + water elimination + plants' },
                { type: 'Suburban lot, no nearby water', alone: 'May be sufficient', approach: 'BTi + garlic spray + plants' },
                { type: 'Property near creek or pond', alone: 'Typically insufficient', approach: 'BTi + professional barrier spray' },
                { type: 'Ravine-adjacent or conservation-border', alone: 'Insufficient', approach: 'Professional barrier spray (seasonal)' },
                { type: 'Rural / large lot / near marsh', alone: 'Insufficient', approach: 'Professional seasonal package required' },
              ].map(({ type, alone, approach }) => (
                <tr key={type} className="border-b border-gray-200 even:bg-gray-50">
                  <td className="px-4 py-2 font-medium text-gray-800">{type}</td>
                  <td className="px-4 py-2 text-gray-700">{alone}</td>
                  <td className="px-4 py-2 text-brand-700 font-semibold">{approach}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>BuzzSkito&apos;s Approach: Health Canada Approved, Responsibly Applied</h2>
        <p>BuzzSkito uses Health Canada–approved formulas applied by licensed technicians following PMRA guidelines. Our applications are targeted — we treat the specific surfaces and zones where mosquitoes live and rest, not the entire yard. We avoid open water, do not treat during active pollinator foraging hours, and apply at the minimum effective rate.</p>
        <p>This approach is not &ldquo;organic&rdquo; in the strictest sense, but it is the responsible, evidence-based approach to residential mosquito control that actually works in Ontario&apos;s climate. We are transparent about what we use, at what concentration, and why — every service visit includes a product log that you can keep for your records.</p>

        <h2>Frequently Asked Questions</h2>
        <div className="not-prose space-y-4 my-6">
          {FAQS.map(({ question, answer }) => (
            <details key={question} className="bg-brand-50 rounded-xl border border-brand-100">
              <summary className="cursor-pointer px-5 py-3 font-semibold text-brand-900 list-none">{question}</summary>
              <p className="px-5 pb-4 text-gray-600 text-sm">{answer}</p>
            </details>
          ))}
        </div>

        <h2>Related Guides</h2>
        <ul>
          <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
          <li><Link href="/blog/mosquito-repellent-plants-ontario" className="text-brand-700 hover:underline">Best Mosquito-Repelling Plants for Ontario Gardens</Link></li>
          <li><Link href="/blog/hidden-mosquito-breeding-spots-backyard" className="text-brand-700 hover:underline">Hidden Mosquito Breeding Spots in Your GTA Backyard</Link></li>
          <li><Link href="/blog/mosquito-vs-diy-vs-professional-control" className="text-brand-700 hover:underline">DIY vs. Professional Mosquito Control: What Actually Works in Ontario</Link></li>
          <li><Link href="/blog/is-mosquito-spray-safe-kids-pets" className="text-brand-700 hover:underline">Is Professional Mosquito Spray Safe for Kids and Pets?</Link></li>
          <li><Link href="/mosquito-control" className="text-brand-700 hover:underline">View Our Mosquito Control Services</Link></li>
        </ul>
      </article>

      <CTASection
        heading="Responsible, Effective Mosquito Control for Ontario Homeowners"
        subtext="Health Canada–approved formulas, licensed technicians, transparent product logs. Serving the GTA — free quotes at (289) 216-5030."
      />
    </>
  )
}
