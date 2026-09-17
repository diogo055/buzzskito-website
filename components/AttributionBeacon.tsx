'use client'

import { useEffect } from 'react'
import { getLandingPage, getReferrer, getUtm } from '@/lib/attribution'

/**
 * Stamps first-touch attribution on the FIRST page of the visit.
 *
 * WHY THIS EXISTS — it fixes a silent, total attribution failure.
 *
 * `lib/attribution.ts` was already correct: first page wins, sticky 30 days. But the only
 * things calling it were the lead forms, inside their own `useEffect`. Those forms live on
 * /free-yard-assessment, /contact and the exit-intent popup — and essentially every CTA on
 * the site points at /free-yard-assessment. So the sequence was:
 *
 *   1. reader lands on /blog/worst-areas-for-ticks-ontario
 *   2. no form on that page, so getLandingPage() never runs and no cookie is written
 *   3. reader clicks the CTA and arrives at /free-yard-assessment
 *   4. the form mounts, getLandingPage() finally runs, finds no cookie, and writes
 *      window.location.pathname — which is now /free-yard-assessment
 *
 * The helper did exactly what it promised; it was just asked too late. Measured result in
 * Supabase: 327 of 406 attributed leads recorded `/free-yard-assessment`, 71 recorded
 * `/exit-intent-popup`, and **zero** recorded any /blog/ page. Not because the blog produces
 * no customers — because the field could not physically record one.
 *
 * Mounting this in the root layout means the cookie is written on the first page of the visit,
 * whatever that page is, before any CTA can overwrite the answer. It renders nothing and only
 * touches document.cookie.
 *
 * One service customer is worth ~$1,222, against $3.32 for an Amazon order. Whether the blog
 * produces service leads is the largest unmeasured number in the business, and this is the
 * thing that was preventing it from being measured at all.
 */
export default function AttributionBeacon() {
  useEffect(() => {
    // Both read-or-write a cookie; calling them here is what makes "first touch" true.
    getLandingPage()
    getReferrer()
    getUtm()
  }, [])

  return null
}
