import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { MOSQUITO_BLOGS, CITIES } from '@/lib/constants'

const POST = MOSQUITO_BLOGS.pillar

export const metadata: Metadata = buildMetadata({
  title: 'Backyard Mosquito Control GTA 2026 — The Complete Guide (What Works + What\'s a Scam)',
  description: 'Complete GTA mosquito guide: biology, why they\'re worse near water, prevention strategies, barrier spray explained, seasonal Ontario calendar.',
  canonical: `/blog/${POST.slug}`,
  type: 'article',
  publishedTime: POST.date,
})

const FAQS = [
  { question: 'What is the most effective mosquito control method for backyards?', answer: 'Professional barrier spray applied to vegetation and shrubs is the most effective method for residential yards. It eliminates mosquitoes on contact and provides residual protection for up to 30 days — far more effective than consumer repellents, citronella, or DIY sprays.' },
  { question: 'How do I find where mosquitoes are breeding in my yard?', answer: 'Check any container that holds standing water: birdbaths, clogged gutters, tarps, plant saucers, children\'s toys, and low-lying areas that collect rainwater. Even a bottle cap with water can produce hundreds of mosquitoes. Eliminate or change water sources weekly.' },
  { question: 'Does barrier spray hurt pollinators like bees?', answer: 'Professional barrier spray is applied to leaf undersides and shrubs where mosquitoes rest — not to flowers. Once dried (30 minutes), the product does not harm foraging pollinators. We avoid spraying open flowers and apply during morning or evening when pollinators are less active.' },
  { question: 'How many mosquito treatments does a GTA property need per season?', answer: 'For continuous protection throughout GTA mosquito season (May–September), 5 treatments spaced 28 days apart are recommended. Properties near water features, ravines, or conservation areas may benefit from tighter spacing during peak season.' },
]

