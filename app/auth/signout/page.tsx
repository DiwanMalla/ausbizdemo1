"use client";
import { Button } from "@/components/ui/button";

const SignOutButton = () => {
  const handleSignOut = async () => {
    try {
      // Call the custom API route to handle the sign-out process
      const response = await fetch("/api/auth/signout", {
        method: "GET",
        credentials: "include", // Ensure cookies are sent
      });

      console.log("Sign-out response:", response);

      if (!response.ok) {
        throw new Error("Failed to sign out");
      }
      alert("Signout");
      // Redirect to the home page (handled server-side or manually)
      window.location.href = "/blog";
    } catch (error) {
      console.error("Sign-out error:", error);
      alert("An error occurred during sign-out. Please try again.");
    }
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
