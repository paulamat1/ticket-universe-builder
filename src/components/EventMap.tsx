
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { events } from '../data/events';

const EventMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = 'YOUR_MAPBOX_TOKEN_HERE';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [-122.4194, 37.7749],
      zoom: 11,
    });

    const locations = Array.from(new Set(events.map(event => event.location)));
    
    locations.forEach((location, index) => {
      const coordinates: { [key: string]: [number, number] } = {
        'SOMA District, San Francisco': [-122.4089, 37.7749],
        'Mission Bay, San Francisco': [-122.3892, 37.7709],
        'Financial District, San Francisco': [-122.4030, 37.7946],
        'Presidio, San Francisco': [-122.4580, 37.7989],
        'South Bay, San Francisco': [-122.4194, 37.7349],
      };

      const coord = coordinates[location] || [-122.4194 + (index * 0.01), 37.7749 + (index * 0.01)];
      
      new mapboxgl.Marker({ color: '#00ff88' })
        .setLngLat(coord)
        .setPopup(new mapboxgl.Popup().setHTML(`<h3 style="color: white; background: #1a1a1a; padding: 8px; border-radius: 4px; margin: 0;">${location}</h3>`))
        .addTo(map.current!);
    });

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="bg-[#111] border border-[#333] rounded-lg overflow-hidden h-full flex flex-col">
      <div className="p-6 pb-4">
        <h2 className="text-lg font-semibold text-white">Event Locations</h2>
      </div>
      <div ref={mapContainer} className="flex-1 min-h-[200px]" />
    </div>
  );
};

export default EventMap;
