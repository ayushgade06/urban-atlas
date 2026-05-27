"use client";

import React from "react";
import { Check, ArrowRight } from "lucide-react";

export default function BrokerSection() {
  const benefits = [
    "Organize inventory efficiently",
    "Access serious buyers",
    "Reduce duplicate inquiries",
    "Improve listing visibility",
    "Manage opportunities better",
  ];

  return (
    <section id="broker-network" className="w-full bg-[#FFFFFF] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Benefits & Details */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#FF385C]">
                Collaborative Moat
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#222222] leading-[1.1]">
                Built to Work With Brokers, <br />
                Not Against Them
              </h2>
              <p className="text-base sm:text-lg font-medium text-[#6A6A6A] leading-[1.6]">
                Urban Atlas is a trusted infrastructure layer for residential resale
                transactions in Lucknow. We do not compete with local networks.
              </p>
            </div>

            {/* Checklist */}
            <ul className="flex flex-col gap-3.5">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center gap-3.5">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FF385C]/10 text-[#FF385C] flex-shrink-0">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </div>
                  <span className="text-[15px] font-bold text-[#222222]">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#FF385C] hover:bg-[#E31C5F] px-8 py-4 text-[15px] font-bold text-white shadow-sm transition-all duration-200"
              >
                <span>Join Broker Network</span>
                <ArrowRight className="h-4.5 w-4.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Blueprint Outline Vector Illustration */}
          <div className="lg:col-span-6 flex justify-center w-full relative">
            <div className="w-full max-w-[500px] aspect-[4/3] bg-[#F7F7F7] border border-half rounded-3xl premium-shadow flex items-center justify-center p-8 relative overflow-hidden">
              {/* Blueprint Grid pattern */}
              <div className="absolute inset-0 grid grid-cols-12 gap-0 pointer-events-none opacity-[0.03]">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="h-full border-r border-[#FF385C]"></div>
                ))}
              </div>
              
              {/* Premium Vector Skyline / Plot layout SVG */}
              <svg
                viewBox="0 0 400 300"
                className="w-full h-full text-[#FF385C]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Roads / Plots borders */}
                <path
                  d="M40 220 H360 M40 160 H360 M120 160 V220 M200 160 V220 M280 160 V220"
                  stroke="#EBEBEB"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                
                {/* Main outline of skyline */}
                <path
                  d="M60 220 V120 H100 V100 H140 V150 H180 V80 H220 V140 H260 V60 H300 V170 H340 V220"
                  stroke="#FF385C"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeOpacity="0.8"
                />
                
                {/* Secondary fine architectural grids */}
                <path
                  d="M70 130 H90 M70 150 H90 M70 170 H90 M70 190 H90 M190 90 H210 M190 110 H210 M190 130 H210 M270 70 H290 M270 90 H290 M270 110 H290"
                  stroke="#FF385C"
                  strokeWidth="1.5"
                  strokeOpacity="0.3"
                  strokeLinecap="round"
                />

                {/* Plot verification circle radar visual */}
                <circle
                  cx="200"
                  cy="150"
                  r="30"
                  stroke="#FF385C"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  strokeOpacity="0.4"
                  className="animate-spin-slow"
                />
                <circle cx="200" cy="150" r="4" fill="#FF385C" />
              </svg>

              {/* Float Badge overlay */}
              <div className="absolute bottom-6 right-6 bg-white border border-half px-4 py-2 rounded-xl premium-shadow-sm flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                <span className="text-[11px] font-bold text-[#222222]">
                  100% Broker-Friendly Protocol
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
