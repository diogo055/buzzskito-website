import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import AuthorByline from '@/components/AuthorByline'
import BuyLink from '@/components/BuyLink'
import AffiliateDisclosure from '@/components/AffiliateDisclosure'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'

const SLUG = 'june-bugs-ontario'
const DATE = '2026-07-12'
const UPDATED = '2026-07-12'
const TITLE = 'June Bugs in Ontario: ID, Why They Swarm Lights & How to Stop Them'

const FAQS = [
  {
    question: 'What is a June bug?',
    answer: 'A June bug (also called a June beetle or May beetle) is a large, oval, reddish-brown to dark-brown beetle in the genus Phyllophaga. In Ontario the name is also used loosely for the European chafer and the Japanese beetle. Adults are 12–25 mm long, have a hard shiny shell, fly clumsily on warm nights, and are strongly drawn to lights. They are completely harmless to people.',
  },
  {
    question: 'Are June bugs harmful — do they bite or sting?',
    answer: 'No. June bugs do not bite, sting, or carry disease, and they are not venomous. The worst an adult June bug does to a person is bumble into you or cling to a screen with its clawed feet, which can feel prickly but cannot break skin. The real damage is done underground by their larvae — white grubs that chew grass roots and can kill patches of lawn.',
  },
  {
    question: 'Why do June bugs swarm my porch light?',
    answer: 'June bugs are nocturnal and use light for navigation, so artificial lights overwhelm their senses and pull them in — a behaviour called positive phototaxis. On warm, humid May-to-July evenings the adults leave the soil to mate and fly straight toward the brightest fixture, which is usually a porch, patio, or window light. Switching to a yellow "bug light" LED or a motion sensor greatly reduces how many show up.',
  },
  {
    question: 'When are June bugs active in Ontario?',
    answer: 'Adult June bugs appear in Ontario from mid-May through July, peaking in June — hence the name. They are most active after dark on warm nights above roughly 18°C. Each adult lives only a few weeks; its job is to mate and lay eggs. European chafers tend to swarm in a dense evening cloud around trees in late June, while true Phyllophaga June bugs are the ones that thud against your window screen.',
  },
  {
    question: 'What are June bug grubs and do they damage lawns?',
    answer: 'Yes. June bug larvae are white grubs — fat, C-shaped, cream-coloured larvae with a brown head that live in the top few centimetres of soil and feed on grass roots. Heavy feeding leaves spongy brown patches of turf that lift like a loose carpet, and it draws skunks, raccoons, and birds that tear up the lawn to eat the grubs. Grub damage is usually worst in late summer and early fall.',
  },
  {
    question: 'How do I get rid of June bugs?',
    answer: 'Attack both stages. For adults: dim or yellow your outdoor lights, use motion-sensor fixtures, and hand-pick beetles into soapy water in the evening. For the lawn grubs that produce next year\'s beetles, apply beneficial nematodes (Heterorhabditis bacteriophora) to moist soil in late summer, keep the lawn thick and well-watered, and overseed thin areas. A healthy, dense lawn is the single best long-term deterrent.',
  },
  {
    question: 'Do June bug traps work?',
    answer: 'Somewhat, with a caveat. Light traps and pheromone/floral-lure beetle traps do catch adults, but research on Japanese beetle traps shows they can attract more beetles into your yard than they kill, concentrating damage nearby. If you use a trap, place it at the edge of your property well away from the plants and lawn you want to protect — never in the middle of the garden.',
  },
  {
    question: 'Are June bugs the same as Japanese beetles?',
    answer: 'Not exactly, but they are close cousins in the same scarab family. True June bugs (Phyllophaga) are plain reddish-brown and mostly a nuisance at lights. Japanese beetles (Popillia japonica) are smaller, metallic green with coppery wing covers and white tufts along the sides, and they seriously chew garden foliage during the day. Both produce white-grub larvae that damage turf, so lawn-grub control helps with either one.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: 'June Bugs Ontario: ID, Why They Swarm Lights & How to Stop Them',
  description: 'June bugs (June beetles) are harmless to people but their white-grub larvae wreck lawns. How to identify them, why they swarm porch lights, their grub lifecycle, and how to keep them out of your Ontario yard.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

export default function JuneBugsOntarioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'How to identify June bugs in Ontario, why they swarm lights, their grub lifecycle, and how to keep them away.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'June Bugs in Ontario', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-emerald-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">June Bugs in Ontario</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">Those clumsy brown beetles thumping against your porch light every June — what they are, whether they&rsquo;re dangerous, and how to stop the grubs that create them.</p>
        </div>
      </section>

      {/* Quick Answer — AI-extraction block */}
      <section className="bg-amber-50 border-y-4 border-amber-300 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between gap-3 mb-2">
            <p className="text-xs font-extrabold text-amber-700 uppercase tracking-wider">Quick Answer</p>
            <p className="text-xs font-semibold text-amber-700">Updated July 2026</p>
          </div>
          <h2 className="text-xl font-extrabold text-brand-900 mb-3">Are June bugs dangerous, and how do I get rid of them?</h2>
          <p className="speakable text-base text-gray-800 leading-relaxed">
            <strong>June bugs (also called June beetles or May beetles) are large, clumsy, reddish-brown beetles in the genus Phyllophaga that swarm porch lights on warm May–July nights in Ontario.</strong> They are completely harmless to people — they do not bite, sting, or spread disease. Their white-grub larvae, however, can damage lawns by feeding on grass roots. To control them, dim or yellow your outdoor lights to stop the adults, and treat the lawn with beneficial nematodes in late summer to kill next year&rsquo;s grubs.
          </p>
          <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
            <li>June bugs are 15–25 mm, reddish-brown scarab beetles in the genus Phyllophaga.</li>
            <li>Adults are active in Ontario from mid-May through July, peaking in June, on nights above roughly 18°C.</li>
            <li>June bugs do not bite, sting, or carry disease — they are harmless to people and pets.</li>
            <li>Their larvae are white grubs that feed on grass roots and can kill patches of lawn.</li>
            <li>Apply beneficial nematodes (Heterorhabditis bacteriophora) to moist soil in late summer to kill next year&rsquo;s grubs.</li>
            <li>Switching to warm-yellow &ldquo;bug light&rdquo; LEDs or motion-sensor fixtures sharply cuts how many adults show up.</li>
          </ul>
          <p className="mt-3 text-xs text-gray-500">— BuzzSkito, GTA mosquito &amp; tick control · 150+ five-star Google reviews</p>
        </div>
      </section>

      {/* ID table */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">June Bug Identification: The Three Beetles Ontarians Call &ldquo;June Bugs&rdquo;</h2>
          <div className="rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-3 py-2 text-left">Beetle</th>
                  <th className="px-3 py-2 text-left">Look</th>
                  <th className="px-3 py-2 text-left">Size</th>
                  <th className="px-3 py-2 text-left">Peak in Ontario</th>
                  <th className="px-3 py-2 text-left">Main damage</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['True June bug (Phyllophaga)', 'Plain reddish-brown, glossy, oval', '15–25 mm', 'June, at night', 'Grubs eat grass roots; adults nibble tree leaves'],
                  ['European chafer (Amphimallon majale)', 'Tan to light brown, matte', '13–15 mm', 'Late June, dusk swarms', 'Grubs — Ontario’s #1 lawn-grub pest'],
                  ['Japanese beetle (Popillia japonica)', 'Metallic green + coppery wings, white side tufts', '10–13 mm', 'July, daytime', 'Adults skeletonize plants; grubs damage turf'],
                ].map(([beetle, look, size, peak, dmg]) => (
                  <tr key={beetle} className="border-t border-gray-100 align-top">
                    <td className="px-3 py-2 font-semibold text-brand-800">{beetle}</td>
                    <td className="px-3 py-2 text-gray-700">{look}</td>
                    <td className="px-3 py-2 text-gray-700">{size}</td>
                    <td className="px-3 py-2 text-gray-700">{peak}</td>
                    <td className="px-3 py-2 text-gray-700">{dmg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">All three are scarab beetles (family Scarabaeidae). The larval stage of each is a white grub that feeds on turf roots, so lawn-grub control helps against all of them.</p>
        </div>
      </section>

      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <AffiliateDisclosure />

          <h2>What Exactly Is a June Bug?</h2>
          <p>&ldquo;June bug&rdquo; is a catch-all nickname, not a single species. In Ontario it usually means one of the plain reddish-brown scarab beetles in the genus <strong>Phyllophaga</strong> — the ones that appear out of nowhere in June, fly like they&rsquo;ve never done it before, and pile up under the porch light by morning. The same name gets stretched to cover the <strong>European chafer</strong> and the <strong>Japanese beetle</strong>, two close relatives whose grubs are the real lawn villains. All of them are scarabs: hard-shelled, oval, with clubbed antennae and clawed feet that snag on window screens and pant legs.</p>
          <p>Adults live only a few weeks. Their entire adult purpose is to mate and lay eggs in the soil, which is why they are so single-minded about flying toward lights and so indifferent to you. If one lands on your arm, it is trying to get a grip, not to bite — June bugs have chewing mouthparts built for leaves, not skin.</p>

          <h2>Why Do June Bugs Swarm Porch Lights?</h2>
          <p>June bugs are nocturnal and navigate partly by natural light. A bright artificial fixture overwhelms that system and draws them straight in — a behaviour called <strong>positive phototaxis</strong>. On warm, humid evenings above about 18°C in late May through July, freshly emerged adults leave the soil to mate and orient toward the brightest thing around, which is almost always your porch, patio, or a lit window.</p>
          <p>This is also why bug-light gadgets are hit or miss. Electric bug zappers do kill beetles that hit the grid, but they attract far more insects to your space than they eliminate, and they mostly zap harmless bugs while missing biting pests entirely — we cover that in detail in our guide to <Link href="/blog/bug-zappers-canada-do-they-work">whether bug zappers actually work in Canada</Link>. For June bugs specifically, the cheapest fix is to remove the attractant: switch to warm-yellow &ldquo;bug light&rdquo; LEDs, put outdoor lights on motion sensors, close blinds on lit windows, and turn off decorative lighting during peak swarm weeks.</p>

          <h2>Are June Bugs Harmful? (Short Answer: No)</h2>
          <p>To people and pets, adult June bugs are harmless. They do not bite or sting, they carry no disease, and they are not toxic if a curious dog eats one — the worst outcome is a bit of drool or a mild upset stomach from the hard shell. They cannot damage your home&rsquo;s structure the way carpenter ants or termites can. The nuisance is purely that: noise, mess under the lights, and the occasional startle when one dive-bombs the patio table.</p>
          <p>The genuine harm happens below ground and is caused by the <strong>larvae</strong>. That is where June bugs go from harmless novelty to lawn problem.</p>

          <h2>The June Bug Lifecycle: From White Grub to Beetle</h2>
          <p>Understanding the lifecycle is the key to actually controlling June bugs, because the adults you swat at the light are the least vulnerable stage. The cycle runs underground:</p>
          <ol>
            <li><strong>Eggs (early summer).</strong> Mated females burrow a few centimetres into moist soil — often a lush, watered lawn — and lay eggs.</li>
            <li><strong>White grubs (summer to fall).</strong> Eggs hatch into fat, C-shaped, cream-coloured grubs with a brown head. They live in the root zone and feed on grass roots. European chafer and Japanese beetle complete this in one year; true Phyllophaga June bugs can take two to three years underground.</li>
            <li><strong>Overwintering.</strong> As the soil cools, grubs burrow deeper below the frost line and go dormant, then rise again in spring to feed on roots one last time.</li>
            <li><strong>Pupae (late spring).</strong> Mature grubs pupate in the soil.</li>
            <li><strong>Adults (May–July).</strong> Beetles emerge, fly to your lights, mate, and restart the cycle.</li>
          </ol>
          <p>This is why the beetles at the light in June are, in effect, last year&rsquo;s (or years-ago&rsquo;s) grub damage coming back to breed. Break the grub stage and next summer&rsquo;s swarm shrinks.</p>

          <aside aria-label="Professional yard pest control" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">Sharing your yard with more than just June bugs?</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">June bugs are just a nuisance, but the mosquitoes and ticks in the same yard are not. BuzzSkito&rsquo;s professional barrier spray treats the shaded edges and vegetation where biting pests hide — from $99, backed by 150+ five-star reviews across 19 GTA cities.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/free-yard-assessment" className="btn-primary-sm">Get a Free Quote →</Link>
              <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
            </div>
          </aside>

          <h2>Spotting White-Grub Lawn Damage</h2>
          <p>Grub damage tends to peak in late summer and early fall. Watch for:</p>
          <ul>
            <li><strong>Irregular brown patches</strong> that don&rsquo;t green up after watering, spreading as the grubs feed outward.</li>
            <li><strong>Spongy turf that lifts like loose carpet</strong> — because the roots holding it down have been chewed away.</li>
            <li><strong>Animals digging.</strong> Skunks, raccoons, and birds tearing up the lawn overnight are hunting the grubs; the digging often does more visible damage than the grubs themselves.</li>
          </ul>
          <p>To confirm, cut and peel back a 30 cm square of sod at the edge of a brown patch. More than about five to ten grubs per square foot signals a population worth treating.</p>

          <h2>Lawn-Grub Control: Where the Real Fight Is</h2>
          <p>Killing next season&rsquo;s beetles means dealing with grubs, and the most effective options are biological:</p>
          <ul>
            <li><strong>Beneficial nematodes (Heterorhabditis bacteriophora).</strong> These microscopic roundworms seek out and kill grubs in the soil. Apply them to moist soil on an overcast evening in late summer (when young grubs are near the surface), and water them in. They are living organisms, so buy fresh and use promptly.</li>
            <li><strong>Keep the lawn thick and deep-rooted.</strong> Mow high (7–8 cm), water deeply but infrequently to encourage deep roots, and overseed thin areas. Dense turf tolerates a modest grub population without showing damage, and a robust root system recovers faster.</li>
            <li><strong>Time your watering.</strong> Since females prefer moist soil for egg-laying, letting an established lawn dry slightly during the peak June egg-laying window can reduce how many eggs survive — without starving the grass.</li>
          </ul>
          <p>Ontario restricts many traditional lawn insecticides for cosmetic use, so nematodes and good lawn husbandry are both the legal and the effective route for most homeowners. Health Canada&rsquo;s Pest Management Regulatory Agency registers the products that are legal to use — you can check current options through <a href="https://www.canada.ca/en/health-canada/services/consumer-product-safety/pesticides-pest-management.html" target="_blank" rel="noopener" className="underline hover:text-brand-700">Health Canada&rsquo;s pesticides and pest management resources</a> before buying anything.</p>

          <h2>How to Keep June Bugs Away From the House</h2>
          <p>You can&rsquo;t stop every beetle in a good flight year, but you can make your patio far less of a magnet:</p>
          <ol>
            <li><strong>Change your lights.</strong> Warm-yellow LED &ldquo;bug lights&rdquo; and motion-sensor fixtures cut the swarm dramatically because June bugs orient to bright, cool-white light.</li>
            <li><strong>Draw the blinds</strong> on lit windows during peak weeks so interior light doesn&rsquo;t leak out.</li>
            <li><strong>Hand-pick in the evening.</strong> Knocking beetles off plants into a bucket of soapy water is oddly effective for small yards and protects foliage.</li>
            <li><strong>Trap at the property edge, not the middle.</strong> If you use a June bug or Japanese beetle trap, place it far from the plants you want to protect — lures can pull in more beetles than they catch. <BuyLink search="june bug beetle trap">Check June bug trap prices on Amazon.ca →</BuyLink></li>
            <li><strong>Fix the lawn.</strong> Everything above about grub control is your long game — fewer grubs this year means fewer beetles next year.</li>
          </ol>
          <p>And if the beetles at the light are the least of your outdoor-pest worries, the same yard habits that harbour grubs — moisture, shade, and dense edge vegetation — are exactly where mosquitoes and ticks thrive too. A <Link href="/mosquito-control">professional barrier spray program</Link> targets those zones for the pests that actually bite, and pairs well with the lawn care that keeps June bug grubs down. See also our guide to <Link href="/blog/how-to-get-rid-of-mosquitoes-in-yard-ontario">getting rid of mosquitoes in an Ontario yard</Link>.</p>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/bug-zappers-canada-do-they-work">Do Bug Zappers Actually Work in Canada?</Link></li>
            <li><Link href="/blog/how-to-get-rid-of-mosquitoes-in-yard-ontario">How to Get Rid of Mosquitoes in Your Yard (Ontario)</Link></li>
            <li><Link href="/blog/do-cedar-trees-attract-mosquitoes">Do Cedar Trees Attract Mosquitoes?</Link></li>
            <li><Link href="/mosquito-control">BuzzSkito Professional Mosquito Control Service</Link></li>
          </ul>
        </div>
      </article>

      <CTASection heading="June Bugs Are Harmless — Mosquitoes and Ticks Aren&rsquo;t" subtext="Get a free quote for licensed barrier spray. From $99. Same-day yard protection across the GTA." variant="dark" />
    </>
  )
}
