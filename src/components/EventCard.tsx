import React from "react";

interface EventCardProps {
  event: {
    id: number;
    title: string;
    image: string;
    location: string;
    date: string;
    rating: number;
    reviews: number;
  };
  onClick: () => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="rounded-xl border border-gray-400 bg-white shadow-md p-4 hover:scale-[1.01] transition cursor-pointer"
    >
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <div className="flex justify-between items-center mb-1">
        <h3 className="text-lg font-bold text-black">{event.title}</h3>
        <div className="text-sm text-[#780001] flex items-center gap-1">
          ⭐ <span className="font-bold">{event.rating.toFixed(2)}</span>
          <span className="text-black">({event.reviews})</span>
        </div>
      </div>
      <p className="text-sm text-gray-700">{event.location}</p>
      <p className="text-sm text-gray-700">{event.date}</p>
    </div>
  );
};

export default EventCard;
