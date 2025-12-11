
import React from 'react';
import { Phone, Mail, ExternalLink } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer 
      className="bg-cyber-black py-12"
      itemScope 
      itemType="https://schema.org/WPFooter"
      role="contentinfo"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4" itemScope itemType="https://schema.org/Organization">
            <Logo />
            <p className="text-gray-400 text-sm mt-4" itemProp="description">
              AI Tools Expert & Finder GPT helps you find the best free AI tools for any project. Discover 900+ AI tools including AI writing tools, AI image generators, AI video tools, AI coding assistants, and AI marketing tools.
            </p>
            <meta itemProp="name" content="AI WEB TOOLS LLC" />
            <meta itemProp="url" content="https://aiwebtools.ai" />
          </div>
          
          {/* Quick Links Column */}
          <nav aria-label="Quick links to AI tools">
            <h3 className="text-white font-semibold mb-4 text-left">Best Free AI Tools</h3>
            <ul className="space-y-3 text-left">
              <li>
                <a 
                  href="https://chatgpt.com/g/g-8t4uyWOrI-ai-tools-expert-finder-gpt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyber-neon-blue transition-colors flex items-center gap-2"
                  title="Use AI Tools Expert & Finder GPT - Find Best Free AI Tools"
                >
                  <ExternalLink className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                  <span>AI Tools Expert & Finder GPT</span>
                </a>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('faq')}
                  className="text-gray-400 hover:text-cyber-neon-blue transition-colors w-full text-left"
                  title="Frequently Asked Questions about AI Tools"
                >
                  AI Tools FAQ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('disclaimer')}
                  className="text-gray-400 hover:text-cyber-neon-blue transition-colors w-full text-left"
                  title="Disclaimer for AI Tools Directory"
                >
                  Disclaimer
                </button>
              </li>
              <li>
                <a 
                  href="https://www.aiwebtools.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyber-neon-blue transition-colors"
                  title="Explore More Free AI Tools at AIWebTools.AI"
                >
                  More Free AI Tools
                </a>
              </li>
            </ul>
          </nav>
          
          {/* Legal Column */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-left">Legal</h3>
            <ul className="space-y-3 text-left">
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyber-neon-blue transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.ai/terms-of-services" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyber-neon-blue transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-left">Contact</h3>
            <ul className="space-y-3 text-left">
              <li>
                <a 
                  href="tel:+14758008096" 
                  className="text-gray-400 hover:text-cyber-neon-blue transition-colors flex items-center gap-2"
                >
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>(475) 800-8096</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Contact@ai-webtools.com" 
                  className="text-gray-400 hover:text-cyber-neon-blue transition-colors flex items-center gap-2"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span>Contact@ai-webtools.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Copyright */}
            <div className="text-gray-500 text-sm">
              <a 
                href="https://www.aiwebtools.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-cyber-neon-blue transition-colors"
              >
                © 2025 AI WEB TOOLS LLC. All rights reserved.
              </a>
            </div>
            
            {/* More AI Tools Button */}
            <div className="mt-4 md:mt-0">
              <a 
                href="https://www.aiwebtools.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-1.5 rounded-full bg-gradient-to-r from-cyber-neon-blue to-cyber-neon-purple text-white text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
              >
                More AI Tools
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
