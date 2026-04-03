import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Terms and Conditions | BuzzSkito',
  description: 'BuzzSkito terms and conditions of service for mosquito and tick control treatments.',
  canonical: '/terms-and-conditions',
  noIndex: true,
})

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-14">
      <nav className="text-brand-400 text-sm mb-6 flex items-center gap-1">
        <Link href="/" className="hover:text-brand-700">Home</Link>
        <span>/</span>
        <span className="text-gray-700">Terms and Conditions</span>
      </nav>
      <h1 className="text-3xl font-extrabold text-brand-900 mb-4">Terms and Conditions</h1>
      <p className="text-gray-500 text-sm mb-8">Last updated: January 1, 2026</p>
      <div className="prose-brand max-w-none">
        <p>These terms govern your use of BuzzSkito's services and website. By booking a service, you agree to these terms.</p>
        <h2>Services</h2>
        <p>BuzzSkito provides residential mosquito and tick barrier spray treatments in Mississauga, Toronto, Brampton, Oakville, Burlington, Hamilton, and surrounding GTA areas. Service availability is subject to seasonal conditions.</p>
        <h2>Satisfaction Guarantee</h2>
        <p>We will retreat your property at no additional cost if pests return within the stated protection window (up to 30 days for mosquitoes, up to 30 days for ticks), provided you contact us within that window.</p>
        <h2>Rain Guarantee</h2>
        <p>If heavy rain occurs within one hour of treatment, we will schedule a free reapplication. This does not apply to light rain or rain occurring after the product has fully dried.</p>
        <h2>Access and Safety</h2>
        <p>You agree to provide our technicians safe access to outdoor treatment areas. Children and pets must remain indoors or away from treated areas until the product has fully dried (approximately 30 minutes).</p>
        <h2>Cancellations</h2>
        <p>There are no long-term contracts. Seasonal packages may be cancelled with 24-hour notice prior to a scheduled appointment. Completed treatments are non-refundable.</p>
        <h2>Liability</h2>
        <p>BuzzSkito uses Health Canada–approved formulations applied by trained technicians. We are not liable for reactions caused by failure to follow re-entry instructions.</p>
        <h2>Contact</h2>
        <p>Questions about these terms? Contact us at <a href={`mailto:${BUSINESS.email}`} className="text-brand-700">{BUSINESS.email}</a> or <a href={BUSINESS.phoneHref} className="text-brand-700">{BUSINESS.phone}</a>.</p>
      </div>
      <p className="mt-10 text-sm text-gray-400">
        <Link href="/" className="text-brand-700 hover:underline">← Back to Home</Link>
      </p>
    </div>
  )
}
