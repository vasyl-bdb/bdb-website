import SiteLayout from "@/core/bdb/layout/SiteLayout";

import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import Services from "@/components/home/Services";
import CareerTimeline from "@/components/home/CareerTimeline";
import Competencies from "@/components/home/Competencies";
import Process from "@/components/home/Process";
import CalculatorPreview from "@/components/home/CalculatorPreview";

export default function HomePage() {
  return (
    <SiteLayout>
      <Hero />

      <AboutPreview />

      <Services />

      <CareerTimeline />

      <Competencies />

      <Process />

      <CalculatorPreview />
    </SiteLayout>
  );
}


