"use client";

import React from "react";
import { Database, ShieldCheck, UserCheck, ArrowRight } from "lucide-react";

export default function WorkflowSection() {
  return (
    <section id="intelligence" className="w-full bg-[#FFFFFF] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading, Paragraph & CTA */}
          <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-24">
            <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#FF385C]">
              Our Approach
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#222222] leading-[1.1]">
              A Structured Intelligence Layer for Residential Resale
            </h2>
            <p className="text-base leading-[1.6] text-[#6A6A6A]">
              We organize fragmented resale inventory into a structured, verified
              intelligence system combining broker inventory, locality intelligence,
              pricing analysis and legal confidence signals.
            </p>
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF385C] hover:bg-[#E31C5F] px-6 py-3.5 text-[14px] font-bold text-white shadow-sm transition-all duration-200"
              >
                Learn More About Our Intelligence
              </a>
            </div>
          </div>

          {/* Right Column: 3-Step Horizontal/Vertical Workflow */}
          <div className="lg:col-span-8 flex flex-col gap-8 w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch relative">
              
              {/* Step 1: Inventory Aggregation */}
              <div className="bg-white border border-half p-6 sm:p-8 rounded-2xl premium-shadow-sm flex flex-col gap-5 hover:scale-[1.01] transition-transform duration-200 relative">
                {/* Arrow Spacer for desktop (shown between Step 1 & 2) */}
                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-[#EBEBEB]">
                  <ArrowRight className="h-5 w-5" />
                </div>
                
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF385C]/5 text-[#FF385C] border border-[#FF385C]/15">
                  <Database className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[15px] font-bold text-[#222222]">
                    1. Inventory Aggregation
                  </h3>
                  <p className="text-[13px] font-medium text-[#6A6A6A] leading-[1.6]">
                    We collect resale inventory from local brokers, public listings, field
                    verification and private networks.
                  </p>
                </div>
              </div>

              {/* Step 2: Verification & Structuring */}
              <div className="bg-white border border-half p-6 sm:p-8 rounded-2xl premium-shadow-sm flex flex-col gap-5 hover:scale-[1.01] transition-transform duration-200 relative">
                {/* Arrow Spacer for desktop (shown between Step 2 & 3) */}
                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-[#EBEBEB]">
                  <ArrowRight className="h-5 w-5" />
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-500 border border-emerald-100">
                  <ShieldCheck className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[15px] font-bold text-[#222222]">
                    2. Verification & Structuring
                  </h3>
                  <p className="text-[13px] font-medium text-[#6A6A6A] leading-[1.6]">
                    Inventory is organized using pricing signals, locality data and legal
                    confidence indicators.
                  </p>
                </div>
              </div>

              {/* Step 3: Serious Buyer Access */}
              <div className="bg-white border border-half p-6 sm:p-8 rounded-2xl premium-shadow-sm flex flex-col gap-5 hover:scale-[1.01] transition-transform duration-200">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-500 border border-blue-100">
                  <UserCheck className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[15px] font-bold text-[#222222]">
                    3. Serious Buyer Access
                  </h3>
                  <p className="text-[13px] font-medium text-[#6A6A6A] leading-[1.6]">
                    Verified buyers receive curated inventory and locality-level resale
                    intelligence.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
