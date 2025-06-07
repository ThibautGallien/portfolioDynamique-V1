'use client';

import { Navigation } from '@/components/layout/navigation';
import { ContactHeroSection } from '@/components/sections/contact-hero-section';
import { ContactFormSection } from '@/components/sections/contact-form-section';
import { Footer } from '@/components/layout/footer';

export default function ContactPage() {
  return (
    <main className="relative">
      <Navigation />
      <ContactHeroSection />
      <ContactFormSection />
      <Footer />
    </main>
  );
}