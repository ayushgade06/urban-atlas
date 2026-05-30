'use client'

import React, { useEffect, useRef } from 'react'
import { Database, ShieldCheck, UserCheck, ArrowRight } from 'lucide-react'
import { gsap } from '@/lib/gsap'

const steps = [
  {
    number: '01',
    icon: Database,
    title: 'Inventory Aggregation',
    description:
      'We collect resale inventory from local brokers, public listings, field verification and private networks across 6 active localities in Lucknow.',
    color: 'bg-[#FF385C]/8 text-[#FF385C] border-[#FF385C]/15',
  },
  {
    number: '02',
    icon: ShieldCheck,
    title: 'Verification & Structuring',
    description:
      'Inventory is organized using pricing signals, locality data and legal confidence indicators. Duplicates are flagged, stale listings removed.',
    color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  },
  {
    number: '03',
    icon: UserCheck,
    title: 'Serious Buyer Access',
    description:
      'Verified buyers receive curated inventory and locality-level resale intelligence through our exclusive WhatsApp community and direct access.',
    color: 'bg-blue-50 text-blue-600 border-blue-100',
  },
]

export default function ApproachSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.approach-header', {
        scrollTrigger: {
          trigger: '.approach-section',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
      })

      gsap.from('.approach-step', {
        scrollTrigger: {
          trigger: '.approach-section',
          start: 'top 65%',
        },
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 0.6,
        ease: 'power2.out',
      })

      gsap.from('.approach-connector', {
        scrollTrigger: {
          trigger: '.approach-section',
          start: 'top 65%',
        },
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 0.8,
        delay: 0.3,
        ease: 'power2.inOut',
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="approach-section w-full bg-white py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="approach-header flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="flex flex-col gap-4 max-w-xl">
            <span className="section-label">Our Approach</span>
            <h2 className="font-extrabold tracking-tight text-[#222222] leading-[1.15]">
              A Structured Intelligence Layer for Residential Resale
            </h2>
            <p className="text-[#6A6A6A] text-base leading-relaxed">
              We organize fragmented resale inventory into a structured, verified intelligence system
              combining broker inventory, locality intelligence, pricing analysis and legal confidence signals.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-[#FF385C] font-semibold text-[14px] hover:gap-3 transition-all duration-200 group"
            >
              <span>Learn More About Our Intelligence</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop only) */}
          <div className="approach-connector hidden md:block absolute top-[52px] left-[16.67%] right-[16.67%] h-[2px] bg-[#EBEBEB] z-0" style={{ marginLeft: '80px', marginRight: '80px' }} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="approach-step bg-white border border-[#EBEBEB] p-6 sm:p-8 rounded-2xl premium-shadow-sm hover:premium-shadow hover:scale-[1.01] transition-all duration-250 flex flex-col gap-5 relative"
              >
                {/* Step number */}
                <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-[#FF385C] text-white text-[10px] font-black flex items-center justify-center shadow-sm">
                  {idx + 1}
                </div>

                {/* Icon */}
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${step.color}`}>
                  <step.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-[#6A6A6A] tracking-widest">{step.number}</span>
                  </div>
                  <h3 className="text-[17px] font-bold text-[#222222]">{step.title}</h3>
                  <p className="text-[13.5px] text-[#6A6A6A] leading-[1.65]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
