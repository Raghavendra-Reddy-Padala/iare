"use client";

import { useState } from "react";
import { GL } from "../gl";
import { Pill } from "../pill";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import eventsData from "@/lib/events-data.json";

export default function EventsList() {
  const [hovering, setHovering] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
  const categories = ["All", "Technical", "Robotics", "Design", "Workshop", "Gaming", "Entrepreneurship"];
  
  const filteredEvents = selectedCategory === "All" 
    ? eventsData.events 
    : eventsData.events.filter(event => event.category === selectedCategory);
  
  return (
    <div className="relative min-h-screen py-20 px-4">
      <GL hovering={hovering} />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <Pill className="mb-8">ALL EVENTS</Pill>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sentient font-extrabold tracking-tighter">
            Browse All
            <span className="block mt-3 text-2xl sm:text-3xl md:text-4xl text-gray-400">
              <i className="font-light">Events</i>
            </span>
          </h2>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 font-mono text-sm border transition-all duration-300 ${
                selectedCategory === category
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-foreground/20 text-foreground/60 hover:border-foreground/40 hover:text-foreground"
              }`}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredEvents.map((event) => (
            <Link
              key={event.id}
              href={`/events/${event.id}`}
              className="group"
            >
              <div
                className="border border-foreground/20 overflow-hidden transition-all duration-300 hover:border-foreground/40 hover:shadow-lg h-full flex flex-col"
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
              >
                {/* Event Logo */}
                <div className="relative w-full h-48 bg-foreground/5 flex items-center justify-center p-8">
                  <Image
                    src={event.logo}
                    alt={event.title}
                    width={200}
                    height={200}
                    className="object-contain max-h-full"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-mono uppercase">
                      {event.category}
                    </span>
                  </div>
                </div>

                {/* Event Details */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-sentient font-bold mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  
                  <p className="text-sm font-mono text-foreground/60 mb-4 italic">
                    {event.tagline}
                  </p>
                  
                  <p className="font-mono text-sm text-foreground/70 mb-4 flex-1">
                    {event.shortDescription}
                  </p>

                  {/* Event Meta Info */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 font-mono text-xs text-foreground/60">
                      <span>📅</span>
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 font-mono text-xs text-foreground/60">
                      <span>📍</span>
                      <span>{event.venue}</span>
                    </div>
                    <div className="flex items-center gap-2 font-mono text-xs text-foreground/60">
                      <span>👥</span>
                      <span>{event.teamSize}</span>
                    </div>
                  </div>

                  {/* Prize Money */}
                  <div className="border-t border-foreground/20 pt-4">
                    <div className="text-lg font-sentient font-bold text-primary">
                      {event.prizeMoney.first}
                    </div>
                    <div className="text-xs font-mono text-foreground/60">
                      Prize Pool
                    </div>
                  </div>

                  {/* View Details Button */}
                  <div className="mt-4">
                    <Button className="w-full">
                      View Details →
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}