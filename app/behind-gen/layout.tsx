import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Behind GEN",

  description:
    "Meet the leadership and vision behind Sultan Apparels. Discover the experience, global expertise, and values that drive our UK-based sourcing and procurement operations.",

  keywords: [
    "Behind Sultan Apparels",
    "Sultan Apparels Leadership",
    "UK Procurement Experts",
    "Sourcing Management Team",
    "Global Supply Chain Professionals",
    "Milton Keynes Sourcing Company",
    "International Trade Experts",
    "Sultan Apparels Founders",
  ],

  openGraph: {
    title: "Behind GEN | Leadership & Vision | Sultan Apparels",
    description:
      "Explore the expertise and global sourcing experience behind Sultan Apparels. Our leadership team ensures ethical manufacturing, transparency, and structured supply chain execution.",
    url: "https://gensourcing.co.uk/behind-gen",
    siteName: "Sultan Apparels",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Behind GEN - Sultan Apparels Leadership",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Behind GEN | Sultan Apparels",
    description:
      "Meet the professionals driving global sourcing, procurement, and supply chain excellence at Sultan Apparels.",
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
