import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Behind GEN",

  description:
    "Meet the leadership and vision behind Gen Sourcing. Discover the experience, global expertise, and values that drive our UK-based sourcing and procurement operations.",

  keywords: [
    "Behind Gen Sourcing",
    "Gen Sourcing Leadership",
    "UK Procurement Experts",
    "Sourcing Management Team",
    "Global Supply Chain Professionals",
    "Milton Keynes Sourcing Company",
    "International Trade Experts",
    "Gen Sourcing Founders",
  ],

  openGraph: {
    title: "Behind GEN | Leadership & Vision | Gen Sourcing",
    description:
      "Explore the expertise and global sourcing experience behind Gen Sourcing. Our leadership team ensures ethical manufacturing, transparency, and structured supply chain execution.",
    url: "https://gensourcing.co.uk/behind-gen",
    siteName: "Gen Sourcing",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Behind GEN - Gen Sourcing Leadership",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Behind GEN | Gen Sourcing",
    description:
      "Meet the professionals driving global sourcing, procurement, and supply chain excellence at Gen Sourcing.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://gensourcing.co.uk/behind-gen",
  },

  category: "business",
};

export default function BehindGenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
