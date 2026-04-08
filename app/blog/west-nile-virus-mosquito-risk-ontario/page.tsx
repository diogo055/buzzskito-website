import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { MOSQUITO_BLOGS, CITIES } from '@/lib/constants'

const POST = MOSQUITO_BLOGS.supporting[3]

const FAQS = [
  {
    question: 'Is West Nile Virus a risk in Ontario?',
    answer: 'Yes. West Nile Virus has been present in Ontario since 2001 and is detected every year in GTA mosquito surveillance programs. Toronto Public Health, Peel Region Health, and other GTA health units conduct annual mosquito trapping and testing, confirming WNV-positive mosquito pools each season. Risk is highest in July and August when Culex mosquito populations peak.',
  },
  {
    question: 'What are the symptoms of West Nile Virus?',
    answer: 'About 80% of people infected with West Nile Virus experience no symptoms. Approximately 20% develop West Nile Fever — fever, headache, body aches, fatigue, and sometimes a skin rash. Less than 1% develop severe neurological illness including encephalitis or meningitis. Those at highest risk for severe illness are adults over 60 and people with compromised immune systems.',
  },
  {
    question: 'Which mosquito species carries West Nile Virus in Ontario?',
    answer: 'Culex mosquitoes — particularly Culex pipiens — are the primary West Nile Virus vectors in the GTA. These mosquitoes breed in stagnant water including catch basins, birdbaths, clogged gutters, and poorly draining areas. They are most active in the evening and night hours and peak in population during July and August.',
  },
  {
    question: 'Does mosquito spray protect against West Nile Virus?',
    answer: 'Professional barrier spray significantly reduces mosquito populations in and around your property, directly reducing your exposure to mosquitoes that may carry West Nile Virus. No method eliminates 100% of mosquitoes, but substantially reducing biting mosquito density in your immediate environment meaningfully lowers the probability of encountering an infected mosquito. Reducing standing water sources and using personal repellent (DEET, picaridin) when outdoors further reduces risk.',
  },
  {
    question: 'When is West Nile Virus season in Ontario?',
    answer: 'West Nile Virus risk in Ontario peaks in July and August, coinciding with peak Culex mosquito populations. Confirmed WNV activity in GTA surveillance programs typically begins in late June and declines after Labour Day as temperatures cool. This window overlaps with the period when outdoor activity is highest, making July and August the most important months for mosquito protection.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: 'West Nile Virus & Mosquito Risk in Ontario 2026 | BuzzSkito',
  description: 'West Nile Virus risk by GTA city, transmission data, symptoms, and how professional mosquito control reduces your family\'s exposure risk in Ontario.',
  canonical: `/blog/${POST.slug}`,
  type: 'article',
  publishedTime: POST.date,
})

export default function WestNilePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: POST.title, description: POST.excerpt, slug: POST.slug, datePublished: POST.date })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'West Nile Virus Ontario', url: `/blog/${POST.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${POST.slug}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">West Nile Virus Ontario</span>
          </nav>
          <span className="bg-brand-800 text-brand-200 text-xs px-3 py-1 rounded-full mb-4 inline-block">Mosquito Control</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">{POST.title}</h1>
          <p className="text-brand-300 text-sm">Published {new Date(POST.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })} · By BuzzSkito</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12 prose-brand">
        <p className="text-lg text-gray-600 not-prose border-l-4 border-amber-400 pl-5 py-2 mb-8">
          <strong>Note:</strong> This article provides public health information about West Nile Virus risk. Always consult official Ontario public health sources and your healthcare provider for medical advice. Part of our <Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 underline">Ultimate Mosquito Control Guide</Link>.
        </p>

        <h2>West Nile Virus in Ontario: The Facts</h2>
        <p>West Nile Virus (WNV) is a mosquito-borne illness that has been present in Ontario since 2001. The virus circulates between birds (the primary reservoir host) and mosquitoes, with humans infected incidentally when bitten by an infected mosquito. <em>Culex</em> mosquito species — particularly <em>Culex pipiens</em> — are the primary WNV vectors in the GTA.</p>
        <p>Ontario public health agencies, including Toronto Public Health and the Peel Region Health Department, conduct annual mosquito surveillance programs, trapping and testing pools of mosquitoes for WNV. Positive pools are confirmed in the GTA every year, with the highest activity typically in July and August.</p>

        <h2>Who Is at Risk?</h2>
        <p>Most people (approximately 80%) infected with West Nile Virus experience no symptoms. About 20% develop West Nile Fever — a flu-like illness with fever, headache, body aches, and sometimes rash. Less than 1% of infected people develop severe neurological illness (encephalitis or meningitis).</p>
        <p>However, those at higher risk for severe illness include:</p>
        <ul>
          <li>Adults over 60 years old</li>
          <li>People with compromised immune systems</li>
          <li>People with certain chronic conditions</li>
        </ul>

        <h2>GTA WNV Risk by City</h2>
        <p>WNV-positive mosquito pools are detected across the GTA each season. Risk is generally higher in areas with:</p>
        <ul>
          <li>Dense populations of <em>Culex</em> mosquitoes (standing water areas)</li>
          <li>Active bird populations in urban green spaces</li>
          <li>Warm summer temperatures that accelerate mosquito breeding</li>
        </ul>
        <div className="not-prose grid grid-cols-2 sm:grid-cols-3 gap-3 my-6">
          {CITIES.map((c) => (
            <Link key={c.name} href={c.mosquitoSlug} className="block bg-brand-50 border border-brand-200 rounded-xl p-3 hover:bg-brand-700 hover:text-white hover:border-brand-700 transition-all group text-center">
              <div className="font-bold text-brand-900 group-hover:text-white text-sm">{c.name}</div>
              <div className="text-xs text-gray-500 group-hover:text-brand-200 mt-0.5">Mosquito control →</div>
            </Link>
          ))}
        </div>

        <h2>How Professional Mosquito Control Reduces WNV Risk</h2>
        <p>Reducing the population of mosquitoes in and around your property directly reduces your exposure risk. Professional barrier spray eliminates adult mosquitoes — including <em>Culex</em> species that carry WNV — from your yard's vegetation, creating a significant reduction in the mosquito density your family is exposed to during outdoor activities.</p>
        <p>No mosquito control method eliminates 100% of mosquitoes, but substantially reducing the number of biting mosquitoes in your immediate environment meaningfully reduces the probability of encountering an infected mosquito.</p>

        <h2>Related Guides</h2>
        <ul>
          <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
          <li><Link href="/blog/how-to-prevent-mosquitoes-in-your-backyard" className="text-brand-700 hover:underline">12 Ways to Prevent Mosquitoes in Your Backyard</Link></li>
          <li><Link href="/blog/mosquito-season-gta-when-does-it-start" className="text-brand-700 hover:underline">When Does Mosquito Season Start in the GTA?</Link></li>
          <li><Link href="/mosquito-control" className="text-brand-700 hover:underline">BuzzSkito Mosquito Control Services</Link></li>
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

      <CTASection heading="Reduce Your Family's Mosquito Exposure This Season" subtext="Professional barrier spray significantly reduces mosquito populations in your yard. Free quote available." />
    </>
  )
}
