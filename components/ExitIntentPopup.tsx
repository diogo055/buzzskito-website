'use client'

// Exit-intent popup designed to catch visitors about to bounce from
// high-intent pages (homepage, /free-yard-assessment, top blog posts).
// Triggers on desktop when the cursor leaves the viewport top, and on
// mobile after a moderately-deep scroll followed by ~5s of inactivity.
//
// Storage rules:
//   - localStorage flag prevents the popup from re-firing within 7 days
//     of being dismissed or submitted.
//   - localStorage flag persists across sessions but expires after 7 days
//     so dormant visitors get a fresh chance.

import { useEffect, useState } from 'react'

const HUB_API_URL = process.env.NEXT_PUBLIC_HUB_API_URL || 'https://app.buzzskito.ca'
const STORAGE_KEY = 'buzzskito-exit-intent-shown'
const COOLDOWN_DAYS = 7

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
  const [open, setOpen] = useState(false)
  const [armed, setArmed] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  // Arm after 8 seconds — gives the page time to load + visitor time to
  // engage with content. Firing too early feels gimmicky.
  useEffect(() => {
    if (isCooldownActive()) return
    const armTimer = setTimeout(() => setArmed(true), 8000)
    return () => clearTimeout(armTimer)
  }, [])

  // Desktop: mouseleave from top of viewport → exit intent
  useEffect(() => {
    if (!armed || open) return
    function onMouseOut(e: MouseEvent) {
      // Only trigger when cursor leaves through the top edge
      if (e.clientY > 5) return
      if (!e.relatedTarget && !(e as MouseEvent & { toElement?: unknown }).toElement) {
        trigger()
      }
    }
    window.addEventListener('mouseout', onMouseOut)
    return () => window.removeEventListener('mouseout', onMouseOut)
  }, [armed, open])

  // Mobile: detect "back" intent via scroll-up after deep scroll
  useEffect(() => {
    if (!armed || open) return
    let lastScroll = window.scrollY
    let deepScrollReached = false
    let scrollUpStart = 0
    function onScroll() {
      const y = window.scrollY
      // Track that the user has engaged with content (scrolled ~half a viewport)
      if (y > window.innerHeight * 0.5) deepScrollReached = true
      // If they then scroll UP quickly toward the top, treat as exit signal
      if (deepScrollReached && y < lastScroll) {
        if (!scrollUpStart) scrollUpStart = Date.now()
        if (y < 100 && Date.now() - scrollUpStart < 1500) {
          trigger()
        }
      } else {
        scrollUpStart = 0
      }
      lastScroll = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [armed, open])

  function trigger() {
    if (isCooldownActive()) return
    setOpen(true)
    recordShown()
  }

  function dismiss() {
    setOpen(false)
  }

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
          service_type: 'both',
          landing_page: '/exit-intent-popup',
        }),
      })
      if (!res.ok) throw new Error('Failed')
      setSubmitted(true)
    } catch {
      setError("Couldn't submit — please call (289) 216-5030 instead.")
    } finally {
      setLoading(false)
    }
  }

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-intent-title"
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 py-6"
      onClick={dismiss}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-7 relative animate-in fade-in zoom-in duration-200"
        onClick={e => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close"
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        {!submitted ? (
          <>
            <p className="text-xs font-extrabold text-amber-700 uppercase tracking-widest mb-2">★ Wait — one quick thing</p>
            <h2 id="exit-intent-title" className="text-2xl font-extrabold text-brand-900 mb-2 leading-tight">
              Wait — get your free custom quote
            </h2>
            <p className="text-sm text-gray-700 mb-5 leading-relaxed">
              Takes 20 seconds. We&rsquo;ll send a custom quote within 24 hours — no obligation, no spam.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                required
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Your name"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-brand-900 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
              />
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-brand-900 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
              />
              <input
                type="text"
                required
                value={address}
                onChange={e => setAddress(e.target.value)}
                placeholder="Property address (street + city)"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-brand-900 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
              />
              <input
                type="tel"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="Phone (optional — for fastest response)"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-brand-900 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
              />
              {error && <p className="text-xs text-red-600">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-60 text-white font-extrabold px-6 py-3.5 rounded-full text-base shadow-lg transition-colors"
              >
                {loading ? 'Sending...' : 'Send My Quote →'}
              </button>
            </form>

            <p className="text-[11px] text-gray-500 mt-3 text-center leading-snug">
              150+ five-star reviews · As featured in Toronto Star · Health Canada-approved
            </p>
          </>
        ) : (
          <div className="text-center py-2">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-100 mb-3">
              <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h2 className="text-xl font-extrabold text-brand-900 mb-1.5">Got it. Quote coming.</h2>
            <p className="text-sm text-gray-600 mb-4">
              We&rsquo;ll send your custom quote to <strong className="text-brand-800">{email}</strong> within 24 hours.
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
