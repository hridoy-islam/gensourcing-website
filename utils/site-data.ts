import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,

} from "lucide-react";

import { FaPinterest } from "react-icons/fa";



export const siteConfig = {
  name: "Sultan Apparels Ltd",
  description:
    "Connecting international buyers with reliable manufacturers across Asia and Africa. Ethical, transparent, and end-to-end apparel sourcing solutions.",

  address:
    "9Town Quay Wharf, Abbey Road, Barking, IG11 7BZ",

  email: "info@sultan-apparels.co.uk",

  phone: "07424893820",

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
        { label: "Behind Sultan Apparels", href: "/behind-sultan-apparels" },
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
      href: "#",
    },
    {
      name: "X",
      icon: Twitter, // Twitter icon represents X
      href: "#",
    },
    {
      name: "YouTube",
      icon: Youtube,
      href: "#",
    },
    {
      name: "Pinterest",
      icon: FaPinterest,
      href: "#",
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
        { label: "Behind Sultan Apparels", href: "/behind-sultan-apparels" },
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
