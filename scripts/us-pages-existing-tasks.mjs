// Builds data/us-pages/existing-tasks.json: the additive edits to pages that already exist
// (broadened guides, pages a keyword was merged into, the two pillar guides, product hubs).
//   node scripts/us-pages-existing-tasks.mjs
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

const DIR = join(process.cwd(), 'data', 'us-pages')
const plan = JSON.parse(readFileSync(join(DIR, 'plan.json'), 'utf8'))
const kw = JSON.parse(readFileSync(join(DIR, 'keywords.json'), 'utf8'))
const inv = JSON.parse(readFileSync(join(DIR, 'existing-inventory.json'), 'utf8'))
const byRank = Object.fromEntries(kw.map((k) => [Number(k.rank), k]))
const words = Object.fromEntries(inv.map((i) => [i.path, i.words]))
const spokes = (c) => plan.pages.filter((p) => p.kind === 'spoke' && p.cluster === c).map((p) => ({ path: p.path, about: p.keyword, type: p.type, covers: p.scope.split('. ')[0] }))
const PILLAR = { 'bed-bugs': '/learn/bed-bugs', ants: '/learn/ants', mice: '/learn/mice', cockroaches: '/learn/cockroaches', mosquitoes: '/blog/ultimate-backyard-mosquito-control-guide', ticks: '/blog/ultimate-tick-control-guide-ontario' }

const BROADEN = {
  '/blog/how-to-get-rid-of-mice-canada': { cluster: 'mice', also: ['best way to get rid of mice'], us: 'US rodenticide rules for consumer products (EPA: bait stations required, which actives consumers can and cannot buy), the CDC seal-up, trap-up, clean-up sequence, deer mice and hantavirus in the western US, and how the fall entry wave shifts by US climate region. The section must also answer "what is the best way to get rid of mice" in its first two sentences.' },
  '/blog/how-to-get-rid-of-ants-canada': { cluster: 'ants', us: 'the ant species US homeowners face that Canadian guidance skips (red imported fire ants, Argentine ants, ghost ants, crazy ants) and where, bait active ingredients sold to US consumers, EPA registration, and university extension guidance on baiting versus spraying.' },
  '/blog/how-to-get-rid-of-cockroaches-canada': { cluster: 'cockroaches', us: 'the species mix in the US (German everywhere; American, smokybrown and Turkestan in the South and Southwest; Oriental in the North), gel bait and insect growth regulator products available to US consumers, EPA guidance on cockroaches and asthma, and why total-release foggers are discouraged.' },
  '/blog/carpenter-ants-canada': { cluster: 'ants', us: 'the carpenter ant species by US region (black carpenter ant in the East, western black carpenter ant, Florida carpenter ant), swarm timing by region, products and actives available to US consumers, and when US extension services say to call a professional. Answer "how to get rid of carpenter ants" directly in the first two sentences.' },
  '/blog/mosquito-repellent-plants-ontario': { cluster: 'mosquitoes', us: 'which of these plants are perennial in which USDA hardiness zones (cite the USDA zone map), what university extension research in the US says about whether intact plants repel mosquitoes, and what CDC and EPA recommend instead. Answer "what plants repel mosquitoes" directly in the first two sentences.' },
  '/blog/what-kills-bed-bugs-instantly-canada': { cluster: 'bed-bugs', us: 'what is registered for bed bugs in the US and how to check a product with the EPA bed bug product search tool, the lethal temperatures in Fahrenheit, products available to US consumers that are not sold in Canada (named, not linked), and EPA and university extension guidance on contact killers versus residuals.' },
  '/blog/what-does-mouse-poop-look-like-canada': { cluster: 'mice', us: 'droppings sizes in inches, deer mouse droppings and hantavirus risk in the US (CDC), the CDC cleanup method with the bleach dilution in US measures, and how to tell mouse from rat, bat and cockroach droppings as US extension services describe them. Answer the search "mice droppings" directly.' },
  '/blog/bed-bug-spray-canada': { cluster: 'bed-bugs', us: 'how bed bug sprays are regulated in the US (EPA registration, the EPA bed bug product search tool), the active ingredient classes available to US consumers (pyrethroids, neonicotinoid combinations, desiccants, and others) and resistance, minimum-risk 25(b) products and what that exemption means, and what US university research found about over-the-counter sprays and foggers.' },
  '/blog/where-do-mosquitoes-go-in-winter-ontario': { cluster: 'mosquitoes', us: 'how overwintering differs across the US: year-round activity in south Florida, the Gulf Coast and Hawaii, the 50 degree Fahrenheit activity threshold, which species overwinter as eggs versus adults in the northern states, and when mosquito season restarts by US region (cite CDC, EPA or state extension).' },
}
const MERGE_TOPIC = {
  '/blog/mosquito-facts': { cluster: 'mosquitoes', us: 'mosquitoes in the United States: roughly how many species (CDC), the main disease-carrying genera, the season by region, and which US agencies track them.' },
  '/blog/bed-bug-bites': { cluster: 'bed-bugs', us: 'what CDC and the American Academy of Dermatology say bed bug bites look like and how reactions vary, and when to see a provider.' },
  '/blog/baby-bed-bugs-nymphs': { cluster: 'bed-bugs', us: 'nymph sizes in inches for each of the five stages and what US university extension services say about telling nymphs from look-alikes.' },
  '/blog/bugs-that-look-like-ticks': { cluster: 'ticks', us: 'the look-alikes US readers most often confuse with ticks by region and how to get a specimen identified through a state or university tick identification service.' },
  '/blog/do-ticks-fly-or-jump': { cluster: 'ticks', us: 'questing behaviour as CDC describes it and how each main US species (blacklegged, lone star, American dog) finds a host.' },
  '/blog/types-of-ticks-identification': { cluster: 'ticks', us: 'the US tick species CDC lists as biting people and the regions where each is found, with the diseases each can transmit.' },
  '/blog/can-mosquitoes-bite-through-clothes': { cluster: 'mosquitoes', us: 'what CDC recommends for clothing protection in the US, including permethrin-treated clothing at 0.5 percent and EPA-registered repellents.' },
  '/blog/how-to-get-rid-of-mosquitoes-in-the-house': { cluster: 'mosquitoes', us: 'the species that come indoors in the US (Culex and Aedes aegypti in the South), CDC guidance for controlling mosquitoes inside a home, and using EPA-registered indoor products by label.' },
}

