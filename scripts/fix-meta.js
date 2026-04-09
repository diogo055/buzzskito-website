const fs = require('fs');
const path = require('path');

const metaOverrides = {
  'aldershot-mosquito-control': 'Professional mosquito control in Aldershot, Burlington. Health Canada-approved barrier spray from $99. Safe for kids & pets. Call (289) 216-5030.',
  'alton-village-mosquito-control': 'Professional mosquito control in Alton Village, Burlington. Health Canada-approved barrier spray from $99. Safe for kids & pets. Call (289) 216-5030.',
  'bronte-mosquito-control': 'Professional mosquito control in Bronte, Oakville. Barrier spray near Bronte Creek from $99. Safe for kids & pets. Call (289) 216-5030.',
  'burlington-mosquito-spray': 'Professional mosquito spray in Burlington. Serving Alton Village, Roseland, Aldershot & all neighbourhoods. From $99, no contracts. Call (289) 216-5030.',
  'burlington-tick-spray': 'Professional tick spray in Burlington. Protect your yard near the Escarpment & Royal Botanical Gardens. From $99. Call (289) 216-5030.',
  'buzzskito-history': 'Learn about BuzzSkito — professional mosquito & tick control for the GTA. Health Canada-approved treatments from $99.',
  'caledon-mosquito-control': 'Mosquito control in Caledon, ON. Professional barrier spray from $99. Health Canada-approved. No contracts. Call (289) 216-5030.',
  'castlemore-mosquito-control': 'Mosquito control in Castlemore, Brampton. Professional barrier spray from $99. Safe for kids & pets in 30 min. Call (289) 216-5030.',
  'commercial-mosquito-control': 'Commercial mosquito control for GTA businesses. Professional barrier spray for restaurants, event venues & properties. Call (289) 216-5030.',
  'contact': 'Get a free mosquito or tick control quote for your GTA property. Call (289) 216-5030 or fill out our form. Same-week service available.',
  'don-mills-mosquito-control': 'Mosquito control in Don Mills, Toronto. Professional barrier spray near Don Valley from $99. No contracts. Call (289) 216-5030.',
  'east-york-mosquito-control': 'Mosquito control in East York, Toronto. Barrier spray near Taylor Creek from $99. Safe for kids & pets. Call (289) 216-5030.',
  'etobicoke-mosquito-control': 'Mosquito control in Etobicoke, Toronto. Barrier spray near Humber River from $99. Health Canada-approved. Call (289) 216-5030.',
  'etobicoke-tick-spray': 'Professional tick spray in Etobicoke. Protect your yard from blacklegged ticks near Humber Valley. From $99. Call (289) 216-5030.',
  'forest-hill-mosquito-control': 'Mosquito control in Forest Hill, Toronto. Barrier spray near ravines from $99. Safe for kids & pets. Call (289) 216-5030.',
  'georgetown-mosquito-control': 'Mosquito control in Georgetown, Halton Hills. Professional barrier spray from $99. No contracts. Call (289) 216-5030.',
  'georgetown-tick-spray': 'Professional tick spray in Georgetown, Halton Hills. Protect your yard from blacklegged ticks. From $99. Call (289) 216-5030.',
  'glen-abbey-mosquito-control': 'Mosquito control in Glen Abbey, Oakville. Barrier spray near golf course ravines from $99. No contracts. Call (289) 216-5030.',
  'halton-hills-mosquito-control': 'Mosquito control in Halton Hills. Professional barrier spray from $99. Serving Georgetown, Acton & all areas. Call (289) 216-5030.',
  'halton-hills-tick-spray': 'Tick spray in Halton Hills. Protect your yard from blacklegged ticks near Bruce Trail. From $99. Call (289) 216-5030.',
  'hamilton-mosquito-control': 'Mosquito control in Hamilton. Professional barrier spray from $99. Serving Ancaster, Dundas, Stoney Creek & all areas. Call (289) 216-5030.',
  'hamilton-tick-spray': 'Professional tick spray in Hamilton. Protect your yard near the Escarpment & Dundas Valley. From $99. Call (289) 216-5030.',
  'heart-lake-mosquito-control': 'Mosquito control in Heart Lake, Brampton. Barrier spray near conservation area from $99. No contracts. Call (289) 216-5030.',
  'king-city-mosquito-control': 'Mosquito control in King City, ON. Professional barrier spray from $99. Health Canada-approved. No contracts. Call (289) 216-5030.',
  'king-city-tick-spray': 'Professional tick spray in King City, ON. Protect your property from blacklegged ticks. From $99. Call (289) 216-5030.',
  'kleinburg-mosquito-control': 'Mosquito control in Kleinburg, Vaughan. Professional barrier spray from $99. Health Canada-approved. Call (289) 216-5030.',
  'leaside-mosquito-control': 'Mosquito control in Leaside, Toronto. Barrier spray near Don Valley from $99. Safe for kids & pets. Call (289) 216-5030.',
  'markham-mosquito-control': 'Mosquito control in Markham, ON. Professional barrier spray from $99. No contracts. Health Canada-approved. Call (289) 216-5030.',
  'markham-tick-spray': 'Professional tick spray in Markham, ON. Protect your yard from blacklegged ticks. From $99. Call (289) 216-5030.',
  'milton-mosquito-control': 'Mosquito control in Milton, ON. Professional barrier spray from $99. No contracts. Health Canada-approved. Call (289) 216-5030.',
  'milton-tick-spray': 'Professional tick spray in Milton, ON. Protect your yard near the Escarpment & conservation areas. From $99. Call (289) 216-5030.',
  'mississauga-mosquito-control': 'Mosquito control in Mississauga. Barrier spray from $99. Serving Port Credit, Meadowvale, Streetsville & all areas. Call (289) 216-5030.',
  'mississauga-tick-spray': 'Professional tick spray in Mississauga. Protect your yard near Credit River & Rattray Marsh. From $99. Call (289) 216-5030.',
  'mosquito-control': 'Professional mosquito control across the GTA. Health Canada-approved barrier spray from $99/treatment. No contracts. Call (289) 216-5030.',
  'mosquito-control-cost': 'How much does mosquito control cost in Ontario? BuzzSkito treatments from $99. See 2026 pricing by city & property size.',
  'mosquito-control-near-me': 'Mosquito control near you in the GTA. BuzzSkito serves Mississauga, Toronto, Brampton, Oakville, Burlington & Hamilton. From $99.',
  'north-oakville-mosquito-control': 'Mosquito control in North Oakville. Barrier spray near 16 Mile Creek from $99. Safe for kids & pets. Call (289) 216-5030.',
  'north-york-mosquito-control': 'Mosquito control in North York, Toronto. Barrier spray near Don Valley from $99. No contracts. Call (289) 216-5030.',
  'north-york-tick-spray': 'Professional tick spray in North York, Toronto. Protect your yard from blacklegged ticks. From $99. Call (289) 216-5030.',
  'oakville-mosquito-control': 'Mosquito control in Oakville. Barrier spray from $99. Serving Glen Abbey, Bronte, Old Oakville & all areas. Call (289) 216-5030.',
  'oakville-tick-spray': 'Professional tick spray in Oakville. Protect your yard near Bronte Creek & conservation areas. From $99. Call (289) 216-5030.',
  'old-oakville-mosquito-control': 'Mosquito control in Old Oakville. Barrier spray near the lakeshore from $99. Safe for kids & pets. Call (289) 216-5030.',
  'richmond-hill-mosquito-control': 'Mosquito control in Richmond Hill, ON. Professional barrier spray from $99. No contracts. Call (289) 216-5030.',
  'rosedale-mosquito-control': 'Mosquito control in Rosedale, Toronto. Barrier spray near Don Valley ravines from $99. No contracts. Call (289) 216-5030.',
  'roseland-mosquito-control': 'Mosquito control in Roseland, Burlington. Barrier spray near the lakeshore from $99. No contracts. Call (289) 216-5030.',
  'scarborough-mosquito-control': 'Mosquito control in Scarborough, Toronto. Barrier spray near Highland Creek from $99. No contracts. Call (289) 216-5030.',
  'springdale-mosquito-control': 'Mosquito control in Springdale, Brampton. Barrier spray near stormwater ponds from $99. No contracts. Call (289) 216-5030.',
  'thornhill-mosquito-control': 'Mosquito control in Thornhill, Vaughan. Professional barrier spray from $99. No contracts. Call (289) 216-5030.',
  'thornhill-tick-spray': 'Professional tick spray in Thornhill, Vaughan. Protect your yard from blacklegged ticks. From $99. Call (289) 216-5030.',
  'tick-control': 'Professional tick control across the GTA. Health Canada-approved yard spray from $99. Protect your family from Lyme disease. Call (289) 216-5030.',
  'tick-control-near-me': 'Tick control near you in the GTA. BuzzSkito serves Mississauga, Toronto, Brampton, Oakville, Burlington & Hamilton. From $99.',
  'toronto-mosquito-control': 'Mosquito control in Toronto. Barrier spray from $99. Serving Rosedale, Forest Hill, The Beaches & all areas. Call (289) 216-5030.',
  'toronto-tick-spray': 'Professional tick spray in Toronto. Protect your ravine-adjacent property from blacklegged ticks. From $99. Call (289) 216-5030.',
  'vaughan-mosquito-control': 'Mosquito control in Vaughan, ON. Professional barrier spray from $99. Serving Woodbridge, Thornhill & Kleinburg. Call (289) 216-5030.',
  'vaughan-tick-spray': 'Professional tick spray in Vaughan. Protect your property from blacklegged ticks. From $99. Call (289) 216-5030.',
  'west-oak-trails-mosquito-control': 'Mosquito control in West Oak Trails, Oakville. Barrier spray near Bronte Creek from $99. No contracts. Call (289) 216-5030.',
  'willowdale-mosquito-control': 'Mosquito control in Willowdale, Toronto. Barrier spray from $99. Safe for kids & pets in 30 min. Call (289) 216-5030.',
  'woodbridge-mosquito-control': 'Mosquito control in Woodbridge, Vaughan. Professional barrier spray from $99. No contracts. Call (289) 216-5030.',
  'woodbridge-tick-spray': 'Professional tick spray in Woodbridge, Vaughan. Protect your yard from blacklegged ticks. From $99. Call (289) 216-5030.',
  'york-mills-mosquito-control': 'Mosquito control in York Mills, Toronto. Barrier spray near Don Valley from $99. No contracts. Call (289) 216-5030.',
  'york-region-mosquito-control': 'Mosquito control in York Region. Serving Vaughan, Richmond Hill, Markham & all cities. From $99, no contracts. Call (289) 216-5030.',
  'blog': 'Expert mosquito and tick control tips for GTA homeowners. Seasonal guides, prevention strategies & professional advice from BuzzSkito.',
};

let updated = 0;
for (const [slug, newDesc] of Object.entries(metaOverrides)) {
  const filePath = path.join('app', slug, 'page.tsx');
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf8');

  // Match description - try multi-line first, then single-line
  const multiLine = content.match(/description:\s*\n\s*(['"`])([\s\S]*?)\1/);
  const singleLine = content.match(/description:\s*(['"`])([^'"`\n]+)\1/);

  const match = multiLine || singleLine;
  if (!match) continue;

  const oldDesc = match[2].replace(/\n\s*/g, ' ');
  if (oldDesc.length <= 160) continue;

  // Replace old description with new one
  const oldFull = match[0];
  const quote = match[1];
  const newFull = `description:\n    ${quote}${newDesc}${quote}`;

  content = content.replace(oldFull, newFull);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`${slug}: ${oldDesc.length} -> ${newDesc.length} chars`);
  updated++;
}

console.log(`\nTotal updated: ${updated} pages`);
