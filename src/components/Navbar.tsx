
import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const scrollToSection = useCallback((id: string) => {
    setIsMobileMenuOpen(false);
    // Small delay to allow menu close animation before scrolling
    requestAnimationFrame(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cyber-dark/80 backdrop-blur-lg shadow-lg py-2' : 'bg-transparent py-3 sm:py-4'
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
            className="hidden lg:flex items-center space-x-4 xl:space-x-6"
            aria-label="Main navigation for AI Tools Expert"
            role="navigation"
          >
            <a 
              href="https://chatgpt.com/g/g-8t4uyWOrI-ai-tools-expert-finder-gpt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cyber-button text-sm xl:text-base whitespace-nowrap"
              title="Use AI Tools Expert & Finder GPT - Find Best Free AI Tools 2025"
            >
              USE AI TOOLS EXPERT & FINDER GPT NOW
            </a>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-white hover:text-cyber-neon-blue transition-colors whitespace-nowrap"
              title="Frequently Asked Questions about AI Tools"
            >
              AI Tools FAQ
            </button>
            <button 
              onClick={() => scrollToSection('disclaimer')}
              className="text-white hover:text-cyber-neon-blue transition-colors whitespace-nowrap"
              title="Disclaimer for AI Tools Directory"
            >
              Disclaimer
            </button>
            <a 
              href="https://aiwebtools.lovable.app/?via=aiwebtools" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-cyber-neon-blue transition-colors whitespace-nowrap"
              title="Explore More Free AI Tools at AIWebTools.AI"
            >
              More Free AI Tools
            </a>
          </nav>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white p-2 -mr-2 touch-manipulation"
            onClick={toggleMobileMenu}
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
      
      {/* Mobile Menu - Full screen overlay */}
      <div 
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-cyber-black/95 backdrop-blur-md"
          onClick={closeMobileMenu}
        />
        
        {/* Menu Content */}
        <div className={`relative h-full flex flex-col items-center justify-center px-6 transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-4'
        }`}>
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white p-3 touch-manipulation"
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            <X className="h-7 w-7" />
          </button>
          
          <nav className="flex flex-col items-center space-y-8 w-full max-w-sm">
            <a 
              href="https://chatgpt.com/g/g-8t4uyWOrI-ai-tools-expert-finder-gpt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cyber-button w-full text-center text-base py-4 touch-manipulation"
              onClick={closeMobileMenu}
            >
              USE AI TOOLS EXPERT & FINDER GPT NOW
            </a>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-xl text-white hover:text-cyber-neon-blue transition-colors py-2 touch-manipulation"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('disclaimer')}
              className="text-xl text-white hover:text-cyber-neon-blue transition-colors py-2 touch-manipulation"
            >
              Disclaimer
            </button>
            <a 
              href="https://aiwebtools.lovable.app/?via=aiwebtools" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xl text-white hover:text-cyber-neon-blue transition-colors py-2 touch-manipulation"
              onClick={closeMobileMenu}
            >
              More AI Tools
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
