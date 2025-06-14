import React, { useState, useMemo } from 'react';
import { parse, isSameDay } from 'date-fns';
import Header from '../components/Header';
import Hero from '../components/Hero';
import EventCard from '../components/EventCard';
import FilterSection from '../components/FilterSection';
import EventMap from '../components/EventMap';
import Artists from '../components/Artists';
import FAQ from '../components/FAQ';
import Sponsors from '../components/Sponsors';
import HelpCenter from '../components/HelpCenter';
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
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <Hero />
      
      {/* Thin full-width filter section */}
      <section className="py-3 bg-[#0a0a0a]" id="events">
        <div className="container mx-auto px-4">
          <div className="max-w-none w-full mb-4">
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
          </div>
          
          {/* Events for selected date */}
          {selectedDate && dateMatchedEvents.length > 0 && (
            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dateMatchedEvents.map((event) => (
                  <EventCard key={event.id} {...event} isSoldOut={event.id === "3"} />
                ))}
              </div>
            </div>
          )}
          
          {/* Other events */}
          {otherEvents.length > 0 && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherEvents.map((event) => (
                  <EventCard key={event.id} {...event} isSoldOut={event.id === "3"} />
                ))}
              </div>
            </div>
          )}
          
          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-400">
                No events found matching your filters. Try adjusting your selection.
              </p>
            </div>
          )}
          
          <div className="text-center mt-8">
            <button className="bg-[#00ff88] text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#00dd77] transition-colors">
              Load More Events
            </button>
          </div>
        </div>
      </section>

      {/* Featured Speakers - Full Width */}
      <section className="py-6 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <Artists />
        </div>
      </section>
      
      <FAQ />
      
      {/* Sponsors section above Stay Updated */}
      <Sponsors />
      
      <footer className="bg-[#0a0a0a] py-8 border-t border-[#333]">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-2">
              Stay Updated
            </h3>
            <p className="text-gray-300 mb-6">
              Get notified about new events and exclusive content
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-[#333] rounded-lg bg-[#1a1a1a] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00ff88] focus:border-transparent"
              />
              <button className="bg-[#00ff88] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#00dd77] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Help Center section below Stay Updated */}
      <HelpCenter />
    </div>
  );
};

export default Index;
