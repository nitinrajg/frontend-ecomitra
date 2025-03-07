import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import footerLogo from "../assets/footer_logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white py-12 px-20">
      <div className="container mx-auto flex flex-wrap justify-between items-start">
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
            Malla Reddy Engineering College, <br />
            Maisammaguda, Dhulapally, Kompally, <br />
            Secunderabad, Hyderabad, Telangana <br />
            500100
          </p>
        </div>

        {/* Middle Section */}
        <div className="flex w-full md:w-2/3 justify-around mt-8 md:mt-0">
          <div>
            <h4 className="text-[#26B33B] font-bold mb-3">BUSINESS</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="border-b border-white/40 hover:border-[#26B33B] transition duration-300"
                >
                  Scrap Selling
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="border-b border-white/40 hover:border-[#26B33B] transition duration-300"
                >
                  Eco Kind
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="border-b border-white/40 hover:border-[#26B33B] transition duration-300"
                >
                  Business
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#26B33B] font-bold mb-3">COMPANY</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="border-b border-white/40 hover:border-[#26B33B] transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="border-b border-white/40 hover:border-[#26B33B] transition duration-300"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="border-b border-white/40 hover:border-[#26B33B] transition duration-300"
                >
                  Collaboration
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#26B33B] font-bold mb-3">HELP</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="border-b border-white/40 hover:border-[#26B33B] transition duration-300"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="border-b border-white/40 hover:border-[#26B33B] transition duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="border-b border-white/40 hover:border-[#26B33B] transition duration-300"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Button */}
        <div className="w-full md:w-auto mt-8 md:mt-0">
          <button className="bg-[#26B33B] hover:bg-[#26B33B] text-white px-6 py-3 rounded-lg font-semibold">
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
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-[#26B33B] transition duration-300 text-2xl"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-[#26B33B] transition duration-300 text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-[#26B33B] transition duration-300 text-2xl"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-[#26B33B] transition duration-300 text-2xl"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
