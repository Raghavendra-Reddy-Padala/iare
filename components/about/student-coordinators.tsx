"use client";

import { useState } from "react";
import { GL } from "../gl";
import { Pill } from "../pill";
import Image from "next/image";

export default function StudentCoordinators() {
  const [hovering, setHovering] = useState(false);
  
  const studentCoordinators = [
    {
      name: "[Student Name 1]",
      role: "Overall Coordinator",
      year: "IV Year CSE",
      image: "/placeholder-user.jpg",
      phone: "+91 XXXXX XXXXX"
    },
    {
      name: "[Student Name 2]",
      role: "Technical Head",
      year: "IV Year ECE",
      image: "/placeholder-user.jpg",
      phone: "+91 XXXXX XXXXX"
    },
    {
      name: "[Student Name 3]",
      role: "Cultural Head",
      year: "III Year IT",
      image: "/placeholder-user.jpg",
      phone: "+91 XXXXX XXXXX"
    },
    {
      name: "[Student Name 4]",
      role: "Sponsorship Head",
      year: "IV Year ME",
      image: "/placeholder-user.jpg",
      phone: "+91 XXXXX XXXXX"
    },
    {
      name: "[Student Name 5]",
      role: "Marketing Head",
      year: "III Year CSE",
      image: "/placeholder-user.jpg",
      phone: "+91 XXXXX XXXXX"
    },
    {
      name: "[Student Name 6]",
      role: "Design Head",
      year: "III Year ECE",
      image: "/placeholder-user.jpg",
      phone: "+91 XXXXX XXXXX"
    }
  ];
  
  return (
    <div className="relative min-h-screen py-20 px-4 bg-foreground/5">
      <GL hovering={hovering} />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <Pill className="mb-8">STUDENT TEAM</Pill>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sentient font-extrabold tracking-tighter">
            Student
            <span className="block mt-3 text-2xl sm:text-3xl md:text-4xl text-gray-400">
              <i className="font-light">Coordinators</i>
            </span>
          </h2>
          <p className="mt-6 font-mono text-base text-foreground/70 max-w-2xl mx-auto">
            The passionate student leaders driving Consortium 2025 to new heights
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {studentCoordinators.map((student, index) => (
            <div
              key={index}
              className="border border-foreground/20 p-6 transition-all duration-300 hover:border-foreground/40 hover:bg-background/50"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-foreground/20 mb-4">
                  <Image
                    src={student.image}
                    alt={student.name}
                    width={144}
                    height={144}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="text-2xl font-sentient font-bold mb-2">
                  {student.name}
                </h3>
                
                <div className="uppercase font-mono text-xs text-primary mb-1">
                  {student.role}
                </div>
                
                <div className="font-mono text-xs text-foreground/60 mb-3">
                  {student.year}
                </div>
                
                <a 
                  href={`tel:${student.phone}`}
                  className="font-mono text-xs text-foreground/80 hover:text-foreground transition-colors"
                >
                  {student.phone}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="font-mono text-sm text-foreground/60 max-w-2xl mx-auto">
            Have questions? Feel free to reach out to any of our coordinators. 
            We're here to help make your Consortium experience amazing!
          </p>
        </div>
      </div>
    </div>
  );
}

