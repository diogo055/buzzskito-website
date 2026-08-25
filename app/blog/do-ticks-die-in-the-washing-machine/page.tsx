import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import AuthorByline from '@/components/AuthorByline'
import { buildMetadata, breadcrumbSchema, blogPostingSchema, faqSchema, speakableSchema } from '@/lib/seo'

const SLUG = 'do-ticks-die-in-the-washing-machine'
const DATE = '2026-07-16'
const UPDATED = '2026-07-16'
const TITLE = 'Do Ticks Die in the Washing Machine or Dryer? (What Actually Works)'
const META_TITLE = 'Do Ticks Die in the Washing Machine? 10-Min Fix'

const FAQS = [
  {
    question: 'Do ticks die in the washing machine?',
    answer: 'Not reliably. Ticks are highly resistant to water and detergent, and they survive cold and warm wash cycles routinely. In a 2016 study by Nelson and colleagues (Journal of Medical Entomology), only water at 54°C (130°F) or hotter killed 100 percent of blacklegged (deer) ticks — the species that carries Lyme disease in Ontario. Because most Canadian home water heaters are set to about 49°C (120°F) for scald safety, a normal "hot" home wash often leaves ticks alive. The dryer, not the washer, is what actually kills ticks.',
  },
  {
    question: 'Does washing clothes in hot water kill ticks?',
    answer: 'Only if the water is truly hot — 54°C (130°F) or higher. In testing, ticks survived cold water completely and roughly half survived a warm-water wash. Even many household "hot" washes fall short of the kill threshold because water heaters are commonly capped near 49°C (120°F). If you rely on washing alone, use the hottest water setting available, but do not assume the wash killed the tick. Follow it with a high-heat dryer cycle, which is the step that reliably does the job.',
  },
  {
    question: 'Do ticks survive the dryer?',
    answer: 'Only if you use low heat or no heat. On low or air-dry settings, ticks can survive an hour or more in the dryer. On HIGH heat, they die quickly. The U.S. Centers for Disease Control and Prevention (CDC) recommends tumble-drying dry clothes on high heat for 10 minutes to kill ticks. The mechanism is desiccation — ticks dry out and die in hot, dry air far faster than they die from wet heat, which is exactly why the dryer beats the washer.',
  },
  {
    question: 'What temperature kills ticks on clothes?',
    answer: 'For washing, all ticks were killed only at water temperatures of 54°C (130°F) or above in the Nelson et al. 2016 study; cooler water left survivors. For drying, the key factor is dry heat rather than a single number — a household dryer on its high-heat setting reaches roughly 60–75°C (140–170°F) and kills ticks through desiccation. CDC guidance translates this to 10 minutes on high heat for dry clothing, with additional time if the clothes are damp.',
  },
  {
    question: 'How long should clothes stay in the dryer to kill ticks?',
    answer: 'Ten minutes on high heat is enough for DRY clothing, according to CDC guidance. Damp or wet clothes need considerably longer — often an additional 50 to 60 minutes — because the evaporating moisture keeps the fabric cool and protects the tick until it dries. That is why the most reliable sequence is to tumble the clothes you wore straight into a hot dryer first, before washing, so the fabric is dry and the desiccating heat reaches the tick immediately.',
  },
  {
    question: 'Should I wash or dry clothes first to kill ticks?',
    answer: 'Dry first if killing ticks is the goal. Putting the dry clothes you hiked in straight into a high-heat dryer for 10 minutes desiccates any ticks before they can crawl off. Washing first soaks the fabric, and wet clothes then need a much longer dryer cycle to kill a tick. If the clothes are muddy and must be washed, use the hottest water available, then still run a full high-heat dry cycle afterward — the dry heat is the part that finishes the job.',
  },
  {
    question: 'Can a tick survive a wash and crawl out later?',
    answer: 'Yes. Because ticks tolerate water and detergent so well, a tick that survives a wash can remain alive on the damp clothing, in the machine, or in the laundry basket and later crawl onto a person or pet. This is one of the main reasons the CDC emphasizes drying: a 10-minute high-heat dryer cycle removes the risk of a live hitchhiker that a wash alone can leave behind. Never leave worn outdoor clothing in a pile — put it in the dryer promptly.',
  },
  {
    question: 'Does putting damp clothes in the dryer kill ticks?',
    answer: 'Eventually, but it takes much longer. Moisture in the fabric keeps the surface temperature down and delays the desiccation that kills the tick, so damp clothes need extra dryer time — commonly an added 50 to 60 minutes beyond the 10 minutes that dry clothes require. For efficiency and certainty, dry the clothes you wore before washing them, or add a long high-heat cycle after the wash.',
  },
  {
    question: 'Do ticks die in the freezer or in cold water?',
    answer: 'Cold is far less reliable than dry heat. Ticks tolerate cold water completely and survive brief chilling, and blacklegged ticks are cold-hardy enough to stay active in Ontario near freezing. Freezing a tick can eventually kill it, but it generally takes sustained sub-freezing temperatures for many hours to a few days, which is impractical for laundry. The dryer is faster and surer: 10 minutes on high heat versus days in a freezer.',
  },
  {
    question: 'What is the best way to handle clothes after a hike in Ontario?',
    answer: 'Do a quick visual sweep before you get in the car, then within two hours of coming inside put the clothes you wore straight into a dryer on high heat for at least 10 minutes to kill any ticks. Shower and do a full-body tick check while the dryer runs. Wash the clothes afterward if needed. This dry-first sequence, paired with a same-day body check, is one of the most effective ways to prevent tick bites during Ontario tick season (roughly April through November). See PHAC and Government of Canada Lyme disease resources for current guidance.',
  },
]

