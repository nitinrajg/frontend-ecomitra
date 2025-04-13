import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logonew.png";
import { supabase } from "../config/supabase";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user);
    };
    getSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/');
    window.location.reload();
  };

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

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-transparent text-white py-5 px-6 lg:px-16 flex justify-between items-center z-50 transition-transform ${
        isScrolled ? "-translate-y-full" : ""}`}
    >
      {/* Logo */}
      <Link to="/" className="transition-transform transform hover:rotate-12">
        <img src={logo} alt="Logo" className="w-12 h-16" />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden space-x-8 lg:flex">
        {["HOME", "SERVICES", "CAREERS"].map((item) => (
          <button
            key={item}
            className="text-sm font-normal px-6 py-2 rounded-full transition-all border-2 border-transparent hover:border-[#26B33B] hover:bg-transparent hover:text-[#26B33B]"
            onClick={() => {
              if (item === "SERVICES") {
                scrollToSection("services");
              } else if (item === "CAREERS") {
                window.location.href = "/careers";
              } else {
                window.location.href = "/";
              }
            }}
          >
            {item}
          </button>
        ))}
        <Link
          to="/about-us"
          className="text-sm font-normal px-6 py-2 rounded-full transition-all border-2 border-transparent hover:border-[#26B33B] hover:bg-transparent hover:text-[#26B33B]"
        >
          ABOUT US
        </Link>
        {user ? (
          <div className="relative">
            <button 
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-400 text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setShowDropdown(false)}
                >
                  Profile
                </Link>
                <button
                  onClick={handleSignOut}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/login"
            className="text-sm font-normal px-6 py-2 rounded-full transition-all border-2 border-transparent hover:border-[#26B33B] hover:bg-transparent hover:text-[#26B33B]"
          >
            LOGIN
          </Link>
        )}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden focus:outline-none z-[9999] relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-8 h-8 text-[#26B33B]"
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
        <div className="fixed top-16 left-0 w-full bg-[#111111]/80 backdrop-blur-md flex flex-col items-center space-y-6 py-6 lg:hidden z-[9998]">
          {["HOME", "SERVICES", "CAREERS"].map((item) => (
            <button
              key={item}
              className="text-sm font-normal w-full text-center px-4 py-2 transition-all border-b border-transparent hover:border-[#26B33B] hover:text-[#26B33B]"
              onClick={() => {
                setIsOpen(false);
                if (item === "SERVICES") {
                  scrollToSection("services");
                } else if (item === "CAREERS") {
                  window.location.href = "/careers";
                } else {
                  window.location.href = "/";
                }
              }}
            >
              {item}
            </button>
          ))}
          <Link
            to="/about-us"
            className="text-sm font-normal w-full text-center px-4 py-2 transition-all border-b border-transparent hover:border-[#26B33B] hover:text-[#26B33B]"
            onClick={() => setIsOpen(false)}
          >
            ABOUT US
          </Link>
          {user ? (
          <div className="w-full">
            <Link
              to="/profile"
              className="text-sm font-normal w-full text-center px-4 py-2 transition-all border-b border-[#26B33B] hover:border-[#26B33B] hover:text-[#26B33B]"
              onClick={() => setIsOpen(false)}
            >
              Profile
            </Link>
            <button
              onClick={() => {
                setIsOpen(false);
                handleSignOut();
              }}
              className="text-sm font-normal w-full text-center px-4 py-2 transition-all border-b border-[#26B33B] hover:border-[#26B33B] hover:text-[#26B33B]"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="text-sm font-normal w-full text-center px-4 py-2 transition-all border-b border-[#26B33B] hover:border-[#26B33B] hover:text-[#26B33B]"
            onClick={() => setIsOpen(false)}
          >
            LOGIN
          </Link>
        )}
        </div>
      )}
    </header>
  );
};

export default Header;