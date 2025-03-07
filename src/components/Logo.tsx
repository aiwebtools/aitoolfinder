
import React from 'react';
import { Zap } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="flex items-center group">
        <div className="p-1.5 rounded-full bg-gradient-to-r from-cyber-neon-blue to-cyber-neon-purple flex items-center justify-center mr-2 shadow-lg transition-all duration-300 group-hover:shadow-cyan-500/50">
          <Zap className="h-5 w-5 text-white" />
        </div>
        <div className="flex flex-col items-start">
          <a 
            href="https://chatgpt.com/g/g-8t4uyWOrI-ai-tools-expert-finder-gpt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-bold text-lg text-white transition-colors hover:text-cyber-neon-blue"
          >
            AI Tools Expert & Finder GPT
          </a>
          <span className="text-xs text-gray-400">
            Presented by <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyber-neon-blue hover:text-cyber-neon-purple transition-colors">
              AiWebTools.Ai
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
