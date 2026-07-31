/**
 * Specialist disclosure for adjacent-pest product pages (the press/entity moat).
 * BuzzSkito TREATS only mosquitoes & ticks; for every other pest we publish
 * independent product research. This box states that on every adjacent-pest
 * page so journalists, AI engines, and readers never confuse the publishing
 * arm with the service business. Server component, no external deps.
 */
export default function SpecialistDisclosure({ pest, fr = false }: { pest: string; fr?: boolean }) {
  if (fr) {
    return (
      <div lang="fr-CA" className="not-prose my-6 rounded-xl border border-brand-200 bg-brand-50 px-5 py-4">
        <p className="text-sm leading-relaxed text-brand-900">
          <strong>Qui nous sommes :</strong> BuzzSkito est une entreprise de{' '}
          <strong>contrôle des moustiques et des tiques</strong> dans la région de
          Toronto — nous ne traitons pas {pest}. Ce guide est une recherche
          indépendante réalisée par notre équipe de publication pour les ménages
          canadiens, centrée sur ce qui est réellement offert et homologué par
          l&rsquo;ARLA au Canada.
        </p>
      </div>
    )
  }
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
