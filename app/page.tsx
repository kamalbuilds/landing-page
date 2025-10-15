"use client";

import {
  HeroSection,
  AboutSection,
  ServicesSection,
  TeamSection,
  ProjectsSection,
  ContactSection,
  Footer
} from "../components/sections";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}