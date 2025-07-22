import React, { useState } from 'react';
import { 
  Target, Camera, PenTool, Clock, Rocket, Users, 
  MessageCircle, TrendingUp, Share2, Heart, 
  BarChart3, Edit, CheckCircle, Receipt, 
  PlayCircle, ChevronDown, ChevronUp, Star,
  Award, Calendar, UserCheck, Gift
} from 'lucide-react';
import Button from './button';

const SuccessGuide = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const sections = [
    {
      id: 'before-launch',
      title: 'Before You Launch',
      color: 'bg-blue-50 border-blue-200',
      iconColor: 'text-blue-600',
      icon: <Target className="w-6 h-6" />,
      items: [
        {
          icon: <Target className="w-5 h-5 text-blue-500" />,
          title: 'Define your goal & story',
          description: 'Be specific about what you need funding for and why it matters to your future'
        },
        {
          icon: <Camera className="w-5 h-5 text-blue-500" />,
          title: 'Prepare quality images/videos',
          description: 'Visual content gets 94% more engagement than text-only posts'
        },
        {
          icon: <PenTool className="w-5 h-5 text-blue-500" />,
          title: 'Write a clear, heartfelt message',
          description: 'Share your personal story and connect emotionally with potential donors'
        },
        {
          icon: <Target className="w-5 h-5 text-blue-500" />,
          title: 'Choose a realistic fundraising target',
          description: 'Research actual costs and set an achievable goal that covers your needs'
        },
        {
          icon: <Clock className="w-5 h-5 text-blue-500" />,
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
      color: 'bg-purple-50 border-purple-200',
      iconColor: 'text-purple-600',
      icon: <TrendingUp className="w-6 h-6" />,
      items: [
        {
          icon: <Calendar className="w-5 h-5 text-purple-500" />,
          title: 'Build momentum with daily posts',
          description: 'Consistent posting keeps your campaign visible and top-of-mind'
        },
        {
          icon: <Clock className="w-5 h-5 text-purple-500" />,
          title: 'Post at peak times (evenings, Sunday afternoons)',
          description: 'Time your posts when your audience is most active on social media'
        },
        {
          icon: <MessageCircle className="w-5 h-5 text-purple-500" />,
          title: 'Use threads or stories to tell more about the situation',
          description: 'Break down your story into digestible pieces across multiple posts'
        },
        {
          icon: <Share2 className="w-5 h-5 text-purple-500" />,
          title: 'Ask friends to reshare',
          description: 'Word-of-mouth marketing is the most effective form of promotion'
        }
      ]
    },
    {
      id: 'engage',
      title: 'Keep Donors Engaged',
      color: 'bg-orange-50 border-orange-200',
      iconColor: 'text-orange-600',
      icon: <Heart className="w-6 h-6" />,
      items: [
        {
          icon: <Award className="w-5 h-5 text-orange-500" />,
          title: 'Post updates when you hit milestones',
          description: 'Celebrate progress to maintain excitement and encourage more donations'
        },
        {
          icon: <Gift className="w-5 h-5 text-orange-500" />,
          title: 'Celebrate every contribution publicly',
          description: 'Recognition encourages more people to donate and shows appreciation'
        },
        {
          icon: <Heart className="w-5 h-5 text-orange-500" />,
          title: 'Send personal thank-you messages',
          description: 'Personal touches create lasting relationships with your supporters'
        },
        {
          icon: <Camera className="w-5 h-5 text-orange-500" />,
          title: 'Show how funds are helping (with photos or short clips)',
          description: 'Transparency builds trust and shows the real impact of donations'
        }
      ]
    },
    {
      id: 'optimize',
      title: 'Optimize as You Go',
      color: 'bg-indigo-50 border-indigo-200',
      iconColor: 'text-indigo-600',
      icon: <BarChart3 className="w-6 h-6" />,
      items: [
        {
          icon: <BarChart3 className="w-5 h-5 text-indigo-500" />,
          title: 'Track your traffic (where donors are coming from)',
          description: 'Understanding your best channels helps you focus your efforts'
        },
        {
          icon: <Share2 className="w-5 h-5 text-indigo-500" />,
          title: 'Reshare top-performing posts',
          description: 'Double down on content that resonates with your audience'
        },
        {
          icon: <Edit className="w-5 h-5 text-indigo-500" />,
          title: 'Edit your campaign if needed (update amount, explain more)',
          description: 'Adapt your campaign based on feedback and changing circumstances'
        }
      ]
    },
    {
      id: 'wrap-up',
      title: 'Wrap It Up Right',
      color: 'bg-emerald-50 border-emerald-200',
      iconColor: 'text-emerald-600',
      icon: <CheckCircle className="w-6 h-6" />,
      items: [
        {
          icon: <CheckCircle className="w-5 h-5 text-emerald-500" />,
          title: 'Mark the campaign as successful or completed',
          description: 'Proper closure gives donors satisfaction and builds your credibility'
        },
        {
          icon: <Receipt className="w-5 h-5 text-emerald-500" />,
          title: 'Show receipts if applicable (for transparency)',
          description: 'Financial transparency builds trust for future campaigns'
        },
        {
          icon: <Heart className="w-5 h-5 text-emerald-500" />,
          title: 'Send a final thank-you message',
          description: 'End on a high note with genuine gratitude to all supporters'
        },
        {
          icon: <Users className="w-5 h-5 text-emerald-500" />,
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
        <div className="text-center mb-12">
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
        <div className="space-y-6">
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

        {/* Success Stories Section */}
        <div className="mt-16 bg-white rounded-lg p-8 shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8 flex items-center justify-center gap-2">
            <Star className="w-8 h-8 text-yellow-500" />
            What Successful Campaigns Have in Common
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

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Launch Your Successful Campaign?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Use this guide to create a campaign that stands out, engages donors, and achieves your educational funding goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="px-8 py-3 font-semibold">
              Start Your Campaign
            </Button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              View Success Stories
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessGuide;