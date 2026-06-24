"use client";

import React from "react";
import { Hero } from "@/components/shared/Hero";
import SmoothScroll from "@/components/shared/smooth-scroll";
import { MouseFollower } from "@/components/shared/mouse-follower";
import { MapPin, Mail } from "lucide-react";
import { siteConfig } from "@/utils/site-data";
import { ContactSection } from "@/components/shared/contact-section";

export default function GetInTouchPage() {
  return (
    <SmoothScroll>
      <MouseFollower />

      <div className="bg-white min-h-screen text-black selection:bg-black selection:text-white">
        {/* --- HERO --- */}
        <Hero
          title="Get In Touch"
          subtitle="Let’s Build Something That Lasts"
        />

        {/* --- TEXT SECTION --- */}
        <section className="py-16  container mx-auto ">
          <div className="h-[2px] w-16 bg-primary mb-10" />

          <p className="text-xl lg:text-2xl font-light leading-relaxed text-neutral-800">
            Whether you're a global buyer seeking reliable sourcing solutions,
            or a manufacturer ready to join a trusted international network —
            we're here to connect, collaborate, and create value together.
            <br />
            <br />
            Our team is always just a message away.
          </p>

          <div className="mt-14 space-y-8 text-neutral-600">
            <div className="flex gap-5">
              <div className="w-12 h-12 bg-black flex items-center justify-center rounded-xl">
                <MapPin size={18} className="text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[2px] text-neutral-500 mb-2">
                  Headquarters
                </p>
                <p className="text-sm font-light leading-relaxed">
                 {siteConfig.address}
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="w-12 h-12 bg-black flex items-center justify-center rounded-xl">
                <Mail size={18} className="text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[2px] text-neutral-500 mb-2">
                  Email
                </p>
                <p className="text-sm font-light">{siteConfig.email}</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- MAP SECTION --- */}
        <section className="pb-8  container mx-auto -mt-32">
          <div className="grid  gap-10">
            {/* MAP */}
            <div className="h-[400px] lg:h-[500px] overflow-hidden rounded-2xl border border-neutral-200">
               <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.3562305537553!2d0.07683977717469792!3d51.5360662091217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a666e51e18bf%3A0xe0eaad93df0e486c!2sTown%20Quay%20Wharf%2C%20Abbey%20Rd%2C%20Barking%20IG11%207BZ%2C%20UK!5e0!3m2!1sen!2sbd!4v1771494641448!5m2!1sen!2sbd"
  width="100%"
  height="100%"
  loading="lazy"
  className="w-full h-full"
  allowFullScreen
/>
            </div>
          </div>
        </section>
        <ContactSection />
      </div>
    </SmoothScroll>
  );
}