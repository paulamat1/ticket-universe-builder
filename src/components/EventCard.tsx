
import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, ArrowRight, Bell } from 'lucide-react';

interface EventCardProps {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  maxAttendees: number;
  price: string;
  image: string;
  category: string;
  isSoldOut?: boolean;
}

const EventCard: React.FC<EventCardProps> = ({
  id,
  title,
  subtitle,
  date,
  time,
  location,
  attendees,
  maxAttendees,
  price,
  image,
  category,
  isSoldOut = false
}) => {
  const [isInQueue, setIsInQueue] = useState(false);
  const [email, setEmail] = useState('');
  const [showEmailInput, setShowEmailInput] = useState(false);

  const handleQueueJoin = () => {
    if (email) {
      setIsInQueue(true);
      setShowEmailInput(false);
      setEmail('');
    } else {
      setShowEmailInput(true);
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs font-medium">
            {category}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          {isSoldOut ? (
            <span className="bg-red-500 text-white px-2 py-1 rounded-md text-xs font-semibold">
              SOLD OUT
            </span>
          ) : (
            <span className="bg-background/90 backdrop-blur text-foreground px-2 py-1 rounded-md text-xs font-semibold">
              {price}
            </span>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm">
            {subtitle}
          </p>
        </div>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{time}</span>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{attendees} / {maxAttendees} attendees</span>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between text-xs text-muted-foreground mb-1">
            <span>Capacity</span>
            <span>{Math.round((attendees / maxAttendees) * 100)}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${(attendees / maxAttendees) * 100}%` }}
            ></div>
          </div>
        </div>
        
        {isSoldOut ? (
          <div className="space-y-3">
            {showEmailInput && (
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-lg text-sm"
              />
            )}
            {isInQueue ? (
              <button className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2" disabled>
                <Bell className="h-4 w-4" />
                <span>You're in the queue!</span>
              </button>
            ) : (
              <button 
                onClick={handleQueueJoin}
                className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all group flex items-center justify-center space-x-2"
              >
                <Bell className="h-4 w-4" />
                <span>{showEmailInput ? 'Join Queue' : 'Join Waitlist'}</span>
              </button>
            )}
          </div>
        ) : (
          <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all group flex items-center justify-center space-x-2">
            <span>Get Tickets</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        )}
      </div>
    </div>
  );
};

export default EventCard;
