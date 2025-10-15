"use client";

import { useState } from "react";
import { GL } from "./gl";
import { Pill } from "./pill";
import { Button } from "./ui/button";
import Link from "next/link";

// About Us Section Component
export default function AboutSection() {
  const [hovering, setHovering] = useState(false);
  
  return (
    <div className="flex flex-col min-h-screen items-center justify-center py-20 px-4">
      <GL hovering={hovering} />

      <div className="text-center relative z-10 max-w-4xl">
        <Pill className="mb-6 md:mb-8">ABOUT US</Pill>
        
        {/* Smaller title than Hero, but still impactful */}
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-sentient font-extrabold leading-none tracking-tighter">
          Innovation Meets
          <span className="block mt-3 text-3xl sm:text-4xl md:text-5xl text-gray-400">
            <i className="font-light">Excellence</i>
          </span>
        </h2>
        
        {/* Content paragraphs */}
        <div className="mt-12 space-y-6 font-mono text-base sm:text-lg text-foreground/80 text-balance">
          <p>
            Consortium 2025 is IARE's flagship technical festival, bringing together 
            the brightest minds in technology, innovation, and creativity. This year's 
            edition promises to be our most spectacular yet.
          </p>
          
          <p className="text-foreground/70">
            From cutting-edge workshops to thrilling competitions, from inspiring talks 
            to hands-on demonstrations, Consortium is where ideas come to life and 
            futures are shaped. Join us in celebrating the spirit of innovation.
          </p>
          
          <p className="text-foreground/60">
            Whether you're a coder, designer, entrepreneur, or simply someone passionate 
            about technology, there's something here for everyone.
          </p>
        </div>

        {/* Stats or Features */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
          <div 
            className="border border-foreground/20 p-6 transition-all duration-300 hover:border-foreground/40"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            <div className="text-4xl font-sentient font-bold">50+</div>
            <div className="text-sm font-mono text-foreground/60 mt-2">Events</div>
          </div>
          
          <div 
            className="border border-foreground/20 p-6 transition-all duration-300 hover:border-foreground/40"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            <div className="text-4xl font-sentient font-bold">5000+</div>
            <div className="text-sm font-mono text-foreground/60 mt-2">Participants</div>
          </div>
          
          <div 
            className="border border-foreground/20 p-6 transition-all duration-300 hover:border-foreground/40"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            <div className="text-4xl font-sentient font-bold">3 Days</div>
            <div className="text-sm font-mono text-foreground/60 mt-2">Of Innovation</div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12">
  <Link href="/about">
    <Button
      className="px-10 py-4"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      [More about Us]
    </Button>
  </Link>
</div>
      </div>
    </div>
  );
}