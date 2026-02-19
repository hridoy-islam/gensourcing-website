"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/utils/site-data";
import { MapPin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary pt-24 pb-12 border-t border-neutral-900 overflow-hidden text-left">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          
          <div className="space-y-8">
       
            <Link href="/" className="block relative h-24 w-64 transition-transform hover:scale-105 duration-300">
              <Image
                src="/logo.png"
                alt="Gen Sourcing Logo"
                fill
                className="object-contain object-left brightness-0 invert" 
                priority
              />
            </Link>
            
            <p className="text-neutral-400 text-sm leading-relaxed font-light pr-4 max-w-xs">
              {siteConfig.description}
            </p>
            
            <div className="space-y-4">
              <h4 className="text-white text-xs font-bold tracking-[0.2em] uppercase">
                Connect
              </h4>
              <div className="flex gap-3">
                {siteConfig.socials.map((social, i) => (
                  <Link 
                    key={i} 
                    href={social.href}
                    target="_blank"
                    className="group w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center transition-all duration-300 hover:bg-white hover:border-white"
                  >
                    <social.icon size={16} className="text-neutral-400 transition-colors group-hover:text-black" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
         
          {siteConfig.footerNav.map((section) => (
            <div key={section.title} className="space-y-8">
              <h4 className="text-white font-bold text-xs tracking-[0.2em] uppercase">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="group flex items-center gap-3 text-neutral-400 hover:text-white transition-colors duration-300"
                    >
                      {/* The Animated Dot */}
                      <span className="h-1.5 w-1.5 rounded-full bg-neutral-800 transition-all duration-300 group-hover:bg-white group-hover:scale-125" />
                      
                      <span className="text-sm font-medium transition-transform duration-300 group-hover:translate-x-1">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* --- Column 4: Contact Info --- */}
          <div className="space-y-8">
            <h4 className="text-white font-bold text-xs tracking-[0.2em] uppercase">
              Get In Touch
            </h4>
            <ul className="space-y-6">
              <li className="flex gap-4 group">
                <div className="mt-1 w-10 h-10 shrink-0 bg-neutral-900 flex items-center justify-center rounded-lg group-hover:bg-white transition-all duration-300">
                   <MapPin size={18} className="text-white group-hover:text-black transition-colors" />
                </div>
                <div>
                   <p className="text-neutral-500 font-bold mb-1 uppercase tracking-widest text-[10px]">Headquarters</p>
                   <span className="text-sm text-neutral-300 font-light leading-relaxed block max-w-[200px]">
                     {siteConfig.address}
                   </span>
                </div>
              </li>
              
              <li className="flex gap-4 group">
                <div className="mt-1 w-10 h-10 shrink-0 bg-neutral-900 flex items-center justify-center rounded-lg group-hover:bg-white transition-all duration-300">
                   <Mail size={18} className="text-white group-hover:text-black transition-colors" />
                </div>
                <div>
                   <p className="text-neutral-500 font-bold mb-1 uppercase tracking-widest text-[10px]">Inquiries</p>
                   <span className="text-sm text-neutral-300 font-light block">
                     {siteConfig.email}
                   </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* --- Copyright Bar --- */}
        <div className="mt-20 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
            &copy; {currentYear} Gen Sourcing. All Rights Reserved.
          </p>
          <p className="text-[10px] text-neutral-600 font-mono">
            Designed by Cyberpeers
          </p>
        </div>
      </div>
    </footer>
  );
}