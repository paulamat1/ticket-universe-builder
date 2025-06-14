
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Artist {
  id: string;
  name: string;
  image: string;
  specialty: string;
  eventId?: string;
}

const artists: Artist[] = [
  {
    id: "1",
    name: "Dr. Sarah Chen",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=200&h=200&fit=crop&crop=face",
    specialty: "Machine Learning",
    eventId: "1"
  },
  {
    id: "2", 
    name: "Alex Rodriguez",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=200&h=200&fit=crop&crop=face",
    specialty: "Neural Networks",
    eventId: "2"
  },
  {
    id: "3",
    name: "Maya Patel",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=200&h=200&fit=crop&crop=face", 
    specialty: "Computer Vision",
    eventId: "4"
  },
  {
    id: "4",
    name: "David Kim",
    image: "https://images.unsplash.com/photo-1501286353178-1ec881214838?w=200&h=200&fit=crop&crop=face",
    specialty: "AI Ethics",
    eventId: "3"
  }
];

const Artists = () => {
  const handleArtistClick = (eventId?: string) => {
    if (eventId) {
      const eventsSection = document.getElementById('events');
      if (eventsSection) {
        eventsSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          const eventCard = document.querySelector(`[data-event-id="${eventId}"]`);
          if (eventCard) {
            eventCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            eventCard.classList.add('ring-2', 'ring-[#e49755]');
            setTimeout(() => {
              eventCard.classList.remove('ring-2', 'ring-[#e49755]');
            }, 2000);
          }
        }, 500);
      }
    }
  };

  return (
    <div className="bg-[#f5f4f2] border border-gray-300 rounded-lg p-6 h-48">
      <h2 className="text-xl font-bold text-[#3b3d4a] mb-4">Featured Speakers</h2>
      <Carousel className="w-full">
        <CarouselContent>
          {artists.map((artist) => (
            <CarouselItem key={artist.id} className="basis-1/2">
              <div 
                className="text-center cursor-pointer hover:scale-105 transition-transform"
                onClick={() => handleArtistClick(artist.eventId)}
              >
                <div className="w-16 h-16 mx-auto mb-2 rounded-full overflow-hidden border-2 border-[#e49755]">
                  <img 
                    src={artist.image} 
                    alt={artist.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-[#3b3d4a] text-xs">{artist.name}</h3>
                <p className="text-xs text-gray-600">{artist.specialty}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="border-[#e49755] text-[#e49755]" />
        <CarouselNext className="border-[#e49755] text-[#e49755]" />
      </Carousel>
    </div>
  );
};

export default Artists;
