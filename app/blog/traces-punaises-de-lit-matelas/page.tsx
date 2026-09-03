import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import SpecialistDisclosure from '@/components/SpecialistDisclosure'
import AwardRow from '@/components/AwardRow'
import StickyBuyBar from '@/components/StickyBuyBar'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import CTASection from '@/components/CTASection'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'traces-punaises-de-lit-matelas'
const DATE = '2026-07-30'
const UPDATED = '2026-07-30'
// FRENCH BEACHHEAD PAGE — the only fr-CA page on the site. Deliberately targets the
// mid-tail ("trace punaise de lit matelas"), not the "punaise de lit" head, which is
// held by Quebec government and public-health portals.
//
// LANGUAGE HANDLING: the root layout owns <html lang="en-CA"> and Next.js gives a
// route no way to override it, so the page content is wrapped in <div lang="fr-CA">
// (the correct HTML for a foreign-language section), og:locale is overridden to
// fr_CA, and the BlogPosting inLanguage is overridden to fr-CA. The site header and
// footer stay English — accepted, and the reason this is ONE page and not a line.
// Re-evaluate after 90 days of data before writing a second French page.
// SERP title 37 chars.
const TITLE = 'Traces de punaises de lit sur un matelas — lire les points noirs, les taches et les mues avant d’acheter quoi que ce soit'
const META_TITLE = 'Traces de punaises de lit sur matelas'

