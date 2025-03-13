import img from "../assets/front-end/pfpdef.png";

const TeamSection = () => {
  // Updated team members data
  const teamMembers = [
    {
      id: 1,
      name: "Sun Thapa",
      role: "Co-President",
      image: img, // Replace with actual image import
    },
    {
      id: 2,
      name: "Pranab Khanal",
      role: "Co-President",
      image: img, // Replace with actual image import
    },
    {
      id: 3,
      name: "Arnima Shrestha",
      role: "Team Member",
      image: img, // Replace with actual image import
    },
    {
      id: 4,
      name: "Prapti Acharya",
      role: "Media Lead",
      image: img, // Replace with actual image import
    },
    {
      id: 5,
      name: "Aayushma Sapkota",
      role: "Team Member",
      image: img, // Replace with actual image import
    },
    {
      id: 6,
      name: "Kripa Pokhrel",
      role: "Team Member",
      image: img, // Replace with actual image import
    },
    {
      id: 7,
      name: "Nandita Lohani",
      role: "Team Member",
      image: img, // Replace with actual image import
    },
    {
      id: 8,
      name: "Pristina Mishra",
      role: "Team Member",
      image: img, // Replace with actual image import
    },
  ];

  return (
    <div className="bg-[#FAEDD6] mt-10 flex justify-center ">
      <div className="w-[90%] items-center">
        <h1 className="text-4xl font-bold text-[#780001] mt-10 ">
          Meet The Team
        </h1>
        <hr className="mt-3 border-[#000000]"></hr>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-5 pb-5">
          {teamMembers.map((member) => (
            <div
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
