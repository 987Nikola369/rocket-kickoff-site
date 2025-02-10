
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6 animate-slide-up">
          <span className="inline-block px-4 py-2 rounded-full text-sm glass">
            June 5-8, 2025 • Split, Croatia
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Train Like a Pro at <span className="text-gradient">Rocket Football Academy</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            A unique football experience for young talents aged 8-15, led by Ivan Rakitić and professional coaches.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="bg-primary hover:bg-primary-dark transition-colors px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover-scale">
              Register Now
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="glass px-8 py-3 rounded-lg font-semibold hover-scale">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
