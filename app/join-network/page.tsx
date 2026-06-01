import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import TallyEmbed from '@/components/shared/TallyEmbed'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import SectionLabel from '@/components/shared/SectionLabel'
import { ShieldCheck, TrendingUp, Layers, CheckCircle, MessageSquare } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Join Network | Urban Atlas',
  description: 'Join Urban Atlas to get access to verified resale plot intelligence for Lucknow.',
}

export default function JoinNetworkPage() {
  const benefits = [
    {
      icon: ShieldCheck,
      title: 'Legally Screened Inventory',
      desc: 'All listings are validated against land registries to confirm authority ownership certificates.'
    },
    {
      icon: TrendingUp,
      title: 'Historical Closing Benchmarks',
      desc: 'Access verified historical registry pricing trends in Gomti Nagar and Jankipuram sectors.'
    },
    {
      icon: Layers,
      title: 'Map-First Land Plots',
      desc: 'View actual dimensions, road widths, face directions, and corner status coordinates.'
    },
    {
      icon: CheckCircle,
      title: 'Verified Buyers Circle',
      desc: 'Connect with motivated buyers and structured brokers directly to close quickly.'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp Fast Broadcasts',
      desc: 'Receive alerts within seconds of land listing drops directly on your phone.'
    }
  ]

  return (
    <div className="font-jakarta bg-white min-h-screen flex flex-col">
      {/* Navbar always white style */}
      <Navbar staticWhite={true} />

      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Two-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column (60%): Requirement Registration */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div>
                <SectionLabel>Join Urban Atlas</SectionLabel>
                <h1 className="text-3xl md:text-5xl font-extrabold text-[#222222] mt-2 mb-4 leading-tight">
                  Get Access to Verified Resale Intelligence
                </h1>
                <p className="body-md text-[#6A6A6A] leading-relaxed">
                  Submit your parameters to receive off-market listings, transaction rate updates, and verified secondary plot profiles matching your criteria in Lucknow.
                </p>
              </div>

              {/* Inline Tally embed */}
              <div className="bg-white border border-[#EBEBEB] rounded-2xl shadow-md p-2 overflow-hidden w-full">
                <TallyEmbed formId="68MPZA" className="w-full" />
              </div>
            </div>

            {/* Right Column (40%): Value Proposition & Mock Chat */}
            <div className="lg:col-span-5 flex flex-col gap-8 lg:sticky lg:top-28">
              {/* Why Join */}
              <div className="bg-[#F7F7F7] border border-[#EBEBEB] p-6 rounded-2xl">
                <h3 className="text-base font-bold text-[#222222] mb-6">
                  Why Join Urban Atlas?
                </h3>
                <ul className="flex flex-col gap-5">
                  {benefits.map((ben, idx) => {
                    const Icon = ben.icon
                    return (
                      <li key={idx} className="flex items-start gap-3.5">
                        <div className="w-8 h-8 bg-white border border-[#EBEBEB] rounded-lg flex items-center justify-center text-[#FF385C] flex-none">
                          <Icon className="w-4.5 h-4.5" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-[#222222] mb-0.5">{ben.title}</h4>
                          <p className="text-[11px] text-[#6A6A6A] leading-relaxed">{ben.desc}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>

              {/* Platform Status Stats */}
              <div className="grid grid-cols-3 gap-4 border-y border-[#EBEBEB] py-6 text-center">
                <div>
                  <span className="text-xl font-extrabold text-[#222222]">500+</span>
                  <p className="text-[10px] text-[#6A6A6A] font-semibold mt-0.5 uppercase tracking-wider">Buyers</p>
                </div>
                <div>
                  <span className="text-xl font-extrabold text-[#222222]">200+</span>
                  <p className="text-[10px] text-[#6A6A6A] font-semibold mt-0.5 uppercase tracking-wider">Verified Plots</p>
                </div>
                <div>
                  <span className="text-xl font-extrabold text-[#222222]">6</span>
                  <p className="text-[10px] text-[#6A6A6A] font-semibold mt-0.5 uppercase tracking-wider">Localities</p>
                </div>
              </div>

              {/* Mock WhatsApp Chat Widget */}
              <div className="flex flex-col gap-4">
                <div className="border border-[#EBEBEB] rounded-2xl overflow-hidden shadow-md w-full bg-[#E5DDD5]">
                  {/* Widget Header */}
                  <div className="bg-[#E9FBF0] p-4 border-b border-[#EBEBEB] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white font-bold text-xs">
                        📍
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[#222222]">Urban Atlas Community</h4>
                        <span className="text-[10px] text-[#1DA851] font-semibold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] inline-block animate-pulse"></span>
                          online
                        </span>
                      </div>
                    </div>
                    <MessageSquare className="w-4 h-4 text-[#6A6A6A]" />
                  </div>

                  {/* Chat Area */}
                  <div className="p-4 flex flex-col gap-4">
                    <div className="bg-[#DCF8C6] p-3 rounded-tr-xl rounded-b-xl shadow-xs max-w-[85%] text-[#222222] border border-[#d2edd6] self-start">
                      <div className="text-[11px] font-bold text-[#FF385C] uppercase tracking-wider mb-1">
                        New Inventory Alert 🚨
                      </div>
                      <div className="text-xs font-semibold">Corner Plot in Gomti Nagar</div>
                      <div className="text-[11px] text-[#6A6A6A] mt-0.5">Sector-7</div>
                      <div className="text-[11px] text-[#6A6A6A]">2400 sqft | 12m Road</div>
                      <div className="text-xs font-bold mt-1 text-[#222222]">Asking: ₹1.95 Cr</div>
                      <div className="text-[10px] text-[#6A6A6A] italic mt-1">Double-side open, LDA park</div>
                      <div className="text-[9px] text-[#9A9A9A] text-right mt-1.5 flex items-center justify-end gap-0.5">
                        11:30 AM 
                        <span className="text-[#34B7F1]">✓✓</span>
                      </div>
                    </div>
                  </div>

                  {/* Input Mock */}
                  <div className="bg-white p-3 border-t border-[#EBEBEB] flex items-center justify-between gap-2">
                    <div className="bg-[#F7F7F7] px-3 py-1.5 rounded-full text-[11px] text-[#9A9A9A] flex-1">
                      Type a message...
                    </div>
                    <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center text-white text-xs">
                      →
                    </div>
                  </div>
                </div>

                <WhatsAppButton text="Already have WhatsApp? Join directly" className="w-full" />
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
