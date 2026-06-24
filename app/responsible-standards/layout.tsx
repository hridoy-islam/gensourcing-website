import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Responsible Standards",

  description:
    "Sultan Apparels upholds responsible and ethical standards in global sourcing. Learn how we ensure sustainability, compliance, and transparency across our supply chain and manufacturing processes.",

  keywords: [
    "Responsible Sourcing UK",
    "Ethical Manufacturing Standards",
    "Sustainable Supply Chain",
    "Sultan Apparels Compliance",
    "Global Procurement Ethics",
    "Supplier Responsibility",
    "Transparent Sourcing Practices",
    "Sustainability in Manufacturing",
  ],

  openGraph: {
    title: "Responsible Standards | Sultan Apparels",
    description:
      "Explore Sultan Apparels’s commitment to ethical and sustainable sourcing, responsible manufacturing, and supply chain transparency.",
    url: "https://gensourcing.co.uk/responsible-standards",
    siteName: "Sultan Apparels",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Sultan Apparels Responsible Standards",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Responsible Standards | Sultan Apparels",
    description:
      "Learn about Sultan Apparels’s ethical, sustainable, and transparent practices in global sourcing and procurement.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://gensourcing.co.uk/responsible-standards",
  },

  category: "business",
};

export default function ResponsibleStandardsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
