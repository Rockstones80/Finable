import { useState, useEffect } from 'react';
import { 
  Target, Camera, PenTool, Clock, Rocket, Users, 
  MessageCircle, TrendingUp, Share2, Heart, 
  BarChart3, Edit, CheckCircle, Receipt, 
  PlayCircle, ChevronDown, ChevronUp, Star,
  Award, Calendar, UserCheck, Gift, Quote,
  MapPin, Timer, ChevronLeft, ChevronRight
} from 'lucide-react';

const SuccessGuide = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

 const successStories = [
    {
      name: "Sarah Chen",
      age: 22,
      location: "California, USA",
      goal: "Medical School Tuition",
      raised: "$47,500",
      target: "$50,000",
      percentage: 95,
      timeframe: "3 months",
      image: "👩‍⚕️",
      category: "Medical",
      story: "As a first-generation college student, I needed help funding my final year of medical school. By sharing my journey of volunteering at free clinics and my dream to serve underserved communities, I connected with donors who believed in my mission.",
      keyTactics: ["Posted weekly clinic volunteer videos", "Shared patient impact stories (anonymized)", "Regular updates on academic progress", "Created emotional connection with personal backstory"],
      outcome: "Now completing residency and giving back to the community that supported me. Started a scholarship fund for other first-gen students."
    },
    {
      name: "Marcus Johnson",
      age: 19,
      location: "Texas, USA",
      goal: "Engineering Degree",
      raised: "$28,500",
      target: "$30,000",
      percentage: 95,
      timeframe: "6 weeks",
      image: "👨‍💻",
      category: "Engineering",
      story: "After my single mother lost her job during the pandemic, I almost had to drop out of my engineering program. I shared our story honestly, including the financial hardship, and was amazed by how many people wanted to help me continue my education.",
      keyTactics: ["Transparent about financial situation", "Shared engineering projects and prototypes", "Mother helped promote to her network", "Daily progress updates"],
      outcome: "Graduated with honors and now working at a tech startup, paying it forward by mentoring other students."
    },
    {
      name: "Aisha Patel",
      age: 24,
      location: "London, UK",
      goal: "Climate Research Equipment",
      raised: "$18,200",
      target: "$15,000",
      percentage: 121,
      timeframe: "4 months",
      image: "🔬",
      category: "Research",
      story: "I needed funding for my climate research thesis equipment. I made my campaign about the bigger picture - how this research could impact environmental policy. The cause resonated with environmentally conscious donors worldwide.",
      keyTactics: ["Connected personal goal to global cause", "Shared research findings weekly", "Created compelling video content", "Engaged with environmental communities"],
      outcome: "Research published in Nature Climate Change. Now pursuing PhD with full funding and working with UN climate panel."
    },
    {
      name: "Diego Martinez",
      age: 20,
      location: "Madrid, Spain",
      goal: "Art School Supplies",
      raised: "$12,800",
      target: "$10,000",
      percentage: 128,
      timeframe: "2 months",
      image: "🎨",
      category: "Arts",
      story: "Coming from a working-class family, art school seemed impossible. I showcased my portfolio online and shared my journey from sketching on napkins to needing professional supplies for my final year projects.",
      keyTactics: ["Shared daily artwork and progress", "Time-lapse videos of creation process", "Story of humble beginnings", "Engaged with art communities online"],
      outcome: "Graduated top of class. Now freelancing successfully and teaching art workshops for underprivileged youth."
    },
    {
      name: "Emma Thompson",
      age: 23,
      location: "Melbourne, Australia",
      goal: "Nursing Program",
      raised: "$22,300",
      target: "$25,000",
      percentage: 89,
      timeframe: "5 months",
      image: "👩‍⚕️",
      category: "Healthcare",
      story: "After working as a hospital volunteer during COVID, I knew nursing was my calling. I shared stories of patients who inspired me and my dream to specialize in pediatric care.",
      keyTactics: ["Shared inspiring patient stories (with permission)", "Posted study session livestreams", "Connected with healthcare worker community", "Regular milestone celebrations"],
      outcome: "Graduated with distinction. Now working in pediatric ICU and loving every moment of helping children heal."
    },
    {
      name: "James Wilson",
      age: 21,
      location: "Toronto, Canada",
      goal: "Computer Science Bootcamp",
      raised: "$15,600",
      target: "$18,000",
      percentage: 87,
      timeframe: "3 months",
      image: "💻",
      category: "Technology",
      story: "After dropping out of traditional college due to financial constraints, I discovered coding bootcamps. I built small projects and shared my coding journey to prove my dedication to potential donors.",
      keyTactics: ["Shared coding projects on GitHub", "Posted learning progress videos", "Demonstrated real applications", "Built small apps for local businesses"],
      outcome: "Completed bootcamp and landed job at fintech startup. Now earning 3x what I made before and debt-free."
    },
    {
      name: "Fatima Al-Rashid",
      age: 25,
      location: "Dubai, UAE",
      goal: "MBA Program",
      raised: "$35,400",
      target: "$40,000",
      percentage: 89,
      timeframe: "6 months",
      image: "📚",
      category: "Business",
      story: "As an immigrant woman in tech, I wanted an MBA to break through the glass ceiling. I shared my entrepreneurship journey and vision for starting a company that empowers other women in technology.",
      keyTactics: ["Shared business plan excerpts", "Connected with women in business networks", "Posted leadership insights", "Created video pitch presentations"],
      outcome: "Completed MBA with honors. Successfully launched my fintech startup with $500K seed funding."
    },
    {
      name: "Liam O'Connor",
      age: 19,
      location: "Dublin, Ireland",
      goal: "Music Production Equipment",
      raised: "$8,900",
      target: "$8,000",
      percentage: 111,
      timeframe: "2 months",
      image: "🎵",
      category: "Music",
      story: "I've been producing music in my bedroom with basic equipment. I needed professional gear for my final year music technology project and shared my original compositions to show my potential.",
      keyTactics: ["Shared original music compositions", "Behind-the-scenes production videos", "Collaborated with local artists", "Engaged music production communities"],
      outcome: "Graduated with first-class honors. Now producing for major Irish artists and have my own recording studio."
    },
    {
      name: "Sofia Rodriguez",
      age: 22,
      location: "Barcelona, Spain",
      goal: "Psychology Masters",
      raised: "$19,200",
      target: "$20,000",
      percentage: 96,
      timeframe: "4 months",
      image: "🧠",
      category: "Psychology",
      story: "After struggling with mental health in my teens, I wanted to become a therapist to help others. I shared my recovery journey and passion for making mental health support more accessible.",
      keyTactics: ["Shared mental health awareness content", "Posted study tips and psychology insights", "Connected with mental health communities", "Created informative Instagram content"],
      outcome: "Completed masters in clinical psychology. Now running successful private practice and mental health workshops."
    },
    {
      name: "Chen Wei",
      age: 23,
      location: "Shanghai, China",
      goal: "International Exchange Program",
      raised: "$16,800",
      target: "$15,000",
      percentage: 112,
      timeframe: "3 months",
      image: "✈️",
      category: "Exchange",
      story: "I dreamed of studying sustainable agriculture in Europe to bring modern farming techniques back to rural China. I shared my vision for helping farming communities and documented my preparation journey.",
      keyTactics: ["Shared village farming videos", "Posted language learning progress", "Connected with agricultural communities", "Created cultural exchange content"],
      outcome: "Completed exchange program in Netherlands. Now implementing sustainable farming in 5 Chinese villages."
    }
  ];

  const totalSlides = Math.ceil(successStories.length / 3);

  // Auto-slide functionality with longer duration (15 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 15000);
    
    return () => clearInterval(timer);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const sections = [
    {
      id: 'before-launch',
      title: 'Before You Launch',
      color: 'bg-green-50 border-green-200',
      iconColor: 'text-blue-600',
      icon: <Target className="w-6 h-6" />,
      items: [
        {
          icon: <Target className="w-5 h-5 text-green-500" />,
          title: 'Define your goal & story',
          description: 'Be specific about what you need funding for and why it matters to your future'
        },
        {
          icon: <Camera className="w-5 h-5 text-green-500" />,
          title: 'Prepare quality images/videos',
          description: 'Visual content gets 94% more engagement than text-only posts'
        },
        {
          icon: <PenTool className="w-5 h-5 text-green-500" />,
          title: 'Write a clear, heartfelt message',
          description: 'Share your personal story and connect emotionally with potential donors'
        },
        {
          icon: <Target className="w-5 h-5 text-green-500" />,
          title: 'Choose a realistic fundraising target',
          description: 'Research actual costs and set an achievable goal that covers your needs'
        },
        {
          icon: <Clock className="w-5 h-5 text-green-500" />,
          title: 'Set a timeline (and build anticipation)',
          description: 'Create urgency with deadlines and tease your launch to build early interest'
        }
      ]
    },
    {
      id: 'launch',
      title: 'Launch Your Campaign',
      color: 'bg-green-50 border-green-200',
      iconColor: 'text-green-600',
      icon: <Rocket className="w-6 h-6" />,
      items: [
        {
          icon: <Users className="w-5 h-5 text-green-500" />,
          title: 'Start with your close circle (friends, family)',
          description: 'Your inner circle will be your first supporters and help create initial momentum'
        },
        {
          icon: <UserCheck className="w-5 h-5 text-green-500" />,
          title: 'Share it privately first, then publicly',
          description: 'Get a few donations before going public to show social proof'
        },
        {
          icon: <PlayCircle className="w-5 h-5 text-green-500" />,
          title: 'Post a video of yourself explaining the need',
          description: 'Personal videos create trust and connection with potential donors'
        },
        {
          icon: <MessageCircle className="w-5 h-5 text-green-500" />,
          title: 'Use status updates, DMs, group chats',
          description: 'Leverage all your communication channels for maximum reach'
        }
      ]
    },
    {
      id: 'promote',
      title: 'Promote Like a Pro',
      color: 'bg-green-50 border-green-200',
      iconColor: 'text-purple-600',
      icon: <TrendingUp className="w-6 h-6" />,
      items: [
        {
          icon: <Calendar className="w-5 h-5 text-green-500" />,
          title: 'Build momentum with daily posts',
          description: 'Consistent posting keeps your campaign visible and top-of-mind'
        },
        {
          icon: <Clock className="w-5 h-5 text-green-500" />,
          title: 'Post at peak times (evenings, Sunday afternoons)',
          description: 'Time your posts when your audience is most active on social media'
        },
        {
          icon: <MessageCircle className="w-5 h-5 text-green-500" />,
          title: 'Use threads or stories to tell more about the situation',
          description: 'Break down your story into digestible pieces across multiple posts'
        },
        {
          icon: <Share2 className="w-5 h-5 text-green-500" />,
          title: 'Ask friends to reshare',
          description: 'Word-of-mouth marketing is the most effective form of promotion'
        }
      ]
    },
    {
      id: 'engage',
      title: 'Keep Donors Engaged',
      color: 'bg-green-50 border-green-200',
      iconColor: 'text-orange-600',
      icon: <Heart className="w-6 h-6" />,
      items: [
        {
          icon: <Award className="w-5 h-5 text-green-500" />,
          title: 'Post updates when you hit milestones',
          description: 'Celebrate progress to maintain excitement and encourage more donations'
        },
        {
          icon: <Gift className="w-5 h-5 text-green-500" />,
          title: 'Celebrate every contribution publicly',
          description: 'Recognition encourages more people to donate and shows appreciation'
        },
        {
          icon: <Heart className="w-5 h-5 text-green-500" />,
          title: 'Send personal thank-you messages',
          description: 'Personal touches create lasting relationships with your supporters'
        },
        {
          icon: <Camera className="w-5 h-5 text-green-500" />,
          title: 'Show how funds are helping (with photos or short clips)',
          description: 'Transparency builds trust and shows the real impact of donations'
        }
      ]
    },
    {
      id: 'optimize',
      title: 'Optimize as You Go',
      color: 'bg-green-50 border-green-200',
      iconColor: 'text-indigo-600',
      icon: <BarChart3 className="w-6 h-6" />,
      items: [
        {
          icon: <BarChart3 className="w-5 h-5 text-green-500" />,
          title: 'Track your traffic (where donors are coming from)',
          description: 'Understanding your best channels helps you focus your efforts'
        },
        {
          icon: <Share2 className="w-5 h-5 text-green-500" />,
          title: 'Reshare top-performing posts',
          description: 'Double down on content that resonates with your audience'
        },
        {
          icon: <Edit className="w-5 h-5 text-green-500" />,
          title: 'Edit your campaign if needed (update amount, explain more)',
          description: 'Adapt your campaign based on feedback and changing circumstances'
        }
      ]
    },
    {
      id: 'wrap-up',
      title: 'Wrap It Up Right',
      color: 'bg-green-50 border-green-200',
      iconColor: 'text-emerald-600',
      icon: <CheckCircle className="w-6 h-6" />,
      items: [
        {
          icon: <CheckCircle className="w-5 h-5 text-green-500" />,
          title: 'Mark the campaign as successful or completed',
          description: 'Proper closure gives donors satisfaction and builds your credibility'
        },
        {
          icon: <Receipt className="w-5 h-5 text-green-500" />,
          title: 'Show receipts if applicable (for transparency)',
          description: 'Financial transparency builds trust for future campaigns'
        },
        {
          icon: <Heart className="w-5 h-5 text-green-500" />,
          title: 'Send a final thank-you message',
          description: 'End on a high note with genuine gratitude to all supporters'
        },
        {
          icon: <Users className="w-5 h-5 text-green-500" />,
          title: 'Ask supporters to follow your Finable profile for future causes',
          description: 'Build a community of supporters for long-term success'
        }
      ]
    }
  ];

  const successStats = [
    { number: '73%', label: 'of successful campaigns use video content' },
    { number: '5x', label: 'more likely to succeed with regular updates' },
    { number: '68%', label: 'of donations come from social media shares' },
    { number: '2.5x', label: 'higher success rate when starting with family/friends' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Target className="w-4 h-4" />
            Complete Success Guide
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Launch, Grow & Complete Successful Campaigns
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow this step-by-step guide to maximize your fundraising success and reach your educational goals
          </p>
        </div>

        {/* SUCCESS STORIES CAROUSEL - AT THE TOP */}
        <div className="mb-16 bg-gradient-to-bl from-green-50 to-white rounded-2xl p-8 border border-green-200 overflow-hidden">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-2 flex items-center justify-center gap-2">
            <Star className="w-8 h-8 text-yellow-500" />
            Real Success Stories
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Learn from students worldwide who successfully funded their education dreams
          </p>
          
          {/* Carousel Container */}
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid md:grid-cols-3 gap-6 px-4">
                      {successStories.slice(slideIndex * 3, slideIndex * 3 + 3).map((story, cardIndex) => (
                        <div
                          key={cardIndex}
                          className="relative group"
                          onMouseEnter={() => setHoveredCard(slideIndex * 3 + cardIndex)}
                          onMouseLeave={() => setHoveredCard(null)}
                        >
                          {/* Main Card */}
                          <div className={`bg-white rounded-xl shadow-lg border-2 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:-rotate-2 ${
                            hoveredCard === slideIndex * 3 + cardIndex ? 'border-green-400 z-20' : 'border-gray-200 hover:border-blue-200'
                          }`}>
                            <div className="p-6">
                              <div className="flex items-center gap-4 mb-4">
                                <div className="text-4xl">{story.image}</div>
                                <div className="flex-1">
                                  <h3 className="font-bold text-lg text-gray-900">{story.name}</h3>
                                  <p className="text-sm text-gray-500 flex items-center gap-1">
                                    <MapPin className="w-3 h-3" />
                                    {story.location}
                                  </p>
                                </div>
                                <div className="text-right">
                                  <div className="text-sm font-medium text-green-600">{story.raised}</div>
                                  <div className="text-xs text-green-500">raised</div>
                                </div>
                              </div>
                              
                              <div className="mb-4">
                                <div className="flex justify-between text-sm mb-1">
                                  <span className="font-medium text-green-700">{story.goal}</span>
                                  <span className="text-green-600 font-bold">{story.percentage}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                  <div 
                                    className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all duration-1000"
                                    style={{ width: `${Math.min(story.percentage, 100)}%` }}
                                  ></div>
                                </div>
                              </div>
                              
                              <div className="flex justify-between items-center text-xs text-green-500">
                                <span className="flex items-center gap-1">
                                  <Timer className="w-3 h-3" />
                                  {story.timeframe}
                                </span>
                                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full">
                                  {story.category}
                                </span>
                              </div>
                            </div>
                          </div>
                          
                          {/* Hover Detail Card */}
                          <div className={`absolute inset-0 bg-white rounded-xl shadow-2xl border-2 border-green-200 p-6 transition-all duration-500 transform ${
                            hoveredCard === slideIndex * 3 + cardIndex 
                              ? 'opacity-100 scale-105 rotate-3 translate-y-2 z-30' 
                              : 'opacity-0 scale-95 pointer-events-none'
                          }`}>
                            <div className="h-full flex flex-col">
                              <div className="flex items-center gap-3 mb-4">
                                <div className="text-3xl">{story.image}</div>
                                <div>
                                  <h3 className="font-bold text-lg text-green-900">{story.name}, {story.age}</h3>
                                  <p className="text-sm text-green-600 font-medium">{story.goal}</p>
                                </div>
                              </div>
                              
                              <div className="bg-blue-50 rounded-lg p-3 mb-4 relative">
                                <Quote className="w-4 h-4 text-green-400 absolute top-1 left-1" />
                                <p className="text-sm text-gray-700 italic pl-5 line-clamp-3">{story.story}</p>
                              </div>
                              
                              <div className="flex-1">
                                <h4 className="font-semibold text-sm text-green-900 mb-2">Key Tactics:</h4>
                                <ul className="space-y-1">
                                  {story.keyTactics.slice(0, 2).map((tactic, index) => (
                                    <li key={index} className="flex items-start gap-2 text-xs text-green-600">
                                      <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                                      {tactic}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div className="mt-4 pt-3 border-t border-gray-200">
                                <p className="text-xs text-gray-600 font-medium">Outcome:</p>
                                <p className="text-xs text-gray-700 line-clamp-2">{story.outcome}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Controls */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <button
                onClick={prevSlide}
                className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              {/* Slide indicators */}
              <div className="flex space-x-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === currentSlide ? 'bg-green-600' : 'bg-green-300 hover:bg-green-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextSlide}
                className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Success Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {successStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-green-600 mb-2">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Sections */}
        <div className="space-y-6 mb-16">
          {sections.map((section) => (
            <div key={section.id} className={`rounded-lg border-2 ${section.color} overflow-hidden`}>
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full p-6 text-left hover:bg-white/50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg bg-white shadow-sm ${section.iconColor}`}>
                      {section.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {section.title}
                      </h2>
                    </div>
                  </div>
                  {activeSection === section.id ? (
                    <ChevronUp className="w-6 h-6 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-500" />
                  )}
                </div>
              </button>
              
              {activeSection === section.id && (
                <div className="px-6 pb-6">
                  <div className="space-y-4">
                    {section.items.map((item, index) => (
                      <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0">
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 mb-2">
                              {item.title}
                            </h3>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* What Successful Campaigns Have in Common */}
        <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8 flex items-center justify-center gap-2">
            <Star className="w-8 h-8 text-yellow-500" />
            What All Success Stories Share
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Authentic Storytelling</h3>
              <p className="text-gray-600 text-sm">Personal, genuine stories that connect emotionally with donors</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Consistent Engagement</h3>
              <p className="text-gray-600 text-sm">Regular updates and active communication with supporters</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Strong Network Leverage</h3>
              <p className="text-gray-600 text-sm">Effective use of personal and social networks for promotion</p>
            </div>
            </div>
          </div>
        </div>

        {/* Additional Tips Section */}
        <div className="bg-gradient-to-r from-green-50 to-white rounded-lg p-8 text-gray-700 mb-12 ">
          <h2 className="text-3xl font-bold text-center mb-8">Pro Tips from Top Fundraisers</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Time your launch strategically</h3>
                  <p className="text-black text-sm">Launch on Tuesday-Thursday for maximum visibility. Avoid holidays and major events.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Create urgency without pressure</h3>
                  <p className="text-black text-sm">Use enrollment deadlines or application dates to create natural urgency.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Show your academic achievements</h3>
                  <p className="text-black text-sm">Share grades, awards, or recognition to prove you&apos;re a worthy investment.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Engage with similar campaigns</h3>
                  <p className="text-black text-sm">Support other student fundraisers to build community and gain visibility.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold">5</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Use hashtags strategically</h3>
                  <p className="text-black text-sm">#StudentFunding #EducationMatters #DreamsComeTrue help reach the right audience.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold">6</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Partner with local organizations</h3>
                  <p className="text-black text-sm">Reach out to alumni groups, local businesses, and community organizations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default SuccessGuide;