
import React, { useState } from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import EventCarousel from './EventCarousel';
import EventMap from './EventMap';

const Hero = () => {
  const [showDescription, setShowDescription] = useState(false);
  
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

  const handleLearnMore = () => {
    setShowDescription(true);
  };

  return (
    <section className="relative overflow-hidden bg-[#0a0a0a]">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <div className="mb-4">
              <span className="inline-block bg-[#1a1a1a] border border-[#333] text-[#00ff88] px-4 py-2 rounded-full text-sm font-medium mb-3">
                🎵 Main Event Series
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-white">
              GenAI San Francisco
              <span className="block text-[#00ff88]">Innovation Summit</span>
            </h1>
            
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed font-light">
              Join the most exciting AI event series in San Francisco. Connect with industry leaders, 
              discover cutting-edge technologies, and shape the future of artificial intelligence.
            </p>
          </div>
          
          <EventCarousel images={heroImages} />
          
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              <div className="flex items-center space-x-2 text-gray-300 bg-[#1a1a1a] border border-[#333] px-4 py-2 rounded-full">
                <Calendar className="h-4 w-4 text-[#00ff88]" />
                <span className="text-sm">Multiple dates available</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 bg-[#1a1a1a] border border-[#333] px-4 py-2 rounded-full">
                <MapPin className="h-4 w-4 text-[#00ff88]" />
                <span className="text-sm">Various SF locations</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 bg-[#1a1a1a] border border-[#333] px-4 py-2 rounded-full">
                <Users className="h-4 w-4 text-[#00ff88]" />
                <span className="text-sm">500+ attendees expected</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleLearnMore}
                className="bg-[#1a1a1a] border border-[#333] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#2a2a2a] transition-all duration-300"
              >
                Learn More
              </button>
              <button 
                onClick={handleGetTickets}
                className="bg-[#00ff88] text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#00dd77] transition-all duration-300"
              >
                Get Tickets 🎫
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Event Description Section */}
      {showDescription && (
        <div className="bg-[#111] border-t border-[#333] py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">About GenAI San Francisco Innovation Summit</h2>
              
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-[#00ff88]">What to Expect</h3>
                  <p className="text-gray-300 leading-relaxed">
                    The GenAI San Francisco Innovation Summit is the premier destination for AI enthusiasts, developers, 
                    and industry leaders. Experience cutting-edge presentations, hands-on workshops, and networking 
                    opportunities that will shape your understanding of artificial intelligence.
                  </p>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start space-x-2">
                      <span className="text-[#00ff88] mt-1">•</span>
                      <span>Interactive AI demonstrations and live coding sessions</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-[#00ff88] mt-1">•</span>
                      <span>Keynotes from industry pioneers and thought leaders</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-[#00ff88] mt-1">•</span>
                      <span>Networking mixers with refreshments and entertainment</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-[#00ff88]">Event Highlights</h3>
                  <div className="space-y-4">
                    <div className="bg-[#1a1a1a] border border-[#333] p-4 rounded-lg">
                      <h4 className="font-semibold text-white mb-2">Tech Workshops</h4>
                      <p className="text-gray-300 text-sm">Hands-on sessions covering machine learning, neural networks, and AI ethics</p>
                    </div>
                    <div className="bg-[#1a1a1a] border border-[#333] p-4 rounded-lg">
                      <h4 className="font-semibold text-white mb-2">Startup Showcase</h4>
                      <p className="text-gray-300 text-sm">Discover innovative AI startups and their groundbreaking solutions</p>
                    </div>
                    <div className="bg-[#1a1a1a] border border-[#333] p-4 rounded-lg">
                      <h4 className="font-semibold text-white mb-2">Career Fair</h4>
                      <p className="text-gray-300 text-sm">Connect with top tech companies actively hiring AI talent</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Event Map */}
              <div className="h-96">
                <EventMap />
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#00ff88]/10 to-[#00dd77]/10 rounded-full blur-3xl opacity-30 -z-10"></div>
    </section>
  );
};

export default Hero;
