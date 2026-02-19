"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

export const TeamFeatures = ({ data }: { data: any }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  // ✅ ONLY image animation (cards are static now)
  useGSAP(
    () => {
      if (!imageRef.current) return;

      gsap.fromTo(
        imageRef.current,
        {
          clipPath: "inset(100% 0% 0% 0%)",
          scale: 1.15,
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          duration: 1.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            once: true,
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="w-full py-24 lg:py-32 bg-white text-black"
    >
      <div className="container  mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT SIDE */}
          <div className="space-y-12 lg:sticky lg:top-24">
            <div className="space-y-6">
              <p className="text-black font-semibold tracking-[0.2em] uppercase text-xs">
                {data.pretitle}
              </p>
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">
                {data.title}
              </h2>
              <div className="h-1 w-20 bg-black" />
            </div>

            {/* Image */}
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-100 border border-neutral-200">
              <img
                ref={imageRef}
                src={data.image || "/api/placeholder/800/1000"}
                alt="Our Vision"
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-1000 will-change-transform"
              />
            </div>
          </div>

          {/* RIGHT SIDE – Static Cards */}
          <div className="space-y-8 lg:pt-32">
            {data.items.map((item: any, idx: number) => {
              const IconComponent = item.icon || CheckCircle2;

              return (
                <Card
                  key={idx}
                  className="border border-neutral-200 bg-neutral-50 shadow-none rounded-none group hover:bg-black hover:text-white transition-all duration-500 ease-in-out"
                >
                  <CardHeader className="space-y-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-black text-white group-hover:bg-white group-hover:text-black transition-colors duration-500">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-2xl font-bold">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-500 group-hover:text-neutral-300 leading-relaxed text-lg font-light">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
