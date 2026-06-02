import type { Metadata } from 'next'
import Navbar        from '@/components/Navbar'
import Hero          from '@/components/Hero'
import Localities    from '@/components/localities'
import HowItWorks    from '@/components/how-it-works'
import DemandSection from '@/components/demand-section'
import FeatureCards  from '@/components/feature-cards'
import TrustSection  from '@/components/trust-section'
import MediaSection  from '@/components/media-section'
import CtaBanner     from '@/components/cta-banner'
import Footer        from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Urban Atlas | Lucknow Real Estate Intelligence',
  description:
    'Connecting plot owners with serious buyers in Lucknow. Submit your plot for free and reach genuine buyers across Gomti Nagar, Sushant Golf City, Vrindavan Yojana and more.',
  keywords: [
    'Lucknow real estate',
    'LDA plots Lucknow',
    'plot buyers Lucknow',
    'Gomti Nagar plots',
    'resale plots Lucknow',
    'Urban Atlas',
  ],
  authors: [{ name: 'Urban Atlas' }],
  openGraph: {
    title: 'Urban Atlas | Lucknow Real Estate Intelligence',
    description:
      'Connecting plot owners with serious buyers in Lucknow.',
    url: 'https://urbanatlas.in',
    siteName: 'Urban Atlas',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white font-sans antialiased">
      <Navbar />
      <Hero />
      <Localities />
      <HowItWorks />
      <DemandSection />
      <FeatureCards />
      <TrustSection />
      <MediaSection />
      <CtaBanner />
      <Footer />
    </main>
  )
}
