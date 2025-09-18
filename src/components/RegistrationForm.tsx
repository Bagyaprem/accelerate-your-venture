import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Users, 
  Lightbulb, 
  Code, 
  Cpu, 
  Wrench,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Rocket,
  Target
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  leaderName: string;
  email: string;
  whatsapp: string;
  state: string;
  district: string;
  institution: string;
  fieldOfStudy: string;
  teamName: string;
  teamMembers: string[];
  programFormat: 'physical' | 'virtual' | '';
  projectDomain: 'hardware' | 'software' | 'embedded' | '';
  projectDescription: string;
  hasExperience: 'yes' | 'no' | '';
  expectations: string;
}

const RegistrationForm = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    leaderName: '',
    email: '',
    whatsapp: '',
    state: '',
    district: '',
    institution: '',
    fieldOfStudy: '',
    teamName: '',
    teamMembers: [''],
    programFormat: '',
    projectDomain: '',
    projectDescription: '',
    hasExperience: '',
    expectations: '',
  });

  const { toast } = useToast();
  const totalSteps = 13;
  const progress = (currentStep / totalSteps) * 100;

  const motivationalQuotes = [
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Your limitation—it's only your imagination.",
    "Great things never come from comfort zones.",
    "Success doesn't just find you. You have to go out and get it.",
  ];

  const domainBackgrounds = {
    hardware: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
    software: "bg-gradient-to-br from-blue-500/20 to-purple-500/20",
    embedded: "bg-gradient-to-br from-green-500/20 to-teal-500/20",
  };

  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isCurrentStepValid = () => {
    switch (currentStep) {
      case 1: return formData.leaderName.trim().length > 0;
      case 2: return formData.email.trim().length > 0 && formData.email.includes('@');
      case 3: return formData.whatsapp.trim().length >= 10;
      case 4: return formData.state.trim().length > 0 && formData.district.trim().length > 0;
      case 5: return formData.institution.trim().length > 0;
      case 6: return formData.fieldOfStudy.trim().length > 0;
      case 7: return formData.teamName.trim().length > 0;
      case 8: return formData.teamMembers.some(member => member.trim().length > 0);
      case 9: return formData.programFormat !== '';
      case 10: return formData.projectDomain !== '';
      case 11: return formData.projectDescription.trim().length > 0;
      case 12: return formData.hasExperience !== '';
      case 13: return formData.expectations.trim().length > 0;
      default: return false;
    }
  };

  const findFirstIncompleteStep = () => {
    for (let step = 1; step <= totalSteps; step++) {
      const currentStepTemp = currentStep;
      setCurrentStep(step);
      const isValid = isCurrentStepValid();
      setCurrentStep(currentStepTemp);
      if (!isValid) return step;
    }
    return null;
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const addTeamMember = () => {
    if (formData.teamMembers.length < 6) {
      updateFormData('teamMembers', [...formData.teamMembers, '']);
    } else {
      toast({
        title: "Maximum team size reached",
        description: "You can have maximum 6 team members including the leader.",
        variant: "destructive",
      });
    }
  };

  const updateTeamMember = (index: number, value: string) => {
    const updated = [...formData.teamMembers];
    updated[index] = value;
    updateFormData('teamMembers', updated);
  };

  const removeTeamMember = (index: number) => {
    if (formData.teamMembers.length > 1) {
      const updated = formData.teamMembers.filter((_, i) => i !== index);
      updateFormData('teamMembers', updated);
    }
  };

  const handleSubmit = () => {
    const incompleteStep = findFirstIncompleteStep();
    if (incompleteStep) {
      setCurrentStep(incompleteStep);
      toast({
        title: "Please complete all fields",
        description: `Please fill in the required information on step ${incompleteStep}.`,
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Registration Successful! 🎉",
      description: "Thank you for registering for ProductXcelerator. We'll send you further details via email.",
    });
    onClose();
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center">
              <User className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-2">Team Leader Details</h3>
              <p className="text-muted-foreground">Every great team starts with a strong leader 🚀</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="leaderName" className="flex items-center gap-1">
                Full Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="leaderName"
                value={formData.leaderName}
                onChange={(e) => updateFormData('leaderName', e.target.value)}
                placeholder="Enter your full name"
                className="text-lg p-4"
                required
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center">
              <Mail className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-2">Email Address</h3>
              <p className="text-muted-foreground">Stay connected with innovation ✉️</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-1">
                Email Address <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => updateFormData('email', e.target.value)}
                placeholder="your.email@example.com"
                className="text-lg p-4"
                required
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center">
              <Phone className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-2">WhatsApp Number</h3>
              <p className="text-muted-foreground">We'll create a WhatsApp group for updates 📱</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="whatsapp" className="flex items-center gap-1">
                WhatsApp Number <span className="text-red-500">*</span>
              </Label>
              <Input
                id="whatsapp"
                type="tel"
                value={formData.whatsapp}
                onChange={(e) => updateFormData('whatsapp', e.target.value)}
                placeholder="+91 98765 43210"
                className="text-lg p-4"
                required
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-2">Location</h3>
              <p className="text-muted-foreground">Help us understand your geographical reach 🗺️</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="state" className="flex items-center gap-1">
                  State <span className="text-red-500">*</span>
                </Label>
                <Select value={formData.state} onValueChange={(value) => updateFormData('state', value)}>
                  <SelectTrigger className="text-lg p-4">
                    <SelectValue placeholder="Select your state" />
                  </SelectTrigger>
                  <SelectContent>
                    {states.map((state) => (
                      <SelectItem key={state} value={state}>
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="district" className="flex items-center gap-1">
                  District/City <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="district"
                  value={formData.district}
                  onChange={(e) => updateFormData('district', e.target.value)}
                  placeholder="Enter your district/city"
                  className="text-lg p-4"
                  required
                />
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center">
              <GraduationCap className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-2">Institution Details</h3>
              <p className="text-muted-foreground">Knowledge is the foundation of innovation 🎓</p>
            </div>
            <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="institution" className="flex items-center gap-1">
                Institution/Organization Name <span className="text-red-500">*</span>
              </Label>
                <Input
                  id="institution"
                  value={formData.institution}
                  onChange={(e) => updateFormData('institution', e.target.value)}
                  placeholder="Enter your institution/organization name"
                  className="text-lg p-4"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fieldOfStudy" className="flex items-center gap-1">
                  Field of Study/Work <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="fieldOfStudy"
                  value={formData.fieldOfStudy}
                  onChange={(e) => updateFormData('fieldOfStudy', e.target.value)}
                  placeholder="e.g., Computer Science, Mechanical Engineering, etc."
                  className="text-lg p-4"
                  required
                />
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center">
              <Users className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-2">Team Name</h3>
              <p className="text-muted-foreground">Your team name builds your passion 💡</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="teamName" className="flex items-center gap-1">
                Team Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="teamName"
                value={formData.teamName}
                onChange={(e) => updateFormData('teamName', e.target.value)}
                placeholder="Give your team a creative name"
                className="text-lg p-4"
                required
              />
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center">
              <Users className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-2">Team Members</h3>
              <p className="text-muted-foreground">Great minds think together 🤝</p>
            </div>
            <div className="space-y-4">
              {formData.teamMembers.map((member, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <div className="flex-1">
                    <Input
                      value={member}
                      onChange={(e) => updateTeamMember(index, e.target.value)}
                      placeholder={`Team member ${index + 1} name`}
                      className="text-lg p-4"
                    />
                  </div>
                  {formData.teamMembers.length > 1 && (
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      onClick={() => removeTeamMember(index)}
                    >
                      ×
                    </Button>
                  )}
                </div>
              ))}
              {formData.teamMembers.length < 6 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={addTeamMember}
                  className="w-full"
                >
                  Add Team Member
                </Button>
              )}
            </div>
          </div>
        );

      case 8:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center">
              <Lightbulb className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-2">Program Format</h3>
              <p className="text-muted-foreground">Choose your learning experience 🎯</p>
            </div>
            <RadioGroup
              value={formData.programFormat}
              onValueChange={(value: 'physical' | 'virtual') => updateFormData('programFormat', value)}
              className="space-y-4"
            >
              <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-accent transition-colors">
                <RadioGroupItem value="physical" id="physical" />
                <Label htmlFor="physical" className="flex-1 cursor-pointer">
                  <div className="font-semibold">Physical Mode</div>
                  <div className="text-sm text-muted-foreground">Attend in-person at FAB LAB</div>
                </Label>
              </div>
              <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-accent transition-colors">
                <RadioGroupItem value="virtual" id="virtual" />
                <Label htmlFor="virtual" className="flex-1 cursor-pointer">
                  <div className="font-semibold">Virtual Mode</div>
                  <div className="text-sm text-muted-foreground">Join online sessions</div>
                </Label>
              </div>
            </RadioGroup>
          </div>
        );

      case 9:
        return (
          <div className={`space-y-6 animate-fade-in p-6 rounded-xl ${
            formData.projectDomain ? domainBackgrounds[formData.projectDomain] : ''
          }`}>
            <div className="text-center">
              <div className="w-16 h-16 text-primary mx-auto mb-4">
                {formData.projectDomain === 'hardware' && <Wrench className="w-full h-full" />}
                {formData.projectDomain === 'software' && <Code className="w-full h-full" />}
                {formData.projectDomain === 'embedded' && <Cpu className="w-full h-full" />}
                {!formData.projectDomain && <Lightbulb className="w-full h-full" />}
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">Project Domain</h3>
              <p className="text-muted-foreground">What's your area of innovation? 🔧</p>
            </div>
            <RadioGroup
              value={formData.projectDomain}
              onValueChange={(value: 'hardware' | 'software' | 'embedded') => updateFormData('projectDomain', value)}
              className="space-y-4"
            >
              <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-accent transition-colors">
                <RadioGroupItem value="hardware" id="hardware" />
                <Label htmlFor="hardware" className="flex-1 cursor-pointer">
                  <div className="font-semibold flex items-center gap-2">
                    <Wrench className="w-5 h-5" />
                    Hardware
                  </div>
                  <div className="text-sm text-muted-foreground">Physical products, IoT devices, robotics</div>
                </Label>
              </div>
              <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-accent transition-colors">
                <RadioGroupItem value="software" id="software" />
                <Label htmlFor="software" className="flex-1 cursor-pointer">
                  <div className="font-semibold flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    Software
                  </div>
                  <div className="text-sm text-muted-foreground">Web apps, mobile apps, AI/ML solutions</div>
                </Label>
              </div>
              <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-accent transition-colors">
                <RadioGroupItem value="embedded" id="embedded" />
                <Label htmlFor="embedded" className="flex-1 cursor-pointer">
                  <div className="font-semibold flex items-center gap-2">
                    <Cpu className="w-5 h-5" />
                    Embedded Systems
                  </div>
                  <div className="text-sm text-muted-foreground">Microcontrollers, firmware, smart devices</div>
                </Label>
              </div>
            </RadioGroup>
          </div>
        );

      case 10:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center">
              <Lightbulb className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-2">Project Description</h3>
              <p className="text-muted-foreground">Tell us about your innovative idea 💭</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="projectDescription" className="flex items-center gap-1">
                Brief Project Description <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="projectDescription"
                value={formData.projectDescription}
                onChange={(e) => updateFormData('projectDescription', e.target.value)}
                placeholder="Describe your project idea, its purpose, and potential impact..."
                className="min-h-32 text-lg p-4"
                required
              />
            </div>
          </div>
        );

      case 11:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center">
              <Rocket className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-2">Experience</h3>
              <p className="text-muted-foreground">Every expert was once a beginner 🌟</p>
            </div>
            <div className="space-y-4">
              <Label className="flex items-center gap-1">
                Previous Startup/Innovation Experience <span className="text-red-500">*</span>
              </Label>
              <RadioGroup
                value={formData.hasExperience}
                onValueChange={(value: 'yes' | 'no') => updateFormData('hasExperience', value)}
                className="space-y-4"
              >
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-accent transition-colors">
                  <RadioGroupItem value="yes" id="exp-yes" />
                  <Label htmlFor="exp-yes" className="flex-1 cursor-pointer">
                    <div className="font-semibold">Yes</div>
                    <div className="text-sm text-muted-foreground">I have worked on startups/innovations before</div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-accent transition-colors">
                  <RadioGroupItem value="no" id="exp-no" />
                  <Label htmlFor="exp-no" className="flex-1 cursor-pointer">
                    <div className="font-semibold">No</div>
                    <div className="text-sm text-muted-foreground">This will be my first innovation journey</div>
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        );

      case 12:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center">
              <Target className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-2">Expectations</h3>
              <p className="text-muted-foreground">Dream big, achieve bigger 🎯</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="expectations" className="flex items-center gap-1">
                What do you expect from this program? <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="expectations"
                value={formData.expectations}
                onChange={(e) => updateFormData('expectations', e.target.value)}
                placeholder="Share your goals, what you hope to learn, and how this program fits into your vision..."
                className="min-h-32 text-lg p-4"
                required
              />
            </div>
            <div className="bg-accent/50 p-4 rounded-lg">
              <p className="text-sm text-center italic">
                "{motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]}"
              </p>
            </div>
          </div>
        );

      case 13:
        return (
          <div className="space-y-6 animate-fade-in text-center">
            <div className="text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-2">Review & Submit</h3>
              <p className="text-muted-foreground">Almost there! Review your details and submit 🚀</p>
            </div>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4 text-left">
                  <div><strong>Leader:</strong> {formData.leaderName}</div>
                  <div><strong>Email:</strong> {formData.email}</div>
                  <div><strong>Team:</strong> {formData.teamName}</div>
                  <div><strong>Members:</strong> {formData.teamMembers.filter(m => m.trim()).length}</div>
                  <div><strong>Domain:</strong> {formData.projectDomain}</div>
                  <div><strong>Format:</strong> {formData.programFormat}</div>
                </div>
              </CardContent>
            </Card>
            <div className="bg-gradient-primary text-white p-6 rounded-xl">
              <h4 className="font-bold text-xl mb-2">🎉 Ready to Launch Your Innovation Journey?</h4>
              <p>Click submit to secure your spot in ProductXcelerator!</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="text-center border-b">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" onClick={onClose}>
              ✕
            </Button>
            <CardTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              ProductXcelerator Registration
            </CardTitle>
            <div className="w-10" />
          </div>
          <div className="space-y-2">
            <Progress value={progress} className="w-full" />
            <p className="text-sm text-muted-foreground">
              Step {currentStep} of {totalSteps}
            </p>
          </div>
        </CardHeader>
        
        <CardContent className="p-6">
          {renderStep()}
          
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </Button>
            
            {currentStep === totalSteps ? (
              <Button
                variant="hero"
                onClick={handleSubmit}
                className="flex items-center gap-2"
              >
                <CheckCircle className="w-4 h-4" />
                Submit Registration
              </Button>
            ) : (
              <Button
                variant="default"
                onClick={nextStep}
                disabled={!isCurrentStepValid()}
                className="flex items-center gap-2"
              >
                Next
                <ArrowRight className="w-4 h-4" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegistrationForm;