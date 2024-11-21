/* eslint-disable @typescript-eslint/no-explicit-any */
// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import { authOptions } from "@/lib/authOptions"; // Assuming you exported your authOptions from a separate file
import { NextRequest, NextResponse } from "next/server";

export const handler = async (req: NextRequest, res: NextResponse) => {
  return NextAuth(req as any, res as any, authOptions); // Typecasting to bypass type issues
};

export { handler as GET, handler as POST }; // Export for GET and POST methods
