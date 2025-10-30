'use client'

import AboutSection from "@/components/aboutsection";
import Events from "@/components/events";
import { Hero } from "@/components/hero";
import SponsorsSection from "@/components/sponsers";
import { Leva } from "leva";

export default function Home() {
  return (
    <>
      <Hero />
            <SponsorsSection />

      <AboutSection />
      <Events />
      <Leva hidden />

    </>
  );
}
