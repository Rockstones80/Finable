import { useState, useEffect } from 'react';

const SuccessStoriesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
    }
  ];

  // Navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(successStories.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? Math.ceil(successStories.length / 3) - 1 : prev - 1
    );
  };

  // Auto-slide functionality with longer duration (15 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(successStories.length / 3));
    }, 15000);
    
    return () => clearInterval(timer);
  }, [successStories.length]);

  const totalSlides = Math.ceil(successStories.length / 3);
  const currentStories = successStories.slice(currentSlide * 3, (currentSlide * 3) + 3);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Success Stories</h2>
      
      {/* Stories Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {currentStories.map((story, index) => (
          <div key={`${currentSlide}-${index}`} className="bg-white rounded-lg shadow-lg p-6 border">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">{story.image}</div>
              <h3 className="text-xl font-bold text-gray-800">{story.name}</h3>
              <p className="text-gray-600">{story.age} • {story.location}</p>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Goal: {story.goal}</span>
                <span className="text-sm text-gray-500">{story.timeframe}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${story.percentage}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mt-1">
                <span>{story.raised} raised</span>
                <span>{story.percentage}%</span>
              </div>
            </div>
            
            <p className="text-gray-700 text-sm leading-relaxed mb-4">{story.story}</p>
            
            <div className="text-xs text-green-600 font-medium">
              ✅ {story.outcome}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-center items-center space-x-4">
        <button
          onClick={prevSlide}
          className="flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-200 shadow-lg"
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="flex space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentSlide ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <button
          onClick={nextSlide}
          className="flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-200 shadow-lg"
          aria-label="Next slide"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Slide Counter */}
      <div className="text-center mt-4 text-sm text-gray-500">
        Slide {currentSlide + 1} of {totalSlides}
      </div>
    </div>
  );
};

export default SuccessStoriesSlider;