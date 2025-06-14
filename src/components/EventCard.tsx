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
      className="overflow-hidden transition-shadow cursor-pointer" 
      data-event-id={id}
      onClick={handleCardClick}
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="aspect-video w-full object-cover"
        />
        <Badge 
          className="absolute top-2 right-2 bg-primary text-primary-foreground border-none"
          variant="secondary"
        >
          {category}
        </Badge>
        {isSoldOut && (
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center">
            <span className="text-2xl font-bold text-white">Sold Out</span>
          </div>
        )}
        
        {/* Share and Alert buttons */}
        <div className="absolute top-2 left-2 flex gap-2">
          <Button
            size="sm"
            variant="outline"
            className="bg-black/50 border-none text-white hover:bg-black/70"
            onClick={handleShare}
          >
            <Share className="h-4 w-4" />
          </Button>
          <Popover open={showTicketAlert} onOpenChange={setShowTicketAlert}>
            <PopoverTrigger asChild>
              <Button
                size="sm"
                variant="outline"
                className="bg-black/50 border-none text-white hover:bg-black/70"
                onClick={(e) => e.stopPropagation()}
              >
                <Bell className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80" onClick={(e) => e.stopPropagation()}>
              <form onSubmit={handleTicketAlert} className="space-y-3">
                <div>
                  <h4 className="font-medium">Get Ticket Alerts</h4>
                  <p className="text-sm text-muted-foreground">Be notified when tickets become available</p>
                </div>
                <div>
                  <Label htmlFor="alert-email">Email</Label>
                  <Input
                    type="email"
                    id="alert-email"
                    placeholder="Enter your email"
                    value={alertEmail}
                    onChange={(e) => setAlertEmail(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Sign Up for Alerts
                </Button>
              </form>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      
      <CardContent className="p-4">
        <CardHeader className="p-0">
          <CardTitle className="text-lg text-white">{title}</CardTitle>
          <CardDescription className="text-gray-300">{date} - {time} - {location}</CardDescription>
        </CardHeader>
        <p className="text-sm text-gray-400 mt-2">{description}</p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex flex-col gap-3">
        <div className="text-xl font-semibold text-primary">${price}</div>
        {isSoldOut ? (
          showQueue ? (
            <form onSubmit={handleJoinQueue} className="flex flex-col gap-2" onClick={(e) => e.stopPropagation()}>
              <Label htmlFor="email">Email:</Label>
              <Input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground">Join Waiting List</Button>
              <Button type="button" variant="ghost" onClick={() => setShowQueue(false)} className="text-muted-foreground hover:text-foreground">Cancel</Button>
            </form>
          ) : (
            <Button onClick={(e) => { e.stopPropagation(); setShowQueue(true); }} variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">Join Waiting List</Button>
          )
        ) : (
          <Button onClick={handleGetTickets} className="bg-primary hover:bg-primary/90 text-primary-foreground">Get Tickets</Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default EventCard;
