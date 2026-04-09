import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { NEW_BLOGS, MOSQUITO_BLOGS } from '@/lib/constants'

const POST = NEW_BLOGS[9]

export const metadata: Metadata = buildMetadata({
  title: 'First Mosquito Treatment Timing | Ontario | BuzzSkito',
  description:
    "The right timing for your first treatment makes or breaks the whole season. Here's exactly when Ontario homeowners should schedule their first professional mosquito spray.",
  canonical: `/blog/${POST.slug}`,
  type: 'article',
  publishedTime: POST.date,
})

const FAQS = [
  {
    question: 'What temperature triggers mosquito activity in Ontario?',
    answer:
      "Mosquitoes become capable of flight and active feeding when air temperatures consistently reach 10°C or above. Below this threshold, adult mosquitoes are effectively dormant. Larval development in standing water also accelerates significantly above 10°C, meaning the population clock starts ticking the moment spring temperatures hit this mark. In the GTA, this typically happens in the last week of April.",
  },
  {
    question: "What if I wait until I actually see mosquitoes before booking?",
    answer:
      "By the time you're noticing mosquitoes in your backyard — typically mid-June in the GTA — populations have been building for 4–6 weeks. You haven't missed the season, but you've missed the easiest window to get ahead of it. Starting treatment in May means each treatment is hitting a smaller, younger population. Starting in June means you're constantly playing catch-up against a fully established population with a continuous breeding cycle.",
  },
  {
    question: 'Does the first treatment need to wait until the grass is mowed and the garden is established?',
    answer:
      "You don't need a fully established landscape for the first treatment — the key targets are the same in early May as in July: shrub undersides, hedge interiors, and shaded garden border edges. Actively growing spring vegetation with some leaf cover is actually fine. The one situation where timing matters: if you've had very recent landscape work that disturbed major plantings, waiting 1–2 weeks for plants to settle and leaf out will give you a slightly better treatment surface.",
  },
  {
    question: 'Can I book my whole season schedule at once?',
    answer:
      "Yes, and we recommend it. Booking your full season program in early April or late March means you get priority scheduling for the May first-treatment window — the period when most clients want their first visit. It also means each subsequent treatment is automatically scheduled at the optimal interval, rather than reacting when mosquitoes become noticeable.",
  },
]

const MONTHS = [
  { month: 'Late April', activity: 'Low', note: "First adults emerge. Most noticeable near waterways — Credit, Humber, Don." },
  { month: 'Early May', activity: 'Building', note: "Populations growing fast. Ideal time for Treatment 1." },
  { month: 'Late May', activity: 'Moderate', note: "Treatment 2 goes here — bridge into peak season." },
  { month: 'June', activity: '🔴 Peak', note: "Peak season begins. Waiting until June means you're already reacting." },
  { month: 'July', activity: '🔴 Peak', note: "Hottest, most active month. Treatment 3 covers this window." },
  { month: 'August', activity: 'High', note: "Sustained pressure. Late-summer rain spikes populations." },
  { month: 'September', activity: 'Moderate', note: "Activity declines but continues through month. Don't stop early." },
]

export default function WhenToScheduleFirstTreatmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: POST.title, description: POST.excerpt, slug: POST.slug, datePublished: POST.date })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'When to Schedule First Mosquito Treatment', url: `/blog/${POST.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${POST.slug}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">When to Schedule First Mosquito Treatment</span>
          </nav>
          <span className="bg-brand-800 text-brand-200 text-xs px-3 py-1 rounded-full mb-4 inline-block">Timing Guide · Mosquito Control</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">{POST.title}</h1>
          <p className="text-brand-300 text-sm">Published {new Date(POST.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })} · By BuzzSkito</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12 prose-brand">
        <p className="text-lg text-gray-600 leading-relaxed not-prose border-l-4 border-brand-400 pl-5 py-2 mb-8">
          The most common timing mistake GTA homeowners make is waiting until mosquitoes are already ruining evenings before calling a pest control company. By then you&rsquo;re reacting, not preventing. This guide explains exactly when to start — and why the first week of May is the right answer for most Ontario properties. See our <Link href="/mosquito-control" className="text-brand-700 underline">mosquito control service page</Link> to book.
        </p>

        <h2>The Short Answer: First Week of May</h2>
        <p>For most GTA homeowners — Mississauga, Brampton, Oakville, Burlington, Toronto, Hamilton, Vaughan, Richmond Hill, Markham, and surrounding cities — the first week of May is the right time for your first professional mosquito treatment. This timing catches the first generation of adult mosquitoes before they&rsquo;ve had a chance to breed and reproduce, giving barrier spray the best possible effect across the season.</p>
        <p>Properties adjacent to major waterways — Credit River, Humber River, Don River, Sixteen Mile Creek, Highland Creek — should lean toward the earlier end: late April if we get a warm spring, or the very first days of May in a normal year.</p>

        <h2>Why Timing Your First Treatment Matters More Than Any Other</h2>
        <p>Mosquito populations grow exponentially. A female mosquito can lay 100–300 eggs per batch. Larvae mature in 7–10 days in warm water. By the time a single adult female has completed two breeding cycles, she&rsquo;s potentially been part of generating several thousand new mosquitoes.</p>
        <p>Barrier spray kills adult mosquitoes that contact treated vegetation, eliminating them before they reproduce. Apply it early — before populations peak — and you interrupt breeding cycles at a critical low-density moment. Wait until June, and you&rsquo;re treating a fully established population that is already breeding rapidly. You can still achieve good results, but you will always be playing catch-up.</p>

        <h2>Ontario Mosquito Season: Month-by-Month Reality</h2>
        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-brand-800 text-white">
                <th className="px-4 py-2 text-left">Period</th>
                <th className="px-4 py-2 text-left">Activity Level</th>
                <th className="px-4 py-2 text-left">What&rsquo;s Happening</th>
              </tr>
            </thead>
            <tbody>
              {MONTHS.map(({ month, activity, note }) => (
                <tr key={month} className="border-b border-gray-200 even:bg-gray-50">
                  <td className="px-4 py-2 font-bold text-brand-700">{month}</td>
                  <td className="px-4 py-2">{activity}</td>
                  <td className="px-4 py-2 text-gray-600">{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>The 10°C Rule: What Triggers Mosquito Season</h2>
        <p>Mosquitoes become active when temperatures consistently exceed 10°C. Below this threshold, adult mosquitoes can&rsquo;t fly effectively and larvae develop very slowly. Above it, development accelerates rapidly — a 5°C increase in water temperature can cut larval development time nearly in half.</p>
        <p>In the GTA, average daily temperatures typically cross 10°C in the last week of April. That&rsquo;s when the season begins. The first week of May treatment lines up with the end of that initial emergence window — catching the first-generation adults and treating before peak breeding activity begins in mid-May.</p>

        <h2>Does It Matter What Neighbourhood I&rsquo;m In?</h2>
        <p>Yes — timing can shift by 1–2 weeks depending on your location within the GTA:</p>
        <ul>
          <li><strong>Near major waterways</strong> (Credit River in Mississauga and Brampton, Humber River in Vaughan and Etobicoke, Don Valley in North York and Toronto): Start late April / very early May. Waterway areas warm earlier and sustain breeding earlier in the season.</li>
          <li><strong>Standard suburban lots</strong> (Oakville, Burlington, Brampton new developments, Richmond Hill, Markham): First week of May is ideal.</li>
          <li><strong>Rural or large-lot properties</strong> (Caledon, Halton Hills, King City): These properties often see later spring soil temperatures — first or second week of May works well.</li>
          <li><strong>Hamilton:</strong> The escarpment microclimate means Hamilton can see early activity near Cootes Paradise and the waterfront — first week of May or late April for those areas.</li>
        </ul>

        <h2>How to Book Before You Forget: Locking In Your Program</h2>
        <p>The peak booking window for GTA mosquito control is April. If you call in late May or June you&rsquo;re competing with every other homeowner who waited until mosquitoes were already a problem. The two practical ways to avoid this:</p>
        <ol>
          <li><strong>Book in March or early April.</strong> You get your preferred scheduling, the first-May timing, and you&rsquo;re set for the season before the rush.</li>
          <li><strong>Book your full program at once.</strong> When you schedule your first treatment, lock in all 4–5 visits at the right intervals. This ensures you get consistent coverage without gaps and without having to call back each month.</li>
        </ol>

        <h2>Related Guides and Services</h2>
        <ul>
          <li><Link href="/mosquito-control" className="text-brand-700 hover:underline">BuzzSkito Mosquito Control Services</Link></li>
          <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
          <li><Link href="/blog/mosquito-season-gta-when-does-it-start" className="text-brand-700 hover:underline">When Does Mosquito Season Start in the GTA?</Link></li>
          <li><Link href="/blog/how-long-does-mosquito-spray-last" className="text-brand-700 hover:underline">How Long Does Mosquito Spray Last?</Link></li>
          <li><Link href="/blog/mosquito-control-near-water-ravines-gta" className="text-brand-700 hover:underline">Mosquito Control Near Water, Ravines &amp; Ponds</Link></li>
        </ul>

        <h2>Frequently Asked Questions</h2>
        {FAQS.map((faq) => (
          <details key={faq.question} className="not-prose bg-brand-50 border border-brand-100 rounded-xl mb-3 px-5 py-4 open:pb-5">
            <summary className="font-semibold text-brand-900 cursor-pointer">{faq.question}</summary>
            <p className="mt-3 text-gray-700 leading-relaxed">{faq.answer}</p>
          </details>
        ))}
      </article>

      <CTASection
        heading="Book Your First May Treatment Now"
        subtext="Don't wait until mosquitoes are already ruining your evenings. Get a free quote and lock in your May timing today."
      />
    </>
  )
}
