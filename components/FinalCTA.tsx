'use client'

import React, { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { gsap } from '@/lib/gsap'

const WA_LINK = 'https://wa.me/918375884211?text=Hi%2C%20I%27m%20interested%20in%20verified%20resale%20plots%20in%20Lucknow'

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.63-1.023-5.102-2.884-6.964-1.86-1.862-4.331-2.886-6.968-2.887-5.44 0-9.866 4.42-9.869 9.866-.001 1.77.461 3.5 1.338 5.031L1.993 21.848l6.196-1.625-1.542-.924zm11.536-7.14c-.302-.15-1.78-.88-2.057-.98-.277-.1-.48-.15-.68.15-.2.3-.77.98-.95 1.18-.18.2-.36.23-.66.08-.3-.15-1.27-.47-2.42-1.5-1-.89-1.67-1.99-1.87-2.33-.2-.3-.02-.47.13-.62.14-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.68-1.63-.93-2.24-.24-.59-.48-.51-.68-.52-.17-.01-.38-.01-.58-.01-.2 0-.53.07-.8.37-.28.3-1.07 1.05-1.07 2.56s1.09 2.97 1.24 3.17c.15.2 2.15 3.28 5.21 4.6 1.13.48 2.02.77 2.71.99.76.24 1.46.21 2.01.12.61-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.07-.13-.27-.2-.57-.35z" />
    </svg>
  )
}

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.final-cta-content', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        y: 40, opacity: 0, duration: 0.8, ease: 'power2.out',
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="w-full bg-white py-24 lg:py-32 border-t border-[#EBEBEB] relative overflow-hidden"
    >
      {/* Subtle dot pattern background */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(circle, #222 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Soft coral accent blurs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#FF385C]/3 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-[#FF385C]/2 blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6 sm:px-8 text-center">
        <div className="final-cta-content flex flex-col items-center gap-7">
          <div className="flex flex-col gap-4">
            <span className="section-label mx-auto">Get Started</span>
            <h2 className="font-extrabold tracking-tight text-[#222222] leading-[1.15]">
              Looking for a Verified Resale Plot in Lucknow?
            </h2>
            <p className="text-[#6A6A6A] text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
              Discover curated inventory, hidden opportunities and structured residential intelligence
              — all verified, organized and delivered directly to serious buyers.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              href="#inventory"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF385C] hover:bg-[#E31C5F] px-8 py-4 text-[15px] font-bold text-white shadow-md hover:shadow-lg transition-all duration-200 group"
            >
              <span>Request Inventory Access</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-[#25D366] px-8 py-4 text-[15px] font-bold text-[#222222] hover:bg-[#25D366]/5 transition-all duration-200"
            >
              <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
              <span>Talk on WhatsApp</span>
            </a>
          </div>

          {/* Trust line */}
          <p className="text-[12px] text-[#6A6A6A] font-medium">
            No spam. No broker pressure. Just verified intelligence.
          </p>
        </div>
      </div>
    </section>
  )
}
