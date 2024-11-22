/* eslint-disable @typescript-eslint/no-unused-vars */
// app/api/auth/signout/route.ts
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export async function GET(request: Request) {
  try {
    // Retrieve the current session
    const session = await getServerSession(authOptions);
    console.log("Sign-out request received. Session:", session);

    if (!session) {
      return NextResponse.json(
        { message: "Not authenticated" },
        { status: 401 }
      );
    }

    // Clear the session cookie
    const headers = new Headers();
    headers.set(
      "Set-Cookie",
      `next-auth.session-token=; Path=/; HttpOnly; Max-Age=0; SameSite=Strict`
    );

    // Optionally, redirect after sign-out (WordPress logout URL)
    return NextResponse.redirect(
      new URL(
        "https://your-wordpress-site.com/wp-login.php?action=logout"
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
