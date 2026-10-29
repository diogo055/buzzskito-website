// Downloads the licensed real photographs the scheduled pages use, converts them to web-sized
// WebP in public/guides/photos/, and records each in data/god-build/photos.json with the credit
// and licence read from the source page itself (never typed by hand). Originals go to
// data/god-build/raw/photos/ (not committed).
//
//   node scripts/god-build-photos.mjs           fetch what is missing
//
// Allowed: public domain (CDC PHIL images whose page says public domain; figures on www.nps.gov
// pages whose caption credits them "NPS Photo"), CC0, CC BY, CC BY-SA.
// Never NonCommercial or NoDerivatives. No AI images, no drawings.
import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'
import { createHash } from 'crypto'
import sharp from 'sharp'

const ROOT = process.cwd()
const RAW = join(ROOT, 'data', 'god-build', 'raw', 'photos')
const OUT = join(ROOT, 'public', 'guides', 'photos')
const LEDGER = join(ROOT, 'data', 'god-build', 'photos.json')
mkdirSync(RAW, { recursive: true }); mkdirSync(OUT, { recursive: true })

const PHIL_FILE = {
  1669: 'https://wwwn.cdc.gov/phil/phil_images/20040209/2/039.tif', 170: 'https://wwwn.cdc.gov/phil/phil_images/20030131/1/PHIL_170.tif',
  6351: 'https://wwwn.cdc.gov/phil/PHIL_Images/20041008/bfb184113dfd48569886cb369d49709e/6351.tif', 1205: 'https://wwwn.cdc.gov/phil/phil_images/20040122/2/phil_1205.tif',
  6301: 'https://wwwn.cdc.gov/phil/PHIL_Images/20040928/0a7356f6a8314c628fcd612327b5cdec/6301.tif', 4801: 'https://wwwn.cdc.gov/phil/PHIL_Images/20031006/f95ed091ed55412baba70bef1163fe82/4801.tif',
  5394: 'https://wwwn.cdc.gov/phil/phil_images/20040113/1/072.tif',
}
// [our file name, subject, source]
const PHOTOS = [
  ['blacklegged-tick-female', 'Blacklegged (deer) tick, Ixodes scapularis, adult female', { phil: 1669 }],
  ['blacklegged-tick-nymph-fingernail', 'Blacklegged tick nymph beside a fingernail, for size', { phil: 28382 }],
  ['western-blacklegged-tick-female', 'Western blacklegged tick, Ixodes pacificus, adult female', { phil: 8687 }],
  ['lone-star-tick-female', 'Lone star tick, Amblyomma americanum, adult female', { phil: 8683 }],
  ['lone-star-tick-male', 'Lone star tick, Amblyomma americanum, adult male', { phil: 8685 }],
  ['american-dog-tick-female', 'American dog tick, Dermacentor variabilis, adult female', { phil: 170 }],
  ['rocky-mountain-wood-tick-female', 'Rocky Mountain wood tick, Dermacentor andersoni, adult female', { phil: 10865 }],
  ['gulf-coast-tick-female', 'Gulf Coast tick, Amblyomma maculatum, adult female', { phil: 10876 }],
  ['gulf-coast-tick-life-stages', 'Gulf Coast tick life stages beside a pin, for size', { phil: 10879 }],
  ['brown-dog-tick-male', 'Brown dog tick, Rhipicephalus sanguineus, adult male', { phil: 31722 }],
  ['asian-longhorned-tick-female', 'Asian longhorned tick, Haemaphysalis longicornis, adult female', { phil: 22886 }],
  ['asian-longhorned-tick-on-dime', 'Asian longhorned tick nymph and adult female on a US dime, for size', { phil: 22872 }],
  ['groundhog-tick', 'Groundhog (woodchuck) tick, Ixodes cookei, engorged (the source records no sex or life stage)', { inat: { obs: 168811425, photo: 292607194 } }],
  ['aedes-aegypti-female', 'Yellow fever mosquito, Aedes aegypti, female', { phil: 26042 }],
  ['aedes-albopictus', 'Asian tiger mosquito, Aedes albopictus', { phil: 26043 }],
  ['culex-quinquefasciatus-female', 'Southern house mosquito, Culex quinquefasciatus, female', { phil: 26026 }],
  ['culex-tarsalis-female', 'Western encephalitis mosquito, Culex tarsalis, female', { phil: 7955 }],
  ['culex-pipiens', 'Northern house mosquito, Culex pipiens', { commons: 'Common_House_Mosquito_culex_pipiens.jpg' }],
  ['anopheles-quadrimaculatus', 'Common malaria mosquito, Anopheles quadrimaculatus', { phil: 27676 }],
  ['aedes-vexans', 'Inland floodwater mosquito, Aedes vexans', { commons: 'Inland_Floodwater_Mosquito_(48453823681).jpg' }],
  ['psorophora-ciliata', 'Gallinipper, Psorophora ciliata', { commons: 'Gallinipper_(Culicidae,_Psorophora_ciliata)_(30015323241).jpg' }],
  ['culex-larvae', 'Culex mosquito larvae in water', { phil: 26020 }],
  // second batch (Oct 15): identification pages and their upgrades
  ['bed-bug-adult-ruler', 'Bed bug, Cimex lectularius, adult beside a millimetre ruler (CDC does not say whether it has fed)', { phil: 12704 }],
  ['bed-bug-nymph', 'Bed bug nymph on fabric', { inat: { obs: 325824918, photo: 589997406 } }],
  ['bed-bug-signs', 'Bed bugs, Cimex lectularius, in an infestation, on fabric (the source does not identify cast skins or fecal spots)', { inat: { obs: 9978781, photo: 13712297 } }],
  ['clover-mite', 'Clover mite, Bryobia praetiosa, under a digital microscope', { commons: 'Clover mite (Bryobia praetiosa) viewed with digital microscope.jpg' }],
  ['red-velvet-mite', 'Red velvet mite (Trombidiidae) on bark', { commons: 'Huge Red Velvet Mite - Flickr - treegrow.jpg' }],
  ['chigger-and-pinhead', 'Chigger larva and adult mite on the head of a pin, for size', { phil: 14763 }],
  ['chigger-bites-ruler', 'Three chigger bites on an arm about 10 days after the bites, beside a ruler (each welt about 3 to 4 mm)', { phil: 12069 }],
  ['spider-beetle', 'Spider beetle, Gibbium psylloides', { commons: 'Gibbium psylloides (Czenpinski, 1778) (28038744750).png' }],
  ['carpet-beetle', 'Carpet beetle adult beside a 1 mm scale bar', { inat: { obs: 10606651, photo: 14791086 } }],
  ['carpet-beetle-larva', 'Carpet beetle larva', { inat: { obs: 22181694, photo: 34343615 } }],
  ['brown-recluse', 'Brown recluse spider, Loxosceles reclusa', { phil: 1125 }],
  ['brown-recluse-penny', 'Brown recluse spider beside a US penny, for size', { commons: 'Brown-recluse-coin.jpg' }],
  ['black-widow', 'Southern black widow, Latrodectus mactans, showing the red hourglass', { phil: 9854 }],
  ['wolf-spider', 'Wolf spider (Tigrosa helluo) carrying spiderlings', { inat: { obs: 122321677, photo: 207089662 } }],
  ['common-house-spider', 'Common house spider, Parasteatoda tepidariorum', { inat: { obs: 229533845, photo: 407445900 } }],
  ['biting-midge-culicoides', 'Biting midge (no-see-um), Culicoides sp., under a microscope', { inat: { obs: 334176083, photo: 606804973 } }],
  ['biting-midge-on-skin', 'Biting midge on human skin', { commons: 'CSIRO ScienceImage 11052 Biting midge on human skin.jpg' }],
  ['cat-flea', 'Cat flea, Ctenocephalides felis', { commons: 'Ctenocephalides felis ZSM.jpg' }],
  ['aedes-aegypti-pupae', 'Aedes aegypti mosquito pupae in water', { phil: 26035 }],
  ['anopheles-larvae', 'Anopheles quadrimaculatus larvae lying flat at the water surface', { phil: 27576 }],
  ['culex-egg-raft', 'Culex mosquito egg raft on water', { phil: 12549 }],
  ['aedes-albopictus-eggs', 'Asian tiger mosquito eggs on paper', { phil: 21723 }],
  ['erythema-migrans-rash', 'Erythema migrans, the expanding rash of early Lyme disease, on an upper arm', { phil: 9875 }],
  ['biting-midge-bites-ankles', 'Biting midge (no-see-um) bites on the ankles', { phil: 6351 }],
  ['mosquito-bite-welts', 'Mosquito bite welts on a leg', { commons: 'Aedes mosquito bites.jpg' }],
  ['bed-bug-bites-forearm', 'Bed bug bites on a forearm', { commons: 'Bedbugb1.JPG' }],
  ['flea-bites-lower-leg', 'Flea bites on the lower leg', { commons: 'Flea Bites to the Lower Leg of a Human Subject 01.jpg' }],
  ['brown-recluse-bite-necrosis', 'Localized tissue damage (necrosis) on a patient\'s calf four months after a brown recluse spider bite', { phil: 6266 }],
  ['tick-unfed-vs-engorged', 'Male and engorged female Ixodes ticks side by side (the source does not say whether the male has fed)', { phil: 23451 }],
  ['blacklegged-tick-life-stages', 'Blacklegged tick adult, nymph and larva', { phil: 1205 }],
  ['blacklegged-tick-adult-nymph-fingertip', 'Blacklegged tick adult and nymph on a fingertip, for size', { phil: 28383 }],
  // third batch (Oct 15): the planned topic pages (spiders, wasps and bees, biting flies, mites,
  // household bugs, scorpions, kissing bugs, ants, garden pests), scouted with every licence
  // read on the source page; notes per photo (where it was taken, caption limits, pages it serves): data/god-build/photo-notes-batch3.json
  ['brown-widow-spider', 'Brown widow spider, Latrodectus geometricus, adult female (dorsal view)', { inat: { obs: 4005515, photo: 4731311 } }],
  ['brown-widow-hourglass', 'Brown widow spider, Latrodectus geometricus, underside showing the orange hourglass', { phil: 20850 }],
  ['brown-widow-egg-sacs', 'Brown widow, Latrodectus geometricus, spiky egg sacs on a leaf', { inat: { obs: 391056042, photo: 716508683 } }],
  ['western-black-widow', 'Western black widow, Latrodectus hesperus, female in her web showing the red hourglass (Berkeley, California)', { inat: { obs: 193, photo: 121 } }],
  ['northern-black-widow', 'Northern black widow, Latrodectus variolus, female (red marks on the back of the abdomen)', { inat: { obs: 314473590, photo: 567986182 } }],
  ['false-black-widow', 'False black widow, Steatoda grossa, adult female', { commons: 'Kaldari Steatoda grossa female 01.jpg' }],
  ['joro-spider', 'Joro spider, Trichonephila clavata, female in her web (North Carolina)', { inat: { obs: 403928091, photo: 741703579 } }],
  ['golden-silk-orb-weaver', 'Golden silk orb weaver (banana spider), Trichonephila clavipes, female in her web (Anahuac National Wildlife Refuge, Texas)', { inat: { obs: 126590005, photo: 214804780 } }],
  ['yellow-garden-spider', 'Yellow garden spider, Argiope aurantia, in her web with the zigzag stabilimentum', { commons: 'Yellow Garden Spider Chapel Hill NC.jpg' }],
  ['spinybacked-orb-weaver', 'Spinybacked orb weaver, Gasteracantha cancriformis (Florida)', { commons: 'Gasteracantha cancriformis 172582232.jpg' }],
  ['grass-spider', 'Grass spider, Agelenopsis sp. (funnel weaver), dorsal view showing the striped body', { inat: { obs: 13441933, photo: 19727834 } }],
  ['grass-spider-sheet-web', 'Grass spider, Agelenopsis sp., on its sheet web', { inat: { obs: 216190668, photo: 382309216 } }],
  ['bold-jumping-spider', 'Bold jumping spider, Phidippus audax, adult female', { commons: 'Kaldari Phidippus audax 01.jpg' }],
  ['hobo-spider', 'Hobo spider, Eratigena agrestis (formerly Tegenaria agrestis), female', { commons: 'Tegenaria agrestis 070903.jpg' }],
  ['giant-house-spider', 'Giant house spider, Eratigena duellica (British Columbia)', { inat: { obs: 127929816, photo: 217245821 } }],
  ['yellow-sac-spider', 'Northern yellow sac spider, Cheiracanthium mildei (Toronto)', { inat: { obs: 135845728, photo: 231760331 } }],
  ['dark-fishing-spider', 'Dark fishing spider, Dolomedes tenebrosus', { inat: { obs: 4193795, photo: 4996289 } }],
  ['camel-spider-solifuge', 'Solifuge (camel spider, order Solifugae) from southern Colorado, on a white background', { commons: 'Solifuge on white background, 2026-09-28.jpg' }],
  ['texas-brown-tarantula', 'Texas brown tarantula, Aphonopelma hentzi (Bandera County, Texas)', { inat: { obs: 2981542, photo: 3427707 } }],
  ['woodlouse-spider', 'Woodlouse spider, Dysdera crocata (Philadelphia)', { inat: { obs: 364533454, photo: 665477429 } }],
  ['cellar-spider', 'Long-bodied cellar spider, Pholcus phalangioides (Foster City, California)', { inat: { obs: 296194035, photo: 533308905 } }],
  ['harvestman', 'Harvestman (daddy longlegs, order Opiliones), Leiobunum flavum, Maryland', { commons: 'Leiobunum flavum.jpg' }],
  ['crane-fly', 'Giant crane fly, Tipula abdominalis (Pennsylvania)', { commons: 'Giant Crane Fly (Tipula abdominalis) 01.jpg' }],
  ['desert-recluse', 'Desert recluse, Loxosceles deserta (Pima County, Arizona)', { inat: { obs: 328982725, photo: 596247926 } }],
  ['eastern-yellowjacket', 'Eastern yellowjacket, Vespula maculifrons, worker (dorsal view, pinned specimen)', { phil: 25402 }],
  ['yellowjacket-ground-nest', 'Western yellowjackets, Vespula pensylvanica, at the entrance of a ground nest', { inat: { obs: 63309210, photo: 101582819 } }],
  ['bald-faced-hornet', 'Bald-faced hornet, Dolichovespula maculata (Virginia)', { commons: 'Bald-faced Hornet - Dolichovespula maculata, Herndon, Virginia - 20779113131.jpg' }],
  ['bald-faced-hornet-nest', 'Bald-faced hornet nest (grey paper football) in a shrub', { commons: 'Bald-faced hornet nest (54699528523).jpg' }],
  ['dark-paper-wasp', 'Dark paper wasp, Polistes fuscatus, on goldenrod', { commons: 'Polistes fuscatus 157265190.jpg' }],
  ['european-paper-wasp', 'European paper wasp, Polistes dominula, on a dandelion', { commons: 'Feldwespe (März 2023) 2.jpg' }],
  ['paper-wasp-nest', 'Paper wasps, Polistes apachus, on their open-comb nest (Texas)', { commons: 'Paper wasp nest (Vespidae, Polistes apachus) (30960058872).jpg' }, { cropBottom: 0.11 }],
  ['european-hornet', 'European hornet, Vespa crabro, on a fruit tree branch', { commons: 'Hornisse (Juni 2024).jpg' }],
  ['northern-giant-hornet', 'Northern giant hornet, Vespa mandarinia, female (side view, museum specimen)', { commons: 'Murder hornet, f, side 2020-10-01-18.57.21 ZS PMax UDR (50408619612).jpg' }],
  ['yellow-legged-hornet', 'Yellow-legged hornet, Vespa velutina, on a bamboo leaf (France)', { commons: 'Vespa velutina - Frelon asiatique - Poitiers.jpg' }],
  ['cicada-killer', 'Eastern cicada killer, Sphecius speciosus, with a cicada (Minnesota)', { commons: 'Sphecius speciosus, dorsal.jpg' }],
  ['cicada-killer-burrow', 'Eastern cicada killer, Sphecius speciosus, on the soil mound at its burrow', { commons: 'Sphecius speciosus, Vorderansicht.jpg' }],
  ['black-and-yellow-mud-dauber', 'Black and yellow mud dauber, Sceliphron caementarium (museum specimen, side view)', { commons: 'Black and Yellow Mud Dauber (Sphecidae, Sceliphron caementarium (Drury)) (36164276721).jpg' }, { cropBottom: 0.145 }],
  ['organ-pipe-mud-dauber-nest', 'Organ-pipe mud dauber, Trypoxylon politum, mud-tube nest (Washington, DC)', { commons: 'Pipe Organ Mud Dauber Nest - Flickr - treegrow.jpg' }],
  ['blue-mud-dauber-on-nest', 'Blue mud dauber, Chalybion californicum, reusing an old black-and-yellow mud dauber nest', { commons: 'Chalybion californicum (526309709).jpg' }],
  ['carpenter-bee-nest-hole', 'Eastern carpenter bee, Xylocopa virginica, at its nest hole in a wooden beam', { inat: { obs: 238779792, photo: 425435133 } }],
  ['common-eastern-bumble-bee', 'Common eastern bumble bee, Bombus impatiens, on a zinnia (Quebec City)', { commons: 'Bombus impatiens on Zinnia elegans at Jardin botanique Roger-Van den Hende.jpg' }],
  ['honey-bee', 'Western honey bee, Apis mellifera, worker (side view, museum specimen)', { commons: 'Apis mellifera, F, Side, MD, Granite, marian 2014-01-26-11.36.20 ZS PMax (12756517263).jpg' }],
  ['honey-bee-stinging', 'Honey bee stinging a finger; the barbed stinger stays in the skin', { commons: 'Stechende Biene 12a.jpg' }],
  ['yellowjacket-sting-swelling', 'Swelling of the right hand after a yellow jacket sting (both hands shown for comparison)', { phil: 15131 }],
  ['mining-bee', 'Mining bee, Andrena dunningi, female (museum specimen, Maryland)', { commons: 'Andrena dunningi, F, side, MD, Harford County 2013-04-29-17.29 (41717251492).jpg' }],
  ['mining-bee-burrow', 'Mining bee (Andrena) burrow with its small mound of excavated soil in a lawn', { commons: 'A Miner Bee burrow and excavated soil, Andrena species.jpg' }],
  ['sweat-bee', 'Pure green sweat bee, Augochlora pura', { commons: 'Augochlora pura 74743908.jpg' }],
  ['tarantula-hawk', 'Tarantula hawk wasp, Pepsis sp. (Joshua Tree National Park)', { commons: 'Tarantula hawk (Pepsis sp.) (16663150373).jpg' }],
  ['velvet-ant', 'Female velvet ant described by the USGS Bee Lab as a cowkiller (Dasymutilla occidentalis); specimen from Hot Springs Village, Arkansas', { commons: 'Velvet Ant, F, Side, Hot Springs Village, AR 2015-08-20-15.39.20 ZS PMax UDR copy (21285701328).jpg' }],
  ['cow-killer-velvet-ant', 'Eastern velvet ant (cow killer), Dasymutilla occidentalis, female', { commons: 'Dasymutilla occidentalis (female).jpg' }],
  ['hairy-spider-beetle', 'White-marked spider beetle, Ptinus fur (a hairy spider beetle)', { commons: 'White-marked Spider-Beetle (Ptinus fur) - Bærum, Norway 2022-03-17.jpg' }],
  ['house-centipede', 'House centipede, Scutigera coleoptrata', { inat: { obs: 138657500, photo: 237034940 } }],
  ['silverfish', 'Common silverfish, Lepisma saccharinum (London, Ontario)', { inat: { obs: 154408715, photo: 266799256 } }],
  ['brown-marmorated-stink-bug', 'Brown marmorated stink bug, Halyomorpha halys, feeding on an apple', { commons: 'Brown marmorated stink bug feeding on apple.jpg' }],
  ['greenhouse-millipede', 'Greenhouse millipede, Oxidus gracilis (Columbus, Ohio)', { inat: { obs: 29949787, photo: 46769632 } }],
  ['asian-lady-beetle', 'Asian lady beetle, Harmonia axyridis (New Jersey)', { inat: { obs: 190510487, photo: 333990658 } }],
  ['asian-lady-beetle-aggregation', 'Aggregation of Asian lady beetles, Harmonia axyridis, on a door frame', { commons: 'Ladybug meeting I.png' }],
  ['camel-cricket', 'Greenhouse camel cricket, Tachycines asynamorus (Diestrammena asynamora), Maryland', { inat: { obs: 384357, photo: 480283 } }],
  ['may-june-beetle', 'May/June beetle, Phyllophaga sp. (Indiana)', { inat: { obs: 353850006, photo: 645572594 } }],
  ['green-june-beetle', 'Green June beetle, Cotinis nitida, on a fingertip (Virginia)', { commons: 'Green June Beetle (Scarabaeidae, Cotinis nitida) (28314207122).jpg' }, { cropBottom: 0.12 }],
  ['japanese-beetle-grub', 'Japanese beetle larva (white grub), Popillia japonica, in soil (Massachusetts)', { inat: { obs: 109403640, photo: 184383942 } }],
  ['boxelder-bug', 'Eastern boxelder bug, Boisea trivittata', { inat: { obs: 156911331, photo: 273459596 } }],
  ['european-earwig', 'European earwig, Forficula auricularia, female (Iowa)', { inat: { obs: 187200711, photo: 327325498 } }],
  ['indian-meal-moth', 'Indian meal moth, Plodia interpunctella, adult', { commons: 'Indianmeal moth 2009.jpg' }],
  ['sawtoothed-grain-beetle', 'Sawtoothed grain beetle, Oryzaephilus surinamensis', { commons: 'Oryzaephilus surinamensis 176670540.jpg' }],
  ['red-flour-beetle', 'Red flour beetle, Tribolium castaneum (about 1/8 inch long)', { commons: 'Tribolium castaneum.jpg' }],
  ['cigarette-beetle', 'Cigarette (tobacco) beetle, Lasioderma serricorne (side view)', { commons: 'CSIRO ScienceImage 10823 Lasioderma serricorne Tobacco or Cigarette Beetle.jpg' }],
  ['rice-weevil', 'Rice weevil, Sitophilus oryzae (Kentucky)', { inat: { obs: 200334640, photo: 353431096 } }],
  ['webbing-clothes-moth', 'Webbing clothes moth, Tineola bisselliella, adult', { inat: { obs: 140528256, photo: 240563433 } }],
  ['casemaking-clothes-moth-larva', 'Case-bearing clothes moth, Tinea pellionella, larva in its case', { inat: { obs: 53999053, photo: 85901110 } }],
  ['booklouse', 'Booklouse, Liposcelis sp., adult (microscope view)', { commons: 'Liposcelis.jpg' }],
  ['western-conifer-seed-bug', 'Western conifer seed bug, Leptoglossus occidentalis (British Columbia)', { inat: { obs: 95008236, photo: 157673294 } }],
  ['pill-bug', 'Common pill woodlouse (pill bug), Armadillidium vulgare (North Carolina)', { inat: { obs: 145857564, photo: 250627691 } }],
  ['house-cricket', 'House cricket, Acheta domesticus (Indio, California)', { inat: { obs: 200201607, photo: 353172390 } }],
  ['deer-fly', 'Deer fly, Chrysops lateralis, female (dorsal view), with the banded wings', { phil: 16012 }],
  ['horse-fly', 'Horse fly, Tabanus stygius, female (dorsal view)', { phil: 15998 }],
  ['greenhead-fly', 'Greenhead (salt marsh horse fly), Tabanus nigrovittatus (Sapelo Island, Georgia)', { commons: 'Greenhead - Tabanus nigrovittatus, Sapelo Island, Georgia.jpg' }],
  ['black-fly', 'Black fly, Simulium sp., male', { inat: { obs: 319926602, photo: 578371379 } }],
  ['stable-fly', 'Stable fly, Stomoxys calcitrans (Ithaca, New York)', { inat: { obs: 173621522, photo: 301531519 } }],
  ['stable-fly-feeding', 'Stable fly, Stomoxys calcitrans, feeding on human skin', { commons: 'Stomoxys calcitrans-sucking blood.jpg' }],
  ['fungus-gnat', 'Dark-winged fungus gnat (Sciaridae), Washington, DC', { commons: 'Dark-winged Fungus Gnat (28778903446).jpg' }],
  ['fruit-fly', 'Common fruit fly, Drosophila melanogaster, male, with a 1 mm scale bar', { inat: { obs: 13229956, photo: 19351904 } }],
  ['drain-fly', 'Drain fly (bathroom moth fly), Clogmia albipunctata', { inat: { obs: 186065028, photo: 325079205 } }],
  ['phorid-fly', 'Phorid (scuttle) fly, Megaselia scalaris, with a 1 mm scale bar (La Habra, California)', { inat: { obs: 19007477, photo: 29147839 } }],
  ['cluster-fly', 'Cluster fly, Pollenia sp. (Vermont)', { inat: { obs: 160151367, photo: 276729448 } }],
  ['giant-mayfly', 'Giant mayfly, Hexagenia limbata, adult on bark (Texas)', { inat: { obs: 78246523, photo: 128030176 } }],
  ['mayfly-swarm', 'Swarm of newly emerged mayflies at night', { commons: 'Swarm of newly hatched mayflies (e6eb6b1c-155d-4519-3e5d-347ff77f413f).jpg' }],
  ['rodent-bot-fly', 'Mouse bot fly, Cuterebra fontinella, adult (museum specimen)', { commons: 'Cuterebra fontinella.jpg' }],
  ['squirrel-warbles', 'Eastern gray squirrel with bot fly warbles (skin swellings from Cuterebra larvae)', { commons: 'Eastern Gray Squirrel suffering from warbles.jpg' }],
  ['lovebugs', 'Lovebugs, Plecia nearctica, mating pair (Gainesville, Florida)', { inat: { obs: 135449158, photo: 231017852 } }],
  ['beach-hopper', 'Beach hopper (sand flea), Megalorchestia californiana, on sand', { inat: { obs: 344487227, photo: 627681371 } }],
  ['atlantic-mole-crab', 'Atlantic mole crab (sand crab), Emerita talpoida (Assateague Island)', { inat: { obs: 8470803, photo: 11293388 } }],
  ['deer-ked', 'Deer ked, Lipoptena cervi, after shedding its wings', { commons: 'Hirschlausfliege (Lipoptena cervi), Quellgebiet der Holzwarche bei Mürringen, Ostbelgien (44670253332).jpg' }],
  ['deer-ked-pennsylvania', 'Deer ked, Lipoptena cervi (Scranton, Pennsylvania)', { inat: { obs: 34138441, photo: 53688542 } }],
  ['scabies-mite', 'Human itch mite, Sarcoptes scabiei var. hominis, cleared and mounted (microscope, ventral view)', { phil: 6301 }],
  ['scabies-rash-hand', 'Scabies rash in the webbing between the fingers', { phil: 4801 }],
  ['northern-fowl-mites', 'Northern fowl mites, Ornithonyssus sylviarum, on fabric (Washington State)', { inat: { obs: 331043408, photo: 600447803 } }],
  ['poultry-red-mite', 'Poultry red mite (chicken mite), probably Dermanyssus gallinae, magnified', { commons: 'Dermanyssus cfr gallinae (5021757436).jpg' }],
  ['bird-mite-bites', 'Bites from the tropical fowl mite, Ornithonyssus bursa, on a person’s arm (two panels from a published case report)', { commons: 'Ornithonyssus bursa bites.jpg' }],
  ['house-dust-mite', 'House dust mite, scanning electron micrograph (the FDA source names it only as a North American house dust mite)', { commons: 'House Dust Mite.jpg' }],
  ['house-dust-mite-macro', 'European house dust mite, Dermatophagoides pteronyssinus (colour macro photograph)', { commons: 'House dust mite (Dermatophagoides pteronyssinus).jpg' }],
  ['straw-itch-mites', 'Straw itch mites, Pyemotes ventricosus: male, female and a swollen gravid female (photomicrograph)', { phil: 24928 }],
  ['straw-itch-mite-bites', 'Straw itch mite (Pyemotes) bites on a patient’s back', { phil: 27349 }],
  ['twospotted-spider-mite', 'Twospotted spider mite, Tetranychus urticae (red form female), with silk threads', { commons: 'Tetranychus urticae with silk threads.jpg' }],
  ['spider-mite-webbing', 'Twospotted spider mite, Tetranychus urticae, colony webbing on a plant', { inat: { obs: 29244553, photo: 45631339 } }],
  ['cat-flea-scale-bar', 'Cat flea, Ctenocephalides felis, side view with a 3 mm scale bar', { phil: 25575 }],
  ['flea-larva-and-adult', 'Flea larva beside an adult female oriental rat flea, Xenopsylla cheopis', { phil: 2741 }],
  ['flea-egg-and-larva', 'Cat flea, Ctenocephalides felis, first-stage larva beside its egg (microscope)', { commons: 'Ctenocephalides felis, L1..JPG' }],
  ['flea-dirt', 'Flea dirt: droppings of the cat flea, Ctenocephalides felis, magnified', { commons: 'Ctenocephalides felis excréments.jpg' }],
  ['oriental-rat-flea', 'Oriental rat flea, Xenopsylla cheopis, female (side view, magnified)', { phil: 22258 }],
  ['virginia-opossum', 'Virginia opossum, Didelphis virginiana', { commons: 'Virginia opossum during daytime.jpg' }],
  ['engorged-blacklegged-tick', 'Engorged female blacklegged (deer) tick, Ixodes scapularis, side view', { phil: 15993 }],
  ['engorged-lone-star-tick', 'Engorged female lone star tick, Amblyomma americanum (dorsal view)', { phil: 8679 }],
  ['blacklegged-tick-laying-eggs', 'Female blacklegged tick, Ixodes scapularis, laying her egg mass', { phil: 22182 }],
  ['american-dog-tick-egg-mass', 'Female American dog tick, Dermacentor variabilis, beside the egg mass she has just laid', { phil: 27703 }],
  ['bat-soft-tick', 'Bat tick, Carios kelleyi (a soft tick, family Argasidae), dorsal view', { phil: 5394 }],
  ['relapsing-fever-soft-tick', 'Soft tick Ornithodoros hermsi, vector of tick-borne relapsing fever (dorsal view)', { phil: 14477 }],
  ['winter-tick', 'Winter tick, Dermacentor albipictus, adult (British Columbia)', { inat: { obs: 271543920, photo: 488453249 } }],
  ['moose-winter-tick-hair-loss', 'Moose with patchy hair loss, recorded on iNaturalist as evidence of winter tick, Dermacentor albipictus (Edmonton)', { inat: { obs: 205521807, photo: 363410385 } }],
  ['tick-on-cat', 'Engorged tick attached to a cat’s head between the eye and ear', { commons: 'Kleszcz..jpg' }],
  ['brown-dog-ticks-dog-ear', 'Dog’s ear infested with brown dog ticks, Rhipicephalus sanguineus', { phil: 30840 }],
  ['western-bat-bug', 'Bat bug, Cimex pilosellus (dorsal view)', { phil: 28205 }],
  ['arizona-bark-scorpion', 'Arizona bark scorpion, Centruroides sculpturatus, dorsal view on sand (Picacho, Arizona)', { inat: { obs: 376766853, photo: 688913740 } }],
  ['bark-scorpion-blacklight', 'Arizona bark scorpion, Centruroides sculpturatus, glowing under ultraviolet (black) light', { commons: 'Arizona Bark Scorpion under blacklight.jpg' }],
  ['striped-bark-scorpion', 'Striped bark scorpion, Centruroides vittatus', { phil: 16417 }],
  ['desert-hairy-scorpion', 'Desert hairy scorpion, Hadrurus hirsutus, on gravel', { phil: 25675 }],
  ['house-pseudoscorpion', 'House pseudoscorpion, Chelifer cancroides (New York)', { inat: { obs: 83340006, photo: 136865481 } }],
  ['eastern-kissing-bug', 'Eastern bloodsucking conenose (kissing bug), Triatoma sanguisuga, dorsal view with size bar and US range map', { phil: 14935 }],
  ['three-texas-kissing-bugs', 'Three US kissing bug species side by side: Triatoma protracta, T. gerstaeckeri and T. sanguisuga', { commons: 'Three species of kissing bugs.PNG' }],
  ['trypanosoma-cruzi', 'Trypanosoma cruzi, the Chagas parasite, in a blood smear (photomicrograph)', { phil: 545 }],
  ['wheel-bug', 'Wheel bug, Arilus cristatus, showing the cog-wheel crest (Nashville, Tennessee)', { commons: 'Arilus cristatus Kaldari 02.jpg' }],
  ['wheel-bug-nymph', 'Wheel bug, Arilus cristatus, nymph on a chain-link fence (Florida)', { commons: 'Wheel-bug-nymph.jpg' }],
  ['leaf-footed-bug', 'Eastern leaf-footed bug, Leptoglossus phyllopus (Florida)', { inat: { obs: 149256403, photo: 257165118 } }],
  ['leaf-footed-bug-nymphs', 'Leaf-footed bug, Leptoglossus zonatus, nymphs and adults on a leaf', { commons: 'Leptoglossus zonatus (Coreidae), ninfas.jpg' }],
  ['puss-caterpillar', 'Puss caterpillar (southern flannel moth larva), Megalopyge opercularis', { commons: 'Megalopyge opercularis (Larva).jpg' }],
  ['saddleback-caterpillar', 'Saddleback caterpillar, Acharia stimulea (dorsal view)', { phil: 10773 }],
  ['io-moth-caterpillar', 'Io moth caterpillar, Automeris io, showing its stinging spines', { phil: 12067 }],
  ['buck-moth-caterpillar', 'Buck moth caterpillar, Hemileuca maia', { commons: 'Buck moth caterpillar.jpg' }],
  ['hag-moth-caterpillar', 'Hag moth caterpillar, Phobetron pithecium, on a leaf', { phil: 23352 }],
  ['io-caterpillar-sting-swelling', 'Swelling and redness of a hand and wrist after an Io moth caterpillar sting', { phil: 12063 }],
  ['striped-blister-beetle', 'Striped blister beetle, Epicauta vittata (Ozark, Missouri)', { inat: { obs: 92525655, photo: 153213470 } }],
  ['skeeter-syndrome-leg', 'Large local reaction to mosquito bites on a leg (described by the uploader as skeeter syndrome)', { commons: 'Mosquito Bites on Leg.jpg' }],
  ['red-imported-fire-ant', 'Red imported fire ant, Solenopsis invicta, worker (portrait)', { commons: 'Solenopsis invicta - fire ant worker.jpg' }],
  ['fire-ant-mound', 'Red imported fire ant mound marked with a research flag (Texas)', { commons: 'Fire ant mound (16371103174).jpg' }],
  ['fire-ant-sting-pustule', 'Fire ant sting pustule with a red halo on a patient’s leg', { phil: 6347 }],
  ['tawny-crazy-ant', 'Tawny (rasberry) crazy ant, Nylanderia fulva, queen and worker', { commons: 'Nylanderia fulva - Tawny Crazy Ant (31569780291).jpg' }, { cropBottom: 0.12 }],
  ['longhorn-crazy-ant', 'Longhorn crazy ants, Paratrechina longicornis (Key Largo, Florida)', { commons: 'Longhorn Crazy Ant - Paratrechina longicornis, Dagny Johnson State Park, Key Largo, Florida.jpg' }],
  ['european-fire-ant', 'European fire ant, Myrmica rubra, two workers (Cambridge, Massachusetts)', { commons: 'Myrmica-rubra-workers.jpg' }],
  ['european-fire-ant-worker', 'European fire ant, Myrmica rubra, worker (Czech Republic)', { inat: { obs: 212186081, photo: 374983116 } }],
  ['spotted-lanternfly-adult', 'Spotted lanternfly, Lycorma delicatula, adult (Pittsburgh)', { commons: 'Spotted Lanternfly (Lycorma delicatula) adult in Pittsburgh, 2022-07-23, 01.jpg' }],
  ['spotted-lanternfly-egg-masses', 'Spotted lanternfly egg masses on bark (Pennsylvania)', { commons: 'Spotted Lanternfly (20180716-ARS-SRA-d4021-02).jpg' }],
  ['spotted-lanternfly-life-stages', 'Spotted lanternfly life stages (four nymph stages and adult female and male) beside a US quarter', { commons: 'SLF life stages with quarter Andrew Dechaine-52- (52262793368).png' }],
  ['japanese-beetle', 'Japanese beetle, Popillia japonica (Virginia)', { commons: 'Japanese beetle (Scarabaeidae, Popillia japonica) (28401309315).jpg' }, { cropBottom: 0.12 }],
  ['japanese-beetle-leaf-damage', 'Rose leaves skeletonized by Japanese beetles', { commons: 'Japanese beetle damage to a rose leaf.JPG' }],
  ['southern-mole-cricket', 'Southern mole cricket, Neoscapteriscus borellii (Fort Myers, Florida)', { inat: { obs: 182752967, photo: 318702423 } }],
  ['tawny-mole-cricket', 'Tawny mole cricket, Neoscapteriscus (Scapteriscus) vicinus, male (Dunedin, Florida)', { commons: 'Scapteriscus vicinus.JPG' }],
  ['american-cockroach', 'American cockroach, Periplaneta americana (Austin, Texas)', { commons: 'Periplaneta americana - American cockroach (25859665686) (cropped).jpg' }],
  // fourth batch (Oct 16): mice and rats and their signs, German / Oriental / brown-banded cockroaches,
  // male mosquitoes, pantry pests, bed bug cast skins; notes per photo (what the source says, pages it
  // serves, caveats, which can be a lead/share image): data/god-build/photo-notes-batch4.json
  ['house-mouse', 'House mouse, Mus musculus, side view (Marfa, Texas)', { inat: { obs: 261877585, photo: 470573809 } }],
  ['house-mouse-live-trap', 'House mouse, Mus musculus, in the live-catch trap that caught it (Ottawa, Ontario)', { commons: 'House mouse (Mus musculus) 2808.jpg' }],
  ['house-mouse-on-stove', 'House mouse, Mus musculus, on a kitchen stovetop burner (Washington, DC)', { inat: { obs: 300314476, photo: 541094535 } }],
  ['house-mouse-vs-young-rat', 'House mouse, Mus musculus (top), beside a 2-week-old Norway rat, Rattus norvegicus (bottom), names printed on the photo', { phil: 26271 }],
  ['deer-mouse', 'Deer mouse, photographed after being spooked from a bird house (Big Stone County, Minnesota)', { commons: 'Deer mouse (54352380618).jpg' }],
  ['north-american-deer-mouse', 'North American deer mouse, Peromyscus maniculatus', { phil: 8358 }],
  ['deer-mouse-nest', 'North American deer mouse, Peromyscus maniculatus, where it had made its home among deteriorating sheets of fabric and bird feathers', { phil: 13216 }],
  ['white-footed-mouse', 'White-footed mouse, Peromyscus leucopus (Broad Brook, Connecticut)', { inat: { obs: 273401871, photo: 491730398 } }],
  ['white-footed-mouse-leaf-litter', 'White-footed mouse, Peromyscus leucopus, in leaf litter (Nineveh, Indiana)', { inat: { obs: 265119568, photo: 476157779 } }],
  ['norway-rat', 'Norway (brown) rat, Rattus norvegicus, side view (King County, Washington)', { inat: { obs: 379572541, photo: 694329030 } }],
  ['norway-rat-face', 'Norway (brown) rat, Rattus norvegicus, face-on (King County, Washington)', { inat: { obs: 379572541, photo: 694328971 } }],
  ['roof-rat', 'Roof rat (black rat), Rattus rattus, on a bird-feeder platform (Jacksonville, Florida)', { inat: { obs: 358657107, photo: 654292473 } }],
  ['roof-rat-rafters', 'Roof rat, Rattus rattus, among the rafters of a building, eating bait from a small dish', { phil: 25123 }],
  ['mouse-droppings-ruler', 'House mouse droppings beside a centimetre ruler and 10 and 20 euro-cent coins (Utrecht, Netherlands)', { commons: 'Housemouse (Mus musculus) droppings with 10 and 20 euro cent coins and a ruler, Utrecht, The Netherlands, December 14, 2019.jpg' }],
  ['rodent-droppings-drawer', 'Rodent droppings in an open cupboard drawer in the home of a hantavirus patient', { phil: 14340 }],
  ['rat-droppings-table', 'Rat droppings on a tabletop beside cups, saucers and an electric burner (historic photograph)', { phil: 29215 }],
  ['rat-droppings-thumb', 'Droppings identified on iNaturalist as Norway rat, Rattus norvegicus, beside a thumb for size (Aleutian Islands, Alaska)', { inat: { obs: 394894114, photo: 724008765 } }],
  ['rat-gnawed-sack', 'Burlap sack of seed grain gnawed open by rats, grain spilling from the hole (historic photograph, Atlanta, 1946)', { phil: 28593 }],
  ['german-cockroach', 'German cockroach, Blattella germanica, female (dorsal view)', { phil: 26932 }],
  ['german-cockroach-adult', 'German cockroach, Blattella germanica, adult, on a white surface (Charlotte, North Carolina)', { inat: { obs: 398888491, photo: 731788876 } }],
  ['german-cockroach-nymphs', 'German cockroach, Blattella germanica, nymphs at three different stages (dorsal view)', { phil: 26933 }],
  ['german-cockroach-egg-case', 'Female German cockroach, Blattella germanica, carrying her egg capsule (ootheca), underside view', { phil: 26931 }],
  ['oriental-cockroach-male-female', 'Oriental cockroach, Blatta orientalis, male (left) and female (right)', { commons: 'Blatta orientalis cdc 2.jpg' }],
  ['oriental-cockroach', 'Oriental cockroach, Blatta orientalis, adult, dorsal view (Pennsylvania)', { inat: { obs: 379353336, photo: 693909947 } }],
  ['brown-banded-cockroach-male-female', 'Brown-banded cockroach, Supella longipalpa, male (left) and female (right), labelled on the photo', { phil: 6330 }],
  ['brown-banded-cockroach-nymph', 'Brown-banded cockroach, Supella longipalpa, nymph held between fingertips (Ithaca, New York)', { inat: { obs: 370742816, photo: 677320435 } }],
  ['aedes-aegypti-male', 'Yellow fever mosquito, Aedes aegypti, male, with its bushy (plumose) antennae', { phil: 26047 }],
  ['culex-quinquefasciatus-male', 'Southern house mosquito, Culex quinquefasciatus, male, with its bushy antennae, resting on a flower', { phil: 26027 }],
  ['aedes-aegypti-female-and-male', 'Yellow fever mosquitoes, Aedes aegypti: female (left) and male (right)', { commons: 'Aedes Aegypti Mosquitoes (25908400183).jpg' }],
  ['indian-meal-moth-larva', 'Indian meal moth, Plodia interpunctella, larva searching for food', { commons: 'K10313-1 (8411788665).jpg' }],
  ['indian-meal-moth-larvae-peanuts', 'Indian meal moth, Plodia interpunctella, larvae in a bag of peanuts (Allegheny County, Pennsylvania)', { inat: { obs: 179429749, photo: 312376604 } }],
  ['indian-meal-moth-webbing', 'Indian meal moth, Plodia interpunctella, damage: silk webbing in a bag of sunflower seed', { commons: 'Plodia interpunctella damage.jpg' }],
  ['indian-meal-moth-silk', 'Indian meal moth, Plodia interpunctella: larval silk and frass inside a hole bored into a dog biscuit (Texas)', { inat: { obs: 232811547, photo: 413659721 } }],
  ['granary-weevil', 'Granary weevil, Sitophilus granarius (dorsal view)', { phil: 17435 }],
  ['confused-flour-beetles', 'Confused flour beetles, Tribolium confusum: two adults and three larvae', { phil: 28852 }],
  ['bed-bug-cast-skin', 'Bed bug, Cimex lectularius, cast skin (exuvia) beside a millimetre scale', { commons: 'Cimex lectularius, exuvie9.JPG' }],
  ['bed-bug-cast-skin-fabric', 'Bed bug, Cimex lectularius, cast skin (molt) of a nymph on fabric (France)', { inat: { obs: 223551157, photo: 396117034 } }],
  // fifth batch (Oct 16): next-50 wave 2 (palmetto bugs, cockroach egg cases, wolf spiders, spider egg sacs, recluse ID details, Florida/Texas/California spiders, stink bugs) and earlier gaps; notes per photo: data/god-build/photo-notes-batch5.json
  ['smokybrown-cockroach', 'Smokybrown cockroach, Periplaneta fuliginosa (filed on iNaturalist as Validiblatta fuliginosa), on a wooden rail (Jacksonville, Florida)', { inat: { obs: 231013746, photo: 410239807 } }],
  ['smokybrown-cockroach-dorsal', 'Smokybrown cockroach, Periplaneta fuliginosa, dorsal view (name printed on the photo)', { phil: 26939 }],
  ['florida-woods-cockroach', 'Florida woods cockroach, Eurycotis floridana, adult male, dorsal view (Lake Placid, Florida)', { inat: { obs: 336103542, photo: 610708752 } }],
  ['florida-woods-cockroach-nymph-and-male', 'Florida woods cockroach, Eurycotis floridana: nymph (left) and adult male (right), dorsal view (names printed on the photo)', { phil: 26937 }],
  ['australian-cockroach', 'Australian cockroach, Periplaneta australasiae (filed on iNaturalist as Validiblatta australasiae), on a white surface (Jacksonville, Florida)', { inat: { obs: 225723260, photo: 400227021 } }],
  ['australian-cockroach-nymph-and-female', 'Australian cockroach, Periplaneta australasiae: third-instar nymph (left) and adult female (right), dorsal view (names printed on the photo)', { phil: 26936 }],
  ['american-cockroach-ootheca', 'American cockroach, Periplaneta americana, egg case (ootheca) on white paper (Sabaneta, Dominican Republic)', { inat: { obs: 306466708, photo: 552679767 } }],
  ['brown-banded-cockroach-egg-cases', 'Brown-banded cockroach, Supella longipalpa: four egg capsules (oothecae) attached to a wooden surface', { phil: 26935 }],
  ['oriental-cockroach-female-ootheca', 'Oriental cockroach, Blatta orientalis, adult female carrying her egg case (ootheca) (Lyon, France)', { inat: { obs: 366524522, photo: 669275495 } }],
  ['rabid-wolf-spider', 'Rabid wolf spider, Rabidosa rabida, dorsal view on grass leaves (Rockbridge County, Virginia)', { inat: { obs: 292461853, photo: 526303261 } }],
  ['wolf-spider-eyes', 'Wetland giant wolf spider, Tigrosa helluo, juvenile: face-on close-up of the head and eyes (Chester County, Pennsylvania)', { inat: { obs: 44850401, photo: 71102537 } }],
  ['wolf-spider-egg-sac', 'Wolf spider, Allocosa subparva, adult female carrying her egg sac (Turlock, California)', { inat: { obs: 184904708, photo: 322826670 } }],
  ['wolf-spider-egg-sac-side', 'Wolf spider, Hogna antelucana, adult female carrying her egg sac under her abdomen (Travis County, Texas)', { inat: { obs: 205066701, photo: 362541841 } }],
  ['common-house-spider-egg-sac', 'Common house spider, Parasteatoda tepidariorum, adult female beside an egg sac in her web (Logan, Ohio)', { inat: { obs: 291856092, photo: 525146241 } }],
  ['cellar-spider-carrying-eggs', 'Manuel’s cellar spider, Pholcus manueli, adult female holding her eggs in her jaws (Ohio)', { inat: { obs: 271762266, photo: 488855253 } }],
  ['western-black-widow-egg-sacs', 'Western black widow, Latrodectus hesperus, adult beside two egg sacs (Riverside, California)', { inat: { obs: 309876963, photo: 559229581 } }],
  ['northern-black-widow-egg-sac', 'Northern black widow, Latrodectus variolus, adult female in front of an egg sac (Maryland)', { inat: { obs: 292913939, photo: 527163380 } }],
  ['yellow-garden-spider-egg-sac', 'Yellow garden spider, Argiope aurantia, egg sac hanging among wildflowers (Kentucky)', { inat: { obs: 250477923, photo: 447979375 } }],
  ['yellow-garden-spider-with-egg-sac', 'Yellow garden spider, Argiope aurantia, adult female beside an egg sac on a wall (Cameron, Texas)', { inat: { obs: 244191355, photo: 435553684 } }],
  ['brown-recluse-eyes', 'Brown recluse, Loxosceles reclusa: close-up from above of the front of the head (eyes and fangs), specimen from Austin, Texas', { commons: 'Dorsal view of Loxosceles reclusa (Brown Recluse Spider) (22235181003).jpg' }],
  ['brown-recluse-female', 'Brown recluse, Loxosceles reclusa, living female, dorsal view on white (Austin, Texas)', { commons: 'Loxosceles reclusa - brown recluse (25823605780).jpg' }, { cropBottom: 0.132 }],
  ['brown-recluse-bite-early', 'Red (erythematous) skin reaction around a brown recluse spider bite, before tissue necrosis developed', { phil: 23317 }],
  ['recluse-bite-first-days', 'Recluse spider (Loxosceles sp.) bites in Brazil 18, 24, 72 and 120 hours after the bite: pale and purplish (marbled) patches, some with a red halo (four panels from a published clinical study)', { commons: 'Loxoscelism - 05.png' }],
  ['green-lynx-spider', 'Green lynx spider, Peucetia viridans (Putnam County, Florida)', { inat: { obs: 186731001, photo: 326387967 } }],
  ['green-lynx-spider-egg-sac', 'Green lynx spider, Peucetia viridans, adult with its egg sac (Jonesville, Louisiana)', { inat: { obs: 137763840, photo: 235347302 } }],
  ['carolina-wolf-spider', 'Carolina wolf spider, Hogna carolinensis, dorsal view (Oglala Lakota County, South Dakota)', { inat: { obs: 201595180, photo: 355888016 } }],
  ['johnson-jumping-spider', 'Johnson’s jumping spider, Phidippus johnsoni, on a grass blade (Sebastopol, California)', { inat: { obs: 44200934, photo: 70079820 } }],
  ['green-stink-bug', 'Green stink bug, Chinavia hilaris, adult (Rock Creek Park, Washington, DC)', { inat: { obs: 230795129, photo: 409829350 } }],
  ['brown-stink-bug', 'Brown stink bug, Euschistus servus, dorsal view on a leaf (Arlington, Texas)', { inat: { obs: 156483269, photo: 270592683 } }],
  ['brown-marmorated-stink-bug-eggs-nymphs', 'Brown marmorated stink bug, Halyomorpha halys: young nymphs clustered on their egg mass (Birmingham, Alabama)', { inat: { obs: 241199068, photo: 429835710 } }],
  ['house-centipede-on-wall', 'House centipede, Scutigera coleoptrata, adult on a wall (Sandusky, Ohio)', { inat: { obs: 331736980, photo: 601868375 } }],
  ['dog-flea', 'Dog flea, Ctenocephalides canis, female, side view (museum specimen, Zoologische Staatssammlung München)', { commons: 'Ctenocephalides canis female ZSM.jpg' }],
  ['brown-marmorated-stink-bug-nymph', 'Brown marmorated stink bug, Halyomorpha halys, older nymph on a corn stalk, with white bands on its legs and antennae (New Jersey)', { inat: { obs: 7639126, photo: 9990929 } }],
  ['springtail', 'Springtail, Entomobrya atrocincta, on a leaf, with a 1 mm scale bar (Orange, California)', { inat: { obs: 10397241, photo: 14434648 } }],
  ['convergent-lady-beetle', 'Convergent lady beetle, Hippodamia convergens, with a 1 mm scale bar (Santa Fe, New Mexico)', { inat: { obs: 94288985, photo: 156395003 } }],
  ['black-carpet-beetle', 'Black carpet beetle, Attagenus unicolor, adult male, on a paper towel indoors (Campbell County, Wyoming)', { inat: { obs: 369801950, photo: 675520736 } }],
  ['drugstore-beetle', 'Drugstore beetle, Stegobium paniceum, with a 1 mm scale bar (La Habra, California)', { inat: { obs: 33637223, photo: 52851325 } }],
  ['red-widow', 'Red widow, Latrodectus bishopi, adult female, on a person’s finger (Jonathan Dickinson State Park, Florida)', { inat: { obs: 220037947, photo: 389531137 } }],
  ['southern-house-spider-male', 'Southern house spider, Kukulcania hibernalis, adult male, dorsal view, found inside a building (Augusta, Georgia)', { inat: { obs: 107352227, photo: 180534291 } }],
  ['southern-house-spider-female-web', 'Southern house spider, Kukulcania hibernalis, female on her woolly web, beside a large insect wrapped in silk (Tallahassee, Florida)', { inat: { obs: 28653824, photo: 44681894 } }],
  ['potato-flea-beetle', 'Potato flea beetle, Epitrix cucumeris, dorsal view on white (found on a garden tomato plant, Mayes County, Oklahoma)', { inat: { obs: 45285817, photo: 71803435 } }],
  ['norway-rat-burrows', 'Burrow entrances identified on iNaturalist as Norway rat, Rattus norvegicus, in mossy soil at the base of a street tree beside a building (Seattle)', { inat: { obs: 114324321, photo: 193064449 } }],
  // sixth batch (Oct 16): next-wave pages (termites, wasps and hornets, bees, flies and maggots, moths, beetles, houseplant pests, attic animals and droppings, holes in the yard, snakes, stinging caterpillars, crickets, red and black bugs); notes: data/god-build/photo-notes-batch6.json
  ['house-fly', 'House fly, Musca domestica, adult (close dorsal view)', { phil: 25570 }],
  ['house-fly-laying-eggs', 'Female house fly, Musca domestica, laying her eggs (1962 photograph)', { phil: 26984 }],
  ['house-fly-eggs', 'Cluster of eggs laid by the house fly, Musca domestica (close view)', { phil: 25571 }],
  ['fly-maggot', 'Fly larva (maggot) of an unspecified species, close view', { phil: 25572 }],
  ['fly-pupa', 'Fly pupa of an unspecified species, close view', { phil: 25573 }],
  ['house-fly-emerging', 'House fly, Musca domestica, emerging from its pupal case', { phil: 25574 }],
  ['green-bottle-fly', 'Common green bottle fly, Lucilia sericata, with a 1 mm scale bar (Orange, California)', { inat: { obs: 9915028, photo: 13600291 } }],
  ['flesh-fly', 'Flesh fly, Sarcophaga subvicina, dorsal view (New York)', { inat: { obs: 162710628, photo: 281359091 } }],
  ['drain-fly-larva', 'Drain fly (bathroom moth fly), Clogmia albipunctata, larva found in a sink, photographed on white (Vienna, Austria)', { inat: { obs: 29101450, photo: 45403291 } }],
  ['casemaking-clothes-moth', 'Case-bearing clothes moth, Tinea pellionella, adult on a tissue (British Columbia)', { inat: { obs: 176048740, photo: 306023745 } }],
  ['larder-beetle', 'Larder beetle, Dermestes lardarius, dorsal view (Butler County, Pennsylvania)', { inat: { obs: 76795736, photo: 125601570 } }],
  ['ground-beetle', 'Ground beetle, Pterostichus melanarius (rain beetle), pinned specimen beside a metric ruler', { inat: { obs: 222572904, photo: 394280964 } }],
  ['long-tailed-mealybug', 'Long-tailed mealybug, Pseudococcus longispinus, on a plant stem, with a 1 mm scale bar (Orange, California)', { inat: { obs: 7668880, photo: 10041346 } }],
  ['brown-soft-scale', 'Brown soft scale, Coccus hesperidum, on a California bay leaf (Mountain View, California)', { inat: { obs: 343123523, photo: 624963924 } }],
  ['greenhouse-whitefly', 'Greenhouse whitefly, Trialeurodes vaporariorum, with a 0.1 mm scale bar (Russian River, California)', { inat: { obs: 1727167, photo: 2092730 } }],
  ['western-flower-thrips', 'Western flower thrips, Frankliniella occidentalis, on fabric (San Benito County, California)', { inat: { obs: 261203486, photo: 469216967 } }],
  ['melon-aphid-colony', 'Melon (cotton) aphids, Aphis gossypii, a colony on the underside of a leaf, with a 1 mm scale bar (Orange, California)', { inat: { obs: 55997238, photo: 89202276 } }],
  ['potato-aphid', 'Potato aphid, Macrosiphum euphorbiae, on a leaf (Charlotte, North Carolina)', { inat: { obs: 189900884, photo: 332778838 } }],
  ['large-milkweed-bug', 'Large milkweed bug, Oncopeltus fasciatus, adult on a plant stem (Fairfax, Virginia)', { inat: { obs: 59180717, photo: 94542680 } }],
  ['small-milkweed-bug', 'Small milkweed bug, Lygaeus kalmii, adult found indoors in December (United States)', { inat: { obs: 255464825, photo: 457804245 } }],
  ['red-shouldered-bugs', 'Red-shouldered bugs, Jadera haematoloma, a mating pair on concrete (McAllen, Texas)', { inat: { obs: 108894731, photo: 183425390 } }],
  ['european-firebug', 'European firebug, Pyrrhocoris apterus, adult on river rocks (Salt Lake City, Utah)', { inat: { obs: 54848977, photo: 87296624 } }],
  ['boxelder-bug-nymph', 'Eastern boxelder bug, Boisea trivittata, nymph (Rifle Falls State Park, Colorado)', { inat: { obs: 124845257, photo: 211656881 } }],
  ['masked-hunter', 'Masked hunter, Reduvius personatus, adult on weathered wood (Quebec)', { inat: { obs: 377318047, photo: 689976636 } }],
  ['masked-hunter-nymph', 'Masked hunter, Reduvius personatus, nymph coated in dust and lint (White River Junction, Vermont)', { inat: { obs: 178636280, photo: 310879471 } }],
  ['squash-bug', 'Squash bug, Anasa tristis, adult on a leaf (Hillsborough, North Carolina)', { inat: { obs: 91567601, photo: 151486242 } }],
  ['milkweed-assassin-bug', 'Milkweed assassin bug, Zelus longipes, adult (Houston, Texas)', { inat: { obs: 4990060, photo: 6097286 } }],
  ['parson-spider', 'Eastern parson spider, Herpyllus ecclesiasticus, adult found in a tarp stored in a garage (United States)', { inat: { obs: 371465479, photo: 678676193 } }],
  ['american-giant-millipede', 'American giant millipede, Narceus americanus, coiled in soil (Chapel Hill, North Carolina)', { inat: { obs: 147211639, photo: 253269970 } }],
  ['european-earwig-male', 'European earwig, Forficula auricularia, adult male with curved pincers (Urbana, Illinois)', { inat: { obs: 223467049, photo: 395961679 } }],
  ['gray-silverfish', 'Gray silverfish (long-tailed silverfish), Ctenolepisma longicaudatum, beside white-painted trim (Austin, Texas)', { inat: { obs: 109156875, photo: 183922840 } }],
  ['raccoon-on-chimney', 'Raccoon, Procyon lotor, on top of a house chimney at night (Chapel Hill, North Carolina)', { inat: { obs: 203890432, photo: 360305572 } }],
  ['flying-squirrel-attic', 'Southern flying squirrel, Glaucomys volans, on a brick chimney inside an attic (trail-camera image, New Jersey)', { inat: { obs: 22191794, photo: 34360327 } }, { cropBottom: 0.073 }],
  ['eastern-gray-squirrel', 'Eastern gray squirrel, Sciurus carolinensis, sitting in grass (King County, Washington)', { inat: { obs: 366669598, photo: 669545253 } }],
  ['big-brown-bat', 'Big brown bat, Eptesicus fuscus, clinging to a white-painted wooden surface (Stevens County, Minnesota)', { commons: 'Big Brown Bat (21925795404).jpg' }],
  ['bat-droppings-ruler', 'Bat droppings beside a ruler, left by little brown bats, Myotis lucifugus, roosting in a patio umbrella (Prince Edward Island)', { inat: { obs: 92243395, photo: 152702055 } }],
  ['bat-droppings-siding', 'Droppings identified on iNaturalist as big brown bat, Eptesicus fuscus, stuck to the wooden siding of a building (Watson, Minnesota)', { inat: { obs: 184631840, photo: 322320686 } }],
  ['raccoon-latrine-deck', 'Raccoon latrine: droppings that built up over a few months on a backyard deck (Richmond, California)', { inat: { obs: 36140627, photo: 57092952 } }],
  ['raccoon-latrine-log', 'Raccoon latrine: piles of droppings on a felled tree (Middletown, Connecticut)', { inat: { obs: 328536463, photo: 595350731 } }],
  ['meadow-vole-runways', 'Eastern meadow vole, Microtus pennsylvanicus, in its runways under a lifted plywood sheet (New Brunswick)', { inat: { obs: 355636621, photo: 648559056 } }],
  ['vole-hole-snowmelt', 'Grass-lined hole in melting snow, identified on iNaturalist as vole (Microtus) sign (Missoula, Montana)', { inat: { obs: 66408064, photo: 107083588 } }],
  ['mole-ridge', 'Raised surface tunnel (ridge) in bare soil, identified on iNaturalist as eastern mole, Scalopus aquaticus (Sherrill Township, Missouri)', { inat: { obs: 261498716, photo: 469806206 } }],
  ['mole-hills', 'Two mole hills: mounds of loose soil pushed up through fallen leaves, identified on iNaturalist as eastern mole, Scalopus aquaticus (Bloomington, Indiana)', { inat: { obs: 19381329, photo: 29807341 } }],
  ['chipmunk-burrow', 'Burrow entrance of an eastern chipmunk, Tamias striatus, in a grassy yard (Blount County, Alabama)', { inat: { obs: 355754121, photo: 648764783 } }],
  ['crayfish-chimney', 'Crayfish chimney: a mud tower over the burrow of a red swamp crayfish, Procambarus clarkii, with the crayfish inside (Decatur, Georgia)', { inat: { obs: 252552756, photo: 452121777 } }],
  ['termite-damaged-wood', 'Wood in a historic building eaten away by termites (National Park Service photograph)', { commons: 'One of the greatest threats to this structure has been termite damage. (155edfe9-1dd8-b71c-072c-c7c65eb75be8).JPG' }],
  ['termite-mud-tubes', 'Subterranean termite shelter tubes (mud tubes) running up an inside wall of a building (US Marine Corps photograph, Afghanistan)', { commons: 'USMC-110924-M-KV513-225.jpg' }],
  ['drywood-termite-pellets', 'Fecal pellets of the western drywood termite, Incisitermes minor (USDA Forest Service photograph, 1977)', { commons: '1977. Western drywood termite (Incisitermes minor) fecal pellets. Figure 27-C on page 74 in Furniss and Carolin. 1977. Western Forest Insects. (38594678042).jpg' }],
  ['formosan-termites-wood', 'Formosan subterranean termites, Coptotermes formosanus, feeding on spruce (left) and birch wood blocks (USDA ARS photograph)', { commons: 'White Ants (Termites)147.jpg' }],
  ['formosan-termite-soldier', 'Formosan subterranean termite, Coptotermes formosanus, soldier gnawing on wood (USDA ARS photograph)', { commons: 'K8085-3 (8412887808).jpg' }],
  ['termite-swarmers', 'Winged termite swarmers (alates) on wood, identified on iNaturalist as eastern subterranean termite, Reticulitermes flavipes (Blount County, Alabama)', { inat: { obs: 346853050, photo: 632324119 } }],
  ['termite-workers-soldier', 'One termite worker and two soldiers in decaying wood (counted on the image, Oct 20, 2026), from the same colony as termite-swarmers (Reticulitermes flavipes on iNaturalist; Blount County, Alabama)', { inat: { obs: 346853050, photo: 632323098 } }],
  ['carpenter-ant-winged-queen', 'Eastern black carpenter ant, Camponotus pennsylvanicus, winged queen on a leaf (Waltham, Massachusetts)', { inat: { obs: 47906724, photo: 75992810 } }],
  ['carpenter-bee-female', 'Eastern carpenter bee, Xylocopa virginica, female, close-up of the head (Birmingham, Alabama)', { inat: { obs: 244806874, photo: 436736100 } }],
  ['carpenter-bee-male', 'Eastern carpenter bee, Xylocopa virginica, male, face-on, with a pale patch on the face (Birmingham, Alabama)', { inat: { obs: 204742178, photo: 361929383 } }],
  ['carpenter-bee-on-flower', 'Eastern carpenter bee, Xylocopa virginica, male on mountain mint, showing its shiny black abdomen (University City, Missouri)', { inat: { obs: 91880691, photo: 152047478 } }],
  ['honey-bee-on-flower', 'Western honey bee, Apis mellifera, female on a white flower (Gurnee, Illinois)', { inat: { obs: 301604008, photo: 543495083 } }],
  ['honey-bee-swarm', 'Swarm of western honey bees, Apis mellifera, clustered on a chain-link fence (Tustin, California)', { inat: { obs: 128011193, photo: 217394043 } }],
  ['eastern-yellowjacket-live', 'Eastern yellowjacket, Vespula maculifrons, adult on fabric (Leominster, Massachusetts)', { inat: { obs: 312084098, photo: 563420484 } }],
  ['yellowjacket-paper-nest', 'Yellowjacket (Vespula) paper nest found inside the lid of a storage box, beside a tape measure (Lake Forest Park, Washington)', { inat: { obs: 80793300, photo: 132449690 } }],
  ['european-hornet-nest', 'European hornets, Vespa crabro, at their nest in a tree hollow (Mason Neck, Virginia)', { inat: { obs: 408334988, photo: 750570982 } }],
  ['hickory-tussock-caterpillar', 'Hickory tussock moth caterpillar, Lophocampa caryae, on a leaf (Washington County, Vermont)', { inat: { obs: 94044130, photo: 155950005 } }],
  ['woolly-bear-caterpillar', 'Banded woolly bear, the caterpillar of the Isabella tiger moth, Pyrrharctia isabella (Charlotte, North Carolina)', { inat: { obs: 190009648, photo: 332995232 } }],
  ['american-dagger-caterpillar', 'American dagger moth caterpillar, Acronicta americana, curled up on wood, showing its long black hair tufts (Woodstock, Vermont)', { inat: { obs: 179226577, photo: 311996985 } }],
  ['white-marked-tussock-caterpillar', 'White-marked tussock moth caterpillar, Orgyia leucostigma, on a deck board (Woodbridge, Connecticut)', { inat: { obs: 53310286, photo: 84781646 } }],
  ['eastern-copperhead', 'Eastern copperhead, Agkistrodon contortrix, coiled in leaf litter (Houston, Texas)', { inat: { obs: 5969441, photo: 7459698 } }],
  ['copperhead-juvenile', 'Young eastern copperhead, Agkistrodon contortrix, with its yellow tail tip raised (Silsbee, Texas)', { inat: { obs: 141425644, photo: 242284249 } }],
  ['corn-snake-juvenile', 'Young red corn snake, Pantherophis guttatus, coiled under a log (Craven County, North Carolina)', { inat: { obs: 103457605, photo: 173155018 } }],
  ['rat-snake-juvenile', 'Young rat snake, Pantherophis alleghaniensis, on pine straw beside a rock (Charlotte, North Carolina)', { inat: { obs: 316831391, photo: 572458765 } }],
  ['northern-water-snake', 'Common (northern) water snake, Nerodia sipedon, on a log by the water (Westborough, Massachusetts)', { inat: { obs: 277886534, photo: 498964465 } }],
  ['eastern-hognose-snake', 'Eastern hognose snake, Heterodon platirhinos, coiled in dry leaves (Lothian, Maryland)', { inat: { obs: 59898568, photo: 95742658 } }],
  ['eastern-milk-snake', 'Eastern milk snake, Lampropeltis triangulum, on asphalt (Southborough, Massachusetts)', { inat: { obs: 167025821, photo: 289293206 } }],
  ['fall-field-cricket', 'Fall field cricket, Gryllus pennsylvanicus, on a hand for size (Oak Bay, British Columbia)', { inat: { obs: 60757654, photo: 97172481 } }],
  // seventh batch (Oct 20): droppings family (raccoon, bat, rat, cockroach, bed bug, termite and carpenter ant
  // frass, the animal poop chart) plus bites for the live bed bug pages; scouted against
  // data/god-build/research/droppings-top3.md. Who identified each photo, how sure we can be, which pages it
  // serves and which can lead a page: data/god-build/photo-notes-batch7.json
  ['raccoon-scat-branch', 'Raccoon droppings: one long, segmented scat draped over a fallen branch, identified on iNaturalist by the observer and tracker Kim Cabrera (Montville, New Jersey)', { inat: { obs: 254031120, photo: 454935084 } }],
  ['raccoon-latrine-shed-roof', 'Pile of droppings on top of a backyard shed, identified by the observer as raccoon scat (iNaturalist, California; no second identification yet)', { inat: { obs: 307866385, photo: 555361786 } }],
  ['raccoon-scat-lawn-ruler', 'Droppings from five deposits on a lawn beside an L-shaped ruler, identified by the observer as raccoon scat left by raccoons eating her ripe persimmons (iNaturalist, California; no second identification yet)', { inat: { obs: 17118309, photo: 25922101 } }],
  ['bat-guano-cave-floor', 'Bat droppings (guano) on the floor of a sandstone cave below roosting California leaf-nosed bats, Macrotus californicus, identified on iNaturalist by the observer and tracker Kim Cabrera (near the Salton Sea, California)', { inat: { obs: 339458266, photo: 617527221 } }],
  ['bat-droppings-cave-inch-ruler', 'Bat droppings covering a cave floor beside an inch ruler, below bats the observer saw roosting (identified by the observer as California leaf-nosed bat; near the Salton Sea, California)', { inat: { obs: 257314401, photo: 461567757 } }],
  ['bat-droppings-bat-box-ruler', 'Two bat droppings beside a ruler, fallen from a bat box; identified on iNaturalist as big brown bat, Eptesicus fuscus, by bat researcher Paul R. Moosman Jr. (Windsor, Connecticut)', { inat: { obs: 116896641, photo: 197359685 } }],
  ['norway-rat-droppings-cornell', 'Norway rat droppings on a white background, photographed and identified by the New York State Integrated Pest Management Program at Cornell University', { commons: 'Norway Rat Droppings (9421750331).jpg' }],
  ['american-cockroach-droppings-trap', 'American cockroach, Periplaneta americana, caught on a sticky monitoring trap, with droppings the observer recorded as its own beside it (Blacksburg, Virginia)', { inat: { obs: 231654201, photo: 411463711 } }],
  ['german-cockroach-frass-cabinet', 'Hole in the back wall of a kitchen cabinet with dead cockroaches and specks of droppings (frass) around it; the photographer identified the roaches as German cockroaches', { commons: 'Cockroach access hole.jpg' }],
  ['bed-bug-fecal-spots-bed-frame', 'Bed bug fecal spots: black stains on a wooden bed frame near where bed bugs hid, photographed and described by the New York State IPM Program at Cornell University', { commons: 'Bed Bug Evidence.jpg' }],
  ['bed-bug-fecal-stains-mattress', 'Mattress from a large bed bug infestation: thick black fecal stains and white bed bug eggs, as described by the New York State IPM Program at Cornell University', { commons: 'Infested Mattress (11555822213).jpg' }],
  ['bed-bugs-eggs-mattress-seam', 'Bed bugs and their white eggs along a seam of a bed (the photographer\'s description)', { commons: 'Bedbugs.jpg' }],
  ['bed-bug-bites-back', 'Raised red bites on a man\'s back and arm that the photographer attributes to bed bugs in a hotel in Amsterdam', { commons: '2015.11.26.192605Cimex lectularius bites.jpg' }],
  ['mosquito-bites-forearm', 'Several swollen mosquito bites fusing together on a forearm (CDC photograph, 2024)', { phil: 28630 }],
  ['carpenter-ant-frass', 'Carpenter ant, Camponotus modoc, on the bark of a western redcedar beside frass (coarse wood shavings); the observer found a heap of frass at the base of the tree (Sequim, Washington)', { inat: { obs: 122993394, photo: 208308453 } }],
  ['termite-pellet-pile', 'Pile of termite fecal pellets on a wooden garden arbor, each pellet about 1 mm long according to the photographer (Fremont area, California)', { commons: 'Termite Fecal Pellets.jpg' }],
  ['coyote-scat-ruler', 'Coyote scat, brown and twisted, with hair and seeds, beside a ruler; species confirmed by DNA analysis in the UC Santa Cruz Conservation Scats Project (Rancho San Antonio Open Space Preserve, California)', { inat: { obs: 12313482, photo: 17783021 } }],
  ['cottontail-droppings', 'Round droppings identified on iNaturalist as eastern cottontail, Sylvilagus floridanus, by seven users, in pine litter (Gardendale, Alabama)', { inat: { obs: 128615485, photo: 218479735 } }],
  ['deer-droppings-snow', 'Deer droppings (pellets) on snow at Big Meadows, Shenandoah National Park, Virginia (National Park Service photograph)', { commons: 'Deer Scat in the Snow (51861792238).jpg' }],
  ['lizard-droppings-ruler', 'Western fence lizard, Sceloporus occidentalis, dropping with its white urate cap beside a centimeter ruler; the observer saw the lizard leave it seconds before (San Mateo County, California)', { inat: { obs: 163828317, photo: 283400775 } }],
  ['anole-droppings-fence', 'Green anole, Anolis carolinensis, dropping with a white tip on a wooden fence post; the observer watched the lizard leave it (Birmingham, Alabama)', { inat: { obs: 204441225, photo: 361362651 } }],
  // eighth batch (Oct 20): mouse urine under UV light and mouse droppings from NPS Conserve O Gram 3/12
  // (figures captioned "NPS Photo", public domain, taken with the nps source type above), and gray
  // squirrel droppings the photographer saw the squirrel leave. Squirrel, opossum, cockroach and rat
  // droppings searched again; what was found, refused and why: data/god-build/photo-notes-batch8.json
  ['mouse-urine-uv-light', 'Mouse urine glowing blue-white in spots and streaks under a UV flashlight, on the bottom shelf of a cabinet (National Park Service photograph)', { nps: { page: 'https://www.nps.gov/articles/000/conserve-o-gram-3-12-identifying-mouse-and-rat-damage-in-museum-collections.htm', figure: 1 } }],
  ['mouse-droppings-wood', 'Mouse droppings scattered on a wooden surface (National Park Service photograph)', { nps: { page: 'https://www.nps.gov/articles/000/conserve-o-gram-3-12-identifying-mouse-and-rat-damage-in-museum-collections.htm', figure: 2 } }],
  ['gray-squirrel-droppings-ledge', 'Eastern gray squirrel, Sciurus carolinensis, droppings on a concrete ledge by a railing; the photographer saw the squirrel leave them (Richmond Hill, Ontario)', { inat: { obs: 106432462, photo: 178790061 } }],
  // ninth batch (Oct 21): white (freshly molted) cockroaches for white-cockroach; carpet beetle cast skins and
  // droppings for signs-of-carpet-beetles; cockroach signs (a shed skin, an egg case with hatchlings, feeding damage)
  // for signs-of-cockroaches; a brown-banded cockroach on a wall; Oriental cockroaches at a sewer manhole and on a
  // garage floor. Who identified each photo, what was refused and why: data/god-build/photo-notes-batch9.json
  ['white-american-cockroach-shed-skin', 'American cockroach, Periplaneta americana, freshly molted and still white with its new wings crumpled, beside a dark cast skin split open at the thorax; the observer recorded it molting in a chicken coop (Jackson, Georgia)', { inat: { obs: 398937495, photo: 731883198 } }],
  ['white-american-cockroach-wall', 'American cockroach, Periplaneta americana, adult, cream-white after a recent molt, on a textured wall; the identifier notes it is white because it had just molted (Coppell, Texas)', { inat: { obs: 16997716, photo: 25702415 } }],
  ['american-cockroach-molting-wall', 'American cockroaches, Periplaneta americana, on a rough concrete surface: one (top) pulling its white new body out of its reddish-brown nymph skin as it molts, beside two dark adults (NY State IPM Program at Cornell University photograph)', { commons: 'American cockroachs (Periplaneta americana).jpg' }],
  ['cockroach-molting-bathroom', 'A cockroach (species not identified) pulling its white new body out of its old reddish-brown skin while molting, on a white surface in a building\'s bathroom (St. Tammany Parish, Louisiana)', { commons: 'Molting Cockroach - An "Alien" being born in the 3rd floor east bathroom!.jpg' }],
  ['carpet-beetle-adult-cast-skin-book', 'Varied carpet beetle, Anthrenus verbasci: adult beside a shed larval skin on the page edges of a book (Savannah, Georgia)', { inat: { obs: 258853298, photo: 464529035 } }],
  ['carpet-beetle-skins-frass', 'Varied carpet beetle, Anthrenus verbasci: dozens of shed larval skins, heaps of powdery droppings (frass) and a few adults, from a dried fence lizard specimen the larvae ate (Coeur d\'Alene, Idaho)', { inat: { obs: 117232088, photo: 318501820 } }],
  ['carpet-beetle-larva-frass-cast-skin', 'Varied carpet beetle, Anthrenus verbasci: a larva among its droppings (frass), a shed larval skin and a grain of rodent bait the larva damaged, found during a pest control inspection by entomologist A. R. Brookes', { commons: 'Grain bait wolly bear.jpg' }],
  ['cockroach-damaged-book', 'Textbook with its cover and spine grazed by feeding cockroaches, photographed inside a home (CDC photograph)', { phil: 26945 }],
  ['german-cockroach-egg-case-hatchlings', 'German cockroach, Blattella germanica: an adult on a sticky trap beside an egg case (ootheca), with newly hatched pale nymphs stuck around it; the observer saw them hatching (Ontario)', { inat: { obs: 289782406, photo: 521237399 } }],
  ['cockroach-nymph-shed-skin', 'Shed skin (cast skin) of a young Blattella cockroach, the genus of the German cockroach, on cardboard (Rowlett, Texas)', { inat: { obs: 343355658, photo: 625436114 } }],
  ['brown-banded-cockroach-wall', 'Brown-banded cockroach, Supella longipalpa, adult on a white wall below a ledge (Austin, Texas)', { inat: { obs: 270462125, photo: 486405163 } }],
  ['brown-banded-cockroach-nymph-wall', 'Brown-banded cockroach, Supella longipalpa, nymph showing its two pale bands, on a textured wall (Honolulu, Hawaii)', { inat: { obs: 4923775, photo: 5998876 } }],
  ['oriental-cockroaches-manhole', 'Oriental cockroaches, Blatta orientalis, out at night in the grass around a sewer manhole cover they were coming out of (Washington, DC)', { inat: { obs: 2986238, photo: 3433414 } }],
  ['oriental-cockroach-garage-floor', 'Oriental cockroach, Blatta orientalis, adult on a concrete garage floor (Pennsylvania)', { inat: { obs: 242704549, photo: 432694752 } }],
  // tenth batch (Oct 22): flea dirt on a dog and a flea on a flea comb (CDC PHIL, public domain, the series
  // brown-dog-ticks-dog-ear comes from) for flea-dirt; a native camel cricket (Ceuthophilus) and greenhouse camel
  // crickets where people find them (a baseboard indoors, a basement floor) for camel-crickets. Who identified each
  // photo, what was refused and why: data/god-build/photo-notes-batch10.json
  ['flea-dirt-on-dog', 'Flea dirt: dark specks in a patch of white fur on a dog examined at an animal health clinic (CDC photograph, 2024)', { phil: 30838 }],
  ['flea-on-comb', 'A flea on a fine-toothed flea comb held in a hand, at an animal health clinic (CDC photograph, 2024)', { phil: 30839 }],
  ['plains-camel-cricket', 'Plains camel cricket, Ceuthophilus pallidus, a native North American camel cricket, side view on a pale gritty surface (Fort Collins, Colorado)', { inat: { obs: 233885997, photo: 415711861 } }],
  ['camel-cricket-baseboard', 'Greenhouse camel cricket, Tachycines asynamorus, climbing a white-painted baseboard above a wood floor, indoors (Silver Spring, Maryland)', { inat: { obs: 292512847, photo: 526408853 } }],
  ['camel-cricket-basement-floor', 'Greenhouse camel cricket, Tachycines asynamorus, seen from above on the concrete floor of the observer’s basement in December (Oak Bluffs, Massachusetts)', { inat: { obs: 143896493, photo: 246865376 } }],
  // eleventh batch (Oct 23): where people find them, for the next pages: yellow sac spiders on an indoor wall and in their
  // silk retreats, springtails under a houseplant and snow fleas on snow, bed bugs in a hotel, the Asian cockroach,
  // clothes moth eggs on wool, drain flies in a sink, fruit flies on fruit, a cellar spider in a bathroom corner and a
  // harvestman outdoors. Who identified each photo, what was refused and why: data/god-build/photo-notes-batch11.json
  ['yellow-sac-spider-wall', 'Yellow sac spider (genus Cheiracanthium; the observer identified it as C. mildei) on a textured white wall at an outside corner, indoors by our reading of the photo (Greater Vancouver, British Columbia)', { inat: { obs: 163920899, photo: 283573818 } }],
  ['yellow-sac-spider-in-silk-sac', 'Northern yellow sac spider, Cheiracanthium mildei, inside its silk sac where a white-painted wall meets a gray-painted ledge; the observer thought it was molting (Chilliwack, British Columbia)', { inat: { obs: 182790381, photo: 318774989 } }],
  ['yellow-sac-spider-retreat-flowerpot', 'Silk retreat of a yellow sac spider (genus Cheiracanthium) on the bottom of a plastic flowerpot kept on an indoor porch over the winter; the spider crawled out of it when the pot was picked up (Coatesville, Pennsylvania)', { inat: { obs: 70160027, photo: 114002444 } }],
  ['springtails-under-houseplant', 'White springtails (subfamily Onychiurinae) found indoors under a potted houseplant (Madison, Wisconsin)', { inat: { obs: 354557747, photo: 646721071 } }],
  ['snow-fleas-on-snow', 'Snow fleas: springtails of the genus Hypogastrura massed in a hollow in the snow (Saint-Étienne-de-Bolton, Quebec)', { inat: { obs: 143536303, photo: 246177065 } }],
  ['snow-fleas-close-up', 'Snow fleas, springtails of the genus Hypogastrura, on granular snow (Wendell, Massachusetts)', { inat: { obs: 38225190, photo: 60720588 } }],
  ['bed-bugs-hotel-headboard', 'A bed bug coated in pesticide dust in a crevice of a hotel headboard after a treatment, photographed by the New York State IPM Program at Cornell University', { commons: 'Bed Bugs Treated on a Hotel Headboard (11555818913).jpg' }],
  ['bed-bug-hotel-bedding', 'Bed bug, Cimex lectularius, on white woven fabric (bedding by our reading) that the observer photographed at a hotel (Tacoma area, Washington)', { inat: { obs: 27817210, photo: 43320707 } }],
  ['asian-cockroach-on-leaf', 'Asian cockroach, Blattella asahinai, adult on a leaf (USDA Agricultural Research Service image K2252-8, photo by Barry Fitzgerald)', { commons: 'ARS Blattella asahinai.jpg' }],
  ['asian-cockroach-ruler', 'Asian cockroach, Blattella asahinai, adult beside a millimeter ruler; collected at a blacklight and kept as a specimen by the observer (Tallahassee, Florida)', { inat: { obs: 318046352, photo: 574768738 } }],
  ['clothes-moth-eggs-wool', 'Clothes moth eggs on knitted wool fabric (CSIRO photograph; the source does not name the species)', { commons: 'CSIRO ScienceImage 2070 Eggs of the Clothes Moth.jpg' }],
  ['drain-flies-sink', 'Drain flies (bathroom moth flies), Clogmia albipunctata, in a bathroom sink beside the drain (Long Island City, Queens, New York)', { inat: { obs: 28811964, photo: 44937376 } }],
  ['fruit-fly-mango-peel', 'Common fruit fly, Drosophila melanogaster, side view on the mango peel where the observer’s household fruit flies were feeding and breeding, indoors (Austin, Texas)', { inat: { obs: 320069474, photo: 578641489 } }],
  ['fruit-flies-lemon', 'Fruit flies (genus Drosophila) on an old squeezed lemon half on a kitchen table (Moscow, Russia)', { inat: { obs: 103577509, photo: 173387622 } }],
  ['cellar-spider-bathroom-corner', 'Manuel’s cellar spider, Pholcus manueli, in a corner of an upstairs bathroom where a white surface meets wood trim (Macon, Virginia)', { inat: { obs: 325836179, photo: 590020582 } }],
  ['harvestman-brick-wall', 'Banded harvestman, Leiobunum vittatum, on a brick retaining wall beside a house’s garage (Macon, Virginia)', { inat: { obs: 324448053, photo: 587241435 } }],
  // twelfth batch (Oct 23): the volume-20 pages (data/god-build/research/volume-20-2026-10-23.md), where people find them:
  // bites on skin from CDC PHIL (cat flea bites 1963, fire ant stings) and a physician's bed bug bite photo, jumping and orb
  // weaver spiders at windows and doors, camel spiders in a house and an apartment, joro webs on houses, wasp nests on
  // houses, wheel bugs, giant water bugs where people meet them, pantry and house weevils, booklice, carpet beetle larvae,
  // pill bugs, Jerusalem crickets, a fruit fly on a banana, drain flies in bathrooms, termite swarmers indoors and shrews.
  // Who identified each photo, what was refused and why: data/god-build/photo-notes-batch12.json
  ['bold-jumping-spider-kitchen-window', 'Bold jumping spider, Phidippus audax, on the glass of a kitchen window in the house where, according to the observer, it lived for months (Salt Lake City, Utah)', { inat: { obs: 164065154, photo: 283830382 } }],
  ['bold-jumping-spider-house-siding', 'Bold jumping spider, Phidippus audax, on white house siding (Bucks County, Pennsylvania)', { inat: { obs: 206175475, photo: 364625728 } }],
  ['zebra-jumping-spider-house-wall', 'Zebra jumping spider, Salticus scenicus, on the white outside wall of a house, about 5.5 mm long according to the observer (Logy Bay, Newfoundland)', { inat: { obs: 76237466, photo: 124715709 } }],
  ['cross-orb-weaver-kitchen-window', 'Cross orbweaver, Araneus diadematus, in its web at the corner of a house’s kitchen window, the house siding blurred behind it (Lake Forest Park, Washington)', { inat: { obs: 19186831, photo: 29468914 } }],
  ['furrow-orb-weaver-back-door', 'Furrow orbweaver, Larinioides cornutus, in the web it rebuilt across a back door every night for two months, with the room inside the house behind it (Hamilton, Ohio)', { inat: { obs: 243698225, photo: 434585724 } }],
  ['camel-spider-house-wall', 'Camel spider (solifuge), Eremocosta striata, on a textured white wall at a house, a fingertip in the corner of the frame for scale (Sierra Vista, Arizona)', { inat: { obs: 6763128, photo: 8594523 } }],
  ['camel-spider-apartment-floor', 'Florida camel spider (solifuge), Ammotrechella stimpsoni, on the floor of an apartment where the observer found three of them (Key West, Florida)', { inat: { obs: 67964825, photo: 109943236 } }],
  ['camel-spider-in-hand', 'Camel spider (solifuge), Eremocosta striata, held on an open hand at an insect event (Pima County, Arizona)', { inat: { obs: 174063588, photo: 302356121 } }],
  ['joro-spider-web-gutter', 'Joro spider, Trichonephila clavata, golden web hanging from a roof gutter down the corner of a house (Georgia)', { inat: { obs: 97032719, photo: 161290637 } }],
  ['joro-spider-front-door', 'Joro spider, Trichonephila clavata, female in her golden web against the siding by a front door (Georgia)', { inat: { obs: 97032775, photo: 161290706 } }],
  ['joro-spiders-pair-soffit', 'Joro spiders, Trichonephila clavata: a large female and a small male in a web against white trim outside a house (Clarkston, Georgia)', { inat: { obs: 131123271, photo: 223094255 } }],
  ['flea-bites-ankles-cdc', 'Flea bites attributed to the cat flea, Ctenocephalides felis: dozens of small dark spots around the ankles and lower legs of a woman (CDC photograph, Decatur, Georgia, 1963; black and white)', { phil: 25258 }],
  ['flea-bites-ankle-foot-cdc', 'Flea bites attributed to the cat flea, Ctenocephalides felis: clusters of small dark spots on the ankle and top of the foot (same patient; CDC photograph, Decatur, Georgia, 1963; black and white)', { phil: 25257 }],
  ['cat-flea-on-fingertip', 'Cat flea, Ctenocephalides felis, on a fingertip, one of the fleas the observer found on his cats (Fort Worth, Texas)', { inat: { obs: 371364750, photo: 678502083 } }],
  ['bed-bug-on-skin-cdc', 'Common bed bug, Cimex lectularius, on human skin, side view (CDC photograph donated by the World Health Organization)', { phil: 6283 }],
  ['bed-bug-bites-back-physician', 'Bed bug bites: scattered red welts on a person’s back, photographed by emergency physician James Heilman, MD (same set as bed-bug-bites-forearm)', { commons: 'Bedbugb2.JPG' }],
  ['bed-bug-bites-wrist-row', 'Bites in a row along the outside of the left wrist and forearm, about four days old, that the photographer attributes to bed bugs', { commons: 'Bed bug bites around left wrist.jpg' }],
  ['fire-ant-stings-pustules-closeup', 'Imported fire ant stings: raised white pustules on skin, close-up (CDC photograph; the source does not say which imported fire ant species)', { phil: 16368 }],
  ['fire-ant-stings-lower-legs', 'Fire ant stings on both lower legs of a male patient: scattered red spots, some with pustule centers (CDC photograph)', { phil: 25047 }],
  ['fire-ant-stings-arm', 'Fire ant stings on a patient’s arm: small pustules ringed with red (CDC photograph)', { phil: 15978 }],
  ['carpenter-ant-on-fingers', 'Eastern black carpenter ant, Camponotus pennsylvanicus, on a hand; the observer says it walked on the hand and then bit (Blount County, Alabama)', { inat: { obs: 238169041, photo: 423978404 } }],
  ['paper-wasp-nest-eave-corner', 'European paper wasps, Polistes dominula, on their open-comb nest in a corner under the overhang of a house (Saratoga, California)', { inat: { obs: 227695136, photo: 403966657 } }],
  ['paper-wasp-nest-house-siding', 'Guinea paper wasps, Polistes exclamans, on their nest on house siding (Lee County, Texas)', { inat: { obs: 401667576, photo: 737248725 } }],
  ['mud-dauber-nest-garage-wall', 'Black-and-yellow mud dauber, Sceliphron caementarium, on its mud nest on the back wall of a garage (Onondaga County, New York)', { inat: { obs: 28591120, photo: 321487836 } }],
  ['mud-dauber-nest-house-overhang', 'Black-and-yellow mud dauber, Sceliphron caementarium, on a mud nest of several cells built on a house (Los Angeles, California)', { inat: { obs: 231959498, photo: 412049505 } }],
  ['wheel-bug-on-fingers', 'Wheel bug, Arilus cristatus, adult crawling on fingers; the observer says it did not bite (Lilburn, Georgia)', { inat: { obs: 187384535, photo: 327684098 } }],
  ['wheel-bug-door-frame', 'Wheel bug, Arilus cristatus, adult on a white door frame (Lafayette, Indiana)', { inat: { obs: 141322877, photo: 242079121 } }],
  ['wheel-bug-nymphs-hatching-wall', 'Wheel bug, Arilus cristatus, newly hatched nymphs (red and black, the freshest orange) around their egg mass on a brick wall out front, by the observer’s description (Arkansas)', { inat: { obs: 112735024, photo: 190436829 } }],
  ['giant-water-bug-store-sidewalk', 'Uhler’s giant water bug, Lethocerus uhleri, on the sidewalk outside a store (North Carolina)', { inat: { obs: 400202538, photo: 734351327 } }],
  ['giant-water-bug-in-hand', 'Eastern toe-biter, Benacus griseus, a giant water bug found in a parking garage, held on an open hand (Baton Rouge, Louisiana)', { inat: { obs: 129346571, photo: 219799535 } }],
  ['giant-water-bug-brick-pavement', 'American giant water bug, Lethocerus americanus, on brick paving; the observer reports a very painful bite when moving it by hand (Lexington Park, Maryland)', { inat: { obs: 154722407, photo: 267370190 } }],
  ['toe-biter-pool-filter', 'Toe-biter, Belostoma lutarium, a smaller giant water bug pulled alive out of a swimming pool filter, on concrete (Nesconset, New York)', { inat: { obs: 134635002, photo: 229519537 } }],
  ['rice-weevil-on-rice-grain', 'Rice weevil, Sitophilus oryzae, on a grain of rice from a sealed package of rice (photographed in Austria; the rice came from Italy)', { inat: { obs: 359165419, photo: 655279909 } }],
  ['maize-weevil-fingertip', 'Maize weevil, Sitophilus zeamais, on a fingertip; found in a wild bird seed mix and DNA tested according to the observer (Alberta)', { inat: { obs: 352101942, photo: 642621333 } }],
  ['grain-weevils-bird-seed', 'Grain weevil (genus Sitophilus) among broken corn and other kernels in bird seed (Jonesboro, Arkansas)', { inat: { obs: 250510993, photo: 448047031 } }],
  ['black-vine-weevil-house-wall', 'Black vine weevil, Otiorhynchus sulcatus, on a wall inside a house (Westmorland County, New Brunswick)', { inat: { obs: 39709447, photo: 63026582 } }],
  ['booklouse-notebook-pen-tip', 'Booklouse (genus Liposcelis), a tiny pale speck on a handwritten page beside a pen tip for scale (London)', { inat: { obs: 405233758, photo: 744299298 } }],
  ['booklouse-printed-paper', 'Booklouse, Liposcelis bostrychophila, on printed paper beside a printed letter, for scale (Berlin)', { inat: { obs: 34150162, photo: 53708933 } }],
  ['booklouse-cereal-package', 'Booklouse, Liposcelis bostrychophila, from a cereal package (North Rhine-Westphalia, Germany)', { inat: { obs: 38613294, photo: 61392621 } }],
  ['carpet-beetle-larva-knit-fabric', 'Varied carpet beetle, Anthrenus verbasci, larva on blue knitted fabric in a house (Maryland)', { inat: { obs: 41480946, photo: 65807216 } }],
  ['carpet-beetle-larva-wood-floor', 'Carpet beetle larva (genus Anthrenus) on a wood floor inside a house (Bucks County, Pennsylvania)', { inat: { obs: 2612934, photo: 481813540 } }],
  ['carpet-beetle-larva-hallway-wall', 'Varied carpet beetle, Anthrenus verbasci, larva on a wall in the hall of a house, close-up (Liverpool, England)', { inat: { obs: 93975625, photo: 155830110 } }],
  ['pill-bug-rolled-kitchen-floor', 'Pill bug (common pill woodlouse), Armadillidium vulgare, rolled into a ball on a kitchen floor (Greater Vancouver, British Columbia)', { inat: { obs: 71379504, photo: 116206973 } }],
  ['pill-bugs-in-palm', 'Pill bugs, Armadillidium vulgare: three on an open palm, partly rolled up (Florida)', { inat: { obs: 44831331, photo: 71070620 } }],
  ['pill-bugs-under-flowerpot', 'Pill bugs, Armadillidium vulgare, in the soil under a flowerpot in a suburban yard (Tennessee)', { inat: { obs: 266907447, photo: 479591790 } }],
  ['jerusalem-cricket-wood-floor', 'Jerusalem cricket (genus Ammopelmatus) on a wood floor (California)', { inat: { obs: 256852488, photo: 460620500 } }],
  ['jerusalem-cricket-house-floor', 'Jerusalem cricket (genus Ammopelmatus) on the floor inside a house (Guerneville, California)', { inat: { obs: 189365590, photo: 331708229 } }],
  ['jerusalem-cricket-garden-soil', 'Jerusalem cricket (genus Ammopelmatus) on the soil of a school garden (Santa Rosa, California)', { inat: { obs: 320112596, photo: 578732555 } }],
  ['fruit-fly-banana-peel', 'Fruit fly of the Drosophila melanogaster group (subgenus Sophophora), about 2.5 mm long, on a banana in a kitchen waste container (Auckland, New Zealand)', { inat: { obs: 107022101, photo: 179913892 } }],
  ['drain-fly-bathroom-wall', 'Drain fly (bathroom moth fly), Clogmia albipunctata, on a bathroom wall (Sebastopol, California)', { inat: { obs: 57179699, photo: 91184571 } }],
  ['drain-fly-bathroom-fingertip', 'Drain fly (bathroom moth fly), Clogmia albipunctata, on a bathroom wall beside a fingertip for scale (Abilene, Texas)', { inat: { obs: 59182505, photo: 94546767 } }],
  ['termite-swarmers-ceiling-light', 'Western drywood termite, Incisitermes minor, swarmers inside a ceiling light fixture, seen through the diffuser panel (Thousand Oaks, California)', { inat: { obs: 192875036, photo: 338691784 } }],
  ['termite-swarmers-pine-straw-house', 'Light southern subterranean termite, Reticulitermes hageni, winged swarmers coming up out of pine straw beside a house (Raleigh, North Carolina)', { inat: { obs: 234431354, photo: 416755910 } }],
  ['drywood-termite-swarmer-fingers', 'Western drywood termite, Incisitermes minor, a swarmer the observer found in their house, held on a fingertip (Berkeley, California)', { inat: { obs: 244383461, photo: 435907663 } }],
  ['shrew-yard-lawn', 'Northern short-tailed shrew, Blarina brevicauda, foraging on the lawn of a yard (Falmouth, Massachusetts)', { inat: { obs: 286925121, photo: 515866173 } }],
  ['shrew-on-grass', 'Northern short-tailed shrew, Blarina brevicauda, in grass beside a sidewalk, showing the pointed snout and tiny eye (Saint Paul, Minnesota)', { inat: { obs: 231903058, photo: 411934528 } }],
  ['shrew-basement-mouse-trap', 'Northern short-tailed shrew, Blarina brevicauda, caught alive in a basement mouse trap and photographed before release (Monroe, New York)', { inat: { obs: 83607311, photo: 137333853 } }],
  ['short-tailed-shrew-snout-usgs', 'Short-tailed shrew, Blarina brevicauda, side view of the head: long pointed snout, tiny eye and ear almost hidden in the fur; found dead in a yard (USGS photograph, Upper Marlboro, Maryland)', { commons: 'Short tailed shrew, side face, md, upper marlboro 2014-06-04-13.08.07 ZS PMax (14339520776).jpg' }],
  // thirteenth batch (Oct 28): top-100 day 1. lice-eggs: nits glued to hair (CDC PHIL, the public-domain lead), nits on hair
  // without a microscope, a nymph hatching, a viable nit with eyespots, adult and egg with a scale bar, a louse on a lice comb,
  // the adult louse card, and a hair cast and dandruff for nits-vs-look-alikes. stick-bugs: northern walkingsticks on a porch
  // railing (the CC0 lead), house trim and a tree trunk, a nymph on a railing, a two-striped walkingstick pair, a giant
  // walkingstick on a building, and Chinese mantis and thread-legged assassin bug cards. Who identified each photo, what was
  // refused and why: data/god-build/photo-notes-batch13.json
  ['head-lice-nits-on-hair', 'Head louse eggs (nits), Pediculus humanus var. capitis: three nits glued to human hair shafts, at different stages of development (CDC photomicrograph)', { phil: 26390 }],
  ['head-lice-nits-heavy-infestation', 'Hair crowded with small oval eggs (nits) stuck along the shafts, which the photographer describes as a head infested with lice', { commons: 'Head Infested With Louse.jpg' }],
  ['head-lice-nits-on-hair-life-size', 'Head louse nits on human hair, photographed without a microscope: small pale specks stuck to the hairs', { commons: 'Fig. 5. Louse nits.jpg' }],
  ['head-louse-hatching-from-nit', 'Head louse, Pediculus humanus var. capitis, nymph emerging from its egg (nit) on a hair shaft (CDC photograph)', { phil: 5267 }],
  ['head-louse-nit-eyespots-and-nymph', 'Unhatched head louse egg (nit) on a hair shaft, the red eyespots of the developing louse visible inside, beside a nymph (CDC photomicrograph)', { phil: 19066 }],
  ['head-louse-adult-and-egg-scale', 'Head louse, Pediculus humanus capitis, adult beside an egg (nit) on a hair, from a human host, with a 0.5 mm scale bar (microscope slide)', { commons: 'Head louse (251 27) Adult and egg, from a human host.jpg' }],
  ['head-louse-on-lice-comb', 'Head louse, Pediculus humanus, on the teeth of a fine-toothed lice comb (Bogotá, Colombia)', { inat: { obs: 189348171, photo: 331673151 } }],
  ['head-louse-adult-male', 'Head louse, Pediculus humanus capitis, adult male on a white surface, caught alive with a lice comb according to the photographer', { commons: 'Pou de tête mâle adulte.jpg' }],
  ['hair-cast', 'Hair cast (peripilar keratin cast) on a human hair shaft, which CDC notes an inexperienced observer could mistake for a louse egg (CDC photomicrograph)', { phil: 17460 }],
  ['dandruff-flakes', 'Flakes of dead skin cells (dandruff) on dark fabric, close-up', { commons: 'Huidschilfers A.jpg' }],
  ['northern-walkingstick-porch-railing', 'Northern walkingstick, Diapheromera femorata, female, on a black railing against the white siding of a house, beside a green shutter (Pawling, New York)', { inat: { obs: 393515996, photo: 721297404 } }],
  ['northern-walkingstick-house-trim', 'Northern walkingstick, Diapheromera femorata, on the white trim and siding of a house at night, legs and long antennae spread (Dennis, New Jersey)', { inat: { obs: 184272129, photo: 321630778 } }],
  ['northern-walkingsticks-tree-trunk', 'Two northern walkingsticks, Diapheromera femorata, on the bark of a tree trunk beside a hand for size: the observer recorded the lower one as an adult male and a female the same day (Maryland)', { inat: { obs: 313404557, photo: 565960030 } }],
  ['northern-walkingstick-nymph-railing', 'Northern walkingstick, Diapheromera femorata, green nymph on a black metal railing in late June (Westminster, Vermont)', { inat: { obs: 123524804, photo: 209293285 } }],
  ['two-striped-walkingstick-pair', 'Southern two-striped walkingstick, Anisomorpha buprestoides: a smaller walkingstick riding on the back of a larger one, side view on sand (Fort Walton Beach, Florida)', { inat: { obs: 235277433, photo: 418402664 } }],
  ['giant-walkingstick-wall', 'Giant walkingstick, Megaphasma denticrus, on the yellow wall and brown trim of a building (Medina, Texas)', { inat: { obs: 234682577, photo: 417248744 } }],
  ['chinese-mantis', 'Chinese mantis, Tenodera sinensis, adult on goldenrod (Montgomery County, Maryland)', { inat: { obs: 95750410, photo: 158996192 } }],
  ['thread-legged-assassin-bug', 'Thread-legged assassin bug, Emesaya brevipennis, on a grass leaf with its grasping front legs held up (Sinaloa, Mexico)', { inat: { obs: 330170005, photo: 598651003 } }],
  // fourteenth batch (Oct 28): Google Images wave 2, eight ant pages. army-ants: Eciton workers and a big-jawed ant (the CC0
  // lead), a bivouac, a driver ant, US army ants in a parking lot and a winged male at a blacklight, a raid carrying wasp larvae.
  // bullet-ants: an ant on a leaf (CC0 lead), three beside a coin and scale bar, the Satere-Mawe glove, a dug-up nest, two on a
  // branch. honeypot-ants: repletes (CC0 lead), repletes hanging in a chamber, workers and a nest entrance in the wild.
  // what-do-ants-eat, tiny-ants, borax-for-ants, ant-killer-recipes, do-carpenter-ants-bite: household ants where people find
  // them (kitchen counters, a plate, a window, a floor), at sugar water, honey, peanut butter, sausage and gel bait, tending
  // aphids, with seeds and fungus; a carpenter ant side view, beside a ruler, and a board it hollowed out.
  // Who identified each photo, what was refused and why: data/god-build/photo-notes-batch14.json
  ['eciton-burchellii-army-ants', 'Army ants, Eciton burchellii, on bare soil: dark workers of several sizes and one much larger ant with a pale head and long, curved jaws', { commons: 'Eciton burchellii army ants.jpg' }],
  ['army-ant-bivouac', 'Bivouac of army ants in a Costa Rican forest, seen as a dense mass of ants (the photographer does not name the species)', { commons: 'Bivouac of army ants (9372570529).jpg' }],
  ['driver-ant-dorylus-uganda', 'Driver ant (army ant of the genus Dorylus), close-up of an ant with long, curved, sickle-shaped jaws (Mabira Forest, Uganda)', { commons: 'Army Ant (Dorylus sp.) (8537302562).jpg' }],
  ['neivamyrmex-workers-parking-lot', 'Black legionary ants, Neivamyrmex nigrescens, a native US army ant: workers in a very large emigration trail crossing a parking lot (Santa Cruz County, Arizona)', { inat: { obs: 184963505, photo: 322910195 } }],
  ['neivamyrmex-male-blacklight', 'Neivamyrmex swainsonii, a native US army ant: a winged male attracted to a blacklight, held between the fingertips (Maricopa County, Arizona)', { inat: { obs: 180666122, photo: 314790027 } }],
  ['eciton-raid-wasp-larvae', 'Army ants, Eciton burchellii, carrying larvae from a raided wasp nest (La Selva Biological Station, Costa Rica)', { commons: 'Flickr - ggallice - Spoils of the raid.jpg' }],
  ['bullet-ant-on-leaf', 'Bullet ant, Paraponera clavata, on a leaf, side view showing the jaws and the hairy body (Eloy Alfaro, Ecuador)', { inat: { obs: 98828052, photo: 164628486 } }],
  ['bullet-ants-coin-scale', 'Three bullet ants, Paraponera clavata, on the forest floor beside a 2 cm scale bar and a British two-pence coin (Barro Colorado Nature Monument, Panama)', { commons: 'Paraponera scaled.png' }],
  ['bullet-ant-glove-satere-mawe', 'A woven glove covered with bullet ants (tucandeiras), which the photographer describes as made for the passage ritual of the Satere-Mawe people (Amazonas, Brazil)',{ commons: 'Luva com formigas tucandeiras para ritual de passagem do povo Sateré-Mawé AM.jpg' }],
  ['bullet-ant-nest-dug-up', 'Bullet ants, Paraponera clavata, crowded with their brood: a whole nest the observer dug out and moved because it was too close to a balcony (Quininde, Ecuador)', { inat: { obs: 100845472, photo: 168353907 } }],
  ['bullet-ants-on-branch', 'Two bullet ants, Paraponera clavata, on a tree branch in the forest (Sarapiqui, Heredia, Costa Rica)', { inat: { obs: 67779564, photo: 109598520 } }],
  ['honeypot-ant-repletes-oakland-zoo', 'Honeypot ants, Myrmecocystus mimicus: three large repletes, their abdomens swollen with amber liquid, among ordinary workers in a display nest at the Oakland Zoo', { commons: 'Closeup on honeypot ants (Myrmecocystus mimicus) at Oakland Zoo.jpg' }],
  ['honeypot-ant-repletes-hanging', 'Honeypot ants (genus Myrmecocystus): repletes hanging from the ceiling of a nest chamber with workers below them, in a display at the Cincinnati Zoo', { commons: 'HoneyAnt.jpg' }],
  ['honeypot-ant-workers-arizona', 'Mexican honeypot ant, Myrmecocystus mexicanus, workers on the ground (Cochise County, Arizona)', { inat: { obs: 84624805, photo: 139098348 } }],
  ['honeypot-ant-nest-entrance-utah', 'Honeypot ants, Myrmecocystus testaceus, at their nest entrance in sand at the base of a sandstone cliff in sagebrush country (northeastern Utah)', { inat: { obs: 107565020, photo: 180935340 } }],
  ['carpenter-ants-sausage-bait', 'Eastern black carpenter ants, Camponotus pennsylvanicus, feeding on a piece of sausage the observer set out as bait (Shepherd, Texas)', { inat: { obs: 85487456, photo: 140660647 } }],
  ['thief-ants-dirty-plate', 'Thief ants, Solenopsis molesta, scattered over a dirty plate on a kitchen counter, where the observer found them (Menomonee Falls, Wisconsin)', { inat: { obs: 402477450, photo: 738862598 } }],
  ['southern-fire-ants-bait-card', 'Southern fire ants, Solenopsis xyloni, swarming the bait on a baited card; identified in the field by the entomology curator of the Natural History Museum of Los Angeles County (Los Angeles County, California)', { inat: { obs: 135300522, photo: 230745287 } }],
  ['odorous-house-ants-aphids', 'Odorous house ants, Tapinoma sessile, among aphids on a leaf (Merrimac Farm Wildlife Management Area, Aden, Virginia)', { commons: 'Odorous House Ants - Tapinoma sessile and Aphids, Merrimac Farm Wildlife Management Area, Aden, Virginia, September 22, 2015 (53511901666).jpg' }],
  ['harvester-ants-trimming-seed', 'Florida harvester ants, Pogonomyrmex badius: minor workers trimming the bristles off a seed to take it into their granary, according to the photographer', { commons: 'Florida harvester ant teamwork! (Pogonomyrmex badius) (6502194585).jpg' }],
  ['leafcutter-ant-fungus-garden', 'Texas leafcutter ants, Atta texana: the queen, brood and workers in the fungus garden of a laboratory colony collected at Brackenridge Field Laboratory, Austin, Texas (Insects Unlocked photograph by Alex Wild)', { commons: 'Atta texana (23319353392).jpg' }, { cropBottom: 0.09 }],
  ['thief-ants-counter-pen-tip', 'Thief ants, Solenopsis molesta, on a speckled kitchen counter beside a pen tip, from dirty dishes the observer found them on (Menomonee Falls, Wisconsin)', { inat: { obs: 402477450, photo: 738862593 } }],
  ['odorous-house-ant-kitchen-counter', 'Odorous house ant, Tapinoma sessile, on a kitchen counter near the sink (Onondaga County, New York)', { inat: { obs: 153045434, photo: 264281104 } }],
  ['ghost-ants-lined-paper', 'Ghost ant, Tapinoma melanocephalum, on lined paper: dark head and thorax, pale legs and abdomen; the observer found the ants on a knife left out with orange marmalade (Holualoa, Hawaii)', { inat: { obs: 18435629, photo: 28183298 } }],
  ['pavement-ant-chip-crumb', 'Immigrant pavement ant, Tetramorium immigrans, trying to carry off a chip crumb on a wood surface inside a house (Sanpete County, Utah)', { inat: { obs: 39631535, photo: 62894592 } }],
  ['pharaoh-ant-sugar-crystal', 'Pharaoh ant, Monomorium pharaonis, worker beside a single crystal of sugar', { commons: 'Monomorium pharaonis worker with sugar crystal.jpg' }],
  ['argentine-ants-gel-bait', 'Ants the photographer identifies as Argentine ants, Linepithema humile, close-up, standing in a clear gel-like ant poison after they invaded the photographer\'s house', { commons: 'Linepithema humile - Argentine ant.jpg' }],
  ['pavement-ant-honey-drop', 'Immigrant pavement ant, Tetramorium immigrans, beside a drop of honey on white paper: the observer set out honey and peanut butter and only one ant came to the honey (California)', { inat: { obs: 42894982, photo: 68113100 } }],
  ['argentine-ants-trail-wall', 'Argentine ants, Linepithema humile, in a trail along a textured white wall (University of California, Riverside)', { inat: { obs: 116756872, photo: 197114801 } }],
  ['argentine-ants-trail-wood', 'Argentine ants, Linepithema humile, in a busy trail along weathered wooden boards; the observer says they were invading the house again (California)', { inat: { obs: 179475324, photo: 312468414 } }],
  ['pavement-ants-sugar-water', 'Immigrant pavement ants, Tetramorium immigrans, crowding onto a paper towel wet with sugar water (Flanders, New Jersey)', { inat: { obs: 351861306, photo: 642157396 } }],
  ['pheidole-ants-peanut-butter', 'Pheidole rugulosa ants of two sizes, some with very large heads, feeding at a peanut butter bait (Dona Ana County, New Mexico)', { inat: { obs: 394317948, photo: 722854433 } }],
  ['odorous-house-ants-kitchen-window', 'Odorous house ants, Tapinoma sessile, coming in through a corner of a kitchen window (Hamilton, Ohio)', { inat: { obs: 245677524, photo: 438449245 } }],
  ['carpenter-ant-side-view', 'Eastern black carpenter ant, Camponotus pennsylvanicus, on weathered wood, side view (Leesylvania State Park, Woodbridge, Virginia)', { commons: 'Eastern Black Carpenter Ant - Camponotus pennsylvanicus, Leesylvania State Park, Woodbridge, Virginia - 25127646135.jpg' }],
  ['carpenter-ant-beside-ruler', 'A dead ant that its photographer identified as a black carpenter ant, Camponotus pennsylvanicus, beside a ruler for size', { commons: 'Camponotus pennsylvanicus.jpg' }],
  ['carpenter-ant-damaged-board', 'A structural board that its photographer says carpenter ants destroyed, leaving the dense late wood of each growth ring standing between the galleries', { commons: 'CarpenterAntDamage board.jpg' }],
  // fifteenth batch (Oct 28): Google Images wave 2, six mouse and pet pages. mice-traps: a wooden snap trap (the public-domain
  // lead), a plastic snap trap with its catch beside a ruler, a rat trap beside a mouse trap, an electronic trap against a wall, a
  // cage trap with two mice and two snap traps set against a wall. baby-mice: day-old pups (the public-domain lead), pups at 10
  // and 17 days beside a coin, a litter in a nest of rags and two mice from a litter raised in a garden shed (the last row).
  // how-long-do-mice-live: a wild house mouse (the CC0 lead), newborns
  // on a coin, a spotted owl carrying a mouse, a two-year-old pet mouse and droppings at a wall. fall-mouse-proofing-checklist: a
  // house mouse that got indoors in late November (CC0), a white-footed mouse in a basement, copper wool around wires and a trap
  // at a mouse hole. mice-poison: two bait stations against walls (the public-domain lead), bait being loaded, a cat and a
  // red-tailed hawk with mice. pet-safe-pest-control: a cat with a mouse and a garden snail on a chewed leaf.
  // Who identified each photo, what was refused and why: data/god-build/photo-notes-batch15.json
  ['mouse-snap-trap-wooden', 'Wooden mouse snap trap (Victor brand) with a large cheese-shaped plastic trigger, unset, its trap bar still stapled down as sold (product photo on a white background)', { commons: 'Victor-Mousetrap.jpg' }],
  ['plastic-snap-trap-house-mouse-ruler', 'Plastic snap trap holding the house mouse it caught, beside a yellow folding ruler marked in centimeters (the photographer identifies the mouse as a house mouse)', { commons: 'Schlagfalle-Kunststoff-Maus.jpg' }],
  ['rat-trap-vs-mouse-trap-size', 'Victor rat snap trap (top) and Victor mouse snap trap (bottom) side by side, showing the difference in size', { commons: 'Rattrap and mousetrap.JPG' }],
  ['electronic-mouse-trap-against-wall', 'Victor brand electronic trap set on a concrete floor against a wall (the photographer calls it an electric mouse trap)', { commons: 'Piège à souris électrique..jpg' }],
  ['cage-trap-two-mice', 'Two mice caught alive together in a wire cage trap on a wooden base, which the photographer baited with salami (species not given)', { commons: 'Mousetrap2mice.jpg' }],
  ['snap-traps-set-against-wall', 'Two snap traps with yellow plastic triggers set side by side on a ledge, their baited trigger ends toward the wall (New York State IPM Program at Cornell University photo by Matt Frye)', { commons: 'Setting a Trap (10069468985).jpg' }],
  ['snap-trap-by-mouse-hole', 'Snap trap set at a mouse hole at the foot of a wall in an old house, holding the mouse it caught (Norway, October 2016)', { commons: 'Mouse in trap Norway 2016-10-26 hole 01.jpg' }],
  ['baby-mice-day-old', 'Two day-old mice, pink and hairless with their eyes closed, curled together on white paper (the photographer’s description: day-old mice; filed on Commons under juvenile house mice)', { commons: 'Day-old mice.JPG' }],
  ['baby-mice-10-days-old', 'Two house mouse pups (Mus musculus domesticus), 10 days old, furred, with their eyes still closed, beside a German 1-pfennig coin (the photographer’s description)', { commons: 'Mus musculus 04 10th day.jpg' }],
  ['young-house-mouse-17-days-old', 'Young house mouse (Mus musculus domesticus), 17 days old, fully furred with its eyes open, beside a German 1-pfennig coin (the photographer’s description)', { commons: 'Mus musculus 06 17th day.jpg' }],
  ['baby-mice-nest-rags-plastic', 'Litter of pink, hairless house mouse pups in a nest built of cleaning rags and a plastic bag (the photographer’s description, translated from German)', { commons: 'Hausmauswurf Im Nest.jpg' }],
  ['newborn-house-mice-coin', 'Two newborn house mice (Mus musculus domesticus), 45 minutes old, pink and hairless with their eyes closed, on a German 1-pfennig coin (the photographer’s description)', { commons: 'Mus musculus 01 Newborn.jpg' }],
  ['house-mouse-jar-rim', 'House mouse, Mus musculus, on the rim of a glass jar among fallen leaves; the observer caught it in his home and released it in a forest with many bird feeders (Neftekamsk, Bashkortostan, Russia)', { inat: { obs: 248456409, photo: 443943865 } }],
  ['spotted-owl-with-mouse', 'Female spotted owl, Strix occidentalis, carrying a mouse in her beak, most likely to take it to her young (Mount Rainier National Park, Washington; NPS photo by Emily Brouwer)', { commons: 'Female Spotted Owl (14619135593).jpg' }],
  ['pet-mouse-two-years-old', 'Pet mouse, a small two-year-old female, drinking from a water bottle (the photographer’s description; Finland)', { commons: 'Pet mouse drinking.jpg' }],
  ['house-mouse-droppings-wall-corner', 'House mouse droppings scattered across the floor in a corner at the base of a wall (New York State IPM Program at Cornell University photo by Matt Frye)', { commons: 'House Mouse Droppings (10069590893).jpg' }],
  ['house-mouse-got-into-house-bucket', 'House mouse, Mus musculus, that got into a house in late November, caught alive in a bucket trap with a peanut and its own droppings around it, before the observer released it (San Luis Obispo, California)', { inat: { obs: 329133630, photo: 596552320 } }],
  ['white-footed-mouse-bird-seed-basement', 'White-footed mouse, Peromyscus leucopus, in a container of bird seed in a house basement in October (West Haven, Connecticut)', { inat: { obs: 257765564, photo: 462450388 } }],
  ['copper-wool-wire-gaps', 'Copper wool packed into the gaps around wires where they pass through a wall, as a temporary rodent block (New York State IPM Program at Cornell University photo by Matt Frye)', { commons: 'Rodent Exclusion (10069529336).jpg' }],
  ['rodent-bait-station-wall', 'Rodent bait station, a lidded plastic box for poisoned bait, on paving stones against the wall of a building, with a red label in Polish reading deratization station, do not touch', { commons: 'Deratyzacja1pl.jpg' }],
  ['tamper-resistant-bait-station', 'Rodent bait station embossed tamper-resistant and do not touch in English and Spanish, set on pavement against a wall (the photographer’s description: a Bell rodent bait station)', { commons: 'Bell Rodent Bait Station.JPG' }],
  ['bait-station-block-bait-loading', 'Gloved hand placing blocks of rodent bait on the rods inside an opened bait box set against a brick wall (the photographer’s description: rodent bait being placed within a bait box)', { commons: 'Rodent bait box with bait.jpg' }],
  ['cat-carrying-mouse', 'Tortoiseshell-and-white cat running across a lawn with a mouse it caught in its mouth (Gribskov, Denmark)', { commons: 'Cat running with mouse in mouth.jpg' }],
  ['red-tailed-hawk-with-mouse', 'Red-tailed hawk, Buteo jamaicensis, standing in grass with a mouse in its beak (Nisqually National Wildlife Refuge, Washington)', { commons: 'Nisqually 2012 03 25 0573 (6926170344).jpg' }],
  ['black-cat-with-mouse', 'Black cat holding a mouse in its mouth (the photographer’s own cat)', { commons: 'Cat with mouse.jpg' }],
  ['garden-snail-chewed-leaf', 'Garden snail, Cornu aspersum, on a chewed Solomon’s seal (Polygonatum) leaf; the observer found it was what had been eating the plant (Marrowstone, Washington)', { inat: { obs: 230311609, photo: 408924403 } }],
  ['house-mice-garden-shed-litter', 'Two house mice, Mus musculus, out by an orange container from a litter the observer says was raised in his garden shed (Bebington, Wirral, England)', { inat: { obs: 65335202, photo: 105138383 } }],
  // seventeenth batch (Oct 28): Google Images wave 2, eight bed bug and tick pages. does-lysol-kill-bed-bugs: a bed bug on skin
  // (the CC0 lead), a Lysol cleaner bottle, bed bugs and eggs under a bag strap, a mating pair with eggs. black-bed-bugs: a bed bug
  // that looks almost black on pale fabric (the CC0 lead), a nymph with a 1 mm bar, a nymph after a blood meal, fecal stains on a
  // bed corner. seed-ticks: lone star tick larvae massed on a sock, on red tape and on a fingertip, a nymph on a fingernail.
  // diatomaceous-earth-for-bed-bugs: food-grade DE powder (the CC0 lead), DE under a light microscope, a bed bug on a hand.
  // doktor-doom-canada-guide: a male and a female bed bug (the public-domain lead). The CDC 2023-2025 tick series (Lauren Bishop):
  // ticks on clothing, a sneaker, grass and a stick, tweezer removal, a sock-line tick check, a tick dropped into a bottle; plus an
  // SEM of tick mouthparts and a bull's-eye rash. Who identified each photo, what was refused and why: data/god-build/photo-notes-batch17.json
  ['bed-bug-dark-on-pale-fabric', 'Bed bug, Cimex lectularius, on pale fabric, its body looking almost black in the photo (McAllen, Texas; research grade on iNaturalist)', { inat: { obs: 204269007, photo: 361034213 } }],
  ['bed-bug-on-skin-macro', 'Bed bug, Cimex lectularius, on human skin, close-up from above (Minsk, Belarus; research grade on iNaturalist)', { inat: { obs: 298104023, photo: 536934245 } }],
  ['bed-bug-nymph-scale-bar-cdc', 'Bed bug, Cimex lectularius, nymph from above beside a 1 mm scale bar (CDC photograph; CDC notes that nymphs look like smaller, paler versions of the adults)', { phil: 12703 }],
  ['bed-bug-nymph-after-blood-meal', 'Bed bug nymph after a blood meal, its abdomen bright red, on skin (New York State IPM Program at Cornell University photograph and title)', { commons: 'Bed bug nymph after a blood meal (9789549934).jpg' }],
  ['bed-bug-feces-bed-corner', 'Bed bug fecal stains on a corner of a bed (the photographer’s description)', { commons: 'BedBugFeces.jpg' }],
  ['bed-bugs-male-female-cdc', 'Bed bugs, Cimex lectularius: a male (left) and a female (right) from above, labeled on the photo (CDC photograph)', { phil: 15247 }],
  ['bed-bugs-eggs-under-bag-strap', 'Bed bugs and their eggs in a hidden spot under the straps of an unused bag (the photographer’s description)', { commons: 'Bed Bug Infestation.jpg' }],
  ['bed-bugs-mating-eggs-fabric-fold', 'Two bed bugs mating in a fold of dark fabric, with bed bug eggs just above them (the photographer’s description)', { commons: 'Bed bugs having sex and their eggs.jpg' }],
  ['lysol-all-purpose-cleaner-bottle', 'Lysol All Purpose Cleaner, Lemon Breeze scent, in a 32 fl oz trigger spray bottle (product photograph)', { commons: 'Lysol - All Purpose Cleaner (51012787263).jpg' }],
  ['diatomaceous-earth-powder', 'A sample of food-grade diatomaceous earth: a pile of fine white powder on a dark surface (the photographer’s description)', { commons: 'Diatomaceous Earth.jpg' }],
  ['diatomaceous-earth-microscope', 'Diatomaceous earth under a light microscope (bright field): the broken silica shells of single-celled diatoms, round and elongated', { commons: 'Diatomaceous Earth BrightField.jpg' }],
  ['bed-bug-on-hand-bpca', 'Bed bug on a person’s hand, for scale (British Pest Control Association photograph)', { commons: 'Pests - Bed Bugs - scale on hand.jpg' }],
  ['lone-star-tick-removal-tweezers-elbow', 'Adult female lone star tick, Amblyomma americanum, on a person’s elbow being removed with fine-tipped tweezers (CDC photograph)', { phil: 28393 }],
  ['tick-removal-tweezers-forearm', 'A tick being removed from a person’s arm with fine-tipped tweezers, pulled away from the skin with steady, even pressure (CDC photograph)', { phil: 31571 }],
  ['american-dog-tick-mouthparts-sem', 'Mouthparts of an American dog tick, Dermacentor variabilis, under a scanning electron microscope at 779x (CDC photograph)', { phil: 2279 }],
  ['erythema-migrans-bullseye-arm', 'Erythema migrans, the bull’s-eye rash of Lyme disease, at the site of a tick bite on a woman’s upper arm (Maryland; CDC photograph, another view of the case in erythema-migrans-rash)', { phil: 9874 }],
  ['blacklegged-tick-on-camouflage-clothing', 'Adult female blacklegged tick, Ixodes scapularis, crawling on camouflage clothing, circled in red on the photo (CDC photograph)', { phil: 28379 }],
  ['blacklegged-tick-on-clothing-seam', 'Adult male blacklegged tick, Ixodes scapularis, crawling on the seam of camouflage clothing, circled in red on the photo (CDC photograph)', { phil: 28378 }],
  ['lone-star-tick-on-white-sneaker', 'Adult female lone star tick, Amblyomma americanum, crawling on a white sneaker (CDC photograph)', { phil: 28364 }],
  ['blacklegged-tick-questing-grass', 'Blacklegged (deer) tick, Ixodes scapularis, questing on a blade of grass, side view (CDC photograph)', { phil: 14473 }],
  ['blacklegged-tick-questing-stick', 'Adult female blacklegged tick, Ixodes scapularis, questing on a stick (CDC photograph)', { phil: 28371 }],
  ['american-dog-tick-on-grass', 'Adult female American dog tick, Dermacentor variabilis, crawling on a blade of grass (CDC photograph)', { phil: 28370 }],
  ['lone-star-tick-on-grass', 'Adult female lone star tick, Amblyomma americanum, crawling on a blade of grass (CDC photograph)', { phil: 28369 }],
  ['tick-check-sock-boot', 'Tick check: a sock folded down above a hiking boot shows a female blacklegged tick, Ixodes scapularis, attached to the leg (CDC photograph)', { phil: 31556 }],
  ['tick-dropped-into-bottle', 'Tweezers dropping a female blacklegged tick, Ixodes scapularis, into a small bottle before the lid goes on, one way to dispose of a tick (CDC photograph)', { phil: 31565 }],
  ['lone-star-tick-nymph-fingernail', 'Lone star tick, Amblyomma americanum, nymph crawling on a person’s fingernail (CDC photograph)', { phil: 28365 }],
  ['seed-ticks-massed-on-sock', 'Hundreds of lone star tick larvae (seed ticks), Amblyomma americanum, massed on white knit fabric (a sock, by our reading), from an observation its maker titled a larval tick bomb (Kilmarnock, Virginia; research grade)', { inat: { obs: 313403754, photo: 565958595 } }],
  ['seed-ticks-on-red-tape', 'Strip of red tape dotted with dozens of tiny lone star ticks, Amblyomma americanum, on white knit fabric, from the same larval tick swarm (Kilmarnock, Virginia; research grade)', { inat: { obs: 313403754, photo: 565958701 } }],
  ['seed-tick-larvae-fingertip', 'Two tiny ticks on a fingertip from a swarm on the observer’s pants; an identifier on iNaturalist named them freshly hatched, six-legged lone star tick larvae (Luray, Virginia)', { inat: { obs: 308626827, photo: 556821548 } }],
  // sixteenth batch (Oct 28): Google Images wave 2, eight mosquito, tick and gnat pages. are-mosquitoes-attracted-to-light: an
  // Aedes vexans that came to a UV light (the CC0 lead), a male cattail mosquito under a porch light, a bug zapper under an eave,
  // a CDC light trap on a branch. mosquito-net: a cone net over a double bed (the CC0 lead), net mesh close-up, a head net over a
  // cap, a hammock net. natural-mosquito-repellent-ontario: a lemon-scented gum (the CC0 lead), bee balm in Ontario, a citronella
  // candle, a mosquito larva. mosquito-bite-treatment-relief: CDC 2024 bite reactions beside a quarter (the public-domain lead),
  // scratched bites, a severe local reaction. how-long-does-mosquito-spray-last: fogging for mosquitoes (the public-domain lead), a
  // mosquito resting under a leaf, larvae in a trough, cedar hedge foliage. do-cedar-trees-attract-mosquitoes: a tall Thuja hedge
  // (the CC0 lead), a white cedar alone in a lawn, dense cedar foliage, mosquitoes resting under a leaf. lyme-disease-risk-areas-
  // ontario-2026: blacklegged ticks from Point Pelee (the CC0 lead), Cootes Paradise and Burlington, a deer in a yard, a tick drag,
  // an erythema migrans rash. learn/how-to-get-rid-of-fungus-gnats: a fungus gnat from a kitchen counter (the CC0 lead), one beside
  // a penny, a larval procession, one on a yellow sticky trap. Who identified each photo, what was refused and why:
  // data/god-build/photo-notes-batch16.json
  ['aedes-vexans-uv-light', 'Inland floodwater mosquito, Aedes vexans, an adult that came to an ultraviolet light at night, on pale fabric (Charlotte, North Carolina; research grade on iNaturalist)', { inat: { obs: 389869754, photo: 714187564 } }],
  ['cattail-mosquito-porch-light', 'Cattail mosquito, Coquillettidia perturbans, adult male with bushy antennae (as annotated on iNaturalist), photographed under a front porch light (Onondaga County, New York; research grade)', { inat: { obs: 172620098, photo: 299686818 } }],
  ['bug-zapper-roof-eave', 'Bug zapper hanging from the eave of a roof outdoors (the photographer’s description: a bug zapper)', { commons: 'Bug zapper.JPG' }],
  ['cdc-light-trap-navy-new-orleans', 'Navy preventive medicine technician removing a light trap provided by the CDC, hung from a branch beside a tent city (Naval Air Station Joint Reserve Base New Orleans, September 2005; U.S. Navy photo)', { commons: 'US Navy 050910-N-2653P-132 Forward Deployable Preventive Medicine Unit (FDPMU) East, removes a Light Trap provided by the Centers for Disease Control (CDC) from a tent city area on board NAS JRB New Orleans.jpg' }],
  ['cone-mosquito-net-double-bed', 'Cone-shaped mosquito net hung from the ceiling over a double bed in a wooden bungalow (Kep, Cambodia)', { commons: 'Bungalow at Bird of Paradise.jpg' }],
  ['mosquito-net-mesh-closeup', 'Close-up of mosquito net mesh with hexagonal openings (the photographer’s description: hexagon mosquito net)', { commons: 'Hexagon mosquito net 1.jpg' }],
  ['head-net-over-cap-alaska', 'Woman wearing a mosquito net over her head and cap in Noatak National Preserve, Alaska (National Park Service photo, July 2016)', { commons: 'Follow along on this journey with a story map and virtual tour at- www.nps.govnoatlearnphotosmultimediavirtualtour.htm (6b2d0c25-1dd8-b71b-0bbe-9b8a2645a7c9).JPG' }],
  ['hammock-mosquito-net-bc', 'Camper looking out from under the mosquito netting of a hammock at a campsite in Bowron Lake Provincial Park, British Columbia', { commons: 'Man peeking out of a hammock in Bowron Lake Provincial Park campsite 6 (DSCF2208).jpg' }],
  ['lemon-scented-gum-tree', 'Lemon-scented gum (lemon eucalyptus), Corymbia citriodora, a tall tree with a smooth pale trunk, seen from below (Queensland, Australia; research grade on iNaturalist)', { inat: { obs: 87813350, photo: 144818550 } }],
  ['scarlet-bee-balm-ontario', 'Scarlet bee balm, Monarda didyma, a red flower head on a leafy stem (Walton, Ontario; research grade on iNaturalist)', { inat: { obs: 380053092, photo: 695259310 } }],
  ['citronella-candle-burning', 'Citronella candle burning in a metal pail, close-up of the flame and wick (the photographer’s description: citronella candle)', { commons: 'Citronella Candle Wick Flame.jpg' }],
  ['mosquito-larva-close-up-trough', 'Mosquito larva, cold weather mosquito, Culiseta incidens (research grade on iNaturalist), close-up in water from a cattle water trough (Salinas, California)', { inat: { obs: 207485486, photo: 367011162 } }],
  ['mosquito-bite-welt-quarter', 'Mosquito bite reaction on a forearm, a raised, reddened welt, beside a U.S. quarter for scale (CDC photograph, 2024)', { phil: 28626 }],
  ['mosquito-bites-forearm-quarter', 'Several mosquito bite reactions on a forearm beside a U.S. quarter for scale (CDC photograph, 2024)', { phil: 28625 }],
  ['mosquito-bites-scratched-leg', 'Mosquito bites on a lower leg that the photographer says grew big and reddish because they kept scratching them (Philippines)', { commons: 'Mosquito bites leg.jpg' }],
  ['severe-mosquito-bite-reaction-leg', 'A large, circumscribed red patch on a leg that the photographer, who photographed their own leg, describes as a severe allergic reaction to a mosquito bite', { commons: 'Severe mosquito bite reaction.jpeg' }],
  ['fogging-for-mosquitoes-navy', 'Navy preventive medicine officer spraying for mosquitoes with a handheld fogger that puts out a white fog (Camp Buehring, Kuwait, April 2010; U.S. Navy photo)', { commons: 'US Navy 100414-N-2495K-001 Lt. Michael Fisher, assigned to Forward Deployable Preventative Medicine Unit-North, sprays for mosquitoes in Camp Buehring Kuwait.jpg' }],
  ['aedes-resting-under-leaf', 'Mosquito identified on iNaturalist as Aedes (annotated female), resting on the underside of a leaf, backlit (Woonona, New South Wales, Australia)', { inat: { obs: 254781725, photo: 456440104 } }],
  ['mosquito-larvae-water-trough', 'Mosquito larvae, cold weather mosquito, Culiseta incidens (research grade on iNaturalist), in a cattle water trough, seen from above (Salinas, California)', { inat: { obs: 207485486, photo: 367011240 } }],
  ['cedar-hedge-foliage-london-ontario', 'Close view of a cedar hedge that the observer identified as eastern white cedar, Thuja occidentalis (London, Ontario)', { inat: { obs: 129053639, photo: 219266995 } }],
  ['thuja-hedge-residential-lane', 'Tall, dense Thuja hedge along a residential lane (Neu-Listernohl, Germany; filed on Wikimedia Commons under Thuja occidentalis hedges)', { commons: 'N.-Listernohl Thuja.jpg' }],
  ['white-cedar-tree-in-lawn', 'Eastern white cedar, Thuja occidentalis, a single tree heavy with seed cones standing in an open lawn (Fonthill, Ontario; species agreed by three identifiers on iNaturalist)', { inat: { obs: 33729602, photo: 53004878 } }],
  ['white-cedar-dense-foliage', 'Dense outer foliage of an eastern white cedar, Thuja occidentalis (London, Ontario; identification agreed on iNaturalist)', { inat: { obs: 128837756, photo: 218875217 } }],
  ['mosquitoes-resting-under-leaf', 'Several mosquitoes, Armigeres subalbatus (research grade on iNaturalist), resting on the underside of a small leaf (Sai Kung, Hong Kong)', { inat: { obs: 243305900, photo: 433840273 } }],
  ['blacklegged-tick-female-point-pelee', 'Blacklegged tick, Ixodes scapularis, adult female (as annotated on iNaturalist), which the observer found on their leg after a walk in Point Pelee National Park, Ontario, photographed on a gray surface', { inat: { obs: 286921383, photo: 515861114 } }],
  ['blacklegged-tick-fingernail-cootes-paradise', 'Blacklegged tick, Ixodes scapularis, on a fingernail (Cootes Paradise, Hamilton, Ontario; research grade on iNaturalist)', { inat: { obs: 97562167, photo: 162274250 } }],
  ['blacklegged-tick-garden-glove', 'Blacklegged tick, Ixodes scapularis, on a gardening glove (Burlington, Ontario; research grade on iNaturalist)', { inat: { obs: 252629903, photo: 452270347 } }],
  ['white-tailed-deer-yard-ontario', 'Young white-tailed deer, Odocoileus virginianus, on the lawn of a neighbour’s yard in Ontario, as the observer describes it (research grade on iNaturalist)', { inat: { obs: 163374675, photo: 282563932 } }],
  ['tick-drag-cloth-woodland', 'Army entomologist dragging a white cloth through woodland vegetation to collect ticks, the tick drag method (Liepaja, Latvia, June 2026; U.S. Navy photo)', { commons: 'WRAIR Team Supports Force Health Protection During BALTOPS 2026 (9729894).jpg' }],
  ['erythema-migrans-rash-trunk', 'Erythema migrans, the expanding rash of Lyme disease, on the side of the trunk of a woman in her 20s (the photographer’s description)', { commons: 'Erythemamigrans.jpg' }],
  ['fungus-gnat-kitchen-counter', 'Dark-winged fungus gnat (family Sciaridae), about 3 mm long according to the observer, found on a kitchen counter, close-up from above (Moscow, Idaho; family agreed by three identifiers on iNaturalist)', { inat: { obs: 145802877, photo: 250522769 } }],
  ['fungus-gnat-penny-scale', 'Dark-winged fungus gnat (family Sciaridae) beside a U.S. penny for scale; the observer found them in their house, drawn to fruit, tea bags and potted plants (Oregon)', { inat: { obs: 330554465, photo: 599436936 } }],
  ['fungus-gnat-larvae-procession', 'Fungus gnat larvae (family Sciaridae) massed in a moving procession on soil outdoors, pale wormlike bodies with black heads (Terňa, Slovakia)', { inat: { obs: 384024878, photo: 702923758 } }],
  ['fungus-gnat-yellow-sticky-trap', 'Dark-winged fungus gnat (family Sciaridae) stuck to a yellow sticky trap; the observer says the gnats were living in potting mix (Lincoln, New Zealand)', { inat: { obs: 404646444, photo: 743138725 } }],
  // eighteenth batch (Oct 28): top-100 build, three new pages. baby-rats: a live, furred pup with its eyes still closed (the
  // CC0 lead), a litter from a nest under a yard debris pile, CDC's 2-week-old Norway rat beside a ruler, a young roof rat on
  // a walkway, two young Norway rats in a live trap. hobo-spiders: a top view beside a quarter (the CC0 lead), a juvenile in a
  // bathtub, one on a door corner, one on a house foundation, a male in its funnel web behind particle board; card: barn funnel
  // weaver. snake-poop: NO public-domain or CC0 lead exists (the page waits); a western diamondback seen defecating and its
  // dropping beside a knife, a dropping at a timber rattlesnake den, boa constrictor droppings, a ratsnake shed skin in an
  // attic; card: barn swallow droppings. Who identified each photo, what was refused and why: data/god-build/photo-notes-batch18.json
  ['baby-norway-rat-furred-eyes-closed', 'Baby Norway rat, Rattus norvegicus: a furred pup with its eyes still closed, curled in a person’s palm (Southampton Township, Burlington County, New Jersey; research grade on iNaturalist, annotated juvenile, male, alive)', { inat: { obs: 394967043, photo: 724152902 } }],
  ['baby-rats-litter-yard-debris-nest', 'Litter of furred rat pups with their eyes still closed, held in a hand beside the suburban debris pile where yardwork exposed their nest; the observer identified them as Norway rats, Rattus norvegicus, from the habitat and returned them to the nest (West Columbia, South Carolina; no second identification on iNaturalist)', { inat: { obs: 166364673, photo: 288091714 } }],
  ['norway-rat-2-weeks-old-ruler', 'Norway rat, Rattus norvegicus, 2 weeks old, side view beside a ruler, about 5 1/4 inches long by CDC’s measure, with proportionally large ears and feet and a blunt snout and tail (CDC photograph; very likely the same young rat as in house-mouse-vs-young-rat, whose animals look like specimens)', { phil: 26272 }],
  ['young-roof-rat-paver-walkway', 'Young roof rat (black rat), Rattus rattus, on a paver walkway outdoors (Museum Park, Miami, Florida; research grade on iNaturalist, annotated juvenile)', { inat: { obs: 368459374, photo: 672976802 } }],
  ['young-norway-rats-live-trap', 'Two young Norway rats, Rattus norvegicus, in a wire live trap; the observer caught 10 over 2 nights (New Jersey; research grade on iNaturalist, annotated juvenile, alive)', { inat: { obs: 58897792, photo: 94063505 } }],
  ['hobo-spider-dorsal-quarter', 'Hobo spider, Eratigena agrestis, from above on a teal plastic tote: chevron pattern on the abdomen, legs without bands, the edge of a US quarter at left; the observer found it in an outdoor tote and released it (Lakewood, Colorado; research grade on iNaturalist)', { inat: { obs: 393237985, photo: 720754552 } }],
  ['hobo-spider-juvenile-bathtub', 'Hobo spider, Eratigena agrestis, juvenile, in a bathtub, seen from above with the camera’s date stamp in a corner; identification supported on iNaturalist by arachnologist Rod Crawford (Moscow, Idaho)', { inat: { obs: 296552224, photo: 533985160 } }],
  ['hobo-spider-door-corner', 'Hobo spider, Eratigena agrestis, on the bottom corner of a white door, with no web in sight according to the observer (Missoula County, Montana; research grade on iNaturalist)', { inat: { obs: 184904478, photo: 322826239 } }],
  ['hobo-spider-house-foundation', 'Hobo spider, Eratigena agrestis, on the concrete foundation of a house behind a gas grill, where the observer found it (Prince George, British Columbia; research grade on iNaturalist)', { inat: { obs: 137477202, photo: 234805806 } }],
  ['hobo-spider-funnel-web-particle-board', 'Hobo spider, Eratigena agrestis, adult male in its sheet-and-funnel web behind an old piece of particle board in the observer’s backyard, a spot the observer says hobo spiders can always be counted on to make homes in (Salt Lake City, Utah; research grade on iNaturalist)', { inat: { obs: 84516618, photo: 138918826 } }],
  ['barn-funnel-weaver-indoor-wall', 'Barn funnel weaver, Tegenaria domestica, on a white wall indoors, its legs banded light and dark and its abdomen spotted (Virginia; research grade on iNaturalist)', { inat: { obs: 107562040, photo: 180928818 } }],
  ['western-diamondback-defecating-dropping', 'Western diamondback rattlesnake, Crotalus atrox, with its tail raised as it defecates, its fresh dropping of dark brown feces and pale yellow-green urates on the dead grass below; the observer photographed it defecating (Hidalgo County, Texas; research grade on iNaturalist)', { inat: { obs: 184799533, photo: 322634693 } }, { cropBottom: 0.06 }],
  ['rattlesnake-dropping-knife-scale', 'Fresh dropping of a western diamondback rattlesnake, Crotalus atrox, that the observer photographed defecating: dark brown pieces with pale yellow-green urates, beside a folding knife the observer gives as 9.9 cm (about 3.9 inches) long (Hidalgo County, Texas)', { inat: { obs: 184799533, photo: 322634677 } }, { cropBottom: 0.06 }],
  ['timber-rattlesnake-den-scat-hand', 'Dark, twisted dropping with a chalky white urate, beside a hand for size, found fresh at a timber rattlesnake den with snakes about 20 feet away; recorded on iNaturalist as timber rattlesnake, Crotalus horridus, scat (Pennsylvania; research grade, identified from the setting)', { inat: { obs: 295448829, photo: 531878005 } }],
  ['boa-constrictor-droppings-sample', 'Boa constrictor droppings: tubular, hair-filled pieces of feces and one chalky urate lump in a plastic tub labeled Boa Constrictor, a sample awaiting drying and preservation in resin at The National Poo Museum', { commons: 'Boa Constrictor Faeces - National Poo Museum Sample.jpg' }],
  ['rat-snake-shed-skin-attic', 'Shed skin of a ratsnake, Pantherophis alleghaniensis (named by two identifiers on iNaturalist), lying on loose-fill insulation in an attic, a hand at one end for size (Elton, West Virginia; research grade)', { inat: { obs: 338301921, photo: 615191399 } }],
  ['barn-swallow-droppings-concrete', 'Pile of barn swallow droppings on a concrete floor, small dark droppings capped with cream-white urates, with straw and a feather around them (the photographer’s identification: Hirundo rustica rustica, the European subspecies; no place given)', { commons: 'Hirundo rustica rustica feces.jpg' }],
  // batch 19 (Oct 29): frozen-page upgrades, pages 21-29 of the Oct 18 GSC review (how-to-keep-mice-out-of-your-car)
  ['mouse-nest-under-car-hood', 'Nest of fibrous material packed in beside the engine under the hood of a car that had not been driven for a few weeks (the observer’s description); identified on iNaturalist as deer mice, genus Peromyscus, by two identifiers, not research grade (San Diego, California)', { inat: { obs: 24446964, photo: 37801160 } }],
  ['mouse-tracks-car-engine-cover', 'Rodent footprints in the dust on a plastic cover in the engine bay, with nest material in front of them, under the hood of a car that had not been driven for a few weeks (the observer’s description); identified on iNaturalist as deer mice, genus Peromyscus, by two identifiers, not research grade (San Diego, California; same observation as mouse-nest-under-car-hood)', { inat: { obs: 24446964, photo: 37801102 } }],
  // batch 20 (Oct 29): frozen-page upgrades, pages 11-20 of the Oct 18 GSC review (how-to-get-rid-of-cluster-flies-canada):
  // cluster flies where people meet them, on a sunlit wall, a window sill (camera date stamp cropped) and window glass.
  // Who identified each photo, what was refused and why: data/god-build/photo-notes-batch20.json
  ['cluster-fly-sunlit-wall', 'Cluster fly, genus Pollenia, adult, on a sunlit wall where the observer saw a couple of other flies sunning themselves on a 57 °F February day (Warrensburg, Missouri; research grade on iNaturalist)', { inat: { obs: 198733950, photo: 350335422 } }],
  ['cluster-fly-window-sill', 'Cluster fly, genus Pollenia, on a window sill in January, about 8 mm long by the observer’s estimate (Moscow, Idaho; research grade on iNaturalist)', { inat: { obs: 104877491, photo: 175833757 } }, { cropBottom: 0.12 }],
  ['cluster-fly-window-glass', 'Cluster fly, genus Pollenia, adult, on the outside of a glass window at an air temperature of 3 °C, about 7 mm from head to wingtips by the observer’s measure (Logy Bay, Newfoundland and Labrador; genus agreed by two identifiers on iNaturalist, not research grade)', { inat: { obs: 342257126, photo: 623228711 } }],
]

