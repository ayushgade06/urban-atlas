import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollReveal from '@/components/shared/ScrollReveal'
import TallyEmbed from '@/components/shared/TallyEmbed'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import SectionLabel from '@/components/shared/SectionLabel'
import { LOCALITIES } from '@/lib/localities-data'
import { Check, X, ShieldAlert, Award, Star, Activity, Landmark, CalendarRange, MapPin } from 'lucide-react'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return LOCALITIES.map((l) => ({ slug: l.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const locality = LOCALITIES.find((l) => l.slug === slug)
  if (!locality) return { title: 'Locality Not Found' }

  return {
    title: `${locality.name} Resale Plot Intelligence | Urban Atlas`,
    description: `Verified resale plot intelligence, pricing benchmarks, and legal reports for LDA & Awas Vikas plots in ${locality.name}, Lucknow.`,
  }
}

export default async function LocalityDetailPage({ params }: PageProps) {
  const { slug } = await params
  const locality = LOCALITIES.find((l) => l.slug === slug)

  if (!locality) {
    notFound()
  }

  // Get other localities for sidebar navigation
  const otherLocalities = LOCALITIES.filter((l) => l.slug !== slug)

  return (
    <div className="font-jakarta bg-white min-h-screen flex flex-col">
      {/* Scroll active navbar */}
      <Navbar />

      {/* Hero Header */}
      <div className="relative h-[400px] w-full">
        <Image
          src={locality.image}
          alt={locality.name}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pb-12">
            <span
              className="text-xs font-bold uppercase tracking-widest text-white px-3.5 py-1.5 rounded-full mb-4 inline-block"
              style={{ backgroundColor: locality.badgeColor }}
            >
              {locality.badge}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              {locality.name} Plot Intelligence
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Breadcrumb */}
          <nav className="text-xs font-semibold text-[#9A9A9A] uppercase tracking-wider mb-8">
            <Link href="/" className="hover:text-[#FF385C] transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/localities" className="hover:text-[#FF385C] transition-colors">
              Localities
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#6A6A6A]">{locality.name}</span>
          </nav>

          {/* 2-Column Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column (70%) */}
            <div className="lg:col-span-8 flex flex-col gap-12">
              {/* Overview Section */}
              <ScrollReveal direction="up" delay={0.1}>
                <div className="border-b border-[#EBEBEB] pb-8">
                  <SectionLabel>Market Overview</SectionLabel>
                  <h2 className="text-2xl font-bold text-[#222222] mb-4">
                    Neighborhood Dynamics
                  </h2>
                  <p className="body-md leading-relaxed">
                    {locality.overview}
                  </p>
                </div>
              </ScrollReveal>

              {/* Key Stats Grid */}
              <ScrollReveal direction="up">
                <div className="border-b border-[#EBEBEB] pb-8">
                  <SectionLabel>Benchmark Metrics</SectionLabel>
                  <h2 className="text-2xl font-bold text-[#222222] mb-6">
                    Locality Statistics
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="bg-[#F7F7F7] border border-[#EBEBEB] p-5 rounded-2xl">
                      <div className="text-[#6A6A6A] text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-[#FF385C]" /> Avg Plot Size
                      </div>
                      <div className="text-sm font-bold text-[#222222] mt-1">{locality.keyStats.avgPlotSize}</div>
                    </div>
                    <div className="bg-[#F7F7F7] border border-[#EBEBEB] p-5 rounded-2xl">
                      <div className="text-[#6A6A6A] text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <Star className="w-3.5 h-3.5 text-[#FF385C]" /> Price Range
                      </div>
                      <div className="text-sm font-bold text-[#222222] mt-1">{locality.keyStats.priceRange}</div>
                    </div>
                    <div className="bg-[#F7F7F7] border border-[#EBEBEB] p-5 rounded-2xl">
                      <div className="text-[#6A6A6A] text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <Landmark className="w-3.5 h-3.5 text-[#FF385C]" /> Road Widths
                      </div>
                      <div className="text-sm font-bold text-[#222222] mt-1">{locality.keyStats.roadWidth}</div>
                    </div>
                    <div className="bg-[#F7F7F7] border border-[#EBEBEB] p-5 rounded-2xl">
                      <div className="text-[#6A6A6A] text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-[#FF385C]" /> Controlling Body
                      </div>
                      <div className="text-sm font-bold text-[#222222] mt-1">{locality.keyStats.authority}</div>
                    </div>
                    <div className="bg-[#F7F7F7] border border-[#EBEBEB] p-5 rounded-2xl">
                      <div className="text-[#6A6A6A] text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <CalendarRange className="w-3.5 h-3.5 text-[#FF385C]" /> Freehold Status
                      </div>
                      <div className="text-sm font-bold text-[#222222] mt-1">{locality.keyStats.freehold}</div>
                    </div>
                    <div className="bg-[#F7F7F7] border border-[#EBEBEB] p-5 rounded-2xl">
                      <div className="text-[#6A6A6A] text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#FF385C]" /> Metro Access
                      </div>
                      <div className="text-sm font-bold text-[#222222] mt-1">{locality.keyStats.metroProximity}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Planned Development */}
              <ScrollReveal direction="up">
                <div className="border-b border-[#EBEBEB] pb-8">
                  <SectionLabel>Infrastructure</SectionLabel>
                  <h2 className="text-2xl font-bold text-[#222222] mb-4">
                    Planned Development Pipelines
                  </h2>
                  <ul className="flex flex-col gap-4">
                    {locality.plannedDevelopment.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="bg-[#FFF0F3] w-6 h-6 rounded-md flex items-center justify-center text-xs font-extrabold text-[#FF385C] flex-none mt-0.5">
                          {idx + 1}
                        </div>
                        <span className="text-[#6A6A6A] text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* Residential Suitability */}
              <ScrollReveal direction="up">
                <div className="border-b border-[#EBEBEB] pb-8">
                  <SectionLabel>Investment Score</SectionLabel>
                  <h2 className="text-2xl font-bold text-[#222222] mb-3">
                    Residential Suitability Analysis
                  </h2>

                  {/* Score pill */}
                  <div className="flex items-center gap-3 bg-[#F7F7F7] p-4 rounded-xl border border-[#EBEBEB] mb-6 w-fit">
                    <span className="text-3xl font-extrabold text-[#FF385C]">
                      {locality.residentialSuitability.score}
                    </span>
                    <span className="text-sm font-bold text-[#222222]">/ 10 Rating</span>
                    <div className="w-px h-6 bg-[#D0D0D0] mx-2" />
                    <p className="text-xs text-[#6A6A6A] font-medium italic">
                      {locality.residentialSuitability.notes}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Pros */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#22C55E] mb-4 flex items-center gap-1.5">
                        <Check className="w-4 h-4" /> Positives & Drivers
                      </h4>
                      <ul className="flex flex-col gap-3">
                        {locality.residentialSuitability.pros.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] mt-1.5 flex-none" />
                            <span className="text-sm text-[#6A6A6A] leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Cons */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF385C] mb-4 flex items-center gap-1.5">
                        <X className="w-4 h-4" /> Constraints & Concerns
                      </h4>
                      <ul className="flex flex-col gap-3">
                        {locality.residentialSuitability.cons.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF385C] mt-1.5 flex-none" />
                            <span className="text-sm text-[#6A6A6A] leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Plotted Ecosystem */}
              <ScrollReveal direction="up">
                <div>
                  <SectionLabel>Legal Blueprint</SectionLabel>
                  <h2 className="text-2xl font-bold text-[#222222] mb-4">
                    Plotted Land Ecosystem Notes
                  </h2>
                  <div className="bg-[#FFF0F3]/40 border border-[#FF385C]/10 p-6 rounded-2xl flex gap-4">
                    <ShieldAlert className="w-6 h-6 text-[#FF385C] flex-none mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#222222] mb-1">Title Diligence Warning</h4>
                      <p className="text-xs text-[#6A6A6A] leading-relaxed">
                        {locality.plottedEcosystem}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column / Sticky Sidebar (30%) */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28 flex flex-col gap-6">
              {/* Lead Access Form */}
              <div className="bg-white border border-[#EBEBEB] rounded-2xl shadow-md p-6">
                <h3 className="text-base font-bold text-[#222222] mb-2">
                  Request {locality.name} Inventory
                </h3>
                <p className="text-xs text-[#6A6A6A] leading-relaxed mb-6">
                  Review verified, clear-title resale plots in {locality.name} matching your parameters.
                </p>
                <div className="rounded-xl overflow-hidden bg-[#F7F7F7] border border-[#EBEBEB] p-1">
                  <TallyEmbed locality={locality.name} className="w-full" />
                </div>
                <WhatsAppButton text="Contact on WhatsApp" className="w-full mt-4" />
              </div>

              {/* Other Localities List */}
              <div className="bg-[#F7F7F7] border border-[#EBEBEB] rounded-2xl p-6">
                <h4 className="text-xs font-bold text-[#222222] uppercase tracking-wider mb-4">
                  Other Coverage Areas
                </h4>
                <ul className="flex flex-col gap-3">
                  {otherLocalities.map((other) => (
                    <li key={other.slug}>
                      <Link
                        href={`/localities/${other.slug}`}
                        className="text-sm font-semibold text-[#6A6A6A] hover:text-[#FF385C] transition-colors flex items-center justify-between"
                      >
                        {other.name}
                        <span className="text-xs text-[#9A9A9A] font-medium">{other.badge}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
