import { Button } from "./ui/button";
import mount from "../assets/front-end/mount.png";

const Hero = () => {
  return (
    //For Mobile Dev - Text should be centered, anything greater mobile dev - text should be at the left

    <div className=" flex flex-col md:flex-row items-center justify-center text-center md:items-start md:justify-between mx-auto px-4 bg-[#355848]  min-h-screen w-[80%]  lg:mt-20 z-10 ">
      <div className="text-center md:text-left max-w-lg w-full  space-y-4 flex-1 z-10">
        <p className="text-3xl font-bold text-[#EAAA08]">Hello Namaste</p>
        <h1 className="text-4xl  md:text-4xl lg:text-5xl xl:text-6xl  font-bold text-white ">
          Celebrate Nepali Culture and Build Stronger Communities
        </h1>
        <p className="text-white lg:text-2xl">
          Inclusive to All, Exclusive to None. University of Waterloo’s Nepalese
          Student Association welcomes all
        </p>
        <div className="flex flex-col md:flex-row items-center  md:justify-evenly gap-4 w-full md:w-auto ">
          <Button className="bg-[#780001] w-full xl:text-xl xl:h-10 2xl:text-2xl 2xl:h-15 rounded-3xl">
            Join us
          </Button>
          <Button className="bg-[#F1FAEE] text-black w-full xl:text-2xl xl:h-15 rounded-3xl">
            Events
          </Button>
        </div>
      </div>
      <div className="flex-1   hidden md:flex items-center w-full md:w-auto align-middle mt-20 xl:mt-10 z-10 xl:justify-end">
        <img src={mount} alt=" " className="w-[35vw]"></img>
      </div>
    </div>
  );
};

export default Hero;
