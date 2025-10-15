"use client";

import { useState } from "react";
import { GL } from "../gl";
import { Pill } from "../pill";

export default function EventsHero() {
  const [hovering, setHovering] = useState(false);
  
  return (
    <div className="flex flex-col min-h-screen items-center justify-center py-20 px-4">
      <GL hovering={hovering} />

      <div className="text-center relative z-10 max-w-5xl">
        <Pill className="mb-8 md:mb-12">EVENTS</Pill>
        
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-sentient font-extrabold leading-none tracking-tighter">
          50+ Events
          <span className="block mt-4 text-4xl sm:text-5xl md:text-6xl text-gray-400">
            <i className="font-light">Endless Possibilities</i>
          </span>
        </h1>
        
        <div className="mt-12 space-y-6 font-mono text-lg sm:text-xl text-foreground/80 text-balance max-w-3xl mx-auto">
          <p>
            From coding marathons to robotics competitions, from design challenges 
            to entrepreneurship bootcamps—discover events that match your passion.
          </p>
          
          <p className="text-foreground/70">
            Each event is carefully curated to challenge your skills, expand your 
            knowledge, and provide unforgettable experiences.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
          <div 
            className="border border-foreground/20 p-6 transition-all duration-300 hover:border-foreground/40"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            <div className="text-4xl font-sentient font-bold">Technical</div>
            <div className="text-sm font-mono text-foreground/60 mt-2">Code, Build, Innovate</div>
          </div>
          
          <div 
            className="border border-foreground/20 p-6 transition-all duration-300 hover:border-foreground/40"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            <div className="text-4xl font-sentient font-bold">Workshops</div>
            <div className="text-sm font-mono text-foreground/60 mt-2">Learn from Experts</div>
          </div>
          
          <div 
            className="border border-foreground/20 p-6 transition-all duration-300 hover:border-foreground/40"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            <div className="text-4xl font-sentient font-bold">Competitions</div>
            <div className="text-sm font-mono text-foreground/60 mt-2">Compete & Win</div>
          </div>
        </div>
      </div>
    </div>
  );
}