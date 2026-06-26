"use client";

import React, { useRef } from "react";
import { Hero } from "@/components/shared/Hero";
import { MouseFollower } from "@/components/shared/mouse-follower";
import SmoothScroll from "@/components/shared/smooth-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Ship,
  Plane,
  FileCheck,
  Globe,
  PackageCheck,
  ArrowRightLeft,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// --- Content Data ---
const logisticsContent = {
  hero: {
    title: "Global Logistics",
    subtitle:
      "Speed, Precision, and Full Visibility. From Factory Floor to Final Destination.",
  },
  intro: {
    heading: "Borders Should Never Slow Down Fashion.",
    description:
      "Our logistics team ensures every order moves with speed, precision, and full visibility. We manage every stage of delivery, reducing delays and giving clients full visibility from factory to destination.",
  },
  // New Image Section Data
  visual: {
    image: "/globe.jpg", // Replace with your actual image path (e.g., shipping containers, cargo plane, or busy port)
    caption: "Fig 3.0 — International Freight Network",
    overlayText: "Live Tracking / Global Transit",
  },
  services: [
    {
      icon: Ship,
      title: "Freight Management",
      desc: "We work with trusted freight partners worldwide, securing cargo space and optimizing routes for Air, Sea, and Land transport.",
    },
    {
      icon: FileCheck,
      title: "Customs & Compliance",
      desc: "Handling all details: preparing documentation, coordinating certifications, and clearing customs at both origin and destination.",
    },
    {
      icon: ArrowRightLeft,
      title: "Flexible Terms",
      desc: "Clients may nominate their own forwarders or rely on our network for complete end-to-end management.",
    },
    {
      icon: PackageCheck,
      title: "On-Time Delivery",
      desc: "By combining reliable carriers with proactive planning, we guarantee shipments reach Europe and the US hassle-free.",
    },
  ],
};

export default function GlobalLogisticsPage() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // 1. Intro Stagger
      gsap.from(".logistics-fade", {
        scrollTrigger: { trigger: ".intro-section", start: "top 80%" },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      });

      // 2. Image Parallax & Scale
      gsap.fromTo(
        ".parallax-image",
        { scale: 1.1, y: -50 },
        {
          scale: 1,
          y: 50,
          scrollTrigger: {
            trigger: ".image-section",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );

      // 3. Service Grid Reveal
      gsap.from(".service-card", {
        scrollTrigger: { trigger: ".services-grid", start: "top 75%" },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      });
    },
    { scope: containerRef },
  );

  return (
    <SmoothScroll>
      {/* <MouseFollower /> */}
      <div
        ref={containerRef}
        className="bg-white min-h-screen text-black selection:bg-primary selection:text-white"
      >
        {/* --- 1. Hero --- */}
        <Hero
          title={logisticsContent.hero.title}
          subtitle={logisticsContent.hero.subtitle}
        />

        {/* --- 2. Intro Section --- */}
        <section className="intro-section py-20 lg:py-32 container mx-auto ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end">
            <div>
              <div className="logistics-fade h-[2px] w-16 bg-primary mb-8" />
              <h2 className="logistics-fade text-4xl lg:text-6xl font-bold tracking-tighter leading-[1.05] uppercase">
                {logisticsContent.intro.heading}
              </h2>
            </div>
            <div className="logistics-fade">
              <p className="text-xl text-neutral-600 font-light leading-relaxed">
                {logisticsContent.intro.description}
              </p>
              <div className="mt-8 flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-neutral-400">
                <Globe className="w-4 h-4 text-black" />
                <span>Global Reach: EU / US / UK</span>
              </div>
            </div>
          </div>
        </section>

        {/* --- 3. CINEMATIC IMAGE SECTION --- */}
        <section className="image-section w-full h-[60vh] lg:h-[80vh] overflow-hidden relative">

         
          <div className="absolute inset-0 w-full h-[120%] -top-[10%] z-0">
            <img
              src={logisticsContent.visual.image}
              alt="Global Logistics Network"
              className="parallax-image w-full h-full object-cover filter grayscale contrast-125"
            />
          </div>

          {/* Overlay Content */}
          <div className="absolute inset-0 bg-secondary-foreground/20 z-10 pointer-events-none">
            <div className="absolute bottom-8 left-4 md:bottom-12 md:left-12 text-white">
              <p className="text-xs font-mono border border-white/30 inline-block px-2 py-1 mb-2 backdrop-blur-sm">
                {logisticsContent.visual.overlayText}
              </p>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tighter text-primary">
                Seamless Extension of Sourcing
              </h3>
            </div>

            {/* Technical grid lines overlay */}
            <div className="absolute inset-0 border-[20px] border-white/0">
              <div className="w-full h-full border border-white/20 opacity-50" />
            </div>
          </div>
        </section>

        {/* --- 4. Service Details (Bento Grid) --- */}
        <section className="services-grid py-24 lg:py-32 bg-neutral-50 border-t border-neutral-200">
          <div className="container mx-auto ">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-400 block mb-2">
                  Operational Workflow
                </span>
                <h3 className="text-3xl font-bold tracking-tight">
                  End-to-End Management
                </h3>
              </div>
              <p className="text-sm font-mono text-neutral-500 text-right">
                STATUS: ACTIVE <br /> NETWORK: 40+ COUNTRIES
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-200 border border-neutral-200">
              {logisticsContent.services.map((service, idx) => (
                <div
                  key={idx}
                  className="service-card bg-white p-10 lg:p-14 hover:bg-neutral-100 transition-colors duration-500 group"
                >
                  <div className="mb-6 w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <service.icon strokeWidth={1.5} size={24} />
                  </div>
                  <h4 className="text-2xl font-bold mb-4 tracking-tight">
                    {service.title}
                  </h4>
                  <p className="text-neutral-500 font-light leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </SmoothScroll>
  );
}
