import React, { useState, useMemo } from 'react';
import { parse, isSameDay } from 'date-fns';
import Header from '../components/Header';
import Hero from '../components/Hero';
import EventCard from '../components/EventCard';
import FilterSection from '../components/FilterSection';
import { events } from '../data/events';

const Index = () => {
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  // Extract unique locations and categories
  const locations = useMemo(() => {
    return Array.from(new Set(events.map(event => event.location)));
  }, []);

  const categories = useMemo(() => {
    return Array.from(new Set(events.map(event => event.category)));
  }, []);

  // Filter events based on selected filters
  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      const locationMatch = selectedLocation === 'all' || event.location === selectedLocation;
      const categoryMatch = selectedCategory === 'all' || event.category === selectedCategory;
      
      let dateMatch = true;
      if (selectedDate) {
        try {
          const eventDate = parse(event.date, 'MMMM d, yyyy', new Date());
          dateMatch = isSameDay(eventDate, selectedDate);
        } catch (error) {
          dateMatch = false;
        }
      }
      
      return locationMatch && categoryMatch && dateMatch;
    });
  }, [selectedLocation, selectedCategory, selectedDate]);

  // Separate events into date-matched and others when date is selected
  const { dateMatchedEvents, otherEvents } = useMemo(() => {
    if (!selectedDate) {
      return { dateMatchedEvents: [], otherEvents: filteredEvents };
    }
    
    const dateMatched = [];
    const others = [];
    
    for (const event of events) {
      try {
        const eventDate = parse(event.date, 'MMMM d, yyyy', new Date());
        const locationMatch = selectedLocation === 'all' || event.location === selectedLocation;
        const categoryMatch = selectedCategory === 'all' || event.category === selectedCategory;
        
        if (isSameDay(eventDate, selectedDate) && locationMatch && categoryMatch) {
          dateMatched.push(event);
        } else if (locationMatch && categoryMatch) {
          others.push(event);
        }
      } catch (error) {
        if (selectedLocation === 'all' || event.location === selectedLocation) {
          if (selectedCategory === 'all' || event.category === selectedCategory) {
            others.push(event);
          }
        }
      }
    }
    
    return { dateMatchedEvents: dateMatched, otherEvents: others };
  }, [selectedLocation, selectedCategory, selectedDate]);

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
          
          <FilterSection
            locations={locations}
            categories={categories}
            selectedLocation={selectedLocation}
            selectedCategory={selectedCategory}
            selectedDate={selectedDate}
            onLocationChange={setSelectedLocation}
            onCategoryChange={setSelectedCategory}
            onDateChange={setSelectedDate}
          />
          
          {/* Events for selected date */}
          {selectedDate && dateMatchedEvents.length > 0 && (
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Events on {selectedDate.toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {dateMatchedEvents.map((event) => (
                  <EventCard key={event.id} {...event} />
                ))}
              </div>
            </div>
          )}
          
          {/* Other events */}
          {otherEvents.length > 0 && (
            <div>
              {selectedDate && dateMatchedEvents.length > 0 && (
                <h3 className="text-2xl font-bold text-foreground mb-6">Other Events</h3>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherEvents.map((event) => (
                  <EventCard key={event.id} {...event} />
                ))}
              </div>
            </div>
          )}
          
          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">
                No events found matching your filters. Try adjusting your selection.
              </p>
            </div>
          )}
          
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
