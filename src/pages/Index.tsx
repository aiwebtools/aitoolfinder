
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Legal from '../components/Legal';
import Footer from '../components/Footer';
import DisclaimerPopup from '../components/DisclaimerPopup';

const Index = () => {
  // Add scroll reveal animations
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    document.querySelectorAll('section > div').forEach(section => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main 
      className="min-h-screen bg-cyber-dark text-white overflow-x-hidden"
      itemScope 
      itemType="https://schema.org/WebPage"
    >
      <meta itemProp="name" content="AI Tools Expert & Finder GPT - Best Free AI Tools 2025" />
      <meta itemProp="description" content="Find the best free AI tools for any project. Discover 900+ AI tools including AI writing tools, AI image generators, AI video tools, AI coding assistants, and more." />
      <meta itemProp="url" content="https://aiwebtools.ai" />
      <DisclaimerPopup />
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <FAQ />
      <Legal />
      <Footer />
    </main>
  );
};

export default Index;
