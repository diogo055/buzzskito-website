import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { NEW_BLOGS, MOSQUITO_BLOGS } from '@/lib/constants'

const POST = NEW_BLOGS[7]

export const metadata: Metadata = buildMetadata({
  title: 'How to Choose a Mosquito Control Company in the GTA: 8 Questions | BuzzSkito',
  description:
    "Not all mosquito control companies are equal. Here's exactly what to ask, what red flags to avoid, and why Health Canada approval, licensing, and guarantees matter for GTA homeowners.",
  canonical: `/blog/${POST.slug}`,
  type: 'article',
  publishedTime: POST.date,
})

const FAQS = [
  {
    question: 'What licence does a mosquito control company need in Ontario?',
    answer:
      "In Ontario, any company applying pest control products commercially must hold a Pesticide Operator Licence issued by the Ministry of the Environment, Conservation and Parks under the Pesticides Act. Individual applicators must also hold a Pesticide Applicator Licence (or be supervised by a licensed applicator). Ask any company you consider to provide their operator licence number — a legitimate company will share this readily. You can also verify it through the Ontario MECP pesticide registry.",
  },
  {
    question: "What's the difference between a 'guarantee' and a 're-spray guarantee'?",
    answer:
      "A general guarantee can mean almost anything — 'we'll fix it if you're not satisfied' with no defined process. A re-spray guarantee is specific: if mosquito activity returns within a defined period after treatment (typically 21–30 days), the company will return and re-treat at no charge. Ask for the specific terms in writing before you book. Reputable companies will provide a clear re-spray policy without hesitation.",
  },
  {
    question: "Is cheaper always worse for mosquito control?",
    answer:
      "Not automatically, but low price is worth scrutinizing. Mosquito control companies can reduce costs by using lower-quality products, diluting products below effective concentrations, reducing treatment time, or cutting corners on safety practices. Ask what product they're using (you should be able to look up the PMRA registration number), how long the application takes for your property size, and what their re-spray policy is. If a company can't answer these questions clearly, price isn't the issue — accountability is.",
  },
  {
    question: "Do I need a year-long contract for mosquito control?",
    answer:
      "No reputable GTA mosquito control company requires a multi-year contract. Legitimate seasonal programs (typically 4–5 treatments from May to September) are common and appropriate — but these should be cancellable if you're not satisfied. Avoid any company that requires a contract extending beyond the current treatment season without a clear, easy cancellation process.",
  },
]

const QUESTIONS = [
  {
    num: 1,
    q: 'Are your products Health Canada–approved?',
    detail: "In Canada, all commercial pest control products must be registered under the Pest Control Products Act. A company using unregistered products is operating illegally and you have no assurance of safety or efficacy. The correct answer is yes — and they should be able to name the specific product and its PMRA registration number.",
  },
  {
    num: 2,
    q: 'Does your company hold a valid Ontario Pesticide Operator Licence?',
    detail: "Ontario law requires any commercial pesticide applicator to hold a valid operator licence from the Ministry of the Environment, Conservation and Parks. Ask for the licence number. A legitimate, professional company will give it to you immediately.",
  },
  {
    num: 3,
    q: 'What is your re-spray policy if mosquitoes return?',
    detail: "The honest answer is that no treatment lasts forever — barrier spray typically provides 3–4 weeks of residual protection, after which populations will rebuild. A professional company should offer a specific, documented re-spray guarantee — return and re-treat at no charge if activity rebounds within their stated window.",
  },
  {
    num: 4,
    q: 'How do you apply the treatment — what do you actually spray?',
    detail: "You want to hear: foliage resting sites (shrub undersides, hedge interiors, garden border edges, lower tree canopy). You do not want to hear: open lawn, flowers, paved surfaces, or the neighbour's yard. Responsible application targets where mosquitoes actually hide, not random surface coverage.",
  },
  {
    num: 5,
    q: 'What active ingredient are you using, and at what concentration?',
    detail: "Synthetic pyrethroids (permethrin, bifenthrin, lambda-cyhalothrin) are the standard active ingredients in effective barrier spray programs. A company that can't name their active ingredient, or who gives you a vague 'natural formula' answer without specifics, is not being transparent. For products marketed as 'all-natural' or 'organic,' ask for the active ingredient and PMRA registration number — if there isn't one, the product is not commercially registered.",
  },
  {
    num: 6,
    q: 'How many treatments are included in your program, and what is the schedule?',
    detail: "Most GTA properties need 4–5 treatments from May through September. A company offering 1–2 treatments as a 'full program' is either applying at very high concentrations (unusual) or setting you up for disappointment. Conversely, a company proposing 8–10 treatments per season may be over-selling. Ask for the specific timing and the rationale for the schedule.",
  },
  {
    num: 7,
    q: 'Do you have verifiable reviews from customers in my area?',
    detail: "Local GTA reviews on Google Business Profile or HomeStars are the most trustworthy signal of a company's actual performance. Look for reviews that mention specific neighbourhoods, property types, or situations similar to yours. Be cautious about companies with a sudden spike of generic 5-star reviews or very few reviews relative to claimed years in business.",
  },
  {
    num: 8,
    q: 'Is there a contract, and how do I cancel if I am not satisfied?',
    detail: "Seasonal treatment programs are reasonable — you're committing to 4–5 visits over a season. Multi-year contracts with penalties for early cancellation are a red flag. A company confident in their results does not need to lock you in for two years.",
  },
]

export default function HowToChooseMosquitoControlPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: POST.title, description: POST.excerpt, slug: POST.slug, datePublished: POST.date })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'How to Choose a Mosquito Control Company', url: `/blog/${POST.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${POST.slug}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">How to Choose a Mosquito Control Company</span>
          </nav>
          <span className="bg-brand-800 text-brand-200 text-xs px-3 py-1 rounded-full mb-4 inline-block">Buyer&rsquo;s Guide · Mosquito Control</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">{POST.title}</h1>
          <p className="text-brand-300 text-sm">Published {new Date(POST.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })} · By BuzzSkito</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12 prose-brand">
        <p className="text-lg text-gray-600 leading-relaxed not-prose border-l-4 border-brand-400 pl-5 py-2 mb-8">
          The GTA has dozens of mosquito control companies — local owner-operators, national franchise networks, and everything in between. Quality varies enormously. This guide gives you the eight questions to ask before you hire anyone, and what good answers look like. See our <Link href="/mosquito-control" className="text-brand-700 underline">mosquito control service page</Link> to see how BuzzSkito answers each one.
        </p>

        <h2>Why Asking the Right Questions Matters</h2>
        <p>Mosquito control is a regulated industry in Ontario, but regulation is minimum-standards enforcement — it doesn&rsquo;t guarantee quality. A company can be fully licensed, use registered products, and still give you a mediocre result by under-treating, applying at the wrong time, or using a product that isn&rsquo;t the right fit for your property. The questions below let you assess a company beyond the licence check.</p>

        <h2>The 8 Questions to Ask Before You Hire</h2>
        <div className="not-prose space-y-6 my-8">
          {QUESTIONS.map(({ num, q, detail }) => (
            <div key={num} className="bg-brand-50 border border-brand-100 rounded-xl p-5">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 bg-brand-700 text-white font-extrabold rounded-full w-9 h-9 flex items-center justify-center text-sm">{num}</span>
                <div>
                  <p className="font-bold text-brand-900 mb-2">{q}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2>Red Flags to Watch For</h2>
        <ul>
          <li><strong>Inability to name their active ingredient.</strong> Any professional knows exactly what they&rsquo;re applying.</li>
          <li><strong>Door-to-door sales pressure to book immediately.</strong> Legitimate companies don&rsquo;t use high-pressure tactics — the season is long enough for you to make a considered decision.</li>
          <li><strong>No re-spray guarantee.</strong> If the company won&rsquo;t commit to retreating if results are unsatisfactory, they&rsquo;re not confident in their product.</li>
          <li><strong>Very low price per treatment with no explanation.</strong> Effective barrier spray has real material and labour costs. A significantly below-market price usually means something is being cut.</li>
          <li><strong>No reviews or unverifiable reviews.</strong> Established companies have verifiable local reviews. If a company has no visible history, proceed carefully.</li>
        </ul>

        <h2>Questions Specific to GTA Properties</h2>
        <p>If your property backs onto a ravine, conservation area, or body of water — common in Toronto, Mississauga, Oakville, Vaughan, and other GTA cities — ask the company whether they adjust their treatment approach for properties adjacent to natural areas. The answer should be yes: these properties require more frequent treatment intervals and different barrier placement than flat suburban lots, because they are continuously re-colonized by mosquitoes migrating from the adjacent natural area.</p>

        <h2>Related Guides and Services</h2>
        <ul>
          <li><Link href="/mosquito-control" className="text-brand-700 hover:underline">BuzzSkito Mosquito Control Services</Link></li>
          <li><Link href="/service-areas" className="text-brand-700 hover:underline">All BuzzSkito Service Areas</Link></li>
          <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
          <li><Link href="/blog/is-mosquito-spray-safe-kids-pets" className="text-brand-700 hover:underline">Is Professional Mosquito Spray Safe for Kids and Pets?</Link></li>
          <li><Link href="/blog/mosquito-vs-diy-vs-professional-control" className="text-brand-700 hover:underline">DIY vs. Professional Mosquito Control</Link></li>
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
        heading="See How BuzzSkito Answers All 8 Questions"
        subtext="Licensed, Health Canada–approved, re-spray guarantee included. Free quote with no pressure."
      />
    </>
  )
}
