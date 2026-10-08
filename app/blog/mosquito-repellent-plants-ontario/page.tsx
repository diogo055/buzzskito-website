import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import AuthorByline from '@/components/AuthorByline'
import BuyLink from '@/components/BuyLink'
import TopPick from '@/components/TopPick'
import FreshnessStamp from '@/components/FreshnessStamp'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import StickyBuyBar from '@/components/StickyBuyBar'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { NEW_BLOGS_2, MOSQUITO_BLOGS, PROMISES } from '@/lib/constants'
import { tagForSlug } from '@/lib/amazon-clusters'

const POST = NEW_BLOGS_2[0]
const UPDATED = POST.date

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Repellent Plants: What Works in Ontario',
  description:
    'Which mosquito-repelling plants actually work in Ontario gardens: lavender, basil and catnip earn their spot, the garden-centre citronella geranium does not.',
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
    answer: 'Yes. Plants can help reduce mosquito attraction to your garden while professional barrier spray kills mosquitoes on contact where they rest, with the residual on the leaves renewed on your plan\'s schedule (every 2 weeks on Standard, monthly on Basic). Combined, they do more than either does alone.',
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
  {
    question: 'What plants repel mosquitoes in the United States?',
    answer: 'Lavender, basil, catnip, lemon balm, peppermint, rosemary, sage, marigolds, bee balm and citronella grass are the plants most often credited with repelling mosquitoes, but US university extension services say plants do not do it simply by growing in a yard. Iowa State and Colorado State extension report that a plant releases its repellent oils when the leaves are crushed, not while it sits in a bed or a pot. For protection, the CDC recommends an EPA-registered repellent such as DEET, picaridin or oil of lemon eucalyptus.',
  },
  {
    question: 'Which mosquito-repelling plants are perennial in my USDA hardiness zone?',
    answer: 'NC State Extension lists catnip and lemon balm as perennial from Zone 3, bee balm and sage from Zone 4, and lavender and peppermint from Zone 5. Rosemary is listed only for Zones 8 to 10 and basil only for Zone 10, so most US gardeners grow basil as an annual. Marigolds are annuals, and citronella grass and the citronella geranium are frost-tender. Enter your ZIP code on the USDA Plant Hardiness Zone Map to find your zone.',
  },
  {
    question: 'Is oil of lemon eucalyptus the same as a lemon eucalyptus plant or essential oil?',
    answer: 'No. Oil of lemon eucalyptus (OLE) is a plant-derived active ingredient in EPA-registered repellents, and the CDC lists it alongside DEET and picaridin. The CDC does not recommend pure lemon eucalyptus essential oil, because it has not been through validated safety and efficacy testing and is not registered with the EPA as a repellent. The CDC also says not to use products containing OLE or PMD on children under 3 years old.',
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
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">10 Plants That Repel Mosquitoes in Ontario — and the Ones That Don&apos;t</h1>
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
              <li>Plants alone act on the air within a metre or two of the foliage, mostly when leaves are crushed — not full-yard control.</li>
              <li>Plants are a marginal layer at best; standing-water removal and a barrier spray on resting vegetation are what actually change mosquito numbers on a property.</li>
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
          <div className="rounded-xl border border-navy-100 overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['GTA growing zone', 'USDA Zone 6a/6b — informs which plants overwinter outdoors'],
                  ['Strongest repellent (research)', 'Catnip (Nepeta cataria) — nepetalactone ~10× more effective than DEET in lab studies'],
                  ['Hardiest perennial', 'Lavender (Lavandula angustifolia) — Zone 5, drought-tolerant, easy in GTA'],
                  ['Best for containers', 'Basil, lemon balm, peppermint, citronella grass'],
                  ['Doesn’t work', '&ldquo;Citronella plant&rdquo; (Pelargonium citrosum) — minimal passive scent release'],
                  ['Plants alone effectiveness', 'Marginal — limited to the air within 1–3 metres of the foliage; not full-yard control'],
                  ['Combined with barrier spray', 'Barrier spray does the work; plants are decorative'],
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
        <p>Marigolds are also the cheapest plant on this list to establish in quantity, because a dense border wants dozens of them and nursery six-packs add up fast. Start them indoors in April and transplant after the mid-May frost date: <BuyLink tag={AMZ_TAG} search="marigold seeds">check marigold seeds on Amazon.ca &rarr;</BuyLink></p>

        <h3>7. Rosemary (<em>Salvia rosmarinus</em>)</h3>
        <p>Contains camphor and α-pinene, which mosquitoes dislike. Rosemary is borderline hardy in Southern Ontario (Zone 6) and does best in sheltered, south-facing locations. Grow in containers if you&apos;re north of the 416. Burning rosemary on the grill can create a short-term repellent smoke effect.</p>

        <h3>8. Citronella Grass (<em>Cymbopogon nardus</em>)</h3>
        <p>The actual source plant for citronella oil. Grows as an annual in Ontario — it won&apos;t survive winter outdoors. Plant in large containers near seating and brush leaves to release scent. More effective than the common &quot;citronella plant&quot; (Pelargonium) sold at garden centres.</p>

        <h3>9. Peppermint (<em>Mentha × piperita</em>)</h3>
        <p>Menthol and menthone in peppermint are active mosquito deterrents. Grow in containers — peppermint spreads aggressively if planted directly in garden beds. Also useful: diluted peppermint oil applied to skin provides temporary personal repellency.</p>
        <p>Peppermint, lemon balm and citronella grass all belong in pots rather than loose in a bed, and they want depth — a shallow decorative bowl dries out by noon in July. Deep patio planters are the practical purchase before planting day: <BuyLink tag={AMZ_TAG} search="large outdoor planter pots">check patio planters on Amazon.ca &rarr;</BuyLink></p>

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
        <p>For protection you can actually feel, pair it with the two things that work at yard scale: eliminate standing water, and put down a <Link href="/mosquito-control">professional barrier spray</Link> that coats the vegetation where mosquitoes rest and is renewed on your plan&rsquo;s schedule. Our breakdown of <Link href="/blog/mosquito-vs-diy-vs-professional-control">DIY vs. professional mosquito control</Link> lays out the full comparison, and our guide to <Link href="/blog/natural-mosquito-repellent-ontario">natural mosquito repellents in Ontario</Link> covers the non-chemical options worth trying.</p>
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
        <p>The flip side of the question is worth knowing too, because a few common ornamentals quietly work against you: bromeliads, taro, cut bamboo, and any pot sitting in a drainage saucer hold the standing water mosquitoes actually breed in. We list the culprits in <Link href="/blog/what-flowers-attract-mosquitoes" className="text-brand-700 hover:underline">our Ontario garden guide to mosquito-friendly plants</Link>.</p>

        <h2>How to Maximize Effectiveness: The Layered Approach</h2>
        <p>For genuine mosquito reduction in your GTA backyard, plants work best as one layer in a multi-step strategy:</p>
        <ol>
          <li><strong>Eliminate standing water</strong> — any container holding water for more than 48 hours is a breeding site</li>
          <li><strong>Plant strategically</strong> — concentrate repellent plants near patios, doorways, and seating areas</li>
          <li><strong>Professional barrier spray</strong> — kills mosquitoes on contact in the vegetation where they rest, with the residual renewed on your plan&apos;s schedule (every 2 weeks on Standard, monthly on Basic)</li>
        </ol>
        <p>Step one is where most gardens are actually lost, and it is the step people finish only halfway. Drain what you can drain — but for the water that has to stay, like a rain barrel, a pond edge or a low corner that stays wet for days after a storm, a Bti dunk or granule floats in the water and takes out the larvae before they ever reach your patio furniture: <BuyLink tag={AMZ_TAG} search="mosquito dunks bti">check mosquito dunks on Amazon.ca &rarr;</BuyLink></p>
        <p>Plants reduce the ambient mosquito population around specific spots. Professional spray reduces the adult mosquitoes resting across the full property. Together, they do more than either achieves alone.</p>

        <h2>Plants That Repel Mosquitoes in the United States: What Is Different</h2>
        <p>The plants that repel mosquitoes, according to most lists, are lavender, basil, bee balm, catnip, lemon balm, marigolds, rosemary, citronella grass, peppermint and sage, each of which carries a strongly scented oil. None of them has been shown to protect a yard simply by growing in it: US university extension services report that the oils work when a leaf is crushed or an extract is applied to skin, and that a pot on the patio does not. For a reader in the United States two things change. Which of these plants return each spring depends on your USDA hardiness zone, and the advice on what to rely on instead comes from the CDC and the EPA.</p>

        <h3>Which of these plants are perennial in your USDA hardiness zone?</h3>
        <p>Six of the ten are perennial from Zone 5 or colder (lavender, bee balm, catnip, lemon balm, peppermint and sage), rosemary is listed as hardy only from Zone 8, basil only in Zone 10, and marigolds, citronella grass and the citronella geranium are warm-season plants wherever it freezes. The zones come from the <a href="https://planthardiness.ars.usda.gov/pages/how-to-use-the-maps" target="_blank" rel="noopener noreferrer">USDA Plant Hardiness Zone Map</a>, which is based on the average annual extreme minimum winter temperature and runs from Zone 1 (coldest) to Zone 13 (warmest) in 10-degree Fahrenheit steps, each split into 5-degree halves labeled a and b. Enter your ZIP code on the map to find yours. The current edition, which the <a href="https://www.ars.usda.gov/news-events/news/research-news/2023/usda-unveils-updated-plant-hardiness-zone-map/" target="_blank" rel="noopener noreferrer">USDA released in November 2023</a>, uses weather data from 1991 to 2020, and about half the country moved into the next warmer half zone compared with the 2012 map, so a zone you memorized years ago may be out of date.</p>

        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-sm min-w-[640px]">
            <thead className="bg-brand-50">
              <tr>
                <th className="px-3 py-2 text-left">Plant</th>
                <th className="px-3 py-2 text-left">Perennial in USDA zones</th>
                <th className="px-3 py-2 text-left">Notes for US gardeners</th>
                <th className="px-3 py-2 text-left">Source</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Lavender (Lavandula angustifolia)', '5a to 9b', 'An evergreen perennial shrub that needs full sun and perfectly drained soil; it dies out in heavy clay', 'NC State Extension', 'https://plants.ces.ncsu.edu/plants/lavandula-angustifolia/'],
                ['Basil (Ocimum basilicum)', '10a to 10b', 'An annual for nearly every US gardener; transplant after the last frost', 'NC State Extension', 'https://plants.ces.ncsu.edu/plants/ocimum-basilicum/'],
                ['Bee balm (Monarda didyma)', '4a to 9b', 'A perennial wildflower native to eastern North America', 'NC State Extension', 'https://plants.ces.ncsu.edu/plants/monarda-didyma/'],
                ['Catnip (Nepeta cataria)', '3a to 9b', 'Among the cold-hardiest on the list; it can become weedy, so a container is suggested', 'NC State Extension', 'https://plants.ces.ncsu.edu/plants/nepeta-cataria/'],
                ['Lemon balm (Melissa officinalis)', '3a to 7b', 'Self-seeds and spreads aggressively by rhizomes; best grown in a container on a patio or deck', 'NC State Extension', 'https://plants.ces.ncsu.edu/plants/melissa-officinalis/'],
                ['French marigold (Tagetes patula)', 'Annual', 'A compact annual 6 to 12 inches high; replant each spring', 'NC State Extension', 'https://plants.ces.ncsu.edu/plants/tagetes-patula/'],
                ['Rosemary (Salvia rosmarinus)', '8a to 10b', 'A woody shrub suited to containers; it can be difficult to overwinter indoors', 'NC State Extension', 'https://plants.ces.ncsu.edu/plants/salvia-rosmarinus/'],
                ['Citronella grass (Cymbopogon nardus)', 'Treat as frost-tender', 'A relative of lemongrass and the source of commercial citronella oil; frost kills or severely damages lemongrass, so treat this grass as an annual too', 'Wisconsin Extension', 'https://hort.extension.wisc.edu/articles/lemongrass/'],
                ['Lemongrass (Cymbopogon citratus)', '8b to 11b', 'Grows 2 to 4 feet tall; overwinter it as a container plant in colder zones', 'NC State Extension', 'https://plants.ces.ncsu.edu/plants/cymbopogon-citratus/'],
                ['Peppermint (Mentha × piperita)', '5a to 9b', 'Spreads by rhizomes into an aggressive ground cover; a pot 12 to 16 inches wide helps contain it', 'NC State Extension', 'https://plants.ces.ncsu.edu/plants/mentha-x-piperita/'],
                ['Sage (Salvia officinalis)', '4a to 8b', 'A short-lived, bushy, semi-woody perennial shrub', 'NC State Extension', 'https://plants.ces.ncsu.edu/plants/salvia-officinalis/'],
                ['Citronella geranium (Pelargonium)', 'Tender perennial', 'Pelargoniums are often grown as annuals; they can be overwintered indoors at 40°F or warmer and kept very dry', 'NC State Extension', 'https://plants.ces.ncsu.edu/plants/pelargonium/'],
              ].map(([plant, zones, note, source, href]) => (
                <tr key={plant} className="border-t border-gray-100 align-top">
                  <td className="px-3 py-2 font-semibold text-brand-800">{plant}</td>
                  <td className="px-3 py-2 text-gray-700 whitespace-nowrap">{zones}</td>
                  <td className="px-3 py-2 text-gray-700">{note}</td>
                  <td className="px-3 py-2 text-gray-700 whitespace-nowrap"><a href={href} target="_blank" rel="noopener noreferrer" className="text-brand-700 underline">{source}</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>To turn a zone number into a temperature, <a href="https://extension.illinois.edu/blogs/garden-scoop/2023-01-07-extreme-winter-cold-and-plants" target="_blank" rel="noopener noreferrer">University of Illinois Extension</a> gives winter lows of −20 to −10°F for Zone 5 and −10 to 0°F for Zone 6. Counting up in the map&rsquo;s 10-degree steps, Zone 8, where rosemary becomes a year-round shrub, begins at 10°F, and Zone 10, the only zone listed for basil, begins at 30°F. This guide was written for Zone 6, and <a href="https://extension.illinois.edu/news-releases/shifting-usda-plant-hardiness-map-reflects-changing-climate-changes-plants" target="_blank" rel="noopener noreferrer">Illinois Extension reports</a> that most of central Illinois now falls into Zone 6a on the 2023 map, so readers in Zone 6 can follow the Ontario plant list above almost as written. Rosemary is the one to check: NC State lists it only from Zone 8, and the Ontario section above already calls it borderline and steers it into pots. Gardeners in Zone 8 and warmer gain rosemary as a permanent planting, and lemongrass from 8b, but they fall outside the listed range for lemon balm, which ends at 7b.</p>
        <p>Treat every range as a guide and not a promise. The USDA explains that the zones reflect average lowest temperatures, not the coldest night on record, so a plant growing at the cold edge of its range can be lost in one rare cold snap, and that wind, soil type, soil moisture, humidity and snow also affect survival. A single yard can hold warmer and cooler pockets than the map shows, such as a sheltered spot in front of a south-facing wall or a low corner where cold air pools.</p>

        <h3>Do intact plants repel mosquitoes? What US extension research says</h3>
        <p>No. US university extension services are consistent that a plant left growing in a bed or a pot does not repel mosquitoes, whatever oils its leaves hold.</p>
        <ul>
          <li><strong>Iowa State University.</strong> <a href="https://yardandgarden.extension.iastate.edu/faq/what-plants-will-repel-mosquitos-when-planted-nearby" target="_blank" rel="noopener noreferrer">Iowa State University Extension</a> describes scented geranium, lemon thyme, citronella grass and citrosa as ineffective when used as planted repellents. The benefit appears only when a leaf is crushed to release its oil, a plant sitting on the patio has no effect on the mosquitoes around it, and rubbing crushed leaves on skin delivers a fraction of the protection of a product made as a repellent, such as DEET. Iowa State adds a caution to check that you are not allergic before trying it.</li>
          <li><strong>Colorado State University.</strong> <a href="https://planttalk.colostate.edu/topics/insects-diseases/1400-20-plants-repel-mosquitoes" target="_blank" rel="noopener noreferrer">PlantTalk Colorado, from Colorado State University Extension,</a> lists catnip, peppermint, rosemary, marigolds, eucalyptus and artemisia and says none of them repels mosquitoes merely by growing in a landscape, because the oils are released when the plants are crushed or burned. It adds that the scented geranium sold as the mosquito plant does not contain citronella oil.</li>
          <li><strong>Clemson University.</strong> <a href="https://hgic.clemson.edu/can-plants-repel-problematic-insects/" target="_blank" rel="noopener noreferrer">Clemson Cooperative Extension</a> points to a review in the Malaria Journal of 62 studies of plant essential oils against <em>Anopheles</em> mosquitoes: 56 were run in laboratories, 6 in the field, and none examined landscape plantings. Clemson notes that the fragrance a growing plant gives off dissipates into the air and is reduced further by a breeze, and that extracted oils are short-lived too, with rosemary oil protecting test subjects for about 15 minutes and lemongrass oil for about 40 minutes.</li>
        </ul>
        <p>Field trials point the same way. In Florida, researchers at Florida A&amp;M University counted mosquitoes landing on people&rsquo;s forearms and <a href="https://pubmed.ncbi.nlm.nih.gov/7707049/" target="_blank" rel="noopener noreferrer">reported no significant difference</a> between locations with mosquito plants and locations without them, for both <em>Aedes albopictus</em> and <em>Culex quinquefasciatus</em>. In their cage trials, more <em>Culex</em> adults rested on cut leaves of the plant than on paper models of the same size and shape. An <a href="https://pubmed.ncbi.nlm.nih.gov/10901639/" target="_blank" rel="noopener noreferrer">Illinois Natural History Survey field trial</a> in June 1998 compared the mosquito plant, citronella candles, a sonic repeller and other products by landing rate, and a DEET repellent applied to skin had a consistently lower landing rate than every product that was not applied to skin. The <a href="https://pubmed.ncbi.nlm.nih.gov/8723261/" target="_blank" rel="noopener noreferrer">University of Guelph study</a> that Colorado State cites detected nothing in the plant&rsquo;s essential oil matching the <em>Cymbopogon</em> grasses that yield commercial citronella oil, and found no significant difference in biting between people with the plant and people without, while a DEET formulation cut biting by more than 90 percent for up to 8 hours.</p>
        <p>None of this means the oils do nothing; it means the living plant is the wrong way to deliver them. The EPA&rsquo;s <a href="https://www.epa.gov/insect-repellents/skin-applied-repellent-ingredients" target="_blank" rel="noopener noreferrer">list of active ingredients in registered skin-applied repellents</a> includes catnip oil and oil of citronella, and the <a href="https://npic.orst.edu/factsheets/citronellagen.html" target="_blank" rel="noopener noreferrer">National Pesticide Information Center</a> describes oil of citronella as a repellent distilled from two grass varieties that repels target pests instead of killing them and was first registered in the United States in 1948. In each case what is registered is an extracted oil in a labeled product, to be used as the label directs, and not a leaf on a stem.</p>

        <h3>What the CDC and EPA recommend instead</h3>
        <p>For your skin, the CDC recommends an EPA-registered insect repellent, and for the yard it recommends removing standing water once a week.</p>
        <ul>
          <li><strong>Use a registered repellent.</strong> The <a href="https://www.cdc.gov/mosquitoes/prevention/index.html" target="_blank" rel="noopener noreferrer">CDC&rsquo;s mosquito bite prevention guidance</a> names six active ingredients: DEET, picaridin, IR3535, oil of lemon eucalyptus (OLE), para-menthane-diol (PMD) and 2-undecanone. It describes OLE and 2-undecanone as plant-derived, so a plant-based option exists inside the registered list. The CDC says not to use products containing OLE or PMD on children under 3 years old.</li>
          <li><strong>Know what registration means.</strong> According to the <a href="https://www.epa.gov/insect-repellents/regulation-skin-applied-repellents" target="_blank" rel="noopener noreferrer">EPA&rsquo;s page on how skin-applied repellents are regulated</a>, a registered product has been evaluated and approved for human safety and effectiveness when applied according to the label, and it carries an EPA Registration Number. Some repellents made with citronella oil, cedar oil, geranium oil, peppermint oil or soybean oil are exempt from registration: the EPA reviewed those ingredients for safety in the 1990s and states that products made from them have not been evaluated for effectiveness. The CDC likewise says the effectiveness of repellents that are not EPA-registered, including some natural ones, is not known.</li>
          <li><strong>Do not swap in the essential oil.</strong> The <a href="https://www.cdc.gov/yellow-book/hcp/environmental-hazards-risks/mosquitoes-ticks-and-other-arthropods.html" target="_blank" rel="noopener noreferrer">CDC Yellow Book</a> advises against using pure oil of lemon eucalyptus, meaning the unformulated essential oil, as a repellent, because it has not been through validated testing for safety and efficacy and is not registered with the EPA. The same chapter reports that repellent-impregnated wristbands and sound-emitting devices are ineffective.</li>
          <li><strong>Choose by protection time.</strong> The EPA&rsquo;s <a href="https://www.epa.gov/insect-repellents/find-repellent-right-you" target="_blank" rel="noopener noreferrer">repellent search tool</a> returns only registered skin-applied products and lets you search by mosquitoes, ticks or both, by protection time and by active ingredient.</li>
          <li><strong>Empty the water, including under your herb pots.</strong> The <a href="https://www.cdc.gov/mosquitoes/mosquito-control/mosquito-control-at-home.html" target="_blank" rel="noopener noreferrer">CDC&rsquo;s page on mosquito control at home</a> says to empty and scrub, turn over, cover or throw out anything that holds water once a week, and its list includes planters and flowerpot saucers, so a row of herb pots belongs on that weekly round. For large bodies of water that will not be used for drinking and cannot be covered or dumped out, the CDC points to larvicides, and for adult mosquitoes to an outdoor adulticide in the dark, humid places where they rest, such as under patio furniture. For both, it says to always follow the label instructions.</li>
        </ul>

        <h3>US measurements for the numbers on this page</h3>
        <p>The Ontario sections above give distances in metric units and climate as zone numbers, and these are the US equivalents.</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-sm min-w-[520px]">
            <thead className="bg-brand-50">
              <tr>
                <th className="px-3 py-2 text-left">On this page</th>
                <th className="px-3 py-2 text-left">US equivalent</th>
                <th className="px-3 py-2 text-left">Where it comes up</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Reach of a living plant: 1 to 3 m', 'About 3 to 10 feet', 'Quick answer and key facts'],
                ['Air within 1 to 2 m of the foliage', 'About 3 to 6.5 feet', 'Quick answer'],
                ['Geranium scent carries a few cm', 'Roughly 1 to 2 inches', 'Citronella plant section'],
                ['A pot 3 m from your chair', 'About 10 feet', 'Growing citronella'],
                ['USDA Zone 5', 'Winter lows of −20 to −10°F', 'Hardiness of lavender and the other perennials'],
                ['USDA Zone 6 (6a and 6b)', 'Winter lows of −10 to 0°F', 'Home zone of this guide'],
                ['Mid-May planting date', 'Not a conversion: plant after the last spring frost where you live', 'Planting advice'],
              ].map(([metric, us, where]) => (
                <tr key={metric} className="border-t border-gray-100 align-top">
                  <td className="px-3 py-2 font-semibold text-brand-800">{metric}</td>
                  <td className="px-3 py-2 text-gray-700">{us}</td>
                  <td className="px-3 py-2 text-gray-700">{where}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Beyond Repellent Plants: What Actually Lowers Mosquito Numbers</h2>
        <p>Water removal, registered repellents and physical barriers are what lower mosquito numbers and bites, and each has its own guide on this site. The place to start is our <Link href="/blog/ultimate-backyard-mosquito-control-guide">complete backyard mosquito control guide</Link>, which puts every layer in order, from breeding sites to barrier treatments, so you can see where an herb border fits and where it does not.</p>
        <p>If the yard itself is the problem, the step-by-step guide on <Link href="/blog/how-to-get-rid-of-mosquitoes">how to get rid of mosquitoes</Link> follows CDC and EPA guidance on standing water, Bti larvicide and resting sites, and explains when a professional or your local mosquito control district is the better call. If the problem is the hour you spend on the deck, <Link href="/blog/how-to-keep-mosquitoes-away">how to keep mosquitoes away from you and your seating area</Link> compares the registered repellents named above and covers permethrin-treated clothing, fans and screens.</p>
        <p>Two patio habits often travel with repellent plants. Before adding a bug zapper or switching to yellow bulbs beside the herb pots, read <Link href="/blog/are-mosquitoes-attracted-to-light">whether mosquitoes are attracted to light</Link>, which sets out what draws them to people and what university studies found about zappers. And if a dog shares the yard, a border of herbs is not its protection: the <a href="https://www.fda.gov/animal-veterinary/animal-health-literacy/keep-worms-out-your-pets-heart-facts-about-heartworm-disease" target="_blank" rel="noopener noreferrer">FDA explains that heartworm is spread through the bite of a mosquito</a> and tells owners to talk to a veterinarian about a preventive, and our guide to <Link href="/blog/do-mosquitoes-bite-dogs">mosquito bites on dogs</Link> covers what to ask at that visit.</p>
        <p>Finally, for readers heading somewhere no planting plan would make a dent, <Link href="/blog/alaska-mosquitoes">our Alaska mosquitoes guide</Link> covers why the state has so many, when the season peaks in each region and how visitors protect themselves.</p>

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

      <StickyBuyBar
        name="Thermacell Mosquito Repeller"
        search="thermacell mosquito repeller"
        label="For patio seating"
        tag={AMZ_TAG}
      />

      <CTASection heading="Combine Plants With Professional Protection" subtext={`BuzzSkito barrier spray covers your entire yard — not just the plants. ${PROMISES.rainBack}`} />
    </>
  )
}
