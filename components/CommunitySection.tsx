"use client";

import React from "react";
import { Check } from "lucide-react";

export default function CommunitySection() {
  const bulletPoints = [
    "Verified inventory drops",
    "Off-market opportunities",
    "Locality updates",
    "Distress deal alerts",
    "Serious buyer discussions",
  ];

  return (
    <section className="w-full bg-[#FFFFFF] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left Column: WhatsApp Community invitation */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#25D366]">
                Instant Updates
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#222222] leading-[1.1]">
                Join the Verified <br />
                Resale Network
              </h2>
              <p className="text-base sm:text-lg font-medium text-[#6A6A6A] leading-[1.6]">
                Be part of our exclusive WhatsApp community to get real-time resale deals directly on your phone.
              </p>
            </div>

            {/* Checklist */}
            <ul className="flex flex-col gap-3.5">
              {bulletPoints.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3.5">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-[#25D366] flex-shrink-0 border border-emerald-100">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </div>
                  <span className="text-[15px] font-bold text-[#222222]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <a
                href="https://wa.me/918375884211"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] px-8 py-4 text-[15px] font-bold text-white shadow-md hover:shadow-lg transition-all duration-200"
              >
                {/* WhatsApp logo */}
                <svg
                  className="h-5 w-5 text-white fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.63-1.023-5.102-2.884-6.964-1.86-1.862-4.331-2.886-6.968-2.887-5.44 0-9.866 4.42-9.869 9.866-.001 1.77.461 3.5 1.338 5.031L1.993 21.848l6.196-1.625l-1.542-.924zm11.536-7.14c-.302-.15-1.78-.88-2.057-.98-.277-.1-.48-.15-.68.15-.2.3-.77.98-.95 1.18-.18.2-.36.23-.66.08-.3-.15-1.27-.47-2.42-1.5-1-.89-1.67-1.99-1.87-2.33-.2-.3-.02-.47.13-.62.14-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.68-1.63-.93-2.24-.24-.59-.48-.51-.68-.52-.17-.01-.38-.01-.58-.01-.2 0-.53.07-.8.37-.28.3-1.07 1.05-1.07 2.56s1.09 2.97 1.24 3.17c.15.2 2.15 3.28 5.21 4.6 1.13.48 2.02.77 2.71.99.76.24 1.46.21 2.01.12.61-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.07-.13-.27-.2-.57-.35z" />
                </svg>
                <span>Join WhatsApp Community</span>
              </a>
            </div>
          </div>

          {/* Right Column: Premium High-Quality Phone Mockup */}
          <div className="lg:col-span-7 flex justify-center w-full">
            <div className="relative w-full max-w-[340px] aspect-[9/18.5] bg-[#111111] rounded-[48px] p-3 shadow-2xl ring-1 ring-white/10">
              
              {/* Internal Screen Container */}
              <div className="w-full h-full bg-[#E4DDD6] rounded-[38px] overflow-hidden flex flex-col relative">
                
                {/* iPhone Dynamic Island Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[100px] h-6 bg-black rounded-full z-30 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-900 border border-zinc-800 ml-auto mr-4"></div>
                </div>

                {/* WhatsApp Chat Header */}
                <div className="bg-[#075E54] pt-8 pb-3 px-4 flex items-center justify-between z-10">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-[#128C7E] flex items-center justify-center text-white text-[11px] font-bold">
                      UA
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[12px] font-bold text-white leading-none">
                        Urban Atlas Community
                      </span>
                      <span className="text-[9px] text-white/70 leading-none mt-1">
                        online
                      </span>
                    </div>
                  </div>
                  
                  {/* Floating call / options dots representation */}
                  <div className="flex items-center gap-3 text-white opacity-85">
                    <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a20.373 20.373 0 0 1-7.147-7.147c-.455-.441-.29-1.127.087-1.41l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                    </svg>
                  </div>
                </div>

                {/* WhatsApp Chat Body */}
                <div className="flex-1 p-3 flex flex-col gap-3 justify-end overflow-y-auto">
                  
                  {/* Floating Date tag */}
                  <div className="self-center bg-[#E1F3FC] text-[#555555] text-[9px] font-bold tracking-wide uppercase px-2.5 py-0.5 rounded-md shadow-sm">
                    Today
                  </div>

                  {/* WhatsApp Message Bubble */}
                  <div className="max-w-[85%] self-start bg-white rounded-r-2xl rounded-bl-2xl p-3 shadow-sm flex flex-col gap-2 relative">
                    {/* Small triangle hook of message bubble */}
                    <div className="absolute top-0 -left-1.5 w-2 h-2.5 bg-white clip-triangle"></div>
                    
                    {/* Header */}
                    <div className="flex items-center gap-1.5 border-b border-half pb-1 text-[#FF385C]">
                      <span className="text-[10px] font-extrabold uppercase tracking-wide">
                        New Inventory Alert 🚨
                      </span>
                    </div>

                    {/* Content details */}
                    <div className="flex flex-col gap-0.5 text-[10.5px] text-[#222222] font-semibold leading-relaxed">
                      <div>Corner Plot in Gomti Nagar</div>
                      <div className="text-[9px] text-[#6A6A6A] font-semibold">Sector-7</div>
                      <div className="mt-1 text-[#FF385C]">2400 sqft | 12m Road</div>
                      <div className="mt-0.5">Asking: <span className="text-[11px] text-[#222222] font-bold">₹1.95 Cr</span></div>
                      <div className="mt-1 text-[9px] text-[#6A6A6A] font-medium leading-tight">
                        Double-side open, adjacent to LDA green park. Ready for immediate registry.
                      </div>
                    </div>

                    {/* Miniature Map inside bubble */}
                    <div className="w-full h-[90px] rounded-lg overflow-hidden relative border border-half bg-[#F7F7F7] flex items-center justify-center">
                      <svg viewBox="0 0 160 90" className="w-full h-full opacity-70">
                        <path d="M-10 40 L170 40 M40 -10 V100 M120 -10 V100" stroke="#EBEBEB" strokeWidth="1.5" />
                        <path d="M-10 10 C30 20 60 70 120 60" stroke="#BBDEFB" strokeWidth="4" />
                        <circle cx="80" cy="40" r="15" fill="#FF385C" fillOpacity="0.1" />
                        <circle cx="80" cy="40" r="3" fill="#FF385C" />
                      </svg>
                      <div className="absolute bottom-1 right-1 bg-white/90 backdrop-blur-sm px-1.5 py-0.5 rounded text-[8px] font-bold text-[#FF385C] border border-half">
                        Sector-7 Map
                      </div>
                    </div>

                    {/* Time of Message */}
                    <div className="self-end text-[8px] text-[#6A6A6A] font-semibold mt-1 flex items-center gap-0.5">
                      <span>11:30 AM</span>
                      <svg className="h-3 w-3 text-sky-400 fill-current" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                    </div>
                  </div>

                </div>

                {/* WhatsApp Chat Input Footer */}
                <div className="bg-[#F0F0F0] px-3 py-2 flex items-center gap-2">
                  <div className="flex-1 bg-white rounded-full h-8 px-3 flex items-center text-[11px] text-[#6A6A6A]">
                    Type a message...
                  </div>
                  <div className="h-8 w-8 rounded-full bg-[#075E54] flex items-center justify-center text-white">
                    <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M2 21l21-9L2 3v7l15 2-15 2z"/>
                    </svg>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
