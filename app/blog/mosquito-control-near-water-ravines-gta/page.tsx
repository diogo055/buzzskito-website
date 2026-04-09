import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { NEW_BLOGS, MOSQUITO_BLOGS } from '@/lib/constants'

const POST = NEW_BLOGS[8]

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control Near Ravines & Water | BuzzSkito',
  description:
    "Properties near the Credit River, Humber River, Don Valley, Lake Ontario, or backyard ponds face elevated mosquito pressure. Here's what actually works for waterfront and ravine-adjacent GTA homes.",
  canonical: `/blog/${POST.slug}`,
  type: 'article',
  publishedTime: POST.date,
})

const FAQS = [
  {
    question: 'Can I treat standing water on my property myself?',
    answer:
      "You can use Bacillus thuringiensis israelensis (Bti) mosquito dunks in standing water you control — backyard ponds, bird baths, or rain barrels. Bti is a naturally occurring soil bacterium that specifically targets mosquito larvae and is safe for fish, birds, and other wildlife. For standing water you don't control (retention ponds, drainage ditches, creek margins), you need to focus on barrier spray targeting adult mosquitoes on your property rather than source elimination.",
  },
  {
    question: 'I live near Lake Ontario in Mississauga. Is the lake itself a breeding source?',
    answer:
      "Open Lake Ontario water is not a significant mosquito breeding source — mosquitoes need shallow, still water, and the lake itself is too deep and wave-affected. The risk areas are the sheltered inlet creeks, marina embayments, and marshes where calm, shallow water pools. Rattray Marsh in Mississauga and the Humber Bay wetlands in Toronto are the most significant lakefront mosquito sources. Properties within 500m of these marshes rather than the open lakeshore typically see the most elevated activity.",
  },
  {
    question: 'My neighbours have a backyard pond that looks like it breeds mosquitoes. What can I do?',
    answer:
      "You can be a good neighbour and mention Bti dunks — available at most garden centres — which eliminate larvae without harming fish or frogs. Beyond that, the most effective thing you can do is treat your own property: barrier spray on your vegetation will reduce adult mosquitoes from all sources, whether they're breeding in your neighbour's pond, the creek down the street, or the drainage swale behind your fence.",
  },
  {
    question: 'Do I need more treatments per season if I live near the Humber or Credit River?',
    answer:
      "Yes. Properties adjacent to active waterways are continuously re-colonized by mosquitoes migrating from the source. Most suburban properties benefit from 4–5 treatments per season. Properties immediately adjacent to the Humber River, Credit River, Don River, or major conservation areas often need the full 5-treatment program to maintain consistent coverage. Some clients in very exposed positions treat every 3 weeks rather than every 4 weeks through peak season.",
  },
]

