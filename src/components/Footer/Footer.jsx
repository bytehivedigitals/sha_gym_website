import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import ShaLogo from "../../assets/sha.webp";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
        {/* Contact Section */}
        <div className="space-y-2 md:space-y-4">
          <h2 className="font-semibold text-lg md:text-xl">Contact</h2>
          <p className="flex items-center gap-2 text-sm md:text-base">
            <MdPhone className="text-xl" /> 35622781288
          </p>
          <p className="flex items-center gap-2 text-sm md:text-base">
            <MdEmail className="text-xl" /> @shaagymm
          </p>
          <p className="flex items-center gap-2 text-sm md:text-base">
            <MdLocationOn className="text-xl" /> Kozhikode, Eranojipalam
          </p>
        </div>

        {/* Social Section */}
        <div className="flex flex-col items-center gap-4 md:items-start">
          <h2 className="font-semibold text-lg md:text-xl">Follow Us On</h2>
          <div className="flex gap-6 text-4xl md:text-5xl">
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Description + Logo */}
        <div className="text-center md:text-right space-y-2 md:space-y-4">
          <p className="text-sm md:text-base">
            Your Go-To For <br />
            Personalized Workouts, <br />
            Meal Plans, And Expert <br />
            Fitness Advice
          </p>
          <div>
            <img
              src={ShaLogo}
              alt="SHA Logo"
              className="w-32 mx-auto md:ml-auto"
            />
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-black text-white py-4 text-center">
        <p className="text-xs md:text-sm">
          All rights reserved by SHA GYM @2025 | Design and Developed by{" "}
          <a
            href="https://www.bytehive.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-300"
          >
            ByteHive
          </a>
        </p>
      </div>
    </footer>
  );
}
