// (next/link and BUSINESS were used by the quote buttons removed in Oct 2026)

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
        <p className="text-sm leading-relaxed text-gray-700">
          BuzzSkito is a <strong>mosquito and tick</strong> company in the GTA, so
          these reviews come out of using this equipment on real properties rather
          than unboxing it for a photo. No brand pays for a place in these guides.
        </p>
        {/* Oct 2026, owner's decision: the quote pitch and its buttons were removed from article
            pages. Readers here are national and US; the article now ends with related guides
            (components/ReadNext.tsx), which carries the one quiet link to the quote form. */}
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
      <p className="text-sm leading-relaxed text-gray-700">
        BuzzSkito is a <strong>mosquito and tick</strong> company — that is the only
        thing we spray. We publish independent research on the rest because our
        customers keep asking, and because nobody else in Canada was testing this
        gear properly. No brand pays for a place in these guides.
      </p>
      {/* Oct 2026, owner's decision: the quote pitch and its buttons were removed from article
          pages (see the note in the equipment variant above). */}
    </aside>
  )
}
