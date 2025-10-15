"use client";

import Link from "next/link";
import { GL } from "./gl";
import { Pill } from "./pill";
import { Button } from "./ui/button";
import { useState } from "react";

export function Hero() {
  const [hovering, setHovering] = useState(false);
  
  return (
    // CHANGE 1: Center content vertically and horizontally using flex utility classes.
    <div className="flex flex-col h-svh items-center justify-center">
      <GL hovering={hovering} />

      {/* CHANGE 2: Removed old spacing classes (mt-auto, pb-16) since we are centering. z-10 ensures content is above the background effect. */}
      <div className="text-center relative p-4 z-10"> 
        <Pill className="mb-8 md:mb-12">IARE</Pill>
        
        {/* CHANGE 3: Dramatically increased text size for impact. Kept font-sentient as requested. Added font-extrabold for contrast and used leading-none to tighten the title lines. */}
        <h1 className="text-7xl sm:text-8xl lg:text-9xl font-sentient font-extrabold leading-none tracking-tighter">
          Consortium 2025
          {/* Subtitle is kept lighter (font-light) and slightly smaller for visual hierarchy. */}
          <span className="block mt-4 text-4xl sm:text-5xl md:text-6xl text-gray-400">
            <i className="font-light">Iare's</i> TechFest
          </span>
        </h1>
        
        {/* Descriptive text size slightly increased for better readability and impact */}
        <p className="font-mono text-base sm:text-xl text-foreground/70 text-balance mt-10 max-w-lg mx-auto">
          welcome to Iare Tech fest 2025, a celebration of innovation and technology, Register now and be a part of the Event
        </p>

        {/* Desktop Button: Made larger (px-12 py-6 text-xl) for a stronger call to action. */}
        <Link className="inline-block max-sm:hidden" href="/events">
          <Button
            className="mt-16 px-12 py-6 text-xl"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            [Register Now]
          </Button>
        </Link>
        
        {/* Mobile Button: Adjusted size for a better mobile touch target. */}
        <Link className="contents sm:hidden" href="/events">
          <Button
            className="mt-16 text-lg"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            [Register Now]
          </Button>
        </Link>
      </div>
    </div>
  );
}