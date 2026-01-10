import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Storybook",
  description: "Next Storybook",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        <header className="p-4 max-w-6xl mx-auto">
          <Image
            src="/images/logo.png"
            alt="Logo"
            height="100"
            width="300"
          />
        </header>
        <main>
          {children}  
        </main>
        {/* <footer>
          Footer
        </footer> */}
      </body>
    </html>
  );
}
