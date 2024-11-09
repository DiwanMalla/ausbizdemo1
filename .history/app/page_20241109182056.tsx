"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import BootcampSection from "@/components/Bootcamp";
import ServicesCarousel from "@/components/Services";
import ClientProjects from "@/components/ClientProject";
import LMSSection from "@/components/LMS";
import IndustryCallouts from "@/components/Healthcare";
import BlogSection from "@/components/Blog";
import CorporateTraining from "@/components/CorporateTraining";
import EventSection from "@/components/Event";
import { Footer } from "react-day-picker";
import { DayPicker } from "react-day-picker"; // Import DayPicker instead of DayPickerProvider

export default function AusBizLayout() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  // Define the date range
  const fromDate = new Date(2023, 0); // January 2023
  const toDate = new Date(2023, 11); // December 2023

  return (
    <div
      className={`min-h-screen bg-background text-foreground ${
        isDarkMode ? "dark" : ""
      }`}
    >
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">AusBiz</span>
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="#services"
              >
                Services
              </a>
              <a
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="#projects"
              >
                Projects
              </a>
              <a
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="#blog"
              >
                Blog
              </a>
              <a
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="#events"
              >
                Events
              </a>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <Button variant="outline" size="icon" onClick={toggleDarkMode}>
              {isDarkMode ? (
                <SunIcon className="h-[1.2rem] w-[1.2rem]" />
              ) : (
                <MoonIcon className="h-[1.2rem] w-[1.2rem]" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Pass fromDate and toDate to the DayPicker */}
        <DayPicker
          selectedDate={fromDate}
          disabled={{ from: fromDate, to: toDate }}
        />

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
      <Footer isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
}
