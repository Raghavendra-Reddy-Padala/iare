'use client'

import { Leva } from "leva";
import EventsHero from "@/components/events/events-hero";
import EventCategories from "@/components/events/event-categories";
import EventsList from "@/components/events/event-list";

export default function EventsPage() {
  return (
    <>
      <div className="min-h-screen">
        <EventsHero />
        {/* <EventCategories /> */}
        <EventsList />
      </div>
      <Leva hidden />
    </>
  );
}