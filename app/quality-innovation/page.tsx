"use client";

import React from "react";
import { Hero } from "@/components/shared/Hero";
import { MouseFollower } from "@/components/shared/mouse-follower";
import SmoothScroll from "@/components/shared/smooth-scroll";
import { ContentBlock } from "@/components/shared/contentBlock";

// --- Page Content Data ---
const qualityInnovationData = {
  hero: {
    title: "Quality & Innovation",
    subtitle: "Engineered for Excellence. From molecular material testing to final shipment approval.",
  },
  sections: [
    {
      title: "Built-In Quality Assurance",
      description: `Quality isn’t checked at the end — it’s built in from the start. Every stage of production is engineered for consistency, compliance, and performance. From raw material sourcing to final packaging, our multi-stage inspection system ensures products meet international standards for safety, durability, and performance.

We conduct pilot checks, mid-line inspections, and final audits using AQL/AOQL protocols. For critical items, we carry out 100% inspections, issuing Shipment Release Certificates only after approval. 

Clients can choose our in-house team, trusted third-party agencies, or their own nominated inspectors — all supported with full reporting and photographic evidence.`,
      image: "/quality1.jpg", // Suggested image: Close up of fabric testing or inspection line
    },
    {
      title: "Design & Technical Innovation",
      description: `Innovation drives this process further. Our product development team transforms ideas into production-ready garments through CAD precision, technical feasibility checks, and rapid prototyping.

Materials are tested in accredited labs, while engineers review functionality and design details to refine efficiency. This approach delivers not just compliance, but smarter, faster, and market-aligned apparel solutions.`,
      image: "/quality2.jpg", // Suggested image: Designer using CAD or garment prototyping
    },
  ],
};

export default function QualityInnovationPage() {
  return (
    <SmoothScroll>
      <MouseFollower />
      <div className="bg-white min-h-screen">
        
        {/* --- Hero Section --- */}
        <Hero 
          title={qualityInnovationData.hero.title} 
          subtitle={qualityInnovationData.hero.subtitle} 
        />

        {/* --- Content Sections --- */}
        {qualityInnovationData.sections.map((section, index) => (
          <ContentBlock 
            key={index} 
            data={section} 
            index={index}
          />
        ))}

       

      </div>
    </SmoothScroll>
  );
}