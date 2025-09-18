import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Brain, Trophy, Star, Lightbulb, Target, Rocket } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const quizQuestions: Question[] = [
  {
    id: 1,
    question: "What is the primary goal of a Minimum Viable Product (MVP)?",
    options: [
      "To create the most feature-rich product possible",
      "To test core assumptions with minimal resources",
      "To compete directly with established players",
      "To secure maximum funding from investors"
    ],
    correct: 1,
    explanation: "An MVP is designed to test core assumptions about your product with the least amount of effort and resources."
  },
  {
    id: 2,
    question: "Which methodology emphasizes rapid prototyping and user feedback?",
    options: [
      "Waterfall Development",
      "Lean Startup",
      "Traditional Marketing",
      "Financial Modeling"
    ],
    correct: 1,
    explanation: "Lean Startup methodology focuses on build-measure-learn cycles with rapid prototyping and continuous user feedback."
  },
  {
    id: 3,
    question: "What does 'pivoting' mean in startup terminology?",
    options: [
      "Rotating the company logo",
      "Changing the entire business model",
      "Shifting strategy based on validated learning",
      "Moving to a new office location"
    ],
    correct: 2,
    explanation: "Pivoting means making a structured course correction to test a new hypothesis about the product or business model."
  },
  {
    id: 4,
    question: "Which stage typically comes BEFORE seeking venture capital?",
    options: [
      "IPO preparation",
      "International expansion",
      "Seed funding and angel investment",
      "Acquisition talks"
    ],
    correct: 2,
    explanation: "Startups typically progress through seed funding and angel investment before seeking larger venture capital rounds."
  },
  {
    id: 5,
    question: "What is the primary purpose of customer validation?",
    options: [
      "To prove you're always right",
      "To verify that customers actually want your solution",
      "To increase marketing costs",
      "To delay product development"
    ],
    correct: 1,
    explanation: "Customer validation ensures there's genuine demand for your solution before investing heavily in development."
  },
  {
    id: 6,
    question: "In the context of innovation, what does 'failing fast' mean?",
    options: [
      "Giving up on ideas quickly",
      "Running out of money rapidly",
      "Learning from failures quickly and cheaply",
      "Working at maximum speed always"
    ],
    correct: 2,
    explanation: "Failing fast means quickly testing ideas with minimal investment to learn and iterate before major commitments."
  },
  {
    id: 7,
    question: "What is typically the most important metric for early-stage startups?",
    options: [
      "Total revenue",
      "Number of employees",
      "User engagement and retention",
      "Media coverage"
    ],
    correct: 2,
    explanation: "User engagement and retention indicate product-market fit, which is crucial for long-term success."
  },
  {
    id: 8,
    question: "Which funding stage typically involves the highest risk for investors?",
    options: [
      "Series A",
      "Series B",
      "Seed/Angel",
      "Series C"
    ],
    correct: 2,
    explanation: "Seed and angel investments carry the highest risk as the business model is often unproven."
  },
  {
    id: 9,
    question: "What is the key principle behind Design Thinking?",
    options: [
      "Technology-first approach",
      "Human-centered problem solving",
      "Profit maximization",
      "Competitor analysis"
    ],
    correct: 1,
    explanation: "Design Thinking is fundamentally about understanding human needs and solving problems from a user-centric perspective."
  },
  {
    id: 10,
    question: "In entrepreneurship, what does 'bootstrapping' refer to?",
    options: [
      "Wearing proper footwear",
      "Self-funding a business without external investment",
      "Joining an accelerator program",
      "Hiring experienced employees"
    ],
    correct: 1,
    explanation: "Bootstrapping means funding and growing your business using personal resources or revenue without external investment."
  }
];

