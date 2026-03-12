
import React from 'react';
import { Zap } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center min-w-0">
      <div className="flex items-center group min-w-0">
        <div className="p-1.5 rounded-full bg-gradient-to-r from-cyber-neon-blue to-cyber-neon-purple flex items-center justify-center mr-2 shadow-lg transition-all duration-300 group-hover:shadow-cyan-500/50 flex-shrink-0">
          <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
        </div>
        <div className="flex flex-col items-start min-w-0">
          <a 
            href="https://chatgpt.com/g/g-8t4uyWOrI-ai-tools-expert-finder-gpt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-bold text-sm sm:text-lg text-white transition-colors hover:text-cyber-neon-blue truncate"
          >
            AI Tools Expert & Finder GPT
          </a>
          <span className="text-[10px] sm:text-xs text-gray-400">
            Presented by <a 
              href="https://aiwebtools.lovable.app/?via=aiwebtools" 
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
