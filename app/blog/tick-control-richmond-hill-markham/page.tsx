import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { NEW_BLOGS, TICK_BLOGS, MOSQUITO_BLOGS } from '@/lib/constants'

const POST = NEW_BLOGS[1]

export const metadata: Metadata = buildMetadata({
  title: 'Tick Control in Richmond Hill & Markham: Oak Ridges Moraine Risk | BuzzSkito',
  description:
    "The Oak Ridges Moraine runs through Richmond Hill and Markham. Here's what homeowners near Lake Wilcox, Mill Pond, and Rouge National Urban Park need to know about tick risk.",
  canonical: `/blog/${POST.slug}`,
  type: 'article',
  publishedTime: POST.date,
})

const FAQS = [
  {
    question: 'Why does the Oak Ridges Moraine make tick risk higher in Richmond Hill and Markham?',
    answer:
      "The Oak Ridges Moraine is a 160-km geological feature running east–west through York and Durham regions. Its mix of forests, wetlands, and meadows creates ideal habitat for white-tailed deer and white-footed mice — the two primary hosts that sustain blacklegged tick (deer tick) populations. Richmond Hill and Markham sit directly on the moraine, meaning tick populations here are established and self-sustaining, not just passing through.",
  },
  {
    question: 'Which areas of Richmond Hill have the highest tick risk?',
    answer:
      "Oak Ridges is the highest-risk community in Richmond Hill — it sits on the moraine itself, with direct access to the Lake Wilcox Conservation Area and Jefferson Forest. Homes on the north side of Oak Ridges with ravine or forest backing are most exposed. The Mill Pond area in the town centre also has documented tick activity along the trail network.",
  },
  {
    question: "Is Markham's Rouge National Urban Park actually a tick risk for homeowners?",
    answer:
      "Yes. Rouge National Urban Park is one of Canada's largest urban parks — over 79 square kilometres of mixed habitat that includes confirmed blacklegged tick populations. Markham neighbourhoods like Cornell, Cathedraltown, and Rouge Park that border the park boundary are the highest-risk residential areas. Homes with rear yards facing the park edge are essentially adjacent to established tick habitat.",
  },
  {
    question: 'When should Richmond Hill and Markham homeowners treat for ticks?',
    answer:
      "Blacklegged ticks are active in two peak windows: spring (April–June) and fall (September–November). The spring window is the highest-risk period because nymphs — the tiny, hardest-to-see life stage — are most active. Your first treatment should go down in late April or early May, before the nymph emergence peak. A second treatment in late August or September covers the fall adult-tick activity period.",
  },
]

export default function TickControlRichmondHillMarkhamPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: POST.title, description: POST.excerpt, slug: POST.slug, datePublished: POST.date })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Tick Control Richmond Hill & Markham', url: `/blog/${POST.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${POST.slug}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Tick Control Richmond Hill &amp; Markham</span>
          </nav>
          <span className="bg-amber-800 text-amber-100 text-xs px-3 py-1 rounded-full mb-4 inline-block">Tick Control · York Region</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">{POST.title}</h1>
          <p className="text-brand-300 text-sm">Published {new Date(POST.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })} · By BuzzSkito</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12 prose-brand">
        <p className="text-lg text-gray-600 leading-relaxed not-prose border-l-4 border-amber-400 pl-5 py-2 mb-8">
          Richmond Hill and Markham sit directly on the Oak Ridges Moraine — one of Ontario&rsquo;s most ecologically sensitive areas and one of the province&rsquo;s highest-density tick habitats. If your property backs onto forest, a ravine, or conservation land in either city, this guide is for you. Start with our <Link href="/richmond-hill-tick-spray" className="text-brand-700 underline">Richmond Hill tick control</Link> or <Link href="/markham-tick-spray" className="text-brand-700 underline">Markham tick control</Link> service pages for treatment options.
        </p>

        <h2>What Is the Oak Ridges Moraine and Why Does It Drive Tick Risk?</h2>
        <p>The Oak Ridges Moraine is a 160-kilometre glacial landform stretching from Caledon in the west to Rice Lake in the east, passing directly through Richmond Hill and Markham. Its rolling topography, complex mix of forests, wetlands, and kettle lakes, and year-round groundwater discharge create an exceptionally diverse habitat — and that habitat supports the entire blacklegged tick lifecycle.</p>
        <p>Blacklegged ticks (also called deer ticks, <em>Ixodes scapularis</em>) need three hosts across a two-year lifecycle: typically a small mammal (white-footed mouse) as larvae, a larger mammal (deer, raccoon) as nymphs, and a large mammal (deer, dog, or human) as adults. The moraine&rsquo;s forests and meadows support white-tailed deer populations and white-footed mice at densities high enough to sustain self-reproducing tick colonies.</p>
        <p>This is why Richmond Hill and Markham consistently appear in York Region Public Health&rsquo;s tick surveillance data. It is not random — the geography creates the conditions.</p>

        <h2>Richmond Hill: Where Tick Risk Is Concentrated</h2>
        <p>Not every block in Richmond Hill carries equal risk. The highest-exposure areas are:</p>
        <ul>
          <li><strong>Oak Ridges:</strong> Sits on the moraine itself. Lake Wilcox Conservation Area and the Oak Ridges Trail bring ticks to trail edges and adjacent properties year-round. Homes with rear yards facing the lake or the Oak Ridges Corridor Conservation Reserve face the most direct exposure.</li>
          <li><strong>Jefferson Forest area:</strong> The Jefferson Forest, north of Major Mackenzie Drive, is a regionally significant natural area with documented tick activity. Adjacent streets in Jefferson and Bayview Hill neighbourhoods are at elevated risk.</li>
          <li><strong>Mill Pond:</strong> The Mill Pond park and trail system in Richmond Hill&rsquo;s town centre has documented tick activity along the vegetated trail margins.</li>
          <li><strong>North Richvale ravines:</strong> Properties backing onto ravine corridors north of Highway 7 can see tick activity from April through November.</li>
        </ul>

        <h2>Markham: Rouge National Urban Park and the Forest Edge Problem</h2>
        <p>Markham&rsquo;s eastern edge borders <strong>Rouge National Urban Park</strong> — Canada&rsquo;s largest urban national park at over 79 square kilometres. The park contains extensive mixed hardwood forest, meadows, and river valley habitat (Milner Creek, Little Rouge Creek, the Rouge River itself) that support established blacklegged tick populations.</p>
        <p>For homeowners in Cornell, Cathedraltown, Rouge Park, and parts of Wismer, this is a meaningful risk. Properties on streets that face the park boundary or that have direct rear-yard access to forest edges are most exposed. Even a 100-metre gap between your property and the forest is not necessarily protective — ticks travel on deer, which routinely cross that distance.</p>
        <p>See our <Link href="/markham-mosquito-control" className="text-brand-700 underline">Markham mosquito control</Link> page if you&rsquo;re dealing with both pests — which is common in these areas.</p>

        <h2>The Lyme Disease Piece: Why Nymphs Are the Real Danger</h2>
        <p>Most Lyme disease transmission in Ontario comes not from adult ticks, which are relatively large and easier to spot, but from nymphs — the second life stage. Nymphs are active May through July and are the size of a poppy seed. They are extremely difficult to feel and easy to miss during a tick check.</p>
        <p>Both Richmond Hill and Markham fall within Ontario&rsquo;s established Lyme disease risk zone as defined by Public Health Ontario. If a tick is attached for more than 24–36 hours, Lyme disease transmission becomes a real possibility. The best strategy is to reduce your exposure at the source — by treating your yard.</p>

        <h2>What Treatment Looks Like for These Properties</h2>
        <p>BuzzSkito&rsquo;s tick barrier spray targets the transition zones where ticks concentrate: leaf litter margins at the lawn edge, low ground cover, the base of shrubs, and shaded mulch beds. These are the areas where ticks quest (climb and wait) for passing hosts.</p>
        <p>For Richmond Hill and Markham properties with forest or ravine backing, we typically recommend two treatments per season: one in late April or early May (catching the spring nymph emergence) and one in late August or early September (covering the fall adult-tick activity period). Some properties with very active deer corridors benefit from three treatments.</p>

        <h2>Related Guides and Services</h2>
        <ul>
          <li><Link href="/richmond-hill-tick-spray" className="text-brand-700 hover:underline">Richmond Hill Tick Control Service</Link></li>
          <li><Link href="/markham-tick-spray" className="text-brand-700 hover:underline">Markham Tick Control Service</Link></li>
          <li><Link href="/thornhill-tick-spray" className="text-brand-700 hover:underline">Thornhill Tick Control Service</Link></li>
          <li><Link href="/tick-control" className="text-brand-700 hover:underline">All GTA Tick Control Services</Link></li>
          <li><Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{TICK_BLOGS.pillar.title}</Link></li>
          <li><Link href="/blog/lyme-disease-tick-prevention-ontario" className="text-brand-700 hover:underline">Lyme Disease Prevention in Ontario</Link></li>
        </ul>

        <h2>Frequently Asked Questions</h2>
        {FAQS.map((faq) => (
          <details key={faq.question} className="not-prose bg-amber-50 border border-amber-100 rounded-xl mb-3 px-5 py-4 open:pb-5">
            <summary className="font-semibold text-brand-900 cursor-pointer">{faq.question}</summary>
            <p className="mt-3 text-gray-700 leading-relaxed">{faq.answer}</p>
          </details>
        ))}
      </article>

      <CTASection
        heading="Protect Your Richmond Hill or Markham Property from Ticks"
        subtext="Get a free tick control quote. No contracts, free re-spray guarantee."
        variant="dark"
      />
    </>
  )
}
