import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get In Touch",

  description:
    "Contact Sultan Apparels — a UK-based sourcing and procurement agency. Speak with our team for global supplier connections, logistics coordination, and structured supply chain solutions.",

  keywords: [
    "Contact Sultan Apparels",
    "Sourcing Agency UK Contact",
    "Procurement Services UK",
    "Supply Chain Consultation",
    "Milton Keynes Sourcing Company",
    "Global Supplier Network UK",
    "International Logistics Support",
  ],

  openGraph: {
    title: "Contact Sultan Apparels | Procurement & Supply Chain Experts",
    description:
      "Get in touch with Sultan Apparels for trusted global sourcing, supplier verification, and logistics coordination. Our team is ready to assist your business.",
    url: "https://sultan-apparels.com/get-in-touch",
    siteName: "Sultan Apparels",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Contact Sultan Apparels",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Sultan Apparels | UK Sourcing Agency",
    description:
      "Reach out to Sultan Apparels for procurement, supplier sourcing, and logistics support.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://sultan-apparels.com/get-in-touch",
  },

  category: "business",
};

export default function GetInTouchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
