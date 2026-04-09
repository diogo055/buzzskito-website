import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { TICK_BLOGS, CITIES } from '@/lib/constants'

const POST = TICK_BLOGS.pillar

export const metadata: Metadata = buildMetadata({
  title: 'Tick Control Guide Ontario | Complete 2026 | BuzzSkito',
  description:
    'Complete tick control guide for Ontario — species ID, Lyme disease risk, yard treatment, and prevention strategies.',
  canonical: `/blog/${POST.slug}`,
  type: 'article',
  publishedTime: POST.date,
})

const FAQS = [
  { question: 'What is the most effective way to control ticks in a yard?', answer: 'Professional barrier spray targeting the high-risk zones in your yard — lawn edges, leaf litter, garden beds, fence lines, under decks, and woodpiles — is the most effective residential tick control method. Combined with habitat modification (leaf removal, mowing, wood-edge barriers), it provides comprehensive protection.' },
  { question: 'Can I get Lyme disease from ticks in my backyard in Ontario?', answer: 'Yes. Blacklegged ticks (the primary Lyme disease carrier) are established throughout Southern Ontario. Ontario public health agencies have confirmed Lyme-disease-carrying tick populations in Mississauga, Hamilton, Oakville, and across the GTA. Your backyard — particularly if it backs onto wooded or naturalized areas — is a realistic exposure site.' },
  { question: 'How do I know if I have ticks in my yard?', answer: 'The easiest method is a drag cloth test: attach white flannel to a stick and drag it slowly through lawn edges, along fences, and through garden beds. Ticks will cling to the cloth. You can also walk slowly through suspect areas wearing white socks and watch for small dark specks. Alternatively, have BuzzSkito assess your property as part of a free quote.' },
  { question: 'What time of year are ticks most dangerous in Ontario?', answer: 'The blacklegged tick has two peak activity periods in Ontario: spring nymph season (May–June), when tiny nymphs are hardest to spot and transmit Lyme disease most frequently, and fall adult season (September–October). Adult ticks can also be active on warm winter days. See our full seasonal guide.' },
]

