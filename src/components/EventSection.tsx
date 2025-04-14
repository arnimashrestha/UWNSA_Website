import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import EventCard from "./EventCard";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

import cat1 from "../assets/front-end/events/chiya-and-taas/cat_1.jpg";
import cat2 from "../assets/front-end/events/chiya-and-taas/cat_2.jpg";
import cat3 from "../assets/front-end/events/chiya-and-taas/cat_3.jpg";
import cat4 from "../assets/front-end/events/chiya-and-taas/cat_4.jpg";
import cat5 from "../assets/front-end/events/chiya-and-taas/cat_5.jpg";

import ton1 from "../assets/front-end/events/taste-of-nepal/ton1.jpg";
import ton2 from "../assets/front-end/events/taste-of-nepal/ton_2.png";
import ton3 from "../assets/front-end/events/taste-of-nepal/ton3.jpg";

import hm from "../assets/front-end/events/hm/hm.png";
import hm2 from "../assets/front-end/events/hm/hm2.png";
import hm3 from "../assets/front-end/events/hm/hm3.png";
import hm4 from "../assets/front-end/events/hm/hm4.png";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const frameworks = [
  {
    value: "rating",
    label: "Rating",
  },
  {
    value: "name",
    label: "Name",
  },
  {
    value: "location",
    label: "Location",
  },
];

const tasteofnepal = [ton1, ton2, ton3];

const chiyaandtaas = [cat1, cat2, cat3, cat4, cat5];
const himalayanmela = [hm, hm2, hm3, hm4];
const eventsData = {
  2025: [
    {
      id: 1,
      title: "Chiya and Taas",
      location: "Haigey Hall",
      date: "Feb 6th 2025",
      rating: 4.99,
      reviews: 10,
      image: cat5,
      images: chiyaandtaas,
      description: "Join our Momo Contest and show off your dumpling skills!",
    },
    {
      id: 2,
      title: "Taste of Nepal",
      location: "E7",
      date: "March 27 2025",
      rating: 4.31,
      reviews: 10,
      image: ton1,
      images: tasteofnepal,
      description: "Explore diverse cuisines in our street food festival!",
    },
    // Add more events...
  ],
  2024: [
    {
      id: 3,
      title: "Himalayan Mela ",
      location: "Nathan Phillips Square, Toronto",
      date: "August 10th 2024",
      rating: 4.8,
      reviews: 15,
      image: hm,
      images: himalayanmela,
      description:
        "Celebrate Dashain with music, food, and cultural performances.",
    },
  ],
};

const EventsSection = () => {
  const [activeYear, setActiveYear] = useState<"2025" | "2024">("2025");
  const [sortBy, setSortBy] = useState("rating");
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  //for the combobox
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const sortedEvents = [...eventsData[activeYear]].sort((a, b) => {
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "name") return a.title.localeCompare(b.title);
    if (sortBy === "location") return a.location.localeCompare(b.location);
    return 0;
  });

  const visibleEvents = sortedEvents.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  useEffect(() => {
    if (selectedEvent) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [selectedEvent]);

  return (

    <div className="bg-[#355848] py-12 min-h-screen w-full mt-5" id="events">

      <div className="w-[80%]  mx-auto">
        <h2 className=" font-bold text-[white] text-7xl mb-4 text-left">
          Events
        </h2>
        <hr className="border-[#000000] mt-10" />

        {/* Tabs and Sort */}
        <div className="flex flex-wrap gap-4 items-center mt-5">
          <div className="flex gap-2">
            {["2025", "2024"].map((year) => (
              <Button
                key={year}
                onClick={() => {
                  setActiveYear(year as "2025" | "2024");
                  setVisibleCount(6);
                }}
                className={`px-15 py-1 rounded-full border text-sm font-semibold transition ${
                  activeYear === year

                    ? "bg-[#FAEDD6] hover:bg-[#f3ddc1] border-black text-[black]"

                    : "bg-transparent text-gray-600 hover:bg-gray-100"
                }`}
              >
                {year}
              </Button>
            ))}
          </div>
          <div className="ml-auto">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-[200px] justify between  mt-5 md:mt-0"
                >
                  {value
                    ? frameworks.find((framework) => framework.value === value)
                        ?.label
                    : "Sort by "}
                  <ChevronsUpDown className="opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput
                    placeholder="Search sorting"
                    className="h-9"
                  ></CommandInput>
                  <CommandList>
                    <CommandEmpty> No Framework Found. </CommandEmpty>
                    <CommandGroup>
                      {frameworks.map((framework) => (
                        <CommandItem
                          key={framework.value}
                          value={framework.value}
                          onSelect={(currentValue) => {
                            setValue(
                              currentValue == value ? " " : currentValue
                            );
                            setSortBy(
                              currentValue == value ? " " : currentValue
                            );

                            setOpen(false);
                          }}
                        >
                          {framework.label}
                          <Check
                            className={cn(
                              "ml-auto",
                              value === framework.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
            {/*
            <select

            className="border border-gray-400 rounded-lg px-3 py-1 text-sm mt-15"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="rating">Sort by Rating</option>
            <option value="name">Sort by Name</option>
            <option value="location">Sort by Location</option>
          </select > */}

          </div>
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {visibleEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onClick={() => setSelectedEvent(event)}
            />
          ))}
        </div>

        {/* Load More */}
        {visibleEvents.length < sortedEvents.length && (
          <div className="mt-8 text-center">
            <button
              onClick={handleLoadMore}
              className="bg-[#780001] text-white px-6 py-2 rounded-lg hover:bg-[#5c0000] transition"
            >
              Load More
            </button>
          </div>
        )}

        {/* Modal */}
        {selectedEvent && (
          <>
            {/* Overlay */}
            <div

              className="fixed inset-0  backdrop-blur-sm z-40"

              onClick={() => setSelectedEvent(null)}
            />

            {/* Modal Content */}
            <div className="fixed inset-0 flex justify-center items-center z-50 px-4 ">
              <div className="bg-white w-full max-w-lg rounded-2xl p-6 shadow-2xl relative animate-in slide-in-from-top duration-300">
                <button
                  className="absolute top-3 right-4 text-2xl font-bold text-gray-600 hover:text-black"
                  onClick={() => setSelectedEvent(null)}
                >
                  &times;
                </button>
                <h3 className="text-2xl font-bold mt-10 text-[#780001]">
                  {selectedEvent.title}
                </h3>

                <Carousel>
                  <CarouselContent>
                    {(selectedEvent.images as string[]).map(
                      (src: string, idx: number) => (
                        <CarouselItem key={idx}>
                          <img src={src} className="border-2 border-red-500" />
                        </CarouselItem>
                      )
                    )}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>

                <p className="text-gray-800 mt-10">
                  <strong>Location:</strong> {selectedEvent.location}
                </p>
                <p className="text-gray-800 mb-1">
                  <strong>Date:</strong> {selectedEvent.date}
                </p>
                <p className="text-gray-800 mb-1">
                  <strong>Rating:</strong> ⭐ {selectedEvent.rating.toFixed(2)}{" "}
                  ({selectedEvent.reviews} reviews)
                </p>
                <p className="text-gray-700 mt-">{selectedEvent.description}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default EventsSection;
