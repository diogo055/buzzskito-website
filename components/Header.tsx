'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { BUSINESS } from '@/lib/constants'

type NavChild = { label: string; href: string; divider?: boolean }
type NavLink = { label: string; href: string; children?: NavChild[] }

const NAV: NavLink[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/mosquito-control',
    children: [
      { label: 'Mosquito Control', href: '/mosquito-control' },
      { label: 'Tick Control', href: '/tick-control' },
    ],
  },
  {
    label: 'Service Areas',
    href: '/service-areas',
    children: [
      { label: 'All Service Areas', href: '/service-areas' },
      { label: '', href: '#', divider: true },
      { label: 'Mississauga', href: '/mississauga-mosquito-control' },
      { label: 'Toronto', href: '/toronto-mosquito-control' },
      { label: 'Brampton', href: '/brampton-mosquito-control' },
      { label: 'Oakville', href: '/oakville-mosquito-control' },
      { label: 'Burlington', href: '/burlington-mosquito-spray' },
      { label: 'Vaughan', href: '/vaughan-mosquito-control' },
      { label: 'Richmond Hill', href: '/richmond-hill-mosquito-control' },
      { label: 'Markham', href: '/markham-mosquito-control' },
      { label: 'Etobicoke', href: '/etobicoke-mosquito-control' },
      { label: 'Scarborough', href: '/scarborough-mosquito-control' },
      { label: 'North York', href: '/north-york-mosquito-control' },
      { label: 'Caledon', href: '/caledon-mosquito-control' },
      { label: 'Milton', href: '/milton-mosquito-control' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/buzzskito-history' },
  { label: 'FAQ', href: '/frequently-asked-question' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="bg-brand-900 text-white sticky top-0 z-50 shadow-lg" role="banner">
      {/* Skip nav */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white text-brand-900 px-3 py-1 rounded text-sm font-bold z-50">
        Skip to main content
      </a>

      {/* Promo bar */}
      <div className="bg-amber-600 text-white text-center text-xs py-1.5 px-4 font-medium">
        🎉 Refer a friend — you both get <strong>20% off</strong> your first season!
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="BuzzSkito home">
            <Image
              src="/logo.webp"
              alt="BuzzSkito Mosquito &amp; Tick Control"
              width={40}
              height={40}
              className="rounded-full"
              priority
            />
            <span className="font-extrabold text-xl tracking-tight text-white">
              Buzz<span className="text-amber-400">Skito</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-1">
            {NAV.map((link) =>
              link.children ? (
                <div key={link.label} className="relative group">
                  <button
                    className="flex items-center gap-1 text-sm font-medium text-brand-100 hover:text-white transition-colors px-3 py-2 rounded-md hover:bg-brand-800"
                    aria-haspopup="true"
                    aria-expanded={openDropdown === link.label}
                  >
                    {link.label}
                    <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50 border border-gray-100 py-1">
                    {link.children.map((child) =>
                      child.divider ? (
                        <div key={`divider-${child.label}`} className="border-t border-gray-100 my-1" />
                      ) : (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-50 hover:text-brand-800 transition-colors"
                        >
                          {child.label}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-brand-100 hover:text-white transition-colors px-3 py-2 rounded-md hover:bg-brand-800"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Right: Phone + CTA + Mobile toggle */}
          <div className="flex items-center gap-2">
            <a
              href={BUSINESS.phoneHref}
              className="hidden md:flex items-center gap-1.5 text-sm font-bold text-white"
              aria-label={`Call BuzzSkito: ${BUSINESS.phone}`}
            >
              <svg className="w-4 h-4 text-brand-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              {BUSINESS.phone}
            </a>
            <Link
              href="/contact"
              className="hidden sm:inline-flex bg-amber-500 hover:bg-amber-400 text-white font-bold px-4 py-2 rounded-full text-sm transition-colors shadow-md"
            >
              Free Quote
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-md text-brand-200 hover:text-white hover:bg-brand-800"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav id="mobile-menu" aria-label="Mobile navigation" className="lg:hidden pb-4 border-t border-brand-800 pt-3 space-y-1">
            {NAV.map((link) => (
              <div key={link.label}>
                {link.children ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                      className="w-full text-left flex items-center justify-between px-3 py-2 text-sm font-medium text-brand-100 hover:bg-brand-800 rounded-md"
                    >
                      {link.label}
                      <svg className={`w-4 h-4 transition-transform ${openDropdown === link.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDropdown === link.label && (
                      <div className="pl-4 mt-1 space-y-1 border-l border-brand-800 ml-4">
                        {link.children.map((child) =>
                          child.divider ? null : (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-3 py-1.5 text-sm text-brand-200 hover:text-white hover:bg-brand-800 rounded-md"
                              onClick={() => setMenuOpen(false)}
                            >
                              {child.label}
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="block px-3 py-2 text-sm font-medium text-brand-100 hover:bg-brand-800 rounded-md"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-2 border-t border-brand-800">
              <a href={BUSINESS.phoneHref} className="flex items-center gap-2 px-3 py-2 text-sm text-brand-300 font-semibold">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                {BUSINESS.phone}
              </a>
              <Link href="/contact" className="block mx-3 mt-2 bg-amber-500 text-white text-center font-bold px-4 py-2 rounded-full text-sm" onClick={() => setMenuOpen(false)}>
                Get a Free Quote
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