export default function MosquitoPillarPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: POST.title, description: POST.excerpt, slug: POST.slug, datePublished: POST.date })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Ultimate Mosquito Control Guide', url: `/blog/${POST.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${POST.slug}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1 flex-wrap">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Mosquito Control Guide</span>
          </nav>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-brand-700 text-brand-100 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Pillar Guide</span>
            <span className="bg-brand-800 text-brand-200 text-xs px-3 py-1 rounded-full">Mosquito Control</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 leading-tight">{POST.title}</h1>
          <p className="text-brand-200 text-sm">Published {new Date(POST.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })} · By BuzzSkito</p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-12 prose-brand">

        <p className="text-lg text-gray-600 leading-relaxed mb-8 not-prose border-l-4 border-brand-400 pl-5 py-2">
          This comprehensive guide covers everything GTA homeowners need to know about eliminating mosquitoes from their backyards: the biology behind why treatments work, local risk factors, a complete seasonal schedule, and when DIY falls short. For specific city information, see our{' '}
          <Link href="/mosquito-control" className="text-brand-700 underline">Mosquito Control hub page</Link>.
        </p>

        <h2>Why GTA Backyards Have a Mosquito Problem</h2>
        <p>The Greater Toronto Area's climate — warm, humid summers with abundant rainfall — combined with its extensive waterway system makes it one of Canada's most challenging regions for residential mosquito control. The Credit River, Humber River, Don River, and dozens of smaller watercourses create natural mosquito breeding corridors that flow directly into suburban and urban neighbourhoods.</p>
        <p>What many homeowners don't realize is that mosquitoes don't need a pond or stream to breed. A tablespoon of standing water in a clogged gutter, a forgotten plant saucer, or a tarp with puddles can produce hundreds of mosquitoes within a week. The combination of natural water sources and the many unintentional standing water sites on a typical suburban lot means GTA properties face continuous mosquito pressure from late April through September.</p>

        <h2>The Mosquito Lifecycle: Why This Matters for Control</h2>
        <p>Understanding the mosquito lifecycle is essential for effective control. Mosquitoes go through four stages: egg, larva, pupa, and adult. The first three stages all occur in standing water. Only the adult stage is the biting, flying mosquito you encounter in your backyard.</p>
        <p>The critical implication: <strong>effective mosquito control must address both the aquatic breeding stage and the adult stage</strong>. Elimination of standing water reduces breeding, while barrier spray targets adult mosquitoes hiding in vegetation. Neither alone is as effective as both together.</p>
        <p>Adult female mosquitoes (the ones that bite) spend most of the day resting in shaded, humid vegetation — under leaves, in shrubs, and in ground cover. This resting behaviour is precisely what makes barrier spray so effective: we apply residual insecticide directly to those resting surfaces.</p>

        <h2>GTA Mosquito Season: When to Start Treatment</h2>
        <p>Mosquitoes become active when temperatures consistently exceed 10°C (50°F). In the GTA, this typically means:</p>
        <ul>
          <li><strong>Late April:</strong> First mosquitoes emerge from overwintering eggs in standing water</li>
          <li><strong>May:</strong> Populations grow rapidly with warming temperatures — ideal time for first treatment</li>
          <li><strong>June–July:</strong> Peak mosquito season in the GTA; highest populations and biting pressure</li>
          <li><strong>August:</strong> Activity remains high, particularly after rain events</li>
          <li><strong>September:</strong> Populations decline but mosquitoes remain active through most of the month</li>
        </ul>
        <p>See our detailed guide: <Link href="/blog/mosquito-season-gta-when-does-it-start" className="text-brand-700 underline hover:text-brand-500">When Does Mosquito Season Start in the GTA?</Link></p>

        <h2>How Professional Barrier Spray Works</h2>
        <p>Professional barrier spray — the method BuzzSkito uses — works by applying a fine residual mist of insecticide to all vegetation on your property: shrubs, hedges, the underside of leaves, ground cover, and tree canopy up to about 10 feet high. The formula:</p>
        <ul>
          <li><strong>Kills on contact:</strong> Adult mosquitoes that land on treated surfaces die quickly</li>
          <li><strong>Residual protection:</strong> The product remains active on surfaces for up to 30 days, continuing to kill new mosquitoes that enter the treatment zone</li>
          <li><strong>Rain resistant:</strong> Bonds to surfaces as it dries; a brief rain shower won't wash it away</li>
          <li><strong>Fast re-entry:</strong> The treated yard is safe for people and pets 30 minutes after application</li>
        </ul>
        <p>Compare this to consumer alternatives: <Link href="/blog/mosquito-vs-diy-vs-professional-control" className="text-brand-700 underline hover:text-brand-500">DIY vs. Professional Mosquito Control</Link></p>

        <h2>How Long Does Mosquito Spray Last?</h2>
        <p>Each professional barrier spray treatment provides up to 30 days of protection under normal conditions. Several factors affect longevity:</p>
        <ul>
          <li>Heavy rainfall within 1 hour of application (we reapply at no cost)</li>
          <li>Extreme heat or direct sun on treated surfaces can accelerate breakdown</li>
          <li>Dense vegetation may require more thorough application for full coverage</li>
        </ul>
        <p>For detailed information: <Link href="/blog/how-long-does-mosquito-spray-last" className="text-brand-700 underline hover:text-brand-500">How Long Does Mosquito Spray Last?</Link></p>

        <h2>Prevention: Eliminating Breeding Sites</h2>
        <p>Professional barrier spray is most effective when combined with good prevention practices. The goal is to remove the standing water sources where mosquitoes breed. Key steps:</p>
        <ul>
          <li>Change birdbath water weekly</li>
          <li>Clean gutters to prevent standing water accumulation</li>
          <li>Remove or drain tarps, buckets, and containers after rain</li>
          <li>Empty plant saucers or drill drainage holes</li>
          <li>Keep swimming pools properly chlorinated and filtered</li>
          <li>Fill low-lying areas in your lawn that collect water</li>
        </ul>
        <p>Full checklist: <Link href="/blog/how-to-prevent-mosquitoes-in-your-backyard" className="text-brand-700 underline hover:text-brand-500">12 Ways to Prevent Mosquitoes in Your Backyard</Link></p>

        <h2>Health Risks: West Nile Virus in the GTA</h2>
        <p>Mosquitoes in Ontario can carry West Nile Virus (WNV), a potentially serious illness transmitted through mosquito bites. Ontario public health agencies monitor WNV-positive mosquito pools throughout the GTA each season. While most people infected with WNV experience no symptoms or a mild illness, a small percentage develop severe neurological disease.</p>
        <p>Reducing mosquito populations in and around your property through professional barrier spray significantly reduces your family's WNV exposure risk. Learn more: <Link href="/blog/west-nile-virus-mosquito-risk-ontario" className="text-brand-700 underline hover:text-brand-500">West Nile Virus Risk in Ontario</Link></p>

        <h2>Recommended Seasonal Treatment Schedule for GTA Homeowners</h2>
        <div className="not-prose grid grid-cols-5 gap-2 sm:gap-3 my-8">
          {['May','June','July','August','September'].map((m, i) => (
            <div key={m} className="bg-brand-50 border border-brand-200 rounded-xl p-3 text-center">
              <div className="text-brand-700 font-extrabold text-xs uppercase tracking-wide mb-1">Tx {i+1}</div>
              <div className="font-bold text-brand-900 text-sm">{m}</div>
            </div>
          ))}
        </div>
        <p>Five treatments, spaced approximately 28 days apart, provide continuous protection from the start of season through the end of active mosquito activity in the GTA.</p>

        <h2>Mosquito Control by GTA City</h2>
        <div className="not-prose grid grid-cols-2 sm:grid-cols-3 gap-3 my-6">
          {CITIES.map((c) => (
            <Link key={c.name} href={c.mosquitoSlug} className="block bg-brand-50 border border-brand-200 rounded-xl p-4 hover:bg-brand-700 hover:text-white hover:border-brand-700 transition-all group">
              <div className="font-bold text-brand-900 group-hover:text-white">{c.name}</div>
              <div className="text-xs text-gray-500 group-hover:text-brand-200 mt-0.5">Mosquito control →</div>
            </Link>
          ))}
        </div>

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

        <h2>Continue Reading: Mosquito Control Guides</h2>
        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {MOSQUITO_BLOGS.supporting.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block bg-gray-50 border border-gray-200 rounded-xl p-4 hover:border-brand-400 hover:bg-brand-50 transition-colors">
              <div className="font-bold text-brand-900 text-sm mb-1">{post.title}</div>
              <div className="text-gray-500 text-xs">{post.excerpt.slice(0, 80)}…</div>
            </Link>
          ))}
        </div>
      </article>

      <CTASection heading="Ready to Reclaim Your Backyard?" subtext="Get a free mosquito control quote for your GTA property. No contracts required." />
    </>
  )
}
