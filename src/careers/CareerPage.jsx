import React from "react";
import { Link } from "react-router-dom";
import cuate from "../assets/cuate.png"; // Add this import

const CareerPage = () => {
  const jobs = [
    {
      title: "Frontend Developer",
      description:
        "Ecomitra is looking for a Frontend Developer to create seamless, user-friendly interfaces for our sustainable scrap management platform. If you have experience building interactive and responsive web applications and want to be part of a fast-growing startup making a real impact, we'd love to have you on board!",
    },
    {
      title: "Backend Developer",
      description:
        "Ecomitra is looking for a Backend Developer to build and optimize the core systems powering our sustainable scrap management platform. If you have experience in developing scalable APIs, managing databases, and ensuring secure, high-performance backend operations, join our fast-growing startup and make a real impact!",
    },
    {
      title: "UI/UX Designer",
      description:
        "Ecomitra is looking for a UI/UX Designer to craft intuitive and visually appealing experiences for our sustainable scrap management platform. If you have a passion for user-centered design, creating seamless interfaces, and enhancing digital experiences, join our fast-growing startup and help shape the future of sustainability.",
    },
    {
      title: "Content Creator",
      description:
        "Ecomitra is looking for a Content Creator to craft engaging and impactful content that promotes sustainability and waste management awareness. If you have a knack for storytelling, creating compelling digital content, and driving audience engagement, join our fast-growing startup and help spread the message of a greener future!",
    },
    {
      title: "Video Editor",
      description:
        "Ecomitra is looking for a Video Editor to create engaging and impactful visual content that promotes sustainability and waste management awareness. If you have a passion for storytelling, experience in editing high-quality videos, and a creative eye for compelling visuals, join our fast-growing startup and help inspire a greener future!",
    },
  ];

  return (
    <div className="overflow-x-hidden w-full">
      <div className="min-h-[60vh] md:min-h-screen flex flex-col md:flex-row items-center bg-black text-white px-4 sm:px-8 md:px-16 lg:px-32">
        {/* Left Section - Text Content */}
        <div className="flex-1 w-full md:w-auto pt-20 pb-6 md:py-0">
          <h1 className="text-4xl md:text-5xl font-bold text-[#26B33B] mb-6">
            Careers at Eco Mitra
          </h1>
          <p className="text-lg max-w-2xl mb-6">
            At Ecomitra, we are on a mission to revolutionize waste management
            and recycling through technology and innovation. Our platform
            connects scrap merchants, industries, and individuals, ensuring a
            transparent, efficient, and eco-friendly waste disposal system.
          </p>
          <p className="text-lg max-w-2xl mb-8">
            If you're passionate about sustainability, technology, and making a
            real impact, Ecomitra is the place for you!
          </p>
          <Link 
            to="#job-listings" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('job-listings').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <button className="bg-[#26B33B] text-white px-6 py-3 rounded-full text-lg hover:bg-[#1f8f2f] transition">
              Open positions
            </button>
          </Link>
        </div>

        {/* Right Section - Illustration */}
        <div className="hidden md:flex flex-1 justify-center">
          <img
            src={cuate}
            alt="Career at Eco Mitra"
            className="max-w-full md:max-w-md"
          />
        </div>
      </div>

      {/* Job Listings Section */}
      <div
        id="job-listings"
        className="px-4 sm:px-6 md:px-20 lg:px-40 py-16 bg-black -mt-1" // Added -mt-1 to remove gap
      >
        <h2 className="text-4xl text-white font-bold mb-10">Open Positions</h2>

        <div className="flex flex-col gap-6">
          {jobs.map((job, index) => (
            <div key={index} className="bg-green-900 p-6 rounded-2xl text-white">
              {/* Job Title */}
              <h3 className="text-2xl font-bold mb-2">{job.title}</h3>

              {/* Job Type Badges */}
              <div className="flex gap-2 mb-4">
                <span className="bg-[#26B33B] text-sm px-3 py-1 rounded-full">
                  Intern
                </span>
                <span className="bg-[#26B33B] text-sm px-3 py-1 rounded-full">
                  Full-time
                </span>
              </div>

              {/* Job Description */}
              <p className="text-base mb-4">{job.description}</p>

              {/* Apply Button */}
              <Link to="/careers/apply">
                <button className="bg-[#26B33B] text-white px-5 py-2 rounded-full text-lg font-semibold hover:bg-[#1f8f2f] transition flex items-center gap-2">
                  Apply now <span>➡</span>
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerPage;
