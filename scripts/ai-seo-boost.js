const fs = require('fs');
const path = require('path');

let updated = 0;

function processFile(filePath, slug) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  const isTick = slug.includes('tick');
  const isMosquito = slug.includes('mosquito');
  const isService = !isTick && !isMosquito;

  if (!isTick && !isMosquito) return; // Skip non-service pages

  // 1. Add "service" keyword to hero paragraph if missing
  // This targets "mosquito service near me", "tick service [city]" queries
  if (!content.toLowerCase().includes('mosquito service') && isMosquito) {
    // Add to hero description or first paragraph
    const heroP = content.match(/<p className="text-xl text-brand-100[^"]*">\s*\n?\s*([^<]+)/);
    if (heroP && !heroP[1].includes('service')) {
      // We won't modify hero text — instead add "service" in the main content area
      // Find first <p> in the prose section and add a service mention
      if (content.includes('prose-brand')) {
        const firstP = content.match(/(prose-brand">\s*\n\s*<h2>[^<]+<\/h2>\s*\n\s*<p>)([^<]{20,})/);
        // Not safe to auto-modify content paragraphs — skip
      }
    }
  }

  // 2. Add "mosquito service" or "tick service" to meta description if space allows
  const descMatch = content.match(/description:\s*\n\s*'([^']+)'/);
  if (descMatch) {
    const desc = descMatch[1];
    if (isMosquito && !desc.toLowerCase().includes('service') && desc.length < 140) {
      // Already mentions "control" or "spray" — don't modify if tight on space
    }
  }

  // 3. Add HowTo schema for AI citation (targets how-to queries in AI Overviews)
  // Only add to pages that have the "How It Works" section but no HowTo schema
  if (content.includes('How BuzzSkito') && !content.includes('HowTo')) {
    // The "How It Works" section is visual (JSX), not easily converted to schema
    // Instead we'll enhance the existing speakableSchema to include the process section
  }

  // 4. Ensure every city page mentions "service" at least once in content
  if (isMosquito && !content.toLowerCase().includes('mosquito service') && !content.toLowerCase().includes('mosquito control service')) {
    // Add "service" to the CTA section text
    if (content.includes('Get a Free Mosquito Control Quote')) {
      content = content.replace(
        'Get a Free Mosquito Control Quote',
        'Get a Free Mosquito Control Service Quote'
      );
      // Actually this changes the visible text - better to add it in meta or content
      // Revert
      content = content.replace(
        'Get a Free Mosquito Control Service Quote',
        'Get a Free Mosquito Control Quote'
      );
    }

    // Better: add "service" mention in the pricing section text if it exists
    if (content.includes('Professional mosquito control from')) {
      content = content.replace(
        'Professional mosquito control from',
        'Professional mosquito control service from'
      );
      changed = true;
    }
  }

  if (isTick && !content.toLowerCase().includes('tick service') && !content.toLowerCase().includes('tick control service')) {
    if (content.includes('Professional tick spray from')) {
      content = content.replace(
        'Professional tick spray from',
        'Professional tick spray service from'
      );
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated: ' + slug);
    updated++;
  }
}

// Process all pages
function scanDir(dir) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach(e => {
    if (e.isDirectory() && !e.name.startsWith('_') && !e.name.startsWith('.')) {
      const sub = path.join(dir, e.name);
      const p = path.join(sub, 'page.tsx');
      if (fs.existsSync(p)) {
        processFile(p, e.name);
      }
      scanDir(sub);
    }
  });
}

scanDir('app');
console.log('\nTotal updated: ' + updated);
