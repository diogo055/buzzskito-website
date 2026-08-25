import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { TICK_BLOGS } from '@/lib/constants'

const POST = TICK_BLOGS.supporting[4]

export const metadata: Metadata = buildMetadata({
  title: 'When Are Ticks Active in Ontario? | 2026',
  description:
    'Month-by-month tick activity in Ontario. Peak Lyme disease risk windows, when to treat, and seasonal prevention tips.',
  canonical: `/blog/${POST.slug}`,
  type: 'article',
  publishedTime: POST.date,
})

const FAQS = [
  { question: 'Are ticks active in winter in Ontario?', answer: 'Surprisingly, yes — blacklegged ticks remain active on days when temperatures exceed 4°C, even in winter. Unlike most Ontario insects, they don\'t die off in cold weather. This is why blacklegged ticks can be encountered on warm February or March days. American dog ticks and most other species do become dormant in winter.' },
  { question: 'What month has the most tick bites in Ontario?', answer: 'May and June see the highest rate of Lyme disease transmission in Ontario due to the emergence of nymph ticks, which are tiny and difficult to detect. Adult tick activity peaks again in September and October. Both windows require vigilance and ideally professional yard treatment.' },
  { question: 'When should I get my first tick treatment of the season?', answer: 'May is the optimal timing for your first professional tick treatment in the GTA — laying the barrier down before nymphs (the highest-risk life stage) start questing in earnest. That first visit is the opener of a five-treatment season: applications run roughly one a month from May through September, because each one leaves up to 30 days of residual and wildlife keeps carrying fresh ticks in from adjacent woodland. BuzzSkito prices the full five-treatment tick season at $597 standalone, or $497 when added to any mosquito plan.' },
  { question: 'When do ticks come out in Ontario?', answer: 'Blacklegged ticks become active any time the temperature rises above roughly 4°C, so across most of Ontario they emerge as early as March or April once the snow melts. The first major surge is the May–June nymph season, the highest-risk window for Lyme disease. Because adults can appear on mild winter days too, treat any above-freezing time outdoors as possible tick weather.' },
  { question: 'When do ticks go away or die off in Ontario?', answer: 'Blacklegged ticks do not truly die off — adults stay active into November and re-emerge on any winter day above about 4°C, sheltering under leaf litter and snow during hard frost rather than dying. American dog ticks and most other species do become dormant for winter. Practically, peak risk winds down after the fall adult surge, but in Ontario vigilance never fully ends.' },
  { question: 'Are ticks active at night?', answer: 'Yes — unlike mosquitoes, ticks do not follow a day-night cycle. They quest for hosts whenever conditions are humid and mild enough, day or night. Ticks wait on grass and low vegetation for a host to brush past rather than actively hunting, so a dusk or nighttime walk through tall grass carries the same risk as a midday one. Always do a tick check after any time outdoors.' },
  { question: 'When is peak tick season in Ontario?', answer: 'Ontario has two peaks. The highest-risk window is the May–June nymph season, when poppy-seed-sized nymphs emerge and cause most Lyme disease cases. A second peak arrives in September–October as adult blacklegged ticks become active before frost. Both windows call for daily tick checks and, ideally, professional yard treatment across the whole season — five applications spread roughly monthly from May through September, since each one holds for up to 30 days.' },
  { question: 'At what temperature do ticks become inactive?', answer: 'Blacklegged ticks generally go dormant once temperatures fall below about 4°C, which is why they can surprise people on mild winter days above that threshold. Cold does not kill them — they shelter under leaf litter and snow and resume questing whenever it warms up. Sustained hard frost reduces activity, but a single winter thaw can bring adults back out looking for a host.' },
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
        <div className="not-prose bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
          <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
          <p className="text-gray-800 text-[15px] leading-relaxed font-medium">In Ontario, blacklegged (deer) ticks are active any day the temperature climbs above about 4&deg;C, so the season runs roughly March through November with two danger peaks &mdash; nymphs in May&ndash;June and adults in September&ndash;October.</p>
          <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
            <li>Blacklegged ticks stay active any time it is above about 4&deg;C, so they can appear on warm February or March days.</li>
            <li>The May&ndash;June nymph season is the highest-risk window and causes the majority of Ontario Lyme disease cases.</li>
            <li>Adult blacklegged ticks peak again in September&ndash;October and stay active until hard frost, into November.</li>
            <li>American dog ticks and most other species go dormant in winter, but blacklegged ticks never truly die off.</li>
            <li>BuzzSkito&rsquo;s tick season is five treatments, roughly one a month from May through September &mdash; each delivers up to 30 days of residual, so the barrier never lapses across either peak.</li>
          </ul>
          <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control &middot; 150+ five-star Google reviews</p>
        </div>

        <p className="text-lg text-gray-600 not-prose border-l-4 border-amber-400 pl-5 py-2 mb-8">
          Unlike mosquitoes, ticks don't have a clean on/off season. Understanding their year-round activity patterns helps you time protection correctly. Part of our <Link href={`/blog/${TICK_BLOGS.pillar.slug}`} className="text-brand-700 underline">Ultimate Tick Control Guide for Ontario Homeowners</Link>.
        </p>

        <h2>The Key Distinction: Two Tick Seasons in Ontario</h2>
        <p>Ontario's most dangerous tick — the blacklegged tick — has two distinct peak activity periods, driven by its lifecycle. Two peaks with months of activity in between is exactly why we run <strong>five professional tick treatments per season</strong>, roughly one a month from May through September, rather than a spring-and-fall pair.</p>
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
          <table className="min-w-[560px] w-full text-sm border-collapse">
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

        <h2>How a Five-Treatment Season Covers Both Peak Windows</h2>
        <p>BuzzSkito's recommended tick control program is five treatments spread roughly monthly from May through September. Each application leaves up to 30 days of residual on the vegetation where ticks quest, so a monthly cadence is what keeps the barrier continuous — across both peaks and the active months in between:</p>
        <ul>
          <li><strong>Treatment 1 — May:</strong> The season opener. Lays the barrier down at the property edge as nymphs begin emerging, ahead of Ontario's highest-risk Lyme window.</li>
          <li><strong>Treatment 2 — June:</strong> Nymph peak. Poppy-seed-sized nymphs drive most Lyme transmission precisely because they are so easily missed on skin.</li>
          <li><strong>Treatment 3 — July:</strong> Renews the barrier as the previous application's residual runs out, through the tail of nymph season.</li>
          <li><strong>Treatment 4 — August:</strong> Holds coverage as the first new adults begin emerging, and against ticks carried back in from neighbouring woodland.</li>
          <li><strong>Treatment 5 — September:</strong> Timed to the adult surge, with residual carrying into October as adults stay active toward frost.</li>
        </ul>
        <p>The reason it is five and not two comes down to residual and re-infestation. Up to 30 days of protection per application means a spring-and-fall pair stops working within a month of each visit, leaving a multi-month hole from early summer onward — including the tail of nymph season, when the poppy-seed-sized nymphs that drive most Lyme transmission are still questing and easily missed. And because deer, mice, and birds keep moving ticks in from adjacent woodland all summer, the barrier has to be renewed rather than applied once or twice. Adults remain active into November in mild years, so keep up daily tick checks after the final visit even while the September residual is still working.</p>
        <p>A full five-treatment tick season is <strong>$597</strong> standalone, or <strong>$497</strong> added to any mosquito plan — a $100 saving. A single one-off treatment starts at $99 if you would rather see the results before committing to the season.</p>
        <p>Local calendars shift a little either side of that provincial average. In Oakville, the 16 Mile Creek corridor and Bronte Creek Provincial Park keep ticks active from roughly mid-March into November, which changes when the first treatment should land — the month-by-month version is in <Link href="/blog/tick-season-oakville-when-are-ticks-active" className="text-brand-700 hover:underline">the Oakville tick season breakdown</Link>.</p>

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
