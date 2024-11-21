// app/api/auth/signout/route.ts
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

// Define the GET handler for sign-out
export async function GET(req: NextApiRequest, res: NextApiResponse) {
  // Retrieve the current session
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    // If no session exists, respond with an authentication error
    return res.status(401).json({ message: "Not authenticated" });
  }

  // Clear the session cookie to sign the user out
  res.setHeader(
    "Set-Cookie",
    "next-auth.session-token=; Path=/; HttpOnly; Max-Age=0"
  );

  // Optionally, redirect after sign-out
  return res.redirect("/");
}
