import { WHATSAPP_URL } from '@/lib/config'
import { MessageCircle, Shield } from 'lucide-react'

export default function WhatsAppCTA() {
  return (
    <section className="bg-[#F0FDF4] border-y border-[#BBF7D0] py-16 font-jakarta text-center">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-6">
        {/* Large WhatsApp Icon */}
        <div className="w-16 h-16 rounded-full bg-[#25D366]/10 flex items-center justify-center">
          <MessageCircle className="w-10 h-10 text-[#25D366] fill-current" />
        </div>

        {/* Header */}
        <div className="max-w-xl">
          <h2 className="heading-md text-[#222222] mb-3">Connect on WhatsApp</h2>
          <p className="body-md text-[#6A6A6A]">
            Instantly join our network to receive off-market listings, direct pricing signals, and verified resale catalog alerts in Lucknow.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#1DA851] text-white font-semibold text-[0.9375rem] px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-md hover:-translate-y-px inline-flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            Join Community Group
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#25D366] hover:bg-[#25D366]/5 text-[#25D366] font-semibold text-[0.9375rem] px-6 py-3 rounded-xl transition-all duration-200 inline-flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            Chat with Us Directly
          </a>
        </div>

        {/* Note */}
        <div className="text-xs text-[#6A6A6A] font-semibold flex items-center gap-1.5 mt-2 opacity-75">
          <Shield className="w-4 h-4 text-[#25D366]" />
          <span>🔒 Private network. No spam. Verified buyers only.</span>
        </div>
      </div>
    </section>
  )
}
