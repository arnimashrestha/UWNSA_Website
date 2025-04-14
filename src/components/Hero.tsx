import { Button } from "./ui/button";
import mount from "../assets/front-end/mount.png";

const Hero = () => {
  return (
    //For Mobile Dev - Text should be centered, anything greater mobile dev - text should be at the left

    <div
      className="min-h-screen  w-[80%] flex flex-col justify-center items-center md:flex-row md:items-start md:justify-between  md:w-[80%] mx-auto px-4 bg-[#355848]  md:h-[40vw] gap-3.5 mt-0 md:mt-20 z-10"
      id="home"
    >
      <div className="text-center md:text-left max-w-lg w-full  space-y-4 flex-1 md:z-10">
        <p className="text-3xl font-bold text-[#EAAA08] mt-10 md:mt-0">
          Hello, Namaste, नमस्ते
        </p>
        <h1 className="text-4xl  md:text-4xl lg:text-5xl xl:text-6xl  font-bold text-white mt-10 md:mt-0 ">
          Celebrate Nepali Culture and Build Stronger Communities
        </h1>
        <p className="text-white lg:text-2xl mt-10 md:mt-0">
          Inclusive to All, Exclusive to None. University of Waterloo’s Nepalese
          Student Association welcomes all
        </p>
        <div className="flex flex-col md:flex-row items-center  md:justify-evenly  w-full md:w-auto mt-10 md:mt-0 gap-5">
          <Button
            onClick={() => {
              const element = document.getElementById("join");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-[#780001] hover:bg-[#a31414] w-[70%] xl:text-xl xl:h-10 2xl:text-2xl 2xl:h-15 rounded-3xl"
          >
            Join Us
          </Button>
          <Button
            className="bg-[#F1FAEE] hover:bg-[#FAEDD6] text-black w-[70%] xl:text-xl xl:h-10 2xl:text-2xl 2xl:h-15 rounded-3xl"
            onClick={() => {
              const element = document.getElementById("events");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Events
          </Button>
        </div>
      </div>
      <div className="flex-1 flex hidden  md:flex items-center w-full md:w-auto align-middle mt-20 xl:mt-10 z-10 xl:justify-end">
        <img src={mount} alt=" " className="w-[35vw]"></img>
      </div>
    </div>
  );
};

export default Hero;
