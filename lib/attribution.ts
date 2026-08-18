// First-touch attribution for lead forms.
//
// Both lead forms need to report WHICH page brought someone to the site, not
// which page they happened to submit from. That distinction was quietly lost:
// QuoteForm read a `bz_landing` cookie correctly, while YardAssessment
// hardcoded `landing_page: '/free-yard-assessment'`. Since essentially every
// CTA on the site points at /free-yard-assessment, every blog-driven lead was
// recorded as originating there and the Hub's landing-page attribution was
// uniformly destroyed — which is why the value of a blog visitor has never
// been measurable.
//
// Living in lib/ rather than being copied into each form so the two cannot
// drift apart again.
//
// Both functions are first-touch and sticky for 30 days: the FIRST page of the
// first visit wins, so a reader who lands on a bed-bug guide in August and
// books a mosquito season in May is still credited to the bed-bug guide.

const THIRTY_DAYS = 60 * 60 * 24 * 30

function readCookie(name: string): string | null {
  const hit = document.cookie.split('; ').find((c) => c.startsWith(`${name}=`))
  return hit ? decodeURIComponent(hit.slice(name.length + 1)) : null
}

/** The first page this visitor landed on, sticky for 30 days. */
export function getLandingPage(): string {
  if (typeof window === 'undefined') return ''
  const stored = readCookie('bz_landing')
  if (stored) return stored
  const page = window.location.pathname
  document.cookie = `bz_landing=${encodeURIComponent(page)};path=/;max-age=${THIRTY_DAYS}`
  return page
}

/** Where they came from before they arrived, sticky for 30 days. */
export function getReferrer(): string {
  if (typeof window === 'undefined') return ''
  const stored = readCookie('bz_ref')
  if (stored !== null) return stored
  const ref = document.referrer || ''
  document.cookie = `bz_ref=${encodeURIComponent(ref)};path=/;max-age=${THIRTY_DAYS}`
  return ref
}
