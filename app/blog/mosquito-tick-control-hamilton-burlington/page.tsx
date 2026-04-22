import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { NEW_BLOGS_2, MOSQUITO_BLOGS, TICK_BLOGS } from '@/lib/constants'

const POST = NEW_BLOGS_2[3]

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito & Tick Control Hamilton-Burlington',
  description: "Hamilton's Niagara Escarpment trails and Burlington's waterfront create intense mosquito and tick pressure for homeowners. Professional barrier spray for both cities — free quotes available.",
  canonical: `/blog/${POST.slug}`,
  type: 'article',
  publishedTime: POST.date,
})

const FAQS = [
  {
    question: 'Does BuzzSkito serve Hamilton and Burlington?',
    answer: 'Yes. BuzzSkito provides professional mosquito and tick barrier spray services across Hamilton (including Stoney Creek, Dundas, Ancaster, and Waterdown) and Burlington (including Alton Village, Millcroft, Roseland, and Shoreacres). Call (289) 216-5030 for a free quote.',
  },
  {
    question: 'Why are mosquitoes so bad near the Niagara Escarpment?',
    answer: "The Escarpment's wooded slopes and ravine streams create ideal breeding habitat — shade, standing water in seasonal pools and stream eddies, and dense vegetation where adult mosquitoes rest during the day. Properties within 500m of Escarpment trails consistently experience elevated mosquito pressure.",
  },
  {
    question: 'Are ticks a problem in Burlington waterfront neighbourhoods?',
    answer: "Yes. Lakeshore neighbourhoods with mature tree cover, Bronte Creek Provincial Park, and the Royal Botanical Gardens all support established blacklegged tick populations. Shoreacres, Roseland, and North Burlington properties near conservation lands have documented tick activity.",
  },
  {
    question: 'What is the best time to schedule mosquito control in Hamilton?',
    answer: 'The first treatment should be scheduled for early May, before peak mosquito activity begins. In Hamilton, the combination of Cootes Paradise marsh, Hamilton Harbour, and Red Hill Creek valley means mosquito pressure builds quickly once temperatures consistently exceed 10°C.',
  },
]

