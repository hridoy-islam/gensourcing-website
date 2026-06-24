"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/utils/utils";
import { siteConfig } from "@/utils/site-data";
import { Button } from "@/components/ui/button";

// ─── Scroll Context ────────────────────────────────────────────────────────────
export const ScrollContext = React.createContext(false);
export function useScrolled() {
  return React.useContext(ScrollContext);
}

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = React.useState<
    string | null
  >(null);
  const [scrolled, setScrolled] = React.useState(false);

  const toggleMobileSubMenu = (label: string) => {
    setMobileSubMenuOpen(mobileSubMenuOpen === label ? null : label);
  };

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 90);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ScrollContext.Provider value={scrolled} >
      <div className="fixed top-0 left-0 z-50 w-full bg-white">
        {/* ─── TOP HEADER BAR (desktop only) ─── */}
        <div
          className={cn(
            "w-full bg-white max-md:hidden border-b border-black/10 overflow-hidden transition-all duration-300 ",
            scrolled ? "max-h-0 opacity-0 border-b-0" : "max-h-40 opacity-100 bg-white",
          )}
        >
          <div className="h-28 container flex items-center justify-between">
            {/* Left - Social Icons */}
            <div className="flex items-center gap-4">
              {siteConfig.socials.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    className="text-black/70 hover:text-black transition-colors"
                  >
                    <Icon size={18} />
                  </Link>
                );
              })}
            </div>

            {/* Center - Logo */}
            <Link href="/" className="relative block">
              <div className="relative h-9 w-36 md:h-20 md:w-40">
                <Image
                  src="/logo.png"
                  alt="Sultan Apparels"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Right - Contact Button */}
            <Link href="/get-in-touch">
              <Button size={"xl"}>Get in touch</Button>
            </Link>
          </div>
        </div>

        {/* ─── MAIN NAVIGATION ─── */}
        <div className="w-full border-b border-black/10 bg-white backdrop-blur-xl px-5">
          <header className="w-full h-20 flex items-center justify-between bg-white">

            {/* Mobile Logo */}
            <div className="lg:hidden">
              <Link
                href="/"
                className="relative block w-28 h-8"
              >
                <Image
                  src="/logo.png"
                  alt="Sultan Apparels"
                  fill
                  className="object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-10 mx-auto bg-white">
              {siteConfig.navItems.map((item) => (
                <div key={item.label} className="relative group">
                  {item.items ? (
                    <button className="flex items-center gap-1 font-bold uppercase tracking-[1.5px] text-black/80 hover:text-black text-[12px] transition-colors">
                      {item.label}
                      <ChevronDown
                        size={14}
                        className="group-hover:rotate-180 transition-transform duration-300"
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="font-bold uppercase tracking-[1.5px] text-black/80 hover:text-primary text-[12px] transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}

                  {item.items && (
                    <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-white border border-black/10 rounded-lg p-2 min-w-[220px] shadow-2xl flex flex-col">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="text-black/70 hover:text-black hover:bg-black/5 px-4 py-3 rounded-md text-[11px] font-bold uppercase tracking-wider transition-colors block"
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

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2 text-black hover:bg-black/5 rounded-md transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </header>

          {isOpen && (
            <div className="lg:hidden w-full bg-white border-t border-black/10 h-[calc(100vh-80px)] overflow-y-auto">
              {/* Mobile Nav Items */}
              <div className="flex flex-col p-6 space-y-2">
                {siteConfig.navItems.map((item) => (
                  <div
                    key={item.label}
                    className="border-b border-black/5 last:border-0"
                  >
                    {item.items ? (
                      <div className="flex flex-col">
                        <button
                          onClick={() => toggleMobileSubMenu(item.label)}
                          className="flex items-center justify-between w-full text-black font-bold uppercase tracking-wider text-sm py-4"
                        >
                          {item.label}
                          <ChevronDown
                            size={18}
                            className={cn(
                              "transition-transform duration-200",
                              mobileSubMenuOpen === item.label
                                ? "rotate-180"
                                : "",
                            )}
                          />
                        </button>

                        {mobileSubMenuOpen === item.label && (
                          <div className="flex flex-col bg-black/5 rounded-md mb-4">
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                onClick={() => setIsOpen(false)}
                                className="text-zinc-600 hover:text-black text-xs font-bold uppercase tracking-widest py-4 px-6 transition-colors"
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
                        className="block text-black font-bold uppercase tracking-wider text-sm py-4"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </ScrollContext.Provider>
  );
}