const FAQS = [
  {
    question: 'À quoi ressemblent les traces de punaises de lit sur un matelas ?',
    answer: 'Il y a quatre traces à connaître, et elles ne se valent pas. Les déjections sont de petits points noirs ou brun foncé, comme la pointe d’un feutre fin, alignés le long des coutures et du passepoil ; c’est la trace la plus fréquente et la plus fiable. Les taches de sang sont des marques rouille ou brun-rouge, souvent floues, laissées quand une punaise gorgée est écrasée pendant le sommeil. Les mues sont des enveloppes vides, papier, à la forme exacte d’une punaise mais creuses. Les œufs sont blanc nacré, d’environ 1 mm, collés dans une fente ou une couture, et ils ne s’enlèvent pas d’un coup d’ongle. Trouver l’une de ces quatre traces vaut plus que n’importe quelle photo de piqûre.',
  },
  {
    question: 'Comment savoir si un point noir est une déjection de punaise de lit ?',
    answer: 'Le test du coton humide règle la question en quelques secondes. Passez un coton-tige légèrement humide sur le point : une déjection de punaise de lit bave et laisse une traînée brun-rouille, parce qu’il s’agit de sang digéré. De la saleté reste sèche et s’efface en poussière ; une moisissure ne bave pas de cette couleur ; une tache de teinture ne se déplace pas du tout. Faites le test sur un drap blanc plutôt que directement sur le matelas si vous voulez voir la couleur clairement. Un point qui bave brun-rouille dans une couture de matelas est une preuve, pas une hypothèse.',
  },
  {
    question: 'Où faut-il regarder exactement sur un matelas ?',
    answer: 'Dans cet ordre, parce que les punaises se concentrent près de la source de repas et se glissent dans le plus étroit d’abord : le passepoil et les coutures des quatre côtés ; les plis, les boutons et l’étiquette ; puis les coins et le cadre du sommier, qui est presque toujours plus infesté que le matelas lui-même ; puis les jointures, les vis et les tubes creux du cadre de lit ; puis l’arrière de la tête de lit, surtout là où elle touche le mur ; puis la plinthe derrière le lit. Utilisez une lampe de poche à faisceau étroit tenue presque à plat contre le tissu : l’angle rasant projette une ombre qui rend visible un insecte d’un millimètre qu’un plafonnier écrase complètement.',
  },
  {
    question: 'Est-ce que je dois jeter mon matelas ?',
    answer: 'Presque jamais, et c’est l’erreur la plus coûteuse de ce dossier. Jeter le matelas ne supprime pas la population : les punaises vivent aussi dans le sommier, le cadre, la tête de lit et les plinthes, si bien qu’un matelas neuf placé dans la même chambre est réinfesté en quelques jours. Le transporter dans un couloir ou une cage d’escalier répand en plus le problème chez les voisins. La solution standard est de traiter le matelas puis de l’enfermer dans une housse anti-punaises à fermeture éclair : ce qui reste à l’intérieur y est piégé, et vous obtenez en prime une surface lisse et blanche où la moindre trace devient visible.',
  },
  {
    question: 'Les traces prouvent-elles que l’infestation est ancienne ?',
    answer: 'Elles disent quelque chose de plus utile que « ancienne » ou « récente » : elles disent qu’il y a eu de l’activité à cet endroit. Les mues sont particulièrement parlantes, parce qu’une punaise mue cinq fois avant d’être adulte : chaque insecte laisse donc cinq enveloppes, et les mues sont souvent plus nombreuses que les punaises vivantes. Trouver des œufs ou des mues signifie que des punaises se sont reproduites sur place, et non qu’une seule est arrivée dans une valise. Attention toutefois : les traces persistent après un traitement réussi. Un semis de vieilles mues ne prouve pas à lui seul une activité en cours — c’est le rôle des pièges intercepteurs, qui comptent ce qui circule maintenant.',
  },
  {
    question: 'Comment confirmer sans démonter tout le lit ?',
    answer: 'Placez des pièges intercepteurs sous les quatre pieds du lit, écartez le lit du mur de quelques centimètres et faites en sorte qu’aucune literie ne touche le sol. À partir de là, tout insecte qui circule entre le sol et le lit tombe dans la coupelle et ne peut plus en ressortir, y compris les jeunes stades presque transparents que personne ne repère à l’œil nu sur un matelas. Vous lisez le résultat le matin avec une lampe de poche, pendant une quinzaine de nuits. C’est la méthode la moins pénible, elle ne demande aucun produit, et elle continue ensuite à servir de compteur pour savoir si le traitement fonctionne.',
  },
  {
    question: 'Les taches peuvent-elles être autre chose que des punaises de lit ?',
    answer: 'Oui, et c’est fréquent. Les taches jaunâtres ou brunes diffuses au centre d’un matelas sont presque toujours de la transpiration et de l’oxydation, pas des punaises — l’emplacement est le meilleur indice, car les punaises se tiennent en périphérie, dans les coutures, et non au milieu de la surface. Des taches noires poudreuses sur un matelas rangé dans un sous-sol humide sont souvent de la moisissure. De petits insectes pâles et allongés couverts de soies sont des larves de dermeste (anthrène), qui ne piquent pas et ne se nourrissent pas de sang. Et de minuscules insectes pâles et rapides dans du carton humide sont des psoques, inoffensifs. En cas de doute, une photo envoyée à un service d’identification ou à votre santé publique locale vaut mieux qu’un achat.',
  },
  {
    question: 'Est-ce qu’une housse anti-punaises suffit à régler le problème ?',
    answer: 'Non, mais elle fait deux choses qu’aucun produit chimique ne fait. Elle enferme ce qui se trouve déjà dans le matelas et le sommier, et elle transforme une surface matelassée pleine de coutures en une surface lisse et inspectable. Elle ne traite ni le cadre, ni la tête de lit, ni les plinthes, ni le fauteuil de la chambre — et c’est précisément là que se trouve souvent le gros de la population. Choisissez un modèle conçu pour les punaises de lit, avec une fermeture éclair traitée pour ne laisser aucun passage à l’extrémité, gardez-la fermée et intacte sur une longue période, et considérez-la comme la pièce de confinement d’un plan, pas comme le plan.',
  },
  {
    question: 'Quels produits sont légaux au Canada contre les punaises de lit ?',
    answer: 'Au Canada, tout pesticide vendu ou utilisé doit être homologué par l’Agence de réglementation de la lutte antiparasitaire (ARLA) de Santé Canada et porter un numéro d’homologation (PCP) sur son étiquette. C’est la vérification à faire avant tout achat, parce qu’une bonne part des conseils qu’on trouve en ligne vise le marché américain et recommande des produits qui ne sont pas homologués ici. Les forums conseillent régulièrement d’importer des concentrés professionnels américains : ce n’est pas légal, ces produits peuvent être retenus à la frontière, et plusieurs reposent sur la chimie pyréthrinoïde à laquelle de nombreuses populations de punaises résistent déjà. Le Québec applique en plus son propre Code de gestion des pesticides. L’étiquette fait foi de loi : elle prime sur tout conseil trouvé en ligne, y compris celui-ci.',
  },
  {
    question: 'Faut-il appeler un professionnel dès qu’on trouve des traces ?',
    answer: 'Pas automatiquement, mais soyez lucide sur le point de bascule. Un seul lit, dans une seule pièce, repéré tôt, est un chantier que l’on peut mener soi-même avec des housses, des pièges intercepteurs, un nettoyeur vapeur et un produit homologué appliqué selon un calendrier plutôt qu’une seule fois. Appelez un exterminateur titulaire d’un permis dès que des punaises apparaissent dans plus d’une pièce, dès que vous êtes en appartement ou en copropriété — où les logements voisins réalimentent le problème et où seul un traitement coordonné tient —, si une personne du foyer est âgée, immunodéprimée ou incapable de faire la préparation exigée, ou si vous avez déjà mené deux cycles complets sans résultat. Acheter produit après produit coûte souvent plus cher qu’un traitement.',
  },
  {
    question: 'BuzzSkito traite-t-elle les punaises de lit ?',
    answer: 'Non. BuzzSkito est une entreprise titulaire d’un permis en contrôle des moustiques et des tiques, établie à Mississauga et desservant 19 villes de la région du Grand Toronto ; les moustiques et les tiques sont les seuls organismes nuisibles que nous traitons. Cette page est une recherche indépendante publiée par notre équipe de publication pour les ménages canadiens : nous n’avons donc aucun service de punaises de lit à vous vendre, et c’est précisément ce qui nous permet de vous dire quand il ne faut rien acheter du tout.',
  },
]

