import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center px-4 sm:px-6 lg:px-16 overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/herobg.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      <div className="relative z-20 w-full max-w-[100vw] grid grid-cols-1 lg:grid-cols-2 gap-8 py-12 lg:py-0">
        {/* Left Section - Text Content */}
        <div className="flex flex-col justify-center h-full text-center lg:text-left">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
            <span className="text-green-500">Scrap</span> Smarter, <br className="hidden sm:block" /> Not
            Harder.
          </h1>
          
          {/* Button for Pre-Registration Navigation */}
          <Link to="/pre-registration" className="mx-auto lg:mx-0">
            <button className="mt-6 px-6 sm:px-8 py-3 border-2 border-green-500 text-white rounded-full hover:bg-green-500 hover:text-black transition w-fit text-sm sm:text-base">
              COLLABORATE WITH US
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;