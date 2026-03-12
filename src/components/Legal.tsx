
import React from 'react';
import { AlertTriangle, Shield } from 'lucide-react';

const Legal = () => {
  return (
    <section id="disclaimer" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-cyber-neon-blue/10 mb-4">
              <Shield className="h-8 w-8 text-cyber-neon-blue" />
            </div>
            <h2 className="section-title">Legal Information</h2>
          </div>
          
          <div className="glass-panel p-8 rounded-xl">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2 text-cyber-neon-pink" />
                Disclaimer
              </h3>
              
              <div className="text-white/70 space-y-4">
                <p>
                  AI Tools Expert & Finder GPT is designed to provide information about AI tools and services. The recommendations and information provided by this AI are for general informational purposes only and should not be construed as professional advice.
                </p>
                
                <p>
                  AI Web Tools LLC ("the Company") makes no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information provided by AI Tools Expert & Finder GPT.
                </p>
                
                <p>
                  Links to third-party websites and tools are provided as a convenience and may include affiliate links from which the Company may receive compensation. The inclusion of any link does not imply endorsement by the Company of the site or any association with its operators.
                </p>
                
                <p>
                  Users should conduct their own research and due diligence before using any AI tools or services recommended by AI Tools Expert & Finder GPT. The Company is not responsible for any loss, injury, claim, liability, or damage related to your use of any tools or services mentioned or linked to by this AI.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Affiliate Disclosure</h3>
              
              <div className="text-white/70 space-y-4">
                <p>
                  AI Tools Expert & Finder GPT may provide links to various AI tools and services that include affiliate tracking. As an affiliate, AI Web Tools LLC may earn commissions from qualifying purchases or sign-ups made through these links at no additional cost to you.
                </p>
                
                <p>
                  We want to emphasize that our recommendations are based on the perceived value and appropriateness of the tools for your needs, not on the commissions we may receive. We maintain editorial integrity and provide unbiased information to the best of our ability.
                </p>
                
                <p>
                  By using AI Tools Expert & Finder GPT and clicking on affiliate links provided, you acknowledge and accept that the Company may receive compensation for your use of those links.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-white/60 text-sm">
              By using AI Tools Expert & Finder GPT, you acknowledge that you have read and understand this disclaimer.
            </p>
            <div className="mt-6 space-x-4">
              <a
                href="https://openai.com/policies/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyber-neon-blue hover:text-cyber-neon-purple transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <span className="text-white/30">|</span>
              <a
                href="https://aiwebtools.lovable.app/terms-of-services"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyber-neon-blue hover:text-cyber-neon-purple transition-colors text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legal;
