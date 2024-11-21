import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // Check if the route is part of the /blog section
  const path = req.nextUrl.pathname;

  if (path.startsWith("/blog") && !token) {
    // Redirect to the sign-in page if not authenticated
    return NextResponse.redirect(new URL("/api/auth/signin", req.url));
  }

  // Allow access for authenticated users or non-blog routes
  return NextResponse.next();
}

// Apply middleware only to the /blog section
export const config = {
  matcher: ["/blog/:path*"],
};
