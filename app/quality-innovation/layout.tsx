import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quality & Innovation",

  description:
    "Gen Sourcing ensures superior quality and innovation in global sourcing. Learn how our structured quality control, ethical practices, and innovative solutions deliver reliable results for businesses worldwide.",

  keywords: [
    "Gen Sourcing Quality Control",
    "Innovative Sourcing Solutions",
    "Ethical Manufacturing Practices",
    "Global Supply Chain Excellence",
    "Procurement Innovation",
    "Quality Assurance UK",
    "Reliable Sourcing Processes",
    "Manufacturing Best Practices",
  ],

  openGraph: {
    title: "Quality & Innovation | Gen Sourcing",
    description:
      "Discover how Gen Sourcing combines innovation, ethical manufacturing, and structured quality control to deliver reliable global sourcing solutions.",
    url: "https://gensourcing.co.uk/quality-innovation",
    siteName: "Gen Sourcing",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Gen Sourcing Quality & Innovation",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Quality & Innovation | Gen Sourcing",
    description:
      "Explore Gen Sourcing’s commitment to quality assurance, innovative sourcing, and ethical manufacturing for reliable global supply chains.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://gensourcing.co.uk/quality-innovation",
  },

  category: "business",
};

export default function QualityInnovationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
