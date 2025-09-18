import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Rocket, Calendar, Clock, Users, Target, Award } from "lucide-react";

const HeroSection = ({ onRegisterClick }: { onRegisterClick: () => void }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Countdown to October 19, 2025
  useEffect(() => {
    const targetDate = new Date("October 19, 2025 00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const highlights = [
    {
      icon: <Users className="w-6 h-6" />,
      text: "Connect with SIH winners",
    },
    {
      icon: <Target className="w-6 h-6" />,
      text: "Explore funding opportunities",
    },
    {
      icon: <Award className="w-6 h-6" />,
      text: "One-on-one mentorship & domain guidance",
    },
  ];

  return (
    <section className="relative min-h-screen bg-building flex items-center justify-center overflow-hidden">
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      
      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Logo */}
        <div className="absolute top-8 left-8">
          <img 
            src="/aic-raise-logo.png" 
            alt="AIC RAISE Logo" 
            className="h-16 w-auto animate-glow"
          />
        </div>

        {/* Main Hero Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Turn Your Ideas into Reality{" "}
              <span className="inline-block animate-bounce">🚀</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Introducing <span className="font-bold text-secondary-glow">ProductXcelerator</span>—a 1-month hybrid training program to help you prototype and build your dream product with AIC RAISE's FAB LAB!
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="glass rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Calendar className="w-6 h-6 text-secondary-glow" />
              <h3 className="text-xl font-semibold text-white">Event Starts In:</h3>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="bg-gradient-primary rounded-lg p-4 mb-2">
                    <div className="text-2xl md:text-3xl font-bold text-white">
                      {value.toString().padStart(2, "0")}
                    </div>
                  </div>
                  <div className="text-sm text-white/80 capitalize font-medium">
                    {unit}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="glass rounded-xl p-6 flex items-center gap-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-secondary-glow">{highlight.icon}</div>
                <p className="text-white font-medium">{highlight.text}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="hero"
              size="xl"
              onClick={onRegisterClick}
              className="group"
            >
              <Rocket className="w-6 h-6 group-hover:animate-bounce" />
              Register Now
            </Button>
            <Button
              variant="glass"
              size="xl"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Clock className="w-6 h-6" />
              Learn More
            </Button>
          </div>

          {/* Key Info */}
          <div className="glass rounded-xl p-6 max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 text-white">
              <div>
                <div className="font-semibold text-secondary-glow">Eligibility:</div>
                <div>Students (16–23 yrs) & Recent Graduates (≤3 yrs)</div>
              </div>
              <div>
                <div className="font-semibold text-secondary-glow">Fee:</div>
                <div>₹2999 per team (max 6 members)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;