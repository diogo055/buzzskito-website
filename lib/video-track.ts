// GA4 events for the crew footage (Nov 13, 2026). One event NAME per outcome, so the counts show in
// GA4 > Reports > Engagement > Events without registering any custom dimension:
//   crew_video_played / crew_video_blocked / crew_video_skipped / crew_video_paused  (in-page and closing-section clips)
//   hero_video_played / hero_video_blocked / hero_video_skipped / hero_video_paused  (the hero, when it is switched on)
// "blocked" = the browser refused autoplay (iPhone Low Power Mode, some data savers): the still stays.
// "skipped" = we chose not to play (Reduce Motion, Data Saver, or the visitor paused it earlier this visit).
// No personal data: only the clip id, a short reason and the page path. Same gtag stub as lib/track.ts, so an
// event that fires before gtag.js loads is queued, not lost.

export type VideoEvent =
  | 'crew_video_played'
  | 'crew_video_blocked'
  | 'crew_video_skipped'
  | 'crew_video_paused'
  | 'hero_video_played'
  | 'hero_video_blocked'
  | 'hero_video_skipped'
  | 'hero_video_paused'

export function trackVideo(event: VideoEvent, params: { clip: string; reason?: string }): void {
  if (typeof window === 'undefined') return
  const payload: Record<string, string> = { clip: params.clip.slice(0, 40), page_path: window.location.pathname }
  if (params.reason) payload.reason = params.reason.slice(0, 40)
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

/** Why autoplay is off for this visitor before we even try, or null to try. */
export function autoplayOff(): string | null {
  if (typeof window === 'undefined') return 'server'
  try {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return 'reduced_motion'
  } catch {
    /* old browsers */
  }
  const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
  if (conn?.saveData === true) return 'save_data'
  return null
}
