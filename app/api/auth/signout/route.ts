/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    console.log("Sign-out request received. Session:", session);

    if (!session) {
      return NextResponse.json(
        { message: "Not authenticated" },
        { status: 401 }
      );
    }

    // Determine cookie name based on environment
    const cookieName =
      process.env.NODE_ENV === "production"
        ? "__Secure-next-auth.session-token"
        : "next-auth.session-token";

    // Calculate the domain from NEXTAUTH_URL or default to Vercel's domain
    const domain = process.env.NEXTAUTH_URL
      ? new URL(process.env.NEXTAUTH_URL).hostname
      : "ausbiz-demo1.vercel.app"; // Explicit fallback for Vercel

    // Clear the session cookie
    const headers = new Headers();
    headers.set(
      "Set-Cookie",
      `${cookieName}=; Path=/; HttpOnly; Max-Age=0; SameSite=None; Secure; Domain=${domain}`
    );

    console.log("Cookie Name:", cookieName);
    console.log("Computed Domain:", domain);
    console.log("Set-Cookie Header:", headers.get("Set-Cookie"));

    // Redirect after sign-out
    return NextResponse.redirect(
      new URL(
        "/",
        process.env.NEXTAUTH_URL || "https://ausbiz-demo1.vercel.app"
      ).toString(),
      { headers }
    );
  } catch (error) {
    console.error("Error during sign-out:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
