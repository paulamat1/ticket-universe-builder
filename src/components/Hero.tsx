
import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
              Main Event Series
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            GenAI San Francisco
            <span className="block text-primary">Innovation Summit</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Join the most exciting AI event series in San Francisco. Connect with industry leaders, 
            discover cutting-edge technologies, and shape the future of artificial intelligence.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Calendar className="h-5 w-5" />
              <span>Multiple dates available</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>Various SF locations</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Users className="h-5 w-5" />
              <span>500+ attendees expected</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105">
              View All Events
            </button>
            <button className="border border-border text-foreground px-8 py-3 rounded-lg text-lg font-semibold hover:bg-muted transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl opacity-30 -z-10"></div>
    </section>
  );
};

export default Hero;
