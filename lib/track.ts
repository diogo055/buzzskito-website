// Lead-funnel events for GA4: form starts, errors, completed leads, and taps on Call / Text / quote links.
//
// Two rules make this safe to call from anywhere:
//  1. No personal data, ever. Only the whitelisted, non-identifying params below are sent; names, emails,
//     phones and addresses never reach Google Analytics (GA4 policy, and the privacy policy says so).
//  2. It never loses an event that fires before gtag.js loads: it installs the same gtag stub the GA
//     snippet uses, which queues the call in dataLayer until the library arrives.
import { getLandingPage } from '@/lib/attribution'

export type LeadEvent =
  | 'generate_lead'
  | 'form_start'
  | 'form_error'
  | 'click_to_call'
  | 'click_to_text'
  | 'quote_cta_click'

type Params = {
  form_name?: 'yard_assessment' | 'quote_form' | 'exit_popup' | 'quiz' | 'lyme_risk' | 'mosquito_magnet' | string
  service_type?: string
  link_location?: string
  error_type?: string
}

const ALLOWED: (keyof Params)[] = ['form_name', 'service_type', 'link_location', 'error_type']

export function track(event: LeadEvent, params: Params = {}): void {
  if (typeof window === 'undefined') return
  const payload: Record<string, string> = {}
  for (const key of ALLOWED) {
    const v = params[key]
    if (typeof v === 'string' && v.length > 0) payload[key] = v.slice(0, 100)
  }
  payload.page_path = window.location.pathname
  payload.landing_page = getLandingPage()

  const w = window as unknown as { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void }
  if (typeof w.gtag !== 'function') {
    w.dataLayer = w.dataLayer || []
    w.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      ;(w.dataLayer as unknown[]).push(arguments)
    }
  }
  w.gtag('event', event, payload)
}
