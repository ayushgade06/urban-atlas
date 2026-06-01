'use client'
import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'
import Link from 'next/link'
import SectionLabel from '../shared/SectionLabel'
import { Database, Shield, Users } from 'lucide-react'

const STEPS = [
  {
    num: '01',
    icon: Database,
    title: 'Inventory Aggregation',
    description: 'We collect resale inventory from local brokers, public listings, field verification, and private networks.'
  },
  {
    num: '02',
    icon: Shield,
    title: 'Verification & Structuring',
    description: 'Inventory is organized using pricing signals, locality data, and legal confidence indicators.'
  },
  {
    num: '03',
    icon: Users,
    title: 'Serious Buyer Access',
    description: 'Verified buyers receive curated inventory and locality-level resale intelligence.'
  }
]

export default function ApproachSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Left side slide in
    gsap.from('.approach-left', {
      opacity: 0,
      x: -30,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%'
      }
    })

    // Steps stagger
    gsap.from('.approach-step', {
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%'
      }
    })

    // Line draw
    gsap.from(lineRef.current, {
      scaleY: 0,
      duration: 0.8,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%'
      }
    })
  }, { scope: containerRef })

  return (
    <section
      ref={containerRef}
      className="bg-[#F7F7F7] py-20 md:py-28 font-jakarta overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column (40%) */}
        <div className="approach-left lg:col-span-5 flex flex-col gap-5 sticky top-28">
          <SectionLabel>Our Approach</SectionLabel>
          <h2 className="heading-lg text-[#222222]">
            A Structured Method to Verify Land
          </h2>
          <p className="body-md">
            We are not brokers, and we do not host a public directory of unverified properties. Instead, we run a strict validation process to screen and verify land listings.
          </p>
          <p className="body-md">
            Our technology maps property coordinates and cross-checks prices against historical records to create a transparent, reliable catalog of plots.
          </p>
          <div>
            <Link
              href="/join-network"
              className="text-[#FF385C] font-semibold text-sm hover:underline inline-flex items-center gap-1 mt-2"
            >
              Get started with our network
              <span className="text-xs">→</span>
            </Link>
          </div>
        </div>

        {/* Right Column (60%) */}
        <div className="lg:col-span-7 flex flex-col gap-12 relative pl-8 lg:pl-16">
          {/* Vertical Dashed Line */}
          <div
            ref={lineRef}
            className="absolute left-[39px] lg:left-[71px] top-6 bottom-6 w-[2px] border-l-2 border-dashed border-[#FF385C]/30 origin-top transform"
          />

          {STEPS.map((step, idx) => {
            const Icon = step.icon
            return (
              <div
                key={idx}
                className="approach-step flex items-start gap-6 relative z-10"
              >
                {/* Bullet/Number */}
                <div className="flex-none w-10 h-10 lg:w-16 lg:h-16 rounded-full bg-white border-2 border-[#FF385C] flex items-center justify-center shadow-xs">
                  <span className="text-[#FF385C] font-extrabold text-sm lg:text-lg">
                    {step.num}
                  </span>
                </div>

                {/* Content */}
                <div className="bg-white p-6 rounded-2xl border border-[#EBEBEB] shadow-xs flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="bg-[#FFF0F3] p-1.5 rounded-lg">
                      <Icon className="w-4 h-4 text-[#FF385C]" />
                    </div>
                    <h3 className="text-base lg:text-lg font-bold text-[#222222]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#6A6A6A] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
