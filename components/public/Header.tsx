"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/utils/utils";
import { siteConfig } from "@/utils/site-data";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = React.useState<string | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileSubMenu = (label: string) => {
    setMobileSubMenuOpen(mobileSubMenuOpen === label ? null : label);
  };

  return (
  <div className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/90 backdrop-blur-xl">
    <header className="w-full flex flex-col items-center">
      <div className="w-full h-20 flex items-center justify-between px-6 md:px-8 lg:px-12">
        
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Link href="/" className="relative block">
            <div className="relative h-9 w-36 md:h-10 md:w-40">
              <Image
                src="/logo.png"
                alt="Gen Sourcing"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
          {siteConfig.navItems.map((item) => (
            <div key={item.label} className="relative group">
              {item.items ? (
                /* Dropdown Trigger */
                <button
                  className="flex items-center gap-1 font-bold uppercase tracking-[1.5px] text-white/80 hover:text-white text-[11px] md:text-[12px] whitespace-nowrap transition-colors"
                >
                  {item.label}
                  <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                </button>
              ) : (
                /* Standard Link */
                <Link
                  href={item.href}
                  className="relative font-bold uppercase tracking-[1.5px] text-white/80 hover:text-white text-[11px] md:text-[12px] whitespace-nowrap transition-colors"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                </Link>
              )}

              {/* Desktop Dropdown Menu */}
              {item.items && (
                <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-black border border-white/20 backdrop-blur-md rounded-lg p-2 min-w-[220px] shadow-2xl flex flex-col">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="text-white/70 hover:text-white hover:bg-white/10 px-4 py-3 rounded-md text-[11px] font-bold uppercase tracking-wider transition-colors block"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Actions & Mobile Menu Toggle */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <Link href="/contact" className="hidden md:block">
            <Button className="bg-white text-black hover:bg-zinc-200 border-none rounded-md font-bold tracking-wider h-10 px-6 text-xs transition-all">
              CONTACT US
            </Button>
          </Link>

          <button
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-md transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu - Fixed Full Width */}
      {isOpen && (
        <div className="lg:hidden w-full bg-black border-t border-white/10 h-[calc(100vh-80px)] overflow-y-auto">
          <div className="flex flex-col p-6 space-y-2">
            {siteConfig.navItems.map((item) => (
              <div key={item.label} className="border-b border-white/5 last:border-0">
                {item.items ? (
                  <div className="flex flex-col">
                    <button
                      onClick={() => toggleMobileSubMenu(item.label)}
                      className="flex items-center justify-between w-full text-white font-bold uppercase tracking-wider text-sm py-4"
                    >
                      {item.label}
                      <ChevronDown 
                        size={18} 
                        className={cn("transition-transform duration-200", mobileSubMenuOpen === item.label ? "rotate-180" : "")} 
                      />
                    </button>
                    
                    {mobileSubMenuOpen === item.label && (
                      <div className="flex flex-col bg-white/5 rounded-md mb-4">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            onClick={() => setIsOpen(false)}
                            className="text-zinc-400 hover:text-white text-xs font-bold uppercase tracking-widest py-4 px-6 transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-white font-bold uppercase tracking-wider text-sm py-4"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-6 pb-10">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-white text-black py-7 text-sm font-bold tracking-widest rounded-md">
                  CONTACT US
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  </div>
);
}