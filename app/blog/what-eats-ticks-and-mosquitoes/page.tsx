import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import FreshnessStamp from '@/components/FreshnessStamp'
import AuthorByline from '@/components/AuthorByline'
import TopPick from '@/components/TopPick'
import StickyBuyBar from '@/components/StickyBuyBar'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'
import { tagForSlug } from '@/lib/amazon-clusters'

const SLUG = 'what-eats-ticks-and-mosquitoes'
const DATE = '2026-07-12'
const UPDATED = '2026-07-12'
const TITLE = 'What Eats Ticks and Mosquitoes? Predators Ranked (Ontario)'
const META_TITLE = 'What Eats Ticks and Mosquitoes? Predators Ranked'

const FAQS = [
  {
    question: 'What animals eat mosquitoes?',
    answer: 'Dragonflies and their aquatic larvae are the most effective mosquito predators, eating both larvae in water and adults in the air. Other mosquito eaters include bats, purple martins and swallows, many songbirds, frogs and toads, spiders, and fish such as mosquitofish and goldfish that eat larvae in standing water. Predatory diving beetles and damselfly larvae also feed on mosquito larvae. No single one of these controls a yard on its own, but together they keep wild populations in check.',
  },
  {
    question: 'What animals eat ticks?',
    answer: 'Ticks are eaten by opossums, guinea fowl, chickens and ducks, wild turkeys, some ground-feeding birds, frogs and lizards, ants and ground beetles, and parasitic wasps. Beneficial nematodes and the fungus Metarhizium attack ticks in the soil. Guinea fowl are the standout tick predator for property owners, but they are loud and need rural space. None of these eliminates every tick, which is why yard habitat control and barrier treatment still matter.',
  },
  {
    question: 'Do opossums eat ticks?',
    answer: 'Opossums do eat some ticks while grooming, and a widely shared 2009 study estimated a single opossum could destroy thousands of ticks per season. However, a 2021 follow-up study failed to find ticks in opossum stomachs and challenged the "90 percent" claim. The honest takeaway: opossums are net-beneficial backyard neighbours and remove some ticks, but they are not the tick vacuum the internet suggests. Do not rely on them as your only tick control.',
  },
  {
    question: 'Do guinea fowl really control ticks?',
    answer: 'Yes, more than most animals. Guinea fowl actively forage across lawns and field edges eating ticks and insects, and rural owners often report noticeably fewer ticks. The catches: they are very loud, roam widely, need acreage and predator-safe housing, and only patrol where they walk, so they do little for shaded borders or leaf litter they avoid. They are a rural tool, not a suburban or patio solution.',
  },
  {
    question: 'Do bats and purple martins eat enough mosquitoes to matter?',
    answer: 'Not as much as marketing suggests. Bats are voracious insect eaters, but studies of wild diets show mosquitoes make up only a small fraction of what they catch, since bats prefer larger, higher-calorie insects like moths and beetles. Purple martins are famous for mosquito control, yet research shows mosquitoes are a tiny part of their diet too. Bat houses and martin houses are great for wildlife, but they will not clear a backyard of mosquitoes.',
  },
  {
    question: 'What eats mosquito larvae in water?',
    answer: 'In standing water, mosquito larvae are eaten by dragonfly and damselfly nymphs, predatory diving beetles, backswimmers, tadpoles, and fish such as mosquitofish (Gambusia), goldfish, and koi. This is why a stocked pond rarely breeds mosquitoes while a neglected bucket or clogged gutter does. Removing standing water, or stocking a permanent water feature with fish, is one of the most effective natural mosquito controls you can do at home.',
  },
  {
    question: 'Can I control ticks and mosquitoes with predators alone?',
    answer: 'No. Predators help reduce wild populations, but no backyard has enough of them to protect people and pets on their own. Mosquitoes and ticks reproduce far faster than predators consume them, and neighbouring properties constantly restock your yard. The realistic plan combines habitat control (short grass, no standing water, cleared leaf litter), personal protection, and a targeted barrier treatment for the edges where ticks quest and mosquitoes rest.',
  },
  {
    question: 'What is the single most effective natural mosquito control?',
    answer: 'Eliminating standing water. No predator matches simply denying mosquitoes a place to lay eggs, since a female needs only a bottle cap of water to breed. Empty birdbaths and buckets weekly, unclog gutters, and treat water you cannot drain with BTI (Bti, a mosquito-specific bacteria) dunks. Support natural predators like dragonflies and frogs by keeping a clean water feature, and reserve barrier spray for the shaded resting zones adults use.',
  },
  {
    question: 'Do chickens and guinea fowl eat ticks?',
    answer: 'Yes — both eat ticks, but guinea fowl are far more effective. Guinea fowl actively patrol lawns and field edges hunting ticks and insects, while chickens eat ticks more opportunistically as they scratch and forage. The catch is the same for both: they only clear ticks where they walk, skip the shaded borders and leaf litter ticks prefer, and need rural space. They help on acreage but are no substitute for treating tick-prone edges.',
  },
  {
    question: 'Do dragonflies eat mosquitoes?',
    answer: 'Yes — dragonflies are among the best natural mosquito predators. Their aquatic nymphs devour mosquito larvae underwater, and the adults hawk flying mosquitoes out of the air, earning the nickname "mosquito hawk." The limitation is that you cannot buy or release them; you can only attract them with a clean pond or rain garden. Even a healthy dragonfly population will not fully clear a yard, since mosquitoes breed and drift in faster than they are eaten.',
  },
  {
    question: 'How many mosquitoes does a bat eat?',
    answer: 'Far fewer than the popular claim suggests. The famous "a bat eats 1,000 mosquitoes an hour" figure came from a lab test with no other prey available — not real-world feeding. Wild-diet studies show mosquitoes make up only a small fraction of what bats catch, since they prefer larger, higher-calorie moths and beetles. Bats are valuable to support, but a bat house will not clear your yard of mosquitoes.',
  },
  {
    question: 'Do robins and wild turkeys eat ticks?',
    answer: 'Both eat some ticks, but neither is a reliable control. Wild turkeys and other ground-foraging birds peck up ticks as they feed, yet turkeys can also carry ticks onto a property, so the net benefit is minor. Robins and similar songbirds eat insects including the occasional tick, but ticks are a tiny part of their diet — and birds can actually spread ticks between areas. Treat them as background help, not a tick-control plan.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'What eats mosquitoes and ticks? Dragonflies, bats, opossums, guinea fowl, frogs, fish and nematodes ranked by how well they really control a yard — plus an honest look at what actually works.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

const AMZ_TAG = tagForSlug('what-eats-ticks-and-mosquitoes')

export default function WhatEatsTicksAndMosquitoesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'What eats mosquitoes and ticks, and how effective each predator really is for yard control.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'What Eats Ticks and Mosquitoes?', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">What Eats Ticks and Mosquitoes?</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Every predator that eats mosquitoes and ticks — ranked by how much they actually reduce the bugs in a real Ontario backyard.</p>
          <div className="mt-4"><FreshnessStamp date={UPDATED} tone="dark" /></div>
        </div>
      </section>

      {/* Quick Answer — AI-extraction capsule */}
      <section className="bg-white pt-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-base text-gray-800 leading-relaxed">
              <strong>No single animal will clear your yard, but many predators eat them.</strong> Mosquitoes are eaten by dragonflies, bats, purple martins, songbirds, frogs, and fish such as mosquitofish. Ticks are eaten by opossums, guinea fowl, chickens, wild turkeys, frogs, and some birds. Beneficial nematodes attack ticks in the soil. Together these keep wild numbers down, but none removes enough on its own to protect people and pets.
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>Dragonflies and damselflies eat mosquito larvae in water and adults in flight, but you cannot &ldquo;install&rdquo; them.</li>
              <li>Mosquitofish, goldfish, and koi eat mosquito larvae &mdash; but only in permanent water, and they do nothing for adults or dry yards.</li>
              <li>Guinea fowl eat ticks well on acreage, though they roam widely and skip shaded borders.</li>
              <li>The popular claim that opossums eat 90% of ticks was challenged by a 2021 study, though they remain net-helpful.</li>
              <li>Bats and purple martins eat very few mosquitoes &mdash; mosquitoes are a tiny share of their diet, contrary to marketing.</li>
              <li>Beneficial nematodes attack tick larvae and nymphs in the soil, but field results are patchy and need frequent reapplication.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control &middot; 150+ five-star Google reviews</p>
          </div>
        </div>
      </section>

      {/* Predator ranking table */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">Predators of Ticks &amp; Mosquitoes, Ranked for Real Yard Control</h2>
          <div className="rounded-xl border border-gray-200 overflow-x-auto overflow-x-auto">
            <table className="w-full text-sm min-w-[640px]">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-3 py-2 text-left">Predator</th>
                  <th className="px-3 py-2 text-left">Eats</th>
                  <th className="px-3 py-2 text-left">What it eats</th>
                  <th className="px-3 py-2 text-left">Real-world effectiveness</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Dragonflies & damselflies', 'Mosquitoes', 'Larvae in water + adults in flight', 'High — but you cannot "install" them; need clean water nearby'],
                  ['Mosquitofish / goldfish / koi', 'Mosquitoes', 'Larvae in ponds & standing water', 'High in permanent water only; useless for adults or dry yards'],
                  ['Guinea fowl', 'Ticks', 'Ticks & insects across lawns and edges', 'Good on acreage; loud, roam widely, skip shaded borders'],
                  ['Beneficial nematodes', 'Ticks', 'Tick larvae & nymphs in soil', 'Promising, soil-applied; patchy field results, reapply often'],
                  ['Opossums', 'Ticks', 'Ticks removed during grooming', 'Overrated — 2021 study challenged the "90%" claim; still net-helpful'],
                  ['Frogs, toads & tadpoles', 'Both', 'Mosquito larvae, adults & some ticks', 'Local help near water; modest overall'],
                  ['Chickens & ducks', 'Both', 'Ticks, larvae, mosquito pupae in water', 'Modest; only where they forage, not near patios'],
                  ['Wild turkeys', 'Ticks', 'Ticks & ground insects', 'Minor; can also carry ticks into a property'],
                  ['Bats', 'Mosquitoes', 'Flying insects (mostly moths/beetles)', 'Overstated — mosquitoes are a tiny share of their diet'],
                  ['Purple martins & swallows', 'Mosquitoes', 'Flying insects', 'Marketing myth for mosquitoes; eat very few'],
                  ['Spiders, ants & ground beetles', 'Both', 'Adult mosquitoes, tick eggs & larvae', 'Incidental background control; never enough alone'],
                ].map(([predator, target, diet, effect]) => (
                  <tr key={predator} className="border-t border-gray-100 align-top">
                    <td className="px-3 py-2 font-semibold text-brand-800">{predator}</td>
                    <td className="px-3 py-2 text-gray-700">{target}</td>
                    <td className="px-3 py-2 text-gray-700">{diet}</td>
                    <td className="px-3 py-2 text-gray-700">{effect}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">Mosquito and tick biology per the <a href="https://www.cdc.gov/mosquitoes/" target="_blank" rel="noopener" className="underline hover:text-brand-700">U.S. Centers for Disease Control and Prevention (CDC) — Mosquitoes</a> and <a href="https://www.cdc.gov/ticks/" target="_blank" rel="noopener" className="underline hover:text-brand-700">CDC — Ticks</a>.</p>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AffiliateDisclosure />
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />
          <h2>What Eats Mosquitoes?</h2>
          <p>Mosquitoes sit near the bottom of the food chain, so plenty of animals eat them — in both their aquatic larval stage and as flying adults. The problem is scale. A single female mosquito (the biters are always females) can lay 100 to 300 eggs at a time and produce several generations a summer. Predators simply cannot keep up with that math in a small yard, which is why &ldquo;nature will handle it&rdquo; rarely holds up on a real patio in July.</p>
          <p>Here are the mosquito eaters that matter most, from most useful to most overhyped:</p>
          <ul>
            <li><strong>Dragonflies and damselflies</strong> — the genuine champions. Their aquatic nymphs devour mosquito larvae underwater, and the adults hawk mosquitoes out of the air (an adult dragonfly is nicknamed the &ldquo;mosquito hawk&rdquo; for good reason). You cannot buy or release them, but a clean pond or rain garden attracts them.</li>
            <li><strong>Fish</strong> — mosquitofish (<em>Gambusia</em>), goldfish, and koi strip larvae out of standing water. A stocked, aerated pond almost never breeds mosquitoes, while a forgotten bucket does. Note that <em>Gambusia</em> are not native to Ontario and should never be released into wild waterways.</li>
            <li><strong>Frogs, toads, and tadpoles</strong> — tadpoles eat some larvae and adult frogs snap up flying adults, though their impact is local and modest.</li>
            <li><strong>Predatory aquatic insects</strong> — diving beetles, backswimmers, and damselfly nymphs all feed on larvae in the same water mosquitoes breed in.</li>
            <li><strong>Bats</strong> — often marketed as a mosquito solution, but wild-diet studies consistently show mosquitoes are only a small fraction of what bats eat. They prefer bigger, higher-calorie moths and beetles. Bats are wonderful to support; just do not expect a bat house to clear your yard.</li>
            <li><strong>Purple martins and swallows</strong> — the same story. Purple martins are famous for &ldquo;eating 2,000 mosquitoes a day,&rdquo; a claim traced back to a misused study. Research on their actual diet finds mosquitoes are a tiny part of it.</li>
          </ul>
          <p>Worth flagging one case of mistaken identity, because the nickname causes it: the long-legged insect most Ontarians see bouncing off a porch light is a crane fly, not a dragonfly, and it eats no mosquitoes at any life stage. <Link href="/blog/mosquito-hawk-explained">Our mosquito hawk explainer</Link> untangles which insect the name actually refers to.</p>

          <h2>What Eats Ticks?</h2>
          <p>Ticks have fewer natural enemies than mosquitoes, partly because they spend most of their lives hidden in leaf litter and grass rather than flying around. The animals that do eat them tend to be ground foragers and grooming mammals.</p>
          <ul>
            <li><strong>Guinea fowl</strong> — the most effective tick predator you can actually keep. A flock patrols lawns and field edges eating ticks and insects, and many rural owners swear by them. The trade-offs are real: they are extremely loud, they wander, they need acreage plus predator-proof housing, and they only clear ticks where they choose to walk — not the damp shaded borders ticks love most.</li>
            <li><strong>Chickens and ducks</strong> — eat ticks and, near water, mosquito larvae and pupae. Helpful in the areas they forage, but you would not want them foraging on your entertaining patio.</li>
            <li><strong>Opossums</strong> — the internet loves them, and there is some truth here: opossums groom fastidiously and eat ticks that latch onto them. A frequently cited 2009 study estimated one opossum could kill thousands of ticks a season. But an honest guide has to add the caveat: a 2021 study looked for ticks inside wild opossum stomachs and found essentially none, casting doubt on the tick-vacuum reputation. Opossums are still good neighbours to have — they just are not a tick-control plan.</li>
            <li><strong>Wild turkeys and ground birds</strong> — peck up ticks while foraging, but turkeys can also transport ticks onto a property, so the net effect is minor.</li>
            <li><strong>Beneficial nematodes and fungi</strong> — microscopic <em>Steinernema</em> nematodes and the fungus <em>Metarhizium</em> attack ticks in the soil. This is an emerging, chemical-free approach that shows promise in trials, though field results are still patchy and treatments must be reapplied. If you want to try it, live nematodes are sold for lawn application and watered into the soil where ticks overwinter: <BuyLink tag={AMZ_TAG} search="beneficial nematodes lawn">Check price on Amazon.ca &rarr;</BuyLink></li>
            <li><strong>Ants, ground beetles, and parasitic wasps</strong> — provide a quiet background level of tick-egg and larva predation that you will never notice but that helps hold wild numbers down.</li>
          </ul>

          <TopPick tag={AMZ_TAG}
            label="Best Natural Tick Control You Can Actually Buy"
            name="Beneficial Nematodes (live, lawn-applied)"
            blurb="If you want to recruit a real predator into your soil, live Steinernema nematodes are the one entry on this list you can order and apply yourself. Watered into shaded lawn edges and leaf-litter borders, they hunt tick larvae and nymphs where they overwinter. Results are patchy and need reapplication, so treat them as a chemical-free supplement to habitat control — not a standalone fix."
            search="beneficial nematodes lawn"
            score={7.2}
            pros={['Chemical-free, kid- and pet-safe', 'Targets ticks in the soil, where other predators miss', 'Simple to water into the lawn']}
            cons={['Field results are inconsistent', 'Live product — apply quickly, reapply often', 'Does nothing for adult mosquitoes']}
          />

          <aside aria-label="Professional mosquito and tick control" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">When nature needs a hand</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">Predators thin the wild population, but they cannot protect a family barbecue. BuzzSkito&rsquo;s licensed barrier treatment covers the exact shaded edges where mosquitoes rest and ticks quest — from $99, backed by 150+ five-star reviews across 19 GTA cities.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/free-yard-assessment" className="btn-primary-sm">Get a Free Quote →</Link>
              <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
            </div>
          </aside>

          <h2>The Honest Truth: Predators Alone Won&rsquo;t Clear a Yard</h2>
          <p>It would be nice if hanging a bat house or welcoming an opossum solved the problem. It does not, and it is worth being clear about why:</p>
          <ol>
            <li><strong>The math is lopsided.</strong> Mosquitoes and ticks reproduce far faster than any backyard predator consumes them. Predators are a rounding error against a female mosquito&rsquo;s hundreds of eggs.</li>
            <li><strong>Your neighbours restock the supply.</strong> Even if your yard were predator-rich, mosquitoes drift in from properties nearby and wildlife carries ticks across fence lines every day.</li>
            <li><strong>The most-hyped predators eat the fewest bugs.</strong> Bats and purple martins — the two animals most often sold as mosquito control — are exactly the ones the science shows eat very few mosquitoes.</li>
            <li><strong>Coverage is spotty.</strong> Guinea fowl skip the shaded borders, fish only work in standing water, and opossums patrol wherever they please, not where you sit.</li>
          </ol>
          <p>Encouraging predators is still worthwhile — it is good for biodiversity and it trims the baseline. But treat it as one layer, not the whole plan.</p>

          <h2>What Actually Works: A Layered Plan</h2>
          <p>The realistic way to enjoy an Ontario backyard combines habitat control, personal protection, and targeted treatment. Predators are a bonus layer on top.</p>
          <ol>
            <li><strong>Remove standing water.</strong> This does more than any predator can, because it stops mosquitoes from being produced at all rather than removing a fraction of the adults after they emerge. A female mosquito needs only a bottle cap of water. Empty birdbaths, buckets, toys, and plant saucers weekly, and unclog your gutters. For water you cannot drain, drop in BTI (Bti, a mosquito-specific bacterial larvicide) dunks.</li>
            <li><strong>Deny ticks their habitat.</strong> Mow to 3–4 inches, clear leaf litter at yard edges, and keep a dry wood-chip or gravel strip between lawn and any woods or tall grass — ticks avoid crossing it.</li>
            <li><strong>Invite the good predators.</strong> A clean, stocked or aerated water feature brings dragonflies and frogs; native plantings support birds and beneficial insects.</li>
            <li><strong>Protect people directly.</strong> Use an approved repellent (DEET, picaridin/icaridin, or oil of lemon eucalyptus), tuck pants into socks in tick country, and treat clothing and footwear with permethrin.</li>
            <li><strong>Treat the edges.</strong> A professional barrier spray targets the shaded borders and leaf litter where adult mosquitoes rest and ticks quest — the zones predators and habitat work miss. See our guide to the <Link href="/blog/best-tick-repellent-yard-canada">best tick repellent for a Canadian yard</Link>, or let <Link href="/mosquito-control">BuzzSkito&rsquo;s mosquito and tick control</Link> handle it for you.</li>
          </ol>
          <p>Do these together and you get what no predator can deliver on its own: a yard you can actually use from May through September.</p>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/best-tick-repellent-yard-canada">Best Tick Repellent for Your Yard (Canada)</Link></li>
            <li><Link href="/mosquito-control">BuzzSkito Professional Mosquito Control Service</Link></li>
            <li><Link href="/tick-control">BuzzSkito Tick Control Service</Link></li>
            <li><Link href="/free-yard-assessment">Book a Free Yard Assessment</Link></li>
          </ul>
        <h2>Frequently Asked Questions</h2>
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

        </div>
      </article>

      <StickyBuyBar tag={AMZ_TAG} name="Beneficial nematodes (lawn-applied)" search="beneficial nematodes lawn" label="The predator you can buy" />

      <CTASection heading="Let Nature Help — But Cover the Gaps" subtext="Predators thin the wild population; a barrier spray protects the yard you actually use. From $99. Mosquitoes and ticks." variant="dark" />
    </>
  )
}