const tasks = []
for (const b of plan.broaden) {
  const meta = BROADEN[b.page]
  const have = words[b.page] || 0
  tasks.push({ id: b.page.split('/').pop(), type: 'broaden', route: b.page.slice(1), page: b.page, keyword: byRank[b.rank].keyword, alsoAnswers: meta.also || [], usVolume: Number(byRank[b.rank].us_volume), currentWords: have, addWords: Math.max(700, 2700 - have), cluster: meta.cluster, usFocus: meta.us, hub: PILLAR[meta.cluster], linkTo: spokes(meta.cluster) })
}
for (const m of plan.merged) {
  const meta = MERGE_TOPIC[m.into]
  if (!meta) continue // rank 69 is folded into a broadened page
  tasks.push({ id: m.into.split('/').pop(), type: 'merge', route: m.into.slice(1), page: m.into, keyword: byRank[m.rank].keyword, usVolume: Number(byRank[m.rank].us_volume), currentWords: words[m.into] || 0, addWords: 350, cluster: meta.cluster, usFocus: meta.us, hub: PILLAR[meta.cluster], linkTo: spokes(meta.cluster) })
}
tasks.push({ id: 'ultimate-backyard-mosquito-control-guide', type: 'pillar-links', route: 'blog/ultimate-backyard-mosquito-control-guide', page: '/blog/ultimate-backyard-mosquito-control-guide', cluster: 'mosquitoes', addWords: 250, linkTo: [...spokes('mosquitoes'), ...plan.existingClusterPages.mosquitoes.map((p) => ({ path: p, about: 'existing page', covers: '' }))] })
tasks.push({ id: 'ultimate-tick-control-guide-ontario', type: 'pillar-links', route: 'blog/ultimate-tick-control-guide-ontario', page: '/blog/ultimate-tick-control-guide-ontario', cluster: 'ticks', addWords: 300, linkTo: [...spokes('ticks'), ...plan.existingClusterPages.ticks.map((p) => ({ path: p, about: 'existing page', covers: '' }))] })

const hub = (id, cluster, extra = []) => ({ id: `hub-${id}`, type: 'hub-refresh', route: `pest-product-guides/${id}`, page: `/pest-product-guides/${id}`, cluster, linkTo: [...spokes(cluster), ...extra] })
tasks.push(hub('bed-bug-control', 'bed-bugs', [{ path: '/learn/bed-bugs', about: 'the complete bed bug reference (hub page)', covers: '' }]))
tasks.push(hub('rodent-control', 'mice', [{ path: '/learn/mice', about: 'the complete mouse reference (hub page)', covers: '' }]))
tasks.push(hub('mosquito-gear', 'mosquitoes'))
tasks.push(hub('tick-gear', 'ticks'))
const existingIn = (re) => inv.filter((i) => re.test(i.slug) && i.path.startsWith('/blog/')).map((i) => ({ path: i.path, title: i.h1 || i.metaTitle }))
tasks.push({ id: 'hub-ant-control', type: 'hub-new', route: 'pest-product-guides/ant-control', page: '/pest-product-guides/ant-control', cluster: 'ants', pest: 'ants', existing: existingIn(/(^|-)ants?(-|$)/), linkTo: [...spokes('ants'), { path: '/learn/ants', about: 'the complete ant reference (hub page)', covers: '' }] })
tasks.push({ id: 'hub-cockroach-control', type: 'hub-new', route: 'pest-product-guides/cockroach-control', page: '/pest-product-guides/cockroach-control', cluster: 'cockroaches', pest: 'cockroaches', existing: existingIn(/roach/), linkTo: [...spokes('cockroaches'), { path: '/learn/cockroaches', about: 'the complete cockroach reference (hub page)', covers: '' }] })

writeFileSync(join(DIR, 'existing-tasks.json'), JSON.stringify(tasks, null, 1))
console.log(tasks.map((t) => `${t.type.padEnd(12)} ${t.page}  (+${t.addWords || 0} words, ${t.linkTo.length} links)`).join('\n'))
console.log(JSON.stringify(tasks.map((t) => ({ id: t.id, type: t.type }))))
