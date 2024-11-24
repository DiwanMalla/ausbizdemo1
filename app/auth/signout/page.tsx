"use client";
import { signOut } from "next-auth/react";

export default function SignOutPage() {
  const handleSignOut = () => {
    signOut({ callbackUrl: "http://localhost:3000/" }); // Redirect after sign-out
  };

  return <button onClick={handleSignOut}>Sign Out</button>;
}
