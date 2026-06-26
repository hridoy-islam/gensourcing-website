"use client";

import React, { useRef } from "react";
import { Hero } from "@/components/shared/Hero";
import { MouseFollower } from "@/components/shared/mouse-follower";
import SmoothScroll from "@/components/shared/smooth-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { 
  ClipboardCheck, 
  ShieldCheck, 
  Factory, 
  Users, 
  Scaling, 
  Activity, 
  Clock,
  CheckCircle2
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// --- Content Data ---
const partnerNetworkContent = {
  hero: {
    title: "Partner Network",
    subtitle: "The Foundation of Every Program. Precision Matching for Long-Term Success.",
  },
  intro: {
    heading: "The Right Factory is the Foundation.",
    description: `We make sure you have the best fit from day one. Our team’s sourcing expertise ensures every partner fits your needs—whether it’s craftsmanship, capacity, or ethical standards.`,
  },
  process: {
    title: "Rigorous Evaluation",
    subtitle: "Due Diligence Protocol / 2024-25",
    description: "Only factories that pass this thorough due diligence become part of our network. This ensures smooth execution, builds dependable partnerships, and supports your long-term success.",
    criteria: [
      {
        icon: ClipboardCheck,
        label: "Technical Accuracy",
        desc: "Design execution and pattern precision assessment.",
      },
      {
        icon: Users,
        label: "Reputation",
        desc: "Client references and historical performance review.",
      },
      {
        icon: ShieldCheck,
        label: "Compliance",
        desc: "Strict social and environmental auditing.",
      },
      {
        icon: Factory,
        label: "Infrastructure",
        desc: "Modern equipment and skilled workforce evaluation.",
      },
      {
        icon: Scaling,
        label: "Scalability",
        desc: "Production capabilities for high-volume orders.",
      },
      {
        icon: Activity,
        label: "Flex Capacity",
        desc: "Agility to handle varying volume requirements.",
      },
      {
        icon: Clock,
        label: "Performance",
        desc: "Proven quality control and on-time delivery records.",
      },
    ],
  },
};

export default function PartnerNetworkPage() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // 1. Intro Reveal
      gsap.from(".intro-text", {
        scrollTrigger: { trigger: ".intro-section", start: "top 80%" },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      // 2. Checklist Animation (Staggered Ticks)
      const items = gsap.utils.toArray(".audit-item");
      items.forEach((item: any, i) => {
        const icon = item.querySelector(".audit-icon");
        const line = item.querySelector(".audit-line");
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
        });

        tl.from(line, { scaleX: 0, duration: 0.6, ease: "expo.out" })
          .from(item, { x: -20, opacity: 0, duration: 0.4 }, "-=0.4")
          .from(icon, { scale: 0, rotate: -45, duration: 0.4, ease: "back.out(1.7)" }, "-=0.2");
      });
    },
    { scope: containerRef }
  );

  return (
    <SmoothScroll>
      {/* <MouseFollower /> */}
      <div ref={containerRef} className="bg-white min-h-screen text-black selection:bg-black selection:text-white">
        
        {/* --- 1. Hero --- */}
        <Hero 
          title={partnerNetworkContent.hero.title} 
          subtitle={partnerNetworkContent.hero.subtitle} 
        />

        {/* --- 2. Intro Statement --- */}
        <section className="intro-section py-20 lg:py-32 container mx-auto  border-b border-neutral-100">
          <div className="mx-auto text-center">
             <div className="intro-text inline-block mb-6 px-3 py-1 border border-black rounded-full">
                <span className="text-xs font-bold uppercase tracking-widest">Sourcing Strategy</span>
             </div>
             <h2 className="intro-text text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1] mb-8">
               {partnerNetworkContent.intro.heading}
             </h2>
             <p className="intro-text text-lg md:text-xl t leading-relaxed max-w-2xl mx-auto">
               {partnerNetworkContent.intro.description}
             </p>
          </div>
        </section>

        {/* --- 3. The Audit Checklist (Visual Diagram) --- */}
        <section className="py-24 lg:py-32 bg-neutral-50">
          <div className="container mx-auto ">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              
              {/* Left Column: Context */}
              <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-8">
                <div>
                  <h3 className="text-4xl font-bold tracking-tighter mb-4">
                    {partnerNetworkContent.process.title}
                  </h3>
                  <p className="text-sm font-mono  uppercase tracking-widest mb-8">
                    {partnerNetworkContent.process.subtitle}
                  </p>
                  <p className="text-neutral-600 leading-relaxed ">
                    {partnerNetworkContent.process.description}
                  </p>
                </div>
                
                {/* Visual Decorative Box */}
                <div className="p-6 bg-secondary-foreground border border-neutral-200 shadow-sm mt-8">
                   <div className="flex items-center gap-3 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                      <span className="font-bold text-sm uppercase text-white">Status: Qualified</span>
                   </div>
                   <div className="h-1 w-full bg-neutral-100 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-white" />
                   </div>
                   <p className="text-xs text-neutral-100 mt-2 font-mono">
                      100% COMPLIANCE RATE REQUIRED
                   </p>
                </div>
                
                {/* Suggestion for diagram */}
                
              </div>

              {/* Right Column: The Checklist */}
              <div className="lg:col-span-8">
                <div className="space-y-0">
                  {partnerNetworkContent.process.criteria.map((item, idx) => (
                    <div key={idx} className="audit-item group relative">
                      {/* Top Border Line */}
                      <div className="audit-line h-[1px] w-full bg-neutral-200 origin-left" />
                      
                      <div className="flex items-start md:items-center gap-6 py-8 md:py-10 px-4 md:px-8 hover:bg-white transition-colors duration-300">
                        {/* Icon Box */}
                        <div className="audit-icon flex-shrink-0 w-12 h-12 flex items-center justify-center bg-secondary text-white rounded-none">
                          <item.icon strokeWidth={1.5} size={24} />
                        </div>

                        {/* Text Content */}
                        <div className="flex-grow cursor-pointer">
                           <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                              <h4 className="text-xl md:text-2xl font-bold tracking-tight">
                                {item.label}
                              </h4>
                              <span className="text-xs font-mono text-neutral-300 uppercase tracking-widest group-hover:text-black transition-colors">
                                Ref_0{idx + 1}
                              </span>
                           </div>
                           <p className="text-neutral-500 font-light group-hover:text-neutral-900 transition-colors">
                             {item.desc}
                           </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* Closing Line */}
                  <div className="audit-line h-[1px] w-full bg-neutral-200 origin-left" />
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>
    </SmoothScroll>
  );
}