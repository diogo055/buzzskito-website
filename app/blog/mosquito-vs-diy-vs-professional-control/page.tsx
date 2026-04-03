import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema } from '@/lib/seo'
import { MOSQUITO_BLOGS } from '@/lib/constants'

const POST = MOSQUITO_BLOGS.supporting[2]

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
          <li><Link href="/blog/how-to-prevent-mosquitoes-in-your-backyard" className="text-brand-700 hover:underline">12 Ways to Prevent Mosquitoes in Your Backyard</Link></li>
          <li><Link href="/mosquito-control" className="text-brand-700 hover:underline">BuzzSkito Mosquito Control Services</Link></li>
        </ul>
      </article>

      <CTASection heading="Professional Mosquito Control That Actually Works" subtext="Free quote for your GTA property. No contracts, guaranteed results." />
    </>
  )
}
