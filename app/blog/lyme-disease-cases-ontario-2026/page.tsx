import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import BlogPostCTA from '@/components/BlogPostCTA'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'

// ─────────────────────────────────────────────────────────────────────────────
// DATA PROVENANCE — read before editing any number on this page.
//
// Every Ontario and national case count below traces to:
//   Public Health Agency of Canada, Health Infobase, "Annual report: Lyme
//   disease and other tick-borne diseases surveillance in Canada".
//   https://health-infobase.canada.ca/zoonoses/ticks/annual-report.html
//
//   Ontario  2022: 1,478   2023: 1,859   2024: 2,369
//   Canada   2023: 4,785   2024: 5,809
//   National incidence 2024: 14.1 / 100,000 (2023: 11.9)
//   Ontario share of national total: 41% (2024), 39% (2023). YoY +27%.
//
// 2024 IS THE LATEST PUBLISHED YEAR. There is no published 2025 Ontario or
// national figure. Do not add one, do not project one, and do not attribute an
// estimate to Public Health Ontario or PHAC.
//
// This page previously carried a fabricated "3,614 cases in 2025" figure and a
// fabricated public-health-unit ranking. Both have been removed. PHAC does not
// publish Ontario case counts broken down by public health unit in this report,
// so no PHU ranking appears here.
// ─────────────────────────────────────────────────────────────────────────────

const POST = {
  title: 'Lyme Disease Cases in Ontario: What the Latest Published Data Shows',
  slug: 'lyme-disease-cases-ontario-2026',
  date: '2026-05-19',
  excerpt:
    'Ontario reported 2,369 confirmed and probable Lyme disease cases in 2024 — up 27% over 2023 and the most of any province. That is the newest year the Public Health Agency of Canada has published. Here is what the number covers, what it leaves out, and the household protection plan.',
}

const UPDATED = '2026-07-30'

const FAQS = [
  {
    question: 'How many Lyme disease cases were reported in Ontario?',
    answer:
      'Ontario reported 2,369 confirmed and probable Lyme disease cases in 2024, according to the Public Health Agency of Canada’s Health Infobase annual tick-borne disease report. That is a 27% increase over the 1,859 cases reported in 2023, and about 41% of Canada’s national total of 5,809 cases that year — the largest count of any province. 2024 is the most recent year for which a final provincial figure has been published.',
  },
  {
    question: 'Is there an Ontario Lyme disease case count for 2025?',
    answer:
      'No. As of July 2026, neither Public Health Ontario nor the Public Health Agency of Canada had published a final 2025 Lyme disease case count for Ontario or for Canada. The latest published year is 2024. Public Health Ontario’s Vector-Borne Disease Tool publishes provisional year-to-date counts during the season, but those are revised as cases are investigated and classified and are not a substitute for a finalised annual figure. If you see a 2025 Ontario total quoted anywhere, check whether it traces back to one of those two agencies.',
  },
  {
    question: 'Which Ontario Public Health Units have the highest Lyme case counts?',
    answer:
      'We do not publish a public-health-unit ranking, and you should be sceptical of any that you find. PHAC’s national annual report gives provincial totals, not Ontario counts broken down by health unit. Public Health Ontario maps blacklegged tick risk areas through its Vector-Borne Disease Tool, and those risk areas are drawn as geographic areas rather than along health unit boundaries — a single health unit can contain both risk areas and non-risk areas. Check the current map for your own address rather than relying on a regional ranking.',
  },
  {
    question: 'Is the GTA inside the Lyme disease risk zone?',
    answer:
      'Blacklegged ticks are present in parts of southern Ontario including the Greater Toronto Area, and migratory birds deposit ticks well outside established populations every spring. Rather than relying on a blanket statement about a city or region, check Public Health Ontario’s Vector-Borne Disease Tool risk-area map for your own area, and do a tick check after any outdoor activity — including dog walks in city parks and ravines.',
  },
  {
    question: 'Why are Lyme cases climbing in Ontario?',
    answer:
      'Two mechanisms are well documented in the peer-reviewed literature. First, temperature: blacklegged tick populations need enough accumulated warmth to complete their life cycle, and published models use cumulative annual degree-days above 0°C. Below roughly 2,800 degree-days above 0°C, Ixodes scapularis populations cannot establish or persist (Ghanbari et al., PLOS One 2025, citing Ogden et al. 2005). As accumulated degree-days rise, previously unsuitable areas become suitable. Second, dispersal: Ogden and colleagues estimated that migratory birds carry 50 to 175 million Ixodes scapularis ticks into Canada each spring (Applied and Environmental Microbiology, 2008). Improved recognition and diagnosis also contribute to the reported count, though the surveillance trend itself is sustained.',
  },
  {
    question: 'What can I do to reduce my household risk?',
    answer:
      'Three layers: (1) Yard — habitat modification (leaf-litter removal, short mowing, a gravel or wood-chip buffer between lawn and forest edge) plus a professional tick barrier treatment on the perimeter zones where ticks concentrate. Each application leaves up to 30 days of residual, so a season program is five treatments spread roughly monthly from May through September — enough to stay covered across peak nymph activity in May–July and through adult activity in the autumn, and to keep renewing the barrier as deer, mice and birds carry new ticks in from adjacent woodland. (2) Personal — DEET or icaridin on skin, permethrin on outdoor clothing, light-coloured clothing, and a daily tick check, since Lyme transmission generally requires 24 to 36 hours of attachment. (3) Medical — know the symptoms (an expanding rash, often but not always a bullseye, plus fever, fatigue and joint pain) and see a doctor promptly after a known bite. Early antibiotic treatment is highly effective.',
  },
]

