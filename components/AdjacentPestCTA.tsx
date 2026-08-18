import Link from 'next/link'
import { BUSINESS } from '@/lib/constants'

/**
 * Conversion path for the ~105 product-research posts that cover pests we do
 * NOT treat — bed bugs, rodents, roaches, wasps, stored-product pests.
 *
 * Why not BlogPostCTA: that one asks "Want this problem solved at YOUR
 * address?", which on a bed-bug guide promises a service BuzzSkito does not
 * sell. The publishing arm deliberately reviews everything and treats only
 * mosquitoes and ticks; a CTA that blurs that line trades the moat for a lead.
 *
 * So this leads with the limitation instead of hiding it. Saying plainly "this
 * isn't what we do" is both true and the more credible pitch — it earns the
 * reader's trust for the one thing we DO sell, to a person who by definition
 * owns a GTA property.
 *
 * Geographically honest too: roughly three quarters of the traffic on these
 * pages is outside Canada, so the offer is explicitly conditioned on being in
 * the GTA rather than shouted at readers who could never buy.
 */
export default function AdjacentPestCTA({
  pest = 'this pest',
  variant = 'adjacent',
}: {
  pest?: string
  /**
   * 'adjacent'  — a pest we review but do not treat (bed bugs, rodents, roaches).
   * 'equipment' — application gear we genuinely use in the field. Claiming "we
   *               don't do this" on a backpack-sprayer review would be false and
   *               would waste the strongest pitch available: the reader is
   *               pricing a $400 fogger they'd have to learn to calibrate.
   */
  variant?: 'adjacent' | 'equipment'
}) {
  if (variant === 'equipment') {
    return (
      <aside
        aria-label="About BuzzSkito"
        className="not-prose my-10 rounded-2xl border border-navy-100 bg-brand-50 p-5 sm:p-6"
      >
        <p className="text-[11px] font-extrabold uppercase tracking-widest text-brand-700 mb-2">
          Who wrote this
        </p>
        <h3 className="text-lg font-extrabold leading-tight text-brand-900 mb-2">
          This is the gear we actually run.
        </h3>
        <p className="text-sm leading-relaxed text-gray-700 mb-3">
          BuzzSkito is a <strong>mosquito and tick</strong> company in the GTA, so
          these reviews come out of using this equipment on real properties rather
          than unboxing it for a photo. No brand pays for a place in these guides.
        </p>
        <p className="text-sm leading-relaxed text-gray-700 mb-4">
          Worth knowing before you buy: a serious sprayer or fogger runs a few
          hundred dollars, plus the product, plus learning to calibrate and apply it
          safely. If you&rsquo;re in the <strong>Greater Toronto Area</strong>, a
          professional treatment starts at $99 &mdash; often less than the machine.
        </p>
        <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
          <Link
            href="/free-yard-assessment"
            className="inline-flex items-center justify-center rounded-full bg-amber-500 px-5 py-2.5 text-sm font-extrabold text-white shadow transition-colors hover:bg-amber-400"
          >
            Compare with a quote &rarr;
          </Link>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center justify-center rounded-full border border-brand-300 px-5 py-2.5 text-sm font-bold text-brand-800 transition-colors hover:bg-white"
          >
            {BUSINESS.phone}
          </a>
        </div>
      </aside>
    )
  }

  return (
    <aside
      aria-label="About BuzzSkito"
      className="not-prose my-10 rounded-2xl border border-navy-100 bg-brand-50 p-5 sm:p-6"
    >
      <p className="text-[11px] font-extrabold uppercase tracking-widest text-brand-700 mb-2">
        Who wrote this
      </p>
      <h3 className="text-lg font-extrabold leading-tight text-brand-900 mb-2">
        We research {pest}. We don&rsquo;t treat them.
      </h3>
      <p className="text-sm leading-relaxed text-gray-700 mb-3">
        BuzzSkito is a <strong>mosquito and tick</strong> company — that is the only
        thing we spray. We publish independent research on the rest because our
        customers keep asking, and because nobody else in Canada was testing this
        gear properly. No brand pays for a place in these guides.
      </p>
      <p className="text-sm leading-relaxed text-gray-700 mb-4">
        If you&rsquo;re in the <strong>Greater Toronto Area</strong> and it&rsquo;s
        your yard rather than your house that&rsquo;s the problem, that part we do
        handle &mdash; single treatments from $99, no contracts, 150+ five-star
        reviews at a 5.0 average.
      </p>
      <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
        <Link
          href="/free-yard-assessment"
          className="inline-flex items-center justify-center rounded-full bg-amber-500 px-5 py-2.5 text-sm font-extrabold text-white shadow transition-colors hover:bg-amber-400"
        >
          Get a yard quote →
        </Link>
        <a
          href={BUSINESS.phoneHref}
          className="inline-flex items-center justify-center rounded-full border border-brand-300 px-5 py-2.5 text-sm font-bold text-brand-800 transition-colors hover:bg-white"
        >
          {BUSINESS.phone}
        </a>
      </div>
    </aside>
  )
}
