import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export const siteConfig = {
  name: "Gen Sourcing Ltd",
  description: "Connecting international buyers with reliable manufacturers across Asia and Africa. Ethical, transparent, and end-to-end apparel sourcing solutions.",
  address: "London, United Kingdom & Dhaka, Bangladesh", 
  email: "contact@gensourcing.com", 
  
  // Main Navigation
  navItems: [
    { 
      label: "Home", 
      href: "/" 
    },
    { 
      label: "Our Story", 
      href: "/our-story" 
    },
    { 
      label: "How We Deliver", 
      href: "/delivery-process",
      // Sub-menu items
      items: [
        { label: "Market Insights", href: "/market-insights" },
        { label: "Partner Network", href: "/partner-network" },
        { label: "Global Logistics", href: "/global-logistics" },
        { label: "Quality & Innovation", href: "/quality-innovation" },
        { label: "Responsible Standards", href: "/responsible-standards" },
      ]
    },
    { 
      label: "Behind Gen", 
      href: "/behind-gen" 
    },
    { 
      label: "Sourcing Portfolio", 
      href: "/sourcing-portfolio" 
    },
    { 
      label: "Partner With Us", 
      href: "/partner-with-us" 
    },
  ],
  
  links: {
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
  },
  
  socials: [
    { icon: Facebook, href: "https://facebook.com" },
    { icon: Linkedin, href: "https://linkedin.com" },
    { icon: Twitter, href: "https://twitter.com" },
    { icon: Instagram, href: "https://instagram.com" }
  ],
  
  // Footer Navigation
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