import { Roboto, Open_Sans } from "next/font/google"; // Import Google Fonts
import "./globals.css";
import { ApolloProvider } from "@apollo/client";
import { wpApolloClient } from "@/lib/apolloClient";
// Using Google Fonts for Roboto and Open Sans
const roboto = Roboto({
  weight: ["400", "700", "900"], // Specify the desired weights
  subsets: ["latin"], // Optional: specify the subsets like "latin"
  variable: "--font-roboto", // CSS variable for the font
});

const openSans = Open_Sans({
  weight: ["400", "700"], // Specify the desired weights
  subsets: ["latin"], // Optional: specify the subsets like "latin"
  variable: "--font-open-sans", // CSS variable for the font
});

export const metadata = {
  title: "My Next.js App", // Set the title for your page
  description: "This is a Next.js application", // Set the description
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ApolloProvider client={wpApolloClient}>
      <html lang="en">
        <body
          className={`${roboto.variable} ${openSans.variable} antialiased`} // Apply fonts using variables
        >
          {children}
        </body>
      </html>
    </ApolloProvider>
  );
}
