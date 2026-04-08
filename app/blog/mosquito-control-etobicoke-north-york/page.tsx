import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { NEW_BLOGS, MOSQUITO_BLOGS, TICK_BLOGS } from '@/lib/constants'

const POST = NEW_BLOGS[2]

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito & Tick Control in Etobicoke and North York | BuzzSkito',
  description:
    "Humber River valley, Don Valley ravines, and Centennial Park — Etobicoke and North York homeowners face real mosquito and tick pressure near Toronto's natural corridors.",
  canonical: `/blog/${POST.slug}`,
  type: 'article',
  publishedTime: POST.date,
})

const FAQS = [
  {
    question: 'Does living near the Humber River in Etobicoke really make that much of a mosquito difference?',
    answer:
      "Yes — significantly. The Humber River valley is one of the longest continuous green corridors in Toronto. Floodplain areas between New Toronto and Humber Bay hold standing water for days after rainfall, providing constant larval habitat. Properties within 500 metres of the valley edge often have 3–5x the evening mosquito activity of properties on flat suburban blocks farther from the water.",
  },
  {
    question: "What's the tick situation like in North York's Don Valley ravines?",
    answer:
      "North York's section of the Don Valley — from Serena Gundy Park through Lawrence Park and down to Burke Brook ravine — has confirmed blacklegged tick populations. Toronto Public Health and the province have documented tick activity throughout this corridor. Homes with rear yards backing onto the ravine face the most direct exposure, but ticks also travel on deer that cross into adjacent streets and parks.",
  },
  {
    question: 'My backyard in the Kingsway borders James Gardens — should I be worried about mosquitoes?',
    answer:
      "James Gardens is one of Etobicoke's most beautiful parks, but its location in the Humber River valley makes it a reliable mosquito source all season. The formal gardens and river frontage create extensive moist habitat. Homes on Riverside Drive and Old Mill Terrace face the most direct pressure. Properties a few streets east and west also experience elevated activity, especially in June and July.",
  },
  {
    question: 'Can I treat just for mosquitoes, or do I need a combined mosquito and tick program?',
    answer:
      "For most flat suburban blocks in Etobicoke and North York away from ravine edges, mosquito-only treatment is fine. If your property backs onto or is within 100 metres of the Humber River valley, Don Valley, or any wooded ravine system, we recommend combining mosquito and tick treatment. The application is done in a single visit — it doesn't cost much more and protects against both threats simultaneously.",
  },
]

export default function MosquitoControlEtobicokePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: POST.title, description: POST.excerpt, slug: POST.slug, datePublished: POST.date })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Mosquito Control Etobicoke & North York', url: `/blog/${POST.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${POST.slug}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Mosquito Control Etobicoke &amp; North York</span>
          </nav>
          <span className="bg-brand-800 text-brand-200 text-xs px-3 py-1 rounded-full mb-4 inline-block">Mosquito &amp; Tick Control · Toronto West/North</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">{POST.title}</h1>
          <p className="text-brand-300 text-sm">Published {new Date(POST.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })} · By BuzzSkito</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12 prose-brand">
        <p className="text-lg text-gray-600 leading-relaxed not-prose border-l-4 border-brand-400 pl-5 py-2 mb-8">
          Toronto&rsquo;s ravine system is one of the city&rsquo;s greatest assets — and one of the main reasons Etobicoke and North York homeowners deal with persistent mosquito and tick pressure that flat suburban neighbourhoods don&rsquo;t. This guide covers the specific hotspots and what works. See our <Link href="/etobicoke-mosquito-control" className="text-brand-700 underline">Etobicoke mosquito control</Link> and <Link href="/north-york-mosquito-control" className="text-brand-700 underline">North York mosquito control</Link> service pages.
        </p>

        <h2>Etobicoke: The Humber River Corridor Problem</h2>
        <p>The Humber River enters Lake Ontario at Humber Bay, running north through Etobicoke along a wide, wooded valley. From Long Branch and Mimico in the south to Humber Valley Village and Islington in the north, the entire western half of Etobicoke is organized around this river corridor — and for homeowners on or near the valley edge, that means a sustained, season-long mosquito source that isn&rsquo;t going anywhere.</p>
        <p>Key mosquito pressure zones in Etobicoke:</p>
        <ul>
          <li><strong>Old Mill and Humber Valley Village:</strong> Homes facing James Gardens and the Humber River floodplain experience some of the heaviest mosquito activity in the western city. The formal gardens and river frontage are ideal larval habitat.</li>
          <li><strong>Alderwood and Long Branch:</strong> Lower Humber River and Etobicoke Creek mouths at Lake Ontario. Slow-moving water near the lake creates prime breeding conditions in May and June.</li>
          <li><strong>Centennial Park area (Rexdale):</strong> The Centennial Park reservoir and surrounding green space hold water throughout the season. Forested areas adjacent to the park see elevated tick activity as well.</li>
          <li><strong>The Kingsway:</strong> Despite the upscale streetscape, properties on the valley-facing side back directly onto the Humber River woodland — mosquito pressure is significant from June onward.</li>
        </ul>

        <h2>North York: The Don Valley Ravine Network</h2>
        <p>North York sits east of Etobicoke and is defined by a different waterway: the Don River and its network of tributary ravines. The East Don, West Don, and Burke Brook all flow through North York, creating an interconnected ravine system that is home to both significant mosquito breeding habitat and established tick populations.</p>
        <p>Key areas in North York:</p>
        <ul>
          <li><strong>Serena Gundy Park and the lower E. Don valley:</strong> The park&rsquo;s 120 acres of valley land, adjacent to Don Mills and Flemingdon Park, provide excellent mosquito harbouring cover and documented tick habitat.</li>
          <li><strong>Lawrence Park and Bedford Park:</strong> Homes backing onto the ravine system between Lawrence Avenue and Wilson Avenue see persistent mosquito pressure from May through September. The Burke Brook corridor is a known tick habitat area.</li>
          <li><strong>Earl Bales Park (Bathurst &amp; Sheppard):</strong> The park&rsquo;s valley, disc golf course, and forested sections attract deer — and with deer come ticks. Properties adjacent to the park&rsquo;s northern edge on Sheppard Avenue West have reported tick finds in backyards.</li>
          <li><strong>Don Mills and Parkwoods:</strong> Older, heavily treed neighbourhood with good canopy cover and proximity to the valley — above-average mosquito activity for much of the season.</li>
        </ul>

        <h2>The Tick Picture: Why Ravine Properties Need Both Programs</h2>
        <p>Etobicoke and North York are inside Toronto city limits, which leads many homeowners to assume ticks are mainly a cottage-country problem. They are not. Toronto Public Health maintains tick surveillance throughout the city&rsquo;s ravine corridors and has documented blacklegged ticks in both the Humber River and Don River valley systems.</p>
        <p>If your property has a rear yard that faces any ravine, wooded park, or green corridor in either district, the risk is real. See our <Link href="/etobicoke-tick-spray" className="text-brand-700 underline">Etobicoke tick spray</Link> and <Link href="/north-york-tick-spray" className="text-brand-700 underline">North York tick spray</Link> pages for treatment options.</p>

        <h2>How Mosquito and Tick Barrier Spray Works for These Properties</h2>
        <p>A barrier spray application targets the two things that make ravine-adjacent properties so challenging: resting cover (for mosquitoes) and questing habitat (for ticks). We treat the lawn-to-garden transition zone, shrub undersides, hedge interiors, and leaf litter margins along your fence or property line — not the open lawn or paved areas, and not the ravine itself.</p>
        <p>For properties adjacent to the Humber or Don valley systems, we typically recommend 4–5 mosquito treatments from May to September, and 2 tick treatments (spring and fall). Both can be combined into a single visit.</p>

        <h2>Related Guides and Services</h2>
        <ul>
          <li><Link href="/toronto-mosquito-control" className="text-brand-700 hover:underline">Toronto Mosquito Control</Link></li>
          <li><Link href="/mosquito-control" className="text-brand-700 hover:underline">All GTA Mosquito Control Services</Link></li>
          <li><Link href="/tick-control" className="text-brand-700 hover:underline">All GTA Tick Control Services</Link></li>
          <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
          <li><Link href="/blog/mosquito-control-near-water-ravines-gta" className="text-brand-700 hover:underline">Mosquito Control Near Water, Ravines &amp; Waterfront Properties</Link></li>
        </ul>

        <h2>Frequently Asked Questions</h2>
        {FAQS.map((faq) => (
          <details key={faq.question} className="not-prose bg-brand-50 border border-brand-100 rounded-xl mb-3 px-5 py-4 open:pb-5">
            <summary className="font-semibold text-brand-900 cursor-pointer">{faq.question}</summary>
            <p className="mt-3 text-gray-700 leading-relaxed">{faq.answer}</p>
          </details>
        ))}
      </article>

      <CTASection
        heading="Protect Your Etobicoke or North York Property"
        subtext="Free quote for mosquito and tick control. We serve all of Toronto's west and north ends."
      />
    </>
  )
}
