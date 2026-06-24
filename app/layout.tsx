import type { Metadata } from "next";
import { Manrope, DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/utils";
import { Providers } from "@/app/providers";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { MainContent } from "@/components/public/MainContent";

// Font Configuration
const fontHeading = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
});

const fontSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sultan-apparels.com"),

  title: {
    default: "Sultan Apparels | Procurement & Supply Chain Solutions",
    template: "%s | Sultan Apparels",
  },

  description:
    "Sultan Apparels is a UK-based sourcing and procurement agency connecting businesses with verified suppliers and tailored supply chain solutions.",

  keywords: [
    "Sultan Apparels",
    "Sultan Apparels Ltd",
    "Apparel Sourcing UK",
    "Garment Procurement Agency",
    "Supply Chain Solutions",
    "Ethical Manufacturing",
    "Supplier Network Bangladesh",
    "UK Sourcing Company",
  ],

  authors: [{ name: "Sultan Apparels Team" }],
  creator: "Sultan Apparels",
  publisher: "Sultan Apparels",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512.png",
        url: "/android-chrome-512x512.png",
      },
    ],
  },

  manifest: "/site.webmanifest",

  openGraph: {
    title: "Sultan Apparels | Procurement & Supply Chain Solutions",
    description:
      "Sultan Apparels helps businesses connect with verified suppliers and optimise sourcing and procurement processes for scalable growth.",
    url: "https://sultan-apparels.com",
    siteName: "Sultan Apparels",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Sultan Apparels Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sultan Apparels | Procurement & Supply Chain Solutions",
    description:
      "Supplier network, procurement support and smart sourcing solutions for growing businesses.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://sultan-apparels.com",
  },

  category: "business",
  applicationName: "Sultan Apparels",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex flex-col",
          fontHeading.variable,
          fontSans.variable
        )}
      >
        <Providers>
          <Header />
          <MainContent>{children}</MainContent>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}