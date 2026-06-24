import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quality & Innovation",

  description:
    "Sultan Apparels ensures superior quality and innovation in global sourcing. Learn how our structured quality control, ethical practices, and innovative solutions deliver reliable results for businesses worldwide.",

  keywords: [
    "Sultan Apparels Quality Control",
    "Innovative Sourcing Solutions",
    "Ethical Manufacturing Practices",
    "Global Supply Chain Excellence",
    "Procurement Innovation",
    "Quality Assurance UK",
    "Reliable Sourcing Processes",
    "Manufacturing Best Practices",
  ],

  openGraph: {
    title: "Quality & Innovation | Sultan Apparels",
    description:
      "Discover how Sultan Apparels combines innovation, ethical manufacturing, and structured quality control to deliver reliable global sourcing solutions.",
    url: "https://gensourcing.co.uk/quality-innovation",
    siteName: "Sultan Apparels",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Sultan Apparels Quality & Innovation",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Quality & Innovation | Sultan Apparels",
    description:
      "Explore Sultan Apparels’s commitment to quality assurance, innovative sourcing, and ethical manufacturing for reliable global supply chains.",
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