export default function TickPillarPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: POST.title, description: POST.excerpt, slug: POST.slug, datePublished: POST.date })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Ultimate Tick Control Guide Ontario', url: `/blog/${POST.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${POST.slug}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1 flex-wrap">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Tick Control Guide</span>
          </nav>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-amber-700 text-amber-100 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Pillar Guide</span>
            <span className="bg-brand-800 text-brand-200 text-xs px-3 py-1 rounded-full">Tick Control</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 leading-tight">{POST.title}</h1>
          <p className="text-brand-300 text-sm">Published {new Date(POST.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })} · By BuzzSkito</p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-12 prose-brand">

        <p className="text-lg text-gray-600 not-prose border-l-4 border-amber-400 pl-5 py-2 mb-8">
          This is the definitive guide to tick control for Ontario homeowners: tick species, lifecycle, Lyme disease risk, where ticks hide in your yard, prevention strategies, and when to call a professional. For city-specific information, visit our <Link href="/tick-control" className="text-brand-700 underline">Tick Control hub page</Link>.
        </p>

        <h2>Tick Species in Ontario: What You're Dealing With</h2>
        <p>Three tick species are most relevant to Ontario homeowners:</p>
        <ul>
          <li><strong>Blacklegged tick (<em>Ixodes scapularis</em>) — the Lyme disease carrier:</strong> Also called the deer tick, this is the species Ontario homeowners need to be most concerned about. Blacklegged ticks are the primary vector for Lyme disease in Canada. They are active in four stages: egg, larva (6 legs, tiny), nymph (8 legs, poppy seed–sized), and adult (sesame seed–sized). All active stages — larva, nymph, adult — can bite humans.</li>
          <li><strong>American dog tick (<em>Dermacentor variabilis</em>):</strong> Larger and more commonly noticed. The American dog tick can transmit Rocky Mountain Spotted Fever (rare in Ontario) and cause tick paralysis. It does <em>not</em> transmit Lyme disease.</li>
          <li><strong>Lone star tick (<em>Amblyomma americanum</em>):</strong> An emerging species in southwestern Ontario, associated with climate warming. Can cause a unique red meat allergy (alpha-gal syndrome). Distribution is currently limited but expanding.</li>
        </ul>

        <h2>The Tick Lifecycle and Why It Matters</h2>
        <p>Understanding the blacklegged tick lifecycle is essential for timing effective treatment:</p>
        <ul>
          <li><strong>Spring (May–June):</strong> Nymphs emerge — this is the most dangerous period. Nymphs are poppy-seed sized and incredibly difficult to detect on skin. They feed for 3–5 days and are responsible for the majority of Lyme disease cases in Ontario because they're so hard to see and remove promptly.</li>
          <li><strong>Summer (July–August):</strong> Larval ticks hatch and begin feeding. Lower Lyme disease risk (larvae rarely carry the pathogen at this stage) but populations are building.</li>
          <li><strong>Fall (September–October):</strong> Adult ticks emerge. Adults are sesame-seed sized and more easily spotted. They aggressively seek large mammal hosts (deer, dogs, humans) to obtain a blood meal before winter. Risk remains high.</li>
          <li><strong>Winter:</strong> Adult blacklegged ticks can remain active on warm days (above 4°C) — unusual among Ontario ticks. Even in December and March, activity is possible.</li>
        </ul>

        <p>See our full seasonal guide: <Link href="/blog/tick-season-ontario-when-are-ticks-active" className="text-brand-700 underline hover:text-brand-500">When Are Ticks Active in Ontario?</Link></p>

        <h2>Where Ticks Hide in Your Yard</h2>
        <p>One of the most important misconceptions about ticks: they don't live in forests. They live at the edge — the transition zone between maintained lawn and any naturalized vegetation. The specific sites where ticks concentrate on a residential property:</p>
        <ul>
          <li><strong>Lawn edges bordering woods, ravines, or natural areas</strong> — the primary entry point for ticks onto your property</li>
          <li><strong>Leaf litter in garden beds</strong> — ticks overwinter in leaf litter and emerge in spring</li>
          <li><strong>Woodpiles and brush piles</strong> — dark, humid microhabitats that ticks (and mice, which carry the Lyme pathogen) use</li>
          <li><strong>Under decks and porches</strong> — shaded, humid areas where ticks persist through hot weather</li>
          <li><strong>Tall grass and dense ground cover</strong> — ticks quest (wait for hosts) at the tips of grass blades and vegetation</li>
          <li><strong>Along fence lines</strong> — especially fences adjacent to naturalized areas</li>
        </ul>

        <p>Read about tick identification: <Link href="/blog/what-ticks-look-like-ontario" className="text-brand-700 underline hover:text-brand-500">How to Identify Ticks in Ontario</Link></p>

        <h2>Lyme Disease in Ontario: The Risk Is Real</h2>
        <p>Lyme disease cases in Canada have increased significantly since the early 2000s, driven by the northward expansion of blacklegged tick populations as winters warm. Ontario reports hundreds of confirmed Lyme disease cases annually, with the actual number believed to be significantly higher due to under-reporting and delayed diagnosis.</p>
        <p>Early-stage Lyme disease (caught within days of the tick bite) is treatable with antibiotics. Disseminated or late-stage Lyme disease can cause serious, chronic health problems including joint inflammation, neurological symptoms, and cardiac effects. Early detection and prevention are critical.</p>
        <p>Full guide: <Link href="/blog/lyme-disease-tick-prevention-ontario" className="text-brand-700 underline hover:text-brand-500">Lyme Disease Prevention in Ontario</Link></p>

        <h2>How Professional Tick Spray Works</h2>
        <p>BuzzSkito's tick control service applies a residual insecticide barrier to the specific areas where ticks concentrate: lawn edges, leaf litter zones, garden borders, fence lines, and under-deck areas. The treatment:</p>
        <ul>
          <li>Kills ticks at all life stages (larva, nymph, adult) on contact</li>
          <li>Provides up to 30 days of residual protection per application</li>
          <li>Is applied by licensed technicians who know exactly where to target for maximum effectiveness</li>
          <li>Uses Health Canada–approved formulas safe for children, pets, and pollinators after 30-minute drying time</li>
        </ul>

        <p>Compare your options: <Link href="/blog/best-tick-control-yard-treatment" className="text-brand-700 underline hover:text-brand-500">Best Tick Control for Your Yard: Comparison Guide</Link></p>

        <h2>DIY Tick Prevention for Your Yard</h2>
        <p>Habitat modification reduces tick populations even before professional treatment. Key steps:</p>
        <ul>
          <li>Remove leaf litter from garden beds and lawn edges each spring</li>
          <li>Keep grass mowed short, especially at property edges</li>
          <li>Create a 1-metre gravel or wood chip barrier between lawn and any wooded areas</li>
          <li>Move woodpiles away from the house and off the ground</li>
          <li>Trim shrubs and ground cover that create humid, shaded environments</li>
          <li>Control deer access to your property — deer carry adult ticks onto your land</li>
        </ul>

        <h2>What to Do If You Find a Tick</h2>
        <p>If you find a tick attached to your skin, remove it promptly with fine-tipped tweezers. See our complete guide: <Link href="/blog/how-to-remove-tick-safely" className="text-brand-700 underline hover:text-brand-500">How to Remove a Tick Safely</Link></p>

        <h2>Tick Control by GTA City</h2>
        <div className="not-prose grid grid-cols-2 sm:grid-cols-3 gap-3 my-6">
          {CITIES.map((c) => (
            <Link key={c.name} href={c.tickSlug} className="block bg-amber-50 border border-amber-200 rounded-xl p-4 hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all group">
              <div className="font-bold text-brand-900 group-hover:text-white">{c.name}</div>
              <div className="text-xs text-gray-500 group-hover:text-amber-100 mt-0.5">Tick control →</div>
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

        <h2>Continue Reading: Tick Control Guides</h2>
        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {TICK_BLOGS.supporting.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block bg-gray-50 border border-gray-200 rounded-xl p-4 hover:border-amber-400 hover:bg-amber-50 transition-colors">
              <div className="font-bold text-brand-900 text-sm mb-1">{post.title}</div>
              <div className="text-gray-500 text-xs">{post.excerpt.slice(0, 80)}…</div>
            </Link>
          ))}
        </div>
      </article>

      <CTASection heading="Protect Your Family from Ticks This Season" subtext="Get a free tick control quote for your GTA property. No contracts required." variant="dark" />
    </>
  )
}
