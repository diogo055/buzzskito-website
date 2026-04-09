import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { MOSQUITO_BLOGS } from '@/lib/constants'

const POST = MOSQUITO_BLOGS.supporting[0]

const FAQS = [
  {
    question: 'When does mosquito season start in the GTA?',
    answer: 'Mosquito season in the Greater Toronto Area typically begins in late April when temperatures consistently exceed 10°C. Activity ramps up through May and reaches its peak in June and July. The season runs through September, with activity declining as temperatures drop in early fall.',
  },
  {
    question: 'What temperature do mosquitoes become active in Ontario?',
    answer: 'Mosquitoes become active when air temperatures consistently reach or exceed 10°C. Below this threshold, adult mosquitoes cannot fly effectively and larval development slows dramatically. In the GTA, this typically occurs in late April, though a warm spring can trigger activity as early as the third week of April.',
  },
  {
    question: 'What is the worst month for mosquitoes in Ontario?',
    answer: 'June and July are the worst months for mosquitoes in Ontario and the GTA. Warm nights, frequent afternoon thunderstorms, and mature vegetation combine to create peak breeding conditions during these months. August remains highly active, with activity declining through September.',
  },
  {
    question: 'When is the best time to start mosquito treatment in the GTA?',
    answer: 'The best time to start mosquito treatment in the GTA is the first week of May — before populations peak. Acting early catches the first generation of adults before they breed, reducing the overall population through the season. Waiting until mosquitoes become noticeably bothersome (typically mid-June) means populations have already been building for weeks.',
  },
  {
    question: 'When does mosquito season end in Ontario?',
    answer: 'Mosquito season in Ontario effectively ends in late September to early October, when temperatures drop consistently below 10°C. Activity declines noticeably after Labour Day, though biting mosquitoes remain active through most of September. Homeowners who stop treatment in August often experience resurgent mosquito pressure through September.',
  },
  {
    question: 'How many mosquito treatments do I need per season in the GTA?',
    answer: 'For continuous protection through the GTA mosquito season, 5 treatments spaced 21–28 days apart is the recommended schedule: early May, late May/early June, late June/early July, late July/early August, and late August/early September. Properties near ravines, rivers, or wetlands benefit most from the full 5-treatment program.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: 'When Does Mosquito Season Start? GTA | BuzzSkito',
  description:
    'When mosquito season starts in the GTA, peak activity months, and when to book your first treatment. 2026 guide.',
  canonical: `/blog/${POST.slug}`,
  type: 'article',
  publishedTime: POST.date,
})

