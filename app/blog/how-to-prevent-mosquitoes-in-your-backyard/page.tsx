import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { MOSQUITO_BLOGS } from '@/lib/constants'

const POST = MOSQUITO_BLOGS.supporting[4]

export const metadata: Metadata = buildMetadata({
  title: '12 Ways to Prevent Mosquitoes in Your Backyard (Ontario) | BuzzSkito',
  description: 'Standing water elimination, landscaping strategies, natural deterrents, and how to combine DIY prevention with professional barrier spray for Ontario homeowners.',
  canonical: `/blog/${POST.slug}`,
  type: 'article',
  publishedTime: POST.date,
})

const FAQS = [
  { question: 'What is the single most effective thing I can do to reduce mosquitoes in my backyard?', answer: 'Eliminate all standing water on your property. Mosquitoes breed in even tiny amounts of standing water, and removing breeding sites dramatically reduces how many mosquitoes can establish on your property. Combine this with professional barrier spray for maximum results.' },
  { question: 'Do mosquito-repelling plants actually work?', answer: 'Plants like citronella grass, lavender, lemon balm, and basil contain aromatic compounds that mosquitoes find unpleasant — but only when the plant\'s leaves are crushed or disturbed. Unbruised plants in a garden bed provide minimal repellency. They\'re a nice supplement but not a meaningful mosquito control strategy on their own.' },
  { question: 'Does a backyard fan help with mosquitoes?', answer: 'Yes — mosquitoes are weak fliers. A strong fan on a patio or deck creates wind that makes it difficult for mosquitoes to land. This works well in the immediate vicinity of the fan but provides no protection for the rest of the yard.' },
]

