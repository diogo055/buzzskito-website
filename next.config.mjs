/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
      {
        source: '/(.*)\\.(ico|png|jpg|jpeg|svg|webp|avif|woff2)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },
  async redirects() {
    return [
      // ── Home page duplicate ──────────────────────────────────────────────────
      { source: '/home', destination: '/', permanent: true },
      { source: '/BuzzSkito', destination: '/', permanent: true },

      // ── Old city/service slugs → correct new slugs ───────────────────────────
      { source: '/mosquito-mississauga',          destination: '/mississauga-mosquito-control',  permanent: true },
      { source: '/mississauga-mosquito',          destination: '/mississauga-mosquito-control',  permanent: true },
      { source: '/mississauga-protection',        destination: '/mississauga-mosquito-control',  permanent: true },
      { source: '/hamilton-protection',           destination: '/hamilton-mosquito-control',     permanent: true },
      { source: '/hamilton-mosquito-tick-control',destination: '/hamilton-mosquito-control',     permanent: true },
      { source: '/hamilton-mosquito-spray',       destination: '/hamilton-mosquito-control',     permanent: true },
      { source: '/mosquito-hamilton',             destination: '/hamilton-mosquito-control',     permanent: true },
      { source: '/burlington-protection',         destination: '/burlington-mosquito-spray',     permanent: true },
      { source: '/toronto-protection',            destination: '/toronto-mosquito-control',      permanent: true },
      { source: '/brampton-protection',           destination: '/brampton-mosquito-control',     permanent: true },
      { source: '/brampton-mosquito-spray',       destination: '/brampton-mosquito-control',     permanent: true },
      { source: '/oakville-protection',           destination: '/oakville-mosquito-control',     permanent: true },
      { source: '/oakville-mosquito-spray',       destination: '/oakville-mosquito-control',     permanent: true },
      { source: '/tick-info-toronto',             destination: '/toronto-tick-spray',            permanent: true },
      { source: '/frequently-asked-questions',    destination: '/frequently-asked-question',     permanent: true },
      { source: '/frequently-asked-question/f.rss', destination: '/frequently-asked-question',  permanent: true },
      { source: '/frequently-asked-question/f/why-mosquito-prevention-should-be-a-year-round-effort', destination: '/frequently-asked-question', permanent: true },
      { source: '/frequently-asked-question/f/why-timing-matters-in-pest-control', destination: '/frequently-asked-question', permanent: true },

      // ── Old generic GTA service slugs → mosquito-control ────────────────────
      { source: '/best-gta-mosquito-control',     destination: '/mosquito-control', permanent: true },
      { source: '/top-gta-mosquito-control',      destination: '/mosquito-control', permanent: true },
      { source: '/gta-mosquito-control-pros',     destination: '/mosquito-control', permanent: true },
      { source: '/gta-mosquito-yard-control',     destination: '/mosquito-control', permanent: true },
      { source: '/backyard-mosquito-spray',       destination: '/mosquito-control', permanent: true },
      { source: '/mosquito-treatment-gta',        destination: '/mosquito-control', permanent: true },
      { source: '/yard-mosquito-treatment',       destination: '/mosquito-control', permanent: true },
      { source: '/same-day-mosquito-control',     destination: '/mosquito-control', permanent: true },
      { source: '/ultimate-mosquito-control',     destination: '/mosquito-control', permanent: true },
      { source: '/mosquito-spray-lawn',           destination: '/mosquito-control', permanent: true },
      { source: '/mosquito-vs-tick-control-in-ontario', destination: '/mosquito-control', permanent: true },
      { source: '/resources',                     destination: '/blog',             permanent: true },
      { source: '/mosquito-life-cycle',           destination: '/blog/ultimate-backyard-mosquito-control-guide', permanent: true },
      { source: '/tick-life-cycle',               destination: '/blog/ultimate-tick-control-guide-ontario',      permanent: true },
      { source: '/%231-mosquito-control-gta',     destination: '/mosquito-control', permanent: true },

      // ── Toronto content ──────────────────────────────────────────────────────
      { source: '/f/mosquito-control-in-toronto-keep-your-backyard-bite-free',   destination: '/toronto-mosquito-control', permanent: true },
      { source: '/home/f/mosquito-control-in-toronto-keep-your-backyard-bite-free', destination: '/toronto-mosquito-control', permanent: true },
      { source: '/f/hidden-mosquito-hotspots-in-torontos-urban-landscape',       destination: '/toronto-mosquito-control', permanent: true },
      { source: '/home/f/hidden-mosquito-hotspots-in-torontos-urban-landscape',  destination: '/toronto-mosquito-control', permanent: true },
      { source: '/home/f/mosquito-tick-control-in-toronto-protect-your-family',  destination: '/toronto-mosquito-control', permanent: true },
      { source: '/home/f/mosquito-control-in-toronto---2025-guide',              destination: '/toronto-mosquito-control', permanent: true },
      { source: '/home/f/mosquito-control-in-toronto---citywide-strategy',       destination: '/toronto-mosquito-control', permanent: true },
      { source: '/f/the-best-mosquito-control-for-your-backyard-in-toronto',     destination: '/toronto-mosquito-control', permanent: true },
      { source: '/home/f/the-best-mosquito-control-for-your-backyard-in-toronto',destination: '/toronto-mosquito-control', permanent: true },

      // ── Mississauga content ──────────────────────────────────────────────────
      { source: '/home/f/mosquito-control-in-mississauga---2025-guide',          destination: '/mississauga-mosquito-control', permanent: true },
      { source: '/home/f/mosquito-control-in-mississauga---2025-guide-1',        destination: '/mississauga-mosquito-control', permanent: true },
      { source: '/f/mosquito-season-in-mississauga-how-to-protect-your-home',    destination: '/mississauga-mosquito-control', permanent: true },
      { source: '/home/f/mosquito-season-in-mississauga-how-to-protect-your-home', destination: '/mississauga-mosquito-control', permanent: true },
      { source: '/home/f/why-mosquitoes-love-mississauga',                       destination: '/mississauga-mosquito-control', permanent: true },
      { source: '/f/the-mississauga-mosquito-mystery-why-your-backyard-has-ticks', destination: '/mississauga-mosquito-control', permanent: true },
      { source: '/home/f/the-mississauga-mosquito-mystery-why-your-backyard-has-ticks', destination: '/mississauga-mosquito-control', permanent: true },
      { source: '/f/tick-control-services-in-mississauga---protect-your-family',          destination: '/mississauga-tick-spray', permanent: true },
      { source: '/home/f/tick-control-services-in-mississauga---protect-your-family',     destination: '/mississauga-tick-spray', permanent: true },
      { source: '/f/tick-control-services-in-mississauga-%E2%80%93-protect-your-family',  destination: '/mississauga-tick-spray', permanent: true },
      { source: '/home/f/tick-control-services-in-mississauga-%E2%80%93-protect-your-family', destination: '/mississauga-tick-spray', permanent: true },
      { source: '/f/understanding-the-mosquito-problem-in-mississauga-and-the-gta', destination: '/mississauga-mosquito-control', permanent: true },
      { source: '/home/f/understanding-the-mosquito-problem-in-mississauga-and-the-gta', destination: '/mississauga-mosquito-control', permanent: true },
      { source: '/home/f/mosquito-control-in-port-credit-protect-your-backyard', destination: '/mississauga-mosquito-control', permanent: true },
      { source: '/home/f/west-nile-tick-update---mississauga-aug-2025',          destination: '/blog/west-nile-virus-mosquito-risk-ontario', permanent: true },

      // ── Brampton content ─────────────────────────────────────────────────────
      { source: '/home/f/mosquito-control-in-brampton---2025-guide',             destination: '/brampton-mosquito-control', permanent: true },
      { source: '/home/f/mosquito-control-in-brampton---proven-tips',            destination: '/brampton-mosquito-control', permanent: true },
      { source: '/home/f/mosquito-tick-alert---brampton-aug-2025',               destination: '/brampton-mosquito-control', permanent: true },

      // ── Oakville content ─────────────────────────────────────────────────────
      { source: '/home/f/mosquito-control-in-oakville---what-works',             destination: '/oakville-mosquito-control', permanent: true },
      { source: '/home/f/mosquito-control-in-oakville---2025-guide',             destination: '/oakville-mosquito-control', permanent: true },
      { source: '/home/f/oakville-tick-control-guide-protect-your-family-pets',  destination: '/oakville-tick-spray',      permanent: true },
      { source: '/f/oakville-tick-control-guide-protect-your-family-pets',       destination: '/oakville-tick-spray',      permanent: true },
      { source: '/home/f/tick-season-in-oakville-what-to-know',                  destination: '/oakville-tick-spray',      permanent: true },
      { source: '/f/oakville-etobicoke-western-gta-mosquito-tick-shield-a-plan', destination: '/oakville-mosquito-control', permanent: true },
      { source: '/home/f/oakville-etobicoke-western-gta-mosquito-tick-shield-a-plan', destination: '/oakville-mosquito-control', permanent: true },

      // ── Hamilton content ─────────────────────────────────────────────────────
      { source: '/home/f/mosquito-control-in-hamilton---2025-guide',             destination: '/hamilton-mosquito-control', permanent: true },
      { source: '/f/mosquito-control-in-hamilton---2025-guide',                  destination: '/hamilton-mosquito-control', permanent: true },

      // ── Etobicoke content ────────────────────────────────────────────────────
      { source: '/home/f/mosquito-control-in-etobicoke---2025-guide',            destination: '/etobicoke-mosquito-control', permanent: true },

      // ── Vaughan content ──────────────────────────────────────────────────────
      { source: '/f/mosquito-control-in-vaughan---2025-guide',                   destination: '/vaughan-mosquito-control', permanent: true },
      { source: '/home/f/mosquito-control-in-vaughan---2025-guide',              destination: '/vaughan-mosquito-control', permanent: true },

      // ── Halton Hills content ─────────────────────────────────────────────────
      { source: '/f/mosquito-control-in-halton-hills---2025-guide',              destination: '/halton-hills-mosquito-control', permanent: true },
      { source: '/home/f/mosquito-control-in-halton-hills---2025-guide',         destination: '/halton-hills-mosquito-control', permanent: true },
      { source: '/home/f/lyme-west-nile-risk---halton-aug-2025-oakvilleburlington', destination: '/blog/lyme-disease-tick-prevention-ontario', permanent: true },

      // ── How long does spray last → blog post ────────────────────────────────
      { source: '/home/f/how-long-does-mosquito-and-tick-spray-last',            destination: '/blog/how-long-does-mosquito-spray-last', permanent: true },
      { source: '/f/how-long-does-mosquito-and-tick-spray-last',                 destination: '/blog/how-long-does-mosquito-spray-last', permanent: true },

      // ── Breeding spots / prevention → blog post ──────────────────────────────
      { source: '/f/is-your-backyard-a-mosquito-breeding-ground',                destination: '/blog/hidden-mosquito-breeding-spots-backyard', permanent: true },
      { source: '/home/f/is-your-backyard-a-mosquito-breeding-ground',           destination: '/blog/hidden-mosquito-breeding-spots-backyard', permanent: true },
      { source: '/home/f/5-signs-your-backyard-is-a-breeding-ground-for-mosquitoes-ticks', destination: '/blog/hidden-mosquito-breeding-spots-backyard', permanent: true },

      // ── Seasonal timing → blog post ──────────────────────────────────────────
      { source: '/f/when-to-spray-for-mosquitoes-in-ontario-the-ultimate-guide', destination: '/blog/mosquito-season-gta-when-does-it-start', permanent: true },
      { source: '/home/f/when-to-spray-for-mosquitoes-in-ontario-the-ultimate-guide', destination: '/blog/mosquito-season-gta-when-does-it-start', permanent: true },
      { source: '/home/f/mosquito-tick-control-calendar-the-best-times-to-spray-ontario', destination: '/blog/mosquito-season-gta-when-does-it-start', permanent: true },
      { source: '/home/f/how-weather-impacts-mosquito-tick-season-in-ontario',   destination: '/blog/mosquito-season-gta-when-does-it-start', permanent: true },
      { source: '/home/f/spring-mosquito-tick-prevention-guide-get-your-property-ready', destination: '/blog/when-to-schedule-first-mosquito-treatment-ontario', permanent: true },

      // ── Kids/pets safety → blog post ─────────────────────────────────────────
      { source: '/f/protecting-pets-from-mosquito-tick-bites-in-your-backyard',  destination: '/blog/is-mosquito-spray-safe-kids-pets', permanent: true },
      { source: '/home/f/protecting-pets-from-mosquito-tick-bites-in-your-backyard', destination: '/blog/is-mosquito-spray-safe-kids-pets', permanent: true },
      { source: '/home/f/tick-control-for-dogs-and-kids-what-homeowners-in-the-gta-need', destination: '/blog/is-mosquito-spray-safe-kids-pets', permanent: true },
      { source: '/home/f/why-safe-mosquito-treatments-are-a-must-for-families-in-the-gta', destination: '/blog/is-mosquito-spray-safe-kids-pets', permanent: true },

      // ── DIY vs professional → blog post ─────────────────────────────────────
      { source: '/f/the-truth-about-mosquito-spraying-near-you-does-it-really-work', destination: '/blog/mosquito-vs-diy-vs-professional-control', permanent: true },
      { source: '/home/f/the-truth-about-mosquito-spraying-near-you-does-it-really-work', destination: '/blog/mosquito-vs-diy-vs-professional-control', permanent: true },

      // ── Life cycle / biology → pillar blog ───────────────────────────────────
      { source: '/home/f/understanding-the-life-cycle-of-mosquitoes-and-ticks',  destination: '/blog/ultimate-backyard-mosquito-control-guide', permanent: true },
      { source: '/home/f/top-7-mosquito-tick-myths-busted',                      destination: '/blog/ultimate-backyard-mosquito-control-guide', permanent: true },
      { source: '/f/5-surprising-facts-about-mosquitoes-you-need-to-know',       destination: '/blog/ultimate-backyard-mosquito-control-guide', permanent: true },
      { source: '/home/f/5-surprising-facts-about-mosquitoes-you-need-to-know',  destination: '/blog/ultimate-backyard-mosquito-control-guide', permanent: true },
      { source: '/home/f/5-mosquito-mistakes-gta-homeowners-make-every-summer',  destination: '/blog/how-to-prevent-mosquitoes-in-your-backyard', permanent: true },

      // ── Tick-specific content → tick service/blog ────────────────────────────
      { source: '/f/tick-repellent-that-actually-works-in-ontario-yards-2025-update',      destination: '/tick-control', permanent: true },
      { source: '/home/f/tick-repellent-that-actually-works-in-ontario-yards-2025-update', destination: '/tick-control', permanent: true },
      { source: '/f/tick-spray-for-yards-what-works-best-in-ontario-backyards',  destination: '/tick-control', permanent: true },
      { source: '/home/f/tick-spray-for-yards-what-works-best-in-ontario-backyards', destination: '/tick-control', permanent: true },
      { source: '/home/f/tick-repellent-for-lawns-in-ontario-everything-you-need-to-know', destination: '/tick-control', permanent: true },
      { source: '/f/tick-repellent-for-lawns-in-ontario-everything-you-need-to-know', destination: '/tick-control', permanent: true },
      { source: '/home/f/how-wildlife-brings-ticks-to-your-backyard',            destination: '/tick-control', permanent: true },
      { source: '/home/f/understanding-the-threat-ticks-and-mosquitoes',         destination: '/tick-control', permanent: true },
      { source: '/home/f/the-complete-guide-to-tick-prevention-for-yards-in-south-ontario', destination: '/tick-control', permanent: true },
      { source: '/home/f/urgent-warning-deadly-super-ticks-found-in-gta-backyards', destination: '/tick-control', permanent: true },

      // ── Remaining specific /f/ and /home/f/ content ──────────────────────────
      { source: '/f/top-5-reasons-you-need-buzzskito-for-a-safer-more-enjoyable-yard', destination: '/mosquito-control', permanent: true },
      { source: '/home/f/top-5-reasons-you-need-buzzskito-for-a-safer-more-enjoyable-yard', destination: '/mosquito-control', permanent: true },
      { source: '/f/bloodsuckers-in-your-yard-kill-mosquitoes-ticks-for-good',   destination: '/mosquito-control', permanent: true },
      { source: '/home/f/bloodsuckers-in-your-yard-kill-mosquitoes-ticks-for-good', destination: '/mosquito-control', permanent: true },
      { source: '/home/f/mosquito-control-near-me-in-ontario-what-to-do-and-who-to-trust', destination: '/mosquito-control-near-me', permanent: true },
      { source: '/home/f/rising-mosquito-tick-threats-why-gta-homeowners-need-buzzskito', destination: '/mosquito-control', permanent: true },
      { source: '/f/how-to-protect-your-family-from-mosquitoes-this-summer',     destination: '/mosquito-control', permanent: true },
      { source: '/home/f/how-to-protect-your-family-from-mosquitoes-this-summer', destination: '/mosquito-control', permanent: true },
      { source: '/home/f/the-best-mosquito-spray-for-yards-in-ontario-what-actually-works', destination: '/mosquito-control', permanent: true },
      { source: '/home/f/backyard-mosquito-spray-that-actually-works-in-ontario', destination: '/mosquito-control', permanent: true },
      { source: '/home/f/top-strategies-for-mosquito-tick-control-in-your-yard', destination: '/mosquito-control', permanent: true },
      { source: '/f/top-strategies-for-mosquito-tick-control-in-your-yard',      destination: '/mosquito-control', permanent: true },
      { source: '/home/f/why-timing-matters-in-pest-control',                    destination: '/mosquito-control', permanent: true },
      { source: '/home/f/enjoy-a-mosquito-free-yard-how-buzzskito-protects-your-outdoors', destination: '/mosquito-control', permanent: true },
      { source: '/f/enjoy-a-mosquito-free-yard-how-buzzskito-protects-your-outdoors', destination: '/mosquito-control', permanent: true },
      { source: '/home/f/top-7-signs-you-need-mosquito-and-tick-control-immediately', destination: '/mosquito-control', permanent: true },
      { source: '/f/top-7-signs-you-need-mosquito-and-tick-control-immediately', destination: '/mosquito-control', permanent: true },
      { source: '/home/f/why-mosquito-prevention-should-be-a-year-round-effort', destination: '/mosquito-control', permanent: true },
      { source: '/f/why-mosquito-prevention-should-be-a-year-round-effort',      destination: '/mosquito-control', permanent: true },
      { source: '/home/f/mosquito-spraying-near-me---what-to-know-before-booking', destination: '/mosquito-control', permanent: true },
      { source: '/home/f/mosquito-spray-services-near-me-what-to-look-for-in-ontario', destination: '/mosquito-control', permanent: true },
      { source: '/f/the-ultimate-guide-to-mosquito-and-tick-prevention-in-ontario', destination: '/mosquito-control', permanent: true },
      { source: '/home/f/the-ultimate-guide-to-mosquito-and-tick-prevention-in-ontario', destination: '/mosquito-control', permanent: true },
      { source: '/f/stop-mosquitoes-in-the-gta---proven-2025-tips',              destination: '/mosquito-control', permanent: true },
      { source: '/home/f/stop-mosquitoes-in-the-gta---proven-2025-tips',         destination: '/mosquito-control', permanent: true },
      { source: '/home/f/mosquito-tick-control-in-the-gta-homes-need-a-year-round-strat', destination: '/mosquito-control', permanent: true },
      { source: '/f/mosquito-tick-control-in-the-gta-homes-need-a-year-round-strat', destination: '/mosquito-control', permanent: true },
      { source: '/f/gta-mosquito-tick---media-brief-2025',                       destination: '/mosquito-control', permanent: true },
      { source: '/home/f/gta-mosquito-tick---media-brief-2025',                  destination: '/mosquito-control', permanent: true },
      { source: '/home/f/mosquito-vs-tick-biteshow-to-tell-the-difference-when-to-worry', destination: '/tick-control', permanent: true },
      { source: '/home/f/take-back-your-yard-the-guide-to-tick-mosquito-control', destination: '/mosquito-control', permanent: true },
      { source: '/home/f/mosquito-tick-control-in-the-gta-homes-need-a-year-round-strat', destination: '/mosquito-control', permanent: true },
      { source: '/home/f/mississauga-brampton-mosquito-tick-treatment-the-gta-s-best', destination: '/mississauga-mosquito-control', permanent: true },
      { source: '/f/mississauga-brampton-mosquito-tick-treatment-the-gta-s-best', destination: '/mississauga-mosquito-control', permanent: true },
      { source: '/home/f/southern-ontario-s-top-mosquito-tick-hotspots-are-you-at-risk', destination: '/mosquito-control', permanent: true },

      // ── Blog post consolidation — old blog post → service page ──────────────────
      { source: '/blog/mosquito-control-cost-ontario', destination: '/mosquito-control-cost', permanent: true },

      // ── URL canonicalization — clean slugs replace -1 variants ─────────────────
      { source: '/mosquito-control-sauga',  destination: '/mississauga-mosquito-control', permanent: true },
      { source: '/brampton-tick-spray-1',   destination: '/brampton-tick-spray',          permanent: true },
      { source: '/oakville-tick-spray-1',   destination: '/oakville-tick-spray',          permanent: true },
      { source: '/toronto-tick-spray-1',    destination: '/toronto-tick-spray',           permanent: true },
      { source: '/hamilton-tick-spray-1',   destination: '/hamilton-tick-spray',          permanent: true },

      // ── Terms page consolidation ─────────────────────────────────────────────
      { source: '/terms-and-conditions', destination: '/terms', permanent: true },

      // ── Neighbourhood tick spray → parent city tick page ────────────────────
      // These neighbourhood tick pages don't exist — redirect to parent city
      { source: '/the-beaches-tick-spray',       destination: '/toronto-tick-spray',      permanent: true },
      { source: '/don-mills-tick-spray',         destination: '/toronto-tick-spray',      permanent: true },
      { source: '/leaside-tick-spray',           destination: '/toronto-tick-spray',      permanent: true },
      { source: '/rosedale-tick-spray',          destination: '/toronto-tick-spray',      permanent: true },
      { source: '/york-mills-tick-spray',        destination: '/toronto-tick-spray',      permanent: true },
      { source: '/forest-hill-tick-spray',       destination: '/toronto-tick-spray',      permanent: true },
      { source: '/willowdale-tick-spray',        destination: '/toronto-tick-spray',      permanent: true },
      { source: '/east-york-tick-spray',         destination: '/toronto-tick-spray',      permanent: true },
      { source: '/old-oakville-tick-spray',      destination: '/oakville-tick-spray',     permanent: true },
      { source: '/north-oakville-tick-spray',    destination: '/oakville-tick-spray',     permanent: true },
      { source: '/west-oak-trails-tick-spray',   destination: '/oakville-tick-spray',     permanent: true },
      { source: '/glen-abbey-tick-spray',        destination: '/oakville-tick-spray',     permanent: true },
      { source: '/bronte-tick-spray',            destination: '/oakville-tick-spray',     permanent: true },
      { source: '/castlemore-tick-spray',        destination: '/brampton-tick-spray',     permanent: true },
      { source: '/springdale-tick-spray',        destination: '/brampton-tick-spray',     permanent: true },
      { source: '/heart-lake-tick-spray',        destination: '/brampton-tick-spray',     permanent: true },
      { source: '/fletcher-meadows-tick-spray',  destination: '/brampton-tick-spray',     permanent: true },
      { source: '/alton-village-tick-spray',     destination: '/burlington-tick-spray',   permanent: true },
      { source: '/aldershot-tick-spray',         destination: '/burlington-tick-spray',   permanent: true },
      { source: '/roseland-tick-spray',          destination: '/burlington-tick-spray',   permanent: true },

      // ── Catch-all wildcards — must be LAST ───────────────────────────────────
      // These catch any /f/* or /home/f/* URL not explicitly listed above
      { source: '/f/:path*',      destination: '/mosquito-control', permanent: true },
      { source: '/home/f/:path*', destination: '/mosquito-control', permanent: true },
      { source: '/home/:path*',   destination: '/',                 permanent: true },
    ]
  },
}

export default nextConfig
