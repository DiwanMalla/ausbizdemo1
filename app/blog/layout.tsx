import Navbar from "@/components/header";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { Link } from "lucide-react";

// app/blog/layout.tsx

export default async function BlogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    return (
      <div>
        <p>You need to be signed in to view this section.</p>
        <Link href="/api/auth/signin">
          <button>Sign In</button>
        </Link>
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <p>Welcome, {session.user.name}!</p>
      {children}
    </div>
  );
}
