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

    // Determine if the environment is production (Vercel) or development (localhost)
    const isProduction = process.env.NODE_ENV === "production";

    // Clear the session cookie
    const headers = new Headers();
    const cookieOptions = [
      `next-auth.session-token=; Path=/; HttpOnly; Max-Age=0; SameSite=Strict`,
    ];

    if (isProduction) {
      // In production (Vercel), set the Secure flag
      cookieOptions.push(
        `Secure; Domain=${process.env.NEXTAUTH_COOKIE_DOMAIN || ""}`
      );
    }

    headers.set("Set-Cookie", cookieOptions.join("; "));

    // Optionally log out the session to confirm it's cleared
    console.log("Session cleared. Redirecting...");

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
