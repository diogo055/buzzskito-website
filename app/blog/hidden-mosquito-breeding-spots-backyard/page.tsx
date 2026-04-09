import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { NEW_BLOGS_2, MOSQUITO_BLOGS } from '@/lib/constants'

const POST = NEW_BLOGS_2[1]

export const metadata: Metadata = buildMetadata({
  title: 'Hidden Mosquito Breeding Spots | GTA | BuzzSkito',
  description:
    '12 hidden mosquito breeding spots in your GTA backyard — gutters, saucers, tarps & more. Find and eliminate them.',
  canonical: `/blog/${POST.slug}`,
  type: 'article',
  publishedTime: POST.date,
})

const FAQS = [
  {
    question: 'How much standing water does it take to breed mosquitoes?',
    answer: 'Mosquitoes can breed in as little as one teaspoon of standing water. A bottle cap, a leaf cupped in a garden bed, or a small indentation in a tarp can produce dozens of mosquitoes within a week if left undisturbed.',
  },
  {
    question: 'How long does it take for mosquitoes to breed in standing water?',
    answer: 'In warm Ontario summer conditions (above 21°C), mosquito eggs hatch within 24–48 hours and larvae can develop into adults in as little as 7–10 days. This is why eliminating water sources every 3–4 days is so critical during peak season.',
  },
  {
    question: 'Do mosquitoes breed in chlorinated pools?',
    answer: 'A properly maintained pool with correct chlorine levels will not support mosquito breeding. However, pool covers that collect rainwater, ornamental ponds without treatment, and neglected pools with low chlorine are active breeding sites.',
  },
  {
    question: 'Will eliminating breeding spots alone solve my mosquito problem?',
    answer: 'Source reduction significantly reduces the population bred on your property, but mosquitoes can fly up to 3 km from their breeding site. Professional barrier spray complements source elimination by killing mosquitoes that migrate from neighbouring properties and vegetation.',
  },
]

