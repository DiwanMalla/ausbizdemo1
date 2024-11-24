"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./Theme-Toggle";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";

export function Navbar() {
  const { state } = useSidebar();

  return (
    <nav
      className={`flex items-center justify-between p-4 border-b transition-all duration-300 ${
        state === "expanded" ? "pl-32" : "pl-8"
      }`}
    >
      <div className="flex items-center space-x-4">
        <SidebarTrigger />
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/ausbiz-logo.svg"
            alt="AusBiz Consulting Logo"
            width={40}
            height={40}
          />
          <span className="text-xl font-bold">AusBiz Consulting</span>
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <ThemeToggle />
        <Button variant="outline" asChild>
          <Link href="/login">Sign In</Link>
        </Button>
        <Button asChild>
          <Link href="/signup">Sign Up</Link>
        </Button>
      </div>
    </nav>
  );
}
