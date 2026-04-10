const fs = require('fs');
const path = require('path');

// Add "service" keyword naturally to FAQ answers on city pages
// Strategy: Find the FAQ about "Does BuzzSkito serve all [city] neighbourhoods?"
// and add "service" to the answer naturally

const cityPages = [
  'oakville-mosquito-control',
  'mississauga-mosquito-control',
  'toronto-mosquito-control',
  'brampton-mosquito-control',
  'burlington-mosquito-spray',
  'hamilton-mosquito-control',
  'vaughan-mosquito-control',
  'markham-mosquito-control',
  'richmond-hill-mosquito-control',
  'etobicoke-mosquito-control',
  'scarborough-mosquito-control',
  'north-york-mosquito-control',
  'caledon-mosquito-control',
  'milton-mosquito-control',
  'georgetown-mosquito-control',
  'halton-hills-mosquito-control',
  'king-city-mosquito-control',
  'woodbridge-mosquito-control',
  'thornhill-mosquito-control',
  'kleinburg-mosquito-control',
  'york-region-mosquito-control',
];

// Also tick pages
const tickPages = [
  'oakville-tick-spray',
  'mississauga-tick-spray',
  'toronto-tick-spray',
  'brampton-tick-spray',
  'burlington-tick-spray',
  'hamilton-tick-spray',
  'vaughan-tick-spray',
  'markham-tick-spray',
  'richmond-hill-tick-spray',
  'etobicoke-tick-spray',
  'scarborough-tick-spray',
  'north-york-tick-spray',
  'caledon-tick-spray',
  'milton-tick-spray',
  'georgetown-tick-spray',
  'halton-hills-tick-spray',
  'king-city-tick-spray',
  'woodbridge-tick-spray',
  'thornhill-tick-spray',
];

let updated = 0;

// For mosquito pages: add "service" to the hero subtitle text
cityPages.forEach(slug => {
  const p = path.join('app', slug, 'page.tsx');
  if (!fs.existsSync(p)) return;
  let content = fs.readFileSync(p, 'utf8');

  // Add "mosquito service" to the hero paragraph if not already present
  // Find the hero <p> with text-brand-100 class
  if (!content.toLowerCase().includes('mosquito service')) {
    // Safe approach: add it to the "Also Providing" section text
    // Or better: add to the last FAQ answer that mentions "Call (289)"
    // Safest: just make sure "service" appears in the pricing section description

    // Check if there's a "Mosquito Control Pricing" h2 section
    if (content.includes('Mosquito Control Pricing in')) {
      // Add "service" to the text after that heading
      const old = 'Professional mosquito control from';
      const newText = 'Professional mosquito control service from';
      if (content.includes(old) && !content.includes(newText)) {
        content = content.replace(old, newText);
        fs.writeFileSync(p, content, 'utf8');
        console.log('Updated (pricing text): ' + slug);
        updated++;
        return;
      }
    }

    // Fallback: check pricing bar
    const oldBar = 'Professional mosquito control from';
    if (content.includes(oldBar)) {
      // Only in the pricing bar subtitle, not main content
      // This is a single, small, natural addition
      content = content.replace(oldBar, 'Professional mosquito control service from');
      fs.writeFileSync(p, content, 'utf8');
      console.log('Updated (bar): ' + slug);
      updated++;
    }
  }
});

// For tick pages: same approach
tickPages.forEach(slug => {
  const p = path.join('app', slug, 'page.tsx');
  if (!fs.existsSync(p)) return;
  let content = fs.readFileSync(p, 'utf8');

  if (!content.toLowerCase().includes('tick service')) {
    const old = 'Professional tick spray from';
    const newText = 'Professional tick spray service from';
    if (content.includes(old) && !content.includes(newText)) {
      content = content.replace(old, newText);
      fs.writeFileSync(p, content, 'utf8');
      console.log('Updated (tick): ' + slug);
      updated++;
    }
  }
});

console.log('\nTotal updated: ' + updated);
