'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import TallyModalTrigger from '../shared/TallyModalTrigger'
import { WHATSAPP_URL } from '@/lib/config'
import { Menu, X, MapPin } from 'lucide-react'

interface NavbarProps {
  staticWhite?: boolean
}

export default function Navbar({ staticWhite = false }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const pathname = usePathname()

  useEffect(() => {
    if (staticWhite) return

    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    // Run initially
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [staticWhite])

  // Scroll section observer
  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection('')
      return
    }

    const sections = ['inventory', 'intelligence', 'broker-network', 'about', 'contact']
    const observers = sections.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id)
            }
          });
        },
        { rootMargin: '-30% 0px -60% 0px' }
      )
      observer.observe(el)
      return { observer, el }
    })

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el)
      })
    }
  }, [pathname])

  const showWhiteBg = staticWhite || isScrolled
  const textClass = showWhiteBg ? 'text-[#222222]' : 'text-white'
  const navLinkClass = (id: string, path: string) => {
    const isActive = pathname === path || (pathname === '/' && activeSection === id)
    return `font-medium text-sm transition-colors duration-200 ${
      showWhiteBg
        ? isActive ? 'text-[#FF385C]' : 'text-[#6A6A6A] hover:text-[#222222]'
        : isActive ? 'text-[#FF385C]' : 'text-white/80 hover:text-white'
    }`
  }

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  // Create links dynamically based on path
  const getPath = (hash: string) => {
    if (pathname === '/') return `#${hash}`
    return `/#${hash}`
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        showWhiteBg
          ? 'bg-white border-b border-[#EBEBEB] shadow-[0_1px_8px_rgba(0,0,0,0.06)] py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-[#FF385C] text-white p-2 rounded-lg flex items-center justify-center">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <div className={`font-extrabold text-lg leading-tight tracking-tight ${textClass}`}>
              Urban Atlas
            </div>
            <div className={`text-[10px] uppercase tracking-wider font-semibold opacity-75 hidden sm:block ${
              showWhiteBg ? 'text-[#6A6A6A]' : 'text-white/70'
            }`}>
              Plot Intelligence for Lucknow
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href={getPath('inventory')} className={navLinkClass('inventory', '')}>
            Inventory
          </Link>
          <Link href="/localities" className={navLinkClass('', '/localities')}>
            Localities
          </Link>
          <Link href={getPath('intelligence')} className={navLinkClass('intelligence', '')}>
            Intelligence
          </Link>
          <Link href={getPath('broker-network')} className={navLinkClass('broker-network', '')}>
            Broker Network
          </Link>
          <Link href={getPath('about')} className={navLinkClass('about', '')}>
            About
          </Link>
          <Link href={getPath('contact')} className={navLinkClass('contact', '')}>
            Contact
          </Link>
        </div>

        {/* CTA Buttons (Desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.9375rem] font-semibold text-[#25D366] hover:text-[#1DA851] flex items-center gap-1.5 transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
            Join WhatsApp
          </a>
          <TallyModalTrigger className="bg-[#FF385C] hover:bg-[#E31C5F] text-white font-semibold text-[0.9375rem] px-5 py-2.5 rounded-xl transition-all duration-200 hover:shadow-md hover:-translate-y-px flex items-center gap-1">
            Request Access <span className="text-xs">►</span>
          </TallyModalTrigger>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-black/5 transition-colors focus:outline-hidden"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <X className={`w-6 h-6 ${textClass}`} />
          ) : (
            <Menu className={`w-6 h-6 ${textClass}`} />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed top-[73px] left-0 w-full bg-white border-b border-[#EBEBEB] shadow-lg transition-all duration-300 origin-top overflow-hidden ${
          isMenuOpen ? 'max-h-[500px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="flex flex-col px-6 gap-4">
          <Link href={getPath('inventory')} onClick={handleLinkClick} className="text-[#222222] font-semibold text-base py-1">
            Inventory
          </Link>
          <Link href="/localities" onClick={handleLinkClick} className="text-[#222222] font-semibold text-base py-1">
            Localities
          </Link>
          <Link href={getPath('intelligence')} onClick={handleLinkClick} className="text-[#222222] font-semibold text-base py-1">
            Intelligence
          </Link>
          <Link href={getPath('broker-network')} onClick={handleLinkClick} className="text-[#222222] font-semibold text-base py-1">
            Broker Network
          </Link>
          <Link href={getPath('about')} onClick={handleLinkClick} className="text-[#222222] font-semibold text-base py-1">
            About
          </Link>
          <Link href={getPath('contact')} onClick={handleLinkClick} className="text-[#222222] font-semibold text-base py-1">
            Contact
          </Link>
          <Link href="/community" onClick={handleLinkClick} className="text-[#222222] font-semibold text-base py-1">
            Community
          </Link>
          <Link href="/professionals" onClick={handleLinkClick} className="text-[#222222] font-semibold text-base py-1">
            Professionals
          </Link>

          <div className="h-px bg-[#EBEBEB] my-2" />

          <div className="flex flex-col gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1DA851] text-white font-semibold text-[0.9375rem] py-3 rounded-xl transition-all duration-200 hover:shadow-md text-center flex items-center justify-center gap-2"
            >
              🟢 Join WhatsApp Community
            </a>
            <TallyModalTrigger className="bg-[#FF385C] hover:bg-[#E31C5F] text-white font-semibold text-[0.9375rem] py-3 rounded-xl transition-all duration-200 hover:shadow-md text-center w-full">
              Request Access
            </TallyModalTrigger>
          </div>
        </div>
      </div>
    </nav>
  )
}
