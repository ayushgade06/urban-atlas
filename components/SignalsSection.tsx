"use client";

import React from "react";
import {
  Home,
  TrendingUp,
  ShieldAlert,
  MapPin,
  AlertOctagon,
  Check
} from "lucide-react";

export default function SignalsSection() {
  const signalGroups = [
    {
      title: "Property Signals",
      icon: Home,
      color: "text-rose-500 bg-rose-50 border-rose-100",
      bullets: [
        "Plot Size & Dimensions",
        "Road Width Verification",
        "Exact Side Facing",
        "Corner Status Validation",
        "Vacant / Occupied Audit",
        "Park Facing Premium",
      ],
    },
    {
      title: "Pricing Signals",
      icon: TrendingUp,
      color: "text-emerald-500 bg-emerald-50 border-emerald-100",
      bullets: [
        "Asking Price Tracking",
        "Expected Closing Range",
        "Stale Inventory Analysis",
        "Fair Value Estimation",
      ],
    },
    {
      title: "Legal Signals",
      icon: ShieldAlert,
      color: "text-blue-500 bg-blue-50 border-blue-100",
      bullets: [
        "LDA Authority Verification",
        "Awas Vikas Layout Match",
        "Freehold Status Registry",
        "Ownership Confidence Rating",
      ],
    },
    {
      title: "Locality Signals",
      icon: MapPin,
      color: "text-amber-500 bg-amber-50 border-amber-100",
      bullets: [
        "Sewerage & Water Connect",
        "Metro Proximity Meter",
        "Nearby Infrastructure Audit",
        "Future Development Plans",
      ],
    },
    {
      title: "Distress Signals",
      icon: AlertOctagon,
      color: "text-purple-500 bg-purple-50 border-purple-100",
      bullets: [
        "Urgency & Distress Indicators",
        "Inactive Listing Mapping",
        "Motivated Sellers Detection",
        "Long-Market Listings Flag",
      ],
    },
  ];

  return (
    <section className="w-full bg-[#F7F7F7] py-20 lg:py-28 border-t border-b border-half">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header Block */}
        <div className="flex flex-col gap-4 mb-16 text-center max-w-[680px] mx-auto">
          <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#FF385C]">
            Data Intelligence
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#222222] leading-[1.2]">
            We Track More Than Listings
          </h2>
          <p className="text-base text-[#6A6A6A] leading-relaxed">
            Every plot in our database is enriched with multiple intelligence points, allowing buyers to bypass broker filters and analyze raw transaction metrics.
          </p>
        </div>

        {/* Grid Container for 5 Signal groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {signalGroups.map((group, index) => {
            // Apply col-span-2 on the last element for desktop screens to balance the grid beautifully
            const isLast = index === signalGroups.length - 1;
            return (
              <div
                key={index}
                className={`bg-white border border-half p-6 sm:p-8 rounded-2xl premium-shadow-sm hover:scale-[1.01] transition-transform duration-200 flex flex-col gap-6 h-full ${
                  isLast ? "lg:col-span-1 md:col-span-2 lg:mx-0" : ""
                }`}
              >
                {/* Header of Signal Card */}
                <div className="flex items-center gap-4 border-b border-half pb-4">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl border ${group.color}`}>
                    <group.icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-bold text-[#222222]">
                    {group.title}
                  </h3>
                </div>

                {/* Bullet Points List */}
                <ul className="flex flex-col gap-3">
                  {group.bullets.map((bullet, bulletIdx) => (
                    <li
                      key={bulletIdx}
                      className="flex items-center gap-3 text-[13px] font-semibold text-[#6A6A6A] group/item"
                    >
                      <div className="flex h-4.5 w-4.5 items-center justify-center rounded-full bg-slate-50 border border-half text-[#222222]">
                        <Check className="h-3 w-3 text-[#FF385C]" strokeWidth={3} />
                      </div>
                      <span className="group-hover/item:text-[#222222] transition-colors">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
