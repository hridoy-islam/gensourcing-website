import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story",

  description:
    "Discover the story behind Gen Sourcing — a UK-based sourcing and procurement agency built on transparency, ethical manufacturing, and long-term global partnerships.",

  keywords: [
    "Gen Sourcing Story",
    "About Gen Sourcing",
    "UK Sourcing Company",
    "Procurement Agency UK",
    "Supply Chain Experts",
    "Ethical Manufacturing",
    "Global Supplier Network",
    "Milton Keynes Sourcing Agency",
  ],

  openGraph: {
    title: "Our Story | Gen Sourcing",
    description:
      "Learn how Gen Sourcing was founded and how we connect international buyers with trusted manufacturers through structured, ethical, and transparent sourcing solutions.",
    url: "https://gensourcing.co.uk/our-story",
    siteName: "Gen Sourcing",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Gen Sourcing - Our Story",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Our Story | Gen Sourcing",
    description:
      "Explore the mission, vision, and values behind Gen Sourcing — a trusted UK procurement and supply chain partner.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://gensourcing.co.uk/our-story",
  },
};

export default function OurStoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
