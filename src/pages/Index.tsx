import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import HolisticPlatform from "@/components/HolisticPlatform";
import NetworkSection from "@/components/NetworkSection";
import MentorSection from "@/components/MentorSection";
import MentorsGrid from "@/components/MentorsGrid";
import JourneySteps from "@/components/JourneySteps";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FounderSection from "@/components/FounderSection";
import VisionMission from "@/components/VisionMission";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustBar />
      <HolisticPlatform />
      <NetworkSection />
      <MentorSection />
      <MentorsGrid />
      <JourneySteps />
      <PricingSection />
      <TestimonialsSection />
      <FounderSection />
      <VisionMission />
      <Footer />
    </div>
  );
};

export default Index;
