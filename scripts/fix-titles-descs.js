const fs = require('fs');
const path = require('path');

// Title overrides — all under 60 chars
const titleOverrides = {
  'outdoor-event-mosquito-control-gta': 'Outdoor Event Mosquito Control GTA | BuzzSkito',
  'king-city-mosquito-control': 'Mosquito Control King City | From $99 | BuzzSkito',
  'natural-eco-friendly-mosquito-control-ontario': 'Natural Mosquito Control Ontario | 2026 | BuzzSkito',
  'mosquito-spray-companies-gta': 'Mosquito Spray Companies GTA | Guide | BuzzSkito',
  'georgetown-mosquito-control': 'Mosquito Control Georgetown | From $99 | BuzzSkito',
  'thornhill-mosquito-control': 'Mosquito Control Thornhill | From $99 | BuzzSkito',
  'mosquito-control-cost-ontario': 'Mosquito Control Cost Ontario | 2026 Guide | BuzzSkito',
  'richmond-hill-mosquito-control': 'Mosquito Control Richmond Hill | $99 | BuzzSkito',
  'mosquito-control-near-water-ravines-gta': 'Mosquito Control Near Ravines & Water | BuzzSkito',
  'tick-control-vaughan-king-city-woodbridge': 'Tick Control Vaughan & King City | BuzzSkito',
  'when-to-schedule-first-mosquito-treatment-ontario': 'First Mosquito Treatment Timing | Ontario | BuzzSkito',
  'etobicoke-mosquito-control': 'Mosquito Control Etobicoke | From $99 | BuzzSkito',
  'halton-hills-mosquito-control': 'Mosquito Control Halton Hills | From $99 | BuzzSkito',
  'markham-mosquito-control': 'Mosquito Control Markham | From $99 | BuzzSkito',
  'how-to-choose-mosquito-control-company-gta': 'How to Choose Mosquito Control Company | BuzzSkito',
  'tick-control-richmond-hill-markham': 'Tick Control Richmond Hill & Markham | BuzzSkito',
  'milton-mosquito-control': 'Mosquito Control Milton | From $99 | BuzzSkito',
  'tick-bite-symptoms-what-to-do-ontario': 'Tick Bite Symptoms & What to Do | Ontario | BuzzSkito',
  'tick-prevention-caledon-halton-hills': 'Tick Prevention Caledon & Halton Hills | BuzzSkito',
  'what-ticks-look-like-ontario': 'What Ticks Look Like in Ontario | ID Guide | BuzzSkito',
  'tick-control-ancaster-dundas-hamilton': 'Tick Control Ancaster & Dundas | Hamilton | BuzzSkito',
  'mosquito-control-cost': 'Mosquito Control Cost Ontario | 2026 Pricing | BuzzSkito',
  'mosquito-vs-diy-vs-professional-control': 'DIY vs Professional Mosquito Control | BuzzSkito',
  'mosquito-control-milton-georgetown': 'Mosquito Control Milton & Georgetown | BuzzSkito',
  'scarborough-mosquito-control': 'Mosquito Control Scarborough | From $99 | BuzzSkito',
  'north-york-mosquito-control': 'Mosquito Control North York | From $99 | BuzzSkito',
  'vaughan-mosquito-control': 'Mosquito Control Vaughan | From $99 | BuzzSkito',
  'best-tick-control-yard-treatment': 'Best Tick Control for Your Yard | Ontario | BuzzSkito',
  'mosquito-repellent-plants-ontario': 'Mosquito-Repelling Plants Ontario | 2026 | BuzzSkito',
  'how-to-prevent-mosquitoes-in-your-backyard': '12 Ways to Prevent Mosquitoes | Backyard | BuzzSkito',
  'mosquito-season-gta-when-does-it-start': 'When Does Mosquito Season Start? GTA | BuzzSkito',
  'tick-season-ontario-when-are-ticks-active': 'When Are Ticks Active in Ontario? | 2026 | BuzzSkito',
  'caledon-mosquito-control': 'Mosquito Control Caledon | From $99 | BuzzSkito',
  'is-mosquito-spray-safe-kids-pets': 'Is Mosquito Spray Safe for Kids & Pets? | BuzzSkito',
  'tick-bite-vs-mosquito-bite': 'Tick Bite vs Mosquito Bite | How to Tell | BuzzSkito',
  'ultimate-tick-control-guide-ontario': 'Tick Control Guide Ontario | Complete 2026 | BuzzSkito',
  'oakville-tick-spray': 'Tick Spray Oakville | From $99 | BuzzSkito',
  'mississauga-mosquito-control': 'Mosquito Control Mississauga | $99, No Contracts | BuzzSkito',
  'tick-prevention-yard-ontario-safe-for-kids': 'Tick Prevention Yard Ontario | Safe for Kids | BuzzSkito',
  'woodbridge-mosquito-control': 'Mosquito Control Woodbridge | $99 | BuzzSkito',
  'hidden-mosquito-breeding-spots-backyard': 'Hidden Mosquito Breeding Spots | GTA | BuzzSkito',
  'mosquito-control-etobicoke-north-york': 'Mosquito Control Etobicoke & North York | BuzzSkito',
  'kleinburg-mosquito-control': 'Mosquito Control Kleinburg | From $99 | BuzzSkito',
  'mosquito-control-near-me': 'Mosquito & Tick Control Near Me | GTA | BuzzSkito',
  'how-long-does-mosquito-spray-last': 'How Long Does Mosquito Spray Last? | BuzzSkito',
  'ultimate-backyard-mosquito-control-guide': 'Backyard Mosquito Control Guide | GTA | BuzzSkito',
  'brampton-mosquito-control': 'Mosquito Control Brampton | $99, No Contracts | BuzzSkito',
  'burlington-mosquito-spray': 'Mosquito Spray Burlington | $99, No Contracts | BuzzSkito',
  'hamilton-mosquito-control': 'Mosquito Control Hamilton | $99, No Contracts | BuzzSkito',
  'oakville-mosquito-control': 'Mosquito Control Oakville | $99, No Contracts | BuzzSkito',
  'mosquito-tick-control-stoney-creek': 'Mosquito & Tick Control Stoney Creek | BuzzSkito',
  'richmond-hill-tick-spray': 'Tick Spray Richmond Hill | From $99 | BuzzSkito',
  'toronto-mosquito-control': 'Mosquito Control Toronto | $99, No Contracts | BuzzSkito',
};

