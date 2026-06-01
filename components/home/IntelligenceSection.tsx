'use client'
import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'
import SectionLabel from '../shared/SectionLabel'
import { Home, TrendingUp, Scale, MapPin, AlertTriangle } from 'lucide-react'

const SIGNALS = [
  {
    icon: Home,
    title: 'Property Signals',
    items: [
      'Plot Size & Dimensions',
      'Road Width (9m to 24m)',
      'Direction & Side Facing',
      'Corner Status & Openings',
      'Vacant vs. Occupied',
      'Park Facing / Utility Blocks'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Pricing Signals',
    items: [
      'Asking Price vs. Registry Value',
      'Expected Closing Range',
      'Stale Inventory Indicators',
      'Fair Value Estimation',
      'Historical Pricing Growth',
      'Locality Benchmark Averages'
    ]
  },
  {
    icon: Scale,
    title: 'Legal Signals',
    items: [
      'LDA Allotment Verification',
      'Awas Vikas Layout Check',
      'Freehold Status & History',
      'Ownership Confidence Scores',
      'NOC & Mutation Checklist',
      'Clearance of Encumbrances'
    ]
  },
  {
    icon: MapPin,
    title: 'Locality Signals',
    items: [
      'Access Road Infrastructure',
      'Metro Station Proximity',
      'Nearby Hospitals & Schools',
      'Utility Grid Reliability',
      'Commercial Buffer Distance',
      'Future Development Zones'
    ]
  },
  {
    icon: AlertTriangle,
    title: 'Distress Signals',
    items: [
      'Urgent Sale Indicators',
      'Inactive Listing Detection',
      'Highly Motivated Sellers',
      'Long-on-Market Audits',
      'Price Reduction Frequency',
      'Offline Broker Direct Feed'
    ]
  }
]

export default function IntelligenceSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from('.intelligence-col', {
      opacity: 0,
      y: 30,
      stagger: 0.12,
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
      id="intelligence"
      ref={containerRef}
      className="bg-[#F7F7F7] py-20 md:py-28 font-jakarta"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <SectionLabel>Data Intelligence</SectionLabel>
          <h2 className="heading-lg text-[#222222] mt-2 mb-4">
            We Track More Than Listings
          </h2>
          <p className="body-md">
            Our platform continuously gathers and structures secondary resale data, evaluating every plot across multiple verification layers.
          </p>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
          {SIGNALS.map((sig, idx) => {
            const Icon = sig.icon
            return (
              <div
                key={idx}
                className="intelligence-col bg-white border border-[#EBEBEB] p-6 rounded-2xl shadow-xs transition-all duration-300 hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFF0F3] flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-[#FF385C]" />
                </div>
                <h3 className="text-base font-bold text-[#222222] mb-4">
                  {sig.title}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {sig.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="text-xs text-[#6A6A6A] leading-relaxed flex items-start gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF385C] mt-1.5 flex-none" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
