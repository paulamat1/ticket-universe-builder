import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
    // Here you would typically send the email to your backend
    console.log('Joining queue with email:', email);
    setShowQueue(false);
    setEmail('');
    // You could show a toast notification here
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow" data-event-id={id}>
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="aspect-video w-full object-cover"
        />
        {isSoldOut && (
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center">
            <span className="text-2xl font-bold text-white">Sold Out</span>
          </div>
        )}
      </div>
      
      <CardContent className="p-6">
        <CardHeader>
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription>{date} - {time} - {location}</CardDescription>
        </CardHeader>
        <p className="text-sm text-muted-foreground mt-2">{description}</p>
        <div className="mt-4">
          <span className="inline-flex items-center rounded-full bg-secondary px-3 py-0.5 text-sm font-medium text-secondary-foreground">
            {category}
          </span>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0 flex flex-col gap-3">
        <div className="text-xl font-semibold">${price}</div>
        {isSoldOut ? (
          showQueue ? (
            <form onSubmit={handleJoinQueue} className="flex flex-col gap-2">
              <Label htmlFor="email">Email:</Label>
              <Input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit">Join Waiting List</Button>
              <Button type="button" variant="ghost" onClick={() => setShowQueue(false)}>Cancel</Button>
            </form>
          ) : (
            <Button onClick={() => setShowQueue(true)} variant="outline">Join Waiting List</Button>
          )
        ) : (
          <Button>Get Tickets</Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default EventCard;
