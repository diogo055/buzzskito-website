import Link from 'next/link'

// Inline CTA for embedding inside blog post bodies. Different visual from
// the floating StickyRiskCTA — designed to sit between content sections
// without competing with the article narrative.
export default function InlineYardRiskCTA({
  variant = 'amber',
  pretext,
}: {
  variant?: 'amber' | 'emerald' | 'navy'
  pretext?: string
}) {
  const styles = {
    amber:   { bg: 'bg-gradient-to-br from-amber-50 to-white',   border: 'border-amber-300',   accent: 'text-amber-700',   button: 'bg-amber-500 hover:bg-amber-400'   },
    emerald: { bg: 'bg-gradient-to-br from-emerald-50 to-white', border: 'border-emerald-300', accent: 'text-emerald-700', button: 'bg-emerald-500 hover:bg-emerald-400' },
    navy:    { bg: 'bg-gradient-to-br from-brand-900 to-brand-950 text-white', border: 'border-brand-700', accent: 'text-amber-400', button: 'bg-amber-500 hover:bg-amber-400' },
  }[variant]

  return (
    <aside className={`not-prose my-8 rounded-2xl border-2 ${styles.bg} ${styles.border} p-6 sm:p-7 shadow-sm`}>
      <p className={`text-xs font-extrabold ${styles.accent} uppercase tracking-widest mb-2`}>
        {pretext || 'Free 60-second tool · No obligation'}
      </p>
      <h3 className={`text-xl sm:text-2xl font-extrabold ${variant === 'navy' ? 'text-white' : 'text-brand-900'} mb-2 leading-tight`}>
        Wondering how YOUR specific yard scores?
      </h3>
      <p className={`text-sm ${variant === 'navy' ? 'text-brand-200' : 'text-gray-700'} mb-4 leading-relaxed`}>
        Enter your GTA address and get an instant 1-100 mosquito &amp; tick risk score for your property — based on your neighbourhood&rsquo;s actual pressure data, water sources nearby, lot size, and family situation. Free custom report emailed to you in 60 seconds.
      </p>
      <Link
        href="/yard-risk-report"
        className={`inline-block ${styles.button} text-white font-extrabold px-6 py-3 rounded-full text-sm sm:text-base shadow-lg transition-colors`}
      >
        Get My Free Yard Risk Score →
      </Link>
      <p className={`text-[11px] ${variant === 'navy' ? 'text-brand-300' : 'text-gray-500'} mt-3`}>
        🔒 Used by 129 five-star GTA homeowners · No credit card · Service area only
      </p>
    </aside>
  )
}
