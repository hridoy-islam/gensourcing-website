import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get In Touch",

  description:
    "Contact Gen Sourcing — a UK-based sourcing and procurement agency. Speak with our team for global supplier connections, logistics coordination, and structured supply chain solutions.",

  keywords: [
    "Contact Gen Sourcing",
    "Sourcing Agency UK Contact",
    "Procurement Services UK",
    "Supply Chain Consultation",
    "Milton Keynes Sourcing Company",
    "Global Supplier Network UK",
    "International Logistics Support",
  ],

  openGraph: {
    title: "Contact Gen Sourcing | Procurement & Supply Chain Experts",
    description:
      "Get in touch with Gen Sourcing for trusted global sourcing, supplier verification, and logistics coordination. Our team is ready to assist your business.",
    url: "https://gensourcing.co.uk/get-in-touch",
    siteName: "Gen Sourcing",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Contact Gen Sourcing",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Gen Sourcing | UK Sourcing Agency",
    description:
      "Reach out to Gen Sourcing for procurement, supplier sourcing, and logistics support.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://gensourcing.co.uk/get-in-touch",
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
