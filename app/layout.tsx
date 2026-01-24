import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home Repair Express - Professional Home Repair Services",
  description: "Fast, reliable home repair services. Expert technicians ready to help with all your home maintenance and repair needs.",
  icons: {
    icon: "/home-repair-logo.ico",
    shortcut: "/home-repair-logo.ico",
    apple: "/home-repair-logo.ico",
  },
  openGraph: {
    title: "Home Repair Express - Professional Home Repair Services",
    description: "Fast, reliable home repair services. Expert technicians ready to help with all your home maintenance and repair needs.",
    url: "https://homerepairexpress.com",
    siteName: "Home Repair Express",
    images: [
      {
        url: "/home-repair-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Home Repair Express Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Repair Express - Professional Home Repair Services",
    description: "Fast, reliable home repair services. Expert technicians ready to help with all your home maintenance and repair needs.",
    images: ["/home-repair-logo.jpg"],
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://homerepairexpress.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
