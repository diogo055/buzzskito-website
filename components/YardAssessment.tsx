'use client'

// Single-page quote request form. Replaces the prior 6-step quiz funnel —
// the quiz was driving high drop-off, so this is a simpler one-shot ask.
// Customer enters name / email / phone / address / service type, we save
// it to the dashboard, and Alex follows up with a custom quote within 24h.
//
// We kept the component name `YardAssessment` and the route
// `/free-yard-assessment` for backward compatibility with the 20+ pages that
// link here.

import { useState } from 'react'
import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'
import AddressAutocomplete, { type ParsedAddress } from './AddressAutocomplete'

const HUB_API_URL = process.env.NEXT_PUBLIC_HUB_API_URL || 'https://app.buzzskito.ca'

type ServiceType = 'mosquito' | 'tick' | 'both'

export default function YardAssessment() {
  const [serviceType, setServiceType] = useState<ServiceType>('mosquito')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [parsedAddress, setParsedAddress] = useState<ParsedAddress | null>(null)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name || !email || !address) return
    setLoading(true)
    setError('')

    try {
      const res = await fetch(`${HUB_API_URL}/api/quote-request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim() || null,
          address: address.trim(),
          service_type: serviceType,
          landing_page: '/free-yard-assessment',
          // Geo data from Google Maps autocomplete (null if user typed manually).
          // Currently dropped by the endpoint but kept in the payload for forward
          // compatibility when the leads table grows geo columns.
          geo: parsedAddress ? {
            street: parsedAddress.street,
            city: parsedAddress.city,
            neighbourhood: parsedAddress.neighbourhood,
            province: parsedAddress.province,
            postal_code: parsedAddress.postalCode,
            country: parsedAddress.country,
            lat: parsedAddress.lat,
            lng: parsedAddress.lng,
            formatted: parsedAddress.formatted,
          } : null,
        }),
      })

      if (!res.ok) throw new Error('Failed')
      setSubmitted(true)
    } catch {
      setError(`Something went wrong. Please call ${BUSINESS.phone} instead.`)
    } finally {
      setLoading(false)
    }
  }

  // ── Success state ──
  if (submitted) {
    return (
      <div className="max-w-xl mx-auto px-4 py-12 sm:py-16">
        <div className="text-center space-y-6">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <svg className="h-12 w-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-900">Thanks, {name.split(' ')[0]}!</h1>
            <p className="text-gray-600 mt-3 text-base sm:text-lg">Your custom quote is on the way to <strong className="text-brand-800">{email}</strong> within the next 24 hours.</p>
          </div>

          <div className="rounded-2xl border border-brand-100 bg-brand-50 p-5 text-left">
            <p className="text-sm text-brand-800 font-bold mb-2">What happens next:</p>
            <ol className="text-sm text-brand-800 space-y-1.5 list-decimal list-inside">
              <li>We measure your lot via satellite (no site visit needed)</li>
              <li>We send you a personalized quote with exact pricing</li>
              <li>You pick the plan that works — book and pay online in 60 seconds</li>
            </ol>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm text-amber-900 mb-3">Need it sooner? Call or text us directly.</p>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-2 bg-brand-800 hover:bg-brand-700 text-white font-bold px-6 py-3 rounded-full transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              {BUSINESS.phone}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            {[
              { icon: '⭐', label: '5.0 ★★★★★ — 150+ Reviews' },
              { icon: '🍁', label: 'Health Canada-Approved' },
              { icon: '👶', label: 'Safe for Kids & Pets' },
              { icon: '✓', label: '100% Satisfaction Guarantee' },
            ].map(({ icon, label }) => (
              <div key={label} className="rounded-xl bg-white border border-brand-100 p-3 text-center">
                <span className="text-lg">{icon}</span>
                <p className="text-xs font-semibold text-brand-800 mt-1">{label}</p>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <Link href="/" className="text-sm text-brand-600 hover:underline">← Back to buzzskito.ca</Link>
          </div>
        </div>
      </div>
    )
  }

  // ── Form ──
  return (
    <div className="max-w-xl mx-auto px-4 py-8 sm:py-12">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-900 mb-2">Get Your Free Custom Quote</h1>
        <p className="text-gray-600 text-base sm:text-lg">Takes 30 seconds. We&rsquo;ll send your exact pricing within 24 hours.</p>
      </div>

      {/* Trust strip */}
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-6 text-xs sm:text-sm font-semibold text-brand-800">
        <span className="inline-flex items-center gap-1.5"><span className="text-amber-500">★★★★★</span> 5.0 (150+ reviews)</span>
        <span className="text-gray-300">·</span>
        <span>🍁 Health Canada-Approved</span>
        <span className="text-gray-300">·</span>
        <span>👶 Safe for Kids &amp; Pets</span>
      </div>

      {/* Value card — anchors at $99/$500 only, no detailed package pricing.
          Every property is quoted individually to drive the quote request. */}
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 sm:p-5 mb-6">
        <p className="text-sm font-extrabold text-amber-900 mb-2">💡 Every property is priced individually</p>
        <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
          Treatments start at <strong>$99</strong>, and most homeowners choose a season plan from around <strong>$500</strong>. Your exact price depends on your lot size — we measure it by satellite (no visit needed) and send custom pricing, usually within a few hours and always within 24.
        </p>
        <p className="text-[11px] sm:text-xs text-amber-800 mt-3 leading-snug">
          No contracts · 150+ five-star reviews · BuzzSkito Bite-Free Guarantee
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4 bg-white rounded-2xl border border-gray-200 shadow-sm p-5 sm:p-6">
        {/* Service type */}
        <div>
          <label className="block text-sm font-bold text-brand-900 mb-2">What do you need? <span className="text-red-500">*</span></label>
          <div className="grid grid-cols-3 gap-2">
            {([
              { value: 'mosquito', label: 'Mosquito', icon: '🦟' },
              { value: 'tick', label: 'Tick', icon: '🛡️' },
              { value: 'both', label: 'Both', icon: '✨' },
            ] as const).map(opt => (
              <button
                key={opt.value}
                type="button"
                onClick={() => setServiceType(opt.value)}
                className={`rounded-xl border-2 p-3 text-center transition-all ${
                  serviceType === opt.value
                    ? 'border-brand-600 bg-brand-50 ring-2 ring-brand-500/20'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="text-xl">{opt.icon}</div>
                <div className={`mt-1 text-xs sm:text-sm font-bold ${serviceType === opt.value ? 'text-brand-800' : 'text-gray-700'}`}>{opt.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Name */}
        <div>
          <label htmlFor="q-name" className="block text-sm font-bold text-brand-900 mb-1">Full Name <span className="text-red-500">*</span></label>
          <input id="q-name" type="text" required value={name} onChange={e => setName(e.target.value)} placeholder="Jane Smith"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-brand-900 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="q-email" className="block text-sm font-bold text-brand-900 mb-1">Email <span className="text-red-500">*</span></label>
          <input id="q-email" type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="jane@example.com"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-brand-900 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="q-phone" className="block text-sm font-bold text-brand-900 mb-1">Phone <span className="text-gray-400 font-normal text-xs">(optional — for fastest response)</span></label>
          <input id="q-phone" type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="(416) 555-0123"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-brand-900 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" />
        </div>

        {/* Address */}
        <div>
          <label htmlFor="q-address" className="block text-sm font-bold text-brand-900 mb-1">Property Address <span className="text-red-500">*</span><span className="text-gray-400 font-normal text-xs ml-1">(start typing — we&rsquo;ll autocomplete)</span></label>
          <AddressAutocomplete
            id="q-address"
            required
            value={address}
            onChange={setAddress}
            onSelect={setParsedAddress}
            placeholder="123 Maple Street, Mississauga"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-brand-900 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
          />
        </div>

        {error && <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">{error}</div>}

        <button type="submit" disabled={loading}
          className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-60 text-white font-extrabold px-6 py-4 rounded-full text-lg shadow-xl transition-colors mt-2">
          {loading ? 'Sending...' : 'Get My Free Quote →'}
        </button>

        <p className="text-center text-xs text-gray-500 pt-1">
          No credit card. No spam. We&rsquo;ll text or email your quote within 24 hours.
        </p>
      </form>

      {/* Or call */}
      <div className="text-center mt-6">
        <p className="text-sm text-gray-500 mb-2">Prefer to talk? Call or text us directly.</p>
        <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-2 text-brand-700 font-bold hover:text-brand-900">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
          {BUSINESS.phone}
        </a>
      </div>
    </div>
  )
}
