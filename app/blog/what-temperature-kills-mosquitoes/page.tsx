import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import Figure from '@/components/Figure'
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
  {
    question: 'What temperature do mosquitoes die at in the United States?',
    answer: 'The same numbers apply in Fahrenheit: active adult mosquitoes die in a hard freeze of 28°F (-2°C) held for a couple of hours, which is the National Weather Service threshold for a killing freeze. They stop flying and feeding below 50°F (10°C), and larvae in standing water stop developing and start dying somewhere around 46–53°F (8–12°C), long before that water freezes. Where this differs from Canada is coverage, not physics — South Florida, the Gulf Coast, South Texas, coastal Southern California, Hawaii and the low Arizona desert rarely or never reach 28°F, so mosquitoes there are never killed off by cold at all.',
  },
  {
    question: 'Do mosquitoes die in winter in Florida and the southern US?',
    answer: 'Mostly no. UF/IFAS Extension is clear that Florida has mosquitoes year-round, and in South Florida there is no true off-season — populations dip in the coolest weeks and rebound within days of the next warm rain. North and Central Florida, the Gulf Coast and South Texas get brief cold snaps that knock adults down, but rarely the sustained 28°F (-2°C) hard freeze needed to kill them off, and eggs survive regardless. If you live below roughly the I-10 corridor, plan for twelve months of mosquito pressure rather than a frost-defined season.',
  },
  {
    question: 'Will a cold room kill mosquitoes?',
    answer: 'Only if it is genuinely cold and stays that way. Below 50°F (10°C) a mosquito stops flying, host-seeking and feeding, and will eventually die — but of starvation and exhaustion over days, not of cold itself. To kill an adult mosquito outright with cold you need freezing temperatures, around 32°F (0°C) or below, held for hours. A cool basement or an unheated bedroom in the 50s or 60s°F just makes them sluggish, and they recover as soon as the room warms up.',
  },
  {
    question: 'Do mosquitos die in AC?',
    answer: 'No. Air conditioning slows mosquitoes down; it does not kill them. Most US homes are held at 72–78°F (22–26°C), which sits squarely inside the 70–80°F band mosquitoes actually prefer, so an indoor mosquito stays active and keeps biting. What AC genuinely does is dry the indoor air, and low humidity shortens a mosquito\'s lifespan and discourages it from settling. Sealing screens and removing indoor standing water does far more than the thermostat.',
  },
  {
    question: 'Can a mosquito die from heat?',
    answer: 'Yes. Mosquitoes are cold-blooded, so heat kills them the same way cold does — it just takes a narrower margin. Sustained temperatures above roughly 95°F (35°C) push adults into heat stress: lifespan shortens, egg production falls, and dehydration becomes the limiting factor. Above about 100–104°F (38–40°C) exposed adults die within hours. In practice they rarely sit in that heat, because they retreat to shade and damp shelter before it gets lethal.',
  },
  {
    question: 'Are mosquitoes out in 100 degree weather?',
    answer: 'Not in the open sun. At 100°F (38°C) mosquitoes are still alive and still on your property, but they stop flying in exposed heat and shelter in shade — dense shrubs, damp mulch, under decks, crawl spaces, storm drains. Biting pressure collapses through the hottest part of a Phoenix or Dallas afternoon and comes back hard at dusk when the air cools back into the 80s°F. A 100°F day usually means fewer bites at 3pm and more at 8pm, not fewer mosquitoes.',
  },
  {
    question: 'What temperature do mosquitoes stop coming out?',
    answer: '50°F (10°C) is the line. Below it mosquitoes stop flying, stop host-seeking and stop feeding — they either find shelter to overwinter or die off. You notice the decline well before that threshold: below 60°F (15°C) they fly poorly and biting pressure drops sharply, which is why a cool evening feels dramatically less buggy than a warm one at the same time of year.',
  },
  {
    question: 'What temperature do mosquitoes go away at night?',
    answer: 'The same 50°F (10°C) threshold applies after dark. An evening that cools below 60°F (15°C) makes biting noticeably lighter, and once the overnight low drops under 50°F mosquitoes stop flying altogether. This is why a clear, cool, breezy night feels bug-free while a warm, humid, still one does not — temperature and wind, not darkness, are what shut them down. Wind above roughly 10 mph grounds them regardless of temperature.',
  },
  {
    question: 'What kills mosquitoes instantly?',
    answer: 'A contact insecticide labelled for flying insects kills an adult mosquito in seconds, and a swatter or electric racket kills the one in front of you. Nothing that works instantly also reduces the population, because the eggs and larvae producing the next generation are untouched. The things that actually shrink mosquito numbers are slow: emptying standing water, treating breeding sites with Bti larvicide, and a residual barrier treatment on resting vegetation. In the US, any product you apply must be EPA-registered and used exactly as its label directs.',
  },
  {
    question: 'What do mosquitoes hate the most?',
    answer: 'Wind and dry air, more than any smell. Mosquitoes are weak fliers and a breeze above roughly 10 mph grounds them, which is why a box fan on a patio is one of the most reliable low-tech defences there is. They also avoid hot, dry, exposed ground in favour of still, humid shade. For skin protection, CDC recommends EPA-registered repellents containing DEET, picaridin, IR3535, oil of lemon eucalyptus (OLE/PMD), para-menthane-diol or 2-undecanone.',
  },
  {
    question: 'What smell do mosquitoes hate most?',
    answer: 'Oil of lemon eucalyptus (OLE) and its refined component PMD is the only plant-derived scent CDC lists alongside DEET and picaridin as an EPA-registered repellent with tested effectiveness. Citronella, lavender, peppermint, garlic and vanilla all repel mosquitoes weakly and briefly — typically under an hour, and only within centimetres of the source — which is why scented candles and repellent plants underperform so badly in a real backyard.',
  },
  {
    question: 'Do mosquitoes bite less if you shower?',
    answer: 'Slightly, and only for a while. Mosquitoes locate you by exhaled carbon dioxide, body heat and the bacteria that produce skin odour, so washing off sweat and lactic acid can make you marginally less attractive for a short period. But you keep exhaling CO2 and radiating heat the moment you step out, and heavily scented soaps and lotions can attract mosquitoes rather than deter them. A shower is not protection; an EPA-registered repellent is.',
  },
  {
    question: 'What is the worst month for mosquitoes?',
    answer: 'It depends on your latitude. Across Canada and the northern United States, July is the worst month — it combines the highest temperatures with the accumulated output of every generation since spring. On the Gulf Coast and in Florida the peak is longer and rain-driven, roughly May through October, with late summer often the worst as salt-marsh and floodwater species respond to storms. In the desert Southwest, monsoon rain rather than temperature sets the peak, usually July into September.',
  },
  {
    question: 'What temperature kills mosquito larvae?',
    answer: 'Mosquito larvae stop developing between about 8°C and 12°C (46–53°F) and die outright once the water they live in freezes solid. The lower developmental threshold measured for Aedes aegypti larvae is roughly 11.8°C (53°F); below that, growth halts and mortality climbs steeply. Backyard container water cools and freezes far faster than a pond, so plant saucers, tarps, tires and clogged gutters shut down before natural water does. Cold is still a slow and unreliable larvicide — draining the water, or treating what you cannot drain with a Bti (Bacillus thuringiensis israelensis) larvicide registered by Health Canada or the US EPA, works in days rather than months.',
  },
  {
    question: 'What temperature kills mosquito eggs?',
    answer: 'No temperature a Canadian winter produces reliably kills mosquito eggs. Aedes eggs are desiccation-resistant and freeze-tolerant, and stay viable for months in soil, leaf litter, gutters and on the dry inner walls of containers. They hatch within days once meltwater or spring rain covers them and warms past roughly 10°C (50°F). This is the reason a hard frost never clears a yard: it kills the adults you can see and leaves next year’s population untouched. Removing eggs is physical work rather than weather — scrub the inside walls of containers, store them upside down, and clear gutters and leaf litter in the fall.',
  },
  {
    question: 'How long does it take for cold to kill a mosquito?',
    answer: 'Hours at freezing, days at merely cool temperatures. An exposed adult mosquito dies within a couple of hours at -2°C (28°F) or below, which is the National Weather Service threshold for a hard freeze. At 10°C (50°F) it stops flying, host-seeking and feeding but dies slowly over several days — of starvation and exhaustion rather than of the cold itself. Between 0°C and 10°C (32–50°F) many adults survive indefinitely by finding shelter, which is exactly what diapausing Culex females do for an entire winter.',
  },
  {
    question: 'At what temperature do mosquitoes come back in spring?',
    answer: 'Mosquitoes become active again once temperatures hold above 10°C (50°F). Hibernating females wake from sheds, culverts, basements and hollow logs, take a blood meal, and lay the first generation of the year. Freeze-tolerant eggs hatch within days of spring meltwater and rain warming past that same 10°C line. In the Greater Toronto Area that threshold is usually crossed in late April and early May, which is why the treatment season here runs May through September.',
  },
  {
    question: 'What temperature kills mosquitoes in Ontario, and when does that usually happen?',
    answer: 'The killing temperature in Ontario is the same hard frost of about -2°C (28°F) sustained for a couple of hours, and it typically arrives in mid-to-late October across the Greater Toronto Area. Before that, overnight lows fall under 10°C (50°F) through September and biting pressure collapses on its own. Urban heat islands in Toronto, Mississauga and Brampton hold their first hard frost off a week or two longer than rural Caledon or Halton Hills, so the end of biting season is a neighbourhood question rather than a regional one.',
  },
  {
    question: 'Is 50 degrees too cold for mosquitoes?',
    answer: 'Yes — 50°F (10°C) is the temperature at which mosquitoes stop flying, host-seeking and biting. They do not die at 50°F, though. They shelter and wait, and a warm spell a few days later brings the same mosquitoes straight back out. That is why the number worth watching in spring and fall is the overnight low against 50°F rather than the daytime high: a 70°F afternoon following a 45°F night produces far fewer bites than the thermometer suggests.',
  },
  {
    question: 'What are the key mosquito temperature thresholds?',
    answer: 'There are six numbers worth remembering. Mosquitoes are most active above 26°C (80°F). Activity slows noticeably below 15°C (60°F). Mosquitoes stop flying and feeding below 10°C (50°F). Larvae stop developing between about 8°C and 12°C (46–53°F). Active adult mosquitoes die in a hard frost of about -2°C (28°F) held for a couple of hours. At the hot end, heat stress begins above roughly 35°C (95°F) and exposed adults die above about 38–40°C (100–104°F).',
  },
  {
    question: 'When should you call a mosquito control professional instead of waiting for cold weather?',
    answer: 'Call when biting pressure is high through the 15–30°C (60–86°F) window and the water producing the mosquitoes is not on your own property. Waiting for frost costs you the whole season, because the -2°C (28°F) killing frost does not reach the GTA until mid-to-late October. A licensed barrier treatment targets the shaded resting vegetation where adults spend the day; BuzzSkito treats GTA yards from $99 for a single visit, or $549–$2,049 for a full May-to-September season. Public Health Ontario tracks West Nile virus in Culex populations across the province every summer, which is the other reason not to simply wait the season out.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: 'What Temperature Kills Mosquitoes? Cold vs Heat',
  description: 'Active adults die in a hard frost around -2°C (28°F) and stop flying below 10°C (50°F) — but eggs and hibernating females survive winter. Full temp table.',
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
          <div className="rounded-xl border border-navy-100 overflow-x-auto bg-white shadow-sm overflow-x-auto">
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

      {/* ── FAHRENHEIT-FIRST REFERENCE (added for US readers; the °C table above is unchanged) ── */}
      <section className="bg-white px-4 pt-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-3">Mosquito Temperatures in Fahrenheit (US Quick Reference)</h2>
          <p className="text-gray-700 mb-5 max-w-3xl">
            BuzzSkito is a Canadian crew and the table above is written in Celsius, but roughly one in six people reading this page is now in the United States. Here is the same physics with <strong>&deg;F first</strong> &mdash; plus three numbers the &deg;C table does not carry: the <strong>70&ndash;80&deg;F preferred band</strong>, the temperature at which mosquito <strong>larvae</strong> stop developing, and the National Weather Service&rsquo;s own hard-freeze threshold.
          </p>

          <Figure
            src="/diagrams/mosquito-temperature-scale-fahrenheit.svg"
            alt="Temperature scale showing what mosquitoes do from 100°F heat stress down to a 28°F hard freeze, in Fahrenheit with Celsius in brackets"
            caption="Mosquito activity by temperature, °F first. Above 95°F they overheat; 70–80°F is their preferred band; below 50°F they stop flying; 28°F held for hours kills active adults — but not eggs or hibernating females."
            width={720}
            height={470}
            priority
          />

          <div className="rounded-xl border border-navy-100 overflow-x-auto bg-white shadow-sm mt-6">
            <table className="w-full text-sm min-w-[680px]">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Temperature (&deg;F)</th>
                  <th className="px-4 py-3 text-left">&deg;C</th>
                  <th className="px-4 py-3 text-left">What mosquitoes do</th>
                  <th className="px-4 py-3 text-left">Where in the US this bites hardest</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['100°F and above', '38°C+', 'Too hot to fly in open sun — adults retreat to shade, damp mulch, crawl spaces and storm drains; biting shifts to dawn and dusk', 'Phoenix, Las Vegas, inland California, West Texas in July and August'],
                  ['95–100°F', '35–38°C', 'Heat stress — lifespan shortens, egg output falls, dehydration becomes the limiting factor', 'Southwest, Gulf Coast and Central Valley heat waves'],
                  ['80–95°F', '27–35°C', 'Peak biting and fastest larval development — the worst band for a homeowner', 'Almost the entire country, June through August'],
                  ['70–80°F', '21–27°C', 'The preferred range — comfortable, aggressive, breeding steadily', 'Most of the US spring to fall — and the inside of an air-conditioned house'],
                  ['60–70°F', '15–21°C', 'Slowing — clumsy flight, biting pressure drops noticeably', 'Spring and fall shoulder seasons everywhere'],
                  ['Below 50°F', 'Below 10°C', 'The switch — they stop flying, host-seeking and feeding; shelter to overwinter or die off', 'The universal season trigger, north and south'],
                  ['~46–53°F', '~8–12°C', 'Larvae in standing water stop developing and begin dying — long before the water freezes', 'Anywhere with a real winter; container water cools faster than ponds'],
                  ['32°F', '0°C', 'Light frost stuns and immobilizes exposed adults; many recover when it warms back up', 'North Florida and the Gulf Coast may see only this, and only briefly'],
                  ['28°F held for hours', '-2°C', 'NWS hard freeze — kills active adults outright; eggs and diapausing females survive it', 'Reliable annually across the North; rare to absent in the far South'],
                ].map(([f, c, b, us]) => (
                  <tr key={f} className="border-b border-navy-50 last:border-0 align-top">
                    <td className="px-4 py-3 font-bold text-brand-800 whitespace-nowrap">{f}</td>
                    <td className="px-4 py-3 font-mono text-gray-800 whitespace-nowrap">{c}</td>
                    <td className="px-4 py-3 text-gray-700">{b}</td>
                    <td className="px-4 py-3 text-gray-600">{us}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Cold thresholds follow the same sources as the Celsius table above (<a href="https://www.cdc.gov/mosquitoes/" target="_blank" rel="noopener" className="text-emerald-700 underline">CDC</a>, <a href="https://www.mosquito.org/mosquito-information/" target="_blank" rel="noopener" className="text-emerald-700 underline">American Mosquito Control Association</a>). The 28&deg;F hard-freeze figure is the <a href="https://forecast.weather.gov/glossary.php?word=freeze" target="_blank" rel="noopener" className="text-emerald-700 underline">NOAA / National Weather Service</a> threshold. Heat figures follow published thermal-tolerance work on <em>Aedes</em> and <em>Culex</em>; the larval band reflects the lower developmental threshold for <em>Aedes aegypti</em> larvae of about 11.8&deg;C (53&deg;F), below which development stops and mortality climbs steeply. Exact figures vary a few degrees by species.
          </p>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">

          <h2>What temperature kills mosquitoes?</h2>
          <p><strong>A hard frost of about -2&deg;C (28&deg;F), held for a couple of hours, kills active adult mosquitoes.</strong> A light frost near 0&deg;C (32&deg;F) only stuns them. Mosquitoes stop flying and biting below 10&deg;C (50&deg;F). Cold does not kill mosquito eggs or hibernating females, so a killing frost ends the flying season without ending the population.</p>
          <p>A hard, killing frost kills active adult mosquitoes &mdash; sustained temperatures at or below roughly <strong>-2&deg;C (28&deg;F)</strong>. A single light frost near 0&deg;C (32&deg;F) usually only stuns them. That is the number people are really after, but it comes with a catch that most 2019-era articles skip: killing the adults you can see does not end the mosquito population, because the next generation is already waiting out the cold as eggs and hibernating females.</p>
          <p>Mosquitoes are ectothermic (cold-blooded), meaning they have no internal way to keep warm. Their metabolism, flight muscles and feeding drive all rise and fall with the surrounding air. Warm it up and they swarm; cool it down and they shut off. That single fact explains every temperature threshold on this page.</p>

          <h2>What temperature do mosquitoes die at?</h2>
          <p><strong>Active adult mosquitoes die at about -2&deg;C (28&deg;F) sustained</strong> &mdash; the temperature the US National Weather Service defines as a hard freeze. Mosquito larvae die once their water freezes solid. Hibernating <em>Culex</em>, <em>Anopheles</em> and <em>Culiseta</em> females do not die at that temperature at all; they spend the winter dormant in sheltered spots and survive it.</p>
          <p>Active adults die when temperatures hold below about <strong>-2&deg;C (28&deg;F)</strong> for a sustained stretch. They simply cannot survive prolonged freezing while active &mdash; their body fluids and flight muscles cannot operate. Larvae die when the water they live in freezes solid.</p>
          <p>But &ldquo;the temperature a mosquito dies at&rdquo; is not the same as &ldquo;the temperature that ends mosquitoes in your yard.&rdquo; Several GTA-common species never expose themselves to that killing cold in the first place. Instead, mated females enter <strong>diapause</strong> &mdash; a hibernation-like dormant state &mdash; and shelter through the whole winter. For the full picture of where they hide, see our guide on <Link href="/blog/where-do-mosquitoes-go-in-winter-ontario">where mosquitoes go in winter in Ontario</Link>.</p>

          <h2>At what temperature are mosquitoes inactive?</h2>
          <p><strong>Mosquitoes go inactive below 10&deg;C (50&deg;F).</strong> Below that line they stop flying, stop host-seeking and stop feeding. They are already sluggish below 15&deg;C (60&deg;F), and they only reach full activity above 26&deg;C (80&deg;F). Because mosquitoes are cold-blooded, that switch tracks air temperature almost directly rather than the calendar date.</p>
          <p>Mosquitoes go inactive below <strong>10&deg;C (50&deg;F)</strong>. Below that threshold they stop flying and stop biting; they either find shelter to overwinter or die off. You will notice the slowdown well before then &mdash; below <strong>15&deg;C (60&deg;F)</strong> they are already lethargic and fly poorly, which is why a cool GTA evening in the mid-teens feels dramatically less buggy than a warm one.</p>
          <p>Full activity only returns above <strong>26&deg;C (80&deg;F)</strong>. That is the temperature band where mosquitoes feed and breed hardest, and it lines up neatly with when they bother us most &mdash; detailed in <Link href="/blog/when-are-mosquitoes-most-active">when mosquitoes are most active</Link>.</p>

          <h2>Do mosquitoes die in winter?</h2>
          <p><strong>The active adults die, but the species does not.</strong> Mosquitoes survive a Canadian winter three ways: freeze-tolerant eggs in soil and dry containers, mated adult females dormant in diapause, and overwintering larvae in water that never freezes through. That is why mosquitoes reappear in the GTA every May, however cold the winter was.</p>
          <p>The adults you swatted in August largely die off, but the species survives an Ontario winter easily through three overwintering strategies:</p>
          <ul>
            <li><strong>Freeze-tolerant eggs.</strong> Many species (including the aggressive Aedes group) lay eggs in soil, leaf litter and dry containers. These eggs are physiologically built to survive freezing and simply wait &mdash; they hatch within days once spring meltwater and rain warm past roughly 10&deg;C.</li>
            <li><strong>Hibernating adult females.</strong> Species like Culex (a West Nile virus vector) overwinter as mated females in diapause, tucked into culverts, sheds, hollow logs, basements and animal burrows below the frost line.</li>
            <li><strong>Overwintering larvae.</strong> A few species ride out winter as larvae in water bodies that do not freeze completely.</li>
          </ul>
          <p>This is exactly why mosquitoes reappear every May even after a brutal deep freeze &mdash; the cold never reached the eggs and dormant adults where they shelter.</p>

          <h2>What temperature is too cold for mosquitoes?</h2>
          <p><strong>Below 10&deg;C (50&deg;F) is too cold for mosquitoes to function.</strong> They stop biting and go dormant. Below 15&deg;C (60&deg;F) they already fly poorly. In Ontario terms, mosquito activity collapses once autumn overnight lows sit consistently under 10&deg;C, and the first hard frost near -2&deg;C (28&deg;F) ends the active season outright.</p>
          <p>Anything below <strong>10&deg;C (50&deg;F)</strong> is too cold for mosquitoes to function normally &mdash; they go dormant and stop biting. In practical Ontario terms, once fall overnight lows sit consistently under 10&deg;C, mosquito activity collapses, and the first hard frost ends the active season. In a typical GTA autumn that means biting pressure fades through late September and October.</p>
          <p>Warm microclimates change the math. Urban heat islands, sheltered ravines and mild lakeside pockets can keep pockets of mosquitoes active a few weeks longer than the regional average, so a downtown Toronto backyard may see stragglers after a Caledon acreage has gone quiet. That spread is why the end of biting season is a local question rather than a regional one &mdash; our pages on <Link href="/toronto-mosquito-control">mosquito control in Toronto</Link> and <Link href="/caledon-mosquito-control">mosquito control in Caledon</Link> set out what a May-to-September plan covers in each.</p>

          <h2>Does frost kill mosquitoes?</h2>
          <p><strong>A hard frost kills active adult mosquitoes; a light frost usually does not.</strong> A light frost near 0&deg;C (32&deg;F) stuns them, and many recover once the air warms. A hard, killing frost at about -2&deg;C (28&deg;F) kills exposed adults outright. Neither reaches the freeze-adapted eggs or the hibernating females sheltering below the frost line.</p>
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
          <p><strong>Cold sets the timing of mosquito season, not the size of the population.</strong> A frost kills the adults you can see, while freeze-tolerant eggs and diapausing females wait it out in gutters, tarps, sheds and window wells. Standing water and shaded resting habitat &mdash; not winter temperature &mdash; decide how bad next summer gets.</p>
          <p>Homeowners often assume the first frost is the finish line. It ends the <em>current</em> generation of biting adults, but the clock is already reset for next year. Freeze-tolerant eggs sit in your gutters, tarps, plant saucers and low spots; diapausing females shelter in your shed and window wells. When spring temperatures climb back over 10&deg;C and water pools warm up, hatching begins &mdash; and by the time GTA evenings hit the low 20s&deg;C, biting is back in full force.</p>
          <p>The practical takeaway: temperature controls the <em>timing</em> of mosquito season, not the total size of the population. What actually determines how bad your summer gets is standing water and resting habitat on and around your property. That is why draining containers, clearing leaf litter and treating resting zones matters far more than any cold snap. For the seasonal timeline, see <Link href="/blog/mosquito-season-gta-when-does-it-start">when mosquito season starts in the GTA</Link>.</p>

          <h2>Does hot weather kill mosquitoes?</h2>
          <p><strong>Rarely in Ontario &mdash; mosquitoes tolerate heat far better than cold.</strong> Sustained temperatures above roughly 35&deg;C (95&deg;F) shorten adult lifespan and dry out breeding water, and exposed adults die above about 38&ndash;40&deg;C (100&ndash;104&deg;F). But the same heat speeds up the larval cycle, so a GTA heat wave usually produces more mosquitoes, not fewer.</p>
          <p>Rarely, in Ontario. Mosquitoes tolerate heat far better than cold &mdash; they stay active well into the 30s&deg;C. Sustained temperatures above roughly <strong>35&deg;C (95&deg;F)</strong> do stress adults and speed up water evaporation, but they also accelerate the larval cycle in whatever water remains. So a GTA heat wave usually means <em>more</em> mosquitoes within a couple of weeks, not fewer &mdash; unless the standing water they breed in dries out completely.</p>

          <h2>What temperature kills mosquito larvae?</h2>
          <p><strong>Mosquito larvae stop developing between about 8&deg;C and 12&deg;C (46&ndash;53&deg;F), and die outright once the water they live in freezes solid.</strong> The lower developmental threshold measured for <em>Aedes aegypti</em> larvae is roughly 11.8&deg;C (53&deg;F). Below that figure, growth halts and mortality climbs steeply, long before the water itself turns to ice.</p>
          <p>Container water is the part that matters in a backyard, and it cools faster than anything natural. A plant saucer, a sagging tarp, a tire or a clogged gutter drops below the developmental threshold weeks before a pond does, which is why the breeding sites on your own property shut down first in the fall and restart first in the spring. Cold is still a slow and unreliable larvicide. Draining the water works in minutes; treating what you cannot drain with a <em>Bacillus thuringiensis israelensis</em> (Bti) larvicide &mdash; registered by Health Canada&rsquo;s Pest Management Regulatory Agency and by the US EPA &mdash; works in days.</p>

          <h2>What temperature kills mosquito eggs?</h2>
          <p><strong>No temperature a Canadian winter produces reliably kills mosquito eggs.</strong> <em>Aedes</em> eggs are desiccation-resistant and freeze-tolerant, and stay viable for months in soil, leaf litter, gutters and on the dry inner walls of containers. They hatch within days once meltwater or spring rain covers them and warms past roughly 10&deg;C (50&deg;F).</p>
          <p>This is the single fact that undoes the &ldquo;wait for frost&rdquo; instinct. The frost kills the adults you can see and leaves next year&rsquo;s population entirely untouched, sitting a few metres from your patio door. Removing eggs is physical work rather than weather: scrub the inside walls of containers rather than just tipping them, store them upside down over winter, and clear gutters and leaf litter in the fall. Scrubbing matters because <em>Aedes</em> eggs are glued to the container wall above the waterline and survive a simple pour-out.</p>

          <h2>How long does it take for cold to kill a mosquito?</h2>
          <p><strong>Hours at freezing, days at merely cool temperatures.</strong> An exposed adult mosquito dies within a couple of hours at -2&deg;C (28&deg;F) or below. At 10&deg;C (50&deg;F) it stops flying, host-seeking and feeding but dies slowly over several days &mdash; of starvation and exhaustion rather than of the cold itself. Between 0&deg;C and 10&deg;C (32&ndash;50&deg;F), many adults survive indefinitely by finding shelter.</p>
          <p>That middle band is the one people underestimate. A diapausing <em>Culex pipiens</em> female spends an entire Ontario winter in exactly those conditions, in a culvert, sewer, crawl space or unheated basement, and emerges alive in April. Duration only becomes lethal once the temperature is genuinely below freezing; above it, duration mostly determines how hungry the mosquito is when it wakes.</p>

          <h2>At what temperature do mosquitoes come back in spring?</h2>
          <p><strong>Mosquitoes become active again once temperatures hold above 10&deg;C (50&deg;F).</strong> Hibernating females wake from sheds, culverts, basements and hollow logs, take a blood meal, and lay the first generation of the year. Freeze-tolerant eggs hatch within days of spring meltwater and rain warming past that same 10&deg;C line.</p>
          <p>In the Greater Toronto Area that threshold is usually crossed in late April and early May, which is why the treatment season here runs May through September. The first mosquitoes of the year are not new arrivals; they are last autumn&rsquo;s survivors. See <Link href="/blog/mosquito-season-gta-when-does-it-start">when mosquito season starts in the GTA</Link> for the month-by-month version of this timeline.</p>

          <h2>What temperature kills mosquitoes in Ontario, and when does that usually happen?</h2>
          <p><strong>The killing temperature in Ontario is the same hard frost of about -2&deg;C (28&deg;F) sustained for a couple of hours, and it typically arrives in mid-to-late October across the Greater Toronto Area.</strong> Overnight lows fall under 10&deg;C (50&deg;F) through September, and biting pressure collapses well before the frost ever lands.</p>
          <p>The frost date is a neighbourhood question rather than a regional one. Urban heat islands in Toronto, Mississauga and Brampton hold their first hard frost off by a week or two compared with rural Caledon, Milton or Halton Hills, and sheltered ravines and lakeside pockets stretch it further again. <a href="https://www.publichealthontario.ca/" target="_blank" rel="noopener" className="text-emerald-700 underline">Public Health Ontario</a> runs provincial West Nile virus surveillance through the same window, which is the practical reason the season is treated as May to September rather than ending at the first cold night.</p>

          <h2>Is 50 degrees too cold for mosquitoes?</h2>
          <p><strong>Yes &mdash; 50&deg;F (10&deg;C) is the temperature at which mosquitoes stop flying, host-seeking and biting.</strong> They do not die at 50&deg;F, though. They shelter and wait, and a warm spell a few days later brings the same mosquitoes straight back out. Nothing about crossing that line is permanent until a hard freeze follows it.</p>
          <p>The number worth watching in spring and fall is therefore the overnight low against 50&deg;F, not the daytime high. A 70&deg;F afternoon that follows a 45&deg;F night produces far fewer bites than the thermometer suggests, because the local population spent the night sheltering and takes hours to become active again.</p>

          <h2>What are the key mosquito temperature thresholds?</h2>
          <p><strong>Ten numbers cover almost every mosquito temperature question.</strong> They apply to the common temperate species on both sides of the border, and they vary by a few degrees between species. The list below restates the tables above as plain sentences, in Celsius first with the Fahrenheit equivalent in brackets.</p>
          <ul>
            <li>Mosquitoes are most active above 26&deg;C (80&deg;F).</li>
            <li>Mosquitoes prefer roughly 21&ndash;27&deg;C (70&ndash;80&deg;F) and live longest in that band.</li>
            <li>Mosquito activity slows noticeably below 15&deg;C (60&deg;F).</li>
            <li>Mosquitoes stop flying, host-seeking and feeding below 10&deg;C (50&deg;F).</li>
            <li>Mosquito larvae stop developing between about 8&deg;C and 12&deg;C (46&ndash;53&deg;F).</li>
            <li>A light frost at 0&deg;C (32&deg;F) stuns adult mosquitoes but usually does not kill them.</li>
            <li>A hard frost at -2&deg;C (28&deg;F), held for a couple of hours, kills exposed adult mosquitoes.</li>
            <li>Mosquito eggs and hibernating adult females survive freezing and are not killed by frost.</li>
            <li>Heat stress begins above roughly 35&deg;C (95&deg;F), and exposed adults die above about 38&ndash;40&deg;C (100&ndash;104&deg;F).</li>
            <li>Mosquitoes resume activity in spring once temperatures hold above 10&deg;C (50&deg;F).</li>
          </ul>
          <p className="text-sm text-gray-600">The cold thresholds follow <a href="https://www.cdc.gov/mosquitoes/" target="_blank" rel="noopener" className="text-emerald-700 underline">CDC</a> and <a href="https://www.mosquito.org/mosquito-information/" target="_blank" rel="noopener" className="text-emerald-700 underline">American Mosquito Control Association</a> guidance; the 28&deg;F hard-freeze figure is the <a href="https://forecast.weather.gov/glossary.php?word=freeze" target="_blank" rel="noopener" className="text-emerald-700 underline">NOAA / National Weather Service</a> definition; the larval band reflects the published lower developmental threshold for <em>Aedes aegypti</em>.</p>

          <h2>When should you call a mosquito control professional instead of waiting for cold weather?</h2>
          <p><strong>Call when biting pressure is high through the 15&ndash;30&deg;C (60&ndash;86&deg;F) window and the water producing the mosquitoes is not on your own property.</strong> Waiting for frost costs you the whole season, because the -2&deg;C (28&deg;F) killing frost does not reach the GTA until mid-to-late October &mdash; five months after biting begins.</p>
          <p>A licensed barrier treatment targets the shaded resting vegetation where adult mosquitoes spend the day, which is the half of a property that temperature alone never clears. BuzzSkito treats GTA yards from $99 for a single visit, or $549 to $2,049 for a full May-to-September season, across 19 cities. If the concern is disease rather than nuisance, <a href="https://www.publichealthontario.ca/" target="_blank" rel="noopener" className="text-emerald-700 underline">Public Health Ontario</a> tracks West Nile virus in <em>Culex</em> populations every summer, and the <a href="https://www.cdc.gov/mosquitoes/" target="_blank" rel="noopener" className="text-emerald-700 underline">CDC</a> publishes the bite-prevention guidance that applies on both sides of the border.</p>

          <h2>Does any of this change where you live in the United States?</h2>
          <p><strong>Yes &mdash; and for one region it changes the whole premise of this page.</strong> Everything above is written for Ontario and it transfers cleanly to the northern United States, because it is the same physics and the same winter. Maine, Michigan, Minnesota, upstate New York and Pennsylvania all get the frost that ends the flying season, and the 50&deg;F (10&deg;C) switch works identically there. But <strong>large parts of the US never get a killing freeze at all</strong>: South Florida, the Gulf Coast, South Texas, coastal Southern California, the low Arizona desert and Hawaii. If you live in any of those, &ldquo;wait for the first frost&rdquo; is not a plan, because the frost is not coming.</p>
          <p>The universal trigger is the same everywhere &mdash; mosquitoes become active once temperatures hold above <strong>50&deg;F (10&deg;C)</strong> &mdash; so the only thing that changes by region is <em>when your calendar crosses that line</em>, and whether it ever crosses back.</p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm my-6">
            <table className="w-full text-sm min-w-[720px]">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-3 py-2 text-left">Region</th>
                  <th className="px-3 py-2 text-left">Season typically starts</th>
                  <th className="px-3 py-2 text-left">Season typically ends</th>
                  <th className="px-3 py-2 text-left">Does the frost rule on this page apply?</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Alaska', 'Mid-June', 'Late July into August', 'Yes, emphatically — short, intense season bounded by cold at both ends'],
                  ['Northern New England, Upper Midwest, Montana, the Dakotas', 'Early May', 'First hard freeze, usually October', 'Yes — this is the closest US match to the Ontario timeline above'],
                  ['Great Lakes, Northeast, Pennsylvania', 'Late April', 'October, later in urban heat islands', 'Yes — read the Ontario sections as written'],
                  ['Pacific Northwest', 'April', 'October–November', 'Mostly — freezes arrive later and lighter west of the Cascades'],
                  ['Northern California', 'Early April', 'November', 'Partly — inland valleys freeze, the coast often does not'],
                  ['Mid-Atlantic, Ohio Valley, mid-South', 'April', 'November', 'Yes, but late — expect biting weeks after the leaves turn'],
                  ['Desert Southwest (AZ, NV, inland CA)', 'March', 'November, with a rain-driven monsoon peak', 'Barely — heat and rainfall, not cold, set the season here'],
                  ['Texas Gulf Coast, Louisiana, Deep South', 'March', 'December, and some years not at all', 'Unreliably — freezes reach here but are brief, and numbers rebound within weeks'],
                  ['North Florida', 'Early March', 'First frost, if one comes', 'Marginally — a light frost may arrive, a sustained 28°F freeze usually does not'],
                  ['South Florida, coastal Southern California, Hawaii, extreme south', 'Early February, or never stops', 'No reliable end', 'NO — there is no off-season. Plan for twelve months, not a frost date'],
                ].map(([region, start, end, applies]) => (
                  <tr key={region} className="border-t border-navy-50 align-top">
                    <td className="px-3 py-2 font-semibold text-brand-800">{region}</td>
                    <td className="px-3 py-2 text-gray-700">{start}</td>
                    <td className="px-3 py-2 text-gray-700">{end}</td>
                    <td className="px-3 py-2 text-gray-700">{applies}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600">These are the widely published US regional windows, all keyed to the same 50&deg;F (10&deg;C) trigger this page already uses &mdash; treat them as typical, not as forecast dates. <a href="https://blogs.ifas.ufl.edu/levyco/2023/07/11/theres-a-mosquito-season-in-florida/" target="_blank" rel="noopener" className="text-emerald-700 underline">UF/IFAS Extension</a> is explicit that Florida has mosquitoes year-round, and that the practical &ldquo;season&rdquo; there is set by rainfall rather than by cold. For dates specific to your county, your <strong>state cooperative extension service</strong> (<a href="https://texasinsects.tamu.edu/" target="_blank" rel="noopener" className="text-emerald-700 underline">Texas A&amp;M AgriLife</a>, <a href="https://extension.psu.edu/mosquitoes" target="_blank" rel="noopener" className="text-emerald-700 underline">Penn State Extension</a>, UF/IFAS) and your local <strong>mosquito control district</strong> are the free, genuinely expert sources &mdash; and both publish for their own state rather than for the country as a whole.</p>
          <p className="text-sm text-gray-600"><strong>An honest note for US readers.</strong> BuzzSkito is a licensed mosquito and tick company serving the Greater Toronto Area in Ontario, Canada. We do not operate in the United States, so the service pages linked on this site will not help you find a treatment &mdash; this section exists to answer your question, not to sell you anything. The physics, the thresholds and the species biology are identical on both sides of the border; only the phone number is local.</p>

          <h2>Which mosquito is it? US species and how each one survives the cold</h2>
          <p><strong>The overwintering strategy is a property of the species, not of the weather &mdash; which is why naming the species matters.</strong> <em>Aedes</em> mosquitoes survive winter as eggs and the adults die; <em>Culex</em> mosquitoes survive as mated adult females that sleep through it. That single difference explains why a hard freeze feels decisive and never is.</p>
          <p>The <a href="https://www.cdc.gov/mosquitoes/about/about-mosquitoes-in-the-united-states.html" target="_blank" rel="noopener" className="text-emerald-700 underline">CDC</a> names the US species that spread disease: <em>Aedes aegypti</em>, <em>Culex pipiens</em>, <em>Culex tarsalis</em>, <em>Culex quinquefasciatus</em>, <em>Anopheles freeborni</em> and <em>Anopheles quadrimaculatus</em>. Add <em>Aedes albopictus</em>, the Asian tiger mosquito, which is established across the Southeast and pushing north.</p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm my-6">
            <table className="w-full text-sm min-w-[760px]">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-3 py-2 text-left">Species</th>
                  <th className="px-3 py-2 text-left">Common name</th>
                  <th className="px-3 py-2 text-left">Where in the US</th>
                  <th className="px-3 py-2 text-left">How it survives the cold</th>
                  <th className="px-3 py-2 text-left">Why CDC tracks it</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Aedes aegypti', 'Yellow fever mosquito', 'Gulf Coast, Florida, South Texas, southern Arizona, southern California', 'Desiccation-resistant eggs that simply wait for water — quiescence, not true diapause. The adults die; the eggs do not', 'Dengue, chikungunya, Zika'],
                  ['Aedes albopictus', 'Asian tiger mosquito', 'Southeast, Mid-Atlantic, lower Midwest and spreading north', 'Cold-hardy eggs that enter a genuine photoperiod-cued diapause — this is exactly why it survives further north than Ae. aegypti', 'Dengue, chikungunya, Zika; aggressive daytime biter'],
                  ['Culex pipiens', 'Northern house mosquito', 'Northern two-thirds of the US and southern Canada, including the GTA', 'Mated females overwinter as adults in true diapause — basements, culverts, sewers, sheds, crawl spaces', 'West Nile virus, St. Louis encephalitis'],
                  ['Culex quinquefasciatus', 'Southern house mosquito', 'The South, roughly below the Culex pipiens line', 'Barely has to — stays active through most southern winters with no meaningful dormant period', 'West Nile virus'],
                  ['Culex tarsalis', 'Western encephalitis mosquito', 'Western and central US, especially irrigated agricultural land', 'Diapausing mated females, sheltered below the frost line', 'West Nile virus and other encephalitis viruses'],
                  ['Anopheles quadrimaculatus', 'Common malaria mosquito', 'Eastern United States', 'Adult females overwinter in sheltered, humid refuges', 'Malaria vector — historically, and in rare locally acquired US cases'],
                  ['Anopheles freeborni', 'Western malaria mosquito', 'Western United States', 'Adult females enter dormancy and shelter through winter', 'Malaria vector'],
                ].map(([sp, common, range, winter, why]) => (
                  <tr key={sp} className="border-t border-navy-50 align-top">
                    <td className="px-3 py-2 font-semibold text-brand-800 italic">{sp}</td>
                    <td className="px-3 py-2 text-gray-700">{common}</td>
                    <td className="px-3 py-2 text-gray-700">{range}</td>
                    <td className="px-3 py-2 text-gray-700">{winter}</td>
                    <td className="px-3 py-2 text-gray-700">{why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600">Species names and disease associations are as listed by <a href="https://www.cdc.gov/mosquitoes/about/about-mosquitoes-in-the-united-states.html" target="_blank" rel="noopener" className="text-emerald-700 underline">CDC, &ldquo;About Mosquitoes in the United States&rdquo;</a>, which notes that West Nile virus is among the most common mosquito-borne diseases in the continental United States. In Canada, <em>Culex pipiens</em> is likewise the West Nile vector of concern, alongside the floodwater species <em>Aedes vexans</em> and cold-tolerant <em>Culiseta</em> &mdash; the northern picture described earlier on this page.</p>

          <h2>Diapause vs quiescence: the two different ways mosquitoes wait out the cold</h2>
          <p><strong>Most articles &mdash; including, until now, the sections above &mdash; call every form of mosquito overwintering &ldquo;diapause.&rdquo; They are actually two distinct mechanisms, and the difference is what determines how fast your yard repopulates in spring.</strong> Public health entomologists at the US Army and the <a href="https://www.army.mil/article/283270" target="_blank" rel="noopener" className="text-emerald-700 underline">Defense Health Agency</a> draw the line explicitly.</p>
          <ul>
            <li><strong>Diapause &mdash; the adult waits.</strong> A programmed, hormonally maintained shutdown triggered <em>in advance</em> by shortening day length in late summer, not by the cold itself. A mated <em>Culex pipiens</em> female fattens up, stops seeking blood, and enters a dormancy she holds all winter in a culvert, sewer, shed or basement. She is alive the entire time. When spring lengthens the days and warms her shelter, she wakes, takes a blood meal, and lays the first eggs of the year &mdash; which is why <em>Culex</em> populations can start biting almost immediately in spring.</li>
            <li><strong>Quiescence &mdash; the adult is gone and the egg waits.</strong> Not programmed, and not anticipatory: it is a simple pause imposed by conditions and released the moment they improve. <em>Aedes aegypti</em> lays desiccation-resistant eggs on the damp walls of containers, tyres, gutters and plant saucers. The adult that laid them died in the fall. The eggs sit dry and dormant, and development restarts within <em>days</em> of warm water covering them.</li>
          </ul>
          <p>The two overlap in cold climates &mdash; northern <em>Aedes albopictus</em> eggs enter a true photoperiod-cued diapause before the quiescent phase, which is precisely how that species has pushed so far north. But the distinction is still the useful one, because it tells you what you are fighting in April. Where <em>Culex</em> dominates, the first mosquitoes of the year are last year&rsquo;s females waking up. Where <em>Aedes</em> dominates, the first mosquitoes of the year hatch out of water that has been sitting in your yard since the fall &mdash; and no amount of cold in between made any difference to them.</p>

          <h2>How cold is a &ldquo;killing frost&rdquo;, exactly? The NWS definitions</h2>
          <p><strong>&ldquo;Sustained cold&rdquo; has an official number in the United States.</strong> The <a href="https://forecast.weather.gov/glossary.php?word=freeze" target="_blank" rel="noopener" className="text-emerald-700 underline">National Weather Service</a> defines a <strong>hard freeze</strong> &mdash; also called a killing freeze &mdash; as surface air temperature reaching <strong>28&deg;F (-2&deg;C) or below</strong>. That is the threshold at which water inside plant cells freezes and ruptures the cell walls, killing most vegetation outright, and it is the same threshold at which exposed active adult mosquitoes die.</p>
          <p>You will see competing pages quote &ldquo;two consecutive hours at or below 28&deg;F.&rdquo; That is a fair working rule and it matches how the alert behaves in practice, but be precise about what is official and what is convention: the NWS definition is <em>temperature-based</em>, and the duration applied before a Hard Freeze Warning is issued is set by the local forecast office &mdash; typically an hour or more, and worded slightly differently office to office.</p>
          <div className="not-prose overflow-x-auto rounded-xl border border-navy-100 bg-white shadow-sm my-6">
            <table className="w-full text-sm min-w-[640px]">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-3 py-2 text-left">NWS product</th>
                  <th className="px-3 py-2 text-left">Roughly what temperature</th>
                  <th className="px-3 py-2 text-left">What it means for mosquitoes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Frost Advisory', 'Around 33–36°F (1–2°C), with conditions favouring frost formation', 'Nothing decisive. Mosquitoes stopped flying weeks ago at 50°F; frost on the grass does not reach anything that is overwintering'],
                  ['Freeze Warning', '32°F (0°C) or below', 'A light freeze stuns and immobilizes exposed adults. Many recover once the sun is up and the air warms'],
                  ['Hard Freeze Warning', '28°F (-2°C) or below', 'This is the killing freeze. Exposed active adults die. Eggs and diapausing females are unaffected — they are physiologically built for it'],
                  ['No freeze at all, all winter', 'Above 32°F year-round', 'The southern-US case: adults are never killed off, populations only dip. There is no reset and no off-season'],
                ].map(([product, temp, meaning]) => (
                  <tr key={product} className="border-t border-navy-50 align-top">
                    <td className="px-3 py-2 font-semibold text-brand-800">{product}</td>
                    <td className="px-3 py-2 text-gray-700">{temp}</td>
                    <td className="px-3 py-2 text-gray-700">{meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600">Thresholds and product names follow NOAA / National Weather Service usage; local forecast offices vary the exact criteria and seasonal issuance windows. Canadian readers: Environment and Climate Change Canada uses frost advisories rather than the US freeze-warning tiers, but the -2&deg;C / 28&deg;F killing point is the same number.</p>

          <h2>Why one source says mosquitoes peak at 80&deg;F and another says 80&deg;F can kill them</h2>
          <p><strong>Both are true, and they are describing two different things.</strong> Search this question and you will find pages saying mosquitoes are most active above 80&deg;F, and other pages warning that above 80&deg;F mosquitoes risk dehydration and death. The contradiction is only apparent: <strong>80&deg;F is close to the top of the activity curve and nowhere near the top of the survival curve.</strong></p>
          <ul>
            <li><strong>Activity peak.</strong> Biting, host-seeking and larval development all accelerate with temperature and reach their practical maximum somewhere in the 80s&deg;F. That is why 80&deg;F+ is described as peak activity &mdash; it is the band in which a mosquito does the most damage per hour.</li>
            <li><strong>Preferred range.</strong> Sustained comfort sits a little lower, around <strong>70&ndash;80&deg;F (21&ndash;27&deg;C)</strong>. This is where mosquitoes both perform well and live longest, which is why it is the band most US sources name as &ldquo;preferred.&rdquo;</li>
            <li><strong>Survival ceiling.</strong> Dehydration risk climbs across the 80s&deg;F and becomes genuinely limiting above about <strong>95&deg;F (35&deg;C)</strong>, with lethality above roughly <strong>100&ndash;104&deg;F (38&ndash;40&deg;C)</strong> for exposed adults. A mosquito&rsquo;s body is mostly water and it has no way to cool itself.</li>
          </ul>
          <p>So a hot spell shortens individual mosquito lifespans while simultaneously speeding up the larval cycle in whatever water is left. Those two effects usually cancel out or favour the mosquitoes, which is why heat waves so rarely deliver the relief people expect &mdash; the same conclusion the Ontario section above reaches, arrived at from the opposite direction.</p>

          <h2>Can a mosquito die from heat?</h2>
          <p><strong>Yes. Mosquitoes are cold-blooded, so heat kills them the same way cold does &mdash; there is simply a narrower margin at the top end.</strong> Sustained temperatures above roughly 95&deg;F (35&deg;C) push adults into heat stress: lifespan shortens, egg production falls, and dehydration becomes the limiting factor. Above about 100&ndash;104&deg;F (38&ndash;40&deg;C), exposed adults die within hours.</p>
          <p>In practice they rarely sit still and take it. Mosquitoes thermoregulate behaviourally &mdash; they move rather than endure, dropping into shaded, humid microclimates that can run 10&ndash;15&deg;F cooler than the air over an open lawn. Under a deck, inside dense shrubs, in damp mulch and leaf litter, in a storm drain, against the shaded north wall of a house. This is exactly why a residual barrier treatment targets <em>resting</em> vegetation rather than open air, and why the shady half of a property is almost always the buggy half.</p>
          <p>The heat also works on the water. Above roughly 95&deg;F shallow containers evaporate fast, and a breeding site that dries completely takes the larvae with it. But the same heat compresses the egg-to-adult cycle in every container that <em>does not</em> dry out, sometimes to under a week. A hot, dry spell can genuinely reduce mosquito numbers. A hot, wet spell reliably does the opposite.</p>

          <h2>Are mosquitoes out in 100 degree weather?</h2>
          <p><strong>Not in the open sun.</strong> At 100&deg;F (38&deg;C) mosquitoes are still alive and still on your property, but they stop flying in exposed heat and shelter &mdash; dense shrubs, damp mulch, under decks, crawl spaces, storm drains. Biting pressure collapses through the hottest part of a Phoenix, Las Vegas or Dallas afternoon, and returns hard at dusk as the air falls back into the 80s&deg;F.</p>
          <p>The practical consequence for a Southwest or Gulf Coast reader is a schedule change rather than a reprieve. A 100&deg;F day usually means fewer bites at 3pm and more at 8pm &mdash; the same dawn-and-dusk pattern described in <Link href="/blog/when-are-mosquitoes-most-active">when mosquitoes are most active</Link>, just pushed harder to the edges of the day. And in monsoon country the heat arrives with rain, which refills every container and low spot on the property; the mosquito problem that follows a run of 100&deg;F days is usually worse, not better, about ten days later.</p>

          <h2>Do mosquitos die in AC?</h2>
          <p><strong>No. Air conditioning slows mosquitoes down; it does not kill them.</strong> Most US homes are held at 72&ndash;78&deg;F (22&ndash;26&deg;C), which sits squarely inside the 70&ndash;80&deg;F band mosquitoes actually prefer. An indoor mosquito in an air-conditioned house is in comfortable conditions and will keep biting. To kill it with cold you would have to run the house below 50&deg;F, and even that takes days.</p>
          <p>What AC does do is useful, just indirectly. It <strong>dries the air</strong>. Mosquitoes lose water fast and depend on humidity; a house held at 40&ndash;50% relative humidity shortens their lifespan and makes them far less inclined to settle and rest indoors. That is a real effect, but it is a slow one measured in days, not a kill switch.</p>
          <p>If mosquitoes keep appearing indoors, the thermostat is the wrong lever entirely. They are getting in through torn screens, gaps under doors and open windows at dusk, or breeding in something inside &mdash; a plant saucer, a forgotten vase, a floor drain, a condensate pan, a sump. Our guide on <Link href="/blog/how-to-get-rid-of-mosquitoes-in-the-house">getting rid of mosquitoes in the house</Link> covers the search pattern.</p>

          <h2>Will a cold room kill mosquitoes?</h2>
          <p><strong>Only if it is genuinely cold and stays that way.</strong> Below 50&deg;F (10&deg;C) a mosquito stops flying, host-seeking and feeding, and will eventually die &mdash; but of starvation and exhaustion over a period of days, not of the cold itself. To kill an adult outright with cold you need freezing temperatures, 32&deg;F (0&deg;C) or below, held for hours. A refrigerator does it. A cool basement or an unheated bedroom in the 50s or 60s&deg;F does not; it just makes them sluggish, and they recover as soon as the room warms.</p>
          <p>There is a sharper reason not to rely on a cold room: it is the exact strategy several species have already defeated. Diapausing <em>Culex pipiens</em> females deliberately seek out cool, humid, sheltered spaces to spend the winter, and an unheated basement, crawl space or garage is a textbook overwintering site. Turning a room cold can attract the very mosquitoes you are trying to kill.</p>

          <h2>What temperature do mosquitoes stop coming out?</h2>
          <p><strong>50&deg;F (10&deg;C) is the line.</strong> Below it mosquitoes stop flying, stop host-seeking and stop feeding; they either find shelter to overwinter or die off. You will notice the decline well before that threshold &mdash; below 60&deg;F (15&deg;C) they fly poorly and biting pressure drops sharply, which is why a cool evening feels dramatically less buggy than a warm one in the same week.</p>
          <p>That single number is the most portable fact on this page. It is what sets the start of the season in Alaska in mid-June and in South Florida in February; it is what ends the season in Ontario in October and never ends it in Honolulu. If you want one temperature to watch, watch the overnight low against 50&deg;F, not the daytime high.</p>

          <h2>What temperature do mosquitoes go away at night?</h2>
          <p><strong>The same 50&deg;F (10&deg;C) threshold applies after dark.</strong> An evening that cools below 60&deg;F (15&deg;C) makes biting noticeably lighter, and once the overnight low drops under 50&deg;F mosquitoes stop flying altogether. A clear, cool, breezy night feels bug-free while a warm, humid, still one does not &mdash; it is temperature and wind doing that, not darkness.</p>
          <p>Two other night-time variables matter as much as the thermometer. <strong>Wind</strong> above roughly 10 mph grounds mosquitoes outright regardless of how warm it is, which is why a fan on a patio outperforms most gadgets. And <strong>clear skies</strong> radiate heat away far faster than cloud cover, so a clear night in the shoulder season crosses the 50&deg;F line hours earlier than an overcast one at the same forecast high. For the dusk-and-dawn timing pattern that overlays all of this, see <Link href="/blog/when-are-mosquitoes-most-active">when mosquitoes are most active</Link>.</p>

          <h2>What kills mosquitoes instantly?</h2>
          <p><strong>A contact insecticide labelled for flying insects kills an adult mosquito in seconds, and a swatter or electric racket kills the one in front of you.</strong> Nothing that works instantly also reduces the population, because the eggs and larvae producing the next generation are untouched. That gap between &ldquo;kills this mosquito now&rdquo; and &ldquo;means fewer mosquitoes next week&rdquo; is the whole game.</p>
          <p>What actually shrinks numbers is slower and less satisfying: emptying and scrubbing every container that holds water, treating breeding sites you cannot drain with a <em>Bacillus thuringiensis israelensis</em> (Bti) larvicide, and applying a residual barrier treatment to the shaded resting vegetation where adults spend the day. In the United States, any product you apply must be registered with the <a href="https://www.epa.gov/mosquitocontrol" target="_blank" rel="noopener" className="text-emerald-700 underline">US Environmental Protection Agency</a> and used exactly as its label directs &mdash; the label is the law. In Canada the equivalent authority is Health Canada&rsquo;s <a href="https://www.canada.ca/en/health-canada/services/consumer-product-safety/pesticides-pest-management.html" target="_blank" rel="noopener" className="text-emerald-700 underline">Pest Management Regulatory Agency</a>, and several provinces including Ontario restrict cosmetic outdoor pesticides. See <Link href="/blog/does-standing-water-attract-mosquitoes">how standing water drives mosquito numbers</Link> and <Link href="/blog/how-long-does-mosquito-spray-last">how long mosquito spray actually lasts</Link>.</p>

          <h2>What do mosquitoes hate the most?</h2>
          <p><strong>Wind and dry air, more than any smell.</strong> Mosquitoes are weak fliers and a breeze above roughly 10 mph grounds them, which makes a box fan one of the most reliable low-tech defences on a patio. They also avoid hot, dry, exposed ground in favour of still, humid shade &mdash; so the shady, sheltered corner of a yard is where they will always be.</p>
          <p>For skin protection, the CDC recommends EPA-registered repellents containing <strong>DEET</strong>, <strong>picaridin</strong>, <strong>IR3535</strong>, <strong>oil of lemon eucalyptus (OLE)</strong>, <strong>para-menthane-diol (PMD)</strong> or <strong>2-undecanone</strong>. &ldquo;EPA-registered&rdquo; is the operative phrase: it means the product has been reviewed for both safety and effectiveness, which is precisely what untested homemade and botanical mixtures have not been. The EPA&rsquo;s <a href="https://www.epa.gov/insect-repellents/find-repellent-right-you" target="_blank" rel="noopener" className="text-emerald-700 underline">repellent search tool</a> lets you filter registered products by how many hours of protection they provide.</p>

          <h2>What smell do mosquitoes hate most?</h2>
          <p><strong>Oil of lemon eucalyptus (OLE), and its refined active component PMD, is the only plant-derived scent the CDC lists alongside DEET and picaridin as a registered repellent with tested effectiveness.</strong> Everything else in the &ldquo;smells mosquitoes hate&rdquo; genre &mdash; citronella, lavender, peppermint, garlic, vanilla, coffee grounds &mdash; repels weakly and briefly, usually under an hour and only within centimetres of the source.</p>
          <p>This is why scented candles and repellent plants underperform so badly in a real backyard: the volatile oils disperse in open air almost immediately, and a mosquito tracking your exhaled carbon dioxide from 30 feet away never enters the small envelope where the scent is concentrated enough to matter. We set that reasoning against the published evidence in <Link href="/blog/smells-mosquitoes-hate">smells mosquitoes hate</Link> and <Link href="/blog/citronella-candles-canada-do-they-work">whether citronella candles work</Link>. Note also that OLE is not recommended for children under three years old &mdash; check the label, which carries the age restrictions.</p>

          <h2>Do mosquitoes bite less if you shower?</h2>
          <p><strong>Slightly, and only for a while.</strong> Mosquitoes find you by exhaled carbon dioxide, body heat, and the volatile compounds skin bacteria produce from sweat. Washing removes sweat and lactic acid, so a shower can make you marginally less attractive for a short period. It is a real effect and a small one.</p>
          <p>It is also easily undone. You start exhaling CO<sub>2</sub> and radiating heat again the moment you step out, skin bacteria re-establish within hours, and heavily scented soaps, shampoos and lotions can attract mosquitoes rather than deter them. A hot shower can even leave you warmer and more detectable for a while. Treat showering as hygiene, not as protection &mdash; an EPA-registered repellent is the thing that works. What genuinely drives biting risk is covered in <Link href="/blog/what-attracts-mosquitoes-to-you">what attracts mosquitoes to you</Link>.</p>

          <h2>What&rsquo;s the worst month for mosquitoes?</h2>
          <p><strong>It depends on your latitude, and the answer splits cleanly along the same line as the frost rule.</strong> Across Canada and the northern United States, <strong>July</strong> is the worst month &mdash; it combines the highest temperatures with the accumulated output of every generation since spring. On the Gulf Coast and in Florida the peak is longer and rain-driven, roughly May through October, with late summer often the worst as salt-marsh and floodwater species respond to storms. In the desert Southwest, monsoon rain rather than temperature sets it, usually July into September.</p>
          <p>The mechanism is the same everywhere: mosquito numbers track <em>accumulated warm days plus available water</em>, not the temperature of any single day. That is why the worst month is almost never the hottest month &mdash; it lags it by two to four weeks, the time it takes a generation hatched in the heat to reach biting age. For the Ontario version of this calendar, see <Link href="/blog/mosquito-season-gta-when-does-it-start">when mosquito season starts in the GTA</Link>.</p>

          <h2>Sources and agencies behind the numbers on this page</h2>
          <p className="text-sm text-gray-600">Temperature thresholds, species and disease statements are sourced to public health agencies and weather services on both sides of the border. Nothing on this page is a medical recommendation; if you develop fever, headache, rash, joint pain or neurological symptoms after mosquito bites, contact a healthcare provider.</p>
          <ul className="text-sm text-gray-600">
            <li><strong>United States &mdash; public health:</strong> <a href="https://www.cdc.gov/mosquitoes/about/about-mosquitoes-in-the-united-states.html" target="_blank" rel="noopener" className="text-emerald-700 underline">CDC &mdash; About Mosquitoes in the United States</a> (species and the diseases they spread) and <a href="https://www.cdc.gov/mosquitoes/" target="_blank" rel="noopener" className="text-emerald-700 underline">CDC &mdash; Mosquitoes</a> (bite prevention and registered repellent actives).</li>
            <li><strong>United States &mdash; pesticide regulation:</strong> <a href="https://www.epa.gov/mosquitocontrol" target="_blank" rel="noopener" className="text-emerald-700 underline">US EPA &mdash; Mosquito Control</a> and the <a href="https://www.epa.gov/insect-repellents/find-repellent-right-you" target="_blank" rel="noopener" className="text-emerald-700 underline">EPA repellent search tool</a>.</li>
            <li><strong>Mosquito-control profession:</strong> the <a href="https://www.mosquito.org/mosquito-information/" target="_blank" rel="noopener" className="text-emerald-700 underline">American Mosquito Control Association (AMCA)</a>, whose member districts run local surveillance across the US.</li>
            <li><strong>Freeze and frost definitions:</strong> <a href="https://forecast.weather.gov/glossary.php?word=freeze" target="_blank" rel="noopener" className="text-emerald-700 underline">NOAA / National Weather Service glossary</a>.</li>
            <li><strong>Military entomology:</strong> the <a href="https://www.army.mil/article/283270" target="_blank" rel="noopener" className="text-emerald-700 underline">US Army / Defense Health Agency</a> article distinguishing diapause from quiescence.</li>
            <li><strong>State cooperative extension services:</strong> <a href="https://blogs.ifas.ufl.edu/levyco/2023/07/11/theres-a-mosquito-season-in-florida/" target="_blank" rel="noopener" className="text-emerald-700 underline">UF/IFAS Extension</a> on Florida&rsquo;s year-round season, <a href="https://extension.psu.edu/mosquitoes" target="_blank" rel="noopener" className="text-emerald-700 underline">Penn State Extension</a> and <a href="https://texasinsects.tamu.edu/" target="_blank" rel="noopener" className="text-emerald-700 underline">Texas A&amp;M AgriLife</a>.</li>
            <li><strong>Canada:</strong> Health Canada&rsquo;s <a href="https://www.canada.ca/en/health-canada/services/consumer-product-safety/pesticides-pest-management.html" target="_blank" rel="noopener" className="text-emerald-700 underline">Pest Management Regulatory Agency</a> for product registration, and <a href="https://www.publichealthontario.ca/" target="_blank" rel="noopener" className="text-emerald-700 underline">Public Health Ontario</a> for provincial West Nile virus surveillance.</li>
          </ul>

          <h2>The bottom line on temperature and mosquitoes</h2>
          <p>Mosquitoes are governed almost entirely by temperature: they peak above 26&deg;C, slow below 15&deg;C, go dormant below 10&deg;C, and their active adults die in a hard frost around -2&deg;C. But because freeze-tolerant eggs and hibernating females survive every Ontario winter, no cold snap &mdash; and no single frost &mdash; actually clears your yard for good. Managing water and resting habitat is what shrinks the population you have to live with each summer.</p>

          <p>One addition for readers in the United States: everything in that paragraph holds from the Great Lakes northward, and the northern-US case is the Ontario case with a different flag on it. Below roughly the I-10 corridor it does not. <strong>South Florida, the Gulf Coast, South Texas, coastal Southern California, southern Arizona and Hawaii do not get a reliable 28&deg;F hard freeze, so cold never resets anything.</strong> In those regions mosquito pressure is set by rainfall and standing water alone, all twelve months of the year &mdash; which makes water management not merely the more effective lever, but the only one you have.</p>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/where-do-mosquitoes-go-in-winter-ontario">Where Do Mosquitoes Go in Winter in Ontario?</Link></li>
            <li><Link href="/blog/mosquito-season-gta-when-does-it-start">When Does Mosquito Season Start in the GTA?</Link></li>
            <li><Link href="/blog/when-are-mosquitoes-most-active">When Are Mosquitoes Most Active?</Link></li>
            <li><Link href="/mosquito-control">BuzzSkito Professional Mosquito Control Service</Link></li>
            <li><Link href="/blog/smells-mosquitoes-hate">What Smells Do Mosquitoes Hate? (What the Evidence Shows)</Link></li>
            <li><Link href="/blog/what-attracts-mosquitoes-to-you">What Attracts Mosquitoes to You?</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-mosquitoes-in-the-house">How to Get Rid of Mosquitoes in the House</Link></li>
            <li><Link href="/blog/does-standing-water-attract-mosquitoes">Does Standing Water Attract Mosquitoes?</Link></li>
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

      <CTASection heading="Don&rsquo;t wait for frost — get ahead of mosquito season" subtext="Licensed barrier spray for GTA backyards. From $99. Same-day yard protection. 30-day residual." variant="dark" />
    </>
  )
}
