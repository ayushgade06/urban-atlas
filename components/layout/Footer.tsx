import Link from 'next/link'
import TallyModalTrigger from '../shared/TallyModalTrigger'
import { WHATSAPP_URL } from '@/lib/config'
import { MapPin, MessageSquare, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#F7F7F7] border-t border-[#EBEBEB] py-12 px-6 md:px-10 font-jakarta">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1: Brand */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2 group w-fit">
            <div className="bg-[#FF385C] text-white p-2 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="font-extrabold text-lg leading-tight tracking-tight text-[#222222]">
                Urban Atlas
              </span>
            </div>
          </Link>
          <p className="text-[#6A6A6A] text-sm leading-relaxed max-w-xs">
            Lucknow's premier residential plot intelligence platform. We map, verify, and monitor resale inventories across top localities.
          </p>
          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6A6A6A] hover:text-[#25D366] transition-colors"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6A6A6A] hover:text-[#FF385C] transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6A6A6A] hover:text-[#0A66C2] transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-xs font-semibold text-[#222222] uppercase tracking-wider mb-6">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <Link href="/#inventory" className="text-[#6A6A6A] hover:text-[#222222] transition-colors">
                Inventory
              </Link>
            </li>
            <li>
              <Link href="/localities" className="text-[#6A6A6A] hover:text-[#222222] transition-colors">
                Localities
              </Link>
            </li>
            <li>
              <Link href="/#intelligence" className="text-[#6A6A6A] hover:text-[#222222] transition-colors">
                Intelligence
              </Link>
            </li>
            <li>
              <Link href="/#broker-network" className="text-[#6A6A6A] hover:text-[#222222] transition-colors">
                Broker Network
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div>
          <h4 className="text-xs font-semibold text-[#222222] uppercase tracking-wider mb-6">
            Resources
          </h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <Link href="/community" className="text-[#6A6A6A] hover:text-[#222222] transition-colors">
                WhatsApp Community
              </Link>
            </li>
            <li>
              <TallyModalTrigger className="text-[#6A6A6A] hover:text-[#222222] text-left transition-colors bg-transparent border-0 p-0 cursor-pointer">
                Request Access
              </TallyModalTrigger>
            </li>
            <li>
              <Link href="/professionals" className="text-[#6A6A6A] hover:text-[#222222] transition-colors">
                Verified Professionals
              </Link>
            </li>
            <li>
              <Link href="/join-network" className="text-[#6A6A6A] hover:text-[#222222] transition-colors">
                Join Network
              </Link>
            </li>
            <li>
              <Link href="/admin/login" className="text-xs text-[#9A9A9A] hover:text-[#222222] transition-colors">
                Admin Panel
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Get in Touch */}
        <div>
          <h4 className="text-xs font-semibold text-[#222222] uppercase tracking-wider mb-6">
            Get in Touch
          </h4>
          <ul className="flex flex-col gap-3 text-sm text-[#6A6A6A]">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#FF385C]" />
              <a href="tel:+918375884211" className="hover:text-[#222222] transition-colors">
                +91 8375884211
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#FF385C]" />
              <a href="mailto:email@urbanatlas.in" className="hover:text-[#222222] transition-colors">
                email@urbanatlas.in
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#FF385C]" />
              <span>Lucknow, Uttar Pradesh, India</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto h-px bg-[#EBEBEB] my-8" />

      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9A9A9A]">
        <div>
          © {new Date().getFullYear()} Urban Atlas. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <Link href="/privacy" className="hover:text-[#222222] transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-[#222222] transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}
