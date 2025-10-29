'use client'

import { Leva } from "leva";
import AboutHero from "@/components/about/about-hero";
import WhyConsortium from "@/components/about/why-consortium";
import Organizers from "@/components/about/organizers";
import FacultyCoordinators from "@/components/about/faculty-coordinators";
import StudentCoordinators from "@/components/about/student-coordinators";

export default function AboutPage() {
  return (
    <>
      <div className="min-h-screen">
        <AboutHero />
        <WhyConsortium />
        {/* <Organizers /> */}
        {/* <FacultyCoordinators /> */}
        {/* <StudentCoordinators /> */}
      </div>
      <Leva hidden />
    </>
  );
}