import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import BlogPostCTA from '@/components/BlogPostCTA'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'

const POST = {
  title: 'Lyme Disease Cases Up in Ontario 2026: PHU-by-PHU Breakdown',
  slug: 'lyme-disease-cases-ontario-2026',
  date: '2026-05-19',
  excerpt: "Ontario reported 3,614 Lyme disease cases in 2025 — a 30-fold increase since 2010. 2026 is on track to exceed that. Here's the PHU-by-PHU breakdown, what's driving it, and the household-level protection plan.",
}

const FAQS = [
  {
    question: 'How many Lyme disease cases were reported in Ontario in 2025?',
    answer: 'Public Health Ontario reported 3,614 confirmed and probable Lyme disease cases in 2025. This is a 30-fold increase compared to 2010 (124 cases) and is consistent with the sustained northward expansion of the blacklegged tick range. 2026 surveillance data through early May suggests the year is on track to exceed 4,000 cases for the first time on record.',
  },
  {
    question: 'Which Ontario Public Health Units have the highest Lyme case counts?',
    answer: 'The five PHUs with the highest 2025 case counts were: Eastern Ontario Health Unit (367 cases — Cornwall, Hawkesbury corridor), Kingston/Frontenac/Lennox-Addington (312), Leeds-Grenville-Lanark (298), Hastings Prince Edward (245), and Peterborough (231). The GTA-area PHUs (Toronto, Peel, Halton, York, Durham) are now reporting steady growth and have all been re-classified to established or emerging risk status.',
  },
  {
    question: 'Is the GTA included in the Lyme risk zone now?',
    answer: 'Yes — every GTA Public Health Unit is now classified as either established or emerging risk for Lyme disease in 2026. Toronto Public Health confirms tick activity throughout the ravine system; Peel Public Health has documented established populations across Mississauga, Brampton, and Caledon; Halton has confirmed populations in Burlington, Oakville, and Milton; York has confirmed sites across Vaughan, Richmond Hill, and Markham. Five years ago, much of the GTA was still classified as low-risk. That has changed.',
  },
  {
    question: 'Why are Lyme cases climbing so fast?',
    answer: 'Three drivers stacking: (1) blacklegged tick range is expanding ~35-55 km north per decade due to milder winters; (2) host populations (white-footed mice for nymphs, deer for adults) are stable to expanding across Southern Ontario; (3) the percentage of collected ticks testing positive for Borrelia burgdorferi has been climbing alongside the range expansion. The result is more ticks in more places carrying more bacteria. Recognition and diagnosis have also improved — but the absolute case increase is real, not just better detection.',
  },
  {
    question: 'What can I do to reduce my household risk?',
    answer: 'Three layers: (1) Yard — professional tick barrier spray on perimeter zones in late May and mid-August reduces on-property tick populations by 80-90%. (2) Personal — DEET on skin, permethrin on outdoor clothing, light-coloured clothing, daily tick checks after any outdoor activity. (3) Medical — know the symptoms (bull\'s-eye rash, fever, fatigue, joint pain) and seek treatment within days of a confirmed bite. Early antibiotic treatment is highly effective; delayed treatment can lead to chronic Lyme symptoms.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: 'Lyme Disease Cases Up in Ontario 2026: PHU Breakdown (3,614 → ~4,000+ Projected)',
  description:
    "Ontario reported 3,614 Lyme disease cases in 2025 — 30× the 2010 number. 2026 projected to exceed 4,000. Full PHU breakdown, why cases are climbing, and the household-level protection plan.",
  canonical: `/blog/${POST.slug}`,
  type: 'article',
  publishedTime: POST.date,
})

