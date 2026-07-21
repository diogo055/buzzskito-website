import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import TopPick from '@/components/TopPick'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'

const SLUG = 'smells-mosquitoes-hate'
const DATE = '2026-07-12'
const UPDATED = '2026-07-12'
const TITLE = 'Smells Mosquitoes Hate: 6 Scents That Actually Repel (Ontario)'

const FAQS = [
  {
    question: 'What smell do mosquitoes hate the most?',
    answer: 'Mosquitoes are most reliably deterred by strong, volatile plant oils — citronella, lemongrass, peppermint, and oil of lemon eucalyptus (OLE). Of these, only OLE is registered by Health Canada as a genuine skin repellent with proven protection. The others produce a real but short-lived deterrent effect (roughly 20 minutes to two hours) and work best as diffused patio scents, not as bite-proof protection.',
  },
  {
    question: 'Do smells actually keep mosquitoes away?',
    answer: 'Partly. Aromatic oils like citronella and lemongrass mask the carbon dioxide, lactic acid, and body-heat cues mosquitoes use to find you, so they can reduce landings in a small, still area. But the effect fades fast as the oil evaporates and disappears in any breeze. Scents lower mosquito pressure; they do not stop a determined Aedes or Culex mosquito the way a registered DEET or picaridin repellent or a professional barrier spray does.',
  },
  {
    question: 'Does citronella really repel mosquitoes?',
    answer: 'Citronella provides modest, short-term protection — studies show roughly 20 to 50 minutes before it needs reapplying, less in wind. A citronella candle only protects the small cone of scented air right around it, so several close-together candles work better than one. It is a pleasant patio deterrent, not a substitute for a registered skin repellent when mosquito pressure is high.',
  },
  {
    question: 'Is oil of lemon eucalyptus the same as regular eucalyptus oil?',
    answer: 'No. Oil of lemon eucalyptus (OLE), and its refined active PMD, is the only plant-based repellent Health Canada registers for meaningful protection — around 2 to 5 hours per application at a 30% concentration. Ordinary eucalyptus essential oil from a health-food shop is not the same product, is not registered as a repellent, and gives far weaker, shorter results. Health Canada advises against using OLE or PMD on children under three.',
  },
  {
    question: 'What scents attract mosquitoes instead of repelling them?',
    answer: 'Mosquitoes are drawn to carbon dioxide, sweat (lactic acid and ammonia), body heat, floral perfumes, scented lotions, and dark clothing. Fruity or floral fragrances can make you more attractive to them. If you want fewer bites, skip perfume and sweet body sprays on summer evenings and wear light-coloured, loose clothing.',
  },
  {
    question: 'Do peppermint or lavender keep mosquitoes away?',
    answer: 'Both have a mild, brief masking effect. Peppermint oil can deter mosquitoes for a short window when freshly applied or diffused, but it evaporates quickly. Lavender is the weakest of the common "repellent" scents — pleasant, but it offers only marginal, short-lived deterrence. Neither is a reliable stand-alone defence against biting mosquitoes.',
  },
  {
    question: 'Does garlic repel mosquitoes if you eat it?',
    answer: 'No. Despite the folklore, controlled studies have found no measurable reduction in mosquito bites from eating garlic. Rubbing raw garlic on skin can cause irritation and still does not provide reliable protection. Save it for cooking and rely on a registered repellent or barrier spray instead.',
  },
  {
    question: 'What actually works better than smells for a mosquito-free yard?',
    answer: 'For dependable protection, use a Health Canada-registered repellent (DEET, picaridin/icaridin, or OLE) on skin, run a Thermacell-style device to hold a repellent zone on the patio, eliminate standing water where mosquitoes breed, and treat the yard with a professional barrier spray that coats vegetation and kills mosquitoes on contact for weeks. Scented candles and oils are a nice complement, not the main line of defence.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: 'What smells do mosquitoes hate? Citronella, lemongrass, peppermint, lavender, oil of lemon eucalyptus and garlic — how well each actually repels mosquitoes, how long it lasts, and why scents are weaker than sprays. Ontario 2026 guide.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

export default function SmellsMosquitoesHatePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'The scents mosquitoes dislike, how well each one actually repels, and how long the effect lasts.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Smells Mosquitoes Hate', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Smells Mosquitoes Hate</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">The scents that genuinely bother mosquitoes, how well each one works, how long it lasts — and the honest reason smells alone will not keep an Ontario backyard bite-free.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      {/* Quick Answer — AI-extraction block */}
      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">Mosquitoes dislike citronella, lemongrass, peppermint, lavender, oil of lemon eucalyptus (OLE), and to a small degree garlic. These plant oils mask the CO2 and body-scent cues mosquitoes track, but only OLE is Health Canada-registered for real protection &mdash; treat scents as a mild patio deterrent, not bite-proof protection.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Citronella provides only about 20&ndash;50 minutes of protection before it needs reapplying.</li>
              <li>Oil of lemon eucalyptus (OLE/PMD) is the strongest scent, giving about 2&ndash;5 hours at a 30% concentration.</li>
              <li>Health Canada advises against using OLE or PMD on children under 3.</li>
              <li>Lavender is the weakest common repellent scent, and eaten garlic has no proven effect.</li>
              <li>A citronella candle only protects a 1&ndash;2 metre cone of still air around it.</li>
              <li>Professional barrier spray treats resting vegetation and cuts the yard population for weeks, from $99.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control · 150+ five-star Google reviews</p>
          </div>
        </div>
      </section>

      {/* Efficacy table */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Scents Mosquitoes Hate: How Well Each One Actually Works</h2>
          <div className="rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-3 py-2 text-left">Scent</th>
                  <th className="px-3 py-2 text-left">How well it repels</th>
                  <th className="px-3 py-2 text-left">How long it lasts</th>
                  <th className="px-3 py-2 text-left">Best use</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Citronella', 'Modest', '~20–50 min, less in wind', 'Cluster of patio candles'],
                  ['Lemongrass', 'Modest (citronella cousin)', '~30 min – 1 hr', 'Diffused near seating'],
                  ['Peppermint', 'Mild, brief', '~20–30 min freshly applied', 'Diffuser or crushed leaves'],
                  ['Lavender', 'Weak', 'Short-lived', 'Pleasant scent, marginal effect'],
                  ['Oil of lemon eucalyptus (OLE / PMD)', 'Strong — Health Canada registered', '~2–5 hrs at 30%', 'On-skin repellent (adults, 3+)'],
                  ['Garlic (eaten or on skin)', 'No proven effect', 'Not applicable', 'Cooking only — skip as repellent'],
                ].map(([scent, power, dur, use]) => (
                  <tr key={scent} className="border-t border-gray-100 align-top">
                    <td className="px-3 py-2 font-semibold text-brand-800">{scent}</td>
                    <td className="px-3 py-2 text-gray-700">{power}</td>
                    <td className="px-3 py-2 text-gray-700">{dur}</td>
                    <td className="px-3 py-2 text-gray-700">{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">Only oil of lemon eucalyptus (OLE/PMD) is registered as a personal repellent by <a href="https://www.canada.ca/en/health-canada/services/consumer-product-safety/pesticides-pest-management.html" target="_blank" rel="noopener" className="underline hover:text-brand-700">Health Canada&rsquo;s Pest Management Regulatory Agency</a>. Duration figures reflect typical published repellent studies and evaporate faster in wind or heat.</p>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />
          <AffiliateDisclosure />

          <p className="not-prose text-sm text-gray-600 mb-1">Want to try the scent route? A concentrated citronella oil and a Thermacell zone device are the two most effective picks:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink search="citronella essential oil">Check citronella oil on Amazon.ca →</BuyLink>
            <BuyLink search="thermacell mosquito repeller">Check Thermacell price on Amazon.ca →</BuyLink>
          </div>

          <TopPick
            label="Strongest Scent-Based Pick"
            name="Oil of Lemon Eucalyptus (OLE / PMD) Repellent"
            blurb="The only scent-based option Health Canada registers as a genuine skin repellent. At a 30% concentration it holds roughly 2–5 hours per application — comparable to a lower-strength DEET — far beyond the minutes you get from candles and diffused oils."
            search="oil of lemon eucalyptus repellent"
            score={8.3}
            pros={['Health Canada-registered protection', 'Hours per application, not minutes', 'Plant-based active (PMD)']}
            cons={['Not for children under 3', 'Reapply after 2–5 hours']}
          />

          <h2>Why Certain Smells Bother Mosquitoes</h2>
          <p>A female mosquito finds you by following a plume of cues: the carbon dioxide you exhale, the lactic acid and ammonia in your sweat, your body heat, and even the specific bacteria on your skin. Strong aromatic plant oils work by <strong>masking</strong> those signals. When the air around you is thick with citronella or lemongrass, the mosquito&rsquo;s sensors have a harder time locking onto the human-scent trail, so fewer of them land.</p>
          <p>That is the honest mechanism — and it explains the honest limitation. Masking only works while the scent is strong and the air is still. The moment the oil evaporates or a breeze scatters the plume, your CO₂ and sweat cues come right back through, and the mosquitoes follow them. This is why a citronella candle protects only the small cone of scented air immediately around it, and why the numbers in the table above are measured in minutes, not hours.</p>

          <h2>The Six Scents, Ranked by How Much They Actually Help</h2>
          <p><strong>Oil of lemon eucalyptus (OLE)</strong> is the clear standout and the only one that competes with conventional repellents. Its refined active, PMD, is registered by Health Canada and delivers roughly 2–5 hours of protection at a 30% concentration — comparable to a lower-strength DEET product. Note it is a true skin repellent, not just a scent, and Health Canada advises against use on children under three.</p>
          <p><strong>Citronella and lemongrass</strong> are close botanical cousins and behave alike: a real but short deterrent effect, best delivered as diffused patio scent. Several candles spaced closely together beat a single candle, because you are trying to flood a whole seating area with scent rather than one spot.</p>
          <p><strong>Peppermint</strong> gives a brisk, brief masking effect when freshly crushed or diffused, but it evaporates quickly. <strong>Lavender</strong> is the weakest of the group — lovely to have on the patio, but you should not count on it to keep mosquitoes off. And <strong>garlic</strong>, despite generations of folklore, has repeatedly failed in controlled testing: eating it does nothing measurable, and rubbing it on skin mostly just irritates you.</p>

          <h2>Scents Mosquitoes LOVE — What to Avoid</h2>
          <p>It is just as useful to know what draws mosquitoes in. They are attracted to carbon dioxide, the lactic acid and ammonia in sweat, body heat, and — importantly — <strong>floral and fruity fragrances</strong>. A sweet perfume, a scented lotion, or a fragranced body spray can make you noticeably more appealing to a hungry mosquito. On summer evenings in the GTA, skip the perfume, choose unscented sunscreen, and wear light-coloured, loose clothing, since mosquitoes also home in on dark fabric and heat.</p>

          <aside aria-label="Professional mosquito control" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">Scents wear off in minutes — a barrier spray lasts weeks</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">Candles and oils only cover the air right around them. BuzzSkito&rsquo;s professional barrier spray coats the shrubs, fence lines, and shaded resting spots where mosquitoes hide and kills them on contact for weeks. Whole-yard protection from $99, backed by 150+ five-star reviews across 19 GTA cities.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/free-yard-assessment" className="btn-primary-sm">Get a Free Quote →</Link>
              <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
            </div>
          </aside>

          <h2>The Honest Truth: Scents Are the Weakest Layer</h2>
          <p>If you take one thing from this guide, make it this: <strong>smells reduce mosquito pressure, but they do not stop bites the way a registered repellent or a treated yard does.</strong> The Aedes and Culex mosquitoes common in Ontario are persistent, and a determined female will push through a fading scent plume to reach the CO₂ and warmth of a host. Scents are a pleasant, low-effort complement — never the main defence when mosquito pressure is high.</p>
          <p>Here is how the layers stack up, weakest to strongest:</p>
          <ol>
            <li><strong>Scented candles and oils</strong> (citronella, lemongrass, peppermint) — mild, minutes-long, small area.</li>
            <li><strong>Repellent plants</strong> around the patio — a light background effect (more on which ones in our <Link href="/blog/mosquito-repellent-plants-ontario">mosquito-repellent plants guide</Link>).</li>
            <li><strong>A Thermacell-style device</strong> — creates a genuine repellent zone about 4.5 m across when there is little wind.</li>
            <li><strong>Registered skin repellent</strong> — DEET, picaridin/icaridin, or OLE for hours of on-body protection.</li>
            <li><strong>Standing-water control</strong> — dump anything holding water so mosquitoes cannot breed in the first place.</li>
            <li><strong>Professional barrier spray</strong> — treats the vegetation where mosquitoes rest and cuts the yard population for weeks at a time.</li>
          </ol>
          <p>For the full rundown of DIY methods that genuinely help — and which ones are myths — see our <Link href="/blog/natural-mosquito-repellent-ontario">natural mosquito repellent guide for Ontario</Link>. And if you want the strongest layer without the daily hassle of candles and reapplication, that is exactly what <Link href="/mosquito-control">professional barrier spray</Link> is for.</p>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/natural-mosquito-repellent-ontario">Natural Mosquito Repellent — What Works in Ontario</Link></li>
            <li><Link href="/blog/mosquito-repellent-plants-ontario">Mosquito-Repellent Plants for Ontario Yards</Link></li>
            <li><Link href="/mosquito-control">BuzzSkito Professional Mosquito Control Service</Link></li>
            <li><Link href="/free-yard-assessment">Get a Free Yard Assessment</Link></li>
          </ul>
        </div>
      </article>

      <CTASection heading="Scents Fade Fast — Real Protection Lasts Weeks" subtext="Skip the endless candles. One professional barrier spray treats your whole yard and keeps mosquitoes down for weeks. From $99." variant="dark" />
    </>
  )
}
