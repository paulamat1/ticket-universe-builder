
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import EventCard from '../components/EventCard';
import { events } from '../data/events';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      <section className="py-16 bg-background" id="events">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our diverse lineup of AI-focused events. Each session is designed 
              to provide unique insights and networking opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg text-lg font-semibold hover:bg-secondary/80 transition-colors">
              Load More Events
            </button>
          </div>
        </div>
      </section>
      
      <footer className="bg-muted py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Stay Updated
            </h3>
            <p className="text-muted-foreground mb-6">
              Get notified about new events and exclusive content
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
