// app/layout.tsx (Server-side)
import { Roboto, Open_Sans } from "next/font/google"; // Import Google Fonts
import "./globals.css"; // Import global styles
import SessionWrapper from "@/components/SessionWrapper";

// Using Google Fonts for Roboto and Open Sans
const roboto = Roboto({
  weight: ["400", "700", "900"], // Specify the desired weights
  subsets: ["latin"], // Specify the subsets like "latin"
  variable: "--font-roboto", // Custom CSS variable for the Roboto font
});

const openSans = Open_Sans({
  weight: ["400", "700"], // Specify the desired weights
  subsets: ["latin"], // Specify the subsets like "latin"
  variable: "--font-open-sans", // Custom CSS variable for the Open Sans font
});

export const metadata = {
  title: "My Next.js App", // Set the title for your page
  description: "This is a Next.js application", // Set the description
};

// RootLayout component (Server-side)
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${roboto.variable} ${openSans.variable} antialiased`} // Apply fonts using variables
      >
        {/* Wrap the app in a client-side component */}
        <SessionWrapper>{children}</SessionWrapper>
      </body>
    </html>
  );
}
