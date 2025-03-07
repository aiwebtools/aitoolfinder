
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import StarBackground from "../components/StarBackground";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cyber-dark relative">
      <StarBackground />
      
      <div className="container mx-auto px-4 max-w-md text-center z-10 glass-panel p-10 rounded-xl">
        <h1 className="text-6xl font-bold mb-6 cyber-gradient-text">404</h1>
        
        <p className="text-xl text-white mb-6">
          Oops! The AI tool you're looking for doesn't exist in this dimension.
        </p>
        
        <div className="space-y-4">
          <Link to="/" className="cyber-button w-full flex items-center justify-center gap-2">
            <Home className="h-5 w-5" />
            <span>Return to Home</span>
          </Link>
          
          <a
            href="https://www.aiwebtools.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-button-outline w-full flex items-center justify-center gap-2"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Explore AI Web Tools</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
