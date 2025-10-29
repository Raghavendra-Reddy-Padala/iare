
'use client'

import React, { useState } from 'react';
import { Calendar, MapPin, Clock, ChevronDown } from 'lucide-react';
import { GL } from '../gl';
import { Pill } from '../pill';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function Timeline() {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);
  const [hovering, setHovering] = useState(false);

  const events = [
    {
      id: 1,
      name: "Paper Presentations",
      departments: [
        { dept: "AE", venue: "3104" },
        { dept: "CSE", venue: "1111" },
        { dept: "CSE(AI&ML)", venue: "3009" },
        { dept: "CSE(DS)", venue: "3209" },
        { dept: "CSE(CS)", venue: "3217" },
        { dept: "IT", venue: "1405" },
        { dept: "ECE", venue: "1205" },
        { dept: "EEE", venue: "1315" },
        { dept: "ME", venue: "3205" },
        { dept: "CE", venue: "3111" }
      ],
      date: "31 October 2025",
      time: "11:00 AM to 01:00 PM",
      day: "Day 1"
    },
    {
      id: 2,
      name: "LAN Gaming",
      department: "CSE",
      venue: "TBA",
      date: "31 October and 01 November 2025",
      time: "11:00 AM to 04:00 PM",
      day: "Day 1-2"
    },
    {
      id: 3,
      name: "Techno Hunt",
      department: "CSE(AI&ML)",
      venue: "College",
      date: "31 October and 01 November 2025",
      time: "11:00 AM to 04:00 PM",
      day: "Day 1-2"
    },
    {
      id: 4,
      name: "Wing Verse",
      department: "AE",
      venue: "3105",
      date: "31 October and 01 November 2025",
      time: "11:00 AM to 04:00 PM",
      day: "Day 1-2"
    },
    {
      id: 5,
      name: "House of Echoes",
      department: "CSE(CS)",
      venue: "5001/5002/5003/5004",
      date: "31 October 2025",
      time: "11:00 AM to 01:00 PM",
      day: "Day 1"
    },
    {
      id: 6,
      name: "Webnova",
      department: "CSE(DS)",
      venue: "IT park room No.1,2",
      date: "31 October 2025",
      time: "11:00 AM to 04:00 PM",
      day: "Day 1"
    },
    {
      id: 7,
      name: "Murder Mystery",
      department: "EEE",
      venue: "Open Audi",
      date: "31 October and 01 November 2025",
      time: "11:00 AM to 04:00 PM",
      day: "Day 1-2"
    },
    {
      id: 8,
      name: "Poster Presentation",
      department: "ECE",
      venue: "Near Block-2",
      date: "01 November 2025",
      time: "11:00 AM to 04:00 PM",
      day: "Day 2"
    },
    {
      id: 9,
      name: "Short Films and Photography",
      department: "IT",
      venue: "A/V center",
      date: "01 November 2025",
      time: "01:00 PM to 04:00 PM",
      day: "Day 2"
    },
    {
      id: 10,
      name: "Aqua Struct",
      department: "CE",
      venue: "Near Block-2",
      date: "01 November 2025",
      time: "11:00 AM to 04:00 PM",
      day: "Day 2"
    },
    {
      id: 11,
      name: "Project Expo",
      department: "ME",
      venue: "5001/5002/5003/5004",
      date: "01 November 2025",
      time: "11:00 AM to 04:00 PM",
      day: "Day 2"
    }
  ];

  return (
    <>
      <div className="flex flex-col h-svh items-center justify-center">
        <GL hovering={hovering} />

        <div className="text-center relative p-4 z-10">
          <Pill className="mb-8 md:mb-12">SCHEDULE</Pill>
          
          <h1 className="text-7xl sm:text-8xl lg:text-9xl font-sentient font-extrabold leading-none tracking-tighter">
            Event Timeline
            <span className="block mt-4 text-4xl sm:text-5xl md:text-6xl text-gray-400">
              <i className="font-light">Consortium</i> 2025
            </span>
          </h1>
          
          <p className="font-mono text-base sm:text-xl text-foreground/70 text-balance mt-10 max-w-lg mx-auto">
            Two days of innovation, competition, and celebration at IARE's premier tech fest
          </p>

          <Link className="inline-block max-sm:hidden" href="#timeline">
            <Button
              className="mt-16 px-12 py-6 text-xl"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              [View Schedule]
            </Button>
          </Link>
          
          <Link className="contents sm:hidden" href="#timeline">
            <Button
              className="mt-16 text-lg"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              [View Schedule]
            </Button>
          </Link>
        </div>
      </div>

      {/* Timeline Section */}
      <div id="timeline" className="relative z-10 bg-background py-20 px-4">
        <div className="max-w-5xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-foreground/20 hidden md:block" />

          {events.map((event) => (
            <div key={event.id} className="relative mb-12 md:ml-20">
              {/* Timeline Dot */}
              <div className="absolute -left-[4.5rem] top-8 w-4 h-4 rounded-full bg-foreground border-4 border-background hidden md:block" />
              
              {/* Day Badge */}
              <div className="absolute -left-[7rem] top-6 hidden md:block">
                <span className="font-mono text-xs text-foreground/60 whitespace-nowrap">
                  {event.day}
                </span>
              </div>

              {/* Event Card */}
              <div 
                className="border border-foreground/20 rounded-lg p-6 hover:border-foreground/40 transition-all cursor-pointer bg-background/50 backdrop-blur"
                onClick={() => setExpandedEvent(expandedEvent === event.id ? null : event.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl sm:text-3xl font-sentient font-bold mb-2">
                      {event.name}
                    </h3>
                    {!event.departments && (
                      <p className="font-mono text-sm text-foreground/70">
                        {event.department}
                      </p>
                    )}
                  </div>
                  <div className="ml-4 md:hidden">
                    <span className="font-mono text-xs px-3 py-1 rounded-full border border-foreground/20">
                      {event.day}
                    </span>
                  </div>
                </div>

                {/* Event Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 font-mono text-sm text-foreground/80">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-sm text-foreground/80">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  {!event.departments && (
                    <div className="flex items-center gap-2 font-mono text-sm text-foreground/80">
                      <MapPin className="w-4 h-4" />
                      <span>{event.venue}</span>
                    </div>
                  )}
                </div>

                {/* Multiple Departments */}
                {event.departments && (
                  <>
                    <button className="flex items-center gap-2 font-mono text-sm text-foreground/60 hover:text-foreground transition-colors">
                      <span>{event.departments.length} departments</span>
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform ${expandedEvent === event.id ? 'rotate-180' : ''}`} 
                      />
                    </button>

                    {expandedEvent === event.id && (
                      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-foreground/10">
                        {event.departments.map((dept, i) => (
                          <div 
                            key={i} 
                            className="flex items-center justify-between p-3 rounded border border-foreground/10 bg-background/30"
                          >
                            <span className="font-mono text-sm font-semibold">
                              {dept.dept}
                            </span>
                            <span className="font-mono text-xs text-foreground/60 flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {dept.venue}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="max-w-5xl mx-auto mt-20 text-center">
          <p className="font-mono text-sm text-foreground/50">
            All timings are subject to change. Please check with organizers for updates.
          </p>
        </div>
      </div>
    </>
  );
}