"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./logo";
import { GL } from "./gl"; // Assuming GL component exists
import { Button } from "./ui/button";



const socialLinks = [
  { name: "Instagram", href: "https://instagram.com" },
  { name: "Twitter", href: "https://twitter.com" },
  { name: "LinkedIn", href: "https://linkedin.com" },
  { name: "YouTube", href: "https://youtube.com" }
];

// Quick Links
const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Events", href: "#events" },
  { name: "Timeline", href: "#timeline" },
  { name: "Contact", href: "#contact" }
];

// Footer Component
export default function Footer() {
  const [hovering, setHovering] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-foreground/10 py-16 px-4">
      <GL hovering={hovering} />

      <div className="container mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Logo className="text-3xl mb-4" />
            <p className="font-mono text-sm text-foreground/70 max-w-xs">
              IARE's flagship technical festival celebrating innovation, technology, and creativity.
            </p>
            <div className="font-mono text-xs text-foreground/50">
              Est. 2025
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-sentient font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-mono text-sm text-foreground/60 hover:text-foreground transition-colors duration-150 inline-block"
                    onMouseEnter={() => setHovering(true)}
                    onMouseLeave={() => setHovering(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-sentient font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 font-mono text-sm text-foreground/70">
              <li>
                <a 
                  href="mailto:consortium@iare.ac.in"
                  className="hover:text-foreground transition-colors duration-150"
                  onMouseEnter={() => setHovering(true)}
                  onMouseLeave={() => setHovering(false)}
                >
                  consortium@iare.ac.in
                </a>
              </li>
              <li>
                <a 
                  href="tel:+911234567890"
                  className="hover:text-foreground transition-colors duration-150"
                  onMouseEnter={() => setHovering(true)}
                  onMouseLeave={() => setHovering(false)}
                >
                  +91 123 456 7890
                </a>
              </li>
              <li className="text-foreground/60">
                Institute of Aeronautical Engineering
                <br />
                Hyderabad, Telangana
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-sentient font-bold text-lg mb-4">Follow Us</h3>
            <ul className="space-y-3">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-foreground/60 hover:text-foreground transition-colors duration-150 inline-flex items-center gap-2"
                    onMouseEnter={() => setHovering(true)}
                    onMouseLeave={() => setHovering(false)}
                  >
                    <span className="inline-block w-1 h-1 bg-foreground/60 rounded-full" />
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="font-mono text-xs text-foreground/50 text-center md:text-left">
              © {currentYear} Consortium. All rights reserved. Institute of Aeronautical Engineering.
            </div>

            {/* Bottom Links */}
            <div className="flex gap-6 font-mono text-xs">
              <Link
                href="/privacy"
                className="text-foreground/50 hover:text-foreground transition-colors duration-150"
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-foreground/50 hover:text-foreground transition-colors duration-150"
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Made with love tag */}
        <div className="text-center mt-8 font-mono text-xs text-foreground/40">
  Made with <span className="text-red-500">♥</span> by{" "}
  <Button 
    className="h-auto p-0 font-mono text-xs text-foreground/40 hover:text-foreground/60"
    onClick={() => window.open('https://techmocha.in', '_blank')}
  >
[     TechMocha     ]
  </Button>
</div>
      </div>
    </footer>
  );
}