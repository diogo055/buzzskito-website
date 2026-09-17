'use client'

// Exit-intent popup designed to catch desktop visitors about to bounce.
// Triggers only when the mouse leaves the window through the top edge.
//
// Never on phones. The old mobile trigger (scroll back to the top) fired on
// ordinary reading gestures and threw a full-screen form over the page; the
// sticky Call / Text / Get price bar already covers phones. Below the sm
// breakpoint the modal is not mounted at all.
//
// Never on the quote form, the contact page, the yard-risk quiz (each already
// IS a form) or blog posts (the full-screen form would land on the gesture
// that precedes a buy click, and on adjacent-pest pages it would advertise a
// service the page itself says we don't offer).
//
// Storage rules:
//   - localStorage flag prevents the popup from re-firing within 7 days
//     of being shown.
//   - the flag expires after 7 days so dormant visitors get a fresh chance.

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { BUSINESS, PROMISES } from '@/lib/constants'
import { getGaClientId, getLandingPage, getReferrer, getUtm } from '@/lib/attribution'
import { track } from '@/lib/track'
import AddressAutocomplete from './AddressAutocomplete'

const HUB_API_URL = process.env.NEXT_PUBLIC_HUB_API_URL || 'https://app.buzzskito.ca'
const STORAGE_KEY = 'buzzskito-exit-intent-shown'
const COOLDOWN_DAYS = 7
// Tailwind's sm breakpoint. Below it the popup never mounts.
const DESKTOP_QUERY = '(min-width: 640px)'
const EXCLUDED_PATHS = [
  '/free-yard-assessment',
  '/contact',
  '/yard-risk-report',
  '/lyme-disease-risk-calculator',
  '/am-i-a-mosquito-magnet',
]

type ServiceType = 'mosquito' | 'tick' | 'both'

const SERVICE_OPTIONS: { value: ServiceType; label: string; icon: string }[] = [
  { value: 'mosquito', label: 'Mosquito', icon: '🦟' },
  { value: 'tick', label: 'Tick', icon: '🛡️' },
  { value: 'both', label: 'Both', icon: '✨' },
]

const INPUT_CLASS =
  'w-full rounded-xl border border-gray-300 px-4 py-3 text-brand-900 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20'

