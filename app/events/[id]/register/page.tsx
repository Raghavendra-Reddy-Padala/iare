// app/events/[id]/register/page.tsx
"use client";

import { Leva } from "leva";
import { useParams } from "next/navigation";
import EventRegistration from "@/components/events/event-registration";
import eventsData from "@/lib/events-data.json";
import { notFound } from "next/navigation";

export default function RegisterPage() {
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
        <EventRegistration event={event} />
      </div>
      <Leva hidden />
    </>
  );
}