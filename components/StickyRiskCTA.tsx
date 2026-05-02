'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Routes where the sticky risk CTA should appear (high-traffic informational pages)
const SHOW_ON_PATHS = [
  '/blog/',
  '/mosquito-control-cost',
  '/mosquito-control-pricing',
  '/mosquito-control-near-me',
  '/tick-control-near-me',
  '/best-mosquito-control-companies',
  '/pest-control-',
  '/mosquito-tick-control-glossary',
  '/buzzskito-2026-gta-mosquito-tick-report',
]

// Hide on pages that already have heavy CTAs
const HIDE_ON_PATHS = [
  '/yard-risk-report',
  '/free-yard-assessment',
  '/contact',
  '/reviews',
]

export default function StickyRiskCTA() {
  const pathname = usePathname()
  const [dismissed, setDismissed] = useState(false)
  const [scrolledPast, setScrolledPast] = useState(false)

  // Show only on relevant pages
  const shouldShow = pathname && SHOW_ON_PATHS.some((p) => pathname.includes(p)) && !HIDE_ON_PATHS.some((p) => pathname.startsWith(p))

  useEffect(() => {
    const onScroll = () => {
      // Show after scrolling 600px (so user has engaged with content first)
      setScrolledPast(window.scrollY > 600)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Restore dismissed state per session (sessionStorage)
  useEffect(() => {
    if (typeof window === 'undefined') return
    setDismissed(sessionStorage.getItem('risk-cta-dismissed') === '1')
  }, [pathname])

  if (!shouldShow || dismissed || !scrolledPast) return null

  return (
    <div className="fixed bottom-16 sm:bottom-4 inset-x-3 sm:inset-x-auto sm:right-4 sm:left-auto z-40 max-w-md sm:max-w-sm">
      <div className="bg-gradient-to-br from-brand-900 via-brand-950 to-emerald-900 text-white rounded-2xl shadow-2xl border border-amber-400/30 p-4 sm:p-5">
        <button
          aria-label="Dismiss"
          onClick={() => { setDismissed(true); sessionStorage.setItem('risk-cta-dismissed', '1') }}
          className="absolute top-2 right-2 text-brand-300 hover:text-white text-xl leading-none w-7 h-7 flex items-center justify-center rounded-full hover:bg-brand-800/50"
        >
          ×
        </button>
        <p className="text-[10px] font-extrabold text-amber-400 uppercase tracking-widest mb-1">Free · 60 Seconds</p>
        <h3 className="font-extrabold text-base sm:text-lg leading-tight pr-6 mb-2">What&rsquo;s YOUR yard&rsquo;s mosquito &amp; tick risk score?</h3>
        <p className="text-xs text-brand-200 mb-3 leading-snug">Get a custom 1-100 risk score based on your address. Includes free treatment plan and peak-weeks calendar.</p>
        <Link
          href="/yard-risk-report"
          className="block w-full bg-amber-500 hover:bg-amber-400 text-white text-center font-extrabold px-4 py-2.5 rounded-full text-sm transition-colors shadow-lg"
          onClick={() => { sessionStorage.setItem('risk-cta-dismissed', '1') }}
        >
          Get My Free Score →
        </Link>
        <p className="text-[10px] text-brand-300 mt-2 text-center">🔒 No credit card · 129 five-star reviews</p>
      </div>
    </div>
  )
}
