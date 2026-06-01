'use client'
import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'
import { WHATSAPP_URL } from '@/lib/config'
import TallyModalTrigger from '../shared/TallyModalTrigger'
import SectionLabel from '../shared/SectionLabel'
import { CheckCircle2, MessageSquare } from 'lucide-react'

export default function BrokerSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Left Column Slide
    gsap.from('.broker-left', {
      opacity: 0,
      x: -30,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%'
      }
    })

    // Right Column Slide
    gsap.from('.broker-right', {
      opacity: 0,
      x: 30,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%'
      }
    })

    // WA Chat Bubble delayed fade in
    gsap.from('.wa-bubble', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      delay: 0.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%'
      }
    })
  }, { scope: containerRef })

  const brokerChecklist = [
    'Zero Direct Competitor Posturing (we charge no commission)',
    'Clear Mutual Client Protection (we protect broker listings)',
    'Structured Co-Brokering Protocols',
    'Single point of contact for transaction management',
    'Automatic legal title search reports'
  ]

  const waChecklist = [
    'Instant verification alerts on resale properties',
    'Access to locked off-market seller portfolios',
    'Direct verified buyer connection signals',
    'Daily price change notifications in key sectors',
    'Complete PDF title mutations summaries'
  ]

  return (
    <section
      id="broker-network"
      ref={containerRef}
      className="bg-white py-20 md:py-28 font-jakarta overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Column: Broker Protocol */}
        <div className="broker-left flex flex-col gap-6">
          <SectionLabel>Collaborative Moat</SectionLabel>
          <h2 className="heading-lg text-[#222222]">
            Built to Work With Brokers, Not Against Them
          </h2>
          <p className="body-md">
            We partner with Lucknow&apos;s leading professional realtors. Our platform acts as a neutral aggregator, providing verified buyers and legal data intelligence to accelerate transaction pipelines without competing for direct agency fees.
          </p>

          {/* Coral Checklist */}
          <ul className="flex flex-col gap-3">
            {brokerChecklist.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FF385C] mt-0.5 flex-none" />
                <span className="text-sm text-[#6A6A6A] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <TallyModalTrigger className="bg-[#FF385C] hover:bg-[#E31C5F] text-white font-semibold text-[0.9375rem] px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-md hover:-translate-y-px inline-flex items-center gap-2 w-full sm:w-auto justify-center cursor-pointer">
              Join Broker Network →
            </TallyModalTrigger>
            <div className="border border-[#FF385C]/20 bg-[#FFF0F3] text-[#FF385C] text-xs font-semibold px-4 py-3.5 rounded-xl flex items-center gap-1.5 w-full sm:w-auto justify-center">
              ✓ 100% Broker-Friendly Protocol
            </div>
          </div>
        </div>

        {/* Right Column: WhatsApp Network */}
        <div className="broker-right flex flex-col gap-6 w-full">
          <SectionLabel>Instant Updates</SectionLabel>
          <h2 className="heading-lg text-[#222222]">
            Join the Verified Resale Network
          </h2>
          <p className="body-md">
            Get instant inventory alerts delivered straight to your WhatsApp feed. Join our private broadcast list to review verified listings before they are made public.
          </p>

          {/* Green Checklist */}
          <ul className="flex flex-col gap-3">
            {waChecklist.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#25D366] mt-0.5 flex-none" />
                <span className="text-sm text-[#6A6A6A] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#1DA851] text-white font-semibold text-[0.9375rem] px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-md hover:-translate-y-px inline-flex items-center justify-center gap-2 w-full"
          >
            🟢 Join WhatsApp Community
          </a>

          {/* Mock WhatsApp Chat Widget */}
          <div className="mt-4 flex justify-center w-full">
            <div className="border border-[#EBEBEB] rounded-2xl overflow-hidden shadow-md w-full max-w-[360px] bg-[#E5DDD5]">
              {/* Widget Header */}
              <div className="bg-[#E9FBF0] p-4 border-b border-[#EBEBEB] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white font-bold text-xs">
                    📍
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#222222]">Urban Atlas Community</h4>
                    <span className="text-[10px] text-[#1DA851] font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] inline-block animate-pulse"></span>
                      online
                    </span>
                  </div>
                </div>
                <MessageSquare className="w-4 h-4 text-[#6A6A6A]" />
              </div>

              {/* Chat Area */}
              <div className="p-4 flex flex-col gap-4 min-h-[190px]">
                {/* Chat Bubble */}
                <div className="wa-bubble self-start bg-[#DCF8C6] p-3 rounded-tr-xl rounded-b-xl shadow-xs max-w-[85%] text-[#222222] border border-[#d2edd6]">
                  <div className="text-[11px] font-bold text-[#FF385C] uppercase tracking-wider mb-1">
                    New Inventory Alert 🚨
                  </div>
                  <div className="text-xs font-semibold">Corner Plot in Gomti Nagar</div>
                  <div className="text-[11px] text-[#6A6A6A] mt-0.5">Sector-7</div>
                  <div className="text-[11px] text-[#6A6A6A]">2400 sqft | 12m Road</div>
                  <div className="text-xs font-bold mt-1 text-[#222222]">Asking: ₹1.95 Cr</div>
                  <div className="text-[10px] text-[#6A6A6A] italic mt-1">Double-side open, LDA park</div>
                  <div className="text-[9px] text-[#9A9A9A] text-right mt-1.5 flex items-center justify-end gap-0.5">
                    11:30 AM 
                    <span className="text-[#34B7F1]">✓✓</span>
                  </div>
                </div>
              </div>

              {/* Chat Input Mock */}
              <div className="bg-white p-3 border-t border-[#EBEBEB] flex items-center justify-between gap-2">
                <div className="bg-[#F7F7F7] px-3 py-1.5 rounded-full text-[11px] text-[#9A9A9A] flex-1">
                  Type a message...
                </div>
                <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center text-white text-xs">
                  →
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
