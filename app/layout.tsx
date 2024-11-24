import { Roboto, Open_Sans } from "next/font/google";
import "./globals.css";

import { AppSidebar } from "@/components/sidebar/sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { cookies } from "next/headers";

const roboto = Roboto({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const openSans = Open_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata = {
  title: "My Next.js App",
  description: "This is a Next.js application",
};

export async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";
  return (
    <html lang="en">
      <head />
      <body
        className={`${roboto.variable} ${openSans.variable} antialiased flex min-h-screen`}
      >
        <SidebarProvider defaultOpen={defaultOpen}>
          <AppSidebar isOpen={defaultOpen} />
          <main
            className={`transition-all duration-300 ${
              defaultOpen ? "ml-50" : "ml-1"
            } flex-1 p-3`}
          >
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
export default RootLayout;
