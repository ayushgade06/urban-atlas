'use client'

import Link from 'next/link'
import { Logo } from '@/components/logo'

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.63-1.023-5.102-2.884-6.964-1.86-1.862-4.331-2.886-6.968-2.887-5.44 0-9.866 4.42-9.869 9.866-.001 1.77.461 3.5 1.338 5.031L1.993 21.848l6.196-1.625-1.542-.924zm11.536-7.14c-.302-.15-1.78-.88-2.057-.98-.277-.1-.48-.15-.68.15-.2.3-.77.98-.95 1.18-.18.2-.36.23-.66.08-.3-.15-1.27-.47-2.42-1.5-1-.89-1.67-1.99-1.87-2.33-.2-.3-.02-.47.13-.62.14-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.68-1.63-.93-2.24-.24-.59-.48-.51-.68-.52-.17-.01-.38-.01-.58-.01-.2 0-.53.07-.8.37-.28.3-1.07 1.05-1.07 2.56s1.09 2.97 1.24 3.17c.15.2 2.15 3.28 5.21 4.6 1.13.48 2.02.77 2.71.99.76.24 1.46.21 2.01.12.61-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.07-.13-.27-.2-.57-.35z" />
    </svg>
  )
}

function EnvelopeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#FF2D3F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

const quickLinks = [
  { label: 'Submit Plot', href: '/submit-plot' },
  { label: 'Buyer Circle', href: '/buyer-circle' },
  { label: 'Valuation', href: '/valuation' },
  { label: 'Market Report', href: '/#market-report' },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#F3F4F6] pt-12 pb-8 w-full" id="footer">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {/* LEFT COLUMN: Logo Stack */}
          <div className="flex flex-col items-start">
            <Logo className="mb-4" showTagline={true} />
          </div>

          {/* CENTER COLUMN: Quick Links */}
          <div className="flex flex-col items-start">
            <h4 className="font-extrabold text-[15px] text-[#111827] uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[14px] font-bold text-[#4B5563] hover:text-[#FF2D3F] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT COLUMN: Contact Information */}
          <div className="flex flex-col items-start">
            <h4 className="font-extrabold text-[15px] text-[#111827] uppercase tracking-wider mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-[14px] font-bold text-[#4B5563]">
                <div className="w-[30px] h-[30px] rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  <WhatsAppIcon className="h-4.5 w-4.5 text-[#25D366]" />
                </div>
                <span>+91 00000 00000</span>
              </li>
              <li className="flex items-center gap-3 text-[14px] font-bold text-[#4B5563]">
                <div className="w-[30px] h-[30px] rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                  <EnvelopeIcon className="h-4 w-4" />
                </div>
                <a href="mailto:hello@urbanatlas.in" className="hover:text-[#FF2D3F] transition-colors">
                  hello@urbanatlas.in
                </a>
              </li>
              <li className="flex items-center gap-3 text-[14px] font-bold text-[#6B7280]">
                <div className="w-[30px] h-[30px] rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0">
                  <ClockIcon className="h-4 w-4" />
                </div>
                <span>Response Time: Usually within 24 hours.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 border-t border-[#F3F4F6] text-left">
          <p className="text-[12px] font-bold text-[#6B7280]">
            © 2025 Urban Atlas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
