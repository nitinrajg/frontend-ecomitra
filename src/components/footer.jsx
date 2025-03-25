import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import footerLogo from "../assets/footer_logo.png";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-[#111111] text-white py-8 px-4 md:py-12 md:px-20">
      <div className="w-full mx-auto flex flex-wrap justify-between items-start">
        {/* Left Section */}
        <div className="w-full md:w-1/3">
          <img src={footerLogo} alt="Eco-mitra" className="w-16 h-16 mb-4" />
          <p className="text-lg mb-2">+91 7989901514</p>
          <a
            href="mailto:ecomitrasolutions07@gmail.com"
            className="border-b border-white/40 hover:border-[#26B33B] transition duration-300"
          >
            ecomitrasolutions07@gmail.com
          </a>
          <p className="mt-4 mb-4">
            H. No 9-110/77/2, <br />
            Gayatri Nagar, Boduppal, <br />
            Hyderabad <br />
            500039
          </p>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col w-full md:flex-row md:w-2/3 justify-start md:justify-around gap-8 mt-8 md:mt-0">
          <div>
            <h4 className="text-[#26B33B] font-bold mb-3">BUSINESS</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigation("/scrap-selling")}
                  className="border-b border-white/40 hover:border-[#26B33B] transition duration-300"
                >
                  Scrap Selling
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/eco-life")}
                  className="border-b border-white/40 hover:border-[#26B33B] transition duration-300"
                >
                  Eco Kind
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/business")}
                  className="border-b border-white/40 hover:border-[#26B33B] transition duration-300"
                >
                  Business
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#26B33B] font-bold mb-3">COMPANY</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigation("/about-us")}
                  className="border-b border-white/40 hover:border-[#26B33B] transition duration-300"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/")}
                  className="border-b border-white/40 hover:border-[#26B33B] transition duration-300"
                >
                  Blogs
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/pre-registration")}
                  className="border-b border-white/40 hover:border-[#26B33B] transition duration-300"
                >
                  Collaboration
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#26B33B] font-bold mb-3">HELP</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigation("/pre-registration")}
                  className="border-b border-white/40 hover:border-[#26B33B] transition duration-300"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/privacy-policy")}
                  className="border-b border-white/40 hover:border-[#26B33B] transition duration-300"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/terms")}
                  className="border-b border-white/40 hover:border-[#26B33B] transition duration-300"
                >
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Button */}
        <div className="w-full md:w-auto mt-8 md:mt-0">
          <button
            onClick={() => handleNavigation("/pre-registration")}
            className="bg-[#26B33B] hover:bg-[#26B33B] text-white px-6 py-3 rounded-lg font-semibold inline-block"
          >
            CONTACT US
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-[#26B33B] mt-8 pt-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-center text-sm">
          Eco-mitra.in.
          <br />
          All rights reserved. A Make in India initiative.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://www.instagram.com/ecomitra.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-[#26B33B] transition duration-300 text-2xl"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/eco-mitra/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-[#26B33B] transition duration-300 text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/ecomitraind?t=hjh54id3hhc9k7GQTeYXqw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-[#26B33B] transition duration-300 text-2xl"
          >
            <FaXTwitter />
          </a>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
