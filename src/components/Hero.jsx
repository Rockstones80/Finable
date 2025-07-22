// import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from "./button"
import { ArrowRight, Users, Shield, BarChart3, GraduationCap, Heart, Zap } from 'lucide-react';

import hero_section from "../assets/hero_section.jpg"
import easy_setup from "../assets/easy_setup.jpeg"
import secure_payment from "../assets/secure_payment.jpeg"
import transparent_donation from "../assets/transparent_donation.jpeg"
import graduating_picture from "../assets/graduating_picture.jpg"

const features = [
  {
    image: transparent_donation,
    name: "Transparent donation tracking",
    icon: BarChart3,
    description: "Track every donation with real-time reporting and complete transparency"
  },
  {
    image: easy_setup,
    name: "Easy campaign setup",
    icon: Zap,
    description: "Start your campaign in just a few minutes with our intuitive setup process"
  },
  {
    image: secure_payment,
    name: "Secure payment system",
    icon: Shield,
    description: "Experience peace of mind with our robust, encrypted payment system"
  },
];

const Hero = () => {
  const navigate = useNavigate();

  // Navigation functions
  // const navigateToSignup = () => {
  //   navigate('/auth?mode=signup');
  // };

  // const navigateToLogin = () => {
  //   navigate('/auth?mode=login');
  // };

  const navigateToDonate = () => {
    // Go to auth page with donate redirect
    navigate('/auth?mode=login&redirect=donate');
  };

  const navigateToStartCampaign = () => {
    // Students need to sign up first to start a campaign
    navigate('/auth?mode=signup&type=student');
  };

  const navigateToAbout = () => {
    navigate('/about');
  };

  const navigateToGetStarted = () => {
    // Get Started should go to signup
    navigate('/auth?mode=signup');
  };

  return (
    <div className="bg-white font-sans text-black shadow-md mt-auto flex flex-col items-center justify-center">
    
      <style jsx>{`
        .typewriter {
          overflow: hidden;
          border-right: 3px solid #10b981;
          white-space: nowrap;
          margin: 0 auto;
          animation: typing 3.5s steps(50, end), blink-caret 0.75s step-end infinite;
        }
        
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #10b981; }
        }
        
        .fade-in-delayed {
          opacity: 0;
          animation: fadeIn 1s ease-in 4s forwards;
        }
        
        @keyframes fadeIn {
          to { opacity: 1; }
        }
      `}</style>

      <div className="justify-center max-w-[1240px] mx-auto border-b border-gray-600 pb-16 text-wrap min-h-full flex flex-col items-center">
        <div className="py-1 h-32 mb-10">
          <div className="text-center">
            <h1 className="typewriter text-black pt-4 px-4 font-extrabold text-4xl inline-block">
              EMPOWER YOUR EDUCATION
            </h1>
            <h1 className="fade-in-delayed text-black pt-2 px-4 font-extrabold text-4xl">
              WITH <span className="text-green-500">FINABLE</span> TODAY
            </h1>
          </div>
        </div>
        <p className="text-center py-4 px-4 font-bold text-xl text-black">
          Welcome to Finable where your educational dreams become a reality. Start your campaign now <br /> 
          and connect with generous donors ready to support your journey
        </p>
        <ul className="flex gap-4 justify-center">
          <li>
            <Button icon={GraduationCap} onClick={navigateToStartCampaign}>Start a campaign</Button>
          </li>
          <li>
            <Button icon={Heart} onClick={navigateToDonate}>Donate</Button>
          </li>
        </ul>
        <img src={hero_section} alt="hero section image" className="mb-auto pt-16 w-full h-full px-28" />
      </div>

      <div className="justify-center mx-auto border-none py-20 text-wrap min-h-screen flex flex-col items-center">
        <h1 className="text-center text-4xl font-bold text-black pt-9 mb-8">
          Discover The Features Of Finable
        </h1>
        <p className="text-center text-lg text-black pt-5">
          Finable offers innovative solutions to help students secure funding for their education.<br/>
          Our platform is designed to make the fundraising process seamless and effective
        </p>

        <div className="flex flex-col items-center justify-center max-w-[1240px] min-h-full">
          <ul className="flex gap-4">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <li key={index} className="flex items-center justify-center">
                  <div className="py-4 px-2 h-full w-full max-w-sm bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="relative">
                      <img src={feature.image} alt={feature.name} className="w-full h-68 object-cover rounded-lg mb-4"/>
                      <div className="absolute top-2 right-2 bg-green-500 p-2 rounded-full">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <h3 className="font-extrabold text-xl text-center pb-2 text-gray-800">{feature.name}</h3>
                    <p className="text-sm text-center text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <ul className="flex items-center justify-center gap-2 py-4">
            <li>
              <Button icon={Heart} onClick={navigateToDonate}>Donate</Button>
            </li>
            <li>
              <button 
                onClick={navigateToAbout}
                className="flex items-center gap-2 mt-1 text-green-600 hover:text-green-700 font-semibold hover:translate-x-2 transition-all duration-300"
              >
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-bl from-gray-100 to-white from-5% min-h-full w-full flex flex-col items-center">
        <div className="px-4 py-8 gap-2 max-w-[1240px] flex items-center justify-between">
          <div className="px-2 py-4 max-w-md">
            <h2 className="py-4 font-extrabold text-4xl">
              Unlock Opportunities: <br/>
              Benefits for <span className="text-green-500">students</span> and <span className="text-green-500">donors</span>
            </h2>
            <p className="font-semibold text-lg">
              Finable enables students to achieve their educational aspirations by linking <br/>
              them with generous benefactors. Donors not only impact students&apos; lives<br/>
              positively but also have the opportunities to receive advantages for their donations.
            </p>

            <ul className="flex gap-4 py-4">
              <li>
                <Button icon={GraduationCap} onClick={navigateToStartCampaign}>Start a campaign</Button>
              </li>
              <li>
                <Button icon={Users} onClick={navigateToDonate}>Donate</Button>
              </li>
            </ul>
          </div>

          <div className="w-1/2 h-1/2 ml-auto">
            <img src={graduating_picture} alt="graduating picture" className="object-cover rounded-2xl w-full h-96 shadow-xl"/>
          </div>
        </div>
      </div>

      <div className="h-full bg-white w-full">
        <div className="px-4 py-9 items-center text-center justify-center">
          <h1 className="text-4xl font-bold py-8">
            Funding Your Education Made Easy
          </h1>
          <p className="text-lg font-semibold max-w-3xl mx-auto">
            Creating a campaign on Finable is simple and straightforward. Just share your story, set a funding goal, and invite supporters to help you achieve your educational dreams.
          </p>
          <div className="mt-8">
            <Button icon={ArrowRight} onClick={navigateToGetStarted}>Get Started Today</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;