// MainContent.tsx
"use client"; // Mark this component as client-side

import { useSidebar } from "@/components/ui/sidebar";

export default function MainContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { state } = useSidebar();

  return (
    <main
      className={`flex-1 overflow-y-auto p-6 transition-all duration-300 ${
        state === "expanded" ? "ml-16" : "ml-4"
      }`}
    >
      {children}
    </main>
  );
}
