import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sourcing Portfolio",

  description:
    "Explore Gen Sourcing’s sourcing portfolio showcasing our successful projects, verified supplier collaborations, and global procurement achievements. See how we deliver reliable, ethical, and efficient sourcing solutions.",

  keywords: [
    "Gen Sourcing Portfolio",
    "Global Sourcing Projects",
    "Supplier Collaboration Cases",
    "Procurement Success Stories",
    "Ethical Sourcing Portfolio",
    "International Manufacturing Projects",
    "Supply Chain Achievements",
    "Verified Supplier Network",
  ],

  openGraph: {
    title: "Sourcing Portfolio | Gen Sourcing",
    description:
      "Discover Gen Sourcing’s portfolio of global sourcing projects, highlighting successful collaborations, quality management, and ethical procurement practices.",
    url: "https://gensourcing.co.uk/sourcing-portfolio",
    siteName: "Gen Sourcing",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Gen Sourcing Sourcing Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sourcing Portfolio | Gen Sourcing",
    description:
      "View Gen Sourcing’s portfolio of verified supplier collaborations, procurement projects, and ethical sourcing success stories.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://gensourcing.co.uk/sourcing-portfolio",
  },

  category: "business",
};

export default function SourcingPortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
