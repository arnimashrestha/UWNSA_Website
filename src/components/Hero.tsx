import React from "react";
import { Button } from "./ui/button";
import mount from "../assets/front-end/mount.png";

const Hero = () => {
  return (
    //For Mobile Dev - Text should be centered, anything greater mobile dev - text should be at the left

    <div className=" flex flex-col md:flex-row items-center md:items-start justify-between mx-auto px-4 bg-[#355848]  w-[90%] gap-3.5 mt-2 ">
      <div className="text-center md:text-left max-w-lg w-full  space-y-4 flex-1">
        <p className="text-2xl font-bold text-[#EAAA08]">Hello Namaste</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white ">
          Celebrate Nepali Culture and Build Stronger Communities
        </h1>
        <p className="text-white">
          Inclusive to All, Exclusive to None. University of Waterloo’s Nepalese
          Student Association welcomes all
        </p>
        <div className="flex flex-col md:flex-row items-center  md:justify-evenly gap-4 w-full md:w-auto">
          <Button className="bg-[#780001] w-full">Join us</Button>
          <Button className="bg-[#F1FAEE] text-black w-full">Events</Button>
        </div>
      </div>
      <div className="flex-1 flex  hidden sm:flex items-center w-full md:w-auto align-middle mt-20 xl:mt-10 z-10 xl:justify-end">
        <img
          src={mount}
          alt=" "
          className="lg:w-[80%] 
        h-[80%] self-center"
        ></img>
      </div>
    </div>
  );
};

export default Hero;
