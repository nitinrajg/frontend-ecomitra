import React from "react";
import Video from "../assets/videos/iphone.mp4"

const AppLaunch = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center px-6 lg:px-16 bg-[#000000]">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - App Launching Soon */}
        <div className="flex flex-col justify-center text-center lg:text-left items-center lg:items-start lg:pl-12">
          <h1 className="text-white text-3xl lg:text-5xl font-bold leading-snug font-poppins">
            App <span className="text-green-500">Launching</span> Soon.
          </h1>
          <p className="text-gray-300 mt-3 text-sm lg:text-lg max-w-md">
            Stay ahead and be the first to experience innovation. Join us on our
            journey.
          </p>
          <button className="mt-5 px-6 py-2 border-2 border-green-500 bg-green-500 text-white rounded-full hover:bg-transparent hover:text-green-500 transition w-fit text-sm lg:text-base">
            GET NOTIFIED
          </button>
        </div>

        {/* Right Side - Mockup Placeholder */}
        <div className="flex justify-center items-center">
          <div className="w-72 h-[500px] lg:w-96 lg:h-[600px] bg-black/50 rounded-lg flex items-center justify-center">
          <video
              src={Video}  
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            ></video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppLaunch;