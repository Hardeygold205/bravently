import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavbarMenu } from "@/constants/NavbarMenu";
import { BackgroundGrid } from "@/components/ui/BackgroundGrid";
import Footer from "@/constants/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bravently Technology | Powering Bold Innovations",
  description:
    "Braventy Technology is a bold innovation company specializing in building world-class digital solutions.",
  openGraph: {
    title: "Bravently Technology | Powering Bold Innovations",
    description:
      "Braventy Technology is a bold innovation company specializing in building world-class digital solutions.",
    url: "https://bravently.com",
    siteName: "Bravently Technology",
    images: [
      {
        url: "/bravently-logo.png",
        width: 1200,
        height: 630,
        alt: "Bravently Technology",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <div>
          <NavbarMenu />
          <BackgroundGrid>{children}</BackgroundGrid>
          <Footer />
        </div>
      </body>
    </html>
  );
}
