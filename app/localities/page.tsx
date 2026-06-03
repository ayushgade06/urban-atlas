import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import LocalityCard from '@/components/shared/LocalityCard'
import SectionLabel from '@/components/shared/SectionLabel'
import { LOCALITIES } from '@/lib/localities-data'

export const metadata: Metadata = {
  title: 'Localities | Urban Atlas',
  description: 'Explore verified resale plot intelligence for Gomti Nagar, Jankipuram, Awas Vikas and other top localities in Lucknow.',
}

export default function LocalitiesPage() {
  return (
    <div className="font-jakarta bg-white min-h-screen flex flex-col">
      {/* Navbar with always-white bg */}
      <Navbar staticWhite={true} />

      <main className="flex-grow pt-20 pb-14">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          {/* Breadcrumb */}
          <nav className="text-xs font-semibold text-[#9A9A9A] uppercase tracking-wider mb-6">
            <Link href="/" className="hover:text-[#FF385C] transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#6A6A6A]">Localities</span>
          </nav>

          {/* Page Header */}
          <div className="max-w-3xl mb-10">
            <SectionLabel>Market Coverage</SectionLabel>
            <h1 className="heading-lg text-[#222222] mt-2 mb-4">
              Verified Lucknow Localities
            </h1>
            <p className="body-lg">
              Explore in-depth land transaction benchmarks, local authority parameters, and verified resale plotted inventories across Lucknow’s highest growing sectors.
            </p>
          </div>

          {/* Grid of 6 Localities */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCALITIES.map((loc) => (
              <LocalityCard
                key={loc.slug}
                slug={loc.slug}
                name={loc.name}
                badge={loc.badge}
                badgeColor={loc.badgeColor}
                description={loc.description}
                image={loc.image}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
