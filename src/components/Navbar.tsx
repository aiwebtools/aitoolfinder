
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cyber-dark/80 backdrop-blur-lg shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a 
              href="https://chatgpt.com/g/g-8t4uyWOrI-ai-tools-expert-finder-gpt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cyber-button"
            >
              USE AI TOOLS EXPERT & FINDER GPT NOW
            </a>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-white hover:text-cyber-neon-blue transition-colors"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('disclaimer')}
              className="text-white hover:text-cyber-neon-blue transition-colors"
            >
              Disclaimer
            </button>
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-cyber-neon-blue transition-colors"
            >
              More AI Tools
            </a>
          </nav>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'translate-x-0 opacity-100' 
            : 'translate-x-full opacity-0'
        } md:hidden`}
      >
        <div className="absolute inset-0 bg-cyber-black opacity-90"></div>
        <nav className="absolute inset-0 flex flex-col items-center justify-center space-y-8 p-4">
          <a 
            href="https://chatgpt.com/g/g-8t4uyWOrI-ai-tools-expert-finder-gpt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cyber-button w-full max-w-xs text-center"
          >
            USE AI TOOLS EXPERT & FINDER GPT NOW
          </a>
          <button 
            onClick={() => scrollToSection('faq')}
            className="text-xl text-white hover:text-cyber-neon-blue transition-colors"
          >
            FAQ
          </button>
          <button 
            onClick={() => scrollToSection('disclaimer')}
            className="text-xl text-white hover:text-cyber-neon-blue transition-colors"
          >
            Disclaimer
          </button>
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xl text-white hover:text-cyber-neon-blue transition-colors"
          >
            More AI Tools
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
