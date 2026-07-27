import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'

const SLUG = 'what-temperature-kills-mosquitoes'
const DATE = '2026-07-16'
const TITLE = 'What Temperature Kills Mosquitoes? (Cold, Frost & Winter Explained)'

const FAQS = [
  {
    question: 'What temperature kills mosquitoes?',
    answer: 'A hard, killing frost kills active adult mosquitoes — that means sustained temperatures at or below roughly -2°C (28°F). A single light frost near 0°C (32°F) mostly stuns and immobilizes them rather than killing them outright. Larvae in water die once the water itself freezes solid. Important caveat: even a killing frost does not eliminate the local population, because mosquito eggs and hibernating adult females survive the winter and repopulate the yard in spring.',
  },
  {
    question: 'What temperature do mosquitoes die at?',
    answer: 'Active adult mosquitoes begin dying when temperatures hold below about -2°C (28°F) for a sustained period — a hard frost. They cannot survive prolonged freezing while active. However, many species do not stay active into the cold: hibernating females of Culex, Anopheles and Culiseta enter a dormant state (diapause) and can survive an entire Ontario winter in sheltered spots. So the temperature that kills an active mosquito is not the same as the temperature that ends the species locally.',
  },
  {
    question: 'At what temperature are mosquitoes inactive?',
    answer: 'Mosquitoes become inactive below about 10°C (50°F). They are cold-blooded (ectothermic), so their body temperature and metabolism track the surrounding air. Below 10°C they stop flying, stop feeding, and either seek shelter to overwinter or die off. Their activity is already slowing noticeably below 15°C (60°F) and only reaches full swing above 26°C (80°F).',
  },
  {
    question: 'Do mosquitoes die in winter?',
    answer: 'Active adult mosquitoes largely die off once Ontario winter sets in, but the species does not disappear. Mosquitoes survive winter three ways: (1) freeze-tolerant eggs laid in soil or dry containers that hatch when spring meltwater warms past 10°C; (2) hibernating adult females in a dormant diapause state, tucked into sheds, culverts, hollow logs, basements and animal burrows; and (3) overwintering larvae in some species. That is why mosquitoes reappear every May even after a deep freeze.',
  },
  {
    question: 'What temperature is too cold for mosquitoes?',
    answer: 'Anything below 10°C (50°F) is too cold for mosquitoes to function normally — they go dormant and stop biting. Below 15°C (60°F) they are already sluggish and fly poorly. In practical Ontario terms, once overnight lows are consistently under 10°C in the fall, mosquito activity collapses, and the first hard frost ends the active season.',
  },
  {
    question: 'Does frost kill mosquitoes?',
    answer: 'A hard (killing) frost kills active adult mosquitoes, but a light frost usually does not. A light frost near 0°C (32°F) tends to stun and slow them; a hard frost — sustained temperatures around -2°C (28°F) or colder — is what actually kills exposed active adults. Frost does not kill overwintering eggs or hibernating females, which are physiologically adapted to survive freezing, so frost ends the flying season without ending the population.',
  },
  {
    question: 'What temperature are mosquitoes most active at?',
    answer: 'Mosquitoes are most active and aggressive above 26°C (80°F), with peak biting and breeding through the warmest stretches of an Ontario summer (typically June and July). Activity begins to slow below 15°C (60°F) and stops below 10°C (50°F). Warm, humid, still evenings in the 20s°C are the worst for biting pressure in GTA backyards.',
  },
  {
    question: 'Can mosquitoes survive freezing temperatures?',
    answer: 'Active adult mosquitoes cannot survive prolonged freezing, but their overwintering forms can. Many mosquito eggs are freeze-tolerant and remain viable through an entire Canadian winter buried in soil or frozen in leaf litter. Hibernating female mosquitoes lower their metabolism and shelter below the frost line or in protected microclimates (basements, culverts, hollow trees), emerging when temperatures climb back above 10°C in spring.',
  },
  {
    question: 'Why do mosquitoes come back after a cold winter in Ontario?',
    answer: 'Because cold does not reach the eggs and hibernating adults where they shelter. Freeze-tolerant eggs wait in dry containers, soil and tree holes, and hatch within days once spring rain and meltwater warm past roughly 10°C. Diapausing females wake from sheltered spots, take a blood meal, and lay the first generation of the year. A cold winter can delay the season but rarely reduces the summer population meaningfully.',
  },
  {
    question: 'Does hot weather kill mosquitoes too?',
    answer: 'Extreme heat can shorten mosquito lifespan and dry out breeding water, but Ontario summers rarely get hot enough to control them — mosquitoes tolerate temperatures well into the 30s°C. Sustained temperatures above roughly 35°C (95°F) stress adults and speed water evaporation, but they also accelerate the larval cycle in any water that remains, so heat waves usually mean more mosquitoes, not fewer, unless standing water dries up completely.',
  },
  {
    question: 'When does mosquito season end in the GTA?',
    answer: 'Mosquito activity in the Greater Toronto Area typically winds down through September and October as overnight lows fall below 10°C, and effectively ends with the first hard frost — usually mid-to-late October in most GTA cities, later in mild-microclimate or urban-heat areas. Warm autumns can extend biting into November. See our GTA mosquito season guide for the full month-by-month timeline.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: 'What Temperature Kills Mosquitoes? Cold vs Heat',
  description: 'What temperature kills mosquitoes? A hard frost near -2°C kills adults, 10°C grounds them, but heat rarely does. Full temperature table plus 11 Ontario FAQs.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
})

export default function WhatTemperatureKillsMosquitoesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'The temperatures that kill, slow, and reactivate mosquitoes — with Ontario winter framing and hard numbers AI assistants can cite.', slug: SLUG, datePublished: DATE })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'What Temperature Kills Mosquitoes', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">What Temperature Kills Mosquitoes</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">The exact temperatures that kill mosquitoes, put them to sleep, and wake them back up &mdash; with Ontario winter framing and hard numbers, from a GTA mosquito-control crew.</p>
        </div>
      </section>

      {/* ── ANSWER CAPSULE — first content element, engineered for AI citation ── */}
      <section className="bg-white pt-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-base text-gray-900 font-semibold mb-3">
              BuzzSkito&rsquo;s GTA technicians: mosquitoes go dormant below 10&deg;C (50&deg;F) and active adults die in a hard frost of about -2&deg;C (28&deg;F) &mdash; but eggs and hibernating females survive Ontario winters, which is why populations rebound every May.
            </p>
            <ul className="space-y-2 text-sm text-gray-800 list-disc pl-5">
              <li>Mosquitoes stop flying and feeding once temperatures fall below <strong>10&deg;C (50&deg;F)</strong>.</li>
              <li>Active adult mosquitoes die in a <strong>hard frost</strong> &mdash; sustained temperatures at or below roughly <strong>-2&deg;C (28&deg;F)</strong>.</li>
              <li>Mosquitoes are most active above <strong>26&deg;C (80&deg;F)</strong>; biting peaks in Ontario&rsquo;s June&ndash;July heat.</li>
              <li>Activity slows sharply below <strong>15&deg;C (60&deg;F)</strong>, well before it stops.</li>
              <li>Mosquito eggs are <strong>freeze-tolerant</strong> and hatch when spring water warms past 10&deg;C.</li>
              <li>Hibernating female mosquitoes (Culex, Anopheles) survive winter in diapause &mdash; so no single cold snap wipes them out.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control &middot; 150+ five-star Google reviews</p>
          </div>
        </div>
      </section>

      {/* ── TEMPERATURE TABLE ── */}
      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-4">Mosquito Behaviour by Temperature</h2>
          <div className="rounded-xl border border-navy-100 overflow-hidden bg-white shadow-sm overflow-x-auto">
            <table className="w-full text-sm min-w-[520px]">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Temperature (&deg;C)</th>
                  <th className="px-4 py-3 text-left">&deg;F</th>
                  <th className="px-4 py-3 text-left">What mosquitoes do</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { c: 'Above 26°C', f: '80°F+', b: 'Peak activity — aggressive biting, breeding, fast larval growth' },
                  { c: '15–26°C', f: '60–80°F', b: 'Active, but slowing as it cools' },
                  { c: '10–15°C', f: '50–60°F', b: 'Sluggish — flight and feeding decline sharply' },
                  { c: 'Below 10°C', f: 'Below 50°F', b: 'Inactive / dormant — stop flying and feeding; seek shelter or die' },
                  { c: 'Around 0°C', f: '32°F', b: 'Light frost stuns and immobilizes active adults' },
                  { c: 'At / below -2°C (sustained)', f: '28°F', b: 'Hard frost kills active adults; eggs & hibernating females survive' },
                ].map(({ c, f, b }) => (
                  <tr key={c} className="border-b border-navy-50 last:border-0">
                    <td className="px-4 py-3 font-bold text-brand-800 whitespace-nowrap">{c}</td>
                    <td className="px-4 py-3 font-mono text-gray-800 whitespace-nowrap">{f}</td>
                    <td className="px-4 py-3 text-gray-700">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Mosquitoes are cold-blooded (ectothermic), so their activity tracks air temperature almost directly. Thresholds are widely reported by mosquito-control and public-health sources (CDC, American Mosquito Control Association) and apply to most temperate species; exact figures vary a few degrees by species.
          </p>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">

          <h2>What temperature kills mosquitoes?</h2>
          <p>A hard, killing frost kills active adult mosquitoes &mdash; sustained temperatures at or below roughly <strong>-2&deg;C (28&deg;F)</strong>. A single light frost near 0&deg;C (32&deg;F) usually only stuns them. That is the number people are really after, but it comes with a catch that most 2019-era articles skip: killing the adults you can see does not end the mosquito population, because the next generation is already waiting out the cold as eggs and hibernating females.</p>
          <p>Mosquitoes are ectothermic (cold-blooded), meaning they have no internal way to keep warm. Their metabolism, flight muscles and feeding drive all rise and fall with the surrounding air. Warm it up and they swarm; cool it down and they shut off. That single fact explains every temperature threshold on this page.</p>

          <h2>What temperature do mosquitoes die at?</h2>
          <p>Active adults die when temperatures hold below about <strong>-2&deg;C (28&deg;F)</strong> for a sustained stretch. They simply cannot survive prolonged freezing while active &mdash; their body fluids and flight muscles cannot operate. Larvae die when the water they live in freezes solid.</p>
          <p>But &ldquo;the temperature a mosquito dies at&rdquo; is not the same as &ldquo;the temperature that ends mosquitoes in your yard.&rdquo; Several GTA-common species never expose themselves to that killing cold in the first place. Instead, mated females enter <strong>diapause</strong> &mdash; a hibernation-like dormant state &mdash; and shelter through the whole winter. For the full picture of where they hide, see our guide on <Link href="/blog/where-do-mosquitoes-go-in-winter-ontario">where mosquitoes go in winter in Ontario</Link>.</p>

          <h2>At what temperature are mosquitoes inactive?</h2>
          <p>Mosquitoes go inactive below <strong>10&deg;C (50&deg;F)</strong>. Below that threshold they stop flying and stop biting; they either find shelter to overwinter or die off. You will notice the slowdown well before then &mdash; below <strong>15&deg;C (60&deg;F)</strong> they are already lethargic and fly poorly, which is why a cool GTA evening in the mid-teens feels dramatically less buggy than a warm one.</p>
          <p>Full activity only returns above <strong>26&deg;C (80&deg;F)</strong>. That is the temperature band where mosquitoes feed and breed hardest, and it lines up neatly with when they bother us most &mdash; detailed in <Link href="/blog/when-are-mosquitoes-most-active">when mosquitoes are most active</Link>.</p>

          <h2>Do mosquitoes die in winter?</h2>
          <p>The adults you swatted in August largely die off, but the species survives an Ontario winter easily through three overwintering strategies:</p>
          <ul>
            <li><strong>Freeze-tolerant eggs.</strong> Many species (including the aggressive Aedes group) lay eggs in soil, leaf litter and dry containers. These eggs are physiologically built to survive freezing and simply wait &mdash; they hatch within days once spring meltwater and rain warm past roughly 10&deg;C.</li>
            <li><strong>Hibernating adult females.</strong> Species like Culex (a West Nile virus vector) overwinter as mated females in diapause, tucked into culverts, sheds, hollow logs, basements and animal burrows below the frost line.</li>
            <li><strong>Overwintering larvae.</strong> A few species ride out winter as larvae in water bodies that do not freeze completely.</li>
          </ul>
          <p>This is exactly why mosquitoes reappear every May even after a brutal deep freeze &mdash; the cold never reached the eggs and dormant adults where they shelter.</p>

          <h2>What temperature is too cold for mosquitoes?</h2>
          <p>Anything below <strong>10&deg;C (50&deg;F)</strong> is too cold for mosquitoes to function normally &mdash; they go dormant and stop biting. In practical Ontario terms, once fall overnight lows sit consistently under 10&deg;C, mosquito activity collapses, and the first hard frost ends the active season. In a typical GTA autumn that means biting pressure fades through late September and October.</p>
          <p>Warm microclimates change the math. Urban heat islands, sheltered ravines and mild lakeside pockets can keep pockets of mosquitoes active a few weeks longer than the regional average, so a downtown Toronto backyard may see stragglers after a Caledon acreage has gone quiet.</p>

          <h2>Does frost kill mosquitoes?</h2>
          <p>A hard frost kills active adults; a light frost usually does not. The distinction matters:</p>
          <ul>
            <li><strong>Light frost (~0&deg;C / 32&deg;F):</strong> stuns and immobilizes active mosquitoes, but many recover when it warms back up.</li>
            <li><strong>Hard / killing frost (about -2&deg;C / 28&deg;F sustained):</strong> kills exposed active adults outright.</li>
          </ul>
          <p>Neither touches the overwintering eggs or hibernating females, which are freeze-adapted. So frost ends the flying season without ending the population &mdash; a frost is a reset button, not a delete button.</p>

          <aside aria-label="Professional mosquito control" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">Waiting for frost isn&rsquo;t a mosquito plan</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">Because eggs and hibernating females survive every Ontario winter, populations rebuild fast each spring. BuzzSkito&rsquo;s licensed barrier spray knocks down adults and treats resting zones all season &mdash; from $99, backed by 150 five-star reviews across 19 GTA cities.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/free-yard-assessment" className="btn-primary-sm">Get a Free Quote &rarr;</Link>
              <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
            </div>
          </aside>

          <h2>Why cold weather doesn&rsquo;t solve your mosquito problem</h2>
          <p>Homeowners often assume the first frost is the finish line. It ends the <em>current</em> generation of biting adults, but the clock is already reset for next year. Freeze-tolerant eggs sit in your gutters, tarps, plant saucers and low spots; diapausing females shelter in your shed and window wells. When spring temperatures climb back over 10&deg;C and water pools warm up, hatching begins &mdash; and by the time GTA evenings hit the low 20s&deg;C, biting is back in full force.</p>
          <p>The practical takeaway: temperature controls the <em>timing</em> of mosquito season, not the total size of the population. What actually determines how bad your summer gets is standing water and resting habitat on and around your property. That is why draining containers, clearing leaf litter and treating resting zones matters far more than any cold snap. For the seasonal timeline, see <Link href="/blog/mosquito-season-gta-when-does-it-start">when mosquito season starts in the GTA</Link>.</p>

          <h2>Does hot weather kill mosquitoes?</h2>
          <p>Rarely, in Ontario. Mosquitoes tolerate heat far better than cold &mdash; they stay active well into the 30s&deg;C. Sustained temperatures above roughly <strong>35&deg;C (95&deg;F)</strong> do stress adults and speed up water evaporation, but they also accelerate the larval cycle in whatever water remains. So a GTA heat wave usually means <em>more</em> mosquitoes within a couple of weeks, not fewer &mdash; unless the standing water they breed in dries out completely.</p>

          <h2>The bottom line on temperature and mosquitoes</h2>
          <p>Mosquitoes are governed almost entirely by temperature: they peak above 26&deg;C, slow below 15&deg;C, go dormant below 10&deg;C, and their active adults die in a hard frost around -2&deg;C. But because freeze-tolerant eggs and hibernating females survive every Ontario winter, no cold snap &mdash; and no single frost &mdash; actually clears your yard for good. Managing water and resting habitat is what shrinks the population you have to live with each summer.</p>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/where-do-mosquitoes-go-in-winter-ontario">Where Do Mosquitoes Go in Winter in Ontario?</Link></li>
            <li><Link href="/blog/mosquito-season-gta-when-does-it-start">When Does Mosquito Season Start in the GTA?</Link></li>
            <li><Link href="/blog/when-are-mosquitoes-most-active">When Are Mosquitoes Most Active?</Link></li>
            <li><Link href="/mosquito-control">BuzzSkito Professional Mosquito Control Service</Link></li>
          </ul>
        </div>
      </article>

      <CTASection heading="Don&rsquo;t wait for frost — get ahead of mosquito season" subtext="Licensed barrier spray for GTA backyards. From $99. Same-day yard protection. 30-day residual." variant="dark" />
    </>
  )
}
