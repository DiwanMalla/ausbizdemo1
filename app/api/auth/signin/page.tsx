// app/api/auth/signin/page.tsx
"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();
  console.log("WordPress Client ID:", process.env.WORDPRESS_CLIENT_ID);
  console.log("WordPress Client Secret:", process.env.WORDPRESS_CLIENT_SECRET);

  const handleSignIn = (provider: string) => {
    // Initiate the sign-in flow with WordPress
    signIn(provider, {
      callbackUrl: "http://localhost:3000/blog", // Redirect after successful sign-in
    });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to the Blog</h1>
      <p>Please sign in to access the content.</p>
      <div>
        <button
          onClick={() => handleSignIn("wordpress")}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "#0073e6",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Sign in with WordPress
        </button>
      </div>
    </div>
  );
}
