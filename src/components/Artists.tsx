
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
  },
  {
    id: "5",
    name: "Emma Johnson",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    specialty: "Robotics",
    eventId: "1"
  },
  {
    id: "6",
    name: "Marco Silva",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    specialty: "Deep Learning",
    eventId: "2"
  },
  {
    id: "7",
    name: "Lisa Wang",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b494?w=200&h=200&fit=crop&crop=face",
    specialty: "NLP",
    eventId: "4"
  },
  {
    id: "8",
    name: "James Wilson",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    specialty: "AI Safety",
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
            eventCard.classList.add('ring-2', 'ring-primary');
            setTimeout(() => {
              eventCard.classList.remove('ring-2', 'ring-primary');
            }, 2000);
          }
        }, 500);
      }
    }
  };

  return (
    <div className="bg-card border-border rounded-lg p-6 relative">
      <h2 className="text-xl font-bold text-white mb-4">Featured Speakers</h2>
      <Carousel className="w-full" opts={{ align: "start", loop: true }}>
        <CarouselContent className="-ml-2 md:-ml-4">
          {artists.map((artist) => (
            <CarouselItem key={artist.id} className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 xl:basis-1/8">
              <div 
                className="text-center cursor-pointer hover:scale-105 transition-transform px-2"
                onClick={() => handleArtistClick(artist.eventId)}
              >
                <div className="w-16 h-16 mx-auto mb-2 rounded-full overflow-hidden border-2 border-primary">
                  <img 
                    src={artist.image} 
                    alt={artist.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-white text-xs">{artist.name}</h3>
                <p className="text-xs text-gray-300">{artist.specialty}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 border-primary text-primary bg-[#0a0a0a]/80 hover:bg-[#0a0a0a]" />
        <CarouselNext className="right-2 border-primary text-primary bg-[#0a0a0a]/80 hover:bg-[#0a0a0a]" />
      </Carousel>
    </div>
  );
};

export default Artists;
