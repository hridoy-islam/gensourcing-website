"use client";

import React from "react";
import { Hero } from "@/components/shared/Hero";
import SmoothScroll from "@/components/shared/smooth-scroll";
import { MouseFollower } from "@/components/shared/mouse-follower";
import { MapPin, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/utils/site-data";
import { ContactSection } from "@/components/shared/contact-section";

export default function GetInTouchPage() {
  return (
    <SmoothScroll>
      {/* <MouseFollower /> */}

      <div className="bg-white min-h-screen text-black selection:bg-black selection:text-white">
        {/* --- HERO --- */}
        <Hero
          title="Get In Touch"
          subtitle="Let’s Build Something That Lasts"
        />

        {/* --- TEXT SECTION --- */}
        <section className=" container mx-auto ">

          <p className="text-xl lg:text-2xl font-light leading-relaxed text-neutral-800">
            Whether you're a global buyer seeking reliable sourcing solutions,
            or a manufacturer ready to join a trusted international network —
            we're here to connect, collaborate, and create value together.
            <br />
            <br />
            Our team is always just a message away.
          </p>

        </section>

        {/* --- MAP SECTION --- */}
        <ContactSection />
        <section className="pb-8  container mx-auto -mt-32">
          <div className="grid  gap-10">
            {/* MAP */}
            <div className="h-[400px] lg:h-[500px] overflow-hidden rounded-2xl border border-neutral-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155.11808087880792!2d0.07489096435850616!3d51.53359031902251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a614f5fa35bf%3A0xc6daa53a9c88d876!2sTown%20Quay%20Wharf%2C%20Barking%20IG11%207BZ%2C%20UK!5e0!3m2!1sen!2sbd!4v1782381802562!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                loading="lazy"
                className="w-full h-full"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      </div>
    </SmoothScroll>
  );
}
