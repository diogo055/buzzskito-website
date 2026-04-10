const fs = require('fs');
const path = require('path');

let updated = 0;

function scanDir(dir) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach(e => {
    if (e.isDirectory() && !e.name.startsWith('_') && !e.name.startsWith('.')) {
      const sub = path.join(dir, e.name);
      const p = path.join(sub, 'page.tsx');
      if (fs.existsSync(p)) {
        let content = fs.readFileSync(p, 'utf8');
        const slug = e.name;

        // Only process pages that have How It Works but don't already have howToSchema
        if (content.includes('How BuzzSkito') && !content.includes('howToSchema')) {
          const isTick = slug.includes('tick');

          // Check if howToSchema is imported
          if (!content.includes('howToSchema')) {
            // Add howToSchema to the import
            if (content.includes('speakableSchema')) {
              content = content.replace(
                /import \{ ([^}]*speakableSchema[^}]*) \} from '[@/]lib\/seo'/,
                (match, imports) => {
                  if (imports.includes('howToSchema')) return match;
                  return match.replace('speakableSchema', 'howToSchema, speakableSchema');
                }
              );
            }

            // Extract city name
            let city = '';
            const cityMatch = content.match(/const CITY = '([^']+)'/);
            const neighbourhoodMatch = content.match(/const NEIGHBOURHOOD = '([^']+)'/);
            if (cityMatch) city = cityMatch[1];
            else if (neighbourhoodMatch) city = neighbourhoodMatch[1];

            // Add the schema script tag after the last existing schema script
            const schemaPattern = /<script type="application\/ld\+json"[^/]*\/>/g;
            const matches = [...content.matchAll(schemaPattern)];
            if (matches.length > 0) {
              const lastSchema = matches[matches.length - 1];
              const insertPoint = lastSchema.index + lastSchema[0].length;

              const serviceType = isTick ? "'tick'" : "'mosquito'";
              const cityParam = city ? `, city: '${city}'` : '';
              const newSchema = `\n      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ service: ${serviceType}${cityParam} })) }} />`;

              content = content.slice(0, insertPoint) + newSchema + content.slice(insertPoint);

              fs.writeFileSync(p, content, 'utf8');
              console.log('Added HowTo schema: ' + slug + (city ? ' (' + city + ')' : ''));
              updated++;
            }
          }
        }
      }
      scanDir(sub);
    }
  });
}

scanDir('app');
console.log('\nTotal pages with HowTo schema added: ' + updated);
