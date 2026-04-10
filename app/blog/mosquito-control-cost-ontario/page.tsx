import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { NEW_BLOGS_3, MOSQUITO_BLOGS } from '@/lib/constants'

const POST = NEW_BLOGS_3[0]

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control Cost Ontario | 2026 Guide | BuzzSkito',
  description:
    'How much does mosquito control cost in Ontario? 2026 pricing from $99. Compare treatment options and get a quote.',
  canonical: `/blog/${POST.slug}`,
  type: 'article',
  publishedTime: POST.date,
})

const FAQS = [
  {
    question: 'How much does a single mosquito spray treatment cost in Ontario?',
    answer:
      'A single professional barrier spray treatment in Ontario typically costs between $120 and $200 for a standard residential lot (up to 10,000 sq ft). Larger properties, properties with extensive tree canopy, and those near waterways may cost slightly more. Most companies offer a re-treat guarantee within a set window at no charge.',
  },
  {
    question: 'Is a seasonal mosquito control package worth it?',
    answer:
      'Yes — seasonal packages typically reduce the per-treatment cost by 30–40% compared to booking individual sprays. A five-treatment season package covering May through September delivers consistent protection and costs significantly less per visit than calling reactively when mosquitoes peak in July.',
  },
  {
    question: 'Does lot size affect the price of mosquito spray?',
    answer:
      "Yes. Most mosquito control companies price by lot size or square footage of treatable area. Lots under 10,000 sq ft pay the lowest rate. Estate lots over half an acre will typically pay 20–50% more. When you request a quote, have your lot size or address ready so the company can give you an accurate number.",
  },
  {
    question: 'What is included in a professional mosquito treatment?',
    answer:
      'A professional barrier spray visit includes a property inspection to identify breeding areas, application of Health Canada–approved formula to all foliage, fence lines, shaded areas, and perimeter vegetation, plus a re-entry window notification (typically 30 minutes). BuzzSkito also provides a service log confirming the product used and the date of treatment.',
  },
  {
    question: 'Does BuzzSkito offer free quotes?',
    answer:
      'Yes. BuzzSkito provides free, no-obligation quotes for all properties in Mississauga, Toronto, Brampton, Oakville, Burlington, Hamilton, and the wider GTA. Call (289) 216-5030 or submit a request online.',
  },
]

