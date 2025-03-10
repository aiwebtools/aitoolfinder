
import React, { useState, useEffect } from 'react';
import { X, Shield, AlertTriangle } from 'lucide-react';

const DisclaimerPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already accepted the disclaimer
    const hasAccepted = localStorage.getItem('disclaimerAccepted');
    
    if (!hasAccepted) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('disclaimerAccepted', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="relative max-w-md w-full overflow-hidden rounded-2xl animate-scale-in">
        {/* Gradient border effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-neon-blue via-cyber-neon-purple to-cyber-neon-pink rounded-2xl blur opacity-70"></div>
        
        {/* Inner content */}
        <div className="relative m-[2px] bg-cyber-dark rounded-2xl p-6 overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-32 bg-cyber-neon-blue blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyber-neon-pink rounded-full blur-3xl"></div>
          </div>
          
          {/* Header */}
          <div className="relative flex justify-between items-center mb-6">
            <div className="flex items-center">
              <Shield className="w-6 h-6 text-cyber-neon-blue mr-2" />
              <h2 className="text-xl font-bold text-white cyber-gradient-text">Disclaimer</h2>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-white/70 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Content */}
          <div className="relative space-y-4 mb-6 text-white/80">
            <div className="flex items-start">
              <AlertTriangle className="w-5 h-5 text-cyber-neon-pink mt-0.5 mr-2 flex-shrink-0" />
              <p className="text-sm">
                AI Tools Expert & Finder GPT provides recommendations for informational purposes only.
                We may earn commissions through affiliate links at no extra cost to you.
              </p>
            </div>
            
            <p className="text-sm">
              By using this service, you acknowledge that:
            </p>
            
            <ul className="text-sm space-y-2 pl-5 list-disc">
              <li>Results and recommendations are based on available information and may not be comprehensive.</li>
              <li>We are not responsible for experiences with third-party tools or services.</li>
              <li>You should conduct your own research before using any recommended tools.</li>
            </ul>
          </div>
          
          {/* Action button */}
          <div className="relative flex justify-center">
            <button
              onClick={handleAccept}
              className="group relative overflow-hidden cyber-button-secondary px-8 py-3 font-bold text-lg uppercase tracking-wider"
            >
              {/* Button glow effect */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyber-neon-pink to-cyber-neon-purple opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"></span>
              
              {/* Text with hover effect */}
              <span className="relative group-hover:text-white transition-colors duration-200">
                I AGREE
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
