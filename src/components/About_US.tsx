import React from "react";
import team from "../assets/front-end/Team.png";

const About_US = () => {
  return (
    //Need to use a flex box because and have to ensure that when its on a small screen, then it is in a row (the image)
    <div className="bg-[#FAEDD6] mt-10 flex justify-center ">
      <div className="w-[90%] items-center">
        <h1 className="text-4xl font-bold text-[#780001] mt-10 ">About Us</h1>
        <hr className="mt-3 border-[#000000]"></hr>
        <div className="flex flex-col md:flex-row items-start gap-8 mt-5 pb-5">
          <div className="flex-1 flex text-left items-start ">
            <p className="text-lg leading-relaxed">
              UWNSA’s goal is to celebrate Nepalese culture, empower our
              community and foster meaningful connections. Through cultural
              events, educational initiatives and collaborations across Nepalese
              Student Associations across Universities in Ontario, we aim to
              create a space where members can explore their heritage, learn
              from shared experiences, and connect with a supportive network in
              the UW community. <br /> <br />
              <span className="text-[#780001] font-semibold">
                Together, we strengthen our identity, uplift one another, and
                build a vibrant Nepali Community{" "}
              </span>
            </p>
          </div>
          <div className="flex-1 flex justify-end items-center">
            <img
              src={team}
              alt=""
              className=" w-full max-w-md h-auto items-center rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_US;