export default function PreventMosquitoesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: POST.title, description: POST.excerpt, slug: POST.slug, datePublished: POST.date })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Prevent Mosquitoes Backyard', url: `/blog/${POST.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${POST.slug}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Prevent Mosquitoes</span>
          </nav>
          <span className="bg-brand-800 text-brand-200 text-xs px-3 py-1 rounded-full mb-4 inline-block">Mosquito Control</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">{POST.title}</h1>
          <p className="text-brand-300 text-sm">Published {new Date(POST.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })} · By BuzzSkito</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12 prose-brand">
        <p className="text-lg text-gray-600 not-prose border-l-4 border-brand-400 pl-5 py-2 mb-8">
          Prevention reduces breeding. Treatment eliminates adults. Together, they give you the most mosquito-free yard possible. This guide covers both. Part of our <Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 underline">Ultimate Mosquito Control Guide</Link>.
        </p>

        <h2>The Two-Part Strategy: Prevention + Treatment</h2>
        <p>Mosquito prevention and mosquito treatment are not competing approaches — they're complementary. Eliminating breeding sites (prevention) reduces how many mosquitoes can be produced on your property. Professional barrier spray (treatment) eliminates the adult mosquitoes that arrive from your property and neighbouring areas. Together, they deliver dramatically better results than either alone.</p>

        <h2>12 Ways to Prevent Mosquitoes in Your Ontario Backyard</h2>

        <h3>1. Change Birdbath Water Weekly</h3>
        <p>Birdbaths are among the most common backyard mosquito breeding sites. Mosquito larvae can complete development in as few as 7 days in warm weather. Change the water completely every 5–7 days, or add a fountain/agitator that keeps water moving (mosquitoes prefer still water).</p>

        <h3>2. Clean Your Gutters</h3>
        <p>Clogged gutters accumulate organic debris and standing water — ideal mosquito habitat right at the roofline. Clean gutters at least twice per season and after major storms. Consider gutter guards to prevent future blockage.</p>

        <h3>3. Remove or Drain Containers After Rain</h3>
        <p>Do a sweep of your yard after every significant rain: buckets, watering cans, children's toys, wheelbarrows, tarps, and any other containers that have collected water. Even small containers can produce hundreds of mosquitoes.</p>

        <h3>4. Drill Drainage Holes in Plant Saucers</h3>
        <p>Decorative plant saucers beneath outdoor pots can hold standing water for weeks. Drill a small drainage hole in the bottom of saucers that you don't actively use for watering, or empty them manually after rain.</p>

        <h3>5. Level Low-Lying Areas in Your Lawn</h3>
        <p>Areas of the lawn that collect and hold water after rain are persistent breeding sites. Top-dress low spots with soil, or improve drainage through aeration and overseeding to allow faster water infiltration.</p>

        <h3>6. Keep Pools and Hot Tubs Covered and Properly Treated</h3>
        <p>A properly chlorinated, circulating pool won't breed mosquitoes. But a pool with a stagnant, uncovered cover can. Ensure pool covers drain quickly after rain, and maintain proper chlorination and filtration throughout the season.</p>

        <h3>7. Maintain Your Lawn and Trim Vegetation</h3>
        <p>Adult mosquitoes rest in tall grass, dense shrubs, and shaded ground cover during the heat of the day. Keeping grass mowed and shrubs trimmed reduces the available resting habitat — and also improves the effectiveness of barrier spray treatments, which need to reach those resting surfaces.</p>

        <h3>8. Clear Leaf Litter and Debris</h3>
        <p>Decomposing leaves create moist, shaded microhabitats that mosquitoes use as resting sites and that trap the moisture that enables larval development in small depressions. Rake leaf litter from garden beds and lawn edges regularly throughout the season.</p>

        <h3>9. Use Mosquito Dunks in Ornamental Ponds</h3>
        <p>If you have a pond, rain barrel, or other permanent water feature you can't drain or empty, use Bacillus thuringiensis israelensis (Bti) mosquito dunks. These biological control products kill mosquito larvae without harming fish, frogs, or other wildlife.</p>

        <h3>10. Install or Repair Window and Door Screens</h3>
        <p>This won't reduce outdoor mosquito populations, but intact screens prevent mosquitoes from entering your home. Check for tears or gaps — especially in sliding door screens, which are commonly damaged — before the season starts.</p>

        <h3>11. Use Patio Fans</h3>
        <p>Mosquitoes are weak fliers — they struggle in winds above 1 m/s. A strong oscillating fan aimed across your seating area creates a wind barrier that keeps mosquitoes away from the immediate area. Best used as a complement to barrier spray for sitting areas.</p>

        <h3>12. Schedule Professional Barrier Spray</h3>
        <p>The most impactful single step: professional barrier spray by <Link href="/mosquito-control" className="text-brand-700 hover:underline">BuzzSkito</Link> eliminates adult mosquitoes throughout your yard and provides up to 30 days of ongoing protection. Combine with the prevention steps above for the most effective mosquito-free backyard possible.</p>

        <h2>Frequently Asked Questions</h2>
        <div className="not-prose space-y-3 my-6">
          {FAQS.map(({ question, answer }) => (
            <details key={question} className="bg-brand-50 rounded-xl border border-brand-100 group">
              <summary className="cursor-pointer px-5 py-4 font-semibold text-brand-900 list-none flex justify-between items-center">
                <span>{question}</span>
                <svg className="w-5 h-5 shrink-0 group-open:rotate-180 transition-transform text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <p className="px-5 pb-4 text-gray-600 text-sm">{answer}</p>
            </details>
          ))}
        </div>

        <h2>Related Guides</h2>
        <ul>
          <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
          <li><Link href="/blog/mosquito-season-gta-when-does-it-start" className="text-brand-700 hover:underline">When Does Mosquito Season Start in the GTA?</Link></li>
          <li><Link href="/blog/mosquito-vs-diy-vs-professional-control" className="text-brand-700 hover:underline">DIY vs. Professional Mosquito Control</Link></li>
          <li><Link href="/mosquito-control" className="text-brand-700 hover:underline">BuzzSkito Mosquito Control Services</Link></li>
        </ul>
      </article>

      <CTASection heading="Ready to Combine Prevention with Professional Treatment?" subtext="Get a free mosquito control quote and take back your backyard this season." />
    </>
  )
}
