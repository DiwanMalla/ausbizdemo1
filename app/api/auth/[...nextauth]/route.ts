import { authOptions } from "@/lib/authOptions";
import NextAuth from "next-auth";

// Ensure GET and POST methods are exported
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
