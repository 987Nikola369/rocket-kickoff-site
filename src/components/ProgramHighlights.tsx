
import { Trophy, Users, Calendar, Video } from "lucide-react";

const features = [
  {
    icon: Trophy,
    title: "Professional Training",
    description: "Learn from experienced coaches and football professionals"
  },
  {
    icon: Users,
    title: "Individual Approach",
    description: "Personalized feedback and development plans"
  },
  {
    icon: Calendar,
    title: "4-Day Program",
    description: "Intensive training sessions and workshops"
  },
  {
    icon: Video,
    title: "Video Analysis",
    description: "Modern technology for performance tracking"
  }
];

const ProgramHighlights = () => {
  return (
    <section id="program" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold">Program Highlights</h2>
          <p className="text-gray-300 mt-4">Discover what makes our academy unique</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass p-6 rounded-xl card-hover"
              style={{
                animation: `slide-up 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramHighlights;
