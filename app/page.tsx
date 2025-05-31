import AboutUsSection from "@/components/AboutUs/AboutUs";
import CareersSection from "@/components/Careers/Carrers";
import ContactSection from "@/components/COntact/Contact";
import { Footer } from "@/components/Footer";
import HeroSection from "@/components/Hero/Hero";
import MethodologySection from "@/components/Methodology/Methodology";
import { Navbar } from "@/components/Navbar";
import ProjectsSection from "@/components/Projects/Projects";
import ServicesSection from "@/components/Services/Services";
import { SocialSEO } from "@/components/SEO/SocialSEO";
import React from "react";

const Main = () => {
  return (
    <main>
      <SocialSEO />
      <Navbar />
      <HeroSection />
      <MethodologySection />
      <ServicesSection />
      <ProjectsSection />
      <AboutUsSection />
      <CareersSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Main;
