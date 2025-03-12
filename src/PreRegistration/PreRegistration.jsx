import React, { useEffect, useState } from "react";
import { FaEnvelope, FaInstagram, FaLinkedin, FaPhone, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import PartnerBg from "../assets/bg.jpg";
import logo from "../assets/logonew.png";

const PreRegistrationHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full bg-transparent py-5 px-6 lg:px-16 flex justify-between items-center z-50 transition-transform duration-300 ${
      isScrolled ? "-translate-y-full" : ""
    }`}>
      {/* Logo */}
      <Link to="/" className="transform transition-transform hover:rotate-12">
        <img src={logo} alt="Logo" className="w-8 h-12" />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex space-x-8">
        {["HOME", "SERVICES", "BLOGS"].map((item) => (
          <Link
            key={item}
            to={`/#${item.toLowerCase().replace(" ", "-")}`}
            className="text-sm font-normal px-6 py-2 rounded-full transition-all border-2 border-transparent hover:border-[#26B33B] text-[#26B33B]"
          >
            {item}
          </Link>
        ))}
        <Link
          to="/about-us"
          className="text-sm font-normal px-6 py-2 rounded-full transition-all border-2 border-transparent hover:border-[#26B33B] text-[#26B33B]"
        >
          ABOUT US
        </Link>
      </nav>
    </header>
  );
};

const PreRegistration = () => {
  return (
    <>
      <PreRegistrationHeader />
      <div className="flex min-h-screen font-poppins bg-transparent">
        {/* Left Side: Branding Section */}
        <div
          className="w-1/3 relative flex flex-col items-center justify-center text-white bg-cover bg-center brightness-125"
          style={{ backgroundImage: `url(${PartnerBg})` }}
        >
          <h1 className="text-5xl font-bold text-center">Partner with Us.</h1>

          <div className="absolute bottom-10 right-10 space-y-4 text-lg text-right">
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-xl" /> ecomitrasolutions07@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <FaPhone className="text-xl" /> 79999 01514
            </p>
            <p className="flex items-center gap-2">
              <FaPhone className="text-xl" /> 96767 13970
            </p>

            {/* Social Media Icons */}
            <div className="mt-4 flex justify-end space-x-6 text-2xl">
              <a href="#" className="hover:text-gray-300"><FaLinkedin /></a>
              <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
              <a href="#" className="hover:text-gray-300"><FaXTwitter /></a>
            </div>
          </div>
        </div>

        {/* Right Side: Embedded Form */}
        <div className="w-2/3 p-10">
          <h2 className="text-2xl font-semibold mb-6">Pre Registration</h2>
          <iframe
            src="https://app.nocodb.com/#/nc/form/c52d86be-dbeb-4ba6-8bf3-5c79cbbc42ec"
            width="100%"
            height="600px"
            style={{ border: "none" }}
            title="Pre Registration Form"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default PreRegistration;
