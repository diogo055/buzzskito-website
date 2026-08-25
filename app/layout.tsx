import type { Metadata, Viewport } from 'next'
import { Inter, Bricolage_Grotesque, Fraunces } from 'next/font/google'
import Script from 'next/script'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import Header from '@/components/Header'
import SmoothScroll from '@/components/SmoothScroll'
import Footer from '@/components/Footer'
import StickyRiskCTA from '@/components/StickyRiskCTA'
import PressMentionBanner from '@/components/PressMentionBanner'
import ExitIntentPopup from '@/components/ExitIntentPopup'
import LeadBarGate from '@/components/LeadBarGate'
import { BUSINESS, SITE_URL } from '@/lib/constants'
import { websiteSchema, organizationSchema, personSchema } from '@/lib/seo'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Display face for headlines only (700/800 weights) — one small woff2,
// swap-loaded so there's zero CLS. Body text stays Inter.
const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['700', '800'],
  display: 'swap',
  variable: '--font-display',
})

// Editorial italic serif — used ONLY for single accent lines/words inside
// display headings (the research-backed "one serif accent" premium cue).
// One italic weight, latin subset, swap-loaded: tiny and CLS-free.
const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['600'],
  style: ['italic'],
  display: 'swap',
  variable: '--font-accent',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'BuzzSkito | Mosquito & Tick Control – Mississauga, GTA',
    template: '%s | BuzzSkito',
  },
  description:
    'Professional mosquito and tick control spray services for GTA lawns. Serving Mississauga, Toronto, Brampton, Oakville, Burlington & Hamilton. Free quotes. (289) 216-5030.',
  keywords: [
    'mosquito control Mississauga',
    'tick control GTA',
    'mosquito spray lawn',
    'mosquito control Toronto',
    'tick spray Brampton',
    'mosquito exterminator Oakville',
    'backyard mosquito spray Burlington',
    'tick control Hamilton',
    'mosquito control near me',
    'professional mosquito spray Ontario',
  ],
  authors: [{ name: BUSINESS.legalName, url: SITE_URL }],
  creator: BUSINESS.legalName,
  publisher: BUSINESS.legalName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    siteName: BUSINESS.name,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'BuzzSkito Mosquito & Tick Control GTA' }],
  },
  twitter: { card: 'summary_large_image' },
  verification: {
    // google: 'ADD_GSC_VERIFICATION_CODE_HERE',  // TODO: paste from Search Console
  },
  other: {
    'geo.region': 'CA-ON',
    'geo.placename': 'Mississauga',
    'geo.position': `${BUSINESS.geo.lat};${BUSINESS.geo.lng}`,
    'ICBM': `${BUSINESS.geo.lat}, ${BUSINESS.geo.lng}`,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1e3a8a',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={`${inter.variable} ${bricolage.variable} ${fraunces.variable}`}>
      <head>
        {/* Motion gate: scroll-reveal initial-hidden CSS only applies under
            html.anim, so no-JS users and HTML crawlers always see full content.
            Runs before paint — must stay inline and first. */}
        <script
          dangerouslySetInnerHTML={{ __html: `document.documentElement.classList.add('anim')` }}
        />
        {/* Site-wide schemas — WebSite + Organization on every page.
            LocalBusiness/PestControlService is added per-page with city-specific areaServed. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema()) }}
        />
        {/* DNS prefetch for performance */}
        {/* Amazon.ca is the revenue destination on ~300 pages — warm the
            connection so the buy tap doesn't pay DNS+TLS latency. */}
        <link rel="preconnect" href="https://www.amazon.ca" />
        <link rel="dns-prefetch" href="//www.amazon.ca" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//connect.facebook.net" />
        <link rel="dns-prefetch" href="//d3ey4dbjkt2f6s.cloudfront.net" />
      </head>
      <body className="bg-white text-gray-900 antialiased min-h-screen flex flex-col font-sans pb-16 sm:pb-0">
        <SmoothScroll />
        <Header />
        <PressMentionBanner />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <StickyRiskCTA />
        <ExitIntentPopup />
        <Footer />

        {/* ── Sticky Mobile CTA Bar ──────────────────────────────────── */}
        <LeadBarGate>
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-ink-950 border-t border-white/10 px-4 pb-3 pt-1.5 sm:hidden" role="complementary" aria-label="Quick actions">
          <p className="text-center text-[10px] font-semibold text-brand-300 mb-1.5" aria-hidden="true">
            <span className="text-amber-400">★ 5.0</span> · 150+ Google reviews · Bite-Free Guarantee
          </p>
          <div className="flex gap-3">
            <a
              href={`tel:${BUSINESS.phone.replace(/[^+\d]/g, '')}`}
              className="flex-1 bg-white text-brand-900 font-bold text-sm py-3 rounded-full text-center flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              Call Now
            </a>
            <a
              href="/free-yard-assessment"
              className="flex-1 bg-gradient-to-b from-amber-500 to-amber-600 text-white font-bold text-sm py-3 rounded-full text-center"
            >
              Free Quote
            </a>
          </div>
        </div>
        </LeadBarGate>

        {/* ── Google Analytics GA4 ─────────────────────────────────────── */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${BUSINESS.gaId}`}
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${BUSINESS.gaId}', { page_path: window.location.pathname });
          `}
        </Script>

        <SpeedInsights />

        {/* ── Microsoft Clarity (heatmaps + session recording, free) ───── */}
        {BUSINESS.clarityId && (
          <Script id="ms-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${BUSINESS.clarityId}");
            `}
          </Script>
        )}

        {/* ── Ahrefs Web Analytics ─────────────────────────────────────── */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="adzUhHnOF26pvyR27wLfvQ"
          strategy="afterInteractive"
          async
        />

        {/* ── Facebook Pixel ───────────────────────────────────────────── */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${BUSINESS.fbPixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
      </body>
    </html>
  )
}
