import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import AuthorByline from '@/components/AuthorByline'
import BuyLink from '@/components/BuyLink'
import TopPick from '@/components/TopPick'
import FreshnessStamp from '@/components/FreshnessStamp'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { NEW_BLOGS_2, MOSQUITO_BLOGS } from '@/lib/constants'
import { tagForSlug } from '@/lib/amazon-clusters'

const POST = NEW_BLOGS_2[0]
const UPDATED = POST.date

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Repellent Plants Ontario: Citronella & 9 More',
  description:
    'The best mosquito-repellent plants for Ontario — plus a deep dive on the citronella plant: is it a perennial here, geranium vs. grass, and does it really work?',
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
  {
    question: 'Is the citronella plant a perennial in Ontario?',
    answer: 'Not a hardy one. Both the citronella geranium (Pelargonium citrosum) and true citronella grass (Cymbopogon nardus) are tender, frost-sensitive plants that will not survive a GTA winter outdoors — we sit in USDA Zone 6. Ontario gardeners grow them as annuals, or overwinter them indoors in a sunny window and move them back outside after the mid-May frost date.',
  },
  {
    question: 'What is the difference between the citronella plant and citronella grass?',
    answer: 'The garden-centre "citronella plant" or "mosquito plant" is a scented geranium (Pelargonium citrosum) bred to smell citrusy, and it releases almost no repellent passively. True citronella grass (Cymbopogon nardus) is the tropical grass that commercial citronella oil is actually distilled from. They are unrelated species, and neither perfumes a yard on its own.',
  },
  {
    question: 'Does the citronella plant keep mosquitoes away?',
    answer: 'Barely, and only right at the leaf. Controlled studies of the "mosquito plant" geranium found no measurable reduction in bites, because the scent carries only a few centimetres while mosquitoes track the carbon dioxide and body heat you give off from much farther away. It is a pleasant patio plant, not yard-wide mosquito control — for that you need standing-water removal plus a professional barrier spray.',
  },
]

