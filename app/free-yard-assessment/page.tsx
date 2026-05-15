import type { Metadata } from 'next'
import { buildMetadata, breadcrumbSchema, speakableSchema } from '@/lib/seo'
import YardAssessment from '@/components/YardAssessment'

export const metadata: Metadata = buildMetadata({
  title: 'Get a Free Quote — BuzzSkito Mosquito & Tick Control GTA',
  description:
    'Free custom quote for mosquito and tick control. Serving Mississauga, Toronto, and the GTA. Pricing depends on lot size — we measure via satellite and reply within 24 hours.',
  canonical: '/free-yard-assessment',
})

export default function FreeYardAssessmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Get a Free Quote', url: '/free-yard-assessment' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/free-yard-assessment')) }} />

      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-6 px-4">
        <div className="max-w-xl mx-auto text-center">
          <img src="/logo.webp" alt="BuzzSkito" width={48} height={48} className="mx-auto mb-2 rounded-full border-2 border-amber-500" />
          <p className="text-brand-300 text-sm">BuzzSkito Mosquito & Tick Control</p>
        </div>
      </section>

      <YardAssessment />
    </>
  )
}
