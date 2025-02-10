
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProgramHighlights from "../components/ProgramHighlights";
import DailySchedule from "../components/DailySchedule";
import TeamSection from "../components/TeamSection";
import LocationSection from "../components/LocationSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-accent to-accent-light">
      <div className="fixed inset-0 bg-[url('/lovable-uploads/3b1900e7-c7bc-4fdd-87c1-027f2b9e5788.png')] opacity-5 bg-cover bg-center mix-blend-overlay pointer-events-none" />
      <Navbar />
      <HeroSection />
      <ProgramHighlights />
      <DailySchedule />
      <TeamSection />
      <LocationSection />
    </main>
  );
};

export default Index;
