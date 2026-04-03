import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema } from '@/lib/seo'
import { MOSQUITO_BLOGS } from '@/lib/constants'

const POST = MOSQUITO_BLOGS.supporting[1]

export const metadata: Metadata = buildMetadata({
  title: 'How Long Does Mosquito Spray Last? GTA Homeowner Guide | BuzzSkito',
  description: 'Professional barrier spray vs. store-bought: protection windows, rain resistance, re-application schedules, and what affects longevity for Ontario conditions.',
  canonical: `/blog/${POST.slug}`,
  type: 'article',
  publishedTime: POST.date,
})

export default function MosquitoSprayLastPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: POST.title, description: POST.excerpt, slug: POST.slug, datePublished: POST.date })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'How Long Does Mosquito Spray Last', url: `/blog/${POST.slug}` }])) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Mosquito Spray Duration</span>
          </nav>
          <span className="bg-brand-800 text-brand-200 text-xs px-3 py-1 rounded-full mb-4 inline-block">Mosquito Control</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">{POST.title}</h1>
          <p className="text-brand-300 text-sm">Published {new Date(POST.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })} · By BuzzSkito</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12 prose-brand">
        <p className="text-lg text-gray-600 not-prose border-l-4 border-brand-400 pl-5 py-2 mb-8">
          This guide breaks down exactly how long different mosquito treatments last, what shortens or extends protection, and how to build a schedule that keeps your GTA yard covered all season. Part of our <Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 underline">Ultimate Mosquito Control Guide</Link>.
        </p>

        <h2>Quick Answer: How Long Does Mosquito Spray Last?</h2>
        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-brand-800 text-white">
                <th className="px-4 py-2 text-left">Treatment Type</th>
                <th className="px-4 py-2 text-left">Duration</th>
                <th className="px-4 py-2 text-left">Rain Resistant?</th>
              </tr>
            </thead>
            <tbody>
              {[
                { type: 'Professional barrier spray (BuzzSkito)', duration: 'Up to 30 days', rain: 'Yes (after 30 min)' },
                { type: 'Consumer yard fogger spray', duration: '1–7 days', rain: 'Partially' },
                { type: 'Citronella candles/torches', duration: 'While burning only', rain: 'No' },
                { type: 'DEET personal repellent', duration: '4–8 hours (on skin)', rain: 'Minimal' },
                { type: 'Mosquito dunks (standing water)', duration: '30 days in water', rain: 'N/A' },
              ].map(({ type, duration, rain }) => (
                <tr key={type} className="border-b border-gray-200 even:bg-gray-50">
                  <td className="px-4 py-2 font-medium text-gray-800">{type}</td>
                  <td className="px-4 py-2 text-brand-700 font-semibold">{duration}</td>
                  <td className="px-4 py-2 text-gray-600">{rain}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Why Professional Spray Lasts Longer Than DIY Options</h2>
        <p>Professional-grade residual insecticides used by BuzzSkito are formulated to bond tightly to vegetation surfaces as they dry. This creates a durable coating that persists through normal weather conditions for up to 30 days. Consumer products, which are diluted for safety in non-professional contexts, typically have much lower active ingredient concentrations and lack the adhesion chemistry that enables long-lasting residual protection.</p>

        <h2>What Affects How Long Mosquito Spray Lasts?</h2>
        <h3>Rainfall</h3>
        <p>Heavy rain within the first 30–60 minutes after application, before the product has fully dried, can wash it off. Once dried, the barrier is highly rain-resistant. At BuzzSkito, we monitor weather forecasts and won't apply before heavy rain. If rain does fall within one hour of application, we reapply at no cost.</p>

        <h3>Temperature and UV Exposure</h3>
        <p>Extended periods of intense heat and direct sunlight can accelerate the breakdown of residual insecticides. Areas of your property in full sun may see slightly shorter protection windows than shaded areas. This is why we apply thorough coverage to all vegetation, including shaded areas where breakdown is slower.</p>

        <h3>Vegetation Density</h3>
        <p>Dense shrubs and thick plant canopy require more product to achieve thorough coverage. Properties with heavy landscaping may need more frequent treatments to maintain effective protection through the vegetation.</p>

        <h3>Mosquito Pressure from Neighbouring Properties</h3>
        <p>If adjacent properties have significant mosquito breeding or have dense untreated vegetation, you may experience more pressure at your property boundaries. This is normal — barrier spray is most effective when applied comprehensively, including property perimeters.</p>

        <h2>Re-Application Schedule for GTA Properties</h2>
        <p>For continuous protection, re-application every 21–28 days is optimal for GTA conditions. This accounts for the 30-day maximum protection window and provides a buffer for weather or application variability. A 5-treatment season program from May through September maintains coverage throughout the active mosquito season.</p>

        <h2>Related Guides</h2>
        <ul>
          <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
          <li><Link href="/blog/mosquito-vs-diy-vs-professional-control" className="text-brand-700 hover:underline">DIY vs. Professional Mosquito Control: What Actually Works</Link></li>
          <li><Link href="/blog/mosquito-season-gta-when-does-it-start" className="text-brand-700 hover:underline">When Does Mosquito Season Start in the GTA?</Link></li>
          <li><Link href="/mosquito-control" className="text-brand-700 hover:underline">View Our Mosquito Control Services</Link></li>
        </ul>
      </article>

      <CTASection heading="Professional Spray with 30-Day Guaranteed Protection" subtext="BuzzSkito backs every treatment with a free reapplication guarantee." />
    </>
  )
}
