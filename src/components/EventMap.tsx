
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
      style: 'mapbox://styles/mapbox/light-v11',
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
      
      new mapboxgl.Marker({ color: '#e49755' })
        .setLngLat(coord)
        .setPopup(new mapboxgl.Popup().setHTML(`<h3>${location}</h3>`))
        .addTo(map.current!);
    });

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="bg-[#f5f4f2] border border-gray-300 rounded-lg overflow-hidden h-48">
      <div className="p-4">
        <h2 className="text-xl font-bold text-[#3b3d4a] mb-2">Event Locations</h2>
      </div>
      <div ref={mapContainer} className="w-full h-32" />
    </div>
  );
};

export default EventMap;
