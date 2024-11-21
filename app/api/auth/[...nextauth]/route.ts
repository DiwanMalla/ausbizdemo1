import { authOptions } from "@/lib/authOptions";
import NextAuth from "next-auth";

// Ensure GET and POST methods are exported
export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
