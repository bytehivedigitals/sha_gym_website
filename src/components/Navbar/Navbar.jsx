import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/sha (1).webp";

const navItems = ["Home", "About", "Features", "Services"];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const menuRef = useRef();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (item) => {
    setActiveItem(item);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-black text-white px-6 py-6 flex items-center justify-between sticky top-0 z-50">
      {/* Logo */}
      <img
        src={logo}
        alt="SHA Logo"
        className="w-[9rem] ml-8 h-auto object-contain 
                    hover:filter hover:saturate-100 hover:hue-rotate-0 hover:invert-[.30] hover:sepia-[.90] hover:drop-shadow-[0_0_10px_#f5deb3] transition-all duration-300" />

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex gap-14 font-semibold text-sm uppercase">
        {navItems.map((item) => (
          <li
            key={item}
            className={`cursor-pointer transition-opacity duration-300 ${
              activeItem === item
                ? "text-white"
                : "text-white opacity-50 hover:opacity-100 hover:text-yellow-400 hover:scale-120"
            }`}
            onClick={() => handleNavClick(item)}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Contact Us Button */}
      <button className="hidden md:block bg-white text-black font-bold text-xl mr-6 px-5 py-1.5 rounded-full
      hover:bg-transparent hover:text-[#f5deb3] hover:border-2 hover:border-[#f5deb3] hover:shadow-[0_0_10px_#f5deb3]  transition-all duration-300 ">
        CONTACT US
      </button>

      {/* Hamburger Icon */}
      <button className="md:hidden text-white text-3xl" onClick={toggleMenu}>
        <FiMenu />
      </button>

      {/* Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-40 transition-opacity duration-300"></div>
      )}

      {/* Mobile Drawer */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 h-full w-[75%] sm:w-[60%] bg-black z-50 p-6 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <img src={logo} alt="SHA Logo" className="w-[8rem] h-auto" />
          <button onClick={toggleMenu} className="text-white text-3xl">
            <FiX />
          </button>
        </div>

        <ul className="flex flex-col gap-6 font-bold text-white uppercase text-lg">
          {navItems.map((item) => (
            <li
              key={item}
              onClick={() => handleNavClick(item)}
              className={`cursor-pointer ${
                activeItem === item
                  ? "text-white"
                  : "text-white opacity-50 hover:opacity-100"
              }`}
            >
              {item}
            </li>
          ))}
          <li>
            <button className="mt-4 w-full bg-white text-black rounded-full py-2 text-center font-semibold">
              Contact Us
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
