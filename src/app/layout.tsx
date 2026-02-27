import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arcano Intelligence | Premium AI & Data Engineering",
  description: "Architecting the Intelligence of Tomorrow. Expert AI solutions, resilient data pipelines, and intelligent automation for the modern enterprise.",
  openGraph: {
    title: "Arcano Intelligence | Premium AI & Data Engineering",
    description: "Architecting the Intelligence of Tomorrow.",
    url: "https://arcanointelligence.com",
    siteName: "Arcano Intelligence",
    images: [
      {
        url: "https://www.arcanointelligence.com/arcano-logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground bg-grid`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
