import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";

const Join_Us = () => {
  const [checkboxes, setCheckboxes] = useState({
    culture: false,
    participate: false,
    supportive: false,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  // ✅ Automatically open modal if all checkboxes are checked
  useEffect(() => {
    const allChecked = Object.values(checkboxes).every((val) => val === true);
    if (allChecked) {
      setIsModalOpen(true);
    }
  }, [checkboxes]);

  const toggleCheckbox = (key: keyof typeof checkboxes) => {
    setCheckboxes((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-[#355848] py-12">
      <div className="w-[80%] min-h-screen mx-auto">
        <h2 className="text-7xl font-bold text-[white] mb-4 text-left">
          Join Us
        </h2>
        <hr className="border-[#000000] mb-6" />

        <p className="text-lg mt-10 text-white text-left">
          Be a part of a thriving Nepali community — connect, learn, and grow
          with us!
        </p>
        <p className="text-md mb-8 text-white text-left">
          The Nepali Student Association (NSA) is more than a club — it is a
          space where you can embrace your heritage, meet like-minded friends,
          and participate in exciting events throughout the year.
        </p>

        <div className="bg-[#FAEDD6] border border-black rounded-xl px-6 py-6 space-y-5 shadow-md">
          <CheckboxItem
            id="culture"
            checked={checkboxes.culture}
            onChange={() => toggleCheckbox("culture")}
            text={
              <>
                Are you interested in{" "}
                <span className="font-bold">Nepali culture and traditions</span>
                ?
              </>
            }
          />
          <CheckboxItem
            id="participate"
            checked={checkboxes.participate}
            onChange={() => toggleCheckbox("participate")}
            text={
              <>
                Do you want to <span className="font-bold">participate</span> in
                fun events and socials?
              </>
            }
          />
          <CheckboxItem
            id="supportive"
            checked={checkboxes.supportive}
            onChange={() => toggleCheckbox("supportive")}
            text={
              <>
                Are you excited to be a part of a{" "}
                <span className="font-bold">welcoming and supportive</span>{" "}
                community?
              </>
            }
          />
        </div>

        {/* CTA Button */}
        <div className="mt-8 text-left">
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#780001] hover:bg-[#5c0000] text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-300"
          >
            Join Us Now
          </Button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsModalOpen(false)}
          />

          {/* Modal Box */}
          <div className="fixed inset-0 flex justify-center items-center z-50 px-4">
            <div className="bg-white w-full max-w-lg rounded-2xl p-6 shadow-2xl relative animate-in slide-in-from-top duration-300">
              {/* Close Button */}
              <button
                className="absolute top-3 right-4 text-2xl font-bold text-gray-600 hover:text-black"
                onClick={() => setIsModalOpen(false)}
              >
                &times;
              </button>

              <h3 className="text-2xl font-bold mb-4 text-[#780001]">
                Join the NSA Community
              </h3>

              {/* Form */}
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#780001]"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#780001]"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#780001]"
                    placeholder="Tell us a bit about your interest..."
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#780001] text-white font-semibold px-4 py-2 rounded-xl hover:bg-[#5c0000] transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

interface CheckboxItemProps {
  id: string;
  checked: boolean;
  onChange: () => void;
  text: React.ReactNode;
}

const CheckboxItem: React.FC<CheckboxItemProps> = ({
  id,
  checked,
  onChange,
  text,
}) => {
  return (
    <label htmlFor={id} className="flex items-start gap-3 cursor-pointer">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="mt-1 w-5 h-5 accent-[#780001] border-black border-2 rounded-md"
      />
      <p className="text-md text-black">{text}</p>
    </label>
  );
};

export default Join_Us;
