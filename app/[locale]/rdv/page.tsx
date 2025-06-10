"use client";

import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { BookingSection } from "@/components/sections/booking-section";

export function RdvPageClient() {
  return (
    <main className="relative">
      <Navigation />
      <div className="pt-24">
        <BookingSection />
      </div>
      <Footer />
    </main>
  );
}
