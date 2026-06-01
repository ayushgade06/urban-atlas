import Link from 'next/link'
import { MessageCircle, Mail, Clock } from 'lucide-react'
import { Logo } from '@/components/logo'

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.63-1.023-5.102-2.884-6.964-1.86-1.862-4.331-2.886-6.968-2.887-5.44 0-9.866 4.42-9.869 9.866-.001 1.77.461 3.5 1.338 5.031L1.993 21.848l6.196-1.625-1.542-.924zm11.536-7.14c-.302-.15-1.78-.88-2.057-.98-.277-.1-.48-.15-.68.15-.2.3-.77.98-.95 1.18-.18.2-.36.23-.66.08-.3-.15-1.27-.47-2.42-1.5-1-.89-1.67-1.99-1.87-2.33-.2-.3-.02-.47.13-.62.14-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.68-1.63-.93-2.24-.24-.59-.48-.51-.68-.52-.17-.01-.38-.01-.58-.01-.2 0-.53.07-.8.37-.28.3-1.07 1.05-1.07 2.56s1.09 2.97 1.24 3.17c.15.2 2.15 3.28 5.21 4.6 1.13.48 2.02.77 2.71.99.76.24 1.46.21 2.01.12.61-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.07-.13-.27-.2-.57-.35z" />
    </svg>
  )
}

const quickLinks = [
  { label: 'Submit Plot', href: '#submit-plot' },
  { label: 'Buyer Circle', href: '#buyer-circle' },
  { label: 'Valuation', href: '#valuation' },
  { label: 'Market Report', href: '#market-report' },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-10">

          {/* LEFT */}
          <div>
            <Logo className="mb-3" />
            <p className="text-sm text-ink-soft mb-6">Lucknow Real Estate Intelligence</p>
          </div>

          {/* CENTER — Quick Links */}
          <div>
            <h4 className="font-semibold text-ink mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-soft hover:text-brand transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — Contact Us */}
          <div>
            <h4 className="font-semibold text-ink mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-sm text-ink-soft">
                <WhatsAppIcon className="h-4 w-4 text-[#25D366] flex-shrink-0" />
                +91 00000 00000
              </li>
              <li className="flex items-center gap-2.5 text-sm text-ink-soft">
                <Mail className="h-4 w-4 text-brand flex-shrink-0" />
                hello@urbanatlas.in
              </li>
              <li className="flex items-start gap-2.5 text-sm text-ink-soft">
                <Clock className="h-4 w-4 flex-shrink-0 mt-0.5" />
                Response Time: Usually within 24 hours.
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-gray-100">
          <p className="text-xs text-ink-soft">
            © 2025 Urban Atlas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
