"use client";

import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="flex-1">
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
}