const UA = { 'User-Agent': 'BuzzSkitoSiteBuilder/1.0 (photo credits recorded; support@buzzskito.ca)' }
const strip = (h) => String(h || '').replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, ' ').trim()
const LIC = { 'cc0': 'CC0-1.0', 'cc by 2.0': 'CC-BY-2.0', 'cc by 2.5': 'CC-BY-2.5', 'cc by 3.0': 'CC-BY-3.0', 'cc by 4.0': 'CC-BY-4.0', 'cc by-sa 2.0': 'CC-BY-SA-2.0', 'cc by-sa 2.5': 'CC-BY-SA-2.5', 'cc by-sa 3.0': 'CC-BY-SA-3.0', 'cc by-sa 4.0': 'CC-BY-SA-4.0', 'public domain': 'public-domain' }

async function phil(pid) {
  const page = `https://wwwn.cdc.gov/phil/Details.aspx?pid=${pid}`
  const html = await (await fetch(page, { headers: UA })).text()
  const field = (id) => strip((html.match(new RegExp(`<span id="${id}">([\\s\\S]*?)</span>`)) || [])[1])
  const rights = field('lblCopyRight')
  if (!/public domain/i.test(rights) || /copyright protected/i.test(rights)) throw new Error(`PHIL ${pid} is not public domain: ${rights.slice(0, 80)}`)
  const provider = field('lblContprov') || 'CDC'
  const photographer = field('lblPhotoCredit')
  const credit = `${provider}${photographer ? `; photo: ${photographer}` : ''} (CDC Public Health Image Library, phil.cdc.gov)`
  return { sourceUrl: page, originalUrl: PHIL_FILE[pid] || `https://wwwn.cdc.gov/phil/PHIL_Images/${pid}/${pid}.tif`, license: 'public-domain', credit, description: field('lblDesc').slice(0, 300) }
}
async function commons(name) {
  const api = `https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url|extmetadata&titles=${encodeURIComponent('File:' + name)}`
  const j = await (await fetch(api, { headers: UA })).json()
  const info = Object.values(j.query.pages)[0].imageinfo[0]
  const m = info.extmetadata
  const short = strip(m.LicenseShortName?.value).toLowerCase()
  const license = LIC[short]
  if (!license) throw new Error(`Commons ${name}: licence "${short}" is not allowed`)
  const artist = strip(m.Artist?.value) || 'unknown author'
  return { sourceUrl: info.descriptionurl, originalUrl: info.url, license, credit: `${artist}, ${strip(m.LicenseShortName?.value)}, via Wikimedia Commons`, description: strip(m.ImageDescription?.value).slice(0, 300) }
}
async function inat({ obs, photo }) {
  const j = await (await fetch(`https://api.inaturalist.org/v1/observations/${obs}`, { headers: UA })).json()
  const p = j.results[0].photos.find((x) => x.id === photo)
  if (!p) throw new Error(`iNaturalist photo ${photo} is not on observation ${obs}`)
  const license = { 'cc-by': 'CC-BY-4.0', 'cc0': 'CC0-1.0', 'cc-by-sa': 'CC-BY-SA-4.0' }[p.license_code]
  if (!license) throw new Error(`iNaturalist photo ${photo}: licence "${p.license_code}" is not allowed`)
  return { sourceUrl: `https://www.inaturalist.org/observations/${obs}`, originalUrl: p.url.replace('/square.', '/original.'), license, credit: `${p.attribution}, via iNaturalist`, description: j.results[0].taxon?.name || '' }
}
// One numbered figure on a www.nps.gov page ({ nps: { page, figure: 1 } }), taken only when the
// page's own caption ends "(NPS Photo)". Work the National Park Service made is in the public
// domain (17 U.S.C. 105; nps.gov/aboutus/disclaimer.htm: "material created by the National Park
// Service ... is generally considered in the public domain"). Any other credit is refused, e.g.
// Conserve O Gram 3/12's "(Photo courtesy of Thomas Parker, PhD, MuseumPests.Net)".
async function nps({ page, figure }) {
  if (!/^https:\/\/www\.nps\.gov\//.test(page)) throw new Error(`NPS source must be a https://www.nps.gov/ page: ${page}`)
  const html = await (await fetch(page, { headers: UA })).text()
  const fig = [...html.matchAll(/<figure\b[\s\S]*?<\/figure>/g)].map((m) => m[0]).find((f) => new RegExp(`<figcaption>\\s*Figure ${figure}:`).test(f))
  if (!fig) throw new Error(`NPS ${page}: no "Figure ${figure}:" caption`)
  const caption = strip((fig.match(/<figcaption>([\s\S]*?)<\/figcaption>/) || [])[1])
  const credit = (caption.match(/\(([^()]+)\)$/) || [])[1]
  if (credit !== 'NPS Photo') throw new Error(`NPS ${page} Figure ${figure} is credited "${credit || 'nobody'}", not "NPS Photo"`)
  const publisher = (html.match(/<title>[^<]*\(([^()<]+)\)\s*<\/title>/) || [])[1]
  if (!publisher) throw new Error(`NPS ${page}: no publisher in the page title`)
  const src = (fig.match(/<img\b[^>]*?\ssrc="([^"]+)"/) || [])[1]
  if (!src) throw new Error(`NPS ${page} Figure ${figure}: no image`)
  // the page asks the server for a resized WebP (?maxwidth=...&format=webp): take the file itself
  return { sourceUrl: page, originalUrl: new URL(src.replace(/&amp;/g, '&').split('?')[0], page).href, license: 'public-domain', credit: `${credit} (${strip(publisher)}, nps.gov)`, description: caption.slice(0, 300) }
}

const ledger = JSON.parse(readFileSync(LEDGER, 'utf8'))
const have = Object.fromEntries(ledger.photos.map((p) => [p.file, p]))
// optional 4th element: { cropBottom: 0.12 } cuts that share of the height off the bottom
// (Insects Unlocked photos carry a black caption band there, 10 to 14% of the height: measure it)
for (const [name, subject, src, opts = {}] of PHOTOS) {
  const file = `/guides/photos/${name}.webp`
  // a corrected subject line in PHOTOS reaches the ledger without downloading again
  if (have[file] && existsSync(join(OUT, `${name}.webp`))) { have[file].subject = subject; console.log(`have ${name}`); continue }
  try {
    const meta = src.phil ? await phil(src.phil) : src.commons ? await commons(src.commons) : src.nps ? await nps(src.nps) : await inat(src.inat)
    const res = await fetch(meta.originalUrl, { headers: UA })
    if (!res.ok) throw new Error(`download HTTP ${res.status}`)
    const buf = Buffer.from(await res.arrayBuffer())
    writeFileSync(join(RAW, `${name}${meta.originalUrl.match(/\.[a-z]+$/i)?.[0] || ''}`), buf)
    let quality = 80, out
    let img = buf
    if (opts.cropBottom) {
      const oriented = await sharp(buf, { limitInputPixels: false }).rotate().toBuffer({ resolveWithObject: true })
      img = await sharp(oriented.data, { limitInputPixels: false }).extract({ left: 0, top: 0, width: oriented.info.width, height: Math.round(oriented.info.height * (1 - opts.cropBottom)) }).toBuffer()
    }
    do { out = await sharp(img, { limitInputPixels: false }).rotate().toColourspace('srgb').resize({ width: 1200, withoutEnlargement: true }).webp({ quality }).toBuffer({ resolveWithObject: true }); quality -= 8 } while (out.data.length > 260 * 1024 && quality >= 56)
    writeFileSync(join(OUT, `${name}.webp`), out.data)
    have[file] = { file, subject, sourceUrl: meta.sourceUrl, originalUrl: meta.originalUrl, license: meta.license, credit: meta.credit, ...(opts.cropBottom && { edited: `bottom ${Math.round(opts.cropBottom * 100)}% cropped (caption strip)` }), width: out.info.width, height: out.info.height, bytes: out.data.length, sourceDescription: meta.description, downloadedOn: new Date().toISOString().slice(0, 10), sha256Original: createHash('sha256').update(buf).digest('hex') }
    console.log(`ok   ${name}: ${(buf.length / 1048576).toFixed(1)} MB -> ${(out.data.length / 1024).toFixed(0)} KB ${out.info.width}x${out.info.height} | ${meta.license} | ${meta.credit}`)
  } catch (e) {
    console.log(`FAIL ${name}: ${e.message}`)
  }
}
ledger.photos = Object.values(have).sort((a, b) => a.file.localeCompare(b.file))
writeFileSync(LEDGER, JSON.stringify(ledger, null, 1) + '\n')
console.log(`photos on record: ${ledger.photos.length}`)
