
import React, { useEffect, useRef } from 'react';

const StarBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    
    // Create stars
    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.className = 'absolute bg-white rounded-full opacity-70';
      
      // Random size
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      // Random position
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      
      // Random opacity animation
      star.style.animation = `pulse-glow ${Math.random() * 3 + 2}s ease-in-out infinite`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      
      container.appendChild(star);
    }
    
    // Create shooting stars
    for (let i = 0; i < 5; i++) {
      const shootingStar = document.createElement('div');
      shootingStar.className = 'shooting-star absolute';
      
      // Random position
      shootingStar.style.left = `${Math.random() * 50}%`;
      shootingStar.style.top = `${Math.random() * 50}%`;
      
      // Random animation duration and delay
      shootingStar.style.animation = `shooting-star ${Math.random() * 10 + 5}s linear infinite`;
      shootingStar.style.animationDelay = `${Math.random() * 15}s`;
      
      container.appendChild(shootingStar);
    }
    
    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 bg-gradient-to-b from-cyber-black via-cyber-dark-blue to-cyber-black overflow-hidden"
    ></div>
  );
};

export default StarBackground;
