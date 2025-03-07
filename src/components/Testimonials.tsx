
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "AI Tools Expert helped me find the perfect AI copywriting and image generation tools for our campaign. Saved me weeks of research and thousands in budget!",
      stars: 5
    },
    {
      name: "Michael Chen",
      role: "Software Developer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "I was looking for AI coding assistants and this GPT immediately gave me 10 perfect options with detailed comparisons. The direct links made it super easy to sign up and try them.",
      stars: 5
    },
    {
      name: "Elena Rodriguez",
      role: "Content Creator",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "As someone who creates daily content, finding AI tools that boost productivity was game-changing. This GPT recommended tools I never knew existed but now can't live without!",
      stars: 5
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">What People Are Saying</h2>
          <p className="text-white/80 text-lg">
            Discover how AI Tools Expert & Finder GPT is helping professionals find their perfect AI tools
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glass-panel p-6 rounded-xl relative interactive-card overflow-hidden"
            >
              <div className="absolute top-0 right-0 translate-x-4 -translate-y-4 text-cyber-neon-purple opacity-20">
                <Quote className="w-20 h-20" />
              </div>
              
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-cyber-neon-blue"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-white font-medium">{testimonial.name}</h4>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="text-white/80 mb-4 relative z-10">"{testimonial.text}"</p>
              
              <div className="flex">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
