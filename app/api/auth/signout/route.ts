/* eslint-disable @typescript-eslint/no-unused-vars */
// app/api/auth/signout/route.ts
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

// Define the GET handler for sign-out
export async function GET(request: Request) {
  try {
    // Retrieve the current session
    const session = await getServerSession(authOptions);

    if (!session) {
      // If no session exists, respond with an authentication error
      return NextResponse.json(
        { message: "Not authenticated" },
        { status: 401 }
      );
    }

    // Clear the session cookie to sign the user out
    const cookies = request.headers.get("cookie");
    const headers = new Headers();

    // Clear the session cookie
    headers.set(
      "Set-Cookie",
      `next-auth.session-token=; Path=/; HttpOnly; Max-Age=0; Secure; SameSite=Strict; Domain=${
        process.env.NEXTAUTH_COOKIE_DOMAIN || ""
      }`
    );

    // Optionally, redirect after sign-out
    return NextResponse.redirect(
      new URL("/", process.env.NEXTAUTH_URL).toString(),
      { headers }
    );
  } catch (error) {
    // Log error and return a 500 status code if something goes wrong
    console.error("Error during sign-out:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
