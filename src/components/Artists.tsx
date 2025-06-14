
import React from 'react';

interface Artist {
  id: string;
  name: string;
  image: string;
  specialty: string;
}

const artists: Artist[] = [
  {
    id: "1",
    name: "Dr. Sarah Chen",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=200&h=200&fit=crop&crop=face",
    specialty: "Machine Learning"
  },
  {
    id: "2", 
    name: "Alex Rodriguez",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=200&h=200&fit=crop&crop=face",
    specialty: "Neural Networks"
  },
  {
    id: "3",
    name: "Maya Patel",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=200&h=200&fit=crop&crop=face", 
    specialty: "Computer Vision"
  },
  {
    id: "4",
    name: "David Kim",
    image: "https://images.unsplash.com/photo-1501286353178-1ec881214838?w=200&h=200&fit=crop&crop=face",
    specialty: "AI Ethics"
  }
];

const Artists = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Featured Speakers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {artists.map((artist) => (
              <div key={artist.id} className="text-center">
                <div className="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-2 border-primary/20">
                  <img 
                    src={artist.image} 
                    alt={artist.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-foreground text-sm">{artist.name}</h3>
                <p className="text-xs text-muted-foreground">{artist.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Artists;
