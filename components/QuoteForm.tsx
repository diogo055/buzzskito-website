'use client'

// The one quote form. The quote page (YardAssessment, /free-yard-assessment) and /contact both render this,
// so their fields, wording, attribution and tracking can't drift apart again.
//
// Field order is deliberate: service and address come first because that is what we need to price a yard,
// and on a phone they have to sit inside the first screen. Mobile is optional (it used to be required on
// /contact); email is required because the written quote and the pay link go there.
//
// Privacy: the text inputs carry no `name` attributes, so a submit that fires before hydration (or with
// JavaScript off) can't put anyone's details into a URL. Only the service radios are named, and a service
// choice is not personal data. track() receives form and service names only, never what someone typed.

import { useEffect, useRef, useState } from 'react'
import { BUSINESS, PROMISES } from '@/lib/constants'
import { getGaClientId, getLandingPage, getReferrer, getUtm } from '@/lib/attribution'
import { track } from '@/lib/track'
import AddressAutocomplete, { type ParsedAddress } from './AddressAutocomplete'

const HUB_API_URL = process.env.NEXT_PUBLIC_HUB_API_URL || 'https://app.buzzskito.ca'

export type ServiceType = 'mosquito' | 'tick' | 'both'
type FormName = 'yard_assessment' | 'quote_form'
type Field = 'service' | 'address' | 'name' | 'phone' | 'email'
type Errors = Partial<Record<Field, string>>

// Visual order, so validation focuses the first problem the visitor would see.
const FIELD_ORDER: Field[] = ['service', 'address', 'name', 'phone', 'email']

const SERVICES: { value: ServiceType; label: string }[] = [
  { value: 'mosquito', label: 'Mosquito' },
  { value: 'tick', label: 'Tick' },
  { value: 'both', label: 'Mosquito + Tick' },
]

/** The service a visitor was reading about, stored by QuoteLink. Null when absent or storage is blocked. */
export function readServicePreset(): ServiceType | null {
  try {
    const v = sessionStorage.getItem('bz_service')
    return v === 'mosquito' || v === 'tick' || v === 'both' ? v : null
  } catch {
    return null
  }
}

type Values = { service: ServiceType | null; address: string; name: string; phone: string; email: string }

function fieldError(field: Field, v: Values): string | undefined {
  switch (field) {
    case 'service':
      return v.service ? undefined : 'Please choose what you need: Mosquito, Tick, or both.'
    case 'address':
      return v.address.trim() ? undefined : 'Please enter your property address so we can measure your lot.'
    case 'name':
      return v.name.trim() ? undefined : 'Please enter your name.'
    case 'phone': {
      if (!v.phone.trim()) return undefined
      const digits = v.phone.replace(/\D/g, '')
      const ok = digits.length === 10 || (digits.length === 11 && digits.startsWith('1'))
      return ok ? undefined : 'That mobile number looks incomplete. Please check it, or leave it blank.'
    }
    case 'email':
      if (!v.email.trim()) return 'Please enter your email so we can send your written quote.'
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())
        ? undefined
        : 'That email doesn’t look right. Please check it (for example, name@gmail.com).'
  }
}

const inputBase =
  'w-full rounded-xl border px-4 py-3 text-base text-brand-900 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-colors'
const inputClass = (bad?: string) => `${inputBase} ${bad ? 'border-red-500' : 'border-gray-300'}`
const labelClass = 'block text-sm font-bold text-brand-900 mb-1'
const helpClass = 'mt-1 text-xs text-gray-500'
const errorClass = 'mt-1 text-sm font-medium text-red-700'

