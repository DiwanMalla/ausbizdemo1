"use client";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button"; // Assuming Shadcn provides a Button component

const SignOutButton = () => {
  const handleSignOut = () => {
    signOut({ callbackUrl: "/" }); // Redirect user to home page after sign-out
  };

  return (
    <Button
      onClick={handleSignOut}
      className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Sign out
    </Button>
  );
};

export default SignOutButton;
