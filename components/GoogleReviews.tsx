import { BUSINESS } from '@/lib/constants'

// Truthful Google rating badge — surfaces the real 5.0 / 150+ profile + a
// link to the live GBP reviews. NOT fabricated quotes. Connects on-page
// social proof to the Google Business Profile entity at the decision moment.
//
// Designed to sit inside CTASection (colored background), so it uses a
// translucent white card that reads on green/dark/light variants.
export default function GoogleReviews({ light = false }: { light?: boolean }) {
  const cardBg = light ? 'bg-white border border-brand-100' : 'bg-white/10 border border-white/20 backdrop-blur-sm'
  const nameText = light ? 'text-brand-900' : 'text-white'
  const subText = light ? 'text-brand-600' : 'text-brand-100'

  return (
    <a
      href={BUSINESS.googleReviewUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Read BuzzSkito's reviews on Google"
      className={`inline-flex items-center gap-3 ${cardBg} rounded-2xl px-5 py-3 transition-transform hover:scale-[1.02]`}
    >
      {/* Google "G" */}
      <svg className="w-7 h-7 shrink-0" viewBox="0 0 48 48" aria-hidden="true">
        <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"/>
        <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
        <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2c-2 1.5-4.6 2.4-7.2 2.4-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z"/>
        <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C39.9 36.2 44 30.7 44 24c0-1.3-.1-2.3-.4-3.5z"/>
      </svg>
      <div className="text-left">
        <div className="flex items-center gap-1.5">
          <span className="text-amber-400 text-lg leading-none">★★★★★</span>
          <span className={`font-extrabold text-sm ${nameText}`}>5.0</span>
        </div>
        <p className={`text-xs ${subText} leading-tight`}>
          150+ verified Google reviews · zero negative
        </p>
      </div>
    </a>
  )
}