export default function HiddenBreedingSpotsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: POST.title, description: POST.excerpt, slug: POST.slug, datePublished: POST.date })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Hidden Mosquito Breeding Spots', url: `/blog/${POST.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${POST.slug}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Hidden Mosquito Breeding Spots</span>
          </nav>
          <span className="bg-brand-800 text-brand-200 text-xs px-3 py-1 rounded-full mb-4 inline-block">Mosquito Control</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">{POST.title}</h1>
          <p className="text-brand-300 text-sm">Published {new Date(POST.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })} · By BuzzSkito</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12 prose-brand">
        <p className="text-lg text-gray-600 not-prose border-l-4 border-brand-400 pl-5 py-2 mb-8">
          You can eliminate obvious standing water and still have a severe mosquito problem. This guide uncovers the 12 most commonly missed breeding spots in GTA backyards — including several most homeowners never think to check. Part of our <Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 underline">Ultimate Mosquito Control Guide</Link>.
        </p>

        <h2>Why Source Elimination Matters</h2>
        <p>A single female mosquito lays 100–200 eggs per batch, and can produce multiple batches per season. In the right conditions — warm temperatures and standing water — one neglected container can produce thousands of mosquitoes over a summer. Eliminating breeding sites before your first professional treatment dramatically increases its effectiveness and longevity.</p>

        <h2>The 12 Hidden Mosquito Breeding Spots</h2>

        <h3>1. Clogged Eavestroughs and Downspouts</h3>
        <p>Leaf debris in eavestroughs creates standing water pockets that persist for weeks. This is one of the largest and most overlooked breeding sites in GTA properties. Clean eavestroughs at least twice per season — once in spring and once in late summer after the trees leaf out.</p>

        <h3>2. Downspout Splash Blocks and Extensions</h3>
        <p>Plastic splash blocks and flexible downspout extensions often develop low spots where water pools. Check these after rainfall and ensure water flows freely away from the foundation.</p>

        <h3>3. Plant Saucers and Container Bases</h3>
        <p>Every potted plant on your porch, patio, or deck sits in a saucer that holds water after rain or watering. Dump these after every rain event. Consider using saucers with drainage holes or eliminating them entirely for containers in rain-exposed areas.</p>

        <h3>4. Tarps and Covers</h3>
        <p>Pool covers, BBQ covers, boat tarps, and woodpile covers all develop puddles in low spots. After rainfall, check every covered surface and eliminate standing water. Consider adjusting tarp tension to shed water rather than pool it.</p>

        <h3>5. Children&apos;s Toys and Play Equipment</h3>
        <p>Buckets, sandboxes with depression edges, ride-on toys, and plastic outdoor playscapes accumulate water in every hollow surface. Turn toys upside down when not in use. Check sandboxes after rain for water collection along the frame edges.</p>

        <h3>6. Birdbaths</h3>
        <p>A birdbath not refreshed every 48–72 hours becomes a prime mosquito nursery. Change the water every 2–3 days during peak season. Consider adding a small recirculating pump — moving water cannot support mosquito breeding.</p>

        <h3>7. Ornamental Ponds and Water Features</h3>
        <p>Garden ponds without fish or a recirculating pump are ideal breeding habitat. Add goldfish or mosquito fish (<em>Gambusia affinis</em>) to consume larvae, or treat with BTi mosquito dunks — a bacteria-based larvicide that is safe for wildlife and pets.</p>

        <h3>8. Low Spots in Lawn and Garden Beds</h3>
        <p>After heavy GTA rainfall, lawn depressions can hold water for 5–7 days — long enough for a complete mosquito breeding cycle. Identify these spots and address the grading with topsoil to improve drainage, or install a French drain for persistent problem areas.</p>

        <h3>9. Tree Holes and Stumps</h3>
        <p>Cavities in mature trees and hollow stumps hold surprising amounts of water and are extremely warm — an ideal micro-habitat. Fill tree cavities with sand or foam sealant. For stumps, grind them down or cover completely.</p>

        <h3>10. Recycling Bins and Garbage Can Lids</h3>
        <p>Outdoor recycling containers and upturned garbage lids accumulate water quickly. Drill drainage holes in the bottom of outdoor bins and check lids weekly. Rinse cans and bottles before placing them in open recycling containers.</p>

        <h3>11. Wheelbarrows and Garden Carts</h3>
        <p>Left outside between uses, wheelbarrows and garden carts become immediate water collectors. Store them upright or inverted in the garage or shed.</p>

        <h3>12. Mulch and Compost Piles</h3>
        <p>Dense mulch retains moisture at the surface — enough for mosquito eggs to survive but not deep enough to actually breed in large numbers. More critically, the compost pile itself can develop wet pockets that support breeding. Turn compost regularly and keep it covered. Avoid over-mulching to depths beyond 3 inches.</p>

        <h2>Quick Reference Checklist</h2>
        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-brand-800 text-white">
                <th className="px-4 py-2 text-left">Location</th>
                <th className="px-4 py-2 text-left">Action</th>
                <th className="px-4 py-2 text-left">Frequency</th>
              </tr>
            </thead>
            <tbody>
              {[
                { loc: 'Eavestroughs', action: 'Clean and flush', freq: 'Spring + late summer' },
                { loc: 'Plant saucers', action: 'Dump after rain', freq: 'After every rainfall' },
                { loc: 'Birdbath', action: 'Change water', freq: 'Every 2–3 days' },
                { loc: 'Tarps/covers', action: 'Check low spots', freq: 'After every rainfall' },
                { loc: 'Toys/playsets', action: 'Turn upside down', freq: 'When not in use' },
                { loc: 'Lawn low spots', action: 'Re-grade or drain', freq: 'One-time fix' },
                { loc: 'Tree cavities', action: 'Fill with sand', freq: 'One-time fix' },
                { loc: 'Wheelbarrows', action: 'Store inverted', freq: 'When not in use' },
              ].map(({ loc, action, freq }) => (
                <tr key={loc} className="border-b border-gray-200 even:bg-gray-50">
                  <td className="px-4 py-2 font-medium text-gray-800">{loc}</td>
                  <td className="px-4 py-2 text-brand-700">{action}</td>
                  <td className="px-4 py-2 text-gray-600">{freq}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>After Source Elimination: Professional Barrier Spray</h2>
        <p>Removing breeding sites is step one. Step two is treating the adult mosquito population that has already established itself in your vegetation. Professional barrier spray from BuzzSkito kills mosquitoes on contact across all your shrubs, garden edges, tree lines, and lawn perimeter — and the residual formula stays active for up to 30 days.</p>
        <p>Combined, source elimination and barrier spray is the most effective approach available to GTA homeowners — significantly outperforming either method alone.</p>

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
          <li><Link href="/blog/how-to-prevent-mosquitoes-in-your-backyard" className="text-brand-700 hover:underline">12 Ways to Prevent Mosquitoes in Your Backyard</Link></li>
          <li><Link href="/blog/mosquito-repellent-plants-ontario" className="text-brand-700 hover:underline">Best Mosquito-Repelling Plants for Ontario Gardens</Link></li>
          <li><Link href="/blog/how-long-does-mosquito-spray-last" className="text-brand-700 hover:underline">How Long Does Mosquito Spray Last?</Link></li>
          <li><Link href="/mosquito-control" className="text-brand-700 hover:underline">View Our Mosquito Control Services</Link></li>
        </ul>
      </article>

      <CTASection heading="Eliminate Breeding Sites — Then Eliminate the Mosquitoes" subtext="BuzzSkito barrier spray kills the adult population across your entire yard. Up to 30-day guaranteed protection." />
    </>
  )
}