const AMZ_TAG = tagForSlug('mosquito-repellent-plants-ontario')

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
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">10 Plants That Repel Mosquitoes in Ontario (Tested in GTA Climate, 2026)</h1>
          <p className="text-brand-300 text-sm">Plants that actually reduce mosquito pressure in Ontario gardens — what works, what doesn&apos;t, and how to combine them with professional barrier spray.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      {/* QUICK ANSWER — for AI extraction + Google AI Overviews */}
      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">The 10 most effective mosquito-repelling plants for Ontario gardens are lavender, basil, bee balm, catnip, lemon balm, marigolds, rosemary, citronella grass, peppermint, and sage. Plants alone reduce mosquito pressure only modestly, within 1–3 metres — they complement standing-water removal and barrier spray, not replace them.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>All 10 plants grow in USDA zones 5–6, matching GTA growing conditions.</li>
              <li>Catnip&apos;s nepetalactone tested roughly 10× more effective than DEET in Iowa State lab studies, though real-world results are more modest.</li>
              <li>Plants alone deliver about a 15–20% reduction near seating areas — not full-yard control.</li>
              <li>Combined with standing-water removal and professional barrier spray, reduction reaches 85–95% across the property.</li>
              <li>The garden-centre &ldquo;citronella plant&rdquo; (Pelargonium citrosum) produces almost no airborne repellent passively — skip it.</li>
              <li>Best GTA planting time is mid-May, after the typical May 9–18 frost-free date.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">— BuzzSkito, GTA mosquito &amp; tick control · 150+ five-star Google reviews</p>
          </div>
        </div>
      </section>

      {/* KEY FACTS */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Mosquito-Repelling Plants Key Facts (Ontario, 2026)</h2>
          <div className="rounded-xl border border-navy-100 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['GTA growing zone', 'USDA Zone 6a/6b — informs which plants overwinter outdoors'],
                  ['Strongest repellent (research)', 'Catnip (Nepeta cataria) — nepetalactone ~10× more effective than DEET in lab studies'],
                  ['Hardiest perennial', 'Lavender (Lavandula angustifolia) — Zone 5, drought-tolerant, easy in GTA'],
                  ['Best for containers', 'Basil, lemon balm, peppermint, citronella grass'],
                  ['Doesn’t work', '&ldquo;Citronella plant&rdquo; (Pelargonium citrosum) — minimal passive scent release'],
                  ['Plants alone effectiveness', '15–20% reduction near seating; not full-yard control'],
                  ['Combined with barrier spray', '85–95% reduction across full property'],
                  ['Bee/pollinator safe', 'Yes — most repellent plants are excellent pollinator forage'],
                  ['Where to buy in Ontario', 'Sheridan Nurseries, Canadian Tire, Home Depot, local farmers markets (May–June)'],
                  ['Best planting time', 'Mid-May after last frost (GTA frost-free date typically May 9–18)'],
                ].map(([k, v]) => (
                  <tr key={k} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-2.5 font-semibold text-brand-900 bg-gray-50 w-1/3">{k}</td>
                    <td className="px-4 py-2.5 text-gray-800" dangerouslySetInnerHTML={{ __html: v }} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12 prose-brand">
        <AuthorByline datePublished={POST.date} />

        <p className="text-lg text-gray-600 not-prose border-l-4 border-brand-400 pl-5 py-2 mb-8">
          Plants alone won&apos;t eliminate mosquitoes from your yard — but the right ones can meaningfully reduce pressure near seating areas. This guide covers what actually works in Ontario&apos;s climate, what doesn&apos;t, and how to combine natural deterrents with professional barrier spray for the best results. Part of our <Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 underline">Ultimate Mosquito Control Guide</Link>.
        </p>

        <AffiliateDisclosure />

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

        <h2>The Citronella Plant, Explained (Care, Perennial Question &amp; Myths)</h2>
        <p className="text-lg text-gray-600 not-prose border-l-4 border-brand-400 pl-5 py-2 my-6">
          <strong>Is citronella a perennial in Ontario?</strong> Only as a tender perennial. Both the &ldquo;mosquito plant&rdquo; (citronella geranium, <em>Pelargonium citrosum</em>) and true citronella grass (<em>Cymbopogon nardus</em>) are frost-sensitive and will not survive a GTA winter outdoors — we sit in USDA Zone 6. In practice, Ontario gardeners grow citronella as an annual, or overwinter it indoors in a sunny window and move it back out after the mid-May frost date.
        </p>

        <h3>&ldquo;Mosquito plant&rdquo; vs. true citronella grass</h3>
        <p>The two plants sold as &ldquo;citronella&rdquo; are completely different species, and the difference matters:</p>
        <ul>
          <li><strong>Citronella geranium / &ldquo;mosquito plant&rdquo; (<em>Pelargonium citrosum</em>):</strong> A scented geranium bred to smell citrus-like, and the one most garden centres stock. It releases almost no repellent into the air on its own — you have to crush a leaf against your skin to notice anything, and even then it barely helps.</li>
          <li><strong>True citronella grass (<em>Cymbopogon nardus</em>, and its cousin <em>C. winterianus</em>):</strong> The actual commercial source of citronella oil. It is a tall tropical grass that produces far more citronellal, but that oil has to be steam-distilled out — a living clump sitting in a pot still won&rsquo;t perfume your yard.</li>
        </ul>

        <h3>How to grow citronella in the GTA</h3>
        <p>Give either plant full sun (6+ hours), a large container with free-draining potting mix, and steady water — citronella grass in particular is thirsty. Feed monthly through the summer. Because neither is winter-hardy here, plant out only after the mid-May frost date, then either treat it as a one-season annual or lift it indoors before the first fall frost. Set pots right beside where you actually sit; a plant three metres away does nothing. If you want to try one on your own patio, live citronella plants ship seasonally: <BuyLink tag={AMZ_TAG} search="citronella plant">Check price on Amazon.ca &rarr;</BuyLink></p>

        <h3>The honest truth: plants alone won&rsquo;t clear a yard</h3>
        <p>Here is the myth worth busting: no citronella plant — geranium or grass — will meaningfully reduce mosquitoes across an Ontario backyard. Peer-reviewed trials of the &ldquo;mosquito plant&rdquo; geranium have repeatedly found no measurable protection. The scent travels only a few centimetres, while mosquitoes home in on the carbon dioxide and body heat you give off from well beyond that. Treat citronella as a pleasant patio plant, not pest control.</p>
        <p>For protection you can actually feel, pair it with the two things that work at yard scale: eliminate standing water, and put down a <Link href="/mosquito-control">professional barrier spray</Link> that coats the vegetation where mosquitoes rest and keeps working for up to 30 days. Our breakdown of <Link href="/blog/mosquito-vs-diy-vs-professional-control">DIY vs. professional mosquito control</Link> lays out the full comparison, and our guide to <Link href="/blog/natural-mosquito-repellent-ontario">natural mosquito repellents in Ontario</Link> covers the non-chemical options worth trying.</p>
        <p>Because plants alone won&rsquo;t hold a patio through a July evening, most Ontario homeowners bridge the gap with a spot device that actually creates a protection zone. A butane-powered repeller such as a Thermacell puts out a 20-foot mosquito-free bubble around your seating in minutes — a genuine upgrade over hoping a potted geranium does the job: <BuyLink tag={AMZ_TAG} search="thermacell mosquito repeller">Check price on Amazon.ca &rarr;</BuyLink></p>

        <TopPick tag={AMZ_TAG}
          label="Best Spot Protection for a Patio"
          name="Thermacell Mosquito Repeller"
          blurb="If repellent plants can't hold your seating area through a July evening, a butane-powered Thermacell creates a roughly 20-foot mosquito-free zone within minutes — no spray on your skin, no smoke, and far more reliable than a potted geranium. It's the honest bridge between garden plants and a full barrier-spray program."
          search="thermacell mosquito repeller"
          score={8.5}
          pros={['Creates a real ~20-ft protection zone', 'Works in minutes, scent-free', 'Portable — deck, patio, or campsite']}
          cons={['Needs butane + repellent refills', 'Best in still air, not gusty wind']}
        />

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
