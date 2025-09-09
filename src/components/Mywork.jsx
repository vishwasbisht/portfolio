import React from "react";
import data from "./Data";
import { Hammer } from "lucide-react";
import "../index.css"; // only if not already imported globally

const Mywork = () => {
  return (
    // Added scroll-mt-22 to prevent content from being hidden by the fixed navbar
    <div
      id="mywork"
      className="portflio-section relative w-full pt-25 bg-global-gradient text-white min-h-screen overflow-hidden scroll-mt-22"
    >
      {/* Floating Shapes */}
      <div
        className="absolute bottom-10 left-10 w-0 h-0
                   border-l-[40px] border-r-[40px] border-b-[70px]
                   border-l-transparent border-r-transparent border-b-pink-400 opacity-40 float-updown"
      ></div>

      <div className="absolute top-16 left-20 w-26 h-26 bg-blue-400 opacity-30 rounded-full float-pulse"></div>

      <div className="absolute bottom-20 right-20 w-14 h-14 bg-green-400 opacity-30 float-leftright"></div>

      <div
        className="absolute top-10 right-16 w-20 h-20 bg-yellow-400 opacity-30 float-rotate"
        style={{
          clipPath:
            "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
        }}
      ></div>

      {/* Section Heading */}
      <div className="heading flex items-center justify-center space-x-2 text-6xl relative z-10">
        <h1>
          My <span className="text-brand-gradient"> Work </span>
        </h1>
        <Hammer className="w-12 h-12 text-pink-400 hover:text-white" />
      </div>

      {/* Cards */}
      <div className="justify-center flex relative z-10">
        <div className="section-container flex flex-wrap w-[70%] gap-10 mt-12 px-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="card-container relative rounded-lg shadow-lg overflow-hidden w-72 h-48 border border-gray-500 hover:border-pink-500 transition-transform duration-300 hover:scale-110"
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/256x192/4A5568/CBD5E0?text=Image+Error";
                }}
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

              {/* Text on Image */}
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <h1 className="text-2xl font-bold text-white drop-shadow-lg">
                  {item.name}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mywork;
