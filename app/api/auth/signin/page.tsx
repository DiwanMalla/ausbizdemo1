// app/api/auth/signin/page.tsx
"use client";

import Footer from "@/components/Footer";
import { signIn } from "next-auth/react";

export default function SignInPage() {
  const handleSignIn = (provider: string) => {
    // Initiate the sign-in flow with the specified provider
    signIn(provider, {
      callbackUrl: "http://localhost:3000/blog", // Redirect after successful sign-in
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",

        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1
        style={{ fontSize: "2.5rem", marginBottom: "10px", color: "#343a40" }}
      >
        Welcome to the Blog
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "30px", color: "#6c757d" }}>
        Please sign in to access the content.
      </p>
      <div style={{ display: "flex", gap: "20px" }} className="mb-7">
        <button
          onClick={() => handleSignIn("wordpress")}
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "#0073e6",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Sign in with WordPress
        </button>
        <button
          onClick={() => handleSignIn("github")}
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "#24292f",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Sign in with GitHub
        </button>
      </div>
      <Footer />
    </div>
  );
}
