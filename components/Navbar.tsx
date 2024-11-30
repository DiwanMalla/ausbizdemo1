"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./Theme-Toggle";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Add hamburger and close icons

export function Navbar() {
  const { state, toggleSidebar } = useSidebar(); // Access the sidebar state and toggle function
  const [menuOpen, setMenuOpen] = useState(false); // State to manage hamburger menu visibility

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      className={`flex items-center justify-between p-4 border-b transition-all duration-300 ${
        state === "expanded" ? "pl-22" : "pl-4"
      }`}
    >
      {/* Left Section: Logo and Sidebar Trigger */}
      <div className="flex items-center space-x-4">
        {state === "collapsed" ? (
          <SidebarTrigger aria-label="Toggle Sidebar" onClick={toggleSidebar} />
        ) : null}

        <Link
          href="/"
          className="flex items-center space-x-2"
          aria-label="Go to Home"
        >
          <Image
            src="/ausbiz-logo.svg"
            alt="AusBiz Consulting Logo"
            width={40}
            height={40}
          />
          <span className="text-xl font-bold">AusBiz Consulting</span>
        </Link>
      </div>

      {/* Right Section: Theme Toggle and Auth Buttons for Desktop */}
      <div className=" items-center space-x-4 hidden sm:flex">
        <ThemeToggle />
        <Button variant="outline" asChild>
          <Link href="/login" aria-label="Go to Sign In page">
            Sign In
          </Link>
        </Button>
        <Button asChild>
          <Link href="/signup" aria-label="Go to Sign Up page">
            Sign Up
          </Link>
        </Button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="flex sm:hidden">
        <Button variant="outline" onClick={toggleMenu} className="p-2">
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden absolute top-16 right-4 bg-gray-800 text-white p-4 rounded-md shadow-lg w-48">
          <div className="flex flex-col space-y-4">
            <Link
              href="/login"
              className="text-sm"
              aria-label="Go to Sign In page"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="text-sm"
              aria-label="Go to Sign Up page"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
