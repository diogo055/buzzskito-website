import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { NEW_BLOGS_2, TICK_BLOGS, MOSQUITO_BLOGS } from '@/lib/constants'

const POST = NEW_BLOGS_2[4]

export const metadata: Metadata = buildMetadata({
  title: 'Tick Control Vaughan & King City',
  description: "Boyd Conservation Area, Kortright Centre, and King Township's forest edges put York Region homeowners at serious tick risk. Professional tick spray schedules and what to expect from BuzzSkito.",
  canonical: `/blog/${POST.slug}`,
  type: 'article',
  publishedTime: POST.date,
})

const FAQS = [
  {
    question: 'Are ticks really a problem in Vaughan and Woodbridge?',
    answer: 'Yes. Boyd Conservation Area and the Humber River valley — which runs through Woodbridge and Vaughan — are confirmed blacklegged tick habitat areas documented by York Region Public Health. Properties adjacent to these conservation areas face real, measurable tick risk throughout the season.',
  },
  {
    question: 'Why is King City considered high-risk for ticks?',
    answer: 'King Township sits at the intersection of the Oak Ridges Moraine and established agricultural lands with extensive forest edge habitat — exactly where blacklegged ticks thrive. The township consistently reports among the highest tick-positive rates in York Region.',
  },
  {
    question: 'Does BuzzSkito serve Vaughan, King City, and Woodbridge?',
    answer: 'Yes. BuzzSkito provides professional mosquito and tick barrier spray services across all of Vaughan, Woodbridge, King City, Nobleton, Kleinburg, and surrounding York Region communities. Call (289) 216-5030 for a free quote.',
  },
  {
    question: 'How many tick treatments do I need per season?',
    answer: 'BuzzSkito recommends two professional tick treatments per season: the first in late May or early June to target nymphs (the smallest and most dangerous tick life stage), and the second in late July or early August to target adult ticks. Properties with very high exposure may benefit from a third treatment in early fall.',
  },
  {
    question: 'What areas of my property should be treated for ticks?',
    answer: 'Ticks concentrate in the transition zones between lawn and wooded or brushy areas — property edges, garden borders, woodpile areas, and along fence lines. BuzzSkito targets these specific zones with directed applications, as well as leaf litter areas and shaded sections of the lawn.',
  },
]

export default function VaughanKingCityTickControlPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: POST.title, description: POST.excerpt, slug: POST.slug, datePublished: POST.date })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Tick Control Vaughan King City Woodbridge', url: `/blog/${POST.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${POST.slug}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Tick Control Vaughan, King City & Woodbridge</span>
          </nav>
          <span className="bg-amber-700 text-amber-100 text-xs px-3 py-1 rounded-full mb-4 inline-block">Tick Control</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">{POST.title}</h1>
          <p className="text-brand-300 text-sm">Published {new Date(POST.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })} · By BuzzSkito</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12 prose-brand">
        <p className="text-lg text-gray-600 not-prose border-l-4 border-amber-400 pl-5 py-2 mb-8">
          York Region&apos;s rapid residential development has pushed subdivisions right up against some of Ontario&apos;s most active tick habitat — Boyd Conservation Area, the Humber River valley, and King Township&apos;s Oak Ridges Moraine properties. This guide explains the specific risks for Vaughan, Woodbridge, and King City homeowners. Part of our <Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 underline">Ultimate Tick Control Guide for Ontario</Link>.
        </p>

        <h2>Why York Region Has a Serious Tick Problem</h2>
        <p>York Region Public Health conducts annual tick surveillance and has documented established blacklegged tick populations across multiple areas — particularly in the western portions of the region. The combination of the Oak Ridges Moraine, Humber River corridor, and mature conservation land creates ideal permanent tick habitat adjacent to densely populated residential areas.</p>

        <h2>Vaughan: Humber River and Boyd Conservation Area</h2>
        <p>Boyd Conservation Area — located in the Humber River valley just north of Woodbridge — is the highest-confirmed tick location in the Vaughan area. The park&apos;s dense forest understory, leaf litter habitat, and abundant white-tailed deer (the primary adult tick host) support a robust year-round blacklegged tick population.</p>
        <p>Properties in the following Vaughan neighbourhoods face elevated tick risk due to proximity to Boyd Conservation Area and Humber River tributaries:</p>
        <ul>
          <li><strong>Islington Woods</strong> — directly adjacent to Humber River forest corridor</li>
          <li><strong>Weston Downs</strong> — borders conservation land to the north and west</li>
          <li><strong>Pine Valley</strong> — backs onto Pine Valley Drive forested section</li>
          <li><strong>Sonoma Heights</strong> — near Humber River tributary ravines</li>
          <li><strong>Kleinburg</strong> — rural character with extensive wooded property edges</li>
        </ul>

        <h2>Woodbridge: High-Risk Properties</h2>
        <p>Woodbridge sits in the Humber River valley itself — one of the most continuous wildlife corridors in the GTA. Deer movement along this corridor brings tick-carrying hosts directly through residential back gardens. East Woodbridge properties backing onto the valley, and homes adjacent to Kortright Centre for Conservation, face consistent tick exposure throughout the season.</p>
        <p>Kortright Centre — an environmental education facility with 325 hectares of naturalized land — has documented tick activity throughout its trail system. Adjacent residential properties should treat both their lawn perimeters and garden borders as a priority.</p>

        <h2>King City and King Township: The Highest-Risk Zone</h2>
        <p>King Township sits at the junction of three significant ecological features:</p>
        <ol>
          <li><strong>Oak Ridges Moraine</strong> — running east-west through the township with extensive forest cover and vernal pools ideal for tick breeding habitat</li>
          <li><strong>Agricultural-forest interface</strong> — field edges and woodlot borders are the single most productive tick habitat type in Ontario</li>
          <li><strong>Cold Creek Conservation Area</strong> — documented tick surveillance site with confirmed blacklegged tick populations</li>
        </ol>
        <p>King City village properties, Nobleton-area estates, and rural Schomberg homes with any wooded edges or adjacent fields should be treated as high-priority tick-control properties.</p>

        <h2>Understanding Tick Life Stages and Timing</h2>
        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-brand-800 text-white">
                <th className="px-4 py-2 text-left">Life Stage</th>
                <th className="px-4 py-2 text-left">Size</th>
                <th className="px-4 py-2 text-left">Peak Activity</th>
                <th className="px-4 py-2 text-left">Disease Risk</th>
              </tr>
            </thead>
            <tbody>
              {[
                { stage: 'Larva', size: 'Poppy seed', peak: 'August', risk: 'Low (rarely infected)' },
                { stage: 'Nymph', size: 'Sesame seed', peak: 'May–July', risk: 'HIGHEST (tiny, hard to see)' },
                { stage: 'Adult female', size: 'Apple seed', peak: 'Oct–Nov / Mar–Apr', risk: 'Moderate (easier to detect)' },
                { stage: 'Adult male', size: 'Apple seed', peak: 'Oct–Nov / Mar–Apr', risk: 'Low (rarely feeds on humans)' },
              ].map(({ stage, size, peak, risk }) => (
                <tr key={stage} className="border-b border-gray-200 even:bg-gray-50">
                  <td className="px-4 py-2 font-medium text-gray-800">{stage}</td>
                  <td className="px-4 py-2 text-gray-600">{size}</td>
                  <td className="px-4 py-2 text-brand-700 font-semibold">{peak}</td>
                  <td className="px-4 py-2 text-gray-600">{risk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>The nymph stage is the most dangerous because nymphs are tiny enough to be missed during tick checks, yet the majority of Lyme disease transmissions in Ontario occur from nymph bites. Targeting nymphs with a late-May treatment is the most critical intervention of the season.</p>

        <h2>What BuzzSkito Treats and How</h2>
        <p>Our York Region tick treatments target the specific habitat zones where ticks concentrate:</p>
        <ul>
          <li><strong>Lawn-garden border transition zone</strong> — the 3-metre strip where grass meets garden beds or wooded edges</li>
          <li><strong>Fence lines and property perimeters</strong> — especially those adjacent to conservation land</li>
          <li><strong>Woodpile and brush pile areas</strong> — common resting habitat for deer and therefore ticks</li>
          <li><strong>Shaded lawn sections</strong> — ticks desiccate in direct sun and concentrate in shade</li>
          <li><strong>Ornamental garden beds with mulch</strong> — leaf litter and mulch are favoured tick micro-habitats</li>
        </ul>

        <h2>Frequently Asked Questions</h2>
        <div className="not-prose space-y-4 my-6">
          {FAQS.map(({ question, answer }) => (
            <details key={question} className="bg-amber-50 rounded-xl border border-amber-100">
              <summary className="cursor-pointer px-5 py-3 font-semibold text-brand-900 list-none">{question}</summary>
              <p className="px-5 pb-4 text-gray-600 text-sm">{answer}</p>
            </details>
          ))}
        </div>

        <h2>Related Guides</h2>
        <ul>
          <li><Link href="/vaughan-mosquito-control" className="text-brand-700 hover:underline">Vaughan Mosquito Control Services</Link></li>
          <li><Link href="/king-city-mosquito-control" className="text-brand-700 hover:underline">King City Mosquito & Tick Control</Link></li>
          <li><Link href="/woodbridge-mosquito-control" className="text-brand-700 hover:underline">Woodbridge Mosquito Control Services</Link></li>
          <li><Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{TICK_BLOGS.pillar.title}</Link></li>
          <li><Link href="/blog/tick-control-richmond-hill-markham" className="text-brand-700 hover:underline">Tick Control in Richmond Hill & Markham</Link></li>
          <li><Link href="/blog/lyme-disease-tick-prevention-ontario" className="text-brand-700 hover:underline">Lyme Disease Prevention in Ontario</Link></li>
          <li><Link href="/tick-control" className="text-brand-700 hover:underline">View Our Tick Control Services</Link></li>
        </ul>
      </article>

      <CTASection heading="York Region Tick Control — Free Quotes for Vaughan, King City & Woodbridge" subtext="Professional tick barrier spray targeting nymphs, adults, and larvae. Two seasonal treatments cover the full active season." />
    </>
  )
}
