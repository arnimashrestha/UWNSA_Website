import img from "../assets/front-end/pfpdef.png";
import Aayushma from "../assets/front-end/NSA-Aayushma.png";
import Sun from "../assets/front-end/NSA-Sun.png";
import Prapti from "../assets/front-end/NSA-Prapti.png";
import Pristina from "../assets/front-end/NSA-Pristina.png";
import Kripa from "../assets/front-end/NSA-Kripa.png";
import Arnima from "../assets/front-end/NSA-Arnima.jpg";
import Nandita from "../assets/front-end/NSA-Nandita.png";
import Nirjra from "../assets/front-end/Nirjra.png";
import Pranab from "../assets/front-end/pwizzy.png";

const TeamSection = () => {
  // Updated team members data
  //teammembers is an array of objects
  const teamMembers = [
    {
      id: 1,
      name: "Sun Thapa",
      role: "Co-President",
      image: Sun, // Replace with actual image import
    },
    {
      id: 2,
      name: "Pranab Khanal",
      role: "Co-President",
      image: Pranab, // Replace with actual image import
    },
    {
      id: 3,
      name: "Arnima Shrestha",
      role: "Design Lead",
      image: Arnima, // Replace with actual image import
    },
    {
      id: 4,
      name: "Prapti Acharya",
      role: "Finance Lead",
      image: Prapti, // Replace with actual image import
    },
    {
      id: 5,
      name: "Aayushma Sapkota",
      role: "Exec Member",
      image: Aayushma, // Replace with actual image import
    },
    {
      id: 6,
      name: "Kripa Pokhrel",
      role: "Exec ",
      image: Kripa, // Replace with actual image import
    },
    {
      id: 7,
      name: "Nandita Lohani",
      role: "Exec",
      image: Nandita, // Replace with actual image import
    },
    {
      id: 8,
      name: "Pristina Mishra",
      role: "Social Media Lead",
      image: Pristina, // Replace with actual image import
    },
    {
      id: 9,
      name: "Nirjra Gyawali",
      role: "Events Lead",
      image: Nirjra,
    },
  ];

  return (
    <div className="bg-[#FAEDD6] mt-10 flex justify-center min-h-[100vh] w-full ">
      <div className="w-[80%] items-center">
        <h1 className="text-7xl font-bold text-[#780001] mt-10 ">
          Meet The Team
        </h1>
        <hr className="mt-10 border-[#000000]"></hr>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 pb-5">
          {teamMembers.map((member) => (
            <div
              //keeps track of each element (which is important for performance)
              key={member.id}
              className="flex flex-col items-center text-center"
            >
              {/* Image container */}
              <div className="w-48 h-48 rounded-2xl overflow-hidden mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              {/* Name and role */}
              <h3 className="text-2xl font-bold text-[#000000] mb-1">
                {member.name}
              </h3>
              <p className="text-lg text-gray-700">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
