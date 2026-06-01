import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import TallyEmbed from '@/components/shared/TallyEmbed'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import SectionLabel from '@/components/shared/SectionLabel'
import { Bell, Flame, Globe2, HeartHandshake, EyeOff, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Community | Urban Atlas',
  description: 'Join the Urban Atlas WhatsApp community for verified resale plot intelligence in Lucknow.',
}

export default function CommunityPage() {
  const benefits = [
    {
      icon: Bell,
      title: 'Verified Inventory Drops',
      description: 'Receive instant notifications when clear-title plots become available.'
    },
    {
      icon: EyeOff,
      title: 'Off-Market Opportunities',
      description: 'Review listings kept private from portals and offline intermediaries.'
    },
    {
      icon: Globe2,
      title: 'Locality Updates',
      description: 'Receive regular digests regarding upcoming parks, expressways, and infrastructure.'
    },
    {
      icon: Flame,
      title: 'Distress Deal Alerts',
      description: 'Get immediate notifications on high-motivation seller drops and price cuts.'
    },
    {
      icon: HeartHandshake,
      title: 'Serious Buyer Discussions',
      description: 'Exchange feedback with verified property seekers inside the network.'
    },
    {
      icon: ShieldCheck,
      title: 'Direct Admin Access',
      description: 'Verify stamp duty computations and title mutations directly with administrators.'
    }
  ]

  const workflow = [
    {
      num: '01',
      title: 'Join Group',
      description: 'Click our invite link to enter the private WhatsApp broadcast community.'
    },
    {
      num: '02',
      title: 'Receive Alerts',
      description: 'We broadcast verified plot inventory drops with complete pricing breakdowns.'
    },
    {
      num: '03',
      title: 'Connect Directly',
      description: 'Message administrators to coordinate site visits or legal inspections.'
    }
  ]

  return (
    <div className="font-jakarta bg-white min-h-screen flex flex-col">
      {/* Navbar with default state */}
      <Navbar staticWhite={true} />

      <main className="flex-grow pt-28 pb-20">
        {/* Page Header */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center flex flex-col items-center gap-4 mb-20">
          <SectionLabel>Private Broadcast Network</SectionLabel>
          <h1 className="heading-xl text-[#222222] max-w-3xl leading-tight">
            The Urban Atlas Community
          </h1>
          <p className="body-lg max-w-2xl">
            A secure WhatsApp community of land buyers, verified brokers, and legal consultants monitoring secondary resale markets in Lucknow.
          </p>
        </div>

        {/* How It Works Section */}
        <section className="bg-[#F7F7F7] border-y border-[#EBEBEB] py-16 mb-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <SectionLabel>Onboarding</SectionLabel>
              <h2 className="heading-md text-[#222222]">How It Works</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {workflow.map((step, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-[#EBEBEB] shadow-xs text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#FF385C]/10 flex items-center justify-center text-[#FF385C] font-extrabold text-base mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-base font-bold text-[#222222] mb-2">{step.title}</h3>
                  <p className="text-xs text-[#6A6A6A] leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
          <div className="text-center mb-12">
            <SectionLabel>Advantages</SectionLabel>
            <h2 className="heading-md text-[#222222]">Community Benefits</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((ben, idx) => {
              const Icon = ben.icon
              return (
                <div key={idx} className="bg-white p-8 rounded-2xl border border-[#EBEBEB] transition-all duration-300 hover:shadow-md flex flex-col gap-4">
                  <div className="w-10 h-10 bg-[#FFF0F3] rounded-xl flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#FF385C]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#222222] mb-2">{ben.title}</h3>
                    <p className="text-xs text-[#6A6A6A] leading-relaxed">{ben.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* WhatsApp Access CTA */}
        <section className="bg-[#F0FDF4] border-y border-[#BBF7D0] py-16 mb-20 text-center">
          <div className="max-w-3xl mx-auto px-6 flex flex-col items-center gap-5">
            <h2 className="heading-md text-[#222222]">Instant Access Broadcast Group</h2>
            <p className="body-md text-[#6A6A6A]">
              Connect directly with verified brokers and serious buyers. No advertising spam, just high-accuracy secondary plots.
            </p>
            <WhatsAppButton text="🟢 Join Community Group" size="lg" className="w-full sm:w-auto" />
          </div>
        </section>

        {/* Requirement Registration Form */}
        <section className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <SectionLabel>Requirement Finder</SectionLabel>
            <h2 className="heading-md text-[#222222] mb-3">Register Your Requirements</h2>
            <p className="body-md text-[#6A6A6A]">
              Can&apos;t find a suitable listing? Register your budget, preferred road widths, and authority choices with our ops team.
            </p>
          </div>
          <div className="bg-white border border-[#EBEBEB] rounded-2xl shadow-md p-2 overflow-hidden">
            <TallyEmbed formId="68MPZA" className="w-full" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
