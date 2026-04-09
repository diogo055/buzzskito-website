import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { TICK_BLOGS } from '@/lib/constants'

const POST = TICK_BLOGS.supporting[4]

export const metadata: Metadata = buildMetadata({
  title: 'When Are Ticks Active in Ontario? | 2026 | BuzzSkito',
  description:
    'Month-by-month tick activity in Ontario. Peak Lyme disease risk windows, when to treat, and seasonal prevention tips.',
  canonical: `/blog/${POST.slug}`,
  type: 'article',
  publishedTime: POST.date,
})

const FAQS = [
  { question: 'Are ticks active in winter in Ontario?', answer: 'Surprisingly, yes — blacklegged ticks remain active on days when temperatures exceed 4°C, even in winter. Unlike most Ontario insects, they don\'t die off in cold weather. This is why blacklegged ticks can be encountered on warm February or March days. American dog ticks and most other species do become dormant in winter.' },
  { question: 'What month has the most tick bites in Ontario?', answer: 'May and June see the highest rate of Lyme disease transmission in Ontario due to the emergence of nymph ticks, which are tiny and difficult to detect. Adult tick activity peaks again in September and October. Both windows require vigilance and ideally professional yard treatment.' },
  { question: 'When should I get my first tick treatment of the season?', answer: 'Late May is the optimal timing for your first professional tick treatment in the GTA — coinciding with the emergence of nymphs (the highest-risk life stage) before they become established in your yard. Your second treatment should be scheduled for late August or early September.' },
]

export default function TickSeasonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: POST.title, description: POST.excerpt, slug: POST.slug, datePublished: POST.date })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Tick Season Ontario', url: `/blog/${POST.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${POST.slug}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Tick Season Ontario</span>
          </nav>
          <span className="bg-brand-800 text-brand-200 text-xs px-3 py-1 rounded-full mb-4 inline-block">Tick Control</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">{POST.title}</h1>
          <p className="text-brand-300 text-sm">Published {new Date(POST.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })} · By BuzzSkito</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12 prose-brand">
        <p className="text-lg text-gray-600 not-prose border-l-4 border-amber-400 pl-5 py-2 mb-8">
          Unlike mosquitoes, ticks don't have a clean on/off season. Understanding their year-round activity patterns helps you time protection correctly. Part of our <Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 underline">Ultimate Tick Control Guide for Ontario Homeowners</Link>.
        </p>

        <h2>The Key Distinction: Two Tick Seasons in Ontario</h2>
        <p>Ontario's most dangerous tick — the blacklegged tick — has two distinct peak activity periods, driven by its lifecycle. This is why we recommend <strong>two professional tick treatments per season</strong>, not one.</p>
        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-5 my-6">
          <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-6">
            <div className="font-extrabold text-amber-800 text-lg mb-2">⚠️ Spring Peak — May/June</div>
            <div className="text-sm text-amber-900 font-bold mb-1">NYMPH SEASON — HIGHEST RISK</div>
            <p className="text-sm text-amber-800">Tiny nymphs (poppy-seed sized) emerge and quest aggressively. Responsible for majority of Lyme disease cases. Nearly impossible to see on skin.</p>
          </div>
          <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6">
            <div className="font-extrabold text-amber-800 text-lg mb-2">⚠️ Fall Peak — Sept/Oct</div>
            <div className="text-sm text-amber-900 font-bold mb-1">ADULT SEASON — SIGNIFICANT RISK</div>
            <p className="text-sm text-amber-800">Adult ticks emerge and aggressively seek large hosts. Larger and more visible than nymphs, but still easily missed. Active into late fall.</p>
          </div>
        </div>

        <h2>Month-by-Month Tick Activity in Ontario 2026</h2>
        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-brand-800 text-white">
                <th className="px-3 py-2 text-left">Month</th>
                <th className="px-3 py-2 text-center">Blacklegged Tick</th>
                <th className="px-3 py-2 text-center">Dog Tick</th>
                <th className="px-3 py-2 text-left">What's Happening</th>
              </tr>
            </thead>
            <tbody>
              {[
                { month: 'January–March', bl: 'Low*',    dog: 'Dormant', note: '*Adults active on warm days (>4°C)' },
                { month: 'April',         bl: 'Moderate',dog: 'Low',     note: 'Nymphs begin emerging; adults still active' },
                { month: 'May',           bl: '🔴 HIGH', dog: 'Moderate',note: 'Nymph peak begins — highest Lyme risk window' },
                { month: 'June',          bl: '🔴 HIGH', dog: '🔴 HIGH', note: 'Nymph peak continues; dog ticks very active' },
                { month: 'July',          bl: 'Moderate',dog: 'Moderate',note: 'Nymphs decline; larvae hatch' },
                { month: 'August',        bl: 'Moderate',dog: 'Moderate',note: 'Larval tick activity; adults begin emerging' },
                { month: 'September',     bl: '🟠 HIGH', dog: 'Moderate',note: 'Adult blacklegged tick peak; Lyme risk returns' },
                { month: 'October',       bl: '🟠 HIGH', dog: 'Low',     note: 'Adults very active before frost' },
                { month: 'November',      bl: 'Moderate',dog: 'Dormant', note: 'Adults active until hard frost' },
                { month: 'December',      bl: 'Low',     dog: 'Dormant', note: 'Adults persist on warm days' },
              ].map(({ month, bl, dog, note }) => (
                <tr key={month} className="border-b border-gray-200 even:bg-gray-50">
                  <td className="px-3 py-2 font-medium text-gray-800">{month}</td>
                  <td className="px-3 py-2 text-center text-xs font-semibold">{bl}</td>
                  <td className="px-3 py-2 text-center text-xs text-gray-500">{dog}</td>
                  <td className="px-3 py-2 text-xs text-gray-600">{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Why Two Treatments Cover Both Peak Windows</h2>
        <p>BuzzSkito's recommended two-treatment tick control program is deliberately timed to cover both peak risk periods:</p>
        <ul>
          <li><strong>Treatment 1 — Late May / Early June:</strong> Targets nymphs as they emerge. Each treatment provides up to 30 days of residual protection, covering the entire nymph season through summer.</li>
          <li><strong>Treatment 2 — Late August / September:</strong> Applied before the adult emergence peak, ensuring protection is active through the full fall tick season into November.</li>
        </ul>
        <p>Together, these two treatments provide coverage from late May through November — the complete active tick season for Ontario's blacklegged tick population.</p>

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
          <li><Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{TICK_BLOGS.pillar.title}</Link></li>
          <li><Link href="/blog/lyme-disease-tick-prevention-ontario" className="text-brand-700 hover:underline">Lyme Disease Prevention in Ontario</Link></li>
          <li><Link href="/blog/best-tick-control-yard-treatment" className="text-brand-700 hover:underline">Best Tick Control for Your Yard</Link></li>
          <li><Link href="/blog/what-ticks-look-like-ontario" className="text-brand-700 hover:underline">How to Identify Ticks in Ontario</Link></li>
          <li><Link href="/tick-control" className="text-brand-700 hover:underline">BuzzSkito Tick Control Services</Link></li>
        </ul>
      </article>

      <CTASection heading="Book Your 2026 Tick Control Treatments" subtext="Time your treatments to the peak risk windows. Free quote, no contracts." variant="dark" />
    </>
  )
}
