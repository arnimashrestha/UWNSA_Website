import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#FAEDD6] border-t border-[#CCCCCC] text-[#780001] py-10 mt-10">
      <div className="w-[90%] max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Organization Info */}
        <div>
          <h3 className="text-xl font-bold mb-2">Nepali Student Association</h3>
          <p className="text-sm text-gray-700">
            Celebrating Nepali culture and fostering community at the University
            of Waterloo.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#team" className="hover:underline">
                Meet The Team
              </a>
            </li>
            <li>
              <a href="#events" className="hover:underline">
                Events
              </a>
            </li>
            <li>
              <a href="#join" className="hover:underline">
                Join Us
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-2">Contact</h3>
          <ul className="text-sm space-y-1 text-gray-700">
            <li>
              Email:{" "}
              <a
                href="mailto:nsa@uwaterloo.ca"
                className="text-[#780001] hover:underline"
              >
                nsa@uwaterloo.ca
              </a>
            </li>
            <li>
              Instagram:{" "}
              <a
                href="https://instagram.com"
                target="_blank"
                className="hover:underline"
              >
                @uw_nsa
              </a>
            </li>
            <li>Location: University of Waterloo, Ontario</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-600 mt-10">
        © {new Date().getFullYear()} Nepali Student Association. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