export default function HamiltonBurlingtonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: POST.title, description: POST.excerpt, slug: POST.slug, datePublished: POST.date })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Mosquito & Tick Control Hamilton Burlington', url: `/blog/${POST.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${POST.slug}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Hamilton & Burlington Mosquito & Tick Control</span>
          </nav>
          <span className="bg-brand-800 text-brand-200 text-xs px-3 py-1 rounded-full mb-4 inline-block">Mosquito & Tick Control</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">{POST.title}</h1>
          <p className="text-brand-300 text-sm">Published {new Date(POST.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })} · By BuzzSkito</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12 prose-brand">
        <p className="text-lg text-gray-600 not-prose border-l-4 border-brand-400 pl-5 py-2 mb-8">
          Hamilton and Burlington homeowners deal with some of the most diverse mosquito and tick pressure in the GTA region — escarpment properties, waterfront neighbourhoods, and conservation land boundaries all create unique challenges. This guide explains why, and what to do about it.
        </p>

        <h2>Hamilton: Why Mosquito and Tick Pressure Is High</h2>
        <p>Hamilton&apos;s geography creates multiple distinct mosquito pressure zones:</p>

        <h3>Niagara Escarpment and Trail Systems</h3>
        <p>The Escarpment face runs directly through Hamilton — from Dundas to Stoney Creek — and its wooded ravines, seasonal streams, and shaded vegetation are prime mosquito breeding and resting habitat. Properties in Ancaster, Dundas, Westdale, and the mountain brow consistently report high mosquito pressure from May through August.</p>

        <h3>Cootes Paradise and Hamilton Harbour</h3>
        <p>Cootes Paradise marsh — one of the largest remaining wetlands in the western Lake Ontario basin — produces massive mosquito populations each season. Neighbouring Westdale, Ainslie Wood, and McMaster University-area properties experience significant overspill pressure from the marsh throughout the season.</p>

        <h3>Red Hill Creek and Stoney Creek Ravines</h3>
        <p>The Red Hill Valley and Stoney Creek waterway create continuous mosquito corridors across the lower city. Properties along these ravine systems, including Rymal, Binbrook, and Heritage Green, experience elevated season-long pressure.</p>

        <h3>Tick Risk in Hamilton</h3>
        <p>Blacklegged ticks are established along Hamilton&apos;s Escarpment trail network, Dundas Valley Conservation Area, and Fifty Point Conservation Area near Winona. The Hamilton Conservation Authority has documented tick populations across most of its managed lands. Properties backing onto any forested conservation area should prioritize professional tick treatment.</p>

        <h2>Burlington: Waterfront and Greenbelt Pressure</h2>

        <h3>Lake Ontario Waterfront Neighbourhoods</h3>
        <p>Burlington&apos;s lakefront — from Aldershot to Burloak Drive — experiences mosquito pressure from both the lake shoreline wetland fringe and the mature tree canopy that characterizes older lakefront neighbourhoods. Roseland, Shoreacres, LaSalle Park, and Aldershot are consistently high-pressure zones.</p>

        <h3>Bronte Creek Provincial Park</h3>
        <p>Bronte Creek runs north-south through western Burlington, and the provincial park surrounding it is a documented blacklegged tick habitat. Properties in Bronte, West Oak Trails, and River Oaks that back onto the Bronte Creek corridor or adjacent conservation lands face real tick risk throughout the season.</p>

        <h3>Royal Botanical Gardens</h3>
        <p>The RBG&apos;s 1,100 hectares of naturalized land bordering western Burlington and Hamilton contains established populations of both mosquitoes and blacklegged ticks. North Burlington and Waterdown-area properties adjacent to RBG lands should treat both mosquitoes and ticks each season.</p>

        <h3>Alton Village and New-Build Neighbourhoods</h3>
        <p>Rapid development in north Burlington has created new mosquito pressure through construction drainage ponds, landscaped retention basins, and newly planted vegetation. New-build homeowners in Alton Village, Millcroft, and The Orchard often encounter unexpected mosquito pressure in their first seasons.</p>

        <h2>Recommended Treatment Schedule for Hamilton and Burlington</h2>
        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-brand-800 text-white">
                <th className="px-4 py-2 text-left">Treatment</th>
                <th className="px-4 py-2 text-left">Timing</th>
                <th className="px-4 py-2 text-left">Target</th>
              </tr>
            </thead>
            <tbody>
              {[
                { t: 'Mosquito Treatment 1', timing: 'Early May', target: 'Establish barrier before peak season' },
                { t: 'Tick Treatment 1', timing: 'Late May / Early June', target: 'Peak nymph activity period' },
                { t: 'Mosquito Treatment 2', timing: 'Early June', target: 'Maintain season coverage' },
                { t: 'Mosquito Treatment 3', timing: 'Early July', target: 'Peak mosquito season' },
                { t: 'Tick Treatment 2', timing: 'Late July / Early August', target: 'Adult tick activity period' },
                { t: 'Mosquito Treatment 4', timing: 'Early August', target: 'Late-season surge' },
                { t: 'Mosquito Treatment 5', timing: 'Early September', target: 'Season close-out' },
              ].map(({ t, timing, target }) => (
                <tr key={t} className="border-b border-gray-200 even:bg-gray-50">
                  <td className="px-4 py-2 font-medium text-gray-800">{t}</td>
                  <td className="px-4 py-2 text-brand-700 font-semibold">{timing}</td>
                  <td className="px-4 py-2 text-gray-600">{target}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Neighbourhoods We Serve in Hamilton and Burlington</h2>
        <h3>Hamilton</h3>
        <p>Ancaster, Dundas, Westdale, Ainslie Wood, Stoney Creek, Heritage Green, Binbrook, Waterdown, Rymal, Mount Hope, Winona, Rosedale, and Downtown Hamilton.</p>
        <h3>Burlington</h3>
        <p>Alton Village, Millcroft, The Orchard, Roseland, Shoreacres, LaSalle Park, Downtown Burlington, Headon Forest, North Burlington, Palmer, Tyandaga, Bronte, West Oak Trails, River Oaks, Aldershot, and Waterdown.</p>

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
          <li><Link href="/hamilton-mosquito-control" className="text-brand-700 hover:underline">Hamilton Mosquito Control Service</Link></li>
          <li><Link href="/hamilton-tick-spray" className="text-brand-700 hover:underline">Hamilton Tick Control Service</Link></li>
          <li><Link href="/burlington-mosquito-spray" className="text-brand-700 hover:underline">Burlington Mosquito Control Service</Link></li>
          <li><Link href="/burlington-tick-spray" className="text-brand-700 hover:underline">Burlington Tick Control Service</Link></li>
          <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
          <li><Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{TICK_BLOGS.pillar.title}</Link></li>
          <li><Link href="/blog/lyme-disease-tick-prevention-ontario" className="text-brand-700 hover:underline">Lyme Disease Prevention in Ontario</Link></li>
        </ul>
      </article>

      <CTASection heading="Serving Hamilton & Burlington — Free Quotes Available" subtext="Professional mosquito and tick barrier spray for Escarpment and waterfront properties. Call (289) 216-5030." />
    </>
  )
}
