"use client";

import { Navigation } from "@/components/layout/navigation";
import { DevHeroSection } from "@/components/sections/dev-hero-section";
import { DevPortfolioSection } from "@/components/sections/dev-portfolio-section";
import { DevSkillsSection } from "@/components/sections/dev-skills-section";
import { DevServicesSection } from "@/components/sections/dev-services-section";
import { DevFAQSection } from "@/components/sections/dev-faq-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/layout/footer";
import { QuoteEstimatorSection } from "@/components/sections/quote-estimator-section";

export function DevPageClient() {
  return (
    <main className="relative">
      <Navigation />
      <DevHeroSection />
      <DevPortfolioSection />
      <DevSkillsSection />
      <DevServicesSection />
      <QuoteEstimatorSection />
      <DevFAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
