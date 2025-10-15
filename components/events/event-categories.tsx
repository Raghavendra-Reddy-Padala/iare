"use client";

import { useState } from "react";
import { GL } from "../gl";
import { Pill } from "../pill";

export default function EventCategories() {
  const [hovering, setHovering] = useState(false);
  
  const categories = [
    {
      title: "Technical Events",
      description: "Coding competitions, hackathons, debugging challenges, and algorithm battles",
      count: "20+",
      emoji: "💻"
    },
    {
      title: "Robotics",
      description: "Robot wars, line followers, drone competitions, and automation challenges",
      count: "10+",
      emoji: "🤖"
    },
    {
      title: "Workshops",
      description: "Hands-on sessions on AI/ML, Web3, IoT, Cloud Computing, and emerging tech",
      count: "15+",
      emoji: "🎓"
    },
    {
      title: "Gaming",
      description: "E-sports tournaments, gaming marathons, and virtual reality experiences",
      count: "8+",
      emoji: "🎮"
    },
    {
      title: "Design & Creative",
      description: "UI/UX challenges, graphic design contests, video editing, and digital art",
      count: "12+",
      emoji: "🎨"
    },
    {
      title: "Entrepreneurship",
      description: "Startup pitches, business plan competitions, and innovation challenges",
      count: "5+",
      emoji: "💡"
    }
  ];
  
  return (
    <div className="relative min-h-screen py-20 px-4 bg-foreground/5">
      <GL hovering={hovering} />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <Pill className="mb-8">CATEGORIES</Pill>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sentient font-extrabold tracking-tighter">
            Find Your
            <span className="block mt-3 text-2xl sm:text-3xl md:text-4xl text-gray-400">
              <i className="font-light">Perfect Event</i>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <div
              key={index}
              className="border border-foreground/20 p-8 transition-all duration-300 hover:border-foreground/40 hover:bg-background/50"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              <div className="text-5xl mb-4">{category.emoji}</div>
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-2xl font-sentient font-bold">{category.title}</h3>
                <span className="text-sm font-mono text-primary">{category.count}</span>
              </div>
              <p className="font-mono text-sm text-foreground/70 leading-relaxed">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}