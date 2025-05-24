import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/sha (1).webp";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const navItems = ["home", "about", "features", "services"];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("home");
  const menuRef = useRef();
  const navbarRef = useRef();
  const [navHeight, setNavHeight] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    
    if (navbarRef.current) {
      setNavHeight(navbarRef.current.offsetHeight);
    }
  }

  const handleNavClick = (item) => {
    setActiveItem(item);
    setIsMenuOpen(false);
    const section = document.getElementById(item);
    if (section) {
      const yOffset = -(document.getElementById("navbar").getBoundingClientRect().height);
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav 
      id="navbar"
      ref={navbarRef}
      className="bg-black text-white px-4 sm:px-6 py-4 flex items-center justify-between sticky top-0 z-50 w-full"
    >
      {/* Logo */}
      <img
        src={logo}
        alt="SHA Logo"
        className="w-[7rem] md:w-[9rem] h-auto object-contain 
                  hover:filter hover:saturate-100 hover:hue-rotate-0 hover:invert-[.30] 
                  hover:sepia-[.90] hover:drop-shadow-[0_0_10px_#f5deb3] transition-all duration-300" 
      />

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex gap-8 lg:gap-14 font-semibold text-sm uppercase">
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
      <button 
        className="hidden md:block bg-white text-black font-bold text-lg lg:text-xl mr-4 px-4 lg:px-5 py-1 rounded-full
        hover:bg-transparent hover:text-[#f5deb3] hover:border-2 hover:border-[#f5deb3] 
        hover:shadow-[0_0_10px_#f5deb3] transition-all duration-300"
        onClick={() => handleNavClick("contact")}
      >
        CONTACT US
      </button>

      {/* Hamburger Icon */}
      <button 
        className="md:hidden text-white text-2xl z-50 cursor-pointer" 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>

      {/* Mobile Drawer */}
      <div
        ref={menuRef}
        className={`fixed right-0 h-full w-full bg-black z-50 p-6 transform transition-transform duration-500 ${isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        style={{
          top: isMenuOpen ? `${navHeight}px` : '0'
        }}
      >
        <ul className="flex flex-col gap-12 ml-2 font-bold text-white uppercase text-xl">
          {navItems.map((item) => (
            <li
              key={item}
              onClick={() => handleNavClick(item)}
              className={`cursor-pointer transition-colors duration-300 ${
                activeItem === item
                  ? "text-white"
                  : "text-white opacity-50 hover:opacity-100 hover:text-yellow-400 hover:scale-y-110"
              }`}
            >
              {item}
            </li>
          ))}
          <li>
            <button className="mt-4 w-full bg-white text-black rounded-full py-2 text-center font-semibold hover:bg-yellow-400" onClick={() => handleNavClick("contact")}>
              Contact Us
            </button>
          </li>
        </ul>
        {/* Social Icons in the center */}
        <div className="w-full flex flex-col py-8 mt-4 items-center space-y-8">
          <h2 className="font-semibold text-lg">Follow Us On</h2>
          <div className="flex gap-12 text-4xl">
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-500">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/shahealthstudio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" aria-label="Instagram" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-blue-700">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
