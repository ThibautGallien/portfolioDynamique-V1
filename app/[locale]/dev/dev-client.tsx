"use client";

import { Navigation } from "@/components/layout/navigation";
import { DevHeroSection } from "@/components/sections/dev-hero-section";
import { DevPortfolioSection } from "@/components/sections/dev-portfolio-section";
import { DevSkillsSection } from "@/components/sections/dev-skills-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/layout/footer";

export function DevPageClient() {
  return (
    <main className="relative">
      <Navigation />
      <DevHeroSection />
      <DevPortfolioSection />
      <DevSkillsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
