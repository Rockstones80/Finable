import { useState, useEffect } from 'react';
import { 
  ArrowUp,
  Download,
  Target, 
  Shield, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Share2,
  FileText,
  Calendar,
  Heart,
  HelpCircle,
  PlayCircle,
  Image,
  DollarSign,
  Clock,
  MessageSquare,
  Star,
  Bookmark,
  ChevronDown,
  ChevronUp,
  Bell,
  Megaphone
} from 'lucide-react';
import Button from './button';

const ResourcesAndTips = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeTab, setActiveTab] = useState('campaigners');
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const campaignerResources = [
    {
      icon: FileText,
      title: "Campaign Description Template",
      description: "Professional template to help you write compelling campaign stories that connect with donors",
      downloadLink: "#",
      type: "template"
    },
    {
      icon: CheckCircle,
      title: "Campaign Creation Checklist",
      description: "Step-by-step checklist ensuring you don't miss any important details before launching",
      downloadLink: "#",
      type: "checklist"
    },
    {
      icon: Image,
      title: "Image & Video Guidelines",
      description: "Best practices for creating visually appealing campaign media that drives engagement",
      downloadLink: "#",
      type: "guide"
    },
    {
      icon: Star,
      title: "Writing Great Campaign Titles",
      description: "Master the art of creating headlines that grab attention and inspire action",
      downloadLink: "#",
      type: "guide"
    },
    {
      icon: Share2,
      title: "Social Media Caption Templates",
      description: "Ready-to-use captions for Facebook, Instagram, Twitter, and WhatsApp Status",
      downloadLink: "#",
      type: "template"
    },
    {
      icon: Calendar,
      title: "7-Day Promotion Calendar",
      description: "Strategic timeline for promoting your campaign across different platforms",
      downloadLink: "#",
      type: "calendar"
    }
  ];

  const donorResources = [
    {
      icon: Shield,
      title: "How to Verify a Campaign",
      description: "Learn to identify authentic campaigns and avoid potential scams",
      link: "#verify-campaign"
    },
    {
      icon: DollarSign,
      title: "How to Donate Securely",
      description: "Step-by-step guide to making safe donations through our platform",
      link: "#donate-securely"
    },
    {
      icon: Bell,
      title: "What Happens After You Donate",
      description: "Understand the donation process, receipts, and campaign updates",
      link: "#after-donation"
    },
    {
      icon: ArrowUp,
      title: "How to Request a Refund",
      description: "Know your rights and the refund process for eligible donations",
      link: "#request-refund"
    },
    {
      icon: MessageSquare,
      title: "Contact Finable Support",
      description: "Multiple ways to reach our support team for assistance",
      link: "#contact-support"
    }
  ];

  const downloadableResources = [
    {
      icon: FileText,
      title: "Campaign Planning Worksheet",
      description: "Comprehensive PDF worksheet to plan your campaign strategy",
      format: "PDF",
      size: "2.3 MB",
      downloadLink: "#"
    },
    {
      icon: Image,
      title: "Media Checklist",
      description: "Ensure your images and videos meet quality standards",
      format: "PDF",
      size: "1.1 MB",
      downloadLink: "#"
    },
    {
      icon: TrendingUp,
      title: "Budget Template",
      description: "Excel template for tracking campaign expenses and goals",
      format: "XLSX",
      size: "0.8 MB",
      downloadLink: "#"
    },
    {
      icon: Calendar,
      title: "Social Media Calendar",
      description: "30-day content calendar for campaign promotion",
      format: "PDF",
      size: "1.5 MB",
      downloadLink: "#"
    },
    {
      icon: Bookmark,
      title: "Finable Style Guide",
      description: "Brand guidelines and visual assets for campaign creators",
      format: "PDF",
      size: "3.2 MB",
      downloadLink: "#"
    }
  ];

  const tutorials = [
    {
      icon: PlayCircle,
      title: "How to Start a Campaign",
      description: "Complete walkthrough from idea to launch",
      duration: "8 min",
      type: "video"
    },
    {
      icon: Heart,
      title: "How to Share Your Story",
      description: "Connect emotionally with potential donors",
      duration: "6 min",
      type: "video"
    },
    {
      icon: Megaphone,
      title: "WhatsApp Promotion Strategies",
      description: "Leverage WhatsApp Status and Broadcast Lists",
      duration: "5 min",
      type: "guide"
    },
    {
      icon: TrendingUp,
      title: "Campaign Updates That Work",
      description: "Keep donors engaged throughout your campaign",
      duration: "4 min",
      type: "guide"
    }
  ];

  const faqs = [
    {
      question: "How long does it take to approve a campaign?",
      answer: "Most campaigns are reviewed and approved within 24-48 hours. Our team carefully reviews each submission to ensure it meets our guidelines and community standards."
    },
    {
      question: "Can I run more than one campaign?",
      answer: "Yes! You can run multiple campaigns, but we recommend focusing on one at a time for maximum impact. Each campaign must meet our approval criteria."
    },
    {
      question: "How do I withdraw funds?",
      answer: "Funds can be withdrawn once you reach your minimum threshold. Go to your dashboard, click 'Withdraw Funds', and follow the verification process. Funds typically arrive within 2-3 business days."
    },
    {
      question: "Can I edit a live campaign?",
      answer: "You can edit campaign descriptions, add updates, and upload new media. However, funding goals and categories cannot be changed once the campaign is live."
    },
    {
      question: "What happens if I don't reach my goal?",
      answer: "With our flexible funding model, you keep all funds raised even if you don't reach your target goal. However, we encourage setting realistic, achievable goals."
    },
    {
      question: "How do I promote my campaign effectively?",
      answer: "Start with your personal network, use our social media templates, post regular updates, and engage with your supporters. Our promotion calendar can help you create a strategic approach."
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
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

        .gradient-text {
          background: linear-gradient(135deg, #10b981, #059669);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .tab-active {
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
        }
      `}</style>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 hover:scale-110 z-40"
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
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="slide-in-up">
              <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-6">
                Resources & <span className="text-green-600">Tips</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                Everything you need to create successful campaigns and make informed donations. 
                Your complete toolkit for crowdfunding success.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 text-lg text-gray-600">
                <div className="flex items-center gap-2">
                  <FileText className="w-6 h-6 text-green-600" />
                  <span className="font-semibold">50+ Templates</span>
                </div>
                <div className="flex items-center gap-2">
                  <PlayCircle className="w-6 h-6 text-green-600" />
                  <span className="font-semibold">Video Guides</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="w-6 h-6 text-green-600" />
                  <span className="font-semibold">Free Downloads</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="px-4 mb-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                { id: 'campaigners', label: 'For Campaigners', icon: Target },
                { id: 'donors', label: 'For Donors', icon: Heart },
                { id: 'downloads', label: 'Downloads', icon: Download },
                { id: 'tutorials', label: 'Tutorials', icon: PlayCircle },
                { id: 'faqs', label: 'FAQs', icon: HelpCircle }
              ].map((tab) => (
                <Button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  variant={activeTab === tab.id ? "default" : "outline"}
                  className={`flex items-center gap-2 transition-all duration-300 ${
                    activeTab === tab.id 
                      ? 'shadow-lg scale-105' 
                      : 'shadow-md hover:shadow-lg'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  {tab.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* For Campaigners Section */}
        {activeTab === 'campaigners' && (
          <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">For Campaigners</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Master the art of crowdfunding with our comprehensive toolkit designed to help you create, 
                  launch, and promote successful campaigns.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {campaignerResources.map((resource, index) => (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-lg glow-effect group">
                    <div className="bg-gradient-to-br from-green-400 to-green-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <resource.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-4">{resource.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{resource.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-green-600 font-medium uppercase tracking-wide">
                        {resource.type}
                      </span>
                      <Button variant="ghost" className="text-green-600 hover:text-green-700 font-semibold p-2">
                        View <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* For Donors Section */}
        {activeTab === 'donors' && (
          <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">For Donors</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Learn how to donate safely, verify campaigns, and make the most impact with your contributions.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {donorResources.map((resource, index) => (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-lg glow-effect group">
                    <div className="bg-gradient-to-br from-green-400 to-green-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <resource.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-4">{resource.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{resource.description}</p>
                    <Button variant="ghost" className="text-green-600 hover:text-green-700 font-semibold p-2">
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Downloads Section */}
        {activeTab === 'downloads' && (
          <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Downloadable Resources</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Free templates, checklists, and tools to help you plan and execute your crowdfunding campaign.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {downloadableResources.map((resource, index) => (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-lg glow-effect group">
                    <div className="bg-gradient-to-br from-green-400 to-green-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <resource.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-4">{resource.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{resource.description}</p>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-sm text-gray-500">{resource.format} • {resource.size}</span>
                    </div>
                    <Button className="w-full bg-green-600 text-white hover:bg-green-700 font-semibold">
                      <Download className="w-5 h-5 mr-2" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Tutorials Section */}
        {activeTab === 'tutorials' && (
          <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Tutorials & Mini-Guides</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Step-by-step tutorials to help you master every aspect of crowdfunding on Finable.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {tutorials.map((tutorial, index) => (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-lg glow-effect group">
                    <div className="bg-gradient-to-br from-green-400 to-green-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <tutorial.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-4">{tutorial.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{tutorial.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-500">{tutorial.duration}</span>
                        <span className="text-sm text-green-600 font-medium uppercase tracking-wide ml-4">
                          {tutorial.type}
                        </span>
                      </div>
                      <Button variant="ghost" className="text-green-600 hover:text-green-700 font-semibold p-2">
                        Watch <PlayCircle className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQs Section */}
        {activeTab === 'faqs' && (
          <section className="py-12 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Quick FAQs</h2>
                <p className="text-xl text-gray-600">
                  Get instant answers to the most common questions about using Finable.
                </p>
              </div>
              
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg glow-effect">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full p-8 text-left flex items-center justify-between hover:bg-gray-50 rounded-2xl transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-black pr-4">{faq.question}</h3>
                      {expandedFAQ === index ? (
                        <ChevronUp className="w-6 h-6 text-green-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-green-600 flex-shrink-0" />
                      )}
                    </button>
                    {expandedFAQ === index && (
                      <div className="px-8 pb-8">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <p className="text-gray-600 mb-6">Need more help? We're here for you!</p>
                <Button className="bg-green-600 text-white hover:bg-green-700 font-semibold">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Contact Support
                </Button>
              </div>
            </div>
          </section>
        )}

        {/* Call to Action */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black">Ready to Launch Your Campaign?</h2>
            <p className="text-xl mb-12 text-gray-600 leading-relaxed">
              Use our resources and tips to create a campaign that stands out and achieves your funding goals
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="text-lg bg-green-600 text-white hover:bg-green-700">
                Start Your Campaign
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" className="text-lg border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                Browse Campaigns
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResourcesAndTips;