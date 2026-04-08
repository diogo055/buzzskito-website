import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { MOSQUITO_BLOGS } from '@/lib/constants'

const POST = MOSQUITO_BLOGS.supporting[2]

const FAQS = [
  {
    question: 'Does professional mosquito spray actually work?',
    answer: 'Yes. Professional barrier spray applied to vegetation and shrubs provides up to 30 days of residual mosquito reduction per treatment. Studies and field results consistently show 60–90%+ reduction in mosquito activity in treated areas, compared to 11–42% reduction from citronella candles in the immediate vicinity. The key difference is professional-grade active ingredient concentrations and the expertise to achieve thorough coverage of all resting sites.',
  },
  {
    question: 'Is professional mosquito control worth it?',
    answer: 'For homeowners who want to actually use their backyard during GTA mosquito season, yes. DIY methods — citronella, consumer foggers, DEET — either protect people individually without reducing yard-wide populations, or provide very short-term (1–7 day) reduction. Professional barrier spray treats the whole property for up to 30 days. A 5-treatment seasonal program costs $500–$800 for most GTA homes and delivers continuous protection from May through September.',
  },
  {
    question: 'How effective are citronella candles against mosquitoes?',
    answer: 'Citronella candles reduce mosquito landings by only 11–42% within approximately 1 metre of the flame. They have no residual effect and provide zero protection when unlit. They are best used as a supplement on a patio table while seated directly beside them — not as a yard-wide solution.',
  },
  {
    question: 'Does DEET spray for yards work the same as professional mosquito spray?',
    answer: 'DEET is a personal repellent applied to skin and clothing — it protects the person wearing it but does nothing to reduce mosquito populations in your yard. Professional barrier spray is applied to the vegetation where mosquitoes rest, killing them and providing residual protection for up to 30 days. They solve different problems: DEET prevents individual bites; professional spray reduces overall mosquito density in your outdoor space.',
  },
  {
    question: 'How long does professional mosquito spray last compared to store-bought products?',
    answer: 'Professional barrier spray lasts up to 30 days per application. Consumer yard foggers and hose-end sprays last 1–7 days depending on weather and conditions. The difference comes down to active ingredient concentration, adhesion chemistry that bonds the product to leaf surfaces, and thorough coverage by a trained technician who knows all the resting sites mosquitoes prefer.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: 'DIY vs. Professional Mosquito Control: What Works in Ontario | BuzzSkito',
  description: 'Honest comparison of citronella, DEET, consumer yard foggers, and professional barrier spray for Ontario homeowners. Which actually reduces mosquito populations?',
  canonical: `/blog/${POST.slug}`,
  type: 'article',
  publishedTime: POST.date,
})

export default function DIYvsProfessionalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: POST.title, description: POST.excerpt, slug: POST.slug, datePublished: POST.date })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'DIY vs Professional Mosquito Control', url: `/blog/${POST.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${POST.slug}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">DIY vs Professional</span>
          </nav>
          <span className="bg-brand-800 text-brand-200 text-xs px-3 py-1 rounded-full mb-4 inline-block">Mosquito Control</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">{POST.title}</h1>
          <p className="text-brand-300 text-sm">Published {new Date(POST.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })} · By BuzzSkito</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12 prose-brand">
        <p className="text-lg text-gray-600 not-prose border-l-4 border-brand-400 pl-5 py-2 mb-8">
          We're a mosquito control company — so take our perspective with that in mind. But the evidence strongly supports professional barrier spray over DIY methods for meaningful, lasting mosquito reduction. Here's an honest breakdown of each approach. Part of our <Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 underline">Ultimate Mosquito Control Guide</Link>.
        </p>

        <h2>Citronella Candles and Torches</h2>
        <p><strong>Effectiveness: Low.</strong> Citronella products create a localized scent barrier that can marginally reduce mosquitoes near the immediate source — within about 1 metre of the flame. They have no residual effect and provide zero protection when the candle isn't lit. Research consistently shows citronella candles reduce mosquito landings by only 11–42% in the immediate vicinity, compared to 60–90%+ reduction with professional barrier spray.</p>
        <p><strong>Best use:</strong> As a supplement on a patio table while sitting directly beside it. Not a yard-wide solution.</p>

        <h2>DEET and Other Personal Repellents</h2>
        <p><strong>Effectiveness: High for personal protection; zero for yard control.</strong> DEET, picaridin, and lemon eucalyptus oil repellents applied to skin and clothing are genuinely effective at preventing individual bites. The issue: they protect people, not yards. You still have a mosquito-infested backyard — you just won't get bitten while wearing repellent. This doesn't let your children play freely, guests to enjoy the patio, or your dog to move around without bites.</p>
        <p><strong>Best use:</strong> As a personal protection supplement when going into heavily infested areas (trails, near wetlands).</p>

        <h2>Consumer Backyard Foggers and Yard Sprays</h2>
        <p><strong>Effectiveness: Moderate short-term.</strong> Consumer foggers and hose-end sprays can provide 1–7 days of mosquito reduction when properly applied. The limitations are significant:</p>
        <ul>
          <li>Much lower active ingredient concentrations than professional-grade products</li>
          <li>Require the homeowner to apply thoroughly and consistently</li>
          <li>No guarantee of proper coverage (missed resting sites reduce effectiveness significantly)</li>
          <li>Faster breakdown — typically effective for only a few days to a week</li>
          <li>Repeated DIY application adds up in cost and time over a season</li>
        </ul>

        <h2>Professional Barrier Spray</h2>
        <p><strong>Effectiveness: High and sustained.</strong> Professional-grade residual insecticides applied by trained technicians provide the most comprehensive, longest-lasting mosquito reduction of any residential option. Key advantages:</p>
        <ul>
          <li>Higher active ingredient concentrations — more effective knockdown and longer residual</li>
          <li>Technician expertise — thorough coverage of all resting sites, including areas a homeowner typically misses</li>
          <li>Up to 30 days residual protection per visit</li>
          <li>Guaranteed results — BuzzSkito retreats at no cost if mosquitoes return within the protection window</li>
        </ul>

        <h2>The Bottom Line</h2>
        <p>For homeowners who want to actually use their backyard during GTA mosquito season, professional barrier spray is the only approach that reliably delivers a meaningful reduction in mosquito populations across the entire property. DIY methods are useful supplements — not substitutes.</p>

        <h2>Related Guides</h2>
        <ul>
          <li><Link href={`/blog/${MOSQUITO_BLOGS.pillar.slug}`} className="text-brand-700 hover:underline">{MOSQUITO_BLOGS.pillar.title}</Link></li>
          <li><Link href="/blog/how-long-does-mosquito-spray-last" className="text-brand-700 hover:underline">How Long Does Mosquito Spray Last?</Link></li>
          <li><Link href="/blog/mosquito-control-cost-ontario" className="text-brand-700 hover:underline">How Much Does Mosquito Control Cost in Ontario?</Link></li>
          <li><Link href="/blog/mosquito-spray-companies-gta" className="text-brand-700 hover:underline">Mosquito Spray Companies GTA: What to Look For</Link></li>
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

      <CTASection heading="Professional Mosquito Control That Actually Works" subtext="Free quote for your GTA property. No contracts, guaranteed results." />
    </>
  )
}
