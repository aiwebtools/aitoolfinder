
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

  // Add effect to prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cyber-dark/80 backdrop-blur-lg shadow-lg py-2' : 'bg-transparent py-4'
      }`}
      role="banner"
      itemScope
      itemType="https://schema.org/WPHeader"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Logo />
          
          {/* Desktop Navigation */}
          <nav 
            className="hidden md:flex items-center space-x-6"
            aria-label="Main navigation for AI Tools Expert"
            role="navigation"
          >
            <a 
              href="https://chatgpt.com/g/g-8t4uyWOrI-ai-tools-expert-finder-gpt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cyber-button"
              title="Use AI Tools Expert & Finder GPT - Find Best Free AI Tools 2025"
            >
              USE AI TOOLS EXPERT & FINDER GPT NOW
            </a>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-white hover:text-cyber-neon-blue transition-colors"
              title="Frequently Asked Questions about AI Tools"
            >
              AI Tools FAQ
            </button>
            <button 
              onClick={() => scrollToSection('disclaimer')}
              className="text-white hover:text-cyber-neon-blue transition-colors"
              title="Disclaimer for AI Tools Directory"
            >
              Disclaimer
            </button>
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-cyber-neon-blue transition-colors"
              title="Explore More Free AI Tools at AIWebTools.AI"
            >
              More Free AI Tools
            </a>
          </nav>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close AI tools menu" : "Open AI tools menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu - Fixed positioning with better background and padding */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-cyber-black/95 backdrop-blur-md overflow-y-auto">
          <div className="container mx-auto px-4 pt-20 pb-8">
            {/* Close button at the top right */}
            <button
              className="absolute top-4 right-4 text-white p-2"
              onClick={closeMobileMenu}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
            
            <nav className="flex flex-col items-center space-y-6">
              <a 
                href="https://chatgpt.com/g/g-8t4uyWOrI-ai-tools-expert-finder-gpt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cyber-button w-full max-w-xs text-center"
                onClick={closeMobileMenu}
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
                onClick={closeMobileMenu}
              >
                More AI Tools
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
