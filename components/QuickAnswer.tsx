import { Icon } from '@/components/Icon'

/**
 * Quick Answer — the AI-extraction block, repackaged.
 *
 * Same semantics as the old amber warning-banner version (heading + direct
 * answer paragraph AI engines can lift verbatim), but styled as an editorial
 * callout card so it reads premium instead of "caution tape". The body
 * paragraph carries the `.speakable` class so the sitewide
 * SpeakableSpecification cssSelector actually matches real content.
 *
 * Content rules (proven AIO patterns — keep them):
 *  - First sentence = self-contained 20-25 word direct answer, bolded.
 *  - Include the brand name inside the citable sentence (ghost-citation fix).
 *  - 40-90 words total before any elaboration.
 */
export default function QuickAnswer({
  question,
  children,
  className = '',
}: {
  question: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={`py-10 px-4 bg-white ${className}`} aria-label="Quick answer">
      <div className="max-w-4xl mx-auto rounded-2xl border border-gray-200 border-l-4 border-l-amber-400 bg-white p-7 sm:p-8 shadow-sm">
        <p className="mb-2 inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-[0.18em] text-amber-600">
          <Icon name="zap" className="h-3.5 w-3.5" />
          Quick Answer
        </p>
        <h2 className="font-display text-xl sm:text-2xl font-extrabold tracking-tight text-brand-950 mb-3">{question}</h2>
        <div className="speakable text-base text-gray-800 leading-relaxed [&_strong]:text-gray-900">
          {children}
        </div>
      </div>
    </section>
  )
}
