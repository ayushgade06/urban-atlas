'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const WA_LINK = 'https://wa.me/910000000000?text=Hi%2C%20I%27m%20interested%20in%20verified%20resale%20plots%20in%20Lucknow'

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.63-1.023-5.102-2.884-6.964-1.86-1.862-4.331-2.886-6.968-2.887-5.44 0-9.866 4.42-9.869 9.866-.001 1.77.461 3.5 1.338 5.031L1.993 21.848l6.196-1.625-1.542-.924zm11.536-7.14c-.302-.15-1.78-.88-2.057-.98-.277-.1-.48-.15-.68.15-.2.3-.77.98-.95 1.18-.18.2-.36.23-.66.08-.3-.15-1.27-.47-2.42-1.5-1-.89-1.67-1.99-1.87-2.33-.2-.3-.02-.47.13-.62.14-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.68-1.63-.93-2.24-.24-.59-.48-.51-.68-.52-.17-.01-.38-.01-.58-.01-.2 0-.53.07-.8.37-.28.3-1.07 1.05-1.07 2.56s1.09 2.97 1.24 3.17c.15.2 2.15 3.28 5.21 4.6 1.13.48 2.02.77 2.71.99.76.24 1.46.21 2.01.12.61-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.07-.13-.27-.2-.57-.35z" />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'Inventory', href: '#inventory' },
    { label: 'Localities', href: '#localities' },
    { label: 'Intelligence', href: '#intelligence' },
    { label: 'Broker Network', href: '#broker-network' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-sm border-b border-[#EBEBEB]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex h-18 items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[#FF385C]/8 border border-[#FF385C]/20 transition-all duration-300 group-hover:scale-105">
              <span className="absolute inline-flex h-2.5 w-2.5 rounded-full bg-[#FF385C] opacity-70"
                style={{ animation: 'pulse 2.5s ease-in-out infinite' }}
              />
              <svg className="h-4.5 w-4.5 text-[#FF385C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                scrolled ? 'text-[#222222]' : 'text-[#222222]'
              } group-hover:text-[#FF385C]`}>
                Urban Atlas
              </span>
              <span className="text-[10px] font-semibold tracking-widest text-[#6A6A6A] uppercase leading-none">
                Plot Intelligence
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13.5px] font-medium transition-colors duration-200 ${
                  scrolled ? 'text-[#6A6A6A] hover:text-[#222222]' : 'text-[#6A6A6A] hover:text-[#222222]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-[#EBEBEB] px-4 py-2 text-[13.5px] font-semibold text-[#222222] bg-white hover:bg-[#F7F7F7] hover:border-[#25D366]/30 transition-all duration-200"
              aria-label="Join WhatsApp community"
            >
              <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
              <span>Join WhatsApp</span>
            </a>
            <a
              href="#contact"
              className="rounded-full bg-[#FF385C] hover:bg-[#E31C5F] px-5 py-2 text-[13.5px] font-bold text-white transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Request Access
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex lg:hidden p-2 rounded-full hover:bg-[#F7F7F7] text-[#222222] transition-colors focus:outline-none"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-[#EBEBEB] px-6 py-6 flex flex-col gap-5">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-[15px] font-medium text-[#222222] hover:text-[#FF385C] py-2.5 border-b border-[#F7F7F7] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-3 pt-2">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-[#EBEBEB] py-3 text-[14px] font-semibold text-[#222222] bg-white hover:bg-[#F7F7F7] transition-all"
            >
              <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
              <span>Join WhatsApp Community</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center rounded-full bg-[#FF385C] hover:bg-[#E31C5F] py-3 text-[14px] font-bold text-white transition-all"
            >
              Request Access
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
