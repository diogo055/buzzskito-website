'use client'

import { useState } from 'react'
import { BUSINESS } from '@/lib/constants'

const HUB_API_URL = process.env.NEXT_PUBLIC_HUB_API_URL || 'https://app.buzzskito.ca'

type ServiceType = 'mosquito' | 'tick' | 'both'

export default function QuoteForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [serviceType, setServiceType] = useState<ServiceType>('mosquito')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch(`${HUB_API_URL}/api/quote-request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim() || undefined,
          address: address.trim() || undefined,
          service_type: serviceType,
        }),
      })

      if (!res.ok) throw new Error('Failed to submit')
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please call us at (289) 216-5030 instead.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-green-50 border border-green-200 p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
          <svg className="h-7 w-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-extrabold text-brand-900 mb-2">Quote Request Received!</h3>
        <p className="text-gray-600 mb-1">Thanks, {name}! We&apos;ll send your personalized quote to <strong>{email}</strong> shortly.</p>
        <p className="text-sm text-gray-500">Usually within a few hours during business hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="quote-name" className="block text-sm font-bold text-brand-900 mb-1.5">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="quote-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="John Smith"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-brand-900 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-colors"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="quote-email" className="block text-sm font-bold text-brand-900 mb-1.5">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          id="quote-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="john@example.com"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-brand-900 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-colors"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="quote-phone" className="block text-sm font-bold text-brand-900 mb-1.5">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          id="quote-phone"
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="(416) 555-0123"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-brand-900 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-colors"
        />
      </div>

      {/* Address */}
      <div>
        <label htmlFor="quote-address" className="block text-sm font-bold text-brand-900 mb-1.5">
          Property Address <span className="text-red-500">*</span>
        </label>
        <input
          id="quote-address"
          type="text"
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="123 Maple Street, Mississauga"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-brand-900 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-colors"
        />
      </div>

      {/* Service Type — visual selector */}
      <div>
        <label className="block text-sm font-bold text-brand-900 mb-2">
          What do you need? <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {([
            { value: 'mosquito' as ServiceType, label: 'Mosquito Control', icon: '🦟', desc: 'Barrier spray protection' },
            { value: 'tick' as ServiceType, label: 'Tick Protection', icon: '🛡️', desc: 'Lyme disease prevention' },
            { value: 'both' as ServiceType, label: 'Both (Save $100)', icon: '✨', desc: 'Complete protection' },
          ]).map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setServiceType(opt.value)}
              className={`relative rounded-xl border-2 p-4 text-left transition-all ${
                serviceType === opt.value
                  ? 'border-brand-600 bg-brand-50 ring-2 ring-brand-500/20'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              {serviceType === opt.value && (
                <div className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-brand-600 flex items-center justify-center">
                  <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
              <span className="text-2xl">{opt.icon}</span>
              <p className="mt-1 font-bold text-brand-900 text-sm">{opt.label}</p>
              <p className="text-xs text-gray-500">{opt.desc}</p>
            </button>
          ))}
        </div>
      </div>

      {error && (
        <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">{error}</div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-60 text-white font-extrabold px-6 py-4 rounded-full text-lg shadow-xl transition-colors"
      >
        {loading ? 'Submitting...' : 'Get My Free Quote'}
      </button>

      <p className="text-center text-xs text-gray-500">
        ✓ No contracts &nbsp;·&nbsp; ✓ Free re-spray guarantee &nbsp;·&nbsp; ✓ Response within hours
      </p>
    </form>
  )
}
