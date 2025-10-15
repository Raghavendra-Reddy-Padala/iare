"use client";

import { useState } from "react";
import { GL } from "../gl";
import { Pill } from "../pill";
import Image from "next/image";

export default function FacultyCoordinators() {
  const [hovering, setHovering] = useState(false);
  
  const facultyCoordinators = [
    {
      name: "Dr. [Faculty Name 1]",
      department: "Computer Science & Engineering",
      image: "/placeholder-user.jpg",
      email: "faculty1@iare.ac.in"
    },
    {
      name: "Dr. [Faculty Name 2]",
      department: "Electronics & Communication",
      image: "/placeholder-user.jpg",
      email: "faculty2@iare.ac.in"
    },
    {
      name: "Dr. [Faculty Name 3]",
      department: "Mechanical Engineering",
      image: "/placeholder-user.jpg",
      email: "faculty3@iare.ac.in"
    },
    {
      name: "Dr. [Faculty Name 4]",
      department: "Information Technology",
      image: "/placeholder-user.jpg",
      email: "faculty4@iare.ac.in"
    }
  ];
  
  return (
    <div className="relative min-h-screen py-20 px-4">
      <GL hovering={hovering} />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <Pill className="mb-8">FACULTY TEAM</Pill>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sentient font-extrabold tracking-tighter">
            Faculty
            <span className="block mt-3 text-2xl sm:text-3xl md:text-4xl text-gray-400">
              <i className="font-light">Coordinators</i>
            </span>
          </h2>
          <p className="mt-6 font-mono text-base text-foreground/70 max-w-2xl mx-auto">
            Expert faculty members guiding and mentoring throughout Consortium 2025
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {facultyCoordinators.map((faculty, index) => (
            <div
              key={index}
              className="border border-foreground/20 p-6 transition-all duration-300 hover:border-foreground/40 hover:bg-foreground/5"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-foreground/20 mb-4">
                  <Image
                    src={faculty.image}
                    alt={faculty.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="text-xl font-sentient font-bold mb-2">
                  {faculty.name}
                </h3>
                
                <div className="font-mono text-xs text-foreground/60 mb-3">
                  {faculty.department}
                </div>
                
                <a 
                  href={`mailto:${faculty.email}`}
                  className="font-mono text-xs text-primary hover:text-primary/80 transition-colors"
                >
                  {faculty.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}