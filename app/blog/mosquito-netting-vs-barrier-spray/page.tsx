import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'

const SLUG = 'mosquito-netting-vs-barrier-spray'
const DATE = '2026-04-26'
const TITLE = 'Mosquito Netting vs Barrier Spray — Which Is Better? (2026)'

const FAQS = [
  {
    question: 'Does mosquito netting actually work?',
    answer: 'Yes — mosquito netting works perfectly for the area it physically covers. A bed canopy net keeps mosquitoes off you while sleeping. A patio screen tent keeps them off you while you\'re inside it. The limitation: netting only protects what\'s inside it. The moment you step outside the screened area, you\'re exposed. For a backyard you want to use freely (kids playing, BBQ, gardening, dog walking around) netting can\'t cover all of it.',
  },
  {
    question: 'How much does outdoor mosquito netting cost?',
    answer: 'Patio screen tents: $200–$1,500 depending on size and quality. Custom retractable screened porch enclosures: $3,000–$15,000 installed. Bed canopy nets: $20–$60. Patio mosquito netting curtains: $50–$150. The cost-effective option for backyard use is a fixed gazebo with mesh side walls (~$300–$800) for a defined patio area.',
  },
  {
    question: 'When does mosquito netting make sense?',
    answer: 'Netting is the right choice when: (1) You only need protection in a defined area (a specific patio or porch). (2) You want zero pesticide exposure — netting is purely physical. (3) Your property is small and a screened area covers most of your outdoor activity. (4) You\'re renting and can\'t make permanent changes — a freestanding screened gazebo packs up at season end. (5) You travel and need portable protection (camping, cottages).',
  },
  {
    question: 'When should I use barrier spray instead of netting?',
    answer: 'Barrier spray is the right choice when: (1) You want to use your entire backyard freely — kids playing, dogs running, gardening, BBQ areas, lawn games. (2) You don\'t want to be confined to a specific screened zone. (3) You have moderate to high mosquito pressure (ravine-adjacent, near water) where a screened area still leaves the rest of the property unusable. (4) You want continuous protection without setup/teardown. Barrier spray controls the population across the whole yard for 21–30 days at a time.',
  },
  {
    question: 'Can I combine mosquito netting and barrier spray?',
    answer: 'Yes — and this is the best combination for ravine-adjacent or conservation-area-adjacent properties under heavy mosquito pressure. Barrier spray controls the population across the yard, and a screened patio gives you a 100% bug-free zone for dinner or evening relaxation. Many Ontario homeowners with significant outdoor entertaining space do exactly this.',
  },
  {
    question: 'What\'s better for a patio — a screened gazebo or mosquito spray?',
    answer: 'For patio-only use, a screened gazebo is the cheapest long-term solution — one $400 purchase covers years of protection for that specific space. For whole-yard use (kids, pets, gardening, lawn games), barrier spray is more practical because you\'re not confined to one area. Most Ontario homeowners with kids end up with both.',
  },
  {
    question: 'Are mosquito nets safe for babies?',
    answer: 'Yes — mosquito netting is the safest mosquito protection for babies under 6 months, since chemical repellents are not recommended for infants. A fine-mesh canopy net over a stroller, crib, or pack-and-play provides complete physical protection without any pesticide exposure. Health Canada specifically recommends netting as the primary infant protection.',
  },
  {
    question: 'How long does outdoor mosquito netting last?',
    answer: 'Quality outdoor netting lasts 3–7 years with proper storage. Sunlight degrades cheap netting faster than expected — store gazebo screens indoors over winter. Higher-quality permethrin-treated netting (used in tropical regions) actively kills mosquitoes touching it but is harder to find in Canadian retail. Most Canadian-retailed gazebo screens are untreated mesh that physically blocks rather than chemically deters.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Netting vs Barrier Spray · 2026 Comparison',
  description: 'Mosquito netting vs professional barrier spray for backyards. Cost, coverage, when to use which. Ontario 2026 guide.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

export default function MosquitoNettingVsSprayPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Comparison of mosquito netting vs barrier spray for Ontario backyards.', slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Netting vs Spray', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Netting vs Spray</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">An honest 2026 cost-and-coverage comparison for Ontario homeowners. When netting wins, when spray wins, and when you need both.</p>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <p className="lead text-xl text-gray-700 leading-relaxed mb-6">Mosquito netting and barrier spray are both real solutions to mosquito problems — but they solve different problems. Netting protects an enclosed space; barrier spray protects an entire yard. Here&rsquo;s how to decide which one (or both) fits your situation.</p>

          <h2>The Quick Comparison</h2>
          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-800 text-white">
                  <th className="px-4 py-3 text-left">Factor</th>
                  <th className="px-4 py-3 text-left">Mosquito Netting</th>
                  <th className="px-4 py-3 text-left">Barrier Spray</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Coverage', 'Enclosed area only', 'Entire yard'],
                  ['Effectiveness inside', '100% bug-free', '90%+ population reduction'],
                  ['Effectiveness outside the zone', '0% (not protected)', '90%+ population reduction'],
                  ['Initial cost', '$200–$15,000 (depending on scope)', '$0'],
                  ['Annual cost', '$0 (after purchase)', '$549–$2,049'],
                  ['Setup', 'Permanent or seasonal install', 'None — we come to you'],
                  ['Aesthetic impact', 'Visible structure / mesh', 'Invisible'],
                  ['Movement freedom', 'Confined to enclosure', 'Use entire yard'],
                  ['Best for', 'Defined dining/lounging zone', 'Whole-yard use (kids, pets, gardening)'],
                ].map(([factor, a, b], i) => (
                  <tr key={i} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-brand-800">{factor}</td>
                    <td className="px-4 py-3 text-gray-600">{a}</td>
                    <td className="px-4 py-3 text-brand-700 font-bold">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>When Mosquito Netting Wins</h2>
          <ul>
            <li><strong>You only need one bug-free spot.</strong> A single screened patio or porch is all you need; the rest of the yard isn&rsquo;t actively used.</li>
            <li><strong>Renting / can&rsquo;t modify the property permanently.</strong> A freestanding $400 gazebo packs up at season end.</li>
            <li><strong>Camping or cottage use.</strong> Portable mosquito netting tents protect a campsite without needing yard treatment.</li>
            <li><strong>Babies under 6 months.</strong> Stroller/crib netting is the only mosquito protection Health Canada recommends for infants.</li>
            <li><strong>You want zero pesticide exposure.</strong> Netting is purely physical — no chemistry involved.</li>
          </ul>

          <h2>When Barrier Spray Wins</h2>
          <ul>
            <li><strong>You actually use your entire backyard.</strong> Kids playing on the lawn, dogs running, gardening, BBQ near the trees, lawn games — netting confines you to one spot.</li>
            <li><strong>You have moderate-to-high mosquito pressure.</strong> Ravine-adjacent, creek-adjacent, conservation-adjacent properties have so many mosquitoes that a single screened area still means an unusable rest of yard.</li>
            <li><strong>You don&rsquo;t want to set up and tear down a structure.</strong> Spray is invisible and continuous.</li>
            <li><strong>Your yard has features that don&rsquo;t fit under a gazebo.</strong> Pool, large patio, mature trees, garden beds — these can&rsquo;t be enclosed easily.</li>
            <li><strong>You also have ticks.</strong> Netting does nothing for ticks (ticks live on grass, not in the air). Barrier spray controls both.</li>
          </ul>

          <h2>The Combination That Works for Most Ontario Homeowners</h2>
          <p>For Ontario yards under significant mosquito pressure (ravine-adjacent, near a creek or marsh, or just generally heavy in May–July), the most-comfortable setup is:</p>
          <ol>
            <li><strong>Barrier spray for the whole yard.</strong> Population reduction across all the lawn, garden, and play areas. Standard plan = continuous coverage May–September.</li>
            <li><strong>A screened gazebo or pergola for evening dining.</strong> 100% bug-free zone for dinner, conversations, evening drinks.</li>
            <li><strong>Mosquito netting for sleeping areas in cottages or camping.</strong> Portable, zero pesticide.</li>
          </ol>
          <p>This costs around $1,000–$2,000 in year one (gazebo + first season of spray) and $549–$994/year after.</p>

          <h2>The Real Cost of Doing Nothing</h2>
          <p>The most common Ontario homeowner choice is &ldquo;put up with it&rdquo; — citronella candles on the patio, swatting between bites, cutting outdoor time short. The hidden cost: you stop using your backyard. A 1,500 sq ft yard you don&rsquo;t use is the most expensive square footage on your property.</p>
          <p>If you&rsquo;re reading this guide, you&rsquo;re past the &ldquo;put up with it&rdquo; phase. The honest question is whether netting (defined zone protection) or spray (whole-yard protection) fits your specific outdoor lifestyle.</p>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/mosquito-repellent-guide-ontario-2026">Mosquito Repellent Guide Ontario 2026</Link></li>
            <li><Link href="/blog/mosquito-magnet-vs-professional-spray">Mosquito Magnet vs Professional Spray</Link></li>
            <li><Link href="/blog/natural-mosquito-repellent-ontario">Natural Mosquito Repellent — What Works</Link></li>
            <li><Link href="/mosquito-control">BuzzSkito Mosquito Control Service</Link></li>
            <li><Link href="/wedding-mosquito-control">Wedding &amp; Outdoor Event Spray</Link></li>
          </ul>
        </div>
      </article>

      <CTASection heading="Use Your Whole Yard Without a Screen Tent" subtext="Professional barrier spray covers the entire yard. Kids, pets, garden, BBQ — all bug-free. From $99." variant="dark" />
    </>
  )
}
