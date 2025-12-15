import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { NavbarMenu } from "@/components/ui/NavbarMenu";
import { BackgroundGrid } from "@/components/ui/BackgroundGrid";
import Footer from "@/components/ui/Footer";

const jostSans = Jost({
  variable: "--font-jost-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Branovax Technology | Powering Bold Innovations",
  keywords: [
    "web developer",
    "Hadi Ademola",
    "frontend developer",
    "full-stack developer",
    "JavaScript developer",
    "React developer",
    "Backend developer",
    "Game developer",
    "Django developer",
    "IT Company",
    "Branovax Technology",
  ],
  authors: [{ name: "Hadi Ademola" }, { name: "Ifejika Vincent" }],
  description:
    "Braventy Technology is a bold innovation company specializing in building world-class digital solutions.",
  openGraph: {
    title: "Branovax Technology | Powering Bold Innovations",
    description:
      "Branovax Technology is a bold innovation company specializing in building world-class digital solutions.",
    url: "https://branovax.com",
    siteName: "Branovax Technology | Powering Bold Innovations",
    images: [
      {
        url: "/branovax-home.png",
        width: 1200,
        height: 630,
        alt: "Bravanox Technology Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/Branovax_icon.png",
    shortcut: "/Branovax_icon.png",
    apple: "/Branovax_icon.png",
    other: [
      {
        rel: "mask-icon",
        url: "/Branovax_icon.png",
        color: "#5bbad5",
      },
    ],
  },
  twitter: {
    site: "@Branovax",
    card: "summary_large_image",
    title: "Branovax Technology | Powering Bold Innovations",
    description:
      "Branovax Technology is a bold innovation company specializing in building world-class digital solutions.",
    images: ["/Branovax_home.png"],
    creator: "@Hardeygold205",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jostSans.variable} font-sans antialiased`}>
        <div className="font-sans">
          <NavbarMenu />
          <BackgroundGrid>{children}</BackgroundGrid>
          <Footer />
        </div>
      </body>
    </html>
  );
}
