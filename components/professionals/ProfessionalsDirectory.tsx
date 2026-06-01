'use client'
import { useState } from 'react'
import { Professional, PROFESSIONALS } from '@/lib/professionals-data'
import { WHATSAPP_URL } from '@/lib/config'
import TallyModalTrigger from '../shared/TallyModalTrigger'
import { ShieldCheck, UserCheck, Briefcase, MapPin } from 'lucide-react'

export default function ProfessionalsDirectory() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'architect' | 'lawyer' | 'contractor' | 'surveyor'>('all')

  const categories = [
    { value: 'all', label: 'All' },
    { value: 'architect', label: 'Architects' },
    { value: 'lawyer', label: 'Lawyers' },
    { value: 'contractor', label: 'Contractors' },
    { value: 'surveyor', label: 'Surveyors' }
  ]

  const filteredProfessionals = activeCategory === 'all'
    ? PROFESSIONALS
    : PROFESSIONALS.filter((p) => p.category === activeCategory)

  // Get initials for avatar
  const getInitials = (name: string) => {
    const clean = name.replace(/^(Ar\.|Adv\.)\s+/i, '')
    const parts = clean.split(' ')
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase()
    }
    return clean.slice(0, 2).toUpperCase()
  }

  return (
    <div className="flex flex-col gap-12 font-jakarta">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 border-b border-[#EBEBEB] pb-6">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value as any)}
            className={`px-5 py-2.5 rounded-xl font-semibold text-xs transition-all duration-200 cursor-pointer ${
              activeCategory === cat.value
                ? 'bg-[#FF385C] text-white shadow-xs'
                : 'bg-[#F7F7F7] text-[#6A6A6A] hover:bg-[#F0F0F0] hover:text-[#222222]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid of Professionals */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProfessionals.map((prof) => (
          <div
            key={prof.id}
            className="bg-white border border-[#EBEBEB] p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:shadow-md"
          >
            <div>
              {/* Header card details */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 rounded-full bg-[#FFF0F3] text-[#FF385C] flex items-center justify-center text-xl font-extrabold shadow-inner flex-none">
                  {getInitials(prof.name)}
                </div>
                {prof.verified && (
                  <span className="bg-[#E9FBF0] text-[#1DA851] text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-xs border border-[#1DA851]/10">
                    <ShieldCheck className="w-3.5 h-3.5" /> Verified
                  </span>
                )}
              </div>

              {/* Name and category */}
              <h3 className="text-lg font-bold text-[#222222] mb-1">
                {prof.name}
              </h3>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#FF385C] bg-[#FFF0F3] px-2.5 py-1 rounded-md">
                {prof.category}
              </span>

              {/* Specs */}
              <div className="flex flex-col gap-2.5 mt-6 text-xs text-[#6A6A6A]">
                <div className="flex items-start gap-2">
                  <Briefcase className="w-4 h-4 text-[#FF385C] flex-none mt-0.5" />
                  <div>
                    <span className="font-bold text-[#222222]">Specialization:</span> {prof.specialization}
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <UserCheck className="w-4 h-4 text-[#FF385C] flex-none mt-0.5" />
                  <div>
                    <span className="font-bold text-[#222222]">Experience:</span> {prof.experience}
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#FF385C] flex-none mt-0.5" />
                  <div>
                    <span className="font-bold text-[#222222]">Localities:</span> {prof.localities.join(', ')}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Action */}
            <div className="mt-8 pt-4 border-t border-[#EBEBEB]">
              <a
                href={`${WHATSAPP_URL}&text=Hi%20${encodeURIComponent(prof.name)}%2C%20I%20got%20your%20contact%20via%20Urban%20Atlas`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#1DA851] text-white font-semibold text-xs px-4 py-2.5 rounded-lg transition-all duration-200 flex items-center justify-center gap-1.5 w-full shadow-xs hover:shadow-md"
              >
                📞 Contact on WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Curated Professional Callout bottom */}
      <section className="bg-[#F7F7F7] border border-[#EBEBEB] p-8 rounded-2xl text-center flex flex-col items-center gap-4 mt-8 w-full">
        <h3 className="text-lg font-bold text-[#222222]">Are you a Plot Transaction Professional?</h3>
        <p className="text-xs text-[#6A6A6A] max-w-xl leading-relaxed">
          Lawyers, architects, contractors, and boundary surveyors working in Lucknow. Apply to get audited, listed, and recommended to our client network.
        </p>
        <TallyModalTrigger className="bg-[#FF385C] hover:bg-[#E31C5F] text-white font-semibold text-xs px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-md cursor-pointer">
          Join as Professional
        </TallyModalTrigger>
      </section>
    </div>
  )
}
