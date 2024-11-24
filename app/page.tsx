"use client";

import HeroSection from "@/components/HeroSection";
import BootcampSection from "@/components/Bootcamp";
import ServicesCarousel from "@/components/Services";
import ClientProjects from "@/components/ClientProject";
import LMSSection from "@/components/LMS";
import IndustryCallouts from "@/components/Healthcare";
import BlogSection from "@/components/Blog";
import CorporateTraining from "@/components/CorporateTraining";
import EventSection from "@/components/Event";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="flex-1">
        <HeroSection />
        <BootcampSection />
        <ServicesCarousel />
        <ClientProjects />
        <LMSSection />
        <IndustryCallouts />
        <BlogSection />
        <CorporateTraining />
        <EventSection />
      </main>
      <Footer />
    </div>
  );
}
