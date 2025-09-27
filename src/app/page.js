"use client";
import AboutUs from "@/components/AboutUs";
import Community from "@/components/Community";
import CoreFeatures from "@/components/CoreFeatures";
import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import QualityFeatures from "@/components/QualityFeatures";
import Services from "@/components/Services";
import Subscribe from "@/components/Subscribe";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Work from "@/components/Work";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-32">
      <HeroSection />
      <AboutUs />
      <Features />
      <Services />
      <QualityFeatures />
      <CoreFeatures />
      <Work />
      <Team />
      <Testimonials />
      <Subscribe />
    </div>
  );
}
