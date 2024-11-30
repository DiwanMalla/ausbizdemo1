"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./Theme-Toggle";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";

export function Navbar() {
  const { state } = useSidebar(); // Access sidebar state

  return (
    <nav
      className={`flex items-center justify-between p-4 border-b transition-all duration-300 ${
        state === "expanded" ? "pl-22" : "pl-4"
      }`}
    >
      {/* Left Section: Logo and Sidebar Trigger */}
      <div className="flex items-center space-x-4">
        <SidebarTrigger aria-label="Toggle Sidebar" />
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
      <ThemeToggle />
      {/* Right Section: Theme Toggle and Auth Buttons */}
      <div className=" items-center space-x-4 hidden sm:flex">
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
    </nav>
  );
}
