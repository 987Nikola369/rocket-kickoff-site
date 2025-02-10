
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProgramHighlights from "../components/ProgramHighlights";
import DailySchedule from "../components/DailySchedule";
import TeamSection from "../components/TeamSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProgramHighlights />
      <DailySchedule />
      <TeamSection />
    </main>
  );
};

export default Index;