export default function MosquitoControlNearWaterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: POST.title, description: POST.excerpt, slug: POST.slug, datePublished: POST.date })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Mosquito Control Near Water & Ravines', url: `/blog/${POST.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${POST.slug}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Mosquito Control Near Water &amp; Ravines</span>
          </nav>
          <span className="bg-brand-800 text-brand-200 text-xs px-3 py-1 rounded-full mb-4 inline-block">Waterfront &amp; Ravine Properties · GTA</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">{POST.title}</h1>
          <p className="text-brand-300 text-sm">Published {new Date(POST.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })} · By BuzzSkito</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12 prose-brand">
        <p className="text-lg text-gray-600 leading-relaxed not-prose border-l-4 border-brand-400 pl-5 py-2 mb-8">
          If your GTA property backs onto a river, sits near a ravine, looks out over a pond, or is anywhere near the Lake Ontario waterfront, you already know that mosquito season hits harder for you than for your friends on flat suburban blocks. This guide explains why — and what actually makes a difference. See our <Link href="/mosquito-control" className="text-brand-700 underline">GTA mosquito control service page</Link> to get started.
        </p>

        <h2>Why Water-Adjacent Properties Are Different</h2>
        <p>Mosquitoes breed in standing or slow-moving water — all mosquito species require an aquatic larval stage. Properties near water face two compounding challenges that flat suburban lots don&rsquo;t:</p>
        <ol>
          <li><strong>A proximate, ongoing breeding source.</strong> The river, pond, or marsh is constantly producing new adults through the season. Even aggressive treatment of your property doesn&rsquo;t eliminate the source — it only reduces adult populations on your vegetation.</li>
          <li><strong>Harbouring habitat.</strong> River valleys and ravines are typically wooded and shaded, providing the cool, humid daytime cover that adult mosquitoes require. They rest in this vegetation during the day, then disperse into surrounding yards at dusk.</li>
        </ol>
        <p>The result is that water-adjacent properties need more frequent treatment and should start earlier in the season than their neighbours on flat blocks.</p>

        <h2>The GTA&rsquo;s Major Mosquito Source Waterways</h2>
        <p>Not all water bodies create equal mosquito pressure. Here&rsquo;s how the GTA&rsquo;s major waterways rank by mosquito impact:</p>
        <ul>
          <li><strong>Credit River (Mississauga, Brampton, Georgetown, Caledon):</strong> One of the GTA&rsquo;s most significant mosquito corridors. The river runs through the western GTA from Caledon to Port Credit with extensive floodplain and valley habitat all along its length. Mosquito activity along the Credit peaks in June and remains elevated through August. Properties in <Link href="/mississauga-mosquito-control" className="text-brand-700">Mississauga&rsquo;s</Link> Credit Valley, Meadowvale, and Port Credit neighbourhoods and in <Link href="/brampton-mosquito-control" className="text-brand-700">Brampton&rsquo;s</Link> Creditview area are most affected.</li>
          <li><strong>Humber River (Vaughan, Woodbridge, Etobicoke, Toronto):</strong> The Humber runs from Bolton through Vaughan, Woodbridge, and Etobicoke to Humber Bay. Boyd Conservation Area, the Humber floodplain, and the lower valley all sustain large mosquito populations. See our <Link href="/vaughan-mosquito-control" className="text-brand-700">Vaughan</Link> and <Link href="/etobicoke-mosquito-control" className="text-brand-700">Etobicoke mosquito control</Link> pages for city-specific details.</li>
          <li><strong>Don River (Toronto, North York, Markham):</strong> The East and West Don and their tributaries run through the centre of Toronto, creating ravine corridors that affect properties from <Link href="/north-york-mosquito-control" className="text-brand-700">North York</Link> through <Link href="/toronto-mosquito-control" className="text-brand-700">Toronto&rsquo;s</Link> midtown and east-end neighbourhoods.</li>
          <li><strong>Rouge River and Highland Creek (Scarborough, Markham):</strong> These eastern GTA waterways border Rouge National Urban Park and run through Scarborough. See our <Link href="/scarborough-mosquito-control" className="text-brand-700">Scarborough mosquito control</Link> and <Link href="/markham-mosquito-control" className="text-brand-700">Markham mosquito control</Link> pages.</li>
          <li><strong>Sixteen Mile Creek (Milton, Oakville):</strong> Running through Oakville to Burlington and south Milton, this watershed generates significant activity especially in late May and June. Glen Abbey and Bronte Creek area properties in <Link href="/oakville-mosquito-control" className="text-brand-700">Oakville</Link> and Bronte Meadows in <Link href="/milton-mosquito-control" className="text-brand-700">Milton</Link> are the most affected.</li>
        </ul>

        <h2>Backyard Ponds: A Double-Edged Feature</h2>
        <p>A well-maintained backyard pond with good water circulation, goldfish, or regular treatment can actually be mosquito-neutral. The problems arise with:</p>
        <ul>
          <li><strong>Shallow, warm ponds with no circulation:</strong> Still, warm, shallow water is ideal mosquito breeding habitat. A 12-inch-deep ornamental pond with no pump can produce hundreds of larvae per week in July.</li>
          <li><strong>Ponds surrounded by dense vegetation:</strong> Overhanging plants, dense marginal planting, and shaded pond edges give adult mosquitoes resting cover immediately adjacent to the breeding source.</li>
          <li><strong>Seasonal ponds and drainage swales:</strong> Low areas in your yard that hold water for 5–7 days after rain can be completing larval cycles without being identified as ponds.</li>
        </ul>
        <p>For ornamental ponds, Bti (Bacillus thuringiensis israelensis) mosquito dunks are an effective, fish-safe larval control option. For stormwater management ponds and drainage features you don&rsquo;t control, the strategy shifts entirely to adult control through barrier spray on your property.</p>

        <h2>Stormwater Management Ponds: The New Suburban Reality</h2>
        <p>Virtually every GTA subdivision built since 1990 includes retention or detention ponds as part of the stormwater management system. These ponds — common in new areas of <Link href="/brampton-mosquito-control" className="text-brand-700">Brampton</Link>, <Link href="/vaughan-mosquito-control" className="text-brand-700">Vaughan</Link>, <Link href="/milton-mosquito-control" className="text-brand-700">Milton</Link>, and <Link href="/markham-mosquito-control" className="text-brand-700">Markham</Link> — are designed for water quality and flood management, not mosquito prevention. Their shallow margins, emergent vegetation, and minimal circulation make them excellent mosquito breeding sites.</p>
        <p>The municipality is responsible for managing these ponds, but management focus is water quality, not mosquito larvae. As a homeowner adjacent to one of these ponds, you cannot control the source — you can only create a barrier on your own property between the pond and your outdoor living space.</p>

        <h2>The Treatment Strategy for Water-Adjacent Properties</h2>
        <p>The approach differs from standard suburban treatment in two ways:</p>
        <ol>
          <li><strong>Earlier start:</strong> Begin treatment in the first week of May, before populations emerge from adjacent water sources. On a property adjacent to the Credit River, waiting until mosquitoes are annoying (usually mid-June) means you&rsquo;ve already lost the easiest month.</li>
          <li><strong>More frequent schedule:</strong> 5 treatments from May through September rather than 3–4. The continuous re-colonization from adjacent water sources shortens the effective window of each treatment.</li>
        </ol>

        <h2>Related Guides and Services</h2>
        <ul>
          <li><Link href="/mosquito-control" className="text-brand-700 hover:underline">All GTA Mosquito Control Services</Link></li>
          <li><Link href="/service-areas" className="text-brand-700 hover:underline">BuzzSkito Service Areas</Link></li>
          <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
          <li><Link href="/blog/mosquito-control-vaughan-york-region" className="text-brand-700 hover:underline">Mosquito Control in Vaughan &amp; York Region</Link></li>
          <li><Link href="/blog/mosquito-season-scarborough-east-toronto" className="text-brand-700 hover:underline">Mosquito Season in Scarborough &amp; East Toronto</Link></li>
          <li><Link href="/blog/when-to-schedule-first-mosquito-treatment-ontario" className="text-brand-700 hover:underline">When to Book Your First Treatment of the Season</Link></li>
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
        heading="Waterfront or Ravine Property? Let&rsquo;s Build a Program That Works"
        subtext="Free quote for water-adjacent and ravine-backing properties. We know GTA waterways — no contracts required."
      />
    </>
  )
}
