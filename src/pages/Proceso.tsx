import { useState } from "react";
import Navbar from "@/components/Navbar";
import HowItWorksSection from "@/components/HowItWorksSection";
import FooterSection from "@/components/FooterSection";
import DemoModal from "@/components/DemoModal";

const Proceso = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background pt-20 md:pt-24">
      <Navbar onOpenDemoModal={() => setIsDemoModalOpen(true)} />
      <HowItWorksSection />
      <FooterSection />
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </div>
  );
};

export default Proceso;
