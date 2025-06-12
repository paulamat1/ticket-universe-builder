
export interface Event {
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
}

export const events: Event[] = [
  {
    id: "1",
    title: "AI Startup Pitch Night",
    subtitle: "Early-stage founders showcase their AI innovations",
    date: "March 15, 2024",
    time: "6:00 PM - 9:00 PM",
    location: "SOMA District, San Francisco",
    attendees: 87,
    maxAttendees: 120,
    price: "$25",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=400&fit=crop",
    category: "Networking"
  },
  {
    id: "2",
    title: "LLM Development Workshop",
    subtitle: "Hands-on coding session with GPT and Claude APIs",
    date: "March 22, 2024",
    time: "2:00 PM - 6:00 PM",
    location: "Mission Bay, San Francisco",
    attendees: 45,
    maxAttendees: 80,
    price: "$75",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    category: "Workshop"
  },
  {
    id: "3",
    title: "AI Ethics Panel Discussion",
    subtitle: "Industry leaders discuss responsible AI development",
    date: "March 28, 2024",
    time: "7:00 PM - 9:00 PM",
    location: "Financial District, San Francisco",
    attendees: 156,
    maxAttendees: 200,
    price: "Free",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop",
    category: "Panel"
  },
  {
    id: "4",
    title: "Computer Vision Demo Day",
    subtitle: "Live demonstrations of cutting-edge CV applications",
    date: "April 5, 2024",
    time: "1:00 PM - 5:00 PM",
    location: "SOMA District, San Francisco",
    attendees: 92,
    maxAttendees: 150,
    price: "$40",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=400&fit=crop",
    category: "Demo"
  },
  {
    id: "5",
    title: "AI in Healthcare Summit",
    subtitle: "Exploring AI applications in medical technology",
    date: "April 12, 2024",
    time: "9:00 AM - 6:00 PM",
    location: "Presidio, San Francisco",
    attendees: 203,
    maxAttendees: 300,
    price: "$150",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=400&fit=crop",
    category: "Summit"
  },
  {
    id: "6",
    title: "Neural Network Bootcamp",
    subtitle: "Deep dive into neural architecture and training",
    date: "April 19, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "South Bay, San Francisco",
    attendees: 34,
    maxAttendees: 60,
    price: "$120",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=400&fit=crop",
    category: "Bootcamp"
  }
];
