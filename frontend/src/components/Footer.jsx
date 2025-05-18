import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-soft-lavender text-gray-800">
      <div className="max-w-7xl mx-auto py-20 px-4">
        <div className="flex w-full mb-4">
          <div className=" flex-1">
            <h1>EternaLink </h1>
            <p>
              Honor, remember, and celebrate the lives of your loved ones
              through digital memorials.
            </p>
          </div>
          <div className="flex-1 ">
            <div className="flex justify-around">
              <div>
                <h1>Resources</h1>
                <ul>
                  <li>How It Works</li>
                  <li>Pricing</li>
                  <li>FAQ</li>
                </ul>
              </div>
              <div>
                <h1>Support</h1>
                <ul>
                  <li>Contact Us</li>
                  <li>Help Center</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              <div>
                <h1>Connect</h1>
                <ul>
                  <li>Facebook</li>
                  <li>Twitter</li>
                  <li>Instagram</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-gray-400/50 mb-4"></div>
        <div className="flex justify-between items-center w-full">
          <p>© 2025 EternaLink. All rights reserved.</p>
          <p>Made with ❤️ for preserving memories</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
