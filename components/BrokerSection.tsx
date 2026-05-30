'use client'

import React, { useEffect, useRef } from 'react'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { gsap } from '@/lib/gsap'
import ScrollReveal from './ScrollReveal'

const WA_LINK = 'https://wa.me/910000000000?text=Hi%2C%20I%27m%20interested%20in%20verified%20resale%20plots%20in%20Lucknow'

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.63-1.023-5.102-2.884-6.964-1.86-1.862-4.331-2.886-6.968-2.887-5.44 0-9.866 4.42-9.869 9.866-.001 1.77.461 3.5 1.338 5.031L1.993 21.848l6.196-1.625-1.542-.924zm11.536-7.14c-.302-.15-1.78-.88-2.057-.98-.277-.1-.48-.15-.68.15-.2.3-.77.98-.95 1.18-.18.2-.36.23-.66.08-.3-.15-1.27-.47-2.42-1.5-1-.89-1.67-1.99-1.87-2.33-.2-.3-.02-.47.13-.62.14-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.68-1.63-.93-2.24-.24-.59-.48-.51-.68-.52-.17-.01-.38-.01-.58-.01-.2 0-.53.07-.8.37-.28.3-1.07 1.05-1.07 2.56s1.09 2.97 1.24 3.17c.15.2 2.15 3.28 5.21 4.6 1.13.48 2.02.77 2.71.99.76.24 1.46.21 2.01.12.61-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.07-.13-.27-.2-.57-.35z" />
    </svg>
  )
}

function CityIllustration() {
  return (
    <svg viewBox="0 0 280 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto opacity-90">
      {/* Ground */}
      <rect x="0" y="100" width="280" height="20" fill="#F7F7F7" />
      {/* Building 1 - tall */}
      <rect x="20" y="40" width="30" height="60" rx="2" fill="#EBEBEB" />
      <rect x="24" y="45" width="8" height="8" rx="1" fill="#FF385C" opacity="0.3" />
      <rect x="36" y="45" width="8" height="8" rx="1" fill="#FF385C" opacity="0.2" />
      <rect x="24" y="58" width="8" height="8" rx="1" fill="white" />
      <rect x="36" y="58" width="8" height="8" rx="1" fill="white" />
      <rect x="24" y="71" width="8" height="8" rx="1" fill="white" />
      <rect x="36" y="71" width="8" height="8" rx="1" fill="#FF385C" opacity="0.2" />
      {/* Building 2 - medium */}
      <rect x="58" y="55" width="35" height="45" rx="2" fill="#E5E5E5" />
      <rect x="63" y="60" width="9" height="9" rx="1" fill="white" />
      <rect x="76" y="60" width="9" height="9" rx="1" fill="#FF385C" opacity="0.25" />
      <rect x="63" y="73" width="9" height="9" rx="1" fill="white" />
      <rect x="76" y="73" width="9" height="9" rx="1" fill="white" />
      <rect x="63" y="86" width="22" height="14" rx="1" fill="#D4D4D4" />
      {/* Building 3 - small */}
      <rect x="100" y="68" width="25" height="32" rx="2" fill="#EBEBEB" />
      <rect x="105" y="73" width="6" height="6" rx="1" fill="white" />
      <rect x="114" y="73" width="6" height="6" rx="1" fill="white" />
      <rect x="105" y="83" width="6" height="6" rx="1" fill="#FF385C" opacity="0.2" />
      <rect x="114" y="83" width="6" height="6" rx="1" fill="white" />
      {/* Building 4 - tall skinny */}
      <rect x="130" y="30" width="22" height="70" rx="2" fill="#E0E0E0" />
      <rect x="133" y="35" width="5" height="5" rx="1" fill="white" />
      <rect x="141" y="35" width="5" height="5" rx="1" fill="white" />
      <rect x="133" y="44" width="5" height="5" rx="1" fill="#FF385C" opacity="0.3" />
      <rect x="141" y="44" width="5" height="5" rx="1" fill="white" />
      <rect x="133" y="53" width="5" height="5" rx="1" fill="white" />
      <rect x="141" y="53" width="5" height="5" rx="1" fill="white" />
      <rect x="133" y="62" width="5" height="5" rx="1" fill="white" />
      <rect x="141" y="62" width="5" height="5" rx="1" fill="#FF385C" opacity="0.2" />
      {/* Building 5 - wide */}
      <rect x="160" y="50" width="50" height="50" rx="2" fill="#E8E8E8" />
      <rect x="165" y="55" width="10" height="10" rx="1" fill="white" />
      <rect x="179" y="55" width="10" height="10" rx="1" fill="white" />
      <rect x="193" y="55" width="10" height="10" rx="1" fill="#FF385C" opacity="0.3" />
      <rect x="165" y="70" width="10" height="10" rx="1" fill="white" />
      <rect x="179" y="70" width="10" height="10" rx="1" fill="#FF385C" opacity="0.2" />
      <rect x="193" y="70" width="10" height="10" rx="1" fill="white" />
      <rect x="174" y="85" width="22" height="15" rx="1" fill="#D4D4D4" />
      {/* Building 6 */}
      <rect x="218" y="45" width="28" height="55" rx="2" fill="#EBEBEB" />
      <rect x="223" y="50" width="7" height="7" rx="1" fill="white" />
      <rect x="233" y="50" width="7" height="7" rx="1" fill="#FF385C" opacity="0.25" />
      <rect x="223" y="61" width="7" height="7" rx="1" fill="white" />
      <rect x="233" y="61" width="7" height="7" rx="1" fill="white" />
      <rect x="223" y="72" width="7" height="7" rx="1" fill="white" />
      <rect x="233" y="72" width="7" height="7" rx="1" fill="#FF385C" opacity="0.2" />
      <rect x="225" y="85" width="16" height="15" rx="1" fill="#D4D4D4" />
      {/* Building 7 - small far right */}
      <rect x="252" y="62" width="20" height="38" rx="2" fill="#E5E5E5" />
      <rect x="256" y="67" width="5" height="5" rx="1" fill="white" />
      <rect x="264" y="67" width="5" height="5" rx="1" fill="white" />
      <rect x="256" y="76" width="5" height="5" rx="1" fill="#FF385C" opacity="0.2" />
      {/* Stars/sparkles */}
      <circle cx="90" cy="25" r="1.5" fill="#FF385C" opacity="0.4" />
      <circle cx="170" cy="20" r="1" fill="#FF385C" opacity="0.3" />
      <circle cx="240" cy="30" r="1.5" fill="#FF385C" opacity="0.4" />
      {/* Location pin */}
      <circle cx="141" cy="20" r="6" fill="#FF385C" />
      <circle cx="141" cy="20" r="3" fill="white" />
      <line x1="141" y1="26" x2="141" y2="31" stroke="#FF385C" strokeWidth="1.5" />
    </svg>
  )
}

