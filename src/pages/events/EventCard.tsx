import { Calendar, MapPin, Clock, Users, ArrowRight, Share2, Bookmark } from 'lucide-react';
import { useState } from 'react';

interface Event {
  image: string;
  title: string;
  description: string;
  category: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  price: string;
}

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100 group">
      <div className="relative">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 flex gap-2">
          <button 
            onClick={() => setIsBookmarked(!isBookmarked)}
            className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-pink-50 transition-colors group/btn"
          >
            <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-pink-500 text-pink-500' : 'text-gray-700'}`} />
          </button>
          <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-pink-50 transition-colors group/btn">
            <Share2 className="w-5 h-5 text-gray-700" />
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <span className="px-3 py-1 bg-pink-500 text-white rounded-full text-sm inline-block">
            {event.category}
          </span>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-pink-600 transition-colors">
            {event.title}
          </h3>
          <p className="text-gray-500 line-clamp-2">{event.description}</p>
        </div>

        <div className="space-y-3 text-gray-600">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-pink-500" />
            <span className="text-sm">{event.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-pink-500" />
            <span className="text-sm">{event.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-pink-500" />
            <span className="text-sm">{event.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-pink-500" />
            <span className="text-sm">{event.attendees} Attending</span>
          </div>
        </div>

        <div className="pt-4 flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-pink-600">{event.price}</span>
            {event.price !== "Free" && <span className="text-gray-500 text-sm">/person</span>}
          </div>
          <button className="py-2 px-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-xl font-medium hover:from-pink-600 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-pink-200 hover:shadow-xl flex items-center gap-2 group/btn">
            Register Now
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
