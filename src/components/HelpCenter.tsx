
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
    <section className="py-6 bg-background">
      <div className="container mx-auto px-4">
        <div className="bg-card border border-border rounded-lg p-6 relative">
          <h2 className="text-xl font-bold text-white mb-4">Centrum pomocy</h2>
          <Carousel className="w-full" opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {helpLinks.map((link, index) => (
                <CarouselItem key={index} className="basis-1/6">
                  <a
                    href={link.href}
                    className="text-center cursor-pointer hover:scale-105 transition-transform block"
                  >
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-12 h-12 mx-auto mb-1 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary">
                        <div className="text-primary">
                          {link.icon}
                        </div>
                      </div>
                      <h3 className="font-semibold text-white text-xs text-center leading-tight">{link.title}</h3>
                    </div>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 border-primary text-primary bg-[#0a0a0a]/80 hover:bg-[#0a0a0a]" />
            <CarouselNext className="right-2 border-primary text-primary bg-[#0a0a0a]/80 hover:bg-[#0a0a0a]" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default HelpCenter;
