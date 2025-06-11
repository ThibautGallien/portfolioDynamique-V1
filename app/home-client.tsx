"use client";

import { useState, useEffect } from "react";
import { AnimatedLoader } from "@/components/ui/animated-loader";
import { HeroSection } from "@/components/sections/hero-section";
import { Navigation } from "@/components/layout/navigation";
import { ServicesSection } from "@/components/sections/services-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/layout/footer";
import { BookingSection } from "@/components/sections/booking-section";
export function HomePageClient() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const handleSkipLoader = () => {
    setLoadingProgress(100);
    setTimeout(() => setIsLoading(false), 200);
  };

  if (isLoading) {
    return (
      <AnimatedLoader progress={loadingProgress} onSkip={handleSkipLoader} />
    );
  }

  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <BookingSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
