
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is AI Tools Expert & Finder GPT?",
      answer: "AI Tools Expert & Finder GPT is a specialized AI assistant that helps you discover, understand, and implement the best AI tools for your specific needs. It searches the web and a comprehensive database to recommend the top 10 AI tools for any task, providing detailed information and direct links to each tool."
    },
    {
      question: "How does it find the best AI tools for my needs?",
      answer: "The system first analyzes your specific requirements, then searches the web for current recommendations. It also scans a proprietary database of over 900+ AI tools to find the best matches based on your skill level, budget, and the specific purpose you need the tools for. Each recommendation comes with a detailed explanation of the tool's strengths and use cases."
    },
    {
      question: "Are the links to AI tools affiliate links?",
      answer: "Yes, some of the links provided may be affiliate links, which means AI Web Tools LLC may receive a commission if you purchase through these links. However, this does not affect our recommendations - we only suggest tools that genuinely meet your needs. All affiliate identifiers in the URLs are preserved for transparency."
    },
    {
      question: "Can it help with implementing the AI tools it recommends?",
      answer: "Absolutely! AI Tools Expert & Finder GPT can provide step-by-step guides on how to implement and use any of the AI tools it recommends. Just ask for specific guidance on any tool, and it will provide detailed instructions tailored to your project."
    },
    {
      question: "How current are the AI tool recommendations?",
      answer: "The system combines web searches for the latest information with our curated database. This approach ensures you get recommendations for the most current tools available, including new releases and updates to existing tools."
    },
    {
      question: "Can I get recommendations for specific industries or use cases?",
      answer: "Yes! AI Tools Expert & Finder GPT can provide specialized recommendations for any industry or use case. Whether you're in marketing, software development, content creation, education, or any other field, it will find AI tools specifically designed for your particular needs."
    },
  ];

  return (
    <section id="faq" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="text-white/80 text-lg">
            Everything you need to know about AI Tools Expert & Finder GPT
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="mb-4 glass-panel overflow-hidden rounded-xl"
            >
              <button
                className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-white font-medium">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-cyber-neon-blue" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-cyber-neon-blue" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-4 pt-0 text-white/70">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-white/60 mb-4">
            Don't see your question here? Try asking AI Tools Expert & Finder GPT directly
          </p>
          <a
            href="https://chatgpt.com/g/g-8t4uyWOrI-ai-tools-expert-finder-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-button-outline"
          >
            ASK YOUR QUESTION
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
