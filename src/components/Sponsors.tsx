
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
    <section className="py-12 bg-[#f5f4f2]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Sponsors */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-[#3b3d4a] mb-6">Our Sponsors</h3>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {sponsors.map((sponsor) => (
                <div key={sponsor.id} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name}
                    className="h-12 w-24 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Media Partners */}
          <div>
            <h3 className="text-2xl font-bold text-[#3b3d4a] mb-6">Media Partners</h3>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {mediaPartners.map((partner) => (
                <div key={partner.id} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="h-12 w-24 object-contain"
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
