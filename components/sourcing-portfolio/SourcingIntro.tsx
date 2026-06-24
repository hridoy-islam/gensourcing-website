"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { sourcingData } from "@/utils/content";
import { LogosGrid } from "./LogosGrid";

gsap.registerPlugin(ScrollTrigger);

export const SourcingIntro = () => {
  const { title, description } = sourcingData.singleSection;
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".fade-up", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <section 
      ref={containerRef} 
      className="relative w-full py-24 bg-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />
      
      <div className="relative container mx-auto ">
        <div className="mx-auto py-8">
          
          {/* Accent Label with Line */}
          <div className="fade-up flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-8 bg-primary/30" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">
              Trusted by Industry Leaders
            </span>
            <div className="h-px w-8 bg-primary/30" />
          </div>

          {/* Title Section */}
          <h2 className="fade-up text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-center mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>

          {/* Decorative Element */}
          <div className="fade-up flex items-center justify-center gap-3 mb-8">
            <div className="h-0.5 w-8 bg-primary/50 rounded-full" />
            <div className="h-2 w-2 bg-primary rounded-full" />
            <div className="h-0.5 w-8 bg-primary/50 rounded-full" />
          </div>

          {/* Description */}
          <p className="fade-up text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed text-center mx-auto">
            {description}
          </p>

        </div>

        
          <LogosGrid />
      </div>
    </section>
  );
};