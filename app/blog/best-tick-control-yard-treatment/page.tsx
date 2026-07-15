import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { TICK_BLOGS } from '@/lib/constants'

const POST = TICK_BLOGS.supporting[3]

export const metadata: Metadata = buildMetadata({
  title: 'Best Tick Control for Yards in Ontario 2026 (6 Methods Compared)',
  description:
    'Six tick control methods compared for Ontario yards in 2026 — professional barrier spray, consumer sprays, granular, cedar mulch, permethrin tick tubes, and DIY foggers. Effectiveness ratings, duration, and what actually works on blacklegged ticks.',
  canonical: `/blog/${POST.slug}`,
  type: 'article',
  publishedTime: POST.date,
})

const FAQS = [
  { question: 'Does cedar mulch really repel ticks?', answer: 'Cedar mulch has some natural tick-repelling properties due to its aromatic oils, and a 1-metre cedar mulch barrier between your lawn and any wooded areas is a valid habitat modification strategy. However, cedar mulch alone is not a meaningful tick control method — it works best as part of a layered approach that includes professional barrier spray.' },
  { question: 'Is diatomaceous earth effective for tick control?', answer: 'Diatomaceous earth can kill ticks and other insects on contact by damaging their exoskeletons and causing dehydration. It\'s a low-toxicity option, but it requires direct contact, breaks down quickly when wet, and doesn\'t provide residual protection. It\'s not practical as a yard-wide tick control solution in Ontario\'s wet climate.' },
  { question: 'How does professional tick spray compare to Damminix Tick Tubes?', answer: 'Tick tubes contain permethrin-treated cotton that mice use for nesting material. The permethrin kills larval ticks that feed on the mice. This is a clever biological approach that targets the wildlife reservoir host — but it only addresses larval-stage ticks. Professional barrier spray kills ticks at all life stages directly in your yard. The two approaches are complementary, not competing.' },
]

