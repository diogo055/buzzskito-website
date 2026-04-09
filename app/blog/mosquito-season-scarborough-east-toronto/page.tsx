import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { NEW_BLOGS, MOSQUITO_BLOGS } from '@/lib/constants'

const POST = NEW_BLOGS[3]

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Season Scarborough & East Toronto | BuzzSkito',
  description:
    "Scarborough's Rouge National Urban Park and Highland Creek valley are among the GTA's most active mosquito zones. Here's what east-end homeowners can do about it.",
  canonical: `/blog/${POST.slug}`,
  type: 'article',
  publishedTime: POST.date,
})

const FAQS = [
  {
    question: "Why is Scarborough's mosquito season so intense compared to other parts of Toronto?",
    answer:
      "Scarborough has an unusually high concentration of river valleys and ravines for a residential area — Highland Creek, Rouge River, Morningside Creek, and a network of tributary ravines all flow through or border established neighbourhoods. Rouge National Urban Park alone covers 79+ square kilometres of relatively undisturbed habitat that sustains large mosquito populations. When the wind comes off the park or the creek valley, surrounding neighbourhoods feel it immediately.",
  },
  {
    question: 'What months are worst for mosquitoes near Highland Creek and the Rouge?',
    answer:
      "June and July are the peak months — evening activity along the Highland Creek and Rouge valley edges is intense during this period. But homeowners near these corridors typically notice mosquitoes from late April and continue dealing with them through September. The river valleys stay wetter and cooler than surrounding land, extending both the start and end of the effective season.",
  },
  {
    question: 'Do I need tick treatment in Scarborough as well?',
    answer:
      "If your property backs onto or is near the Rouge National Urban Park or Highland Creek valley, yes. Both areas have confirmed blacklegged tick populations — they're listed in Ontario's Lyme disease risk zone mapping. Homeowners in Guildwood, West Hill, Rouge, and Highland Creek neighbourhoods are the most exposed. Our tick barrier spray can be combined with mosquito treatment in a single visit.",
  },
  {
    question: "I'm in Agincourt, far from the ravines. Do I still need treatment?",
    answer:
      "Agincourt and Malvern sit further from the main valley systems, so mosquito pressure is lower than in Guildwood or Highland Creek. That said, any property with dense shrubs, shaded mulch beds, or standing water issues will have mosquito activity. A 3-treatment program covering June through August is usually sufficient for flat suburban blocks away from ravines.",
  },
]

export default function MosquitoSeasonScarboroughPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: POST.title, description: POST.excerpt, slug: POST.slug, datePublished: POST.date })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Mosquito Season Scarborough', url: `/blog/${POST.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${POST.slug}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Mosquito Season Scarborough</span>
          </nav>
          <span className="bg-brand-800 text-brand-200 text-xs px-3 py-1 rounded-full mb-4 inline-block">Mosquito Control · East Toronto</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">{POST.title}</h1>
          <p className="text-brand-300 text-sm">Published {new Date(POST.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })} · By BuzzSkito</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12 prose-brand">
        <p className="text-lg text-gray-600 leading-relaxed not-prose border-l-4 border-brand-400 pl-5 py-2 mb-8">
          Scarborough is home to some of the GTA&rsquo;s most significant river valleys and, as a result, some of its most persistent mosquito pressure. This guide covers the specific geography, the worst hotspots, and what east-end homeowners can do. See our <Link href="/scarborough-mosquito-control" className="text-brand-700 underline">Scarborough mosquito control service page</Link> for treatment details.
        </p>

        <h2>The Geography Behind Scarborough&rsquo;s Mosquito Problem</h2>
        <p>Scarborough&rsquo;s landscape is shaped by three major watershed systems: the Rouge River in the east, Highland Creek in the centre, and the East Don River in the west. All three flow south through wide, forested valley corridors before entering Lake Ontario. Together, these systems give Scarborough more ravine and valley land per square kilometre than almost any other Toronto district — and that geography translates directly into mosquito breeding habitat.</p>
        <p>Unlike flat suburban areas where a dry week means low mosquito counts, Scarborough&rsquo;s valleys retain moisture and shelter from wind. Even after a dry stretch, the creek margins stay wet enough to support larval development. The forested canopy provides daytime harbouring cover across the valley slopes, meaning mosquito populations building in the valleys have everything they need to thrive all season.</p>

        <h2>Rouge National Urban Park: Canada&rsquo;s Largest Urban Park and a Major Mosquito Source</h2>
        <p>Rouge National Urban Park covers more than 79 square kilometres straddling Scarborough&rsquo;s eastern boundary and continuing into Markham and Pickering. It is the largest urban national park in Canada — a remarkable conservation achievement, and a significant, sustained mosquito source for adjacent residential areas.</p>
        <p>The park includes wetlands, meadows, forests, and the Rouge River valley. These provide layered mosquito habitat from early May through late September. Neighbourhoods on Scarborough&rsquo;s east side — <strong>Rouge</strong>, <strong>West Hill</strong>, and parts of <strong>Morningside</strong> — are most directly affected by populations emerging from the park. Homes on streets that back onto or face the park boundary experience the earliest seasonal activity and the most sustained pressure through the summer.</p>

        <h2>Highland Creek: The Central Scarborough Mosquito Corridor</h2>
        <p><strong>Highland Creek</strong> runs through the geographical centre of Scarborough, with a wide, forested valley running from Morningside Park in the north to Colonel Danforth Park and the lake at Port Union. This corridor is the primary mosquito source for central Scarborough neighbourhoods.</p>
        <p>The most affected areas include:</p>
        <ul>
          <li><strong>Guildwood:</strong> Guildwood Village backs onto the Highland Creek valley at multiple points. Many Guildwood properties have rear yards with direct sightlines to the valley — and direct mosquito exposure from June through August.</li>
          <li><strong>Highland Creek neighbourhood:</strong> Streets in this east-end community back directly onto the creek valley and Colonel Danforth Park. Evening mosquito activity here is among the most intense in Toronto east of the Don.</li>
          <li><strong>Woburn and Scarborough Village:</strong> Valley-adjacent blocks experience heavy pressure. Properties a few streets from the valley edge are also affected — mosquitoes from the valley disperse hundreds of metres into surrounding areas.</li>
        </ul>

        <h2>Birchcliffe, Cliffside, and the Bluffs</h2>
        <p>Scarborough&rsquo;s western waterfront neighbourhoods — Birchcliffe, Cliffside, and the Scarborough Bluffs — have a different mosquito dynamic. The Bluffs themselves are too dry and exposed for significant breeding, but the ravines cutting through these neighbourhoods on their way to the lake hold moisture and provide sheltered habitat from the prevailing lake winds. Mosquito activity here peaks in July and August when temperatures are at their highest.</p>

        <h2>When to Treat: Timing Your 2026 Scarborough Program</h2>
        <p>For Scarborough properties near the Rouge or Highland Creek:</p>
        <ul>
          <li><strong>Treatment 1:</strong> First week of May — catches first-generation adults before populations build in the valley</li>
          <li><strong>Treatment 2:</strong> Late May or early June — bridge treatment into peak season</li>
          <li><strong>Treatment 3:</strong> Late June or early July — covers peak Rouge/Highland Creek emergence</li>
          <li><strong>Treatment 4:</strong> Late July or early August — sustained late-summer coverage</li>
          <li><strong>Treatment 5:</strong> Late August or early September — extends protection through Labour Day</li>
        </ul>
        <p>For flat suburban blocks away from ravines (Agincourt, Malvern, Woburn), a 3-treatment program covering June through August is usually sufficient.</p>

        <h2>Related Guides and Services</h2>
        <ul>
          <li><Link href="/scarborough-tick-spray" className="text-brand-700 hover:underline">Scarborough Tick Control Service</Link></li>
          <li><Link href="/toronto-mosquito-control" className="text-brand-700 hover:underline">Toronto Mosquito Control</Link></li>
          <li><Link href="/mosquito-control" className="text-brand-700 hover:underline">All GTA Mosquito Control Services</Link></li>
          <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
          <li><Link href="/blog/mosquito-control-near-water-ravines-gta" className="text-brand-700 hover:underline">Mosquito Control Near Water, Ravines &amp; Waterfront Properties</Link></li>
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
        heading="Protect Your Scarborough Property This Season"
        subtext="Free mosquito control quote. We serve all Scarborough neighbourhoods from Guildwood to Malvern."
      />
    </>
  )
}
