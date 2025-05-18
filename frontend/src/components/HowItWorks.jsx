import React from "react";
import { FaImage } from "react-icons/fa6";

function HowItWorks() {
  return (
    <div className=" w-full bg-amber-50 ">
      <div className="max-w-7xl mx-auto px-4 py-20 ">
        <div className="text-2xl font-medium ">
          <h1 className="mb-4 text-center">How EternaLink Works</h1>
          <div className="grid grid-cols-4 gap-8 p-8 border-2 text-center">
            <div>
              <div className="flex justify-center text-4xl">
                <FaImage />
              </div>
              <h2>Create a Memorial</h2>
              <p>
                Sign up and create a beautiful tribute page for your loved one
                with their story, photos, and videos.
              </p>
            </div>
            <div>
              <div className="flex justify-center text-4xl">
                <FaImage />
              </div>
              <h2>Upload Memories</h2>
              <p>
                Add photos, videos, and written memories that celebrate their
                life and preserve their legacy.
              </p>
            </div>
            <div>
              <div className="flex justify-center text-4xl">
                <FaImage />
              </div>
              <h2>Generate QR Code</h2>
              <p>
                Place a unique QR code at the grave site that links directly to
                their digital memorial.
              </p>
            </div>
            <div>
              <div className="flex justify-center text-4xl">
                <FaImage />
              </div>
              <h2>Share & Connect</h2>
              <p>
                Share the memorial with family and friends, allowing everyone to
                contribute their own memories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
