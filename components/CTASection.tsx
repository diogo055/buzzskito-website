import Link from 'next/link'
import { BUSINESS, SERVICE_SEASON } from '@/lib/constants'

interface CTASectionProps {
  heading?: string
  subtext?: string
  variant?: 'green' | 'dark' | 'light'
}

export default function CTASection({
  heading = 'Protect Your Family This Season',
  subtext = 'Get a free, no-obligation quote for mosquito and tick control at your property.',
  variant = 'green',
}: CTASectionProps) {
  const bg   = variant === 'dark' ? 'bg-brand-950' : variant === 'light' ? 'bg-brand-50' : 'bg-brand-700'
  const text = variant === 'light' ? 'text-brand-900' : 'text-white'
  const sub  = variant === 'light' ? 'text-brand-700' : 'text-brand-100'
  const btnBorder = variant === 'light'
    ? 'border-brand-700 text-brand-700 hover:bg-brand-700 hover:text-white'
    : 'border-white text-white hover:bg-white hover:text-brand-900'

  return (
    <section className={`${bg} py-16 px-4`} aria-label="Call to action">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className={`text-3xl sm:text-4xl font-extrabold ${text} mb-4`}>{heading}</h2>
        <p className={`text-lg ${sub} mb-8 max-w-xl mx-auto leading-relaxed`}>{subtext}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/free-yard-assessment"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-xl transition-colors"
          >
            Get a Free Quote
          </Link>
          <a
            href={BUSINESS.phoneHref}
            className={`inline-flex items-center justify-center gap-2 border-2 ${btnBorder} font-bold px-8 py-4 rounded-full text-lg transition-colors`}
            aria-label={`Call BuzzSkito at ${BUSINESS.phone}`}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            {BUSINESS.phone}
          </a>
        </div>
        <p className={`mt-6 text-sm ${sub} opacity-75`}>
          ✓ No contracts &nbsp;·&nbsp; ✓ Free re-spray guarantee &nbsp;·&nbsp; ✓ {SERVICE_SEASON}
        </p>
      </div>
    </section>
  )
}
