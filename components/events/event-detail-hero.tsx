"use client";

import { useState } from "react";
import { GL } from "../gl";
import { Pill } from "../pill";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

interface EventDetailHeroProps {
  event: any;
}

export default function EventDetailHero({ event }: EventDetailHeroProps) {
  const [hovering, setHovering] = useState(false);
  
  return (
    <div className="relative min-h-screen py-32 px-4">
      <GL hovering={hovering} />
      
      <div className="container mx-auto relative z-10">
        <Link 
          href="/events" 
          className="inline-block mb-8 font-mono text-sm text-foreground/60 hover:text-foreground transition-colors"
        >
          ← Back to Events
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left: Event Logo and Info */}
          <div>
            <Pill className="mb-6">{event.category}</Pill>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-sentient font-extrabold leading-none tracking-tighter mb-4">
              {event.title}
            </h1>
            
            {/* REMOVED: event.tagline */}
            
            <p className="font-mono text-lg text-foreground/80 mb-8 leading-relaxed">
              {/* CHANGED: event.fullDescription to event.detailedDescription (if present) or event.shortDescription */}
              {event.detailedDescription || event.shortDescription}
            </p>

            {/* Quick Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <span className="text-2xl">📅</span>
                <div>
                  <div className="font-mono text-sm text-foreground/60">Date</div>
                  <div className="font-sentient text-lg font-bold">{event.date}</div>
                  {/* REMOVED: event.time */}
                </div>
              </div>
              
              {/* REMOVED: event.venue */}
              
              <div className="flex items-start gap-4">
                <span className="text-2xl">👥</span>
                <div>
                  <div className="font-mono text-sm text-foreground/60">Team Size</div>
                  {/* CHANGED: event.teamSize to event.participants */}
                  <div className="font-sentient text-lg font-bold">{event.participants}</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="text-2xl">💰</span>
                <div>
                  <div className="font-mono text-sm text-foreground/60">Registration Fee</div>
                  <div className="font-sentient text-lg font-bold">₹{event.registrationFee}</div>
                </div>
              </div>
            </div>

            {/* Register Button - Updated to link to register page */}
            <Link href={`/events/${event.id}/register`}>
              <Button 
                className="px-12 py-6 text-lg"
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
              >
                [Register Now]
              </Button>
            </Link>
          </div>

          {/* Right: Event Logo */}
          <div 
            className="relative"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            <div className="border border-foreground/20 p-12 bg-foreground/5">
              <Image
                // CHANGED: src from event.image to event.logo
                src={event.logo}
                alt={event.title}
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}