export default function LymeCasesOntario2026Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: POST.title, description: POST.excerpt, slug: POST.slug, datePublished: POST.date })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Lyme Disease Cases Ontario 2026', url: `/blog/${POST.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${POST.slug}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1 flex-wrap">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Lyme Disease Cases Ontario 2026</span>
          </nav>
          <span className="bg-amber-500 text-white text-xs px-3 py-1 rounded-full mb-4 inline-block font-bold uppercase tracking-wider">Public Health Data · 2026</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">{POST.title}</h1>
          <p className="text-brand-300 text-sm">Published {new Date(POST.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })} · By Alex &amp; The BuzzSkito Team</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 -mt-6 sm:-mt-8 relative z-10">
        <BlogPostCTA />
      </div>

      <article className="max-w-3xl mx-auto px-4 py-12 prose-brand">
        <div className="not-prose bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
          <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
          <p className="text-gray-800 text-[15px] leading-relaxed font-medium">Ontario reported 3,614 confirmed and probable Lyme disease cases in 2025 — roughly 30 times the 2010 total — and 2026 is on track to exceed 4,000. Every GTA public health unit is now classified as established or emerging Lyme risk.</p>
          <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
            <li>Ontario recorded 3,614 Lyme cases in 2025, up from 124 in 2010 — a 30-fold increase in 15 years.</li>
            <li>Case counts have climbed steadily: 463 (2015), 1,489 (2020), 2,941 (2024), 3,614 (2025), with 4,000+ projected for 2026.</li>
            <li>The Eastern Ontario Health Unit led the province in 2025 with 367 cases.</li>
            <li>Halton (142), Toronto (128), and Peel (119) all ranked in the top 10 PHUs in 2025.</li>
            <li>Blacklegged ticks are expanding north about 35–55 km per decade; established populations show 20–30% Borrelia prevalence.</li>
            <li>Professional tick barrier spray applied in late May and mid-August cuts on-property tick populations by 80–90%.</li>
          </ul>
          <p className="mt-3 text-xs text-gray-500">— BuzzSkito, GTA mosquito &amp; tick control · 150+ five-star Google reviews. General information, not medical advice.</p>
        </div>
        <aside className="not-prose mb-6 rounded-xl bg-brand-50 border-l-4 border-brand-700 px-5 py-4">
          <p className="text-xs font-extrabold text-brand-700 uppercase tracking-wider mb-1.5">★ Source for</p>
          <p className="text-sm text-brand-900 leading-relaxed">
            <strong>Toronto Star</strong> · <strong>CityNews Toronto</strong> · <strong>TorontoToday</strong> · <strong>Epoch Times</strong> — May 2026 coverage of Ontario&rsquo;s tick and Lyme surge cited BuzzSkito&rsquo;s public health summaries.
          </p>
        </aside>

        <p className="text-lg text-gray-700 not-prose border-l-4 border-amber-400 pl-5 py-2 mb-8 leading-relaxed">
          <strong>TL;DR:</strong> Ontario reported 3,614 Lyme cases in 2025 — a 30-fold jump since 2010. Eastern Ontario PHU leads the province at 367 cases, but every GTA PHU is now classified as established or emerging risk. The 2026 trajectory points to 4,000+ cases. Yard treatment cuts residential exposure 80-90%.
        </p>

        <h2>The 2025 number in context</h2>
        <p>3,614 confirmed and probable Lyme disease cases in Ontario in 2025. To put that in context:</p>
        <ul>
          <li><strong>2010:</strong> 124 cases</li>
          <li><strong>2015:</strong> 463 cases</li>
          <li><strong>2020:</strong> 1,489 cases</li>
          <li><strong>2024:</strong> 2,941 cases</li>
          <li><strong>2025:</strong> <strong>3,614 cases</strong></li>
          <li><strong>2026 (projected):</strong> 4,000+ cases</li>
        </ul>
        <p>That is a 30-fold increase in 15 years. The trajectory is consistent — roughly 20-25% year-over-year growth. 2026 surveillance through early May supports the projection that Ontario will exceed 4,000 cases for the first time.</p>

        <h2>The PHU breakdown — where Lyme is highest</h2>
        <p>Ontario&rsquo;s 34 Public Health Units report case data quarterly. Here are the highest-volume PHUs by 2025 case count:</p>
        <ol>
          <li><strong>Eastern Ontario Health Unit:</strong> 367 cases (Cornwall, Hawkesbury, Russell, Alfred-Plantagenet)</li>
          <li><strong>Kingston-Frontenac-Lennox &amp; Addington:</strong> 312 cases (Kingston area, Wolfe Island, Amherst Island)</li>
          <li><strong>Leeds-Grenville-Lanark:</strong> 298 cases (Brockville, Smiths Falls, Carleton Place)</li>
          <li><strong>Hastings Prince Edward:</strong> 245 cases (Belleville, Quinte, Picton)</li>
          <li><strong>Peterborough:</strong> 231 cases (Peterborough city, Kawartha Lakes edge)</li>
          <li><strong>Haliburton-Kawartha-Pine Ridge:</strong> 198 cases</li>
          <li><strong>Simcoe Muskoka:</strong> 176 cases (cottage country)</li>
          <li><strong>Halton Region:</strong> 142 cases (Burlington, Oakville, Halton Hills, Milton)</li>
          <li><strong>Toronto Public Health:</strong> 128 cases (concentrated in ravine-adjacent neighbourhoods)</li>
          <li><strong>Peel Region:</strong> 119 cases (Mississauga, Brampton, Caledon)</li>
        </ol>
        <p>Note the GTA PHUs: Halton, Toronto, and Peel are all in the top 10. Five years ago, none of them were.</p>
        <p>Those two western-GTA health units deserve a closer read if you live under them. We unpack <Link href="/blog/lyme-disease-cases-mississauga-oakville-2026" className="text-brand-700 underline">what the Peel and Halton numbers mean for Mississauga and Oakville households</Link>, including the Credit River and 16 Mile Creek corridors that account for much of the local exposure.</p>

        <h2>Why cases are climbing this fast</h2>
        <p>Three drivers, all stacking:</p>
        <h3>1. Tick range expansion</h3>
        <p>Blacklegged ticks are migrating north ~35-55 km per decade. Areas that were tick-free in 2010 — including much of the inner GTA — are now established risk zones. Birds are the main transport vector, carrying ticks during spring migration. Mild winters allow newly-introduced tick populations to survive their first year.</p>

        <h3>2. Host density</h3>
        <p>Lyme transmission requires three hosts across the tick&rsquo;s two-year life cycle. White-footed mice (the nymph host and primary Borrelia reservoir), white-tailed deer (the adult host), and a range of intermediate hosts all have stable or expanding populations across Southern Ontario. Suburban backyards adjacent to ravines or naturalized areas provide ideal habitat continuity.</p>

        <h3>3. Increasing Borrelia prevalence in ticks</h3>
        <p>The percentage of collected ticks testing positive for <em>Borrelia burgdorferi</em> has climbed in step with range expansion. Established populations &mdash; the ones that have been in an area for 5+ years &mdash; routinely show 20-30% Lyme prevalence. Emerging populations (newly established in the last 1-3 years) typically show 5-15%. Both rates are climbing.</p>

        <h2>Household risk by region</h2>
        <ul>
          <li><strong>Eastern Ontario, Kingston, Peterborough corridor:</strong> Highest absolute case rate. Yard treatment is essentially standard for properties with any forest adjacency.</li>
          <li><strong>Cottage country (Muskoka, Haliburton, Kawartha):</strong> Seasonal exposure risk for cottagers and weekend visitors. Tick checks after every outing.</li>
          <li><strong>GTA:</strong> Established risk in every PHU. Highest-pressure neighbourhoods are ravine-adjacent in Toronto + conservation-area-adjacent in suburban cities. <Link href="/blog/toronto-tick-hot-spot-2026" className="text-brand-700 underline">See the Toronto-specific breakdown</Link>.</li>
          <li><strong>Niagara Region:</strong> Established with rising case counts.</li>
          <li><strong>Southwestern Ontario (London, Windsor):</strong> Mixed — some established, some emerging.</li>
          <li><strong>Northern Ontario:</strong> Historically low, but emerging populations confirmed in Sudbury and Sault Ste. Marie.</li>
        </ul>

        <h2>What this means for your household</h2>
        <p>If you live anywhere in Southern Ontario in 2026 and have a yard, you are in the elevated-risk zone. The probability of household tick exposure per year — accounting for kids, pets, gardening, and incidental outdoor time — is now higher than at any point on Ontario&rsquo;s public health record. The question is not whether you might encounter a tick; it is whether you have a protection plan in place when you do.</p>

        <h3>The household plan</h3>
        <ol>
          <li><strong>Yard treatment</strong> — Late May and mid-August professional applications. Cuts on-property tick populations by 80-90%.</li>
          <li><strong>Personal protection</strong> — DEET on skin, permethrin on outdoor clothing, light colours, daily checks.</li>
          <li><strong>Pet protection</strong> — Veterinary tick preventatives (Bravecto, NexGard, Simparica) plus daily physical checks.</li>
          <li><strong>Medical awareness</strong> — Know the bull&rsquo;s-eye rash, fever, fatigue, joint pain. Early antibiotic treatment is highly effective. Delayed treatment carries chronic-symptom risk.</li>
          <li><strong>Tick removal protocol</strong> — Fine-tipped tweezers, pull straight out, save the tick, monitor the bite site for 3-30 days.</li>
        </ol>

        <h2>The free Lyme tracker tool</h2>
        <p>We maintain <Link href="/ontario-lyme-disease-tracker-2026" className="text-brand-700 underline font-semibold">a live PHU-by-PHU Lyme tracker for Ontario</Link> with current case counts, risk classifications, and the highest-pressure municipalities within each PHU. Bookmark it for your region.</p>

        <h2>Related guides</h2>
        <ul>
          <li><Link href="/blog/ontario-tick-surge-2026" className="text-brand-700 underline">Ontario Tick Surge 2026: What&rsquo;s Happening and How to Protect Your Family</Link></li>
          <li><Link href="/blog/toronto-tick-hot-spot-2026" className="text-brand-700 underline">Why Toronto Is a Tick Hot Spot in 2026</Link></li>
          <li><Link href="/blog/lyme-disease-risk-areas-ontario-2026" className="text-brand-700 underline">Lyme Disease Risk Areas Ontario 2026 (Endemic Map)</Link></li>
          <li><Link href="/blog/ultimate-tick-control-guide-ontario" className="text-brand-700 underline">Tick Surge Ontario 2026: Complete Yard Control Guide</Link></li>
        </ul>
      </article>

      <CTASection heading="2026 is the heaviest Lyme year on record — get your yard protected" subtext="Free custom quote based on your lot and PHU risk classification. Sent within 24 hours." />
    </>
  )
}
