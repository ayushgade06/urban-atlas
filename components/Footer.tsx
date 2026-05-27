"use client";

import React from "react";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-half pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col gap-16">
        
        {/* Top Segment: Brand & Multi-columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Col (Col span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF385C]/5 border border-[#FF385C]/20 transition-all duration-300 group-hover:scale-105">
                <svg
                  className="h-5 w-5 text-[#FF385C]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-[#222222]">
                  Urban Atlas
                </span>
                <span className="text-[10px] font-medium tracking-wide text-[#6A6A6A] uppercase leading-none">
                  Plot Intelligence for Lucknow
                </span>
              </div>
            </Link>

            <p className="text-[13px] font-medium text-[#6A6A6A] leading-[1.6] max-w-[280px]">
              Private residential resale plot intelligence network. We track LDA & Awas Vikas holdings to connect premium inventory with serious buyers.
            </p>

            {/* Social Icons Row */}
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/910000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-half bg-[#F7F7F7] hover:bg-[#25D366]/5 hover:border-[#25D366]/20 text-[#6A6A6A] hover:text-[#25D366] transition-all duration-200"
                aria-label="WhatsApp Link"
              >
                <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.63-1.023-5.102-2.884-6.964-1.86-1.862-4.331-2.886-6.968-2.887-5.44 0-9.866 4.42-9.869 9.866-.001 1.77.461 3.5 1.338 5.031L1.993 21.848l6.196-1.625l-1.542-.924zm11.536-7.14c-.302-.15-1.78-.88-2.057-.98-.277-.1-.48-.15-.68.15-.2.3-.77.98-.95 1.18-.18.2-.36.23-.66.08-.3-.15-1.27-.47-2.42-1.5-1-.89-1.67-1.99-1.87-2.33-.2-.3-.02-.47.13-.62.14-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.68-1.63-.93-2.24-.24-.59-.48-.51-.68-.52-.17-.01-.38-.01-.58-.01-.2 0-.53.07-.8.37-.28.3-1.07 1.05-1.07 2.56s1.09 2.97 1.24 3.17c.15.2 2.15 3.28 5.21 4.6 1.13.48 2.02.77 2.71.99.76.24 1.46.21 2.01.12.61-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.07-.13-.27-.2-.57-.35z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-half bg-[#F7F7F7] hover:bg-rose-500/5 hover:border-rose-500/20 text-[#6A6A6A] hover:text-rose-500 transition-all duration-200"
                aria-label="Instagram Link"
              >
                <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-half bg-[#F7F7F7] hover:bg-blue-600/5 hover:border-blue-600/20 text-[#6A6A6A] hover:text-blue-600 transition-all duration-200"
                aria-label="LinkedIn Link"
              >
                <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav columns (Col span 8 total, split in 4 columns) */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            
            {/* Quick Links */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#222222]">
                Quick Links
              </h3>
              <nav className="flex flex-col gap-2.5">
                <Link href="#inventory" className="text-[13px] font-semibold text-[#6A6A6A] hover:text-[#222222] transition-colors">
                  Inventory
                </Link>
                <Link href="#localities" className="text-[13px] font-semibold text-[#6A6A6A] hover:text-[#222222] transition-colors">
                  Localities
                </Link>
                <Link href="#intelligence" className="text-[13px] font-semibold text-[#6A6A6A] hover:text-[#222222] transition-colors">
                  Intelligence
                </Link>
                <Link href="#broker-network" className="text-[13px] font-semibold text-[#6A6A6A] hover:text-[#222222] transition-colors">
                  Broker Network
                </Link>
              </nav>
            </div>

            {/* Resources */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#222222]">
                Resources
              </h3>
              <nav className="flex flex-col gap-2.5">
                <a href="https://wa.me/910000000000" target="_blank" rel="noopener noreferrer" className="text-[13px] font-semibold text-[#6A6A6A] hover:text-[#222222] transition-colors">
                  WhatsApp Community
                </a>
                <Link href="#contact" className="text-[13px] font-semibold text-[#6A6A6A] hover:text-[#222222] transition-colors">
                  Request Access
                </Link>
                <Link href="#contact" className="text-[13px] font-semibold text-[#6A6A6A] hover:text-[#222222] transition-colors">
                  Blog
                </Link>
                <Link href="#contact" className="text-[13px] font-semibold text-[#6A6A6A] hover:text-[#222222] transition-colors">
                  Contact
                </Link>
              </nav>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#222222]">
                Company
              </h3>
              <nav className="flex flex-col gap-2.5">
                <Link href="#about" className="text-[13px] font-semibold text-[#6A6A6A] hover:text-[#222222] transition-colors">
                  About Us
                </Link>
                <Link href="#intelligence" className="text-[13px] font-semibold text-[#6A6A6A] hover:text-[#222222] transition-colors">
                  How It Works
                </Link>
                <Link href="#intelligence" className="text-[13px] font-semibold text-[#6A6A6A] hover:text-[#222222] transition-colors">
                  Our Approach
                </Link>
                <Link href="#broker-network" className="text-[13px] font-semibold text-[#6A6A6A] hover:text-[#222222] transition-colors">
                  Partner With Us
                </Link>
              </nav>
            </div>

            {/* Get In Touch */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#222222]">
                Get in Touch
              </h3>
              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-2.5 text-[13px] font-semibold text-[#6A6A6A]">
                  <Phone className="h-4 w-4 text-[#FF385C] flex-shrink-0" strokeWidth={1.5} />
                  <span>+91 00000 00000</span>
                </li>
                <li className="flex items-center gap-2.5 text-[13px] font-semibold text-[#6A6A6A]">
                  <Mail className="h-4 w-4 text-[#FF385C] flex-shrink-0" strokeWidth={1.5} />
                  <a href="mailto:hello@urbanatlas.in" className="hover:text-[#222222] transition-colors">
                    hello@urbanatlas.in
                  </a>
                </li>
                <li className="flex items-start gap-2.5 text-[13px] font-semibold text-[#6A6A6A]">
                  <MapPin className="h-4 w-4 text-[#FF385C] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <span>Lucknow, Uttar Pradesh</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom copyright Segment */}
        <div className="border-t border-half pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-[12px] font-semibold text-[#6A6A6A]">
          <span>© 2026 Urban Atlas. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <Link href="#contact" className="hover:text-[#222222] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#contact" className="hover:text-[#222222] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
