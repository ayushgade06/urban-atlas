'use client'
import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'
import { WHATSAPP_URL } from '@/lib/config'
import TallyModalTrigger from '../shared/TallyModalTrigger'
import AnimatedCounter from '../shared/AnimatedCounter'
import { CheckCircle, ShieldCheck, Users, Map, FileText } from 'lucide-react'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
    tl
      .from('.hero-label', { opacity: 0, y: 20, duration: 0.4 })
      .from('.hero-word', { opacity: 0, y: 28, stagger: 0.06, duration: 0.5 }, '-=0.1')
      .from('.hero-sub', { opacity: 0, y: 20, duration: 0.5 }, '-=0.2')
      .from('.hero-ctas', { opacity: 0, y: 20, duration: 0.5 }, '-=0.3')
      .from('.hero-badge', { opacity: 0, scale: 0.9, stagger: 0.05, duration: 0.35 }, '-=0.3')
      .from('.hero-stats', { opacity: 0, y: 15, duration: 0.4 }, '-=0.2')

    gsap.from('.hero-right-card', { opacity: 0, x: 60, duration: 0.9, ease: 'power2.out', delay: 0.3 })
    gsap.from('.hero-pin', { opacity: 0, scale: 0, stagger: 0.1, ease: 'back.out(1.7)', delay: 0.7, duration: 0.4 })
    gsap.from('.hero-overlay', { opacity: 0, y: 20, stagger: 0.15, duration: 0.5, delay: 0.9 })
  }, { scope: containerRef })

  const headingText = "Verified Resale Plot Intelligence for Lucknow"
  const words = headingText.split(" ")

  return (
    <section
      id="inventory"
      ref={containerRef}
      className="bg-white pt-20 pb-12 flex items-center overflow-x-hidden font-jakarta"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {/* Label Chip */}
          <div className="hero-label inline-flex items-center gap-2 bg-[#FF385C]/10 text-[#FF385C] px-3.5 py-1.5 rounded-full text-xs font-bold w-fit">
            <span>🏙️</span> Lucknow&apos;s #1 Plot Intelligence Network
          </div>

          {/* Heading */}
          <h1 className="heading-xl text-[#222222]">
            {words.map((word, idx) => (
              <span key={idx} className="inline-block mr-2.5 overflow-hidden">
                <span className="hero-word inline-block origin-top-left">
                  {word === "Lucknow" ? (
                    <span className="text-[#FF385C]">{word}</span>
                  ) : (
                    word
                  )}
                </span>
              </span>
            ))}
          </h1>

          {/* Subtext */}
          <div className="hero-sub flex flex-col gap-3 text-[#6A6A6A] text-base md:text-lg leading-relaxed max-w-2xl">
            <p>
              Navigate Lucknow&apos;s residential resale market with confidence. We track, clean, and verify plot data directly from Lucknow Development Authority (LDA) allotments and structured Awas Vikas colonies to ensure authentic listings.
            </p>
            <p>
              Avoid duplicate listings, artificial price hikes, and land disputes. Access our off-market list and get reliable data signals to secure clear-title residential plots.
            </p>
          </div>

          {/* CTAs */}
          <div className="hero-ctas flex flex-wrap items-center gap-4">
            <TallyModalTrigger className="bg-[#FF385C] hover:bg-[#E31C5F] text-white font-semibold text-[0.9375rem] px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-md hover:-translate-y-px flex items-center gap-2 cursor-pointer">
              Request Verified Inventory <span className="text-sm">→</span>
            </TallyModalTrigger>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1DA851] text-white font-semibold text-[0.9375rem] px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-md hover:-translate-y-px flex items-center gap-2"
            >
              🟢 Join WhatsApp Community
            </a>
          </div>

          {/* Feature Badges */}
          <div className="flex flex-wrap gap-2">
            {[
              "Verified Resale Inventory",
              "LDA & Awas Vikas Focused",
              "Serious Buyers Only",
              "Broker Friendly",
              "Map-First Intelligence"
            ].map((badge, idx) => (
              <span
                key={idx}
                className="hero-badge bg-[#F7F7F7] border border-[#EBEBEB] text-[#6A6A6A] text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5"
              >
                <CheckCircle className="w-3.5 h-3.5 text-[#FF385C]" />
                {badge}
              </span>
            ))}
          </div>

          {/* Stats Row */}
          <div className="hero-stats grid grid-cols-3 gap-5 pt-5 border-t border-[#EBEBEB]">
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-[#222222]">
                <AnimatedCounter end={6} suffix="+" />
              </div>
              <div className="text-xs text-[#6A6A6A] font-medium mt-1">Active Localities</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-[#222222]">
                <AnimatedCounter end={200} suffix="+" />
              </div>
              <div className="text-xs text-[#6A6A6A] font-medium mt-1">Verified Plots</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-[#222222]">
                <AnimatedCounter end={500} suffix="+" />
              </div>
              <div className="text-xs text-[#6A6A6A] font-medium mt-1">Buyers Network</div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Card Map */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="hero-right-card bg-[#F7F7F7] border border-[#EBEBEB] p-6 rounded-3xl shadow-md w-full relative">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-[#222222] uppercase tracking-wider flex items-center gap-1.5">
                <Map className="w-4 h-4 text-[#FF385C]" /> Map-First Intelligence
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse"></span>
                <span className="text-[11px] font-semibold text-[#6A6A6A]">Lucknow Live</span>
              </span>
            </div>

            {/* Mock Map View */}
            <div className="h-[280px] bg-[#EBEBEB]/40 rounded-2xl relative overflow-hidden border border-[#EBEBEB] flex items-center justify-center">
              {/* Dot Grid Map Representation */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#222_1px,transparent_1px)] [background-size:16px_16px]" />
              
              {/* Map Layout Mock Vectors */}
              <div className="absolute w-[80%] h-[2px] bg-[#D0D0D0] transform rotate-12 top-1/4 left-0" />
              <div className="absolute w-[60%] h-[2px] bg-[#D0D0D0] transform -rotate-45 bottom-1/4 right-0" />
              <div className="absolute w-[2px] h-full bg-[#D0D0D0] left-1/3 top-0" />

              {/* Pins Staggered */}
              <div className="hero-pin absolute top-[15%] left-[20%] z-10 flex flex-col items-center">
                <div className="w-3.5 h-3.5 bg-[#FF385C] rounded-full border-2 border-white shadow-xs" />
                <span className="text-[10px] font-bold bg-white text-[#222] px-2 py-0.5 rounded-md shadow-sm border border-[#EBEBEB] mt-1 whitespace-nowrap">Jankipuram</span>
              </div>

              <div className="hero-pin absolute top-[25%] left-[55%] z-10 flex flex-col items-center">
                <div className="w-3.5 h-3.5 bg-[#22C55E] rounded-full border-2 border-white shadow-xs" />
                <span className="text-[10px] font-bold bg-white text-[#22] px-2 py-0.5 rounded-md shadow-sm border border-[#EBEBEB] mt-1 whitespace-nowrap">Gomti Nagar</span>
              </div>

              <div className="hero-pin absolute top-[55%] left-[15%] z-10 flex flex-col items-center">
                <div className="w-3.5 h-3.5 bg-[#8B5CF6] rounded-full border-2 border-white shadow-xs" />
                <span className="text-[10px] font-bold bg-white text-[#22] px-2 py-0.5 rounded-md shadow-sm border border-[#EBEBEB] mt-1 whitespace-nowrap">Awas Vikas</span>
              </div>

              <div className="hero-pin absolute top-[45%] left-[70%] z-10 flex flex-col items-center">
                <div className="w-3.5 h-3.5 bg-[#3B82F6] rounded-full border-2 border-white shadow-xs" />
                <span className="text-[10px] font-bold bg-white text-[#22] px-2 py-0.5 rounded-md shadow-sm border border-[#EBEBEB] mt-1 whitespace-nowrap">Jankipuram Vistar</span>
              </div>

              <div className="hero-pin absolute top-[75%] left-[45%] z-10 flex flex-col items-center">
                <div className="w-3.5 h-3.5 bg-[#14B8A6] rounded-full border-2 border-white shadow-xs" />
                <span className="text-[10px] font-bold bg-white text-[#22] px-2 py-0.5 rounded-md shadow-sm border border-[#EBEBEB] mt-1 whitespace-nowrap">Shaheed Path</span>
              </div>

              <div className="hero-pin absolute top-[68%] left-[78%] z-10 flex flex-col items-center">
                <div className="w-3.5 h-3.5 bg-[#F59E0B] rounded-full border-2 border-white shadow-xs" />
                <span className="text-[10px] font-bold bg-white text-[#22] px-2 py-0.5 rounded-md shadow-sm border border-[#EBEBEB] mt-1 whitespace-nowrap">Indira Nagar</span>
              </div>
            </div>

            {/* Active Localities Drawer Inside */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="hero-overlay bg-white p-3 rounded-xl border border-[#EBEBEB]">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#6A6A6A] flex items-center gap-1 mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FF385C]" /> Authority Status
                </div>
                <div className="text-xs font-bold text-[#222222]">LDA & UPAVP Approved</div>
              </div>
              <div className="hero-overlay bg-white p-3 rounded-xl border border-[#EBEBEB]">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#6A6A6A] flex items-center gap-1 mb-1">
                  <Users className="w-3.5 h-3.5 text-[#FF385C]" /> Network Listings
                </div>
                <div className="text-xs font-bold text-[#222222]">214 Off-Market Plots</div>
              </div>
            </div>

            <div className="hero-overlay bg-white p-4 rounded-xl border border-[#EBEBEB] mt-3 flex items-center gap-3">
              <div className="bg-[#FFF0F3] p-2.5 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-[#FF385C]" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#222222]">Title Mutation Checking</h4>
                <p className="text-[11px] text-[#6A6A6A] mt-0.5">Automated screening against municipal records.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
