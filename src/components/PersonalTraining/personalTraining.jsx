import React, { useState } from "react";
import pre1 from "../../assets/Gym-6.webp";
import pre2 from "../../assets/pre1.webp";  
import pre3 from "../../assets/pre2.webp";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const packages = [
  {
    name: "SILVER",
    price: "8499",
    bg: "bg-gray-500/80",
    overlay: "bg-gray-800/40",
    button: "bg-white text-gray-800",
    img: pre3,
  },
  {
    name: "GOLD",
    price: "9999",
    bg: "bg-yellow-700/80",
    overlay: "bg-yellow-900/40",
    button: "bg-white text-yellow-700",
    img: pre1,
  },
  {
    name: "BRONZE",
    price: "6999",
    bg: "bg-orange-900/80",
    overlay: "bg-orange-950/40",
    button: "bg-white text-orange-950",
    img: pre2,
  },
];

export default function PersonalTrainingPackages({id}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPackage = () => {
    setCurrentIndex((prev) => (prev === packages.length - 1 ? 0 : prev + 1));
  };

  const prevPackage = () => {
    setCurrentIndex((prev) => (prev === 0 ? packages.length - 1 : prev - 1));
  };

  return (
    <div id={id} className="personal-trainer-section min-h-screen bg-[black] flex flex-col items-center px-2 py-30">
      <h1 className="text-white text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold text-center tracking-wide font-['Russo_One',sans-serif]">
        Personal Training <br className="hidden xs:block" /> Packages
      </h1>
      <p className="text-gray-400 font-semibold mt-6 text-center tracking-wide text-base xs:text-lg md:text-xl max-w-xl">
        We're Your Partner In Achieving A Healthier, Stronger, And More Confident You.
      </p>

      {/* Mobile View (single card with arrows) */}
      <div className="md:hidden relative flex items-center justify-center w-full mt-10">
        {/* Left Arrow */}
        <button
          onClick={prevPackage}
          className="absolute left-2 z-20 p- rounded-full hover:bg-white/20 transition"
        >
          <FaArrowLeft className="w-6 h-6 text-white" />
        </button>

        {/* Package Card */}
        <div
          className={`
            relative rounded-3xl flex flex-col items-center justify-center shadow-xl overflow-hidden
            ${packages[currentIndex].bg}
            w-[80vw] h-[800px] xs:h-[480px] transition-all duration-300
          `}
        >
          {/* Background Image with Overlay */}
          <img
            src={packages[currentIndex].img}
            alt={packages[currentIndex].name}
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className={`absolute inset-0 ${packages[currentIndex].overlay}`} />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center px-4 py-6 h-full justify-between">
            <div>
              <div className="text-white text-4xl font-extrabold text-center font-['Russo_One',sans-serif]">
                {packages[currentIndex].name}
              </div>
              <div className="text-white text-4xl font-extrabold text-center font-['Russo_One',sans-serif] mt-4">
                {packages[currentIndex].price}
              </div>
            </div>
            <p className="text-white text-sm font-semibold text-center mt-4 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button
              className={`mt-2 px-8 py-2 rounded-md font-bold text-lg font-['Russo_One',sans-serif] ${packages[currentIndex].button} transition duration-200 shadow hover:scale-105 cursor-pointer`}
            >
              JOIN NOW
            </button>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextPackage}
          className="absolute right-2 z-20 p- rounded-full hover:bg-white/20 transition"
        >
          <FaArrowRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Mobile Indicators */}
      <div className="md:hidden mt-6 flex justify-center gap-2">
        {packages.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>

      {/* Desktop View (all cards) */}
      <div className="hidden md:flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-16 xl:gap-20 mt-10 md:mt-16 w-full items-center justify-center">
        {packages.map((pkg, i) => (
          <div
            key={pkg.name}
            className={`
              relative rounded-3xl flex flex-col items-center justify-center shadow-xl overflow-hidden
              ${pkg.bg}
              transition-all duration-300
              ${
                i === 1
                  ? "w-[370px] lg:w-[400px] h-[530px] lg:h-[580px] scale-105 z-10"
                  : "w-[320px] lg:w-[350px] h-[470px] lg:h-[500px] mt-4"
              }
            `}
          >
            {/* Background Image with Overlay */}
            <img
              src={pkg.img}
              alt={pkg.name}
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className={`absolute inset-0 ${pkg.overlay}`} />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center px-7 py-6 h-full justify-between">
              <div>
                <div className="text-white text-5xl lg:text-6xl font-extrabold text-center font-['Russo_One',sans-serif]">
                  {pkg.name}
                </div>
                <div className="text-white text-5xl lg:text-6xl font-extrabold text-center font-['Russo_One',sans-serif] mt-4">
                  {pkg.price}
                </div>
              </div>
              <p className="text-white text-base font-semibold text-center mt-4 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <button
                className={`mt-2 px-8 py-2 rounded-md font-bold text-lg font-['Russo_One',sans-serif] ${pkg.button} transition duration-200 shadow hover:scale-105 cursor-pointer`}
              >
                JOIN NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}