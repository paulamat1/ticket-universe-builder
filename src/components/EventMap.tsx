
import React from 'react';
import { MapPin } from 'lucide-react';
import { events } from '../data/events';

interface EventLocation {
  location: string;
  events: Array<{ id: string; title: string; date: string; }>;
}

const EventMap = () => {
  // Group events by location
  const locationGroups = events.reduce((acc, event) => {
    const existing = acc.find(group => group.location === event.location);
    if (existing) {
      existing.events.push({ id: event.id, title: event.title, date: event.date });
    } else {
      acc.push({
        location: event.location,
        events: [{ id: event.id, title: event.title, date: event.date }]
      });
    }
    return acc;
  }, [] as EventLocation[]);

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Event Locations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our events are hosted across multiple venues throughout San Francisco
          </p>
        </div>
        
        {/* Simplified map representation */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-8 min-h-[400px]">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23cbd5e1" fill-opacity="0.1"%3E%3Cpath d="M20 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">San Francisco</h3>
                  <p className="text-muted-foreground">Event Locations Map</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {locationGroups.map((locationGroup, index) => (
                    <div key={locationGroup.location} className="bg-background border border-border rounded-lg p-4 shadow-sm">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                            <MapPin className="h-4 w-4 text-primary-foreground" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-foreground mb-1">
                            {locationGroup.location}
                          </h4>
                          <div className="space-y-1">
                            {locationGroup.events.map((event) => (
                              <div key={event.id} className="text-xs text-muted-foreground">
                                {event.title} - {event.date}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventMap;
