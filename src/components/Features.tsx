
import React from 'react';
import { Search, Sparkles, Database, Code, ExternalLink, Zap, Award } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">How AI Tools Expert & Finder GPT Works</h2>
          <p className="text-white/80 text-lg">
            Your personal AI assistant to discover and understand the best AI tools for any project
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="glass-panel p-6 rounded-xl interactive-card">
            <div className="h-12 w-12 rounded-full bg-cyber-neon-blue/10 flex items-center justify-center mb-4 mx-auto">
              <Search className="h-6 w-6 text-cyber-neon-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Intelligent Search</h3>
            <p className="text-white/70">
              Searches the web to find the top 10 AI tools that perfectly match your specific requirements and needs.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="glass-panel p-6 rounded-xl interactive-card">
            <div className="h-12 w-12 rounded-full bg-cyber-neon-purple/10 flex items-center justify-center mb-4 mx-auto">
              <Sparkles className="h-6 w-6 text-cyber-neon-purple" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Expert Recommendations</h3>
            <p className="text-white/70">
              Provides detailed breakdowns of each tool's strengths, limitations, and best use cases to help you choose.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="glass-panel p-6 rounded-xl interactive-card">
            <div className="h-12 w-12 rounded-full bg-cyber-neon-pink/10 flex items-center justify-center mb-4 mx-auto">
              <Database className="h-6 w-6 text-cyber-neon-pink" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Vast Tool Database</h3>
            <p className="text-white/70">
              Access to a curated database of over 900+ AI tools with detailed descriptions and direct links.
            </p>
          </div>
          
          {/* Feature 4 */}
          <div className="glass-panel p-6 rounded-xl interactive-card">
            <div className="h-12 w-12 rounded-full bg-cyber-neon-blue/10 flex items-center justify-center mb-4 mx-auto">
              <Code className="h-6 w-6 text-cyber-neon-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Implementation Guidance</h3>
            <p className="text-white/70">
              Get step-by-step guides on how to implement and use the AI tools effectively for your specific project.
            </p>
          </div>
          
          {/* Feature 5 */}
          <div className="glass-panel p-6 rounded-xl interactive-card">
            <div className="h-12 w-12 rounded-full bg-cyber-neon-purple/10 flex items-center justify-center mb-4 mx-auto">
              <ExternalLink className="h-6 w-6 text-cyber-neon-purple" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Direct Access</h3>
            <p className="text-white/70">
              Every tool recommendation includes complete, unaltered affiliate URL links to each tool's website.
            </p>
          </div>
          
          {/* Feature 6 */}
          <div className="glass-panel p-6 rounded-xl interactive-card">
            <div className="h-12 w-12 rounded-full bg-cyber-neon-pink/10 flex items-center justify-center mb-4 mx-auto">
              <Zap className="h-6 w-6 text-cyber-neon-pink" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Personalized Assistance</h3>
            <p className="text-white/70">
              Interactive conversation to understand your needs and provide tailored AI tool suggestions.
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a
            href="https://chatgpt.com/g/g-8t4uyWOrI-ai-tools-expert-finder-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-button inline-flex items-center gap-2"
          >
            <span>START FINDING YOUR PERFECT AI TOOLS</span>
            <Award className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
