"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-lg">
      <div className="container mx-auto flex items-center justify-between h-16 px-6 md:px-8">
        <div className="flex items-center space-x-6">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-2xl text-foreground">AusBiz</span>
          </Link>
          {/* Navigation for Desktop */}
          <nav className="hidden md:flex items-center space-x-8 text-lg font-medium">
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
              href="/blog"
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
          <nav className="md:hidden absolute top-16 left-0 right-0 bg-background py-4 px-6 shadow-md">
            <div className="flex flex-col items-center space-y-6">
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
                href="/blog"
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

        {/* Theme Toggle Button */}
        <div className="flex items-center">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleDarkMode}
            className="transition-colors duration-300 p-2 rounded-full"
          >
            {isDarkMode ? (
              <SunIcon className="h-[1.5rem] w-[1.5rem]" />
            ) : (
              <MoonIcon className="h-[1.5rem] w-[1.5rem]" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
