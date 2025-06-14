
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Share, Bell } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  price: number;
  image: string;
  description: string;
  isSoldOut?: boolean;
}

const EventCard = ({ id, title, date, time, location, category, price, image, description, isSoldOut }: EventCardProps) => {
  const [showQueue, setShowQueue] = useState(false);
  const [showTicketAlert, setShowTicketAlert] = useState(false);
  const [email, setEmail] = useState('');
  const [alertEmail, setAlertEmail] = useState('');

  const handleJoinQueue = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Joining queue with email:', email);
    setShowQueue(false);
    setEmail('');
  };

  const handleTicketAlert = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signing up for ticket alert with email:', alertEmail);
    setShowTicketAlert(false);
    setAlertEmail('');
  };

  const handleCardClick = () => {
    console.log(`Navigate to event page for event: ${id}`);
  };

  const handleGetTickets = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log(`Navigate to buying process for event: ${id}`);
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: title,
        text: description,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      console.log('Event URL copied to clipboard');
    }
  };

  return (
    <Card 
      className="overflow-hidden transition-all duration-300 cursor-pointer hover:scale-[1.02] group" 
      data-event-id={id}
      onClick={handleCardClick}
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="aspect-video w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <Badge 
          className="absolute top-3 right-3 bg-gradient-to-r from-primary to-accent text-primary-foreground border-none font-grotesk font-medium shadow-lg"
          variant="secondary"
        >
          {category}
        </Badge>
        {isSoldOut && (
          <div className="absolute top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center backdrop-blur-sm">
            <span className="text-2xl font-grotesk font-bold text-white">Sold Out 😢</span>
          </div>
        )}
        
        {/* Share and Alert buttons */}
        <div className="absolute top-3 left-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            size="sm"
            variant="outline"
            className="glass-effect border-none text-white hover:bg-white/20 rounded-full w-10 h-10 p-0"
            onClick={handleShare}
          >
            <Share className="h-4 w-4" />
          </Button>
          <Popover open={showTicketAlert} onOpenChange={setShowTicketAlert}>
            <PopoverTrigger asChild>
              <Button
                size="sm"
                variant="outline"
                className="glass-effect border-none text-white hover:bg-white/20 rounded-full w-10 h-10 p-0"
                onClick={(e) => e.stopPropagation()}
              >
                <Bell className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 glass-effect border-border/50" onClick={(e) => e.stopPropagation()}>
              <form onSubmit={handleTicketAlert} className="space-y-3">
                <div>
                  <h4 className="font-grotesk font-medium">Get Ticket Alerts 🔔</h4>
                  <p className="text-sm text-muted-foreground">Be the first to know when tickets drop</p>
                </div>
                <div>
                  <Label htmlFor="alert-email">Email</Label>
                  <Input
                    type="email"
                    id="alert-email"
                    placeholder="your@email.com"
                    value={alertEmail}
                    onChange={(e) => setAlertEmail(e.target.value)}
                    className="rounded-xl"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-primary to-accent hover:scale-105 transition-transform duration-200 rounded-xl font-grotesk">
                  Sign Me Up! ✨
                </Button>
              </form>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      
      <CardContent className="p-5">
        <CardHeader className="p-0">
          <CardTitle className="text-lg font-grotesk font-semibold text-foreground">{title}</CardTitle>
          <CardDescription className="text-muted-foreground font-medium">{date} • {time} • {location}</CardDescription>
        </CardHeader>
        <p className="text-sm text-muted-foreground mt-3 line-clamp-2">{description}</p>
      </CardContent>
      
      <CardFooter className="p-5 pt-0 flex flex-col gap-3">
        <div className="text-2xl font-grotesk font-bold gradient-text">${price}</div>
        {isSoldOut ? (
          showQueue ? (
            <form onSubmit={handleJoinQueue} className="flex flex-col gap-3 w-full" onClick={(e) => e.stopPropagation()}>
              <Label htmlFor="email" className="font-grotesk">Join the waitlist:</Label>
              <Input
                type="email"
                id="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-xl"
                required
              />
              <Button type="submit" className="bg-gradient-to-r from-secondary to-primary hover:scale-105 transition-transform duration-200 rounded-xl font-grotesk">
                Join Waitlist 🎯
              </Button>
              <Button type="button" variant="ghost" onClick={() => setShowQueue(false)} className="text-muted-foreground hover:text-foreground rounded-xl">
                Cancel
              </Button>
            </form>
          ) : (
            <Button onClick={(e) => { e.stopPropagation(); setShowQueue(true); }} variant="outline" className="w-full border-primary/50 text-primary hover:bg-primary/10 rounded-xl font-grotesk font-medium">
              Join Waitlist 📝
            </Button>
          )
        ) : (
          <Button onClick={handleGetTickets} className="w-full bg-gradient-to-r from-primary to-accent hover:scale-105 transition-transform duration-200 rounded-xl font-grotesk font-semibold">
            Get Tickets 🎫
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default EventCard;
