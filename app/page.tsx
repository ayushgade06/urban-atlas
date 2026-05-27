import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import WorkflowSection from "@/components/WorkflowSection";
import LocalitiesSection from "@/components/LocalitiesSection";
import SignalsSection from "@/components/SignalsSection";
import BrokerSection from "@/components/BrokerSection";
import CommunitySection from "@/components/CommunitySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. NAVBAR */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. HERO */}
        <Hero />

        {/* 3. PROBLEM */}
        <ProblemSection />

        {/* 4. WORKFLOW */}
        <WorkflowSection />

        {/* 5. LOCALITIES */}
        <LocalitiesSection />

        {/* 6. SIGNALS */}
        <SignalsSection />

        {/* 7. BROKER */}
        <BrokerSection />

        {/* 8. COMMUNITY */}
        <CommunitySection />

        {/* 9. CTA */}
        <CTASection />
      </main>

      {/* 10. FOOTER */}
      <Footer />
    </div>
  );
}
