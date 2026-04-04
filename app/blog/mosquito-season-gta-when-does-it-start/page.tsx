import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema } from '@/lib/seo'
import { MOSQUITO_BLOGS } from '@/lib/constants'

const POST = MOSQUITO_BLOGS.supporting[0]

export const metadata: Metadata = buildMetadata({
  title: 'When Does Mosquito Season Start in the GTA? (2026 Guide) | BuzzSkito',
  description: 'Exact start dates, temperature triggers, and peak activity windows for mosquito season in Toronto, Mississauga, Brampton, Oakville, Burlington & Hamilton. Plan your 2026 protection.',
  canonical: `/blog/${POST.slug}`,
  type: 'article',
  publishedTime: POST.date,
})

export default function MosquitoSeasonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: POST.title, description: POST.excerpt, slug: POST.slug, datePublished: POST.date })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Mosquito Season GTA', url: `/blog/${POST.slug}` }])) }} />

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
          <li><Link href="/blog/how-to-prevent-mosquitoes-in-your-backyard" className="text-brand-700 hover:underline">12 Ways to Prevent Mosquitoes in Your Backyard</Link></li>
          <li><Link href="/mosquito-control" className="text-brand-700 hover:underline">View Our Mosquito Control Services</Link></li>
        </ul>
      </article>

      <CTASection heading="Book Your 2026 Mosquito Season Treatment" subtext="Get your first treatment on the calendar now — before peak season hits." />
    </>
  )
}
