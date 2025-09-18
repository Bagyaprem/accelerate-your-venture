import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  DollarSign, 
  Target, 
  Wrench, 
  Award, 
  Calendar,
  MapPin,
  Clock,
  Star,
  Zap,
  Heart,
  TrendingUp
} from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Connect with SIH Winners",
      description: "Network with Smart India Hackathon champions and learn from their success stories",
      color: "text-blue-500"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Explore Funding Opportunities",
      description: "Get insights into various funding options and investor connections",
      color: "text-green-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "One-on-One Mentorship",
      description: "Receive personalized guidance from industry experts and domain specialists",
      color: "text-purple-500"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "FAB LAB & Workbench Access",
      description: "Use state-of-the-art fabrication tools and equipment for your prototypes",
      color: "text-orange-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certificate of Completion",
      description: "Earn a recognized certificate to showcase your innovation journey",
      color: "text-red-500"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "CS Student, IIT Delhi",
      content: "ProductXcelerator transformed my app idea into a working prototype. The mentorship was incredible!",
      rating: 5,
      avatar: "👩‍💻"
    },
    {
      name: "Arjun Patel",
      role: "Mechanical Engineer",
      content: "The FAB LAB access was game-changing. Built my IoT device prototype in just 2 weeks!",
      rating: 5,
      avatar: "👨‍🔧"
    },
    {
      name: "Sneha Reddy",
      role: "Recent Graduate",
      content: "Connected with amazing peers and learned from SIH winners. Best investment I made!",
      rating: 5,
      avatar: "👩‍🎓"
    }
  ];

  const programFeatures = [
    { label: "Duration", value: "1 Month", icon: <Clock className="w-5 h-5" /> },
    { label: "Format", value: "Hybrid (Online + Offline)", icon: <Zap className="w-5 h-5" /> },
    { label: "Mentorship", value: "1:1 Sessions", icon: <Heart className="w-5 h-5" /> },
    { label: "Batch Size", value: "Limited to 50 Teams", icon: <TrendingUp className="w-5 h-5" /> }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-accent/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4 text-lg px-6 py-2">
            About the Program
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Why Choose ProductXcelerator?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive hybrid training program designed to transform your innovative ideas 
            into tangible prototypes with expert guidance and state-of-the-art resources.
          </p>
        </div>

        {/* Program Features Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {programFeatures.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-primary transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6">
                <div className="text-primary mb-3">{feature.icon}</div>
                <div className="font-semibold text-primary mb-1">{feature.label}</div>
                <div className="text-muted-foreground">{feature.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-l-4 border-l-primary"
            >
              <CardContent className="p-6">
                <div className={`${highlight.color} mb-4`}>
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Eligibility & Fee Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gradient-card border-2 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-primary">Eligibility</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Students aged 16-23 years</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Recent graduates (≤3 years)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Innovation enthusiasts</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>All technical backgrounds welcome</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-secondary text-white border-2 border-secondary/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <DollarSign className="w-8 h-8 text-white" />
                <h3 className="text-2xl font-bold text-white">Investment</h3>
              </div>
              <div className="space-y-4">
                <div className="text-4xl font-bold">₹2,999</div>
                <div className="text-white/90">per team (maximum 6 members)</div>
                <div className="space-y-2 text-sm text-white/80">
                  <div>✓ 1-month hybrid training</div>
                  <div>✓ Mentorship sessions</div>
                  <div>✓ FAB LAB access</div>
                  <div>✓ Certificate of completion</div>
                  <div>✓ Networking opportunities</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-primary mb-10">
            What Our Participants Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl">{testimonial.avatar}</div>
                    <div>
                      <div className="font-semibold text-primary">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">
                    "{testimonial.content}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Deadline Warning */}
        <Card className="bg-gradient-hero text-white text-center">
          <CardContent className="p-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Calendar className="w-8 h-8" />
              <h3 className="text-2xl font-bold">Registration Deadline</h3>
            </div>
            <div className="text-4xl font-bold mb-2">September 30, 2025</div>
            <p className="text-white/90 text-lg mb-6">
              Don't miss your chance to be part of this transformative journey!
            </p>
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-6 py-3">
              <MapPin className="w-5 h-5" />
              <span>Limited seats available - Register now!</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;