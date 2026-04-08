import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { NEW_BLOGS, MOSQUITO_BLOGS } from '@/lib/constants'

const POST = NEW_BLOGS[5]

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Control for New-Build Homes in Milton & Georgetown | BuzzSkito',
  description:
    "New construction near Sixteen Mile Creek and the Credit River comes with unexpected mosquito challenges. Here's why Milton and Georgetown new-build homeowners need professional treatment.",
  canonical: `/blog/${POST.slug}`,
  type: 'article',
  publishedTime: POST.date,
})

const FAQS = [
  {
    question: "Why do new-build homes in Milton get so many mosquitoes when everything is brand new?",
    answer:
      "New construction is actually ideal mosquito territory. Freshly graded land is full of low spots that collect rainwater. Construction debris, utility trenches, and compacted soil create depressions that hold water for a week or more after rain. Retention and detention ponds built into new subdivisions for stormwater management provide permanent shallow-water breeding habitat. A new home near Sixteen Mile Creek means you're getting mosquitoes from both the creek valley and the brand-new stormwater pond a few streets over.",
  },
  {
    question: "Georgetown is an older town — why is it still a mosquito problem?",
    answer:
      "Georgetown sits in the Credit River valley. The river itself and its tributary streams — Silver Creek, Black Creek, Hungry Hollow Creek — provide extensive valley habitat that has been generating mosquitoes in summer for as long as people have lived here. The older tree canopy in Old Georgetown neighbourhoods provides excellent daytime harbouring cover. It's a different mosquito problem than a Milton new-build, but the result at dusk is the same.",
  },
  {
    question: 'Which Milton neighbourhoods have the worst mosquito pressure?',
    answer:
      "Hawthorne Village and Ford neighbourhoods, which are closest to Sixteen Mile Creek, see the most intense activity. The Bronte Meadows area near Sixteen Mile Creek Conservation Area is also heavily affected. Any Milton neighbourhood with a stormwater pond nearby — Coates, Dempsey, Harrison, Scott — will have elevated pressure from those features throughout the season.",
  },
  {
    question: 'How many treatments do I need in my first year in a new Milton home?',
    answer:
      "In the first year, when the landscape is least established and water-holding low spots haven't yet been graded out, we typically recommend 4–5 treatments from May through September. Once the landscape matures and drainage improves, some properties drop to 3–4 treatments. Properties near Sixteen Mile Creek or a retention pond usually maintain a 5-treatment program indefinitely.",
  },
]

export default function MosquitoControlMiltonGeorgetownPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: POST.title, description: POST.excerpt, slug: POST.slug, datePublished: POST.date })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Mosquito Control Milton & Georgetown', url: `/blog/${POST.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${POST.slug}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Mosquito Control Milton &amp; Georgetown</span>
          </nav>
          <span className="bg-brand-800 text-brand-200 text-xs px-3 py-1 rounded-full mb-4 inline-block">Mosquito Control · Halton Region</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">{POST.title}</h1>
          <p className="text-brand-300 text-sm">Published {new Date(POST.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })} · By BuzzSkito</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12 prose-brand">
        <p className="text-lg text-gray-600 leading-relaxed not-prose border-l-4 border-brand-400 pl-5 py-2 mb-8">
          Milton has been one of Ontario&rsquo;s fastest-growing municipalities for over a decade. That growth — new subdivisions pushing west and north toward the Niagara Escarpment and Sixteen Mile Creek — brings a mosquito situation that surprises many new homeowners. Georgetown, just north across Halton Hills, has its own version of the problem courtesy of the Credit River valley. This guide covers both. See our <Link href="/milton-mosquito-control" className="text-brand-700 underline">Milton mosquito control</Link> and <Link href="/georgetown-mosquito-control" className="text-brand-700 underline">Georgetown mosquito control</Link> service pages.
        </p>

        <h2>Milton&rsquo;s Mosquito Problem: New-Build Meets Conservation Land</h2>
        <p>Milton&rsquo;s rapid residential expansion has pushed new subdivisions to the edge of Halton Region&rsquo;s conservation lands, the Niagara Escarpment, and the Sixteen Mile Creek watershed. This creates a specific mosquito dynamic: brand-new homes with not-yet-established landscapes, immediately adjacent to mature conservation areas with established mosquito populations.</p>
        <p>The core drivers for Milton mosquito pressure are:</p>
        <ul>
          <li><strong>Sixteen Mile Creek:</strong> The creek runs south through Milton to Lake Ontario. Its valley provides year-round larval habitat, and mosquitoes from the valley disperse broadly into surrounding residential areas every evening. The <strong>Sixteen Mile Creek Conservation Area</strong> near Bronte Meadows is a particularly active source point.</li>
          <li><strong>Stormwater management ponds:</strong> Every new Milton subdivision is engineered with detention or retention ponds. These shallow, warm-water features are ideal mosquito breeding habitat. A single pond can produce thousands of adults per week during peak season. Milton has dozens of these ponds now, distributed throughout the new subdivisions.</li>
          <li><strong>Freshly graded land:</strong> New construction sites hold water in compacted low spots for days after rain. New homeowners often don&rsquo;t realize how much water their property is collecting until they see the mosquitoes it&rsquo;s producing.</li>
          <li><strong>Conservation areas and Escarpment edges:</strong> Rattlesnake Point, Crawford Lake, and Mount Nemo Conservation Areas border Milton&rsquo;s northwest edge. The escarpment woodland provides harbouring cover and a steady population source for adjacent properties.</li>
        </ul>

        <h2>Georgetown: Credit River Valley Mosquitoes in an Established Town</h2>
        <p>Georgetown&rsquo;s mosquito situation is structurally different from Milton&rsquo;s but equally persistent. The town sits in the Credit River valley, with the river itself running through the historic core. Silver Creek (a Credit River tributary) enters from the northwest near Glen Williams. The Hungry Hollow Conservation Area sits directly adjacent to residential neighbourhoods on the west side of town.</p>
        <p>These valley features have supported mosquito populations in Georgetown since the town was founded — the landscape hasn&rsquo;t changed. What changes year to year is rainfall patterns, spring water levels, and how early the season warms. High-pressure areas:</p>
        <ul>
          <li><strong>Old Georgetown near the Credit River:</strong> Homes on Main Street South, Norval Street, and Mill Street back close to the Credit River valley. Evening activity here starts in mid-May and runs through September.</li>
          <li><strong>Glen Williams:</strong> The Credit River runs through the village and the wooded hills above provide harbouring cover. Some of the most beautiful gardens in the area — and some of the most active mosquitoes.</li>
          <li><strong>Hungry Hollow:</strong> The conservation area on Georgetown&rsquo;s west side borders residential streets. Properties on Park Avenue and surrounding streets face direct valley-edge exposure.</li>
        </ul>

        <h2>Should New Milton Homeowners Be Concerned About Ticks Too?</h2>
        <p>Milton is adjacent to the Niagara Escarpment, which is confirmed blacklegged tick habitat. Rattlesnake Point, Crawford Lake, and the Bruce Trail corridor all have documented tick activity. Properties in northwest Milton near the escarpment edge should consider combined mosquito and tick treatment — see our <Link href="/milton-tick-spray" className="text-brand-700 underline">Milton tick spray service</Link> for details.</p>
        <p>For central and east Milton away from the escarpment edge, mosquito-only treatment is typically sufficient.</p>

        <h2>The Right Mosquito Treatment Program for Milton and Georgetown</h2>
        <p>Both Milton and Georgetown benefit most from a program that starts early — first week of May — before creek-side and pond-side populations begin building. A 4–5 treatment program running through Labour Day provides consistent protection for the whole outdoor season.</p>
        <p>The key for new-build homeowners is not to wait until mosquitoes are already noticeable (usually mid-June) before calling. By then you&rsquo;ve already lost May — the easiest month to get ahead of the problem.</p>

        <h2>Related Guides and Services</h2>
        <ul>
          <li><Link href="/halton-hills-mosquito-control" className="text-brand-700 hover:underline">Halton Hills Mosquito Control</Link></li>
          <li><Link href="/oakville-mosquito-control" className="text-brand-700 hover:underline">Oakville Mosquito Control</Link></li>
          <li><Link href="/mosquito-control" className="text-brand-700 hover:underline">All GTA Mosquito Control Services</Link></li>
          <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
          <li><Link href="/blog/when-to-schedule-first-mosquito-treatment-ontario" className="text-brand-700 hover:underline">When to Book Your First Treatment of the Season</Link></li>
          <li><Link href="/blog/mosquito-control-near-water-ravines-gta" className="text-brand-700 hover:underline">Mosquito Control Near Water, Ponds &amp; Ravines</Link></li>
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
        heading="Ready to Reclaim Your Milton or Georgetown Backyard?"
        subtext="Free mosquito control quote for new-build and established properties. No contracts, free re-spray guarantee."
      />
    </>
  )
}
