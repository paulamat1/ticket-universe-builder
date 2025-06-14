
import React from 'react';
import { HelpCircle, Users, ShoppingCart, Edit, CreditCard, RotateCcw, Shield, Gift, Truck, FileText } from 'lucide-react';

const HelpCenter = () => {
  const helpLinks = [
    { 
      title: "Dla kupujących", 
      icon: <Users className="h-5 w-5" />,
      href: "/help/buyers" 
    },
    { 
      title: "Konto", 
      icon: <HelpCircle className="h-5 w-5" />,
      href: "/help/account" 
    },
    { 
      title: "Zakup", 
      icon: <ShoppingCart className="h-5 w-5" />,
      href: "/help/purchase" 
    },
    { 
      title: "Zmiana danych na biletach", 
      icon: <Edit className="h-5 w-5" />,
      href: "/help/ticket-changes" 
    },
    { 
      title: "Metody płatności", 
      icon: <CreditCard className="h-5 w-5" />,
      href: "/help/payment-methods" 
    },
    { 
      title: "Zwrot", 
      icon: <RotateCcw className="h-5 w-5" />,
      href: "/help/refunds" 
    },
    { 
      title: "Ubezpieczenie", 
      icon: <Shield className="h-5 w-5" />,
      href: "/help/insurance" 
    },
    { 
      title: "Voucher", 
      icon: <Gift className="h-5 w-5" />,
      href: "/help/vouchers" 
    },
    { 
      title: "Dostawa", 
      icon: <Truck className="h-5 w-5" />,
      href: "/help/delivery" 
    },
    { 
      title: "Regulaminy", 
      icon: <FileText className="h-5 w-5" />,
      href: "/help/terms" 
    },
    { 
      title: "Dla organizujących", 
      icon: <Users className="h-5 w-5" />,
      href: "/help/organizers" 
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-[#1a1c2e]/90 via-[#2a2d42]/90 to-[#1a1c2e]/90">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Centrum pomocy
            </h3>
            <p className="text-gray-300">
              Znajdź odpowiedzi na najczęściej zadawane pytania
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {helpLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="bg-white/10 hover:bg-white/20 border border-gray-600/30 rounded-lg p-4 text-center transition-all hover:scale-105 group"
              >
                <div className="flex flex-col items-center space-y-2">
                  <div className="text-[#e49755] group-hover:text-white transition-colors">
                    {link.icon}
                  </div>
                  <span className="text-white text-sm font-medium">
                    {link.title}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpCenter;
