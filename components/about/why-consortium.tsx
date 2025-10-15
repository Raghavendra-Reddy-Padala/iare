"use client";

import { useState } from "react";
import { GL } from "../gl";
import { Pill } from "../pill";

export default function WhyConsortium() {
  const [hovering, setHovering] = useState(false);
  
  const reasons = [
    {
      title: "Learn & Grow",
      description: "Access cutting-edge workshops, masterclasses, and hands-on sessions led by industry experts and innovators."
    },
    {
      title: "Compete & Excel",
      description: "Participate in exciting competitions spanning coding, robotics, design, and entrepreneurship with amazing prizes."
    },
    {
      title: "Network & Connect",
      description: "Meet like-minded peers, industry professionals, and potential collaborators who share your passion for technology."
    },
    {
      title: "Showcase & Inspire",
      description: "Present your projects, innovations, and ideas to a diverse audience and get valuable feedback from experts."
    },
    {
      title: "Experience & Enjoy",
      description: "Immerse yourself in a vibrant atmosphere filled with tech demonstrations, cultural performances, and entertainment."
    },
    {
      title: "Build Your Future",
      description: "Gain exposure to emerging technologies, career opportunities, and pathways that can shape your professional journey."
    }
  ];
  
  return (
    <div className="relative min-h-screen py-20 px-4">
      <GL hovering={hovering} />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <Pill className="mb-8">WHY CONSORTIUM?</Pill>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sentient font-extrabold tracking-tighter">
            Why You Should
            <span className="block mt-3 text-2xl sm:text-3xl md:text-4xl text-gray-400">
              <i className="font-light">Be Part of This</i>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="border border-foreground/20 p-8 transition-all duration-300 hover:border-foreground/40 hover:bg-foreground/5"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              <div className="text-3xl font-sentient font-bold mb-4">{reason.title}</div>
              <p className="font-mono text-sm text-foreground/70 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="font-mono text-lg text-foreground/80 max-w-3xl mx-auto">
            Consortium 2025 is more than an event—it's an experience that will challenge 
            your limits, expand your horizons, and leave you inspired to create, innovate, 
            and make a difference.
          </p>
        </div>
      </div>
    </div>
  );
}