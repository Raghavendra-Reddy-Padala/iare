'use client'

import Timeline from "@/components/timeline/timeline";
import { Leva } from "leva";

export default function TimelinePage() {
  return (
    <>
      <Timeline />
      <Leva hidden />
    </>
  );
}