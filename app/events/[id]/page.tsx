'use client'

import { Leva } from "leva";
import { useParams } from "next/navigation";
import EventDetailHero from "@/components/events/event-detail-hero";
import EventDetailContent from "@/components/events/event-detail-content";
import eventsData from "@/lib/events-data.json";
import { notFound } from "next/navigation";

export default function EventDetailPage() {
  const params = useParams();
  const eventId = params.id as string;
  
  // Find the event from JSON
  const event = eventsData.events.find(e => e.id === eventId);
  
  // If event not found, show 404
  if (!event) {
    notFound();
  }

  return (
    <>
      <div className="min-h-screen">
        <EventDetailHero event={event} />
        <EventDetailContent event={event} />
      </div>
      <Leva hidden />
    </>
  );
}