import React from "react";

function Features() {
  return (
    <div className="w-full bg-amber-200 ">
      <div className="max-w-7xl mx-auto px-4 py-20 ">
        <div className="text-2xl font-medium ">
          <div className="mb-4 text-center">
            <h1>Features</h1>
            <p>Everything you need to create a lasting digital memorial</p>
          </div>
          <div className="grid grid-cols-2 gap-8 p-8 border-2">
            <div>
              <h2>Create Beautiful Memorial Pages</h2>
              <p>
                Design a personalized memorial page with photos, videos, and
                stories that honor your loved one's legacy.
              </p>
            </div>
            <div>
              <h2>Share Memories & Media</h2>
              <p>
                Upload photos and videos, write stories, and invite family and
                friends to contribute their own memories.
              </p>
            </div>
            <div>
              <h2>QR Code Integration</h2>
              <p>
                Connect physical memorials to digital ones with scannable QR
                codes that link directly to your loved one's page.
              </p>
            </div>
            <div>
              <h2>Share With Family & Friends</h2>
              <p>
                Easily share the memorial with family and friends through email,
                social media, or direct links with customizable privacy
                settings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
