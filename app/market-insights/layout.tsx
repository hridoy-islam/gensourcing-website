import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Market Insights",

  description:
    "Stay informed with Gen Sourcing’s market insights, industry trends, and supply chain updates. We provide analysis on global sourcing, procurement strategies, manufacturing developments, and international trade dynamics.",

  keywords: [
    "Gen Sourcing Market Insights",
    "Supply Chain Trends",
    "Global Sourcing Insights",
    "Procurement Strategies UK",
    "Manufacturing Industry Updates",
    "International Trade Analysis",
    "Apparel Sourcing Trends",
    "Supplier Market Reports",
  ],

  openGraph: {
    title: "Market Insights | Gen Sourcing",
    description:
      "Explore expert insights on sourcing, procurement, global manufacturing, and supply chain developments from Gen Sourcing — your trusted UK sourcing partner.",
    url: "https://gensourcing.co.uk/market-insights",
    siteName: "Gen Sourcing",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Gen Sourcing Market Insights",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Market Insights | Gen Sourcing",
    description:
      "Industry analysis and sourcing intelligence to help businesses make informed procurement decisions.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://gensourcing.co.uk/market-insights",
  },

  category: "business",
};

export default function MarketInsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
