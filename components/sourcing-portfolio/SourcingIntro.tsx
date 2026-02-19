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
    <section ref={containerRef} className="w-full py-24  bg-white selection:bg-black selection:text-white">
      <div className="container mx-auto ">
        <div className=" mx-auto text-center">
          
          {/* Subtle Accent Label */}
          <span className="fade-up inline-block text-sm font-bold tracking-[0.3em] uppercase mb-6">
            Industry Expertise
          </span>

          {/* Centered Title */}
          <h2 className="fade-up text-4xl lg:text-6xl font-bold tracking-tighter mb-8 leading-[1.1]">
            {title}
          </h2>

          {/* Centered Minimal Divider */}
          <div className="fade-up h-[2px] w-12 bg-black mx-auto " />

          {/* Description Block */}
          <div className="fade-up space-y-2">
            <p className="text-lg lg:text-xl  leading-relaxed whitespace-pre-line text-justify">
              {description}
            </p>
          </div>

          
          
        </div>
              <LogosGrid/>
        
      </div>
    </section>
  );
};