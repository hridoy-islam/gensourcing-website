"use client";

import * as React from "react";
import { useScrolled } from "@/components/public/Header";

export function MainContent({ children }: { children: React.ReactNode }) {
  const scrolled = useScrolled();

  // Heights in px
  const topBarHeight = 112; // desktop top bar (h-28)
  const navHeight = 80;     // navigation bar (h-20)

  // Check if mobile
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const paddingTop = isMobile
    ? navHeight // only nav height on mobile
    : scrolled
    ? navHeight // desktop scrolled: hide top bar
    : topBarHeight + navHeight; // desktop at top: show top + nav

  return (
    <main
      className="flex-1 duration-300 bg-black transition-[padding-top]"
      style={{ paddingTop: paddingTop }}
    >
      {children}
    </main>
  );
}
