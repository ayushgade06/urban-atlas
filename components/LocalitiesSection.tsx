"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function LocalitiesSection() {
  const localities = [
    {
      name: "Gomti Nagar",
      description: "Premium resale inventory with strong long-term demand.",
      tag: "Prime Market",
      // Modern architectural vector lines representation (highly editorial)
      svg: (
        <svg viewBox="0 0 400 240" className="w-full h-full object-cover bg-rose-50/50" fill="none">
          <path d="M40 200 L360 200" stroke="#FF385C" strokeWidth="2" strokeLinecap="round" />
          <rect x="80" y="100" width="80" height="100" rx="6" fill="#FFFFFF" stroke="#222222" strokeWidth="2" />
          <rect x="200" y="70" width="100" height="130" rx="6" fill="#FFFFFF" stroke="#222222" strokeWidth="2" />
          <line x1="120" y1="120" x2="120" y2="180" stroke="#EBEBEB" strokeWidth="12" strokeLinecap="round" />
          <line x1="250" y1="90" x2="250" y2="170" stroke="#EBEBEB" strokeWidth="12" strokeLinecap="round" />
          <circle cx="280" cy="110" r="4" fill="#FF385C" />
          <circle cx="100" cy="140" r="4" fill="#FF385C" />
          <path d="M160 50 C200 80 230 40 280 60" stroke="#FF385C" strokeWidth="1" strokeDasharray="3 3" />
        </svg>
      )
    },
    {
      name: "Jankipuram",
      description: "Mature residential sectors with active resale movement.",
      tag: "Stable Growth",
      svg: (
        <svg viewBox="0 0 400 240" className="w-full h-full object-cover bg-blue-50/50" fill="none">
          <path d="M40 200 L360 200" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
          <rect x="90" y="110" width="100" height="90" rx="6" fill="#FFFFFF" stroke="#222222" strokeWidth="2" />
          <rect x="220" y="110" width="100" height="90" rx="6" fill="#FFFFFF" stroke="#222222" strokeWidth="2" />
          <circle cx="140" cy="145" r="14" fill="#3B82F6" fillOpacity="0.05" stroke="#3B82F6" strokeWidth="1.5" />
          <circle cx="270" cy="145" r="14" fill="#3B82F6" fillOpacity="0.05" stroke="#3B82F6" strokeWidth="1.5" />
          <line x1="140" y1="140" x2="140" y2="150" stroke="#3B82F6" strokeWidth="2" />
          <line x1="270" y1="140" x2="270" y2="150" stroke="#3B82F6" strokeWidth="2" />
        </svg>
      )
    },
    {
      name: "Jankipuram Vistar",
      description: "Emerging residential belt with growing inventory opportunities.",
      tag: "High Activity",
      svg: (
        <svg viewBox="0 0 400 240" className="w-full h-full object-cover bg-purple-50/50" fill="none">
          <path d="M40 200 L360 200" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" />
          <rect x="70" y="130" width="70" height="70" rx="6" fill="#FFFFFF" stroke="#222222" strokeWidth="2" />
          <rect x="160" y="100" width="80" height="100" rx="6" fill="#FFFFFF" stroke="#222222" strokeWidth="2" />
          <rect x="260" y="70" width="70" height="130" rx="6" fill="#FFFFFF" stroke="#222222" strokeWidth="2" />
          <circle cx="105" cy="165" r="6" fill="#8B5CF6" />
          <circle cx="200" cy="135" r="6" fill="#8B5CF6" />
          <circle cx="295" cy="105" r="6" fill="#8B5CF6" />
        </svg>
      )
    },
    {
      name: "Awas Vikas",
      description: "Structured residential layouts with legally safer inventory.",
      tag: "Govt Structured",
      svg: (
        <svg viewBox="0 0 400 240" className="w-full h-full object-cover bg-amber-50/50" fill="none">
          <path d="M40 200 L360 200" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
          <rect x="80" y="90" width="240" height="110" rx="8" fill="#FFFFFF" stroke="#222222" strokeWidth="2" />
          <line x1="160" y1="90" x2="160" y2="200" stroke="#EBEBEB" strokeWidth="2" />
          <line x1="240" y1="90" x2="240" y2="200" stroke="#EBEBEB" strokeWidth="2" />
          <circle cx="120" cy="145" r="8" fill="#F59E0B" fillOpacity="0.2" />
          <circle cx="200" cy="145" r="8" fill="#F59E0B" fillOpacity="0.2" />
          <circle cx="280" cy="145" r="8" fill="#F59E0B" fillOpacity="0.2" />
        </svg>
      )
    },
    {
      name: "Indira Nagar",
      description: "Established residential locality with strong liquidity.",
      tag: "Mature Core",
      svg: (
        <svg viewBox="0 0 400 240" className="w-full h-full object-cover bg-emerald-50/50" fill="none">
          <path d="M40 200 L360 200" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
          <rect x="110" y="80" width="180" height="120" rx="8" fill="#FFFFFF" stroke="#222222" strokeWidth="2" />
          <circle cx="200" cy="140" r="24" stroke="#10B981" strokeWidth="2" strokeDasharray="4 4" />
          <circle cx="200" cy="140" r="4" fill="#10B981" />
        </svg>
      )
    },
    {
      name: "Shaheed Path",
      description: "High-growth corridors with improving connectivity.",
      tag: "Infrastructure Hub",
      svg: (
        <svg viewBox="0 0 400 240" className="w-full h-full object-cover bg-red-50/50" fill="none">
          <path d="M40 200 L360 200" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
          <path d="M60 200 C120 120 280 120 340 200" stroke="#EF4444" strokeWidth="2" strokeDasharray="6 6" />
          <rect x="160" y="80" width="80" height="60" rx="6" fill="#FFFFFF" stroke="#222222" strokeWidth="2" />
          <circle cx="200" cy="110" r="5" fill="#EF4444" />
        </svg>
      )
    }
  ];

  return (
    <section id="localities" className="w-full bg-[#FFFFFF] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col gap-4">
            <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#FF385C]">
              Our Focus Localities
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#222222] leading-[1.2]">
              High-Activity Residential <br />
              Micro-Markets in Lucknow
            </h2>
            <p className="text-[#6A6A6A] text-base font-medium max-w-[500px]">
              We focus exclusively on residential micro-markets that feature verified land titles, high transaction volume, and verified infrastructure development.
            </p>
          </div>
          <div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-half px-6 py-3.5 text-[14px] font-bold text-[#222222] bg-white hover:bg-[#F7F7F7] transition-all duration-200"
            >
              <span>Explore All Localities</span>
              <ArrowUpRight className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

        {/* 6 Locality Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {localities.map((loc, idx) => (
            <div
              key={idx}
              className="group flex flex-col gap-5 border border-half rounded-2xl p-5 hover:border-[#FF385C]/35 hover:scale-[1.01] transition-all duration-300 bg-white premium-shadow-sm"
            >
              {/* Image container containing high fidelity vector illustrations */}
              <div className="w-full h-[200px] rounded-xl overflow-hidden border border-half relative bg-[#F7F7F7] flex items-center justify-center">
                {loc.svg}
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm border border-half px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase text-[#222222]">
                  {loc.tag}
                </span>
              </div>

              {/* Locality Meta details */}
              <div className="flex flex-col gap-2 px-1">
                <h3 className="text-lg font-bold text-[#222222] group-hover:text-[#FF385C] transition-colors flex items-center justify-between">
                  <span>{loc.name}</span>
                  <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#FF385C]" />
                </h3>
                <p className="text-[13px] font-medium text-[#6A6A6A] leading-[1.6]">
                  {loc.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
