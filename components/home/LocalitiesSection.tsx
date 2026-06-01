'use client'
import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'
import Link from 'next/link'
import SectionLabel from '../shared/SectionLabel'
import LocalityCard from '../shared/LocalityCard'
import { LOCALITIES } from '@/lib/localities-data'

export default function LocalitiesSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from('.locality-card-reveal', {
      opacity: 0,
      y: 40,
      stagger: 0.08,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%'
      }
    })
  }, { scope: containerRef })

  return (
    <section
      ref={containerRef}
      className="bg-white py-20 md:py-28 font-jakarta"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <SectionLabel>Localities</SectionLabel>
            <h2 className="heading-lg text-[#222222] mt-2">
              Focusing on Lucknow&apos;s Most High-Demand Belts
            </h2>
          </div>
          <div>
            <Link
              href="/localities"
              className="bg-white border border-[#EBEBEB] hover:border-[#222222] text-[#222222] font-semibold text-[0.9375rem] px-6 py-3 rounded-xl transition-all duration-200 inline-flex items-center gap-2"
            >
              Explore All Localities
              <span className="text-xs">→</span>
            </Link>
          </div>
        </div>

        {/* 6 Locality Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LOCALITIES.map((loc) => (
            <div key={loc.slug} className="locality-card-reveal">
              <LocalityCard
                slug={loc.slug}
                name={loc.name}
                badge={loc.badge}
                badgeColor={loc.badgeColor}
                description={loc.description}
                image={loc.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
