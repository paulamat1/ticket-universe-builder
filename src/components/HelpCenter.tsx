
import React from 'react';
import { HelpCircle, Users, ShoppingCart, Edit, CreditCard, RotateCcw, Shield, Gift, Truck, FileText } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HelpCenter = () => {
  const helpLinks = [
    { 
      title: "Dla kupujących", 
      icon: <Users className="h-4 w-4" />,
      href: "/help/buyers" 
    },
    { 
      title: "Konto", 
      icon: <HelpCircle className="h-4 w-4" />,
      href: "/help/account" 
    },
    { 
      title: "Zakup", 
      icon: <ShoppingCart className="h-4 w-4" />,
      href: "/help/purchase" 
    },
    { 
      title: "Zmiana danych na biletach", 
      icon: <Edit className="h-4 w-4" />,
      href: "/help/ticket-changes" 
    },
    { 
      title: "Metody płatności", 
      icon: <CreditCard className="h-4 w-4" />,
      href: "/help/payment-methods" 
    },
    { 
      title: "Zwrot", 
      icon: <RotateCcw className="h-4 w-4" />,
      href: "/help/refunds" 
    },
    { 
      title: "Ubezpieczenie", 
      icon: <Shield className="h-4 w-4" />,
      href: "/help/insurance" 
    },
    { 
      title: "Voucher", 
      icon: <Gift className="h-4 w-4" />,
      href: "/help/vouchers" 
    },
    { 
      title: "Dostawa", 
      icon: <Truck className="h-4 w-4" />,
      href: "/help/delivery" 
    },
    { 
      title: "Regulaminy", 
      icon: <FileText className="h-4 w-4" />,
      href: "/help/terms" 
    },
    { 
      title: "Dla organizujących", 
      icon: <Users className="h-4 w-4" />,
      href: "/help/organizers" 
    }
  ];

  return (
    <section className="py-6 bg-gradient-to-br from-[#1a1c2e]/90 via-[#2a2d42]/90 to-[#1a1c2e]/90">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-[#1a1c2e]/90 via-[#2a2d42]/90 to-[#1a1c2e]/90 border border-gray-600/30 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Centrum pomocy</h2>
          <Carousel className="w-full">
            <CarouselContent>
              {helpLinks.map((link, index) => (
                <CarouselItem key={index} className="basis-1/6">
                  <a
                    href={link.href}
                    className="text-center cursor-pointer hover:scale-105 transition-transform block"
                  >
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-12 h-12 mx-auto mb-1 rounded-full bg-[#e49755]/20 flex items-center justify-center border-2 border-[#e49755]">
                        <div className="text-[#e49755]">
                          {link.icon}
                        </div>
                      </div>
                      <h3 className="font-semibold text-white text-xs text-center leading-tight">{link.title}</h3>
                    </div>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-[#e49755] text-[#e49755]" />
            <CarouselNext className="border-[#e49755] text-[#e49755]" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default HelpCenter;
