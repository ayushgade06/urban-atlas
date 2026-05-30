'use client'

import React, { useEffect, useRef } from 'react'
import { Home, TrendingUp, Scale, MapPin, AlertTriangle } from 'lucide-react'
import { gsap } from '@/lib/gsap'

const signals = [
  {
    icon: Home,
    title: 'Property Signals',
    color: 'bg-[#FF385C]/8 text-[#FF385C] border-[#FF385C]/15',
    items: ['Plot Size & Dimensions', 'Road Width', 'Facing Direction', 'Corner Status', 'Vacant / Occupied', 'Park Facing'],
  },
  {
    icon: TrendingUp,
    title: 'Pricing Signals',
    color: 'bg-blue-50 text-blue-600 border-blue-100',
    items: ['Asking Price', 'Expected Closing Range', 'Stale Inventory Flag', 'Fair Value Estimation', 'Price History'],
  },
  {
    icon: Scale,
    title: 'Legal Signals',
    color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    items: ['LDA Verification', 'Awas Vikas Status', 'Freehold Status', 'Ownership Confidence', 'Title Chain'],
  },
  {
    icon: MapPin,
    title: 'Locality Signals',
    color: 'bg-purple-50 text-purple-600 border-purple-100',
    items: ['Connectivity Score', 'Metro Proximity', 'Nearby Infrastructure', 'Future Development', 'Demand Index'],
  },
  {
    icon: AlertTriangle,
    title: 'Distress Signals',
    color: 'bg-amber-50 text-amber-600 border-amber-100',
    items: ['Urgency Indicators', 'Inactive Inventory', 'Motivated Sellers', 'Long-Market Listings', 'Price Drops'],
  },
]

export default function IntelligenceSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.intel-header', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        y: 30, opacity: 0, duration: 0.7, ease: 'power2.out',
      })
      gsap.from('.intel-card', {
        scrollTrigger: { trigger: '.intel-grid', start: 'top 75%' },
        y: 40, opacity: 0, stagger: 0.1, duration: 0.6, ease: 'power2.out',
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="intelligence" className="w-full bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="intel-header flex flex-col items-center text-center gap-4 mb-14">
          <span className="section-label">Data Intelligence</span>
          <h2 className="font-extrabold tracking-tight text-[#222222] leading-[1.15] max-w-2xl">
            We Track More Than Listings
          </h2>
          <p className="text-[#6A6A6A] text-base leading-relaxed max-w-xl">
            Urban Atlas layers intelligence across five signal categories to give you a complete picture
            of every resale plot — far beyond basic listing data.
          </p>
        </div>

        {/* Signal Grid */}
        <div className="intel-grid grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-5">
          {signals.map((signal, idx) => (
            <div
              key={idx}
              className="intel-card bg-white border border-[#EBEBEB] rounded-2xl p-6 flex flex-col gap-5 premium-shadow-sm hover:premium-shadow hover:scale-[1.015] hover:-translate-y-0.5 transition-all duration-250 cursor-default"
            >
              {/* Icon */}
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl border ${signal.color}`}>
                <signal.icon className="h-5 w-5" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-[15px] font-bold text-[#222222]">{signal.title}</h3>

              {/* Items list */}
              <ul className="flex flex-col gap-2">
                {signal.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-[12.5px] text-[#6A6A6A]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#EBEBEB] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
