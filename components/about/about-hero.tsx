"use client";

import { useState } from "react";
import { GL } from "../gl";
import { Pill } from "../pill";

export default function AboutHero() {
  const [hovering, setHovering] = useState(false);
  
  return (
    <div className="flex flex-col min-h-screen items-center justify-center py-20 px-4">
      <GL hovering={hovering} />

      <div className="text-center relative z-10 max-w-5xl">
        <Pill className="mb-8 md:mb-12">ABOUT CONSORTIUM 2025</Pill>
        
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-sentient font-extrabold leading-none tracking-tighter">
          Where Innovation
          <span className="block mt-4 text-4xl sm:text-5xl md:text-6xl text-gray-400">
            <i className="font-light">Takes Flight</i>
          </span>
        </h1>
        
        <div className="mt-12 space-y-8 font-mono text-lg sm:text-xl text-foreground/80 text-balance max-w-3xl mx-auto">
          <p>
            Consortium is not just a tech fest—it's a movement. A gathering of minds, 
            a celebration of innovation, and a platform where ideas transform into reality.
          </p>
          
          <p className="text-foreground/70">
            Organized by the Institute of Aeronautical Engineering (IARE), Consortium 
            has become the epicenter of technological brilliance, creative expression, 
            and collaborative spirit in the region.
          </p>
        </div>
      </div>
    </div>
  );
}