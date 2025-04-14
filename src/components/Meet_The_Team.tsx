import Aayushma from "../assets/front-end/NSA-Aayushma.png";
import Sun from "../assets/front-end/NSA-Sun.png";
import Pranab from "../assets/front-end/NSA-Pranab.png";
import Prapti from "../assets/front-end/NSA-Prapti.png";
import Pristina from "../assets/front-end/NSA-Pristina.png";
import Kripa from "../assets/front-end/NSA-Kripa.png";
import Arnima from "../assets/front-end/NSA-Arnima.png";
import Nandita from "../assets/front-end/NSA-Nandita.png";
import Nirjra from "../assets/front-end/NSA-Nirjra.png";

const TeamSection = () => {
  const teamMembersTopRow = [
    { id: 1, name: "Sun Thapa", role: "Co-President", image: Sun },
    { id: 2, name: "Pranab Khanal", role: "Co-President", image: Pranab },
    { id: 3, name: "Arnima Shrestha", role: "Team Member", image: Arnima },
    { id: 4, name: "Prapti Acharya", role: "Media Lead", image: Prapti },
    { id: 5, name: "Aayushma Sapkota", role: "Team Member", image: Aayushma },
  ];

  const teamMembersBottomRow = [
    { id: 6, name: "Kripa Pokhrel", role: "Team Member", image: Kripa },
    { id: 7, name: "Nandita Lohani", role: "Team Member", image: Nandita },
    { id: 8, name: "Pristina Mishra", role: "Team Member", image: Pristina },
    { id: 9, name: "Nirjra Gyawali", role: "Team Member", image: Nirjra },
  ];

  return (
    <div className="bg-[#FAEDD6] mt-10 flex justify-center min-h-[100vh] w-full">
      <div className="w-[80%] items-center">
        <h1 className="text-7xl font-bold text-[#780001] mt-10">
          Meet The Team
        </h1>
        <hr className="mt-10 border-[#000000]" />

        {/* Top Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 mt-10 pb-5 justify-items-center">
          {teamMembersTopRow.map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center text-center"
            >
              <div className="w-48 h-48 rounded-2xl overflow-hidden mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#000000] mb-1">
                {member.name}
              </h3>
              <p className="text-lg text-gray-700">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Bottom Row shifted right by one column */}
        <div className="grid grid-cols-5 gap-8 mt-2 justify-items-center">
          {teamMembersBottomRow.map((member, index) => (
            <div
              key={member.id}
              className={`flex flex-col items-center text-center col-start-${
                index === 0 ? 2 : "auto"
              }`}
            >
              <div className="w-48 h-48 rounded-2xl overflow-hidden mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
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
