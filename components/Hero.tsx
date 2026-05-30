'use client'

import React from 'react'
import {
  CheckCircle,
  Building,
  Target,
  Users,
  Map,
  ArrowRight,
  ShieldCheck,
  Layers,
  CircleDot,
  Compass,
} from 'lucide-react'
import { useGSAP, gsap } from '@/lib/gsap'
import AnimatedCounter from './AnimatedCounter'

const WA_LINK = 'https://wa.me/910000000000?text=Hi%2C%20I%27m%20interested%20in%20verified%20resale%20plots%20in%20Lucknow'

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.63-1.023-5.102-2.884-6.964-1.86-1.862-4.331-2.886-6.968-2.887-5.44 0-9.866 4.42-9.869 9.866-.001 1.77.461 3.5 1.338 5.031L1.993 21.848l6.196-1.625-1.542-.924zm11.536-7.14c-.302-.15-1.78-.88-2.057-.98-.277-.1-.48-.15-.68.15-.2.3-.77.98-.95 1.18-.18.2-.36.23-.66.08-.3-.15-1.27-.47-2.42-1.5-1-.89-1.67-1.99-1.87-2.33-.2-.3-.02-.47.13-.62.14-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.68-1.63-.93-2.24-.24-.59-.48-.51-.68-.52-.17-.01-.38-.01-.58-.01-.2 0-.53.07-.8.37-.28.3-1.07 1.05-1.07 2.56s1.09 2.97 1.24 3.17c.15.2 2.15 3.28 5.21 4.6 1.13.48 2.02.77 2.71.99.76.24 1.46.21 2.01.12.61-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.07-.13-.27-.2-.57-.35z" />
    </svg>
  )
}

export default function Hero() {
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
    tl.from('.hero-label', { opacity: 0, y: 20, duration: 0.5 })
      .from('.hero-h1-word', { opacity: 0, y: 30, stagger: 0.07, duration: 0.6 }, '-=0.2')
      .from('.hero-sub', { opacity: 0, y: 20, duration: 0.5 }, '-=0.3')
      .from('.hero-ctas', { opacity: 0, y: 20, duration: 0.5 }, '-=0.2')
      .from('.hero-badge', { opacity: 0, scale: 0.9, stagger: 0.07, duration: 0.4 }, '-=0.2')
      .from('.hero-stats', { opacity: 0, y: 15, stagger: 0.1, duration: 0.4 }, '-=0.1')
      .from('.hero-right', { opacity: 0, x: 50, duration: 0.9 }, 0.3)
      .from('.hero-overlay-card', { opacity: 0, y: 25, stagger: 0.15, duration: 0.6 }, 0.8)
  }, [])

  const badges = [
    { label: 'Verified Resale Inventory', icon: CheckCircle },
    { label: 'LDA & Awas Vikas', icon: Building },
    { label: 'Serious Buyers Only', icon: Target },
    { label: 'Broker Friendly', icon: Users },
    { label: 'Map-First Intelligence', icon: Map },
  ]

  const localities = [
    { name: 'Gomti Nagar', color: 'bg-[#FF385C]', pulse: true },
    { name: 'Jankipuram', color: 'bg-[#3B82F6]', pulse: false },
    { name: 'Jankipuram Vistar', color: 'bg-[#8B5CF6]', pulse: false },
    { name: 'Indira Nagar', color: 'bg-[#10B981]', pulse: false },
    { name: 'Awas Vikas', color: 'bg-[#F59E0B]', pulse: false },
    { name: 'Shaheed Path', color: 'bg-[#EF4444]', pulse: false },
  ]

  const h1Words = ['Verified', 'Resale', 'Plot', 'Intelligence', 'for']

  return (
    <section id="inventory" className="w-full bg-white pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col gap-7">

            {/* Label chip */}
            <div className="hero-label inline-flex">
              <span className="inline-flex items-center gap-2 bg-[#FF385C]/6 border border-[#FF385C]/15 text-[#FF385C] text-[12px] font-semibold px-4 py-1.5 rounded-full">
                <span>🏙️</span>
                <span>Lucknow&apos;s #1 Plot Intelligence Network</span>
              </span>
            </div>

            {/* H1 with word-by-word animation */}
            <h1 className="text-[42px] sm:text-5xl lg:text-[52px] font-extrabold tracking-tight text-[#222222] leading-[1.1]">
              {h1Words.map((word, idx) => (
                <span key={idx} className="hero-h1-word inline-block mr-[0.28em]">
                  {word}
                </span>
              ))}
              <span className="hero-h1-word inline-block text-[#FF385C] relative">
                Lucknow
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#FF385C]/15 rounded-full" />
              </span>
            </h1>

            {/* Subtext */}
            <div className="hero-sub flex flex-col gap-3">
              <p className="text-base sm:text-lg leading-[1.65] text-[#6A6A6A]">
                Discover verified resale LDA &amp; Awas Vikas plots across Gomti Nagar,
                Jankipuram, Shaheed Path and other prime residential localities.
              </p>
              <p className="text-[15px] font-medium text-[#222222] border-l-[3px] border-[#FF385C] pl-4 leading-relaxed">
                Urban Atlas is a private residential inventory intelligence network focused on
                verified opportunities, locality insights and serious buyers.
              </p>
            </div>

            {/* CTAs */}
            <div className="hero-ctas flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="group flex items-center justify-center gap-2 rounded-full bg-[#FF385C] hover:bg-[#E31C5F] px-7 py-3.5 text-[14.5px] font-bold text-white shadow-md hover:shadow-lg transition-all duration-200"
              >
                <span>Request Verified Inventory</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-[#EBEBEB] px-7 py-3.5 text-[14.5px] font-bold text-[#222222] bg-white hover:bg-[#F7F7F7] hover:border-[#25D366]/30 transition-all duration-200"
              >
                <WhatsAppIcon className="h-4.5 w-4.5 text-[#25D366]" />
                <span>Join WhatsApp Community</span>
              </a>
            </div>

            {/* Feature Badges */}
            <div className="grid grid-cols-5 gap-2 pt-5 border-t border-[#EBEBEB]/60">
              {badges.map((badge, idx) => (
                <div
                  key={idx}
                  className="hero-badge flex flex-col items-center text-center gap-2 group cursor-default"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F7F7F7] text-[#222222] border border-[#EBEBEB] transition-all duration-300 group-hover:bg-[#FF385C]/6 group-hover:border-[#FF385C]/20 group-hover:text-[#FF385C] premium-shadow-sm">
                    <badge.icon className="h-4.5 w-4.5" strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] font-semibold text-[#6A6A6A] leading-tight max-w-[62px]">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-6 flex-wrap">
              {[
                { end: 6, suffix: '', label: 'Active Localities' },
                { end: 200, suffix: '+', label: 'Verified Plots' },
                { end: 500, suffix: '+', label: 'Buyers Network' },
              ].map((stat, idx) => (
                <div key={idx} className="hero-stats flex flex-col">
                  <span className="text-2xl font-extrabold text-[#222222]">
                    <AnimatedCounter end={stat.end} suffix={stat.suffix} duration={1.8} />
                  </span>
                  <span className="text-[11px] font-semibold text-[#6A6A6A] uppercase tracking-wide">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column — Map Visualizer */}
          <div className="hero-right lg:col-span-7 flex justify-center w-full">
            <div className="w-full max-w-[600px] bg-white border border-[#EBEBEB] rounded-3xl premium-shadow-lg p-5 sm:p-7 flex flex-col gap-5">

              {/* Map + Localities sidebar */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">

                {/* Map canvas */}
                <div className="md:col-span-8 relative min-h-[280px] md:min-h-[320px] bg-[#F9FAFB] border border-[#EBEBEB] rounded-2xl overflow-hidden">
                  {/* SVG Grid */}
                  <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Grid lines */}
                    {[0,60,120,180,240,300,360,420].map(x => (
                      <line key={x} x1={x} y1="0" x2={x} y2="300" stroke="#EBEBEB" strokeWidth="0.8" />
                    ))}
                    {[0,60,120,180,240,300].map(y => (
                      <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#EBEBEB" strokeWidth="0.8" />
                    ))}
                    {/* Roads */}
                    <path d="M0 150 C80 130 160 170 240 150 C320 130 370 160 420 150" stroke="#D4D4D4" strokeWidth="3" strokeLinecap="round"/>
                    <path d="M200 0 C210 60 190 130 200 200 C210 260 195 290 200 320" stroke="#D4D4D4" strokeWidth="2.5" strokeLinecap="round"/>
                    <path d="M50 0 C60 80 40 160 70 240 C90 300 100 310 110 330" stroke="#E5E5E5" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M280 -10 C270 80 290 150 280 230 C270 290 285 310 280 330" stroke="#E5E5E5" strokeWidth="1.5" strokeLinecap="round"/>
                    {/* Gomti river */}
                    <path d="M-20 200 C80 175 130 185 190 170 C250 155 310 140 440 120" stroke="#BFDBFE" strokeWidth="10" strokeLinecap="round" opacity="0.6"/>
                    <path d="M-20 200 C80 175 130 185 190 170 C250 155 310 140 440 120" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" opacity="0.8"/>
                    {/* Park areas */}
                    <rect x="240" y="80" width="50" height="40" rx="6" fill="#BBF7D0" opacity="0.5"/>
                    <rect x="100" y="190" width="40" height="35" rx="6" fill="#BBF7D0" opacity="0.4"/>
                  </svg>

                  {/* Location pins */}
                  <div className="absolute top-[15%] right-[22%] flex items-center gap-1.5 bg-white border border-[#EBEBEB] px-2.5 py-1.5 rounded-full premium-shadow-sm hover:scale-105 transition-transform duration-200 cursor-default">
                    <span className="h-2 w-2 rounded-full bg-[#FF385C] animate-pulse" />
                    <span className="text-[10px] font-bold text-[#222222]">Gomti Nagar</span>
                  </div>
                  <div className="absolute top-[30%] left-[14%] flex items-center gap-1.5 bg-white border border-[#EBEBEB] px-2.5 py-1.5 rounded-full premium-shadow-sm hover:scale-105 transition-transform duration-200 cursor-default">
                    <span className="h-2 w-2 rounded-full bg-[#3B82F6]" />
                    <span className="text-[10px] font-bold text-[#222222]">Jankipuram</span>
                  </div>
                  <div className="absolute top-[45%] right-[12%] flex items-center gap-1.5 bg-white border border-[#EBEBEB] px-2.5 py-1.5 rounded-full premium-shadow-sm hover:scale-105 transition-transform duration-200 cursor-default">
                    <span className="h-2 w-2 rounded-full bg-[#10B981]" />
                    <span className="text-[10px] font-bold text-[#222222]">Indira Nagar</span>
                  </div>
                  <div className="absolute top-[62%] left-[12%] flex items-center gap-1.5 bg-white border border-[#EBEBEB] px-2.5 py-1.5 rounded-full premium-shadow-sm hover:scale-105 transition-transform duration-200 cursor-default">
                    <span className="h-2 w-2 rounded-full bg-[#8B5CF6]" />
                    <span className="text-[10px] font-bold text-[#222222]">Jankipuram Vistar</span>
                  </div>
                  <div className="absolute bottom-[28%] right-[38%] flex items-center gap-1.5 bg-white border border-[#EBEBEB] px-2.5 py-1.5 rounded-full premium-shadow-sm hover:scale-105 transition-transform duration-200 cursor-default">
                    <span className="h-2 w-2 rounded-full bg-[#F59E0B]" />
                    <span className="text-[10px] font-bold text-[#222222]">Awas Vikas</span>
                  </div>
                  <div className="absolute bottom-[13%] right-[15%] flex items-center gap-1.5 bg-white border border-[#EBEBEB] px-2.5 py-1.5 rounded-full premium-shadow-sm hover:scale-105 transition-transform duration-200 cursor-default">
                    <span className="h-2 w-2 rounded-full bg-[#EF4444]" />
                    <span className="text-[10px] font-bold text-[#222222]">Shaheed Path</span>
                  </div>
                  {/* Compass */}
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm p-1.5 rounded-lg border border-[#EBEBEB] text-[#6A6A6A]">
                    <Compass className="h-3.5 w-3.5" />
                  </div>
                  {/* Map label */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg border border-[#EBEBEB]">
                    <span className="text-[9px] font-bold text-[#6A6A6A] uppercase tracking-wider">Lucknow, UP</span>
                  </div>
                </div>

                {/* Active Localities sidebar */}
                <div className="md:col-span-4 flex flex-col gap-3">
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#222222] border-b border-[#EBEBEB] pb-2">
                    Active Localities
                  </h3>
                  <div className="flex flex-col gap-2.5">
                    {localities.map((loc, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 group cursor-default hover:translate-x-0.5 transition-transform"
                      >
                        <span className={`h-2.5 w-2.5 rounded-full flex-shrink-0 ${loc.color} ${loc.pulse ? 'animate-pulse' : ''}`} />
                        <span className="text-[12px] font-medium text-[#222222] group-hover:text-[#FF385C] transition-colors leading-tight">
                          {loc.name}
                        </span>
                      </div>
                    ))}
                  </div>
                  {/* Live indicator */}
                  <div className="mt-auto pt-3 border-t border-[#EBEBEB]">
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] animate-pulse" />
                      <span className="text-[10px] font-semibold text-[#10B981]">Live Network</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Overlay cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4 border-t border-[#EBEBEB]">
                {/* Intelligence Signals */}
                <div className="hero-overlay-card bg-[#F9FAFB] border border-[#EBEBEB] p-4 rounded-xl flex flex-col gap-3">
                  <div className="flex items-center gap-2 border-b border-[#EBEBEB]/60 pb-2">
                    <Layers className="h-3.5 w-3.5 text-[#FF385C]" />
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#222222]">Intelligence Signals</h4>
                  </div>
                  <ul className="flex flex-col gap-1.5">
                    {['Distress Indicators', 'Fair Price Estimation', 'Legal Confidence Layer', 'Stale Inventory Detection', 'Duplicate Listing Mapping'].map((sig, i) => (
                      <li key={i} className="flex items-center gap-2 text-[11.5px] font-medium text-[#6A6A6A]">
                        <ShieldCheck className="h-3 w-3 text-[#10B981] flex-shrink-0" />
                        {sig}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Inventory Types */}
                <div className="hero-overlay-card bg-[#F9FAFB] border border-[#EBEBEB] p-4 rounded-xl flex flex-col gap-3">
                  <div className="flex items-center gap-2 border-b border-[#EBEBEB]/60 pb-2">
                    <CircleDot className="h-3.5 w-3.5 text-[#FF385C]" />
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#222222]">Inventory Types</h4>
                  </div>
                  <ul className="flex flex-col gap-1.5">
                    {['Resale Plots', 'Corner Plots', 'Park Facing', 'Vacant Inventory', 'Off-Market Opportunities'].map((inv, i) => (
                      <li key={i} className="flex items-center gap-2 text-[11.5px] font-medium text-[#6A6A6A]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6] flex-shrink-0" />
                        {inv}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
