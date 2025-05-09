import React from "react";
import { FaLinkedin, FaFacebook } from "react-icons/fa"; // ✅ from Font Awesome
import { FaInstagram } from "react-icons/fa";
import ShaLogo from "../../assets/sha.webp";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
        {/* Contact Section */}
        <div className="space-y-2">
          <h2 className="font-semibold">Contact</h2>
          <p>35622781288</p>
          <p>@shaagymm</p>
          <p>kozhikode, eranojipalam</p>
        </div>

        {/* Social Section */}
        <div className="flex flex-col items-center gap-4">
          <h2 className="font-semibold">Follow Us On</h2>
          <div className="flex gap-6 text-4xl">
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
        <div className="text-right space-y-2">
          <p className="text-sm">
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
    </footer>
  );
}
