"use client";

import React, { useState, useRef } from "react";
import { sourcingData } from "@/utils/content"; // Adjust path as needed
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { AlertCircle } from "lucide-react";

export default function PortfolioGallery() {
  const containerRef = useRef(null);
  const { categories } = sourcingData.portfolio;
  
  // Set default active category to the first one
  const [activeTab, setActiveTab] = useState(categories[0].id);

  // Get current category data
  const activeCategoryData = categories.find((cat) => cat.id === activeTab);

  // Animate when activeTab changes
  useGSAP(
    () => {
      // 1. Animate Images In
      if (activeCategoryData && activeCategoryData.images.length > 0) {
        gsap.fromTo(
          ".portfolio-image",
          { opacity: 0, y: 20, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.05,
            ease: "power2.out",
            clearProps: "all",
          }
        );
      }
    },
    { scope: containerRef, dependencies: [activeTab] }
  );

  return (
    <section ref={containerRef} className="w-full py-24 bg-white min-h-screen">
      <div className="container mx-auto ">
        
        {/* --- Header --- */}
        <div className="mb-12 text-center max-w-3xl mx-auto space-y-4">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-400">
            Product Showcase
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-black">
            The Collection
          </h2>
          <div className="h-[2px] w-12 bg-black mx-auto" />
        </div>

        {/* --- Category Filter (Scrollable) --- */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`
                  relative px-6 py-3 text-sm font-medium tracking-wide uppercase transition-all duration-300 border
                  ${
                    activeTab === cat.id
                      ? "bg-primary text-white border-primary"
                      : "bg-white text-neutral-500 border-neutral-200 hover:border-primary hover:text-primary"
                  }
                `}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* --- Image Grid --- */}
        <div className="min-h-[400px]">
          {activeCategoryData && activeCategoryData.images.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {activeCategoryData.images.map((imgSrc, idx) => (
                <div
                  key={`${activeTab}-${idx}`} // key forces re-render for animation
                  className="portfolio-image group relative aspect-[3/4] overflow-hidden bg-neutral-100 w-full"
                >
                  <img
                    src={imgSrc}
                    alt={`${activeCategoryData.label} ${idx + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  
                  
                </div>
              ))}
            </div>
          ) : (
            // --- Empty State ---
            <div className="flex flex-col items-center justify-center h-64 text-neutral-400 border border-dashed border-neutral-200 bg-neutral-50">
              <AlertCircle className="w-8 h-8 mb-3 opacity-50" />
              <p className="text-sm font-mono uppercase tracking-widest">
                No images available for {activeCategoryData?.label}
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}