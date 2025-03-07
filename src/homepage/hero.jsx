import React from "react";
import HomePageImage from "../assets/HomePage.png";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center px-6 lg:px-16"
      style={{ backgroundImage: `url(${HomePageImage})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section - Text Content */}
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-white text-5xl lg:text-7xl font-bold leading-tight">
            <span className="text-green-500">Scrap</span> Smarter, <br /> Not
            Harder.
          </h1>
          <button className="mt-6 px-8 py-3 border-2 border-green-500 text-white rounded-full hover:bg-green-500 transition w-fit">
            COLLABORATE WITH US
          </button>
        </div>

        {/* Right Section - Zigzag Video Placeholders */}
        <div className="flex flex-col justify-center gap-5 mt-6">
          <div className="self-end w-56 h-36 bg-black/50 rounded-lg flex items-center justify-center">
            <button className="text-white text-3xl">▶</button>
          </div>
          <div className="self-start w-56 h-36 bg-black/50 rounded-lg flex items-center justify-center">
            <button className="text-white text-3xl">▶</button>
          </div>
          <div className="self-end w-56 h-36 bg-black/50 rounded-lg flex items-center justify-center">
            <button className="text-white text-3xl">▶</button>
          </div>
          <div className="self-start w-56 h-36 bg-black/50 rounded-lg flex items-center justify-center">
            <button className="text-white text-3xl">▶</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
