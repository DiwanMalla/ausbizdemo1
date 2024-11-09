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
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div
      className={`min-h-screen bg-background text-foreground ${
        isDarkMode ? "dark" : ""
      }`}
    >
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="hidden font-bold sm:inline-block">AusBiz</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link
                href="#services"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                Services
              </Link>
              <Link
                href="#projects"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                Projects
              </Link>
              <Link
                href="#blog"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                Blog
              </Link>
              <Link
                href="#events"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                Events
              </Link>
            </nav>
          </div>

          {/* Hamburger menu for mobile */}
          <button
            className="md:hidden flex items-center space-x-2"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open menu</span>
            <div className="w-6 h-0.5 bg-current transform transition-all duration-300"></div>
            <div className="w-6 h-0.5 bg-current transform transition-all duration-300 mt-1"></div>
          </button>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="md:hidden absolute top-14 left-0 right-0 bg-background py-4">
              <div className="flex flex-col items-center space-y-4">
                <Link
                  href="#services"
                  className="text-foreground/80 hover:text-foreground"
                >
                  Services
                </Link>
                <Link
                  href="#projects"
                  className="text-foreground/80 hover:text-foreground"
                >
                  Projects
                </Link>
                <Link
                  href="#blog"
                  className="text-foreground/80 hover:text-foreground"
                >
                  Blog
                </Link>
                <Link
                  href="#events"
                  className="text-foreground/80 hover:text-foreground"
                >
                  Events
                </Link>
              </div>
            </nav>
          )}

          <div className="flex items-center">
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
