import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner With Us",

  description:
    "Join Sultan Apparels’s trusted global network. We collaborate with manufacturers, suppliers, and strategic partners to deliver ethical, transparent, and efficient sourcing solutions worldwide.",

  keywords: [
    "Partner With Sultan Apparels",
    "Global Supplier Collaboration",
    "Ethical Manufacturing Partners",
    "International Sourcing Network",
    "Procurement Partnership UK",
    "Trusted Supply Chain Partners",
    "Business Collaboration Opportunities",
    "Supplier Network Membership",
  ],

  openGraph: {
    title: "Partner With Us | Sultan Apparels",
    description:
      "Become a trusted partner with Sultan Apparels and join our global network of verified suppliers and manufacturers. Collaborate with us for ethical, transparent, and efficient sourcing.",
    url: "https://gensourcing.co.uk/partner-with-us",
    siteName: "Sultan Apparels",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Partner With Sultan Apparels",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Partner With Us | Sultan Apparels",
    description:
      "Join Sultan Apparels’s global supplier network and collaborate for reliable, ethical, and structured sourcing solutions.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://gensourcing.co.uk/partner-with-us",
  },

  category: "business",
};

export default function PartnerWithUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
