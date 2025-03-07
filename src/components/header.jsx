import { useState, useEffect } from "react";
import logo from "../assets/logonew.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-transparent text-white py-5 px-6 lg:px-16 flex justify-between items-center z-50 backdrop-blur-md transition-transform ${
        isScrolled ? "-translate-y-full" : ""
      }`}
    >
      {/* Logo */}
      <a href="/" className="transform transition-transform hover:rotate-12">
        <img src={logo} alt="Logo" className="w-8 h-12" />
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex space-x-8">
        {["HOME", "SERVICES", "BLOGS", "ABOUT US"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(" ", "-")}`}
            className="text-sm font-normal px-6 py-2 rounded-full transition-all border-2 border-transparent hover:border-[#26B33B] hover:bg-transparent hover:text-[#26B33B]"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#111111]/80 backdrop-blur-md flex flex-col items-center space-y-6 py-6 lg:hidden">
          {["HOME", "SERVICES", "BLOGS", "ABOUT US"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-sm font-normal px-6 py-2 transition-all border-b border-transparent hover:border-[#26B33B] hover:text-[#26B33B]"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
