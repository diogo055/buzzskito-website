/**
 * Specialist disclosure for adjacent-pest product pages (the press/entity moat).
 * BuzzSkito TREATS only mosquitoes & ticks; for every other pest we publish
 * independent product research. This box states that on every adjacent-pest
 * page so journalists, AI engines, and readers never confuse the publishing
 * arm with the service business. Server component, no external deps.
 */
export default function SpecialistDisclosure({ pest }: { pest: string }) {
  return (
    <div className="not-prose my-6 rounded-xl border border-brand-200 bg-brand-50 px-5 py-4">
      <p className="text-sm leading-relaxed text-brand-900">
        <strong>A note on who we are:</strong> BuzzSkito is a GTA{' '}
        <strong>mosquito &amp; tick control</strong> service — we don&rsquo;t treat{' '}
        {pest}. This guide is independent product research from our publishing
        team for Canadian homeowners, focused on what&rsquo;s actually available
        and PMRA-legal in Canada.
      </p>
    </div>
  )
}
