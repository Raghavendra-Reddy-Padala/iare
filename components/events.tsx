"use client";

import { useState, useEffect, useCallback } from "react";
import { GL } from "./gl"; // Assuming GL component exists
import { Pill } from "./pill"; // Assuming Pill component exists
import { Button } from "./ui/button"; // Assuming Button component exists
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image"; // Using next/image for optimization
import Link from "next/link";

// 1. EVENT TYPE DEFINITION (No changes needed here)
interface Event {
  id: number;
  title: string;
  category: string;
  description: string;
  prize: string;
  image: string;
}

// 2. EVENTS DATA (No changes needed here)
// 2. EVENTS DATA
const events: Event[] = [
  { id: 1, title: "WebNova", category: "Webathon", description: "Innovative webathon inspiring creativity through AI-powered tools and Prompt Engineering.", prize: "₹300/team", image: "/events/logos/ds.jpg" },
  { id: 2, title: "House of Echoes", category: "Cyber Security", description: "Investigative cybersecurity event uncovering hidden digital crimes through forensic reasoning.", prize: "₹149/team", image: "/events/logos/cs.jpg" },
  { id: 3, title: "Techno Hunt", category: "Treasure Hunt", description: "A thrilling technical treasure hunt blending brainpower, coding, and adventure!", prize: "₹200/team", image: "/events/logos/aiml.jpg" },
  { id: 4, title: "AquaStruct", category: "Concrete Canoe", description: "Design, construct, and race a canoe made entirely out of concrete.", prize: "₹300/team", image: "/events/logos/civil.jpg" },
  { id: 5, title: "EngiVision", category: "Poster Presentation", description: "Interdisciplinary poster presentation to ignite creativity and technical communication.", prize: "₹200/team", image: "/events/logos/ece.jpg" },
  { id: 6, title: "VisionX", category: "Project Expo", description: "Showcases innovative projects promoting creativity, teamwork, and practical learning.", prize: "₹300/team", image: "/events/logos/mech.jpg" },
  { id: 7, title: "BattleLAN", category: "LAN Gaming", description: "Competitive LAN gaming event combining the thrill of gaming with technology creativity.", prize: "₹200/team", image: "/events/logos/cse.jpg" },
  { id: 8, title: "Short Film Contest", category: "Short Film", description: "A celebration of creativity and storytelling through films.", prize: "₹249/team", image: "/events/logos/ds.jpg" },
  { id: 9, title: "Photography Contest", category: "Photography", description: "Capture IARE campus through your creative lens.", prize: "₹99", image: "/events/logos/ds.jpg" },
  { id: 10, title: "Paper Presentation", category: "Technical", description: "Explore, research, and present innovative ideas in technology and science.", prize: "₹200/team", image: "/events/logos/ece.jpg" },
  { id: 11, title: "Murder Mystery", category: "Cyber Crime", description: "An immersive investigative challenge to solve a mysterious crime.", prize: "₹200/team", image: "/events/logos/eee.jpg" },
  { id: 12, title: "AERO EXPO", category: "Exhibition", description: "Showcase innovative aerospace models and working prototypes.", prize: "₹400/team", image:"/events/logos/ero.jpg" },
  { id: 13, title: "RC Simulator", category: "Aviation", description: "Tests piloting precision and control in a virtual flight environment.", prize: "₹300/team", image: "/events/logos/ds.jpg" },
];

// Carousel Arrow SVG Component
const Arrow = ({ direction, onClick }: { direction: "left" | "right"; onClick: () => void }) => (
  <button
  title="hi"
    onClick={onClick}
    className="h-10 w-10 rounded-full bg-foreground/10 hover:bg-foreground/20 flex items-center justify-center transition-colors disabled:opacity-50"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-5 h-5 ${direction === "right" ? "transform rotate-180" : ""}`}>
      <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
    </svg>
  </button>
);


export default function EventsSection() {
  const [hovering, setHovering] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  
  // 3. INITIALIZE CAROUSEL
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  // 4. NAVIGATION HANDLERS
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  
  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
    };
    
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  const activeEvent = events[activeIndex];

  return (
    // IMPROVED RESPONSIVENESS: Removed min-h-screen, adjusted padding
    <div className="flex flex-col items-center justify-center py-12 md:py-20 px-4">
      <GL hovering={hovering} />

      <div className="text-center relative z-10 max-w-6xl w-full">
        <Pill className="mb-6 md:mb-8">EVENTS</Pill>
        
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-sentient font-extrabold leading-none tracking-tighter mb-4">
          Experience
          <span className="block mt-3 text-3xl sm:text-4xl md:text-5xl text-gray-400">
            <i className="font-light">The Innovation</i>
          </span>
        </h2>

        <p className="font-mono text-sm sm:text-base text-foreground/70 mb-12 max-w-2xl mx-auto">
          Explore our diverse range of competitions, workshops, and exhibitions.
        </p>

        {/* 6. RESTRUCTURED LAYOUT FOR CAROUSEL */}
        <div className="mt-12 md:mt-16 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 w-full max-w-5xl mx-auto text-left">
          
          {/* Details Panel - Stacks on top on mobile */}
          <div className="lg:w-1/3 w-full h-80 flex flex-col justify-center order-2 lg:order-1">
            {activeEvent && (
              <div key={activeEvent.id} className="animate-fade-in">
                <div className="text-xs font-mono text-foreground/50 mb-2">
                  {activeEvent.category}
                </div>
                <h3 className="text-4xl sm:text-5xl font-sentient font-bold mb-3">
                  {activeEvent.title}
                </h3>
                <p className="text-sm font-mono text-foreground/70 mb-4 h-16">
                  {activeEvent.description}
                </p>
                <div className="text-2xl font-mono text-primary mb-6">
                  {activeEvent.prize}
                </div>
                
                {/* Carousel Controls */}
                <div className="flex items-center gap-4">
                    <Arrow onClick={scrollPrev} direction="left" />
                    <Arrow onClick={scrollNext} direction="right" />
                    <span className="font-mono text-xs text-foreground/60">
                        {activeIndex + 1} / {events.length}
                    </span>
                </div>
              </div>
            )}
          </div>

          {/* Carousel Viewport */}
          <div className="lg:w-2/3 w-full order-1 lg:order-2">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {events.map((event) => (
                  <div className="flex-grow-0 flex-shrink-0 basis-full p-2" key={event.id}>
                    <div className="aspect-square relative rounded-2xl overflow-hidden">
                      {/* Using next/image for better performance */}
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="mt-16 flex gap-4 justify-center">
          <Link href="/events">

          <Button
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            [View All Events]
          </Button>
            </Link>
        </div>
      </div>
    </div>
  );
}