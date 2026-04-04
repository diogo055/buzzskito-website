import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { BUSINESS, SITE_URL } from '@/lib/constants'
import { websiteSchema, localBusinessSchema } from '@/lib/seo'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
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
    <html lang="en-CA" className={inter.variable}>
      <head>
        {/* WebSite schema with SiteLinksSearchBox — every page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
        />
        {/* LocalBusiness / PestControlService schema — every page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//connect.facebook.net" />
        <link rel="dns-prefetch" href="//d3ey4dbjkt2f6s.cloudfront.net" />
      </head>
      <body className="bg-white text-gray-900 antialiased min-h-screen flex flex-col font-sans">
        <Header />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />

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
