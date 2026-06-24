import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner Network",

  description:
    "Explore Sultan Apparels’s global partner network — connecting verified manufacturers, suppliers, and buyers across Asia, Africa, and beyond for ethical, transparent, and efficient sourcing solutions.",

  keywords: [
    "Sultan Apparels Partner Network",
    "Global Supplier Network",
    "Verified Manufacturers",
    "Ethical Sourcing Partners",
    "International Buyer Connections",
    "Supply Chain Partnerships",
    "Trusted Manufacturing Network",
    "Global Sourcing Collaboration",
  ],

  openGraph: {
    title: "Partner Network | Sultan Apparels",
    description:
      "Connect with Sultan Apparels’s trusted network of global suppliers and manufacturers. Our structured partner network ensures reliable sourcing, quality, and transparency.",
    url: "https://gensourcing.co.uk/partner-network",
    siteName: "Sultan Apparels",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Sultan Apparels Partner Network",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Partner Network | Sultan Apparels",
    description:
      "Discover Sultan Apparels’s global network of verified suppliers and manufacturers — enabling transparent, efficient, and reliable sourcing solutions.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://gensourcing.co.uk/partner-network",
  },

  category: "business",
};

export default function PartnerNetworkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
