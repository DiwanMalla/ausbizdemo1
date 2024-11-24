import "./globals.css";
// layout.tsx
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/Theme-Provider";
import { Sidebar } from "@/components/sidebar/sidebar";
import { Navbar } from "@/components/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import MainContent from "@/components/MainContent"; // Corrected import

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AusBiz Consulting",
  description: "Professional B2B consulting services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <div className="flex h-screen overflow-hidden">
              <Sidebar />
              <div className="flex flex-col flex-1 overflow-hidden">
                <Navbar />
                <MainContent>{children}</MainContent>
              </div>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
