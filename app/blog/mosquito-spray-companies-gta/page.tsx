import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { NEW_BLOGS_4 } from '@/lib/constants'

const POST = NEW_BLOGS_4[0]

export const metadata: Metadata = buildMetadata({
  title: 'Mosquito Spray Companies GTA | Guide',
  description:
    'How to choose a mosquito spray company in the GTA. What to ask, red flags to avoid, and what good service looks like.',
  canonical: `/blog/${POST.slug}`,
  type: 'article',
  publishedTime: POST.date,
})

const FAQS = [
  {
    question: 'What should I look for when hiring a mosquito spray company?',
    answer: 'The seven most important things to check: (1) Health Canada–approved products — ask for the registration number; (2) liability insurance; (3) a written service guarantee or free re-spray policy; (4) clear re-entry instructions (safe for kids and pets after drying); (5) transparent pricing with no hidden fees; (6) local reviews specific to your city or neighbourhood; (7) whether they treat the right areas — vegetation and shrub undersides, not just open grass.',
  },
  {
    question: 'How does professional mosquito lawn spraying work?',
    answer: "Professional mosquito lawn spraying — also called barrier spray treatment — involves applying a fine residual mist to all vegetation on your property: shrubs, hedges, ornamental grasses, fence lines, and the underside of leaves up to 10 feet high. This is where mosquitoes rest during the day. The product kills mosquitoes on contact and remains active on leaf surfaces for up to 30 days. It is not applied to open grass, flowers, or your vegetable garden.",
  },
  {
    question: 'Are mosquito spraying companies in the GTA required to use Health Canada–approved products?',
    answer: 'Yes. In Canada, all pesticides used for residential pest control must be registered with Health Canada under the Pest Control Products Act. Any company applying products without a registration number is operating illegally. Always ask for the product registration number before booking — a reputable company will provide it without hesitation.',
  },
  {
    question: 'How much does mosquito spraying cost in the GTA?',
    answer: 'A single professional mosquito treatment for a typical GTA property (5,000–7,500 sq ft) runs $125–$200. A full season program (4–5 treatments from May through September) is typically $500–$800 for most homes. Properties near ravines or with dense landscaping requiring more thorough coverage are at the higher end. Get a written quote before booking — reputable companies price by treated area, not by arbitrary "property size tiers."',
  },
  {
    question: 'What is the difference between mosquito fogging and barrier spray?',
    answer: 'Fogging disperses a fine mist into the open air to knock down adult mosquitoes immediately — results last hours to days and the effect dissipates quickly. Barrier spray is applied directly to vegetation surfaces where mosquitoes rest, creating a residual treated zone that lasts up to 30 days. Barrier spray is significantly more effective for season-long property protection. Most reputable residential mosquito companies in the GTA use barrier spray, not fogging.',
  },
  {
    question: 'How do I know if a mosquito spray company is reputable?',
    answer: "Check: (1) Google reviews — specifically look for reviews mentioning results after 2–3 weeks, not just 'the tech was friendly'; (2) how long they have been operating in your specific market; (3) whether they offer a free re-spray guarantee in writing; (4) whether they can name the active ingredient and its Health Canada registration; (5) whether they carry liability insurance. Red flags include: pressure to sign multi-year contracts, inability to answer basic product questions, pricing that seems unusually low.",
  },
  {
    question: 'Can one spray company cover both mosquito and tick control?',
    answer: 'Yes — and the best companies combine both in a single visit. The same barrier spray that eliminates mosquitoes also kills ticks at all life stages, including the hard-to-see nymph stage responsible for most Lyme disease transmission in Ontario. Bundling mosquito and tick control in one treatment is more cost-effective than separate visits and ensures complete coverage of all vegetation surfaces.',
  },
]

export default function MosquitoSprayCompaniesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: POST.title, description: POST.excerpt, slug: POST.slug, datePublished: POST.date })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Mosquito Spray Companies GTA', url: `/blog/${POST.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${POST.slug}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Mosquito Spray Companies GTA</span>
          </nav>
          <span className="bg-brand-800 text-brand-200 text-xs px-3 py-1 rounded-full mb-4 inline-block">Mosquito Control</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">{POST.title}</h1>
          <p className="text-brand-300 text-sm">Published {new Date(POST.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })} · By BuzzSkito</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12 prose-brand">
        <p className="text-lg text-gray-600 not-prose border-l-4 border-brand-400 pl-5 py-2 mb-8">
          This guide covers what professional mosquito spraying actually involves, what separates reputable companies from unreliable ones, and the seven questions to ask before you book. For service details, see our <Link href="/mosquito-control" className="text-brand-700 underline">GTA mosquito control service</Link>.
        </p>

        <h2>What Professional Mosquito Lawn Spraying Actually Involves</h2>
        <p>When people search for "mosquito spraying companies near me," most assume the service involves spraying the lawn itself — open grass — with a product that kills mosquitoes. That's not what professional barrier spray does, and companies that spray your grass are wasting your money.</p>
        <p>Mosquitoes don't live in open grass. They rest in <strong>vegetation</strong> — the underside of leaves, shrubs, hedges, ornamental grasses, and fence-line plantings — during the heat of the day. A professional treatment targets every one of those resting surfaces with a residual product that kills mosquitoes on contact and keeps working for up to 30 days after the visit.</p>

        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-brand-800 text-white">
                <th className="px-4 py-2 text-left">What Gets Treated</th>
                <th className="px-4 py-2 text-left">Why</th>
              </tr>
            </thead>
            <tbody>
              {[
                { area: 'Undersides of all shrubs and hedges', why: 'Primary daytime resting habitat for adult mosquitoes' },
                { area: 'Ornamental grasses and garden borders', why: 'Dense foliage = cool, shaded resting spots' },
                { area: 'Fence lines and property perimeter', why: 'Entry point for mosquitoes arriving from adjacent properties' },
                { area: 'Vegetation up to 10 feet high', why: 'Mosquitoes rest at multiple canopy levels' },
                { area: 'Shaded areas under decks and overhangs', why: 'High humidity microclimates attract resting mosquitoes' },
              ].map(({ area, why }) => (
                <tr key={area} className="border-b border-gray-200 even:bg-gray-50">
                  <td className="px-4 py-2 font-medium text-gray-800">{area}</td>
                  <td className="px-4 py-2 text-gray-600">{why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>7 Things to Check Before Booking a Mosquito Spray Company</h2>

        <h3>1. Health Canada–Approved Products</h3>
        <p>In Canada, every pesticide used for residential pest control must be registered with Health Canada under the Pest Control Products Act. Ask for the product's registration number before you book. A reputable company provides this without hesitation. Any company that can't or won't name the product they're using is a red flag.</p>

        <h3>2. Liability Insurance</h3>
        <p>Professional pest control companies carry commercial general liability insurance. Ask for a certificate of insurance before work begins. Companies operating without insurance leave you potentially liable for any property damage or injury claims arising from the treatment.</p>

        <h3>3. A Written Free Re-Spray Guarantee</h3>
        <p>The best mosquito spraying companies stand behind their work. This means a written commitment to return and re-treat if mosquitoes come back within the protection window — at no additional cost. Get this in writing before you book. "We'll take care of it" is not a guarantee.</p>

        <h3>4. Rain-Back Policy</h3>
        <p>Professional residual products need 30–60 minutes to bond to leaf surfaces. A company without a rain-back policy leaves you paying for a treatment that washed off before it cured. Ask specifically: "What do you do if it rains within an hour of my treatment?"</p>

        <h3>5. Clear Re-Entry Instructions</h3>
        <p>Any professional company should clearly communicate when it's safe for children and pets to re-enter the treated area. The standard is 30 minutes after application for Health Canada–approved residential formulas. If a company can't give you a clear answer on this, walk away.</p>

        <h3>6. Local Reviews Mentioning Actual Results</h3>
        <p>Look specifically for reviews that describe results over time — not just "friendly tech" or "on time." Reviews that say things like "we had a party two weeks later and nobody got bitten" tell you the product actually worked. Generic service reviews are useless for evaluating efficacy.</p>

        <h3>7. Transparent Per-Visit Pricing</h3>
        <p>Reputable companies price by treated area. Be cautious of companies that lock you into long multi-year contracts without clear cancellation terms, or that quote you a price without assessing your property. For current pricing in Ontario, see our <Link href="/mosquito-control-cost" className="text-brand-700 hover:underline">2026 mosquito control cost guide</Link>.</p>

        <h2>Fogging vs. Barrier Spray: What Most GTA Companies Actually Use</h2>
        <p>Fogging disperses a mist into open air to knock down adult mosquitoes immediately — results last hours to a few days at most. It looks dramatic but provides no lasting protection. Most reputable residential mosquito companies in the GTA use <strong>barrier spray</strong>, not fogging, precisely because it creates residual protection that lasts up to 30 days.</p>
        <p>If a company offers "fogging services" and nothing else, they are selling you a temporary fix that needs to be repeated weekly to maintain any effect. That adds up fast and delivers far less value than a proper barrier spray program.</p>

        <h2>Mosquito and Tick Control: Why the Best Companies Offer Both</h2>
        <p>The barrier spray that eliminates mosquitoes also kills ticks at all life stages — including the hard-to-see nymphs responsible for most Lyme disease transmission in Ontario. Companies that provide both in a single visit save you money and ensure complete coverage of your property's vegetation surfaces. See our <Link href="/tick-control" className="text-brand-700 hover:underline">tick control service</Link> for details on what's included.</p>

        <h2>Why BuzzSkito</h2>
        <ul>
          <li>Health Canada–registered formula, registration number available on request</li>
          <li>Free re-spray guarantee — if mosquitoes return within the protection window, we come back at no cost</li>
          <li>Rain-back guarantee — significant rain within one hour? We return and re-treat</li>
          <li>Safe for children and pets 30 minutes after application</li>
          <li>129 five-star Google reviews across the GTA</li>
          <li>Serving 19 cities — Mississauga, Toronto, Brampton, Oakville, Burlington, Hamilton, Vaughan, and more</li>
        </ul>

        <h2>Related Guides</h2>
        <ul>
          <li><Link href="/mosquito-control-cost" className="text-brand-700 hover:underline">How Much Does Mosquito Control Cost in Ontario? (2026 Pricing Guide)</Link></li>
          <li><Link href="/blog/mosquito-vs-diy-vs-professional-control" className="text-brand-700 hover:underline">DIY vs. Professional Mosquito Control: What Actually Works</Link></li>
          <li><Link href="/blog/how-long-does-mosquito-spray-last" className="text-brand-700 hover:underline">How Long Does Mosquito Spray Last?</Link></li>
          <li><Link href="/blog/is-mosquito-spray-safe-kids-pets" className="text-brand-700 hover:underline">Is Mosquito Spray Safe for Kids and Pets?</Link></li>
          <li><Link href="/mosquito-control-near-me" className="text-brand-700 hover:underline">Mosquito &amp; Tick Control Near Me — GTA Service Areas</Link></li>
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

      <CTASection heading="Get a Quote from a GTA Mosquito Spray Company You Can Trust" subtext="Health Canada–approved formula. Free re-spray guarantee. 129 five-star reviews." />
    </>
  )
}
