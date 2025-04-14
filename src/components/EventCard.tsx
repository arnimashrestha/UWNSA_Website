import React from "react";

interface EventCardProps {
  event: {
    id: number;
    title: string;
    image: string;
    location: string;
    date: string;
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
      <h3 className="text-lg font-bold text-black mb-1">{event.title}</h3>
      <p className="text-sm text-gray-700">{event.location}</p>
      <p className="text-sm text-gray-700">{event.date}</p>
    </div>
  );
};

export default EventCard;
