import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { NEW_BLOGS_2, MOSQUITO_BLOGS } from '@/lib/constants'

const POST = NEW_BLOGS_2[0]

export const metadata: Metadata = buildMetadata({
  title: 'Best Mosquito-Repelling Plants for Ontario Gardens (2026) | BuzzSkito',
  description: 'Lavender, citronella grass, basil, and 7 other plants that reduce mosquito pressure in Ontario backyards — plus how to combine them with professional barrier spray for season-long results.',
  canonical: `/blog/${POST.slug}`,
  type: 'article',
  publishedTime: POST.date,
})

const FAQS = [
  {
    question: 'Do mosquito-repelling plants actually work?',
    answer: 'Plants like lavender, basil, and citronella grass contain natural oils that mosquitoes dislike, but they only provide modest, localized repellency — mostly within a few feet of the plant. They work best as a complement to professional barrier spray, not a replacement.',
  },
  {
    question: 'What is the best mosquito-repelling plant for Ontario?',
    answer: 'Lavender is one of the most effective and hardy options for Ontario gardens. It thrives in our climate, repels mosquitoes with its linalool oil, and also deters moths and flies. Basil and bee balm are also strong performers.',
  },
  {
    question: 'Do citronella plants work the same as citronella candles?',
    answer: 'No. Citronella candles use concentrated citronella oil burned into the air. The citronella plant (Pelargonium citrosum) releases much lower amounts of oil passively. Crushing or brushing the leaves releases more scent, but it still cannot match a candle or professional treatment.',
  },
  {
    question: 'Should I combine plants with professional mosquito spray?',
    answer: 'Yes. Plants can help reduce mosquito attraction to your garden while professional barrier spray kills mosquitoes on contact and provides up to 30 days of residual protection across your entire yard. Combined, they are significantly more effective than either alone.',
  },
]

export default function MosquitoRepellentPlantsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: POST.title, description: POST.excerpt, slug: POST.slug, datePublished: POST.date })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Mosquito-Repelling Plants Ontario', url: `/blog/${POST.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${POST.slug}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Mosquito-Repelling Plants Ontario</span>
          </nav>
          <span className="bg-brand-800 text-brand-200 text-xs px-3 py-1 rounded-full mb-4 inline-block">Mosquito Control</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">{POST.title}</h1>
          <p className="text-brand-300 text-sm">Published {new Date(POST.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })} · By BuzzSkito</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12 prose-brand">
        <p className="text-lg text-gray-600 not-prose border-l-4 border-brand-400 pl-5 py-2 mb-8">
          Plants alone won&apos;t eliminate mosquitoes from your yard — but the right ones can meaningfully reduce pressure near seating areas. This guide covers what actually works in Ontario&apos;s climate, what doesn&apos;t, and how to combine natural deterrents with professional barrier spray for the best results. Part of our <Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 underline">Ultimate Mosquito Control Guide</Link>.
        </p>

        <h2>Do Mosquito-Repelling Plants Actually Work?</h2>
        <p>The honest answer: partially. Several plants contain volatile oils — linalool, citronellal, eugenol — that mosquitoes find unpleasant. When the plant is crushed or brushed, these oils are released and can provide short-range repellency. However, a plant simply sitting in your garden releases very little of these compounds passively. You would need an enormous quantity to meaningfully affect a full backyard.</p>
        <p>That said, strategically placed plants near outdoor seating, doorways, and high-traffic areas can reduce localized mosquito activity. They are most effective as part of a layered approach — combined with eliminating standing water and professional barrier spray.</p>

        <h2>The 10 Best Mosquito-Repelling Plants for Ontario</h2>

        <h3>1. Lavender (<em>Lavandula angustifolia</em>)</h3>
        <p>Hardy to Zone 5, lavender is one of the most reliable choices for Ontario gardens. It contains linalool, which repels mosquitoes, moths, and flies. Plant it near pathways, patios, and garden borders. Drought-tolerant and low-maintenance once established.</p>

        <h3>2. Basil (<em>Ocimum basilicum</em>)</h3>
        <p>One of the few plants that releases mosquito-deterring compounds — primarily eugenol and linalool — without needing to be touched. Plant basil in containers near outdoor dining areas. It requires full sun and regular watering but is extremely effective in tight spaces.</p>

        <h3>3. Bee Balm (<em>Monarda</em>)</h3>
        <p>A native Ontario wildflower that releases thymol and other aromatic oils. Attractive to pollinators while deterring mosquitoes. Grows well in Ontario&apos;s climate and tolerates partial shade — useful for shadier yard sections where mosquitoes like to rest.</p>

        <h3>4. Catnip (<em>Nepeta cataria</em>)</h3>
        <p>Research from Iowa State University found nepetalactone — the compound in catnip — to be roughly 10 times more effective than DEET at repelling mosquitoes in lab settings. Real-world effectiveness is more modest, but catnip is a low-maintenance, aggressive grower suited to Ontario conditions. Keep it contained as it spreads.</p>

        <h3>5. Lemon Balm (<em>Melissa officinalis</em>)</h3>
        <p>Contains high levels of citronellal — the same compound used in citronella candles. Easy to grow in Ontario, though it spreads readily and is best kept in containers. Crush leaves near seating areas to release the scent.</p>

        <h3>6. Marigolds (<em>Tagetes</em>)</h3>
        <p>Widely used as a garden border plant, marigolds emit pyrethrum — a compound also used in commercial insecticides. They are most effective planted densely around property perimeters and near standing water sources. Also deters aphids and whiteflies.</p>

        <h3>7. Rosemary (<em>Salvia rosmarinus</em>)</h3>
        <p>Contains camphor and α-pinene, which mosquitoes dislike. Rosemary is borderline hardy in Southern Ontario (Zone 6) and does best in sheltered, south-facing locations. Grow in containers if you&apos;re north of the 416. Burning rosemary on the grill can create a short-term repellent smoke effect.</p>

        <h3>8. Citronella Grass (<em>Cymbopogon nardus</em>)</h3>
        <p>The actual source plant for citronella oil. Grows as an annual in Ontario — it won&apos;t survive winter outdoors. Plant in large containers near seating and brush leaves to release scent. More effective than the common &quot;citronella plant&quot; (Pelargonium) sold at garden centres.</p>

        <h3>9. Peppermint (<em>Mentha × piperita</em>)</h3>
        <p>Menthol and menthone in peppermint are active mosquito deterrents. Grow in containers — peppermint spreads aggressively if planted directly in garden beds. Also useful: diluted peppermint oil applied to skin provides temporary personal repellency.</p>

        <h3>10. Sage (<em>Salvia officinalis</em>)</h3>
        <p>Burning sage near outdoor fires and firepits creates aromatic smoke that mosquitoes actively avoid. As a living plant, sage provides modest ambient repellency around seating areas. Hardy in most of Southern Ontario with winter mulching.</p>

        <h2>Plants That Don&apos;t Work (Despite the Claims)</h2>
        <p>Several plants are widely marketed as mosquito repellents without meaningful evidence:</p>
        <ul>
          <li><strong>Pelargonium &quot;citronella plant&quot;:</strong> A scented geranium marketed aggressively at garden centres. It smells citrus-like when handled but produces negligible airborne repellent compounds passively.</li>
          <li><strong>Eucalyptus (in Ontario):</strong> Not cold-hardy here, and the diluted passive release of eucalyptol from a potted plant is too low to be effective outdoors.</li>
          <li><strong>Lemongrass:</strong> Confused with citronella grass. It contains some citral but at lower concentrations. Ornamental value only in Ontario.</li>
        </ul>

        <h2>How to Maximize Effectiveness: The Layered Approach</h2>
        <p>For genuine mosquito reduction in your GTA backyard, plants work best as one layer in a multi-step strategy:</p>
        <ol>
          <li><strong>Eliminate standing water</strong> — any container holding water for more than 48 hours is a breeding site</li>
          <li><strong>Plant strategically</strong> — concentrate repellent plants near patios, doorways, and seating areas</li>
          <li><strong>Professional barrier spray</strong> — kills mosquitoes on contact across your entire yard and provides up to 30 days of residual protection through all vegetation</li>
        </ol>
        <p>Plants reduce the ambient mosquito population around specific spots. Professional spray eliminates the population across the full property. Together, they provide season-long protection that neither achieves alone.</p>

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
          <li><Link href="/blog/hidden-mosquito-breeding-spots-backyard" className="text-brand-700 hover:underline">Hidden Mosquito Breeding Spots in Your GTA Backyard</Link></li>
          <li><Link href="/blog/mosquito-vs-diy-vs-professional-control" className="text-brand-700 hover:underline">DIY vs. Professional Mosquito Control: What Actually Works</Link></li>
          <li><Link href="/mosquito-control" className="text-brand-700 hover:underline">View Our Mosquito Control Services</Link></li>
        </ul>
      </article>

      <CTASection heading="Combine Plants With Professional Protection" subtext="BuzzSkito barrier spray covers your entire yard — not just the plants. Up to 30-day protection guaranteed." />
    </>
  )
}
