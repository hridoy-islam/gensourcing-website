"use client";

import React from "react";
import { Hero } from "@/components/shared/Hero";
import { MouseFollower } from "@/components/shared/mouse-follower";
import SmoothScroll from "@/components/shared/smooth-scroll";
import { ContentBlock } from "@/components/shared/contentBlock";

// --- Page Content Data ---
const responsibilityData = {
  hero: {
    title: "Responsibility & Ethics",
    subtitle: "Built into the Core. Shaping every factory choice, product line, and delivery.",
  },
  intro: {
    text: "Responsibility isn’t an add-on — it’s the core of our sourcing model, shaping every factory choice, product line, and delivery. Every decision we make, from partner selection to product delivery, is guided by ethical practice, international compliance, and full transparency. This ensures our buyers in Europe and the US receive apparel that is sustainable, certified, and trustworthy — without compromise on speed or quality."
  },
  sections: [
    {
      title: "Sustainability",
      description: `Sustainability is built into the way we source. We work with manufacturers who adopt eco-friendly processes such as water-saving dyeing, energy efficiency, and waste reduction. 

Certified materials like OEKO-TEX® and GOTS are promoted wherever possible, giving clients the assurance of environmentally responsible apparel that also meets consumer demand for greener fashion.`,
      image: "/res1.jpg", // Suggested: Close-up of organic cotton or eco-dyeing process
    },
    {
      title: "Compliance",
      description: `Compliance is the backbone of reliable sourcing. Every factory in our network is audited for labour standards, worker safety, chemical management, and environmental responsibility. 

We maintain close oversight with third-party certifications, regular audits, and corrective action plans when needed. Detailed compliance reports are shared with clients, ensuring confidence and smooth access to European and US markets.`,
      image: "/res2.jpg", // Suggested: Factory floor safety or audit documentation
    },
    {
      title: "Transparency",
      description: `Transparency ties our process together. Buyers gain real-time visibility across every stage — from factory audits and product inspections to lab tests and shipping milestones. 

Open communication and digital reporting tools provide accountability at each step, reducing surprises and strengthening trust. With full clarity, our clients can make informed decisions and plan with confidence.`,
      image: "/res3.jpg", // Suggested: Digital dashboard or clean supply chain logistics
    },
  ],
};

export default function ResponsibilityPage() {
  return (
    <SmoothScroll>
      <MouseFollower />
      <div className="bg-white min-h-screen">
        
        {/* --- Hero Section --- */}
        <Hero 
          title={responsibilityData.hero.title} 
          subtitle={responsibilityData.hero.subtitle} 
        />

        {/* --- Core Statement Section --- */}
        <section className="py-20 lg:py-32 bg-white border-b border-neutral-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-neutral-400 mb-6 block">
                Our Commitment
              </span>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-tight text-black">
                {responsibilityData.intro.text}
              </p>
            </div>
          </div>
        </section>

        {/* --- Responsibility Sections (Alternating) --- */}
        {responsibilityData.sections.map((section, index) => (
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