export default function MosquitoControlCostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            blogPostingSchema({
              title: POST.title,
              description: POST.excerpt,
              slug: POST.slug,
              datePublished: POST.date,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Blog', url: '/blog' },
              { name: 'Mosquito Control Cost Ontario', url: `/blog/${POST.slug}` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }}
      />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Mosquito Control Cost Ontario</span>
          </nav>
          <span className="bg-brand-800 text-brand-200 text-xs px-3 py-1 rounded-full mb-4 inline-block">Mosquito Control</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">{POST.title}</h1>
          <p className="text-brand-300 text-sm">
            Published {new Date(POST.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })} · By BuzzSkito
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12 prose-brand">
        <p className="text-lg text-gray-600 not-prose border-l-4 border-brand-400 pl-5 py-2 mb-8">
          One of the most common questions we get before the season starts is: <em>&ldquo;What does this actually cost?&rdquo;</em> Here are honest, current numbers for professional mosquito barrier spray in Ontario — no upsells, no ambiguity. Part of our{' '}
          <Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 underline">
            Ultimate Backyard Mosquito Control Guide
          </Link>.
        </p>

        <h2>The Short Answer: What Mosquito Control Costs in Ontario (2026)</h2>
        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-brand-800 text-white">
                <th className="px-4 py-2 text-left">Service Type</th>
                <th className="px-4 py-2 text-left">Typical Ontario Price</th>
                <th className="px-4 py-2 text-left">Best For</th>
              </tr>
            </thead>
            <tbody>
              {[
                { type: 'Single one-time treatment', price: '$120 – $200', best: 'Event prep or trying the service' },
                { type: '3-treatment mini-season', price: '$290 – $430', best: 'Mid-season start or cottages' },
                { type: '5-treatment full season', price: '$420 – $650', best: 'Best value, May–September coverage' },
                { type: 'Combined mosquito + tick package', price: '$580 – $850', best: 'Full yard protection, high-risk properties' },
                { type: 'Large lot / estate (0.5+ acres)', price: '$200 – $350 per visit', best: 'Rural or semi-rural properties' },
              ].map(({ type, price, best }) => (
                <tr key={type} className="border-b border-gray-200 even:bg-gray-50">
                  <td className="px-4 py-2 font-medium text-gray-800">{type}</td>
                  <td className="px-4 py-2 text-brand-700 font-bold">{price}</td>
                  <td className="px-4 py-2 text-gray-600">{best}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>These ranges reflect real pricing across the GTA market — Mississauga, Toronto, Brampton, Oakville, Burlington, Hamilton, and surrounding areas — as of the 2026 season. Individual quotes vary based on lot size, vegetation density, and proximity to water.</p>

        <h2>What Affects the Price of Mosquito Control in Ontario?</h2>

        <h3>1. Lot Size and Treatable Area</h3>
        <p>Mosquito barrier spray is priced primarily on the area that needs treatment — specifically the foliage, tree lines, fence borders, and shaded surfaces where mosquitoes rest. A standard in-town lot (40 × 100 ft, roughly 3,700 sq ft of treatable yard) will cost less than a half-acre property with mature trees and dense plantings.</p>
        <p>Most GTA residential properties fall in the standard pricing tier. If your property backs onto a ravine, has significant tree canopy, or includes extensive perimeter vegetation, expect to pay toward the higher end of the range. Be transparent about your lot when requesting a quote — it helps companies give you an accurate number the first time.</p>

        <h3>2. Proximity to Water</h3>
        <p>Properties near the Credit River, Humber River, Don Valley, Lake Ontario, Bronte Creek, or any backyard pond face higher mosquito pressure and may require more thorough application coverage. Some companies add a small surcharge for waterfront or ravine-adjacent properties because treatment takes longer and may need to be reapplied more frequently.</p>

        <h3>3. One-Time vs. Seasonal Package</h3>
        <p>This is the biggest cost lever. A single treatment booked reactively in July might cost $150–$200. That same treatment, booked as part of a five-visit seasonal package in May, might cost $90–$120 per visit. The economics of barrier spray heavily favour seasonal packages — the formula needs to be reapplied every 21–30 days to stay effective, so a reactive approach ends up more expensive and less effective than scheduling the season upfront.</p>

        <h3>4. Combined Mosquito and Tick Treatment</h3>
        <p>Many Ontario homeowners — especially those near conservation areas, ravines, or greenbelt trails — need both mosquito and tick control. Combined packages are almost always cheaper than booking each service separately. If you live near the Niagara Escarpment, Oak Ridges Moraine, or any forested trail system, the combined package is the right starting point.</p>

        <h3>5. Company Licensing and Product Quality</h3>
        <p>Not all mosquito control companies in Ontario operate with a valid pest control license from the Ontario Ministry of the Environment. Licensed companies use Health Canada–approved formulas under Pest Management Regulatory Agency (PMRA) oversight — which costs more to source and apply than unregistered products. When comparing quotes, verify that the company is licensed, uses PMRA-approved products, and will provide a service log documenting what was applied, where, and at what rate.</p>

        <h2>The Real Cost of Doing Nothing</h2>
        <p>Before dismissing professional mosquito control as an unnecessary expense, consider what you lose without it. In the GTA, properties near waterways and ravines can become genuinely unusable in the evenings from late May through August — a backyard you paid a mortgage for, sitting empty because of pests. The cost of a full five-treatment season is roughly equivalent to one or two outdoor dining experiences you won&apos;t have to skip because of mosquitoes.</p>
        <p>West Nile virus, while uncommon, is a real risk in Ontario — the City of Toronto runs a dedicated larviciding program every year precisely because mosquito-borne illness is a documented public health concern in this region. Professional control significantly reduces the mosquito population on your property and around the people who matter most to you.</p>

        <h2>DIY vs. Professional: The True Cost Comparison</h2>
        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-brand-800 text-white">
                <th className="px-4 py-2 text-left">Option</th>
                <th className="px-4 py-2 text-left">Typical Season Cost</th>
                <th className="px-4 py-2 text-left">Effectiveness</th>
              </tr>
            </thead>
            <tbody>
              {[
                { option: 'Citronella candles / torches', cost: '$50 – $120', effectiveness: 'Very low — only in immediate vicinity' },
                { option: 'DEET personal repellent', cost: '$30 – $60', effectiveness: 'Good for person, not yard' },
                { option: 'DIY backyard fogger (store-bought)', cost: '$80 – $200 + refills', effectiveness: 'Low — no residual, short knockdown' },
                { option: 'Mosquito dunks (larvicide)', cost: '$20 – $40', effectiveness: 'Good for standing water sources only' },
                { option: 'Professional barrier spray (5-visit season)', cost: '$420 – $650', effectiveness: 'High — residual protection 21–30 days per visit' },
              ].map(({ option, cost, effectiveness }) => (
                <tr key={option} className="border-b border-gray-200 even:bg-gray-50">
                  <td className="px-4 py-2 font-medium text-gray-800">{option}</td>
                  <td className="px-4 py-2 text-brand-700 font-bold">{cost}</td>
                  <td className="px-4 py-2 text-gray-600">{effectiveness}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>How to Get an Accurate Quote in the GTA</h2>
        <p>When contacting a mosquito control company for a quote, have the following ready:</p>
        <ul>
          <li>Your property address or approximate lot size in square feet</li>
          <li>Whether you back onto a ravine, creek, pond, or conservation area</li>
          <li>How many treatments you want (one-time vs. seasonal)</li>
          <li>Whether you want tick control included</li>
          <li>Any specific timing requirements (event prep, start of season, etc.)</li>
        </ul>
        <p>Most reputable GTA mosquito control companies provide free quotes with no obligation. BuzzSkito offers free quotes for all residential and commercial properties across Mississauga, Toronto, Brampton, Oakville, Burlington, Hamilton, and surrounding areas.</p>

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
          <li><Link href="/blog/mosquito-vs-diy-vs-professional-control" className="text-brand-700 hover:underline">DIY vs. Professional Mosquito Control: What Actually Works in Ontario</Link></li>
          <li><Link href="/blog/how-long-does-mosquito-spray-last" className="text-brand-700 hover:underline">How Long Does Mosquito Spray Last?</Link></li>
          <li><Link href="/blog/how-to-choose-mosquito-control-company-gta" className="text-brand-700 hover:underline">How to Choose a Mosquito Control Company in the GTA</Link></li>
          <li><Link href="/mosquito-control" className="text-brand-700 hover:underline">View Our Mosquito Control Services</Link></li>
        </ul>
      </article>

      <CTASection
        heading="Get Your Free Mosquito Control Quote"
        subtext="Transparent pricing, Health Canada–approved formulas, 100% satisfaction guarantee. Serving the GTA since 2019."
      />
    </>
  )
}
