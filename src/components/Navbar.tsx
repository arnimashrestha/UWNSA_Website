import { useState } from "react";
import logo from "../assets/front-end/logo.png";
import { Button } from "./ui/button";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import leftpink from "../assets/front-end/leftpink.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="font-outfit relative w-full border-r border-gray">
      <img
        src={leftpink}
        alt=" "
        className="absolute top-0 right-0 hidden md:block  sm:w-[40vw]  opacity-90 -z-0"
      />

      <div className="relative font-outfit flex justify-between items-center h-24 w-[80%] mx-auto px-4 text-black z-10">
        {/* Logo*/}
        <img src={logo} alt=" " className="h-10-w-auto " />

        {/* Nav bar for >md */}
        <ul className="hidden md:flex items-center ">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setMenu("about");

              const element = document.getElementById("about");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className={`p-4 lg:text-xl ${menu === "about" ? "active" : ""}`}
          >
            About
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setMenu("events");

              const element = document.getElementById("events");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className={`p-4 lg:text-xl ${menu === "events" ? "active" : ""} `}
          >
            Events
          </a>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setMenu("join");

              const element = document.getElementById("join");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className={`p-4 lg:text-xl ${menu === "join" ? "join" : ""} `}
          >
            <Button className="p-4 lg:text-xl  bg-[#780001]  hover:bg-[#a31414] ">
              {" "}
              Join Us{" "}
            </Button>
          </a>
        </ul>

        <div onClick={handleNav} className="block md:hidden">
          {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
        </div>

        {/* Hamburger Menu for >md */}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[85%] h-full border-r border-gray-900 bg-[#4A6B5F] transition-all ease-in-out duration-500"
              : "fixed left-[-100%] top-0 w-[50%] h-full border-r border-gray-900 bg-[#4A6B5F] transition-all ease-in-out duration-500"
          }
        >
          <img src={logo} alt=" " className="h-12-w-auto m-4" />
          <ul className="uppercase p-4">
            <li
              onClick={() => {
                setNav(false);
                const element = document.getElementById("about");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="p-4 border-b border-gray-000"
            >
              About
            </li>
            <li
              onClick={() => {
                setNav(false);
                const element = document.getElementById("events");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="p-4  border-b border-gray-000"
            >
              Events
            </li>

            <li
              onClick={() => {
                setNav(false);
                const element = document.getElementById("join");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="p-4  border-b border-gray-000"
            >
              {" "}
              Join Us{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
