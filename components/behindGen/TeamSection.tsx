"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Phone } from "lucide-react"; // Ensure lucide-react is installed

gsap.registerPlugin(ScrollTrigger);

export const TeamSection = ({ data }: { data: any }) => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".team-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1, // Ripple effect
        ease: "power3.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="w-full py-24 lg:py-32 bg-white text-black">
      <div className="container mx-auto">
        
        {/* Section Header */}
        <div className="mb-20 space-y-6 max-w-4xl">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl mb-4">
            {data.title}
          </h2>
          <p className="text-xl text-neutral-500 font-light max-w-2xl">
            {data.subtitle}
          </p>
          <div className="h-[2px] w-full bg-black mt-8" />
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {data.members.map((member: any, idx: number) => (
            <div key={idx} className="team-card group cursor-default">
              
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full  scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                {/* Overlay Border on Hover */}
                <div className="absolute inset-0 border-0 group-hover:border-[4px] border-black transition-all duration-300 pointer-events-none" />
              </div>

              {/* Text Info */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold uppercase tracking-tight">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-neutral-500 uppercase tracking-widest border-b border-neutral-200 pb-2 mb-2 inline-block">
                  {member.role}
                </p>
                
                <div className="flex items-center gap-2 text-neutral-600 group-hover:text-black transition-colors pt-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-light tracking-wide">{member.phone}</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};