
import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import EventCarousel from './EventCarousel';

const Hero = () => {
  const heroImages = [
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1200&h=600&fit=crop"
  ];

  const handleGetTickets = () => {
    const eventsSection = document.getElementById('events');
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="mb-6">
              <span className="inline-block glass-effect text-primary px-4 py-2 rounded-full text-sm font-medium mb-4 font-grotesk">
                🎵 Main Event Series
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-grotesk font-bold mb-6 leading-tight">
              GenAI San Francisco
              <span className="block gradient-text">Innovation Summit</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed font-light">
              Join the most exciting AI event series in San Francisco. Connect with industry leaders, 
              discover cutting-edge technologies, and shape the future of artificial intelligence.
            </p>
          </div>
          
          <EventCarousel images={heroImages} />
          
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <div className="flex items-center space-x-2 text-muted-foreground glass-effect px-4 py-2 rounded-full">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="text-sm">Multiple dates available</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground glass-effect px-4 py-2 rounded-full">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">Various SF locations</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground glass-effect px-4 py-2 rounded-full">
                <Users className="h-4 w-4 text-primary" />
                <span className="text-sm">500+ attendees expected</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-4 rounded-2xl text-lg font-grotesk font-semibold hover:scale-105 transition-all duration-300 neon-glow">
                View All Events
              </button>
              <button className="glass-effect text-foreground px-8 py-4 rounded-2xl text-lg font-grotesk font-semibold hover:bg-muted/20 transition-all duration-300">
                Learn More
              </button>
              <button 
                onClick={handleGetTickets}
                className="bg-gradient-to-r from-secondary to-primary text-primary-foreground px-8 py-4 rounded-2xl text-lg font-grotesk font-semibold hover:scale-105 transition-all duration-300 animate-pulse-neon"
              >
                Get Tickets 🎫
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-30 -z-10"></div>
    </section>
  );
};

export default Hero;
