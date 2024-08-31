import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          {/* Company Info Section */}
          <div className="w-full sm:w-1/2 lg:w-1/3 mb-8 sm:mb-0">
            <h4 className="text-lg font-bold mb- uppercase">kanban flow</h4>
            <p className="mb-6 text-sm italic text-slate-400">
              Where ideas flow into action
            </p>
            <div className="text-slate-400">
              {/* Contact Information */}
              <p>Darbhanga, Bihar</p>
              <p>Email: akashkashyapy@gmail.com</p>
              <p>Phone: +91-8434341886</p>
            </div>
          </div>

          {/* Social Media Icons Section */}
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {/* LinkedIn Icon */}
              <Link
                to="https://www.linkedin.com/in/akash-gupta-766026309/"
                aria-label="Linkedin"
              >
                <img src="/linkedin.png" alt="LinkedIn icon" className="w-9" />
              </Link>
              {/* Instagram Icon */}
              <Link to="https://www.instagram.com" aria-label="Instagram">
                <img
                  src="/instagram_2111463.png"
                  alt="Instagram icon"
                  className="w-8"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="mt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Kanban Flow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
