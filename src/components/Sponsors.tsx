
import React from 'react';

const Sponsors = () => {
  const sponsors = [
    { id: 1, name: "TechCorp", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop" },
    { id: 2, name: "AI Innovations", logo: "https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?w=120&h=60&fit=crop" },
    { id: 3, name: "FutureTech", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop" },
    { id: 4, name: "DataFlow", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop" },
  ];

  const mediaPartners = [
    { id: 1, name: "Tech Media", logo: "https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?w=120&h=60&fit=crop" },
    { id: 2, name: "AI Weekly", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop" },
    { id: 3, name: "Innovation News", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop" },
    { id: 4, name: "Future Press", logo: "https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?w=120&h=60&fit=crop" },
  ];

  return (
    <section className="py-8 bg-gradient-to-br from-[#1a1c2e]/90 via-[#2a2d42]/90 to-[#1a1c2e]/90">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Sponsors */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-white mb-4">Our Sponsors</h3>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {sponsors.map((sponsor) => (
                <div key={sponsor.id} className="bg-white/10 rounded-lg p-3 hover:bg-white/20 transition-colors">
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name}
                    className="h-8 w-20 object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Media Partners */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Media Partners</h3>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {mediaPartners.map((partner) => (
                <div key={partner.id} className="bg-white/10 rounded-lg p-3 hover:bg-white/20 transition-colors">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="h-8 w-20 object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
