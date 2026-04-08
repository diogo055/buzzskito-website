import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { NEW_BLOGS, MOSQUITO_BLOGS, TICK_BLOGS } from '@/lib/constants'

const POST = NEW_BLOGS[0]

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control in Vaughan & York Region | BuzzSkito',
  description:
    "Boyd Conservation Area, Humber River, and Vaughan's new-build ponds create intense seasonal mosquito pressure. Here's how to protect your Vaughan property.",
  canonical: `/blog/${POST.slug}`,
  type: 'article',
  publishedTime: POST.date,
})

const FAQS = [
  {
    question: 'Why is mosquito pressure so intense in Vaughan?',
    answer:
      "Vaughan sits in the Humber River watershed. Boyd Conservation Area, the Humber River floodplain, and Kortright Centre for Conservation all provide extensive standing water and dense canopy cover — ideal mosquito breeding and harbouring habitat. On top of that, Vaughan's rapid new-build developments leave construction ponds and graded land that holds water for weeks after rain, seeding populations right in residential areas.",
  },
  {
    question: 'Which Vaughan neighbourhoods have the worst mosquito problems?',
    answer:
      'Properties in Islington Woods, Weston Downs, and Pine Valley back directly onto the Humber River valley. Kleinburg and Woodbridge estates near the conservation lands also experience heavy pressure. Even newer developments in Vellore Village and Sonoma Heights can see significant mosquito activity due to retention ponds and detention basins built into the stormwater systems.',
  },
  {
    question: 'How many treatments do Vaughan homeowners typically need per season?',
    answer:
      "Most Vaughan properties benefit from 4–5 treatments from May through September. Properties adjacent to Boyd Conservation Area or the Humber River corridor often need the full five, since mosquitoes continuously re-enter from the conserved lands next door. We'll assess your specific lot and recommend a schedule that makes sense.",
  },
  {
    question: 'Is professional mosquito spray safe near the conservation areas?',
    answer:
      "Yes. BuzzSkito uses Health Canada–approved formulas applied only to your private property — we target resting sites like hedges, shrub undersides, and tree canopy edges where adult mosquitoes harbour during the day. We don't treat open water or land beyond your property boundaries. After 30 minutes of drying, the treated areas are safe for kids, pets, and pollinators.",
  },
]