export default function BestTickControlPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: POST.title, description: POST.excerpt, slug: POST.slug, datePublished: POST.date })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Best Tick Control Yard Treatment', url: `/blog/${POST.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${POST.slug}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Best Tick Control for Yards</span>
          </nav>
          <span className="bg-brand-800 text-brand-200 text-xs px-3 py-1 rounded-full mb-4 inline-block">Tick Control</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">{POST.title}</h1>
          <p className="text-brand-300 text-sm">Published {new Date(POST.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })} · By BuzzSkito</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12 prose-brand">
        <p className="text-lg text-gray-600 not-prose border-l-4 border-amber-400 pl-5 py-2 mb-8">
          Honest comparison from a tick control company — we believe the evidence speaks for itself. Part of our <Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 underline">Ultimate Tick Control Guide for Ontario Homeowners</Link>.
        </p>

        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable not-prose">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Quick Answer</p>
          <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
            The best yard tick treatment for Ontario is a professional barrier spray applied to lawn edges, leaf litter, and shaded borders — it kills blacklegged ticks at every life stage and lasts up to 30 days. Pair it with habitat cleanup and permethrin tick tubes for a layered defence that keeps working between visits.
          </p>
        </div>

        <h2>Tick Control Options Compared</h2>
        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-brand-800 text-white">
                <th className="px-3 py-2 text-left">Method</th>
                <th className="px-3 py-2 text-center">Effectiveness</th>
                <th className="px-3 py-2 text-center">Duration</th>
                <th className="px-3 py-2 text-center">Life Stages</th>
              </tr>
            </thead>
            <tbody>
              {[
                { method: 'Professional barrier spray',       eff: '★★★★★', dur: 'Up to 30 days', stages: 'All' },
                { method: 'Consumer tick spray (DIY)',        eff: '★★★☆☆', dur: '1–14 days',     stages: 'Adults/nymphs' },
                { method: 'Granular tick treatment',          eff: '★★☆☆☆', dur: '1–4 weeks',     stages: 'Variable' },
                { method: 'Cedar mulch barrier',              eff: '★★☆☆☆', dur: 'Seasonal',      stages: 'Deterrent only' },
                { method: 'Diatomaceous earth',               eff: '★★☆☆☆', dur: 'Until wet',     stages: 'All (contact)' },
                { method: 'Tick tubes (Damminix)',            eff: '★★★☆☆', dur: 'Seasonal',      stages: 'Larvae only' },
                { method: 'Habitat modification (landscaping)', eff: '★★★☆☆', dur: 'Ongoing',   stages: 'Reduces habitat' },
              ].map(({ method, eff, dur, stages }) => (
                <tr key={method} className="border-b border-gray-200 even:bg-gray-50">
                  <td className="px-3 py-2 font-medium text-gray-800">{method}</td>
                  <td className="px-3 py-2 text-center text-yellow-500">{eff}</td>
                  <td className="px-3 py-2 text-center text-gray-600 text-xs">{dur}</td>
                  <td className="px-3 py-2 text-center text-xs text-gray-600">{stages}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Professional Barrier Spray: Why It's the Gold Standard</h2>
        <p>Professional-grade residual insecticides applied by trained technicians consistently outperform all DIY alternatives for residential tick control. The advantages are straightforward:</p>
        <ul>
          <li><strong>Higher active ingredient concentration:</strong> Professional products have significantly higher concentrations than consumer products, providing better knockdown and longer residual activity.</li>
          <li><strong>Targeting expertise:</strong> Effective tick control requires thorough coverage of the specific microhabitats where ticks concentrate — lawn edges, leaf litter zones, under-deck areas, fence lines. A trained technician identifies and treats all these sites. Most homeowners miss some.</li>
          <li><strong>Up to 30-day protection:</strong> Professional tick treatments provide the longest residual protection of any residential option — three times longer than the best consumer products.</li>
          <li><strong>All life stages:</strong> The professional formula kills adult ticks, nymphs, and larvae on contact — not just adults.</li>
          <li><strong>Guaranteed results:</strong> BuzzSkito backs every tick treatment with a free retreatment guarantee if ticks return within the protection window.</li>
        </ul>

        <h2>The Best Strategy: Layered Approach</h2>
        <p>The most effective tick control for Ontario homeowners combines:</p>
        <ol>
          <li><strong>Habitat modification</strong> — remove leaf litter, maintain lawn edges, move woodpiles, create mulch barriers at property edges</li>
          <li><strong>Professional barrier spray</strong> — 2 treatments per season (spring and late summer) targeting all high-risk zones</li>
          <li><strong>Personal protection</strong> — tick checks, repellent, appropriate clothing for outdoor activities</li>
        </ol>

        <h3>DIY Products That Complement Professional Service</h3>
        <AffiliateDisclosure />
        <p>Between professional visits, a couple of DIY products round out the layered approach above &mdash; neither replaces a whole-yard barrier treatment, but both are worth keeping on hand:</p>
        <ul>
          <li>
            <strong>Plant-based yard spray:</strong> For spot-treating small problem zones yourself, a botanical spray like Wondercide handles patios, garden beds, and pet areas without harsh synthetics. Coverage is short-lived, so reapply after rain.{' '}
            <BuyLink search="wondercide tick yard spray">Check price on Amazon.ca &rarr;</BuyLink>
          </li>
          <li>
            <strong>Permethrin clothing spray:</strong> For hikes and yard work, treating clothing and gear with a permethrin spray such as Sawyer&rsquo;s gives long-lasting, wearable protection that skin repellent alone can&rsquo;t match. Apply to garments &mdash; never skin.{' '}
            <BuyLink search="sawyer permethrin clothing spray">Check price on Amazon.ca &rarr;</BuyLink>
          </li>
        </ul>
        <p>For a fuller rundown of what actually works, see our guide to the{' '}
          <Link href="/blog/best-tick-repellent-yard-canada" className="text-brand-700 hover:underline">best tick repellents for Ontario yards</Link>.
        </p>

        <h3>Tick Tubes: The Passive Layer</h3>
        <p>Permethrin-treated tick tubes work the wildlife angle: mice grab the treated cotton for nesting material, and the permethrin kills the larval ticks feeding on them before they ever reach your family. It only touches the larval stage, so it can&rsquo;t replace a barrier spray &mdash; but as a set-and-forget layer placed along wood edges and stone walls in spring and late summer, it quietly shrinks next season&rsquo;s tick population. See our full <Link href="/blog/tick-tubes-canada" className="text-brand-700 hover:underline">guide to tick tubes in Canada</Link> for placement timing and how many you need.{' '}
          <BuyLink search="thermacell tick control tubes 12 pack">Check price on Amazon.ca &rarr;</BuyLink>
        </p>

        <h2>Related Guides</h2>
        <ul>
          <li><Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{TICK_BLOGS.pillar.title}</Link></li>
          <li><Link href="/blog/tick-season-ontario-when-are-ticks-active" className="text-brand-700 hover:underline">When Are Ticks Active in Ontario?</Link></li>
          <li><Link href="/blog/lyme-disease-tick-prevention-ontario" className="text-brand-700 hover:underline">Lyme Disease Prevention in Ontario</Link></li>
          <li><Link href="/tick-control" className="text-brand-700 hover:underline">BuzzSkito Tick Control Services</Link></li>
        </ul>

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
      </article>

      <CTASection heading="Get the Most Effective Tick Control for Your Property" subtext="Professional tick spray with up to 30-day protection. Free quote for GTA homeowners." variant="dark" />
    </>
  )
}
