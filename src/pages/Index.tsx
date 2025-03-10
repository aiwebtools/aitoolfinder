
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
    <div className="min-h-screen bg-cyber-dark text-white overflow-x-hidden">
      <DisclaimerPopup />
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <FAQ />
      <Legal />
      <Footer />
    </div>
  );
};

export default Index;
