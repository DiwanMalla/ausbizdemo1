import Navbar from "@/components/header";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import Link from "next/link"; // Correct import for Link
import SignOutButton from "../api/auth/signout/page";

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
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Sign In
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-6">
        <div className="flex items-center justify-between mb-6">
          <p className="text-2xl font-semibold ">
            Welcome, {session.user.name}!
          </p>
          <SignOutButton />
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}
