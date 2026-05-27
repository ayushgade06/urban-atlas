"use client";

import React from "react";
import {
  CheckCircle,
  Building,
  Target,
  Users,
  Map,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  FileCheck,
  Clock,
  Sparkles,
  MapPin,
  Layers,
  CircleDot,
  Compass
} from "lucide-react";

export default function Hero() {
  return (
    <section id="inventory" className="w-full bg-[#FFFFFF] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left Column: Headline and Badges */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#222222] leading-[1.1]">
                Verified Resale Plot <br />
                Intelligence for{" "}
                <span className="text-[#FF385C] relative inline-block">
                  Lucknow
                  <span className="absolute bottom-1 left-0 w-full h-[3px] bg-[#FF385C]/10 rounded-full"></span>
                </span>
              </h1>
              
              <div className="flex flex-col gap-4 text-base sm:text-lg leading-[1.6] text-[#6A6A6A]">
                <p>
                  Discover verified resale LDA & Awas Vikas plots across Gomti Nagar,
                  Jankipuram, Shaheed Path and other prime residential localities.
                </p>
                <p className="text-[#222222] font-medium border-l-2 border-[#FF385C] pl-4">
                  Urban Atlas is a private residential inventory intelligence network
                  focused on verified opportunities, locality insights and serious buyers.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group flex items-center justify-center gap-2 rounded-full bg-[#FF385C] hover:bg-[#E31C5F] px-8 py-4 text-[15px] font-bold text-white shadow-md hover:shadow-lg transition-all duration-200"
              >
                <span>Request Verified Inventory</span>
                <ArrowRight className="h-4.5 w-4.5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/910000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-half px-8 py-4 text-[15px] font-bold text-[#222222] bg-white hover:bg-[#F7F7F7] transition-all duration-200"
              >
                {/* WhatsApp logo */}
                <svg
                  className="h-4.5 w-4.5 text-[#25D366] fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.63-1.023-5.102-2.884-6.964-1.86-1.862-4.331-2.886-6.968-2.887-5.44 0-9.866 4.42-9.869 9.866-.001 1.77.461 3.5 1.338 5.031L1.993 21.848l6.196-1.625l-1.542-.924zm11.536-7.14c-.302-.15-1.78-.88-2.057-.98-.277-.1-.48-.15-.68.15-.2.3-.77.98-.95 1.18-.18.2-.36.23-.66.08-.3-.15-1.27-.47-2.42-1.5-1-.89-1.67-1.99-1.87-2.33-.2-.3-.02-.47.13-.62.14-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.68-1.63-.93-2.24-.24-.59-.48-.51-.68-.52-.17-.01-.38-.01-.58-.01-.2 0-.53.07-.8.37-.28.3-1.07 1.05-1.07 2.56s1.09 2.97 1.24 3.17c.15.2 2.15 3.28 5.21 4.6 1.13.48 2.02.77 2.71.99.76.24 1.46.21 2.01.12.61-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.07-.13-.27-.2-.57-.35z" />
                </svg>
                <span>Join WhatsApp Community</span>
              </a>
            </div>

            {/* Moat Badges Horizontal Bar */}
            <div className="grid grid-cols-5 gap-3 mt-4 pt-6 border-t border-half">
              {[
                { label: "Verified Resale Inventory", icon: CheckCircle },
                { label: "LDA & Awas Vikas Focused", icon: Building },
                { label: "Serious Buyers Only", icon: Target },
                { label: "Broker Friendly", icon: Users },
                { label: "Map-First Intelligence", icon: Map },
              ].map((badge, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center gap-2 group hover:scale-[1.02] transition-transform duration-200"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F7F7F7] text-[#222222] border border-half transition-all duration-300 group-hover:bg-[#FF385C]/5 group-hover:border-[#FF385C]/20 group-hover:text-[#FF385C] premium-shadow-sm">
                    <badge.icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] font-semibold text-[#6A6A6A] leading-tight max-w-[70px]">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Premium Map Visualizer Card */}
          <div className="lg:col-span-7 flex justify-center w-full">
            <div className="w-full max-w-[640px] bg-white border border-half rounded-3xl premium-shadow-lg p-6 sm:p-8 flex flex-col gap-6">
              
              {/* Top part: Map + Active Localities list */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
                
                {/* Visualizer Map canvas (Col span 8) */}
                <div className="md:col-span-8 relative min-h-[300px] md:min-h-[340px] bg-[#F7F7F7] border border-half rounded-2xl overflow-hidden flex items-center justify-center">
                  
                  {/* Clean SVG Vector Map Grid of Lucknow */}
                  <svg
                    className="absolute inset-0 h-full w-full opacity-60"
                    viewBox="0 0 400 300"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-20 60 C80 50 140 120 220 90 C300 60 350 160 420 140"
                      stroke="#EBEBEB"
                      strokeWidth="3"
                      strokeDasharray="4 4"
                    />
                    <path
                      d="M60 -20 C90 100 50 180 120 240 C190 300 240 320 320 320"
                      stroke="#EBEBEB"
                      strokeWidth="2"
                    />
                    <path
                      d="M20 280 C120 260 200 180 260 120 C320 60 380 40 420 20"
                      stroke="#EBEBEB"
                      strokeWidth="4"
                    />
                    <path
                      d="M150 -20 C180 40 220 140 160 220 C100 300 80 320 60 340"
                      stroke="#EBEBEB"
                      strokeWidth="1.5"
                    />
                    {/* Gomti River line (styled in light subtle greyish blue) */}
                    <path
                      d="M-40 220 C60 180 120 140 190 150 C260 160 320 100 440 80"
                      stroke="#E3F2FD"
                      strokeWidth="8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M-40 220 C60 180 120 140 190 150 C260 160 320 100 440 80"
                      stroke="#BBDEFB"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>

                  {/* Soft floating pins representing key regions */}
                  
                  {/* Gomti Nagar (Pink) */}
                  <div className="absolute top-[20%] right-[25%] flex items-center gap-1.5 bg-white border border-half px-2.5 py-1.5 rounded-full premium-shadow-sm hover:scale-105 transition-transform duration-200">
                    <span className="h-2 w-2 rounded-full bg-[#FF385C] animate-pulse"></span>
                    <span className="text-[10px] font-bold text-[#222222]">Gomti Nagar</span>
                  </div>

                  {/* Jankipuram (Blue) */}
                  <div className="absolute top-[35%] left-[18%] flex items-center gap-1.5 bg-white border border-half px-2.5 py-1.5 rounded-full premium-shadow-sm hover:scale-105 transition-transform duration-200">
                    <span className="h-2 w-2 rounded-full bg-[#3B82F6]"></span>
                    <span className="text-[10px] font-bold text-[#222222]">Jankipuram</span>
                  </div>

                  {/* Indira Nagar (Green) */}
                  <div className="absolute top-[40%] right-[15%] flex items-center gap-1.5 bg-white border border-half px-2.5 py-1.5 rounded-full premium-shadow-sm hover:scale-105 transition-transform duration-200">
                    <span className="h-2 w-2 rounded-full bg-[#10B981]"></span>
                    <span className="text-[10px] font-bold text-[#222222]">Indira Nagar</span>
                  </div>

                  {/* Jankipuram Vistar (Purple) */}
                  <div className="absolute top-[62%] left-[15%] flex items-center gap-1.5 bg-white border border-half px-2.5 py-1.5 rounded-full premium-shadow-sm hover:scale-105 transition-transform duration-200">
                    <span className="h-2 w-2 rounded-full bg-[#8B5CF6]"></span>
                    <span className="text-[10px] font-bold text-[#222222]">Jankipuram Vistar</span>
                  </div>

                  {/* Awas Vikas (Yellow) */}
                  <div className="absolute bottom-[28%] right-[40%] flex items-center gap-1.5 bg-white border border-half px-2.5 py-1.5 rounded-full premium-shadow-sm hover:scale-105 transition-transform duration-200">
                    <span className="h-2 w-2 rounded-full bg-[#F59E0B]"></span>
                    <span className="text-[10px] font-bold text-[#222222]">Awas Vikas</span>
                  </div>

                  {/* Shaheed Path (Orange) */}
                  <div className="absolute bottom-[15%] right-[18%] flex items-center gap-1.5 bg-white border border-half px-2.5 py-1.5 rounded-full premium-shadow-sm hover:scale-105 transition-transform duration-200">
                    <span className="h-2 w-2 rounded-full bg-[#EF4444]"></span>
                    <span className="text-[10px] font-bold text-[#222222]">Shaheed Path</span>
                  </div>

                  {/* Compass HUD */}
                  <div className="absolute bottom-3 left-3 bg-white/80 p-1.5 rounded-lg border border-half flex items-center justify-center text-[#6A6A6A]">
                    <Compass className="h-4 w-4 animate-spin-slow" />
                  </div>
                </div>

                {/* Active Localities sidebar list (Col span 4) */}
                <div className="md:col-span-4 flex flex-col gap-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#222222] border-b border-half pb-2">
                    Active Localities
                  </h3>
                  <div className="flex flex-col gap-2.5">
                    {[
                      { name: "Gomti Nagar", color: "bg-[#FF385C]" },
                      { name: "Jankipuram", color: "bg-[#3B82F6]" },
                      { name: "Jankipuram Vistar", color: "bg-[#8B5CF6]" },
                      { name: "Indira Nagar", color: "bg-[#10B981]" },
                      { name: "Awas Vikas", color: "bg-[#F59E0B]" },
                      { name: "Shaheed Path", color: "bg-[#EF4444]" },
                    ].map((loc, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 group cursor-pointer hover:translate-x-1 transition-transform"
                      >
                        <span className={`h-2.5 w-2.5 rounded-full ${loc.color} ring-4 ring-transparent group-hover:ring-gray-100 transition-all`}></span>
                        <span className="text-[13px] font-medium text-[#222222] group-hover:text-[#FF385C] transition-colors">
                          {loc.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Lower Section: Signals Panel Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-half">
                
                {/* Intelligence Signals */}
                <div className="bg-[#F7F7F7] border border-half p-4 rounded-xl flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-[#222222] border-b border-half/60 pb-2">
                    <Layers className="h-4 w-4 text-[#FF385C]" />
                    <h4 className="text-xs font-bold uppercase tracking-wider">
                      Intelligence Signals
                    </h4>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {[
                      "Distress Indicators",
                      "Fair Price Estimation",
                      "Legal Confidence Layer",
                      "Stale Inventory Detection",
                      "Duplicate Listing Mapping",
                    ].map((sig, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-[12px] font-semibold text-[#6A6A6A]">
                        <ShieldCheck className="h-3.5 w-3.5 text-[#10B981] flex-shrink-0" />
                        <span>{sig}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Inventory Types */}
                <div className="bg-[#F7F7F7] border border-half p-4 rounded-xl flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-[#222222] border-b border-half/60 pb-2">
                    <CircleDot className="h-4 w-4 text-[#FF385C]" />
                    <h4 className="text-xs font-bold uppercase tracking-wider">
                      Inventory Types
                    </h4>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {[
                      "Resale Plots",
                      "Corner Plots",
                      "Park Facing",
                      "Vacant Inventory",
                      "Off-Market Opportunities",
                    ].map((inv, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-[12px] font-semibold text-[#6A6A6A]">
                        <Sparkles className="h-3.5 w-3.5 text-[#3B82F6] flex-shrink-0" />
                        <span>{inv}</span>
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
  );
}
