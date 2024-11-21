/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import NextAuth from "next-auth";
import { authOptions } from "@/lib/authOptions"; // Assuming you exported your authOptions from a separate file

// Export GET and POST methods
export async function GET(req: NextRequest) {
  const res = NextResponse.next(); // Create a response object
  return handleAuth(req, res);
}

export async function POST(req: NextRequest) {
  const res = NextResponse.next(); // Create a response object
  return handleAuth(req, res);
}

// Custom handler to invoke NextAuth with the correct request and response
async function handleAuth(req: NextRequest, res: NextResponse) {
  // Type-casting req to any and passing res to match NextAuth's expected types
  return NextAuth(req as any, res as any, authOptions);
}
