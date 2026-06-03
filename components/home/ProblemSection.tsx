'use client'
import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'
import SectionLabel from '../shared/SectionLabel'
import { AlertCircle } from 'lucide-react'

const PROBLEMS = [
  {
    title: 'Fake Availability',
    description: 'Over 40% of listings on traditional portals do not exist or are already sold.'
  },
  {
    title: 'Inflated Pricing',
    description: 'Asking rates are artificially pumped up by layered broker networks.'
  },
  {
    title: 'Duplicate Listings',
    description: 'Same plot listed 10+ times with different coordinates, sizes, and prices.'
  },
  {
    title: 'Hidden Inventory',
    description: 'Best off-market deals are held in private diaries of offline brokers.'
  },
  {
    title: 'Legal Uncertainty',
    description: 'Resale plots lack readily available title verification records.'
  },
  {
    title: 'No Pricing Transparency',
    description: 'Historical transaction values are obscured, leaving buyers without reference data.'
  }
]

export default function ProblemSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from('.problem-card', {
      opacity: 0,
      y: 40,
      stagger: 0.1,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%'
      }
    })

    gsap.from('.problem-title-reveal', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%'
      }
    })
  }, { scope: containerRef })

  return (
    <section
      ref={containerRef}
      className="bg-white py-14 md:py-20 font-jakarta"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="problem-title-reveal text-center max-w-3xl mx-auto mb-10">
          <SectionLabel>The Problem</SectionLabel>
          <h2 className="heading-lg text-[#222222] mt-2 mb-4">
            Residential Plot Buying is Highly Fragmented
          </h2>
          <p className="body-lg">
            Lucknow’s residential resale plot market suffers from systemic inefficiencies, making it difficult for serious buyers to identify clear-title plots at fair market rates.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEMS.map((prob, idx) => (
            <div
              key={idx}
              className="problem-card bg-[#F7F7F7] border border-[#EBEBEB] p-8 rounded-2xl transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_10px_30px_rgba(0,0,0,0.06),_0_2px_6px_rgba(0,0,0,0.04)]"
            >
              <div className="w-10 h-10 bg-[#FFF0F3] rounded-xl flex items-center justify-center mb-6">
                <AlertCircle className="w-5 h-5 text-[#FF385C]" />
              </div>
              <h3 className="text-lg font-bold text-[#222222] mb-3">
                {prob.title}
              </h3>
              <p className="text-sm text-[#6A6A6A] leading-relaxed">
                {prob.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
