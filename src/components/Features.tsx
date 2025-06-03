
import React from 'react';
import { Search, Sparkles, Database, Code, ExternalLink, Zap, Award } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <header className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">How AI Tools Expert & Finder GPT Works - Your AI Tools Directory</h2>
          <p className="text-white/80 text-lg">
            Discover the best free AI tools with our expert AI assistant - the ultimate AI web tools finder for professionals
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <article className="glass-panel p-6 rounded-xl interactive-card">
            <div className="h-12 w-12 rounded-full bg-cyber-neon-blue/10 flex items-center justify-center mb-4 mx-auto">
              <Search className="h-6 w-6 text-cyber-neon-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Intelligent AI Tools Search</h3>
            <p className="text-white/70">
              Advanced AI-powered search to find the top 10 free AI tools that perfectly match your specific project requirements and business needs.
            </p>
          </article>
          
          {/* Feature 2 */}
          <article className="glass-panel p-6 rounded-xl interactive-card">
            <div className="h-12 w-12 rounded-full bg-cyber-neon-purple/10 flex items-center justify-center mb-4 mx-auto">
              <Sparkles className="h-6 w-6 text-cyber-neon-purple" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Expert AI Tools Recommendations</h3>
            <p className="text-white/70">
              Get detailed AI tools analysis with strengths, limitations, and best use cases to help you choose the perfect AI software for your project.
            </p>
          </article>
          
          {/* Feature 3 */}
          <article className="glass-panel p-6 rounded-xl interactive-card">
            <div className="h-12 w-12 rounded-full bg-cyber-neon-pink/10 flex items-center justify-center mb-4 mx-auto">
              <Database className="h-6 w-6 text-cyber-neon-pink" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Comprehensive AI Tools Database</h3>
            <p className="text-white/70">
              Access to a curated database of 900+ free AI tools and AI web tools with detailed descriptions, reviews, and direct download links.
            </p>
          </article>
          
          {/* Feature 4 */}
          <article className="glass-panel p-6 rounded-xl interactive-card">
            <div className="h-12 w-12 rounded-full bg-cyber-neon-blue/10 flex items-center justify-center mb-4 mx-auto">
              <Code className="h-6 w-6 text-cyber-neon-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">AI Tools Implementation Guide</h3>
            <p className="text-white/70">
              Step-by-step tutorials and implementation guides for using AI tools effectively in your projects, from setup to advanced features.
            </p>
          </article>
          
          {/* Feature 5 */}
          <article className="glass-panel p-6 rounded-xl interactive-card">
            <div className="h-12 w-12 rounded-full bg-cyber-neon-purple/10 flex items-center justify-center mb-4 mx-auto">
              <ExternalLink className="h-6 w-6 text-cyber-neon-purple" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Direct AI Tools Access</h3>
            <p className="text-white/70">
              Every AI tool recommendation includes verified links to official websites, ensuring you access the best AI tools safely and securely.
            </p>
          </article>
          
          {/* Feature 6 */}
          <article className="glass-panel p-6 rounded-xl interactive-card">
            <div className="h-12 w-12 rounded-full bg-cyber-neon-pink/10 flex items-center justify-center mb-4 mx-auto">
              <Zap className="h-6 w-6 text-cyber-neon-pink" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Personalized AI Tools Assistant</h3>
            <p className="text-white/70">
              Interactive AI conversation to understand your specific needs and provide tailored free AI tools suggestions for maximum productivity.
            </p>
          </article>
        </div>
        
        <div className="mt-16 text-center">
          <a
            href="https://chatgpt.com/g/g-8t4uyWOrI-ai-tools-expert-finder-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-button inline-flex items-center gap-2"
            aria-label="Start finding your perfect AI tools with AI Tools Expert & Finder GPT"
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
