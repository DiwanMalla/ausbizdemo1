// app/components/SessionWrapper.tsx (Client-side)
"use client";

import { SessionProvider } from "next-auth/react"; // Import SessionProvider

// SessionWrapper component that wraps the app in SessionProvider
export default function SessionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
