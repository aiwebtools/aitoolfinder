
import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import StarBackground from './StarBackground';

const Hero = () => {
  const [showScrollHint, setShowScrollHint] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollHint(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <StarBackground />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <header>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 cyber-text-3d animate-fade-in">
              <span className="cyber-gradient-text">AI Tools Expert & Finder GPT</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-white/80 mb-8 animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
              Find the Best Free AI Tools for Your Projects - Expert AI Tool Recommendations from AIWebTools.AI
            </h2>
          </header>
          
          <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-center items-center animate-fade-in" style={{
            animationDelay: '0.4s'
          }}>
            <a 
              href="https://chatgpt.com/g/g-8t4uyWOrI-ai-tools-expert-finder-gpt" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cyber-button w-full md:w-auto"
              aria-label="Use AI Tools Expert & Finder GPT - Best AI Tools Finder"
            >
              USE AI TOOLS EXPERT & FINDER GPT NOW
            </a>
            
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cyber-button-outline w-full md:w-auto"
              aria-label="Explore AI Web Tools - Free AI Tools Directory"
            >
              EXPLORE OUR FULL AI TOOL SELECTION
            </a>
          </div>
          
          <div className="mt-16 animate-fade-in" style={{
            animationDelay: '0.6s'
          }}>
            <p className="text-white/60 mb-3">
              ACCESS 900+ AI TOOLS WITH <span className="font-bold">AI TOOLS EXPERT & FINDER GPT</span> 
              <span className="block text-sm mt-1">
                Powered by <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="text-cyber-neon-blue hover:text-cyber-neon-purple transition-colors">
                  AiWebTools.Ai - Your Premier AI Tools Directory
                </a>
              </span>
            </p>
            
            <div className="mb-8 rounded-lg overflow-hidden glass-panel transition-all duration-300 hover:shadow-lg hover:shadow-cyber-neon-blue/20">
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/IrKKi3SX89g?autoplay=1&mute=0&controls=1&showinfo=0&rel=0&vq=hd1080&iv_load_policy=3" 
                title="AI Tools Expert & Finder GPT - Best Free AI Tools 2025" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full aspect-video max-w-3xl mx-auto"
                loading="lazy"
              ></iframe>
            </div>
          </div>
          
          {showScrollHint && (
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce" onClick={scrollToFeatures}>
              <ChevronDown className="h-8 w-8 text-cyber-neon-blue" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
