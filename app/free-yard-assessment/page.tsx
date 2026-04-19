import type { Metadata } from 'next'
import { buildMetadata, breadcrumbSchema, speakableSchema } from '@/lib/seo'
import YardAssessment from '@/components/YardAssessment'

export const metadata: Metadata = buildMetadata({
  title: 'Free Yard Risk Assessment — Is Your Yard at Risk? | BuzzSkito',
  description:
    'Take our free 60-second yard risk assessment. Find out if your GTA property is at risk for mosquitoes and ticks — and get a personalized protection plan.',
  canonical: '/free-yard-assessment',
})

export default function FreeYardAssessmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Free Yard Assessment', url: '/free-yard-assessment' }])) }} />
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
