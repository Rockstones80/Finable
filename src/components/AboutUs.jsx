import { useState, useEffect } from 'react';
import { 
  ArrowUp,
  Heart, 
  Users, 
  Target, 
  Eye, 
  Shield, 
  Zap, 
  Globe, 
  GraduationCap,
  Lightbulb,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Mail,
  Linkedin,
  Twitter,
} from 'lucide-react';
import Button from './button';
import young_students from '../assets/young_students.jpg';
import student_writing from '../assets/student_writing.jpg';

const AboutUs = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const teamMembers = [
    {
      name: "Uzor Samuel",
      role: "Founder & CEO",
      bio: "Former fintech executive with 8 years experience building financial solutions for emerging markets.",
      avatar: "EN"
    },
    {
      name: "Ogunsona Ayomide",
      role: "CTO",
      bio: "Software engineer passionate about creating secure, scalable platforms that empower communities.",
      avatar: "FA"
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackToHome = () => {
    window.location.href = '/';
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
                About <span className="text-green-600">FINABLE</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                Bridging the gap between dreams and reality. We&apos;re a crowdfunding platform built to empower 
                Nigerians to raise funds for what matters — from education to innovation.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 text-lg text-gray-600">
                <div className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-green-600" />
                  <span className="font-semibold">10,000+ Users</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                  <span className="font-semibold">₦50M+ Raised</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="font-semibold">95% Success Rate</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">Our Story</h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    In Nigeria, great ideas often die in silence — not because they lack value, but because they lack funding. 
                    We saw brilliant students struggling to pay fees, innovative projects unable to launch, and communities 
                    in need without access to support.
                  </p>
                  <p>
                    <strong className="text-green-600">Finable was born out of necessity.</strong> We created a platform where 
                    dreams meet resources, where transparency builds trust, and where community support transforms lives.
                  </p>
                  <p>
                    Today, we&apos;re proud to be Nigeria&apos;s fastest-growing crowdfunding platform, helping thousands turn their 
                    aspirations into achievements.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-3xl shadow-2xl p-10 glow-effect">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 pulse-animation">
                      <Lightbulb className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-4">The Spark</h3>
                  </div>
                  <p className="text-gray-600 text-center text-lg italic">
                    &quot;Every great achievement starts with someone who believed it was possible, 
                    even when others couldn&apos;t see it yet.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10">
              <div className="bg-white rounded-3xl p-10 shadow-lg glow-effect">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-gradient-to-br from-green-400 to-green-600 w-14 h-14 rounded-xl flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-black">Our Mission</h2>
                </div>
                <p className="text-xl leading-relaxed text-gray-700">
                  To empower individuals and organizations in Nigeria to bring their ideas, causes, and innovations to life 
                  by providing a transparent, secure, and community-driven crowdfunding platform.
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-10 shadow-lg glow-effect">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-gradient-to-br from-green-400 to-green-600 w-14 h-14 rounded-xl flex items-center justify-center">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-black">Our Vision</h2>
                </div>
                <p className="text-xl leading-relaxed text-gray-700">
                  To be Africa&apos;s most trusted and impactful crowdfunding ecosystem — bridging the gap between 
                  dreams and resources, one campaign at a time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-16">What Makes Us Different</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Secure & Transparent",
                  description: "Every transaction is protected with bank-grade security and full transparency."
                },
                {
                  icon: Zap,
                  title: "Lightning Fast",
                  description: "Launch your campaign in minutes with our intuitive, streamlined process."
                },
                {
                  icon: Users,
                  title: "Community First",
                  description: "Built by Nigerians, for Nigerians. We understand your unique needs and challenges."
                },
                {
                  icon: CheckCircle,
                  title: "Verified Campaigns",
                  description: "All campaigns go through our verification process to ensure credibility."
                },
                {
                  icon: Globe,
                  title: "Local Payment Methods",
                  description: "Support for all major Nigerian payment methods including mobile money."
                },
                {
                  icon: Heart,
                  title: "Impact Focused",
                  description: "Every campaign is designed to create real, measurable impact in communities."
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg glow-effect group">
                  <div className="bg-gradient-to-br from-green-400 to-green-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="relative py-20 px-4 bg-white">
        <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{ backgroundImage: `url(${student_writing})` }}
      />
          <div className="relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-16">Who We Serve</h2>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                { icon: GraduationCap, title: "Students", desc: "Education funding and academic project support" },
                { icon: Heart, title: "Non-Profits", desc: "Community projects and meaningful social causes" },
                { icon: Users, title: "Individuals", desc: "Personal emergencies and important life events" }
              ].map((group, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg glow-effect opacity-80">
                  <div className="bg-gradient-to-r from-green-400 to-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <group.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4">{group.title}</h3>
                  <p className="text-gray-600 text-lg">{group.desc}</p>
                </div>
              ))}
            </div>
          </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-16">Meet Our Team</h2>
            <div className="grid md:grid-cols-3 gap-10 object-center">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-lg text-center glow-effect group">
                  <div className="w-28 h-28 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                    {member.avatar}
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">{member.name}</h3>
                  <p className="text-green-600 font-semibold mb-4 text-lg">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{member.bio}</p>
                  <div className="flex justify-center gap-4">
                    <button className="p-3 bg-gray-100 rounded-xl hover:bg-green-500 hover:text-white transition-all duration-300 group-hover:scale-110">
                      <Linkedin className="w-5 h-5" />
                    </button>
                    <button className="p-3 bg-gray-100 rounded-xl hover:bg-green-500 hover:text-white transition-all duration-300 group-hover:scale-110">
                      <Twitter className="w-5 h-5" />
                    </button>
                    <button className="p-3 bg-gray-100 rounded-xl hover:bg-green-500 hover:text-white transition-all duration-300 group-hover:scale-110">
                      <Mail className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="relative py-20 px-4 bg-white">
        <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${young_students})` }}
      />
          <div className="relative z-10">
          <div className="max-w-4xl mx-auto text-center text-black">
            <h2 className="text-4xl md:text-5xl font-bold mb-20">Ready to Turn Your Dreams into Reality?</h2>
            <p className="text-xl mb-12 text-gray-800 leading-relaxed">
              Join thousands of Nigerians who have successfully funded their projects through Finable
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="text-lg px-10 py-4 bg-green-600 text-white hover:bg-green-700">
                Start Your Campaign
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" className="text-lg px-10 py-4 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                Explore Campaigns
              </Button>
            </div>
          </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;