'use client'
import TallyEmbed from '../shared/TallyEmbed'
import TallyModalTrigger from '../shared/TallyModalTrigger'
import { WHATSAPP_URL } from '@/lib/config'
import SectionLabel from '../shared/SectionLabel'

export default function FinalCTA() {
  return (
    <div id="contact" className="bg-white font-jakarta">
      {/* Contact & Inline Tally Form Section */}
      <section 
        className="py-24 text-center border-t border-[#EBEBEB]"
        style={{
          backgroundImage: 'radial-gradient(#EBEBEB 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      >
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-6">
          <SectionLabel>Get Access</SectionLabel>
          <h2 className="heading-lg text-[#222222] max-w-2xl leading-tight">
            Looking for a Verified Resale Plot in Lucknow?
          </h2>
          <p className="body-md text-[#6A6A6A] max-w-xl">
            Submit your requirements to our matching engine. Our operations team will filter off-market allotments and coordinate title mutations checks.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mt-2">
            <TallyModalTrigger className="bg-[#FF385C] hover:bg-[#E31C5F] text-white font-semibold text-[0.9375rem] px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-md hover:-translate-y-px inline-flex items-center justify-center gap-2 w-full sm:w-auto cursor-pointer">
              Request Inventory Access
            </TallyModalTrigger>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1DA851] text-white font-semibold text-[0.9375rem] px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-md hover:-translate-y-px inline-flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Talk on WhatsApp 🟢
            </a>
          </div>

          {/* Inline Tally Form Embed (Primary Lead Capture, always visible) */}
          <div className="w-full max-w-xl bg-white border border-[#EBEBEB] rounded-2xl shadow-md p-2 mt-8 overflow-hidden">
            <TallyEmbed formId="68MPZA" className="w-full" />
          </div>
        </div>
      </section>

      {/* About Section Block (Navbar target anchor) */}
      <section id="about" className="bg-[#F7F7F7] py-16 border-t border-[#EBEBEB]">
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-4">
          <SectionLabel>About Urban Atlas</SectionLabel>
          <p className="text-sm text-[#6A6A6A] leading-relaxed max-w-2xl">
            Urban Atlas is Lucknow&apos;s dedicated residential plot intelligence platform. We bridge the gap between offline land data and online transparency, helping developers, end-users, and brokers identify, verify, and mutate residential plots across Lucknow&apos;s highest-growth corridors.
          </p>
        </div>
      </section>
    </div>
  )
}
