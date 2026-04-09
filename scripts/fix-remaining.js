const fs = require('fs');
const path = require('path');

// Tighten titles to max 56 chars to be safe with Ahrefs pixel-width calculation
const titleFixes = {
  'blog': 'Mosquito & Tick Control Blog | GTA | BuzzSkito',
  'mosquito-tick-control-hamilton-burlington': 'Mosquito & Tick Control Hamilton-Burlington | BuzzSkito',
  'halton-hills-tick-spray': 'Tick Spray Halton Hills | $99 | BuzzSkito',
  'mississauga-mosquito-control': 'Mosquito Control Mississauga | $99 | BuzzSkito',
  'west-nile-virus-mosquito-risk-ontario': 'West Nile Virus & Mosquito Risk Ontario | BuzzSkito',
  'mississauga-tick-spray': 'Tick Spray Mississauga | $99 | BuzzSkito',
  'scarborough-tick-spray': 'Tick Spray Scarborough | $99 | BuzzSkito',
  'burlington-tick-spray': 'Tick Spray Burlington | $99 | BuzzSkito',
  'georgetown-tick-spray': 'Tick Spray Georgetown | $99 | BuzzSkito',
  'north-york-tick-spray': 'Tick Spray North York | $99 | BuzzSkito',
  'woodbridge-tick-spray': 'Tick Spray Woodbridge | $99 | BuzzSkito',
  'mosquito-season-scarborough-east-toronto': 'Mosquito Season Scarborough & East Toronto | BuzzSkito',
  'brampton-mosquito-control': 'Mosquito Control Brampton | $99 | BuzzSkito',
  'burlington-mosquito-spray': 'Mosquito Spray Burlington | $99 | BuzzSkito',
  'etobicoke-tick-spray': 'Tick Spray Etobicoke | $99 | BuzzSkito',
  'hamilton-mosquito-control': 'Mosquito Control Hamilton | $99 | BuzzSkito',
  'king-city-tick-spray': 'Tick Spray King City | $99 | BuzzSkito',
  'mosquito-control': 'Mosquito Control GTA | Barrier Spray | BuzzSkito',
  'mosquito-control-ontario': 'Mosquito & Tick Control Ontario | BuzzSkito',
  'oakville-mosquito-control': 'Mosquito Control Oakville | $99 | BuzzSkito',
  'thornhill-tick-spray': 'Tick Spray Thornhill | $99 | BuzzSkito',
  'tick-control-near-me': 'Tick Control Near Me | GTA | BuzzSkito',
  'tick-control-ontario': 'Tick Control Ontario | GTA Service | BuzzSkito',
  'tick-prevention-yard-ontario-safe-for-kids': 'Tick Prevention Yard Ontario | Kids Safe | BuzzSkito',
  'brampton-tick-spray': 'Tick Spray Brampton | $99 | BuzzSkito',
  'hamilton-tick-spray': 'Tick Spray Hamilton | $99 | BuzzSkito',
  'mosquito-control-cost': 'Mosquito Control Cost Ontario | 2026 | BuzzSkito',
  'toronto-mosquito-control': 'Mosquito Control Toronto | $99 | BuzzSkito',
};

const descFixes = {
  'burlington-mosquito-spray': 'Professional mosquito spray in Burlington. Serving Alton Village, Roseland, Aldershot & all areas. From $99. Call (289) 216-5030.',
};

let fixed = 0;

function scanDir(dir) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach(e => {
    if (e.isDirectory() && !e.name.startsWith('_') && !e.name.startsWith('.')) {
      const sub = path.join(dir, e.name);
      const p = path.join(sub, 'page.tsx');
      if (fs.existsSync(p)) {
        let content = fs.readFileSync(p, 'utf8');
        let changed = false;
        const slug = e.name;

        if (titleFixes[slug]) {
          const tm = content.match(/title:\s*'([^']+)'/);
          if (tm && tm[1].length > 55) {
            content = content.replace(`title: '${tm[1]}'`, `title: '${titleFixes[slug]}'`);
            changed = true;
          }
        }
        if (descFixes[slug]) {
          const dm = content.match(/description:\s*\n\s*'([^']+)'/);
          if (dm && dm[1].length > 150) {
            content = content.replace(dm[0], `description:\n    '${descFixes[slug]}'`);
            changed = true;
          }
        }

        if (changed) {
          fs.writeFileSync(p, content, 'utf8');
          const newTitle = content.match(/title:\s*'([^']+)'/);
          console.log(`Fixed: ${slug} (title: ${newTitle ? newTitle[1].length : '?'} chars)`);
          fixed++;
        }
      }
      scanDir(sub);
    }
  });
}

scanDir('app');
console.log(`\nTotal fixed: ${fixed}`);
