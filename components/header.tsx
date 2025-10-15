"use client"
import Link from "next/link";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Timeline", href: "/timeline" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <div
      className={`fixed z-50 top-0 left-0 w-full transition-all duration-300 ease-out ${
        isScrolled
          ? "pt-4 md:pt-6 bg-background/80 backdrop-blur-md border-b border-foreground/10"
          : "pt-8 md:pt-14 bg-transparent"
      }`}
    >
      <header
        className={`flex items-center justify-between container transition-all duration-300 ${
          isScrolled ? "py-2" : "py-0"
        }`}
      >
        <Link href="/">
          <Logo
            className={`transition-all duration-300 ${
              isScrolled ? "w-[80px] md:w-[100px]" : "w-[100px] md:w-[120px]"
            }`}
          />
        </Link>

        <nav className="flex max-lg:hidden absolute left-1/2 -translate-x-1/2 items-center justify-center gap-x-10">
          {navItems.map((item) => (
            <Link
              className={`uppercase inline-block font-mono transition-colors ease-out duration-150 ${
                pathname === item.href 
                  ? "text-foreground font-bold" 
                  : "text-foreground/60 hover:text-foreground/100"
              }`}
              href={item.href}
              key={item.name}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Link
          className="uppercase max-lg:hidden transition-colors ease-out duration-150 font-mono text-primary hover:text-primary/80"
          href="/contact"
        >
          Register Now
        </Link>

        <MobileMenu />
      </header>
    </div>
  );
}