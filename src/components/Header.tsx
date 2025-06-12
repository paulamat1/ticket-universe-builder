
import React from 'react';
import { Ticket } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Ticket className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-foreground">EventHub</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#events" className="text-muted-foreground hover:text-foreground transition-colors">
            Events
          </a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
