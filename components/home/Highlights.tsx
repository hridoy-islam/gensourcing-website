"use client";

import React, { useEffect, useRef } from "react";
import { homeContent } from "@/utils/content";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Highlights() {
  const { title, description, stats } = homeContent.highlights;
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Entrance animation for the cards
      gsap.from(".stat-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });

      // 2. Counting animation for the numbers
      const statNumbers = document.querySelectorAll(".stat-number");
      
      statNumbers.forEach((el) => {
        const targetValue = el.getAttribute("data-value") || "0";
        // Extract only the numbers (e.g., "73+" becomes 73)
        const numericValue = parseInt(targetValue.replace(/[^\d]/g, ""), 10);
        // Extract the suffix (e.g., "+", "%")
        const suffix = targetValue.replace(/[\d]/g, "");

        const obj = { value: 0 };

        gsap.to(obj, {
          value: numericValue,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          onUpdate: () => {
            el.textContent = Math.floor(obj.value) + suffix;
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-secondary-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{title}</h2>
            <div className="h-[2px] w-12 bg-primary" />
          </div>
          <p className="text-lg text-white/70 leading-relaxed self-center">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card border-l pl-6">
              <span 
                className="stat-number block text-4xl md:text-6xl font-black text-background mb-2"
                data-value={stat.value}
              >
                0
              </span>
              <span className="text-sm md:text-base text-white/70 font-medium uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}