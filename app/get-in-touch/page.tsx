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
          <div className="h-[2px] w-16 bg-black mb-10" />

          <p className="text-xl lg:text-2xl font-light leading-relaxed text-neutral-800">
            Whether you’re a global buyer seeking reliable sourcing
            solutions, or a manufacturer ready to join a trusted
            international network — we’re here to connect, collaborate,
            and create value together.
            <br /><br />
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
                <p className="text-sm font-light">
                  {siteConfig.email}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- IMAGE + MAP SECTION --- */}
        <section className="pb-8  container mx-auto -mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* IMAGE */}
            <div className="relative h-[400px] lg:h-[500px] overflow-hidden rounded-2xl">
              <img
                src="/get1.jpg"
                alt="International Business Collaboration"
                className="w-full h-full object-cover "
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* MAP */}
            <div className="h-[400px] lg:h-[500px] overflow-hidden rounded-2xl border border-neutral-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d314186.27047977207!2d-0.770503!3d52.0327443!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877aaa77c66b043%3A0xe0eaad93df0e486c!2s100%20Avebury%20Blvd%2C%20Milton%20Keynes%2C%20UK!5e0!3m2!1sen!2sbd!4v1771494641448!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                loading="lazy"
                className="w-full h-full"
                allowFullScreen
              />
            </div>

          </div>
        </section>
<ContactSection/>
      </div>
    </SmoothScroll>
  );
}
