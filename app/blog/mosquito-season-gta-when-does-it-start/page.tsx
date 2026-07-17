import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
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
  {
    question: 'When do mosquitoes go away in Ontario?',
    answer: 'Mosquitoes go away in Ontario in late September to early October, once overnight temperatures consistently drop below 10°C. Activity fades noticeably after Labour Day, but biting mosquitoes can linger through most of September, especially in mild falls or near ravines and wetlands. A hard frost ends adult activity for the year, though eggs overwinter in the soil and hatch again the following spring.',
  },
  {
    question: 'When do mosquitoes come out in Ontario?',
    answer: 'Mosquitoes come out in Ontario in late April, when daytime temperatures start holding above 10°C, and populations build quickly through May. Overwintering eggs laid the previous fall hatch as soon as conditions warm and moisten, so a warm spring can bring the first mosquitoes out as early as the third week of April in the GTA.',
  },
  {
    question: 'What temperature do mosquitoes come out at?',
    answer: 'Mosquitoes come out once air temperatures consistently reach about 10°C. Below that threshold, adults cannot fly effectively and larval development in the water nearly stalls. They become most active in warm, humid conditions above 20°C, which is why June and July are peak months in the GTA. A late-spring cold snap can temporarily push them back into sheltered resting spots.',
  },
  {
    question: 'Do mosquitoes come out in the rain?',
    answer: 'Mosquitoes generally shelter during heavy rain because raindrops can knock them out of the air, but they come back out in force once it stops. Rain actually fuels mosquito season: every puddle, clogged gutter, and water-filled container becomes a breeding site, so populations often spike 7–10 days after a wet stretch. Warm, humid, still evenings right after rain are among the worst for biting.',
  },
  {
    question: 'Where do mosquitoes go during the day?',
    answer: 'During the day mosquitoes rest in cool, shaded, humid spots to avoid drying out — tall grass, dense shrubs, under decks, in leaf litter, ivy, and thick vegetation around your yard. Most GTA mosquitoes feed at dawn and dusk, so they stay hidden through the midday heat and emerge to bite in the evening. This is exactly why professional barrier sprays target shaded resting vegetation rather than open lawn.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: 'When Does Mosquito Season Start in the GTA? (2026 Dates, Month by Month)',
  description:
    'GTA mosquitoes emerge early-to-mid May and peak in June–July. See the 2026 month-by-month timeline and exactly when to book your first treatment.',
  canonical: `/blog/${POST.slug}`,
  type: 'article',
  publishedTime: POST.date,
  modifiedTime: '2026-07-12',
})

export default function MosquitoSeasonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: POST.title, description: POST.excerpt, slug: POST.slug, datePublished: POST.date, dateModified: '2026-07-12' })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Mosquito Season GTA', url: `/blog/${POST.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${POST.slug}`, '2026-07-12')) }} />

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
        <div className="not-prose bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
          <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
          <p className="text-gray-800 text-[15px] leading-relaxed font-medium">GTA mosquito season starts in late April, once daytime temperatures hold above 10°C, and biting peaks in June and July. The single best window to book your first treatment is the first week of May &mdash; before the first generation of adults breeds.</p>
          <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
            <li>The first GTA mosquitoes emerge in late April, when temperatures consistently exceed 10°C.</li>
            <li>Peak mosquito activity runs June through July, with heavy pressure continuing through August.</li>
            <li>The season ends in late September to early October, once overnight temperatures drop below 10°C.</li>
            <li>Below 10°C, adult mosquitoes cannot fly effectively and larval development nearly stalls.</li>
            <li>Five treatments spaced 21&ndash;28 days apart, from early May to early September, provide continuous season coverage.</li>
            <li>Populations often spike 7&ndash;10 days after a wet stretch, as every puddle becomes a breeding site.</li>
          </ul>
          <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control &middot; 150+ five-star Google reviews</p>
        </div>

        <p className="text-lg text-gray-600 leading-relaxed not-prose border-l-4 border-brand-400 pl-5 py-2 mb-8">
          This guide covers the exact mosquito season timeline for each GTA city, what temperature triggers mosquito activity, and how to time your protection. Part of our <Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 underline">Ultimate Backyard Mosquito Control Guide</Link>. Want early-season coverage locked in? <Link href="/free-yard-assessment" className="font-semibold text-brand-700 underline">Book your first treatment with a free yard assessment</Link> &mdash; or see <Link href="/mosquito-control-cost" className="text-brand-700 underline">what GTA mosquito control costs</Link> first.
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

        <aside aria-label="Professional mosquito control" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
          <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">Or let us handle it</h3>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">BuzzSkito&rsquo;s professional barrier spray covers your whole yard from $99 — backed by 150+ five-star reviews and serving 19 GTA cities.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/free-yard-assessment" className="btn-primary-sm">Get a Free Quote →</Link>
            <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
          </div>
        </aside>

        <h2>What to Do While You Wait for the Season (and Your First Treatment)</h2>
        <p>Booked your first barrier spray for early May but still getting bitten on a warm April evening? Or waiting for the truck between treatments? A portable repeller buys you a comfortable patio in the meantime. The most popular option in Canada is the <strong>Thermacell</strong> — a battery or fuel-powered device that creates a roughly 20&nbsp;ft (15&nbsp;sq&nbsp;m) zone of protection around a chair or table without sprays, sticky lotions, or citronella smoke.</p>
        <p>It won&rsquo;t protect an entire yard the way a professional <Link href="/mosquito-control" className="text-brand-700">barrier treatment</Link> does, but for a single seating area it&rsquo;s the fastest same-day fix while the season warms up.</p>

        <AffiliateDisclosure />

        <p><BuyLink search="thermacell mosquito repeller">Check Thermacell mosquito repeller prices on Amazon.ca →</BuyLink></p>

        <p>Deciding between a Thermacell and other gadgets? Read our full breakdown of the <Link href="/blog/best-mosquito-repellent-device-canada" className="text-brand-700 hover:underline">best mosquito repellent devices in Canada</Link>, and if you&rsquo;ve settled on the brand, our guide to <Link href="/blog/thermacell-canada-where-to-buy" className="text-brand-700 hover:underline">where to buy a Thermacell in Canada</Link> covers models and pricing.</p>

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
          <li><Link href="/blog/when-are-mosquitoes-most-active" className="text-brand-700 hover:underline">When Are Mosquitoes Most Active? (Time of Day &amp; Season)</Link></li>
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