function isExcluded(pathname: string | null): boolean {
  if (!pathname) return false
  if (pathname.startsWith('/blog/')) return true
  return EXCLUDED_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`))
}

function isDesktop(): boolean {
  return typeof window !== 'undefined' && window.matchMedia(DESKTOP_QUERY).matches
}

/** The service the visitor was last reading about (set by QuoteLink), else a guess from the page. */
function initialService(pathname: string | null): ServiceType {
  try {
    const stored = sessionStorage.getItem('bz_service')
    if (stored === 'mosquito' || stored === 'tick' || stored === 'both') return stored
  } catch {
    // storage blocked (private mode): fall through to the page guess
  }
  return pathname?.includes('tick') ? 'tick' : 'mosquito'
}

function isCooldownActive(): boolean {
  if (typeof window === 'undefined') return true
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return false
    const shownAt = parseInt(raw, 10)
    if (Number.isNaN(shownAt)) return false
    const ageDays = (Date.now() - shownAt) / (1000 * 60 * 60 * 24)
    return ageDays < COOLDOWN_DAYS
  } catch {
    return false
  }
}

function recordShown() {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(STORAGE_KEY, String(Date.now()))
  } catch {
    /* ignore */
  }
}

export default function ExitIntentPopup() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [armed, setArmed] = useState(false)
  const [desktop, setDesktop] = useState(false)
  const [serviceType, setServiceType] = useState<ServiceType>('mosquito')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [started, setStarted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const excluded = isExcluded(pathname)

  // Track the breakpoint live, so a desktop window narrowed to phone width unmounts the modal.
  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_QUERY)
    const update = () => setDesktop(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  // Arm after 8 seconds — gives the page time to load + visitor time to
  // engage with content. Firing too early feels gimmicky.
  useEffect(() => {
    if (isCooldownActive()) return
    const armTimer = setTimeout(() => setArmed(true), 8000)
    return () => clearTimeout(armTimer)
  }, [])

  // Desktop only: mouse leaves the window through the top edge → exit intent
  useEffect(() => {
    if (!armed || open || excluded) return
    function onMouseOut(e: MouseEvent) {
      // Only trigger when cursor leaves through the top edge
      if (e.clientY > 5) return
      if (e.relatedTarget || (e as MouseEvent & { toElement?: unknown }).toElement) return
      if (!isDesktop() || isCooldownActive()) return
      setServiceType(initialService(pathname))
      setOpen(true)
      recordShown()
    }
    window.addEventListener('mouseout', onMouseOut)
    return () => window.removeEventListener('mouseout', onMouseOut)
  }, [armed, open, excluded, pathname])

  function dismiss() {
    setOpen(false)
  }

  function markStarted() {
    if (started) return
    setStarted(true)
    track('form_start', { form_name: 'exit_popup' })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name || !email || !address) return
    setLoading(true)
    setError('')
    // Stays 'network' unless the Hub answered, so a failed fetch and a rejected request read differently in GA.
    let errorType = 'network'
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
          // First-touch attribution: the page that brought the visitor, not this popup.
          landing_page: getLandingPage(),
          referrer: getReferrer() || undefined,
          source_component: 'exit_popup',
          ...getUtm(),
          ga_client_id: getGaClientId() || undefined,
        }),
      })
      if (!res.ok) {
        errorType = `http_${res.status}`
        throw new Error('Failed')
      }
      // Counted only once the Hub has accepted the lead.
      track('generate_lead', { form_name: 'exit_popup', service_type: serviceType })
      setSubmitted(true)
    } catch {
      track('form_error', { form_name: 'exit_popup', service_type: serviceType, error_type: errorType })
      setError(`Couldn't submit — please call ${BUSINESS.phone} instead.`)
    } finally {
      setLoading(false)
    }
  }

  if (!open || excluded || !desktop) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-intent-title"
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 py-6"
      onClick={dismiss}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-full overflow-y-auto p-6 sm:p-7 relative animate-in fade-in zoom-in duration-200"
        onClick={e => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close"
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        {!submitted ? (
          <>
            <p className="text-xs font-extrabold text-amber-700 uppercase tracking-widest mb-2">★ Wait — one quick thing</p>
            <h2 id="exit-intent-title" className="text-2xl font-extrabold text-brand-900 mb-2 leading-tight">
              Wait — get your free custom quote
            </h2>
            <p className="text-sm text-gray-700 mb-5 leading-relaxed">
              Tell us where the yard is and we&rsquo;ll send your price. {PROMISES.response} No obligation, no spam.
            </p>

            <form onSubmit={handleSubmit} onFocus={markStarted} className="space-y-3">
              <fieldset>
                <legend className="block text-sm font-bold text-brand-900 mb-1.5">What do you need?</legend>
                <div className="grid grid-cols-3 gap-2">
                  {SERVICE_OPTIONS.map(opt => (
                    <button
                      key={opt.value}
                      type="button"
                      aria-pressed={serviceType === opt.value}
                      onClick={() => setServiceType(opt.value)}
                      className={`rounded-xl border-2 p-2 text-center transition-all ${
                        serviceType === opt.value
                          ? 'border-brand-600 bg-brand-50 ring-2 ring-brand-500/20'
                          : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}
                    >
                      <div className="text-lg" aria-hidden="true">{opt.icon}</div>
                      <div className={`text-xs sm:text-sm font-bold ${serviceType === opt.value ? 'text-brand-800' : 'text-gray-700'}`}>{opt.label}</div>
                    </button>
                  ))}
                </div>
              </fieldset>
              <div>
                <label htmlFor="exit-name" className="block text-sm font-bold text-brand-900 mb-1">Your name</label>
                <input
                  id="exit-name"
                  type="text"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Jane Smith"
                  className={INPUT_CLASS}
                />
              </div>
              <div>
                <label htmlFor="exit-email" className="block text-sm font-bold text-brand-900 mb-1">Email</label>
                <input
                  id="exit-email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className={INPUT_CLASS}
                />
              </div>
              <div>
                <label htmlFor="exit-address" className="block text-sm font-bold text-brand-900 mb-1">Property address</label>
                <AddressAutocomplete
                  id="exit-address"
                  required
                  value={address}
                  onChange={setAddress}
                  placeholder="Street + city"
                  className={INPUT_CLASS}
                />
              </div>
              <div>
                <label htmlFor="exit-phone" className="block text-sm font-bold text-brand-900 mb-1">Mobile (optional — we text your price)</label>
                <input
                  id="exit-phone"
                  type="tel"
                  autoComplete="tel"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  placeholder="Your mobile number"
                  className={INPUT_CLASS}
                />
              </div>
              {error && <p className="text-xs text-red-600" role="alert">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-60 text-white font-extrabold px-6 py-3.5 rounded-full text-base shadow-lg transition-colors"
              >
                {loading ? 'Sending...' : 'Send My Quote →'}
              </button>
            </form>

            <p className="text-[11px] text-gray-500 mt-3 text-center leading-snug">
              150+ five-star Google reviews · As featured in Toronto Star · {PROMISES.rainBackShort}
              <br />
              {PROMISES.licence}
            </p>
          </>
        ) : (
          <div className="text-center py-2">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-100 mb-3">
              <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h2 className="text-xl font-extrabold text-brand-900 mb-1.5">Got it. Quote coming.</h2>
            <p className="text-sm text-gray-600 mb-4">
              We&rsquo;ll send your custom quote to <strong className="text-brand-800">{email}</strong>. {PROMISES.response}
            </p>
            <button
              type="button"
              onClick={dismiss}
              className="text-sm font-bold text-brand-700 hover:text-brand-900"
            >
              Continue browsing →
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
