import React, { useState, useEffect } from "react";
import trainer1 from "../../assets/trainer.webp";
import trainer2 from "../../assets/trainer2.webp";
import trainer3 from "../../assets/trainer3.webp";
import bgImage from "../../assets/Shape 1.png";

const trainers = [
  { id: 1, name: "Abhiram", img: trainer1 },
  { id: 2, name: "Arun Raj", img: trainer2 },
  { id: 3, name: "Abhijith", img: trainer3 },
  { id: 4, name: "Jishnu", img: trainer1 },
  { id: 5, name: "Riswan", img: trainer2 },
];

const Trainers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mobileHovered, setMobileHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === trainers.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="trainers-container text-white mt-5 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
        Your Fitness <br /> Goals, Their Expertise
      </h2>

      <p className="text-center text-sm md:text-lg mb-10 text-white/60">
        Our Team Of Certified Trainers Brings Unparalleled Expertise
      </p>

      {/* Mobile View (auto-sliding trainer with color transform) */}
      <div className="md:hidden relative flex items-center justify-center">
        {/* Trainer Card */}
        <div 
          className="relative flex flex-col items-center w-full"
          onTouchStart={() => setMobileHovered(true)}
          onTouchEnd={() => setMobileHovered(false)}
          onMouseEnter={() => setMobileHovered(true)}
          onMouseLeave={() => setMobileHovered(false)}
        >
          <img
            src={bgImage}
            alt="decorative"
            className="absolute bottom-6 w-110 h-110 object-contain opacity-40 pointer-events-none z-0"
          />
          <img
            src={trainers[currentIndex].img}
            alt={trainers[currentIndex].name}
            className={`relative z-10 rounded-lg w-full h-[25rem] object-contain transition duration-500 ${
              mobileHovered ? "grayscale-0" : "grayscale"
            }`}
          />
          <h3 className={`text-lg font-bold mt-4 z-10 transition-colors duration-300 ${
            mobileHovered ? "text-yellow-400" : "text-white"
          }`}>
            {trainers[currentIndex].name}
          </h3>
        </div>
      </div>

      {/* Desktop View (5 trainers in a single row) */}
      <div className="hidden md:grid grid-cols-5 gap-4">
        {trainers.map((trainer, index) => (
          <div 
            key={trainer.id} 
            className="relative flex flex-col items-center group transition-transform duration-300"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={bgImage}
              alt="decorative"
              className="absolute bottom-6 w-110 h-110 object-contain opacity-40 pointer-events-none z-0"
            />
            <img
              src={trainer.img}
              alt={trainer.name}
              className={`relative z-10 rounded-lg w-full h-[28rem] object-contain transition duration-300
                    ${hoveredIndex === index ? "scale-105 grayscale-0" : "grayscale"}`}
            />
            <h3 className={`text-xl font-bold mt-4 z-10 transition-all duration-300
                          ${hoveredIndex === index ? "scale-105 text-red-700" : "text-white"}`}>
              {trainer.name}
            </h3>
          </div>
        ))}
      </div>

      {/* Mobile Slide Indicators */}
      <div className="md:hidden mt-6 flex justify-center gap-2">
        {trainers.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>

      {/* Desktop Slide Indicator */}
      <div className="hidden md:block mt-8 text-center text-2xl font-bold z-10">
        {Array(5).fill("/").map((_, i) => (
          <span
            key={i}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`mx-1 cursor-pointer transition-opacity duration-300
                        ${hoveredIndex === i ? "text-red-700 opacity-100" : "text-white opacity-30"}`}>
            /
          </span>
        ))}
      </div>
    </div>
  );
};

export default Trainers;