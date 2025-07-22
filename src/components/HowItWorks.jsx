import { useState, useEffect } from 'react';
import { 
  ArrowUp,
  Heart, 
  Users, 
  Target, 
  Eye, 
  Shield, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Mail,
  Search,
  CreditCard,
  Bell,
  UserPlus,
  Edit3,
  Banknote,
  Share2,
  Star,
  Clock,
  Lock,
  HelpCircle,
  PlayCircle,
  ArrowDown
} from 'lucide-react';
import Button from './button';

const HowItWorks = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeTab, setActiveTab] = useState('campaigners');
  const [currentStep, setCurrentStep] = useState(0);

  const campaignerSteps = [
    {
      icon: UserPlus,
      title: "Create Your Account",
      description: "Sign up with your email or phone number. Verify your identity with your BVN or student ID for added credibility.",
      duration: "2 minutes",
      highlight: "Free & secure signup"
    },
    {
      icon: Edit3,
      title: "Build Your Campaign",
      description: "Choose your category (education, innovation, emergency), set your goal amount, add compelling photos/videos, and tell your story.",
      duration: "10-15 minutes",
      highlight: "Easy drag-and-drop builder"
    },
    {
      icon: CheckCircle,
      title: "Submit for Review",
      description: "Our team reviews your campaign for authenticity and quality. We help you optimize it for maximum impact.",
      duration: "24-48 hours",
      highlight: "95% approval rate"
    },
    {
      icon: Share2,
      title: "Share & Promote",
      description: "Share your campaign link on WhatsApp, Instagram, Twitter, and Facebook. We provide sharing templates and tips.",
      duration: "Ongoing",
      highlight: "Built-in social tools"
    },
    {
      icon: Banknote,
      title: "Receive Your Funds",
      description: "Funds are automatically transferred to your bank account when milestones are reached or campaigns end successfully.",
      duration: "3-5 business days",
      highlight: "Secure instant payouts"
    }
  ];

  const donorSteps = [
    {
      icon: Search,
      title: "Discover Campaigns",
      description: "Browse by category, location, or search for specific causes. Filter by students in your area or university.",
      duration: "Browse anytime",
      highlight: "Smart recommendations"
    },
    {
      icon: Heart,
      title: "Choose Your Impact",
      description: "Select campaigns that resonate with you. Read full stories, see progress updates, and check campaign authenticity.",
      duration: "Take your time",
      highlight: "Verified campaigns only"
    },
    {
      icon: CreditCard,
      title: "Make Your Donation",
      description: "Choose your amount and payment method - bank transfer, card, USSD, or mobile money. Donate anonymously or publicly.",
      duration: "30 seconds",
      highlight: "All major payment methods"
    },
    {
      icon: Bell,
      title: "Stay Connected",
      description: "Get updates as campaigns progress. Receive thank-you messages and see how your contribution made a difference.",
      duration: "Throughout campaign",
      highlight: "Real-time notifications"
    }
  ];

  const securityFeatures = [
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "SSL encryption and secure payment processing with trusted Nigerian payment providers"
    },
    {
      icon: Eye,
      title: "Campaign Verification",
      description: "Every campaign is manually reviewed and verified before going live"
    },
    {
      icon: Lock,
      title: "Fraud Protection",
      description: "Advanced AI monitoring and 24/7 security team to prevent fraudulent activities"
    },
    {
      icon: CheckCircle,
      title: "Transparent Tracking",
      description: "Real-time fund tracking and detailed reporting for complete transparency"
    }
  ];

  const faqs = [
    {
      question: "How long does it take to get approved?",
      answer: "Most campaigns are reviewed and approved within 24-48 hours. We work quickly while ensuring quality."
    },
    {
      question: "What happens if my campaign doesn't reach its goal?",
      answer: "With flexible funding, you keep whatever you raise. With all-or-nothing funding, donations are refunded if you don't hit your target."
    },
    {
      question: "Are there any fees?",
      answer: "We charge a small platform fee (2.9% + processing fees) only when you successfully receive donations. No hidden costs."
    },
    {
      question: "How do I know donations are going to real people?",
      answer: "All campaigners verify their identity with BVN or student ID. We also manually review every campaign before approval."
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % (activeTab === 'campaigners' ? campaignerSteps.length : donorSteps.length));
    }, 4000);

    return () => clearInterval(timer);
  }, [activeTab]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      <style jsx>{`
        .floating-animation {
          animation: float 6s ease-in-out infinite;
        }
        
        .floating-animation:nth-child(2) {
          animation-delay: -2s;
        }
        
        .floating-animation:nth-child(3) {
          animation-delay: -4s;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        .slide-in-up {
          animation: slideInUp 0.8s ease-out forwards;
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .glow-effect {
          box-shadow: 0 4px 20px rgba(16, 185, 129, 0.08);
          transition: all 0.3s ease;
        }
        
        .glow-effect:hover {
          box-shadow: 0 8px 30px rgba(16, 185, 129, 0.15);
          transform: translateY(-2px);
        }

        .pulse-animation {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .progress-bar {
          width: 0%;
          animation: progress 4s linear infinite;
        }

        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }

        .tab-active {
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
        }

        .step-active {
          transform: scale(1.05);
          box-shadow: 0 8px 30px rgba(16, 185, 129, 0.2);
        }

        .bounce-arrow {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translateY(0);
          }
          40%, 43% {
            transform: translateY(-10px);
          }
          70% {
            transform: translateY(-5px);
          }
        }
      `}</style>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 hover:scale-110 z-50"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-animation absolute top-32 left-10 w-16 h-16 bg-green-200 rounded-full opacity-20"></div>
        <div className="floating-animation absolute top-52 right-20 w-12 h-12 bg-green-300 rounded-full opacity-30"></div>
        <div className="floating-animation absolute bottom-32 left-20 w-20 h-20 bg-green-100 rounded-full opacity-25"></div>
        <div className="floating-animation absolute bottom-20 right-10 w-14 h-14 bg-green-400 rounded-full opacity-20"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="slide-in-up">
              <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-6">
                How <span className="text-green-600">FINABLE</span> Works
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                <strong className="text-green-600">Raise funds. Support dreams. Make an impact.</strong><br />
                Learn how Finable connects changemakers with supporters like you in just a few simple steps.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button 
                  onClick={() => scrollToSection('getting-started')}
                  className="px-8 py-4 font-semibold hover:scale-105 flex items-center justify-center gap-2"
                >
                  <PlayCircle className="w-5 h-5" />
                  Start a Campaign
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => scrollToSection('for-donors')}
                  className="px-8 py-4 font-semibold hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Heart className="w-5 h-5" />
                  Donate Now
                </Button>
              </div>
              <div className="bounce-arrow">
                <ArrowDown className="w-6 h-6 text-green-600 mx-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: Users, label: "Active Users", value: "10,000+" },
                { icon: TrendingUp, label: "Funds Raised", value: "₦50M+" },
                { icon: CheckCircle, label: "Success Rate", value: "95%" },
                { icon: Clock, label: "Avg. Campaign Time", value: "30 days" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-green-400 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-black mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tab Selection */}
        <section id="getting-started" className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-12">Choose Your Path</h2>
            
            {/* Tab Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                onClick={() => setActiveTab('campaigners')}
                className={`px-8 py-4 font-semibold hover:scale-105 flex items-center gap-3 ${
                  activeTab === 'campaigners' ? 'tab-active' : ''
                }`}
                variant={activeTab === 'campaigners' ? 'default' : 'outline'}
              >
                <Target className="w-6 h-6" />
                For Campaigners
                <span className="text-sm opacity-75">(Raise Funds)</span>
              </Button>
              <Button
                onClick={() => setActiveTab('donors')}
                className={`px-8 py-4 font-semibold hover:scale-105 flex items-center gap-3 ${
                  activeTab === 'donors' ? 'tab-active' : ''
                }`}
                variant={activeTab === 'donors' ? 'default' : 'outline'}
              >
                <Heart className="w-6 h-6" />
                For Donors
                <span className="text-sm opacity-75">(Support Causes)</span>
              </Button>
            </div>

            {/* Steps Display */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Side - Step List */}
              <div className="space-y-6">
                {(activeTab === 'campaigners' ? campaignerSteps : donorSteps).map((step, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-2xl p-6 shadow-lg glow-effect transition-all duration-300 ${
                      currentStep === index ? 'step-active' : ''
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        currentStep === index 
                          ? 'bg-gradient-to-br from-green-400 to-green-600 text-white' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        <step.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold text-black">Step {index + 1}: {step.title}</h3>
                          <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-semibold">
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-3">{step.description}</p>
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-green-600 font-medium">{step.highlight}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Side - Visual/Animation */}
              <div className="lg:sticky lg:top-32">
                <div className="bg-white rounded-3xl p-8 shadow-xl glow-effect">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 pulse-animation">
                      {activeTab === 'campaigners' ? (
                        <Target className="w-12 h-12 text-white" />
                      ) : (
                        <Heart className="w-12 h-12 text-white" />
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-2">
                      {activeTab === 'campaigners' ? 'Launch Your Campaign' : 'Make Your Impact'}
                    </h3>
                    <p className="text-gray-600">
                      {activeTab === 'campaigners' 
                        ? 'Turn your dreams into reality with community support'
                        : 'Support causes that matter to you and see real impact'
                      }
                    </p>
                  </div>

                  {/* Progress Indicator */}
                  <div className="mb-6">
                    <div className="flex justify-between text-sm text-gray-500 mb-2">
                      <span>Progress</span>
                      <span>Step {currentStep + 1} of {activeTab === 'campaigners' ? campaignerSteps.length : donorSteps.length}</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-400 to-green-600 rounded-full h-2 transition-all duration-1000"
                        style={{ width: `${((currentStep + 1) / (activeTab === 'campaigners' ? campaignerSteps.length : donorSteps.length)) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <Button className="w-full py-3 font-semibold hover:scale-105 flex items-center justify-center gap-2">
                    {activeTab === 'campaigners' ? 'Start My Campaign' : 'Browse Campaigns'}
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security & Trust */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Your Security is Our Priority</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We use industry-leading security measures to protect your data and funds
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg glow-effect text-center">
                  <div className="bg-gradient-to-br from-green-400 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Get quick answers to common questions</p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg glow-effect">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
                      <HelpCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-3">{faq.question}</h3>
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">Still have questions?</p>
              <Button className="px-8 py-3 font-semibold hover:scale-105 flex items-center gap-2 mx-auto">
                <Mail className="w-5 h-5" />
                Contact Support
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HowItWorks;