function WhatsAppChatWidget() {
  return (
    <div className="bg-white rounded-2xl border border-[#EBEBEB] premium-shadow-lg overflow-hidden max-w-sm mx-auto">
      {/* Chat header */}
      <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#128C7E] flex-shrink-0">
          <span className="text-white text-sm font-bold">UA</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-white text-[13px] font-semibold leading-tight truncate">Urban Atlas Community</div>
          <div className="text-[#A3CEC9] text-[11px] flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[#25D366] animate-pulse" />
            <span>online • 128 members</span>
          </div>
        </div>
        <WhatsAppIcon className="h-5 w-5 text-white opacity-70" />
      </div>

      {/* Chat background */}
      <div className="bg-[#ECE5DD] px-4 py-4 min-h-[220px] flex flex-col gap-3">
        {/* Date separator */}
        <div className="flex justify-center">
          <span className="bg-white/80 text-[#6A6A6A] text-[10px] font-medium px-3 py-1 rounded-full">
            Today
          </span>
        </div>

        {/* Incoming message */}
        <div className="flex justify-start">
          <div className="max-w-[85%]">
            <div className="bg-white rounded-2xl rounded-tl-sm px-3.5 py-2.5 premium-shadow-sm">
              <div className="text-[11px] font-bold text-[#FF385C] mb-1">Urban Atlas 📍</div>
              <div className="text-[12.5px] text-[#222222] leading-[1.5]">
                <span className="font-semibold">New Inventory Alert 🚨</span><br />
                Corner Plot — Gomti Nagar, Sec-7<br />
                <span className="text-[#6A6A6A]">2400 sqft • 12m Road Width</span><br />
                <span className="font-semibold text-[#222222]">Asking: ₹1.95 Cr</span><br />
                <span className="text-[#6A6A6A] text-[11px]">Double-side open, adj. LDA green park</span>
              </div>
              <div className="flex items-center justify-end gap-1 mt-1.5">
                <span className="text-[10px] text-[#6A6A6A]">11:30 AM</span>
                <svg className="h-3 w-3 text-[#53BDEB]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Second message */}
        <div className="flex justify-start">
          <div className="max-w-[75%]">
            <div className="bg-white rounded-2xl rounded-tl-sm px-3.5 py-2 premium-shadow-sm">
              <div className="text-[12px] text-[#222222] leading-[1.5]">
                🔗 LDA Verified • Freehold<br />
                <span className="text-[#6A6A6A] text-[11px]">Interested? Reply to this message</span>
              </div>
              <div className="flex items-center justify-end gap-1 mt-1">
                <span className="text-[10px] text-[#6A6A6A]">11:30 AM</span>
                <svg className="h-3 w-3 text-[#53BDEB]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Typing indicator */}
        <div className="flex justify-start">
          <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 premium-shadow-sm">
            <div className="flex gap-1 items-center">
              {[0, 1, 2].map(i => (
                <span
                  key={i}
                  className="h-2 w-2 rounded-full bg-[#6A6A6A]"
                  style={{ animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Chat input */}
      <div className="bg-[#F7F7F7] border-t border-[#EBEBEB] px-3 py-2.5 flex items-center gap-2">
        <div className="flex-1 bg-white rounded-full px-4 py-2 text-[12px] text-[#6A6A6A] border border-[#EBEBEB]">
          Type a message...
        </div>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm hover:bg-[#20BA5A] transition-colors flex-shrink-0"
          aria-label="Open WhatsApp"
        >
          <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 2L11 13" />
            <path d="M22 2L15 22 11 13 2 9l20-7z" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default function BrokerSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.broker-left', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        x: -40, opacity: 0, duration: 0.8, ease: 'power2.out',
      })
      gsap.from('.broker-right', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        x: 40, opacity: 0, duration: 0.8, ease: 'power2.out',
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const brokerChecklist = [
    'Organize inventory efficiently',
    'Access serious buyers directly',
    'Reduce duplicate inquiries',
    'Improve listing visibility',
    'Manage opportunities better',
  ]

  const communityChecklist = [
    'Verified inventory drops',
    'Off-market opportunities',
    'Locality updates & alerts',
    'Distress deal notifications',
    'Serious buyer discussions',
  ]

  return (
    <section ref={sectionRef} id="broker-network" className="w-full bg-[#F7F7F7] py-20 lg:py-28 border-t border-[#EBEBEB]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Left: Broker column */}
          <div className="broker-left flex flex-col gap-7">
            <div className="flex flex-col gap-4">
              <span className="section-label">Collaborative Moat</span>
              <h2 className="font-extrabold tracking-tight text-[#222222] leading-[1.15]">
                Built to Work With Brokers, Not Against Them
              </h2>
              <p className="text-[#6A6A6A] text-base leading-relaxed">
                Unlike portals that disintermediate brokers, Urban Atlas is built as a broker-first
                intelligence network. We help brokers organize, access and monetize their inventory
                more efficiently than ever before.
              </p>
            </div>

            {/* Checklist */}
            <ul className="flex flex-col gap-3">
              {brokerChecklist.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#FF385C] flex-shrink-0" strokeWidth={2} />
                  <span className="text-[14.5px] font-medium text-[#222222]">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex flex-col gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#FF385C] hover:bg-[#E31C5F] px-7 py-3.5 text-[14px] font-bold text-white shadow-sm hover:shadow-md transition-all duration-200 w-fit group"
              >
                <span>Join Broker Network</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="inline-flex items-center gap-2 bg-white border border-[#EBEBEB] px-4 py-2 rounded-full w-fit">
                <CheckCircle className="h-3.5 w-3.5 text-[#10B981]" />
                <span className="text-[11.5px] font-semibold text-[#222222]">100% Broker-Friendly Protocol</span>
              </div>
            </div>

            {/* City illustration */}
            <div className="mt-2 rounded-2xl bg-white border border-[#EBEBEB] p-5 premium-shadow-sm">
              <CityIllustration />
            </div>
          </div>

          {/* Right: Community column */}
          <div className="broker-right flex flex-col gap-7">
            <div className="flex flex-col gap-4">
              <span className="section-label">Instant Updates</span>
              <h2 className="font-extrabold tracking-tight text-[#222222] leading-[1.15]">
                Join the Verified Resale Network
              </h2>
              <p className="text-[#6A6A6A] text-base leading-relaxed">
                Be part of our exclusive WhatsApp community where verified inventory alerts,
                off-market deals and locality intelligence are shared in real-time with serious buyers
                and trusted brokers.
              </p>
            </div>

            {/* Community checklist */}
            <ul className="flex flex-col gap-3">
              {communityChecklist.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#25D366]/10">
                    <span className="h-2 w-2 rounded-full bg-[#25D366]" />
                  </div>
                  <span className="text-[14.5px] font-medium text-[#222222]">{item}</span>
                </li>
              ))}
            </ul>

            {/* WhatsApp CTA */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-full bg-[#25D366] hover:bg-[#20BA5A] px-7 py-4 text-[15px] font-bold text-white shadow-md hover:shadow-lg transition-all duration-200 w-full sm:w-fit group"
            >
              <WhatsAppIcon className="h-5 w-5" />
              <span>Join WhatsApp Community</span>
            </a>

            {/* Mock WhatsApp Widget */}
            <WhatsAppChatWidget />
          </div>

        </div>
      </div>
    </section>
  )
}