export default function QuoteForm({ formName }: { formName: FormName }) {
  const [service, setService] = useState<ServiceType | null>(null)
  const [address, setAddress] = useState('')
  const [parsedAddress, setParsedAddress] = useState<ParsedAddress | null>(null)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState<Errors>({})
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitFailed, setSubmitFailed] = useState(false)
  const started = useRef(false)
  const confirmRef = useRef<HTMLDivElement>(null)
  // First-touch attribution, read on mount because the helpers touch document.cookie (absent during SSR)
  // and getUtm must see the landing URL's query string.
  const attribution = useRef<{ landingPage: string; referrer: string; utm: ReturnType<typeof getUtm> }>({
    landingPage: '',
    referrer: '',
    utm: {},
  })

  const p = `qf-${formName}`
  const values: Values = { service, address, name, phone, email }

  useEffect(() => {
    attribution.current = { landingPage: getLandingPage(), referrer: getReferrer(), utm: getUtm() }
    const preset = readServicePreset()
    if (preset) setService(preset)
  }, [])

  useEffect(() => {
    if (submitted) confirmRef.current?.focus()
  }, [submitted])

  // Re-check only a field that is already showing a message, so errors clear as soon as they're fixed
  // without nagging someone halfway through typing.
  function recheck(field: Field, next: Partial<Values>) {
    if (!errors[field]) return
    setErrors((prev) => ({ ...prev, [field]: fieldError(field, { ...values, ...next }) }))
  }

  function focusField(field: Field) {
    const id = field === 'service' ? `${p}-service-${service ?? 'mosquito'}` : `${p}-${field}`
    document.getElementById(id)?.focus()
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (loading) return

    const found: Errors = {}
    for (const f of FIELD_ORDER) {
      const msg = fieldError(f, values)
      if (msg) found[f] = msg
    }
    setErrors(found)
    const firstBad = FIELD_ORDER.find((f) => found[f])
    if (firstBad) {
      track('form_error', { form_name: formName, error_type: `validation_${firstBad}` })
      focusField(firstBad)
      return
    }

    setLoading(true)
    setSubmitFailed(false)
    const { landingPage, referrer, utm } = attribution.current

    try {
      const res = await fetch(`${HUB_API_URL}/api/quote-request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim() || null,
          address: address.trim(),
          service_type: service,
          // The page that brought the visitor in, not the page the form sits on.
          landing_page: landingPage || window.location.pathname,
          referrer: referrer || undefined,
          // Attribution contract: the Hub files these under answers.attribution.
          source_component: formName,
          utm_source: utm.utm_source,
          utm_medium: utm.utm_medium,
          utm_campaign: utm.utm_campaign,
          // Read at submit time: the _ga cookie only exists once gtag.js has loaded.
          ga_client_id: getGaClientId() || undefined,
          // Geo data from Google Maps autocomplete (null if the address was typed by hand). Currently
          // dropped by the endpoint, kept for when the leads table grows geo columns.
          geo: parsedAddress
            ? {
                street: parsedAddress.street,
                city: parsedAddress.city,
                neighbourhood: parsedAddress.neighbourhood,
                province: parsedAddress.province,
                postal_code: parsedAddress.postalCode,
                country: parsedAddress.country,
                lat: parsedAddress.lat,
                lng: parsedAddress.lng,
                formatted: parsedAddress.formatted,
              }
            : null,
        }),
      })

      if (!res.ok) {
        track('form_error', { form_name: formName, error_type: `http_${res.status}` })
        setSubmitFailed(true)
        return
      }
      // Only a saved lead counts as a lead.
      track('generate_lead', { form_name: formName, service_type: service ?? undefined })
      setSubmitted(true)
    } catch {
      track('form_error', { form_name: formName, error_type: 'network' })
      setSubmitFailed(true)
    } finally {
      setLoading(false)
    }
  }

  // ── Confirmation (replaces the form in place) ──
  if (submitted) {
    const firstName = name.trim().split(/\s+/)[0]
    const Heading = formName === 'yard_assessment' ? 'h2' : 'h3'
    return (
      <div ref={confirmRef} tabIndex={-1} role="status" className="focus:outline-none">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <svg className="h-7 w-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <Heading className="text-2xl font-extrabold text-brand-900">
          Thanks, {firstName} — your request is in.
        </Heading>
        <ol className="mt-5 space-y-4">
          {[
            'We measure your lot.',
            `Alex or the BuzzSkito team texts or emails your price. ${PROMISES.response}`,
            'You pick a plan and pay by secure link, then we book a visit window.',
          ].map((step, i) => (
            <li key={step} className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-800 text-sm font-bold text-white" aria-hidden="true">
                {i + 1}
              </span>
              <span className="pt-0.5 text-brand-900">{step}</span>
            </li>
          ))}
        </ol>
        <p className="mt-6 rounded-xl bg-amber-50 border border-amber-200 px-4 py-3 text-amber-900">
          Want it sooner?{' '}
          <a href={BUSINESS.phoneHref} data-lead-location="quote_form_confirmation" className="font-bold underline underline-offset-2">Call</a> or{' '}
          <a href={BUSINESS.smsHref} data-lead-location="quote_form_confirmation" className="font-bold underline underline-offset-2">text</a>{' '}
          <a href={BUSINESS.phoneHref} data-lead-location="quote_form_confirmation" className="font-bold whitespace-nowrap">{BUSINESS.phone}</a>.
        </p>
      </div>
    )
  }

  // ── Form ──
  return (
    <form
      id={`${p}-form`}
      onSubmit={handleSubmit}
      onFocus={() => {
        if (started.current) return
        started.current = true
        track('form_start', { form_name: formName })
      }}
      noValidate
      className="space-y-4 scroll-mt-24"
    >
      {/* (a) Service */}
      <fieldset aria-describedby={errors.service ? `${p}-service-error` : undefined}>
        <legend className="block text-sm font-bold text-brand-900 mb-2">What do you need?</legend>
        <div className="grid grid-cols-3 gap-2">
          {SERVICES.map((opt) => (
            <label key={opt.value} className="block cursor-pointer">
              <input
                id={`${p}-service-${opt.value}`}
                type="radio"
                name="service_type"
                value={opt.value}
                required
                checked={service === opt.value}
                onChange={() => {
                  setService(opt.value)
                  recheck('service', { service: opt.value })
                }}
                className="peer sr-only"
              />
              <span
                className={`flex min-h-[56px] items-center justify-center rounded-xl border-2 px-2 py-2 text-center text-sm font-bold leading-tight transition-colors sm:text-base peer-checked:border-brand-600 peer-checked:bg-brand-50 peer-checked:text-brand-800 peer-checked:ring-2 peer-checked:ring-brand-500/20 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-brand-600 ${
                  errors.service ? 'border-red-500 bg-white text-gray-800' : 'border-gray-200 bg-white text-gray-800 hover:border-gray-300'
                }`}
              >
                {opt.label}
              </span>
            </label>
          ))}
        </div>
        {errors.service && <p id={`${p}-service-error`} className={errorClass}>{errors.service}</p>}
      </fieldset>

      {/* (b) Address */}
      <div>
        <label htmlFor={`${p}-address`} className={labelClass}>Property address</label>
        <AddressAutocomplete
          id={`${p}-address`}
          required
          value={address}
          onChange={(v) => {
            setAddress(v)
            // A hand edit after picking a suggestion makes the picked geo data stale. When Google fills the
            // field, onSelect runs right after this and restores it.
            setParsedAddress(null)
            recheck('address', { address: v })
          }}
          onSelect={setParsedAddress}
          placeholder="123 Maple Street, Mississauga"
          invalid={!!errors.address}
          describedBy={`${p}-address-help${errors.address ? ` ${p}-address-error` : ''}`}
          className={inputClass(errors.address)}
        />
        <p id={`${p}-address-help`} className={helpClass}>Used only to measure your lot for the price.</p>
        {errors.address && <p id={`${p}-address-error`} className={errorClass}>{errors.address}</p>}
      </div>

      {/* (c) Name */}
      <div>
        <label htmlFor={`${p}-name`} className={labelClass}>Your name</label>
        <input
          id={`${p}-name`}
          type="text"
          required
          autoComplete="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
            recheck('name', { name: e.target.value })
          }}
          placeholder="Jane Smith"
          aria-invalid={!!errors.name || undefined}
          aria-describedby={errors.name ? `${p}-name-error` : undefined}
          className={inputClass(errors.name)}
        />
        {errors.name && <p id={`${p}-name-error`} className={errorClass}>{errors.name}</p>}
      </div>

      {/* (d) Mobile — optional on every form */}
      <div>
        <label htmlFor={`${p}-phone`} className={labelClass}>
          Mobile{' '}
          <span className="font-normal text-gray-500">(optional — we text your price, it&rsquo;s the fastest way)</span>
        </label>
        <input
          id={`${p}-phone`}
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value)
            recheck('phone', { phone: e.target.value })
          }}
          placeholder="(416) 555-0123"
          aria-invalid={!!errors.phone || undefined}
          aria-describedby={errors.phone ? `${p}-phone-error` : undefined}
          className={inputClass(errors.phone)}
        />
        {errors.phone && <p id={`${p}-phone-error`} className={errorClass}>{errors.phone}</p>}
      </div>

      {/* (e) Email */}
      <div>
        <label htmlFor={`${p}-email`} className={labelClass}>Email</label>
        <input
          id={`${p}-email`}
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            recheck('email', { email: e.target.value })
          }}
          placeholder="jane@example.com"
          aria-invalid={!!errors.email || undefined}
          aria-describedby={`${p}-email-help${errors.email ? ` ${p}-email-error` : ''}`}
          className={inputClass(errors.email)}
        />
        <p id={`${p}-email-help`} className={helpClass}>Your written quote and secure pay link go here.</p>
        {errors.email && <p id={`${p}-email-error`} className={errorClass}>{errors.email}</p>}
      </div>

      {submitFailed && (
        <div role="alert" className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          That didn&rsquo;t go through on our end. Please try again, or call or text {BUSINESS.phone}.
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="btn-primary press-scale w-full min-h-[48px] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
      >
        {loading ? 'Sending…' : 'Get my price'}
      </button>

      <div className="text-center text-sm text-gray-600">
        <p>{PROMISES.response}</p>
        <p>
          Rather talk?{' '}
          <a href={BUSINESS.phoneHref} data-lead-location="quote_form_help" className="inline-block py-1.5 font-bold text-brand-700 underline underline-offset-2">Call</a> or{' '}
          <a href={BUSINESS.smsHref} data-lead-location="quote_form_help" className="inline-block py-1.5 font-bold text-brand-700 underline underline-offset-2">text</a>{' '}
          <a href={BUSINESS.phoneHref} data-lead-location="quote_form_help" className="inline-block py-1.5 font-bold text-brand-700 whitespace-nowrap">{BUSINESS.phone}</a>
        </p>
      </div>
    </form>
  )
}
