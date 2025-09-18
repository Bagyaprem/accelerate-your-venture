import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import QuizSection from "@/components/QuizSection";
import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Rocket, AlertCircle } from "lucide-react";

const Index = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const openRegistration = () => {
    setIsRegistrationOpen(true);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection onRegisterClick={openRegistration} />

      {/* About Section */}
      <AboutSection />

      {/* Innovation Phase (Engagement) Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Why Register Early?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join the innovation revolution and unlock exclusive benefits for early registrants!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-gradient-card rounded-2xl shadow-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-primary mb-3">Early Bird Benefits</h3>
              <p className="text-muted-foreground">
                Get priority access to mentors, exclusive workshops, and networking sessions with industry leaders.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-card rounded-2xl shadow-secondary hover:shadow-glow transition-all duration-300 transform hover:scale-105">
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-primary mb-3">Gamified Experience</h3>
              <p className="text-muted-foreground">
                Complete challenges, earn points, and compete with fellow innovators. Top performers get special rewards!
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-card rounded-2xl shadow-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105">
              <div className="text-6xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-primary mb-3">Premium Resources</h3>
              <p className="text-muted-foreground">
                Access exclusive video content, 3D demos, and behind-the-scenes footage of previous successful projects.
              </p>
            </div>
          </div>

          {/* Social Sharing */}
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold text-primary">Spread the Innovation!</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => {
                  const text = "Join me at ProductXcelerator - Turn Your Ideas into Reality! 🚀 #Innovation #ProductXcelerator #AICRAISE";
                  const url = window.location.href;
                  window.open(`https://wa.me/?text=${encodeURIComponent(text + " " + url)}`, '_blank');
                }}
                className="group"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Share on WhatsApp
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  const text = "Excited to join ProductXcelerator - Turn Your Ideas into Reality! 🚀 #Innovation #ProductXcelerator #AICRAISE";
                  const url = window.location.href;
                  window.open(`https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&summary=${encodeURIComponent(text)}`, '_blank');
                }}
                className="group"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Share on LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <QuizSection />

      {/* Registration CTA Section */}
      <section id="register" className="py-20 bg-gradient-hero text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-white/10 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${4 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="animate-fade-in space-y-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <AlertCircle className="w-8 h-8 animate-bounce" />
              <h2 className="text-3xl md:text-4xl font-bold">Last Chance to Register!</h2>
            </div>
            
            <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Calendar className="w-6 h-6" />
                <h3 className="text-xl font-semibold">Registration Deadline</h3>
              </div>
              <div className="text-4xl font-bold mb-4">September 30, 2025</div>
              <p className="text-white/90 mb-6">
                Don't miss your chance to be part of this transformative innovation journey. 
                Limited seats available!
              </p>
              <div className="bg-white/20 rounded-lg p-4 mb-6">
                <div className="text-2xl font-bold text-secondary-glow">Only 15 spots left!</div>
                <div className="text-sm text-white/80">Join 35+ teams already registered</div>
              </div>
            </div>

            <Button
              variant="glass"
              size="xl"
              onClick={openRegistration}
              className="text-2xl px-12 py-6 hover:scale-110 transform transition-all duration-300"
            >
              <Rocket className="w-8 h-8 mr-3" />
              Register Now Before It Closes 🚀
            </Button>

            <p className="text-white/80 text-lg">
              Secure your spot today and turn your innovative ideas into reality!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Registration Form Modal */}
      <RegistrationForm 
        isOpen={isRegistrationOpen} 
        onClose={() => setIsRegistrationOpen(false)} 
      />
    </div>
  );
};

export default Index;
