import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import ShaLogo from "../../assets/sha.webp";

export default function Footer() {
  return (
    <footer className="footer-container bg-black text-white py-6 px-6 md:px-16 mt-5">
      {/* Desktop Layout */}
      <div className="hidden md:flex justify-between items-start max-w-full">
        {/* Contact Section on far left */}
        <div className="w-1/3 pl-2 py-5 space-y-4 text-left">
          <h2 className="font-semibold text-lg">Contact</h2>
          <p className="flex items-center gap-2 text-sm">
            <MdPhone className="text-base" /> +91 79074 67576
          </p>
          <p className="flex items-center gap-2 text-sm">
            <MdEmail className="text-base" /> shahelathstudio@gmail.com
          </p>
          <p className="flex items-center gap-2 text-sm">
            <MdLocationOn className="text-base" />
            Wayanad Rd, Eranhipaalam, Eranhippalam, Kozhikode, Kerala 673020
          </p>
        </div>

        {/* Social Icons in the center */}
        <div className="w-1/3 flex flex-col py-8 items-center space-y-8">
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

        {/* Paragraph + Logo on far right */}
        <div className="w-1/3 pr-2 py-5 text-right space-y-5">
          <p className="text-sm leading-snug">
            Your Go-To For <br />
            Personalized Workouts, <br />
            Meal Plans, And Expert <br />
            Fitness Advice
          </p>
          <img src={ShaLogo} alt="SHA Logo" className="w-28 ml-auto md:-mt-8" />
        </div>
      </div>

      {/* Mobile Layout: all sections stacked and centered */}
      <div className="md:hidden mt-8 px-6 space-y-10 text-center">
        {/* Contact Section */}
        <div className="space-y-2">
          <h2 className="font-semibold text-lg">Contact</h2>
          <p className="flex justify-center items-center gap-2 text-sm">
            <MdPhone className="text-base" /> +91 79074 67576
          </p>
          <p className="flex justify-center items-center gap-2 text-sm">
            <MdEmail className="text-base" /> shahelathstudio@gmail.com
          </p>
          <p className="flex justify-center items-center gap-2 text-sm">
            <MdLocationOn className="text-base" />
            Wayanad Rd, Eranhipaalam, Eranhippalam, Kozhikode, Kerala 673020
          </p>
        </div>

        {/* Social Icons */}
        <div className="space-y-2">
          <h2 className="font-semibold text-lg">Follow Us On</h2>
          <div className="flex justify-center gap-5 text-2xl">
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-500">
              <FaLinkedin />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-blue-700">
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Paragraph + Logo */}
        <div className="space-y-3 max-w-xs mx-auto">
          <p className="text-sm leading-snug">
            Your Go-To For <br />
            Personalized Workouts, <br />
            Meal Plans, And Expert <br />
            Fitness Advice
          </p>
          <img src={ShaLogo} alt="SHA Logo" className="w-28 mx-auto" />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-xs text-gray-400 border-t border-gray-700 pt-2 mt-4">
        All rights reserved by SHA GYM @2025 | Design and Developed by{" "}
        <a
          href="https://www.bytehive.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-300"
        >
          ByteHive
        </a>
      </div>
    </footer>
  );
}