export default function MosquitoSeasonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: POST.title, description: POST.excerpt, slug: POST.slug, datePublished: POST.date })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Mosquito Season GTA', url: `/blog/${POST.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${POST.slug}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Mosquito Season GTA</span>
          </nav>
          <span className="bg-brand-800 text-brand-200 text-xs px-3 py-1 rounded-full mb-4 inline-block">Mosquito Control</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">{POST.title}</h1>
          <p className="text-brand-300 text-sm">Published {new Date(POST.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })} · By BuzzSkito</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12 prose-brand">
        <p className="text-lg text-gray-600 leading-relaxed not-prose border-l-4 border-brand-400 pl-5 py-2 mb-8">
          This guide covers the exact mosquito season timeline for each GTA city, what temperature triggers mosquito activity, and how to time your protection. Part of our <Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 underline">Ultimate Backyard Mosquito Control Guide</Link>.
        </p>

        <h2>The Short Answer: GTA Mosquito Season 2026</h2>
        <ul>
          <li><strong>First mosquitoes:</strong> Late April (when temperatures consistently exceed 10°C)</li>
          <li><strong>Season ramps up:</strong> Mid-May</li>
          <li><strong>Peak activity:</strong> June through July</li>
          <li><strong>Active season ends:</strong> Late September / early October</li>
          <li><strong>Best time to start treatment:</strong> First week of May</li>
        </ul>

        <h2>The Temperature Trigger: 10°C Is the Key Number</h2>
        <p>Mosquitoes become active when air temperatures consistently reach or exceed 10°C. Below this threshold, adult mosquitoes cannot fly effectively and larval development slows dramatically. This temperature threshold is why GTA mosquito season is compressed compared to warmer climates — but also why it can start surprisingly early in a warm spring.</p>
        <p>Overwintering mosquito eggs, laid in moist soil the previous fall, begin to hatch as soon as temperatures and moisture conditions are right. In a warm spring, this can happen as early as the third week of April in the GTA.</p>

        <h2>Month-by-Month Mosquito Activity in the GTA</h2>
        <h3>April (Late): Season Begins</h3>
        <p>The first mosquitoes of the season emerge. Activity is low and limited to warm, sheltered areas. Homeowners near the Credit River, Humber River, or other waterways may notice the first mosquitoes earlier than others.</p>

        <h3>May: Rapid Population Growth</h3>
        <p>Mosquito populations grow quickly through May as temperatures warm and rainfall provides fresh breeding water. <strong>This is the ideal time to book your first treatment</strong> — acting before populations peak gives maximum protection.</p>

        <h3>June–July: Peak Season</h3>
        <p>June and July are the most active mosquito months in the GTA. Warm nights, frequent afternoon thunderstorms, and mature vegetation all contribute to peak breeding conditions. Without treatment, properties near water features can become essentially unusable in the evenings.</p>

        <h3>August: Sustained Pressure</h3>
        <p>Activity remains high through August. Rainfall events in late summer can spike populations even on properties that seemed well-protected earlier in the season.</p>

        <h3>September: Gradual Decline</h3>
        <p>Mosquito activity declines as temperatures drop, but biting continues through most of the month. Homeowners who stop treatment in August often regret it by Labour Day.</p>

        <h2>City-by-City: Which GTA Areas Have the Worst Mosquito Season?</h2>
        <p>Not all GTA locations experience the same mosquito pressure. The most heavily affected areas tend to be:</p>
        <ul>
          <li><strong><Link href="/mississauga-mosquito-control" className="text-brand-700">Mississauga</Link></strong> — Credit River corridor, Rattray Marsh, and Credit Valley neighbourhoods experience the earliest and most intense activity</li>
          <li><strong><Link href="/toronto-mosquito-control" className="text-brand-700">Toronto</Link></strong> — Ravine-adjacent properties in Don Valley, Humber Valley, and High Park neighbourhoods</li>
          <li><strong><Link href="/hamilton-mosquito-control" className="text-brand-700">Hamilton</Link></strong> — Cootes Paradise and escarpment areas see early and sustained activity</li>
          <li><strong><Link href="/oakville-mosquito-control" className="text-brand-700">Oakville</Link></strong> — Glen Abbey and Joshua Creek ravines, and the Bronte Creek corridor</li>
        </ul>

        <h2>The Case for Starting Treatment Early</h2>
        <p>The most common mistake GTA homeowners make is waiting too long to start mosquito treatment. By the time mosquitoes become noticeably bothersome (typically mid-June), populations have already been building for weeks. Starting treatment in the first week of May catches populations before they peak, giving barrier spray the best chance to reduce activity through the entire season.</p>

        <h2>Recommended 2026 GTA Mosquito Treatment Schedule</h2>
        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-brand-800 text-white">
                <th className="px-4 py-2 text-left">Treatment</th>
                <th className="px-4 py-2 text-left">Timing</th>
                <th className="px-4 py-2 text-left">Why</th>
              </tr>
            </thead>
            <tbody>
              {[
                { t: '1', timing: 'Early May', why: 'Catch first-generation adults before populations build' },
                { t: '2', timing: 'Late May / Early June', why: 'Bridge into peak season' },
                { t: '3', timing: 'Late June / Early July', why: 'Cover peak activity period' },
                { t: '4', timing: 'Late July / Early August', why: 'Maintain coverage through late summer' },
                { t: '5', timing: 'Late August / Early September', why: 'Extend protection through September activity' },
              ].map(({ t, timing, why }) => (
                <tr key={t} className="border-b border-gray-200 even:bg-gray-50">
                  <td className="px-4 py-2 font-bold text-brand-700">Treatment {t}</td>
                  <td className="px-4 py-2">{timing}</td>
                  <td className="px-4 py-2 text-gray-600">{why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Related Guides</h2>
        <ul>
          <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
          <li><Link href="/blog/how-long-does-mosquito-spray-last" className="text-brand-700 hover:underline">How Long Does Mosquito Spray Last?</Link></li>
          <li><Link href="/mosquito-control-cost" className="text-brand-700 hover:underline">How Much Does Mosquito Control Cost in Ontario? (2026 Pricing Guide)</Link></li>
          <li><Link href="/blog/how-to-prevent-mosquitoes-in-your-backyard" className="text-brand-700 hover:underline">12 Ways to Prevent Mosquitoes in Your Backyard</Link></li>
          <li><Link href="/blog/mosquito-spray-companies-gta" className="text-brand-700 hover:underline">Mosquito Spray Companies in the GTA: What to Look For</Link></li>
          <li><Link href="/mosquito-control" className="text-brand-700 hover:underline">View Our Mosquito Control Services</Link></li>
        </ul>
      </article>

      <section className="py-10 px-4 bg-brand-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="bg-white rounded-xl border border-brand-100 group">
                <summary className="cursor-pointer px-5 py-4 font-semibold text-brand-900 list-none flex justify-between items-center">
                  <span>{question}</span>
                  <svg className="w-5 h-5 shrink-0 group-open:rotate-180 transition-transform text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-5 pb-4 text-gray-600 text-sm">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Book Your 2026 Mosquito Season Treatment" subtext="Get your first treatment on the calendar now — before peak season hits." />
    </>
  )
}
