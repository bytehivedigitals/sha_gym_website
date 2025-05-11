import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/sha.webp";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Ref to detect clicks outside the menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the menu if clicked outside
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  // Add event listener to detect clicks outside the menu
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-black text-white px-4 sm:px-6 lg:px-10 py-[-2rem] h-[12rem] mt-[-4rem] flex flex-wrap justify-between items-center relative">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <img
          src={logo}
          alt="Logo"
          className="object-contain w-[8rem] sm:w-[10rem] lg:w-[15.313rem] h-auto"
        />
      </div>

      {/* Hamburger Menu for Small Screens */}
      <button
        className="text-gray-400 hover:text-white md:hidden text-[5rem] w-[5rem] h-[5rem] flex items-center justify-center"
        onClick={toggleMenu}
      >
        ☰
      </button>

      {/* Navigation Links and Contact Button */}
      <div
        ref={menuRef} // Attach ref to the menu container
        className={`absolute md:static top-[4rem] left-0 w-full md:w-auto bg-black md:bg-transparent md:flex md:items-center md:justify-center md:space-x-10 transition-all duration-300 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 text-white font-bold text-[1rem] sm:text-[1rem] lg:text-[1.300rem]">
          <li className="text-gray-400 hover:text-white cursor-pointer">
            HOME
          </li>
          <li className="text-gray-400 hover:text-white cursor-pointer">
            ABOUT
          </li>
          <li className="text-gray-400 hover:text-white cursor-pointer">
            FEATURES
          </li>
          <li className="text-gray-400 hover:text-white cursor-pointer">
            SERVICES
          </li>
        </ul>

        {/* Contact Button */}
        <button className="mt-4 md:mt-0 w-full md:w-auto !h-[3rem] !bg-white text-black font-bold !text-[1rem] sm:!text-[1.2rem] lg:!text-[1.3rem] py-2 px-4 !rounded-[2rem] flex items-center justify-center">
          CONTACT US
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