const baseMetadata = buildMetadata({
  title: META_TITLE,
  description: 'Traces de punaises de lit sur un matelas : comment distinguer déjections, taches de sang, mues et œufs — et quoi faire avant d’acheter un produit.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

// The shared builder hardcodes en_CA (correct for every other page on the site).
// This is the one fr-CA page, so the Open Graph locale is overridden here rather
// than adding a locale parameter that 293 English pages would never pass.
export const metadata: Metadata = {
  ...baseMetadata,
  openGraph: { ...baseMetadata.openGraph, locale: 'fr_CA' },
}

const AMZ_TAG = tagForSlug(SLUG)

export default function TracesPunaisesDeLitMatelasPage() {
  return (
    <div lang="fr-CA">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...blogPostingSchema({ title: TITLE, description: 'Guide canadien indépendant pour lire les traces de punaises de lit sur un matelas : déjections, taches de sang, mues et œufs, le test du coton humide, où chercher dans quel ordre, les confusions fréquentes, ce qu’il ne faut surtout pas faire, et les règles d’homologation ARLA au Canada.', slug: SLUG, datePublished: DATE, dateModified: UPDATED }), inLanguage: 'fr-CA' }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Accueil', url: '/' }, { name: 'Blogue', url: '/blog' }, { name: 'Traces de punaises de lit sur un matelas', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Fil d’Ariane" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Accueil</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blogue</Link><span>/</span>
            <span className="text-white">Traces de punaises de lit sur un matelas</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Une piqûre ne prouve rien. Une couture de matelas, oui. Voici les quatre traces qui comptent, le test de trente secondes qui distingue une déjection d&rsquo;une salissure, et les deux achats à faire dans l&rsquo;ordre &mdash; avant de dépenser quoi que ce soit d&rsquo;autre.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" fr /></div>
        </div>
      </section>

      <AffiliateDisclosure />
      <StickyBuyBar
        tag={AMZ_TAG}
        name="Housse anti-punaises de lit pour matelas"
        search="saferest mattress encasement"
        label="À acheter en premier"
        cta="Voir le prix sur Amazon.ca"
      />

      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Réponse rapide</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">Quatre traces de punaises de lit se lisent sur un matelas, et elles se trouvent presque toujours <strong>en périphérie</strong>, dans les coutures et le passepoil, jamais au milieu de la surface : des <strong>points noirs</strong> (déjections), des <strong>taches rouille</strong> (sang), des <strong>mues</strong> creuses et papier, et des <strong>œufs blanc nacré d&rsquo;environ 1 mm</strong> collés dans les fentes. Le test décisif se fait avec un coton-tige humide : une déjection bave en traînée brun-rouille parce que c&rsquo;est du sang digéré, alors qu&rsquo;une salissure reste sèche. Et surtout : <strong>ne jetez pas le matelas</strong> &mdash; la population vit aussi dans le sommier, le cadre et les plinthes.</p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li><strong>Au centre du matelas</strong> : taches diffuses jaunâtres = transpiration, pas des punaises. L&rsquo;emplacement est le premier indice.</li>
              <li><strong>Les mues sont souvent plus nombreuses</strong> que les punaises : chaque insecte mue cinq fois avant d&rsquo;être adulte.</li>
              <li><strong>Les œufs ne s&rsquo;enlèvent pas</strong> d&rsquo;un coup d&rsquo;ongle &mdash; ils sont cimentés. C&rsquo;est ce qui les distingue d&rsquo;une poussière blanche.</li>
              <li><strong>Confirmation sans démonter le lit</strong> : des pièges intercepteurs sous les quatre pieds, lus chaque matin pendant une quinzaine de nuits.</li>
              <li><strong>Au Canada</strong> : tout pesticide doit porter un numéro d&rsquo;homologation (PCP) de l&rsquo;ARLA. Les produits américains conseillés en ligne ne sont souvent pas homologués ici.</li>
              <li><strong>N&rsquo;achetez pas</strong> de bombe aérosol totale : le brouillard se dépose sur les surfaces dégagées, pas dans les coutures où vivent les punaises.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, guides produits &middot; recherche canadienne indépendante</p>
          </div>

          <div className="not-prose rounded-xl border-l-4 border-brand-500 bg-brand-50 p-5 mb-6">
            <p className="text-xs font-extrabold uppercase tracking-wider text-brand-700 mb-2">Où se situe cette page</p>
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong>Cette page sert à identifier.</strong> Ce que vous avez trouvé sur le matelas, ce que cela signifie, et les deux ou trois gestes qui suivent.
              <br className="hidden sm:block" />
              <strong className="block mt-2">Pour le protocole de traitement complet</strong> &mdash; chaleur, vapeur, poudres dessiccantes, housses, calendrier des passages &mdash; nos guides détaillés sont rédigés en anglais : <Link href="/blog/bed-bug-control-canada-hub" className="text-emerald-700 underline font-semibold">Bed Bug Control Canada</Link> (protocole complet) et <Link href="/blog/how-to-check-for-bed-bugs-canada" className="text-emerald-700 underline font-semibold">How to Check for Bed Bugs</Link> (méthode d&rsquo;inspection).
            </p>
          </div>

          <SpecialistDisclosure pest="les punaises de lit" fr />
        </div>
      </section>

      <section className="bg-white px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">Tableau d&rsquo;identification</p>
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Ce que vous voyez &rarr; ce que c&rsquo;est &rarr; quoi faire</h2>
          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            Commencez par l&rsquo;emplacement : les punaises de lit se tiennent dans les coutures, le passepoil et les plis, jamais au milieu de la surface de couchage. Une tache centrale et une marque de couture ne racontent pas la même histoire.
          </p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm">
            <table className="min-w-[560px] w-full text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Ce que vous voyez</th>
                  <th className="px-4 py-3 text-left">Où</th>
                  <th className="px-4 py-3 text-left">Ce que c&rsquo;est probablement</th>
                  <th className="px-4 py-3 text-left">Quoi faire</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Points noirs fins, alignés</td>
                  <td className="px-4 py-3 text-gray-700">Couture, passepoil, coin de sommier</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">Déjections</strong> &mdash; la preuve la plus fiable</td>
                  <td className="px-4 py-3 text-gray-700">Test du coton humide, puis pièges intercepteurs</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Petites taches rouille ou brun-rouge</td>
                  <td className="px-4 py-3 text-gray-700">Drap, taie d&rsquo;oreiller, bord du matelas</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">Sang</strong> d&rsquo;une punaise gorgée écrasée</td>
                  <td className="px-4 py-3 text-gray-700">Inspecter les coutures du côté où vous dormez</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Enveloppes vides, forme de punaise</td>
                  <td className="px-4 py-3 text-gray-700">Coutures, jointures du cadre, tête de lit</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">Mues</strong> &mdash; cinq par insecte</td>
                  <td className="px-4 py-3 text-gray-700">Preuve de reproduction sur place, pas d&rsquo;un passage</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Grains blanc nacré d&rsquo;environ 1 mm, collés</td>
                  <td className="px-4 py-3 text-gray-700">Fentes, coutures, trous de vis</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-red-700">Œufs</strong> &mdash; ils ne s&rsquo;enlèvent pas au doigt</td>
                  <td className="px-4 py-3 text-gray-700">La vapeur, pas l&rsquo;aérosol &mdash; les sprays les manquent</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Taches jaunâtres diffuses</td>
                  <td className="px-4 py-3 text-gray-700"><strong>Au milieu</strong> de la surface</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Transpiration</strong> et oxydation</td>
                  <td className="px-4 py-3 text-gray-700">Rien &mdash; ce n&rsquo;est pas une trace de punaise</td>
                </tr>
                <tr className="border-b border-navy-50 align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Poudre noire, odeur de moisi</td>
                  <td className="px-4 py-3 text-gray-700">Matelas entreposé, sous-sol humide</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Moisissure</strong> &mdash; un problème d&rsquo;humidité</td>
                  <td className="px-4 py-3 text-gray-700">Assécher la pièce ; aucun insecticide n&rsquo;y changera rien</td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-bold text-brand-800">Petites larves allongées et velues</td>
                  <td className="px-4 py-3 text-gray-700">Sous les meubles, bord de tapis, laine</td>
                  <td className="px-4 py-3 text-gray-700"><strong className="text-emerald-700">Larves de dermeste</strong> &mdash; ne piquent pas</td>
                  <td className="px-4 py-3 text-gray-700">Aspirer et laver &mdash; aucun pesticide requis</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-5 rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-amber-900">⚠️ Le test qui tranche.</strong> Passez un coton-tige légèrement humide sur un point noir. Une déjection de punaise de lit <strong>bave en traînée brun-rouille</strong> : c&rsquo;est du sang digéré. Une salissure reste sèche, une moisissure ne donne pas cette couleur, une teinture ne bouge pas. Trente secondes, aucun achat, et vous savez.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <AwardRow tag={AMZ_TAG} fr
            heading="Quoi acheter, et dans quel ordre"
            awards={[
              {
                badge: 'À acheter en premier',
                name: 'Housse anti-punaises de lit (matelas et sommier)',
                why: 'Une housse à fermeture éclair conçue pour les punaises de lit enferme ce qui se trouve déjà à l’intérieur et prive les nouvelles venues des coutures qu’elles recherchent. L’avantage sous-estimé est ailleurs : elle remplace une surface matelassée pleine de recoins par une surface lisse et blanche où une trace devient immédiatement visible. C’est aussi l’achat qui évite le plus souvent de jeter un lit qu’il n’était pas nécessaire de perdre.',
                search: 'saferest mattress encasement',
                featured: true,
                cta: 'Voir le prix sur Amazon.ca',
                pros: ['Sauve le matelas au lieu de le remplacer', 'Rend l’inspection réellement possible ensuite', 'Aucun produit chimique — convient à une chambre d’enfant'],
                cons: ['Doit rester fermée et intacte sur une longue période', 'Ne fait rien pour le cadre, la tête de lit ni les plinthes'],
              },
              {
                badge: 'Pour confirmer',
                name: 'Pièges intercepteurs (jeu de quatre)',
                why: 'Des coupelles à double paroi placées sous chaque pied de lit. Tout ce qui circule entre le sol et le lit tombe dans la douve extérieure et ne peut plus remonter la paroi lisse — y compris les jeunes stades presque transparents, invisibles à l’œil nu sur un matelas. Vous remplacez une nuit d’angoisse par une réponse que vous lisez le matin, et les coupelles servent ensuite de compteur pendant tout le traitement.',
                search: 'bed bug interceptor traps',
                cta: 'Voir le prix sur Amazon.ca',
                pros: ['Répond en une ou deux nuits à la seule vraie question', 'Un dispositif, pas un pesticide : rien à homologuer, rien à respirer', 'Sert ensuite de tableau de bord du traitement'],
                cons: ['Ne voit que ce qui circule — pas une punaise installée dans la tête de lit', 'Exige un lit écarté du mur et une literie qui ne touche pas le sol'],
              },
              {
                badge: 'Pour voir les traces',
                name: 'Lampe de poche à faisceau étroit et loupe',
                why: 'Un plafonnier écrase tout. Une lampe tenue presque à plat contre le tissu projette une ombre bien plus longue que l’insecte lui-même, et c’est littéralement la différence entre trouver des œufs et conclure qu’il n’y a rien. La loupe sert pour les œufs et les mues, qui sont les traces que l’on repère en premier dans la majorité des cas.',
                search: 'bed bug inspection flashlight magnifier kit',
                cta: 'Voir le prix sur Amazon.ca',
                pros: ['L’objet le moins cher qui change vraiment ce que vous voyez', 'Utile aussi pour les œufs et les mues, pas seulement les insectes vivants', 'Sert longtemps après cet épisode'],
                cons: ['Ne trouve rien là où vous ne démontez pas', 'Ne remplace pas les intercepteurs sur une population faible'],
              },
              {
                badge: 'Pour les œufs',
                name: 'Nettoyeur à vapeur sèche',
                why: 'Les œufs sont cimentés dans le tissu et protégés par une coque : c’est le stade que les aérosols du commerce traitent le plus mal, et la raison pour laquelle une infestation semble vaincue puis revient une quinzaine de jours plus tard. Un passage lent le long des coutures, du passepoil et des jointures du cadre agit par la chaleur, sur les surfaces réellement touchées, sans laisser de résidu sur un lit.',
                search: 'pursteam steam cleaner',
                cta: 'Voir le prix sur Amazon.ca',
                pros: ['Agit sur les œufs des surfaces effectivement atteintes', 'Aucun résidu sur un matelas ou un lit d’enfant', 'Sert aussi pour le canapé, les rideaux et les valises'],
                cons: ['Travail lent : aller vite ne fait que déplacer les punaises', 'Surface seulement — n’atteint pas l’intérieur d’une cloison'],
              },
              {
                badge: 'Pour les fentes',
                name: 'Poudre dessiccante homologuée et souffleur',
                why: 'Les jeunes punaises se logent plus profondément que les adultes, exactement là où un fin voile de poudre bat un aérosol. Une dessiccante agit mécaniquement, en détruisant la couche cireuse qui retient l’eau de l’insecte : aucune résistance possible, et une fente traitée reste traitée. Achetez le souffleur avec la poudre — ce qui tue est un voile à peine visible, et on ne l’obtient pas en versant depuis le sac.',
                search: 'doktor doom diatomaceous earth',
                cta: 'Voir le prix sur Amazon.ca',
                pros: ['Atteint les vides qu’un liquide ne mouille jamais', 'Action mécanique : la résistance aux pyréthrinoïdes n’y change rien', 'Reste active tant qu’elle reste sèche et intacte'],
                cons: ['Lente, et inefficace si elle est appliquée en tas', 'C’est un pesticide au Canada : vérifiez le numéro d’homologation (PCP)'],
              },
            ]}
            whichToBuy={
              <>
                <strong>Vous n&rsquo;êtes pas certain qu&rsquo;il s&rsquo;agit de punaises&nbsp;?</strong> Achetez uniquement les <em>pièges intercepteurs</em> et rien d&rsquo;autre&nbsp;: une ou deux nuits règlent la question dont tout le reste dépend. <strong>C&rsquo;est confirmé, et c&rsquo;est un seul lit dans une seule pièce&nbsp;?</strong> Ajoutez la <em>housse</em> dans la semaine, matelas et sommier. <strong>Vous trouvez encore des punaises vivantes après deux semaines&nbsp;?</strong> La population est dans le cadre et la pièce, pas dans le matelas&nbsp;: c&rsquo;est là que la <em>vapeur</em> et la <em>poudre</em> justifient leur prix. <strong>Des punaises dans plus d&rsquo;une pièce&nbsp;?</strong> Arrêtez d&rsquo;acheter et faites appel à un exterminateur titulaire d&rsquo;un permis.
              </>
            }
          />
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Traces de punaises de lit &mdash; aide-mémoire</h2>
          <div className="rounded-xl border border-navy-100 overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['La trace la plus fiable', 'Les déjections : points noirs fins alignés dans les coutures'],
                  ['Le test décisif', 'Coton-tige humide : une déjection bave en traînée brun-rouille'],
                  ['Où chercher en premier', 'Passepoil et coutures du matelas, puis les coins du sommier'],
                  ['L’endroit le plus souvent oublié', 'Le sommier et l’arrière de la tête de lit contre le mur'],
                  ['Taille d’un œuf', 'Environ 1 mm, blanc nacré, cimenté — ne s’enlève pas au doigt'],
                  ['Nombre de mues par insecte', 'Cinq — d’où des enveloppes plus nombreuses que les punaises'],
                  ['Ce que les taches centrales signifient', 'Transpiration et oxydation, pas des punaises de lit'],
                  ['Confirmation la plus simple', 'Pièges intercepteurs sous les quatre pieds, lus chaque matin'],
                  ['Durée d’observation utile', 'Une quinzaine de nuits avant de conclure quoi que ce soit'],
                  ['Erreur la plus coûteuse', 'Jeter le matelas — le cadre, le sommier et les plinthes restent infestés'],
                  ['Deuxième erreur', 'Aller dormir au salon — cela étend l’infestation au canapé'],
                  ['Produit à éviter', 'Bombe aérosol totale : le brouillard n’atteint pas les coutures'],
                  ['Ce qui traite les œufs', 'La chaleur (vapeur, chambre chauffante), pas les aérosols liquides'],
                  ['Règle canadienne', 'Numéro d’homologation (PCP) de l’ARLA sur l’étiquette, sans exception'],
                  ['Produits américains conseillés en ligne', 'Souvent non homologués ici — importation illégale, aucune étiquette canadienne'],
                  ['Risque sanitaire', 'Les punaises de lit ne sont pas reconnues comme transmettant de maladies'],
                ].map(([k, v]) => (
                  <tr key={k} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-2 font-semibold text-brand-800 bg-brand-50 w-1/3">{k}</td>
                    <td className="px-4 py-2 text-gray-700">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} fr />

          <h2>Pourquoi les traces valent plus que les piqûres</h2>
          <p>La plupart des gens arrivent ici après avoir cherché des photos de piqûres, et c&rsquo;est le mauvais point de départ. Une piqûre n&rsquo;est pas une blessure&nbsp;: c&rsquo;est votre système immunitaire qui réagit à la salive de l&rsquo;insecte. La réaction dépend donc bien plus de vous que de l&rsquo;espèce &mdash; deux personnes dans le même lit infesté peuvent se réveiller avec une peau complètement différente, l&rsquo;une couverte de boutons et l&rsquo;autre indemne, et une part non négligeable des gens ne réagit jamais visiblement. Autrement dit&nbsp;: l&rsquo;absence de piqûres ne prouve rien du tout.</p>
          <p>Le matelas, lui, ne ment pas. Les punaises de lit laissent des traces physiques, durables et lisibles, et il n&rsquo;existe aucune autre explication crédible pour trois d&rsquo;entre elles. C&rsquo;est pourquoi tout inspecteur commence par le lit et non par la peau.</p>
          <p>Une précision d&rsquo;emplacement avant tout le reste, parce qu&rsquo;elle élimine à elle seule beaucoup de fausses alertes&nbsp;: <strong>les punaises de lit vivent en périphérie</strong>. Elles se glissent dans les coutures, le passepoil, les plis, l&rsquo;étiquette, les boutons, et surtout dans le sommier et le cadre &mdash; pas au milieu de la surface où vous dormez. Une grande tache jaunâtre diffuse au centre d&rsquo;un matelas est presque toujours de la transpiration.</p>

          <p className="not-prose text-xs text-gray-500 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 my-4 leading-relaxed">
            <strong className="text-gray-600">En français&nbsp;:</strong> BuzzSkito est partenaire du Programme Partenaires d&rsquo;Amazon et touche une commission sur les achats admissibles, sans frais supplémentaires pour vous. Nous ne recommandons que des articles que nous utiliserions nous-mêmes, et nous vous dirons quand il ne faut rien acheter.
          </p>
          <p className="not-prose text-sm text-gray-600 mb-1">Vérifiez la disponibilité au Canada des deux articles à acheter en premier&nbsp;:</p>
          <div className="not-prose mb-6 flex flex-wrap gap-3">
            <BuyLink tag={AMZ_TAG} search="saferest mattress encasement">Housse anti-punaises &rarr;</BuyLink>
            <BuyLink tag={AMZ_TAG} search="bed bug interceptor traps">Pièges intercepteurs &rarr;</BuyLink>
          </div>

          <h2>Les quatre traces, une par une</h2>
          <p><strong>1. Les déjections.</strong> Ce sont de petits points noirs ou brun très foncé, de la taille de la pointe d&rsquo;un feutre fin, souvent regroupés en semis ou alignés le long d&rsquo;une couture. Sur un tissu clair ils ont tendance à diffuser légèrement, comme de l&rsquo;encre sur du buvard, parce qu&rsquo;ils sont déposés à l&rsquo;état liquide. C&rsquo;est la trace la plus fréquente, la plus fiable, et celle que l&rsquo;on trouve en premier dans la majorité des cas. Le test du coton humide la confirme&nbsp;: une traînée brun-rouille signifie du sang digéré.</p>
          <p><strong>2. Les taches de sang.</strong> De petites marques rouille ou brun-rouge sur un drap, une taie d&rsquo;oreiller ou le bord d&rsquo;un matelas, souvent aux contours flous. Elles viennent d&rsquo;une punaise gorgée écrasée pendant le sommeil, ou d&rsquo;un point de piqûre qui a saigné légèrement. Prises seules, elles sont la moins spécifique des quatre traces &mdash; un saignement de nez ou une coupure produit la même chose. Prises avec des déjections dans la couture du même côté du lit, elles deviennent parlantes.</p>
          <p><strong>3. Les mues.</strong> Une punaise de lit passe par cinq stades juvéniles avant l&rsquo;âge adulte, et chaque passage exige d&rsquo;abord un repas de sang, puis une mue. Chaque insecte laisse donc <strong>cinq enveloppes</strong>, ce qui explique une chose que les gens trouvent contre-intuitive&nbsp;: les mues sont généralement plus nombreuses que les punaises vivantes, et ce sont souvent elles que l&rsquo;on repère en premier. Une mue ressemble à une punaise vidée&nbsp;: la bonne silhouette, la bonne couleur, mais creuse, papier, translucide, parfois fendue sur le dos. Elles durent longtemps &mdash; y compris après un traitement réussi.</p>
          <p><strong>4. Les œufs.</strong> Environ un millimètre, blanc nacré, en forme de très petit grain de riz, collés par petits groupes dans une fente, une couture, un trou de vis. Le test est simple&nbsp;: ils sont cimentés et ne s&rsquo;enlèvent pas d&rsquo;un coup d&rsquo;ongle, contrairement à une poussière ou à une peluche blanche. Les œufs comptent énormément pour la suite, parce que ce sont eux qui expliquent les rechutes&nbsp;: une coque cimentée résiste mal aux aérosols liquides du commerce, et la génération suivante éclôt dans une pièce où le résidu du traitement s&rsquo;est déjà estompé.</p>
          <p>Une cinquième observation, plus rare mais mentionnée par beaucoup de gens&nbsp;: une odeur douceâtre, un peu écœurante, parfois comparée à des framboises abîmées ou à de la coriandre, dans une chambre fortement infestée. C&rsquo;est un indice réel, mais tardif et très subjectif &mdash; ne comptez pas dessus pour un diagnostic précoce.</p>

          <h2>Où chercher, et dans quel ordre</h2>
          <p>Les punaises de lit ne s&rsquo;éloignent pas d&rsquo;une source de repas fiable. Leur répartition se concentre donc autour de la surface de couchage, et l&rsquo;ordre d&rsquo;inspection suit cette logique&nbsp;:</p>
          <ul>
            <li><strong>Le passepoil et les coutures du matelas</strong>, sur les quatre côtés. Passez le doigt et une lampe le long du cordon&nbsp;; utilisez une carte rigide pour écarter le pli.</li>
            <li><strong>Les plis, les boutons, l&rsquo;étiquette</strong> et la poignée latérale.</li>
            <li><strong>Le sommier</strong> &mdash; presque toujours plus infesté que le matelas, parce qu&rsquo;il offre du bois, des agrafes, un cadre et une toile de fond qu&rsquo;on ne retourne jamais. Retournez-le et regardez sous la toile aux angles.</li>
            <li><strong>Le cadre de lit</strong>&nbsp;: jointures, trous de vis, extrémités des tubes creux, dessous des lattes.</li>
            <li><strong>La tête de lit</strong>, en particulier la face arrière et l&rsquo;espace où elle touche le mur. C&rsquo;est un des endroits les plus productifs et l&rsquo;un des moins souvent regardés.</li>
            <li><strong>La plinthe derrière le lit</strong>, la prise électrique la plus proche, et le bord du tapis le long du mur.</li>
            <li><strong>La table de chevet</strong> et le fauteuil de la chambre, s&rsquo;il y en a un.</li>
          </ul>
          <p>Une seule astuce technique change tout&nbsp;: tenez la lampe <strong>presque à plat</strong> contre le tissu plutôt que perpendiculairement. L&rsquo;angle rasant projette une ombre plusieurs fois plus longue que l&rsquo;insecte ou l&rsquo;œuf, et rend visible ce qu&rsquo;un plafonnier écrase totalement.</p>

          <h2>Ce qu&rsquo;il ne faut surtout pas faire</h2>
          <p><strong>Ne jetez pas le matelas.</strong> C&rsquo;est le réflexe le plus courant et le plus coûteux. La population n&rsquo;est pas seulement dans le matelas&nbsp;: elle est dans le sommier, dans le cadre, derrière la tête de lit, dans les plinthes. Un matelas neuf dans la même chambre est réinfesté en quelques jours, et le transport de l&rsquo;ancien dans un couloir ou un ascenseur répand le problème dans l&rsquo;immeuble. Si le lit doit finir par partir, il part à la fin, pas au début.</p>
          <p><strong>N&rsquo;allez pas dormir au salon.</strong> C&rsquo;est la manière la plus fiable de transformer un problème d&rsquo;une pièce en problème de tout le logement&nbsp;: les punaises suivent le dormeur. Restez dans le lit, isolez-le correctement, et laissez les pièges compter.</p>
          <p><strong>N&rsquo;achetez pas de bombe aérosol totale.</strong> Le brouillard se dépose sur les surfaces dégagées et tournées vers le haut&nbsp;; les punaises, elles, vivent dans les coutures, les vides et le dessous des choses. Pire, la perturbation peut disperser la population vers des pièces qui étaient saines.</p>
          <p><strong>N&rsquo;utilisez pas d&rsquo;alcool à friction comme traitement.</strong> Il tue ce qu&rsquo;il mouille directement puis s&rsquo;évapore, et saturer un matelas d&rsquo;un liquide inflammable a déjà provoqué des incendies domestiques.</p>
          <p><strong>Ne comptez pas sur les huiles essentielles ni sur les appareils à ultrasons.</strong> Aucune donnée crédible ne soutient les répulsifs à ultrasons contre les insectes domestiques, punaises de lit comprises.</p>

          <h2>La règle canadienne&nbsp;: le numéro d&rsquo;homologation</h2>
          <p>Une bonne part des conseils que l&rsquo;on trouve en ligne vise le marché américain, et les produits qui y sont recommandés ne sont fréquemment pas homologués au Canada. La règle est simple et elle vaut sans exception&nbsp;: <strong>tout pesticide vendu ou utilisé au Canada doit être homologué par l&rsquo;Agence de réglementation de la lutte antiparasitaire (ARLA) de Santé Canada et porter un numéro d&rsquo;homologation (PCP) sur son étiquette.</strong></p>
          <p>Ce numéro vous apporte trois choses concrètes&nbsp;: la légalité, une étiquette canadienne dont les usages, les surfaces, les délais de réentrée et les consignes de sécurité ont été examinés ici, et la traçabilité d&rsquo;une formule connue plutôt qu&rsquo;un flacon anonyme d&rsquo;un vendeur en ligne. Ce qu&rsquo;il ne vous apporte pas, c&rsquo;est une garantie d&rsquo;efficacité&nbsp;: l&rsquo;homologation est une autorisation réglementaire, pas une note de performance. Un produit parfaitement légal peut être le mauvais outil &mdash; et il l&rsquo;est souvent.</p>
          <p>Deux vérifications avant toute commande en ligne&nbsp;: que l&rsquo;article soit <strong>vendu et expédié depuis le Canada</strong>, et que le contenant reçu porte bien un <strong>numéro d&rsquo;homologation</strong>. Les places de marché mélangent les inventaires, et une bombe étiquetée pour les États-Unis expédiée vers le nord est ici un pesticide non homologué, sans mode d&rsquo;emploi canadien derrière elle. Ajoutons que les règles provinciales se superposent aux règles fédérales&nbsp;: le Québec applique son propre Code de gestion des pesticides, et l&rsquo;Ontario limite l&rsquo;usage cosmétique extérieur à une liste de matières actives à risque réduit. Enfin, et ce n&rsquo;est pas une formule creuse&nbsp;: <strong>l&rsquo;étiquette fait foi de loi</strong>. Elle prime sur tout conseil trouvé en ligne, y compris celui-ci.</p>
          <div className="not-prose my-4">
            <BuyLink tag={AMZ_TAG} search="doktor doom diatomaceous earth">Voir les poudres dessiccantes homologuées sur Amazon.ca &rarr;</BuyLink>
          </div>

          <h2>Ce que les traces ne vous disent pas</h2>
          <p>Deux limites honnêtes, parce qu&rsquo;elles évitent des décisions coûteuses.</p>
          <p><strong>Les traces persistent après le traitement.</strong> Les mues et les déjections sèches sont durables&nbsp;; un semis de vieilles marques dans une couture ne prouve pas une activité en cours. C&rsquo;est exactement pour cette raison que les pièges intercepteurs sont si utiles&nbsp;: ils ne comptent que ce qui circule maintenant. Si vous achetez un matelas d&rsquo;occasion ou emménagez dans un logement où vous trouvez des traces, la question n&rsquo;est pas «&nbsp;y en a-t-il eu&nbsp;?&nbsp;» mais «&nbsp;y en a-t-il encore&nbsp;?&nbsp;» &mdash; et seuls des pièges répondent à celle-là.</p>
          <p><strong>L&rsquo;absence de traces ne prouve pas l&rsquo;absence de punaises.</strong> Une infestation récente, avec peu d&rsquo;individus, peut ne laisser presque rien de visible pendant des semaines, en particulier si les punaises se sont installées dans la tête de lit ou la plinthe plutôt que dans le matelas. Si les indices sont forts par ailleurs &mdash; réveils avec des marques, retour d&rsquo;un voyage, meuble récupéré &mdash; posez des pièges et observez une quinzaine de nuits avant de conclure.</p>
          <p>Un mot rassurant, enfin&nbsp;: les punaises de lit ne sont pas reconnues comme transmettant de maladies à l&rsquo;être humain. Les vrais coûts sont ailleurs &mdash; infection cutanée à force de gratter, réactions allergiques chez les personnes sensibilisées, et surtout la perte de sommeil et l&rsquo;anxiété qui accompagnent la situation. C&rsquo;est une raison d&rsquo;agir vite, pas de paniquer.</p>

          <h2>Quand appeler un professionnel</h2>
          <p>Un seul lit, dans une seule pièce, repéré tôt&nbsp;: c&rsquo;est un chantier que l&rsquo;on peut mener soi-même, avec des housses, des pièges, de la vapeur et un produit homologué appliqué selon un calendrier plutôt qu&rsquo;en une seule fois héroïque. Soyez toutefois lucide sur le point de bascule, parce qu&rsquo;acheter produit après produit finit régulièrement par coûter plus cher qu&rsquo;un traitement.</p>
          <p>Faites appel à un exterminateur titulaire d&rsquo;un permis dès que&nbsp;: des punaises vivantes apparaissent dans plus d&rsquo;une pièce&nbsp;; vous êtes en appartement ou en copropriété, où les logements voisins réalimentent le problème et où seul un traitement coordonné tient &mdash; dans la plupart des provinces canadiennes, le traitement d&rsquo;une infestation en location relève d&rsquo;ailleurs du propriétaire, et un signalement écrit et daté vous protège&nbsp;; une personne du foyer est âgée, immunodéprimée ou incapable d&rsquo;assurer la préparation exigée&nbsp;; ou vous avez déjà mené deux cycles complets sans venir à bout des punaises vivantes. Méfiez-vous de toute entreprise qui propose un traitement sans avoir inspecté le lit, le sommier, le cadre et les plinthes, et qui n&rsquo;explique pas si elle applique de la chaleur, un traitement chimique, ou les deux.</p>

          <h2>Foire aux questions</h2>
          <div className="not-prose space-y-4">
            {FAQS.map(({ question, answer }) => (
              <details key={question} className="group rounded-xl border border-navy-100 bg-white p-4">
                <summary className="cursor-pointer font-bold text-brand-900 list-none flex justify-between items-center gap-3">
                  {question}
                  <span className="text-emerald-600 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                </summary>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">{answer}</p>
              </details>
            ))}
          </div>

          <h2>Guides connexes</h2>
          <p className="text-sm text-gray-600">Nos guides détaillés sur les punaises de lit sont rédigés en anglais&nbsp;:</p>
          <ul>
            <li><Link href="/blog/bed-bug-control-canada-hub">Bed Bug Control Canada</Link> &mdash; le protocole de traitement complet</li>
            <li><Link href="/blog/how-to-check-for-bed-bugs-canada">How to Check for Bed Bugs in Canada</Link> &mdash; la méthode d&rsquo;inspection</li>
            <li><Link href="/blog/baby-bed-bugs-nymphs">Baby Bed Bugs (Nymphs)</Link> &mdash; les stades juvéniles et les confusions fréquentes</li>
            <li><Link href="/blog/how-to-kill-bed-bug-eggs-canada">How to Kill Bed Bug Eggs</Link> &mdash; pourquoi la chaleur l&rsquo;emporte sur les aérosols</li>
            <li><Link href="/blog/bed-bug-mattress-encasement-canada">Bed Bug Mattress Encasements</Link> &mdash; choisir et dimensionner une housse</li>
            <li><Link href="/blog/bed-bug-interceptor-traps-canada">Bed Bug Interceptor Traps</Link> &mdash; pose et lecture des pièges</li>
            <li><Link href="/blog/doktor-doom-sleep-tight-review-canada">Doktor Doom Sleep Tight</Link> &mdash; un aérosol homologué au Canada, examiné en détail</li>
            <li><Link href="/pest-control-cost-canada">Pest Control Cost Canada</Link> &mdash; ce que facturent les professionnels</li>
          </ul>

          <div className="not-prose mt-10 rounded-xl border border-navy-100 bg-brand-50 px-5 py-4">
            <p className="text-sm text-brand-900">
              <Link href="/pest-product-guides" className="font-bold text-emerald-700 hover:text-emerald-800 underline">Plus de recherches indépendantes sur les produits antiparasitaires au Canada &rarr;</Link>
            </p>
          </div>
        </div>
      </article>

      <CTASection
        heading="Notre vrai métier : les moustiques et les tiques"
        subtext="Nous ne traitons pas les punaises de lit. Si vous êtes dans la région du Grand Toronto et que le problème vient plutôt du jardin, c'est exactement ce que nous faisons — évaluation gratuite dans 19 villes."
      />
    </div>
  )
}
