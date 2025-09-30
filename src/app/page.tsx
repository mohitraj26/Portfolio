// src/app/page.tsx (or your main Home component file)

"use client";

import { TypewriterEffectSmoothDemo } from "@/components/TypewriterEffectSmoothDemo"; // Adjust path if needed
import { WobbleCardDemo } from "@/components/WobbleCardDemo";
import { TabsDemo } from "@/components/TabsDemo";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar"; // Adjust path if needed

export default function Home() {
  return (
    <>
      {/* Navbar should be outside the main content flow */}
      <Navbar />

      <main className="h-full bg-black/[0.96] text-white">

        {/* About Section */}
        <section id="about" className="pt-20">
          <WobbleCardDemo />
        </section>

        {/* Projects Section (This is the target for your button) */}
        <section id="projects" className="pt-20">
          <TabsDemo />
        </section>

        {/* Contact Section */}
        <section id="contact" className="pt-20">
          <ContactForm />
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}