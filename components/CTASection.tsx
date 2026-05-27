"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contact" className="w-full bg-[#F7F7F7] py-24 lg:py-36 relative overflow-hidden border-t border-b border-half">
      
      {/* Editorial Vector Skyline background */}
      <div className="absolute bottom-0 left-0 w-full h-[120px] pointer-events-none opacity-[0.04] z-0">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-full text-[#222222]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {/* Rumi Darwaza & Ambedkar Park arches & modern structures vector outline */}
          <path
            d="M0 120 H1440 V100 C1380 90 1340 50 1300 50 C1260 50 1240 80 1200 80 C1160 80 1140 30 1100 30 C1060 30 1040 100 1000 100 C960 100 920 60 880 60 C840 60 810 120 780 120 C740 120 720 10 680 10 C640 10 600 120 560 120 C520 120 480 70 440 70 C400 70 380 100 340 100 C300 100 280 40 240 40 C200 40 160 90 120 90 C80 90 40 120 0 120Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center flex flex-col items-center gap-8">
        
        {/* Top small category label */}
        <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#FF385C] bg-[#FF385C]/5 border border-[#FF385C]/15 px-4 py-1.5 rounded-full">
          Get Started
        </span>

        {/* Closing Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight text-[#222222] leading-[1.1] max-w-[700px]">
          Looking for a Verified <br />
          Resale Plot in Lucknow?
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-[#6A6A6A] leading-[1.6] max-w-[620px]">
          Discover curated inventory, hidden opportunities and structured residential
          intelligence across Lucknow's most active resale micro-markets.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center mt-2">
          <a
            href="https://wa.me/910000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 rounded-full bg-[#FF385C] hover:bg-[#E31C5F] px-8 py-4 text-[15px] font-bold text-white shadow-md hover:shadow-lg transition-all duration-200"
          >
            <span>Request Inventory Access</span>
            <ArrowRight className="h-4.5 w-4.5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://wa.me/910000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full border border-half px-8 py-4 text-[15px] font-bold text-[#222222] bg-white hover:bg-[#F7F7F7] transition-all duration-200 shadow-sm"
          >
            {/* WhatsApp logo */}
            <svg
              className="h-4.5 w-4.5 text-[#25D366] fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.63-1.023-5.102-2.884-6.964-1.86-1.862-4.331-2.886-6.968-2.887-5.44 0-9.866 4.42-9.869 9.866-.001 1.77.461 3.5 1.338 5.031L1.993 21.848l6.196-1.625l-1.542-.924zm11.536-7.14c-.302-.15-1.78-.88-2.057-.98-.277-.1-.48-.15-.68.15-.2.3-.77.98-.95 1.18-.18.2-.36.23-.66.08-.3-.15-1.27-.47-2.42-1.5-1-.89-1.67-1.99-1.87-2.33-.2-.3-.02-.47.13-.62.14-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.68-1.63-.93-2.24-.24-.59-.48-.51-.68-.52-.17-.01-.38-.01-.58-.01-.2 0-.53.07-.8.37-.28.3-1.07 1.05-1.07 2.56s1.09 2.97 1.24 3.17c.15.2 2.15 3.28 5.21 4.6 1.13.48 2.02.77 2.71.99.76.24 1.46.21 2.01.12.61-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.07-.13-.27-.2-.57-.35z" />
            </svg>
            <span>Talk on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
