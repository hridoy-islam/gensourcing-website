import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Market Insights",

  description:
    "Stay informed with Sultan Apparels’s market insights, industry trends, and supply chain updates. We provide analysis on global sourcing, procurement strategies, manufacturing developments, and international trade dynamics.",

  keywords: [
    "Sultan Apparels Market Insights",
    "Supply Chain Trends",
    "Global Sourcing Insights",
    "Procurement Strategies UK",
    "Manufacturing Industry Updates",
    "International Trade Analysis",
    "Apparel Sourcing Trends",
    "Supplier Market Reports",
  ],

  openGraph: {
    title: "Market Insights | Sultan Apparels",
    description:
      "Explore expert insights on sourcing, procurement, global manufacturing, and supply chain developments from Sultan Apparels — your trusted UK sourcing partner.",
    url: "https://sultan-apparels.com/market-insights",
    siteName: "Sultan Apparels",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Sultan Apparels Market Insights",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Market Insights | Sultan Apparels",
    description:
      "Industry analysis and sourcing intelligence to help businesses make informed procurement decisions.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://sultan-apparels.com/market-insights",
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
