
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { events } from '../data/events';

const EventMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map with a placeholder token - user needs to add their own
    mapboxgl.accessToken = 'YOUR_MAPBOX_TOKEN_HERE';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-122.4194, 37.7749], // San Francisco coordinates
      zoom: 11,
    });

    // Add markers for each unique location
    const locations = Array.from(new Set(events.map(event => event.location)));
    
    locations.forEach((location, index) => {
      // Mock coordinates for different SF districts
      const coordinates: { [key: string]: [number, number] } = {
        'SOMA District, San Francisco': [-122.4089, 37.7749],
        'Mission Bay, San Francisco': [-122.3892, 37.7709],
        'Financial District, San Francisco': [-122.4030, 37.7946],
        'Presidio, San Francisco': [-122.4580, 37.7989],
        'South Bay, San Francisco': [-122.4194, 37.7349],
      };

      const coord = coordinates[location] || [-122.4194 + (index * 0.01), 37.7749 + (index * 0.01)];
      
      new mapboxgl.Marker()
        .setLngLat(coord)
        .setPopup(new mapboxgl.Popup().setHTML(`<h3>${location}</h3>`))
        .addTo(map.current!);
    });

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <section className="py-8 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div ref={mapContainer} className="w-full h-64" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventMap;
