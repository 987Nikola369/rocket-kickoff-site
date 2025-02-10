
import { Trophy, Star } from "lucide-react";

const teamMembers = [
  {
    name: "Ivan Rakitić",
    role: "Lead Instructor",
    description: "Former Barcelona and Croatia national team player, bringing professional experience to young talents."
  },
  {
    name: "Martin Grgić",
    role: "Camp Director",
    description: "Responsible for overall organization and program development."
  },
  {
    name: "Luka Vučko",
    role: "Head Coach",
    description: "Leading technical and tactical training sessions with extensive coaching experience."
  },
  {
    name: "Ivona Kelić",
    role: "Camp Coordinator",
    description: "Main point of contact for participants and parents, ensuring smooth operation."
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold">Our Team</h2>
          <p className="text-gray-300 mt-4">Learn from experienced professionals</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="glass p-6 rounded-xl text-center card-hover"
              style={{
                animation: `slide-up 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full glass flex items-center justify-center">
                {index === 0 ? (
                  <Trophy className="w-8 h-8 text-primary" />
                ) : (
                  <Star className="w-8 h-8 text-primary" />
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-primary font-medium mb-3">{member.role}</p>
              <p className="text-gray-300 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
