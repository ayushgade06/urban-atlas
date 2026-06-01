import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SectionLabel from '@/components/shared/SectionLabel'
import ProfessionalsDirectory from '@/components/professionals/ProfessionalsDirectory'

export const metadata: Metadata = {
  title: 'Professionals | Urban Atlas',
  description: 'Find verified architects, lawyers, contractors and surveyors for LDA and Awas Vikas plot transactions in Lucknow.',
}

export default function ProfessionalsPage() {
  return (
    <div className="font-jakarta bg-white min-h-screen flex flex-col">
      {/* Navbar forced white style */}
      <Navbar staticWhite={true} />

      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Hero Header */}
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <SectionLabel>Curated Network</SectionLabel>
            <h1 className="heading-lg text-[#222222] mt-2 mb-4">
              Verified Plot Professionals
            </h1>
            <p className="body-lg">
              Find and contact vetted residential service providers specializing in Lucknow Development Authority approvals, stamp mutations, and construction.
            </p>
          </div>

          {/* Interactive filter and grid component */}
          <ProfessionalsDirectory />
        </div>
      </main>

      <Footer />
    </div>
  )
}
