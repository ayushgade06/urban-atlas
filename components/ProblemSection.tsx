'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'

const problems = [
  {
    title: 'Fake Availability',
    description: 'Over 40% of listings on traditional property portals do not exist or are already sold, wasting buyer time and energy.',
  },
  {
    title: 'Inflated Pricing',
    description: 'Direct-to-seller asking rates are artificially pumped up by layered networks of brokers with no pricing benchmarks.',
  },
  {
    title: 'Duplicate Listings',
    description: 'The same resale plot is listed 10+ times with different coordinates, sizes, and price expectations across portals.',
  },
  {
    title: 'Hidden Inventory',
    description: 'The highest quality off-market deals are held back in private diaries of offline brokers — never reaching buyers.',
  },
  {
    title: 'Legal Uncertainty',
    description: 'Resale plots lack readily available title verification records and land registry assurances for confident decisions.',
  },
  {
    title: 'No Pricing Transparency',
    description: 'Historical transaction register values are obscured, leaving buyers without reference data or fair value baselines.',
  },
]

export default function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.problem-card', {
        scrollTrigger: {
          trigger: '.problem-section',
          start: 'top 70%',
        },
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
      })
      gsap.from('.problem-header', {
        scrollTrigger: {
          trigger: '.problem-section',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="problem-section w-full bg-[#F7F7F7] py-20 lg:py-28 border-t border-b border-[#EBEBEB]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="problem-header grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-14">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="section-label">The Problem</span>
            <h2 className="font-extrabold tracking-tight text-[#222222] leading-[1.15]">
              Residential Plot Buying is Highly Fragmented
            </h2>
          </div>
          <div className="lg:col-span-7 text-[#6A6A6A] text-base leading-relaxed lg:pt-6">
            Lucknow&apos;s plot market operates on fragmented communication channels, manually maintained
            diaries, and unverified data. Buyers are forced to navigate a high-risk landscape without
            confidence, structured advice, or direct transparency.
          </div>
        </div>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {problems.map((prob, idx) => (
            <div
              key={idx}
              className="problem-card bg-white border border-[#EBEBEB] p-6 sm:p-7 rounded-2xl premium-shadow-sm hover:shadow-md hover:scale-[1.015] transition-all duration-250 flex flex-col gap-4 cursor-default"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#FF385C]/6 text-[#FF385C] border border-[#FF385C]/15">
                  <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m15 9-6 6" />
                    <path d="m9 9 6 6" />
                  </svg>
                </div>
                <h3 className="text-[15.5px] font-bold text-[#222222]">{prob.title}</h3>
              </div>
              <p className="text-[13.5px] text-[#6A6A6A] leading-[1.65]">{prob.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
