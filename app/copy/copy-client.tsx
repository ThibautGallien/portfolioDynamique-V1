"use client";

import { Navigation } from "@/components/layout/navigation";
import { CopyHeroSection } from "@/components/sections/copy-hero-section";
import { CopyPortfolioSection } from "@/components/sections/copy-portfolio-section";
import { CopyServicesSection } from "@/components/sections/copy-services-section";
import { CopyFAQSection } from "@/components/sections/copy-faq-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/layout/footer";
import { QuoteEstimatorSection } from "@/components/sections/quote-estimator-section";

export function CopyPageClient() {
  return (
    <main className="relative">
      <Navigation />
      <CopyHeroSection />
      <CopyPortfolioSection />
      <CopyServicesSection />
      <CopyFAQSection />
      <QuoteEstimatorSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
