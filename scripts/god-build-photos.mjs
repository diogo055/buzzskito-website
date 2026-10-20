// Downloads the licensed real photographs the scheduled pages use, converts them to web-sized
// WebP in public/guides/photos/, and records each in data/god-build/photos.json with the credit
// and licence read from the source page itself (never typed by hand). Originals go to
// data/god-build/raw/photos/ (not committed).
//
//   node scripts/god-build-photos.mjs           fetch what is missing
//
// Allowed: public domain (CDC PHIL images whose page says public domain), CC0, CC BY, CC BY-SA.
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
  ['bed-bug-adult-ruler', 'Bed bug, Cimex lectularius, unfed adult beside a millimetre ruler', { phil: 12704 }],
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

const ledger = JSON.parse(readFileSync(LEDGER, 'utf8'))
const have = Object.fromEntries(ledger.photos.map((p) => [p.file, p]))
// optional 4th element: { cropBottom: 0.12 } cuts that share of the height off the bottom
// (Insects Unlocked photos carry a black caption band there, 10 to 14% of the height: measure it)
for (const [name, subject, src, opts = {}] of PHOTOS) {
  const file = `/guides/photos/${name}.webp`
  // a corrected subject line in PHOTOS reaches the ledger without downloading again
  if (have[file] && existsSync(join(OUT, `${name}.webp`))) { have[file].subject = subject; console.log(`have ${name}`); continue }
  try {
    const meta = src.phil ? await phil(src.phil) : src.commons ? await commons(src.commons) : await inat(src.inat)
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
