/**
 * Small "Updated <Month Year>" freshness stamp for near the H1. Reads the page's
 * existing UPDATED/DATE constant. Trust + freshness signal (and an AI-citation
 * cue). Deliberately shows a DATE ONLY — never a "price last checked" figure,
 * since a stale price would itself violate the Operating Agreement.
 *
 * tone="dark" for use on the dark hero; "light" for on-page use.
 */
export default function FreshnessStamp({
  date,
  tone = 'light',
  fr = false,
}: {
  date: string
  tone?: 'light' | 'dark'
  /** Render the stamp in French (for fr-CA pages). */
  fr?: boolean
}) {
  const formatted = new Date(date).toLocaleDateString(fr ? 'fr-CA' : 'en-CA', { year: 'numeric', month: 'long' })
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-semibold ${
        tone === 'dark' ? 'text-brand-300' : 'text-gray-500'
      }`}
    >
      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      {fr ? 'Mis à jour en ' : 'Updated '}{formatted}
    </span>
  )
}
