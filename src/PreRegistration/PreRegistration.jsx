import React from "react";
import { FaEnvelope, FaInstagram, FaLinkedin, FaPhone, FaXTwitter } from "react-icons/fa6";
import PartnerBg from "../assets/bg.jpg";

const PreRegistration = () => {
  return (
    <div className="flex overflow-x-hidden flex-col min-h-screen bg-transparent md:flex-row font-poppins">
      {/* Left Side: Branding Section - Hidden on mobile/tablet */}
      <div
        className="hidden overflow-x-hidden relative flex-col justify-center items-center w-full text-white bg-center bg-cover brightness-125 md:flex md:w-1/3"
        style={{ backgroundImage: `url(${PartnerBg})` }}
      >
        <h1 className="px-4 text-4xl font-bold text-center md:text-5xl">Partner with Us.</h1>

        <div className="absolute right-10 bottom-10 px-4 space-y-4 max-w-full text-base text-right md:text-lg">
          <p className="flex flex-wrap gap-2 justify-end items-center">
            <FaEnvelope className="text-xl" /> ecomitrasolutions07@gmail.com
          </p>
          <p className="flex gap-2 justify-end items-center">
            <FaPhone className="text-xl" /> 79899 01514
          </p>
          <p className="flex gap-2 justify-end items-center">
            <FaPhone className="text-xl" /> 96767 13970
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-end mt-4 space-x-6 text-2xl">
            <a href="https://www.linkedin.com/company/eco-mitra/?viewAsMember=true" className="hover:text-gray-300"><FaLinkedin /></a>
            <a href="https://www.instagram.com/ecomitra.in/" className="hover:text-gray-300"><FaInstagram /></a>
            <a href="https://x.com/ecomitraind?t=hjh54id3hhc9k7GQTeYXqw" className="hover:text-gray-300"><FaXTwitter /></a>
          </div>
        </div>
      </div>

      {/* Right Side: Embedded Form */}
      <div className="overflow-x-hidden p-4 w-full md:w-2/3 md:p-10">
        <iframe
          src="https://app.nocodb.com/#/nc/form/c52d86be-dbeb-4ba6-8bf3-5c79cbbc42ec"
          width="100%"
          height="600px"
          style={{ border: "none" }}
          title="Pre Registration Form"
        ></iframe>
      </div>
    </div>
  );
};

export default PreRegistration;
