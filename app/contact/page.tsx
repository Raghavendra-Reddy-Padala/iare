'use client'

import ContactSection from "@/components/contact/contactpage";
import { Leva } from "leva";

export default function Contact() {
  return (
    <>
      <ContactSection />
      <Leva hidden />
    </>
  );
}