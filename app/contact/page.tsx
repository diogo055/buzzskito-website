import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { buildMetadata, breadcrumbSchema, speakableSchema } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = buildMetadata({
  title: 'Get a Free Mosquito & Tick Control Quote | BuzzSkito',
  description:
    'Get a free mosquito or tick control quote for your GTA property. Call (289) 216-5030 or fill out our form. Same-week service available.',
  canonical: '/contact',
})

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Contact', url: '/contact' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema('/contact')) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-950 to-brand-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex items-center gap-1">
            <Link href="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white">Get a Free Quote</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Get a Free Mosquito &amp; Tick Control Quote</h1>
          <p className="text-xl text-brand-100 max-w-xl">
            Fill out the form below or call <a href={BUSINESS.phoneHref} className="font-bold text-white underline">{BUSINESS.phone}</a> for a fast, no-obligation quote tailored to your property.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Jobber form embed */}
          <div>
            <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Request a Quote</h2>
            {/* Jobber quote request form */}
            <link
              rel="stylesheet"
              href="https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css"
              media="screen"
            />
            <div id="b0067eee-3c4b-4900-90f1-e7d2b3b0d3a7" />
            <Script
              src="https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js"
              // @ts-expect-error — Jobber custom attributes
              clienthub_id="b0067eee-3c4b-4900-90f1-e7d2b3b0d3a7"
              form_url="https://clienthub.getjobber.com/client_hubs/b0067eee-3c4b-4900-90f1-e7d2b3b0d3a7/public/work_request/embedded_work_request_form"
              strategy="afterInteractive"
            />

            <p className="text-sm text-gray-500 mt-4 text-center">
              Prefer to call? <a href={BUSINESS.phoneHref} className="text-brand-700 font-semibold underline">{BUSINESS.phone}</a>
            </p>
          </div>

          {/* Contact info */}
          <div>
            <h2 className="text-2xl font-extrabold text-brand-900 mb-6">Contact BuzzSkito</h2>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-brand-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-brand-900">Phone</div>
                  <a href={BUSINESS.phoneHref} className="text-brand-700 text-lg font-semibold hover:underline">{BUSINESS.phone}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-brand-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-brand-900">Email</div>
                  <a href={`mailto:${BUSINESS.email}`} className="text-brand-700 hover:underline">{BUSINESS.email}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-brand-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-brand-900">Hours</div>
                  <div className="text-gray-600">{BUSINESS.hoursDisplay}</div>
                  <div className="text-gray-400 text-sm">Service season: May – September</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-brand-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-brand-900">Service Area</div>
                  <div className="text-gray-600 text-sm">Mississauga · Toronto · Brampton<br />Oakville · Burlington · Hamilton</div>
                </div>
              </div>
            </div>

            {/* GBP link */}
            <div className="mt-8 bg-brand-50 rounded-2xl p-5 border border-brand-100">
              <p className="text-brand-900 font-bold mb-2">⭐ Happy with our service?</p>
              <p className="text-gray-600 text-sm mb-3">Leave us a Google review — it helps other GTA homeowners find BuzzSkito.</p>
              <a
                href={BUSINESS.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand-700 hover:bg-brand-600 text-white font-bold px-5 py-2.5 rounded-full text-sm transition-colors"
              >
                Leave a Google Review
              </a>
            </div>

            <p className="text-sm text-gray-500 mt-6">
              Need service area information? See our <Link href="/service-areas" className="text-brand-700 underline">full service area page</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
