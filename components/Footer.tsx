import React from 'react'
import Link from 'next/link'

const WA_LINK = 'https://wa.me/910000000000?text=Hi%2C%20I%27m%20interested%20in%20verified%20resale%20plots%20in%20Lucknow'

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.63-1.023-5.102-2.884-6.964-1.86-1.862-4.331-2.886-6.968-2.887-5.44 0-9.866 4.42-9.869 9.866-.001 1.77.461 3.5 1.338 5.031L1.993 21.848l6.196-1.625-1.542-.924zm11.536-7.14c-.302-.15-1.78-.88-2.057-.98-.277-.1-.48-.15-.68.15-.2.3-.77.98-.95 1.18-.18.2-.36.23-.66.08-.3-.15-1.27-.47-2.42-1.5-1-.89-1.67-1.99-1.87-2.33-.2-.3-.02-.47.13-.62.14-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.68-1.63-.93-2.24-.24-.59-.48-.51-.68-.52-.17-.01-.38-.01-.58-.01-.2 0-.53.07-.8.37-.28.3-1.07 1.05-1.07 2.56s1.09 2.97 1.24 3.17c.15.2 2.15 3.28 5.21 4.6 1.13.48 2.02.77 2.71.99.76.24 1.46.21 2.01.12.61-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.07-.13-.27-.2-.57-.35z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export default function Footer() {
  const quickLinks = [
    { label: 'Inventory', href: '#inventory' },
    { label: 'Localities', href: '#localities' },
    { label: 'Intelligence', href: '#intelligence' },
    { label: 'Broker Network', href: '#broker-network' },
  ]

  const resourceLinks = [
    { label: 'WhatsApp Community', href: WA_LINK, external: true },
    { label: 'Request Access', href: '#contact', external: false },
    { label: 'Blog', href: '#', external: false },
    { label: 'Contact Us', href: '#contact', external: false },
  ]

  return (
    <footer className="w-full bg-[#F7F7F7] border-t border-[#EBEBEB]" id="about">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Column 1: Brand */}
          <div className="flex flex-col gap-5">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FF385C]/8 border border-[#FF385C]/20">
                <svg className="h-4.5 w-4.5 text-[#FF385C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[18px] font-bold text-[#222222] group-hover:text-[#FF385C] transition-colors">Urban Atlas</span>
                <span className="text-[9.5px] font-semibold text-[#6A6A6A] uppercase tracking-widest leading-none">Plot Intelligence</span>
              </div>
            </Link>

            <p className="text-[13px] text-[#6A6A6A] leading-relaxed">
              Private residential resale intelligence network for verified plot buyers and brokers
              in Lucknow, India.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-[#EBEBEB] text-[#25D366] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-200"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-[#EBEBEB] text-[#6A6A6A] hover:text-[#E4405F] hover:border-[#E4405F]/30 hover:bg-[#E4405F]/5 transition-all duration-200"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-[#EBEBEB] text-[#6A6A6A] hover:text-[#0A66C2] hover:border-[#0A66C2]/30 hover:bg-[#0A66C2]/5 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#222222]">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13.5px] text-[#6A6A6A] hover:text-[#FF385C] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#222222]">Resources</h3>
            <ul className="flex flex-col gap-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13.5px] text-[#6A6A6A] hover:text-[#FF385C] transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-[13.5px] text-[#6A6A6A] hover:text-[#FF385C] transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company + Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#222222]">Company</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="#about" className="text-[13.5px] text-[#6A6A6A] hover:text-[#FF385C] transition-colors">About Us</Link></li>
              <li><Link href="#intelligence" className="text-[13.5px] text-[#6A6A6A] hover:text-[#FF385C] transition-colors">How It Works</Link></li>
            </ul>

            {/* Contact details */}
            <div className="flex flex-col gap-2 pt-2 border-t border-[#EBEBEB] mt-1">
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#222222]">Contact</h4>
              <a href="tel:+910000000000" className="text-[13px] text-[#6A6A6A] hover:text-[#222222] transition-colors">
                +91 00000 00000
              </a>
              <a href="mailto:hello@urbanatlas.in" className="text-[13px] text-[#6A6A6A] hover:text-[#FF385C] transition-colors">
                hello@urbanatlas.in
              </a>
              <span className="text-[13px] text-[#6A6A6A]">Lucknow, Uttar Pradesh</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#EBEBEB] bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[12px] text-[#6A6A6A]">
            &copy; 2026 Urban Atlas. All rights reserved.
          </span>
          <div className="flex items-center gap-5">
            <Link href="#" className="text-[12px] text-[#6A6A6A] hover:text-[#FF385C] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-[12px] text-[#6A6A6A] hover:text-[#FF385C] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
