"use client";

import Navbar from "@/components/header";

// app/blog/layout.tsx

export default function BlogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
