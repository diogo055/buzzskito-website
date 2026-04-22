import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy',
  description: 'BuzzSkito privacy policy — how we collect, use, and protect your personal information.',
  canonical: '/privacy-policy',
  noIndex: true,
})

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-14">
      <nav className="text-brand-400 text-sm mb-6 flex items-center gap-1">
        <Link href="/" className="hover:text-brand-700">Home</Link>
        <span>/</span>
        <span className="text-gray-700">Privacy Policy</span>
      </nav>
      <h1 className="text-3xl font-extrabold text-brand-900 mb-4">Privacy Policy</h1>
      <p className="text-gray-500 text-sm mb-8">Last updated: January 1, 2026</p>
      <div className="prose-brand max-w-none">
        <p>BuzzSkito Mosquito &amp; Tick Control (&quot;BuzzSkito&quot;, &quot;we&quot;, &quot;our&quot;) is committed to protecting your privacy. This policy explains what information we collect, how we use it, and your rights regarding your data.</p>
        <h2>Information We Collect</h2>
        <p>We collect information you provide directly to us, such as your name, address, phone number, and email when you request a quote or book a service. We also collect usage data through Google Analytics and Facebook Pixel to improve our website performance.</p>
        <h2>How We Use Your Information</h2>
        <p>We use your information to provide and improve our services, communicate about your bookings, send service notifications via SMS and email, and to understand how our website is used.</p>
        <h2>Sharing Your Information</h2>
        <p>We do not sell your personal information. We may share information with service providers who assist us in operating our business, subject to confidentiality agreements.</p>
        <h2>Cookies</h2>
        <p>Our website uses cookies and similar tracking technologies including Google Analytics (G-X7RV1EQWD8) and Facebook Pixel. You may opt out of analytics tracking via your browser settings.</p>
        <h2>Contact Us</h2>
        <p>For privacy questions, contact us at <a href={`mailto:${BUSINESS.email}`} className="text-brand-700">{BUSINESS.email}</a> or call <a href={BUSINESS.phoneHref} className="text-brand-700">{BUSINESS.phone}</a>.</p>
      </div>
      <p className="mt-10 text-sm text-gray-400">
        <Link href="/" className="text-brand-700 hover:underline">← Back to Home</Link>
      </p>
    </div>
  )
}
