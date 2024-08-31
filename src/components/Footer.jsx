import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          {/* Company Info Section */}
          <div className="w-full sm:w-1/2 lg:w-1/3 mb-8 sm:mb-0">
            <h4 className="text-lg font-bold mb-4 uppercase">kanban flow</h4>
            <p>darbhanga, bihar</p>
            <p>Email: akashkashyapy@gmail.com</p>
            <p>Phone: +91-8434341886</p>
          </div>
          <div className="mb-5">
          <ul className="flex justify-center gap-5">
            <li className="w-8">
              
            </li>
            <li className="w-8">
              
            </li>
            <li className="w-8">
              
            </li>
          </ul>
        </div>

          {/* Social Media Icons Section */}
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
            <Link
                to="https://www.facebook.com/profile.php?id=100010296425247&mibextid=ZbWKwL"
                aria-label="Facebook"
              >
                <img src="/facebook_2504903.png" alt="Facebook icon" className='w-8'/>
              </Link>
              <Link to="https://www.instagram.com" aria-label="Instagram">
                <img src="/instagram_2111463.png" alt="Instagram icon" className='w-8' />
              </Link>
              <Link
                to="https://www.linkedin.com/in/akash-gupta-766026309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                aria-label="LinkedIn"
              >
                <img src="/twitter_3670151.png" alt="LinkedIn icon" className='w-8'/>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
