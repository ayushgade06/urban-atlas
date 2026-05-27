"use client";

import React from "react";
import { XCircle, AlertTriangle, EyeOff, SearchCode, ShieldAlert, BadgeHelp } from "lucide-react";

export default function ProblemSection() {
  const problems = [
    {
      title: "Fake Availability",
      description: "Over 40% of listings on traditional property portals do not exist or are already sold.",
      icon: XCircle,
    },
    {
      title: "Inflated Pricing",
      description: "Direct-to-seller asking rates are artificially pumped up by layered networks of brokers.",
      icon: AlertTriangle,
    },
    {
      title: "Duplicate Listings",
      description: "The same resale plot is listed 10+ times with different coordinates, sizes, and price expectations.",
      icon: SearchCode,
    },
    {
      title: "Hidden Inventory",
      description: "The highest quality off-market deals are held back in private diaries of offline brokers.",
      icon: EyeOff,
    },
    {
      title: "Legal Uncertainty",
      description: "Resale plots lack readily available title verification records and land registry assurances.",
      icon: ShieldAlert,
    },
    {
      title: "No Pricing Transparency",
      description: "Historical transaction register values are obscured, leaving buyers without reference data.",
      icon: BadgeHelp,
    },
  ];

  return (
    <section className="w-full bg-[#F7F7F7] py-20 lg:py-28 border-t border-b border-half">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          {/* Header block */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#FF385C]">
              The Problem
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#222222] leading-[1.2]">
              Residential Plot Buying <br />
              is Highly Fragmented
            </h2>
          </div>
          <div className="lg:col-span-7 text-[#6A6A6A] text-base leading-relaxed lg:pt-6">
            Lucknow's plot market operates on fragmented communication channels, manually maintained
            diaries, and unverified data. Buyers are forced to navigate a high-risk landscape without
            confidence, structured advice, or direct transparency.
          </div>
        </div>

        {/* 6 Grid Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {problems.map((prob, idx) => (
            <div
              key={idx}
              className="bg-white border border-half p-6 sm:p-8 rounded-2xl premium-shadow-sm hover:scale-[1.01] transition-transform duration-200 flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF385C]/5 text-[#FF385C] border border-[#FF385C]/15">
                  {/* Custom Minimal Red Cross Indicator */}
                  <svg
                    className="h-4.5 w-4.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m15 9-6 6" />
                    <path d="m9 9 6 6" />
                  </svg>
                </div>
                <h3 className="text-[16px] font-bold text-[#222222]">
                  {prob.title}
                </h3>
              </div>
              <p className="text-[13px] font-medium text-[#6A6A6A] leading-[1.6]">
                {prob.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
