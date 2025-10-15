"use client";

import { useState } from "react";
import { GL } from "../gl";
import { Pill } from "../pill";
import Image from "next/image";

export default function Organizers() {
  const [hovering, setHovering] = useState(false);
  
  const organizers = [
    {
      name: "Dr. [Name 1]",
      role: "Chief Organizer",
      designation: "Professor & Head of Department",
      image: "/placeholder-user.jpg",
      description: "Leading the vision and execution of Consortium 2025"
    },
    {
      name: "Dr. [Name 2]",
      role: "Co-Organizer",
      designation: "Associate Professor",
      image: "/placeholder-user.jpg",
      description: "Coordinating all technical and cultural events"
    }
  ];
  
  return (
    <div className="relative min-h-screen py-20 px-4 bg-foreground/5">
      <GL hovering={hovering} />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <Pill className="mb-8">LEADERSHIP</Pill>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sentient font-extrabold tracking-tighter">
            Meet Our
            <span className="block mt-3 text-2xl sm:text-3xl md:text-4xl text-gray-400">
              <i className="font-light">Visionary Leaders</i>
            </span>
          </h2>
          <p className="mt-6 font-mono text-base text-foreground/70 max-w-2xl mx-auto">
            The brilliant minds behind Consortium 2025, dedicated to making this 
            event an unforgettable experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {organizers.map((organizer, index) => (
            <div
              key={index}
              className="border border-foreground/20 p-8 transition-all duration-300 hover:border-foreground/40 hover:bg-background/50"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-foreground/20 mb-6">
                  <Image
                    src={organizer.image}
                    alt={organizer.name}
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="text-3xl font-sentient font-bold mb-2">
                  {organizer.name}
                </h3>
                
                <div className="uppercase font-mono text-sm text-primary mb-2">
                  {organizer.role}
                </div>
                
                <div className="font-mono text-xs text-foreground/60 mb-4">
                  {organizer.designation}
                </div>
                
                <p className="font-mono text-sm text-foreground/70 leading-relaxed">
                  {organizer.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}