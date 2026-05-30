'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { gsap } from '@/lib/gsap'

const localities = [
  {
    name: 'Gomti Nagar',
    badge: 'Prime Market',
    badgeColor: 'bg-[#FF385C]/10 text-[#FF385C] border-[#FF385C]/20',
    description: 'LDA developed, premium residential corridor',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f28f3b58?w=500&q=80',
  },
  {
    name: 'Jankipuram',
    badge: 'Stable Growth',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    description: 'Established residential market, wide roads',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&q=80',
  },
  {
    name: 'Jankipuram Vistar',
    badge: 'High Activity',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-100',
    description: 'Fast-growing extension with new developments',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&q=80',
  },
  {
    name: 'Awas Vikas',
    badge: 'Govt Structured',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-100',
    description: 'Awas Vikas Parishad planned localities',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&q=80',
  },
  {
    name: 'Indira Nagar',
    badge: 'Mature Core',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-100',
    description: 'Dense, high-demand mature residential zone',
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=500&q=80',
  },
  {
    name: 'Shaheed Path',
    badge: 'Infrastructure',
    badgeColor: 'bg-teal-50 text-teal-700 border-teal-100',
    description: 'Metro & road corridor — rising demand zone',
    image: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=500&q=80',
  },
]

export default function LocalitiesSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.locality-header', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
      })

      gsap.from('.locality-card', {
        scrollTrigger: {
          trigger: '.locality-grid',
          start: 'top 75%',
        },
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="localities" className="w-full bg-[#F7F7F7] py-20 lg:py-28 border-t border-[#EBEBEB]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="locality-header flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="flex flex-col gap-4 max-w-xl">
            <span className="section-label">Our Focus Localities</span>
            <h2 className="font-extrabold tracking-tight text-[#222222] leading-[1.15]">
              High-Activity Residential Micro-Markets in Lucknow
            </h2>
            <p className="text-[#6A6A6A] text-base leading-relaxed">
              We track verified resale inventory across 6 prime residential localities —
              covering LDA, Awas Vikas, and privately developed sectors.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF385C] hover:bg-[#E31C5F] px-6 py-3 text-[14px] font-bold text-white shadow-sm hover:shadow-md transition-all duration-200 group"
            >
              <span>Explore Localities</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="locality-grid grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-5">
          {localities.map((loc, idx) => (
            <div
              key={idx}
              className="locality-card group relative bg-white rounded-2xl overflow-hidden border border-[#EBEBEB] premium-shadow-sm hover:premium-shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-[160px] sm:h-[180px] xl:h-[200px] overflow-hidden">
                <Image
                  src={loc.image}
                  alt={`${loc.name} locality`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  unoptimized
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                />
                {/* Status badge */}
                <div className="absolute top-2.5 left-2.5">
                  <span className={`inline-flex items-center border text-[9.5px] font-bold px-2 py-0.5 rounded-full ${loc.badgeColor}`}>
                    {loc.badge}
                  </span>
                </div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              {/* Card body */}
              <div className="p-3.5">
                <h3 className="text-[13px] font-bold text-[#222222] leading-tight mb-1">{loc.name}</h3>
                <p className="text-[11px] text-[#6A6A6A] leading-tight">{loc.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
