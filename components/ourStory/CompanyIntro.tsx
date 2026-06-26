"use client";

import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface CompanyIntroData {
  image: string;
  title: string;
  description: string;
  buttonHref: string;
  buttonText: string;
}

export const CompanyIntro = ({ data }: { data: CompanyIntroData }) => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".intro-image", {
        opacity: 0,
        x: -50,
        duration: 1.2,
        ease: "power3.out",
      }).from(
        ".intro-content",
        {
          opacity: 0,
          x: 50,
          duration: 1,
          ease: "power3.out",
        },
        "-=1"
      );
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="w-full py-20 lg:py-32 bg-white text-black overflow-hidden">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Image Side - Minimalist & Sharp */}
          <div className="intro-image relative h-[500px] lg:h-[700px] w-full bg-neutral-100">
            <img
              src={data.image}
              alt={data.title}
              className="object-cover w-full h-full  transition-all duration-1000 ease-in-out"
            />
            {/* Decorative Border Box */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-black z-[-1]" />
          </div>

          {/* Content Side */}
          <div className="intro-content flex flex-col justify-center space-y-8">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
              {data.title}
            </h2>
            
            <div className="prose max-w-none">
              <p className="text-lg md:text-xl text-neutral-600 leading-relaxed whitespace-pre-line font-light">
                {data.description}
              </p>
            </div>

            <div className="pt-6">
              <Button
                variant="default"
                size="lg"
                className="rounded-none px-8 h-12 text-md"
              >
                {data.buttonText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};