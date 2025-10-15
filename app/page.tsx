'use client'

import AboutSection from "@/components/aboutsection";
import Events from "@/components/events";
import { Hero } from "@/components/hero";
import { Leva } from "leva";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Events />
      <Leva hidden />

    </>
  );
}
