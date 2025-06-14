
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

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
  const [email, setEmail] = useState('');

  const handleJoinQueue = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Joining queue with email:', email);
    setShowQueue(false);
    setEmail('');
  };

  const handleCardClick = () => {
    // Navigate to event page
    console.log(`Navigate to event page for event: ${id}`);
  };

  const handleGetTickets = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log(`Navigate to buying process for event: ${id}`);
  };

  return (
    <Card 
      className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer bg-[#f5f4f2] border-gray-300" 
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
          className="absolute top-2 right-2 bg-[#e49755] text-white border-none"
          variant="secondary"
        >
          {category}
        </Badge>
        {isSoldOut && (
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center">
            <span className="text-2xl font-bold text-white">Sold Out</span>
          </div>
        )}
      </div>
      
      <CardContent className="p-6">
        <CardHeader className="p-0">
          <CardTitle className="text-lg text-[#3b3d4a]">{title}</CardTitle>
          <CardDescription className="text-gray-600">{date} - {time} - {location}</CardDescription>
        </CardHeader>
        <p className="text-sm text-gray-700 mt-2">{description}</p>
      </CardContent>
      
      <CardFooter className="p-6 pt-0 flex flex-col gap-3">
        <div className="text-xl font-semibold text-[#3b3d4a]">${price}</div>
        {isSoldOut ? (
          showQueue ? (
            <form onSubmit={handleJoinQueue} className="flex flex-col gap-2" onClick={(e) => e.stopPropagation()}>
              <Label htmlFor="email" className="text-[#3b3d4a]">Email:</Label>
              <Input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-gray-300 focus:ring-[#e49755]"
              />
              <Button type="submit" className="bg-[#e49755] hover:bg-[#d4864a] text-white">Join Waiting List</Button>
              <Button type="button" variant="ghost" onClick={() => setShowQueue(false)} className="text-[#3b3d4a]">Cancel</Button>
            </form>
          ) : (
            <Button onClick={(e) => { e.stopPropagation(); setShowQueue(true); }} variant="outline" className="border-[#e49755] text-[#e49755] hover:bg-[#e49755] hover:text-white">Join Waiting List</Button>
          )
        ) : (
          <Button onClick={handleGetTickets} className="bg-[#e49755] hover:bg-[#d4864a] text-white">Get Tickets</Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default EventCard;
