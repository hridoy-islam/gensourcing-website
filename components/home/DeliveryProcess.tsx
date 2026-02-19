"use client";

import React, { useEffect, useRef } from "react";
import { homeContent } from "@/utils/content";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function DeliveryProcess() {
  const { title, subtitle, features } = homeContent.deliveryProcess;
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Robust reveal: ensures 100% opacity and smooth movement
      gsap.from(".process-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "expo.out",
        clearProps: "all", // Cleans up GSAP styles after animation to prevent layout issues
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto ">
        {/* Header: Left Aligned for a more "Editorial" look */}
        <div className="mb-20 ">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-black mb-6">
            {title}
          </h2>
          <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl">
            {subtitle}
          </p>
        </div>

        {/* The Grid: Using a border-collapse technique for precision */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-zinc-200">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`process-card group relative p-10 md:p-14 border-r border-b border-zinc-200 transition-colors duration-700 hover:bg-zinc-50 flex flex-col justify-between min-h-[350px] cursor-pointer ${
                index === 4 ? "lg:col-span-2" : "" // Makes the 5th item wider to balance the 3-column row
              }`}
            >
              <div>
                <div className="flex justify-between items-center mb-12">
                  <span className="text-xs font-black tracking-[0.3em] text-zinc-300 group-hover:text-black transition-colors duration-500 uppercase">
                    Phase // 0{index + 1}
                  </span>
                  <ArrowUpRight 
                    size={24} 
                    className="text-zinc-200 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" 
                  />
                </div>

                <h3 className="text-3xl font-bold text-black mb-6 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-lg leading-relaxed max-w-sm group-hover:text-zinc-900 transition-colors duration-500">
                  {feature.description}
                </p>
              </div>

              {/* Subtle background number that doesn't compete with text */}
              <div className="absolute bottom-6 right-10 pointer-events-none select-none">
                <span className="text-[12rem] font-bold text-zinc-100 leading-none transition-colors duration-700 group-hover:text-zinc-200">
                  {index + 1}
                </span>
              </div>
            </div>
          ))}
          
          
        </div>
      </div>
    </section>
  );
}