// Description overrides — all under 155 chars
const descOverrides = {
  'mosquito-spray-companies-gta': 'How to choose a mosquito spray company in the GTA. What to ask, red flags to avoid, and what good service looks like.',
  'tick-prevention-yard-ontario-safe-for-kids': 'How to make your Ontario backyard safe from ticks. Kid-safe yard treatment strategies, prevention tips. From $99.',
  'hidden-mosquito-breeding-spots-backyard': '12 hidden mosquito breeding spots in your GTA backyard — gutters, saucers, tarps & more. Find and eliminate them.',
  'tick-bite-vs-mosquito-bite': 'Tick bite vs mosquito bite — how to tell the difference, symptoms to watch for, and when to see a doctor.',
  'tick-bite-symptoms-what-to-do-ontario': 'Found a tick? Step-by-step guide: safe removal, Lyme disease symptoms to watch for, and when to seek medical care.',
  'mosquito-repellent-plants-ontario': 'Best mosquito-repelling plants for Ontario gardens — lavender, citronella grass, basil & more. What works in 2026.',
  'natural-eco-friendly-mosquito-control-ontario': 'Natural mosquito control options in Ontario — garlic sprays, essential oils, BTi dunks & plant-based barriers reviewed.',
  'service-areas': 'BuzzSkito serves 19 GTA cities with mosquito & tick control. From $99/treatment. Find your city and get a free quote.',
  'mosquito-season-gta-when-does-it-start': 'When mosquito season starts in the GTA, peak activity months, and when to book your first treatment. 2026 guide.',
  'ultimate-tick-control-guide-ontario': 'Complete tick control guide for Ontario — species ID, Lyme disease risk, yard treatment, and prevention strategies.',
  'lyme-disease-tick-prevention-ontario': 'Ontario Lyme disease risk zones, blacklegged tick info, prevention tips, and professional yard treatment options.',
  'mosquito-control-cost-ontario': 'How much does mosquito control cost in Ontario? 2026 pricing from $99. Compare treatment options and get a quote.',
  'what-ticks-look-like-ontario': 'Visual guide to Ontario tick species — blacklegged, American dog, and lone star ticks. Nymph vs adult identification.',
  'best-tick-control-yard-treatment': 'Comparing tick treatments for Ontario yards — granular, sprays, cedar mulch, permethrin tubes & professional barrier.',
  'tick-season-ontario-when-are-ticks-active': 'Month-by-month tick activity in Ontario. Peak Lyme disease risk windows, when to treat, and seasonal prevention tips.',
  'how-to-prevent-mosquitoes-in-your-backyard': '12 proven ways to prevent mosquitoes in your Ontario backyard — standing water, landscaping, and when to call a pro.',
  'mosquito-vs-diy-vs-professional-control': 'DIY vs professional mosquito control in Ontario. Honest comparison of citronella, foggers, and barrier spray.',
  'how-long-does-mosquito-spray-last': 'Professional mosquito barrier spray lasts up to 30 days. How weather, coverage, and products affect duration.',
};

let titleFixed = 0, descFixed = 0;

function scanDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory() && !entry.name.startsWith('_') && !entry.name.startsWith('.')) {
      const subDir = path.join(dir, entry.name);
      const pagePath = path.join(subDir, 'page.tsx');
      if (fs.existsSync(pagePath)) {
        let content = fs.readFileSync(pagePath, 'utf8');
        let changed = false;
        const slug = entry.name;

        // Fix title
        if (titleOverrides[slug]) {
          const titleMatch = content.match(/title:\s*['"](.*?)['"]/);
          if (titleMatch && titleMatch[1].length > 60) {
            content = content.replace(
              `title: '${titleMatch[1]}'`,
              `title: '${titleOverrides[slug]}'`
            );
            if (content.includes(`title: '${titleOverrides[slug]}'`)) {
              changed = true;
              titleFixed++;
            }
          }
        }

        // Fix description
        if (descOverrides[slug]) {
          const descPatterns = [
            /description:\s*\n\s*'([^']+)'/s,
            /description:\s*'([^']+)'/,
          ];
          for (const pattern of descPatterns) {
            const match = content.match(pattern);
            if (match && match[1].length > 155) {
              content = content.replace(match[0], `description:\n    '${descOverrides[slug]}'`);
              changed = true;
              descFixed++;
              break;
            }
          }
        }

        if (changed) {
          fs.writeFileSync(pagePath, content, 'utf8');
          console.log(`Fixed: ${slug}`);
        }
      }
      scanDir(subDir);
    }
  }
}

scanDir('app');
console.log(`\nDone. Titles fixed: ${titleFixed}, Descriptions fixed: ${descFixed}`);
