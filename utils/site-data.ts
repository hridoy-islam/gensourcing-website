import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,

} from "lucide-react";

import { FaPinterest } from "react-icons/fa";



export const siteConfig = {
  name: "Gen Sourcing Ltd",
  description:
    "Connecting international buyers with reliable manufacturers across Asia and Africa. Ethical, transparent, and end-to-end apparel sourcing solutions.",

  address:
    "100 Avebury Boulevard, Milton Keynes, MK9 1FH United Kingdom",

  email: "team@gensourcing.co.uk",

  phone: "+44 (0) 208 004 6475",

  // ==============================
  // Main Navigation
  // ==============================
  navItems: [
    { label: "Home", href: "/" },
    { label: "Our Story", href: "/our-story" },
    {
      label: "How We Deliver",
      href: "/delivery-process",
      items: [
        { label: "Market Insights", href: "/market-insights" },
        { label: "Partner Network", href: "/partner-network" },
        { label: "Global Logistics", href: "/global-logistics" },
        { label: "Quality & Innovation", href: "/quality-innovation" },
        { label: "Responsible Standards", href: "/responsible-standards" },
      ],
    },
    { label: "Behind Gen", href: "/behind-gen" },
    { label: "Sourcing Portfolio", href: "/sourcing-portfolio" },
    { label: "Partner With Us", href: "/partner-with-us" },
  ],

  // ==============================
  // Social Links
  // ==============================
  socials: [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/company/gen-sourcing-limited/",
    },
    {
      name: "X",
      icon: Twitter, // Twitter icon represents X
      href: "https://x.com/gen_sourcing",
    },
    {
      name: "YouTube",
      icon: Youtube,
      href: "https://www.youtube.com/@GenSourcingUk",
    },
    {
      name: "Pinterest",
      icon: FaPinterest,
      href: "https://uk.pinterest.com/gensourcing_co_uk/",
    },
  ],

  // ==============================
  // Footer Navigation
  // ==============================
  footerNav: [
    {
      title: "Company",
      items: [
        { label: "Home", href: "/" },
        { label: "Our Story", href: "/our-story" },
        { label: "Behind Gen", href: "/behind-gen" },
        { label: "Sourcing Portfolio", href: "/sourcing-portfolio" },
        { label: "Partner With Us", href: "/partner-with-us" },
      ],
    },
    {
      title: "How We Deliver",
      items: [
        { label: "Market Insights", href: "/market-insights" },
        { label: "Partner Network", href: "/partner-network" },
        { label: "Global Logistics", href: "/global-logistics" },
        { label: "Quality & Innovation", href: "/quality-innovation" },
        { label: "Responsible Standards", href: "/responsible-standards" },
      ],
    },
  ],
};
