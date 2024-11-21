// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { NextApiRequest, NextApiResponse } from "next";

// Export the handler for both GET and POST methods
export const GET = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, authOptions);
export const POST = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, authOptions);
