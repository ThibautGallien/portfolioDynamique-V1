'use client';

import { Navigation } from '@/components/layout/navigation';
import { CopyHeroSection } from '@/components/sections/copy-hero-section';
import { CopyPortfolioSection } from '@/components/sections/copy-portfolio-section';
import { CopyServicesSection } from '@/components/sections/copy-services-section';
import { ContactSection } from '@/components/sections/contact-section';
import { Footer } from '@/components/layout/footer';

export default function CopyPage() {
  return (
    <main className="relative">
      <Navigation />
      <CopyHeroSection />
      <CopyPortfolioSection />
      <CopyServicesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}