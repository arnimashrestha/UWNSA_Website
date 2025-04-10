import team from "../assets/front-end/Team.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const About_US = () => {
  return (
    //Need to use a flex box because and have to ensure that when its on a small screen, then it is in a row (the image)
    <div
      className="bg-[#FAEDD6] mt-30 flex justify-center min-h-[100vh] w-full"
      id="about"
    >
      <div className="w-[80%] lg:w items-center ">
        <h1 className="text-7xl font-bold text-[#780001] mt-20 ">About Us</h1>
        <hr className=" border-[#000000]  mt-10"></hr>
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 mt-10 pb-5">
          <div className="flex-1 flex text-left items-start ">
            <p className="text-xl lg:text-2xl leading-relaxed">
              UWNSA’s goal is to celebrate Nepalese culture, empower our
              community and foster meaningful connections. Through cultural
              events, educational initiatives and collaborations across Nepalese
              Student Associations across Universities in Ontario, we aim to
              create a space where members can explore their heritage, learn
              from shared experiences, and connect with a supportive network in
              the UW community. <br /> <br />
              <span className=" font-semibold">
                Together, we strengthen our identity, uplift one another, and
                build a vibrant Nepali Community{" "}
              </span>
            </p>
          </div>
          <div className="flex-1 flex justify-center lg:justify-center w-full">
            {/*<img
              src={team}
              alt=""
              className=" w-[80%] max-w-2xl max-h-[400px] h-auto object-cover rounded-2xl flex items-start"
            />*/}
            <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md">
              <CarouselContent>
                <CarouselItem className="basis-full">
                  <img
                    src={team}
                    alt="Team 1"
                    className="rounded-2xl w-full h-auto object-cover"
                  />
                </CarouselItem>
                <CarouselItem className="basis-full">
                  <img
                    src={team}
                    alt="Team 2"
                    className="rounded-2xl w-full h-auto object-cover"
                  />
                </CarouselItem>
                <CarouselItem className="basis-full">
                  <img
                    src={team}
                    alt="Team 3"
                    className="rounded-2xl w-full h-auto object-cover"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
        <div className="text-center text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#780001] italic mt-10 mb-10  xl:mt-30">
          "Nurturing our roots, growing our community, and shaping a vibrant
          future together."
        </div>
      </div>
    </div>
  );
};

export default About_US;
