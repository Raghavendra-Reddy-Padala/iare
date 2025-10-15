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
  
  return (
    <div className="relative py-20 px-4">
      <GL hovering={hovering} />
      
      <div className="container mx-auto relative z-10 max-w-5xl">
        
        {/* Prize Money Section */}
        <section className="mb-20">
          <Pill className="mb-8">PRIZE POOL</Pill>
          <h2 className="text-4xl font-sentient font-extrabold mb-12">
            Win Big Prizes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div 
              className="border border-foreground/20 p-8 text-center transition-all duration-300 hover:border-foreground/40 hover:bg-foreground/5"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              <div className="text-5xl mb-4">🥇</div>
              <div className="text-sm font-mono text-foreground/60 mb-2">First Prize</div>
              <div className="text-3xl font-sentient font-bold text-primary">
                {event.prizeMoney.first}
              </div>
            </div>
            
            <div 
              className="border border-foreground/20 p-8 text-center transition-all duration-300 hover:border-foreground/40 hover:bg-foreground/5"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              <div className="text-5xl mb-4">🥈</div>
              <div className="text-sm font-mono text-foreground/60 mb-2">Second Prize</div>
              <div className="text-3xl font-sentient font-bold text-primary">
                {event.prizeMoney.second}
              </div>
            </div>
            
            <div 
              className="border border-foreground/20 p-8 text-center transition-all duration-300 hover:border-foreground/40 hover:bg-foreground/5"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              <div className="text-5xl mb-4">🥉</div>
              <div className="text-sm font-mono text-foreground/60 mb-2">Third Prize</div>
              <div className="text-3xl font-sentient font-bold text-primary">
                {event.prizeMoney.third}
              </div>
            </div>
          </div>
        </section>

        {/* Event Rounds/Format */}
        {event.rounds && event.rounds.length > 0 && (
          <section className="mb-20 bg-foreground/5 p-12">
            <Pill className="mb-8">EVENT FORMAT</Pill>
            <h2 className="text-4xl font-sentient font-extrabold mb-12">
              Competition Rounds
            </h2>
            
            <div className="space-y-6">
              {event.rounds.map((round: any, index: number) => (
                <div
                  key={index}
                  className="border border-foreground/20 p-6 transition-all duration-300 hover:border-foreground/40"
                  onMouseEnter={() => setHovering(true)}
                  onMouseLeave={() => setHovering(false)}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl font-sentient font-bold text-primary min-w-[60px]">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-sentient font-bold mb-2">
                        {round.name}
                      </h3>
                      <p className="font-mono text-sm text-foreground/70">
                        {round.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Rules and Regulations */}
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
              {event.rules.map((rule: string, index: number) => (
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

        {/* Judging Criteria */}
        {event.judging && event.judging.length > 0 && (
          <section className="mb-20 bg-foreground/5 p-12">
            <Pill className="mb-8">JUDGING CRITERIA</Pill>
            <h2 className="text-4xl font-sentient font-extrabold mb-12">
              How You'll Be Evaluated
            </h2>
            
            <div className="space-y-4">
              {event.judging.map((criteria: string, index: number) => (
                <div
                  key={index}
                  className="border border-foreground/20 p-6 transition-all duration-300 hover:border-foreground/40"
                  onMouseEnter={() => setHovering(true)}
                  onMouseLeave={() => setHovering(false)}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-2xl">✓</div>
                    <div className="font-mono text-base text-foreground/80">
                      {criteria}
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
                <div className="font-sentient text-lg font-bold">{event.contact.name}</div>
              </div>
              <div>
                <div className="text-sm font-mono text-foreground/60 mb-2">Phone</div>
                <a href={`tel:${event.contact.phone}`} className="font-mono text-lg text-primary hover:text-primary/80">
                  {event.contact.phone}
                </a>
              </div>
              <div>
                <div className="text-sm font-mono text-foreground/60 mb-2">Email</div>
                <a href={`mailto:${event.contact.email}`} className="font-mono text-lg text-primary hover:text-primary/80">
                  {event.contact.email}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center">
          <h2 className="text-4xl font-sentient font-extrabold mb-6">
            Ready to Participate?
          </h2>
          <p className="font-mono text-foreground/70 mb-8 max-w-2xl mx-auto">
            Register now and secure your spot in {event.title}. Limited seats available!
          </p>
          <Link href="https://forms.techmocha.in" target="_blank">
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