export const metadata: Metadata = buildMetadata({
  title: META_TITLE,
  description: 'Washing clothes — even hot — does not reliably kill ticks; only water at 54°C kills them. A dryer on high heat for 10 minutes does, via desiccation. The research, temperatures, and a post-hike protocol.',
  canonical: `/blog/${SLUG}`,
  type: 'article',
  publishedTime: DATE,
  modifiedTime: UPDATED,
})

export default function DoTicksDieInTheWashingMachinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema({ title: TITLE, description: 'Whether washing and drying clothes kills ticks, the temperatures that work, and a post-hike laundry protocol for Ontario.', slug: SLUG, datePublished: DATE, dateModified: UPDATED })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Do Ticks Die in the Washing Machine?', url: `/blog/${SLUG}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema(`/blog/${SLUG}`, UPDATED)) }} />

      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-amber-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-brand-400 text-sm mb-4 flex gap-1">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Do Ticks Die in the Washing Machine?</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
          <p className="text-xl text-brand-100 max-w-3xl">The washer usually doesn&rsquo;t kill ticks &mdash; the dryer does. Here&rsquo;s the research, the exact temperatures, and the post-hike laundry routine that actually works in Ontario.</p>
        </div>
      </section>

      {/* Quick Answer — AI-extraction capsule (first content element) */}
      <section className="bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 speakable">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">Quick Answer</p>
            <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
              BuzzSkito&rsquo;s GTA technicians: washing clothes &mdash; even in hot water &mdash; does <em>not</em> reliably kill ticks, but 10 minutes in a dryer on high heat does.
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
              <li>A dryer on <strong>HIGH heat kills ticks on dry clothing in about 10 minutes</strong>, according to CDC guidance.</li>
              <li>Ticks die in the dryer from <strong>desiccation (drying out), not heat alone</strong> &mdash; they tolerate wet heat but not dry heat.</li>
              <li>Washing does not reliably kill ticks: only water at <strong>54&deg;C (130&deg;F) or hotter killed 100% of blacklegged ticks</strong> in a 2016 study (Nelson et al., Journal of Medical Entomology).</li>
              <li>Most Canadian home water heaters are set to about <strong>49&deg;C (120&deg;F)</strong> &mdash; below the kill threshold &mdash; so a &ldquo;hot&rdquo; home wash often leaves ticks alive.</li>
              <li>Roughly <strong>half of ticks survived a warm-water wash</strong> in testing, and ticks survived cold water completely.</li>
              <li><strong>Dry your worn clothes first, then wash</strong> &mdash; damp fabric needs 50&ndash;60 extra minutes in the dryer to kill a tick.</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">&mdash; BuzzSkito, GTA mosquito &amp; tick control &middot; 150+ five-star Google reviews</p>
          </div>
        </div>
      </section>

      {/* Temperature / method comparison table */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-brand-900 mb-4">What Kills Ticks on Clothing: Wash vs Dryer</h2>
          <div className="rounded-xl border border-gray-200 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-3 py-2 text-left">Method</th>
                  <th className="px-3 py-2 text-left">Temperature</th>
                  <th className="px-3 py-2 text-left">Does it kill ticks?</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Cold-water wash', '~15°C / 60°F', 'No — ticks survive completely'],
                  ['Warm-water wash', '~27°C / 80°F', 'Unreliable — ~half survive'],
                  ['Typical home "hot" wash', '~49°C / 120°F', 'Unreliable — below the kill threshold'],
                  ['Very hot wash', '≥54°C / 130°F', 'Yes — killed 100% in testing'],
                  ['Dryer — low / no heat', '—', 'No — ticks survive an hour or more'],
                  ['Dryer — HIGH heat, dry clothes', '~60–75°C / 140–170°F', 'Yes — 10 minutes (CDC)'],
                  ['Dryer — HIGH heat, damp clothes', 'same, but slower', 'Yes — needs ~50–60 min longer'],
                ].map(([method, temp, kills]) => (
                  <tr key={method} className="border-t border-gray-100 align-top">
                    <td className="px-3 py-2 font-semibold text-brand-800">{method}</td>
                    <td className="px-3 py-2 font-mono text-gray-700">{temp}</td>
                    <td className="px-3 py-2 text-gray-700">{kills}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">Wash temperatures and survival from Nelson et al., 2016 (Journal of Medical Entomology), using blacklegged / deer ticks (<em>Ixodes scapularis</em>). Dryer timing per the <a href="https://www.cdc.gov/ticks/" target="_blank" rel="noopener" className="underline hover:text-brand-700">U.S. Centers for Disease Control and Prevention (CDC) &mdash; Ticks</a>. Dryer surface temperatures are approximate and vary by model.</p>
        </div>
      </section>

      <article className="py-10 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-brand">
          <AuthorByline datePublished={DATE} dateModified={UPDATED} />

          <h2>Do ticks die in the wash?</h2>
          <p><strong>Usually not.</strong> Ticks are remarkably tolerant of water and laundry detergent, so a normal wash cycle &mdash; cold or warm &mdash; frequently leaves them alive and able to crawl out afterward. In a widely cited 2016 experiment published in the <em>Journal of Medical Entomology</em>, researchers put blacklegged (deer) ticks on clothing and ran them through household laundry machines. Ticks survived cold water completely, and only water heated to <strong>54&deg;C (130&deg;F) or above killed all of them</strong>.</p>
          <p>That number is the catch. Most Canadian and U.S. water heaters are deliberately set to around 49&deg;C (120&deg;F) to prevent scald injuries, which is a few crucial degrees below the tick-kill threshold. So even when you select the &ldquo;hot&rdquo; wash, the water arriving in the drum is often not hot enough to guarantee a kill. If your only tool were the washing machine, you would be gambling with a species that spreads Lyme disease.</p>

          <h2>Does washing clothes kill ticks?</h2>
          <p><strong>Not dependably, and colder settings barely dent them.</strong> In the same testing, roughly half of the ticks survived a warm-water wash, and survival was essentially total in cold water. Ticks breathe extremely slowly through tiny openings called spiracles and can effectively hold their breath for hours, which is part of why a submerged, agitated wash cycle does not drown them the way it would most insects.</p>
          <p>Washing does have real value &mdash; it removes mud, sweat, and any loose ticks that have not attached &mdash; but treat it as cleaning, not disinfecting. If you want to be confident a tick on your clothes is dead, washing is the wrong tool. The reliable step happens in the dryer, and it works for a reason worth understanding.</p>

          <h2>Do ticks survive the dryer?</h2>
          <p><strong>Only on low or no heat.</strong> On an air-dry or low-heat setting, ticks can ride out an hour or more in the tumbler unharmed. On <strong>high heat, they die fast.</strong> The CDC recommends tumble-drying dry clothes on high heat for <strong>10 minutes</strong> to kill ticks after you come indoors. The dryer succeeds precisely where the washer fails because it attacks a different weakness.</p>

          <h2>What temperature kills ticks on clothes?</h2>
          <p><strong>For washing, the answer is a hard number: 54&deg;C (130&deg;F) or hotter. For drying, the answer is dry heat rather than a single degree.</strong> A household dryer on its high setting typically reaches roughly 60&ndash;75&deg;C (140&ndash;170&deg;F), but the temperature is not the whole story &mdash; it is the combination of heat and <em>low humidity</em> that kills the tick.</p>

          <h3>Why the dryer works when the washer doesn&rsquo;t</h3>
          <p>Ticks are built to survive moisture; what they cannot survive is drying out. Their soft bodies lose water quickly in hot, dry air, and once they cross a certain point of dehydration they die &mdash; a process called <strong>desiccation</strong>. Wet heat, like hot wash water, actually keeps the tick hydrated even as it warms, which is why a tick can shrug off a warm bath but not a hot dryer. This is also why <strong>damp clothes take far longer to sterilize:</strong> the evaporating moisture holds the fabric temperature down and keeps the tick hydrated until the clothes finally dry, so the CDC notes that damp laundry needs additional time &mdash; commonly on the order of 50 to 60 minutes on top of the 10 minutes dry clothes require.</p>

          <h2>Do ticks die in cold water or the freezer?</h2>
          <p><strong>Cold is far less reliable than dry heat.</strong> Ticks tolerate cold water completely &mdash; it was the least effective wash setting in testing &mdash; and blacklegged ticks are cold-hardy by nature, staying active in Ontario on mild days even into late autumn and near freezing. You cannot count on a cold or cool cycle to kill anything.</p>
          <p>Freezing does eventually kill ticks, but it is slow and impractical for laundry. Sustained temperatures well below freezing for many hours to a few days are typically needed, and a brief spell in a home freezer often is not enough because ticks can tolerate short cold snaps. Some people freeze a tick they have removed simply to preserve it for identification, which is fine &mdash; but as a way to sterilize clothing, the dryer is far faster and surer: 10 minutes on high heat versus days in a freezer. Dry cleaning also kills ticks through heat and solvents, so professionally cleaned items are not a concern.</p>

          <h2>How to kill ticks on clothing (step-by-step)</h2>
          <p>The most reliable sequence puts the dryer first:</p>
          <ol>
            <li><strong>Dry before you wash.</strong> As soon as you come inside, put the dry clothes you wore straight into the dryer on <strong>high heat for at least 10 minutes</strong>. Dry fabric lets the desiccating heat reach the tick immediately.</li>
            <li><strong>Don&rsquo;t let clothes sit in a pile.</strong> A tick that survived on damp or worn clothing can crawl off in the hamper. Go from your body to the dryer, not to the floor.</li>
            <li><strong>Wash afterward if needed.</strong> If the clothes are muddy or sweaty, wash them after the dry cycle. Use the hottest water available, but remember the wash is for cleaning, not killing.</li>
            <li><strong>If you must wash first (very dirty clothes),</strong> then still run a full high-heat dry cycle afterward &mdash; and expect to add roughly 50&ndash;60 minutes because the fabric starts out wet.</li>
            <li><strong>Check the machine and basket.</strong> Wipe down the drum and don&rsquo;t leave worn outdoor clothing waiting overnight where a survivor could wander off.</li>
          </ol>

          <aside aria-label="Professional tick control" className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-7 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-900 mb-2 leading-tight">The best tick on your clothes is the one that never boarded</h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">Ticks quest from lawn edges, leaf litter, and shaded borders &mdash; then hitch a ride indoors. A seasonal barrier spray removes them where they wait, so far fewer ever reach your clothes or skin. BuzzSkito protects GTA yards with tick programs and single treatments from $99.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/tick-control" className="btn-primary-sm">Explore Tick Control &rarr;</Link>
              <a href="tel:+12892165030" className="font-bold text-brand-800 hover:text-brand-600 transition-colors">(289) 216-5030</a>
            </div>
          </aside>

          <h2>Your Post-Hike Clothing Protocol (In Order)</h2>
          <p>Laundry is one link in a chain. To actually keep ticks off your body after time in tall grass, brush, or woods, run this sequence:</p>
          <ol>
            <li><strong>Before you leave the trail:</strong> do a quick visual sweep of your lower legs and waistband, and brush off anything you see.</li>
            <li><strong>At the car:</strong> check the seats and brush pants before getting in &mdash; don&rsquo;t drive a hitchhiker home.</li>
            <li><strong>Within two hours of coming inside:</strong> the dry clothes you wore go straight into the dryer on high heat for 10 minutes.</li>
            <li><strong>While the dryer runs:</strong> shower and do a full-body <Link href="/blog/how-to-do-a-tick-check">tick check</Link>, feeling for a bump the size of a poppy seed in warm, hidden folds.</li>
            <li><strong>Don&rsquo;t forget gear and pets:</strong> backpacks, blankets, and the dog all carry ticks that later crawl onto people.</li>
          </ol>
          <p>The reason the same-day routine matters so much is timing. In Ontario, a blacklegged tick generally has to stay attached for roughly <strong>24 to 36 hours</strong> before it can transmit the bacteria behind Lyme disease, so catching one on your clothing &mdash; before it ever attaches &mdash; removes the risk entirely. If you want the full picture of how long these ticks stay alive and how they hang on, see our guide on <Link href="/blog/how-long-do-ticks-live">how long ticks live</Link>.</p>

          <h2>Stop Ticks Before They Reach the Laundry</h2>
          <p>Killing ticks in the dryer is a good last line of defence, but the fewer that climb onto you in the first place, the less you have to worry about. Most ticks that end up on clothing came from the yard&rsquo;s own edges &mdash; long grass, leaf litter, wood piles, and shaded borders where ticks quest for a host. Clearing those harbourage zones and treating the perimeter dramatically cuts how many ticks you carry indoors. Our guide on <Link href="/blog/how-to-keep-ticks-out-of-yard-ontario">how to keep ticks out of your yard in Ontario</Link> walks through the landscaping and barrier-spray steps that make the biggest difference.</p>

          <h2>The Bottom Line</h2>
          <p>Do ticks die in the washing machine? Usually no &mdash; not unless the water tops 54&deg;C (130&deg;F), which most home systems never reach. Do they die in the dryer? Yes, when you use <strong>high heat</strong>, because dry air desiccates them. The simple rule that follows from the research: <strong>dry your worn clothes on high heat for at least 10 minutes first, then wash.</strong> Pair that with a same-day body check and a tick-managed yard, and you have covered the three places a tick can get you &mdash; the yard, your body, and your laundry.</p>
          <p className="text-sm text-gray-600"><em>This article is general information, not medical advice. For health guidance on tick bites and Lyme disease, consult the <a href="https://www.canada.ca/en/public-health/services/diseases/lyme-disease.html" target="_blank" rel="noopener" className="underline hover:text-brand-700">Government of Canada &mdash; Lyme disease</a> resource, the Public Health Agency of Canada (PHAC), your local public health unit, or a healthcare provider.</em></p>

          <h2>Related Reading</h2>
          <ul>
            <li><Link href="/blog/how-to-do-a-tick-check">How to Do a Tick Check: Full-Body Checklist (Ontario)</Link></li>
            <li><Link href="/blog/how-long-do-ticks-live">How Long Do Ticks Live?</Link></li>
            <li><Link href="/blog/how-to-keep-ticks-out-of-yard-ontario">How to Keep Ticks Out of Your Yard (Ontario)</Link></li>
            <li><Link href="/tick-control">BuzzSkito Tick Control Service</Link></li>
          </ul>
        </div>
      </article>

      <CTASection heading="Fewer Ticks in the Yard Means Fewer in Your Laundry" subtext="A seasonal barrier spray removes ticks where they wait — lawn edges, leaf litter, and shaded borders. From $99." variant="dark" />
    </>
  )
}
