import React, { useState } from "react";
import trainer1 from "../../assets/trianer.png";
import trainer2 from "../../assets/trainer2.webp";
import trainer3 from "../../assets/trainer3.webp";
import bgImage from "../../assets/Shape 1.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const trainers = [
  { id: 1, name: "Abhiram", img: trainer1 },
  { id: 2, name: "Arun Raj", img: trainer2 },
  { id: 3, name: "Abhijith", img: trainer3 },
  { id: 4, name: "Jishnu", img: trainer3 }, // Changed names to be unique
  { id: 5, name: "Riswan", img: trainer3 },
];

const Trainers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTrainer = () => {
    setCurrentIndex((prev) => (prev === trainers.length - 1 ? 0 : prev + 1));
  };

  const prevTrainer = () => {
    setCurrentIndex((prev) => (prev === 0 ? trainers.length - 1 : prev - 1));
  };

  return (
    <div className="trainers-container text-white mt-5 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
        Your Fitness <br /> Goals, Their Expertise
      </h2>

      <p className="text-center text-sm md:text-lg mb-10 text-white/60">
        Our Team Of Certified Trainers Brings Unparalleled Expertise
      </p>

      {/* Mobile View (single trainer with arrows) */}
      <div className="md:hidden relative flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={prevTrainer}
          className="absolute left-0 z-20 p-2 rounded-full hover:bg-white/20 transition"
        >
          <FaArrowLeft className="w-6 h-6" />
        </button>

        {/* Trainer Card */}
        <div className="relative flex flex-col items-center w-full">
          <img
            src={bgImage}
            alt="decorative"
            className="absolute bottom-6 w-110 h-110 object-contain opacity-40 pointer-events-none z-0"
          />
          <img
            src={trainers[currentIndex].img}
            alt={trainers[currentIndex].name}
            className="relative z-10 rounded-lg w-full h-[25rem] object-contain filter grayscale transition duration-500 hover:grayscale-0"
          />
          <h3 className="text-lg font-bold mt-4 z-10">
            {trainers[currentIndex].name}
          </h3>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextTrainer}
          className="absolute right-0 z-20 p-2 rounded-full hover:bg-white/20 transition"
        >
          <FaArrowRight className="w-6 h-6" />
        </button>
      </div>

      {/* Desktop View (5 trainers in a single row) */}
      <div className="hidden md:grid grid-cols-5 gap-4">
        {trainers.map((trainer) => (
          <div key={trainer.id} className="relative flex flex-col items-center">
            <img
              src={bgImage}
              alt="decorative"
              className="absolute bottom-6 w-110 h-110 object-contain opacity-40 pointer-events-none z-0"
            />
            <img
              src={trainer.img}
              alt={trainer.name}
              className="relative z-10 rounded-lg w-full h-[28rem] object-contain filter grayscale transition duration-500 hover:grayscale-0"
            />
            <h3 className="text-xl font-bold mt-4 z-10">{trainer.name}</h3>
          </div>
        ))}
      </div>

      {/* Mobile Slide Indicators */}
      <div className="md:hidden mt-6 flex justify-center gap-2">
        {trainers.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>

      {/* Desktop Slide Indicator */}
      <div className="hidden md:block mt-8 text-center text-2xl font-bold z-10">
        {Array(5)
          .fill("/")
          .map((_, i) => (
            <span
              key={i}
              className={`mx-1 ${
                i === 0 ? "text-white opacity-100" : "text-white opacity-30"
              }`}
            >
              /
            </span>
          ))}
      </div>
    </div>
  );
};

export default Trainers;