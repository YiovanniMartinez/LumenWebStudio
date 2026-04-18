import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import DifferentiatorSection from "@/components/DifferentiatorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";
import DemoModal from "@/components/DemoModal";

const Index = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenDemoModal={() => setIsDemoModalOpen(true)} />
      <HeroSection />
      <ProblemSection />
      <DifferentiatorSection />
      <TestimonialsSection />
      <CTASection onOpenDemoModal={() => setIsDemoModalOpen(true)} />
      <FooterSection />
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </div>
  );
};

export default Index;
