
import { Calendar, Clock, Users, Award } from "lucide-react";

const scheduleData = [
  {
    day: "Day 1",
    title: "Introduction & Motivation",
    items: [
      "Registration and accommodation",
      "Introduction presentation",
      "Light conditioning activity",
      "Motivational speech by Ivan Rakitić"
    ]
  },
  {
    day: "Day 2",
    title: "Technical Excellence",
    items: [
      "Morning training: dribbling & passing",
      "Video analysis session",
      "Workshops with coaches",
      "Interactive exercises"
    ]
  },
  {
    day: "Day 3",
    title: "Tactics & Team Play",
    items: [
      "Morning tactical training",
      "Mental preparation workshop",
      "Match simulation",
      "Q&A session with Ivan Rakitić"
    ]
  },
  {
    day: "Day 4",
    title: "Final Day & Ceremony",
    items: [
      "Mini tournament",
      "Final evaluation",
      "Awards ceremony",
      "Special guest appearances"
    ]
  }
];

const DailySchedule = () => {
  return (
    <section id="schedule" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold">Daily Schedule</h2>
          <p className="text-gray-300 mt-4">Four days of intensive training and development</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {scheduleData.map((day, index) => (
            <div
              key={day.day}
              className="glass p-6 rounded-xl hover:bg-white/20 transition-all duration-300"
              style={{
                animation: `slide-up 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold">{day.day}</h3>
              </div>
              <h4 className="text-lg font-medium mb-4 text-primary">{day.title}</h4>
              <ul className="space-y-3">
                {day.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-gray-300 flex items-start gap-2"
                    style={{
                      animation: `fade-in 0.3s ease-out ${(index * 0.1) + (i * 0.05)}s both`
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DailySchedule;