export default function MosquitoControlVaughanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: POST.title, description: POST.excerpt, slug: POST.slug, datePublished: POST.date })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Mosquito Control Vaughan', url: `/blog/${POST.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${POST.slug}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Mosquito Control Vaughan</span>
          </nav>
          <span className="bg-brand-800 text-brand-200 text-xs px-3 py-1 rounded-full mb-4 inline-block">Mosquito Control · York Region</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">{POST.title}</h1>
          <p className="text-brand-300 text-sm">Published {new Date(POST.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })} · By BuzzSkito</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12 prose-brand">
        <p className="text-lg text-gray-600 leading-relaxed not-prose border-l-4 border-brand-400 pl-5 py-2 mb-8">
          Vaughan sits in the middle of the Humber River watershed — and that geography makes it one of York Region&rsquo;s most challenging cities for mosquito control. This guide explains exactly why, and what actually works for Vaughan homeowners. See our <Link href="/vaughan-mosquito-control" className="text-brand-700 underline">Vaughan mosquito control service page</Link> for treatment details.
        </p>

        <h2>Why Vaughan Has a Mosquito Problem That Won&rsquo;t Fix Itself</h2>
        <p>Most GTA cities have mosquito pressure. Vaughan has a structural mosquito problem — meaning the conditions that create mosquitoes are baked into the landscape and will not change on their own.</p>
        <p>The Humber River runs through the city&rsquo;s western edge, with extensive floodplain and valley land that holds water for days after rainfall. <strong>Boyd Conservation Area</strong> (1,700 acres in the heart of Vaughan) provides dense forest canopy, wetland margins, and slow-moving creek habitat that supports mosquito breeding from May through September. The <strong>Kortright Centre for Conservation</strong> in Woodbridge adds another 325 acres of managed woodland adjacent to residential streets.</p>
        <p>On top of the natural features, Vaughan has been one of Ontario&rsquo;s fastest-growing cities for 20 years. Construction sites and newly graded land hold water in low spots. Detention ponds built into new subdivisions in Kleinburg, Maple, and Vellore Village provide the perfect shallow, warm-water breeding environment. These aren&rsquo;t temporary problems — the ponds are permanent stormwater infrastructure.</p>

        <h2>Which Vaughan Neighbourhoods See the Worst Mosquito Activity?</h2>
        <p>Not all of Vaughan is equally affected. Properties that back onto or are within a few hundred metres of the following areas consistently see the heaviest mosquito pressure:</p>
        <ul>
          <li><strong>Islington Woods and Weston Downs</strong> — Back lot lines abut the Humber River valley. Mosquitoes emerging from the floodplain travel into yards every evening from late May onward.</li>
          <li><strong>Pine Valley and East Woodbridge</strong> — Dense mature canopy provides daytime harbouring cover. Evening activity here starts earlier in the season than most Vaughan neighbourhoods.</li>
          <li><strong>Kleinburg estates</strong> — Large lots near the Humber River and Boyd Conservation Area. Rural-scale mosquito pressure in a residential setting.</li>
          <li><strong>Sonoma Heights and Vellore Village</strong> — Retention ponds in the stormwater network seed mosquitoes directly into residential areas. Newer neighbourhoods, but the problem is already well established.</li>
          <li><strong>Patterson and Maple</strong> — Newer subdivisions near Rutherford Road and Highway 400 with stormwater management ponds nearby.</li>
        </ul>

        <h2>The Tick Problem in Vaughan That Most Homeowners Don&rsquo;t Know About</h2>
        <p>Most Vaughan homeowners are focused on mosquitoes, but the same conservation areas that drive mosquito pressure — Boyd Conservation Area, the Humber River valley, Kortright Centre — are confirmed blacklegged tick habitat. The City of Vaughan and York Region Public Health have documented established tick populations in these areas.</p>
        <p>If your property backs onto any forested area in Vaughan, you should be treating for both. See our <Link href="/vaughan-tick-spray" className="text-brand-700 underline">Vaughan tick control service page</Link> for details on how barrier spray reduces tick exposure for your family and pets.</p>

        <h2>What Mosquito Season Actually Looks Like in Vaughan</h2>
        <p>Based on the microclimates created by the Humber River and conservation lands, here is how the Vaughan mosquito season typically unfolds:</p>
        <ul>
          <li><strong>Late April:</strong> First adults emerge near the Humber floodplain and conservation area edges. Most homeowners don&rsquo;t notice yet.</li>
          <li><strong>May:</strong> Populations build quickly. Properties near Boyd and the Humber River valley are noticeably affected by mid-May.</li>
          <li><strong>June–July:</strong> Peak season. Evening activity makes backyards unusable without treatment. This is when we get the most calls — and when it&rsquo;s hardest to get a quick booking.</li>
          <li><strong>August:</strong> Sustained pressure. Late-summer rain events spike activity even on properties that were well-managed earlier.</li>
          <li><strong>September:</strong> Activity declines but continues. Homeowners who stop treatment in August often see mosquitoes return for Labour Day gatherings.</li>
        </ul>

        <h2>What Actually Works: Barrier Spray for Vaughan Properties</h2>
        <p>The most effective approach for Vaughan homeowners is professional barrier spray targeting the daytime resting sites on your property — shrub undersides, hedge interiors, the shaded edge between lawn and garden beds, and lower tree canopy. This is where adult mosquitoes harbour during the day and from where they emerge at dusk.</p>
        <p>Store-bought products, citronella candles, and backyard foggers provide temporary relief but don&rsquo;t break the cycle. Because Vaughan properties are continuously re-seeded by mosquitoes from adjacent conservation lands, you need ongoing residual protection — not a one-time fix.</p>
        <p>BuzzSkito&rsquo;s Health Canada–approved barrier spray provides 3–4 weeks of residual protection per treatment. For Vaughan properties adjacent to Boyd or the Humber River, we typically recommend a 5-treatment program running May through September.</p>

        <h2>Related Guides and Services</h2>
        <ul>
          <li><Link href="/woodbridge-mosquito-control" className="text-brand-700 hover:underline">Woodbridge Mosquito Control</Link></li>
          <li><Link href="/thornhill-mosquito-control" className="text-brand-700 hover:underline">Thornhill Mosquito Control</Link></li>
          <li><Link href="/king-city-mosquito-control" className="text-brand-700 hover:underline">King City Mosquito Control</Link></li>
          <li><Link href="/mosquito-control" className="text-brand-700 hover:underline">All GTA Mosquito Control Services</Link></li>
          <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
          <li><Link href="/blog/when-to-schedule-first-mosquito-treatment-ontario" className="text-brand-700 hover:underline">When to Book Your First Treatment of the Season</Link></li>
        </ul>

        <h2>Frequently Asked Questions: Vaughan Mosquito Control</h2>
        {FAQS.map((faq) => (
          <details key={faq.question} className="not-prose bg-brand-50 border border-brand-100 rounded-xl mb-3 px-5 py-4 open:pb-5">
            <summary className="font-semibold text-brand-900 cursor-pointer">{faq.question}</summary>
            <p className="mt-3 text-gray-700 leading-relaxed">{faq.answer}</p>
          </details>
        ))}
      </article>

      <CTASection
        heading="Protect Your Vaughan Backyard This Season"
        subtext="Get a free mosquito control quote for your Vaughan property. No contracts, free re-spray guarantee."
      />
    </>
  )
}