const META_TITLE = 'Lyme Disease Cases Ontario: 2,369 in 2024'

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description:
    'Ontario reported 2,369 confirmed and probable Lyme disease cases in 2024, up 27% over 2023 — the newest year PHAC has published. What the number covers, why no 2025 Ontario total exists yet, and the household protection plan.',
  canonical: `/blog/${POST.slug}`,
  type: 'article',
  publishedTime: POST.date,
})

export default function LymeCasesOntario2026Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: POST.title, description: POST.excerpt, slug: POST.slug, datePublished: POST.date })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Lyme Disease Cases Ontario', url: `/blog/${POST.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${POST.slug}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1 flex-wrap">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Lyme Disease Cases Ontario</span>
          </nav>
          <span className="bg-amber-500 text-white text-xs px-3 py-1 rounded-full mb-4 inline-block font-bold uppercase tracking-wider">Public Health Data</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">{POST.title}</h1>
          <p className="text-brand-300 text-sm">Published {new Date(POST.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })} · Corrected {new Date(UPDATED).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })} · By Alex &amp; The BuzzSkito Team</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 -mt-6 sm:-mt-8 relative z-10">
        <BlogPostCTA />
      </div>

      <article className="max-w-3xl mx-auto px-4 py-12 prose-brand">
        <div className="not-prose bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
          <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
          <p className="text-gray-800 text-[15px] leading-relaxed font-medium">Ontario reported 2,369 confirmed and probable Lyme disease cases in 2024 &mdash; up 27% over 2023, and about 41% of Canada&rsquo;s national total. 2024 is the most recent year the Public Health Agency of Canada has published. There is no published 2025 Ontario figure.</p>
          <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
            <li>Ontario: 1,478 cases (2022), 1,859 (2023), 2,369 (2024) &mdash; PHAC Health Infobase.</li>
            <li>Canada: 4,785 cases (2023) and 5,809 (2024); national incidence rose from 11.9 to 14.1 per 100,000.</li>
            <li>Ontario had the largest absolute count of any province in 2024, at roughly 41% of the national total.</li>
            <li>No 2025 Ontario or national total has been published by Public Health Ontario or PHAC as of July 2026.</li>
            <li>PHAC does not break Ontario down by public health unit in this report, so no PHU ranking appears here.</li>
            <li>Lyme transmission generally requires 24&ndash;36 hours of tick attachment, so a daily tick check is the highest-leverage habit.</li>
          </ul>
          <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control · 150+ five-star Google reviews. General information, not medical advice.</p>
        </div>

        <aside className="not-prose mb-6 rounded-xl bg-amber-50 border-l-4 border-amber-500 px-5 py-4">
          <p className="text-xs font-extrabold text-amber-700 uppercase tracking-wider mb-1.5">Correction · 30 July 2026</p>
          <p className="text-sm text-amber-900 leading-relaxed">
            An earlier version of this page stated that Ontario recorded 3,614 Lyme disease cases in 2025 and listed a case-count ranking of Ontario public health units. Neither figure came from a published source. No 2025 Ontario Lyme total exists, and PHAC does not publish Ontario counts by health unit. Both claims have been removed and the page now uses only figures traceable to PHAC&rsquo;s Health Infobase annual report. We are sorry for the error.
          </p>
        </aside>

        <p className="text-lg text-gray-700 not-prose border-l-4 border-amber-400 pl-5 py-2 mb-8 leading-relaxed">
          <strong>TL;DR:</strong> Ontario reported 2,369 confirmed and probable Lyme disease cases in 2024, up 27% on the year before and the highest count of any Canadian province. That is the newest published year &mdash; there is no 2025 number yet. The trend is real and sustained, and it is the reason yard-level tick control has become a mainstream request in the GTA.
        </p>

        <h2>The latest published number</h2>
        <p>
          <strong>2,369 confirmed and probable Lyme disease cases in Ontario in 2024.</strong> The source is the Public Health Agency of Canada&rsquo;s Health Infobase{' '}
          <a href="https://health-infobase.canada.ca/zoonoses/ticks/annual-report.html" target="_blank" rel="noopener" className="text-brand-700 underline">annual report on Lyme disease and other tick-borne diseases surveillance in Canada</a>, which compiles what the provinces and territories report to PHAC.
        </p>
        <ul>
          <li><strong>2022:</strong> 1,478 Ontario cases</li>
          <li><strong>2023:</strong> 1,859 Ontario cases &mdash; 39% of the national total</li>
          <li><strong>2024:</strong> <strong>2,369 Ontario cases</strong> &mdash; 41% of the national total, up 27% year over year</li>
        </ul>
        <p>
          Nationally, Canada went from 4,785 reported cases in 2023 to 5,809 in 2024, and national incidence rose from 11.9 to 14.1 per 100,000 people. PHAC does not publish a separate Ontario incidence rate in this report, so none is quoted here.
        </p>

        <h3>Two older Ontario figures, and why they sit apart</h3>
        <p>
          Public Health Ontario has published its own Ontario counts through a different surveillance product with a different reporting cut: <strong>959 cases in 2017</strong> (an incidence of 6.7 per 100,000, roughly three times the 2012&ndash;2016 average) and <strong>612 cases in 2018</strong>. Those numbers are real, but they should not be plotted as one continuous line with the PHAC series above &mdash; the case definitions and reporting cutoffs differ, and joining them would overstate the slope.
        </p>

        <h2>What we do not know</h2>
        <p>Two things are worth stating plainly, because both get invented online:</p>
        <ul>
          <li>
            <strong>There is no 2025 Ontario total.</strong> As of July 2026, neither Public Health Ontario nor PHAC has published a finalised 2025 case count for Ontario or for Canada. Public Health Ontario&rsquo;s Vector-Borne Disease Tool shows provisional year-to-date counts during the season, but those are revised as cases are investigated and reclassified. If you see a specific 2025 Ontario figure quoted, trace it to one of those two agencies before you repeat it.
          </li>
          <li>
            <strong>There is no public-health-unit ranking here.</strong> PHAC&rsquo;s annual report reports by province, not by Ontario health unit. And Public Health Ontario maps tick risk as geographic risk areas, not along health unit boundaries &mdash; one health unit routinely contains both risk areas and non-risk areas. A ranked list of health units by case count would imply a precision the published data does not have.
          </li>
        </ul>
        <p>
          For the current risk-area map covering your own address, go to{' '}
          <a href="https://www.publichealthontario.ca/en/data-and-analysis/infectious-disease/vbd-tool" target="_blank" rel="noopener" className="text-brand-700 underline">Public Health Ontario&rsquo;s Vector-Borne Disease Tool</a>, which is redrawn annually.
        </p>

        <h2>Why the trend is climbing</h2>
        <p>Two mechanisms are well established in the peer-reviewed literature.</p>

        <h3>1. Accumulated warmth, not a single cold snap</h3>
        <p>
          Blacklegged tick populations need enough cumulative warmth to complete their two-year life cycle. Published models measure this as cumulative annual degree-days above 0&deg;C rather than as a winter minimum temperature. Below roughly 2,800 degree-days above 0&deg;C, <em>Ixodes scapularis</em> populations cannot establish or persist (Ghanbari et al., <em>PLOS One</em> 2025, citing Ogden et al. 2005). As accumulated degree-days rise, areas that could not previously support a self-sustaining tick population begin to.
        </p>

        <h3>2. Birds move ticks constantly</h3>
        <p>
          Migratory songbirds carry tick larvae and nymphs north every spring. Ogden and colleagues estimated that 50 to 175 million <em>Ixodes scapularis</em> ticks are dispersed into Canada annually this way (<em>Applied and Environmental Microbiology</em>, 2008). That means ticks are being seeded into new areas continuously, and a growing share of those areas can now hold them year-round.
        </p>
        <p>
          Better clinical recognition and testing also lift the reported count. That is a real effect, but it does not account for the whole trend &mdash; the surveillance signal has been sustained across many years and multiple reporting systems.
        </p>

        <h2>What this means for your household</h2>
        <p>
          If you have a yard in southern Ontario that borders forest, ravine, conservation land, or any naturalized corridor, the practical question is not whether a tick will ever turn up. It is whether you have a routine that catches it. The single most useful fact: Lyme transmission from a blacklegged tick generally requires 24 to 36 hours of attachment, which is why a daily tick check during the May-to-July nymph window does more than almost anything else.
        </p>

        <h3>The household plan</h3>
        <ol>
          <li><strong>Yard</strong> &mdash; habitat modification first (clear leaf litter from edges, mow short, put a gravel or wood-chip buffer between lawn and forest edge), then a professional barrier treatment on the perimeter zones where ticks actually sit. Each application holds up to 30 days of residual, so the season program is five treatments spread roughly monthly from May through September. A late-spring-and-late-summer pair would leave a multi-month hole straight through the May&ndash;July nymph peak &mdash; the worst stretch to be uncovered &mdash; and wildlife moving in off the ravine restocks the property all season regardless.</li>
          <li><strong>Personal protection</strong> &mdash; DEET or icaridin on skin, permethrin on outdoor clothing, light colours, and a full check within a couple of hours of coming inside.</li>
          <li><strong>Pets</strong> &mdash; veterinary tick preventatives (Bravecto, NexGard, Simparica) plus a physical check of ears, between toes, and the chest and belly.</li>
          <li><strong>Medical awareness</strong> &mdash; an expanding rash (often but not always a bullseye), fever, fatigue, and joint pain in the 3 to 30 days after a bite all warrant a prompt doctor visit. Early antibiotic treatment is highly effective.</li>
          <li><strong>Tick removal</strong> &mdash; fine-tipped tweezers, pull straight out without twisting, keep the tick, and watch the bite site.</li>
        </ol>

        <h2>The Ontario Lyme tracker</h2>
        <p>
          We maintain <Link href="/ontario-lyme-disease-tracker-2026" className="text-brand-700 underline font-semibold">an Ontario Lyme disease tracker</Link> with the full published case series, the source for every figure, and tick-submission contacts for all 34 Ontario public health units. Every number on it is traceable to a citable primary source.
        </p>

        <h2>Related guides</h2>
        <ul>
          <li><Link href="/blog/ontario-tick-surge-2026" className="text-brand-700 underline">Ontario Tick Surge 2026: What&rsquo;s Happening and How to Protect Your Family</Link></li>
          <li><Link href="/blog/toronto-tick-hot-spot-2026" className="text-brand-700 underline">Why Toronto Is a Tick Hot Spot in 2026</Link></li>
          <li><Link href="/blog/lyme-disease-risk-areas-ontario-2026" className="text-brand-700 underline">Lyme Disease Risk Areas Ontario 2026 (Endemic Map)</Link></li>
          <li><Link href="/blog/ultimate-tick-control-guide-ontario" className="text-brand-700 underline">Tick Surge Ontario 2026: Complete Yard Control Guide</Link></li>
          <li><Link href="/lyme-disease-canada-statistics" className="text-brand-700 underline">Lyme Disease in Canada: the national statistics</Link></li>
        </ul>
      </article>

      <CTASection heading="Ontario&rsquo;s tick trend is going one direction — get your yard protected" subtext="Free custom quote based on your lot and yard features. Sent within 24 hours." />
    </>
  )
}
