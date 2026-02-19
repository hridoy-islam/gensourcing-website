import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Logistics",

  description:
    "Gen Sourcing provides structured global logistics solutions, ensuring smooth international shipping, freight coordination, customs support, and end-to-end supply chain visibility for businesses worldwide.",

  keywords: [
    "Global Logistics UK",
    "International Freight Management",
    "Supply Chain Logistics",
    "Procurement Logistics Solutions",
    "Import Export Coordination",
    "Freight Forwarding Support",
    "Customs Clearance Services",
    "End-to-End Logistics Management",
  ],

  openGraph: {
    title: "Global Logistics | Gen Sourcing",
    description:
      "Reliable international logistics and freight coordination services by Gen Sourcing. We manage global shipping, compliance, and supply chain operations with precision and transparency.",
    url: "https://gensourcing.co.uk/global-logistics",
    siteName: "Gen Sourcing",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Gen Sourcing Global Logistics Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Global Logistics | Gen Sourcing",
    description:
      "International freight, customs coordination, and structured logistics solutions for global businesses.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://gensourcing.co.uk/global-logistics",
  },

  category: "business",
};

export default function GlobalLogisticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
