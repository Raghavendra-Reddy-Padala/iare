"use client";

import { useState } from "react";
import { GL } from "./gl";
import { Pill } from "./pill";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

// Sponsors Section Component
export default function SponsorsSection() {
  const [hovering, setHovering] = useState(false);
  
  const sponsors = [
    {
      name: "GOBYK",
      title: "Event Partner",
      contact: "+918639741212",
      website: "www.gobyk.in",
      websiteUrl: "https://www.gobyk.in",
      image: "/sponser1.jpg"
    },
    {
      name: "Ivy Overseas",
      title: "Event Partner",
      contact: "+919719713434",
      website: "www.ivyoverseas.com",
      websiteUrl: "https://www.ivyoverseas.com/",
      image: "/sponser2.jpg"
    }
  ];
  
  return (
    <div className="flex flex-col min-h-screen items-center justify-center py-20 px-4">
      <GL hovering={hovering} />

      <div className="text-center relative z-10 max-w-6xl w-full">
        <Pill className="mb-6 md:mb-8">OUR SPONSORS</Pill>
        
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-sentient font-extrabold leading-none tracking-tighter">
          Powered By
          <span className="block mt-3 text-3xl sm:text-4xl md:text-5xl text-gray-400">
            <i className="font-light">Innovation Partners</i>
          </span>
        </h2>
        
        <p className="font-mono text-base sm:text-lg text-foreground/70 text-balance mt-10 max-w-2xl mx-auto">
          We're grateful to our sponsors who make Consortium 2025 possible. 
          Their support drives innovation and excellence.
        </p>

        {/* Sponsors Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <div 
              key={index}
              className="border border-foreground/20 p-8 transition-all duration-300 hover:border-foreground/40"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              {/* Sponsor Image */}
              <div className="relative w-full h-40 mb-6 bg-foreground/5 flex items-center justify-center">
                <Image
                  src={sponsor.image}
                  alt={sponsor.name}
                  fill
                  className="object-contain p-4"
                />
              </div>
              
              {/* Sponsor Title */}
              <div className="text-xs font-mono text-foreground/50 uppercase tracking-wider mb-2">
                {sponsor.title}
              </div>
              
              {/* Sponsor Name */}
              <h3 className="text-3xl font-sentient font-bold mb-6">
                {sponsor.name}
              </h3>
              
              {/* Contact Info */}
              <div className="space-y-3 font-mono text-sm text-foreground/70">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-foreground/50">Contact:</span>
                  <a 
                    href={`tel:${sponsor.contact.replace(/\s/g, '')}`}
                    className="hover:text-foreground transition-colors"
                  >
                    {sponsor.contact}
                  </a>
                </div>
                
                <div className="flex items-center justify-center gap-2">
                  <span className="text-foreground/50">Website:</span>
                  <a 
                    href={sponsor.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    {sponsor.website}
                  </a>
                </div>
              </div>
              
              {/* Visit Button */}
              <div className="mt-6">
                <Link href={sponsor.websiteUrl} target="_blank" rel="noopener noreferrer">
                  <Button 
                    className="w-full"
                    variant="outline"
                  >
                    [Visit Website]
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Become a Sponsor CTA */}
        <div className="mt-16 border border-foreground/20 p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-sentient font-bold mb-4">
            Interested in Sponsoring?
          </h3>
          <p className="font-mono text-sm text-foreground/70 mb-6">
            Join us in shaping the future of innovation. Partner with Consortium 2025 
            and connect with the brightest minds in technology.
          </p>
          <Link href="/contact">
            <Button
              className="px-10 py-4"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              [Become a Sponsor]
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}