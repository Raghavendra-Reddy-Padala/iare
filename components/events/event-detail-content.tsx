"use client";

import { useState } from "react";
import { GL } from "../gl";
import { Pill } from "../pill";
import Link from "next/link";
import { Button } from "../ui/button";

interface EventDetailContentProps {
  event: any;
}

export default function EventDetailContent({ event }: EventDetailContentProps) {
  const [hovering, setHovering] = useState(false);
  
  const rulesKey = "Rules & Regulations";
  const themesGuidelinesKey = "Themes, Guidelines & Instructions";
  const abstractKey = "Abstract and Deliverables";
  const contactKey = "Contact";
  
  return (
    <div className="relative py-20 px-4">
      <GL hovering={hovering} />
      
      <div className="container mx-auto relative z-10 max-w-5xl">
        
        {/* NOTE: Prize Money section removed as the new JSON structure does not guarantee 1st, 2nd, 3rd prizes. 
           If you want to re-add this, the JSON must be updated to include a 'prizeMoney' object.
        */}

        {/* Themes, Guidelines & Instructions Section */}
        {event[themesGuidelinesKey] && event[themesGuidelinesKey].length > 0 && (
          <section className="mb-20 bg-foreground/5 p-12">
            <Pill className="mb-8">THEMES & GUIDELINES</Pill>
            <h2 className="text-4xl font-sentient font-extrabold mb-12">
              Event Themes, Rules, and Instructions
            </h2>
            
            <ul className="space-y-4">
              {event[themesGuidelinesKey].map((item: string, index: number) => (
                <li 
                  key={index} 
                  className={`flex items-start gap-4 font-mono text-sm text-foreground/80 ${item.includes('---') ? 'my-6 pt-4 border-t border-foreground/20 text-primary font-bold' : ''}`}
                >
                  {/* Display a different marker for separator line */}
                  {item.includes('---') 
                    ? <span className="text-primary font-mono text-sm mt-1">★</span>
                    : <span className="text-primary font-mono text-sm mt-1">→</span>
                  }
                  <span className="flex-1">
                     {/* Remove the separator text from the display */}
                     {item.includes('---') ? item.replace('---', '').trim() : item}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Rules and Regulations Section */}
        {event[rulesKey] && event[rulesKey].length > 0 && (
          <section className="mb-20">
            <Pill className="mb-8">RULES & REGULATIONS</Pill>
            <h2 className="text-4xl font-sentient font-extrabold mb-12">
              Important Guidelines
            </h2>
            
            <div 
              className="border border-foreground/20 p-8"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              <ul className="space-y-4">
                {event[rulesKey].map((rule: string, index: number) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="text-primary font-mono text-sm mt-1">→</span>
                    <span className="font-mono text-sm text-foreground/80 flex-1">
                      {rule}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Abstract and Deliverables Section (Replaces Judging Criteria) */}
        {event[abstractKey] && event[abstractKey].length > 0 && (
          <section className="mb-20 bg-foreground/5 p-12">
            <Pill className="mb-8">ABSTRACT & DELIVERABLES</Pill>
            <h2 className="text-4xl font-sentient font-extrabold mb-12">
              What is Expected / Evaluation Criteria
            </h2>
            
            <div className="space-y-4">
              {event[abstractKey].map((item: string, index: number) => (
                <div
                  key={index}
                  className="border border-foreground/20 p-6 transition-all duration-300 hover:border-foreground/40"
                  onMouseEnter={() => setHovering(true)}
                  onMouseLeave={() => setHovering(false)}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-2xl">✓</div>
                    <div className="font-mono text-base text-foreground/80">
                      {item}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Contact Information */}
        <section className="mb-20">
          <Pill className="mb-8">CONTACT</Pill>
          <h2 className="text-4xl font-sentient font-extrabold mb-12">
            Have Questions?
          </h2>
          
          <div 
            className="border border-foreground/20 p-8"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-sm font-mono text-foreground/60 mb-2">Event Coordinator</div>
                <div className="font-sentient text-lg font-bold">{event[contactKey].name}</div>
              </div>
              <div>
                <div className="text-sm font-mono text-foreground/60 mb-2">Phone</div>
                <a href={`tel:${event[contactKey].phone}`} className="font-mono text-lg text-primary hover:text-primary/80">
                  {event[contactKey].phone}
                </a>
              </div>
              <div>
                <div className="text-sm font-mono text-foreground/60 mb-2">Email</div>
                <a href={`mailto:${event[contactKey].email}`} className="font-mono text-lg text-primary hover:text-primary/80">
                  {event[contactKey].email}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA - UPDATED TO LINK TO /register PAGE */}
        <section className="text-center">
          <h2 className="text-4xl font-sentient font-extrabold mb-6">
            Ready to Participate?
          </h2>
          <p className="font-mono text-foreground/70 mb-8 max-w-2xl mx-auto">
            Register now and secure your spot in {event.title}. Limited seats available!
          </p>
          <Link href={`/events/${event.id}/register`}>
            <Button 
              className="px-12 py-6 text-lg"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              [Register Now]
            </Button>
          </Link>
        </section>

      </div>
    </div>
  );
}