const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  
  const { toast } = useToast();

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
      const score = calculateScore();
      if (score >= 7) {
        toast({
          title: "Excellent! 🏆",
          description: `You scored ${score}/10! You're ready for the innovation challenge!`,
        });
      } else if (score >= 5) {
        toast({
          title: "Good job! 🎯",
          description: `You scored ${score}/10! Keep learning and growing!`,
        });
      } else {
        toast({
          title: "Keep exploring! 💡",
          description: `You scored ${score}/10! Innovation is a journey of continuous learning!`,
        });
      }
    }
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return score + (answer === quizQuestions[index].correct ? 1 : 0);
    }, 0);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setQuizStarted(false);
  };

  const getScoreColor = (score: number) => {
    if (score >= 8) return "text-green-500";
    if (score >= 6) return "text-blue-500";
    if (score >= 4) return "text-yellow-500";
    return "text-red-500";
  };

  const getScoreMessage = (score: number) => {
    if (score >= 8) return "Innovation Master! 🚀";
    if (score >= 6) return "Future Entrepreneur! 💡";
    if (score >= 4) return "Learning Enthusiast! 📚";
    return "Innovation Explorer! 🔍";
  };

  if (!quizStarted) {
    return (
      <section id="quiz" className="py-20 bg-gradient-to-br from-purple-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in">
            <Brain className="w-16 h-16 text-primary mx-auto mb-6 animate-float" />
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Innovation & Entrepreneurship Quiz
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Test your knowledge and get ready for the ProductXcelerator journey! 
              Answer 10 questions and see how innovation-ready you are.
            </p>
          </div>

          <Card className="max-w-2xl mx-auto glass border-2 border-primary/20">
            <CardContent className="p-8 text-center">
              <div className="space-y-6">
                <div className="bg-gradient-primary rounded-full w-24 h-24 flex items-center justify-center mx-auto">
                  <Trophy className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Ready for the Challenge?</h3>
                  <p className="text-muted-foreground">
                    10 questions about innovation, entrepreneurship, and startup fundamentals.
                    Perfect preparation for your ProductXcelerator journey!
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-accent/50 rounded-lg p-4">
                    <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="font-semibold">10 Questions</div>
                    <div className="text-sm text-muted-foreground">Multi-choice</div>
                  </div>
                  <div className="bg-accent/50 rounded-lg p-4">
                    <Star className="w-8 h-8 text-secondary mx-auto mb-2" />
                    <div className="font-semibold">Instant Score</div>
                    <div className="text-sm text-muted-foreground">With explanations</div>
                  </div>
                  <div className="bg-accent/50 rounded-lg p-4">
                    <Rocket className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="font-semibold">Innovation Ready</div>
                    <div className="text-sm text-muted-foreground">Level up!</div>
                  </div>
                </div>
                <Button
                  variant="hero"
                  size="xl"
                  onClick={() => setQuizStarted(true)}
                  className="w-full"
                >
                  <Brain className="w-6 h-6" />
                  Start Quiz Challenge
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  if (showResults) {
    const score = calculateScore();
    return (
      <section id="quiz" className="py-20 bg-gradient-to-br from-purple-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-6">
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <div className="mb-6">
                <div className="bg-gradient-primary rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-12 h-12 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold">Quiz Complete!</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className={`text-6xl font-bold ${getScoreColor(score)} mb-2`}>
                  {score}/10
                </div>
                <div className="text-2xl font-semibold text-primary mb-4">
                  {getScoreMessage(score)}
                </div>
                <div className="text-muted-foreground">
                  {score >= 7 && "Outstanding knowledge! You're innovation-ready! 🚀"}
                  {score >= 5 && score < 7 && "Good foundation! Keep building your entrepreneurship skills! 💪"}
                  {score < 5 && "Every expert was once a beginner! Keep learning and growing! 🌱"}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Your Answers Review:</h4>
                {quizQuestions.map((question, index) => (
                  <div key={question.id} className="border rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-sm ${
                        selectedAnswers[index] === question.correct ? 'bg-green-500' : 'bg-red-500'
                      }`}>
                        {selectedAnswers[index] === question.correct ? '✓' : '✗'}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium mb-2">Q{index + 1}: {question.question}</div>
                        <div className="text-sm text-muted-foreground mb-2">
                          Your answer: {question.options[selectedAnswers[index]]}
                        </div>
                        {selectedAnswers[index] !== question.correct && (
                          <div className="text-sm text-green-600 mb-2">
                            Correct: {question.options[question.correct]}
                          </div>
                        )}
                        <div className="text-sm text-blue-600">
                          💡 {question.explanation}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 justify-center">
                <Button variant="outline" onClick={resetQuiz}>
                  Retake Quiz
                </Button>
                <Button 
                  variant="hero" 
                  onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Rocket className="w-4 h-4" />
                  Register for ProductXcelerator
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
  const question = quizQuestions[currentQuestion];

  return (
    <section id="quiz" className="py-20 bg-gradient-to-br from-purple-50 to-orange-50">
      <div className="max-w-4xl mx-auto px-6">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-primary" />
                <span className="font-semibold">Innovation Quiz</span>
              </div>
              <span className="text-sm text-muted-foreground">
                {currentQuestion + 1} of {quizQuestions.length}
              </span>
            </div>
            <Progress value={progress} className="w-full" />
          </CardHeader>
          
          <CardContent className="space-y-6 animate-fade-in">
            <div>
              <h3 className="text-xl font-semibold mb-6 leading-relaxed">
                {question.question}
              </h3>
              
              <RadioGroup
                value={selectedAnswers[currentQuestion]?.toString() || ""}
                onValueChange={(value) => handleAnswerSelect(parseInt(value))}
                className="space-y-3"
              >
                {question.options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer">
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer text-base">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            
            <div className="flex justify-end">
              <Button
                onClick={nextQuestion}
                disabled={selectedAnswers[currentQuestion] === undefined}
                variant="default"
                size="lg"
              >
                {currentQuestion === quizQuestions.length - 1 ? "View Results" : "Next Question"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default QuizSection;