/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    console.log("Sign-out request received. Session:", session);

    if (!session) {
      return NextResponse.json(
        { message: "Not authenticated" },
        { status: 401 }
      );
    }

    // Clear the session cookie by setting it to Max-Age=0
    const headers = new Headers();
    headers.set(
      "Set-Cookie",
      `next-auth.session-token=; Path=/; HttpOnly; Max-Age=0; SameSite=None; Secure; Domain=${
        process.env.NEXTAUTH_URL
          ? new URL(process.env.NEXTAUTH_URL).hostname
          : ".vercel.app"
      }`
    );

    console.log("Session cleared. Redirecting...");

    // Redirect after sign-out
    return NextResponse.redirect(
      new URL("/", process.env.NEXTAUTH_URL).toString(),
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
