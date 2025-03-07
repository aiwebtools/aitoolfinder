
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
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <StarBackground />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 cyber-text-3d animate-fade-in">
            <span className="cyber-gradient-text">AI Tools Expert & Finder GPT</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Find the perfect AI tools for your projects - recommended by an expert AI assistant
          </p>
          
          <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a
              href="https://chatgpt.com/g/g-8t4uyWOrI-ai-tools-expert-finder-gpt"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-button w-full md:w-auto"
            >
              USE AI TOOLS EXPERT & FINDER GPT NOW
            </a>
            
            <a
              href="https://www.aiwebtools.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-button-outline w-full md:w-auto"
            >
              EXPLORE MORE AI TOOLS
            </a>
          </div>
          
          <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <p className="text-white/60 mb-3">
              ACCESS THE WORLD OF AI TOOLS WITH <span className="font-bold">AI TOOLS EXPERT & FINDER GPT</span> 
              <span className="block text-sm mt-1">
                Presented by <a 
                  href="https://www.aiwebtools.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyber-neon-blue hover:text-cyber-neon-purple transition-colors">
                  AiWebTools.Ai
                </a>
              </span>
            </p>
            <a
              href="https://docs.google.com/document/d/1qtDKo3XN_EsspgrQD72Cpq2qh83H5xSd/edit?usp=drivesdk&ouid=116187507271950139405&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-8 rounded-lg overflow-hidden glass-panel p-2 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-neon-blue/20"
            >
              <img 
                src="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/blob-aab53a2.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1152,cg:true" 
                alt="AI Tools Collection" 
                className="w-full max-w-xs mx-auto rounded shadow-lg"
                loading="lazy"
              />
            </a>
          </div>
          
          {showScrollHint && (
            <div 
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
              onClick={scrollToFeatures}
            >
              <ChevronDown className="h-8 w-8 text-cyber-neon-blue" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
