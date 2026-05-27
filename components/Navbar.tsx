"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MessageSquareCode, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-half premium-shadow-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          {/* Logo Brand Block */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#FF385C]/5 border border-[#FF385C]/20 transition-all duration-300 group-hover:scale-105">
              <span className="absolute inline-flex h-3 w-3 rounded-full bg-[#FF385C] animate-pulse-slow"></span>
              <svg
                className="h-5 w-5 text-[#FF385C]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#222222] transition-colors group-hover:text-[#FF385C]">
                Urban Atlas
              </span>
              <span className="text-[10px] font-medium tracking-wide text-[#6A6A6A] uppercase leading-none">
                Plot Intelligence for Lucknow
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="#inventory"
              className="text-[14px] font-medium text-[#6A6A6A] hover:text-[#222222] transition-colors"
            >
              Inventory
            </Link>
            <Link
              href="#localities"
              className="text-[14px] font-medium text-[#6A6A6A] hover:text-[#222222] transition-colors"
            >
              Localities
            </Link>
            <Link
              href="#intelligence"
              className="text-[14px] font-medium text-[#6A6A6A] hover:text-[#222222] transition-colors"
            >
              Intelligence
            </Link>
            <Link
              href="#broker-network"
              className="text-[14px] font-medium text-[#6A6A6A] hover:text-[#222222] transition-colors"
            >
              Broker Network
            </Link>
            <Link
              href="#about"
              className="text-[14px] font-medium text-[#6A6A6A] hover:text-[#222222] transition-colors"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-[14px] font-medium text-[#6A6A6A] hover:text-[#222222] transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="https://wa.me/910000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-half px-5 py-2.5 text-[14px] font-semibold text-[#222222] bg-white hover:bg-[#F7F7F7] hover:border-[#EBEBEB] transition-all duration-200"
            >
              {/* WhatsApp Green SVG */}
              <svg
                className="h-4.5 w-4.5 text-[#25D366] fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.63-1.023-5.102-2.884-6.964-1.86-1.862-4.331-2.886-6.968-2.887-5.44 0-9.866 4.42-9.869 9.866-.001 1.77.461 3.5 1.338 5.031L1.993 21.848l6.196-1.625l-1.542-.924zm11.536-7.14c-.302-.15-1.78-.88-2.057-.98-.277-.1-.48-.15-.68.15-.2.3-.77.98-.95 1.18-.18.2-.36.23-.66.08-.3-.15-1.27-.47-2.42-1.5-1-.89-1.67-1.99-1.87-2.33-.2-.3-.02-.47.13-.62.14-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.68-1.63-.93-2.24-.24-.59-.48-.51-.68-.52-.17-.01-.38-.01-.58-.01-.2 0-.53.07-.8.37-.28.3-1.07 1.05-1.07 2.56s1.09 2.97 1.24 3.17c.15.2 2.15 3.28 5.21 4.6 1.13.48 2.02.77 2.71.99.76.24 1.46.21 2.01.12.61-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.07-.13-.27-.2-.57-.35z" />
              </svg>
              <span>Join WhatsApp</span>
            </a>
            <a
              href="#inventory"
              className="rounded-full bg-[#FF385C] hover:bg-[#E31C5F] px-6 py-2.5 text-[14px] font-semibold text-white premium-shadow transition-all duration-200"
            >
              Request Access
            </a>
          </div>

          {/* Mobile Hamburger Menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex lg:hidden p-2 rounded-full hover:bg-[#F7F7F7] text-[#222222] transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {isOpen && (
        <div className="lg:hidden border-t border-half bg-white px-6 py-8 flex flex-col gap-6 animate-fadeIn">
          <nav className="flex flex-col gap-4">
            <Link
              href="#inventory"
              onClick={() => setIsOpen(false)}
              className="text-[16px] font-medium text-[#222222] hover:text-[#FF385C] py-2 transition-colors border-b border-half"
            >
              Inventory
            </Link>
            <Link
              href="#localities"
              onClick={() => setIsOpen(false)}
              className="text-[16px] font-medium text-[#222222] hover:text-[#FF385C] py-2 transition-colors border-b border-half"
            >
              Localities
            </Link>
            <Link
              href="#intelligence"
              onClick={() => setIsOpen(false)}
              className="text-[16px] font-medium text-[#222222] hover:text-[#FF385C] py-2 transition-colors border-b border-half"
            >
              Intelligence
            </Link>
            <Link
              href="#broker-network"
              onClick={() => setIsOpen(false)}
              className="text-[16px] font-medium text-[#222222] hover:text-[#FF385C] py-2 transition-colors border-b border-half"
            >
              Broker Network
            </Link>
            <Link
              href="#about"
              onClick={() => setIsOpen(false)}
              className="text-[16px] font-medium text-[#222222] hover:text-[#FF385C] py-2 transition-colors border-b border-half"
            >
              About
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-[16px] font-medium text-[#222222] hover:text-[#FF385C] py-2 transition-colors border-b border-half"
            >
              Contact
            </Link>
          </nav>
          <div className="flex flex-col gap-3 pt-2">
            <a
              href="https://wa.me/910000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-half py-3 text-[15px] font-semibold text-[#222222] bg-white hover:bg-[#F7F7F7]"
            >
              <svg
                className="h-5 w-5 text-[#25D366] fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.63-1.023-5.102-2.884-6.964-1.86-1.862-4.331-2.886-6.968-2.887-5.44 0-9.866 4.42-9.869 9.866-.001 1.77.461 3.5 1.338 5.031L1.993 21.848l6.196-1.625l-1.542-.924zm11.536-7.14c-.302-.15-1.78-.88-2.057-.98-.277-.1-.48-.15-.68.15-.2.3-.77.98-.95 1.18-.18.2-.36.23-.66.08-.3-.15-1.27-.47-2.42-1.5-1-.89-1.67-1.99-1.87-2.33-.2-.3-.02-.47.13-.62.14-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.68-1.63-.93-2.24-.24-.59-.48-.51-.68-.52-.17-.01-.38-.01-.58-.01-.2 0-.53.07-.8.37-.28.3-1.07 1.05-1.07 2.56s1.09 2.97 1.24 3.17c.15.2 2.15 3.28 5.21 4.6 1.13.48 2.02.77 2.71.99.76.24 1.46.21 2.01.12.61-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.07-.13-.27-.2-.57-.35z" />
              </svg>
              <span>Join WhatsApp Community</span>
            </a>
            <a
              href="#inventory"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center rounded-full bg-[#FF385C] py-3 text-[15px] font-semibold text-white"
            >
              Request Access
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
